// Brazilian Portuguese (pt-BR) — All categories and calculator metadata
// Slugs remain in English for URL compatibility

export interface CalculatorMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
}

export interface CategoryMeta {
  slug: string;
  title: string;
  description: string;
  calculators: CalculatorMeta[];
}

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Calculadoras de Fundação",
    description:
      "Calcule materiais para fundações de concreto, incluindo chumbadores, manta de vedação e peças de baldrame em madeira tratada.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Calculadora de Chumbadores",
        description:
          "Quantos chumbadores eu preciso? Calculadora grátis para tipo J e cunha com espaçamento padrão de 1,80 m — inclui contagem e distribuição.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Calculadora de Manta de Vedação",
        description:
          "Calculadora de manta de vedação: Estime rolos de espuma por perímetro de fundação. Ferramenta grátis para larguras de 9 cm e 14 cm com sobreposição.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Calculadora de Baldrame em Madeira Tratada",
        description:
          "Quanta madeira tratada para o baldrame? Calculadora instantânea para peças de 5x10 cm e 5x15 cm — metros lineares e contagem de peças.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Calculadora de Concreto",
        description:
          "Quanto concreto eu preciso? Calculadora grátis para lajes, sapatas e pilares — metros cúbicos e quantidade de sacos com fator de desperdício.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Calculadora de Laje de Concreto",
        description:
          "Quanto concreto para uma laje? Calculadora grátis para garagem, calçada e pátio — metros cúbicos e sacos para qualquer espessura.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Calculadora de Sapata de Concreto",
        description:
          "Calculadora de sapatas: Estime metros cúbicos para sapatas corridas e isoladas. Ferramenta grátis para fundação — inclui desperdício.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Calculadora de Pilar de Concreto",
        description:
          "Quanto concreto para pilares? Calculadora grátis para diâmetros de 20, 25 e 30 cm — m³ por pilar e total instantâneo.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Calculadora de Degraus de Concreto",
        description:
          "Calculadora de degraus de concreto: Quantos metros cúbicos para escadas? Ferramenta grátis — insira largura, espelho e piso.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "gravel-calculator",
        title: "Calculadora de Brita",
        description:
          "Quanta brita preciso? Calculadora grátis para qualquer área — metros cúbicos, toneladas e estimativa de custo com 10% de desperdício.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "driveway-gravel-calculator",
        title: "Calculadora de Brita para Entrada",
        description:
          "Calculadora de brita para entrada de veículos: estime toneladas e custo por tipo — brita, pedrisco, rachão ou saibro com entrega.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "block-fill-calculator",
        title: "Calculadora de Preenchimento de Blocos",
        description:
          "Calculadora de preenchimento de blocos — quanto concreto para preencher blocos de concreto? Ferramenta gratuita para blocos de 14, 19 e 29 cm. Metros cúbicos e sacos na hora.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "mortar-mix-calculator",
        title: "Calculadora de Argamassa",
        description:
          "Calculadora de argamassa — ferramenta gratuita para estimar sacos de argamassa para bloco, tijolo e pedra. Tipos N, S e M com opções de espessura de junta.",
        category: "Fundação",
        categorySlug: "foundation",
      },
    ],
  },
  {
    slug: "floor-framing",
    title: "Calculadoras de Estrutura de Piso",
    description:
      "Estime todos os materiais de estrutura de piso, incluindo vigas perimetrais, vigas de piso, travamento, adesivo de contrapiso e painéis OSB.",
    calculators: [
      {
        slug: "rim-joist-calculator",
        title: "Calculadora de Viga Perimetral",
        description:
          "Calculadora de viga perimetral: Quantas peças para o contorno do piso? Ferramenta grátis para 5x20 cm, 5x25 cm e 5x30 cm.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "floor-joist-calculator",
        title: "Calculadora de Vigas de Piso",
        description:
          "Calculadora de vigas de piso grátis — quantidade, tamanho e espaçamento por vão. Para 40 cm e 60 cm entre eixos, resultado instantâneo.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "bridging-calculator",
        title: "Calculadora de Travamento (Contraventamento)",
        description:
          "Calculadora de travamento: Quantas filas de contraventamento eu preciso? Ferramenta grátis conforme vão das vigas — blocos sólidos ou cruzados.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "subfloor-adhesive-calculator",
        title: "Calculadora de Adesivo de Contrapiso",
        description:
          "Quantos tubos de adesivo de contrapiso eu preciso? Calculadora grátis por área de piso — cobre tubos de 828 ml e 300 ml.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "osb-panel-calculator",
        title: "Calculadora de Painéis OSB",
        description:
          "Quantas placas OSB eu preciso para o contrapiso? Calculadora grátis para chapas de 1,22 x 2,44 m — inclui fator de desperdício automático.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
    ],
  },
  {
    slug: "wall-framing",
    title: "Calculadoras de Estrutura de Paredes",
    description:
      "Calcule toda a madeira para estrutura de paredes, incluindo guias, montantes, vergas e revestimento para qualquer configuração.",
    calculators: [
      {
        slug: "stud-calculator",
        title: "Calculadora de Montantes",
        description:
          "Quantos montantes eu preciso? Calculadora grátis para espaçamento de 40 cm e 60 cm entre eixos — inclui extras para cantos e aberturas.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
      {
        slug: "bottom-plate-calculator",
        title: "Calculadora de Guia Inferior",
        description:
          "Calculadora de guia inferior: Estime peças de 5x10 cm ou 5x15 cm por comprimento de parede. Ferramenta grátis com metros lineares e contagem.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
      {
        slug: "top-plate-calculator",
        title: "Calculadora de Guia Superior",
        description:
          "Quanta madeira para a guia superior dupla? Calculadora grátis para paredes de 5x10 cm e 5x15 cm — inclui sobreposição e contagem de peças.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
      {
        slug: "header-calculator",
        title: "Calculadora de Vergas",
        description:
          "Calculadora de vergas: Qual a medida da verga para minha abertura? Ferramenta grátis para portas e janelas — 5x15, 5x20 e 5x25 cm.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
      {
        slug: "exterior-sheathing-calculator",
        title: "Calculadora de Revestimento Estrutural Exterior",
        description:
          "Quantas chapas de revestimento eu preciso? Calculadora grátis para OSB e compensado de 1,22 x 2,44 m — inclui fator de desperdício.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
    ],
  },
  {
    slug: "roofing",
    title: "Calculadoras de Telhado",
    description:
      "Estime todos os materiais de cobertura, desde tesouras e caibros até telhas e manta impermeabilizante.",
    calculators: [
      {
        slug: "truss-calculator",
        title: "Calculadora de Tesouras",
        description:
          "Calculadora de tesouras grátis — quantas treliças para meu telhado? Espaçamento padrão de 60 cm. Insira o comprimento e obtenha contagem e layout.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "rafter-calculator",
        title: "Calculadora de Caibros",
        description:
          "Calculadora de caibros grátis — comprimento, quantidade e espaçamento para qualquer inclinação. 40 e 60 cm entre eixos, resultado instantâneo.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "ridge-board-calculator",
        title: "Calculadora de Cumeeira",
        description:
          "Quantas peças de cumeeira eu preciso? Calculadora grátis para 5x20, 5x25 e 5x30 cm — calcula comprimento total e número de peças.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-sheathing-calculator",
        title: "Calculadora de Forro do Telhado",
        description:
          "Calculadora de forro de telhado: Quantas chapas OSB de 1,22 x 2,44 m? Ferramenta grátis que considera inclinação e desperdício.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "shingle-calculator",
        title: "Calculadora de Telhas",
        description:
          "Calculadora de telhas grátis — quantos pacotes eu preciso? Para telhas shingle e cerâmicas. Converte m² em pacotes instantaneamente.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "underlayment-calculator",
        title: "Calculadora de Manta Impermeabilizante",
        description:
          "Calculadora de manta: Quantos rolos de manta asfáltica ou sintética eu preciso? Ferramenta grátis para manta 15 lb, 30 lb e sintética.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "drip-edge-calculator",
        title: "Calculadora de Pingadeira",
        description:
          "Quantos metros de pingadeira eu preciso? Calculadora grátis por perímetro do telhado — calcula peças para tiras padrão de 3 m.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-pitch-calculator",
        title: "Calculadora de Inclinação do Telhado",
        description:
          "Qual a inclinação do meu telhado? Calculadora grátis — insira altura e distância para obter ângulo, porcentagem e multiplicador de área.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-area-calculator",
        title: "Calculadora de Área do Telhado",
        description:
          "Calculadora de área de telhado grátis — converta dimensões planas em área real de cobertura. Com multiplicador de inclinação e m² totais.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-slope-calculator",
        title: "Calculadora de Caimento do Telhado",
        description:
          "Calculadora de caimento do telhado grátis — meça altura e extensão para obter inclinação, ângulo e material de cobertura recomendado.",
        category: "Telhado",
        categorySlug: "roofing",
      },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Calculadoras de Envoltória Exterior",
    description:
      "Calcule manta hidrófuga, revestimento, rufos e fita de vedação para a envoltória exterior da sua construção.",
    calculators: [
      {
        slug: "housewrap-calculator",
        title: "Calculadora de Manta Hidrófuga",
        description:
          "Quantos rolos de manta hidrófuga eu preciso? Calculadora grátis tipo Tyvek por m² de parede — cobre larguras de 1 m, 1,5 m e 2,7 m.",
        category: "Envoltória Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "vinyl-siding-calculator",
        title: "Calculadora de Revestimento Vinílico",
        description:
          "Calculadora de revestimento vinílico grátis — insira m² de parede para obter painéis exatos. Desconta portas, janelas e adiciona 10% de desperdício.",
        category: "Envoltória Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "hardie-siding-calculator",
        title: "Calculadora de Revestimento de Fibrocimento",
        description:
          "Quantas placas de fibrocimento eu preciso? Calculadora grátis tipo Eternit/Brasilit para exposições de 21 cm e 16 cm — inclui desperdício.",
        category: "Envoltória Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "window-flashing-calculator",
        title: "Calculadora de Rufo de Janela",
        description:
          "Calculadora de rufos: Estime metros lineares de fita autoadesiva para janelas. Ferramenta grátis para larguras de 10 cm, 15 cm e 23 cm.",
        category: "Envoltória Exterior",
        categorySlug: "exterior-shell",
      },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Calculadoras de Isolamento e Drywall",
    description:
      "Estime mantas isolantes, barreira de vapor, placas de drywall, parafusos e massa corrida para acabamento interior.",
    calculators: [
      {
        slug: "cavity-insulation-calculator",
        title: "Calculadora de Isolamento de Cavidade",
        description:
          "Quantas mantas isolantes eu preciso? Calculadora grátis para R-13, R-15, R-19 e R-21 — cobre cavidades de paredes de 5x10 e 5x15 cm.",
        category: "Isolamento e Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-calculator",
        title: "Calculadora de Placas de Drywall",
        description:
          "Quantas placas de drywall eu preciso? Calculadora grátis para 12,5 mm e 15 mm — estima placas de 1,20 x 2,40 m para paredes e forros.",
        category: "Isolamento e Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-screw-calculator",
        title: "Calculadora de Parafusos para Drywall",
        description:
          "Calculadora de parafusos: Quantos parafusos por placa de drywall? Ferramenta grátis para parafusos de 32 mm e 41 mm — total e caixas necessárias.",
        category: "Isolamento e Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "joint-compound-calculator",
        title: "Calculadora de Massa para Juntas",
        description:
          "Quanta massa corrida eu preciso? Calculadora grátis para acabamento de drywall — estima baldes para fita, base e acabamento final.",
        category: "Isolamento e Drywall",
        categorySlug: "insulation-drywall",
      },
    ],
  },
  {
    slug: "hardware",
    title: "Calculadoras de Ferragens",
    description:
      "Calcule pregos para estrutura, conectores de vigas, amarrações anti-vento e demais ferragens estruturais.",
    calculators: [
      {
        slug: "framing-nail-calculator",
        title: "Calculadora de Pregos para Estrutura",
        description:
          "Calculadora de pregos: Quantos quilos de pregos eu preciso? Ferramenta grátis para pregos de 3,5\" e 2,5\" — calcula por quantidade de montantes.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "joist-hanger-calculator",
        title: "Calculadora de Conectores de Vigas",
        description:
          "Quantos conectores de vigas eu preciso? Calculadora grátis para séries LUS, LU e HU — cobre estrutura de piso e forro.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "hurricane-tie-calculator",
        title: "Calculadora de Amarrações Anti-Vento",
        description:
          "Calculadora de amarrações anti-vento: Estime conectores caibro-parede para resistência ao vento. Ferramenta grátis para clips H2.5A e H10.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "lumber-cost-calculator",
        title: "Calculadora de Custo de Madeira",
        description:
          "Quanto custa a madeira? Calculadora grátis para peças de 5x10, 5x15, 5x20 cm e mais — estima custo total por quantidade e preços atuais.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "board-feet-calculator",
        title: "Calculadora de Pés Tábua",
        description:
          "Calculadora de pés tábua grátis — converta dimensões de madeira em board feet. Para precificação de madeira de lei com cálculo instantâneo e custo em R$.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "plywood-calculator",
        title: "Calculadora de Compensado",
        description:
          "Calculadora de compensado grátis — quantas chapas eu preciso? Para painéis de 6 mm a 18 mm. Dá quantidade de chapas e custo estimado em R$.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
    ],
  },
  {
    slug: "finishing",
    title: "Calculadoras de Acabamento",
    description:
      "Calcule tinta, selador, verniz e materiais de acabamento para superfícies internas e externas.",
    calculators: [
      {
        slug: "paint-coverage-calculator",
        title: "Calculadora de Rendimento de Tinta",
        description:
          "Calculadora de rendimento de tinta grátis — quantos litros eu preciso? Para paredes e forros. Considera demãos, dá litros e latas em R$.",
        category: "Acabamento",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Calculadora de Custo de Tinta",
        description:
          "Calculadora de custo de tinta grátis — estime o orçamento total por qualidade. De econômica a premium em R$, inclui insumos e materiais.",
        category: "Acabamento",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Calculadora de Selador (Primer)",
        description:
          "Quanto selador eu preciso? Calculadora grátis para drywall novo, madeira e repintura — ajusta rendimento por tipo de superfície.",
        category: "Acabamento",
        categorySlug: "finishing",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Calculadoras para Áreas Externas",
    description:
      "Calcule materiais para decks, pátios, cercas e estruturas externas.",
    calculators: [
      {
        slug: "deck-board-calculator",
        title: "Calculadora de Tábuas para Deck",
        description:
          "Quantas tábuas eu preciso para meu deck? Calculadora grátis para madeira tratada, cedro e composite — quantidade, metros lineares e desperdício.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Calculadora de Fundação para Deck",
        description:
          "Calculadora de fundação para deck: Quantos pilares de concreto eu preciso? Ferramenta grátis — quantidade de sapatas, postes e vigas.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Calculadora de Guarda-Corpo para Deck",
        description:
          "Quantos postes e balaústres eu preciso? Calculadora grátis de guarda-corpo — dá quantidade de postes, balaústres e metros lineares de corrimão.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Calculadora de Escada para Deck",
        description:
          "Calculadora de escada para deck: Quantos degraus e longarinas? Ferramenta grátis — insira a altura para obter degraus, longarinas e tábuas.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "post-hole-calculator",
        title: "Calculadora de Buracos para Postes",
        description:
          "Calculadora de buracos para postes — quanto concreto para postes de cerca? Ferramenta grátis para qualquer tamanho de buraco. Quantidade exata de sacos de 25 kg e 50 kg.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCalculatorBySlug(
  categorySlug: string,
  calculatorSlug: string
) {
  const category = getCategoryBySlug(categorySlug);
  return category?.calculators.find((c) => c.slug === calculatorSlug);
}
