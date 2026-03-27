// German (Germany) — All 31 calculator SEO content
// Metric adaptations: meters, cm, m², German construction practices (DIN, EnEV)
// German brands: Knauf, Rigips, Isover, Rockwool, Fermacell
// EUR prices where relevant, 40 cm / 60 cm Achsabstand

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
  "Bestellen Sie 10–15 % mehr als Verschnittfaktor für Zuschnitte und Fehler.";

// ─── FOUNDATION ─────────────────────────────────────────────────────────────

export const anchorBoltCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Messen Sie den Gesamtumfang Ihres Fundaments in Metern.",
    "Geben Sie den Standardabstand ein (Standard 1,80 m nach DIN).",
    "Klicken Sie auf Materialien berechnen, um die Anzahl der Ankerschrauben zu erhalten.",
    "Prüfen Sie die Ergebnisse und passen Sie den Abstand bei Bedarf an.",
  ],
  materialInfo:
    "Ankerschrauben (J-Bolzen oder L-Bolzen) sind Gewindestangen aus Stahl, die in das Betonfundament eingelassen werden, um das Schwellenholz zu befestigen. Die DIN-Norm schreibt Ankerschrauben alle 1,80 m und maximal 30 cm von jeder Ecke oder Schwellenholz-Stoßstelle vor. In Deutschland sind die gängigsten Durchmesser M12 (12 mm) und M16 (16 mm), wobei M12 der Mindeststandard für den Wohnungsbau ist. J-Bolzen sind am gebräuchlichsten wegen ihrer einfachen Einbettung im Frischbeton, während L-Bolzen einen höheren Auszugswiderstand bieten. Für Erdbebenzone 1 und 2 in Deutschland (Rheingraben, Schwäbische Alb) werden M16-Bolzen mit größeren Unterlegscheiben empfohlen. Der Preis liegt bei 1–3 EUR pro Bolzen je nach Durchmesser und Ausführung. Die Bolzen müssen der DIN 933/DIN 931 bzw. der Festigkeitsklasse 4.6 oder 5.6 entsprechen. Bei Verwendung von verzinkten Ankerschrauben ist auf die Verträglichkeit mit dem Beton und eventuellem Kontakt mit KDI-Holz zu achten.",
  nextSteps: [
    { label: "Schwellendichtung-Rechner", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Schwellenholz-Rechner", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Setzen Sie die Bolzen, bevor der Beton vollständig abbindet, solange er noch verarbeitbar ist.",
    "Verwenden Sie eine Schablone oder Lehre für gleichmäßigen Abstand und Ausrichtung.",
    "Stellen Sie sicher, dass die Bolzen mindestens 18 cm tief im Beton eingebettet sind.",
    "Setzen Sie einen Bolzen innerhalb von 30 cm von jedem Ende jedes Schwellenholzes.",
    "Prüfen Sie die Lotrechte der Bolzen vor dem Abbinden des Betons mit einer Wasserwaage.",
  ],
  commonMistakes: [
    "Bolzen an Schwellenholz-Stößen vergessen — setzen Sie immer einen Bolzen innerhalb von 30 cm von jedem Stoß.",
    "Falschen Bolzendurchmesser verwenden — der Mindeststandard ist M12.",
    "Die Lotrechte der Bolzen vor dem Abbinden nicht prüfen.",
    "Zu wenig Einbettungstiefe — mindestens 18 cm im Beton sind vorgeschrieben.",
    "Bolzen nicht in der Achse des Schwellenholzes ausrichten — dies erschwert die Montage erheblich.",
  ],
  faqs: [
    { question: "Welche Größe Ankerschrauben fordert die DIN?", answer: "Die Norm fordert Ankerschrauben von mindestens M12 Durchmesser, eingebettet mindestens 18 cm im Beton, mit einem maximalen Abstand von 1,80 m." },
    { question: "Brauche ich Ankerschrauben an jeder Ecke?", answer: "Ja. Setzen Sie eine Ankerschraube innerhalb von 30 cm von jedem Ende jedes Schwellenholzes und an jeder Ecke des Fundaments." },
    { question: "Kann ich Ankerschrauben nachträglich setzen?", answer: "Ja, mit chemischen Ankern (Injektionsmörtel, z. B. Fischer FIS V oder Hilti HIT-HY 200). Ein Loch wird in den ausgehärteten Beton gebohrt und die Schraube mit Injektionsmörtel eingeklebt." },
    { question: "Wie viele Ankerschrauben pro Laufmeter Fundament?", answer: "Bei 1,80 m Standardabstand benötigen Sie ca. 0,56 Bolzen pro Laufmeter. In der Praxis sind es durch Ecken und Stöße 0,7–0,9 Bolzen pro Laufmeter." },
    { question: "Was ist der Unterschied zwischen J-Bolzen und L-Bolzen?", answer: "J-Bolzen haben einen J-förmigen Haken am unteren Ende und sind im Wohnungsbau am gebräuchlichsten. L-Bolzen haben einen rechtwinkligen Abkantung und bieten höheren Auszugswiderstand." },
    { question: "Welche Ankerschrauben für Erdbebengebiete in Deutschland?", answer: "In den Erdbebenzonen 1–2 (Rheingraben, Schwäbische Alb, Vogtland) werden M16-Bolzen mit 50×50 mm Unterlegscheiben empfohlen. Prüfen Sie die DIN 4149 und die jeweilige Landesbauordnung." },
  ],
};

export const sillSealCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Messen Sie den Gesamtumfang Ihres Fundaments in Laufmetern.",
    "Geben Sie die Abdeckung pro Rolle ein (Standard: 15 m pro Rolle).",
    "Klicken Sie auf Materialien berechnen, um die Rollenanzahl zu ermitteln.",
    "Berücksichtigen Sie Überlappungen an Stößen.",
  ],
  materialInfo:
    "Die Schwellendichtung ist ein PE-Schaumdichtband, das zwischen dem Betonfundament und dem druckimprägnierten Schwellenholz verlegt wird. Sie verhindert Luftinfiltration, kapillare Feuchtigkeitsaufnahme und das Eindringen von Insekten. Erhältlich in Breiten von 9 cm, 14 cm und 19 cm, passend zu den gängigen Schwellenholz-Querschnitten (6×8 cm, 6×12 cm, 6×16 cm). Die Standarddicke beträgt 6 mm, für unebene Fundament-Oberflächen gibt es 12 mm Ausführungen. In Deutschland sind Produkte von Würth, Fischer und Sika im Baustoffhandel erhältlich, mit Kosten von 10–25 EUR pro 15-m-Rolle. Alternativ werden auch EPDM-Dichtbänder oder Bitumendichtbahnen als Schwellenabdichtung verwendet. Die Schwellendichtung ist ein nach DIN 68800 und den Regeln des Holzrahmenbaus vorgeschriebenes Bauteil und stellt eine kostengünstige Maßnahme dar, die langfristig erhebliche Energieeinsparungen bringt.",
  nextSteps: [
    { label: "Schwellenholz-Rechner", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Ankerschrauben-Rechner", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Randbalken-Rechner", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Rollen Sie die Dichtung entlang des Fundaments aus, unmittelbar bevor Sie das Schwellenholz auflegen.",
    "Überlappen Sie Stöße mindestens 15 cm.",
    "Verwenden Sie eine mit KDI-Holz kompatible Dichtung — einige Schaumstoffe werden durch Holzschutzmittel angegriffen.",
    "Schneiden Sie die Dichtung an Ecken sauber zu und vermeiden Sie Lücken.",
    "Fixieren Sie die Dichtung vorübergehend mit Sprühkleber, um ein Verrutschen beim Auflegen des Schwellenholzes zu verhindern.",
  ],
  commonMistakes: [
    "Schwellendichtung vergessen — dies ist ein normatives Erfordernis nach DIN 68800.",
    "Stöße nicht überlappen, wodurch Lücken für Luftinfiltration entstehen.",
    "Falsche Breite wählen — die Dichtung muss zur Breite des Schwellenholzes passen.",
    "Dichtung auf nasses oder verschmutztes Fundament legen — die Oberfläche muss sauber und trocken sein.",
    "Zu dünne Dichtung bei unebenem Fundament verwenden — bei Unebenheiten 12 mm statt 6 mm wählen.",
  ],
  faqs: [
    { question: "Ist die Schwellendichtung nach DIN vorgeschrieben?", answer: "Ja. Die DIN 68800 und die Regeln des Holzrahmenbaus schreiben eine Abdichtung zwischen Betonfundament und Schwellenholz vor, um Feuchte- und Luftinfiltration zu verhindern." },
    { question: "Welche Dicke der Schwellendichtung soll ich verwenden?", answer: "Die Standard-6-mm-Dichtung ist für die meisten Anwendungen ausreichend. Bei Fundamenten mit Unebenheiten über 3 mm verwenden Sie 12 mm Dichtung für besseren Ausgleich." },
    { question: "Welche Breite brauche ich?", answer: "Die Breite muss mit dem Schwellenholz übereinstimmen. Für 6×12 cm Wände verwenden Sie 12 cm breite Dichtung, für 6×16 cm Wände 16 cm breite Dichtung." },
    { question: "Kann ich ein anderes Material als PE-Schaum verwenden?", answer: "Alternativen sind EPDM-Dichtbänder und Neoprenschaum-Bänder, die langlebiger aber auch teurer sind. Auch Bitumendichtbahnen werden verwendet, bieten aber weniger Luftdichtheit als PE-Schaum." },
    { question: "Hilft die Schwellendichtung gegen Termiten?", answer: "In Deutschland sind Termiten kein relevantes Problem. Die Dichtung schützt primär gegen Feuchtigkeitsaufstieg und Luftundichtigkeit. Gegen Insekten im Allgemeinen reduziert sie Eintrittspunkte." },
    { question: "Wie viele Rollen brauche ich für ein Einfamilienhaus?", answer: "Ein typisches EFH mit 10×12 m Grundfläche hat ca. 44 m Fundamentumfang. Bei 15-m-Rollen benötigen Sie 3 Rollen plus 10 % für Überlappungen, also 3–4 Rollen." },
  ],
};

export const sillPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Messen Sie den Gesamtumfang des Fundaments in Metern.",
    "Wählen Sie die Holzlänge (gängig: 3 m, 4 m, 5 m).",
    "Klicken Sie auf Materialien berechnen, um die Holzstückzahl zu erhalten.",
    "Berücksichtigen Sie Verschnitt an Ecken und Stößen.",
  ],
  materialInfo:
    "Schwellenhölzer aus kesseldruckimprägniertem (KDI) Holz bilden die unterste horizontale Verbindung zwischen Betonfundament und Holzrahmenkonstruktion. Die Kesseldruckimprägnierung mit Kupfer-Azol oder Kupfer-Quat schützt gegen Fäulnis und Insektenbefall. Standardquerschnitte sind 6×12 cm für 12-cm-Wände und 6×16 cm für 16-cm-Wände, in Handeslängen von 3 m, 4 m und 5 m. KDI-Holz kostet ca. 30–50 % mehr als unbehandeltes Holz, ist aber eine baurechtlich vorgeschriebene Investition für die Langlebigkeit der Konstruktion. In Deutschland sind KVH-Schwellenhölzer mit Imprägnierung bei Holzhandlungen und Baustoffhändlern (Holzland, Bauhaus, Hornbach) erhältlich. Der Preis liegt bei 8–15 EUR pro Laufmeter für KDI-KVH 6×12 cm. Alle Schnittstellen müssen nachträglich mit Borsalzlösung oder Hirnholzschutz behandelt werden, um den Imprägnierungsschutz aufrechtzuerhalten.",
  nextSteps: [
    { label: "Ankerschrauben-Rechner", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Schwellendichtung-Rechner", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Randbalken-Rechner", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Verwenden Sie ausschließlich KDI-Holz mit geeigneter Schutzklasse für Erdkontakt.",
    "Bohren Sie die Löcher für Ankerschrauben vor, bevor Sie das Schwellenholz positionieren.",
    "Behandeln Sie alle Schnittstellen mit Borsalzlösung oder Hirnholzschutz.",
    "Richten Sie das Schwellenholz mit einer Schlagschnur exakt aus, bevor Sie die Muttern anziehen.",
    "Verwenden Sie nur verzinkte oder Edelstahl-Befestiger mit KDI-Holz — normale Stahlschrauben korrodieren.",
  ],
  commonMistakes: [
    "Unbehandeltes Holz für Schwellen verwenden — führt innerhalb weniger Jahre zu Fäulnis.",
    "Nicht-kompatible Verbindungsmittel mit KDI-Holz verwenden (normale Nägel und Schrauben korrodieren).",
    "Schnittstellen nicht nachbehandeln — der freiliegende Kern ist ungeschützt.",
    "Schwellenholz nicht vorbohren — führt zu Rissen und ungenauen Bohrungen.",
    "Ohne Schwellendichtung montieren — verursacht kapillare Feuchteaufnahme.",
  ],
  faqs: [
    { question: "Welchen Querschnitt verwende ich für Schwellenhölzer?", answer: "Schwellenhölzer haben den gleichen Querschnitt wie die Wandständer. Für 6×12-cm-Wände verwenden Sie 6×12-cm-Schwellen, für 6×16-cm-Wände 6×16-cm-Schwellen." },
    { question: "Wie wird das Schwellenholz befestigt?", answer: "Schwellenhölzer werden mit Ankerschrauben (M12 oder M16) fixiert, die im Betonfundament eingebettet sind. Muttern und Unterlegscheiben werden nach der Positionierung angezogen." },
    { question: "Muss ich Schnittstellen nachbehandeln?", answer: "Ja. Jeder Schnitt legt den ungeschützten Holzkern frei. Verwenden Sie Borsalzlösung, Hirnholzschutz oder Holzschutzmittel-Streichlösung an allen Schnittstellen." },
    { question: "Kann ich unbehandeltes Holz verwenden?", answer: "Nein. Die DIN 68800 verbietet unbehandeltes Holz im Kontakt mit Beton oder Mauerwerk. Kapillarfeuchtigkeit vom Beton verursacht Fäulnis innerhalb weniger Jahre." },
    { question: "Welche Verbindungsmittel für KDI-Holz?", answer: "Verwenden Sie feuerverzinkte, Edelstahl- oder keramikbeschichtete Schrauben und Nägel. Kupfer-Azol-imprägniertes Holz ist korrosiv für normale Stahlverbinder." },
    { question: "Wie viele Hölzer für ein 10×12-m-Haus?", answer: "Der Umfang beträgt 44 Laufmeter. Bei 4-m-Hölzern benötigen Sie 11 Stück plus 10 % Verschnitt, also 12–13 Schwellenhölzer." },
  ],
};

export const concreteCalculator: CalculatorSEOContent = {
  disclaimer:
    "Diese Schätzung enthält einen 10 %-Verschnittfaktor. Der tatsächliche Verschnitt kann je nach Baustellen-Bedingungen, Schalungspräzision und Einbauverfahren variieren. Bestätigen Sie die Mengen immer mit Ihrem Transportbetonwerk.",
  howToUse: [
    "Messen Sie Länge und Breite der Projektfläche in Metern.",
    "Geben Sie die Tiefe (Stärke) in Zentimetern ein — 10 cm Standard für Platten, 20–30 cm für Fundamente.",
    "Wählen Sie den Projekttyp (Platte, Fundament oder Stütze).",
    "Klicken Sie auf Materialien berechnen für Kubikmeter, Sackanzahl und Bestellempfehlungen.",
  ],
  materialInfo:
    "Beton ist eine Mischung aus Zement, Sand, Kies (Zuschlagstoff) und Wasser, die zu einem felsenharten Material aushärtet. Er wird in zwei Formen gehandelt: Trockenbeton in Säcken und Transportbeton per Fahrmischer. Trockenbeton-Säcke (25 kg oder 40 kg, Marken wie quick-mix, Sakret, PCI) ergeben ca. 0,012–0,02 m³ pro Sack. Für kleine Arbeiten wie Zaunpfosten oder Briefkastenfundamente sind Säcke praktisch. Für jedes Volumen über 0,5 m³ ist Transportbeton per Fahrmischer effizienter und liefert ein konsistenteres Ergebnis.\n\nDie Druckfestigkeit von Beton wird in Festigkeitsklassen nach DIN EN 206 / DIN 1045 gemessen. Die gängigsten Klassen für den Wohnungsbau sind: C20/25 für nicht-tragende Anwendungen wie Gehwege und Terrassen, C25/30 für Standard-Wohnungsbau-Fundamente und Bodenplatten, und C30/37 für Garagenböden, Fundamentwände und Bereiche mit hoher Belastung.\n\nTransportbeton kostet 80–120 EUR pro Kubikmeter geliefert, abhängig von Festigkeitsklasse, Standort und Bestellmenge. Die meisten Lieferwerke haben eine Mindestbestellmenge von 0,5–1 m³ und berechnen Kleinmengenaufschläge für Bestellungen unter 3 m³. Trockenbeton in 40-kg-Säcken kostet 2–3,50 EUR pro Sack, was pro Kubikmeter deutlich teurer ist als Transportbeton. Bewehrungsstahl (Baustahlmatten Q257, Bewehrungsstäbe BSt 500) addiert 5–15 EUR/m² zu den Gesamtkosten.",
  nextSteps: [
    { label: "Betonplatten-Rechner", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Streifenfundament-Rechner", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Betonstützen-Rechner", href: "/calculators/foundation/concrete-column-calculator/" },
    { label: "Betontreppen-Rechner", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Schalung nivelliert, lotrecht und gut abgestützt aufbauen, bevor der Beton kommt.",
    "Boden vor dem Betonieren anfeuchten, damit trockener Boden dem Beton nicht zu schnell Wasser entzieht.",
    "Beton so schnell wie möglich einbauen und verteilen — Transportbeton beginnt nach 60–90 Minuten abzubinden.",
    "Rüttler verwenden oder Schalung mit Hammer abklopfen, um Luftblasen zu beseitigen.",
    "Oberfläche zuerst mit Abziehlatte glätten, dann Blutwasser abwarten, bevor mit Kelle oder Besen nachgearbeitet wird.",
    "Beton mindestens 7 Tage nachbehandeln — feucht halten mit Nachbehandlungsmittel, Folie oder regelmäßigem Besprühen.",
  ],
  commonMistakes: [
    "Zu viel Wasser in die Mischung — schwächt den Beton und verursacht Risse. Konsistenz F3 (weich) für die meisten Wohnbauarbeiten einhalten.",
    "Zu wenig Beton bestellen — immer 10 % Verschnitt einplanen. Zu wenig Beton während einer Betonage erzeugt Arbeitsfugen.",
    "Bewehrung weglassen — Baustahlmatte Q257 oder Bewehrungsstäbe BSt 500 für Platten ab 10 cm Stärke verwenden.",
    "Bei extremen Temperaturen betonieren — unter 5 °C warmes Wasser und Isoliermatten verwenden; über 30 °C kaltes Wasser und Windschutz.",
    "Zu früh nacharbeiten, wenn Blutwasser noch an der Oberfläche steht — schließt Wasser ein und verursacht Abplatzungen.",
  ],
  faqs: [
    { question: "Wie viel Beton brauche ich für eine 3×3-m-Platte?", answer: "Eine 3×3-m-Platte mit 10 cm Stärke benötigt ca. 0,9 m³ Beton. Mit 10 % Verschnitt bestellen Sie 1,0 m³. Dieses Volumen liegt an der Grenze, ab der Transportbeton per Fahrmischer praktischer ist als Sackware." },
    { question: "Wie viele Säcke Trockenbeton pro Kubikmeter?", answer: "Für einen Kubikmeter benötigen Sie ca. 50 Säcke à 40 kg Fertigbeton (nur Wasser zugeben). Für eine selbst gemischte Rezeptur (Zement + Zuschlag) benötigen Sie ca. 7 Säcke Zement à 25 kg plus Sand und Kies." },
    { question: "Wie viel Beton für eine Garageneinfahrt?", answer: "Eine typische Doppelgaragen-Einfahrt (5×5 m, 15 cm stark) benötigt ca. 3,75 m³. Mit 10 % Verschnitt bestellen Sie 4,2 m³. Für Einfahrten C25/30 mit Baustahlmatte spezifizieren." },
    { question: "Was ist der Unterschied zwischen C20/25 und C25/30?", answer: "Die Bezeichnung gibt die Druckfestigkeit nach 28 Tagen an (Zylinder/Würfel in N/mm²). C20/25 ist Standard für nicht-tragende Anwendungen. C25/30 ist fester und langlebiger, empfohlen für Garagenböden und tragende Fundamente. Preisunterschied: ca. 5–10 EUR/m³." },
    { question: "Was kostet ein Kubikmeter Transportbeton?", answer: "Transportbeton per Fahrmischer kostet 80–120 EUR/m³ geliefert. Dazu kommen Liefergebühren (50–100 EUR) und eventuelle Kleinmengenaufschläge für Bestellungen unter 3 m³. Trockenbeton aus Säcken kostet ca. 100–150 EUR/m³ — also nur für kleine Arbeiten wirtschaftlich." },
    { question: "Kann man bei Regen betonieren?", answer: "Leichter Nieselregen ist in der Regel akzeptabel, wenn die frische Oberfläche geschützt werden kann. Starker Regen kann die Zementpaste auswaschen und die Oberfläche schwächen. Halten Sie PE-Folie bereit, um frischen Beton sofort abzudecken." },
  ],
};

export const concreteSlabCalculator: CalculatorSEOContent = {
  disclaimer: "Diese Schätzung enthält einen 10 %-Verschnittfaktor. Der tatsächliche Verschnitt kann je nach Bodenvorbereitung und Schalungspräzision variieren.",
  howToUse: [
    "Messen Sie Länge und Breite der geplanten Platte in Metern.",
    "Geben Sie die Plattenstärke in Zentimetern ein — 10 cm Standard für Terrassen, 12–15 cm für Garagen.",
    "Klicken Sie auf Materialien berechnen für die benötigten Kubikmeter inklusive 10 % Verschnitt.",
    "Verwenden Sie die Sackanzahl für kleine Arbeiten oder die Kubikmeter-Angabe für Transportbeton.",
  ],
  materialInfo:
    "Eine Betonplatte ist eine flache, horizontale Fläche, die direkt auf einen vorbereiteten Untergrund gegossen wird — für Terrassen, Garagenböden, Einfahrten und Gebäudefundamente. Die Standard-Wohnbaustärke beträgt 10 cm für Fußgängerbereiche (Gehwege, Terrassen). Garagen und Einfahrten sollten 12–15 cm stark sein.\n\nDie Bodenvorbereitung ist entscheidend: Der Boden muss verdichtet, planiert und frei von organischem Material sein. Eine 15–20 cm starke Schicht Frostschutzkies (0/32 mm) bietet Drainage und eine stabile Basis. Eine PE-Folie (0,2 mm) zwischen Kies und Beton verhindert aufsteigende Feuchte.\n\nBewehrungsoptionen umfassen Baustahlmatten Q257 (6×6 mm, 15×15 cm Maschenweite), Bewehrungsstäbe BSt 500 im Abstand von 15–20 cm, oder Stahlfaserbeton. Scheinfugen (Sollbruchstellen) alle 2,5–3 m einschneiden, um unkontrolliertes Reißen zu verhindern.\n\nTransportbeton C25/30 mit Konsistenz F3 (weich) ist die Standard-Spezifikation. Kosten: 80–120 EUR/m³ geliefert. Eine typische Garagenplatte von 6×6 m mit 15 cm Stärke benötigt ca. 5,4 m³ und kostet 500–700 EUR nur an Beton.",
  nextSteps: [
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Streifenfundament-Rechner", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Ankerschrauben-Rechner", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Boden verdichten und 15–20 cm Frostschutzkies als Tragschicht einbringen.",
    "Schalung mit Pfählen alle 60–90 cm abstützen und nivellieren; Schalungsöl für leichtes Entschalen auftragen.",
    "Bewehrung (Matte oder Stäbe) auf Abstandhalter setzen, damit sie im unteren Drittel der Platte liegt.",
    "Beton in einem durchgehenden Arbeitsgang einbauen, um Arbeitsfugen zu vermeiden.",
    "Mit Abziehlatte abziehen, dann Besenstrich für Rutschfestigkeit aufbringen und Nachbehandlungsmittel auftragen.",
  ],
  commonMistakes: [
    "Tragschicht aus Kies weglassen — Betonieren direkt auf Erde verursacht Setzungen und Risse im ersten Jahr.",
    "Platte zu dünn — 7 cm Platten reißen leicht; mindestens 10 cm für Wohnbauanwendungen.",
    "Baustahlmatte direkt auf den Boden legen statt auf Abstandhalter — Bewehrung am Boden wirkt nicht.",
    "Scheinfugen vergessen — ohne Fugen alle 2,5–3 m reißt die Platte unkontrolliert.",
    "Oberfläche glätten, wenn Blutwasser noch steht — schließt Wasser ein und verursacht Abplatzungen.",
  ],
  faqs: [
    { question: "Wie viel Beton für eine 3×3-m-Platte?", answer: "Eine 3×3-m-Platte mit 10 cm Stärke benötigt ca. 0,9 m³. Mit 10 % Verschnitt 1,0 m³ bestellen. Bei 15 cm (Garage) ca. 1,4 m³." },
    { question: "Welche Stärke für eine Betonplatte?", answer: "10 cm für Terrassen, Gehwege und Gartenhütten. 12–15 cm für Garagen und Einfahrten. 15–20 cm für Schwerlastbereiche. Prüfen Sie die örtliche Bauordnung." },
    { question: "Was kostet eine Betonplatte?", answer: "Materialkosten: 30–60 EUR/m² bei 10 cm Stärke mit Transportbeton. Eingebaut (inkl. Arbeit, Kies, Schalung, Bewehrung): 60–120 EUR/m². Eine 6×6-m-Terrassenplatte kostet ca. 2.000–4.000 EUR eingebaut." },
    { question: "Brauche ich Bewehrung in einer Bodenplatte?", answer: "Für Platten ab 10 cm wird Bewehrung dringend empfohlen. Baustahlmatte Q257 oder Stahlfaserbeton kontrollieren Schwindrisse. Für Garagen und Einfahrten Bewehrungsstäbe BSt 500 alle 15–20 cm." },
    { question: "Wie viele Säcke Trockenbeton für eine Platte?", answer: "Für eine 3×3-m-Platte (10 cm, 0,9 m³) benötigen Sie ca. 45 Säcke à 40 kg Fertigbeton. Ab dieser Menge ist Transportbeton wirtschaftlicher." },
    { question: "Wie lange braucht eine Betonplatte zum Aushärten?", answer: "Beton erreicht ca. 70 % seiner Festigkeit in 7 Tagen und die volle Festigkeit nach 28 Tagen. Begehbar nach 24–48 Stunden, befahrbar nach 7 Tagen, voll belastbar nach 28 Tagen. Die ersten 7 Tage feucht halten." },
  ],
};

export const concreteFootingCalculator: CalculatorSEOContent = {
  disclaimer: "Diese Schätzung enthält einen 10 %-Verschnittfaktor. Fundamentabmessungen müssen den DIN-Normen und der örtlichen Bauordnung für Frosttiefe und Tragfähigkeit entsprechen.",
  howToUse: [
    "Messen Sie die Gesamtlänge des Streifenfundaments in Metern.",
    "Geben Sie die Fundamentbreite in Metern ein — typisch 30–60 cm.",
    "Geben Sie die Fundamenttiefe in Metern ein — typisch 20–30 cm für Flachgründungen.",
    "Klicken Sie auf Materialien berechnen für Kubikmeter und Sackanzahl.",
  ],
  materialInfo:
    "Streifenfundamente aus Beton sind die Basis, die Gebäudelasten in den Baugrund überträgt. Sie liegen unter der Geländeoberfläche und tragen Fundamentwände, Stützen und Pfeiler. Streifenfundamente für den Wohnungsbau haben typischerweise 30–60 cm Breite und 20–30 cm Höhe, wobei die Breite mindestens das Doppelte der Wandstärke betragen muss.\n\nDie Fundamentsohle muss unterhalb der frostfreien Tiefe liegen, die in Deutschland je nach Region 60–120 cm beträgt (in den Alpenregionen bis 150 cm). Nach DIN 1054 und Eurocode 7 muss das Fundament auf tragfähigem, ungestörtem Boden oder mechanisch verdichtetem Untergrund aufliegen.\n\nDie Bewehrung für Streifenfundamente besteht typischerweise aus 2 Längsstäben BSt 500 Ø 10–12 mm nahe der Sohle, mit Bügeln Ø 6 mm alle 25 cm. Beton C25/30 mit Konsistenz F3 ist der Standard. Transportbeton kostet 80–120 EUR/m³. Ein typisches EFH von 140 m² mit 50 m Streifenfundament (40 cm breit, 20 cm hoch) benötigt ca. 4 m³ Beton.",
  nextSteps: [
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Betonplatten-Rechner", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Betonstützen-Rechner", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Graben exakt in der vorgesehenen Breite und Tiefe ausheben — Überbaggerung verschwendet Beton.",
    "Grabensohle mit Handstampfer verdichten — unebene Sohle verursacht ungleichmäßige Setzungen.",
    "Bewehrung auf Abstandhalter setzen, damit mindestens 5 cm Betonüberdeckung unter dem Stahl gewährleistet ist.",
    "Anschlussbewehrung alle 1,00–1,20 m einbauen, um Fundament und aufgehende Wand zu verbinden.",
    "Nicht auf gefrorenem Boden oder in stehendem Wasser betonieren.",
  ],
  commonMistakes: [
    "Fundament zu schmal — die Breite muss mindestens das Doppelte der Wandstärke betragen.",
    "Frosttiefe nicht einhalten — zu flache Fundamente heben sich bei Frost.",
    "Graben überbaggern und mit loser Erde verfüllen — Fundament muss auf ungestörtem oder verdichtetem Boden aufliegen.",
    "Bewehrung in Streifenfundamenten weglassen — unbewehrte Fundamente reißen bei Bodenbewegungen.",
    "Aufgehende Wand am gleichen Tag betonieren — Fundament mindestens 24 Stunden aushärten lassen.",
  ],
  faqs: [
    { question: "Wie breit muss ein Streifenfundament sein?", answer: "Mindestens das Doppelte der Wandstärke. Für eine 17,5-cm-Wand mindestens 35 cm. Bei schwach tragfähigem Boden kann der Statiker breitere Fundamente (60–90 cm) vorschreiben." },
    { question: "Wie tief müssen Fundamente in Deutschland sein?", answer: "Die Frosttiefe in Deutschland beträgt 60–80 cm in milden Regionen (Rheinland, Norddeutsche Tiefebene) bis 100–120 cm in kälteren Regionen (Mittelgebirge, Alpenvorland). Die Fundamentsohle muss unterhalb dieser Tiefe liegen." },
    { question: "Wie viel Beton für das Fundament eines EFH?", answer: "Ein EFH mit 140 m² Grundfläche und 50 m Streifenfundament (40×20 cm) benötigt ca. 4 m³. Mit 10 % Verschnitt 4,4 m³ bestellen." },
    { question: "Brauchen Streifenfundamente Bewehrung?", answer: "Ja. Mindestens 2 Längsstäbe BSt 500 Ø 10 mm nahe der Sohle mit Bügeln Ø 6 mm alle 25 cm. Bewehrung verhindert Risse bei Bodenbewegungen." },
    { question: "Kann man Fundament und Wand gleichzeitig betonieren?", answer: "Monolithische Betonagen sind bei speziellen Flachgründungen möglich, aber Standard ist: Streifenfundament zuerst betonieren und mindestens 24 Stunden aushärten lassen." },
    { question: "Welche Festigkeitsklasse für Fundamente?", answer: "C25/30 ist Standard für Wohnbau-Fundamente. Bei aggressivem Boden (Sulfatangriff) oder hohem Grundwasser C30/37 mit sulfatbeständigem Zement (HS-Zement) spezifizieren." },
  ],
};

export const concreteColumnCalculator: CalculatorSEOContent = {
  disclaimer: "Diese Schätzung enthält einen 10 %-Verschnittfaktor. Die Stützentiefe muss den DIN-Normen für Frosttiefe und Tragfähigkeit entsprechen.",
  howToUse: [
    "Wählen Sie den Stützendurchmesser — 20 cm für leichte Lasten, 25 cm für Standard-Terrassenpfosten, 30 cm für schwere Lasten.",
    "Geben Sie die Stützenhöhe in Metern ein — vom Fundamentboden bis Oberkante.",
    "Geben Sie die Anzahl der Stützen ein.",
    "Klicken Sie auf Materialien berechnen für m³ pro Stütze und Gesamtbedarf.",
  ],
  materialInfo:
    "Betonstützen (auch Punktfundamente, Köcherfundamente oder Betonsäulen) sind zylindrische Betonfundamente für Terrassenunterkonstruktionen, Pfostenfundamente, Carport-Stützen und leichte tragende Pfeiler. Sie werden mit Schalungsrohren (Sonotubes) oder Metallformen hergestellt.\n\nGängige Durchmesser sind 20 cm (leichte Lasten wie Zaunpfosten), 25 cm (Standard-Terrassenpfosten) und 30 cm (schwere Terrassenträger, Carport-Stützen). Die Stützentiefe muss die frostfreie Tiefe erreichen: 60–120 cm je nach Region in Deutschland.\n\nDie Bewehrung besteht typischerweise aus 1–2 vertikalen Stäben BSt 500 Ø 10 mm. Ein Pfostenträger wird in den frischen Beton eingesetzt. Schalungsrohre kosten 10–30 EUR pro Stück. Jeder Sack Trockenbeton (40 kg) ergibt ca. 0,02 m³. Eine 30-cm-Stütze mit 1,00 m Tiefe benötigt ca. 0,07 m³ — etwa 3,5 Säcke.",
  nextSteps: [
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Streifenfundament-Rechner", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Betontreppen-Rechner", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Loch 10–15 cm breiter als das Schalungsrohr ausheben, um Hinterfüllung und Ausrichtung zu ermöglichen.",
    "Schalungsrohr auf ebener Basis aufstellen und exakt lotrecht mit Holzstreben abstützen.",
    "Beton in 30-cm-Schichten einfüllen und jede Schicht verdichten oder stochern.",
    "Pfostenträger oder Ankerbolzen in den frischen Beton einsetzen, bevor er abbindet.",
    "Erst nach mindestens 24 Stunden Aushärtung rund um das Rohr hinterfüllen.",
  ],
  commonMistakes: [
    "Stützen nicht unter die Frosttiefe führen — zu flache Stützen heben sich bei Frost.",
    "Schalungsrohr nicht lotrecht ausrichten — schiefe Stützen verursachen Ausrichtungsprobleme.",
    "Beton auf einmal einfüllen ohne zu stochern — schließt Luftblasen ein, besonders an der Basis.",
    "Pfostenträger vergessen, bevor der Beton abbindet — nachträgliches Bohren schwächt die Stütze.",
    "Zu kleinen Durchmesser für die Last wählen — immer Lasttabellen konsultieren.",
  ],
  faqs: [
    { question: "Wie viel Beton für eine zylindrische Stütze?", answer: "Eine 30-cm-Stütze mit 1,00 m Tiefe benötigt ca. 0,07 m³ — etwa 3,5 Säcke à 40 kg. Eine 25-cm-Stütze gleicher Tiefe ca. 0,05 m³ (2,5 Säcke). Immer 10 % Verschnitt einplanen." },
    { question: "Welchen Durchmesser für Terrassenstützen?", answer: "Für die meisten Holzterrassen sind 25 oder 30 cm Durchmesser Standard. Ein 30-cm-Pfeiler kann bei typischem Boden 2.000–3.000 kg tragen." },
    { question: "Wie tief müssen Terrassenpfeiler sein?", answer: "Die Pfeiler müssen die frostfreie Tiefe erreichen: 60–80 cm in milden Regionen, bis 120 cm in kälteren Gebieten Deutschlands. Prüfen Sie die örtliche Bauordnung." },
    { question: "Brauchen Betonstützen Bewehrung?", answer: "Für tragende Stützen mindestens 1 vertikaler Stab BSt 500 Ø 10 mm. Ab 30 cm Durchmesser oder über 1,20 m Tiefe 2 Vertikalstäbe empfohlen." },
    { question: "Wie viele Säcke Trockenbeton pro 30-cm-Stütze?", answer: "Eine 30-cm-Stütze mit 1,00 m Tiefe benötigt ca. 0,07 m³ — etwa 3,5 Säcke à 40 kg. Für 10 Stützen à 1,00 m benötigen Sie ca. 35 Säcke." },
    { question: "Kann man Beton direkt im Schalungsrohr mischen?", answer: "Nein — mischen Sie den Beton immer separat in einer Schubkarre oder einem Mischer, dann schichtweise einfüllen und verdichten." },
  ],
};

export const concreteStepsCalculator: CalculatorSEOContent = {
  disclaimer: "Diese Schätzung enthält 10 % Verschnitt und ein Podest von 1 m bei 10 cm Stärke. Stufenmaße müssen der DIN 18065 entsprechen.",
  howToUse: [
    "Geben Sie die Treppenbreite in Metern ein — DIN 18065 fordert mindestens 80 cm für Wohngebäude-Zugänge.",
    "Geben Sie die Steigung (Stufenhöhe) in Zentimetern ein — Standard 17–19 cm.",
    "Geben Sie den Auftritt (Stufentiefe) in Zentimetern ein — Standard 26–29 cm.",
    "Geben Sie die Stufenzahl ein und klicken Sie auf Materialien berechnen.",
  ],
  materialInfo:
    "Betontreppen sind massive, vor Ort gegossene Konstruktionen für Hauseingänge, Niveauunterschiede und Kellerzugänge. Im Gegensatz zu Holz- oder Fertigtreppen sind Ortbeton-Treppen monolithische Blöcke aus Stufen, Setzstufen und dem Treppenkern.\n\nDie DIN 18065 regelt die Stufenmaße: Steigung 14–21 cm (Wohngebäude optimal 17–18 cm), Auftritt 21–37 cm (optimal 28–29 cm). Die Schrittmaßregel 2s + a = 59–65 cm muss eingehalten werden. Alle Steigungen müssen einheitlich sein (max. 5 mm Toleranz). Handläufe sind ab 3 Stufen vorgeschrieben.\n\nSchalung wird aus Schalungsplatten (21 mm Schaltafeln) hergestellt und muss stark ausgesteift sein — Frischbeton übt erheblichen Druck aus. Beton C25/30 für Haltbarkeit, Konsistenz F3. Bewehrung mit BSt 500 Ø 8–10 mm alle 15–20 cm.\n\nOrtbeton-Treppen kosten 300–500 EUR pro Laufmeter Breite eingebaut. Eine 1,20-m-breite Treppe mit 4 Stufen kostet ca. 1.500–2.500 EUR eingebaut.",
  nextSteps: [
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Betonplatten-Rechner", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Terrassentreppe-Rechner", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Schalung aus 21-mm-Schaltafeln herstellen, stark abgestützt — Frischbeton ist extrem schwer.",
    "Von der untersten Stufe nach oben betonieren, jede Stufe glätten bevor die nächste betoniert wird.",
    "Trittstufen mit Besenstrich für Rutschfestigkeit versehen — glatte Oberflächen sind bei Nässe gefährlich.",
    "Vorderkanten der Trittstufen mit Antirutschkanten oder Besenstrich versehen.",
    "Treppe mit Anschlussbewehrung an das Gebäudefundament anbinden, damit sie nicht absackt und sich vom Haus löst.",
  ],
  commonMistakes: [
    "Steigungen unterschiedlich hoch — ungleiche Steigungen sind eine Stolpergefahr und ein Normverstoß.",
    "Trittstufen ohne Gefälle — jede Stufe muss 1 % Gefälle nach außen haben für Wasserablauf.",
    "Schalung zu schwach — Frischbeton wiegt 2.400 kg/m³ und sprengt schwache Schalungen.",
    "Treppe nicht an Fundament anbinden — ohne Anschlussbewehrung sackt die Treppe ab und löst sich vom Haus.",
    "Trittstufen glatt kellen — rutschgefährlich bei Nässe; immer Besenstrich oder Antirutschbelag aufbringen.",
  ],
  faqs: [
    { question: "Wie viel Beton brauche ich für Betonstufen?", answer: "Eine 1,20-m-breite Treppe mit 4 Stufen (17 cm Steigung, 28 cm Auftritt) benötigt ca. 0,5 m³ inklusive Podest. Mit 10 % Verschnitt 0,6 m³ bestellen." },
    { question: "Welche Standardmaße für Steigung und Auftritt?", answer: "Die DIN 18065 gibt 14–21 cm Steigung und 21–37 cm Auftritt vor. Optimal: 17 cm Steigung, 29 cm Auftritt. Schrittmaßregel: 2 × Steigung + Auftritt = 59–65 cm." },
    { question: "Was kosten Ortbeton-Stufen?", answer: "300–500 EUR pro Laufmeter Breite eingebaut. Eine 1,20-m-Treppe mit 4 Stufen kostet 1.500–2.500 EUR inklusive Schalung, Bewehrung, Beton und Nachbearbeitung." },
    { question: "Brauchen Betonstufen Bewehrung?", answer: "Ja. Bewehrung BSt 500 Ø 8–10 mm alle 15–20 cm horizontal durch den Treppenkörper, plus vertikale Anschlussbewehrung zum Podest und Fundament." },
    { question: "Kann ich Betonstufen selbst gießen?", answer: "Dies ist ein anspruchsvolles DIY-Projekt. Die Schalung ist komplex, der Beton schwer, und die Betonage muss in einem Arbeitsgang abgeschlossen werden. Für ein erstes Projekt erwägen Sie Fertigstufen." },
    { question: "Wie lange halten Betonstufen?", answer: "Korrekt ausgeführte Betonstufen halten 50–100 Jahre. Das häufigste Wartungsproblem sind Frostabplatzungen, vermeidbar durch Beton mit Luftporenbildner, regelmäßiges Imprägnieren und Verzicht auf Streusalz (Sand statt Salz verwenden)." },
  ],
};


export const gravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "Diese Schätzung enthält einen 10 % Verschnittfaktor. Das Gewicht von Schotter und Kies variiert je nach Typ und Feuchtigkeit. Die Umrechnung von 1,5 Tonnen pro Kubikmeter ist ein Durchschnittswert — das tatsächliche Gewicht liegt je nach Material zwischen 1,4 und 1,8 t/m³. Bestätigen Sie die Mengen immer bei Ihrem Lieferanten vor der Bestellung.",
  howToUse: [
    "Messen Sie die Länge der zu bedeckenden Fläche in Metern.",
    "Messen Sie die Breite der Fläche in Metern.",
    "Geben Sie die gewünschte Schotterstärke in Zentimetern ein — 10 cm ist Standard für die meisten Anwendungen, 15 bis 20 cm für Einfahrten.",
    "Klicken Sie auf Berechnen, um Kubikmeter und Tonnen mit eingebautem 10 % Verschnittfaktor zu erhalten.",
  ],
  materialInfo:
    "Schotter, Kies und Splitt sind lose Gesteinskörnungen, die für Einfahrten, Gehwege, Drainage, Gartengestaltung und als Tragschicht unter Beton und Asphalt verwendet werden. Sie sind in verschiedenen Korngrößen und Gesteinsarten erhältlich, die jeweils für unterschiedliche Anwendungen geeignet sind.\n\nDie gängigsten Korngrößen in Deutschland sind: Schotter 16/32 mm (Standardmaterial für Einfahrten und Drainage), Splitt 2/5 mm und 5/8 mm (für Pflasterbettungen und Wegedecken), und Grobschotter 32/56 mm oder 56/100 mm (für Drainage und Frostschutzschichten). Zierkies 8/16 mm (gerundete Steine) ist beliebt für Gehwege, Terrassen und Zierbeete. Gebrochenes Material (Splitt, Schotter) hat kantige Kanten, die ineinandergreifen und fest verdichten, während Rundkies (Flusskies) glatte Oberflächen hat und sich unter Belastung verschiebt.\n\nSchotter wird in Deutschland nach Kubikmeter oder Tonne verkauft. Ein Kubikmeter Schotter wiegt etwa 1,5 bis 1,8 Tonnen, abhängig von der Gesteinsart — Frostschutz (0/32 mm) ist schwerer mit 1,8 t/m³, Zierkies leichter mit 1,4 t/m³. Die meisten Baustoffhändler verkaufen nach Tonne mit Lieferung. Typische Preise liegen bei 15 bis 45 € pro Tonne je nach Typ und Region. Lieferkosten betragen 80 bis 200 € pro Fuhre für Entfernungen bis 30 km. Anbieter wie der lokale Baustoffhandel, toom Baumarkt und Hornbach bieten verschiedene Schotter- und Kiesarten an.\n\nFür Einfahrten ist der Standardaufbau ein 3-Schichten-System: 15 cm Frostschutzschicht (0/32 mm oder 0/45 mm) als Tragschicht, 10 cm Schotter 16/32 mm als Zwischenschicht und 5 cm Splitt 2/5 mm oder Edelsplitt als Deckschicht. Diese Gesamtstärke von 30 cm bietet hervorragende Drainage und eine stabile Oberfläche. Für einfache Auffüllungen, Gehwege und Zierbeete reicht eine einzelne Schicht von 8 bis 10 cm.",
  nextSteps: [
    { label: "Einfahrt-Schotter-Rechner", href: "/calculators/foundation/driveway-gravel-calculator/" },
    { label: "Betonplatten-Rechner", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Streifenfundament-Rechner", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Entfernen Sie den gesamten Mutterboden und organisches Material, bevor Sie Schotter verlegen — organische Substanz zersetzt sich und verursacht Setzungen.",
    "Verlegen Sie Geotextil (Vlies) über dem verdichteten Planum, um zu verhindern, dass Schotter sich mit dem darunterliegenden Boden vermischt.",
    "Verteilen Sie Schotter in Lagen von 5 bis 8 cm und verdichten Sie jede Lage mit einer Rüttelplatte, bevor Sie die nächste aufbringen.",
    "Geben Sie Einfahrten und Wegen ein leichtes Quergefälle (2 bis 3 %), damit Wasser zu den Rändern abfließt und sich nicht staut.",
    "Verwenden Sie Randsteine oder Kantenprofile (Stahl, Aluminium oder Betonrandsteine) um zu verhindern, dass Schotter in angrenzende Bereiche wandert.",
  ],
  commonMistakes: [
    "Rundkies für Einfahrten verwenden — er verdichtet nicht und verschiebt sich unter dem Reifengewicht. Verwenden Sie stattdessen kantigen Splitt oder Schotter.",
    "Mutterboden nicht entfernen — Gras und Wurzeln unter dem Schotter zersetzen sich und erzeugen Senkstellen.",
    "Den Verdichtungsschritt überspringen — nicht verdichteter Schotter verschiebt sich und bildet schnell Spurrinnen.",
    "Schotter zu dünn aufbringen — weniger als 8 cm bietet keine ausreichende Abdeckung oder Tragfähigkeit und das Planum scheint durch den Stein hindurch.",
    "Mindestbestellmengen nicht berücksichtigen — die meisten Lieferanten verlangen eine Mindestbestellung von 5 bis 10 Tonnen für die Lieferung.",
  ],
  faqs: [
    {
      question: "Wie viel Schotter brauche ich?",
      answer: "Multiplizieren Sie Länge mal Breite Ihres Projekts (in Metern) für die Quadratmeter, dann mit der Stärke (in Metern) für die Kubikmeter. Ein Kubikmeter Schotter deckt etwa 10 m² bei 10 cm Stärke ab. Rechnen Sie 10 % Zuschlag für Verdichtung, Verschnitt und unebenen Boden. Beispiel: Eine 6×6-Meter-Fläche bei 10 cm Stärke benötigt etwa 4 m³ (6 bis 7 Tonnen).",
    },
    {
      question: "Wie viel wiegt ein Kubikmeter Schotter?",
      answer: "Ein Kubikmeter Schotter wiegt etwa 1.500 bis 1.800 kg (1,5 bis 1,8 Tonnen). Das genaue Gewicht hängt von der Gesteinsart ab: Schotter 16/32 mm wiegt durchschnittlich 1,5 t/m³, Frostschutz (0/32 mm) ist schwerer mit 1,8 t/m³, Zierkies wiegt etwa 1,4 t/m³. Nasser Schotter kann 10 bis 15 % mehr wiegen als trockener.",
    },
    {
      question: "Wie viele Tonnen Schotter brauche ich?",
      answer: "Berechnen Sie zuerst die Kubikmeter (Länge × Breite × Stärke in Metern), dann multiplizieren Sie mit 1,5 bis 1,8 je nach Materialtyp. Beispiel: Eine 3×6-Meter-Fläche bei 10 cm Stärke ergibt 1,8 m³, das sind etwa 2,7 bis 3,2 Tonnen. Bestellen Sie immer 10 % mehr für Verdichtung und Verschnitt.",
    },
    {
      question: "Wie stark sollte der Schotter sein?",
      answer: "Die empfohlene Stärke richtet sich nach der Anwendung: 5 bis 8 cm für Gehwege und Zierbeete, 10 cm für Terrassen und allgemeine Auffüllung, 15 bis 20 cm für Einfahrten (in mehreren Lagen aufgebracht), und 25 bis 30 cm für gewerbliche Schwerlastbereiche. Verdichten Sie jede Lage vor dem Aufbringen der nächsten.",
    },
    {
      question: "Wie viel kostet Schotter pro Tonne?",
      answer: "Schotterpreise liegen bei 15 bis 45 € pro Tonne je nach Typ. Frostschutz und Standardschotter sind am günstigsten mit 15 bis 25 € pro Tonne. Splitt kostet 20 bis 35 € pro Tonne. Zierkies und Edelsplitt kosten 30 bis 60 € pro Tonne. Lieferkosten betragen 80 bis 200 € pro Fuhre. Baustoffhandel, toom und Hornbach bieten verschiedene Optionen an.",
    },
    {
      question: "Wie viele Kubikmeter Schotter passen auf einen LKW?",
      answer: "Ein Standard-Dreiseitenkipper fasst 6 bis 8 m³ (9 bis 14 Tonnen) Schotter. Ein größerer Sattelkipper fasst 12 bis 16 m³ (18 bis 28 Tonnen). Für kleine Projekte bieten viele Baustoffhändler Teilladungen an, oder Sie können Schotter mit einem Pkw-Anhänger transportieren (ca. 0,3 bis 0,5 m³ pro Ladung).",
    },
  ],
};

export const drivewayGravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "Diese Schätzung enthält einen 10 % Verschnittfaktor. Kostenschätzungen basieren auf regionalen Durchschnittswerten und variieren erheblich nach Region, Lieferant und Lieferentfernung. Das Schottergewicht variiert je nach Typ und Feuchtigkeit. Holen Sie immer Angebote von lokalen Lieferanten ein, bevor Sie bestellen.",
  howToUse: [
    "Messen Sie die Gesamtlänge Ihrer Einfahrt in Metern.",
    "Geben Sie die Einfahrtbreite ein — 3 bis 3,5 Meter für ein Auto, 5,5 bis 6,5 Meter für eine Doppeleinfahrt.",
    "Geben Sie die Schotterstärke ein — 15 cm ist Standard für Einfahrten, 20 bis 25 cm für Schwerlastverkehr.",
    "Wählen Sie den Schottertyp und klicken Sie auf Berechnen für Kubikmeter, Tonnen und eine Kostenschätzung.",
  ],
  materialInfo:
    "Eine Schottereinfahrt ist eine der wirtschaftlichsten und praktischsten Alternativen zu Beton oder Asphalt. Bei fachgerechter Ausführung mit den richtigen Materialien und ausreichender Stärke kann eine Schottereinfahrt 10 bis 15 Jahre mit minimalem Wartungsaufwand halten.\n\nDie beste Schottereinfahrt wird in drei Lagen aufgebaut. Die untere Lage (15 cm) verwendet Frostschutzschicht (0/32 mm oder 0/45 mm) für Drainage und Tragfähigkeit. Die mittlere Lage (10 cm) verwendet Schotter 16/32 mm als Übergangsschicht. Die obere Lage (5 bis 8 cm) verwendet verdichtungsfähigen Splitt 2/5 mm oder 5/8 mm, der sich zu einer festen Fahrfläche verzahnt. Jede Lage muss einzeln verteilt und verdichtet werden.\n\nGebrochener Schotter (Splitt 5/8 oder 8/16) ist das beliebteste Einfahrtmaterial, weil seine kantigen Kanten sich bei der Verdichtung verzahnen und eine stabile Oberfläche bilden. Schottertragschicht (auch Mineralbeton oder Frostschutz) ist eine Mischung aus gebrochenem Gestein und Steinmehl, die zu einer extrem harten Oberfläche verdichtet — sie ist die bevorzugte Wahl für stark befahrene Einfahrten. Rundkies sieht attraktiv aus, verschiebt sich aber unter Reifen und wird nicht als Hauptfahrfläche empfohlen. Granitsplitt verdichtet gut und bietet eine natürliche Optik.\n\nSchottereinfahrten kosten 15 bis 35 € pro Quadratmeter eingebaut, abhängig von Stärke und Material. Eine typische Einzeleinfahrt von 3,5 × 15 Metern kostet 800 bis 1.800 € nur für Material. Professionelle Installation mit Planierung, Vlies und Verdichtung kostet zusätzlich 15 bis 40 € pro m². Die jährliche Wartung umfasst das Zurückrechen von verschobenem Schotter und das Aufbringen einer 3 bis 5 cm dicken Ausgleichsschicht alle 2 bis 3 Jahre. Material erhalten Sie im Baustoffhandel, bei toom oder Hornbach.",
  nextSteps: [
    { label: "Schotter-Rechner", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Betonplatten-Rechner", href: "/calculators/foundation/concrete-slab-calculator/" },
  ],
  installationTips: [
    "Planen Sie die Einfahrt mit einem Gefälle von 2 bis 3 % vom Haus weg für ordnungsgemäße Entwässerung — stehendes Wasser auf Schotter erzeugt Schlaglöcher.",
    "Verlegen Sie Geotextilvlies über dem planierten Boden, um zu verhindern, dass Stein sich mit dem darunterliegenden Erdreich vermischt.",
    "Verteilen und verdichten Sie jede Lage einzeln — kippen Sie nicht den gesamten Schotter auf einmal ab.",
    "Verwenden Sie eine Rüttelplatte oder Walze auf jeder Lage für maximale Dichte und Stabilität.",
    "Installieren Sie Randeinfassungen (Stahl, Aluminium oder Betonrandsteine) auf beiden Seiten, um das Wandern von Schotter in den Garten zu verhindern.",
    "Wölben Sie die Einfahrtmitte leicht höher (3 bis 5 cm), damit Wasser zu beiden Seiten abfließt.",
  ],
  commonMistakes: [
    "Rundkies als Fahrfläche verwenden — seine runde Form verdichtet nicht und Steine spritzen unter den Reifen weg.",
    "Schotter direkt auf Mutterboden kippen ohne zu planieren — organischer Boden zersetzt sich und verursacht Senkstellen und Schlammvermischung.",
    "Nur 5 bis 8 cm Schotter aufbringen — das ist zu dünn für Fahrzeugverkehr und wird schnell bis zum Planum durchspuren.",
    "Die Vliesschicht weglassen — ohne sie sinkt Schotter innerhalb von 1 bis 2 Jahren in weichen Boden ein und Sie verlieren die Hälfte Ihres Materials.",
    "Zwischen den Lagen nicht verdichten — loser Schotter verschiebt sich und entwickelt Spurrinnen und Schlaglöcher innerhalb weniger Wochen.",
  ],
  faqs: [
    {
      question: "Wie viel Schotter brauche ich für eine Einfahrt?",
      answer: "Eine Standard-Einzeleinfahrt (3,5 Meter breit, 15 Meter lang, 15 cm stark) benötigt etwa 8 m³ (12 bis 14 Tonnen) Schotter. Eine Doppeleinfahrt (6×15 Meter bei 15 cm Stärke) benötigt etwa 14 m³ (21 bis 25 Tonnen). Diese Mengen beinhalten einen 10 % Verschnittfaktor für Verdichtung und Verteilung.",
    },
    {
      question: "Was kostet eine Schottereinfahrt?",
      answer: "Material für eine Schottereinfahrt kostet 15 bis 35 € pro Quadratmeter je nach Schottertyp und Stärke. Eine 3,5×15-Meter-Einfahrt kostet 800 bis 1.800 € nur für Schotter. Professionelle Ausführung mit Planierung, Vlies und Verdichtung kostet typischerweise 15 bis 40 € pro m², sodass die Gesamtkosten für eine Einzeleinfahrt bei 1.600 bis 4.000 € liegen.",
    },
    {
      question: "Welcher Schotter ist der beste für eine Einfahrt?",
      answer: "Gebrochener Splitt (5/8 oder 8/16 mm) ist das beste Allround-Einfahrtmaterial, weil seine kantigen Kanten sich bei der Verdichtung verzahnen. Frostschutz (0/32 mm) oder Mineralbeton ist noch besser für Schwerlastverkehr — er enthält Steinmehl, das das Aggregat zu einer nahezu festen Oberfläche verbindet. Verwenden Sie Schotter 16/32 für den Unterbau und Splitt oder Frostschutz für die Deckschicht.",
    },
    {
      question: "Wie stark sollte Schotter für eine Einfahrt sein?",
      answer: "Eine Schottereinfahrt sollte mindestens 15 bis 20 cm stark sein für PKW-Verkehr, aufgebaut in 2 bis 3 Lagen. Für Schwerlastverkehr (LKW, Baumaschinen) verwenden Sie 25 bis 30 cm Gesamtstärke. Jede Lage muss vor dem Aufbringen der nächsten verdichtet werden. Eine dünne 5 bis 8 cm Schicht wird innerhalb weniger Monate bis zum Planum durchspuren.",
    },
    {
      question: "Wie lange hält eine Schottereinfahrt?",
      answer: "Eine fachgerecht angelegte Schottereinfahrt hält 10 bis 15 Jahre, bevor eine größere Erneuerung nötig wird. Die jährliche Wartung umfasst das Zurückrechen von verschobenem Schotter und das Aufbringen einer 3 bis 5 cm Ausgleichsschicht alle 2 bis 3 Jahre. Die Tragschicht kann bei fachgerechter Ausführung mit Vlies und Drainage praktisch unbegrenzt halten.",
    },
    {
      question: "Brauche ich Geotextilvlies unter einer Schottereinfahrt?",
      answer: "Ja, Geotextilvlies ist unter einer Schottereinfahrt unverzichtbar. Ohne Vlies sinkt Schotter innerhalb von 1 bis 2 Jahren in weichen Boden ein, und Erde arbeitet sich durch den Stein nach oben und erzeugt eine schlammige Oberfläche. Verwenden Sie gewerbliches Geotextilvlies mit Fahrzeugbelastungsklasse — nicht das dünne Unkrautvlies aus dem Gartenmarkt.",
    },
  ],
};

export const blockFillCalculator: CalculatorSEOContent = {
  disclaimer:
    "Diese Schätzung enthält einen 10 % Verschnittfaktor. Das tatsächliche Füllvolumen variiert je nach Hersteller, Kerngeometrie und Mörtelkonsistenz. Prüfen Sie die Kernmaße anhand des spezifischen Produktdatenblatts vor der Bestellung.",
  howToUse: [
    "Zählen Sie die Gesamtzahl der zu füllenden Hohlblocksteine — alle Schichten und Wandabschnitte einbeziehen.",
    "Wählen Sie die Blockgröße: 20 cm ist Standard für den Wohnungsbau, 25 cm und 30 cm für tragende oder höhere Wände.",
    "Wählen Sie den Fülltyp: Beton/Verguss für tragende Füllungen, Vermiculit für Dämmung, Schaumisolierung für Wärmeleistung.",
    "Klicken Sie auf Berechnen, um Kubikmeter und Sackanzahl zu erhalten.",
  ],
  materialInfo:
    "Die Hohlraumfüllung (auch Kernfüllung oder Vergussfüllung) ist das Verfahren zum Füllen der Hohlkerne von Hohlblocksteinen (z. B. KS-Plansteine, Leichtbetonhohlblöcke) mit Beton, Vergussmörtel, Vermiculit oder Schaumdämmstoff. Tragende Kernfüllungen verwenden Fließbeton oder Vergussmörtel (typisch C20/25), der in die Kerne fließt und die eingelegte Bewehrung umschließt. Die DIN 1053 und die Eurocode-Normen (DIN EN 1996) schreiben verfüllte Kerne in bestimmten Abständen vor — in der Regel alle 1,20 m horizontal sowie an allen Ecken, Laibungen und Ringankerschichten.\n\nDie Bewehrungsführung ist entscheidend für die Tragfähigkeit. Vertikale Bewehrungsstähle (Ø 10 oder Ø 12 mm) werden im Fundament verankert und ragen durch die zu verfüllenden Kerne nach oben. Horizontale Bewehrung verläuft durch Ringankerblöcke am Wandkopf und in Zwischenschichten laut Statik. Alle vergossenen Kerne müssen bewehrt sein — das bloße Füllen leerer Kerne ohne Stahl erfüllt die statischen Anforderungen in den meisten Fällen nicht.\n\nFür nicht tragende Anwendungen bietet Vermiculit-Schüttung mäßige Dämmung (R-Wert ca. 0,37 pro cm) und wird trocken in die Kerne geschüttet. Spritzschaum bietet höhere R-Werte (ca. 1,05 pro cm bei PU-Hartschaum), kostet aber deutlich mehr und erfordert Fachverarbeitung. Standard-20-cm-Hohlblocksteine haben zwei Kerne mit ca. 0,007 Kubikmeter Füllvolumen pro Stein. 25-cm- und 30-cm-Steine haben proportional größere Kerne.\n\nRechnen Sie mit 120 bis 160 EUR pro Kubikmeter für Transportbeton-Vergussmörtel oder 4 bis 6 EUR pro 25-kg-Sack Fertigmischung für kleine Projekte. Vermiculit kostet 12 bis 20 EUR pro 100-Liter-Sack. Bestellen Sie immer 10 % mehr für Setzung, Verschüttung und ungleichmäßige Kerngrößen.",
  nextSteps: [
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Streifenfundament-Rechner", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Schotter-Rechner", href: "/calculators/foundation/gravel-calculator/" },
  ],
  installationTips: [
    "Feuchten Sie die Hohlblocksteine vor dem Vergießen an — trockene Steine entziehen dem Mörtel Wasser und schwächen die Füllung.",
    "Gießen Sie Vergussmörtel in Etappen von maximal 1,20 m Höhe, dann mit Rüttler oder Stab verdichten.",
    "Verwenden Sie Feinbeton (max. 8 mm Körnung), damit er frei durch die Kerne fließt, ohne zu brücken.",
    "Setzen Sie vertikale Bewehrung vor dem Mauern ein und richten Sie sie lotrecht aus.",
    "Bauen Sie Reinigungsöffnungen am Wandfuß hoher Wände ein, um Kerne vor dem Vergießen inspizieren zu können.",
    "Füllen Sie Ringankerschichten vollständig und verdichten Sie den Verguss, um Hohlräume um die horizontale Bewehrung zu beseitigen.",
  ],
  commonMistakes: [
    "Alle Kerne einer hohen Wand auf einmal vergießen — der Druck kann untere Schichten sprengen. Begrenzen Sie Schüttungen auf 1,20-m-Etappen.",
    "Bewehrung in vergossenen Kernen weglassen — Kerne ohne Stahl bieten kaum strukturellen Wert.",
    "Normalen Beton statt Vergussmörtel verwenden — grobe Gesteinskörnung überbrückt die Kernöffnung und erzeugt Hohlräume.",
    "Verguss nicht mit Rüttler oder Stab verdichten — Lufteinschlüsse verringern die Verbundfestigkeit um bis zu 50 %.",
    "Kerne bei Frosttemperaturen füllen — Verguss muss mindestens 48 Stunden über 5 °C aushärten.",
  ],
  faqs: [
    { question: "Wie viel Beton brauche ich zum Füllen von Hohlblocksteinen?", answer: "Ein Standard-20-cm-Hohlblockstein benötigt ca. 0,007 m³ Vergussmörtel. Für 100 Steine brauchen Sie etwa 0,77 m³ inklusive 10 % Verschnitt. Geben Sie oben Ihre Stückzahl und Blockgröße ein, um sofort Kubikmeter und Sackzahl zu erhalten." },
    { question: "Wie viele 25-kg-Säcke Beton zum Füllen eines Hohlblocksteins?", answer: "Ein 25-kg-Sack Vergussmörtel füllt etwa 2 Standard-20-cm-Hohlblocksteine. Für 100 Steine benötigen Sie ca. 55 Säcke. Bei 30-cm-Steinen füllt ein Sack nur etwa 1,2 Steine wegen des größeren Kernvolumens." },
    { question: "Müssen alle Kerne von Hohlblocksteinen gefüllt werden?", answer: "Nein — Bauvorschriften verlangen nur die Füllung von Kernen mit Bewehrung oder Ringankern. In der Regel werden Kerne alle 1,20 m horizontal, an Ecken, Tür-/Fensterlaibungen und am Ringankergurt verfüllt. In Erdbebengebieten kann jeder Kern verfüllt werden müssen." },
    { question: "Was ist der Unterschied zwischen Vergussmörtel und Beton für Hohlblockfüllungen?", answer: "Vergussmörtel ist eine fließfähige Betonmischung mit kleiner Gesteinskörnung (max. 8 mm) und höherem Wassergehalt, die in enge Kerne fließen kann. Normaler Beton hat größere Zuschläge, die in den Kernen klemmen und Hohlräume erzeugen." },
    { question: "Kann ich Hohlblocksteine mit Schaumdämmung statt Beton füllen?", answer: "Ja, bei nicht tragenden Wänden, wenn die Bauordnung dies erlaubt. PU-Spritzschaum bietet ca. R 1,05 pro cm und verbessert auch die Feuchtebeständigkeit. Vermiculit-Schüttung ist günstiger mit ca. R 0,37 pro cm. Beide bieten keine Tragfähigkeit — wenn der Statiker vergossene Bewehrung vorschreibt, müssen diese Kerne mit Verguss gefüllt werden." },
    { question: "Wie viele Kubikmeter Verguss für eine Hohlblockwand?", answer: "Multiplizieren Sie die zu füllenden Steine mit dem Kernvolumen: 0,007 m³ pro 20-cm-Stein, 0,009 m³ pro 25-cm-Stein oder 0,011 m³ pro 30-cm-Stein. Eine typische 20-cm-Fundamentwand mit 400 Steinen und Vollfüllung benötigt ca. 3,1 m³ Verguss inklusive 10 % Verschnitt." },
  ],
};

export const mortarMixCalculator: CalculatorSEOContent = {
  disclaimer:
    "Diese Schätzung enthält einen 10 % Verschnittfaktor. Der tatsächliche Mörtelverbrauch variiert je nach Stein- oder Ziegelgröße, Fugenprofil, Verarbeitungsqualität und Witterungsbedingungen. Bestätigen Sie die Mengen immer bei Ihrem Baustoffhändler vor der Bestellung.",
  howToUse: [
    "Berechnen Sie die Gesamtfläche der Wand in Quadratmetern — multiplizieren Sie die Wandlänge mit der Höhe und ziehen Sie Fenster- und Türöffnungen ab.",
    "Wählen Sie die Mörtelgruppe — Gruppe I für allgemeine Arbeiten über Erdniveau, Gruppe II für tragende und erdberührte Bauteile, Gruppe III für schwere Belastungen.",
    "Wählen Sie die Fugendicke — 10 mm ist Standard für die meisten Mauerwerksarbeiten.",
    "Klicken Sie auf Berechnen, um die Anzahl der Fertigmörtelsäcke sowie die Mengen für das Selbstmischen mit Portlandzement und Sand zu erhalten.",
  ],
  materialInfo:
    "Mörtel ist der Bindebaustoff zwischen Mauersteinen, Klinkern und Natursteinen. Er besteht aus Portlandzement, Kalkhydrat, Sand und Wasser, gemischt zu einer verarbeitbaren Konsistenz, die eine effiziente Verlegung bei gleichzeitiger struktureller Bindung und Witterungsbeständigkeit ermöglicht.\n\nIn Deutschland werden Mauermörtel nach DIN EN 998-2 und DIN 20000-412 klassifiziert. Die gebräuchlichsten Mörtelgruppen sind: Mörtelgruppe I (Kalkmörtel, ca. 1 N/mm² Druckfestigkeit) für nicht tragendes Mauerwerk und Innenwände, Mörtelgruppe II (Kalkzementmörtel, ca. 2,5 N/mm²) als Standardmörtel für die meisten Anwendungen einschließlich Außenmauerwerk, und Mörtelgruppe III (Zementmörtel, ca. 10 N/mm²) für stark belastetes Mauerwerk, Fundamentwände und erdberührte Bauteile.\n\nFertigmörtelmischungen (Trockenmörtel) sind in 25-kg- und 40-kg-Säcken erhältlich. Ein 25-kg-Sack ergibt ca. 14 Liter verarbeitungsfähigen Mörtel und reicht für etwa 8 bis 10 Mauersteine (24×11,5×7,1 cm, Normalformat NF) bei 12 mm Fugendicke. Für große Projekte ist Silo-Trockenmörtel wirtschaftlicher.\n\nDie gängigen Marken in Deutschland sind Sakret, quick-mix, PCI und Knauf. Fertigmörtelsäcke (25 kg) kosten ca. 3 bis 6 EUR im Baustoffhandel (Baustoffring, BayWa, hagebau, OBI, HORNBACH). Mauersand kostet ca. 20 bis 35 EUR pro Tonne. Bei der Verarbeitung ist die DIN 1053 für Mauerwerk zu beachten.",
  nextSteps: [
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Hohlblock-Füllrechner", href: "/calculators/foundation/block-fill-calculator/" },
    { label: "Streifenfundament-Rechner", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Nur so viel Mörtel anrühren, wie in 90 Minuten verarbeitet werden kann — danach beginnt der Mörtel abzubinden und verliert seine Verarbeitbarkeit.",
    "Mauersteine und Ziegel vor dem Vermauern anfeuchten, damit sie dem Mörtel nicht das Wasser entziehen, was zu schwachen Verbindungen führt.",
    "Gleichmäßige Fugendicke einhalten, indem eine Richtschnur gespannt und alle 3 bis 4 Schichten mit der Wasserwaage kontrolliert wird.",
    "Die Fugen verfugen, wenn der Mörtel daumendruckfest ist — zu frühes Verfugen verschmiert die Oberfläche, zu spätes verhindert die richtige Verdichtung.",
    "Frisch gemauerte Wände bei heißem, trockenem oder windigem Wetter mit Folie abdecken, um schnellen Feuchtigkeitsverlust und Rissbildung zu vermeiden.",
  ],
  commonMistakes: [
    "Falsche Mörtelgruppe verwenden — Gruppe III in Innenwänden ist zu starr und reißt; Gruppe I im Erdreich ist zu schwach.",
    "Zu viel Wasser in die Mischung geben — flüssiger Mörtel hat reduzierte Festigkeit und verschmutzt die Sichtflächen.",
    "Mörtel nach Beginn des Abbindens erneut anmischen — das Zugeben von Wasser zu steifem Mörtel reduziert die Haftfestigkeit dauerhaft.",
    "Zu große Chargen anrühren — Mörtel, der länger als 2 Stunden in der Wanne steht, ist unbrauchbar und muss entsorgt werden.",
    "Stoßfugen nicht mit Mörtel füllen — leere Vertikalfugen bilden Eintrittspunkte für Wasser und schwächen die Wand strukturell.",
  ],
  faqs: [
    {
      question: "Wie viel Mörtel brauche ich pro Quadratmeter?",
      answer: "Für Normalformat-Ziegel (24×11,5×7,1 cm) mit 12 mm Fugen benötigen Sie ca. 30 Liter Mörtel pro Quadratmeter Wandfläche, das entspricht etwa 2 Säcken à 25 kg Fertigmörtel. Für Porenbetonblöcke (60×25×20 cm) mit Dünnbettmörtel ist der Verbrauch deutlich geringer: ca. 3 bis 5 kg pro Quadratmeter.",
    },
    {
      question: "Was ist der Unterschied zwischen Mörtelgruppe I, II und III?",
      answer: "Mörtelgruppe I (Kalkmörtel, ≥1 N/mm²) ist für nicht tragendes Innenmauerwerk. Gruppe II (Kalkzementmörtel, ≥2,5 N/mm²) ist der Standard für tragendes Mauerwerk innen und außen. Gruppe III (Zementmörtel, ≥10 N/mm²) wird für stark belastete und erdberührte Bauteile verwendet. Die meisten Wohnbauten verwenden Gruppe II.",
    },
    {
      question: "Wie mische ich Mörtel selbst an?",
      answer: "Für Mörtelgruppe II mischen Sie 1 Teil Portlandzement, 1 Teil Kalkhydrat und 6 Teile Mauersand nach Volumen. Für Gruppe III: 1 Teil Zement, 0,25 Teile Kalk und 3 Teile Sand. Wasser schrittweise zugeben, bis die Mischung eine geschmeidige, formstabile Konsistenz hat.",
    },
    {
      question: "Wie lange braucht Mörtel zum Abbinden?",
      answer: "Mörtel erreicht die Anfangsfestigkeit in 2 bis 4 Stunden und ist nach 24 Stunden für leichte Belastung fest genug. Die volle Aushärtung dauert 28 Tage. Vermeiden Sie schwere Lasten für mindestens 7 Tage. Bei Temperaturen unter 5 °C verlangsamt sich die Aushärtung drastisch und der Mörtel muss mindestens 48 Stunden vor Frost geschützt werden.",
    },
    {
      question: "Kann ich Mörtel statt Beton verwenden?",
      answer: "Nein. Mörtel und Beton sind verschiedene Produkte mit unterschiedlichen Zwecken. Mörtel ist zum Verbinden von Mauersteinen gedacht und enthält keine Gesteinskörnung (Kies). Beton enthält Kies und ist für Fundamente, Decken und Stützen konzipiert. Mörtel als Betonersatz führt zu Versagen.",
    },
    {
      question: "Welchen Mörtel für Klinker und Sichtmauerwerk?",
      answer: "Für Klinker und Sichtmauerwerk wird Mörtelgruppe IIa (Kalkzementmörtel mit angepasster Festigkeit) empfohlen. Verwenden Sie Fugenmörtel mit passendem Farbton — Grau, Weiß oder Anthrazit sind die gängigsten Farben. Trasszement-basierter Mörtel reduziert Ausblühungen auf Sichtmauerwerk erheblich.",
    },
  ],
};

// ─── FLOOR FRAMING ───────────────────────────────────────────────────────────

export const rimJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Messen Sie den Umfang Ihres Deckensystems in Metern.",
    "Geben Sie die verfügbare Holzlänge ein.",
    "Klicken Sie auf Materialien berechnen für die Randbalken-Stückzahl.",
    "Berücksichtigen Sie Verschnitt an Ecken.",
  ],
  materialInfo:
    "Randbalken (auch Stirnbalken oder Randbretter) verlaufen entlang des Umfangs der Deckenkonstruktion, schließen die Balkenköpfe ab und sorgen für seitliche Aussteifung. Sie haben den gleichen Querschnitt wie die Deckenbalken: 6×18 cm, 6×20 cm oder 6×24 cm je nach statischer Auslegung. In Deutschland wird KVH (Konstruktionsvollholz) der Sortierklasse S10/C24 verwendet. Handeslängen: 3 m, 4 m, 5 m und 6 m. Der Preis entspricht dem der Deckenbalken gleicher Dimension. Randbalken sind zwar ein kleiner Kostenanteil, aber statisch kritisch für die Stabilität des Deckensystems. Die Wärmedämmung der Randbalkenbereiche ist nach EnEV/GEG besonders wichtig, da sie eine signifikante Wärmebrücke darstellen.",
  nextSteps: [
    { label: "Deckenbalken-Rechner", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Schwellenholz-Rechner", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Rahmennägel-Rechner", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: [
    "Randbalken bündig mit der Oberkante der Deckenbalken einbauen.",
    "Durch den Randbalken in den Stirnschnitt jedes Deckenbalkens nageln.",
    "Randbalken dämmen — sie sind eine erhebliche Wärmebrücke nach GEG/EnEV.",
    "Holzfeuchte unter 20 % sicherstellen, um Schwund und Verwerfung zu minimieren.",
    "Bei Holzrahmenbau Dampfbremse am Randbalkenbereich sorgfältig anschließen.",
  ],
  commonMistakes: [
    "Randbalkenbereich nicht dämmen und abdichten — verursacht erhebliche Wärmeverluste.",
    "Andere Holzdimension verwenden als die Deckenbalken — muss gleiche Höhe haben.",
    "Randbalken nicht kraftschlüssig an Deckenbalken anschließen.",
    "Feuchteschutz an der Außenseite vergessen.",
    "Dampfbremsenanschluss am Randbalken vernachlässigen.",
  ],
  faqs: [
    { question: "Was ist der Unterschied zwischen Randbalken und Stirnbalken?", answer: "Es ist dasselbe Bauteil — der Begriff variiert regional. Beides bezeichnet den Balken, der den Umfang der Deckenkonstruktion bildet und die Balkenköpfe abschließt." },
    { question: "Muss der Randbalkenbereich gedämmt werden?", answer: "Ja. Randbalken können bis zu 15 % des Wärmeverlusts eines Hauses verursachen. Hartschaumplatten (XPS oder PUR) auf der Außenseite, zusätzlich Mineralwolldämmung zwischen den Balkenköpfen, sind die effektivste Methode." },
    { question: "Welchen Querschnitt für den Randbalken?", answer: "Gleicher Querschnitt wie die Deckenbalken. Bei 6×24-cm-Deckenbalken auch 6×24-cm-Randbalken verwenden." },
    { question: "Brauche ich Randbalken an allen vier Seiten?", answer: "Ja. An den Seiten senkrecht zu den Balken schließt der Randbalken die Balkenköpfe ab. An den parallelen Seiten fungiert er als erster und letzter Balken." },
    { question: "Kann ich BSH für den Randbalken verwenden?", answer: "Ja, BSH (Brettschichtholz) ist ausgezeichnet für Randbalken — gerader, formstabiler und ohne Äste. Allerdings teurer als KVH." },
    { question: "Wie wird der Randbalken an die Deckenbalken genagelt?", answer: "3 Nägel (3,1×90 mm) durch den Randbalken in jeden Balkenkopf. Zusätzlich Winkelverbinder (Simpson Strong-Tie oder Knapp) in erdbebengefährdeten Gebieten." },
  ],
};

export const floorJoistCalculator: CalculatorSEOContent = {
  disclaimer: "Bestellen Sie 2–3 Balken extra als Verschnittreserve.",
  howToUse: [
    "Geben Sie die Raumbreite senkrecht zur Balkenrichtung ein.",
    "Wählen Sie den Achsabstand (40 cm ist Standard für Wohnbereiche).",
    "Klicken Sie auf Materialien berechnen.",
    "Prüfen Sie die Spannweitentabellen für den passenden Querschnitt.",
  ],
  materialInfo:
    "Deckenbalken sind die tragenden Horizontalbauteile einer Holzdecke. Gängige Querschnitte im Wohnungsbau sind KVH 6×18 cm (Spannweiten bis 3,50 m), 6×20 cm (bis 4,20 m), 6×24 cm (bis 5,00 m) und 8×24 cm (bis 5,50 m), jeweils bei 40 cm Achsabstand und S10/C24. Für größere Spannweiten werden BSH-Balken, Duo-/Trio-Balken oder Doppel-T-Träger (I-Joists) verwendet, die bis 9 m ohne Zwischenunterstützung überbrücken. KVH der Sortierklasse S10/C24 ist der Standard. Fichte/Kiefer ist die am häufigsten verwendete Holzart. Die Holzfeuchte muss unter 20 % liegen — zu feuchtes Holz verformt sich nach dem Einbau und verursacht unebene Böden und Risse in den Belägen. Die Kosten für Deckenbalken sind ein wesentlicher Budgetposten — optimierte Querschnitt- und Abstandswahl nach Spannweitentabellen (DIN 1052 / Eurocode 5) ist entscheidend für ein wirtschaftliches Projekt.",
  nextSteps: [
    { label: "Aussteifungs-Rechner", href: "/calculators/floor-framing/bridging-calculator/" },
    { label: "OSB-Platten-Rechner", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Balkenschuh-Rechner", href: "/calculators/hardware/joist-hanger-calculator/" },
  ],
  installationTips: [
    "Alle Balken mit der Wölbung (Bogenrichtung) nach oben einbauen für einen ebenen Boden.",
    "Balkenschuhe (Simpson, Knapp) an Verbindungen mit Unterzügen verwenden.",
    "Balken an den Auflagerpunkten gegen seitliches Kippen sichern.",
    "Balkenabstand mit Schablone kontrollieren.",
    "Holzfeuchte vor Einbau prüfen — maximal 20 %.",
  ],
  commonMistakes: [
    "Wölbungsrichtung nicht konsequent einhalten — verursacht unebene Böden.",
    "Balken für die Spannweite unterdimensionieren — immer Spannweitentabellen nach DIN/EC5 konsultieren.",
    "Den zusätzlichen Anfangsbalken vergessen.",
    "Zu feuchtes Holz einbauen (über 20 % Holzfeuchte).",
    "Queraussteifung bzw. Windrispen vergessen.",
  ],
  faqs: [
    { question: "40 cm oder 60 cm Achsabstand für Deckenbalken?", answer: "40 cm ist Standard für Wohnbereiche — steiferer, schwingungsärmerer Boden. 60 cm ist mit dickerem Unterboden (22 mm OSB) zulässig und wird im industriellen Holzbau verwendet." },
    { question: "Welchen Balkenquerschnitt brauche ich?", answer: "Abhängig von der Spannweite: 6×18 cm bis ca. 3,50 m, 6×20 cm bis 4,20 m, 6×24 cm bis 5,00 m bei 40 cm Achsabstand und S10/C24. Immer mit Spannweitentabellen der DIN/EC5 abgleichen." },
    { question: "Wie viele Deckenbalken für einen 4-m-Raum?", answer: "Bei 4 m Breite und 40 cm Achsabstand: 4 m ÷ 0,40 m + 1 = 11 Balken. Plus 2–3 Reservebalken, also 13–14 bestellen." },
    { question: "Kann ich Doppel-T-Träger statt Vollholz verwenden?", answer: "Ja, Doppel-T-Träger (I-Joists) überbrücken größere Spannweiten bei geringerem Gewicht und ohne Verwerfung. In Deutschland von Steico, Metsä Wood und anderen Herstellern verfügbar." },
    { question: "Welche Holzart für Deckenbalken?", answer: "Fichte/Kiefer (Fi/Ki) in Sortierklasse S10/C24 ist der Standard in Deutschland. KVH (Konstruktionsvollholz) mit technischer Trocknung und Hobelung ist das Standardprodukt." },
    { question: "Brauche ich einen Unterzug bei Spannweiten über 5 m?", answer: "Abhängig vom Balkenquerschnitt. Mit 6×18 cm wahrscheinlich ab 3,50 m. Mit 8×24 cm bis ca. 5,50 m ohne Unterzug möglich. Immer den Tragwerksplaner oder Spannweitentabellen konsultieren." },
  ],
};

export const bridgingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Geben Sie die lichte Spannweite der Deckenbalken in Metern ein.",
    "Klicken Sie auf Materialien berechnen — Aussteifungen sind alle 2,40 m Spannweite erforderlich.",
    "Berücksichtigen Sie die Balkenanzahl für die Gesamtmenge.",
    "Wählen Sie zwischen Massivblockierung und Kreuzaussteifung.",
  ],
  materialInfo:
    "Aussteifungen (auch Wechsel, Blockierung oder Kreuzversteifung) werden zwischen den Deckenbalken in regelmäßigen Abständen eingebaut, um seitliches Kippen, Knicken und übermäßige Schwingungen zu verhindern. Die DIN fordert Aussteifungen bei Spannweiten über 2,40 m in der Mitte jeder Spannweite. Es gibt drei Haupttypen: Massivblockierung (maßgeschnittene Holzstücke zwischen Balken), Kreuzaussteifung aus Holz (diagonal über Kreuz) und Metallaussteifung (Simpson Strong-Tie oder ähnliche). Massivblockierung wird aus Abschnitten des gleichen Balkenquerschnitts hergestellt und ist damit kostengünstig. Metallaussteifungen kosten 2–5 EUR pro Stück, sind aber deutlich schneller einzubauen. In Deutschland ist Massivblockierung aus Holz die am häufigsten verwendete Methode.",
  nextSteps: [
    { label: "Deckenbalken-Rechner", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Unterbodenkleber-Rechner", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Rahmennägel-Rechner", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: [
    "Massivblockierung oder Metallkreuzaussteifung einbauen.",
    "Blockierungen alternierend versetzen für einfacheres Nageln.",
    "Bei Kreuzaussteifung sowohl obere als auch untere Flansche nageln.",
    "Blockierungen passgenau zuschneiden für maximale Wirkung.",
    "Blockierungen vor dem Verlegen der Unterbodenplatten einbauen.",
  ],
  commonMistakes: [
    "Aussteifungen vor dem Unterboden einbauen und nur oben nageln — oben fixieren, unten erst nach Unterbodenverlegung.",
    "Unterdimensionierte Blockierung für die Balkenhöhe verwenden.",
    "Aussteifungen bei kurzen Spannweiten ganz weglassen.",
    "Blockierungen zu locker einbauen — müssen press zwischen den Balken sitzen.",
    "Falschen Nageltyp oder zu wenige Nägel verwenden.",
  ],
  faqs: [
    { question: "Sind Aussteifungen nach DIN vorgeschrieben?", answer: "Ja. Die DIN/Eurocode 5 fordert Blockierung oder Aussteifung für Deckenbalken mit Spannweiten über 2,40 m, eingebaut in der Spannweitenmitte." },
    { question: "Massivblockierung vs. Kreuzaussteifung: Was ist besser?", answer: "Massivblockierung bietet bessere Seitenstabilität und dient als Befestigungsgrund für Leitungen. Kreuzaussteifung aus Metall ist schneller einzubauen." },
    { question: "In welchem Abstand Aussteifungen einbauen?", answer: "Alle 2,40 m Spannweite eine Reihe. Bei Spannweiten über 4,80 m zwei Reihen im Drittelspunkten. Beispiel: 3,60-m-Spannweite = eine Reihe bei 1,80 m." },
    { question: "Kann ich Reststücke für Massivblockierung verwenden?", answer: "Ja — Blockierung wird aus dem gleichen Querschnitt wie die Deckenbalken geschnitten. Bei 6×20-cm-Balken schneiden Sie 6×20-cm-Stücke auf die Balkenfachbreite zu (ca. 36,8 cm bei 40 cm Achsabstand)." },
    { question: "Beseitigen Aussteifungen Bodenschwingungen?", answer: "Aussteifungen reduzieren Schwingungen erheblich, indem sie Punktlasten auf mehrere Balken verteilen. Wenn der Boden dennoch schwingt, kann das Problem unterdimensionierte Balken oder zu großer Abstand sein." },
    { question: "Welche Nägel für Massivblockierung?", answer: "2 Nägel 3,1×90 mm an jedem Ende, durch den Balken in die Blockierung genagelt. Bei alternierend versetzter Anordnung direkt durch die Balkenflanke nageln." },
  ],
};

export const subfloorAdhesiveCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Messen Sie die Gesamtbodenfläche in Quadratmetern.",
    "Geben Sie die Ergiebigkeit pro Kartusche ein (Herstellerangabe prüfen; 4,5 m² ist typisch).",
    "Klicken Sie auf Materialien berechnen.",
    "Berücksichtigen Sie extra Kleber für Stoßfugen.",
  ],
  materialInfo:
    "Unterbodenkleber ist ein hochfester Bau-Klebstoff (PU-basiert, z. B. Sika T54, Pattex PU-Holzleim oder Würth PU-Montagekleber), der als durchgehende Raupe auf die Balkenoberseite aufgetragen wird, bevor die OSB- oder Sperrholzplatten verlegt werden. Seine Hauptfunktion ist die Vermeidung von Knarrgeräuschen durch eine strukturelle Verklebung zwischen Platte und Balken. In Deutschland erhältlich in 310-ml-Kartuschen (Ergiebigkeit ca. 4–5 m²) und 600-ml-Folienbeuteln für Profi-Pistolen. PU-Kleber sind Lösemittel-basierten Klebern überlegen, da sie elastisch bleiben, feuchtebeständig sind und Unebenheiten ausgleichen. Kosten: 5–12 EUR pro Kartusche je nach Marke und Qualität. Eine minimale Investition im Vergleich zu den Kosten für die spätere Reparatur knarrender Böden.",
  nextSteps: [
    { label: "OSB-Platten-Rechner", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Deckenbalken-Rechner", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Aussteifungs-Rechner", href: "/calculators/floor-framing/bridging-calculator/" },
  ],
  installationTips: [
    "Durchgehende Raupe auftragen — nicht punktuell kleben.",
    "Abschnittsweise arbeiten und Platten verlegen, bevor der Kleber an der Oberfläche abtrocknet.",
    "Pistole mit 6-mm-Düse verwenden.",
    "Nur auf trockenen Balken auftragen (Holzfeuchte unter 20 %).",
    "Überschüssigen Kleber sofort mit Lösemittel entfernen, bevor er aushärtet.",
  ],
  commonMistakes: [
    "Kleber weglassen, um Zeit zu sparen — knarrende Böden sind nachträglich schwer zu reparieren.",
    "Kleber auf nasse oder gefrorene Balken auftragen.",
    "Zu dünne Raupe auftragen — muss mindestens 6 mm Durchmesser haben.",
    "PU-Kleber ohne Handschuhe verarbeiten — PU-Kleber ist extrem schwer von der Haut zu entfernen.",
    "Platten nicht innerhalb der offenen Zeit des Klebers auflegen.",
  ],
  faqs: [
    { question: "Kann ich den Unterbodenkleber weglassen?", answer: "Technisch ja, wenn Sie Schrauben statt Nägel verwenden, aber der Kleber reduziert Knarren drastisch und erhöht die Steifigkeit. Profis verwenden Kleber plus Nägel oder Schrauben für beste Ergebnisse." },
    { question: "Wie viele Kartuschen pro Quadratmeter?", answer: "Eine Standard-310-ml-Kartusche deckt ca. 4–5 m² bei 6-mm-Raupe ab. Für 20 m² benötigen Sie 4–5 Kartuschen. Immer eine extra kaufen für Stoßfugen." },
    { question: "Welcher Kleber ist am besten?", answer: "PU-Kleber (Sika, Pattex, Würth) sind SMP- und Dispersionskleber überlegen, da sie elastisch bleiben, feuchtebeständig sind und Unebenheiten füllen." },
    { question: "Funktioniert Unterbodenkleber bei feuchtem Klima?", answer: "Ja, PU-Kleber härtet sogar durch Feuchtigkeit aus. Die Balken müssen aber trocken sein (unter 20 % Holzfeuchte) bei der Anwendung." },
    { question: "Kann ich normalen Holzleim verwenden?", answer: "Nein. Normaler Holzleim (PVAC/D3) hat nicht die strukturelle Festigkeit und Elastizität für Unterboden-Anwendungen. Verwenden Sie ausschließlich als Unterbodenkleber zugelassene PU-Kleber." },
    { question: "Brauche ich Kleber, wenn ich Schrauben verwende?", answer: "Kleber wird auch bei Verschraubung empfohlen. Schrauben verhindern das Lösen der Platten, aber Kleber schafft eine durchgehende Verbindung, die Mikrobewegungen eliminiert — die Kombination ergibt den steifsten und leisesten Boden." },
  ],
};

export const osbPanelCalculator: CalculatorSEOContent = {
  disclaimer: "10 % Verschnitt einplanen. Eine Standard-OSB-Platte 1.250 × 2.500 mm = 3,125 m² pro Platte.",
  howToUse: [
    "Messen Sie die Gesamtbodenfläche in Quadratmetern (Länge × Breite).",
    "Klicken Sie auf Materialien berechnen — jede Platte 1.250 × 2.500 mm deckt 3,125 m².",
    "Berücksichtigen Sie 10 % Verschnitt für Zuschnitte.",
    "Prüfen Sie die erforderliche Plattenstärke nach Balkenabstand.",
  ],
  materialInfo:
    "OSB-Platten (Oriented Strand Board) sind das Standardmaterial für Unterböden im Holzrahmenbau. Sie werden aus orientierten Holzspänen und Harz gepresst. Das Standardformat in Deutschland ist 1.250 × 2.500 mm (in einigen Märkten auch 1.250 × 2.050 mm), mit Stärken von 12 mm, 15 mm, 18 mm und 22 mm. Für Unterböden bei 40 cm Achsabstand ist mindestens 18 mm empfohlen, bei 60 cm Achsabstand 22 mm. Nut-und-Feder-Platten (OSB/3 T&G) erleichtern die Verlegung und schaffen einen steiferen Boden. Hauptmarken in Deutschland: Egger, Kronospan, Swiss Krono, Glunz. Kosten: 8–20 EUR pro Platte je nach Stärke und Qualität. Immer OSB/3 (feuchtebeständig) oder OSB/4 (feuchtebeständig, erhöhte Tragfähigkeit) für den Holzrahmenbau verwenden — OSB/2 ist nur für trockene Innenbereiche geeignet.",
  nextSteps: [
    { label: "Unterbodenkleber-Rechner", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Deckenbalken-Rechner", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Platten mit der langen Seite senkrecht zu den Balken verlegen.",
    "Stoßfugen zwischen den Reihen versetzen für konstruktive Kontinuität.",
    "Dehnfugen von 3 mm an allen Plattenrändern lassen.",
    "Ringnägel oder Schrauben alle 15 cm an den Rändern und 30 cm im Feld verwenden.",
    "Unterbodenkleber auf jede Balkenflanke auftragen vor dem Verlegen.",
  ],
  commonMistakes: [
    "Platten parallel zu den Balken verlegen — müssen immer quer zu den Balken liegen.",
    "Dehnfuge weglassen — Platten quellen bei Feuchtigkeit und wölben sich.",
    "Stoßfugen nicht zwischen den Reihen versetzen.",
    "OSB/2 statt OSB/3 im Holzrahmenbau verwenden — OSB/2 ist nicht feuchtebeständig.",
    "Zu dünne Platten für den Balkenabstand wählen.",
  ],
  faqs: [
    { question: "OSB oder Sperrholz für Unterboden: Was ist besser?", answer: "Beide funktionieren gut. OSB ist günstiger. Sperrholz ist dimensionsstabiler bei Feuchtigkeit. Im deutschen Holzrahmenbau ist OSB/3 das Standardprodukt." },
    { question: "Welche OSB-Stärke brauche ich?", answer: "18 mm für Balkenabstand 40 cm. 22 mm für 60 cm Abstand oder höhere Lasten. Bei Nut-und-Feder-Verlegung ist 18 mm für 40 cm Achsabstand Standard." },
    { question: "Wie viele OSB-Platten für 50 m²?", answer: "Jede Platte 1.250 × 2.500 mm deckt 3,125 m². Für 50 m² benötigen Sie 50 ÷ 3,125 = 16 Platten. Plus 10 % Verschnitt = 18 Platten." },
    { question: "Ist OSB feuchtebeständig?", answer: "OSB/3 und OSB/4 sind für den Einsatz in feuchten Bedingungen zugelassen (Nutzungsklasse 2 nach DIN EN 1995-1-1). Bei längerem Regen mit Plane abdecken und vor Bodenbelagsverlegung vollständig trocknen lassen." },
    { question: "Kann ich OSB als Fertigboden verwenden?", answer: "OSB ist kein Fertigfußboden und hält direktem Verkehr und Feuchtigkeit nicht stand. Immer einen geeigneten Bodenbelag aufbringen." },
    { question: "Wo kaufe ich OSB-Platten?", answer: "Im Baustoffhandel (Holzland-Partner), bei Hornbach, Bauhaus, OBI oder direkt beim Holzfachhandel. Palettenweise Bestellung spart 10–15 % gegenüber Einzelplattenpreis." },
  ],
};


// ─── WALL FRAMING ─────────────────────────────────────────────────────────────

export const studCalculator: CalculatorSEOContent = {
  disclaimer: "10 % Verschnitt einplanen, plus zusätzliche Ständer für Verstärkungen und Kurzständer.",
  howToUse: ["Messen Sie die gesamte Wandlänge in Laufmetern.", "Wählen Sie den Achsabstand (40 cm Standard für Außenwände).", "Geben Sie die Anzahl der Außenecken ein (je 2 Extra-Ständer).", "Geben Sie die Gesamtzahl der Tür- und Fensteröffnungen ein.", "Klicken Sie auf Materialien berechnen."],
  materialInfo: "Ständer sind die vertikalen Holzbauteile, die das Wandskelett bilden und Dach- sowie Deckenlasten tragen. Standardquerschnitte sind KVH 6×12 cm (C24) für Innenwände und 6×16 cm für Außenwände mit höherer Dämmmöglichkeit. Vorkonfektionierte Ständer von 2,35 m für Wandhöhen von 2,50 m sparen Zeit. Die Holzfeuchte muss unter 20 % liegen — feuchtes oder krummes Holz verursacht verzogene Wände und Risse in den Belägen. Im deutschen Holzrahmenbau (nach DIN 1052/EC5) wird ausschließlich KVH Sortierklasse S10/C24 verwendet. Der Preis liegt bei 5–8 EUR pro Ständer 6×12×250 cm. Marken: KVH von nordischen Anbietern (Metsä, Stora Enso) und deutschen Sägewerken. Ständerwerk ist ein wesentlicher Budgetposten — optimierte Planung nach Wandöffnungen und Eckkonstruktionen spart Material.",
  nextSteps: [
    { label: "Fußschwellen-Rechner", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Rähm-Rechner", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Sturzbalken-Rechner", href: "/calculators/wall-framing/header-calculator/" },
    { label: "Rahmennägel-Rechner", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: ["Vorkonfektionierte Ständer verwenden für einheitliche Wandhöhe.", "Ständerverteilung auf der Schwelle anreißen vor dem Zusammenbau.", "Nagelpistole für Ständerwerk verwenden — durch die Schwelle in die Ständer nageln.", "Doppelrähm über Öffnungen für statische Kontinuität.", "Ständer vor Einbau auf Geradheit prüfen und krumme aussortieren."],
  commonMistakes: ["Extra-Ständer an Ecken und Wandanschlüssen vergessen.", "Stiel- und Stützständer (King/Jack Studs) an Öffnungen vergessen.", "Ungleichmäßiger Achsabstand — Beplankung trifft dann nicht auf Ständerkanten.", "Zu feuchtes oder krummes Holz einbauen.", "Dampfbremsenanschlüsse nicht vorplanen."],
  faqs: [
    { question: "6×12 cm oder 6×16 cm Ständer für Außenwände?", answer: "6×16-cm-Ständer bei 60 cm Achsabstand werden zunehmend bevorzugt, da sie 16 cm Dämmung (WLG 035 = U-Wert ca. 0,22 W/(m²·K)) ermöglichen statt nur 12 cm. Die Energieeinsparung über die Lebensdauer überwiegt die höheren Holzkosten." },
    { question: "Welche Ständerhöhe für 2,50 m Raumhöhe?", answer: "Vorkonfektionierte Ständer von 2,35 m. Mit Fußschwelle und Doppelrähm (3 × 4 cm = 12 cm) ergibt sich eine Gesamtwandhöhe von ca. 2,47 m — passend für Standard-Gipskartonplatten." },
    { question: "Wie viele Ständer pro Laufmeter Wand?", answer: "Bei 40 cm Achsabstand ca. 2,5 Ständer/m. Bei 60 cm ca. 1,67 Ständer/m. Ecken und Öffnungen erfordern jeweils zusätzliche Ständer." },
    { question: "Was ist ein Stielständer (King Stud)?", answer: "Der Stielständer ist ein durchgehender Ständer neben jeder Tür- und Fensteröffnung, der den Sturzbalken trägt. Im Gegensatz zum Stützständer (Jack Stud) reicht er von Fußschwelle bis Rähm." },
    { question: "Wie viele Extra-Ständer pro Außenecke?", answer: "Jede Außenecke braucht mindestens 2 Extra-Ständer für Gipskarton-Befestigungsflächen in beiden Richtungen. Die gängigste Konfiguration verwendet 3 Ständer in L-Form." },
    { question: "Ist Holzrahmenbau in Deutschland günstiger als Mauerwerk?", answer: "In Deutschland ist Holzrahmenbau bei Eigenleistung und bei kürzerer Bauzeit oft wettbewerbsfähig. Die Kosten hängen von Region, Materialverfügbarkeit und gewähltem Wandaufbau ab. Holzrahmenbau bietet Vorteile bei Energieeffizienz und Vorfertigung." },
  ],
};

export const bottomPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Messen Sie die Gesamtlänge der Wand in Metern.", "Geben Sie die verfügbare Holzlänge ein (3 m oder 5 m sind gängig).", "Klicken Sie auf Materialien berechnen.", "Beachten Sie: Außenwand-Fußschwellen auf Beton müssen aus KDI-Holz sein."],
  materialInfo: "Die Fußschwelle ist das horizontale Holzbauteil an der Wandbasis, auf das die vertikalen Ständer genagelt werden. Alle Fußschwellen von Außenwänden mit Kontakt zum Betonfundament müssen aus KDI-Holz (kesseldruckimprägniert) sein, um Fäulnis und Schädlingsbefall zu widerstehen. Querschnitte entsprechen der Wand: 6×12 cm für 12-cm-Wände, 6×16 cm für 16-cm-Wände. KDI-Holz kostet 30–50 % mehr als unbehandeltes Holz, ist aber baurechtlich vorgeschrieben. Für Innenwände auf Holzunterboden kann unbehandeltes KVH des gleichen Querschnitts verwendet werden.",
  nextSteps: [
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Rähm-Rechner", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Schwellenholz-Rechner", href: "/calculators/foundation/sill-plate-calculator/" },
  ],
  installationTips: ["KDI-Holz für alle Fußschwellen mit Betonkontakt verwenden.", "Schlagschnur für exakte Ausrichtung der Schwellen verwenden.", "Bohrlöcher für Ankerschrauben vorbohren.", "Fußschwelle und Schwellenholz sind in Kombination mit Schwellendichtung einzubauen.", "Schnittflächen nachträglich mit Holzschutzmittel behandeln."],
  commonMistakes: ["Unbehandeltes Holz für Außenwand-Fußschwellen mit Betonkontakt verwenden.", "Schlagschnur weglassen — verursacht wellige Wände.", "KDI-Holz-Schnittstellen nicht nachbehandeln.", "Fußschwelle ohne Schwellendichtung auf Beton montieren.", "Falschen Querschnitt verwenden — muss mit den Ständern übereinstimmen."],
  faqs: [
    { question: "Muss die Fußschwelle aus KDI-Holz sein?", answer: "Ja, wenn die Fußschwelle Kontakt mit Beton oder Mauerwerk hat. Die DIN 68800 schreibt behandeltes Holz vor, wenn es innerhalb von 15 cm des Erdreichs oder in direktem Kontakt mit Beton ist." },
    { question: "Welchen Querschnitt für die Fußschwelle?", answer: "Gleicher Querschnitt wie die Wandständer. 6×12 cm für 12-cm-Wände, 6×16 cm für 16-cm-Wände." },
    { question: "Wie befestige ich die Fußschwelle am Beton?", answer: "Mit Ankerschrauben (M12), die im Betonfundament eingebettet sind. Bohrlöcher in der Schwelle mit 14-mm-Bohrer vorbohren (für M12-Bolzen), Schwelle aufsetzen und Muttern mit Unterlegscheiben anziehen." },
    { question: "Brauche ich unter der Fußschwelle eine Dichtung?", answer: "Ja — auf Beton immer Schwellendichtband (PE-Schaum) unterlegen. Für Innenwände auf Holzunterboden ist keine Dichtung nötig." },
    { question: "Wird die Fußschwelle an Türöffnungen durchgehend gelassen?", answer: "Die Fußschwelle wird beim Zusammenbau durchgehend montiert. Nach dem Aufstellen und Fixieren der Wand wird der Abschnitt an Türöffnungen mit einer Säbelsäge herausgeschnitten." },
    { question: "Wie viele Hölzer für 30 m Wand?", answer: "Bei 4-m-Hölzern: 30 ÷ 4 = 8 Stück aufgerundet. Plus 10 % Verschnitt = 9 Hölzer." },
  ],
};

export const topPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Messen Sie die Gesamtwandlänge in Metern.", "Geben Sie die Holzlänge ein.", "Klicken Sie auf Materialien berechnen — das Ergebnis enthält das doppelte Rähm (2 Lagen).", "Beachten Sie: Stoßversatz von mindestens 1,20 m zwischen den Lagen."],
  materialInfo: "Das Rähm (obere Schwelle) krönt die Ständerwand und besteht in der Regel aus zwei Lagen: der ersten Rähmlatte und der Riegelplatte (zweite Lage). Das Doppelrähm ist bei tragenden Wänden normativ vorgeschrieben und erfüllt mehrere Funktionen: Lastverteilung von Dach und Decke, statische Kontinuität an Wandstößen und Eckverbindung. Die Stöße der Riegelplatte müssen mindestens 1,20 m versetzt zur ersten Lage angeordnet sein. Gleiches Material wie die Ständer: KVH 6×12 cm oder 6×16 cm. Bei Berechnung doppelte Menge gegenüber der Fußschwelle einplanen.",
  nextSteps: [
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Fußschwellen-Rechner", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Wandbeplankung-Rechner", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: ["Stöße der Riegelplatte mindestens 1,20 m zur ersten Rähmlatte versetzen.", "Ecken mit der Riegelplatte übergreifen für statische Verbindung.", "Riegelplatte mit Nägeln 3,1×90 mm alle 40 cm versetzt nageln.", "Rähm-Lagen beim Vorfertigen am Boden zusammennageln.", "Stoßstellen immer über einem Ständer anordnen."],
  commonMistakes: ["Stöße der Riegelplatte direkt über den Stößen der ersten Lage anordnen — schwächt die Wand.", "Riegelplatte an Ecken nicht übergreifen lassen.", "Bei nichttragenden Wänden unnötigerweise auf Doppelrähm bestehen — manchmal reicht einfaches Rähm.", "Nagelabstand zu groß — maximal 40 cm.", "Holz mit zu hoher Feuchte einbauen."],
  faqs: [
    { question: "Brauchen alle Wände ein Doppelrähm?", answer: "Tragende Wände ja. Nichttragende Innenwände können mit einfachem Rähm auskommen, wenn der Statiker zustimmt." },
    { question: "Wie weit müssen die Stöße versetzt sein?", answer: "Mindestens 1,20 m. In der Praxis die Stöße so weit wie möglich voneinander entfernt anordnen." },
    { question: "Wie werden Ecken verbunden?", answer: "Die Riegelplatte der einen Wand greift über die erste Rähmlatte der Nachbarwand über. Dies schafft eine kraftschlüssige Eckverbindung." },
    { question: "Kann ich einfaches Rähm verwenden?", answer: "Nur bei nichttragenden Wänden und mit Zustimmung des Statikers. Im optimierten Holzrahmenbau (Advanced Framing) ist einfaches Rähm zulässig, wenn Sparren/Binder direkt über den Ständern aufliegen." },
    { question: "Muss das Rähm aus KDI-Holz sein?", answer: "Nein. Anders als die Fußschwelle hat das Rähm keinen Kontakt mit Beton oder Erdreich. Standard-KVH ohne Behandlung genügt." },
    { question: "Wie viele Hölzer für 40 m Doppelrähm?", answer: "Zwei Lagen à 40 m = 80 Laufmeter. Bei 4-m-Hölzern: 80 ÷ 4 = 20 Stück. Plus 10 % Verschnitt = 22 Hölzer." },
  ],
};

export const headerCalculator: CalculatorSEOContent = {
  disclaimer: "Stürze werden in der Regel als Doppelholz ausgeführt. Holzmenge × 2.",
  howToUse: ["Geben Sie die lichte Öffnungsbreite in Metern ein.", "Geben Sie die Gesamtzahl der Öffnungen ein.", "Klicken Sie auf Materialien berechnen — ergibt Sturzlänge, Stiel- und Stützständer.", "Querschnitt nach Spannweitentabelle und Lastfall wählen."],
  materialInfo: "Stürze (Sturzbalken, Überlager) sind tragende Horizontalbauteile über Tür- und Fensteröffnungen, die Lasten zu den Stützständern (Jack Studs) und Stielständern (King Studs) ableiten. Der Querschnitt richtet sich nach Spannweite und Last: 6×14 cm für Öffnungen bis 1,20 m, bis zu Doppel-6×24 cm für Öffnungen bis 3,60 m. Stürze werden typischerweise als Doppelholz mit 12-mm-Sperrholz-Zwischenlage ausgeführt (Gesamtbreite = Wandstärke). Für Öffnungen über 3 m werden BSH-Balken oder Stahlträger empfohlen. Spannweitentabellen nach DIN 1052 / EC 5 konsultieren. Kosten variieren stark nach Querschnitt und Material.",
  nextSteps: [
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Wandbeplankung-Rechner", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
    { label: "Holzkosten-Rechner", href: "/calculators/hardware/lumber-cost-calculator/" },
  ],
  installationTips: ["Stürze als Doppelholz mit 12-mm-Sperrholz-Zwischenlage ausführen.", "BSH oder LVL für Spannweiten über 3 m verwenden.", "Immer mit der Wölbung nach oben einbauen.", "Kurzständer (Cripple Studs) über dem Sturz nicht vergessen.", "Stützständer (Jack Studs) beidseitig kraftschlüssig an Stielständer nageln."],
  commonMistakes: ["Sturz für Last und Spannweite unterdimensionieren.", "Stützständer (Jack Studs) zur Auflagerung des Sturzes vergessen.", "Kurzständer über dem Sturz weglassen.", "Bei mehrgeschossigen Gebäuden die Durchlauflasten nicht berücksichtigen.", "Holzleimbinder (BSH) mit Schrauben statt mit zugelassenen Verbindungsmitteln befestigen."],
  faqs: [
    { question: "Welchen Sturzquerschnitt für eine 90-cm-Tür?", answer: "Ein Doppel-6×14 cm oder 6×18 cm ist für eine 90-cm-Innentür in den meisten eingeschossigen Anwendungen ausreichend. Spannweitentabelle für Mehrgeschosser prüfen." },
    { question: "Wie lang muss der Sturz sein?", answer: "Sturzlänge = lichte Öffnungsbreite + ca. 7,5 cm für die zwei Stützständer (je 38 mm). Dieser Rechner addiert 30 cm für ausreichende Auflagerung." },
    { question: "BSH oder Vollholz-Sturz?", answer: "BSH (Brettschichtholz) ist fester, formstabiler und überbrückt deutlich größere Spannweiten als Vollholz gleichen Querschnitts. BSH kostet mehr, ersetzt aber in vielen Fällen einen Stahlträger." },
    { question: "Brauche ich Stürze in nichttragenden Wänden?", answer: "In nichttragenden Wänden muss der Sturz nur das Wandmaterial über der Öffnung tragen. Ein einfaches 6×12 cm genügt meist. Dennoch mindestens 6×14 cm für Steifigkeit und Befestigung der Blendrahmen einbauen." },
    { question: "Wie viele Stützständer pro Sturz?", answer: "Mindestens 2 (einer pro Seite). Bei Spannweiten über 2,40 m je 2 Stützständer pro Seite (4 gesamt)." },
    { question: "Sturzquerschnitt für ein 1,80-m-Fenster?", answer: "Für 1,80 m lichter Breite in einer tragenden eingeschossigen Wand: typisch Doppel-6×20 cm oder 6×24 cm. Bei zwei Geschossen Last: Doppel-6×24 cm oder BSH. Immer Spannweitentabelle konsultieren." },
  ],
};

export const exteriorSheathingCalculator: CalculatorSEOContent = {
  disclaimer: "Fenster- und Türflächen von der Gesamtwandfläche abziehen für genauere Plattenzahl.",
  howToUse: ["Gesamtwandfläche berechnen (Umfang × Wandhöhe).", "Fenster- und Türflächen abziehen.", "Klicken Sie auf Materialien berechnen.", "Verschnittfaktor von 10 % ist enthalten."],
  materialInfo: "Die Wandbeplankung (Aussteifungsplatte) ist eine OSB- oder Sperrholzplatte, die auf die Ständerwand genagelt wird und drei Funktionen erfüllt: Schubaussteifung gegen Wind und Erdbeben, durchgehende Luftdichtungsebene und Befestigungsgrund für die Fassadenverkleidung. Standardstärke ist 12–15 mm OSB/3 oder OSB/4, im Format 1.250 × 2.500 mm (3,125 m²). In erdbebengefährdeten Gebieten Deutschlands (Rheingraben, Schwäbische Alb) schreibt die DIN 4149 Aussteifungsbeplankung vor. Das Nagelschema ist entscheidend: Nägel alle 10 cm am Plattenrand und 15 cm im Feld. Kosten: 8–20 EUR pro Platte.",
  nextSteps: [
    { label: "Fassadenbahn-Rechner", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Rahmennägel-Rechner", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: ["Platten vertikal (Längsseite senkrecht) für bessere Schubfestigkeit orientieren.", "Dehnfugen von 3 mm an allen Plattenkanten lassen.", "Nägel alle 10 cm am Rand und 15 cm im Feld.", "Kammnägel 2,8×63 mm oder gemäß Zulassung verwenden.", "Plattenverlegung unverzüglich mit Fassadenbahn schützen."],
  commonMistakes: ["Platten horizontal verlegen — reduziert Schubfestigkeit.", "Dehnfuge weglassen — Platten wölben sich bei Feuchteänderung.", "Zu wenige Nägel — Schubfestigkeit hängt vom Nagelschema ab.", "Falsche Nagelsorte verwenden — nur zugelassene Verbindungsmittel.", "OSB/2 statt OSB/3 verwenden."],
  faqs: [
    { question: "Brauche ich diagonale Windrispen wenn ich Beplankung verwende?", answer: "Nein. Aussteifungsbeplankung (OSB oder Sperrholz) liefert die gesamte erforderliche Schubaussteifung. Stahlbandwindrispen sind nur nötig, wenn keine Beplankung verwendet wird." },
    { question: "Kann ich Hartschaumplatten als Wandbeplankung verwenden?", answer: "Hartschaum allein liefert keine Schubaussteifung. Sie müssen OSB oder Sperrholz in den statisch erforderlichen Wandabschnitten verwenden, oder zugelassene Aussteifungsplatten einsetzen." },
    { question: "Welche Beplankungsstärke für Erdbebengebiet?", answer: "Mindestens 12 mm OSB/3 mit verstärktem Nagelschema (alle 7,5 cm am Rand, 15 cm im Feld). In Zone 2 den Statiker konsultieren." },
    { question: "Wie viele Platten für ein 100-m²-Haus?", answer: "Ca. 40 m Umfang × 2,50 m Wandhöhe = 100 m² brutto. Minus 15–20 % für Fenster/Türen = ca. 82 m² netto = 27 Platten à 3,125 m² plus 10 % Verschnitt." },
    { question: "OSB oder Sperrholz für feuchtes Klima?", answer: "In Norddeutschland und anderen regenreichen Regionen ist Sperrholz BFU 100 die robustere Wahl wegen besserer Feuchtebeständigkeit. Bei OSB mindestens OSB/3 verwenden und schnellstmöglich die Fassadenbahn anbringen." },
    { question: "Muss die gesamte Wand beplankt werden?", answer: "Nicht zwingend — nur die statisch erforderlichen Aussteifungsabschnitte. Der Statiker berechnet, wie viele Laufmeter Schubwand je nach Wind- und Erdbebenzone nötig sind." },
  ],
};


// ─── ROOFING ──────────────────────────────────────────────────────────────────

export const trussCalculator: CalculatorSEOContent = {
  disclaimer: "1–2 zusätzliche Binder für Giebel und Transportschäden bestellen.",
  howToUse: ["Messen Sie die Dachlänge (Firstlänge) in Metern.", "Wählen Sie den Binderabstand (60 cm Achsabstand ist Standard).", "Klicken Sie auf Materialien berechnen.", "Giebelbinder separat bestellen — sie haben andere Ausführung."],
  materialInfo: "Dachbinder (Nagelplattenbinder) sind werkseitig vorgefertigte Holztragwerke, die den gesamten Gebäudequerschnitt ohne tragende Innenwände überspannen. Sie werden in Nagelplattenwerken aus KVH 6×12 cm oder 6×16 cm mit Stahlnagelplatten gefertigt. In Deutschland gibt es zahlreiche Hersteller (MiTek, Gang-Nail, Hundegger). Standardabstand ist 60 cm für Wohnhäuser, bei hoher Schneelast 40 cm. Binder werden 4–6 Wochen vor Einbau bestellt und erfordern Herstellerstatik. Kosten: 100–300 EUR pro Binder je nach Spannweite und Ausführung, inklusive Planung und Transport.",
  nextSteps: [
    { label: "Dachschalung-Rechner", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Sturmklammer-Rechner", href: "/calculators/hardware/hurricane-tie-calculator/" },
    { label: "Sparren-Rechner", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: ["Binder 4–6 Wochen vor Einbau bestellen — Produktionszeiten beachten.", "Kran oder Ladekran für die Montage vorsehen.", "Binder während der Montage seitlich aussteifen — sie sind instabil, bis die Schalung verlegt ist.", "Montageplan des Binderherstellers genau befolgen.", "Giebelbinder nicht vergessen — sie sind anders konstruiert als Standardbinder."],
  commonMistakes: ["Giebelbinder nicht separat bestellen.", "Unzureichende temporäre Aussteifung — Binder können während der Montage umstürzen.", "Binder auf nichttragenden Wänden auflegen — nur auf den tragenden Außenwänden.", "Transport- und Krankosten nicht einplanen.", "Binder ohne Herstellerstatik verwenden."],
  faqs: [
    { question: "Was ist der Standard-Binderabstand?", answer: "60 cm Achsabstand ist Standard für Wohnhäuser. Bei Schneelastzonen über SL3 kann 40 cm erforderlich sein." },
    { question: "Kann ich bestehende Binder wiederverwenden?", answer: "In der Regel nein. Binder sind für spezifische Spannweiten und Lasten berechnet. Wiederverwendung ohne Ingenieurnachweis ist nicht zulässig." },
    { question: "Wie viele Binder für 12 m Dachlänge?", answer: "Bei 60 cm Achsabstand: 12 ÷ 0,60 + 1 = 21 Standardbinder plus 2 Giebelbinder = 23 Binder. Plus 1–2 Reserve." },
    { question: "Binder oder Sparren?", answer: "Binder überspannen ohne Zwischenstützen und sind ab 6 m Spannweite wirtschaftlicher. Sparren ermöglichen ausgebaute Dachgeschosse. Binder schließen den Dachraum als Stauraum weitgehend aus." },
    { question: "Sind Nagelplattenbinder in Deutschland verfügbar?", answer: "Ja, zahlreiche Hersteller und Abbundunternehmen fertigen Nagelplattenbinder. In Deutschland ist die Nagelplattenbinder-Bauweise weit verbreitet, besonders im Fertighausbau." },
    { question: "Darf ich einen Nagelplattenbinder verändern?", answer: "Niemals. Jede Modifikation (Schneiden, Bohren, Entfernen von Teilen) macht die Statik nichtig und kann zu katastrophalem Versagen führen. Für Durchführungen vorbereitete Binder beim Hersteller bestellen." },
  ],
};

export const rafterCalculator: CalculatorSEOContent = {
  disclaimer: "10 % Verschnitt einplanen. Die Sparrenlänge hängt von der Dachneigung ab — die tatsächliche Länge messen, nicht die Horizontalprojektion.",
  howToUse: ["Messen Sie die Dachlänge in Metern.", "Wählen Sie den Achsabstand.", "Klicken Sie auf Materialien berechnen — das Ergebnis umfasst Sparren für beide Dachseiten.", "Sparrenquerschnitt nach Spannweitentabelle und Schneelastzone wählen."],
  materialInfo: "Sparren sind die geneigten Tragbauteile des Daches, die Dachlasten zu den Außenwänden und zum First ableiten. Im Gegensatz zu vorgefertigten Bindern werden Sparren vor Ort eingebaut, was ausgebaute Dachgeschosse, Satteldachgauben und individuelle Dachformen ermöglicht. Gängige Querschnitte: KVH 6×14 cm (Spannweiten bis 2,70 m/Seite), 6×18 cm (bis 3,60 m), 6×20 cm (bis 4,50 m), jeweils in Horizontalprojektion bei 60 cm Achsabstand. Die tatsächliche Sparrenlänge ist wegen der Dachneigung größer als die Horizontalprojektion (Satz des Pythagoras). In Deutschland wird Fichte/Kiefer KVH S10/C24 verwendet. Sparren erfordern Kehlbalken oder einen tragenden Firstbalken, um den Horizontalschub aufzunehmen.",
  nextSteps: [
    { label: "Firstbrett-Rechner", href: "/calculators/roofing/ridge-board-calculator/" },
    { label: "Dachschalung-Rechner", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Dachbinder-Rechner", href: "/calculators/roofing/truss-calculator/" },
  ],
  installationTips: ["Einen Mustersparren schneiden und Passgenauigkeit prüfen, bevor alle zugeschnitten werden.", "Zimmermannswinkel (Schifterschmiege) für gleichmäßige Aufschieblingschnitte verwenden.", "Kehlbalken oder tragenden Firstbalken vorsehen, um den Horizontalschub aufzunehmen.", "Sparrenfüße mit Sparrenpfettenankern (Simpson/Knapp) sichern.", "Traufüberstand (Ortgang) bei der Sparrenlänge berücksichtigen."],
  commonMistakes: ["Horizontalprojektion statt tatsächliche Sparrenlänge bei der Holzbestellung verwenden.", "Traufüberstand bei der Sparrenlänge vergessen.", "Ungleichmäßige Aufschieblingschnitte — verursachen unebene Traufe.", "Kehlbalken oder Firstbalken vergessen — führt zu Horizontalschub auf die Wände.", "Sparrenverankerung an der Wandkonstruktion weglassen."],
  faqs: [
    { question: "Wie berechne ich die Sparrenlänge?", answer: "Mit dem Satz des Pythagoras: Länge = √(Horizontalprojektion² + Höhe²). Beispiel: 3,60 m Projektion, Neigung 6:12 → Höhe 1,80 m → Länge = √(12,96 + 3,24) ≈ 4,03 m." },
    { question: "Welcher Sparrenquerschnitt für 6 m Spannweite?", answer: "Für 6 m Gesamtspannweite (3 m Projektion pro Seite) bei 60 cm Achsabstand: typisch KVH 6×20 cm. Immer DIN/EC5-Spannweitentabellen konsultieren." },
    { question: "Welche Dachneigung ist in Deutschland üblich?", answer: "30°–45° für Satteldächer. In schneereichen Alpenregionen 45° und steiler. Für Pultdächer 15°–25°. Für Flachdächer 2°–5°." },
    { question: "Was ist der Aufschieblingschnitt (Kerve)?", answer: "Der Aufschieblingschnitt (auch Kerve oder bird's mouth) ist eine L-förmige Aussparung an der Sparrenunterseite, wo der Sparren auf dem Rähm aufliegt. Die Schnitttiefe darf maximal ein Drittel der Sparrenhöhe betragen." },
    { question: "Brauche ich Kehlbalken?", answer: "Ja. Kehlbalken sind bei Sparrendächern Pflicht, um den Horizontalschub aufzunehmen. Sie werden im oberen Drittel angebracht und verbinden gegenüberliegende Sparren." },
    { question: "Sparren statt Binder für Satteldach?", answer: "Ja, Sparren sind die traditionelle Alternative. Sie ermöglichen nutzbare Dachgeschosse, erfordern aber ab ca. 6 m Spannweite Zwischenpfetten oder einen tragenden Firstbalken." },
  ],
};

export const ridgeBoardCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Geben Sie die Gesamtdachlänge ein.", "Geben Sie die verwendete Holzlänge ein.", "Klicken Sie auf Materialien berechnen.", "Firstbrett muss eine Dimension größer als die Sparren sein."],
  materialInfo: "Das Firstbrett verläuft horizontal am höchsten Punkt des Daches, wo die Sparren beider Seiten zusammentreffen. Bei einem traditionellen Sparrendach mit Kehlbalken ist das Firstbrett nicht tragend — es dient als Montagehilfe und Ausrichtung für die Sparren. Es muss eine Dimension größer sein als die Sparren (z. B. 6×20 cm bei 6×18-cm-Sparren). Standardlängen: 3 m, 4 m, 5 m, 6 m. Ein tragender Firstbalken (First-Pfette) ist bei Kathedraldecken ohne Kehlbalken erforderlich und muss vom Statiker bemessen werden (BSH, LVL oder Stahl). KVH S10/C24 ist das Standardmaterial für nicht-tragende Firstbretter.",
  nextSteps: [
    { label: "Sparren-Rechner", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Dachschalung-Rechner", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Holzkosten-Rechner", href: "/calculators/hardware/lumber-cost-calculator/" },
  ],
  installationTips: ["Firstbrett während der Sparrenmontage temporär abstützen.", "Firstbrett gerade halten — temporäre Diagonalstreben verwenden.", "Das Firstbrett trägt bei traditionellem Sparrendach KEINE Last.", "Stöße immer über einem Sparrenpaar anordnen.", "Firstbrett-Querschnitt eine Größe über den Sparren wählen."],
  commonMistakes: ["Gleichen Querschnitt wie Sparren verwenden — First muss eine Größe größer sein.", "Firstbrett während der Montage nicht abstützen.", "First als tragenden Balken einsetzen, ohne Statik.", "Stöße nicht über Sparrenpaaren anordnen.", "Firstbrett unterdimensionieren."],
  faqs: [
    { question: "Was ist der Unterschied zwischen Firstbrett und Firstpfette?", answer: "Das Firstbrett ist nicht-tragend im traditionellen Sparrendach. Die Firstpfette ist ein tragender Balken für Kathedraldecken ohne Kehlbalken und muss statisch bemessen werden (BSH oder Stahl)." },
    { question: "Welchen Querschnitt für das Firstbrett?", answer: "Eine Nominal-Größe über den Sparren. Bei 6×14-cm-Sparren → 6×18-cm-First. Bei 6×18-cm-Sparren → 6×20-cm-First. Bei 6×20-cm-Sparren → 6×24-cm-First." },
    { question: "Wie werden Firstbretter gestoßen?", answer: "Mit überlappendem Stoß über einem gegenüberliegenden Sparrenpaar. Mindestens 4 Nägel 3,1×90 mm im Überlappungsbereich." },
    { question: "Brauche ich eine Firstpfette für eine Gaube?", answer: "Ja. Bei Kathedraldecken oder Gauben ohne Kehlbalken ist ein tragender Firstbalken erforderlich. Dieser muss vom Statiker aus BSH, LVL oder Stahl bemessen werden." },
    { question: "Wie viele Firstbretter für 15 m Dach?", answer: "Bei 5-m-Hölzern: 15 ÷ 5 = 3 Stück aufgerundet. Plus 1 extra für Stöße = 4 Firstbretter." },
    { question: "Braucht das Firstbrett dauerhafte Stützen?", answer: "Bei fertigem Dach mit korrekt eingebauten Sparren und Kehlbalken halten die Sparren das Firstbrett in Position. Während der Montage jedoch unbedingt temporär abstützen." },
  ],
};

export const roofSheathingCalculator: CalculatorSEOContent = {
  disclaimer: "Dachfläche = Grundfläche × Neigungsfaktor. 10 % Verschnitt für Grate und Kehlen einplanen.",
  howToUse: ["Dachfläche berechnen (Sparrenlänge × Dachlänge × 2 für Satteldach, oder Grundfläche × Neigungsfaktor verwenden).", "Klicken Sie auf Materialien berechnen.", "Ergebnis enthält H-Clip-Anzahl.", "Plattenstärke nach Sparrenabstand wählen."],
  materialInfo: "Die Dachschalung ist die Beplankung auf Sparren oder Bindern, die die durchgehende Dachfläche für Unterspannbahn und Dacheindeckung bildet. Standardmaterialien: OSB/3 12 mm oder 15 mm, Sperrholz BFU 100 12 mm, jeweils im Format 1.250 × 2.500 mm. OSB/3 ist die wirtschaftlichste Wahl. H-Clips sind kleine Metallverbinder zwischen den freien Plattenrändern, die Durchbiegungsunterschiede verhindern — Pflicht bei 60 cm Achsabstand. In Deutschland werden auch Rauspundschalung (Bretter 24 mm Nut-und-Feder) als Alternative zu Plattenwerkstoffen verwendet. Kosten: 8–20 EUR pro OSB-Platte. Plattenklassifizierung muss für Außenbereich geeignet sein (OSB/3 oder OSB/4).",
  nextSteps: [
    { label: "Unterspannbahn-Rechner", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Dachschindel-Rechner", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Traufblech-Rechner", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: ["Von der Traufe zur First verlegen.", "Stoßfugen zwischen den Reihen versetzen.", "Dehnfugen von 3 mm an allen Plattenkanten.", "H-Clips in der Mitte zwischen Sparren/Bindern einsetzen.", "Platten mit Kammnägeln 2,8×63 mm befestigen."],
  commonMistakes: ["H-Clips vergessen — bei 60 cm Achsabstand Pflicht.", "Stoßfugen nicht versetzen.", "OSB/2 (nur Innenbereich) auf dem Dach verwenden.", "Platten nicht gegen Regen schützen vor Dacheindeckung.", "Zu dünne Platten für den Sparrenabstand."],
  faqs: [
    { question: "Welche Stärke für die Dachschalung?", answer: "12 mm OSB/3 für 40 cm Achsabstand. 15 mm für 60 cm Achsabstand. In schneereichen Gebieten eine Stärke höher wählen." },
    { question: "Wie berechne ich die Dachfläche?", answer: "Grundfläche × Neigungsfaktor. Faktoren: 4:12 = 1,054, 6:12 = 1,118, 8:12 = 1,202, 10:12 = 1,302, 12:12 = 1,414." },
    { question: "Was sind H-Clips?", answer: "H-förmige Metallverbinder zwischen den Plattenkanten in der Mitte zwischen Sparren. Sie verhindern unterschiedliche Durchbiegung benachbarter Platten." },
    { question: "Wie viele Platten für 80 m² Grundfläche?", answer: "Bei 6:12-Neigung: 80 × 1,118 = 89,4 m² reale Dachfläche. ÷ 3,125 m²/Platte = 29 Platten. Plus 10 % Verschnitt = 32 Platten." },
    { question: "Kann ich auf der Dachschalung laufen?", answer: "Ja, sobald die Platte korrekt auf den Sparren befestigt ist. Nicht auf freie Kanten zwischen Sparren treten. Rutschfestes Schuhwerk tragen und bei nasser Schalung extreme Vorsicht." },
    { question: "Müssen Fugen der Dachschalung abgedichtet werden?", answer: "Nein. Die 3-mm-Dehnfugen sind beabsichtigt für thermische Ausdehnung. Die Unterspannbahn und Dacheindeckung bieten den Wasserschutz." },
  ],
};

export const shingleCalculator: CalculatorSEOContent = {
  disclaimer: "10–15 % Verschnitt für Grate, First und Kehlen einplanen.",
  howToUse: ["Berechnen Sie die Gesamtdachfläche inklusive aller Dachflächen.", "Geben Sie die Fläche in Quadratmetern ein.", "Klicken Sie auf Materialien berechnen — Ergebnis zeigt Paketanzahl.", "3 Pakete = 1 Quadrat = 9,29 m²."],
  materialInfo: "Bitumenschindeln sind in Deutschland weniger verbreitet als Tonziegel, gewinnen aber an Beliebtheit für Carports, Gartenhäuser, Anbauten und leichte Holzkonstruktionen. Es gibt zwei Haupttypen: 3-Tab-Schindeln (Standard, 20–25 Jahre Garantie, günstiger) und Architekturschindeln (dimensionale Optik, 30–50 Jahre Garantie, höherer Windwiderstand). Die Schindeln werden in Paketen verkauft, die ca. 3,1 m² abdecken — 3 Pakete für ein 'Quadrat' (9,29 m²). Marken: IKO, Owens Corning, CertainTeed. Kosten: 15–30 EUR pro Paket. Mindestdachneigung: 18° (4:12) Standard, 10° (2:12) mit vollflächiger Selbstklebemembran. Für die Haupteindeckung deutscher Wohnhäuser werden nach wie vor Betondachsteine (Braas, Nelskamp) und Tonziegel bevorzugt.",
  nextSteps: [
    { label: "Unterspannbahn-Rechner", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Traufblech-Rechner", href: "/calculators/roofing/drip-edge-calculator/" },
    { label: "Dachflächen-Rechner", href: "/calculators/roofing/roof-area-calculator/" },
  ],
  installationTips: ["Von der Traufe zum First verlegen.", "Vertikale Stoßfugen mindestens 15 cm zwischen den Reihen versetzen.", "4 Nägel pro Schindel unter Normalbedingungen, 6 bei Starkwind.", "Firstkappen separat verlegen (werden in Extrapaketen verkauft).", "Dacheindeckung bei trockenem Wetter und Temperaturen über 5 °C verlegen."],
  commonMistakes: ["Verschnittreserve vergessen — immer extra für First, Grate und Kehlen bestellen.", "Bei Starkwindgefahr zu wenige Nägel setzen.", "Selbstklebemembran an der Traufe vergessen bei Frostrisiko.", "Schindeln bei Temperaturen unter 5 °C verlegen — sie brechen und haften nicht.", "Mindest-Dachneigung nicht einhalten."],
  faqs: [
    { question: "Wie viele Pakete pro Quadrat?", answer: "Standard-Schindeln erfordern 3 Pakete pro Quadrat (9,29 m²). Premium-Schindeln können 4 Pakete pro Quadrat erfordern." },
    { question: "Wie berechne ich die Dachfläche für Schindeln?", answer: "Grundfläche × Neigungsfaktor. Für 6:12 mit 1,118 multiplizieren. Beide Dachseiten berücksichtigen. Plus 10–15 % Verschnitt." },
    { question: "Wie lange halten Architekturschindeln?", answer: "25–30 Jahre bei ordnungsgemäßer Verlegung und guter Dachbelüftung. Hersteller geben 30-Jahres-Garantie." },
    { question: "Bitumenschindeln oder Betondachsteine in Deutschland?", answer: "Für Wohnhäuser sind Betondachsteine (Braas, Nelskamp) der Standard in Deutschland — langlebiger (60+ Jahre) und sturmfester. Bitumenschindeln eignen sich für Carports, Gartenhäuser und leichte Konstruktionen wegen ihres geringen Gewichts." },
    { question: "Wie viele Nägel pro Schindel?", answer: "4 verzinkte Nägel pro Schindel unter Normalbedingungen. 6 Nägel bei Windgeschwindigkeiten über 100 km/h." },
    { question: "Kann ich Schindeln auf ein vorhandenes Dach verlegen?", answer: "Eine zweite Schicht ist möglich, wenn Schalung und Struktur intakt sind. Best Practice ist jedoch, die alte Eindeckung zu entfernen, um Schalung und Unterspannbahn zu inspizieren." },
  ],
};

export const underlaymentCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Geben Sie die Gesamtdachfläche ein.", "Wählen Sie den Unterspannbahn-Typ.", "Klicken Sie auf Materialien berechnen.", "Überlappungen in der Berechnung berücksichtigt."],
  materialInfo: "Die Unterspannbahn (auch Dachbahn oder Vordeckung) wird auf der Dachschalung unter der Dacheindeckung verlegt und dient als zweite Abdichtungsebene. In Deutschland sind die ZVDH-Fachregeln maßgeblich. Haupttypen: Bitumenpappe V 13 (wirtschaftlich, ca. 10 m²/Rolle), Kunststoff-Unterspannbahn (diffusionsoffen, leichter, reißfester, bis 90 m²/Rolle, z. B. DuPont Tyvek, Delta-Vent, Siga Majvest). Die diffusionsoffene Kunststoffbahn ist der moderne Standard in Deutschland, da sie Feuchtigkeit aus der Konstruktion nach außen entweichen lässt. Kosten: 15–40 EUR pro Rolle (50–90 m²). Selbstklebemembran (Bitumen-Schweißbahn) wird in den ersten 60 cm ab Traufe bei Frostrisiko empfohlen.",
  nextSteps: [
    { label: "Dachschalung-Rechner", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Dachschindel-Rechner", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Traufblech-Rechner", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: ["Horizontal verlegen, von der Traufe aufwärts.", "Jede Bahn 5–10 cm über die untere überlappen.", "Selbstklebemembran in den ersten 60 cm ab Traufe bei Frostrisiko.", "Mit Breitkopfnägeln oder Klammern gemäß Herstelleranweisung befestigen.", "Bei Kunststoffbahnen auf UV-Beständigkeitsdauer achten."],
  commonMistakes: ["In falscher Richtung verlegen (muss horizontal sein).", "Selbstklebemembran an der Traufe vergessen — bei Frostrisiko Pflicht.", "Bei Starkwind Klammern statt Breitkopfnägel verwenden.", "UV-Expositionszeit überschreiten — Bitumenpappe maximal 14 Tage, Kunststoffbahnen 3–6 Monate.", "Nicht-diffusionsoffene Bahn auf belüfteter Dachkonstruktion verwenden."],
  faqs: [
    { question: "Brauche ich eine Unterspannbahn unter der Eindeckung?", answer: "Ja. Die ZVDH-Fachregeln und alle Dacheindeckungshersteller-Garantien fordern eine Unterspannbahn als zweite Abdichtungsebene." },
    { question: "Bitumenpappe oder Kunststoff-Unterspannbahn?", answer: "Kunststoff-Unterspannbahn (z. B. Tyvek, Delta-Vent) ist der moderne Standard — diffusionsoffen, leichter, reißfester und UV-beständiger. Bitumenpappe ist günstiger, aber nimmt Feuchtigkeit auf und reißt bei Verlegung." },
    { question: "Wie viele Rollen für 100 m² Dach?", answer: "Abhängig vom Typ: Bitumenpappe V 13 ca. 10 m²/Rolle → 10 Rollen. Kunststoffbahn ca. 50–90 m²/Rolle → 1–2 Rollen. Plus 10–15 % für Überlappungen." },
    { question: "Wie lange darf die Unterspannbahn freiliegen?", answer: "Bitumenpappe maximal 14 Tage. Kunststoffbahnen 3–6 Monate je nach Hersteller. Dacheindeckung so bald wie möglich verlegen." },
    { question: "Brauche ich Selbstklebemembran an der Traufe?", answer: "In Deutschland bei Frostrisiko dringend empfohlen. Die Selbstklebemembran verhindert Eisrückstau-Schäden. An Traufe, Kehlen und Durchdringungen verlegen." },
    { question: "Wie groß ist die korrekte Überlappung?", answer: "Horizontale Überlappung: 5 cm bei Kunststoffbahn, 8–10 cm bei Bitumenpappe. Seitliche Stöße: mindestens 15 cm. In Kehlen und an Durchdringungen auf 30 cm erhöhen." },
  ],
};

export const dripEdgeCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Alle Traufkanten plus alle Ortgangkanten messen.", "Standardlänge pro Profil eingeben (Standard 2 m oder 3 m).", "Klicken Sie auf Materialien berechnen.", "Überlappung von 5 cm berücksichtigt."],
  materialInfo: "Das Traufblech (Tropfkante, Kappleiste) ist ein L- oder C-förmiges Metallprofil, das an allen Dachkanten installiert wird — Traufe und Ortgang — um Regenwasser von Stirnbrett, Traufkonstruktion und Holzstruktur wegzuleiten. In Deutschland werden Traufbleche aus Titanzink, Aluminium, verzinktem Stahl oder Kupfer gefertigt, in Standardlängen von 2 m oder 3 m. Für Wohnhäuser ist Titanzink (0,7 mm) der meistverwendete Werkstoff. Kosten: 3–8 EUR pro Laufmeter je nach Material. Farben: naturbelassen (patiniert zu Grau), vorbewittert, oder pulverbeschichtet in RAL-Tönen.",
  nextSteps: [
    { label: "Dachschindel-Rechner", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Unterspannbahn-Rechner", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Dachschalung-Rechner", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: ["Traufblech an der Traufe VOR der Unterspannbahn; am Ortgang NACH der Unterspannbahn montieren.", "Profile mindestens 5 cm überlappen.", "Alle 30 cm nageln oder schrauben.", "Lötverbindungen oder Falzverbindungen bei Titanzink bevorzugen.", "Auf Wärmeausdehnung bei Metalldachrinnenverbindungen achten."],
  commonMistakes: ["Ortgang-Traufblech vor der Unterspannbahn montieren — die Bahn muss das Ortgang-Blech überdecken.", "Profile zu wenig überlappen.", "Unterschiedliche Metalle mischen (z. B. Kupfer neben Zink) — Kontaktkorrosion.", "Bei Titanzink feste Befestigung ohne Dehnungsausgleich.", "Traufbleche bei Dachsanierung nicht erneuern."],
  faqs: [
    { question: "Ist das Traufblech Pflicht?", answer: "Ja. Die ZVDH-Fachregeln fordern Traufbleche an allen Dachkanten für eine ordnungsgemäße Wasserabführung." },
    { question: "Welches Material für Traufbleche?", answer: "Titanzink (0,7 mm) ist der Standard in Deutschland — langlebig, patiniert dezent und ist mit den meisten Dacheindeckungen kompatibel. Aluminium für Küstenregionen. Kupfer für Premium-Projekte." },
    { question: "Montagereihenfolge des Traufblechs?", answer: "An der Traufe: Blech ZUERST auf Schalung, Unterspannbahn DARÜBER. Am Ortgang: Unterspannbahn ZUERST, Blech DARÜBER. So fließt Wasser immer über das Blech." },
    { question: "Titanzink oder Aluminium?", answer: "Titanzink ist ästhetischer und langlebiger, korrodiert aber in Kontakt mit Kupfer oder bei hohem Salzgehalt. Aluminium ist leichter, rostfrei und ideal für Küstenregionen." },
    { question: "Wie viele Laufmeter für ein typisches Dach?", answer: "EFH 10×12 m Satteldach: 2 Traufen (2×12 m = 24 m) + 2 Ortgänge (ca. 2×6 m = 12 m) = 36 Laufmeter. Bei 3-m-Profilen: 12 Stück + Verschnitt." },
    { question: "Kann ich Traufbleche bei Dachsanierung wiederverwenden?", answer: "Wenn das Blech rostfrei und unverformt ist, ja. Aber die Kosten sind so gering, dass Erneuern für die nächsten 30 Jahre die bessere Wahl ist." },
  ],
};

export const roofPitchCalculator: CalculatorSEOContent = {
  disclaimer: "Näherungswerte. Für statische Entscheidungen Tragwerksplaner konsultieren.",
  howToUse: ["Vertikalen Anstieg des Daches in cm messen.", "Horizontalen Lauf in cm eingeben (Standard: 30 cm).", "Klicken Sie auf Materialien berechnen für Neigung, Grad, Prozent und Flächenmultiplikator.", "Multiplikator verwenden, um Grundfläche in tatsächliche Dachfläche umzurechnen."],
  materialInfo: "Die Dachneigung bestimmt, welche Materialien geeignet sind, die Wasserablaufkapazität, die Tragwerkslasten und die Arbeitssicherheit. Wohnhausdächer in Deutschland liegen typischerweise zwischen 15° und 45°. Mindestneigung 18° für Standard-Bitumenschindeln, 22° für Tonziegel und Betondachsteine (nach ZVDH-Fachregeln), 5° für Stehfalzblech. In schneereichen Alpenregionen sind 40°–45° üblich. Für Flachdächer unter 5° werden Abdichtungsbahnen (EPDM, PVC, Bitumen) verwendet. Der Neigungsfaktor ist entscheidend für die korrekte Materialbestellung — ein 45°-Dach hat 41,4 % mehr Fläche als die Grundfläche.",
  nextSteps: [
    { label: "Dachflächen-Rechner", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Dachgefälle-Rechner", href: "/calculators/roofing/roof-slope-calculator/" },
    { label: "Sparren-Rechner", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: ["Neigungsmessgerät oder Winkelmesser am Sparren verwenden.", "Bei unzugänglichen Dächern vom Dachboden messen.", "Smartphone-Neigungsmesser-App für Schnellmessung nutzen, aber mit manueller Messung verifizieren.", "Neigung an mehreren Dachflächen prüfen — Gauben und Anbauten haben oft andere Neigungen.", "Neigungsfaktor VOR der Materialbestellung berechnen."],
  commonMistakes: ["Anstieg und Lauf verwechseln.", "Entlang der Dachfläche statt horizontal für den Lauf messen.", "Annehmen, das gesamte Dach habe eine einheitliche Neigung.", "Grundfläche statt tatsächliche Dachfläche für Materialbestellung verwenden.", "Mindestneigung für das gewählte Eindeckungsmaterial ignorieren."],
  faqs: [
    { question: "Wie berechne ich die Dachneigung?", answer: "Neigung = Anstieg ÷ Lauf. Messen Sie, wie viele cm das Dach auf 100 cm horizontale Strecke ansteigt. Grad: arctan(Anstieg/Lauf). Prozent: (Anstieg/Lauf) × 100." },
    { question: "Wie viel Grad sind 6:12 Neigung?", answer: "6:12 = 26,57° (arctan(6/12)). Entspricht 50 % Neigung. Eine moderate Neigung, sehr verbreitet." },
    { question: "Was ist die Mindestneigung für Tonziegel?", answer: "22° nach ZVDH-Fachregeln. Einige Hersteller fordern 25°. Immer Herstellerangabe und ZVDH-Regelwerk prüfen." },
    { question: "Welche Neigung für starken Regen?", answer: "27° (6:12) oder steiler für Regionen mit Starkregen. Steilere Neigungen führen Wasser schneller ab." },
    { question: "Wie beeinflusst die Neigung die Dachkosten?", answer: "Steilere Neigungen erhöhen Kosten dreifach: mehr Material (45° = 41 % mehr als Grundfläche), höhere Arbeitskosten (Gerüst, Absturzsicherung, langsamere Arbeit) und komplexere Anschlüsse." },
    { question: "Was ist der Dachflächen-Multiplikator?", answer: "Multiplikator = √(1 + (Anstieg/Lauf)²). Grundfläche × Multiplikator = tatsächliche Dachfläche. Werte: 18° = 1,054, 27° = 1,118, 34° = 1,202, 40° = 1,302, 45° = 1,414." },
  ],
};

export const roofAreaCalculator: CalculatorSEOContent = {
  disclaimer: "Näherungswerte. Tatsächliche Fläche kann durch Gauben, Kehlen und Unregelmäßigkeiten abweichen.",
  howToUse: ["Gebäudegrundfläche messen (Länge × Breite von oben gesehen).", "Dachneigung eingeben.", "Dachtyp wählen: Satteldach, Walmdach oder Pultdach.", "Klicken Sie auf Materialien berechnen für reale Dachfläche und Multiplikator."],
  materialInfo: "Die Dachflächenberechnung ist Grundlage jeder Materialschätzung. Der häufigste Fehler ist, die Grundfläche statt der tatsächlichen geneigten Fläche zu verwenden — bei steilen Dächern erhebliche Materialunterdeckung. Dachmaterialien werden in 'Quadraten' gehandelt (1 Quadrat = 9,3 m²). Bei der Bestellung immer 10–15 % Verschnitt für Kehlen, Grate, Firste und Startbahnen einplanen. Walmdächer haben ca. 5 % mehr Verschnitt als Satteldächer wegen der zusätzlichen Grat- und Kehlschnitte.",
  nextSteps: [
    { label: "Dachschindel-Rechner", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Dachneigung-Rechner", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Dachschalung-Rechner", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: ["Immer die geneigte Strecke vom Trauf bis First messen — oder Grundfläche × Neigungsfaktor verwenden.", "Komplexe Dächer abschnittsweise berechnen und addieren.", "Bei Materialbestellung zum nächsten vollen Quadrat aufrunden plus 10–15 % Verschnitt.", "Neigung an jeder Dachfläche einzeln prüfen.", "Walmdächer: jede Dreiecks- und Trapezfläche einzeln berechnen."],
  commonMistakes: ["Grundfläche statt geneigte Fläche verwenden.", "Bei Satteldach nur eine Seite berücksichtigen.", "Verschnittfaktor vergessen.", "Gauben, Schornsteine und Durchdringungen ignorieren.", "Quadrate und Quadratmeter verwechseln."],
  faqs: [
    { question: "Wie berechne ich die Dachfläche vom Boden?", answer: "Grundfläche (L × B) × Neigungsfaktor × Anzahl der Dachflächen. Für Satteldach × 2. Neigung vom Dachboden oder mit Smartphone-App messen." },
    { question: "Was ist der Neigungsfaktor für 6:12?", answer: "1,118. Eine 93-m²-Grundfläche hat 93 × 1,118 = 104 m² pro Dachseite. Satteldach = 2 × 104 = 208 m² gesamt." },
    { question: "Wie berechne ich ein Walmdach?", answer: "Grundfläche × Neigungsfaktor × 2,1 (statt 2 beim Satteldach). Oder jede Trapez- und Dreiecksfläche einzeln berechnen." },
    { question: "Was ist der Unterschied zwischen Dachfläche und Grundfläche?", answer: "Grundfläche = horizontale Fläche von oben gesehen. Dachfläche = tatsächliche geneigte Fläche, immer größer. Je steiler, desto größer der Unterschied." },
    { question: "Wie viel mehr Material bei 45° gegenüber 22°?", answer: "Bei 22° (4:12) Multiplikator 1,054, bei 45° (12:12) 1,414. Unterschied: 34 % mehr Material bei 45° für die gleiche Grundfläche." },
    { question: "Wie rechne ich m² in Quadrate um?", answer: "Gesamte Dachfläche (m²) ÷ 9,3 = Anzahl Quadrate. 100 m² = 10,8 Quadrate. 3 Pakete Schindeln pro Quadrat." },
  ],
};

export const roofSlopeCalculator: CalculatorSEOContent = {
  disclaimer: "Näherungswerte. Neigung an mehreren Stellen prüfen. Dachdecker für Materialwahl konsultieren.",
  howToUse: ["Vertikalen Anstieg in cm messen.", "Horizontalen Lauf in m messen.", "Klicken Sie auf Materialien berechnen für Neigung, Grad, Prozent und Materialempfehlung.", "Empfehlung verwenden, um geeignetes Eindeckungsmaterial zu bestätigen."],
  materialInfo: "Die korrekte Messung der Dachneigung ist der erste Schritt vor der Auswahl des Eindeckungsmaterials. Jedes Material hat nach ZVDH-Fachregeln und Herstellerangaben eine Mindestneigung. Flach- und Pultdächer unter 10° erfordern vollflächige Abdichtung (EPDM, PVC, Bitumenbahnen). Zwischen 10° und 22° sind spezielle Maßnahmen erforderlich (vollflächige Unterspannbahn, verstärkte Überdeckung). Ab 22° können Betondachsteine und Tonziegel standardmäßig verlegt werden. Bitumenschindeln ab 18° Standard, ab 10° mit Sondermaßnahmen. Stehfalzblech ab 5°.",
  nextSteps: [
    { label: "Dachneigung-Rechner", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Dachflächen-Rechner", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Dachschindel-Rechner", href: "/calculators/roofing/shingle-calculator/" },
  ],
  installationTips: ["60-cm- oder 120-cm-Wasserwaage und Maßband für präzise Messung verwenden.", "Bei unzugänglicher Dachfläche vom Dachboden entlang eines Sparrens messen.", "Smartphone-Neigungsmesser für Schnellmessung verwenden, aber manuell verifizieren.", "Neigung an Hauptdach, Garage, Gauben und Anbauten separat prüfen.", "Ergebnis in cm und m klar dokumentieren."],
  commonMistakes: ["Entlang der Dachfläche statt horizontal für den Lauf messen.", "Neigungsprozent mit Neigungsverhältnis verwechseln.", "Annehmen, eine Messung gelte für das gesamte Dach.", "Eindeckung unter Mindestneigung verlegen.", "Anstieg und Lauf in unterschiedlichen Einheiten messen."],
  faqs: [
    { question: "Wie messe ich die Dachneigung vom Boden?", answer: "Mit Smartphone-Neigungsmesser-App auf die Dachkante zielen. Für präzisere Messung: im Dachboden entlang eines Sparrens messen." },
    { question: "Welche Neigung brauche ich für Tonziegel?", answer: "Mindestens 22° nach ZVDH-Fachregeln. Einige Hersteller fordern 25°. Je nach Ziegeltyp und Regenmenge kann eine höhere Neigung erforderlich sein." },
    { question: "Wie rechne ich Dachneigung in Grad um?", answer: "Grad = arctan(Anstieg/Lauf) × (180/π). Beispiel 6:12: arctan(0,5) × 57,296 = 26,57°. Gängige Werte: 4:12 = 18,4°, 6:12 = 26,6°, 8:12 = 33,7°, 12:12 = 45°." },
    { question: "Welches Material für Neigungen unter 10°?", answer: "EPDM, PVC-Bahnen oder Bitumen-Schweißbahnen. TPO für energieeffiziente Flachdächer. Stehfalzblech ab 5° möglich. Für 10°–22° Schindeln nur mit Sondermaßnahmen." },
    { question: "Welche Werkzeuge brauche ich?", answer: "60-cm-Wasserwaage und Maßband als Grundausstattung. Digitaler Winkelmesser für Schnellmessung. Smartphone-App als Ergänzung." },
    { question: "Kann man eine bestehende Dachneigung ändern?", answer: "Ja, durch Aufsetzen neuer Sparren oder Binder. Erfordert Statiknachweis, Baugenehmigung und Fachausführung. Kosten: 10.000–30.000 EUR je nach Umfang." },
  ],
};


// ─── EXTERIOR SHELL ─────────────────────────────────────────────────────────

export const housewrapCalculator: CalculatorSEOContent = {
  disclaimer: "15 % für Überlappungen, Verschnitt und Fensterausschnitte einplanen.",
  howToUse: ["Gesamte Außenwandfläche berechnen (Umfang × Wandhöhe).", "Rollenabdeckung eingeben (Standard Tyvek-Rolle: 75–93 m²).", "Klicken Sie auf Materialien berechnen.", "Nahtband separat kalkulieren."],
  materialInfo: "Die Fassadenbahn (auch Windsperre, WRB oder Wetterschutzbahn) ist eine dampfdiffusionsoffene Folie, die auf der Außenseite der Wandbeplankung angebracht wird. Sie blockiert flüssiges Wasser, das durch die Fassade eindringen könnte, lässt aber Wasserdampf von innen nach außen entweichen — verhindert so Kondensation, Schimmel und Holzfäulnis. Führende Marken: DuPont Tyvek HomeWrap, Siga Majvest, Pro Clima Solitex, Delta-Fassade. Kosten: 30–80 EUR pro Rolle (50–93 m²). In Deutschland ist die Fassadenbahn nach DIN 4108 und GEG (Gebäudeenergiegesetz) für den Holzrahmenbau vorgeschrieben. Der sd-Wert muss unter 0,3 m liegen (diffusionsoffen).",
  nextSteps: [
    { label: "Fassadenverkleidung-Rechner", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Faserzement-Fassaden-Rechner", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Fensteranschlussband-Rechner", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: ["Horizontal von unten nach oben verlegen.", "Überlappung mindestens 10 cm horizontal, 15 cm vertikal.", "An Fenster- und Türöffnungen sauber einschneiden und umschlagen.", "Nahtband an allen Stößen und Durchdringungen verkleben.", "UV-Expositionszeit nicht überschreiten — so bald wie möglich mit Fassade überdecken."],
  commonMistakes: ["Fassadenbahn mit zu hohem sd-Wert (dampfbremsend statt diffusionsoffen) verwenden.", "Stöße nicht verkleben — Winddichtheit erfordert verklebte Stöße.", "An Fensteranschlüssen unsauber arbeiten — häufigste Leckagepunkte.", "UV-Expositionsgrenze überschreiten.", "Nicht-diffusionsoffene Folie auf feuchtem Holzrahmenbau verwenden."],
  faqs: [
    { question: "Ist die Fassadenbahn in Deutschland Pflicht?", answer: "Ja, für den Holzrahmenbau nach DIN 4108-3 und GEG. Sie ist Teil der winddichten Ebene und schützt die Dämmung vor Durchfeuchtung." },
    { question: "Was ist der sd-Wert und warum ist er wichtig?", answer: "Der sd-Wert beschreibt den Dampfdiffusionswiderstand. Für Fassadenbahnen muss er unter 0,3 m liegen (diffusionsoffen), damit Baufeuchtigkeit und Kondensatfeuchtigkeit nach außen entweichen kann." },
    { question: "Tyvek oder Pro Clima?", answer: "Beide sind hervorragend. Tyvek HomeWrap ist weltweit der Marktführer. Pro Clima Solitex und Siga Majvest bieten oft höhere Reißfestigkeit und bessere Klebeanschlüsse. Alle erfüllen die deutschen Normen." },
    { question: "Wie viele Rollen für ein EFH?", answer: "EFH mit 40 m Umfang × 2,50 m Wandhöhe = 100 m² Wandfläche. Bei 75-m²-Rollen: 2 Rollen. Plus 15 % für Überlappungen und Ausschnitte = 2–3 Rollen." },
    { question: "Wie lange darf die Fassadenbahn der Witterung ausgesetzt sein?", answer: "Je nach Produkt 3–12 Monate. Tyvek: bis 6 Monate. Pro Clima Solitex: bis 12 Monate. Immer Herstellerangabe prüfen und Fassade so schnell wie möglich montieren." },
    { question: "Brauche ich zusätzlich Nahtband?", answer: "Ja. Alle Stöße, Überlappungen und Durchdringungen müssen mit kompatiblem Nahtband (z. B. Tyvek Acrylic Tape, Siga Wigluv, Pro Clima Tescon) verklebt werden für eine winddichte Ebene." },
  ],
};

export const vinylSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamte Außenwandfläche berechnen.", "Fenster- und Türflächen abziehen.", "Klicken Sie auf Materialien berechnen — enthält 10 % Verschnitt.", "Zubehör (Ecken, J-Profile, Startleisten) separat planen."],
  materialInfo: "Fassadenverkleidung (Kunststoff-Fassadenpaneele) ist in Deutschland weniger verbreitet als Putz oder Klinker, wird aber zunehmend für Sanierungen und den Holzrahmenbau eingesetzt. Verfügbar in PVC, HPL (Hochdrucklaminat) und Aluminium-Verbundplatten. PVC-Paneele kosten 15–30 EUR/m², HPL-Platten 40–80 EUR/m². Marken: Vinylit, Keralite, Trespa, Rockpanel. Die Paneele werden auf einer Unterkonstruktion (Lattung) hinterlüftet montiert, was eine Hinterlüftungsebene gemäß DIN 18516 schafft. Diese Hinterlüftung ist entscheidend für die Trocknung der Fassadenbahn und verhindert Feuchteschäden.",
  nextSteps: [
    { label: "Fassadenbahn-Rechner", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Faserzement-Fassaden-Rechner", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Fensteranschlussband-Rechner", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: ["Hinterlüftete Fassade mit Konterlattung nach DIN 18516 ausführen.", "Hinterlüftungsspalt mindestens 20 mm.", "Von unten nach oben montieren mit Startleiste.", "Dehnfugen an Ecken und Anschlüssen einplanen.", "Zubehörprofile (Ecken, Fensterleibungen, Sockelleisten) zuerst montieren."],
  commonMistakes: ["Hinterlüftungsspalt weglassen — führt zu Feuchtigkeitsschäden.", "Paneele zu fest schrauben — müssen sich bei Temperaturänderung bewegen können.", "Dehnfugen vergessen — PVC dehnt sich bei Wärme erheblich.", "Ungeeignete Unterkonstruktion verwenden.", "Brandschutzanforderungen der Landesbauordnung ignorieren."],
  faqs: [
    { question: "Sind Kunststoff-Fassaden in Deutschland zulässig?", answer: "Ja, mit Einschränkungen. Die Landesbauordnungen regeln Brandschutzanforderungen. Ab Gebäudeklasse 4 (über 7 m Höhe) können nichtbrennbare Fassaden erforderlich sein." },
    { question: "Wie viel kostet eine Kunststoff-Fassade?", answer: "PVC-Paneele: 15–30 EUR/m² Material. HPL-Platten: 40–80 EUR/m². Eingebaut inklusive Unterkonstruktion: 50–120 EUR/m²." },
    { question: "Brauche ich eine Hinterlüftung?", answer: "Ja. Die DIN 18516 fordert eine hinterlüftete Fassade mit mindestens 20 mm Spalt. Die Hinterlüftung trocknet Kondensation und hält die Wandkonstruktion trocken." },
    { question: "Wie pflege ich eine Kunststoff-Fassade?", answer: "Jährlich mit Wasser und mildem Reiniger abwaschen. Hochdruckreiniger nur auf niedriger Stufe und mit Abstand verwenden." },
    { question: "Wie lange halten Kunststoff-Paneele?", answer: "PVC-Paneele: 25–40 Jahre. HPL-Platten: 40–60 Jahre. Aluminium-Verbund: 30–50 Jahre. UV-Stabilisierung ist entscheidend für Farbechtheit." },
    { question: "Kunststoff oder Putz als Fassade?", answer: "Putz (WDVS) ist in Deutschland der Standard. Kunststoff-/HPL-Fassaden eignen sich für moderne Architektur, Sanierungen und Holzrahmenbau. HPL bietet mehr Gestaltungsfreiheit und ist wartungsärmer als Putz." },
  ],
};

export const hardieSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamte Außenwandfläche berechnen.", "Fenster- und Türflächen abziehen.", "Klicken Sie auf Materialien berechnen.", "Verschnittfaktor von 10 % ist enthalten."],
  materialInfo: "Faserzement-Fassadenplatten (auch Eternit- oder Cedral-Fassade) bestehen aus Zement, Zellulosefasern und mineralischen Zuschlagstoffen. Sie sind nicht brennbar (A2-s1,d0), witterungsbeständig, formstabil und in vielen Farben und Oberflächenstrukturen erhältlich. Führende Marken in Deutschland: Eternit (Equitone, Cedral), James Hardie, Swisspearl. Formate: Cedral-Paneele (190 mm Sichtbreite, 3.600 mm Länge) oder Großformatplatten (1.200 × 2.500 mm). Kosten: 30–80 EUR/m² Material. Faserzement erfüllt die Brandschutzanforderungen aller Gebäudeklassen und ist damit für Mehrgeschossbau besonders geeignet. Montage auf Aluminium- oder Holz-Unterkonstruktion mit hinterlüfteter Fassade.",
  nextSteps: [
    { label: "Fassadenbahn-Rechner", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Fassadenverkleidung-Rechner", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Fensteranschlussband-Rechner", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: ["Hinterlüftete Fassade mit Aluminium- oder Holz-Unterkonstruktion ausführen.", "Platten mit Edelstahlschrauben oder -nieten befestigen.", "Schnittkanten mit Kantenschutzlack versiegeln.", "Staubarm schneiden — Hartmetall-Sägeblatt oder Faserzement-Schere verwenden.", "Dehnfugen an Gebäudeecken und Anschlüssen vorsehen."],
  commonMistakes: ["Ohne Atemschutz (FFP2) schneiden — Faserzementstaub ist gesundheitsschädlich.", "Normale Schrauben statt Edelstahl verwenden — rostende Verbinder verfärben die Fassade.", "Schnittkanten nicht versiegeln — Feuchtigkeit dringt über ungeschützte Kanten ein.", "Hinterlüftung weglassen.", "Brandschutznachweis für Gesamtwandaufbau vergessen."],
  faqs: [
    { question: "Was ist der Unterschied zwischen Eternit und Cedral?", answer: "Beides sind Marken von Etex (ehemals Eternit). Cedral sind schmale Paneele (190 mm Sichtbreite) in Holzoptik. Eternit Equitone sind Großformatplatten in verschiedenen Oberflächenstrukturen. James Hardie ist ein australischer Hersteller mit eigenem Sortiment." },
    { question: "Ist Faserzement-Fassade teuer?", answer: "30–80 EUR/m² Material, eingebaut 80–150 EUR/m² inklusive Unterkonstruktion. Teurer als PVC-Fassade, aber nicht-brennbar, langlebiger (50+ Jahre) und wartungsärmer." },
    { question: "Enthält Faserzement Asbest?", answer: "Nein. Moderne Faserzementprodukte sind seit den 1990er-Jahren asbestfrei. Zellulosefasern ersetzen Asbest. Beim Rückbau alter Faserzementplatten (vor 1993) jedoch Asbest-Sanierungsvorschriften beachten." },
    { question: "Wie schneide ich Faserzementplatten?", answer: "Mit Handkreissäge und Hartmetall-Sägeblatt oder spezieller Faserzement-Schere (für Paneele). IMMER mit FFP2-Atemschutz und Absaugung arbeiten. Nass schneiden reduziert Staub." },
    { question: "Wie lange hält eine Faserzement-Fassade?", answer: "50–60+ Jahre bei korrekter Montage. Faserzement ist UV-beständig, frostbeständig und verrottet nicht. Farbauffrischung (Streichen) alle 15–20 Jahre bei werkseitig beschichteten Platten." },
    { question: "Brauche ich eine Baugenehmigung für Fassadenerneuerung?", answer: "In den meisten Bundesländern ist die Fassadenerneuerung genehmigungsfrei, wenn keine Änderung der Gebäudegeometrie erfolgt. Bei denkmalgeschützten Gebäuden und in Gestaltungssatzungs-Gebieten ist eine Genehmigung erforderlich." },
  ],
};

export const windowFlashingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Anzahl und Abmessungen aller Fenster- und Türöffnungen eingeben.", "Bandbreite wählen (10 cm, 15 cm oder 22 cm).", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Gesamtlaufmeter und Rollenanzahl."],
  materialInfo: "Fensteranschlussband (auch Flashing-Band oder Anschlussklebeband) ist ein selbstklebendes, bitumen- oder butylbasiertes Band, das den Übergang zwischen Fensterrahmen und Wandbeplankung abdichtet. Es ist die kritischste Abdichtungsstelle der gesamten Gebäudehülle — die meisten Fassadenleckagen treten an Fenster- und Türanschlüssen auf. In Deutschland sind Marken wie Siga Fentrim, Pro Clima Tescon Profil, Illbruck ME500, und Würth Fensteranschlussband verbreitet. Breiten: 10 cm (Standardaußenabdichtung), 15 cm (Fensterbank), 22 cm (Sturz mit Überstand). Kosten: 15–40 EUR pro Rolle (10–25 m). Die fachgerechte Ausführung der Fensteranschlüsse ist nach DIN 4108-7 und dem RAL-Montage-Leitfaden für die Luft- und Winddichtheit entscheidend.",
  nextSteps: [
    { label: "Fassadenbahn-Rechner", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Fassadenverkleidung-Rechner", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Faserzement-Fassaden-Rechner", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
  ],
  installationTips: ["Fensterbank-Band ZUERST, dann Seitenbänder, dann Sturzband (Schindelreihenfolge).", "Unterlage muss sauber, trocken und staubfrei sein.", "Band fest andrücken — Anpressrolle verwenden.", "Ecken sauber falzen, keine Lücken lassen.", "RAL-Montage-Leitfaden für korrekte Anschlussdetails beachten."],
  commonMistakes: ["Reihenfolge falsch — Band muss in Schindelreihenfolge verlegt werden (unten zuerst).", "Auf nasse oder verschmutzte Oberfläche kleben.", "Band nicht ausreichend andrücken — Haftung erfordert Anpressdruck.", "Ecken unsauber ausführen — häufigste Leckagepunkte.", "Innen- und Außenabdichtung verwechseln (verschiedene Produktanforderungen)."],
  faqs: [
    { question: "Ist Fensteranschlussband nach DIN erforderlich?", answer: "Ja. Die DIN 4108-7 fordert eine luft- und winddichte Ausführung aller Fenster- und Türanschlüsse. Der RAL-Montage-Leitfaden definiert die Ausführungsdetails." },
    { question: "Welche Bandbreite für welche Anwendung?", answer: "10 cm für seitliche Laibungsabdichtung. 15 cm für Fensterbänke. 22 cm für Stürze mit Überstand auf die Wandfläche. Im Zweifelsfall breiter wählen." },
    { question: "Kann ich Silikon statt Anschlussband verwenden?", answer: "Silikon ist keine dauerhafte Lösung für Fensteranschlüsse — es altert, reißt und löst sich. Selbstklebende Anschlussbänder bieten eine dauerhafte, norm-konforme Abdichtung." },
    { question: "Was ist die korrekte Montagereihenfolge?", answer: "1. Fensterbank-Band (unten). 2. Seitenbänder (links/rechts). 3. Sturzband (oben). Jede Lage überdeckt die darunterliegende — Schindelreihenfolge für Wasserableitung." },
    { question: "Welche Marke ist am besten?", answer: "Siga Fentrim, Pro Clima Tescon Profil und Illbruck ME500 sind die meistverwendeten Produkte in Deutschland. Alle erfüllen DIN 4108-7 und RAL-Anforderungen. Auf Kompatibilität mit dem Fensterhersteller achten." },
    { question: "Wie viele Rollen brauche ich?", answer: "Pro Standard-Fenster (1,0 × 1,2 m) ca. 5 Laufmeter Band. Für 10 Fenster: 50 m. Bei 10-m-Rollen: 5 Rollen plus Reserve." },
  ],
};

// ─── INSULATION & DRYWALL ────────────────────────────────────────────────────

export const cavityInsulationCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamte Wandfläche in m² eingeben.", "Wandstärke (Gefachtiefe) wählen.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Pakete/Rollen nach WLG und Hersteller."],
  materialInfo: "Hohlraumdämmung (Gefachdämmung) wird zwischen die Ständer der Holzrahmenwand geklemmt. In Deutschland sind Mineralwoll-Klemmfilze von Knauf Insulation, Isover (Saint-Gobain), Rockwool und Ursa die Standardprodukte. Wärmeleitgruppen (WLG): 032, 035 und 040. Für 12-cm-Wände (6×12 cm Ständer) erreicht WLG 035 einen U-Wert von ca. 0,29 W/(m²·K). Für 16-cm-Wände mit WLG 035: ca. 0,22 W/(m²·K) — unterhalb der GEG/EnEV-Anforderung. Kosten: 5–12 EUR/m² je nach WLG und Stärke. Klemmfilze sind in Breiten von 580 mm (für 60 cm Achsabstand) und 380 mm (für 40 cm) erhältlich. Rockwool-Steinwolle bietet zusätzlich A1-Brandschutz (nichtbrennbar). Glaswolle (Isover, Knauf) ist leichter und günstiger.",
  nextSteps: [
    { label: "Gipskarton-Rechner", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Trockenbau-Schrauben-Rechner", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: ["Klemmfilze leicht übermaßig zuschneiden für pressenden Sitz im Gefach.", "Keine Hohlräume lassen — selbst kleine Lücken reduzieren die Dämmwirkung erheblich.", "Dampfbremse auf der Raumseite der Dämmung installieren (sd-Wert 2–5 m, z. B. Pro Clima Intello, Siga Majpell).", "Bei Holzrahmenbau Installationsebene zwischen Dampfbremse und Gipskarton vorsehen.", "Handschuhe, lange Ärmel und FFP2-Atemschutz bei Mineralwolle-Verarbeitung tragen."],
  commonMistakes: ["Dampfbremse weglassen — führt zu Kondensat und Schimmel in der Konstruktion.", "Klemmfilze zu locker einbauen — Hohlräume und Lücken verursachen Konvektionswärmeverluste.", "Dampfbremse auf der falschen Seite (außen statt innen) anbringen.", "Elektroinstallation durch die Dampfbremse führen ohne fachgerechte Abdichtung.", "Zu dünne Dämmung einbauen — GEG/EnEV-Mindestanforderungen nicht erreichen."],
  faqs: [
    { question: "Welche WLG brauche ich?", answer: "WLG 035 ist der Standard für Holzrahmenbau in Deutschland. WLG 032 bietet bei gleicher Stärke bessere Dämmwerte. WLG 040 ist günstiger, erfordert aber dickere Konstruktion für gleichen U-Wert." },
    { question: "Glaswolle oder Steinwolle?", answer: "Beide sind hervorragend. Steinwolle (Rockwool) ist nicht-brennbar (A1) und hat besseren Schallschutz. Glaswolle (Isover, Knauf) ist leichter, günstiger und einfacher zu verarbeiten. Für Brandschutzanforderungen ab REI 30 wird Steinwolle bevorzugt." },
    { question: "Brauche ich eine Dampfbremse?", answer: "Ja, auf der Raumseite der Dämmung. Empfohlen: feuchteadaptive Dampfbremsen (z. B. Pro Clima Intello Plus, Siga Majpell) mit variablem sd-Wert, die im Winter bremsen und im Sommer öffnen." },
    { question: "Was ist die GEG-Anforderung für Außenwände?", answer: "Das GEG (Gebäudeenergiegesetz) fordert für Außenwände im Neubau einen U-Wert von maximal 0,24 W/(m²·K). Bei Sanierung maximal 0,24 W/(m²·K) für die Einzelbauteil-Nachrüstung." },
    { question: "Wie viele Pakete Klemmfilze brauche ich?", answer: "Paketabdeckung variiert: Isover Integra 035 (120 mm) ca. 4,5 m²/Paket. Rockwool Flexirock 035 (120 mm) ca. 3,6 m²/Paket. Für 100 m² Wandfläche: 22–28 Pakete je nach Marke." },
    { question: "Kann ich Zellulose- oder Holzfaserdämmung verwenden?", answer: "Ja, einblasdämmung aus Zellulose (Climacell, isofloc) oder Holzfaserdämmplatten (Steico, Gutex) sind ökologische Alternativen. Zellulose wird in geschlossene Gefache eingeblasen. Holzfaserplatten werden als Klemmfilz oder Putzträgerplatte verwendet." },
  ],
};

export const drywallCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamte Wand- und/oder Deckenfläche in m² eingeben.", "Plattenstärke wählen (12,5 mm Standard, 15 mm für Decken bei 60 cm).", "Klicken Sie auf Materialien berechnen.", "10 % Verschnitt ist eingerechnet."],
  materialInfo: "Gipskartonplatten (GKB/GKF/GKBI) sind das Standardmaterial für den Innenausbau im Holzrahmenbau und Trockenbau. Hauptmarken in Deutschland: Knauf (Diamant, Piano), Rigips (Saint-Gobain), Fermacell (Gipsfaser). Standardformate: 1.250 × 2.000 mm und 1.250 × 2.500 mm. Stärken: 12,5 mm (Standard-Wand), 15 mm (Decken bei 60 cm Abstand, erhöhter Schallschutz), 18 mm (Brandschutz). Feuchtraum-Gipskarton (GKBI, grüner Kern) für Bäder und Küchen. Brandschutz-Gipskarton (GKF, roter Kern) für Brandschutzanforderungen. Fermacell Gipsfaserplatten bieten höhere Festigkeit und Feuchtebeständigkeit als Standard-Gipskarton. Kosten: 3–8 EUR pro Platte (12,5 mm Standard), Fermacell 8–15 EUR/Platte.",
  nextSteps: [
    { label: "Trockenbau-Schrauben-Rechner", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Spachtelmasse-Rechner", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Hohlraumdämmung-Rechner", href: "/calculators/insulation-drywall/cavity-insulation-calculator/" },
  ],
  installationTips: ["Platten mit der Kartonseite zur Raumseite montieren.", "Fugen versetzen — nicht in einer Linie verlegen.", "Schrauben bündig eindrehen — nicht zu tief (Karton nicht durchbrechen).", "An Decken von der Mitte nach außen schrauben.", "Bei Doppelbeplankung Fugen der zweiten Lage gegenüber der ersten versetzen."],
  commonMistakes: ["Zu dünne Platten an Decken mit 60 cm Unterkonstruktionsabstand — mindestens 15 mm verwenden.", "Schrauben zu tief eindrehen und Karton durchbrechen.", "Standard-GKB im Feuchtraum verwenden statt GKBI oder Fermacell.", "Fugen nicht versetzen.", "Dampfbremse beim Montieren der Platten beschädigen."],
  faqs: [
    { question: "Wie viel Gipskarton brauche ich?", answer: "Fläche in m² ÷ Plattengröße in m² + 10 % Verschnitt. Beispiel: 50 m² Wand ÷ 3,125 m² (1.250 × 2.500 mm) = 16 Platten + 2 Verschnitt = 18 Platten." },
    { question: "12,5 mm oder 15 mm?", answer: "12,5 mm für Wände und Decken mit 40 cm Unterkonstruktionsabstand. 15 mm oder 18 mm für Decken bei 60 cm Abstand, erhöhten Schallschutz oder Brandschutzanforderungen." },
    { question: "Knauf, Rigips oder Fermacell?", answer: "Knauf und Rigips sind gleichwertige Gipskartonplatten. Fermacell Gipsfaserplatten sind fester, feuchtebeständiger und bieten besseren Schallschutz — ideal für Holzrahmenbau und Feuchträume, aber teurer." },
    { question: "Welche Platte für Badezimmer?", answer: "GKBI (imprägnierter Gipskarton, grüner Kern) oder Fermacell Gipsfaserplatte. Im Duschbereich zusätzlich Abdichtung (z. B. PCI Lastogum, Knauf Flächendicht) aufbringen." },
    { question: "Wie viele Platten für einen Standardraum?", answer: "Raum 3,5 × 4 m, 2,50 m hoch: Wandfläche ca. 37,5 m², Decke 14 m². Gesamt 51,5 m² ÷ 3,125 m² = 17 Platten + 2 Verschnitt = 19 Platten." },
    { question: "Brauche ich Doppelbeplankung?", answer: "Doppelbeplankung (2 × 12,5 mm) ist erforderlich für Brandschutz F60/F90 und erhöhten Schallschutz (Rw ≥ 55 dB). Für Standardanwendungen reicht Einfachbeplankung." },
  ],
};

export const drywallScrewCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamtfläche der Gipskarton-Verlegung eingeben.", "Schraubenlänge wählen (35 mm für Einfach-, 45 mm für Doppelbeplankung).", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Schraubenzahl und Paketbedarf."],
  materialInfo: "Trockenbau-Schnellbauschrauben (auch Rigips-Schrauben oder GK-Schrauben) befestigen Gipskartonplatten auf Holz- oder Metallunterkonstruktion. Standardlängen: 35 mm (Einfachbeplankung auf Holz), 45 mm (Doppelbeplankung oder dickere Platten), 55 mm (Dreifachbeplankung). Phosphatbeschichtete Schrauben für Standardanwendungen, Edelstahlschrauben für Feuchträume. Schraubenabstand: 15 cm am Plattenrand, 25–30 cm im Feld. Pro Platte (1.250 × 2.500 mm) werden ca. 28–35 Schrauben benötigt. Kosten: 5–15 EUR pro 1.000 Stück. Marken: Würth, Spax, Heco, Fischer.",
  nextSteps: [
    { label: "Gipskarton-Rechner", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Spachtelmasse-Rechner", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: ["Schraubvorsatz (Tiefenanschlag) am Akkuschrauber verwenden.", "Schrauben bündig mit der Kartonoberfläche eindrehen — nicht zu tief.", "Am Plattenrand 10 mm Abstand zur Kante einhalten.", "Akku-Schnellbauschrauber mit Magazin für hohe Produktivität.", "Immer senkrecht zur Plattenoberfläche schrauben."],
  commonMistakes: ["Schrauben zu tief eindrehen und den Kartonmantel durchbrechen — Haltekraft geht verloren.", "Schrauben nicht tief genug eindrehen — stehen über die Oberfläche hinaus und verhindern planes Spachteln.", "Zu wenige Schrauben — Plattenrand-Abstand maximal 15 cm.", "Zu kurze Schrauben für Doppelbeplankung verwenden.", "Am Plattenrand zu nah an der Kante schrauben — Platte bricht aus."],
  faqs: [
    { question: "Wie viele Schrauben pro Gipskartonplatte?", answer: "Ca. 28–35 Schrauben pro Standardplatte (1.250 × 2.500 mm) bei 15 cm Randabstand und 25 cm Feldabstand." },
    { question: "Welche Schraubenlänge?", answer: "35 mm für Einfachbeplankung 12,5 mm auf Holz. 45 mm für Doppelbeplankung oder 15 mm Platten. 55 mm für Dreifachbeplankung. Die Schraube muss mindestens 10 mm ins Tragprofil eindringen." },
    { question: "Wie viele Schrauben pro Quadratmeter?", answer: "Ca. 9–12 Schrauben pro m² bei Standardabständen (15 cm Rand, 25 cm Feld)." },
    { question: "Phosphatiert oder Edelstahl?", answer: "Phosphatierte Schrauben für Standardanwendungen. Edelstahl (A2) für Feuchträume und korrosive Umgebungen. Edelstahl kostet ca. 3-mal so viel." },
    { question: "Brauche ich einen speziellen Schraubvorsatz?", answer: "Ja, ein Tiefenanschlag (Bit mit einstellbarer Tiefe) verhindert zu tiefes Einschrauben. Profis verwenden Akku-Magazinschrauber für hohe Geschwindigkeit." },
    { question: "Wie viele Packungen Schrauben brauche ich?", answer: "Für 100 m² Gipskarton: ca. 1.000–1.200 Schrauben. Standardpackungen: 500 oder 1.000 Stück. Also 1–2 Großpackungen." },
  ],
};

export const jointCompoundCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamte Gipskarton-Fläche eingeben.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Eimerbedarf für Fugenspachtelung und Flächenspachtelung.", "3 Spachtelgänge einplanen."],
  materialInfo: "Spachtelmasse (Fugenspachtel, Flächenspachtel) wird zum Verspachteln der Gipskarton-Fugen und zum Glätten der gesamten Oberfläche verwendet. In Deutschland sind zwei Systeme verbreitet: Fugenspachtel (z. B. Knauf Uniflott, Rigips Vario) für die Fugenverspachtelung mit Fugenband, und Flächenspachtel (z. B. Knauf Q2-Spachtel, Rigips Finito) für die flächige Glättung. Qualitätsstufen nach DIN 18202: Q1 (Grundspachtelung), Q2 (Standard für Tapete/Strukturputz), Q3 (für dünne Tapeten und Anstrich), Q4 (Glanzanstrich). Kosten: 8–15 EUR pro 5-kg-Eimer Fugenspachtel, 15–25 EUR pro 20-kg-Sack Flächenspachtel.",
  nextSteps: [
    { label: "Gipskarton-Rechner", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Trockenbau-Schrauben-Rechner", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Grundierung-Rechner", href: "/calculators/finishing/primer-calculator/" },
  ],
  installationTips: ["Fugenband mit Fugenspachtel (z. B. Knauf Uniflott) einbetten — nicht nur aufkleben.", "3 Spachtelgänge mit zunehmend breiterem Spachtel (10 cm, 20 cm, 30 cm).", "Zwischen den Gängen schleifen (150er-Schleifgitter).", "Schraubenköpfe ebenfalls verspachteln.", "Gleichmäßig dünne Schichten auftragen — dick spachteln führt zu Rissen."],
  commonMistakes: ["Fugenband nur aufkleben ohne Einbettung in Spachtelmasse.", "Zu wenige Spachtelgänge — mindestens 3 für Q2-Qualität.", "Zwischen den Gängen nicht schleifen.", "Zu dicke Spachtelschichten auftragen — trocknet ungleichmäßig und reißt.", "Qualitätsstufe Q1 verwenden, wenn Q3 für den Anstrich erforderlich ist."],
  faqs: [
    { question: "Wie viel Spachtelmasse brauche ich?", answer: "Für Q2-Qualität: ca. 0,5–0,8 kg Fugenspachtel pro m² (3 Gänge) plus 0,3–0,5 kg Flächenspachtel für Q3. Für 100 m²: ca. 50–80 kg Fugenspachtel." },
    { question: "Was sind die Q-Stufen?", answer: "Q1: Grundspachtelung (nur Fugen und Schrauben). Q2: Standard (zusätzlich breiter abgespachtelt, für Raufasertapete). Q3: Fein (für dünne Tapeten und mattierte Anstriche). Q4: Vollflächig gespachtelt (für Glanzanstrich)." },
    { question: "Knauf Uniflott oder Rigips Vario?", answer: "Beide sind hochwertige Fugenspachtel. Uniflott ist etwas fester und eignet sich besonders für Fugen ohne Fugenband (bei Knauf-Platten mit Spezialkantenform). Vario ist universeller." },
    { question: "Brauche ich Fugenband?", answer: "Ja, an allen Plattenstößen. Papier-Fugenband (für Flachkantenstöße) oder Glasfaser-Fugenband (selbstklebend, schnellere Verarbeitung). Knauf-Platten mit HRAK-Kante (halbrundes Kantenprofil) können mit Uniflott ohne Band gespachtelt werden." },
    { question: "Wie lange trocknet Spachtelmasse?", answer: "Standard-Fugenspachtel: 1–2 Stunden (schnellhärtend) bis 24 Stunden. Zwischen den Gängen muss die Schicht vollständig durchgetrocknet sein. Bei hoher Luftfeuchtigkeit oder niedrigen Temperaturen verlängert sich die Trocknungszeit." },
    { question: "Kann ich auf Q2-Spachtelung direkt streichen?", answer: "Für matte Dispersionsfarbe ist Q2 oft ausreichend, wenn vorher grundiert wird. Für seidenglänzende oder glänzende Anstriche ist mindestens Q3 (besser Q4) erforderlich, da jede Unebenheit bei Glanz sichtbar wird." },
  ],
};

// ─── HARDWARE ──────────────────────────────────────────────────────────────────

export const framingNailCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamtzahl der Ständer eingeben.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Nagelgewicht in Kilogramm.", "Nagelsorte nach Anwendung wählen."],
  materialInfo: "Rahmennägel (Zimmermannsnägel) verbinden Ständer, Schwellen, Rähm und alle Holzrahmen-Bauteile. In Deutschland werden hauptsächlich Kammnägel (Ringnägel) und Glattschaftnägel verwendet, verarbeitet mit Druckluft-Nagelpistolen. Standardmaße: 3,1×90 mm (Ständer-zu-Schwelle), 3,1×75 mm (allgemeine Verbindungen), 2,8×63 mm (Beplankung). Materialien: blank (Innenbau), feuerverzinkt (Außenanwendungen), Edelstahl (KDI-Holz). Kosten: 30–80 EUR pro 5.000-Stück-Paket. Marken: Würth, Haubold, Prebena, BeA.",
  nextSteps: [
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Balkenschuh-Rechner", href: "/calculators/hardware/joist-hanger-calculator/" },
    { label: "Holzkosten-Rechner", href: "/calculators/hardware/lumber-cost-calculator/" },
  ],
  installationTips: ["Druckluft-Nagelpistole verwenden für schnelle und gleichmäßige Vernagelung.", "Nagelsorte nach Anwendung und Holzart wählen.", "Bei KDI-Holz feuerverzinkte oder Edelstahlnägel verwenden.", "Nagelabstände nach DIN/EC5 einhalten.", "Nägel nicht zu nah am Holzrand setzen — Spaltgefahr."],
  commonMistakes: ["Blanke Nägel im Außenbereich oder bei KDI-Holz verwenden.", "Zu kurze Nägel — Mindest-Eindringtiefe in das Gegenholz: 6× Nageldurchmesser.", "Nägel zu nah am Holzrand — Mindestabstand: 10× Nageldurchmesser vom Rand.", "Nagelschema für Aussteifungsbeplankung nicht einhalten.", "Falschen Nagelkopf für die Nagelpistole verwenden."],
  faqs: [
    { question: "Wie viele Nägel pro Ständer?", answer: "Typisch 4–6 Nägel pro Ständer-Schwellen-Verbindung (2–3 durch jeden Schwellenteil). Plus Nägel für Rähm, Beplankung und Verbinder." },
    { question: "Kammnägel oder Glattschaftnägel?", answer: "Kammnägel (Ringnägel) haben 40–50 % höheren Auszugswiderstand als Glattschaftnägel und sind für tragende Verbindungen im Holzrahmenbau der Standard." },
    { question: "Welche Nägel für Außenwand-Beplankung?", answer: "Kammnägel 2,8×63 mm feuerverzinkt. Nagelabstand: 10 cm am Plattenrand, 15–30 cm im Feld (abhängig von Aussteifungsanforderung)." },
    { question: "Brauche ich eine Nagelpistole?", answer: "Für professionelle Arbeit und größere Projekte: ja, unbedingt. Eine Druckluft-Nagelpistole spart 80 % der Vernagelung-Zeit und liefert gleichmäßigere Ergebnisse." },
    { question: "Wie viel kg Nägel pro 100 m² Wandfläche?", answer: "Etwa 8–12 kg für Ständerwerk (Nägel 3,1×90 mm) plus 5–8 kg für Beplankung (Nägel 2,8×63 mm). Gesamt ca. 13–20 kg pro 100 m² Wandfläche." },
    { question: "Edelstahlnägel oder feuerverzinkte?", answer: "Feuerverzinkt für die meisten Außenanwendungen. Edelstahl (A4) für extrem korrosive Umgebungen (Küstennähe, Schwimmbadbau) und bei bestimmten KDI-Behandlungen." },
  ],
};

export const joistHangerCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamtzahl der Deckenbalken eingeben.", "Balkenschuhtyp nach Balkenquerschnitt wählen.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Balkenschuh-Anzahl und Nagel-/Schraubenbedarf."],
  materialInfo: "Balkenschuhe (auch Balkenträger oder Sparrenverbinder) sind Metallverbinder, die Deckenbalken, Sparren und Pfetten an tragende Bauteile anschließen. Führende Hersteller in Deutschland: Simpson Strong-Tie, Knapp, Sherpa, BMF. Ausführungen für alle gängigen Querschnitte von 6×14 cm bis 10×24 cm. Kosten: 2–8 EUR pro Balkenschuh je nach Größe und Ausführung. Balkenschuhe werden mit speziellen Kammnägeln (Rillennägel) oder Schrauben nach Zulassung befestigt — KEINE normalen Holzschrauben verwenden.",
  nextSteps: [
    { label: "Deckenbalken-Rechner", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Sturmklammer-Rechner", href: "/calculators/hardware/hurricane-tie-calculator/" },
    { label: "Rahmennägel-Rechner", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: ["Nur zugelassene Verbindungsmittel (Kammnägel, spezielle Schrauben) verwenden.", "Alle vorgesehenen Nagellöcher befüllen — jedes leere Loch reduziert die Tragfähigkeit.", "Balkenschuh bündig an Ober- und Unterkante des Balkens anschlagen.", "Verbinder vor der Montage auf korrekten Querschnitt prüfen.", "Bei BSH- oder LVL-Balken Hersteller-Montageanweisung beachten."],
  commonMistakes: ["Normale Holzschrauben statt zugelassener Verbindungsmittel verwenden.", "Nicht alle Nagellöcher befüllen.", "Falschen Balkenschuhtyp für den Balkenquerschnitt verwenden.", "Balkenschuh nicht bündig montieren.", "Nachträgliches Bohren oder Vergrößern von Löchern im Balkenschuh."],
  faqs: [
    { question: "Brauche ich für jeden Deckenbalken einen Balkenschuh?", answer: "An jedem Anschluss an einen Unterzug, Träger oder eine Wand wird ein Balkenschuh benötigt. Bei Auflage auf dem Rähm (oben aufgelegt) sind Balkenschuhe optional, bei eingehängten Balken Pflicht." },
    { question: "Simpson oder Knapp?", answer: "Beide sind in Deutschland bauaufsichtlich zugelassen. Simpson Strong-Tie hat das breiteste Sortiment. Knapp bietet innovative verdeckte Verbinder. Sherpa Holzverbinder für sichtbare Konstruktionen." },
    { question: "Welche Nägel für Balkenschuhe?", answer: "Nur die vom Hersteller zugelassenen Kammnägel oder Schrauben. Simpson: CNA-Nägel 4,0×40 mm. Keine Standard-Drahtnägel oder Universalschrauben." },
    { question: "Kann ich Balkenschuhe auch für Sparren verwenden?", answer: "Ja, es gibt spezielle Sparrenpfettenanker und Winkelverbinder für die Sparren-Pfetten-Verbindung. Simpson H-Anker und Knapp-Sparrenverbinder sind die gängigsten." },
    { question: "Was kostet ein Balkenschuh?", answer: "2–8 EUR pro Stück je nach Größe. Für ein EFH mit 20 Deckenbalken: ca. 80–320 EUR. Plus Spezialnägel: ca. 30–60 EUR." },
    { question: "Brauche ich Balkenschuhe bei Holzrahmenbau?", answer: "Im modernen Holzrahmenbau werden Balkenschuhe und Winkelverbinder an nahezu allen tragenden Verbindungen verwendet. Sie erhöhen die Tragfähigkeit und Erdbebensicherheit erheblich gegenüber reiner Vernagelung." },
  ],
};

export const hurricaneTieCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamtzahl der Sparren oder Binder eingeben.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Klammeranzahl und Befestigungsmittelbedarf.", "Pro Sparren/Binder: 2 Klammern (beidseitig)."],
  materialInfo: "Sturmklammern (auch Sparren-Wand-Verbinder, Windsoganker) verbinden Sparren oder Binder mit der Wandkonstruktion und verhindern das Abheben des Daches bei Sturm. In Deutschland nach DIN EN 1991-1-4 (Windlasten) und den Landesbauordnungen erforderlich. Simpson Strong-Tie H-Anker, Knapp-Windsoganker und BMF-Sturmklammern sind die gängigsten Produkte. Kosten: 1–4 EUR pro Verbinder. An Küstenstandorten (Nord- und Ostsee) mit Windzone 3–4 sind verstärkte Verbinder erforderlich.",
  nextSteps: [
    { label: "Dachbinder-Rechner", href: "/calculators/roofing/truss-calculator/" },
    { label: "Sparren-Rechner", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Balkenschuh-Rechner", href: "/calculators/hardware/joist-hanger-calculator/" },
  ],
  installationTips: ["An jedem Sparren/Binder auf beiden Seiten montieren.", "Nur zugelassene Nägel/Schrauben verwenden.", "Alle Nagellöcher befüllen.", "Verbinder eng an Sparren und Rähm anlegen.", "Verstärkte Verbinder in Windzone 3–4 verwenden."],
  commonMistakes: ["Sturmklammern ganz weglassen — bei Sturm kann das Dach abheben.", "Nur auf einer Seite montieren — beidseitig ist erforderlich.", "Normale Schrauben verwenden statt zugelassener Verbindungsmittel.", "Nicht alle Nagellöcher befüllen.", "Standard-Verbinder in Küstengebieten mit hoher Windlast verwenden."],
  faqs: [
    { question: "Sind Sturmklammern in Deutschland Pflicht?", answer: "Ja. Die DIN EN 1991-1-4 in Verbindung mit der jeweiligen Landesbauordnung fordert eine nachweisbare Verbindung zwischen Dach und Wandkonstruktion gegen Windlasten." },
    { question: "Wie viele Klammern brauche ich?", answer: "2 pro Sparren oder Binder (je eine links und rechts). Bei 20 Sparren: 40 Klammern. Plus Reserve." },
    { question: "Welche Windzone gilt für meinen Standort?", answer: "Deutschland hat 4 Windzonen nach DIN EN 1991-1-4/NA. Zone 1 (Binnenland, geringe Windlast) bis Zone 4 (Nordseeküste, hohe Windlast). Ihr Statiker oder die Bauaufsicht gibt die Zone an." },
    { question: "Kann ich Simpson-Verbinder in Deutschland verwenden?", answer: "Ja. Simpson Strong-Tie hat eine allgemeine bauaufsichtliche Zulassung (abZ/ETA) für die meisten Produkte in Deutschland. Die Zulassungsnummer steht auf dem Produkt." },
    { question: "Was kosten Sturmklammern für ein EFH?", answer: "Bei 40 Sparren × 2 Klammern × 2 EUR = ca. 160 EUR. Plus Spezialnägel: ca. 30 EUR. Vernachlässigbare Kosten für erhebliche Sicherheit." },
    { question: "Brauche ich Sturmklammern auch bei Nagelplattenbindern?", answer: "Ja. Auch Nagelplattenbinder müssen gegen Windabheben gesichert werden. Der Binderhersteller gibt die erforderlichen Verbinder und deren Befestigung vor." },
  ],
};

export const lumberCostCalculator: CalculatorSEOContent = {
  disclaimer: "Preise sind Richtwerte und können nach Region, Holzhandlung und Marktsituation variieren.",
  howToUse: ["Holzart und Querschnitt wählen.", "Stückzahl und Länge eingeben.", "Stückpreis oder Laufmeterpreis eingeben.", "Klicken Sie auf Materialien berechnen für Gesamtkosten."],
  materialInfo: "Bauholzpreise in Deutschland variieren nach Holzart, Sortierklasse, Querschnitt und Marktlage. KVH 6×12×250 cm: 5–8 EUR. KVH 6×16×300 cm: 8–14 EUR. KVH 8×20×500 cm: 20–35 EUR. BSH GL24h: 500–900 EUR/m³. Preise schwanken saisonal (günstiger im Winter) und nach Marktlage. Baustoffhändler bieten 10–25 % günstigere Preise als Baumärkte. Paketpreise (100+ Stück) sparen weitere 10–20 %. Immer mehrere Angebote einholen — Preisunterschiede von 15–30 % sind üblich.",
  nextSteps: [
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Schnittholz-Rechner", href: "/calculators/hardware/board-feet-calculator/" },
    { label: "Sperrholz-Rechner", href: "/calculators/hardware/plywood-calculator/" },
  ],
  installationTips: ["Holz trocken und überdacht lagern.", "Holzfeuchte vor Einbau prüfen (max. 20 %).", "KVH-Stempel auf Sortierklasse und Feuchtegehalt prüfen.", "Mehrere Angebote einholen — Preise variieren stark.", "Holzpakete auf Beschädigungen prüfen bei Anlieferung."],
  commonMistakes: ["Holz ohne Abdeckung im Freien lagern.", "Baumarktpreise als Referenz nehmen — Holzhandlungen sind 15–25 % günstiger.", "Holz ohne Sortierklassen-Stempel für tragende Zwecke verwenden.", "Holz mit zu hoher Feuchte einbauen.", "Saisonale Preisschwankungen nicht berücksichtigen."],
  faqs: [
    { question: "Was kostet KVH aktuell?", answer: "KVH 6×12×250 cm: 5–8 EUR. KVH 6×16×300 cm: 8–14 EUR. Preise schwanken nach Marktlage und Region. Stand: 2026/2025." },
    { question: "KVH oder BSH?", answer: "KVH für Standardquerschnitte bis ca. 5 m Spannweite. BSH für größere Spannweiten, höhere Lasten und sichtbare Konstruktionen. BSH kostet ca. 2–3× mehr." },
    { question: "Wo kaufe ich am günstigsten?", answer: "1. Holzfachhandel (Holzland-Partner): beste Qualität und Beratung, 15–25 % günstiger als Baumarkt. 2. Direkt vom Sägewerk: 30–50 % günstiger, aber Mindestmengen. 3. Baumarkt: bequem, aber teuerste Option." },
    { question: "Wann ist Holz am günstigsten?", answer: "Oktober bis Januar — nach Ende der Bausaison und vor Frühjahrsnachfrage. Einsparung: 10–20 % gegenüber Frühjahrs-/Sommerpreisen." },
    { question: "Was bedeutet S10/C24?", answer: "S10 ist die deutsche Sortierklasse (visuell sortiert), C24 die europäische Festigkeitsklasse. Beides beschreibt dasselbe: Standard-Bauholz für tragende Konstruktionen." },
    { question: "Wie viel Holz für ein EFH in Holzrahmenbauweise?", answer: "Ca. 25–35 m³ für ein 140-m²-EFH. Bei aktuellen Preisen: 8.000–15.000 EUR für das komplette Holzpaket." },
  ],
};

export const boardFeetCalculator: CalculatorSEOContent = {
  disclaimer: "Umrechnungswerte. Preise variieren nach Holzart und Händler.",
  howToUse: ["Holzmaße eingeben (Breite, Stärke, Länge).", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Kubikmeter und Kosten.", "Für Hartholz und Schnittholz-Berechnung."],
  materialInfo: "In Deutschland wird Schnittholz in Kubikmetern (m³) oder Laufmetern (lfm) gehandelt, nicht in Board Feet wie in Nordamerika. Dieser Rechner konvertiert Holzmaße in Volumen und schätzt Kosten. Nadelholz-Schnittholz: 300–500 EUR/m³. Buche: 600–900 EUR/m³. Eiche: 800–1.400 EUR/m³. Nussbaum: 1.200–2.500 EUR/m³.",
  nextSteps: [
    { label: "Holzkosten-Rechner", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Sperrholz-Rechner", href: "/calculators/hardware/plywood-calculator/" },
    { label: "Ständerrechner", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: ["Holzmaße immer in mm oder cm angeben — Verwechslung vermeiden.", "Verschnitt von 10–20 % einplanen je nach Projekttyp.", "Holzfeuchte nach Trocknungsgrad prüfen.", "Hartholz vor der Verarbeitung akklimatisieren lassen.", "Maserungsrichtung bei der Planung berücksichtigen."],
  commonMistakes: ["Board Feet mit Kubikmetern verwechseln — unterschiedliche Einheiten.", "Verschnitt nicht einplanen.", "Nominale statt tatsächliche Maße verwenden.", "Holz ohne Akklimatisierung verarbeiten.", "Feuchtes Hartholz einbauen."],
  faqs: [
    { question: "Was ist ein Board Foot?", answer: "1 Board Foot = 1 Fuß × 1 Fuß × 1 Zoll = ca. 0,00236 m³. In Deutschland wird Holz in m³ oder lfm gehandelt." },
    { question: "Wie rechne ich Board Feet in Kubikmeter um?", answer: "Board Feet × 0,00236 = Kubikmeter. 100 Board Feet = 0,236 m³." },
    { question: "Was kostet Eiche pro Kubikmeter?", answer: "Eiche-Schnittholz: 800–1.400 EUR/m³ je nach Sortierung und Stärke. Eiche-Parkettdielen: 40–100 EUR/m²." },
    { question: "Wo kaufe ich Hartholz in Deutschland?", answer: "Holzfachhandel (Holzland), spezialisierte Hartholzhändler (z. B. Pollmeier, Edelholz-Händler), Online-Holzhandel (holz-richter.de)." },
    { question: "Technisch getrocknet oder luftgetrocknet?", answer: "Für Innenausbau immer technisch getrocknetes Holz (8–12 % Feuchte) verwenden. Luftgetrocknetes Holz (15–20 %) nur für Außenanwendungen oder wenn nachträgliches Schwinden akzeptabel ist." },
    { question: "Was ist der Unterschied zwischen Schnittholz und Hobelware?", answer: "Schnittholz ist sägerauh mit Aufmaß (z. B. 30 mm sägerauh = ca. 27 mm gehobelt). Hobelware ist gehobelt auf exaktes Maß. Hobelware kostet 20–40 % mehr." },
  ],
};

export const plywoodCalculatorDE: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamtfläche in m² eingeben.", "Plattenstärke wählen (4 mm bis 21 mm).", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Plattenzahl und Kostenschätzung."],
  materialInfo: "Sperrholz ist ein Schichtholzwerkstoff aus kreuzweise verleimten Furnieren. Formate in Deutschland: 1.250 × 2.500 mm und 1.500 × 3.000 mm. Sorten: BFU 20 (für trockene Innenräume), BFU 100 (für feuchte Bedingungen und Außenbereich), Seekiefer-Sperrholz (für marine Anwendungen). Stärken: 4 mm (Rückwände), 9 mm (leichte Beplankung), 12 mm (Wandbeplankung), 15 mm (Unterboden), 18 mm (Möbel, Unterboden), 21 mm (schwere Lasten). Holzarten: Fichte/Kiefer (Standard), Birke (Möbel, hohe Festigkeit), Seekiefer (Außenbereich). Kosten: 15–60 EUR/Platte je nach Stärke, Sorte und Holzart.",
  nextSteps: [
    { label: "Holzkosten-Rechner", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "OSB-Platten-Rechner", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Wandbeplankung-Rechner", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: ["Verleimungsklasse (BFU 20/100) nach Einsatzbereich wählen.", "Platten trocken und eben lagern.", "Dehnfugen von 2–3 mm bei größeren Flächen vorsehen.", "Schnittkanten bei Außenanwendung versiegeln.", "Schrauben vorgebohrt setzen bei dünnem Sperrholz (unter 9 mm)."],
  commonMistakes: ["BFU 20 (Innenbereich) im Außenbereich verwenden.", "Platten feucht einbauen — Verformung und Delamination.", "Dehnfugen vergessen bei größeren Flächen.", "Falschen Plattentyp für die statische Anforderung wählen.", "Sperrholz mit OSB-Platte gleichsetzen — unterschiedliche Eigenschaften."],
  faqs: [
    { question: "Sperrholz oder OSB: Was ist besser?", answer: "Sperrholz ist dimensionsstabiler, feuchtebeständiger und hat bessere Biegefestigkeit. OSB ist günstiger. Für tragende Beplankung im Holzrahmenbau sind beide geeignet. Für Möbel und sichtbare Flächen ist Birken-Sperrholz die bessere Wahl." },
    { question: "Was bedeutet BFU 20 und BFU 100?", answer: "BFU = Baufurniersperrholz. BFU 20: für trockene Innenräume (Nutzungsklasse 1). BFU 100: für feuchte Bedingungen und Außenbereich (Nutzungsklasse 2–3). Die Zahl gibt den Prüfwert für die Verleimung an." },
    { question: "Wie viele Platten für 50 m²?", answer: "Bei 1.250 × 2.500 mm (3,125 m²/Platte): 50 ÷ 3,125 = 16 Platten. Plus 10 % Verschnitt = 18 Platten." },
    { question: "Was kostet Birken-Sperrholz?", answer: "Birken-Sperrholz 18 mm BFU 100: 35–60 EUR/Platte (1.250 × 2.500 mm). Für Möbelqualität (B/BB-Sortierung): 50–80 EUR/Platte." },
    { question: "Welche Stärke für Unterboden?", answer: "18 mm bei 40 cm Balkenabstand. 21 mm bei 60 cm Abstand. OSB ist für diese Anwendung günstiger, Sperrholz bietet bessere Feuchtebeständigkeit." },
    { question: "Kann ich Sperrholz im Außenbereich verwenden?", answer: "Nur BFU 100 oder marine-geprüftes Sperrholz. Schnittkanten versiegeln. Für dauerhafte Außenanwendung zusätzlich Holzschutz-Lasur oder Anstrich aufbringen." },
  ],
};

// ─── FINISHING ──────────────────────────────────────────────────────────────────

export const paintCoverageCalculatorDE: CalculatorSEOContent = {
  disclaimer: "Ergiebigkeit variiert nach Untergrund, Farbart und Auftragsmethode.",
  howToUse: ["Gesamte Wandfläche in m² eingeben.", "Anzahl der Anstriche wählen (Standard: 2).", "Ergiebigkeit pro Liter eingeben (Standard: 7 m²/Liter).", "Klicken Sie auf Materialien berechnen für Literbedarf und Gebindezahl."],
  materialInfo: "Dispersionsfarbe ist die Standardfarbe für Innenwände in Deutschland. Ergiebigkeit: 6–8 m²/Liter für einen Anstrich bei glattem, zuvor gestrichenem Untergrund. Auf neuem Gipskarton oder Putz: 4–6 m²/Liter (poröser Untergrund absorbiert mehr). Premium-Marken (Brillux ELF, Caparol Indeko-Plus, Alpina): 7–8 m²/Liter. Qualitätsfarben kosten 3–8 EUR/Liter, liefern aber bessere Deckkraft und erfordern weniger Anstriche. Für Feuchträume: Silikat- oder Latexfarbe. Für Fassaden: Silikonharz- oder Silikatfarbe.",
  nextSteps: [
    { label: "Farbkosten-Rechner", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Grundierung-Rechner", href: "/calculators/finishing/primer-calculator/" },
    { label: "Gipskarton-Rechner", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: ["Immer grundieren bei neuem Gipskarton oder Putz.", "Zwei Anstriche als Standard einplanen.", "Zwischen den Anstrichen vollständig trocknen lassen.", "Farbroller mit passender Flordicke wählen.", "Ecken und Kanten zuerst mit Pinsel vorstreichen."],
  commonMistakes: ["Grundierung auf neuem Untergrund weglassen.", "Nur einen Anstrich auftragen — ungleichmäßige Deckkraft.", "Farbe zu stark verdünnen.", "Bei Farbwechsel von dunkel zu hell keine Zwischengrundierung verwenden.", "Falsche Farbart für den Raum wählen (z. B. Dispersionsfarbe im Spritzwasserbereich)."],
  faqs: [
    { question: "Wie viel Farbe für einen 3,5×3,5-m-Raum?", answer: "Wandfläche ca. 35 m², minus Tür/Fenster ca. 30 m². Bei 7 m²/Liter und 2 Anstrichen: 30 × 2 ÷ 7 = 8,6 Liter. Einen 10-Liter-Eimer kaufen." },
    { question: "Wie viele Quadratmeter deckt ein Liter?", answer: "6–8 m² auf glattem, zuvor gestrichenem Untergrund. 4–6 m² auf neuem Putz oder Gipskarton." },
    { question: "10-Liter-Eimer oder Einzelgebinde?", answer: "10-Liter-Eimer spart 15–20 % pro Liter und garantiert Farbkonsistenz. Ab 5 Liter Bedarf zum Eimer greifen." },
    { question: "Was kostet es, einen Raum selbst zu streichen?", answer: "Material: 30–80 EUR (Farbe + Zubehör). Malerbetrieb: 200–500 EUR für den gleichen Raum." },
    { question: "Brauche ich Grundierung?", answer: "Ja bei neuem Gipskarton, neuem Putz, reparierten Stellen und starken Farbwechseln. Auf zuvor gestrichenen intakten Flächen optional." },
    { question: "Welche Farbe für Badezimmer?", answer: "Silikat- oder Latex-Dispersionsfarbe (scheuerbeständig). Im Spritzwasserbereich der Dusche: Fliesenverlegung oder spezielle Feuchtraumfarbe. Zusätzlich: gute Belüftung gegen Schimmel." },
  ],
};

export const paintCostCalculatorDE: CalculatorSEOContent = {
  disclaimer: "Preise sind Richtwerte und variieren nach Marke, Region und Qualitätsstufe.",
  howToUse: ["Gesamte streichbare Fläche in m² eingeben.", "Qualitätsstufe wählen (Basis/Standard/Premium).", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Farbkosten und Zubehörschätzung."],
  materialInfo: "Die Gesamtkosten eines Streichprojekts umfassen Farbe, Grundierung und Zubehör. Wandfarbe: 3–8 EUR/Liter (Basis bis Premium). Grundierung: 2–5 EUR/Liter. Zubehör für ein Raumprojekt: 20–40 EUR (Rollen, Pinsel, Abdeckmaterial, Abklebeband). Für ein ganzes Haus (140 m²): Wandfarbe 150–400 EUR, Grundierung 80–200 EUR, Zubehör 60–120 EUR. Gesamtkosten Eigenleistung: 300–700 EUR. Fachbetrieb: 2.000–5.000 EUR.",
  nextSteps: [
    { label: "Farbergiebigkeit-Rechner", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Grundierung-Rechner", href: "/calculators/finishing/primer-calculator/" },
    { label: "Gipskarton-Rechner", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: ["Qualitätsfarbe kaufen — spart Anstriche und liefert besseres Ergebnis.", "10-Liter-Eimer für Kostenersparnis.", "Zubehör nicht sparen — gute Rollen und Pinsel machen den Unterschied.", "Restfarbe für Ausbesserungen aufbewahren.", "Preise vergleichen zwischen Baumarkt und Malerbedarf."],
  commonMistakes: ["Billigste Farbe kaufen — erfordert mehr Anstriche und deckt schlechter.", "Zubehörkosten nicht einplanen.", "Zu wenig Farbe kaufen und nachkaufen müssen (Farbunterschied zwischen Chargen).", "Grundierung bei Neubau weglassen — spart kurzfristig, kostet langfristig.", "Rollen und Pinsel wiederverwenden ohne ordentliche Reinigung."],
  faqs: [
    { question: "Was kostet ein Raum zum Streichen?", answer: "Eigenleistung: 30–80 EUR Material. Malerbetrieb: 200–500 EUR je nach Raumgröße und Qualitätsstufe." },
    { question: "Was kostet ein ganzes Haus innen zu streichen?", answer: "Eigenleistung: 300–700 EUR Material. Malerbetrieb: 2.000–5.000 EUR für ein 140-m²-Haus." },
    { question: "Basis, Standard oder Premium-Farbe?", answer: "Basis (3–4 EUR/L): für Keller, Lager, Mietobjekte. Standard (4–6 EUR/L): für die meisten Wohnräume. Premium (6–8 EUR/L): für Wohnbereiche mit höchstem Anspruch an Deckkraft und Strapazierfähigkeit." },
    { question: "Lohnt sich teurere Farbe?", answer: "Ja. Premium-Farbe (z. B. Brillux, Caparol Indeko-Plus) deckt in 1–2 Anstrichen statt 2–3 bei Billigfarbe. Der Zeitersparnis-Wert übersteigt den Preisunterschied deutlich." },
    { question: "Was kostet Fassadenfarbe?", answer: "Fassadenfarbe: 5–15 EUR/Liter. Silikonharzfarbe (Premium): 8–15 EUR/L. Für ein EFH (200–300 m² Fassade): 400–1.000 EUR Material." },
    { question: "Brauche ich spezielles Zubehör?", answer: "Minimum: Farbwalze (10 mm Flor für glatte Wände), Ecken-Pinsel 50 mm, Abklebeband, Abdeckvlies, Farbwanne. Für Decken: Teleskopstange. Gesamtkosten Zubehör: 30–60 EUR." },
  ],
};

export const primerCalculatorDE: CalculatorSEOContent = {
  disclaimer: "Ergiebigkeit variiert nach Untergrund-Saugfähigkeit.",
  howToUse: ["Gesamte zu grundierende Fläche eingeben.", "Untergrundtyp wählen (neuer Gipskarton, Holz, Renovierung).", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Literbedarf und Gebindezahl."],
  materialInfo: "Grundierung (Tiefengrund, Haftgrund, Sperrgrund) bereitet den Untergrund für den Anstrich vor. Tiefengrund (z. B. Knauf Tiefengrund, Caparol Sylitol, Brillux Lacryl): penetriert poröse Untergründe und reduziert die Saugfähigkeit. Ergiebigkeit: 6–10 m²/Liter je nach Saugfähigkeit. Haftgrund: für glatte, nicht-saugende Untergründe. Sperrgrund: für Flecken, Nikotinverfärbungen und Holzinhaltsstoffe. Kosten: 2–5 EUR/Liter. Für neuen Gipskarton oder Putz: Tiefengrund ist IMMER erforderlich. Für zuvor gestrichene intakte Flächen: Grundierung optional, aber empfohlen bei Farbwechsel.",
  nextSteps: [
    { label: "Farbergiebigkeit-Rechner", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Farbkosten-Rechner", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Gipskarton-Rechner", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: ["Auf sauberem, staubfreiem Untergrund auftragen.", "Grundierung vollständig trocknen lassen (4–24 Stunden je nach Produkt).", "Bei sehr saugfähigen Untergründen zweimal grundieren.", "Grundierung mit Rolle oder Quast gleichmäßig auftragen.", "Temperatur mindestens 5 °C bei Verarbeitung."],
  commonMistakes: ["Grundierung auf neuem Gipskarton/Putz weglassen — Farbe deckt ungleichmäßig und blättert.", "Zu kurze Trocknungszeit — Grundierung muss vollständig durchgetrocknet sein.", "Falschen Grundierungstyp wählen — Tiefengrund für poröse, Haftgrund für glatte Untergründe.", "Grundierung zu stark verdünnen.", "Bei Sperrgrund: nur einmal auftragen statt zweimal."],
  faqs: [
    { question: "Brauche ich immer Grundierung?", answer: "Ja bei: neuem Gipskarton, neuem Putz, gespachtelten Stellen, stark saugenden Untergründen und starken Farbwechseln. Optional bei zuvor gestrichenen intakten Flächen in ähnlicher Farbe." },
    { question: "Welcher Grundierungstyp?", answer: "Tiefengrund: für neuen Gipskarton, Putz, Beton. Haftgrund: für glatte, nicht-saugende Flächen. Sperrgrund: für Nikotin-, Ruß- und Holzinhaltsstoff-Flecken." },
    { question: "Wie viel Grundierung pro Quadratmeter?", answer: "0,1–0,15 Liter/m² (Ergiebigkeit 6–10 m²/Liter). Für 100 m²: ca. 10–15 Liter Tiefengrund." },
    { question: "Was kostet Grundierung?", answer: "Tiefengrund: 2–4 EUR/Liter. Haftgrund: 5–10 EUR/Liter. Sperrgrund: 8–15 EUR/Liter." },
    { question: "Kann ich auf Grundierung verzichten bei selbstgrundierender Farbe?", answer: "Selbstgrundierende Farben (z. B. Caparol CapaGrund) ersetzen die separate Grundierung auf zuvor gestrichenen Flächen. Bei neuem Putz oder Gipskarton ist dennoch eine separate Grundierung empfohlen." },
    { question: "Wie lange muss Grundierung trocknen?", answer: "Tiefengrund: 4–12 Stunden. Haftgrund: 12–24 Stunden. Sperrgrund: 24 Stunden. Immer Herstellerangabe beachten und bei Bedarf durch Fingertest prüfen." },
  ],
};

// ─── OUTDOOR ──────────────────────────────────────────────────────────────────

export const deckBoardCalculatorDE: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Terrassenfläche in m² eingeben.", "Dielenbreite und -länge wählen.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Stückzahl, Laufmeter und Verschnittfaktor."],
  materialInfo: "Terrassendielen in Deutschland sind erhältlich aus Douglasie (20–35 EUR/m²), sibirischer Lärche (25–40 EUR/m²), Bangkirai/Cumaru (35–70 EUR/m²), WPC (30–80 EUR/m²) und Thermoholz (25–50 EUR/m²). Standardformat: 28×145 mm in Längen von 3–6 m. Unterkonstruktion aus KDI-Kiefer, Aluminium oder WPC-Unterleger bei 40–50 cm Achsabstand. Edelstahlschrauben (A2 oder A4) sind Pflicht — normale Schrauben rosten und verfärben das Holz. Hinterlüftung und Gefälle (1–2 %) für Wasserablauf einplanen.",
  nextSteps: [
    { label: "Terrassen-Punktfundament-Rechner", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Terrassengeländer-Rechner", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Terrassentreppe-Rechner", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: ["Gefälle von 1–2 % vom Haus weg einplanen.", "Dielen mit 5–8 mm Fugenabstand verlegen.", "Edelstahlschrauben (A2, besser A4) verwenden.", "Unterkonstruktion aus dauerhaftem Material (KDI, Alu, WPC).", "Holzdielen vor Verlegung mit Öl oder Lasur behandeln."],
  commonMistakes: ["Gefälle vergessen — Wasser staut sich am Haus.", "Normale Stahlschrauben verwenden — rosten und verfärben.", "Fugenabstand zu eng — Dielen quellen bei Nässe.", "KDI-Holz für Unterkonstruktion nicht verwenden.", "Bodenfreiheit unter der Terrasse zu gering — Hinterlüftung wichtig."],
  faqs: [
    { question: "Welches Holz für Terrassendielen in Deutschland?", answer: "Douglasie und Lärche: gutes Preis-Leistungs-Verhältnis, 10–15 Jahre Lebensdauer mit Pflege. Bangkirai: 20–25 Jahre, weniger Pflege. WPC: 25–50 Jahre, pflegefrei. Thermoholz: 15–20 Jahre, ökologisch." },
    { question: "Wie viele Dielen brauche ich?", answer: "Fläche (m²) ÷ Dielenbreite (m) = Laufmeter. Plus 10 % Verschnitt. Für 20 m²: 20 ÷ 0,145 m = 138 lfm. Plus 10 % = 152 lfm." },
    { question: "Brauche ich eine Baugenehmigung für eine Terrasse?", answer: "In den meisten Bundesländern sind ebenerdige Terrassen genehmigungsfrei. Aufgeständerte Terrassen über 60 cm Höhe können genehmigungspflichtig sein. Prüfen Sie Ihre Landesbauordnung." },
    { question: "Wie pflege ich eine Holzterrasse?", answer: "Jährlich reinigen und ölen (Douglasie, Lärche) bzw. alle 2 Jahre (Bangkirai). WPC: nur mit Wasser und Seife reinigen, kein Ölen nötig." },
    { question: "WPC oder Holz?", answer: "WPC: pflegefrei, 25–50 Jahre, 2–4× teurer anfangs, wird heiß in der Sonne. Holz: natürliche Optik, jährliche Pflege, kühler unter den Füßen, günstiger anfangs." },
    { question: "Was kostet eine Holzterrasse komplett?", answer: "Material 40–120 EUR/m² (Dielen + Unterkonstruktion + Schrauben). Eingebaut: 80–200 EUR/m² je nach Material und Unterbau. 20-m²-Terrasse: 1.600–4.000 EUR Material." },
  ],
};

export const deckFootingCalculatorDE: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Terrassenfläche und -maße eingeben.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Fundamentanzahl, Pfostenraster und Trägerabstände.", "Fundamenttiefe nach Frosttiefe wählen."],
  materialInfo: "Terrassen-Punktfundamente tragen die Unterkonstruktion und übertragen die Lasten in den Baugrund. Optionen: Beton-Schalungsrohre (Ø 20–30 cm), Fertig-Betonfüße, Stelzlager oder Streifenfundamente. Punktfundamente müssen in Deutschland unter die Frosttiefe reichen (60–120 cm je nach Region). Pfostenraster typisch 1,50 × 1,50 m bis 2,00 × 2,00 m je nach Trägerspannweite. Pfostenträger (Simpson, Knapp) verbinden Pfosten mit dem Fundament und halten das Holz vom Beton fern.",
  nextSteps: [
    { label: "Terrassendielen-Rechner", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Terrassengeländer-Rechner", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: ["Frosttiefe einhalten (60–120 cm in Deutschland).", "Pfostenträger verwenden — Holz nicht direkt auf Beton.", "Fundamente lotrecht und im Raster ausrichten.", "Entwässerung unter der Terrasse sicherstellen.", "Schalungsrohre auf verdichteter Schotterbasis aufstellen."],
  commonMistakes: ["Frosttiefe nicht einhalten — Fundamente heben sich im Winter.", "Pfosten direkt in den Boden eingraben ohne Betonfundament.", "Pfostenraster zu weit — Unterkonstruktion durchhängt.", "Drainage unter der Terrasse vergessen.", "Holzpfosten ohne Pfostenträger auf Beton stellen."],
  faqs: [
    { question: "Wie viele Punktfundamente brauche ich?", answer: "Abhängig vom Raster: bei 2×2-m-Raster für eine 4×5-m-Terrasse: 3 × 4 = 12 Fundamente. Bei 1,5×1,5-m-Raster: 4 × 5 = 20 Fundamente." },
    { question: "Wie tief müssen Terrassenfundamente sein?", answer: "Unter die Frosttiefe: 60–80 cm in milden Regionen, bis 120 cm in kälteren Gebieten. Prüfen Sie die örtliche Bauordnung." },
    { question: "Beton-Schalungsrohre oder Fertigfüße?", answer: "Schalungsrohre mit Ortbeton: flexibler, günstiger bei vielen Fundamenten. Fertigfüße: schneller bei wenigen Fundamenten, aber nur für ebenerdige oder leicht erhöhte Terrassen." },
    { question: "Brauche ich einen Statiker für meine Terrasse?", answer: "Für ebenerdige Standardterrassen in der Regel nicht. Für aufgeständerte Terrassen über 60 cm Höhe und für Terrassen an Hanglagen sollte ein Statiker konsultiert werden." },
    { question: "Welchen Pfostenquerschnitt brauche ich?", answer: "9×9 cm für leichte Terrassen. 12×12 cm oder 14×14 cm für höhere Terrassen und größere Spannweiten. KDI-Holz oder Edelstahl verwenden." },
    { question: "Alternative zu Punktfundamenten?", answer: "Stelzlager (verstellbare Kunststofffüße) für ebenerdige Terrassen auf befestigtem Untergrund. Terrassenschrauben für direkte Befestigung auf Betonplatte. Streifenfundamente für große, schwere Terrassen." },
  ],
};

export const deckRailingCalculatorDE: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: ["Gesamtlänge der Geländer-Abschnitte eingeben.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Pfostenzahl, Geländerstäbe und Handlauf-Laufmeter.", "Pfostenabstand max. 1,50 m nach DIN."],
  materialInfo: "Terrassengeländer sind nach DIN 18065 und den Landesbauordnungen ab 60 cm Absturzhöhe vorgeschrieben. Mindesthöhe: 90 cm bei Absturzhöhen bis 12 m. Geländerstababstand: max. 12 cm (Kindersicherheit). Pfostenabstand: max. 1,50 m. Materialien: KDI-Holz, Edelstahl, Aluminium, Glas. Holzgeländer kosten 50–120 EUR/lfm Material. Edelstahlgeländer: 100–250 EUR/lfm. Aluminium-Fertigsysteme: 80–180 EUR/lfm. Wichtig: Der Handlauf muss griffsicher (3–5 cm Durchmesser) und durchgehend sein.",
  nextSteps: [
    { label: "Terrassendielen-Rechner", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Terrassen-Punktfundament-Rechner", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Terrassentreppe-Rechner", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: ["Pfosten kraftschlüssig an der Unterkonstruktion befestigen — nicht nur an den Dielen.", "Geländerstababstand max. 12 cm (eine 12-cm-Kugel darf nicht durchpassen).", "Handlauf durchgehend und griffsicher gestalten.", "Edelstahlschrauben (A2/A4) für alle Verbindungen verwenden.", "Geländer-Systeme nach Herstelleranleitung montieren."],
  commonMistakes: ["Pfosten nur an den Terrassendielen befestigen statt an der Unterkonstruktion.", "Geländerstababstand über 12 cm — Kindersicherheitsrisiko.", "Handlauf nicht griffsicher — muss 3–5 cm Durchmesser haben.", "Geländerhöhe unter 90 cm.", "Holzgeländer ohne Witterungsschutz montieren."],
  faqs: [
    { question: "Ab welcher Höhe brauche ich ein Geländer?", answer: "Ab 60 cm Absturzhöhe ist ein Geländer nach Landesbauordnung vorgeschrieben. Mindesthöhe: 90 cm." },
    { question: "Welcher maximale Geländerstababstand?", answer: "12 cm (eine Kugel mit 12 cm Durchmesser darf nicht durchpassen). Dies dient der Kindersicherheit." },
    { question: "Holz- oder Edelstahlgeländer?", answer: "Holzgeländer: natürliche Optik, günstiger, erfordert regelmäßige Pflege. Edelstahlgeländer: wartungsfrei, modern, teurer." },
    { question: "Wie viele Geländerpfosten brauche ich?", answer: "Maximalabstand 1,50 m. Für 6 m Geländer: 6 ÷ 1,5 + 1 = 5 Pfosten minimum." },
    { question: "Brauche ich eine Baugenehmigung für ein Terrassengeländer?", answer: "Nein, das Geländer ist Teil der Terrasse. Wenn die Terrasse genehmigungsfrei ist, gilt das auch für das Geländer." },
    { question: "Kann ich ein Glasgeländer verwenden?", answer: "Ja, mit bauaufsichtlich zugelassenem Sicherheitsglas (VSG oder ESG). Glasgeländer erfordern professionelle Montage und zugelassene Befestigungssysteme." },
  ],
};

export const deckStairCalculatorDE: CalculatorSEOContent = {
  disclaimer: "Stufenmaße müssen der DIN 18065 entsprechen.",
  howToUse: ["Gesamthöhe (Terrassenoberkante bis Boden) eingeben.", "Klicken Sie auf Materialien berechnen.", "Ergebnis zeigt Stufenzahl, Wangenanzahl und Trittbretter.", "Steigung und Auftritt nach DIN 18065 prüfen."],
  materialInfo: "Terrassentreppen aus Holz verbinden die Terrasse mit dem Garten. Die DIN 18065 regelt: Steigung 14–21 cm (optimal 17–18 cm), Auftritt 21–37 cm (optimal 28–29 cm). Schrittmaßregel: 2s + a = 59–65 cm. Wangentreppen (seitliche Wangen mit eingeschnittenen Stufen) sind die gängigste Bauart. Wangenholz: KDI-Kiefer oder Douglasie 6×30 cm oder 8×30 cm. Trittbretter: 2 Dielen à 28×145 mm pro Stufe. Handlauf: ab 3 Stufen nach DIN vorgeschrieben. Edelstahlschrauben verwenden.",
  nextSteps: [
    { label: "Terrassendielen-Rechner", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Terrassen-Punktfundament-Rechner", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Terrassengeländer-Rechner", href: "/calculators/outdoor/deck-railing-calculator/" },
  ],
  installationTips: ["Schrittmaßregel einhalten: 2 × Steigung + Auftritt = 59–65 cm.", "Wangen aus KDI-Holz oder Douglasie verwenden.", "Trittbretter mit Gefälle von 1 % nach vorn montieren.", "Wangenfuß auf Betonsockel oder Punktfundament aufstellen.", "Handlauf ab 3 Stufen montieren."],
  commonMistakes: ["Steigungen unterschiedlich hoch — Stolpergefahr und DIN-Verstoß.", "Gefälle der Trittbretter vergessen — Wasseransammlung und Rutschgefahr.", "Wangen nicht auf festem Untergrund aufstellen.", "Handlauf vergessen.", "Falsches Holz (nicht KDI) für Wangen und Tritte verwenden."],
  faqs: [
    { question: "Wie berechne ich die Stufenzahl?", answer: "Gesamthöhe ÷ gewünschte Steigung (17–18 cm). Bei 120 cm Höhe: 120 ÷ 17 = 7,06 → 7 Stufen. Tatsächliche Steigung: 120 ÷ 7 = 17,1 cm." },
    { question: "Wie breit muss die Treppe sein?", answer: "Mindestens 80 cm nach DIN. 100 cm ist komfortabler. Bei Treppen über 120 cm Breite zusätzliche Mittelwange erforderlich." },
    { question: "Wie viele Wangen brauche ich?", answer: "Standard 80-cm-Treppe: 2 Wangen (links/rechts) plus Mittelwange = 3. Pro 40 cm Mehrbreite eine zusätzliche Wange." },
    { question: "Braucht die Terrassentreppe einen Handlauf?", answer: "Ja, ab 3 Stufen. Griffsicher (3–5 cm Durchmesser), Höhe 86–96 cm über Stufenvorderkante. Ab 120 cm Treppenbreite beidseitig." },
    { question: "Welcher Winkel für die Treppe?", answer: "Der ideale Wohnungsbau-Winkel liegt bei 30–37°. Mit 17 cm Steigung und 28 cm Auftritt ergibt sich 33° — komfortabel für die meisten Personen." },
    { question: "Brauche ich ein Podest am Treppenfuß?", answer: "Ja. Die Wangen müssen auf einem festen Untergrund aufstehen — eine 10-cm-Betonplatte (80 × 80 cm) ist Standard. Bei mehr als 2,40 m Höhenunterschied kann ein Zwischenpodest erforderlich sein." },
  ],
};

export const postHoleCalculatorDE: CalculatorSEOContent = {
  disclaimer: "Betonvolumen für zylindrische Pfostenlöcher. Tatsächlicher Verbrauch kann je nach Bodenverhältnissen und Pfostengröße abweichen.",
  howToUse: [
    "Lochdurchmesser in Zoll eingeben — 20 cm für 9×9 cm Pfosten, 25–30 cm für 14×14 cm Pfosten.",
    "Lochtiefe in Zoll eingeben — Zaunpfosten: 60–80 cm, tragende Pfosten: 80–120 cm (frostfrei).",
    "Anzahl der Löcher eingeben.",
    "Klicken Sie auf Berechnen für Volumen pro Loch, Gesamtvolumen und Sackanzahl.",
  ],
  materialInfo:
    "Pfostenlöcher sind zylindrische Aushebungen, die mit Beton verfüllt werden, um Pfosten für Zäune, Briefkästen, Terrassenstützen, Schilder und Pergolen zu verankern. Der Beton umschließt den Pfostenfuß und überträgt die Lasten in den umliegenden Boden, sodass der Pfosten nicht verrutscht, kippt oder durch Frosthebung angehoben wird.\n\nFür Zaunpfosten gilt die Faustregel, ein Drittel der Gesamtlänge im Boden einzubetonieren. Ein 1,80-m-Zaun mit 2,40-m-Pfosten sollte 60–80 cm tief einbetoniert werden. Für 9×9-cm-Pfosten reicht ein Lochdurchmesser von 20 cm. Für 14×14-cm-Pfosten oder Torpfosten, die höhere Seitenkräfte aufnehmen, 25–30 cm Durchmesser verwenden.\n\nIn Deutschland muss die Fundamenttiefe die frostfreie Tiefe erreichen — je nach Region 60–120 cm. Tragende Pfosten für Terrassen, Pergolen und Carports müssen immer frostfrei gegründet werden.\n\nFertigbeton (z. B. Sakret Schnellbeton oder quick-mix Blitzbeton) ist das beliebteste Produkt für Pfostenlöcher. Ein 25-kg-Sack ergibt ca. 12 Liter (0,012 m³), ein 40-kg-Sack ca. 20 Liter (0,02 m³). Für große Projekte sind 40-kg-Säcke wirtschaftlicher bei ca. 5–7 EUR pro Sack gegenüber 3–5 EUR für 25-kg-Säcke.\n\nVor dem Betonieren 10–15 cm Kies als Drainageschicht in das Loch geben. Den Beton leicht über das Gelände hochziehen und vom Pfosten weg abschrägen, damit Wasser abfließt.",
  nextSteps: [
    { label: "Terrassen-Punktfundament-Rechner", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Kies-Rechner", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Beton-Rechner", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Löcher 3- bis 4-mal so breit wie der Pfosten graben — 20 cm Loch für 9×9-cm-Pfosten.",
    "10–15 cm Kies als Drainageschicht auf den Lochboden geben.",
    "Pfosten mit Wasserwaage lotrecht ausrichten und mit Latten abstützen, bevor Beton eingefüllt wird.",
    "Beton 2–3 cm über Gelände hochziehen und vom Pfosten weg abschrägen.",
    "Mindestens 24–48 Stunden aushärten lassen, bevor Zaunlatten oder Beschläge montiert werden.",
  ],
  commonMistakes: [
    "Pfosten zu flach setzen — Zaunpfosten müssen mindestens ein Drittel der Gesamtlänge im Boden stehen; tragende Pfosten unter die Frosttiefe.",
    "Drainageschicht aus Kies vergessen — ohne Drainage sammelt sich Wasser am Pfostenfuß und beschleunigt die Holzfäule.",
    "Pfosten nicht lotrecht ausrichten vor dem Aushärten des Betons — ein schiefer Pfosten lässt sich nach dem Aushärten nur durch Herausbrechen korrigieren.",
    "Beton unter Geländeoberkante gießen — der Beton sollte über dem Boden enden, damit kein Wasser am Pfosten steht.",
    "Zu kleinen Lochdurchmesser verwenden — zu wenig Beton um den Pfosten kann Seitenkräfte durch Wind oder Torbetrieb nicht aufnehmen.",
  ],
  faqs: [
    { question: "Wie viel Beton brauche ich für einen Zaunpfosten?", answer: "Ein 9×9-cm-Zaunpfosten in einem 20-cm-Loch bei 60 cm Tiefe benötigt ca. 14 Liter Beton — etwa 1 Sack à 40 kg oder 2 Säcke à 25 kg pro Pfosten. Für einen 14×14-cm-Pfosten in einem 25-cm-Loch bei 80 cm Tiefe sind ca. 30 Liter nötig." },
    { question: "Wie tief muss ein Zaunpfostenloch sein?", answer: "Die Faustregel lautet: ein Drittel der Gesamtpfostenlänge. Für einen 1,80-m-Zaun mit 2,40-m-Pfosten: 60–80 cm tief. Tor- und Eckpfosten 10 cm tiefer setzen. In Frostgebieten mindestens bis zur frostfreien Tiefe (60–120 cm je nach Region)." },
    { question: "Wie viele Säcke Beton pro Zaunpfosten?", answer: "Für einen 9×9-cm-Pfosten in einem 20-cm-Loch bei 60 cm Tiefe: 1–2 Säcke à 25 kg oder 1 Sack à 40 kg. Bei tieferen Löchern (80 cm) 2–3 Säcke à 25 kg. Schnellbeton kann trocken ins Loch geschüttet und mit Wasser übergossen werden." },
    { question: "Kann ich Schnellbeton für Pfostenlöcher verwenden?", answer: "Ja — Schnellbeton (z. B. Sakret Schnellbeton) ist ideal. Er bindet in 20–40 Minuten ab. Trockenen Beton um den Pfosten schütten, Wasser zugeben, lotrecht halten. Nach ca. 4 Stunden voll belastbar." },
    { question: "Wie berechne ich den Beton für Pfostenlöcher?", answer: "Pfostenlöcher sind Zylinder: Volumen = π × r² × Tiefe. Alle Maße in Meter umrechnen. Beispiel: 25 cm Durchmesser, 80 cm tief: r = 0,125 m, V = 3,14 × 0,125² × 0,8 = 0,039 m³ = 39 Liter. Ein 25-kg-Sack ergibt ca. 12 Liter." },
    { question: "Welche Lochgröße für einen Briefkastenpfosten?", answer: "Ein Briefkastenpfosten benötigt ein 20–25-cm-Loch, 60 cm tief. KDI-Pfosten 9×9 cm verwenden und in Beton mit Kiesdrainage setzen. Für gemauerte Briefkastenanlagen ein größeres 30-cm-Loch bei 80 cm Tiefe verwenden." },
  ],
};

// ─── RETAINING WALL ─────────────────────────────────────────────────────────

export const retainingWallCalculator: CalculatorSEOContent = {
  disclaimer: "Diese Schätzung enthält 10% Verschnitt für Steine. Der tatsächliche Kies- und Drainagebedarf hängt von Bodenverhältnissen, Grundwasserstand und lokalen Vorschriften ab. Mauern über 1,2 m erfordern in der Regel eine statische Berechnung und Baugenehmigung.",
  howToUse: [
    "Messen Sie die Gesamtlänge Ihrer Stützmauer in Metern.",
    "Geben Sie die gewünschte Mauerhöhe in Metern ein — die meisten Gartenmauern sind 0,6 bis 1,2 m hoch.",
    "Wählen Sie den Steintyp: Pflanzstein für dekorative Mauern, Schalungsstein für statische, oder Naturstein für rustikale Optik.",
    "Klicken Sie auf Berechnen für Steinbedarf, Abdecksteine, Kiesschüttung und Drainage-Schätzungen.",
  ],
  materialInfo:
    "Stützmauern halten Erdreich an Hanglagen zurück und schaffen ebene Flächen für Gärten, Terrassen, Einfahrten und Beete. Die drei häufigsten Materialien sind Pflanzsteine (Betonsteine), Schalungssteine und Naturstein.\n\nPflanzsteine und Böschungssteine sind in Deutschland die beliebteste Wahl für DIY-Stützmauern bis 1,2 m Höhe. Standardmaße sind 40×20×20 cm oder 30×20×15 cm, Gewicht 15 bis 25 kg pro Stein. Sie werden trocken aufeinander gesetzt und verriegeln sich durch Form und Eigengewicht. Typische Kosten liegen bei 2 bis 8 EUR pro Stein, oder 40 bis 120 EUR pro Quadratmeter Maueransicht.\n\nSchalungssteine (Mauerschalungssteine) werden mit Bewehrung und Beton ausgefüllt und eignen sich für statisch belastete Mauern über 1 m. Natursteinmauern aus Muschelkalk, Sandstein oder Granit erzeugen die hochwertigste Optik, kosten aber 80 bis 200 EUR pro m² eingebaut.\n\nAlle Stützmauern benötigen eine Drainage hinter der Mauer: Kiespackung aus 16/32 mm Schotter, Drainagerohr DN 100 am Mauerfuß, und Entwässerungsöffnungen in regelmäßigen Abständen. Abdeckplatten werden mit Montagekleber befestigt (ca. 1 Kartusche pro 8 Laufmeter).\n\nMauern über 1,2 m erfordern in den meisten Bundesländern eine Baugenehmigung und statische Berechnung. Beachten Sie die Landesbauordnung Ihres Bundeslandes.",
  nextSteps: [
    { label: "Streifenfundament-Rechner", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Kies-Rechner", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Mörtel-Rechner", href: "/calculators/foundation/mortar-mix-calculator/" },
  ],
  installationTips: [
    "Heben Sie einen Graben von 15 bis 20 cm Tiefe und 60 cm Breite aus — verdichten Sie den Boden und füllen Sie 15 cm Schotter als Tragschicht ein.",
    "Richten Sie die erste Reihe sorgfältig aus — jede weitere Reihe folgt der Basis. Verwenden Sie eine 1,2-m-Wasserwaage und einen Gummihammer.",
    "Verfüllen Sie mit 16/32 mm Schotter hinter der Mauer, während Sie jede Reihe aufbauen.",
    "Verlegen Sie ein DN 100 Drainagerohr am Mauerfuß mit 2% Gefälle zu einem Ablauf.",
    "Versetzen Sie die Stoßfugen mindestens 10 cm zwischen den Reihen.",
    "Befestigen Sie Abdeckplatten mit Montagekleber — tragen Sie eine durchgehende Raupe auf die letzte Reihe auf.",
  ],
  commonMistakes: [
    "Schottertragschicht weglassen — ohne verdichtete Kiesbasis setzt sich die Mauer und kippt mit der Zeit.",
    "Drainage vergessen — Wasserdruck hinter der Mauer ist die häufigste Ursache für Mauerversagen.",
    "Über 1,2 m ohne Statik bauen — die Landesbauordnung erfordert Genehmigung und Bewehrung für höhere Mauern.",
    "Mutterboden als Hinterfüllung verwenden — nur sauberer Schotter gehört direkt hinter die Mauer.",
    "Tragschicht nicht verdichten — lockerer Untergrund führt zu ungleichmäßiger Setzung im ersten Jahr.",
  ],
  faqs: [
    { question: "Wie viele Steine brauche ich für eine Stützmauer?", answer: "Für Pflanzsteine 40×20×20 cm benötigen Sie ca. 12,5 Steine pro m² Maueransicht. Eine 6 m lange, 1 m hohe Mauer (6 m²) erfordert ca. 75 Steine plus 10% Verschnitt = 83 Steine." },
    { question: "Was kostet eine Stützmauer?", answer: "Pflanzsteine kosten 40 bis 120 EUR pro m² Maueransicht eingebaut. Schalungssteine mit Bewehrung und Beton kosten 80 bis 160 EUR pro m². Natursteinmauern liegen bei 80 bis 200 EUR pro m²." },
    { question: "Brauche ich eine Baugenehmigung für eine Stützmauer?", answer: "In den meisten Bundesländern ist eine Baugenehmigung für Stützmauern über 1,2 m Höhe erforderlich. Einige Gemeinden setzen die Grenze bei 1,0 m. Informieren Sie sich bei Ihrem Bauamt." },
    { question: "Wie viel Kies brauche ich hinter einer Stützmauer?", answer: "Planen Sie eine 30 cm breite Zone mit 16/32 mm Schotter hinter der gesamten Maueransicht plus 15 cm Schottertragschicht im Graben. Für eine 6 m lange, 1 m hohe Mauer sind das ca. 2 m³ Schotter." },
    { question: "Welcher Stein ist der beste für Stützmauern?", answer: "Für DIY-Mauern unter 1,2 m sind Pflanzsteine und Böschungssteine die beste Wahl — kein Mörtel nötig, einfach zu verlegen. Für statisch belastete Mauern über 1,2 m sind Schalungssteine mit Bewehrung erforderlich." },
    { question: "Wie tief muss das Fundament einer Stützmauer sein?", answer: "Der Fundamentgraben sollte mindestens 15 cm tief sein mit 15 cm verdichtetem Schotter. In frostgefährdeten Gebieten muss das Fundament unter die Frostgrenze reichen (60 bis 80 cm in Deutschland) oder eine frostsichere Kiespackung verwenden." },
  ],
};

export const epoxyCalculator: CalculatorSEOContent = {
  disclaimer: "Die Ergiebigkeit variiert je nach Produkt, Untergrundporosität und Auftragsmethode. Der Standard von 10 m² pro Liter gilt für die meisten Garagenboden-Epoxidharze. Befolgen Sie stets die Herstellerangaben.",
  howToUse: [
    "Messen Sie Länge und Breite Ihres Bodens in Metern.",
    "Wählen Sie 1 Schicht für Grundbeschichtung oder 2 Schichten für maximale Haltbarkeit.",
    "Passen Sie die Ergiebigkeit pro Liter an, falls Ihr Produkt andere Werte angibt (Standard: 10 m²/Liter).",
    "Klicken Sie auf Berechnen für Liter, Setanzahl und Kostenschätzung.",
  ],
  materialInfo:
    "Epoxidharz-Bodenbeschichtung ist ein Zweikomponenten-Reaktionsharz (Teil A Harz + Teil B Härter), das zu einer harten, chemikalienbeständigen, glänzenden Oberfläche aushärtet. Es ist die beliebteste Garagenbodenbeschichtung und wird auch in Kellern, Werkstätten, Gewerbeküchen und Lagerhallen eingesetzt.\n\nEs gibt drei Haupttypen. Wasserbasiertes Epoxid ist am DIY-freundlichsten — geruchsarm, leichte Reinigung, Kosten 30 bis 60 EUR pro Liter/Set mit 10 m² Abdeckung. Lösemittelhaltiges Epoxid ist haltbarer und kostet 50 bis 90 EUR pro Liter. 100% Feststoff-Epoxid ist die Profi-Variante — kein Wasser oder Lösemittel, dickster Filmaufbau, 80 bis 150 EUR pro Liter.\n\nDie Untergrundvorbereitung ist der wichtigste Schritt. Der Beton muss sauber, trocken und aufgeraut sein. Kugelstrahlen, Schleifen oder Säure-Ätzen erzeugen das nötige Profil. Neuer Beton muss mindestens 28 Tage aushärten. Feuchtigkeitstest durchführen: PE-Folie 60×60 cm 24 Stunden auf den Boden kleben und auf Kondensat prüfen.\n\nAuftragungstemperatur zwischen 10°C und 30°C bei Betontemperatur über 13°C. Die meisten 2-Schicht-Systeme sind nach 3 bis 5 Tagen befahrbar. Produkte sind bei Baumärkten (OBI, Bauhaus, Hornbach) und Fachhandel erhältlich.",
  nextSteps: [
    { label: "Farb-Rechner", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Betonplatte-Rechner", href: "/calculators/foundation/concrete-slab-calculator/" },
  ],
  installationTips: [
    "Führen Sie einen Feuchtigkeitstest durch (PE-Folie 60×60 cm 24 Stunden aufkleben) — Feuchtigkeit verursacht Haftungsversagen.",
    "Schleifen oder ätzen Sie den Beton für ein Oberflächenprofil — Epoxid haftet nicht auf glattem oder versiegeltem Beton.",
    "Mischen Sie Teil A und B gründlich für die angegebene Zeit (meist 3 Minuten), dann Induktionszeit abwarten.",
    "Arbeiten Sie in Abschnitten und halten Sie eine nasse Kante — Epoxid verläuft selbst, zeigt aber Nahtspuren wenn ein Abschnitt antrocknet.",
    "12 bis 24 Stunden zwischen Schichten, 72 Stunden vor leichtem Fußverkehr. 5 bis 7 Tage vor dem Befahren warten.",
  ],
  commonMistakes: [
    "Untergrundvorbereitung auslassen — häufigste Ursache für Ablösung und Abblättern.",
    "Auf Feuchtigkeit auftragen — eingeschlossene Feuchtigkeit verursacht Blasenbildung und Delamination.",
    "Außerhalb des Temperaturbereichs arbeiten — unter 10°C härtet Epoxid zu langsam; über 30°C zu schnell.",
    "Zu viel Produkt auf einmal mischen — Epoxid erzeugt beim Aushärten Wärme. Große Mengen im Eimer können in Minuten gelieren.",
    "Keine Deckschicht auftragen — ungeschütztes Epoxid vergilbt durch UV-Strahlung.",
  ],
  faqs: [
    { question: "Wie viel Epoxidharz brauche ich für einen Garagenboden?", answer: "Eine Doppelgarage hat ca. 36 m². Bei 10 m² pro Liter benötigen Sie ca. 3,6 Liter für eine Schicht oder 7,2 Liter für zwei Schichten." },
    { question: "Was kostet eine Epoxidharz-Beschichtung?", answer: "DIY-Beschichtung kostet 15 bis 40 EUR pro m² Material. Eine 36 m² Garage kostet 300 bis 700 EUR für ein Basis-Set. Professionelle Verarbeitung kostet 40 bis 100 EUR pro m²." },
    { question: "Reicht eine Schicht Epoxid für den Garagenboden?", answer: "Eine Schicht bietet akzeptable Abdeckung für leichte Nutzung. Zwei Schichten liefern deutlich bessere Haltbarkeit und Chemikalienbeständigkeit." },
    { question: "Wie lange hält eine Epoxidbeschichtung?", answer: "Richtig aufgetragen hält Epoxid-Bodenbeschichtung 5 bis 10 Jahre in einer Privatgarage. Professionelles 100%-Feststoff-Epoxid mit Polyasphartic-Versiegelung kann 15 bis 20 Jahre halten." },
    { question: "Muss ich Beton vor Epoxid grundieren?", answer: "Die meisten Consumer-Epoxid-Sets benötigen keinen separaten Primer — die erste Epoxid-Schicht fungiert als Grundierung. Bei stark porösem oder altem Beton verbessert ein Epoxid-Tiefengrund die Haftung." },
    { question: "Kann ich Epoxid über alte Farbe auftragen?", answer: "Epoxid haftet nicht auf den meisten Farben oder alten Beschichtungen. Sie müssen die vorhandene Beschichtung durch Schleifen oder chemisches Abbeizen entfernen, um den nackten Beton freizulegen." },
  ],
};

export const pondCalculator: CalculatorSEOContent = {
  disclaimer: "Volumenberechnungen sind Näherungswerte — Nierenformen variieren stark. Die Foliengröße enthält 60 cm Überlappung pro Seite. Die Pumpendimensionierung basiert auf vollständigem Umwälzen alle 2 Stunden.",
  howToUse: [
    "Geben Sie die maximale Länge Ihres Teichs in Metern ein.",
    "Geben Sie die maximale Breite in Metern ein.",
    "Geben Sie die tiefste Stelle in Metern ein — 0,6 bis 1 m für Wassergärten, 1 bis 1,5 m für Koiteiche.",
    "Wählen Sie die nächstliegende Form: rechteckig, oval oder nierenförmig.",
    "Klicken Sie auf Berechnen für Volumen, Foliengröße, Pumpenleistung und Unterlage-Bedarf.",
  ],
  materialInfo:
    "Ein Gartenteich ist eine ausgegrabene Wasserstelle, die mit flexibler oder starrer Folie ausgelegt wird, um Wasser für Zierfische (Koi, Goldfische), Wasserpflanzen oder als dekoratives Element zu halten.\n\nEPDM-Kautschukfolien (1,0 mm) sind der Industriestandard — flexibel, UV-beständig, fischsicher und mit einer Lebensdauer von 20 bis 30 Jahren. Kosten liegen bei 5 bis 12 EUR pro m². PVC-Folien sind günstiger mit 3 bis 7 EUR pro m², haben aber eine kürzere Lebensdauer von 10 bis 15 Jahren.\n\nDie Foliengröße wird berechnet, indem die doppelte Tiefe plus 60 cm Überlappung zu Länge und Breite addiert wird. Pumpen müssen das gesamte Volumen alle 2 Stunden umwälzen — ein 4.000-Liter-Teich braucht mindestens eine 2.000 l/h Pumpe. Für Koiteiche wird stündliches Umwälzen empfohlen.\n\nEin Schutzvlies (300 g/m²) unter der Folie schützt vor Wurzeln und Steinen. Sand (5 cm Schicht) kann als Alternative dienen. Randsteine aus Naturstein verdecken den Folienrand. Die Gesamtkosten eines 2.000-Liter-Teichs liegen bei 500 bis 1.500 EUR für DIY-Material.\n\nIn Deutschland sind Gartenteiche bis 100 m³ in der Regel genehmigungsfrei. Beachten Sie aber die Verkehrssicherungspflicht — eine Umzäunung oder Absicherung kann erforderlich sein, besonders bei Grundstücken mit Kindern.",
  nextSteps: [
    { label: "Kies-Rechner", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Pfostenloch-Rechner", href: "/calculators/outdoor/post-hole-calculator/" },
  ],
  installationTips: [
    "Platzieren Sie den Teich an einem Standort mit 4 bis 6 Stunden Halbschatten — volle Sonne fördert übermäßiges Algenwachstum.",
    "Klären Sie die Lage unterirdischer Leitungen vor dem Graben (Versorgungsunternehmen kontaktieren).",
    "Graben Sie Regale von 30 cm Tiefe am Rand für Uferpflanzen, bevor Sie die volle Tiefe ausheben.",
    "Verlegen Sie 5 cm Sand oder Schutzvlies über die gesamte Ausgrabung vor der Folie.",
    "Füllen Sie den Teich langsam mit Gartenschlauch und glätten Sie die Folie beim Füllen.",
    "Betreiben Sie Pumpe und Filter mindestens 2 Wochen vor dem Einsetzen von Fischen.",
  ],
  commonMistakes: [
    "Folie zu klein — berechnen Sie immer Länge + (2 × Tiefe) + 0,6 m für jede Dimension.",
    "Schutzvlies weglassen — Wurzeln und Steine durchstoßen die Folie von unten.",
    "Pumpe zu klein — schlechte Umwälzung führt zu stehendem Wasser und Algenblüte.",
    "Nicht genug Tiefe — Teiche unter 60 cm überhitzen im Sommer und frieren im Winter komplett durch.",
    "Zu nah an Bäumen bauen — Falllaub erzeugt organische Ablagerungen, die dem Wasser Sauerstoff entziehen.",
  ],
  faqs: [
    { question: "Wie viele Liter hat mein Teich?", answer: "Für rechteckige Teiche: Länge × Breite × Tiefe (in Metern) × 1.000 = Liter. Für ovale Teiche mit 0,8 multiplizieren. Für Nierenform mit 0,7 multiplizieren. Beispiel: ein 3×2,5×1 m rechteckiger Teich fasst ca. 7.500 Liter." },
    { question: "Welche Foliengröße brauche ich?", answer: "Foliengröße = (Länge + 2 × Tiefe + 0,6 m) mal (Breite + 2 × Tiefe + 0,6 m). Für einen 3×2,5×1 m Teich sollte die Folie mindestens 5,6 m × 5,1 m sein." },
    { question: "Welche Pumpe brauche ich für meinen Teich?", answer: "Multiplizieren Sie Ihr Teichvolumen in Litern mit 0,5 für die Mindest-l/h-Leistung. Ein 8.000-Liter-Teich braucht mindestens eine 4.000 l/h Pumpe für 2-stündliches Umwälzen." },
    { question: "Was kostet ein Gartenteich?", answer: "Ein einfacher 2.000-Liter-Wassergarten kostet 500 bis 1.500 EUR DIY. Ein 4.000-8.000-Liter-Teich mit Pumpe, Filter und Randsteinen kostet 1.500 bis 4.000 EUR DIY oder 5.000 bis 15.000 EUR professionell angelegt." },
    { question: "Wie tief muss ein Teich für Fische sein?", answer: "Wassergärten mit Goldfischen brauchen mindestens 80 cm Tiefe. Koiteiche sollten mindestens 1,2 m tief sein, vorzugsweise 1,5 m, um im Winter eine frostfreie Zone am Boden zu bieten." },
    { question: "Brauche ich einen Filter für meinen Teich?", answer: "Ja, wenn Sie Fische halten möchten. Ein Biofilter beherbergt nützliche Bakterien, die giftiges Ammoniak in harmloses Nitrat umwandeln. Auch reine Pflanzgärten profitieren von Pumpe und Filter." },
  ],
};

// ─── REGISTRY MAP ─────────────────────────────────────────────────────────────

export const registryDE: Record<string, Record<string, CalculatorSEOContent>> = {
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
    "block-fill-calculator": blockFillCalculator,
    "mortar-mix-calculator": mortarMixCalculator,
    "retaining-wall-calculator": retainingWallCalculator,
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
    "plywood-calculator": plywoodCalculatorDE,
  },
  finishing: {
    "paint-coverage-calculator": paintCoverageCalculatorDE,
    "paint-cost-calculator": paintCostCalculatorDE,
    "primer-calculator": primerCalculatorDE,
    "epoxy-calculator": epoxyCalculator,
  },
  outdoor: {
    "deck-board-calculator": deckBoardCalculatorDE,
    "deck-footing-calculator": deckFootingCalculatorDE,
    "deck-railing-calculator": deckRailingCalculatorDE,
    "deck-stair-calculator": deckStairCalculatorDE,
    "post-hole-calculator": postHoleCalculatorDE,
    "pond-calculator": pondCalculator,
  },
};
