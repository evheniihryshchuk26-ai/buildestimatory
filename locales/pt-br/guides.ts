import type { GuidesTranslations } from "@/lib/i18n/types";

const guides: GuidesTranslations = {
  breadcrumbGuides: "Guias",

  index: {
    title: "Guias de Construção",
    metaDescription:
      "Guias detalhados de construção para construtores, empreiteiros e adeptos do faça você mesmo. Aprenda sobre espaçamento de estrutura, seleção de materiais, normas ABNT e muito mais.",
    heading: "Guias de Construção",
    description:
      "Guias detalhados para ajudá-lo a tomar melhores decisões no seu próximo projeto de construção.",
    guides: [
      {
        title: "Espaçamento 40 cm vs 60 cm entre Eixos: Guia Completo",
        description:
          "Aprenda quando usar espaçamento de 40 cm vs 60 cm entre eixos para montantes, vigas e caibros. Inclui requisitos normativos, comparação de custos e impacto nos materiais.",
        href: "/guides/16-vs-24-on-center-spacing",
      },
      {
        title: "Tabela de Inclinação de Telhado: Guia de Referência Completo",
        description:
          "Tabela completa de inclinação de telhado com graus, porcentagens e multiplicadores para cada inclinação comum de 5% a 100%. Inclui recomendações de materiais e clima.",
        href: "/guides/roof-pitch-chart",
      },
      {
        title: "Inclinação Mínima para Telhas Cerâmicas, Metálicas e Shingle",
        description:
          "Encontre a inclinação mínima para telhas cerâmicas, metálicas, shingle asfáltico e mais. Inclui referências a normas ABNT e soluções para telhados de baixa inclinação.",
        href: "/guides/minimum-roof-pitch-for-shingles",
      },
      {
        title: "Concreto Usinado vs Sacos: Qual Usar?",
        description:
          "Concreto usinado vs sacos comparados: custo por m³, resistência, praticidade e melhores usos. Saiba quando pedir caminhão betoneira vs misturar sacos manualmente.",
        href: "/guides/ready-mix-vs-bagged-concrete",
      },
      {
        title: "Quanto Custa o Concreto em 2026? Guia Completo de Preços em R$",
        description:
          "Grátis: guia completo de preços do concreto em 2026 — valores em R$ por m³ para lajes, sapatas e calçadas. Inclui custo de mão de obra e dicas de economia.",
        href: "/guides/concrete-cost-guide",
      },
      {
        title: "Quanta Tinta Eu Preciso? Guia Completo",
        description:
          "Quanta tinta para paredes, tetos e acabamentos? Guia completo cobrindo medição, rendimento por tipo de tinta, número de demãos, preparação de superfície e detalhamento de custos.",
        href: "/guides/how-much-paint-do-i-need",
      },
      {
        title: "Guia de Preços de Madeira: Quanto Custa a Madeira?",
        description:
          "Preços atuais de madeira por espécie, grau e seção. Cobre madeira dimensional, madeira engenheirada, compensado, tendências de preço, onde comprar e descontos por volume.",
        href: "/guides/lumber-prices-guide",
      },
      {
        title: "Deck WPC vs Madeira: Qual É Melhor?",
        description:
          "Deck composite vs madeira comparados: custo, durabilidade, manutenção, aparência e vida útil. Descubra qual material é melhor para seu projeto e clima.",
        href: "/guides/composite-vs-wood-decking",
      },
      {
        title: "Quanto Custa a Brita? Guia de Preços 2026",
        description:
          "A brita custa R$60–R$180 por tonelada. Guia completo de preços para entradas, pátios, caminhos, drenagem e paisagismo com frete e cálculo de quantidade.",
        href: "/guides/gravel-cost-guide",
      },
      {
        title: "Quanto Custa uma Entrada/Garagem? Guia de Preços 2026",
        description:
          "Uma entrada nova custa R$5.000–R$80.000 dependendo do material e tamanho. Guia completo: concreto, asfalto, brita e piso intertravado com tabelas de custo, fatores de preço e dicas de economia.",
        href: "/guides/driveway-cost-guide",
      },
      {
        title: "Guia de Custos de Piso: Quanto Custa um Piso Novo?",
        description:
          "Pisos custam R$30\u2013R$300/m\u00b2 instalados. Guia completo de pre\u00e7os para porcelanato, laminado, carpete, vinilo e madeira com estimativas por c\u00f4modo e dicas de economia.",
        href: "/guides/flooring-cost-guide",
      },
      {
        title: "Guia Completo de Construção de Escadas: Normas, Cálculos e Materiais",
        description:
          "Como construir escadas — guia completo sobre anatomia, ABNT NBR 9077, cálculos de espelho e piso, tipos (reta, L, U, caracol), materiais e custos.",
        href: "/guides/stair-building-guide",
      },
    ],
  },

  spacingGuide: {
    title: "Espaçamento 40 cm vs 60 cm entre Eixos: Guia Completo",
    metaDescription:
      "Espaçamento 40 cm vs 60 cm entre eixos explicado: quando usar cada um para montantes, vigas de piso e caibros. Inclui requisitos normativos ABNT, comparação de custos e impacto nos materiais.",

    heroTitle: "Espaçamento 40 cm vs 60 cm entre Eixos",
    heroSubtitle: "Guia Completo",
    heroDescription:
      "Tudo o que você precisa saber sobre como escolher entre espaçamento de 40 cm e 60 cm entre eixos para montantes de parede, vigas de piso, vigas de forro e caibros de telhado.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "Use espaçamento de 40 cm entre eixos para paredes portantes, maioria das vigas de piso e qualquer aplicação onde máxima resistência estrutural é necessária. Use espaçamento de 60 cm para divisórias não portantes, tesouras de telhado e situações onde a norma permite e você deseja reduzir custos de material em até 33%.",

    whatIsHeading: "O Que É Espaçamento entre Eixos?",
    whatIsText1:
      "Espaçamento entre eixos é a distância medida do centro de um elemento estrutural ao centro do próximo. Esta é a forma padrão como construtores e normas de construção especificam o espaçamento de montantes, vigas, caibros e tesouras na construção em madeira (wood frame).",
    whatIsText2:
      "Os dois espaçamentos entre eixos mais comuns na construção residencial são 40 cm e 60 cm. A escolha entre eles afeta a capacidade estrutural, o custo de materiais, o desempenho do isolamento térmico e a compatibilidade com materiais de construção padrão.",
    whatIsText3:
      "Materiais de construção padrão como painéis de compensado, OSB e placas de drywall de 1,22 × 2,44 m são fabricados em dimensões divisíveis por 40 cm e 60 cm, garantindo que as bordas dos painéis sempre caiam sobre um elemento de estrutura em qualquer espaçamento.",

    comparisonHeading: "40 cm vs 60 cm: Comparação Lado a Lado",
    comparisonSubheading:
      "Como os dois espaçamentos de estrutura mais comuns se comparam em cada aplicação importante.",
    comparisonCol1: "Aplicação",
    comparisonCol2: "40 cm entre Eixos",
    comparisonCol3: "60 cm entre Eixos",
    comparisonRows: [
      {
        category: "Paredes Portantes Externas",
        oc16: "Obrigatório pela maioria das normas para paredes de 38x89 mm. Opção mais resistente.",
        oc24: "Permitido com montantes de 38x140 mm em algumas jurisdições (verifique a norma local).",
      },
      {
        category: "Divisórias Internas Não Portantes",
        oc16: "Comum mas não obrigatório. Mais pontos de fixação para armários.",
        oc24: "Conforme norma. Economiza ~33% em montantes.",
      },
      {
        category: "Vigas de Piso (38x235 mm, vão típico)",
        oc16: "Vãos de até ~4,5 m com pinus estrutural. Piso mais rígido.",
        oc24: "Vãos de até ~3,5 m com mesma madeira. Pode parecer flexível.",
      },
      {
        category: "Vigas de Forro (sem depósito no sótão)",
        oc16: "Padrão para uso de sótão. Suporta drywall mais cargas.",
        oc24: "Adequado para forros apenas com drywall sem uso de sótão.",
      },
      {
        category: "Caibros / Tesouras",
        oc16: "Usado em áreas com carga de vento elevada.",
        oc24: "Padrão para tesouras industrializadas em climas moderados.",
      },
      {
        category: "Custo de Material (por metro linear de parede)",
        oc16: "Mais madeira, mais fixadores — custo mais alto.",
        oc24: "Menos montantes, menos trabalho — economia de 25-33%.",
      },
      {
        category: "Isolamento",
        oc16: "Isolamento padrão para cavidades de 38x89 mm e 38x140 mm.",
        oc24: "Cavidades mais largas para isolamento mais eficiente com 38x140 mm.",
      },
      {
        category: "Suporte para Drywall",
        oc16: "Excelente fixação. Menor risco de estufamento e trincas.",
        oc24: "Requer drywall de 15 mm em forros para evitar flambagem.",
      },
    ],

    when16Heading: "Quando Usar Espaçamento de 40 cm entre Eixos",
    when16Intro:
      "O espaçamento de 40 cm é a opção mais conservadora e comumente utilizada. Veja quando é obrigatório ou fortemente recomendado:",
    when16Items: [
      "Paredes portantes externas — Obrigatório pelas normas para a maioria das paredes de 38x89 mm que sustentam cargas de telhado e piso.",
      "Vigas de piso para vãos maiores — 40 cm permite vãos maiores. Uma viga de 38x235 mm de pinus estrutural a 40 cm vence até 4,5 m vs 3,5 m a 60 cm.",
      "Áreas com acabamentos pesados — Pisos cerâmicos, bancadas de pedra e armários embutidos se beneficiam do suporte extra de 40 cm.",
      "Zonas de vento forte — Normas em zonas sujeitas a vendavais frequentemente exigem 40 cm (ou menos) para contraventamento.",
      "Vigas de forro com uso de sótão — Se o sótão for usado para depósito ou espaço futuro, 40 cm proporciona a capacidade de carga necessária.",
      "Paredes com revestimento pesado — Tijolo aparente, textura sobre OSB e fibrocimento funcionam melhor com montantes a 40 cm.",
    ],
    when16Summary:
      "Em resumo: quando em dúvida, 40 cm é a escolha mais segura. O custo extra de material é modesto comparado aos benefícios estruturais.",

    when24Heading: "Quando Usar Espaçamento de 60 cm entre Eixos",
    when24Intro:
      "O espaçamento de 60 cm usa menos elementos estruturais e pode economizar significativamente em material e mão de obra. Veja quando é apropriado:",
    when24Items: [
      "Divisórias internas não portantes — As normas permitem 60 cm para paredes que não sustentam carga estrutural. Esta é a aplicação mais comum.",
      "Tesouras de telhado industrializadas — A maioria das tesouras é projetada para espaçamento de 60 cm. O cálculo estrutural da tesoura considera o espaçamento maior.",
      "Construção com estrutura avançada (advanced framing) — Usa montantes de 38x140 mm a 60 cm com guia superior simples, reduzindo madeira em até 30% e melhorando o isolamento.",
      "Empenas de telhado — Paredes de empena não estruturais acima da linha do telhado podem usar 60 cm.",
      "Vigas de forro (somente drywall) — Quando o forro suporta apenas drywall sem depósito acima, 60 cm é adequado conforme norma.",
      "Projetos econômicos — Em uma casa de 150 m², trocar divisórias não portantes para 60 cm pode economizar R$ 2.000,00 a R$ 4.000,00 só em madeira.",
    ],
    when24Summary:
      "Em resumo: 60 cm é uma escolha inteligente onde a norma permite, especialmente para divisórias não portantes e tesouras industrializadas.",

    codeHeading: "Requisitos Normativos (ABNT NBR)",
    codeIntro:
      "As normas brasileiras e internacionais fornecem orientações específicas sobre quando cada espaçamento é permitido. Aqui estão as referências principais:",
    codeItems: [
      "ABNT NBR 7190 — Projeto de Estruturas de Madeira: estabelece os critérios de dimensionamento para elementos estruturais de madeira, incluindo espaçamentos e vãos admissíveis.",
      "Diretriz SINAT nº 005 — Sistemas construtivos em wood frame: define os requisitos para construção wood frame no Brasil, incluindo espaçamentos de montantes.",
      "ABNT NBR 15575 — Desempenho de edificações habitacionais: estabelece requisitos de desempenho estrutural, térmico e acústico que influenciam a escolha do espaçamento.",
      "ABNT NBR 6120 — Cargas para o cálculo de estruturas de edificações: define as cargas de projeto que determinam os vãos e espaçamentos admissíveis.",
      "IRC R602.3 (referência internacional) — Paredes portantes: montantes de 38x89 mm a 40 cm ou 38x140 mm a 60 cm (com revestimento estrutural aprovado).",
      "As normas locais (código de obras municipal) podem ter requisitos adicionais. Sempre consulte a prefeitura antes de finalizar os planos de estrutura.",
    ],
    codeSummary:
      "Importante: As normas estabelecem requisitos mínimos. Seu engenheiro estrutural pode exigir espaçamento menor baseado em condições específicas do local como tipo de solo, exposição ao vento ou cargas especiais.",

    costHeading: "Comparação de Custos: 40 cm vs 60 cm entre Eixos",
    costIntro:
      "A economia de material é uma das maiores razões para considerar espaçamento de 60 cm. Veja como os números se comparam:",
    costText1:
      "Para uma parede padrão de 2,70 m de altura, o espaçamento de 40 cm requer um montante a cada 40 cm — aproximadamente 2,5 montantes por metro linear de parede. A 60 cm, você precisa de cerca de 1,67 montantes por metro linear. Isso é uma redução de 33% na quantidade de montantes.",
    costText2:
      "Em uma casa típica de 150 m² em planta com ~60 metros lineares de divisórias internas, trocar de 40 cm para 60 cm economiza aproximadamente 50 montantes. A R$ 15,00–25,00 por montante (preços 2026-2025 para pinus tratado 38x89x2440 mm), isso representa R$ 750,00–R$ 1.250,00 só em montantes. Incluindo a redução de fixadores e mão de obra (menos montantes para cortar, transportar e pregar), a economia chega a R$ 2.000,00–R$ 4.000,00.",
    costText3:
      "No entanto, não use 60 cm apenas para economizar em paredes portantes. O custo de uma falha estrutural ou violação de norma supera em muito qualquer economia de material. A economia se aplica apenas onde 60 cm é permitido pelas normas.",

    impactHeading: "Impacto em Outros Materiais",
    impactIntro:
      "O espaçamento da estrutura não afeta apenas a madeira. Tem um efeito cascata em múltiplos sistemas da edificação:",
    impactInsulationHeading: "Isolamento",
    impactInsulationText:
      "As mantas de lã de vidro e lã de rocha são fabricadas em larguras para cavidades de 40 cm e 60 cm entre eixos. As cavidades mais largas de 60 cm melhoram o desempenho térmico pois há menos montantes agindo como pontes térmicas. Na construção com estrutura avançada, montantes de 38x140 mm a 60 cm permitem mantas de maior espessura e melhor isolamento conforme a zona bioclimática da ABNT NBR 15575.",
    impactDrywallHeading: "Drywall",
    impactDrywallText:
      "Placas de drywall de 12,5 mm funcionam bem em paredes com espaçamento de 40 cm ou 60 cm. No entanto, em forros, as normas de instalação exigem drywall de 15 mm quando as vigas ou tesouras estão espaçadas a 60 cm para prevenir flambagem. O drywall de 15 mm custa 20–30% mais por placa, o que parcialmente anula a economia de estrutura.",
    impactSheathingHeading: "Revestimento Estrutural e Acabamento",
    impactSheathingText:
      "Painéis de compensado e OSB de 1,22 × 2,44 m funcionam em ambos os espaçamentos, pois suas bordas caem sobre elementos de estrutura. No entanto, a 60 cm, o painel vence um vão maior sem apoio entre montantes. Para revestimento estrutural (contraventamento), verifique se a classificação do painel corresponde ao espaçamento dos montantes.",

    calculatorCtaHeading: "Calcule Seus Materiais",
    calculatorCtaText:
      "Use nossas calculadoras gratuitas para obter quantidades exatas de materiais para seu projeto com espaçamento de 40 cm ou 60 cm entre eixos:",
    calculatorLinks: [
      {
        label: "Calculadora de Montantes",
        href: "/calculators/wall-framing/stud-calculator",
        description: "Calcule o número de montantes para qualquer comprimento de parede e espaçamento.",
      },
      {
        label: "Calculadora de Vigas de Piso",
        href: "/calculators/floor-framing/floor-joist-calculator",
        description: "Determine quantidade de vigas, espaçamento e viga perimetral para seu sistema de piso.",
      },
      {
        label: "Calculadora de Caibros",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calcule caibros necessários baseado no vão, espaçamento e inclinação do telhado.",
      },
      {
        label: "Calculadora de Tesouras",
        href: "/calculators/roofing/truss-calculator",
        description: "Estime quantidade e espaçamento de tesouras para seu sistema de telhado.",
      },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Posso usar espaçamento de 60 cm para paredes externas?",
        answer:
          "Sim, mas apenas com montantes de 38x140 mm e revestimento estrutural aprovado na maioria das jurisdições. A norma permite montantes de 38x140 mm a 60 cm para paredes portantes externas até certos limites de altura e carga. Sempre verifique com seu engenheiro estrutural e código de obras local.",
      },
      {
        question: "Espaçamento de 40 cm ou 60 cm é melhor para instalar armários?",
        answer:
          "40 cm é melhor para instalação de armários pois proporciona mais pontos de fixação. Com montantes a 40 cm, um armário aéreo de 80 cm acertará pelo menos dois montantes. A 60 cm, um armário estreito pode pegar apenas um montante, exigindo buchas especiais.",
      },
      {
        question: "O que significa espaçamento entre eixos?",
        answer:
          "Entre eixos significa que a distância é medida do centro de um elemento estrutural ao centro do adjacente. Para montantes a 40 cm entre eixos, o centro de cada montante está a 40 cm do centro do próximo. Esta medição padronizada garante espaçamento consistente e compatibilidade com painéis de 1,22 m e 2,44 m.",
      },
      {
        question: "Quanto dinheiro o espaçamento de 60 cm economiza?",
        answer:
          "Trocar de 40 cm para 60 cm em paredes não portantes economiza aproximadamente 33% em montantes. Para uma casa típica de 150 m², isso se traduz em R$ 2.000,00–R$ 4.000,00 de economia combinada em madeira, fixadores e mão de obra.",
      },
      {
        question: "Posso usar drywall de 12,5 mm em forro com vigas a 60 cm?",
        answer:
          "Não é recomendado. Quando a estrutura do forro está a 60 cm entre eixos, use drywall de 15 mm para prevenir flambagem ao longo do tempo. Drywall de 12,5 mm pode ser usado em paredes com espaçamento de 60 cm sem problemas.",
      },
      {
        question: "O que é construção com estrutura avançada (advanced framing)?",
        answer:
          "Estrutura avançada é uma técnica que usa montantes de 38x140 mm a 60 cm entre eixos com guia superior simples, cantos de dois montantes e bloqueio tipo escada. Reduz o uso de madeira em até 30% enquanto permite isolamento mais espesso. É reconhecida pelas normas internacionais e promovida para eficiência energética.",
      },
      {
        question: "Tesouras usam espaçamento de 40 cm ou 60 cm?",
        answer:
          "A maioria das tesouras industrializadas é projetada para espaçamento de 60 cm. O fabricante da tesoura calcula cada elemento para suportar as cargas no espaçamento especificado. Em áreas com cargas de vento elevadas, o espaçamento de 40 cm pode ser especificado pelo engenheiro.",
      },
      {
        question: "O espaçamento dos montantes afeta a eficiência energética?",
        answer:
          "Sim. Montantes atuam como pontes térmicas, conduzindo calor através da parede. A 40 cm, os montantes representam cerca de 25% da área da parede, reduzindo a resistência térmica efetiva. A 60 cm, os montantes representam apenas 17%, melhorando o valor R efetivo da parede. Combinado com estrutura de 38x140 mm, o espaçamento de 60 cm pode melhorar a eficiência energética da parede em 15–20%.",
      },
    ],
  },
  roofPitchChart: {
    title: "Tabela de Inclinação de Telhado: Guia de Referência Completo",
    metaDescription:
      "Tabela de inclinação de telhado mostrando graus, porcentagem de inclinação e multiplicador para cada inclinação de 5% a 100%. Descubra qual inclinação funciona melhor para seu material de cobertura, clima e orçamento.",

    heroTitle: "Tabela de Inclinação de Telhado",
    heroSubtitle: "Guia de Referência Completo",
    heroDescription:
      "Uma tabela de referência completa cobrindo todas as inclinações de telhado padrão de 5% a 100%, incluindo conversões para graus, multiplicadores de área e orientações sobre materiais e clima.",

    quickRefHeading: "Tabela de Referência Rápida de Inclinação",
    quickRefSubheading:
      "Todas as inclinações comuns de telhado com seus equivalentes em graus, porcentagens e multiplicadores de área. O multiplicador indica quanto maior é a superfície do telhado em relação à projeção plana.",
    quickRefColPitch: "Inclinação (%)",
    quickRefColDegrees: "Graus",
    quickRefColSlope: "Razão (cm/m)",
    quickRefColMultiplier: "Multiplicador",
    quickRefColDescription: "Descrição",
    quickRefRows: [
      { pitch: "5%", degrees: "2,86°", slopePercent: "5%", multiplier: "1,001", description: "Quase plano — somente manta asfáltica ou metálica junta alzada" },
      { pitch: "10%", degrees: "5,71°", slopePercent: "10%", multiplier: "1,005", description: "Inclinação baixa — telha metálica trapezoidal" },
      { pitch: "15%", degrees: "8,53°", slopePercent: "15%", multiplier: "1,011", description: "Inclinação baixa — mínimo para shingle com manta integral" },
      { pitch: "25%", degrees: "14,04°", slopePercent: "25%", multiplier: "1,031", description: "Inclinação baixa — telha metálica, manta modificada" },
      { pitch: "30%", degrees: "16,70°", slopePercent: "30%", multiplier: "1,044", description: "Mínimo padrão para telhas cerâmicas no Brasil" },
      { pitch: "40%", degrees: "21,80°", slopePercent: "40%", multiplier: "1,077", description: "Residencial comum — boa drenagem" },
      { pitch: "50%", degrees: "26,57°", slopePercent: "50%", multiplier: "1,118", description: "Inclinação popular para residências brasileiras" },
      { pitch: "60%", degrees: "30,96°", slopePercent: "60%", multiplier: "1,166", description: "Inclinação moderada-alta — estilo colonial" },
      { pitch: "75%", degrees: "36,87°", slopePercent: "75%", multiplier: "1,250", description: "Íngreme — bom escoamento de chuva" },
      { pitch: "85%", degrees: "40,36°", slopePercent: "85%", multiplier: "1,312", description: "Muito íngreme — requer medidas de segurança" },
      { pitch: "100%", degrees: "45,00°", slopePercent: "100%", multiplier: "1,414", description: "Ângulo de 45 graus — inclinação máxima comum" },
    ],

    readingHeading: "Como Ler a Notação de Inclinação de Telhado",
    readingText1:
      "No Brasil, a inclinação de telhado é expressa em porcentagem (%). Quando você vê \"30%\", significa que o telhado sobe 30 cm para cada 100 cm de distância horizontal. A porcentagem é a relação entre a elevação vertical e o avanço horizontal multiplicada por 100.",
    readingText2:
      "Você pode converter qualquer inclinação para graus usando a fórmula: graus = arctan(porcentagem / 100). Para uma inclinação de 30%, isso é arctan(30/100) = 16,70 graus.",
    readingText3:
      "O multiplicador de área é calculado como a raiz quadrada de (1 + (porcentagem/100)²). Este número indica quanto material de cobertura você precisa em comparação com a projeção plana do edifício. Um telhado de 30% requer 4,4% mais material que a área plana, enquanto um telhado de 100% (45°) requer 41,4% mais.",

    lowSlopeHeading: "Inclinações Baixas (5% – 20%)",
    lowSlopeIntro:
      "Telhados de inclinação baixa são comuns em edifícios comerciais, projetos residenciais modernos e anexos como coberturas e garagens. Requerem atenção especial à impermeabilização pois a água drena lentamente.",
    lowSlopeItems: [
      "5% de inclinação — O mínimo absoluto para qualquer telhado. Requer cobertura de membrana contínua como manta asfáltica, TPO ou EPDM. Telha metálica com junta alzada e juntas seladas também é aceitável.",
      "10% de inclinação — Mínimo para telhas metálicas trapezoidais com vedação adequada nos parafusos e sobreposições. Requer manta impermeabilizante de qualidade sob as telhas.",
      "15-20% de inclinação — Telhas shingle asfálticas podem ser instaladas a partir de 17% com manta impermeabilizante integral cobrindo todo o deck. A maioria dos fabricantes honra a garantia nesta faixa.",
      "Materiais para telhados de inclinação baixa custam mais por metro quadrado devido às exigências adicionais de impermeabilização. Inclua R$ 10,00–30,00 extras por m² para impermeabilização em telhados abaixo de 25%.",
      "A drenagem é a preocupação principal. Água parada (empoçamento) pode ocorrer se a inclinação for muito baixa ou se a estrutura deflectir sob carga. Empoçamento invalida a maioria das garantias de cobertura.",
    ],
    lowSlopeSummary:
      "Telhados de inclinação baixa são econômicos para cobrir grandes áreas mas exigem impermeabilização de qualidade. Sempre use materiais classificados para a inclinação específica.",

    standardHeading: "Inclinações Padrão (25% – 60%)",
    standardIntro:
      "A faixa de 25% a 60% cobre a grande maioria dos telhados residenciais no Brasil. Estas inclinações proporcionam boa drenagem, funcionam com quase todos os materiais de cobertura e são transitáveis para instalação e manutenção.",
    standardItems: [
      "25-30% de inclinação — O mínimo padrão para telhas cerâmicas (colonial, romana, portuguesa) sem proteções especiais. A maioria dos fabricantes de telhas brasileiros (Eternit, Tégula) especifica 30% como mínimo.",
      "35-40% de inclinação — Inclinação popular para casas térreas no Brasil. Proporciona excelente drenagem mantendo a linha do telhado relativamente baixa. Trabalhadores podem caminhar confortavelmente.",
      "45-50% de inclinação — A inclinação mais comum para telhados residenciais brasileiros, especialmente em regiões com chuvas intensas. Bom equilíbrio entre estética, drenagem e espaço de sótão.",
      "55-60% de inclinação — Comum em casas de estilo colonial e tradicional. Criam uma linha de telhado mais proeminente e sótão generoso. Trabalhadores podem precisar de equipamentos de segurança.",
      "Seguro e revenda — Telhados com inclinação padrão são preferidos por seguradoras pois escoam água efetivamente sem exposição excessiva ao vento.",
    ],
    standardSummary:
      "As inclinações padrão são o ponto ideal para construção residencial: compatíveis com todos os materiais comuns, fáceis de trabalhar e econômicas.",

    steepHeading: "Inclinações Íngremes (65% – 100%)",
    steepIntro:
      "Telhados íngremes são encontrados em chalés, casas de estilo europeu, igrejas e edifícios em regiões com chuvas muito intensas. Escoam água rapidamente mas custam mais para construir e manter.",
    steepItems: [
      "65-75% de inclinação — Inclinação comum em chalés e casas de serra. O ângulo acentuado escoa a água rapidamente, reduzindo risco de infiltrações. Requer equipamentos de segurança para instalação.",
      "80-100% de inclinação — Usada para efeito arquitetônico dramático em chalés tipo A-frame e casas de estilo europeu. Um telhado de 100% cria um ângulo perfeito de 45 graus. Difícil de caminhar — requer andaimes ou sistemas de segurança.",
      "Impacto no custo — Telhados íngremes usam significativamente mais material (100% tem 41,4% mais área) e requerem mais mão de obra devido a equipamentos de segurança e instalação mais lenta. Espere pagar 20–50% mais.",
      "Considerações de material — Telhas cerâmicas, ardósia, telhas de concreto e shingle funcionam bem em telhados íngremes. Na verdade, frequentemente duram mais pois a água escorre rapidamente.",
      "Resistência ao vento — Telhados íngremes captam mais vento. Em áreas costeiras do Brasil sujeitas a vendavais, consulte a ABNT NBR 6123 antes de especificar inclinação acima de 60%.",
    ],
    steepSummary:
      "Inclinações íngremes são excelentes para escoar precipitação e proporcionam apelo visual dramático, mas vêm com custo adicional em materiais e mão de obra.",

    costHeading: "Como a Inclinação Afeta o Custo da Cobertura",
    costIntro:
      "A inclinação do telhado impacta diretamente o custo total do projeto de cobertura de três formas: quantidade de material, dificuldade da mão de obra e fator de desperdício.",
    costText1:
      "A quantidade de material aumenta com a inclinação porque um telhado mais íngreme tem mais área de superfície. Use o multiplicador da tabela acima para estimar a área real. Por exemplo, um edifício com 100 m² de projeção e inclinação de 50% tem 100 × 1,118 = 112 m² de superfície real. A 100%, a mesma projeção tem 100 × 1,414 = 141 m² — 29 m² extras de material.",
    costText2:
      "Os custos de mão de obra sobem acentuadamente acima de 60%. Equipes de cobertura precisam de equipamentos de segurança especializados (cintos, andaimes) e a velocidade de instalação cai 25–40%.",
    costText3:
      "O fator de desperdício também aumenta em telhados íngremes e complexos. Vales, espigões e cumeeiras geram mais recortes. Inclua 10–15% de desperdício para inclinações padrão e 15–20% para geometrias íngremes ou complexas.",

    materialHeading: "Inclinação Recomendada por Material de Cobertura",
    materialIntro:
      "Cada material de cobertura tem uma faixa de inclinação mínima e ótima. Usar o material certo para sua inclinação garante drenagem adequada, cobertura de garantia e vida útil máxima.",
    materialItems: [
      "Telhas cerâmicas (colonial, romana, portuguesa) — Mínimo 30% (17°). Faixa ótima 30-60%. O material mais tradicional no Brasil, fabricado por Eternit, Tégula e Santa Gertrudes.",
      "Telhas de concreto — Mínimo 30% (17°). Faixa ótima 30-50%. Material pesado que requer estrutura adequada. Excelente durabilidade em climas quentes.",
      "Telhas shingle asfálticas — Mínimo 17% (10°) com manta integral. Faixa ótima 25-100%. Padrão para construções wood frame no Brasil.",
      "Telha metálica junta alzada — Mínimo 5% (3°). Faixa ótima 10-100%. Excelente para inclinações baixas e íngremes. As juntas elevadas mantêm a água longe das fixações.",
      "Telha metálica trapezoidal — Mínimo 10% (6°). Faixa ótima 15-50%. Mais econômica que junta alzada mas não adequada para inclinações muito baixas.",
      "Manta asfáltica (laje impermeabilizada) — Mínimo 1-3%. Projetada para telhados planos e quase planos. Padrão para lajes de concreto impermeabilizadas no Brasil.",
      "Fibrocimento ondulado (Brasilit, Eternit) — Mínimo 10% (6°). Faixa ótima 15-30%. Material econômico amplamente usado em construção rural e industrial.",
    ],

    climateHeading: "Melhor Inclinação por Clima",
    climateIntro:
      "O clima desempenha papel fundamental na determinação da inclinação ideal. Veja como adequar a inclinação às condições climáticas da sua região no Brasil:",
    climateItems: [
      "Regiões com chuvas intensas (Norte e Sudeste) — Use inclinações de 40-60% para escoamento rápido. Selecione materiais classificados para alta umidade como metálica ou cerâmica. Garanta que calhas e rufos comportem a vazão de pico.",
      "Clima quente e seco (Semiárido do Nordeste) — Use inclinações de 15-30%. Inclinações menores reduzem a área exposta, diminuindo o ganho térmico. Lajes impermeabilizadas ou telha metálica refletiva funcionam bem.",
      "Regiões com ventos fortes (Litoral) — Use inclinações de 25-45%. Telhados de quatro águas com inclinação moderada funcionam melhor em ventos fortes. Evite empenas íngremes que captam vento. Use telhas com fixação reforçada.",
      "Clima subtropical (Sul) — Use inclinações de 35-50% como escolha versátil que lida com chuva, geadas ocasionais e vento. A faixa mais comum na região Sul.",
      "Regiões tropicais úmidas (Amazônia) — Use inclinações de 45-60% para escoamento rápido em chuvas torrenciais. Telhas cerâmicas ou metálicas são preferidas por sua resistência à umidade constante.",
      "Planalto Central — Use inclinações de 30-45%. Períodos secos prolongados seguidos de chuvas intensas exigem boa drenagem sem custos excessivos.",
    ],

    calculatorCtaHeading: "Calcule Seus Materiais de Cobertura",
    calculatorCtaText:
      "Use nossas calculadoras gratuitas para estimar materiais baseado na inclinação, área e material escolhido:",
    calculatorLinks: [
      {
        label: "Calculadora de Inclinação",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Converta entre porcentagem, graus e razão de inclinação.",
      },
      {
        label: "Calculadora de Área do Telhado",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calcule a área real a partir da projeção e inclinação.",
      },
      {
        label: "Calculadora de Caimento",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Determine o fator de inclinação e multiplicador de material.",
      },
      {
        label: "Calculadora de Caibros",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calcule comprimento, quantidade e madeira para caibros.",
      },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Quanto é 30% de inclinação em graus?",
        answer:
          "Uma inclinação de 30% equivale a 16,70 graus. Calculado pela fórmula arctan(30/100) = 16,70°. 30% é a inclinação mínima padrão para telhas cerâmicas no Brasil.",
      },
      {
        question: "Qual a inclinação padrão para telhado residencial no Brasil?",
        answer:
          "A inclinação mais comum para residências brasileiras fica entre 30% e 50%. A inclinação exata depende do estilo arquitetônico, clima regional e material de cobertura.",
      },
      {
        question: "Para que serve a tabela de inclinação?",
        answer:
          "A tabela converte inclinações em porcentagem para graus e multiplicadores de área. Construtores a usam para determinar o material correto para cada inclinação, calcular a área real para pedido de materiais e verificar conformidade com normas e especificações do fabricante.",
      },
      {
        question: "Como medir a inclinação do telhado?",
        answer:
          "De dentro do sótão: coloque um nível de 1 m horizontal contra um caibro, meça 100 cm na horizontal e depois a distância vertical até o caibro nesse ponto. O valor vertical em cm é a inclinação em porcentagem. Use um aplicativo de inclinômetro no celular para medição rápida.",
      },
      {
        question: "Qual inclinação é considerada telhado plano?",
        answer:
          "Qualquer telhado com inclinação abaixo de 10% é geralmente classificado como baixa inclinação ou plano por códigos de obra e fabricantes. Telhados verdadeiramente planos ainda têm leve inclinação (1-3%) para direcionar água para ralos ou calhas.",
      },
      {
        question: "A inclinação do telhado afeta o seguro residencial?",
        answer:
          "Sim. Seguradoras consideram a inclinação ao calcular prêmios. Inclinações padrão (25-60%) tipicamente recebem as melhores taxas. Inclinações muito baixas podem aumentar prêmios pelo risco de infiltração, e inclinações muito altas pelo custo maior de reposição e vulnerabilidade ao vento.",
      },
    ],
  },

  minimumRoofPitch: {
    title: "Inclinação Mínima para Telhas Cerâmicas, Metálicas e Shingle",
    metaDescription:
      "Encontre a inclinação mínima para telhas cerâmicas (30%), metálicas (5% junta alzada), shingle (17% com manta) e mais. Inclui referências a normas e soluções para baixa inclinação.",

    heroTitle: "Inclinação Mínima",
    heroSubtitle: "para Telhas Cerâmicas, Metálicas e Shingle",
    heroDescription:
      "Todo material de cobertura tem um requisito de inclinação mínima definido por normas e fabricantes. Instalar abaixo do mínimo invalida a garantia, viola o código de obras e causa infiltrações. Este guia cobre os mínimos para todos os materiais comuns.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "A inclinação mínima para telhas cerâmicas padrão é 30% (16,7°). Telhas shingle asfálticas podem ser instaladas a partir de 17% (10°) com manta impermeabilizante integral cobrindo todo o deck. Telhas metálicas com junta alzada podem ir até 5% (3°), e sistemas de manta asfáltica funcionam a partir de 1-3%.",

    materialTableHeading: "Inclinação Mínima por Material",
    materialTableSubheading:
      "Esta tabela mostra a inclinação mínima padrão, o mínimo absoluto com provisões especiais e notas importantes para cada material.",
    materialTableColMaterial: "Material de Cobertura",
    materialTableColStandardMin: "Mínimo Padrão",
    materialTableColAbsoluteMin: "Mínimo Absoluto",
    materialTableColNotes: "Observações",
    materialTableRows: [
      {
        material: "Telha Cerâmica (Colonial/Romana)",
        standardMin: "30%",
        absoluteMin: "25%",
        notes: "A 25% requer manta impermeabilizante integral sob as telhas. Garantia do fabricante pode exigir 30%.",
      },
      {
        material: "Telha de Concreto",
        standardMin: "30%",
        absoluteMin: "27%",
        notes: "Fabricantes brasileiros (Tégula, Brasilit) podem especificar mínimos diferentes conforme o modelo.",
      },
      {
        material: "Telha Shingle Asfáltica",
        standardMin: "25%",
        absoluteMin: "17%",
        notes: "A 17-25% requer manta autoaderente cobrindo todo o deck. Fabricantes (IKO, GAF) honram garantia com manta adequada.",
      },
      {
        material: "Telha Metálica Junta Alzada",
        standardMin: "10%",
        absoluteMin: "5%",
        notes: "A 5-10% as juntas devem ser seladas mecanicamente. Recomenda-se vedação hidrostática abaixo de 10%.",
      },
      {
        material: "Telha Metálica Trapezoidal",
        standardMin: "10%",
        absoluteMin: "10%",
        notes: "Parafusos com arruela de vedação são críticos. Não adequada abaixo de 10% devido às penetrações expostas.",
      },
      {
        material: "Fibrocimento Ondulado",
        standardMin: "10%",
        absoluteMin: "7%",
        notes: "Material amplamente usado no Brasil (Eternit, Brasilit). Requer sobreposição adequada em inclinações baixas.",
      },
      {
        material: "Manta Asfáltica (Impermeabilização)",
        standardMin: "1-3%",
        absoluteMin: "1%",
        notes: "Múltiplas camadas de manta aplicadas com maçarico. Padrão para lajes impermeabilizadas no Brasil.",
      },
      {
        material: "Membrana TPO / EPDM / PVC",
        standardMin: "1-3%",
        absoluteMin: "1%",
        notes: "Membranas monocamada com juntas soldadas ou adesivas. Padrão para coberturas planas comerciais.",
      },
    ],

    whyMinHeading: "Por Que a Inclinação Mínima Importa",
    whyMinIntro:
      "A especificação de inclinação mínima não é arbitrária. Existe porque cada material depende da gravidade para mover a água pela superfície antes que ela penetre nas sobreposições e fixações. Veja por que importa:",
    whyMinItems: [
      "Infiltração de água — Abaixo da inclinação mínima, a água se move lentamente demais. Pode subir por capilaridade sob abas de telhas, penetrar ao redor de pregos e infiltrar em sobreposições.",
      "Cobertura de garantia — Todo fabricante especifica inclinação mínima nas instruções de instalação. Instalar abaixo invalida a garantia integralmente.",
      "Conformidade com código de obras — Os códigos de obra referenciam as especificações do fabricante. Um telhado abaixo da inclinação mínima reprova na vistoria.",
      "Prevenção de represamento — Em telhados de inclinação baixa, a água parada pode acumular e forçar entrada sob o material de cobertura, causando danos extensivos.",
      "Implicações no seguro — Apólices de seguro podem excluir cobertura para danos causados por instalação inadequada de cobertura.",
    ],
    whyMinSummary:
      "Instalar material de cobertura na inclinação mínima ou acima não é opcional. Protege sua garantia, satisfaz requisitos normativos e previne danos por água que podem custar milhares de reais para reparar.",

    codeHeading: "Requisitos Normativos",
    codeIntro:
      "As normas brasileiras e referências internacionais estabelecem requisitos de inclinação mínima. Aqui estão as referências principais:",
    codeItems: [
      "ABNT NBR 15575 — Desempenho de edificações habitacionais: estabelece requisitos de estanqueidade à água para coberturas conforme a zona bioclimática.",
      "Diretriz SINAT nº 005 — Para construções wood frame: define requisitos de cobertura incluindo inclinações mínimas para cada tipo de telha.",
      "Fabricantes brasileiros (Eternit, Tégula, Brasilit) — Cada fabricante publica inclinações mínimas em seus catálogos técnicos que devem ser respeitadas para garantia.",
      "ABNT NBR 8039 — Projeto e execução de telhados com telhas cerâmicas tipo francesa: especifica inclinações mínimas para telhas de encaixe.",
      "Normas internacionais (IRC R905) — Referência para materiais importados (shingle, metálica): especificam inclinações mínimas por material.",
      "Códigos de obras municipais podem ter requisitos mais rigorosos. Sempre verifique com a prefeitura antes de finalizar o projeto de cobertura.",
    ],
    codeSummary:
      "As normas são requisitos mínimos, não melhores práticas. Muitos profissionais recomendam inclinações um nível acima do mínimo para margem de segurança contra chuvas torrenciais.",

    belowMinHeading: "O Que Acontece Abaixo da Inclinação Mínima",
    belowMinIntro:
      "Instalar material de cobertura abaixo da inclinação mínima cria uma cascata de problemas que piora com o tempo:",
    belowMinItems: [
      "Garantia do fabricante invalidada — A consequência mais imediata. O fabricante não tem obrigação de substituir material defeituoso se instalado fora das especificações.",
      "Infiltrações crônicas — A água fica no telhado por mais tempo e penetra juntas e fixações. Estas infiltrações podem não aparecer imediatamente mas se desenvolvem em 2–5 anos.",
      "Represamento de água — Telhados de baixa inclinação são altamente suscetíveis a acúmulo de água, que força a entrada sob o material e causa danos extensivos.",
      "Mofo e apodrecimento — Umidade persistente cria condições ideais para mofo e apodrecimento da estrutura de madeira. Remediação de mofo e reparo estrutural pode custar R$ 20.000–R$ 60.000 ou mais.",
      "Reprovação na vistoria — Um telhado que não atende aos requisitos de inclinação mínima reprovará na vistoria. A prefeitura pode exigir remoção e reinstalação, dobrando o custo do projeto.",
      "Vida útil reduzida — Materiais instalados abaixo da inclinação mínima degradam mais rápido. Telhas shingle em inclinação insuficiente podem durar apenas 5–8 anos vs 20–30 anos na inclinação correta.",
    ],
    belowMinSummary:
      "Não há atalhos quando se trata de inclinação mínima. O custo de fazer certo na primeira vez é sempre menor que o custo de reparo, substituição e remediação de danos por água.",

    solutionsHeading: "Soluções para Telhados de Baixa Inclinação",
    solutionsIntro:
      "Se seu telhado tem inclinação abaixo de 25%, você ainda tem várias opções excelentes. Aqui estão as abordagens mais confiáveis:",
    solutionsItems: [
      "Manta impermeabilizante integral — Para inclinações entre 17% e 25%, cubra todo o deck com manta autoaderente antes de instalar telhas shingle. Cria uma barreira impermeável secundária. Custo adicional: R$ 15,00–30,00 por m².",
      "Telha metálica com junta alzada — Painéis com juntas alzadas funcionam a partir de 5%. As juntas elevadas mantêm os canais de água longe da superfície plana. Frequentemente a melhor opção para telhados residenciais de baixa inclinação.",
      "Manta asfáltica (impermeabilização) — Para inclinações abaixo de 10%, a manta asfáltica aplicada com maçarico é o padrão no Brasil. Múltiplas camadas criam superfície impermeável. Padrão para lajes de concreto.",
      "Membrana TPO/EPDM — Membranas monocamada soldadas a quente ou com adesivo criam superfície impermeável contínua. Comuns em coberturas comerciais e funcionam bem em anexos residenciais de baixa inclinação.",
      "Modificação estrutural — Em alguns casos, é viável aumentar a inclinação adicionando novos caibros ou tesouras sobre a estrutura existente. Consulte um engenheiro estrutural antes de modificar qualquer estrutura de telhado.",
      "Calhas e drenagem adequadas — Em telhados de baixa inclinação, drenagem perimetral com calhas superdimensionadas e drenos intermediários previnem acúmulo de água em pontos críticos.",
    ],
    solutionsSummary:
      "Telhados de baixa inclinação não são problema desde que você use os materiais corretos. Telha metálica com junta alzada e sistemas de membrana proporcionam décadas de serviço confiável em inclinações que destruiriam telhas convencionais.",

    calculatorCtaHeading: "Calcule Seus Materiais de Cobertura",
    calculatorCtaText:
      "Use nossas calculadoras gratuitas para determinar os materiais e quantidades corretos para a inclinação do seu telhado:",
    calculatorLinks: [
      {
        label: "Calculadora de Inclinação",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Converta entre porcentagem, graus e razão de inclinação.",
      },
      {
        label: "Calculadora de Área do Telhado",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calcule a área real a partir da projeção e inclinação.",
      },
      {
        label: "Calculadora de Caimento",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Determine fator de inclinação e multiplicador de material.",
      },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Posso colocar telhas cerâmicas em inclinação de 25%?",
        answer:
          "Sim, mas com precauções especiais. A 25%, é necessário manta impermeabilizante integral sob as telhas e sobreposições aumentadas. A maioria dos fabricantes brasileiros recomenda mínimo de 30%. Consulte o catálogo técnico do fabricante da sua telha específica.",
      },
      {
        question: "Qual a inclinação mínima para telha metálica?",
        answer:
          "Para telha metálica com junta alzada, a inclinação mínima é 5% (3°). Para telha trapezoidal com parafusos expostos, o mínimo é 10% (6°). Abaixo de 10%, as juntas devem ser seladas mecanicamente para prevenir infiltração.",
      },
      {
        question: "O que acontece se a inclinação for baixa demais para telhas cerâmicas?",
        answer:
          "Se telhas cerâmicas forem instaladas abaixo da inclinação mínima, a água se move lentamente demais para limpar as sobreposições. Por capilaridade, a água sobe sob as telhas e infiltra na estrutura, causando apodrecimento, mofo e danos extensivos.",
      },
      {
        question: "Inclinação de 20% é suficiente para shingle asfáltico?",
        answer:
          "Sim, 20% está entre o mínimo absoluto (17% com manta integral) e o mínimo padrão (25%). É necessário manta impermeabilizante autoaderente cobrindo todo o deck. A maioria dos fabricantes honra a garantia a 20% com esta proteção.",
      },
      {
        question: "Qual a inclinação mínima para fibrocimento?",
        answer:
          "As telhas de fibrocimento ondulado (Brasilit, Eternit) têm inclinação mínima de 10% (6°). Em inclinações baixas, aumente a sobreposição longitudinal e lateral conforme especificação do fabricante.",
      },
      {
        question: "Posso alterar a inclinação de um telhado existente?",
        answer:
          "Sim, é possível alterar a inclinação adicionando novos caibros ou tesouras sobre a estrutura atual. É uma modificação estrutural significativa que requer cálculo de engenheiro, aprovação na prefeitura e mão de obra especializada. O custo varia de R$ 20.000 a R$ 60.000 dependendo do tamanho do telhado.",
      },
    ],
  },

  readyMixVsBagged: {
    title: "Concreto Usinado vs Sacos: Qual Usar?",
    metaDescription:
      "Concreto usinado vs sacos comparados: custo por m³, resistência, praticidade e melhores usos. Saiba quando pedir caminhão betoneira vs misturar sacos manualmente.",

    heroTitle: "Concreto Usinado vs Sacos",
    heroSubtitle: "Qual Você Deve Usar?",
    heroDescription:
      "Uma comparação completa de concreto usinado (entregue por caminhão betoneira) e concreto em sacos (Votomassa, argamassas preparadas) para ajudá-lo a escolher a opção certa para o tamanho, orçamento e prazo do seu projeto.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "Use concreto em sacos para projetos pequenos abaixo de 0,5 m³ — postes de cerca, reparos e trabalhos que podem ser misturados manualmente. Use concreto usinado (por caminhão) para qualquer volume acima de 1 m³ — calçadas, lajes, fundações e concretagens grandes onde consistência e velocidade importam. O custo por m³ é similar, mas taxas de entrega e pedidos mínimos tornam o usinado impraticável para trabalhos pequenos.",

    whatIsReadyMixHeading: "O Que É Concreto Usinado?",
    whatIsReadyMixText1:
      "O concreto usinado é dosado em central, misturado em caminhão betoneira e entregue no seu canteiro pronto para uso. Chega totalmente misturado na resistência especificada (tipicamente fck 20–25 MPa para trabalho residencial), com a relação água-cimento correta já ajustada pela central. Você simplesmente direciona a calha ou bomba para onde o concreto precisa ir.",
    whatIsReadyMixText2:
      "Um caminhão betoneira padrão transporta 6–8 m³ e geralmente consegue descarregar toda a carga em 30–90 minutos. A maioria dos fornecedores (Engemix, Polimix, Concretex) exige pedido mínimo de 1 m³, com taxas de meia carga para pedidos abaixo de 3 m³. O caminhão precisa ter acesso dentro de 30 metros do local da concretagem, ou será necessária uma bomba de concreto (R$ 300,00–R$ 600,00+ por hora).",

    whatIsBaggedHeading: "O Que É Concreto em Sacos?",
    whatIsBaggedText1:
      "O concreto em sacos é uma mistura seca pré-dosada de cimento Portland, areia e brita vendida em sacos de 20 kg, 40 kg e 50 kg em lojas de materiais de construção. As marcas mais comuns no Brasil são Votomassa (Votorantim), InterCement e Holcim. Você adiciona água, mistura manualmente ou com betoneira e aplica nas formas. Um saco de 50 kg rende aproximadamente 0,025 m³ de concreto acabado, significando que você precisa de cerca de 40 sacos para fazer 1 m³.",
    whatIsBaggedText2:
      "O concreto em sacos tipicamente atinge fck 20–25 MPa aos 28 dias, comparável ao usinado residencial padrão. A conveniência é que você compra exatamente o que precisa em qualquer loja de materiais, mistura no seu ritmo e não precisa de acesso para caminhão pesado. A desvantagem é que misturar é trabalhoso — 40 sacos para um metro cúbico leva várias horas de trabalho pesado.",

    comparisonHeading: "Usinado vs Sacos: Comparação Lado a Lado",
    comparisonSubheading:
      "Como concreto usinado e concreto em sacos se comparam nos fatores mais importantes.",
    comparisonCol1: "Fator",
    comparisonCol2: "Usinado (Caminhão)",
    comparisonCol3: "Sacos (Votomassa, etc.)",
    comparisonRows: [
      {
        category: "Custo por Metro Cúbico",
        readyMix: "R$ 350–550 por m³ (material). Taxas de entrega de R$ 100–200 podem ser aplicadas.",
        bagged: "R$ 600–1.000 por m³ (40 sacos a R$ 15–25 cada de 50 kg).",
      },
      {
        category: "Pedido Mínimo",
        readyMix: "1 m³ mínimo. Taxas de meia carga (R$ 50–100/m³) para pedidos abaixo de 3 m³.",
        bagged: "Sem mínimo. Compre quantos sacos precisar.",
      },
      {
        category: "Resistência (MPa)",
        readyMix: "Personalizável: fck 15–40+ MPa. Residencial padrão é fck 20–25 MPa.",
        bagged: "Padrão fck 20–25 MPa. Produtos de alta resistência disponíveis.",
      },
      {
        category: "Praticidade",
        readyMix: "Chega pronto para usar. Sem mistura. Rápido para grandes volumes.",
        bagged: "Deve ser misturado no local. Trabalhoso para grandes quantidades.",
      },
      {
        category: "Tempo de Mistura",
        readyMix: "Zero — chega pré-misturado. Tempo de concretagem depende de acesso e volume.",
        bagged: "3–5 minutos por saco manualmente. 1–2 minutos com betoneira.",
      },
      {
        category: "Melhor Para",
        readyMix: "Calçadas, lajes >5 m², fundações, sapatas, concretagens grandes.",
        bagged: "Postes de cerca, reparos, bases pequenas, locais de difícil acesso.",
      },
      {
        category: "Validade",
        readyMix: "Deve ser aplicado em 60–90 minutos da dosagem. Sem armazenamento.",
        bagged: "3–6 meses se mantidos secos e lacrados. Compre antecipadamente.",
      },
      {
        category: "Controle de Qualidade",
        readyMix: "Dosagem controlada pela central. Consistente lote a lote. Testado por normas ABNT.",
        bagged: "Depende da sua técnica de mistura e proporção de água. Mais margem para erro.",
      },
    ],

    costHeading: "Detalhamento de Custos: Usinado vs Sacos",
    costIntro:
      "O custo por metro cúbico é surpreendentemente diferente entre as duas opções. A real diferença de custo vem de taxas de entrega, mão de obra e escala do projeto.",
    costText1:
      "Concreto em sacos: um saco de 50 kg de concreto preparado custa R$ 15,00–25,00 na maioria das lojas de materiais (preços 2026-2025). Cada saco rende aproximadamente 0,025 m³. Um metro cúbico exige cerca de 40 sacos. A R$ 20,00 por saco, isso é R$ 800,00 por metro cúbico em material — significativamente mais caro que usinado. Considerando o tempo para misturar (4–6 horas por m³ manualmente), o custo total é ainda mais alto para grandes volumes.",
    costText2:
      "Concreto usinado: o preço base para fck 20 MPa padrão varia de R$ 350,00 a R$ 450,00 por metro cúbico, dependendo da região e fornecedor. A maioria adiciona taxa de entrega (R$ 100,00–200,00) e pode cobrar taxa de meia carga (R$ 50,00–100,00 por m³) para pedidos abaixo de 3 m³. Para uma concretagem de 4 m³ de laje, espere pagar R$ 1.600,00–R$ 2.200,00 em material mais R$ 100,00–R$ 300,00 em taxas.",
    costText3:
      "Resumo: para projetos abaixo de 0,3 m³ (10–12 sacos), o concreto em sacos é quase sempre mais barato e prático. Para projetos acima de 1 m³, o usinado economiza horas de trabalho e tipicamente custa menos por m³. O ponto de equilíbrio é geralmente ao redor de 0,5–0,75 m³.",

    whenReadyMixHeading: "Quando Escolher Concreto Usinado",
    whenReadyMixIntro:
      "O concreto usinado é a escolha clara para projetos maiores onde volume, velocidade e consistência importam:",
    whenReadyMixItems: [
      "Projetos acima de 1 m³ — Misturar mais de 40 sacos manualmente é exaustivo, lento e aumenta o risco de juntas frias. O caminhão entrega tudo de uma vez.",
      "Calçadas, lajes e pisos de garagem — Uma garagem típica de 6x6 m requer ~4,3 m³. Seriam 172 sacos. Um caminhão betoneira concreta isso em menos de uma hora.",
      "Sapatas e muros de fundação — Concreto estrutural para fundações deve ser concretado continuamente quando possível. O usinado proporciona volume e consistência.",
      "Concretagens com prazo — Se você alugou formas, contratou acabadores ou tem janela de tempo estreita, o usinado elimina horas de mistura.",
      "Projetos com dosagem específica — Centrais podem personalizar a mistura com fibras, aceleradores, retardadores e resistências customizadas.",
      "Quando há bom acesso para o caminhão — Se o caminhão pode encostar a até 30 metros do local com caminho limpo, o usinado é a opção mais eficiente.",
    ],
    whenReadyMixSummary:
      "Regra geral: se seu projeto precisa de mais de 1 m³, ligue para uma central de concreto. A economia de mão de obra por si só justifica a taxa de entrega.",

    whenBaggedHeading: "Quando Escolher Concreto em Sacos",
    whenBaggedIntro:
      "O concreto em sacos é excelente para projetos pequenos e rápidos onde pedir um caminhão seria exagero:",
    whenBaggedItems: [
      "Postes de cerca e caixa de correio — Cada buraco de poste precisa de 1–2 sacos de 50 kg. Você pode instalar postes um de cada vez no seu ritmo.",
      "Reparos pequenos — Remendo de calçada, preenchimento de buraco, reparo de degrau. Podem precisar de apenas 2–10 sacos.",
      "Projetos abaixo de 0,5 m³ — Bases para ar condicionado, lixeiras, banheiras. Com 20 sacos ou menos, a mistura é gerenciável.",
      "Locais de difícil acesso — Projetos no fundo do quintal, atrás de muros ou em áreas rurais onde caminhão não chega. Sacos podem ser carregados manualmente.",
      "Projetos de fim de semana — Se quer trabalhar no seu ritmo sem a pressão de um caminhão esperando, sacos permitem que você tome seu tempo.",
      "Quando já tem os sacos — Se sobrou de projeto anterior ou conseguiu bom preço em palete, use o que tem. Verifique se os sacos ainda estão bons (sem grumos).",
    ],
    whenBaggedSummary:
      "Regra geral: se seu projeto precisa de menos de 15–20 sacos (até 0,5 m³), concreto em sacos é mais simples, mais barato e não requer agendamento.",

    calculatorCtaHeading: "Calcule Suas Necessidades de Concreto",
    calculatorCtaText:
      "Use nossas calculadoras gratuitas para descobrir exatamente quantos metros cúbicos ou sacos você precisa:",
    calculatorLinks: [
      {
        label: "Calculadora de Concreto",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calcule m³ e sacos para lajes, sapatas, pilares e formatos personalizados.",
      },
      {
        label: "Calculadora de Chumbadores",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Determine espaçamento e quantidade de chumbadores para sua fundação.",
      },
      {
        label: "Calculadora de Baldrame",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Estime madeira de baldrame para o topo da fundação.",
      },
      {
        label: "Calculadora de Manta de Vedação",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calcule manta de vedação entre fundação e estrutura.",
      },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Quantos sacos de concreto fazem 1 metro cúbico?",
        answer:
          "Você precisa de aproximadamente 40 sacos de 50 kg ou 80 sacos de 25 kg para fazer 1 metro cúbico. Um saco de 50 kg rende cerca de 0,025 m³. Por isso projetos acima de 1 m³ são melhor atendidos por concreto usinado.",
      },
      {
        question: "O concreto usinado é mais forte que o de sacos?",
        answer:
          "Não necessariamente. Concreto em sacos padrão atinge fck 20–25 MPa aos 28 dias, comparável ao usinado residencial. A vantagem do usinado é a dosagem profissional com proporção água-cimento precisa, o que torna a qualidade mais consistente. Com sacos, adicionar água demais é um erro comum que reduz a resistência.",
      },
      {
        question: "Posso concretar usinado eu mesmo (faça você mesmo)?",
        answer:
          "Sim, muitos proprietários pedem usinado para projetos DIY. O fornecedor entrega o caminhão e você direciona a concretagem nas formas preparadas. Precisará de ajudantes (2–3 pessoas mínimo) para sarrafear, alisar e dar acabamento antes que endureça.",
      },
      {
        question: "Qual o pedido mínimo para concreto usinado?",
        answer:
          "A maioria dos fornecedores tem pedido mínimo de 1 m³. Muitos cobram taxa de meia carga para pedidos abaixo de 3 m³, tipicamente R$ 50,00–100,00 por m³ abaixo do mínimo. Sempre pergunte sobre a tabela de taxas antes de pedir.",
      },
      {
        question: "Quanto tempo o concreto em sacos leva para endurecer?",
        answer:
          "O concreto padrão em sacos endurece o suficiente para caminhar em 24–48 horas, mas não atinge resistência total (fck 20 MPa) por 28 dias. Formulações de pega rápida endurecem em 20–40 minutos. Durante a cura, mantenha o concreto úmido nos primeiros 3–7 dias.",
      },
      {
        question: "Posso misturar marcas diferentes de concreto em sacos?",
        answer:
          "Sim, você pode misturar Votomassa, sacos de cimento com areia e brita, e outras misturas padrão. Todos usam os mesmos ingredientes básicos. No entanto, não misture concreto normal com argamassa, graute ou produtos especiais, pois têm formulações diferentes.",
      },
    ],
  },

  concreteCostGuide: {
    title: "Quanto Custa o Concreto em 2026? Guia Completo de Preços em R$",
    metaDescription:
      "Grátis: guia completo de preços do concreto em 2026 — valores em R$ por m³ para lajes, sapatas e calçadas. Inclui custo de mão de obra e dicas de economia.",

    heroTitle: "Quanto Custa o Concreto?",
    heroSubtitle: "Guia de Preços 2025",
    heroDescription:
      "Um detalhamento completo de preços de concreto para cada tipo de projeto residencial. Cobre usinado, concreto em sacos, custos de mão de obra e os fatores que afetam o que você vai pagar.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "O concreto usinado custa R$ 350–550 por metro cúbico entregue em 2025, com a maioria dos proprietários pagando R$ 380–480 por m³ para concreto residencial padrão fck 20–25 MPa. O custo total instalado (incluindo mão de obra, formas e acabamento) varia de R$ 140–280 por metro quadrado para trabalhos planos como calçadas, pátios e garagens. Concreto em sacos (Votomassa) custa R$ 15–25 por saco de 50 kg, o que equivale a R$ 600–1.000 por m³ em material.",

    costByProjectHeading: "Custo do Concreto por Tipo de Projeto",
    costByProjectIntro:
      "O que você pagará depende muito do tipo e tamanho do projeto. Aqui estão custos típicos 2025 para projetos residenciais comuns, incluindo material e instalação profissional:",
    costByProjectColProject: "Projeto",
    costByProjectColTypical: "Custo Típico",
    costByProjectColNotes: "Observações",
    costByProjectRows: [
      { project: "Calçada residencial (15 m de comprimento)", typical: "R$ 3.000–6.000", notes: "1,5+ m³. Acabamento desempenado. Estampado ou colorido adiciona 30–50%." },
      { project: "Pátio (4x5 m)", typical: "R$ 3.000–6.000", notes: "2+ m³. Acabamento vassoura. Opções decorativas custam mais." },
      { project: "Garagem (6x6 m)", typical: "R$ 5.000–10.000", notes: "4+ m³. 12–15 cm de espessura. Com tela soldada." },
      { project: "Sapatas (casa 150 m²)", typical: "R$ 5.000–12.000", notes: "4–8 m³ conforme projeto. Armação incluída." },
      { project: "Radier (100 m²)", typical: "R$ 15.000–30.000", notes: "10–15 m³. Inclui forma, armação e impermeabilização." },
      { project: "Degraus (5 degraus, 1 m de largura)", typical: "R$ 1.500–3.500", notes: "0,3–0,8 m³. Mão de obra intensiva de forma e acabamento." },
      { project: "Postes de cerca (20 postes)", typical: "R$ 300–600 (DIY)", notes: "1–2 sacos por poste. Sem necessidade de caminhão." },
    ],

    baggedCostHeading: "Custos do Concreto em Sacos",
    baggedCostIntro:
      "O concreto em sacos é vendido em lojas de materiais de construção. Os preços variam por tamanho do saco, marca e região:",
    baggedCostText1:
      "Tamanhos e preços padrão (2025): sacos de 20 kg custam R$ 8,00–12,00 (rendem ~0,010 m³). Sacos de 40 kg custam R$ 13,00–18,00 (rendem ~0,020 m³). Sacos de 50 kg custam R$ 15,00–25,00 (rendem ~0,025 m³). O saco de 50 kg oferece melhor custo por volume, mas o trabalho físico é significativo.",
    baggedCostText2:
      "Custo por m³ com sacos: usando sacos de 50 kg a R$ 20,00 cada, 1 m³ custa aproximadamente R$ 800,00 em material (40 sacos). Estes preços são muito maiores que usinado (R$ 350–550/m³), mas sacos não têm taxas de entrega, pedidos mínimos e tempo de espera.",
    baggedCostText3:
      "Concreto especial em sacos custa mais: concreto de pega rápida R$ 25,00–35,00 por saco de 50 kg. Graute R$ 20,00–30,00. Argamassa estrutural R$ 18,00–28,00. Para a maioria das lajes, calçadas e sapatas, concreto padrão fck 20 é tudo que você precisa.",

    readyMixPricingHeading: "Preços do Concreto Usinado",
    readyMixPricingIntro:
      "O usinado é pedido por metro cúbico e entregue por caminhão betoneira. Veja o que esperar ao contatar um fornecedor:",
    readyMixPricingText1:
      "Preço base: concreto fck 20 MPa padrão custa R$ 350–450 por m³ na maioria dos mercados. Fck 25 MPa custa R$ 380–500 por m³. Fck 30 MPa custa R$ 420–550 por m³. Preços variam por região — capitais com múltiplos fornecedores tendem a ser mais baratos que cidades do interior.",
    readyMixPricingText2:
      "Taxas adicionais: taxa de entrega R$ 100–200 por viagem. Taxa de meia carga R$ 50–100 por m³ para pedidos abaixo de 3 m³. Taxa de espera R$ 2–5 por minuto se a concretagem demorar além do tempo alocado. Entrega no sábado com acréscimo de R$ 100–300.",
    readyMixPricingText3:
      "Aditivos e upgrades: fibra de polipropileno adiciona R$ 10–20 por m³. Acelerador de pega R$ 15–30 por m³. Retardador R$ 10–20 por m³. Bomba de concreto (para locais de difícil acesso) R$ 300–600 por hora. Pigmento colorido R$ 20–50 por m³.",

    factorsHeading: "Fatores Que Afetam o Custo do Concreto",
    factorsIntro:
      "O preço que você paga depende de vários fatores além do volume. Entendê-los ajuda a orçar com mais precisão:",
    factorsItems: [
      "Localização — Preços variam significativamente por região. O Sudeste tende a ter mais opções e preços competitivos. Áreas rurais pagam mais pela distância de entrega. Sempre solicite orçamento de pelo menos 2–3 fornecedores.",
      "Quantidade pedida — Pedir mais concreto reduz o custo por m³. Taxas de meia carga para pedidos pequenos (abaixo de 3 m³) podem adicionar R$ 50–100 por m³. Se está perto do mínimo, considere adicionar um projeto extra para atingi-lo.",
      "Resistência (fck) — Maior resistência custa mais. Fck 20 é suficiente para calçadas e pátios. Fck 25 é recomendado para garagens e pisos. Fck 30 para cargas pesadas. Cada nível adiciona R$ 20–50 por m³.",
      "Aditivos — Fibras, aceleradores, retardadores e pigmentos adicionam R$ 10–50 por m³ cada. Em climas quentes, retardador pode ser essencial.",
      "Época do ano — Preços tendem a ser mais altos no período seco (abril-outubro) quando a demanda de construção é máxima. O período chuvoso pode ter preços melhores mas requer precauções extras.",
      "Distância de entrega — A maioria das centrais inclui entrega dentro de 20–30 km no preço base. Além disso, espere acréscimos de R$ 5–15 por km adicional.",
    ],

    laborHeading: "Custos de Mão de Obra: Faça Você Mesmo vs Contratando",
    laborIntro:
      "O custo do concreto em si frequentemente é menos da metade do custo total do projeto. Mão de obra, forma, acabamento e preparação do terreno compõem o resto:",
    laborText1:
      "Custos DIY: seus principais custos são concreto (R$ 350–550/m³ usinado ou R$ 600–1.000/m³ em sacos), forma de madeira (R$ 100–300), tela soldada (R$ 50–150), e ferramentas. Um piso de pátio de 3x4 m (1,2 m³) pode custar R$ 600–1.000 em materiais como projeto DIY, vs R$ 2.000–4.000 com mão de obra profissional.",
    laborText2:
      "Custos com empreiteiro: trabalho profissional de concreto tipicamente custa R$ 140–280 por m² instalado para trabalho plano (laje, calçada, piso). Inclui preparação do terreno, brita, forma, tela, concreto, concretagem, acabamento e limpeza. Acabamentos decorativos (estampado, colorido) adicionam R$ 50–150 por m².",
    laborText3:
      "Quando contratar um profissional: considere contratar para qualquer trabalho estrutural (fundações, sapatas portantes), qualquer concretagem acima de 3 m³, acabamentos decorativos, superfícies com caimento ou drenagem crítica, e projetos que requerem aprovação e vistoria da prefeitura.",

    savingTipsHeading: "Dicas para Economizar",
    savingTipsIntro:
      "Existem várias formas de reduzir custos de concreto sem comprometer a qualidade:",
    savingTipsItems: [
      "Solicite múltiplos orçamentos — Preços podem variar 15–30% entre fornecedores na mesma área. Ligue para pelo menos 3 e peça a tabela completa incluindo entregas, meia carga e taxas extras.",
      "Peça a quantidade certa — Pedir demais desperdiça dinheiro; pedir de menos significa uma segunda viagem cara. Use nossa calculadora para estimativa precisa, depois adicione 5–10% para desperdício.",
      "Evite taxas de meia carga — Se seu projeto precisa de 2,5 m³ e o limite de meia carga é 3 m³, peça 3 e use o extra para outro projeto pequeno. O meio metro extra custa menos que a taxa.",
      "Agende fora do pico — Se seu cronograma é flexível, agende concretagens para terça a quinta-feira fora da temporada de construção. Entregas de final de semana e alta temporada frequentemente têm acréscimo.",
      "Faça sua própria preparação — Mesmo contratando para a concretagem, você pode economizar R$ 1.000–R$ 3.000 fazendo escavação, base de brita e formas por conta própria.",
      "Compare sacos vs usinado para trabalhos pequenos — Para projetos abaixo de 1 m³, faça as contas nas duas opções. Considere o valor do seu tempo: misturar 30+ sacos leva 3–4 horas de trabalho pesado.",
    ],

    calculatorCtaHeading: "Calcule Seus Custos de Concreto",
    calculatorCtaText:
      "Use nossas calculadoras gratuitas para estimar o volume exato de concreto que seu projeto precisa, depois multiplique pelo preço local por m³ para um orçamento preciso:",
    calculatorLinks: [
      {
        label: "Calculadora de Concreto",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calcule m³ e sacos para lajes, sapatas, pilares e formatos personalizados.",
      },
      {
        label: "Calculadora de Chumbadores",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Determine espaçamento e quantidade de chumbadores para sua fundação.",
      },
      {
        label: "Calculadora de Baldrame",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Estime madeira de baldrame para o topo da fundação.",
      },
      {
        label: "Calculadora de Manta de Vedação",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calcule manta de vedação entre fundação e estrutura.",
      },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Quanto custa 1 metro cúbico de concreto em 2025?",
        answer: "Um metro cúbico de concreto usinado custa R$ 350–550 pelo material, dependendo da região e resistência. Adicione taxa de entrega (R$ 100–200) e possível taxa de meia carga (R$ 50–100/m³ para pedidos pequenos). Custo total entregue para pedido típico de 3–4 m³ é geralmente R$ 380–500 por m³.",
      },
      {
        question: "Quanto custa concretar uma laje de 3x4 metros?",
        answer: "Uma laje de 3x4 m (10 cm de espessura) requer ~1,2 m³ de concreto. Custo DIY de material: R$ 500–800 (concreto, forma, tela, brita). Instalação profissional: R$ 1.500–3.500 dependendo da preparação, acabamento e mercado local.",
      },
      {
        question: "É mais barato misturar seu próprio concreto ou pedir usinado?",
        answer: "Para projetos pequenos (abaixo de 0,5 m³), misturar sacos é mais barato em material. Para projetos acima de 1 m³, o usinado é quase sempre mais barato por m³ e economiza horas de trabalho. O ponto de equilíbrio é tipicamente 0,5–0,75 m³.",
      },
      {
        question: "Quanto custa uma calçada de concreto?",
        answer: "Uma calçada residencial de 15 metros de comprimento (1,2 m de largura, 10 cm de espessura) custa R$ 3.000–6.000 instalada em 2025. Inclui ~2 m³ de concreto, base de brita, forma, tela e acabamento vassoura.",
      },
      {
        question: "Por que o preço do concreto varia tanto por região?",
        answer: "Os preços dependem do custo do cimento Portland (proximidade de fábricas de cimento), custos de agregados locais, preços de combustível para caminhões, taxas de mão de obra e concorrência entre fornecedores. Estados com fabricação ativa de cimento (SP, MG, PR) tendem a ter preços menores.",
      },
      {
        question: "Quanto concreto eu preciso?",
        answer: "O concreto é medido em metros cúbicos. Para lajes retangulares: multiplique comprimento (m) × largura (m) × espessura (m) para obter m³. Uma laje de 3×4 m com 10 cm de espessura = 3 × 4 × 0,10 = 1,2 m³. Sempre adicione 5–10% para desperdício. Use nossa calculadora gratuita para resultados exatos.",
      },
    ],
  },

  howMuchPaint: {
    title: "Quanta Tinta Eu Preciso? Guia Completo",
    metaDescription:
      "Quanta tinta eu preciso? Guia completo cobrindo medição de paredes, rendimento por tipo de tinta, número de demãos, preparação de superfície, tinta para teto e acabamentos, e detalhamento de custos.",

    heroTitle: "Quanta Tinta Eu Preciso?",
    heroSubtitle: "Guia Completo",
    heroDescription:
      "Tudo o que você precisa saber para calcular a quantidade certa de tinta para paredes, tetos e acabamentos — evite comprar demais ou ficar sem no meio do projeto.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "Um litro de tinta acrílica interior cobre aproximadamente 10 a 12 metros quadrados com uma demão. Para um quarto padrão (3x3 m, pé direito de 2,70 m), você precisa de cerca de 6 litros para duas demãos nas paredes. Adicione 3-4 litros para o teto e 1 litro para molduras e portas. Sempre arredonde para cima — tinta sobressalente é essencial para retoques futuros.",

    measuringWallsHeading: "Como Medir Suas Paredes",
    measuringWallsIntro:
      "Medições precisas são a base de qualquer estimativa de tinta. Veja como medir como um pintor profissional:",
    measuringWallsItems: [
      "Meça o comprimento de cada parede em metros e multiplique pelo pé direito. Uma parede de 4 metros com pé direito de 2,70 m = 10,8 m². Repita para todas as paredes e some.",
      "Para cálculo rápido do cômodo inteiro, meça o perímetro (soma dos comprimentos das paredes) e multiplique pelo pé direito. Um cômodo de 3x4 m tem 14 m de perímetro × 2,70 m = 37,8 m² de área de paredes.",
      "Desconte aberturas: uma porta padrão é aproximadamente 1,6 m² (0,80×2,10 m) e uma janela padrão é aproximadamente 1,5 m² (1,20×1,20 m). Para um cômodo com uma porta e duas janelas, desconte cerca de 4,6 m².",
      "Para cômodos com pé direito duplo ou teto inclinado, meça a altura no ponto mais alto e mais baixo, faça a média e multiplique pelo comprimento da parede.",
      "Inclua interiores de armários embutidos se pretende pintá-los — um armário de 0,60×1,50 m adiciona cerca de 5 m² de área de parede.",
      "Registre todas as medidas antes de ir à loja de tintas. Tire fotos dos cômodos para referência na escolha de cores.",
    ],
    measuringWallsSummary:
      "Uma casa típica de 100 m² tem 250 a 350 metros quadrados de área pintável de paredes, dependendo do pé direito, número de cômodos e quantidade de janelas/portas.",

    coverageRatesHeading: "Rendimento por Tipo de Tinta",
    coverageRatesIntro:
      "Nem todas as tintas cobrem a mesma área. O rendimento varia conforme o acabamento, a qualidade e a superfície que você está pintando.",
    coverageRatesText1:
      "Acabamentos foscos e aveludados têm os maiores rendimentos, de 10 a 12 m² por litro, porque têm menor teor de resina e se espalham facilmente. São ideais para tetos e cômodos de baixo tráfego mas mostram marcas e são difíceis de limpar. Acabamento acetinado cobre 8 a 10 m² por litro e é a escolha mais popular para salas, quartos e corredores — tem brilho sutil e é fácil de limpar.",
    coverageRatesText2:
      "Acabamento semibrilho cobre 8 a 10 m² por litro e é a escolha padrão para cozinhas, banheiros e áreas de alto tráfego pela resistência à umidade e lavabilidade. Acabamento alto brilho cobre 7 a 9 m² por litro e é usado para destaques, armários e móveis onde máxima durabilidade e reflexividade são desejadas.",
    coverageRatesText3:
      "Tintas premium de marcas como Suvinil, Coral e Sherwin-Williams tipicamente atingem o rendimento mais alto devido à maior concentração de pigmentos. Tintas econômicas frequentemente ficam no rendimento mais baixo e podem exigir demão extra. Superfícies texturizadas, porosas ou não pintadas reduzem o rendimento em 20 a 30% — sempre aplique selador antes nessas superfícies.",

    numberOfCoatsHeading: "Quantas Demãos de Tinta Preciso?",
    numberOfCoatsIntro:
      "O número de demãos afeta diretamente quanta tinta você precisa comprar. Veja quando aplicar uma, duas ou três demãos:",
    numberOfCoatsItems: [
      "Uma demão é suficiente apenas para retoques usando exatamente a mesma tinta e tom em superfície previamente pintada em bom estado.",
      "Duas demãos é a recomendação padrão para virtualmente todos os projetos de pintura. A primeira demão sela e prepara, a segunda proporciona a cor final e durabilidade.",
      "Três demãos são necessárias para mudanças dramáticas de cor — especialmente de escuro para claro. A primeira demão de selador tonalizado neutraliza a cor antiga, seguida de duas demãos de acabamento.",
      "Drywall novo sempre requer uma demão de selador (fundo preparador) mais duas de acabamento (três demãos no total). Pular o selador causa flashing — diferenças visíveis de brilho.",
      "Superfícies texturizadas como grafiato e textura rústica podem precisar de demão extra porque os relevos são difíceis de cobrir uniformemente.",
    ],
    numberOfCoatsSummary:
      "Para orçamento, sempre calcule a quantidade de tinta baseada em duas demãos. Se precisar de selador, calcule separadamente com o rendimento do selador.",

    surfacePrepHeading: "Preparação da Superfície",
    surfacePrepIntro:
      "A preparação adequada da superfície é o fator mais importante para uma pintura duradoura. Nenhuma tinta cara compensa preparação ruim.",
    surfacePrepItems: [
      "Limpe todas as superfícies antes de pintar. Poeira, gordura e teias de aranha impedem a aderência. Limpe paredes com pano úmido ou use solução de água e detergente neutro para paredes de cozinha engorduradas.",
      "Preencha buracos de pregos, amassados e fissuras com massa corrida. Aplique com espátula, deixe secar e lixe com lixa 150. Para buracos maiores que 1 cm, use massa acrílica ou gesso em duas camadas finas.",
      "Lixe superfícies brilhantes levemente com lixa 150 para criar aderência para a nova tinta. Especialmente importante ao pintar sobre semibrilho ou alto brilho.",
      "Remova ou lixe tinta solta, descascada ou esfarelando até uma superfície firme. Suavize as bordas da tinta restante com lixa para uma transição suave.",
      "Aplique fita crepe em molduras, rodapés, linhas de teto e áreas que deseja proteger. Pressione firme com espátula ou cartão de crédito para evitar que a tinta sangre por baixo.",
      "Proteja pisos e móveis com lonas. Lonas de tecido aderem melhor ao piso e absorvem respingos. Mova móveis para o centro do cômodo e cubra com plástico.",
    ],

    ceilingPaintHeading: "Calculando Tinta para Teto",
    ceilingPaintIntro:
      "Tetos requerem cálculo separado pois usam formulação diferente das paredes.",
    ceilingPaintText1:
      "A tinta para teto é formulada com maior teor de sólidos para melhor resistência a respingos ao rolar acima da cabeça, e seca com acabamento perfeitamente fosco para minimizar imperfeições. O rendimento padrão é de 10 a 12 m² por litro. Para calcular, multiplique o comprimento pela largura do cômodo — um cômodo de 3×4 m tem 12 m² de teto.",
    ceilingPaintText2:
      "A maioria dos tetos precisa de apenas uma demão se estão sendo pintados com a mesma cor branca. Se está mudando a cor ou pintando sobre mancha, aplique selador primeiro e duas demãos. Para tetos com textura, reduza o rendimento para 7–9 m² por litro. O teto completo de uma casa de 100 m² requer 10–12 litros de tinta de teto.",

    trimPaintHeading: "Calculando Tinta para Molduras e Portas",
    trimPaintIntro:
      "Molduras, rodapés, portas e esquadrias são tipicamente pintados com acabamento semibrilho ou acetinado pela durabilidade e facilidade de limpeza.",
    trimPaintText1:
      "Rodapés: meça o total de metros lineares de rodapé no cômodo. Rodapés padrão têm 7 a 15 cm de altura. Um cômodo com 14 metros lineares de rodapé tem aproximadamente 2,1 m² de superfície pintável. Um litro de tinta para molduras cobre cerca de 8–10 m² — suficiente para o rodapé de um cômodo médio.",
    trimPaintText2:
      "Portas: uma porta interna padrão (ambos os lados) tem aproximadamente 3,5 m² de superfície pintável. Molduras de janela têm em média 1 m² por janela. Para uma casa inteira, planeje 3–5 litros de tinta de moldura para todos os rodapés, batentes, molduras de janela e portas. Pinte portas com rolo de espuma para o acabamento mais liso.",

    costBreakdownHeading: "Detalhamento de Custos de Tinta",
    costBreakdownIntro:
      "Entender o custo completo de um projeto de pintura ajuda a orçar com precisão.",
    costBreakdownText1:
      "A tinta de parede é o maior componente de custo. Orce R$ 15,00 a R$ 80,00 por litro dependendo da qualidade. Para um quarto típico precisando de 6 litros em 2 demãos, a tinta custa R$ 90,00 a R$ 480,00. Para uma casa de 100 m² (25–30 litros para paredes), a tinta custa R$ 375,00 a R$ 2.400,00. Comprar baldes de 18 litros economiza 15–20% por litro.",
    costBreakdownText2:
      "O selador custa R$ 15,00 a R$ 40,00 por litro. Construção nova (drywall sem pintura) requer ~1 litro para cada 8–10 m². Para repinturas sobre cores similares, selador geralmente é desnecessário.",
    costBreakdownText3:
      "Insumos para pintura completa de uma casa custam R$ 200,00–R$ 400,00: rolo com cabo (R$ 15,00–30,00), refis de lã (R$ 10,00–20,00 cada), trincha angular 2\" (R$ 10,00–30,00), fita crepe (R$ 8,00–20,00 por rolo), lona plástica (R$ 10,00–25,00), bandeja para pintura (R$ 5,00–15,00), lixa e massa (R$ 10,00–20,00).",

    calculatorCtaHeading: "Calcule Suas Necessidades de Tinta",
    calculatorCtaText:
      "Use nossas calculadoras gratuitas para uma estimativa instantânea e precisa para seu projeto.",
    calculatorLinks: [
      {
        label: "Calculadora de Rendimento",
        href: "/calculators/finishing/paint-coverage-calculator",
        description: "Quantos litros para sua área — com ajustes de demão e rendimento.",
      },
      {
        label: "Calculadora de Custo de Tinta",
        href: "/calculators/finishing/paint-cost-calculator",
        description: "Custo total por nível de qualidade — inclui estimativa de insumos.",
      },
      {
        label: "Calculadora de Selador",
        href: "/calculators/finishing/primer-calculator",
        description: "Quanto selador para seu tipo de superfície — drywall novo, madeira ou repintura.",
      },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Quanta tinta preciso para um quarto de 3x3 m?",
        answer: "Um quarto de 3x3 m com pé direito de 2,70 m tem ~32 m² de paredes. Descontando ~4,5 m² para porta e janela, sobram ~28 m². A 10 m² por litro com 2 demãos, precisa de ~5,6 litros — compre 2 latas de 3,6 litros. Adicione 3 litros de tinta de teto para os 9 m² de forro.",
      },
      {
        question: "Quantos metros quadrados cobre um litro de tinta?",
        answer: "Um litro de tinta acrílica interior cobre 10 a 12 m² em superfícies lisas previamente pintadas com uma demão. Acabamento fosco cobre mais (~12 m²), acetinado cobre menos (~9 m²). Superfícies porosas como drywall novo reduzem para 7–9 m² por litro.",
      },
      {
        question: "Devo comprar latas de 3,6 litros ou balde de 18 litros?",
        answer: "Baldes de 18 litros são 15–20% mais baratos por litro e garantem consistência de cor. Compre baldes quando precisar de 8 ou mais litros da mesma cor. Para paredes de destaque ou cômodos pequenos, latas são mais práticas.",
      },
      {
        question: "Quanto custa pintar um quarto por conta própria?",
        answer: "Um projeto DIY de pintura de quarto custa R$ 150,00–R$ 500,00 em materiais: 6 litros de tinta (R$ 90,00–R$ 480,00), insumos (R$ 50,00–R$ 100,00) e selador opcional (R$ 15,00–R$ 40,00/litro). Um pintor profissional cobra R$ 500,00–R$ 1.200,00 pelo mesmo quarto.",
      },
      {
        question: "Preciso de selador antes de pintar?",
        answer: "Selador é necessário em drywall novo, madeira sem tratamento, áreas reparadas e mudanças dramáticas de cor. Em superfícies previamente pintadas em bom estado com cor similar, pode dispensar — especialmente com tintas autosselantes premium.",
      },
      {
        question: "Qual a melhor tinta para paredes internas?",
        answer: "Para a maioria das paredes, acabamento acetinado ou semibrilho de qualidade média a premium oferece o melhor equilíbrio entre aparência, durabilidade e lavabilidade. Marcas conceituadas incluem Suvinil (Toque de Seda, Acrílico Premium), Coral (Decora), e Sherwin-Williams (Metalatex). Use fosco apenas para tetos.",
      },
    ],
  },

  lumberPrices: {
    title: "Guia de Preços de Madeira: Quanto Custa?",
    metaDescription:
      "Preços atuais de madeira por espécie, grau e seção. Cobre madeira dimensional, madeira engenheirada, compensado, tendências de preço, onde comprar e descontos por volume.",
    heroTitle: "Guia de Preços de Madeira",
    heroSubtitle: "Quanto Custa a Madeira?",
    heroDescription:
      "Um guia completo de preços de madeira no Brasil — de montantes para wood frame a tábuas de madeira nobre — para que você possa orçar com precisão seu próximo projeto.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "Um montante padrão de pinus tratado 38x89x2440 mm custa R$ 15,00 a R$ 25,00 no varejo. Madeira de pinus tratado autoclavado custa R$ 1.500–3.000 por m³. Madeiras nobres brasileiras (ipê, cumaru, jatobá) variam de R$ 3.000 a R$ 10.000+ por m³. Compensado custa R$ 40,00 a R$ 180,00 por chapa dependendo da espessura e qualidade. Preços flutuam com condições de mercado — sempre solicite orçamento atualizado.",

    speciesPricingHeading: "Preços por Espécie",
    speciesPricingIntro:
      "A espécie é o maior fator no preço da madeira. Veja quanto custam as espécies comuns no mercado atual:",
    speciesPricingText1:
      "Pinus tratado autoclavado — é a espécie mais acessível e a base da construção wood frame no Brasil. Um montante 38x89x2440 mm custa R$ 15–25, peças maiores como 38x235x3660 mm custam R$ 40–80. O pinus é a espécie padrão por sua trabalhabilidade e custo. O tratamento autoclavado com CCB (conforme ABNT NBR 16143) protege contra cupins e apodrecimento.",
    speciesPricingText2:
      "Eucalipto tratado — alternativa ao pinus, 20-30% mais barato, mas mais denso e difícil de trabalhar com ferramentas manuais. Muito usado em estruturas rurais, cercas e galpões. O custo é R$ 1.200–2.200 por m³ tratado.\n\nMadeiras nobres brasileiras cobrem uma ampla faixa de preços. Peroba-rosa (R$ 2.500–4.000/m³), ipê (R$ 5.000–10.000/m³), cumaru (R$ 4.000–7.000/m³) e jatobá (R$ 3.000–5.000/m³). Estas madeiras são naturalmente resistentes e muito valorizadas para decks, móveis e estruturas expostas.",
    speciesPricingText3:
      "Madeiras importadas e exóticas ficam no topo da escala. Carvalho europeu (R$ 40–80/m linear para tábuas beneficiadas), nogueira americana (R$ 60–120/m linear), cedro canadense (R$ 30–60/m linear). Para marcenaria fina e móveis sob medida, estas madeiras são adquiridas em madeireiras especializadas e importadores.",

    dimensionalVsEngineeredHeading: "Madeira Dimensional vs Engenheirada",
    dimensionalVsEngineeredIntro:
      "A construção moderna usa cada vez mais produtos de madeira engenheirada junto com madeira serrada. Entender as diferenças de custo ajuda a escolher o produto certo:",
    dimensionalVsEngineeredItems: [
      "Madeira dimensional (38x89, 38x140, 38x235 mm etc.) é serrada diretamente de toras e é a escolha padrão para wood frame. É a opção mais barata por metro linear para vãos abaixo de 4 metros.",
      "Vigas LVL (laminated veneer lumber) custam R$ 50–100 por metro linear para uma viga de 45x240 mm — 3 a 5 vezes o custo de uma viga dimensional comparável. São usadas para vergas, cumeeiras e vãos longos.",
      "Vigas I (TJI, BCI) custam R$ 30–70 por metro linear conforme a altura. Substituem vigas de 38x235 mm e 38x286 mm para vãos acima de 4 metros, oferecendo peso menor e furos pré-cortados para instalações.",
      "Vigas de madeira laminada colada (MLC) — fabricadas no Brasil por Battistella e LP — custam R$ 80–200 por metro linear. Usadas para vigas expostas, cumeeiras estruturais e vãos arquitetônicos.",
    ],
    dimensionalVsEngineeredSummary:
      "Para a maioria da estrutura residencial, madeira dimensional continua sendo a escolha mais econômica. Produtos engenheirados fazem sentido quando você precisa de vãos maiores ou cargas mais pesadas.",

    gradeHeading: "Entendendo Graus de Madeira e Impacto no Preço",
    gradeIntro:
      "O grau da madeira afeta diretamente o preço — graus mais altos custam mais porque têm menos defeitos:",
    gradeItems: [
      "Madeira estrutural padrão — grau mais econômico, adequado para montantes, guias e vigas em vãos padrão. É o que a maioria das madeireiras estoca como padrão para wood frame.",
      "Madeira select (selecionada) — menos nós e defeitos, maior resistência. Usada quando os cálculos estruturais exigem valores de resistência mais altos. Custa 20-30% mais.",
      "Madeira aparelhada (beneficiada) — lixada ou aplainada para acabamento visível. Usada em marcenaria e elementos expostos. Custa 50-100% mais que a madeira bruta.",
      "Madeira nobre FAS (First and Seconds) — grau superior de madeira de lei, com grandes seções livres de defeitos. O grau mais caro, tipicamente 30-50% mais que grau #1 comum.",
    ],
    gradeSummary:
      "Para wood frame, madeira estrutural padrão é a escolha adequada e mais econômica. Especifique graus superiores apenas quando os cálculos ou a aparência exigirem.",

    priceTrendsHeading: "Tendências e Previsão de Preços de Madeira",
    priceTrendsIntro:
      "Os preços de madeira no Brasil acompanham tendências nacionais e internacionais:",
    priceTrendsText1:
      "O mercado de madeira tratada para wood frame no Brasil tem crescido consistentemente com a expansão do sistema construtivo. Os preços aumentaram 30-50% entre 2020 e 2026 devido ao aumento da demanda, custos de tratamento e logística. O pinus tratado que custava R$ 1.000/m³ em 2019 agora custa R$ 1.500–2.500/m³.",
    priceTrendsText2:
      "Padrões sazonais são previsíveis: preços de madeira tendem a subir no período seco (abril-outubro) quando a construção é mais intensa, e estabilizar no período chuvoso (novembro-março). Comprar kits de madeira no período de menor demanda pode gerar economia de 10-15%.",
    priceTrendsText3:
      "Fatores de longo prazo incluem: expansão das áreas de plantio de pinus e eucalipto, investimentos em plantas de tratamento, regulamentações ambientais (manejo florestal sustentável), disponibilidade de mão de obra especializada e o crescimento do wood frame como sistema construtivo no Brasil.",

    whereToBuyHeading: "Onde Comprar Madeira: Varejo vs Atacado",
    whereToBuyIntro:
      "Onde você compra afeta significativamente o custo total. Aqui estão os canais, do mais caro ao mais barato:",
    whereToBuyItems: [
      "Home centers (Leroy Merlin, Telhanorte, C&C): mais conveniente para peças avulsas e projetos pequenos. Preços são 20-40% acima de madeireiras. Melhor para: proprietários, reparos pequenos e projetos abaixo de R$ 1.000 em madeira.",
      "Madeireiras locais: melhor controle de qualidade, maior variedade de espécies e preços por volume. Espere 10-25% de economia vs home centers. Melhor para: empreiteiros, projetos DIY grandes.",
      "Fornecedores especializados em wood frame (Kürten, Tecverde, Battistella): os melhores preços para kits completos de madeira tratada. Podem oferecer 20-40% de economia sobre preços avulsos. Melhor para: casas inteiras, projetos wood frame.",
      "Serrarias e madeireiras rurais: madeira bruta a preços muito baixos (R$ 800–1.500/m³ para pinus). Requer secagem e beneficiamento. Melhor para: construtores com equipamento de beneficiamento.",
    ],
    whereToBuySummary:
      "Para projetos acima de R$ 3.000 em madeira, sempre solicite orçamento de pelo menos uma madeireira especializada além do home center. A economia em um kit de estrutura pode facilmente chegar a R$ 5.000–R$ 15.000.",

    bulkDiscountsHeading: "Compra por Volume e Descontos",
    bulkDiscountsIntro:
      "Comprar madeira em volume desbloqueia economias significativas. Veja como funciona em cada nível:",
    bulkDiscountsItems: [
      "Pacotes (fardos): madeira vendida em fardos (100-200 peças do mesmo tamanho) custa 10-20% menos que peças avulsas. Ideal para projetos que usam grande quantidade de uma seção.",
      "Kits de estrutura: fornecedores wood frame cotam toda sua lista de materiais como pacote. A economia tipicamente é de 15-25% sobre a soma dos preços individuais. Envie suas plantas e solicite pelo menos dois orçamentos.",
      "Contas de empreiteiro: construtores que compram regularmente podem estabelecer contas com madeireiras para desconto adicional de 5-15%. A maioria requer CNPJ e histórico de compras.",
      "Paletes de compensado/OSB: comprar um palete inteiro (50-75 chapas) economiza 10-15% sobre preço por chapa. Um palete de OSB 11,1 mm a R$ 65/chapa vs R$ 80/chapa avulsa economiza R$ 750-1.125.",
    ],
    bulkDiscountsSummary:
      "A maior oportunidade de economia é solicitar orçamento de kit completo de estrutura em uma madeireira especializada. Para uma casa wood frame de 100 m², a diferença entre preço avulso de varejo e kit de madeireira pode ser R$ 10.000–R$ 25.000.",

    calculatorCtaHeading: "Calcule Seus Custos de Madeira",
    calculatorCtaText:
      "Use nossas calculadoras gratuitas para estimar o custo exato do seu projeto — de montantes a compensado.",
    calculatorLinks: [
      { label: "Calculadora de Custo de Madeira", href: "/calculators/hardware/lumber-cost-calculator", description: "Estime custo total por seção e quantidade." },
      { label: "Calculadora de Pés Tábua", href: "/calculators/hardware/board-feet-calculator", description: "Converta dimensões para pés tábua com custos." },
      { label: "Calculadora de Compensado", href: "/calculators/hardware/plywood-calculator", description: "Calcule chapas necessárias e custo por espessura." },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      { question: "Quanto custa um montante de pinus tratado?", answer: "Em 2026-2025, um montante padrão de pinus tratado 38x89x2440 mm custa R$ 15–25 em madeireiras e home centers. Preços variam por região, com maiores custos no Norte e Nordeste. Eucalipto tratado na mesma seção custa R$ 12–20." },
      { question: "Por que a madeira está mais cara?", answer: "Os preços subiram 30-50% desde 2020 devido a aumento de demanda por wood frame, custos de tratamento preservativo, logística e inflação geral. O mercado se estabilizou em 2026 mas em patamar mais alto que o pré-pandemia." },
      { question: "Qual a melhor época para comprar madeira?", answer: "O período chuvoso (novembro-março) tipicamente oferece preços menores pois a construção desacelera. Pode economizar 10-15% vs período seco. Se tem armazenamento coberto, comprar o kit de madeira no período chuvoso para obra na seca gera boa economia." },
      { question: "Madeira tratada vale o custo extra?", answer: "Sim, para qualquer madeira em contato com o solo, a menos de 30 cm do solo, ou exposta à umidade persistente. Madeira tratada custa 30-50% mais que sem tratamento mas dura 20-40 anos vs 3-5 anos em contato com o solo. É obrigatória por norma para baldrame e estrutura próxima ao solo." },
      { question: "Quanta madeira preciso para estruturar uma casa?", answer: "Uma casa wood frame típica de 100 m² requer 8–12 m³ de madeira para a estrutura completa (paredes, piso e telhado), equivalente a 300-400 montantes, 30-50 chapas de revestimento, mais vigas, caibros/tesouras, guias e vergas. O custo do kit de madeira é R$ 30.000–R$ 60.000." },
      { question: "Pinus ou eucalipto para wood frame?", answer: "Pinus tratado é o padrão do mercado por trabalhabilidade, estabilidade e compatibilidade com sistemas de construção. Eucalipto é mais barato mas mais denso e difícil de trabalhar. Para wood frame, prefira pinus. Para cercas, decks e estruturas simples, eucalipto pode ser boa alternativa econômica." },
    ],
  },

  compositeVsWood: {
    title: "Deck WPC vs Madeira: Qual É Melhor?",
    metaDescription:
      "Deck composite (WPC) vs madeira comparados: custo inicial, valor a longo prazo, durabilidade, manutenção, aparência e vida útil. Guia completo para escolher o material certo para seu projeto e clima.",

    heroTitle: "Deck WPC vs Madeira",
    heroSubtitle: "Qual É Melhor?",
    heroDescription:
      "Uma comparação completa de materiais de deck composite (WPC) e madeira para ajudá-lo a escolher a opção certa para seu orçamento, clima e estilo de vida.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "Escolha deck WPC (composite) se quer manutenção mínima, vida útil de 25-50 anos e aparência consistente ao longo do tempo. Escolha madeira (pinus tratado, cedro ou ipê) se orçamento inicial é prioridade, você aprecia a aparência natural e está disposto a fazer manutenção periódica. WPC custa 2-4x mais inicialmente mas economiza ao longo de 20+ anos quando se consideram custos de tingimento, selagem e substituição da madeira.",

    whatIsCompositeHeading: "O Que É Deck WPC (Composite)?",
    whatIsCompositeText1:
      "O deck WPC (wood plastic composite) é um material industrializado fabricado com fibras de madeira (serragem, farinha de madeira) e polímeros plásticos (polietileno ou polipropileno). As fibras de madeira proporcionam rigidez e aparência natural, enquanto o plástico entrega resistência à umidade e durabilidade. A maioria dos produtos modernos tem uma camada protetora de polímero (capa) nos quatro lados que resiste manchas, desbotamento, mofo e riscos.",
    whatIsCompositeText2:
      "No Brasil, as marcas de deck composite incluem Madeplast, Ecowood, Tech Deck e WPC Brasil, além de marcas internacionais como Trex e TimberTech. Preços variam de R$ 50,00 a R$ 150,00 por metro linear, com a maioria dos proprietários escolhendo produtos na faixa de R$ 80–120/ml. Réguas composite estão disponíveis em comprimentos de 2,20 m a 5,80 m e larguras de 14 cm e 20 cm.",

    whatIsWoodHeading: "O Que É Deck de Madeira?",
    whatIsWoodText1:
      "O deck de madeira usa tábuas de madeira natural como superfície do terraço. No Brasil, as três espécies mais comuns são: pinus tratado autoclavado (a mais acessível e amplamente disponível), cedro rosa (naturalmente resistente à decomposição) e madeiras nobres tropicais como ipê, cumaru e itaúba (as mais duráveis mas mais caras).",
    whatIsWoodText2:
      "Tábuas de pinus tratado custam R$ 15,00–40,00 por metro linear, sendo a opção mais econômica. Cedro rosa vai de R$ 40,00 a R$ 80,00/ml. Madeiras tropicais como ipê custam R$ 60,00–120,00/ml. Tábuas estão disponíveis em comprimentos de 2,44 a 4,88 m. A tábua padrão é de 2,5×14 cm, que proporciona boa rigidez e conforto.",

    comparisonHeading: "WPC vs Madeira: Comparação Lado a Lado",
    comparisonSubheading: "Como os dois materiais se comparam em cada categoria importante.",
    comparisonCol1: "Categoria",
    comparisonCol2: "Deck WPC (Composite)",
    comparisonCol3: "Deck de Madeira",
    comparisonRows: [
      { category: "Custo Inicial (por m²)", composite: "R$ 200–600 instalado", wood: "R$ 80–350 instalado" },
      { category: "Vida Útil", composite: "25–50 anos", wood: "10–40 anos (varia por espécie)" },
      { category: "Manutenção Anual", composite: "Lavagem com água e sabão", wood: "Tingir/selar a cada 1–2 anos" },
      { category: "Custo de Manutenção (20 anos)", composite: "R$ 0–500 total", wood: "R$ 3.000–8.000 total" },
      { category: "Aparência", composite: "Consistente, aspecto industrializado", wood: "Grão natural, envelhece para cinza" },
      { category: "Aquecimento ao Sol", composite: "Esquenta muito sob o sol", wood: "Permanece mais fresco" },
      { category: "Resistência a Riscos", composite: "Boa (produtos com capa)", wood: "Varia por espécie" },
      { category: "Resistência ao Desbotamento", composite: "Excelente (garantia 25 anos)", wood: "Acinzenta sem manutenção" },
      { category: "Impacto Ambiental", composite: "Conteúdo reciclado, longa vida", wood: "Renovável, vida mais curta" },
      { category: "Dificuldade DIY", composite: "Moderada (fixações especiais)", wood: "Fácil (parafusos padrão)" },
    ],

    costHeading: "Comparação de Custos: O Cenário Completo",
    costIntro: "A diferença de preço inicial entre WPC e madeira é significativa, mas o custo total ao longo da vida útil conta uma história diferente.",
    costText1:
      "Para um deck típico de 4×5 m (20 m²), tábuas de pinus tratado custam R$ 1.000–2.000 apenas pelo material. O mesmo deck em WPC de linha média custa R$ 3.000–6.000 em réguas. Incluindo estrutura, fixações e mão de obra, o custo instalado é R$ 5.000–10.000 para madeira e R$ 10.000–18.000 para WPC.",
    costText2:
      "No entanto, decks de madeira requerem manutenção anual. Tingir e selar um deck de 20 m² custa R$ 300–800 por ano em materiais. Em 20 anos, são R$ 6.000–16.000 em custos de manutenção. Um deck de pinus também tipicamente precisa de substituição de tábuas após 10–15 anos (R$ 2.000–4.000). Decks composite precisam apenas de lavagem ocasional.",
    costText3:
      "Em um período de 25 anos, o custo total de um deck de madeira de 20 m² é R$ 13.000–30.000 (construção + manutenção + substituição parcial). O mesmo deck composite custa R$ 10.000–18.000 sem manutenção. A partir de 12–15 anos, o composite se torna a opção mais econômica.",

    whenCompositeHeading: "Quando Escolher Deck WPC",
    whenCompositeIntro: "O deck composite é a melhor escolha nestas situações:",
    whenCompositeItems: [
      "Você quer um deck de manutenção zero que nunca precisa de tingimento, selagem ou pintura.",
      "Você mora em clima úmido ou costeiro onde madeira apodrece rapidamente.",
      "Planeja ficar na residência por 10+ anos e quer valor a longo prazo.",
      "Prefere aparência consistente e uniforme que não muda com o tempo.",
      "Quer garantia de fabricante de 25 a 50 anos para tranquilidade.",
      "Está construindo deck elevado ou de difícil acesso onde manutenção seria complicada.",
    ],
    whenCompositeSummary:
      "WPC é a melhor escolha geral para proprietários que priorizam praticidade, durabilidade e economia a longo prazo sobre o menor custo inicial possível.",

    whenWoodHeading: "Quando Escolher Deck de Madeira",
    whenWoodIntro: "O deck de madeira faz mais sentido nestas situações:",
    whenWoodItems: [
      "Seu orçamento inicial é limitado e precisa minimizar o custo de construção.",
      "Você ama a aparência, textura e cheiro natural da madeira e está disposto a fazer manutenção.",
      "Mora em clima muito quente onde composite ficaria desconfortavelmente quente descalço.",
      "Está construindo estrutura temporária ou de curto prazo (5 a 10 anos).",
      "Gosta de projetos de manutenção DIY e vê o tingimento anual como atividade prazerosa.",
      "Quer um deck de madeira nobre (ipê, cumaru) que oferece beleza natural e durabilidade de 25+ anos.",
    ],
    whenWoodSummary:
      "Madeira é ideal para quem busca economia, amantes de madeira natural e projetos onde a beleza e o caráter da madeira real superam o compromisso de manutenção.",

    calculatorCtaHeading: "Calcule Seus Materiais de Deck",
    calculatorCtaText: "Use nossas calculadoras gratuitas para estimar tábuas, sapatas, guarda-corpo e escada para seu projeto.",
    calculatorLinks: [
      { label: "Calculadora de Tábuas", href: "/calculators/outdoor/deck-board-calculator", description: "Estime tábuas para qualquer tamanho de deck." },
      { label: "Calculadora de Fundação", href: "/calculators/outdoor/deck-footing-calculator", description: "Calcule sapatas e distribuição de postes." },
      { label: "Calculadora de Guarda-Corpo", href: "/calculators/outdoor/deck-railing-calculator", description: "Obtenha quantidades de postes, balaústres e corrimão." },
      { label: "Calculadora de Escada", href: "/calculators/outdoor/deck-stair-calculator", description: "Encontre número de degraus, longarinas e tábuas." },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "O deck WPC vale o custo extra?",
        answer:
          "Sim, para a maioria dos proprietários. Embora custe 2-4x mais inicialmente, elimina R$ 6.000–16.000 em custos de manutenção ao longo de 20 anos e dura 25-50 anos vs 10-15 para pinus tratado. O ponto de equilíbrio é tipicamente 12-15 anos. Se planeja ficar na residência a longo prazo, WPC é quase sempre a melhor decisão financeira.",
      },
      {
        question: "O deck composite esquenta demais para andar descalço?",
        answer:
          "Deck composite absorve mais calor que madeira, especialmente cores escuras. Em dias de 35°C sob sol direto, composite escuro pode chegar a 60-75°C, desconfortável para pés descalços. Cores mais claras ficam 10-15°C mais frescas. Estratégias de mitigação: escolha cores claras, adicione cobertura, use tapetes externos nas áreas de pés descalços.",
      },
      {
        question: "Quanto dura o deck composite?",
        answer:
          "Deck composite de qualidade de fabricantes reconhecidos dura 25 a 50 anos com manutenção mínima. A maioria oferece garantias de 25 anos estruturais e 25-50 anos contra desbotamento e manchas. Composites modernos com capa resolveram os problemas de mofo e desbotamento dos primeiros produtos.",
      },
      {
        question: "Pode-se pintar ou tingir deck composite?",
        answer:
          "Deck composite com capa não deve ser pintado pois a capa de polímero impede a aderência. Tinta descascará em 1-2 temporadas. Para produtos sem capa ou antigos, pode-se pintar com tinta exterior após limpeza completa e aplicação de primer de aderência. Consulte o fabricante para produtos aprovados.",
      },
      {
        question: "Qual é mais ecológico: composite ou madeira?",
        answer:
          "Ambos têm compensações ambientais. Composite usa materiais reciclados e sua longa vida útil significa menos substituições. Porém não é biodegradável. Madeira é recurso renovável e biodegradável, mas tratada quimicamente e com vida mais curta. Madeira de manejo sustentável (certificação FSC) tem menor impacto ambiental, enquanto composite vence em longevidade e conteúdo reciclado.",
      },
      {
        question: "Posso misturar composite e madeira no mesmo deck?",
        answer:
          "Sim, muitos construtores usam estrutura de madeira tratada (postes, vigas, vigamentos) com réguas e guarda-corpo de composite na superfície. Esta é na verdade a abordagem padrão — réguas composite são projetadas como superfície de acabamento, não como elementos estruturais. A estrutura de madeira fornece suporte a custo menor.",
      },
    ],
  },

  gravelCost: {
    title: "Quanto Custa a Brita? Guia de Preços 2026",
    metaDescription:
      "A brita custa R$60–R$180 por tonelada, R$80–R$250 por metro cúbico em 2026. Guia completo: brita graduada, pedrisco, rachão, saibro, seixo de rio. Entradas, pátios, caminhos, drenagem, paisagismo, frete e cálculo de quantidade.",

    heroTitle: "Quanto Custa a Brita?",
    heroSubtitle: "Guia de Preços 2026",
    heroDescription:
      "Panorama completo dos preços de brita por tipo, projeto e região no Brasil. Cobre brita graduada, pedrisco, rachão, saibro e seixo de rio com custos de frete, pedidos mínimos e dicas para economizar.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "A brita custa R$60 a R$180 por tonelada ou R$80 a R$250 por metro cúbico em 2026, dependendo do tipo e da região. Brita graduada e rachão são os mais baratos a R$60–R$120 por tonelada. Pedrisco custa R$80–R$150/ton. Materiais decorativos como seixo de rio custam R$150–R$500/ton. O frete adiciona R$150–R$500 por viagem para distâncias até 30 km, e a maioria dos fornecedores exige pedido mínimo de 5 a 10 toneladas.",

    gravelTypesHeading: "Tipos de Brita e Preços",
    gravelTypesIntro:
      "Nem toda brita é igual. Cada tipo tem peso, compactação e preço diferentes. Veja os tipos mais comuns e seus preços 2026 no Brasil:",
    gravelTypesColType: "Tipo de Brita",
    gravelTypesColCost: "Custo por Tonelada",
    gravelTypesColBestFor: "Melhor Para",
    gravelTypesRows: [
      { type: "Brita 1 (19–25 mm)", cost: "R$70 – R$140", bestFor: "Entradas, drenagem, sub-base. Arestas angulares que se travam." },
      { type: "Pedrisco (4–10 mm)", cost: "R$80 – R$150", bestFor: "Caminhos, pátios, canteiros. Fino e decorativo." },
      { type: "Rachão (100–250 mm)", cost: "R$50 – R$100", bestFor: "Aterro, sub-base pesada, estabilização de terreno." },
      { type: "Saibro", cost: "R$40 – R$80", bestFor: "Caminhos, base para calçadas. Compacta bem, baixo custo." },
      { type: "Seixo de Rio (30–80 mm)", cost: "R$150 – R$500", bestFor: "Paisagismo, fontes, decoração. Não compacta." },
      { type: "Brita Branca / Mármore", cost: "R$200 – R$600", bestFor: "Decoração, bordas, áreas de destaque. Preço premium." },
    ],

    costByProjectHeading: "Custo de Brita por Tipo de Projeto",
    costByProjectIntro:
      "O que você pagará depende do tamanho do projeto, profundidade e tipo. Custos típicos 2026 para projetos residenciais comuns:",
    costByProjectColProject: "Projeto",
    costByProjectColTypical: "Custo Típico",
    costByProjectColNotes: "Notas",
    costByProjectRows: [
      { project: "Entrada de Veículos (4×15 m)", typical: "R$1.500 – R$5.000", notes: "10–15 toneladas de brita a 15 cm. Instalação profissional extra." },
      { project: "Pátio (4×4 m)", typical: "R$500 – R$1.500", notes: "2–3 toneladas de pedrisco a 8–10 cm. Contenção à parte." },
      { project: "Caminho (1×10 m)", typical: "R$200 – R$600", notes: "1–2 toneladas a 8 cm. Pedrisco ou saibro." },
      { project: "Dreno Francês (15 m)", typical: "R$400 – R$1.200", notes: "3–5 toneladas de brita 1. Manta geotêxtil separada." },
      { project: "Canteiro (3×6 m)", typical: "R$500 – R$2.000", notes: "2–4 toneladas de pedra decorativa a 8 cm." },
      { project: "Base para Depósito (3×4 m)", typical: "R$400 – R$1.200", notes: "2–4 toneladas a 10–15 cm. Brita com compactação." },
      { project: "Estacionamento (4×6 m)", typical: "R$800 – R$2.500", notes: "5–7 toneladas a 15 cm. Brita graduada recomendada." },
    ],

    deliveryCostsHeading: "Custos de Frete e Pedidos Mínimos",
    deliveryCostsIntro:
      "O frete é parte significativa do custo, especialmente em pedidos pequenos. Entender taxas e mínimos ajuda no planejamento.",
    deliveryCostsText1:
      "A maioria das pedreiras e lojas de material cobra R$150 a R$500 por viagem para distâncias até 30 km. Acima de 30 km, espere R$5 a R$10 por km adicional. Um caminhão basculante padrão carrega 10 a 14 m³ de brita. Muitos fornecedores oferecem meias cargas, mas o frete é o mesmo independentemente da quantidade.",
    deliveryCostsText2:
      "Pedidos mínimos variam mas geralmente ficam entre 5 e 10 toneladas para entrega. Alguns oferecem 1 a 2 toneladas com taxa extra (R$50–R$150). Para quantidades muito pequenas (menos de 1 tonelada), buscar você mesmo com caminhonete é a opção mais econômica — a maioria das pedreiras permite carregamento no local.",
    deliveryCostsText3:
      "Para economizar no frete: combine pedidos com vizinhos, compre na baixa temporada (outono/inverno) ou busque você mesmo. Uma caminhonete pode carregar 0,5 m³ (700 kg) por viagem. Alugar uma caçamba basculante (R$200–R$400/dia) permite transportar 2 a 3 m³.",

    howToCalculateHeading: "Como Calcular a Quantidade Necessária",
    howToCalculateIntro:
      "Calcular a quantidade certa de brita evita entregas extras caras ou sobras. Siga estes passos:",
    howToCalculateItems: [
      "Meça a área: Multiplique comprimento por largura em metros para obter m². Para formas irregulares, divida em retângulos.",
      "Determine a espessura: Padrão: 5–8 cm para caminhos e canteiros, 10 cm para pátios, 15–20 cm para entradas. Converta cm em metros dividindo por 100.",
      "Calcule metros cúbicos: Comprimento × largura × espessura (tudo em metros) = m³.",
      "Converta em toneladas: Multiplique m³ pelo fator de peso — 1,8 para brita, 1,7 para pedrisco, 1,5 para saibro, 2,0 para brita graduada.",
      "Adicione 10% de desperdício: Multiplique por 1,1 para compactação, derramamento e terreno irregular.",
      "Exemplo: Entrada de 4 × 15 m a 15 cm = 4 × 15 × 0,15 = 9,0 m³ × 1,8 = 16,2 toneladas. Com 10%: peça 17,8 toneladas.",
    ],
    howToCalculateSummary:
      "Dica: Use nossa Calculadora de Brita gratuita. Insira suas dimensões e obtenha m³, tonelagem e custos instantaneamente.",

    savingTipsHeading: "Como Economizar na Brita",
    savingTipsIntro:
      "A brita já é um dos materiais de pavimentação mais baratos, mas estas dicas ajudam a economizar ainda mais:",
    savingTipsItems: [
      "Compre em grande quantidade: O preço por tonelada cai significativamente em pedidos grandes. Acima de 15 toneladas, descontos de 10–20% são comuns.",
      "Escolha material local: Brita de pedreiras próximas custa bem menos. O frete é o segundo maior fator de custo.",
      "Peça na baixa temporada: Outono e inverno são os meses mais calmos. Muitos fornecedores oferecem 10–15% de desconto.",
      "Busque você mesmo: Com caminhonete, elimina o frete de R$150–R$500. Para projetos pequenos, economiza 20–30% do total.",
      "Use saibro em vez de pedra decorativa: Saibro custa R$40–R$80/ton vs R$150–R$500 para seixo. Para entradas e áreas utilitárias, é mais barato e funcional.",
      "Compare múltiplos fornecedores: Preços variam 30–50% entre fornecedores da mesma região. Peça pelo menos 3 orçamentos.",
    ],

    calculatorCtaHeading: "Calcule sua Necessidade de Brita",
    calculatorCtaText: "Use nossas calculadoras gratuitas para estimar a quantidade exata e o custo do seu projeto.",
    calculatorLinks: [
      { label: "Calculadora de Brita", href: "/calculators/foundation/gravel-calculator", description: "Calcule m³ e toneladas para qualquer área com estimativa de custo." },
      { label: "Calculadora de Brita para Entrada", href: "/calculators/foundation/driveway-gravel-calculator", description: "Estime brita por tipo para entradas com faixa de custo e frete." },
      { label: "Calculadora de Laje de Concreto", href: "/calculators/foundation/concrete-slab-calculator", description: "Planejando concreto? Calcule m³ e quantidade de sacos." },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Quanto custa a tonelada de brita em 2026?",
        answer:
          "A brita custa R$60 a R$180 por tonelada em 2026 para tipos comuns. Saibro é o mais barato a R$40–R$80/ton. Brita 1 custa R$70–R$140/ton. Pedrisco custa R$80–R$150/ton. Seixo de rio custa R$150–R$500/ton. Preços variam por região e fornecedor.",
      },
      {
        question: "Quanta brita preciso para uma entrada de veículos?",
        answer:
          "Uma entrada padrão (4 m × 15 m a 15 cm) necessita cerca de 9 m³ ou 16 toneladas de brita. Para entrada dupla (7 × 15 m), são 16 m³ ou 29 toneladas. Use brita graduada ou saibro. Inclua 10% para compactação. Custo do material: R$1.500–R$5.000.",
      },
      {
        question: "Quanto custa o metro cúbico de brita?",
        answer:
          "Um metro cúbico de brita custa R$80 a R$250 dependendo do tipo. Brita 1 fica em R$100–R$200/m³. Saibro custa R$60–R$120/m³. Pedrisco custa R$120–R$250/m³. Preços são só material — frete (R$150–R$500/viagem) é adicional. Um m³ cobre cerca de 10 m² a 10 cm.",
      },
      {
        question: "Qual é o tipo de brita mais barato?",
        answer:
          "Saibro é o material mais barato a R$40–R$80 por tonelada. É uma mistura natural de argila e cascalho que compacta bem, ideal para caminhos e bases. Brita de demolição reciclada pode ser ainda mais barata quando disponível. Brita 1 convencional custa R$70–R$140/ton.",
      },
      {
        question: "Quanta brita preciso por metro quadrado?",
        answer:
          "A 10 cm (padrão para a maioria das aplicações): 0,10 m³ ou 0,18 tonelada por m². A 5 cm: 0,05 m³/m². A 15 cm (entradas): 0,15 m³ ou 0,27 ton/m². Multiplique pela área total e adicione 10% de desperdício.",
      },
      {
        question: "Entrada de brita é mais barata que concreto ou asfalto?",
        answer:
          "Sim, significativamente. Entrada de brita custa R$25–R$80/m² em material (R$60–R$200/m² instalada), vs R$150–R$350/m² para concreto e R$120–R$280/m² para asfalto. Porém, brita exige mais manutenção e reposição a cada 2–3 anos.",
      },
    ],
  },

  drivewayCost: {
    title: "Quanto Custa uma Entrada/Garagem? Guia de Preços 2026",
    metaDescription:
      "Uma entrada nova custa R$5.000–R$80.000 em 2026 dependendo do material e tamanho. Guia completo: concreto (R$150–R$350/m²), asfalto (R$120–R$280/m²), brita (R$25–R$80/m²), piso intertravado (R$200–R$500/m²). Fatores de preço, faça você mesmo vs empreiteiro e dicas de economia.",

    heroTitle: "Quanto Custa uma Entrada?",
    heroSubtitle: "Guia de Preços 2026",
    heroDescription:
      "Análise completa de custos de entrada por material, tamanho e região no Brasil. Cobre concreto, asfalto, brita e piso intertravado com preços instalados, comparações de durabilidade, fatores que afetam o custo e formas comprovadas de economizar.",

    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText:
      "Uma entrada nova custa R$5.000 a R$80.000 em 2026, com a maioria dos proprietários pagando R$10.000 a R$40.000 por uma entrada padrão para dois carros. A brita é a mais barata a R$25–R$80/m². O asfalto custa R$120–R$280/m². O concreto custa R$150–R$350/m². O piso intertravado é o mais caro a R$200–R$500/m². Estes preços incluem materiais e instalação profissional.",

    costByMaterialHeading: "Custo de Entrada por Material",
    costByMaterialIntro:
      "O material escolhido é o fator mais importante no custo da entrada. Cada opção oferece um equilíbrio diferente entre preço, durabilidade, aparência e manutenção. Confira os custos no Brasil em 2026:",
    costByMaterialColMaterial: "Material",
    costByMaterialColCostSqFt: "Custo Instalado / m²",
    costByMaterialColLifespan: "Vida Útil",
    costByMaterialColBestFor: "Ideal Para",
    costByMaterialRows: [
      { material: "Brita / Cascalho", costSqFt: "R$25 – R$80", lifespan: "15–25 anos", bestFor: "Propriedades rurais, entradas longas, orçamento limitado. Requer reposição periódica." },
      { material: "Asfalto", costSqFt: "R$120 – R$280", lifespan: "15–20 anos", bestFor: "Bom custo-benefício. Superfície flexível que resiste bem a variações de temperatura." },
      { material: "Concreto", costSqFt: "R$150 – R$350", lifespan: "25–50 anos", bestFor: "A maioria das entradas residenciais. Durável, baixa manutenção, pode ser estampado ou pigmentado." },
      { material: "Concreto Estampado", costSqFt: "R$200 – R$450", lifespan: "25–50 anos", bestFor: "Aparência decorativa a custo menor que intertravado. Imita tijolo, pedra ou ardósia." },
      { material: "Piso Intertravado", costSqFt: "R$200 – R$500", lifespan: "25–50+ anos", bestFor: "Residencial de alto padrão. Muito durável, muitos padrões, opções permeáveis disponíveis." },
      { material: "Pedra Natural", costSqFt: "R$300 – R$800", lifespan: "50+ anos", bestFor: "Entradas de luxo. Granito, ardósia, quartzito ou miracema. Máximo valor estético." },
    ],

    costBySizeHeading: "Custo de Entrada por Tamanho",
    costBySizeIntro:
      "O tamanho da entrada afeta drasticamente o custo total. Uma entrada para um carro ocupa aproximadamente 15–30 m², enquanto para dois carros requer 30–60 m². Entradas circulares podem ultrapassar 100 m².",
    costBySizeColSize: "Tipo de Entrada",
    costBySizeColDimensions: "Tamanho Típico",
    costBySizeColConcrete: "Concreto",
    costBySizeColAsphalt: "Asfalto",
    costBySizeColGravel: "Brita",
    costBySizeRows: [
      { size: "Um Carro", dimensions: "3×5 m (15 m²)", concrete: "R$2.250 – R$5.250", asphalt: "R$1.800 – R$4.200", gravel: "R$375 – R$1.200" },
      { size: "Dois Carros Padrão", dimensions: "5×10 m (50 m²)", concrete: "R$7.500 – R$17.500", asphalt: "R$6.000 – R$14.000", gravel: "R$1.250 – R$4.000" },
      { size: "Dois Carros Ampla", dimensions: "6×12 m (72 m²)", concrete: "R$10.800 – R$25.200", asphalt: "R$8.640 – R$20.160", gravel: "R$1.800 – R$5.760" },
      { size: "Entrada Longa Rural", dimensions: "3,5×30 m (105 m²)", concrete: "R$15.750 – R$36.750", asphalt: "R$12.600 – R$29.400", gravel: "R$2.625 – R$8.400" },
      { size: "Entrada Circular", dimensions: "~100 – 150 m²", concrete: "R$15.000 – R$52.500", asphalt: "R$12.000 – R$42.000", gravel: "R$2.500 – R$12.000" },
    ],

    factorsHeading: "Fatores que Afetam o Custo da Entrada",
    factorsIntro:
      "Além do material e tamanho, vários fatores podem aumentar ou reduzir o custo. Conhecê-los ajuda a orçar com precisão:",
    factorsItems: [
      "Escolha do material: O fator mais importante. Brita a R$25–R$80/m² é 5–10× mais barata que pedra natural a R$300–R$800/m².",
      "Área e formato: Entradas maiores custam mais no total mas geralmente têm menor custo por m². Entradas curvas exigem 20–40% mais mão de obra.",
      "Preparação do terreno e nivelamento: Se o terreno precisar de escavação ou aterro, espere adicionar R$30–R$100/m². Terrenos em aclive precisam de muros de arrimo.",
      "Drenagem: Drenagem adequada (canaletas, caixas de passagem) custa R$1.500–R$8.000 dependendo da complexidade.",
      "Remoção da entrada antiga: Remover concreto antigo custa R$30–R$80/m². Asfalto é um pouco mais barato. Brita geralmente pode ser reaproveitada.",
      "Custos regionais: Os preços variam 30–50% por região. São Paulo, Rio de Janeiro e Brasília são 20–40% mais caros que cidades menores.",
      "Alvarás: Verifique com a prefeitura se é necessário alvará para pavimentação da entrada (R$100–R$500).",
      "Preparação da base: Uma sub-base de brita compactada (15–30 cm) é essencial para concreto e asfalto. Adiciona R$20–R$60/m².",
    ],

    diyVsContractorHeading: "Faça Você Mesmo vs Contratar Profissional",
    diyVsContractorIntro:
      "Se você pode instalar uma entrada sozinho depende do material escolhido. Aqui está uma avaliação honesta:",
    diyVsContractorText1:
      "Entradas de brita são a opção mais amigável para fazer você mesmo. Com ferramentas básicas (pá, ancinho e compactador manual ou placa vibratória alugada), um proprietário pode instalar uma entrada de brita em um fim de semana. O processo inclui limpar a área, colocar manta geotêxtil, espalhar a brita em camadas de 5 cm e compactar cada camada. A instalação DIY economiza 40–60%.",
    diyVsContractorText2:
      "Entradas de concreto e asfalto não são projetos práticos para a maioria. O concreto exige equipamento especializado (caminhão betoneira, vibrador, régua, desempenadeira), timing preciso durante a concretagem e experiência com nivelamento e formas. Um concreto mal feito vai trincar prematuramente.",
    diyVsContractorText3:
      "Entradas de piso intertravado ficam no meio. Um DIYer experiente pode assentar pisos em um fim de semana longo, mas a preparação da base é muito trabalhosa. Para a maioria, ter a base feita profissionalmente e assentar o piso você mesmo oferece o melhor equilíbrio entre economia (25–35%) e qualidade. Sempre peça pelo menos três orçamentos.",

    savingTipsHeading: "Como Economizar em uma Entrada Nova",
    savingTipsIntro:
      "Uma entrada é um investimento significativo, mas existem estratégias comprovadas para reduzir o custo sem sacrificar qualidade:",
    savingTipsItems: [
      "Peça múltiplos orçamentos: Os preços podem variar 30–50% entre empreiteiros. Peça pelo menos três orçamentos escritos detalhando materiais, espessura e garantia.",
      "Agende na baixa temporada: Meses chuvosos ou inverno são períodos mais lentos. Muitos profissionais oferecem 10–20% de desconto.",
      "Escolha design simples: Entradas retas e retangulares são as mais baratas. Curvas e detalhes decorativos acrescentam 15–25%.",
      "Aproveite a base existente: Se a entrada antiga tem uma boa base de brita, o profissional pode aplicar material novo por cima.",
      "Considere asfalto em vez de concreto: O asfalto custa aproximadamente metade do concreto e funciona bem na maioria dos climas brasileiros.",
      "Use brita para entradas longas: Se a entrada tem mais de 30 metros, use brita na parte principal e pavimente apenas os primeiros metros.",
      "Combine com um vizinho: Contratar o mesmo profissional para dois projetos pode gerar desconto de 5–15%.",
    ],

    calculatorCtaHeading: "Estime o Custo da Sua Entrada",
    calculatorCtaText: "Use nossas calculadoras gratuitas para estimar a quantidade exata de material e custo do seu projeto.",
    calculatorLinks: [
      { label: "Calculadora de Laje de Concreto", href: "/calculators/foundation/concrete-slab-calculator", description: "Calcule metros cúbicos, sacos e custo para uma entrada de concreto." },
      { label: "Calculadora de Brita", href: "/calculators/foundation/gravel-calculator", description: "Estime toneladas e metros cúbicos para uma entrada de brita com faixa de custo." },
      { label: "Calculadora de Brita para Entrada", href: "/calculators/foundation/driveway-gravel-calculator", description: "Calculadora específica para brita de entrada por tipo e tamanho." },
    ],

    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Quanto custa construir uma entrada em 2026?",
        answer:
          "Uma entrada nova custa R$5.000 a R$80.000 em 2026, com média de R$10.000 a R$40.000 para uma entrada padrão de dois carros em concreto (50 m²). Brita é a mais barata a R$1.250–R$4.000 instalada. Asfalto custa R$6.000–R$14.000. Concreto custa R$7.500–R$17.500. Intertravado é o mais caro a R$10.000–R$25.000+.",
      },
      {
        question: "Qual é o tipo de entrada mais barato?",
        answer:
          "Brita/cascalho é o material mais barato a R$25–R$80/m² em material, ou R$60–R$200/m² instalada. Uma entrada padrão de dois carros em brita custa R$1.250–R$4.000 instalada, vs R$7.500–R$17.500 em concreto. A brita também é a opção mais acessível para fazer você mesmo, economizando 40–60%.",
      },
      {
        question: "Quanto custa uma entrada de concreto por metro quadrado?",
        answer:
          "Uma entrada de concreto custa R$150 a R$350/m² instalada em 2026. Concreto simples com acabado vassoura custa R$150–R$250/m². Concreto estampado custa R$200–R$450/m². Uma entrada de 50 m² para dois carros em concreto simples custa R$7.500–R$17.500 instalada. Entradas de concreto duram 25–50 anos.",
      },
      {
        question: "Asfalto ou concreto é mais barato para entrada?",
        answer:
          "Asfalto é mais barato inicialmente a R$120–R$280/m² vs R$150–R$350/m² para concreto. Porém, asfalto precisa de manutenção a cada 2–3 anos e dura 15–20 anos vs 25–50 anos do concreto. A longo prazo, o custo total é frequentemente similar.",
      },
      {
        question: "Como calculo quanto vai custar minha entrada?",
        answer:
          "Para estimar: (1) Meça comprimento e largura em metros para obter a área. (2) Multiplique pelo custo por m²: brita R$25–R$80, asfalto R$120–R$280, concreto R$150–R$350, intertravado R$200–R$500. (3) Adicione 10–20% para preparação do terreno e contingência. Use nossas calculadoras gratuitas para estimativas precisas.",
      },
      {
        question: "Quanto dura uma entrada por tipo de material?",
        answer:
          "A durabilidade varia significativamente. Brita dura 15–25 anos mas precisa de reposição a cada 2–3 anos. Asfalto dura 15–20 anos com manutenção regular. Concreto dura 25–50 anos com manutenção mínima. Piso intertravado dura 25–50+ anos com a vantagem de poder substituir peças individuais. Pedra natural pode durar 50+ anos.",
      },
    ],
  },
  flooringCost: {
    title: "Guia de Custos de Piso: Quanto Custa um Piso Novo?",
    metaDescription: "Pisos custam R$30\u2013R$300/m\u00b2 instalados. Guia completo de pre\u00e7os para porcelanato, laminado, carpete, vinilo e madeira com estimativas por c\u00f4modo e dicas de economia.",
    heroTitle: "Guia de Custos de Piso",
    heroSubtitle: "Pre\u00e7os 2026",
    heroDescription: "Tudo sobre custos de piso \u2014 materiais, instala\u00e7\u00e3o, or\u00e7amentos por c\u00f4modo e estrat\u00e9gias de economia.",
    quickAnswerHeading: "Resposta R\u00e1pida",
    quickAnswerText: "Um piso novo custa R$30 a R$300 por m\u00b2 instalado. Laminado \u00e9 o mais barato: R$50\u2013R$150/m\u00b2, seguido de carpete (R$60\u2013R$200), vinilo LVP (R$80\u2013R$250), porcelanato (R$120\u2013R$350) e madeira (R$150\u2013R$400).",
    flooringTypesHeading: "Custos por Tipo de Material",
    flooringTypesIntro: "Pre\u00e7os por metro quadrado instalado por tipo de material.",
    flooringTypesColType: "Tipo de Piso",
    flooringTypesColCost: "Custo Instalado (por m\u00b2)",
    flooringTypesColBestFor: "Melhor Para",
    flooringTypesRows: [
      { type: "Laminado", cost: "R$50 \u2013 R$150", bestFor: "Or\u00e7amento, DIY, aluguel" },
      { type: "Carpete", cost: "R$60 \u2013 R$200", bestFor: "Quartos, conforto" },
      { type: "Vinilo LVP", cost: "R$80 \u2013 R$250", bestFor: "Cozinhas, banheiros, alto tr\u00e1fego" },
      { type: "Porcelanato", cost: "R$120 \u2013 R$350", bestFor: "Banheiros, cozinhas, halls" },
      { type: "Madeira engenheirada", cost: "R$100 \u2013 R$300", bestFor: "Salas, visual de t\u00e1bua larga" },
      { type: "Madeira maci\u00e7a", cost: "R$150 \u2013 R$400", bestFor: "\u00c1reas sociais, valor a longo prazo" },
      { type: "Pedra natural", cost: "R$250 \u2013 R$600", bestFor: "Alto padr\u00e3o" },
    ],
    costByRoomHeading: "Custo por C\u00f4modo",
    costByRoomIntro: "Custos totais t\u00edpicos por tipo de c\u00f4modo com materiais de padr\u00e3o m\u00e9dio.",
    costByRoomColRoom: "C\u00f4modo",
    costByRoomColTypical: "Custo Total",
    costByRoomColNotes: "Notas",
    costByRoomRows: [
      { room: "Banheiro (5 m\u00b2)", typical: "R$1.000 \u2013 R$3.000", notes: "Porcelanato ou vin\u00edlico" },
      { room: "Quarto (14 m\u00b2)", typical: "R$1.500 \u2013 R$5.000", notes: "Laminado ou carpete" },
      { room: "Cozinha (18 m\u00b2)", typical: "R$2.500 \u2013 R$8.000", notes: "Porcelanato ou vin\u00edlico" },
      { room: "Sala (28 m\u00b2)", typical: "R$3.500 \u2013 R$12.000", notes: "Madeira ou vin\u00edlico" },
      { room: "Casa inteira (140 m\u00b2)", typical: "R$12.000 \u2013 R$50.000", notes: "Mix de materiais" },
    ],
    installationCostsHeading: "Custos de Instala\u00e7\u00e3o: DIY vs Profissional",
    installationCostsIntro: "A m\u00e3o de obra \u00e9 40\u201360% do custo total.",
    installationCostsText1: "Instala\u00e7\u00e3o profissional custa R$30\u2013R$100/m\u00b2. Porcelanato \u00e9 o mais caro: R$60\u2013R$150/m\u00b2. Carpete \u00e9 o mais barato: R$20\u2013R$50/m\u00b2.",
    installationCostsText2: "Instalar por conta pr\u00f3pria economiza 50\u201370% na m\u00e3o de obra. Laminado e vin\u00edlico click s\u00e3o os mais f\u00e1ceis.",
    installationCostsText3: "Custos adicionais: nivelamento (R$30\u2013R$80/m\u00b2), remo\u00e7\u00e3o do piso antigo (R$15\u2013R$40/m\u00b2), movimenta\u00e7\u00e3o de m\u00f3veis (R$200\u2013R$800), perfis de transi\u00e7\u00e3o (R$20\u2013R$60/pe\u00e7a).",
    howToCalculateHeading: "Como Calcular o Piso Necess\u00e1rio",
    howToCalculateIntro: "Passos para estimar materiais com precis\u00e3o.",
    howToCalculateItems: [
      "Me\u00e7a comprimento e largura de cada c\u00f4modo em metros. Multiplique para m\u00b2.",
      "C\u00f4modos irregulares: divida em ret\u00e2ngulos e some.",
      "Adicione 10% de perda para assentamento reto.",
      "15\u201320% para padr\u00f5es diagonais ou espinha de peixe.",
      "Divida o total pela cobertura por caixa.",
      "Sempre arredonde para cima.",
    ],
    howToCalculateSummary: "Use nossa calculadora gratuita para estimativas instant\u00e2neas com fator de perda autom\u00e1tico.",
    savingTipsHeading: "Como Economizar no Piso",
    savingTipsIntro: "Compras inteligentes podem reduzir custos em 20\u201340%.",
    savingTipsItems: [
      "Compre em promo\u00e7\u00f5es de temporada para 20\u201330% de desconto.",
      "Compre em lojas especializadas e atacado.",
      "Instale piso click por conta pr\u00f3pria.",
      "Use materiais diferentes por c\u00f4modo.",
      "Pe\u00e7a tudo de uma vez para descontos de quantidade.",
      "Guarde sobras para reparos futuros.",
    ],
    calculatorCtaHeading: "Calcule Seus Materiais",
    calculatorCtaText: "Use nossas calculadoras gratuitas para estimativas instant\u00e2neas.",
    calculatorLinks: [
      { label: "Calculadora de Piso", href: "/calculators/flooring/flooring-calculator/", description: "Calculadora geral de m\u00b2 e caixas" },
      { label: "Calculadora de Carpete", href: "/calculators/flooring/carpet-calculator/", description: "M\u00b2, metros lineares e manta" },
      { label: "Calculadora de Porcelanato", href: "/calculators/flooring/tile-calculator/", description: "Pe\u00e7as, rejunte e argamassa" },
      { label: "Calculadora de Laminado", href: "/calculators/flooring/laminate-calculator/", description: "R\u00e9guas, caixas e manta" },
    ],
    faqHeading: "Perguntas Frequentes",
    faqs: [
      { question: "Qual \u00e9 o piso mais barato?", answer: "Laminado: R$50\u2013R$150/m\u00b2 instalado. DIY: R$25\u2013R$70/m\u00b2 de material." },
      { question: "Quanto custa colocar piso na casa toda?", answer: "Casa de 140 m\u00b2 custa R$12.000\u2013R$50.000. Mix t\u00edpico: R$20.000\u2013R$35.000." },
      { question: "Qual piso valoriza mais o im\u00f3vel?", answer: "Madeira gera mais valoriza\u00e7\u00e3o na revenda. Porcelanato e vin\u00edlico em cozinha/banheiro tamb\u00e9m." },
      { question: "Quanto dura cada tipo de piso?", answer: "Madeira maci\u00e7a: 50\u2013100 anos. Pedra: 50+. Porcelanato: 30\u201350. Laminado/vin\u00edlico: 15\u201325. Carpete: 5\u201315." },
      { question: "Devo trocar o piso antes de vender?", answer: "Carpete gasto deve ser trocado. Madeira danificada pode ser lixada. Vin\u00edlico novo na cozinha/banheiro \u00e9 bom investimento." },
      { question: "Qual o melhor piso para cozinha?", answer: "Porcelanato e vin\u00edlico LVP. Imperme\u00e1veis, dur\u00e1veis e f\u00e1ceis de limpar." },
    ],
  },

  fenceCost: {
    title: "Quanto Custa uma Cerca? Guia de Pre\u00e7os 2026",
    metaDescription: "Uma cerca custa R$ 80\u2013300 por metro linear instalada em 2026. Guia completo de pre\u00e7os para cercas de madeira, alambrado, ferro e compostos com custos de m\u00e3o de obra e dicas de economia.",
    heroTitle: "Quanto Custa uma Cerca?",
    heroSubtitle: "Guia de Pre\u00e7os 2026",
    heroDescription: "Detalhamento completo de custos de cercas por material, estilo e tamanho de projeto com pre\u00e7os, m\u00e3o de obra e dicas de economia.",
    quickAnswerHeading: "Resposta R\u00e1pida",
    quickAnswerText: "Uma cerca custa R$ 80 a R$ 300 por metro linear instalada em 2026. Cerca de madeira de privacidade de 30 metros custa R$ 2.400\u2013R$ 4.500 em materiais ou R$ 4.800\u2013R$ 9.000 instalada.",
    fenceTypesHeading: "Custo por Material",
    fenceTypesIntro: "O material \u00e9 o maior fator de custo:",
    fenceTypesColType: "Material",
    fenceTypesColCost: "Custo/metro (instalado)",
    fenceTypesColBestFor: "Ideal para",
    fenceTypesRows: [
      { type: "Madeira Tratada", cost: "R$ 80 \u2013 R$ 180", bestFor: "Privacidade, mais popular. Dura 15\u201320 anos." },
      { type: "Madeira de Lei", cost: "R$ 150 \u2013 R$ 300", bestFor: "Resist\u00eancia natural. Dura 20\u201330 anos." },
      { type: "Alambrado", cost: "R$ 40 \u2013 R$ 100", bestFor: "Seguran\u00e7a, menor custo. Dura 15\u201320 anos." },
      { type: "Ferro / Metal", cost: "R$ 150 \u2013 R$ 350", bestFor: "Decorativa, seguran\u00e7a. Dura 20\u201330 anos." },
      { type: "PVC / Vinilo", cost: "R$ 120 \u2013 R$ 250", bestFor: "Sem manuten\u00e7\u00e3o. Dura 20\u201330 anos." },
      { type: "Composto", cost: "R$ 180 \u2013 R$ 350", bestFor: "Apar\u00eancia de madeira sem manuten\u00e7\u00e3o. Dura 25\u201350 anos." },
    ],
    costByProjectHeading: "Custo por Tamanho",
    costByProjectIntro: "Custos t\u00edpicos 2026 para cercas de madeira tratada:",
    costByProjectColProject: "Projeto",
    costByProjectColTypical: "Custo T\u00edpico (Instalado)",
    costByProjectColNotes: "Notas",
    costByProjectRows: [
      { project: "Quintal Pequeno (10 m)", typical: "R$ 1.600 \u2013 R$ 3.500", notes: "Materiais: R$ 800\u2013R$ 1.800." },
      { project: "Quintal M\u00e9dio (20 m)", typical: "R$ 3.200 \u2013 R$ 7.000", notes: "Tamanho mais comum." },
      { project: "Quintal Grande (30 m)", typical: "R$ 4.800 \u2013 R$ 10.500", notes: "Desconto por volume poss\u00edvel." },
      { project: "Per\u00edmetro (50 m)", typical: "R$ 8.000 \u2013 R$ 17.500", notes: "Considere instala\u00e7\u00e3o em fases." },
      { project: "Cerca com Port\u00e3o", typical: "R$ 5.000 \u2013 R$ 12.000", notes: "Port\u00e3o: R$ 500\u2013R$ 2.000 extra." },
      { project: "Cerca de Piscina", typical: "R$ 4.000 \u2013 R$ 10.000", notes: "NBR 16776 obrigat\u00f3ria." },
    ],
    laborCostsHeading: "Custos de M\u00e3o de Obra",
    laborCostsIntro: "M\u00e3o de obra representa 40\u201360% do custo total.",
    laborCostsText1: "Instala\u00e7\u00e3o profissional: R$ 30\u201380 por metro. Uma cerca de 20 m leva 2\u20133 dias.",
    laborCostsText2: "Solo rochoso e terreno inclinado aumentam custos em 10\u201325%.",
    laborCostsText3: "Pe\u00e7a pelo menos 3 or\u00e7amentos. Baixa temporada pode economizar 10\u201320%.",
    diyVsProHeading: "Fa\u00e7a Voc\u00ea Mesmo vs Profissional",
    diyVsProIntro: "Construir voc\u00ea mesmo economiza 40\u201360%:",
    diyVsProItems: [
      "Materiais para 20 m: R$ 1.600\u2013R$ 3.500.",
      "Profissional: R$ 3.200\u2013R$ 7.000 total.",
      "Ferramentas: cavadeira, n\u00edvel, serra, furadeira.",
      "2\u20133 fins de semana para 20 metros.",
      "Erros comuns: mour\u00f5es fora de prumo.",
      "Todos os mour\u00f5es dia 1, r\u00e9guas dia 2.",
    ],
    diyVsProSummary: "DIY economiza R$ 1.600\u2013R$ 3.500. Contrate profissional para solo dif\u00edcil.",
    savingTipsHeading: "Dicas de Economia",
    savingTipsIntro: "Como reduzir custos:",
    savingTipsItems: [
      "Madeira tratada vs madeira de lei: 30\u201350% mais barata.",
      "Construa na baixa temporada: 10\u201320% de economia.",
      "Divida custo com vizinho 50/50.",
      "Pain\u00e9is pr\u00e9-fabricados s\u00e3o mais r\u00e1pidos.",
      "Compre em madeireira para melhor pre\u00e7o.",
      "Tire a licen\u00e7a voc\u00ea mesmo.",
    ],
    calculatorCtaHeading: "Calcule seus Materiais",
    calculatorCtaText: "Use nossas calculadoras gratuitas para estimar materiais e custo.",
    calculatorLinks: [
      { label: "Calculadora de Cerca", href: "/calculators/outdoor/fence-calculator", description: "Mour\u00f5es, travessas e r\u00e9guas." },
      { label: "Calculadora de Mour\u00f5es", href: "/calculators/outdoor/fence-post-calculator", description: "Mour\u00f5es e concreto." },
      { label: "Calculadora de Pain\u00e9is", href: "/calculators/outdoor/fence-panel-calculator", description: "Pain\u00e9is pr\u00e9-fabricados." },
      { label: "Calculadora de Estacas", href: "/calculators/outdoor/picket-fence-calculator", description: "Estacas com espa\u00e7amento livre." },
    ],
    faqHeading: "Perguntas Frequentes",
    faqs: [
      { question: "Quanto custa cerca de 30 m?", answer: "Madeira: R$ 4.800\u2013R$ 10.500 instalada, R$ 2.400\u2013R$ 4.500 materiais." },
      { question: "Qual cerca mais barata?", answer: "Alambrado a R$ 40\u2013100/m. Privacidade: madeira tratada a R$ 80\u2013180/m." },
      { question: "DIY \u00e9 mais barato?", answer: "Sim, economiza 40\u201360%." },
      { question: "Quanto dura cerca de madeira?", answer: "Tratada: 15\u201320 anos. Madeira de lei: 20\u201330 anos." },
      { question: "Preciso de licen\u00e7a?", answer: "Depende do munic\u00edpio. Consulte a prefeitura local." },
      { question: "Qual cerca valoriza mais?", answer: "Cerca de madeira bem mantida recupera 50\u201370% em valor do im\u00f3vel." },
    ],
  },
  stairBuildingGuide: {
    title: "Guia Completo de Construção de Escadas: ABNT, Cálculos e Materiais (2026)",
    metaDescription: "Como construir escadas — guia completo sobre anatomia de escadas, ABNT NBR 9077/15575, cálculos de espelho e piso, tipos de escadas, materiais e custos. Calculadoras grátis inclusas.",
    heroTitle: "Guia Completo de Construção de Escadas",
    heroSubtitle: "Normas ABNT, Cálculos e Materiais",
    heroDescription: "Tudo sobre construção de escadas — de medir espelho e piso até atender a ABNT. Anatomia, métodos de cálculo, tipos comuns, materiais e custos para construção residencial.",
    quickAnswerHeading: "Resposta Rápida",
    quickAnswerText: "Para escadas conforme ABNT: espelho máx. 180 mm, piso mín. 250 mm, largura mín. 1.100 mm, altura livre 2.100 mm. Divida a altura total por 180 mm. Fórmula de Blondel: 2E + P = 630 mm. Longarinas de 50×300 mm.",
    anatomyHeading: "Anatomia da Escada",
    anatomyIntro: "Antes de construir, entenda os componentes-chave e a terminologia.",
    anatomyItems: ["Espelho: Distância vertical entre pisos de degraus. Máx. 180 mm. Todos dentro de 5 mm.", "Piso: Distância horizontal de nariz a nariz. Mín. 250 mm.", "Longarina (Coscial): Elemento diagonal estrutural. 50×300 mm para longarinas dentadas.", "Degrau (Piso): Superfície horizontal. Madeira maciça 35–40 mm. Nariz de 20–30 mm.", "Espelho (Contrapiso): Tábua vertical entre degraus. 20–25 mm.", "Nariz: Projeção da borda do degrau sobre o espelho. 20–30 mm.", "Corrimão: Obrigatório em um lado para 3+ degraus. Altura 800–920 mm.", "Balaústre: Elementos verticais. Espaçamento máx. 110 mm."],
    anatomySummary: "Compreender estes componentes é essencial para cálculos precisos e conformidade normativa.",
    buildingCodeHeading: "Requisitos ABNT para Escadas",
    buildingCodeIntro: "A ABNT NBR 9077 e NBR 15575 estabelecem padrões mínimos para escadas residenciais no Brasil.",
    buildingCodeItems: ["Espelho: Máx. 180 mm. Todos dentro de 5 mm.", "Piso: Mín. 250 mm.", "Largura: Mín. 1.100 mm para edifícios.", "Altura livre: Mín. 2.100 mm.", "Corrimão: Obrigatório para 3+ degraus. Altura 800–920 mm.", "Patamares: Em cima e embaixo. Mín. 1.100 mm.", "Guarda-corpo: Quando acima de 1 m do terreno. Mín. 1.100 mm.", "Iluminação: Em cima, embaixo e nos patamares."],
    buildingCodeSummary: "Requisitos mínimos — sempre consulte o corpo de bombeiros e a prefeitura local.",
    howToCalculateHeading: "Como Calcular Escadas",
    howToCalculateIntro: "O cálculo envolve número de degraus, espelho, piso e comprimento da longarina.",
    howToCalculateItems: ["Passo 1 — Meça a altura total entre pisos acabados.", "Passo 2 — Divida por 175–180 mm = número de espelhos.", "Passo 3 — Espelho real = altura total / número de espelhos.", "Passo 4 — Piso: mín. 250 mm. Blondel: 2E + P = 630 mm.", "Passo 5 — Número de pisos = espelhos - 1.", "Passo 6 — Percurso total = pisos × profundidade do piso.", "Passo 7 — Longarina = √(altura² + percurso²).", "Passo 8 — Verifique altura livre de 2.100 mm."],
    howToCalculateSummary: "Use nossa Calculadora de Escadas grátis para resultados instantâneos.",
    stairTypesHeading: "Tipos Comuns de Escadas",
    stairTypesIntro: "O tipo depende do espaço, orçamento, norma e estética.",
    stairTypesItems: ["Escada Reta: Mais simples. Um lance sem giros. 3–4,5 m de percurso. Mais econômica.", "Escada em L: Lance reto com giro de 90° no patamar. Reduz o comprimento.", "Escada em U: Dois lances paralelos com patamar de 180°. Menos comprimento, mais largura.", "Escada Caracol: Compacta em torno de coluna central. A partir de 1.200 mm. Ideal para acesso secundário."],
    stairTypesSummary: "Escadas retas quando houver espaço. L ou U para espaços limitados. Caracol para acesso secundário.",
    materialsHeading: "Materiais e Custos",
    materialsIntro: "O material afeta custo, durabilidade, aparência e manutenção.",
    materialsColMaterial: "Material", materialsColCost: "Custo por Degrau", materialsColBestFor: "Ideal Para",
    materialsRows: [
      { material: "Pinus Tratado", cost: "R$ 50 – R$ 100", bestFor: "Escadas externas, decks, projetos econômicos" },
      { material: "Pinus/Eucalipto", cost: "R$ 80 – R$ 150", bestFor: "Estrutura interna, escadas com carpete" },
      { material: "Ipê/Cumaru/Jatobá", cost: "R$ 200 – R$ 500", bestFor: "Escadas internas acabadas, envernizadas" },
      { material: "Composite/WPC", cost: "R$ 250 – R$ 600", bestFor: "Escadas externas, baixa manutenção" },
      { material: "Concreto", cost: "R$ 300 – R$ 800", bestFor: "Entradas, porões, comercial" },
    ],
    costBreakdownHeading: "Desglose de Custos",
    costBreakdownIntro: "Custos variam por complexidade, materiais e se é DIY ou profissional.",
    costBreakdownText1: "Externa básica (4–6 degraus): R$ 1.000–3.000. Interna reta (12–15 degraus): R$ 5.000–20.000. Madeira de lei: +30–50%. Instalação profissional: +50–100%.",
    costBreakdownText2: "L/U com patamar: +20–40%. Caracol: R$ 5.000–20.000 (kit) a R$ 80.000+ (sob medida). Curva: R$ 30.000–150.000.",
    costBreakdownText3: "DIY: economia de 40–60%. Escada reta em 1–2 finais de semana. Caracol e curvas para profissionais.",
    calculatorCtaHeading: "Calcule Seu Projeto",
    calculatorCtaText: "Use nossas calculadoras grátis para dimensões normativas instantâneas.",
    calculatorLinks: [
      { label: "Calculadora de Escadas", href: "/calculators/stairs/stair-calculator/", description: "Degraus, espelho, piso e longarina" },
      { label: "Calculadora de Longarinas", href: "/calculators/stairs/stair-stringer-calculator/", description: "Comprimento e quantidade" },
      { label: "Calculadora Espelho/Piso", href: "/calculators/stairs/rise-over-run-calculator/", description: "Razão, porcentagem e ângulo" },
      { label: "Escada Caracol", href: "/calculators/stairs/spiral-staircase-calculator/", description: "Degraus e rotação" },
      { label: "Escada com Patamar", href: "/calculators/stairs/stair-landing-calculator/", description: "Lances divididos com patamar" },
    ],
    faqHeading: "Perguntas Frequentes",
    faqs: [
      { question: "Como construir escadas para deck?", answer: "Meça a altura. Divida por 180 mm. Corte longarinas de 50×300 mm tratadas. Fixe com conectores metálicos. Instale pisos. Base de brita para drenagem." },
      { question: "O que diz a ABNT?", answer: "Espelho máx. 180 mm, piso mín. 250 mm, largura mín. 1.100 mm, altura livre 2.100 mm, corrimão 800–920 mm. Variação máx. 5 mm." },
      { question: "Quantos degraus para 2,70 m?", answer: "2.700 + 300 mm (laje) = 3.000 mm. 3.000 / 180 = 17 espelhos e 16 pisos. Percurso: 16 × 270 = 4.320 mm." },
      { question: "Forma mais econômica?", answer: "Escada reta de pinus tratado. Longarinas 50×300 (R$ 80–200/peça), pisos (R$ 30–60/peça). 14 degraus: R$ 1.500–4.000." },
      { question: "Preciso de alvará?", answer: "Sim para escadas permanentes. Consulte a prefeitura. Custo R$ 200–2.000." },
      { question: "Como usar a calculadora?", answer: "Insira altura total e piso desejado. A calculadora calcula degraus, espelho, percurso e longarina automaticamente." },
    ],
  },
};

export default guides;
