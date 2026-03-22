// Italiano (it) — Contenuti SEO per tutti i calcolatori
// Adattamenti italiani: NTC 2018, norme UNI, marchi italiani, prezzi in EUR €, sistema metrico

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
  "Aggiungere il 10–15 % in più all'ordine come fattore di sfrido per tagli ed errori.";

// ─── FONDAZIONI ─────────────────────────────────────────────────────────────

export const anchorBoltCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Misurare il perimetro totale della fondazione in metri.",
    "Inserire l'interasse standard dei tasselli (valore predefinito 1,80 m secondo NTC 2018).",
    "Specificare il diametro del tassello: M12 o M16.",
    "Fare clic su Calcola Materiali per ottenere il conteggio totale dei tasselli.",
  ],
  materialInfo:
    "I tasselli di ancoraggio (a J o a cuneo) sono barre filettate in acciaio annegate nel calcestruzzo della fondazione per fissare il dormiente in legno trattato. Le NTC 2018 (Norme Tecniche per le Costruzioni) e la norma UNI EN 1992 richiedono tasselli a un interasse massimo di 1,80 m e a non più di 30 cm da ogni angolo o giunto del dormiente. In Italia i diametri più diffusi sono M12 (12 mm) e M16 (16 mm): il M12 è il minimo per l'edilizia residenziale, mentre il M16 è raccomandato nelle zone sismiche 1 e 2 e nelle zone climatiche E e F soggette a forti escursioni termiche. I tasselli a J sono i più utilizzati perché semplici da posare nel calcestruzzo fresco; quelli a cuneo offrono maggiore resistenza all'estrazione e sono preferiti in zona sismica. I prezzi presso i rivenditori edili italiani — Bricoman, Leroy Merlin, Würth o ferramenta specializzate — variano da 1,50 € a 4,50 € per tassello a seconda del diametro e del trattamento superficiale (zincato a caldo o inox A2). È essenziale che i tasselli siano conformi alla UNI EN ISO 898-1 classe 4.6 o superiore per garantire la resistenza a trazione richiesta dal progetto strutturale. Nelle zone sismiche (zona 1-4 secondo OPCM 3274) il progettista può richiedere ancoraggi chimici con resina epossidica certificata ETA, come quelli Hilti HIT-RE 500 V4 o Fischer FIS EM Plus.",
  nextSteps: [
    { label: "Calcolatore Guarnizione di Base", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Calcolatore Dormiente in Legno Trattato", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calcolatore Calcestruzzo", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Posare i tasselli prima che il calcestruzzo abbia completato la presa, mentre è ancora lavorabile.",
    "Utilizzare una dima o sagoma per mantenere interasse e allineamento costanti.",
    "Assicurarsi che i tasselli penetrino almeno 18 cm nel calcestruzzo.",
    "Posizionare un tassello entro 30 cm da ogni estremità di ciascun segmento del dormiente.",
    "Verificare la verticalità di ogni tassello con una livella a bolla prima dell'indurimento.",
  ],
  commonMistakes: [
    "Omettere tasselli ai giunti del dormiente — posizionarne sempre uno entro 30 cm da ogni estremità.",
    "Utilizzare un diametro errato — M12 è il minimo standard per l'edilizia residenziale.",
    "Non verificare la verticalità del tassello prima dell'indurimento del calcestruzzo.",
    "Dimenticare di applicare il trattamento anticorrosione nelle zone costiere o ad alta umidità.",
    "Non rispettare la profondità minima di ancoraggio indicata dal progettista strutturale.",
  ],
  faqs: [
    { question: "Quale diametro di tassello richiedono le NTC 2018?", answer: "Le NTC 2018 richiedono un tassello minimo M12 annegato almeno 18 cm nel calcestruzzo, con interasse massimo di 1,80 m. In zona sismica 1 e 2 il progettista può richiedere M16 con rondella 50×50 mm." },
    { question: "Servono tasselli a ogni angolo?", answer: "Sì. Posizionare un tassello entro 30 cm da ogni estremità di ciascun segmento del dormiente e a ogni angolo della fondazione." },
    { question: "Si possono aggiungere tasselli dopo l'indurimento del calcestruzzo?", answer: "Sì, utilizzando ancoraggi chimici a resina (ad esempio Hilti HIT-RE 500 V4 o Fischer FIS EM Plus). Si fora il calcestruzzo indurito e si incolla il tassello con resina epossidica strutturale, ottenendo una resistenza all'estrazione paragonabile ai tasselli annegati." },
    { question: "Quanti tasselli servono per metro lineare di fondazione?", answer: "Con interasse standard di 1,80 m servono circa 0,56 tasselli per metro lineare. Tuttavia angoli, intersezioni e giunti richiedono tasselli aggiuntivi: nella pratica prevedere 0,7–0,9 tasselli al metro." },
    { question: "Qual è la differenza tra tassello a J e tassello a cuneo?", answer: "Il tassello a J ha un'estremità a uncino che fa presa nel calcestruzzo ed è il più comune per l'edilizia residenziale. Il tassello a cuneo (o a L) offre maggiore resistenza all'estrazione ed è preferito in zone sismiche o ventose." },
    { question: "Quali tasselli usare in zona sismica?", answer: "Nelle zone sismiche 1 e 2, utilizzare tasselli M16 con rondella quadra 50×50 mm e richiedere la verifica al progettista strutturale. Per i dettagli fare riferimento alle NTC 2018 cap. 7 e alla circolare applicativa n. 7/2019." },
  ],
};

export const sillSealCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Misurare il perimetro totale della fondazione in metri lineari.",
    "Inserire la copertura per rotolo (la maggior parte dei rotoli copre 15 m).",
    "Selezionare la larghezza della guarnizione (9, 14 o 20 cm).",
    "Fare clic su Calcola Materiali per ottenere il numero di rotoli necessari.",
  ],
  materialInfo:
    "La guarnizione di base (sill seal) è una striscia di schiuma polietilenica espansa posata tra la fondazione in calcestruzzo e il dormiente in legno trattato. La sua funzione principale è impedire l'infiltrazione d'aria, la risalita capillare dell'umidità e l'ingresso di insetti. È disponibile in rotoli di diverse larghezze — le più comuni sono 9 cm, 14 cm e 20 cm, corrispondenti alle sezioni standard del legname. Lo spessore standard è 6 mm, ma esiste anche la versione da 12 mm per superfici di fondazione irregolari. In Italia la guarnizione si trova presso Bricoman, Leroy Merlin, Würth e rivenditori edili specializzati, con prezzi da 5 € a 18 € per rotolo da 15 m. È un materiale a basso costo che offre significativi risparmi energetici a lungo termine eliminando le infiltrazioni d'aria alla base della parete. Il D.Lgs. 192/2005 (recepimento della Direttiva EPBD) e i Criteri Ambientali Minimi (CAM) pongono crescente enfasi sulla tenuta all'aria degli edifici, rendendo la guarnizione di base un componente essenziale per raggiungere i requisiti prestazionali delle classi energetiche A e superiori. Marchi come Knauf, Kerakoll e Mapei offrono soluzioni certificate per la tenuta all'aria della giunzione fondazione-parete.",
  nextSteps: [
    { label: "Calcolatore Dormiente in Legno Trattato", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calcolatore Tasselli di Ancoraggio", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Calcolatore Travetto Perimetrale", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Srotolare la guarnizione lungo la fondazione appena prima di posare i dormienti.",
    "Sovrapporre i giunti di almeno 15 cm.",
    "Utilizzare una guarnizione compatibile con il legno trattato in autoclave — alcune schiume si degradano a contatto con i sali di trattamento.",
    "Verificare che la superficie del calcestruzzo sia pulita e asciutta prima della posa.",
    "Sigillare i punti critici (angoli, passaggi impiantistici) con nastro butilico o schiuma poliuretanica.",
  ],
  commonMistakes: [
    "Dimenticare di posare la guarnizione — è un requisito per la tenuta all'aria dell'involucro.",
    "Non sovrapporre i giunti, lasciando varchi per l'infiltrazione d'aria.",
    "Utilizzare una larghezza non corrispondente alla sezione del dormiente.",
    "Posare la guarnizione su calcestruzzo bagnato o sporco, compromettendo l'aderenza.",
    "Omettere la guarnizione sulle pareti interne portanti poggianti sulla platea.",
  ],
  faqs: [
    { question: "La guarnizione di base è obbligatoria per legge?", answer: "Non è nominata esplicitamente nelle NTC 2018, ma il D.Lgs. 192/2005 e i CAM richiedono una costruzione a tenuta d'aria. La guarnizione è il metodo standard per ottenere un giunto ermetico tra fondazione e dormiente e gli ispettori ASL/ARPA la considerano prassi consolidata." },
    { question: "Quale larghezza di guarnizione serve?", answer: "Far corrispondere la larghezza della guarnizione a quella del dormiente. Per dormienti da 10×5 cm usare guarnizione da 10 cm; per dormienti da 14×5 cm usare guarnizione da 14 cm. La schiuma si comprime quando il dormiente viene bullonato." },
    { question: "Si può usare una guaina bituminosa al posto della guarnizione?", answer: "Una guaina bituminosa (tipo Mapei Mapelastic o Kerakoll Aquastop) impedisce l'umidità ma non offre le stesse proprietà di tenuta all'aria della schiuma. La prassi migliore è usare entrambe: guaina sotto e guarnizione sopra per protezione da umidità e da infiltrazioni d'aria." },
    { question: "Quanto costa la guarnizione di base in Italia?", answer: "La guarnizione costa da 5 € a 18 € per rotolo da 15 m. Per una casa con perimetro di 40 m servono 3 rotoli — circa 15–55 € in totale. È uno dei materiali edili più economici con il più alto ritorno sull'investimento." },
    { question: "Serve la guarnizione anche sulle pareti interne?", answer: "La guarnizione è utilizzata principalmente sulle pareti esterne dove il giunto calcestruzzo-legno è più esposto a umidità e infiltrazioni d'aria. I dormienti delle tramezze interne su platea generalmente non la richiedono, salvo indicazioni del progettista." },
    { question: "Dove si acquista la guarnizione di base in Italia?", answer: "La guarnizione è disponibile presso Bricoman, Leroy Merlin, Würth, Obi e rivenditori edili specializzati. Per grandi cantieri, acquistare in blocco dal rivenditore edile garantisce il miglior prezzo. Marchi di riferimento: Knauf, Kerakoll, Rothoblaas." },
  ],
};

export const sillPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Misurare il perimetro totale della fondazione in metri.",
    "Selezionare la sezione del legname (10×5 cm o 14×5 cm sono standard).",
    "Inserire la lunghezza standard delle tavole (tipicamente 2,40 m, 3,00 m, 3,60 m o 4,80 m).",
    "Fare clic su Calcola Materiali per ottenere il conteggio tavole e i metri lineari totali.",
  ],
  materialInfo:
    "Il dormiente (o traversa di base) è l'elemento orizzontale in legno trattato in autoclave posato direttamente sulla fondazione in calcestruzzo e fissato con tasselli di ancoraggio. Funge da base per l'intera struttura della parete e deve resistere a umidità, attacco di insetti xilofagi e marciume dovuto al contatto con il calcestruzzo. In Italia i dormienti sono tipicamente in abete o larice classificato C16 o C24 secondo UNI EN 338, trattati in autoclave con classe d'uso 2 o classe d'uso 4 a seconda dell'esposizione. Le sezioni standard sono 10×5 cm per pareti con montanti da 10 cm e 14×5 cm per pareti con montanti da 14 cm. Il legname è fornito in lunghezze di 2,40 m, 3,00 m, 3,60 m e 4,80 m. I prezzi presso i rivenditori edili come Bricoman, Leroy Merlin o segherie locali variano da 4 € a 14 € al metro a seconda della sezione e del livello di trattamento. Tutti i dormienti a contatto con il calcestruzzo devono essere conformi alla UNI EN 335 per il trattamento preservante. Ai giunti, le giunzioni testa a testa devono cadere sopra un appoggio solido ed entro 30 cm da un tassello su ciascun lato del giunto. Nelle zone sismiche è fondamentale che il dormiente sia saldamente ancorato alla fondazione per garantire il trasferimento delle forze orizzontali.",
  nextSteps: [
    { label: "Calcolatore Tasselli di Ancoraggio", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Calcolatore Guarnizione di Base", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Posare la guarnizione in schiuma o la guaina bituminosa sul calcestruzzo prima di posizionare il dormiente.",
    "Pre-forare i fori per i tasselli nel dormiente utilizzando i tasselli nella fondazione come guida.",
    "Verificare che il dormiente sia in bolla su tutta la sua lunghezza — compensare con spessori se necessario.",
    "Assicurarsi che tutti i giunti cadano su un appoggio solido e siano fissati con tasselli su entrambi i lati.",
    "Applicare prodotto preservante sulle sezioni tagliate in opera per mantenere la protezione.",
  ],
  commonMistakes: [
    "Utilizzare legno non trattato per i dormienti — marcirà in pochi anni a contatto con il calcestruzzo.",
    "Non verificare il livello della fondazione prima di posare i dormienti — questo errore si propaga in tutta la struttura.",
    "Posizionare i giunti lontano dai tasselli, lasciando sezioni non fissate.",
    "Non applicare il trattamento preservante sulle teste tagliate in cantiere.",
    "Omettere la guaina impermeabilizzante tra calcestruzzo e dormiente.",
  ],
  faqs: [
    { question: "Quale livello di trattamento serve per i dormienti?", answer: "I dormienti a contatto con il calcestruzzo richiedono trattamento in autoclave almeno in classe d'uso 2 (UC2) secondo UNI EN 335. Dove c'è rischio di bagnatura persistente, si raccomanda la classe d'uso 4 (UC4). Verificare sempre il certificato di trattamento del fornitore." },
    { question: "Si può usare legno non trattato per i dormienti?", answer: "No. Il legno non trattato a contatto con il calcestruzzo assorbe umidità e marcisce rapidamente. Le NTC 2018 e la UNI EN 335 richiedono legno durevole o trattato per ogni elemento a contatto con muratura o calcestruzzo." },
    { question: "Quale sezione serve per il dormiente?", answer: "Il dormiente deve corrispondere alla larghezza dei montanti della parete. Per pareti con montanti da 10 cm usare dormienti 10×5 cm; per pareti con montanti da 14 cm usare dormienti 14×5 cm." },
    { question: "Quanto costano i dormienti in legno trattato?", answer: "Il legname trattato in autoclave C16 per dormienti costa circa 4–9 € al metro per sezioni 10×5 cm e 7–14 € al metro per sezioni 14×5 cm presso rivenditori italiani. L'acquisto in pacchi completi offre il prezzo migliore." },
    { question: "Serve una guaina sotto il dormiente?", answer: "Sì. Una guaina impermeabilizzante (tipo Mapei Mapelastic o guaina bituminosa) va posata tra il calcestruzzo e il dormiente per impedire la migrazione dell'umidità. La prassi migliore prevede guaina sotto e guarnizione in schiuma sopra." },
    { question: "Come si giuntano i dormienti?", answer: "Le giunzioni testa a testa sono standard. Ogni giunto deve cadere sopra un punto di appoggio solido e avere un tassello entro 30 cm su ciascun lato. Sfalsare i giunti dei dormienti in modo che non coincidano con le posizioni dei montanti o dei giunti del corrente superiore." },
  ],
};

export const concreteCalculator: CalculatorSEOContent = {
  disclaimer: "I volumi di calcestruzzo sono stime. Ordinare il 5–10 % in più per sfrido, sovrascavo e irregolarità dei casseri.",
  howToUse: [
    "Inserire lunghezza, larghezza e profondità del getto in metri.",
    "Selezionare la forma: platea, plinto o pilastro.",
    "Specificare la classe di resistenza desiderata (C25/30 standard per fondazioni).",
    "Fare clic su Calcola Materiali per ottenere i metri cubi e il conteggio dei sacchi.",
  ],
  materialInfo:
    "Il calcestruzzo è il materiale da costruzione più utilizzato in Italia, composto da cemento, aggregati, sabbia e acqua miscelati per ottenere una resistenza a compressione specificata. Per le fondazioni residenziali la classe standard è C25/30 secondo UNI EN 206, con resistenza a compressione a 28 giorni di 25 N/mm². Il calcestruzzo preconfezionato viene consegnato con autobetoniera ed è l'opzione più pratica per getti superiori a 1 m³. Per lavori più piccoli, il calcestruzzo in sacchi (Italcementi, Buzzi Unicem, Mapei Mapegrout o Weber) è disponibile in sacchi da 25 kg e 30 kg presso Bricoman, Leroy Merlin, Obi e rivenditori edili. Un sacco da 25 kg di calcestruzzo generico produce circa 0,012 m³ una volta miscelato. Il calcestruzzo preconfezionato in Italia costa tipicamente 80–140 € al m³ franco cantiere, con costi minimi d'ordine di circa 250 € per carichi ridotti. Il calcestruzzo in sacchi è più costoso per m³ ma evita i costi minimi d'ordine ed è adatto per pali, piccoli plinti e riparazioni. Per fondazioni strutturali utilizzare sempre calcestruzzo conforme alla UNI EN 206 e alla UNI 11104. In condizioni di gelo, specificare calcestruzzo aerato o con additivi antigelo.",
  nextSteps: [
    { label: "Calcolatore Platea in Calcestruzzo", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calcolatore Plinti di Fondazione", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calcolatore Pilastri in Calcestruzzo", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Assicurarsi che i casseri siano solidi, in bolla e controventati prima del getto.",
    "Compattare il calcestruzzo con vibratore ad ago o barra di costipamento per eliminare le sacche d'aria.",
    "Stagionare il calcestruzzo per almeno 7 giorni mantenendolo umido — coprire con telo in polietilene o teli di juta umidi.",
    "Non gettare calcestruzzo quando la temperatura scende sotto i 2 °C senza additivi antigelo.",
    "Nelle zone sismiche (zona 1-3) verificare la classe di esposizione e il copriferro minimo indicati dal progettista.",
  ],
  commonMistakes: [
    "Ordinare troppo poco calcestruzzo — aggiungere sempre il 5–10 % per sfrido e irregolarità dei casseri.",
    "Aggiungere troppa acqua all'impasto — questo indebolisce significativamente il calcestruzzo.",
    "Non compattare adeguatamente il calcestruzzo, lasciando vuoti d'aria che riducono la resistenza.",
    "Non rispettare i tempi di stagionatura, soprattutto nelle giornate calde estive.",
    "Utilizzare una classe di esposizione inadeguata per l'ambiente (marino, aggressivo, ecc.).",
  ],
  faqs: [
    { question: "Quale classe di calcestruzzo serve per le fondazioni?", answer: "Per fondazioni a plinto e a trave rovescia standard si utilizza calcestruzzo C25/30 secondo UNI EN 206. Per platee di garage e vialetti è sufficiente il C20/25. Per strutture in zona sismica il progettista può richiedere C28/35 o superiore. Verificare sempre con l'ingegnere strutturista." },
    { question: "Quanti sacchi di calcestruzzo fanno 1 metro cubo?", answer: "Servono circa 80-85 sacchi da 25 kg di calcestruzzo generico per fare 1 m³. Il costo risulta di circa 400–550 € al m³, sensibilmente più alto del preconfezionato a 80–140 € al m³. Il calcestruzzo in sacchi è pratico solo per lavori sotto 0,5 m³." },
    { question: "Quando usare preconfezionato e quando in sacchi?", answer: "Usare il preconfezionato per qualsiasi getto superiore a 1 m³ — è molto più economico e uniforme. Usare i sacchi per pali di recinzione, piccoli plinti, riparazioni e situazioni in cui l'autobetoniera non può raggiungere il punto di getto." },
    { question: "Quanto costa il calcestruzzo preconfezionato in Italia?", answer: "Il preconfezionato costa tipicamente 80–140 € al m³ franco cantiere, a seconda della classe e della regione. La maggior parte dei fornitori ha un ordine minimo (di solito 3-5 m³) o applica un supplemento di 20–40 € al m³ per carichi ridotti. Il pompaggio aggiunge 300–700 € se necessario." },
    { question: "Si può gettare calcestruzzo in inverno?", answer: "Sì, ma con precauzioni. Non gettare quando la temperatura scende sotto i 2 °C. Utilizzare additivi acceleranti o antigelo, isolare i casseri con coperte termiche e proteggere il getto dal gelo per almeno 48 ore. In inverno la stagionatura è molto più lenta." },
    { question: "Qual è la profondità minima per le fondazioni in Italia?", answer: "Le NTC 2018 e il D.M. 17/01/2018 richiedono che le fondazioni raggiungano il terreno portante al di sotto dello strato vegetale, con un minimo pratico di 80 cm dal piano campagna nelle zone non sismiche. In zona sismica 1 e 2 o in terreni argillosi le profondità possono superare 1,5 m. Il geologo e l'ingegnere strutturista definiranno la profondità in base alla relazione geotecnica." },
  ],
};

export const concreteSlabCalculator: CalculatorSEOContent = {
  disclaimer: "Ordinare il 5–10 % di calcestruzzo in più per compensare le variazioni di livello del sottofondo e dei casseri.",
  howToUse: [
    "Inserire lunghezza e larghezza della platea in metri.",
    "Inserire lo spessore in centimetri (10 cm standard per garage, 15 cm per carrabili).",
    "Selezionare la classe di calcestruzzo desiderata.",
    "Fare clic su Calcola Materiali per ottenere il volume in metri cubi e il conteggio sacchi.",
  ],
  materialInfo:
    "Le platee in calcestruzzo sono utilizzate per pavimentazioni di garage, vialetti carrabili, patii, basamenti di capannoni e sodalizi a piano terra nell'edilizia italiana. Una platea standard per garage ha spessore 10 cm in calcestruzzo C25/30 su sottofondo compattato in misto stabilizzato. I vialetti soggetti a traffico veicolare devono avere almeno 15 cm di spessore. Il sottofondo è tipicamente di 15–20 cm di misto stabilizzato o ghiaia compattata, con un telo in polietilene (tipo barriera vapore Mapei o Kerakoll) posato sopra prima del getto. L'armatura è generalmente una rete elettrosaldata Ø6 maglia 20×20 cm o Ø8 maglia 15×15 cm posata su distanziatori a metà spessore della platea. Per i sodalizi a piano terra delle abitazioni, pannelli isolanti (tipicamente 8–10 cm di PIR tipo Stiferite o polistirene estruso Styrodur) vengono posati sotto la platea per soddisfare i requisiti termici del D.Lgs. 192/2005 e del DM 26/06/2015. Le platee devono prevedere giunti di dilatazione a intervalli di circa 4–6 m per controllare la fessurazione. Il preconfezionato costa 80–140 € al m³: una tipica platea garage da 20 m² con spessore 10 cm richiede circa 2 m³.",
  nextSteps: [
    { label: "Calcolatore Calcestruzzo", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calcolatore Plinti di Fondazione", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calcolatore Scale in Calcestruzzo", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Compattare il sottofondo in misto stabilizzato a strati con piastra vibrante o rullo compressore.",
    "Posare il telo barriera vapore sul sottofondo con sovrapposizioni di 30 cm ai giunti.",
    "Posizionare la rete elettrosaldata su distanziatori a metà spessore della platea.",
    "Utilizzare una staggia o guida in alluminio per livellare la superficie del calcestruzzo.",
    "Realizzare i giunti di contrazione entro 24 ore dal getto per controllare la fessurazione.",
  ],
  commonMistakes: [
    "Saltare il sottofondo — gettare direttamente sul terreno provoca cedimenti e fessurazioni.",
    "Spessore troppo sottile per il carico previsto — 10 cm minimo per uso pedonale, 15 cm per veicoli.",
    "Non prevedere giunti di dilatazione, causando fessurazioni incontrollate.",
    "Non compattare adeguatamente il sottofondo in misto stabilizzato.",
    "Omettere la barriera vapore, permettendo la risalita di umidità dal terreno.",
  ],
  faqs: [
    { question: "Quale spessore per una platea garage?", answer: "Una platea garage standard deve avere almeno 10 cm di spessore in calcestruzzo C25/30 su 15 cm di sottofondo compattato in misto stabilizzato. Per veicoli pesanti aumentare a 15 cm con rete Ø8 maglia 15×15 cm." },
    { question: "Serve la rete elettrosaldata nella platea?", answer: "La rete elettrosaldata è fortemente raccomandata per tutte le platee. Controlla la fessurazione e distribuisce i carichi. Il Direttore Lavori la richiede normalmente per garage e pavimentazioni a piano terra." },
    { question: "Quanto costa una platea garage in Italia?", answer: "Una tipica platea per garage singolo (3×6 m × 10 cm) richiede circa 1,8 m³ di calcestruzzo a 80–140 €/m³ (145–250 € solo per il calcestruzzo). Aggiungere 200–400 € per sottofondo, telo, rete e casseri. Totale fai-da-te: 400–700 €. Con impresa: 1.200–2.500 €." },
    { question: "Serve l'isolamento sotto la platea?", answer: "Per locali abitabili (ampliamenti, ristrutturazioni), il D.Lgs. 192/2005 e il DM 26/06/2015 richiedono l'isolamento del solaio a terra. Tipicamente 8–10 cm di PIR (Stiferite) o XPS (Styrodur) vengono posati sotto la platea. Per garage e depositi non riscaldati l'isolamento generalmente non è richiesto." },
    { question: "Quale sottofondo serve sotto la platea?", answer: "Utilizzare 15–20 cm di misto stabilizzato compattato (o ghiaia vagliata). Compattare a strati con piastra vibrante. Il sottofondo fornisce drenaggio, previene il sollevamento da gelo e distribuisce uniformemente i carichi al terreno sottostante." },
    { question: "Si può gettare una platea da soli?", answer: "Sì, per platee piccole (fino a 3–4 m³). Servono casseri, piastra vibrante, vibratore per calcestruzzo o staggia e abbastanza aiutanti per posare e livellare il calcestruzzo prima che inizi la presa. Per platee più grandi affidarsi a un'impresa — il calcestruzzo non aspetta." },
  ],
};

export const concreteFootingCalculator: CalculatorSEOContent = {
  disclaimer: "Le dimensioni dei plinti devono essere conformi alle NTC 2018. Far sempre approvare il progetto delle fondazioni dal Direttore Lavori e dal Genio Civile prima di iniziare i lavori.",
  howToUse: [
    "Inserire lunghezza, larghezza e profondità del plinto in metri.",
    "Per plinti continui inserire la lunghezza totale dello sviluppo.",
    "Specificare il numero di plinti se sono isolati.",
    "Fare clic su Calcola Materiali per ottenere i metri cubi e il conteggio sacchi.",
  ],
  materialInfo:
    "I plinti di fondazione distribuiscono il carico dell'edificio al terreno sottostante e sono un elemento strutturale critico disciplinato dalle NTC 2018 (D.M. 17/01/2018). In Italia i due tipi principali sono i plinti continui (travi rovesce sotto le murature) e i plinti isolati (basi singole per pilastri). I plinti continui per una tipica abitazione bifamiliare hanno larghezza di 60 cm e altezza minima di 30 cm, anche se le dimensioni effettive dipendono dalla portanza del terreno e dai carichi dell'edificio. I plinti a trave rovescia — in cui la trincea viene riempita di calcestruzzo fino a circa 15 cm dal piano campagna — sono sempre più diffusi perché più rapidi da costruire e forniscono una fondazione più uniforme. La classe di calcestruzzo per i plinti è tipicamente C25/30 secondo UNI EN 206, con il preconfezionato come opzione più pratica per i volumi coinvolti. Una tipica villetta bifamiliare richiede 8–18 m³ di calcestruzzo per le fondazioni. Nei terreni argillosi e nelle zone sismiche (zona 1-4 secondo classificazione OPCM 3274), le NTC 2018 al capitolo 6.4 e la relazione geotecnica del geologo forniscono le indicazioni sulle profondità di fondazione in base alla tipologia di terreno, alla presenza di falde e alla sismicità.",
  nextSteps: [
    { label: "Calcolatore Calcestruzzo", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calcolatore Platea in Calcestruzzo", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calcolatore Tasselli di Ancoraggio", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Scavare fino al terreno sodo e indisturbato — non costruire mai su terreno di riporto senza consulenza geotecnica.",
    "Mantenere le trincee pulite e prive di terreno sciolto prima del getto.",
    "Gettare il calcestruzzo il prima possibile dopo lo scavo per evitare che le pareti della trincea si asciughino o franino.",
    "Nei terreni argillosi vicino ad alberi utilizzare materiale comprimibile contro le pareti della trincea per compensare il rigonfiamento.",
    "In zona sismica verificare con il progettista che le armature e i collegamenti siano conformi alle NTC 2018 cap. 7.",
  ],
  commonMistakes: [
    "Non scavare abbastanza in profondità — le NTC 2018 richiedono di raggiungere il terreno portante, con un minimo pratico di 80 cm.",
    "Ignorare l'effetto degli alberi sui terreni argillosi — la relazione geotecnica specifica le profondità maggiorate in prossimità di alberi.",
    "Gettare i plinti su terreno saturo d'acqua o gelato, compromettendo l'aderenza calcestruzzo-terreno.",
    "Non predisporre i ferri d'attesa per i pilastri o le murature portanti.",
    "Omettere il magrone di pulizia (5–10 cm di calcestruzzo magro) sul fondo dello scavo.",
  ],
  faqs: [
    { question: "A quale profondità devono arrivare le fondazioni in Italia?", answer: "Le NTC 2018 richiedono che le fondazioni raggiungano il terreno portante sotto lo strato vegetale, con un minimo pratico di 80 cm dal piano campagna. In prossimità di alberi in terreno argilloso o in zona sismica 1-2 le profondità possono superare 1,5 m. Il geologo e il progettista strutturale definiranno la profondità in base alla relazione geotecnica." },
    { question: "Qual è la differenza tra plinti continui e a trave rovescia?", answer: "I plinti continui hanno un getto di calcestruzzo relativamente sottile (circa 30 cm) in una trincea più larga, con muratura in blocchi costruita sopra fino al piano campagna. I plinti a trave rovescia riempiono l'intera trincea di calcestruzzo fino al livello del terreno, richiedendo meno muratura e manodopera ma più calcestruzzo." },
    { question: "Quale larghezza devono avere i plinti?", answer: "Per una tipica abitazione a due piani su terreno solido (portanza 100+ kN/m²), i plinti continui hanno tipicamente larghezza 60 cm. Su terreni più deboli possono essere necessari 75 cm o più. L'ingegnere strutturista o il geologo specificheranno la larghezza." },
    { question: "Serve l'approvazione del Genio Civile per le fondazioni?", answer: "Sì. In Italia i lavori strutturali richiedono il deposito del progetto al Genio Civile (o ex Ufficio del Territorio in base alla regione) e la direzione lavori di un ingegnere o architetto abilitato. Le fondazioni sono soggette a collaudo statico." },
    { question: "Quanto calcestruzzo serve per le fondazioni di una casa?", answer: "Una tipica villetta bifamiliare con fondazioni a trave rovescia richiede 8–18 m³ di calcestruzzo, con un costo di 650–2.500 € per il solo calcestruzzo. Il volume esatto dipende da profondità, larghezza e perimetro dell'edificio." },
    { question: "Si possono usare fondazioni a platea al posto dei plinti?", answer: "Sì. Le fondazioni a platea sono una soletta armata che copre l'intera impronta dell'edificio. Si usano su terreni scarsi, riporti o dove l'attività estrattiva ha interessato il sito. Le platee sono più costose ma distribuiscono i carichi in modo più uniforme. Un ingegnere strutturista deve progettare la platea." },
  ],
};

export const concreteColumnCalculator: CalculatorSEOContent = {
  disclaimer: "Le dimensioni dei pilastri devono essere verificate da un ingegnere strutturista per applicazioni portanti.",
  howToUse: [
    "Inserire il diametro del pilastro in centimetri (20, 25 o 30 cm sono standard).",
    "Inserire l'altezza o la profondità del pilastro in metri.",
    "Inserire il numero di pilastri.",
    "Fare clic su Calcola Materiali per ottenere i metri cubi totali e il conteggio sacchi.",
  ],
  materialInfo:
    "I pilastri in calcestruzzo (plinti cilindrici) sono fondazioni cilindriche in calcestruzzo utilizzate per sostenere pali, strutture di terrazze, pergolati e strutture leggere. Si realizzano con casseri cilindrici in cartone (tipo Sonotube, disponibili presso Bricoman o rivenditori edili specializzati) posati in fori scavati e riempiti di calcestruzzo. I diametri standard in Italia sono 20 cm, 25 cm e 30 cm, con il diametro di 25 cm più comune per pali di terrazze e pergolati residenziali. Ogni pilastro da 25 cm di diametro × 90 cm di profondità richiede circa 0,044 m³ di calcestruzzo, equivalenti a circa 4 sacchi da 25 kg di calcestruzzo generico. I casseri cilindrici costano 5–18 € ciascuno presso i rivenditori edili. La profondità del plinto deve estendersi sotto il livello di gelo e nel terreno sodo — tipicamente un minimo di 60 cm in Italia, anche se 90 cm è la prassi comune nelle regioni settentrionali (zone climatiche E e F). Per pilastri strutturali utilizzare calcestruzzo C25/30 con una scarpa di ancoraggio o base in acciaio zincato annegata nella sommità, anziché inserire il palo in legno direttamente nel calcestruzzo.",
  nextSteps: [
    { label: "Calcolatore Calcestruzzo", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calcolatore Plinti per Terrazza", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Calcolatore Plinti di Fondazione", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Tagliare il cassero cilindrico all'altezza corretta prima di posarlo nel foro.",
    "Usare una livella a bolla per assicurarsi che il cassero sia in piombo prima di riempirlo di calcestruzzo.",
    "Annegare le basi per pali o i tasselli a J nel calcestruzzo fresco sulla sommità di ogni pilastro.",
    "Allargare leggermente la base dello scavo rispetto al cassero per migliorare la portanza.",
    "Verificare che tutte le sommità dei pilastri siano allo stesso livello prima dell'indurimento del calcestruzzo.",
  ],
  commonMistakes: [
    "Non scavare abbastanza in profondità — i pilastri devono raggiungere terreno sodo e indisturbato sotto il livello di gelo.",
    "Inserire pali in legno direttamente nel calcestruzzo — questo intrappola l'umidità e causa il marciume; usare una base metallica.",
    "Non verificare che le sommità dei pilastri siano tutte allo stesso livello prima dell'indurimento.",
    "Non compattare il calcestruzzo all'interno del cassero, lasciando vuoti nella parte inferiore.",
    "Utilizzare calcestruzzo a presa rapida (tipo Postfix) per applicazioni strutturali dove serve C25/30.",
  ],
  faqs: [
    { question: "A quale profondità devono arrivare i pilastri in Italia?", answer: "I pilastri devono estendersi almeno 60 cm sotto il piano campagna nel terreno sodo e indisturbato. Per terrazze e strutture in prossimità di alberi in terreno argilloso, 90 cm o più possono essere necessari. Verificare con il tecnico comunale per il sito specifico." },
    { question: "Quale diametro di cassero serve?", answer: "Per pali residenziali standard e terrazze il diametro di 25 cm è il più comune. Usare 30 cm per carichi pesanti o pali più grandi. 20 cm è adeguato per strutture leggere come pergolati e piccoli depositi." },
    { question: "Quanti sacchi di calcestruzzo per pilastro?", answer: "Un pilastro da 25 cm di diametro × 90 cm di profondità richiede circa 0,044 m³ di calcestruzzo, equivalenti a circa 4 sacchi da 25 kg. Un pilastro da 30 cm × 90 cm richiede circa 0,064 m³, ovvero 5–6 sacchi." },
    { question: "Si può usare calcestruzzo a presa rapida per i pilastri?", answer: "Il calcestruzzo a presa rapida (tipo Postfix) può essere usato per pali di recinzione e strutture leggere. Per pilastri strutturali di terrazze o pergolati utilizzare calcestruzzo standard C25/30 per maggiore resistenza e durabilità." },
    { question: "Serve l'armatura nei pilastri in calcestruzzo?", answer: "Per pilastri standard di terrazze residenziali l'armatura generalmente non è necessaria. Per pilastri più alti o soggetti a carichi significativi, l'ingegnere strutturista può prescrivere barre d'armatura in acciaio. Verificare sempre con il progettista per applicazioni portanti." },
    { question: "Dove si acquistano i casseri cilindrici in Italia?", answer: "I casseri cilindrici (tipo Sonotube o equivalenti) sono disponibili presso Bricoman, Leroy Merlin e rivenditori specializzati di casseri. I diametri vanno da 15 cm a 60 cm. Per piccole quantità alcuni rivenditori li vendono singolarmente; per progetti più grandi acquistare per scatola." },
  ],
};

export const concreteStepsCalculator: CalculatorSEOContent = {
  disclaimer: "Le dimensioni dei gradini devono essere conformi al DM 236/89 e alle NTC 2018. Verificare sempre alzata e pedata con il Direttore Lavori.",
  howToUse: [
    "Inserire l'altezza totale (dislivello) in centimetri.",
    "Inserire la larghezza della scala in metri.",
    "Inserire il numero di gradini — dividere il dislivello totale per l'alzata del singolo gradino (tipicamente 15–20 cm).",
    "Fare clic su Calcola Materiali per ottenere i metri cubi di calcestruzzo.",
  ],
  materialInfo:
    "Le scale in calcestruzzo forniscono un accesso durevole e a bassa manutenzione agli edifici e sono disciplinate dal DM 236/89 (eliminazione delle barriere architettoniche) e dalle norme tecniche locali. Per le scale esterne l'alzata massima è 17,5 cm e la pedata minima è 30 cm secondo il DM 236/89, con un'alzata ideale di 15–17 cm e pedata di 30–33 cm per il massimo comfort (regola del 2a + p = 62–64 cm). Tutte le alzate di una rampa devono essere uniformi entro 5 mm. Le scale si realizzano con casseri in legno riempiti di calcestruzzo C25/30, spesso su un sottofondo compattato di misto stabilizzato. L'armatura con rete elettrosaldata o barre Ø10 è raccomandata, specialmente per rampe più larghe di 1 m. La superficie finita deve avere una finitura antiscivolo — ottenibile spazzolando il calcestruzzo fresco o applicando una finitura antiscivolo. Il clima italiano richiede che le scale esterne abbiano una leggera pendenza (circa 1 %) verso il bordo anteriore per il drenaggio. Il calcestruzzo preconfezionato costa 80–140 € al m³: una tipica rampa da 3 gradini d'ingresso richiede 0,3–0,6 m³. Il corrimano è obbligatorio quando ci sono più di 3 alzate secondo il DM 236/89, e a partire da 2 alzate secondo le normative locali.",
  nextSteps: [
    { label: "Calcolatore Calcestruzzo", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calcolatore Platea in Calcestruzzo", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calcolatore Scale Terrazza", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Costruire i casseri con pannelli in multistrato da 18 mm o tavole da ponteggio, ben controventati per resistere al peso del calcestruzzo fresco.",
    "Assicurarsi che tutte le alzate siano della stessa altezza — gradini irregolari sono un rischio di inciampo e un'infrazione normativa.",
    "Spazzolare la superficie di ogni pedata con una spazzola rigida mentre il calcestruzzo è ancora fresco per ottenere una finitura antiscivolo.",
    "Stagionare il calcestruzzo per almeno 7 giorni prima di rimuovere i casseri o consentire il transito pedonale.",
    "Prevedere il ferro d'attesa per il corrimano annegandolo nel getto.",
  ],
  commonMistakes: [
    "Alzate irregolari — tutte le alzate devono essere entro 5 mm l'una dall'altra.",
    "Non prevedere una finitura antiscivolo — le scale in calcestruzzo liscio diventano estremamente scivolose quando bagnate.",
    "Dimenticare il corrimano — obbligatorio con più di 3 alzate secondo il DM 236/89.",
    "Non prevedere un adeguato sottofondo compattato alla base della scala.",
    "Non predisporre la pendenza di drenaggio sulle pedate (1 % verso l'esterno).",
  ],
  faqs: [
    { question: "Quali sono le norme per le scale in calcestruzzo esterne?", answer: "Il DM 236/89 specifica un'alzata massima di 17,5 cm e una pedata minima di 30 cm per scale esterne. Tutte le alzate devono essere uniformi entro 5 mm. Il corrimano è obbligatorio con più di 3 alzate. Le pedate devono avere una finitura antiscivolo." },
    { question: "Quanti sacchi di calcestruzzo per 3 gradini?", answer: "Una tipica rampa da 3 gradini (90 cm di larghezza, 16 cm di alzata, 30 cm di pedata) richiede circa 0,3 m³ di calcestruzzo, ovvero circa 25 sacchi da 25 kg. Per rampe più grandi il preconfezionato è più economico." },
    { question: "Le scale in calcestruzzo necessitano di armatura?", answer: "L'armatura è raccomandata per tutte le scale in calcestruzzo, specialmente per rampe più larghe di 1 m. Utilizzare rete elettrosaldata o barre Ø10 con passo di 20 cm. L'armatura previene la fessurazione da assestamento, movimenti termici e impatti." },
    { question: "Qual è l'alzata ideale per i gradini?", answer: "L'alzata ideale per scale esterne è 15–17 cm con pedata di 30–33 cm. Questo produce un angolo di salita confortevole di circa 30–33 gradi (regola: 2 × alzata + pedata = 62–64 cm). Gradini più ripidi risultano insicuri; più bassi sprecano spazio." },
    { question: "Serve il corrimano sulle scale in calcestruzzo?", answer: "Sì, se ci sono più di 3 alzate secondo il DM 236/89. Per scale più larghe di 1,80 m il corrimano è richiesto su entrambi i lati. L'altezza del corrimano deve essere compresa tra 90 cm e 100 cm dalla linea di pendenza." },
    { question: "Come rendere le scale in calcestruzzo antiscivolo?", answer: "Spazzolare la superficie di ogni pedata con una spazzola rigida mentre il calcestruzzo è ancora lavorabile. Questo crea una finitura texturizzata che garantisce aderenza in condizioni di bagnato. In alternativa applicare un rivestimento antiscivolo dopo la stagionatura o inserire strisce in carborundum nel bordo anteriore." },
  ],
};

// ─── STRUTTURA SOLAIO ───────────────────────────────────────────────────────

export const rimJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Misurare il perimetro del solaio in metri.",
    "Selezionare l'altezza del travetto (tipicamente 20 cm, 24 cm o 30 cm per solai in legno).",
    "Inserire la lunghezza standard delle tavole.",
    "Fare clic su Calcola Materiali per ottenere il conteggio tavole e i metri lineari totali.",
  ],
  materialInfo:
    "Il travetto perimetrale (o cordolo ligneo) è l'elemento che corre lungo tutto il perimetro della struttura del solaio, chiudendo le teste dei travetti portanti. Fornisce supporto laterale ai travetti, trasferisce i carichi alla parete sottostante e chiude la cavità del solaio contro infiltrazioni d'aria e insetti. Nell'edilizia in legno italiana i travetti perimetrali hanno tipicamente la stessa altezza dei travetti del solaio — comunemente 20, 22,5 o 25 cm, in legname classificato C16 o C24 secondo UNI EN 338. Le alternative ingegnerizzate come il legno lamellare incollato (LVL) o i travetti a I sono sempre più utilizzate per la loro stabilità dimensionale e il minor ritiro. I travetti perimetrali devono essere adeguatamente chiodati o avvitati a ogni travetto (minimo 2 fissaggi per travetto) e al dormiente o alla parete sottostante. Nelle costruzioni in legno il travetto perimetrale è un elemento critico dell'involucro edilizio e deve essere sigillato con nastro o mastice per la tenuta all'aria secondo il D.Lgs. 192/2005. I prezzi variano da 5 € a 18 € al metro a seconda della sezione e della classificazione, disponibili presso segherie locali, Bricoman e rivenditori edili specializzati come Rothoblaas.",
  nextSteps: [
    { label: "Calcolatore Travetti Solaio", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calcolatore Dormiente in Legno Trattato", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calcolatore Controventature", href: "/calculators/floor-framing/bridging-calculator/" },
  ],
  installationTips: [
    "Posizionare il travetto perimetrale a filo con il bordo esterno del dormiente.",
    "Chiodare o avvitare attraverso il travetto perimetrale nella testa di ogni travetto con almeno 2 fissaggi.",
    "Sigillare il giunto tra travetto perimetrale e dormiente con nastro per tenuta all'aria per la conformità al D.Lgs. 192/2005.",
    "Verificare che il travetto perimetrale sia in bolla e dritto prima di fissare i travetti del solaio.",
    "Applicare prodotto preservante sulle sezioni tagliate in opera.",
  ],
  commonMistakes: [
    "Non allineare il travetto perimetrale a filo con la struttura della parete sottostante, creando un gradino che complica il rivestimento.",
    "Fissaggi insufficienti alle teste dei travetti — questo permette ai travetti di ruotare sotto carico.",
    "Dimenticare di sigillare la zona del travetto perimetrale per la tenuta all'aria, creando un ponte termico significativo.",
    "Non prevedere giunti sfalsati nei travetti perimetrali contigui.",
    "Utilizzare legno non classificato o con nodi eccessivi per un elemento strutturale.",
  ],
  faqs: [
    { question: "Quale sezione serve per i travetti perimetrali?", answer: "Il travetto perimetrale deve avere la stessa altezza dei travetti del solaio. Per travetti da 20 cm usare un perimetrale alto 20 cm. Le sezioni comuni in Italia sono 6×20 cm, 6×24 cm e 6×25 cm in legname C16 o C24." },
    { question: "Si può usare legno lamellare per i travetti perimetrali?", answer: "Sì. Il legno lamellare incollato (LVL) e il legno lamellare (glulam) sono ottime scelte per i travetti perimetrali perché sono dimensionalmente stabili, resistono alla deformazione e si ritirano meno del legno segato. Costano di più ma offrono un risultato migliore a lungo termine." },
    { question: "Come si giuntano i travetti perimetrali?", answer: "Le giunzioni testa a testa devono cadere in corrispondenza di un travetto del solaio ed essere fissate con una piastra metallica connettrice o chiodando attraverso entrambi i lati nel travetto. Sfalsare i giunti in modo che non coincidano con i giunti nella fila sopra o sotto." },
    { question: "I travetti perimetrali necessitano di protezione antincendio?", answer: "Nelle costruzioni in legno la zona del travetto perimetrale è un potenziale percorso di propagazione dell'incendio e deve essere protetta con sigillante intumescente o lana minerale nelle pareti divisorie e alle giunzioni solaio-parete secondo le NTC 2018 e il DM 03/08/2015." },
    { question: "Quante tavole servono per i travetti perimetrali?", answer: "Dividere il perimetro totale del solaio in metri per la lunghezza standard della tavola. Per un perimetro di 40 m con tavole da 4,80 m servono circa 9 tavole più il 10 % di sfrido, quindi ordinare 10 tavole." },
    { question: "Dove si acquista il legname per travetti perimetrali in Italia?", answer: "Il legname per travetti perimetrali è disponibile presso segherie locali, Bricoman, e rivenditori specializzati come Rothoblaas, Holz Technic o Mayr-Melnhof. Per soluzioni ingegnerizzate (LVL, travetti a I) contattare fornitori specializzati come Hasslacher o Stora Enso." },
  ],
};

export const floorJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la luce del solaio (larghezza della stanza) in metri.",
    "Selezionare l'interasse dei travetti: 40 cm o 60 cm.",
    "Inserire la lunghezza del solaio per calcolare il numero di travetti.",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei travetti e i metri lineari totali.",
  ],
  materialInfo:
    "I travetti del solaio sono gli elementi orizzontali in legno che coprono la luce tra le pareti o le travi per sostenere il piano di calpestio. Nell'edilizia residenziale italiana i travetti sono tipicamente in legname classificato C16 o C24 secondo UNI EN 338, con interasse di 40 cm o 60 cm, e sezioni che vanno da 6×16 cm per luci brevi a 6×25 cm o maggiori per luci più ampie. La luce massima dipende dalla classificazione del legname, dalla sezione, dall'interasse e dal carico — fare riferimento alle tabelle di luce dell'Eurocodice 5 (UNI EN 1995-1-1) o alle tabelle PROMO LEGNO per i valori specifici. Con interasse di 40 cm e legname C24, un travetto da 6×20 cm può coprire circa 3,5 m sotto carico residenziale (1,5 kN/m² sovraccarico più peso proprio). I travetti ingegnerizzati (travetti a I, travetti a traliccio metallico tipo Posi-joist, o travi LVL) sono sempre più diffusi per luci maggiori, peso ridotto e più facile passaggio degli impianti. Possono coprire 5–7 m o più senza appoggio intermedio. I travetti devono essere controventati (vedi calcolatore controventature) per prevenire l'instabilità laterale. I prezzi per travetti C24 da 6×20 cm sono circa 5–12 € al metro presso rivenditori edili italiani.",
  nextSteps: [
    { label: "Calcolatore Travetto Perimetrale", href: "/calculators/floor-framing/rim-joist-calculator/" },
    { label: "Calcolatore Controventature", href: "/calculators/floor-framing/bridging-calculator/" },
    { label: "Calcolatore Pannelli OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Orientare ogni travetto con la convessità naturale verso l'alto (monta verso l'alto).",
    "Fissare i travetti al dormiente con staffe per travetti (tipo Simpson Strong-Tie o Rothoblaas) o con chiodatura inclinata con almeno 2 chiodi per lato.",
    "Installare controventature a croce di Sant'Andrea o blocchi pieni a mezzaluce per travetti con luce superiore a 2,5 m.",
    "Utilizzare l'interasse di 40 cm per solai residenziali per minimizzare la deformazione e il rimbalzo del pavimento.",
    "Verificare la classificazione e la marcatura CE di ogni travetto prima della posa.",
  ],
  commonMistakes: [
    "Utilizzare travetti sottodimensionati per la luce — controllare sempre le tabelle di luce per la classificazione del legname e il carico.",
    "Non controventare i travetti a mezzaluce, causando eccessivo movimento laterale e pavimenti rumorosi.",
    "Installare i travetti con la monta verso il basso, aumentando la freccia a mezzaluce sotto carico.",
    "Non rispettare l'interasse di progetto, creando zone con supporto insufficiente per il tavolato.",
    "Omettere le staffe metalliche nei nodi strutturali, affidandosi solo alla chiodatura.",
  ],
  faqs: [
    { question: "Quale sezione serve per i travetti del solaio?", answer: "La sezione dipende da luce, interasse, classificazione del legname e carico. Come guida: travetti C24 da 6×20 cm a interasse 40 cm coprono circa 3,5 m. Per luci fino a 4,5 m usare 6×25 cm. Per luci maggiori considerare travetti ingegnerizzati. Verificare sempre le tabelle dell'Eurocodice 5 o PROMO LEGNO." },
    { question: "Meglio interasse 40 cm o 60 cm?", answer: "L'interasse di 40 cm è standard per i solai residenziali in Italia. Offre un solaio più rigido e un migliore supporto per il tavolato standard in OSB da 18 mm o compensato. L'interasse di 60 cm può essere usato con travetti ingegnerizzati o dove specificato dall'ingegnere strutturista." },
    { question: "Cosa sono i travetti ingegnerizzati?", answer: "I travetti ingegnerizzati includono travetti a I (tipo JJI-joist), travetti a traliccio metallico (tipo Posi-joist) e travi LVL. Coprono luci maggiori, sono più leggeri, non si deformano e hanno aperture predisposte per il passaggio degli impianti. Costano il 20–40 % in più del legname segato ma fanno risparmiare manodopera." },
    { question: "Quanto costano i travetti del solaio in Italia?", answer: "Travetti C24 in legname segato costano circa 5–12 € al metro per sezioni da 6×20 cm. Travetti ingegnerizzati a I costano 8–18 € al metro per altezze da 20–30 cm. Per un tipico solaio da 5×8 m a interasse 40 cm, preventivare 500–1.000 € per travetti segati o 800–1.500 € per ingegnerizzati." },
    { question: "I travetti del solaio devono essere trattati?", answer: "I travetti in ambiente asciutto e ventilato sopra una barriera vapore generalmente non necessitano di trattamento preservante. I travetti a contatto con pareti esterne, in solai sospesi con vespai ventilati o in condizioni di umidità devono essere trattati in classe d'uso 2 secondo UNI EN 335." },
    { question: "Come si appoggiano i travetti alle pareti?", answer: "I travetti sono tipicamente appoggiati sul dormiente con staffe per travetti (metodo preferito per murature portanti) o inseriti nella muratura per almeno 9 cm. Nelle costruzioni in legno i travetti poggiano sul dormiente e sono fissati con staffe o chiodatura diretta." },
  ],
};

export const bridgingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire il numero di travetti del solaio.",
    "Inserire la luce dei travetti in metri.",
    "Selezionare il tipo di controventatura: croce di Sant'Andrea o blocchi pieni.",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei pezzi.",
  ],
  materialInfo:
    "Le controventature impediscono ai travetti del solaio di torcersi, instabilizzarsi o vibrare sotto carico. Le NTC 2018 e l'Eurocodice 5 (UNI EN 1995-1-1) richiedono la controventatura a mezzaluce per travetti con luce superiore a 2,5 m, e a terzi di luce per travetti con luce superiore a 4,5 m. I due tipi principali sono la croce di Sant'Andrea (controventi diagonali in legno o metallo che formano una V tra i travetti) e i blocchi pieni (blocchi in legno a tutta altezza tra i travetti). La croce di Sant'Andrea utilizza listelli da 4×4 cm o 5×5 cm in legno dolce chiodati diagonalmente tra i travetti, o controventi metallici zincati prefabbricati. I blocchi pieni utilizzano ritagli dello stesso legname dei travetti. I controventi metallici (come quelli prodotti da Simpson Strong-Tie o Rothoblaas) sono molto diffusi in Italia perché rapidi da installare, autoseranti e disponibili in misure standard per interassi di 40 cm e 60 cm. Una confezione da 20 controventi metallici costa circa 12–25 € presso Bricoman, Leroy Merlin o ferramenta. La controventatura in legno costa meno in materiali ma richiede più tempo per il taglio e la posa.",
  nextSteps: [
    { label: "Calcolatore Travetti Solaio", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calcolatore Adesivo Sottopavimento", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Calcolatore Pannelli OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Installare le controventature a mezzaluce per travetti fino a 4,5 m, e a terzi per luci maggiori.",
    "Per la croce di Sant'Andrea chiodare la parte superiore di ogni controvento a un travetto e la parte inferiore al travetto adiacente.",
    "Per i blocchi pieni assicurarsi che siano a misura tra i travetti e chiodati con almeno 2 chiodi per estremità.",
    "Non dimenticare di controventare l'ultimo travetto alla parete con un blocco pieno.",
    "Nelle zone sismiche aggiungere controventature supplementari come indicato dal progettista.",
  ],
  commonMistakes: [
    "Omettere completamente le controventature — causa solai che rimbalzano, scricchiolano e travetti che ruotano.",
    "Installare i controventi a croce di Sant'Andrea ma dimenticare di bloccare l'ultimo travetto alla parete, permettendo all'intera fila di spostarsi.",
    "Utilizzare legname sottodimensionato per i blocchi pieni — devono avere la stessa altezza dei travetti.",
    "Non rispettare la posizione prescritta (mezzaluce o terzi) compromettendo l'efficacia strutturale.",
    "Chiodare i controventi con chiodi troppo corti che non garantiscono la presa nel legno.",
  ],
  faqs: [
    { question: "Quando è obbligatoria la controventatura dei travetti?", answer: "La controventatura è richiesta a mezzaluce per travetti con luce superiore a 2,5 m e a terzi per luci superiori a 4,5 m, secondo l'Eurocodice 5 (UNI EN 1995-1-1) e le indicazioni delle NTC 2018." },
    { question: "Meglio croce di Sant'Andrea o blocchi pieni?", answer: "La croce di Sant'Andrea è generalmente preferita perché più efficace nel prevenire la rotazione dei travetti e più facile da installare, specialmente con controventi metallici. I blocchi pieni sono più semplici ma possono ritirarsi e allentarsi nel tempo se il legno si asciuga." },
    { question: "Si possono usare controventi metallici al posto del legno?", answer: "Sì. I controventi metallici (Simpson Strong-Tie, Rothoblaas) sono molto utilizzati in Italia. Sono rapidi da installare, non si ritirano e sono disponibili per interassi di 40 cm e 60 cm. Costano leggermente di più del legno ma fanno risparmiare molto tempo di manodopera." },
    { question: "Quanti controventi servono per campata tra travetti?", answer: "Ogni campata tra travetti necessita di 2 controventi per la croce di Sant'Andrea (uno diagonale in ogni direzione). Per un solaio con 20 travetti ci sono 19 campate, servono 38 controventi per fila di controventatura. Solo a mezzaluce sono 38 controventi in totale." },
    { question: "Servono controventature per travetti ingegnerizzati?", answer: "Sì. Anche i travetti ingegnerizzati a I e a traliccio metallico necessitano di controventatura, sebbene il produttore possa specificare requisiti diversi. Consultare la guida di installazione del produttore per i dettagli specifici." },
    { question: "Dove si acquistano i controventi per travetti in Italia?", answer: "I controventi metallici sono disponibili presso Bricoman, Leroy Merlin, ferramenta specializzate e rivenditori edili. Vengono venduti in confezioni dimensionate per altezze e interassi specifici dei travetti. Il legname per la croce di Sant'Andrea si ricava da listelli standard da 4×4 cm o 5×5 cm." },
  ],
};

export const subfloorAdhesiveCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale del solaio in metri quadrati.",
    "Selezionare la dimensione della cartuccia di adesivo.",
    "Specificare l'interasse dei travetti (40 o 60 cm).",
    "Fare clic su Calcola Materiali per ottenere il numero di cartucce necessarie.",
  ],
  materialInfo:
    "L'adesivo per sottopavimento è un adesivo da costruzione applicato sulla sommità dei travetti prima di posare il tavolato (OSB o compensato). Incollare il tavolato ai travetti crea un'azione composita che riduce significativamente il rimbalzo del solaio ed elimina gli scricchiolii. In Italia l'adesivo per sottopavimento più comune è di tipo poliuretanico o SMP (polimero sililato modificato), venduto in cartucce da 310 ml per pistola applicatrice standard. Una singola cartuccia da 310 ml copre circa 3–4 metri lineari di sommità del travetto, equivalenti a circa 1,2–1,6 m² di superficie del solaio con interasse di 40 cm. I marchi più diffusi includono Mapei Ultrabond, Kerakoll Slc Eco, Soudal, Bostik e Würth. I prezzi variano da 4 € a 10 € per cartuccia presso Bricoman, Leroy Merlin o Würth. Per superfici grandi l'adesivo è disponibile anche in sacchetti foil da 600 ml per pistola a cartuccia grande, coprendo circa 10–12 metri lineari per sacchetto. L'incollaggio è particolarmente importante per i pavimenti in pannelli truciolari, più soggetti a scricchiolii rispetto a OSB o compensato.",
  nextSteps: [
    { label: "Calcolatore Pannelli OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Calcolatore Travetti Solaio", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calcolatore Viti per Cartongesso", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
  ],
  installationTips: [
    "Applicare un cordone continuo di adesivo sulla sommità di ogni travetto appena prima di posare il tavolato.",
    "Lavorare a sezioni — applicare l'adesivo solo sui travetti che si possono coprire entro 10–15 minuti.",
    "Premere saldamente il pannello sull'adesivo e avvitare o chiodare immediatamente.",
    "In inverno scaldare le cartucce in ambiente prima dell'uso — l'adesivo freddo scorre male.",
    "Pulire immediatamente eventuali eccessi con solvente prima che l'adesivo polimerizzi.",
  ],
  commonMistakes: [
    "Applicare l'adesivo troppo in anticipo rispetto ai pannelli — si forma una pellicola superficiale che riduce l'adesione.",
    "Utilizzare troppo poco adesivo — serve un cordone sottile e continuo lungo ogni travetto.",
    "Omettere completamente l'adesivo — è la causa principale dei pavimenti in truciolari che scricchiolano.",
    "Non verificare la compatibilità dell'adesivo con il tipo di pannello (OSB, compensato, truciolare).",
    "Applicare l'adesivo su superfici bagnate o sporche compromettendo l'incollaggio.",
  ],
  faqs: [
    { question: "È necessario incollare i pannelli del sottopavimento?", answer: "Sì. Incollare i pannelli ai travetti riduce drasticamente gli scricchiolii e crea un solaio più rigido. È considerata prassi consolidata nell'edilizia in legno italiana ed è richiesto da molti produttori di strutture prefabbricate in legno." },
    { question: "Quante cartucce di adesivo per m²?", answer: "Con interasse travetti di 40 cm, circa 1 cartuccia (310 ml) copre 1,2–1,6 m². Per un solaio da 40 m², preventivare 25–35 cartucce." },
    { question: "Quale tipo di adesivo usare?", answer: "Utilizzare un adesivo da costruzione flessibile poliuretanico o SMP specifico per sottopavimenti. Evitare adesivi rigidi (come il PVA) che diventano fragili e si fessurano con i movimenti del solaio. Cercare prodotti specificamente etichettati per incollaggio strutturale legno-legno, come Mapei Ultrabond o Kerakoll Slc Eco." },
    { question: "Si può usare la schiuma poliuretanica espandente al posto dell'adesivo?", answer: "No. La schiuma espandente non fornisce l'adesione strutturale necessaria per il sottopavimento. Utilizzare un adesivo da costruzione specifico per l'incollaggio legno-legno sotto carico." },
    { question: "L'adesivo sostituisce le viti?", answer: "No. L'adesivo funziona insieme a viti o chiodi, non come sostituto. Le viti forniscono il fissaggio immediato e la pressione di serraggio mentre l'adesivo polimerizza. Usare entrambi per il miglior risultato." },
    { question: "Quanto costa l'adesivo per sottopavimento?", answer: "Una cartuccia da 310 ml costa 4–10 € presso rivenditori italiani. Per un solaio da 40 m², l'adesivo costa circa 100–300 € in totale — un piccolo investimento per un pavimento senza scricchiolii." },
  ],
};

export const osbPanelCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire lunghezza e larghezza del solaio in metri.",
    "Il calcolatore utilizza pannelli OSB standard da 120×240 cm (2,88 m² per pannello).",
    "Specificare lo spessore desiderato (18 mm standard per interasse 40 cm).",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei pannelli.",
  ],
  materialInfo:
    "L'OSB (oriented strand board — pannello a scaglie orientate) è un pannello in legno ingegnerizzato utilizzato per tavolati di solaio, rivestimento strutturale di pareti e tavolato di copertura nell'edilizia in legno italiana. I pannelli standard misurano 120×240 cm (alcuni fornitori offrono anche 125×250 cm), con spessori comuni di 11 mm, 15 mm e 18 mm. Per il tavolato del solaio su travetti a interasse di 40 cm, lo standard è OSB/3 da 18 mm con giunto maschio-femmina. L'OSB/3 è classificato per uso strutturale in condizioni umide, che è il grado appropriato per solai e coperture. Il pannello truciolare idrofugo (P5) è la principale alternativa per i pavimenti, offrendo una superficie più liscia ma minore resistenza all'umidità. I prezzi dell'OSB in Italia variano da 12 € a 30 € per pannello a seconda dello spessore e della classificazione, disponibili presso Bricoman, Leroy Merlin, Obi e rivenditori edili. Ogni pannello da 120×240 cm copre 2,88 m². Utilizzare sempre pannelli con bordi maschio-femmina per il tavolato del solaio per creare una superficie continua e rigida. Sfalsare i giunti corti in modo che non coincidano sullo stesso travetto tra pannelli adiacenti. Marchi di riferimento: Kronospan, Egger, Swiss Krono.",
  nextSteps: [
    { label: "Calcolatore Travetti Solaio", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calcolatore Adesivo Sottopavimento", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Calcolatore Lastre di Cartongesso", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Posare i pannelli OSB con il lato lungo perpendicolare ai travetti per la massima resistenza.",
    "Sfalsare i giunti di testa di almeno 60 cm tra file adiacenti.",
    "Lasciare uno spazio di dilatazione di 10–12 mm lungo tutto il perimetro del solaio.",
    "Incollare e avvitare a 15 cm di interasse lungo i bordi e 30 cm nel campo.",
    "Utilizzare viti da legno e non chiodi per un fissaggio più sicuro e duraturo.",
  ],
  commonMistakes: [
    "Non sfalsare i giunti tra le file, creando una linea debole attraverso il solaio.",
    "Dimenticare lo spazio di dilatazione alle pareti — l'OSB si dilata con l'umidità e si imbarcherà se serrato.",
    "Utilizzare OSB/2 al posto di OSB/3 — l'OSB/2 è solo per condizioni asciutte e non è adatto per i solai.",
    "Posare i pannelli con il lato lungo parallelo ai travetti, riducendo la resistenza strutturale.",
    "Non incollare i pannelli ai travetti, rinunciando all'azione composita che riduce gli scricchiolii.",
  ],
  faqs: [
    { question: "Quale spessore di OSB per i solai?", answer: "Utilizzare OSB/3 maschio-femmina da 18 mm per tavolati su travetti a interasse di 40 cm. Per interasse di 60 cm utilizzare OSB/3 da 22 mm. Specificare sempre il grado OSB/3, classificato per uso strutturale in condizioni umide." },
    { question: "OSB o truciolare per i pavimenti?", answer: "Entrambi sono adatti. L'OSB/3 è più resistente all'umidità e strutturalmente più forte. Il truciolare idrofugo P5 offre una superficie più liscia per vinilici o moquette. L'OSB è preferito nelle costruzioni in legno; il truciolare è comune nelle costruzioni in muratura con solai in legno." },
    { question: "Quanti pannelli per una stanza da 4×5 m?", answer: "Una stanza da 4×5 m misura 20 m². Ogni pannello da 120×240 cm copre 2,88 m². Servono 20 / 2,88 = 7 pannelli, più il 10 % di sfrido = 8 pannelli." },
    { question: "Serve l'OSB maschio-femmina per i solai?", answer: "Sì. I bordi maschio-femmina sono essenziali per il tavolato del solaio perché creano una superficie rigida e continua e impediscono il movimento differenziale tra i pannelli. L'OSB a bordo dritto si usa per il rivestimento delle pareti e applicazioni non strutturali." },
    { question: "Quanto costa l'OSB in Italia?", answer: "I prezzi dell'OSB/3 variano da 12 € a 30 € per pannello da 120×240 cm. L'OSB/3 maschio-femmina da 18 mm costa circa 20–30 € per pannello. L'acquisto in pacchi completi dal rivenditore edile garantisce il miglior prezzo." },
    { question: "Si può usare l'OSB per un tetto piano?", answer: "Sì. L'OSB/3 è molto utilizzato per il tavolato dei tetti piani in Italia. Utilizzare 18 mm su travetti a interasse 40 cm o 11 mm su arcarecci ravvicinati. Assicurare una ventilazione adeguata sopra l'OSB per prevenire la condensa." },
  ],
};

// ─── STRUTTURA PARETI ───────────────────────────────────────────────────────

export const studCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la lunghezza totale della parete in metri.",
    "Selezionare l'interasse dei montanti: 40 cm o 60 cm.",
    "Inserire il numero di porte e finestre per i montanti aggiuntivi.",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei montanti.",
  ],
  materialInfo:
    "I montanti sono gli elementi verticali in legno che formano l'ossatura strutturale delle pareti a telaio. Nell'edilizia italiana i montanti sono tipicamente in legname classificato C16 o C24 secondo UNI EN 338, con interasse di 40 cm o 60 cm, dove 60 cm è il più comune per le pareti esterne con rivestimento strutturale in OSB. Le sezioni standard sono 4×9 cm (per pareti da 10 cm) o 6×14 cm (per pareti da 15 cm), tagliati a 2,40 m per l'altezza standard di piano. Ogni apertura per porte o finestre richiede montanti aggiuntivi: due montanti di contrasto (montanti tronchi) per sostenere l'architrave e almeno un montante supplementare per lato. Gli angoli richiedono tipicamente tre montanti per fornire superfici di inchiodatura per i rivestimenti interni ed esterni. I montanti delle pareti esterne devono essere conformi all'Eurocodice 5 (UNI EN 1995-1-1) per l'adeguatezza strutturale, e l'assemblaggio della parete deve soddisfare il D.Lgs. 192/2005 per la prestazione termica. Il costo dei montanti è circa 2–6 € per pezzo da 2,40 m presso i rivenditori edili italiani. Per una tipica villetta a 3 camere servono 200–350 montanti a seconda della lunghezza delle pareti e del numero di aperture.",
  nextSteps: [
    { label: "Calcolatore Corrente Inferiore", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Calcolatore Corrente Superiore", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Calcolatore Architravi", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Segnare tutte le posizioni dei montanti sul corrente inferiore e superiore prima dell'assemblaggio.",
    "Orientare ogni montante con la convessità naturale nella stessa direzione per una superficie di parete uniforme.",
    "Chiodare attraverso il corrente nella testa del montante con almeno 2 chiodi (chiodatura passante) o usare una pistola sparachiodi.",
    "Verificare che la parete sia in piombo e dritta prima di fissare il rivestimento o il cartongesso.",
    "Nelle zone sismiche (zona 1-3) aggiungere controventi diagonali o pannelli strutturali come prescritto dal progettista.",
  ],
  commonMistakes: [
    "Confondere interasse 40 cm con 60 cm — assicurarsi che l'interasse corrisponda alle specifiche di rivestimento e isolamento.",
    "Dimenticare i montanti aggiuntivi agli angoli e alle aperture, lasciando superfici di inchiodatura insufficienti.",
    "Non verificare la rettilineità dei montanti prima dell'installazione — montanti arcuati creano pareti irregolari.",
    "Non rispettare la marcatura CE e la classificazione strutturale del legname.",
    "Omettere i controventi diagonali o il rivestimento strutturale in zona sismica.",
  ],
  faqs: [
    { question: "Meglio interasse 40 cm o 60 cm per i montanti?", answer: "L'interasse di 60 cm è standard per le pareti esterne nelle costruzioni in legno italiane quando si utilizza rivestimento strutturale (OSB o compensato). L'interasse di 40 cm si usa per pareti fortemente caricate, pareti senza rivestimento strutturale e dove servono punti di fissaggio aggiuntivi. Verificare le specifiche dell'ingegnere strutturista." },
    { question: "Quale sezione per i montanti delle pareti?", answer: "Per pareti da 10 cm (tipicamente tramezze interne) usare montanti 4×9 cm. Per pareti esterne da 15 cm (per isolamento più spesso) usare montanti 6×14 cm. C16 è il minimo per pareti strutturali; C24 è preferito per migliore portata e capacità di carico." },
    { question: "Quanti montanti per una parete da 5 m?", answer: "Una parete da 5 m a interasse 60 cm necessita di 5000/600 + 1 = circa 9 montanti per la parete base. Aggiungere 2 per ogni angolo (6 totali per 2 angoli) e 4 per ogni apertura (montanti tronchi e montanti di contrasto). Una parete con 2 angoli e 1 finestra necessita di circa 19 montanti." },
    { question: "Serve la protezione antincendio nelle pareti a montanti?", answer: "Sì. Le NTC 2018 e il DM 03/08/2015 richiedono la compartimentazione antincendio nelle cavità nascoste delle pareti in legno, in particolare alle giunzioni solaio-parete, intorno alle aperture e nelle pareti divisorie. Utilizzare sigillante intumescente o barriere in lana minerale." },
    { question: "Si possono usare montanti metallici al posto del legno?", answer: "Sì. L'intelaiatura leggera in acciaio (Light Gauge Steel o LGS) è utilizzata nell'edilizia commerciale italiana e in alcune costruzioni residenziali. I montanti metallici non bruciano, non si ritirano e non si deformano. Tuttavia richiedono fissaggi diversi, creano ponti termici e sono tipicamente installati da imprese specializzate come Knauf o Gyproc Saint-Gobain." },
    { question: "Dove si acquistano i montanti in Italia?", answer: "I montanti in legno classificato C16 e C24 sono disponibili presso segherie locali, Bricoman, Leroy Merlin e rivenditori specializzati. Per progetti prefabbricati i montanti pre-tagliati possono essere ordinati da produttori di case in legno come Wolf Haus, Rubner, o Xlam Dolomiti." },
  ],
};

export const bottomPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la lunghezza totale della parete in metri.",
    "Selezionare la sezione del corrente (corrispondente alla larghezza dei montanti).",
    "Inserire la lunghezza standard delle tavole.",
    "Fare clic su Calcola Materiali per ottenere il conteggio tavole e i metri lineari totali.",
  ],
  materialInfo:
    "Il corrente inferiore è l'elemento orizzontale alla base della parete a montanti, chiodato o avvitato al tavolato del solaio o alla fondazione. Ancora i montanti e distribuisce i carichi della parete alla struttura sottostante. Nelle costruzioni in legno italiane il corrente inferiore ha tipicamente la stessa sezione dei montanti: 4×9 cm per pareti da 10 cm o 6×14 cm per pareti da 15 cm, in legname C16 o C24. I correnti inferiori al piano terra a contatto con il calcestruzzo devono essere in legno trattato in autoclave (vedi calcolatore dormiente). I correnti dei piani superiori non necessitano di trattamento. Il corrente è ricavato da tavole di lunghezza standard (2,40 m, 3,00 m, 3,60 m o 4,80 m) e posato in continuo lungo la linea della parete, con i giunti in corrispondenza dei montanti. Ogni montante è chiodato attraverso il corrente con 2 chiodi, oppure la parete è assemblata distesa sul solaio e sollevata come un'unità. I prezzi sono di 2–6 € al metro a seconda della sezione, presso segherie, Bricoman o rivenditori edili.",
  nextSteps: [
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calcolatore Corrente Superiore", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Calcolatore Dormiente in Legno Trattato", href: "/calculators/foundation/sill-plate-calculator/" },
  ],
  installationTips: [
    "Segnare le posizioni dei montanti sul corrente prima dell'assemblaggio per un interasse uniforme.",
    "Chiodare il corrente al tavolato del solaio con chiodi da 90 mm a interasse di 40 cm.",
    "Assicurarsi che il corrente sia dritto e in bolla su tutta la sua lunghezza.",
    "Tagliare le aperture per le porte nel corrente dopo che la parete è eretta e messa in piombo.",
    "Applicare prodotto preservante sulle teste tagliate in opera per i correnti trattati.",
  ],
  commonMistakes: [
    "Posizionare i giunti tra un montante e l'altro, creando un punto debole alla base della parete.",
    "Non trattare i correnti al piano terra a contatto con il calcestruzzo, causando il marciume.",
    "Non ancorare il corrente al solaio, permettendo alla parete di spostarsi.",
    "Utilizzare una sezione del corrente diversa da quella dei montanti.",
    "Non prevedere i fori per il passaggio degli impianti prima dell'assemblaggio.",
  ],
  faqs: [
    { question: "Quale sezione per il corrente inferiore?", answer: "Il corrente inferiore deve corrispondere alla larghezza dei montanti: 4×9 cm per pareti da 10 cm o 6×14 cm per pareti da 15 cm. Utilizzare legname classificato C16 o C24." },
    { question: "Il corrente inferiore deve essere trattato?", answer: "Solo se è a contatto con calcestruzzo o muratura (piano terra su platea). I correnti dei piani superiori su tavolato in legno non necessitano di trattamento." },
    { question: "Si può usare un corrente inferiore singolo?", answer: "Sì. A differenza del corrente superiore, che è tipicamente doppio, il corrente inferiore è un singolo strato nella costruzione standard a telaio in legno." },
    { question: "Come si fissa il corrente inferiore al solaio?", answer: "Chiodare attraverso il corrente nel tavolato del solaio con chiodi da 90 mm a interasse di 40 cm, o usare viti per un collegamento più solido. Sul calcestruzzo usare tasselli chimici o viti per calcestruzzo (tipo Fischer o Hilti)." },
    { question: "Si taglia il corrente in corrispondenza delle porte?", answer: "Sì. Dopo che la parete è eretta e messa in piombo, tagliare il corrente inferiore nell'apertura della porta a filo con l'interno dei montanti tronchi. Questo permette al telaio della porta di poggiare sul pavimento." },
    { question: "Quanti metri di corrente per una casa tipo?", answer: "Una tipica villetta a 3 camere ha circa 60–80 m di pareti esterne e 40–60 m di tramezze interne, richiedendo circa 100–140 m di corrente inferiore in totale." },
  ],
};

export const topPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la lunghezza totale della parete in metri.",
    "Selezionare corrente singolo o doppio.",
    "Inserire la lunghezza standard delle tavole.",
    "Fare clic su Calcola Materiali per ottenere il conteggio tavole e i metri lineari totali.",
  ],
  materialInfo:
    "Il corrente superiore (o banchina) corre lungo la sommità dei montanti della parete, collegandoli tra loro e fornendo una superficie di appoggio per i travetti del solaio, i travetti del soffitto o le capriate del tetto. Nelle costruzioni in legno italiane il corrente superiore ha la stessa sezione dei montanti: 4×9 cm o 6×14 cm. Il doppio corrente superiore è prassi standard nella costruzione platform-frame: lo strato superiore sovrappone i giunti dello strato inferiore di almeno 120 cm e si sovrappone agli angoli e alle intersezioni delle pareti per legare la struttura. Alcuni sistemi di costruzione in legno italiani usano un corrente singolo con collegamenti a nastro metallico ai giunti e agli angoli. Il corrente superiore è chiodato a ogni montante con almeno 2 chiodi, e lo strato superiore è chiodato allo strato inferiore a interasse di 40 cm. I giunti nello strato inferiore devono cadere in corrispondenza dei montanti. I prezzi sono gli stessi del legname per montanti: 2–6 € al metro per legname C16/C24 presso i rivenditori edili italiani.",
  nextSteps: [
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calcolatore Corrente Inferiore", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Calcolatore Capriate", href: "/calculators/roofing/truss-calculator/" },
  ],
  installationTips: [
    "Installare prima il corrente inferiore, chiodandolo a ogni montante con almeno 2 chiodi.",
    "Sovrapporre i giunti dello strato superiore di almeno 120 cm rispetto ai giunti dello strato inferiore.",
    "Sovrapporre lo strato superiore a tutti gli angoli e le intersezioni delle pareti per la continuità strutturale.",
    "Chiodare lo strato superiore allo strato inferiore a interasse di 40 cm con chiodi da 90 mm.",
    "In zona sismica verificare che i collegamenti metallici siano conformi alle prescrizioni del progettista.",
  ],
  commonMistakes: [
    "Allineare i giunti dello strato superiore e inferiore — devono essere sfalsati di almeno 120 cm.",
    "Non sovrapporre lo strato superiore agli angoli, indebolendo il collegamento tra pareti perpendicolari.",
    "Utilizzare un corrente singolo dove il doppio corrente è richiesto dalle specifiche strutturali.",
    "Non prevedere le sovrapposizioni nelle quantità di legname necessario.",
    "Omettere i collegamenti metallici ai nodi strutturali in zona sismica.",
  ],
  faqs: [
    { question: "Serve il doppio corrente superiore?", answer: "Il doppio corrente superiore è standard nella costruzione platform-frame. Lega le pareti agli angoli e alle intersezioni e distribuisce i carichi puntuali da travetti e capriate. Alcuni sistemi permettono un corrente singolo con nastri metallici — verificare le specifiche del progettista." },
    { question: "Come si giuntano i correnti superiori?", answer: "I giunti nello strato inferiore devono cadere in corrispondenza dei montanti. Lo strato superiore deve sovrapporre i giunti dello strato inferiore di almeno 120 cm. Agli angoli lo strato superiore di una parete si sovrappone alla sommità del corrente della parete perpendicolare." },
    { question: "Quale sezione per i correnti superiori?", answer: "I correnti superiori hanno la stessa sezione dei montanti: 4×9 cm per pareti da 10 cm o 6×14 cm per pareti da 15 cm, in legname C16 o C24." },
    { question: "Si può usare un nastro metallico al posto del doppio corrente?", answer: "Sì. Alcuni sistemi costruttivi italiani in legno usano un corrente singolo con reggette in acciaio zincato ai giunti e agli angoli. Questo riduce il consumo di legname ma richiede una dettagliatura accurata. Verificare con l'ingegnere strutturista." },
    { question: "Quanti metri di corrente superiore per una casa tipo?", answer: "Per un doppio corrente moltiplicare la lunghezza totale delle pareti per 2. Una tipica villetta a 3 camere con 100–140 m di pareti necessita di 200–280 m di legname per correnti superiori." },
    { question: "I correnti superiori necessitano di trattamento?", answer: "I correnti superiori normalmente non necessitano di trattamento preservante perché si trovano ben al di sopra del livello del terreno in un ambiente asciutto e chiuso. Il trattamento è necessario solo se il legname sarà esposto a umidità persistente." },
  ],
};

export const headerCalculator: CalculatorSEOContent = {
  disclaimer: "Le dimensioni degli architravi dipendono dalla luce, dal carico e dalla classificazione del legname. Verificare sempre con un ingegnere strutturista per le pareti portanti.",
  howToUse: [
    "Inserire la larghezza dell'apertura (luce) in metri.",
    "Inserire il numero di aperture.",
    "Selezionare la configurazione dell'architrave.",
    "Fare clic su Calcola Materiali per ottenere il legname necessario.",
  ],
  materialInfo:
    "Gli architravi sono travi orizzontali che coprono le aperture di porte e finestre, trasferendo il carico sovrastante ai montanti di contrasto su entrambi i lati. Nelle costruzioni in legno italiane gli architravi sono tipicamente costruiti con elementi in legno accoppiati o triplicati bullonati insieme, o con legno ingegnerizzato come LVL (impiallacciato stratificato) o legno lamellare (glulam). Per aperture fino a 1,2 m in tramezze non portanti è sufficiente un architrave singolo da 4×9 cm. Per le pareti portanti la sezione dell'architrave dipende dalla luce, dal carico e dalla classificazione del legname — un ingegnere strutturista deve specificare la sezione. Le sezioni comuni nella pratica italiana includono elementi accoppiati da 6×20 cm per luci fino a 1,5 m e accoppiati da 6×25 cm per luci fino a 2,0 m (in legname C24). Per luci maggiori si usano travi LVL, legno lamellare o architravi in acciaio (tipo profili HEA/IPE). Gli architravi in legno costano 6–18 € al metro a seconda della sezione. Gli architravi in acciaio proprietari costano 25–120 € per architrave a seconda della luce e del carico.",
  nextSteps: [
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calcolatore Rivestimento Strutturale Esterno", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
    { label: "Calcolatore Nastro Impermeabile per Finestre", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Appoggiare gli architravi su montanti tronchi (montanti di contrasto) che trasferiscono il carico direttamente al corrente inferiore.",
    "Per architravi in legno accoppiato, bullonare o chiodare gli elementi insieme a interasse di 30 cm con un distanziatore in compensato se necessario.",
    "Assicurarsi che l'architrave sia a contatto con il corrente superiore senza spazi.",
    "Per architravi in acciaio verificare la lunghezza minima di appoggio su ogni lato (di solito 15 cm).",
    "In zona sismica prevedere i collegamenti metallici prescritti dal progettista tra architrave e montanti.",
  ],
  commonMistakes: [
    "Sottodimensionare l'architrave per la luce e il carico — ottenere sempre la conferma dell'ingegnere per le pareti portanti.",
    "Non prevedere un appoggio adeguato sui montanti tronchi — minimo 4 cm per lato per architravi in legno.",
    "Omettere i montanti tronchi e appendere l'architrave solo con chiodi, incapaci di reggere il carico.",
    "Utilizzare legname con nodi eccessivi per un elemento strutturale critico.",
    "Non verificare la freccia ammissibile dell'architrave secondo l'Eurocodice 5.",
  ],
  faqs: [
    { question: "Quale sezione serve per un architrave sopra una porta?", answer: "Per una porta standard da 90 cm in una tramezza non portante è sufficiente un architrave singolo da 4×9 cm. Per pareti portanti l'architrave deve essere dimensionato da un ingegnere strutturista in base alla luce e ai carichi sovrastanti." },
    { question: "Si può usare un architrave in acciaio al posto del legno?", answer: "Sì. I profili in acciaio (HEA, IPE) sono comunemente utilizzati nell'edilizia italiana, in particolare nelle murature portanti e per luci ampie. Sono dimensionati per luce, carico e tipo di parete — i produttori forniscono tabelle di selezione." },
    { question: "Cos'è un montante tronco?", answer: "Il montante tronco (o montante di contrasto, in inglese jack stud o trimmer stud) è un montante corto che sostiene l'architrave e ne trasferisce il carico al corrente inferiore. È necessario almeno un montante tronco per lato dell'apertura." },
    { question: "Serve un architrave in una parete non portante?", answer: "Sì, ma più leggero. Anche le tramezze non portanti necessitano di un architrave sopra le aperture per sostenere i montanti corti sopra l'apertura e mantenere la rigidità della parete." },
    { question: "Come si sostiene un architrave su un'apertura ampia?", answer: "Per aperture più ampie di 2,0 m utilizzare una trave in legno ingegnerizzato (LVL o lamellare), un profilo in acciaio (HEA/IPE) o una trave composita legno-acciaio (trave a lama). Un ingegnere strutturista deve progettare l'architrave per qualsiasi luce significativa." },
    { question: "Cos'è una trave a lama (flitch beam)?", answer: "La trave a lama è un architrave con una piastra in acciaio bullonata tra due elementi in legno. Combina la resistenza dell'acciaio con la praticità di fissaggio del legno. Le travi a lama sono fabbricate su misura e devono essere progettate da un ingegnere strutturista." },
  ],
};

export const exteriorSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale delle pareti esterne in metri quadrati.",
    "Sottrarre le aree di finestre e porte se desiderato.",
    "Selezionare la dimensione del pannello (120×240 cm è standard).",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei pannelli.",
  ],
  materialInfo:
    "Il rivestimento strutturale esterno fornisce controventatura, resistenza al vento e un substrato per la membrana traspirante sulle pareti a telaio in legno. In Italia l'OSB/3 (9 mm o 11 mm) è il materiale di rivestimento più comune, anche se si utilizzano anche compensato e pannelli proprietari. La dimensione standard del pannello è 120×240 cm (2,88 m²). Il rivestimento è chiodato ai montanti con chiodi ad anello da 50 mm o 63 mm a interasse di 15 cm lungo i bordi e 30 cm nel campo. Deve estendersi dal corrente inferiore al corrente superiore in modo continuo per fornire un'efficace resistenza al controvento secondo l'Eurocodice 5 (UNI EN 1995-1-1). Le aperture devono essere incorniciate con traversi per fornire fissaggi ai bordi dei pannelli. Il rivestimento in OSB/3 costa 10–22 € per pannello presso i rivenditori edili italiani. I pannelli in fibra di legno bituminati (come Agepan DWD o Steico Universal) offrono un'alternativa con resistenza all'umidità integrata e migliore isolamento termico, ma minore capacità strutturale. Una membrana traspirante (come Tyvek o Rothoblaas Traspir EVO) deve essere fissata sopra il rivestimento per permettere al vapore acqueo di uscire impedendo la penetrazione della pioggia.",
  nextSteps: [
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calcolatore Telo Traspirante", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calcolatore Nastro Impermeabile per Finestre", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Chiodare il rivestimento con il lato lungo verticale, dalla base al corrente superiore.",
    "Utilizzare chiodi ad anello da 50 mm a interasse 15 cm lungo i bordi e 30 cm nel campo.",
    "Lasciare uno spazio di 3 mm tra i pannelli per la dilatazione igroscopica.",
    "Sfalsare i giunti orizzontali di almeno 60 cm tra file adiacenti.",
    "Nelle zone sismiche rispettare scrupolosamente lo schema di chiodatura prescritto dal progettista.",
  ],
  commonMistakes: [
    "Non chiodare all'interasse corretto — la sotto-chiodatura riduce la resistenza al controvento della parete.",
    "Posizionare i giunti dei pannelli tra i montanti dove non c'è supporto per la chiodatura.",
    "Omettere la membrana traspirante sopra il rivestimento, permettendo alla pioggia di bagnare l'OSB.",
    "Utilizzare OSB/2 non strutturale al posto dell'OSB/3 per il rivestimento.",
    "Non prevedere i traversi di controventatura intorno alle aperture.",
  ],
  faqs: [
    { question: "Quale spessore di rivestimento per le pareti a telaio?", answer: "L'OSB/3 da 9 mm è lo spessore più comune per il rivestimento strutturale delle pareti in legno italiane con montanti a interasse di 60 cm. Per controventatura aggiuntiva o dove specificato dal progettista, può essere richiesto OSB/3 da 11 mm o compensato da 9 mm." },
    { question: "Il rivestimento va su tutte le pareti?", answer: "Le NTC 2018 e l'Eurocodice 5 richiedono una controventatura adeguata per tutte le pareti a telaio. Il rivestimento fornisce la controventatura più efficace. Dove non viene utilizzato il rivestimento, devono essere previsti controventi diagonali o nastri metallici secondo il progetto dell'ingegnere strutturista." },
    { question: "Qual è la differenza tra OSB e compensato per il rivestimento?", answer: "L'OSB/3 è più economico e fornisce una buona resistenza al controvento. Il compensato offre migliore resistenza all'umidità e alla presa dei chiodi. Entrambi sono accettabili per il rivestimento delle pareti nelle costruzioni in legno italiane. Verificare le specifiche strutturali del progetto." },
    { question: "Serve una membrana traspirante sopra il rivestimento?", answer: "Sì. Una membrana traspirante (barriera permeabile al vapore e resistente all'acqua) deve essere installata sopra il rivestimento per prevenire la penetrazione della pioggia permettendo al vapore acqueo di uscire dalla cavità della parete. Tyvek, Rothoblaas Traspir EVO e Dörken Delta-Vent S sono marchi comuni in Italia." },
    { question: "Quanti pannelli per una casa tipo?", answer: "Una tipica villetta a 3 camere ha circa 150–200 m² di superficie delle pareti esterne (meno le aperture). A 2,88 m² per pannello più il 10 % di sfrido, servono circa 60–80 pannelli di rivestimento in OSB/3." },
    { question: "Si può usare il cartongesso come rivestimento strutturale?", answer: "No. Il cartongesso standard non fornisce controventatura strutturale. Alcuni pannelli proprietari (come Gyproc Habito di Saint-Gobain) hanno proprietà migliorate ma non sono classificati per la resistenza al controvento. Utilizzare OSB/3, compensato o pannelli strutturali certificati per il rivestimento." },
  ],
};

// ─── COPERTURA ──────────────────────────────────────────────────────────────

export const trussCalculator: CalculatorSEOContent = {
  disclaimer: "Le capriate devono essere progettate e fabbricate individualmente. Questo calcolatore fornisce una stima per il preventivo. Ottenere sempre il progetto delle capriate da un produttore certificato.",
  howToUse: [
    "Inserire la lunghezza del tetto in metri.",
    "Selezionare l'interasse delle capriate (60 cm è standard in Italia).",
    "Specificare il tipo di capriata (Fink, Howe, mansarda).",
    "Fare clic su Calcola Materiali per ottenere il conteggio delle capriate.",
  ],
  materialInfo:
    "Le capriate prefabbricate sono strutture triangolari preingegnerizzate in legno che coprono la luce da parete a parete, sostenendo il manto di copertura, il soffitto e i carichi imposti (vento, neve, manutenzione). Nell'edilizia residenziale italiana le capriate tipo Fink (a W) con interasse di 60 cm sono le più comuni, con luci tipicamente da 5 m a 12 m. Ogni capriata è progettata individualmente dal produttore con software proprietario per conformarsi all'Eurocodice 5 (UNI EN 1995-1-1) e soddisfare i requisiti di carico specificati dall'ingegnere strutturista, inclusi i carichi neve secondo la zona neve (UNI EN 1991-1-3 e Allegato Nazionale) e i carichi vento secondo la zona vento (UNI EN 1991-1-4). Le capriate sono fabbricate in legname C24 con piastre chiodate zincate a ogni nodo. Arrivano in cantiere pronte per il sollevamento, riducendo significativamente la manodopera rispetto al tetto tagliato in opera. I prezzi in Italia variano da 50 € a 180 € per capriata a seconda di luce, pendenza e complessità. Una tipica villetta indipendente a 3 camere richiede 25–40 capriate. I tempi di consegna sono di solito 2–4 settimane dall'ordine. Tutte le capriate devono essere controventate secondo le specifiche del produttore e l'Eurocodice 5. Produttori di riferimento in Italia: Holz Technic, Hasslacher, Rubner.",
  nextSteps: [
    { label: "Calcolatore Puntoni", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Calcolatore Tavolato di Copertura", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calcolatore Guaina Sottotegola", href: "/calculators/roofing/underlayment-calculator/" },
  ],
  installationTips: [
    "Sollevare le capriate in posizione con gru o a mano (per capriate piccole), posandole all'interasse corretto.",
    "Controventare immediatamente le capriate con controventature provvisorie e permanenti secondo le specifiche del produttore.",
    "Fissare ogni capriata al dormiente con squadrette di ancoraggio (connettori metallici zincati tipo Simpson Strong-Tie o Rothoblaas).",
    "Verificare che tutte le capriate siano in piombo e a interasse uniforme prima di fissare i listelli.",
    "In zona sismica aggiungere i collegamenti capriata-parete prescritti dal progettista.",
  ],
  commonMistakes: [
    "Non controventare le capriate secondo le specifiche del produttore — capriate non controventate possono collassare durante la costruzione.",
    "Tagliare o modificare le capriate in cantiere — questo invalida il progetto e può causare cedimenti strutturali.",
    "Stoccare le capriate a terra senza supporti — devono essere stoccate in verticale o su sostegni a terzi della luce.",
    "Non rispettare l'interasse di progetto, causando sovraccarico su alcune capriate.",
    "Omettere le squadrette antisismiche nelle zone sismiche 1-3.",
  ],
  faqs: [
    { question: "Quale interasse per le capriate in Italia?", answer: "L'interasse di 60 cm è standard per le capriate residenziali italiane. L'interasse di 40 cm si usa in zone con carico neve elevato (oltre 1,5 kN/m²) o dove specificato dall'ingegnere strutturista." },
    { question: "Quanto costano le capriate in Italia?", answer: "Le capriate Fink standard costano 50–120 € ciascuna per luci fino a 8 m. Luci maggiori o forme complesse (capriate mansardate, a corrente superiore rialzato) costano 120–250 € ciascuna. Preventivare 2.000–5.000 € per il pacchetto capriate di una casa tipo." },
    { question: "Si possono tagliare o modificare le capriate?", answer: "No. Le capriate sono progettate come sistema. Tagliare qualsiasi elemento o nodo invalida il progetto e può causare cedimenti strutturali. Se servono modifiche, consultare il produttore per un riprogettazione." },
    { question: "Qual è il tempo di consegna per le capriate?", answer: "Il tempo di consegna tipico è 2–4 settimane dall'ordine in Italia. Capriate complesse o periodi di alta richiesta possono allungare i tempi a 6 settimane. Ordinare le capriate con anticipo per evitare ritardi nel cantiere." },
    { question: "Serve l'approvazione del Genio Civile per le capriate?", answer: "Sì. Il progetto delle capriate deve essere depositato al Genio Civile come parte del pacchetto strutturale. Il Direttore Lavori verificherà che le capriate corrispondano al progetto approvato e siano correttamente controventate." },
    { question: "Quale controventatura serve per le capriate?", answer: "Ogni fornitura di capriate include uno schema di controventatura dal produttore. Tipicamente include controventatura diagonale sotto i puntoni, controventatura longitudinale lungo il colmo e controventatura a chevron nel piano dei tiranti. La controventatura va installata esattamente come specificato." },
  ],
};

export const rafterCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la lunghezza del tetto in metri.",
    "Selezionare l'interasse dei puntoni: 40 cm o 60 cm.",
    "Specificare la pendenza del tetto per il dimensionamento.",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei puntoni.",
  ],
  materialInfo:
    "I puntoni sono gli elementi inclinati in un tetto tagliato in opera (a differenza del tetto con capriate) che vanno dalla trave di colmo fino al dormiente della parete, sostenendo il manto di copertura. Nell'edilizia italiana con tetto tagliato in opera i puntoni sono tipicamente in legname classificato C16 o C24 secondo UNI EN 338, a interasse di 40 cm, con sezioni che dipendono da luce, pendenza e carico secondo le tabelle di luce dell'Eurocodice 5. Le sezioni comuni sono 6×12 cm, 6×16 cm e 6×18 cm. Ogni puntone ha un intaglio a becco di flauto (bocca di lupo) per appoggiare sul dormiente e un taglio in piombo al colmo. I tetti tagliati in opera richiedono più manodopera rispetto ai tetti con capriate ma consentono il pieno utilizzo del sottotetto per locali abitabili senza le ostruzioni create dai diagonali delle capriate. Il legname per puntoni costa circa 5–14 € al metro presso i rivenditori edili italiani. L'ingegnere strutturista o le tabelle PROMO LEGNO e dell'Eurocodice 5 devono essere consultati per verificare la sezione del puntone per la specifica luce, pendenza e carico neve/vento del sito.",
  nextSteps: [
    { label: "Calcolatore Trave di Colmo", href: "/calculators/roofing/ridge-board-calculator/" },
    { label: "Calcolatore Capriate", href: "/calculators/roofing/truss-calculator/" },
    { label: "Calcolatore Tavolato di Copertura", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Tagliare un puntone campione e usarlo come sagoma per tutti gli altri.",
    "L'intaglio a bocca di lupo non deve essere più profondo di un terzo dell'altezza del puntone.",
    "Fissare i puntoni al dormiente con squadrette metalliche o chiodatura inclinata.",
    "Installare catene o tiranti a ogni terzo paio di puntoni (o come specificato) per resistere alla spinta orizzontale.",
    "Verificare il carico neve di zona prima del dimensionamento definitivo.",
  ],
  commonMistakes: [
    "Intaglio a bocca di lupo troppo profondo, indebolendo il puntone nel punto più critico.",
    "Non prevedere un vincolo adeguato al dormiente, permettendo ai puntoni di divaricarsi sotto carico.",
    "Utilizzare puntoni sottodimensionati per la luce e la pendenza — verificare sempre le tabelle di luce.",
    "Non considerare il carico neve specifico della zona (la neve può variare enormemente tra pianura e montagna in Italia).",
    "Omettere i tiranti o le catene, causando lo spanciamento delle pareti.",
  ],
  faqs: [
    { question: "Quale sezione serve per i puntoni?", answer: "La sezione dipende da luce, pendenza, interasse, classificazione del legname e carico. Come guida: puntoni C24 da 6×16 cm a interasse 40 cm coprono circa 3,0 m su pendenza di 30°. Verificare le tabelle dell'Eurocodice 5 o PROMO LEGNO per le condizioni specifiche." },
    { question: "Meglio tetto tagliato in opera o con capriate?", answer: "I tetti con capriate sono più rapidi e meno costosi per le configurazioni standard. I tetti tagliati in opera sono preferiti quando si desidera un sottotetto abitabile (mansarde) o geometrie complesse del tetto. Il tetto tagliato in opera consente il pieno utilizzo del volume sottotetto." },
    { question: "Cos'è l'intaglio a bocca di lupo?", answer: "La bocca di lupo è un intaglio a V nella parte inferiore del puntone dove appoggia sul dormiente. Fornisce una superficie di appoggio piana. L'intaglio non deve superare un terzo dell'altezza del puntone per mantenere l'integrità strutturale." },
    { question: "Servono catene o tiranti con i puntoni?", answer: "Sì. Le catene (o tiranti) collegano i puntoni opposti in un punto sopra il livello del soffitto per impedire al tetto di divaricarsi. Sono tipicamente necessarie a ogni terzo paio di puntoni, o come specificato dall'ingegnere strutturista." },
    { question: "Come si fissano i puntoni al dormiente?", answer: "Utilizzare squadrette metalliche zincate (tipo Simpson Strong-Tie o Rothoblaas) chiodate sia al puntone che al dormiente. In alternativa chiodatura inclinata con 3 chiodi (2 da un lato, 1 dall'altro). Le NTC 2018 richiedono un collegamento positivo per resistere alle forze di sollevamento." },
    { question: "Quanto costano i puntoni?", answer: "Il legname C24 per puntoni costa circa 5–14 € al metro a seconda della sezione. Per una tipica villetta bifamiliare con 20–30 puntoni da 3–4 m ciascuno, preventivare 400–1.000 € per il solo legname dei puntoni." },
  ],
};

export const ridgeBoardCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la lunghezza totale del colmo del tetto in metri.",
    "Selezionare l'altezza della tavola (deve essere almeno pari al taglio in piombo del puntone).",
    "Inserire la lunghezza standard delle tavole.",
    "Fare clic su Calcola Materiali per ottenere il conteggio delle tavole.",
  ],
  materialInfo:
    "La trave di colmo è l'elemento orizzontale all'apice di un tetto tagliato in opera, che corre per l'intera lunghezza del colmo. I puntoni di ciascun lato del tetto sono chiodati alla trave di colmo, che li mantiene allineati e fornisce una superficie di fissaggio. Nell'edilizia italiana la trave di colmo è tipicamente spessa 25 mm o 38 mm e alta almeno quanto il taglio in piombo del puntone — comunemente 6×16 cm o 6×20 cm in legname C16 o C24. La trave di colmo non è strutturale in un tetto a coppie convenzionale (i puntoni e i tiranti del soffitto formano il triangolo strutturale), ma è essenziale per l'allineamento e funge da distanziatore. Per i tetti con arcarecci e puntoni potrebbe essere necessaria una trave di colmo strutturale — un elemento molto più grande progettato per portare i carichi del tetto, dimensionato dall'ingegnere strutturista. Il legname per la trave di colmo costa 6–15 € al metro presso i rivenditori edili italiani. I giunti nella trave di colmo devono essere a sciarpa o testa a testa in corrispondenza di un puntone.",
  nextSteps: [
    { label: "Calcolatore Puntoni", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Calcolatore Tavolato di Copertura", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calcolatore Capriate", href: "/calculators/roofing/truss-calculator/" },
  ],
  installationTips: [
    "Sostenere provvisoriamente la trave di colmo all'altezza corretta prima di fissare i puntoni.",
    "Chiodare ogni puntone alla trave di colmo con almeno 3 chiodi.",
    "Verificare che il colmo sia in bolla e dritto prima di completare l'installazione dei puntoni.",
    "Giuntare le travi di colmo in corrispondenza dei puntoni per un appoggio adeguato.",
    "Proteggere la trave di colmo dall'umidità durante la costruzione con teli temporanei.",
  ],
  commonMistakes: [
    "Utilizzare una trave di colmo troppo bassa — deve essere almeno pari all'altezza del taglio in piombo del puntone per un appoggio completo.",
    "Non sostenere il colmo durante la costruzione, permettendogli di abbassarsi prima che i puntoni siano fissati.",
    "Confondere una trave di colmo con una trave di colmo strutturale — hanno funzioni diverse.",
    "Non prevedere giunti sovrapposti o piastre di collegamento nei punti di giunzione.",
    "Utilizzare legname umido che si ritirerà e creerà giochi nei collegamenti.",
  ],
  faqs: [
    { question: "Quale sezione serve per la trave di colmo?", answer: "La trave di colmo deve essere almeno alta quanto il taglio in piombo del puntone. Per puntoni da 6×16 cm con pendenza di 40°, il taglio in piombo è circa 12 cm, quindi una trave di colmo da 6×16 cm è adeguata." },
    { question: "La trave di colmo è strutturale?", answer: "In un tetto a coppie convenzionale con tiranti di soffitto, la trave di colmo non è strutturale — allinea i puntoni. In un tetto con arcarecci senza tiranti, serve una trave di colmo strutturale per resistere alla spinta orizzontale dei puntoni." },
    { question: "Come si giuntano le travi di colmo?", answer: "Le giunzioni testa a testa devono cadere in corrispondenza di un puntone ed essere fissate con una piastra in compensato o connettore metallico su entrambi i lati. Il giunto deve essere rigido per prevenire l'abbassamento." },
    { question: "Si può usare una trave di colmo in acciaio?", answer: "Sì. Le travi di colmo in acciaio (profili HEA o IPE) si usano per le mansarde a pianta aperta dove non è possibile usare tiranti. La trave in acciaio porta l'intero carico del tetto e deve essere progettata da un ingegnere strutturista." },
    { question: "Quanto costa la trave di colmo?", answer: "Il legname per la trave di colmo costa 6–15 € al metro in C16/C24. Un tipico colmo da 8 m necessita di 2 tavole da 4,80 m, con un costo di 60–150 € in totale." },
    { question: "I tetti con capriate hanno la trave di colmo?", answer: "No. I tetti con capriate non utilizzano la trave di colmo. Le capriate sono collegate all'apice dalle piastre chiodate metalliche e sono controventate longitudinalmente dalla controventatura diagonale e longitudinale secondo le specifiche del produttore." },
  ],
};

export const roofSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie del tetto in metri quadrati (o usare il calcolatore superficie tetto per convertire dalle dimensioni in pianta).",
    "Selezionare la dimensione del pannello (120×240 cm è standard).",
    "Specificare lo spessore desiderato.",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei pannelli.",
  ],
  materialInfo:
    "Il tavolato di copertura fornisce un piano continuo su cui vengono fissati la guaina sottotegola e i listelli. Nella copertura tradizionale italiana i listelli portategole sono fissati direttamente ai puntoni sopra una membrana traspirante, senza tavolato. Tuttavia il tavolato è sempre più utilizzato nelle costruzioni in legno, per i tetti piani e dove il manto di copertura richiede un piano pieno. L'OSB/3 è il materiale di tavolato più comune, in spessori di 9 mm o 11 mm. Anche il compensato è utilizzato dove serve maggiore resistenza all'umidità. Ogni pannello da 120×240 cm copre 2,88 m². La superficie reale del tetto è maggiore dell'impronta a terra a causa della pendenza — moltiplicare l'area in pianta per il coefficiente di pendenza (ad es. 1,118 per un tetto a 30°). Il tavolato è chiodato ai puntoni con chiodi ad anello da 50 mm a interasse 15 cm ai bordi e 30 cm nel campo. I prezzi variano da 10–22 € per pannello presso i rivenditori edili italiani. Marchi di riferimento: Kronospan, Egger, Swiss Krono.",
  nextSteps: [
    { label: "Calcolatore Superficie Tetto", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Calcolatore Guaina Sottotegola", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calcolatore Tegole", href: "/calculators/roofing/shingle-calculator/" },
  ],
  installationTips: [
    "Iniziare il tavolato dalla gronda e procedere verso il colmo, sfalsando i giunti di almeno 60 cm tra le file.",
    "Lasciare uno spazio di 3 mm tra i pannelli per la dilatazione igroscopica.",
    "Chiodare a 15 cm lungo i bordi e 30 cm nel campo con chiodi ad anello.",
    "Assicurarsi che tutti i bordi dei pannelli siano supportati da puntoni o traversi.",
    "In zona neve verificare che lo spessore del tavolato sia adeguato al carico previsto.",
  ],
  commonMistakes: [
    "Non tenere conto del coefficiente di pendenza nel calcolo della superficie del tetto — un tetto a 45° ha il 41 % di superficie in più dell'impronta a terra.",
    "Non sfalsare i giunti tra le file, creando una linea debole attraverso il tetto.",
    "Utilizzare OSB/2 non strutturale al posto dell'OSB/3 per il tavolato di copertura.",
    "Non prevedere la ventilazione sottotegola quando richiesta dalla stratigrafia.",
    "Posare il tavolato con i giunti non supportati dai puntoni.",
  ],
  faqs: [
    { question: "I tetti italiani hanno bisogno del tavolato?", answer: "I tetti tradizionali a tegole su listelli non necessitano di tavolato. Tuttavia il tavolato è utilizzato per le costruzioni in legno, i tetti piani e dove il manto di copertura richiede un piano pieno (ad es. tegole bituminose canadesi, membrane monostrato)." },
    { question: "Quale spessore per il tavolato di copertura?", answer: "L'OSB/3 da 9 mm è tipico per il tavolato su puntoni a interasse di 40 cm. Per interasse di 60 cm usare 11 mm. Per tetti piani lo standard è 18 mm." },
    { question: "Come si calcola la superficie reale del tetto?", answer: "Moltiplicare la superficie in pianta per il coefficiente di pendenza dalla tabella delle pendenze. Per una pendenza di 30° il coefficiente è 1,155. Per 45° è 1,414." },
    { question: "Si può usare compensato al posto dell'OSB per il tavolato?", answer: "Sì. Il compensato per esterni fornisce migliore resistenza all'umidità dell'OSB ed è preferito per tetti piani e applicazioni ad alta umidità. Costa il 20–40 % in più dell'OSB." },
    { question: "Quanti pannelli per un tetto tipo?", answer: "Una tipica villetta bifamiliare ha circa 50–70 m² di superficie del tetto. A 2,88 m² per pannello più il 10 % di sfrido, servono circa 20–28 pannelli." },
    { question: "Serve la guaina sottotegola sopra il tavolato?", answer: "Sì. Una guaina sottotegola traspirante (come Rothoblaas Traspir EVO o Tyvek Supro) deve essere installata sopra il tavolato prima di fissare i listelli portategole. Fornisce una barriera secondaria e permette al vapore acqueo di uscire dalla struttura del tetto." },
  ],
};

export const shingleCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale del tetto in metri quadrati.",
    "Selezionare il tipo di tegola.",
    "Specificare il formato del pacco.",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei pacchi.",
  ],
  materialInfo:
    "Le tegole bituminose (canadesi) sono un materiale di copertura leggero e conveniente utilizzato su tetti a falda con tavolato pieno. Sebbene meno comuni delle tegole in laterizio in Italia, sono popolari per edifici di servizio, garage, ampliamenti, casette da giardino e case in legno. Le tegole sono vendute in pacchi, con ogni pacco che copre circa 2,32 m² per tegole standard a 3 linguette. Le tegole architettoniche (dimensionali) hanno copertura simile ma offrono un aspetto più spesso e texturizzato. La pendenza minima per le tegole è circa 15° (circa 3:12), sebbene 20° o più siano raccomandati. Le tegole richiedono un tavolato pieno in OSB o compensato con guaina sottotegola adeguata. In Italia marchi come IKO, Tegola Canadese, Onduline e CertainTeed sono disponibili presso rivenditori specializzati di coperture. I prezzi variano da 15 € a 45 € per pacco a seconda della qualità e dello stile. La durata delle tegole architettoniche è di 25–40 anni. Le tegole standard a 3 linguette durano 15–20 anni. Per le installazioni in Italia assicurare la conformità alla UNI EN 544 per tegole bituminose.",
  nextSteps: [
    { label: "Calcolatore Guaina Sottotegola", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calcolatore Superficie Tetto", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Calcolatore Gocciolatoio", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: [
    "Installare le tegole su un tavolato pieno con guaina sottotegola già posata.",
    "Iniziare dalla gronda con una striscia di partenza e procedere verso l'alto con corsi sovrapposti.",
    "Utilizzare 4 chiodi per tegola (6 in zone ventose) posizionati secondo la zona di chiodatura del produttore.",
    "Sfalsare ogni corso di mezza linguetta per impedire all'acqua di penetrare attraverso i giunti allineati.",
    "Verificare la pendenza minima prima della posa — le tegole non sono adatte per tetti troppo dolci.",
  ],
  commonMistakes: [
    "Installare tegole su un tetto con pendenza troppo bassa — minimo 15° per la maggior parte dei prodotti.",
    "Utilizzare troppi pochi chiodi per tegola, consentendo il sollevamento da vento.",
    "Non sfalsare i corsi, permettendo all'acqua di penetrare attraverso giunti allineati.",
    "Non prevedere la ventilazione del sottotetto richiesta dalle specifiche del produttore.",
    "Posare le tegole a temperature troppo basse (sotto 5 °C) compromettendo l'adesione termica.",
  ],
  faqs: [
    { question: "Le tegole bituminose sono adatte ai tetti italiani?", answer: "Sì. Le tegole bituminose sono approvate per l'uso su tetti a falda in Italia e sono particolarmente diffuse per edifici di servizio, garage e ampliamenti. Richiedono un tavolato pieno e guaina sottotegola adeguata. Assicurare la conformità alla UNI EN 544." },
    { question: "Quanti pacchi per metro quadrato?", answer: "Un pacco copre circa 2,32 m². Per 50 m² di superficie del tetto servono circa 22 pacchi più il 10–15 % di sfrido, quindi ordinare 24–26 pacchi." },
    { question: "Qual è la pendenza minima per le tegole?", answer: "La pendenza minima per le tegole bituminose è circa 15° (circa 3:12). Al di sotto l'acqua non scorre abbastanza velocemente e può essere spinta sotto le tegole dal vento. Una guaina integrale tipo Ice & Water Shield estende il minimo a circa 10° per alcuni prodotti." },
    { question: "Quanto durano le tegole bituminose?", answer: "Le tegole architettoniche durano tipicamente 25–40 anni. Le tegole standard a 3 linguette durano 15–20 anni. La durata dipende dalla qualità, dall'installazione, dalla ventilazione e dall'esposizione agli agenti atmosferici." },
    { question: "Si possono installare tegole nuove sopra quelle vecchie?", answer: "In alcuni casi è possibile installare un nuovo strato di tegole sopra quello esistente. Tuttavia la prassi migliore è rimuovere il vecchio manto per ispezionare il tavolato. Il Direttore Lavori può richiedere la rimozione completa per motivi strutturali e di sicurezza antincendio." },
    { question: "Dove si acquistano le tegole bituminose in Italia?", answer: "Le tegole bituminose sono disponibili presso rivenditori specializzati di coperture, Bricoman, Leroy Merlin e fornitori online. Tegola Canadese e IKO sono i marchi più diffusi in Italia." },
  ],
};

export const underlaymentCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale del tetto in metri quadrati.",
    "Selezionare il tipo di guaina: membrana traspirante o cartonfeltro tradizionale.",
    "Specificare la larghezza del rotolo.",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei rotoli, tenendo conto della sovrapposizione.",
  ],
  materialInfo:
    "La guaina sottotegola è uno strato resistente alle intemperie installato sotto il manto di copertura (tegole, coppi o tegole bituminose) per fornire una barriera secondaria contro pioggia, neve e umidità trasportata dal vento. Nell'edilizia italiana le membrane traspiranti (come Rothoblaas Traspir EVO, Tyvek Supro o Dörken Delta-Vent S) hanno in gran parte sostituito il cartonfeltro bituminoso tradizionale perché permettono al vapore acqueo di uscire dalla struttura del tetto, riducendo il rischio di condensa e marciume. Le membrane traspiranti sono specificate nel DM 26/06/2015 e sono essenziali dove l'isolamento è posato a livello dei puntoni (tetto caldo). I rotoli hanno tipicamente larghezza di 1,0 m o 1,5 m e lunghezza di 50 m, coprendo 50–75 m² per rotolo prima delle deduzioni per sovrapposizione. Le sovrapposizioni orizzontali standard sono di 10–15 cm e quelle verticali di 15 cm. La guaina è posata sui puntoni con un leggero allentamento (non tesa) e fissata con controlistelli. I prezzi variano da 35 € a 120 € per rotolo a seconda del prodotto. La UNI EN 13859-1 disciplina le specifiche della guaina sottotegola in Italia.",
  nextSteps: [
    { label: "Calcolatore Tegole", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calcolatore Tavolato di Copertura", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calcolatore Gocciolatoio", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: [
    "Iniziare dalla gronda e procedere verso l'alto, assicurandosi che ogni corso sovrapponga quello sottostante di 10–15 cm.",
    "Permettere un leggero allentamento tra i puntoni — non tirare la membrana.",
    "Fissare con controlistelli lungo la linea dei puntoni, poi listelli portategole orizzontali.",
    "Sigillare intorno alle penetrazioni del tetto (tubi, sfiati) con nastro sigillante proprietario.",
    "Non lasciare la membrana esposta troppo a lungo prima della posa del manto — verificare la resistenza UV del prodotto.",
  ],
  commonMistakes: [
    "Tirare la membrana tesa tra i puntoni — necessita di un leggero allentamento per convogliare l'acqua alla gronda.",
    "Utilizzare cartonfeltro non traspirante dove è specificata la membrana traspirante, intrappolando umidità nella struttura del tetto.",
    "Sovrapposizione insufficiente ai giunti, permettendo alla pioggia battente di penetrare.",
    "Non rispettare la sequenza di posa (dal basso verso l'alto) compromettendo lo scorrimento dell'acqua.",
    "Lasciare la membrana esposta ai raggi UV oltre il tempo specificato dal produttore.",
  ],
  faqs: [
    { question: "Serve guaina traspirante o non traspirante?", answer: "La membrana traspirante è raccomandata per praticamente tutti i tetti moderni in Italia. È obbligatoria dove l'isolamento è posato tra o sopra i puntoni (tetto caldo). Il cartonfeltro tradizionale non traspirante può essere usato nei tetti freddi con adeguata ventilazione del sottotetto, ma la membrana traspirante è preferita perché riduce il rischio di condensa." },
    { question: "Quanti rotoli per un tetto tipo?", answer: "Una tipica villetta bifamiliare ha 50–70 m² di superficie del tetto. Con un rotolo da 1,5 m × 50 m che copre 75 m² lordi (circa 55–60 m² netti dopo le sovrapposizioni), un rotolo è spesso sufficiente per una bifamiliare. Per una villetta indipendente preventivare 2 rotoli." },
    { question: "Qual è la sovrapposizione per la guaina sottotegola?", answer: "Le sovrapposizioni orizzontali (laterali) devono essere di 10–15 cm. Le sovrapposizioni verticali (di testa) devono essere di 15 cm, cadendo su una linea di puntoni. Al colmo e ai displuviali la guaina deve estendersi di almeno 15 cm sulla falda opposta." },
    { question: "Si può usare il cartonfeltro al posto della membrana traspirante?", answer: "Il cartonfeltro bituminoso tradizionale può essere usato per tetti freddi con ventilazione adeguata del sottotetto (ventilazione incrociata alla gronda e colmo ventilato continuo). Tuttavia le membrane traspiranti sono ormai la scelta predefinita perché offrono una migliore gestione dell'umidità senza dipendere dalla ventilazione." },
    { question: "Quanto costa la guaina sottotegola?", answer: "Le membrane traspiranti costano 35–120 € per rotolo (50 m) a seconda della qualità e del marchio. I prodotti economici partono da 35 €; i prodotti premium (Rothoblaas, Tyvek Supro) costano 70–120 €. Per una tipica villetta indipendente la guaina costa 70–250 € in totale." },
    { question: "La guaina sottotegola è obbligatoria per legge?", answer: "La UNI EN 13859-1 e le NTC 2018 richiedono una guaina sottotegola sotto il manto di copertura per tutti i tetti a falda. Il tipo di guaina deve essere specificato in base alla progettazione del tetto (caldo o freddo, ventilato o non ventilato)." },
  ],
};

export const dripEdgeCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Misurare la lunghezza totale delle gronde e dei frontoni in metri.",
    "Inserire la lunghezza standard della scossalina (tipicamente 2,0 m o 3,0 m).",
    "Specificare il materiale desiderato (alluminio, acciaio zincato, rame).",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei pezzi.",
  ],
  materialInfo:
    "Il gocciolatoio (o scossalina di gronda) è un profilo metallico a L installato ai bordi del tetto per dirigere l'acqua lontano dalla fascia di gronda e nella grondaia. Nell'edilizia italiana i gocciolatoi sono tipicamente in acciaio zincato preverniciato, alluminio o rame, disponibili in barre da 2,0 m o 3,0 m. Sono essenziali per impedire all'acqua di risalire sotto il manto di copertura e causare il marciume della fascia di gronda e delle teste dei puntoni. I gocciolatoi si installano sotto la guaina sottotegola alla gronda e sopra la guaina ai frontoni (timpani). I profili standard costano 3–12 € per barra presso rivenditori edili, ferramenta e centri lattoneria. I gocciolatoi in rame costano notevolmente di più ma sono molto apprezzati nell'architettura italiana tradizionale. Per tetti con tegole bituminose su tavolato piano si usa un profilo con sezione a T che trattiene il bordo del manto e dirige l'acqua pulitamente nella grondaia. Per i tetti tradizionali con tegole in laterizio il profilo di gronda è spesso integrato nel sistema di grondaia.",
  nextSteps: [
    { label: "Calcolatore Tegole", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calcolatore Guaina Sottotegola", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calcolatore Superficie Tetto", href: "/calculators/roofing/roof-area-calculator/" },
  ],
  installationTips: [
    "Installare il gocciolatoio alla gronda sotto la guaina sottotegola in modo che l'acqua scorra dalla guaina sul gocciolatoio e nella grondaia.",
    "Installare il gocciolatoio ai frontoni sopra la guaina in modo che la pioggia battente non possa penetrare sotto.",
    "Sovrapporre i giunti di almeno 5 cm nella direzione del deflusso dell'acqua.",
    "Fissare con chiodi o viti a interasse di 30 cm.",
    "Nei climi marini utilizzare acciaio inox o rame per resistere alla corrosione salina.",
  ],
  commonMistakes: [
    "Omettere i gocciolatoi — l'acqua risale sotto le tegole e marcisce la fascia di gronda.",
    "Installare il gocciolatoio alla gronda sopra la guaina invece che sotto.",
    "Non sovrapporre i giunti nella direzione del deflusso dell'acqua, creando punti di ingresso per l'acqua.",
    "Utilizzare acciaio non trattato in zona costiera, dove la corrosione è rapida.",
    "Non prevedere il gocciolatoio ai frontoni, esponendo il tavolato laterale all'acqua.",
  ],
  faqs: [
    { question: "I gocciolatoi sono obbligatori sui tetti italiani?", answer: "I gocciolatoi sono prassi consolidata e sono specificati nelle norme UNI per la posa delle coperture. Impediscono danni da acqua alla fascia di gronda e alle teste dei puntoni. Sebbene non sempre esplicitamente richiesti dalle NTC 2018, i Direttori Lavori li considerano obbligatori." },
    { question: "Quale materiale per i gocciolatoi?", answer: "Acciaio zincato preverniciato e alluminio sono i più comuni. Il rame è utilizzato su progetti di pregio e nell'architettura storica italiana. Il PVC è disponibile per applicazioni economiche ma è meno durevole." },
    { question: "Quanti pezzi di gocciolatoio per un tetto tipo?", answer: "Misurare la lunghezza totale delle gronde (entrambi i lati) più la lunghezza dei frontoni (entrambi i timpani). Per un tipico tetto da 8×5 m, le gronde totali sono 16 m e i frontoni 10 m = 26 m. Con pezzi da 2,0 m servono 13 pezzi più il 10 % di sfrido = 15 pezzi." },
    { question: "Servono i gocciolatoi con le grondaie?", answer: "Sì. Gocciolatoi e grondaie lavorano insieme. Il gocciolatoio dirige l'acqua dal bordo del tetto nella grondaia, impedendole di scorrere lungo la faccia della fascia. Senza gocciolatoio l'acqua può risalire dietro la grondaia." },
    { question: "Come si taglia il gocciolatoio a misura?", answer: "Utilizzare cesoie per lamiera per acciaio zincato e alluminio. Per il rame usare un coltello affilato o troncatrici per rame. Indossare sempre guanti quando si maneggiano bordi metallici tagliati." },
    { question: "Dove si acquistano i gocciolatoi in Italia?", answer: "I profili gocciolatoio sono disponibili presso lattonerie, rivenditori edili, Bricoman, Leroy Merlin e centri specializzati in coperture. I gocciolatoi in rame sono disponibili presso fornitori specializzati e lattonerie artigianali." },
  ],
};

export const roofPitchCalculator: CalculatorSEOContent = {
  disclaimer: "Questo calcolatore fornisce risultati geometrici. I requisiti strutturali dipendono da carico, luce e materiale — consultare un ingegnere strutturista.",
  howToUse: [
    "Inserire l'alzata del tetto (altezza verticale) in metri o centimetri.",
    "Inserire la proiezione orizzontale in metri o centimetri.",
    "Specificare l'unità di misura desiderata per il risultato.",
    "Fare clic su Calcola Materiali per ottenere l'angolo di pendenza, la percentuale e il coefficiente d'area.",
  ],
  materialInfo:
    "La pendenza del tetto è l'angolo della falda, espressa come rapporto, angolo in gradi o percentuale. In Italia la pendenza è tipicamente espressa in gradi (ad es. 30°, 40°, 45°) o in percentuale. La pendenza determina quali materiali di copertura possono essere utilizzati, la velocità di deflusso dell'acqua e della neve e quanto spazio sottotetto utilizzabile è disponibile. Le norme UNI e le specifiche dei produttori indicano le pendenze minime per i diversi materiali: i coppi richiedono un minimo di circa 30°, le tegole in laterizio marsigliesi tipicamente 17°–22° minimo e le tegole in ardesia 20°–25° a seconda delle dimensioni e dell'esposizione. La pendenza influisce anche sulla superficie reale del tetto — un tetto a 45° ha il 41,4 % di superficie in più dell'impronta a terra, il che aumenta direttamente le quantità di materiale e il costo. La maggior parte dei tetti residenziali italiani ha pendenza tra 25° e 40°. Pendenze più ripide (oltre 45°) si trovano nell'architettura alpina, gotica e in alcune dimore storiche. I tetti piani (sotto 10°) richiedono membrane o coperture multistrato e devono avere pendenze adeguate per il drenaggio. La comprensione della pendenza del tetto è essenziale per un ordine accurato dei materiali.",
  nextSteps: [
    { label: "Calcolatore Superficie Tetto", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Calcolatore Inclinazione Tetto", href: "/calculators/roofing/roof-slope-calculator/" },
    { label: "Calcolatore Puntoni", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Misurare sempre la pendenza dall'interno del sottotetto per la lettura più accurata.",
    "Utilizzare un goniometro digitale o una livella a bolla con metro a nastro.",
    "Registrare la pendenza in gradi per specificare i materiali e verificare i requisiti UNI.",
    "Applicare il coefficiente d'area all'impronta per ottenere la superficie reale del tetto per l'ordine dei materiali.",
    "Tenere conto del carico neve di zona (UNI EN 1991-1-3) che varia con la pendenza.",
  ],
  commonMistakes: [
    "Stimare la pendenza a occhio — misurare sempre con precisione, perché un errore di 5° influisce significativamente sulle quantità di materiale.",
    "Confondere gradi con la notazione alzata:proiezione quando si leggono specifiche di prodotti americani.",
    "Non applicare il coefficiente di pendenza quando si ordinano i materiali, causando quantità insufficienti.",
    "Non verificare il carico neve per la pendenza e la zona specifica.",
    "Confondere pendenza con inclinazione in percentuale nei calcoli.",
  ],
  faqs: [
    { question: "Qual è la pendenza del tetto più comune in Italia?", answer: "La maggior parte dei tetti residenziali italiani ha pendenza tra 25° e 40°, con 30°–35° come intervallo più comune. Questa pendenza è adatta alla maggior parte dei prodotti in laterizio e ardesia e offre un buon drenaggio nel clima italiano. Nelle zone alpine le pendenze possono superare 45° per lo smaltimento della neve." },
    { question: "Come si misura la pendenza del tetto?", answer: "Dall'interno del sottotetto, posizionare una livella a bolla orizzontalmente contro un puntone e misurare 30 cm lungo la livella. Poi misurare la distanza verticale da quel punto al puntone. La pendenza in gradi è arctan(verticale/orizzontale). In alternativa usare un goniometro digitale posato direttamente sul puntone." },
    { question: "Qual è la pendenza minima per le tegole in laterizio?", answer: "I coppi richiedono una pendenza minima di circa 30°. Le tegole marsigliesi in calcestruzzo necessitano tipicamente di 17°–22° minimo. Le tegole in ardesia necessitano di 20°–25° a seconda della dimensione e dell'esposizione. Verificare sempre le specifiche del produttore." },
    { question: "La pendenza del tetto influisce sui permessi edilizi?", answer: "La pendenza del tetto può influire sulle altezze massime consentite dal piano regolatore e sulla volumetria. Modificare la pendenza di un tetto esistente o costruire un tetto con pendenza atipica può richiedere un permesso di costruire o una SCIA. Verificare con il proprio Comune." },
    { question: "Come influisce la pendenza sullo spazio sottotetto?", answer: "Pendenze maggiori creano più spazio sottotetto utilizzabile. Una pendenza di 45° fornisce molto più volume abitabile di una pendenza di 30°. Per le mansarde (recupero sottotetti) una pendenza di 35° o superiore è generalmente necessaria per ottenere un'altezza media utile di 2,40 m (requisito del DM 236/89 e regolamenti regionali)." },
    { question: "Quale pendenza per un tetto piano?", answer: "I tetti piani italiani non sono mai veramente piani — devono avere una pendenza minima dell'1 % (circa 0,6°) per il drenaggio, con il 2 % (circa 1,1°) raccomandato dalla maggior parte dei produttori di membrane. Questo assicura che l'acqua defluisca verso i pluviali e non ristagni sulla superficie." },
  ],
};

export const roofAreaCalculator: CalculatorSEOContent = {
  disclaimer: "Questo calcolatore fornisce la superficie geometrica del tetto. Prevedere materiale extra per sfrido, colmo, displuviali e compluvi.",
  howToUse: [
    "Inserire la lunghezza e la larghezza dell'impronta dell'edificio in metri.",
    "Inserire la pendenza del tetto in gradi.",
    "Specificare il tipo di tetto (a falde, a padiglione, ecc.).",
    "Fare clic su Calcola Materiali per ottenere la superficie reale del tetto in metri quadrati.",
  ],
  materialInfo:
    "La superficie reale del tetto è sempre maggiore dell'impronta dell'edificio perché la pendenza aumenta l'area della superficie. Un tetto a 30° ha circa il 15,5 % di area in più dell'impronta, mentre un tetto a 45° ha il 41,4 % in più. Conoscere la superficie accurata del tetto è essenziale per ordinare le quantità corrette di tegole, coppi, guaina, listelli e fissaggi. Per tetti con forme complesse (padiglioni, compluvi, abbaini), suddividere il tetto in sezioni geometriche semplici, calcolare ciascuna separatamente e sommarle. Sono necessarie maggiorazioni di materiale aggiuntive per colmi (tipicamente 3 pezzi al metro), displuviali (3–5 pezzi al metro a seconda del prodotto) e compluvi (2–4 pezzi al metro). Preventivare il 5–10 % di sfrido per tetti a capanna semplici e il 10–15 % per tetti complessi con più displuviali, compluvi e abbaini. I produttori italiani di tegole forniscono le rese per m² per ogni prodotto — queste tengono conto di sovrapposizioni e passo ma non dello sfrido.",
  nextSteps: [
    { label: "Calcolatore Pendenza Tetto", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Calcolatore Tegole", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calcolatore Tavolato di Copertura", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Misurare l'impronta dal livello del terreno, poi applicare il coefficiente di pendenza per la superficie reale.",
    "Per tetti a padiglione e con compluvi calcolare ogni sezione triangolare o trapezoidale separatamente.",
    "Aggiungere le maggiorazioni per tegole di colmo, displuvio e compluvio separatamente dalla superficie principale.",
    "Utilizzare la resa del produttore (pezzi per m²) per convertire la superficie in conteggio tegole.",
    "Per i tetti in laterizio tradizionale italiano (coppi e canali) tenere conto della doppia fila di elementi.",
  ],
  commonMistakes: [
    "Utilizzare la superficie dell'impronta invece della superficie reale inclinata, causando mancanze significative di materiale.",
    "Non tenere conto di displuviali e compluvi, che richiedono materiali aggiuntivi e generano più sfrido.",
    "Dimenticare di aggiungere il fattore di sfrido sopra al calcolo della superficie reale.",
    "Non considerare le tegole speciali (colmo, laterali, partenza) nell'ordine.",
    "Sottovalutare lo sfrido per tetti complessi con molti tagli obliqui.",
  ],
  faqs: [
    { question: "Come si calcola la superficie reale del tetto dall'impronta?", answer: "Moltiplicare la superficie dell'impronta per il coefficiente di pendenza. Per una pendenza di 30° moltiplicare per 1,155. Per 45° moltiplicare per 1,414. Il coefficiente è 1/cos(angolo di pendenza). Un'impronta di 100 m² a 35° dà 100 × 1,221 = 122,1 m² di superficie reale del tetto." },
    { question: "Quante tegole per metro quadrato?", answer: "Varia per tipo di tegola. Coppi in laterizio: circa 12–14 coppie per m² (con canale). Tegole marsigliesi in calcestruzzo: circa 10 per m². Tegole in ardesia: 20–30 per m² a seconda della dimensione. Verificare sempre le specifiche del produttore per la resa esatta." },
    { question: "Come si gestiscono gli abbaini?", answer: "Gli abbaini aggiungono superficie (il tetto dell'abbaino stesso) ma rimuovono superficie dal tetto principale dove l'abbaino è inserito. Per abbaini piccoli queste aree si compensano approssimativamente. Per abbaini grandi calcolare la superficie del tetto dell'abbaino separatamente e aggiungerla alla superficie del tetto principale meno l'impronta del tetto sopra l'abbaino." },
    { question: "Come si misura la superficie del tetto dal livello del terreno?", answer: "Misurare l'impronta dell'edificio (lunghezza e larghezza) e determinare la pendenza del tetto (dall'interno del sottotetto o con un clinometro dal terreno). Applicare il coefficiente di pendenza per convertire l'impronta in superficie reale. Per una precisione entro il 5 % questo metodo è adeguato per l'ordine dei materiali." },
    { question: "Serve materiale extra per colmo e displuviali?", answer: "Sì. Le tegole di colmo, displuvio e compluvio si ordinano separatamente dalle tegole di campo. Preventivare 3 tegole di colmo per metro di colmo, 3–5 tegole per metro di displuvio e prevedere canali di compluvio o sistemi a secco per ogni compluvio." },
    { question: "Cos'è un 'quadrato di copertura'?", answer: "Il 'roofing square' è un'unità americana pari a 100 piedi quadrati (9,29 m²). Non è comunemente usata in Italia, dove i materiali si ordinano per m² o per pacco. Se un prodotto americano indica la copertura in 'square', moltiplicare per 9,29 per convertire in m²." },
  ],
};

export const roofSlopeCalculator: CalculatorSEOContent = {
  disclaimer: "Questo calcolatore fornisce valori geometrici. Verificare sempre l'idoneità del materiale con la specifica di pendenza minima del produttore.",
  howToUse: [
    "Inserire l'alzata e la proiezione del tetto nelle stesse unità (metri o centimetri).",
    "Specificare se si desidera il risultato in gradi, percentuale o rapporto.",
    "Fare clic su Calcola Materiali per ottenere la pendenza in gradi, la percentuale e il rapporto.",
    "Utilizzare il risultato per verificare l'idoneità del materiale di copertura scelto.",
  ],
  materialInfo:
    "L'inclinazione del tetto descrive la ripidità di un tetto e determina quali materiali di copertura sono appropriati, la velocità di deflusso dell'acqua e se il sottotetto è utilizzabile. In Italia l'inclinazione è tipicamente espressa in gradi, mentre in Nord America è espressa come rapporto (ad es. 6:12). La percentuale di inclinazione è (alzata/proiezione) × 100. Un tetto a 30° ha un'inclinazione del 57,7 % e un rapporto di circa 7:12. Diversi materiali di copertura hanno requisiti minimi di inclinazione diversi secondo la UNI EN 14437 e le specifiche dei produttori. I coppi richiedono circa 30° minimo. Le tegole marsigliesi richiedono 17°–22°. Le tegole in ardesia richiedono 20°–25°. Le tegole bituminose richiedono 15°. Le membrane monostrato possono essere usate fino a circa 1,5° con pendenze adeguate. L'inclinazione del tetto influisce anche sul carico del vento (tetti più ripidi intercettano più vento), sul carico neve (tetti più ripidi scaricano la neve più velocemente — importante in zona neve secondo UNI EN 1991-1-3) e sull'altezza disponibile nel sottotetto. Per il recupero sottotetti a fini abitativi una pendenza minima di circa 35° è generalmente necessaria per ottenere l'altezza media interna di 2,40 m richiesta dai regolamenti regionali.",
  nextSteps: [
    { label: "Calcolatore Pendenza Tetto", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Calcolatore Superficie Tetto", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Calcolatore Puntoni", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Misurare l'inclinazione dall'interno del sottotetto con livella a bolla e metro a nastro per la massima precisione.",
    "Registrare l'inclinazione in gradi per specificare i materiali di copertura secondo le norme UNI.",
    "Utilizzare l'inclinazione per verificare che il manto di copertura scelto soddisfi il requisito di pendenza minima.",
    "Applicare il coefficiente d'area per calcolare la superficie reale del tetto per l'ordine dei materiali.",
    "Verificare la zona neve (UNI EN 1991-1-3) per dimensionare correttamente la struttura.",
  ],
  commonMistakes: [
    "Specificare un materiale di copertura sotto la sua pendenza minima — questo invalida la garanzia e invita le infiltrazioni d'acqua.",
    "Confondere gradi con rapporti alzata:proiezione quando si interpretano schede tecniche di prodotti americani.",
    "Non verificare la pendenza minima per il prodotto specifico di tegola o ardesia utilizzato.",
    "Non tenere conto della differenza tra pendenza in gradi e percentuale nei calcoli.",
    "Dimenticare che la pendenza influisce sul carico neve utilizzato nel dimensionamento strutturale.",
  ],
  faqs: [
    { question: "Qual è la differenza tra pendenza e inclinazione?", answer: "Nella pratica italiana i termini sono spesso usati in modo intercambiabile ed entrambi espressi in gradi. Tecnicamente la pendenza è l'angolo del puntone dall'orizzontale (in gradi), e la percentuale di inclinazione è (alzata/proiezione) × 100. Una pendenza di 30° = 57,7 % di inclinazione." },
    { question: "Quanto può essere ripido un tetto?", answer: "Non c'è un limite superiore nelle normative, ma tetti sopra 50° sono inusuali nell'edilizia residenziale. Tetti molto ripidi (60°+) si trovano nei campanili, nelle torri e in alcuni edifici storici. Sopra circa 60° le tegole devono essere fissate meccanicamente per impedire lo scivolamento." },
    { question: "Qual è l'inclinazione minima per un tetto piano?", answer: "I tetti piani italiani devono avere una pendenza minima dell'1 % (circa 0,6°), con il 2 % (circa 1,1°) raccomandato dalla maggior parte dei produttori di membrane. Questo assicura che l'acqua defluisca ai pluviali anziché ristagnare sulla superficie." },
    { question: "L'inclinazione influisce sull'assicurazione?", answer: "Alcune compagnie assicurative possono applicare premi più elevati per tetti molto piani (maggior rischio di infiltrazioni) o molto ripidi (maggiori costi di riparazione e rischio vento). Le pendenze standard di 25°–40° attraggono tipicamente i premi più bassi." },
    { question: "Come si convertono i gradi in rapporto alzata:proiezione?", answer: "Rapporto alzata:proiezione = tan(angolo) × 12. Per un tetto a 30°: tan(30) = 0,577, quindi il rapporto è 0,577 × 12 = 6,93:12, ovvero circa 7:12. La maggior parte dei costruttori italiani lavora in gradi, quindi questa conversione serve principalmente quando si usano prodotti americani." },
    { question: "Quale pendenza per il massimo spazio sottotetto?", answer: "Una pendenza di 45° fornisce il massimo volume utilizzabile per una data impronta. Pendenze maggiori aggiungono altezza ma non larghezza. Per il recupero sottotetti 40°–45° è l'ideale, garantendo un'altezza media interna di 2,40 m+ su una superficie calpestabile adeguata." },
  ],
};

// ─── INVOLUCRO ESTERNO ──────────────────────────────────────────────────────

export const housewrapCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale delle pareti esterne in metri quadrati.",
    "Selezionare la larghezza del rotolo.",
    "Specificare il tipo di membrana (traspirante standard o ad alte prestazioni).",
    "Fare clic su Calcola Materiali per ottenere il conteggio dei rotoli, tenendo conto della sovrapposizione.",
  ],
  materialInfo:
    "La membrana traspirante (telo traspirante) è una barriera permeabile al vapore e resistente all'acqua installata sull'esterno delle pareti a telaio in legno, sotto il rivestimento esterno. La sua funzione è permettere al vapore acqueo di uscire dalla struttura della parete impedendo alla pioggia battente di penetrare. Nelle costruzioni in legno italiane la membrana traspirante è un componente critico specificato dal D.Lgs. 192/2005 (protezione dall'umidità) e dal DM 26/06/2015 (efficienza energetica). I marchi più diffusi in Italia includono Rothoblaas Traspir EVO, Tyvek (DuPont), Dörken Delta-Vent S e Pro Clima Solitex. La membrana è graffata al rivestimento o ai montanti e deve essere sovrapposta di almeno 10 cm orizzontalmente e 15 cm verticalmente, con i giunti sigillati con il nastro del produttore per la tenuta all'aria. Le larghezze dei rotoli variano: le più comuni sono 1,0 m, 1,5 m e 3,0 m, con lunghezze di 50 m o 100 m. I prezzi variano da 40 € a 140 € per rotolo a seconda della qualità e della dimensione. Per le case passive e gli edifici a basso consumo la membrana traspirante è spesso combinata con una strategia di nastri per la tenuta all'aria per raggiungere gli stringenti obiettivi di permeabilità all'aria.",
  nextSteps: [
    { label: "Calcolatore Rivestimento in PVC", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Calcolatore Rivestimento in Fibrocemento", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Calcolatore Nastro Impermeabile per Finestre", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Iniziare dalla parte inferiore della parete e procedere verso l'alto in modo che i corsi superiori sovrappongano quelli inferiori.",
    "Sovrapporre i giunti orizzontali di almeno 10 cm e quelli verticali di 15 cm.",
    "Nastrare tutti i giunti con il nastro compatibile del produttore per la tenuta all'aria.",
    "Rivoltare la membrana nelle aperture di finestre e porte per almeno 10 cm.",
    "Non lasciare la membrana esposta ai raggi UV per più di 2–4 mesi prima del rivestimento.",
  ],
  commonMistakes: [
    "Installare la membrana al contrario — verificare le istruzioni del produttore per l'orientamento corretto della faccia.",
    "Lasciare la membrana esposta troppo a lungo prima del rivestimento — l'esposizione UV degrada la maggior parte dei prodotti entro 2–4 mesi.",
    "Non nastrare i giunti, compromettendo la tenuta all'aria richiesta dal D.Lgs. 192/2005.",
    "Utilizzare nastro generico non compatibile con la membrana specifica.",
    "Non rivoltare la membrana nelle aperture di finestre e porte.",
  ],
  faqs: [
    { question: "La membrana traspirante è obbligatoria per legge?", answer: "Sì. Il D.Lgs. 192/2005 richiede protezione dall'umidità e il DM 26/06/2015 richiede un involucro edilizio a tenuta d'aria. La membrana traspirante soddisfa entrambi i requisiti nelle costruzioni a telaio in legno ed è attesa dal Direttore Lavori." },
    { question: "Qual è la differenza tra Rothoblaas Traspir EVO e Tyvek?", answer: "Entrambe sono membrane traspiranti di alta qualità. Tyvek (DuPont) è un prodotto in polietilene filato con eccellente permeabilità al vapore e durabilità. Rothoblaas Traspir EVO è un prodotto molto diffuso in Italia nelle costruzioni in legno, con ottima compatibilità con i nastri Rothoblaas. Entrambe sono conformi alla UNI EN 13859." },
    { question: "Per quanto tempo la membrana può restare esposta?", answer: "La maggior parte delle membrane traspiranti deve essere coperta con il rivestimento entro 2–4 mesi per prevenire il degrado UV. Alcuni prodotti (come Tyvek UV Façade) sono certificati per esposizione UV a lungo termine dietro rivestimenti a giunto aperto. Verificare la scheda tecnica del prodotto." },
    { question: "È necessario nastrare i giunti?", answer: "Sì, per la conformità alla tenuta all'aria secondo il DM 26/06/2015. Utilizzare il nastro raccomandato dal produttore della membrana. Nastri generici possono non aderire correttamente alla superficie della membrana e cedere nel tempo." },
    { question: "Quanto costa la membrana traspirante?", answer: "I prezzi variano da 40 € per prodotti economici a 140 € per membrane premium per rotolo (tipicamente 50–75 m² per rotolo). Per una tipica villetta a 3 camere con 150 m² di pareti esterne, la membrana costa 80–400 € a seconda del prodotto scelto." },
    { question: "Si può usare la membrana traspirante sulle pareti in muratura?", answer: "La membrana traspirante è progettata per le costruzioni in legno e a pannelli. Le pareti in muratura utilizzano una strategia diversa di gestione dell'umidità (parete a cassetta con fori di drenaggio). Tuttavia la membrana può essere usata dietro il rivestimento su pareti in muratura in alcuni sistemi di facciata ventilata." },
  ],
};

export const vinylSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale delle pareti in metri quadrati.",
    "Sottrarre le aree di finestre e porte.",
    "Selezionare il profilo del pannello desiderato.",
    "Fare clic su Calcola Materiali per ottenere il conteggio pannelli e la quantità di confezioni.",
  ],
  materialInfo:
    "Il rivestimento in PVC (cladding in PVC-U) è una copertura per pareti esterne a bassa manutenzione apprezzata per la durabilità, la resistenza agli agenti atmosferici e la gamma di colori e profili. In Italia il rivestimento in PVC è disponibile in profili orizzontali a doghe sovrapposte e a incastro, con lunghezze dei pannelli tipicamente da 3,0 m a 5,0 m. La copertura per pannello varia in base alla larghezza del profilo — un pannello standard con esposizione di 20 cm a 5,0 m di lunghezza copre circa 1,0 m². I pannelli sono venduti in confezioni, con prezzi da 6 € a 18 € per m² a seconda della qualità e della finitura. Gli accessori includono strisce di partenza, profili a J, angolari e pannelli per sottotetto. L'installazione richiede una cavità ventilata (almeno 25 mm) dietro il rivestimento per la gestione dell'umidità. In Italia sono disponibili marchi come Freefoam, Veka e prodotti importati. Il rivestimento in PVC non richiede verniciatura, impregnatura o sigillatura e ha una durata di 20–30+ anni. È leggero, rendendolo adatto per costruzioni in legno e interventi di riqualificazione. Le norme antincendio (DM 03/08/2015) limitano l'uso di rivestimenti combustibili sugli edifici di altezza superiore a 12 m.",
  nextSteps: [
    { label: "Calcolatore Telo Traspirante", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calcolatore Rivestimento in Fibrocemento", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Calcolatore Nastro Impermeabile per Finestre", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Installare una striscia di partenza alla base e procedere verso l'alto, agganciando ogni pannello a quello sottostante.",
    "Lasciare uno spazio di dilatazione di 6 mm a ogni estremità del pannello — il PVC si dilata significativamente con la temperatura.",
    "Non chiodare i pannelli troppo stretti — lasciare i chiodi leggermente allentati per consentire il movimento termico.",
    "Utilizzare chiodi in acciaio inox o alluminio per prevenire macchie di ruggine.",
    "Prevedere la ventilazione della cavità posteriore con aperture alla base e alla sommità.",
  ],
  commonMistakes: [
    "Chiodare i pannelli troppo stretti, impedendo la dilatazione termica e causando ondulazioni nelle giornate calde.",
    "Non lasciare spazi di dilatazione agli accessori e ai profili, causando deformazione dei pannelli.",
    "Non prevedere una cavità ventilata dietro il rivestimento, intrappolando umidità contro la parete.",
    "Utilizzare chiodi in acciaio non trattato che si arrugginiscono e macchiano il PVC.",
    "Non verificare la compatibilità con le norme antincendio per l'altezza dell'edificio.",
  ],
  faqs: [
    { question: "Il rivestimento in PVC è adatto al clima italiano?", answer: "Sì. Il rivestimento in PVC è progettato per resistere a pioggia, vento, gelo e esposizione UV. I prodotti di qualità sono testati secondo UNI EN 14411 e offrono garanzie di 10–25 anni. È particolarmente adatto nelle zone climatiche D, E e F dove gli sbalzi termici sono significativi." },
    { question: "Il rivestimento in PVC richiede permesso edilizio?", answer: "Nella maggior parte dei casi sostituire o aggiungere un rivestimento a un edificio è un intervento di manutenzione straordinaria che richiede una CILA o SCIA, a meno che l'edificio sia vincolato o in zona di tutela paesaggistica. Verificare con il proprio Comune." },
    { question: "Quanto dura il rivestimento in PVC?", answer: "Un rivestimento in PVC di qualità dura 20–30+ anni con manutenzione minima. Lo sbiadimento del colore è la preoccupazione principale — i prodotti premium hanno stabilizzatori UV che riducono lo sbiadimento." },
    { question: "Si può installare il rivestimento in PVC sopra l'intonaco esistente?", answer: "Sì, a condizione che l'intonaco sia solido e la parete strutturalmente adeguata. Fissare listelli in legno trattato sull'intonaco per creare la cavità ventilata e la superficie di fissaggio per il rivestimento." },
    { question: "Quanto costa il rivestimento in PVC in Italia?", answer: "Il rivestimento in PVC costa 6–18 € per m² per i materiali, più accessori (120–400 € per casa per profili, angolari e sottotetti). L'installazione professionale aggiunge 25–50 € per m². Una tipica villetta a 3 camere costa 2.500–6.000 € per i materiali o 6.000–12.000 € installata." },
    { question: "Il rivestimento in PVC è ignifugo?", answer: "No. Il rivestimento in PVC è combustibile ed è soggetto a restrizioni secondo il DM 03/08/2015 sugli edifici di altezza superiore a 12 m. Per edifici residenziali bassi è consentito nel rispetto dei requisiti di reazione al fuoco della UNI EN 13501." },
  ],
};

export const hardieSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale delle pareti in metri quadrati.",
    "Sottrarre le aree di finestre e porte.",
    "Selezionare la larghezza di esposizione della doga.",
    "Fare clic su Calcola Materiali per ottenere il conteggio delle doghe.",
  ],
  materialInfo:
    "Il rivestimento in fibrocemento tipo HardiePlank (James Hardie) o Eternit Cedral (Etex Group) è una delle opzioni di rivestimento premium più diffuse in Italia, offrendo l'aspetto della doga in legno con la durabilità del fibrocemento. Il fibrocemento è incombustibile (classificazione A1 di reazione al fuoco), resistente al marciume, agli insetti e ai raggi UV. Le dimensioni standard delle doghe sono 3600 mm × 190 mm (con faccia esposta di 170 mm dopo la sovrapposizione). Ogni doga copre circa 0,61 m² di superficie parete. Le doghe sono disponibili in una vasta gamma di colori applicati in fabbrica con garanzia colore di 15 anni. I prezzi sono circa 10–18 € per doga (16–30 € per m²) presso distributori italiani come Edilportale, rivenditori Eternit o centri specializzati in facciate ventilate. L'installazione richiede una cavità ventilata dietro le doghe, viti in acciaio inox e scossaline compatibili a tutte le giunzioni. Il fibrocemento è approvato per edifici di qualsiasi altezza secondo il DM 03/08/2015 grazie alla sua classificazione incombustibile, rendendolo una scelta privilegiata per le normative post-incendio.",
  nextSteps: [
    { label: "Calcolatore Telo Traspirante", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calcolatore Nastro Impermeabile per Finestre", href: "/calculators/exterior-shell/window-flashing-calculator/" },
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Utilizzare viti in acciaio inox ad anello — le viti in acciaio comune si arrugginiscono e macchiano le doghe entro pochi mesi.",
    "Mantenere una sovrapposizione minima di 30 mm tra i corsi.",
    "Lasciare uno spazio di 6 mm tra le teste delle doghe ai giunti di testa, sigillato con sigillante flessibile del colore della doga.",
    "Installare una striscia di partenza alla base per impostare l'angolo del primo corso.",
    "Tagliare con disco diamantato o sega con aspirazione polveri — la polvere di fibrocemento è nociva.",
  ],
  commonMistakes: [
    "Utilizzare fissaggi non in acciaio inox che si arrugginiscono e macchiano il rivestimento entro pochi mesi.",
    "Tagliare senza adeguata aspirazione polveri — la polvere di fibrocemento è pericolosa; usare sega con aspirazione.",
    "Non sigillare i bordi tagliati con vernice di ritocco, esponendo il fibrocemento grezzo all'umidità.",
    "Non prevedere la cavità ventilata posteriore di almeno 25 mm.",
    "Non verificare la planarità del sottostruttura prima della posa delle doghe.",
  ],
  faqs: [
    { question: "Il fibrocemento è classificato antincendio?", answer: "Sì. Il fibrocemento è classificato incombustibile (Euroclasse A2-s1, d0) e soddisfa i requisiti del DM 03/08/2015 per l'uso su edifici di qualsiasi altezza, compresi quelli oltre 12 m." },
    { question: "Quanto dura il rivestimento in fibrocemento?", answer: "Il fibrocemento ha una garanzia prodotto di 10 anni e una garanzia colore di 15 anni. Nella pratica, un rivestimento in fibrocemento installato correttamente dura 30–50+ anni con manutenzione minima." },
    { question: "Si può verniciare il fibrocemento?", answer: "Il fibrocemento viene fornito con finitura colore applicata in fabbrica. Può essere riverniciato con pittura per esterni per facciate se si desidera cambiare colore. La finitura di fabbrica è più duratura della vernice applicata in cantiere." },
    { question: "Quanto costa il rivestimento in fibrocemento in Italia?", answer: "I materiali costano 16–30 € per m² per le doghe più accessori (striscia di partenza, pezzi angolari, profili). L'installazione professionale aggiunge 35–60 € per m². Una tipica villetta a 3 camere costa 5.000–10.000 € per i materiali o 10.000–18.000 € installata." },
    { question: "Serve la cavità ventilata dietro il fibrocemento?", answer: "Sì. Una cavità ventilata di almeno 25 mm è richiesta tra la membrana traspirante e il retro del rivestimento. Si realizza con listelli in legno trattato fissati verticalmente ai montanti o al rivestimento strutturale." },
    { question: "Il fibrocemento è adatto a tutte le zone climatiche italiane?", answer: "Sì. Il fibrocemento è testato per condizioni di esposizione severe e funziona bene in tutti i climi italiani, comprese le zone costiere, le zone alpine e le zone ad alta piovosità." },
  ],
};

export const windowFlashingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire il numero di finestre e porte.",
    "Inserire il perimetro medio dell'apertura in metri.",
    "Selezionare la larghezza del nastro adesivo impermeabile.",
    "Fare clic su Calcola Materiali per ottenere i metri lineari totali e il conteggio dei rotoli.",
  ],
  materialInfo:
    "Il nastro adesivo impermeabile per finestre è una membrana autoadesiva applicata intorno alle aperture di finestre e porte per creare un sigillo impermeabile tra il telaio e la struttura della parete. Impedisce all'acqua di penetrare dietro il rivestimento in corrispondenza delle aperture, che sono i punti più vulnerabili dell'involucro edilizio. Nelle costruzioni in legno italiane il nastro adesivo viene applicato al rivestimento strutturale o ai montanti intorno a ogni apertura prima dell'installazione del serramento, sovrapponendosi alla membrana traspirante in una sequenza specifica: prima il davanzale, poi i montanti laterali, infine l'architrave. Il nastro deve essere permeabile al vapore sulla faccia esterna e impermeabile. Le larghezze comuni sono 10 cm, 15 cm e 22 cm, con 15 cm la più versatile. I prodotti più diffusi in Italia includono Rothoblaas Flexi Band, Tyvek FlexWrap, Pro Clima Tescon Vana e Soudal SWS Flashing. I prezzi variano da 12 € a 50 € per rotolo da 25 m a seconda della larghezza e del marchio. Una corretta impermeabilizzazione è essenziale per la tenuta all'aria secondo il DM 26/06/2015 e la protezione dall'umidità secondo il D.Lgs. 192/2005. I difetti di impermeabilizzazione delle finestre sono una delle cause più comuni di danni da acqua nelle costruzioni in legno.",
  nextSteps: [
    { label: "Calcolatore Telo Traspirante", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calcolatore Rivestimento Strutturale Esterno", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Impermeabilizzare prima il davanzale, poi i montanti laterali (sovrapponendo il nastro del davanzale), infine l'architrave (sovrapponendo il nastro dei montanti).",
    "Assicurarsi che il nastro aderisca saldamente a superfici pulite e asciutte — usare un rullo per premerlo.",
    "Sovrapporre il bordo esterno del nastro sulla membrana traspirante per dirigere l'acqua verso l'esterno.",
    "Utilizzare pezzi angolari a tutti e quattro gli angoli dell'apertura per una copertura completa.",
    "Non applicare il nastro su superfici bagnate, polverose o a temperature sotto 5 °C.",
  ],
  commonMistakes: [
    "Applicare il nastro dell'architrave prima dei montanti, permettendo all'acqua di scorrere dietro il nastro.",
    "Non premere saldamente il nastro, lasciando sacche d'aria dove l'adesione viene meno.",
    "Utilizzare nastro incompatibile con la membrana traspirante — verificare la compatibilità del produttore.",
    "Omettere i pezzi angolari, lasciando i punti più critici non protetti.",
    "Non rispettare la sequenza di posa (davanzale → montanti → architrave) compromettendo l'impermeabilità.",
  ],
  faqs: [
    { question: "Serve il nastro impermeabile a ogni finestra?", answer: "Sì. Ogni apertura di finestra e porta in una parete a telaio in legno deve essere impermeabilizzata per prevenire infiltrazioni d'acqua. Le aperture sono il punto più vulnerabile dell'involucro edilizio e richiedono un nastro continuo e correttamente sovrapposto." },
    { question: "Quale larghezza di nastro serve?", answer: "La larghezza di 15 cm è la più versatile, fornendo copertura adeguata per le aperture standard. 10 cm si usa per spallette strette. 22 cm si usa per spallette profonde o come vaschetta di davanzale." },
    { question: "Qual è la sequenza corretta di impermeabilizzazione?", answer: "Prima il davanzale, poi i montanti laterali (sovrapponendo il nastro del davanzale), infine l'architrave (sovrapponendo il nastro dei montanti). Questa sequenza a scaglie assicura che l'acqua scorra sempre verso l'esterno e verso il basso, mai dietro il nastro." },
    { question: "Si può usare qualsiasi nastro autoadesivo per le finestre?", answer: "No. Utilizzare un prodotto specificamente progettato per l'impermeabilizzazione delle finestre, compatibile con la propria membrana traspirante. Nastro da imballaggio, nastro isolante e nastri generici non forniscono adesione o resistenza agli agenti atmosferici adeguate." },
    { question: "Quanto nastro serve per finestra?", answer: "Un'apertura finestra standard (120×120 cm) richiede circa 5 m di nastro (perimetro più sovrapposizioni). Una casa tipo con 10–15 finestre necessita di 50–75 m di nastro, ovvero 2–3 rotoli da 25 m." },
    { question: "Il nastro contribuisce alla tenuta all'aria?", answer: "Sì. Il nastro impermeabile per finestre è un componente chiave dello strato di tenuta all'aria nelle costruzioni in legno. Colma il vuoto tra il telaio del serramento e la membrana traspirante/barriera vapore, prevenendo le infiltrazioni d'aria in corrispondenza delle aperture." },
  ],
};

// ─── ISOLAMENTO E CARTONGESSO ───────────────────────────────────────────────

export const cavityInsulationCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale delle pareti in metri quadrati.",
    "Sottrarre le aree di finestre e porte.",
    "Selezionare il tipo e lo spessore dell'isolante.",
    "Fare clic su Calcola Materiali per ottenere il numero di materassini, rotoli o pannelli.",
  ],
  materialInfo:
    "L'isolamento in intercapedine riempie lo spazio tra i montanti delle pareti per ridurre le dispersioni termiche e soddisfare i requisiti prestazionali del D.Lgs. 192/2005 e del DM 26/06/2015 (requisiti minimi di prestazione energetica). Nelle costruzioni in legno italiane i tipi di isolamento più comuni sono i materassini in lana minerale (Rockwool, Knauf Insulation), i pannelli rigidi in PIR (Stiferite, Kingspan) e l'isolamento in fibre naturali (fibra di legno Steico, lana di pecora). Per pareti con montanti da 10 cm, 10 cm di lana minerale raggiungono circa R = 2,5 m²K/W. Per pareti con montanti da 14 cm con 14 cm di lana minerale, R = 3,5 m²K/W. L'isolamento in PIR raggiunge prestazioni termiche superiori per unità di spessore: 10 cm di PIR danno R = 4,55 m²K/W. Il DM 26/06/2015 richiede una trasmittanza della parete (valore U) di 0,22–0,28 W/m²K per le nuove costruzioni (varia per zona climatica A-F), che richiede tipicamente 12–16 cm di lana minerale o 8–10 cm di PIR. I materassini in lana minerale sono in pacchi da 5–10 m², al prezzo di 25–60 € per pacco presso Bricoman, Leroy Merlin o rivenditori edili. I pannelli PIR costano 22–45 € per pannello (120×240 cm). Una barriera al vapore (freno vapore) deve essere installata sul lato caldo dell'isolamento per prevenire la condensa interstiziale secondo la UNI EN ISO 13788. Marchi di riferimento per l'Italia: Rockwool, Knauf Insulation, Mapei, Kerakoll, Stiferite, Steico.",
  nextSteps: [
    { label: "Calcolatore Lastre di Cartongesso", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calcolatore Viti per Cartongesso", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Tagliare i materassini leggermente sovradimensionati (5–10 mm) per un'inserzione a frizione tra i montanti.",
    "Riempire tutti i vuoti, angoli e intorno agli impianti — anche piccoli vuoti causano dispersioni termiche significative.",
    "Installare una barriera al vapore continua sul lato caldo con tutti i giunti nastrati.",
    "Non comprimere l'isolamento — i materassini compressi perdono prestazione termica.",
    "Nelle zone climatiche E e F verificare la necessità di isolamento aggiuntivo esterno (cappotto) per raggiungere i valori di trasmittanza richiesti.",
  ],
  commonMistakes: [
    "Lasciare vuoti intorno a impianti, tubi e cavi — creano ponti termici e percorsi di infiltrazione d'aria.",
    "Omettere la barriera al vapore, causando condensa interstiziale e potenziale marciume.",
    "Comprimere i materassini per farli entrare in una cavità più piccola, riducendo drasticamente il valore R.",
    "Non verificare la classe di reazione al fuoco dell'isolamento (minimo Euroclasse B-s2,d0 per uso in pareti).",
    "Non prevedere il taglio dell'isolamento intorno alle scatole elettriche e ai passaggi impiantistici.",
  ],
  faqs: [
    { question: "Quale valore U devono avere le pareti secondo il DM 26/06/2015?", answer: "Il DM 26/06/2015 richiede trasmittanze delle pareti di 0,22–0,28 W/m²K per le nuove abitazioni (varia per zona climatica: zona A-B: 0,43, zona C: 0,34, zona D: 0,29, zona E: 0,26, zona F: 0,24 W/m²K). Questo richiede tipicamente 12–16 cm di lana minerale o 8–10 cm di PIR nella parete, più eventuale isolamento nel sistema di facciata." },
    { question: "Lana minerale o PIR per le pareti in legno?", answer: "Entrambi sono adatti. La lana minerale è più economica, resistente al fuoco e acusticamente assorbente. Il PIR è più sottile a parità di prestazione termica, più resistente all'umidità e offre un'installazione più rigida. Molti costruttori usano lana minerale tra i montanti con uno strato aggiuntivo di PIR sulla faccia interna per prestazioni migliorate." },
    { question: "Serve la barriera al vapore?", answer: "Sì. Una barriera al vapore (come polietilene da 200 µm o una membrana proprietaria tipo Rothoblaas Flexi A) deve essere installata sul lato caldo dell'isolamento secondo la UNI EN ISO 13788. Tutti i giunti devono essere nastrati con nastro compatibile per la tenuta all'aria." },
    { question: "Quanto costa l'isolamento delle pareti?", answer: "I materassini in lana minerale costano circa 5–10 € per m² per 10 cm di spessore. I pannelli PIR costano 10–18 € per m² per 10 cm. Per una tipica villetta a 3 camere con 100 m² di parete esterna, l'isolamento costa 500–1.800 € a seconda del tipo e dello spessore." },
    { question: "Si possono usare materiali isolanti naturali?", answer: "Sì. La fibra di legno (Steico), la lana di pecora (Thermafleece), la canapa e il sughero sono disponibili in Italia. Costano il 20–50 % in più della lana minerale ma hanno un'impronta carbonica inferiore, migliore capacità di regolazione igroscopica e sono piacevoli da maneggiare." },
    { question: "E l'isolamento acustico?", answer: "I materassini in lana minerale (minimo 50 mm, preferibilmente 80–100 mm) tra i montanti nelle pareti divisorie e nelle tramezze forniscono eccellenti prestazioni acustiche. Per la conformità al DPCM 05/12/1997 sui requisiti acustici passivi degli edifici, fare riferimento alle specifiche costruttive di dettaglio." },
  ],
};

export const drywallCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale di pareti e/o soffitti in metri quadrati.",
    "Sottrarre le aree di finestre e porte.",
    "Selezionare la dimensione della lastra (120×240 cm è standard).",
    "Fare clic su Calcola Materiali per ottenere il conteggio delle lastre.",
  ],
  materialInfo:
    "Il cartongesso (lastra in gesso rivestito) è il rivestimento interno standard per pareti e soffitti nell'edilizia italiana. Le lastre standard misurano 120×240 cm (2,88 m²), con spessore di 12,5 mm per le pareti e 15 mm per i soffitti (per prevenire l'inflessione a interasse di 60 cm). Per la resistenza al fuoco migliorata utilizzare lastre Gyproc Fireline (rosa) di Saint-Gobain o Knauf Fireboard che forniscono 30 o 60 minuti di protezione antincendio. Per ambienti soggetti a umidità (bagni, cucine) utilizzare lastre idrorepellenti (verdi) tipo Gyproc Moisture Resistant o Knauf Green. Il cartongesso è fissato ai montanti o ai travetti con viti da 25 mm per cartongesso a interasse di 15 cm ai bordi e 30 cm nel campo. Ogni lastra 120×240 cm copre 2,88 m². I prezzi variano da 6 € a 18 € per lastra a seconda del tipo e dello spessore, disponibili presso Bricoman, Leroy Merlin, Obi e rivenditori edili. Gyproc Saint-Gobain e Knauf sono i due principali produttori in Italia. Dopo il fissaggio, i giunti sono nastrati e stuccati con stucco per giunti per creare una superficie liscia e continua pronta per la decorazione.",
  nextSteps: [
    { label: "Calcolatore Viti per Cartongesso", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calcolatore Stucco per Giunti", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Calcolatore Isolamento in Intercapedine", href: "/calculators/insulation-drywall/cavity-insulation-calculator/" },
  ],
  installationTips: [
    "Fissare le lastre con il lato lungo orizzontale (a bandiera) per le pareti, e perpendicolare ai travetti per i soffitti.",
    "Sfalsare i giunti tra le file e tra le lastre di parete e soffitto.",
    "Lasciare uno spazio di 10 mm al pavimento per la dilatazione — sarà coperto dal battiscopa.",
    "Utilizzare lastre da 15 mm sui soffitti con travetti a interasse di 60 cm per prevenire l'inflessione.",
    "Per i bagni utilizzare lastre idrorepellenti e prevedere la posa di pannelli in cemento (tipo Aquapanel) dietro la doccia.",
  ],
  commonMistakes: [
    "Utilizzare lastre da 12,5 mm sui soffitti a interasse di 60 cm — si inflettono nel tempo; usare 15 mm.",
    "Non sfalsare i giunti, creando una linea di fessurazione visibile attraverso la parete.",
    "Avvitare troppo le viti, rompendo la carta superficiale e perdendo la tenuta.",
    "Non prevedere l'irrigidimento per carichi appesi pesanti (mensole, pensili, TV a parete).",
    "Dimenticare di prevedere i passaggi impiantistici prima della chiusura delle pareti.",
  ],
  faqs: [
    { question: "Cartongesso da 12,5 mm o 15 mm?", answer: "Utilizzare 12,5 mm per le pareti e i soffitti a interasse di 40 cm. Utilizzare 15 mm per i soffitti a interasse di 60 cm. I requisiti antincendio del DM 03/08/2015 possono richiedere strati aggiuntivi o lastre Fireline indipendentemente dall'interasse dei montanti." },
    { question: "Quante lastre per una stanza?", answer: "Una tipica stanza da 3×4 m con soffitto a 2,70 m ha circa 37 m² di superficie delle pareti (meno 4 m² per porta e finestra = 33 m²). A 2,88 m² per lastra servono circa 12 lastre per le pareti più 5 lastre per il soffitto (12 m²) = 17 lastre." },
    { question: "Serve il cartongesso antincendio?", answer: "Il DM 03/08/2015 richiede lastre antincendio nelle pareti divisorie tra unità (30 o 60 minuti), intorno ai vani scala e in altre posizioni specifiche. Le lastre Gyproc Fireline (rosa) o Knauf Fireboard forniscono la resistenza al fuoco. Verificare i piani per le specifiche costruttive antincendio." },
    { question: "Quale lastra per i bagni?", answer: "Utilizzare lastre idrorepellenti (verdi) tipo Gyproc Moisture Resistant o Knauf Green in bagni, cucine e altri ambienti soggetti a umidità. Per le zone direttamente dietro vasche e docce utilizzare pannelli in cemento (Aquapanel o Wedi) per la massima protezione dall'umidità." },
    { question: "Quanto costa il cartongesso in Italia?", answer: "Le lastre standard da 12,5 mm costano 6–10 € per lastra (120×240 cm). Le lastre da 15 mm costano 8–12 €. Le lastre Fireline costano 10–15 €. Le lastre idrorepellenti costano 9–14 €. L'acquisto in bancali dal rivenditore edile garantisce il miglior prezzo." },
    { question: "Si può rasare il cartongesso?", answer: "Sì. Il cartongesso può essere finito a giunto (stuccatura e nastro) o rasato con uno strato di 2–3 mm di intonaco di finitura. La rasatura fornisce una superficie più liscia e dura ma aggiunge costo e tempi di asciugatura. La finitura a giunto è più rapida e sempre più comune." },
  ],
};

export const drywallScrewCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire il numero di lastre di cartongesso.",
    "Selezionare la lunghezza della vite (25 mm per lastre singole, 35 mm per lastre doppie).",
    "Specificare il tipo di supporto (legno o metallo).",
    "Fare clic su Calcola Materiali per ottenere il conteggio delle viti e la quantità di confezioni.",
  ],
  materialInfo:
    "Le viti per cartongesso sono viti autofilettanti a filettatura fine progettate specificamente per fissare le lastre di cartongesso a montanti in legno o metallo. Hanno una testa a trombetta che si incassa a filo con la superficie della lastra senza strappare la carta. Le lunghezze standard sono 25 mm per lastre singole da 12,5 mm su montanti in legno e 35 mm per lastre da 15 mm o installazioni a doppio strato. Lo schema di fissaggio standard è 15 cm ai bordi delle lastre e 30 cm nel campo (montanti intermedi). Una lastra standard 120×240 cm richiede circa 28–32 viti. Le viti sono vendute in scatole da 200, 500 o 1.000. I prezzi variano da 4 € a 18 € per scatola a seconda della dimensione e della quantità. I marchi più diffusi in Italia includono Rigips, Knauf e marchi propri di Würth, Bricoman e ferramenta. Utilizzare un avvitatore per cartongesso con regolazione della profondità per avvitare le viti alla profondità corretta — la testa deve creare una leggera depressione nella carta senza attraversarla.",
  nextSteps: [
    { label: "Calcolatore Lastre di Cartongesso", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calcolatore Stucco per Giunti", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Calcolatore Montanti", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Utilizzare un avvitatore per cartongesso con regolazione della profondità per una profondità costante delle viti.",
    "Avvitare in modo che la testa crei una leggera depressione nella carta senza attraversarla.",
    "Fissare a 15 cm ai bordi e 30 cm nel campo.",
    "Iniziare le viti ad almeno 10 mm dal bordo della lastra per evitare lo sbriciolamento.",
    "Per montanti metallici utilizzare viti con punta trapano (autoforanti) specifiche.",
  ],
  commonMistakes: [
    "Avvitare troppo le viti attraverso la carta — si perde la tenuta e serve una seconda vite.",
    "Avvitare troppo poco lasciando le viti sporgenti — appariranno attraverso lo stucco o la rasatura.",
    "Utilizzare troppe poche viti — la lastra può inflettersi, fessurarsi ai giunti o staccarsi dai montanti.",
    "Utilizzare viti per legno su montanti metallici o viceversa — i tipi di filettatura sono diversi.",
    "Non verificare la profondità di avvitatura prima di procedere con un'intera parete.",
  ],
  faqs: [
    { question: "Quante viti per lastra di cartongesso?", answer: "Una lastra standard 120×240 cm fissata a 15 cm ai bordi e 30 cm nel campo necessita di circa 28–32 viti, a seconda del numero di montanti intermedi." },
    { question: "Quale lunghezza di viti per il cartongesso?", answer: "Utilizzare viti da 25 mm per lastre singole da 12,5 mm. Utilizzare viti da 35 mm per lastre da 15 mm o installazioni a doppio strato. La vite deve penetrare nel montante in legno per almeno 22 mm." },
    { question: "Si possono usare chiodi al posto delle viti?", answer: "I chiodi per cartongesso sono un'opzione per le pareti ma sono meno comuni delle viti. Le viti forniscono una tenuta migliore, hanno meno probabilità di fuoriuscire e sono più facili da regolare alla profondità corretta. I chiodi non si usano mai per le lastre a soffitto." },
    { question: "Quante confezioni di viti per una stanza?", answer: "Una stanza tipo richiede 17 lastre (pareti più soffitto), utilizzando circa 500 viti. Una confezione da 500 viti copre una singola stanza. Per un'intera casa preventivare 3.000–5.000 viti (6–10 confezioni da 500)." },
    { question: "Cos'è il 'popping' delle viti?", answer: "Il 'popping' si verifica quando una testa di vite spinge attraverso lo stucco perché il montante in legno si ritira. Si previene utilizzando legname essiccato in forno, regolando le viti alla profondità corretta e usando viti (non chiodi) che resistono all'arretramento." },
    { question: "Dove si acquistano le viti per cartongesso in Italia?", answer: "Le viti per cartongesso sono disponibili presso Würth, Bricoman, Leroy Merlin, Obi, ferramenta e rivenditori edili. Per il miglior rapporto qualità-prezzo acquistare in confezioni da 1.000 a 5–12 € per confezione." },
  ],
};

export const jointCompoundCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Inserire la superficie totale del cartongesso in metri quadrati.",
    "Selezionare il metodo di finitura: stuccatura a giunto o rasatura.",
    "Specificare il numero di mani previste.",
    "Fare clic su Calcola Materiali per ottenere la quantità di stucco in chilogrammi o secchi.",
  ],
  materialInfo:
    "Lo stucco per giunti è utilizzato per riempire e lisciare i giunti tra le lastre di cartongesso, creando una superficie continua pronta per la decorazione. Il processo prevede tre fasi principali: primo strato (incollaggio del nastro in uno strato di stucco), secondo strato (copertura del nastro e livellamento del giunto) e terzo strato (finitura sottile per sfumare i bordi). Lo stucco premiscelato (come Gyproc Promix di Saint-Gobain, Knauf Fugenfuller o Mapei Planitop) viene fornito in secchi da 5 kg, 15 kg e 25 kg. La resa varia in base all'applicazione: circa 0,4–0,6 kg per m² di cartongesso per la stuccatura a giunto. Un secchio da 25 kg copre circa 40–60 m² di cartongesso giuntato. I prezzi variano da 10 € a 30 € per secchio da 25 kg presso i rivenditori edili italiani. Per la rasatura (applicazione di uno strato sottile di intonaco di finitura su tutta la superficie della lastra) utilizzare intonaco di finitura tipo Gyproc Goldband o Knauf MP75 a circa 1,5–2,0 kg per m², che richiede molto più materiale. Il nastro per giunti in carta costa circa 3–6 € per rotolo da 75 m. Il nastro in rete di fibra di vetro autoadesivo è leggermente più costoso ma più facile per il fai-da-te.",
  nextSteps: [
    { label: "Calcolatore Lastre di Cartongesso", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calcolatore Viti per Cartongesso", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calcolatore Fondo / Primer", href: "/calculators/finishing/primer-calculator/" },
  ],
  installationTips: [
    "Applicare un primo strato sottile, premere il nastro nello stucco, poi lisciare l'eccesso.",
    "Lasciare asciugare completamente ogni mano (tipicamente 4–24 ore a seconda delle condizioni) prima di applicare la successiva.",
    "Sfumare i bordi di ogni mano più larghi della precedente per una finitura invisibile.",
    "Carteggiare leggermente tra le mani con carta abrasiva grana 120 per un risultato liscio.",
    "In estate ventilare bene l'ambiente per accelerare l'asciugatura tra le mani.",
  ],
  commonMistakes: [
    "Applicare una mano troppo spessa — mani multiple sottili sono meglio di una mano spessa che si fessura.",
    "Non attendere un'asciugatura adeguata tra le mani, causando bolle e fessurazioni.",
    "Saltare la fase di carteggiatura, lasciando creste e dossi visibili sotto la pittura.",
    "Non miscelare adeguatamente lo stucco premiscelato prima dell'uso.",
    "Non proteggere le superfici circostanti durante la carteggiatura (polvere fine ovunque).",
  ],
  faqs: [
    { question: "Quanto stucco per m²?", answer: "Per la stuccatura a giunto preventivare 0,4–0,6 kg per m² di cartongesso. Un secchio da 25 kg copre circa 40–60 m². Per una stanza tipo (33 m² di pareti e soffitto) un secchio da 25 kg è generalmente sufficiente." },
    { question: "Meglio stuccatura a giunto o rasatura?", answer: "La stuccatura a giunto (finitura a secco) è più rapida e adatta alla maggior parte delle applicazioni domestiche. La rasatura con intonaco di finitura fornisce una superficie più dura e liscia preferita da alcuni decoratori. La stuccatura a giunto è il metodo standard nelle costruzioni in legno." },
    { question: "Quale nastro per giunti usare?", answer: "Il nastro in carta (Gyproc o Knauf) fornisce il giunto più resistente ed è preferito dai professionisti. Il nastro in rete di fibra di vetro autoadesivo è più facile per il fai-da-te ma produce un giunto leggermente meno resistente e richiede più stucco per una finitura piatta." },
    { question: "Quante mani di stucco?", answer: "Tre mani sono standard: una mano di incollaggio (per annegare il nastro), una mano di riempimento (per coprire il nastro e livellare) e una mano di finitura (per sfumare e lisciare). Alcuni prodotti combinano le mani di incollaggio e riempimento." },
    { question: "Quanto tempo serve per l'asciugatura dello stucco?", answer: "Lo stucco premiscelato richiede 4–24 ore per mano a seconda dello spessore, della temperatura e dell'umidità. Gli stucchi a presa (in polvere, come Knauf Uniflott) fanno presa chimicamente in 20–90 minuti e possono essere ricoperti più rapidamente." },
    { question: "Quanto costa lo stucco per giunti?", answer: "Un secchio da 25 kg di stucco premiscelato costa 10–30 € a seconda del marchio. Lo stucco a presa costa 6–18 € per sacco da 5 kg. Il nastro per giunti costa 3–6 € per rotolo da 75 m. Per un'intera casa preventivare 60–250 € per i materiali di stuccatura." },
  ],
};
