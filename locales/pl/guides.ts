import type { GuidesTranslations } from "@/lib/i18n/types";

const guides: GuidesTranslations = {
  breadcrumbGuides: "Poradniki",

  index: {
    title: "Poradniki budowlane",
    metaDescription:
      "Szczegółowe poradniki budowlane dla wykonawców, kierowników budowy i majsterkowiczów. Dowiedz się o rozstawie konstrukcji, doborze materiałów, przepisach budowlanych i więcej.",
    heading: "Poradniki budowlane",
    description:
      "Szczegółowe poradniki, które pomogą Ci podjąć lepsze decyzje przy kolejnym projekcie budowlanym.",
    guides: [
      {
        title: "Rozstaw osiowy 40 cm vs 60 cm: kompletny poradnik",
        description:
          "Dowiedz się, kiedy stosować rozstaw osiowy 40 cm, a kiedy 60 cm dla słupków, belek stropowych i krokwi. Zawiera wymagania norm PN-EN, porównanie kosztów i wpływ na materiały.",
        href: "/guides/16-vs-24-on-center-spacing",
      },
      {
        title: "Tabela spadków dachu: kompletny przewodnik",
        description:
          "Pełna tabela spadków dachu ze stopniami, procentami nachylenia i mnożnikami dla każdego typowego spadku od 5° do 45°. Zawiera zalecenia materiałowe i klimatyczne.",
        href: "/guides/roof-pitch-chart",
      },
      {
        title: "Minimalny spadek dachu dla gontu, blachy i dachówki",
        description:
          "Znajdź minimalny spadek dachu wymagany dla gontu bitumicznego, blachy na rąbek, dachówki ceramicznej i innych pokryć. Zawiera odniesienia do norm i rozwiązania niskonachyleniowe.",
        href: "/guides/minimum-roof-pitch-for-shingles",
      },
      {
        title: "Beton towarowy vs workowy: co wybrać?",
        description:
          "Porównanie betonu towarowego i workowego: cena za m³, wytrzymałość, wygoda i zastosowania. Dowiedz się, kiedy zamówić gruszę, a kiedy mieszać worki samodzielnie.",
        href: "/guides/ready-mix-vs-bagged-concrete",
      },
      {
        title: "Ile kosztuje beton? Przewodnik cenowy 2025",
        description:
          "Beton towarowy kosztuje 350–500 zł za m³. Kompletny przewodnik cenowy obejmujący płyty, ławy, podjazdy, beton workowy, koszty robocizny i porady oszczędnościowe.",
        href: "/guides/concrete-cost-guide",
      },
      {
        title: "Ile farby potrzebuję? Kompletny poradnik",
        description:
          "Ile farby na ściany, sufity i listwy? Kompletny poradnik obejmujący pomiary, wydajność, warstwy, przygotowanie powierzchni i zestawienie kosztów z linkami do kalkulatorów.",
        href: "/guides/how-much-paint-do-i-need",
      },
      {
        title: "Ceny drewna budowlanego: ile kosztuje drewno?",
        description:
          "Aktualne ceny drewna wg gatunku, klasy i wymiaru. Obejmuje drewno konstrukcyjne, drewno klejone, sklejkę, trendy cenowe, gdzie kupować i rabaty hurtowe.",
        href: "/guides/lumber-prices-guide",
      },
      {
        title: "Deski kompozytowe vs drewniane: co jest lepsze?",
        description:
          "Porównanie desek kompozytowych i drewnianych: koszt, trwałość, konserwacja, wygląd i żywotność. Dowiedz się, który materiał tarasowy jest najlepszy dla Twojego projektu i klimatu.",
        href: "/guides/composite-vs-wood-decking",
      },
      {
        title: "Ile kosztuje \u017cwir? Przewodnik cenowy 2026",
        description:
          "Żwir kosztuje 60\u2013180 PLN za tonę. Kompletny przewodnik cenowy: podjazdy, tarasy, ścieżki, drenaż, ogród z kosztami dostawy i obliczaniem ilości.",
        href: "/guides/gravel-cost-guide",
      },
      {
        title: "Ile kosztuje podjazd? Przewodnik cenowy 2026",
        description:
          "Nowy podjazd kosztuje 5 000\u201380 000 PLN w zale\u017cno\u015bci od materia\u0142u i rozmiaru. Kompletny przewodnik: beton, asfalt, \u017cwir i kostka brukowa z tabelami koszt\u00f3w, czynnikami wp\u0142ywaj\u0105cymi na cen\u0119 i sposobami na oszcz\u0119dno\u015bci.",
        href: "/guides/driveway-cost-guide",
      },
      {
        title: "Przewodnik po Kosztach Pod\u0142\u00f3g",
        description:
          "Pod\u0142ogi kosztuj\u0105 80\u2013600 PLN/m\u00b2 z monta\u017cem. Kompletny przewodnik cenowy dla parkietu, laminatu, p\u0142ytek, wyk\u0142adziny i winylu z szacunkami na pomieszczenie i poradami oszcz\u0119dno\u015bciowymi.",
        href: "/guides/flooring-cost-guide",
      },
    ],
  },

  spacingGuide: {
    title: "Rozstaw osiowy 40 cm vs 60 cm: kompletny poradnik",
    metaDescription:
      "Rozstaw osiowy 40 cm vs 60 cm wyjaśniony: kiedy stosować każdy dla słupków ściennych, belek stropowych, krokwi. Zawiera wymagania Prawa budowlanego, porównanie kosztów i wpływ na materiały.",

    heroTitle: "Rozstaw osiowy 40 cm vs 60 cm",
    heroSubtitle: "Kompletny poradnik",
    heroDescription:
      "Wszystko, co musisz wiedzieć o wyborze między rozstawem osiowym 40 cm a 60 cm dla słupków ściennych, belek stropowych, legarów i krokwi w konstrukcji szkieletowej.",

    quickAnswerHeading: "Szybka odpowiedź",
    quickAnswerText:
      "Stosuj rozstaw osiowy 40 cm dla ścian nośnych, większości belek stropowych i wszędzie tam, gdzie wymagana jest maksymalna wytrzymałość konstrukcyjna. Stosuj rozstaw 60 cm dla nienośnych ścian działowych, niektórych wiązarów dachowych oraz tam, gdzie normy na to pozwalają, a chcesz zmniejszyć koszty materiałów nawet o 33%.",

    whatIsHeading: "Co to jest rozstaw osiowy?",
    whatIsText1:
      "Rozstaw osiowy (c/c – center to center) to odległość mierzona od osi jednego elementu konstrukcyjnego do osi następnego. Jest to standardowy sposób, w jaki projektanci i normy budowlane określają rozstaw słupków, belek stropowych, krokwi i wiązarów w budownictwie szkieletowym.",
    whatIsText2:
      "Dwa najczęściej stosowane rozstawy osiowe w budownictwie mieszkaniowym to 40 cm i 60 cm (odpowiedniki anglosaskich 16\" i 24\"). Wybór między nimi wpływa na nośność konstrukcji, koszt materiałów, parametry izolacji termicznej i kompatybilność ze standardowymi materiałami budowlanymi.",
    whatIsText3:
      "Standardowe materiały płytowe, takie jak płyty OSB 125×250 cm, płyty gipsowo-kartonowe Rigips/Knauf i płyty izolacyjne, są wytwarzane w wymiarach podzielnych zarówno przez 40 cm, jak i 60 cm, dzięki czemu krawędzie płyt zawsze trafiają na element konstrukcyjny przy obu rozstawach.",

    comparisonHeading: "40 cm vs 60 cm: porównanie obok siebie",
    comparisonSubheading:
      "Jak dwa najczęstsze rozstawy konstrukcyjne wypadają w każdym głównym zastosowaniu.",
    comparisonCol1: "Zastosowanie",
    comparisonCol2: "Rozstaw 40 cm",
    comparisonCol3: "Rozstaw 60 cm",
    comparisonRows: [
      {
        category: "Ściany nośne zewnętrzne",
        oc16: "Wymagane przez większość norm dla słupków 4×14 cm (KVH). Najsilniejsza opcja.",
        oc24: "Dopuszczalne ze słupkami 4×16 cm lub większymi w niektórych rozwiązaniach (sprawdź projekt).",
      },
      {
        category: "Ściany działowe nienośne",
        oc16: "Powszechne, ale niewymagane. Więcej punktów mocowania dla szafek kuchennych.",
        oc24: "Zgodne z normami. Oszczędność ~33% na słupkach.",
      },
      {
        category: "Belki stropowe (typowy rozpiętość)",
        oc16: "Rozpiętość do ~5 m z drewna C24. Sztywniejsza podłoga.",
        oc24: "Rozpiętość do ~4 m z tego samego drewna. Może się uginać.",
      },
      {
        category: "Legary stropowe (bez poddasza użytkowego)",
        oc16: "Standard dla poddaszy użytkowych. Przenosi obciążenie płyt g-k plus obciążenia użytkowe.",
        oc24: "Wystarczające dla sufitów z samymi płytami g-k bez obciążenia poddasza.",
      },
      {
        category: "Krokwie / wiązary dachowe",
        oc16: "Stosowane w strefach dużych obciążeń śniegiem (>1,5 kN/m² obciążenie śniegiem).",
        oc24: "Standard dla wiązarów prefabrykowanych w umiarkowanych strefach klimatycznych.",
      },
      {
        category: "Koszt materiałów (na metr bieżący ściany)",
        oc16: "~35–50 zł/mb (więcej drewna, więcej łączników).",
        oc24: "~25–35 zł/mb (mniej słupków, mniej robocizny).",
      },
      {
        category: "Izolacja termiczna",
        oc16: "Standardowe maty z wełny mineralnej Rockwool / Isover dopasowane do rozstawu 40 cm.",
        oc24: "Szersze przęsła pozwalają na lepszą ciągłość izolacji. Lepsza ochrona termiczna.",
      },
      {
        category: "Poszycie z płyt g-k",
        oc16: "Doskonałe mocowanie. Mniejsze ryzyko pękania i ugięcia płyt.",
        oc24: "Wymaga płyt g-k 15 mm na sufitach, aby zapobiec ugięciu.",
      },
    ],

    when16Heading: "Kiedy stosować rozstaw 40 cm",
    when16Intro:
      "Rozstaw osiowy 40 cm jest bardziej konserwatywną i powszechnie stosowaną opcją. Oto kiedy jest wymagany lub zdecydowanie zalecany:",
    when16Items: [
      "Ściany nośne zewnętrzne — Wymagane przez normy PN-EN i warunki techniczne (WT) dla większości ścian szkieletowych przenoszących obciążenia dachowe i stropowe ze słupkami 4×14 cm.",
      "Belki stropowe o większych rozpiętościach — Rozstaw 40 cm pozwala belkom na większe rozpiętości. Dla belki z drewna C24 o przekroju 4×20 cm rozstaw 40 cm daje rozpiętość do ~5 m vs ~4 m przy 60 cm.",
      "Strefy pod ciężkie wykończenia — Podłogi z płytek ceramicznych, blaty kamienne i zabudowy meblowe korzystają z dodatkowego podparcia przy rozstawie 40 cm.",
      "Strefy wiatrowe i sejsmiczne — Przepisy budowlane w strefach podwyższonego obciążenia wiatrem mogą wymagać rozstawu 40 cm (lub mniejszego) dla ścian usztywniających.",
      "Legary stropowe z poddaszem użytkowym — Jeśli poddasze będzie wykorzystywane jako przestrzeń mieszkalna lub magazynowa, rozstaw 40 cm zapewnia odpowiednią nośność.",
      "Ściany z ciężką okładziną — Elewacje z cegły klinkierowej, tynku cienkowarstwowego na styropianie i okładziny z włóknocementu lepiej się sprawdzają przy słupkach co 40 cm.",
    ],
    when16Summary:
      "Podsumowanie: w razie wątpliwości rozstaw 40 cm jest bezpieczniejszym wyborem. Dodatkowy koszt materiałów jest niewielki w porównaniu z korzyściami konstrukcyjnymi.",

    when24Heading: "Kiedy stosować rozstaw 60 cm",
    when24Intro:
      "Rozstaw osiowy 60 cm wykorzystuje mniej elementów szkieletu i może znacznie zmniejszyć koszty materiałów i robocizny. Oto kiedy jest odpowiedni:",
    when24Items: [
      "Nienośne ściany działowe — Normy dopuszczają rozstaw 60 cm dla ścian wewnętrznych nieprzenoszących obciążeń konstrukcyjnych. To najczęstsze zastosowanie.",
      "Prefabrykowane wiązary dachowe — Większość wiązarów fabrycznych jest projektowana pod rozstaw 60 cm. Obliczenia inżynieryjne uwzględniają szerszy rozstaw.",
      "Zaawansowana konstrukcja szkieletowa — Konstrukcja zoptymalizowana wykorzystuje słupki 6×14 cm w rozstawie 60 cm z pojedynczymi oczepami, redukując zużycie drewna nawet o 30% przy jednoczesnej poprawie izolacyjności.",
      "Ściany szczytowe — Niekonstrukcyjne ściany szczytowe ponad linią dachu mogą zazwyczaj stosować rozstaw 60 cm.",
      "Legary stropowe (tylko płyty g-k) — Gdy sufit utrzymuje wyłącznie płyty gipsowo-kartonowe bez obciążeń poddasza, rozstaw 60 cm jest zgodny z normami.",
      "Projekty z ograniczonym budżetem — W domu o powierzchni ok. 150 m² zmiana ścian nienośnych na rozstaw 60 cm może zaoszczędzić 2 000–4 000 zł na samym drewnie.",
    ],
    when24Summary:
      "Podsumowanie: rozstaw 60 cm to mądry wybór tam, gdzie normy na to pozwalają, zwłaszcza dla ścian nienośnych i wiązarów prefabrykowanych.",

    codeHeading: "Wymagania norm i przepisów budowlanych",
    codeIntro:
      "Polskie Prawo budowlane, warunki techniczne (WT) oraz normy PN-EN określają, kiedy poszczególne rozstawy są dozwolone. Oto kluczowe odniesienia:",
    codeItems: [
      "PN-EN 1995-1-1 (Eurokod 5) — Projektowanie konstrukcji drewnianych. Określa zasady wymiarowania elementów szkieletowych w zależności od rozstawu, klasy drewna i obciążeń.",
      "Warunki techniczne (WT 2021) — Rozporządzenie w sprawie warunków technicznych, jakim powinny odpowiadać budynki i ich usytuowanie. Określa wymagania izolacyjności termicznej i ppoż.",
      "PN-EN 338 — Klasy wytrzymałości drewna konstrukcyjnego (C16, C24, C30). Tablice rozpiętości zależą od klasy drewna i rozstawu elementów.",
      "PN-EN 14081 — Drewno konstrukcyjne sortowane wytrzymałościowo. Wymagania dotyczące oznaczenia CE drewna stosowanego w konstrukcjach.",
      "PN-EN 520 — Płyty gipsowo-kartonowe. Płyty g-k 12,5 mm na ścianach do rozstawu 60 cm; płyty 15 mm wymagane na sufitach przy rozstawie 60 cm.",
      "Lokalne warunki zabudowy i projekty budowlane mogą narzucać dodatkowe wymagania. Zawsze konsultuj się z projektantem konstrukcji przed finalizacją rozstawów.",
    ],
    codeSummary:
      "Ważne: normy budowlane określają wymagania minimalne. Projektant konstrukcji może wymagać mniejszych rozstawów na podstawie warunków terenowych, strefy wiatrowej czy obciążenia śniegiem.",

    costHeading: "Porównanie kosztów: rozstaw 40 cm vs 60 cm",
    costIntro:
      "Oszczędność materiałowa to jeden z głównych powodów, dla których wykonawcy rozważają rozstaw 60 cm. Oto jak wyglądają liczby:",
    costText1:
      "Dla standardowej ściany o wysokości 2,8 m rozstaw 40 cm wymaga jednego słupka co 40 cm — około 2,5 słupka na metr bieżący ściany. Przy 60 cm potrzebujesz około 1,7 słupka na metr bieżący. To redukcja o 33% liczby słupków.",
    costText2:
      "W typowym domu szkieletowym o powierzchni ok. 150 m² z ~50 metrami bieżącymi ścian działowych, zmiana z 40 cm na 60 cm oszczędza około 40 słupków. Przy cenie 20–30 zł za słupek KVH 4×10×280 cm (ceny 2025), to 800–1 200 zł samych słupków. Uwzględniając mniej łączników i mniejszą ilość robocizny, oszczędność sięga 2 000–4 000 zł.",
    costText3:
      "Jednak nie stosuj rozstawu 60 cm tylko po to, by zaoszczędzić na ścianach nośnych. Koszt awarii konstrukcyjnej lub niezgodności z projektem wielokrotnie przewyższa wszelkie oszczędności materiałowe. Oszczędności dotyczą wyłącznie miejsc, gdzie 60 cm jest zgodne z projektem i normami.",

    impactHeading: "Wpływ na inne materiały",
    impactIntro:
      "Rozstaw konstrukcji nie wpływa tylko na drewno. Ma efekt domina na wiele systemów budowlanych:",
    impactInsulationHeading: "Izolacja termiczna",
    impactInsulationText:
      "Maty z wełny mineralnej (Rockwool Frontrock, Isover Uni-Mata) są dostępne w szerokościach dopasowanych zarówno do rozstawu 40 cm, jak i 60 cm. Przy 40 cm standardowa mata ma szerokość ok. 38 cm, przy 60 cm — ok. 58 cm. Szersze pola przy rozstawie 60 cm faktycznie poprawiają ochronę termiczną, ponieważ mniej słupków pełni rolę mostków termicznych. W konstrukcji zoptymalizowanej ze słupkami 6×14 cm w rozstawie 60 cm można osiągnąć ściany o U=0,15 W/(m²·K) z samą wełną mineralną.",
    impactDrywallHeading: "Płyty gipsowo-kartonowe",
    impactDrywallText:
      "Standardowe płyty g-k 12,5 mm (Rigips, Knauf) sprawdzają się na ścianach zarówno przy rozstawie 40 cm, jak i 60 cm. Jednak na sufitach przy rozstawie 60 cm wymagane są płyty 15 mm, aby zapobiec ugięciu. Płyty 15 mm kosztują ok. 20–30% więcej za arkusz niż 12,5 mm, co częściowo niweluje oszczędności na konstrukcji.",
    impactSheathingHeading: "Poszycie i okładziny",
    impactSheathingText:
      "Płyty OSB 125×250 cm działają przy obu rozstawach, ponieważ ich krawędzie trafiają na elementy konstrukcyjne. Jednak przy rozstawie 60 cm płyta rozciąga się na większą nieobsługiwaną odległość między słupkami. Dla poszycia usztywniającego (np. ściana usztywniająca) należy sprawdzić, czy klasa płyty odpowiada rozstawowi słupków. Płyty OSB/3 lub OSB/4 są zalecane przy rozstawie 60 cm dla zastosowań konstrukcyjnych.",

    calculatorCtaHeading: "Oblicz swoje materiały",
    calculatorCtaText:
      "Skorzystaj z naszych darmowych kalkulatorów, aby uzyskać dokładne ilości materiałów dla Twojego projektu przy rozstawie 40 cm lub 60 cm:",
    calculatorLinks: [
      {
        label: "Kalkulator słupków",
        href: "/calculators/wall-framing/stud-calculator",
        description: "Oblicz liczbę słupków potrzebnych dla dowolnej długości ściany i rozstawu.",
      },
      {
        label: "Kalkulator belek stropowych",
        href: "/calculators/floor-framing/floor-joist-calculator",
        description: "Określ liczbę belek, rozstaw i deskę obwodową dla Twojego stropu.",
      },
      {
        label: "Kalkulator krokwi",
        href: "/calculators/roofing/rafter-calculator",
        description: "Oblicz krokwie potrzebne na podstawie rozpiętości dachu, rozstawu i spadku.",
      },
      {
        label: "Kalkulator wiązarów dachowych",
        href: "/calculators/roofing/roof-truss-calculator",
        description: "Oszacuj liczbę wiązarów i rozstaw dla Twojego systemu dachowego.",
      },
    ],

    faqHeading: "Najczęściej zadawane pytania",
    faqs: [
      {
        question: "Czy mogę stosować rozstaw 60 cm dla ścian zewnętrznych?",
        answer:
          "Tak, ale tylko ze słupkami o większym przekroju (np. 6×14 cm lub 6×16 cm) i odpowiednim poszyciem usztywniającym zgodnym z projektem. Norma PN-EN 1995-1-1 dopuszcza takie rozwiązanie przy spełnieniu wymagań nośności i sztywności. Zawsze weryfikuj z projektantem konstrukcji i lokalnym nadzorem budowlanym.",
      },
      {
        question: "Czy rozstaw 40 cm czy 60 cm jest lepszy do montażu szafek?",
        answer:
          "Rozstaw 40 cm jest lepszy do instalacji szafek, ponieważ zapewnia więcej punktów mocowania. Przy słupkach co 40 cm szafka wisząca o szerokości 80 cm trafi w co najmniej dwa słupki. Przy 60 cm wąska szafka może trafić tylko w jeden słupek, wymagając dodatkowych wzmocnień lub kołków rozporowych.",
      },
      {
        question: "Co oznacza rozstaw osiowy w budownictwie?",
        answer:
          "Rozstaw osiowy (c/c lub o.s.) oznacza odległość mierzoną od osi jednego elementu konstrukcyjnego do osi sąsiedniego elementu. Dla słupków w rozstawie 40 cm oś każdego słupka znajduje się 40 cm od osi następnego. Ta standaryzowana miara zapewnia spójny rozstaw i kompatybilność z materiałami płytowymi o wymiarach 125 cm i 250 cm.",
      },
      {
        question: "Ile pieniędzy oszczędza rozstaw 60 cm?",
        answer:
          "Zmiana z 40 cm na 60 cm na ścianach nienośnych oszczędza około 33% materiału na słupkach. Dla typowego domu szkieletowego o powierzchni ok. 150 m² przekłada się to na 2 000–4 000 zł łącznych oszczędności na drewnie, łącznikach i robociźnie. Dokładna kwota zależy od lokalnych cen drewna KVH i stawek robocizny.",
      },
      {
        question: "Czy mogę stosować płyty g-k 12,5 mm na suficie przy rozstawie 60 cm?",
        answer:
          "Nie jest to zalecane. Przy rozstawie 60 cm na sufitach wymagane są płyty gipsowo-kartonowe o grubości 15 mm, aby zapobiec ugięciu. Płyty 12,5 mm przy tym rozstawie z czasem się wyginą, zwłaszcza w warunkach podwyższonej wilgotności. Na ścianach płyty 12,5 mm są dopuszczalne przy rozstawie 60 cm.",
      },
      {
        question: "Czym jest zoptymalizowana konstrukcja szkieletowa?",
        answer:
          "Zoptymalizowana konstrukcja szkieletowa to technika wykorzystująca słupki 6×14 cm w rozstawie 60 cm z pojedynczymi oczepami, narożnikami dwusłupkowymi i blokadami drabinkowymi. Zmniejsza zużycie drewna nawet o 30%, jednocześnie umożliwiając grubszą izolację (lambda 0,035 na pełną grubość ściany). Jest uznawana przez normy europejskie i promowana w budownictwie energooszczędnym i pasywnym.",
      },
      {
        question: "Czy wiązary dachowe stosują rozstaw 40 cm czy 60 cm?",
        answer:
          "Większość prefabrykowanych wiązarów dachowych jest projektowana pod rozstaw 60 cm. Producent wiązarów oblicza każdy wiązar tak, aby przenosił wymagane obciążenia przy zadanym rozstawie. Jednak w strefach z dużym obciążeniem śniegiem (powyżej 1,5 kN/m²) projektant może określić rozstaw 40 cm.",
      },
      {
        question: "Czy rozstaw słupków wpływa na efektywność energetyczną?",
        answer:
          "Tak. Słupki drewniane stanowią mostki termiczne, przewodząc ciepło przez przegrodę ściany. Przy rozstawie 40 cm słupki stanowią ok. 25% powierzchni ściany, obniżając efektywną wartość U. Przy rozstawie 60 cm słupki zajmują tylko ok. 17% powierzchni, co poprawia wartość U całej ściany. W połączeniu ze słupkami 6×14 cm rozstaw 60 cm może poprawić efektywność energetyczną ściany o 15–20%.",
      },
    ],
  },
  roofPitchChart: {
    title: "Tabela spadków dachu: kompletny przewodnik",
    metaDescription:
      "Tabela spadków dachu ze stopniami, procentami nachylenia i mnożnikami dla każdego spadku od 5° do 45°. Dowiedz się, jaki spadek jest najlepszy dla Twojego materiału pokryciowego, klimatu i budżetu.",

    heroTitle: "Tabela spadków dachu",
    heroSubtitle: "Kompletny przewodnik",
    heroDescription:
      "Pełna tabela referencyjna obejmująca każdy standardowy spadek dachu od 5° do 45°, z przelicznikami na procenty, mnożnikami powierzchni i wskazówkami dotyczącymi materiałów i klimatu.",

    quickRefHeading: "Tabela spadków dachu — szybki podgląd",
    quickRefSubheading:
      "Wszystkie typowe spadki dachu z ich odpowiednikami w stopniach, procentami nachylenia i mnożnikami powierzchni. Mnożnik mówi, o ile większa jest powierzchnia dachu w porównaniu z rzutem poziomym.",
    quickRefColPitch: "Spadek (wzn.:bieg)",
    quickRefColDegrees: "Stopnie",
    quickRefColSlope: "Nachylenie %",
    quickRefColMultiplier: "Mnożnik",
    quickRefColDescription: "Opis",
    quickRefRows: [
      { pitch: "1:12", degrees: "4,76°", slopePercent: "8,3%", multiplier: "1,003", description: "Prawie płaski — tylko membrana lub papa" },
      { pitch: "2:12", degrees: "9,46°", slopePercent: "16,7%", multiplier: "1,014", description: "Niski spadek — min. dla gontu z pełnym podkładem" },
      { pitch: "3:12", degrees: "14,04°", slopePercent: "25,0%", multiplier: "1,031", description: "Niski spadek — blacha trapezowa, papa modyfikowana" },
      { pitch: "4:12", degrees: "18,43°", slopePercent: "33,3%", multiplier: "1,054", description: "Standardowe minimum dla gontu bitumicznego" },
      { pitch: "5:12", degrees: "22,62°", slopePercent: "41,7%", multiplier: "1,083", description: "Popularny spadek mieszkaniowy — dobry odpływ wody" },
      { pitch: "6:12", degrees: "26,57°", slopePercent: "50,0%", multiplier: "1,118", description: "Najpopularniejszy spadek w budownictwie jednorodzinnym" },
      { pitch: "7:12", degrees: "30,26°", slopePercent: "58,3%", multiplier: "1,158", description: "Umiarkowanie stromy — styl dworkowy i klasyczny" },
      { pitch: "8:12", degrees: "33,69°", slopePercent: "66,7%", multiplier: "1,202", description: "Górna granica standardowych spadków" },
      { pitch: "9:12", degrees: "36,87°", slopePercent: "75,0%", multiplier: "1,250", description: "Stromy — dobre zsuwanie się śniegu" },
      { pitch: "10:12", degrees: "39,81°", slopePercent: "83,3%", multiplier: "1,302", description: "Stromy — wymaga dodatkowych zabezpieczeń" },
      { pitch: "11:12", degrees: "42,51°", slopePercent: "91,7%", multiplier: "1,357", description: "Bardzo stromy — styl alpejski, gotycki" },
      { pitch: "12:12", degrees: "45,00°", slopePercent: "100,0%", multiplier: "1,414", description: "Kąt 45° — maksymalny typowy spadek" },
    ],

    readingHeading: "Jak czytać oznaczenia spadku dachu",
    readingText1:
      "Spadek dachu wyraża się jako stosunek wzniesienia pionowego do biegu poziomego. Gdy widzisz «6:12», oznacza to, że dach wznosi się o 6 jednostek na każde 12 jednostek odległości poziomej. W Polsce częściej stosuje się stopnie (np. 30°) lub procenty (np. 50%). Spadek 6:12 odpowiada ok. 26,6° lub 50%.",
    readingText2:
      "Możesz przeliczyć dowolny spadek na stopnie za pomocą wzoru: stopnie = arctan(wzniesienie / bieg). Dla spadku 6:12 to arctan(6/12) = 26,57°. Procent nachylenia to po prostu (wzniesienie / bieg) × 100, więc spadek 6:12 ma nachylenie 50%.",
    readingText3:
      "Mnożnik powierzchni oblicza się jako pierwiastek kwadratowy z (1 + (wzniesienie/bieg)²). Liczba ta mówi, ile materiału pokryciowego potrzebujesz w porównaniu z rzutem poziomym budynku. Dach o spadku 6:12 wymaga 11,8% więcej materiału niż rzut, a dach 12:12 wymaga 41,4% więcej.",

    lowSlopeHeading: "Niskie spadki (5°–15°)",
    lowSlopeIntro:
      "Dachy niskonachyleniowe są powszechne w budynkach komercyjnych, nowoczesnych projektach mieszkaniowych i dobudowach jak werandy i wiaty. Wymagają szczególnej uwagi na hydroizolację, ponieważ woda spływa wolno.",
    lowSlopeItems: [
      "Spadek ok. 5° (1:12) — Absolutne minimum dla każdego dachu. Wymaga ciągłej membrany dachowej (PVC, EPDM) lub papy termozgrzewalnej. Blacha na rąbek stojący z uszczelnionymi łączeniami jest również dopuszczalna przy tym spadku.",
      "Spadek ok. 10° (2:12) — Minimalny spadek, przy którym można kłaść gont bitumiczny, ale tylko z pełną warstwą membrany samoprzylepnej na całym poszyciu. Większość producentów gontu honoruje gwarancję przy tym spadku z odpowiednim podkładem.",
      "Spadek ok. 15° (3:12) — Blacha trapezowa i panele dachowe z widocznymi łącznikami mogą być stosowane od tego spadku. Papa modyfikowana jest również odpowiednia. Odpływ wody jest nadal wolny, dlatego zalecany jest podkład wysokiej jakości.",
      "Materiały na dachy niskonachyleniowe kosztują więcej ze względu na dodatkowe wymagania hydroizolacyjne. Budżetuj dodatkowe 20–50 zł/m² na uszczelnienie na dachach poniżej 18°.",
      "Odpływ wody to główny problem. Stojąca woda może się gromadzić, jeśli spadek jest zbyt niski lub konstrukcja ugina się pod obciążeniem. Zastoje wodne unieważniają większość gwarancji pokryciowych.",
    ],
    lowSlopeSummary:
      "Dachy niskonachyleniowe są ekonomiczne do pokrywania dużych powierzchni, ale wymagają premium hydroizolacji. Zawsze stosuj materiały przystosowane do konkretnego spadku.",

    standardHeading: "Spadki standardowe (18°–34°)",
    standardIntro:
      "Zakres 18° do 34° obejmuje zdecydowaną większość dachów mieszkalnych w Polsce. Te spadki zapewniają dobry odpływ wody, współpracują z niemal wszystkimi materiałami pokryciowymi i umożliwiają bezpieczne chodzenie po dachu.",
    standardItems: [
      "Spadek 18° (4:12) — Standardowe minimum dla gontu bitumicznego bez specjalnego podkładu. Większość norm i producentów gontu określa 18° jako minimalny spadek dla standardowego montażu z podkładem z papy lub membrany syntetycznej.",
      "Spadek ~23° (5:12) — Popularny wybór dla domów parterowych. Zapewnia doskonały odpływ wody przy zachowaniu stosunkowo niskiego profilu dachu. Dekarze mogą chodzić po tym spadku bez specjalnego sprzętu.",
      "Spadek ~27° (6:12) — Najpopularniejszy spadek dachu mieszkalnego. Zapewnia dobrą równowagę między estetyką, odpływem wody a przestrzenią poddasza. Niemal wszystkie materiały pokryciowe działają dobrze pod tym kątem.",
      "Spadki 30°–34° (7:12 i 8:12) — Powszechne w domach o stylu tradycyjnym i dworkowym. Tworzą bardziej wyrazistą linię dachu i zapewniają przestrzeń na poddasze użytkowe. Dekarze mogą zacząć stosować ławy kominiarskie przy 34°.",
      "Ubezpieczenia i wartość nieruchomości — Dachy o standardowych spadkach są preferowane przez ubezpieczycieli, ponieważ skutecznie odprowadzają wodę i zanieczyszczenia. Domy ze spadkami 23°–30° mają najniższe koszty utrzymania dachu.",
    ],
    standardSummary:
      "Spadki standardowe to optymalne rozwiązanie: kompatybilne ze wszystkimi popularnymi materiałami, łatwe w obsłudze i ekonomiczne.",

    steepHeading: "Spadki strome (35°–45°)",
    steepIntro:
      "Strome dachy spotyka się na domach górskich, zabytkowych willach, kościołach i budynkach w rejonach obfitych opadów śniegu. Szybko odprowadzają śnieg i deszcz, ale są droższe w budowie i utrzymaniu.",
    steepItems: [
      "Spadki 35°–40° (9:12 i 10:12) — Popularne w górach i na Podhalu. Stromy kąt zapobiega gromadzeniu się ciężkiego śniegu, zmniejszając ryzyko zalegania i przeciążenia konstrukcji. Śnieg ześlizguje się szybko, dlatego często wymagane są bariery śniegowe chroniące chodniki i wejścia.",
      "Spadki 42°–45° (11:12 i 12:12) — Stosowane dla efektu architektonicznego w domach typu A-frame, willach w stylu alpejskim i stromych akcenty szczytowych. Spadek 45° tworzy idealny kąt 45°. Na tych dachach nie da się chodzić — wymagają rusztowań i uprzęży.",
      "Wpływ na koszty — Strome dachy zużywają znacznie więcej materiału (dach 45° ma 41,4% więcej powierzchni niż rzut) i wymagają więcej robocizny ze względu na sprzęt bezpieczeństwa. Spodziewaj się 20–50% wyższych kosztów pokrycia stromego dachu w porównaniu z tym samym rzutem przy spadku standardowym.",
      "Materiały pokryciowe — Gont bitumiczny, łupek, dachówka ceramiczna (np. Röben, Creaton) i gonty drewniane doskonale sprawdzają się na stromych dachach. Te materiały wyglądają najlepiej i służą najdłużej na stromych dachach, ponieważ woda szybko odpływa. Blacha na rąbek stojący jest również doskonałym rozwiązaniem.",
      "Odporność na wiatr — Strome dachy łapią więcej wiatru. W strefach narażonych na silne wiatry strome spadki mogą wymagać wzmocnionych mocowań i klipsów wiatrowych. Sprawdź lokalne strefy wiatrowe przed określeniem spadku powyżej 34° w rejonach nadmorskich.",
    ],
    steepSummary:
      "Strome spadki doskonale odprowadzają opady i zapewniają efektowny wygląd, ale wiążą się z wyższymi kosztami materiałów i robocizny.",

    costHeading: "Jak spadek wpływa na koszty pokrycia dachu",
    costIntro:
      "Spadek dachu bezpośrednio wpływa na całkowity koszt projektu dachowego na trzy sposoby: ilość materiałów, trudność robocizny i współczynnik odpadów.",
    costText1:
      "Ilość materiałów rośnie ze spadkiem, ponieważ stromszy dach ma większą powierzchnię. Użyj mnożnika z powyższej tabeli, aby oszacować rzeczywistą powierzchnię dachu. Na przykład budynek o rzucie 140 m² i spadku 27° (6:12) ma 140 × 1,118 = 156,5 m² rzeczywistej powierzchni dachu. Przy spadku 45° (12:12) ten sam rzut daje 140 × 1,414 = 198 m² — dodatkowe 42 m² materiału.",
    costText2:
      "Koszty robocizny rosną gwałtownie powyżej spadku 34°. Ekipy dekarskie potrzebują specjalistycznego sprzętu bezpieczeństwa (uprzęże, ławy kominiarskie, rusztowania), a tempo montażu spada o 25–40%. Większość firm dekarskich dolicza dopłatę za strome dachy powyżej 34°, zwykle 30–80 zł/m².",
    costText3:
      "Współczynnik odpadów również rośnie na stromych i złożonych dachach. Koszyki, narożniki i kalenice na stromych dachach generują więcej odcinków. Budżetuj 10–15% odpadów dla spadków standardowych i 15–20% dla stromych lub złożonych geometrii dachowych.",

    materialHeading: "Zalecany spadek wg materiału pokryciowego",
    materialIntro:
      "Każdy materiał pokryciowy ma minimalny i optymalny zakres spadku. Stosowanie odpowiedniego materiału do spadku zapewnia prawidłowy odpływ, ochronę gwarancyjną i maksymalną żywotność.",
    materialItems: [
      "Gont bitumiczny — Min. 18° (10° z pełną membraną podkładową). Optymalnie 18°–45°. Najpopularniejsze i najbardziej ekonomiczne pokrycie mieszkaniowe.",
      "Blacha na rąbek stojący — Min. 5° (z uszczelnionymi łączeniami). Optymalnie 15°–45°. Doskonała dla niskich i stromych spadków. Panele rozszerzają się i kurczą z temperaturą, więc rąbki stojące umożliwiają ruch termiczny. Popularne marki: Ruukki, Lindab, Blachy Pruszyński.",
      "Blacha trapezowa (widoczne łączniki) — Min. 15°. Optymalnie 15°–34°. Tańsza niż rąbek stojący, ale nieodpowiednia dla niskich spadków ze względu na widoczne penetracje śrub.",
      "Dachówka ceramiczna i cementowa — Min. 22° (niektórzy producenci wymagają 25°). Optymalnie 22°–45°. Ciężki materiał wymagający odpowiedniej konstrukcji dachu. Doskonała trwałość. Popularne marki: Röben, Creaton, Koramic, Braas.",
      "Łupek naturalny — Min. 22°. Optymalnie 27°–45°. Najtrwalsze pokrycie dachowe (100+ lat), ale bardzo ciężkie. Strome spadki eksponują łupek pięknie.",
      "Gonty drewniane — Min. 22°. Optymalnie 22°–45°. Wymagają odpowiedniej wentylacji. Często stosowane na domach górskich i regionalnych.",
      "Membrany (PVC, EPDM, TPO) — Min. 1,5° (¼:12). Optymalnie 1,5°–15°. Przeznaczone specjalnie dla dachów płaskich i niskonachyleniowych. Niestosowane na stromych spadkach. Marki: Sika, Firestone, Icopal.",
      "Papa termozgrzewalna — Min. 3° (0,5:12). Optymalnie 1,5°–15°. Wielowarstwowa izolacja z asfaltu i włókniny. Popularna na dachach płaskich. Marki: Icopal, Izolbet, SBS Modyfikowana.",
    ],

    climateHeading: "Najlepszy spadek dachu wg klimatu",
    climateIntro:
      "Klimat odgrywa kluczową rolę w określaniu idealnego spadku dachu. Oto jak dopasować spadek do lokalnych warunków pogodowych w Polsce:",
    climateItems: [
      "Regiony z dużymi opadami śniegu (góry, Podhale, Bieszczady, strefa śniegowa IV–V) — Stosuj spadki 35°–45°, aby śnieg zsuwał się, zanim nagromadzi się do niebezpiecznych poziomów. Zainstaluj bariery śniegowe do kontrolowania zrzutu śniegu. Strome spadki zmniejszają ryzyko zatorów lodowych.",
      "Umiarkowane opady śniegu (Polska centralna, strefa II–III) — Stosuj spadki 27°–35°. Zapewniają dobre zsuwanie się śniegu bez dodatkowego kosztu bardzo stromej konstrukcji. Odpowiednia wentylacja poddasza jest kluczowa dla zapobiegania zatorom lodowym.",
      "Regiony z dużymi opadami deszczu (Polska zachodnia, Kaszuby) — Stosuj spadki 23°–34° dla szybkiego odpływu wody. Wybieraj materiały odporne na wilgoć jak blacha lub dachówka ceramiczna. Upewnij się, że rynny i rury spustowe obsłużą szczytowe natężenie przepływu.",
      "Klimat suchy i ciepły — Stosuj spadki 15°–23°. Niższe spadki zmniejszają ilość eksponowanej powierzchni dachu, obniżając nagrzewanie. Blacha w jasnych kolorach lub dachówka ceramiczna sprawdza się najlepiej.",
      "Strefa wiatrowa (Wybrzeże Bałtyku, tereny otwarte) — Stosuj spadki 18°–27°. Dachy czterospadowe (kopertowe) o umiarkowanych spadkach najlepiej znoszą silne wiatry. Unikaj stromych szczytów, które łapią wiatr jak żagiel.",
      "Klimat mieszany (większość Polski) — Stosuj spadki 23°–30° jako uniwersalny wybór obsługujący deszcz, umiarkowany śnieg i wiatr. Ten zakres jest najczęstszy w polskim budownictwie jednorodzinnym.",
    ],

    calculatorCtaHeading: "Oblicz materiały dachowe",
    calculatorCtaText:
      "Skorzystaj z naszych darmowych kalkulatorów dachowych, aby oszacować materiały na podstawie spadku, powierzchni i wybranego materiału:",
    calculatorLinks: [
      {
        label: "Kalkulator spadku dachu",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Przelicz między współczynnikiem spadku, stopniami a procentem nachylenia.",
      },
      {
        label: "Kalkulator powierzchni dachu",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Oblicz rzeczywistą powierzchnię dachu z rzutu i spadku.",
      },
      {
        label: "Kalkulator nachylenia dachu",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Określ współczynnik nachylenia i mnożnik materiałowy dla dowolnego spadku.",
      },
      {
        label: "Kalkulator krokwi",
        href: "/calculators/roofing/rafter-calculator",
        description: "Oblicz długość, liczbę i drewno krokwi dla Twojego systemu dachowego.",
      },
    ],

    faqHeading: "Najczęściej zadawane pytania",
    faqs: [
      {
        question: "Ile stopni ma spadek 4:12?",
        answer:
          "Spadek dachu 4:12 odpowiada 18,43°. Oblicza się go za pomocą arctangensa: arctan(4/12) = 18,43°. Spadek 4:12 to standardowy minimalny kąt dla gontu bitumicznego montowanego z konwencjonalnym podkładem.",
      },
      {
        question: "Jaki jest standardowy spadek dachu w domu jednorodzinnym?",
        answer:
          "Najpopularniejszy spadek dachu mieszkalnego w Polsce to 30°–45° dla dachów z dachówką ceramiczną lub cementową i 15°–25° dla dachów z blachy. Spadki między 18° a 34° są uważane za standardowe w budownictwie mieszkaniowym. Dokładny spadek zależy od stylu architektonicznego, klimatu i materiału pokryciowego.",
      },
      {
        question: "Do czego służy tabela kątów spadku dachu?",
        answer:
          "Tabela spadku dachu przelicza współczynniki spadku (np. 6:12) na stopnie, procenty nachylenia i mnożniki powierzchni. Budowniczowie używają jej do: określenia odpowiedniego materiału pokryciowego dla danego spadku, obliczenia rzeczywistej powierzchni dachu do zamówienia materiałów oraz weryfikacji zgodności z normami budowlanymi i wymaganiami producenta.",
      },
      {
        question: "Jak zmierzyć spadek dachu z poziomu gruntu?",
        answer:
          "Spadek dachu możesz oszacować z poziomu gruntu, przystawiając kątomierz do krawędzi dachu z drabiny. Alternatywnie, mierz z wnętrza poddasza: przyłóż poziomicę poziomo do krokwi, odmierz 30 cm wzdłuż poziomnicy, a następnie zmierz odległość pionową od tego punktu do krokwi. Ta odległość pozwoli obliczyć kąt.",
      },
      {
        question: "Jaki spadek dachu jest uznawany za dach płaski?",
        answer:
          "Każdy dach o spadku poniżej 10° (ok. 2:12) jest ogólnie klasyfikowany jako dach niskonachyleniowy lub płaski przez normy budowlane i producentów pokryć dachowych. Naprawdę płaskie dachy nadal mają niewielki spadek (zwykle 1,5°–3°), aby umożliwić odpływ wody do rur spustowych lub wpustów dachowych.",
      },
      {
        question: "Czy spadek dachu wpływa na składkę ubezpieczeniową?",
        answer:
          "Tak. Ubezpieczyciele uwzględniają spadek dachu przy kalkulacji składek. Spadki standardowe (18°–34°) zazwyczaj otrzymują najniższe stawki, ponieważ skutecznie odprowadzają wodę bez nadmiernej ekspozycji na wiatr. Bardzo niskie spadki mogą zwiększyć składkę ze względu na ryzyko przecieków, a bardzo strome — z powodu wyższych kosztów wymiany i podatności na wiatr.",
      },
    ],
  },

  minimumRoofPitch: {
    title: "Minimalny spadek dachu dla gontu, blachy i dachówki",
    metaDescription:
      "Znajdź minimalny spadek dachu dla gontu bitumicznego (10° z podkładem, 18° standard), blachy (5°), dachówki ceramicznej (22°) i więcej. Zawiera odniesienia do norm PN-EN i rozwiązania niskonachyleniowe.",

    heroTitle: "Minimalny spadek dachu",
    heroSubtitle: "dla gontu, blachy i dachówki",
    heroDescription:
      "Każdy materiał pokryciowy ma minimalny wymagany spadek określony przez normy budowlane i producentów. Montaż materiału poniżej minimalnego spadku unieważnia gwarancję, narusza przepisy i prowadzi do przecieków. Ten poradnik obejmuje wymagania minimalne dla każdego popularnego materiału.",

    quickAnswerHeading: "Szybka odpowiedź",
    quickAnswerText:
      "Minimalny spadek dachu dla standardowego gontu bitumicznego to 18° (4:12). Z pełną membraną samoprzylepną pokrywającą całe poszycie dachowe większość producentów dopuszcza gont do 10° (2:12). Blacha na rąbek stojący może być stosowana od 5° (1:12), a systemy membranowe (PVC, EPDM) od ok. 1,5°.",

    materialTableHeading: "Minimalny spadek dachu wg materiału",
    materialTableSubheading:
      "Tabela przedstawia standardowy spadek minimalny, absolutne minimum z dodatkowymi zabezpieczeniami i kluczowe uwagi dla każdego materiału pokryciowego.",
    materialTableColMaterial: "Materiał pokryciowy",
    materialTableColStandardMin: "Min. standardowy",
    materialTableColAbsoluteMin: "Min. absolutny",
    materialTableColNotes: "Uwagi",
    materialTableRows: [
      {
        material: "Gont bitumiczny (tradycyjny)",
        standardMin: "18° (4:12)",
        absoluteMin: "10° (2:12)",
        notes: "10° wymaga podwójnej membrany samoprzylepnej na całym poszyciu. Gwarancja obowiązuje tylko z zatwierdzonym podkładem.",
      },
      {
        material: "Gont wielowarstwowy (architektoniczny)",
        standardMin: "18° (4:12)",
        absoluteMin: "10° (2:12)",
        notes: "Te same wymagania podkładu co gont tradycyjny. Większa masa zapewnia lepszą odporność na wiatr.",
      },
      {
        material: "Blacha na rąbek stojący",
        standardMin: "15° (3:12)",
        absoluteMin: "5° (1:12)",
        notes: "Przy 5°–10° łączenia muszą być uszczelnione mechanicznie. Rąbek wodoszczelny zalecany poniżej 15°. Marki: Ruukki, Lindab, Blachy Pruszyński.",
      },
      {
        material: "Blacha trapezowa (widoczne łączniki)",
        standardMin: "15° (3:12)",
        absoluteMin: "15° (3:12)",
        notes: "Penetracje śrub czynią te panele nieodpowiednimi poniżej 15°. Podkładki uszczelniające kluczowe przy wszystkich spadkach.",
      },
      {
        material: "Dachówka ceramiczna",
        standardMin: "22° (4:12+)",
        absoluteMin: "22°",
        notes: "Niektórzy producenci (Röben, Creaton) wymagają 25°. Membrana podkładowa pod dachówkami wymagana we wszystkich przypadkach.",
      },
      {
        material: "Dachówka cementowa (Braas)",
        standardMin: "22° (4:12+)",
        absoluteMin: "22°",
        notes: "Podobna do ceramicznej. Duża masa (45–55 kg/m²) wymaga odpowiedniej konstrukcji więźby.",
      },
      {
        material: "Łupek naturalny",
        standardMin: "22° (4:12)",
        absoluteMin: "22°",
        notes: "Materiał premium. Bardzo ciężki. Wymaga wykwalifikowanych dekarzy i wzmocnionej więźby.",
      },
      {
        material: "Gonty drewniane (wióry)",
        standardMin: "22° (4:12)",
        absoluteMin: "22°",
        notes: "Wymagają odstępów między gontami dla wentylacji. Stosowane głównie w budownictwie regionalnym i górskim.",
      },
      {
        material: "Papa termozgrzewalna",
        standardMin: "1,5° (0,25:12)",
        absoluteMin: "1,5° (0,25:12)",
        notes: "Wielowarstwowa z asfaltu i włókniny zbrojącej. Standard dla dachów płaskich. Marki: Icopal, Izolbet.",
      },
      {
        material: "Membrana PVC / EPDM / TPO",
        standardMin: "1,5° (0,25:12)",
        absoluteMin: "1,5° (0,25:12)",
        notes: "Membrany jednowarstwowe ze zgrzewanymi lub klejonym łączeniami. Standard dla dachów płaskich. Marki: Sika, Firestone.",
      },
      {
        material: "Papa modyfikowana SBS",
        standardMin: "3° (0,5:12)",
        absoluteMin: "1,5° (0,25:12)",
        notes: "Zgrzewana palnikiem lub samoprzylepna. Popularna na dachach niskonachyleniowych dobudów, werand i garaży.",
      },
    ],

    whyMinHeading: "Dlaczego minimalny spadek ma znaczenie",
    whyMinIntro:
      "Specyfikacja minimalnego spadku nie jest przypadkowa. Istnieje, ponieważ każdy materiał pokryciowy polega na grawitacji do odprowadzenia wody z dachu, zanim zdoła ona przeniknąć przez łączenia, zakłady i otwory po łącznikach. Oto dlaczego ma to znaczenie:",
    whyMinItems: [
      "Infiltracja wody — Poniżej minimalnego spadku woda porusza się zbyt wolno po powierzchni dachu. Może wnikać pod gonty przez zjawisko podciągania kapilarnego, przenikać wokół otworów po gwoździach i przedostawać się w zakłady. Nawet niewielka infiltracja powoduje gnicie, pleśń i uszkodzenia konstrukcyjne.",
      "Ochrona gwarancyjna — Każdy producent pokryć dachowych określa minimalny spadek w instrukcjach montażowych. Montaż poniżej tego spadku unieważnia gwarancję całkowicie. W przypadku przecieku producent odrzuci reklamację, a właściciel ponosi pełny koszt naprawy.",
      "Zgodność z przepisami — Prawo budowlane i normy PN-EN odwołują się do wymagań producenta. Dach zamontowany poniżej minimalnego spadku nie przejdzie odbioru i może wymagać zerwania i ponownego montażu na koszt inwestora.",
      "Zapobieganie zatorom lodowym — W polskim klimacie dachy niskonachyleniowe są bardziej podatne na zatoki lodowe. Topniejąca woda z górnych partii dachu zamarza na okapach, tworząc tamę wymuszającą wnikanie wody pod pokrycie. Stromsze spadki pomagają wodzie opuścić dach przed zamarzaniem.",
      "Skutki ubezpieczeniowe — Polisy ubezpieczeniowe mogą wyłączać pokrycie szkód wodnych spowodowanych nieprawidłowym montażem pokrycia dachowego. Jeśli spadek jest poniżej minimalnych wymagań materiału, ubezpieczyciel może zakwalifikować to jako wadę istniejącą.",
    ],
    whyMinSummary:
      "Montaż pokrycia dachowego przy lub powyżej minimalnego spadku nie jest opcjonalny. Chroni gwarancję, spełnia wymagania przepisów i zapobiega uszkodzeniom wodnym, których naprawa kosztuje tysiące złotych.",

    codeHeading: "Wymagania norm budowlanych",
    codeIntro:
      "Normy budowlane i przepisy techniczne ustanawiają wymagania minimalnego spadku, aby chronić bezpieczeństwo mieszkańców i trwałość budynku. Oto kluczowe odniesienia:",
    codeItems: [
      "PN-EN 14782 (Blacha dachowa) — Określa minimalne spadki dla arkuszy i paneli metalowych. Blacha na rąbek od 5°, blacha trapezowa od 15°.",
      "PN-EN 1304 (Dachówka ceramiczna) — Minimalny spadek zależy od profilu dachówki. Dachówka płaska od 22°, dachówka karpiówka od 30°.",
      "PN-EN 490 (Dachówka cementowa) — Podobne wymagania jak ceramiczna. Producenci (np. Braas) mogą mieć surowsze wymagania.",
      "PN-EN 12326 (Łupek) — Minimalny spadek 22° dla standardowego montażu łupka. Wymaga łączników odpornych na korozję.",
      "PN-EN 13707 / PN-EN 13956 (Membrany, papy) — Minimalne spadki 1,5°–3° w zależności od typu systemu. Wymagany pozytywny spadek do odprowadzenia wody.",
      "Lokalne warunki zabudowy mogą narzucać surowsze wymagania. Zawsze weryfikuj wymagania projektowe i lokalne przepisy przed wyborem materiału pokryciowego.",
    ],
    codeSummary:
      "Normy budowlane to wymagania minimalne, nie najlepsze praktyki. Wielu profesjonalnych dekarzy zaleca spadki co najmniej o jeden stopień powyżej minimum normowego, aby zapewnić dodatkowy margines bezpieczeństwa przed deszczem napędzanym wiatrem.",

    belowMinHeading: "Co się dzieje poniżej minimalnego spadku",
    belowMinIntro:
      "Montaż pokrycia dachowego poniżej minimalnego spadku uruchamia kaskadę problemów narastających z czasem:",
    belowMinItems: [
      "Unieważniona gwarancja producenta — To najbardziej natychmiastowa konsekwencja. Producent nie ma obowiązku wymiany wadliwego materiału ani pokrycia kosztów robocizny, jeśli produkt został zamontowany poza specyfikacją.",
      "Chroniczne przecieki — Woda stoi na dachu dłużej i przenika przez łączenia, zakłady i otwory łączników. Przecieki mogą nie pojawić się natychmiast, ale rozwijają się w ciągu 2–5 lat, gdy uszczelnienia się degradują.",
      "Zatoki lodowe w klimacie polskim — Dachy niskonachyleniowe są wysoce podatne na zatoki lodowe, ponieważ śnieg topi się wolno i ponownie zamarza na okapach. Zatoki lodowe wymuszają wnikanie wody pod pokrycie do poszycia, powodując rozległe uszkodzenia.",
      "Pleśń i gnicie — Utrzymująca się wilgoć tworzy idealne warunki dla pleśni na poddaszu i gnicia poszycia oraz więźby dachowej. Remont i naprawa mogą kosztować 30 000–100 000 zł.",
      "Negatywny odbiór budowlany — Dach niespełniający wymagań minimalnego spadku nie przejdzie odbioru. Nadzór budowlany może wstrzymać prace i wymagać zerwania i ponownego montażu dachu, podwajając koszty projektu.",
      "Skrócona żywotność — Nawet przy niewielkich przeciekach pokrycia dachowe zamontowane poniżej minimalnego spadku degradują się szybciej. Gont bitumiczny na dachu o spadku 10° bez odpowiedniego podkładu może przetrwać zaledwie 8–10 lat zamiast 20–30.",
    ],
    belowMinSummary:
      "Nie ma dróg na skróty, jeśli chodzi o minimalny spadek. Koszt prawidłowego wykonania za pierwszym razem jest zawsze niższy niż koszt naprawy, wymiany i remediacji uszkodzeń wodnych.",

    solutionsHeading: "Rozwiązania dla dachów niskonachyleniowych",
    solutionsIntro:
      "Jeśli Twój dach ma spadek poniżej 18°, nadal masz kilka doskonałych opcji pokryciowych. Oto najbardziej niezawodne podejścia:",
    solutionsItems: [
      "Pełna membrana podkładowa — Dla spadków 10°–18° pokryj całe poszycie dachowe membraną samoprzylepną przed montażem gontu bitumicznego. Tworzy to wodoszczelną barierę wtórną chroniącą przed deszczem napędzanym wiatrem i podciąganiem kapilarnym. Koszt: ok. 30–60 zł/m² więcej niż standardowa papa podkładowa.",
      "Blacha na rąbek stojący — Panele z rąbkami mechanicznymi lub zatrzaskowymi działają od 5°. Podniesione rąbki utrzymują kanały wodne z dala od płaskiej powierzchni panelu. Wybieraj panele z rąbkiem min. 35 mm dla spadków poniżej 15°. To często najlepsza opcja dla dachów niskonachyleniowych. Dostępne w Castoramie i u producentów jak Ruukki.",
      "Systemy membranowe — Dla spadków poniżej 10° membrany PVC, EPDM lub TPO są standardem branżowym. Te membrany jednowarstwowe są zgrzewane ciepłem lub klejone, tworząc bezspoinową wodoszczelną powierzchnię. Popularne na budynkach komercyjnych i dobudowach mieszkalnych.",
      "Papa modyfikowana SBS — Zgrzewana palnikiem lub samoprzylepna papa modyfikowana zapewnia trwałą, wodoszczelną powierzchnię dla dachów niskonachyleniowych. Dobry wybór na werandy, wiaty i małe dobudowy. Wielowarstwowy układ zwiększa niezawodność hydroizolacji. Dostępna w Leroy Merlin i hurtowniach budowlanych.",
      "Modyfikacja konstrukcyjna — W niektórych przypadkach opłaca się zwiększyć spadek dachu, dodając nowe krokwie lub wiązary nad istniejącą konstrukcją. Pozwala to na stosowanie standardowych materiałów pokryciowych. Skonsultuj się z projektantem konstrukcji przed modyfikacją jakiejkolwiek więźby dachowej.",
      "Klin spadkowy i izolacja klinowa — Na dachach płaskich i prawie płaskich klinowe płyty izolacyjne (styropian lub wełna, np. Styropmin, Rockwool) mogą tworzyć pozytywny spadek w kierunku wpustów dachowych. Klinowe przejście za kominami i ścianami zapobiega stagnacji wody.",
    ],
    solutionsSummary:
      "Dachy niskonachyleniowe nie stanowią problemu, o ile stosujesz odpowiednie materiały. Blacha na rąbek stojący i systemy membranowe zapewniają dziesięciolecia niezawodnej służby na spadkach, które zniszczyłyby gonty.",

    calculatorCtaHeading: "Oblicz materiały dachowe",
    calculatorCtaText:
      "Skorzystaj z naszych darmowych kalkulatorów dachowych, aby określić odpowiednie materiały i ilości dla spadku Twojego dachu:",
    calculatorLinks: [
      {
        label: "Kalkulator spadku dachu",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Przelicz między współczynnikiem spadku, stopniami a procentem nachylenia.",
      },
      {
        label: "Kalkulator powierzchni dachu",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Oblicz rzeczywistą powierzchnię dachu z rzutu i spadku.",
      },
      {
        label: "Kalkulator nachylenia dachu",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Określ współczynnik nachylenia i mnożnik materiałowy dla dowolnego spadku.",
      },
    ],

    faqHeading: "Najczęściej zadawane pytania",
    faqs: [
      {
        question: "Czy można kłaść gont na dachu o spadku 10°?",
        answer:
          "Tak, ale tylko ze specjalnym podkładem. Przy spadku 10° (2:12) wymagana jest podwójna warstwa membrany samoprzylepnej pokrywająca całe poszycie dachowe. Większość producentów gontu bitumicznego honoruje gwarancję przy 10° z prawidłowo zainstalowaną membraną. Bez pełnej membrany minimum dla gontu to 18°.",
      },
      {
        question: "Jaki jest minimalny spadek dachu dla blachy?",
        answer:
          "Dla blachy na rąbek stojący minimalny spadek to 5° (1:12). Jednak przy spadkach 5°–15° łączenia muszą być uszczelnione mechanicznie lub taśmą uszczelniającą. Blacha trapezowa z widocznymi łącznikami wymaga minimalnego spadku 15°, ponieważ penetracje śrub są podatne na wnikanie wody przy niższych spadkach.",
      },
      {
        question: "Co się stanie, jeśli spadek dachu jest za niski dla gontu?",
        answer:
          "Jeśli gont bitumiczny jest zamontowany poniżej minimalnego spadku, woda porusza się zbyt wolno, aby przetoczyć się przez zakłady gontów. Podciąganie kapilarne wciąga wodę pod paski gontów, a deszcz napędzany wiatrem wpycha wodę pod krawędzie. Prowadzi to do chronicznych przecieków, gnicia poszycia, rozwoju pleśni i unieważnionej gwarancji.",
      },
      {
        question: "Czy spadek 15° jest wystarczający dla gontu bitumicznego?",
        answer:
          "Spadek 15° (ok. 3:12) plasuje się między absolutnym minimum (10° z pełną membraną) a standardowym minimum (18° z konwencjonalnym podkładem). Przy 15° musisz zainstalować pełną membranę samoprzylepną na całym poszyciu przed ułożeniem gontów. Z takim podkładem większość producentów obejmie gwarancją gonty przy 15°.",
      },
      {
        question: "Jaki jest minimalny spadek dla dachówki ceramicznej?",
        answer:
          "Minimalny spadek dla dachówki ceramicznej i cementowej to generalnie 22°, choć niektórzy producenci (Röben, Creaton) wymagają 25°. Przy każdym spadku wymagana jest membrana podkładowa pod dachówkami. Dachówki typu karpiówka mogą wymagać spadku od 30° w zależności od producenta.",
      },
      {
        question: "Czy można zmienić spadek istniejącego dachu?",
        answer:
          "Tak, możliwa jest zmiana spadku istniejącego dachu przez dodanie nowych krokwi lub wiązarów nad bieżącą konstrukcją. Jest to znacząca modyfikacja konstrukcyjna wymagająca obliczeń inżynierskich, pozwolenia na budowę i profesjonalnego wykonania. Koszt wynosi zazwyczaj 30 000–100 000 zł w zależności od powierzchni dachu i zakresu zmiany spadku.",
      },
    ],
  },

  readyMixVsBagged: {
    title: "Beton towarowy vs workowy: co wybrać?",
    metaDescription:
      "Beton towarowy vs workowy: cena za m³, wytrzymałość, wygoda i zastosowania. Dowiedz się, kiedy zamówić gruszę, a kiedy mieszać worki samodzielnie.",

    heroTitle: "Beton towarowy vs workowy",
    heroSubtitle: "Co wybrać?",
    heroDescription:
      "Kompletne porównanie betonu towarowego (z wytwórni) i betonu workowego (np. Atlas, Knauf), aby pomóc Ci wybrać najlepszą opcję dla wielkości projektu, budżetu i harmonogramu.",

    quickAnswerHeading: "Szybka odpowiedź",
    quickAnswerText:
      "Stosuj beton workowy do małych projektów poniżej 1 m³ — słupki ogrodzeniowe, małe podkłady, naprawy i wszystko, co możesz wymieszać ręcznie lub betoniarką. Stosuj beton towarowy (dostawa gruszką) do wszystkiego powyżej 1 m³ — podjazdy, płyty, fundamenty i duże wylewki, gdzie liczy się jednolita jakość i szybkość. Koszt za m³ jest zbliżony (350–500 zł), ale opłaty za dostawę i minimalne zamówienia czynią beton towarowy niepraktycznym dla małych prac.",

    whatIsReadyMixHeading: "Co to jest beton towarowy?",
    whatIsReadyMixText1:
      "Beton towarowy jest produkowany w wytwórni (betoniarni), mieszany w obrotowym bębnie gruszki betonowej i dostarczany na plac budowy gotowy do wylania. Beton dociera w pełni wymieszany do określonej klasy wytrzymałości (typowo C20/25 lub C25/30 dla prac mieszkaniowych), z prawidłową proporcją wody do cementu ustawioną przez wytwórnię. Po prostu kierujesz rynnę lub pompę tam, gdzie beton ma trafić.",
    whatIsReadyMixText2:
      "Standardowa gruszka betonowa mieści 6–8 m³ betonu i może zazwyczaj wylać cały ładunek w 30–90 minut. Większość dostawców wymaga minimalnego zamówienia 1 m³, z dopłatami za małe zamówienia poniżej 3–4 m³. Gruszka musi mieć dostęp w odległości ok. 5–6 metrów od miejsca wylewu, lub potrzebujesz pompy do betonu (300–600 zł/godz.), aby dotrzeć dalej.",

    whatIsBaggedHeading: "Co to jest beton workowy?",
    whatIsBaggedText1:
      "Beton workowy to gotowa sucha mieszanka cementu, piasku i kruszywa sprzedawana w workach w marketach budowlanych i składach. Najpopularniejsze marki w Polsce to Atlas, Knauf, Baumit i marki własne sklepów. Worki dostępne są w wagach 25 kg i 40 kg. Dodajesz wodę, mieszasz ręcznie lub betoniarką i wlewasz do szalunku. Worek 25 kg daje ok. 12 litrów gotowego betonu, czyli potrzebujesz ok. 85 worków na 1 m³.",
    whatIsBaggedText2:
      "Beton workowy osiąga typowo klasę C20/25 po 28 dniach, co jest porównywalne ze standardowym betonem towarowym do prac mieszkaniowych. Zaletą jest to, że kupujesz dokładnie tyle, ile potrzebujesz w dowolnym markecie budowlanym (Castorama, Leroy Merlin, OBI, PSB Mrówka), mieszasz we własnym tempie i nie potrzebujesz dostępu dla ciężkiego sprzętu. Wadą jest to, że mieszanie jest pracochłonne — 85 worków na jeden m³ to kilka godzin ciężkiej pracy fizycznej.",

    comparisonHeading: "Beton towarowy vs workowy: porównanie",
    comparisonSubheading:
      "Jak beton z gruszki i beton workowy wypadają w najważniejszych kategoriach.",
    comparisonCol1: "Czynnik",
    comparisonCol2: "Beton towarowy (gruszka)",
    comparisonCol3: "Beton workowy (Atlas, Knauf itp.)",
    comparisonRows: [
      {
        category: "Cena za m³",
        readyMix: "350–500 zł/m³ (sam materiał). Dostawa 100–200 zł+.",
        bagged: "500–800 zł/m³ (ok. 85 worków 25 kg po 6–10 zł każdy).",
      },
      {
        category: "Minimalne zamówienie",
        readyMix: "1 m³ minimum. Dopłaty 50–100 zł/m³ za zamówienia poniżej 3–4 m³.",
        bagged: "Brak minimum. Kup tyle worków, ile potrzebujesz.",
      },
      {
        category: "Wytrzymałość (klasa)",
        readyMix: "Konfigurowalna: C12/15 do C40/50+. Standard mieszkaniowy C20/25–C25/30.",
        bagged: "Standardowo C20/25. Worki wysokowytrzymałościowe C25/30 dostępne.",
      },
      {
        category: "Wygoda",
        readyMix: "Gotowy do wylewu. Brak mieszania. Szybki dla dużych objętości.",
        bagged: "Trzeba mieszać na miejscu. Pracochłonne dla dużych ilości.",
      },
      {
        category: "Czas mieszania",
        readyMix: "Zero — przyjeżdża gotowy. Czas wylewu zależy od dostępu i objętości.",
        bagged: "3–5 min na worek ręcznie. 1–2 min na worek betoniarką.",
      },
      {
        category: "Najlepszy do",
        readyMix: "Podjazdy, płyty >10 m², fundamenty, ławy, duże wylewki.",
        bagged: "Słupki ogrodzeniowe, małe podkłady, naprawy, trudno dostępne miejsca.",
      },
      {
        category: "Okres przydatności",
        readyMix: "Trzeba wylać w 60–90 min od załadunku. Brak magazynowania.",
        bagged: "6–12 miesięcy w suchym miejscu. Kup wcześniej na projekt weekendowy.",
      },
      {
        category: "Kontrola jakości",
        readyMix: "Receptura kontrolowana w wytwórni. Spójna partia. Certyfikat zgodności.",
        bagged: "Zależy od techniki mieszania i proporcji wody. Więcej miejsca na błąd.",
      },
    ],

    costHeading: "Porównanie kosztów: beton towarowy vs workowy",
    costIntro:
      "Koszt betonu za m³ jest zaskakująco zbliżony między obiema opcjami. Prawdziwa różnica kosztowa wynika z opłat za dostawę, robocizny i skali projektu.",
    costText1:
      "Beton workowy: worek 25 kg betonu Atlas lub Knauf kosztuje 6–10 zł w większości marketów budowlanych (ceny 2025). Każdy worek 25 kg daje ok. 12 litrów gotowego betonu. Jeden m³ to 1000 litrów, więc potrzebujesz ok. 85 worków na m³. Przy 8 zł za worek to ok. 680 zł za m³ samego materiału. Worki 40 kg (10–15 zł) dają ok. 19 litrów i kosztują ok. 530–790 zł/m³. Uwzględniając czas mieszania (4–6 godz. na m³ ręcznie), łączny koszt z robocizną jest znacznie wyższy niż beton towarowy dla dużych wylewek.",
    costText2:
      "Beton towarowy: cena bazowa standardowego betonu C20/25 waha się od 350 do 450 zł za m³ w zależności od regionu i aktualnej ceny cementu. Większość dostawców dolicza opłatę za dostawę (100–200 zł za kurs) i może naliczać dopłatę za małe zamówienia (50–100 zł/m³) dla zamówień poniżej 3–4 m³. Dopłata za pompę to 300–600 zł/godz. Dla wylewki podjazdu o objętości 4 m³ spodziewaj się 1 600–2 200 zł za materiał plus 100–200 zł za dostawę.",
    costText3:
      "Podsumowanie: dla projektów poniżej 0,5 m³ (ok. 40–45 worków) beton workowy jest prawie zawsze tańszy i bardziej praktyczny. Dla projektów powyżej 1 m³ beton towarowy oszczędza godziny pracy i zazwyczaj kosztuje mniej za m³, gdy uwzględnisz czas. Punkt przejścia to zwykle ok. 0,75–1,0 m³.",

    whenReadyMixHeading: "Kiedy wybrać beton towarowy",
    whenReadyMixIntro:
      "Beton towarowy to oczywisty wybór dla większych projektów, gdzie liczy się objętość, szybkość i konsekwencja. Oto sytuacje, w których zamówienie gruszki jest słusznym wyborem:",
    whenReadyMixItems: [
      "Projekty wymagające więcej niż 1 m³ — Mieszanie ponad 85 worków ręcznie jest wyczerpujące, wolne i zwiększa ryzyko zimnych złączy (gdzie świeży beton styka się z częściowo związanym). Gruszka dostarcza wszystko na raz.",
      "Podjazdy, tarasy i duże płyty — Typowy podjazd dwusamochodowy (6×6 m, 15 cm grubości) wymaga ok. 5,5 m³. To byłoby 460+ worków. Gruszka wyleje to w niecałą godzinę.",
      "Ławy i ściany fundamentowe — Beton konstrukcyjny na fundamenty powinien być wylewany ciągle, gdy to możliwe. Beton towarowy zapewnia objętość i konsekwencję oczekiwaną przez inspektorów nadzoru.",
      "Wylewki pod presją czasu — Jeśli wynająłeś szalunki, zatrudniłeś ekipę zbrojarską lub masz wąskie okno pogodowe, beton towarowy eliminuje godziny mieszania wymagane przez beton workowy.",
      "Projekty wymagające specjalnej klasy lub domieszek — Wytwórnie mogą dostosować mieszankę z włóknami, przyspieszaczami (na mróz), opóźniaczami (na upał), napowietrzaniem (na cykle zamrażania-odmrażania) i specjalnymi klasami wytrzymałości.",
      "Gdy masz dobry dostęp dla gruszki — Jeśli gruszka może podjechać na odległość 5–6 metrów od miejsca wylewu z wolną drogą, beton towarowy jest najwydajniejszym wyborem.",
    ],
    whenReadyMixSummary:
      "Zasada: jeśli Twój projekt wymaga więcej niż 1 m³, zadzwoń do wytwórni betonu. Same oszczędności na robociźnie uzasadniają opłatę za dostawę.",

    whenBaggedHeading: "Kiedy wybrać beton workowy",
    whenBaggedIntro:
      "Beton workowy doskonale sprawdza się przy małych, szybkich projektach, gdzie zamawianie gruszki byłoby przesadą. Oto najlepsze zastosowania:",
    whenBaggedItems: [
      "Słupki ogrodzeniowe i skrzynkowe — Każdy dołek na słupek zazwyczaj potrzebuje 2–4 worki (25 kg). Możesz osadzać słupki po jednym we własnym tempie, a niektóre szybkowiążące formuły pozwalają wsypać suchą mieszankę bezpośrednio do dołka i dolać wodę.",
      "Małe naprawy — Łatanie fragmentu chodnika, wypełnianie ubytku, naprawa stopnia lub uzupełnienie zdegradowanej nawierzchni. Te prace mogą wymagać zaledwie 3–15 worków.",
      "Projekty poniżej 0,5 m³ — Małe podkłady pod klimatyzatory, altanki, jacuzzi lub krótkie odcinki chodników. Przy 40–45 workach lub mniej mieszanie jest do opanowania.",
      "Trudno dostępne miejsca — Projekty na tyłach domu za ogrodzeniem, fundamenty na zboczu lub tereny wiejskie, gdzie gruszka nie dojedzie. Worki można przenosić ręcznie do prawie każdego miejsca.",
      "Projekty weekendowe — Jeśli chcesz pracować we własnym tempie bez presji stojącej gruszki (kierowcy zazwyczaj czekają 5–7 minut na m³ przed naliczeniem opłaty za postój), worki pozwalają nie śpieszyć się.",
      "Gdy już masz worki — Jeśli masz resztki z poprzedniego projektu lub kupiłeś je w promocji, użyj ich. Sprawdź tylko, czy worki są nadal dobre (brak grudek czy stwardniałych partii).",
    ],
    whenBaggedSummary:
      "Zasada: jeśli Twój projekt wymaga mniej niż 40 worków (ok. 0,5 m³), beton workowy jest prostszy, tańszy i nie wymaga umawiania terminu.",

    calculatorCtaHeading: "Oblicz zapotrzebowanie na beton",
    calculatorCtaText:
      "Skorzystaj z naszych darmowych kalkulatorów betonu, aby dokładnie określić, ile m³ lub worków potrzebujesz:",
    calculatorLinks: [
      {
        label: "Kalkulator betonu",
        href: "/calculators/foundation/concrete-calculator",
        description: "Oblicz m³ i worki potrzebne na płyty, ławy, słupy i niestandardowe kształty.",
      },
      {
        label: "Kalkulator kotew fundamentowych",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Określ rozstaw i liczbę kotew do Twojego fundamentu betonowego.",
      },
      {
        label: "Kalkulator podwaliny",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Oszacuj drewno na podwalinę na szczycie ścian fundamentowych.",
      },
      {
        label: "Kalkulator uszczelki podwaliny",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Oblicz uszczelkę potrzebną między fundamentem a konstrukcją szkieletową.",
      },
    ],

    faqHeading: "Najczęściej zadawane pytania",
    faqs: [
      {
        question: "Ile worków betonu potrzeba na 1 m³?",
        answer:
          "Potrzebujesz ok. 85 worków betonu 25 kg lub ok. 53 worków betonu 40 kg na 1 m³. Worek 25 kg daje ok. 12 litrów, a 1 m³ = 1000 litrów (1000 / 12 ≈ 85 worków). Dlatego większość projektów powyżej 1 m³ lepiej realizować betonem towarowym z gruszki.",
      },
      {
        question: "Czy beton towarowy jest mocniejszy od workowego?",
        answer:
          "Niekoniecznie. Standardowy beton workowy (Atlas, Knauf) osiąga klasę C20/25 po 28 dniach, podczas gdy standardowy beton towarowy do prac mieszkaniowych jest zazwyczaj klasy C20/25–C25/30. Oba są więcej niż wystarczające na podjazdy, tarasy, chodniki i ławy. Zaletą betonu towarowego jest profesjonalnie kontrolowana proporcja wody do cementu, co czyni jakość bardziej spójną.",
      },
      {
        question: "Czy mogę samodzielnie wylać beton towarowy (DIY)?",
        answer:
          "Tak, wielu właścicieli domów zamawia beton towarowy do projektów DIY. Wytwórnia dostarcza gruszkę, a Ty kierujesz wylew do przygotowanych szalunków. Potrzebujesz pomocników (min. 2–3 osoby) do zacierania i wykończenia betonu przed wiązaniem. Zaplanuj wszystko przed przyjazdem gruszki: szalunki zbudowane, zbrojenie ułożone, narzędzia gotowe.",
      },
      {
        question: "Jakie jest minimalne zamówienie betonu towarowego?",
        answer:
          "Większość wytwórni betonu ma minimum 1 m³. Jednak wiele dolicza dopłatę za małe zamówienia poniżej 3–4 m³. Ta dopłata wynosi zazwyczaj 50–100 zł/m³. Na przykład zamówienie 2 m³ przy minimalnym pełnym ładunku 4 m³ może dodać 100–200 zł dopłaty. Zawsze pytaj dostawcę o cennik przed zamówieniem.",
      },
      {
        question: "Jak długo wiąże beton workowy?",
        answer:
          "Standardowy beton workowy wiąże wystarczająco, aby po nim chodzić po 24–48 godzinach, ale nie osiąga pełnej wytrzymałości projektowej (C20/25) przez 28 dni. Formuły szybkowiążące wiążą w 20–40 minut i osiągają wytrzymałość do chodzenia w 4–6 godzin, co czyni je idealnymi na słupki i małe naprawy. W okresie dojrzewania utrzymuj beton wilgotny przez pierwsze 3–7 dni dla maksymalnej wytrzymałości.",
      },
      {
        question: "Czy mogę mieszać różne marki betonu workowego?",
        answer:
          "Tak, możesz mieszać beton Atlas, Knauf, Baumit i inne standardowe mieszanki betonowe razem. Wszystkie używają tych samych podstawowych składników (cement portlandzki, piasek, kruszywo). Nie mieszaj jednak zwykłego betonu z produktami specjalnymi jak szybkowiążący, zaprawa murarska czy mieszanka na blaty kuchenne, ponieważ mają inne receptury i czasy wiązania.",
      },
    ],
  },

  concreteCostGuide: {
    title: "Ile kosztuje beton? Przewodnik cenowy 2025",
    metaDescription:
      "Beton towarowy kosztuje 350–500 zł za m³. Kompletny przewodnik cenowy 2025 obejmujący płyty, ławy, podjazdy, beton workowy, koszty robocizny i porady oszczędnościowe.",

    heroTitle: "Ile kosztuje beton?",
    heroSubtitle: "Przewodnik cenowy 2025",
    heroDescription:
      "Kompletne zestawienie cen betonu dla każdego typu projektu mieszkaniowego. Obejmuje dostawę betonu towarowego, beton workowy, koszty robocizny i czynniki wpływające na cenę.",

    quickAnswerHeading: "Szybka odpowiedź",
    quickAnswerText:
      "Beton towarowy kosztuje 350–500 zł za m³ z dostawą w 2025 roku, przy czym większość inwestorów płaci 380–450 zł/m³ za standardowy beton C20/25–C25/30. Całkowity koszt z montażem (szalunki, zbrojenie, wylew, wykończenie) wynosi 200–500 zł/m² dla prac płaskich jak podjazdy, tarasy i chodniki. Beton workowy (Atlas, Knauf) kosztuje 6–10 zł za worek 25 kg, co daje ok. 500–800 zł za m³ samego materiału.",

    costByProjectHeading: "Koszt betonu wg typu projektu",
    costByProjectIntro:
      "Ile zapłacisz za beton, zależy głównie od typu i wielkości projektu. Oto typowe ceny 2025 dla popularnych projektów betonowych, z materiałem i profesjonalnym wykonaniem:",
    costByProjectColProject: "Projekt",
    costByProjectColTypical: "Typowy koszt",
    costByProjectColNotes: "Uwagi",
    costByProjectRows: [
      { project: "Podjazd (2 auta, 6×6 m)", typical: "10 000–20 000 zł", notes: "5+ m³. Gładkie wykończenie. Tłoczony lub barwiony +30–50%." },
      { project: "Taras (4×5 m)", typical: "6 000–12 000 zł", notes: "2+ m³. Wykończenie miotełkowe. Dekoracyjne opcje droższe." },
      { project: "Chodnik (1,2 m szer., 10 m dł.)", typical: "4 000–8 000 zł", notes: "1,5+ m³. Szalunki, wylewka i wykończenie." },
      { project: "Podłoga garażu (6×6 m)", typical: "12 000–22 000 zł", notes: "6+ m³. Grubość 12–15 cm. Siatka zbrojeniowa lub włókna." },
      { project: "Ławy fundamentowe (dom 120 m²)", typical: "10 000–25 000 zł", notes: "6–12 m³ w zależności od projektu. Ze zbrojeniem." },
      { project: "Ściany fundamentowe (piwnica)", typical: "40 000–80 000 zł", notes: "15–30 m³. Szalunki, zbrojenie i hydroizolacja." },
      { project: "Schody betonowe (5 stopni, 120 cm szer.)", typical: "3 000–7 000 zł", notes: "0,5–1,5 m³. Pracochłonne szalunki." },
      { project: "Fundamenty ogrodzeniowe (20 słupków)", typical: "500–1 200 zł (DIY)", notes: "2–4 worki na słupek. Beton workowy, bez gruszki." },
    ],

    baggedCostHeading: "Koszty betonu workowego",
    baggedCostIntro:
      "Beton workowy jest sprzedawany w marketach budowlanych i składach. Ceny różnią się w zależności od wielkości worka, marki i regionu:",
    baggedCostText1:
      "Standardowe rozmiary worków i ceny (2025): worki 10 kg kosztują 4–6 zł (wydajność ~5 litrów). Worki 25 kg kosztują 6–10 zł (wydajność ~12 litrów). Worki 40 kg kosztują 10–15 zł (wydajność ~19 litrów). Worek 40 kg oferuje najlepszą cenę za litr, ale przy 40 kg praca fizyczna mieszania jest znaczna. Wielu majsterkowiczów preferuje worki 25 kg jako kompromis między kosztem a wygodą. Dostępne w Castoramie, Leroy Merlin, OBI i PSB Mrówka.",
    baggedCostText2:
      "Koszt za m³ z worków: używając worków 25 kg po 8 zł, jeden m³ kosztuje ok. 680 zł (85 worków). Używając worków 40 kg po 12 zł, m³ kosztuje ok. 630 zł (53 worki). Ceny te są wyższe niż dostawa betonu towarowego (350–500 zł/m³), ale worki nie mają opłat za dostawę, minimalnych zamówień i czasu oczekiwania. Dla małych projektów poniżej 0,5 m³ worki są prawie zawsze tańszym wyborem.",
    baggedCostText3:
      "Specjalne betony workowe kosztują więcej: szybkowiążący 10–15 zł za 25 kg, wysokiej wytrzymałości 10–14 zł, z włóknami 12–16 zł, i beton na blaty kuchenne 40–80 zł za 25 kg. Do większości podjazdów, tarasów i ław wystarczy standardowa mieszanka C20/25.",

    readyMixPricingHeading: "Ceny betonu towarowego",
    readyMixPricingIntro:
      "Beton towarowy zamawia się w m³ i dostarcza gruszką. Oto czego się spodziewać przy kontakcie z lokalną wytwórnią:",
    readyMixPricingText1:
      "Cena bazowa: Standardowy beton C16/20 kosztuje 320–400 zł/m³ w większości regionów. C20/25 kosztuje 350–450 zł/m³. C25/30 kosztuje 380–500 zł/m³. Wysokiej wytrzymałości C30/37 kosztuje 420–550 zł/m³. Ceny różnią się regionalnie — aglomeracje z wieloma wytwórniami są tańsze niż tereny wiejskie z ograniczoną konkurencją.",
    readyMixPricingText2:
      "Dodatkowe opłaty: opłata za dostawę 100–200 zł za kurs (paliwo i czas kierowcy). Dopłata za małe zamówienia 50–100 zł/m³ dla zamówień poniżej 3–4 m³ (najistotniejsza opłata dla małych projektów). Opłata za postój 2–5 zł/min, jeśli wylew trwa dłużej niż przewidziany czas. Dostawa w sobotę dopłata 100–300 zł w niektórych wytwórniach. Dopłata paliwowa 50–100 zł za ładunek.",
    readyMixPricingText3:
      "Domieszki i ulepszenia: napowietrzanie (mrozoodporność) dodaje 10–20 zł/m³. Włókna zbrojeniowe dodają 15–30 zł/m³. Przyspieszacz (przyspiesza wiązanie w mrozie) dodaje 15–35 zł/m³. Opóźniacz (spowalnia wiązanie w upale) dodaje 10–25 zł/m³. Pigment kolorowy dodaje 25–60 zł/m³. Pompa do betonu (trudno dostępne wylewki) dodaje 300–600+ zł/godz.",

    factorsHeading: "Czynniki wpływające na cenę betonu",
    factorsIntro:
      "Cena, jaką zapłacisz za beton, zależy od kilku czynników wykraczających poza samą objętość. Zrozumienie ich pomoże Ci dokładniej zaplanować budżet:",
    factorsItems: [
      "Lokalizacja — Ceny betonu różnią się znacznie w zależności od regionu. Duże aglomeracje z wieloma wytwórniami (Śląsk, Warszawa) mają niższe ceny (320–400 zł/m³), podczas gdy tereny wiejskie i górskie płacą więcej (400–550 zł/m³). Zawsze zbieraj oferty z min. 2–3 wytwórni.",
      "Zamówiona ilość — Zamawianie większej ilości betonu obniża cenę za m³. Dopłaty za małe zamówienia (poniżej 3–4 m³) mogą dodać 50–100 zł/m³. Zamówienie 2 m³ może kosztować 500 zł/m³ z opłatami, a 6 m³ — 400 zł/m³ bez dopłat.",
      "Klasa wytrzymałości — Wyższa klasa kosztuje więcej. Standardowy C16/20 wystarcza na chodniki i tarasy. C20/25 jest zalecany na podjazdy i podłogi garaży. C25/30 na fundamenty. Każda klasa dodaje ok. 15–30 zł/m³.",
      "Domieszki — Napowietrzanie, włókna, przyspieszacze, opóźniacze i pigmenty dodają 10–60 zł/m³. W polskim klimacie napowietrzanie jest praktycznie obowiązkowe dla betonu zewnętrznego.",
      "Pora roku — Ceny betonu bywają najwyższe wiosną i latem, gdy szczyt sezonu budowlanego. Wylewki zimowe mogą być tańsze za m³, ale wymagają ciepłej wody, mat grzewczych i przyspieszaczy. Jesień to często optymalny moment.",
      "Odległość dostawy — Większość wytwórni wlicza dostawę w promieniu 10–20 km. Powyżej spodziewaj się dopłat 3–8 zł/km w obie strony. Przy odległych budowach koszty dostawy mogą dodać 200–500+ zł.",
    ],

    laborHeading: "Koszty robocizny: DIY vs wykonawca",
    laborIntro:
      "Koszt samego betonu to często mniej niż połowa całkowitego kosztu projektu. Robocizna, szalunki, wykończenie i przygotowanie terenu stanowią resztę:",
    laborText1:
      "Koszty DIY: robiąc samodzielnie, główne koszty to beton (350–500 zł/m³ towarowy lub 500–800 zł/m³ workowy), deski szalunkowe (100–300 zł), siatka zbrojeniowa (50–150 zł) i wynajem narzędzi (100–200 zł za wibrator, zacieraczkę). Typowy taras 3×4 m (ok. 1,5 m³) może kosztować 1 000–2 000 zł jako projekt DIY vs 4 000–8 000 zł u wykonawcy.",
    laborText2:
      "Koszty wykonawcy: profesjonalne prace betonowe kosztują zazwyczaj 200–500 zł/m² za prace płaskie (płyta, podjazd, taras, chodnik). Obejmuje to przygotowanie terenu, podsypkę żwirową, szalunki, zbrojenie, beton, wylew, wykończenie i sprzątanie. Dekoracyjne wykończenia (tłoczony, barwiony) dodają 80–250 zł/m². Prace pionowe (ściany fundamentowe, mury oporowe) kosztują 300–700 zł/m² ze względu na bardziej skomplikowane szalunki.",
    laborText3:
      "Kiedy zatrudnić fachowca: rozważ zatrudnienie betoniarza do prac konstrukcyjnych (fundamenty, ławy nośne), wylewek powyżej 3 m³, wykończeń dekoracyjnych, powierzchni ze spadkiem i projektów wymagających pozwolenia na budowę. Koszt naprawy źle wylewanego betonu (kucie i ponowna wylewka) jest 2–3 razy wyższy niż koszt prawidłowego wykonania za pierwszym razem.",

    savingTipsHeading: "Porady oszczędnościowe",
    savingTipsIntro:
      "Jest kilka sposobów na obniżenie kosztów betonu bez obniżania jakości:",
    savingTipsItems: [
      "Zbieraj oferty — Ceny mogą różnić się o 15–30% między wytwórniami w tym samym regionie. Zadzwoń do min. 3 dostawców i poproś o pełny cennik z dostawą, dopłatami i opłatami.",
      "Zamów właściwą ilość — Nadmiar to strata; niedomiar oznacza drogi drugi kurs. Użyj naszego kalkulatora betonu dla dokładnego oszacowania, dodaj 5–10% na odpady i nierówności podłoża.",
      "Unikaj dopłat za małe zamówienia — Jeśli potrzebujesz 2,5 m³, a próg dopłaty to 3 m³, zamów 3 m³ i wykorzystaj resztę na mały projekt boczny. Dodatkowe 0,5 m³ kosztuje mniej niż dopłata.",
      "Planuj poza szczytem — Jeśli harmonogram jest elastyczny, planuj wylewki na wtorek–czwartek jesienią lub wczesną wiosną. Weekendowe i sezonowe dostawy często mają dopłaty.",
      "Zrób przygotowanie samodzielnie — Nawet zatrudniając wykonawcę do wylewu, możesz zaoszczędzić 1 500–5 000 zł, robiąc samodzielnie wykopy, podsypkę i szalunki.",
      "Porównaj worki vs towarowy — Dla projektów poniżej 1 m³ przelicz obie opcje. Uwzględnij wartość Twojego czasu: mieszanie 50+ worków zajmuje 3–4 godziny ciężkiej pracy.",
    ],

    calculatorCtaHeading: "Oblicz koszty betonu",
    calculatorCtaText:
      "Skorzystaj z naszych darmowych kalkulatorów, aby oszacować dokładną objętość betonu, a następnie pomnóż przez lokalną cenę za m³:",
    calculatorLinks: [
      {
        label: "Kalkulator betonu",
        href: "/calculators/foundation/concrete-calculator",
        description: "Oblicz m³ i worki potrzebne na płyty, ławy, słupy i niestandardowe kształty.",
      },
      {
        label: "Kalkulator kotew fundamentowych",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Określ rozstaw i liczbę kotew do Twojego fundamentu betonowego.",
      },
      {
        label: "Kalkulator podwaliny",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Oszacuj drewno na podwalinę na szczycie ścian fundamentowych.",
      },
      {
        label: "Kalkulator uszczelki podwaliny",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Oblicz uszczelkę potrzebną między fundamentem a konstrukcją szkieletową.",
      },
    ],

    faqHeading: "Najczęściej zadawane pytania",
    faqs: [
      {
        question: "Ile kosztuje m³ betonu w 2025 roku?",
        answer:
          "Metr sześcienny betonu towarowego kosztuje 350–500 zł za materiał, w zależności od regionu i klasy wytrzymałości. Dodaj opłatę za dostawę (100–200 zł) i ewentualną dopłatę za małe zamówienie (50–100 zł/m³). Całkowity koszt dostarczony dla typowego zamówienia 3–4 m³ to zazwyczaj 380–480 zł/m³.",
      },
      {
        question: "Ile kosztuje wylanie płyty 3×3 m?",
        answer:
          "Płyta betonowa 3×3 m (12 cm grubości) wymaga ok. 1,1 m³ betonu. Koszt materiałów DIY to 600–1 200 zł (beton, szalunki, zbrojenie, podsypka). Profesjonalnie wykonana: 2 500–5 500 zł, w zależności od przygotowania terenu, wykończenia i lokalnego rynku pracy.",
      },
      {
        question: "Czy taniej jest mieszać beton samodzielnie czy zamówić towarowy?",
        answer:
          "Dla małych projektów (poniżej 1 m³) mieszanie worków samodzielnie jest tańsze pod względem materiału. Dla projektów powyżej 1 m³ beton towarowy jest prawie zawsze tańszy za m³ i oszczędza godziny pracy. Punkt przejścia to ok. 0,75–1,0 m³.",
      },
      {
        question: "Ile kosztuje betonowy podjazd?",
        answer:
          "Standardowy podjazd betonowy (ok. 6×6 m, 15 cm grubości) kosztuje 10 000–20 000 zł z wykonaniem w 2025 roku. Obejmuje ok. 5,5 m³ betonu, podsypkę żwirową, szalunki, siatkę zbrojeniową i wykończenie miotełkowe. Beton tłoczony lub dekoracyjny kosztuje 18 000–35 000+ zł.",
      },
      {
        question: "Dlaczego ceny betonu różnią się regionalnie?",
        answer:
          "Ceny betonu zależą od kosztu cementu (różni się w zależności od bliskości cementowni — Górażdże, Lafarge, Cemex), lokalnych kosztów kruszywa, cen paliwa dla gruszek, stawek rynku pracy i konkurencji wśród dostawców. Regiony z aktywnymi wytwórniami cementu (Opolszczyzna, Małopolska) mają tendencję do niższych cen.",
      },
      {
        question: "Ile betonu potrzebuję na projekt?",
        answer:
          "Beton mierzy się w metrach sześciennych (m³). Dla prostokątnych płyt: pomnóż długość (m) × szerokość (m) × grubość (m). Płyta 3×3 m o grubości 12 cm = 3 × 3 × 0,12 = 1,08 m³. Zawsze dodaj 5–10% na odpady, nierówności podłoża i rozlew. Skorzystaj z naszego darmowego kalkulatora betonu dla dokładnych wyników.",
      },
    ],
  },

  howMuchPaint: {
    title: "Ile farby potrzebuję? Kompletny poradnik",
    metaDescription:
      "Ile farby potrzebuję? Kompletny poradnik obejmujący pomiary ścian, wydajność wg typu farby, liczbę warstw, przygotowanie powierzchni, farbę sufitową i na listwy oraz zestawienie kosztów.",

    heroTitle: "Ile farby potrzebuję?",
    heroSubtitle: "Kompletny poradnik",
    heroDescription:
      "Wszystko, co musisz wiedzieć, aby obliczyć właściwą ilość farby na ściany, sufity i listwy — unikaj kupowania za dużo lub za mało.",

    quickAnswerHeading: "Szybka odpowiedź",
    quickAnswerText:
      "Jeden litr farby lateksowej do wnętrz pokrywa ok. 10–14 m² jedną warstwą. Dla standardowego pokoju (4×4 m, sufit 2,6 m) potrzebujesz ok. 6 litrów na dwie warstwy na ścianach. Dodaj 3 litry na sufit i 1 litr na listwy i drzwi. Zawsze zaokrąglaj w górę — resztka farby jest niezbędna na przyszłe poprawki.",

    measuringWallsHeading: "Jak zmierzyć ściany",
    measuringWallsIntro:
      "Dokładne pomiary ścian to fundament każdego oszacowania farby. Oto jak mierzyć jak profesjonalny malarz:",
    measuringWallsItems: [
      "Zmierz długość każdej ściany w metrach i pomnóż przez wysokość sufitu. Ściana o długości 4,5 m i wysokości 2,6 m = 11,7 m². Powtórz dla wszystkich czterech ścian i zsumuj.",
      "Do szybkich obliczeń całego pokoju zmierz obwód (sumę długości ścian) i pomnóż przez wysokość sufitu. Pokój 4×5 m ma obwód 18 m, razy 2,6 m = 46,8 m² powierzchni ścian.",
      "Odejmij otwory: standardowe drzwi to ok. 1,9 m² (90×210 cm), a standardowe okno to ok. 1,5 m² (120×120 cm). Dla pokoju z jednymi drzwiami i dwoma oknami odejmij ok. 4,9 m².",
      "Dla pomieszczeń ze skosami lub poddaszy zmierz wysokość ściany w najwyższym i najniższym punkcie, uśrednij je i pomnóż przez długość ściany.",
      "Uwzględnij wnętrza szaf wnękowych, jeśli planujesz je malować — standardowa szafa 60×180 cm dodaje ok. 5 m² powierzchni ścian.",
      "Zapisz wszystkie pomiary przed wyjazdem do sklepu z farbami. Zrób zdjęcia pomieszczeń do odniesienia przy wyborze kolorów.",
    ],
    measuringWallsSummary:
      "Typowy dom o powierzchni 120 m² ma 350–450 m² powierzchni ścian do malowania, w zależności od wysokości sufitów, liczby pomieszczeń i ilości okien/drzwi.",

    coverageRatesHeading: "Wydajność wg typu farby",
    coverageRatesIntro:
      "Nie wszystkie farby pokrywają tę samą powierzchnię. Wydajność różni się w zależności od wykończenia, jakości i malowanej powierzchni.",
    coverageRatesText1:
      "Farby matowe mają najwyższą wydajność — 12–14 m²/l, ponieważ mają niższą zawartość spoiwa i łatwo się rozprowadzają. Idealnie nadają się na sufity i pokoje o niskim natężeniu ruchu, ale łatwo się brudzą i trudno je czyścić. Farba satynowa pokrywa 10–12 m²/l i jest najpopularniejszym wyborem na salony, sypialnie i korytarze — ma delikatny połysk, jest łatwa w czyszczeniu.",
    coverageRatesText2:
      "Farba półmatowa pokrywa 10–12 m²/l i doskonale nadaje się na kuchnie, łazienki i pomieszczenia o dużym ruchu ze względu na odporność na wilgoć i łatwość mycia. Farba półbłyszcząca pokrywa 10–12 m²/l i jest standardowym wyborem na listwy, cokoły, drzwi i ramy okienne — jej refleksyjna powierzchnia jest wysoce trwała i łatwa do wycierania. Farba wysoki połysk pokrywa 8–10 m²/l i jest stosowana na elementy dekoracyjne, szafki i meble.",
    coverageRatesText3:
      "Farby premium takich marek jak Śnieżka, Dekoral, Dulux i Beckers osiągają wyższy koniec tych zakresów dzięki większej koncentracji pigmentu i lepszemu rozlewaniu. Farby ekonomiczne często mieszczą się na dolnym końcu i mogą wymagać dodatkowej warstwy. Powierzchnie teksturowane, porowate lub niemalowane zmniejszają wydajność o 20–30% — zawsze gruntuj takie powierzchnie najpierw.",

    numberOfCoatsHeading: "Ile warstw farby potrzebujesz?",
    numberOfCoatsIntro:
      "Liczba warstw bezpośrednio wpływa na ilość farby do zakupu. Oto kiedy stosować jedną, dwie lub trzy warstwy:",
    numberOfCoatsItems: [
      "Jedna warstwa wystarcza tylko do poprawek tym samym kolorem i wykończeniem na wcześniej pomalowanej powierzchni w dobrym stanie. Niektóre farby premium reklamują jedną warstwę, ale profesjonalni malarze nadal zalecają dwie warstwy.",
      "Dwie warstwy to standard dla praktycznie wszystkich projektów malarskich. Pierwsza warstwa uszczelnia i gruntuje powierzchnię, a druga zapewnia pełną głębię koloru, jednolity połysk i maksymalną trwałość. Dwie warstwy jakościowej farby wytrzymują 7–10 lat na ścianach wewnętrznych.",
      "Trzy warstwy są konieczne przy drastycznej zmianie koloru — szczególnie z ciemnego (czerwony, granatowy, ciemna zieleń) na jasny (biały, kremowy, pastel). Pierwsza warstwa zabarwionego gruntu neutralizuje stary kolor, po niej dwie warstwy nawierzchniowe.",
      "Nowe, niemalowane płyty g-k zawsze wymagają warstwy gruntu plus dwóch warstw nawierzchniowych (trzy warstwy łącznie). Grunt uszczelnia porowatą powierzchnię i zapewnia jednolitą bazę. Pominięcie gruntu na nowym g-k powoduje «przebijanie» — widoczne różnice w połysku w miejscach, gdzie gładź i surowy karton inaczej wchłaniają farbę.",
      "Powierzchnie teksturowane jak «baranek» czy «kornik» mogą wymagać dodatkowej warstwy, ponieważ tekstura tworzy szczyty i doliny trudne do równomiernego pokrycia jednym przejściem.",
    ],
    numberOfCoatsSummary:
      "Do planowania budżetu zawsze kalkuluj ilość farby na podstawie dwóch warstw. Jeśli potrzebujesz gruntu, oblicz go oddzielnie wg wydajności gruntu.",

    surfacePrepHeading: "Przygotowanie powierzchni",
    surfacePrepIntro:
      "Prawidłowe przygotowanie powierzchni to najważniejszy czynnik trwałości malowania. Żadna ilość drogiej farby nie skompensuje złego przygotowania.",
    surfacePrepItems: [
      "Oczyść wszystkie powierzchnie przed malowaniem. Kurz, tłuszcz i pajęczyny uniemożliwiają przyczepność farby. Przetrzyj ściany wilgotną ściereczką lub użyj roztworu do mycia ścian na tłuste ściany kuchenne. Pozwól powierzchniom całkowicie wyschnąć.",
      "Wypełnij otwory po gwoździach, wgniecenia i pęknięcia lekką masą szpachlową (np. Cekol GS-350 lub Knauf Uniflott). Nałóż szpachelką, pozwól wyschnąć i przeszlifuj papierem ściernym o granulacji 150. Dla większych ubytków (powyżej 1 cm) użyj taśmy siatkowej i masy szpachlowej w dwóch cienkich warstwach.",
      "Lekko przeszlifuj błyszczące powierzchnie papierem ściernym o granulacji 150, aby stworzyć «ząb» dla przyczepności nowej farby. Jest to szczególnie ważne przy malowaniu na wykończeniu półbłyszczącym lub wysoki połysk.",
      "Usuń lub przeszlifuj luźną, łuszczącą się farbę do twardego podłoża. Wygładź krawędzie pozostałej farby papierem ściernym dla płynnego przejścia.",
      "Naklej taśmę malarską na listwy, cokoły, linie sufitu i inne chronione obszary. Dociśnij taśmę mocno szpachelką lub kartą kredytową, aby zapobiec podtekaniu farby.",
      "Zabezpiecz podłogi i meble osłonami malarskimi. Płócienne osłony lepiej przylegają do podłogi i wchłaniają krople. Przesuń meble na środek pokoju i przykryj folią.",
    ],

    ceilingPaintHeading: "Obliczanie farby sufitowej",
    ceilingPaintIntro:
      "Sufity wymagają osobnego obliczenia, ponieważ używają innej receptury farby niż ściany.",
    ceilingPaintText1:
      "Farba sufitowa jest specjalnie sformułowana z wyższą zawartością substancji stałych dla lepszej odporności na rozpryskiwanie przy malowaniu wałkiem nad głową i schnie do idealnie matowego wykończenia minimalizującego widoczność niedoskonałości. Standardowa farba sufitowa pokrywa 12–14 m²/l. Aby obliczyć potrzebną ilość, pomnóż długość pokoju przez szerokość — pokój 4×5 m ma 20 m² sufitu. Przy 13 m²/l to ok. 1,5 l — kup 2 litry na ten pokój.",
    ceilingPaintText2:
      "Większość sufitów potrzebuje tylko jednej warstwy, jeśli malowane są tym samym białym kolorem. Jeśli zmieniasz kolor sufitu lub malujesz na plamę, nałóż grunt, a potem dwie warstwy nawierzchniowe. Dla sufitów teksturowanych («baranek», «kornik») zmniejsz wydajność do 8–10 m²/l. Sufit całego domu (120 m²) zazwyczaj wymaga 10–12 litrów farby sufitowej.",

    trimPaintHeading: "Obliczanie farby na listwy i drzwi",
    trimPaintIntro:
      "Listwy, cokoły, drzwi i ramy okienne są zazwyczaj malowane farbą półbłyszczącą lub satynową dla trwałości i łatwości czyszczenia.",
    trimPaintText1:
      "Cokoły: zmierz łączne metry bieżące cokoła w pokoju. Standardowe cokoły mają 6–10 cm wysokości. Pokój z 18 mb cokoła ma ok. 1,5 m² powierzchni do malowania. Jeden litr farby do listew pokrywa ok. 10–12 m² — wystarczająco na cokoły przeciętnego pokoju.",
    trimPaintText2:
      "Drzwi: standardowe drzwi wewnętrzne (obie strony) mają ok. 3,5 m² powierzchni. Ościeżnica okienna (rama i listwa) to średnio 0,8 m². Gzyms koronkowy dodaje ok. 0,1 m² na mb (lica i krawędź). Na cały dom zaplanuj 3–6 litrów farby do listew na wszystkie cokoły, ościeżnice drzwi, ramy okien i gzyms. Maluj drzwi mini-wałkiem piankowym dla najgładszego wykończenia — ślady pędzla są bardzo widoczne na farbie półbłyszczącej na dużych płaskich powierzchniach.",

    costBreakdownHeading: "Zestawienie kosztów farby",
    costBreakdownIntro:
      "Zrozumienie pełnego kosztu projektu malarskiego pomoże Ci dokładnie zaplanować budżet i wybrać odpowiednie produkty.",
    costBreakdownText1:
      "Farba ścienna to największy koszt. Budżetuj 25–80 zł za litr w zależności od klasy jakości. Dla typowego pokoju wymagającego 6 litrów na 2 warstwy, farba kosztuje 150–480 zł. Na cały dom 120 m² (ok. 35 litrów na ściany) farba kosztuje 875–2 800 zł. Kupowanie wiader 10-litrowych oszczędza 15–20% za litr w porównaniu z pojedynczymi puszczkami. Popularne marki: Śnieżka, Dekoral, Dulux, Beckers, Caparol.",
    costBreakdownText2:
      "Grunt kosztuje 10–25 zł za litr. Nowa budowa (niemalowany g-k) wymaga ok. 1 litra na 10–14 m². Na dom 120 m² to ok. 30–40 litrów gruntu (300–1 000 zł). Farby samogruntujące (dostępne w liniach premium) eliminują ten koszt, ale są droższe za litr. Do przemalowania w podobnym kolorze grunt jest zwykle niepotrzebny. Grunty: Ceresit CT 17, Atlas Uni-Grunt, Knauf Tiefengrund.",
    costBreakdownText3:
      "Materiały do malowania całego domu kosztują 200–500 zł: wałki i ramy (40–60 zł), drążek teleskopowy na sufity (30–50 zł), pędzle kątowe 50 mm i 65 mm (30–50 zł), taśma malarska (40–80 zł za kilka rolek), osłony malarskie (20–50 zł), kuwety i wkłady (20–30 zł), papier ścierny i szpachla (20–30 zł), szmaty i środki czyszczące (10–20 zł). Jakościowe narzędzia robią znaczącą różnicę w końcowym efekcie — nie oszczędzaj na wałkach i pędzlach.",

    calculatorCtaHeading: "Oblicz zapotrzebowanie na farbę",
    calculatorCtaText:
      "Skorzystaj z naszych darmowych kalkulatorów farby, aby uzyskać natychmiastowe, dokładne oszacowanie dla Twojego projektu.",
    calculatorLinks: [
      {
        label: "Kalkulator wydajności farby",
        href: "/calculators/finishing/paint-coverage-calculator",
        description: "Ile litrów na Twoją powierzchnię ścian — z korektą warstw i wydajności.",
      },
      {
        label: "Kalkulator kosztów farby",
        href: "/calculators/finishing/paint-cost-calculator",
        description: "Całkowity koszt projektu wg poziomu jakości farby — uwzględnia materiały.",
      },
      {
        label: "Kalkulator gruntu",
        href: "/calculators/finishing/primer-calculator",
        description: "Ile gruntu na Twój typ powierzchni — nowy g-k, drewno lub przemalowanie.",
      },
    ],

    faqHeading: "Najczęściej zadawane pytania",
    faqs: [
      {
        question: "Ile farby potrzebuję na pokój 4×4 m?",
        answer:
          "Pokój 4×4 m z sufitem 2,6 m ma ok. 41,6 m² powierzchni ścian. Odejmij ok. 4,5 m² na drzwi i okno, zostaje 37 m². Przy wydajności 12 m²/l z 2 warstwami potrzebujesz ok. 6 litrów — kup 2 wiadra po 3 litry lub wiadro 5 l + puszkę 1 l. Dodaj 2–3 litry farby sufitowej na sufit 16 m². Łącznie: 6 litrów farby ściennej + 3 litry sufitowej.",
      },
      {
        question: "Ile m² pokrywa litr farby?",
        answer:
          "Litr farby lateksowej do wnętrz pokrywa 10–14 m² na gładkich, wcześniej pomalowanych powierzchniach jedną warstwą. Farby matowe pokrywają bliżej 14 m², a satynowe i półbłyszczące ok. 10–12 m²/l. Na porowatych lub teksturowanych powierzchniach jak nowy g-k czy tynk spodziewaj się tylko 8–10 m²/l.",
      },
      {
        question: "Czy kupować puszki 1-litrowe czy wiadra 10-litrowe?",
        answer:
          "Wiadra 10-litrowe są o 15–20% tańsze za litr i gwarantują spójność koloru na wszystkich ścianach. Kupuj wiadra, gdy potrzebujesz 5 lub więcej litrów tego samego koloru. Na ściany akcentowe lub pokoje wymagające mniej niż 3 litrów, pojedyncze puszki są bardziej praktyczne. Sklepy sprzedają też próbki 0,5 l do małych poprawek.",
      },
      {
        question: "Ile kosztuje pomalowanie pokoju samodzielnie?",
        answer:
          "Samodzielne malowanie pokoju kosztuje 200–600 zł materiałów: 6 litrów farby (150–480 zł), materiały (50–100 zł) i opcjonalny grunt (10–25 zł/l). Profesjonalny malarz pobiera 800–2 000 zł za ten sam pokój. Na cały dom: DIY kosztuje 1 500–5 000 zł materiałów vs 6 000–20 000 zł za profesjonalną ekipę.",
      },
      {
        question: "Czy potrzebuję gruntu przed malowaniem?",
        answer:
          "Grunt jest konieczny na nowym g-k, surowym drewnie, naprawionych i szpachlowanych miejscach oraz przy drastycznej zmianie koloru (ciemny na jasny). Na wcześniej pomalowanych powierzchniach w dobrym stanie o podobnym kolorze można pominąć grunt — szczególnie z farbami samogruntującymi premium. W razie wątpliwości gruntuj — kosztuje 10–25 zł/l i oszczędza na warstwie nawierzchniowej.",
      },
      {
        question: "Jaka farba jest najlepsza na ściany wewnętrzne?",
        answer:
          "Na większość ścian wewnętrznych farba satynowa lub jedwabista w klasie średniej do premium zapewnia najlepszą równowagę wyglądu, trwałości i zmywalności. Popularne marki w Polsce to Śnieżka Barwy Natury, Dekoral Voice of Color, Dulux Easycare, Beckers Designer Colour. Farby matowe stosuj tylko na sufitach i pokojach o niskim ruchu. Na listwy, drzwi i wilgotne pomieszczenia jak łazienki stosuj farby półbłyszczące.",
      },
    ],
  },
  lumberPrices: {
    title: "Ceny drewna budowlanego: ile kosztuje drewno?",
    metaDescription:
      "Aktualne ceny drewna budowlanego wg gatunku, klasy i wymiaru. Obejmuje drewno konstrukcyjne KVH, drewno klejone BSH, sklejkę, trendy cenowe, gdzie kupować i rabaty hurtowe.",
    heroTitle: "Ceny drewna budowlanego",
    heroSubtitle: "Ile kosztuje drewno?",
    heroDescription:
      "Kompletny przewodnik po cenach drewna budowlanego w Polsce — od krawędziaków konstrukcyjnych po deski tarasowe — abyś mógł dokładnie zaplanować budżet na kolejny projekt.",

    quickAnswerHeading: "Szybka odpowiedź",
    quickAnswerText:
      "Standardowy krawędziak sosnowy/świerkowy KVH 4×14×400 cm kosztuje 20–40 zł w detalicznych marketach budowlanych. Drewno konstrukcyjne C24 kosztuje ok. 1 200–2 000 zł za m³ hurtowo. Deski tarasowe modrzewiowe to 25–50 zł/mb. Sklejka budowlana to 60–150 zł za arkusz w zależności od grubości i klasy. Ceny wahają się z warunkami rynkowymi, więc zawsze zbieraj aktualne oferty przed zamówieniem materiału.",

    speciesPricingHeading: "Ceny drewna wg gatunku",
    speciesPricingIntro:
      "Gatunek drewna to największy czynnik wpływający na cenę. Oto, ile kosztują popularne gatunki na rynku polskim:",
    speciesPricingText1:
      "Drewno iglaste konstrukcyjne — sosna i świerk (S/Ś) — to najtańsza opcja i podstawa budownictwa mieszkaniowego. Krawędziak KVH 4×14×400 cm kosztuje 20–40 zł detalicznie, a dłuższe elementy jak 4×20×600 cm to 50–100 zł. Drewno świerkowe klasy C24 kosztuje ok. 1 200–2 000 zł/m³. Modrzew europejski, ceniony za naturalną odporność na wilgoć i piękny wygląd, kosztuje 2 000–3 500 zł/m³ — ok. 1,5–2 razy więcej niż sosna/świerk. Dąb konstrukcyjny to 3 500–6 000 zł/m³.",
    speciesPricingText2:
      "Drewno liściaste krajowe — Sosna (tak, do stolarki!) i dąb to najpopularniejsze gatunki. Deski dębowe kosztują 2 000–4 500 zł/m³ w zależności od klasy i suszenia. Jesion to 2 500–4 000 zł/m³. Buk to 1 800–3 500 zł/m³. Orzech włoski — premium gatunek — kosztuje 4 000–8 000 zł/m³. Podane ceny dotyczą drewna suszonego komorowo i heblowanego w detalicznych składach drewna.",
    speciesPricingText3:
      "Gatunki egzotyczne i importowane to najwyższa półka cenowa. Bangkirai (drewno żelazne), złoty standard desek tarasowych egzotycznych, kosztuje 30–60 zł/mb za deskę tarasową 21×145 mm. Meranti to 3 000–5 000 zł/m³. Teak, na meble ogrodowe i aplikacje morskie, kosztuje 8 000–15 000 zł/m³. Iroko i cumaru to 4 000–8 000 zł/m³. Cła importowe, koszty transportu i certyfikaty zrównoważonego rozwoju (FSC) wpływają na ceny drewna egzotycznego.",

    dimensionalVsEngineeredHeading: "Drewno masywne vs klejone (inżynieryjne)",
    dimensionalVsEngineeredIntro:
      "Nowoczesne budownictwo coraz częściej stosuje drewno klejone obok tradycyjnego drewna masywnego. Zrozumienie różnic kosztowych pomoże wybrać odpowiedni produkt:",
    dimensionalVsEngineeredItems: [
      "Drewno masywne (KVH, krawędziaki) — piłowane bezpośrednio z kłód i suszone komorowo. Domyślny wybór na szkielety ścienne, więźbę dachową i krótkie rozpiętości stropowe. Najtańsza opcja na mb dla rozpiętości do 5 m.",
      "Belki klejone warstwowo BSH (Glulam) — kosztują 3 000–6 000 zł/m³ — ok. 2–3 razy więcej niż drewno masywne porównywalnego przekroju. Stosowane na podciągi, nadproża, dźwigary i duże rozpiętości.",
      "Dźwigary I (Steico, Metsä) — kosztują 15–35 zł/mb w zależności od wysokości. Zastępują tradycyjne belki stropowe przy rozpiętościach powyżej 4,5 m, oferując mniejszą masę, brak skręcania i gotowe otwory na instalacje.",
      "Drewno klejone krzyżowo CLT (Cross Laminated Timber) — kosztuje 2 500–5 000 zł/m³ i jest stosowane w nowoczesnym budownictwie drewnianym wielokondygnacyjnym. Panele ścienne i stropowe z CLT.",
      "Belki LVL (Kerto, Metsä) — kosztują 3 500–7 000 zł/m³. Stosowane na ciężko obciążone podciągi, słupy i ramy, gdzie wymagana jest maksymalna wytrzymałość w najmniejszym przekroju.",
    ],
    dimensionalVsEngineeredSummary:
      "Dla większości szkieletów mieszkaniowych drewno masywne KVH pozostaje najbardziej opłacalnym wyborem. Drewno klejone ma sens ekonomiczny, gdy potrzebujesz większych rozpiętości, cięższych obciążeń lub bardziej przewidywalnych właściwości.",

    gradeHeading: "Klasy wytrzymałości drewna i ich wpływ na cenę",
    gradeIntro:
      "Klasa wytrzymałości drewna bezpośrednio wpływa na cenę — wyższe klasy kosztują więcej, ponieważ mają mniej wad i bardziej spójne właściwości mechaniczne:",
    gradeItems: [
      "C16 — najekonomiczniejsza klasa konstrukcyjna, odpowiednia na elementy mniej obciążone. Typowo 5–15% taniej niż C24.",
      "C24 — standardowa klasa konstrukcyjna na belki, krokwie, podciągi i ogólne szkielety. Najczęściej dostępne drewno konstrukcyjne w Polsce. Wymagana w większości projektów budowlanych.",
      "C30 — mniej sęków i wyższe wartości wytrzymałości niż C24. Stosowane przy obliczeniach wymagających wyższych dopuszczalnych naprężeń. Kosztuje 10–20% więcej niż C24.",
      "GL24h / GL28h — klasy drewna klejonego warstwowo (BSH). GL24h to standard, GL28h to wersja wzmocniona. Ceny rosną proporcjonalnie do klasy.",
      "KVH-Si (konstrukcja widoczna) — drewno KVH o jakości wizualnej na elementy eksponowane. Kosztuje 20–40% więcej niż standardowe KVH-NSi (niewidoczne).",
      "Drewno impregnowane ciśnieniowo — drewno poddane impregnacji (Tanalith, Korasit) kosztuje 30–60% więcej niż nieimpregnowane, ale trwa 20–40 lat vs 3–5 lat w kontakcie z gruntem. Wymagane przez WT na podwaliny, legary i elementy konstrukcyjne blisko poziomu terenu.",
    ],
    gradeSummary:
      "Do szkieletów drewnianych klasa C24 jest standardem i najtańszym sensownym wyborem. Wyższe klasy specyfikuj tylko wtedy, gdy wymaga tego obliczenie konstrukcyjne lub ekspozycja wizualna.",

    priceTrendsHeading: "Trendy cenowe drewna i prognozowanie",
    priceTrendsIntro:
      "Ceny drewna są notoryczno zmienne, a zrozumienie cyklu rynkowego pomaga w planowaniu zakupów:",
    priceTrendsText1:
      "Rynek drewna budowlanego w Polsce przeżył gwałtowne wzrosty cen w 2021–2022, napędzane pandemicznym popytem DIY i zakłóceniami łańcucha dostaw. Krawędziak, który kosztował 15–20 zł, skoczył do 35–50 zł. Do 2023–2026 ceny ustabilizowały się, ale pozostają 20–40% powyżej poziomów sprzed 2020. Te dramatyczne wahania podkreślają potrzebę zbierania aktualnych cen zamiast opierania się na historycznych szacunkach.",
    priceTrendsText2:
      "Wzorce sezonowe są przewidywalne: ceny drewna osiągają szczyt wiosną i wczesnym latem (marzec–czerwiec), gdy sezon budowlany napędza popyt, i spadają późną jesienią i zimą (październik–styczeń), gdy budownictwo zwalnia. Kupowanie drewna konstrukcyjnego w listopadzie lub grudniu może zaoszczędzić 10–20% w porównaniu z cenami majowymi. Potrzebujesz jednak suchego, zadaszonego magazynu.",
    priceTrendsText3:
      "Długoterminowe czynniki wpływające na ceny drewna obejmują: liczbę pozwoleń na budowę (główny czynnik popytu), politykę Lasów Państwowych (ceny drewna okrągłego), koszty energii tartaków, kurs EUR/PLN (wpływ na drewno skandynawskie i niemieckie), oraz klęski żywiołowe (kornik, wichury) wpływające na podaż. Wojna w Ukrainie i embargo na drewno rosyjskie/białoruskie również wpłynęły na europejskie ceny drewna.",

    whereToBuyHeading: "Gdzie kupować drewno: detal vs hurt",
    whereToBuyIntro:
      "Miejsce zakupu drewna znacząco wpływa na całkowity koszt projektu. Oto główne kanały, od najdroższego do najtańszego:",
    whereToBuyItems: [
      "Markety budowlane (Castorama, Leroy Merlin, OBI, PSB Mrówka): Najwygodniejsze dla małych projektów i pojedynczych elementów. Ceny stałe, łatwe zwroty, natychmiastowa dostępność. Jednak cennik jest 15–30% wyższy niż w składach drewna. Najlepsze dla: właścicieli domów, małych napraw i projektów do 1 000 zł.",
      "Składy drewna i tartaki: Lepsza kontrola jakości, szerszy wybór gatunków i klas, ceny hurtowe. Większość oferuje dostawę dla zamówień powyżej 2 000 zł. Oszczędność 10–25% vs markety. Najlepsze dla: wykonawców, dużych projektów DIY i osób ceniących jakość.",
      "Hurt / bezpośrednio z tartaku: Najniższe ceny, typowo 30–50% poniżej detalu, ale wymaga dużych minimalnych zamówień (często 5+ m³ lub pełne pakiety). Najlepsze dla: pakietów drewna na szkielet domu, projektów komercyjnych.",
      "Sklepy internetowe (Drewno-Ekspres, Allegro): Dobre źródło egzotycznych gatunków, desek tarasowych i drewna specjalistycznego. Cena zawiera premię za selekcję i wysyłkę. Najlepsze dla: stolarzy szukających specyficznych gatunków.",
      "Bezpośrednio od tartaku / Wood-Mizer: Drewno surowe lokalne w najniższych cenach (100–400 zł/m³ za pospolite gatunki iglaste). Wymaga suszenia i obróbki. Najlepsze dla: budowniczych na terenach wiejskich, projektów z drewna okrągłego.",
    ],
    whereToBuySummary:
      "Dla projektów powyżej 5 000 zł w drewnie zawsze weź ofertę z min. jednego składu drewna oprócz sprawdzenia cen w marketach. Oszczędność na pakiecie drewna konstrukcyjnego może łatwo sięgnąć 2 000–8 000 zł.",

    bulkDiscountsHeading: "Zakupy hurtowe i rabaty ilościowe",
    bulkDiscountsIntro:
      "Kupowanie drewna na ilość daje znaczące oszczędności. Oto jak działa cennik hurtowy:",
    bulkDiscountsItems: [
      "Ceny pakietowe: drewno sprzedawane w pakietach (bandowany stos, typowo 1–3 m³ tego samego wymiaru) kosztuje 10–20% mniej niż pojedyncze sztuki. Pakiet krawędziaków KVH 4×14×400 cm kosztuje 15–25 zł/szt. vs 20–40 zł pojedynczo.",
      "Pakiety na szkielet domu: wiele składów drewna wyceni Ci kompletny pakiet materiałów na szkielet, włączając krawędziaki, łaty, kontrłaty, poszycie i łączniki. Cena pakietowa jest typowo 15–25% niższa niż suma cen detalicznych. Przedstaw rysunki szkieletu i zbierz min. dwie oferty.",
      "Konta dla wykonawców: budowniczy kupujący regularnie mogą założyć konta firmowe w składach drewna z dodatkowym rabatem 5–15%. Większość wymaga NIP i historii zakupów.",
      "Ceny paletowe na sklejkę/OSB: kupno pełnej palety sklejki (40–60 arkuszy) oszczędza 10–15% vs pojedyncze arkusze. Paleta OSB/3 18 mm po 45 zł/arkusz zamiast 55 zł oszczędza 400–600 zł.",
      "Promocje sezonowe: Castorama, Leroy Merlin i OBI organizują wyprzedaże drewna wiosną (start sezonu) i jesienią (wyprzedaż zapasów). Śledź zniżki 10–15% na drewno konstrukcyjne i promocje na drewno impregnowane.",
    ],
    bulkDiscountsSummary:
      "Największa oszczędność to oferta na kompletny pakiet drewna ze składu. Dla typowego domu szkieletowego 120 m² różnica między cenami detalicznymi a pakietem ze składu może wynosić 5 000–15 000 zł.",

    calculatorCtaHeading: "Oblicz koszty drewna",
    calculatorCtaText:
      "Skorzystaj z naszych darmowych kalkulatorów drewna, aby oszacować dokładny koszt projektu — od krawędziaków po sklejkę.",
    calculatorLinks: [
      { label: "Kalkulator kosztów drewna", href: "/calculators/hardware/lumber-cost-calculator", description: "Oszacuj koszt drewna wg wymiaru i ilości." },
      { label: "Kalkulator m³ drewna", href: "/calculators/hardware/board-feet-calculator", description: "Przelicz wymiary drewna na metry sześcienne z kosztami." },
      { label: "Kalkulator sklejki", href: "/calculators/hardware/plywood-calculator", description: "Oblicz arkusze sklejki i koszt wg grubości." },
    ],

    faqHeading: "Najczęściej zadawane pytania",
    faqs: [
      { question: "Ile kosztuje krawędziak KVH teraz?", answer: "W 2025 roku standardowy krawędziak KVH świerkowy 4×14×400 cm kosztuje 20–40 zł w detalicznych marketach jak Castorama, Leroy Merlin czy OBI. Ceny różnią się regionalnie, z wyższymi na wybrzeżu i niższymi na Śląsku i w Wielkopolsce. Drewno modrzewiowe i dębowe kosztuje 1,5–3 razy więcej. Sprawdzaj aktualne ceny na stronach sklepów — ceny drewna mogą się zmieniać co tydzień." },
      { question: "Dlaczego drewno jest droższe niż 5 lat temu?", answer: "Ceny drewna wzrosły o 20–40% powyżej poziomów sprzed 2020 z powodu pandemicznego wzrostu popytu, zakłóceń łańcucha dostaw, wyższych kosztów energii tartaków i embarga na drewno rosyjskie/białoruskie po inwazji na Ukrainę. Rynek się ustabilizował, ale na wyższym poziomie bazowym." },
      { question: "Kiedy najlepiej kupować drewno?", answer: "Późna jesień i zima (październik–styczeń) oferują najniższe ceny, ponieważ aktywność budowlana spada i dostawcy wyprzedają zapasy. Oszczędność 10–20% w porównaniu z wiosennymi i letnimi cenami szczytowymi. Jeśli masz suchy, zadaszony magazyn, kupno pakietu na zimę na wiosenną budowę daje znaczące oszczędności." },
      { question: "Czy drewno impregnowane jest warte dodatkowego kosztu?", answer: "Tak, dla każdego drewna w kontakcie z gruntem, w odległości do 15 cm od gruntu lub narażonego na stałą wilgoć. Drewno impregnowane (np. Tanalith) kosztuje 30–60% więcej niż nieimpregnowane, ale trwa 20–40 lat vs 3–5 lat. Wymagane przez warunki techniczne na podwaliny, legary tarasowe i elementy konstrukcyjne blisko terenu." },
      { question: "Ile drewna potrzeba na szkielet domu?", answer: "Typowy dom szkieletowy o powierzchni 120 m² (parter) wymaga ok. 15–25 m³ drewna na kompletny szkielet (ściany, strop, więźba). To ok. 300–400 krawędziaków plus łaty, kontrłaty, poszycie i podciągi. Przy aktualnych cenach pakiet drewna na szkielet domu 120 m² kosztuje 25 000–50 000 zł w zależności od gatunku, rynku i miejsca zakupu." },
      { question: "Jaka jest różnica między drewnem KVH a BSH?", answer: "KVH (Konstruktionsvollholz) to drewno masywne, suszone komorowo do wilgotności poniżej 15%, strugane i sfazowane na krawędziach. BSH (Brettschichtholz) to drewno klejone warstwowo z wielu lamel sklejonych żywicą, oferujące wyższą wytrzymałość, większe rozpiętości i brak skręcania. KVH jest tańsze (1 200–2 000 zł/m³ vs 3 000–6 000 zł/m³ za BSH), ale BSH jest niezbędne na duże rozpiętości i widoczne belki." },
    ],
  },

  compositeVsWood: {
    title: "Deski kompozytowe vs drewniane: co jest lepsze?",
    metaDescription:
      "Porównanie desek kompozytowych i drewnianych: koszt początkowy, wartość długoterminowa, trwałość, konserwacja, wygląd, żywotność i wpływ na środowisko. Kompletny poradnik wyboru materiału tarasowego.",

    heroTitle: "Deski kompozytowe vs drewniane",
    heroSubtitle: "Co jest lepsze?",
    heroDescription:
      "Kompleksowe porównanie materiałów kompozytowych i drewnianych na taras, które pomoże wybrać odpowiednią opcję dla Twojego budżetu, klimatu i stylu życia.",

    quickAnswerHeading: "Szybka odpowiedź",
    quickAnswerText:
      "Wybierz deski kompozytowe, jeśli chcesz minimalnej konserwacji, żywotności 25–50 lat i jednolitego wyglądu. Wybierz drewno (impregnowane lub modrzew), jeśli budżet początkowy jest priorytetem, lubisz naturalny wygląd i dotyk prawdziwego drewna i jesteś gotów konserwować taras co roku. Kompozyt kosztuje 2–4× więcej na początku, ale oszczędza pieniądze w perspektywie 20+ lat, gdy uwzględnisz olejowanie, impregnację i wymianę drewna.",

    whatIsCompositeHeading: "Co to są deski kompozytowe?",
    whatIsCompositeText1:
      "Deski kompozytowe to inżynieryjny materiał budowlany z połączenia włókien drewnianych (trociny, mączka drzewna) i polimerów plastikowych (zwykle polietylen lub polipropylen). Włókna drewna zapewniają sztywność i naturalny wygląd, a komponent plastikowy dostarcza odporności na wilgoć i trwałości. Większość nowoczesnych desek kompozytowych ma ochronną powłokę polimerową (koekstruzja) na wszystkich stronach, chroniącą przed plamami, blaknięciem, pleśnią i zarysowaniami.",
    whatIsCompositeText2:
      "Główne marki desek kompozytowych dostępne w Polsce to Fiberon, TimberTech/AZEK, Mydeck i Inowood. Ceny wahają się od 80 do 250 zł za mb za same deski, przy czym większość inwestorów wybiera produkty średniej półki za 120–180 zł/mb. Deski kompozytowe są dostępne w długościach 3, 4 i 6 metrów i szerokości 14–19 cm. Dostępne w Castoramie, Leroy Merlin i u dystrybutorów specjalistycznych.",

    whatIsWoodHeading: "Co to są deski tarasowe drewniane?",
    whatIsWoodText1:
      "Deski tarasowe drewniane wykorzystują naturalne deski jako powierzchnię tarasu. Trzy najpopularniejsze gatunki drewna tarasowego w Polsce to sosna impregnowana ciśnieniowo (najtańsza i najszerzej dostępna), modrzew europejski (naturalnie odporny na wilgoć z ciepłym odcieniem) i gatunki tropikalne jak bangkirai, cumaru i teak (najtrwalsze, ale najdroższe). Sosna impregnowana stanowi ok. 70% wszystkich drewnianych tarasów budowanych w Polsce.",
    whatIsWoodText2:
      "Deski tarasowe z sosny impregnowanej kosztują 15–30 zł/mb, co czyni je najtańszą opcją tarasową. Modrzew kosztuje 25–50 zł/mb, a drewno tropikalne (bangkirai) 40–80 zł/mb. Deski dostępne w długościach 3, 4 i 6 m. Standardowa deska tarasowa ma wymiar 28×145 mm (grubość × szerokość), co zapewnia dobrą sztywność i komfort pod stopami.",

    comparisonHeading: "Kompozyt vs drewno: porównanie",
    comparisonSubheading: "Jak oba materiały wypadają we wszystkich ważnych kategoriach.",
    comparisonCol1: "Kategoria",
    comparisonCol2: "Deski kompozytowe",
    comparisonCol3: "Deski drewniane",
    comparisonRows: [
      { category: "Koszt początkowy (za m²)", composite: "350–800 zł/m² z montażem", wood: "150–400 zł/m² z montażem" },
      { category: "Żywotność", composite: "25–50 lat", wood: "10–30 lat (zależy od gatunku)" },
      { category: "Roczna konserwacja", composite: "Mycie wodą z mydłem", wood: "Olejowanie / impregnacja co 1–2 lata" },
      { category: "Koszt konserwacji (20 lat)", composite: "0–500 zł łącznie", wood: "5 000–15 000 zł łącznie" },
      { category: "Wygląd", composite: "Jednolity, fabryczny wygląd", wood: "Naturalne słoje, szarzeje z czasem" },
      { category: "Nagrzewanie się", composite: "Mocno się nagrzewa na słońcu", wood: "Pozostaje chłodniejszy" },
      { category: "Odporność na zarysowania", composite: "Dobra (produkty z koekstruzją)", wood: "Zależy od gatunku" },
      { category: "Odporność na blaknięcie", composite: "Doskonała (25-letnia gwarancja)", wood: "Szarzeje bez konserwacji" },
      { category: "Wpływ na środowisko", composite: "Materiały z recyklingu, długa żywotność", wood: "Odnawialne, krótsza żywotność" },
      { category: "Trudność montażu DIY", composite: "Umiarkowana (specjalne klipsy)", wood: "Łatwa (standardowe wkręty tarasowe)" },
    ],

    costHeading: "Porównanie kosztów: pełny obraz",
    costIntro: "Różnica ceny początkowej między kompozytem a drewnem jest znaczna, ale całkowity koszt posiadania w perspektywie żywotności tarasu opowiada inną historię.",
    costText1:
      "Dla typowego tarasu 4×5 m (20 m²), drewniane deski tarasowe z sosny impregnowanej kosztują 1 500–3 000 zł za same deski. Ten sam taras z kompozytu średniej półki kosztuje 4 000–8 000 zł za deski. Wliczając podkonstrukcję, klipsy i robociznę, całkowity koszt z montażem to ok. 5 000–10 000 zł za drewno i 10 000–20 000 zł za kompozyt.",
    costText2:
      "Jednak drewniany taras wymaga corocznej konserwacji. Olejowanie lub impregnacja tarasu 20 m² kosztuje 300–800 zł rocznie (olej tarasowy + aplikacja). Przez 20 lat to 6 000–16 000 zł samych kosztów konserwacji. Taras z sosny impregnowanej typowo wymaga też wymiany desek po 12–15 latach (2 000–5 000 zł). Taras kompozytowy wymaga jedynie okazjonalnego mycia myjką ciśnieniową.",
    costText3:
      "W perspektywie 25 lat całkowity koszt posiadania tarasu drewnianego 20 m² to ok. 13 000–30 000 zł (budowa + konserwacja + częściowa wymiana). Taki sam taras kompozytowy kosztuje 10 000–20 000 zł z praktycznie zerowym kosztem konserwacji. W punkcie 15–20 lat kompozyt staje się tańszą opcją.",

    whenCompositeHeading: "Kiedy wybrać deski kompozytowe",
    whenCompositeIntro: "Deski kompozytowe są lepszym wyborem w tych sytuacjach:",
    whenCompositeItems: [
      "Chcesz taras bezkonserwacyjny, który nigdy nie wymaga olejowania, impregnowania ani malowania.",
      "Mieszkasz w wilgotnym, deszczowym lub nadmorskim klimacie, gdzie drewno szybko się degraduje.",
      "Planujesz pozostać w domu przez 10+ lat i chcesz wartości długoterminowej.",
      "Preferujesz jednolity, niezmienny wygląd.",
      "Chcesz 25–50-letnią gwarancję producenta.",
      "Budujesz taras na piętrze lub w trudno dostępnym miejscu, gdzie konserwacja byłaby uciążliwa.",
    ],
    whenCompositeSummary:
      "Kompozyt to najlepszy wybór ogólny dla właścicieli domów, którzy stawiają na wygodę, trwałość i długoterminowe oszczędności ponad najniższy koszt początkowy.",

    whenWoodHeading: "Kiedy wybrać deski drewniane",
    whenWoodIntro: "Deski drewniane mają więcej sensu w tych sytuacjach:",
    whenWoodItems: [
      "Twój budżet początkowy jest ograniczony i musisz zminimalizować koszt budowy.",
      "Kochasz naturalny wygląd, dotyk i zapach prawdziwego drewna i chętnie je konserbujesz.",
      "Mieszkasz w bardzo gorącym klimacie, gdzie kompozyt byłby niekomfortowo gorący pod stopami.",
      "Budujesz tymczasową lub krótkoterminową konstrukcję (perspektywa 5–10 lat).",
      "Lubisz projekty konserwacyjne i traktujesz coroczne olejowanie jako satysfakcjonujący rytuał.",
      "Chcesz taras z drewna tropikalnego (bangkirai, teak), który oferuje zarówno naturalną piękność, jak i 25+ lat trwałości.",
    ],
    whenWoodSummary:
      "Drewno jest idealne dla osób dbających o budżet, miłośników naturalnego drewna i projektów, w których ciepło i charakter prawdziwego drewna przeważają nad zobowiązaniem do konserwacji.",

    calculatorCtaHeading: "Oblicz materiały tarasowe",
    calculatorCtaText: "Skorzystaj z naszych darmowych kalkulatorów tarasowych, aby oszacować deski, fundamenty, balustradę i schody.",
    calculatorLinks: [
      { label: "Kalkulator desek tarasowych", href: "/calculators/outdoor/deck-board-calculator", description: "Oszacuj deski tarasowe na taras dowolnej wielkości." },
      { label: "Kalkulator fundamentów tarasu", href: "/calculators/outdoor/deck-footing-calculator", description: "Oblicz fundamenty betonowe i rozmieszczenie słupków." },
      { label: "Kalkulator balustrady tarasu", href: "/calculators/outdoor/deck-railing-calculator", description: "Policz słupki, tralki i poręcze." },
      { label: "Kalkulator schodów tarasu", href: "/calculators/outdoor/deck-stair-calculator", description: "Znajdź liczbę stopni, policzki i deski." },
    ],

    faqHeading: "Najczęściej zadawane pytania",
    faqs: [
      {
        question: "Czy deski kompozytowe są warte dodatkowego kosztu?",
        answer:
          "Tak, dla większości właścicieli domów. Choć kompozyt kosztuje 2–4× więcej na początku, eliminuje 6 000–16 000 zł kosztów konserwacji przez 20 lat i trwa 25–50 lat vs 10–15 lat dla sosny impregnowanej. Punkt zwrotu to zazwyczaj 12–15 lat. Jeśli planujesz pozostać w domu na dłużej, kompozyt jest prawie zawsze lepszą decyzją finansową.",
      },
      {
        question: "Czy deski kompozytowe się za bardzo nagrzewają?",
        answer:
          "Deski kompozytowe pochłaniają więcej ciepła niż drewno, szczególnie ciemne kolory. W 30-stopniowy dzień na pełnym słońcu ciemny kompozyt może osiągnąć 60–70°C, co jest niekomfortowe dla bosych stóp. Jaśniejsze kolory są o 10–15°C chłodniejsze. Rozwiązania: wybieraj jasne kolory, dodaj pergolę lub markizę, stosuj maty tarasowe w strefach boso. Drewno pozostaje o 10–15°C chłodniejsze niż kompozyt w tych samych warunkach.",
      },
      {
        question: "Jak długo trwają deski kompozytowe?",
        answer:
          "Deski kompozytowe renomowanych producentów (Fiberon, TimberTech, Mydeck) trwają 25–50 lat z minimalną konserwacją. Większość ma 25-letnie gwarancje konstrukcyjne i 25–50-letnie gwarancje na blaknięcie i plamy. Pierwsza generacja kompozytów z początku lat 2000 miała problemy z pleśnią i blaknięciem, ale nowoczesne deski z koekstruzją w dużej mierze rozwiązały te problemy.",
      },
      {
        question: "Czy można malować lub olejować deski kompozytowe?",
        answer:
          "Desek kompozytowych z koekstruzją nie należy malować ani olejować, ponieważ powłoka polimerowa uniemożliwia przyczepność i farba/olej odejdzie w ciągu 1–2 sezonów. Starsze lub niekapslowane deski kompozytowe można malować farbą zewnętrzną po dokładnym umyciu i zagruntowaniu. Jeśli chcesz zmienić kolor kompozytu, szukaj specjalistycznych powłok na kompozyt.",
      },
      {
        question: "Co jest bardziej ekologiczne: kompozyt czy drewno?",
        answer:
          "Oba mają kompromisy. Deski kompozytowe wykorzystują materiały z recyklingu i ich długa żywotność oznacza mniej wymian. Jednak kompozyt nie jest biodegradowalny i trudny do recyklingu pod koniec życia. Drewno jest odnawialnym, biodegradowalnym zasobem sekwestrującym węgiel, ale drewno impregnowane zawiera chemiczne środki konserwujące i ma krótszą żywotność. Drewno certyfikowane FSC z zrównoważonej uprawy ma najniższy wpływ na środowisko, natomiast kompozyt wygrywa na trwałości i zawartości recyklingowej.",
      },
      {
        question: "Czy mogę łączyć kompozyt i drewno na tym samym tarasie?",
        answer:
          "Tak, wielu budowniczych stosuje podkonstrukcję z drewna impregnowanego (słupki, belki, legary) z deskami kompozytowymi i balustradą na wierzchu. To standardowe podejście, ponieważ deski kompozytowe są zaprojektowane jako powierzchnia tarasowa, a nie elementy konstrukcyjne. Drewniana rama zapewnia nośność przy niższym koszcie, a kompozytowa powierzchnia daje bezobsługowe korzyści tam, gdzie widzisz i dotykasz taras.",
      },
    ],
  },

  gravelCost: {
    title: "Ile Kosztuje \u017bwir? Przewodnik Cenowy 2026",
    metaDescription:
      "Żwir kosztuje 60\u2013180 PLN za tonę, 80\u2013250 PLN za metr sześcienny w 2026. Kompletny przewodnik: tłuczeń, żwir, kruszywo łamane, grys granitowy, otoczak. Podjazdy, tarasy, ścieżki, drenaż, dostawa i obliczanie ilości.",

    heroTitle: "Ile Kosztuje \u017bwir?",
    heroSubtitle: "Przewodnik Cenowy 2026",
    heroDescription:
      "Kompletny przegląd cen żwiru według rodzaju, projektu i regionu w Polsce. Obejmuje tłuczeń, żwir, kruszywo łamane, grys granitowy i otoczak z kosztami dostawy, minimalnymi zamówieniami i poradami oszczędnościowymi.",

    quickAnswerHeading: "Szybka Odpowiedź",
    quickAnswerText:
      "Żwir kosztuje 60\u2013180 PLN za tonę lub 80\u2013250 PLN za metr sześcienny w 2026, w zależności od rodzaju i regionu. Kruszywo łamane i tłuczeń są najtańsze \u2014 60\u2013120 PLN/tonę. Żwir płukany kosztuje 80\u2013150 PLN/tonę. Kamień dekoracyjny jak otoczak kosztuje 150\u2013500 PLN/tonę. Dostawa dodaje 150\u2013400 PLN za kurs do 30 km, a większość dostawców wymaga minimum 5\u201310 ton.",

    gravelTypesHeading: "Rodzaje \u017bwiru i Ceny",
    gravelTypesIntro:
      "Nie każdy żwir jest taki sam. Każdy rodzaj ma inną wagę, właściwości zagęszczania i cenę. Oto najpopularniejsze rodzaje i ich ceny 2026 w Polsce:",
    gravelTypesColType: "Rodzaj \u017bwiru",
    gravelTypesColCost: "Cena za Tonę",
    gravelTypesColBestFor: "Najlepszy Do",
    gravelTypesRows: [
      { type: "Tłuczeń (16/31,5 mm)", cost: "60 \u2013 120 PLN", bestFor: "Podjazdy, drenaż, podbudowa. Krawędzie kątowe, które się zazębiają." },
      { type: "Żwir płukany (8\u201316 mm)", cost: "80 \u2013 150 PLN", bestFor: "Ścieżki, tarasy, klomby. Gładki i zaokrąglony." },
      { type: "Kruszywo łamane (0/31,5 mm)", cost: "50 \u2013 100 PLN", bestFor: "Podjazdy, parkingi. Zawiera frakcję drobną, zagęszcza się w twardą nawierzchnię." },
      { type: "Grys Granitowy (2\u20138 mm)", cost: "100 \u2013 200 PLN", bestFor: "Ścieżki, tarasy, dekoracja. Zagęszcza się dobrze, naturalny wygląd." },
      { type: "Otoczak (30\u201380 mm)", cost: "150 \u2013 500 PLN", bestFor: "Ogród, suche koryta, dekoracja. Nie zagęszcza się." },
      { type: "Grys marmurowy biały", cost: "200 \u2013 600 PLN", bestFor: "Dekoracja, obrzeża, strefy akcentowe. Cena premium." },
    ],

    costByProjectHeading: "Koszt \u017bwiru wg Typu Projektu",
    costByProjectIntro:
      "Ile zapłacisz zależy od wielkości projektu, głębokości i rodzaju żwiru. Typowe koszty 2026 dla projektów mieszkaniowych w Polsce:",
    costByProjectColProject: "Projekt",
    costByProjectColTypical: "Typowy Koszt",
    costByProjectColNotes: "Uwagi",
    costByProjectRows: [
      { project: "Podjazd żwirowy (3,5\u00d715 m)", typical: "1 500 \u2013 4 500 PLN", notes: "8\u201312 ton tłucznia na 15 cm. Profesjonalny montaż ekstra." },
      { project: "Taras (4\u00d74 m)", typical: "500 \u2013 1 500 PLN", notes: "2\u20133 tony żwiru płukanego na 8\u201310 cm. Obrzeża osobno." },
      { project: "Ścieżka (1\u00d710 m)", typical: "200 \u2013 600 PLN", notes: "0,5\u20131,5 tony na 8 cm. Żwir lub grys granitowy." },
      { project: "Drenaż (15 m)", typical: "400 \u2013 1 200 PLN", notes: "2\u20134 tony tłucznia 16/31,5. Geowłóknina osobno." },
      { project: "Klomb (3\u00d76 m)", typical: "500 \u2013 2 000 PLN", notes: "2\u20133 tony kamienia dekoracyjnego na 8 cm." },
      { project: "Podbudowa pod altankę (3\u00d74 m)", typical: "400 \u2013 1 200 PLN", notes: "2\u20133 tony na 10\u201315 cm. Tłuczeń z zagęszczeniem." },
      { project: "Miejsce parkingowe (3\u00d76 m)", typical: "800 \u2013 2 500 PLN", notes: "4\u20136 ton na 15 cm. Kruszywo łamane zalecane." },
    ],

    deliveryCostsHeading: "Koszty Dostawy i Minimalne Zamówienia",
    deliveryCostsIntro:
      "Dostawa stanowi znaczną część kosztu żwiru, zwłaszcza przy małych zamówieniach.",
    deliveryCostsText1:
      "Większość żwirowni i hurtowni budowlanych nalicza 150\u2013400 PLN za dostawę na dystansie do 30 km. Powyżej 30 km doliczane jest 5\u201310 PLN za dodatkowy kilometr. Standardowa wywrotka mieści 10\u201315 ton. Wielu dostawców oferuje połówki ładunków, ale opłata za transport jest taka sama.",
    deliveryCostsText2:
      "Minimalne zamówienia wynoszą zwykle 5\u201310 ton na dostawę. Niektórzy oferują 1\u20132 tony z dopłatą (50\u2013100 PLN). Przy bardzo małych ilościach (poniżej 1 tony), odbiór własny przyczepką jest najtańszy \u2014 większość żwirowni pozwala na samozaładunek.",
    deliveryCostsText3:
      "Aby zaoszczędzić na dostawie: połączcie zamówienia z sąsiadami, kupujcie poza sezonem (jesień-zima) lub odbierajcie sami. Przyczepa 750 kg mieści ok. 0,4 m³. Przyczepa 2-tonowa \u2014 1,2 m³. Wynajem przyczepy wywrotki (100\u2013200 PLN/dzień) pozwala przewieźć 2\u20133 m³ na kurs.",

    howToCalculateHeading: "Jak Obliczyć Potrzebną Ilość",
    howToCalculateIntro:
      "Prawidłowe obliczenie ilości żwiru zapobiega kosztownym dodatkowym dostawom lub nadmiarowi materiału. Wykonajcie te kroki:",
    howToCalculateItems: [
      "Zmierzcie powierzchnię: Pomnóżcie długość przez szerokość w metrach. Przy nieregularnych kształtach podzielcie na prostokąty.",
      "Określcie głębokość: Standard: 5\u20138 cm na ścieżki i klomby, 10 cm na tarasy, 15\u201320 cm na podjazdy. Przeliczcie cm na metry dzieląc przez 100.",
      "Obliczcie metry sześcienne: Długość \u00d7 szerokość \u00d7 głębokość (wszystko w metrach) = m³.",
      "Przeliczcie na tony: Pomnóżcie m³ przez współczynnik wagi \u2014 1,8 dla tłucznia, 1,7 dla żwiru, 2,0 dla kruszywa łamanego, 1,9 dla grysu.",
      "Dodajcie 10% zapasu: Pomnóżcie przez 1,1 na zagęszczenie, rozsypanie i nierówności terenu.",
      "Przykład: Podjazd 3,5 \u00d7 15 m na 15 cm = 3,5 \u00d7 15 \u00d7 0,15 = 7,9 m³ \u00d7 1,8 = 14,2 tony. Z 10%: zamówcie 15,6 ton.",
    ],
    howToCalculateSummary:
      "Porada: Użyjcie naszego darmowego Kalkulatora Żwiru. Wpiszcie wymiary i uzyskajcie natychmiastowe obliczenia m³, tonażu i kosztów.",

    savingTipsHeading: "Jak Zaoszczędzić na \u017bwirze",
    savingTipsIntro:
      "Żwir jest już jednym z najtańszych materiałów nawierzchniowych, ale te porady pomogą zaoszczędzić jeszcze więcej:",
    savingTipsItems: [
      "Kupujcie hurtowo: Cena za tonę spada przy większych zamówieniach. Powyżej 15 ton rabaty 10\u201320% są standardem.",
      "Wybierajcie lokalne kruszywo: Żwir z pobliskich żwirowni kosztuje znacznie mniej. Transport to drugi najważniejszy czynnik cenowy.",
      "Zamawiajcie poza sezonem: Jesień i zima to najspokojniejsze miesiące. Wielu dostawców daje 10\u201315% rabatu.",
      "Odbierajcie sami: Z przyczepką eliminujecie 150\u2013400 PLN za dostawę. Przy małych projektach oszczędność 20\u201330%.",
      "Użyjcie kruszywa łamanego zamiast kamienia dekoracyjnego: Kruszywo kosztuje 50\u2013100 PLN/tonę vs 150\u2013500 PLN za opcje dekoracyjne.",
      "Porównajcie wielu dostawców: Ceny mogą różnić się o 30\u201350% między dostawcami w tym samym regionie. Zbierzcie minimum 3 oferty.",
    ],

    calculatorCtaHeading: "Oblicz Zapotrzebowanie na \u017bwir",
    calculatorCtaText: "Użyjcie naszych darmowych kalkulatorów żwiru, aby oszacować dokładną ilość i koszt projektu.",
    calculatorLinks: [
      { label: "Kalkulator \u017bwiru", href: "/calculators/foundation/gravel-calculator", description: "Oblicz m³ i tony dla dowolnej powierzchni z szacunkiem kosztów." },
      { label: "Kalkulator \u017bwiru na Podjazd", href: "/calculators/foundation/driveway-gravel-calculator", description: "Oszacuj żwir według typu na podjazd z przedziałem cenowym i dostawą." },
      { label: "Kalkulator Płyty Betonowej", href: "/calculators/foundation/concrete-slab-calculator", description: "Planujesz beton? Oblicz m³ i liczbę worków." },
    ],

    faqHeading: "Najczęściej Zadawane Pytania",
    faqs: [
      {
        question: "Ile kosztuje tona żwiru w 2026?",
        answer:
          "Żwir kosztuje 60\u2013180 PLN za tonę w 2026 dla typowych rodzajów. Kruszywo łamane jest najtańsze \u2014 50\u2013100 PLN/tonę. Tłuczeń kosztuje 60\u2013120 PLN/tonę. Żwir płukany 80\u2013150 PLN/tonę. Grys granitowy 100\u2013200 PLN/tonę. Otoczak dekoracyjny 150\u2013500 PLN/tonę. Ceny zależą od regionu.",
      },
      {
        question: "Ile żwiru potrzebuję na podjazd?",
        answer:
          "Standardowy podjazd (3,5 m \u00d7 15 m na 15 cm) wymaga ok. 8 m³ lub 14 ton żwiru. Na podjazd podwójny (7 \u00d7 15 m) \u2014 16 m³ lub 28 ton. Użyjcie tłucznia lub kruszywa łamanego. Dodajcie 10% na zagęszczenie. Koszt materiału: 1.500\u20134.500 PLN.",
      },
      {
        question: "Ile kosztuje metr sześcienny żwiru?",
        answer:
          "Metr sześcienny żwiru kosztuje 80\u2013250 PLN w zależności od rodzaju. Tłuczeń: 100\u2013200 PLN/m³. Kruszywo łamane: 70\u2013150 PLN/m³. Żwir płukany: 120\u2013250 PLN/m³. To ceny samego materiału \u2014 dostawa (150\u2013400 PLN/kurs) osobno. 1 m³ pokrywa ok. 10 m² na 10 cm.",
      },
      {
        question: "Jaki żwir jest najtańszy?",
        answer:
          "Kruszywo łamane (0/31,5 mm) jest najtańsze \u2014 50\u2013100 PLN za tonę. To mieszanka kruszonego kamienia i drobnych frakcji, która zagęszcza się w bardzo twardą nawierzchnię, idealną na podjazdy. Tłuczeń jest następną opcją \u2014 60\u2013120 PLN/tonę. Kruszywo z recyklingu bywa jeszcze tańsze.",
      },
      {
        question: "Ile żwiru na metr kwadratowy?",
        answer:
          "Przy 10 cm głębokości: ok. 0,10 m³ lub 0,18 tony na m². Przy 5 cm: 0,05 m³/m². Przy 15 cm (podjazdy): 0,15 m³ lub 0,27 tony/m². Pomnóżcie przez całkowitą powierzchnię i dodajcie 10% zapasu.",
      },
      {
        question: "Czy podjazd żwirowy jest tańszy niż beton lub asfalt?",
        answer:
          "Tak, znacznie. Podjazd żwirowy kosztuje 30\u201380 PLN/m² w materiale (80\u2013200 PLN/m² z montażem), w porównaniu z 250\u2013500 PLN/m² za beton i 200\u2013400 PLN/m² za asfalt. Podjazd 3,5 \u00d7 15 m z żwiru kosztuje 4.000\u201310.000 PLN z montażem vs 13.000\u201326.000 PLN za beton. Żwir wymaga jednak więcej konserwacji i dosypywania co 2\u20133 lata.",
      },
    ],
  },

  drivewayCost: {
    title: "Ile kosztuje podjazd? Przewodnik cenowy 2026",
    metaDescription:
      "Nowy podjazd kosztuje 5 000\u201380 000 PLN w 2026 w zale\u017cno\u015bci od materia\u0142u i rozmiaru. Kompletny przewodnik: beton (200\u2013500 PLN/m\u00b2), asfalt (150\u2013350 PLN/m\u00b2), \u017cwir (30\u2013100 PLN/m\u00b2), kostka brukowa (250\u2013600 PLN/m\u00b2). Czynniki cenowe, samodzielnie vs firma i porady oszcz\u0119dno\u015bciowe.",

    heroTitle: "Ile kosztuje podjazd?",
    heroSubtitle: "Przewodnik cenowy 2026",
    heroDescription:
      "Kompletne zestawienie koszt\u00f3w podjazdu wed\u0142ug materia\u0142u, rozmiaru i regionu w Polsce. Obejmuje beton, asfalt, \u017cwir i kostk\u0119 brukow\u0105 z cenami z monta\u017cem, por\u00f3wnaniem trwa\u0142o\u015bci, czynnikami wp\u0142ywaj\u0105cymi na koszt i sprawdzonymi sposobami na oszcz\u0119dno\u015bci.",

    quickAnswerHeading: "Szybka odpowied\u017a",
    quickAnswerText:
      "Nowy podjazd kosztuje 5 000 do 80 000 PLN w 2026, przy czym wi\u0119kszo\u015b\u0107 w\u0142a\u015bcicieli p\u0142aci 15 000\u201340 000 PLN za standardowy podjazd dwustanowiskowy. \u017bwir jest najta\u0144szy \u2014 30\u2013100 PLN/m\u00b2. Asfalt kosztuje 150\u2013350 PLN/m\u00b2. Beton kosztuje 200\u2013500 PLN/m\u00b2. Kostka brukowa jest najdro\u017csza \u2014 250\u2013600 PLN/m\u00b2. Ceny obejmuj\u0105 materia\u0142y i profesjonalny monta\u017c.",

    costByMaterialHeading: "Koszt podjazdu wed\u0142ug materia\u0142u",
    costByMaterialIntro:
      "Wybrany materia\u0142 to najwa\u017cniejszy czynnik kosztu podjazdu. Ka\u017cda opcja oferuje inn\u0105 r\u00f3wnowag\u0119 mi\u0119dzy cen\u0105, trwa\u0142o\u015bci\u0105, wygl\u0105dem i konserwacj\u0105. Oto koszty w Polsce w 2026:",
    costByMaterialColMaterial: "Materia\u0142",
    costByMaterialColCostSqFt: "Koszt z monta\u017cem / m\u00b2",
    costByMaterialColLifespan: "Trwa\u0142o\u015b\u0107",
    costByMaterialColBestFor: "Najlepszy do",
    costByMaterialRows: [
      { material: "\u017bwir / t\u0142ucze\u0144", costSqFt: "30 \u2013 100 PLN", lifespan: "15\u201325 lat", bestFor: "Nieruchomo\u015bci wiejskie, d\u0142ugie podjazdy, ograniczony bud\u017cet. Wymaga okresowego dosypywania." },
      { material: "Asfalt", costSqFt: "150 \u2013 350 PLN", lifespan: "15\u201320 lat", bestFor: "Dobry stosunek jako\u015bci do ceny. Elastyczna nawierzchnia dobrze znosi mrozy." },
      { material: "Beton", costSqFt: "200 \u2013 500 PLN", lifespan: "25\u201350 lat", bestFor: "Wi\u0119kszo\u015b\u0107 podjazd\u00f3w domowych. Trwa\u0142y, niska konserwacja, mo\u017ce by\u0107 barwiony lub stemplowany." },
      { material: "Beton stemplowany", costSqFt: "250 \u2013 600 PLN", lifespan: "25\u201350 lat", bestFor: "Dekoracyjny wygl\u0105d ta\u0144szy ni\u017c kostka. Imituje ceg\u0142\u0119, kamie\u0144 lub \u0142upek." },
      { material: "Kostka brukowa", costSqFt: "250 \u2013 600 PLN", lifespan: "25\u201350+ lat", bestFor: "Najpopularniejszy wyb\u00f3r w Polsce. Bardzo trwa\u0142a, wiele wzorow, opcje a\u017curowe dost\u0119pne." },
      { material: "Kamie\u0144 naturalny", costSqFt: "400 \u2013 1 000 PLN", lifespan: "50+ lat", bestFor: "Rezydencje i domy z charakterem. Granit, bazalt, piaskowiec. Najwy\u017csza warto\u015b\u0107 estetyczna." },
    ],

    costBySizeHeading: "Koszt podjazdu wed\u0142ug rozmiaru",
    costBySizeIntro:
      "Rozmiar podjazdu znacząco wpływa na koszt całkowity. Podjazd na jedno auto zajmuje ok. 15\u201330 m\u00b2, a na dwa auta wymaga 30\u201360 m\u00b2. Podjazdy okr\u0119\u017cne mog\u0105 przekracza\u0107 100 m\u00b2.",
    costBySizeColSize: "Typ podjazdu",
    costBySizeColDimensions: "Typowy rozmiar",
    costBySizeColConcrete: "Beton",
    costBySizeColAsphalt: "Asfalt",
    costBySizeColGravel: "\u017bwir",
    costBySizeRows: [
      { size: "Jednostanowiskowy", dimensions: "3\u00d75 m (15 m\u00b2)", concrete: "3 000 \u2013 7 500 PLN", asphalt: "2 250 \u2013 5 250 PLN", gravel: "450 \u2013 1 500 PLN" },
      { size: "Dwustanowiskowy standard", dimensions: "5\u00d710 m (50 m\u00b2)", concrete: "10 000 \u2013 25 000 PLN", asphalt: "7 500 \u2013 17 500 PLN", gravel: "1 500 \u2013 5 000 PLN" },
      { size: "Dwustanowiskowy szeroki", dimensions: "6\u00d712 m (72 m\u00b2)", concrete: "14 400 \u2013 36 000 PLN", asphalt: "10 800 \u2013 25 200 PLN", gravel: "2 160 \u2013 7 200 PLN" },
      { size: "D\u0142ugi podjazd wiejski", dimensions: "3,5\u00d730 m (105 m\u00b2)", concrete: "21 000 \u2013 52 500 PLN", asphalt: "15 750 \u2013 36 750 PLN", gravel: "3 150 \u2013 10 500 PLN" },
      { size: "Podjazd okr\u0119\u017cny", dimensions: "~100 \u2013 150 m\u00b2", concrete: "20 000 \u2013 75 000 PLN", asphalt: "15 000 \u2013 52 500 PLN", gravel: "3 000 \u2013 15 000 PLN" },
    ],

    factorsHeading: "Czynniki wp\u0142ywaj\u0105ce na koszt podjazdu",
    factorsIntro:
      "Poza materia\u0142em i rozmiarem kilka czynnik\u00f3w mo\u017ce zwi\u0119kszy\u0107 lub zmniejszy\u0107 koszt. Znajomo\u015b\u0107 ich pomaga dok\u0142adnie zaplanowa\u0107 bud\u017cet:",
    factorsItems: [
      "Wyb\u00f3r materia\u0142u: Najwa\u017cniejszy czynnik. \u017bwir za 30\u2013100 PLN/m\u00b2 jest 5\u201310\u00d7 ta\u0144szy ni\u017c kamie\u0144 naturalny za 400\u20131 000 PLN/m\u00b2.",
      "Powierzchnia i kszta\u0142t: Wi\u0119ksze podjazdy kosztuj\u0105 wi\u0119cej w sumie, ale cz\u0119sto maj\u0105 ni\u017cszy koszt za m\u00b2. Podjazdy \u0142ukowe wymagaj\u0105 20\u201340% wi\u0119cej robocizny.",
      "Przygotowanie terenu: Je\u015bli teren wymaga wykop\u00f3w lub niwelacji, dolicz 20\u2013120 PLN/m\u00b2. Tereny pochylone wymagaj\u0105 mur\u00f3w oporowych.",
      "Odwodnienie: Prawid\u0142owe odwodnienie (korytka, studzienki) kosztuje 2 000\u201315 000 PLN. Cz\u0119sto wymagane przez prawo budowlane.",
      "Usuni\u0119cie starego podjazdu: Usuni\u0119cie starego betonu kosztuje 40\u2013100 PLN/m\u00b2. Asfalt jest troch\u0119 ta\u0144szy. \u017bwir mo\u017cna zazwyczaj przerobi\u0107.",
      "R\u00f3\u017cnice regionalne: Ceny r\u00f3\u017cni\u0105 si\u0119 o 30\u201350% mi\u0119dzy regionami. Warszawa, Krak\u00f3w i Wroc\u0142aw s\u0105 20\u201340% dro\u017csze ni\u017c mniejsze miasta.",
      "Pozwolenia: Sprawd\u017a w urz\u0119dzie gminy, czy potrzebne jest zg\u0142oszenie rob\u00f3t budowlanych (100\u20131 000 PLN).",
      "Podbudowa: Podbudowa z kruszywa \u0142amanego (20\u201340 cm) jest niezb\u0119dna dla betonu i asfaltu. Kosztuje 20\u201360 PLN/m\u00b2 dodatkowe.",
    ],

    diyVsContractorHeading: "Samodzielnie vs firma",
    diyVsContractorIntro:
      "Czy mo\u017cesz zrobi\u0107 podjazd samodzielnie, zale\u017cy od wybranego materia\u0142u. Oto uczciwa ocena:",
    diyVsContractorText1:
      "Podjazdy \u017cwirowe s\u0105 najbardziej przyjazne do samodzielnego wykonania. Z podstawowymi narz\u0119dziami (\u0142opata, grabie, ubijak r\u0119czny lub wypo\u017cyczona p\u0142yta wibracyjna) w\u0142a\u015bciciel mo\u017ce zrobi\u0107 podjazd \u017cwirowy w weekend. Proces obejmuje: przygotowanie terenu, u\u0142o\u017cenie geow\u0142\u00f3kniny, rozsypanie \u017cwiru warstwami po 5 cm i zag\u0119szczenie ka\u017cdej warstwy. Samodzielne wykonanie pozwala zaoszcz\u0119dzi\u0107 40\u201360%.",
    diyVsContractorText2:
      "Podjazdy betonowe i asfaltowe nie s\u0105 praktyczne do samodzielnego wykonania. Beton wymaga specjalistycznego sprz\u0119tu (gruszka betonowa, wibrator, \u0142ata, paca), precyzyjnego czasu podczas wylewania i do\u015bwiadczenia ze spadkami i szalunkami. \u0179le wylany beton p\u0119ka przedwcze\u015bnie.",
    diyVsContractorText3:
      "Podjazdy z kostki brukowej s\u0105 po\u015brodku. Do\u015bwiadczony majsterkowicz mo\u017ce u\u0142o\u017cy\u0107 kostk\u0119 w d\u0142ugi weekend, ale przygotowanie podbudowy jest bardzo pracoch\u0142onne. Dla wi\u0119kszo\u015bci os\u00f3b zlecenie podbudowy fachowcowi i samodzielne u\u0142o\u017cenie kostki daje najlepszy balans mi\u0119dzy oszcz\u0119dno\u015bci\u0105 (25\u201335%) a jako\u015bci\u0105. Zawsze zb\u0119rajcie co najmniej trzy oferty.",

    savingTipsHeading: "Jak zaoszcz\u0119dzi\u0107 na nowym podjeździe",
    savingTipsIntro:
      "Podjazd to znacz\u0105ca inwestycja, ale istniej\u0105 sprawdzone strategie obni\u017cania koszt\u00f3w bez utraty jako\u015bci:",
    savingTipsItems: [
      "Zbierz kilka ofert: Ceny mog\u0105 si\u0119 r\u00f3\u017cni\u0107 o 30\u201350% mi\u0119dzy firmami. Zbierz co najmniej trzy pisemne oferty z materia\u0142ami, grubo\u015bciami i gwarancj\u0105.",
      "Zaplanuj poza sezonem: P\u00f3\u017ana jesie\u0144 i zima to martwy sezon. Wiele firm oferuje 10\u201320% rabatu.",
      "Wybierz prosty design: Proste, prostok\u0105tne podjazdy s\u0105 najta\u0144sze. Łuki i ozdobne obrzeża dodają 15\u201325%.",
      "Zachowaj istniej\u0105c\u0105 podbudow\u0119: Je\u015bli stary podjazd ma solidn\u0105 podbudow\u0119, mo\u017cna po\u0142o\u017cy\u0107 now\u0105 nawierzchni\u0119 na wierzch \u2014 oszcz\u0119dno\u015b\u0107 20\u201360 PLN/m\u00b2.",
      "Rozwa\u017c asfalt zamiast betonu: Asfalt kosztuje oko\u0142o po\u0142owy ceny betonu i dobrze znosi polskie mrozy. Z regularn\u0105 konserwacj\u0105 wytrzymuje 15\u201320 lat.",
      "U\u017cyj \u017cwiru na d\u0142ugich podjazdach: Dla podjazd\u00f3w powy\u017cej 30 m, \u017cwir na g\u0142\u00f3wnym odcinku i kostka tylko przy wje\u017adzie oszcz\u0119dza tysi\u0105ce z\u0142otych.",
      "Po\u0142\u0105cz z s\u0105siadem: Ta sama firma na dwa projekty mo\u017ce da\u0107 rabat 5\u201315% na kosztach mobilizacji.",
    ],

    calculatorCtaHeading: "Oszacuj koszt swojego podjazdu",
    calculatorCtaText: "U\u017cyj naszych darmowych kalkulator\u00f3w, aby oszacowa\u0107 dok\u0142adn\u0105 ilo\u015b\u0107 materia\u0142u i koszt projektu.",
    calculatorLinks: [
      { label: "Kalkulator p\u0142yty betonowej", href: "/calculators/foundation/concrete-slab-calculator", description: "Oblicz metry sze\u015bcienne, worki i koszt betonowego podjazdu." },
      { label: "Kalkulator \u017cwiru", href: "/calculators/foundation/gravel-calculator", description: "Oszacuj tony i metry sze\u015bcienne na \u017cwirowy podjazd z zakresem cenowym." },
      { label: "Kalkulator \u017cwiru na podjazd", href: "/calculators/foundation/driveway-gravel-calculator", description: "Specjalny kalkulator \u017cwiru na podjazd wed\u0142ug typu i rozmiaru." },
    ],

    faqHeading: "Cz\u0119sto zadawane pytania",
    faqs: [
      {
        question: "Ile kosztuje nowy podjazd w 2026?",
        answer:
          "Nowy podjazd kosztuje 5 000 do 80 000 PLN w 2026, \u015brednio 15 000\u201340 000 PLN za standardowy podjazd dwustanowiskowy z betonu (50 m\u00b2). \u017bwir jest najta\u0144szy \u2014 1 500\u20135 000 PLN z monta\u017cem. Asfalt kosztuje 7 500\u201317 500 PLN. Beton kosztuje 10 000\u201325 000 PLN. Kostka brukowa jest najdro\u017csza \u2014 12 500\u201330 000+ PLN.",
      },
      {
        question: "Jaki jest najta\u0144szy typ podjazdu?",
        answer:
          "\u017bwir/t\u0142ucze\u0144 jest najta\u0144szy \u2014 30\u2013100 PLN/m\u00b2 w materiale lub 80\u2013200 PLN/m\u00b2 z monta\u017cem. Standardowy podjazd dwustanowiskowy ze \u017cwiru kosztuje 1 500\u20135 000 PLN z monta\u017cem, vs 10 000\u201325 000 PLN za beton. \u017bwir jest te\u017c najbardziej przyjazny do samodzielnego wykonania \u2014 oszcz\u0119dno\u015b\u0107 40\u201360%.",
      },
      {
        question: "Ile kosztuje podjazd betonowy za metr kwadratowy?",
        answer:
          "Podjazd betonowy kosztuje 200 do 500 PLN/m\u00b2 z monta\u017cem w 2026. Prosty beton g\u0142adzony kosztuje 200\u2013350 PLN/m\u00b2. Beton stemplowany kosztuje 250\u2013600 PLN/m\u00b2. Standardowy podjazd dwustanowiskowy 50 m\u00b2 z prostego betonu kosztuje 10 000\u201325 000 PLN z monta\u017cem.",
      },
      {
        question: "Asfalt czy beton jest ta\u0144szy na podjazd?",
        answer:
          "Asfalt jest ta\u0144szy pocz\u0105tkowo \u2014 150\u2013350 PLN/m\u00b2 vs 200\u2013500 PLN/m\u00b2 za beton. Jednak asfalt wymaga konserwacji co 2\u20133 lata i wytrzymuje 15\u201320 lat vs 25\u201350 lat dla betonu. W perspektywie 30 lat ca\u0142kowity koszt jest cz\u0119sto por\u00f3wnywalny.",
      },
      {
        question: "Jak obliczy\u0107, ile b\u0119dzie kosztowa\u0142 m\u00f3j podjazd?",
        answer:
          "Aby oszacowa\u0107: (1) Zmierz d\u0142ugo\u015b\u0107 i szeroko\u015b\u0107 w metrach dla powierzchni. (2) Pomn\u00f3\u017c przez koszt za m\u00b2: \u017cwir 30\u2013100, asfalt 150\u2013350, beton 200\u2013500, kostka 250\u2013600 PLN. (3) Dodaj 10\u201320% na przygotowanie terenu i rezerw\u0119. U\u017cyj naszych darmowych kalkulator\u00f3w do dok\u0142adnych szacunk\u00f3w.",
      },
      {
        question: "Jak d\u0142ugo wytrzymuje podjazd w zale\u017cno\u015bci od materia\u0142u?",
        answer:
          "Trwa\u0142o\u015b\u0107 znacznie si\u0119 r\u00f3\u017cni. \u017bwir wytrzymuje 15\u201325 lat, ale wymaga dosypywania co 2\u20133 lata. Asfalt wytrzymuje 15\u201320 lat z regularn\u0105 konserwacj\u0105. Beton wytrzymuje 25\u201350 lat przy minimalnej konserwacji. Kostka brukowa wytrzymuje 25\u201350+ lat z mo\u017cliwo\u015bci\u0105 wymiany pojedynczych element\u00f3w. Kamie\u0144 naturalny mo\u017ce wytrzyma\u0107 50+ lat.",
      },
    ],
  },
  flooringCost: {
    title: "Przewodnik po Kosztach Pod\u0142\u00f3g",
    metaDescription: "Pod\u0142ogi kosztuj\u0105 80\u2013600 PLN/m\u00b2 z monta\u017cem. Kompletny przewodnik cenowy dla parkietu, laminatu, p\u0142ytek, wyk\u0142adziny i winylu z szacunkami na pomieszczenie i poradami oszcz\u0119dno\u015bciowymi.",
    heroTitle: "Przewodnik po Kosztach Pod\u0142\u00f3g",
    heroSubtitle: "Ceny 2026",
    heroDescription: "Wszystko o kosztach pod\u0142\u00f3g \u2014 materia\u0142y, monta\u017c, bud\u017cety na pomieszczenia i strategie oszcz\u0119dzania.",
    quickAnswerHeading: "Szybka Odpowied\u017a",
    quickAnswerText: "Nowa pod\u0142oga kosztuje 80\u2013600 PLN/m\u00b2 z monta\u017cem. Laminat jest najta\u0144szy: 80\u2013250 PLN/m\u00b2, potem wyk\u0142adzina (100\u2013300 PLN), winyl LVP (120\u2013350 PLN), p\u0142ytki (200\u2013600 PLN) i parkiet (250\u2013600 PLN).",
    flooringTypesHeading: "Koszty wed\u0142ug Typu Materia\u0142u",
    flooringTypesIntro: "Ceny za metr kwadratowy z monta\u017cem wed\u0142ug typu materia\u0142u.",
    flooringTypesColType: "Typ Pod\u0142ogi",
    flooringTypesColCost: "Koszt z Monta\u017cem (za m\u00b2)",
    flooringTypesColBestFor: "Najlepszy Do",
    flooringTypesRows: [
      { type: "Laminat", cost: "80 \u2013 250 PLN", bestFor: "Bud\u017cet, DIY, wynajem" },
      { type: "Wyk\u0142adzina", cost: "100 \u2013 300 PLN", bestFor: "Sypialnie, komfort" },
      { type: "Winyl LVP", cost: "120 \u2013 350 PLN", bestFor: "Kuchnie, \u0142azienki, intensywny ruch" },
      { type: "P\u0142ytki", cost: "200 \u2013 600 PLN", bestFor: "\u0141azienki, kuchnie, przedpokoje" },
      { type: "Parkiet warstwowy", cost: "150 \u2013 500 PLN", bestFor: "Salony, jadalnie" },
      { type: "Parkiet lity", cost: "250 \u2013 600 PLN", bestFor: "G\u0142\u00f3wne pomieszczenia, warto\u015b\u0107 d\u0142ugoterminowa" },
      { type: "Kamie\u0144 naturalny", cost: "400 \u2013 1000 PLN", bestFor: "Wysoka p\u00f3\u0142ka" },
    ],
    costByRoomHeading: "Koszt na Pomieszczenie",
    costByRoomIntro: "Typowe koszty ca\u0142kowite wed\u0142ug typu pomieszczenia z materia\u0142ami \u015bredniej klasy.",
    costByRoomColRoom: "Pomieszczenie",
    costByRoomColTypical: "Typowy Koszt Ca\u0142kowity",
    costByRoomColNotes: "Uwagi",
    costByRoomRows: [
      { room: "\u0141azienka (5 m\u00b2)", typical: "1 500 \u2013 5 000 PLN", notes: "P\u0142ytki lub winyl" },
      { room: "Sypialnia (14 m\u00b2)", typical: "2 500 \u2013 7 000 PLN", notes: "Wyk\u0142adzina lub laminat" },
      { room: "Kuchnia (18 m\u00b2)", typical: "4 000 \u2013 14 000 PLN", notes: "P\u0142ytki lub winyl" },
      { room: "Salon (28 m\u00b2)", typical: "5 000 \u2013 18 000 PLN", notes: "Parkiet lub winyl" },
      { room: "Ca\u0142y dom (140 m\u00b2)", typical: "20 000 \u2013 80 000 PLN", notes: "Mix materia\u0142\u00f3w" },
    ],
    installationCostsHeading: "Koszty Monta\u017cu: Samodzielnie vs Fachowiec",
    installationCostsIntro: "Robocizna to 40\u201360% ca\u0142kowitego kosztu pod\u0142ogi.",
    installationCostsText1: "Profesjonalny monta\u017c kosztuje 60\u2013150 PLN/m\u00b2. P\u0142ytki s\u0105 najdro\u017csze: 120\u2013300 PLN/m\u00b2. Wyk\u0142adzina jest najta\u0144sza: 30\u201380 PLN/m\u00b2.",
    installationCostsText2: "Samodzielny monta\u017c oszcz\u0119dza 50\u201370% na roboci\u017anie. Laminat i winyl click s\u0105 naj\u0142atwiejsze do samodzielnego u\u0142o\u017cenia.",
    installationCostsText3: "Dodatkowe koszty: wyr\u00f3wnanie pod\u0142o\u017ca (60\u2013150 PLN/m\u00b2), usuni\u0119cie starej pod\u0142ogi (30\u201380 PLN/m\u00b2), przenoszenie mebli (200\u2013800 PLN), listwy progowe (20\u201360 PLN/szt.).",
    howToCalculateHeading: "Jak Obliczy\u0107 Potrzebn\u0105 Ilo\u015b\u0107",
    howToCalculateIntro: "Kroki do dok\u0142adnego oszacowania materia\u0142\u00f3w.",
    howToCalculateItems: [
      "Zmierz d\u0142ugo\u015b\u0107 i szeroko\u015b\u0107 ka\u017cdego pomieszczenia. Pomn\u00f3\u017c dla m\u00b2.",
      "Nieregularne pomieszczenia podziel na prostok\u0105ty i zsumuj.",
      "Dodaj 10% na odpad przy prostym uk\u0142adaniu.",
      "15\u201320% przy uk\u0142adaniu diagonalnym lub w jodk\u0119.",
      "Podziel ca\u0142o\u015b\u0107 przez zawarto\u015b\u0107 opakowania.",
      "Zawsze zaokr\u0105glaj w g\u00f3r\u0119.",
    ],
    howToCalculateSummary: "U\u017cyj naszego darmowego kalkulatora do natychmiastowych szacunk\u00f3w z automatycznym wsp\u00f3\u0142czynnikiem odpadu.",
    savingTipsHeading: "Jak Oszcz\u0119dza\u0107 na Pod\u0142odze",
    savingTipsIntro: "M\u0105dre zakupy mog\u0105 obni\u017cy\u0107 koszty o 20\u201340%.",
    savingTipsItems: [
      "Kupuj podczas wyprzeda\u017cy sezonowych na 20\u201330% taniej.",
      "Kupuj w hurtowniach pod\u0142ogowych.",
      "Uk\u0142adaj pod\u0142og\u0119 click samodzielnie.",
      "U\u017cywaj r\u00f3\u017cnych materia\u0142\u00f3w w r\u00f3\u017cnych pomieszczeniach.",
      "Zamawiaj wszystko naraz na rabaty ilo\u015bciowe.",
      "Zachowaj resztki na przysz\u0142e naprawy.",
    ],
    calculatorCtaHeading: "Oblicz Swoje Materia\u0142y",
    calculatorCtaText: "U\u017cyj naszych darmowych kalkulator\u00f3w do natychmiastowych szacunk\u00f3w.",
    calculatorLinks: [
      { label: "Kalkulator Pod\u0142\u00f3g", href: "/calculators/flooring/flooring-calculator/", description: "Og\u00f3lny kalkulator m\u00b2 i opakowań" },
      { label: "Kalkulator Wyk\u0142adziny", href: "/calculators/flooring/carpet-calculator/", description: "M\u00b2, metry bie\u017c\u0105ce i podk\u0142ad" },
      { label: "Kalkulator P\u0142ytek", href: "/calculators/flooring/tile-calculator/", description: "P\u0142ytki, fuga i klej" },
      { label: "Kalkulator Laminatu", href: "/calculators/flooring/laminate-calculator/", description: "Deski, opakowania i podk\u0142ad" },
    ],
    faqHeading: "Cz\u0119sto Zadawane Pytania",
    faqs: [
      { question: "Jaka pod\u0142oga jest najta\u0144sza?", answer: "Laminat: 80\u2013250 PLN/m\u00b2 z monta\u017cem. Samodzielnie: 40\u2013100 PLN/m\u00b2 za materia\u0142." },
      { question: "Ile kosztuje pod\u0142oga w ca\u0142ym domu?", answer: "Dom 140 m\u00b2 kosztuje 20 000\u201380 000 PLN. Typowy mix: 30 000\u201355 000 PLN." },
      { question: "Jaka pod\u0142oga najbardziej podnosi warto\u015b\u0107 domu?", answer: "Parkiet daje najwi\u0119ksz\u0105 warto\u015b\u0107 przy odsprzeda\u017cy. P\u0142ytki i winyl w kuchni/\u0142azience to te\u017c dobra inwestycja." },
      { question: "Jak d\u0142ugo wytrzymuje ka\u017cdy typ pod\u0142ogi?", answer: "Parkiet lity: 50\u2013100 lat. Kamie\u0144: 50+. P\u0142ytki: 30\u201350. Laminat/winyl: 15\u201325. Wyk\u0142adzina: 5\u201315." },
      { question: "Czy powinienem wymieni\u0107 pod\u0142og\u0119 przed sprzeda\u017c\u0105?", answer: "Zu\u017cyta wyk\u0142adzina powinna by\u0107 wymieniona. Uszkodzony parkiet mo\u017cna wycyklinowa\u0107. Nowy winyl w kuchni/\u0142azience to dobra inwestycja." },
      { question: "Jaka pod\u0142oga najlepsza do kuchni?", answer: "Winyl LVP i gres porcelanowy. Wodoodporne, trwa\u0142e i \u0142atwe do czyszczenia." },
    ],
  },

  fenceCost: {
    title: "Ile kosztuje ogrodzenie? Przewodnik cenowy 2026",
    metaDescription: "Ogrodzenie kosztuje 80\u2013300 z\u0142 za metr bie\u017c\u0105cy z monta\u017cem w 2026. Kompletny przewodnik cenowy dla ogrodze\u0144 drewnianych, metalowych, PVC i kompozytowych.",
    heroTitle: "Ile kosztuje ogrodzenie?",
    heroSubtitle: "Przewodnik cenowy 2026",
    heroDescription: "Szczeg\u00f3\u0142owe zestawienie koszt\u00f3w ogrodze\u0144 wg materia\u0142u, stylu i rozmiaru projektu z cenami, robocizn\u0105 i poradami oszcz\u0119dno\u015bciowymi.",
    quickAnswerHeading: "Szybka odpowied\u017a",
    quickAnswerText: "Ogrodzenie kosztuje 80\u2013300 z\u0142/mb z monta\u017cem w 2026. Drewniane ogrodzenie 15 m: 1 200\u20132 500 z\u0142 materia\u0142y lub 2 500\u20135 000 z\u0142 z monta\u017cem.",
    fenceTypesHeading: "Koszt wg materia\u0142u",
    fenceTypesIntro: "Materia\u0142 to g\u0142\u00f3wny czynnik kosztu:",
    fenceTypesColType: "Materia\u0142",
    fenceTypesColCost: "Koszt/mb (z monta\u017cem)",
    fenceTypesColBestFor: "Idealne do",
    fenceTypesRows: [
      { type: "Drewno impregnowane", cost: "80 \u2013 180 z\u0142", bestFor: "Ogrodzenia prywatno\u015bciowe. 15\u201320 lat." },
      { type: "Modrzew / D\u0105b", cost: "120 \u2013 250 z\u0142", bestFor: "Naturalna odporno\u015b\u0107. 15\u201325 lat." },
      { type: "Siatka ogrodzeniowa", cost: "30 \u2013 80 z\u0142", bestFor: "Najta\u0144sza opcja. 15\u201320 lat." },
      { type: "Panele ogrodzeniowe", cost: "100 \u2013 200 z\u0142", bestFor: "Trwa\u0142e, bezpieczne. 25\u201340 lat." },
      { type: "PVC / Kompozyt", cost: "150 \u2013 350 z\u0142", bestFor: "Bez konserwacji. 25\u201350 lat." },
      { type: "Aluminium / Stal", cost: "150 \u2013 400 z\u0142", bestFor: "Dekoracyjne. 20\u201330 lat." },
    ],
    costByProjectHeading: "Koszt wg rozmiaru",
    costByProjectIntro: "Typowe koszty 2026 dla ogrodze\u0144 drewnianych:",
    costByProjectColProject: "Projekt",
    costByProjectColTypical: "Typowy koszt (z monta\u017cem)",
    costByProjectColNotes: "Uwagi",
    costByProjectRows: [
      { project: "Ma\u0142y ogr\u00f3d (10 m)", typical: "1 600 \u2013 3 500 z\u0142", notes: "Materia\u0142y: 800\u20131 800 z\u0142." },
      { project: "\u015aredni ogr\u00f3d (15 m)", typical: "2 400 \u2013 5 250 z\u0142", notes: "Najcz\u0119stszy rozmiar." },
      { project: "Du\u017cy ogr\u00f3d (25 m)", typical: "4 000 \u2013 8 750 z\u0142", notes: "Rabat hurtowy mo\u017cliwy." },
      { project: "Ca\u0142y obw\u00f3d (40 m)", typical: "6 400 \u2013 14 000 z\u0142", notes: "Materia\u0142y: 3 200\u20137 000 z\u0142." },
      { project: "Z furtk\u0105", typical: "3 500 \u2013 8 000 z\u0142", notes: "Furtka: 300\u20131 000 z\u0142 extra." },
      { project: "Ogrodzenie basenu", typical: "3 000 \u2013 10 000 z\u0142", notes: "Wymogi bezpiecze\u0144stwa." },
    ],
    laborCostsHeading: "Koszty monta\u017cu",
    laborCostsIntro: "Monta\u017c to 40\u201360% kosztu ca\u0142kowitego.",
    laborCostsText1: "Monta\u017c profesjonalny: 30\u201380 z\u0142/mb. 15 m trwa 1\u20132 dni.",
    laborCostsText2: "Kamienisty grunt i nachylenie zwi\u0119kszaj\u0105 koszty o 10\u201325%.",
    laborCostsText3: "Por\u00f3wnaj min. 3 oferty. Sezon zimowy oszcz\u0119dza 10\u201320%.",
    diyVsProHeading: "Sam vs fachowiec",
    diyVsProIntro: "Samodzielna budowa oszcz\u0119dza 40\u201360%:",
    diyVsProItems: [
      "Materia\u0142y na 15 m: 1 200\u20132 500 z\u0142.",
      "Fachowiec: 2 500\u20135 000 z\u0142 ca\u0142o\u015b\u0107.",
      "Narz\u0119dzia: \u015bwider glebowy, poziomica, pi\u0142a, wkr\u0119tarka.",
      "1\u20132 weekendy na 15 metr\u00f3w.",
      "B\u0142\u0119dy: s\u0142upki krzywo osadzone.",
      "S\u0142upki dzie\u0144 1, wype\u0142nienie dzie\u0144 2.",
    ],
    diyVsProSummary: "Samodzielnie oszcz\u0119dzasz 1 200\u20132 500 z\u0142. Przy trudnym gruncie zle\u0107 fachowcowi.",
    savingTipsHeading: "Jak oszcz\u0119dzi\u0107",
    savingTipsIntro: "Sposoby na redukcj\u0119 koszt\u00f3w:",
    savingTipsItems: [
      "Drewno impregnowane zamiast modrzewia: 30\u201350% taniej.",
      "Buduj poza sezonem: 10\u201320% oszcz\u0119dno\u015bci.",
      "Podziel koszt z s\u0105siadem 50/50.",
      "Gotowe panele szybsze w monta\u017cu.",
      "Kup w sk\u0142adzie drewna, nie w markecie.",
      "Zg\u0142oszenie budowlane z\u0142\u00f3\u017c sam.",
    ],
    calculatorCtaHeading: "Oblicz materia\u0142y",
    calculatorCtaText: "U\u017cyj naszych darmowych kalkulator\u00f3w do oszacowania materia\u0142\u00f3w i kosztu.",
    calculatorLinks: [
      { label: "Kalkulator ogrodzenia", href: "/calculators/outdoor/fence-calculator", description: "S\u0142upki, rygle i deski." },
      { label: "Kalkulator s\u0142upk\u00f3w", href: "/calculators/outdoor/fence-post-calculator", description: "S\u0142upki i beton." },
      { label: "Kalkulator paneli", href: "/calculators/outdoor/fence-panel-calculator", description: "Panele gotowe." },
      { label: "Kalkulator sztachet", href: "/calculators/outdoor/picket-fence-calculator", description: "Sztachety z dowolnym rozstawem." },
    ],
    faqHeading: "Cz\u0119sto zadawane pytania",
    faqs: [
      { question: "Ile kosztuje 20 m ogrodzenia?", answer: "Drewniane: 3 200\u20137 000 z\u0142 z monta\u017cem, 1 600\u20133 500 z\u0142 materia\u0142y." },
      { question: "Najta\u0144sze ogrodzenie?", answer: "Siatka od 30 z\u0142/mb. Prywatno\u015bciowe: drewno od 80 z\u0142/mb." },
      { question: "Samemu taniej?", answer: "Tak, oszcz\u0119dno\u015b\u0107 40\u201360%." },
      { question: "Ile wytrzymuje ogrodzenie drewniane?", answer: "Impregnowane: 15\u201320 lat. Modrzew: 15\u201325 lat." },
      { question: "Potrzebne zg\u0142oszenie?", answer: "Ogrodzenia do 2,2 m zwykle nie wymagaj\u0105 pozwolenia, ale zg\u0142oszenie mo\u017ce by\u0107 konieczne. Sprawd\u017a w urz\u0119dzie gminy." },
      { question: "Kt\u00f3re ogrodzenie podnosi warto\u015b\u0107?", answer: "Zadbane drewniane ogrodzenie odzyskuje 50\u201370% kosztu w warto\u015bci nieruchomo\u015bci." },
    ],
  },
};

export default guides;
