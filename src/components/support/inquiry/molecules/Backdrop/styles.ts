export const InquiryBackdropRoot = "pointer-events-none absolute inset-0 overflow-hidden";

export const InquiryBackdropDots = "absolute inset-0 opacity-[0.03]";

export const InquiryBackdropDotsPattern = {
  backgroundImage: "radial-gradient(var(--color-primary) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export const InquiryBackdropBlobTopLeft =
  "absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-3xl";

export const InquiryBackdropBlobRight =
  "absolute top-20 -right-32 h-[400px] w-[400px] rounded-full bg-primary/[0.07] blur-3xl";

export const InquiryBackdropBlobBottom =
  "absolute -bottom-20 right-20 h-[300px] w-[300px] rounded-full bg-primary/[0.07] blur-3xl";
