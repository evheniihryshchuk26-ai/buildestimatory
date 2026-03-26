// Brazilian Portuguese (pt-BR) — All calculator SEO content
// Metric adaptations: metros, cm, m², normas ABNT NBR, marcas brasileiras (Votorantim, Tigre, Eternit), BRL

export interface CalculatorSEOContent {
  disclaimer: string;
  howToUse: string[];
  materialInfo: string;
  nextSteps?: { label: string; href: string }[];
  installationTips: string[];
  commonMistakes: string[];
  faqs: { question: string; answer: string }[];
}

const WASTE_DISCLAIMER =
  "Adicione 10–15% a mais ao seu pedido como fator de desperdício para cortes e erros.";

// ─── FOUNDATION (FUNDAÇÃO) ──────────────────────────────────────────────────

export const anchorBoltCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o perímetro total da sua fundação em metros.",
    "Insira o espaçamento padrão (o padrão é 1,80 m conforme norma).",
    "Clique em Calcular Materiais para obter a quantidade de chumbadores.",
  ],
  materialInfo:
    "Os chumbadores (tipo J ou tipo L) são barras de aço roscadas que são embutidas na fundação de concreto para fixar a peça de baldrame em madeira tratada. A norma ABNT NBR 6118 e as boas práticas construtivas exigem chumbadores a cada 1,80 m no máximo e a não mais de 30 cm de cada canto ou junta de baldrame. No Brasil, os diâmetros mais comuns são 12 mm (1/2\") e 16 mm (5/8\"), sendo o de 12 mm o padrão mínimo para construção residencial. Os chumbadores tipo J são os mais utilizados pela facilidade de colocação no concreto fresco, enquanto os tipo L oferecem maior resistência ao arrancamento. Para regiões sujeitas a sismos ou ventos fortes — como algumas áreas do Nordeste e Sul do Brasil — recomenda-se usar chumbadores de 16 mm com arruelas de maior superfície. O custo médio no Brasil varia entre R$ 5,00 e R$ 15,00 por chumbador, dependendo do diâmetro e acabamento. É fundamental que os chumbadores atendam à especificação ASTM A307 ou equivalente na norma ABNT para garantir a resistência requerida.",
  nextSteps: [
    { label: "Calculadora de Manta de Vedação", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Calculadora de Baldrame em Madeira Tratada", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calculadora de Concreto", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Coloque os chumbadores antes que o concreto endureça completamente, enquanto ainda estiver trabalhável.",
    "Use um gabarito ou guia para manter espaçamento e alinhamento uniformes.",
    "Garanta que os chumbadores penetrem pelo menos 18 cm no concreto.",
    "Coloque um chumbador dentro dos 30 cm de cada extremidade de cada peça de baldrame.",
  ],
  commonMistakes: [
    "Omitir chumbadores nas juntas das peças — sempre coloque um dentro dos 30 cm de cada extremidade.",
    "Usar um diâmetro de chumbador incorreto — o padrão mínimo é 12 mm.",
    "Não verificar o prumo dos chumbadores antes que o concreto endureça.",
  ],
  faqs: [
    {
      question: "Qual tamanho de chumbador é exigido por norma?",
      answer:
        "A norma exige chumbador de no mínimo 12 mm de diâmetro, embutido pelo menos 18 cm no concreto, com espaçamento máximo de 1,80 m entre cada um.",
    },
    {
      question: "Preciso de chumbadores em cada canto?",
      answer:
        "Sim. Coloque um chumbador dentro dos 30 cm de cada extremidade de cada peça de baldrame e em cada canto da fundação.",
    },
    {
      question: "Posso adicionar chumbadores depois que o concreto endureceu?",
      answer:
        "Sim, utilizando chumbadores químicos com resina epóxi (tipo Fischer ou Hilti). Perfura-se o concreto e adere-se com epóxi estrutural, obtendo resistência comparável aos chumbadores embutidos.",
    },
    {
      question: "Quantos chumbadores preciso por metro linear de fundação?",
      answer:
        "Com o espaçamento padrão de 1,80 m, você precisa de aproximadamente 0,56 chumbadores por metro linear. No entanto, cantos, interseções e juntas de baldrame exigem chumbadores adicionais, então na prática estima-se entre 0,7 e 0,9 chumbadores por metro linear.",
    },
    {
      question: "Qual a diferença entre chumbadores tipo J e tipo L?",
      answer:
        "Os chumbadores tipo J têm um gancho em forma de J na parte inferior que se engata no concreto, e são os mais comuns em construção residencial. Os chumbadores tipo L têm uma dobra em ângulo reto e oferecem maior resistência ao arrancamento.",
    },
    {
      question: "Que chumbadores devo usar em regiões com ventos fortes?",
      answer:
        "Em regiões sujeitas a ventos fortes, como o litoral do Nordeste e Sul do Brasil, recomenda-se usar chumbadores de 16 mm de diâmetro com arruelas quadradas de 50x50 mm. Consulte a norma ABNT NBR 6123 (Forças devidas ao vento) para requisitos específicos.",
    },
  ],
};

export const sillSealCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o perímetro total da sua fundação em metros lineares.",
    "Insira a cobertura por rolo (a maioria dos rolos cobre 15 m).",
    "Clique em Calcular Materiais para ver quantos rolos você precisa.",
  ],
  materialInfo:
    "A manta de vedação é um material tipo junta de espuma de polietileno expandido que é colocado entre a fundação de concreto e o baldrame de madeira tratada. Sua função principal é prevenir a infiltração de ar, a absorção de umidade por capilaridade e a entrada de insetos e pragas. Vem em rolos de diferentes larguras — os mais comuns são de 9 cm, 14 cm e 19 cm, correspondendo às seções padrão de madeira. O espesor padrão é de 6 mm, embora exista de 12 mm para superfícies de fundação irregulares. No Brasil, a manta de vedação pode ser encontrada como \"fita de neoprene\" ou \"manta antiúmidade\" em casas de materiais de construção como Leroy Merlin, Telhanorte e C&C, com custo aproximado de R$ 30,00 a R$ 80,00 por rolo de 15 metros. É um material econômico que gera grande economia energética a longo prazo ao eliminar a infiltração de ar na base da parede.",
  nextSteps: [
    { label: "Calculadora de Baldrame em Madeira Tratada", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calculadora de Chumbadores", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Calculadora de Viga Perimetral", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Desenrole a manta de vedação ao longo da fundação logo antes de colocar o baldrame.",
    "Sobreponha as junções em pelo menos 15 cm.",
    "Use manta de vedação compatível com madeira tratada — algumas espumas se degradam com os químicos do tratamento.",
  ],
  commonMistakes: [
    "Esquecer de instalar a manta de vedação — é uma exigência normativa na maioria das jurisdições.",
    "Não sobrepor as junções, deixando espaços para infiltração de ar.",
  ],
  faqs: [
    {
      question: "A manta de vedação é obrigatória por norma?",
      answer:
        "Sim. A maioria das normas de construção exige uma vedação ou junta entre a fundação e o baldrame de madeira para evitar infiltrações de ar e umidade.",
    },
    {
      question: "Qual espessura de manta de vedação devo usar?",
      answer:
        "A manta padrão de 6 mm de espuma é suficiente para a maioria das aplicações. Em climas com variações significativas de temperatura, use manta de 12 mm para maior proteção.",
    },
    {
      question: "Qual largura de manta de vedação preciso?",
      answer:
        "A largura da manta deve coincidir com a do baldrame. Para paredes com montantes de 38x89 mm, use manta de 9 cm. Para paredes de 38x140 mm, use manta de 14 cm.",
    },
    {
      question: "Posso usar outro material no lugar da manta de espuma?",
      answer:
        "Existem alternativas como lâminas de neoprene e vedações de borracha EPDM, que são mais duráveis mas também mais caras. No Brasil também se utiliza manta asfáltica cortada em tiras, embora não ofereça as mesmas propriedades de vedação contra infiltração de ar que a espuma de polietileno.",
    },
    {
      question: "A manta de vedação ajuda a prevenir cupins?",
      answer:
        "A manta de vedação reduz os pontos de entrada de insetos ao vedar a junta entre concreto e madeira, mas não é uma barreira contra cupins por si só. No Brasil, onde os cupins são um problema grave em muitas regiões, é necessário complementar com tratamento químico do solo e madeira tratada com CCA ou CCB conforme a NBR 16143.",
    },
    {
      question: "Quantos rolos de manta de vedação preciso para uma casa típica?",
      answer:
        "Uma residência típica de 80 a 100 m² em planta tem um perímetro de fundação de aproximadamente 36 a 40 metros lineares. Com rolos de 15 metros, você precisaria de 3 rolos mais 10% adicional para sobreposições e desperdício, totalizando 3 a 4 rolos.",
    },
  ],
};

export const sillPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o perímetro total da fundação em metros.",
    "Selecione o comprimento da peça (comuns: 2,44 m, 3,66 m, 4,88 m).",
    "Clique em Calcular Materiais para obter a quantidade de peças.",
  ],
  materialInfo:
    "O baldrame em madeira tratada é o elemento horizontal mais baixo da estrutura de paredes e constitui a conexão estrutural entre a fundação de concreto e a estrutura de madeira. O tratamento com CCA, CCB (cromated copper borate — padrão no Brasil conforme ABNT NBR 16143) ou cobre micronizado protege contra apodrecimento e ataque de insetos xilófagos como cupins. No Brasil, a madeira tratada é encontrada em madeireiras especializadas e centros de distribuição como Madeireira Leo, Madeirit e fornecedores regionais. As seções padrão são 38x89 mm para paredes internas e 38x140 mm para paredes externas, em comprimentos comerciais de 2,44 m, 3,05 m, 3,66 m e 4,88 m. O custo da madeira tratada é 30% a 50% maior que a madeira sem tratamento, mas é um investimento obrigatório para a durabilidade da estrutura. Em climas tropicais úmidos do Brasil, especialmente no Norte e Nordeste, recomenda-se tratamento com maior retenção de químico.",
  nextSteps: [
    { label: "Calculadora de Chumbadores", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Calculadora de Manta de Vedação", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Calculadora de Viga Perimetral", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Use madeira tratada com classificação adequada para contato com o solo.",
    "Pré-fure os orifícios para os chumbadores antes de colocar o baldrame sobre a fundação.",
    "Aplique tratamento com boratos nas extremidades cortadas para manter a proteção.",
  ],
  commonMistakes: [
    "Usar madeira sem tratamento para o baldrame — isso causará apodrecimento.",
    "Não usar ferragens compatíveis com madeira tratada (parafusos e pregos apropriados).",
  ],
  faqs: [
    {
      question: "Qual dimensão de madeira se usa para o baldrame?",
      answer:
        "O baldrame geralmente é de 38x140 mm ou 38x184 mm, conforme a largura da parede. Na construção moderna prefere-se a seção de 38x140 mm para paredes externas com maior capacidade de isolamento.",
    },
    {
      question: "Como o baldrame é fixado?",
      answer:
        "O baldrame é fixado com chumbadores embutidos no concreto, tipicamente chumbadores tipo J de 12 mm com arruelas e porcas.",
    },
    {
      question: "Preciso tratar os cortes do baldrame?",
      answer:
        "Sim, cada vez que você corta a madeira tratada, o interior exposto perde a proteção do tratamento. Aplique uma solução de boratos ou selador de extremidades em todos os cortes.",
    },
    {
      question: "Posso usar madeira de pinus sem tratamento para o baldrame?",
      answer:
        "Não. A norma proíbe o uso de madeira sem tratamento em contato com concreto ou alvenaria. A umidade do concreto se transfere para a madeira por capilaridade, causando apodrecimento em poucos anos. No Brasil, procure madeira tratada com CCB em madeireiras certificadas.",
    },
    {
      question: "Que tipo de pregos e parafusos devo usar com madeira tratada?",
      answer:
        "A madeira tratada com CCB e cobre micronizado é corrosiva para metais comuns. Use pregos e parafusos galvanizados a quente, de aço inoxidável ou com revestimento cerâmico. Pregos galvanizados por eletrólise NÃO são suficientes e se corroerão em poucos anos.",
    },
    {
      question: "Quantas peças preciso para o baldrame de uma casa de 10x12 m?",
      answer:
        "O perímetro de uma casa de 10x12 m é de 44 metros lineares. Usando peças de 3,66 m, você precisaria de 12 peças mais 10% de desperdício, resultando em 13 a 14 peças de madeira tratada.",
    },
  ],
};

export const concreteCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimativa inclui 10% de fator de desperdício. O desperdício real pode variar conforme as condições do terreno, a precisão da forma e o método de concretagem. Sempre confirme as quantidades com seu fornecedor de concreto usinado.",
  howToUse: [
    "Meça o comprimento e a largura da área do seu projeto em metros.",
    "Insira a profundidade (espessura) em centímetros — 10 cm é padrão para lajes, 20–30 cm para sapatas.",
    "Selecione o tipo de projeto (laje, sapata ou pilar).",
    "Clique em Calcular Materiais para obter metros cúbicos, quantidade de sacos e recomendações de pedido.",
  ],
  materialInfo:
    "O concreto é uma mistura de cimento Portland, areia, brita (agregado graúdo) e água que endurece até se tornar um material sólido como rocha. Comercializa-se em duas formas: sacos de concreto preparado (tipo Votomassa da Votorantim ou similar) e concreto usinado entregue por caminhão betoneira. Os sacos de cimento mais comuns no Brasil são de 50 kg (Votorantim/Votoran, InterCement/Cauê, LafargeHolcim/Mizu) e rendem aproximadamente 0,035 m³ quando misturados com areia e brita na proporção 1:2:3. Para trabalhos pequenos como postes de cerca ou bases de caixa de correio, os sacos são práticos. Para qualquer volume maior que 1 m³, o concreto usinado por caminhão é muito mais eficiente e produz um resultado mais consistente.\n\nA resistência do concreto é medida em MPa aos 28 dias de cura. Os tipos residenciais mais comuns são: fck 15 MPa para aplicações não estruturais como calçadas e pátios, fck 20 MPa para fundações residenciais padrão e lajes, e fck 25 MPa para pisos de garagem, sapatas estruturais e áreas com cargas pesadas. Tipos superiores (fck 30–35 MPa) são especificados para obras comerciais ou aplicações especiais conforme a ABNT NBR 6118.\n\nO concreto usinado custa entre R$ 350,00 e R$ 550,00 por metro cúbico entregue, dependendo da resistência, localização e tamanho do pedido. A maioria dos fornecedores (Engemix, Polimix, Concretex) exige pedido mínimo de 3 m³, e cobra taxas adicionais por pedidos menores. Os sacos de cimento custam entre R$ 35,00 e R$ 50,00 por saco de 50 kg, o que resulta significativamente mais caro por metro cúbico que o usinado. A tela soldada, barra de aço CA-50/CA-60 e outros reforços adicionam R$ 20,00 a R$ 60,00 por metro quadrado ao custo total.",
  nextSteps: [
    { label: "Calculadora de Laje de Concreto", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calculadora de Sapata de Concreto", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calculadora de Pilar de Concreto", href: "/calculators/foundation/concrete-column-calculator/" },
    { label: "Calculadora de Degraus de Concreto", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Construa as formas niveladas, aprumadas e bem escoradas antes da chegada do concreto.",
    "Umedeça o terreno com água antes de concretar para evitar que o solo seco absorva a umidade do concreto rápido demais.",
    "Coloque e distribua o concreto o mais rápido possível — o usinado começa a endurecer em 60 a 90 minutos dependendo da temperatura.",
    "Use um vibrador ou bata nas formas com um martelo para adensar o concreto e eliminar bolhas de ar.",
    "Nivele a superfície com uma régua de alumínio primeiro, depois espere a água de exsudação desaparecer antes do acabamento final com desempenadeira ou vassoura.",
    "Cure o concreto por pelo menos 7 dias mantendo-o úmido com membrana de cura, lona plástica ou irrigação periódica com água.",
  ],
  commonMistakes: [
    "Adicionar água demais à mistura — isso enfraquece o concreto e causa fissuração. Mantenha o slump entre 10 e 12 cm para a maioria dos trabalhos residenciais.",
    "Não pedir concreto suficiente — sempre adicione 10% por desperdício, derramamentos e sobre-escavação. Ficar sem concreto durante a concretagem cria juntas frias.",
    "Omitir o reforço — use barra de aço CA-50 de 8 mm ou 10 mm a cada 20–30 cm ou tela soldada Q-196 para lajes de 10 cm ou mais de espessura.",
    "Concretar em temperaturas extremas sem precauções — abaixo de 5°C use água morna e cobertores isolantes; acima de 32°C use água fria e proteção contra o vento.",
    "Dar acabamento cedo demais enquanto a água de exsudação ainda está na superfície — isso retém água, enfraquece a camada superficial e causa descascamento.",
  ],
  faqs: [
    {
      question: "Quanto concreto preciso para uma laje de 3x3 metros?",
      answer: "Uma laje de 3x3 m com 10 cm de espessura requer aproximadamente 0,9 m³ de concreto. Com 10% de fator de desperdício, peça 1,0 m³. Este volume está no limite onde o concreto usinado por caminhão é mais prático que misturar sacos manualmente.",
    },
    {
      question: "Quantos sacos de cimento preciso por metro cúbico?",
      answer: "Para uma mistura padrão de proporção 1:2:3 (cimento:areia:brita), você precisa de aproximadamente 7 sacos de cimento de 50 kg por metro cúbico de concreto. Além disso, precisará de 0,56 m³ de areia e 0,84 m³ de brita. Para concreto preparado em saco (só adicionar água), precisará de aproximadamente 28 a 30 sacos de 50 kg por m³.",
    },
    {
      question: "Quantos metros cúbicos de concreto para uma garagem?",
      answer: "Uma garagem típica para dois carros (6 m de largura por 6 m de comprimento com 12 cm de espessura) requer aproximadamente 4,3 m³ de concreto. Adicione 10% de desperdício para um pedido total de 4,8 m³. Para garagens, especifique concreto fck 25 MPa com tela soldada para maior durabilidade.",
    },
    {
      question: "Qual a diferença entre concreto fck 20 e fck 25?",
      answer: "O valor fck indica a resistência à compressão aos 28 dias em MPa. O fck 20 é o padrão para fundações residenciais, muros de arrimo e lajes. O fck 25 é mais resistente e durável, recomendado para garagens, rampas, lajes externas e áreas com cargas pesadas. A diferença de custo é tipicamente de R$ 20,00 a R$ 50,00 por m³.",
    },
    {
      question: "Quanto custa um metro cúbico de concreto usinado?",
      answer: "O concreto usinado por caminhão betoneira custa entre R$ 350,00 e R$ 550,00 por metro cúbico entregue, dependendo da resistência e localização. Há taxas adicionais por pedidos menores que o mínimo (geralmente 3 m³), entregas em sábado e concretagens fora de horário. Misturar com sacos de cimento custa aproximadamente R$ 700,00 a R$ 900,00 por metro cúbico, por isso só compensa para trabalhos muito pequenos.",
    },
    {
      question: "Pode-se concretar com chuva?",
      answer: "Uma garoa leve geralmente é aceitável se você puder proteger a superfície fresca. A chuva forte pode lavar a pasta de cimento, enfraquecer a superfície e causar descascamento. Se chuva for esperada, tenha lona plástica pronta para cobrir o concreto recém-concretado imediatamente. Nunca dê acabamento no concreto com água empoçada na superfície.",
    },
    {
      question: "Qual espessura deve ter uma laje de concreto?",
      answer: "As lajes residenciais padrão (pátios, calçadas, bases para edícula) têm 10 cm de espessura. Pisos de garagem devem ter de 12 a 15 cm de espessura. As sapatas para paredes de carga têm tipicamente de 20 a 30 cm de espessura. Sempre consulte o código de obras do seu município para requisitos mínimos.",
    },
    {
      question: "Preciso de armação em uma laje de concreto?",
      answer: "Para lajes de 10 cm de espessura ou mais, o reforço é recomendado. As opções incluem barra de aço CA-50 de 8 mm ou 10 mm a cada 20-30 cm em ambas as direções, tela soldada Q-196 ou fibra de polipropileno misturada no concreto. A barra de aço proporciona o melhor controle de fissuras para garagens, pisos industriais e lajes estruturais.",
    },
  ],
};

export const concreteSlabCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimativa inclui 10% de fator de desperdício. O desperdício real pode variar conforme a preparação do terreno, a precisão das formas e as variações de espessura. Sempre confirme as quantidades com seu fornecedor de concreto usinado.",
  howToUse: [
    "Meça o comprimento e a largura da laje planejada em metros.",
    "Insira a espessura da laje em centímetros — 10 cm é padrão para pátios e calçadas, 12–15 cm para garagens.",
    "Clique em Calcular Materiais para obter os metros cúbicos necessários, incluindo 10% de desperdício.",
    "Use a quantidade de sacos para trabalhos pequenos ou o total em m³ para pedir concreto usinado por caminhão.",
  ],
  materialInfo:
    "Uma laje de concreto é uma superfície plana e horizontal concretada diretamente sobre terreno preparado, utilizada para pátios, pisos de garagem, calçadas, pisos de edícula e bases de construção. A espessura padrão residencial é de 10 cm para áreas de pedestres como calçadas e pátios. Garagens e rampas veiculares devem ter de 12 a 15 cm de espessura para suportar o peso dos veículos.\n\nA preparação do terreno é crítica para a durabilidade da laje. O solo deve estar compactado, nivelado e livre de matéria orgânica. Uma camada de 10 cm de brita compactada (brita graduada ou rachão) proporciona drenagem e uma base estável. Recomenda-se uma lona plástica de 200 micras entre a brita e o concreto para prevenir a migração de umidade, especialmente em lajes internas de espaços habitáveis.\n\nAs opções de reforço para lajes incluem tela soldada Q-196, barra de aço CA-50 de 8 mm ou 10 mm a cada 20–30 cm em ambas as direções, ou fibra de polipropileno misturada no concreto. As juntas de controle (cortes com disco ou juntas moldadas) devem ser colocadas a intervalos não maiores que 2 a 3 vezes a espessura da laje — para uma laje de 10 cm, juntas a cada 2,5 a 3 metros.\n\nO concreto para lajes é especificado tipicamente com resistência fck 20 a fck 25 MPa com slump de 10 cm conforme ABNT NBR 6118. O concreto usinado por caminhão custa entre R$ 350,00 e R$ 550,00 por metro cúbico entregue. Os sacos de cimento de 50 kg custam entre R$ 35,00 e R$ 50,00 cada um, o que resulta consideravelmente mais caro por metro cúbico — prático apenas para concretagens muito pequenas menores que 0,5 m³.",
  nextSteps: [
    { label: "Calculadora de Concreto", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculadora de Sapata de Concreto", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calculadora de Chumbadores", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Compacte o terreno e adicione 10 cm de brita como base antes de concretar — isso previne recalques e trincas.",
    "Coloque as formas com estacas a cada 60–90 cm e verifique o nível; aplique óleo nas formas para facilitar a desenforma.",
    "Coloque o reforço (tela ou barra) sobre espaçadores para que fique no terço inferior da laje, não sobre o solo.",
    "Concrete em uma única operação contínua para evitar juntas frias — tenha mão de obra e equipamento suficientes prontos antes da chegada do caminhão.",
    "Nivele com régua de alumínio, depois passe vassoura na superfície para tração antes de aplicar membrana de cura.",
  ],
  commonMistakes: [
    "Omitir a base de brita — concretar diretamente sobre terra causa recalques e trincas no primeiro ano.",
    "Fazer a laje fina demais — lajes de 7 cm trincam facilmente; sempre concrete pelo menos 10 cm para uso residencial.",
    "Colocar a tela diretamente no solo em vez de sobre espaçadores — o reforço no fundo não funciona; deve estar no terço inferior da laje.",
    "Esquecer das juntas de controle — sem juntas a cada 2,5 a 3 metros, a laje trincará aleatoriamente durante a cura.",
    "Dar acabamento enquanto a água de exsudação está presente — isso retém água na camada superior e causa descascamento.",
  ],
  faqs: [
    {
      question: "Quanto concreto preciso para uma laje de 3x3 metros?",
      answer: "Uma laje de 3x3 m com 10 cm de espessura requer aproximadamente 0,9 m³ de concreto. Com 10% de desperdício, peça 1,0 m³. A 15 cm de espessura (para garagem), você precisa de 1,4 m³.",
    },
    {
      question: "Qual espessura deve ter uma laje de concreto?",
      answer: "A espessura padrão é 10 cm para pátios, calçadas e bases de edícula. Garagens e rampas devem ter de 12 a 15 cm, com bordas engrossadas no perímetro. Consulte o código de obras local para requisitos mínimos.",
    },
    {
      question: "Quanto custa uma laje de concreto?",
      answer: "O custo do material para uma laje de concreto é de R$ 70,00 a R$ 140,00 por metro quadrado para espessura padrão de 10 cm com usinado. O custo instalado (incluindo mão de obra, brita, forma, reforço e acabamento) vai de R$ 140,00 a R$ 280,00 por m².",
    },
    {
      question: "Preciso de tela ou barra em uma laje de concreto?",
      answer: "Para lajes residenciais de 10 cm, a tela soldada Q-196 ou fibra de polipropileno proporcionam controle adequado de fissuras por retração. A barra de aço CA-50 de 8 mm a cada 25 cm é recomendada para garagens e lajes com cargas veiculares.",
    },
    {
      question: "Quantos sacos de cimento para uma laje?",
      answer: "Para mistura padrão 1:2:3, você precisa de aproximadamente 7 sacos de 50 kg por metro cúbico. Para uma laje de 3x3 m a 10 cm de espessura (0,9 m³), precisa de uns 6 sacos de cimento mais areia e brita.",
    },
    {
      question: "Quanto tempo leva para curar uma laje de concreto?",
      answer: "O concreto alcança aproximadamente 70% de sua resistência em 7 dias e a resistência total de projeto aos 28 dias. Pode-se caminhar sobre a laje após 24 a 48 horas, circular com veículo após 7 dias, e colocar cargas pesadas após 28 dias. Mantenha a superfície úmida nos primeiros 7 dias.",
    },
  ],
};

export const concreteFootingCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimativa inclui 10% de fator de desperdício. As dimensões da sapata devem atender aos requisitos do código de obras local para profundidade, largura e reforço. Sempre verifique com sua prefeitura antes de concretar.",
  howToUse: [
    "Meça o comprimento total da sapata em metros — para uma sapata perimetral, some todos os lados.",
    "Insira a largura da sapata em metros — as sapatas corridas típicas têm de 30 a 60 cm de largura.",
    "Insira a profundidade da sapata em metros — profundidades comuns são de 20 a 30 cm para sapatas superficiais.",
    "Clique em Calcular Materiais para obter metros cúbicos, quantidade de sacos e totais com desperdício.",
  ],
  materialInfo:
    "As sapatas de concreto são a base estrutural que transfere as cargas do edifício ao solo. Ficam abaixo do nível do terreno e suportam paredes de fundação, pilares e postes. Existem dois tipos principais: sapatas corridas (de viga) que percorrem o comprimento de uma parede, e sapatas isoladas que suportam pilares individuais.\n\nAs sapatas corridas para construção residencial têm tipicamente de 30 a 60 cm de largura e de 20 a 30 cm de profundidade, com a largura sendo pelo menos o dobro da espessura da parede que suportam. Para uma parede de bloco de 14 cm, a sapata deve ter pelo menos 30 cm de largura e 20 cm de profundidade. As sapatas isoladas para pilares são geralmente de 60x60 cm ou maiores, dependendo da carga.\n\nO reforço para sapatas corridas consiste em duas barras CA-50 de 10 mm ou 12,5 mm percorrendo horizontalmente próximo ao fundo, com esperas verticais que se estendem para a parede de fundação a intervalos de 1,20 m. As sapatas isoladas levam uma grelha de barra CA-50 de 10 mm a cada 15–20 cm em ambas as direções. O concreto para sapatas é especificado com resistência fck 20 a fck 25 MPa conforme ABNT NBR 6118.\n\nO concreto usinado por caminhão é o método padrão para sapatas. O custo é de R$ 350,00 a R$ 550,00 por metro cúbico. Uma casa típica de 140 m² com perímetro de 50 metros lineares de sapata corrida de 40 cm de largura por 20 cm de profundidade requer aproximadamente 4 m³ de concreto.",
  nextSteps: [
    { label: "Calculadora de Concreto", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculadora de Laje de Concreto", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calculadora de Pilar de Concreto", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Escave a vala na largura e profundidade exatas especificadas no projeto — a sobre-escavação desperdiça concreto e dinheiro.",
    "Nivele o fundo da vala com soquete manual antes de concretar — uma base desnivelada causa recalques diferenciais.",
    "Coloque a armação sobre espaçadores ou pedaços de tijolo para manter 7 cm de cobrimento de concreto abaixo do aço.",
    "Instale esperas verticais de barra a cada 1,20 m para amarrar a sapata à parede de fundação superior.",
    "Não concrete sapatas sobre solo congelado ou com água parada — ambas as condições impedem a cura adequada.",
  ],
  commonMistakes: [
    "Fazer sapatas estreitas demais — a largura da sapata deve ser pelo menos o dobro da espessura da parede para distribuir a carga ao solo.",
    "Não respeitar a profundidade de assentamento — sapatas superficiais podem sofrer com recalques.",
    "Sobre-escavar a vala e aterrar com terra solta — as sapatas devem se apoiar sobre solo firme não alterado ou compactado mecanicamente.",
    "Omitir a armação em sapatas corridas — as sapatas sem reforço trincam em pontos de esforço e perdem integridade estrutural.",
    "Concretar a parede de fundação no mesmo dia que a sapata — permita que a sapata endureça pelo menos 24 horas antes de carregá-la.",
  ],
  faqs: [
    {
      question: "Qual largura deve ter uma sapata de concreto?",
      answer: "A largura da sapata deve ser pelo menos o dobro da espessura da parede que suporta. Para uma parede de bloco de 14 cm, use uma sapata de 30 cm de largura. Para uma parede concretada de 20 cm, use uma sapata de 40 cm.",
    },
    {
      question: "Qual profundidade devem ter as sapatas?",
      answer: "A profundidade depende de requisitos estruturais e condições do solo. A sapata em si tem tipicamente de 20 a 30 cm de espessura. Consulte o código de obras da sua cidade para requisitos mínimos de profundidade de assentamento.",
    },
    {
      question: "Quanto concreto para a sapata de uma casa?",
      answer: "Uma casa típica de 140 m² com perímetro de 50 metros lineares usando sapata corrida de 40 cm de largura por 20 cm de profundidade requer aproximadamente 4 m³ de concreto. Com 10% de desperdício, peça 4,4 m³.",
    },
    {
      question: "As sapatas precisam de armação?",
      answer: "Sim. A maioria dos códigos de obra exige pelo menos duas barras CA-50 de 10 mm percorrendo continuamente próximo ao fundo das sapatas corridas, com traspasse mínimo de 40 diâmetros nas emendas.",
    },
    {
      question: "Pode-se concretar a sapata e a parede ao mesmo tempo?",
      answer: "As concretagens monolíticas (sapata e parede juntas) são feitas às vezes para fundações superficiais especiais, mas para construção padrão, a sapata é concretada primeiro e a forma da parede é colocada depois que a sapata curar pelo menos 24 horas.",
    },
    {
      question: "Qual resistência de concreto usar para sapatas?",
      answer: "As sapatas residenciais padrão usam concreto fck 20 MPa, que proporciona resistência adequada para a maioria das condições de solo. Em áreas com lençol freático alto ou solo agressivo (alto teor de sulfatos), especifique fck 25 MPa com cimento resistente a sulfatos (CP V-ARI RS).",
    },
  ],
};

export const concreteColumnCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimativa inclui 10% de fator de desperdício. A profundidade do pilar deve atender aos requisitos locais de profundidade de assentamento e capacidade de carga. Verifique as dimensões e o reforço com seu projeto estrutural.",
  howToUse: [
    "Selecione o diâmetro do pilar — 20 cm para cargas leves, 25 cm para postes padrão de terraço, 30 cm para cargas estruturais pesadas.",
    "Insira a altura do pilar em metros — meça do fundo da fundação até o topo do pilar.",
    "Insira a quantidade de pilares ou tubos que precisa preencher.",
    "Clique em Calcular Materiais para obter m³ por pilar, concreto total e quantidade de sacos.",
  ],
  materialInfo:
    "Os pilares de concreto (também chamados de estacas ou tubulões) são suportes cilíndricos de concreto utilizados para fundação de terraços, bases de postes, suportes de varandas e pilares estruturais leves. São formados usando tubos de papelão rígido (tipo Sonotube) ou formas metálicas que são colocados no terreno, preenchidos com concreto e removidos após a cura.\n\nOs diâmetros comuns para trabalho residencial são 20 cm (cargas leves como guarda-corpos e edículas pequenas), 25 cm (postes padrão de terraço e cargas moderadas) e 30 cm (vigas de terraço pesadas, pilares de pórtico e pilares estruturais). Tamanhos maiores (35, 40 e 60 cm) estão disponíveis para aplicações comerciais.\n\nO reforço para pilares de concreto consiste tipicamente em uma ou duas barras CA-50 de 10 mm ou 12,5 mm colocadas verticalmente pelo centro do pilar, com uma base de poste fixada na parte superior enquanto o concreto está fresco. Os tubos tipo Sonotube custam entre R$ 50,00 e R$ 150,00 cada para comprimentos de 2,5 a 3,5 m em diâmetros residenciais padrão. O concreto se mistura melhor com sacos de 50 kg para trabalhos de pilares — cada saco com proporção 1:2:3 rende aproximadamente 0,035 m³.",
  nextSteps: [
    { label: "Calculadora de Concreto", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculadora de Sapata de Concreto", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calculadora de Degraus de Concreto", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Escave o buraco de 10 a 15 cm mais largo que o tubo para permitir o preenchimento e o prumo do tubo.",
    "Coloque o tubo sobre uma base plana (bloco pré-concretado ou brita compactada) e aprume perfeitamente com escoras de madeira.",
    "Preencha o tubo em camadas de 30 cm, vibrando cada camada para eliminar bolhas de ar.",
    "Fixe a base de poste ou chumbador no concreto fresco na posição correta antes que endureça.",
    "Aterro ao redor do tubo somente após o concreto ter curado pelo menos 24 horas.",
  ],
  commonMistakes: [
    "Não vibrar o concreto durante o preenchimento — bolhas de ar enfraquecem o pilar significativamente.",
    "Desalinhar o chumbador ou base de poste — erros de alinhamento são permanentes após o concreto endurecer.",
    "Usar pouca armação — pelo menos uma barra CA-50 de 10 mm deve percorrer toda a extensão do pilar.",
  ],
  faqs: [
    {
      question: "Quantos sacos de concreto por pilar?",
      answer: "Um pilar de 25 cm de diâmetro por 1 m de profundidade usa aproximadamente 0,05 m³ de concreto (cerca de 1,5 sacos de cimento com areia e brita na proporção 1:2:3). Um pilar de 30 cm por 1 m usa cerca de 0,07 m³ (2 sacos).",
    },
    {
      question: "Qual diâmetro de pilar para um terraço?",
      answer: "Use pilares de 25 cm para terraços residenciais padrão com vãos moderados. Para terraços com banheira de hidromassagem, churrasqueiras ou cargas pesadas, use pilares de 30 cm. Para estruturas leves como treliças de jardim, 20 cm é suficiente.",
    },
    {
      question: "Preciso de armação em pilares de concreto?",
      answer: "Sim. Pelo menos uma barra CA-50 de 10 mm deve ser colocada verticalmente no centro de cada pilar para resistência a forças laterais e flexão. Para pilares estruturais pesados, use duas ou mais barras com estribos a cada 20 cm conforme ABNT NBR 6118.",
    },
    {
      question: "Posso embutir o poste de madeira diretamente no concreto?",
      answer: "Não é recomendado. Embutir madeira no concreto retém umidade e causa apodrecimento na conexão estrutural mais crítica. Use uma base metálica tipo Simpson fixada no concreto e parafusada ao poste.",
    },
    {
      question: "Quanto tempo esperar antes de carregar os pilares?",
      answer: "Permita pelo menos 48 horas de cura antes de instalar postes e carregar os pilares com a estrutura. Para resistência total de projeto, aguarde 7 dias. Mantenha o concreto úmido durante o período de cura.",
    },
  ],
};

export const concreteStepsCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta calculadora usa espelho padrão de 18 cm e piso de 28 cm por degrau, que atende à maioria dos códigos de obras. O espelho real por degrau pode variar conforme a altura total. O código de obras exige espelho consistente em toda a escada.",
  howToUse: [
    "Meça a altura total em centímetros — distância vertical do piso até o nível da porta ou plataforma.",
    "Insira a largura desejada da escada em metros — 90 cm (0,9 m) é o mínimo por norma.",
    "Clique em Calcular Materiais para obter o número de degraus, metros cúbicos de concreto e quantidade de sacos.",
  ],
  materialInfo:
    "Os degraus de concreto são uma solução durável e de baixa manutenção para entradas, varandas e transições de nível. O concreto moldado no local permite personalizar as dimensões exatas para atender aos requisitos da ABNT NBR 9050 (Acessibilidade) e do código de obras local.\n\nO espelho (altura do degrau) padrão é de 16 a 18 cm e o piso (profundidade) mínimo de 28 cm, conforme a NBR 9050. A relação ideal entre espelho e piso segue a fórmula de Blondel: 2 × espelho + piso = 63 a 65 cm. Para concreto, o reforço consiste em barras CA-50 de 8 mm a cada 20 cm em ambas as direções, com barras verticais de amarração.\n\nO concreto para degraus deve ser de fck 25 MPa para resistir ao tráfego e às intempéries. O acabamento deve incluir texturização antiderrapante (vassoura ou estampagem) para segurança. O custo médio de degraus de concreto moldados no local no Brasil é de R$ 300,00 a R$ 600,00 por degrau, incluindo forma, armação, concreto e acabamento.",
  nextSteps: [
    { label: "Calculadora de Concreto", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculadora de Sapata de Concreto", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calculadora de Pilar de Concreto", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Construa formas sólidas com compensado de 18 mm bem escoradas — o concreto exerce pressão significativa nas formas dos degraus.",
    "Coloque armação de barra CA-50 de 8 mm a cada 20 cm em ambas as direções para controle de fissuras e resistência estrutural.",
    "Concrete de baixo para cima, compactando cada degrau antes de passar para o próximo.",
    "Aplique acabamento com vassoura perpendicular à borda do degrau para tração antiderrapante.",
    "Instale um perfil de nariz (borda arredondada) em cada degrau para segurança e estética.",
  ],
  commonMistakes: [
    "Espelhos desiguais — a norma permite variação máxima de 1 cm entre espelhos; espelhos inconsistentes são a principal causa de quedas em escadas.",
    "Não colocar base de brita compactada sob a escada — sem base adequada, os degraus sofrerão recalques.",
    "Omitir acabamento antiderrapante — degraus lisos de concreto são extremamente escorregadios quando molhados.",
    "Não curar adequadamente — degraus expostos ao sol sem cura adequada trincam e descascam na superfície.",
  ],
  faqs: [
    {
      question: "Como calcular o número de degraus?",
      answer: "Divida a altura total (distância vertical do piso ao nível superior) pela altura alvo do espelho (18 cm é padrão). Arredonde para cima. Para uma altura de 120 cm: 120 / 18 = 6,67, então precisa de 7 degraus. A altura real do espelho é 120 / 7 = 17,1 cm por degrau.",
    },
    {
      question: "Qual a largura mínima de uma escada?",
      answer: "A largura mínima para escadas residenciais é de 90 cm conforme a ABNT NBR 9050. Para conforto e tráfego de duas pessoas, escadas de 1,20 m são recomendadas.",
    },
    {
      question: "Quanto concreto para 5 degraus?",
      answer: "Cinco degraus de 90 cm de largura com espelho de 18 cm e piso de 28 cm requerem aproximadamente 0,3 a 0,5 m³ de concreto, dependendo da configuração. Com 10% de desperdício, peça 0,4 a 0,55 m³.",
    },
    {
      question: "Os degraus de concreto precisam de armação?",
      answer: "Sim. Degraus de concreto precisam de barra CA-50 de 8 mm a cada 20 cm em ambas as direções para resistir a fissuras e cargas de tráfego. Sem armação, os degraus trincam nos cantos e bordas onde o estresse é concentrado.",
    },
  ],
};

export const gravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimativa inclui um fator de desperdício de 10%. O peso da brita varia conforme o tipo e a umidade. A conversão de 1,5 tonelada por metro cúbico é uma média — o peso real varia de 1,4 a 1,8 t/m³ dependendo do material. Sempre confirme as quantidades com seu fornecedor antes de fazer o pedido.",
  howToUse: [
    "Meça o comprimento da área que precisa cobrir em metros.",
    "Meça a largura da área em metros.",
    "Insira a espessura desejada de brita em centímetros — 10 cm é padrão para a maioria das aplicações, 15 a 20 cm para acessos de veículos.",
    "Clique em Calcular para obter metros cúbicos e toneladas com o fator de desperdício de 10% já incluído.",
  ],
  materialInfo:
    "A brita é um agregado solto de fragmentos de rocha utilizado para acessos de veículos, calçadas, drenagem, paisagismo e como sub-base sob concreto e asfalto. Está disponível em uma ampla variedade de granulometrias e tipos, cada um adequado para diferentes aplicações.\n\nAs granulometrias mais comuns no Brasil são: brita 1 (19 mm, o padrão para acessos e drenagem), brita 0 ou pedrisco (4,8 a 9,5 mm, para bases compactadas e acabamentos), e pedra rachão (100 a 250 mm, para drenagem profunda e aterro). O cascalho (pedras arredondadas naturais) é popular para caminhos de jardim, pátios e canteiros decorativos. A pedra britada tem arestas angulares que se encaixam e compactam firmemente, enquanto o seixo rolado tem superfícies lisas que se deslocam ao caminhar e não compactam.\n\nA brita é vendida no Brasil por metro cúbico ou por tonelada. Um metro cúbico de brita pesa aproximadamente 1,4 a 1,8 tonelada, dependendo do tipo de rocha — brita graduada (BGS) é mais pesada com 1,8 t/m³, enquanto pedrisco é mais leve com 1,3 t/m³. A maioria dos fornecedores vende por metro cúbico com entrega por caminhão basculante. Os preços típicos no Brasil vão de R$ 80,00 a R$ 200,00 por metro cúbico dependendo do tipo e da região. Os custos de frete variam de R$ 200,00 a R$ 600,00 por viagem para distâncias de até 30 km. Fornecedores como pedreiras locais, casas de materiais de construção, Leroy Merlin e C&C oferecem diferentes tipos de brita e cascalho.\n\nPara acessos de veículos, a abordagem padrão é um sistema de 3 camadas: 15 cm de rachão ou brita graduada como base, 10 cm de brita 1 como camada intermediária, e 5 cm de pedrisco ou pó de pedra como superfície de rolamento. Essa espessura total de 30 cm proporciona excelente drenagem e uma superfície estável. Para aterros simples, caminhos e canteiros, uma única camada de 8 a 10 cm é suficiente.",
  nextSteps: [
    { label: "Calculadora de Brita para Acesso", href: "/calculators/foundation/driveway-gravel-calculator/" },
    { label: "Calculadora de Laje de Concreto", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calculadora de Sapata de Concreto", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Remova toda a terra vegetal e material orgânico antes de colocar a brita — a matéria orgânica se decompõe e causa recalques.",
    "Instale geotêxtil (bidim) sobre o terreno compactado para evitar que a brita se misture com o solo abaixo.",
    "Espalhe a brita em camadas de 5 a 8 cm e compacte cada camada com placa vibratória antes de adicionar a próxima.",
    "Dê aos acessos e caminhos um leve caimento (2 a 3%) para que a água escorra para as bordas em vez de empoçar.",
    "Use meios-fios ou bordas de contenção (concreto, aço ou madeira tratada) para evitar que a brita migre para áreas adjacentes.",
  ],
  commonMistakes: [
    "Usar seixo rolado para acessos de veículos — não compacta e se desloca sob o peso dos pneus. Use pedra britada angular.",
    "Não remover a terra vegetal — grama e raízes sob a brita vão se decompor e criar afundamentos.",
    "Pular a etapa de compactação — brita sem compactar se desloca e forma sulcos rapidamente.",
    "Aplicar brita muito fina — menos de 8 cm não fornecerá cobertura nem suporte adequados e o solo aparecerá através da pedra.",
    "Não considerar os mínimos de entrega — a maioria dos fornecedores exige pedido mínimo de 5 a 8 m³ para entrega.",
  ],
  faqs: [
    {
      question: "Quanta brita eu preciso?",
      answer: "Multiplique o comprimento pela largura do seu projeto (em metros) para obter a área em m², depois multiplique pela espessura (em metros) para obter os metros cúbicos. Um metro cúbico de brita cobre aproximadamente 10 m² com 10 cm de espessura. Adicione 10% por desperdício, compactação e irregularidades do terreno. Exemplo: uma área de 6×6 metros com 10 cm de espessura precisa de aproximadamente 4 m³ (6 toneladas).",
    },
    {
      question: "Quanto pesa um metro cúbico de brita?",
      answer: "Um metro cúbico de brita pesa aproximadamente 1.400 a 1.800 kg (1,4 a 1,8 tonelada). O peso exato depende do tipo de rocha: brita 1 pesa em média 1,5 t/m³, brita graduada (BGS) é mais pesada com 1,8 t/m³, pedrisco pesa cerca de 1,3 t/m³, e seixo rolado pesa cerca de 1,6 t/m³. Brita úmida pode pesar 10 a 15% mais que seca.",
    },
    {
      question: "Quantas toneladas de brita eu preciso?",
      answer: "Calcule primeiro os metros cúbicos (comprimento × largura × espessura em metros), depois multiplique por 1,4 a 1,8 conforme o tipo de material. Exemplo: uma área de 3×6 metros com 10 cm de espessura dá 1,8 m³, que equivale a 2,5 a 3,2 toneladas. Sempre peça 10% a mais para compensar compactação e desperdício.",
    },
    {
      question: "Qual espessura de brita devo usar?",
      answer: "A espessura recomendada depende da aplicação: 5 a 8 cm para caminhos de jardim e canteiros decorativos, 10 cm para pátios e aterro geral, 15 a 20 cm para acessos de veículos (aplicada em múltiplas camadas), e 25 a 30 cm para áreas de tráfego pesado comercial. Sempre compacte cada camada antes de adicionar a próxima.",
    },
    {
      question: "Quanto custa a brita por metro cúbico?",
      answer: "Os preços da brita variam de R$ 80,00 a R$ 200,00 por metro cúbico dependendo do tipo. Brita 1 e brita graduada são as mais acessíveis a R$ 80,00-R$ 130,00 por m³. Pedrisco custa R$ 90,00-R$ 150,00 por m³. Seixo rolado decorativo custa R$ 150,00-R$ 350,00 por m³. Custos de frete adicionam R$ 200,00-R$ 600,00 por viagem. Pedreiras locais e lojas como Leroy Merlin oferecem as melhores opções.",
    },
    {
      question: "Quantos metros cúbicos de brita cabem em um caminhão?",
      answer: "Um caminhão basculante toco (2 eixos) carrega 5 a 6 m³ (7 a 10 toneladas) de brita. Um caminhão truck (3 eixos) carrega 8 a 10 m³ (12 a 18 toneladas). Uma carreta basculante carrega 14 a 18 m³ (21 a 32 toneladas). Para projetos pequenos, muitos fornecedores oferecem entregas parciais ou você pode transportar brita em uma caminhonete (cerca de 0,3 a 0,5 m³ por viagem).",
    },
  ],
};

export const drivewayGravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimativa inclui um fator de desperdício de 10%. As estimativas de custo são baseadas em médias regionais e variam significativamente por região, fornecedor e distância de entrega. O peso da brita varia conforme o tipo e a umidade. Sempre solicite orçamentos de fornecedores locais antes de fazer o pedido.",
  howToUse: [
    "Meça o comprimento total do seu acesso de veículos em metros.",
    "Insira a largura do acesso — 3 a 3,5 metros para um carro, 6 a 7 metros para acesso duplo.",
    "Insira a espessura da brita — 15 cm é padrão para acessos, 20 a 25 cm para tráfego de veículos pesados.",
    "Selecione o tipo de brita e clique em Calcular para obter metros cúbicos, toneladas e uma faixa de custo estimado.",
  ],
  materialInfo:
    "Um acesso de veículos em brita é uma das alternativas mais econômicas e práticas ao concreto moldado ou ao asfalto. Quando instalado corretamente com os materiais adequados e espessura suficiente, um acesso em brita pode durar de 10 a 15 anos com manutenção mínima.\n\nO melhor acesso em brita é construído em três camadas. A camada inferior (15 cm) usa rachão ou brita graduada (BGS 0/32 mm) para drenagem e estabilidade. A camada intermediária (10 cm) usa brita 1 (19 mm) como transição. A camada superior (5 a 10 cm) usa pedrisco ou pó de pedra compactável que se encaixa para formar uma superfície de rolamento firme. Cada camada deve ser espalhada e compactada separadamente.\n\nA pedra britada (brita 1 ou brita 0) é a mais popular para acessos porque suas arestas angulares se encaixam sob compactação, criando uma superfície estável. A brita graduada simples (BGS) é uma mistura de pedra britada e pó de pedra que compacta em uma superfície extremamente dura — é a escolha preferida para acessos de tráfego pesado. O seixo rolado tem boa aparência mas se desloca sob os pneus e não é recomendado como superfície principal de rolamento. O saibro compacta bem e proporciona uma aparência natural, popular em áreas rurais do Brasil.\n\nAcessos em brita custam de R$ 30,00 a R$ 80,00 por metro quadrado instalados, dependendo da espessura e do material. Um acesso típico de 3,5 × 15 metros para um carro custa de R$ 1.600,00 a R$ 4.200,00 apenas em materiais. A instalação profissional com terraplenagem, geotêxtil e compactação adiciona de R$ 30,00 a R$ 60,00 por m². A manutenção anual inclui rastelar a pedra deslocada de volta aos sulcos e adicionar uma camada de recarga de 3 a 5 cm a cada 2 a 3 anos. Pedreiras locais, casas de materiais e lojas como Leroy Merlin e C&C fornecem os materiais necessários.",
  nextSteps: [
    { label: "Calculadora de Brita", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Calculadora de Laje de Concreto", href: "/calculators/foundation/concrete-slab-calculator/" },
  ],
  installationTips: [
    "Terraplane o acesso com caimento de 2 a 3% afastando da casa para drenagem adequada — água empoçada sobre brita cria buracos.",
    "Instale geotêxtil (bidim) sobre o terreno terraplenado para evitar que a pedra se misture com o solo abaixo.",
    "Espalhe e compacte cada camada separadamente — não despeje toda a brita de uma vez.",
    "Use placa vibratória ou rolo compressor em cada camada para maximizar a densidade e estabilidade.",
    "Instale meios-fios ou bordas de contenção (concreto, aço ou madeira tratada) em ambos os lados para evitar que a brita migre para o jardim.",
    "Abaulte o centro do acesso ligeiramente mais alto (3 a 5 cm) para que a água escorra para ambos os lados.",
  ],
  commonMistakes: [
    "Usar seixo rolado como superfície de rolamento — sua forma arredondada não compacta e as pedras são arremessadas pelos pneus.",
    "Despejar brita diretamente sobre terra vegetal sem terraplenar — o solo orgânico se decompõe e causa afundamentos e mistura de lama.",
    "Aplicar apenas 5 a 8 cm de brita — isso é muito fino para tráfego de veículos e formará sulcos até o solo rapidamente.",
    "Pular a camada de geotêxtil — sem ela, a brita afunda em solo mole em 1 a 2 anos e você perde metade do seu material.",
    "Não compactar entre as camadas — brita solta se desloca e desenvolve sulcos e buracos em poucas semanas de uso.",
  ],
  faqs: [
    {
      question: "Quanta brita preciso para um acesso de veículos?",
      answer: "Um acesso padrão para um carro (3,5 metros de largura, 15 metros de comprimento, 15 cm de espessura) precisa de aproximadamente 8 m³ (12 toneladas) de brita. Um acesso duplo (7×15 metros a 15 cm de espessura) precisa de aproximadamente 16 m³ (24 toneladas). Essas quantidades incluem um fator de desperdício de 10% para compactação e espalhamento.",
    },
    {
      question: "Quanto custa um acesso de veículos em brita?",
      answer: "Os materiais para um acesso em brita custam de R$ 30,00 a R$ 80,00 por metro quadrado dependendo do tipo de brita e da espessura. Um acesso de 3,5×15 metros custa de R$ 1.600,00 a R$ 4.200,00 apenas em brita. A instalação profissional com terraplenagem, geotêxtil e compactação tipicamente custa de R$ 30,00 a R$ 60,00 por m², colocando o custo total instalado entre R$ 3.200,00 e R$ 7.500,00 para um acesso simples.",
    },
    {
      question: "Qual é a melhor brita para um acesso de veículos?",
      answer: "A pedra britada (brita 1 ou brita 0) é a melhor opção geral para acessos porque suas arestas angulares se encaixam ao compactar. A brita graduada simples (BGS) é ainda melhor para tráfego pesado — contém pó de pedra que une o agregado em uma superfície quase sólida. Use brita 1 para o corpo principal e BGS ou pedrisco para a camada de superfície.",
    },
    {
      question: "Qual espessura de brita para um acesso de veículos?",
      answer: "Um acesso em brita deve ter no mínimo 15 a 20 cm de espessura para veículos de passeio, aplicado em 2 a 3 camadas. Para veículos pesados (caminhões, máquinas), use 25 a 30 cm de espessura total. Cada camada deve ser compactada antes de aplicar a próxima. Uma camada fina de 5 a 8 cm formará sulcos até o solo em poucos meses.",
    },
    {
      question: "Quanto tempo dura um acesso de veículos em brita?",
      answer: "Um acesso em brita corretamente instalado dura de 10 a 15 anos antes de precisar de uma renovação maior. A manutenção anual inclui rastelar a pedra deslocada de volta aos pontos baixos e adicionar uma camada de recarga de 3 a 5 cm a cada 2 a 3 anos. A camada de base pode durar indefinidamente se foi instalada corretamente com geotêxtil e drenagem.",
    },
    {
      question: "Preciso de geotêxtil sob um acesso em brita?",
      answer: "Sim, o geotêxtil (bidim) é essencial sob um acesso em brita. Sem ele, a brita afunda em solo mole em 1 a 2 anos, e o solo sobe através da pedra criando uma superfície enlameada. Use geotêxtil tecido de grau comercial (bidim RT ou similar) — não a manta fina vendida para jardins e canteiros.",
    },
  ],
};

// ─── FLOOR FRAMING (ESTRUTURA DE PISO) ─────────────────────────────────────

export const rimJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o perímetro do piso (soma de todos os lados) em metros.",
    "Selecione o comprimento da peça — comprimentos comerciais comuns são 3,05 m, 3,66 m e 4,88 m.",
    "Clique em Calcular Materiais para obter metros lineares totais e quantidade de peças.",
  ],
  materialInfo:
    "A viga perimetral (rim joist ou band joist) é a peça de madeira que corre ao longo da borda externa do sistema de piso, perpendicular às vigas de piso. Ela fecha a extremidade das vigas, transfere cargas verticais para a fundação e proporciona resistência lateral ao sistema de piso. As dimensões mais comuns são 38x184 mm, 38x235 mm e 38x286 mm, correspondendo à altura das vigas de piso. No Brasil, a madeira para estrutura pode ser encontrada em madeireiras especializadas em wood frame, como as que fornecem pinus tratado autoclavado. O custo varia de R$ 30,00 a R$ 80,00 por metro linear dependendo da seção e espécie. É essencial que a viga perimetral seja de madeira tratada quando estiver a menos de 30 cm do solo.",
  nextSteps: [
    { label: "Calculadora de Vigas de Piso", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculadora de Baldrame em Madeira Tratada", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calculadora de Painéis OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Instale a viga perimetral antes das vigas de piso — ela define o perímetro e o nível do sistema de piso.",
    "Pregue a viga perimetral ao baldrame com pregos ardox de 90 mm a cada 40 cm.",
    "Certifique-se de que todas as juntas caiam sobre um apoio (baldrame ou viga principal).",
  ],
  commonMistakes: [
    "Usar madeira com seção menor que as vigas de piso — a viga perimetral deve ter a mesma altura das vigas.",
    "Não tratar as juntas cortadas com preservante — as extremidades expostas são vulneráveis a umidade e cupins.",
  ],
  faqs: [
    {
      question: "Qual dimensão usar para a viga perimetral?",
      answer: "A viga perimetral deve ter a mesma altura das vigas de piso. Se as vigas são 38x184 mm, use viga perimetral de 38x184 mm. Para vigas de 38x235 mm, use perimetral de 38x235 mm.",
    },
    {
      question: "A viga perimetral precisa ser de madeira tratada?",
      answer: "Sim, quando estiver a menos de 30 cm do nível do solo ou quando em contato direto com a fundação. Use madeira tratada com CCB conforme ABNT NBR 16143.",
    },
    {
      question: "Quantas peças de viga perimetral preciso?",
      answer: "Divida o perímetro total do piso pelo comprimento da peça escolhida e adicione 10% para desperdício e emendas. Uma casa de 10x12 m tem 44 m de perímetro — com peças de 3,66 m, precisa de 13 peças mais desperdício.",
    },
  ],
};

export const floorJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça a largura do cômodo (vão das vigas) em metros.",
    "Selecione o espaçamento entre eixos — 40 cm ou 60 cm são os padrões.",
    "Clique em Calcular Materiais para obter a quantidade de vigas necessárias.",
  ],
  materialInfo:
    "As vigas de piso são os elementos horizontais que suportam o contrapiso e transferem as cargas do piso para as paredes ou vigas principais. O espaçamento padrão entre eixos é de 40 cm para a maioria das aplicações residenciais, permitindo vãos maiores e pisos mais rígidos. O espaçamento de 60 cm é permitido para cargas mais leves e reduz a quantidade de madeira em 33%. As seções mais comuns são 38x184 mm para vãos de até 3,5 m e 38x235 mm para vãos de até 4,5 m, usando madeira de grau estrutural. No Brasil, o sistema de wood frame utiliza pinus tratado autoclavado para as vigas de piso. O custo médio é de R$ 25,00 a R$ 60,00 por metro linear conforme a seção.",
  nextSteps: [
    { label: "Calculadora de Viga Perimetral", href: "/calculators/floor-framing/rim-joist-calculator/" },
    { label: "Calculadora de Travamento", href: "/calculators/floor-framing/bridging-calculator/" },
    { label: "Calculadora de Painéis OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Instale as vigas com a coroa (curvatura natural) voltada para cima.",
    "Pregue cada viga na viga perimetral e no baldrame com pregos ardox de 90 mm.",
    "Use conectores metálicos (cantoneiras) para conexões estruturais onde requerido pelo projeto.",
  ],
  commonMistakes: [
    "Instalar vigas com a coroa para baixo — isso cria um piso com depressão no centro.",
    "Exceder o vão máximo para a seção da viga — consulte as tabelas de vãos da ABNT NBR 7190.",
    "Não bloquear as vigas no meio do vão — vigas longas sem travamento podem tombar lateralmente.",
  ],
  faqs: [
    {
      question: "Quantas vigas de piso preciso?",
      answer: "Divida o comprimento do cômodo pelo espaçamento entre eixos (em metros) e adicione 1. Para um cômodo de 6 m com espaçamento de 40 cm: 6 / 0,40 + 1 = 16 vigas. Adicione 10% de desperdício.",
    },
    {
      question: "Devo usar espaçamento de 40 cm ou 60 cm?",
      answer: "Use 40 cm para pisos que receberão revestimento cerâmico, cargas pesadas ou vãos longos. Use 60 cm para pisos leves com contrapisos de OSB e vãos curtos. Quando em dúvida, 40 cm é a opção mais segura.",
    },
    {
      question: "Qual seção de viga para um vão de 4 metros?",
      answer: "Para um vão de 4 m com espaçamento de 40 cm, use vigas de no mínimo 38x235 mm em pinus de grau estrutural. Consulte as tabelas de vãos da ABNT NBR 7190 para sua espécie e grau de madeira específicos.",
    },
  ],
};

export const bridgingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira o vão das vigas de piso em metros.",
    "Insira o número de vigas.",
    "Clique em Calcular Materiais para obter o número de filas de travamento e peças necessárias.",
  ],
  materialInfo:
    "O travamento (contraventamento ou bloqueio) é instalado entre as vigas de piso para evitar o tombamento lateral e distribuir as cargas concentradas entre vigas adjacentes. A norma exige uma fila de travamento para vãos de até 4 m e duas filas para vãos maiores. Existem dois tipos: blocos sólidos (peças do mesmo tamanho da viga cortadas para encaixar entre elas) e cruzados (peças de 25x50 mm ou 38x38 mm instaladas em X). Os blocos sólidos são mais simples de instalar e proporcionam suporte para bordas de painéis de contrapiso.",
  nextSteps: [
    { label: "Calculadora de Vigas de Piso", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculadora de Adesivo de Contrapiso", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Calculadora de Painéis OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Instale o travamento no meio do vão das vigas para máxima efetividade.",
    "Para vãos maiores que 4 m, instale duas filas de travamento nos terços do vão.",
    "Pregue os blocos sólidos com pregos ardox de 90 mm — dois pregos de cada lado.",
  ],
  commonMistakes: [
    "Omitir o travamento — vigas longas sem bloqueio podem tombar e perder capacidade de carga.",
    "Instalar o travamento fora do centro do vão — o efeito estabilizador é máximo no meio do vão.",
  ],
  faqs: [
    {
      question: "Quando preciso de travamento?",
      answer: "Sempre instale travamento quando o vão das vigas exceder 2,5 m. Para vãos de até 4 m, uma fila no centro. Para vãos maiores, duas filas distribuídas nos terços. A norma ABNT NBR 7190 especifica os requisitos.",
    },
    {
      question: "Blocos sólidos ou cruzados?",
      answer: "Blocos sólidos (peças do mesmo tamanho da viga) são mais fáceis de instalar e fornecem suporte para bordas de painéis. Cruzados (em X) permitem passagem de tubulações. Ambos são estruturalmente adequados.",
    },
  ],
};

export const subfloorAdhesiveCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira a área total do piso em metros quadrados.",
    "Selecione o tipo de tubo de adesivo — tubos de 300 ml ou 828 ml.",
    "Clique em Calcular Materiais para ver quantos tubos precisa.",
  ],
  materialInfo:
    "O adesivo de contrapiso é aplicado no topo das vigas de piso antes da instalação dos painéis de contrapiso (OSB ou compensado) para criar uma ligação permanente que elimina rangidos e aumenta a rigidez do piso. O adesivo de poliuretano ou PVA estrutural preenche pequenos vazios entre o painel e a viga, distribuindo as cargas de forma mais uniforme. No Brasil, as marcas mais comuns incluem Henkel (Loctite PL Premium), Titebond e adesivos de PVA estrutural disponíveis em lojas como Leroy Merlin e casas de materiais de construção. O custo é de R$ 15,00 a R$ 40,00 por tubo de 300 ml, que cobre aproximadamente 8 metros lineares de viga.",
  nextSteps: [
    { label: "Calculadora de Painéis OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Calculadora de Vigas de Piso", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculadora de Viga Perimetral", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Aplique o adesivo em cordão contínuo de 6 mm sobre cada viga antes de colocar o painel.",
    "Trabalhe em seções — aplique adesivo apenas nas vigas que serão cobertas nos próximos 10 minutos.",
    "Pressione os painéis firmemente contra as vigas e fixe com parafusos enquanto o adesivo está fresco.",
  ],
  commonMistakes: [
    "Aplicar adesivo demais — cordões grossos desperdiçam material e dificultam o nivelamento do painel.",
    "Deixar o adesivo formar película antes de colocar o painel — a película impede a adesão.",
  ],
  faqs: [
    {
      question: "Quantos tubos de adesivo preciso?",
      answer: "Um tubo de 300 ml cobre aproximadamente 8 metros lineares de viga. Para um piso de 30 m² com vigas a cada 40 cm, você precisa de aproximadamente 8 a 10 tubos de 300 ml.",
    },
    {
      question: "O adesivo de contrapiso elimina rangidos?",
      answer: "Sim. O adesivo cria uma ligação rígida entre o painel e a viga, eliminando o movimento relativo que causa rangidos. Combine adesivo com parafusos (não pregos) para pisos completamente silenciosos.",
    },
  ],
};

export const osbPanelCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira o comprimento e a largura da área do piso em metros.",
    "A calculadora usa painéis padrão de 1,22 x 2,44 m.",
    "Clique em Calcular Materiais para obter a quantidade de painéis, incluindo desperdício.",
  ],
  materialInfo:
    "Os painéis OSB (Oriented Strand Board) são chapas de madeira industrializada fabricadas com tiras de madeira orientadas e coladas com resina, amplamente usadas como contrapiso, forro de telhado e revestimento de parede em construções wood frame. O painel padrão mede 1,22 x 2,44 m (2,97 m²) e está disponível em espessuras de 9,5 mm, 11,1 mm, 15 mm e 18 mm. Para contrapiso, use 18 mm com sistema macho-e-fêmea. No Brasil, as principais marcas são LP (Louisiana-Pacific), Masisa e Arauco. O custo é de R$ 60,00 a R$ 150,00 por painel dependendo da espessura e marca. Os painéis devem ser instalados com a marcação de classificação voltada para cima, perpendiculares às vigas de piso, com juntas escalonadas entre filas.",
  nextSteps: [
    { label: "Calculadora de Vigas de Piso", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculadora de Adesivo de Contrapiso", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Calculadora de Viga Perimetral", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Instale os painéis com o eixo maior perpendicular às vigas de piso.",
    "Deixe 3 mm de folga entre painéis para expansão por umidade.",
    "Escalone as juntas entre filas por pelo menos uma posição de viga.",
    "Fixe com parafusos ou pregos ardox a cada 15 cm nas bordas e 30 cm no campo.",
  ],
  commonMistakes: [
    "Instalar painéis paralelos às vigas — a orientação perpendicular é obrigatória para resistência estrutural.",
    "Não deixar folga de expansão — painéis encostados se empenarão ao absorver umidade.",
    "Usar espessura insuficiente — 18 mm é o mínimo para contrapiso com vigas a 40 cm entre eixos.",
  ],
  faqs: [
    {
      question: "Quantos painéis OSB preciso?",
      answer: "Divida a área total em m² por 2,97 (área de um painel padrão de 1,22 x 2,44 m), depois multiplique por 1,10 para 10% de desperdício. Para um piso de 30 m²: (30 × 1,10) / 2,97 = 12 painéis.",
    },
    {
      question: "OSB ou compensado para contrapiso?",
      answer: "Ambos são estruturalmente adequados. O OSB custa 20-30% menos e tem resistência ao cisalhamento superior. O compensado é mais resistente à umidade e dimensionalmente mais estável quando molhado. Para contrapiso em condições normais, o OSB é a escolha mais econômica.",
    },
    {
      question: "Qual espessura de OSB para contrapiso?",
      answer: "Use OSB de 18 mm para vigas a 40 cm entre eixos. Para espaçamento de 60 cm, use 22 mm ou mais. Os painéis devem ser de grau estrutural com classificação para uso como contrapiso.",
    },
  ],
};

// ─── WALL FRAMING (ESTRUTURA DE PAREDES) ────────────────────────────────────

export const studCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o comprimento total da parede em metros.",
    "Selecione o espaçamento entre eixos — 40 cm ou 60 cm.",
    "Clique em Calcular Materiais para obter a quantidade de montantes, incluindo extras para cantos e aberturas.",
  ],
  materialInfo:
    "Os montantes são os elementos verticais da estrutura de parede que suportam as cargas do telhado e dos andares superiores e transferem essas cargas para a fundação. O espaçamento padrão entre eixos é de 40 cm para paredes portantes e 60 cm para paredes divisórias não portantes. As seções mais comuns são 38x89 mm para paredes internas e 38x140 mm para paredes externas (que permitem maior espessura de isolamento). No Brasil, o sistema wood frame utiliza pinus tratado autoclavado e as peças são encontradas em fornecedores especializados. Cada parede requer montantes adicionais para cantos (3 montantes por canto), aberturas de portas (montantes king e jack) e janelas (montantes king, jack e vigas de verga). Adicione 10-15% ao cálculo básico para essas peças extras.",
  nextSteps: [
    { label: "Calculadora de Guia Inferior", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Calculadora de Guia Superior", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Calculadora de Vergas", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Monte os painéis de parede deitados no piso e levante quando prontos — é mais preciso e eficiente.",
    "Marque o espaçamento nos guias inferior e superior antes de pregar os montantes.",
    "Use pregos ardox de 90 mm — dois pregos de cada lado de cada montante.",
    "Verifique o prumo de cada montante antes de pregar o revestimento.",
  ],
  commonMistakes: [
    "Esquecer os montantes extras para cantos — cada canto precisa de 3 montantes para suporte adequado de acabamento.",
    "Não duplicar montantes ao lado de aberturas — as aberturas de portas e janelas requerem montantes king e jack.",
    "Usar espaçamento de 60 cm em paredes portantes — as paredes portantes devem usar espaçamento de 40 cm entre eixos.",
  ],
  faqs: [
    {
      question: "Quantos montantes preciso para uma parede de 6 metros?",
      answer: "Para espaçamento de 40 cm: 6 / 0,40 + 1 = 16 montantes. Adicione 3 montantes por canto e extras para aberturas. Com 10% de desperdício, peça 19-20 montantes para uma parede simples de 6 m.",
    },
    {
      question: "Devo usar espaçamento de 40 ou 60 cm?",
      answer: "Use 40 cm para paredes portantes externas e internas. Use 60 cm para divisórias não portantes onde o código permitir — isso economiza até 33% em montantes.",
    },
    {
      question: "Qual seção de montante usar?",
      answer: "Use 38x89 mm para paredes internas e 38x140 mm para paredes externas. As paredes externas mais largas permitem maior espessura de isolamento térmico. Em regiões frias do Sul do Brasil, paredes de 38x140 mm são recomendadas.",
    },
    {
      question: "Quantos montantes extras para uma porta?",
      answer: "Cada abertura de porta requer 2 montantes king (altura total) mais 2 montantes jack (até a verga), totalizando 4 montantes extras por porta além dos que seriam necessários sem a abertura.",
    },
  ],
};

export const bottomPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o comprimento total de cada parede em metros.",
    "Some todos os comprimentos para o total de guia inferior.",
    "Clique em Calcular Materiais para obter metros lineares e quantidade de peças.",
  ],
  materialInfo:
    "A guia inferior (bottom plate ou sole plate) é a peça horizontal de madeira que fica na base da parede, sobre a qual os montantes são pregados. É fixada ao contrapiso ou ao baldrame com pregos ou parafusos. Quando em contato com concreto ou alvenaria, deve ser de madeira tratada com CCB conforme ABNT NBR 16143. As seções padrão são 38x89 mm e 38x140 mm, correspondendo à seção dos montantes. As guias inferiores são cortadas nas aberturas de portas após a montagem do painel de parede.",
  nextSteps: [
    { label: "Calculadora de Montantes", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculadora de Guia Superior", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Calculadora de Vergas", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Use madeira tratada para guias em contato com concreto ou dentro de 30 cm do solo.",
    "Fixe a guia ao baldrame ou contrapiso com pregos ardox de 90 mm ou parafusos de 75 mm a cada 40 cm.",
    "Marque as posições dos montantes na guia antes de montar o painel.",
  ],
  commonMistakes: [
    "Usar madeira sem tratamento em contato com concreto — a umidade do concreto apodrecerá a madeira.",
    "Não cortar a guia nas aberturas de portas — a guia deve ser removida na soleira das portas após a montagem.",
  ],
  faqs: [
    {
      question: "A guia inferior precisa ser de madeira tratada?",
      answer: "Sim, quando em contato direto com concreto, alvenaria ou quando estiver a menos de 30 cm do nível do solo. Use madeira tratada com CCB no Brasil.",
    },
    {
      question: "Qual seção usar para a guia inferior?",
      answer: "A guia inferior deve ter a mesma seção dos montantes. Para paredes com montantes de 38x89 mm, use guia de 38x89 mm. Para montantes de 38x140 mm, use guia de 38x140 mm.",
    },
  ],
};

export const topPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o comprimento total de cada parede em metros.",
    "Lembre-se de que a guia superior é dupla — multiplique por 2.",
    "Clique em Calcular Materiais para obter metros lineares e quantidade de peças.",
  ],
  materialInfo:
    "A guia superior (top plate) é a peça horizontal dupla de madeira no topo da parede. A guia dupla é obrigatória para paredes portantes — a segunda guia amarra os cantos e interseções de paredes, proporcionando continuidade estrutural. As juntas da primeira e segunda guias devem ser escalonadas em pelo menos 1,20 m para transferência de carga adequada. As seções padrão são 38x89 mm e 38x140 mm, correspondendo aos montantes. Sistemas de construção avançada (advanced framing) permitem guia superior simples quando conectores metálicos são usados nas interseções.",
  nextSteps: [
    { label: "Calculadora de Montantes", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculadora de Guia Inferior", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Calculadora de Vergas", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Instale a primeira guia com os montantes durante a montagem do painel.",
    "Adicione a segunda guia após levantar o painel, escalonando as juntas em relação à primeira.",
    "Sobreponha a segunda guia nos cantos e interseções de paredes para amarração estrutural.",
  ],
  commonMistakes: [
    "Alinhar as juntas da primeira e segunda guia — as juntas devem ser escalonadas em pelo menos 1,20 m.",
    "Omitir a segunda guia em paredes portantes — a guia dupla é obrigatória para transferência de carga.",
  ],
  faqs: [
    {
      question: "Por que a guia superior é dupla?",
      answer: "A guia dupla amarra os cantos e interseções de paredes, distribui as cargas do telhado e permite que as juntas sejam escalonadas para continuidade estrutural. Sem a segunda guia, as juntas criam pontos fracos na transferência de carga.",
    },
    {
      question: "Quanta madeira preciso para a guia superior?",
      answer: "Multiplique o comprimento total de todas as paredes por 2 (para guia dupla), depois divida pelo comprimento das peças disponíveis. Adicione 10% para desperdício e sobreposições em cantos.",
    },
  ],
};

export const headerCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça a largura da abertura (porta ou janela) em metros.",
    "Selecione a seção da verga conforme a largura da abertura.",
    "Clique em Calcular Materiais para obter o comprimento total da verga.",
  ],
  materialInfo:
    "As vergas (headers) são vigas horizontais instaladas acima das aberturas de portas e janelas em paredes portantes para transferir as cargas do telhado e do andar superior ao redor da abertura para os montantes king e jack adjacentes. A seção da verga depende do vão da abertura: aberturas de até 1,20 m usam vergas de 38x140 mm duplas, aberturas de 1,20 a 2,40 m usam 38x184 mm duplas, e aberturas maiores que 2,40 m podem requerer 38x235 mm duplas ou vigas LVL. No Brasil, além da madeira sólida, podem ser usadas vigas de madeira laminada colada (MLC) da Battistella ou LP para vãos maiores. A verga deve se estender pelo menos 40 mm além de cada lado da abertura para apoiar nos montantes jack.",
  nextSteps: [
    { label: "Calculadora de Montantes", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculadora de Guia Superior", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Calculadora de Revestimento Estrutural", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "A verga se apoia nos montantes jack — certifique-se de que estejam firmes e aprumados antes de instalar a verga.",
    "Use espaçador de compensado entre as duas peças da verga dupla para igualar a espessura total aos montantes.",
    "Pregue a verga nos montantes king com pregos ardox de 90 mm — pelo menos 4 pregos de cada lado.",
  ],
  commonMistakes: [
    "Subdimensionar a verga — use as tabelas de vãos para determinar a seção correta para cada abertura.",
    "Esquecer os montantes jack — a verga não deve apoiar diretamente na guia inferior sem montantes de suporte.",
    "Não colocar espaçador entre vergas duplas — sem o espaçador, a verga fica mais fina que a parede.",
  ],
  faqs: [
    {
      question: "Qual seção de verga para cada abertura?",
      answer: "Para aberturas até 1,20 m: verga dupla de 38x140 mm. Para 1,20 a 2,40 m: dupla de 38x184 mm. Para 2,40 a 3,60 m: dupla de 38x235 mm. Aberturas maiores podem requerer vigas LVL ou MLC conforme cálculo estrutural.",
    },
    {
      question: "Paredes divisórias precisam de vergas?",
      answer: "Paredes divisórias não portantes não exigem vergas estruturais. Uma peça plana de 38x89 mm acima da abertura é suficiente para suportar o acabamento de drywall.",
    },
  ],
};

export const exteriorSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça a área total de paredes externas em metros quadrados (comprimento × altura).",
    "Desconte as áreas de portas e janelas se desejado.",
    "Clique em Calcular Materiais para obter a quantidade de chapas de OSB ou compensado.",
  ],
  materialInfo:
    "O revestimento estrutural externo (sheathing) é a chapa de OSB ou compensado fixada à face externa dos montantes, proporcionando resistência ao cisalhamento (contraventamento), suporte para o revestimento de acabamento e barreira contra infiltrações. Os painéis padrão medem 1,22 × 2,44 m em espessuras de 9,5 mm (revestimento apenas) e 11,1 mm (revestimento estrutural). No Brasil, os painéis OSB da LP e Masisa são os mais usados em construções wood frame. O custo é de R$ 50,00 a R$ 100,00 por painel de 9,5 mm e R$ 70,00 a R$ 130,00 por painel de 11,1 mm. Os painéis são instalados com o eixo maior vertical, escalonando as juntas horizontais, e fixados com pregos ardox de 60 mm a cada 15 cm nas bordas e 30 cm no campo, conforme ABNT NBR 7190.",
  nextSteps: [
    { label: "Calculadora de Montantes", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculadora de Manta Hidrófuga", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calculadora de Revestimento Vinílico", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
  ],
  installationTips: [
    "Instale os painéis com o eixo maior na vertical para máxima rigidez ao cisalhamento.",
    "Deixe 3 mm de folga entre painéis para expansão.",
    "Escalone as juntas verticais entre filas — nunca alinhe juntas em sequência vertical.",
    "Pregue a cada 15 cm nas bordas e 30 cm no campo com pregos ardox de 60 mm.",
  ],
  commonMistakes: [
    "Pregar com espaçamento excessivo — mais de 15 cm nas bordas reduz a resistência ao cisalhamento.",
    "Instalar painéis molhados — painéis OSB absorvem água e podem inchar nas bordas. Armazene em local coberto.",
    "Esquecer a folga de expansão — painéis encostados podem empenar e estufar.",
  ],
  faqs: [
    {
      question: "Quantas chapas de revestimento preciso?",
      answer: "Divida a área total de paredes externas por 2,97 m² (área de um painel padrão) e multiplique por 1,10 para 10% de desperdício. Para uma casa de 100 m² com perímetro de 40 m e paredes de 2,70 m: 108 m² / 2,97 = 37 painéis × 1,10 = 41 painéis.",
    },
    {
      question: "OSB ou compensado para revestimento?",
      answer: "Ambos são aprovados por norma. O OSB custa 20-30% menos e tem melhor resistência ao cisalhamento. O compensado é mais resistente à umidade. Para revestimento externo protegido por manta hidrófuga, o OSB é a escolha mais econômica.",
    },
  ],
};

// ─── ROOFING (TELHADO) ──────────────────────────────────────────────────────

export const trussCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o comprimento do edifício em metros.",
    "Selecione o espaçamento entre eixos — 60 cm é padrão para tesouras.",
    "Clique em Calcular Materiais para obter a quantidade de tesouras necessárias.",
  ],
  materialInfo:
    "As tesouras (treliças) de telhado são estruturas triangulares pré-fabricadas que suportam a cobertura e transferem as cargas do telhado para as paredes externas. São projetadas por engenheiro e fabricadas em indústrias especializadas com madeira de pinus e chapas metálicas conectoras (gang-nail plates). No Brasil, fabricantes como LP, Tecverde e empresas regionais produzem tesouras para wood frame. O espaçamento padrão é de 60 cm entre eixos para tesouras residenciais. Cada tesoura é projetada para o vão, a inclinação e as cargas específicas do projeto — nunca modifique uma tesoura cortando ou furando elementos sem aprovação do engenheiro.",
  nextSteps: [
    { label: "Calculadora de Caibros", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Calculadora de Forro do Telhado", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calculadora de Telhas", href: "/calculators/roofing/shingle-calculator/" },
  ],
  installationTips: [
    "Instale as tesouras com a marcação do fabricante voltada para o mesmo lado.",
    "Fixe cada tesoura na guia superior com conectores metálicos tipo hurricane tie.",
    "Instale contraventamento temporário diagonal durante a montagem para evitar tombamento.",
    "Verifique o prumo e o espaçamento de cada tesoura antes de fixar o contraventamento permanente.",
  ],
  commonMistakes: [
    "Cortar ou furar elementos da tesoura — isso invalida o projeto estrutural e pode causar colapso.",
    "Não instalar contraventamento diagonal — tesouras sem contraventamento tombam em dominó durante a montagem.",
    "Espaçar tesouras além do projeto — o espaçamento incorreto pode sobrecarregar as chapas de cobertura e causar deflexão.",
  ],
  faqs: [
    {
      question: "Quantas tesouras preciso?",
      answer: "Divida o comprimento do edifício pelo espaçamento (0,60 m) e adicione 1. Para um edifício de 12 m: 12 / 0,60 + 1 = 21 tesouras. Adicione 1-2 extras para tesouras de empena.",
    },
    {
      question: "Qual o custo de uma tesoura?",
      answer: "O custo varia de R$ 200,00 a R$ 800,00 por tesoura dependendo do vão e complexidade. Tesouras para vãos de até 8 m custam menos que tesouras para vãos de 10-12 m. Solicite orçamento com plantas ao fabricante.",
    },
  ],
};

export const rafterCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o comprimento do edifício em metros.",
    "Selecione o espaçamento entre eixos — 40 cm ou 60 cm.",
    "Clique em Calcular Materiais para obter a quantidade de caibros necessários.",
  ],
  materialInfo:
    "Os caibros são elementos estruturais inclinados que suportam diretamente as ripas e telhas do telhado. Diferentemente das tesouras, os caibros são peças individuais cortadas no local. São apoiados na cumeeira (topo) e na guia superior da parede (base). As seções comuns são 38x140 mm para vãos curtos e 38x184 mm ou 38x235 mm para vãos maiores. No Brasil, para telhados tradicionais, os caibros de pinus tratado ou eucalipto são os mais utilizados. O espaçamento padrão de 40 cm é usado para telhas pesadas (cerâmica, concreto) e 60 cm para telhas leves (metálicas, shingle).",
  nextSteps: [
    { label: "Calculadora de Cumeeira", href: "/calculators/roofing/ridge-board-calculator/" },
    { label: "Calculadora de Forro do Telhado", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calculadora de Telhas", href: "/calculators/roofing/shingle-calculator/" },
  ],
  installationTips: [
    "Corte o bico de pássaro (birdsmouth) no apoio da parede para que o caibro se assente corretamente na guia.",
    "Fixe cada caibro à cumeeira com conectores metálicos — nunca apenas com pregos ao sesgo.",
    "Instale caibros em pares opostos para equilibrar as forças na cumeeira.",
  ],
  commonMistakes: [
    "Subdimensionar caibros — consulte as tabelas de vãos da ABNT NBR 7190 para sua espécie de madeira.",
    "Não conectar caibros à parede — use conectores tipo hurricane tie para resistência ao vento.",
  ],
  faqs: [
    {
      question: "Quantos caibros preciso?",
      answer: "Para cada lado do telhado: divida o comprimento pelo espaçamento e adicione 1. Para um telhado de duas águas de 10 m de comprimento a 60 cm: (10 / 0,60 + 1) × 2 = 36 caibros.",
    },
    {
      question: "Qual seção de caibro para meu vão?",
      answer: "Para vãos até 3 m: 38x140 mm. Para 3-4,5 m: 38x184 mm. Para 4,5-6 m: 38x235 mm. Estes valores assumem pinus de grau estrutural com espaçamento de 60 cm. Consulte as tabelas de vãos para sua espécie específica.",
    },
  ],
};

export const ridgeBoardCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o comprimento total da cumeeira em metros.",
    "Selecione a seção da cumeeira e o comprimento das peças.",
    "Clique em Calcular Materiais para obter a quantidade de peças.",
  ],
  materialInfo:
    "A cumeeira (ridge board) é a peça horizontal no ponto mais alto do telhado, onde os caibros de ambos os lados se encontram. Funciona como suporte de alinhamento para os caibros e deve ter pelo menos a mesma profundidade que os caibros para apoio adequado. As seções comuns são 38x184 mm, 38x235 mm e 38x286 mm. Para vãos grandes ou telhados sem tirante, pode-se usar uma viga de cumeeira (ridge beam) estrutural de madeira laminada colada (MLC). No Brasil, peças de pinus de grau estrutural são as mais usadas.",
  nextSteps: [
    { label: "Calculadora de Caibros", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Calculadora de Forro do Telhado", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calculadora de Tesouras", href: "/calculators/roofing/truss-calculator/" },
  ],
  installationTips: [
    "A cumeeira deve ter profundidade igual ou maior que os caibros.",
    "Emende as peças de cumeeira sobre um par de caibros para transferência de carga adequada.",
    "Apoie temporariamente a cumeeira com escoras verticais durante a instalação dos caibros.",
  ],
  commonMistakes: [
    "Usar cumeeira menor que os caibros — a profundidade da cumeeira deve ser igual ou maior que a dos caibros.",
    "Emendar a cumeeira entre caibros — as emendas devem cair sobre pares de caibros opostos.",
  ],
  faqs: [
    {
      question: "Quantas peças de cumeeira preciso?",
      answer: "Divida o comprimento do telhado pelo comprimento da peça e adicione 10% para desperdício e emendas. Para um telhado de 12 m com peças de 3,66 m: 12 / 3,66 = 4 peças × 1,10 = 5 peças.",
    },
    {
      question: "Qual a diferença entre cumeeira e viga de cumeeira?",
      answer: "A cumeeira (ridge board) é um elemento não estrutural que alinha os caibros. A viga de cumeeira (ridge beam) é um elemento estrutural que suporta o peso do telhado sem necessidade de tirantes. A viga de cumeeira requer cálculo estrutural e pode ser de MLC.",
    },
  ],
};

export const roofSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira as dimensões da planta do telhado em metros.",
    "Selecione a inclinação do telhado para calcular a área real.",
    "Clique em Calcular Materiais para obter a quantidade de painéis OSB necessários.",
  ],
  materialInfo:
    "O forro de telhado (roof sheathing) consiste em painéis OSB ou compensado fixados sobre os caibros ou tesouras, formando a base para a impermeabilização e as telhas. Os painéis padrão medem 1,22 × 2,44 m em espessura de 11,1 mm ou 15 mm. A área real do telhado é maior que a área da planta devido à inclinação — use o multiplicador de inclinação para calcular. No Brasil, os painéis OSB da LP são os mais usados em construções wood frame. Para telhas cerâmicas ou de concreto (mais pesadas), use OSB de 15 mm ou compensado estrutural.",
  nextSteps: [
    { label: "Calculadora de Telhas", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculadora de Manta Impermeabilizante", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calculadora de Inclinação do Telhado", href: "/calculators/roofing/roof-pitch-calculator/" },
  ],
  installationTips: [
    "Instale os painéis perpendiculares aos caibros/tesouras com o eixo maior ao longo da inclinação.",
    "Escalone as juntas entre filas para continuidade estrutural.",
    "Deixe 3 mm de folga entre painéis para expansão.",
    "Use pregos ardox de 60 mm a cada 15 cm nas bordas e 30 cm no campo.",
  ],
  commonMistakes: [
    "Usar espessura insuficiente — 11,1 mm é o mínimo para caibros/tesouras a 60 cm entre eixos.",
    "Instalar painéis molhados — o OSB incha nas bordas quando molhado. Proteja da chuva.",
    "Alinhar juntas entre filas — juntas alinhadas criam pontos fracos na estrutura.",
  ],
  faqs: [
    {
      question: "Quantos painéis de forro preciso?",
      answer: "Calcule a área real do telhado (área da planta × multiplicador de inclinação), divida por 2,97 m² (área do painel) e multiplique por 1,10 para desperdício. Telhados com mais recortes precisam de 15% de desperdício.",
    },
    {
      question: "OSB ou compensado para forro de telhado?",
      answer: "Para a maioria das aplicações residenciais, o OSB de 11,1 mm é adequado e mais econômico. O compensado é preferido em regiões com alta umidade ou quando a cobertura não será instalada imediatamente.",
    },
  ],
};

export const shingleCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira a área do telhado em metros quadrados (área real, considerando inclinação).",
    "Selecione o tipo de telha — cerâmica, concreto, shingle asfáltico ou metálica.",
    "Clique em Calcular Materiais para obter a quantidade de telhas ou pacotes necessários.",
  ],
  materialInfo:
    "As telhas são o revestimento final do telhado que protege a edificação contra chuva, sol e intempéries. No Brasil, as opções mais populares são: telhas cerâmicas (tipo colonial, romana, portuguesa — marcas como Eternit, Tegula e Santa Gertrudes), telhas de concreto (Tégula, Brasilit), telhas metálicas (Brasilit, Calhas Forte), e telhas shingle asfálticas (IKO, GAF — mais usadas em construções wood frame). As telhas cerâmicas são as mais tradicionais no Brasil, com custo de R$ 1,50 a R$ 4,00 por unidade e consumo de 12 a 16 telhas por m² conforme o modelo. As telhas shingle asfálticas custam R$ 80,00 a R$ 150,00 por pacote (que cobre aproximadamente 3 m²) e são a opção padrão para construções wood frame. As telhas metálicas custam R$ 50,00 a R$ 120,00 por m² e são populares para grandes coberturas e galpões.",
  nextSteps: [
    { label: "Calculadora de Manta Impermeabilizante", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calculadora de Forro do Telhado", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calculadora de Área do Telhado", href: "/calculators/roofing/roof-area-calculator/" },
  ],
  installationTips: [
    "Comece a instalação pela beirada inferior do telhado e trabalhe para cima em direção à cumeeira.",
    "Sobreponha as fileiras conforme especificação do fabricante — tipicamente 15-20 cm para telhas cerâmicas.",
    "Instale a manta impermeabilizante antes das telhas para proteção adicional contra infiltrações.",
    "Use pregos ou parafusos específicos para cada tipo de telha conforme recomendação do fabricante.",
  ],
  commonMistakes: [
    "Não considerar a inclinação mínima do telhado para o tipo de telha escolhido — cada tipo tem inclinação mínima.",
    "Esquecer da manta impermeabilizante — a manta é obrigatória sob telhas para proteção contra infiltrações.",
    "Comprar quantidade insuficiente — sempre adicione 10-15% para cortes, quebras e desperdício.",
  ],
  faqs: [
    {
      question: "Quantas telhas preciso por metro quadrado?",
      answer: "Depende do tipo: telhas cerâmicas coloniais usam 12-16 unidades/m², telhas de concreto usam 10-12 unidades/m², telhas shingle asfálticas precisam de 1 pacote para cada 3 m², e telhas metálicas são vendidas por m² com sobreposição incluída.",
    },
    {
      question: "Qual inclinação mínima para cada tipo de telha?",
      answer: "Telhas cerâmicas: 30-35% (17-19°). Telhas de concreto: 30% (17°). Telhas shingle: 17% (10°) com manta integral. Telhas metálicas com junta alzada: 5% (3°). Sempre consulte as especificações do fabricante.",
    },
  ],
};

export const underlaymentCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira a área real do telhado em metros quadrados.",
    "Selecione o tipo de manta — asfáltica, sintética ou autoaderente.",
    "Clique em Calcular Materiais para ver quantos rolos precisa.",
  ],
  materialInfo:
    "A manta impermeabilizante (underlayment) é uma camada de proteção instalada sobre o forro de telhado e sob as telhas. Protege contra infiltrações de água que podem passar pelas telhas durante chuvas intensas ou ventos fortes. No Brasil, as opções incluem manta asfáltica (tipo Viapol, Denver ou Sika), manta sintética e manta autoaderente para áreas críticas como beirais e vales. A manta asfáltica é a mais comum, com custo de R$ 80,00 a R$ 200,00 por rolo de 10 m². A manta autoaderente (ice & water shield) é usada em beirais, vales e ao redor de chaminés para proteção máxima, custando R$ 200,00 a R$ 400,00 por rolo.",
  nextSteps: [
    { label: "Calculadora de Telhas", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculadora de Forro do Telhado", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calculadora de Pingadeira", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: [
    "Instale a manta de baixo para cima, sobrepondo cada faixa em pelo menos 10 cm.",
    "Prenda a manta com grampos ou pregos com arruela plástica a cada 30 cm.",
    "Use manta autoaderente nos primeiros 90 cm a partir do beiral para proteção contra represamento de água.",
    "Instale a manta sobre a pingadeira no beiral e sob a pingadeira nos laterais.",
  ],
  commonMistakes: [
    "Instalar a manta de cima para baixo — a sobreposição deve direcionar a água para fora, não para dentro.",
    "Sobreposição insuficiente — menos de 10 cm permite infiltração por capilaridade.",
    "Deixar a manta exposta por muito tempo — a maioria das mantas deve ser coberta com telhas dentro de 30-60 dias.",
  ],
  faqs: [
    {
      question: "Quantos rolos de manta impermeabilizante preciso?",
      answer: "Divida a área real do telhado pela cobertura do rolo (tipicamente 10 m² ou 15 m² por rolo) e adicione 10% para sobreposições. Para um telhado de 100 m² com rolos de 10 m²: 100 × 1,10 / 10 = 11 rolos.",
    },
    {
      question: "A manta impermeabilizante é obrigatória?",
      answer: "Sim, para construções wood frame com forro de OSB a manta é obrigatória como segunda barreira contra infiltrações. Para telhados tradicionais com ripas e telhas cerâmicas, a manta é altamente recomendada, especialmente em inclinações baixas.",
    },
  ],
};

export const dripEdgeCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça o perímetro do telhado em metros (soma de todos os beirais e laterais).",
    "As peças padrão têm 3 metros de comprimento.",
    "Clique em Calcular Materiais para obter a quantidade de peças.",
  ],
  materialInfo:
    "A pingadeira (drip edge) é um perfil metálico em L instalado na borda do telhado para direcionar a água para longe da estrutura e para dentro da calha. Evita que a água escorra pela face da fascia e infiltre na estrutura de madeira. No Brasil, as pingadeiras são fabricadas em aço galvanizado, alumínio ou aço com pintura eletrostática. As peças padrão têm 3 metros de comprimento e estão disponíveis em larguras de face de 5 cm a 10 cm. O custo é de R$ 15,00 a R$ 40,00 por peça de 3 m conforme o material e acabamento. Marcas como Calhas Forte, Medabil e fornecedores locais de calhas produzem pingadeiras.",
  nextSteps: [
    { label: "Calculadora de Manta Impermeabilizante", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calculadora de Telhas", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculadora de Forro do Telhado", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Instale a pingadeira antes da manta impermeabilizante nos beirais.",
    "Instale a pingadeira sobre a manta impermeabilizante nos laterais.",
    "Sobreponha as juntas em pelo menos 5 cm na direção do escoamento da água.",
    "Fixe com pregos galvanizados a cada 30 cm.",
  ],
  commonMistakes: [
    "Omitir a pingadeira — sem ela, a água escorre pela fascia e causa apodrecimento da madeira.",
    "Instalar na ordem errada — beirais: pingadeira sob a manta; laterais: pingadeira sobre a manta.",
  ],
  faqs: [
    {
      question: "Quantas peças de pingadeira preciso?",
      answer: "Divida o perímetro total do telhado por 3 m (comprimento da peça) e adicione 10% para sobreposições. Para um telhado com 40 m de perímetro: 40 / 3 × 1,10 = 15 peças.",
    },
    {
      question: "A pingadeira é obrigatória?",
      answer: "Sim, a maioria dos códigos de obras e fabricantes de telhas exige pingadeira. Além de proteger a estrutura, muitas garantias de telhas são invalidadas sem a instalação de pingadeira.",
    },
  ],
};

export const roofPitchCalculator: CalculatorSEOContent = {
  disclaimer: "Esta calculadora fornece conversões matemáticas. A inclinação real do telhado deve ser verificada in loco com instrumentos de medição.",
  howToUse: [
    "Insira a elevação (altura vertical) em centímetros.",
    "Insira o avanço (distância horizontal) em centímetros.",
    "Clique em Calcular para obter a inclinação em graus, porcentagem e razão.",
  ],
  materialInfo:
    "A inclinação do telhado é expressa no Brasil como porcentagem (%) — a relação entre a altura vertical e a distância horizontal multiplicada por 100. Uma inclinação de 30% significa que o telhado sobe 30 cm para cada 100 cm de distância horizontal. As inclinações residenciais mais comuns no Brasil são: 17-25% (10-14°) para telhas metálicas, 30-45% (17-24°) para telhas cerâmicas e de concreto, e 17-100% (10-45°) para telhas shingle asfálticas. A escolha da inclinação afeta o tipo de telha permitido, o consumo de materiais, a resistência ao vento e a capacidade de escoamento de água de chuva. Em regiões com chuvas intensas (como o Norte e Sudeste do Brasil), inclinações maiores são recomendadas para escoamento rápido. A ABNT NBR 15575 estabelece requisitos de desempenho para coberturas que incluem estanqueidade à água conforme a região climática.",
  nextSteps: [
    { label: "Calculadora de Área do Telhado", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Calculadora de Caimento do Telhado", href: "/calculators/roofing/roof-slope-calculator/" },
    { label: "Calculadora de Telhas", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculadora de Caibros", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Verifique a inclinação mínima recomendada pelo fabricante da telha antes de definir o projeto.",
    "Use um inclinômetro digital para verificar a inclinação real durante a construção.",
    "Considere a região climática — chuvas intensas exigem inclinações maiores para evitar infiltrações.",
    "Inclinações acima de 45% (24°) requerem equipamentos de segurança especiais para o trabalho no telhado.",
  ],
  commonMistakes: [
    "Confundir porcentagem com graus — 30% ≠ 30°. 30% equivale a aproximadamente 17°.",
    "Usar inclinação abaixo do mínimo da telha — cada tipo de telha tem inclinação mínima obrigatória.",
    "Não considerar a ação do vento — telhados muito íngremes sofrem mais com a pressão do vento.",
  ],
  faqs: [
    {
      question: "Qual a inclinação ideal para telhado residencial no Brasil?",
      answer: "Para telhas cerâmicas, a inclinação mais comum é de 30-35% (17-19°). Para telhas de concreto, 30% mínimo. Para telhas metálicas, a partir de 5% para junta alzada. A inclinação ideal depende do tipo de telha, da região climática e da estética desejada.",
    },
    {
      question: "Como converter porcentagem em graus?",
      answer: "Use a fórmula: graus = arctan(porcentagem / 100). Exemplos: 30% = 16,7°, 50% = 26,6°, 100% = 45°. Na prática, 30% é a inclinação mais popular para residências brasileiras.",
    },
    {
      question: "Qual inclinação mínima para cada tipo de telha?",
      answer: "Telha cerâmica colonial: 30-35%. Telha de concreto: 30%. Telha shingle: 17% (com manta integral). Telha metálica trapezoidal: 5-10%. Telha metálica junta alzada: 3-5%. Manta asfáltica (laje): 1-3%. Consulte sempre o fabricante.",
    },
    {
      question: "Como medir a inclinação de um telhado existente?",
      answer: "De dentro do sótão: coloque um nível de 1 m horizontal contra um caibro, meça 100 cm na horizontal e depois a distância vertical até o caibro nesse ponto. O valor vertical em cm é a inclinação em porcentagem. Alternativamente, use um aplicativo de inclinômetro no celular.",
    },
  ],
};

export const roofAreaCalculator: CalculatorSEOContent = {
  disclaimer: "Esta estimativa assume telhados retangulares simples. Telhados com recortes complexos, dormers ou múltiplas águas podem diferir significativamente.",
  howToUse: [
    "Insira o comprimento e a largura da planta do edifício em metros.",
    "Insira a inclinação do telhado em porcentagem.",
    "Clique em Calcular para obter a área real do telhado com o multiplicador de inclinação.",
  ],
  materialInfo:
    "A área real do telhado é sempre maior que a área da planta do edifício porque a inclinação adiciona superfície. O multiplicador de inclinação converte a área plana em área real: para 30% de inclinação, o multiplicador é 1,044; para 50%, é 1,118; para 100% (45°), é 1,414. Conhecer a área real é essencial para calcular a quantidade correta de telhas, manta impermeabilizante, forro e outros materiais de cobertura. Para telhados de múltiplas águas, calcule cada face separadamente e some as áreas. Adicione 10-15% de desperdício para cortes e remates em cumeeiras, espigões e vales.",
  nextSteps: [
    { label: "Calculadora de Telhas", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculadora de Manta Impermeabilizante", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calculadora de Inclinação do Telhado", href: "/calculators/roofing/roof-pitch-calculator/" },
  ],
  installationTips: [
    "Sempre use a área real (com multiplicador) para pedir materiais de cobertura.",
    "Para telhados complexos, divida em retângulos e triângulos simples e some as áreas.",
    "Adicione 15-20% de desperdício para telhados com muitos recortes, vales e espigões.",
  ],
  commonMistakes: [
    "Usar a área da planta em vez da área real — isso resulta em material insuficiente.",
    "Esquecer de incluir os beirais — meça do beiral ao beiral, não da parede à parede.",
    "Não considerar desperdício extra para telhados complexos — vales e espigões geram mais cortes.",
  ],
  faqs: [
    {
      question: "Como calcular a área real do telhado?",
      answer: "Multiplique a área da planta pelo multiplicador de inclinação. Para uma casa de 10x12 m com telhado de duas águas a 30% de inclinação: área da planta = 120 m², multiplicador = 1,044, área real = 125 m². Adicione 10% para desperdício: 138 m² total para pedir materiais.",
    },
    {
      question: "O que é o multiplicador de inclinação?",
      answer: "É o fator que converte área plana em área real do telhado. Calculado como √(1 + (inclinação/100)²). Exemplos: 30% = 1,044, 50% = 1,118, 75% = 1,250, 100% = 1,414.",
    },
  ],
};

export const roofSlopeCalculator: CalculatorSEOContent = {
  disclaimer: "Esta calculadora fornece conversões matemáticas entre diferentes formas de expressar a inclinação do telhado.",
  howToUse: [
    "Insira a elevação e o avanço do telhado em centímetros.",
    "Ou insira diretamente a inclinação em porcentagem ou graus.",
    "Clique em Calcular para obter todas as conversões e o material recomendado.",
  ],
  materialInfo:
    "O caimento (slope) do telhado pode ser expresso de várias formas: porcentagem (%), graus (°) e razão (rise:run). No Brasil, a porcentagem é a forma mais utilizada. A porcentagem indica quantos centímetros o telhado sobe para cada 100 cm de distância horizontal. O caimento correto é fundamental para o desempenho da cobertura — inclinações muito baixas permitem infiltrações, enquanto inclinações excessivas aumentam custos e exposição ao vento. A ABNT NBR 15575 e os fabricantes de telhas estabelecem inclinações mínimas que devem ser respeitadas para garantir a estanqueidade da cobertura.",
  nextSteps: [
    { label: "Calculadora de Inclinação do Telhado", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Calculadora de Área do Telhado", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Calculadora de Caibros", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Meça o caimento real após a instalação da estrutura para confirmar que atende às especificações.",
    "Use um nível digital para medições precisas de inclinação.",
    "Documente o caimento real para referência futura em manutenções e reformas.",
  ],
  commonMistakes: [
    "Confundir porcentagem com graus — 30% de inclinação NÃO é 30 graus (é aproximadamente 16,7°).",
    "Não verificar a inclinação mínima do fabricante da telha antes de iniciar o projeto.",
  ],
  faqs: [
    {
      question: "Qual a diferença entre inclinação e caimento?",
      answer: "Na prática, são sinônimos. Ambos expressam o ângulo do telhado. A inclinação é mais usada em documentos técnicos, enquanto caimento é mais comum no dia a dia da obra.",
    },
    {
      question: "Como converter inclinação em porcentagem para graus?",
      answer: "Graus = arctan(porcentagem / 100). Exemplos comuns: 15% = 8,5°, 30% = 16,7°, 45% = 24,2°, 100% = 45°.",
    },
  ],
};

// ─── EXTERIOR SHELL (ENVOLTÓRIA EXTERIOR) ───────────────────────────────────

export const housewrapCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça a área total de paredes externas em metros quadrados.",
    "Selecione a largura do rolo da manta — 1 m, 1,5 m ou 2,7 m são comuns.",
    "Clique em Calcular Materiais para ver quantos rolos precisa.",
  ],
  materialInfo:
    "A manta hidrófuga (housewrap) é uma membrana respirável instalada sobre o revestimento estrutural (OSB) e sob o acabamento externo (siding). Permite a passagem de vapor de água de dentro para fora mas bloqueia a água líquida e o vento. No Brasil, as marcas mais usadas em construções wood frame incluem DuPont Tyvek, LP WeatherLogic e marcas nacionais como a manta da Viapol. Os rolos típicos medem 1,50 m × 30 m (45 m²) e custam de R$ 200,00 a R$ 500,00 conforme a marca e especificação. A instalação deve incluir sobreposição horizontal de 15 cm e vertical de 30 cm, com vedação de todas as juntas com fita compatível.",
  nextSteps: [
    { label: "Calculadora de Revestimento Vinílico", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Calculadora de Revestimento de Fibrocimento", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Calculadora de Rufo de Janela", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Instale de baixo para cima para que as sobreposições direcionem a água para fora.",
    "Sobreponha horizontalmente em pelo menos 15 cm e verticalmente em 30 cm.",
    "Vede todas as juntas, aberturas e penetrações com fita compatível (tipo Tyvek tape).",
    "Não deixe a manta exposta por mais de 120 dias — a UV degrada o material.",
  ],
  commonMistakes: [
    "Instalar de cima para baixo — a sobreposição ficará invertida, canalizando água para dentro.",
    "Não vedar as juntas com fita — juntas abertas permitem infiltração de água e ar.",
    "Furar a manta sem vedar — cada penetração (parafuso, tubo, fiação) deve ser vedada.",
  ],
  faqs: [
    {
      question: "Quantos rolos de manta hidrófuga preciso?",
      answer: "Divida a área total de paredes pela cobertura do rolo (descontando sobreposições — tipicamente 80% da área do rolo). Para 108 m² de parede com rolos de 45 m²: 108 / (45 × 0,80) = 3 rolos.",
    },
    {
      question: "A manta hidrófuga é obrigatória em wood frame?",
      answer: "Sim. Para construções wood frame no Brasil, a manta hidrófuga é componente essencial da envoltória térmica e de estanqueidade, conforme as diretrizes do SINAT para sistemas construtivos em wood frame.",
    },
  ],
};

export const vinylSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça a área total de paredes externas em metros quadrados.",
    "Desconte as áreas de portas e janelas.",
    "Clique em Calcular Materiais para obter a quantidade de painéis e acessórios.",
  ],
  materialInfo:
    "O revestimento vinílico (vinyl siding) é um acabamento externo de PVC disponível em diversas cores e perfis que simula madeira, tijolo e outros materiais. É leve, resistente a intempéries, não precisa de pintura e tem manutenção muito baixa. No Brasil, o revestimento vinílico é fornecido por marcas como LP (SmartSide em PVC), Royal Building Products e distribuidores nacionais. Os painéis típicos medem 3,81 m de comprimento por 20-25 cm de exposição e custam de R$ 30,00 a R$ 80,00 por m². A instalação requer perfis de partida, cantos internos e externos, perfis J ao redor de janelas e portas, e acabamentos de topo.",
  nextSteps: [
    { label: "Calculadora de Manta Hidrófuga", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calculadora de Revestimento de Fibrocimento", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Calculadora de Rufo de Janela", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Instale de baixo para cima, começando com o perfil de partida nivelado.",
    "Deixe folga de 6 mm nos cantos e perfis J para expansão térmica.",
    "Não pregue os painéis firmemente — deixe 1 mm de folga para permitir movimentação.",
    "Centre os pregos nas ranhuras oblongas — pregar nas extremidades impede a expansão.",
  ],
  commonMistakes: [
    "Pregar firmemente os painéis — o siding vinílico precisa de folga para expandir e contrair com a temperatura.",
    "Não usar perfis de acabamento adequados — cantos, janelas e portas precisam de perfis específicos.",
    "Instalar sobre parede sem manta hidrófuga — a manta é obrigatória como barreira de água por trás do siding.",
  ],
  faqs: [
    {
      question: "Quantos painéis de siding vinílico preciso?",
      answer: "Divida a área de parede (menos aberturas) pela área de exposição de cada painel. Adicione 10% para desperdício. Para 100 m² de parede com painéis de 0,76 m² de exposição: 100 / 0,76 × 1,10 = 145 painéis.",
    },
    {
      question: "O siding vinílico precisa de pintura?",
      answer: "Não. O siding vinílico já vem colorido em toda a espessura do material e mantém a cor por 20-30 anos. Se desejar mudar a cor, pode-se pintar com tinta acrílica para vinílico em tom igual ou mais claro.",
    },
  ],
};

export const hardieSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça a área total de paredes externas em metros quadrados.",
    "Desconte as áreas de portas e janelas.",
    "Clique em Calcular Materiais para obter a quantidade de placas necessárias.",
  ],
  materialInfo:
    "O revestimento de fibrocimento é um acabamento externo fabricado com cimento, fibras de celulose e aditivos, oferecendo aparência de madeira com a durabilidade do cimento. No Brasil, as marcas mais conhecidas são Eternit (Modular e Cedral), Brasilit e Cruzeiro. As placas estão disponíveis como réguas de 8 mm ou 10 mm de espessura em larguras de 20 cm e 30 cm com comprimentos de 2,40 m e 3,66 m. O custo é de R$ 20,00 a R$ 60,00 por m² para placas lisas e R$ 40,00 a R$ 90,00 por m² para placas com textura de madeira. O fibrocimento é resistente ao fogo, cupins, umidade e não apodrece. Requer pintura inicial e repintura a cada 5-7 anos para manter a estética.",
  nextSteps: [
    { label: "Calculadora de Manta Hidrófuga", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calculadora de Revestimento Vinílico", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Calculadora de Rufo de Janela", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Use parafusos próprios para fibrocimento — nunca pregos comuns, que racham o material.",
    "Pré-fure os furos de fixação a pelo menos 20 mm da borda para evitar trincas.",
    "Aplique selante nas juntas e cantos para vedação contra água.",
    "Pinte todas as faces (incluindo bordas cortadas) com selador e tinta acrílica antes da instalação.",
  ],
  commonMistakes: [
    "Usar pregos em vez de parafusos — pregos racham o fibrocimento e não seguram adequadamente.",
    "Não selar as bordas cortadas — bordas expostas absorvem água e se deterioram.",
    "Instalar sem manta hidrófuga — a manta é obrigatória por trás do fibrocimento.",
  ],
  faqs: [
    {
      question: "Quantas placas de fibrocimento preciso?",
      answer: "Divida a área de parede (menos aberturas) pela área de exposição de cada placa e adicione 10% de desperdício. Para placas de 3,66 m × 0,20 m de exposição (0,73 m²) e 80 m² de parede: 80 / 0,73 × 1,10 = 121 placas.",
    },
    {
      question: "Fibrocimento ou siding vinílico?",
      answer: "O fibrocimento é mais resistente a impactos, não derrete com calor e tem aparência mais natural. O vinílico é mais leve, mais fácil de instalar e não precisa de pintura. O fibrocimento custa mais inicialmente mas pode agregar mais valor ao imóvel.",
    },
  ],
};

export const windowFlashingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira o número de janelas e portas a serem rufadas.",
    "Insira as dimensões médias de cada abertura.",
    "Clique em Calcular Materiais para obter os metros lineares de fita autoaderente necessários.",
  ],
  materialInfo:
    "O rufo de janela (window flashing) é uma fita ou membrana autoaderente instalada ao redor das aberturas de janelas e portas para direcionar a água para fora da parede e prevenir infiltrações. É um componente crítico da envoltória do edifício, especialmente em construções wood frame. No Brasil, as opções incluem fita autoaderente butílica (tipo Typar ou similar), manta asfáltica cortada em tiras e perfis metálicos de rufamento. A fita autoaderente é a mais prática e está disponível em larguras de 10 cm, 15 cm e 23 cm. O custo é de R$ 50,00 a R$ 150,00 por rolo de 15 m. A instalação segue o método de \"cascata\" — peça inferior primeiro, depois laterais, depois peça superior — para que a água sempre escorra para fora.",
  nextSteps: [
    { label: "Calculadora de Manta Hidrófuga", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calculadora de Revestimento de Fibrocimento", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Calculadora de Revestimento Vinílico", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
  ],
  installationTips: [
    "Instale na ordem correta: peitoril (base) primeiro, depois laterais, depois verga (topo) — método cascata.",
    "A fita do peitoril deve se estender pelo menos 5 cm além de cada lado da abertura.",
    "Sobreponha a fita lateral sobre a do peitoril e a fita da verga sobre as laterais.",
    "Pressione firmemente a fita com rolo de pressão para adesão completa.",
  ],
  commonMistakes: [
    "Instalar na ordem errada — a fita da verga sob as laterais permite que a água entre por trás.",
    "Sobreposição insuficiente — todas as juntas devem sobrepor pelo menos 5 cm.",
    "Omitir o rufamento — janelas sem rufo são a principal causa de infiltrações em construções wood frame.",
  ],
  faqs: [
    {
      question: "Quantos metros lineares de fita preciso por janela?",
      answer: "Para uma janela padrão de 1,20 × 1,00 m: peitoril = 1,30 m, duas laterais = 2,20 m, verga = 1,30 m, total = 4,80 m por janela. Adicione 20% para sobreposições, totalizando aproximadamente 5,8 m por janela.",
    },
    {
      question: "O rufo de janela é obrigatório?",
      answer: "Sim. Em construções wood frame, o rufamento de todas as aberturas é obrigatório conforme as diretrizes do SINAT. Mesmo em alvenaria, o rufamento adequado previne a principal causa de infiltrações em paredes.",
    },
  ],
};

// ─── INSULATION & DRYWALL (ISOLAMENTO E DRYWALL) ────────────────────────────

export const cavityInsulationCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça a área total de paredes a isolar em metros quadrados.",
    "Selecione o tipo de isolamento e a espessura da parede.",
    "Clique em Calcular Materiais para obter a quantidade de mantas ou rolos.",
  ],
  materialInfo:
    "O isolamento de cavidade é instalado entre os montantes da parede para reduzir a transferência de calor e som. No Brasil, as opções mais comuns são lã de vidro (Isover, Rockfibras) e lã de rocha (Rockwool, Isover). A lã de vidro é a mais econômica, com custo de R$ 30,00 a R$ 80,00 por m², e está disponível em rolos e mantas com espessuras de 50 mm (para paredes de 38x89 mm) e 100 mm (para paredes de 38x140 mm). A lã de rocha oferece melhor isolamento acústico e é incombustível, custando R$ 50,00 a R$ 120,00 por m². Ambas devem ser protegidas por barreira de vapor (filme de polietileno) no lado interno em climas com ar condicionado para prevenir condensação. A ABNT NBR 15575 estabelece requisitos mínimos de desempenho térmico por zona bioclimática do Brasil.",
  nextSteps: [
    { label: "Calculadora de Placas de Drywall", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calculadora de Parafusos para Drywall", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calculadora de Montantes", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Corte as mantas 2 cm mais largas que a cavidade para encaixe firme sem comprimir.",
    "Preencha completamente a cavidade — espaços vazios reduzem drasticamente a eficiência.",
    "Corte ao redor de caixas elétricas e tubulações sem deixar lacunas.",
    "Instale barreira de vapor no lado quente da parede (interno em climas com ar condicionado).",
  ],
  commonMistakes: [
    "Comprimir o isolamento — manta comprimida perde eficiência térmica significativamente.",
    "Deixar lacunas ao redor de caixas elétricas — cada lacuna é uma ponte térmica.",
    "Instalar barreira de vapor no lado errado — no Brasil, geralmente fica no lado interno (lado do ar condicionado).",
  ],
  faqs: [
    {
      question: "Quanta lã de vidro preciso?",
      answer: "Meça a área de paredes a isolar em m² e divida pela cobertura da embalagem (tipicamente 7,5 a 15 m² por pacote). Adicione 5% para desperdício de corte.",
    },
    {
      question: "Lã de vidro ou lã de rocha?",
      answer: "A lã de vidro é mais econômica e adequada para isolamento térmico. A lã de rocha é melhor para isolamento acústico, é incombustível e mais resistente à umidade. Para paredes entre cômodos internos visando conforto acústico, prefira lã de rocha.",
    },
  ],
};

export const drywallCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Meça a área total de paredes e forros em metros quadrados.",
    "Selecione a espessura da placa — 12,5 mm é padrão para paredes, 9,5 mm para forros.",
    "Clique em Calcular Materiais para obter a quantidade de placas.",
  ],
  materialInfo:
    "As placas de drywall (gesso acartonado) são o revestimento interno padrão para construções wood frame e steel frame no Brasil. As placas padrão medem 1,20 × 2,40 m (2,88 m²) em espessuras de 9,5 mm (forros e revestimentos), 12,5 mm (paredes padrão) e 15 mm (paredes com requisitos especiais de resistência ao fogo). No Brasil, as principais marcas são Placo (Saint-Gobain), Knauf e Gypsum (Etex Group). Os tipos disponíveis incluem placa standard (ST — branca), placa resistente à umidade (RU — verde, para banheiros e cozinhas), e placa resistente ao fogo (RF — rosa). O custo é de R$ 25,00 a R$ 55,00 por placa padrão de 12,5 mm. As placas são fixadas aos montantes com parafusos para drywall e as juntas são tratadas com fita e massa para acabamento liso.",
  nextSteps: [
    { label: "Calculadora de Parafusos para Drywall", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calculadora de Massa para Juntas", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Calculadora de Isolamento de Cavidade", href: "/calculators/insulation-drywall/cavity-insulation-calculator/" },
  ],
  installationTips: [
    "Instale as placas com o eixo maior perpendicular aos montantes para melhor resistência.",
    "Escalone as juntas entre filas — nunca alinhe juntas verticais em sequência.",
    "Use parafusos de 25 mm para placas de 9,5 mm e 32 mm para placas de 12,5 mm.",
    "Deixe 1 cm de folga no piso para evitar absorção de umidade pela base.",
  ],
  commonMistakes: [
    "Não escalonar as juntas — juntas alinhadas trincam com mais facilidade.",
    "Usar parafusos muito longos — parafusos que atravessam os montantes criam problemas.",
    "Esquecer de usar placa verde (RU) em áreas úmidas — a placa standard absorve umidade.",
    "Não deixar folga no piso — placas tocando o piso absorvem água por capilaridade.",
  ],
  faqs: [
    {
      question: "Quantas placas de drywall preciso?",
      answer: "Divida a área total de paredes e forros por 2,88 m² (área de uma placa padrão de 1,20 × 2,40 m) e multiplique por 1,10 para 10% de desperdício. Para 100 m² de parede: 100 / 2,88 × 1,10 = 39 placas.",
    },
    {
      question: "Qual espessura de drywall usar?",
      answer: "Use 12,5 mm para paredes com montantes a 40 cm ou 60 cm entre eixos. Use 9,5 mm para forros. Use 15 mm quando requisitos de resistência ao fogo forem especificados no projeto.",
    },
    {
      question: "Qual tipo de placa para banheiro?",
      answer: "Use placa RU (resistente à umidade, verde) para paredes de banheiros, lavabos e cozinhas. Nas áreas de box do chuveiro, use placa cimentícia (tipo Aquapanel) para suporte de revestimento cerâmico.",
    },
  ],
};

export const drywallScrewCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira o número de placas de drywall.",
    "Selecione o espaçamento dos parafusos — padrão é 25 cm no campo e 15 cm nas bordas.",
    "Clique em Calcular Materiais para obter a quantidade de parafusos e caixas necessárias.",
  ],
  materialInfo:
    "Os parafusos para drywall são fixadores especiais com cabeça trombeta (philips) projetados para fixar placas de gesso acartonado aos montantes de madeira ou perfis metálicos. Os comprimentos mais comuns são 25 mm (para placas de 9,5 mm em perfil metálico), 32 mm (para placas de 12,5 mm em montantes de madeira) e 41 mm (para placas duplas ou placas de 15 mm). No Brasil, as marcas mais comuns incluem Gypsum, Placo, Philips e parafusos genéricos vendidos por peso em casas de materiais de construção. O custo é de R$ 15,00 a R$ 30,00 por caixa de 500 unidades. O espaçamento padrão é de 25 cm no campo (centro do painel) e 15 cm nas bordas (perímetro), resultando em aproximadamente 28-32 parafusos por placa padrão de 1,20 × 2,40 m.",
  nextSteps: [
    { label: "Calculadora de Placas de Drywall", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calculadora de Massa para Juntas", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Calculadora de Montantes", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Use parafusadeira elétrica com limitador de profundidade — o parafuso deve ficar levemente embutido sem rasgar o papel.",
    "Mantenha os parafusos a pelo menos 10 mm da borda da placa para não trincar.",
    "Comece a fixar do centro da placa para fora para evitar bolhas.",
  ],
  commonMistakes: [
    "Apertar demais — parafusos que rasgam o papel não seguram e precisam ser recolocados ao lado.",
    "Espaçamento excessivo — mais de 30 cm entre parafusos pode causar ondulação na placa.",
    "Usar parafusos muito curtos — devem penetrar pelo menos 15 mm no montante.",
  ],
  faqs: [
    {
      question: "Quantos parafusos por placa de drywall?",
      answer: "Aproximadamente 28-32 parafusos por placa padrão de 1,20 × 2,40 m com espaçamento de 25 cm no campo e 15 cm nas bordas. Para 40 placas, precisa de 1.120-1.280 parafusos — compre 3 caixas de 500.",
    },
    {
      question: "Qual comprimento de parafuso usar?",
      answer: "Para placa de 12,5 mm em montante de madeira: parafuso de 32 mm (ponta agulha). Para placa de 12,5 mm em perfil metálico: parafuso de 25 mm (ponta broca). Para placa dupla: 41 mm.",
    },
  ],
};

export const jointCompoundCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira o número de placas de drywall ou a metragem de juntas.",
    "Selecione o nível de acabamento — standard ou premium.",
    "Clique em Calcular Materiais para obter a quantidade de massa e fita.",
  ],
  materialInfo:
    "A massa para juntas (joint compound ou massa para drywall) é o material usado para tratar as juntas entre placas de drywall, cobrir cabeças de parafusos e criar uma superfície lisa para pintura. O processo envolve três demãos: primeira demão (embutimento da fita de papel nas juntas), segunda demão (nivelamento com camada mais larga) e terceira demão (acabamento final ultrafino). No Brasil, as massas mais usadas são: massa pronta para drywall (tipo Placo/Knauf — R$ 30,00 a R$ 60,00 por balde de 5 kg) e massa em pó (tipo Gypsum — R$ 15,00 a R$ 30,00 por saco de 5 kg). A fita para juntas de papel tem custo de R$ 10,00 a R$ 25,00 por rolo de 50 m. A regra geral é que se precisa de aproximadamente 1 kg de massa por m² de placa de drywall, considerando juntas, parafusos e cantos.",
  nextSteps: [
    { label: "Calculadora de Placas de Drywall", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calculadora de Parafusos para Drywall", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calculadora de Rendimento de Tinta", href: "/calculators/finishing/paint-coverage-calculator/" },
  ],
  installationTips: [
    "Aplique a massa em camadas finas — várias camadas finas são melhores que uma grossa.",
    "Lixe levemente entre as demãos com lixa 150 quando a massa estiver completamente seca.",
    "Use espátulas progressivamente mais largas: 10 cm na primeira demão, 15 cm na segunda, 25 cm na terceira.",
    "Mantenha os cantos e juntas retos usando cantoneiras e espátulas de canto.",
  ],
  commonMistakes: [
    "Aplicar camadas grossas — a massa encolhe ao secar e camadas grossas trincam e afundam.",
    "Lixar antes da secagem completa — lixar massa úmida rasga e cria buracos.",
    "Usar massa vencida — massa com grumos ou cheiro forte não adere corretamente.",
    "Não limpar as ferramentas — massa seca nas espátulas cria riscos na próxima aplicação.",
  ],
  faqs: [
    {
      question: "Quanta massa preciso?",
      answer: "A regra geral é 1 kg de massa por m² de placa. Para 40 placas (115 m²): aproximadamente 115 kg — compre 6 baldes de 20 kg ou 23 baldes de 5 kg. Adicione 10% extra para desperdício.",
    },
    {
      question: "Massa pronta ou em pó?",
      answer: "A massa pronta é mais fácil de usar e tem secagem mais lenta (mais tempo de trabalho). A massa em pó é mais econômica, seca mais rápido e pode ser preparada na consistência desejada. Para iniciantes, a massa pronta é recomendada.",
    },
  ],
};

// ─── HARDWARE (FERRAGENS) ───────────────────────────────────────────────────

export const framingNailCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira o número de montantes e a quantidade de conexões estruturais.",
    "Selecione o tipo de prego — ardox de 75 mm ou 90 mm.",
    "Clique em Calcular Materiais para obter os quilos de pregos necessários.",
  ],
  materialInfo:
    "Os pregos para estrutura wood frame são pregos ardox (helicoidais ou anelados) de aço galvanizado, projetados para conexões estruturais com maior resistência ao arrancamento. Os tamanhos mais comuns são: 75 mm (para fixação de revestimento OSB e conexões secundárias) e 90 mm (para conexões de montantes a guias e vigas). No Brasil, pregos ardox são encontrados em casas de materiais de construção e lojas especializadas como Leroy Merlin e Telhanorte. O custo é de R$ 20,00 a R$ 40,00 por quilo. Para montante a guia, use dois pregos de 90 mm de cada lado. Para revestimento OSB, use pregos de 60 mm a cada 15 cm nas bordas e 30 cm no campo. Pregadores pneumáticos são mais eficientes para obras maiores.",
  nextSteps: [
    { label: "Calculadora de Montantes", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculadora de Conectores de Vigas", href: "/calculators/hardware/joist-hanger-calculator/" },
    { label: "Calculadora de Amarrações Anti-Vento", href: "/calculators/hardware/hurricane-tie-calculator/" },
  ],
  installationTips: [
    "Use pregos ardox galvanizados para resistência à corrosão, especialmente com madeira tratada.",
    "Pregue sempre a 19 mm da borda da madeira para evitar rachaduras.",
    "Para conexões estruturais, prefira dois pregos de 90 mm a um prego maior.",
  ],
  commonMistakes: [
    "Usar pregos lisos em vez de ardox — pregos lisos têm 50% menos resistência ao arrancamento.",
    "Usar pregos muito curtos — o prego deve penetrar pelo menos 40 mm na peça de apoio.",
    "Pregar muito perto da borda — causa rachaduras na madeira.",
  ],
  faqs: [
    {
      question: "Quantos quilos de pregos preciso para uma casa?",
      answer: "Uma casa wood frame típica de 100 m² usa aproximadamente 30-50 kg de pregos sortidos (60 mm, 75 mm e 90 mm). Isso inclui pregos para montantes, guias, revestimento e detalhes.",
    },
    {
      question: "Pregos ardox ou lisos?",
      answer: "Sempre use pregos ardox (helicoidais ou anelados) para estrutura wood frame. Eles têm resistência ao arrancamento 50-100% superior aos pregos lisos e são exigidos por norma para conexões estruturais.",
    },
  ],
};

export const joistHangerCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira o número de vigas de piso que precisam de conectores.",
    "Selecione o modelo do conector conforme a seção da viga.",
    "Clique em Calcular Materiais para obter a quantidade de conectores e pregos especiais.",
  ],
  materialInfo:
    "Os conectores de vigas (joist hangers) são peças metálicas em U que fixam as vigas de piso às vigas principais ou à viga perimetral, proporcionando uma conexão estrutural segura sem depender de pregos inclinados. As marcas mais reconhecidas são Simpson Strong-Tie e USP Structural Connectors. No Brasil, os conectores Simpson são distribuídos por fornecedores especializados em wood frame como a Tecverde e importadoras de ferragens estruturais. Os modelos mais comuns são LUS (para vigas simples) e LU (para vigas mais pesadas). Cada conector requer pregos específicos (tipo joist hanger nails) que são mais curtos e grossos que pregos comuns. O custo é de R$ 8,00 a R$ 25,00 por conector mais R$ 2,00 a R$ 5,00 em pregos especiais por conector.",
  nextSteps: [
    { label: "Calculadora de Vigas de Piso", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculadora de Amarrações Anti-Vento", href: "/calculators/hardware/hurricane-tie-calculator/" },
    { label: "Calculadora de Pregos para Estrutura", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: [
    "Use sempre os pregos especificados pelo fabricante — pregos comuns não têm o diâmetro necessário.",
    "Preencha TODOS os furos do conector — cada furo vazio reduz a capacidade de carga.",
    "Instale o conector nivelado e aprumado para garantir transferência de carga adequada.",
  ],
  commonMistakes: [
    "Usar pregos comuns em vez dos especificados — isso reduz drasticamente a capacidade do conector.",
    "Deixar furos vazios — a capacidade publicada assume todos os furos preenchidos.",
    "Instalar o conector torto — conexões desalinhadas não transferem carga corretamente.",
  ],
  faqs: [
    {
      question: "Quantos conectores de vigas preciso?",
      answer: "Geralmente um conector para cada extremidade de cada viga de piso. Para um cômodo com 16 vigas: 16 × 2 = 32 conectores. Vigas que apoiam em paredes podem não precisar de conectores se fixadas com pregos através da viga perimetral.",
    },
    {
      question: "Que pregos usar nos conectores?",
      answer: "Use SOMENTE os pregos especificados pelo fabricante (tipo Simpson SD ou similares). São pregos mais curtos e grossos que pregos comuns, projetados para cisalhamento em vez de arrancamento. Nunca substitua por pregos comuns.",
    },
  ],
};

export const hurricaneTieCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Insira o número de caibros ou tesouras do telhado.",
    "Selecione o modelo do conector anti-vento.",
    "Clique em Calcular Materiais para obter a quantidade de conectores necessários.",
  ],
  materialInfo:
    "As amarrações anti-vento (hurricane ties ou wind clips) são conectores metálicos que fixam os caibros ou tesouras à guia superior da parede, prevenindo que o telhado seja arrancado por ventos fortes. No Brasil, embora furacões sejam raros, ventos fortes, vendavais e tornados são cada vez mais comuns, especialmente nas regiões Sul, Sudeste e Centro-Oeste. Os conectores Simpson Strong-Tie H2.5A e H10 são os mais usados. Cada caibro ou tesoura recebe um conector em cada apoio. O custo é de R$ 5,00 a R$ 15,00 por conector, um investimento pequeno comparado ao custo de reconstruir um telhado. A ABNT NBR 6123 (Forças devidas ao vento em edificações) estabelece os requisitos de cálculo para resistência ao vento.",
  nextSteps: [
    { label: "Calculadora de Tesouras", href: "/calculators/roofing/truss-calculator/" },
    { label: "Calculadora de Caibros", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Calculadora de Conectores de Vigas", href: "/calculators/hardware/joist-hanger-calculator/" },
  ],
  installationTips: [
    "Instale um conector em cada extremidade de cada caibro ou tesoura — ambos os lados.",
    "Use os pregos especificados pelo fabricante — tipicamente pregos SD de 38 mm.",
    "Preencha todos os furos do conector para atingir a capacidade nominal.",
    "Instale sobre a guia superior da parede, envolvendo tanto o caibro quanto a guia.",
  ],
  commonMistakes: [
    "Instalar conectores em apenas um lado — cada caibro/tesoura precisa de conector em AMBOS os apoios.",
    "Usar pregos comuns — os pregos especiais são obrigatórios para a capacidade especificada.",
    "Omitir conectores em caibros das empenas — estes são os mais vulneráveis ao vento.",
  ],
  faqs: [
    {
      question: "Quantos conectores anti-vento preciso?",
      answer: "Um conector para cada apoio de cada caibro ou tesoura. Para um telhado de duas águas com 20 tesouras: 20 × 2 = 40 conectores. Adicione extras para caibros de empena e elementos auxiliares.",
    },
    {
      question: "Os conectores anti-vento são obrigatórios no Brasil?",
      answer: "Sim, para construções wood frame os conectores são exigidos pelas diretrizes do SINAT e pela boa prática construtiva conforme a ABNT NBR 7190. Mesmo em regiões com ventos moderados, são uma proteção essencial contra eventos climáticos extremos.",
    },
  ],
};

export const lumberCostCalculator: CalculatorSEOContent = {
  disclaimer: "Os preços são estimativas baseadas no mercado brasileiro 2026-2025. Os preços reais variam conforme região, fornecedor e condições de mercado.",
  howToUse: [
    "Selecione a seção da madeira desejada.",
    "Insira a quantidade de peças e o comprimento.",
    "Clique em Calcular para obter o custo estimado total.",
  ],
  materialInfo:
    "O custo da madeira para construção wood frame no Brasil varia significativamente conforme a espécie, o grau de tratamento e a região. O pinus tratado autoclavado com CCB é o padrão para wood frame e custa de R$ 1.500,00 a R$ 3.000,00 por metro cúbico. As seções mais comuns incluem: montantes 38x89 mm (R$ 10,00-20,00 por metro linear), peças 38x140 mm (R$ 15,00-30,00/ml), e peças 38x235 mm (R$ 25,00-50,00/ml). A madeira de eucalipto tratado, alternativa mais barata, custa 20-30% menos que o pinus. As madeireiras especializadas em wood frame como Kürten, Tecverde e Battistella oferecem kits de madeira pré-cortados para projetos residenciais.",
  nextSteps: [
    { label: "Calculadora de Pés Tábua", href: "/calculators/hardware/board-feet-calculator/" },
    { label: "Calculadora de Compensado", href: "/calculators/hardware/plywood-calculator/" },
    { label: "Calculadora de Montantes", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Compre madeira de fornecedores especializados em wood frame para garantir grau estrutural e tratamento adequado.",
    "Verifique o teor de umidade — madeira seca (≤19%) é essencial para evitar retração e deformação.",
    "Armazene a madeira em local coberto e nivelado até o uso.",
  ],
  commonMistakes: [
    "Comprar madeira sem certificação de tratamento — exija o selo de tratamento CCB ou CCA conforme ABNT NBR 16143.",
    "Não verificar o grau estrutural — madeira de grau inferior pode não atender aos requisitos de resistência do projeto.",
  ],
  faqs: [
    {
      question: "Quanto custa a madeira para uma casa wood frame?",
      answer: "Para uma casa wood frame de 100 m², o custo da madeira estrutural (montantes, guias, vigas, tesouras) varia de R$ 30.000,00 a R$ 60.000,00 dependendo da espécie, fornecedor e região. O kit estrutural completo inclui madeira, painéis OSB e ferragens.",
    },
    {
      question: "Pinus ou eucalipto para wood frame?",
      answer: "O pinus tratado é o padrão do mercado por sua trabalhabilidade, estabilidade dimensional e compatibilidade com os sistemas de construção wood frame. O eucalipto tratado é mais barato mas mais denso e difícil de trabalhar. Ambos requerem tratamento preservativo.",
    },
  ],
};

export const boardFeetCalculator: CalculatorSEOContent = {
  disclaimer: "Os preços são estimativas. Consulte fornecedores locais para cotações atualizadas.",
  howToUse: [
    "Insira as dimensões da peça de madeira (espessura, largura, comprimento).",
    "A calculadora converterá para pés tábua (board feet) — unidade internacional de madeira serrada.",
    "Insira o preço por pé tábua para obter o custo total.",
  ],
  materialInfo:
    "O pé tábua (board foot — BF) é a unidade de volume de madeira serrada usada internacionalmente, equivalente a uma peça de 1 polegada de espessura × 12 polegadas de largura × 12 polegadas de comprimento (equivalente a 2.360 cm³). No Brasil, embora a madeira seja frequentemente vendida por metro cúbico ou metro linear, o pé tábua é usado para precificação de madeiras nobres importadas (carvalho, cerejeira, nogueira) e para exportação. A conversão é: 1 m³ = 424 pés tábua. Para madeiras nobres brasileiras (ipê, cumaru, jatobá), os preços variam de R$ 15,00 a R$ 50,00 por pé tábua conforme a espécie e qualidade.",
  nextSteps: [
    { label: "Calculadora de Custo de Madeira", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Calculadora de Compensado", href: "/calculators/hardware/plywood-calculator/" },
    { label: "Calculadora de Tábuas para Deck", href: "/calculators/outdoor/deck-board-calculator/" },
  ],
  installationTips: [
    "Ao comprar madeira nobre por pé tábua, verifique se o preço inclui secagem em estufa (KD) ou se é madeira verde.",
    "Madeira verde precisa de secagem (perda de 5-10% do volume) antes do uso em marcenaria.",
  ],
  commonMistakes: [
    "Confundir pé tábua com metro linear — são unidades diferentes e o custo por pé tábua varia com a espessura.",
    "Não considerar a perda no beneficiamento — madeira bruta perde 15-20% ao ser aplainada.",
  ],
  faqs: [
    {
      question: "Como calcular pés tábua?",
      answer: "Pés tábua = (espessura em polegadas × largura em polegadas × comprimento em pés) / 12. Para dimensões em cm: multiplique espessura (cm) × largura (cm) × comprimento (cm) e divida por 2.360.",
    },
    {
      question: "Quanto custa um pé tábua de madeira nobre?",
      answer: "No Brasil, madeiras nobres nacionais custam: jatobá R$ 15-25/BF, ipê R$ 25-45/BF, cumaru R$ 20-35/BF. Importadas: carvalho R$ 20-35/BF, nogueira R$ 30-50/BF, cerejeira R$ 25-40/BF.",
    },
  ],
};

export const plywoodCalculatorPTBR: CalculatorSEOContent = {
  disclaimer: "Os preços refletem compensado padrão de pinus. Painéis especiais (naval, virola, madeira nobre) custam mais.",
  howToUse: [
    "Insira o comprimento e a largura da área a cobrir em metros.",
    "Selecione a espessura do compensado.",
    "Clique em Calcular Materiais para ver a quantidade de chapas e custo estimado.",
  ],
  materialInfo:
    "O compensado é um painel de madeira industrializada fabricado com lâminas finas de madeira coladas com resina, com a fibra de cada camada girada 90 graus em relação à anterior. Essa construção cruzada confere resistência, rigidez e estabilidade dimensional superiores à madeira sólida. As chapas padrão medem 1,22 × 2,44 m (2,97 m²) e estão disponíveis em espessuras de 6 mm a 25 mm. No Brasil, as qualidades mais comuns são: compensado de pinus para construção (formas, pisos base, tapumes), compensado de faces lixadas para marcenaria, e compensado naval com cola fenólica para aplicações externas e áreas úmidas. As marcas reconhecidas incluem Arauco, Masisa, Berneck e Compensados Sudati. Os preços vão de R$ 40,00 por chapa de 6 mm a R$ 180,00 por chapa de 18 mm de pinus padrão. O compensado naval de 18 mm custa R$ 200,00 a R$ 350,00 por chapa.",
  nextSteps: [
    { label: "Calculadora de Painéis OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Calculadora de Custo de Madeira", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Calculadora de Revestimento Estrutural", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "Deixe espaço de 3 mm entre chapas para expansão por umidade.",
    "Instale com a fibra da face perpendicular aos apoios (vigas ou montantes).",
    "Use pregos de 60 mm ou parafusos #8 a 15 cm nas bordas e 30 cm no campo.",
    "Escalone as juntas entre filas para máxima resistência.",
  ],
  commonMistakes: [
    "Não deixar folga de expansão — chapas encostadas empenarão ao absorver umidade.",
    "Instalar com a fibra paralela aos apoios em vez de perpendicular.",
    "Usar compensado de interiores em aplicações externas ou de alta umidade.",
  ],
  faqs: [
    {
      question: "Quantas chapas de compensado preciso?",
      answer: "Divida a área total em m² por 2,97 (área de uma chapa padrão), depois multiplique por 1,10 para 10% de desperdício. Para um piso de 30 m²: (30 × 1,10) / 2,97 = 12 chapas.",
    },
    {
      question: "Compensado ou OSB?",
      answer: "Para a maioria das aplicações estruturais, o OSB é aprovado por norma e custa 20-30% menos. O compensado é preferido para marcenaria, aplicações visíveis e onde a resistência à umidade é crítica.",
    },
    {
      question: "Qual espessura de compensado para piso base?",
      answer: "Use compensado de 18 mm para pisos base sobre vigas a 40 cm entre eixos. Para espaçamento de 60 cm, use 22 mm ou mais. Os painéis devem ser de grau estrutural.",
    },
    {
      question: "Quanto custa uma chapa de compensado?",
      answer: "No Brasil, uma chapa padrão de 1,22 × 2,44 m de compensado de pinus custa: 6 mm = R$ 40-60, 9 mm = R$ 60-80, 12 mm = R$ 90-120, 18 mm = R$ 140-180. Compensado naval de 18 mm custa R$ 200-350 por chapa.",
    },
  ],
};

// ─── FINISHING (ACABAMENTO) ─────────────────────────────────────────────────

const paintCoverageCalculatorPTBR: CalculatorSEOContent = {
  disclaimer: "O rendimento real varia conforme a textura da superfície, a marca da tinta e o método de aplicação. Superfícies rugosas ou texturizadas podem reduzir o rendimento em 20–30%.",
  howToUse: [
    "Meça a área total de paredes e tetos em metros quadrados (altura × comprimento de cada parede, depois some).",
    "Desconte as áreas de janelas e portas se desejar.",
    "Selecione o número de demãos — 2 demãos é o padrão para a maioria dos trabalhos.",
    "Clique em Calcular Materiais para ver litros e latas necessárias.",
  ],
  materialInfo:
    "A tinta acrílica (látex) é o material de acabamento padrão para paredes e tetos em construção residencial no Brasil. O rendimento varia conforme a qualidade e o tipo — os acabamentos foscos cobrem tipicamente 10 a 12 m² por litro, enquanto os acabamentos acetinados e semibrilho cobrem 8 a 10 m² por litro. As marcas mais utilizadas no Brasil incluem Suvinil (Acrílico Premium, Toque de Seda), Coral (Decora, Pinta Livre), Sherwin-Williams (Metalatex, Novacor), e Lukscolor. A tinta premium dessas marcas oferece melhor cobertura por demão e maior durabilidade. No Brasil, uma lata de 3,6 litros de tinta acrílica de qualidade média custa entre R$ 80,00 e R$ 180,00, enquanto o balde de 18 litros custa entre R$ 250,00 e R$ 600,00 dependendo da marca e linha. Para projetos grandes, comprar baldes de 18 litros é significativamente mais econômico por litro e garante consistência de cor.",
  nextSteps: [
    { label: "Calculadora de Custo de Tinta", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Calculadora de Selador (Primer)", href: "/calculators/finishing/primer-calculator/" },
    { label: "Calculadora de Placas de Drywall", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Use rolo de lã de 9 mm para paredes lisas, 15 mm para textura leve, e 23 mm para textura pesada ou massa rústica.",
    "Recorte bordas com trincha angular de 2\" antes de aplicar com rolo nas áreas grandes.",
    "Mantenha a borda molhada — trabalhe em seções de 1 metro e não deixe a borda secar antes de continuar.",
    "Aplique a tinta em padrão de W com o rolo, depois preencha uniformemente sem levantar o rolo.",
  ],
  commonMistakes: [
    "Não aplicar selador em drywall novo — o gesso sem selador absorve a tinta de forma desigual, criando manchas.",
    "Comprar pouca tinta — ficar sem tinta no meio da parede causa marcas de sobreposição visíveis.",
    "Aplicar demãos rápido demais — permita 2 a 4 horas entre demãos de tinta acrílica para secagem adequada.",
    "Usar rolos baratos — soltam pelo e deixam textura indesejada no filme de tinta.",
  ],
  faqs: [
    { question: "Quanta tinta preciso para um quarto de 3x3 metros?", answer: "Um quarto de 3x3 m com pé direito de 2,70 m tem aproximadamente 32 m² de área de paredes (menos uns 4 m² por porta e janela, sobrando uns 28 m² líquidos). Com 2 demãos a 10 m² por litro, precisa de aproximadamente 5,6 litros — compre uma lata de 3,6 litros mais uma de 3,6 litros, ou um balde de 18 litros se for pintar vários cômodos." },
    { question: "Quantos metros quadrados cobre um litro de tinta?", answer: "Um litro de tinta acrílica interior cobre de 10 a 12 m² em superfícies lisas previamente pintadas. Acabamentos foscos cobrem mais que os acetinados. Superfícies porosas como drywall novo ou massa corrida reduzem o rendimento para 7-9 m² por litro." },
    { question: "Convém comprar latas de 3,6 litros ou balde de 18 litros?", answer: "Para ambientes que precisam de mais de 8 litros da mesma cor, o balde de 18 litros é mais econômico (15-20% menos por litro) e garante consistência de cor. Para paredes de destaque ou áreas menores, as latas são mais práticas." },
    { question: "Preciso de 2 demãos de tinta?", answer: "Sim, duas demãos são recomendadas para praticamente todos os trabalhos de pintura. A primeira demão sela a superfície e a segunda entrega a profundidade de cor final e a durabilidade." },
    { question: "Quanta tinta preciso para uma casa de 120 m²?", answer: "Uma casa de 120 m² tipicamente tem 300 a 400 m² de área de paredes pintáveis. A 2 demãos com 10 m² por litro, precisa de 60 a 80 litros de tinta para paredes, mais 12 a 15 litros para tetos — equivalente a 4 a 5 baldes de 18 litros." },
  ],
};

const paintCostCalculatorPTBR: CalculatorSEOContent = {
  disclaimer: "Os preços são médias aproximadas do mercado brasileiro 2026-2025. Os preços reais variam por marca, loja e região.",
  howToUse: [
    "Insira a área total de paredes e tetos que planeja pintar em m².",
    "Selecione o número de demãos (2 é padrão).",
    "Escolha um nível de qualidade de tinta — econômica, padrão, premium ou ultra-premium.",
    "Selecione se precisa de selador (recomendado para drywall novo e mudanças de cor).",
    "Clique em Calcular Materiais para um detalhamento de custos.",
  ],
  materialInfo:
    "O custo da tinta varia significativamente por nível de qualidade. A tinta econômica (R$ 15,00 a R$ 30,00 por litro) como Suvinil Rende e Pinta Muito e Coral Rende Muito é adequada para imóveis para aluguel e áreas onde a aparência não é crítica — requer mais demãos e tem menor durabilidade. A tinta padrão (R$ 30,00 a R$ 50,00 por litro) como Suvinil Acrílico Premium e Coral Decora oferece bom rendimento e durabilidade para a maioria das aplicações. A tinta premium (R$ 50,00 a R$ 80,00 por litro) como Suvinil Toque de Seda e Sherwin-Williams Metalatex proporciona superior cobertura e lavabilidade. Além da tinta, inclua no orçamento: rolo e refis (R$ 15,00 a R$ 40,00), trinchas (R$ 10,00 a R$ 30,00), fita crepe (R$ 8,00 a R$ 20,00 por rolo), lona plástica (R$ 10,00 a R$ 25,00), e bandeja para pintura (R$ 5,00 a R$ 15,00). Um pintor profissional no Brasil cobra entre R$ 8,00 e R$ 20,00 por m² para pintura interior.",
  nextSteps: [
    { label: "Calculadora de Rendimento de Tinta", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Calculadora de Selador (Primer)", href: "/calculators/finishing/primer-calculator/" },
    { label: "Calculadora de Placas de Drywall", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Compre toda a tinta de uma só vez para garantir consistência de cor em todo o lote.",
    "Invista em rolos e trinchas de qualidade — fazem diferença notável no acabamento final.",
    "Use fita crepe em molduras, rodapés e linhas de teto para bordas limpas.",
  ],
  commonMistakes: [
    "Escolher a tinta mais barata para áreas de alto tráfego — precisará repintar em 2 a 3 anos.",
    "Não incluir o selador no orçamento — pular o selador em drywall novo dobra a quantidade de tinta necessária.",
    "Não comprar tinta suficiente — igualar uma cor personalizada depois é quase impossível.",
  ],
  faqs: [
    { question: "Quanto custa pintar um quarto?", answer: "Um quarto padrão de 3x4 m com pé direito de 2,70 m custa R$ 200,00 a R$ 600,00 em materiais (8 a 12 litros a R$ 25-50 por litro, mais R$ 50-100 em insumos). Contratar um pintor profissional custa R$ 500,00 a R$ 1.200,00 pelo mesmo quarto." },
    { question: "Vale a pena a tinta cara?", answer: "Sim, para ambientes de uso diário. Tintas premium (R$ 50-80 por litro) cobrem em menos demãos, resistem a riscos e manchas, se lavam facilmente e duram 10 a 15 anos." },
    { question: "Quanto custa pintar uma casa inteira?", answer: "Para uma casa de 100 m² com 300 m² de paredes, o custo de material (tinta padrão + selador + insumos) é de R$ 2.500,00 a R$ 5.000,00. Com mão de obra profissional, o total fica entre R$ 5.000,00 e R$ 12.000,00." },
  ],
};

const primerCalculatorPTBR: CalculatorSEOContent = {
  disclaimer: "Superfícies porosas ou texturizadas podem requerer selador adicional. Sempre siga as indicações de rendimento do fabricante.",
  howToUse: [
    "Insira os metros quadrados totais de paredes e tetos a selar.",
    "Selecione o tipo de superfície para obter a taxa de rendimento correta.",
    "Clique em Calcular Materiais para ver litros e latas necessárias.",
  ],
  materialInfo:
    "O selador (primer) é um revestimento preparatório aplicado antes da tinta de acabamento para garantir aderência adequada, brilho uniforme e cor consistente. Os diferentes tipos de superfície requerem formulações distintas. O selador acrílico é a opção padrão para drywall novo — sela a superfície porosa do gesso. O selador de aderência é usado sobre superfícies previamente pintadas ou lisas. Para madeira sem tratamento, use selador à base de resina para selar a fibra e prevenir o sangramento de taninos. No Brasil, as marcas mais populares incluem Suvinil (Fundo Preparador), Coral (Fundo Preparador), Sherwin-Williams (Metalatex Fundo Preparador) e Eucatex. O custo do selador é de R$ 15,00 a R$ 40,00 por litro, com rendimento de 8 a 12 m² por litro conforme a porosidade da superfície.",
  nextSteps: [
    { label: "Calculadora de Rendimento de Tinta", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Calculadora de Custo de Tinta", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Calculadora de Massa para Juntas", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
  ],
  installationTips: [
    "Aplique o selador com o mesmo tipo de rolo que planeja usar para a tinta de acabamento.",
    "Permita que seque completamente antes de aplicar a tinta — 1 a 2 horas para selador acrílico.",
    "Peça para tonalizar o selador em tom próximo à cor final para melhor cobertura.",
  ],
  commonMistakes: [
    "Não aplicar selador em drywall novo — causa brilhos irregulares visíveis em certos ângulos de iluminação.",
    "Usar selador acrílico sobre manchas — seladores à base d'água não bloqueiam manchas de taninos, nicotina ou umidade.",
    "Aplicar camada grossa demais — uma camada uniforme e fina é suficiente.",
  ],
  faqs: [
    { question: "Sempre preciso de selador antes de pintar?", answer: "Não sempre. O selador é essencial em drywall novo, madeira sem tratamento, áreas reparadas e quando fizer mudanças dramáticas de cor. Em superfícies previamente pintadas em bom estado com cor similar, uma tinta autosselante pode dispensar o selador separado." },
    { question: "Qual selador para drywall novo?", answer: "Use um fundo preparador acrílico (PVA) como Suvinil Fundo Preparador, Coral Fundo Preparador ou Sherwin-Williams Metalatex Fundo. Aplique uma demão, deixe secar, e então aplique a tinta de acabamento." },
    { question: "Quanto selador preciso?", answer: "O rendimento varia por superfície: drywall novo rende 8-10 m² por litro, paredes previamente pintadas rendem 10-12 m², madeira sem tratamento rende 6-8 m² por litro." },
  ],
};

// ─── OUTDOOR (ÁREAS EXTERNAS) ───────────────────────────────────────────────

const deckBoardCalculatorPTBR: CalculatorSEOContent = {
  disclaimer:
    "Esta estimativa inclui 10% de fator de desperdício para cortes e perdas de ponta. O desperdício real varia conforme a complexidade do formato e os comprimentos de tábua disponíveis. Padrões diagonais aumentam o desperdício para 15-20%.",
  howToUse: [
    "Meça o comprimento e a largura total do seu deck em metros.",
    "Insira a largura da tábua em centímetros — tábuas padrão para deck são de 14 cm.",
    "Insira o comprimento da tábua — comprimentos comerciais comuns são 2,44, 3,05, 3,66 e 4,88 m.",
    "Clique em Calcular Materiais para obter o número total de tábuas, metros lineares e área coberta.",
  ],
  materialInfo:
    "As tábuas de deck são a superfície visível do seu terraço e recebem o maior desgaste por tráfego, móveis, clima e exposição ao sol. As opções mais comuns no Brasil são madeira tratada (pinus autoclavado com CCB), madeiras nobres brasileiras (ipê, cumaru, garapa, itaúba) e deck de WPC (wood plastic composite).\n\nO pinus tratado autoclavado é a opção mais acessível, com tábuas de 2,5x14 cm custando R$ 15,00 a R$ 40,00 por metro linear. As madeiras nobres brasileiras são naturalmente resistentes a apodrecimento e cupins — o ipê (R$ 60,00-120,00/ml) é extremamente duro (densidade de 1.050 kg/m³) e dura 25 a 40 anos sem tratamento, sendo muito valorizado tanto no mercado interno quanto para exportação.\n\nO deck WPC (Madeplast, Ecowood, Tech Deck) é fabricado com fibras de madeira e plástico reciclado. Os preços variam de R$ 50,00 a R$ 150,00 por metro linear. Nunca precisa de tingimento, resiste a cupins e tem garantias de 25 a 50 anos. O espaçamento entre tábuas é crítico: mantenha 3 a 6 mm para drenagem e ventilação.",
  nextSteps: [
    { label: "Calculadora de Fundação para Deck", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Calculadora de Guarda-Corpo para Deck", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Calculadora de Escada para Deck", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Comece a primeira tábua perfeitamente alinhada e em esquadro com a casa.",
    "Pré-fure as extremidades das tábuas a menos de 5 cm da borda para prevenir rachaduras.",
    "Escalone as emendas por pelo menos 2 posições de viga para superfície mais forte e bonita.",
    "Oriente as tábuas com a curvatura para cima para que a água escorra.",
    "Deixe 6 mm entre a parede da casa e a primeira tábua para drenagem.",
  ],
  commonMistakes: [
    "Não deixar espaço entre tábuas — tábuas secas coladas empenarão ao absorver umidade.",
    "Usar parafusos curtos demais — devem penetrar pelo menos 4 cm na viga.",
    "Alinhar todas as emendas sobre a mesma viga — sempre escalone para resistência e estética.",
  ],
  faqs: [
    {
      question: "Quantas tábuas de deck preciso para um terraço de 4x5 metros?",
      answer: "Um terraço de 4x5 m usando tábuas de 14 cm de largura precisa de aproximadamente 29 tábuas de 5 m, ou 37 tábuas de 4 m (com emendas). Com 10% de desperdício, peça 32 ou 41 tábuas respectivamente.",
    },
    {
      question: "Qual madeira usar para deck no Brasil?",
      answer: "Para melhor custo-benefício: pinus tratado autoclavado (R$ 15-40/ml). Para durabilidade máxima: ipê ou cumaru (R$ 60-120/ml, duram 25-40 anos). Para zero manutenção: deck WPC (R$ 50-150/ml, garantia de 25 anos).",
    },
    {
      question: "Devo usar parafusos ou pregos nas tábuas do deck?",
      answer: "Parafusos são muito superiores. Use parafusos inox ou com revestimento anticorrosivo #8 ou #10, de 65 a 75 mm, com dois parafusos por tábua em cada viga.",
    },
  ],
};

const deckFootingCalculatorPTBR: CalculatorSEOContent = {
  disclaimer:
    "A profundidade da fundação deve atender aos requisitos locais. Esta calculadora fornece uma estimativa de distribuição em grade — a localização real depende do projeto, cargas, condições do solo e código de obras.",
  howToUse: [
    "Insira o comprimento e a largura do seu deck em metros.",
    "Defina o espaçamento máximo entre postes — 2,40 m é típico para vigas de 5x20 cm.",
    "Clique em Calcular Materiais para obter o número de sapatas, postes e vigas necessárias.",
    "Use a quantidade de sapatas para estimar o concreto — cada sapata de 30 cm de diâmetro por 1 m usa ~0,07 m³.",
  ],
  materialInfo:
    "As sapatas para deck são pilares de concreto que transferem o peso da estrutura para o solo abaixo do nível de assentamento. Sem sapatas adequadas, os ciclos de expansão e contração do solo moverão o deck, causando deslocamento e fissuras.\n\nAs sapatas residenciais padrão usam tubos de 25 ou 30 cm de diâmetro. A profundidade varia conforme o tipo de solo — geralmente entre 60 cm e 1,20 m. O concreto para sapatas deve ser fck 25 MPa (conforme ABNT NBR 6118). As conexões poste-sapata requerem ferragem aprovada — nunca embuta postes de madeira diretamente no concreto, pois isso retém umidade e causa apodrecimento. Use bases metálicas tipo Simpson para conectar o poste à sapata.",
  nextSteps: [
    { label: "Calculadora de Tábuas para Deck", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Calculadora de Concreto", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculadora de Guarda-Corpo para Deck", href: "/calculators/outdoor/deck-railing-calculator/" },
  ],
  installationTips: [
    "Escave os buracos pelo menos 15 cm abaixo do nível de assentamento exigido.",
    "Use tubos de papelão (tipo Sonotube) para sapatas limpas e com diâmetro consistente.",
    "Coloque chumbadores tipo J no concreto fresco — use gabarito para mantê-los centralizados.",
    "Espere pelo menos 48 horas antes de fixar os postes nas sapatas.",
  ],
  commonMistakes: [
    "Sapatas rasas demais — sapatas acima do nível de assentamento podem sofrer levantamento.",
    "Embutir postes de madeira no concreto — isso retém umidade e causa apodrecimento em 5-10 anos.",
    "Espaçar postes demais — exceder a capacidade da viga causa deflexão e risco estrutural.",
  ],
  faqs: [
    {
      question: "Qual profundidade para as sapatas do deck?",
      answer: "No Brasil, a profundidade varia conforme o tipo de solo, geralmente entre 60 cm e 1,20 m. Consulte um engenheiro ou o código de obras local para o requisito exato da sua região.",
    },
    {
      question: "Quantas sapatas precisa um deck de 4x5 metros?",
      answer: "Com espaçamento de postes a 2,40 m, precisa tipicamente de 6 sapatas em 2 filas de 3. Se o deck for encostado na casa com ledger, o lado da casa não precisa de sapatas.",
    },
    {
      question: "Quanto concreto por sapata?",
      answer: "Uma sapata de 30 cm de diâmetro por 1 m de profundidade requer ~0,07 m³ de concreto, equivalente a 2 sacos de concreto preparado de 40 kg.",
    },
  ],
};

const deckRailingCalculatorPTBR: CalculatorSEOContent = {
  disclaimer:
    "Esta estimativa baseia-se em espaçamento padrão de postes a 1,80 m e balaústres a 11 cm conforme ABNT NBR 14718. Os requisitos reais podem variar. Verifique com a prefeitura local.",
  howToUse: [
    "Meça o perímetro total do seu deck em metros.",
    "Insira o comprimento do lado encostado à casa — esse lado não precisa de guarda-corpo.",
    "Clique em Calcular Materiais para obter quantidade de postes, balaústres e metros lineares de corrimão.",
  ],
  materialInfo:
    "O guarda-corpo do deck é um elemento de segurança crítico exigido pela ABNT NBR 14718 em toda superfície que esteja a 1 metro ou mais acima do nível do terreno. A norma brasileira especifica altura mínima de 1,10 m para guarda-corpos residenciais (diferente dos 90 cm de normas americanas). Os balaústres devem ser espaçados de modo que uma esfera de 11 cm não passe entre eles.\n\nOs sistemas de guarda-corpo consistem em postes (tipicamente madeira tratada de 10x10 cm ou alumínio), corrimão superior, travessa inferior e balaústres. No Brasil, os materiais mais populares são madeira de lei (ipê, cumaru), alumínio com pintura eletrostática e vidro temperado. O custo do guarda-corpo de madeira nobre é de R$ 200,00 a R$ 500,00 por metro linear instalado. Sistemas de alumínio e vidro custam R$ 400,00 a R$ 1.000,00 por metro linear.",
  nextSteps: [
    { label: "Calculadora de Tábuas para Deck", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Calculadora de Escada para Deck", href: "/calculators/outdoor/deck-stair-calculator/" },
    { label: "Calculadora de Fundação para Deck", href: "/calculators/outdoor/deck-footing-calculator/" },
  ],
  installationTips: [
    "Fixe os postes com parafusos passantes de 12 mm através da viga perimetral — nunca apenas com parafusos de rosca.",
    "Use um gabarito espaçador (bloco de 11 cm) para manter espaçamento consistente de balaústres.",
    "Pré-monte as seções de guarda-corpo no chão — é mais fácil e preciso.",
  ],
  commonMistakes: [
    "Altura insuficiente — a ABNT NBR 14718 exige 1,10 m de altura para guarda-corpos residenciais no Brasil.",
    "Espaçamento excessivo de balaústres — a norma exige que uma esfera de 11 cm não passe entre eles.",
    "Fixação insuficiente dos postes — postes devem ser fixados com parafusos passantes, não apenas parafusos de rosca.",
  ],
  faqs: [
    {
      question: "Qual altura deve ter o guarda-corpo do deck?",
      answer: "A ABNT NBR 14718 exige altura mínima de 1,10 m para guarda-corpos residenciais no Brasil, medida da superfície do deck até o topo do corrimão.",
    },
    {
      question: "Quantos balaústres preciso por metro?",
      answer: "Com balaústres de 4 cm de largura e espaçamento máximo de 11 cm conforme norma brasileira, precisa de aproximadamente 7 balaústres por metro linear.",
    },
    {
      question: "Quando o guarda-corpo é obrigatório?",
      answer: "A ABNT NBR 14718 exige guarda-corpo quando a superfície estiver a 1 metro ou mais acima do nível do terreno adjacente. Mesmo abaixo dessa altura, o guarda-corpo é recomendado para segurança.",
    },
  ],
};

const deckStairCalculatorPTBR: CalculatorSEOContent = {
  disclaimer:
    "Esta calculadora usa espelho padrão de 18 cm e piso de 28 cm por degrau, conforme a ABNT NBR 9050. O espelho real pode variar conforme a altura total do deck.",
  howToUse: [
    "Meça a altura total em centímetros — distância vertical do chão até a superfície do deck.",
    "Insira a largura desejada da escada em metros — 90 cm (0,9 m) é o mínimo por norma.",
    "Clique em Calcular Materiais para obter número de degraus, quantidade de longarinas, tábuas de piso e espelho.",
  ],
  materialInfo:
    "As escadas do deck conectam a superfície do terraço ao nível do terreno e são um dos elementos mais críticos estruturalmente. A ABNT NBR 9050 estabelece: espelho (altura do degrau) máximo de 18 cm, piso (profundidade) mínimo de 28 cm, e a fórmula de Blondel (2 × espelho + piso = 63 a 65 cm) para conforto.\n\nOs dois métodos padrão são longarinas recortadas (mais comum em residências) e longarinas com cantoneiras. As longarinas recortadas são feitas de peças de 5x30 cm recortadas em padrão de serra. A largura mínima da escada é 90 cm por norma. Uma escada de 90 cm precisa de 3 longarinas (uma em cada lado mais uma central). As longarinas devem ser de madeira tratada pois ficam expostas ao clima. O descanso na base deve ser uma plataforma de concreto de pelo menos 10 cm de espessura e tão larga quanto a escada.",
  nextSteps: [
    { label: "Calculadora de Tábuas para Deck", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Calculadora de Guarda-Corpo para Deck", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Calculadora de Concreto", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Use esquadro de carpinteiro com batentes para marcar cortes consistentes nas longarinas.",
    "Corte as longarinas de peças de 5x30 cm de madeira tratada — a garganta restante deve ser pelo menos 9 cm.",
    "Fixe as longarinas na estrutura do deck com conector aprovado (Simpson LSC ou similar).",
    "Concrete uma plataforma de descanso na base com pelo menos 10 cm de espessura.",
    "Verifique todos os degraus com nível — espelhos desiguais são risco de tropeço.",
  ],
  commonMistakes: [
    "Espelhos desiguais — a norma permite variação máxima de 1 cm; espelhos inconsistentes causam quedas.",
    "Usar peças de 5x25 cm para longarinas — após os cortes, não têm garganta suficiente para segurança.",
    "Não apoiar as longarinas em plataforma de concreto — longarinas sobre terra apodrecem em 2-3 anos.",
    "Omitir a longarina central em escadas maiores que 90 cm de largura.",
  ],
  faqs: [
    {
      question: "Como calcular o número de degraus?",
      answer: "Divida a altura total pelo espelho alvo (18 cm). Para 120 cm de altura: 120 / 18 = 6,67, então precisa de 7 degraus. O espelho real é 120 / 7 = 17,1 cm. Todos os espelhos devem ter a mesma altura (tolerância de 1 cm).",
    },
    {
      question: "Qual largura mínima da escada?",
      answer: "A norma exige mínimo de 90 cm, medido entre os corrimãos. Para conforto, escadas de 1,20 m são populares.",
    },
    {
      question: "Quantas longarinas preciso?",
      answer: "Para escada de 90 cm: 3 longarinas (uma em cada lado + central). Para cada 40 cm adicionais, acrescente uma longarina. Escada de 1,20 m precisa de 4 longarinas.",
    },
    {
      question: "A escada precisa de corrimão?",
      answer: "Sim. Qualquer escada com 4 ou mais espelhos precisa de corrimão em pelo menos um lado. O corrimão deve ter 3 a 5 cm de diâmetro e ficar a 86-96 cm acima do nariz dos degraus conforme ABNT NBR 9050.",
    },
  ],
};

// ─── REGISTRY MAP ─────────────────────────────────────────────────────────────

export const registryPTBR: Record<string, Record<string, CalculatorSEOContent>> = {
  foundation: {
    "anchor-bolt-calculator": anchorBoltCalculator,
    "sill-seal-calculator": sillSealCalculator,
    "sill-plate-calculator": sillPlateCalculator,
    "concrete-calculator": concreteCalculator,
    "concrete-slab-calculator": concreteSlabCalculator,
    "concrete-footing-calculator": concreteFootingCalculator,
    "concrete-column-calculator": concreteColumnCalculator,
    "concrete-steps-calculator": concreteStepsCalculator,
    "gravel-calculator": gravelCalculator,
    "driveway-gravel-calculator": drivewayGravelCalculator,
  },
  "floor-framing": {
    "rim-joist-calculator": rimJoistCalculator,
    "floor-joist-calculator": floorJoistCalculator,
    "bridging-calculator": bridgingCalculator,
    "subfloor-adhesive-calculator": subfloorAdhesiveCalculator,
    "osb-panel-calculator": osbPanelCalculator,
  },
  "wall-framing": {
    "stud-calculator": studCalculator,
    "bottom-plate-calculator": bottomPlateCalculator,
    "top-plate-calculator": topPlateCalculator,
    "header-calculator": headerCalculator,
    "exterior-sheathing-calculator": exteriorSheathingCalculator,
  },
  roofing: {
    "truss-calculator": trussCalculator,
    "rafter-calculator": rafterCalculator,
    "ridge-board-calculator": ridgeBoardCalculator,
    "roof-sheathing-calculator": roofSheathingCalculator,
    "shingle-calculator": shingleCalculator,
    "underlayment-calculator": underlaymentCalculator,
    "drip-edge-calculator": dripEdgeCalculator,
    "roof-pitch-calculator": roofPitchCalculator,
    "roof-area-calculator": roofAreaCalculator,
    "roof-slope-calculator": roofSlopeCalculator,
  },
  "exterior-shell": {
    "housewrap-calculator": housewrapCalculator,
    "vinyl-siding-calculator": vinylSidingCalculator,
    "hardie-siding-calculator": hardieSidingCalculator,
    "window-flashing-calculator": windowFlashingCalculator,
  },
  "insulation-drywall": {
    "cavity-insulation-calculator": cavityInsulationCalculator,
    "drywall-calculator": drywallCalculator,
    "drywall-screw-calculator": drywallScrewCalculator,
    "joint-compound-calculator": jointCompoundCalculator,
  },
  hardware: {
    "framing-nail-calculator": framingNailCalculator,
    "joist-hanger-calculator": joistHangerCalculator,
    "hurricane-tie-calculator": hurricaneTieCalculator,
    "lumber-cost-calculator": lumberCostCalculator,
    "board-feet-calculator": boardFeetCalculator,
    "plywood-calculator": plywoodCalculatorPTBR,
  },
  finishing: {
    "paint-coverage-calculator": paintCoverageCalculatorPTBR,
    "paint-cost-calculator": paintCostCalculatorPTBR,
    "primer-calculator": primerCalculatorPTBR,
  },
  outdoor: {
    "deck-board-calculator": deckBoardCalculatorPTBR,
    "deck-footing-calculator": deckFootingCalculatorPTBR,
    "deck-railing-calculator": deckRailingCalculatorPTBR,
    "deck-stair-calculator": deckStairCalculatorPTBR,
  },
};
