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
    text: "Ils choisissent leur forfait, paient et obtiennent leur accès sans intervention manuelle.",
  },
  {
    title: "Vous gardez le contrôle à distance",
    text: "Suivez votre zone WiFi, vos clients et votre activité depuis votre téléphone.",
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

export const PUBLIC_ASSISTANT_KNOWLEDGE = {
  hero_title: "Automatisez votre zone WiFi.",
  hero_features: HERO_FEATURES,
  value_proposition:
    "RAZAFI est une plateforme qui automatise la vente et la gestion d’accès WiFi. Les clients choisissent un forfait, paient et obtiennent leur accès ; le propriétaire suit son activité à distance.",
  key_strengths: [
    "Paiement automatique",
    "Activation instantanée",
    "Gestion à distance",
    "Portail WiFi personnalisé",
    "Plan Personnalisé",
    "Assistant IA",
    "Espace client",
    "Gestion de plusieurs zones WiFi avec un même compte propriétaire",
  ],
  hardware_note:
    "RAZAFI configure le routeur MikroTik. Le propriétaire achète et installe ses points d’accès WiFi (AP). RAZAFI fournit un guide de configuration pour les AP et n’effectue pas leur installation physique.",
  pricing_note:
    "Les offres et tarifs publics affichés sur le site proviennent du catalogue RAZAFI actif. Selon l’offre, le modèle peut être une commission, un abonnement mensuel, ou les deux.",
  payment_note:
    "Les moyens de paiement RAZAFI disponibles sont inclus dans l’offre concernée.",
  personalized_plan_note:
    "Avec RAZAFI Sur Mesure, ce sont les clients WiFi qui composent leur propre forfait selon Durée, Data et Vitesse.",
  subscription_status_note:
    "RAZAFI intègre un cycle mensuel d’abonnement. Ne pas présenter comme entièrement certifié en production le cycle réel complet grace → suspended → paiement → réactivation tant que sa certification réelle n’est pas terminée.",
  faq_summary: FAQ_ITEMS.map((faq) => `${faq.q} → ${faq.a}`),
  demo_options: ["Démo propriétaire", "Démo client"],
  guide_path: "/guide/wifi-intelligence-artificielle",
} as const;
