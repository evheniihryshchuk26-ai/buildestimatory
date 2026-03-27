import type { CommonTranslations } from "@/lib/i18n/types";

const common: CommonTranslations = {
  nav: {
    home: "Startseite",
    calculators: "Rechner",
    allCalculators: "Alle Rechner",
    browseAllCalculators: "Alle Rechner durchsuchen",
    toggleMenu: "Menü umschalten",
  },

  footer: {
    tagline:
      "Kostenlose Baumaterial-Rechner für Bauherren, Handwerker und Heimwerker in Deutschland.",
    calculatorsHeading: "Rechner",
    moreToolsHeading: "Weitere Werkzeuge",
    siteHeading: "Seite",
    copyright:
      "\u00A9 {year} BuildEstimatory.com \u2014 Kostenlose Baurechner für Bauherren und Handwerker.",
    disclaimer:
      "Die Ergebnisse sind Schätzungen. Lassen Sie diese immer von einem qualifizierten Fachbetrieb überprüfen.",
  },

  calculator: {
    enterMeasurements: "Geben Sie Ihre Maße ein",
    calculateMaterials: "Materialien berechnen",
    yourShoppingList: "Ihre Einkaufsliste",
    howToUseHeading: "So verwenden Sie diesen Rechner",
    aboutMaterialHeading: "Über dieses Material",
    installationTipsHeading: "Einbautipps",
    commonMistakesHeading: "Häufige Fehler, die Sie vermeiden sollten",
    faqHeading: "Häufig gestellte Fragen",
    quickTipHeading: "Schnelltipp",
    quickTipBody:
      "Rechnen Sie immer 10 % Verschnitt auf Ihre Materialbestellung auf. Beim Bauen entstehen stets Abschnitte, und ein Materialmangel mitten im Projekt wird teuer.",
    nextStepsHeading: "Nächste Schritte:",
    copyResults: "Ergebnisse kopieren",
    copiedResults: "Kopiert!",
    calculatorNotFound: "Rechner nicht gefunden.",
    validationError: (fieldLabel: string) =>
      `Bitte geben Sie eine gültige Zahl für „${fieldLabel}" ein.`,
  },

  breadcrumb: {
    home: "Startseite",
    calculators: "Rechner",
  },

  notFound: {
    heading: "Seite nicht gefunden",
    message:
      "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    backHome: "Zurück zur Startseite",
  },

  calculatorsIndex: {
    title: "Alle Baurechner",
    description:
      "{count} kostenlose Rechner für jede Phase des Holzrahmenbaus.",
    freeCalculatorsCount: (count: number) =>
      `${count} kostenlose Rechner für jede Phase des Holzrahmenbaus.`,
    viewAll: "Alle anzeigen \u2192",
  },

  layout: {
    defaultTitle: "BuildEstimatory \u2014 Kostenlose Baumaterial-Rechner",
    defaultDescription:
      "Kostenlose Baumaterial-Rechner für Bauherren und Handwerker. Genaue Materialschätzungen für Rohbau, Dach, Fundament und mehr.",
    ogImageAlt: "BuildEstimatory \u2014 Kostenlose Baumaterial-Rechner",
  },

  categoryPage: {
    otherCategories: "Weitere Rechnerkategorien",
  },

  relatedCalculators: {
    heading: "Verwandte Rechner",
    viewCalculator: "Rechner öffnen \u2192",
  },

  clusterLinks: {
    moreCalculators: "Weitere spezifische Rechner",
    moreCalculatorsDescription: "Benötigen Sie eine speziellere Berechnung? Probieren Sie einen dieser Rechner:",
    relatedGuides: "Verwandte Ratgeber",
  },

  heroAnimation: {
    quickCalculator: "Schnellrechner",
    chooseCategory: "1. Kategorie wählen",
    selectCalculator: "2. Rechner auswählen",
    enterMeasurements: "3. Maße eingeben",
    foundationPerimeter: "Fundamentumfang",
    foundationPerimeterUnit: "m",
    boltSpacing: "Bolzenabstand",
    boltSpacingUnit: "m",
    calculateMaterials: "Materialien berechnen",
    yourShoppingList: "Ihre Einkaufsliste",
    anchorBoltCalculator: "Ankerschrauben-Rechner",
    anchorBoltResult: "13 Ankerschrauben (3 m Abstand)",
    disclaimer: "Rechnen Sie 10–15 % Verschnitt für Zuschnitte und Fehler auf Ihre Bestellung auf.",
    foundation: "Fundament",
    anchorBolt: "Ankerschraube",
    categoryFoundation: "Fundament",
    categoryFloorFraming: "Deckenkonstruktion",
    categoryWallFraming: "Wandkonstruktion",
    categoryRoofing: "Dachkonstruktion",
    categoryExteriorShell: "Außenhülle",
    categoryInsulationDrywall: "Dämmung & Trockenbau",
    categoryHardware: "Beschläge & Verbinder",
    calcAnchorBolt: "Ankerschrauben-Rechner",
    calcSillSeal: "Schwellendichtung-Rechner",
    calcSillPlate: "Schwellenholz-Rechner",
  },
};

export default common;
