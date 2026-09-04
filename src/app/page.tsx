"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  CreditCard,
  Palette,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";
import RazafiLoginMenu from "./RazafiLoginMenu";
import FloatingRazafiContact from "@/components/FloatingRazafiContact";
import {
  FAQ_ITEMS,
  HERO_FEATURES,
  LEGAL_LINE,
  PUBLIC_OFFERS_API_URL,
  START_STEPS,
  WHATSAPP_URL,
  WHY_RAZAFI,
  formatAriary,
} from "@/content/publicSite";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

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
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function DemoMenuButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-neutral-300 sm:w-auto md:text-base"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span>Voir les démos</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 z-30 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-2xl"
          role="menu"
        >
          <a
            href="/demo/demo-admin.html"
            className="block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            Démo propriétaire
          </a>
          <a
            href="/demo/demo-user.html"
            className="block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            Démo client
          </a>
        </motion.div>
      ) : null}
    </div>
  );
}

function HeroFeatureLine() {
  const [featureIndex, setFeatureIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || HERO_FEATURES.length <= 1) return;

    const timer = window.setInterval(() => {
      setFeatureIndex((current) => (current + 1) % HERO_FEATURES.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <p className="mx-auto mt-7 max-w-5xl text-lg font-semibold leading-8 text-blue-600 md:text-2xl">
      <span className="hidden md:inline">{HERO_FEATURES.join(" · ")}</span>

      <span className="inline-flex min-h-8 items-center justify-center md:hidden">
        {reduceMotion ? (
          HERO_FEATURES[0]
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={HERO_FEATURES[featureIndex]}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {HERO_FEATURES[featureIndex]}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </p>
  );
}

const whyIcons = [CreditCard, BarChart3, Palette, Sparkles] as const;

type PublicOffer = {
  code: string;
  name: string;
  description: string | null;
  commission_pct: number | null;
  subscription_price_ar: number | null;
};

type PublicOffersState = "loading" | "ready" | "error";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [offers, setOffers] = useState<PublicOffer[]>([]);
  const [offersState, setOffersState] = useState<PublicOffersState>("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPublicOffers() {
      try {
        const response = await fetch(PUBLIC_OFFERS_API_URL, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`public_offers_http_${response.status}`);

        const payload = await response.json();
        const items = Array.isArray(payload?.items) ? payload.items : [];
        const normalized = items
          .map((item: unknown): PublicOffer | null => {
            if (!item || typeof item !== "object") return null;
            const raw = item as Record<string, unknown>;
            const code = String(raw.code || "").trim();
            const name = String(raw.name || "").trim();
            if (!code || !name) return null;

            const commission = raw.commission_pct === null || raw.commission_pct === undefined
              ? null
              : Number(raw.commission_pct);
            const subscription = raw.subscription_price_ar === null || raw.subscription_price_ar === undefined
              ? null
              : Number(raw.subscription_price_ar);

            const commissionPct = commission !== null && Number.isFinite(commission) && commission >= 0 && commission <= 100
              ? commission
              : null;
            const subscriptionAr = subscription !== null && Number.isFinite(subscription) && subscription >= 0
              ? Math.trunc(subscription)
              : null;

            if (commissionPct === null && subscriptionAr === null) return null;

            return {
              code,
              name,
              description: typeof raw.description === "string" ? raw.description.trim() || null : null,
              commission_pct: commissionPct,
              subscription_price_ar: subscriptionAr,
            };
          })
          .filter((item: PublicOffer | null): item is PublicOffer => item !== null);

        setOffers(normalized);
        setOffersState("ready");
      } catch (error) {
        if (controller.signal.aborted) return;
        console.warn("[RAZAFI PUBLIC OFFERS]", error);
        setOffers([]);
        setOffersState("error");
      }
    }

    void loadPublicOffers();
    return () => controller.abort();
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:py-4">
          <a href="#top" aria-label="Accueil RAZAFI">
            <Image
              src="/images/logo-full.png"
              alt="RAZAFI"
              width={150}
              height={40}
              className="h-9 w-auto md:h-10"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
            <a href="#demos" className="transition hover:text-neutral-950">
              Démos
            </a>
            <a href="#offres" className="transition hover:text-neutral-950">
              Offres
            </a>
          </nav>

          <RazafiLoginMenu />
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/55 blur-3xl md:h-[28rem] md:w-[28rem]" />
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeUp}
          className="relative mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-blue-600 md:text-sm">
            WiFi communautaire moderne
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] md:text-7xl lg:text-8xl">
            Automatisez votre zone WiFi.
          </h1>

          <HeroFeatureLine />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            RAZAFI vous permet de vendre et gérer l’accès à votre zone WiFi simplement, depuis votre téléphone.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DemoMenuButton />
            <a
              href="#pourquoi"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-neutral-800 sm:w-auto md:text-base"
            >
              Découvrir RAZAFI
            </a>
          </div>
        </motion.div>
      </section>

      <section id="pourquoi" className="scroll-mt-24 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold text-blue-600">Pourquoi RAZAFI ?</p>
            <h2 className="mx-auto mt-3 max-w-5xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] md:text-5xl lg:text-[3.25rem]">
              Le WiFi devient plus simple à vendre et à gérer.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {WHY_RAZAFI.map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <Reveal
                  key={item.title}
                  className="rounded-[2rem] border border-neutral-200 bg-neutral-50/75 p-6 md:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-neutral-600">{item.text}</p>
                  {"guideHref" in item ? (
                    <Link
                      href={item.guideHref}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 transition hover:text-blue-600"
                    >
                      {item.guideLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mx-auto mt-8 max-w-xl overflow-hidden rounded-[2.5rem] bg-neutral-100 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)] md:mt-12">
            <Image
              src="/images/admin-mobile.jpg"
              alt="Tableau de bord RAZAFI sur téléphone"
              width={900}
              height={1200}
              className="h-auto w-full rounded-[2rem] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section id="demos" className="scroll-mt-24 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold text-blue-600">Démonstrations</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Découvrez RAZAFI en action.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[2rem] bg-neutral-950 p-7 text-white md:p-9">
              <h3 className="text-2xl font-semibold">Démo propriétaire</h3>
              <p className="mt-3 leading-7 text-neutral-300">
                Découvrez comment suivre et gérer votre zone WiFi depuis votre téléphone.
              </p>
              <a
                href="/demo/demo-admin.html"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
              >
                Voir la démo propriétaire
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 md:p-9">
              <h3 className="text-2xl font-semibold">Démo client</h3>
              <p className="mt-3 leading-7 text-neutral-600">
                Découvrez comment un client choisit son forfait, paie et obtient son accès.
              </p>
              <a
                href="/demo/demo-user.html"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                Voir la démo client
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="comment" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600">Mise en place</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Comment utiliser RAZAFI ?
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {START_STEPS.map((step) => (
              <Reveal
                key={step.number}
                className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] md:p-8"
              >
                <span className="text-sm font-semibold text-blue-600">{step.number}</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 max-w-xl leading-7 text-neutral-600">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="offres" className="scroll-mt-24 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold text-blue-600">Offres & tarifs</p>
            <h2 className="mx-auto mt-3 max-w-5xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] md:text-5xl lg:text-[3.25rem]">
              Choisissez votre offre RAZAFI.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-600">
              Commission ou abonnement : choisissez le modèle qui vous convient.
            </p>
          </Reveal>

          {offersState === "loading" ? (
            <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-neutral-50 px-6 py-8 text-center text-sm text-neutral-500">
              Chargement des offres RAZAFI…
            </div>
          ) : offersState === "error" || offers.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-neutral-50 px-6 py-8 text-center">
              <p className="font-semibold text-neutral-950">Tarifs temporairement indisponibles.</p>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-neutral-600">
                Contactez RAZAFI pour connaître les offres actuellement disponibles.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {offers.map((offer, index) => {
                const emphasized = index % 2 === 1;
                const hasCommission = offer.commission_pct !== null;
                const hasSubscription = offer.subscription_price_ar !== null;
                const hasBoth = hasCommission && hasSubscription;

                return (
                  <Reveal
                    key={offer.code}
                    className={`rounded-[2.25rem] p-7 md:p-9 ${
                      emphasized
                        ? "bg-neutral-950 text-white"
                        : "border border-neutral-200 bg-neutral-50"
                    }`}
                  >
                    <h3 className="text-3xl font-semibold tracking-tight">{offer.name}</h3>
                    <p className={`mt-4 min-h-14 leading-7 ${emphasized ? "text-neutral-300" : "text-neutral-600"}`}>
                      {offer.description || "Offre RAZAFI actuellement disponible."}
                    </p>

                    <div className={`mt-9 grid items-center gap-4 ${hasBoth ? "grid-cols-[1fr_auto_1fr]" : "grid-cols-1"}`}>
                      {hasCommission ? (
                        <div>
                          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${emphasized ? "text-neutral-400" : "text-neutral-500"}`}>
                            Commission
                          </p>
                          <p className="mt-2 text-4xl font-semibold tracking-tight">{offer.commission_pct} %</p>
                        </div>
                      ) : null}

                      {hasBoth ? (
                        <span className={`text-sm font-semibold ${emphasized ? "text-neutral-500" : "text-neutral-400"}`}>ou</span>
                      ) : null}

                      {hasSubscription ? (
                        <div className={hasBoth ? "text-right" : ""}>
                          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${emphasized ? "text-neutral-400" : "text-neutral-500"}`}>
                            Abonnement
                          </p>
                          <p className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                            {formatAriary(offer.subscription_price_ar as number)} Ar
                          </p>
                          <p className={`mt-1 text-xs ${emphasized ? "text-neutral-400" : "text-neutral-500"}`}>
                            / mois / zone WiFi
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="text-sm font-semibold text-blue-600">FAQ</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
              Questions fréquentes.
            </h2>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="border-b border-neutral-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold transition hover:bg-neutral-50 md:px-7 md:text-lg"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-neutral-500 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 leading-7 text-neutral-600 md:px-7">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <Reveal className="mx-auto max-w-5xl rounded-[2.5rem] bg-neutral-950 px-7 py-12 text-center text-white md:px-16 md:py-16">
          <Zap className="mx-auto h-8 w-8 text-blue-400" />
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] md:text-5xl lg:text-[3.25rem]">
            Prêt à lancer votre zone WiFi ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-300 md:text-lg">
            Parlez-nous de votre projet. RAZAFI vous aide à mettre en place une zone WiFi simple à gérer et automatisée.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02] md:text-base"
          >
            Parler avec RAZAFI sur WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      <footer className="border-t border-neutral-200 px-5 pb-32 pt-10 md:pb-12 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <Image
              src="/images/logo-full.png"
              alt="RAZAFI"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm text-neutral-500">La plateforme WiFi intelligente.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-neutral-700 transition hover:text-neutral-950"
            >
              WhatsApp : +261 34 05 005 92
            </a>
          </div>
          <p className="mt-8 border-t border-neutral-200 pt-5 text-xs leading-5 text-neutral-500">
            {LEGAL_LINE}
          </p>
        </div>
      </footer>

      <FloatingRazafiContact />
    </main>
  );
}
