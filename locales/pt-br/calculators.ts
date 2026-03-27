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
        title: "Calculadora de Chumbadores Grátis — Quantidade & Custo (2026)",
        description:
          "Quantos chumbadores eu preciso? Calculadora grátis para tipo J e cunha com espaçamento padrão de 1,80 m — inclui contagem e distribuição.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Manta de Vedação Grátis — Rolos & Metros (2026)",
        description:
          "Calculadora de manta de vedação: Estime rolos de espuma por perímetro de fundação. Ferramenta grátis para larguras de 9 cm e 14 cm com sobreposição.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Baldrame em Madeira Grátis — Metros & Peças (2026)",
        description:
          "Quanta madeira tratada para o baldrame? Calculadora instantânea para peças de 5x10 cm e 5x15 cm — metros lineares e contagem de peças.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Calculadora de Concreto Grátis — m³, Sacos & Custo (2026)",
        description:
          "Quanto concreto eu preciso? Calculadora grátis para lajes, sapatas e pilares — metros cúbicos e quantidade de sacos com fator de desperdício.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Laje de Concreto Grátis — m³ & Sacos (2026)",
        description:
          "Quanto concreto para uma laje? Calculadora grátis para garagem, calçada e pátio — metros cúbicos e sacos para qualquer espessura.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Sapata de Concreto Grátis — m³ & Desperdício (2026)",
        description:
          "Calculadora de sapatas: Estime metros cúbicos para sapatas corridas e isoladas. Ferramenta grátis para fundação — inclui desperdício.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Pilar de Concreto Grátis — m³ & Sacos (2026)",
        description:
          "Quanto concreto para pilares? Calculadora grátis para diâmetros de 20, 25 e 30 cm — m³ por pilar e total instantâneo.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Degraus de Concreto Grátis — m³ & Degraus (2026)",
        description:
          "Calculadora de degraus de concreto: Quantos metros cúbicos para escadas? Ferramenta grátis — insira largura, espelho e piso.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "gravel-calculator",
        title: "Calculadora de Brita Grátis — m³, Toneladas & Custo (2026)",
        description:
          "Quanta brita preciso? Calculadora grátis para qualquer área — metros cúbicos, toneladas e estimativa de custo com 10% de desperdício.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "driveway-gravel-calculator",
        title: "Brita para Entrada Grátis — Toneladas & Custo (2026)",
        description:
          "Calculadora de brita para entrada de veículos: estime toneladas e custo por tipo — brita, pedrisco, rachão ou saibro com entrega.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "block-fill-calculator",
        title: "Preenchimento de Blocos Grátis — m³ & Sacos (2026)",
        description:
          "Calculadora de preenchimento de blocos — quanto concreto para preencher blocos de concreto? Ferramenta gratuita para blocos de 14, 19 e 29 cm. Metros cúbicos e sacos na hora.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "mortar-mix-calculator",
        title: "Calculadora de Argamassa Grátis — Sacos & Tipo (2026)",
        description:
          "Calculadora de argamassa — ferramenta gratuita para estimar sacos de argamassa para bloco, tijolo e pedra. Tipos N, S e M com opções de espessura de junta.",
        category: "Fundação",
        categorySlug: "foundation",
      },
      {
        slug: "retaining-wall-calculator",
        title: "Muro de Arrimo Grátis — Blocos & Aterro (2026)",
        description:
          "Calculadora de muro de arrimo — ferramenta gratis para muros de bloco, alvenaria estrutural & pedra. Quantidade de blocos, capas, brita de aterro & drenagem.",
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
        title: "Viga Perimetral Grátis — Peças & Metros (2026)",
        description:
          "Calculadora de viga perimetral: Quantas peças para o contorno do piso? Ferramenta grátis para 5x20 cm, 5x25 cm e 5x30 cm.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "floor-joist-calculator",
        title: "Vigas de Piso Grátis — Quantidade & Espaçamento (2026)",
        description:
          "Calculadora de vigas de piso grátis — quantidade, tamanho e espaçamento por vão. Para 40 cm e 60 cm entre eixos, resultado instantâneo.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "bridging-calculator",
        title: "Travamento Grátis — Filas & Blocos (2026)",
        description:
          "Calculadora de travamento: Quantas filas de contraventamento eu preciso? Ferramenta grátis conforme vão das vigas — blocos sólidos ou cruzados.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "subfloor-adhesive-calculator",
        title: "Adesivo de Contrapiso Grátis — Tubos & m² (2026)",
        description:
          "Quantos tubos de adesivo de contrapiso eu preciso? Calculadora grátis por área de piso — cobre tubos de 828 ml e 300 ml.",
        category: "Estrutura de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "osb-panel-calculator",
        title: "Painéis OSB Grátis — Chapas & Desperdício (2026)",
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
        title: "Calculadora de Montantes Grátis — Quantidade & Custo (2026)",
        description:
          "Quantos montantes eu preciso? Calculadora grátis para espaçamento de 40 cm e 60 cm entre eixos — inclui extras para cantos e aberturas.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
      {
        slug: "bottom-plate-calculator",
        title: "Guia Inferior Grátis — Peças & Metros (2026)",
        description:
          "Calculadora de guia inferior: Estime peças de 5x10 cm ou 5x15 cm por comprimento de parede. Ferramenta grátis com metros lineares e contagem.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
      {
        slug: "top-plate-calculator",
        title: "Guia Superior Grátis — Peças & Sobreposição (2026)",
        description:
          "Quanta madeira para a guia superior dupla? Calculadora grátis para paredes de 5x10 cm e 5x15 cm — inclui sobreposição e contagem de peças.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
      {
        slug: "header-calculator",
        title: "Calculadora de Vergas Grátis — Medida & Peças (2026)",
        description:
          "Calculadora de vergas: Qual a medida da verga para minha abertura? Ferramenta grátis para portas e janelas — 5x15, 5x20 e 5x25 cm.",
        category: "Estrutura de Paredes",
        categorySlug: "wall-framing",
      },
      {
        slug: "exterior-sheathing-calculator",
        title: "Revestimento Estrutural Grátis — Chapas & m² (2026)",
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
        title: "Tesouras de Telhado Grátis — Quantidade & Espaço (2026)",
        description:
          "Calculadora de tesouras grátis — quantas treliças para meu telhado? Espaçamento padrão de 60 cm. Insira o comprimento e obtenha contagem e layout.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "rafter-calculator",
        title: "Calculadora de Caibros Grátis — Comprimento & Qtd (2026)",
        description:
          "Calculadora de caibros grátis — comprimento, quantidade e espaçamento para qualquer inclinação. 40 e 60 cm entre eixos, resultado instantâneo.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "ridge-board-calculator",
        title: "Cumeeira Grátis — Comprimento & Peças (2026)",
        description:
          "Quantas peças de cumeeira eu preciso? Calculadora grátis para 5x20, 5x25 e 5x30 cm — calcula comprimento total e número de peças.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-sheathing-calculator",
        title: "Forro de Telhado Grátis — Chapas & m² (2026)",
        description:
          "Calculadora de forro de telhado: Quantas chapas OSB de 1,22 x 2,44 m? Ferramenta grátis que considera inclinação e desperdício.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "shingle-calculator",
        title: "Calculadora de Telhas Grátis — Pacotes & m² (2026)",
        description:
          "Calculadora de telhas grátis — quantos pacotes eu preciso? Para telhas shingle e cerâmicas. Converte m² em pacotes instantaneamente.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "underlayment-calculator",
        title: "Manta Impermeabilizante Grátis — Rolos & m² (2026)",
        description:
          "Calculadora de manta: Quantos rolos de manta asfáltica ou sintética eu preciso? Ferramenta grátis para manta 15 lb, 30 lb e sintética.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "drip-edge-calculator",
        title: "Pingadeira Grátis — Metros & Peças (2026)",
        description:
          "Quantos metros de pingadeira eu preciso? Calculadora grátis por perímetro do telhado — calcula peças para tiras padrão de 3 m.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-pitch-calculator",
        title: "Inclinação do Telhado Grátis — Ângulo & Fator (2026)",
        description:
          "Qual a inclinação do meu telhado? Calculadora grátis — insira altura e distância para obter ângulo, porcentagem e multiplicador de área.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-area-calculator",
        title: "Área do Telhado Grátis — m² & Inclinação (2026)",
        description:
          "Calculadora de área de telhado grátis — converta dimensões planas em área real de cobertura. Com multiplicador de inclinação e m² totais.",
        category: "Telhado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-slope-calculator",
        title: "Caimento do Telhado Grátis — Ângulo & Material (2026)",
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
        title: "Manta Hidrófuga Grátis — Rolos & m² (2026)",
        description:
          "Quantos rolos de manta hidrófuga eu preciso? Calculadora grátis tipo Tyvek por m² de parede — cobre larguras de 1 m, 1,5 m e 2,7 m.",
        category: "Envoltória Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "vinyl-siding-calculator",
        title: "Revestimento Vinílico Grátis — Painéis & m² (2026)",
        description:
          "Calculadora de revestimento vinílico grátis — insira m² de parede para obter painéis exatos. Desconta portas, janelas e adiciona 10% de desperdício.",
        category: "Envoltória Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "hardie-siding-calculator",
        title: "Fibrocimento Grátis — Placas & Desperdício (2026)",
        description:
          "Quantas placas de fibrocimento eu preciso? Calculadora grátis tipo Eternit/Brasilit para exposições de 21 cm e 16 cm — inclui desperdício.",
        category: "Envoltória Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "window-flashing-calculator",
        title: "Rufo de Janela Grátis — Metros & Rolos (2026)",
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
        title: "Isolamento de Cavidade Grátis — Mantas & m² (2026)",
        description:
          "Quantas mantas isolantes eu preciso? Calculadora grátis para R-13, R-15, R-19 e R-21 — cobre cavidades de paredes de 5x10 e 5x15 cm.",
        category: "Isolamento e Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-calculator",
        title: "Placas de Drywall Grátis — Placas & m² (2026)",
        description:
          "Quantas placas de drywall eu preciso? Calculadora grátis para 12,5 mm e 15 mm — estima placas de 1,20 x 2,40 m para paredes e forros.",
        category: "Isolamento e Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-screw-calculator",
        title: "Parafusos para Drywall Grátis — Quantidade & Caixas (2026)",
        description:
          "Calculadora de parafusos: Quantos parafusos por placa de drywall? Ferramenta grátis para parafusos de 32 mm e 41 mm — total e caixas necessárias.",
        category: "Isolamento e Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "joint-compound-calculator",
        title: "Massa para Juntas Grátis — Baldes & Custo (2026)",
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
        title: "Pregos para Estrutura Grátis — kg & Custo (2026)",
        description:
          "Calculadora de pregos: Quantos quilos de pregos eu preciso? Ferramenta grátis para pregos de 3,5\" e 2,5\" — calcula por quantidade de montantes.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "joist-hanger-calculator",
        title: "Conectores de Vigas Grátis — Peças & Tipo (2026)",
        description:
          "Quantos conectores de vigas eu preciso? Calculadora grátis para séries LUS, LU e HU — cobre estrutura de piso e forro.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "hurricane-tie-calculator",
        title: "Amarrações Anti-Vento Grátis — Peças & Custo (2026)",
        description:
          "Calculadora de amarrações anti-vento: Estime conectores caibro-parede para resistência ao vento. Ferramenta grátis para clips H2.5A e H10.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "lumber-cost-calculator",
        title: "Custo de Madeira Grátis — Peças & Total em R$ (2026)",
        description:
          "Quanto custa a madeira? Calculadora grátis para peças de 5x10, 5x15, 5x20 cm e mais — estima custo total por quantidade e preços atuais.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "board-feet-calculator",
        title: "Pés Tábua Grátis — BF & Custo em R$ (2026)",
        description:
          "Calculadora de pés tábua grátis — converta dimensões de madeira em board feet. Para precificação de madeira de lei com cálculo instantâneo e custo em R$.",
        category: "Ferragens",
        categorySlug: "hardware",
      },
      {
        slug: "plywood-calculator",
        title: "Compensado Grátis — Chapas & Custo em R$ (2026)",
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
        title: "Rendimento de Tinta Grátis — Litros & m² (2026)",
        description:
          "Calculadora de rendimento de tinta grátis — quantos litros eu preciso? Para paredes e forros. Considera demãos, dá litros e latas em R$.",
        category: "Acabamento",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Custo de Tinta Grátis — Litros & Orçamento (2026)",
        description:
          "Calculadora de custo de tinta grátis — estime o orçamento total por qualidade. De econômica a premium em R$, inclui insumos e materiais.",
        category: "Acabamento",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Selador (Primer) Grátis — Litros & m² (2026)",
        description:
          "Quanto selador eu preciso? Calculadora grátis para drywall novo, madeira e repintura — ajusta rendimento por tipo de superfície.",
        category: "Acabamento",
        categorySlug: "finishing",
      },
      {
        slug: "epoxy-calculator",
        title: "Calculadora de Epóxi Grátis — Litros & Custo (2026)",
        description:
          "Calculadora de epóxi — quanto epóxi para o piso da garagem? Ferramenta grátis para qualquer área. Litros, kits & estimativa de custo para 1 ou 2 demãos.",
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
        title: "Tábuas para Deck Grátis — Quantidade & Metros (2026)",
        description:
          "Quantas tábuas eu preciso para meu deck? Calculadora grátis para madeira tratada, cedro e composite — quantidade, metros lineares e desperdício.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Fundação para Deck Grátis — Pilares & m³ (2026)",
        description:
          "Calculadora de fundação para deck: Quantos pilares de concreto eu preciso? Ferramenta grátis — quantidade de sapatas, postes e vigas.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Guarda-Corpo Deck Grátis — Postes & Balaústres (2026)",
        description:
          "Quantos postes e balaústres eu preciso? Calculadora grátis de guarda-corpo — dá quantidade de postes, balaústres e metros lineares de corrimão.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Escada para Deck Grátis — Degraus & Longarinas (2026)",
        description:
          "Calculadora de escada para deck: Quantos degraus e longarinas? Ferramenta grátis — insira a altura para obter degraus, longarinas e tábuas.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "post-hole-calculator",
        title: "Buracos para Postes Grátis — Sacos & m³ (2026)",
        description:
          "Calculadora de buracos para postes — quanto concreto para postes de cerca? Ferramenta grátis para qualquer tamanho de buraco. Quantidade exata de sacos de 25 kg e 50 kg.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "pond-calculator",
        title: "Calculadora de Lago Grátis — Litros & Lona (2026)",
        description:
          "Calculadora de lago — ferramenta grátis para volume, tamanho da lona & capacidade da bomba. Insira dimensões para lagos retangulares, ovais ou em forma de rim.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-calculator",
        title: "Calculadora de Cerca Grátis — Mourões & Réguas (2026)",
        description:
          "Calculadora de cerca — quantos mourões, travessas e réguas para sua cerca? Ferramenta grátis para cercas de madeira. Lista completa de materiais instantânea.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-post-calculator",
        title: "Mourões de Cerca Grátis — Mourões & Concreto (2026)",
        description:
          "Calculadora de mourões — quantos mourões e sacos de concreto? Ferramenta grátis calcula mourões, concreto e brita para qualquer comprimento de cerca.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-panel-calculator",
        title: "Painéis de Cerca Grátis — Painéis & Mourões (2026)",
        description:
          "Calculadora de painéis de cerca — quantos painéis pré-fabricados? Ferramenta grátis para painéis de 1,80 m e 2,50 m. Painéis, mourões e capas.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
      {
        slug: "picket-fence-calculator",
        title: "Cerca de Estacas Grátis — Estacas & Mourões (2026)",
        description:
          "Calculadora de cerca de estacas — quantas estacas com espaçamento personalizado? Ferramenta grátis para qualquer largura e vão. Estacas, travessas, mourões e volume de madeira.",
        category: "Áreas Externas",
        categorySlug: "outdoor",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Calculadoras de Piso",
    description:
      "Calcule materiais para projetos de piso — madeira, carpete, porcelanato e laminado com fator de desperdício e estimativa de custos.",
    calculators: [
      { slug: "flooring-calculator", title: "Calculadora de Piso Grátis — Caixas & m² (2026)", description: "Calculadora de piso — ferramenta grátis para metros quadrados. Caixas, desperdício e lista de materiais para porcelanato, vinílico e engenheirado.", category: "Piso", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Calculadora de Carpete Grátis — m² & Rolos (2026)", description: "Calculadora de carpete — ferramenta grátis para metros quadrados, metros lineares e manta. Para rolos de 3,66 m e 4 m com planejamento de emendas.", category: "Piso", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Calculadora de Porcelanato Grátis — Peças & Caixas (2026)", description: "Calculadora de porcelanato — ferramenta grátis para cerâmica, porcelanato e pedra natural. Quantidade de peças, caixas, rejunte e argamassa.", category: "Piso", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Calculadora de Laminado Grátis — Caixas & m² (2026)", description: "Calculadora de piso laminado — estimador grátis de réguas e caixas com manta. Insira dimensões do cômodo para lista de materiais instantânea.", category: "Piso", categorySlug: "flooring" },
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
