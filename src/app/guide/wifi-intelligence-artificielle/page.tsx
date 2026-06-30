import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "WiFi et intelligence artificielle : comment RAZAFI simplifie la gestion d’une zone WiFi",
  description:
    "Découvrez comment RAZAFI utilise l’intelligence artificielle et un assistant IA pour simplifier la gestion d’une zone WiFi, guider les utilisateurs, aider les propriétaires et améliorer l’expérience réseau.",
};

export default function WifiIntelligenceArtificiellePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-bold tracking-tight">
            RAZAFI
          </Link>

          <Link
            href="/"
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
          >
            Retour au site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
          Guide RAZAFI
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
          WiFi et intelligence artificielle : comment RAZAFI simplifie la
          gestion d’une zone WiFi
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Le WiFi est devenu essentiel dans la vie quotidienne. Dans une maison,
          un quartier, un commerce ou une zone partagée, les utilisateurs veulent
          une connexion simple, rapide et accessible. Mais pour le propriétaire
          du réseau, gérer une zone WiFi peut vite devenir répétitif : suivre les
          utilisateurs, comprendre les forfaits, vérifier l’activité, répondre
          aux questions, adapter les offres et garder une bonne expérience pour
          tout le monde.
        </p>

        <p className="mt-5 text-lg leading-8 text-neutral-700">
          C’est là que l’intelligence artificielle peut apporter une vraie
          différence. RAZAFI n’est pas seulement un portail WiFi. C’est une
          plateforme WiFi communautaire avec assistant IA, pensée pour rendre la
          gestion plus simple, plus claire et plus humaine.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Pourquoi l’intelligence artificielle devient importante dans le WiFi ?
          </h2>

          <p className="mt-4 leading-8 text-neutral-700">
            Un réseau WiFi ne se limite pas au signal. Il y a aussi les
            utilisateurs, les forfaits, les paiements, les habitudes de
            connexion, les heures de forte utilisation et les décisions à prendre
            pour garder un service fluide.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            L’intelligence artificielle peut aider le propriétaire à mieux
            comprendre ce qui se passe, sans devoir tout analyser manuellement.
            Elle peut accompagner les décisions, expliquer les informations
            importantes et rendre la gestion du réseau plus accessible, même pour
            une personne qui n’est pas technicienne.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Comment RAZAFI utilise l’assistant IA ?
          </h2>

          <p className="mt-4 leading-8 text-neutral-700">
            L’assistant IA RAZAFI est conçu pour simplifier le quotidien. Il peut
            aider les utilisateurs à comprendre comment se connecter, comment
            choisir un forfait, comment payer via Mobile Money et comment
            utiliser leur accès Internet.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            Pour le propriétaire, l’assistant peut aussi aider à mieux comprendre
            son activité : quels forfaits sont utiles, comment adapter les
            offres, comment lire certaines informations du dashboard et comment
            prendre de meilleures décisions pour sa zone WiFi.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            L’objectif n’est pas de compliquer la technologie. L’objectif est de
            rendre le WiFi plus simple à utiliser et plus facile à gérer.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Une plateforme WiFi plus simple pour les utilisateurs
          </h2>

          <p className="mt-4 leading-8 text-neutral-700">
            Avec RAZAFI, l’utilisateur n’a pas besoin d’installer une
            application. Il se connecte au WiFi, choisit un forfait, paie via
            Mobile Money et reçoit son accès automatiquement.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            L’assistant IA peut accompagner cette expérience en expliquant les
            étapes avec des mots simples. Cela réduit la confusion, les questions
            répétitives et les pertes de temps.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Un assistant pour aider le propriétaire à gagner du temps
          </h2>

          <p className="mt-4 leading-8 text-neutral-700">
            Un propriétaire qui partage sa connexion Starlink ou Fibre n’a pas
            forcément envie de passer toute sa journée à gérer les détails
            techniques. Il veut pouvoir suivre son activité, comprendre son
            réseau et prendre les bonnes décisions sans perdre trop d’énergie.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            RAZAFI va dans ce sens : moins de tâches répétitives, plus de
            clarté, plus de liberté. L’assistant IA peut devenir un véritable
            soutien dans la gestion quotidienne. Il aide à transformer les
            données du réseau en informations plus faciles à comprendre.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Intelligence artificielle et expérience réseau
          </h2>

          <p className="mt-4 leading-8 text-neutral-700">
            L’intelligence artificielle peut aussi aider à mieux comprendre
            l’utilisation du réseau : moments chargés, habitudes des utilisateurs,
            forfaits populaires, demandes fréquentes ou zones qui nécessitent
            plus d’attention.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            Dans une plateforme comme RAZAFI, cette intelligence peut aider le
            propriétaire à améliorer progressivement l’expérience des
            utilisateurs, sans devoir tout surveiller manuellement.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            RAZAFI : une plateforme WiFi intelligente et accessible
          </h2>

          <p className="mt-4 leading-8 text-neutral-700">
            RAZAFI combine plusieurs éléments importants : portail captif,
            paiement Mobile Money, dashboard propriétaire, gestion des forfaits
            et assistant IA intégré.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            Cette combinaison permet de créer une zone WiFi plus moderne, plus
            simple à gérer et plus accessible pour les utilisateurs. L’idée est
            simple : la technologie doit travailler pour le propriétaire, pas
            l’inverse.
          </p>
        </section>

        <section className="mt-12 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Conclusion
          </h2>

          <p className="mt-4 leading-8 text-neutral-700">
            L’intelligence artificielle ne sert pas seulement à rendre le WiFi
            plus technique. Elle peut aussi rendre la gestion plus simple, plus
            claire et plus libre.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            Avec RAZAFI, le propriétaire peut mieux gérer sa zone WiFi, les
            utilisateurs sont mieux guidés, et le service devient plus naturel au
            quotidien.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            RAZAFI est une plateforme WiFi communautaire avec assistant IA,
            pensée pour aider les propriétaires à transformer leur connexion
            Internet en service utile, organisé et plus facile à gérer.
          </p>
        </section>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Découvrir RAZAFI
          </Link>

          <Link
            href="/#faq"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
          >
            Voir la FAQ
          </Link>
        </div>
      </article>
    </main>
  );
}