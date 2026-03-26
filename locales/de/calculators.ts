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
        title: "Ankerschrauben-Rechner",
        description:
          "Wie viele Ankerschrauben benötige ich? Kostenloser Rechner für J-Bolzen und Keilanker bei 1,80 m Standardabstand — inklusive Gesamtanzahl und Verlegetipps.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Schwellendichtung-Rechner",
        description:
          "Schwellendichtung-Rechner: Schätzung der Dichtungsrollen nach Fundamentumfang. Kostenloses Tool für 9 cm und 14 cm Breiten — verhindert Luftinfiltration.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Schwellenholz-Rechner",
        description:
          "Wie viel druckimprägniertes Holz für Schwellenhölzer? Sofortrechner für KVH 6×12 und 6×16 — ergibt Laufmeter und Stückzahl.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Beton-Rechner",
        description:
          "Wie viel Beton benötige ich? Kostenloser Rechner für Platten, Fundamente und Stützen — ergibt Kubikmeter und Sackanzahl mit Verschnittfaktor.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Betonplatten-Rechner",
        description:
          "Wie viel Beton für eine Bodenplatte? Kostenloser Rechner für Garagen-, Terrassen- und Auffahrtsplatten — Kubikmeter und Sackanzahl für jede Stärke.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Streifenfundament-Rechner",
        description:
          "Streifenfundament-Rechner: Kubikmeter für Streifen- und Einzelfundamente schätzen. Kostenloses Tool für Fundamentwände — inklusive Verschnittfaktor.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Betonstützen-Rechner",
        description:
          "Wie viel Beton für Schalungsrohre? Kostenloser Stützenrechner für 20 cm, 25 cm und 30 cm Durchmesser — Kubikmeter pro Stütze und gesamt.",
        category: "Fundament",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Betontreppen-Rechner",
        description:
          "Betontreppen-Rechner: Wie viele Kubikmeter für Stufen? Kostenloses Tool — Breite, Steigung, Auftritt und Stufenzahl eingeben für sofortige Schätzung.",
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
      { slug: "rim-joist-calculator", title: "Randbalken-Rechner", description: "Randbalken-Rechner: Wie viele Bretter für Ihren Deckenrand? Kostenloses Tool für 6×20, 6×24 und 6×30 cm — inklusive Stückzahl und Laufmeter.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Deckenbalken-Rechner", description: "Kostenloser Deckenbalken-Rechner — Anzahl, Größe und Abstand nach Spannweite ermitteln. Für 40 cm und 60 cm Achsabstand sofort berechnen.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Aussteifungs-Rechner", description: "Wie viele Reihen Aussteifung benötige ich? Kostenloser Rechner für Kreuzaussteifung und Massivblockierung nach Balkenspannweite — sofortige Ergebnisse.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Unterbodenkleber-Rechner", description: "Unterbodenkleber-Rechner: Wie viele Kartuschen Baukleber? Kostenloser Schätzer basierend auf Bodenfläche — deckt gängige Kartuschengrößen ab.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "OSB-Platten-Rechner", description: "Wie viele OSB-Platten benötige ich? Kostenloser Rechner für Unterbodenplatten — berücksichtigt Verschnitt und ergibt exakte Plattenzahl sofort.", category: "Deckenkonstruktion", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Wandkonstruktion-Rechner",
    description:
      "Berechnen Sie alle Holzbauteile für die Wandkonstruktion einschließlich Schwellen, Ständer, Stürze und Beplankung für jede Wandkonfiguration.",
    calculators: [
      { slug: "stud-calculator", title: "Ständerrechner", description: "Wie viele Ständer benötige ich? Kostenloser Wandständer-Rechner für 40 cm und 60 cm Achsabstand — inklusive Zusatz für Ecken, Türen und Fensteröffnungen.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Fußschwellen-Rechner", description: "Fußschwellen-Rechner: Schätzung von KVH 6×12 oder 6×16 Schwellen nach Wandlänge. Kostenloses Tool mit Stückzahl und Gesamtlaufmetern.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Rähm-Rechner", description: "Wie viel Holz für das doppelte Rähm? Kostenloser Rechner für KVH 6×12 und 6×16 Wände — exakte Stückzahl mit Überlappungsversatz.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Sturzbalken-Rechner", description: "Sturzbalken-Rechner: Welche Sturzgröße für meine Öffnung? Kostenloses Tool für Tür- und Fensterspannweiten — deckt verschiedene Sturzabmessungen ab.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Wandbeplankung-Rechner", description: "Wie viele Platten für Außenwandbeplankung? Kostenloser Rechner für OSB- und Sperrholzplatten — inklusive Verschnittfaktor.", category: "Wandkonstruktion", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Dachkonstruktion-Rechner",
    description:
      "Schätzen Sie alle Dachmaterialien von Bindern und Sparren bis zu Schindeln und Unterspannbahn.",
    calculators: [
      { slug: "truss-calculator", title: "Dachbinder-Rechner", description: "Kostenloser Dachbinder-Rechner — Anzahl und Verlegung für 60 cm Achsabstand berechnen. Dachlänge eingeben, sofort Binderanzahl erhalten.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Sparren-Rechner", description: "Kostenloser Sparrenrechner — Länge, Anzahl & Abstand für jede Dachneigung berechnen. 40 und 60 cm Achsabstand, Sattel- und Walmdach.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Firstbrett-Rechner", description: "Firstbrett-Rechner: Wie viele Bretter für meinen Dachfirst? Kostenloses Tool für verschiedene Firstbrett-Abmessungen — ergibt Länge und Stückzahl.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Dachschalung-Rechner", description: "Wie viele OSB-Platten für mein Dach? Kostenloser Dachschalungs-Rechner für Standardplatten — berücksichtigt Dachneigung und Verschnittprozentsatz.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Dachschindel-Rechner", description: "Kostenloser Dachschindel-Rechner — wie viele Pakete brauche ich? Für Bitumen- und Architekturschindeln. Rechnet m² in Pakete um.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Unterspannbahn-Rechner", description: "Wie viele Rollen Unterspannbahn? Kostenloser Rechner für Dachpappe und Kunststoff-Unterspannbahn — berücksichtigt Überlappung und Verschnitt.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Traufblech-Rechner", description: "Traufblech-Rechner: Laufmeter Tropfkante für Ihr Dach schätzen. Kostenloses Tool — ergibt Stückzahl für Standard-Traufbleche.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "roof-pitch-calculator", title: "Dachneigung-Rechner", description: "Welche Neigung hat mein Dach? Kostenloser Dachneigungsrechner — Höhe und Grundlänge eingeben für sofortigen Winkel, Neigung in % und Flächenmultiplikator.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "roof-area-calculator", title: "Dachflächen-Rechner", description: "Kostenloser Dachflächen-Rechner — Grundriss in tatsächliche Dachfläche umrechnen. Mit Neigungsmultiplikator und m² sofort berechnen.", category: "Dachkonstruktion", categorySlug: "roofing" },
      { slug: "roof-slope-calculator", title: "Dachgefälle-Rechner", description: "Kostenloser Dachgefälle-Rechner — Höhe und Grundlänge eingeben für Neigungsverhältnis, Winkel und empfohlenes Eindeckungsmaterial.", category: "Dachkonstruktion", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Außenhülle-Rechner",
    description:
      "Berechnen Sie Fassadenbahn, Fassadenverkleidung, Anschlussbleche und Nahtband für die Gebäudehülle.",
    calculators: [
      { slug: "housewrap-calculator", title: "Fassadenbahn-Rechner", description: "Wie viele Rollen Fassadenbahn benötige ich? Kostenloser Rechner nach Wandfläche — deckt verschiedene Rollenbreiten mit Überlappung ab.", category: "Außenhülle", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Fassadenverkleidung-Rechner", description: "Kostenloser Fassadenverkleidung-Rechner — Wandfläche eingeben, Paneelanzahl sofort erhalten. Zieht Türen, Fenster ab und addiert 10 % Verschnitt.", category: "Außenhülle", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Faserzement-Fassaden-Rechner", description: "Wie viele Faserzementplatten benötige ich? Kostenloser Rechner für Eternit- und Cedral-Fassade — verschiedene Breiten mit Verschnitt.", category: "Außenhülle", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Fensteranschlussband-Rechner", description: "Fensteranschlussband-Rechner: Laufmeter für alle Öffnungen schätzen. Kostenloses Tool für 10 cm, 15 cm und 22 cm breites Selbstklebeflashing.", category: "Außenhülle", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Dämmung & Trockenbau-Rechner",
    description:
      "Schätzen Sie Dämmmatten, Dampfbremsen, Gipskartonplatten, Schrauben und Spachtelmasse für den Innenausbau.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Hohlraumdämmung-Rechner", description: "Wie viele Dämmmatten benötige ich? Kostenloser Rechner für WLG 035 bis WLG 040 — deckt Wandstärken von 12 cm bis 24 cm sofort ab.", category: "Dämmung & Trockenbau", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Gipskarton-Rechner", description: "Wie viel Gipskarton benötige ich? Kostenloser Rechner für 12,5 mm und 15 mm Platten — Schätzung für Wände und Decken nach Standardformaten.", category: "Dämmung & Trockenbau", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Trockenbau-Schrauben-Rechner", description: "Trockenbau-Schrauben-Rechner: Wie viele Schrauben pro Platte? Kostenloser Schätzer für 35 mm und 45 mm Schrauben — Gesamtanzahl und Paketbedarf.", category: "Dämmung & Trockenbau", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Spachtelmasse-Rechner", description: "Wie viel Spachtelmasse benötige ich? Kostenloser Rechner für Fugen- und Flächenspachtel — schätzt Eimer für Verspachtelung und Glätten.", category: "Dämmung & Trockenbau", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Beschläge-Rechner",
    description:
      "Berechnen Sie Rahmennägel, Beplankungsnägel, Balkenschuhe, Sturmklammern und andere Verbindungsmittel.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Rahmennägel-Rechner", description: "Rahmennägel-Rechner: Wie viele Kilogramm Nägel für mein Projekt? Kostenloses Tool basierend auf Ständeranzahl.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Balkenschuh-Rechner", description: "Wie viele Balkenschuhe benötige ich? Kostenloser Rechner für Simpson- und Knapp-Verbinder — für Decken- und Dachbalkenkonstruktionen.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Sturmklammer-Rechner", description: "Sturmklammer-Rechner: Sparren-Wand-Verbinder für Windwiderstand schätzen. Kostenloses Tool für Simpson Strong-Tie Windverbinder.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "lumber-cost-calculator", title: "Holzkosten-Rechner", description: "Was kostet Bauholz? Kostenloser Rechner für KVH, BSH und Schnittholz — Gesamtkosten nach Menge und aktuellen Preisen in EUR.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "board-feet-calculator", title: "Schnittholz-Rechner", description: "Kostenloser Schnittholz-Rechner — Holzmaße in Board Feet und Kosten umrechnen. Für Hartholz-Preise mit sofortiger Kalkulation.", category: "Beschläge", categorySlug: "hardware" },
      { slug: "plywood-calculator", title: "Sperrholz-Rechner", description: "Kostenloser Sperrholz-Rechner — wie viele Platten brauche ich? Für 4 mm bis 21 mm Stärken. Gibt Plattenzahl und Kostenschätzung sofort.", category: "Beschläge", categorySlug: "hardware" },
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
        title: "Farbergiebigkeit-Rechner",
        description:
          "Kostenloser Farbergiebigkeit-Rechner — wie viele Liter brauche ich? Für Wände und Decken. Berücksichtigt Anstriche, gibt Liter und Gebinde.",
        category: "Anstrich",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Farbkosten-Rechner",
        description:
          "Kostenloser Farbkosten-Rechner — Gesamtkosten nach Qualitätsstufe schätzen. Von Basis bis Premium inklusive Zubehör und Material in EUR.",
        category: "Anstrich",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Grundierung-Rechner",
        description:
          "Wie viel Grundierung benötige ich? Kostenloser Rechner für neuen Gipskarton, Holz und Renovierungsanstriche — passt Ergiebigkeit nach Untergrund an.",
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
        title: "Terrassendielen-Rechner",
        description:
          "Wie viele Terrassendielen benötige ich? Kostenloser Rechner für Douglasie, Lärche und WPC-Dielen — ergibt Stückzahl, Laufmeter und Verschnittfaktor.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Terrassen-Punktfundament-Rechner",
        description:
          "Terrassen-Punktfundament-Rechner: Wie viele Betonfüße für meine Terrasse? Kostenloses Tool — ergibt Fundamentanzahl, Pfostenraster und Trägerabstände.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Terrassengeländer-Rechner",
        description:
          "Wie viele Geländerpfosten und Geländerstäbe benötige ich? Kostenloser Terrassengeländer-Rechner — ergibt Pfostenzahl, Stäbe und Handlauf-Laufmeter.",
        category: "Außenbereich",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Terrassentreppe-Rechner",
        description:
          "Terrassentreppe-Rechner: Wie viele Stufen und Wangen? Kostenloses Tool — Terrassenhöhe eingeben für Stufenzahl, Wangenanzahl und Trittbretter.",
        category: "Außenbereich",
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
