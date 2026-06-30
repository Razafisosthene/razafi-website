"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Wifi,
  Smartphone,
  Router,
  MapPin,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  X,
  ArrowUp,
} from "lucide-react";

const whatsappUrl = "https://wa.me/261340500592";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const targetCards = [
  {
    icon: Wifi,
    title: "Particuliers",
    text: "Votre connexion ne doit pas rester inutilisée. Partagez-la avec votre voisinage et créez une nouvelle source de revenus.",
  },
  {
    icon: MapPin,
    title: "Pour les Fokontany",
    text: "Une seule connexion peut faire vivre un réseau communautaire entier.",
  },
  {
    icon: Smartphone,
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

// ── Hero animated feature cycle ─────────────────────────────────────────────
const HERO_FEATURES = [
  "Assistant IA intégré",
  "Activation instantanée",
  "Paiement mobile automatique",
  "Dashboard propriétaire à distance",
];

function HeroFeatureCycle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % HERO_FEATURES.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div
      className="mx-auto mt-5 flex h-12 max-w-xl items-center justify-center overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <motion.span
        key={shouldReduceMotion ? 0 : index}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        animate={shouldReduceMotion ? { opacity: 1, y: 0 } : visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.38, ease: "easeInOut" }}
        className="text-[18px] font-semibold whitespace-nowrap text-blue-600 sm:text-xl md:text-3xl lg:text-4xl"
      >
        {shouldReduceMotion ? HERO_FEATURES[0] : HERO_FEATURES[index]}
      </motion.span>
    </div>
  );
}

// ── Hero demo dropdown button ────────────────────────────────────────────────
function HeroDemoButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/90 px-7 py-4 text-sm font-semibold text-neutral-950 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-neutral-300 hover:bg-white sm:w-auto md:text-base"
      >
        <span aria-hidden="true">▶</span>
        <span>Voir les démos</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute left-1/2 z-30 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl"
        >
          <a
            href="/demo/demo-admin"
            className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">🖥️</span>
            Démo propriétaire
          </a>
          <div className="mx-4 h-px bg-neutral-100" />
          <a
            href="/demo/demo-user"
            className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">📱</span>
            Démo client
          </a>
        </motion.div>
      )}
    </div>
  );
}
// ── End hero components ──────────────────────────────────────────────────────

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// -----------------------------------------------------------------------
// Phase 5B: Platform Prospect Assistant Widget
// -----------------------------------------------------------------------

const ASSISTANT_API_URL =
  "https://portal.razafistore.com/api/assistant/chat";

const ASSISTANT_FALLBACK =
  "Je n'arrive pas à répondre pour le moment. Vous pouvez contacter RAZAFI sur WhatsApp.";

const ASSISTANT_GREETING =
  "Bonjour 👋 Je peux vous expliquer RAZAFI, le fonctionnement, les revenus, le matériel ou comment commencer.";

const QUICK_CHIPS: string[] = [];

// Patch F.2: platform prospect conversation_id persistence
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
      // G.4: build safe public site_knowledge from page constants — no PII, no internal IDs
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
          // G.3B + G.4: safe static page context + structured site knowledge — no PII, no tracking
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
      // Patch F.2: persist conversation_id for multi-turn memory
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

// -----------------------------------------------------------------------
// End Phase 5B widget
// -----------------------------------------------------------------------

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:py-4">
          <a href="#">
            <Image
              src="/images/logo-full.png"
              alt="RAZAFI"
              width={150}
              height={40}
              className="h-9 w-auto md:h-11"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <a href="#pour-qui" className="transition hover:text-black">
              Pour qui ?
            </a>
            <a href="#faq" className="transition hover:text-black">
              FAQ
            </a>
          </nav>
        <a
  href="https://portal.razafistore.com/admin/login.html"
  className="rounded-full bg-black px-3 py-2 text-xs font-semibold text-white transition hover:scale-105 md:px-5 md:py-2.5 md:text-sm"
>
  Espace propriétaire
</a>

        </div>
      </header>

      <section className="relative overflow-hidden px-5 pb-16 pt-28 md:pb-16 md:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeUp}
          className="mx-auto max-w-6xl text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-sm">
            WiFi communautaire moderne
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Plateforme pour votre zone WiFi
          </h1>

          <HeroFeatureCycle />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-neutral-500 whitespace-nowrap sm:text-base">
            Compatible avec votre point d’accès préféré.
          </p>

          <div className="mx-auto mt-7 flex max-w-4xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <HeroDemoButton />
          </div>

          <div className="mt-5 flex justify-center">
            <a
              href="#faq"
              className="inline-flex w-auto min-w-[190px] items-center justify-center rounded-full bg-black px-10 py-4 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(0,0,0,0.28)] ring-1 ring-white/20 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-neutral-900 md:min-w-56 md:text-base"
            >
              En savoir plus
            </a>
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-14">
        <Reveal className="mx-auto max-w-5xl rounded-[2.5rem] bg-neutral-950 px-8 py-12 text-center text-white md:px-16">
          <Sparkles className="mx-auto h-10 w-10 text-blue-400" />
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
            Simple. Moderne. Automatique.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            RAZAFI transforme une simple connexion Starlink ou Fibre en réseau
            WiFi public prêt à être utilisé.
          </p>

          <div className="mx-auto mt-4 grid max-w-3xl gap-4 text-xl font-medium md:grid-cols-3">
            <div>Vos utilisateurs se connectent.</div>
            <div>Ils paient.</div>
            <div>Le système fonctionne.</div>
          </div>

          <p className="mt-4 text-neutral-400">Portal powered by RAZAFI.</p>
        </Reveal>
      </section>

      <section id="pour-qui" className="px-5 py-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Pour qui ?
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-4">
            {targetCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-[1.5rem] border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:block md:rounded-[1.75rem] md:p-8"
              >
                <item.icon className="mt-1 h-8 w-8 shrink-0 text-blue-600 md:mt-0 md:h-10 md:w-10" />
                <div>
                  <h3 className="text-xl font-semibold md:mt-8 md:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-base leading-6 text-neutral-600 md:mt-4">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
          <Reveal className="order-2 md:order-1">
            <div className="overflow-hidden rounded-[1.75rem] bg-neutral-100 shadow-sm">
              <Image
                src="/images/mikrotik-router.jpg"
                alt="Installation MikroTik RAZAFI"
                width={1200}
                height={900}
                className="h-72 w-full object-contain md:h-[390px]"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Commencer simplement.
            </h2>
            <p className="mt-4 text-base leading-6 text-neutral-600 md:text-lg">
              Il est possible de démarrer avec une connexion Starlink ou Fibre,
              un routeur MikroTik et les équipements WiFi adaptés à votre zone.
            </p>

            <div className="mt-5 grid gap-3">
              {[
                ["Connexion", "Une connexion Starlink ou Fibre existante."],
                ["Routeur", "Un routeur MikroTik fourni et configuré."],
                ["Points WiFi", "Équipements WiFi adaptés à la couverture souhaitée."],
              ].map(([title, text]) => (
                <div
  key={title}
  className="flex items-center gap-4 rounded-3xl border border-neutral-200 p-4 md:p-4"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
    <Router className="h-5 w-5 text-blue-600" />
  </div>

  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-sm leading-5 text-neutral-600 md:text-base">
      {text}
    </p>
  </div>
</div>
              ))}
            </div>

            <p className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">
              Commencez petit. Développez votre réseau progressivement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2.5rem] bg-neutral-100 p-4 md:grid-cols-2 md:p-14">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Suivez votre activité WiFi à distance.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Consultez plusieurs zones WiFi, utilisateurs et ventes directement
              depuis votre téléphone.
            </p>

            <div className="mt-8 grid gap-4 text-neutral-700">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Suivi en temps réel
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-blue-600" />
                Plusieurs zones WiFi
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                Tableau de bord propriétaire
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm">
                <Image
                  src="/images/owner-phone.jpg"
                  alt="Propriétaire supervisant son réseau WiFi"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm">
                <Image
                  src="/images/admin-mobile.jpg"
                  alt="Dashboard propriétaire RAZAFI sur téléphone"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-8 md:py-8">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Votre WiFi génère de l’argent même quand vous dormez.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-5 grid max-w-7xl gap-5 md:grid-cols-2">
          <Reveal className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-sm">
            <Image
              src="/images/unifi-outdoor.jpg"
              alt="Point d’accès WiFi extérieur"
              width={1400}
              height={1000}
              className="h-[300px] w-full object-cover object-center transition duration-700 group-hover:scale-[1.03] md:h-[340px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-5 text-white md:p-4">
              <Wifi className="h-8 w-8 text-blue-300" />
              <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                Une seule connexion peut desservir tout un quartier.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/90 md:text-base">
                Une seule connexion Internet peut couvrir plusieurs zones WiFi.
                Les utilisateurs restent connectés avec le même accès dans toute
                la zone couverte.
              </p>
            </div>
          </Reveal>

          <Reveal className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-sm">
            <Image
              src="/images/public-wifi.jpg"
              alt="Utilisation du WiFi public"
              width={1200}
              height={1600}
              className="h-[300px] w-full object-cover object-[center_72%] transition duration-700 group-hover:scale-[1.03] md:h-[340px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-5 text-white md:p-4">
              <Smartphone className="h-8 w-8 text-blue-300" />
              <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                Internet accessible simplement.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/90 md:text-base">
                Vos utilisateurs restent connectés dans les espaces publics,
                fokontany, snacks, bars et lieux de rencontre.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-5 max-w-4xl text-center">
          <p className="text-base leading-6 text-neutral-600 md:text-lg">
            RAZAFI automatise les connexions, les paiements et l’accès Internet
            pour permettre à votre réseau WiFi de fonctionner en continu,
            24h/24 et 7j/7.
          </p>
        </div>
      </section>
<section id="faq" className="px-5 py-14">
  <div className="mx-auto max-w-3xl">
    <Reveal>
      <h2 className="text-center text-3xl font-semibold tracking-tight md:text-5xl">
        Questions fréquentes
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-neutral-600">
        Les réponses aux questions les plus importantes avant de lancer votre réseau WiFi RAZAFI.
      </p>
    </Reveal>

    <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white">
      {faqItems.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            key={faq.q}
            className="border-b border-neutral-200 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold transition hover:bg-neutral-50 md:text-lg"
            >
              {faq.q}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-[15px] leading-6 text-neutral-600">
                  <p>{faq.a}</p>

                  {faq.guideHref && faq.guideLabel ? (
                    <a
                      href={faq.guideHref}
                      className="mt-3 inline-flex font-semibold text-neutral-950 underline underline-offset-4 transition hover:text-neutral-600"
                    >
                      {faq.guideLabel}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      <section className="px-5 py-14">
        <Reveal className="mx-auto max-w-5xl rounded-[2.5rem] bg-neutral-950 px-8 py-12 text-center text-white md:px-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Votre connexion Internet peut faire plus.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-300">
            Contactez RAZAFI sur WhatsApp pour discuter de votre projet et
            recevoir une estimation rapide.
          </p>
          <a
            href={whatsappUrl}
            className="mt-4 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Parler sur WhatsApp
          </a>
        </Reveal>
      </section>

      <footer className="border-t border-neutral-200 px-5 pb-24 pt-10 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <div>
            <Image
              src="/images/logo-full.png"
              alt="RAZAFI"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-neutral-600">
              Internet communautaire moderne.
            </p>
          </div>
          <div className="text-neutral-600 md:text-right">
            <p>Seychelles • Madagascar</p>
            <p>WhatsApp : +261 34 05 005 92</p>
          </div>
        </div>
      </footer>

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

      {/* Phase 5B: Platform prospect assistant — above WhatsApp, never interferes */}
      <PlatformAssistantWidget />
    </main>
  );
}