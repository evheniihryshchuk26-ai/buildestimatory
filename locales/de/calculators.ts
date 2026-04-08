import type { CategoryMeta } from "@/content/calculators";

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Fundament-Rechner",
    description:
      "Berechnen Sie Materialien für Betonfundamentarbeiten einschließlich Ankerschrauben, Schwellendichtung und druckimprägnierte Schwellenhölzer.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Kostenloser Ankerschrauben-Rechner — Anzahl & Kosten (2026)",
        description:
          "Wie viele Ankerschrauben benötige ich? Kostenloser Rechner für J-Bolzen und Keilanker bei 1,80 m Standardabstand — inklusive Gesamtanzahl und Verlegetipps.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Kostenloser Schwellendichtung-Rechner — Rollen & m (2026)",
        description:
          "Schwellendichtung-Rechner: Schätzung der Dichtungsrollen nach Fundamentumfang. Kostenloses Tool für 9 cm und 14 cm Breiten — verhindert Luftinfiltration.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Kostenloser Schwellenholz-Rechner — Stück & Meter (2026)",
        description:
          "Wie viel druckimprägniertes Holz für Schwellenhölzer? Sofortrechner für KVH 6×12 und 6×16 — ergibt Laufmeter und Stückzahl.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Kostenloser Betonrechner — m³, Säcke & Kosten (2026)",
        description:
          "Wie viel Beton benötige ich? Kostenloser Rechner für Platten, Fundamente und Stützen — ergibt Kubikmeter und Sackanzahl mit Verschnittfaktor.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Kostenloser Betonplatten-Rechner — m³ & Säcke (2026)",
        description:
          "Wie viel Beton für eine Bodenplatte? Kostenloser Rechner für Garagen-, Terrassen- und Auffahrtsplatten — Kubikmeter und Sackanzahl für jede Stärke.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Kostenloser Streifenfundament-Rechner — m³ & Verschnitt (2026)",
        description:
          "Streifenfundament-Rechner: Kubikmeter für Streifen- und Einzelfundamente schätzen. Kostenloses Tool für Fundamentwände — inklusive Verschnittfaktor.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Kostenloser Betonstützen-Rechner — m³ & Säcke (2026)",
        description:
          "Wie viel Beton für Schalungsrohre? Kostenloser Stützenrechner für 20 cm, 25 cm und 30 cm Durchmesser — Kubikmeter pro Stütze und gesamt.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Kostenloser Betontreppen-Rechner — m³ & Stufen (2026)",
        description:
          "Betontreppen-Rechner: Wie viele Kubikmeter für Stufen? Kostenloses Tool — Breite, Steigung, Auftritt und Stufenzahl eingeben für sofortige Schätzung.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "gravel-calculator",
        title: "Kostenloser Kies-Rechner — m³, Tonnen & Kosten (2026)",
        description:
          "Wie viel Kies brauche ich? Kostenloser Rechner für jede Fläche — Kubikmeter, Tonnen und Kostenabschätzung mit 10 % Verschnitt.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "driveway-gravel-calculator",
        title: "Kostenloser Einfahrt-Kies-Rechner — Tonnen & Kosten (2026)",
        description:
          "Kies-Rechner für Einfahrten: Tonnen und Kosten nach Kiesart — Schotter, Zierkies, Schottertragschicht oder Granitgrus mit Lieferkalkulation.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "block-fill-calculator",
        title: "Kostenloser Hohlblock-Füllrechner — m³ & Säcke (2026)",
        description:
          "Hohlblock-Füllrechner — wie viel Beton zum Füllen von Hohlblocksteinen? Kostenloses Tool für 20 cm, 25 cm & 30 cm Blöcke. Kubikmeter und Sackzahl sofort.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "mortar-mix-calculator",
        title: "Kostenloser Mörtel-Rechner — Säcke & Fugentyp (2026)",
        description:
          "Mörtel-Rechner — kostenloses Tool zur Berechnung von Mörtelsäcken für Mauerwerk, Klinker & Naturstein. Mörtelgruppen I, II & III mit Fugenstärke-Optionen.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "retaining-wall-calculator",
        title: "Kostenloser Stützmauer-Rechner — Steine & Drainage (2026)",
        description:
          "Stützmauer-Rechner — kostenloses Tool für Pflanzstein-, Schalungsstein- & Natursteinmauern. Steinbedarf, Abdecksteine, Kiesschüttung & Drainage sofort berechnen.",
        category: "Fundament",
        categorySlug: "foundation",
      },
    ],
  },
  {
    slug: "floor-framing",
    title: "Deckenkonstruktion-Rechner",
    description:
      "Schätzen Sie alle Materialien für die Deckenkonstruktion einschließlich Randbalken, Deckenbalken, Aussteifungen, Unterbodenkleber und OSB-Platten.",
    calculators: [
      { slug: "rim-joist-calculator", title: "Kostenloser Randbalken-Rechner — Stück & Meter (2026)", description: "Randbalken-Rechner: Wie viele Bretter für Ihren Deckenrand? Kostenloses Tool für 6×20, 6×24 und 6×30 cm — inklusive Stückzahl und Laufmeter.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Kostenloser Deckenbalken-Rechner — Anzahl & Abstand (2026)", description: "Kostenloser Deckenbalken-Rechner — Anzahl, Größe und Abstand nach Spannweite ermitteln. Für 40 cm und 60 cm Achsabstand sofort berechnen.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Kostenloser Aussteifungs-Rechner — Reihen & Blöcke (2026)", description: "Wie viele Reihen Aussteifung benötige ich? Kostenloser Rechner für Kreuzaussteifung und Massivblockierung nach Balkenspannweite — sofortige Ergebnisse.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Kostenloser Unterbodenkleber-Rechner — Kartuschen & m² (2026)", description: "Unterbodenkleber-Rechner: Wie viele Kartuschen Baukleber? Kostenloser Schätzer basierend auf Bodenfläche — deckt gängige Kartuschengrößen ab.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "Kostenloser OSB-Platten-Rechner — Platten & Verschnitt (2026)", description: "Wie viele OSB-Platten benötige ich? Kostenloser Rechner für Unterbodenplatten — berücksichtigt Verschnitt und ergibt exakte Plattenzahl sofort.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Wandkonstruktion-Rechner",
    description:
      "Berechnen Sie alle Holzbauteile für die Wandkonstruktion einschließlich Schwellen, Ständer, Stürze und Beplankung für jede Wandkonfiguration.",
    calculators: [
      { slug: "stud-calculator", title: "Kostenloser Ständerrechner — Anzahl & Kosten (2026)", description: "Wie viele Ständer benötige ich? Kostenloser Wandständer-Rechner für 40 cm und 60 cm Achsabstand — inklusive Zusatz für Ecken, Türen und Fensteröffnungen.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Kostenloser Fußschwellen-Rechner — Stück & Meter (2026)", description: "Fußschwellen-Rechner: Schätzung von KVH 6×12 oder 6×16 Schwellen nach Wandlänge. Kostenloses Tool mit Stückzahl und Gesamtlaufmetern.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Kostenloser Rähm-Rechner — Stück & Versatz (2026)", description: "Wie viel Holz für das doppelte Rähm? Kostenloser Rechner für KVH 6×12 und 6×16 Wände — exakte Stückzahl mit Überlappungsversatz.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Kostenloser Sturzbalken-Rechner — Maß & Stück (2026)", description: "Sturzbalken-Rechner: Welche Sturzgröße für meine Öffnung? Kostenloses Tool für Tür- und Fensterspannweiten — deckt verschiedene Sturzabmessungen ab.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Kostenloser Wandbeplankung-Rechner — Platten & m² (2026)", description: "Wie viele Platten für Außenwandbeplankung? Kostenloser Rechner für OSB- und Sperrholzplatten — inklusive Verschnittfaktor.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Dachkonstruktion-Rechner",
    description:
      "Schätzen Sie alle Dachmaterialien von Bindern und Sparren bis zu Schindeln und Unterspannbahn.",
    calculators: [
      { slug: "truss-calculator", title: "Kostenloser Dachbinder-Rechner — Anzahl & Abstand (2026)", description: "Kostenloser Dachbinder-Rechner — Anzahl und Verlegung für 60 cm Achsabstand berechnen. Dachlänge eingeben, sofort Binderanzahl erhalten.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Kostenloser Sparren-Rechner — Länge & Anzahl (2026)", description: "Kostenloser Sparrenrechner — Länge, Anzahl & Abstand für jede Dachneigung berechnen. 40 und 60 cm Achsabstand, Sattel- und Walmdach.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Kostenloser Firstbrett-Rechner — Länge & Stück (2026)", description: "Firstbrett-Rechner: Wie viele Bretter für meinen Dachfirst? Kostenloses Tool für verschiedene Firstbrett-Abmessungen — ergibt Länge und Stückzahl.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Kostenloser Dachschalung-Rechner — Platten & m² (2026)", description: "Wie viele OSB-Platten für mein Dach? Kostenloser Dachschalungs-Rechner für Standardplatten — berücksichtigt Dachneigung und Verschnittprozentsatz.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Kostenloser Dachschindel-Rechner — Pakete & m² (2026)", description: "Kostenloser Dachschindel-Rechner — wie viele Pakete brauche ich? Für Bitumen- und Architekturschindeln. Rechnet m² in Pakete um.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Kostenloser Unterspannbahn-Rechner — Rollen & m² (2026)", description: "Wie viele Rollen Unterspannbahn? Kostenloser Rechner für Dachpappe und Kunststoff-Unterspannbahn — berücksichtigt Überlappung und Verschnitt.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Kostenloser Traufblech-Rechner — Meter & Stück (2026)", description: "Traufblech-Rechner: Laufmeter Tropfkante für Ihr Dach schätzen. Kostenloses Tool — ergibt Stückzahl für Standard-Traufbleche.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "roof-pitch-calculator", title: "Kostenloser Dachneigung-Rechner — Winkel & Faktor (2026)", description: "Welche Neigung hat mein Dach? Kostenloser Dachneigungsrechner — Höhe und Grundlänge eingeben für sofortigen Winkel, Neigung in % und Flächenmultiplikator.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "roof-area-calculator", title: "Kostenloser Dachflächen-Rechner — m² & Neigung (2026)", description: "Kostenloser Dachflächen-Rechner — Grundriss in tatsächliche Dachfläche umrechnen. Mit Neigungsmultiplikator und m² sofort berechnen.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "roof-slope-calculator", title: "Kostenloser Dachgefälle-Rechner — Winkel & Material (2026)", description: "Kostenloser Dachgefälle-Rechner — Höhe und Grundlänge eingeben für Neigungsverhältnis, Winkel und empfohlenes Eindeckungsmaterial.", category: "Dachkonstruktion", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Außenhülle-Rechner",
    description:
      "Berechnen Sie Fassadenbahn, Fassadenverkleidung, Anschlussbleche und Nahtband für die Gebäudehülle.",
    calculators: [
      { slug: "housewrap-calculator", title: "Kostenloser Fassadenbahn-Rechner — Rollen & m² (2026)", description: "Wie viele Rollen Fassadenbahn benötige ich? Kostenloser Rechner nach Wandfläche — deckt verschiedene Rollenbreiten mit Überlappung ab.", category: "Außenhülle", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Kostenloser Fassadenverkleidung-Rechner — Paneele & m² (2026)", description: "Kostenloser Fassadenverkleidung-Rechner — Wandfläche eingeben, Paneelanzahl sofort erhalten. Zieht Türen, Fenster ab und addiert 10 % Verschnitt.", category: "Außenhülle", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Kostenloser Faserzement-Rechner — Platten & Verschnitt (2026)", description: "Wie viele Faserzementplatten benötige ich? Kostenloser Rechner für Eternit- und Cedral-Fassade — verschiedene Breiten mit Verschnitt.", category: "Außenhülle", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Kostenloser Fensteranschlussband-Rechner — Meter & Rollen (2026)", description: "Fensteranschlussband-Rechner: Laufmeter für alle Öffnungen schätzen. Kostenloses Tool für 10 cm, 15 cm und 22 cm breites Selbstklebeflashing.", category: "Außenhülle", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Dämmung & Trockenbau-Rechner",
    description:
      "Schätzen Sie Dämmmatten, Dampfbremsen, Gipskartonplatten, Schrauben und Spachtelmasse für den Innenausbau.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Kostenloser Hohlraumdämmung-Rechner — Matten & m² (2026)", description: "Wie viele Dämmmatten benötige ich? Kostenloser Rechner für WLG 035 bis WLG 040 — deckt Wandstärken von 12 cm bis 24 cm sofort ab.", category: "Dämmung & Trockenbau", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Kostenloser Gipskarton-Rechner — Platten & m² (2026)", description: "Wie viel Gipskarton benötige ich? Kostenloser Rechner für 12,5 mm und 15 mm Platten — Schätzung für Wände und Decken nach Standardformaten.", category: "Dämmung & Trockenbau", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Kostenloser Trockenbau-Schrauben-Rechner — Stück & Pakete (2026)", description: "Trockenbau-Schrauben-Rechner: Wie viele Schrauben pro Platte? Kostenloser Schätzer für 35 mm und 45 mm Schrauben — Gesamtanzahl und Paketbedarf.", category: "Dämmung & Trockenbau", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Kostenloser Spachtelmasse-Rechner — Eimer & Kosten (2026)", description: "Wie viel Spachtelmasse benötige ich? Kostenloser Rechner für Fugen- und Flächenspachtel — schätzt Eimer für Verspachtelung und Glätten.", category: "Dämmung & Trockenbau", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Beschläge-Rechner",
    description:
      "Berechnen Sie Rahmennägel, Beplankungsnägel, Balkenschuhe, Sturmklammern und andere Verbindungsmittel.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Kostenloser Rahmennägel-Rechner — kg & Kosten (2026)", description: "Rahmennägel-Rechner: Wie viele Kilogramm Nägel für mein Projekt? Kostenloses Tool basierend auf Ständeranzahl.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Kostenloser Balkenschuh-Rechner — Stück & Typ (2026)", description: "Wie viele Balkenschuhe benötige ich? Kostenloser Rechner für Simpson- und Knapp-Verbinder — für Decken- und Dachbalkenkonstruktionen.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Kostenloser Sturmklammer-Rechner — Stück & Kosten (2026)", description: "Sturmklammer-Rechner: Sparren-Wand-Verbinder für Windwiderstand schätzen. Kostenloses Tool für Simpson Strong-Tie Windverbinder.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "lumber-cost-calculator", title: "Kostenloser Holzkosten-Rechner — Stück & Gesamt (2026)", description: "Was kostet Bauholz? Kostenloser Rechner für KVH, BSH und Schnittholz — Gesamtkosten nach Menge und aktuellen Preisen in EUR.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "board-feet-calculator", title: "Kostenloser Schnittholz-Rechner — BF & Kosten (2026)", description: "Kostenloser Schnittholz-Rechner — Holzmaße in Board Feet und Kosten umrechnen. Für Hartholz-Preise mit sofortiger Kalkulation.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "plywood-calculator", title: "Kostenloser Sperrholz-Rechner — Platten & Kosten (2026)", description: "Kostenloser Sperrholz-Rechner — wie viele Platten brauche ich? Für 4 mm bis 21 mm Stärken. Gibt Plattenzahl und Kostenschätzung sofort.", category: "Beschläge", categorySlug: "hardware" },
    ],
  },
  {
    slug: "finishing",
    title: "Anstrich-Rechner",
    description:
      "Berechnen Sie Farbe, Grundierung, Lasur und Anstrichmaterialien für Innen- und Außenflächen.",
    calculators: [
      {
        slug: "paint-coverage-calculator",
        title: "Kostenloser Farbergiebigkeit-Rechner — Liter & m² (2026)",
        description:
          "Kostenloser Farbergiebigkeit-Rechner — wie viele Liter brauche ich? Für Wände und Decken. Berücksichtigt Anstriche, gibt Liter und Gebinde.",
        category: "Anstrich",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Kostenloser Farbkosten-Rechner — Liter & Budget (2026)",
        description:
          "Kostenloser Farbkosten-Rechner — Gesamtkosten nach Qualitätsstufe schätzen. Von Basis bis Premium inklusive Zubehör und Material in EUR.",
        category: "Anstrich",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Kostenloser Grundierung-Rechner — Liter & m² (2026)",
        description:
          "Wie viel Grundierung benötige ich? Kostenloser Rechner für neuen Gipskarton, Holz und Renovierungsanstriche — passt Ergiebigkeit nach Untergrund an.",
        category: "Anstrich",
        categorySlug: "finishing",
      },
      {
        slug: "epoxy-calculator",
        title: "Kostenloser Epoxidharz-Rechner — Liter & Kosten (2026)",
        description:
          "Epoxidharz-Rechner — wie viel Epoxid für Ihre Garagenbodenbeschichtung? Kostenloses Tool für jede Fläche. Liter, Sets & Kosten für 1- und 2-Schicht-Systeme.",
        category: "Anstrich",
        categorySlug: "finishing",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Außenbereich-Rechner",
    description:
      "Berechnen Sie Materialien für Terrassen, Balkone, Zäune und Außenanlagen.",
    calculators: [
      {
        slug: "deck-board-calculator",
        title: "Kostenloser Terrassendielen-Rechner — Stück & Meter (2026)",
        description:
          "Wie viele Terrassendielen benötige ich? Kostenloser Rechner für Douglasie, Lärche und WPC-Dielen — ergibt Stückzahl, Laufmeter und Verschnittfaktor.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Kostenloser Terrassen-Fundament-Rechner — Stück & m³ (2026)",
        description:
          "Terrassen-Punktfundament-Rechner: Wie viele Betonfüße für meine Terrasse? Kostenloses Tool — ergibt Fundamentanzahl, Pfostenraster und Trägerabstände.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Kostenloser Terrassengeländer-Rechner — Pfosten & Stäbe (2026)",
        description:
          "Wie viele Geländerpfosten und Geländerstäbe benötige ich? Kostenloser Terrassengeländer-Rechner — ergibt Pfostenzahl, Stäbe und Handlauf-Laufmeter.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Kostenloser Terrassentreppe-Rechner — Stufen & Wangen (2026)",
        description:
          "Terrassentreppe-Rechner: Wie viele Stufen und Wangen? Kostenloses Tool — Terrassenhöhe eingeben für Stufenzahl, Wangenanzahl und Trittbretter.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "post-hole-calculator",
        title: "Kostenloser Pfostenloch-Rechner — Säcke & m³ (2026)",
        description:
          "Pfostenloch-Rechner — wie viel Beton für Zaunpfosten? Kostenloses Tool für jede Lochgröße. Exakte Sackzahl für 25 kg und 40 kg Fertigbeton.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "pond-calculator",
        title: "Kostenloser Teich-Rechner — Liter & Folie (2026)",
        description:
          "Teich-Rechner — kostenloses Tool für Volumen, Foliengröße & Pumpenleistung. Maße eingeben für rechteckige, ovale oder nierenförmige Teiche.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-calculator",
        title: "Kostenloser Zaun-Rechner — Pfosten & Latten (2026)",
        description:
          "Zaun-Rechner — wie viele Pfosten, Riegel & Latten für Ihren Zaun? Kostenloses Zaunmaterial-Tool für Holzzäune. Komplette Materialliste sofort.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-post-calculator",
        title: "Kostenloser Zaunpfosten-Rechner — Pfosten & Beton (2026)",
        description:
          "Zaunpfosten-Rechner — wie viele Pfosten und Säcke Beton? Kostenloses Tool berechnet Pfosten, Betonsäcke & Kies für jede Zaunlänge.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-panel-calculator",
        title: "Kostenloser Zaunfeld-Rechner — Felder & Pfosten (2026)",
        description:
          "Zaunfeld-Rechner — wie viele Fertigzaunelemente? Kostenloses Tool für 1,80 m und 2,50 m Felder. Feldanzahl, Pfosten & Pfostenkappen.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "picket-fence-calculator",
        title: "Kostenloser Lattenzaun-Rechner — Latten & Pfosten (2026)",
        description:
          "Lattenzaun-Rechner — wie viele Latten mit individuellem Abstand? Kostenloses Tool für jede Lattenbreite & Lücke. Latten, Riegel, Pfosten & Holzbedarf.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Bodenbelag-Rechner",
    description:
      "Materialien für Bodenbelagprojekte berechnen — Parkett, Teppich, Fliesen und Laminat mit Verschnittfaktor und Kostenvoranschlag.",
    calculators: [
      { slug: "flooring-calculator", title: "Kostenloser Bodenbelag-Rechner — Pakete & m² (2026)", description: "Bodenbelag-Rechner — kostenloser Quadratmeter-Rechner für jeden Raum. Pakete, Verschnitt & Materialliste für Parkett, Vinyl und Fertigparkett.", category: "Bodenbelag", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Kostenloser Teppich-Rechner — m² & Laufmeter (2026)", description: "Teppich-Rechner — kostenloses Tool zur Berechnung von Quadratmetern, Laufmetern & Unterlagevlies. Für 4 m und 5 m breite Rollen mit Nahtplanung.", category: "Bodenbelag", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Kostenloser Fliesen-Rechner — Stück & Pakete (2026)", description: "Fliesen-Rechner — kostenloses Tool für Keramik-, Feinsteinzeug- & Natursteinböden. Fliesenzahl, Pakete, Fugenmörtel & Fliesenkleber berechnen.", category: "Bodenbelag", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Kostenloser Laminat-Rechner — Pakete & m² (2026)", description: "Laminat-Rechner — kostenloser Dielen- & Paketrechner mit Trittschalldämmung. Raumgröße und Dielenmaße eingeben für sofortige Materialliste.", category: "Bodenbelag", categorySlug: "flooring" },
    ],
  },
  {
    slug: "stairs",
    title: "Treppen-Rechner",
    description:
      "Treppenmaße, Wangenlängen, Steigung/Auftritt, Wendeltreppen und Podeste berechnen. Kostenlose Treppen-Rechner nach DIN 18065.",
    calculators: [
      {
        slug: "stair-calculator",
        title: "Kostenloser Treppen-Rechner — Stufen, Steigung & Wange (2026)",
        description:
          "Kostenloser Treppen-Rechner — Geschosshöhe eingeben für sofortige Stufenzahl, Steigung, Auftritt & Wangenlänge. Nach DIN 18065.",
        category: "Treppen",
        categorySlug: "stairs",
      },
      {
        slug: "stair-stringer-calculator",
        title: "Kostenloser Treppenwangen-Rechner — Länge & Anzahl (2026)",
        description:
          "Kostenloser Treppenwangen-Rechner — Wangenlänge, Anzahl & Aufteilung für jede Treppenbreite. Für Bretter 50x250 & 50x300 mm.",
        category: "Treppen",
        categorySlug: "stairs",
      },
      {
        slug: "rise-over-run-calculator",
        title: "Kostenloser Steigung/Auftritt-Rechner — Neigung & Winkel (2026)",
        description:
          "Steigung/Auftritt-Rechner — kostenloses Neigungstool. Verhältnis, Prozent, Winkel & Beschreibung sofort. Für Treppen, Rampen & Dächer.",
        category: "Treppen",
        categorySlug: "stairs",
      },
      {
        slug: "spiral-staircase-calculator",
        title: "Kostenloser Wendeltreppe-Rechner — Stufen & Maße (2026)",
        description:
          "Kostenloser Wendeltreppe-Rechner — Durchmesser & Geschosshöhe eingeben für Stufenzahl, Steigung & Drehung. Normkonform nach DIN.",
        category: "Treppen",
        categorySlug: "stairs",
      },
      {
        slug: "stair-landing-calculator",
        title: "Kostenloser Podest-Rechner — Läufe & Maße (2026)",
        description:
          "Kostenloser Treppen-Podest-Rechner — Treppenläufe mit Zwischenpodest aufteilen. Stufen pro Lauf, Podesthöhe & Gesamtlauflänge.",
        category: "Treppen",
        categorySlug: "stairs",
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
