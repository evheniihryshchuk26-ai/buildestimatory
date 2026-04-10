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
        title: "Darmowy Kalkulator Kotew — Ilość & Koszt (2026)",
        description:
          "Ile kotew fundamentowych potrzebuję? Darmowy kalkulator kotew typu J i klinowych z rozstawem 1,80 m — łączna ilość i wskazówki rozmieszczenia.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Darmowy Kalkulator Uszczelki — Rolki & Metry (2026)",
        description:
          "Kalkulator uszczelki podwalinowej: oblicz rolki folii PE na obwód fundamentu. Darmowe narzędzie na szer. 90 mm i 140 mm — zapobiega infiltracji powietrza.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Darmowy Kalkulator Podwaliny — Metry & Sztuki (2026)",
        description:
          "Ile drewna impregnowanego na podwaliny? Kalkulator dla desek 45x90 mm i 45x140 mm — metry bieżące i liczba sztuk.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Darmowy Kalkulator Betonu — m³, Worki & Koszt (2026)",
        description:
          "Ile betonu potrzebuję? Darmowy kalkulator na płyty, ławy i słupy — metry sześcienne, liczba worków z zapasem na odpady.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Darmowy Kalkulator Płyty Betonowej — m³ & Worki (2026)",
        description:
          "Ile betonu na płytę? Darmowy kalkulator na garaż, taras i podjazd — metry sześcienne i worki na dowolną grubość.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Darmowy Kalkulator Ławy — m³ & Odpady (2026)",
        description:
          "Kalkulator ławy fundamentowej: oblicz metry sześcienne betonu na ławy ciągłe i stopy. Darmowe narzędzie z zapasem na odpady.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Darmowy Kalkulator Słupów — m³ & Worki (2026)",
        description:
          "Ile betonu na słupy? Darmowy kalkulator na średnice 200, 250 i 300 mm — metry sześcienne na słup i łącznie.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Darmowy Kalkulator Schodów — m³ & Stopnie (2026)",
        description:
          "Kalkulator schodów betonowych: ile metrów sześciennych na schody? Darmowe narzędzie — podaj szerokość, wysokość i liczbę stopni.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "gravel-calculator",
        title: "Darmowy Kalkulator Żwiru — m³, Tony & Koszt (2026)",
        description:
          "Ile żwiru potrzebuję? Darmowy kalkulator dla dowolnej powierzchni — metry sześcienne, tony i szacunek kosztów z 10% zapasem.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "driveway-gravel-calculator",
        title: "Darmowy Kalkulator Żwiru na Podjazd — Tony & Koszt (2026)",
        description:
          "Kalkulator żwiru na podjazd: oszacuj tony i koszt wg typu — tłuczeń, żwir, kruszywo łamane lub grys z dostawą.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "block-fill-calculator",
        title: "Darmowy Kalkulator Wypełnienia — m³ & Worki (2026)",
        description:
          "Kalkulator wypełnienia pustaków — ile betonu do wypełnienia pustaków? Darmowe narzędzie dla bloków 20, 25 i 30 cm. Metry sześcienne i liczba worków natychmiast.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "mortar-mix-calculator",
        title: "Darmowy Kalkulator Zaprawy — Worki & Typ (2026)",
        description:
          "Kalkulator zaprawy murarskiej — darmowe narzędzie do obliczania worków zaprawy na bloczki, cegły i kamień. Zaprawy M5, M10 i M15 z opcjami grubości spoiny.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "retaining-wall-calculator",
        title: "Darmowy Kalkulator Muru Oporowego — Bloczki & Drenaż (2026)",
        description:
          "Kalkulator muru oporowego — darmowe narzędzie dla murów z bloczków, pustaków i kamienia. Ilość bloczków, daszki, podsypka żwirowa i drenaż natychmiast.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "rebar-calculator",
        title: "Darmowy Kalkulator Zbrojenia — Pręty, Metry & Waga (2026)",
        description:
          "Ile zbrojenia potrzebuję? Darmowy kalkulator na płyty, ławy i ściany — ilość prętów, metry bieżące i waga w kg.",
        category: "Fundamenty",
        categorySlug: "foundation",
      },
      {
        slug: "rebar-spacing-calculator",
        title: "Rozstaw Zbrojenia — Rozkład Siatki & Ilość (2026)",
        description:
          "Kalkulator rozstawu zbrojenia — darmowe narzędzie do optymalnego rozkładu prętów wg typu obciążenia. Ilość prętów, metry i podkładki dystansowe.",
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
        title: "Darmowy Kalkulator Belki Obwodowej — Sztuki & Metry (2026)",
        description:
          "Kalkulator belki obwodowej: ile desek na obwód stropu? Darmowe narzędzie na 45x200, 45x250 i 45x300 mm — ilość i metry bieżące.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
      {
        slug: "floor-joist-calculator",
        title: "Darmowy Kalkulator Belek Stropowych — Ilość & Rozstaw (2026)",
        description:
          "Darmowy kalkulator belek stropowych — ilość, rozmiar i rozstaw wg rozpiętości. Na rozstaw 40 cm i 60 cm, wynik natychmiast.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
      {
        slug: "bridging-calculator",
        title: "Darmowy Kalkulator Stężeń — Rzędy & Bloki (2026)",
        description:
          "Ile rzędów stężeń potrzebuję? Darmowy kalkulator stężeń krzyżowych i blokad wg rozpiętości belek — natychmiastowe wyniki.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
      {
        slug: "subfloor-adhesive-calculator",
        title: "Darmowy Kalkulator Kleju — Tuby & m² (2026)",
        description:
          "Kalkulator kleju do podłogi: ile tub kleju montażowego? Darmowy estymator na podstawie powierzchni — tuby 310 ml i 828 ml.",
        category: "Konstrukcja Stropu",
        categorySlug: "floor-framing",
      },
      {
        slug: "osb-panel-calculator",
        title: "Darmowy Kalkulator Płyt OSB — Płyty & Odpady (2026)",
        description:
          "Ile płyt OSB potrzebuję? Darmowy kalkulator płyt podłogowych 1250x2500 mm — uwzględnia odpady i podaje dokładną liczbę.",
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
        title: "Darmowy Kalkulator Słupków — Ilość & Koszt (2026)",
        description:
          "Ile słupków potrzebuję? Darmowy kalkulator słupków na rozstaw 40 cm i 60 cm — z dodatkami na narożniki, drzwi i okna.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "bottom-plate-calculator",
        title: "Darmowy Kalkulator Podwaliny — Deski & Metry (2026)",
        description:
          "Kalkulator podwaliny dolnej: oblicz deski 45x90 mm lub 45x140 mm wg długości ściany. Ilość desek i metry bieżące.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "top-plate-calculator",
        title: "Darmowy Kalkulator Oczepów — Deski & Zakładki (2026)",
        description:
          "Ile drewna na podwójne oczepy? Darmowy kalkulator na 45x90 mm i 45x140 mm — dokładna ilość desek z zakładkami.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "header-calculator",
        title: "Darmowy Kalkulator Nadproży — Wymiar & Sztuki (2026)",
        description:
          "Kalkulator nadproży: jaki rozmiar nadproża na mój otwór? Darmowe narzędzie na otwory drzwiowe i okienne — 45x140, 45x200, 45x250 i 45x300 mm.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "exterior-sheathing-calculator",
        title: "Darmowy Kalkulator Poszycia — Płyty & m² (2026)",
        description:
          "Ile płyt poszycia na ściany zewnętrzne? Darmowy kalkulator płyt OSB i sklejki 1250x2500 mm — z zapasem na odpady.",
        category: "Konstrukcja Ścian",
        categorySlug: "wall-framing",
      },
      {
        slug: "rake-wall-calculator",
        title: "Darmowy Kalkulator Ściany Skośnej — Słupki & Cięcia (2026)",
        description:
          "Darmowy kalkulator ściany skośnej — ilość słupków, wysokości indywidualne i kąt cięcia dla ścian podążających za spadkiem dachu.",
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
        title: "Darmowy Kalkulator Wiązarów — Ilość & Rozstaw (2026)",
        description:
          "Darmowy kalkulator wiązarów dachowych — ile wiązarów na mój dach? Standardowy rozstaw 60 cm. Podaj długość, otrzymaj liczbę i układ.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "rafter-calculator",
        title: "Darmowy Kalkulator Krokwi — Długość & Ilość (2026)",
        description:
          "Darmowy kalkulator krokwi — długość, ilość i rozstaw na dowolny kąt dachu. 40 i 60 cm między osiami, dachy dwuspadowe i kopertowe.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "ridge-board-calculator",
        title: "Darmowy Kalkulator Kalenicówki — Długość & Sztuki (2026)",
        description:
          "Kalkulator kalenicówki: ile desek na kalenicę? Darmowe narzędzie na 45x200, 45x250 i 45x300 mm — długość i ilość.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "roof-sheathing-calculator",
        title: "Darmowy Kalkulator Poszycia Dachu — Płyty & m² (2026)",
        description:
          "Ile płyt OSB na dach? Darmowy kalkulator poszycia dachowego na płyty 1250x2500 mm — uwzględnia kąt nachylenia i odpady.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "shingle-calculator",
        title: "Darmowy Kalkulator Gontów — Paczki & m² (2026)",
        description:
          "Darmowy kalkulator gontów — ile paczek potrzebuję? Na gonty bitumiczne standardowe i architektoniczne. Przelicza m² na paczki natychmiast.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "underlayment-calculator",
        title: "Darmowy Kalkulator Papy — Rolki & m² (2026)",
        description:
          "Ile rolek papy podkładowej? Darmowy kalkulator na papę tradycyjną i membranę syntetyczną — uwzględnia zakłady i odpady.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "drip-edge-calculator",
        title: "Darmowy Kalkulator Okapu — Metry & Sztuki (2026)",
        description:
          "Kalkulator obróbki okapowej: oblicz metry bieżące blachy okapowej. Darmowe narzędzie — ilość sztuk standardowych listew 2 m.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "roof-pitch-calculator",
        title: "Darmowy Kalkulator Nachylenia — Kąt & Mnożnik (2026)",
        description:
          "Jaki jest kąt nachylenia mojego dachu? Darmowy kalkulator — podaj wznios i bieg, otrzymaj kąt, spadek % i mnożnik powierzchni.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "roof-area-calculator",
        title: "Darmowy Kalkulator Powierzchni Dachu — m² & Kąt (2026)",
        description:
          "Darmowy kalkulator powierzchni dachu — przelicz rzut poziomy na rzeczywistą powierzchnię pokrycia. Z mnożnikiem nachylenia i m² dachu.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "roof-slope-calculator",
        title: "Darmowy Kalkulator Spadku — Kąt & Materiał (2026)",
        description:
          "Darmowy kalkulator spadku dachu — zmierz wznios i bieg, otrzymaj nachylenie, kąt i zalecany materiał pokryciowy. Wynik natychmiast.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "hip-roof-calculator",
        title: "Darmowy Kalkulator Dachu Kopertowego — Krokwie & Powierzchnia (2026)",
        description:
          "Darmowy kalkulator dachu kopertowego — ilość krokwi, długość krokwi narożnych, powierzchnia dachu i kalenica. Na dowolny budynek.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "gambrel-roof-calculator",
        title: "Darmowy Kalkulator Dachu Mansardowego — Krokwie & Powierzchnia (2026)",
        description:
          "Darmowy kalkulator dachu mansardowego — krokwie górne i dolne, powierzchnia dachu i zyskana wysokość ściany. Podaj dwa kąty nachylenia.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "gable-roof-calculator",
        title: "Darmowy Kalkulator Dachu Dwuspadowego — Krokwie & Kalenica (2026)",
        description:
          "Darmowy kalkulator dachu dwuspadowego — ilość krokwi, długość kalenicy, powierzchnia dachu i powierzchnia szczytu. Podaj wymiary i nachylenie.",
        category: "Pokrycie Dachu",
        categorySlug: "roofing",
      },
      {
        slug: "lean-to-roof-calculator",
        title: "Darmowy Kalkulator Dachu Jednospadowego — Krokwie & Powierzchnia (2026)",
        description:
          "Darmowy kalkulator dachu jednospadowego — ilość krokwi, długość, powierzchnia i wysokość. Na dobudówki, wiaty i szopy.",
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
        title: "Darmowy Kalkulator Folii — Rolki & m² (2026)",
        description:
          "Ile rolek folii wiatroizolacyjnej potrzebuję? Darmowy kalkulator wg powierzchni ścian — rolki 1,5 m i 3 m z zakładami.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
      {
        slug: "vinyl-siding-calculator",
        title: "Darmowy Kalkulator Sidingu — Panele & m² (2026)",
        description:
          "Darmowy kalkulator sidingu winylowego — podaj m² ścian, otrzymaj dokładną liczbę paneli. Odejmuje drzwi, okna i dodaje 10% zapasu.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
      {
        slug: "hardie-siding-calculator",
        title: "Darmowy Kalkulator Okładzin — Deski & Odpad (2026)",
        description:
          "Ile desek włóknisto-cementowych potrzebuję? Darmowy kalkulator okładzin typu Hardie — ekspozycja 150 mm i 210 mm z odpadem.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
      {
        slug: "window-flashing-calculator",
        title: "Darmowy Kalkulator Obróbek Okien — Metry & Rolki (2026)",
        description:
          "Kalkulator taśmy uszczelniającej okna: oblicz metry bieżące na wszystkie otwory. Darmowe narzędzie na taśmy 100, 150 i 225 mm.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
      {
        slug: "soffit-calculator",
        title: "Darmowy Kalkulator Podbitki — Panele & Profil J (2026)",
        description:
          "Ile paneli podbitki dachowej potrzebuję? Darmowy kalkulator wg obwodu i szerokości okapu — profil J i wentylacja w cenie.",
        category: "Powłoka Zewnętrzna",
        categorySlug: "exterior-shell",
      },
      {
        slug: "board-and-batten-calculator",
        title: "Darmowy Kalkulator Deski z Listwą — Deski & Listwy (2026)",
        description:
          "Darmowy kalkulator okładziny deska-listwa — ilość desek i listew maskujących na powierzchnię ściany. Na elewacje pionowe.",
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
        title: "Darmowy Kalkulator Izolacji — Maty & m² (2026)",
        description:
          "Ile mat izolacyjnych potrzebuję? Darmowy kalkulator na wełnę mineralną — ściany 45x90 mm i 45x140 mm, natychmiastowe wyniki.",
        category: "Izolacja i Płyty G-K",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-calculator",
        title: "Darmowy Kalkulator Płyt G-K — Płyty & m² (2026)",
        description:
          "Ile płyt g-k potrzebuję? Darmowy kalkulator na płyty 12,5 mm i 15 mm — szacunek płyt 1200x2600 mm na ściany i sufity.",
        category: "Izolacja i Płyty G-K",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-screw-calculator",
        title: "Darmowy Kalkulator Wkrętów — Sztuki & Opakowania (2026)",
        description:
          "Kalkulator wkrętów do płyt g-k: ile wkrętów na płytę? Darmowy estymator na wkręty 35 mm i 45 mm — łączna ilość i opakowania.",
        category: "Izolacja i Płyty G-K",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "joint-compound-calculator",
        title: "Darmowy Kalkulator Masy Szpachlowej — Wiadra & Koszt (2026)",
        description:
          "Ile masy szpachlowej potrzebuję? Darmowy kalkulator na spoinowanie płyt g-k — wiadra na taśmowanie, szpachlowanie i gładź.",
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
        title: "Darmowy Kalkulator Gwoździ — kg & Koszt (2026)",
        description:
          "Kalkulator gwoździ: ile kilogramów gwoździ na mój projekt? Darmowe narzędzie na gwoździe 90 mm i 63 mm — na podstawie liczby słupków.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "joist-hanger-calculator",
        title: "Darmowy Kalkulator Wieszaków — Sztuki & Typ (2026)",
        description:
          "Ile wieszaków belkowych potrzebuję? Darmowy kalkulator łączników typu Simpson — do belek stropowych i sufitowych.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "hurricane-tie-calculator",
        title: "Darmowy Kalkulator Łączników — Sztuki & Koszt (2026)",
        description:
          "Kalkulator łączników wiatrowych: oblicz łączniki krokiew-ściana na odporność wiatrową. Darmowe narzędzie na kątowniki Simpson Strong-Tie.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "lumber-cost-calculator",
        title: "Darmowy Kalkulator Kosztów Drewna — Sztuki & Suma (2026)",
        description:
          "Ile kosztuje drewno konstrukcyjne? Darmowy kalkulator na 45x90, 45x140, 45x200 mm i więcej — łączny koszt wg ilości i aktualnych cen.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "board-feet-calculator",
        title: "Darmowy Kalkulator Objętości — BF & Koszt w zł (2026)",
        description:
          "Darmowy kalkulator objętości drewna — przelicz wymiary na board feet. Do wyceny drewna twardego z natychmiastowym obliczeniem objętości i kosztu w zł.",
        category: "Okucia i Akcesoria",
        categorySlug: "hardware",
      },
      {
        slug: "plywood-calculator",
        title: "Darmowy Kalkulator Sklejki — Arkusze & Koszt (2026)",
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
        title: "Darmowy Kalkulator Wydajności Farby — Litry & m² (2026)",
        description:
          "Darmowy kalkulator wydajności farby — ile litrów potrzebuję? Na ściany i sufity. Uwzględnia warstwy, podaje litry i opakowania.",
        category: "Wykończenie",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Darmowy Kalkulator Kosztów Farby — Litry & Budżet (2026)",
        description:
          "Darmowy kalkulator kosztów malowania — szacunek budżetu wg klasy farby. Od ekonomicznej po premium w zł, z materiałami pomocniczymi.",
        category: "Wykończenie",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Darmowy Kalkulator Gruntu — Litry & m² (2026)",
        description:
          "Ile gruntu potrzebuję? Darmowy kalkulator na nowe płyty g-k, drewno i przemalowania — wydajność wg typu powierzchni.",
        category: "Wykończenie",
        categorySlug: "finishing",
      },
      {
        slug: "epoxy-calculator",
        title: "Darmowy Kalkulator Żywicy — Litry & Koszt (2026)",
        description:
          "Kalkulator żywicy epoksydowej — ile żywicy na podłogę garażu? Darmowe narzędzie na każdą powierzchnię. Litry, zestawy i koszt dla 1 lub 2 warstw.",
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
        title: "Darmowy Kalkulator Desek Tarasowych — Sztuki & Metry (2026)",
        description:
          "Ile desek tarasowych potrzebuję? Darmowy kalkulator na deski impregnowane, cedrowe i kompozytowe — ilość, metry bieżące i zapas.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Darmowy Kalkulator Stóp Tarasu — Filary & m³ (2026)",
        description:
          "Kalkulator stóp fundamentowych tarasu: ile filarów betonowych na mój taras? Darmowe narzędzie — ilość, układ słupków i rozstaw belek.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Darmowy Kalkulator Balustrady — Słupki & Tralki (2026)",
        description:
          "Ile słupków i tralek potrzebuję? Darmowy kalkulator balustrady tarasu — ilość słupków, tralek i metry bieżące poręczy.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Darmowy Kalkulator Schodów Tarasu — Stopnie & Policzki (2026)",
        description:
          "Kalkulator schodów tarasowych: ile stopni i policzkówek? Darmowe narzędzie — podaj wysokość tarasu, otrzymaj ilość stopni, policzkówek i desek.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "post-hole-calculator",
        title: "Darmowy Kalkulator Dołów — Worki & m³ (2026)",
        description:
          "Kalkulator dołów na słupki — ile betonu na słupki ogrodzeniowe? Darmowe narzędzie na każdy rozmiar dołu. Dokładna ilość worków 25 kg i 40 kg.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "pond-calculator",
        title: "Darmowy Kalkulator Oczka Wodnego — Litry & Folia (2026)",
        description:
          "Kalkulator oczka wodnego — darmowe narzędzie do objętości, rozmiaru folii i wydajności pompy. Wymiary dla oczek prostokątnych, owalnych lub nerkowatych.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-calculator",
        title: "Darmowy Kalkulator Ogrodzenia — Słupki & Deski (2026)",
        description:
          "Kalkulator ogrodzenia — ile słupków, rygli i desek na Twoje ogrodzenie? Darmowe narzędzie do ogrodzeń drewnianych. Pełna lista materiałów natychmiast.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-post-calculator",
        title: "Darmowy Kalkulator Słupków — Słupki & Beton (2026)",
        description:
          "Kalkulator słupków ogrodzeniowych — ile słupków i worków betonu? Darmowe narzędzie oblicza słupki, beton i żwir na każdą długość ogrodzenia.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-panel-calculator",
        title: "Darmowy Kalkulator Paneli — Panele & Słupki (2026)",
        description:
          "Kalkulator paneli ogrodzeniowych — ile gotowych paneli? Darmowe narzędzie dla paneli 1,80 m i 2,50 m. Panele, słupki i nakładki.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "picket-fence-calculator",
        title: "Darmowy Kalkulator Sztachet — Sztachety & Słupki (2026)",
        description:
          "Kalkulator sztachet — ile sztachet z niestandardowym rozstawem? Darmowe narzędzie dla dowolnej szerokości i odstępu. Sztachety, rygle, słupki i objętość drewna.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-board-spacing-calculator",
        title: "Darmowy Kalkulator Rozstawu Desek Tarasu — Równomierna Szczelina (2026)",
        description:
          "Darmowy kalkulator rozstawu desek tarasu — oblicz równomierną szczelinę między deskami na dowolną szerokość deski i długość tarasu.",
        category: "Zewnętrzne",
        categorySlug: "outdoor",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Kalkulatory Podłóg",
    description:
      "Oblicz materiały na podłogi — parkiet, wykładzina, płytki i laminat z uwzględnieniem odpadu i szacunkiem kosztów.",
    calculators: [
      { slug: "flooring-calculator", title: "Darmowy Kalkulator Podłóg — Paczki & m² (2026)", description: "Kalkulator podłóg — darmowe narzędzie do metrów kwadratowych. Paczki, odpad i lista materiałów na parkiet, winyl i deski warstwowe.", category: "Podłogi", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Darmowy Kalkulator Wykładziny — m² & Rolki (2026)", description: "Kalkulator wykładziny — darmowe narzędzie do metrów kwadratowych, bieżących i podkładu. Dla rolek 4 m i 5 m z planowaniem łączeń.", category: "Podłogi", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Darmowy Kalkulator Płytek — Sztuki & Paczki (2026)", description: "Kalkulator płytek — darmowe narzędzie do gresu, ceramiki i kamienia naturalnego. Liczba płytek, paczki, fuga i klej do płytek.", category: "Podłogi", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Darmowy Kalkulator Laminatu — Paczki & m² (2026)", description: "Kalkulator laminatu — darmowy kalkulator desek i paczek z podkładem. Wprowadź wymiary pokoju, aby uzyskać natychmiastową listę materiałów.", category: "Podłogi", categorySlug: "flooring" },
    ],
  },
  {
    slug: "stairs",
    title: "Kalkulatory Schodów",
    description:
      "Oblicz wymiary schodów, długość podłużnic, stosunek wysokość/głębokość, schody kręcone i spoczniki. Darmowe kalkulatory zgodne z PN-EN.",
    calculators: [
      { slug: "stair-calculator", title: "Darmowy Kalkulator Schodów — Stopnie, Wysokość & Podłużnica (2026)", description: "Darmowy kalkulator schodów — wpisz całkowitą wysokość, aby uzyskać liczbę stopni, wysokość, głębokość i długość podłużnicy. Zgodny z PN-EN.", category: "Schody", categorySlug: "stairs" },
      { slug: "stair-stringer-calculator", title: "Darmowy Kalkulator Podłużnic — Długość & Ilość (2026)", description: "Darmowy kalkulator podłużnic — długość, ilość i rozkład dla każdej szerokości schodów. Dla desek 50×250 i 50×300 mm.", category: "Schody", categorySlug: "stairs" },
      { slug: "rise-over-run-calculator", title: "Darmowy Kalkulator Wysokość/Głębokość — Nachylenie & Kąt (2026)", description: "Kalkulator wysokość/głębokość — stosunek, procent, kąt i opis natychmiast. Dla schodów, ramp i dachów.", category: "Schody", categorySlug: "stairs" },
      { slug: "spiral-staircase-calculator", title: "Darmowy Schody Kręcone — Stopnie & Wymiary (2026)", description: "Kalkulator schodów kręconych — średnica i wysokość kondygnacji dla liczby stopni, wysokości i obrotu. Zgodny z normami.", category: "Schody", categorySlug: "stairs" },
      { slug: "stair-landing-calculator", title: "Darmowy Schody ze Spocznikiem — Biegi & Wymiary (2026)", description: "Kalkulator schodów ze spocznikiem — podziel biegi ze spocznikiem pośrednim. Stopnie na bieg, wysokość spocznika i całkowity bieg.", category: "Schody", categorySlug: "stairs" },
      { slug: "baluster-spacing-calculator", title: "Darmowy Kalkulator Rozstawu Tralek — Ilość & Odstęp (2026)", description: "Darmowy kalkulator rozstawu tralek — dokładna ilość i równomierny odstęp dla balustrad schodów i tarasów. Wg norm budowlanych.", category: "Schody", categorySlug: "stairs" },
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
