import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Check,
  CreditCard,
  Globe2,
  MapPinned,
  Network,
  Router,
  Smartphone,
  Wifi,
} from "lucide-react";
import FloatingRazafiContact from "@/components/FloatingRazafiContact";
import RazafiLoginMenu from "@/app/RazafiLoginMenu";
import { LEGAL_LINE, WHATSAPP_URL } from "@/content/publicSite";

const pageTitle = "Starlink WiFi Madagascar | Créer une zone WiFi avec RAZAFI";
const pageDescription =
  "Découvrez comment créer une zone WiFi avec Starlink à Madagascar : MikroTik, points d’accès, paiement MVola et gestion à distance avec RAZAFI.";
const canonicalPath = "/guide/starlink-zone-wifi-madagascar";

const STARLINK_TERMS_URL = "https://starlink.com/legal/documents/DOC-1540-49184-72";
const STARLINK_PLANS_URL = "https://starlink.com/mg/business/service-plans";
const STARLINK_FAIR_USE_URL = "https://starlink.com/legal/documents/DOC-1563-23428-70";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "Créer une zone WiFi avec Starlink à Madagascar | RAZAFI",
    description:
      "Starlink fournit Internet. MikroTik contrôle le réseau. Les points d’accès couvrent la zone. RAZAFI gère forfaits, paiements et accès.",
    url: canonicalPath,
    siteName: "RAZAFI",
    locale: "fr_MG",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Créer une zone WiFi avec Starlink à Madagascar | RAZAFI",
    description:
      "Starlink, MikroTik, points d’accès, paiement MVola et gestion à distance avec RAZAFI.",
  },
};

const architectureSteps = [
  {
    number: "01",
    title: "Starlink fournit la connexion",
    text: "L’antenne Starlink apporte la connexion Internet sur le site où votre zone WiFi est installée.",
  },
  {
    number: "02",
    title: "MikroTik contrôle le réseau",
    text: "Le routeur MikroTik sert de point de contrôle et est préparé pour fonctionner avec la plateforme RAZAFI.",
  },
  {
    number: "03",
    title: "Les points d’accès couvrent la zone",
    text: "Un ou plusieurs AP diffusent le WiFi selon la surface et l’environnement à couvrir.",
  },
  {
    number: "04",
    title: "Les clients rejoignent le réseau",
    text: "Lorsqu’un utilisateur se connecte, il peut être dirigé vers le portail RAZAFI.",
  },
  {
    number: "05",
    title: "RAZAFI organise l’accès",
    text: "Le client choisit son forfait, paie lorsque nécessaire et obtient son accès lorsque les conditions prévues sont remplies.",
  },
];

const capacityFactors = [
  "Débit réellement disponible sur le site",
  "Plan Starlink et niveau de priorité",
  "Consommation simultanée des clients",
  "Vitesses proposées par forfait",
  "Nombre et qualité des points d’accès",
  "Couverture radio et environnement",
];

const coverageFactors = [
  "Emplacement des points d’accès",
  "Murs et obstacles",
  "Distance entre AP et clients",
  "Antennes utilisées",
  "Interférences et environnement radio",
];

const faqItems = [
  {
    q: "Peut-on créer une zone WiFi avec Starlink à Madagascar ?",
    a: "Oui, techniquement. Starlink peut servir de connexion Internet à une infrastructure WiFi utilisant MikroTik, des points d’accès et RAZAFI. L’exploitation commerciale doit néanmoins respecter les conditions Starlink et les obligations réglementaires applicables.",
  },
  {
    q: "Peut-on vendre du WiFi avec Starlink ?",
    a: "Les conditions Starlink actuelles prévoient qu’un client disposant d’un Priority Plan peut revendre l’accès au service sous forme de community Wi‑Fi ou hotspot à des tiers. Les obligations réglementaires locales restent distinctes.",
  },
  {
    q: "Quel forfait Starlink utiliser pour un hotspot ?",
    a: "Il faut examiner les Priority Plans disponibles et choisir en fonction de la consommation attendue, du nombre d’utilisateurs, des vitesses proposées et du niveau de service recherché.",
  },
  {
    q: "Combien d’utilisateurs Starlink peut-il supporter ?",
    a: "Il n’existe pas de nombre fixe valable pour toutes les installations. La capacité dépend de la connexion disponible, du trafic simultané, du plan Starlink, de la qualité des AP et de la consommation des clients.",
  },
  {
    q: "Faut-il utiliser uniquement le routeur WiFi Starlink ?",
    a: "Non. Une installation RAZAFI utilise un MikroTik comme routeur de contrôle et peut utiliser plusieurs points d’accès compatibles pour assurer la couverture WiFi.",
  },
  {
    q: "Est-ce que RAZAFI fonctionne uniquement avec Starlink ?",
    a: "Non. RAZAFI peut également fonctionner avec une connexion fibre ou une autre connexion Internet adaptée.",
  },
  {
    q: "Peut-on gérer plusieurs zones utilisant Starlink avec le même compte RAZAFI ?",
    a: "Oui. Un même propriétaire peut gérer plusieurs zones RAZAFI depuis son compte. Chaque site conserve sa propre infrastructure et peut utiliser Starlink ou un autre fournisseur Internet.",
  },
  {
    q: "RAZAFI est-il partenaire officiel de Starlink ?",
    a: "Non. RAZAFI est une plateforme indépendante. Starlink peut être utilisé comme fournisseur de connexion Internet dans une architecture compatible.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Créer une zone WiFi avec Starlink à Madagascar",
  description: pageDescription,
  inLanguage: "fr-MG",
  mainEntityOfPage: `https://www.razafistore.com${canonicalPath}`,
  author: {
    "@type": "Organization",
    name: "RAZAFI",
    url: "https://www.razafistore.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "RAZAFI",
    url: "https://www.razafistore.com/",
  },
  datePublished: "2026-09-12",
  dateModified: "2026-09-12",
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
      name: "Starlink & zone WiFi Madagascar",
      item: "https://www.razafistore.com/guide/starlink-zone-wifi-madagascar",
    },
  ],
};

export default function StarlinkZoneWifiMadagascarPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/82 backdrop-blur-2xl">
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
            <Link href="/guides" className="transition hover:text-neutral-950">
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

      <article>
        <section className="relative overflow-hidden px-5 pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-14 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl md:h-[30rem] md:w-[30rem]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <nav
              aria-label="Fil d’Ariane"
              className="mx-auto mb-7 flex max-w-max items-center gap-2 text-xs font-medium text-neutral-500"
            >
              <Link href="/" className="transition hover:text-neutral-950">
                Accueil
              </Link>
              <span aria-hidden="true">›</span>
              <Link href="/guides" className="transition hover:text-neutral-950">
                Guides
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-neutral-800">Starlink & zone WiFi Madagascar</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-600 md:text-sm">
              Starlink & Business WiFi à Madagascar
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
              Créer une zone WiFi avec Starlink à Madagascar
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              Starlink peut fournir la connexion Internet de votre zone WiFi. RAZAFI ajoute ensuite la gestion des forfaits, le paiement mobile, l’activation des accès et le suivi de votre activité à distance.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#pourquoi"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:w-auto"
              >
                Découvrir RAZAFI
              </Link>
              <Link
                href="/#demos"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-neutral-200 bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-50 sm:w-auto"
              >
                Voir les démos
              </Link>
            </div>
            <p className="mx-auto mt-7 max-w-3xl rounded-full border border-blue-100 bg-blue-50/70 px-5 py-3 text-sm font-semibold text-blue-800">
              Starlink n’est pas obligatoire : RAZAFI peut également fonctionner avec une connexion fibre ou une autre connexion Internet adaptée.
            </p>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-blue-600">Rôles complémentaires</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Starlink fournit Internet. RAZAFI organise votre zone WiFi.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-600 md:text-lg">
              <p>
                Starlink et RAZAFI ne jouent pas le même rôle. Starlink fournit la connexion Internet qui arrive sur votre site. RAZAFI intervient ensuite pour vous aider à transformer cette connexion en une zone WiFi organisée, avec des forfaits, des utilisateurs, des paiements et une gestion à distance.
              </p>
              <p>
                Dans une architecture RAZAFI : <strong className="text-neutral-950">Starlink fournit Internet</strong>, MikroTik contrôle les accès au réseau, les points d’accès diffusent le WiFi et RAZAFI organise la partie commerciale et utilisateur.
              </p>
              <p className="font-semibold text-neutral-950">
                RAZAFI ne remplace pas votre fournisseur Internet, et votre fournisseur Internet ne remplace pas la plateforme de gestion.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold text-blue-600">Architecture</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Comment fonctionne une zone WiFi RAZAFI avec Starlink ?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl leading-8 text-neutral-600">
                Starlink → MikroTik → Points d’accès → Clients WiFi. RAZAFI se connecte à cette infrastructure pour gérer le parcours des utilisateurs.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {architectureSteps.map((step) => (
                <div key={step.number} className="rounded-[2rem] border border-neutral-200 bg-white p-6">
                  <span className="text-sm font-semibold text-blue-600">{step.number}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] bg-neutral-950 px-6 py-8 text-center text-white md:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">Le parcours en une ligne</p>
              <p className="mt-3 text-lg font-semibold md:text-2xl">
                Internet Starlink → WiFi → RAZAFI → Forfait → Paiement → Accès Internet
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600">Couverture réseau</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Les points d’accès ne sont pas limités à Starlink
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                Disposer d’une connexion Starlink ne signifie pas que toute votre couverture WiFi doit être assurée uniquement par le routeur WiFi fourni avec le kit. Pour couvrir une maison, un commerce, un établissement ou une zone plus étendue, il peut être nécessaire d’utiliser plusieurs points d’accès.
              </p>
              <p className="mt-5 leading-8 text-neutral-600">
                RAZAFI n’impose pas une marque unique d’AP. Des équipements compatibles de différentes marques peuvent être utilisés lorsqu’ils sont correctement configurés en mode point d’accès ou bridge.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["MikroTik", "Ubiquiti", "TP-Link", "Comfast", "Tenda", "Mercusys"].map((brand) => (
                <div key={brand} className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6">
                  <Wifi className="h-5 w-5 text-blue-600" />
                  <p className="mt-4 font-semibold text-neutral-950">{brand}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">AP compatible selon votre installation.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 px-5 py-16 text-white md:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-blue-400">Conditions Starlink</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Starlink autorise-t-il la revente d’accès WiFi ?
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-300 md:text-lg">
              <p>
                Les conditions actuelles de Starlink indiquent que la revente du service n’est généralement pas autorisée, mais prévoient une exception lorsqu’un client souscrit un <strong className="text-white">Priority Plan</strong> : l’accès peut alors être revendu sous forme de community Wi‑Fi ou hotspot à des tiers, sous réserve des autres conditions applicables.
              </p>
              <p>
                Un abonnement Starlink destiné à un usage personnel ne doit donc pas être automatiquement considéré comme adapté à une activité commerciale de redistribution WiFi.
              </p>
            </div>

            <div className="mt-8 rounded-[2rem] border border-white/15 bg-white/5 p-6 md:p-8">
              <p className="text-sm font-semibold text-blue-400">Important</p>
              <p className="mt-3 leading-8 text-white">
                L’autorisation prévue par les conditions Starlink ne remplace pas les autorisations, licences ou obligations réglementaires applicables à Madagascar.
              </p>
            </div>

            <a
              href={STARLINK_TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Consulter les conditions officielles Starlink
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-[2.5rem] border border-neutral-200 bg-white p-7 md:p-10">
              <p className="text-sm font-semibold text-blue-600">Choisir son offre</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Quel forfait Starlink choisir pour une zone WiFi ?
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                Starlink propose à Madagascar des offres Local Priority destinées notamment aux usages professionnels et à forte demande. Pour une zone WiFi commerciale, le choix ne devrait pas être basé uniquement sur le prix mensuel.
              </p>
              <p className="mt-5 leading-8 text-neutral-600">
                Il faut considérer la consommation attendue, le nombre d’utilisateurs, les vitesses proposées, l’utilisation simultanée, la taille de la zone et le niveau de service recherché.
              </p>
              <p className="mt-5 font-semibold leading-8 text-neutral-950">
                Les forfaits et tarifs Starlink peuvent évoluer : vérifiez toujours les offres actuellement disponibles sur le site officiel Starlink Madagascar.
              </p>
              <a
                href={STARLINK_PLANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Voir les offres Starlink Madagascar
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[2.5rem] border border-neutral-200 bg-neutral-50 p-7 md:p-10">
              <p className="text-sm font-semibold text-blue-600">Capacité réelle</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Combien d’utilisateurs peut-on connecter ?
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                Il n’existe pas un nombre unique d’utilisateurs que l’on puisse garantir pour toutes les installations Starlink. Deux zones utilisant le même matériel peuvent obtenir des résultats très différents.
              </p>
              <div className="mt-7 space-y-3">
                {capacityFactors.map((factor) => (
                  <div key={factor} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="leading-6 text-neutral-700">{factor}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold leading-7 text-neutral-950">
                RAZAFI peut appliquer les vitesses prévues dans vos forfaits, mais ne peut pas créer davantage de bande passante que celle réellement fournie par votre connexion Internet.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-neutral-200 bg-white p-7 md:p-10">
            <p className="text-sm font-semibold text-blue-600">Données Priority</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Comprendre la capacité de votre forfait Starlink
            </h2>
            <p className="mt-6 leading-8 text-neutral-600">
              Les Priority Plans attribuent une quantité déterminée de données Priority. La documentation officielle Starlink explique que les données Priority bénéficient d’une priorité réseau supérieure, tandis que les performances peuvent être réduites lorsque l’allocation prioritaire est épuisée ou lorsque la connexion fonctionne avec un niveau de priorité inférieur.
            </p>
            <p className="mt-5 leading-8 text-neutral-600">
              Pour un business WiFi, cela signifie qu’il faut réfléchir à la consommation globale du site, et pas uniquement au nombre d’appareils affichés comme connectés. Une zone ayant beaucoup d’utilisateurs légers peut parfois consommer moins qu’une zone avec quelques utilisateurs très intensifs.
            </p>
            <a
              href={STARLINK_FAIR_USE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Lire la politique d’utilisation équitable Starlink
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600">Paiement mobile</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                De la connexion Starlink au paiement MVola
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                Starlink fournit la connexion Internet. RAZAFI peut ensuite prendre en charge le parcours commercial de votre zone WiFi. Le client rejoint votre réseau, ouvre le portail RAZAFI, choisit son forfait et effectue son paiement avec le moyen disponible.
              </p>
              <p className="mt-5 font-semibold leading-8 text-neutral-950">
                MVola est actuellement opérationnel pour les paiements RAZAFI.
              </p>
              <Link
                href="/guide/paiement-mobile-wifi-madagascar"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Lire : Paiement mobile WiFi Madagascar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[2.5rem] bg-neutral-950 p-7 text-white md:p-10">
              <CreditCard className="h-7 w-7 text-blue-400" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">Parcours client</p>
              <p className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                Starlink → WiFi → RAZAFI → Forfait → MVola → Paiement confirmé → Accès Internet
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[2.5rem] border border-neutral-200 bg-white p-7 md:p-10">
              <Smartphone className="h-7 w-7 text-blue-600" />
              <p className="mt-6 text-sm font-semibold text-blue-600">Gestion à distance</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Gérez votre zone WiFi Starlink depuis votre téléphone
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                Vous n’avez pas besoin d’être physiquement devant le MikroTik à chaque fois qu’un client achète un accès. Depuis votre espace RAZAFI, vous pouvez suivre l’activité de votre zone WiFi, consulter vos clients, suivre vos ventes, gérer vos forfaits et intervenir lorsque cela est nécessaire.
              </p>
              <p className="mt-5 font-semibold leading-8 text-neutral-950">
                RAZAFI gère votre zone WiFi. RAZAFI ne remplace pas l’application ou le compte Starlink et ne prétend pas administrer directement votre abonnement Starlink.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-neutral-200 bg-white p-7 md:p-10">
              <Network className="h-7 w-7 text-blue-600" />
              <p className="mt-6 text-sm font-semibold text-blue-600">RAZAFI multi-site</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Plusieurs zones WiFi, un seul compte RAZAFI
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                Un même propriétaire peut gérer plusieurs zones RAZAFI depuis le même compte, même si les sites n’utilisent pas tous le même fournisseur Internet.
              </p>
              <div className="mt-6 space-y-3">
                {["Site A — Starlink", "Site B — fibre", "Site C — autre connexion Internet"].map((site) => (
                  <div key={site} className="flex items-center gap-3 rounded-2xl bg-neutral-50 p-4">
                    <MapPinned className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-neutral-800">{site}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 leading-8 text-neutral-600">
                Chaque zone conserve sa propre infrastructure, ses utilisateurs et son activité. Le multi-site RAZAFI dépend de votre organisation de zones WiFi, pas du fait que toutes utilisent Starlink.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 px-5 py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-400">Couverture</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Starlink fournit Internet. Les AP créent votre couverture WiFi.
              </h2>
              <p className="mt-6 leading-8 text-neutral-300">
                Une excellente connexion Starlink peut arriver jusqu’à votre maison sans pour autant offrir une excellente couverture WiFi dans toutes les rues ou tous les bâtiments autour. Si vous souhaitez agrandir votre zone, il faut travailler sur l’infrastructure WiFi.
              </p>
              <p className="mt-5 font-semibold leading-8 text-white">
                Changer uniquement votre forfait Internet ne résout pas automatiquement un problème de portée WiFi.
              </p>
            </div>
            <div className="space-y-3">
              {coverageFactors.map((factor) => (
                <div key={factor} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Wifi className="h-5 w-5 text-blue-400" />
                  <span className="text-neutral-200">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            <div className="rounded-[2.5rem] border border-neutral-200 bg-neutral-50 p-7 md:p-10">
              <Building2 className="h-7 w-7 text-blue-600" />
              <p className="mt-6 text-sm font-semibold text-blue-600">Le propriétaire</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Qui installe quoi ?</h2>
              <ul className="mt-6 space-y-3 text-neutral-600">
                <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />Choisit sa connexion Internet.</li>
                <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />Achète les points d’accès nécessaires.</li>
                <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />Réalise ou fait réaliser l’installation physique.</li>
                <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />Choisit l’emplacement des AP selon la couverture souhaitée.</li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-neutral-200 bg-white p-7 md:p-10">
              <Router className="h-7 w-7 text-blue-600" />
              <p className="mt-6 text-sm font-semibold text-blue-600">RAZAFI</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">La couche de gestion</h2>
              <ul className="mt-6 space-y-3 text-neutral-600">
                <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />Prépare la configuration du MikroTik.</li>
                <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />Fournit les indications nécessaires pour connecter les AP compatibles.</li>
                <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-blue-600" />Fournit la plateforme de gestion des forfaits, clients et accès.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-50/60 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-blue-100 bg-white p-7 md:p-10">
            <Globe2 className="h-7 w-7 text-blue-600" />
            <p className="mt-6 text-sm font-semibold text-blue-600">Cadre réglementaire</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Avant d’exploiter commercialement une zone WiFi
            </h2>
            <p className="mt-6 leading-8 text-neutral-600">
              Une zone WiFi commerciale touche à deux sujets différents : le contrat avec votre fournisseur Internet et la réglementation applicable à votre activité. Même lorsque les conditions d’un fournisseur permettent un usage hotspot ou community Wi‑Fi, cela ne signifie pas automatiquement que toutes les formalités locales sont remplies.
            </p>
            <p className="mt-5 leading-8 text-neutral-600">
              À Madagascar, le propriétaire doit vérifier les obligations applicables auprès des autorités compétentes avant d’exploiter commercialement sa zone.
            </p>
            <p className="mt-5 font-semibold leading-8 text-neutral-950">
              RAZAFI ne présente pas une compatibilité technique comme une autorisation réglementaire.
            </p>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-neutral-200 bg-neutral-50 p-7 md:p-10">
            <p className="text-sm font-semibold text-blue-600">À lire aussi</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Vous préparez votre business WiFi ?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-neutral-700">
              Starlink n’est qu’une partie du système. Une zone RAZAFI associe une connexion Internet, un MikroTik, un ou plusieurs points d’accès, un portail client, des forfaits et une plateforme de gestion.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guide/business-wifi-madagascar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Lire : Business WiFi Madagascar
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/guide/paiement-mobile-wifi-madagascar"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
              >
                Lire : Paiement mobile WiFi
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600">Questions fréquentes</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Starlink, Business WiFi & RAZAFI
              </h2>
            </div>

            <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
              {faqItems.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-semibold text-neutral-950">
                    <span>{faq.q}</span>
                    <span className="text-2xl font-light text-neutral-400 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-8 text-neutral-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 pt-4 md:pb-28">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-12 text-center text-white md:px-12 md:py-16">
            <p className="text-sm font-semibold text-blue-400">RAZAFI</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Transformez votre connexion Internet en zone WiFi organisée
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-300">
              Starlink, fibre ou autre connexion : RAZAFI vous aide à gérer vos forfaits, vos clients, vos paiements et votre activité à distance.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#demos"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02] sm:w-auto"
              >
                Voir les démos
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Parler avec RAZAFI sur WhatsApp
              </a>
            </div>
          </div>
        </section>
      </article>

      <footer className="border-t border-neutral-200 px-5 pb-32 pt-10 md:pb-12 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Image
                src="/images/logo-full.png"
                alt="RAZAFI"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
              <p className="mt-3 text-sm text-neutral-500">La plateforme WiFi intelligente.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-neutral-700 transition hover:text-neutral-950"
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
