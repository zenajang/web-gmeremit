"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { TURNSTILE_SITE_KEY } from "../../constants";

interface TurnstileRenderOptions {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  theme?: "light" | "dark" | "auto";
  language?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: TurnstileRenderOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface TurnstileFieldProps {
  onTokenChange: (token: string) => void;
}

const TurnstileField = ({ onTokenChange }: TurnstileFieldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isScriptReady, setIsScriptReady] = useState(false);

  const updateTurnstileToken = useCallback((token: string) => onTokenChange(token), [onTokenChange]);

  useEffect(() => {
    if (!isScriptReady || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: "light",
      callback: updateTurnstileToken,
      "expired-callback": () => updateTurnstileToken(""),
      "error-callback": () => updateTurnstileToken(""),
    });

    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isScriptReady, updateTurnstileToken]);

  if (!TURNSTILE_SITE_KEY) return null;

  return (
    <div className={S.InquiryTurnstileFieldWrapper}>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
        onReady={() => setIsScriptReady(true)}
      />
      <div ref={containerRef} />
    </div>
  );
};

export default TurnstileField;
