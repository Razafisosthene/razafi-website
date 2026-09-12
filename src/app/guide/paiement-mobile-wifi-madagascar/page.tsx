import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CreditCard,
  MapPinned,
  Network,
  Smartphone,
  Wifi,
} from "lucide-react";
import FloatingRazafiContact from "@/components/FloatingRazafiContact";
import RazafiLoginMenu from "@/app/RazafiLoginMenu";
import { LEGAL_LINE, WHATSAPP_URL } from "@/content/publicSite";

const pageTitle = "Paiement mobile WiFi Madagascar | MVola & RAZAFI";
const pageDescription =
  "Découvrez comment automatiser le paiement d’un accès WiFi à Madagascar avec RAZAFI : MVola disponible, activation après paiement confirmé et gestion à distance.";
const canonicalPath = "/guide/paiement-mobile-wifi-madagascar";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "Paiement mobile pour zone WiFi à Madagascar | RAZAFI",
    description:
      "Forfait WiFi, paiement MVola, validation et activation : découvrez comment RAZAFI automatise le parcours d’achat d’un accès WiFi.",
    url: canonicalPath,
    siteName: "RAZAFI",
    locale: "fr_MG",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Paiement mobile pour zone WiFi à Madagascar | RAZAFI",
    description:
      "Forfait WiFi, paiement MVola, validation et activation avec RAZAFI.",
  },
};

const paymentSteps = [
  {
    number: "01",
    title: "Connexion au WiFi",
    text: "Le client rejoint votre réseau WiFi et arrive sur le portail RAZAFI.",
  },
  {
    number: "02",
    title: "Choix du forfait",
    text: "Il consulte les offres disponibles et choisit le forfait qui correspond à son besoin.",
  },
  {
    number: "03",
    title: "Paiement mobile",
    text: "Il poursuit son achat avec MVola, actuellement opérationnel avec RAZAFI.",
  },
  {
    number: "04",
    title: "Validation",
    text: "RAZAFI suit le résultat de la transaction afin de déterminer si le paiement est confirmé.",
  },
  {
    number: "05",
    title: "Activation",
    text: "Après confirmation du paiement, l’accès correspondant peut être délivré au client.",
  },
];

const ownerBenefits = [
  {
    title: "Le client choisit lui-même",
    text: "Les forfaits disponibles sont visibles depuis le portail RAZAFI, sans devoir demander chaque prix au propriétaire.",
  },
  {
    title: "Le paiement est associé à l’achat",
    text: "Le paiement intervient dans le même parcours que le choix du forfait, afin de garder une relation claire entre l’achat et la transaction.",
  },
  {
    title: "L’accès est délivré après confirmation",
    text: "Lorsque la transaction est confirmée selon le parcours prévu, RAZAFI peut poursuivre la délivrance de l’accès sans création manuelle.",
  },
  {
    title: "Vous suivez l’activité à distance",
    text: "Le propriétaire conserve son espace RAZAFI pour suivre ses clients, ses ventes et son activité depuis son téléphone ou son navigateur.",
  },
];

const paymentStatuses = [
  {
    name: "MVola",
    status: "Disponible",
    badgeClass: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    text: "MVola est actuellement opérationnel pour les paiements RAZAFI. Les clients peuvent utiliser le parcours MVola lorsqu’il est proposé sur leur zone WiFi.",
  },
  {
    name: "Airtel Money",
    status: "Intégration en cours",
    badgeClass: "bg-blue-50 text-blue-700 ring-blue-200",
    text: "L’intégration Airtel Money est en cours. La mise en production reste soumise à la validation finale nécessaire avant que ce moyen de paiement soit annoncé comme disponible.",
  },
  {
    name: "Orange Money",
    status: "Prévu",
    badgeClass: "bg-neutral-100 text-neutral-700 ring-neutral-200",
    text: "RAZAFI a déjà engagé les premiers échanges concernant Orange Money, mais l’intégration technique n’a pas encore commencé. Orange Money n’est donc pas actuellement disponible avec RAZAFI.",
  },
];

const faqItems = [
  {
    q: "Peut-on payer un forfait WiFi avec MVola ?",
    a: "Oui. MVola est actuellement le moyen de paiement mobile opérationnel avec RAZAFI.",
  },
  {
    q: "Airtel Money est-il disponible avec RAZAFI ?",
    a: "Pas encore en production. L’intégration Airtel Money est en cours et attend la validation finale nécessaire avant son activation commerciale.",
  },
  {
    q: "Orange Money est-il disponible avec RAZAFI ?",
    a: "Pas actuellement. Des premiers échanges ont déjà eu lieu, mais l’intégration technique Orange Money n’a pas encore commencé.",
  },
  {
    q: "L’accès WiFi est-il activé automatiquement après le paiement ?",
    a: "Lorsque le paiement est confirmé selon le parcours prévu, RAZAFI peut poursuivre automatiquement la délivrance de l’accès correspondant sans création manuelle par le propriétaire.",
  },
  {
    q: "Que se passe-t-il si le paiement échoue ?",
    a: "Un paiement non confirmé ne doit pas être traité comme une vente réussie. L’accès correspondant ne doit donc pas être délivré comme un accès payé tant que le paiement n’est pas confirmé.",
  },
  {
    q: "Peut-on suivre les ventes depuis un téléphone ?",
    a: "Oui. RAZAFI est conçu pour permettre au propriétaire de suivre et gérer son activité à distance depuis son espace propriétaire.",
  },
  {
    q: "Peut-on utiliser le paiement mobile sur plusieurs zones WiFi ?",
    a: "Oui. Un propriétaire peut gérer plusieurs zones WiFi depuis le même compte RAZAFI. Chaque zone reste indépendante dans sa gestion et son activité.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Automatisez le paiement de votre zone WiFi à Madagascar",
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
      name: "Paiement mobile WiFi Madagascar",
      item: "https://www.razafistore.com/guide/paiement-mobile-wifi-madagascar",
    },
  ],
};

export default function PaiementMobileWifiMadagascarPage() {
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
              className="mx-auto mb-7 flex max-w-max flex-wrap items-center justify-center gap-2 text-xs font-medium text-neutral-500"
            >
              <Link href="/" className="transition hover:text-neutral-950">
                Accueil
              </Link>
              <span aria-hidden="true">›</span>
              <span>Guides</span>
              <span aria-hidden="true">›</span>
              <span className="text-neutral-800">Paiement mobile WiFi Madagascar</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 md:text-sm md:tracking-[0.34em]">
              Paiement mobile WiFi à Madagascar
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
              Automatisez le paiement de votre zone WiFi à Madagascar
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              Avec RAZAFI, vos clients peuvent choisir leur forfait WiFi, effectuer leur paiement mobile et obtenir leur accès sans que vous ayez à gérer chaque vente manuellement.
            </p>
            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              <Check className="h-4 w-4" />
              MVola est actuellement disponible pour les paiements RAZAFI
            </div>
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
            <p className="text-sm font-semibold text-blue-600">Automatiser la vente</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Pourquoi automatiser le paiement de votre zone WiFi ?
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-700 md:text-lg">
              <p>
                Vendre des accès WiFi manuellement peut rapidement devenir répétitif. À chaque nouveau client, le propriétaire doit parfois vérifier le paiement, choisir ou créer un accès, transmettre les informations nécessaires puis confirmer au client qu’il peut se connecter.
              </p>
              <p>
                Lorsque le nombre de ventes augmente, ce fonctionnement peut prendre beaucoup de temps. RAZAFI réduit ces interventions en regroupant dans un même parcours le choix du forfait, le paiement mobile, la validation de la transaction et la délivrance de l’accès.
              </p>
              <p className="font-semibold text-neutral-950">
                Moins d’interventions manuelles pour le propriétaire, davantage d’autonomie pour le client.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-blue-600">Parcours client</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Du choix du forfait à l’accès Internet
              </h2>
              <p className="mt-5 leading-8 text-neutral-600">
                Le parcours client RAZAFI est conçu pour rester clair, de la connexion au réseau jusqu’à la délivrance de l’accès.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {paymentSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_22px_60px_rgba(0,0,0,0.04)]"
                >
                  <span className="text-sm font-semibold text-blue-600">{step.number}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] bg-neutral-950 p-7 text-center text-white md:p-9">
              <p className="text-sm font-semibold text-blue-400">Le parcours en une ligne</p>
              <p className="mt-3 text-balance text-xl font-semibold tracking-tight md:text-2xl">
                WiFi → Forfait → MVola → Paiement confirmé → Accès Internet
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600">Disponible avec RAZAFI</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Paiement WiFi avec MVola
              </h2>
              <div className="mt-6 space-y-4 leading-8 text-neutral-600">
                <p>
                  MVola est actuellement le moyen de paiement mobile opérationnel pour les ventes d’accès WiFi RAZAFI.
                </p>
                <p>
                  Le client choisit son forfait depuis le portail, poursuit le parcours de paiement MVola et valide la transaction depuis son téléphone. RAZAFI suit ensuite le résultat du paiement.
                </p>
                <p>
                  Lorsque celui-ci est confirmé, la plateforme peut poursuivre automatiquement la délivrance de l’accès correspondant. Le propriétaire n’a donc pas besoin de vérifier manuellement chaque transaction et de créer chaque accès un par un lorsque le parcours se déroule normalement.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-neutral-950 p-7 text-white shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <CreditCard className="h-6 w-6" />
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">MVola</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Un paiement relié au forfait choisi</h3>
              <p className="mt-5 leading-8 text-neutral-300">
                L’objectif est de relier clairement un forfait WiFi, un paiement MVola et l’accès correspondant, sans transformer le parcours client en procédure technique.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-sm font-medium text-neutral-200">
                <span className="rounded-full border border-white/15 px-3 py-1.5">Forfait WiFi</span>
                <span className="rounded-full border border-white/15 px-3 py-1.5">Paiement MVola</span>
                <span className="rounded-full border border-white/15 px-3 py-1.5">Validation</span>
                <span className="rounded-full border border-white/15 px-3 py-1.5">Accès</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-blue-600">Côté propriétaire</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Vous n’avez plus besoin de gérer chaque vente manuellement
              </h2>
              <p className="mt-5 leading-8 text-neutral-600">
                Le paiement mobile ne sert pas seulement à encaisser. Dans RAZAFI, il fait partie d’un parcours qui automatise une partie importante de la vente d’accès WiFi.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {ownerBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[2rem] border border-neutral-200 bg-white p-7 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-blue-600">Statut des intégrations</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Quels moyens de paiement mobile sont disponibles avec RAZAFI ?
              </h2>
              <p className="mt-5 leading-8 text-neutral-600">
                RAZAFI développe progressivement ses possibilités de paiement mobile, mais tous les opérateurs ne sont pas encore au même stade.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {paymentStatuses.map((method) => (
                <div key={method.name} className="rounded-[2rem] border border-neutral-200 bg-white p-7 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">{method.name}</h3>
                    <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${method.badgeClass}`}>
                      {method.status}
                    </span>
                  </div>
                  <p className="mt-5 leading-7 text-neutral-600">{method.text}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-blue-100 bg-blue-50/60 p-6 md:p-8">
              <p className="leading-8 text-neutral-700">
                À terme, proposer plusieurs moyens de paiement pourra permettre à davantage de clients de finaliser leur achat avec le service Mobile Money qu’ils utilisent déjà. Aujourd’hui, MVola reste le moyen de paiement mobile opérationnel sur RAZAFI.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 px-5 py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-400">Forfaits WiFi</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Le paiement reste lié au forfait choisi
              </h2>
              <p className="mt-6 leading-8 text-neutral-300">
                Un paiement ne donne pas simplement un accès Internet générique. Le client achète un forfait défini dans votre zone WiFi, avec les règles prévues par le propriétaire.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {["Durée", "Data lorsque applicable", "Vitesse", "Tarif"].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="font-semibold">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-200 p-7 md:p-9">
              <p className="text-sm font-semibold text-blue-600">Vos offres</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Vous définissez vos forfaits WiFi</h2>
              <p className="mt-5 leading-8 text-neutral-600">
                Chaque zone WiFi peut avoir ses propres offres en fonction de son activité et de sa clientèle. RAZAFI fournit des outils pour accompagner la préparation et la gestion des forfaits sans transformer cette tâche en configuration réseau complexe.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 p-7 md:p-9">
              <p className="text-sm font-semibold text-blue-600">À distance</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Continuez à vendre même lorsque vous n’êtes pas sur place</h2>
              <p className="mt-5 leading-8 text-neutral-600">
                Le client peut se connecter au réseau, choisir son forfait et poursuivre son paiement depuis son propre téléphone, tandis que le propriétaire suit son activité à distance depuis son espace RAZAFI.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold text-blue-600">RAZAFI multi-site</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Un seul compte, plusieurs zones WiFi
              </h2>
              <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
                Un propriétaire RAZAFI peut gérer plusieurs zones WiFi depuis le même compte. Chaque site reste indépendant avec sa propre infrastructure, ses utilisateurs et son activité, tout en restant accessible depuis le même espace de gestion.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-[2rem] border border-neutral-200 bg-white p-7">
                <Smartphone className="h-6 w-6 text-blue-600" />
                <h3 className="mt-5 text-xl font-semibold">Une identité propriétaire</h3>
                <p className="mt-3 leading-7 text-neutral-600">Pas besoin de multiplier les comptes pour suivre plusieurs zones RAZAFI.</p>
              </div>
              <div className="rounded-[2rem] border border-neutral-200 bg-white p-7">
                <MapPinned className="h-6 w-6 text-blue-600" />
                <h3 className="mt-5 text-xl font-semibold">Des sites séparés</h3>
                <p className="mt-3 leading-7 text-neutral-600">Chaque zone conserve sa propre gestion, ses utilisateurs et son activité.</p>
              </div>
              <div className="rounded-[2rem] border border-neutral-200 bg-white p-7">
                <Network className="h-6 w-6 text-blue-600" />
                <h3 className="mt-5 text-xl font-semibold">Paiement intégré au parcours</h3>
                <p className="mt-3 leading-7 text-neutral-600">Le paiement mobile peut faire partie du parcours client de plusieurs zones gérées depuis le même compte.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-neutral-200 bg-white p-7 md:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
              <CreditCard className="h-5 w-5 text-blue-600" />
            </div>
            <p className="mt-6 text-sm font-semibold text-blue-600">Transaction non confirmée</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Et si un paiement échoue ou reste en attente ?
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-neutral-600">
              <p>
                Tous les paiements mobiles ne se terminent pas nécessairement par une confirmation. Selon le réseau, l’opérateur ou le traitement de la transaction, un paiement peut être refusé, échouer ou rester temporairement en attente.
              </p>
              <p>
                RAZAFI ne doit donc pas considérer automatiquement une simple tentative de paiement comme une vente réussie.
              </p>
            </div>
            <blockquote className="mt-7 rounded-[1.5rem] bg-neutral-50 p-5 font-semibold leading-7 text-neutral-900">
              Un accès payé ne doit être délivré comme tel que lorsque le paiement atteint l’état attendu pour être considéré comme confirmé.
            </blockquote>
          </div>
        </section>

        <section className="bg-neutral-50 px-5 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600">Simplicité</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Un parcours conçu pour rester simple
              </h2>
              <p className="mt-6 leading-8 text-neutral-600">
                Le client ne devrait pas avoir besoin de comprendre le fonctionnement du routeur, du hotspot ou de la plateforme technique. Il doit surtout savoir quel forfait choisir, combien il coûte, comment payer et comment accéder à Internet.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Choisir son forfait", "Comprendre le prix", "Effectuer le paiement", "Obtenir son accès"].map((item) => (
                <div key={item} className="rounded-[2rem] border border-neutral-200 bg-white p-6">
                  <Wifi className="h-5 w-5 text-blue-600" />
                  <p className="mt-4 font-semibold text-neutral-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-blue-100 bg-blue-50/60 p-7 md:p-10">
            <p className="text-sm font-semibold text-blue-600">À lire aussi</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Vous construisez votre première zone WiFi ?
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-neutral-700">
              Le paiement mobile n’est qu’une partie de l’infrastructure. Découvrez aussi la connexion Internet, MikroTik, les points d’accès, la gestion à distance et le fonctionnement multi-site dans notre guide Business WiFi à Madagascar.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guide/business-wifi-madagascar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Lire le guide Business WiFi
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/guide/starlink-zone-wifi-madagascar"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Starlink & zone WiFi
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
                Paiement mobile WiFi & RAZAFI
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
              Automatisez la vente de vos accès WiFi
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-300">
              Laissez vos clients choisir leur forfait, effectuer leur paiement et obtenir leur accès pendant que vous gardez le contrôle de votre activité à distance.
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
