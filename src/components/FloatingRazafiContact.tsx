"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "@/content/publicSite";

const ASSISTANT_API_URL = "https://portal.razafistore.com/api/assistant/chat";
const ASSISTANT_FALLBACK =
  "Je n'arrive pas à répondre pour le moment. Vous pouvez contacter RAZAFI sur WhatsApp.";
const ASSISTANT_GREETING =
  "Bonjour 👋 Je peux vous expliquer RAZAFI, les offres, le fonctionnement, le matériel ou comment commencer.";

const RAZAFI_PLATFORM_ASSISTANT_CID_KEY =
  "razafi_platform_assistant_conversation_id_v1";
const RAZAFI_PLATFORM_ASSISTANT_MEMORY_TOKEN_KEY =
  "razafi_platform_assistant_memory_token_v1";

function readConversationId(): string | null {
  try {
    const value = window.sessionStorage.getItem(RAZAFI_PLATFORM_ASSISTANT_CID_KEY);
    return /^ast_[0-9a-f]{24}$/.test(String(value || "")) ? value : null;
  } catch {
    return null;
  }
}

function writeConversationId(value: unknown) {
  try {
    const normalized = String(value || "").trim();
    if (/^ast_[0-9a-f]{24}$/.test(normalized)) {
      window.sessionStorage.setItem(RAZAFI_PLATFORM_ASSISTANT_CID_KEY, normalized);
    }
  } catch {}
}

function readMemoryToken(): string | null {
  try {
    const value = window.sessionStorage.getItem(
      RAZAFI_PLATFORM_ASSISTANT_MEMORY_TOKEN_KEY,
    );
    return /^mem_[0-9a-f]{64}$/.test(String(value || "")) ? value : null;
  } catch {
    return null;
  }
}

function writeMemoryToken(value: unknown) {
  try {
    const normalized = String(value || "").trim().toLowerCase();
    if (/^mem_[0-9a-f]{64}$/.test(normalized)) {
      window.sessionStorage.setItem(
        RAZAFI_PLATFORM_ASSISTANT_MEMORY_TOKEN_KEY,
        normalized,
      );
    }
  } catch {}
}

type AssistantMessage = {
  role: "assistant" | "user";
  text: string;
  streaming?: boolean;
};

function getPageContext(pathname: string) {
  const path = pathname || "/";

  if (path === "/guides" || path === "/guides/") {
    return {
      pageContext: "razafi_public_guides_index",
      visibleSections: ["guides_index", "contact", "footer"],
      productContext: "RAZAFI public guides index.",
    };
  }

  if (path.startsWith("/guide/")) {
    return {
      pageContext: "razafi_public_guide",
      visibleSections: ["guide_content", "guide_cta", "footer"],
      productContext: "RAZAFI public guide page.",
    };
  }

  return {
    pageContext: "razafi_public_home",
    visibleSections: [
      "hero",
      "why_razafi",
      "demos",
      "how_to_start",
      "offers",
      "faq",
      "contact",
    ],
    productContext:
      "RAZAFI public website presenting WiFi automation, demos, onboarding and current offers.",
  };
}

function PlatformAssistantWidget() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const [compactPill, setCompactPill] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([
    { role: "assistant", text: ASSISTANT_GREETING },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamHasStarted, setStreamHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const maxTextareaHeight = 112;

  useEffect(() => {
    const timer = window.setTimeout(() => setCompactPill(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: streamHasStarted ? "auto" : "smooth",
      });
    }
  }, [messages, isOpen, streamHasStarted]);

  function autoResizeTextarea() {
    const element = textareaRef.current;
    if (!element) return;
    element.style.height = "auto";
    const scrollHeight = element.scrollHeight;
    element.style.height = `${Math.min(scrollHeight, maxTextareaHeight)}px`;
    element.style.overflowY = scrollHeight > maxTextareaHeight ? "auto" : "hidden";
  }

  function resetTextareaHeight() {
    const element = textareaRef.current;
    if (!element) return;
    element.style.height = "";
    element.style.overflowY = "hidden";
  }

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: trimmed },
      { role: "assistant", text: "", streaming: true },
    ]);
    setInput("");
    resetTextareaHeight();
    setIsLoading(true);
    setStreamHasStarted(false);

    let streamedText = "";

    const updatePendingAssistant = (nextText: string, streaming = true) => {
      setMessages((previous) => {
        const next = [...previous];
        for (let index = next.length - 1; index >= 0; index -= 1) {
          if (next[index]?.role === "assistant" && next[index]?.streaming) {
            next[index] = { role: "assistant", text: nextText, streaming };
            return next;
          }
        }
        return [...next, { role: "assistant", text: nextText, streaming }];
      });
    };

    const appendPendingAssistant = (delta: string) => {
      if (!delta) return;
      streamedText += delta;
      setStreamHasStarted(true);
      updatePendingAssistant(streamedText, true);
    };

    try {
      const context = getPageContext(pathname);
      const response = await fetch(ASSISTANT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream, application/json",
        },
        body: JSON.stringify({
          context: "platform_prospect",
          message: trimmed,
          stream: true,
          page_path: pathname,
          conversation_id: readConversationId(),
          memory_token: readMemoryToken() || undefined,
          live_data: {
            page_context: context.pageContext,
            site_language: "fr",
            visible_sections: context.visibleSections,
            main_cta: "whatsapp_or_demo",
            product_context: context.productContext,
            context_version: "ANU-WEB-1",
          },
          ui_snapshot: {
            page_context: context.pageContext,
            site_language: "fr",
            visible_sections: context.visibleSections,
            main_cta: "whatsapp_or_demo",
            product_context: "RAZAFI public website",
            context_version: "ANU-WEB-1",
          },
        }),
      });

      const contentType = String(response.headers.get("content-type") || "").toLowerCase();

      // Safe fallback: if the backend streaming flag is off or an older backend
      // is still deployed, the exact same endpoint returns the normal JSON shape.
      if (!contentType.includes("text/event-stream")) {
        const data = await response.json();
        if (!response.ok) throw new Error(data?.error || "assistant_error");
        writeConversationId(data?.conversation_id);
        writeMemoryToken(data?.memory_token);
        streamedText = String(data?.answer || ASSISTANT_FALLBACK);
        setStreamHasStarted(Boolean(streamedText));
        updatePendingAssistant(streamedText, false);
        return;
      }

      if (!response.ok || !response.body) {
        throw new Error("assistant_stream_unavailable");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let streamDone = false;

      const handleEventBlock = (block: string) => {
        if (!block.trim()) return;
        let eventName = "message";
        const dataLines: string[] = [];

        for (const rawLine of block.split("\n")) {
          const line = rawLine.replace(/\r$/, "");
          if (line.startsWith("event:")) {
            eventName = line.slice(6).trim() || "message";
          } else if (line.startsWith("data:")) {
            dataLines.push(line.slice(5).trimStart());
          }
        }

        if (!dataLines.length) return;
        let payload: any = {};
        try {
          payload = JSON.parse(dataLines.join("\n"));
        } catch {
          return;
        }

        if (eventName === "meta" || eventName === "done") {
          writeConversationId(payload?.conversation_id);
          writeMemoryToken(payload?.memory_token);
        }

        if (eventName === "delta") {
          appendPendingAssistant(String(payload?.text || ""));
        } else if (eventName === "done") {
          streamDone = true;
          updatePendingAssistant(streamedText || ASSISTANT_FALLBACK, false);
        } else if (eventName === "error") {
          throw new Error(String(payload?.error || "assistant_stream_error"));
        }
      };

      while (!streamDone) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");

        let boundary = buffer.indexOf("\n\n");
        while (boundary !== -1) {
          const block = buffer.slice(0, boundary);
          buffer = buffer.slice(boundary + 2);
          handleEventBlock(block);
          boundary = buffer.indexOf("\n\n");
        }
      }

      buffer += decoder.decode().replace(/\r\n/g, "\n");
      if (buffer.trim()) handleEventBlock(buffer);

      if (!streamedText.trim()) {
        updatePendingAssistant(ASSISTANT_FALLBACK, false);
      } else if (!streamDone) {
        // Connection ended after a validated answer had started revealing.
        // Keep the received text rather than replacing it with an unrelated error.
        updatePendingAssistant(streamedText, false);
      }
    } catch {
      updatePendingAssistant(streamedText.trim() || ASSISTANT_FALLBACK, false);
    } finally {
      setIsLoading(false);
      setStreamHasStarted(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {isOpen ? (
        <div
          className="fixed bottom-24 left-3 right-3 z-[60] flex max-h-[70vh] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_45px_rgba(0,0,0,0.14)] sm:left-auto sm:right-4 sm:w-full sm:max-w-sm"
          role="dialog"
          aria-label="Assistant RAZAFI"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-4 py-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm font-semibold text-neutral-900">Assistant RAZAFI</span>
              </div>
              <p className="mt-0.5 text-xs text-neutral-400">Posez une question sur RAZAFI.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer l'assistant"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) =>
              message.role === "assistant" ? (
                message.text ? (
                  <div key={index} className="flex justify-start" aria-live={message.streaming ? "polite" : undefined}>
                    <p className="max-w-[84%] whitespace-pre-line rounded-2xl rounded-tl-sm bg-neutral-100 px-3.5 py-2.5 text-sm leading-relaxed text-neutral-800">
                      {message.text}
                    </p>
                  </div>
                ) : null
              ) : (
                <div key={index} className="flex justify-end">
                  <p className="max-w-[84%] whitespace-pre-line rounded-2xl rounded-tr-sm bg-neutral-900 px-3.5 py-2.5 text-sm leading-relaxed text-white">
                    {message.text}
                  </p>
                </div>
              ),
            )}

            {isLoading && !streamHasStarted ? (
              <div className="flex justify-start">
                <p className="rounded-2xl rounded-tl-sm bg-neutral-100 px-3.5 py-2.5 text-sm italic text-neutral-400">
                  RAZAFI écrit…
                </p>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex shrink-0 items-end gap-2 border-t border-neutral-100 px-3 py-3">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                autoResizeTextarea();
              }}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder="Écrivez votre question…"
              rows={1}
              style={{ minHeight: "40px", maxHeight: `${maxTextareaHeight}px` }}
              className="flex-1 resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm leading-relaxed text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white disabled:opacity-40"
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              aria-label="Envoyer"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-700 disabled:opacity-30"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir l'assistant RAZAFI"
          title="Assistant RAZAFI"
          className="group fixed bottom-3 right-1 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-[0_5px_22px_rgba(0,0,0,0.10)] transition hover:border-neutral-300 hover:shadow-[0_6px_26px_rgba(0,0,0,0.14)] md:bottom-[4.15rem] md:h-12 md:w-12 2xl:w-auto 2xl:gap-2 2xl:px-4"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <MessageCircle className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" />
          </span>
          <span className="hidden text-sm font-medium 2xl:inline">
            {compactPill ? "Aide" : "Assistant RAZAFI"}
          </span>
          <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-full bg-neutral-950 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 2xl:hidden">
            Assistant RAZAFI
          </span>
        </button>
      )}
    </>
  );
}

export default function FloatingRazafiContact() {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter RAZAFI sur WhatsApp"
        title="WhatsApp RAZAFI"
        className="group fixed bottom-3 right-1 z-[60] hidden transition hover:scale-[1.03] active:scale-95 md:block"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] p-0.5 shadow-xl md:h-12 md:w-12 2xl:w-auto 2xl:justify-start 2xl:gap-2.5 2xl:px-1.5 2xl:pr-4">
          <img
            src="/images/moi.png"
            alt="RAZAFI"
            className="h-10 w-10 rounded-full bg-white object-cover object-top shadow-sm md:h-11 md:w-11"
          />
          <span className="hidden text-sm font-bold text-white 2xl:inline">WhatsApp</span>
        </div>
        <span className="pointer-events-none absolute bottom-1/2 right-full mr-2 translate-y-1/2 whitespace-nowrap rounded-full bg-neutral-950 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 2xl:hidden">
          WhatsApp
        </span>
      </a>
      <PlatformAssistantWidget />
    </>
  );
}
