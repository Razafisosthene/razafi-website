import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RazafiLoginMenu from "../RazafiLoginMenu";
import FloatingRazafiContact from "@/components/FloatingRazafiContact";

const canonicalPath = "/guides";
const pageTitle =
  "Guides RAZAFI | Business WiFi, paiement mobile, Starlink & IA";
const pageDescription =
  "Guides RAZAFI pour créer, automatiser et gérer une zone WiFi à Madagascar : business WiFi, paiement mobile, Starlink et intelligence artificielle.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalPath,
    siteName: "RAZAFI",
    locale: "fr_MG",
    type: "website",
  },
};

const guides = [
  {
    eyebrow: "Guide principal",
    title: "Créer et gérer un business WiFi à Madagascar",
    description:
      "Comprenez l’infrastructure, les forfaits, le paiement mobile, la gestion à distance et le fonctionnement multi-site d’une zone RAZAFI.",
    href: "/guide/business-wifi-madagascar",
    cta: "Lire le guide Business WiFi",
    symbol: "01",
    featured: true,
  },
  {
    eyebrow: "Paiement mobile",
    title: "Automatiser le paiement de votre zone WiFi",
    description:
      "Découvrez le parcours du choix du forfait jusqu’à la confirmation du paiement et à la délivrance de l’accès Internet.",
    href: "/guide/paiement-mobile-wifi-madagascar",
    cta: "Lire le guide Paiement mobile",
    symbol: "02",
  },
  {
    eyebrow: "Connexion Internet",
    title: "Créer une zone WiFi avec Starlink à Madagascar",
    description:
      "Comprenez le rôle de Starlink, du MikroTik et des points d’accès, ainsi que les points à vérifier avant une exploitation commerciale.",
    href: "/guide/starlink-zone-wifi-madagascar",
    cta: "Lire le guide Starlink",
    symbol: "03",
  },
  {
    eyebrow: "Assistant IA",
    title:
      "WiFi et intelligence artificielle : comment RAZAFI simplifie la gestion",
    description:
      "Découvrez comment l’Assistant IA RAZAFI accompagne les utilisateurs et aide le propriétaire à comprendre plus facilement son activité.",
    href: "/guide/wifi-intelligence-artificielle",
    cta: "Lire le guide WiFi & IA",
    symbol: "04",
  },
] as const;

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guides RAZAFI",
  description: pageDescription,
  url: "https://www.razafistore.com/guides",
  inLanguage: "fr-MG",
  isPartOf: {
    "@type": "WebSite",
    name: "RAZAFI",
    url: "https://www.razafistore.com/",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: `https://www.razafistore.com${guide.href}`,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.razafistore.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://www.razafistore.com/guides",
    },
  ],
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:py-4">
          <Link href="/" aria-label="Accueil RAZAFI">
            <Image
              src="/images/logo-full.png"
              alt="RAZAFI"
              width={150}
              height={40}
              className="h-9 w-auto md:h-10"
              priority
            />
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-neutral-600 md:gap-8">
            <Link
              href="/#demos"
              className="hidden transition hover:text-neutral-950 md:inline"
            >
              Démos
            </Link>
            <Link
              href="/guides"
              aria-current="page"
              className="font-semibold text-neutral-950 transition hover:text-blue-600"
            >
              Guides
            </Link>
            <Link
              href="/#offres"
              className="hidden transition hover:text-neutral-950 md:inline"
            >
              Offres
            </Link>
          </nav>

          <RazafiLoginMenu />
        </div>
      </header>

      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl md:h-[30rem] md:w-[30rem]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <nav
            aria-label="Fil d’Ariane"
            className="mx-auto mb-7 flex max-w-max items-center gap-2 text-xs font-medium text-neutral-500"
          >
            <Link href="/" className="transition hover:text-neutral-950">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-neutral-800">Guides</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-600 md:text-sm">
            Guides RAZAFI
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
            Comprendre et développer votre zone WiFi.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
            Business WiFi, paiement mobile, Starlink ou intelligence artificielle :
            retrouvez les guides RAZAFI pour comprendre chaque partie de votre
            installation et de votre activité.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <article
              key={guide.href}
              className={
                "flex min-h-[25rem] flex-col rounded-[2.25rem] p-7 md:p-9 " +
                ("featured" in guide && guide.featured
                  ? "bg-neutral-950 text-white"
                  : "border border-neutral-200 bg-neutral-50/80")
              }
            >
              <div
                className={
                  "flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold " +
                  ("featured" in guide && guide.featured
                    ? "bg-white/10 text-blue-300"
                    : "bg-white text-blue-600 shadow-sm")
                }
              >
                {guide.symbol}
              </div>

              <p
                className={
                  "mt-8 text-sm font-semibold " +
                  ("featured" in guide && guide.featured ? "text-blue-400" : "text-blue-600")
                }
              >
                {guide.eyebrow}
              </p>

              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                {guide.title}
              </h2>

              <p
                className={
                  "mt-5 max-w-xl leading-7 " +
                  ("featured" in guide && guide.featured ? "text-neutral-300" : "text-neutral-600")
                }
              >
                {guide.description}
              </p>

              <Link
                href={guide.href}
                className={
                  "mt-auto inline-flex w-fit items-center gap-2 pt-9 text-sm font-semibold transition " +
                  ("featured" in guide && guide.featured
                    ? "text-white hover:text-blue-300"
                    : "text-neutral-950 hover:text-blue-600")
                }
              >
                {guide.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-neutral-950 px-7 py-12 text-center text-white md:px-16 md:py-16">
          <p className="text-sm font-semibold text-blue-400">RAZAFI</p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] md:text-5xl">
            Vous préparez votre zone WiFi ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-300 md:text-lg">
            Découvrez le fonctionnement réel de RAZAFI ou parlez-nous de votre
            projet pour identifier l’architecture adaptée à votre zone.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#demos"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02] sm:w-auto"
            >
              Voir les démos
            </Link>

            <a
              href="https://wa.me/261340500592"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Parler avec RAZAFI sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 px-5 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Image
            src="/images/logo-full.png"
            alt="RAZAFI"
            width={125}
            height={34}
            className="h-7 w-auto"
          />

          <div className="mt-5 flex flex-col gap-4 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
            <p>La plateforme WiFi intelligente.</p>
            <a
              href="https://wa.me/261340500592"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-900 transition hover:text-blue-600"
            >
              WhatsApp : +261 34 05 005 92
            </a>
          </div>

          <p className="mt-8 border-t border-neutral-200 pt-6 text-xs leading-6 text-neutral-500">
            RAZAFI · NIF 5004006983 · STAT 46900 11 2020 0 02222 · Madagascar · Informations légales
          </p>
        </div>
      </footer>

      <FloatingRazafiContact />
    </main>
  );
}
