import type { CommonTranslations } from "@/lib/i18n/types";

const common: CommonTranslations = {
  nav: {
    home: "Home",
    calculators: "Calcolatori",
    allCalculators: "Tutti i Calcolatori",
    browseAllCalculators: "Sfoglia Tutti i Calcolatori",
    toggleMenu: "Apri/chiudi menu",
  },

  footer: {
    tagline:
      "Calcolatori gratuiti per materiali edili destinati a costruttori, imprese e privati in Italia.",
    calculatorsHeading: "Calcolatori",
    moreToolsHeading: "Altri Strumenti",
    siteHeading: "Sito",
    copyright:
      "\u00A9 {year} BuildEstimatory.com \u2014 Calcolatori gratuiti per l\u2019edilizia italiana.",
    disclaimer:
      "I risultati sono stime indicative. Verifichi sempre con un professionista abilitato.",
  },

  calculator: {
    enterMeasurements: "Inserisca le Misure",
    calculateMaterials: "Calcola Materiali",
    yourShoppingList: "La Sua Lista Acquisti",
    howToUseHeading: "Come Utilizzare Questo Calcolatore",
    aboutMaterialHeading: "Informazioni sul Materiale",
    installationTipsHeading: "Consigli per la Posa",
    commonMistakesHeading: "Errori Comuni da Evitare",
    faqHeading: "Domande Frequenti",
    quickTipHeading: "Suggerimento Rapido",
    quickTipBody:
      "Aggiunga sempre un 10% di sfrido al Suo ordine di materiali. In cantiere si producono sempre scarti di taglio e un\u2019interruzione per mancanza di materiale \u00e8 costosa.",
    nextStepsHeading: "Passi Successivi:",
    copyResults: "Copia Risultati",
    copiedResults: "Copiato!",
    calculatorNotFound: "Calcolatore non trovato.",
    validationError: (fieldLabel: string) =>
      `Inserisca un valore numerico valido per "${fieldLabel}".`,
  },

  breadcrumb: {
    home: "Home",
    calculators: "Calcolatori",
  },

  notFound: {
    heading: "Pagina Non Trovata",
    message:
      "La pagina che sta cercando non esiste o \u00e8 stata spostata.",
    backHome: "Torna alla Home",
  },

  calculatorsIndex: {
    title: "Tutti i Calcolatori Edili",
    description:
      "{count} calcolatori gratuiti per ogni fase della costruzione in legno.",
    freeCalculatorsCount: (count: number) =>
      `${count} calcolatori gratuiti per ogni fase della costruzione in legno.`,
    viewAll: "Vedi tutti \u2192",
  },

  layout: {
    defaultTitle: "BuildEstimatory \u2014 Calcolatori Gratuiti per Materiali Edili",
    defaultDescription:
      "Calcolatori gratuiti per materiali da costruzione destinati a costruttori e imprese italiane. Stime accurate per strutture, coperture, fondazioni e altro.",
    ogImageAlt: "BuildEstimatory \u2014 Calcolatori Gratuiti per Materiali Edili",
  },

  categoryPage: {
    otherCategories: "Altre Categorie di Calcolatori",
  },

  relatedCalculators: {
    heading: "Calcolatori Correlati",
    viewCalculator: "Apri calcolatore \u2192",
  },

  clusterLinks: {
    moreCalculators: "Calcolatori Pi\u00f9 Specifici",
    moreCalculatorsDescription: "Le serve un calcolo pi\u00f9 specifico? Provi uno di questi:",
    relatedGuides: "Guide Correlate",
  },

  heroAnimation: {
    quickCalculator: "Calcolatore Rapido",
    chooseCategory: "1. Scelga la Categoria",
    selectCalculator: "2. Selezioni il Calcolatore",
    enterMeasurements: "3. Inserisca le Misure",
    foundationPerimeter: "Perimetro Fondazione",
    foundationPerimeterUnit: "m",
    boltSpacing: "Interasse Tasselli",
    boltSpacingUnit: "m",
    calculateMaterials: "Calcola Materiali",
    yourShoppingList: "La Sua Lista Acquisti",
    anchorBoltCalculator: "Calcolatore Tasselli di Ancoraggio",
    anchorBoltResult: "13 tasselli di ancoraggio (interasse 3 m)",
    disclaimer: "Aggiunga il 10\u201315% al Suo ordine come margine per sfridi e tagli errati.",
    foundation: "Fondazioni",
    anchorBolt: "Tasselli di Ancoraggio",
    categoryFoundation: "Fondazioni",
    categoryFloorFraming: "Struttura Solaio",
    categoryWallFraming: "Struttura Pareti",
    categoryRoofing: "Copertura",
    categoryExteriorShell: "Involucro Esterno",
    categoryInsulationDrywall: "Isolamento e Cartongesso",
    categoryHardware: "Ferramenta",
    calcAnchorBolt: "Calcolatore Tasselli di Ancoraggio",
    calcSillSeal: "Calcolatore Guarnizione di Base",
    calcSillPlate: "Calcolatore Dormiente in Legno Trattato",
  },
};

export default common;
