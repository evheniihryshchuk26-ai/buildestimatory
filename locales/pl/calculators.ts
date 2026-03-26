// Polish (PL) — All categories and calculator metadata
// Slugs remain in English for URL compatibility
// Metric units, Polish construction terminology

import type { CategoryMeta } from "@/content/calculators";

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Kalkulatory Fundamentowe",
    description:
      "Oblicz materiały na prace fundamentowe: kotwy, uszczelki podwalinowe, podwaliny impregnowane i beton.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Kalkulator Kotew Fundamentowych",
        description:
          "Ile kotew fundamentowych potrzebuję? Darmowy kalkulator kotew typu J i klinowych z rozstawem 1,80 m \u2014 łączna ilość i wskazówki rozmieszczenia.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Kalkulator Uszczelki Podwalinowej",
        description:
          "Kalkulator uszczelki podwalinowej: oblicz rolki folii PE na obwód fundamentu. Darmowe narzędzie na szer. 90 mm i 140 mm \u2014 zapobiega infiltracji powietrza.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Kalkulator Podwaliny Impregnowanej",
        description:
          "Ile drewna impregnowanego na podwaliny? Kalkulator dla desek 45x90 mm i 45x140 mm \u2014 metry bieżące i liczba sztuk.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Kalkulator Betonu",
        description:
          "Ile betonu potrzebuję? Darmowy kalkulator na płyty, ławy i słupy \u2014 metry sześcienne, liczba worków z zapasem na odpady.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Kalkulator Płyty Betonowej",
        description:
          "Ile betonu na płytę? Darmowy kalkulator na garaż, taras i podjazd \u2014 metry sześcienne i worki na dowolną grubość.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Kalkulator Ławy Fundamentowej",
        description:
          "Kalkulator ławy fundamentowej: oblicz metry sześcienne betonu na ławy ciągłe i stopy. Darmowe narzędzie z zapasem na odpady.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Kalkulator Słupa Betonowego",
        description:
          "Ile betonu na słupy? Darmowy kalkulator na średnice 200, 250 i 300 mm \u2014 metry sześcienne na słup i łącznie.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Kalkulator Schodów Betonowych",
        description:
          "Kalkulator schodów betonowych: ile metrów sześciennych na schody? Darmowe narzędzie \u2014 podaj szerokość, wysokość i liczbę stopni.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "gravel-calculator",
        title: "Kalkulator Żwiru",
        description:
          "Ile żwiru potrzebuję? Darmowy kalkulator dla dowolnej powierzchni \u2014 metry sześcienne, tony i szacunek kosztów z 10% zapasem.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "driveway-gravel-calculator",
        title: "Kalkulator Żwiru na Podjazd",
        description:
          "Kalkulator żwiru na podjazd: oszacuj tony i koszt wg typu \u2014 tłuczeń, żwir, kruszywo łamane lub grys z dostawą.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "block-fill-calculator",
        title: "Kalkulator Wypełnienia Pustaków",
        description:
          "Kalkulator wypełnienia pustaków \u2014 ile betonu do wypełnienia pustaków? Darmowe narzędzie dla bloków 20, 25 i 30 cm. Metry sześcienne i liczba worków natychmiast.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "mortar-mix-calculator",
        title: "Kalkulator Zaprawy Murarskiej",
        description:
          "Kalkulator zaprawy murarskiej \u2014 darmowe narzędzie do obliczania worków zaprawy na bloczki, cegły i kamień. Zaprawy M5, M10 i M15 z opcjami grubości spoiny.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
    ],
  },
  {
    slug: "floor-framing",
    title: "Kalkulatory Konstrukcji Stropu",
    description:
      "Oblicz materiały na konstrukcję stropu: belki obwodowe, belki stropowe, stężenia, klej i płyty OSB.",
    calculators: [
      {
        slug: "rim-joist-calculator",
        title: "Kalkulator Belki Obwodowej",
        description:
          "Kalkulator belki obwodowej: ile desek na obwód stropu? Darmowe narzędzie na 45x200, 45x250 i 45x300 mm \u2014 ilość i metry bieżące.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
      {
        slug: "floor-joist-calculator",
        title: "Kalkulator Belek Stropowych",
        description:
          "Darmowy kalkulator belek stropowych — ilość, rozmiar i rozstaw wg rozpiętości. Na rozstaw 40 cm i 60 cm, wynik natychmiast.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
      {
        slug: "bridging-calculator",
        title: "Kalkulator Stężeń",
        description:
          "Ile rzędów stężeń potrzebuję? Darmowy kalkulator stężeń krzyżowych i blokad wg rozpiętości belek \u2014 natychmiastowe wyniki.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
      {
        slug: "subfloor-adhesive-calculator",
        title: "Kalkulator Kleju do Podłogi",
        description:
          "Kalkulator kleju do podłogi: ile tub kleju montażowego? Darmowy estymator na podstawie powierzchni \u2014 tuby 310 ml i 828 ml.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
      {
        slug: "osb-panel-calculator",
        title: "Kalkulator Płyt OSB",
        description:
          "Ile płyt OSB potrzebuję? Darmowy kalkulator płyt podłogowych 1250x2500 mm \u2014 uwzględnia odpady i podaje dokładną liczbę.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
    ],
  },
  {
    slug: "wall-framing",
    title: "Kalkulatory Konstrukcji Ścian",
    description:
      "Oblicz drewno na konstrukcję ścian: podwaliny, słupki, nadproża i poszycie.",
    calculators: [
      {
        slug: "stud-calculator",
        title: "Kalkulator Słupków Ściennych",
        description:
          "Ile słupków potrzebuję? Darmowy kalkulator słupków na rozstaw 40 cm i 60 cm \u2014 z dodatkami na narożniki, drzwi i okna.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "bottom-plate-calculator",
        title: "Kalkulator Podwaliny Dolnej",
        description:
          "Kalkulator podwaliny dolnej: oblicz deski 45x90 mm lub 45x140 mm wg długości ściany. Ilość desek i metry bieżące.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "top-plate-calculator",
        title: "Kalkulator Oczepów",
        description:
          "Ile drewna na podwójne oczepy? Darmowy kalkulator na 45x90 mm i 45x140 mm \u2014 dokładna ilość desek z zakładkami.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "header-calculator",
        title: "Kalkulator Nadproży",
        description:
          "Kalkulator nadproży: jaki rozmiar nadproża na mój otwór? Darmowe narzędzie na otwory drzwiowe i okienne \u2014 45x140, 45x200, 45x250 i 45x300 mm.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "exterior-sheathing-calculator",
        title: "Kalkulator Poszycia Zewnętrznego",
        description:
          "Ile płyt poszycia na ściany zewnętrzne? Darmowy kalkulator płyt OSB i sklejki 1250x2500 mm \u2014 z zapasem na odpady.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
    ],
  },
  {
    slug: "roofing",
    title: "Kalkulatory Dachowe",
    description:
      "Oblicz materiały dachowe: wiązary, krokwie, gąsiory, poszycie, gonty i papy.",
    calculators: [
      {
        slug: "truss-calculator",
        title: "Kalkulator Wiązarów Dachowych",
        description:
          "Darmowy kalkulator wiązarów dachowych — ile wiązarów na mój dach? Standardowy rozstaw 60 cm. Podaj długość, otrzymaj liczbę i układ.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "rafter-calculator",
        title: "Kalkulator Krokwi",
        description:
          "Darmowy kalkulator krokwi — długość, ilość i rozstaw na dowolny kąt dachu. 40 i 60 cm między osiami, dachy dwuspadowe i kopertowe.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "ridge-board-calculator",
        title: "Kalkulator Kalenicówki",
        description:
          "Kalkulator kalenicówki: ile desek na kalenicę? Darmowe narzędzie na 45x200, 45x250 i 45x300 mm \u2014 długość i ilość.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "roof-sheathing-calculator",
        title: "Kalkulator Poszycia Dachowego",
        description:
          "Ile płyt OSB na dach? Darmowy kalkulator poszycia dachowego na płyty 1250x2500 mm \u2014 uwzględnia kąt nachylenia i odpady.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "shingle-calculator",
        title: "Kalkulator Gontów",
        description:
          "Darmowy kalkulator gontów — ile paczek potrzebuję? Na gonty bitumiczne standardowe i architektoniczne. Przelicza m² na paczki natychmiast.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "underlayment-calculator",
        title: "Kalkulator Papy Podkładowej",
        description:
          "Ile rolek papy podkładowej? Darmowy kalkulator na papę tradycyjną i membranę syntetyczną \u2014 uwzględnia zakłady i odpady.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "drip-edge-calculator",
        title: "Kalkulator Obróbki Okapowej",
        description:
          "Kalkulator obróbki okapowej: oblicz metry bieżące blachy okapowej. Darmowe narzędzie \u2014 ilość sztuk standardowych listew 2 m.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "roof-pitch-calculator",
        title: "Kalkulator Kąta Nachylenia Dachu",
        description:
          "Jaki jest kąt nachylenia mojego dachu? Darmowy kalkulator \u2014 podaj wznios i bieg, otrzymaj kąt, spadek % i mnożnik powierzchni.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "roof-area-calculator",
        title: "Kalkulator Powierzchni Dachu",
        description:
          "Darmowy kalkulator powierzchni dachu — przelicz rzut poziomy na rzeczywistą powierzchnię pokrycia. Z mnożnikiem nachylenia i m² dachu.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "roof-slope-calculator",
        title: "Kalkulator Spadku Dachu",
        description:
          "Darmowy kalkulator spadku dachu — zmierz wznios i bieg, otrzymaj nachylenie, kąt i zalecany materiał pokryciowy. Wynik natychmiast.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Kalkulatory Powłoki Zewnętrznej",
    description:
      "Oblicz folię wiatroizolacyjną, okładziny elewacyjne, obróbki blacharskie i taśmy uszczelniające.",
    calculators: [
      {
        slug: "housewrap-calculator",
        title: "Kalkulator Folii Wiatroizolacyjnej",
        description:
          "Ile rolek folii wiatroizolacyjnej potrzebuję? Darmowy kalkulator wg powierzchni ścian \u2014 rolki 1,5 m i 3 m z zakładami.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
      {
        slug: "vinyl-siding-calculator",
        title: "Kalkulator Sidingu Winylowego",
        description:
          "Darmowy kalkulator sidingu winylowego — podaj m² ścian, otrzymaj dokładną liczbę paneli. Odejmuje drzwi, okna i dodaje 10% zapasu.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
      {
        slug: "hardie-siding-calculator",
        title: "Kalkulator Okładziny Włóknisto-Cementowej",
        description:
          "Ile desek włóknisto-cementowych potrzebuję? Darmowy kalkulator okładzin typu Hardie \u2014 ekspozycja 150 mm i 210 mm z odpadem.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
      {
        slug: "window-flashing-calculator",
        title: "Kalkulator Obróbek Okiennych",
        description:
          "Kalkulator taśmy uszczelniającej okna: oblicz metry bieżące na wszystkie otwory. Darmowe narzędzie na taśmy 100, 150 i 225 mm.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Kalkulatory Izolacji i Płyt G-K",
    description:
      "Oblicz wełnę mineralną, folię paroizolacyjną, płyty gipsowo-kartonowe, wkręty i masy szpachlowe.",
    calculators: [
      {
        slug: "cavity-insulation-calculator",
        title: "Kalkulator Izolacji Ścian",
        description:
          "Ile mat izolacyjnych potrzebuję? Darmowy kalkulator na wełnę mineralną \u2014 ściany 45x90 mm i 45x140 mm, natychmiastowe wyniki.",
        category: "Izolacja i Płyty G-K",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-calculator",
        title: "Kalkulator Płyt Gipsowo-Kartonowych",
        description:
          "Ile płyt g-k potrzebuję? Darmowy kalkulator na płyty 12,5 mm i 15 mm \u2014 szacunek płyt 1200x2600 mm na ściany i sufity.",
        category: "Izolacja i Płyty G-K",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-screw-calculator",
        title: "Kalkulator Wkrętów do Płyt G-K",
        description:
          "Kalkulator wkrętów do płyt g-k: ile wkrętów na płytę? Darmowy estymator na wkręty 35 mm i 45 mm \u2014 łączna ilość i opakowania.",
        category: "Izolacja i Płyty G-K",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "joint-compound-calculator",
        title: "Kalkulator Masy Szpachlowej",
        description:
          "Ile masy szpachlowej potrzebuję? Darmowy kalkulator na spoinowanie płyt g-k \u2014 wiadra na taśmowanie, szpachlowanie i gładź.",
        category: "Izolacja i Płyty G-K",
        categorySlug: "insulation-drywall",
      },
    ],
  },
  {
    slug: "hardware",
    title: "Kalkulatory Okuć i Akcesoriów",
    description:
      "Oblicz gwoździe, wieszaki belkowe, łączniki wiatrowe i inne okucia konstrukcyjne.",
    calculators: [
      {
        slug: "framing-nail-calculator",
        title: "Kalkulator Gwoździ Konstrukcyjnych",
        description:
          "Kalkulator gwoździ: ile kilogramów gwoździ na mój projekt? Darmowe narzędzie na gwoździe 90 mm i 63 mm \u2014 na podstawie liczby słupków.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "joist-hanger-calculator",
        title: "Kalkulator Wieszaków Belkowych",
        description:
          "Ile wieszaków belkowych potrzebuję? Darmowy kalkulator łączników typu Simpson \u2014 do belek stropowych i sufitowych.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "hurricane-tie-calculator",
        title: "Kalkulator Łączników Wiatrowych",
        description:
          "Kalkulator łączników wiatrowych: oblicz łączniki krokiew-ściana na odporność wiatrową. Darmowe narzędzie na kątowniki Simpson Strong-Tie.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "lumber-cost-calculator",
        title: "Kalkulator Kosztów Drewna",
        description:
          "Ile kosztuje drewno konstrukcyjne? Darmowy kalkulator na 45x90, 45x140, 45x200 mm i więcej \u2014 łączny koszt wg ilości i aktualnych cen.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "board-feet-calculator",
        title: "Kalkulator Objętości Drewna",
        description:
          "Darmowy kalkulator objętości drewna — przelicz wymiary na board feet. Do wyceny drewna twardego z natychmiastowym obliczeniem objętości i kosztu w zł.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "plywood-calculator",
        title: "Kalkulator Sklejki",
        description:
          "Darmowy kalkulator sklejki — ile arkuszy potrzebuję? Na grubości od 6 do 18 mm. Ilość arkuszy i szacunek kosztów w zł natychmiast.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
    ],
  },
  {
    slug: "finishing",
    title: "Kalkulatory Wykończeniowe",
    description:
      "Oblicz farbę, grunt, lakierobejcę i materiały wykończeniowe na powierzchnie wewnętrzne i zewnętrzne.",
    calculators: [
      {
        slug: "paint-coverage-calculator",
        title: "Kalkulator Wydajności Farby",
        description:
          "Darmowy kalkulator wydajności farby — ile litrów potrzebuję? Na ściany i sufity. Uwzględnia warstwy, podaje litry i opakowania.",
        category: "Wykończenie",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Kalkulator Kosztów Malowania",
        description:
          "Darmowy kalkulator kosztów malowania — szacunek budżetu wg klasy farby. Od ekonomicznej po premium w zł, z materiałami pomocniczymi.",
        category: "Wykończenie",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Kalkulator Gruntu",
        description:
          "Ile gruntu potrzebuję? Darmowy kalkulator na nowe płyty g-k, drewno i przemalowania \u2014 wydajność wg typu powierzchni.",
        category: "Wykończenie",
        categorySlug: "finishing",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Kalkulatory Zewnętrzne",
    description:
      "Oblicz materiały na tarasy, patio, ogrodzenia i konstrukcje ogrodowe.",
    calculators: [
      {
        slug: "deck-board-calculator",
        title: "Kalkulator Desek Tarasowych",
        description:
          "Ile desek tarasowych potrzebuję? Darmowy kalkulator na deski impregnowane, cedrowe i kompozytowe \u2014 ilość, metry bieżące i zapas.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Kalkulator Stóp Fundamentowych Tarasu",
        description:
          "Kalkulator stóp fundamentowych tarasu: ile filarów betonowych na mój taras? Darmowe narzędzie \u2014 ilość, układ słupków i rozstaw belek.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Kalkulator Balustrady Tarasu",
        description:
          "Ile słupków i tralek potrzebuję? Darmowy kalkulator balustrady tarasu \u2014 ilość słupków, tralek i metry bieżące poręczy.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Kalkulator Schodów Tarasowych",
        description:
          "Kalkulator schodów tarasowych: ile stopni i policzkówek? Darmowe narzędzie \u2014 podaj wysokość tarasu, otrzymaj ilość stopni, policzkówek i desek.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "post-hole-calculator",
        title: "Kalkulator Dołów na Słupki",
        description:
          "Kalkulator dołów na słupki \u2014 ile betonu na słupki ogrodzeniowe? Darmowe narzędzie na każdy rozmiar dołu. Dokładna ilość worków 25 kg i 40 kg.",
        category: "Zewnętrzne",
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
