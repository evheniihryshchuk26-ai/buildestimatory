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
        title: "Calcolatore Tasselli Gratuito — Quantità & Costo (2026)",
        description:
          "Quanti tasselli di ancoraggio servono? Calcolatore gratuito per tasselli a J e a cuneo con interasse standard di 1,80 m — include conteggio totale e suggerimenti per la disposizione.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Calcolatore Guarnizione Base Gratuito — Rotoli & m (2026)",
        description:
          "Calcolatore guarnizione di base: stimi i rotoli di guaina in schiuma in base al perimetro della fondazione. Strumento gratuito per larghezze 9 e 14 cm — previene l\u2019infiltrazione d\u2019aria.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Calcolatore Dormiente Gratuito — Metri & Pezzi (2026)",
        description:
          "Quanto legno trattato per i dormienti? Calcolatore istantaneo per tavole trattate in autoclave — fornisce metri lineari e conteggio tavole.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Calcolatore Calcestruzzo Gratuito — m³, Sacchi & Costo (2026)",
        description:
          "Quanto calcestruzzo serve? Calcolatore gratuito per platee, plinti e pilastri — fornisce metri cubi, sacchi e fattore di sfrido.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Calcolatore Platea Gratuito — m³ & Sacchi (2026)",
        description:
          "Quanto calcestruzzo per una platea? Calcolatore gratuito per garage, patio e vialetti — fornisce metri cubi e conteggio sacchi per qualsiasi spessore.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Calcolatore Plinti Gratuito — m³ & Sfrido (2026)",
        description:
          "Calcolatore plinti: stimi i metri cubi per plinti continui e isolati. Strumento gratuito per muri di fondazione — include fattore di sfrido.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Calcolatore Pilastri Gratuito — m³ & Sacchi (2026)",
        description:
          "Quanto calcestruzzo per pilastri cilindrici? Calcolatore gratuito per diametri di 20, 25 e 30 cm — fornisce metri cubi per pilastro e totale.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Calcolatore Scale Gratuito — m³ & Gradini (2026)",
        description:
          "Calcolatore scale in calcestruzzo: quanti metri cubi per la scala? Strumento gratuito — inserisca larghezza, alzata, pedata e numero gradini per una stima istantanea.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "gravel-calculator",
        title: "Calcolatore Ghiaia Gratuito — m³, Tonnellate & Costo (2026)",
        description:
          "Quanta ghiaia mi serve? Calcolatore gratuito per qualsiasi area — metri cubi, tonnellate e stima dei costi con il 10% di scarto.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "driveway-gravel-calculator",
        title: "Ghiaia Vialetto Gratuito — Tonnellate & Costo (2026)",
        description:
          "Calcolatore ghiaia per vialetto d'ingresso: stimi tonnellate e costo per tipo — pietrisco, ghiaietto, stabilizzato o granito decomposto.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "block-fill-calculator",
        title: "Riempimento Blocchi Gratuito — m³ & Sacchi (2026)",
        description:
          "Calcolatore riempimento blocchi — quanto calcestruzzo per riempire blocchi in cemento? Strumento gratuito per blocchi da 20, 25 e 30 cm. Metri cubi e numero sacchi in un attimo.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "mortar-mix-calculator",
        title: "Calcolatore Malta Gratuito — Sacchi & Tipo (2026)",
        description:
          "Calcolatore malta da muratura — strumento gratuito per stimare sacchi di malta per blocchi, mattoni e pietra. Tipi M2, M5 e M10 con opzioni di spessore giunto.",
        category: "Fondazioni",
        categorySlug: "foundation",
      },
      {
        slug: "retaining-wall-calculator",
        title: "Muro Contenimento Gratuito — Blocchi & Drenaggio (2026)",
        description:
          "Calcolatore muro di contenimento — strumento gratuito per muri in blocchi, calcestruzzo e pietra. Numero blocchi, cappelli, ghiaia di riempimento e drenaggio istantaneo.",
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
      { slug: "rim-joist-calculator", title: "Travetto Perimetrale Gratuito — Pezzi & Metri (2026)", description: "Calcolatore travetto perimetrale: quante tavole per il bordo del solaio? Strumento gratuito per sezioni 6\u00d720, 6\u00d724 e 6\u00d730 cm — include conteggio tavole e metri lineari.", category: "Struttura Solaio", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Calcolatore Travetti Gratuito — Numero & Interasse (2026)", description: "Calcolatore travetti solaio gratuito — numero, sezione e interasse in base alla luce. Per interassi di 40 e 60 cm, calcolo istantaneo.", category: "Struttura Solaio", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Controventature Gratuito — File & Blocchi (2026)", description: "Quante file di controventature servono? Calcolatore gratuito per croci di Sant\u2019Andrea e blocchi pieni in base alla luce dei travetti — risultati immediati.", category: "Struttura Solaio", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Adesivo Sottopavimento Gratuito — Cartucce & m² (2026)", description: "Calcolatore adesivo sottopavimento: quante cartucce di colla da costruzione? Stimatore gratuito in base alla superficie del solaio — copre cartucce da 310 ml e 600 ml.", category: "Struttura Solaio", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "Pannelli OSB Gratuito — Pannelli & Sfrido (2026)", description: "Quanti pannelli OSB servono? Calcolatore gratuito per pannelli 120\u00d7240 cm per sottopavimento — tiene conto dello sfrido e fornisce il conteggio esatto.", category: "Struttura Solaio", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Calcolatori Struttura Pareti",
    description:
      "Calcoli tutto il legname per la struttura delle pareti: correnti, montanti, architravi e rivestimento strutturale per qualsiasi configurazione.",
    calculators: [
      { slug: "stud-calculator", title: "Calcolatore Montanti Gratuito — Numero & Costo (2026)", description: "Quanti montanti servono? Calcolatore gratuito per interassi di 40 e 60 cm — include extra per angoli, porte e finestre.", category: "Struttura Pareti", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Corrente Inferiore Gratuito — Pezzi & Metri (2026)", description: "Calcolatore corrente inferiore: stimi le tavole per il corrente di base in base alla lunghezza della parete. Strumento gratuito che fornisce conteggio tavole e metri lineari.", category: "Struttura Pareti", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Corrente Superiore Gratuito — Pezzi & Sfalsamento (2026)", description: "Quanto legname per il doppio corrente superiore? Calcolatore gratuito per pareti con montanti da 4\u00d79 e 6\u00d714 cm — conteggio tavole con sfalsamento giunti incluso.", category: "Struttura Pareti", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Calcolatore Architravi Gratuito — Sezione & Pezzi (2026)", description: "Calcolatore architravi: quale sezione per la mia apertura? Strumento gratuito per luci di porte e finestre — copre sezioni da 6\u00d716 a 6\u00d730 cm.", category: "Struttura Pareti", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Rivestimento Esterno Gratuito — Pannelli & m² (2026)", description: "Quanti pannelli di rivestimento per le pareti esterne? Calcolatore gratuito per pannelli OSB e compensato 120\u00d7240 cm — include stime dello sfrido.", category: "Struttura Pareti", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Calcolatori per la Copertura",
    description:
      "Stimi tutti i materiali per la copertura: dalle capriate e puntoni fino a tegole e guaina sottotegola.",
    calculators: [
      { slug: "truss-calculator", title: "Calcolatore Capriate Gratuito — Numero & Interasse (2026)", description: "Calcolatore capriate gratuito — quante capriate per il mio tetto? Interasse standard di 60 cm. Inserisca la lunghezza per conteggio e schema di posa.", category: "Copertura", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Calcolatore Puntoni Gratuito — Lunghezza & Numero (2026)", description: "Calcolatore puntoni gratuito — lunghezza, numero e interasse per qualsiasi pendenza. 40 e 60 cm tra gli assi, tetti a falde e a padiglione.", category: "Copertura", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Trave di Colmo Gratuito — Lunghezza & Pezzi (2026)", description: "Calcolatore trave di colmo: quante tavole per la linea di colmo del tetto? Strumento gratuito per sezioni 6\u00d720, 6\u00d724 e 6\u00d730 cm — fornisce lunghezza e conteggio.", category: "Copertura", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Tavolato Copertura Gratuito — Pannelli & m² (2026)", description: "Quanti pannelli OSB per il tavolato del tetto? Calcolatore gratuito per pannelli 120\u00d7240 cm — tiene conto della pendenza e della percentuale di sfrido.", category: "Copertura", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Calcolatore Tegole Gratuito — Pacchi & m² (2026)", description: "Calcolatore tegole gratuito — quanti pacchi servono? Per tegole canadesi e marsigliesi. Converte i m² in pacchi istantaneamente.", category: "Copertura", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Guaina Sottotegola Gratuito — Rotoli & m² (2026)", description: "Quanti rotoli di guaina sottotegola? Calcolatore gratuito per guaina bituminosa e sintetica — tiene conto di sovrapposizioni e sfrido.", category: "Copertura", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Calcolatore Gocciolatoio Gratuito — Metri & Barre (2026)", description: "Calcolatore gocciolatoio: stimi i metri lineari di scossalina per il tetto. Strumento gratuito — fornisce il numero di barre da 2 m standard.", category: "Copertura", categorySlug: "roofing" },
      { slug: "roof-pitch-calculator", title: "Pendenza Tetto Gratuito — Angolo & Fattore (2026)", description: "Qual è la pendenza del tetto? Calcolatore gratuito — inserisca alzata e sviluppo per angolo istantaneo, percentuale e moltiplicatore d\u2019area.", category: "Copertura", categorySlug: "roofing" },
      { slug: "roof-area-calculator", title: "Superficie Tetto Gratuito — m² & Pendenza (2026)", description: "Calcolatore superficie tetto gratuito — converta le dimensioni in pianta nella superficie reale. Moltiplicatore di pendenza e m² totali inclusi.", category: "Copertura", categorySlug: "roofing" },
      { slug: "roof-slope-calculator", title: "Inclinazione Tetto Gratuito — Angolo & Materiale (2026)", description: "Calcolatore inclinazione tetto gratuito — misuri alzata e sviluppo per rapporto di pendenza, angolo e materiale di copertura consigliato.", category: "Copertura", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Calcolatori Involucro Esterno",
    description:
      "Calcoli telo traspirante, rivestimento esterno, scossaline e nastro per giunti per l\u2019involucro della Sua abitazione.",
    calculators: [
      { slug: "housewrap-calculator", title: "Telo Traspirante Gratuito — Rotoli & m² (2026)", description: "Quanti rotoli di telo traspirante servono? Calcolatore gratuito in base alla superficie delle pareti — copre rotoli da 1 m, 1,5 m e 3 m con sovrapposizione.", category: "Involucro Esterno", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Rivestimento PVC Gratuito — Pannelli & m² (2026)", description: "Calcolatore rivestimento PVC gratuito — inserisca i m² di parete per il conteggio esatto pannelli. Detrae porte, finestre e aggiunge 10% di sfrido.", category: "Involucro Esterno", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Fibrocemento Gratuito — Doghe & Sfrido (2026)", description: "Quante doghe in fibrocemento servono? Calcolatore gratuito per rivestimenti tipo Eternit Cedral — copre diverse esposizioni con sfrido incluso.", category: "Involucro Esterno", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Nastro Finestre Gratuito — Metri & Rotoli (2026)", description: "Calcolatore nastro adesivo per finestre: stimi i metri lineari per tutte le aperture. Strumento gratuito per nastri da 10, 15 e 22 cm autoadesivi.", category: "Involucro Esterno", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Calcolatori Isolamento e Cartongesso",
    description:
      "Stimi materassini isolanti, barriere al vapore, lastre di cartongesso, viti e stucco per le finiture interne.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Isolamento Intercapedine Gratuito — Rotoli & m² (2026)", description: "Quanti materassini isolanti servono? Calcolatore gratuito per lana di roccia e lana di vetro — copre intercapedini di pareti con montanti da 4\u00d79 e 6\u00d714 cm.", category: "Isolamento e Cartongesso", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Lastre Cartongesso Gratuito — Lastre & m² (2026)", description: "Quanto cartongesso serve? Calcolatore gratuito per lastre da 12,5 e 15 mm — stima pannelli 120\u00d7240 e 120\u00d7300 cm per pareti e soffitti.", category: "Isolamento e Cartongesso", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Viti Cartongesso Gratuito — Quantità & Confezioni (2026)", description: "Calcolatore viti per cartongesso: quante viti per lastra? Stimatore gratuito per viti da 25 e 35 mm — fornisce conteggio totale e confezioni necessarie.", category: "Isolamento e Cartongesso", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Stucco per Giunti Gratuito — Secchi & Costo (2026)", description: "Quanto stucco per giunti serve? Calcolatore gratuito per la finitura del cartongesso — stima secchi per nastratura, stuccatura e rasatura.", category: "Isolamento e Cartongesso", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Calcolatori Ferramenta",
    description:
      "Calcoli chiodi da carpenteria, chiodi per rivestimento, staffe per travetti, squadrette antisismiche e altra ferramenta strutturale.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Chiodi Carpenteria Gratuito — kg & Costo (2026)", description: "Calcolatore chiodi da carpenteria: quanti kg di chiodi per il progetto? Strumento gratuito per chiodi da 90 e 63 mm — in base al numero di montanti.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Staffe Travetti Gratuito — Pezzi & Tipo (2026)", description: "Quante staffe per travetti servono? Calcolatore gratuito per staffe tipo Simpson — copre travetti di solaio e controsoffitto.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Squadrette Antisismiche Gratuito — Pezzi & Costo (2026)", description: "Calcolatore squadrette antisismiche: stimi i connettori puntone-parete per la resistenza al vento e al sisma. Strumento gratuito per squadrette Simpson Strong-Tie.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "lumber-cost-calculator", title: "Costo Legname Gratuito — Pezzi & Totale (2026)", description: "Quanto costa il legname? Calcolatore gratuito per tavole da 4\u00d79, 6\u00d714, 6\u00d720 e altre sezioni — stima il costo totale in base a quantità e prezzi correnti.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "board-feet-calculator", title: "Piedi Tavola Gratuito — BF & Costo in € (2026)", description: "Calcolatore piedi tavola gratuito — converta le dimensioni in board feet. Per la tariffazione del legno massello con stima istantanea di BF e costo in €.", category: "Ferramenta", categorySlug: "hardware" },
      { slug: "plywood-calculator", title: "Compensato Gratuito — Pannelli & Costo in € (2026)", description: "Calcolatore compensato gratuito — quanti pannelli servono? Per spessori da 4 a 18 mm. Conteggio pannelli e stima dei costi in € istantanea.", category: "Ferramenta", categorySlug: "hardware" },
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
        title: "Resa Pittura Gratuito — Litri & m² (2026)",
        description:
          "Calcolatore resa pittura gratuito — quanti litri servono? Per pareti e soffitti. Tiene conto delle mani e fornisce litri e latte in €.",
        category: "Finiture",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Costo Pittura Gratuito — Litri & Budget (2026)",
        description:
          "Calcolatore costo pittura gratuito — stimi il budget totale per livello di qualità. Da economica a premium in €, include accessori e materiali.",
        category: "Finiture",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Calcolatore Fondo Gratuito — Litri & m² (2026)",
        description:
          "Quanto fondo serve? Calcolatore gratuito per cartongesso nuovo, legno e ripitture — resa adattata al tipo di superficie.",
        category: "Finiture",
        categorySlug: "finishing",
      },
      {
        slug: "epoxy-calculator",
        title: "Resina Epossidica Gratuito — Litri & Costo (2026)",
        description:
          "Calcolatore resina epossidica — quanta resina per il pavimento del garage? Strumento gratuito per ogni superficie. Litri, kit e stima costo per 1 o 2 mani.",
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
        title: "Tavole Terrazza Gratuito — Pezzi & Metri (2026)",
        description:
          "Quante tavole per la terrazza servono? Calcolatore gratuito per legno trattato, larice e WPC — fornisce conteggio tavole, metri lineari e fattore di sfrido.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Plinti Terrazza Gratuito — Plinti & m³ (2026)",
        description:
          "Calcolatore plinti per terrazza: quanti plinti in calcestruzzo servono? Strumento gratuito — fornisce conteggio plinti, disposizione pali e interasse travi.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Parapetto Terrazza Gratuito — Montanti & Balaustri (2026)",
        description:
          "Quanti montanti e balaustri servono? Calcolatore gratuito per il parapetto della terrazza — fornisce conteggio montanti, balaustri e metri lineari di corrimano.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Scale Terrazza Gratuito — Gradini & Cosciali (2026)",
        description:
          "Calcolatore scale terrazza: quanti gradini e cosciali? Strumento gratuito — inserisca l\u2019altezza della terrazza per conteggio gradini, cosciali e tavole pedata.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "post-hole-calculator",
        title: "Buche per Pali Gratuito — Sacchi & m³ (2026)",
        description:
          "Calcolatore buche per pali — quanto calcestruzzo per i pali della recinzione? Strumento gratuito per qualsiasi dimensione. Numero esatto di sacchi da 25 kg e 40 kg.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "pond-calculator",
        title: "Calcolatore Laghetto Gratuito — Litri & Telo (2026)",
        description:
          "Calcolatore laghetto — strumento gratuito per volume, dimensioni telo e portata pompa. Inserisci le dimensioni per laghetti rettangolari, ovali o a rene.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-calculator",
        title: "Calcolatore Recinzione Gratuito — Pali & Tavole (2026)",
        description:
          "Calcolatore recinzione — quanti pali, traverse e tavole per la tua recinzione? Strumento gratuito per recinzioni in legno. Lista materiali completa istantanea.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-post-calculator",
        title: "Pali Recinzione Gratuito — Pali & Cemento (2026)",
        description:
          "Calcolatore pali recinzione — quanti pali e sacchi di cemento? Strumento gratuito calcola pali, cemento e ghiaia per qualsiasi lunghezza di recinzione.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-panel-calculator",
        title: "Pannelli Recinzione Gratuito — Pannelli & Pali (2026)",
        description:
          "Calcolatore pannelli recinzione — quanti pannelli prefabbricati? Strumento gratuito per pannelli da 1,80 m e 2,50 m. Pannelli, pali e cappucci.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
      {
        slug: "picket-fence-calculator",
        title: "Calcolatore Staccionata Gratuito — Stecche & Pali (2026)",
        description:
          "Calcolatore staccionata — quante stecche con spaziatura personalizzata? Strumento gratuito per qualsiasi larghezza e distanza. Stecche, traverse, pali e volume legname.",
        category: "Esterni",
        categorySlug: "outdoor",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Calcolatori Pavimentazione",
    description:
      "Calcola i materiali per progetti di pavimentazione — parquet, moquette, piastrelle e laminato con fattore di scarto e stima dei costi.",
    calculators: [
      { slug: "flooring-calculator", title: "Calcolatore Pavimentazione Gratuito — Pacchi & m² (2026)", description: "Calcolatore pavimentazione — strumento gratuito per metri quadrati. Pacchi, scarto e lista materiali per parquet, vinile e legno prefinito.", category: "Pavimentazione", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Calcolatore Moquette Gratuito — m² & Rotoli (2026)", description: "Calcolatore moquette — strumento gratuito per metri quadrati, metri lineari e sottofondo. Per rotoli da 4 m e 5 m con pianificazione giunture.", category: "Pavimentazione", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Calcolatore Piastrelle Gratuito — Pezzi & Pacchi (2026)", description: "Calcolatore piastrelle — strumento gratuito per gres porcellanato, ceramica e pietra naturale. Quantità piastrelle, pacchi, stucco e colla.", category: "Pavimentazione", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Calcolatore Laminato Gratuito — Pacchi & m² (2026)", description: "Calcolatore laminato — stimatore gratuito di doghe e pacchi con sottopavimento. Inserisci le dimensioni per una lista materiali istantanea.", category: "Pavimentazione", categorySlug: "flooring" },
    ],
  },
  {
    slug: "stairs",
    title: "Calcolatori per Scale",
    description:
      "Calcola dimensioni scale, lunghezza cosciali, alzata/pedata, scale a chiocciola e pianerottoli. Calcolatori gratuiti conformi al NTC 2018.",
    calculators: [
      { slug: "stair-calculator", title: "Calcolatore Scale Gratuito — Gradini, Alzata & Cosciale (2026)", description: "Calcolatore scale gratuito — inserisci l'altezza totale per numero gradini, alzata, pedata e lunghezza cosciale. Conforme NTC.", category: "Scale", categorySlug: "stairs" },
      { slug: "stair-stringer-calculator", title: "Calcolatore Cosciali Gratuito — Lunghezza & Numero (2026)", description: "Calcolatore cosciali gratuito — lunghezza, numero e disposizione per qualsiasi larghezza scala. Per tavole 50×250 e 50×300 mm.", category: "Scale", categorySlug: "stairs" },
      { slug: "rise-over-run-calculator", title: "Calcolatore Alzata/Pedata Gratuito — Pendenza & Angolo (2026)", description: "Calcolatore alzata/pedata gratuito — rapporto, percentuale, angolo e descrizione istantanei. Per scale, rampe e tetti.", category: "Scale", categorySlug: "stairs" },
      { slug: "spiral-staircase-calculator", title: "Scala a Chiocciola Gratuito — Gradini & Dimensioni (2026)", description: "Calcolatore scala a chiocciola gratuito — diametro e altezza per numero gradini, alzata e rotazione. Conforme alle norme.", category: "Scale", categorySlug: "stairs" },
      { slug: "stair-landing-calculator", title: "Scala con Pianerottolo Gratuito — Rampe & Dimensioni (2026)", description: "Calcolatore scala con pianerottolo gratuito — dividi rampe con pianerottolo intermedio. Gradini per rampa, altezza pianerottolo e percorso totale.", category: "Scale", categorySlug: "stairs" },
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
