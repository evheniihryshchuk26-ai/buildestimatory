import type { HomeTranslations } from "@/lib/i18n/types";

const home: HomeTranslations = {
  hero: {
    titleLine1: "Calcolatori Gratuiti per",
    titleHighlight: " Materiali Edili",
    description:
      "Stime accurate dei materiali per costruttori e imprese italiane. Ottenga la Sua lista acquisti in pochi secondi \u2014 dalle fondazioni al tetto.",
    ctaPrimary: "Sfoglia Tutti i Calcolatori",
    ctaSecondary: "Calcolatore Montanti \u2192",
  },

  categories: {
    heading: "Categorie di Calcolatori",
    calculatorsCount: (count: number) => `${count} calcolatori \u2192`,
  },

  popular: {
    heading: "Calcolatori Pi\u00f9 Utilizzati",
    items: [
      {
        href: "/calculators/wall-framing/stud-calculator",
        label: "Calcolatore Montanti",
        desc: "Interasse 40 o 60 cm con angoli e aperture",
      },
      {
        href: "/calculators/roofing/shingle-calculator",
        label: "Calcolatore Tegole",
        desc: "Pacchi necessari per qualsiasi superficie di copertura",
      },
      {
        href: "/calculators/floor-framing/floor-joist-calculator",
        label: "Calcolatore Travetti Solaio",
        desc: "Travetti in base alla luce e all\u2019interasse",
      },
      {
        href: "/calculators/roofing/truss-calculator",
        label: "Calcolatore Capriate",
        desc: "Numero di capriate in base alla lunghezza del tetto",
      },
      {
        href: "/calculators/insulation-drywall/drywall-calculator",
        label: "Calcolatore Cartongesso",
        desc: "Lastre necessarie per pareti e soffitti",
      },
      {
        href: "/calculators/foundation/anchor-bolt-calculator",
        label: "Calcolatore Tasselli di Ancoraggio",
        desc: "Tasselli per il perimetro della fondazione",
      },
    ],
  },

  valueProps: {
    heading: "Perch\u00e9 Utilizzare BuildEstimatory?",
    items: [
      {
        icon: "\u26A1",
        title: "Risultati Immediati",
        desc: "Ottenga la Sua lista materiali in pochi secondi \u2014 nessun account, nessuna registrazione.",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "Standard Italiani",
        desc: "Basato sulle pratiche costruttive italiane: interassi standard, pannelli 120\u00d7240 cm e norme NTC 2018.",
      },
      {
        icon: "\uD83D\uDED2",
        title: "Lista Acquisti Pronta",
        desc: "I risultati sono presentati come una lista acquisti chiara con quantit\u00e0 e unit\u00e0 di misura da portare direttamente al magazzino edile.",
      },
    ],
  },
};

export default home;
