import type { HomeTranslations } from "@/lib/i18n/types";

const home: HomeTranslations = {
  hero: {
    titleLine1: "Free Construction Material",
    titleHighlight: " Calculators",
    description:
      "Accurate material estimates for Canadian builders and contractors. Get your shopping list in seconds \u2014 foundation to roof.",
    ctaPrimary: "Browse All Calculators",
    ctaSecondary: "Stud Calculator \u2192",
  },

  categories: {
    heading: "Calculator Categories",
    calculatorsCount: (count: number) => `${count} calculators \u2192`,
  },

  popular: {
    heading: "Most Popular Calculators",
    items: [
      {
        href: "/calculators/wall-framing/stud-calculator",
        label: "Stud Calculator",
        desc: '16" or 24" OC (400 mm / 600 mm) with corners & openings',
      },
      {
        href: "/calculators/roofing/shingle-calculator",
        label: "Shingle Calculator",
        desc: "Bundles needed for any roof area",
      },
      {
        href: "/calculators/floor-framing/floor-joist-calculator",
        label: "Floor Joist Calculator",
        desc: "Joists by room width and spacing",
      },
      {
        href: "/calculators/roofing/truss-calculator",
        label: "Roof Truss Calculator",
        desc: "Truss count by roof length",
      },
      {
        href: "/calculators/insulation-drywall/drywall-calculator",
        label: "Drywall Calculator",
        desc: "Sheets needed for walls and ceilings",
      },
      {
        href: "/calculators/foundation/anchor-bolt-calculator",
        label: "Anchor Bolt Calculator",
        desc: "Bolts for foundation perimeter",
      },
    ],
  },

  valueProps: {
    heading: "Why Use BuildEstimatory?",
    items: [
      {
        icon: "\u26A1",
        title: "Instant Results",
        desc: "Get your material list in seconds \u2014 no account, no signup required.",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "Canadian Building Codes",
        desc: "Built around NBC standards and Canadian construction practices: metric and imperial units, 4\u00d78 sheets, and more.",
      },
      {
        icon: "\uD83D\uDED2",
        title: "Shopping-Ready Output",
        desc: "Results come as a clear shopping list with quantities and units you can take straight to Home Hardware, RONA, or Home Depot.",
      },
    ],
  },
};

export default home;
