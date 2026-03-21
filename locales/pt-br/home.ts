import type { HomeTranslations } from "@/lib/i18n/types";

const home: HomeTranslations = {
  hero: {
    titleLine1: "Calculadoras Gratuitas de Materiais de",
    titleHighlight: " Construção",
    description:
      "Estimativas precisas de materiais para construtores e empreiteiros no Brasil. Obtenha sua lista de compras em segundos \u2014 da fundação ao telhado.",
    ctaPrimary: "Ver Todas as Calculadoras",
    ctaSecondary: "Calculadora de Montantes \u2192",
  },

  categories: {
    heading: "Categorias de Calculadoras",
    calculatorsCount: (count: number) => `${count} calculadoras \u2192`,
  },

  popular: {
    heading: "Calculadoras Mais Populares",
    items: [
      {
        href: "/calculators/wall-framing/stud-calculator",
        label: "Calculadora de Montantes",
        desc: "Espaçamento de 40 cm ou 60 cm entre eixos, com cantos e aberturas",
      },
      {
        href: "/calculators/roofing/shingle-calculator",
        label: "Calculadora de Telhas",
        desc: "Quantidade necessária para qualquer área de telhado",
      },
      {
        href: "/calculators/floor-framing/floor-joist-calculator",
        label: "Calculadora de Vigas de Piso",
        desc: "Vigas conforme largura do cômodo e espaçamento",
      },
      {
        href: "/calculators/roofing/truss-calculator",
        label: "Calculadora de Tesouras",
        desc: "Quantidade de tesouras conforme comprimento do telhado",
      },
      {
        href: "/calculators/insulation-drywall/drywall-calculator",
        label: "Calculadora de Drywall",
        desc: "Placas necessárias para paredes e forros",
      },
      {
        href: "/calculators/foundation/anchor-bolt-calculator",
        label: "Calculadora de Chumbadores",
        desc: "Chumbadores para o perímetro da fundação",
      },
    ],
  },

  valueProps: {
    heading: "Por Que Usar o BuildEstimatory?",
    items: [
      {
        icon: "\u26A1",
        title: "Resultados Instantâneos",
        desc: "Obtenha sua lista de materiais em segundos \u2014 sem conta, sem cadastro.",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "Padrões Métricos Brasileiros",
        desc: "Projetado com práticas de construção métricas: espaçamento de 40 cm e 60 cm entre eixos, placas de 1,22 m x 2,44 m e mais.",
      },
      {
        icon: "\uD83D\uDED2",
        title: "Pronto para Comprar",
        desc: "Os resultados são apresentados como uma lista de compras clara com quantidades e unidades que você pode levar direto para a loja de materiais.",
      },
    ],
  },
};

export default home;
