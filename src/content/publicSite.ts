export const WHATSAPP_URL = "https://wa.me/261340500592";
export const PUBLIC_OFFERS_API_URL = "https://portal.razafistore.com/api/public/offers";

export const HERO_FEATURES = [
  "Paiement automatique",
  "Activation instantanée",
  "Gestion à distance",
  "Assistant IA intégré",
] as const;

export const WHY_RAZAFI = [
  {
    title: "Vos clients deviennent autonomes",
    text: "Avec MVola ou Airtel Money, ils choisissent leur forfait, paient et obtiennent leur accès sans intervention manuelle.",
    guideHref: "/guide/paiement-mobile-wifi-madagascar",
    guideLabel: "Lire le guide : Paiement mobile WiFi Madagascar",
  },
  {
    title: "Vous gardez le contrôle à distance",
    text: "Suivez votre zone WiFi, vos clients et votre activité depuis votre téléphone.",
    guideHref: "/guide/business-wifi-madagascar",
    guideLabel: "Lire le guide : Business WiFi Madagascar",
  },
  {
    title: "Votre WiFi porte votre identité",
    text: "Portail personnalisé à votre nom, votre logo et votre zone.",
  },
  {
    title: "Plus qu’un simple hotspot",
    text: "Plan Personnalisé, Assistant IA, espace client et outils de gestion intégrés.",
    guideHref: "/guide/wifi-intelligence-artificielle",
    guideLabel: "Lire le guide : WiFi et intelligence artificielle",
  },
] as const;

export const START_STEPS = [
  {
    number: "01",
    title: "Ayez une connexion Internet",
    text: "Starlink, Fibre ou autre connexion adaptée.",
  },
  {
    number: "02",
    title: "RAZAFI configure votre MikroTik",
    text: "Le routeur est préparé pour fonctionner avec la plateforme RAZAFI.",
  },
  {
    number: "03",
    title: "Installez vos points WiFi",
    text: "Vous choisissez et installez vos AP selon la couverture souhaitée. RAZAFI fournit le guide de configuration.",
  },
  {
    number: "04",
    title: "Votre zone WiFi est prête",
    text: "Vos clients peuvent choisir un forfait, payer et accéder à Internet automatiquement.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "De quoi ai-je besoin pour utiliser RAZAFI ?",
    a: "Une connexion Internet, un routeur MikroTik configuré par RAZAFI et des points d’accès WiFi pour couvrir votre zone.",
  },
  {
    q: "RAZAFI fournit-il le matériel ?",
    a: "RAZAFI configure le routeur MikroTik. Vous choisissez et installez vos points d’accès WiFi ; RAZAFI fournit le guide de configuration.",
  },
  {
    q: "Quels moyens de paiement mobile sont disponibles avec RAZAFI ?",
    a: "MVola et Airtel Money sont actuellement disponibles avec RAZAFI. Orange Money n’est pas encore intégré.",
  },
  {
    q: "Commission ou abonnement : quelle différence ?",
    a: "Avec la commission, RAZAFI prélève un pourcentage sur vos ventes. Avec l’abonnement, vous payez un montant fixe chaque mois pour votre zone WiFi.",
  },
  {
    q: "Puis-je gérer plusieurs zones WiFi ?",
    a: "Oui. Un même compte propriétaire peut gérer plusieurs zones WiFi.",
  },
] as const;

export const LEGAL_LINE =
  "RAZAFI · NIF 5004006983 · STAT 46900 11 2020 0 02222 · Madagascar · Informations légales";

export function formatAriary(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value).replace(/\u202f/g, " ");
}

