import type { CommonTranslations } from "@/lib/i18n/types";

const common: CommonTranslations = {
  nav: {
    home: "Início",
    calculators: "Calculadoras",
    allCalculators: "Todas as Calculadoras",
    browseAllCalculators: "Ver Todas as Calculadoras",
    toggleMenu: "Abrir menu",
  },

  footer: {
    tagline:
      "Calculadoras gratuitas de materiais de construção para construtores, empreiteiros e autoconstrutores no Brasil.",
    calculatorsHeading: "Calculadoras",
    moreToolsHeading: "Mais Ferramentas",
    siteHeading: "Site",
    copyright:
      "\u00A9 {year} BuildEstimatory.com \u2014 Calculadoras gratuitas de construção para o Brasil.",
    disclaimer:
      "Os resultados são estimativas. Sempre confirme com um engenheiro ou mestre de obras habilitado.",
  },

  calculator: {
    enterMeasurements: "Insira Suas Medidas",
    calculateMaterials: "Calcular Materiais",
    yourShoppingList: "Sua Lista de Compras",
    howToUseHeading: "Como Usar Esta Calculadora",
    aboutMaterialHeading: "Sobre Este Material",
    installationTipsHeading: "Dicas de Instalação",
    commonMistakesHeading: "Erros Comuns a Evitar",
    faqHeading: "Perguntas Frequentes",
    quickTipHeading: "Dica Rápida",
    quickTipBody:
      "Sempre acrescente 10% de fator de desperdício aos seus pedidos de materiais. A construção sempre gera recortes e sobras, e ficar sem material no meio da obra sai muito caro.",
    nextStepsHeading: "Próximos Passos:",
    copyResults: "Copiar Resultados",
    copiedResults: "Copiado!",
    calculatorNotFound: "Calculadora não encontrada.",
    validationError: (fieldLabel: string) =>
      `Por favor, insira um número válido para "${fieldLabel}".`,
  },

  breadcrumb: {
    home: "Início",
    calculators: "Calculadoras",
  },

  notFound: {
    heading: "Página Não Encontrada",
    message:
      "Esta calculadora ou página ainda não existe. Confira todas as calculadoras disponíveis abaixo.",
    backHome: "Ver Todas as Calculadoras",
  },

  calculatorsIndex: {
    title: "Todas as Calculadoras de Construção",
    description:
      "{count} calculadoras gratuitas cobrindo cada etapa da construção em madeira.",
    freeCalculatorsCount: (count: number) =>
      `${count} calculadoras gratuitas cobrindo cada etapa da construção em madeira.`,
    viewAll: "Ver todas \u2192",
  },

  layout: {
    defaultTitle: "BuildEstimatory \u2014 Calculadoras Gratuitas de Materiais de Construção",
    defaultDescription:
      "Calculadoras gratuitas de materiais de construção para construtores e empreiteiros no Brasil. Obtenha estimativas precisas para fundação, estrutura, telhado, isolamento e muito mais \u2014 resultados instantâneos, sem cadastro.",
    ogImageAlt: "BuildEstimatory \u2014 Calculadoras Gratuitas de Materiais de Construção",
  },

  categoryPage: {
    otherCategories: "Outras Categorias de Calculadoras",
  },

  relatedCalculators: {
    heading: "Calculadoras Relacionadas",
    viewCalculator: "Abrir calculadora \u2192",
  },

  clusterLinks: {
    moreCalculators: "Calculadoras Mais Específicas",
    moreCalculatorsDescription: "Precisa de um cálculo mais específico? Experimente uma destas:",
    relatedGuides: "Guias Relacionados",
  },

  heroAnimation: {
    quickCalculator: "Calculadora Rápida",
    chooseCategory: "1. Escolha a Categoria",
    selectCalculator: "2. Selecione a Calculadora",
    enterMeasurements: "3. Insira as Medidas",
    foundationPerimeter: "Perímetro da Fundação",
    foundationPerimeterUnit: "m",
    boltSpacing: "Espaçamento dos Chumbadores",
    boltSpacingUnit: "m",
    calculateMaterials: "Calcular Materiais",
    yourShoppingList: "Sua Lista de Compras",
    anchorBoltCalculator: "Calculadora de Chumbadores",
    anchorBoltResult: "13 chumbadores (espaçamento de 3 m)",
    disclaimer: "Acrescente 10\u201315% ao seu pedido como fator de desperdício para cortes e erros.",
    foundation: "Fundação",
    anchorBolt: "Chumbador",
    categoryFoundation: "Fundação",
    categoryFloorFraming: "Estrutura de Piso",
    categoryWallFraming: "Estrutura de Paredes",
    categoryRoofing: "Telhado",
    categoryExteriorShell: "Envoltória Exterior",
    categoryInsulationDrywall: "Isolamento e Drywall",
    categoryHardware: "Ferragens",
    calcAnchorBolt: "Calculadora de Chumbadores",
    calcSillSeal: "Calculadora de Manta de Vedação",
    calcSillPlate: "Calculadora de Baldrame em Madeira",
  },
};

export default common;
