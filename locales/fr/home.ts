import type { HomeTranslations } from "@/lib/i18n/types";

const home: HomeTranslations = {
  hero: {
    titleLine1: "Calculateurs gratuits de matériaux",
    titleHighlight: " de construction",
    description:
      "Estimations précises pour les professionnels du bâtiment et les autoconstructeurs en France. Obtenez votre liste de matériaux en quelques secondes — des fondations à la toiture.",
    ctaPrimary: "Parcourir tous les calculateurs",
    ctaSecondary: "Calculateur de montants \u2192",
  },

  categories: {
    heading: "Catégories de calculateurs",
    calculatorsCount: (count: number) => `${count} calculateurs \u2192`,
  },

  popular: {
    heading: "Calculateurs les plus populaires",
    items: [
      {
        href: "/calculators/wall-framing/stud-calculator",
        label: "Calculateur de montants",
        desc: "Entraxe de 40 ou 60 cm avec angles et ouvertures",
      },
      {
        href: "/calculators/roofing/shingle-calculator",
        label: "Calculateur de bardeaux",
        desc: "Nombre de paquets pour toute surface de toiture",
      },
      {
        href: "/calculators/floor-framing/floor-joist-calculator",
        label: "Calculateur de solives",
        desc: "Solives par portée et espacement",
      },
      {
        href: "/calculators/roofing/truss-calculator",
        label: "Calculateur de fermettes",
        desc: "Nombre de fermettes par longueur de toiture",
      },
      {
        href: "/calculators/insulation-drywall/drywall-calculator",
        label: "Calculateur de plaques de plâtre",
        desc: "Nombre de plaques pour murs et plafonds",
      },
      {
        href: "/calculators/foundation/anchor-bolt-calculator",
        label: "Calculateur de tiges d'ancrage",
        desc: "Tiges filetées pour le périmètre de fondation",
      },
    ],
  },

  valueProps: {
    heading: "Pourquoi utiliser BuildEstimatory ?",
    items: [
      {
        icon: "\u26A1",
        title: "Résultats instantanés",
        desc: "Obtenez votre liste de matériaux en quelques secondes — sans compte ni inscription.",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "Normes françaises",
        desc: "Conforme aux pratiques de construction françaises : entraxes de 40 et 60 cm, plaques BA13/BA18, DTU et RE 2020.",
      },
      {
        icon: "\uD83D\uDED2",
        title: "Liste prête pour le négoce",
        desc: "Les résultats sont présentés sous forme de liste claire avec quantités et unités que vous pouvez apporter directement chez votre négociant en matériaux.",
      },
    ],
  },
};

export default home;
