import type { CommonTranslations } from "@/lib/i18n/types";

const common: CommonTranslations = {
  nav: {
    home: "Accueil",
    calculators: "Calculateurs",
    allCalculators: "Tous les calculateurs",
    browseAllCalculators: "Parcourir tous les calculateurs",
    toggleMenu: "Ouvrir/fermer le menu",
  },

  footer: {
    tagline:
      "Calculateurs gratuits de matériaux de construction pour les professionnels du bâtiment et les autoconstructeurs en France.",
    calculatorsHeading: "Calculateurs",
    moreToolsHeading: "Plus d'outils",
    siteHeading: "Site",
    copyright:
      "\u00A9 {year} BuildEstimatory.com \u2014 Calculateurs gratuits pour les professionnels du bâtiment.",
    disclaimer:
      "Les résultats sont des estimations. Faites toujours vérifier par un professionnel qualifié.",
  },

  calculator: {
    enterMeasurements: "Saisissez vos mesures",
    calculateMaterials: "Calculer les matériaux",
    yourShoppingList: "Votre liste de matériaux",
    howToUseHeading: "Comment utiliser ce calculateur",
    aboutMaterialHeading: "À propos de ce matériau",
    installationTipsHeading: "Conseils de pose",
    commonMistakesHeading: "Erreurs courantes à éviter",
    faqHeading: "Questions fréquentes",
    quickTipHeading: "Astuce rapide",
    quickTipBody:
      "Ajoutez toujours 10 % de marge pour les chutes et découpes. Un chantier génère inévitablement des pertes, et une rupture de stock en cours de travaux coûte cher.",
    nextStepsHeading: "Étapes suivantes :",
    copyResults: "Copier les résultats",
    copiedResults: "Copié !",
    calculatorNotFound: "Calculateur introuvable.",
    validationError: (fieldLabel: string) =>
      `Veuillez saisir un nombre valide pour « ${fieldLabel} ».`,
  },

  breadcrumb: {
    home: "Accueil",
    calculators: "Calculateurs",
  },

  notFound: {
    heading: "Page introuvable",
    message:
      "La page que vous recherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
  },

  calculatorsIndex: {
    title: "Tous les calculateurs de construction",
    description:
      "{count} calculateurs gratuits couvrant toutes les étapes de la construction à ossature bois.",
    freeCalculatorsCount: (count: number) =>
      `${count} calculateurs gratuits couvrant toutes les étapes de la construction à ossature bois.`,
    viewAll: "Voir tout \u2192",
  },

  layout: {
    defaultTitle: "BuildEstimatory \u2014 Calculateurs gratuits de matériaux de construction",
    defaultDescription:
      "Calculateurs gratuits de matériaux de construction pour les professionnels du bâtiment et les autoconstructeurs en France. Estimations précises pour la charpente, la couverture, les fondations et plus encore.",
    ogImageAlt: "BuildEstimatory \u2014 Calculateurs gratuits de matériaux de construction",
  },

  categoryPage: {
    otherCategories: "Autres catégories de calculateurs",
  },

  relatedCalculators: {
    heading: "Calculateurs associés",
    viewCalculator: "Ouvrir le calculateur \u2192",
  },

  clusterLinks: {
    moreCalculators: "Calculateurs plus spécifiques",
    moreCalculatorsDescription: "Besoin d'un calcul plus précis ? Essayez l'un de ceux-ci :",
    relatedGuides: "Guides associés",
  },

  heroAnimation: {
    quickCalculator: "Calculateur rapide",
    chooseCategory: "1. Choisissez une catégorie",
    selectCalculator: "2. Sélectionnez un calculateur",
    enterMeasurements: "3. Saisissez vos mesures",
    foundationPerimeter: "Périmètre de fondation",
    foundationPerimeterUnit: "m",
    boltSpacing: "Espacement des tiges",
    boltSpacingUnit: "m",
    calculateMaterials: "Calculer les matériaux",
    yourShoppingList: "Votre liste de matériaux",
    anchorBoltCalculator: "Calculateur de tiges d'ancrage",
    anchorBoltResult: "21 tiges d'ancrage (espacement de 1,80 m)",
    disclaimer: "Ajoutez 10 à 15 % à votre commande pour les chutes et découpes.",
    foundation: "Fondations",
    anchorBolt: "Tige d'ancrage",
    categoryFoundation: "Fondations",
    categoryFloorFraming: "Plancher",
    categoryWallFraming: "Ossature murale",
    categoryRoofing: "Couverture",
    categoryExteriorShell: "Enveloppe extérieure",
    categoryInsulationDrywall: "Isolation et plâtrerie",
    categoryHardware: "Quincaillerie",
    calcAnchorBolt: "Calculateur de tiges d'ancrage",
    calcSillSeal: "Calculateur de bande d'arase",
    calcSillPlate: "Calculateur de lisse basse traitée",
  },
};

export default common;
