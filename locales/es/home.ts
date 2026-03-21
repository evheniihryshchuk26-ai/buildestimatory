import type { HomeTranslations } from "@/lib/i18n/types";

const home: HomeTranslations = {
  hero: {
    titleLine1: "Calculadoras Gratuitas de Materiales de",
    titleHighlight: " Construcci\u00f3n",
    description:
      "Estimados precisos de materiales para constructores y contratistas en Latinoam\u00e9rica. Obt\u00e9n tu lista de compras en segundos \u2014 desde la cimentaci\u00f3n hasta el techo.",
    ctaPrimary: "Ver Todas las Calculadoras",
    ctaSecondary: "Calculadora de Montantes \u2192",
  },

  categories: {
    heading: "Categor\u00edas de Calculadoras",
    calculatorsCount: (count: number) => `${count} calculadoras \u2192`,
  },

  popular: {
    heading: "Calculadoras M\u00e1s Populares",
    items: [
      {
        href: "/calculators/wall-framing/stud-calculator",
        label: "Calculadora de Montantes",
        desc: "Espaciado de 40 cm o 60 cm entre centros, con esquinas y aberturas",
      },
      {
        href: "/calculators/roofing/shingle-calculator",
        label: "Calculadora de Tejas",
        desc: "Paquetes necesarios para cualquier superficie de techo",
      },
      {
        href: "/calculators/floor-framing/floor-joist-calculator",
        label: "Calculadora de Viguetas de Piso",
        desc: "Viguetas seg\u00fan ancho de habitaci\u00f3n y espaciado",
      },
      {
        href: "/calculators/roofing/truss-calculator",
        label: "Calculadora de Cerchas de Techo",
        desc: "Cantidad de cerchas seg\u00fan largo del techo",
      },
      {
        href: "/calculators/insulation-drywall/drywall-calculator",
        label: "Calculadora de Paneles de Yeso",
        desc: "L\u00e1minas necesarias para muros y cielos",
      },
      {
        href: "/calculators/foundation/anchor-bolt-calculator",
        label: "Calculadora de Pernos de Anclaje",
        desc: "Pernos para el per\u00edmetro de cimentaci\u00f3n",
      },
    ],
  },

  valueProps: {
    heading: "\u00bfPor Qu\u00e9 Usar BuildEstimatory?",
    items: [
      {
        icon: "\u26A1",
        title: "Resultados Instant\u00e1neos",
        desc: "Obt\u00e9n tu lista de materiales en segundos \u2014 sin cuenta, sin registro.",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "Est\u00e1ndares M\u00e9tricos de Construcci\u00f3n",
        desc: "Dise\u00f1ado con pr\u00e1cticas de construcci\u00f3n m\u00e9tricas: espaciado de 40 cm y 60 cm entre centros, paneles de 1.22 m x 2.44 m y m\u00e1s.",
      },
      {
        icon: "\uD83D\uDED2",
        title: "Listo para Comprar",
        desc: "Los resultados se presentan como una lista de compras clara con cantidades y unidades que puedes llevar directo a la ferreter\u00eda.",
      },
    ],
  },
};

export default home;
