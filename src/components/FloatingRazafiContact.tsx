"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUp, X } from "lucide-react";

const whatsappUrl = "https://wa.me/261340500592";

const targetCards = [
  {
    title: "Particuliers",
    text: "Votre connexion ne doit pas rester inutilisée. Partagez-la avec votre voisinage et créez une nouvelle source de revenus.",
  },
  {
    title: "Pour les Fokontany",
    text: "Une seule connexion peut faire vivre un réseau communautaire entier.",
  },
  {
    title: "Espaces connectés",
    text: "Idéal pour les quartiers, snacks, boutiques, espaces publics et zones communautaires connectées.",
  },
];

type FaqItem = {
  q: string;
  a: string;
  guideHref?: string;
  guideLabel?: string;
};

const faqItems: FaqItem[] = [
  {
    q: "À qui s’adresse RAZAFI ?",
    a: "RAZAFI s’adresse aux particuliers, fokontany, snacks, boutiques et espaces publics disposant déjà d’une connexion Internet et souhaitant la transformer en activité WiFi moderne dans leur zone.",
  },
  {
    q: "Est-ce que RAZAFI fournit le matériel ?",
    a: "Oui. RAZAFI fournit et installe les équipements nécessaires selon votre projet, notamment le routeur MikroTik et les équipements WiFi adaptés à votre projet.",
  },
  {
    q: "Peut-on commencer petit puis agrandir la couverture ?",
    a: "Oui. Vous pouvez commencer avec une petite installation puis étendre progressivement la couverture WiFi selon les besoins de votre zone, jusqu’à couvrir un fokontany ou une grande zone communautaire.",
  },
  {
    q: "Peut-on utiliser son propre nom WiFi ?",
    a: "Oui. Vous pouvez personnaliser le nom du réseau selon votre activité, votre boutique, votre snack ou votre fokontany.",
  },
  {
    q: "Quels appareils peuvent se connecter ?",
    a: "Les utilisateurs peuvent se connecter depuis leurs téléphones, tablettes ou ordinateurs tant qu’ils reçoivent le signal WiFi.",
  },
  {
    q: "Les utilisateurs ont-ils besoin d’une application ?",
    a: "Non. Les utilisateurs se connectent simplement au WiFi, paient via Mobile Money puis reçoivent automatiquement leur accès Internet.",
  },
  {
    q: "Est-ce que RAZAFI utilise l’intelligence artificielle ?",
    a: "Oui. RAZAFI intègre un assistant IA pour rendre le WiFi plus simple à utiliser et plus facile à gérer. Il guide les utilisateurs, aide les propriétaires à mieux comprendre leur activité et réduit le temps passé sur les tâches répétitives. Moins de complications, plus de temps pour vous, plus de liberté.",
    guideHref: "/guide/wifi-intelligence-artificielle",
    guideLabel: "Lire le guide : WiFi et intelligence artificielle",
  },
  {
    q: "Puis-je suivre mon réseau et mon activité à distance ?",
    a: "Oui. Le réseau fonctionne automatiquement 24h/24 sans intervention humaine. Suivez les connexions, les ventes et l’activité directement depuis votre téléphone. Les paiements des utilisateurs sont reçus par la plateforme RAZAFI, puis votre part est versée selon l’organisation prévue avec vous.",
  },
  {
    q: "Peut-on suivre plusieurs réseaux ou plusieurs sites ?",
    a: "Oui. La plateforme RAZAFI permet de suivre plusieurs réseaux WiFi et plusieurs sites depuis un seul tableau de bord.",
  },
  {
    q: "Est-ce qu’il y a un abonnement mensuel RAZAFI ?",
    a: "Non. RAZAFI fonctionne avec un système de commission sur les ventes réalisées via le réseau WiFi.",
  },
  {
    q: "Les revenus sont-ils garantis ?",
    a: "Non. Les revenus dépendent du nombre d’utilisateurs, de l’emplacement et de la visibilité du réseau dans votre zone. Comme toute activité locale, il est important de faire connaître votre réseau WiFi autour de vous.",
  },
];

const HERO_FEATURES = [
  "Assistant IA intégré",
  "Activation instantanée",
  "Paiement mobile automatique",
  "Dashboard propriétaire à distance",
];

// -----------------------------------------------------------------------
// Phase 5B: Platform Prospect Assistant Widget (shared, extracted from homepage)
// -----------------------------------------------------------------------

const ASSISTANT_API_URL = "https://portal.razafistore.com/api/assistant/chat";

const ASSISTANT_FALLBACK =
  "Je n'arrive pas à répondre pour le moment. Vous pouvez contacter RAZAFI sur WhatsApp.";

const ASSISTANT_GREETING =
  "Bonjour 👋 Je peux vous expliquer RAZAFI, le fonctionnement, les revenus, le matériel ou comment commencer.";

const QUICK_CHIPS: string[] = [];

const RAZAFI_PLATFORM_ASSISTANT_CID_KEY =
  "razafi_platform_assistant_conversation_id_v1";

function readPlatformAssistantConversationId(): string | null {
  try {
    if (typeof window === "undefined") return null;
    const v = window.sessionStorage.getItem(RAZAFI_PLATFORM_ASSISTANT_CID_KEY);
    return /^ast_[0-9a-f]{24}$/.test(String(v || "")) ? v : null;
  } catch {
    return null;
  }
}

function writePlatformAssistantConversationId(value: unknown) {
  try {
    if (typeof window === "undefined") return;
    const v = String(value || "").trim();
    if (/^ast_[0-9a-f]{24}$/.test(v)) {
      window.sessionStorage.setItem(RAZAFI_PLATFORM_ASSISTANT_CID_KEY, v);
    }
  } catch {}
}

type AssistantMessage = {
  role: "assistant" | "user";
  text: string;
};

function PlatformAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [compactPill, setCompactPill] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([
    { role: "assistant", text: ASSISTANT_GREETING },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // WhatsApp-style auto-resize helpers
  const RZ_MAX_H = 112; // ~4 lines
  function autoResizeTextarea() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const sh = el.scrollHeight;
    el.style.height = Math.min(sh, RZ_MAX_H) + "px";
    el.style.overflowY = sh > RZ_MAX_H ? "auto" : "hidden";
  }
  function resetTextareaHeight() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "";
    el.style.overflowY = "hidden";
  }

  // Shrink pill label after 5 s if still closed
  useEffect(() => {
    const timer = window.setTimeout(() => setCompactPill(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    resetTextareaHeight();
    setIsLoading(true);

    try {
      const conversationId = readPlatformAssistantConversationId();
      const site_knowledge = {
        hero_title: "Plateforme pour votre zone WiFi",
        hero_subtitle: "Compatible avec votre point d’accès préféré.",
        hero_features: HERO_FEATURES,
        value_proposition:
          "RAZAFI transforme votre connexion Internet (Starlink ou fibre) en service WiFi payant automatisé. Vos clients choisissent un forfait, paient depuis leur téléphone via Mobile Money, reçoivent un code et se connectent. Vous suivez les ventes et les connexions depuis votre tableau de bord, à distance.",
        key_strengths: [
          "Paiement mobile automatique",
          "Activation instantanée",
          "Dashboard propriétaire à distance",
          "Assistant IA intégré",
          "Compatible Starlink, fibre, tout point d’accès",
        ],
        target_customers: targetCards
          .map((c) => c.title + ": " + c.text.slice(0, 100))
          .slice(0, 3),
        faq_summary: faqItems
          .map((f) => f.q.slice(0, 80) + " → " + f.a.slice(0, 120))
          .slice(0, 6),
        demo_cta_label: "Voir les démos",
        demo_options: ["Démo propriétaire", "Démo client"],
        contact_cta_label: "Parler sur WhatsApp",
        compatibility_note:
          "RAZAFI est compatible avec Starlink, fibre et tout point d’accès WiFi configuré en mode AP/bridge. Nous recommandons le MikroTik hAP ax² pour les petits et moyens sites.",
        pricing_note:
          "Pas d’abonnement mensuel fixe. RAZAFI fonctionne avec une commission sur les ventes réalisées. Le coût d’installation dépend du projet.",
      };

      const res = await fetch(ASSISTANT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: "platform_prospect",
          message: trimmed,
          page_path: "/",
          conversation_id: conversationId,
          live_data: {
            page_context: "razafi_public_home",
            site_language: "fr",
            visible_sections: [
              "hero",
              "how_it_works",
              "owner_value",
              "demo",
              "faq",
              "contact",
            ],
            main_cta: "whatsapp_or_demo",
            product_context:
              "RAZAFI helps Starlink/fibre owners sell WiFi access with automatic portal, payment, code delivery, and owner dashboard.",
            context_version: "G.4.0",
            site_knowledge,
          },
        }),
      });
      const data = await res.json();
      writePlatformAssistantConversationId(data?.conversation_id);
      const answer: string = data?.answer || ASSISTANT_FALLBACK;
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: ASSISTANT_FALLBACK },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
    // Shift+Enter: textarea inserts newline → onChange fires → autoResize
  }

  return (
    <>
      {/* ── Open panel ── */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-3 left-3 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:left-auto sm:right-4 sm:w-full sm:max-w-sm"
          style={{ maxHeight: "70vh" }}
          role="dialog"
          aria-label="Assistant RAZAFI"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-4 py-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm font-semibold text-neutral-900">
                  Assistant RAZAFI
                </span>
              </div>
              <p className="mt-0.5 text-xs text-neutral-400">
                Posez une question sur la plateforme.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer l'assistant"
              className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) =>
              m.role === "assistant" ? (
                <div key={i} className="flex justify-start">
                  <p className="max-w-[82%] rounded-2xl rounded-tl-sm bg-neutral-100 px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line text-neutral-800">
                    {m.text}
                  </p>
                </div>
              ) : (
                <div key={i} className="flex justify-end">
                  <p className="max-w-[82%] rounded-2xl rounded-tr-sm bg-neutral-900 px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line text-white">
                    {m.text}
                  </p>
                </div>
              )
            )}

            {isLoading && (
              <div className="flex justify-start">
                <p className="rounded-2xl rounded-tl-sm bg-neutral-100 px-3.5 py-2.5 text-sm text-neutral-400 italic">
                  RAZAFI écrit…
                </p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick chips — shown only when no user message sent yet */}
          {messages.length === 1 && (
            <div className="flex shrink-0 flex-wrap gap-1.5 px-4 pb-3">
              {QUICK_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => sendMessage(chip)}
                  disabled={isLoading}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 transition hover:border-neutral-400 hover:bg-white disabled:opacity-40"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Input row */}
          <div className="flex shrink-0 items-end gap-2 border-t border-neutral-100 px-3 py-3">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                autoResizeTextarea();
              }}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder="Écrivez votre question…"
              rows={1}
              style={{ minHeight: "40px", maxHeight: `${RZ_MAX_H}px`, overflowY: "hidden" }}
              className="flex-1 resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm leading-relaxed text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-400 focus:bg-white disabled:opacity-40"
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              aria-label="Envoyer"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-700 disabled:opacity-30"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── Closed pill — hidden while panel is open ── */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir l'assistant RAZAFI"
          className="fixed bottom-24 right-4 z-50 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition hover:shadow-[0_4px_24px_rgba(0,0,0,0.16)] hover:border-neutral-300"
        >
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-green-400" />
          <span className="text-sm font-medium text-neutral-800">
            {compactPill ? "Aide" : "Assistant RAZAFI"}
          </span>
        </button>
      )}
    </>
  );
}

/**
 * FloatingRazafiContact
 * Shared floating contact block: WhatsApp button + Assistant RAZAFI widget.
 * Used on the homepage and on guide/article pages so both keep an identical
 * floating contact experience. This is a Client Component so it can be
 * dropped into Server Components (like pages exporting `metadata`) without
 * turning the whole page into a client component.
 */
export default function FloatingRazafiContact() {
  return (
    <>
      {/* WhatsApp floating button — mobile: circular green photo bubble · desktop: photo + label */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter RAZAFI sur WhatsApp"
        className="fixed bottom-4 right-4 z-50 transition hover:scale-[1.02] active:scale-95"
      >
        <div className="flex items-center rounded-full bg-transparent p-0 shadow-xl transition md:gap-3 md:bg-[#25D366] md:p-2 md:py-2 md:pl-2 md:pr-5">
          <img
            src="/images/moi.png"
            alt="RAZAFI"
            className="h-14 w-14 rounded-full bg-white object-cover object-top shadow-md md:h-12 md:w-12"
          />
          <span className="hidden text-sm font-bold text-white md:inline">
            WhatsApp
          </span>
        </div>
      </a>

      {/* Platform prospect assistant — above WhatsApp, never interferes */}
      <PlatformAssistantWidget />
    </>
  );
}
