import type { SupabaseClient } from "@supabase/supabase-js";
import type { BoardCounts, BoardEntry, BoardEntryType, BoardFormData } from "@/types/board";

const BOARD_TABLE = "board_entries";
const ATTACHMENT_BUCKET = "board-attachments";

function getImageBucketName(type: BoardEntryType) {
  return type === "blog" ? "blog-images" : "press-images";
}

function createStorageFileName(file: File) {
  const extension = file.name.split(".").pop();
  return `${Date.now()}.${extension}`;
}

async function uploadPublicFile(
  supabase: SupabaseClient,
  bucketName: string,
  file: File
) {
  const fileName = createStorageFileName(file);
  const { error } = await supabase.storage.from(bucketName).upload(fileName, file);

  if (error) {
    throw error;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucketName).getPublicUrl(fileName);

  return {
    fileName,
    publicUrl,
  };
}

function formatBoardDateForStorage(date: string) {
  return date.replace(/-/g, ".");
}

function formatBoardDateForInput(date: string) {
  return date.replace(/\./g, "-");
}

function buildBoardEntryPayload(
  formData: BoardFormData,
  options: {
    imageUrl?: string;
    attachmentUrl?: string;
    attachmentName?: string;
    hasAttachment?: boolean;
  } = {}
) {
  return {
    type: formData.type,
    title: formData.title,
    content: formData.content || null,
    date: formatBoardDateForStorage(formData.date),
    is_important: formData.isImportant,
    has_attachment: options.hasAttachment ?? false,
    attachment_url: options.attachmentUrl ?? null,
    attachment_name: options.attachmentName ?? null,
    source: formData.source || null,
    excerpt: formData.excerpt || null,
    image_url: options.imageUrl ?? null,
    description: formData.description || null,
  };
}

export function createImagePreview(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export function buildBoardSubmissionFormData(params: {
  formData: BoardFormData;
  imageFile?: File | null;
  attachmentFile?: File | null;
  id?: string | number;
  existingImageUrl?: string;
}) {
  const payload = new FormData();
  const { formData, imageFile, attachmentFile, id, existingImageUrl } = params;

  payload.set("type", formData.type);
  payload.set("title", formData.title);
  payload.set("content", formData.content);
  payload.set("date", formData.date);
  payload.set("isImportant", String(formData.isImportant));
  payload.set("source", formData.source);
  payload.set("excerpt", formData.excerpt);
  payload.set("description", formData.description);

  if (typeof id !== "undefined") {
    payload.set("id", String(id));
  }

  if (existingImageUrl) {
    payload.set("existingImageUrl", existingImageUrl);
  }

  if (imageFile) {
    payload.set("imageFile", imageFile);
  }

  if (attachmentFile) {
    payload.set("attachmentFile", attachmentFile);
  }

  return payload;
}

export async function fetchBoardEntries(
  supabase: SupabaseClient,
  filter: "all" | BoardEntryType
) {
  let query = supabase.from(BOARD_TABLE).select("*").order("date", { ascending: false });

  if (filter !== "all") {
    query = query.eq("type", filter);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return (data ?? []) as BoardEntry[];
}

export async function fetchBoardCounts(supabase: SupabaseClient) {
  const { data, error } = await supabase.from(BOARD_TABLE).select("type");

  if (error) {
    throw error;
  }

  const rows = data ?? [];

  return {
    total: rows.length,
    notice: rows.filter((entry) => entry.type === "notice").length,
    press: rows.filter((entry) => entry.type === "press").length,
    blog: rows.filter((entry) => entry.type === "blog").length,
  } satisfies BoardCounts;
}

export async function fetchBoardEntryById(supabase: SupabaseClient, id: string | number) {
  const { data, error } = await supabase
    .from(BOARD_TABLE)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data as BoardEntry;
}

export function toBoardFormData(entry: BoardEntry): BoardFormData {
  return {
    type: entry.type,
    title: entry.title,
    content: entry.content || "",
    date: formatBoardDateForInput(entry.date),
    isImportant: entry.is_important || false,
    source: entry.source || "",
    excerpt: entry.excerpt || "",
    description: entry.description || "",
  };
}

export async function createBoardEntry(
  supabase: SupabaseClient,
  params: {
    formData: BoardFormData;
    imageFile?: File | null;
    attachmentFile?: File | null;
  }
) {
  const { formData, imageFile, attachmentFile } = params;
  let imageUrl = "";
  let attachmentUrl = "";
  let attachmentName = "";

  if (imageFile && (formData.type === "blog" || formData.type === "press")) {
    const upload = await uploadPublicFile(supabase, getImageBucketName(formData.type), imageFile);
    imageUrl = upload.publicUrl;
  }

  if (attachmentFile) {
    const upload = await uploadPublicFile(supabase, ATTACHMENT_BUCKET, attachmentFile);
    attachmentUrl = upload.publicUrl;
    attachmentName = attachmentFile.name;
  }

  const { error } = await supabase.from(BOARD_TABLE).insert(
    buildBoardEntryPayload(formData, {
      imageUrl,
      attachmentUrl,
      attachmentName,
      hasAttachment: Boolean(attachmentFile),
    })
  );

  if (error) {
    throw error;
  }
}

export async function updateBoardEntry(
  supabase: SupabaseClient,
  params: {
    id: string | number;
    formData: BoardFormData;
    imageFile?: File | null;
    existingImageUrl?: string;
  }
) {
  const { id, formData, imageFile, existingImageUrl = "" } = params;
  let imageUrl = existingImageUrl;

  if (imageFile && (formData.type === "blog" || formData.type === "press")) {
    const upload = await uploadPublicFile(supabase, getImageBucketName(formData.type), imageFile);
    imageUrl = upload.publicUrl;
  }

  const { error } = await supabase
    .from(BOARD_TABLE)
    .update(
      buildBoardEntryPayload(formData, {
        imageUrl,
      })
    )
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function deleteBoardEntry(supabase: SupabaseClient, id: number) {
  const { error } = await supabase.from(BOARD_TABLE).delete().eq("id", id);

  if (error) {
    throw error;
  }
}
