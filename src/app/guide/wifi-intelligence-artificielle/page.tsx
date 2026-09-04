import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FloatingRazafiContact from "@/components/FloatingRazafiContact";
import RazafiLoginMenu from "@/app/RazafiLoginMenu";
import { LEGAL_LINE, WHATSAPP_URL } from "@/content/publicSite";

export const metadata: Metadata = {
  title:
    "WiFi et intelligence artificielle : comment RAZAFI simplifie la gestion d’une zone WiFi",
  description:
    "Découvrez comment l’assistant IA RAZAFI aide à simplifier l’utilisation et la gestion d’une zone WiFi pour les propriétaires et leurs clients.",
};

export default function WifiIntelligenceArtificiellePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
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

      <article className="mx-auto max-w-3xl px-6 pb-16 pt-32 md:pb-24 md:pt-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
          Guide RAZAFI
        </p>

        <h1 className="text-4xl font-bold tracking-[-0.035em] text-neutral-950 md:text-5xl">
          WiFi et intelligence artificielle : comment RAZAFI simplifie la gestion d’une zone WiFi
        </h1>

        <p className="mt-7 text-lg leading-8 text-neutral-700">
          Gérer une zone WiFi ne se limite pas au signal. Il faut aussi suivre l’activité, comprendre les forfaits, répondre aux questions et garder une expérience simple pour les utilisateurs. RAZAFI intègre un assistant IA pour rendre ces tâches plus claires et plus faciles à gérer.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Pourquoi l’intelligence artificielle peut aider dans le WiFi ?
          </h2>
          <p className="mt-4 leading-8 text-neutral-700">
            Une zone WiFi produit de nombreuses informations utiles : activité, forfaits, paiements et questions des utilisateurs. L’intelligence artificielle peut aider à expliquer ces informations et à rendre la gestion plus accessible, même sans connaissances techniques avancées.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Comment RAZAFI utilise l’assistant IA ?
          </h2>
          <p className="mt-4 leading-8 text-neutral-700">
            L’assistant IA RAZAFI aide les utilisateurs à comprendre comment se connecter, choisir un forfait, payer et utiliser leur accès Internet.
          </p>
          <p className="mt-4 leading-8 text-neutral-700">
            Pour le propriétaire, l’assistant aide à mieux comprendre son activité, ses forfaits et les informations disponibles dans RAZAFI afin de prendre des décisions plus facilement.
          </p>
          <p className="mt-4 leading-8 text-neutral-700">
            L’objectif reste simple : réduire les questions répétitives et rendre la plateforme plus facile à utiliser au quotidien.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Une expérience plus simple pour les clients WiFi
          </h2>
          <p className="mt-4 leading-8 text-neutral-700">
            Les clients n’ont pas besoin d’installer une application. Ils se connectent au WiFi, choisissent un forfait, paient et obtiennent leur accès. L’assistant peut les guider lorsqu’ils ont une question sur le parcours.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Un assistant pour faire gagner du temps au propriétaire
          </h2>
          <p className="mt-4 leading-8 text-neutral-700">
            Le propriétaire d’une zone WiFi veut pouvoir suivre son activité et comprendre ce qui se passe sans passer son temps dans des tâches répétitives ou des détails techniques.
          </p>
          <p className="mt-4 leading-8 text-neutral-700">
            RAZAFI va dans ce sens : l’assistant transforme les informations disponibles dans la plateforme en explications plus faciles à comprendre et accompagne le propriétaire dans sa gestion quotidienne.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            RAZAFI : une plateforme WiFi plus intelligente
          </h2>
          <p className="mt-4 leading-8 text-neutral-700">
            RAZAFI réunit portail WiFi, paiement, activation, suivi propriétaire, gestion des forfaits, espace client et Assistant IA. L’intelligence artificielle complète ces outils sans remplacer la simplicité du parcours.
          </p>
          <p className="mt-4 leading-8 text-neutral-700">
            La technologie doit aider le propriétaire et ses clients, pas leur ajouter de la complexité.
          </p>
        </section>

        <section className="mt-12 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">En résumé</h2>
          <p className="mt-4 leading-8 text-neutral-700">
            L’Assistant IA RAZAFI aide à rendre une zone WiFi plus simple à utiliser et plus facile à gérer : les clients sont mieux guidés et le propriétaire comprend plus facilement les informations utiles à son activité.
          </p>
        </section>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#demos"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Voir les démos
          </Link>
          <Link
            href="/#offres"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
          >
            Découvrir les offres
          </Link>
        </div>
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
