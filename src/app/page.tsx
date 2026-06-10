"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wifi,
  Smartphone,
  Router,
  MapPin,
  BarChart3,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/261340500592?text=Bonjour%20RAZAFI%2C%20je%20souhaite%20discuter%20d%27une%20installation%20WiFi.";

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

const faqItems = [
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

      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:pb-16 md:pt-32">
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
            Transformez votre connexion Internet en source de revenus.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
            Vendez l’accès WiFi de votre Starlink ou Fibre grâce à la plateforme RAZAFI.
          </p>

          <p className="mx-auto mt-7 max-w-3xl text-xl font-medium tracking-tight md:text-2xl">
            Une seule installation peut connecter tout un fokontany.
          </p>

          <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:scale-105 hover:bg-blue-700"
            >
              Commencer
            </a>
            <a
              href="#faq"
              className="rounded-full border border-neutral-200 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-neutral-50"
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
                <p className="px-5 pb-5 text-[15px] leading-6 text-neutral-600">
                  {faq.a}
                </p>
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

      <a
        href={whatsappUrl}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 font-semibold text-white shadow-xl transition hover:scale-105 md:bottom-5 md:right-5 md:h-auto md:w-auto md:gap-2 md:px-5 md:py-4"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden md:inline">WhatsApp</span>
      </a>
    </main>
  );
}