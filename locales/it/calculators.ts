import type { CategoryMeta } from "@/content/calculators";

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Calcolatori per Fondazioni",
    description:
      "Calcoli i materiali per opere di fondazione in calcestruzzo: tasselli di ancoraggio, guarnizioni di base e dormienti in legno trattato.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Calcolatore Tasselli di Ancoraggio",
        description:
          "Quanti tasselli di ancoraggio servono? Calcolatore gratuito per tasselli a J e a cuneo con interasse standard di 1,80 m \u2014 include conteggio totale e suggerimenti per la disposizione.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Calcolatore Guarnizione di Base",
        description:
          "Calcolatore guarnizione di base: stimi i rotoli di guaina in schiuma in base al perimetro della fondazione. Strumento gratuito per larghezze 9 e 14 cm \u2014 previene l\u2019infiltrazione d\u2019aria.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Calcolatore Dormiente in Legno Trattato",
        description:
          "Quanto legno trattato per i dormienti? Calcolatore istantaneo per tavole trattate in autoclave \u2014 fornisce metri lineari e conteggio tavole.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Calcolatore Calcestruzzo",
        description:
          "Quanto calcestruzzo serve? Calcolatore gratuito per platee, plinti e pilastri \u2014 fornisce metri cubi, sacchi e fattore di sfrido.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Calcolatore Platea in Calcestruzzo",
        description:
          "Quanto calcestruzzo per una platea? Calcolatore gratuito per garage, patio e vialetti \u2014 fornisce metri cubi e conteggio sacchi per qualsiasi spessore.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Calcolatore Plinti di Fondazione",
        description:
          "Calcolatore plinti: stimi i metri cubi per plinti continui e isolati. Strumento gratuito per muri di fondazione \u2014 include fattore di sfrido.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Calcolatore Pilastri in Calcestruzzo",
        description:
          "Quanto calcestruzzo per pilastri cilindrici? Calcolatore gratuito per diametri di 20, 25 e 30 cm \u2014 fornisce metri cubi per pilastro e totale.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Calcolatore Scale in Calcestruzzo",
        description:
          "Calcolatore scale in calcestruzzo: quanti metri cubi per la scala? Strumento gratuito \u2014 inserisca larghezza, alzata, pedata e numero gradini per una stima istantanea.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
    ],
  },
  {
    slug: "floor-framing",
    title: "Calcolatori Struttura Solaio",
    description:
      "Stimi tutti i materiali per la struttura del solaio: travetti perimetrali, travetti portanti, controventature, colla per sottopavimento e pannelli OSB.",
    calculators: [
      { slug: "rim-joist-calculator", title: "Calcolatore Travetto Perimetrale", description: "Calcolatore travetto perimetrale: quante tavole per il bordo del solaio? Strumento gratuito per sezioni 6\u00d720, 6\u00d724 e 6\u00d730 cm \u2014 include conteggio tavole e metri lineari.", category: "Struttura Solaio", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Calcolatore Travetti Solaio", description: "Calcolatore travetti solaio: stimi i travetti in base alla luce e all\u2019interasse. Strumento gratuito per interassi di 40 o 60 cm \u2014 include conteggio totale tavole.", category: "Struttura Solaio", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Calcolatore Controventature", description: "Quante file di controventature servono? Calcolatore gratuito per croci di Sant\u2019Andrea e blocchi pieni in base alla luce dei travetti \u2014 risultati immediati.", category: "Struttura Solaio", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Calcolatore Adesivo Sottopavimento", description: "Calcolatore adesivo sottopavimento: quante cartucce di colla da costruzione? Stimatore gratuito in base alla superficie del solaio \u2014 copre cartucce da 310 ml e 600 ml.", category: "Struttura Solaio", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "Calcolatore Pannelli OSB", description: "Quanti pannelli OSB servono? Calcolatore gratuito per pannelli 120\u00d7240 cm per sottopavimento \u2014 tiene conto dello sfrido e fornisce il conteggio esatto.", category: "Struttura Solaio", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Calcolatori Struttura Pareti",
    description:
      "Calcoli tutto il legname per la struttura delle pareti: correnti, montanti, architravi e rivestimento strutturale per qualsiasi configurazione.",
    calculators: [
      { slug: "stud-calculator", title: "Calcolatore Montanti", description: "Quanti montanti servono? Calcolatore gratuito per interassi di 40 e 60 cm \u2014 include extra per angoli, porte e finestre.", category: "Struttura Pareti", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Calcolatore Corrente Inferiore", description: "Calcolatore corrente inferiore: stimi le tavole per il corrente di base in base alla lunghezza della parete. Strumento gratuito che fornisce conteggio tavole e metri lineari.", category: "Struttura Pareti", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Calcolatore Corrente Superiore", description: "Quanto legname per il doppio corrente superiore? Calcolatore gratuito per pareti con montanti da 4\u00d79 e 6\u00d714 cm \u2014 conteggio tavole con sfalsamento giunti incluso.", category: "Struttura Pareti", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Calcolatore Architravi", description: "Calcolatore architravi: quale sezione per la mia apertura? Strumento gratuito per luci di porte e finestre \u2014 copre sezioni da 6\u00d716 a 6\u00d730 cm.", category: "Struttura Pareti", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Calcolatore Rivestimento Strutturale Esterno", description: "Quanti pannelli di rivestimento per le pareti esterne? Calcolatore gratuito per pannelli OSB e compensato 120\u00d7240 cm \u2014 include stime dello sfrido.", category: "Struttura Pareti", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Calcolatori per la Copertura",
    description:
      "Stimi tutti i materiali per la copertura: dalle capriate e puntoni fino a tegole e guaina sottotegola.",
    calculators: [
      { slug: "truss-calculator", title: "Calcolatore Capriate", description: "Quante capriate servono? Calcolatore gratuito per interasse standard di 60 cm \u2014 inserisca la lunghezza del tetto per un conteggio istantaneo e schema di posa.", category: "Copertura", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Calcolatore Puntoni", description: "Calcolatore puntoni: stimi il numero di puntoni in base alla lunghezza del tetto e all\u2019interasse. Strumento gratuito per interassi di 40 e 60 cm \u2014 adatto a tetti a falde e a padiglione.", category: "Copertura", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Calcolatore Trave di Colmo", description: "Calcolatore trave di colmo: quante tavole per la linea di colmo del tetto? Strumento gratuito per sezioni 6\u00d720, 6\u00d724 e 6\u00d730 cm \u2014 fornisce lunghezza e conteggio.", category: "Copertura", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Calcolatore Tavolato di Copertura", description: "Quanti pannelli OSB per il tavolato del tetto? Calcolatore gratuito per pannelli 120\u00d7240 cm \u2014 tiene conto della pendenza e della percentuale di sfrido.", category: "Copertura", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Calcolatore Tegole", description: "Calcolatore tegole: quanti pacchi servono? Stimatore gratuito per tegole canadesi e marsigliesi \u2014 converte i metri quadrati in pacchi.", category: "Copertura", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Calcolatore Guaina Sottotegola", description: "Quanti rotoli di guaina sottotegola? Calcolatore gratuito per guaina bituminosa e sintetica \u2014 tiene conto di sovrapposizioni e sfrido.", category: "Copertura", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Calcolatore Gocciolatoio", description: "Calcolatore gocciolatoio: stimi i metri lineari di scossalina per il tetto. Strumento gratuito \u2014 fornisce il numero di barre da 2 m standard.", category: "Copertura", categorySlug: "roofing" },
      { slug: "roof-pitch-calculator", title: "Calcolatore Pendenza Tetto", description: "Qual \u00e8 la pendenza del tetto? Calcolatore gratuito \u2014 inserisca alzata e sviluppo per angolo istantaneo, percentuale e moltiplicatore d\u2019area.", category: "Copertura", categorySlug: "roofing" },
      { slug: "roof-area-calculator", title: "Calcolatore Superficie Tetto", description: "Calcolatore superficie tetto: converta le dimensioni in pianta nella superficie reale di copertura. Strumento gratuito \u2014 tiene conto del moltiplicatore di pendenza.", category: "Copertura", categorySlug: "roofing" },
      { slug: "roof-slope-calculator", title: "Calcolatore Inclinazione Tetto", description: "Quanto \u00e8 inclinato il tetto? Calcolatore gratuito \u2014 misuri alzata e sviluppo per ottenere rapporto di pendenza, angolo e materiale consigliato.", category: "Copertura", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Calcolatori Involucro Esterno",
    description:
      "Calcoli telo traspirante, rivestimento esterno, scossaline e nastro per giunti per l\u2019involucro della Sua abitazione.",
    calculators: [
      { slug: "housewrap-calculator", title: "Calcolatore Telo Traspirante", description: "Quanti rotoli di telo traspirante servono? Calcolatore gratuito in base alla superficie delle pareti \u2014 copre rotoli da 1 m, 1,5 m e 3 m con sovrapposizione.", category: "Involucro Esterno", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Calcolatore Rivestimento in PVC", description: "Calcolatore rivestimento in PVC: stimi i pannelli in base alla superficie delle pareti. Strumento gratuito che tiene conto di porte, finestre e 10% di sfrido.", category: "Involucro Esterno", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Calcolatore Rivestimento in Fibrocemento", description: "Quante doghe in fibrocemento servono? Calcolatore gratuito per rivestimenti tipo Eternit Cedral \u2014 copre diverse esposizioni con sfrido incluso.", category: "Involucro Esterno", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Calcolatore Nastro Impermeabile per Finestre", description: "Calcolatore nastro adesivo per finestre: stimi i metri lineari per tutte le aperture. Strumento gratuito per nastri da 10, 15 e 22 cm autoadesivi.", category: "Involucro Esterno", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Calcolatori Isolamento e Cartongesso",
    description:
      "Stimi materassini isolanti, barriere al vapore, lastre di cartongesso, viti e stucco per le finiture interne.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Calcolatore Isolamento in Intercapedine", description: "Quanti materassini isolanti servono? Calcolatore gratuito per lana di roccia e lana di vetro \u2014 copre intercapedini di pareti con montanti da 4\u00d79 e 6\u00d714 cm.", category: "Isolamento e Cartongesso", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Calcolatore Lastre di Cartongesso", description: "Quanto cartongesso serve? Calcolatore gratuito per lastre da 12,5 e 15 mm \u2014 stima pannelli 120\u00d7240 e 120\u00d7300 cm per pareti e soffitti.", category: "Isolamento e Cartongesso", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Calcolatore Viti per Cartongesso", description: "Calcolatore viti per cartongesso: quante viti per lastra? Stimatore gratuito per viti da 25 e 35 mm \u2014 fornisce conteggio totale e confezioni necessarie.", category: "Isolamento e Cartongesso", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Calcolatore Stucco per Giunti", description: "Quanto stucco per giunti serve? Calcolatore gratuito per la finitura del cartongesso \u2014 stima secchi per nastratura, stuccatura e rasatura.", category: "Isolamento e Cartongesso", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Calcolatori Ferramenta",
    description:
      "Calcoli chiodi da carpenteria, chiodi per rivestimento, staffe per travetti, squadrette antisismiche e altra ferramenta strutturale.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Calcolatore Chiodi da Carpenteria", description: "Calcolatore chiodi da carpenteria: quanti kg di chiodi per il progetto? Strumento gratuito per chiodi da 90 e 63 mm \u2014 in base al numero di montanti.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Calcolatore Staffe per Travetti", description: "Quante staffe per travetti servono? Calcolatore gratuito per staffe tipo Simpson \u2014 copre travetti di solaio e controsoffitto.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Calcolatore Squadrette Antisismiche", description: "Calcolatore squadrette antisismiche: stimi i connettori puntone-parete per la resistenza al vento e al sisma. Strumento gratuito per squadrette Simpson Strong-Tie.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "lumber-cost-calculator", title: "Calcolatore Costo Legname", description: "Quanto costa il legname? Calcolatore gratuito per tavole da 4\u00d79, 6\u00d714, 6\u00d720 e altre sezioni \u2014 stima il costo totale in base a quantit\u00e0 e prezzi correnti.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "board-feet-calculator", title: "Calcolatore Piedi Tavola", description: "Calcolatore piedi tavola: converta le dimensioni del legname in board feet. Strumento gratuito per la tariffazione del legno massello \u2014 stima istantanea di BF e costo.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "plywood-calculator", title: "Calcolatore Compensato", description: "Quanti pannelli di compensato servono? Calcolatore gratuito per spessori da 4 a 18 mm \u2014 fornisce conteggio pannelli e stima dei costi.", category: "Ferramenta", categorySlug: "hardware" },
    ],
  },
  {
    slug: "finishing",
    title: "Calcolatori Finiture",
    description:
      "Calcoli pittura, fondo, impregnante e materiali di finitura per superfici interne ed esterne.",
    calculators: [
      {
        slug: "paint-coverage-calculator",
        title: "Calcolatore Resa Pittura",
        description:
          "Quanta pittura serve? Calcolatore gratuito della resa per pareti e soffitti \u2014 tiene conto delle mani e fornisce litri e latte necessarie.",
        category: "Finiture",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Calcolatore Costo Pittura",
        description:
          "Calcolatore costo pittura: stimi il costo totale del progetto per livello di qualit\u00e0. Strumento gratuito da economica a premium \u2014 include stima accessori.",
        category: "Finiture",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Calcolatore Fondo / Primer",
        description:
          "Quanto fondo serve? Calcolatore gratuito per cartongesso nuovo, legno e ripitture \u2014 resa adattata al tipo di superficie.",
        category: "Finiture",
        categorySlug: "finishing",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Calcolatori Esterni",
    description:
      "Calcoli i materiali per terrazze, patii, recinzioni e strutture esterne.",
    calculators: [
      {
        slug: "deck-board-calculator",
        title: "Calcolatore Tavole per Terrazza",
        description:
          "Quante tavole per la terrazza servono? Calcolatore gratuito per legno trattato, larice e WPC \u2014 fornisce conteggio tavole, metri lineari e fattore di sfrido.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Calcolatore Plinti per Terrazza",
        description:
          "Calcolatore plinti per terrazza: quanti plinti in calcestruzzo servono? Strumento gratuito \u2014 fornisce conteggio plinti, disposizione pali e interasse travi.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Calcolatore Parapetto Terrazza",
        description:
          "Quanti montanti e balaustri servono? Calcolatore gratuito per il parapetto della terrazza \u2014 fornisce conteggio montanti, balaustri e metri lineari di corrimano.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Calcolatore Scale Terrazza",
        description:
          "Calcolatore scale terrazza: quanti gradini e cosciali? Strumento gratuito \u2014 inserisca l\u2019altezza della terrazza per conteggio gradini, cosciali e tavole pedata.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCalculatorBySlug(categorySlug: string, calculatorSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  return category?.calculators.find((c) => c.slug === calculatorSlug);
}
