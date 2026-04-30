"use client";

import { useEffect, useState, useCallback, createContext, useContext } from "react";
import { HiCheckCircle, HiXCircle, HiXMark, HiExclamationTriangle } from "react-icons/hi2";

type ToastType = "success" | "error";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ConfirmState {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

interface ToastContextValue {
  toast: {
    success: (message: string) => void;
    error: (message: string) => void;
  };
  confirm: (message: string) => Promise<boolean>;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx.toast;
}

export function useConfirm() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useConfirm must be used within ToastProvider");
  return ctx.confirm;
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: number) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onRemove(toast.id), 200);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const isSuccess = toast.type === "success";

  return (
    <div
      className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg border transition-all duration-200 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } ${
        isSuccess
          ? "bg-white border-green-200 text-gray-900"
          : "bg-white border-red-200 text-gray-900"
      }`}
    >
      {isSuccess ? (
        <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
      ) : (
        <HiXCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
      )}
      <span className="text-sm font-semibold">{toast.message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => onRemove(toast.id), 200);
        }}
        aria-label="알림 닫기"
        className="ml-2 p-0.5 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <HiXMark className="w-4 h-4" />
      </button>
    </div>
  );
}

function ConfirmModal({ state }: { state: ConfirmState }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={state.onCancel}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 animate-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
            <HiExclamationTriangle className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-[15px] font-semibold text-gray-900">{state.message}</p>
        </div>
        <div className="flex gap-2.5 justify-end">
          <button
            onClick={state.onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
          >
            취소
          </button>
          <button
            onClick={state.onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [confirmState, setConfirmState] = useState<ConfirmState | null>(null);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: ToastType) => {
    setToasts((prev) => [...prev, { id: ++toastId, message, type }]);
  }, []);

  const toast = {
    success: (message: string) => addToast(message, "success"),
    error: (message: string) => addToast(message, "error"),
  };

  const confirm = useCallback((message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setConfirmState({
        message,
        onConfirm: () => {
          setConfirmState(null);
          resolve(true);
        },
        onCancel: () => {
          setConfirmState(null);
          resolve(false);
        },
      });
    });
  }, []);

  return (
    <ToastContext.Provider value={{ toast, confirm }}>
      {children}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onRemove={removeToast} />
        ))}
      </div>
      {confirmState && <ConfirmModal state={confirmState} />}
    </ToastContext.Provider>
  );
}
