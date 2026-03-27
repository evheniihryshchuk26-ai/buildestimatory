import type { GuidesTranslations } from "@/lib/i18n/types";

const guides: GuidesTranslations = {
  breadcrumbGuides: "Guide",

  index: {
    title: "Guide alla Costruzione",
    metaDescription:
      "Guide approfondite alla costruzione per imprese edili, artigiani e appassionati di fai-da-te. Scopri tutto su interassi di orditura, scelta dei materiali, normative NTC e altro ancora.",
    heading: "Guide alla Costruzione",
    description:
      "Guide approfondite per aiutarti a prendere decisioni migliori nel tuo prossimo progetto edilizio.",
    guides: [
      {
        title: "Interasse 40 cm vs 60 cm: Guida Completa",
        description:
          "Quando usare l'interasse di 40 cm o 60 cm per montanti, travetti e puntoni. Include requisiti NTC 2018, confronto costi e impatto sui materiali.",
        href: "/guides/16-vs-24-on-center-spacing",
      },
      {
        title: "Tabella Pendenze Tetto: Guida di Riferimento Completa",
        description:
          "Tabella completa delle pendenze tetto con gradi, percentuali di pendenza e moltiplicatori per ogni inclinazione comune. Include raccomandazioni per materiali e clima.",
        href: "/guides/roof-pitch-chart",
      },
      {
        title: "Pendenza Minima del Tetto per Tegole, Lamiera e Coppi",
        description:
          "Scopri la pendenza minima del tetto per tegole in laterizio, lamiera aggraffata, coppi e altro. Include riferimenti normativi NTC e soluzioni per tetti a bassa pendenza.",
        href: "/guides/minimum-roof-pitch-for-shingles",
      },
      {
        title: "Calcestruzzo Preconfezionato vs in Sacchi: Quale Scegliere?",
        description:
          "Calcestruzzo preconfezionato vs in sacchi a confronto: costo al metro cubo, resistenza, praticità e usi migliori. Scopri quando ordinare la betoniera e quando impastare i sacchi.",
        href: "/guides/ready-mix-vs-bagged-concrete",
      },
      {
        title: "Quanto Costa il Calcestruzzo? Guida ai Prezzi 2026",
        description:
          "Il calcestruzzo costa €90–€130 al metro cubo preconfezionato. Guida completa ai prezzi per solette, fondazioni, vialetti, calcestruzzo in sacchi, manodopera e consigli per risparmiare.",
        href: "/guides/concrete-cost-guide",
      },
      {
        title: "Quanta Pittura Mi Serve? Guida Completa",
        description:
          "Quanta pittura serve per pareti, soffitti e finiture? Guida completa su misurazione, resa, mani, preparazione delle superfici e costi con link ai calcolatori.",
        href: "/guides/how-much-paint-do-i-need",
      },
      {
        title: "Guida ai Prezzi del Legname da Costruzione",
        description:
          "Prezzi aggiornati del legname per specie, classe e dimensione. Include legname segato, legno lamellare, compensato, tendenze dei prezzi, dove acquistare e sconti quantità.",
        href: "/guides/lumber-prices-guide",
      },
      {
        title: "Decking Composito vs Legno: Qual è Meglio?",
        description:
          "Decking composito vs legno a confronto: costo, durabilità, manutenzione, aspetto e durata. Scopri quale materiale è migliore per il tuo progetto e il tuo clima.",
        href: "/guides/composite-vs-wood-decking",
      },
      {
        title: "Quanto Costa la Ghiaia? Guida ai Prezzi 2026",
        description:
          "La ghiaia costa 15\u201340 EUR a tonnellata. Guida completa ai prezzi per vialetti, terrazze, sentieri, drenaggio e giardino con costi di consegna e calcolo quantit\u00e0.",
        href: "/guides/gravel-cost-guide",
      },
      {
        title: "Quanto Costa un Vialetto? Guida ai Prezzi 2026",
        description:
          "Un vialetto nuovo costa 2.000\u201315.000 EUR a seconda del materiale e della dimensione. Guida completa: calcestruzzo, asfalto, ghiaia e masselli autobloccanti con tabelle di costo, fattori di prezzo e consigli per risparmiare.",
        href: "/guides/driveway-cost-guide",
      },
      {
        title: "Guida ai Costi della Pavimentazione",
        description:
          "La pavimentazione costa 20\u2013150 \u20ac/m\u00b2 posata. Guida completa per parquet, laminato, piastrelle, moquette e vinile con stime per stanza e consigli per risparmiare.",
        href: "/guides/flooring-cost-guide",
      },
    ],
  },

  spacingGuide: {
    title: "Interasse 40 cm vs 60 cm: Guida Completa",
    metaDescription:
      "Interasse 40 cm vs 60 cm spiegato: quando usare ciascuno per montanti, travetti e puntoni. Include requisiti NTC 2018, confronto costi e impatto sui materiali.",

    heroTitle: "Interasse 40 cm vs 60 cm",
    heroSubtitle: "Guida Completa",
    heroDescription:
      "Tutto quello che devi sapere sulla scelta tra interasse di 40 cm e 60 cm per montanti parete, travetti di solaio, travetti di soffitto e puntoni del tetto.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "Usa l'interasse di 40 cm per pareti portanti, la maggior parte dei travetti di solaio e ogni applicazione che richiede massima resistenza strutturale. Usa l'interasse di 60 cm per tramezze interne non portanti, alcune capriate del tetto e situazioni dove la normativa lo consente e vuoi ridurre i costi dei materiali fino al 33%.",

    whatIsHeading: "Cos'è l'Interasse?",
    whatIsText1:
      "L'interasse è la distanza misurata dal centro di un elemento strutturale al centro del successivo. È il metodo standard con cui progettisti e normative specificano la distanza tra montanti, travetti, puntoni e capriate nelle costruzioni con orditura in legno.",
    whatIsText2:
      "Le due misure di interasse più comuni nell'edilizia residenziale sono 40 cm e 60 cm. La scelta tra queste due misure influisce sulla capacità strutturale, sul costo dei materiali, sulle prestazioni dell'isolamento e sulla compatibilità con i materiali da costruzione standard.",
    whatIsText3:
      "I materiali da costruzione standard come i pannelli in compensato, OSB e cartongesso sono prodotti in dimensioni compatibili con entrambi gli interassi di 40 e 60 cm, così i bordi dei pannelli cadono sempre su un elemento dell'orditura.",

    comparisonHeading: "Interasse 40 cm vs 60 cm: Confronto Diretto",
    comparisonSubheading:
      "Come i due interassi più comuni si confrontano in ogni applicazione principale.",
    comparisonCol1: "Applicazione",
    comparisonCol2: "Interasse 40 cm",
    comparisonCol3: "Interasse 60 cm",
    comparisonRows: [
      {
        category: "Pareti Portanti Esterne",
        oc16: "Richiesto dalla normativa NTC per la maggior parte delle pareti con montanti in legno. Opzione più resistente.",
        oc24: "Consentito con montanti di sezione maggiore in alcuni casi (verificare con il progettista).",
      },
      {
        category: "Tramezze Interne Non Portanti",
        oc16: "Comune ma non obbligatorio. Più punti di fissaggio per mobili e pensili.",
        oc24: "Conforme alla normativa. Risparmio ~33% sui montanti.",
      },
      {
        category: "Travetti di Solaio (sezione tipica)",
        oc16: "Luci maggiori consentite. Solaio più rigido e confortevole.",
        oc24: "Luci ridotte con lo stesso legname. Può risultare elastico.",
      },
      {
        category: "Travetti di Soffitto (senza carico in soffitta)",
        oc16: "Standard per soffitte praticabili. Supporta cartongesso più carichi.",
        oc24: "Adeguato per soffitti con solo cartongesso senza carico in soffitta.",
      },
      {
        category: "Puntoni / Capriate del Tetto",
        oc16: "Usato in zone con alto carico neve (>1,50 kN/m² al suolo).",
        oc24: "Standard per capriate prefabbricate in zone a clima moderato.",
      },
      {
        category: "Costo Materiale (per metro lineare di parete)",
        oc16: "~€8–€12/m (più legname, più fissaggi).",
        oc24: "~€5–€8/m (meno montanti, meno manodopera).",
      },
      {
        category: "Isolamento",
        oc16: "Pannelli standard in lana di roccia o fibra di legno nelle intercapedini.",
        oc24: "Intercapedini più larghe permettono maggiore spessore isolante. Migliori prestazioni termiche.",
      },
      {
        category: "Supporto Cartongesso",
        oc16: "Eccellente fissaggio. Minor rischio di fessurazioni e cedimenti.",
        oc24: "Richiede cartongesso da 15 mm sui soffitti per evitare flessioni.",
      },
    ],

    when16Heading: "Quando Usare l'Interasse di 40 cm",
    when16Intro:
      "L'interasse di 40 cm è l'opzione più conservativa e comunemente utilizzata. Ecco quando è richiesto o fortemente raccomandato:",
    when16Items: [
      "Pareti portanti esterne — Richiesto dalla normativa NTC 2018 per la maggior parte delle pareti con montanti in legno che sostengono carichi del tetto e dei solai.",
      "Travetti di solaio per luci maggiori — L'interasse di 40 cm consente ai travetti di coprire distanze maggiori. Per una stessa sezione di legname, l'interasse ridotto aumenta significativamente la luce consentita.",
      "Zone con finiture pesanti — Pavimenti in piastrelle, piani in pietra naturale o armadi a muro fissi beneficiano del supporto aggiuntivo dell'interasse a 40 cm.",
      "Zone sismiche o ventose — Le NTC 2018 e le normative locali nelle zone sismiche italiane spesso richiedono interasse di 40 cm (o inferiore) per le pareti di controvento.",
      "Travetti di soffitto con soffitta praticabile — Se la soffitta sarà usata come ripostiglio o futuro spazio abitabile, l'interasse di 40 cm fornisce la capacità di carico necessaria.",
      "Pareti con rivestimento pesante — Rivestimenti in laterizio faccia a vista, intonaco su supporto rigido e pannelli in fibrocemento lavorano meglio con montanti a 40 cm di interasse.",
    ],
    when16Summary:
      "In sintesi: nel dubbio, 40 cm è la scelta più sicura. Il costo aggiuntivo dei materiali è modesto rispetto ai benefici strutturali.",

    when24Heading: "Quando Usare l'Interasse di 60 cm",
    when24Intro:
      "L'interasse di 60 cm utilizza meno elementi strutturali e può far risparmiare notevolmente su materiali e manodopera. Ecco quando è appropriato:",
    when24Items: [
      "Tramezze interne non portanti — La normativa consente 60 cm di interasse per le pareti interne che non sopportano carichi strutturali. Questa è l'applicazione più comune.",
      "Capriate prefabbricate del tetto — La maggior parte delle capriate prefabbricate sono progettate per interasse di 60 cm. Il calcolo ingegneristico della capriata tiene conto dell'interasse maggiore.",
      "Costruzione con orditura ottimizzata — L'utilizzo di montanti di sezione maggiore a 60 cm con piastre singole riduce il legname fino al 30% migliorando l'isolamento.",
      "Pareti del timpano — Le pareti non strutturali del timpano sopra la linea del tetto possono tipicamente usare l'interasse di 60 cm.",
      "Travetti di soffitto (solo cartongesso) — Dove il soffitto supporta solo cartongesso senza carico in soffitta, l'interasse di 60 cm è conforme alla normativa.",
      "Progetti con budget limitato — Su una casa di 200 m², passare le pareti non portanti a 60 cm di interasse può far risparmiare €600–€1.000 solo in legname.",
    ],
    when24Summary:
      "In sintesi: 60 cm è una scelta intelligente dove la normativa lo consente, specialmente per pareti non portanti e capriate prefabbricate.",

    codeHeading: "Requisiti Normativi (NTC 2018)",
    codeIntro:
      "Le Norme Tecniche per le Costruzioni (NTC 2018 — D.M. 17/01/2018) e le norme UNI forniscono indicazioni specifiche su quando ogni interasse è consentito. Ecco i riferimenti principali:",
    codeItems: [
      "NTC 2018 §4.4 — Costruzioni in legno: pareti portanti esterne con montanti a interasse massimo definito dal progettista in base alla classe di servizio e ai carichi.",
      "UNI EN 1995-1-1 (Eurocodice 5) — Progettazione delle strutture in legno: le verifiche definiscono luci e interassi ammissibili per ogni specie, classe e sezione.",
      "NTC 2018 §4.4.6 — Travetti di solaio: le tabelle specificano luci massime per ogni specie, classe e interasse.",
      "NTC 2018 §4.4.7 — Puntoni del tetto: tabelle simili per puntoni a vari interassi.",
      "Cartongesso: UNI EN 520 — Lastre da 12,5 mm su pareti fino a 60 cm di interasse; lastre da 15 mm necessarie su soffitti con interasse di 60 cm per evitare flessioni.",
      "Le normative regionali e i regolamenti comunali possono imporre requisiti più stringenti. Verificare sempre con il proprio progettista e l'ufficio tecnico comunale.",
    ],
    codeSummary:
      "Importante: le normative stabiliscono requisiti minimi. Il progettista o l'ufficio tecnico comunale possono richiedere interassi più stretti in base alle condizioni specifiche del sito, come tipo di terreno, esposizione al vento, carico neve o zona sismica.",

    costHeading: "Confronto Costi: Interasse 40 cm vs 60 cm",
    costIntro:
      "Il risparmio sui materiali è una delle ragioni principali per cui i costruttori considerano l'interasse di 60 cm. Ecco come si suddividono i numeri:",
    costText1:
      "Per una parete standard alta 2,70 m, l'interasse di 40 cm richiede un montante ogni 40 cm — circa 2,5 montanti per metro lineare di parete. A 60 cm, servono circa 1,67 montanti per metro lineare. Si tratta di una riduzione del 33% nel numero dei montanti.",
    costText2:
      "Su una tipica casa di 200 m² su un piano con circa 60 metri lineari di tramezze interne, passare da 40 a 60 cm di interasse fa risparmiare circa 50 montanti. A €8–€12 a montante (prezzi 2026 per montanti in abete), sono €400–€600 solo di montanti. Aggiungendo il risparmio su fissaggi e manodopera (meno montanti da tagliare, trasportare e fissare), il risparmio raggiunge €600–€1.000.",
    costText3:
      "Tuttavia, non usare 60 cm di interasse solo per risparmiare sulle pareti portanti. Il costo di un cedimento strutturale o di una non conformità normativa supera di gran lunga qualsiasi risparmio sui materiali. Il risparmio si applica solo dove l'interasse di 60 cm è conforme alla normativa.",

    impactHeading: "Impatto su Altri Materiali",
    impactIntro:
      "L'interasse dell'orditura non influisce solo sul legname. Ha un effetto a catena su molteplici sistemi edilizi:",
    impactInsulationHeading: "Isolamento",
    impactInsulationText:
      "I pannelli in lana di roccia (Knauf, Isover) e fibra di legno (Gutex, Fibertherm) sono disponibili in larghezze per entrambi gli interassi di 40 e 60 cm. A 40 cm, i pannelli standard si inseriscono nelle intercapedini garantendo un buon ponte termico ridotto. A 60 cm, le intercapedini più larghe migliorano le prestazioni termiche perché ci sono meno montanti che fungono da ponti termici. Con montanti di sezione maggiore a 60 cm si possono ottenere pareti con resistenza termica superiore.",
    impactDrywallHeading: "Cartongesso",
    impactDrywallText:
      "Le lastre di cartongesso standard da 12,5 mm (Gyproc, Knauf) funzionano bene sulle pareti con entrambi gli interassi. Tuttavia, sui soffitti, con interasse di 60 cm è necessario usare lastre da 15 mm per evitare flessioni. Le lastre da 15 mm costano circa il 20–30% in più rispetto a quelle da 12,5 mm, compensando parzialmente il risparmio sull'orditura.",
    impactSheathingHeading: "Rivestimenti e Pannellature",
    impactSheathingText:
      "I pannelli in compensato e OSB funzionano con entrambi gli interassi poiché i bordi cadono sugli elementi dell'orditura. Tuttavia, a 60 cm il pannello copre una distanza maggiore senza supporto tra i montanti. Per pannellature strutturali (come il controvento delle pareti), verificare che la classe del pannello sia compatibile con l'interasse. Pannelli certificati per interasse di 60 cm sono necessari per applicazioni strutturali.",

    calculatorCtaHeading: "Calcola i Tuoi Materiali",
    calculatorCtaText:
      "Usa i nostri calcolatori gratuiti per ottenere le quantità esatte di materiale per il tuo progetto con interasse di 40 o 60 cm:",
    calculatorLinks: [
      {
        label: "Calcolatore Montanti",
        href: "/calculators/wall-framing/stud-calculator",
        description: "Calcola il numero di montanti necessari per qualsiasi lunghezza di parete e interasse.",
      },
      {
        label: "Calcolatore Travetti Solaio",
        href: "/calculators/floor-framing/floor-joist-calculator",
        description: "Determina il numero di travetti, l'interasse e il cordolo perimetrale per il tuo solaio.",
      },
      {
        label: "Calcolatore Puntoni",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calcola i puntoni necessari in base alla luce del tetto, all'interasse e alla pendenza.",
      },
      {
        label: "Calcolatore Capriate",
        href: "/calculators/roofing/roof-truss-calculator",
        description: "Stima il numero e l'interasse delle capriate per il tuo tetto.",
      },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Si può usare l'interasse di 60 cm per le pareti esterne?",
        answer:
          "Sì, ma solo con montanti di sezione maggiore e pannellatura strutturale approvata dal progettista. Le NTC 2018 e l'Eurocodice 5 consentono montanti a 60 cm per pareti portanti esterne in determinate condizioni di altezza e carico. Verificare sempre con il proprio progettista strutturale.",
      },
      {
        question: "È meglio 40 o 60 cm di interasse per montare i pensili?",
        answer:
          "L'interasse di 40 cm è migliore per l'installazione dei pensili perché offre più punti di fissaggio. Con montanti a 40 cm, un pensile da 90 cm colpirà almeno due montanti. A 60 cm, un pensile stretto potrebbe agganciare un solo montante, richiedendo tasselli o una barra di fissaggio per l'altro punto di attacco.",
      },
      {
        question: "Cosa significa interasse in edilizia?",
        answer:
          "L'interasse (abbreviato i.) indica la distanza misurata dal centro di un elemento strutturale al centro dell'elemento adiacente. Per montanti con interasse di 40 cm, il centro di ogni montante dista 40 cm dal centro del successivo. Questa misura standardizzata garantisce spaziatura uniforme e compatibilità con i pannelli di rivestimento.",
      },
      {
        question: "Quanto si risparmia con l'interasse di 60 cm?",
        answer:
          "Passare da 40 a 60 cm sulle pareti non portanti fa risparmiare circa il 33% sul materiale dei montanti. Per una tipica casa di 200 m², questo si traduce in €600–€1.000 di risparmio complessivo tra legname, fissaggi e manodopera. L'importo esatto dipende dai prezzi locali del legname e dalle tariffe della manodopera.",
      },
      {
        question: "Si può usare cartongesso da 12,5 mm su soffitti con interasse di 60 cm?",
        answer:
          "No. Con interasse di 60 cm sui soffitti è necessario usare lastre da 15 mm per evitare flessioni nel tempo, specialmente in ambienti umidi. Sulle pareti, le lastre da 12,5 mm sono accettabili con interasse di 60 cm.",
      },
      {
        question: "Cos'è l'orditura ottimizzata?",
        answer:
          "L'orditura ottimizzata è una tecnica costruttiva che utilizza montanti di sezione maggiore a 60 cm di interasse con piastre singole, angoli a due montanti e blocchi a scala. Riduce l'uso di legname fino al 30% consentendo maggiori spessori di isolamento. È riconosciuta dalle normative europee e promossa per l'efficienza energetica.",
      },
      {
        question: "Le capriate del tetto usano interasse di 40 o 60 cm?",
        answer:
          "La maggior parte delle capriate prefabbricate è progettata per interasse di 60 cm. Il produttore calcola ogni capriata per sopportare i carichi richiesti all'interasse specificato. Tuttavia, in zone con forti carichi neve (oltre 1,50 kN/m² al suolo), il progettista può prescrivere un interasse di 40 cm.",
      },
      {
        question: "L'interasse dei montanti influisce sull'efficienza energetica?",
        answer:
          "Sì. I montanti fungono da ponti termici, conducendo il calore attraverso la parete. A 40 cm di interasse, i montanti occupano circa il 25% dell'area della parete, riducendo la resistenza termica effettiva. A 60 cm, i montanti rappresentano solo il 17% circa, migliorando la trasmittanza termica complessiva. Combinato con montanti di sezione maggiore, l'interasse di 60 cm può migliorare l'efficienza energetica della parete del 15–20%.",
      },
    ],
  },

  roofPitchChart: {
    title: "Tabella Pendenze Tetto: Guida di Riferimento Completa",
    metaDescription:
      "Tabella pendenze tetto con gradi, percentuale di pendenza e moltiplicatore per ogni inclinazione da 1:12 a 12:12. Scopri quale pendenza è ideale per il tuo materiale di copertura, clima e budget.",

    heroTitle: "Tabella Pendenze Tetto",
    heroSubtitle: "Guida di Riferimento Completa",
    heroDescription:
      "Una tabella di riferimento completa che copre tutte le pendenze standard del tetto da 1:12 a 12:12, con conversioni in gradi, percentuali di pendenza, moltiplicatori di superficie e indicazioni su materiali e clima.",

    quickRefHeading: "Tabella di Riferimento Rapido Pendenze Tetto",
    quickRefSubheading:
      "Tutte le pendenze comuni del tetto con i gradi equivalenti, le percentuali di pendenza e i moltiplicatori di superficie. Il moltiplicatore indica quanto è più grande la superficie del tetto rispetto alla pianta orizzontale.",
    quickRefColPitch: "Pendenza (Salita:Corsa)",
    quickRefColDegrees: "Gradi",
    quickRefColSlope: "Pendenza %",
    quickRefColMultiplier: "Moltiplicatore",
    quickRefColDescription: "Descrizione",
    quickRefRows: [
      { pitch: "1:12", degrees: "4,76°", slopePercent: "8,3%", multiplier: "1,003", description: "Quasi piano — solo membrane o guaine bituminose" },
      { pitch: "2:12", degrees: "9,46°", slopePercent: "16,7%", multiplier: "1,014", description: "Bassa pendenza — minimo per tegole con doppio strato impermeabilizzante" },
      { pitch: "3:12", degrees: "14,04°", slopePercent: "25,0%", multiplier: "1,031", description: "Bassa pendenza — pannelli metallici, bitume modificato" },
      { pitch: "4:12", degrees: "18,43°", slopePercent: "33,3%", multiplier: "1,054", description: "Pendenza minima standard per tegole e coppi" },
      { pitch: "5:12", degrees: "22,62°", slopePercent: "41,7%", multiplier: "1,083", description: "Residenziale comune — buon drenaggio" },
      { pitch: "6:12", degrees: "26,57°", slopePercent: "50,0%", multiplier: "1,118", description: "Pendenza residenziale più diffusa in Italia" },
      { pitch: "7:12", degrees: "30,26°", slopePercent: "58,3%", multiplier: "1,158", description: "Moderatamente ripido — stile coloniale e tradizionale" },
      { pitch: "8:12", degrees: "33,69°", slopePercent: "66,7%", multiplier: "1,202", description: "Limite superiore delle pendenze standard" },
      { pitch: "9:12", degrees: "36,87°", slopePercent: "75,0%", multiplier: "1,250", description: "Ripido — buon scarico della neve" },
      { pitch: "10:12", degrees: "39,81°", slopePercent: "83,3%", multiplier: "1,302", description: "Ripido — richiede misure di sicurezza aggiuntive" },
      { pitch: "11:12", degrees: "42,51°", slopePercent: "91,7%", multiplier: "1,357", description: "Molto ripido — stili alpini e gotici" },
      { pitch: "12:12", degrees: "45,00°", slopePercent: "100,0%", multiplier: "1,414", description: "Angolo di 45 gradi — pendenza massima comune" },
    ],

    readingHeading: "Come Leggere la Notazione delle Pendenze del Tetto",
    readingText1:
      "La pendenza del tetto si esprime come rapporto tra salita verticale e corsa orizzontale. Quando leggi \"6:12\", significa che il tetto sale di 6 unità per ogni 12 unità di distanza orizzontale. In Italia si usa comunemente anche la percentuale: una pendenza del 50% corrisponde a 6:12.",
    readingText2:
      "Per convertire qualsiasi pendenza in gradi si usa la formula: gradi = arctan(salita / corsa). Per una pendenza 6:12, arctan(6/12) = 26,57 gradi. La percentuale di pendenza è semplicemente (salita / corsa) × 100, quindi una pendenza 6:12 ha il 50%.",
    readingText3:
      "Il moltiplicatore di superficie si calcola come la radice quadrata di (1 + (salita/corsa)²). Questo numero indica quanti materiali di copertura servono rispetto alla pianta orizzontale dell'edificio. Un tetto 6:12 richiede l'11,8% di materiale in più rispetto alla superficie piana, mentre un tetto 12:12 ne richiede il 41,4% in più.",

    lowSlopeHeading: "Basse Pendenze (1:12 – 3:12)",
    lowSlopeIntro:
      "I tetti a bassa pendenza sono comuni negli edifici commerciali, nelle architetture residenziali moderne e nelle estensioni come verande e porticati. Richiedono attenzione speciale all'impermeabilizzazione perché l'acqua defluisce lentamente.",
    lowSlopeItems: [
      "Pendenza 1:12 — Il minimo assoluto per qualsiasi tetto. Richiede copertura continua in membrana come TPO, EPDM o guaina bituminosa multistrato. La lamiera aggraffata con giunti sigillati è accettabile a questa pendenza.",
      "Pendenza 2:12 — La pendenza minima per l'installazione di tegole, ma solo con doppio strato di membrana impermeabilizzante sull'intero tavolato. La maggior parte dei produttori garantisce le tegole a 2:12 con sottomanto adeguato.",
      "Pendenza 3:12 — I pannelli metallici con fissaggi a vista possono essere utilizzati da questa pendenza. Anche il bitume modificato in rotoli è adatto. Il drenaggio è ancora relativamente lento, quindi si raccomanda un sottomanto di alta qualità.",
      "I materiali per tetti a bassa pendenza costano di più al metro quadro per i requisiti aggiuntivi di impermeabilizzazione e sigillatura. Preventivare €5–€15/m² in più per l'impermeabilizzazione su tetti sotto 4:12.",
      "Il drenaggio è la preoccupazione principale. L'acqua stagnante può verificarsi se la pendenza è troppo bassa o se la struttura si deforma sotto carico. Il ristagno invalida la maggior parte delle garanzie e accelera il deterioramento.",
    ],
    lowSlopeSummary:
      "I tetti a bassa pendenza sono economici per coprire grandi superfici ma richiedono impermeabilizzazione di qualità. Usare sempre materiali certificati per la pendenza specifica.",

    standardHeading: "Pendenze Standard (4:12 – 8:12)",
    standardIntro:
      "L'intervallo da 4:12 a 8:12 copre la grande maggioranza dei tetti residenziali in Italia. Queste pendenze garantiscono buon drenaggio, sono compatibili con quasi tutti i materiali di copertura e consentono l'accesso pedonale per installazione e manutenzione.",
    standardItems: [
      "Pendenza 4:12 — La pendenza minima standard per tegole e coppi in laterizio senza sottomanto speciale. La maggior parte delle normative e dei produttori specifica 4:12 come pendenza minima per un'installazione standard.",
      "Pendenza 5:12 — Una scelta diffusa per villette e case a schiera. Offre eccellente drenaggio mantenendo la linea del tetto relativamente bassa. I posatori possono camminare comodamente su questa pendenza senza attrezzature speciali.",
      "Pendenza 6:12 — La pendenza residenziale più comune in Italia. Offre un buon equilibrio tra estetica, drenaggio e spazio sottotetto. Quasi tutti i materiali di copertura rendono bene a questo angolo.",
      "Pendenze 7:12 e 8:12 — Comuni nelle case di stile tradizionale e nelle zone alpine. Creano una linea del tetto più prominente e offrono ampio spazio sottotetto. I posatori possono iniziare a usare staffe di sicurezza a 8:12.",
      "Assicurazione e valore di rivendita — I tetti con pendenza standard sono preferiti dalle assicurazioni perché scaricano acqua e detriti efficacemente. Le case con tetti tra 5:12 e 7:12 tendono ad avere i costi di manutenzione più bassi nel tempo.",
    ],
    standardSummary:
      "Le pendenze standard sono il punto ottimale per l'edilizia residenziale: compatibili con tutti i materiali comuni, facili da lavorare ed economiche.",

    steepHeading: "Pendenze Ripide (9:12 – 12:12)",
    steepIntro:
      "I tetti ripidi si trovano in baite alpine, case in stile tirolese, chiese e edifici in zone con forte nevosità. Scaricano neve e pioggia rapidamente ma costano di più da costruire e mantenere.",
    steepItems: [
      "Pendenze 9:12 e 10:12 — Comuni nelle zone alpine e prealpine. L'angolo ripido impedisce l'accumulo di neve pesante, riducendo il rischio di sovraccarico strutturale. La neve scivola rapidamente, quindi sono spesso necessari sistemi ferma-neve per proteggere i passaggi sottostanti.",
      "Pendenze 11:12 e 12:12 — Usate per effetto architettonico in case alpine, stile gotico e accenti di timpano ripido. Una pendenza 12:12 crea un angolo perfetto di 45 gradi. Questi tetti sono difficili da percorrere e richiedono ponteggi completi o sistemi di imbracatura per l'installazione.",
      "Impatto sui costi — I tetti ripidi usano significativamente più materiale (un tetto 12:12 ha il 41,4% di superficie in più rispetto a un tetto piano) e richiedono più manodopera per attrezzature di sicurezza e installazione più lenta. Aspettarsi di pagare il 20–50% in più rispetto alla stessa pianta a pendenza standard.",
      "Considerazioni sui materiali — Tegole in laterizio, coppi, ardesia e coperture metalliche rendono bene su pendenze ripide. Questi materiali spesso hanno l'aspetto migliore e durano più a lungo su tetti ripidi perché l'acqua defluisce velocemente.",
      "Resistenza al vento — I tetti ripidi intercettano più vento. Nelle zone costiere esposte, le pendenze ripide possono richiedere schemi di fissaggio rinforzati. Verificare i requisiti locali di velocità del vento prima di specificare una pendenza superiore a 8:12.",
    ],
    steepSummary:
      "Le pendenze ripide eccellono nello scaricare le precipitazioni e offrono un grande impatto estetico, ma comportano un sovrapprezzo sia per i materiali che per la manodopera.",

    costHeading: "Come la Pendenza Influisce sul Costo della Copertura",
    costIntro:
      "La pendenza del tetto influisce direttamente sul costo totale di un progetto di copertura in tre modi: quantità di materiale, difficoltà della manodopera e fattore di sfrido.",
    costText1:
      "La quantità di materiale aumenta con la pendenza perché un tetto più ripido ha più superficie. Usa il moltiplicatore dalla tabella sopra per stimare la superficie reale del tetto. Ad esempio, un edificio con pianta di 150 m² e pendenza 6:12 ha 150 × 1,118 = 167,7 m² di superficie reale. A pendenza 12:12, la stessa pianta ha 150 × 1,414 = 212,1 m² — 44,4 m² di materiale in più.",
    costText2:
      "I costi di manodopera salgono nettamente sopra la pendenza 8:12. Le squadre di posatori necessitano di attrezzature di sicurezza specializzate (imbracature, ponteggi) e la velocità di installazione cala del 25–40%. La maggior parte degli artigiani applica un sovrapprezzo per pendenze superiori a 8:12, tipicamente da €5 a €15 al metro quadro.",
    costText3:
      "Anche il fattore di sfrido aumenta su tetti ripidi e complessi. Compluvi, displuvii e colmi su tetti ripidi generano più materiale di scarto. Preventivare il 10–15% di sfrido per pendenze standard e il 15–20% per geometrie ripide o complesse.",

    materialHeading: "Pendenza Raccomandata per Materiale di Copertura",
    materialIntro:
      "Ogni materiale di copertura ha un intervallo di pendenza minima e ottimale. Usare il materiale giusto per la propria pendenza garantisce drenaggio corretto, copertura della garanzia e massima durata.",
    materialItems: [
      "Tegole in laterizio e coppi — Pendenza minima 4:12 (alcuni produttori Italcementi e Wienerberger richiedono 4,5:12). Intervallo ottimale 4:12–12:12. Eccellente longevità nel clima mediterraneo.",
      "Lamiera aggraffata — Pendenza minima 1:12 (con giunti sigillati). Intervallo ottimale 3:12–12:12. Eccellente per applicazioni a bassa e alta pendenza. I giunti aggraffati consentono la dilatazione termica.",
      "Pannelli metallici (fissaggio a vista) — Pendenza minima 3:12. Intervallo ottimale 3:12–8:12. Meno costosi della lamiera aggraffata ma non adatti a tetti a bassa pendenza per le penetrazioni delle viti.",
      "Tegole in cotto (coppi) — Pendenza minima 4:12. Intervallo ottimale 4:12–12:12. Materiale pesante che richiede struttura adeguata. Durata eccellente nel clima caldo italiano. Marchi: Monier, Wienerberger, Terreal.",
      "Ardesia — Pendenza minima 4:12. Intervallo ottimale 6:12–12:12. Il materiale di copertura più longevo (oltre 100 anni) ma estremamente pesante. Le pendenze ripide valorizzano l'ardesia esteticamente. Diffusa in Liguria e Piemonte.",
      "Membrane (TPO, EPDM, PVC) — Pendenza minima 0,25:12. Intervallo ottimale 0,25:12–3:12. Progettate per tetti piani e a bassissima pendenza. Non usate su pendenze ripide. Marchi: Mapei, Sika, Index.",
      "Guaina bituminosa — Pendenza minima 0,25:12. Intervallo ottimale 0,25:12–3:12. Strati multipli di bitume e tessuto di rinforzo creano una membrana impermeabile e duratura per tetti piani.",
    ],

    climateHeading: "Pendenza Ideale per Clima",
    climateIntro:
      "Il clima gioca un ruolo fondamentale nel determinare la pendenza ideale del tetto. Ecco come abbinare la pendenza alle condizioni meteorologiche locali in Italia:",
    climateItems: [
      "Zone alpine con forte nevosità (>1,50 kN/m² carico neve al suolo) — Usare pendenze da 8:12 a 12:12 per scaricare la neve prima che si accumuli a livelli pericolosi. Installare ferma-neve per controllare lo scarico. Le pendenze più ripide riducono il rischio di dighe di ghiaccio. Tipico di Trentino-Alto Adige, Valle d'Aosta, zone prealpine.",
      "Zone con neve moderata (0,60–1,50 kN/m²) — Usare pendenze da 6:12 a 9:12. Buon scarico neve senza il costo extra di costruzioni molto ripide. La ventilazione adeguata del sottotetto è fondamentale. Tipico di Pianura Padana, Appennino settentrionale.",
      "Zone mediterranee con piogge intense — Usare pendenze da 5:12 a 8:12 per un rapido deflusso dell'acqua. Scegliere materiali adatti all'alta umidità come lamiera o coppi in cotto. Assicurarsi che grondaie e pluviali possano gestire i picchi di portata. Tipico delle coste tirreniche e adriatiche.",
      "Clima caldo e secco — Usare pendenze da 3:12 a 5:12. Le pendenze minori riducono la superficie esposta, abbassando il guadagno termico. Lamiera riflettente o tegole chiare funzionano meglio. I tetti piani con membrana sono comuni nelle architetture mediterranee della Puglia e della Sicilia.",
      "Zone costiere ventose (velocità di progetto >110 km/h) — Usare pendenze da 4:12 a 6:12. I tetti a padiglione con pendenze moderate offrono le migliori prestazioni al vento. Evitare timpani ripidi che intercettano il vento. Usare fissaggi rinforzati e schemi di chiodatura potenziati.",
      "Clima misto — Usare pendenze da 5:12 a 7:12 come scelta versatile che gestisce pioggia, neve moderata e vento. Questo intervallo è il più comune nell'Italia centro-settentrionale per buone ragioni.",
    ],

    calculatorCtaHeading: "Calcola i Materiali del Tuo Tetto",
    calculatorCtaText:
      "Usa i nostri calcolatori gratuiti per stimare i materiali in base alla pendenza, alla superficie e al materiale scelto per il tuo tetto:",
    calculatorLinks: [
      {
        label: "Calcolatore Pendenza Tetto",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Converti tra rapporto di pendenza, gradi e percentuale.",
      },
      {
        label: "Calcolatore Superficie Tetto",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calcola la superficie reale del tetto dalla pianta e dalla pendenza.",
      },
      {
        label: "Calcolatore Pendenza",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Determina il fattore di pendenza e il moltiplicatore per qualsiasi inclinazione.",
      },
      {
        label: "Calcolatore Puntoni",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calcola lunghezza, numero e legname dei puntoni per il tuo tetto.",
      },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Quanto vale una pendenza 4/12 in gradi?",
        answer:
          "Una pendenza 4/12 equivale a 18,43 gradi. Si calcola con la formula dell'arcotangente: arctan(4/12) = 18,43°. Una pendenza 4:12 è la pendenza minima standard per tegole e coppi installati con sottomanto convenzionale.",
      },
      {
        question: "Qual è la pendenza standard del tetto per una casa?",
        answer:
          "La pendenza residenziale più comune in Italia è 6:12 (26,57 gradi), equivalente a circa il 50%. Le pendenze tra 4:12 e 8:12 sono considerate standard per l'edilizia residenziale. La pendenza esatta dipende dallo stile architettonico, dal clima e dal materiale di copertura.",
      },
      {
        question: "A cosa serve la tabella delle pendenze del tetto?",
        answer:
          "La tabella delle pendenze converte i rapporti (come 6:12) in gradi, percentuali e moltiplicatori di superficie. I costruttori la usano per determinare il materiale di copertura corretto, calcolare la superficie reale del tetto per ordinare i materiali e verificare la conformità alle normative NTC e ai requisiti dei produttori.",
      },
      {
        question: "Come misuro la pendenza del tetto da terra?",
        answer:
          "Puoi stimare la pendenza del tetto da terra usando una squadra e una livella appoggiata al bordo inclinato del tetto da una scala. In alternativa, misura dall'interno del sottotetto: appoggia una livella orizzontalmente su un puntone, misura 30 cm lungo la livella, poi misura la distanza verticale da quel punto fino al puntone. Quella distanza verticale è la tua salita proporzionale.",
      },
      {
        question: "Quale pendenza del tetto è considerata tetto piano?",
        answer:
          "Qualsiasi tetto con pendenza inferiore a 2:12 (9,46 gradi) è generalmente classificato come tetto a bassa pendenza o tetto piano dalle normative e dai produttori. I tetti realmente piani hanno comunque una leggera pendenza (tipicamente da 0,25:12 a 0,5:12) per consentire il drenaggio dell'acqua verso bocchettoni o pluviali interni.",
      },
      {
        question: "La pendenza del tetto influisce sull'assicurazione della casa?",
        answer:
          "Sì. Le compagnie assicurative considerano la pendenza del tetto nel calcolo dei premi. Le pendenze standard (4:12–8:12) ottengono generalmente le tariffe migliori perché scaricano acqua e detriti efficacemente. Pendenze molto basse possono aumentare i premi per il rischio infiltrazioni, mentre pendenze molto ripide possono aumentarli per i costi di sostituzione più elevati e la vulnerabilità al vento.",
      },
    ],
  },

  minimumRoofPitch: {
    title: "Pendenza Minima del Tetto per Tegole, Lamiera e Coppi",
    metaDescription:
      "Pendenza minima del tetto per tegole in laterizio (4:12 standard), lamiera aggraffata (1:12), coppi in cotto (4:12) e altro. Include riferimenti NTC 2018 e soluzioni per basse pendenze.",

    heroTitle: "Pendenza Minima del Tetto",
    heroSubtitle: "per Tegole, Lamiera e Coppi",
    heroDescription:
      "Ogni materiale di copertura ha un requisito di pendenza minima stabilito dalle normative e dai produttori. Installare un materiale sotto la sua pendenza minima invalida la garanzia, viola la normativa e invita le infiltrazioni. Questa guida copre i minimi per ogni materiale comune.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "La pendenza minima per tegole e coppi in laterizio standard è 4:12 (18,43 gradi). La lamiera aggraffata può arrivare fino a 1:12 (4,76 gradi), e i sistemi di copertura a membrana (TPO, EPDM) funzionano fino a 0,25:12. Le NTC 2018 e le norme UNI rimandano alle specifiche dei produttori per i limiti precisi di ogni materiale.",

    materialTableHeading: "Pendenza Minima per Materiale di Copertura",
    materialTableSubheading:
      "Questa tabella mostra la pendenza minima standard, la pendenza minima assoluta con provvedimenti speciali e note chiave per ogni materiale.",
    materialTableColMaterial: "Materiale di Copertura",
    materialTableColStandardMin: "Minimo Standard",
    materialTableColAbsoluteMin: "Minimo Assoluto",
    materialTableColNotes: "Note",
    materialTableRows: [
      {
        material: "Tegole in Laterizio (piane)",
        standardMin: "4:12",
        absoluteMin: "3:12",
        notes: "A 3:12 richiede doppio strato impermeabilizzante su tutto il tavolato. Garanzia del produttore valida solo con sottomanto approvato.",
      },
      {
        material: "Coppi in Cotto (tegole curve)",
        standardMin: "4:12",
        absoluteMin: "4:12",
        notes: "Stessi requisiti delle tegole piane. Materiale tradizionale italiano, peso elevato richiede struttura adeguata. Marchi: Monier, Wienerberger.",
      },
      {
        material: "Lamiera Aggraffata",
        standardMin: "3:12",
        absoluteMin: "1:12",
        notes: "A 1:12–2:12, i giunti devono essere sigillati meccanicamente o con nastro sigillante. Giunti idrostatici raccomandati sotto 3:12.",
      },
      {
        material: "Pannelli Metallici (fissaggio a vista)",
        standardMin: "3:12",
        absoluteMin: "3:12",
        notes: "Le penetrazioni delle viti rendono questi pannelli inadatti sotto 3:12. Rondelle sigillanti essenziali a tutte le pendenze.",
      },
      {
        material: "Tegole in Cotto",
        standardMin: "4:12",
        absoluteMin: "4:12",
        notes: "Alcuni produttori richiedono 4,5:12. Un sottomanto impermeabile è obbligatorio in tutti i casi.",
      },
      {
        material: "Tegole in Cemento",
        standardMin: "4:12",
        absoluteMin: "4:12",
        notes: "Simile alle tegole in cotto. Peso elevato (circa 50 kg/m²) richiede struttura dimensionata. Marchi: Italcementi, Braas.",
      },
      {
        material: "Ardesia",
        standardMin: "4:12",
        absoluteMin: "4:12",
        notes: "Materiale pregiato. Estremamente pesante. Richiede posatori specializzati e orditura rinforzata. Diffusa in Liguria.",
      },
      {
        material: "Scandole in Legno",
        standardMin: "4:12",
        absoluteMin: "4:12",
        notes: "Richiedono spaziatura tra le scandole per ventilazione. Tradizionali in zone alpine (Trentino, Valle d'Aosta).",
      },
      {
        material: "Guaina Bituminosa Multistrato",
        standardMin: "0,25:12",
        absoluteMin: "0,25:12",
        notes: "Strati multipli di bitume e rinforzo. Progettata per tetti piani e quasi piani. Richiede drenaggio positivo. Marchi: Mapei, Index.",
      },
      {
        material: "Membrane TPO / EPDM / PVC",
        standardMin: "0,25:12",
        absoluteMin: "0,25:12",
        notes: "Membrane monostrato con giunti termosaldati o adesivi. Standard per tetti piani commerciali. Marchi: Sika, Mapei.",
      },
      {
        material: "Bitume Modificato",
        standardMin: "0,5:12",
        absoluteMin: "0,25:12",
        notes: "Applicato a fiamma o autoadesivo. Comune su estensioni residenziali a bassa pendenza e portici.",
      },
    ],

    whyMinHeading: "Perché la Pendenza Minima è Importante",
    whyMinIntro:
      "La specifica di pendenza minima non è arbitraria. Esiste perché ogni materiale di copertura si affida alla gravità per allontanare l'acqua dal tetto prima che possa penetrare giunti, sovrapposizioni e fori dei fissaggi. Ecco perché è importante:",
    whyMinItems: [
      "Infiltrazioni d'acqua — Sotto la pendenza minima, l'acqua si muove troppo lentamente sulla superficie del tetto. Può risalire sotto le tegole per azione capillare, penetrare attorno ai fori dei chiodi e infiltrarsi nelle sovrapposizioni. Anche una piccola infiltrazione causa marciume, muffa e danni strutturali nel tempo.",
      "Copertura della garanzia — Ogni produttore specifica una pendenza minima nelle istruzioni di installazione. Installare il prodotto sotto quella pendenza invalida completamente la garanzia. In caso di infiltrazione, il produttore negherà il reclamo e il proprietario dovrà sostenere l'intero costo della riparazione.",
      "Conformità normativa — Le NTC 2018 e le norme UNI rimandano ai requisiti di installazione dei produttori. Un tetto installato sotto la pendenza minima non supera il collaudo e può richiedere la rimozione e la reinstallazione a spese del proprietario.",
      "Prevenzione delle dighe di ghiaccio — Nei climi freddi delle zone alpine e prealpine, i tetti a bassa pendenza sono più soggetti alle dighe di ghiaccio. L'acqua di fusione si ricongela ai bordi, creando una diga che forza l'acqua sotto il manto di copertura. Pendenze maggiori aiutano l'acqua a scorrere prima di potersi congelare.",
      "Implicazioni assicurative — Le polizze casa possono escludere la copertura per danni da acqua causati da installazione impropria del manto. Se la pendenza è inferiore al requisito minimo, l'assicuratore può classificarlo come difetto preesistente e negare i reclami.",
    ],
    whyMinSummary:
      "Installare il materiale di copertura alla pendenza minima o superiore non è opzionale. Protegge la garanzia, soddisfa i requisiti normativi e previene danni da acqua che possono costare migliaia di euro da riparare.",

    codeHeading: "Requisiti Normativi",
    codeIntro:
      "Le normative edilizie stabiliscono requisiti minimi di pendenza per proteggere la sicurezza degli occupanti e la longevità dell'edificio. Ecco i riferimenti chiave:",
    codeItems: [
      "NTC 2018 — Le Norme Tecniche rimandano alle norme UNI per le specifiche di installazione dei materiali di copertura. La pendenza minima è definita dal produttore e verificata in fase di progetto.",
      "UNI EN 1304 (Tegole in cotto) — Pendenza minima 4:12 per tegole piane. Requisiti di sottomanto più stringenti a basse pendenze.",
      "UNI EN 14782 (Lamiera metallica) — Pendenza minima variabile in base al profilo del pannello. Lamiera aggraffata ammessa fino a 1:12.",
      "UNI EN 490 (Tegole in cemento) — Pendenza minima 4:12 per tegole piane. Il sottomanto impermeabile è sempre richiesto.",
      "UNI EN 12326 (Ardesia) — Pendenza minima 4:12. Richiede fissaggi in acciaio inox e sottomanto approvato.",
      "I regolamenti regionali e comunali possono imporre requisiti più stringenti. Verificare sempre con il proprio progettista e con l'ufficio tecnico del comune prima di selezionare i materiali di copertura.",
    ],
    codeSummary:
      "Le normative sono requisiti minimi, non buone pratiche. Molti professionisti raccomandano pendenze almeno un gradino sopra il minimo normativo per fornire un margine di sicurezza extra contro la pioggia battente.",

    belowMinHeading: "Cosa Succede Sotto la Pendenza Minima",
    belowMinIntro:
      "Installare un materiale di copertura sotto la sua pendenza minima crea una cascata di problemi che peggiorano nel tempo:",
    belowMinItems: [
      "Garanzia del produttore invalidata — Questa è la conseguenza più immediata. Il produttore non ha alcun obbligo di sostituire materiale difettoso o coprire i costi di manodopera se il prodotto è stato installato fuori specifica. I reclami in garanzia vengono regolarmente negati per violazioni di pendenza.",
      "Infiltrazioni croniche — L'acqua ristagna più a lungo sul tetto e penetra giunti, sovrapposizioni e fori dei fissaggi. Queste infiltrazioni possono non manifestarsi immediatamente ma svilupparsi entro 2–5 anni con il deterioramento dei sigillanti.",
      "Dighe di ghiaccio nei climi freddi — I tetti a bassa pendenza nelle zone alpine sono altamente soggetti alle dighe di ghiaccio perché la neve si scioglie lentamente e si ricongela ai bordi, forzando l'acqua sotto il manto di copertura.",
      "Muffa e marciume — L'umidità persistente da drenaggio lento crea condizioni ideali per la crescita di muffa nel sottotetto e marciume nel tavolato e nell'orditura. La bonifica e la riparazione strutturale possono costare €10.000–€30.000 o più.",
      "Collaudo non superato — Un tetto che non rispetta i requisiti minimi di pendenza non supererà il collaudo. L'ufficio tecnico può emettere un ordine di sospensione lavori e richiedere la rimozione e reinstallazione con materiali conformi, raddoppiando il costo del progetto.",
      "Durata ridotta — Anche se le infiltrazioni sono minime, i materiali installati sotto la pendenza minima si deteriorano più rapidamente. Le tegole su un tetto 2:12 senza sottomanto adeguato possono durare solo 10–12 anni contro 30–50 anni alla pendenza corretta.",
    ],
    belowMinSummary:
      "Non esistono scorciatoie per la pendenza minima. Il costo di fare le cose bene la prima volta è sempre inferiore al costo di riparazione, sostituzione e bonifica dei danni da acqua.",

    solutionsHeading: "Soluzioni per Tetti a Bassa Pendenza",
    solutionsIntro:
      "Se il tuo tetto ha una pendenza inferiore a 4:12, hai comunque diverse ottime opzioni di copertura. Ecco gli approcci più affidabili:",
    solutionsItems: [
      "Sottomanto impermeabilizzante completo — Per pendenze tra 2:12 e 4:12, coprire l'intero tavolato con membrana autoadesiva impermeabilizzante prima di installare le tegole. Questo crea una barriera secondaria impermeabile. Costo: circa €5–€12 al m² in più rispetto al feltro standard. Marchi: Mapei, Index, Sika.",
      "Copertura in lamiera aggraffata — I pannelli con giunti aggraffati meccanicamente funzionano fino a 1:12. Le aggraffature rialzate mantengono i canali dell'acqua lontani dalla superficie piana. Scegliere pannelli con altezza minima dell'aggraffatura di 40 mm per pendenze sotto 3:12. Spesso la migliore opzione per tetti residenziali a bassa pendenza.",
      "Sistemi di copertura a membrana — Per pendenze sotto 2:12, le membrane TPO, EPDM o PVC sono lo standard. Queste membrane monostrato sono termosaldate o incollate per creare una superficie impermeabile continua. Marchi consigliati: Mapei Polyglass, Sika-Trocal, Flag.",
      "Bitume modificato — Il bitume modificato applicato a fiamma o autoadesivo offre una superficie impermeabile e duratura per tetti a bassa pendenza. È una buona scelta per portici, tettoie e piccole estensioni. Strati multipli aumentano l'affidabilità dell'impermeabilizzazione.",
      "Modifica strutturale — In alcuni casi, è economicamente conveniente aumentare la pendenza del tetto aggiungendo nuovi puntoni o capriate sulla struttura esistente. Questo consente di usare materiali di copertura standard. Consultare un ingegnere strutturale prima di modificare qualsiasi struttura del tetto.",
      "Coibentazione a pendenza e compluvi — Su tetti piani o quasi piani, i pannelli coibentanti a pendenza possono creare drenaggio positivo verso bocchettoni o pluviali. Un compluvio dietro camini e pareti previene il ristagno d'acqua alle penetrazioni.",
    ],
    solutionsSummary:
      "I tetti a bassa pendenza non sono un problema se si usano i materiali giusti. La lamiera aggraffata e i sistemi a membrana offrono decenni di servizio affidabile su pendenze che distruggerebbero le tegole.",

    calculatorCtaHeading: "Calcola i Materiali del Tuo Tetto",
    calculatorCtaText:
      "Usa i nostri calcolatori gratuiti per determinare i materiali e le quantità giuste per la pendenza del tuo tetto:",
    calculatorLinks: [
      {
        label: "Calcolatore Pendenza Tetto",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Converti tra rapporto di pendenza, gradi e percentuale.",
      },
      {
        label: "Calcolatore Superficie Tetto",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calcola la superficie reale del tetto dalla pianta e dalla pendenza.",
      },
      {
        label: "Calcolatore Pendenza",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Determina il fattore di pendenza e il moltiplicatore per qualsiasi inclinazione.",
      },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Si possono mettere le tegole su un tetto con pendenza 2/12?",
        answer:
          "Sì, ma solo con sottomanto speciale. A pendenza 2:12, è necessario un doppio strato di membrana autoadesiva impermeabilizzante che copra l'intero tavolato. La maggior parte dei produttori garantisce le tegole a 2:12 quando questo sottomanto è correttamente installato. Senza la membrana integrale, la pendenza minima per le tegole è 4:12.",
      },
      {
        question: "Qual è la pendenza minima per la copertura in lamiera?",
        answer:
          "Per la lamiera aggraffata, la pendenza minima è 1:12 (un centimetro di salita per 12 cm di corsa). Tuttavia, a pendenze tra 1:12 e 3:12, i giunti devono essere sigillati meccanicamente o con nastro sigillante per prevenire infiltrazioni. I pannelli metallici con fissaggi a vista richiedono una pendenza minima di 3:12 perché le penetrazioni delle viti sono vulnerabili all'acqua a pendenze inferiori.",
      },
      {
        question: "Cosa succede se la pendenza è troppo bassa per le tegole?",
        answer:
          "Se le tegole sono installate sotto la pendenza minima, l'acqua si muove troppo lentamente per superare le sovrapposizioni. L'azione capillare risucchia l'acqua sotto le tegole e la pioggia battente spinge l'acqua sotto i bordi. Questo causa infiltrazioni croniche, marciume nel tavolato, crescita di muffa e invalidazione della garanzia del produttore.",
      },
      {
        question: "Una pendenza 3/12 va bene per le tegole in laterizio?",
        answer:
          "Una pendenza 3:12 è tra il minimo assoluto (2:12 con membrana impermeabilizzante integrale) e il minimo standard (4:12 con sottomanto convenzionale). A 3:12, è necessario installare una membrana impermeabilizzante completa su tutto il tavolato prima di posare le tegole. Con questo sottomanto, la maggior parte dei produttori garantirà le tegole a 3:12.",
      },
      {
        question: "Qual è la pendenza minima per un tetto in coppi?",
        answer:
          "La pendenza minima per coppi in cotto e tegole in cemento è generalmente 4:12, anche se alcuni produttori specificano 4,5:12. A qualsiasi pendenza, il sottomanto impermeabile è obbligatorio. I profili ad incastro possono essere approvati per pendenze fino a 2,5:12 a seconda del produttore e della normativa locale.",
      },
      {
        question: "Si può cambiare la pendenza di un tetto esistente?",
        answer:
          "Sì, è possibile modificare la pendenza di un tetto esistente aggiungendo nuovi puntoni o capriate sulla struttura attuale. Si tratta di una modifica strutturale significativa che richiede calcoli ingegneristici, permessi edilizi e installazione professionale. Il costo varia tipicamente da €10.000 a €30.000 a seconda della dimensione del tetto e dell'entità della modifica. Necessario il deposito del progetto strutturale al Genio Civile.",
      },
    ],
  },

  readyMixVsBagged: {
    title: "Calcestruzzo Preconfezionato vs in Sacchi: Quale Scegliere?",
    metaDescription:
      "Calcestruzzo preconfezionato vs in sacchi a confronto: costo al metro cubo, resistenza, praticità e usi migliori. Scopri quando ordinare la betoniera e quando impastare i sacchi.",

    heroTitle: "Calcestruzzo Preconfezionato vs in Sacchi",
    heroSubtitle: "Quale Scegliere?",
    heroDescription:
      "Un confronto completo tra calcestruzzo preconfezionato (consegnato con autobetoniera) e calcestruzzo in sacchi (Mapei, Kerakoll) per aiutarti a scegliere l'opzione giusta per dimensione del progetto, budget e tempistiche.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "Usa il calcestruzzo in sacchi per piccoli progetti sotto 1 metro cubo — pali di recinzione, piccole basi, riparazioni e tutto ciò che puoi impastare a mano o con una betoniera portatile. Usa il calcestruzzo preconfezionato (consegna con autobetoniera) per tutto ciò che supera 1 metro cubo — vialetti, solette, fondazioni e grandi getti dove qualità costante e velocità contano. Il costo al metro cubo è simile (€90–€130), ma le spese di consegna e gli ordini minimi rendono il preconfezionato impraticabile per piccoli lavori.",

    whatIsReadyMixHeading: "Cos'è il Calcestruzzo Preconfezionato?",
    whatIsReadyMixText1:
      "Il calcestruzzo preconfezionato viene dosato in un impianto centrale, mescolato nel tamburo rotante dell'autobetoniera e consegnato in cantiere pronto per il getto. Il calcestruzzo arriva completamente miscelato alla classe di resistenza specificata (tipicamente C25/30 o C30/37 per lavori residenziali, secondo le NTC 2018), con il corretto rapporto acqua/cemento già calibrato dall'impianto. Basta dirigere lo scivolo o la pompa dove serve il calcestruzzo.",
    whatIsReadyMixText2:
      "Un'autobetoniera standard contiene 6–8 metri cubi di calcestruzzo e può generalmente scaricare l'intero carico in 30–90 minuti. La maggior parte dei fornitori richiede un ordine minimo di 1 metro cubo, con supplementi per carichi ridotti su ordini inferiori a 3–4 m³. L'autobetoniera deve poter accedere entro 20 metri dal punto di getto, oppure serve una pompa per calcestruzzo (€150–€250+/ora) per raggiungere distanze maggiori.",

    whatIsBaggedHeading: "Cos'è il Calcestruzzo in Sacchi?",
    whatIsBaggedText1:
      "Il calcestruzzo in sacchi è una miscela pre-dosata di cemento Portland, sabbia e ghiaia venduta in sacchi nei centri bricolage e nei magazzini edili. I marchi più comuni in Italia sono Mapei, Kerakoll, Buzzi Unicem e marchi di catena Leroy Merlin e Bricoman. I sacchi vengono da 25 kg e 30 kg. Si aggiunge acqua, si impasta a mano o con una betoniera e si getta nelle casseforme. Un sacco da 25 kg produce circa 12 litri di calcestruzzo finito, il che significa che servono circa 80–85 sacchi per fare un metro cubo.",
    whatIsBaggedText2:
      "Il calcestruzzo in sacchi raggiunge tipicamente la classe C25/30 in 28 giorni, comparabile al preconfezionato residenziale standard. La comodità è che acquisti esattamente ciò che ti serve da qualsiasi magazzino edile, impasti al tuo ritmo e non hai bisogno di accesso per mezzi pesanti. Il compromesso è che l'impasto è faticoso e grandi volumi diventano impraticabili — impastare 80+ sacchi per un singolo metro cubo richiede diverse ore di lavoro fisico pesante.",

    comparisonHeading: "Preconfezionato vs in Sacchi: Confronto Diretto",
    comparisonSubheading:
      "Come il calcestruzzo consegnato con autobetoniera e quello in sacchi si confrontano sui fattori più importanti.",
    comparisonCol1: "Fattore",
    comparisonCol2: "Preconfezionato (Autobetoniera)",
    comparisonCol3: "In Sacchi (Mapei, Kerakoll, ecc.)",
    comparisonRows: [
      {
        category: "Costo al Metro Cubo",
        readyMix: "€90–€130/m³ (solo materiale). Spese di consegna €50–€100+ possono applicarsi.",
        bagged: "€100–€150/m³ (circa 80–85 sacchi da 25 kg a €3–€5 ciascuno).",
      },
      {
        category: "Ordine Minimo",
        readyMix: "1 m³ minimo. Supplementi carico ridotto (€30–€60/m³) per ordini sotto 3–4 m³.",
        bagged: "Nessun minimo. Acquista quanti sacchi ti servono.",
      },
      {
        category: "Resistenza (Classe)",
        readyMix: "Personalizzabile: C20/25 fino a C50/60+. Standard residenziale C25/30–C30/37.",
        bagged: "Standard C25/30. Miscele ad alta resistenza disponibili C30/37.",
      },
      {
        category: "Praticità",
        readyMix: "Arriva pronto per il getto. Nessun impasto. Veloce per grandi volumi.",
        bagged: "Va impastato in cantiere. Faticoso per grandi quantità.",
      },
      {
        category: "Tempo di Miscelazione",
        readyMix: "Zero — arriva pre-miscelato. Il tempo di getto dipende dall'accesso e dal volume.",
        bagged: "3–5 minuti per sacco a mano. 1–2 minuti per sacco con betoniera.",
      },
      {
        category: "Ideale Per",
        readyMix: "Vialetti, solette >10 m², fondazioni, plinti, grandi getti.",
        bagged: "Pali di recinzione, pali per cassette postali, piccole basi, riparazioni, zone remote.",
      },
      {
        category: "Conservazione",
        readyMix: "Va gettato entro 60–90 minuti dalla miscelazione. Non stoccabile.",
        bagged: "6–12 mesi se conservato asciutto e sigillato. Acquistabile in anticipo.",
      },
      {
        category: "Controllo Qualità",
        readyMix: "Dosaggio controllato in impianto. Consistente tra i lotti. Testato secondo norme UNI.",
        bagged: "Dipende dalla tecnica di impasto e dal rapporto acqua. Più margine di errore.",
      },
    ],

    costHeading: "Analisi dei Costi: Preconfezionato vs in Sacchi",
    costIntro:
      "Il costo al metro cubo del calcestruzzo è sorprendentemente simile tra le due opzioni. La vera differenza di costo viene dalle spese di consegna, dalla manodopera e dalla scala del progetto.",
    costText1:
      "Calcestruzzo in sacchi: un sacco da 25 kg di Mapei o Kerakoll costa €3–€5 nella maggior parte dei magazzini edili e centri bricolage (prezzi 2026). Ogni sacco da 25 kg produce circa 12 litri. Un metro cubo equivale a 1.000 litri, quindi servono circa 80–85 sacchi per metro cubo. A €4 per sacco, sono circa €340 al metro cubo solo di materiale. Sacchi da 30 kg (€4,50–€6) sono comuni nei magazzini edili e portano il costo a circa €150–€200 per m³. Considerando il tempo per impastare (facilmente 5–7 ore per m³ a mano), il costo totale incluso il valore della tua manodopera è significativamente più alto del preconfezionato per grandi getti.",
    costText2:
      "Calcestruzzo preconfezionato: il prezzo base per C25/30 standard varia da €90 a €130 al metro cubo, a seconda della regione e del costo attuale del cemento. La maggior parte dei fornitori aggiunge spese di consegna (€50–€100 per viaggio standard) e può applicare supplementi per carico ridotto (€30–€60/m³) per ordini sotto il minimo (tipicamente 3–4 m³). Un supplemento carburante di €20–€40 è comune. Per un getto di 4 m³ per un vialetto, aspettarsi €400–€550 di materiale più €50–€150 di supplementi, per un totale di €450–€700.",
    costText3:
      "In sintesi: per progetti sotto mezzo metro cubo (circa 40–45 sacchi), il calcestruzzo in sacchi è quasi sempre più economico e pratico. Per progetti sopra 1 metro cubo, il preconfezionato fa risparmiare ore di manodopera e costa tipicamente meno al metro cubo una volta considerato il valore del tuo tempo. Il punto di pareggio è solitamente intorno a 0,75–1,0 metro cubo.",

    whenReadyMixHeading: "Quando Scegliere il Calcestruzzo Preconfezionato",
    whenReadyMixIntro:
      "Il calcestruzzo preconfezionato è la scelta chiara per progetti più grandi dove volume, velocità e consistenza contano. Ecco le situazioni dove ordinare l'autobetoniera è la scelta giusta:",
    whenReadyMixItems: [
      "Progetti che richiedono più di 1 metro cubo — Impastare più di 80 sacchi a mano è estenuante, lento e aumenta il rischio di giunti freddi (dove calcestruzzo fresco incontra calcestruzzo parzialmente indurito). L'autobetoniera consegna tutto in una volta.",
      "Vialetti, patii e grandi solette — Un tipico vialetto doppio (5×5 m, 10 cm di spessore) richiede circa 2,5 m³. Sarebbero oltre 200 sacchi. L'autobetoniera getta il tutto in meno di un'ora.",
      "Fondazioni e plinti — Il calcestruzzo strutturale per fondazioni dovrebbe essere gettato in continuità quando possibile. Il preconfezionato fornisce il volume e la consistenza che i direttori dei lavori si aspettano per lavori strutturali.",
      "Getti con tempistiche strette — Se hai noleggiato le casseforme, assunto una squadra per la finitura o hai una finestra meteo ridotta, il preconfezionato elimina le ore di impasto richieste dai sacchi.",
      "Progetti che richiedono classe specifica o additivi — Gli impianti possono personalizzare la miscela con fibre di rinforzo, acceleranti (per tempo freddo), ritardanti (per tempo caldo), aeranti (per cicli gelo-disgelo) e classi di resistenza personalizzate.",
      "Quando c'è buon accesso per l'autobetoniera — Se il mezzo può avvicinarsi entro 20 metri dal punto di getto con un percorso libero, il preconfezionato è la scelta più efficiente. Per accessi più stretti, una pompa per calcestruzzo aggiunge costi ma batte comunque l'impasto di centinaia di sacchi.",
    ],
    whenReadyMixSummary:
      "Regola pratica: se il tuo progetto richiede più di 1 metro cubo, chiama un fornitore di preconfezionato. Il risparmio sulla manodopera da solo giustifica la spesa di consegna.",

    whenBaggedHeading: "Quando Scegliere il Calcestruzzo in Sacchi",
    whenBaggedIntro:
      "Il calcestruzzo in sacchi eccelle per piccoli progetti rapidi dove ordinare l'autobetoniera sarebbe eccessivo. Ecco i migliori usi:",
    whenBaggedItems: [
      "Pali di recinzione e paletti — Ogni buca per palo richiede tipicamente 2–4 sacchi da 25 kg. Puoi fissare i pali uno alla volta al tuo ritmo, e alcune formule a presa rapida ti permettono di versare la miscela secca direttamente nella buca e aggiungere acqua sopra.",
      "Piccole riparazioni — Rattoppare un tratto di marciapiede, riempire una buca, riparare un gradino o ripristinare una superficie deteriorata. Questi lavori possono richiedere solo 5–20 sacchi.",
      "Progetti sotto 0,5 metri cubi — Piccole basi per condizionatori, recinzioni di bidoni, basi per vasche idromassaggio o piccoli tratti di camminamento. Con 40–45 sacchi o meno, l'impasto è gestibile.",
      "Zone remote o difficili da raggiungere — Progetti nel retro di un giardino recintato, plinti su pendii o cantieri rurali dove l'autobetoniera non può arrivare. I sacchi possono essere trasportati a mano quasi ovunque.",
      "Progetti fai-da-te del fine settimana — Se vuoi lavorare al tuo ritmo senza la pressione dell'autobetoniera in attesa (gli autisti tipicamente concedono 5–7 minuti per m³ prima di addebitare supplementi di attesa), i sacchi ti permettono di prendertela comoda.",
      "Quando hai già i sacchi — Se ti restano sacchi da un progetto precedente o trovi una buona offerta su un bancale, usa quello che hai. Verifica solo che i sacchi siano ancora buoni (nessun grumo o sezione indurita).",
    ],
    whenBaggedSummary:
      "Regola pratica: se il tuo progetto richiede meno di 40 sacchi (circa 0,5 m³), il calcestruzzo in sacchi è più semplice, più economico e non richiede prenotazioni.",

    calculatorCtaHeading: "Calcola il Tuo Fabbisogno di Calcestruzzo",
    calculatorCtaText:
      "Usa i nostri calcolatori gratuiti per scoprire esattamente quanti metri cubi o sacchi ti servono per il tuo progetto:",
    calculatorLinks: [
      {
        label: "Calcolatore Calcestruzzo",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calcola metri cubi e sacchi necessari per solette, plinti, pilastri e forme personalizzate.",
      },
      {
        label: "Calcolatore Tirafondi",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Determina l'interasse e il numero dei tirafondi per la tua fondazione.",
      },
      {
        label: "Calcolatore Dormiente",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Stima il legname per il dormiente sulla sommità dei muri di fondazione.",
      },
      {
        label: "Calcolatore Guarnizione Dormiente",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calcola la guarnizione necessaria tra fondazione e orditura.",
      },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Quanti sacchi di calcestruzzo servono per 1 metro cubo?",
        answer:
          "Servono circa 80–85 sacchi da 25 kg o 55–60 sacchi da 30 kg per fare 1 metro cubo. Un sacco da 25 kg produce circa 12 litri, e ci sono 1.000 litri in un metro cubo. Questo è il motivo per cui la maggior parte dei progetti oltre 1 m³ è meglio servita dalla consegna con autobetoniera.",
      },
      {
        question: "Il calcestruzzo preconfezionato è più resistente di quello in sacchi?",
        answer:
          "Non necessariamente. Il calcestruzzo in sacchi standard (Mapei, Kerakoll) raggiunge la classe C25/30 in 28 giorni, mentre il preconfezionato residenziale standard è tipicamente dosato C25/30 o C30/37. Entrambi sono più che adeguati per vialetti, patii, marciapiedi e plinti. Il vantaggio del preconfezionato è che viene miscelato professionalmente con rapporti acqua/cemento precisi, garantendo qualità più costante.",
      },
      {
        question: "Posso gettare il calcestruzzo preconfezionato da solo (fai-da-te)?",
        answer:
          "Sì, molti proprietari di casa ordinano il preconfezionato per progetti fai-da-te. Il fornitore consegna l'autobetoniera e tu dirigi il getto nelle casseforme preparate. Servono aiutanti (minimo 2–3 persone) per livellare, fratazzare e rifinire il calcestruzzo prima che indurisca. Prepara tutto prima dell'arrivo del mezzo: casseforme montate, ferro posato, attrezzi pronti e aiutanti istruiti.",
      },
      {
        question: "Qual è l'ordine minimo per il calcestruzzo preconfezionato?",
        answer:
          "La maggior parte dei fornitori ha un ordine minimo di 1 metro cubo. Tuttavia, molti applicano un supplemento per carico ridotto su ordini sotto 3–4 m³. Questo supplemento varia tipicamente da €30 a €60 per metro cubo sotto il minimo. Ad esempio, ordinare 2 m³ quando il minimo per carico pieno è 4 m³ potrebbe aggiungere €60–€120 di supplementi. Chiedere sempre al fornitore la struttura tariffaria prima di ordinare.",
      },
      {
        question: "Quanto tempo impiega il calcestruzzo in sacchi a indurire?",
        answer:
          "Il calcestruzzo in sacchi standard diventa calpestabile in 24–48 ore, ma non raggiunge la piena resistenza di progetto per 28 giorni. Le formule a presa rapida induriscono in 20–40 minuti e raggiungono la resistenza alla calpestabilità in 4–6 ore, ideali per pali di recinzione e piccole riparazioni. Durante il periodo di maturazione, mantenere il calcestruzzo umido per i primi 3–7 giorni per la massima resistenza.",
      },
      {
        question: "Si possono mescolare marche diverse di calcestruzzo in sacchi?",
        answer:
          "Sì, puoi mescolare Mapei, Kerakoll, Buzzi Unicem e altre miscele standard insieme. Usano tutti gli stessi ingredienti base (cemento Portland, sabbia, ghiaia). Tuttavia, non mescolare calcestruzzo normale con prodotti speciali come miscele a presa rapida, malta o miscele per piani di lavoro, poiché hanno formulazioni e tempi di presa diversi. Attieniti allo stesso tipo in un singolo getto per risultati costanti.",
      },
    ],
  },

  concreteCostGuide: {
    title: "Quanto Costa il Calcestruzzo? Guida ai Prezzi 2026",
    metaDescription:
      "Il calcestruzzo costa €90–€130 al metro cubo preconfezionato. Guida completa ai prezzi 2026 per solette, fondazioni, vialetti, calcestruzzo in sacchi, manodopera e consigli per risparmiare.",

    heroTitle: "Quanto Costa il Calcestruzzo?",
    heroSubtitle: "Guida ai Prezzi 2026",
    heroDescription:
      "Un'analisi completa dei prezzi del calcestruzzo per ogni tipo di progetto residenziale. Include consegna con autobetoniera, calcestruzzo in sacchi, costi di manodopera e fattori che influenzano il prezzo.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "Il calcestruzzo preconfezionato costa €90–€130 al metro cubo consegnato nel 2026, con la maggior parte dei committenti che paga €95–€120/m³ per calcestruzzo residenziale standard C25/30 o C30/37. Il costo totale installato (inclusi manodopera, casseforme e finitura) varia da €80–€180 al metro quadro per lavori piani come vialetti, patii e marciapiedi. Il calcestruzzo in sacchi (Mapei, Kerakoll) costa €3–€5 per sacco da 25 kg, che equivale a circa €250–€400 al metro cubo per il solo materiale.",

    costByProjectHeading: "Costo del Calcestruzzo per Tipo di Progetto",
    costByProjectIntro:
      "Quanto pagherai per il calcestruzzo dipende molto dal tipo e dalla dimensione del progetto. Ecco i costi tipici 2026 per progetti residenziali comuni, inclusi materiale e installazione professionale:",
    costByProjectColProject: "Progetto",
    costByProjectColTypical: "Costo Tipico",
    costByProjectColNotes: "Note",
    costByProjectRows: [
      { project: "Vialetto doppio (5×5 m)", typical: "€2.500–€5.000", notes: "2,5+ m³. Finitura liscia. Stampato o colorato aggiunge 30–50%." },
      { project: "Patio (4×5 m)", typical: "€1.500–€3.000", notes: "2+ m³. Finitura a spazzola. Opzioni decorative costano di più." },
      { project: "Marciapiede (1,2 m larg., 10 m lungo)", typical: "€800–€1.800", notes: "1,2+ m³. Include casseforme, getto e finitura." },
      { project: "Pavimento garage (6×6 m)", typical: "€3.000–€5.500", notes: "4+ m³. Spessore 10–15 cm. Rete elettrosaldata o fibra rinforzata." },
      { project: "Fondazioni plinti (casa 150 m²)", typical: "€3.000–€6.000", notes: "5–10 m³ a seconda del progetto. Ferro incluso." },
      { project: "Fondazioni continue (seminterrato)", typical: "€10.000–€20.000", notes: "12–25 m³. Include casseforme, ferro e impermeabilizzazione." },
      { project: "Scalini in calcestruzzo (5 gradini, 1,2 m larg.)", typical: "€800–€1.500", notes: "0,5–1,5 m³. Casseforme e finitura complesse." },
      { project: "Plinti per recinzione (20 pali)", typical: "€100–€250 (fai-da-te)", notes: "2–4 sacchi per palo. In sacchi, senza autobetoniera." },
    ],

    baggedCostHeading: "Costi del Calcestruzzo in Sacchi",
    baggedCostIntro:
      "Il calcestruzzo in sacchi si vende nei centri bricolage e magazzini edili. I prezzi variano per dimensione del sacco, marca e regione:",
    baggedCostText1:
      "Dimensioni standard e prezzi (2026): sacchi da 25 kg costano €3–€5 ciascuno (producono circa 12 litri). Sacchi da 30 kg costano €4,50–€6 ciascuno (producono circa 14 litri). Il sacco da 25 kg è il più comune nei centri bricolage come Leroy Merlin, Bricoman e OBI Italia. L'impasto fisico è impegnativo: molti appassionati fai-da-te preferiscono usare una piccola betoniera elettrica noleggiabile.",
    baggedCostText2:
      "Costo al metro cubo dai sacchi: usando sacchi da 25 kg a €4 ciascuno, un metro cubo costa circa €340 in solo materiale (85 sacchi). Usando sacchi da 30 kg a €5, un metro cubo costa circa €260 (55 sacchi). Questi prezzi sono più alti della consegna con autobetoniera (€90–€130/m³), ma i sacchi non hanno spese di consegna, nessun ordine minimo e nessun supplemento di attesa. Per piccoli progetti sotto 0,5 m³, i sacchi sono quasi sempre la scelta più economica.",
    baggedCostText3:
      "Il calcestruzzo in sacchi speciale costa di più: miscele a presa rapida €5–€8 per sacco da 25 kg. Miscele ad alta resistenza (€5–€7), fibrorinforzate (€6–€8) e miscele per piani di lavoro (€15–€25 per 25 kg) sono opzioni premium. Per la maggior parte di vialetti, patii e plinti, la miscela standard C25/30 è tutto ciò che serve. Marchi di qualità: Mapei, Kerakoll, Buzzi Unicem.",

    readyMixPricingHeading: "Prezzi del Calcestruzzo Preconfezionato",
    readyMixPricingIntro:
      "Il preconfezionato si ordina al metro cubo e viene consegnato con autobetoniera. Ecco cosa aspettarsi quando chiami un fornitore locale:",
    readyMixPricingText1:
      "Prezzo base: il calcestruzzo C25/30 standard costa €90–€115 al metro cubo nella maggior parte dei mercati italiani. La classe C30/37 costa €100–€130/m³. La classe C40/50 ad alta resistenza costa €115–€150/m³. I prezzi variano per regione — le aree urbane con più fornitori tendono ad essere più economiche delle zone rurali con concorrenza limitata. Il Nord Italia ha generalmente prezzi leggermente più alti del Sud.",
    readyMixPricingText2:
      "Supplementi aggiuntivi: spesa di consegna di €50–€100 per viaggio (copre carburante e tempo dell'autista). Supplemento carico ridotto di €30–€60/m³ per ordini sotto 3–4 m³ (il supplemento più impattante per piccoli progetti). Supplemento attesa di €1–€2 al minuto se il getto supera il tempo concesso (tipicamente 5–7 minuti per m³). Consegna al sabato: supplemento €50–€100 in alcuni impianti. Supplemento carburante €15–€40 per carico.",
    readyMixPricingText3:
      "Additivi e varianti: aerante (resistenza gelo-disgelo) aggiunge €3–€5/m³. Fibra di rinforzo aggiunge €4–€8/m³. Accelerante (velocizza la maturazione con tempo freddo) aggiunge €4–€10/m³. Ritardante (rallenta la presa con tempo caldo) aggiunge €3–€7/m³. Pigmento colorante aggiunge €8–€18/m³. Noleggio pompa (per getti in zone difficili) €150–€250+/ora.",

    factorsHeading: "Fattori che Influenzano il Costo del Calcestruzzo",
    factorsIntro:
      "Il prezzo del calcestruzzo dipende da diversi fattori oltre al solo volume necessario. Comprenderli aiuta a preventivare con più precisione:",
    factorsItems: [
      "Posizione — I prezzi del calcestruzzo variano significativamente per regione. Il Sud Italia tende ad avere prezzi leggermente più bassi, mentre il Nord e le isole sono più cari per costi di trasporto e materie prime. Le zone rurali pagano di più per le distanze di consegna maggiori. Richiedere sempre preventivi da almeno 2–3 fornitori locali.",
      "Quantità ordinata — Ordinare più calcestruzzo riduce il costo unitario. I supplementi per carico ridotto su piccoli ordini (sotto 3–4 m³) possono aggiungere €30–€60/m³. Un ordine da 2 m³ potrebbe costare €130/m³ con supplementi, mentre un ordine da 6 m³ costa €100/m³ senza penalità. Se sei vicino al minimo, considera di aggiungere un piccolo progetto per raggiungerlo.",
      "Classe di resistenza — Classi più alte costano di più. La classe C25/30 è adeguata per marciapiedi e patii. La C30/37 è raccomandata per vialetti e pavimenti di garage. La C40/50 si usa per carichi pesanti. Ogni classe superiore aggiunge circa €5–€15 al metro cubo.",
      "Additivi e design della miscela — Aeranti, fibre di rinforzo, acceleranti, ritardanti e pigmenti coloranti aggiungono ciascuno €3–€18/m³. Nei climi alpini, l'aerante è essenzialmente obbligatorio per calcestruzzo esterno e aggiunge €3–€5/m³.",
      "Periodo dell'anno — I prezzi del calcestruzzo tendono ad essere più alti in primavera e estate quando la domanda è al picco. I getti invernali possono essere più economici al metro cubo ma richiedono acqua calda, teli termici e acceleranti che possono compensare il risparmio. L'autunno è spesso il momento migliore per prezzo e temperature ideali di maturazione.",
      "Distanza di consegna — La maggior parte degli impianti include la consegna entro 15–25 km nel prezzo base. Oltre, aspettarsi supplementi di €1–€2 al km per ciascuna direzione. Per cantieri remoti, questi costi possono aggiungere €50–€200+ al totale.",
    ],

    laborHeading: "Costi di Manodopera: Fai-da-Te vs Impresa",
    laborIntro:
      "Il costo del calcestruzzo stesso è spesso meno della metà del costo totale del progetto. Manodopera, casseforme, finitura e preparazione del sito compongono il resto:",
    laborText1:
      "Costi fai-da-te: se fai il lavoro da solo, i costi principali sono calcestruzzo (€90–€130/m³ preconfezionato o €250–€400/m³ in sacchi), legname per casseforme (€50–€120), rete elettrosaldata o ferro (€30–€80), e noleggio attrezzi (€50–€100 per vibratore, fratazzo, ecc.). Un tipico patio di 3×3 m (circa 1 m³) potrebbe costare €250–€450 in materiali totali come progetto fai-da-te, rispetto a €1.000–€1.800 con un'impresa.",
    laborText2:
      "Costi con impresa: i lavori professionali in calcestruzzo costano tipicamente €80–€180 al metro quadro installato per lavori piani standard (soletta, vialetto, patio, marciapiede). Questo include preparazione del sito, sottofondo in ghiaia, casseforme, rete/ferro, calcestruzzo, getto, finitura (a spazzola o liscia) e pulizia base. Finiture decorative (stampato, colorato, graniglia lavata) aggiungono €30–€80/m². Lavori verticali (muri di fondazione, muri di contenimento) costano €120–€250/m² per le casseforme più complesse.",
    laborText3:
      "Quando affidarsi a un'impresa: considera di ingaggiare un'impresa per qualsiasi lavoro strutturale (fondazioni, plinti portanti), qualsiasi getto oltre 3 m³, finiture decorative o stampate, superfici in pendenza o critiche per il drenaggio, e qualsiasi progetto che richiede permesso edilizio e collaudo. Il costo di correggere un getto di calcestruzzo sbagliato (demolizione e rifacimento) è 2–3 volte il costo di farlo bene la prima volta.",

    savingTipsHeading: "Consigli per Risparmiare",
    savingTipsIntro:
      "Ci sono diversi modi per ridurre i costi del calcestruzzo senza tagliare sulla qualità:",
    savingTipsItems: [
      "Richiedi più preventivi — I prezzi possono variare del 15–30% tra fornitori nella stessa zona. Chiama almeno 3 fornitori e chiedi il tariffario completo incluse consegna, carico ridotto, attesa e supplementi carburante.",
      "Ordina la quantità giusta — Ordinare troppo spreca soldi; troppo poco significa un costoso secondo viaggio dell'autobetoniera. Usa il nostro calcolatore per una stima precisa, poi aggiungi il 5–10% per sprechi, versamenti e irregolarità del sottofondo.",
      "Evita i supplementi carico ridotto — Se il tuo progetto richiede 2,5 m³ e la soglia è 3 m³, ordina 3 m³ e usa l'extra per un piccolo progetto secondario (pietre di camminamento, una piccola base, riempimento buche). Il mezzo metro cubo extra costa meno del supplemento.",
      "Programma in bassa stagione — Se le tempistiche sono flessibili, programma i getti dal martedì al giovedì in autunno o inizio primavera. Le consegne nel fine settimana e in alta stagione spesso hanno supplementi.",
      "Fai la preparazione da solo — Anche se assumi un'impresa per il getto, puoi risparmiare €500–€1.500 facendo lo scavo, il sottofondo in ghiaia e le casseforme da solo. Le imprese sono felici di gettare nelle tue casseforme se sono costruite e verificate correttamente.",
      "Confronta sacchi vs preconfezionato per piccoli lavori — Per progetti sotto 1 m³, fai i conti in entrambi i modi. Considera il valore del tuo tempo: impastare 60+ sacchi richiede 4–6 ore di lavoro pesante. Se il tuo tempo vale €20/ora, questo aggiunge €80–€120 al costo dei sacchi. A volte un carico ridotto di preconfezionato è effettivamente più economico.",
    ],

    calculatorCtaHeading: "Calcola i Costi del Tuo Calcestruzzo",
    calculatorCtaText:
      "Usa i nostri calcolatori gratuiti per stimare il volume esatto di calcestruzzo necessario per il tuo progetto, poi moltiplica per il prezzo locale al metro cubo per un preventivo accurato:",
    calculatorLinks: [
      {
        label: "Calcolatore Calcestruzzo",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calcola metri cubi e sacchi necessari per solette, plinti, pilastri e forme personalizzate.",
      },
      {
        label: "Calcolatore Tirafondi",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Determina l'interasse e il numero dei tirafondi per la tua fondazione.",
      },
      {
        label: "Calcolatore Dormiente",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Stima il legname per il dormiente sulla sommità dei muri di fondazione.",
      },
      {
        label: "Calcolatore Guarnizione Dormiente",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calcola la guarnizione necessaria tra fondazione e orditura.",
      },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Quanto costa un metro cubo di calcestruzzo nel 2026?",
        answer:
          "Un metro cubo di calcestruzzo preconfezionato costa €90–€130 per il materiale, a seconda della regione e della classe di resistenza. Aggiungere spese di consegna (€50–€100) e potenziali supplementi per carico ridotto (€30–€60/m³ per piccoli ordini). Il costo totale consegnato per un tipico ordine residenziale da 3–4 m³ è solitamente €100–€125 al metro cubo tutto incluso.",
      },
      {
        question: "Quanto costa gettare una soletta di 3×3 m?",
        answer:
          "Una soletta di 3×3 m (spessore 10 cm) richiede circa 1 metro cubo di calcestruzzo. Il costo fai-da-te dei materiali è €200–€400 (calcestruzzo, casseforme, rete). Con installazione professionale, aspettarsi €700–€1.500 a seconda della preparazione del sito, della finitura e del mercato locale della manodopera.",
      },
      {
        question: "È più economico impastare i sacchi o ordinare il preconfezionato?",
        answer:
          "Per piccoli progetti (sotto 1 m³), impastare i sacchi è più economico in costo materiale. Per progetti oltre 1 m³, il preconfezionato è quasi sempre più conveniente al metro cubo e fa risparmiare ore di manodopera. Il punto di pareggio è tipicamente intorno a 0,75–1,0 m³. A quel volume, il costo totale dei sacchi più il tuo tempo equivale circa a una consegna di preconfezionato con supplemento carico ridotto.",
      },
      {
        question: "Quanto costa un vialetto in calcestruzzo?",
        answer:
          "Un vialetto standard per due auto (circa 5×5 m, spessore 10 cm) costa €2.500–€5.000 installato nel 2026. Include circa 2,5 m³ di calcestruzzo, sottofondo in ghiaia, casseforme, rete elettrosaldata e finitura a spazzola. Calcestruzzo stampato o decorativo costa €4.500–€8.000+ a seconda del motivo e dei colori scelti.",
      },
      {
        question: "Perché il costo del calcestruzzo varia così tanto per regione?",
        answer:
          "I prezzi del calcestruzzo dipendono dal costo del cemento Portland (che varia in base alla vicinanza ai cementifici come quelli di Italcementi e Buzzi Unicem), dai costi degli inerti locali, dai prezzi del carburante per le autobetoniere, dalle tariffe della manodopera e dalla concorrenza tra fornitori. Le regioni con cementifici attivi (Lombardia, Veneto, Puglia) tendono ad avere prezzi più bassi. Le isole e le zone remote pagano di più per i costi di trasporto.",
      },
      {
        question: "Quanto calcestruzzo mi serve per un progetto?",
        answer:
          "Il calcestruzzo si misura in metri cubi. Per solette rettangolari: moltiplica lunghezza (m) × larghezza (m) × spessore (m). Una soletta di 3×3 m con spessore 10 cm = 3 × 3 × 0,10 = 0,9 m³. Aggiungi sempre il 5–10% per sprechi, irregolarità del sottofondo e versamenti. Usa il nostro calcolatore gratuito per risultati esatti su solette, plinti, pilastri e forme personalizzate.",
      },
    ],
  },

  howMuchPaint: {
    title: "Quanta Pittura Mi Serve? Guida Completa",
    metaDescription:
      "Quanta pittura mi serve? Guida completa su misurazione delle pareti, resa per tipo di pittura, numero di mani, preparazione delle superfici, soffitto e finiture, e analisi dei costi.",

    heroTitle: "Quanta Pittura Mi Serve?",
    heroSubtitle: "Guida Completa",
    heroDescription:
      "Tutto ciò che devi sapere per calcolare la giusta quantità di pittura per pareti, soffitti e finiture — evita di comprare troppo o di restare senza a metà progetto.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "Un litro di pittura murale per interni copre circa 10–12 metri quadri con una mano. Per una stanza standard (4×4 m, soffitti 2,70 m), servono circa 5–6 litri per due mani sulle pareti. Aggiungere 2–3 litri per il soffitto e 1 litro per finiture e porte. Arrotondare sempre per eccesso — la pittura avanzata è essenziale per ritocchi futuri.",

    measuringWallsHeading: "Come Misurare le Pareti",
    measuringWallsIntro:
      "Le misurazioni accurate delle pareti sono la base di ogni preventivo di pittura. Ecco come misurare come un imbianchino professionista:",
    measuringWallsItems: [
      "Misura la lunghezza di ogni parete in metri e moltiplica per l'altezza del soffitto. Una parete di 4 metri con soffitti di 2,70 m = 10,8 m². Ripeti per tutte e quattro le pareti e somma.",
      "Per calcoli rapidi dell'intera stanza, misura il perimetro (somma di tutte le lunghezze delle pareti) e moltiplica per l'altezza del soffitto. Una stanza di 4×5 m ha un perimetro di 18 m, per 2,70 m di altezza = 48,6 m² di superficie murale.",
      "Sottrai le aperture: una porta standard è circa 1,9 m² (0,80×2,10 m) e una finestra standard è circa 1,5 m² (1,0×1,5 m). Per una stanza con una porta e due finestre, sottrarre circa 4,9 m².",
      "Per stanze con soffitti a volta o mansardati, misura l'altezza della parete nel punto più alto e nel punto più basso, calcola la media e moltiplica per la lunghezza della parete.",
      "Includi l'interno degli armadi a muro se prevedi di pitturarli — un armadio standard aggiunge circa 5 m² di superficie murale.",
      "Annota tutte le misurazioni prima di andare al colorificio. Scatta foto delle stanze come riferimento per la scelta dei colori.",
    ],
    measuringWallsSummary:
      "Una tipica casa di 120 m² ha 350–450 m² di superficie murale tinteggiabile, a seconda dell'altezza dei soffitti, del numero di stanze e delle aperture.",

    coverageRatesHeading: "Resa per Tipo di Pittura",
    coverageRatesIntro:
      "Non tutte le pitture coprono la stessa superficie. La resa varia per finitura, qualità e la superficie su cui stai dipingendo.",
    coverageRatesText1:
      "Le finiture opache e matt hanno la resa più alta, da 10 a 14 m² per litro, perché hanno un contenuto di legante inferiore e si stendono facilmente. Sono ideali per soffitti e stanze poco trafficate ma mostrano segni e sono difficili da pulire. La finitura satinata copre 8–12 m² per litro ed è la scelta più popolare per soggiorni, camere da letto e corridoi — ha una leggera lucentezza, è facile da pulire senza essere troppo lucida.",
    coverageRatesText2:
      "La finitura semi-lucida copre 8–10 m² per litro ed è eccellente per cucine, bagni e zone ad alto traffico per la sua resistenza all'umidità e lavabilità. La finitura lucida copre 7–9 m² per litro ed è la scelta standard per finiture, battiscopa, porte e telai finestra — la superficie riflettente è altamente durabile e facile da pulire.",
    coverageRatesText3:
      "Le pitture premium di marchi come Mapei (Dursilite), Kerakoll (Biocalce), San Marco e Oikos raggiungono tipicamente la parte alta di questi intervalli di resa grazie alla maggiore concentrazione di pigmento e migliori proprietà di livellamento. Le pitture economiche spesso si attestano nella parte bassa e possono richiedere una mano aggiuntiva. Le superfici testurizzate, porose o non dipinte in precedenza riducono la resa del 20–30% — applicare sempre un fondo su queste superfici.",

    numberOfCoatsHeading: "Quante Mani di Pittura Servono?",
    numberOfCoatsIntro:
      "Il numero di mani influisce direttamente su quanta pittura acquistare. Ecco quando applicare una, due o tre mani:",
    numberOfCoatsItems: [
      "Una mano è sufficiente solo per ritocchi con lo stesso identico colore e finitura su una superficie già dipinta in buone condizioni. Alcune pitture premium pubblicizzano copertura monostrato, ma gli imbianchini professionisti raccomandano comunque due mani per i migliori risultati.",
      "Due mani è la raccomandazione standard per praticamente tutti i progetti di tinteggiatura. La prima mano sigilla e prepara la superficie, mentre la seconda fornisce la profondità di colore finale, la lucentezza uniforme e la massima durabilità. Due mani di pittura di qualità possono durare 7–10 anni su pareti interne.",
      "Tre mani sono necessarie per cambi di colore drastici — specialmente dal scuro (rosso, blu, verde scuro) al chiaro (bianco, crema, pastello). La prima mano di fondo tinto neutralizza il vecchio colore, seguita da due mani di finitura.",
      "Le pareti in cartongesso nuovo richiedono sempre una mano di fondo più due mani di finitura (tre mani totali). Il fondo sigilla la superficie porosa e fornisce una base uniforme. Saltare il fondo su cartongesso nuovo causa differenze di assorbimento visibili tra stucco e carta.",
      "Le superfici testurizzate come intonaco civile rustico o decorativo possono richiedere una mano extra perché la texture crea picchi e valli difficili da coprire uniformemente con un singolo passaggio.",
    ],
    numberOfCoatsSummary:
      "Per il preventivo, calcola sempre la quantità di pittura sulla base di due mani. Se serve il fondo, calcolalo separatamente alla resa del fondo.",

    surfacePrepHeading: "Preparazione delle Superfici",
    surfacePrepIntro:
      "La preparazione corretta delle superfici è il fattore singolo più importante per un lavoro di tinteggiatura duraturo. Nessuna quantità di pittura costosa può compensare una preparazione scadente.",
    surfacePrepItems: [
      "Pulisci tutte le superfici prima di dipingere. Polvere, grasso e ragnatele impediscono l'adesione della pittura. Strofina le pareti con un panno umido o usa una soluzione sgrassante per le pareti della cucina. Lascia asciugare completamente prima di dipingere.",
      "Stucca i fori dei chiodi, le ammaccature e le crepe con stucco leggero. Applica con una spatola, lascia asciugare e carteggia liscio con carta abrasiva grana 150. Per buchi più grandi (oltre 1 cm), usa nastro retina e stucco per rasature, applicato in due mani sottili.",
      "Carteggia leggermente le superfici lucide con carta abrasiva grana 150 per creare aderenza per la nuova pittura. Questo è particolarmente importante quando dipingi su finiture semi-lucide o lucide.",
      "Rimuovi o carteggia qualsiasi pittura sciolta, che si sfoglia o si stacca fino alla superficie solida. Sfuma i bordi della pittura rimasta con carta abrasiva per creare una transizione liscia.",
      "Applica nastro adesivo di carta su finiture, battiscopa, linee del soffitto e qualsiasi area da proteggere. Premi il nastro fermamente con una spatola per impedire alla pittura di infiltrarsi sotto.",
      "Proteggi pavimenti e mobili con teli di copertura. I teli in tessuto aderiscono meglio al pavimento della plastica e assorbono le gocce. Sposta i mobili al centro della stanza e copri con teli di plastica.",
    ],

    ceilingPaintHeading: "Calcolo della Pittura per Soffitto",
    ceilingPaintIntro:
      "I soffitti richiedono un calcolo separato perché usano una formulazione di pittura diversa dalle pareti.",
    ceilingPaintText1:
      "La pittura per soffitti è formulata con un contenuto di solidi più alto per una migliore resistenza agli schizzi durante la stesura a rullo sopra la testa, e asciuga con una finitura perfettamente opaca per minimizzare le imperfezioni visibili. La pittura standard per soffitti copre 10–14 m² per litro. Per calcolare la quantità necessaria, moltiplica la lunghezza per la larghezza della stanza — una stanza di 4×5 m ha 20 m² di soffitto. A 12 m²/litro, sono circa 1,7 litri — acquista 2 litri per quella stanza.",
    ceilingPaintText2:
      "La maggior parte dei soffitti richiede una sola mano se vengono tinteggiati con lo stesso colore bianco. Se stai cambiando il colore del soffitto o dipingendo sopra una macchia, applica prima il fondo e poi due mani di finitura. Per soffitti testurizzati, riduci la resa a 7–9 m² per litro perché la texture assorbe più pittura. Un soffitto intero di una casa (120 m²) richiede tipicamente 10–12 litri di pittura per soffitti.",

    trimPaintHeading: "Calcolo della Pittura per Finiture e Porte",
    trimPaintIntro:
      "Finiture, battiscopa, porte e telai finestra sono tipicamente dipinti con finitura semi-lucida o satinata per durabilità e facilità di pulizia.",
    trimPaintText1:
      "Battiscopa: misura i metri lineari totali di battiscopa nella stanza. I battiscopa standard sono alti 7–10 cm. Una stanza con 18 m lineari di battiscopa ha circa 1,8 m² di superficie tinteggiabile. Un litro di smalto per finiture copre circa 10–12 m² — sufficiente per i battiscopa di diverse stanze.",
    trimPaintText2:
      "Porte: una porta interna standard (entrambi i lati) ha circa 3,5 m² di superficie tinteggiabile. Le cornici delle finestre hanno in media 1 m² ciascuna. I cornicioni aggiungono circa 0,3 m² per metro lineare. Per un'intera casa, prevedere 3–5 litri di smalto per finiture per tutti i battiscopa, cornici porte, finiture finestre e cornicioni. Dipingi le porte con un rullo in spugna per la finitura più liscia — i segni del pennello sono molto visibili su smalto semi-lucido su superfici piane.",

    costBreakdownHeading: "Analisi dei Costi della Pittura",
    costBreakdownIntro:
      "Comprendere il costo completo di un progetto di tinteggiatura aiuta a preventivare con precisione e scegliere i prodotti giusti.",
    costBreakdownText1:
      "La pittura murale è la voce di costo maggiore. Preventivare €5–€15 al litro a seconda della fascia qualitativa. Per una stanza tipica che richiede 6 litri con 2 mani, la pittura murale costa €30–€90. Per un'intera casa di 120 m² (circa 40 litri per le pareti), la pittura costa €200–€600. Acquistare secchi da 10–15 litri fa risparmiare il 15–20% al litro rispetto ai barattoli singoli.",
    costBreakdownText2:
      "Il fondo costa €4–€10 al litro. Le nuove costruzioni (cartongesso grezzo) richiedono circa 1 litro ogni 10–14 m². Per una casa di 120 m², servono 25–35 litri di fondo (€100–€350). Le pitture autoaggrappanti (disponibili nelle linee premium) eliminano questo costo ma sono più care al litro. Per ritinteggiature su colori simili, il fondo è solitamente superfluo.",
    costBreakdownText3:
      "I materiali accessori per la tinteggiatura completa di una casa costano €80–€180 totali: telai e rulli (€15–€25), prolunga per soffitti (€10–€20), pennelli angolari da 50 mm e 65 mm (€15–€25), nastro di carta (€20–€35 per più rotoli), teli di copertura (€10–€25), vaschette e foderini (€8–€12), carta abrasiva e stucco (€8–€12), stracci e materiali per pulizia (€5–€8). Attrezzi di qualità fanno una differenza significativa nel risultato finale — non risparmiare su rulli e pennelli.",

    calculatorCtaHeading: "Calcola il Tuo Fabbisogno di Pittura",
    calculatorCtaText:
      "Usa i nostri calcolatori gratuiti per ottenere una stima immediata e precisa per il tuo progetto.",
    calculatorLinks: [
      {
        label: "Calcolatore Resa Pittura",
        href: "/calculators/finishing/paint-coverage-calculator",
        description: "Quanti litri servono per la tua superficie — con regolazione per mani e resa.",
      },
      {
        label: "Calcolatore Costo Pittura",
        href: "/calculators/finishing/paint-cost-calculator",
        description: "Costo totale del progetto per fascia di qualità — include stima accessori.",
      },
      {
        label: "Calcolatore Fondo",
        href: "/calculators/finishing/primer-calculator",
        description: "Quanto fondo serve per il tuo tipo di superficie — cartongesso nuovo, legno o ritinteggiatura.",
      },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Quanta pittura mi serve per una stanza di 4×4 m?",
        answer:
          "Una stanza di 4×4 m con soffitti a 2,70 m ha circa 43 m² di superficie murale. Sottrarre circa 4 m² per porta e finestra, restano 39 m². A 10 m² per litro con 2 mani, servono circa 7,8 litri — acquista 8 litri (o un secchio da 10 litri). Aggiungere 2–3 litri di pittura per soffitto per i 16 m² di soffitto. Totale: 8 litri di pittura murale + 3 litri di pittura per soffitto.",
      },
      {
        question: "Quanti metri quadri copre un litro di pittura?",
        answer:
          "Un litro di pittura per interni a base d'acqua copre 10–14 m² su superfici lisce già dipinte con una mano. Le finiture opache coprono sui 12–14 m², mentre le finiture satinate e semi-lucide coprono circa 8–12 m². Su superfici porose o testurizzate come cartongesso nuovo o intonaco, aspettarsi solo 7–9 m² per litro.",
      },
      {
        question: "Meglio comprare barattoli da 1 litro o secchi da 10 litri?",
        answer:
          "I secchi da 10–15 litri costano il 15–20% in meno per litro e garantiscono uniformità di colore su tutte le pareti. Acquista i secchi quando servono 5 o più litri dello stesso colore. Per pareti d'accento o stanze che richiedono meno di 3 litri, i barattoli singoli sono più pratici. Molti colorifici vendono anche quantità da 2,5 litri per piccoli ritocchi.",
      },
      {
        question: "Quanto costa pitturare una stanza da soli?",
        answer:
          "Un progetto di tinteggiatura fai-da-te costa €60–€150 in materiali: 8 litri di pittura (€40–€120), accessori (€20–€40), e fondo opzionale (€4–€10 al litro). Un imbianchino professionista chiede €250–€600 per la stessa stanza. Per l'intero interno di una casa, il fai-da-te costa €500–€1.500 in materiali vs €2.500–€6.000 per un'impresa di tinteggiatura.",
      },
      {
        question: "Serve il fondo prima di pitturare?",
        answer:
          "Il fondo è necessario su cartongesso nuovo, legno grezzo, aree riparate o stuccate, e per cambi di colore drastici (da scuro a chiaro). Su superfici già dipinte in buone condizioni con un colore simile, puoi saltare il fondo — specialmente con pitture premium autoaggrappanti. Nel dubbio, applica il fondo — costa €4–€10 al litro e fa risparmiare sulla mano di finitura.",
      },
      {
        question: "Qual è la pittura migliore per pareti interne?",
        answer:
          "Per la maggior parte delle pareti interne, una finitura satinata di qualità medio-alta offre il miglior equilibrio tra aspetto, durabilità e lavabilità. Marchi di riferimento in Italia: Mapei Dursilite, San Marco, Oikos, Colorificio Veneziano, e Kerakoll Biocalce per le finiture naturali. Usa la finitura opaca solo per soffitti e stanze poco trafficate. Usa la semi-lucida per finiture, porte e zone umide come i bagni.",
      },
    ],
  },

  lumberPrices: {
    title: "Guida ai Prezzi del Legname da Costruzione",
    metaDescription:
      "Prezzi aggiornati del legname per specie, classe e dimensione. Include legname segato, legno lamellare, compensato, tendenze dei prezzi, dove acquistare e sconti quantità per imprese e appassionati fai-da-te.",
    heroTitle: "Guida ai Prezzi del Legname",
    heroSubtitle: "Quanto Costa il Legno da Costruzione?",
    heroDescription:
      "Una guida completa ai prezzi del legname in Italia — dal legname strutturale da orditura alle tavole di latifoglie — per preventivare con precisione il tuo prossimo progetto edilizio.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "Un montante in abete 6×8 cm lungo 3 m costa €4–€8 nei magazzini edili. Il legname strutturale (abete C24) si aggira sui €300–€500 al metro cubo all'ingrosso. Le latifoglie variano da €600 a €2.500+ al metro cubo a seconda della specie. Il compensato va da €15 a €60 per foglio 2440×1220 mm a seconda di spessore e classe. I prezzi fluttuano con le condizioni di mercato, quindi richiedere sempre preventivi aggiornati al fornitore.",

    speciesPricingHeading: "Prezzi del Legname per Specie",
    speciesPricingIntro:
      "La specie legnosa è il fattore singolo più importante nel prezzo del legname. Ecco quanto costano le specie comuni nel mercato attuale:",
    speciesPricingText1:
      "Le conifere strutturali — abete rosso, abete bianco e larice — sono le più economiche e la base dell'edilizia residenziale in legno. Un montante in abete 6×8×300 cm costa €4–€8, mentre travi più grandi come 10×20×400 cm arrivano a €25–€55. Il larice, usato per applicazioni strutturali pesanti e rivestimenti esterni, ha un sovrapprezzo del 30–50% rispetto all'abete. Il legname di castagno, tradizionale nell'edilizia italiana per la sua resistenza naturale, costa €500–€800/m³ — circa il doppio dell'abete.",
    speciesPricingText2:
      "Le latifoglie italiane ed europee coprono un ampio intervallo di prezzo misurato al metro cubo. Il pioppo, la latifoglia più economica, si aggira sui €300–€500/m³. Il rovere, il legno più usato per mobili e pavimenti, costa €600–€1.200/m³. Il noce nazionale — la latifoglia pregiata italiana per eccellenza — va da €1.000 a €2.500/m³ a seconda della qualità e della larghezza. Il faggio costa €500–€800/m³, il ciliegio €800–€1.500/m³. Questi prezzi si riferiscono a tavole grezze o piallate da rivenditori di legname.",
    speciesPricingText3:
      "Le specie esotiche e importate si collocano nella fascia alta del prezzo. L'ipé (noce brasiliano), lo standard per il decking esterno di lusso, costa €80–€120 al metro lineare per tavole da terrazza — equivalenti a €2.000–€3.500/m³. Il teak, usato per arredo da esterno e applicazioni marine, costa €2.500–€5.000/m³. L'iroko, molto diffuso in Italia per serramenti e arredo esterno, va da €800 a €1.500/m³. I dazi all'importazione, i costi di spedizione e le certificazioni di sostenibilità (FSC, PEFC) influenzano tutti i prezzi del legname esotico.",

    dimensionalVsEngineeredHeading: "Legname Segato vs Legno Ingegnerizzato",
    dimensionalVsEngineeredIntro:
      "L'edilizia moderna usa sempre più prodotti in legno ingegnerizzato accanto al legname segato tradizionale. Comprendere le differenze di costo aiuta a scegliere il prodotto giusto per ogni applicazione:",
    dimensionalVsEngineeredItems: [
      "Il legname segato (morali, travetti, montanti) è ricavato direttamente dai tronchi ed è la scelta predefinita per orditure di pareti, tetti e solai per luci brevi. È l'opzione più economica per metro lineare per luci sotto i 5 metri.",
      "Le travi in legno lamellare incollato (GLT) costano €8–€18 al metro lineare per una trave 12×24 cm — circa 2–3 volte il costo di una trave in legno massiccio comparabile. Si usano per architravi, travi di colmo e luci lunghe dove il legno massiccio richiederebbe sezioni eccessive. Marchi: Rubner, Holzbau, Hasslacher.",
      "Le travi a doppio T (tipo Steico) costano €5–€12 al metro lineare a seconda dell'altezza e della serie. Sostituiscono i travetti tradizionali per luci oltre i 4 metri, offrendo leggerezza, assenza di deformazioni e fori pre-praticati per impianti.",
      "Le travi in lamellare di grandi dimensioni costano €12–€30 al metro lineare a seconda della sezione. Si usano per travi strutturali a vista, architravi di grande luce e elementi architettonici personalizzati.",
      "Il legno lamellare a strati incrociati (CLT/X-LAM) costa €300–€500/m³ ed è usato per pareti e solai portanti in case in legno multipiano. Marchi: Rubner, Binderholz, KLH.",
    ],
    dimensionalVsEngineeredSummary:
      "Per la maggior parte delle orditure residenziali, il legname segato resta la scelta più economica. I prodotti in legno ingegnerizzato sono economicamente sensati quando servono luci maggiori, carichi più pesanti o prestazioni più prevedibili di quanto il legno massiccio possa offrire.",

    gradeHeading: "Classificazione del Legname e Impatto sul Prezzo",
    gradeIntro:
      "La classe del legname influisce direttamente sul prezzo — classi più alte costano di più perché hanno meno difetti e proprietà strutturali più costanti:",
    gradeItems: [
      "Classe S7 (C16) — La classe strutturale più economica, adatta per montanti di pareti e applicazioni con carichi moderati. Tipicamente €50–€80/m³ in meno rispetto alla classe S10.",
      "Classe S10 (C24) — La classe strutturale standard per travetti, puntoni, architravi e orditura generale. È il legname che la maggior parte dei magazzini edili tiene a stock come default.",
      "Classe S13 (C30) — Meno nodi e valori di resistenza superiori alla C24. Usata quando i calcoli strutturali richiedono valori di sollecitazione ammissibile più alti. Costa il 15–25% in più della C24 e potrebbe richiedere ordine speciale.",
      "Legname GL24h/GL28h (lamellare) — La classificazione per il legno lamellare incollato, con prestazioni strutturali garantite. Il costo riflette il processo produttivo industriale.",
      "Classi per aspetto (prima scelta, extra) — Usate per falegnameria di finitura, rivestimenti e applicazioni a vista. Prezzo del 50–100% superiore alle classi strutturali.",
      "Legname certificato PEFC/FSC — La certificazione di gestione forestale sostenibile aggiunge il 5–15% al prezzo ma è sempre più richiesta nei capitolati e nelle gare d'appalto.",
    ],
    gradeSummary:
      "Per le orditure, la classe C24 è lo standard e la scelta più economica. Specificare classi superiori solo quando i calcoli strutturali o i requisiti estetici lo richiedono — pagherai significativamente di più per miglioramenti marginali in resistenza.",

    priceTrendsHeading: "Tendenze dei Prezzi e Previsioni",
    priceTrendsIntro:
      "I prezzi del legname sono notoriamente volatili, e comprendere il ciclo di mercato aiuta a tempificare gli acquisti:",
    priceTrendsText1:
      "Il mercato europeo del legname ha toccato massimi storici nel 2021, trainato dalla domanda post-pandemia e dalla temporanea chiusura delle segherie. Un montante che costava €4–€5 prima della pandemia è arrivato a €8–€12 al picco. Verso fine 2022 i prezzi sono scesi e si sono stabilizzati nella fascia €300–€500/m³ per abete strutturale nel 2023-2026. Queste oscillazioni drammatiche sottolineano l'importanza di ottenere prezzi aggiornati anziché affidarsi a stime storiche.",
    priceTrendsText2:
      "I pattern stagionali sono prevedibili: i prezzi del legname tipicamente raggiungono il picco in primavera e inizio estate (marzo–giugno) quando la stagione edilizia alimenta la domanda, e toccano il minimo in tardo autunno e inverno (ottobre–gennaio) quando l'edilizia rallenta. Acquistare i pacchetti di legname per l'orditura a novembre o dicembre può far risparmiare il 10–15% rispetto ai prezzi di maggio. Tuttavia, serve uno stoccaggio asciutto e coperto.",
    priceTrendsText3:
      "I fattori a lungo termine che influenzano i prezzi del legname includono l'andamento delle costruzioni in Europa (il principale motore della domanda), la disponibilità di legname da Austria, Germania e Scandinavia (i principali fornitori dell'Italia), i costi energetici delle segherie, le normative ambientali sul taglio del bosco e gli eventi naturali (incendi, bostrico tipografo) che riducono l'offerta di legname. Il mercato italiano è fortemente dipendente dall'import, con oltre il 70% del legname strutturale proveniente dall'estero.",

    whereToBuyHeading: "Dove Acquistare: Dettaglio vs Ingrosso",
    whereToBuyIntro:
      "Dove acquisti il legname influisce significativamente sul costo totale del progetto. Ecco i canali principali, dal più al meno costoso:",
    whereToBuyItems: [
      "Centri bricolage (Leroy Merlin, Bricoman, OBI Italia): i più comodi per piccoli progetti e singole tavole. Prezzi esposti e consistenti, resi facili, disponibilità immediata. Tuttavia, i prezzi sono del 20–40% superiori a quelli dei magazzini edili per la stessa specie e classe. Ideali per: privati, piccole riparazioni e progetti sotto €500 di legname.",
      "Magazzini edili e rivendite di legname: miglior controllo qualità (tavole selezionate), più ampia scelta di specie e classi, personale competente e prezzi a volume. La maggior parte offre consegna per ordini sopra €500. Risparmio del 15–30% rispetto ai centri bricolage. Ideali per: imprese, grandi progetti fai-da-te e chi valuta la qualità.",
      "Ingrosso/diretto da segheria: i prezzi più bassi, tipicamente il 30–50% sotto il dettaglio, ma richiede ordini minimi consistenti (spesso 5+ m³ o pacchi interi). Alcune segherie vendono diretto al pubblico, specialmente nelle regioni produttrici (Trentino, Veneto, Friuli). Ideali per: pacchetti orditura casa, progetti commerciali.",
      "Rivenditori online specializzati (TuttoLegno, Bricoman online): buona fonte per specie specifiche e legname per falegnameria. I prezzi includono il trasporto. Ideali per: falegnami che cercano specie, dimensioni o legname pregiato specifici.",
      "Segherie locali: legname segato grezzo ai prezzi più bassi possibili (€100–€250/m³ per conifere comuni, €300–€800/m³ per latifoglie). Richiede stagionatura o accesso al forno e attrezzatura per la piallatura. Ideali per: costruttori rurali, falegnami con attrezzatura, progetti in legno massiccio.",
    ],
    whereToBuySummary:
      "Per progetti con oltre €1.000 di legname, richiedi sempre un preventivo ad almeno un magazzino edile oltre a verificare i prezzi dei centri bricolage. Il risparmio su un pacchetto orditura può facilmente raggiungere €500–€2.000.",

    bulkDiscountsHeading: "Acquisti in Volume e Sconti Quantità",
    bulkDiscountsIntro:
      "L'acquisto di legname in volume sblocca risparmi significativi. Ecco come funziona il prezzo all'ingrosso:",
    bulkDiscountsItems: [
      "Prezzo a pacco: il legname strutturale venduto a pacco (fascio reggiato, tipicamente 30–100 pezzi della stessa dimensione) costa il 10–20% in meno rispetto al prezzo al pezzo. Un pacco di montanti 6×8×300 cm contiene circa 50–80 pezzi e costa proporzionalmente meno al pezzo singolo.",
      "Pacchetti orditura: molti magazzini edili preventivano l'intero materiale di orditura come pacchetto, includendo montanti, correnti, architravi, travetti, puntoni, pannelli e ferramenta. Il prezzo del pacchetto è tipicamente il 15–25% sotto la somma dei prezzi singoli al dettaglio. Invia i tuoi disegni e richiedi almeno due preventivi.",
      "Conto impresa: le imprese che acquistano regolarmente possono aprire un conto con il magazzino edile per un ulteriore 5–15% di sconto sotto il prezzo del pacchetto. La maggior parte richiede partita IVA e un volume minimo di acquisti.",
      "Prezzo a bancale per pannelli: acquistare un bancale intero di compensato (40–60 fogli per il 18 mm, di più per spessori minori) fa risparmiare il 10–15% rispetto al prezzo del singolo foglio. Un bancale di compensato fenolico 18 mm a €35/foglio contro €42/foglio al pezzo fa risparmiare €280–€420.",
      "Promozioni stagionali: i centri bricolage lanciano grandi promozioni sul legname in primavera (per intercettare la stagione edilizia) e in autunno (per smaltire le scorte). Attenzione al 10–15% di sconto sul legname strutturale e offerte sui pacchi di legname trattato.",
    ],
    bulkDiscountsSummary:
      "La maggiore opportunità di risparmio singola è ottenere un preventivo per il pacchetto orditura completo da un magazzino edile. Per l'orditura di una tipica casa di 120 m², la differenza tra prezzo al dettaglio al pezzo e prezzo pacchetto del magazzino può essere €3.000–€7.000.",

    calculatorCtaHeading: "Calcola i Costi del Tuo Legname",
    calculatorCtaText:
      "Usa i nostri calcolatori gratuiti per stimare il costo esatto del tuo progetto — dai montanti strutturali al compensato.",
    calculatorLinks: [
      { label: "Calcolatore Costo Legname", href: "/calculators/hardware/lumber-cost-calculator", description: "Stima il costo totale per legname dimensionale per dimensione e quantità." },
      { label: "Calcolatore Piedi Tavolari", href: "/calculators/hardware/board-feet-calculator", description: "Converti le dimensioni del legname in piedi tavolari con stime di costo." },
      { label: "Calcolatore Compensato", href: "/calculators/hardware/plywood-calculator", description: "Calcola i fogli di compensato necessari e il costo totale per spessore." },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      { question: "Quanto costa un montante in abete oggi?", answer: "Nel 2026-2025, un montante strutturale in abete 6×8×300 cm costa €4–€8 nei centri bricolage come Leroy Merlin e Bricoman. I prezzi variano per regione, con costi più alti nelle isole e più bassi nel Nord-Est dove è vicino alle segherie austriache e trentine. Specie premium come larice e castagno costano €8–€15 per la stessa dimensione. Verifica il sito del tuo rivenditore locale per i prezzi correnti — i prezzi del legname possono cambiare settimanalmente." },
      { question: "Perché il legname è così caro rispetto a 5 anni fa?", answer: "I prezzi del legname sono saliti del 200–300% nel 2020-2021 per la domanda post-pandemia, la chiusura temporanea delle segherie e le interruzioni delle catene di approvvigionamento. Sebbene i prezzi siano scesi significativamente dal picco, restano del 20–40% sopra i livelli pre-2020 per i maggiori costi operativi delle segherie, i costi di trasporto e l'aumento della domanda da una carenza strutturale di alloggi. Il mercato si è normalizzato ma a una base più alta." },
      { question: "Qual è il periodo migliore per acquistare legname?", answer: "Il tardo autunno e l'inverno (ottobre–gennaio) offrono tipicamente i prezzi più bassi perché l'attività edilizia rallenta e i fornitori scontano le scorte. Si può risparmiare il 10–15% rispetto ai prezzi di punta di primavera ed estate. Se hai stoccaggio asciutto e coperto, acquistare il pacchetto orditura a novembre per una costruzione primaverile può portare risparmi significativi." },
      { question: "Il legname trattato in autoclave vale il costo aggiuntivo?", answer: "Sì, per qualsiasi legno a contatto con il suolo, entro 15 cm dal terreno o esposto a umidità persistente. Il legname trattato costa il 50–100% in più dell'abete non trattato ma dura 20–40 anni contro 3–5 anni del legno non trattato a contatto con il suolo. È richiesto dalle normative per dormienti, sottostrutture di terrazze e qualsiasi elemento strutturale vicino al terreno. Il trattamento più comune in Italia è con sali di rame (classe di rischio 3 o 4)." },
      { question: "Quanto legname serve per l'orditura di una casa?", answer: "Una tipica casa a un piano di 120 m² richiede circa 8–12 m³ di legname per l'orditura completa (pareti, solaio e tetto). Questo si traduce in circa 300–400 montanti, 30–50 fogli di pannellatura, più travetti, puntoni/capriate, correnti e architravi. Ai prezzi attuali, il pacchetto legname per l'orditura di una casa di 120 m² costa €6.000–€12.000 a seconda della specie, delle condizioni di mercato e di dove acquisti." },
      { question: "Qual è la differenza tra legname essiccato in forno e legname fresco?", answer: "Il legname essiccato in forno (KD — kiln-dried) è stato essiccato in camera a un contenuto di umidità del 18% o inferiore, rendendolo più stabile e meno soggetto a deformazioni e ritiri. Il legname fresco (verde) supera il 18% di umidità e si ritirerà durante l'asciugatura — costa meno ma va usato solo dove il ritiro è accettabile. Per le orditure, usare sempre legname essiccato (classe S-DRY o KD) per minimizzare fessurazioni nel cartongesso e problemi con le finiture causati dal ritiro del legno." },
    ],
  },

  compositeVsWood: {
    title: "Decking Composito vs Legno: Qual è Meglio?",
    metaDescription:
      "Decking composito vs legno a confronto: costo iniziale, valore a lungo termine, durabilità, manutenzione, aspetto, durata e impatto ambientale. Guida completa per scegliere il materiale giusto per la tua terrazza.",

    heroTitle: "Decking Composito vs Legno",
    heroSubtitle: "Qual è Meglio?",
    heroDescription:
      "Un confronto completo tra materiali per decking composito e legno per aiutarti a scegliere l'opzione giusta per il tuo budget, clima e stile di vita.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "Scegli il decking composito se vuoi manutenzione minima, durata di 25–50 anni e aspetto costante nel tempo. Scegli il legno (trattato o larice) se il budget iniziale è la tua priorità principale, ami l'aspetto e il tatto del legno naturale e sei disposto a manutenerlo ogni anno. Il composito costa 2–4 volte di più all'inizio ma fa risparmiare nel lungo periodo quando si considerano i costi di oliatura, trattamento e sostituzione del legno.",

    whatIsCompositeHeading: "Cos'è il Decking Composito?",
    whatIsCompositeText1:
      "Il decking composito è un materiale da costruzione ingegnerizzato composto da una combinazione di fibre di legno (segatura, farina di legno) e polimeri plastici (tipicamente polietilene o polipropilene). Le fibre di legno forniscono rigidità strutturale e aspetto naturale, mentre il componente plastico offre resistenza all'umidità e durabilità. La maggior parte delle tavole composite moderne presenta un rivestimento protettivo in polimero (guscio) su tutti i quattro lati che resiste a macchie, sbiadimento, muffa e graffi.",
    whatIsCompositeText2:
      "I principali marchi di decking composito disponibili in Italia includono Trex (leader di mercato, usa il 95% di materiali riciclati), TimberTech/AZEK, Fiberon, Deckorators e Twinson (del gruppo Deceuninck, molto diffuso in Europa). I prezzi vanno da €30 a €80 al metro quadro per le sole tavole, con la maggior parte dei committenti che sceglie prodotti di fascia media a €40–€55/m². Le tavole composite sono tipicamente disponibili in lunghezze di 3, 4 e 5 metri.",

    whatIsWoodHeading: "Cos'è il Decking in Legno?",
    whatIsWoodText1:
      "Il decking in legno utilizza tavole di legno naturale come superficie della terrazza. Le tre specie più comuni per il decking in Italia sono il pino trattato in autoclave (il più economico e diffuso), il larice (naturalmente resistente al marciume con tonalità calda) e i legni tropicali come ipé, cumaru e teak (i più durevoli ma più costosi). Il pino trattato rappresenta circa il 60% di tutte le terrazze in legno costruite in Italia.",
    whatIsWoodText2:
      "Le tavole da terrazza in pino trattato costano €15–€25 al metro quadro, rendendole l'opzione più economica. Il larice va da €25–€40/m², mentre i legni tropicali costano €50–€100/m². Le tavole sono disponibili in lunghezze da 2, 3, 4 e 5 metri. La tavola da terrazza standard è un listone da 2,1×14,5 cm o 2,8×14,5 cm che offre buona rigidità e comfort al calpestio.",

    comparisonHeading: "Composito vs Legno: Confronto Diretto",
    comparisonSubheading: "Come i due materiali si confrontano in ogni categoria importante.",
    comparisonCol1: "Categoria",
    comparisonCol2: "Decking Composito",
    comparisonCol3: "Decking in Legno",
    comparisonRows: [
      { category: "Costo Iniziale (al m²)", composite: "€70–€180 installato", wood: "€40–€100 installato" },
      { category: "Durata", composite: "25–50 anni", wood: "10–30 anni (varia per specie)" },
      { category: "Manutenzione Annuale", composite: "Lavaggio con acqua e sapone", wood: "Olio/impregnante ogni 1–2 anni" },
      { category: "Costo Manutenzione (20 anni)", composite: "€0–€200 totali", wood: "€1.500–€4.000 totali" },
      { category: "Aspetto", composite: "Costante, aspetto industriale", wood: "Venatura naturale, ingrigisce nel tempo" },
      { category: "Riscaldamento al Sole", composite: "Si scalda molto al sole", wood: "Resta più fresco al calpestio" },
      { category: "Resistenza ai Graffi", composite: "Buona (prodotti con guscio)", wood: "Varia per specie" },
      { category: "Resistenza allo Sbiadimento", composite: "Eccellente (garanzia 25 anni)", wood: "Ingrigisce senza manutenzione" },
      { category: "Impatto Ambientale", composite: "Contenuto riciclato, lunga durata", wood: "Rinnovabile, durata inferiore" },
      { category: "Difficoltà Fai-da-Te", composite: "Moderata (fissaggi speciali)", wood: "Facile (viti standard)" },
    ],

    costHeading: "Confronto Costi: Il Quadro Completo",
    costIntro: "La differenza di prezzo iniziale tra composito e legno è significativa, ma il costo totale di possesso lungo la vita della terrazza racconta una storia diversa.",
    costText1:
      "Per una tipica terrazza di 4×5 m (20 m²), il legno da terrazza in pino trattato costa €300–€500 per le sole tavole. La stessa terrazza in composito di fascia media (Trex Select o Twinson) costa €800–€1.600 per le tavole. Includendo la sottostruttura, la ferramenta e la manodopera di installazione, il costo totale installato è circa €2.500–€4.000 per il legno e €4.500–€7.500 per il composito.",
    costText2:
      "Tuttavia, le terrazze in legno richiedono manutenzione annuale. L'oliatura e il trattamento di una terrazza di 20 m² costa €100–€300 all'anno in materiali (olio per legno di qualità più materiali di applicazione). In 20 anni, sono €2.000–€6.000 di soli costi di manutenzione. Una terrazza in pino trattato necessita tipicamente anche della sostituzione delle tavole dopo 10–15 anni (€800–€1.500). Le terrazze in composito necessitano solo di un occasionale lavaggio con acqua e sapone.",
    costText3:
      "Su un periodo di 25 anni, il costo totale di possesso per una terrazza in legno di 4×5 m è circa €5.500–€11.500 (costruzione iniziale più manutenzione e sostituzione parziale). La stessa terrazza in composito costa €4.500–€7.500 totali con praticamente zero spese di manutenzione. Al traguardo dei 12–15 anni, il composito diventa la scelta più economica.",

    whenCompositeHeading: "Quando Scegliere il Decking Composito",
    whenCompositeIntro: "Il decking composito è la scelta migliore in queste situazioni:",
    whenCompositeItems: [
      "Vuoi una terrazza a bassa manutenzione che non ha mai bisogno di oliatura, trattamento o verniciatura.",
      "Vivi in un clima umido, piovoso o costiero dove il legno si deteriora rapidamente. Le zone costiere del Tirreno e dell'Adriatico sono particolarmente aggressive.",
      "Prevedi di restare nella casa per 10+ anni e vuoi valore a lungo termine.",
      "Preferisci un aspetto costante e uniforme che non cambierà nel tempo.",
      "Vuoi una garanzia del produttore di 25–50 anni per la tranquillità.",
      "Stai costruendo una terrazza sopraelevata o difficile da raggiungere dove la manutenzione sarebbe complicata.",
    ],
    whenCompositeSummary:
      "Il composito è la migliore scelta complessiva per i proprietari di casa che danno priorità a comodità, durabilità e risparmi a lungo termine rispetto al minor costo iniziale possibile.",

    whenWoodHeading: "Quando Scegliere il Decking in Legno",
    whenWoodIntro: "Il decking in legno ha più senso in queste situazioni:",
    whenWoodItems: [
      "Il tuo budget iniziale è limitato e devi minimizzare il costo di costruzione iniziale.",
      "Ami l'aspetto, il tatto e il profumo del legno vero e sei disposto a manutenerlo.",
      "Vivi in un clima estremamente caldo (come la Sicilia o la Sardegna meridionale) dove il composito sarebbe scomodamente caldo al calpestio a piedi nudi.",
      "Stai costruendo una struttura temporanea o a breve termine (orizzonte 5–10 anni).",
      "Ti piacciono i lavori di manutenzione fai-da-te e consideri l'oliatura annuale un rituale soddisfacente.",
      "Vuoi una terrazza in legno tropicale (ipé, teak) che offra sia bellezza naturale che durabilità di 25+ anni.",
    ],
    whenWoodSummary:
      "Il legno è ideale per chi ha budget contenuto, gli appassionati del legno naturale e i progetti dove il calore e il carattere del vero legno superano l'impegno della manutenzione.",

    calculatorCtaHeading: "Calcola i Materiali per la Tua Terrazza",
    calculatorCtaText: "Usa i nostri calcolatori gratuiti per stimare tavole, plinti, parapetti e scale per il tuo progetto.",
    calculatorLinks: [
      { label: "Calcolatore Tavole Terrazza", href: "/calculators/outdoor/deck-board-calculator", description: "Stima le tavole necessarie per qualsiasi dimensione di terrazza." },
      { label: "Calcolatore Plinti Terrazza", href: "/calculators/outdoor/deck-footing-calculator", description: "Calcola plinti in calcestruzzo e disposizione dei pali." },
      { label: "Calcolatore Parapetto Terrazza", href: "/calculators/outdoor/deck-railing-calculator", description: "Ottieni le quantità di pali, balaustrini e corrimano." },
      { label: "Calcolatore Scale Terrazza", href: "/calculators/outdoor/deck-stair-calculator", description: "Trova il numero di gradini, i cosciali e le pedate." },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Il decking composito vale il costo aggiuntivo?",
        answer:
          "Sì, per la maggior parte dei proprietari di casa. Sebbene il composito costi 2–4 volte di più inizialmente, elimina €2.000–€6.000 di costi di manutenzione in 20 anni e dura 25–50 anni contro 10–15 per il pino trattato. Il punto di pareggio è tipicamente 12–15 anni. Se prevedi di restare nella tua casa a lungo termine, il composito è quasi sempre la decisione finanziaria migliore considerando il costo totale di possesso.",
      },
      {
        question: "Il decking composito si scalda troppo per camminarci sopra?",
        answer:
          "Il decking composito assorbe più calore del legno, specialmente i colori scuri. In una giornata a 35°C al sole diretto, il composito scuro può raggiungere 60–75°C, scomodo per i piedi nudi. I colori chiari restano 10–15°C più freschi. Strategie di mitigazione: scegliere colori chiari, aggiungere strutture ombreggianti, usare tappeti da esterno nelle zone a piedi nudi. Il decking in legno resta 5–10°C più fresco del composito nelle stesse condizioni.",
      },
      {
        question: "Quanto dura il decking composito?",
        answer:
          "Il decking composito di qualità dei principali produttori (Trex, TimberTech, Twinson) dura 25–50 anni con manutenzione minima. La maggior parte offre garanzie strutturali di 25 anni e garanzie anti-sbiadimento e anti-macchia di 25–50 anni. I compositi di prima generazione degli anni 2000 avevano problemi di muffa e sbiadimento, ma i moderni compositi con guscio hanno ampiamente risolto questi problemi.",
      },
      {
        question: "Si può verniciare o oliare il decking composito?",
        answer:
          "Il decking composito con guscio non dovrebbe essere verniciato o oliato perché il rivestimento polimerico impedisce l'adesione, e la vernice si staccherà entro 1–2 stagioni. Le tavole composite senza guscio o datate possono essere verniciate con smalto per esterni dopo pulizia approfondita e applicazione di un fondo aggrappante. Per cambiare il colore di una terrazza composita, considera rivestimenti specifici per composito o contatta il produttore per prodotti di finitura approvati.",
      },
      {
        question: "Qual è più ecologico: composito o legno?",
        answer:
          "Entrambi hanno compromessi ambientali. Il decking composito usa materiali riciclati (Trex usa il 95% di contenuto riciclato) e la sua lunga durata significa meno sostituzioni nel tempo. Tuttavia, il composito non è biodegradabile ed è difficile da riciclare a fine vita. Il legno è una risorsa rinnovabile e biodegradabile che sequestra carbonio, ma il legno trattato contiene conservanti chimici e ha durata inferiore richiedendo raccolti più frequenti. Il legno di gestione sostenibile (certificato FSC/PEFC) ha il minor impatto ambientale, mentre il composito vince sulla longevità e il contenuto riciclato.",
      },
      {
        question: "Si possono combinare composito e legno sulla stessa terrazza?",
        answer:
          "Sì, molti costruttori usano una sottostruttura in legno trattato (pali, travi, travetti) con tavole e parapetti in composito sopra. Questo è l'approccio standard dato che le tavole composite sono progettate come superficie da calpestio, non come elementi strutturali. La struttura in legno trattato fornisce il supporto strutturale a un costo inferiore rispetto a un sistema tutto in composito, mentre la superficie composita offre i benefici della bassa manutenzione dove si vede e si calpesta la terrazza.",
      },
    ],
  },

  gravelCost: {
    title: "Quanto Costa la Ghiaia? Guida ai Prezzi 2026",
    metaDescription:
      "La ghiaia costa 15\u201340 EUR a tonnellata, 25\u201360 EUR al metro cubo nel 2026. Guida completa: pietrisco, ghiaietto, stabilizzato, granito decomposto, ciottoli di fiume. Vialetti, terrazze, sentieri, drenaggio, consegna e calcolo quantit\u00e0.",

    heroTitle: "Quanto Costa la Ghiaia?",
    heroSubtitle: "Guida ai Prezzi 2026",
    heroDescription:
      "Panoramica completa dei prezzi della ghiaia per tipo, progetto e regione in Italia. Copre pietrisco, ghiaietto, stabilizzato, granito decomposto e ciottoli di fiume con costi di consegna, ordini minimi e consigli per risparmiare.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "La ghiaia costa da 15 a 40 EUR a tonnellata o da 25 a 60 EUR al metro cubo nel 2026, a seconda del tipo e della regione. Lo stabilizzato e il pietrisco sono i pi\u00f9 economici a 12\u201325 EUR/tonnellata. Il ghiaietto costa 25\u201345 EUR/tonnellata. Le pietre decorative come i ciottoli costano 40\u2013120 EUR/tonnellata. La consegna aggiunge 50\u2013150 EUR a carico per distanze fino a 30 km.",

    gravelTypesHeading: "Tipi di Ghiaia e Prezzi",
    gravelTypesIntro:
      "Non tutta la ghiaia \u00e8 uguale. Ogni tipo ha peso, compattazione e prezzo diversi. Ecco i tipi pi\u00f9 comuni e i prezzi 2026 in Italia:",
    gravelTypesColType: "Tipo di Ghiaia",
    gravelTypesColCost: "Costo per Tonnellata",
    gravelTypesColBestFor: "Ideale Per",
    gravelTypesRows: [
      { type: "Pietrisco (10\u201320 mm)", cost: "15 \u2013 30 EUR", bestFor: "Vialetti, drenaggio, sottofondo. Spigoli angolari che si incastrano." },
      { type: "Ghiaietto (8\u201316 mm)", cost: "25 \u2013 45 EUR", bestFor: "Sentieri, terrazze, aiuole. Liscio e arrotondato." },
      { type: "Stabilizzato (0/30 mm)", cost: "12 \u2013 22 EUR", bestFor: "Vialetti, parcheggi. Contiene fini che compattano in superficie dura." },
      { type: "Granito Decomposto", cost: "25 \u2013 50 EUR", bestFor: "Sentieri, giardini, aspetto naturale. Si compatta bene." },
      { type: "Ciottoli di Fiume (30\u201380 mm)", cost: "40 \u2013 120 EUR", bestFor: "Paesaggistica, letti di ruscello secco, decorazione." },
      { type: "Ghiaia di Marmo Bianco", cost: "60 \u2013 160 EUR", bestFor: "Decorazione, bordure, zone d'accento. Prezzo premium." },
    ],

    costByProjectHeading: "Costo della Ghiaia per Tipo di Progetto",
    costByProjectIntro:
      "Quanto pagherete dipende dalle dimensioni, dalla profondit\u00e0 e dal tipo. Costi tipici 2026 per progetti residenziali comuni in Italia:",
    costByProjectColProject: "Progetto",
    costByProjectColTypical: "Costo Tipico",
    costByProjectColNotes: "Note",
    costByProjectRows: [
      { project: "Vialetto d'ingresso (3,5\u00d715 m)", typical: "400 \u2013 1.200 EUR", notes: "8\u201312 tonnellate di pietrisco a 15 cm. Posa professionale extra." },
      { project: "Terrazza (4\u00d74 m)", typical: "150 \u2013 400 EUR", notes: "2\u20133 tonnellate di ghiaietto a 8\u201310 cm. Cordoli extra." },
      { project: "Sentiero (1\u00d710 m)", typical: "60 \u2013 180 EUR", notes: "0,5\u20131,5 tonnellate a 8 cm. Ghiaietto o granito decomposto." },
      { project: "Drenaggio (15 m)", typical: "100 \u2013 300 EUR", notes: "2\u20134 tonnellate di pietrisco 10/20. Geotessile separato." },
      { project: "Aiuola (3\u00d76 m)", typical: "150 \u2013 500 EUR", notes: "2\u20133 tonnellate di pietra decorativa a 8 cm." },
      { project: "Base per Casetta (3\u00d74 m)", typical: "100 \u2013 300 EUR", notes: "2\u20133 tonnellate a 10\u201315 cm. Pietrisco con compattazione." },
      { project: "Posto Auto (3\u00d76 m)", typical: "200 \u2013 600 EUR", notes: "4\u20136 tonnellate a 15 cm. Stabilizzato raccomandato." },
    ],

    deliveryCostsHeading: "Costi di Consegna e Ordini Minimi",
    deliveryCostsIntro:
      "La consegna \u00e8 una parte significativa del costo, specialmente per ordini piccoli.",
    deliveryCostsText1:
      "La maggior parte delle cave e dei rivenditori di materiali edili applica 50\u2013150 EUR per consegna fino a 30 km. Oltre, contare 2\u20134 EUR per km aggiuntivo. Un camion ribaltabile standard trasporta 10\u201315 tonnellate. Molti offrono mezzi carichi, ma il costo di consegna resta invariato.",
    deliveryCostsText2:
      "Gli ordini minimi variano ma sono generalmente 5\u201310 tonnellate per la consegna. Alcuni offrono 1\u20132 tonnellate con sovrapprezzo (20\u201350 EUR). Per quantit\u00e0 sotto 1 tonnellata, il ritiro con rimorchio \u00e8 l'opzione pi\u00f9 economica.",
    deliveryCostsText3:
      "Per risparmiare sulla consegna: unite gli ordini con i vicini, acquistate in bassa stagione (autunno-inverno), o ritirate voi stessi. Un rimorchio da 750 kg contiene circa 0,4 m\u00b3 a viaggio. Un rimorchio da 2 tonnellate trasporta 1,2 m\u00b3. Il noleggio di un rimorchio ribaltabile (50\u2013100 EUR/giorno) permette 2\u20133 m\u00b3 a viaggio.",

    howToCalculateHeading: "Come Calcolare la Quantit\u00e0 Necessaria",
    howToCalculateIntro:
      "Calcolare la quantit\u00e0 giusta evita consegne extra costose o materiale in eccesso. Seguite questi passaggi:",
    howToCalculateItems: [
      "Misurate l'area: Moltiplicate lunghezza per larghezza in metri per ottenere i m\u00b2. Per forme irregolari, suddividete in rettangoli.",
      "Determinate la profondit\u00e0: Standard: 5\u20138 cm per sentieri e aiuole, 10 cm per terrazze, 15\u201320 cm per vialetti. Convertite cm in metri dividendo per 100.",
      "Calcolate i metri cubi: Lunghezza \u00d7 larghezza \u00d7 profondit\u00e0 (tutto in metri) = m\u00b3.",
      "Convertite in tonnellate: Moltiplicate i m\u00b3 per il fattore peso \u2014 1,8 per pietrisco, 1,7 per ghiaietto, 2,0 per stabilizzato, 1,9 per granito decomposto.",
      "Aggiungete il 10% di scarto: Moltiplicate per 1,1 per compattazione, dispersione e terreno irregolare.",
      "Esempio: Un vialetto di 3,5 \u00d7 15 m a 15 cm = 3,5 \u00d7 15 \u00d7 0,15 = 7,9 m\u00b3 \u00d7 1,8 = 14,2 tonnellate. Con 10%: ordinate 15,6 tonnellate.",
    ],
    howToCalculateSummary:
      "Consiglio: Usate il nostro Calcolatore di Ghiaia gratuito. Inserite le dimensioni e ottenete istantaneamente m\u00b3, tonnellaggio e stime dei costi.",

    savingTipsHeading: "Come Risparmiare sulla Ghiaia",
    savingTipsIntro:
      "La ghiaia \u00e8 gi\u00e0 uno dei materiali di pavimentazione pi\u00f9 economici, ma questi consigli aiutano a risparmiare ancora di pi\u00f9:",
    savingTipsItems: [
      "Acquistate in grandi quantit\u00e0: Il prezzo per tonnellata cala per ordini grandi. Sopra 15 tonnellate, sconti del 10\u201320% sono comuni.",
      "Scegliete pietra locale: La ghiaia da cave vicine costa molto meno. Il trasporto \u00e8 il secondo fattore di prezzo pi\u00f9 importante.",
      "Ordinate fuori stagione: Autunno e inverno sono i mesi pi\u00f9 tranquilli. Molti fornitori offrono sconti del 10\u201315%.",
      "Ritirate voi stessi: Con un rimorchio, eliminate i 50\u2013150 EUR di consegna. Per piccoli progetti, risparmiate il 20\u201330%.",
      "Usate stabilizzato al posto della pietra decorativa: Lo stabilizzato costa 12\u201322 EUR/tonnellata vs 40\u2013120 EUR per le opzioni decorative.",
      "Confrontate pi\u00f9 fornitori: I prezzi variano del 30\u201350% tra fornitori della stessa zona. Chiedete almeno 3 preventivi.",
    ],

    calculatorCtaHeading: "Calcolate il Vostro Fabbisogno di Ghiaia",
    calculatorCtaText: "Usate i nostri calcolatori gratuiti per stimare quantit\u00e0 e costo esatti del vostro progetto.",
    calculatorLinks: [
      { label: "Calcolatore di Ghiaia", href: "/calculators/foundation/gravel-calculator", description: "Calcolate m\u00b3 e tonnellate per qualsiasi area con stima dei costi." },
      { label: "Calcolatore Ghiaia per Vialetto", href: "/calculators/foundation/driveway-gravel-calculator", description: "Stimate la ghiaia per tipo per vialetti con fascia di prezzo e consegna." },
      { label: "Calcolatore Lastra in Calcestruzzo", href: "/calculators/foundation/concrete-slab-calculator", description: "Progettate in calcestruzzo? Calcolate m\u00b3 e numero di sacchi." },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Quanto costa una tonnellata di ghiaia nel 2026?",
        answer:
          "La ghiaia costa 15\u201340 EUR a tonnellata nel 2026 per i tipi comuni. Lo stabilizzato \u00e8 il pi\u00f9 economico a 12\u201322 EUR/tonnellata. Il pietrisco costa 15\u201330 EUR/tonnellata. Il ghiaietto costa 25\u201345 EUR/tonnellata. Il granito decomposto va da 25 a 50 EUR/tonnellata. I ciottoli decorativi costano 40\u2013120 EUR/tonnellata.",
      },
      {
        question: "Quanta ghiaia serve per un vialetto?",
        answer:
          "Un vialetto standard per un'auto (3,5 m \u00d7 15 m a 15 cm) richiede circa 8 m\u00b3 o 14 tonnellate. Per un vialetto doppio (7 \u00d7 15 m), servono 16 m\u00b3 o 28 tonnellate. Usate pietrisco o stabilizzato. Aggiungete il 10% per compattazione. Costo materiale: 200\u2013600 EUR.",
      },
      {
        question: "Quanto costa un metro cubo di ghiaia?",
        answer:
          "Un metro cubo costa 25\u201360 EUR a seconda del tipo. Il pietrisco costa 25\u201350 EUR/m\u00b3. Lo stabilizzato costa 20\u201335 EUR/m\u00b3. Il ghiaietto costa 40\u201375 EUR/m\u00b3. Prezzi solo materiale \u2014 consegna (50\u2013150 EUR/carico) a parte. Un m\u00b3 copre circa 10 m\u00b2 a 10 cm.",
      },
      {
        question: "Qual \u00e8 la ghiaia pi\u00f9 economica?",
        answer:
          "Lo stabilizzato (0/30 mm, detto anche misto granulometrico) \u00e8 il pi\u00f9 economico a 12\u201322 EUR/tonnellata. \u00c8 una miscela di pietrisco e fini che si compatta in una superficie molto dura. Il pietrisco semplice \u00e8 la successiva opzione a 15\u201330 EUR/tonnellata. L'aggregato riciclato pu\u00f2 costare ancora meno.",
      },
      {
        question: "Quanta ghiaia serve per metro quadrato?",
        answer:
          "A 10 cm di profondit\u00e0: circa 0,10 m\u00b3 o 0,18 tonnellate per m\u00b2. A 5 cm: 0,05 m\u00b3/m\u00b2. A 15 cm (vialetti): 0,15 m\u00b3 o 0,27 tonnellate/m\u00b2. Moltiplicate per l'area totale e aggiungete il 10%.",
      },
      {
        question: "Un vialetto in ghiaia costa meno del calcestruzzo o dell'asfalto?",
        answer:
          "S\u00ec, notevolmente. Un vialetto in ghiaia costa 8\u201320 EUR/m\u00b2 in materiale (20\u201350 EUR/m\u00b2 posato), contro 60\u2013120 EUR/m\u00b2 per il calcestruzzo e 40\u201380 EUR/m\u00b2 per l'asfalto. Un vialetto di 3,5 \u00d7 15 m in ghiaia costa 1.000\u20132.500 EUR posato vs 3.200\u20136.500 EUR per il calcestruzzo. Tuttavia, la ghiaia richiede pi\u00f9 manutenzione e rabbocco ogni 2\u20133 anni.",
      },
    ],
  },

  drivewayCost: {
    title: "Quanto Costa un Vialetto? Guida ai Prezzi 2026",
    metaDescription:
      "Un vialetto nuovo costa 2.000\u201315.000 EUR nel 2026 a seconda del materiale e della dimensione. Guida completa: calcestruzzo (50\u2013120 EUR/m\u00b2), asfalto (30\u201370 EUR/m\u00b2), ghiaia (8\u201325 EUR/m\u00b2), masselli autobloccanti (60\u2013200 EUR/m\u00b2). Fattori di prezzo, fai da te vs impresa e consigli per risparmiare.",

    heroTitle: "Quanto Costa un Vialetto?",
    heroSubtitle: "Guida ai Prezzi 2026",
    heroDescription:
      "Analisi completa dei costi di un vialetto per materiale, dimensione e regione in Italia. Copre calcestruzzo, asfalto, ghiaia e masselli autobloccanti con prezzi posati, confronti di durabilit\u00e0, fattori che influenzano il costo e modi comprovati per risparmiare.",

    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText:
      "Un vialetto nuovo costa 2.000 a 15.000 EUR nel 2026, con la maggior parte dei proprietari che paga 4.000\u201310.000 EUR per un vialetto doppio standard. La ghiaia \u00e8 la pi\u00f9 economica a 8\u201325 EUR/m\u00b2. L'asfalto costa 30\u201370 EUR/m\u00b2. Il calcestruzzo costa 50\u2013120 EUR/m\u00b2. I masselli autobloccanti sono i pi\u00f9 cari a 60\u2013200 EUR/m\u00b2. Questi prezzi includono materiali e posa professionale.",

    costByMaterialHeading: "Costo del Vialetto per Materiale",
    costByMaterialIntro:
      "Il materiale scelto \u00e8 il fattore pi\u00f9 importante nel costo del vialetto. Ogni opzione offre un diverso equilibrio tra prezzo, durabilit\u00e0, estetica e manutenzione. Ecco i costi in Italia nel 2026:",
    costByMaterialColMaterial: "Materiale",
    costByMaterialColCostSqFt: "Costo Posato / m\u00b2",
    costByMaterialColLifespan: "Durata",
    costByMaterialColBestFor: "Ideale Per",
    costByMaterialRows: [
      { material: "Ghiaia", costSqFt: "8 \u2013 25 EUR", lifespan: "15\u201325 anni", bestFor: "Propriet\u00e0 rurali, vialetti lunghi, budget contenuto. Richiede rabbocco periodico." },
      { material: "Asfalto", costSqFt: "30 \u2013 70 EUR", lifespan: "15\u201320 anni", bestFor: "Buon rapporto qualit\u00e0-prezzo. Superficie flessibile che resiste bene al gelo." },
      { material: "Calcestruzzo", costSqFt: "50 \u2013 120 EUR", lifespan: "25\u201350 anni", bestFor: "La maggior parte dei vialetti residenziali. Durevole, bassa manutenzione." },
      { material: "Calcestruzzo Stampato", costSqFt: "60 \u2013 150 EUR", lifespan: "25\u201350 anni", bestFor: "Aspetto decorativo a costo inferiore ai masselli. Imita mattone, pietra o ardesia." },
      { material: "Masselli Autobloccanti", costSqFt: "60 \u2013 150 EUR", lifespan: "25\u201350+ anni", bestFor: "Residenziale di pregio. Molto durevole, molti motivi, opzioni permeabili disponibili." },
      { material: "Pietra Naturale", costSqFt: "80 \u2013 200 EUR", lifespan: "50+ anni", bestFor: "Ville e propriet\u00e0 di lusso. Porfido, granito, travertino o pietra locale. Massimo pregio estetico." },
    ],

    costBySizeHeading: "Costo del Vialetto per Dimensione",
    costBySizeIntro:
      "La dimensione del vialetto influisce notevolmente sul costo totale. Un posto auto singolo occupa circa 15\u201330 m\u00b2, mentre un doppio richiede 30\u201360 m\u00b2. I vialetti circolari possono superare i 100 m\u00b2.",
    costBySizeColSize: "Tipo di Vialetto",
    costBySizeColDimensions: "Dimensione Tipica",
    costBySizeColConcrete: "Calcestruzzo",
    costBySizeColAsphalt: "Asfalto",
    costBySizeColGravel: "Ghiaia",
    costBySizeRows: [
      { size: "Posto Singolo", dimensions: "3\u00d75 m (15 m\u00b2)", concrete: "750 \u2013 1.800 EUR", asphalt: "450 \u2013 1.050 EUR", gravel: "120 \u2013 375 EUR" },
      { size: "Doppio Standard", dimensions: "5\u00d710 m (50 m\u00b2)", concrete: "2.500 \u2013 6.000 EUR", asphalt: "1.500 \u2013 3.500 EUR", gravel: "400 \u2013 1.250 EUR" },
      { size: "Doppio Largo", dimensions: "6\u00d712 m (72 m\u00b2)", concrete: "3.600 \u2013 8.640 EUR", asphalt: "2.160 \u2013 5.040 EUR", gravel: "576 \u2013 1.800 EUR" },
      { size: "Vialetto Lungo Rurale", dimensions: "3,5\u00d730 m (105 m\u00b2)", concrete: "5.250 \u2013 12.600 EUR", asphalt: "3.150 \u2013 7.350 EUR", gravel: "840 \u2013 2.625 EUR" },
      { size: "Vialetto Circolare", dimensions: "~100 \u2013 150 m\u00b2", concrete: "5.000 \u2013 18.000 EUR", asphalt: "3.000 \u2013 10.500 EUR", gravel: "800 \u2013 3.750 EUR" },
    ],

    factorsHeading: "Fattori che Influenzano il Costo del Vialetto",
    factorsIntro:
      "Oltre al materiale e alla dimensione, diversi fattori possono far variare il prezzo. Conoscerli aiuta a preventivare con precisione:",
    factorsItems: [
      "Scelta del materiale: Il fattore pi\u00f9 importante. La ghiaia a 8\u201325 EUR/m\u00b2 \u00e8 5\u201310\u00d7 pi\u00f9 economica della pietra naturale a 80\u2013200 EUR/m\u00b2.",
      "Superficie e forma: Vialetti pi\u00f9 grandi costano di pi\u00f9 in totale ma spesso meno al m\u00b2. Vialetti curvi richiedono 20\u201340% di manodopera in pi\u00f9.",
      "Preparazione del terreno: Se il terreno necessita di scavo o livellamento, aggiungere 5\u201330 EUR/m\u00b2. Terreni in pendenza richiedono muri di contenimento.",
      "Drenaggio: Un drenaggio adeguato (canalette, pozzetti) costa 500\u20133.000 EUR. Spesso richiesto dalla normativa italiana per lo smaltimento delle acque meteoriche.",
      "Rimozione del vecchio vialetto: Rimuovere vecchio calcestruzzo costa 10\u201325 EUR/m\u00b2. L'asfalto \u00e8 leggermente pi\u00f9 economico. La ghiaia pu\u00f2 essere ridistribuita.",
      "Differenze regionali: I prezzi variano del 30\u201350% per regione. Milano, Roma e il Nord Italia sono 20\u201340% pi\u00f9 cari delle zone rurali del Sud.",
      "Permessi: Verificare con il Comune se serve una SCIA o permesso per la pavimentazione (50\u2013500 EUR). Attenzione ai vincoli paesaggistici.",
      "Sottofondo: Un sottofondo in misto granulare compattato (20\u201340 cm) \u00e8 essenziale per calcestruzzo e asfalto. Costa 5\u201315 EUR/m\u00b2 in pi\u00f9.",
    ],

    diyVsContractorHeading: "Fai da Te vs Impresa",
    diyVsContractorIntro:
      "Se potete realizzare un vialetto da soli dipende dal materiale scelto. Ecco una valutazione onesta:",
    diyVsContractorText1:
      "I vialetti in ghiaia sono l'opzione pi\u00f9 adatta al fai da te. Con attrezzi di base (pala, rastrello e piastra vibrante a noleggio), un proprietario pu\u00f2 realizzare un vialetto in ghiaia in un fine settimana. Il processo comprende: preparare l'area, posare il tessuto non tessuto antierba, stendere la ghiaia in strati da 5 cm e compattare ogni strato. Il fai da te fa risparmiare il 40\u201360%.",
    diyVsContractorText2:
      "I vialetti in calcestruzzo e asfalto non sono progetti pratici per la maggior parte dei proprietari. Il calcestruzzo richiede attrezzature specializzate (autobetoniera, vibratore, staggia, frattazzo), tempismo preciso durante il getto e esperienza con pendenze e casseforme. Un calcestruzzo mal gettato si fessurerà prematuramente.",
    diyVsContractorText3:
      "I vialetti in masselli autobloccanti si collocano a metà strada. Un fai-da-te esperto può posare i masselli in un lungo fine settimana, ma la preparazione del sottofondo è molto impegnativa. Per la maggior parte, far preparare il sottofondo da un professionista e posare i masselli da soli offre il miglior compromesso tra risparmio (25\u201335%) e qualità. Chiedete sempre almeno tre preventivi.",

    savingTipsHeading: "Come Risparmiare su un Vialetto Nuovo",
    savingTipsIntro:
      "Un vialetto \u00e8 un investimento significativo, ma ci sono strategie collaudate per ridurre il costo senza sacrificare la qualit\u00e0:",
    savingTipsItems: [
      "Chiedere pi\u00f9 preventivi: I prezzi possono variare del 30\u201350% tra imprese. Chiedete almeno tre preventivi scritti con materiali, spessori e garanzia.",
      "Programmare fuori stagione: Autunno inoltrato e inverno sono periodi tranquilli. Molte imprese offrono sconti del 10\u201320%.",
      "Scegliere un design semplice: Vialetti rettilinei e rettangolari sono i pi\u00f9 economici. Curve e bordure decorative aggiungono il 15\u201325%.",
      "Conservare il sottofondo esistente: Se il vecchio vialetto ha un buon sottofondo, si pu\u00f2 posare il nuovo materiale sopra \u2014 risparmio di 5\u201315 EUR/m\u00b2.",
      "Considerare l'asfalto invece del calcestruzzo: L'asfalto costa circa la met\u00e0 e resiste bene al gelo. Con manutenzione regolare dura 15\u201320 anni.",
      "Usare la ghiaia per vialetti lunghi: Per vialetti oltre 30 m, ghiaia per il tratto principale e pavimentazione solo all'ingresso fa risparmiare migliaia di euro.",
      "Combinare con un vicino: Stesso impresa per due progetti pu\u00f2 ottenere uno sconto del 5\u201315%.",
    ],

    calculatorCtaHeading: "Stima il Costo del Tuo Vialetto",
    calculatorCtaText: "Usa i nostri calcolatori gratuiti per stimare la quantit\u00e0 esatta di materiale e il costo del tuo progetto.",
    calculatorLinks: [
      { label: "Calcolatore Platea in Calcestruzzo", href: "/calculators/foundation/concrete-slab-calculator", description: "Calcola metri cubi, sacchi e costo per un vialetto in calcestruzzo." },
      { label: "Calcolatore Ghiaia", href: "/calculators/foundation/gravel-calculator", description: "Stima tonnellate e metri cubi per un vialetto in ghiaia con fascia di prezzo." },
      { label: "Calcolatore Ghiaia per Vialetto", href: "/calculators/foundation/driveway-gravel-calculator", description: "Calcolatore specifico per ghiaia da vialetto per tipo e dimensione." },
    ],

    faqHeading: "Domande Frequenti",
    faqs: [
      {
        question: "Quanto costa un vialetto nuovo nel 2026?",
        answer:
          "Un vialetto nuovo costa 2.000 a 15.000 EUR nel 2026, con una media di 4.000\u201310.000 EUR per un vialetto doppio standard in calcestruzzo (50 m\u00b2). La ghiaia \u00e8 la pi\u00f9 economica a 400\u20131.250 EUR posata. L'asfalto costa 1.500\u20133.500 EUR. Il calcestruzzo costa 2.500\u20136.000 EUR. I masselli sono i pi\u00f9 cari a 3.000\u201310.000+ EUR.",
      },
      {
        question: "Qual \u00e8 il tipo di vialetto pi\u00f9 economico?",
        answer:
          "La ghiaia \u00e8 il materiale pi\u00f9 economico a 8\u201325 EUR/m\u00b2 in materiale, o 20\u201350 EUR/m\u00b2 posata. Un vialetto doppio standard in ghiaia costa 400\u20131.250 EUR posato, vs 2.500\u20136.000 EUR in calcestruzzo. La ghiaia \u00e8 anche l'opzione pi\u00f9 adatta al fai da te, risparmiando il 40\u201360%.",
      },
      {
        question: "Quanto costa un vialetto in calcestruzzo al metro quadro?",
        answer:
          "Un vialetto in calcestruzzo costa 50 a 120 EUR/m\u00b2 posato nel 2026. Il calcestruzzo liscio semplice costa 50\u201380 EUR/m\u00b2. Il calcestruzzo stampato costa 60\u2013150 EUR/m\u00b2. Un vialetto doppio di 50 m\u00b2 in calcestruzzo semplice costa 2.500\u20136.000 EUR posato.",
      },
      {
        question: "L'asfalto o il calcestruzzo \u00e8 pi\u00f9 economico per un vialetto?",
        answer:
          "L'asfalto \u00e8 pi\u00f9 economico inizialmente a 30\u201370 EUR/m\u00b2 vs 50\u2013120 EUR/m\u00b2 per il calcestruzzo. Tuttavia, l'asfalto richiede sigillatura ogni 2\u20133 anni e dura 15\u201320 anni vs 25\u201350 anni per il calcestruzzo. Nel lungo periodo, il costo totale \u00e8 spesso simile.",
      },
      {
        question: "Come calcolo quanto coster\u00e0 il mio vialetto?",
        answer:
          "Per stimare: (1) Misurate lunghezza e larghezza in metri per la superficie. (2) Moltiplicate per il costo al m\u00b2: ghiaia 8\u201325, asfalto 30\u201370, calcestruzzo 50\u2013120, masselli 60\u2013200 EUR. (3) Aggiungete 10\u201320% per preparazione terreno e imprevisti. Usate i nostri calcolatori gratuiti per stime precise.",
      },
      {
        question: "Quanto dura un vialetto per tipo di materiale?",
        answer:
          "La durata varia significativamente. La ghiaia dura 15\u201325 anni ma richiede rabbocco ogni 2\u20133 anni. L'asfalto dura 15\u201320 anni con sigillatura regolare. Il calcestruzzo dura 25\u201350 anni con manutenzione minima. I masselli durano 25\u201350+ anni con il vantaggio di poter sostituire singoli elementi. La pietra naturale pu\u00f2 durare 50+ anni.",
      },
    ],
  },
  flooringCost: {
    title: "Guida ai Costi della Pavimentazione",
    metaDescription: "La pavimentazione costa 20\u2013150 \u20ac/m\u00b2 posata. Guida completa ai prezzi per parquet, laminato, piastrelle, moquette e vinile con stime per stanza e consigli per risparmiare.",
    heroTitle: "Guida ai Costi della Pavimentazione",
    heroSubtitle: "Prezzi 2026",
    heroDescription: "Tutto sui costi della pavimentazione \u2014 materiali, posa, budget per stanza e strategie di risparmio.",
    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText: "Una pavimentazione nuova costa 20\u2013150 \u20ac/m\u00b2 posata. Il laminato \u00e8 il pi\u00f9 economico a 20\u201360 \u20ac/m\u00b2, seguito da moquette (25\u201380 \u20ac), vinile LVP (30\u201380 \u20ac), piastrelle (50\u2013150 \u20ac) e parquet (60\u2013150 \u20ac).",
    flooringTypesHeading: "Costi per Tipo di Materiale",
    flooringTypesIntro: "Prezzi al metro quadro posato per tipo di materiale.",
    flooringTypesColType: "Tipo di Pavimento",
    flooringTypesColCost: "Costo Posato (per m\u00b2)",
    flooringTypesColBestFor: "Ideale Per",
    flooringTypesRows: [
      { type: "Laminato", cost: "20 \u2013 60 \u20ac", bestFor: "Budget, fai-da-te, affitti" },
      { type: "Moquette", cost: "25 \u2013 80 \u20ac", bestFor: "Camere da letto, comfort" },
      { type: "Vinile LVP", cost: "30 \u2013 80 \u20ac", bestFor: "Cucine, bagni, zone di passaggio" },
      { type: "Piastrelle", cost: "50 \u2013 150 \u20ac", bestFor: "Bagni, cucine, ingressi" },
      { type: "Parquet prefinito", cost: "40 \u2013 120 \u20ac", bestFor: "Soggiorni, sale da pranzo" },
      { type: "Parquet massello", cost: "60 \u2013 150 \u20ac", bestFor: "Zone giorno, valore a lungo termine" },
      { type: "Pietra naturale", cost: "100 \u2013 250 \u20ac", bestFor: "Alta gamma" },
    ],
    costByRoomHeading: "Costo per Stanza",
    costByRoomIntro: "Costi totali tipici per tipo di stanza con materiali di fascia media.",
    costByRoomColRoom: "Stanza",
    costByRoomColTypical: "Costo Totale",
    costByRoomColNotes: "Note",
    costByRoomRows: [
      { room: "Bagno (5 m\u00b2)", typical: "400 \u2013 1.200 \u20ac", notes: "Piastrelle o vinile" },
      { room: "Camera (14 m\u00b2)", typical: "600 \u2013 1.800 \u20ac", notes: "Moquette o laminato" },
      { room: "Cucina (18 m\u00b2)", typical: "1.000 \u2013 3.500 \u20ac", notes: "Piastrelle o vinile" },
      { room: "Soggiorno (28 m\u00b2)", typical: "1.200 \u2013 4.500 \u20ac", notes: "Parquet o vinile" },
      { room: "Intera casa (140 m\u00b2)", typical: "5.000 \u2013 20.000 \u20ac", notes: "Mix di materiali" },
    ],
    installationCostsHeading: "Costi di Posa: Fai-da-te vs Professionista",
    installationCostsIntro: "La manodopera rappresenta il 40\u201360% del costo totale.",
    installationCostsText1: "La posa professionale costa 15\u201340 \u20ac/m\u00b2. Le piastrelle sono le pi\u00f9 care a 30\u201370 \u20ac/m\u00b2. La moquette \u00e8 la pi\u00f9 economica a 8\u201320 \u20ac/m\u00b2.",
    installationCostsText2: "Il fai-da-te fa risparmiare 50\u201370% sulla manodopera. Laminato e vinile click sono i pi\u00f9 facili da posare.",
    installationCostsText3: "Costi aggiuntivi: livellamento (15\u201340 \u20ac/m\u00b2), rimozione vecchio pavimento (8\u201320 \u20ac/m\u00b2), spostamento mobili (50\u2013200 \u20ac), profili di giunzione (5\u201315 \u20ac/pezzo).",
    howToCalculateHeading: "Come Calcolare il Pavimento Necessario",
    howToCalculateIntro: "Passi per stimare i materiali con precisione.",
    howToCalculateItems: [
      "Misura lunghezza e larghezza di ogni stanza in metri. Moltiplica per i m\u00b2.",
      "Stanze irregolari: dividi in rettangoli e somma le aree.",
      "Aggiungi 10% di scarto per posa dritta.",
      "15\u201320% per posa diagonale o a spina di pesce.",
      "Dividi il totale per la copertura per pacco.",
      "Arrotonda sempre per eccesso.",
    ],
    howToCalculateSummary: "Usa il nostro calcolatore gratuito per una stima istantanea con fattore di scarto automatico.",
    savingTipsHeading: "Come Risparmiare sulla Pavimentazione",
    savingTipsIntro: "Acquisti intelligenti possono ridurre i costi del 20\u201340%.",
    savingTipsItems: [
      "Acquista durante i saldi per 20\u201330% di sconto.",
      "Compra da grossisti specializzati.",
      "Posa il pavimento click da solo.",
      "Usa materiali diversi per stanze diverse.",
      "Ordina tutto insieme per sconti quantit\u00e0.",
      "Conserva gli avanzi per riparazioni future.",
    ],
    calculatorCtaHeading: "Calcola i Tuoi Materiali",
    calculatorCtaText: "Usa i nostri calcolatori gratuiti per stime istantanee.",
    calculatorLinks: [
      { label: "Calcolatore Pavimentazione", href: "/calculators/flooring/flooring-calculator/", description: "Calcolatore generale m\u00b2 e pacchi" },
      { label: "Calcolatore Moquette", href: "/calculators/flooring/carpet-calculator/", description: "M\u00b2, metri lineari e sottofondo" },
      { label: "Calcolatore Piastrelle", href: "/calculators/flooring/tile-calculator/", description: "Piastrelle, stucco e colla" },
      { label: "Calcolatore Laminato", href: "/calculators/flooring/laminate-calculator/", description: "Doghe, pacchi e sottopavimento" },
    ],
    faqHeading: "Domande Frequenti",
    faqs: [
      { question: "Qual \u00e8 il pavimento pi\u00f9 economico?", answer: "Il laminato a 20\u201360 \u20ac/m\u00b2 posato. Fai-da-te: 8\u201325 \u20ac/m\u00b2 di materiale." },
      { question: "Quanto costa pavimentare tutta la casa?", answer: "Una casa di 140 m\u00b2 costa 5.000\u201320.000 \u20ac. Mix tipico: 8.000\u201314.000 \u20ac." },
      { question: "Quale pavimento aumenta di pi\u00f9 il valore dell'immobile?", answer: "Il parquet porta il maggior valore di rivendita. Piastrelle e vinile in cucina/bagno sono ottimi investimenti." },
      { question: "Quanto dura ogni tipo di pavimento?", answer: "Parquet massello: 50\u2013100 anni. Pietra: 50+. Piastrelle: 30\u201350. Laminato/vinile: 15\u201325. Moquette: 5\u201315." },
      { question: "Devo rifare il pavimento prima di vendere?", answer: "La moquette consumata va sostituita. Il parquet danneggiato pu\u00f2 essere levigato. Vinile nuovo in cucina/bagno \u00e8 un buon investimento." },
      { question: "Qual \u00e8 il miglior pavimento per la cucina?", answer: "Vinile LVP e gres porcellanato. Impermeabili, durevoli e facili da pulire." },
    ],
  },

  fenceCost: {
    title: "Quanto Costa una Recinzione? Guida Prezzi 2026",
    metaDescription: "Una recinzione costa 30\u2013100 \u20ac al metro lineare posata nel 2026. Guida completa per recinzioni in legno, metallo, PVC e composito con costi di manodopera e consigli di risparmio.",
    heroTitle: "Quanto Costa una Recinzione?",
    heroSubtitle: "Guida Prezzi 2026",
    heroDescription: "Dettaglio completo dei costi delle recinzioni per materiale, stile e dimensione del progetto con prezzi, manodopera e consigli di risparmio.",
    quickAnswerHeading: "Risposta Rapida",
    quickAnswerText: "Una recinzione costa 30\u2013100 \u20ac al metro posata nel 2026. Recinzione in legno di 15 m: 450\u2013900 \u20ac materiali o 900\u20131.500 \u20ac posata.",
    fenceTypesHeading: "Costo per Materiale",
    fenceTypesIntro: "Il materiale \u00e8 il principale fattore di costo:",
    fenceTypesColType: "Materiale",
    fenceTypesColCost: "Costo/metro (posato)",
    fenceTypesColBestFor: "Ideale per",
    fenceTypesRows: [
      { type: "Legno trattato", cost: "30 \u2013 60 \u20ac", bestFor: "Recinzioni privacy, pi\u00f9 popolare. 15\u201320 anni." },
      { type: "Larice / Castagno", cost: "40 \u2013 80 \u20ac", bestFor: "Resistenza naturale. 15\u201325 anni." },
      { type: "Rete metallica", cost: "15 \u2013 35 \u20ac", bestFor: "Il pi\u00f9 economico. 15\u201320 anni." },
      { type: "Pannelli rigidi", cost: "30 \u2013 70 \u20ac", bestFor: "Durevoli, sicuri. 25\u201340 anni." },
      { type: "PVC / Composito", cost: "50 \u2013 120 \u20ac", bestFor: "Senza manutenzione. 25\u201350 anni." },
      { type: "Alluminio / Ferro", cost: "60 \u2013 150 \u20ac", bestFor: "Decorativo. 20\u201330 anni." },
    ],
    costByProjectHeading: "Costo per Dimensione",
    costByProjectIntro: "Costi tipici 2026 per recinzioni in legno:",
    costByProjectColProject: "Progetto",
    costByProjectColTypical: "Costo Tipico (posato)",
    costByProjectColNotes: "Note",
    costByProjectRows: [
      { project: "Giardino piccolo (10 m)", typical: "300 \u2013 700 \u20ac", notes: "Materiali: 150\u2013350 \u20ac." },
      { project: "Giardino medio (15 m)", typical: "450 \u2013 1.000 \u20ac", notes: "Dimensione pi\u00f9 comune." },
      { project: "Giardino grande (25 m)", typical: "750 \u2013 1.700 \u20ac", notes: "Sconto volume possibile." },
      { project: "Perimetro (40 m)", typical: "1.200 \u2013 2.800 \u20ac", notes: "Materiali: 600\u20131.400 \u20ac." },
      { project: "Con cancelletto", typical: "800 \u2013 2.000 \u20ac", notes: "Cancelletto: 100\u2013400 \u20ac." },
      { project: "Recinzione piscina", typical: "600 \u2013 2.500 \u20ac", notes: "Normativa UNI EN obbligatoria." },
    ],
    laborCostsHeading: "Costi di Posa",
    laborCostsIntro: "La posa rappresenta 40\u201360% del costo totale.",
    laborCostsText1: "Posa professionale: 15\u201330 \u20ac/metro. 15 m richiedono 1\u20132 giorni.",
    laborCostsText2: "Terreno roccioso e pendenze aumentano i costi del 10\u201325%.",
    laborCostsText3: "Richiedere almeno 3 preventivi. Bassa stagione risparmia 10\u201320%.",
    diyVsProHeading: "Fai da Te vs Professionista",
    diyVsProIntro: "Il fai da te risparmia 40\u201360%:",
    diyVsProItems: [
      "Materiali per 15 m: 225\u2013500 \u20ac.",
      "Professionista: 450\u20131.000 \u20ac totale.",
      "Attrezzi: trivella, livella, sega, trapano.",
      "1\u20132 weekend per 15 metri.",
      "Errori comuni: pali non a piombo.",
      "Pali giorno 1, pannelli giorno 2.",
    ],
    diyVsProSummary: "Il fai da te risparmia 200\u2013500 \u20ac. Per terreno difficile affidarsi a un professionista.",
    savingTipsHeading: "Consigli di Risparmio",
    savingTipsIntro: "Come ridurre i costi:",
    savingTipsItems: [
      "Legno trattato vs larice: 30\u201350% meno caro.",
      "Bassa stagione: 10\u201320% di risparmio.",
      "Dividere il costo con il vicino 50/50.",
      "Pannelli prefabbricati pi\u00f9 veloci da montare.",
      "Acquistare dal rivenditore di legname.",
      "Fare la pratica edilizia da soli.",
    ],
    calculatorCtaHeading: "Calcola i tuoi Materiali",
    calculatorCtaText: "Usa i nostri calcolatori gratuiti per stimare materiali e costo.",
    calculatorLinks: [
      { label: "Calcolatore Recinzione", href: "/calculators/outdoor/fence-calculator", description: "Pali, traverse e tavole." },
      { label: "Calcolatore Pali", href: "/calculators/outdoor/fence-post-calculator", description: "Pali e cemento." },
      { label: "Calcolatore Pannelli", href: "/calculators/outdoor/fence-panel-calculator", description: "Pannelli prefabbricati." },
      { label: "Calcolatore Staccionata", href: "/calculators/outdoor/picket-fence-calculator", description: "Stecche con spaziatura libera." },
    ],
    faqHeading: "Domande Frequenti",
    faqs: [
      { question: "Quanto costa 20 m di recinzione?", answer: "Legno: 600\u20131.400 \u20ac posato, 300\u2013700 \u20ac materiali." },
      { question: "Recinzione pi\u00f9 economica?", answer: "Rete metallica da 15 \u20ac/m. Privacy: legno trattato da 30 \u20ac/m posato." },
      { question: "Il fai da te \u00e8 pi\u00f9 economico?", answer: "S\u00ec, risparmio del 40\u201360%." },
      { question: "Quanto dura una recinzione in legno?", answer: "Trattato: 15\u201320 anni. Larice: 15\u201325 anni." },
      { question: "Serve un permesso?", answer: "Dipende dal comune. Verificare il regolamento edilizio locale." },
      { question: "Quale recinzione aumenta il valore?", answer: "Recinzione in legno ben mantenuta recupera 50\u201370% del costo." },
    ],
  },
};

export default guides;
