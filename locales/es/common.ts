import type { CommonTranslations } from "@/lib/i18n/types";

const common: CommonTranslations = {
  nav: {
    home: "Inicio",
    calculators: "Calculadoras",
    allCalculators: "Todas las Calculadoras",
    browseAllCalculators: "Ver Todas las Calculadoras",
    toggleMenu: "Abrir men\u00fa",
  },

  footer: {
    tagline:
      "Calculadoras gratuitas de materiales de construcci\u00f3n para constructores, contratistas y autoconstructores en Latinoam\u00e9rica.",
    calculatorsHeading: "Calculadoras",
    moreToolsHeading: "M\u00e1s Herramientas",
    siteHeading: "Sitio",
    copyright:
      "\u00A9 {year} BuildEstimatory.com \u2014 Calculadoras gratuitas de construcci\u00f3n.",
    disclaimer:
      "Los resultados son estimados. Siempre verifica con un profesional de la construcci\u00f3n certificado.",
  },

  calculator: {
    enterMeasurements: "Ingresa las Medidas",
    calculateMaterials: "Calcular Materiales",
    yourShoppingList: "Tu Lista de Compras",
    howToUseHeading: "C\u00f3mo Usar Esta Calculadora",
    aboutMaterialHeading: "Sobre Este Material",
    installationTipsHeading: "Consejos de Instalaci\u00f3n",
    commonMistakesHeading: "Errores Comunes a Evitar",
    faqHeading: "Preguntas Frecuentes",
    quickTipHeading: "Consejo R\u00e1pido",
    quickTipBody:
      "Agrega siempre un 10% de factor de desperdicio a tus pedidos de materiales. La construcci\u00f3n siempre genera recortes y quedarse corto a mitad de obra sale caro.",
    nextStepsHeading: "Siguientes Pasos:",
    copyResults: "Copiar Resultados",
    copiedResults: "u00a1Copiado!",
    calculatorNotFound: "Calculadora no encontrada.",
    validationError: (fieldLabel: string) =>
      `Por favor ingresa un n\u00famero v\u00e1lido para "${fieldLabel}".`,
  },

  breadcrumb: {
    home: "Inicio",
    calculators: "Calculadoras",
  },

  notFound: {
    heading: "P\u00e1gina No Encontrada",
    message:
      "Esta calculadora o p\u00e1gina a\u00fan no existe. Explora todas las calculadoras disponibles a continuaci\u00f3n.",
    backHome: "Ver Todas las Calculadoras",
  },

  calculatorsIndex: {
    title: "Todas las Calculadoras de Construcci\u00f3n",
    description:
      "{count} calculadoras gratuitas que cubren cada fase de la construcci\u00f3n con estructura de madera.",
    freeCalculatorsCount: (count: number) =>
      `${count} calculadoras gratuitas que cubren cada fase de la construcci\u00f3n con estructura de madera.`,
    viewAll: "Ver todas \u2192",
  },

  layout: {
    defaultTitle: "BuildEstimatory \u2014 Calculadoras Gratuitas de Materiales de Construcci\u00f3n",
    defaultDescription:
      "Calculadoras gratuitas de materiales de construcci\u00f3n para constructores y contratistas en Latinoam\u00e9rica. Obt\u00e9n estimados precisos para cimentaci\u00f3n, estructura, techado, aislamiento y m\u00e1s \u2014 resultados instant\u00e1neos, sin registro.",
    ogImageAlt: "BuildEstimatory \u2014 Calculadoras Gratuitas de Materiales de Construcci\u00f3n",
  },

  categoryPage: {
    otherCategories: "Otras Categor\u00edas de Calculadoras",
  },

  relatedCalculators: {
    heading: "Calculadoras Relacionadas",
    viewCalculator: "Abrir calculadora \u2192",
  },

  clusterLinks: {
    moreCalculators: "Calculadoras M\u00e1s Espec\u00edficas",
    moreCalculatorsDescription: "\u00bfNecesitas un c\u00e1lculo m\u00e1s espec\u00edfico? Prueba una de estas:",
    relatedGuides: "Gu\u00edas Relacionadas",
  },

  heroAnimation: {
    quickCalculator: "Calculadora R\u00e1pida",
    chooseCategory: "1. Elige Categor\u00eda",
    selectCalculator: "2. Selecciona Calculadora",
    enterMeasurements: "3. Ingresa Medidas",
    foundationPerimeter: "Per\u00edmetro de Cimentaci\u00f3n",
    foundationPerimeterUnit: "m",
    boltSpacing: "Espaciado de Pernos",
    boltSpacingUnit: "m",
    calculateMaterials: "Calcular Materiales",
    yourShoppingList: "Tu Lista de Compras",
    anchorBoltCalculator: "Calculadora de Pernos de Anclaje",
    anchorBoltResult: "13 pernos de anclaje (espaciado de 3 m)",
    disclaimer: "Agrega 10\u201315% a tu pedido como factor de desperdicio por cortes y errores.",
    foundation: "Cimentaci\u00f3n",
    anchorBolt: "Perno de Anclaje",
    categoryFoundation: "Cimentaci\u00f3n",
    categoryFloorFraming: "Entramado de Piso",
    categoryWallFraming: "Entramado de Muros",
    categoryRoofing: "Techado",
    categoryExteriorShell: "Revestimiento",
    categoryInsulationDrywall: "Aislamiento y Yeso",
    categoryHardware: "Ferreter\u00eda",
    calcAnchorBolt: "Calculadora de Pernos de Anclaje",
    calcSillSeal: "Calculadora de Sello de Solera",
    calcSillPlate: "Calculadora de Placa de Apoyo",
  },
};

export default common;
