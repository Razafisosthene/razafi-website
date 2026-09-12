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

const pageTitle =
  "Business WiFi Madagascar | Créer et gérer une zone WiFi avec RAZAFI";
const pageDescription =
  "Découvrez comment créer et gérer une zone WiFi à Madagascar avec une connexion Internet, MikroTik, points d’accès, paiement mobile MVola et gestion à distance avec RAZAFI.";
const canonicalPath = "/guide/business-wifi-madagascar";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "Créer et gérer un business WiFi à Madagascar | RAZAFI",
    description:
      "Connexion Internet, MikroTik, points d’accès, paiement mobile et gestion à distance : découvrez comment construire une zone WiFi avec RAZAFI.",
    url: canonicalPath,
    siteName: "RAZAFI",
    locale: "fr_MG",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Créer et gérer un business WiFi à Madagascar | RAZAFI",
    description:
      "Connexion Internet, MikroTik, points d’accès, paiement mobile et gestion à distance avec RAZAFI.",
  },
};

const setupCards = [
  {
    icon: Globe2,
    title: "Une connexion Internet",
    text: "Starlink, fibre ou une autre connexion suffisamment stable et adaptée à l’usage prévu.",
  },
  {
    icon: Router,
    title: "Un routeur MikroTik",
    text: "RAZAFI prépare le routeur de contrôle afin qu’il fonctionne correctement avec la plateforme.",
  },
  {
    icon: Wifi,
    title: "Des points d’accès WiFi",
    text: "Vous choisissez et installez vos AP selon la couverture souhaitée, en mode point d’accès ou bridge compatible.",
  },
  {
    icon: Network,
    title: "La plateforme RAZAFI",
    text: "Forfaits, clients, paiements, activations et suivi de l’activité sont réunis dans le même environnement.",
  },
];

const paymentSteps = [
  {
    number: "01",
    title: "Connexion au WiFi",
    text: "Le client se connecte à votre réseau et arrive sur le portail RAZAFI.",
  },
  {
    number: "02",
    title: "Choix du forfait",
    text: "Il choisit l’offre qui correspond à son besoin.",
  },
  {
    number: "03",
    title: "Paiement mobile",
    text: "MVola est actuellement disponible pour le paiement RAZAFI.",
  },
  {
    number: "04",
    title: "Activation",
    text: "Après validation, l’accès est délivré et le client peut utiliser son forfait.",
  },
];

const ownerBenefits = [
  "Suivre l’activité de votre zone WiFi",
  "Consulter vos clients et vos sessions",
  "Gérer vos forfaits et surveiller vos ventes",
  "Proposer des accès gratuits lorsque nécessaire",
  "Bloquer un appareil lorsque la situation l’exige",
  "Personnaliser votre environnement client",
  "Utiliser l’Assistant IA RAZAFI pour vous accompagner",
];

const faqItems = [
  {
    q: "Peut-on créer une zone WiFi avec Starlink à Madagascar ?",
    a: "Techniquement, Starlink peut être utilisé comme connexion Internet d’une infrastructure WiFi compatible. L’utilisation commerciale ou la redistribution de la connexion doit cependant respecter les conditions du fournisseur et les autorisations éventuellement applicables.",
  },
  {
    q: "Est-ce que RAZAFI fonctionne uniquement avec Starlink ?",
    a: "Non. RAZAFI peut fonctionner avec Starlink, une connexion fibre ou une autre connexion Internet adaptée à l’installation.",
  },
  {
    q: "Faut-il utiliser des points d’accès MikroTik ?",
    a: "Non. Le routeur de contrôle utilisé dans l’architecture RAZAFI est MikroTik, mais les points d’accès WiFi peuvent être de différentes marques lorsqu’ils sont correctement configurés en mode compatible.",
  },
  {
    q: "Comment les clients paient-ils leur forfait WiFi ?",
    a: "MVola est actuellement disponible pour le paiement RAZAFI. D’autres moyens de paiement mobile sont progressivement prévus ou intégrés à la plateforme.",
  },
  {
    q: "Peut-on gérer plusieurs zones WiFi avec le même compte ?",
    a: "Oui. Un propriétaire peut avoir plusieurs zones WiFi rattachées au même compte RAZAFI. Chaque zone reste indépendante tout en étant accessible depuis le même espace de gestion.",
  },
  {
    q: "Peut-on gérer RAZAFI depuis un téléphone ?",
    a: "Oui. L’espace propriétaire est conçu pour permettre le suivi et la gestion à distance depuis un navigateur sur téléphone.",
  },
  {
    q: "RAZAFI fournit-il les points d’accès WiFi ?",
    a: "Non. Le propriétaire achète et installe ses points d’accès. RAZAFI fournit la plateforme et l’accompagnement nécessaire pour intégrer correctement l’infrastructure à son environnement de gestion.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Créer et gérer un business WiFi à Madagascar",
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
      name: "Business WiFi Madagascar",
      item: "https://www.razafistore.com/guide/business-wifi-madagascar",
    },
  ],
};

export default function BusinessWifiMadagascarPage() {
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

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
            <Link href="/#demos" className="transition hover:text-neutral-950">
              Démos
            </Link>
            <Link href="/#offres" className="transition hover:text-neutral-950">
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
              <span>Guides</span>
              <span aria-hidden="true">›</span>
              <span className="text-neutral-800">Business WiFi Madagascar</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-600 md:text-sm">
              Business WiFi à Madagascar
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
              Créer et gérer un business WiFi à Madagascar
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              Transformez une connexion Internet en une zone WiFi organisée, accessible à vos clients et simple à gérer. Avec RAZAFI, vos utilisateurs peuvent choisir leur forfait, payer leur accès et se connecter, tandis que vous gardez le contrôle de votre activité à distance depuis votre téléphone.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#pourquoi"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-neutral-800 sm:w-auto md:text-base"
              >
                Découvrir RAZAFI
              </Link>
              <Link
                href="/#demos"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-neutral-200 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-50 sm:w-auto md:text-base"
              >
                Voir les démos
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-blue-600">Comprendre le modèle</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Un business WiFi, c’est quoi ?
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-700 md:text-lg">
              <p>
                Un business WiFi consiste à mettre une connexion Internet à disposition d’utilisateurs dans une zone définie, puis à organiser l’accès à cette connexion à travers des forfaits WiFi.
              </p>
              <p>
                La couverture peut être créée autour d’une maison, d’un commerce, d’un établissement ou de plusieurs lieux, selon l’infrastructure disponible et les besoins du projet.
              </p>
              <p>
                RAZAFI ajoute la couche de gestion qui transforme ce réseau en véritable service : portail utilisateur, forfaits, paiement mobile, activation des accès, suivi des clients et gestion à distance.
              </p>
              <p className="font-semibold text-neutral-950">
                L’objectif est simple : rendre votre zone WiFi plus autonome et plus facile à gérer au quotidien.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-blue-600">Infrastructure</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                De quoi avez-vous besoin pour créer votre zone WiFi ?
              </h2>
              <p className="mt-5 leading-8 text-neutral-600">
                Une installation RAZAFI repose sur quatre éléments principaux, chacun avec un rôle clair.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {setupCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-[2rem] border border-neutral-200 bg-white p-6 md:p-8"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">{card.title}</h3>
                    <p className="mt-3 leading-7 text-neutral-600">{card.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-blue-100 bg-blue-50/60 p-6 md:p-8">
              <p className="leading-8 text-neutral-700">
                RAZAFI n’impose pas une marque unique de point d’accès. Différents équipements peuvent être utilisés lorsqu’ils fonctionnent dans une configuration compatible en mode point d’accès ou bridge. Le propriétaire choisit, achète et installe ses AP ; RAZAFI fournit l’accompagnement de configuration nécessaire.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-blue-600">Parcours client</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Comment vos clients achètent-ils leur accès WiFi ?
              </h2>
              <p className="mt-5 leading-8 text-neutral-600">
                Le parcours est conçu pour réduire au maximum les interventions manuelles du propriétaire.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {paymentSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_22px_60px_rgba(0,0,0,0.05)]"
                >
                  <span className="text-sm font-semibold text-blue-600">{step.number}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] bg-neutral-950 p-7 text-white md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Paiement mobile avec MVola</h3>
                  <p className="mt-3 leading-7 text-neutral-300">
                    MVola est actuellement le moyen de paiement mobile opérationnel avec RAZAFI. D’autres moyens de paiement sont progressivement prévus ou intégrés à la plateforme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-neutral-200 bg-neutral-50 p-7 md:p-10">
            <p className="text-sm font-semibold text-blue-600">Plus d’autonomie</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Vos clients deviennent plus autonomes
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-neutral-600">
              <p>
                Une zone WiFi ne devrait pas vous obliger à intervenir à chaque vente. Avec RAZAFI, le client peut suivre un parcours clair pour obtenir son accès sans avoir systématiquement besoin de vous contacter.
              </p>
              <p>
                Cela permet au propriétaire de consacrer moins de temps aux tâches répétitives comme la création manuelle des accès, la vérification permanente des forfaits ou l’assistance pour des questions simples.
              </p>
              <p>
                L’Assistant IA RAZAFI peut également accompagner l’utilisateur directement dans l’environnement RAZAFI lorsqu’il a besoin d’aide ou d’informations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600">Gestion à distance</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Gérez votre zone WiFi depuis votre téléphone
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                RAZAFI est pensé pour permettre au propriétaire de suivre son activité même lorsqu’il n’est pas physiquement présent sur place. L’objectif n’est pas de transformer votre téléphone en outil réseau complexe, mais de vous donner une vision simple de votre activité WiFi.
              </p>

              <ul className="mt-7 space-y-3">
                {ownerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-neutral-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="leading-7">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/guide/wifi-intelligence-artificielle"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-blue-600"
              >
                Découvrir le guide WiFi & Intelligence Artificielle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/admin-mobile.jpg"
                alt="Gestion d’une zone WiFi RAZAFI depuis un téléphone"
                width={900}
                height={1200}
                className="h-auto w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold text-blue-600">RAZAFI multi-site</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-6xl">
                Plusieurs zones WiFi, un seul compte RAZAFI
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
                Votre activité peut évoluer au-delà d’un seul emplacement. Un même propriétaire peut gérer plusieurs zones WiFi depuis le même compte, sans multiplier les identifiants.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Un seul compte</h3>
                <p className="mt-3 leading-7 text-neutral-600">
                  Votre identité propriétaire reste centralisée, même lorsque vous exploitez plusieurs zones WiFi.
                </p>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <MapPinned className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Des sites indépendants</h3>
                <p className="mt-3 leading-7 text-neutral-600">
                  Chaque zone WiFi conserve sa propre infrastructure, ses utilisateurs, son activité et sa configuration.
                </p>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Une gestion centralisée</h3>
                <p className="mt-3 leading-7 text-neutral-600">
                  Depuis le même espace RAZAFI, vous pouvez passer d’un site à l’autre et suivre votre activité depuis votre téléphone.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] bg-blue-600 p-7 text-white md:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Évolutif</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Une zone aujourd’hui. Plusieurs sites demain. Un seul compte RAZAFI.
              </h3>
              <p className="mt-4 leading-8 text-blue-50">
                Chaque site peut également évoluer avec davantage de points d’accès selon la couverture recherchée et la capacité de votre connexion Internet. RAZAFI reste la plateforme de gestion pendant que votre infrastructure réseau évolue.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 px-5 py-16 text-white md:py-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold text-blue-400">Connexion Internet</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Starlink, fibre ou autre connexion Internet ?
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-300 md:text-lg">
              <p>
                RAZAFI n’est pas limité à Starlink. Une zone WiFi peut techniquement être construite à partir de Starlink, d’une connexion fibre ou d’une autre connexion Internet compatible, à condition que la qualité et la capacité de la connexion soient adaptées à l’usage prévu.
              </p>
              <p>
                Le choix dépend notamment de votre localisation, de la disponibilité des fournisseurs, du nombre d’utilisateurs et du niveau de service que vous souhaitez proposer.
              </p>
              <p className="text-white">
                La compatibilité technique d’une connexion Internet ne signifie pas automatiquement que toutes les formes de redistribution ou de revente sont autorisées. Le propriétaire doit respecter les conditions de son fournisseur Internet ainsi que les règles applicables à son activité.
              </p>
            </div>
            <p className="mt-7 text-sm font-semibold text-neutral-400">
              Guide détaillé Starlink & zone WiFi à Madagascar : prochainement.
            </p>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-200 p-7 md:p-9">
              <p className="text-sm font-semibold text-blue-600">Compatibilité réseau</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                Faut-il obligatoirement utiliser des points d’accès MikroTik ?
              </h2>
              <p className="mt-5 leading-8 text-neutral-600">
                Non. RAZAFI utilise MikroTik comme élément de contrôle du réseau, mais les points d’accès peuvent provenir de différentes marques lorsqu’ils sont configurés de façon compatible avec l’architecture. Cela permet au propriétaire de choisir les équipements les mieux adaptés à son environnement.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 p-7 md:p-9">
              <p className="text-sm font-semibold text-blue-600">Pour quels projets ?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                À qui peut servir une zone WiFi RAZAFI ?
              </h2>
              <p className="mt-5 leading-8 text-neutral-600">
                RAZAFI peut convenir à différents projets : autour d’une habitation, dans un commerce, un hébergement, un espace privé ou communautaire, ou sur plusieurs sites exploités par le même propriétaire. La configuration doit toujours être adaptée au lieu, à la connexion Internet et au cadre applicable.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[2.5rem] border border-neutral-200 bg-white p-7 md:p-10">
              <p className="text-sm font-semibold text-blue-600">Votre identité</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Une zone WiFi qui porte votre marque
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                RAZAFI permet au propriétaire de personnaliser plusieurs éléments visibles de son environnement client, notamment l’identité de sa zone WiFi, son lieu, sa marque et certains éléments du portail. Le client comprend ainsi où il se connecte, quel service il utilise et comment obtenir son accès.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold text-blue-600">Offres RAZAFI</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Choisissez le modèle adapté à votre activité
            </h2>
            <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
              RAZAFI propose plusieurs offres selon les fonctionnalités que vous souhaitez utiliser et le modèle de facturation choisi. Les offres publiques sont maintenues depuis le catalogue actif de la plateforme afin de rester à jour.
            </p>
            <Link
              href="/#offres"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Voir les offres RAZAFI
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600">Démarrer</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Comment commencer avec RAZAFI ?
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                ["01", "Préparez votre connexion Internet", "Starlink, fibre ou autre connexion adaptée à votre projet."],
                ["02", "Préparez votre infrastructure réseau", "Routeur MikroTik et points d’accès nécessaires à votre couverture."],
                ["03", "RAZAFI prépare votre environnement", "Le routeur et votre zone sont configurés pour fonctionner avec la plateforme."],
                ["04", "Lancez votre zone WiFi", "Vos utilisateurs peuvent accéder au portail, choisir leurs forfaits et utiliser le service."],
              ].map(([number, title, text]) => (
                <div key={number} className="rounded-[2rem] border border-neutral-200 bg-white p-6 md:p-8">
                  <span className="text-sm font-semibold text-blue-600">{number}</span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600">Questions fréquentes</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Business WiFi & RAZAFI
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
              Prêt à lancer votre zone WiFi ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-300">
              Transformez votre connexion Internet en un service WiFi plus simple à vendre, à suivre et à gérer. Automatisez les accès de vos clients et gardez le contrôle de votre activité depuis votre téléphone.
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
