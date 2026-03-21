import type { HomeTranslations } from "@/lib/i18n/types";

const home: HomeTranslations = {
  hero: {
    titleLine1: "Kostenlose Baumaterial-",
    titleHighlight: "Rechner",
    description:
      "Präzise Materialschätzungen für Bauherren und Handwerker. Erhalten Sie Ihre Einkaufsliste in Sekunden — vom Fundament bis zum Dach.",
    ctaPrimary: "Alle Rechner durchsuchen",
    ctaSecondary: "Ständerrechner \u2192",
  },

  categories: {
    heading: "Rechnerkategorien",
    calculatorsCount: (count: number) => `${count} Rechner \u2192`,
  },

  popular: {
    heading: "Beliebteste Rechner",
    items: [
      {
        href: "/calculators/wall-framing/stud-calculator",
        label: "Ständerrechner",
        desc: "40 cm oder 60 cm Achsabstand mit Ecken & Öffnungen",
      },
      {
        href: "/calculators/roofing/shingle-calculator",
        label: "Dachschindel-Rechner",
        desc: "Benötigte Pakete für jede Dachfläche",
      },
      {
        href: "/calculators/floor-framing/floor-joist-calculator",
        label: "Deckenbalken-Rechner",
        desc: "Balken nach Raumbreite und Abstand",
      },
      {
        href: "/calculators/roofing/truss-calculator",
        label: "Dachbinder-Rechner",
        desc: "Binderanzahl nach Dachlänge",
      },
      {
        href: "/calculators/insulation-drywall/drywall-calculator",
        label: "Gipskarton-Rechner",
        desc: "Benötigte Platten für Wände und Decken",
      },
      {
        href: "/calculators/foundation/anchor-bolt-calculator",
        label: "Ankerschrauben-Rechner",
        desc: "Schrauben für den Fundamentumfang",
      },
    ],
  },

  valueProps: {
    heading: "Warum BuildEstimatory?",
    items: [
      {
        icon: "\u26A1",
        title: "Sofortige Ergebnisse",
        desc: "Erhalten Sie Ihre Materialliste in Sekunden — kein Konto, keine Anmeldung erforderlich.",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "Deutsche Baustandards",
        desc: "Basierend auf europäischen Bauweisen: 40 cm und 60 cm Achsabstand, metrische Plattengrößen (125 × 250 cm) und DIN-Normen.",
      },
      {
        icon: "\uD83D\uDED2",
        title: "Einkaufsfertiges Ergebnis",
        desc: "Ergebnisse als übersichtliche Einkaufsliste mit Mengen und Einheiten, die Sie direkt zum Baustoffhändler mitnehmen können.",
      },
    ],
  },
};

export default home;
