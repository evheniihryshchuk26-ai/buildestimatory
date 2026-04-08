// Polish (PL) — All calculator SEO content
// Polish adaptations: PN-EN standards, Polish brands (Atlas, Knauf, Baumit, Styropmin, Rockwool, Rigips, Cekol, Śnieżka, Dekoral),
// PLN zł prices, metric units, Polish construction terms, 40/60 cm rozstaw osiowy,
// Polish climate (heavy winters, frost depth 80–140 cm, snow zones I–V),
// Polish building law (Prawo budowlane, warunki techniczne WT),
// Polish suppliers (Castorama, Leroy Merlin, OBI, PSB Mrówka, Bricomarché)

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
  "Dodaj 10–15% zapasu na odpady, przycięcia i ewentualne błędy.";

// ─── FOUNDATION ─────────────────────────────────────────────────────────────

export const anchorBoltCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Zmierz całkowity obwód fundamentu w metrach.",
    "Wprowadź rozstaw kotew (standard to 1,80 m zgodnie z PN-EN 1995).",
    "Podaj średnicę kotew (M12 lub M16).",
    "Kliknij Oblicz materiały, aby otrzymać łączną liczbę kotew.",
  ],
  materialInfo:
    "Kotwy fundamentowe (typu J lub L) to pręty stalowe gwintowane osadzane w betonie fundamentu w celu zamocowania podwaliny drewnianej. Zgodnie z PN-EN 1995-1-1 (Eurokod 5) oraz warunkami technicznymi (WT) kotwy powinny być rozmieszczone co maksymalnie 1,80 m oraz w odległości nie większej niż 300 mm od każdego narożnika i złącza podwaliny. W Polsce najczęściej stosuje się średnice M12 (12 mm) i M16 (16 mm), przy czym M12 jest wystarczająca dla typowego budownictwa jednorodzinnego. Kotwy typu J są najczęściej stosowane ze względu na prostotę osadzania w mokrym betonie, natomiast kotwy typu L oferują większą odporność na wyrywanie. Na terenach narażonych na silne wiatry — np. wybrzeże Bałtyku czy tereny górskie — zaleca się kotwy M16 z podkładkami 50×50 mm. Ceny w hurtowniach budowlanych (Castorama, Leroy Merlin, OBI, PSB Mrówka) wynoszą od 3 do 12 zł za sztukę w zależności od średnicy i wykończenia. Kotwy muszą spełniać wymagania PN-EN ISO 898-1 klasy 4.6 lub wyższej, aby zapewnić odpowiednią wytrzymałość na rozciąganie. W polskim klimacie, gdzie głębokość przemarzania wynosi 80–140 cm, prawidłowe osadzenie kotew w fundamencie poniżej strefy przemarzania jest kluczowe dla trwałości konstrukcji.",
  nextSteps: [
    { label: "Kalkulator Uszczelki Podwalinowej", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Kalkulator Podwaliny Impregnowanej", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Osadzaj kotwy przed pełnym utwardzeniem betonu, gdy jest jeszcze plastyczny.",
    "Użyj szablonu lub listwy prowadzącej, aby zachować równomierne rozstawy i osiowość.",
    "Upewnij się, że kotwy wchodzą co najmniej 180 mm w głąb betonu.",
    "Umieść kotwę w odległości nie większej niż 300 mm od końca każdego odcinka podwaliny.",
    "Sprawdź pionowość każdej kotwy przed wiązaniem betonu — krzywe kotwy utrudniają montaż podwaliny.",
  ],
  commonMistakes: [
    "Pominięcie kotew przy złączach podwaliny — zawsze umieszczaj kotwę w odległości do 300 mm od końca każdego odcinka.",
    "Użycie niewłaściwej średnicy — M12 to absolutne minimum dla budownictwa mieszkaniowego.",
    "Brak kontroli pionowości kotwy przed związaniem betonu.",
    "Zbyt płytkie osadzenie kotew — minimalna głębokość zakotwienia to 180 mm.",
    "Nieuwzględnienie strefy przemarzania gruntu przy projektowaniu głębokości fundamentu.",
  ],
  faqs: [
    { question: "Jakie kotwy fundamentowe są wymagane przepisami?", answer: "Zgodnie z PN-EN 1995 i warunkami technicznymi (WT) minimalna średnica to M12, zakotwiona na głębokość co najmniej 180 mm w betonie, z rozstawem maksymalnym 1,80 m. W strefach o dużym obciążeniu wiatrem stosuje się M16." },
    { question: "Czy potrzebuję kotwy przy każdym narożniku?", answer: "Tak. Kotwa musi znajdować się w odległości nie większej niż 300 mm od końca każdego odcinka podwaliny oraz przy każdym narożniku fundamentu." },
    { question: "Czy mogę osadzić kotwy po utwardzeniu betonu?", answer: "Tak, za pomocą kotew chemicznych (np. systemy Fischer lub Hilti). Wierci się otwór w utwardzonym betonie i osadza kotwę za pomocą żywicy epoksydowej, uzyskując porównywalną siłę wyrywania." },
    { question: "Ile kotew potrzebuję na metr bieżący fundamentu?", answer: "Przy standardowym rozstawie 1,80 m potrzebujesz ok. 0,56 kotwy na metr bieżący. Jednak narożniki, skrzyżowania i złącza wymagają dodatkowych kotew, więc w praktyce planuj 0,7–0,9 kotwy na metr." },
    { question: "Jaka jest różnica między kotwami typu J i L?", answer: "Kotwy J mają hak w kształcie litery J, który zakotwia się w betonie — są najpopularniejsze w budownictwie mieszkaniowym. Kotwy L mają zagięcie pod kątem prostym i oferują większą odporność na wyrywanie, co sprawdza się w lokalizacjach narażonych na wiatr." },
    { question: "Ile kosztują kotwy fundamentowe w Polsce?", answer: "Ceny kotew w Castoramie, Leroy Merlin czy PSB Mrówka wynoszą od 3 do 12 zł za sztukę w zależności od średnicy (M12–M16), długości i wykończenia (ocynkowane, nierdzewne)." },
  ],
};

export const sillSealCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Zmierz całkowity obwód fundamentu w metrach bieżących.",
    "Wprowadź wydajność rolki (standardowo 15 m).",
    "Wybierz szerokość uszczelki (90 mm lub 140 mm).",
    "Kliknij Oblicz materiały, aby zobaczyć liczbę potrzebnych rolek.",
  ],
  materialInfo:
    "Uszczelka podwalinowa to taśma z pianki polietylenowej (PE) umieszczana między betonowym fundamentem a impregnowaną podwaliną drewnianą. Jej głównym zadaniem jest zapobieganie infiltracji powietrza, kapilarnemu podciąganiu wilgoci oraz przenikaniu owadów. Dostępna jest w rolkach o różnych szerokościach — najczęściej 90 mm, 140 mm i 200 mm — dopasowanych do standardowych przekrojów drewna. Standardowa grubość to 6 mm, choć dostępna jest również wersja 12 mm dla nierównych powierzchni fundamentu. W Polsce uszczelkę podwalinową można nabyć w Castoramie, Leroy Merlin, OBI i hurtowniach budowlanych PSB Mrówka w cenach od 15 do 45 zł za rolkę 15 m. Jest to tani materiał, który zapewnia znaczne oszczędności energetyczne eliminując przenikanie powietrza u podstawy ściany. Warunki techniczne (WT 2021) kładą coraz większy nacisk na szczelność powietrzną budynków, co czyni uszczelkę podwalinową niezbędnym elementem w osiąganiu wymaganych parametrów przepuszczalności powietrznej. W polskim klimacie z mroźnymi zimami i temperaturami do -30°C prawidłowe uszczelnienie tego połączenia jest kluczowe dla efektywności energetycznej budynku.",
  nextSteps: [
    { label: "Kalkulator Podwaliny Impregnowanej", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Kalkulator Kotew Fundamentowych", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Kalkulator Belki Obwodowej", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Rozwiń uszczelkę na fundamencie tuż przed ułożeniem podwalin.",
    "Zakładki na złączach powinny wynosić co najmniej 150 mm.",
    "Stosuj uszczelkę kompatybilną z drewnem impregnowanym — niektóre pianki degradują pod wpływem środków impregnujących.",
    "Upewnij się, że powierzchnia fundamentu jest czysta i sucha przed ułożeniem uszczelki.",
    "Na nierównych fundamentach użyj uszczelki o grubości 12 mm zamiast standardowej 6 mm.",
  ],
  commonMistakes: [
    "Pominięcie uszczelki podwalinowej — jest wymagana dla zachowania szczelności powietrznej wg WT.",
    "Brak zakładek na złączach, co powoduje przenikanie powietrza.",
    "Stosowanie uszczelki o niewłaściwej szerokości — musi odpowiadać szerokości podwaliny.",
    "Układanie uszczelki na wilgotnym lub brudnym fundamencie, co pogarsza przyleganie.",
    "Ignorowanie wymagań dotyczących izolacji przeciwwilgociowej (folia PE) pod uszczelką.",
  ],
  faqs: [
    { question: "Czy uszczelka podwalinowa jest wymagana przepisami?", answer: "Warunki techniczne (WT 2021) wymagają szczelnej powietrznej konstrukcji. Uszczelka podwalinowa jest standardową metodą zapewnienia szczelności połączenia beton-drewno i inspektorzy nadzoru budowlanego oczekują jej stosowania." },
    { question: "Jaką szerokość uszczelki wybrać?", answer: "Szerokość uszczelki musi odpowiadać szerokości podwaliny. Dla podwaliny 45×90 mm użyj uszczelki 90 mm, dla 45×140 mm — uszczelki 140 mm. Pianka ulega kompresji po dociśnięciu podwaliny śrubami." },
    { question: "Czy mogę użyć folii PE zamiast uszczelki?", answer: "Folia PE (izolacja przeciwwilgociowa) chroni przed wilgocią, ale nie zapewnia takiej samej szczelności powietrznej jak pianka. Najlepsza praktyka to stosowanie obu: folii PE od spodu i uszczelki piankowej od góry." },
    { question: "Ile kosztuje uszczelka podwalinowa w Polsce?", answer: "Uszczelka kosztuje od 15 do 45 zł za rolkę 15 m w Castoramie, Leroy Merlin czy OBI. Na typowy dom o obwodzie 40 m potrzebujesz 3 rolek — czyli ok. 45–135 zł łącznie." },
    { question: "Czy uszczelka jest potrzebna na ścianach wewnętrznych?", answer: "Uszczelka jest stosowana przede wszystkim na ścianach zewnętrznych, gdzie połączenie beton-drewno jest najbardziej narażone na wilgoć i przenikanie powietrza. Ściany działowe na płycie betonowej zwykle nie wymagają uszczelki, chyba że określono to w projekcie." },
    { question: "Gdzie kupić uszczelkę podwalinową?", answer: "Uszczelki podwalinowe dostępne są w Castoramie, Leroy Merlin, OBI, PSB Mrówka, Bricomarché i hurtowniach budowlanych. Wielu dostawców szkieletów drewnianych dołącza je standardowo do zestawu." },
  ],
};

export const sillPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Zmierz całkowity obwód fundamentu w metrach.",
    "Wybierz przekrój drewna (45×90 mm lub 45×140 mm to standard).",
    "Wprowadź standardową długość desek (najczęściej 3,0 m, 4,0 m lub 6,0 m).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę desek i metry bieżące.",
  ],
  materialInfo:
    "Podwalina impregnowana to poziomy element drewniany osadzony bezpośrednio na betonowym fundamencie i zamocowany za pomocą kotew. Stanowi podstawę całej konstrukcji ściany i musi być odporna na wilgoć, owady i grzyby ze względu na kontakt z betonem. W Polsce podwaliny wykonuje się z drewna iglastego klasy C16 lub C24, impregnowanego ciśnieniowo do klasy użytkowania 2 lub 4 wg PN-EN 335. Standardowe przekroje to 45×90 mm dla ścian 90 mm i 45×140 mm dla ścian 140 mm. Drewno dostępne jest w długościach 3,0 m, 4,0 m i 6,0 m. Ceny w hurtowniach budowlanych (Castorama, Leroy Merlin, PSB Mrówka) wynoszą od 15 do 45 zł za metr bieżący w zależności od przekroju i poziomu impregnacji. Wszystkie podwaliny w kontakcie z betonem muszą być impregnowane zgodnie z PN-EN 351-1. Przy łączeniu podwalin złącza muszą przypadać na punkt podparcia i znajdować się w odległości nie większej niż 300 mm od kotwy po każdej stronie złącza. W polskim klimacie z głębokością przemarzania 80–140 cm prawidłowa izolacja przeciwwilgociowa pod podwaliną jest absolutnie kluczowa.",
  nextSteps: [
    { label: "Kalkulator Kotew Fundamentowych", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Kalkulator Uszczelki Podwalinowej", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Ułóż folię PE i uszczelkę piankową na fundamencie przed ułożeniem podwaliny.",
    "Nawierć otwory na kotwy w podwalinie, używając kotew jako prowadnic.",
    "Sprawdź poziom podwaliny na całej długości — w razie potrzeby zastosuj podkładki.",
    "Upewnij się, że wszystkie złącza przypadają na punkt podparcia i są zabezpieczone kotwami po obu stronach.",
    "Używaj drewna suszoneog komorowo (KD) dla mniejszych odkształceń.",
  ],
  commonMistakes: [
    "Użycie drewna nieimpregnowanego — zgnije w ciągu kilku lat w kontakcie z betonem.",
    "Brak sprawdzenia poziomu fundamentu przed montażem — ten błąd kumuluje się w całej konstrukcji.",
    "Umieszczanie złączy z dala od kotew, co pozostawia niezabezpieczone odcinki.",
    "Pominięcie izolacji przeciwwilgociowej (folia PE) między betonem a drewnem.",
    "Stosowanie drewna mokrego zamiast suszonego komorowo, co prowadzi do skurczu i odkształceń.",
  ],
  faqs: [
    { question: "Jaki poziom impregnacji jest wymagany dla podwalin?", answer: "Podwaliny w kontakcie z betonem wymagają impregnacji ciśnieniowej co najmniej do klasy użytkowania 2 (UC2) wg PN-EN 335. W przypadku ryzyka trwałego zawilgocenia zalecana jest klasa 4 (UC4). Zawsze sprawdzaj certyfikat impregnacji od dostawcy." },
    { question: "Czy mogę użyć drewna nieimpregnowanego?", answer: "Nie. Drewno nieimpregnowane w kontakcie z betonem będzie wchłaniać wilgoć i szybko gnić. Prawo budowlane i WT wymagają stosowania drewna trwałego lub impregnowanego wszędzie tam, gdzie styka się ono z murem lub betonem." },
    { question: "Jaki przekrój podwaliny jest potrzebny?", answer: "Podwalina musi odpowiadać szerokości słupków ściany. Dla ścian 90 mm — podwalina 45×90 mm, dla ścian 140 mm — podwalina 45×140 mm. Wysokość 45 mm jest standardowa dla obu wariantów." },
    { question: "Ile kosztuje podwalina impregnowana?", answer: "Drewno C16 impregnowane na podwaliny kosztuje ok. 15–30 zł/m.b. dla przekroju 45×90 mm i 25–45 zł/m.b. dla 45×140 mm w polskich hurtowniach budowlanych. Zakup hurtowy daje lepszą cenę." },
    { question: "Czy pod podwaliną potrzebna jest izolacja przeciwwilgociowa?", answer: "Tak. Folia PE (izolacja przeciwwilgociowa) powinna być ułożona między betonem a podwaliną, aby zapobiec migracji wilgoci. Najlepsza praktyka to folia PE od spodu i uszczelka piankowa od góry." },
    { question: "Jak łączyć odcinki podwaliny?", answer: "Standardowe złącze to styk czołowy. Każde złącze musi przypadać na punkt podparcia i mieć kotwę w odległości do 300 mm po każdej stronie. Złącza podwaliny nie powinny pokrywać się z pozycjami słupków ani złączami oczepów powyżej." },
  ],
};

export const concreteCalculator: CalculatorSEOContent = {
  disclaimer: "Objętości betonu są szacunkowe. Zamów 5–10% więcej, aby uwzględnić rozlanie, nadmierne wybranie i nieregularności szalunku.",
  howToUse: [
    "Wprowadź długość, szerokość i głębokość wylewki w metrach.",
    "Wybierz kształt: płyta, ława lub słup.",
    "Podaj klasę betonu (C20/25 lub C25/30).",
    "Kliknij Oblicz materiały, aby otrzymać metry sześcienne i liczbę worków.",
  ],
  materialInfo:
    "Beton jest najczęściej stosowanym materiałem budowlanym w Polsce, składającym się z cementu, kruszywa, piasku i wody, mieszanych w celu uzyskania określonej wytrzymałości na ściskanie. Dla fundamentów mieszkaniowych standardem jest beton klasy C25/30 (dawniej B25), osiągający wytrzymałość 25 MPa po 28 dniach. Beton towarowy dostarczany jest betonomieszarką i jest najbardziej praktyczną opcją dla wylewek powyżej 1 m³. Do mniejszych prac dostępny jest beton workowy (Atlas, Knauf, Baumit, Kreisel) w workach 25 kg, dostępny w Castoramie, Leroy Merlin, OBI i PSB Mrówka. Worek 25 kg betonu gotowego daje ok. 0,012 m³ po wymieszaniu. Beton towarowy w Polsce kosztuje zwykle 280–500 zł/m³ z dostawą, z minimalnym zamówieniem ok. 3–5 m³ lub dopłatą za mały załadunek. Beton workowy jest droższy w przeliczeniu na m³, ale pozwala uniknąć minimalnego zamówienia i nadaje się do słupków, małych stóp i napraw. Dla fundamentów konstrukcyjnych zawsze stosuj beton zgodny z PN-EN 206 i PN-B-06265. W warunkach mrozu — częstych w Polsce od listopada do marca — stosuj beton napowietrzony lub dodatki mrozoodporne.",
  nextSteps: [
    { label: "Kalkulator Płyty Betonowej", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Kalkulator Ławy Fundamentowej", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Kalkulator Słupa Betonowego", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Upewnij się, że szalunek jest bezpieczny, wypoziomowany i usztywniony przed wylewką.",
    "Zagęszczaj beton wibratorem lub sztychem zbrojeniowym, aby eliminować pęcherzyki powietrza.",
    "Pielęgnuj beton przez co najmniej 7 dni, utrzymując go wilgotnym — przykryj folią PE lub wilgotną jutą.",
    "Nie wylewaj betonu, gdy temperatura spada poniżej 2°C, chyba że stosujesz dodatki mrozoodporne.",
    "W upalne dni (powyżej 30°C) zraszaj beton wodą co kilka godzin, aby zapobiec zbyt szybkiemu schnięciu.",
  ],
  commonMistakes: [
    "Zamówienie za mało betonu — zawsze dodaj 5–10% na rozlanie i nieregularności szalunku.",
    "Dodawanie za dużo wody do mieszanki — znacząco obniża wytrzymałość betonu.",
    "Brak zagęszczenia betonu, co pozostawia pustki powietrzne zmniejszające wytrzymałość.",
    "Wylewanie betonu w mrozie bez odpowiednich środków ochronnych.",
    "Zbyt wczesne obciążanie betonu — minimalna wytrzymałość użytkowa wymaga 7 dni pielęgnacji.",
  ],
  faqs: [
    { question: "Jaka klasa betonu na fundamenty?", answer: "Dla standardowych ław i stóp fundamentowych stosuje się beton klasy C25/30 (dawniej B25) o wytrzymałości 25 MPa po 28 dniach. Dla płyt garażowych i chodników wystarczy C20/25. Zawsze konsultuj się z konstruktorem." },
    { question: "Ile worków betonu na 1 metr sześcienny?", answer: "Potrzebujesz ok. 80–85 worków betonu gotowego 25 kg na 1 m³. Daje to koszt ok. 1600–2500 zł/m³, co jest znacząco droższe niż beton towarowy za 280–500 zł/m³. Beton workowy jest praktyczny tylko do prac poniżej 0,5 m³." },
    { question: "Kiedy beton towarowy, a kiedy workowy?", answer: "Beton towarowy stosuj przy wylewkach powyżej 1 m³ — jest znacznie bardziej ekonomiczny i jednorodny. Beton workowy nadaje się do słupków ogrodzeniowych, małych stóp, drobnych napraw i sytuacji, gdy betonomieszarka nie ma dojazdu do miejsca wylewki." },
    { question: "Ile kosztuje beton towarowy w Polsce?", answer: "Beton towarowy kosztuje zwykle 280–500 zł/m³ z dostawą, w zależności od klasy i regionu. Większość dostawców ma minimalnie zamówienie (3–5 m³) lub nalicza dopłatę 30–60 zł/m³ poniżej minimum. Pompa to dodatkowe 800–1500 zł." },
    { question: "Czy mogę wylewać beton zimą?", answer: "Tak, ale z zachowaniem ostrożności. Nie wylewaj przy temperaturze poniżej 2°C. Stosuj szybkowiążące lub mrozoodporne domieszki, izoluj szalunek kocami i chroń świeżą wylewkę przed mrozem przez co najmniej 48 godzin. W Polsce sezon mrozowy trwa od listopada do marca." },
    { question: "Jaka jest minimalna głębokość fundamentów w Polsce?", answer: "Zgodnie z PN-EN 1997 i warunkami technicznymi (WT) głębokość posadowienia musi być poniżej strefy przemarzania gruntu: 80 cm w strefie I (zachodnia Polska), 100 cm w strefie II (centralna), 120 cm w strefie III (wschodnia) i 140 cm w strefie IV (północno-wschodnia). W gruntach gliniastych może być wymagana większa głębokość." },
  ],
};

export const concreteSlabCalculator: CalculatorSEOContent = {
  disclaimer: "Zamów 5–10% więcej betonu, aby uwzględnić nierówności podbudowy i szalunku.",
  howToUse: [
    "Wprowadź długość i szerokość płyty w metrach.",
    "Wprowadź grubość płyty w milimetrach (100 mm to standard na garaże, 150 mm na podjazdy).",
    "Wybierz klasę betonu.",
    "Kliknij Oblicz materiały, aby otrzymać objętość w m³ i liczbę worków.",
  ],
  materialInfo:
    "Płyty betonowe stosuje się na podłogi garaży, podjazdy, patio, podstawy pod altany i budynki gospodarcze oraz podłogi na gruncie w budownictwie polskim. Standardowa płyta garażowa ma grubość 100 mm z betonu C25/30 na zagęszczonej podbudowie z kruszywa łamanego. Podjazdy obciążone ruchem pojazdów powinny mieć co najmniej 150 mm grubości. Podbudowa to zwykle 15–20 cm zagęszczonego kruszywa łamanego 0/31,5 mm z folią PE (izolacją przeciwwilgociową) 0,3 mm ułożoną na wierzchu przed wylewką. Zbrojenie to zwykle siatka zgrzewana Q131 lub Q188 ułożona na podkładkach dystansowych w połowie grubości płyty. Dla podłóg mieszkalnych stosuje się izolację termiczną — zwykle 10–15 cm styropianu EPS 100 (Styropmin, Swisspor, Austrotherm) lub PIR pod płytą zgodnie z WT 2021. Płyty muszą mieć dylatacje w odstępach co 4–6 metrów, aby kontrolować pękanie. Ceny betonu towarowego to 280–500 zł/m³, a typowa płyta garażowa 20 m² o grubości 100 mm wymaga ok. 2 m³.",
  nextSteps: [
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Kalkulator Ławy Fundamentowej", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Kalkulator Schodów Betonowych", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Zagęszczaj podbudowę warstwami za pomocą zagęszczarki płytowej lub walca wibracyjnego.",
    "Ułóż folię PE na podbudowie z zakładami min. 30 cm na złączach.",
    "Umieść siatkę zbrojeniową Q131 na podkładkach dystansowych w połowie grubości płyty.",
    "Używaj łat aluminiowych lub prowadnic do wyrównania powierzchni betonu.",
    "W sezonie letnim zraszaj beton wodą przez pierwsze 7 dni pielęgnacji.",
  ],
  commonMistakes: [
    "Pominięcie podbudowy — wylewanie betonu bezpośrednio na grunt prowadzi do pękania osiadowego.",
    "Zbyt cienka płyta na planowane obciążenie — minimum 100 mm dla ruchu pieszego, 150 mm dla pojazdów.",
    "Brak dylatacji, co skutkuje niekontrolowanym pękaniem.",
    "Nieuwzględnienie izolacji termicznej pod płytą w pomieszczeniach mieszkalnych (wymaganie WT 2021).",
    "Wylewanie na niezagęszczoną podbudowę, co prowadzi do nierównomiernego osiadania.",
  ],
  faqs: [
    { question: "Jaka grubość płyty betonowej na garaż?", answer: "Standardowa płyta garażowa powinna mieć co najmniej 100 mm grubości z betonu C25/30 na 15 cm zagęszczonej podbudowy z kruszywa. Jeśli będą parkować ciężkie pojazdy, zwiększ do 150 mm ze zbrojeniem Q188." },
    { question: "Czy potrzebuję zbrojenia w płycie?", answer: "Zbrojenie siatką (Q131 lub Q188) jest zdecydowanie zalecane dla wszystkich płyt. Kontroluje pękanie i rozkłada obciążenia. Nadzór budowlany zwykle wymaga go dla podłóg mieszkalnych i garaży." },
    { question: "Ile kosztuje płyta garażowa w Polsce?", answer: "Typowa płyta garażowa (3×6 m, 100 mm) zużywa ok. 1,8 m³ betonu po 280–500 zł/m³ (500–900 zł za sam beton). Dodaj 500–1000 zł na podbudowę, folię, siatkę i szalunek. Samodzielnie: 1000–2000 zł. Z wykonawcą: 3000–6000 zł." },
    { question: "Czy potrzebuję izolacji pod płytą?", answer: "Dla pomieszczeń mieszkalnych (dobudowy, adaptacje) WT 2021 wymaga izolacji podłogowej. Zwykle 10–15 cm styropianu EPS 100 lub XPS (Styropmin, Swisspor, Austrotherm) umieszcza się pod płytą. Dla wolnostojących garaży i altan izolacja zwykle nie jest wymagana." },
    { question: "Jaka podbudowa pod płytę betonową?", answer: "Stosuj 15–20 cm zagęszczonego kruszywa łamanego 0/31,5 mm. Zagęszczaj warstwami za pomocą zagęszczarki płytowej. Podbudowa zapewnia drenaż, zapobiega wysadzinom mrozowym i równomiernie rozkłada obciążenia na grunt." },
    { question: "Czy mogę wylać płytę samodzielnie?", answer: "Tak, dla małych płyt (do ok. 3–4 m³). Potrzebujesz szalunku, zagęszczarki, wibratora do betonu i wystarczającej liczby pomocników, aby ułożyć i wyrównać beton, zanim zacznie wiązać. Dla większych płyt zatrudnij ekipę — beton nie czeka." },
  ],
};

export const concreteFootingCalculator: CalculatorSEOContent = {
  disclaimer: "Wymiary ławy muszą być zgodne z projektem konstrukcyjnym i warunkami technicznymi. Zawsze uzyskaj zatwierdzenie nadzoru budowlanego przed rozpoczęciem prac.",
  howToUse: [
    "Wprowadź długość, szerokość i głębokość ławy w metrach.",
    "Dla ław ciągłych wprowadź całkowitą długość biegu.",
    "Wybierz klasę betonu (C25/30 to standard).",
    "Kliknij Oblicz materiały, aby otrzymać metry sześcienne i liczbę worków.",
  ],
  materialInfo:
    "Ławy fundamentowe rozkładają obciążenie budynku na grunt i są krytycznym elementem konstrukcyjnym regulowanym przez Prawo budowlane oraz warunki techniczne (WT). W Polsce dwa główne typy to ławy ciągłe (ciągłe wykopy pod ścianami) i stopy fundamentowe (pojedyncze podstawy pod słupy). Ławy ciągłe dla standardowego domu dwukondygnacyjnego mają zwykle szerokość 60–80 cm i głębokość minimum 30 cm, choć rzeczywiste wymiary zależą od nośności gruntu i obciążeń budynku. Ławy powinny być posadowione poniżej strefy przemarzania: 80 cm w strefie I, 100 cm w strefie II, 120 cm w strefie III i 140 cm w strefie IV (północno-wschodnia Polska). Beton na ławy to zwykle C25/30, a beton towarowy jest najbardziej praktyczną opcją dla wymaganych objętości. Typowy dom jednorodzinny wymaga 8–20 m³ betonu na fundamenty. W gruntach gliniastych, powszechnych w centralnej Polsce, PN-EN 1997 (Eurokod 7) oraz normy PZITB zawierają wytyczne dotyczące głębokości posadowienia w zależności od rodzaju gruntu i obecności drzew.",
  nextSteps: [
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Kalkulator Płyty Betonowej", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Kalkulator Kotew Fundamentowych", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Kopanie prowadź do warstwy gruntu rodzimego, nośnego — nigdy nie buduj na nasypie bez opinii geotechnicznej.",
    "Utrzymuj wykopy czyste i wolne od luźnego gruntu przed betonowaniem.",
    "Wylewaj beton jak najszybciej po wykopaniu, aby zapobiec wysychaniu lub osypywaniu się ścian wykopu.",
    "W gruntach gliniastych stosuj folię PE na ścianach wykopu jako ochronę przed wysadzinami.",
    "Zamów badanie geotechniczne gruntu przed rozpoczęciem prac — to wymóg Prawa budowlanego.",
  ],
  commonMistakes: [
    "Zbyt płytkie kopanie — fundamenty muszą być posadowione poniżej strefy przemarzania (80–140 cm w zależności od regionu).",
    "Ignorowanie wpływu drzew na grunty gliniaste — korzenie mogą powodować osiadanie i wysadziny.",
    "Betonowanie na podmokłym lub zamarzniętym gruncie, co osłabia wiązanie betonu z podłożem.",
    "Brak zbrojenia ławy — standardowe ławy wymagają zbrojenia podłużnego i poprzecznego.",
    "Pominięcie izolacji przeciwwilgociowej na ławach i ścianach fundamentowych.",
  ],
  faqs: [
    { question: "Jak głęboko muszą sięgać fundamenty w Polsce?", answer: "Głębokość posadowienia musi być poniżej strefy przemarzania: 80 cm (strefa I, zachodnia Polska), 100 cm (strefa II, centralna), 120 cm (strefa III, wschodnia) i 140 cm (strefa IV, północno-wschodnia). W gruntach gliniastych przy drzewach głębokość może być jeszcze większa. Nadzór budowlany określa głębokość na podstawie opinii geotechnicznej." },
    { question: "Jaka jest różnica między ławą ciągłą a stopą fundamentową?", answer: "Ławy ciągłe to ciągłe elementy betonowe pod ścianami, rozkładające obciążenie liniowo. Stopy fundamentowe to punktowe elementy pod pojedynczymi słupami. Ławy ciągłe są standardem w budownictwie mieszkaniowym, stopy stosuje się pod słupami i konstrukcjami szkieletowymi." },
    { question: "Jaka szerokość ławy fundamentowej?", answer: "Dla standardowego domu dwukondygnacyjnego na nośnym gruncie ławy mają zwykle 60–80 cm szerokości. Na słabszych gruntach mogą wymagać 100 cm lub więcej. Szerokość określa konstruktor na podstawie obciążeń i nośności gruntu." },
    { question: "Czy potrzebuję pozwolenia na budowę fundamentów?", answer: "Tak. Prace fundamentowe wymagają pozwolenia na budowę lub zgłoszenia. Inspektor nadzoru budowlanego przeprowadza kontrolę na etapie wykopów (przed betonowaniem) i po wybetonowaniu. Musisz mieć zatwierdzony projekt przed rozpoczęciem." },
    { question: "Ile betonu potrzebuję na fundamenty domu?", answer: "Typowy dom jednorodzinny z ławami ciągłymi wymaga 8–20 m³ betonu, co kosztuje 2200–10 000 zł za sam beton. Dokładna objętość zależy od głębokości, szerokości ław i obwodu budynku." },
    { question: "Czy mogę zastosować płytę fundamentową zamiast ław?", answer: "Tak. Płyta fundamentowa to zbrojona płyta betonowa pokrywająca cały obrys budynku. Stosuje się ją na słabych gruntach, nasypach lub tam, gdzie warunki gruntowe są złożone. Płyty fundamentowe są droższe, ale lepiej rozkładają obciążenia. Projekt musi opracować konstruktor." },
  ],
};

export const concreteColumnCalculator: CalculatorSEOContent = {
  disclaimer: "Wymiary słupów betonowych powinny być zweryfikowane przez konstruktora dla zastosowań nośnych.",
  howToUse: [
    "Wprowadź średnicę słupa w milimetrach (200, 250 lub 300 mm to standard).",
    "Wprowadź wysokość lub głębokość słupa w metrach.",
    "Wprowadź liczbę słupów.",
    "Kliknij Oblicz materiały, aby otrzymać łączne metry sześcienne i liczbę worków.",
  ],
  materialInfo:
    "Słupy betonowe (filary) to cylindryczne fundamenty betonowe służące do podparcia słupków, ram tarasowych, pergoli i lekkich konstrukcji. Formuje się je za pomocą tekturowych szalunków rurowych osadzonych w wykopanych otworach i wypełnionych betonem. Standardowe średnice w Polsce to 200 mm, 250 mm i 300 mm, przy czym 250 mm jest najczęściej stosowana dla tarasów i pergoli. Każdy słup o średnicy 250 mm i głębokości 900 mm wymaga ok. 0,044 m³ betonu, czyli ok. 4 worków po 25 kg. Szalunki rurowe kosztują 15–50 zł za sztukę w hurtowniach budowlanych. Głębokość słupa musi sięgać poniżej strefy przemarzania i do warstwy nośnej gruntu — w Polsce minimum 80 cm w strefie I do 140 cm w strefie IV. Dla słupów konstrukcyjnych stosuj beton C25/30 z kotwą słupkową lub stopą osadzoną w betonie, zamiast osadzać drewniany słupek bezpośrednio w betonie. W polskim klimacie z ciężkimi zimami prawidłowa głębokość posadowienia jest kluczowa dla uniknięcia wysadzin mrozowych.",
  nextSteps: [
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Kalkulator Stóp Fundamentowych Tarasu", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Kalkulator Ławy Fundamentowej", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Przytnij szalunek rurowy do prawidłowej wysokości przed osadzeniem w otworze.",
    "Użyj poziomnicy, aby upewnić się, że szalunek jest pionowy przed zalewaniem betonem.",
    "Osadź kotwy słupkowe lub śruby J w mokrym betonie na szczycie każdego słupa.",
    "Poszerz nieco dno wykopu względem średnicy szalunku dla lepszego podparcia.",
    "Upewnij się, że dno wykopu sięga poniżej strefy przemarzania — w Polsce to 80–140 cm.",
  ],
  commonMistakes: [
    "Zbyt płytkie kopanie — słupy muszą sięgać poniżej strefy przemarzania do warstwy nośnej gruntu.",
    "Osadzanie drewnianych słupków bezpośrednio w betonie — to zatrzymuje wilgoć i powoduje gnicie; używaj metalowej stopy.",
    "Brak kontroli, czy szczyty wszystkich słupów są na tym samym poziomie przed wiązaniem betonu.",
    "Ignorowanie strefy przemarzania, co prowadzi do wysadzin mrozowych i przechylania się słupów.",
    "Stosowanie betonu o zbyt niskiej klasie — minimum C20/25 dla słupów konstrukcyjnych.",
  ],
  faqs: [
    { question: "Jak głęboko powinny sięgać słupy betonowe w Polsce?", answer: "Słupy powinny sięgać co najmniej poniżej strefy przemarzania: 80 cm w strefie I (zachodnia Polska) do 140 cm w strefie IV (północno-wschodnia). Dla tarasów i konstrukcji przy drzewach na gruncie gliniastym może być wymagana większa głębokość." },
    { question: "Jaką średnicę szalunku wybrać?", answer: "Dla standardowych słupków tarasowych i pergoli 250 mm jest najczęstsza. Dla dużych obciążeń lub grubszych słupków — 300 mm. 200 mm nadaje się do lekkich konstrukcji jak pergole i małe altany." },
    { question: "Ile worków betonu na jeden słup?", answer: "Słup 250 mm × 900 mm wymaga ok. 0,044 m³ betonu, czyli ok. 4 worki po 25 kg. Słup 300 mm × 900 mm to ok. 0,064 m³, czyli 5–6 worków." },
    { question: "Czy mogę użyć betonu szybkowiążącego na słupy?", answer: "Beton szybkowiążący (np. do słupków ogrodzeniowych) nadaje się do lekkich konstrukcji. Dla słupów konstrukcyjnych tarasu czy pergoli stosuj standardowy beton C25/30 dla większej wytrzymałości i trwałości." },
    { question: "Czy potrzebuję zbrojenia w słupach betonowych?", answer: "Dla standardowych stóp tarasowych zbrojenie zwykle nie jest wymagane. Dla wyższych słupów lub niosących znaczne obciążenia konstruktor może wskazać zbrojenie stalowe. Zawsze konsultuj z konstruktorem zastosowania nośne." },
    { question: "Gdzie kupić szalunki rurowe w Polsce?", answer: "Szalunki rurowe (typu Sonotube) dostępne są w hurtowniach budowlanych, Castoramie, Leroy Merlin i u specjalistycznych dostawców szalunków. Średnice od 150 mm do 600 mm. Koszt to 15–50 zł za sztukę." },
  ],
};

export const concreteStepsCalculator: CalculatorSEOContent = {
  disclaimer: "Wymiary schodów muszą być zgodne z warunkami technicznymi (WT). Zawsze weryfikuj wysokość i głębokość stopni z nadzorem budowlanym.",
  howToUse: [
    "Wprowadź całkowitą wysokość (wznios) w milimetrach.",
    "Wprowadź szerokość schodów w metrach.",
    "Wprowadź liczbę stopni — podziel wznios przez wysokość pojedynczego stopnia (zwykle 150–175 mm).",
    "Kliknij Oblicz materiały, aby otrzymać metry sześcienne betonu.",
  ],
  materialInfo:
    "Schody betonowe zapewniają trwałe, niskoobsługowe wejście do budynków i podlegają warunkom technicznym (WT §68–§71). Dla schodów zewnętrznych maksymalna wysokość stopnia wynosi 175 mm (zalecane 150–170 mm), a minimalna głębokość stopnia 250 mm. Wszystkie stopnie w biegu muszą być jednakowe z tolerancją do 5 mm. Schody formuje się zwykle w szalunku drewnianym i wypełnia betonem C25/30, często na zagęszczonej podbudowie z kruszywa. Zbrojenie siatką Q131 lub prętami jest zalecane, zwłaszcza dla szerszych biegów. Powierzchnia powinna mieć fakturę antypoślizgową — uzyskaną przez szczotkowanie świeżego betonu lub nałożenie wykończenia antypoślizgowego. Polskie warunki klimatyczne z opadami śniegu i gołoledzią wymagają, aby schody zewnętrzne miały lekki spadek (ok. 1:60) na zewnątrz dla odprowadzenia wody. Ceny betonu towarowego to 280–500 zł/m³, a typowy bieg 3-stopniowy zużywa 0,3–0,6 m³. Balustrada jest wymagana przy różnicy poziomów powyżej 50 cm zgodnie z WT.",
  nextSteps: [
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Kalkulator Płyty Betonowej", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Kalkulator Schodów Tarasowych", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Wykonaj szalunek ze sklejki 18 mm lub desek szalunkowych, dobrze usztywniony, aby wytrzymać ciężar mokrego betonu.",
    "Upewnij się, że wszystkie stopnie mają jednakową wysokość — nierówne stopnie to zagrożenie potknięciem i naruszenie WT.",
    "Przeszczotkuj powierzchnię każdego stopnia sztywną szczotką, gdy beton jest jeszcze plastyczny, dla uzyskania antypoślizgowości.",
    "Pielęgnuj beton przez co najmniej 7 dni przed rozszalowaniem lub dopuszczeniem ruchu pieszego.",
    "Na zimę rozważ zastosowanie mat grzewczych lub chemii antyoblodzeniowej na gotowych schodach.",
  ],
  commonMistakes: [
    "Nierówna wysokość stopni — wszystkie muszą być jednakowe z tolerancją do 5 mm wg WT.",
    "Brak faktury antypoślizgowej — gładkie schody betonowe są ekstremalnie śliskie w mokrych warunkach i na gołoledzi.",
    "Pominięcie balustrady — wymagana przy różnicy poziomów powyżej 50 cm.",
    "Brak spadku na stopniach, co prowadzi do gromadzenia się wody i lodu zimą.",
    "Zbyt wczesne rozszalowanie, zanim beton osiągnie wystarczającą wytrzymałość.",
  ],
  faqs: [
    { question: "Jakie wymiary schodów zewnętrznych wg WT?", answer: "WT §68–§71 określają: maksymalna wysokość stopnia 175 mm, minimalna głębokość 250 mm. Zalecane wartości to wysokość 150–170 mm i głębokość 280–320 mm. Wszystkie stopnie muszą być jednakowe z tolerancją 5 mm. Balustrada wymagana przy różnicy powyżej 50 cm." },
    { question: "Ile worków betonu na 3 stopnie?", answer: "Typowy bieg 3-stopniowy (900 mm szerokości, 170 mm wysokość stopnia, 280 mm głębokość) zużywa ok. 0,3 m³ betonu, czyli ok. 25 worków po 25 kg. Dla większych biegów beton towarowy jest bardziej ekonomiczny." },
    { question: "Czy schody betonowe wymagają zbrojenia?", answer: "Zbrojenie jest zalecane dla wszystkich schodów betonowych, zwłaszcza biegów szerszych niż 900 mm. Stosuj siatkę Q131 lub pręty zbrojeniowe fi 10 co 200 mm. Zbrojenie zapobiega pękaniu od osiadania, ruchów termicznych i obciążeń." },
    { question: "Jaka jest idealna wysokość stopnia?", answer: "Idealna wysokość stopnia schodów zewnętrznych to 150–170 mm przy głębokości 280–320 mm. Daje to wygodny kąt chodzenia ok. 30–35°. Wyższe stopnie są niewygodne, niższe marnują przestrzeń." },
    { question: "Czy potrzebuję balustrady na schodach betonowych?", answer: "Tak, jeśli różnica poziomów przekracza 50 cm. Balustrada jest wymagana po co najmniej jednej stronie wg WT. Dla schodów szerszych niż 1,5 m wymagana jest po obu stronach. Wysokość balustrady: 90–110 cm." },
    { question: "Jak zabezpieczyć schody betonowe przed poślizgiem?", answer: "Przeszczotkuj powierzchnię szczotką ryżową, gdy beton jest jeszcze plastyczny. Tworzy to fakturę zapewniającą przyczepność w mokrych warunkach. Alternatywnie nałóż powłokę antypoślizgową po utwardzeniu lub osadź listwy karborundowe w nosek stopnia." },
  ],
};

export const gravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "Ta kalkulacja zawiera 10% zapas na straty. Waga żwiru zależy od rodzaju i wilgotności. Przelicznik 1,5 tony na metr sześcienny jest średnią — rzeczywista waga wynosi od 1,4 do 1,8 t/m³ w zależności od materiału. Zawsze potwierdzaj ilości u dostawcy przed zamówieniem.",
  howToUse: [
    "Zmierz długość powierzchni do pokrycia w metrach.",
    "Zmierz szerokość powierzchni w metrach.",
    "Wprowadź żądaną grubość warstwy żwiru w centymetrach — 10 cm to standard dla większości zastosowań, 15–20 cm dla podjazdów.",
    "Kliknij Oblicz, aby uzyskać metry sześcienne i tony z wliczonym 10% zapasem na straty.",
  ],
  materialInfo:
    "Żwir to luźne kruszywo z fragmentów skalnych stosowane na podjazdy, ścieżki, drenaże, tereny zielone oraz jako podbudowa pod płyty betonowe i nawierzchnie asfaltowe. W Polsce rozróżnia się kilka rodzajów kruszywa w zależności od granulacji i zastosowania: żwir (kruszywo naturalne zaokrąglone o frakcji 8–63 mm), kruszywo łamane/tłuczeń (kruszywo z kruszenia o ostrych krawędziach), podsypka/mieszanka (kruszywo 0–31,5 mm z piaskiem i pyłami, które doskonale się zagęszcza) oraz pospółka (niefrakcjonowane kruszywo naturalne).\n\nNajpopularniejsze typy kruszywa dostępne w polskich składach budowlanych to: tłuczeń 31,5–63 mm (standardowe kruszywo do podbudów i drenażu), żwirek 8–16 mm (zaokrąglone kamyki na ścieżki i rabaty), kliniec 0–31,5 mm (kruszywo podbudowowe, które zagęszcza się w twardą powierzchnię — odpowiednik stabilizacji) oraz kruszywo dekoracyjne (grys granitowy, bazaltowy, marmurowy, otoczaki) do ogrodów i powierzchni reprezentacyjnych.\n\nŻwir sprzedaje się na tony lub metry sześcienne. Metr sześcienny żwiru waży ok. 1,5 tony, choć waga zależy od typu: kliniec jest cięższy — ok. 1,7–1,8 t/m³, żwirek zaokrąglony lżejszy — ok. 1,4 t/m³. Typowe ceny w Polsce to 30–80 zł/tonę za kruszywo standardowe w żwirowniach i składach budowlanych takich jak Castorama, OBI, PSB Mrówka czy lokalne hurtownie. Worki 25 kg (big bag 1 m³ lub luzem) kosztują więcej za m³, ale pozwalają uniknąć minimum dostawy. Dostawa wywrotką to najtańsza opcja przy dużych ilościach — 200–500 zł za ładunek 10 ton w promieniu 30 km.\n\nNa podjazdy standardowe podejście w Polsce to dwie warstwy: 15 cm zagęszczonego klińca 0–31,5 mm jako podbudowa, pokrytego 5–8 cm żwiru dekoracyjnego lub tłucznia. Na ścieżki piesze, obrzeża i rabaty wystarczy jedna warstwa 5–8 cm na geowłókninie. Lokalne żwirownie często oferują najlepsze ceny na duże ilości i mogą mieć regionalne rodzaje kamienia niedostępne w sieciach marketów.",
  nextSteps: [
    { label: "Kalkulator Żwiru na Podjazd", href: "/calculators/foundation/driveway-gravel-calculator/" },
    { label: "Kalkulator Płyty Betonowej", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Kalkulator Ławy Fundamentowej", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Usunąć całą warstwę ziemi urodzajnej i materię organiczną przed ułożeniem żwiru — materia organiczna rozkłada się i powoduje osiadanie.",
    "Ułożyć geowłókninę na zagęszczonym podłożu, aby zapobiec mieszaniu się żwiru z gruntem pod spodem.",
    "Rozsypywać żwir warstwami po 5–8 cm i zagęszczać każdą warstwę zagęszczarką płytową przed nasypaniem kolejnej.",
    "Zapewnić spadek powierzchni (minimum 1–2%), aby woda opadowa odpływała, a nie stagnowała.",
    "Zastosować obrzeża metalowe, drewniane lub betonowe, aby utrzymać żwir na miejscu i zapobiec jego migracji na sąsiednie tereny.",
  ],
  commonMistakes: [
    "Stosowanie zaokrąglonego żwirku na podjazdy — nie zagęszcza się i przesuwa pod ciężarem kół. Używać kruszywa łamanego lub klińca.",
    "Brak usunięcia ziemi urodzajnej — trawa i korzenie pod żwirem rozkładają się i tworzą zapadliska.",
    "Pominięcie zagęszczania — niezagęszczone kruszywo przesuwa się i szybko tworzą się koleiny.",
    "Zbyt cienka warstwa — mniej niż 8 cm nie zapewnia odpowiedniego pokrycia i podłoże będzie widoczne przez kamień.",
    "Nieuwzględnienie minimum dostawy — większość żwirowni wymaga zamówienia od 5 do 10 ton na dostawę wywrotką.",
  ],
  faqs: [
    {
      question: "Ile żwiru potrzebuję?",
      answer: "Pomnóż długość przez szerokość (w metrach), aby uzyskać powierzchnię w m², następnie pomnóż przez grubość (w metrach), aby uzyskać metry sześcienne. Metr sześcienny pokrywa ok. 10 m² przy grubości 10 cm. Dodaj 10% na straty, zagęszczenie i nierówności terenu. Na przykład powierzchnia 6×6 m przy 10 cm grubości wymaga ok. 4 m³ (6 ton).",
    },
    {
      question: "Ile waży metr sześcienny żwiru?",
      answer: "Metr sześcienny żwiru waży ok. 1500 kg (1,5 tony). Dokładna waga zależy od typu: kliniec jest cięższy — ok. 1,7–1,8 t/m³, standardowy tłuczeń waży ok. 1,5 t/m³, a żwirek zaokrąglony ok. 1,4 t/m³. Mokry żwir może ważyć 10–15% więcej niż suchy.",
    },
    {
      question: "Ile ton żwiru potrzebuję?",
      answer: "Najpierw oblicz metry sześcienne (długość × szerokość × grubość w metrach), następnie pomnóż przez 1,5, aby przeliczyć na tony. Na przykład powierzchnia 3×6 m przy 10 cm grubości to 1,8 m³, czyli ok. 2,7 tony. Zawsze zamawiaj 10% więcej na zagęszczenie i straty.",
    },
    {
      question: "Jaka grubość warstwy żwiru jest potrzebna?",
      answer: "Zalecana grubość zależy od zastosowania: 5–8 cm na rabaty dekoracyjne i lekkie ścieżki, 8–10 cm na patia i obszary ogólne, 15–20 cm na podjazdy (z zagęszczoną podbudową z klińca) i 20–30 cm na tereny komercyjne o dużym natężeniu ruchu. Zagęszczaj każdą warstwę przed nasypaniem kolejnej.",
    },
    {
      question: "Ile kosztuje żwir w Polsce?",
      answer: "Ceny żwiru wynoszą od 30 do 80 zł/tonę w zależności od rodzaju i źródła. Kliniec i tłuczeń to najtańsze opcje — 30–60 zł/tonę z żwirowni. Żwirek zaokrąglony kosztuje 40–70 zł/tonę. Kruszywo dekoracyjne (grys granitowy, bazaltowy) to 80–200 zł/tonę. Dostawa dodaje 150–400 zł za ładunek. Big bagi 1 m³ kosztują 80–200 zł w Castoramie, OBI czy PSB Mrówka.",
    },
    {
      question: "Jaka jest różnica między klińcem a żwirem?",
      answer: "Kliniec (mieszanka 0–31,5 mm) to kruszywo łamane z frakcjami od pyłu do kamieni, które zagęszcza się w bardzo twardą, stabilną powierzchnię — jest standardowym materiałem na podbudowy podjazdów, parkingów i pod płyty betonowe. Żwir to kruszywo jednowymiarowe (zaokrąglone lub łamane) stosowane jako warstwa wykończeniowa. Na podjazd potrzebne są oba: kliniec jako podbudowa i żwir dekoracyjny na wierzch.",
    },
  ],
};

export const drivewayGravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "Ta kalkulacja zawiera 10% zapas na straty. Szacunki kosztów oparte są na polskich średnich i różnią się znacznie w zależności od regionu, dostawcy i odległości dostawy. Waga żwiru zależy od rodzaju i wilgotności. Zawsze uzyskaj wyceny od lokalnych dostawców przed zamówieniem.",
  howToUse: [
    "Zmierz całkowitą długość podjazdu w metrach.",
    "Wprowadź szerokość podjazdu — 3–3,5 m na jedno auto, 5–6 m na podjazd dwupasmowy.",
    "Wprowadź grubość warstwy żwiru — 15 cm to standard, 20 cm dla ciężkich pojazdów.",
    "Wybierz rodzaj kruszywa i kliknij Oblicz, aby uzyskać metry sześcienne, tony i szacowany zakres kosztów.",
  ],
  materialInfo:
    "Podjazd żwirowy to jedna z najtańszych i najbardziej praktycznych alternatyw dla kostki brukowej, asfaltu czy betonu. Przy prawidłowej instalacji z odpowiednimi materiałami i wystarczającą grubością, podjazd żwirowy może służyć 15–20 lat przy minimalnej konserwacji i w większości gmin nie wymaga pozwolenia na budowę.\n\nNajlepszy podjazd żwirowy buduje się w dwóch warstwach. Warstwa dolna (10–15 cm) to zagęszczony kliniec 0–31,5 mm (mieszanka kruszywa łamanego z pyłami), który zapewnia drenaż, stabilność i rozkład obciążeń. Warstwa górna (5–8 cm) to kruszywo dekoracyjne — tłuczeń łamany, grys lub żwir — w zależności od pożądanej estetyki. Każda warstwa musi być rozsypana i zagęszczona oddzielnie zagęszczarką płytową lub walcem.\n\nKliniec 0–31,5 mm jest najpopularniejszym materiałem podbudowy, ponieważ jego zróżnicowane frakcje incastrują się pod zagęszczaniem, tworząc niezwykle stabilne podłoże. Na powierzchnię użytkową tłuczeń 16–31,5 mm jest standardem — jego ostre krawędzie blokują się pod naciskiem kół. Żwirek zaokrąglony wygląda estetycznie, ale przesuwa się pod oponami i nie jest zalecany jako główna powierzchnia jezdna.\n\nKoszt podjazdu żwirowego to 30–80 zł/m² w zależności od grubości i wybranego materiału. Typowy podjazd na jedno auto (3×10 m) kosztuje 1.000–3.000 zł za same materiały. Profesjonalna instalacja ze skopaniem, geowłókniną, podbudową i zagęszczeniem dodaje 40–100 zł/m². Roczna konserwacja polega na grabieniu przemieszczonego żwiru w koleiny oraz dosypywaniu warstwy 3–5 cm co 3–5 lat. Dostawcy to lokalne żwirownie, Castorama, OBI, PSB Mrówka i regionalne składy budowlane.",
  nextSteps: [
    { label: "Kalkulator Żwiru", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Kalkulator Płyty Betonowej", href: "/calculators/foundation/concrete-slab-calculator/" },
  ],
  installationTips: [
    "Wykopać na głębokość co najmniej 20–25 cm poniżej poziomu docelowego, aby pomieścić podbudowę i warstwę powierzchniową.",
    "Zapewnić spadek 1–2% od domu/garażu, aby woda opadowa odpływała — stojąca woda na żwirze tworzy dziury, a mróz je pogarsza.",
    "Ułożyć geowłókninę na wykopanym podłożu, aby zapobiec mieszaniu się kruszywa z gruntem — szczególnie ważne na polskich gliniastych gruntach.",
    "Rozsypać i zagęścić kliniec warstwami po 8 cm zagęszczarką płytową przed nasypaniem warstwy powierzchniowej.",
    "Zamontować obrzeża metalowe, drewniane lub betonowe wzdłuż obu krawędzi, aby zapobiec migracji żwiru na trawnik.",
    "Rozważyć kratki stabilizujące (geokraty) na warstwę powierzchniową, aby zmniejszyć przesuwanie się kamieni i poprawić przejezdność.",
  ],
  commonMistakes: [
    "Stosowanie zaokrąglonego żwirku jako powierzchni jezdnej — okrągły kształt nie zagęszcza się i kamienie rozlatują się pod kołami. Stosować tłuczeń łamany.",
    "Sypanie żwiru bezpośrednio na ziemię urodzajną bez kopania — gleba organiczna rozkłada się i tworzy zapadliska i błoto.",
    "Nałożenie tylko 5–8 cm kruszywa — to za mało na ruch pojazdów, powstaną koleiny sięgające podłoża.",
    "Pominięcie geowłókniny — bez niej żwir zapada się w miękki gliniasty grunt w ciągu 1–2 lat i traci się połowę materiału.",
    "Brak zagęszczania między warstwami — luźny kliniec osiada nierównomiernie i tworzą się dziury i koleiny w ciągu kilku tygodni.",
  ],
  faqs: [
    {
      question: "Ile żwiru potrzebuję na podjazd?",
      answer: "Standardowy podjazd na jedno auto (3 m × 10 m przy 15 cm grubości) wymaga ok. 5 m³ (7,5 tony) kruszywa — ok. 3,5 m³ klińca na podbudowę i 1,5 m³ żwiru powierzchniowego. Podjazd dwupasmowy (6×10 m przy 15 cm) wymaga ok. 10 m³ (15 ton). Te ilości zawierają 10% zapas na straty.",
    },
    {
      question: "Ile kosztuje podjazd żwirowy w Polsce?",
      answer: "Materiały na podjazd żwirowy kosztują 30–80 zł/m² w zależności od rodzaju kruszywa i grubości. Podjazd 3×10 m kosztuje 1.000–3.000 zł za materiały. Profesjonalna instalacja ze skopaniem, geowłókniną i zagęszczeniem kosztuje zwykle 50–120 zł/m², co daje łączny koszt 2.500–6.000 zł za podjazd na jedno auto.",
    },
    {
      question: "Jaki żwir jest najlepszy na podjazd?",
      answer: "Tłuczeń łamany 16–31,5 mm jest najlepszą powierzchnią jezdną, ponieważ jego krawędzie blokują się pod zagęszczeniem. Kliniec 0–31,5 mm jest niezbędny jako warstwa podbudowy. Grys granitowy lub bazaltowy to atrakcyjne opcje dekoracyjne. Unikaj zaokrąglonego żwirku na powierzchnie jezdne.",
    },
    {
      question: "Jaka grubość żwiru na podjazd?",
      answer: "Podjazd żwirowy powinien mieć 10–15 cm zagęszczonego klińca jako podbudowę plus 5–8 cm kruszywa powierzchniowego, dając łącznie 15–23 cm. Na ciężkie pojazdy lub użytek komercyjny zwiększ podbudowę do 20 cm. Zawsze zagęszczaj każdą warstwę przed nasypaniem kolejnej.",
    },
    {
      question: "Czy potrzebuję pozwolenia na podjazd żwirowy?",
      answer: "W większości gmin w Polsce podjazd żwirowy nie wymaga pozwolenia na budowę ani zgłoszenia, ponieważ jest powierzchnią przepuszczalną i nie stanowi obiektu budowlanego. Jednak jeśli podjazd wiąże się ze zmianą zagospodarowania terenu lub jest w strefie ochrony konserwatorskiej, może być wymagane zgłoszenie. Zawsze sprawdź w swoim urzędzie gminy.",
    },
    {
      question: "Jak długo wytrzymuje podjazd żwirowy?",
      answer: "Prawidłowo wykonany podjazd żwirowy służy 15–20 lat przed koniecznością pełnej renowacji. Roczna konserwacja polega na grabieniu przemieszczonego żwiru w zagłębienia i dosypywaniu warstwy 3–5 cm co 3–5 lat. Podbudowa z klińca może trwać praktycznie w nieskończoność, jeśli jest prawidłowo zainstalowana z geowłókniną i odpowiednim drenażem.",
    },
  ],
};

export const blockFillCalculator: CalculatorSEOContent = {
  disclaimer:
    "Ta kalkulacja zawiera 10% naddatek na straty. Rzeczywista obj\u0119to\u015b\u0107 wype\u0142nienia r\u00f3\u017cni si\u0119 w zale\u017cno\u015bci od producenta pustaka, geometrii rdzenia i konsystencji zaprawy. Zawsze sprawd\u017a wymiary rdzeni na karcie technicznej produktu przed zam\u00f3wieniem.",
  howToUse: [
    "Policz ca\u0142kowit\u0105 liczb\u0119 pustak\u00f3w do wype\u0142nienia \u2014 uwzgl\u0119dnij wszystkie warstwy i odcinki muru.",
    "Wybierz rozmiar pustaka: 20 cm to standard mieszkaniowy, 25 cm i 30 cm dla wy\u017cszych lub no\u015bnych mur\u00f3w.",
    "Wybierz typ wype\u0142nienia: beton/zaprawa do wype\u0142nie\u0144 konstrukcyjnych, wermikulit do izolacji, pianka do wydajno\u015bci cieplnej.",
    "Kliknij Oblicz, aby uzyska\u0107 metry sze\u015bcienne i liczb\u0119 work\u00f3w.",
  ],
  materialInfo:
    "Wype\u0142nianie pustak\u00f3w to proces wype\u0142niania pustych rdzeni pustak\u00f3w betonowych betonem, zapraw\u0105 p\u0142ynn\u0105, wermikulitem lub piank\u0105 izolacyjn\u0105. W Polsce budownictwo murowe z pustak\u00f3w jest regulowane przez Eurokod 6 (PN-EN 1996) oraz Warunki Techniczne (WT 2021), z odwo\u0142aniami do norm PN-B i PN-EN dotycz\u0105cych element\u00f3w murowych.\n\nWype\u0142nienie konstrukcyjne wykorzystuje p\u0142ynn\u0105 zapraw\u0119 (typowo klasy C20/25), kt\u00f3ra wp\u0142ywa do rdzeni i otacza zbrojenie umieszczone w murze. Normy budowlane wymagaj\u0105 wype\u0142nionych rdzeni w miejscach zbrojenia oraz w wie\u0144cach poziomych i s\u0142upkach \u017celbetowych. W Polsce, szczeg\u00f3lnie w strefach sejsmicznych (Dolny \u015al\u0105sk, Podhale), przepisy mog\u0105 wymaga\u0107 wype\u0142nienia wszystkich rdzeni.\n\nRozmieszczenie zbrojenia jest kluczowe dla integralno\u015bci konstrukcyjnej. Pr\u0119ty pionowe (\u00d810 lub \u00d812, stal B500SP) s\u0105 zakotwiczone w fundamencie i przechodz\u0105 przez rdzenie do wype\u0142nienia. Zbrojenie poziome umieszcza si\u0119 w pustkach wie\u0144cowych w g\u00f3rnej cz\u0119\u015bci muru i na poziomach po\u015brednich wed\u0142ug projektu konstrukcyjnego.\n\nDo zastosowa\u0144 niekonstrukcyjnych, sypki wermikulit lub perlit zapewnia umiarkowan\u0105 izolacj\u0119 (przewodno\u015b\u0107 cieplna ok. 0,065 W/mK). Pianka poliuretanowa natryskowa oferuje lepsze parametry (ok. 0,022 W/mK) i pomaga spe\u0142ni\u0107 wymagania WT 2021. Standardowe pustaki 20 cm maj\u0105 dwa rdzenie daj\u0105ce ok. 0,007 m\u00b3 wype\u0142nienia na pustak.\n\nNale\u017cy liczy\u0107 si\u0119 z kosztem 400\u2013600 PLN za metr sze\u015bcienny zaprawy p\u0142ynnej, lub 15\u201325 PLN za worek 25 kg mieszanki gotowej. Wermikulit kosztuje 40\u201370 PLN za worek 100 litr\u00f3w. Materia\u0142y dost\u0119pne w Castoramie, Leroy Merlin, sk\u0142adach budowlanych i hurtowniach. Zawsze zamawiaj 10% wi\u0119cej na osiadanie, straty i r\u00f3\u017cnice w rozmiarach rdzeni.",
  nextSteps: [
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Kalkulator \u0141awy Fundamentowej", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Kalkulator \u017bwiru", href: "/calculators/foundation/gravel-calculator/" },
  ],
  installationTips: [
    "Zwil\u017c rdzenie pustak\u00f3w przed zalewaniem zapraw\u0105 \u2014 suche pustaki absorbuj\u0105 wod\u0119 z mieszanki i os\u0142abiaj\u0105 wype\u0142nienie.",
    "Zalewaj zapraw\u0119 etapami po maksymalnie 1,20 m wysoko\u015bci, nast\u0119pnie wibruj lub sztyletuj dla konsolidacji.",
    "U\u017cywaj drobnoziarnistej zaprawy (kruszywo max 10 mm), aby swobodnie przep\u0142ywa\u0142a przez rdzenie bez tworzenia most\u00f3w.",
    "Umie\u015b\u0107 zbrojenie pionowe przed murowanem i utrzymuj je w pionie.",
    "Zainstaluj pustaki czyszcz\u0105ce u podstawy wysokich mur\u00f3w, aby m\u00f3c sprawdzi\u0107 rdzenie przed zalewaniem.",
    "Wype\u0142nij wie\u0144ce ca\u0142kowicie i wibruj zapraw\u0119, aby wyeliminowa\u0107 pustki wok\u00f3\u0142 zbrojenia poziomego.",
  ],
  commonMistakes: [
    "Zalewanie wszystkich rdzeni wysokiego muru za jednym razem \u2014 ci\u015bnienie zaprawy mo\u017ce rozepchna\u0107 dolne warstwy. Ogranicz etapy do 1,20 m.",
    "Pomijanie zbrojenia w wype\u0142nionych rdzeniach \u2014 rdzenie bez stali daj\u0105 niewielk\u0105 warto\u015b\u0107 konstrukcyjn\u0105.",
    "U\u017cywanie standardowego betonu zamiast zaprawy drobnoziarnistej \u2014 grube kruszywo blokuje otwory rdzeni i tworzy pustki.",
    "Brak konsolidacji zaprawy wibratorem lub pr\u0119tem \u2014 p\u0119cherzyki powietrza zmniejszaj\u0105 przyczepno\u015b\u0107 nawet o 50%.",
    "Wype\u0142nianie rdzeni w temperaturach poni\u017cej zera \u2014 zaprawa musi twardnie\u0107 powy\u017cej 5 \u00b0C przez co najmniej 48 godzin.",
  ],
  faqs: [
    { question: "Ile betonu potrzeba do wype\u0142nienia pustak\u00f3w?", answer: "Standardowy pustak 20 cm wymaga ok. 0,007 m\u00b3 zaprawy. Dla 100 pustak\u00f3w potrzeba ok. 0,77 m\u00b3 w\u0142\u0105cznie z 10% naddatkiem. Wpisz liczb\u0119 pustak\u00f3w i rozmiar powy\u017cej, aby uzyska\u0107 natychmiastow\u0105 kalkulacj\u0119 z liczb\u0105 work\u00f3w." },
    { question: "Ile work\u00f3w betonu 25 kg na wype\u0142nienie pustaka?", answer: "Jeden worek zaprawy 25 kg wype\u0142nia ok. 2 standardowe pustaki 20 cm. Na mur ze 100 pustak\u00f3w potrzeba ok. 55 work\u00f3w. Dla pustak\u00f3w 30 cm jeden worek wype\u0142nia tylko ok. 1,2 pustaka ze wzgl\u0119du na wi\u0119kszy rdze\u0144." },
    { question: "Czy wszystkie rdzenie pustak\u00f3w musz\u0105 by\u0107 wype\u0142nione?", answer: "Nie \u2014 przepisy wymagaj\u0105 wype\u0142nienia tylko rdzeni zawieraj\u0105cych zbrojenie lub b\u0119d\u0105cych cz\u0119\u015bci\u0105 wie\u0144ca. Zwykle rdzenie wype\u0142nia si\u0119 co 1,20 m poziomo, w naro\u017cnikach, o\u015bcie\u017cnicach okien i drzwi oraz w wie\u0144cu g\u00f3rnym." },
    { question: "Jaka jest r\u00f3\u017cnica mi\u0119dzy zapraw\u0105 p\u0142ynn\u0105 a betonem do wype\u0142niania pustak\u00f3w?", answer: "Zaprawa p\u0142ynna to mieszanka z drobnym kruszywem (max 10 mm), kt\u00f3ra swobodnie wp\u0142ywa w w\u0105skie rdzenie bez tworzenia most\u00f3w. Standardowy beton ma wi\u0119ksze kruszywo, kt\u00f3re blokuje si\u0119 w rdzeniach tworz\u0105c pustki." },
    { question: "Czy mo\u017cna wype\u0142ni\u0107 pustaki piank\u0105 izolacyjn\u0105 zamiast betonem?", answer: "Tak, dla mur\u00f3w niekonstrukcyjnych. Pianka PU natryskowa zapewnia doskona\u0142\u0105 izolacj\u0119 termiczn\u0105 (ok. 0,022 W/mK) i pomaga spe\u0142ni\u0107 wymagania WT 2021. Wermikulit jest ta\u0144szy ale mniej wydajny. \u017badne z nich nie zapewnia no\u015bno\u015bci konstrukcyjnej." },
    { question: "Ile metr\u00f3w sze\u015bciennych zaprawy na \u015bcian\u0119 z pustak\u00f3w?", answer: "Pomn\u00f3\u017c liczb\u0119 pustak\u00f3w do wype\u0142nienia przez obj\u0119to\u015b\u0107 rdzenia: 0,007 m\u00b3 na pustak 20 cm, 0,009 m\u00b3 na 25 cm lub 0,011 m\u00b3 na 30 cm. Typowa \u015bciana fundamentowa 20 cm z 400 pustakami i pe\u0142nym wype\u0142nieniem wymaga ok. 3,1 m\u00b3 zaprawy z 10% naddatkiem." },
  ],
};

export const mortarMixCalculator: CalculatorSEOContent = {
  disclaimer:
    "Ta kalkulacja zawiera 10% naddatek na straty. Rzeczywiste zu\u017cycie zaprawy zale\u017cy od rozmiaru bloczk\u00f3w lub cegie\u0142, profilu spoiny, jako\u015bci wykonania i warunk\u00f3w pogodowych. Zawsze potwierd\u017a ilo\u015bci u dostawcy przed zam\u00f3wieniem.",
  howToUse: [
    "Oblicz ca\u0142kowit\u0105 powierzchni\u0119 \u015bciany w metrach kwadratowych \u2014 pomn\u00f3\u017c d\u0142ugo\u015b\u0107 przez wysoko\u015b\u0107 i odejmij otwory drzwiowe i okienne.",
    "Wybierz typ zaprawy \u2014 M5 do og\u00f3lnych prac powy\u017cej poziomu gruntu, M10 do prac konstrukcyjnych i poni\u017cej poziomu gruntu, M15 do ci\u0119\u017ckich obci\u0105\u017ce\u0144.",
    "Wybierz grubo\u015b\u0107 spoiny \u2014 10 mm to standard dla wi\u0119kszo\u015bci prac murarskich.",
    "Kliknij Oblicz, aby uzyska\u0107 liczb\u0119 work\u00f3w gotowej zaprawy oraz ilo\u015bci do mieszania od podstaw z cementem Portland i piaskiem.",
  ],
  materialInfo:
    "Zaprawa murarska to materia\u0142 wi\u0105\u017c\u0105cy stosowany mi\u0119dzy bloczkami, ceg\u0142ami i kamieniami w budownictwie murowym. Sk\u0142ada si\u0119 z cementu Portland, wapna hydratyzowanego, piasku i wody, mieszanych do uzyskania konsystencji umo\u017cliwiaj\u0105cej sprawne murowanie przy jednoczesnym zapewnieniu wi\u0105zania konstrukcyjnego i odporno\u015bci na warunki atmosferyczne.\n\nW Polsce zaprawy murarskie klasyfikowane s\u0105 wed\u0142ug normy PN-EN 998-2. Najcz\u0119stsze klasy to: M5 (zaprawa cementowo-wapienna, wytrzyma\u0142o\u015b\u0107 ~5 MPa) do og\u00f3lnych prac murarskich powy\u017cej poziomu gruntu, M10 (zaprawa cementowa, ~10 MPa) do \u015bcian konstrukcyjnych, fundament\u00f3w i mur\u00f3w oporowych, oraz M15 (zaprawa wysokomarki, ~15 MPa) do ci\u0119\u017cko obci\u0105\u017conych fundament\u00f3w i obiekt\u00f3w podziemnych.\n\nGotowa zaprawa murarska dost\u0119pna jest w workach 25 kg i 40 kg. Worek 25 kg daje oko\u0142o 14 litr\u00f3w zaprawy i wystarczy na oko\u0142o 8-10 bloczk\u00f3w (24x11,5x7,1 cm, format NF) przy spoinach 12 mm. Do du\u017cych projekt\u00f3w mieszanie na budowie z cementu, wapna i piasku jest bardziej ekonomiczne.\n\nPopularne marki w Polsce to Atlas, Ceresit (Henkel), Kreisel, Baumit i Sopro. Worki zaprawy (25 kg) kosztuj\u0105 oko\u0142o 12-25 PLN w marketach budowlanych (Castorama, Leroy Merlin, OBI, Bricomarche). Piasek murarski kosztuje oko\u0142o 50-80 PLN za ton\u0119. Przy wykonywaniu prac nale\u017cy przestrzega\u0107 normy PN-EN 1996 (Eurokod 6) oraz warunk\u00f3w technicznych wykonania i odbioru rob\u00f3t murarskich.",
  nextSteps: [
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Kalkulator Wype\u0142nienia Pustak\u00f3w", href: "/calculators/foundation/block-fill-calculator/" },
    { label: "Kalkulator \u0141awy Fundamentowej", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Mieszaj tylko tyle zaprawy, ile zu\u017cyjesz w ci\u0105gu 90 minut \u2014 po tym czasie zaprawa zaczyna wi\u0105za\u0107 i traci urabialnosc.",
    "Zwil\u017c bloczki lub ceg\u0142y przed murowaniem, aby nie wci\u0105ga\u0142y wody z zaprawy, co powoduje s\u0142abe wi\u0105zanie.",
    "Utrzymuj sta\u0142\u0105 grubo\u015b\u0107 spoiny, u\u017cywaj\u0105c sznurka murarskiego i sprawdzaj\u0105c pion co 3-4 warstwy.",
    "Spoinuj, gdy zaprawa jest twarda na dotyk kciuka \u2014 za wcze\u015bnie si\u0119 rozmazuje, za p\u00f3\u017ano nie zag\u0119szcza si\u0119 prawid\u0142owo.",
    "Os\u0142o\u0144 \u015bwie\u017co wymurowane \u015bciany foli\u0105 w gor\u0105cych, suchych lub wietrznych warunkach, aby zapobiec szybkiej utracie wilgoci.",
  ],
  commonMistakes: [
    "U\u017cycie niew\u0142a\u015bciwego typu zaprawy \u2014 M15 w \u015bcianach dzia\u0142owych jest zbyt sztywna i p\u0119ka; M5 w fundamentach jest zbyt s\u0142aba.",
    "Dodanie zbyt du\u017co wody do mieszanki \u2014 rzadka zaprawa ma zmniejszon\u0105 wytrzyma\u0142o\u015b\u0107 i brudzi lico bloczk\u00f3w.",
    "Ponowne dolewanie wody do zaprawy po rozpocz\u0119ciu wi\u0105zania \u2014 trwale zmniejsza to przyczepno\u015b\u0107.",
    "Mieszanie zbyt du\u017cej partii \u2014 zaprawa stoj\u0105ca w taczce ponad 2 godziny jest martwa i musi by\u0107 wyrzucona.",
    "Nieprzyprawianie czo\u0142 bloczk\u00f3w lub cegie\u0142 \u2014 puste spoiny pionowe tworz\u0105 punkty wnikania wody i os\u0142abiaj\u0105 \u015bcian\u0119.",
  ],
  faqs: [
    {
      question: "Ile zaprawy potrzebuj\u0119 na metr kwadratowy?",
      answer: "Dla cegie\u0142 NF (24x11,5x7,1 cm) ze spoinami 12 mm potrzeba oko\u0142o 30 litr\u00f3w zaprawy na metr kwadratowy \u015bciany, co odpowiada oko\u0142o 2 workom po 25 kg gotowej zaprawy. Dla bloczk\u00f3w z betonu kom\u00f3rkowego z cienko spoin\u0105 zu\u017cycie jest znacznie mniejsze: 3-5 kg na m2.",
    },
    {
      question: "Jaka jest r\u00f3\u017cnica mi\u0119dzy zapraw\u0105 M5, M10 i M15?",
      answer: "M5 (zaprawa cementowo-wapienna) to zaprawa do og\u00f3lnych prac murarskich powy\u017cej poziomu gruntu. M10 (zaprawa cementowa) to standard do \u015bcian no\u015bnych i konstrukcyjnych. M15 oferuje najwy\u017csz\u0105 wytrzyma\u0142o\u015b\u0107 do fundament\u00f3w, mur\u00f3w oporowych i obiekt\u00f3w podziemnych.",
    },
    {
      question: "Jak wymieszac zapraw\u0119 samodzielnie?",
      answer: "Dla zaprawy M5, zmieszaj 1 obj\u0119to\u015b\u0107 cementu Portland, 0,5 obj\u0119to\u015bci wapna hydratyzowanego i 4,5 obj\u0119to\u015bci piasku murarskiego. Dla M10 u\u017cyj 1 obj\u0119to\u015bci cementu, 0,25 obj\u0119to\u015bci wapna i 3 obj\u0119to\u015bci piasku. Dodawaj wod\u0119 stopniowo, a\u017c uzyskasz kremow\u0105 konsystencj\u0119, kt\u00f3ra utrzymuje si\u0119 na kielni.",
    },
    {
      question: "Ile czasu schnie zaprawa?",
      answer: "Zaprawa osi\u0105ga wst\u0119pne wi\u0105zanie w ci\u0105gu 2-4 godzin i jest wystarczaj\u0105co twarda do lekkich prac po 24 godzinach. Pe\u0142ne utwardzenie trwa 28 dni. Unikaj ci\u0119\u017ckich obci\u0105\u017ce\u0144 przez co najmniej 7 dni. Poni\u017cej 5 C utwardzanie dramatycznie spowalnia i zaprawa musi by\u0107 chroniona przed mrozem przez co najmniej 48 godzin.",
    },
    {
      question: "Czy mog\u0119 u\u017cy\u0107 zaprawy zamiast betonu?",
      answer: "Nie. Zaprawa i beton to r\u00f3\u017cne produkty. Zaprawa jest przeznaczona do \u0142\u0105czenia element\u00f3w murowych i nie zawiera kruszywa grubego (\u017cwiru). Beton zawiera kruszywo i jest przeznaczony do p\u0142yt, fundament\u00f3w i s\u0142up\u00f3w. U\u017cycie zaprawy tam, gdzie wymagany jest beton, spowoduje awari\u0119 konstrukcyjn\u0105.",
    },
    {
      question: "Ile kosztuje zaprawa murarska w Polsce?",
      answer: "Worki gotowej zaprawy murarskiej (25 kg) kosztuj\u0105 12-25 PLN w zale\u017cno\u015bci od marki i typu. Cement Portland (25 kg) kosztuje 15-25 PLN. Piasek murarski to 50-80 PLN za ton\u0119. Na typowy projekt \u015bciany fundamentowej z 400 bloczk\u00f3w, materia\u0142y na zapraw\u0119 kosztuj\u0105 oko\u0142o 300-600 PLN.",
    },
  ],
};

// ─── FLOOR FRAMING ──────────────────────────────────────────────────────────

export const rimJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Zmierz obwód stropu w metrach.",
    "Wybierz głębokość belki (zwykle 200 mm, 250 mm lub 300 mm).",
    "Wprowadź standardową długość desek.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę desek i metry bieżące.",
  ],
  materialInfo:
    "Belka obwodowa (wieńcówka) to element drewniany biegnący po obwodzie ramy stropowej, zamykający końce belek stropowych. Zapewnia podparcie boczne belkom, przenosi obciążenia na ścianę poniżej i zamyka przestrzeń stropową przed infiltracją powietrza i szkodnikami. W polskim budownictwie szkieletowym belki obwodowe mają zwykle tę samą głębokość co belki stropowe — najczęściej 200 mm, 225 mm lub 250 mm, z drewna klasy C16 lub C24. Opcje inżynieryjne takie jak LVL (fornir klejony warstwowo) lub dwuteowniki drewniane są coraz częściej stosowane ze względu na stabilność wymiarową i mniejszy skurcz. Belka obwodowa musi być odpowiednio przybita lub przykręcona do końca każdej belki stropowej (min. 2 łączniki na belkę) oraz do podwaliny lub ściany poniżej. W budynkach szkieletowych belka obwodowa jest krytycznym elementem powłoki budynku i musi być uszczelniona taśmą lub masą uszczelniającą dla szczelności powietrznej wg WT. Ceny wynoszą 15–45 zł za metr bieżący w zależności od przekroju i klasy, dostępne w Castoramie, Leroy Merlin i hurtowniach drewna.",
  nextSteps: [
    { label: "Kalkulator Belek Stropowych", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Kalkulator Podwaliny Impregnowanej", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Kalkulator Stężeń", href: "/calculators/floor-framing/bridging-calculator/" },
  ],
  installationTips: [
    "Ustaw belkę obwodową równo z zewnętrzną krawędzią podwaliny.",
    "Przybij lub przykręć belkę obwodową do końca każdej belki stropowej min. 2 łącznikami.",
    "Uszczelnij połączenie belki obwodowej z podwaliną taśmą do szczelności powietrznej.",
    "Sprawdź, czy belka obwodowa jest wypoziomowana i prosta przed montażem belek stropowych.",
    "W klimacie polskim zwróć szczególną uwagę na izolację termiczną strefy wieńca — to typowy mostek cieplny.",
  ],
  commonMistakes: [
    "Brak wyrównania belki obwodowej z konstrukcją ściany poniżej, co tworzy uskok utrudniający poszycie.",
    "Niewystarczające mocowanie do końców belek — pozwala belkom na obrót pod obciążeniem.",
    "Pominięcie uszczelnienia strefy belki obwodowej, co tworzy poważny mostek cieplny.",
    "Stosowanie drewna mokrego, co prowadzi do skurczu i rozszczelnienia połączeń.",
    "Brak izolacji termicznej w strefie wieńca, co jest jednym z najczęstszych błędów w budownictwie szkieletowym.",
  ],
  faqs: [
    { question: "Jaki przekrój drewna na belkę obwodową?", answer: "Belka obwodowa powinna mieć tę samą głębokość co belki stropowe. Dla belek 200 mm stosuj belkę obwodową 45×200 mm. Typowe przekroje w Polsce to 45×200 mm, 45×225 mm i 45×250 mm z drewna C16 lub C24." },
    { question: "Czy mogę użyć drewna inżynieryjnego na belki obwodowe?", answer: "Tak. LVL (fornir klejony warstwowo) i BSH (drewno klejone) są doskonałym wyborem ze względu na stabilność wymiarową, odporność na wypaczanie i mniejszy skurcz. Są droższe, ale dają lepszy efekt długoterminowy." },
    { question: "Jak łączyć belki obwodowe?", answer: "Złącza czołowe powinny przypadać na belkę stropową i być zabezpieczone płytką łącznikową lub przez przybicie z obu stron do belki. Przesuwaj złącza, aby nie pokrywały się ze złączami w rzędzie powyżej lub poniżej." },
    { question: "Czy belki obwodowe wymagają ochrony przeciwpożarowej?", answer: "W budownictwie szkieletowym strefa belki obwodowej jest potencjalną ścieżką rozprzestrzeniania się ognia i musi być zabezpieczona uszczelniaczem pęczniejącym lub wełną mineralną w ścianach międzylokalowych i na styku strop-ściana wg przepisów p.poż." },
    { question: "Ile desek na belkę obwodową potrzebuję?", answer: "Podziel całkowity obwód stropu w metrach przez standardową długość deski. Dla obwodu 40 m i desek 4,0 m potrzebujesz ok. 10 desek plus 10% zapasu, więc zamów 11 desek." },
    { question: "Ile kosztuje drewno na belki obwodowe?", answer: "Drewno C24 na belki obwodowe kosztuje 15–45 zł/m.b. w zależności od przekroju. Dla typowego domu o obwodzie 40 m koszt samego drewna to 600–1800 zł. Drewno inżynieryjne (LVL) kosztuje 30–60% więcej." },
  ],
};

export const floorJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź rozpiętość stropu (szerokość pomieszczenia) w metrach.",
    "Wybierz rozstaw belek: 40 cm lub 60 cm osiowo.",
    "Wprowadź długość stropu, aby obliczyć liczbę belek.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę belek i metry bieżące.",
  ],
  materialInfo:
    "Belki stropowe to poziome elementy drewniane rozpiętości między ścianami lub podciągami, podtrzymujące poszycie podłogowe. W polskim budownictwie mieszkaniowym belki to zwykle drewno C16 lub C24 w rozstawie 40 cm lub 60 cm osiowo, o przekrojach od 45×150 mm dla krótkich rozpiętości do 45×250 mm lub większych dla dłuższych. Maksymalna rozpiętość zależy od klasy drewna, przekroju, rozstawu i obciążeń — odnieś się do tablic rozpiętości wg PN-EN 1995-1-1 (Eurokod 5). Przy rozstawie 40 cm z drewnem C24 belka 45×200 mm może przęsłować ok. 3,5 m przy obciążeniu mieszkalnym (1,5 kN/m² zmienne plus stałe). Belki inżynieryjne (dwuteowniki drewniane, kratownice metalowo-drewniane typu Posi) są coraz popularniejsze dla dłuższych rozpiętości, mniejszej masy i łatwiejszego prowadzenia instalacji. Mogą przęsłować 5–7 m lub więcej bez podparć pośrednich. Belki stropowe muszą być stężone (zob. kalkulator stężeń), aby zapobiec wyboczeniu bocznemu. Ceny belek C24 45×200 mm to ok. 15–35 zł/m.b. w polskich hurtowniach budowlanych.",
  nextSteps: [
    { label: "Kalkulator Belki Obwodowej", href: "/calculators/floor-framing/rim-joist-calculator/" },
    { label: "Kalkulator Stężeń", href: "/calculators/floor-framing/bridging-calculator/" },
    { label: "Kalkulator Płyt OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Każdą belkę montuj z naturalnym łukiem (koroną) do góry — zidentyfikuj łuk i zamontuj go w górę.",
    "Mocuj belki do podwaliny wieszakami belkowymi lub przez gwoździowanie ukośne min. 2 gwoździami z każdej strony.",
    "Zamontuj stężenia krzyżowe lub blokady w połowie rozpiętości dla belek dłuższych niż 2,5 m.",
    "Stosuj rozstaw 40 cm dla stropów mieszkalnych, aby zminimalizować ugięcie i drgania podłogi.",
    "Sprawdź klasy drewna — C24 jest preferowane dla zastosowań konstrukcyjnych.",
  ],
  commonMistakes: [
    "Stosowanie zbyt małych belek na daną rozpiętość — zawsze sprawdzaj tablice rozpiętości dla klasy drewna i obciążeń.",
    "Brak stężeń w połowie rozpiętości, co prowadzi do nadmiernych ruchów bocznych i skrzypiącej podłogi.",
    "Montaż belek łukiem do dołu, co zwiększa ugięcie w środku rozpiętości.",
    "Ignorowanie wymagań dotyczących ochrony akustycznej w stropach międzykondygnacyjnych.",
    "Brak uwzględnienia obciążeń od ścian działowych w obliczeniach rozpiętości.",
  ],
  faqs: [
    { question: "Jaki przekrój belek stropowych jest potrzebny?", answer: "Przekrój zależy od rozpiętości, rozstawu, klasy drewna i obciążeń. Orientacyjnie: belka C24 45×200 mm w rozstawie 40 cm przęsłuje ok. 3,5 m. Dla rozpiętości do 4,5 m — 45×250 mm. Dla dłuższych rozpiętości rozważ belki inżynieryjne. Zawsze sprawdzaj tablice wg PN-EN 1995 (Eurokod 5)." },
    { question: "Rozstaw 40 cm czy 60 cm?", answer: "40 cm osiowo to standard dla stropów mieszkalnych w Polsce. Zapewnia sztywniejszą podłogę i lepsze podparcie dla standardowych 18 mm płyt OSB. Rozstaw 60 cm stosuje się z belkami inżynieryjnymi lub tam, gdzie określił to konstruktor." },
    { question: "Czym są belki stropowe inżynieryjne?", answer: "To belki dwuteowe (np. Steico), kratownicowe (Posi) i BSH. Przęsłują większe odległości, są lżejsze, nie wypaczają się i mają otwory na instalacje. Kosztują 20–40% więcej niż drewno lite, ale oszczędzają pracę." },
    { question: "Ile kosztują belki stropowe w Polsce?", answer: "Drewno C24 45×200 mm kosztuje ok. 15–35 zł/m.b. Belki inżynieryjne dwuteowe to 25–50 zł/m.b. Dla typowego stropu 5×8 m w rozstawie 40 cm budżetuj 1500–3000 zł za belki lite lub 2500–5000 zł za inżynieryjne." },
    { question: "Czy belki stropowe muszą być impregnowane?", answer: "Belki w suchej, wentylowanej przestrzeni nad folią PE zwykle nie wymagają impregnacji. Belki w kontakcie ze ścianami zewnętrznymi, w stropach nad wentylowanym poddaszem lub w warunkach wilgotnych powinny być impregnowane do klasy UC2 wg PN-EN 335." },
    { question: "Jak podpierać belki stropowe przy ścianach?", answer: "Belki podpiera się na podwalinie za pomocą wieszaków belkowych (preferowana metoda dla ścian murowanych) lub przez oparcie na murłacie z wgłębieniem min. 90 mm. W budownictwie szkieletowym belki osiadają na podwalinie i mocowane są wieszakami lub gwoździami." },
  ],
};

export const bridgingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź liczbę belek stropowych.",
    "Wprowadź rozpiętość belek w metrach.",
    "Wybierz typ stężenia: krzyżowe (herringbone) lub blokady pełnoprzekrojowe.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę sztuk.",
  ],
  materialInfo:
    "Stężenia (rozpory) zapobiegają skręcaniu, wyboczeniu i drganiom belek stropowych pod obciążeniem. PN-EN 1995 i wytyczne konstrukcyjne wymagają stężeń w połowie rozpiętości dla belek powyżej 2,5 m i w trzecich punktach dla belek powyżej 4,5 m. Dwa główne typy to stężenia krzyżowe (diagonalne elementy drewniane lub metalowe tworzące wzór V między belkami) i blokady pełnoprzekrojowe (elementy drewniane pełnej wysokości między belkami). Stężenia krzyżowe wykonuje się z listew 38×38 mm lub 50×50 mm przybijanych ukośnie między belkami, lub z prefabrykowanych stalowych stężeń ocynkowanych. Blokady to odcinki drewna o tej samej głębokości co belki. Metalowe stężenia krzyżowe (Simpson Strong-Tie, Bova) są popularne w Polsce, ponieważ szybko się montują, samodociągają i są dostępne w standardowych rozmiarach na rozstaw 40 cm i 60 cm. Opakowanie 20 metalowych stężeń kosztuje ok. 40–80 zł w Castoramie lub Leroy Merlin. Drewniane stężenia krzyżowe kosztują mniej materiałowo, ale dłużej się je przycina i montuje.",
  nextSteps: [
    { label: "Kalkulator Belek Stropowych", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Kalkulator Kleju do Podłogi", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Kalkulator Płyt OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Montuj stężenia w połowie rozpiętości dla belek do 4,5 m i w trzecich punktach dla dłuższych.",
    "Dla stężeń krzyżowych przybij górę każdego elementu do jednej belki, a dół do sąsiedniej.",
    "Upewnij się, że blokady pełnoprzekrojowe są ciasno dopasowane i przybite min. 2 gwoździami na każdym końcu.",
    "Nie zapomnij zastężyć ostatnią belkę do ściany blokadą pełnoprzekrojową.",
    "Dla stropów między kondygnacjami uzupełnij stężenia wełną mineralną dla izolacji akustycznej.",
  ],
  commonMistakes: [
    "Pominięcie stężeń — prowadzi do sprężystych, skrzypiących podłóg i obrotu belek.",
    "Montaż stężeń krzyżowych bez blokady ostatniej belki do ściany, co pozwala całemu rzędowi się przesunąć.",
    "Stosowanie drewna o zbyt małym przekroju na blokady — musi mieć tę samą głębokość co belki.",
    "Brak stężeń przy otworach na schody i instalacje.",
    "Zbyt luźne dopasowanie blokad, co eliminuje ich funkcję stabilizującą.",
  ],
  faqs: [
    { question: "Kiedy stężenia belek są wymagane?", answer: "Stężenia są wymagane w połowie rozpiętości dla belek powyżej 2,5 m i w trzecich punktach dla rozpiętości powyżej 4,5 m, zgodnie z PN-EN 1995 i wytycznymi konstruktorskimi." },
    { question: "Co jest lepsze: stężenia krzyżowe czy blokady?", answer: "Stężenia krzyżowe są generalnie bardziej skuteczne w zapobieganiu obrotu belek i łatwiejsze w montażu, zwłaszcza metalowe. Blokady pełnoprzekrojowe są prostsze, ale mogą się poluzować w wyniku skurczu drewna." },
    { question: "Czy mogę użyć metalowych stężeń zamiast drewnianych?", answer: "Tak. Metalowe stężenia krzyżowe (Simpson Strong-Tie, Bova) są powszechnie stosowane w Polsce. Szybko się montują, nie kurczą się i są dostępne na rozstaw 40 cm i 60 cm. Kosztują nieco więcej, ale oszczędzają znaczną ilość czasu." },
    { question: "Ile stężeń potrzebuję na jedną przęsło?", answer: "Każde przęsło wymaga 2 elementów stężenia krzyżowego (po jednym diagonalnym w każdą stronę). Dla stropu z 20 belkami masz 19 przęseł, potrzebując 38 elementów na rząd stężeń. Przy jednym rzędzie w połowie rozpiętości to 38 sztuk łącznie." },
    { question: "Czy belki inżynieryjne wymagają stężeń?", answer: "Tak. Belki dwuteowe i kratownicowe nadal wymagają stężeń, choć producent może określić inne wymagania. Sprawdź instrukcję montażu producenta belek." },
    { question: "Gdzie kupić stężenia w Polsce?", answer: "Metalowe stężenia dostępne są w Castoramie, Leroy Merlin, OBI, PSB Mrówka i hurtowniach budowlanych. Sprzedawane w opakowaniach dopasowanych do konkretnych głębokości belek i rozstawów. Drewno na stężenia można ciąć z łat 38×38 mm lub 50×50 mm." },
  ],
};

export const subfloorAdhesiveCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię podłogi w metrach kwadratowych.",
    "Wybierz rozmiar tuby kleju (310 ml lub 828 ml).",
    "Podaj rozstaw belek (40 cm lub 60 cm).",
    "Kliknij Oblicz materiały, aby zobaczyć liczbę potrzebnych tub.",
  ],
  materialInfo:
    "Klej do podłogi to klej montażowy nakładany na górę belek stropowych przed ułożeniem płyt poszycia (OSB lub sklejki). Klejenie poszycia do belek tworzy działanie zespolone, które znacząco redukuje drgania podłogi i eliminuje skrzypienie. W Polsce najczęściej stosuje się kleje poliuretanowe lub SMP (polimery sililowane) w tubach 310 ml do pistoletu uszczelniającego. Jedna tuba 310 ml pokrywa ok. 3–4 metrów bieżących belki, co odpowiada ok. 1,2–1,6 m² powierzchni podłogi przy rozstawie belek 40 cm. Popularne marki to Soudal, Bostik, Tytan Professional, Den Braven i Quilosa. Ceny wynoszą od 12 do 30 zł za tubę w Castoramie, Leroy Merlin czy OBI. Dla dużych powierzchni klej jest również dostępny w workach foliowych 600 ml i 900 ml do pistoletów pneumatycznych, pokrywających ok. 10–12 m.b. na worek. Klejenie jest szczególnie ważne dla płyt wiórowych, które są bardziej podatne na skrzypienie niż OSB czy sklejka.",
  nextSteps: [
    { label: "Kalkulator Płyt OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Kalkulator Belek Stropowych", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Kalkulator Wkrętów do Płyt G-K", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
  ],
  installationTips: [
    "Nakładaj ciągły wałek kleju na górę każdej belki tuż przed ułożeniem płyty poszycia.",
    "Pracuj sekcjami — nakładaj klej tylko na belki, które pokryjesz w ciągu 10–15 minut.",
    "Dociśnij płytę mocno do kleju i natychmiast przykręć lub przybij.",
    "W chłodne dni ogrzej tuby w pomieszczeniu przed użyciem — zimny klej słabo się rozprowadza.",
    "Stosuj klej kompatybilny z drewnem impregnowanym, jeśli belki są impregnowane ciśnieniowo.",
  ],
  commonMistakes: [
    "Nakładanie kleju zbyt wcześnie przed płytami — skórkuje i traci przyczepność.",
    "Stosowanie zbyt mało kleju — potrzebny jest cienki, ciągły wałek wzdłuż każdej belki.",
    "Całkowite pominięcie kleju — to główna przyczyna skrzypiących podłóg z płyt wiórowych i OSB.",
    "Używanie kleju niezgodnego z typem drewna (impregnowane vs. nieimpregnowane).",
    "Praca w temperaturze poniżej 5°C bez ogrzewania kleju, co pogarsza przyczepność.",
  ],
  faqs: [
    { question: "Czy muszę klejić płyty podłogowe?", answer: "Tak. Klejenie płyt do belek drastycznie redukuje skrzypienie i tworzy sztywniejszą podłogę. Jest to uznawana dobra praktyka w polskim budownictwie szkieletowym i jest wymagana przez wielu producentów konstrukcji szkieletowych." },
    { question: "Ile tub kleju na metr kwadratowy?", answer: "Przy rozstawie belek 40 cm jedna tuba (310 ml) pokrywa ok. 1,2–1,6 m². Dla podłogi 40 m² budżetuj 25–35 tub." },
    { question: "Jaki typ kleju wybrać?", answer: "Stosuj elastyczny klej poliuretanowy lub SMP przeznaczony do podłóg. Unikaj sztywnych klejów (jak PVA), które stają się kruche i pękają pod wpływem ruchów podłogi. Szukaj produktów oznaczonych do klejenia konstrukcyjnego drewna." },
    { question: "Czy mogę użyć piany montażowej zamiast kleju?", answer: "Nie. Piana montażowa nie zapewnia wiązania konstrukcyjnego potrzebnego do podłóg. Stosuj właściwy klej montażowy przeznaczony do łączenia drewno-drewno pod obciążeniem." },
    { question: "Czy klej zastępuje wkręty?", answer: "Nie. Klej działa w połączeniu z wkrętami lub gwoździami, nie jako ich zamiennik. Wkręty zapewniają natychmiastowe trzymanie i docisk, podczas gdy klej twardnieje. Stosuj oba dla najlepszego efektu." },
    { question: "Ile kosztuje klej do podłogi?", answer: "Tuba 310 ml kosztuje 12–30 zł w polskich marketach budowlanych. Dla podłogi 40 m² klej kosztuje ok. 300–800 zł łącznie — niewielka inwestycja za podłogę bez skrzypienia." },
  ],
};

export const osbPanelCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź długość i szerokość podłogi w metrach.",
    "Kalkulator używa standardowych płyt OSB 1250×2500 mm (3,125 m² na płytę).",
    "Wybierz grubość płyty (18 mm to standard na podłogi).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę płyt.",
  ],
  materialInfo:
    "OSB (oriented strand board — płyta o wiórach zorientowanych) to inżynieryjna płyta drewniana stosowana jako poszycie podłogowe, ścienne i dachowe w polskim budownictwie szkieletowym. Standardowe arkusze mają wymiar 1250×2500 mm (3,125 m²), z typowymi grubościami 11 mm, 15 mm, 18 mm i 22 mm. Na poszycie podłogowe przy belkach w rozstawie 40 cm standardem jest 18 mm OSB/3 z piórem i wpustem. OSB/3 jest klasyfikowane do użytku konstrukcyjnego w warunkach wilgotnych, co jest odpowiednią klasą na podłogi i dachy. Płyty wiórowe (V100 wodoodporne) są główną alternatywą na podłogi, oferując gładszą powierzchnię, ale mniejszą odporność na wilgoć. Ceny OSB w Polsce wahają się od 35 do 85 zł za płytę w zależności od grubości i klasy, dostępne w Castoramie, Leroy Merlin, OBI i PSB Mrówka. Producenci populowrni w Polsce to Kronospan, Swiss Krono, Egger i Pfleiderer. Zawsze stosuj krawędzie pióro-wpust na podłogi, aby stworzyć ciągłą, sztywną powierzchnię. Przesuwaj złącza krótkich krawędzi, aby nie pokrywały się na tej samej belce w sąsiednich rzędach.",
  nextSteps: [
    { label: "Kalkulator Belek Stropowych", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Kalkulator Kleju do Podłogi", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Kalkulator Płyt Gipsowo-Kartonowych", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Układaj płyty OSB dłuższą krawędzią prostopadle do belek dla maksymalnej wytrzymałości.",
    "Przesuwaj złącza krótkich krawędzi o co najmniej 60 cm między sąsiednimi rzędami.",
    "Zostaw szczelinę dylatacyjną 10–12 mm wokół obwodu podłogi.",
    "Klej i wkręcaj co 15 cm na krawędziach i co 30 cm w polu.",
    "Na dużych powierzchniach rozpocznij od najdłuższej ściany i pracuj w kierunku przeciwnym.",
  ],
  commonMistakes: [
    "Brak przesunięcia złączy między rzędami, co tworzy słabą linię przez całą podłogę.",
    "Pominięcie szczeliny dylatacyjnej przy ścianach — OSB pęcznieje pod wpływem wilgoci i wybrzuszy się, jeśli jest ułożone na styk.",
    "Użycie OSB/2 zamiast OSB/3 — OSB/2 jest przeznaczone tylko do warunków suchych i nie nadaje się na podłogi.",
    "Układanie płyt dłuższą krawędzią równolegle do belek, co obniża nośność.",
    "Brak klejenia płyt do belek, co prowadzi do skrzypienia.",
  ],
  faqs: [
    { question: "Jaka grubość OSB na podłogi?", answer: "Stosuj 18 mm OSB/3 z piórem i wpustem na belki w rozstawie 40 cm. Dla rozstawu 60 cm stosuj 22 mm OSB/3. Zawsze specyfikuj klasę OSB/3, która jest przeznaczona do użytku konstrukcyjnego w warunkach wilgotnych." },
    { question: "OSB czy płyta wiórowa na podłogi?", answer: "Oba są odpowiednie. OSB/3 jest bardziej odporny na wilgoć i mocniejszy konstrukcyjnie. Płyta wiórowa V100 daje gładszą powierzchnię pod panele czy wykładzinę. OSB jest preferowane w budownictwie szkieletowym, płyta wiórowa w tradycyjnym budownictwie z drewnianymi stropami." },
    { question: "Ile płyt na pokój 4×5 m?", answer: "Pokój 4×5 m to 20 m². Każda płyta 1250×2500 mm pokrywa 3,125 m². Potrzebujesz 20 / 3,125 = 7 płyt, plus 10% zapasu = 8 płyt." },
    { question: "Czy potrzebuję pióro-wpust na OSB podłogowe?", answer: "Tak. Krawędzie pióro-wpust są niezbędne na poszycie podłogowe, ponieważ tworzą sztywną, ciągłą powierzchnię i zapobiegają różnicy poziomów między płytami. OSB z prostą krawędzią stosuje się na poszycie ścienne i inne zastosowania niepodłogowe." },
    { question: "Ile kosztuje OSB w Polsce?", answer: "Ceny OSB/3: 18 mm P&W — ok. 55–85 zł za płytę 1250×2500 mm. 11 mm na ściany — ok. 35–50 zł. Zakup hurtowy (pełne palety) z hurtowni daje najlepszą cenę. Popularne marki: Kronospan, Swiss Krono, Egger." },
    { question: "Czy mogę użyć OSB na dach płaski?", answer: "Tak. OSB/3 jest powszechnie stosowane na poszycie dachów płaskich w Polsce. Stosuj 18 mm przy belkach co 40 cm lub 11 mm przy gęsto rozmieszczonych krokwiach. Zapewnij odpowiednią wentylację nad OSB, aby zapobiec kondensacji." },
  ],
};

// ─── WALL FRAMING ───────────────────────────────────────────────────────────

export const studCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą długość ściany w metrach.",
    "Wybierz rozstaw słupków: 40 cm lub 60 cm osiowo.",
    "Wprowadź liczbę otworów drzwiowych i okiennych na dodatkowe słupki.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę słupków.",
  ],
  materialInfo:
    "Słupki ścienne to pionowe elementy drewniane tworzące konstrukcyjny szkielet ścian. W polskim budownictwie szkieletowym słupki są z drewna C16 lub C24 w rozstawie 40 cm lub 60 cm osiowo, przy czym 60 cm jest najczęściej stosowane dla ścian zewnętrznych z poszyciem konstrukcyjnym. Standardowe przekroje to 45×90 mm (dla ścian 90 mm) lub 45×140 mm (dla ścian 140 mm), cięte na 2,5 m lub 2,8 m dla standardowej wysokości kondygnacji. Każdy otwór drzwiowy lub okienny wymaga dodatkowych słupków: dwóch słupków skróconych (podpory nadproża) i co najmniej jednego dodatkowego po każdej stronie. Narożniki wymagają zwykle trzech słupków dla zapewnienia powierzchni montażowej poszycia wewnętrznego i zewnętrznego. Słupki ścian zewnętrznych muszą spełniać wymagania PN-EN 1995-1-1 (Eurokod 5) pod względem nośności, a cały układ ściany musi spełniać WT pod względem izolacyjności termicznej. Drewno na słupki kosztuje ok. 8–18 zł za sztukę 2,5 m w polskich hurtowniach. Typowy dom jednorodzinny wymaga 200–350 słupków.",
  nextSteps: [
    { label: "Kalkulator Podwaliny Dolnej", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Kalkulator Oczepów", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Kalkulator Nadproży", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Zaznacz pozycje wszystkich słupków na podwalinie i oczepie przed montażem.",
    "Orientuj łuk (koronę) każdego słupka w tym samym kierunku dla jednolitej powierzchni ściany.",
    "Przybijaj przez podwalinę do końca słupka min. 2 gwoździami lub użyj gwoździarki.",
    "Sprawdź pionowość i prostoliniowość ściany przed montażem poszycia lub płyt g-k.",
    "Stosuj drewno suszone komorowo (KD) — wilgotne drewno skurczy się i rozszczelni połączenia.",
  ],
  commonMistakes: [
    "Pomieszanie rozstawów 40 cm i 60 cm — rozstaw musi odpowiadać specyfikacji poszycia i izolacji.",
    "Pominięcie dodatkowych słupków przy narożnikach i otworach, co pozostawia niewystarczające powierzchnie montażowe.",
    "Brak sprawdzenia prostoliniowości słupków — wygięte słupki tworzą nierówną ścianę.",
    "Stosowanie drewna C16 tam, gdzie wymagane jest C24 — niższa klasa ma mniejszą nośność.",
    "Nieuwzględnienie dodatkowych słupków na instalacje (np. podparcie ciężkich umywalek czy szafek).",
  ],
  faqs: [
    { question: "Rozstaw 40 cm czy 60 cm?", answer: "60 cm osiowo to standard dla ścian zewnętrznych w polskim budownictwie szkieletowym z poszyciem konstrukcyjnym (OSB lub sklejka). 40 cm stosuje się dla ścian mocno obciążonych, bez poszycia i tam, gdzie potrzebne są dodatkowe punkty mocowania. Sprawdź specyfikację konstruktora." },
    { question: "Jaki przekrój słupków?", answer: "Dla ścian 90 mm (zwykle wewnętrzne) — słupki 45×90 mm. Dla ścian zewnętrznych 140 mm (mieści więcej izolacji) — 45×140 mm. C16 to minimum dla ścian konstrukcyjnych; C24 jest preferowane." },
    { question: "Ile słupków na ścianę 5 m?", answer: "Ściana 5 m w rozstawie 60 cm potrzebuje 5000/600 + 1 = ok. 9 słupków podstawowych. Dodaj 2 na każdy narożnik (6 na 2 narożniki) i 4 na każdy otwór. Ściana z 2 narożnikami i 1 oknem wymaga ok. 19 słupków." },
    { question: "Czy słupki wymagają ochrony p.poż.?", answer: "Tak. Przepisy p.poż. wymagają przegród ogniowych w ukrytych przestrzeniach ścian szkieletowych, szczególnie na styku strop-ściana, wokół otworów i w ścianach między lokalami. Stosuj masy pęczniejące lub wełnę mineralną Rockwool." },
    { question: "Czy mogę użyć słupków metalowych?", answer: "Tak. Lekkie profile stalowe (LSSF) są stosowane w polskim budownictwie komercyjnym i niektórych mieszkaniowym. Nie palą się, nie kurczą i nie wypaczają, ale wymagają innych łączników, tworzą mostki cieplne i są montowane przez specjalistyczne ekipy." },
    { question: "Ile kosztują słupki ścienne?", answer: "Słupki C24 45×90 mm × 2,5 m kosztują ok. 8–15 zł za sztukę. Przekrój 45×140 mm × 2,5 m to 12–22 zł/szt. Dla typowego domu jednorodzinnego budżetuj 2000–6000 zł na same słupki." },
  ],
};

export const bottomPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą długość ściany w metrach.",
    "Wybierz przekrój podwaliny (odpowiadający szerokości słupków).",
    "Wprowadź standardową długość desek.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę desek i metry bieżące.",
  ],
  materialInfo:
    "Podwalina dolna to poziomy element drewniany u podstawy ściany szkieletowej, przybijany lub przykręcany do poszycia podłogowego lub fundamentu. Kotwi słupki i rozkłada obciążenia ściany na konstrukcję poniżej. W polskim budownictwie szkieletowym podwalina ma zwykle ten sam przekrój co słupki: 45×90 mm dla ścian 90 mm lub 45×140 mm dla ścian 140 mm, z drewna C16 lub C24. Podwaliny parteru w kontakcie z betonem muszą być impregnowane ciśnieniowo (patrz kalkulator podwaliny impregnowanej). Podwaliny pięter nie wymagają impregnacji. Podwalinę tnie się ze standardowych długości (3,0 m, 4,0 m lub 6,0 m) i układa ciągle wzdłuż linii ściany, ze złączami przypadającymi na pozycje słupków. Każdy słupek jest przybijany przez podwalinę 2 gwoździami, lub ściana jest montowana na leżąco na poszyciu i podnoszona jako jednostka. Ceny to 8–18 zł/m.b. w zależności od przekroju, w Castoramie, Leroy Merlin i hurtowniach drewna.",
  nextSteps: [
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Kalkulator Oczepów", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Kalkulator Podwaliny Impregnowanej", href: "/calculators/foundation/sill-plate-calculator/" },
  ],
  installationTips: [
    "Zaznacz pozycje słupków na podwalinie przed montażem dla zachowania równych rozstawów.",
    "Przybij podwalinę do poszycia podłogowego gwoździami 90 mm co 40 cm.",
    "Upewnij się, że podwalina jest prosta i wypoziomowana na całej długości.",
    "Wytnij otwory drzwiowe w podwalinie po postawieniu i wypoziomowaniu ściany.",
    "Na betonie mocuj kotwy mechanicznymi lub chemicznymi — nigdy samymi gwoździami.",
  ],
  commonMistakes: [
    "Umieszczanie złączy między słupkami, co tworzy słaby punkt w podstawie ściany.",
    "Brak impregnacji podwalin parteru w kontakcie z betonem, co prowadzi do gnicia.",
    "Brak zakotwienia podwaliny do podłogi, co pozwala ścianie się przesuwać.",
    "Stosowanie zbyt krótkich gwoździ lub wkrętów do mocowania podwaliny.",
    "Ignorowanie szczeliny dylatacyjnej przy przejściach instalacyjnych przez podwalinę.",
  ],
  faqs: [
    { question: "Jaki przekrój na podwalinę dolną?", answer: "Podwalina musi odpowiadać szerokości słupków: 45×90 mm dla ścian 90 mm, 45×140 mm dla ścian 140 mm. Stosuj drewno C16 lub C24." },
    { question: "Czy podwalina dolna musi być impregnowana?", answer: "Tylko jeśli jest w kontakcie z betonem lub murem (parter na płycie). Podwaliny piętra na poszyciu drewnianym nie wymagają impregnacji." },
    { question: "Czy stosuje się pojedynczą podwalinę?", answer: "Tak. W odróżnieniu od oczepu, który jest zwykle podwójny, podwalina dolna to pojedyncza warstwa w standardowym polskim budownictwie szkieletowym." },
    { question: "Jak mocować podwalinę do podłogi?", answer: "Przybij przez podwalinę do poszycia podłogowego gwoździami 90 mm co 40 cm lub użyj wkrętów dla mocniejszego połączenia. Na betonie stosuj kotwy rozporowe lub wkręty do betonu (np. Fischer FBS II lub Hilti HUS)." },
    { question: "Czy wycinam podwalinę w otworach drzwiowych?", answer: "Tak. Po postawieniu i wypoziomowaniu ściany wytnij podwalinę w otworze drzwiowym równo z wewnętrzną stroną słupków nośnych. Pozwala to ościeżnicy stanąć na podłodze." },
    { question: "Ile drewna na podwaliny typowego domu?", answer: "Typowy dom jednorodzinny ma ok. 60–80 m ścian zewnętrznych i 40–60 m ścian wewnętrznych, wymagając ok. 100–140 m.b. drewna na podwaliny, co kosztuje 800–2500 zł." },
  ],
};

export const topPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą długość ściany w metrach.",
    "Wybierz oczep pojedynczy lub podwójny.",
    "Wprowadź standardową długość desek.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę desek i metry bieżące.",
  ],
  materialInfo:
    "Oczep (belka wieńcowa górna) biegnie wzdłuż górnej krawędzi słupków ściennych, łącząc je i tworząc powierzchnię nośną dla belek stropowych, krokwi lub wiązarów powyżej. W polskim budownictwie szkieletowym oczep ma ten sam przekrój co słupki: 45×90 mm lub 45×140 mm. Podwójny oczep jest standardową praktyką w budownictwie platformowym — górna warstwa nakłada się na złącza dolnej o co najmniej 120 cm i na siebie na narożnikach i skrzyżowaniach ścian, łącząc konstrukcję. Niektóre polskie systemy szkieletowe stosują pojedynczy oczep z metalowymi taśmami na złączach i narożnikach. Oczep jest przybijany do każdego słupka min. 2 gwoździami, a górna warstwa do dolnej co 40 cm. Złącza dolnej warstwy muszą przypadać na pozycje słupków. Ceny drewna na oczepy to 8–18 zł/m.b. jak dla słupków, w polskich hurtowniach budowlanych. Prawidłowe wykonanie oczepów jest kluczowe dla sztywności całej konstrukcji — błędy na tym etapie przenoszą się na dach.",
  nextSteps: [
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Kalkulator Podwaliny Dolnej", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Kalkulator Wiązarów Dachowych", href: "/calculators/roofing/truss-calculator/" },
  ],
  installationTips: [
    "Zamontuj najpierw dolną warstwę oczepu, przybijając ją do każdego słupka min. 2 gwoździami.",
    "Przesuń złącza górnej warstwy o co najmniej 120 cm względem złączy dolnej.",
    "Na narożnikach i skrzyżowaniach ścian górna warstwa musi zachodzić na sąsiednią ścianę.",
    "Przybij górną warstwę do dolnej co 40 cm gwoździami 90 mm.",
    "Sprawdź poziom oczepu przed montażem konstrukcji dachowej.",
  ],
  commonMistakes: [
    "Pokrywanie się złączy górnej i dolnej warstwy — muszą być przesunięte o min. 120 cm.",
    "Brak zakładu górnej warstwy na narożnikach, co osłabia połączenie prostopadłych ścian.",
    "Stosowanie pojedynczego oczepu tam, gdzie specyfikacja wymaga podwójnego.",
    "Nierówny oczep, co powoduje problemy z montażem wiązarów i krokwi.",
    "Brak metalowych taśm wzmacniających na narożnikach przy systemach z pojedynczym oczepem.",
  ],
  faqs: [
    { question: "Czy potrzebuję podwójny oczep?", answer: "Podwójny oczep jest standardem w budownictwie platformowym. Łączy ściany na narożnikach i skrzyżowaniach oraz rozkłada obciążenia punktowe od wiązarów i belek. Niektóre systemy pozwalają na pojedynczy oczep z metalowymi taśmami — sprawdź specyfikację konstruktora." },
    { question: "Jak łączyć oczepy?", answer: "Złącza dolnej warstwy muszą przypadać na pozycje słupków. Górna warstwa musi nachodzić na złącza dolnej o min. 120 cm. Na narożnikach górna warstwa jednej ściany zachodzi na oczep prostopadłej ściany." },
    { question: "Jaki przekrój na oczepy?", answer: "Oczepy odpowiadają przekrojowi słupków: 45×90 mm dla ścian 90 mm, 45×140 mm dla ścian 140 mm, z drewna C16 lub C24." },
    { question: "Czy mogę użyć taśmy stalowej zamiast podwójnego oczepu?", answer: "Tak. Niektóre polskie systemy szkieletowe stosują pojedynczy oczep z ocynkowaną taśmą stalową na złączach i narożnikach. Zmniejsza to zużycie drewna, ale wymaga starannego wykonania. Sprawdź z konstruktorem." },
    { question: "Ile drewna na oczepy typowego domu?", answer: "Dla podwójnego oczepu pomnóż całkowitą długość ścian przez 2. Typowy dom z 100–140 m ścian potrzebuje 200–280 m.b. drewna na oczepy, co kosztuje 1600–5000 zł." },
    { question: "Czy oczepy wymagają impregnacji?", answer: "Oczepy zwykle nie wymagają impregnacji, ponieważ znajdują się wysoko nad gruntem w suchym, zamkniętym środowisku. Impregnacja jest potrzebna tylko jeśli drewno będzie narażone na trwałą wilgoć." },
  ],
};

export const headerCalculator: CalculatorSEOContent = {
  disclaimer: "Rozmiar nadproża zależy od rozpiętości, obciążenia i klasy drewna. Zawsze weryfikuj z konstruktorem dla ścian nośnych.",
  howToUse: [
    "Wprowadź szerokość otworu (rozpiętość) w metrach.",
    "Wprowadź liczbę otworów.",
    "Wybierz konfigurację nadproża (podwójne, potrójne).",
    "Kliknij Oblicz materiały, aby otrzymać potrzebne drewno.",
  ],
  materialInfo:
    "Nadproża to poziome belki przęsłujące otwory drzwiowe i okienne, przenoszące obciążenie z góry na słupki nośne po obu stronach. W polskim budownictwie szkieletowym nadproża wykonuje się zwykle z podwójnych lub potrójnych elementów drewnianych skręconych śrubami, lub z drewna inżynieryjnego (LVL lub BSH — drewno klejone warstwowo). Dla otworów do 1,2 m w ścianach nienoŚnych wystarczy pojedyncze nadproże 45×90 mm. Dla ścian nośnych rozmiar nadproża zależy od rozpiętości, obciążenia i klasy drewna — konstruktor musi określić wymiar. Typowe rozmiary w polskiej praktyce to podwójne 45×200 mm na rozpiętości do 1,5 m i podwójne 45×250 mm do 2,0 m (drewno C24). Dla szerszych otworów stosuje się nadproża LVL, BSH lub stalowe. Drewniane nadproża kosztują 15–45 zł/m.b. Stalowe nadproża (profile IPE, HEA) kosztują 80–400 zł za sztukę w zależności od rozpiętości i nośności. Popularni dostawcy to Castorama, Leroy Merlin i hurtownie stali.",
  nextSteps: [
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Kalkulator Poszycia Zewnętrznego", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
    { label: "Kalkulator Obróbek Okiennych", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Podpieraj nadproża na słupkach skróconych, które przenoszą obciążenie bezpośrednio na podwalinę.",
    "Dla podwójnych nadproży drewnianych skręcaj elementy śrubami co 30 cm z przekładką ze sklejki w razie potrzeby.",
    "Upewnij się, że nadproże przylega ściśle do oczepu bez szczeliny.",
    "Dla nadproży stalowych sprawdź minimalną długość oparcia po każdej stronie (zwykle 150 mm).",
    "W polskim klimacie izoluj termicznie nadproża stalowe, aby uniknąć mostków cieplnych.",
  ],
  commonMistakes: [
    "Zbyt mały przekrój nadproża na daną rozpiętość i obciążenie — zawsze uzyskaj potwierdzenie konstruktora dla ścian nośnych.",
    "Niedostateczne oparcie na słupkach nośnych — minimum 45 mm po każdej stronie dla nadproży drewnianych.",
    "Pominięcie słupków nośnych i zawieszenie nadproża tylko na gwoździach, co nie jest w stanie przenieść obciążenia.",
    "Brak izolacji termicznej wokół stalowych nadproży, co tworzy mostek cieplny i kondensację.",
    "Nieuwzględnienie obciążeń od dachu i piętra powyżej przy doborze nadproża.",
  ],
  faqs: [
    { question: "Jaki rozmiar nadproża na otwór drzwiowy?", answer: "Dla standardowych drzwi 90 cm w ścianie nienośnej wystarczy pojedyncze 45×90 mm. Dla ścian nośnych nadproże musi być dobrane przez konstruktora na podstawie rozpiętości i obciążeń powyżej." },
    { question: "Czy mogę użyć stalowego nadproża?", answer: "Tak. Profile stalowe (IPE, HEA) są powszechnie stosowane w Polsce, szczególnie w murze i dla szerszych otworów. Dobiera się je wg rozpiętości, obciążenia i typu ściany — producenci dostarczają tablice doboru." },
    { question: "Co to jest słupek skrócony?", answer: "Słupek skrócony (podpora nadproża) to krótki słupek podpierający nadproże i przenoszący jego obciążenie na podwalinę. Wymagany jest co najmniej jeden po każdej stronie otworu." },
    { question: "Czy potrzebuję nadproże w ścianie nienośnej?", answer: "Tak, ale lżejsze. Nawet ściany nienośne potrzebują nadproża nad otworami, aby podeprzeć krótkie słupki powyżej i utrzymać sztywność ściany." },
    { question: "Jak podeprzeć nadproże nad szerokim otworem?", answer: "Dla otworów szerszych niż 2,0 m stosuj belkę inżynieryjną (LVL lub BSH), nadproże stalowe lub blacho-belkę (blacha stalowa między elementami drewnianymi). Konstruktor musi zaprojektować nadproże na każdą znaczącą rozpiętość." },
    { question: "Co to jest blacho-belka?", answer: "Blacho-belka to nadproże drewniane z blachą stalową wklejoną lub wkręconą między dwa elementy drewniane. Łączy wytrzymałość stali z wygodą mocowania do drewna. Blacho-belki są wykonywane na zamówienie i muszą być zaprojektowane przez konstruktora." },
  ],
};

export const exteriorSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię ścian zewnętrznych w metrach kwadratowych.",
    "Odejmij powierzchnię okien i drzwi, jeśli chcesz.",
    "Wybierz rozmiar płyty (1250×2500 mm to standard).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę płyt.",
  ],
  materialInfo:
    "Poszycie zewnętrzne zapewnia usztywnienie konstrukcyjne, odporność na wiatr i podkład pod folię wiatroizolacyjną na ścianach szkieletowych. W Polsce OSB/3 (9 mm lub 11 mm) jest najczęściej stosowanym materiałem poszycia, choć sklejka i płyty specjalistyczne są również używane. Standardowy arkusz to 1250×2500 mm (3,125 m²). Poszycie przybija się do słupków gwoździami pierścieniowymi 50 mm lub 63 mm co 15 cm na krawędziach i co 30 cm w polu. Musi sięgać ciągle od podwaliny do oczepu, aby zapewnić skuteczne usztywnienie wg PN-EN 1995-1-1. Otwory muszą być oramowane wzmocnieniami (nogami) zapewniającymi podkład gwoździowy na wszystkich krawędziach płyt. Poszycie OSB/3 kosztuje 35–65 zł za płytę w polskich hurtowniach. Płyty bitumiczne (np. Steico, Beltermo) stanowią alternatywę z wbudowaną odpornością na wilgoć, ale mniejszą nośnością konstrukcyjną. Folia wiatroizolacyjna (np. Tyvek, Strotex, Dorken Delta) musi być zamocowana na poszyciu, aby umożliwić ucieczkę pary wodnej, jednocześnie chroniąc przed deszczem.",
  nextSteps: [
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Kalkulator Folii Wiatroizolacyjnej", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Kalkulator Obróbek Okiennych", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Przybijaj poszycie dłuższą krawędzią pionowo, od podwaliny do oczepu.",
    "Stosuj gwoździe pierścieniowe 50 mm co 15 cm na krawędziach i co 30 cm w polu.",
    "Zostaw 3 mm szczelinę między płytami na rozszerzalność wilgotnościową.",
    "Przesuwaj poziome złącza między rzędami o min. 60 cm.",
    "Na krawędziach otworów zamontuj wzmocnienia (nogi) zapewniające podkład gwoździowy.",
  ],
  commonMistakes: [
    "Nieprawidłowy rozstaw gwoździ — za rzadkie gwoździowanie zmniejsza odporność ściany na obciążenia boczne.",
    "Umieszczanie złączy między słupkami, gdzie nie ma podkładu gwoździowego.",
    "Pominięcie folii wiatroizolacyjnej na poszyciu, co pozwala deszczowi zawilgocić OSB.",
    "Stosowanie OSB/2 zamiast OSB/3 — OSB/2 jest przeznaczone tylko do warunków suchych.",
    "Brak usztywnienia narożników — kluczowe dla odporności budynku na wiatr.",
  ],
  faqs: [
    { question: "Jaka grubość poszycia na ściany szkieletowe?", answer: "9 mm OSB/3 jest najczęstsze dla poszycia konstrukcyjnego w polskich ścianach szkieletowych przy rozstawie 60 cm. Dla dodatkowego usztywnienia lub wg specyfikacji konstruktora może być wymagane 11 mm OSB/3 lub 9 mm sklejka." },
    { question: "Czy poszycie jest potrzebne na wszystkich ścianach?", answer: "Warunki techniczne wymagają odpowiedniego usztywnienia wszystkich ścian szkieletowych. Poszycie zapewnia najskuteczniejsze usztywnienie. Tam, gdzie nie stosuje się poszycia, muszą być zastosowane stężenia ukośne lub taśmy stalowe wg projektu konstruktora." },
    { question: "Jaka jest różnica między OSB a sklejką na poszycie?", answer: "OSB/3 jest tańsze i zapewnia dobrą nośność. Sklejka oferuje lepszą odporność na wilgoć i trzymanie gwoździ. Oba nadają się do poszycia ścian szkieletowych. Sprawdź specyfikację dla swojego projektu." },
    { question: "Czy potrzebuję folii wiatroizolacyjnej na poszyciu?", answer: "Tak. Folia wiatroizolacyjna (membrana paroprzepuszczalna) musi być zamontowana na poszyciu, aby zapobiec przenikaniu deszczu, jednocześnie umożliwiając ucieczkę pary wodnej z przegrody ściany. Tyvek, Strotex i Dorken Delta to popularne marki w Polsce." },
    { question: "Ile płyt na typowy dom?", answer: "Typowy dom jednorodzinny ma ok. 150–200 m² powierzchni ścian zewnętrznych (minus otwory). Przy 3,125 m² na płytę plus 10% odpadu potrzebujesz ok. 55–70 płyt OSB/3." },
    { question: "Czy płyta g-k może służyć jako poszycie konstrukcyjne?", answer: "Nie. Standardowa płyta gipsowo-kartonowa nie zapewnia usztywnienia konstrukcyjnego. Niektóre specjalistyczne płyty (np. Rigips Habito) mają lepsze właściwości, ale nie są klasyfikowane do usztywnienia. Stosuj OSB/3, sklejkę lub zatwierdzone płyty konstrukcyjne." },
  ],
};

// ─── ROOFING ────────────────────────────────────────────────────────────────

export const trussCalculator: CalculatorSEOContent = {
  disclaimer: "Wiązary dachowe muszą być indywidualnie zaprojektowane i wyprodukowane. Kalkulator podaje szacunek do budżetowania. Zawsze uzyskaj projekt wiązarów od licencjonowanego producenta.",
  howToUse: [
    "Wprowadź długość dachu w metrach.",
    "Wybierz rozstaw wiązarów (60 cm to standard w Polsce).",
    "Podaj typ wiązara (W, nożycowy, mansardowy).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę wiązarów.",
  ],
  materialInfo:
    "Wiązary dachowe to prefabrykowane trójkątne ramy drewniane przęsłujące od ściany do ściany, podtrzymujące pokrycie dachowe, sufit i wszelkie obciążenia zmienne (wiatr, śnieg, obsługa). W polskim budownictwie mieszkaniowym wiązary typu W (fink) w rozstawie 60 cm są najpowszechniejsze, z rozpiętościami zwykle od 5 m do 12 m. Każdy wiązar jest indywidualnie zaprojektowany przez producenta z użyciem specjalistycznego oprogramowania, aby spełnić wymagania PN-EN 1995-1-1 (Eurokod 5) i obciążenia określone przez konstruktora, w tym obciążenia śniegiem wg stref I–V (0,7–1,8 kN/m²). Wiązary wykonuje się z drewna C24 z ocynkowanymi płytkami kolczastymi w każdym węźle. Przybywają na budowę gotowe do montażu, co znacząco redukuje nakład pracy w porównaniu z dachem krokwiowym. Ceny wiązarów w Polsce to 150–600 zł za sztukę w zależności od rozpiętości, kąta i złożoności. Typowy dom jednorodzinny wymaga 25–40 wiązarów. Czas realizacji to zwykle 2–4 tygodnie od zamówienia. Wszystkie wiązary muszą być stężone i zamocowane wg schematu stężeń producenta oraz PN-EN 1995-1-1.",
  nextSteps: [
    { label: "Kalkulator Krokwi", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Kalkulator Poszycia Dachowego", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Kalkulator Papy Podkładowej", href: "/calculators/roofing/underlayment-calculator/" },
  ],
  installationTips: [
    "Podnoś wiązary na pozycję żurawiem lub ręcznie (dla małych), ustawiając je we właściwym rozstawie.",
    "Stężaj wiązary natychmiast stężeniami tymczasowymi i stałymi wg schematu producenta.",
    "Mocuj każdy wiązar do murłaty kątownikami (łącznikami wiązarów) z ocynkowanej stali.",
    "Sprawdź, czy wszystkie wiązary są pionowe i w jednolitym rozstawie przed montażem łat.",
    "W strefach śniegowych III–V zwróć uwagę na wzmocnione węzły — producent powinien to uwzględnić w projekcie.",
  ],
  commonMistakes: [
    "Brak stężeń wg schematu producenta — niestężone wiązary mogą się zawalić podczas budowy.",
    "Przycinanie lub modyfikowanie wiązarów na budowie — to unieważnia projekt i może spowodować awarię konstrukcyjną.",
    "Składowanie wiązarów płasko na ziemi bez podparć — powinny być magazynowane pionowo lub na podkładach w trzecich punktach.",
    "Montaż wiązarów przy silnym wietrze — grozi przewróceniem niestężonych elementów.",
    "Ignorowanie stref obciążenia śniegiem — Polska ma 5 stref, od 0,7 do 1,8 kN/m².",
  ],
  faqs: [
    { question: "Jaki rozstaw wiązarów dachowych w Polsce?", answer: "60 cm osiowo to standard dla polskich wiązarów mieszkaniowych. 40 cm stosuje się w strefach o dużym obciążeniu śniegiem (strefa IV i V) lub wg specyfikacji konstruktora." },
    { question: "Ile kosztują wiązary dachowe w Polsce?", answer: "Standardowe wiązary typu W kosztują 150–400 zł za sztukę dla rozpiętości do 8 m. Większe rozpiętości lub złożone kształty (mansardowe, nożycowe) to 300–600 zł/szt. Budżetuj 5000–15 000 zł na komplet wiązarów dla typowego domu." },
    { question: "Czy mogę przycinać lub modyfikować wiązary?", answer: "Nie. Wiązary są zaprojektowane jako system. Przycięcie jakiegokolwiek elementu unieważnia projekt i może spowodować awarię konstrukcyjną. Jeśli potrzebne są modyfikacje, skonsultuj się z producentem w sprawie przeprojektowania." },
    { question: "Jaki jest czas realizacji wiązarów?", answer: "Typowy czas realizacji to 2–4 tygodnie od zamówienia w Polsce. Złożone wiązary lub okresy dużego obłożenia mogą wydłużyć to do 6 tygodni. Zamawiaj wiązary z wyprzedzeniem." },
    { question: "Czy potrzebuję zatwierdzenia nadzoru budowlanego?", answer: "Tak. Projekt wiązarów musi być złożony nadzorowi budowlanemu jako część dokumentacji konstrukcyjnej. Nadzór zweryfikuje wiązary podczas wizytacji, aby upewnić się, że odpowiadają zatwierdzonemu projektowi i są prawidłowo stężone." },
    { question: "Jakie stężenia wymagają wiązary?", answer: "Każdy komplet wiązarów zawiera schemat stężeń od producenta. Obejmuje on zwykle stężenia ukośne pod krokwiami, podłużne wzdłuż kalenicy i stężenia w płaszczyźnie pasów dolnych. Stężenia muszą być zamontowane dokładnie wg schematu." },
  ],
};

export const rafterCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź długość dachu w metrach.",
    "Wybierz rozstaw krokwi: 40 cm lub 60 cm osiowo.",
    "Podaj typ dachu (dwuspadowy, kopertowy).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę krokwi.",
  ],
  materialInfo:
    "Krokwie to nachylone elementy drewniane w dachu ciesielskim (w odróżnieniu od dachu wiązarowego), biegnące od kalenicówki w dół do murłaty i podtrzymujące pokrycie dachowe. W polskim dachowaniu ciesielskim krokwie to zwykle drewno C16 lub C24 w rozstawie 40 cm, z przekrojami zależnymi od rozpiętości, kąta i obciążeń wg tablic rozpiętości Eurokodu 5. Typowe przekroje krokwi to 45×150 mm, 45×180 mm i 45×200 mm. Każda krokiew jest cięta z karbem osadzeniowym (wrębem) do osadzenia na murłacie i cięciem czołowym przy kalenicy. Dachy ciesielskie są bardziej pracochłonne niż wiązarowe, ale pozwalają na pełne wykorzystanie przestrzeni poddasza do zamieszkania bez przeszkód tworzonych przez krzyżulce wiązarów. Drewno na krokwie kosztuje ok. 15–35 zł/m.b. w polskich hurtowniach. Konstruktor lub tablice rozpiętości TRADA/Eurokod 5 muszą być konsultowane w celu weryfikacji przekroju krokwi dla konkretnej rozpiętości, kąta i obciążeń śniegiem i wiatrem na danym terenie.",
  nextSteps: [
    { label: "Kalkulator Kalenicówki", href: "/calculators/roofing/ridge-board-calculator/" },
    { label: "Kalkulator Wiązarów Dachowych", href: "/calculators/roofing/truss-calculator/" },
    { label: "Kalkulator Poszycia Dachowego", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Wytnij krokiew wzorcową i użyj jej jako szablonu dla pozostałych.",
    "Karb osadzeniowy (wręb) nie powinien być głębszy niż 1/3 głębokości krokwi.",
    "Mocuj krokwie do murłaty kątownikami lub gwoździowaniem ukośnym.",
    "Zamontuj jętki (kleszcze) na co trzeciej parze krokwi (lub wg specyfikacji), aby przeciwdziałać rozpychaniu.",
    "W polskich strefach śniegowych III–V stosuj wzmocnione połączenia krokwi z murłatą.",
  ],
  commonMistakes: [
    "Zbyt głęboki karb osadzeniowy, co osłabia krokiew w najkrytyczniejszym punkcie.",
    "Brak odpowiedniego zamocowania krokwi do murłaty, co pozwala na rozpychanie pod obciążeniem.",
    "Stosowanie zbyt małych krokwi na daną rozpiętość i kąt — zawsze sprawdzaj tablice rozpiętości.",
    "Pominięcie jętek (kleszczy), co prowadzi do rozpychania ścian.",
    "Nieuwzględnienie obciążenia śniegiem wg strefy — w strefie V to aż 1,8 kN/m².",
  ],
  faqs: [
    { question: "Jaki przekrój krokwi jest potrzebny?", answer: "Przekrój zależy od rozpiętości, kąta, rozstawu, klasy drewna i obciążeń. Orientacyjnie: krokiew C24 45×150 mm w rozstawie 40 cm przęsłuje ok. 3,0 m przy kącie 30°. Sprawdź tablice wg PN-EN 1995 (Eurokod 5) dla swoich warunków." },
    { question: "Dach ciesielski czy wiązarowy?", answer: "Wiązary są szybsze i tańsze dla standardowych projektów. Dach ciesielski jest preferowany, gdy chcesz mieszkalne poddasze (adaptacje, mansardy) lub złożone geometrie dachu. Dach ciesielski daje pełne wykorzystanie objętości poddasza." },
    { question: "Co to jest karb osadzeniowy (wręb)?", answer: "Wręb to nacięcie w kształcie litery V wycięte na spodzie krokwi w miejscu osadzenia na murłacie. Zapewnia płaską powierzchnię oparcia. Nacięcie nie powinno przekraczać 1/3 głębokości krokwi dla zachowania integralności konstrukcyjnej." },
    { question: "Czy potrzebuję jętek (kleszczy)?", answer: "Tak. Jętki łączą przeciwległe krokwie powyżej poziomu stropu, aby zapobiegać rozpychaniu dachu. Zwykle wymagane są na co trzeciej parze krokwi lub wg specyfikacji konstruktora." },
    { question: "Jak mocować krokwie do murłaty?", answer: "Stosuj ocynkowane kątowniki (łączniki krokiew-murłata) przybijane do obu elementów. Alternatywnie gwoździuj ukośnie 3 gwoździami (2 z jednej strony, 1 z drugiej). Przepisy wymagają pozytywnego połączenia odpornego na odrywanie wiatrem." },
    { question: "Ile kosztują krokwie?", answer: "Drewno C24 na krokwie kosztuje ok. 15–35 zł/m.b. w zależności od przekroju. Dla typowego domu z 20–30 krokwiami po 3–4 m każda budżetuj 1200–3500 zł za samo drewno na krokwie." },
  ],
};

export const ridgeBoardCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą długość kalenicy dachu w metrach.",
    "Wybierz głębokość deski (musi być co najmniej równa cięciu czołowemu krokwi).",
    "Wprowadź standardową długość desek.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę desek.",
  ],
  materialInfo:
    "Kalenicówka to poziomy element drewniany na szczycie dachu ciesielskiego, biegnący na całej długości kalenicy. Krokwie z każdej strony dachu są przybijane do kalenicówki, która utrzymuje je w linii i służy jako element dystansowy. W polskim budownictwie kalenicówka ma zwykle grubość 25 mm lub 38 mm i głębokość co najmniej równą cięciu czołowemu krokwi — najczęściej 45×150 mm lub 45×200 mm z drewna C16 lub C24. Kalenicówka jest niekonstrukcyjna w standardowym dachu krokwiowym z jętkami (krokwie i belki stropowe tworzą trójkąt konstrukcyjny), ale jest niezbędna do utrzymania osiowości i dystansu. Dla dachów płatwiowo-krokwiowych bez jętek może być wymagana belka kalenicowa — znacznie większy element projektowany przez konstruktora do przenoszenia obciążeń dachu. Drewno na kalenicówki kosztuje 15–40 zł/m.b. w polskich hurtowniach. Złącza kalenicówki powinny być wykonane na styk przy krokwi lub na zakładkę.",
  nextSteps: [
    { label: "Kalkulator Krokwi", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Kalkulator Poszycia Dachowego", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Kalkulator Wiązarów Dachowych", href: "/calculators/roofing/truss-calculator/" },
  ],
  installationTips: [
    "Podprzyj kalenicówkę tymczasowo na prawidłowej wysokości przed montażem krokwi.",
    "Przybij każdą krokiew do kalenicówki min. 3 gwoździami.",
    "Sprawdź, czy kalenica jest wypoziomowana i prosta przed zakończeniem montażu krokwi.",
    "Łącz kalenicówki przy krokwiach, aby zapewnić odpowiednie podparcie.",
    "Dla długich kalenicy stosuj tymczasowe podparcia co 2–3 m podczas montażu.",
  ],
  commonMistakes: [
    "Zbyt płytka kalenicówka — musi być co najmniej tak głęboka jak cięcie czołowe krokwi dla pełnego oparcia.",
    "Brak podparcia kalenicy podczas budowy, co prowadzi do ugięcia przed zamocowaniem krokwi.",
    "Mylenie kalenicówki z belką kalenicową — służą różnym celom i mają różne wymiary.",
    "Złącza kalenicówki poza pozycjami krokwi, co osłabia element.",
    "Stosowanie drewna o zbyt niskiej klasie na kalenicówkę — minimum C16.",
  ],
  faqs: [
    { question: "Jaki przekrój kalenicówki?", answer: "Kalenicówka powinna być co najmniej tak głęboka jak cięcie czołowe krokwi. Dla krokwi 45×150 mm przy kącie 40° cięcie czołowe wynosi ok. 115 mm, więc kalenicówka 45×150 mm jest wystarczająca." },
    { question: "Czy kalenicówka jest elementem konstrukcyjnym?", answer: "W standardowym dachu krokwiowym z jętkami kalenicówka jest niekonstrukcyjna — utrzymuje krokwie w linii. W dachu płatwiowo-krokwiowym bez jętek potrzebna jest konstrukcyjna belka kalenicowa do przenoszenia rozporu krokwi." },
    { question: "Jak łączyć kalenicówki?", answer: "Złącza na styk powinny przypadać przy krokwi i być zabezpieczone nakładkami ze sklejki lub płytkami metalowymi z obu stron. Złącze musi być sztywne, aby zapobiec ugięciu." },
    { question: "Czy mogę użyć stalowej belki kalenicowej?", answer: "Tak. Stalowe belki kalenicowe (profile IPE, HEA) stosuje się przy adaptacjach poddaszy z otwartą przestrzenią, gdzie jętki nie mogą być użyte. Stalowa belka przenosi pełne obciążenia dachu i musi być zaprojektowana przez konstruktora." },
    { question: "Ile kosztuje drewno na kalenicówkę?", answer: "Drewno na kalenicówkę kosztuje 15–40 zł/m.b. z drewna C16/C24. Typowa kalenica 8 m wymaga 2 desek po 4 m, co kosztuje 120–320 zł łącznie." },
    { question: "Czy dachy wiązarowe mają kalenicówkę?", answer: "Nie. Dachy wiązarowe nie wymagają kalenicówki. Wiązary są połączone w szczycie płytkami kolczastymi i są stężone podłużnie stężeniami ukośnymi i podłużnymi wg schematu producenta." },
  ],
};

export const roofSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź powierzchnię dachu w metrach kwadratowych (lub użyj kalkulatora powierzchni dachu do przeliczenia z wymiarów poziomych).",
    "Wybierz rozmiar płyty (1250×2500 mm to standard).",
    "Podaj grubość (9 mm, 11 mm lub 18 mm).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę płyt.",
  ],
  materialInfo:
    "Poszycie dachowe (deskowanie) zapewnia ciągły podkład, na którym mocuje się membranę podkładową i łaty. W tradycyjnym polskim dachowaniu łaty mocuje się bezpośrednio do krokwi nad membraną wstępnego krycia, bez poszycia. Jednak poszycie jest coraz częściej stosowane w budownictwie szkieletowym, na dachach płaskich i tam, gdzie wymagany jest ciągły podkład pod określone pokrycia (np. gonty bitumiczne, membrany). OSB/3 jest najczęstszym materiałem poszycia dachowego, w grubości 9 mm lub 11 mm. Sklejka stosowana jest tam, gdzie potrzebna jest większa odporność na wilgoć. Każda płyta 1250×2500 mm pokrywa 3,125 m². Rzeczywista powierzchnia dachu jest większa niż rzut z powodu kąta nachylenia — pomnóż powierzchnię rzutu przez mnożnik nachylenia (np. 1,155 dla 30°, 1,414 dla 45°). Poszycie przybija się do krokwi gwoździami pierścieniowymi 50 mm co 15 cm na krawędziach i co 30 cm w polu. Ceny to 35–65 zł za płytę w polskich hurtowniach (Kronospan, Swiss Krono, Egger).",
  nextSteps: [
    { label: "Kalkulator Powierzchni Dachu", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Kalkulator Papy Podkładowej", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Kalkulator Gontów", href: "/calculators/roofing/shingle-calculator/" },
  ],
  installationTips: [
    "Zacznij poszycie od okapu i pracuj w górę, przesuwając złącza o min. 60 cm między rzędami.",
    "Zostaw 3 mm szczelinę między płytami na rozszerzalność wilgotnościową.",
    "Przybijaj co 15 cm na krawędziach i co 30 cm w polu gwoździami pierścieniowymi.",
    "Upewnij się, że wszystkie krawędzie płyt są podparte krokwiami lub wzmocnieniami.",
    "Na strome dachy (powyżej 45°) stosuj dodatkowe mocowania tymczasowe podczas montażu.",
  ],
  commonMistakes: [
    "Nieuwzględnienie mnożnika nachylenia przy obliczaniu powierzchni dachu — dach 45° ma 41% więcej powierzchni niż rzut.",
    "Brak przesunięcia złączy między rzędami, co tworzy słabą linię przez cały dach.",
    "Użycie niekonstrukcyjnego OSB (OSB/2) na poszycie dachowe — zawsze specyfikuj OSB/3.",
    "Montaż poszycia na mokre krokwie, co może prowadzić do pleśni.",
    "Brak wentylacji pod poszyciem na dachach ocieplonych między krokwiami.",
  ],
  faqs: [
    { question: "Czy polskie dachy potrzebują poszycia?", answer: "Tradycyjne dachy nachylone z dachówkami na łatach nie wymagają poszycia. Poszycie stosuje się w budownictwie szkieletowym, na dachach płaskich i tam, gdzie pokrycie wymaga ciągłego podkładu (gonty bitumiczne, membrany)." },
    { question: "Jaka grubość na poszycie dachowe?", answer: "9 mm OSB/3 jest typowe na krokwiach co 40 cm. Dla rozstawu 60 cm stosuj 11 mm. Na dachy płaskie — 18 mm jest standardem." },
    { question: "Jak obliczyć rzeczywistą powierzchnię dachu?", answer: "Pomnóż powierzchnię rzutu przez mnożnik nachylenia. Dla kąta 30° mnożnik wynosi 1,155. Dla 45° — 1,414. Powierzchnia 100 m² rzutu przy 35° daje 100 × 1,221 = 122,1 m² rzeczywistej powierzchni dachu." },
    { question: "Czy mogę użyć sklejki zamiast OSB?", answer: "Tak. Sklejka klasy zewnętrznej (WBP) zapewnia lepszą odporność na wilgoć i jest preferowana na dachy płaskie. Kosztuje 20–40% więcej niż OSB." },
    { question: "Ile płyt na typowy dach domu?", answer: "Typowy dom jednorodzinny ma ok. 50–80 m² powierzchni dachu. Przy 3,125 m² na płytę plus 10% odpadu potrzebujesz ok. 18–28 płyt." },
    { question: "Czy potrzebuję membranę nad poszyciem dachowym?", answer: "Tak. Membrana wstępnego krycia (paroprzepuszczalna, np. Strotex, Dorken Delta, Tyvek Supro) musi być zainstalowana nad poszyciem przed montażem łat. Zapewnia dodatkową barierę pogodową i umożliwia ucieczkę pary wodnej z konstrukcji dachu." },
  ],
};

export const shingleCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię dachu w metrach kwadratowych.",
    "Wybierz typ gontów (3-lametkowe lub architektoniczne).",
    "Podaj kąt nachylenia dachu.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę paczek.",
  ],
  materialInfo:
    "Gonty bitumiczne (asfaltowe) to lekkie, ekonomiczne pokrycie dachowe stosowane na dachach nachylonych z ciągłym podkładem (poszyciem). Choć w Polsce mniej popularne niż dachówka ceramiczna czy cementowa, gonty są cenione przy budynkach gospodarczych, garażach, altanach, domach szkieletowych i jako lekkie pokrycie na istniejące dachy. Gonty sprzedaje się w paczkach, z każdą paczką pokrywającą ok. 2,32 m² dla standardowych gontów 3-lametkowych. Gonty architektoniczne (wielowarstwowe) mają podobne pokrycie, ale grubszy, bardziej teksturowany wygląd. Minimalny kąt nachylenia to ok. 15° (ok. 3:12), choć 20° lub więcej jest zalecane. Gonty wymagają ciągłego podkładu z OSB lub sklejki z odpowiednią membraną podkładową. W Polsce dostępne są marki IKO, GAF, CertainTeed i Tegola w specjalistycznych hurtowniach dachowych. Ceny to 50–120 zł za paczkę w zależności od jakości i stylu. Żywotność gontów architektonicznych to 25–40 lat, standardowych 3-lametkowych — 15–20 lat. Montaż musi być zgodny z wytycznymi producenta i PN-EN 544.",
  nextSteps: [
    { label: "Kalkulator Papy Podkładowej", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Kalkulator Powierzchni Dachu", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Kalkulator Obróbki Okapowej", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: [
    "Montuj gonty na ciągłym poszyciu z membraną podkładową zamocowaną na miejscu.",
    "Zacznij od okapu z pasem startowym i pracuj w górę w zachodzących rzędach.",
    "Stosuj 4 gwoździe na gont (6 w strefach wietrznych) umieszczone w strefie gwoździowej wg producenta.",
    "Przesuwaj każdy rząd o pół szerokości lamelki, aby zapobiec przeciekaniu przez liniowe złącza.",
    "W polskim klimacie z ciężkimi zimami stosuj membranę wzmocnioną (samoprzylepną) na okapach i koszach.",
  ],
  commonMistakes: [
    "Montaż gontów na dachu o zbyt małym kącie — minimum 15° dla większości produktów.",
    "Zbyt mało gwoździ na gont, co umożliwia odrywanie przez wiatr.",
    "Brak przesunięcia rzędów, co pozwala wodzie przenikać przez liniowe złącza.",
    "Pominięcie pasa startowego na okapie, co naraża poszycie na działanie wody.",
    "Montaż w temperaturze poniżej 5°C bez podgrzewania — gonty stają się kruche i pękają.",
  ],
  faqs: [
    { question: "Czy gonty nadają się na polskie dachy?", answer: "Tak. Gonty bitumiczne są dopuszczone do stosowania na dachach nachylonych w Polsce i są popularne dla budynków gospodarczych, garaży i domów szkieletowych. Wymagają ciągłego poszycia i odpowiedniej membrany. Montaż wg PN-EN 544." },
    { question: "Ile paczek na metr kwadratowy?", answer: "Jedna paczka pokrywa ok. 2,32 m². Dla 50 m² dachu potrzebujesz ok. 22 paczek plus 10–15% odpadu, czyli zamów 24–26 paczek." },
    { question: "Jaki minimalny kąt na gonty?", answer: "Minimalny kąt to ok. 15° (ok. 3:12). Poniżej tego woda nie spływa wystarczająco szybko i może być wgniatana pod gonty przez wiatr. Samoprzylepna membrana podkładowa wydłuża minimum do ok. 10° dla niektórych produktów." },
    { question: "Jak długo wytrzymują gonty?", answer: "Gonty architektoniczne: 25–40 lat. Standardowe 3-lametkowe: 15–20 lat. Żywotność zależy od jakości, montażu, wentylacji i ekspozycji pogodowej. W polskim klimacie z obfitymi opadami śniegu i cyklami mróz-odwilż jakość montażu jest kluczowa." },
    { question: "Czy mogę układać gonty na istniejące pokrycie?", answer: "W niektórych przypadkach można ułożyć jedną warstwę nowych gontów na istniejącej. Jednak najlepsza praktyka to zdjęcie starego pokrycia, aby skontrolować poszycie. Polski nadzór budowlany może wymagać pełnego zdjęcia i odnowienia poszycia." },
    { question: "Gdzie kupić gonty dachowe w Polsce?", answer: "Gonty dostępne są w specjalistycznych hurtowniach dachowych (np. Blachotrapez, Blachy Pruszyński), Castoramie, Leroy Merlin i u dystrybutorów online. IKO, GAF i Tegola to najszerzej dostępne marki." },
  ],
};

export const underlaymentCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię dachu w metrach kwadratowych.",
    "Wybierz typ membrany: paroprzepuszczalna lub tradycyjna papa.",
    "Podaj szerokość rolki.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę rolek z uwzględnieniem zakładów.",
  ],
  materialInfo:
    "Membrana wstępnego krycia (membrana dachowa podkładowa) to warstwa odporna na warunki atmosferyczne montowana pod pokryciem dachowym (dachówką, gontem), zapewniająca dodatkową barierę przed deszczem, śniegiem i wilgocią napędzaną wiatrem. W polskim budownictwie membrany paroprzepuszczalne (wysokoparoprzepuszczalne, HPV) w dużej mierze zastąpiły tradycyjną papę, ponieważ pozwalają parze wodnej uciekać z konstrukcji dachu, zmniejszając ryzyko kondensacji i gnicia. Membrany HPV są wymagane przy ociepleniu dachu między krokwiami (dach ciepły). Popularne marki w Polsce to Strotex, Dorken Delta (Maxx, Vent N), Tyvek Supro, Fakro Eurotop i Foliarex. Rolki mają zwykle szerokość 1,5 m i długość 50 m, pokrywając 75 m² brutto (ok. 55–60 m² netto po odjęciu zakładów). Zakłady poziome to 10–15 cm, pionowe 15 cm. Membranę układa się na krokwiach z lekkim zwisem (nie naciąga się) i mocuje kontrłatami wzdłuż krokwi, potem łatami poziomymi. Ceny to 100–350 zł za rolkę w zależności od produktu.",
  nextSteps: [
    { label: "Kalkulator Gontów", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Kalkulator Poszycia Dachowego", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Kalkulator Obróbki Okapowej", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: [
    "Zacznij od okapu i pracuj w górę, zapewniając zachodzenie każdego rzędu na poprzedni o 10–15 cm.",
    "Zostaw lekki zwis między krokwiami — nie naciągaj membrany.",
    "Mocuj kontrłatami wzdłuż krokwi, potem łatami poziomymi.",
    "Uszczelnij wokół przejść dachowych (kominy, wentylacje) taśmą uszczelniającą producenta.",
    "W polskim klimacie zastosuj samoprzylepną membranę wzmocnioną na okapach, w koszach i wokół kominów.",
  ],
  commonMistakes: [
    "Naciąganie membrany między krokwiami — potrzebuje lekkiego zwisu, aby odprowadzać wodę do okapu.",
    "Stosowanie membrany nieparoproprzepuszczalnej tam, gdzie wymagana jest HPV — zatrzymuje wilgoć w konstrukcji dachu.",
    "Niewystarczające zakłady na złączach, co umożliwia przenikanie deszczu napędzanego wiatrem.",
    "Zbyt długa ekspozycja membrany na UV bez pokrycia dachówką — większość membran degraduje w 2–4 miesiące.",
    "Brak uszczelnienia wokół przejść dachowych — to najczęstsze miejsca przecieków.",
  ],
  faqs: [
    { question: "Membrana HPV czy tradycyjna papa?", answer: "Membrana HPV (wysokoparoprzepuszczalna) jest zalecana dla niemal wszystkich współczesnych polskich dachów. Jest wymagana przy ociepleniu między krokwiami (dach ciepły). Tradycyjna papa może być stosowana na dachach zimnych z odpowiednią wentylacją poddasza, ale HPV jest preferowana." },
    { question: "Ile rolek na typowy dach?", answer: "Typowy dom jednorodzinny ma 50–80 m² powierzchni dachu. Przy rolce 1,5 m × 50 m pokrywającej 75 m² brutto (ok. 55–60 m² netto po zakładach) jedna rolka wystarczy na mały dom. Dla domu wolnostojącego budżetuj 2 rolki." },
    { question: "Jakie zakłady na membranę dachową?", answer: "Zakłady poziome (boczne) powinny wynosić 10–15 cm. Zakłady pionowe (końcowe) — 15 cm, przypadając na krokwi. Na kalenicy i koszach membrana powinna sięgać co najmniej 15 cm na przeciwną połać." },
    { question: "Jak długo membrana może być eksponowana na UV?", answer: "Większość membran powinna być pokryta dachówką w ciągu 2–4 miesięcy, aby uniknąć degradacji UV. Niektóre produkty (np. Tyvek UV Facade, Dorken Delta Maxx Plus) są przystosowane do dłuższej ekspozycji." },
    { question: "Ile kosztuje membrana dachowa w Polsce?", answer: "Membrany HPV kosztują 100–350 zł za rolkę (50 m) w zależności od jakości i marki. Budżetowe marki (Strotex Basic) od 100 zł; premium (Tyvek Supro, Dorken Delta Maxx) to 250–350 zł. Dla typowego domu membrana kosztuje 200–700 zł łącznie." },
    { question: "Czy membrana dachowa jest wymagana przepisami?", answer: "Tak. PN-EN i warunki techniczne wymagają membrany wstępnego krycia pod pokryciem dachowym na wszystkich dachach nachylonych. Typ membrany musi odpowiadać projektowi dachu (ciepły lub zimny, wentylowany lub niewentylowany)." },
  ],
};

export const dripEdgeCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Zmierz całkowitą długość okapów i szczytów w metrach.",
    "Wprowadź standardową długość listwy okapowej (zwykle 2,0 m).",
    "Wybierz materiał (blacha ocynkowana, aluminium).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę sztuk.",
  ],
  materialInfo:
    "Obróbka okapowa (listwa okapnikowa) to profilowana blacha w kształcie litery L montowana na krawędziach dachu, kierująca wodę z dala od deski czołowej (deski okapowej) do rynny. W polskim budownictwie obróbki okapowe wykonuje się zwykle z blachy ocynkowanej, powlekanej lub aluminium, w długościach 2,0 m. Są niezbędne do zapobiegania cofaniu się wody pod pokrycie i gniciu desek czołowych i krokwi w strefie okapu. Obróbki okapowe montuje się pod membraną wstępnego krycia na okapach i nad membraną na szczytach (kalenicach bocznych). Standardowe profile kosztują 8–25 zł za sztukę w hurtowniach dachowych, Castoramie i OBI. Obróbki z blachy powlekanej w kolorze dopasowanym do pokrycia kosztują więcej. W polskim klimacie z ciężkimi opadami śniegu i lodowymi narostami prawidłowe obróbki okapowe są szczególnie ważne — zapobiegają podmywaniu podbitki i gniciu konstrukcji okapu.",
  nextSteps: [
    { label: "Kalkulator Gontów", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Kalkulator Papy Podkładowej", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Kalkulator Powierzchni Dachu", href: "/calculators/roofing/roof-area-calculator/" },
  ],
  installationTips: [
    "Na okapach montuj obróbkę pod membraną wstępnego krycia, aby woda spływała z krawędzi do rynny.",
    "Na szczytach montuj obróbkę nad membraną, aby deszcz napędzany wiatrem nie dostawał się pod nią.",
    "Zakłady na złączach min. 50 mm w kierunku spływu wody.",
    "Mocuj gwoździami lub wkrętami co 30 cm.",
    "W strefach z obfitymi opadami śniegu zamontuj kable grzewcze na okapach, aby zapobiec tworzeniu się sopli i lodowych korków.",
  ],
  commonMistakes: [
    "Pominięcie obróbek okapowych — woda cofa się pod dachówkę i niszczy deskę czołową.",
    "Montaż obróbki okapowej nad membraną zamiast pod nią na okapach.",
    "Brak zakładów na złączach w kierunku spływu wody, co tworzy punkty wnikania wody.",
    "Stosowanie zwykłej blachy niezabezpieczonej antykorozyjnie, która rdzewieje w ciągu kilku lat.",
    "Zbyt krótka obróbka, która nie sięga do rynny — woda spływa po ścianie.",
  ],
  faqs: [
    { question: "Czy obróbki okapowe są wymagane na polskich dachach?", answer: "Obróbki okapowe są standardową praktyką budowlaną i elementem prawidłowego wykonania dachu. Zapobiegają uszkodzeniom desek czołowych i konstrukcji okapu. Inspektorzy nadzoru oczekują ich stosowania." },
    { question: "Z jakiego materiału obróbki okapowe?", answer: "Blacha ocynkowana i aluminium są najczęstsze. Blacha powlekana w kolorze dopasowanym do pokrycia dachowego jest estetyczniejsza. Blacha miedziana stosowana jest na budynkach premium. Unikaj blachy niepowlekanej — rdzewieje szybko." },
    { question: "Ile obróbek na typowy dach?", answer: "Zmierz całkowitą długość okapów (obie strony) plus szczyty. Dla typowego dachu 8×5 m okapy to 16 m, szczyty to 10 m = 26 m. Przy 2,0 m na sztukę potrzebujesz 13 sztuk plus 10% = 14–15 sztuk." },
    { question: "Czy potrzebuję obróbek przy rynnach?", answer: "Tak. Obróbki i rynny współpracują. Obróbka kieruje wodę z krawędzi dachu do rynny, zapobiegając jej spływaniu po desce czołowej. Bez obróbki woda może cofać się za rynnę." },
    { question: "Jak przycinać obróbki okapowe?", answer: "Przycinaj nożycami do blachy (nożycami lotniczymi) blachę ocynkowaną i aluminium. Zawsze noś rękawice przy manipulowaniu przyciętymi krawędziami blachy." },
    { question: "Gdzie kupić obróbki okapowe w Polsce?", answer: "Obróbki dostępne są w hurtowniach dachowych (Blachotrapez, Blachy Pruszyński), Castoramie, Leroy Merlin, OBI i Bricomarché. Profile systemowe dopasowane do konkretnych pokryć dachowych zamówisz u producenta pokrycia." },
  ],
};

export const roofPitchCalculator: CalculatorSEOContent = {
  disclaimer: "Kalkulator podaje wyniki geometryczne. Wymagania konstrukcyjne zależą od obciążeń, rozpiętości i materiału — skonsultuj z konstruktorem.",
  howToUse: [
    "Wprowadź wznios dachu (wysokość pionową) w metrach lub milimetrach.",
    "Wprowadź bieg dachu (odległość poziomą) w metrach lub milimetrach.",
    "Podaj strefę obciążenia śniegiem (I–V).",
    "Kliknij Oblicz materiały, aby otrzymać kąt nachylenia, procent spadku i mnożnik powierzchni.",
  ],
  materialInfo:
    "Kąt nachylenia dachu to kąt nachylenia połaci, wyrażony w stopniach, procentach lub stosunku. W Polsce kąt wyraża się zwykle w stopniach (np. 30°, 40°, 45°). Kąt określa, jakie materiały pokryciowe można stosować, jak szybko spływa woda i śnieg oraz ile przestrzeni użytkowej jest na poddaszu. Warunki techniczne i normy PN-EN określają minimalne kąty dla różnych pokryć: dachówka ceramiczna płaska wymaga minimum 35°, dachówka betonowa zakładkowa zwykle 22°, a łupek naturalny 20–25° w zależności od rozmiaru i ekspozycji. Kąt wpływa również na rzeczywistą powierzchnię dachu — dach 45° ma 41,4% więcej powierzchni niż rzut poziomy, co bezpośrednio zwiększa zapotrzebowanie na materiały i koszty. Większość polskich dachów mieszkaniowych ma kąt 30–45°, z 35–40° jako najczęstszym zakresem. Strome dachy (powyżej 45°) występują na zabytkowych budynkach i w architekturze góralskiej. Dachy płaskie (poniżej 10°) wymagają membranowego lub wielowarstwowego pokrycia. W Polsce obciążenie śniegiem zależy od strefy (I–V): od 0,7 kN/m² w strefie I (zachodnia Polska) do 1,8 kN/m² w strefie V (góry) — wpływa to na wymagania konstrukcyjne.",
  nextSteps: [
    { label: "Kalkulator Powierzchni Dachu", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Kalkulator Spadku Dachu", href: "/calculators/roofing/roof-slope-calculator/" },
    { label: "Kalkulator Krokwi", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Zawsze mierz kąt nachylenia od wewnątrz poddasza dla największej dokładności.",
    "Użyj cyfrowego kątomierza lub poziomnicy z taśmą mierniczą.",
    "Zapisz kąt w stopniach dla specyfikowania materiałów i sprawdzania wymagań PN-EN.",
    "Zastosuj mnożnik powierzchni do rzutu, aby uzyskać rzeczywistą powierzchnię dachu do zamawiania materiałów.",
    "Uwzględnij strefę obciążenia śniegiem przy projektowaniu — wpływa na minimalny kąt i konstrukcję.",
  ],
  commonMistakes: [
    "Szacowanie kąta na oko — zawsze mierz dokładnie, ponieważ błąd 5° znacząco wpływa na ilości materiałów.",
    "Mylenie stopni ze stosunkiem wznios:bieg przy odczytywaniu amerykańskich specyfikacji produktów.",
    "Nieuwzględnienie mnożnika nachylenia przy zamawianiu materiałów, co prowadzi do niedoborów.",
    "Ignorowanie strefy obciążenia śniegiem — w strefie V wymagania konstrukcyjne są znacząco wyższe.",
    "Niedopasowanie pokrycia dachowego do kąta — zbyt małe nachylenie to gwarancja przecieków.",
  ],
  faqs: [
    { question: "Jaki jest najczęstszy kąt nachylenia dachu w Polsce?", answer: "Większość polskich dachów mieszkaniowych ma kąt 30–45°, z 35–40° jako najczęstszym zakresem. Ten kąt pasuje do większości dachówek ceramicznych i cementowych i zapewnia dobry odpływ w polskim klimacie z obfitymi opadami." },
    { question: "Jak zmierzyć kąt nachylenia dachu?", answer: "Z wnętrza poddasza przyłóż poziomicę do krokwi i odmierz 30 cm wzdłuż poziomnicy. Zmierz odległość pionową od tego punktu do krokwi. Kąt w stopniach = arctg(pionowa/pozioma). Lub użyj cyfrowego kątomierza przyłożonego do krokwi." },
    { question: "Jaki minimalny kąt na dachówkę w Polsce?", answer: "Dachówka ceramiczna płaska wymaga min. 35°. Dachówka betonowa zakładkowa: 17,5–22,5°. Łupek naturalny: 20–25° w zależności od rozmiaru. Blachodachówka: zwykle od 14°. Zawsze sprawdź specyfikację producenta." },
    { question: "Czy kąt dachu wpływa na pozwolenie na budowę?", answer: "Kąt dachu może wpływać na zgodność z planem zagospodarowania przestrzennego. Zmiana kąta istniejącego dachu lub budowa z nietypowym kątem może wymagać pozwolenia na budowę. Sprawdź z miejscowym urzędem." },
    { question: "Jak kąt wpływa na przestrzeń poddasza?", answer: "Strome dachy tworzą więcej użytkowej przestrzeni poddasza. Kąt 45° daje znacznie więcej wysokości wewnątrz niż 30°. Dla adaptacji poddaszy kąt 35° lub stromszy jest generalnie potrzebny do osiągnięcia min. 2,2 m wysokości w środku." },
    { question: "Jaki kąt na dach płaski?", answer: "Polskie dachy płaskie nie są naprawdę płaskie — muszą mieć minimalny spadek 1:80 (ok. 0,7°) dla odprowadzenia wody, z 1:40 (ok. 1,4°) zalecanym przez większość producentów membran. Zapewnia to spływ wody do wpustów zamiast tworzenia zastoisk." },
  ],
};

export const roofAreaCalculator: CalculatorSEOContent = {
  disclaimer: "Kalkulator podaje geometryczną powierzchnię dachu. Dolicz dodatkowy materiał na odpady, kalenice, naroża i kosze.",
  howToUse: [
    "Wprowadź długość i szerokość rzutu budynku w metrach.",
    "Wprowadź kąt nachylenia dachu w stopniach.",
    "Wybierz typ dachu (dwuspadowy, kopertowy, wielospadowy).",
    "Kliknij Oblicz materiały, aby otrzymać rzeczywistą powierzchnię dachu w m².",
  ],
  materialInfo:
    "Rzeczywista powierzchnia dachu jest zawsze większa niż rzut budynku, ponieważ nachylenie zwiększa powierzchnię. Dach 30° ma ok. 15,5% więcej powierzchni niż rzut, a dach 45° — aż 41,4% więcej. Znajomość dokładnej powierzchni jest niezbędna do zamówienia prawidłowych ilości dachówek, łupków, membrany, łat i mocowań. Dla złożonych kształtów dachu (naroża, kosze, lukarny) podziel dach na proste sekcje geometryczne, oblicz każdą osobno i zsumuj. Dodatkowe narzuty materiałowe potrzebne są na kalenice (ok. 3 dachówki/m), naroża (3–5 dachówek/m) i kosze (2–4 dachówki/m). Planuj 5–10% odpadu dla prostych dachów dwuspadowych i 10–15% dla złożonych dachów z wieloma narożami, koszami i lukarnami. Producenci dachówek w Polsce podają pokrycie w szt./m² dla każdego produktu — uwzględniają zakłady i rozstaw, ale nie odpady. W polskim klimacie z obciążeniem śniegiem do 1,8 kN/m² w strefie V prawidłowe obliczenie powierzchni ma bezpośredni wpływ na koszt i bezpieczeństwo konstrukcji.",
  nextSteps: [
    { label: "Kalkulator Kąta Nachylenia Dachu", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Kalkulator Gontów", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Kalkulator Poszycia Dachowego", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Zmierz rzut z poziomu gruntu, potem zastosuj mnożnik nachylenia dla rzeczywistej powierzchni.",
    "Dla dachów kopertowych i wielospadowych oblicz każdą trójkątną lub trapezoidalną sekcję osobno.",
    "Dolicz narzuty na kalenice, naroża i kosze osobno od głównej powierzchni.",
    "Użyj pokrycia producenta (szt./m²), aby przeliczyć powierzchnię na liczbę dachówek.",
    "Dla dachów z lukarnami oblicz ich dachy osobno i dodaj do powierzchni głównej.",
  ],
  commonMistakes: [
    "Użycie powierzchni rzutu zamiast rzeczywistej nachylonej, co prowadzi do znacznych niedoborów materiałowych.",
    "Nieuwzględnienie naroży i koszy, które wymagają dodatkowych materiałów i generują więcej odpadów.",
    "Pominięcie narzutu na odpady na szczycie obliczenia rzeczywistej powierzchni.",
    "Mylenie powierzchni jednej połaci z całkowitą powierzchnią dachu.",
    "Nieuwzględnienie odsadzek i zmian kąta nachylenia na dachach wielopołaciowych.",
  ],
  faqs: [
    { question: "Jak obliczyć rzeczywistą powierzchnię dachu z rzutu?", answer: "Pomnóż powierzchnię rzutu przez mnożnik nachylenia. Dla kąta 30° — pomnóż przez 1,155. Dla 45° — przez 1,414. Mnożnik = 1/cos(kąt). Rzut 100 m² przy 35° daje 100 × 1,221 = 122,1 m² rzeczywistej powierzchni dachu." },
    { question: "Ile dachówek na metr kwadratowy?", answer: "Zależy od typu: dachówka ceramiczna płaska — ok. 40–60 szt./m². Dachówka betonowa zakładkowa — ok. 10 szt./m². Blachodachówka — ok. 1 arkusz/m² (różne rozmiary). Sprawdź specyfikację producenta." },
    { question: "A co z lukarnami?", answer: "Lukarny dodają powierzchnię dachu (własny dach lukarny), ale usuwają powierzchnię z głównego dachu. Dla małych lukarn te wartości w przybliżeniu się znoszą. Dla dużych lukarn oblicz dach lukarny osobno." },
    { question: "Jak zmierzyć powierzchnię dachu z poziomu gruntu?", answer: "Zmierz rzut budynku (długość i szerokość) i określ kąt nachylenia (z poddasza lub klinometrem z ziemi). Zastosuj mnożnik nachylenia. Dla dokładności w zakresie 5% ta metoda wystarczy do zamawiania materiałów." },
    { question: "Czy trzeba doliczać na kalenice i naroża?", answer: "Tak. Dachówki kalenicowe, narożne i koszowe zamawia się osobno. Budżetuj 3 dachówki kalenicowe na metr kalenicy, 3–5 na metr naroża i uwzględnij korytka lub systemy suche na każdy kosz." },
    { question: "Co to jest kwadrat dachowy?", answer: "Kwadrat dachowy to amerykańska jednostka równa 100 sq ft (9,29 m²). Nie jest powszechnie używana w Polsce, gdzie materiały zamawia się na m² lub w paczkach/arkuszach. Jeśli amerykański produkt podaje pokrycie w kwadratach, pomnóż przez 9,29, aby przeliczyć na m²." },
  ],
};

export const roofSlopeCalculator: CalculatorSEOContent = {
  disclaimer: "Kalkulator podaje wartości geometryczne. Zawsze weryfikuj przydatność materiału z minimalnym kątem w specyfikacji producenta.",
  howToUse: [
    "Wprowadź wznios i bieg dachu w tych samych jednostkach (metrach lub milimetrach).",
    "Podaj typ planowanego pokrycia dachowego.",
    "Kliknij Oblicz materiały, aby otrzymać kąt w stopniach, procent spadku i stosunek nachylenia.",
    "Porównaj wynik z minimalnymi wymaganiami dla wybranego pokrycia.",
  ],
  materialInfo:
    "Spadek dachu opisuje stromość dachu i określa, jakie materiały pokryciowe są odpowiednie, jak szybko spływa woda i śnieg, oraz czy przestrzeń poddasza jest użytkowa. W Polsce spadek wyraża się zwykle w stopniach, podczas gdy w Ameryce Północnej jako stosunek (np. 6:12). Procent spadku to (wznios/bieg) × 100. Dach 30° ma spadek 57,7%. Różne materiały pokryciowe mają różne minimalne wymagania spadku wg norm PN-EN i specyfikacji producenta. Dachówka ceramiczna płaska wymaga 35° minimum. Dachówka betonowa zakładkowa: 17,5–22,5°. Łupek naturalny: 20–25°. Gonty bitumiczne: 15°. Blachodachówka: zwykle od 14°. Membrana jednowarstwowa: od ok. 1,5° z odpowiednim spadkiem. Spadek wpływa też na obciążenie wiatrem (strome dachy łapią więcej wiatru), obciążenie śniegiem (strome dachy zrzucają śnieg szybciej — ważne w polskich strefach III–V) i dostępną wysokość poddasza. Dla adaptacji poddaszy minimalny kąt to ok. 35° dla osiągnięcia wymaganej wysokości 2,2 m wg WT.",
  nextSteps: [
    { label: "Kalkulator Kąta Nachylenia Dachu", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Kalkulator Powierzchni Dachu", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Kalkulator Krokwi", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Mierz spadek z wnętrza poddasza za pomocą poziomnicy i taśmy mierniczej dla dokładności.",
    "Zapisz spadek w stopniach dla specyfikowania materiałów pokryciowych wg norm PN-EN.",
    "Użyj spadku do sprawdzenia, czy wybrane pokrycie spełnia wymagania minimalnego kąta.",
    "Zastosuj mnożnik powierzchni do obliczenia rzeczywistej powierzchni dachu.",
    "Uwzględnij spadek przy obliczaniu obciążenia śniegiem — na strmych dachach śnieg zsuwających się wg PN-EN 1991-1-3.",
  ],
  commonMistakes: [
    "Specyfikowanie pokrycia poniżej jego minimalnego kąta — to unieważnia gwarancję i zaprasza przecieki.",
    "Mylenie stopni ze stosunkiem wznios:bieg przy odczytywaniu amerykańskich kart produktów.",
    "Niesprawdzenie minimalnego kąta producenta dla konkretnego produktu pokryciowego.",
    "Nieuwzględnienie wpływu spadku na obciążenie śniegiem wg strefy.",
    "Przyjęcie, że jeden typ pokrycia pasuje do każdego kąta — każdy materiał ma ograniczenia.",
  ],
  faqs: [
    { question: "Jaka jest różnica między kątem a spadkiem?", answer: "W polskiej praktyce terminy są często używane zamiennie i oba wyrażane w stopniach. Technicznie kąt to nachylenie krokwi od poziomu (w stopniach), a procent spadku to (wznios/bieg) × 100. Kąt 30° = 57,7% spadku." },
    { question: "Jak stromy może być dach?", answer: "Nie ma górnego limitu w przepisach budowlanych, ale dachy powyżej 50° są nietypowe w budownictwie mieszkaniowym. Bardzo strome dachy (60°+) występują na kościołach, wieżach i zabytkach. Powyżej ok. 60° dachówki muszą być mocowane mechanicznie, aby nie zsuwały się." },
    { question: "Jaki minimalny spadek dla dachu płaskiego?", answer: "Polskie dachy płaskie muszą mieć minimalny spadek 1:80 (ok. 0,7°) z 1:40 (1,4°) zalecanym przez większość producentów membran. Zapewnia to spływ wody do wpustów zamiast zastoin na powierzchni." },
    { question: "Czy spadek wpływa na ubezpieczenie?", answer: "Niektórzy ubezpieczyciele mogą naliczać wyższe składki za dachy bardzo płaskie (wyższe ryzyko przecieków) lub bardzo strome (wyższe koszty napraw i wiatru). Standardowe kąty 25–45° zwykle przyciągają najniższe składki." },
    { question: "Jak przeliczyć stopnie na stosunek wznios:bieg?", answer: "Stosunek wznios:bieg = tg(kąt) × 12. Dla dachu 30°: tg(30) = 0,577, więc stosunek to 0,577 × 12 = 6,93:12, czyli ok. 7:12. Polscy budowniczcy pracują w stopniach, więc to przeliczenie jest głównie potrzebne przy produktach amerykańskich." },
    { question: "Jaki kąt na maksymalną przestrzeń poddasza?", answer: "Kąt 45° daje maksymalną użytkową objętość dla danego rzutu. Bardziej strome kąty dodają wysokość, ale nie szerokość. Dla adaptacji poddaszy 40–45° jest idealne, zapewniając 2,2 m+ wysokości na użytkowej powierzchni podłogi." },
  ],
};

// ─── EXTERIOR SHELL ─────────────────────────────────────────────────────────

export const housewrapCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię ścian zewnętrznych w metrach kwadratowych.",
    "Wybierz szerokość rolki (1,5 m lub 3,0 m).",
    "Podaj typ membrany (HPV paroprzepuszczalna).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę rolek z uwzględnieniem zakładów.",
  ],
  materialInfo:
    "Folia wiatroizolacyjna (membrana paroprzepuszczalna, HPV) to bariera odporna na wiatr i deszcz, ale przepuszczalna dla pary wodnej, montowana na zewnątrz ścian szkieletowych pod okładziną. Jej zadaniem jest umożliwienie ucieczki pary wodnej ze struktury ściany, jednocześnie chroniąc przed deszczem napędzanym wiatrem. W polskim budownictwie szkieletowym folia wiatroizolacyjna jest krytycznym komponentem wymaganym przez warunki techniczne (WT) dla ochrony przed wilgocią i efektywności energetycznej. Popularne marki w Polsce to Strotex, Dorken Delta (Fassade, Vent S), Tyvek (DuPont), Fakro Eurotop i Foliarex. Membranę zszywkuje się do poszycia lub słupków z zakładami min. 10 cm poziomo i 15 cm pionowo, ze złączami uszczelnionymi taśmą producenta dla szczelności powietrznej. Rozmiary rolek: typowe szerokości to 1,5 m i 3,0 m, długości 50 m lub 100 m. Ceny to 100–400 zł za rolkę w zależności od jakości i rozmiaru. Dla budynków pasywnych i niskoenergetycznych folia wiatroizolacyjna jest często łączona ze strategią taśmowania szczelności powietrznej, aby spełnić surowe normy przepuszczalności powietrznej.",
  nextSteps: [
    { label: "Kalkulator Sidingu Winylowego", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Kalkulator Okładziny Włóknisto-Cementowej", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Kalkulator Obróbek Okiennych", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Zacznij od dołu ściany i pracuj w górę, aby górne rzędy zachodziły na dolne.",
    "Zakłady poziome min. 10 cm, pionowe min. 15 cm.",
    "Taśmuj wszystkie złącza taśmą kompatybilną z membraną producenta dla szczelności powietrznej.",
    "Zawiń membranę w otwory okienne i drzwiowe na min. 10 cm.",
    "Nie pozostawiaj membrany eksponowanej na UV dłużej niż 2–4 miesiące przed montażem okładziny.",
  ],
  commonMistakes: [
    "Montaż membrany odwrotną stroną — sprawdź instrukcję producenta, która strona jest zewnętrzna.",
    "Zbyt długa ekspozycja na UV przed okładziną — degraduje większość produktów w 2–4 miesiące.",
    "Brak taśmowania złączy, co kompromituje szczelność powietrzną wymaganą przez WT.",
    "Stosowanie membrany niekompatybilnej z typem poszycia (OSB vs. płyta bitumiczna).",
    "Brak zawinięcia membrany w otwory okienne i drzwiowe.",
  ],
  faqs: [
    { question: "Czy folia wiatroizolacyjna jest wymagana przepisami?", answer: "Tak. Warunki techniczne wymagają ochrony przed wilgocią i szczelnej powłoki budynku. Folia wiatroizolacyjna spełnia oba wymagania w budownictwie szkieletowym i jest oczekiwana przez nadzór budowlany." },
    { question: "Jaka jest różnica między Tyvek a Strotex?", answer: "Tyvek (DuPont) to spunbondowany polietylen o doskonałej paroprzepuszczalności i trwałości. Strotex to polska marka membran polipropylenowych szeroko stosowanych w budownictwie szkieletowym i z SIP. Oba spełniają normy PN-EN." },
    { question: "Jak długo folia może być eksponowana?", answer: "Większość membran powinna być pokryta okładziną w ciągu 2–4 miesięcy. Niektóre produkty (Tyvek UV Facade, Dorken Delta Fassade) są przystosowane do długotrwałej ekspozycji UV za okładziną z otwartymi fugami." },
    { question: "Czy muszę taśmować złącza?", answer: "Tak, dla szczelności powietrznej wg WT. Stosuj taśmę zalecaną przez producenta membrany. Generyczne taśmy mogą się nie klejić prawidłowo i mogą zawieść z czasem." },
    { question: "Ile kosztuje folia wiatroizolacyjna?", answer: "Ceny od 100 zł za produkty budżetowe (Strotex Basic) do 400+ zł za premium (Tyvek Supro, Dorken Delta Maxx) za rolkę (50–75 m²). Dla typowego domu z 150 m² ścian zewnętrznych folia kosztuje 200–1000 zł." },
    { question: "Czy mogę użyć folii wiatroizolacyjnej na ścianach murowanych?", answer: "Folia wiatroizolacyjna jest przeznaczona do budownictwa szkieletowego i SIP. Ściany murowane stosują inną strategię zarządzania wilgocią (ściana z szczeliną wentylacyjną). Membranę można jednak stosować za okładziną wentylowaną na murze." },
  ],
};

export const vinylSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię ścian w metrach kwadratowych.",
    "Odejmij powierzchnię okien i drzwi.",
    "Wybierz profil panelu (deskówka, szalówka).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę paneli i opakowań.",
  ],
  materialInfo:
    "Siding winylowy (okładzina PCV) to niskoobsługowa elewacja popularna ze względu na trwałość, odporność na warunki atmosferyczne i bogaty wybór kolorów i profili. W Polsce siding winylowy dostępny jest w profilach deskówki poziomej i szalówki, z długościami paneli zwykle 3,0–5,0 m. Pokrycie na panel zależy od szerokości ekspozycji — standardowy panel 200 mm × 5,0 m pokrywa ok. 1,0 m². Panele sprzedawane są w opakowaniach, w cenach 20–60 zł/m² w zależności od jakości i wykończenia. Akcesoria obejmują listwy startowe, profile J, narożniki i podbitki. Montaż wymaga wentylowanej szczeliny (min. 25 mm) za okładziną dla zarządzania wilgocią. Marki dostępne w Polsce to VOX, Mitten (Ply Gem), Georgia-Pacific i Kaycan. Siding winylowy nie wymaga malowania, bejcowania ani uszczelniania i ma żywotność 20–30+ lat. Jest lekki, co sprawdza się w budownictwie szkieletowym i termomodernizacjach. W polskim klimacie z mrozami do -30°C i upałami do 35°C ważne jest stosowanie paneli z odpowiednimi dylatacjami temperaturowymi.",
  nextSteps: [
    { label: "Kalkulator Folii Wiatroizolacyjnej", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Kalkulator Okładziny Włóknisto-Cementowej", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Kalkulator Obróbek Okiennych", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Zamontuj listwę startową u podstawy i pracuj w górę, zatrzaskując każdy panel w poprzedni.",
    "Zostaw 6 mm szczeliny dylatacyjnej na każdym końcu panelu — winyl rozszerza się znacząco z temperaturą.",
    "Nie przybijaj paneli na ciasno — zostaw gwoździe lekko luźne, aby umożliwić ruch termiczny.",
    "Stosuj gwoździe nierdzewne lub aluminiowe, aby zapobiec rdzawym plamom.",
    "W polskim klimacie montuj panele w temperaturze powyżej 5°C — zimny winyl jest kruchy.",
  ],
  commonMistakes: [
    "Przybijanie paneli za ciasno, co uniemożliwia rozszerzalność termiczną i powoduje wybrzuszenia w upały.",
    "Brak szczelin dylatacyjnych przy akcesoriach i listwach, co powoduje paczenie się paneli.",
    "Brak wentylowanej szczeliny za okładziną, co zatrzymuje wilgoć przy ścianie.",
    "Montaż w temperaturze poniżej 0°C, gdy winyl jest kruchy i łatwo pęka.",
    "Stosowanie gwoździ stalowych niepowlekanych, które rdzewieją i plamią elewację.",
  ],
  faqs: [
    { question: "Czy siding winylowy nadaje się na polski klimat?", answer: "Tak. Siding winylowy jest zaprojektowany, aby wytrzymać deszcz, wiatr, mróz i promieniowanie UV. Jakościowe produkty (VOX, Mitten) są testowane wg norm PN-EN i mają gwarancje 10–25 lat. Ważne jest zachowanie dylatacji temperaturowych." },
    { question: "Czy potrzebuję pozwolenia na siding?", answer: "W większości przypadków wymiana lub dodanie okładziny na domu jest robotą budowlaną wymagającą co najmniej zgłoszenia. W przypadku budynków zabytkowych lub w strefie konserwatorskiej wymagane jest pozwolenie. Sprawdź z urzędem gminy." },
    { question: "Jak długo wytrzymuje siding winylowy?", answer: "Jakościowy siding winylowy wytrzymuje 20–30+ lat przy minimalnej konserwacji. Blaknięcie koloru jest głównym problemem — produkty premium mają stabilizatory UV redukujące blaknięcie." },
    { question: "Ile kosztuje siding winylowy w Polsce?", answer: "Materiały: 20–60 zł/m², plus akcesoria (300–1000 zł na dom za listwy, narożniki, podbitki). Profesjonalny montaż: 60–120 zł/m². Typowy dom: 8000–20 000 zł za materiały lub 20 000–45 000 zł z montażem." },
    { question: "Czy siding winylowy jest ognioodporny?", answer: "Nie. Siding winylowy jest palny i podlega ograniczeniom przepisów p.poż. na budynkach powyżej 25 m (nowa zabudowa). Dla budownictwa jednorodzinnego jest dopuszczony z zachowaniem wymagań rozprzestrzeniania ognia wg PN-EN 13501." },
    { question: "Czy mogę zamontować siding na istniejący tynk?", answer: "Tak, pod warunkiem, że tynk jest zdrowy i ściana jest konstrukcyjnie stabilna. Zamocuj łaty drewniane impregnowane na tynku, aby stworzyć szczelinę wentylacyjną i powierzchnię montażową dla okładziny." },
  ],
};

export const hardieSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię ścian w metrach kwadratowych.",
    "Odejmij powierzchnię okien i drzwi.",
    "Wybierz szerokość ekspozycji desek.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę desek.",
  ],
  materialInfo:
    "Okładzina włóknisto-cementowa (typu HardiePlank, Cedral, Eternit) to jedna z najpopularniejszych opcji elewacyjnych premium w Polsce, oferująca wygląd deskówki drewnianej z trwałością włóknocementu. Deski włóknisto-cementowe są niepalne (klasa ogniowa A2), odporne na gnicie, owady i stabilne w UV. Standardowe wymiary desek to 3600 mm × 190 mm (z ekspozycją 152 mm po nałożeniu zakładki). Każda deska pokrywa ok. 0,55 m² powierzchni ściany. Deski dostępne są w szerokim zakresie kolorów fabrycznych z 15-letnią gwarancją na kolor. Ceny to ok. 30–65 zł za deskę (55–120 zł/m²) u polskich dystrybutorów, w Castoramie i hurtowniach budowlanych. Montaż wymaga szczeliny wentylacyjnej za deskami, gwoździ lub wkrętów nierdzewnych i kompatybilnych obróbek na wszystkich połączeniach. Okładzina włóknisto-cementowa jest dopuszczona na budynkach o dowolnej wysokości ze względu na klasyfikację niepalną, co czyni ją preferowanym wyborem w kontekście zaostrzonych przepisów p.poż. Marki popularne w Polsce: Cedral (Etex/Eternit), HardiePlank (James Hardie), Equitone.",
  nextSteps: [
    { label: "Kalkulator Folii Wiatroizolacyjnej", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Kalkulator Obróbek Okiennych", href: "/calculators/exterior-shell/window-flashing-calculator/" },
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Stosuj gwoździe nierdzewne pierścieniowe lub wkręty nierdzewne — zwykła stal zardzewieje i poplamię deski.",
    "Zachowaj minimalną zakładkę 30 mm między rzędami.",
    "Zostaw 6 mm szczelinę między końcami desek na złączach, uszczelnioną elastycznym silikonem w kolorze.",
    "Zamontuj listwę startową u podstawy, aby ustawić kąt pierwszego rzędu.",
    "Przycinaj piłą z odkurzaniem — pył włóknisto-cementowy jest szkodliwy; noś maskę FFP3.",
  ],
  commonMistakes: [
    "Stosowanie mocowań niestopowych, które rdzewieją i plamią okładzinę w ciągu miesięcy.",
    "Cięcie bez odpowiedniego odpylania — pył włóknisto-cementowy jest niebezpieczny; używaj piły z odciągiem.",
    "Brak zabezpieczenia ciętych krawędzi farbą retuszową producenta, co naraża surowy włóknocement na wilgoć.",
    "Montaż bez szczeliny wentylacyjnej za deskami — wilgoć nie może uciec i powoduje problemy.",
    "Nieuwzględnienie ciężaru desek — włóknocement jest cięższy niż siding winylowy i wymaga odpowiedniego podkładu.",
  ],
  faqs: [
    { question: "Czy okładzina włóknisto-cementowa jest ognioodporna?", answer: "Tak. Deski włóknisto-cementowe (Cedral, HardiePlank) są klasyfikowane jako niepalne (Euroklasa A2-s1, d0) i spełniają wymagania przepisów p.poż. do stosowania na budynkach o dowolnej wysokości." },
    { question: "Jak długo wytrzymuje okładzina włóknisto-cementowa?", answer: "Produkty mają 10-letnią gwarancję na produkt i 15-letnią na kolor. W praktyce prawidłowo zamontowana okładzina włóknisto-cementowa wytrzymuje 30–50+ lat przy minimalnej konserwacji." },
    { question: "Czy mogę pomalować deski włóknisto-cementowe?", answer: "Deski mają fabryczne wykończenie kolorystyczne. Można je przemalować farbą elewacyjną, jeśli chcesz zmienić kolor. Wykończenie fabryczne jest trwalsze niż farba nakładana na budowie." },
    { question: "Ile kosztuje okładzina włóknisto-cementowa w Polsce?", answer: "Materiały: 55–120 zł/m² za deski plus akcesoria (listwy startowe, narożniki, obróbki). Profesjonalny montaż: 100–180 zł/m². Typowy dom: 15 000–35 000 zł za materiały lub 35 000–60 000 zł z montażem." },
    { question: "Czy potrzebuję szczeliny wentylacyjnej za deskami?", answer: "Tak. Minimalna szczelina 25 mm jest wymagana między folią wiatroizolacyjną a tyłem okładziny. Tworzy się ją za pomocą łat impregnowanych mocowanych pionowo do słupków lub poszycia." },
    { question: "Czy okładzina nadaje się na cały klimat Polski?", answer: "Tak. Okładzina włóknisto-cementowa jest testowana na surowe warunki ekspozycji i sprawdza się we wszystkich regionach Polski, włączając wybrzeże Bałtyku, tereny górskie i regiony z mroźnymi zimami." },
  ],
};

export const windowFlashingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź liczbę okien i drzwi.",
    "Wprowadź średni obwód okna/drzwi w metrach.",
    "Wybierz szerokość taśmy uszczelniającej (100, 150 lub 225 mm).",
    "Kliknij Oblicz materiały, aby otrzymać metry bieżące i liczbę rolek.",
  ],
  materialInfo:
    "Taśma uszczelniająca okna to samoprzylepna membrana nakładana wokół otworów okiennych i drzwiowych, tworząca szczelne połączenie między ramą a strukturą ściany. Zapobiega przenikaniu wody za okładzinę w otworach, które są najbardziej wrażliwymi punktami powłoki budynku. W polskim budownictwie szkieletowym taśmę nakłada się na poszycie lub słupki wokół każdego otworu przed montażem okna, zachodzą na folię wiatroizolacyjną w określonej kolejności: parapet najpierw, potem ościeżnice boczne, na końcu nadproże. Taśma musi być paroprzepuszczalna po stronie zewnętrznej i wodoszczelna. Typowe szerokości to 100 mm, 150 mm i 225 mm, z 150 mm jako najbardziej uniwersalną. Popularne produkty w Polsce to Soudal Window Tape, Illbruck ME500, Pro Clima Tescon Vana, Airstop Flex i Foliarex. Ceny od 30 do 120 zł za rolkę 25 m w zależności od szerokości i marki. Prawidłowe obróbki okienne są kluczowe dla szczelności powietrznej wg WT i ochrony przed wilgocią. Awarie obróbek okiennych to jedna z najczęstszych przyczyn uszkodzeń wodnych w budynkach szkieletowych.",
  nextSteps: [
    { label: "Kalkulator Folii Wiatroizolacyjnej", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Kalkulator Poszycia Zewnętrznego", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Obróbki wykonuj w kolejności: parapet najpierw, potem boki (zachodzące na parapet), na końcu nadproże (zachodzące na boki).",
    "Upewnij się, że taśma przylega mocno do czystych, suchych powierzchni — dociśnij wałkiem.",
    "Zewnętrzna krawędź taśmy musi zachodzić na folię wiatroizolacyjną, aby kierować wodę na zewnątrz.",
    "Na wszystkich czterech narożnikach otworu użyj narożnikowych łatek dla pełnego pokrycia.",
    "W polskim klimacie z mrozami stosuj taśmy odporne na niskie temperatury — montaż w mrozie pogarsza przyczepność.",
  ],
  commonMistakes: [
    "Nakładanie obróbki nadproża przed bokami, co pozwala wodzie spływać za taśmę.",
    "Niedociśnięcie taśmy, co pozostawia pęcherzyki powietrza, gdzie przyczepność zawodzi.",
    "Stosowanie taśmy niekompatybilnej z folią wiatroizolacyjną — sprawdź kompatybilność producenta.",
    "Pominięcie narożnikowych łatek, co pozostawia wrażliwe punkty bez ochrony.",
    "Montaż na mokrej lub brudnej powierzchni, co uniemożliwia prawidłowe klejenie.",
  ],
  faqs: [
    { question: "Czy potrzebuję taśmy uszczelniającej przy każdym oknie?", answer: "Tak. Każdy otwór okienny i drzwiowy w ścianie szkieletowej musi być uszczelniony taśmą, aby zapobiec wnikaniu wody. Otwory są najbardziej wrażliwym punktem powłoki budynku i wymagają ciągłych, prawidłowo zakładkowanych obróbek." },
    { question: "Jaką szerokość taśmy wybrać?", answer: "150 mm jest najuniwerszalniejsza, zapewniając odpowiednie pokrycie dla standardowych otworów. 100 mm stosuje się na wąskie ościeża. 225 mm na głębokie ościeża lub jako parapetnik." },
    { question: "Jaka jest prawidłowa kolejność obróbek?", answer: "Parapet najpierw, potem boki (zachodzące na taśmę parapetową), na końcu nadproże (zachodzące na taśmy boczne). Ta kaskadowa kolejność zapewnia, że woda zawsze spływa na zewnątrz i w dół, nigdy za taśmę." },
    { question: "Czy mogę użyć dowolnej taśmy samoprzylepnej?", answer: "Nie. Stosuj produkt specjalnie przeznaczony do obróbek okiennych, kompatybilny z folią wiatroizolacyjną. Generyczne taśmy klejące, taśma izolacyjna i taśma do gładzi nie zapewniają odpowiedniej przyczepności i odporności na warunki atmosferyczne." },
    { question: "Ile taśmy na jedno okno?", answer: "Standardowy otwór okienny (1200×1200 mm) wymaga ok. 5 m taśmy (obwód plus zakłady). Typowy dom z 10–15 oknami wymaga 50–75 m taśmy, czyli 2–3 rolki po 25 m." },
    { question: "Czy taśma obróbkowa przyczynia się do szczelności powietrznej?", answer: "Tak. Taśma obróbkowa okien jest kluczowym elementem warstwy szczelności powietrznej w budownictwie szkieletowym. Łączy szczelinę między ramą okna a folią wiatroizolacyjną/paroizolacją, zapobiegając wyciekom powietrza przez otwory." },
  ],
};

// ─── INSULATION & DRYWALL ───────────────────────────────────────────────────

export const cavityInsulationCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię ścian w metrach kwadratowych.",
    "Odejmij powierzchnię okien i drzwi.",
    "Wybierz typ i grubość izolacji (wełna mineralna, PIR).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę mat, rolek lub płyt.",
  ],
  materialInfo:
    "Izolacja ścian wypełnia przestrzeń między słupkami lub w ścianie murowanej dwuwarstwowej, redukując straty ciepła i spełniając wymagania cieplne warunków technicznych (WT 2021). W polskim budownictwie szkieletowym najczęstsze typy izolacji to maty z wełny mineralnej (Rockwool, Knauf Insulation, Isover), sztywne płyty PIR (Recticel, Bauder, Puren) i izolacja z włókien naturalnych (wełna drzewna Steico). Dla ścian 90 mm z wełną mineralną 90 mm uzyskuje się R ≈ 2,5 m²K/W. Dla ścian 140 mm z wełną 140 mm: R ≈ 3,5 m²K/W. Izolacja PIR osiąga wyższy opór cieplny na jednostkę grubości: 100 mm PIR daje R ≈ 4,55 m²K/W. WT 2021 wymaga współczynnika U ścian ≤ 0,20 W/m²K dla nowych budynków, co zwykle wymaga 150–200 mm wełny mineralnej lub 100–120 mm PIR. Maty wełny mineralnej sprzedawane są w paczkach pokrywających 3–6 m² w cenach 60–150 zł za paczkę w Castoramie, Leroy Merlin i PSB Mrówka. Płyty PIR kosztują 60–120 zł za płytę (1200×2400 mm). Folia paroizolacyjna musi być zamontowana po ciepłej stronie izolacji, aby zapobiec kondensacji wewnątrz przegrody wg PN-EN ISO 13788.",
  nextSteps: [
    { label: "Kalkulator Płyt Gipsowo-Kartonowych", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Kalkulator Wkrętów do Płyt G-K", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Przycinaj maty izolacyjne z lekkim naddatkiem (5–10 mm) na wcisk między słupki.",
    "Wypełnij wszystkie szczeliny, narożniki i przestrzenie wokół instalacji — nawet małe szczeliny powodują znaczne straty ciepła.",
    "Zamontuj ciągłą folię paroizolacyjną po ciepłej stronie z taśmowaniem wszystkich złączy.",
    "Nie ściskaj izolacji — ściśnięte maty tracą parametry cieplne.",
    "W polskim klimacie (strefa klimatyczna III wg PN-EN) rozważ dodatkową warstwę izolacji na zewnątrz słupków dla eliminacji mostków cieplnych.",
  ],
  commonMistakes: [
    "Pozostawianie szczelin wokół instalacji, rur i kabli — tworzą mostki cieplne i ścieżki wycieku powietrza.",
    "Pominięcie folii paroizolacyjnej, co prowadzi do kondensacji międzywarstwowej i potencjalnego gnicia.",
    "Ściskanie mat do mniejszej grubości, co dramatycznie obniża ich opór cieplny.",
    "Stosowanie izolacji o niewystarczającej grubości — WT 2021 wymaga U ≤ 0,20 W/m²K.",
    "Brak uwzględnienia mostków cieplnych przez słupki — drewno ma 4× gorszy opór cieplny niż wełna.",
  ],
  faqs: [
    { question: "Jakie U wymagane jest dla ścian wg WT 2021?", answer: "Warunki techniczne (WT 2021) wymagają współczynnika U ścian ≤ 0,20 W/m²K dla nowych budynków mieszkalnych. Wymaga to zwykle 150–200 mm wełny mineralnej lub 100–120 mm PIR w ścianie, plus ewentualną dodatkową izolację zewnętrzną." },
    { question: "Wełna mineralna czy PIR na ściany szkieletowe?", answer: "Oba się nadają. Wełna mineralna (Rockwool, Knauf) jest tańsza, ognioodporna i dobrze tłumi dźwięk. PIR jest cieńszy przy tym samym oporze cieplnym, bardziej odporny na wilgoć i daje sztywniejszy montaż. Wielu budowniczych łączy wełnę między słupkami z PIR na wewnętrznej stronie." },
    { question: "Czy potrzebuję folii paroizolacyjnej?", answer: "Tak. Folia paroizolacyjna (np. PE 0,2 mm lub membrana Strotex, Dorken) musi być zamontowana po ciepłej stronie izolacji wg PN-EN ISO 13788 i WT. Wszystkie złącza muszą być taśmowane kompatybilną taśmą dla szczelności powietrznej." },
    { question: "Ile kosztuje izolacja ścian w Polsce?", answer: "Wełna mineralna: ok. 15–35 zł/m² dla grubości 100–150 mm. PIR: 30–55 zł/m² dla 100 mm. Dla typowego domu z 100 m² ścian zewnętrznych izolacja kosztuje 1500–5500 zł w zależności od typu i grubości." },
    { question: "Czy mogę użyć naturalnych materiałów izolacyjnych?", answer: "Tak. Wełna drzewna (Steico Flex), wełna owcza (Thermafleece) i konopie są dostępne w Polsce. Kosztują 20–50% więcej niż wełna mineralna, ale mają niższy ślad węglowy, lepsze buforowanie wilgoci i są przyjemne w montażu." },
    { question: "A co z izolacją akustyczną?", answer: "Wełna mineralna (min. 50 mm, najlepiej 100 mm) między słupkami w ścianach działowych i międzylokalowych zapewnia doskonałą izolację akustyczną. Dla spełnienia wymagań PN-EN ISO 717 w ścianach między lokalami odnieś się do rozwiązań systemowych producenta." },
  ],
};

export const drywallCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię ścian i/lub sufitu w metrach kwadratowych.",
    "Odejmij powierzchnię okien i drzwi.",
    "Wybierz rozmiar płyty (1200×2600 mm to standard w Polsce).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę płyt.",
  ],
  materialInfo:
    "Płyta gipsowo-kartonowa (g-k) jest standardowym wykończeniem ścian i sufitów w polskim budownictwie. Standardowe arkusze mają rozmiar 1200×2600 mm (3,12 m²), z grubością 12,5 mm na ściany i 12,5 mm lub 15 mm na sufity (15 mm zapobiega ugięciu przy rozstawie 60 cm). Dla podwyższonej odporności ogniowej stosuj Rigips RF (różowa) lub Knauf Fireboard, zapewniające 30 lub 60 minut ochrony. Dla pomieszczeń wilgotnych (łazienki, kuchnie) stosuj płyty wodoodporne Rigips RBI (zielona) lub Knauf H2. Płyty mocuje się do słupków lub belek wkrętami 25 mm (Rapid) co 15 cm na krawędziach i co 25 cm w polu. Każda płyta 1200×2600 mm pokrywa 3,12 m². Ceny od 18 do 55 zł za płytę w zależności od typu i grubości, dostępne w Castoramie, Leroy Merlin, OBI i PSB Mrówka. Rigips (Saint-Gobain) i Knauf to dwaj główni producenci w Polsce. Po zamontowaniu złącza taśmuje się i szpachluje masą szpachlową (Cekol, Rigips, Knauf) dla uzyskania gładkiej, bezszwowej powierzchni pod malowanie.",
  nextSteps: [
    { label: "Kalkulator Wkrętów do Płyt G-K", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Kalkulator Masy Szpachlowej", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Kalkulator Izolacji Ścian", href: "/calculators/insulation-drywall/cavity-insulation-calculator/" },
  ],
  installationTips: [
    "Mocuj płyty dłuższą krawędzią poziomo (krajobrazowo) na ścianach i prostopadle do belek na sufitach.",
    "Przesuwaj złącza między rzędami oraz między płytami ściennymi i sufitowymi.",
    "Zostaw 10 mm szczelinę przy podłodze — przykryje ją listwa przypodłogowa.",
    "Na sufitach przy rozstawie belek 60 cm stosuj płyty 15 mm, aby zapobiec ugięciu.",
    "Stosuj podnośnik do płyt g-k na sufity — jeden człowiek nie utrzyma płyty i nie przykręci jednocześnie.",
  ],
  commonMistakes: [
    "Stosowanie 12,5 mm na sufitach przy rozstawie 60 cm — ugnie się z czasem; stosuj 15 mm.",
    "Brak przesunięcia złączy, co tworzy widoczną linię pęknięcia przez ścianę.",
    "Zbyt głębokie wkręcanie wkrętów, co przebija papier ochronny i traci siłę trzymania.",
    "Pominięcie taśmy na złączach — sama masa szpachlowa pęknie bez taśmy wzmacniającej.",
    "Montaż płyt na mokre drewno — skurcz drewna spowoduje pęknięcia i wypchnięcie wkrętów.",
  ],
  faqs: [
    { question: "12,5 mm czy 15 mm?", answer: "12,5 mm na ściany i sufity przy rozstawie 40 cm. 15 mm na sufity przy rozstawie 60 cm. Przepisy p.poż. mogą wymagać dodatkowych warstw lub płyt ognioodpornych niezależnie od rozstawu." },
    { question: "Ile płyt na pokój?", answer: "Typowy pokój 3×4 m o wys. 2,6 m ma ok. 33 m² ścian (minus 4 m² na drzwi/okno = 29 m²). Przy 3,12 m²/płytę potrzebujesz ok. 10 płyt na ściany plus 4 na sufit (12 m²) = 14 płyt." },
    { question: "Czy potrzebuję ognioodpornych płyt g-k?", answer: "Przepisy p.poż. wymagają płyt ognioodpornych w ścianach międzylokalowych (30 lub 60 min), wokół klatek schodowych i w określonych innych lokalizacjach. Rigips RF (różowa) lub Knauf Fireboard zapewniają odporność ogniową." },
    { question: "Jakie płyty do łazienki?", answer: "Stosuj wodoodporne płyty g-k (Rigips RBI zielona, Knauf H2) w łazienkach i kuchniach. W strefach bezpośrednio za wannami i prysznicami użyj płyty cementowej (tile backer) dla maksymalnej ochrony przed wilgocią." },
    { question: "Ile kosztują płyty g-k w Polsce?", answer: "Standardowe 12,5 mm: 18–30 zł/płytę (1200×2600 mm). 15 mm: 22–38 zł. Ognioodporne: 30–50 zł. Wodoodporne: 28–45 zł. Zakup hurtowy (pełne palety) z hurtowni daje najlepszą cenę." },
    { question: "Szpachla czy tynk na płyty g-k?", answer: "Płyty g-k można albo taśmować i szpachlować (suchy montaż — szybszy), albo pokryć 2–3 mm gładzi tynkarskiej (Cekol GS-200, Knauf Multi-Finish). Gładź daje gładszą, twardszą powierzchnię, ale dodaje koszt i czas schnięcia." },
  ],
};

export const drywallScrewCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź liczbę płyt gipsowo-kartonowych.",
    "Wybierz długość wkrętu (25 mm lub 35 mm na pojedynczą warstwę, 45 mm na podwójną).",
    "Podaj rozstaw słupków (40 cm lub 60 cm).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę wkrętów i opakowań.",
  ],
  materialInfo:
    "Wkręty do płyt g-k (wkręty Rapid) to wkręty samogwintujące z drobnym gwintem, zaprojektowane specjalnie do mocowania płyt gipsowo-kartonowych do drewnianych lub metalowych profili. Mają główkę talerzową, która zagłębia się równo z powierzchnią płyty bez rozrywania papieru ochronnego. Standardowe długości to 25 mm i 35 mm dla pojedynczej warstwy 12,5 mm na drewnianych słupkach, i 45 mm dla płyt 15 mm lub montażu dwuwarstwowego. Standardowy schemat mocowania: co 15 cm na krawędziach płyty i co 25 cm w polu (słupki pośrednie). Standardowa płyta 1200×2600 mm wymaga ok. 28–32 wkrętów. Wkręty sprzedawane są w opakowaniach po 200, 500 lub 1000 sztuk. Ceny od 10 do 40 zł za opakowanie w zależności od ilości i rozmiaru. Popularne marki w Polsce to Rigips, Knauf, Heco, Koelner i Wkręt-Met. Używaj wkrętaka z regulowaną głębokością wkręcania, aby wkręty zagłębiały się prawidłowo — główka powinna lekko wcisnąć papier bez przebicia.",
  nextSteps: [
    { label: "Kalkulator Płyt Gipsowo-Kartonowych", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Kalkulator Masy Szpachlowej", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Używaj wkrętaka do g-k z regulowaną głębokością wkręcania dla konsystentnej głębokości.",
    "Wkręcaj tak, aby główka lekko wcisnęła papier ochronny bez przebicia.",
    "Mocuj co 15 cm na krawędziach i co 25 cm w polu.",
    "Zacznij wkręty co najmniej 10 mm od krawędzi płyty, aby uniknąć wykruszenia.",
    "Na profile metalowe stosuj wkręty z ostrym zakończeniem (TN), na drewno — z wiertłem (TB).",
  ],
  commonMistakes: [
    "Zbyt głębokie wkręcenie, przebijające papier ochronny — wkręt traci siłę trzymania i wymaga drugiego obok.",
    "Zbyt płytkie wkręcenie — wystający wkręt będzie widoczny przez szpachlę lub gładź.",
    "Za mało wkrętów — płyta może się ugiąć, pękać na złączach lub odstawać od słupków.",
    "Stosowanie wkrętów do metalu na drewnianych słupkach (lub odwrotnie) — różne gwinty.",
    "Wkręcanie pod kątem zamiast prostopadle do płyty, co powoduje nierówne zagłębienie.",
  ],
  faqs: [
    { question: "Ile wkrętów na jedną płytę g-k?", answer: "Standardowa płyta 1200×2600 mm mocowana co 15 cm na krawędziach i co 25 cm w polu wymaga ok. 28–32 wkrętów, w zależności od liczby słupków pośrednich." },
    { question: "Jaką długość wkrętów na płyty g-k?", answer: "25 mm lub 35 mm na pojedynczą warstwę 12,5 mm. 45 mm na 15 mm lub podwójną warstwę. Wkręt musi wchodzić w drewniany słupek na min. 22 mm." },
    { question: "Czy mogę użyć gwoździ zamiast wkrętów?", answer: "Gwoździe do g-k istnieją, ale są mniej popularne niż wkręty. Wkręty dają lepszą siłę trzymania, mniej się cofają i łatwiej kontrolować głębokość. Na sufit gwoździ nigdy nie stosuje się." },
    { question: "Ile opakowań wkrętów na pokój?", answer: "Typowy pokój wymaga 14 płyt (ściany + sufit), zużywając ok. 420 wkrętów. Jedno opakowanie 500 szt. wystarczy na jeden pokój. Na cały dom budżetuj 3000–5000 wkrętów (6–10 opakowań po 500)." },
    { question: "Co to jest 'wypchnięcie wkrętu'?", answer: "Wypchnięcie wkrętu to sytuacja, gdy główka wkrętu wypycha się przez szpachlę w miarę schnięcia i kurczenia się drewna. Zapobiega mu stosowanie drewna suszonego komorowo, prawidłowa głębokość wkręcania i stosowanie wkrętów (nie gwoździ)." },
    { question: "Gdzie kupić wkręty do g-k w Polsce?", answer: "Wkręty dostępne są w Castoramie, Leroy Merlin, OBI, Bricomarché, PSB Mrówka i hurtowniach budowlanych. Dla najlepszej wartości kupuj opakowania 1000 szt. — 15–40 zł za opakowanie." },
  ],
};

export const jointCompoundCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź całkowitą powierzchnię płyt g-k w metrach kwadratowych.",
    "Wybierz metodę: taśmowanie i szpachlowanie lub gładź na całość.",
    "Podaj liczbę warstw.",
    "Kliknij Oblicz materiały, aby otrzymać ilość w kilogramach lub wiadrach.",
  ],
  materialInfo:
    "Masa szpachlowa służy do wypełniania i wygładzania złączy między płytami gipsowo-kartonowymi, tworząc gładką, bezszwową powierzchnię gotową do malowania. Proces obejmuje trzy główne etapy: osadzanie (wciśnięcie taśmy w warstwę masy), wypełnianie (druga warstwa pokrywająca taśmę i wyrównująca złącze) i wykończenie (cienka warstwa wygładzająca krawędzie). Gotowa masa szpachlowa (np. Cekol GS-200, Rigips Vario, Knauf Uniflot, Knauf Fugenfuller) sprzedawana jest w wiadrach 5 kg, 12 kg i 25 kg. Pokrycie zależy od zastosowania: ok. 0,4–0,6 kg/m² płyty g-k na taśmowanie i szpachlowanie. Wiadro 25 kg pokrywa ok. 40–60 m². Ceny od 25 do 80 zł za wiadro 25 kg w polskich marketach budowlanych. Na gładź całopowierzchniową (cienka warstwa tynku na całą płytę) stosuj Cekol GS-200, Knauf Multi-Finish lub Rigips Rimano przy zużyciu ok. 1,5–2,0 kg/m², co wymaga znacznie więcej materiału. Taśma papierowa kosztuje ok. 10–15 zł za rolkę 75 m. Siatka zbrojeniowa samoprzylepna jest nieco droższa, ale łatwiejsza dla amatorów.",
  nextSteps: [
    { label: "Kalkulator Płyt Gipsowo-Kartonowych", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Kalkulator Wkrętów do Płyt G-K", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Kalkulator Gruntu", href: "/calculators/finishing/primer-calculator/" },
  ],
  installationTips: [
    "Nałóż cienką warstwę osadzającą, wciśnij taśmę i wygładź nadmiar masy.",
    "Poczekaj na pełne wyschnięcie każdej warstwy (zwykle 4–24 godziny) przed nałożeniem kolejnej.",
    "Każdą kolejną warstwę rozcieraj szerzej niż poprzednią dla niewidocznego wykończenia.",
    "Szlifuj lekko między warstwami papierem ściernym 120 dla gładkiego efektu.",
    "Na duże powierzchnie rozważ gładź maszynową — szybsza i bardziej równomierna.",
  ],
  commonMistakes: [
    "Nakładanie zbyt grubej warstwy — lepsze są wielokrotne cienkie warstwy, gruba pęka.",
    "Brak wystarczającego czasu schnięcia między warstwami, co powoduje bąblowanie i pękanie.",
    "Pominięcie szlifowania, co zostawia widoczne nierówności pod farbą.",
    "Stosowanie masy szpachlowej jako gładzi — to różne produkty o różnym przeznaczeniu.",
    "Praca w zbyt zimnym pomieszczeniu (poniżej 10°C), co spowalnia schnięcie i pogarsza przyczepność.",
  ],
  faqs: [
    { question: "Ile masy szpachlowej na metr kwadratowy?", answer: "Na taśmowanie i szpachlowanie budżetuj 0,4–0,6 kg/m² płyty g-k. Wiadro 25 kg pokrywa ok. 40–60 m². Na typowy pokój (33 m² ścian i sufitu) jedno wiadro 25 kg zwykle wystarcza." },
    { question: "Taśmowanie i szpachlowanie czy gładź?", answer: "Taśmowanie i szpachlowanie (suchy montaż) jest szybsze i odpowiednie dla większości zastosowań domowych. Gładź tynkarska daje twardszą, gładszą powierzchnię preferowaną przez niektórych malarzy. Taśmowanie jest standardem w budownictwie szkieletowym." },
    { question: "Jaką taśmę stosować?", answer: "Taśma papierowa (Rigips, Knauf) daje najsilniejsze złącze i jest preferowana przez profesjonalistów. Siatka zbrojeniowa samoprzylepna jest łatwiejsza dla amatorów, ale daje nieco słabsze złącze i wymaga więcej masy do wyrównania." },
    { question: "Ile warstw masy szpachlowej?", answer: "Trzy warstwy to standard: warstwa osadzająca (do wciśnięcia taśmy), warstwa wypełniająca (pokrycie taśmy) i warstwa wykończeniowa (wygładzenie krawędzi). Niektóre produkty łączą funkcje pierwszych dwóch warstw." },
    { question: "Jak długo schnie masa szpachlowa?", answer: "Gotowa masa schnie 4–24 godzin na warstwę, w zależności od grubości, temperatury i wilgotności. Masy szybkowiążące (proszkowe, np. Knauf Uniflot) wiążą chemicznie w 20–90 minut i można je szybciej pokrywać kolejną warstwą." },
    { question: "Ile kosztuje masa szpachlowa w Polsce?", answer: "Wiadro 25 kg gotowej masy kosztuje 25–80 zł w zależności od marki (Cekol, Rigips, Knauf). Masa szybkowiążąca kosztuje 15–40 zł za worek 5 kg. Taśma papierowa to 10–15 zł za rolkę 75 m. Na cały dom budżetuj 200–700 zł na materiały szpachlowe." },
  ],
};

// ─── HARDWARE ───────────────────────────────────────────────────────────────

export const framingNailCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź liczbę słupków lub elementów szkieletowych.",
    "Wybierz typ i rozmiar gwoździ (75 mm, 90 mm).",
    "Podaj metodę montażu (ręczna, gwoździarka).",
    "Kliknij Oblicz materiały, aby otrzymać łączną liczbę gwoździ i masę w kilogramach.",
  ],
  materialInfo:
    "Gwoździe konstrukcyjne służą do montażu szkieletu drewnianego — mocowania słupków do podwalin, belek do podciągów i poszycia do szkieletu. W polskim budownictwie najczęstsze gwoździe konstrukcyjne to gładkie lub pierścieniowe gwoździe 75 mm i 90 mm, jasne lub ocynkowane. Typowy dom szkieletowy zużywa 15–25 kg gwoździ. Gwoździarki pneumatyczne i akumulatorowe używają gwoździi w taśmach lub magazynkach — typowe rozmiary to 75 mm × 3,1 mm na połączenia słupek-podwalina i 90 mm × 3,1 mm na połączenia podwalina-podwalina i belka. Gwoździe luzem kosztują 10–25 zł/kg w hurtowniach budowlanych. Gwoździe w taśmach (do gwoździarek) kosztują 80–200 zł za opakowanie 2000–3000 sztuk. Gwoździe pierścieniowe zapewniają lepszą odporność na wyrywanie i są specyfikowane na poszycie i połączenia krytyczne. Gwoździe ocynkowane stosuj do drewna impregnowanego i na zewnątrz, aby zapobiec korozji. Połączenia zgodne z PN-EN 1995-1-1 wymagają przestrzegania rozstawów, średnic i odległości od krawędzi.",
  nextSteps: [
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Kalkulator Wieszaków Belkowych", href: "/calculators/hardware/joist-hanger-calculator/" },
    { label: "Kalkulator Wkrętów do Płyt G-K", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
  ],
  installationTips: [
    "Używaj gwoździarki pneumatycznej lub akumulatorowej dla szybkości i konsystencji na dużych projektach szkieletowych.",
    "Przestrzegaj schematu gwoździowania określonego przez konstruktora dla każdego typu połączenia.",
    "Nawierć otwory pilotażowe przy gwoździowaniu blisko końców drewna, aby zapobiec pękaniu.",
    "Stosuj gwoździe ocynkowane do drewna impregnowanego i na zewnątrz.",
    "Sprawdzaj regularnie ustawienia gwoździarki — zbyt głębokie wbicie osłabia połączenie.",
  ],
  commonMistakes: [
    "Stosowanie gwoździ gładkich tam, gdzie specyfikowane są pierścieniowe — gładkie mają znacznie mniejszą odporność na wyrywanie.",
    "Zbyt gęste lub za rzadkie gwoździowanie poszycia — przestrzegaj rozstawów dla nośności konstrukcyjnej.",
    "Stosowanie gwoździi jasnych (nieocynkowanych) na drewno impregnowane, gdzie środki impregnujące przyspieszają korozję.",
    "Gwoździowanie zbyt blisko krawędzi drewna, co powoduje pękanie.",
    "Nieuwzględnienie różnic między gwoździami do gwoździarek różnych marek (Paslode, DeWalt, Makita).",
  ],
  faqs: [
    { question: "Jakie gwoździe na szkielet drewniany?", answer: "75 mm na połączenia słupek-podwalina, 90 mm na podwalina-podwalina i połączenia belkowe. Na poszycie: 50 mm lub 63 mm gwoździe pierścieniowe. Zawsze przestrzegaj specyfikacji konstruktora." },
    { question: "Ile gwoździ na słupek?", answer: "Każdy słupek wymaga 4 gwoździ (2 na każdym końcu) przy gwoździowaniu czołowym przez podwalinę. Gwoździowanie ukośne wymaga 3 gwoździ na połączenie (2 z jednej strony, 1 z drugiej)." },
    { question: "Pierścieniowe czy gładkie?", answer: "Pierścieniowe na poszycie, podłogę i połączenia wymagające dużej odporności na wyrywanie. Gładkie na ogólne gwoździowanie szkieletu, gdzie obciążenie jest głównie ścinające." },
    { question: "Ile kosztują gwoździe konstrukcyjne w Polsce?", answer: "Luzem: 10–25 zł/kg. W taśmach do gwoździarek: 80–200 zł za opakowanie (2000–3000 szt.). Na typowy dom budżetuj 400–1200 zł na wszystkie gwoździe konstrukcyjne." },
    { question: "Czy potrzebuję gwoździ ocynkowanych?", answer: "Tak, do połączeń z drewnem impregnowanym, na zewnątrz i w miejscach narażonych na wilgoć. Gwoździe jasne (nieocynkowane) nadają się tylko do wewnętrznych połączeń z drewnem nieimpregnowanym." },
    { question: "Gdzie kupić gwoździe konstrukcyjne?", answer: "Gwoździe dostępne są w Castoramie, Leroy Merlin, OBI, Bricomarché i hurtowniach budowlanych. Gwoździe w taśmach do konkretnych marek gwoździarek (Paslode, DeWalt, Makita) u dystrybutorów narzędzi." },
  ],
};

export const joistHangerCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź liczbę belek stropowych.",
    "Wybierz typ wieszaka odpowiedni do przekroju belki.",
    "Podaj sposób podparcia (ściana, podciąg).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę wieszaków.",
  ],
  materialInfo:
    "Wieszaki belkowe to ocynkowane łączniki stalowe podpierające koniec belki stropowej lub wzmocnienia tam, gdzie styka się ona z podciągiem, ścianą lub nadprożem. Zapewniają silne, niezawodne połączenie bez potrzeby wmurowania belki w ścianę. W Polsce wieszaki specyfikowane są wg PN-EN 14545 i produkowane przez Simpson Strong-Tie, Bova, Domax i BMF. Standardowe typy to wieszaki czołowe (przybijane do czoła elementu nośnego), wieszaki murowane (wmurowane w mur) i wieszaki ukryte. Wieszaki dobiera się do głębokości i szerokości belki: typowe rozmiary to 45×200 mm, 45×225 mm i 45×250 mm. Każdy wieszak kosztuje 5–20 zł w Castoramie, Leroy Merlin lub hurtowniach budowlanych. Wieszaki mocuje się gwoździami lub wkrętami specyfikowanymi przez producenta — nigdy zwykłymi gwoździami, które nie mają wymaganej wytrzymałości na ścinanie. Każda belka zwykle wymaga jednego wieszaka na każdym podpartym końcu, więc łączna liczba to dwa razy liczba belek.",
  nextSteps: [
    { label: "Kalkulator Belek Stropowych", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Kalkulator Łączników Wiatrowych", href: "/calculators/hardware/hurricane-tie-calculator/" },
    { label: "Kalkulator Gwoździ Konstrukcyjnych", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: [
    "Dobierz prawidłowy rozmiar wieszaka do wymiarów belki — belka musi siedzieć ciasno w wieszaku.",
    "Mocuj gwoździami lub wkrętami specyfikowanymi przez producenta (zwykle 30×3,75 mm lub 40×4 mm ocynkowane).",
    "Wypełnij każdy otwór gwoździowy w wieszaku — puste otwory zmniejszają nośność połączenia.",
    "Sprawdź, czy wieszak jest wypoziomowany i belka w pełni oparta na siodełku wieszaka.",
    "Nie modyfikuj wieszaków (nie wyginaj, nie docinaj) — unieważnia to deklarowaną nośność.",
  ],
  commonMistakes: [
    "Niewłaściwy rozmiar wieszaka — belka siedzi luźno lub nie jest w pełni podparta.",
    "Niewypełnienie wszystkich otworów gwoździowych — każdy pusty otwór zmniejsza nośność.",
    "Stosowanie zwykłych gwoździ zamiast specyfikowanych przez producenta wieszaka.",
    "Montaż wieszaka do zbyt cienkiego elementu nośnego, który nie wytrzyma obciążenia.",
    "Użycie wkrętów uniwersalnych zamiast specjalnych wkrętów do wieszaków (np. Simpson SDS).",
  ],
  faqs: [
    { question: "Ile wieszaków na belkę?", answer: "Każda belka wymaga jednego wieszaka na każdym podpartym końcu. Jeśli oba końce oparte na ścianach lub podciągach, potrzebujesz 2 wieszaków na belkę. Jeśli jeden koniec jest wmurowany, potrzebujesz 1." },
    { question: "Jakie gwoździe do wieszaków?", answer: "Stosuj wyłącznie gwoździe specyfikowane przez producenta. Simpson Strong-Tie specyfikuje gwoździe 30×3,75 mm lub 40×4 mm ocynkowane. Zwykłe gwoździe unieważniają deklarowaną nośność." },
    { question: "Czy każda belka wymaga wieszaka?", answer: "Wieszaki są wymagane wszędzie tam, gdzie belka styka się z elementem nośnym i nie może na nim spocząć lub być wmurowana. W budownictwie szkieletowym wieszaki stosuje się przy niemal każdym połączeniu belkowym." },
    { question: "Ile kosztują wieszaki belkowe?", answer: "Standardowe ocynkowane wieszaki kosztują 5–20 zł/szt. Wieszaki ukryte i wzmocnione: 25–60 zł. Dla typowego domu budżetuj 400–1200 zł na wieszaki." },
    { question: "Czy mogę użyć wkrętów zamiast gwoździ w wieszakach?", answer: "Tylko jeśli producent specyfikuje wkręty dla danego wieszaka. Większość wieszaków jest zaprojektowana na gwoździe. Jeśli wkręty są dopuszczone, stosuj wkręty konstrukcyjne (np. Simpson SDS) o specyfikowanej średnicy i długości." },
    { question: "Gdzie kupić wieszaki belkowe w Polsce?", answer: "Wieszaki dostępne w Castoramie, Leroy Merlin, OBI, Bricomarché i hurtowniach budowlanych. Simpson Strong-Tie, Bova i Domax to najszerzej dostępne marki w Polsce." },
  ],
};

export const hurricaneTieCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Wprowadź liczbę wiązarów lub krokwi.",
    "Wybierz typ łącznika (kątownik, taśma).",
    "Podaj strefę obciążenia wiatrem.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę łączników.",
  ],
  materialInfo:
    "Łączniki wiatrowe (kątowniki wiązarowe) to ocynkowane łączniki stalowe mocujące wiązary dachowe lub krokwie do murłaty lub oczepu poniżej. Przeciwdziałają siłom unoszącym wiatru, które mogą zerwać dach z budynku. W Polsce łączniki wiatrowe są wymagane przez PN-EN 1995-1-1 i warunki techniczne dla zapewnienia pozytywnego połączenia odpornego na obliczeniowe siły unoszące. Każdy wiązar lub krokiew musi mieć łącznik w każdym punkcie oparcia na murłacie. Standardowe kątowniki (np. Simpson Strong-Tie A35, Bova, Domax) kosztują 2–8 zł za sztukę i mocowane są gwoździami 30×3,75 mm. Każdy kątownik wymaga 4–6 gwoździ dla pełnej deklarowanej nośności. W strefach o dużym obciążeniu wiatrem (wybrzeże Bałtyku, tereny górskie) konstruktor może specyfikować wzmocnione łączniki lub taśmy stalowe. Taśma stalowa ocynkowana (30×5 mm) jest alternatywną metodą — prowadzi się ją od krokwi, przez murłatę, w dół po wewnętrznej stronie ściany, mocując gwoździami na każdym kontakcie z drewnem.",
  nextSteps: [
    { label: "Kalkulator Wiązarów Dachowych", href: "/calculators/roofing/truss-calculator/" },
    { label: "Kalkulator Krokwi", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Kalkulator Wieszaków Belkowych", href: "/calculators/hardware/joist-hanger-calculator/" },
  ],
  installationTips: [
    "Zamocuj łącznik w każdym punkcie oparcia wiązara lub krokwi na murłacie.",
    "Stosuj gwoździe specyfikowane przez producenta i wypełnij każdy otwór dla pełnej nośności.",
    "Montuj łączniki przed obciążeniem dachu (przed ułożeniem pokrycia), aby wiązar dobrze osiadł na murłacie.",
    "W strefach wietrznych łącz kątowniki z taśmą stalową ocynkowaną dla wzmocnionej odporności.",
    "Sprawdź, czy łączniki są zainstalowane po prawidłowej stronie — kątownik musi obejmować krokiew i murłatę.",
  ],
  commonMistakes: [
    "Pominięcie łączników na niektórych wiązarach — każdy wiązar i krokiew musi być połączony z murłatą.",
    "Niewypełnienie wszystkich otworów gwoździowych, co zmniejsza siłę odrywania poniżej wymagań obliczeniowych.",
    "Stosowanie niewystarczających łączników w strefach wietrznych, gdzie wymagane są wzmocnione łączniki lub taśmy.",
    "Montaż łączników po ułożeniu pokrycia, gdy wiązary są już obciążone i nie osiadają prawidłowo.",
    "Stosowanie zwykłych wkrętów zamiast specyfikowanych gwoździ.",
  ],
  faqs: [
    { question: "Czy łączniki wiatrowe są wymagane przepisami?", answer: "Tak. PN-EN 1995 i warunki techniczne wymagają, aby konstrukcja dachu była odpowiednio połączona z podparciem dla odporności na siły unoszące wiatru. Łączniki wiatrowe to najczęstsza i najbardziej ekonomiczna metoda." },
    { question: "Ile łączników na wiązar?", answer: "Każdy wiązar wymaga jednego łącznika w każdym punkcie oparcia na murłacie — zwykle 2 łączniki na wiązar (po jednym z każdej strony). Jeśli wiązar opiera się też na ścianie wewnętrznej, dodaj łącznik w tym punkcie." },
    { question: "Jakie gwoździe do łączników wiatrowych?", answer: "Gwoździe 30×3,75 mm ocynkowane wg specyfikacji producenta łącznika. Zwykłe gwoździe lub wkręty unieważniają deklarowaną nośność." },
    { question: "Czy potrzebuję taśm stalowych oprócz łączników?", answer: "W standardowych lokalizacjach same łączniki zwykle wystarczają. Na wybrzeżu, wzniesieniach i w otwartym terenie konstruktor może specyfikować taśmy stalowe prowadzone od krokwi przez murłatę w dół po wewnętrznej stronie ściany." },
    { question: "Ile kosztują łączniki wiatrowe?", answer: "Standardowe kątowniki kosztują 2–8 zł za sztukę. Dla typowego domu z 30 wiązarami budżetuj 60 łączników za 120–480 zł łącznie. To zaniedbywalny koszt w porównaniu z kosztem konstrukcji dachu." },
    { question: "Gdzie kupić łączniki wiatrowe w Polsce?", answer: "Łączniki dostępne w Castoramie, Leroy Merlin, OBI i hurtowniach budowlanych. Simpson Strong-Tie, Bova i Domax to główne marki w Polsce." },
  ],
};

export const lumberCostCalculator: CalculatorSEOContent = {
  disclaimer: "Ceny są przybliżonymi średnimi polskimi. Rzeczywiste ceny zależą od regionu, dostawcy i warunków rynkowych.",
  howToUse: [
    "Wybierz przekrój drewna z listy (45×90, 45×140, 45×200 mm itp.).",
    "Wprowadź ilość (liczbę sztuk).",
    "Wprowadź długość jednej sztuki w metrach.",
    "Kliknij Oblicz materiały, aby otrzymać szacunek kosztu w zł.",
  ],
  materialInfo:
    "Drewno konstrukcyjne iglaste (głównie świerk, sosna i jodła) jest podstawowym materiałem polskiego budownictwa szkieletowego. Drewno jest klasyfikowane C16 lub C24 wg PN-EN 338, z C24 jako wyższą klasą wytrzymałości preferowaną do zastosowań konstrukcyjnych. Typowe przekroje to 45×90 mm, 45×140 mm, 45×200 mm i 45×250 mm, w standardowych długościach 3,0 m, 4,0 m, 5,0 m i 6,0 m. Ceny drewna w Polsce zmieniają się z globalnymi rynkami, krajowym popytem i warunkami łańcucha dostaw. Orientacyjne ceny w hurtowniach: 8–15 zł/m.b. za 45×90 mm C16, 15–25 zł/m.b. za 45×200 mm C24, 20–40 zł/m.b. za 45×250 mm C24. Zakup hurtowy (pełne pakiety lub transport) z Castoramy, Leroy Merlin, PSB Mrówka lub bezpośrednio z tartaku daje 10–20% oszczędności. Drewno impregnowane kosztuje 15–25% więcej niż nieimpregnowane. Drewno suszone komorowo (KD) jest preferowane nad drewno mokre, ponieważ jest stabilne wymiarowo i mniej podatne na wypaczanie i skurcz.",
  nextSteps: [
    { label: "Kalkulator Słupków Ściennych", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Kalkulator Belek Stropowych", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Kalkulator Objętości Drewna", href: "/calculators/hardware/board-feet-calculator/" },
  ],
  installationTips: [
    "Sprawdzaj drewno przy odbiorze pod kątem prostoliniowości, pęknięć i stempli klasyfikacyjnych — odrzucaj wadliwe sztuki.",
    "Składuj drewno nad ziemią na podkładach, przykryte oddychającą plandeką, aby zapobiec wchłanianiu wilgoci.",
    "Stosuj drewno suszone komorowo (KD) na szkielet wewnętrzny, aby zminimalizować skurcz i odkształcenia.",
    "Zamawiaj 5–10% więcej, aby uwzględnić odpady z cięcia i odrzuty.",
    "Negocjuj ceny przy większych zamówieniach — różnice między dostawcami mogą być znaczące.",
  ],
  commonMistakes: [
    "Zamawianie bez sprawdzenia aktualnych cen — ceny drewna mogą się znacząco zmieniać z miesiąca na miesiąc.",
    "Stosowanie C16 tam, gdzie specyfikowane jest C24 — C16 ma niższą wytrzymałość i krótszą rozpiętość.",
    "Nieuwzględnienie odpadów z cięcia — 5–10% to norma na każdym projekcie szkieletowym.",
    "Kupowanie drewna mokrego (nieklasyfikowanego) zamiast KD, co prowadzi do skurczu i problemów z konstrukcją.",
    "Brak porównania cen między dostawcami — różnice mogą wynosić 20–30%.",
  ],
  faqs: [
    { question: "Jaka jest różnica między C16 a C24?", answer: "C16 i C24 to klasy wytrzymałości wg PN-EN 338. C24 ma wyższą wytrzymałość na zginanie (24 N/mm² vs 16 N/mm²), wyższą sztywność i większą gęstość. C24 stosuje się do zastosowań konstrukcyjnych wymagających wyższych parametrów. C24 kosztuje 10–20% więcej niż C16." },
    { question: "Gdzie najtaniej kupić drewno?", answer: "Hurtownie budowlane (PSB Mrówka, Castorama, Leroy Merlin) oferują ceny handlowe, zwłaszcza przy zamówieniach hurtowych. Drewno bezpośrednio z tartaków jest najtańsze przy dużych ilościach. Dla małych ilości OBI i Bricomarché są wygodne, ale droższe." },
    { question: "Ile kosztuje drewno za metr bieżący?", answer: "Orientacyjnie: 45×90 mm C16 = 8–15 zł/m.b., 45×200 mm C24 = 15–25 zł/m.b., 45×250 mm C24 = 20–40 zł/m.b. Drewno impregnowane kosztuje 15–25% więcej. Ceny zależą od regionu i dostawcy." },
    { question: "Drewno impregnowane czy nieimpregnowane?", answer: "Impregnowane ciśnieniowo stosuj wszędzie tam, gdzie drewno styka się z betonem, murem lub gruntem, lub jest narażone na wilgoć. Szkielet wewnętrzny powyżej poziomu izolacji zwykle nie wymaga impregnacji." },
    { question: "Jaka różnica między drewnem suszonym a mokrym?", answer: "Drewno suszone komorowo (KD, wilgotność <18%) jest stabilne wymiarowo i nie kurczy się po montażu. Drewno mokre (wilgotność >20%) jest tańsze, ale kurczy się, wypacza i powoduje szczeliny w konstrukcji. Do szkieletu zawsze preferuj KD." },
    { question: "Ile drewna na cały dom?", answer: "Typowy dom jednorodzinny szkieletowy zużywa ok. 15–25 m³ drewna konstrukcyjnego. Przy aktualnych polskich cenach to 20 000–60 000 zł za samo drewno, w zależności od specyfikacji i warunków rynkowych." },
  ],
};

export const boardFeetCalculator: CalculatorSEOContent = {
  disclaimer: "Wycena na board feet dotyczy głównie drewna twardego. Drewno iglaste w Polsce sprzedaje się zwykle na metry bieżące lub sześcienne.",
  howToUse: [
    "Wprowadź grubość, szerokość i długość drewna.",
    "Wprowadź cenę za board foot lub metr sześcienny.",
    "Wybierz gatunek drewna twardego.",
    "Kliknij Oblicz materiały, aby otrzymać łączne board feet, metry sześcienne i koszt.",
  ],
  materialInfo:
    "Board foot to jednostka objętości równa 144 cali sześciennym (kawałek 1 cal gruby × 12 cali szeroki × 12 cali długi). Jest standardową jednostką cenową drewna twardego w Ameryce Północnej i stosowaną przez polskich dostawców importujących z tartaków północnoamerykańskich. Formuła: Board Feet = (grubość w calach × szerokość w calach × długość w stopach) / 12. Stosuje się wymiary nominalne (nie rzeczywiste). W Polsce drewno twarde sprzedaje się również na metry sześcienne — 1 m³ = 423,8 board feet. Popularne drewna twarde dostępne u polskich dostawców to dąb amerykański (od 80–160 zł/BF), orzech amerykański (140–240 zł/BF), dąb europejski (100–200 zł/BF), jesion (40–80 zł/BF) i klon (60–120 zł/BF). Polscy importerzy drewna twardego (np. Tarcica24, Drewmart, Drew-Handel) sprzedają zarówno na board feet, jak i metry sześcienne. Drewno twarde sprzedawane jest zwykle w losowych szerokościach i długościach, dlatego system board feet normalizuje wycenę niezależnie od wymiarów poszczególnych desek.",
  nextSteps: [
    { label: "Kalkulator Kosztów Drewna", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Kalkulator Sklejki", href: "/calculators/hardware/plywood-calculator/" },
    { label: "Kalkulator Desek Tarasowych", href: "/calculators/outdoor/deck-board-calculator/" },
  ],
  installationTips: [
    "Dolicz 25–40% odpadu przy kupowaniu surowego drewna twardego na meble i stolarkę.",
    "Poproś sprzedawcę o heblowanie (struganie) desek, aby zaoszczędzić czas w warsztacie.",
    "Specyfikuj klasę FAS (First and Seconds) dla projektów wymagających czystych, bezwadowych powierzchni.",
    "Aklimatyzuj drewno twarde w pomieszczeniu przez min. 2 tygodnie przed obróbką.",
    "Sprawdź wilgotność drewna wilgotnościomierzem — powinna być 8–12% do zastosowań meblowych.",
  ],
  commonMistakes: [
    "Stosowanie wymiarów rzeczywistych zamiast nominalnych — board feet zawsze używają nominalnych.",
    "Nieuwzględnienie odpadów ze strugania, wad i odcinków.",
    "Porównywanie cen za board foot między gatunkami bez uwzględnienia gęstości i obrabialności.",
    "Kupowanie drewna o zbyt wysokiej wilgotności — prowadzi do paczenia się gotowych wyrobów.",
    "Brak aklimatyzacji drewna przed obróbką.",
  ],
  faqs: [
    { question: "Co to jest board foot?", answer: "Board foot (BF) to jednostka objętości równa 144 calom sześciennym — kawałek 1 cal gruby, 12 cali szeroki i 1 stopę długi. Jest standardową jednostką cenową drewna twardego w Ameryce Północnej i stosowaną przez polskich importerów." },
    { question: "Jak przeliczyć board feet na metry sześcienne?", answer: "1 metr sześcienny = 423,8 board feet. Aby przeliczyć BF na m³, podziel przez 423,8. Na przykład 100 BF = 0,236 m³." },
    { question: "Dlaczego drewno twarde sprzedaje się na board feet?", answer: "Drewno twarde pochodzi w losowych szerokościach i długościach, ponieważ jest piłowane z kłód o różnych rozmiarach. System board feet normalizuje wycenę objętościowo, niezależnie od wymiarów poszczególnych desek." },
    { question: "Gdzie kupić drewno twarde w Polsce?", answer: "Polscy dostawcy drewna twardego to Tarcica24, Drewmart, Drew-Handel, Drewno-Lux i regionalne tartaki dębowe. Wielu sprzedaje online z dostawą. Lokalne tartaki też mają drewno twarde krajowe." },
    { question: "Ile kosztuje drewno twarde w Polsce?", answer: "Orientacyjne ceny za BF: jesion 40–80 zł, dąb amerykański 80–160 zł, dąb europejski 100–200 zł, orzech 140–240 zł, klon 60–120 zł. Gatunki egzotyczne (teak, iroko) to 120–300 zł/BF." },
    { question: "Co to jest klasa FAS?", answer: "FAS (First and Seconds) to najwyższa standardowa klasa drewna twardego, wymagająca co najmniej 83% czystego (bezwadowego) drewna na licu. To klasa do specyfikowania na meble, stolarkę i każdy projekt, gdzie wygląd ma znaczenie." },
  ],
};

export const plywoodCalculator: CalculatorSEOContent = {
  disclaimer: "Ceny dotyczą standardowej sklejki iglastej. Panele specjalistyczne (morskie, brzozowe, laminowane) kosztują więcej.",
  howToUse: [
    "Wprowadź powierzchnię do pokrycia w metrach kwadratowych.",
    "Wybierz grubość sklejki.",
    "Podaj przeznaczenie (podłoga, poszycie, meble).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę arkuszy i szacunek kosztów w zł.",
  ],
  materialInfo:
    "Sklejka to inżynieryjny panel drewniany wykonany z cienkich warstw (fornirów) drewna klejonych naprzemiennie z kierunkiem włókien. Ta budowa krzyżowo-laminowana nadaje sklejce doskonałą wytrzymałość, sztywność i stabilność wymiarową w porównaniu z drewnem litym o tej samej grubości. Standardowe arkusze mają 1250×2500 mm lub 1220×2440 mm, z grubościami od 4 mm do 24 mm. Typowe rodzaje w Polsce: sklejka iglasta konstrukcyjna (na poszycie, podłogi i dachy), sklejka liściasta (na meble i stolarkę), sklejka morska (wg PN-EN 636 klasa 3 — na środowiska mokre), sklejka brzozowa (na meble i CNC). Ceny w polskich hurtowniach: 35–60 zł za 6 mm iglastą, 60–100 zł za 18 mm iglastą, 80–150 zł za 18 mm brzozową, 150–300 zł za 18 mm morską. Producenci popularni w Polsce: Paged, Biaform, UPM Plywood, Metsä Wood. Przy cięciu sklejki stosuj piłę z drobnym uzębieniem (80+ zębów na pile stołowej), aby zminimalizować rozwarstwianie forniru lica. Zawsze składuj sklejkę płasko na równej powierzchni.",
  nextSteps: [
    { label: "Kalkulator Płyt OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Kalkulator Kosztów Drewna", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Kalkulator Poszycia Zewnętrznego", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "Zostaw 3 mm szczelinę dylatacyjną między arkuszami na ruch wilgotnościowy.",
    "Montuj z włóknami lica prostopadle do podparć dla maksymalnej wytrzymałości.",
    "Na zewnątrz stosuj łączniki nierdzewne lub ocynkowane.",
    "Przesuwaj złącza między rzędami dla mocniejszego montażu.",
    "Na meble obrabiaj krawędzie okleiną lub frezem profilowym — surowe krawędzie sklejki są nieestetyczne.",
  ],
  commonMistakes: [
    "Brak szczelin dylatacyjnych — ciasno ułożone arkusze wybrzuszą się po wchłonięciu wilgoci.",
    "Stosowanie sklejki do wnętrz na zewnątrz — rozwarstwiw się pod wpływem deszczu.",
    "Cięcie grubym zębem piły, co wyrywa fornir lica i daje szorstką krawędź.",
    "Składowanie sklejki na nierównej powierzchni, co powoduje trwałe wypaczenie.",
    "Mylenie klas wodoodporności — nie każda sklejka 'wodoodporna' nadaje się na stałe zanurzenie.",
  ],
  faqs: [
    { question: "Ile arkuszy sklejki na metr kwadratowy?", answer: "Arkusz 1250×2500 mm pokrywa 3,125 m². Podziel powierzchnię przez 3,125 i dodaj 10% na odpady. Dla 30 m²: (30 × 1,10) / 3,125 = 11 arkuszy." },
    { question: "Jaka różnica między sklejką a OSB?", answer: "Sklejka jest z obrotowo obranych fornirów klejonych warstwowo. OSB z dużych wiórów prasowanych z klejem. Sklejka jest mocniejsza, bardziej wodoodporna i ma gładszą powierzchnię. OSB jest tańsze i wystarczające do większości zastosowań konstrukcyjnych." },
    { question: "Co to jest sklejka morska?", answer: "Sklejka morska (PN-EN 636 klasa 3) jest wykonana z wodoodpornym klejem i fornirami bez pustek. Przeznaczona na stałą ekspozycję na wilgoć (łodzie, mokre pomieszczenia). Kosztuje 2–3 razy więcej niż standardowa." },
    { question: "Ile kosztuje sklejka w Polsce?", answer: "Standardowa 1250×2500 mm iglasta: 6 mm = 35–50 zł, 12 mm = 55–80 zł, 18 mm = 75–120 zł. Brzozowa 18 mm = 100–160 zł. Morska 18 mm = 150–300 zł. Ceny z Castoramy, Leroy Merlin lub hurtowni." },
    { question: "Czy sklejka nadaje się na dach płaski?", answer: "Tak. Sklejka klasy zewnętrznej (WBP — weather and boil proof) nadaje się na poszycie dachów płaskich. 18 mm na belkach co 40 cm. Sklejka musi być pokryta membraną dachową i nie powinna być eksponowana na warunki atmosferyczne." },
    { question: "Sklejka czy MDF na półki?", answer: "Sklejka jest mocniejsza i bardziej wodoodporna, lepsza na obciążone półki i wilgotne pomieszczenia. MDF daje gładszą powierzchnię do malowania i jest tańszy. Na malowane półki z umiarkowanym obciążeniem oba się sprawdzą. Na duże obciążenia lub kuchnie/łazienki — sklejka." },
  ],
};

// ─── FINISHING ───────────────────────────────────────────────────────────────

export const paintCoverageCalculator: CalculatorSEOContent = {
  disclaimer: "Rzeczywiste pokrycie zależy od faktury powierzchni, marki farby i metody aplikacji. Powierzchnie szorstkie lub teksturowane mogą zmniejszyć pokrycie o 20–30%.",
  howToUse: [
    "Wprowadź całkowitą powierzchnię ścian i sufitu w metrach kwadratowych.",
    "Odejmij powierzchnię okien i drzwi.",
    "Wybierz liczbę warstw (2 to standard).",
    "Kliknij Oblicz materiały, aby otrzymać litry, opakowania i pokrycie.",
  ],
  materialInfo:
    "Pokrycie farby w Polsce mierzy się w metrach kwadratowych na litr. Standardowa emulsja pokrywa 10–14 m²/l na gładkich, wcześniej malowanych powierzchniach. Farby matowe zwykle pokrywają nieco więcej niż satynowe lub półmatowe ze względu na niższą zawartość składników stałych. Farby premium marek Śnieżka, Dekoral, Dulux, Caparol i Tikkurila często zapewniają lepsze krycie jedną warstwą dzięki wyższej zawartości pigmentu. Farba sprzedawana jest w opakowaniach 1 l, 2,5 l, 5 l i 10 l. Opakowanie 2,5 l pokrywa ok. 25–35 m² na warstwę. Dla standardowego pokoju (30 m² ścian + 12 m² sufitu = 42 m²) dwie warstwy wymagają ok. 6–8 litrów — kup 2 opakowania 2,5 l lub 1 opakowanie 5 l. Ceny od 25 do 60 zł za 2,5 l farby handlowej (Śnieżka Barwy Natury, Dekoral Clean) do 150–350 zł za 2,5 l marek premium (Beckers, Tikkurila, Caparol). Nowe płyty g-k lub tynk wymagają warstwy gruntującej (rozcieńczona emulsja 70:30 farba:woda) lub dedykowanego gruntu (Ceresit, Atlas) przed warstwami nawierzchniowymi.",
  nextSteps: [
    { label: "Kalkulator Kosztów Malowania", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Kalkulator Gruntu", href: "/calculators/finishing/primer-calculator/" },
    { label: "Kalkulator Płyt Gipsowo-Kartonowych", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Używaj wałka z krótkim włosem (5–10 mm) na gładkie ściany, z średnim (10–15 mm) na lekką fakturę.",
    "Wytnij krawędzie i narożniki pędzlem kątowym przed wałkowaniem głównej powierzchni.",
    "Utrzymuj mokrą krawędź — pracuj sekcjami i nie pozwól krawędzi schnąć przed kontynuacją.",
    "Nakładaj w kształcie litery W wałkiem, potem wyrównuj równomiernie bez podnoszenia.",
    "W polskim klimacie maluj w temperaturze 10–25°C przy wilgotności poniżej 70% dla najlepszych efektów.",
  ],
  commonMistakes: [
    "Brak warstwy gruntującej na nowym tynku lub g-k — farba będzie się łuszczyć lub nierówno wchłaniać.",
    "Kupienie za mało farby — przerwanie w połowie ściany tworzy widoczne ślady zakładek.",
    "Nakładanie drugiej warstwy zbyt wcześnie — odczekaj 2–4 godziny między warstwami emulsji.",
    "Stosowanie tanich wałków, które gubią włókna w warstwie farby.",
    "Malowanie w zbyt niskiej temperaturze (poniżej 10°C) lub zbyt wysokiej wilgotności.",
  ],
  faqs: [
    { question: "Ile farby na pokój?", answer: "Typowy pokój 3×4 m z sufitem 2,5 m ma ok. 42 m² powierzchni do malowania. Przy 12 m²/l i 2 warstwach potrzebujesz ok. 7 litrów. Kup opakowanie 5 l + 2,5 l lub 2 opakowania 5 l na zapas do poprawek." },
    { question: "Ile metrów kwadratowych na litr?", answer: "Standardowa emulsja pokrywa 10–14 m²/l na gładkich, wcześniej malowanych powierzchniach. Na szorstkich lub chłonnych to 8–10 m². Farby premium mogą pokryć do 16 m²/l." },
    { question: "Kupić 2,5 l czy 5 l?", answer: "Na pojedynczy pokój 2,5 l jest praktyczne. Na wiele pokoi w tym samym kolorze 5 l lub 10 l jest bardziej ekonomiczne (15–25% taniej na litr) i zapewnia konsystencję koloru." },
    { question: "Czy potrzebuję 2 warstwy?", answer: "Tak. Dwie warstwy są zalecane dla niemal wszystkich prac malarskich. Pierwsza warstwa uszczelnia i daje jednolite podłoże. Druga zapewnia docelową głębię koloru, połysk i trwałość." },
    { question: "Ile farby na cały dom?", answer: "Typowy dom jednorodzinny ma 250–350 m² malowanych ścian i sufitów. Przy 2 warstwach z 12 m²/l potrzebujesz 40–60 litrów — ok. 4–6 opakowań 10 l lub 8–12 opakowań 5 l." },
    { question: "Jakie marki farb są najlepsze w Polsce?", answer: "Handlowe: Śnieżka (Barwy Natury, Satynowa) i Dekoral (Clean, Fashion) oferują najlepsze pokrycie i trwałość za cenę. Premium: Beckers, Tikkurila i Caparol zapewniają wyjątkową głębię koloru. Średnia półka: Dulux, Magnat i Śnieżka Premium." },
  ],
};

export const paintCostCalculator: CalculatorSEOContent = {
  disclaimer: "Ceny są przybliżonymi średnimi polskimi na 2025–2026. Rzeczywiste ceny zależą od marki, detalisty i regionu.",
  howToUse: [
    "Wprowadź całkowitą powierzchnię do malowania w metrach kwadratowych.",
    "Wybierz liczbę warstw.",
    "Wybierz poziom jakości farby: handlowa, średnia lub premium.",
    "Zaznacz, czy potrzebujesz gruntu.",
    "Kliknij Oblicz materiały, aby otrzymać rozbicie kosztów w zł.",
  ],
  materialInfo:
    "Koszt projektu malarskiego zależy od jakości farby, powierzchni, liczby warstw i ewentualnej robocizny. Farba handlowa (25–50 zł za 2,5 l), np. Śnieżka Barwy Natury, Dekoral Clean, to standard dla profesjonalnych malarzy z doskonałym pokryciem i trwałością. Farba średniej klasy (50–100 zł za 2,5 l), np. Dulux, Magnat, Śnieżka Premium, jest przeznaczona dla wymagających amatorów. Farba premium (100–350 zł za 2,5 l), np. Beckers, Tikkurila Optiva, Caparol Indeko Plus, oferuje wyjątkową głębię koloru i pokrycie, ale po 3–5-krotnie wyższej cenie. Oprócz farby budżetuj materiały pomocnicze: zestaw wałkowy (15–50 zł), pędzle (10–35 zł/szt.), taśma malarska (8–15 zł/rolka), folia ochronna (15–40 zł) i grunt (25–50 zł za 2,5 l). Profesjonalni malarze w Polsce biorą 200–500 zł za pokój lub 25–50 zł/m², z farbą i przygotowaniem.",
  nextSteps: [
    { label: "Kalkulator Wydajności Farby", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Kalkulator Gruntu", href: "/calculators/finishing/primer-calculator/" },
    { label: "Kalkulator Płyt Gipsowo-Kartonowych", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Kup całą farbę za jednym razem dla konsystencji partii — kolory mogą się różnić między partiami.",
    "Inwestuj w jakościowe wałki i pędzle — widocznie wpływają na wykończenie.",
    "Stosuj taśmę malarską na listwach przypodłogowych, ościeżnicach i liniach sufitowych dla czystych krawędzi.",
    "Miej pod ręką wilgotną szmatkę do natychmiastowego wycierania rozbryzgów.",
    "Kupuj farbę w większych opakowaniach (10 l) dla lepszej ceny za litr.",
  ],
  commonMistakes: [
    "Wybór najtańszej farby do pomieszczeń o dużym ruchu — będzie wymagać odmalowania za 2–3 lata zamiast 7–10.",
    "Nieuwzględnienie gruntu w budżecie — pominięcie gruntu na nowym tynku podwaja zużycie farby.",
    "Kupienie za mało farby — dorobienie niestandardowego koloru później jest prawie niemożliwe.",
    "Ignorowanie wyboru połysku — matowa maskuje niedoskonałości, ale łatwo się brudzi; satyna to najlepszy kompromis.",
    "Brak porównania cen między sklepami — różnice mogą być znaczące.",
  ],
  faqs: [
    { question: "Ile kosztuje pomalowanie pokoju?", answer: "Standardowy pokój 3×4 m kosztuje 100–250 zł w materiałach (7–8 litrów farby plus akcesoria) przy samodzielnym malowaniu. Profesjonalny malarz bierze 200–500 zł za pokój z farbą i przygotowaniem." },
    { question: "Czy premium farba jest tego warta?", answer: "Do pokoi, których używasz codziennie — tak. Farby premium (100–350 zł za 2,5 l) oferują lepsze pokrycie (czasem jednowarstwowe), doskonałą zmywalność i wytrzymują 10–15 lat. Na dłuższą metę premium kosztuje mniej rocznie niż przemalowywanie co 3–5 lat tanią farbą." },
    { question: "Ile kosztują materiały pomocnicze?", answer: "Podstawowe materiały na jeden pokój: 40–120 zł. Wałek z kuwetą (15–50 zł), 2 pędzle (20–70 zł), taśma malarska (8–15 zł/rolka, 2–3 rolki), folia ochronna (15–40 zł)." },
    { question: "Gdzie najtaniej kupić farbę?", answer: "Farby handlowe z hurtowni budowlanych (PSB Mrówka, Castorama) dają najlepszą wartość za jakość. Leroy Merlin i OBI mają regularne promocje. Online (Allegro, sklepy producenta) czasem bije ceny stacjonarne." },
    { question: "Ile farby na 100 m²?", answer: "Przy 12 m²/l i 2 warstwach, 100 m² wymaga ok. 17 litrów. Kup 2 opakowania 10 l za 200–400 zł (handlowa) lub 400–700 zł (średnia klasa)." },
    { question: "Czy potrzebuję gruntu przed malowaniem?", answer: "Grunt jest zalecany na nowe płyty g-k (warstwa gruntująca), surowe drewno, naprawione/szpachlowane miejsca, dramatyczne zmiany koloru i blokowanie plam. Na wcześniej malowanych powierzchniach w dobrym stanie o podobnym kolorze grunt zwykle nie jest konieczny." },
  ],
};

export const primerCalculator: CalculatorSEOContent = {
  disclaimer: "Porowate lub teksturowane powierzchnie mogą wymagać dodatkowego gruntu. Zawsze przestrzegaj wydajności producenta.",
  howToUse: [
    "Wprowadź całkowitą powierzchnię w metrach kwadratowych.",
    "Wybierz typ powierzchni dla prawidłowej wydajności.",
    "Podaj liczbę warstw gruntu.",
    "Kliknij Oblicz materiały, aby otrzymać litry i liczbę opakowań.",
  ],
  materialInfo:
    "Grunt (podkład) to warstwa preparacyjna nakładana przed farbą nawierzchniową dla zapewnienia prawidłowej przyczepności, jednolitego połysku i konsystentnego koloru. Różne powierzchnie wymagają różnych formuł gruntu. Na nowe płyty g-k stosuje się warstwę gruntującą (emulsja rozcieńczona 70:30 z wodą) lub dedykowany grunt (Ceresit CT 17, Atlas Uni-Grunt, Śnieżka Acryl-Putz GP41), który daje bardziej konsystentny efekt. Surowe drewno wymaga gruntu drewnianego (akrylowego lub rozpuszczalnikowego) do uszczelnienia słojów i zapobiegania wybijaniu żywicy. Do blokowania plam (zacieki wodne, nikotyna, żywica) grunt szelakowy (Zinsser BIN) jest niezastąpiony. Wydajność gruntu: grunt g-k pokrywa 10–14 m²/l, grunt drewniany 8–10 m²/l, grunt blokujący plamy 6–8 m²/l. Ceny od 25 do 60 zł za litr w polskich marketach. Popularne marki gruntów w Polsce: Ceresit, Atlas, Śnieżka, Dekoral, Zinsser i Caparol.",
  nextSteps: [
    { label: "Kalkulator Wydajności Farby", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Kalkulator Kosztów Malowania", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Kalkulator Masy Szpachlowej", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
  ],
  installationTips: [
    "Nakładaj grunt tym samym typem wałka lub pędzla, którego użyjesz na farbę nawierzchniową.",
    "Poczekaj na pełne wyschnięcie gruntu przed malowaniem — zwykle 1–2 godziny dla akrylowego, 16–24 godziny dla rozpuszczalnikowego.",
    "Poproś sprzedawcę o zabarwienie gruntu w kierunku koloru nawierzchniowego dla lepszego krycia.",
    "Nakładaj pędzlem na wycinkach i wałkiem na dużych powierzchniach.",
    "Na nowe tynki i gładzie stosuj grunt głęboko penetrujący (Ceresit CT 17) — zwykłe emulsje nie wnikną wystarczająco.",
  ],
  commonMistakes: [
    "Brak gruntowania nowych płyt g-k — powoduje nierównomierne wchłanianie (flashowanie) widoczne pod określonym oświetleniem.",
    "Stosowanie gruntu wodorozcieńczalnego na plamy — grunt wodny nie blokuje żywicy, nikotyny ani zacieków; stosuj szelakowy (Zinsser BIN).",
    "Nakładanie gruntu zbyt grubo — jedna równa warstwa wystarczy; gruba warstwa dłużej schnie i może się łuszczyć.",
    "Gruntowanie po kurzu i brucie — zawsze oczyść lub odkurz powierzchnie przed gruntowaniem.",
    "Stosowanie zwykłej emulsji jako gruntu na nowym tynku — grunt ma specjalne żywice do przyczepności i uszczelnienia.",
  ],
  faqs: [
    { question: "Czy zawsze potrzebuję gruntu przed malowaniem?", answer: "Grunt jest niezbędny na nowych płytach g-k, surowym drewnie, naprawionych miejscach i przy blokowaniu plam lub dramatycznych zmianach koloru. Na wcześniej malowanych powierzchniach w dobrym stanie o podobnym kolorze samogruntująca farba nawierzchniowa może wystarczyć." },
    { question: "Jaki grunt na nowe płyty g-k?", answer: "Warstwa gruntująca (emulsja rozcieńczona 70:30 z wodą) lub dedykowany grunt (Ceresit CT 17, Atlas Uni-Grunt, Śnieżka GP41). Grunt uszczelnia chłonną powierzchnię dla równomiernego wchłaniania farby nawierzchniowej." },
    { question: "Ile gruntu na litr?", answer: "Wydajność zależy od powierzchni: g-k 10–14 m²/l, wcześniej malowane ściany 12–16 m²/l, surowe drewno 8–10 m²/l, grunt blokujący plamy 6–8 m²/l. Zawsze sprawdź kartę techniczną produktu." },
    { question: "Czy mogę użyć białej farby jako gruntu?", answer: "Nie. Farba i grunt pełnią różne funkcje. Grunt ma specjalne żywice do przyczepności i uszczelnienia. Stosowanie farby jako gruntu na nowych g-k daje nierównomierne wchłanianie, flashowanie i słabą przyczepność." },
    { question: "Czy warto zabarwić grunt?", answer: "Tak, gdy farba nawierzchniowa jest w średnim lub ciemnym kolorze. Zabarwiony grunt zmniejsza liczbę warstw nawierzchniowych potrzebnych do pełnego krycia. Większość sprzedawców doda niewielką ilość barwnika do gruntu bezpłatnie." },
    { question: "Jakie są najlepsze marki gruntów w Polsce?", answer: "Ceresit CT 17 (grunt głęboko penetrujący) to standard budowlany. Atlas Uni-Grunt — wielozadaniowy. Śnieżka Acryl-Putz GP41 na g-k. Zinsser BIN (szelakowy) na blokowanie plam. Caparol TiefGrund na tynki i gładzie." },
  ],
};

// ─── OUTDOOR ────────────────────────────────────────────────────────────────

export const deckBoardCalculator: CalculatorSEOContent = {
  disclaimer: "Szacunek uwzględnia 10% zapasu na odpady. Rzeczywiste odpady zależą od kształtu tarasu i długości desek. Układy ukośne zwiększają odpady do 15–20%.",
  howToUse: [
    "Wprowadź długość i szerokość tarasu w metrach.",
    "Wprowadź szerokość deski w milimetrach (140 mm to standard).",
    "Wprowadź długość desek (typowe: 3,0 m, 4,0 m, 6,0 m).",
    "Kliknij Oblicz materiały, aby otrzymać liczbę desek, metry bieżące i pokrycie.",
  ],
  materialInfo:
    "Deski tarasowe to widoczna powierzchnia tarasu, narażona na ruch pieszy, meble, warunki atmosferyczne i UV. Najczęstsze materiały w Polsce to drewno iglaste impregnowane (najtańsza opcja), modrzew syberyjski, drewno twarde egzotyczne (bangkirai, cumaru, ipe) i deski kompozytowe.\n\nDrewno iglaste impregnowane ciśnieniowo (zwykle sosna lub świerk, impregnowane do klasy UC3 lub UC4) to najpopularniejszy wybór w Polsce. Standardowe deski to 28×145 mm z ryflowaną powierzchnią antypoślizgową. Ceny od 12 do 30 zł/m.b. w Castoramie, Leroy Merlin i PSB Mrówka. Żywotność 10–15 lat przy corocznej konserwacji olejem tarasowym.\n\nModrzew syberyjski jest naturalnie odporny na gnicie i wietrzeje do atrakcyjnej srebrno-szarej barwy. Ceny 25–50 zł/m.b., żywotność 15–25 lat.\n\nDrewno twarde egzotyczne (bangkirai, cumaru, ipe) jest ekstremalnie trwałe i naturalnie odporne na gnicie i owady. Ceny 40–100 zł/m.b. Żywotność 25–40+ lat przy minimalnej konserwacji.\n\nDeski kompozytowe (WPC — wood-plastic composite) z marek Fiberon, TimberTech, Millboard czy polskiej marki Gardenline nie wymagają bejcowania, nie gniją i mają gwarancje 25–50 lat. Ceny 30–100 zł/m.b. Wymagają specyficznych łączników i wentylowanej podkonstrukcji.\n\nOdstęp między deskami jest kluczowy: zostaw 5–8 mm na drenaż. Deski impregnowane montowane mokre układaj na styk — skurczą się po wyschnięciu.",
  nextSteps: [
    { label: "Kalkulator Stóp Fundamentowych Tarasu", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Kalkulator Balustrady Tarasu", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Kalkulator Schodów Tarasowych", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Pierwszą deskę ułóż idealnie prosto i prostopadle do domu — każda kolejna pójdzie za nią.",
    "Nawierć otwory pilotażowe przy końcach desek, aby zapobiec pękaniu, zwłaszcza przy drewnie twardym.",
    "Przesuwaj złącza o co najmniej 2 przęsła legarów dla wytrzymałości i estetyki.",
    "Układaj deski stroną korową do góry (słoje wyginające się w dół), aby woda spływała zamiast się gromadzić.",
    "Zostaw 10 mm szczelinę między ścianą domu a pierwszą deską na odprowadzanie wody.",
  ],
  commonMistakes: [
    "Brak szczelin między deskami — ciasne suche deski wybrzuszą się po wchłonięciu wilgoci.",
    "Zbyt krótkie wkręty — wkręty tarasowe powinny wchodzić min. 40 mm w legar.",
    "Liniowanie wszystkich złączy na tym samym legarze — przesuwaj złącza dla wytrzymałości i profesjonalnego wyglądu.",
    "Pominięcie impregnacji ciętych końców — odsłonięte czoła drewna wchłaniają wodę i gniją szybciej.",
    "Stosowanie wkrętów stalowych zamiast nierdzewnych — rdzawe plamy na drewnie i kompozycie.",
  ],
  faqs: [
    { question: "Ile desek na taras 4×5 m?", answer: "Taras 4×5 m z deskami 145 mm potrzebuje ok. 27 desek po 5 m. Z 10% zapasem zamów 30 desek. Przy krótszych deskach ze złączami potrzebujesz więcej na odpady na złączach." },
    { question: "Jaki rozmiar desek tarasowych?", answer: "Najpopularniejsza deska tarasowa w Polsce to 28×145 mm. Zapewnia dobrą równowagę wytrzymałości, wyglądu i ceny. Deski 21×120 mm dostępne do lżejszych zastosowań." },
    { question: "Jak daleko od siebie deski?", answer: "Zostaw 5–8 mm między deskami na drenaż i wentylację. Deski impregnowane montowane mokre układaj na styk — skurczą się. Deski kompozytowe: rozstaw wg instrukcji producenta, zwykle 5–6 mm." },
    { question: "Jak długo wytrzymują deski tarasowe?", answer: "Impregnowane iglaste: 10–15 lat z corocznym olejowaniem. Modrzew: 15–25 lat. Drewno egzotyczne: 25–40+ lat. Kompozyt: 25–50 lat z gwarancją. Nieimpregnowane iglaste: 3–5 lat." },
    { question: "Wkręty czy gwoździe na taras?", answer: "Wkręty tarasowe nierdzewne to najlepsze mocowanie. 65–75 mm wkręty nierdzewne, 2 wkręty na deskę przy każdym legarze. Gwoździe są mniej niezawodne i mają tendencję do luzowania się." },
    { question: "Ile kosztują deski tarasowe w Polsce?", answer: "Impregnowane iglaste: 12–30 zł/m.b. Modrzew: 25–50 zł/m.b. Egzotyczne: 40–100 zł/m.b. Kompozyt: 30–100 zł/m.b. Dla tarasu 4×5 m koszt samych desek to ok. 1800 zł (impregnowane) do 12 000 zł (premium kompozyt)." },
  ],
};

export const deckFootingCalculator: CalculatorSEOContent = {
  disclaimer: "Głębokość stóp musi odpowiadać warunkom lokalnym. Kalkulator podaje szacunek rozmieszczenia — rzeczywiste pozycje zależą od projektu tarasu, obciążeń i warunków gruntowych.",
  howToUse: [
    "Wprowadź długość i szerokość tarasu w metrach.",
    "Ustaw maksymalny rozstaw słupków (1,8 m dla legarów 45×150 mm, 2,4 m dla 45×200 mm).",
    "Podaj strefę przemarzania gruntu.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę stóp, słupków i wymagania na legary.",
  ],
  materialInfo:
    "Stopy fundamentowe tarasu to betonowe filary przenoszące ciężar tarasu na grunt. Bez prawidłowych stóp taras osiadzie, przesunie się lub ulegnie wysadzinom mrozowym. Dwie popularne metody to betonowe szalunki rurowe (tekturowe rury osadzone w wykopanych otworach i wypełnione betonem) i betonowe stopy prefabrykowane.\n\nDla większości polskich tarasów ogrodowych szalunki 250 mm lub 300 mm wypełnione betonem to standardowe podejście. Każda stopa 250 mm × 100 cm wymaga ok. 0,049 m³ betonu (ok. 4 worki betonu szybkowiążącego po 25 kg). Stopy muszą sięgać poniżej strefy przemarzania: 80 cm w strefie I (zachodnia Polska), 100 cm w strefie II, 120 cm w strefie III, 140 cm w strefie IV (północno-wschodnia Polska). W gruntach gliniastych podatnych na wysadziny głębsze stopy (120–150 cm) mogą być wymagane.\n\nRozstaw słupków zależy od przekroju legarów i klasy drewna. Dla podwójnych legarów 45×200 mm C24 maksymalny rozstaw to ok. 2,4 m. Dla 45×150 mm — do 1,8 m. Słupki to zwykle kantówka 100×100 mm impregnowana, łączona ze stopą za pomocą ocynkowanej stopy słupkowej zamiast osadzania drewna w betonie.\n\nBeton na stopy powinien mieć min. klasę C20/25. Odczekaj 24–48 godzin przed obciążaniem. Typowy taras 4×5 m przy domu wymaga 4–6 stóp.",
  nextSteps: [
    { label: "Kalkulator Desek Tarasowych", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Kalkulator Balustrady Tarasu", href: "/calculators/outdoor/deck-railing-calculator/" },
  ],
  installationTips: [
    "Kop otwory na stopy poniżej strefy przemarzania — w Polsce to 80–140 cm w zależności od regionu.",
    "Stosuj szalunki rurowe dla czystych, jednolitych stóp.",
    "Osadź śruby stopy słupkowej w mokrym betonie i sprawdź centrowanie i pionowość.",
    "Uformuj wierzch każdej stopy powyżej poziomu gruntu, aby woda odpływała od stopy.",
    "Odczekaj min. 48 godzin na utwardzenie betonu przed montażem słupków.",
  ],
  commonMistakes: [
    "Zbyt płytkie stopy — muszą sięgać poniżej strefy przemarzania (80–140 cm w Polsce).",
    "Osadzanie drewnianych słupków bezpośrednio w betonie — zatrzymuje wilgoć i powoduje gnicie; zawsze stosuj metalową stopę.",
    "Zbyt duży rozstaw słupków, przeciążający legary i powodując ugięcie.",
    "Pominięcie zagęszczenia dna wykopu przed betonowaniem.",
    "Brak sprawdzenia poziomu wszystkich stóp przed wiązaniem betonu.",
  ],
  faqs: [
    { question: "Jak głęboko stopy tarasu w Polsce?", answer: "Stopy muszą sięgać poniżej strefy przemarzania: 80 cm w strefie I (zachodnia), 100 cm w strefie II (centralna), 120 cm w strefie III (wschodnia), 140 cm w strefie IV (północno-wschodnia). W gruntach gliniastych może być wymagana większa głębokość." },
    { question: "Ile stóp na taras 4×5 m?", answer: "Taras 4×5 m z rozstawem słupków 2,4 m wymaga ok. 4–6 stóp w 2 rzędach. Jeśli taras jest mocowany do domu listwą przyścienną, strona przy domu nie wymaga stóp." },
    { question: "Czy potrzebuję pozwolenia na budowę tarasu?", answer: "W Polsce taras o powierzchni do 35 m² i wysokości do 50 cm nad gruntem zwykle wymaga jedynie zgłoszenia. Tarasy wyższe lub większe mogą wymagać pozwolenia na budowę. Sprawdź z urzędem gminy." },
    { question: "Jaki beton na stopy tarasu?", answer: "Stosuj beton C20/25 lub mocniejszy. Beton szybkowiążący (do słupków) nadaje się do lekkich tarasów. Dla większych tarasów lub podwyższonych konstrukcji stosuj standardowy beton C25/30." },
    { question: "Ile betonu na jedną stopę?", answer: "Stopa 250 mm × 100 cm wymaga ok. 0,049 m³ betonu (ok. 4 worki po 25 kg). Stopa 300 mm × 100 cm to ok. 0,071 m³ (ok. 6 worków)." },
    { question: "Czy mogę użyć bloków prefabrykowanych zamiast stóp betonowych?", answer: "Prefabrykowane bloki (stopy tarasowe) mogą być stosowane na niskie, wolnostojące tarasy na stabilnym gruncie. Nie wymagają kopania i osiadają na powierzchni. Nie nadają się na tarasy podwyższone ani mocowane do budynku." },
  ],
};

export const deckRailingCalculator: CalculatorSEOContent = {
  disclaimer: "Szacunek oparty na standardowych rozstawach. Zawsze weryfikuj wysokość, rozstaw tralek i sposób mocowania słupków z warunkami technicznymi (WT).",
  howToUse: [
    "Wprowadź całkowity obwód tarasu w metrach.",
    "Odejmij długość przy domu (tam balustrada nie jest potrzebna).",
    "Podaj wysokość tarasu nad gruntem.",
    "Kliknij Oblicz materiały, aby otrzymać liczbę słupków, tralek i metry bieżące poręczy.",
  ],
  materialInfo:
    "Balustrada tarasu jest elementem bezpieczeństwa wymaganym przez warunki techniczne (WT §298–§305) na każdej powierzchni tarasu 50 cm lub więcej nad gruntem. Minimalna wysokość balustrady to 90 cm dla tarasów mieszkalnych i 110 cm dla dostępu publicznego. Tralki muszą być rozmieszczone tak, aby kula 12 cm nie mogła przejść między nimi (wg WT — różni się od norm zachodnich z kulą 10 cm).\n\nSystemy balustrad składają się ze słupków, poręczy górnej, poręczy dolnej, tralek i opcjonalnie płaskiej nakładki poręczowej. Słupki to zwykle kantówka 100×100 mm impregnowana lub kompozytowe osłony na drewnie, w rozstawie max. 1,8 m. Muszą być skręcone do podkonstrukcji tarasu śrubami M10 lub M12 — nigdy tylko przykręcone do desek.\n\nTralki to zwykle listwy 40×40 mm lub 30×30 mm, lub metalowe/kompozytowe odpowiedniki. Przy standardowym rozstawie potrzebujesz ok. 8 tralek na metr bieżący.\n\nBalustrada drewniana kosztuje ok. 100–200 zł/m.b. z montażem. Kompozytowa: 200–400 zł/m.b. Szklana: 400–800 zł/m.b. Stalowa z linkami: 250–600 zł/m.b.\n\nBalustrada to jeden z najczęściej kontrolowanych elementów przez nadzór budowlany. Inspektorzy sprawdzają wytrzymałość mocowania słupków, rozstaw tralek, wysokość i szczelinę pod dolną poręczą.",
  nextSteps: [
    { label: "Kalkulator Desek Tarasowych", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Kalkulator Schodów Tarasowych", href: "/calculators/outdoor/deck-stair-calculator/" },
    { label: "Kalkulator Stóp Fundamentowych Tarasu", href: "/calculators/outdoor/deck-footing-calculator/" },
  ],
  installationTips: [
    "Skręcaj słupki do podkonstrukcji tarasu śrubami M10 lub M12 przez belkę obwodową lub legar.",
    "Rozstaw tralki tak, aby kula 12 cm nie mogła przejść między nimi (wymóg WT).",
    "Upewnij się, że szczelina między powierzchnią tarasu a dolną poręczą jest mniejsza niż 12 cm.",
    "Nakładkę poręczową (45×150 mm) umieść na szczycie słupków dla wygodnej poręczy.",
    "Stosuj łączniki nierdzewne — wilgoć i warunki atmosferyczne szybko korodują zwykłą stal.",
  ],
  commonMistakes: [
    "Mocowanie słupków tylko do desek tarasowych — muszą być skręcone do podkonstrukcji.",
    "Zbyt duży rozstaw tralek — test kuli 12 cm musi być spełniony w każdym punkcie.",
    "Zbyt niska balustrada — minimum 90 cm od powierzchni tarasu do góry poręczy.",
    "Brak uwzględnienia obciążenia poziomego — balustrada musi wytrzymać siłę poziomą wg PN-EN 1991.",
    "Stosowanie drewna nieimpregnowanego na elementy narażone na warunki atmosferyczne.",
  ],
  faqs: [
    { question: "Kiedy potrzebuję balustrady na tarasie?", answer: "Warunki techniczne (WT §298–§305) wymagają balustrady na każdej powierzchni tarasu 50 cm lub więcej nad gruntem. Dotyczy to tarasów podwyższonych, wielopoziomowych i każdej krawędzi z różnicą poziomów." },
    { question: "Jaka wysokość balustrady?", answer: "Minimum 90 cm od powierzchni tarasu do góry poręczy dla tarasów mieszkalnych. 110 cm dla dostępu publicznego i komercyjnego." },
    { question: "Ile tralek na metr bieżący?", answer: "Dla tralek 30 mm z max. rozstawem 12 cm (kula 12 cm) potrzebujesz ok. 7 tralek na metr. Dla tralek 40 mm ok. 7 na metr. Dokładna liczba zależy od szerokości tralki i wymaganego testu kuli." },
    { question: "Ile kosztuje balustrada tarasu?", answer: "Drewniana: 100–200 zł/m.b. z montażem. Kompozytowa: 200–400 zł/m.b. Szklana: 400–800 zł/m.b. Dla typowego tarasu o 12 m biegu balustrady budżetuj 1200–2400 zł (drewno) lub 2400–4800 zł (kompozyt)." },
    { question: "Czy potrzebuję poręczy na schodach tarasu?", answer: "Tak, jeśli schody mają 2 lub więcej stopni. Poręcz wymagana jest po co najmniej jednej stronie, na wysokości 90–100 cm od nosków stopni. Dla schodów szerszych niż 1,0 m poręcze po obu stronach." },
    { question: "Czy mogę użyć paneli szklanych?", answer: "Tak. Panele ze szkła hartowanego bezpiecznego (10 mm lub 12 mm) są coraz popularniejsze ze względu na estetykę i widok. Muszą spełniać PN-EN 12150 dla szkła bezpiecznego i być mocowane zatwierdzonymi uchwytami lub szyna." },
  ],
};

export const deckStairCalculator: CalculatorSEOContent = {
  disclaimer: "Wymiary schodów muszą być zgodne z warunkami technicznymi (WT). Zawsze weryfikuj wysokość i głębokość stopni.",
  howToUse: [
    "Wprowadź całkowitą wysokość od gruntu do powierzchni tarasu w milimetrach.",
    "Podaj szerokość schodów w metrach.",
    "Kalkulator oblicza liczbę stopni, długość policzkówki i liczbę desek stopniowych.",
    "Kliknij Oblicz materiały, aby otrzymać pełne zestawienie.",
  ],
  materialInfo:
    "Schody tarasowe zapewniają dostęp z poziomu gruntu na podwyższony taras. Warunki techniczne (WT §68–§71) określają maksymalne wymiary schodów zewnętrznych: wysokość stopnia 150–175 mm, głębokość stopnia minimum 250 mm, z jednakową wysokością wszystkich stopni (tolerancja 5 mm). Najwygodniejsze wymiary schodów zewnętrznych to wysokość 150–170 mm i głębokość 280–320 mm.\n\nPoliczkówki to ukośne deski nośne po każdej stronie (i w środku dla szerokich schodów) z trójkątnymi nacięciami na stopnie. Wykonuje się je zwykle z desek 45×250 mm lub 45×300 mm impregnowanego drewna C24. Schody szersze niż 900 mm wymagają policzkówki środkowej. Stopnie to zwykle 2 deski tarasowe (28×145 mm) na każdy stopień, przykręcone do naciętych policzkówek.\n\nDla typowego tarasu o wysokości 90 cm z wysokością stopnia 170 mm potrzebujesz 5 stopni, 2 policzkówki po ok. 1,5 m i 10 desek stopniowych. Betonowa płyta lądowania (min. 100 mm grubości, 900×900 mm) jest potrzebna u podstawy. Poręcz jest wymagana po co najmniej jednej stronie przy 2 lub więcej stopniach.\n\nDrewno na schody musi być impregnowane do klasy UC3 lub UC4, mocowane wkrętami nierdzewnymi. Dół policzkówek powinien stać na metalowym uchwycie na betonowej płycie — nie bezpośrednio na gruncie. Koszt materiałów na 5-stopniowe schody to ok. 400–800 zł plus 200–400 zł na betonową płytę lądowania.",
  nextSteps: [
    { label: "Kalkulator Desek Tarasowych", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Kalkulator Balustrady Tarasu", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Kalkulator Schodów Betonowych", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Oblicz dokładną wysokość stopnia, dzieląc całkowitą wysokość przez liczbę stopni — wszystkie muszą być jednakowe.",
    "Wytnij policzkówkę wzorcową i sprawdź dopasowanie przed cięciem pozostałych.",
    "Zamocuj górę policzkówek do belki obwodowej tarasu wieszakami belkowymi lub kątownikami schodowymi.",
    "Postaw dół policzkówek na betonowej płycie lądowania — nigdy bezpośrednio na gruncie.",
    "Zastosuj listwę antypoślizgową na nosku każdego stopnia dla bezpieczeństwa zimą.",
  ],
  commonMistakes: [
    "Nierówna wysokość stopni — wszystkie muszą być jednakowe z tolerancją 5 mm wg WT.",
    "Brak solidnego lądowania u podstawy — policzkówki na gruncie zgniiją i osiądą.",
    "Zbyt głębokie nacięcia w policzkówce, osłabiające ją konstrukcyjnie — po nacięciach musi zostać min. 90 mm materiału.",
    "Pominięcie poręczy — wymagana przy 2 lub więcej stopniach wg WT.",
    "Stosowanie drewna nieimpregnowanego na schody — narażone na bezpośredni kontakt z wilgocią i gruntem.",
  ],
  faqs: [
    { question: "Jakie wymiary schodów tarasowych wg WT?", answer: "WT: maksymalna wysokość stopnia 175 mm, minimalna głębokość 250 mm, jednakowe stopnie z tolerancją 5 mm, poręcz wymagana przy 2+ stopniach. Poręcz: 90–100 cm od nosków stopni." },
    { question: "Ile stopni na taras o wysokości 90 cm?", answer: "Dzieląc 900 mm przez wygodne 170 mm wysokości stopnia, otrzymujemy ok. 5 stopni (5 × 180 mm = 900 mm). Dokładna wysokość: 900 / 5 = 180 mm na stopień." },
    { question: "Jak szerokie powinny być schody tarasowe?", answer: "Minimum 60 cm na wejście użytkowe, 90 cm na wygodne przejście jednej osoby, 120 cm dla dwóch osób. Schody szersze niż 90 cm wymagają policzkówki środkowej." },
    { question: "Czy potrzebuję lądowania u podstawy?", answer: "Tak. Policzkówki muszą opierać się na trwałej powierzchni. Betonowa płyta min. 100 mm grubości i co najmniej tak szeroka jak schody to standard. Niektóre tarasy stosują kostkę brukową lub płyty chodnikowe." },
    { question: "Jakie drewno na policzkówki?", answer: "Stosuj kantówki 45×250 mm lub 45×300 mm impregnowane C24. Po nacięciach trójkątnych pozostała głębokość drewna powinna wynosić min. 90 mm. Dla szerokich schodów lub drewna twardego mogą być potrzebne większe przekroje." },
    { question: "Czy mogę zbudować schody bez nacinanych policzkówek?", answer: "Tak. Metalowe uchwyty stopniowe (wsporniki) mocuje się do boku nienacinanych policzkówek. Są łatwiejsze dla amatorów, dają czysty wygląd i nie osłabiają policzkówki. Dostępne w Castoramie i u specjalistycznych dostawców." },
  ],
};

export const postHoleCalculator: CalculatorSEOContent = {
  disclaimer: "Szacunkowa obj\u0119to\u015b\u0107 betonu dla cylindrycznych do\u0142\u00f3w. Rzeczywiste zu\u017cycie mo\u017ce si\u0119 r\u00f3\u017cni\u0107 w zale\u017cno\u015bci od warunk\u00f3w gruntu i rozmiaru s\u0142upka.",
  howToUse: [
    "Podaj \u015brednic\u0119 do\u0142u w calach \u2014 20 cm dla s\u0142upk\u00f3w 9\u00d79 cm, 25\u201330 cm dla s\u0142upk\u00f3w 14\u00d714 cm.",
    "Podaj g\u0142\u0119boko\u015b\u0107 do\u0142u w calach \u2014 s\u0142upki ogrodzeniowe: 60\u201380 cm, s\u0142upki no\u015bne: 80\u2013120 cm (poni\u017cej strefy przemarzania).",
    "Podaj liczb\u0119 do\u0142\u00f3w.",
    "Kliknij Oblicz, aby uzyska\u0107 obj\u0119to\u015b\u0107 na d\u00f3\u0142, obj\u0119to\u015b\u0107 ca\u0142kowit\u0105 i liczb\u0119 work\u00f3w.",
  ],
  materialInfo:
    "Do\u0142y na s\u0142upki to cylindryczne wykopy wype\u0142niane betonem w celu zakotwienia s\u0142upk\u00f3w ogrodzeniowych, skrzynek pocztowych, podp\u00f3r taras\u00f3w, znak\u00f3w i pergoli. Beton otacza podstaw\u0119 s\u0142upka i przenosi obci\u0105\u017cenia na otaczaj\u0105cy grunt, zapobiegaj\u0105c przesuwaniu si\u0119, przechylaniu lub unoszeniu s\u0142upka przez wiatr, mr\u00f3z lub si\u0142y boczne.\n\nDla s\u0142upk\u00f3w ogrodzeniowych obowi\u0105zuje zasada zagrzebania jednej trzeciej ca\u0142kowitej d\u0142ugo\u015bci s\u0142upka. Ogrodzenie o wysoko\u015bci 1,80 m ze s\u0142upkami 2,40 m powinno mie\u0107 60\u201380 cm s\u0142upka zabetonowanego. Dla s\u0142upk\u00f3w 9\u00d79 cm wystarczy d\u00f3\u0142 o \u015brednicy 20 cm. Dla s\u0142upk\u00f3w 14\u00d714 cm lub s\u0142upk\u00f3w furtki/bramy stosowa\u0107 do\u0142y 25\u201330 cm.\n\nW Polsce g\u0142\u0119boko\u015b\u0107 przemarzania gruntu wynosi od 80 cm (zachodnia Polska) do 140 cm (p\u00f3\u0142nocno-wschodnia Polska). S\u0142upki no\u015bne pod tarasy, pergole i wiaty musz\u0105 by\u0107 posadowione poni\u017cej strefy przemarzania zgodnie z normami PN.\n\nBeton gotowy w workach 25 kg i 40 kg (Atlas, Kreisel, Mapei) jest najpopularniejszym produktem. Worek 25 kg daje oko\u0142o 12 litr\u00f3w, worek 40 kg oko\u0142o 20 litr\u00f3w. Ceny: 12\u201320 z\u0142 za worek 25 kg, 20\u201335 z\u0142 za worek 40 kg. Dla du\u017cych projekt\u00f3w beton z betoniarni kosztuje 350\u2013500 z\u0142/m\u00b3.\n\nPrzed zalaniem betonem nale\u017cy nasypa\u0107 10\u201315 cm \u017cwiru na dno do\u0142u dla drena\u017cu. Uformowan beton lekko powy\u017cej poziomu terenu ze spadkiem od s\u0142upka.",
  nextSteps: [
    { label: "Kalkulator Fundament\u00f3w Tarasu", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Kalkulator \u017bwiru", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Kalkulator Betonu", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Kopanie do\u0142\u00f3w 3\u20134 razy szerszych ni\u017c s\u0142upek \u2014 20 cm dla s\u0142upka 9\u00d79 cm.",
    "Nasypa\u0107 10\u201315 cm zag\u0119szczonego \u017cwiru na dno dla drena\u017cu.",
    "Sprawdzi\u0107 pion s\u0142upka na dw\u00f3ch s\u0105siednich \u015bcianach poziomic\u0105 i podeprzec \u0142atami przed zalewaniem betonu.",
    "Uformowa\u0107 beton 2\u20133 cm powy\u017cej poziomu terenu ze spadkiem na zewn\u0105trz.",
    "Odczeka\u0107 minimum 24\u201348 godzin przed monta\u017cem przęse\u0142, okucia lub obci\u0105\u017ce\u0144.",
  ],
  commonMistakes: [
    "Za p\u0142ytkie osadzenie s\u0142upk\u00f3w \u2014 s\u0142upki ogrodzeniowe musz\u0105 by\u0107 wkopane minimum jedn\u0105 trzeci\u0105 d\u0142ugo\u015bci; s\u0142upki no\u015bne poni\u017cej strefy przemarzania.",
    "Pomini\u0119cie warstwy \u017cwiru \u2014 bez drena\u017cu woda gromadzi si\u0119 przy podstawie i przyspiesza gnicie drewna.",
    "Brak wypionu s\u0142upka przed wi\u0105zaniem betonu \u2014 krzywy s\u0142upek wymaga skucia betonu do korekty.",
    "Zalewanie betonu poni\u017cej poziomu terenu \u2014 wierzcho\u0142ek powinien wystawa\u0107 ponad teren, aby woda nie gromadzi\u0142a si\u0119 przy s\u0142upku.",
    "Za ma\u0142a \u015brednica do\u0142u \u2014 zbyt ma\u0142o betonu wok\u00f3\u0142 s\u0142upka nie oprze si\u0119 si\u0142om bocznym wiatru lub bramy.",
  ],
  faqs: [
    { question: "Ile betonu na s\u0142upek ogrodzeniowy?", answer: "S\u0142upek 9\u00d79 cm w dole o \u015brednicy 20 cm na g\u0142\u0119boko\u015b\u0107 60 cm wymaga oko\u0142o 14 litr\u00f3w betonu \u2014 oko\u0142o 1 worka 40 kg lub 2 work\u00f3w 25 kg na s\u0142upek." },
    { question: "Jak g\u0142\u0119boki powinien by\u0107 d\u00f3\u0142 na s\u0142upek?", answer: "Zasada: jedna trzecia ca\u0142kowitej d\u0142ugo\u015bci s\u0142upka. Ogrodzenie 1,80 m ze s\u0142upkami 2,40 m: 60\u201380 cm. S\u0142upki bramy i naro\u017cne 10 cm g\u0142\u0119biej. W strefach mrozowych si\u0119ga\u0107 poni\u017cej g\u0142\u0119boko\u015bci przemarzania (80\u2013140 cm w zale\u017cno\u015bci od regionu)." },
    { question: "Ile work\u00f3w betonu na s\u0142upek ogrodzeniowy?", answer: "Dla s\u0142upka 9\u00d79 cm w dole 20 cm na 60 cm: 1\u20132 worki 25 kg lub 1 worek 40 kg. Dla g\u0142\u0119bszych do\u0142\u00f3w (80 cm): 2\u20133 worki 25 kg na s\u0142upek." },
    { question: "Czy mo\u017cna u\u017cy\u0107 betonu szybkowi\u0105\u017c\u0105cego do s\u0142upk\u00f3w?", answer: "Tak \u2014 beton szybkowi\u0105\u017c\u0105cy jest idealny. Wi\u0105\u017ce w 20\u201340 minut. Wsypa\u0107 such\u0105 mieszank\u0119 wok\u00f3\u0142 s\u0142upka, doda\u0107 wod\u0119, trzyma\u0107 w pionie kilka minut. Pe\u0142na wytrzyma\u0142o\u015b\u0107 po ok. 4 godzinach." },
    { question: "Jak obliczy\u0107 beton na do\u0142y pod s\u0142upki?", answer: "Do\u0142y to cylindry: obj\u0119to\u015b\u0107 = \u03c0 \u00d7 r\u00b2 \u00d7 g\u0142\u0119boko\u015b\u0107. Zamieni\u0107 cm na metry. Przyk\u0142ad: 25 cm \u015brednicy, 80 cm g\u0142\u0119boko\u015bci: r = 0,125 m, V = 3,14 \u00d7 0,125\u00b2 \u00d7 0,8 = 0,039 m\u00b3 = 39 litr\u00f3w. Worek 25 kg daje ok. 12 litr\u00f3w." },
    { question: "Jaki rozmiar do\u0142u na s\u0142upek bramy?", answer: "S\u0142upek bramy wymaga do\u0142u o \u015brednicy 25\u201330 cm na g\u0142\u0119boko\u015b\u0107 80\u2013100 cm. Bramy wywo\u0142uj\u0105 znacz\u0105ce si\u0142y boczne. Stosowa\u0107 s\u0142upki minimum 14\u00d714 cm dla bram jednoskrzyd\u0142owych." },
  ],
};

// ─── MUR OPOROWY ────────────────────────────────────────────────────────────

export const retainingWallCalculator: CalculatorSEOContent = {
  disclaimer: "Ta kalkulacja zawiera 10% odpadu na bloczki. Rzeczywiste zapotrzebowanie na kruszywo i drena\u017c zale\u017cy od warunk\u00f3w gruntowych i przepis\u00f3w lokalnych. Mury powy\u017cej 1,2 m wymagaj\u0105 zazwyczaj projektu konstrukcyjnego i pozwolenia na budow\u0119.",
  howToUse: ["Zmierz ca\u0142kowit\u0105 d\u0142ugo\u015b\u0107 muru oporowego w metrach.", "Wpisz po\u017c\u0105dan\u0105 wysoko\u015b\u0107 w metrach.", "Wybierz typ bloczka: bloczki ogrodowe, pustaki betonowe lub kamie\u0144 naturalny.", "Kliknij Oblicz, aby uzyska\u0107 liczb\u0119 bloczk\u00f3w, daszki, \u017cwir i drena\u017c."],
  materialInfo: "Mury oporowe utrzymuj\u0105 grunt na terenach pochylonych i tworz\u0105 p\u0142askie powierzchnie pod ogrody, tarasy i podjazdy. Najpopularniejsze materia\u0142y to bloczki betonowe \u0142\u0105czone na zamek, pustaki betonowe i kamie\u0144 naturalny.\n\nBloczki ogrodowe (np. Polbruk, Libet, Jadar) s\u0105 najpopularniejsz\u0105 opcj\u0105 DIY do mur\u00f3w do 1,2 m w Polsce. Standardowe wymiary 40\u00d720\u00d720 cm, masa 15-25 kg. Koszt: 5-15 PLN/bloczek lub 80-200 PLN/m\u00b2 \u015bciany gotowej.\n\nPustaki betonowe (24\u00d724\u00d749 cm) wymagaj\u0105 zaprawy, zbrojenia i wype\u0142nienia betonem przy murach powy\u017cej 60 cm. Kamie\u0144 naturalny (granit, piaskowiec, \u0142upek) daje najlepszy efekt wizualny, ale kosztuje 150-400 PLN/m\u00b2.\n\nKa\u017cdy mur oporowy wymaga drenowania: warstwa kruszywa 16/32 mm za murem, drena\u017c perforowany DN 100 u podstawy, i studzienki odprowadzaj\u0105ce. Daszki mocuje si\u0119 klejem monta\u017cowym.\n\nW Polsce mury oporowe powy\u017cej 2,2 m wymagaj\u0105 pozwolenia na budow\u0119. Mury do 2,2 m mog\u0105 by\u0107 realizowane na zg\u0142oszenie. Zawsze skonsultuj z projektantem.",
  nextSteps: [{ label: "Kalkulator \u0141awy Fundamentowej", href: "/calculators/foundation/concrete-footing-calculator/" }, { label: "Kalkulator \u017bwiru", href: "/calculators/foundation/gravel-calculator/" }, { label: "Kalkulator Zaprawy", href: "/calculators/foundation/mortar-mix-calculator/" }],
  installationTips: ["Wykop rowy o g\u0142\u0119boko\u015bci 15-20 cm i szeroko\u015bci 60 cm \u2014 zag\u0119\u015b\u0107 grunt i nasypac 15 cm kruszywa.", "Wypoziomuj pierwszy rz\u0105d poziomic\u0105 1,2 m i m\u0142otkiem gumowym.", "Zasypuj kruszywem 16/32 mm za murem przy ka\u017cdym rz\u0119dzie.", "Zamontuj dren perforowany DN 100 u podstawy ze spadkiem 2%.", "Przesuwaj spoiny o minimum 10 cm mi\u0119dzy rz\u0119dami.", "Przymocuj daszki klejem monta\u017cowym."],
  commonMistakes: ["Pomini\u0119cie podsypki \u017cwirowej \u2014 mur osi\u0105dzie i pochyli si\u0119.", "Zapomnienie o drenach \u2014 ci\u015bnienie hydrostatyczne to g\u0142\u00f3wna przyczyna uszkodze\u0144.", "Budowa powy\u017cej 1,2 m bez projektu.", "U\u017cycie ziemi jako zasypki \u2014 tylko czyste kruszywo za murem.", "Brak zag\u0119szczenia bazy."],
  faqs: [
    { question: "Ile bloczk\u00f3w potrzebuj\u0119 na mur oporowy?", answer: "Dla bloczk\u00f3w 40\u00d720\u00d720 cm potrzeba ok. 12,5 bloczk\u00f3w na m\u00b2. Mur 6 m x 1 m wymaga ok. 75 bloczk\u00f3w + 10% = 83 bloczki." },
    { question: "Ile kosztuje mur oporowy?", answer: "Bloczki ogrodowe: 80-200 PLN/m\u00b2 gotowego muru. Pustaki ze zbrojeniem: 150-300 PLN/m\u00b2. Kamie\u0144 naturalny: 150-400 PLN/m\u00b2." },
    { question: "Czy potrzebuj\u0119 pozwolenia na mur oporowy?", answer: "W Polsce mury do 2,2 m mog\u0105 by\u0107 realizowane na zg\u0142oszenie. Powy\u017cej 2,2 m wymagane jest pozwolenie na budow\u0119. Sprawd\u017a lokalne warunki zabudowy." },
    { question: "Ile \u017cwiru za murem oporowym?", answer: "Zaplanuj 30 cm strefy kruszywa 16/32 za ca\u0142\u0105 \u015bcian\u0105, plus 15 cm podsypki w rowie. Na mur 6 m x 1 m: ok. 2 m\u00b3 kruszywa." },
    { question: "Jaki bloczek na mur oporowy?", answer: "Na mury DIY do 1,2 m \u2014 bloczki ogrodowe na zamek. Na mury konstrukcyjne powy\u017cej 1,5 m \u2014 pustaki betonowe ze zbrojeniem i projektem." },
    { question: "Jak g\u0142\u0119boka powinna by\u0107 podstawa?", answer: "R\u00f3w minimum 15 cm z 15 cm kruszywa zag\u0119szczonego. W strefie przemarzania (80-100 cm w Polsce) podstawa powinna si\u0119ga\u0107 poni\u017cej." },
  ],
};

export const epoxyCalculator: CalculatorSEOContent = {
  disclaimer: "Wydajno\u015b\u0107 zale\u017cy od produktu, porowato\u015bci pod\u0142o\u017ca i metody aplikacji. Standard 10 m\u00b2/litr dotyczy wi\u0119kszo\u015bci \u017cywic do pod\u0142\u00f3g gara\u017cowych.",
  howToUse: ["Zmierz d\u0142ugo\u015b\u0107 i szeroko\u015b\u0107 pod\u0142ogi w metrach.", "Wybierz 1 warstw\u0119 na baz\u0119 lub 2 warstwy na maksymaln\u0105 trwa\u0142o\u015b\u0107.", "Dostosuj wydajno\u015b\u0107 na litr je\u015bli produkt podaje inne warto\u015bci (domy\u015blnie: 10 m\u00b2/l).", "Kliknij Oblicz, aby uzyska\u0107 litry, zestawy i szacunek koszt\u00f3w."],
  materialInfo: "\u017bywica epoksydowa to dwusk\u0142adnikowy system (cz\u0119\u015b\u0107 A \u017cywica + cz\u0119\u015b\u0107 B utwardzacz), kt\u00f3ry utwardza si\u0119 w tward\u0105, b\u0142yszcz\u0105c\u0105 i odporną na chemikalia powierzchni\u0119. To najpopularniejsza pow\u0142oka na pod\u0142ogi gara\u017cowe w Polsce.\n\nTrzy g\u0142\u00f3wne typy: epoksyd wodny (100-200 PLN/litr, 10 m\u00b2 wydajno\u015bci, niski zapach), epoksyd rozpuszczalnikowy (200-400 PLN/litr, trwalszy), epoksyd 100% cia\u0142 sta\u0142ych (400-700 PLN/litr, jako\u015b\u0107 profesjonalna).\n\nPrzygotowanie pod\u0142o\u017ca to najwa\u017cniejszy krok. Beton musi by\u0107 czysty, suchy i szorstki. Szlifowanie, \u015brutowanie lub trawienie kwasem tworz\u0105 wymagany profil. Nowy beton musi dojrzewa\u0107 minimum 28 dni. Test wilgotno\u015bci obowi\u0105zkowy.\n\nTemperatura aplikacji 10-30\u00b0C. Systemy 2-warstwowe s\u0105 gotowe do najazdu po 3-5 dniach. Produkty dost\u0119pne w marketach budowlanych (Castorama, Leroy Merlin, OBI) i u dystrybutor\u00f3w specjalistycznych.",
  nextSteps: [{ label: "Kalkulator Farby", href: "/calculators/finishing/paint-coverage-calculator/" }, { label: "Kalkulator P\u0142yty Betonowej", href: "/calculators/foundation/concrete-slab-calculator/" }],
  installationTips: ["Wykonaj test wilgotno\u015bci (folia PE 60\u00d760 cm na 24 h) przed rozpocz\u0119ciem.", "Przeszlifuj lub wytraw beton kwasem dla profilu przyczepno\u015bci.", "Wymieszaj cz\u0119\u015b\u0107 A i B dok\u0142adnie przez wskazany czas.", "Pracuj sekcjami utrzymuj\u0105c mokr\u0105 kraw\u0119d\u017a.", "Odczekaj 12-24 h mi\u0119dzy warstwami i 72 h przed lekkim ruchem."],
  commonMistakes: ["Pomini\u0119cie przygotowania pod\u0142o\u017ca \u2014 g\u0142\u00f3wna przyczyna \u0142uszczenia.", "Aplikacja na wilgotne pod\u0142o\u017ce \u2014 powoduje p\u0119cherze i delaminacj\u0119.", "Praca poni\u017cej 10\u00b0C.", "Mieszanie zbyt du\u017cej ilo\u015bci \u2014 reakcja egzotermiczna mo\u017ce \u017celowa\u0107 mieszanin\u0119.", "Brak pow\u0142oki wyko\u0144czeniowej \u2014 epoksyd \u017c\u00f3\u0142knie pod wp\u0142ywem UV."],
  faqs: [
    { question: "Ile \u017cywicy epoksydowej na gara\u017c?", answer: "Standardowy podw\u00f3jny gara\u017c to ok. 36 m\u00b2. Przy 10 m\u00b2/litr potrzeba ok. 3,6 l na 1 warstw\u0119 lub 7,2 l na 2 warstwy." },
    { question: "Ile kosztuje pod\u0142oga epoksydowa?", answer: "DIY: 50-150 PLN/m\u00b2 materia\u0142u. Gara\u017c 36 m\u00b2: 1.800-5.400 PLN. Profesjonalna aplikacja: 150-400 PLN/m\u00b2." },
    { question: "Czy jedna warstwa epoksydu wystarczy?", answer: "Jedna warstwa daje akceptowaln\u0105 ochron\u0119 przy lekkim u\u017cytkowaniu. Dwie warstwy zapewniaj\u0105 znacznie lepsz\u0105 trwa\u0142o\u015b\u0107." },
    { question: "Jak d\u0142ugo wytrzymuje pod\u0142oga epoksydowa?", answer: "Prawid\u0142owo na\u0142o\u017cona: 5-10 lat w gara\u017cu domowym. Profesjonalny epoksyd z pow\u0142ok\u0105 poliaspartyczn\u0105: 15-20 lat." },
    { question: "Czy potrzebny jest grunt przed epoksydem?", answer: "Wi\u0119kszo\u015b\u0107 zestaw\u00f3w nie wymaga osobnego gruntu \u2014 pierwsza warstwa pe\u0142ni t\u0119 funkcj\u0119." },
    { question: "Czy mo\u017cna nak\u0142ada\u0107 epoksyd na star\u0105 farb\u0119?", answer: "Nie \u2014 nale\u017cy usun\u0105\u0107 star\u0105 pow\u0142ok\u0119 szlifowaniem lub chemicznym usuwaniem." },
  ],
};

export const pondCalculator: CalculatorSEOContent = {
  disclaimer: "Obliczenia obj\u0119to\u015bci s\u0105 przybli\u017cone. Rozmiar folii zawiera 60 cm zak\u0142adu na ka\u017cd\u0105 stron\u0119. Wymiarowanie pompy zak\u0142ada pe\u0142ny obieg co 2 godziny.",
  howToUse: ["Wpisz maksymaln\u0105 d\u0142ugo\u015b\u0107 oczka wodnego w metrach.", "Wpisz maksymaln\u0105 szeroko\u015b\u0107.", "Wpisz najg\u0142\u0119bsze miejsce \u2014 60 cm-1 m na ogrody wodne, 1-1,5 m na oczka z koi.", "Wybierz kszta\u0142t: prostok\u0105tny, owalny lub nerkowaty.", "Kliknij Oblicz, aby uzyska\u0107 obj\u0119to\u015b\u0107, rozmiar folii, wydajno\u015b\u0107 pompy i geow\u0142\u00f3knin\u0119."],
  materialInfo: "Oczko wodne to wykop wy\u015bcie\u0142any foli\u0105 lub wann\u0105 preformowan\u0105 na ryby ozdobne, ro\u015bliny wodne lub jako element dekoracyjny.\n\nFolie EPDM (1,0 mm) s\u0105 standardem \u2014 elastyczne, odporne na UV, bezpieczne dla ryb, trwa\u0142o\u015b\u0107 20-30 lat. Koszt: 20-50 PLN/m\u00b2. Folie PVC s\u0105 ta\u0144sze (10-25 PLN/m\u00b2) ale wytrzymuj\u0105 10-15 lat.\n\nRozmiar folii = (d\u0142ugo\u015b\u0107 + 2\u00d7g\u0142\u0119boko\u015b\u0107 + 0,6 m) \u00d7 (szeroko\u015b\u0107 + 2\u00d7g\u0142\u0119boko\u015b\u0107 + 0,6 m). Pompy musz\u0105 obr\u00f3ci\u0107 ca\u0142\u0105 obj\u0119to\u015b\u0107 co 2 h. Geow\u0142\u00f3knina (300 g/m\u00b2) pod foli\u0105 chroni przed korzeniami i kamieniami.\n\nW Polsce polskie zimy wymagaj\u0105 oczek o g\u0142\u0119boko\u015bci minimum 1,2 m dla ryb koi, aby zapewni\u0107 stref\u0119 niezamarzaj\u0105c\u0105. Napowietrzacz lub grza\u0142ka stawowa (100-300 PLN) utrzymuje otw\u00f3r w lodzie zimowy. Bud\u017cet na oczko 2.000 l: 1.500-5.000 PLN materia\u0142\u00f3w DIY.",
  nextSteps: [{ label: "Kalkulator \u017bwiru", href: "/calculators/foundation/gravel-calculator/" }, { label: "Kalkulator Do\u0142\u00f3w na S\u0142upki", href: "/calculators/outdoor/post-hole-calculator/" }],
  installationTips: ["Umie\u015b\u0107 oczko w miejscu z 4-6 h cz\u0119\u015bciowego s\u0142o\u0144ca.", "Sprawd\u017a lokalizacj\u0119 instalacji podziemnych przed kopaniem.", "Wykop p\u00f3\u0142ki na 30 cm dla ro\u015blin brzegowych.", "Po\u0142\u00f3\u017c 5 cm piasku lub geow\u0142\u00f3knin\u0119 na ca\u0142ym wykopie.", "Nape\u0142niaj powoli w\u0119\u017cem, wyg\u0142adzaj\u0105c foli\u0119.", "Uruchom pomp\u0119 i filtr na 2 tygodnie przed dodaniem ryb."],
  commonMistakes: ["Zbyt ma\u0142a folia \u2014 zawsze obliczaj d\u0142ugo\u015b\u0107 + (2\u00d7g\u0142\u0119boko\u015b\u0107) + 0,6 m.", "Pomini\u0119cie geow\u0142\u00f3kniny \u2014 korzenie i kamienie przebijaj\u0105 foli\u0119.", "Za ma\u0142a pompa \u2014 s\u0142aby obieg = zastoj wody i glony.", "Niedostateczna g\u0142\u0119boko\u015b\u0107 \u2014 p\u0142ytkie oczka przegrzewaj\u0105 si\u0119 latem i zamarzaj\u0105 zim\u0105.", "Budowa zbyt blisko drzew \u2014 opadaj\u0105ce li\u015bcie zu\u017cywaj\u0105 tlen."],
  faqs: [
    { question: "Ile litr\u00f3w ma moje oczko wodne?", answer: "Prostok\u0105tne: d\u0142ugo\u015b\u0107 \u00d7 szeroko\u015b\u0107 \u00d7 g\u0142\u0119boko\u015b\u0107 (metry) \u00d7 1.000 = litry. Owalne: pomn\u00f3\u017c przez 0,8. Nerkowate: przez 0,7." },
    { question: "Jaki rozmiar folii potrzebuj\u0119?", answer: "Folia = (d\u0142ugo\u015b\u0107 + 2\u00d7g\u0142\u0119boko\u015b\u0107 + 0,6) \u00d7 (szeroko\u015b\u0107 + 2\u00d7g\u0142\u0119boko\u015b\u0107 + 0,6). Na oczko 3\u00d72,5\u00d71 m: folia 5,6\u00d75,1 m." },
    { question: "Jak\u0105 pomp\u0119 potrzebuj\u0119?", answer: "Obj\u0119to\u015b\u0107 w litrach \u00d7 0,5 = minimalna wydajno\u015b\u0107 w l/h. Oczko 8.000 l wymaga pompy min. 4.000 l/h." },
    { question: "Ile kosztuje oczko wodne?", answer: "Ogr\u00f3d wodny 2.000 l: 1.500-5.000 PLN DIY. Oczko 4.000-8.000 l z pomp\u0105 i filtrem: 5.000-15.000 PLN DIY." },
    { question: "Jaka g\u0142\u0119boko\u015b\u0107 dla ryb?", answer: "Z\u0142ote rybki: min. 60 cm. Koi: min. 1,2 m, najlepiej 1,5 m w polskim klimacie." },
    { question: "Czy potrzebny filtr?", answer: "Tak, je\u015bli trzymasz ryby. Filtr biologiczny przetwarza toksyczny amoniak na nieszkodliwe azotany." },
  ],
};


// ─── STAIRS ──────────────────────────────────────────────────────────────────

const stairCalculatorPL: CalculatorSEOContent = {
  disclaimer: "Ten kalkulator podaje szacunki oparte na polskich normach budowlanych (PN-EN / Warunki Techniczne). Zawsze skonsultuj się z lokalnym nadzorem budowlanym. Wysokość stopnia maks. 190 mm, głębokość min. 250 mm.",
  howToUse: [
    "Zmierz całkowitą wysokość między wykończonymi podłogami w milimetrach.",
    "Wpisz żądaną głębokość stopnia (minimum 250 mm).",
    "Wpisz szerokość schodów (minimum 800 mm (1.200 mm klatka schodowa) dla budynków mieszkalnych).",
    "Kliknij Oblicz, aby uzyskać liczbę stopni, wysokość, głębokość i długość podłużnicy.",
  ],
  materialInfo: "Budowa schodów obejmuje kilka kluczowych elementów: podłużnice (policzki), stopnice (biegi), podstopnice (czołówki) i poręcze. Podłużnice to diagonalne elementy nośne, zwykle cięte z desek 50×300 mm dla biegów prostych. PN-EN / Warunki Techniczne (Dz.U. 2019 poz. 1065) reguluje projektowanie schodów mieszkalnych: maksymalna wysokość stopnia 190 mm, minimalna głębokość 250 mm, minimalna szerokość 800 mm (1.200 mm klatka schodowa). Formuła komfortu 2w + s = 600–650 mm zapewnia wygodne wchodzenie. Stopnice wykonuje się zwykle z litego drewna 36–40 mm (dąb, buk, jesion) z noskiem 20–30 mm. Podstopnice z desek 20–25 mm. Do schodów zewnętrznych drewno impregnowane ciśnieniowo (klasa 4) lub WPC. Schody wewnętrzne często używają stopnic z drewna twardego (dąb, buk, jesion). Standardowe schody wewnętrzne kosztują 5.000 – 20.000 zł w materiałach. Premium stopnice z dębu dodają 30–50%. Minimalna wysokość przejścia 2.000 mm. W Polsce drewno kupuje się w metrach i milimetrach. Podłużnice powinny być klasy wytrzymałościowej C24 lub lepszej.",
  nextSteps: [
    { label: "Kalkulator Podłużnic", href: "/calculators/stairs/stair-stringer-calculator/" },
    { label: "Kalkulator Wysokość/Głębokość", href: "/calculators/stairs/rise-over-run-calculator/" },
    { label: "Schody ze Spocznikiem", href: "/calculators/stairs/stair-landing-calculator/" },
    { label: "Kalkulator Schodów Tarasowych", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Zawsze używaj kątownika ciesielskiego z ogranicznikami ustawionymi na wymiary wysokości i głębokości.",
    "Zmniejsz pierwszy podstopień o grubość jednej stopnicy, aby wszystkie widoczne wysokości były równe.",
    "Przymocuj podłużnice do belki stropowej łącznikami metalowymi (typ Simpson LSC lub równoważny).",
    "Nawierć wstępnie wszystkie otwory na śruby w stopnicach i podstopnicach, aby zapobiec pękaniu.",
    "Zamontuj tymczasową poręcz podczas budowy dla bezpieczeństwa.",
  ],
  commonMistakes: [
    "Nieuwzględnienie grubości wykończenia podłogi — zmienia to pierwszą i ostatnią wysokość stopnia.",
    "Nierówne wysokości stopni — maksymalna różnica 5 mm. Nierówności to zagrożenie potknięciem.",
    "Używanie desek 50×250 mm zamiast 50×300 mm — niewystarczający materiał nośny po wycięciach.",
    "Zapomnienie o wysokości przejścia — mierz 2.000 mm pionowo od nosa każdego stopnia do sufitu.",
    "Niesprawdzenie lokalnych przepisów budowlanych — gmina może mieć dodatkowe wymagania.",
  ],
  faqs: [
    { question: "Jak obliczyć liczbę stopni?", answer: "Zmierz całkowitą wysokość między podłogami w mm i podziel przez idealną wysokość stopnia (175–190 mm). Zaokrąglij. Przykład: 2.700 mm / 180 = 15 wysokości i 14 głębokości. Podłoga piętra służy jako ostatni stopień." },
    { question: "Co mówią normy o schodach mieszkalnych?", answer: "PN-EN / Warunki Techniczne (Dz.U. 2019 poz. 1065) wymaga: wysokość stopnia max. 190 mm, głębokość min. 250 mm, szerokość min. 800 mm (1.200 mm klatka schodowa), wysokość przejścia 2.000 mm, poręcz 900–1.100 mm. Max. odchylenie między stopniami: 5 mm." },
    { question: "Jaki jest idealny kąt schodów?", answer: "Idealny kąt to 30°–37°, odpowiadający wysokości 170–190 mm przy głębokości 250–280 mm. Ten zakres zapewnia najbardziej komfortowe i bezpieczne wchodzenie." },
    { question: "Jak długa musi być podłużnica?", answer: "Długość = pierwiastek z (wysokość² + bieg²). Przykład: 2.700 mm wysokości i 3.780 mm biegu = √(2.700² + 3.780²) ≈ 4.645 mm. Kup deski co najmniej 300 mm dłuższe." },
    { question: "Ile kosztuje budowa schodów?", answer: "Schody wewnętrzne: 5.000 – 20.000 zł w materiałach. Zewnętrzne: 2.000 – 8.000 zł. Montaż profesjonalny dodaje 50–100%. Premium stopnice z dębu dodają 30–50%." },
    { question: "Ile podłużnic potrzebuję?", answer: "Rozstaw max. 600 mm w osiach, 400 mm zalecany. Dla schodów 800 mm (1.200 mm klatka schodowa): 2 podłużnice. Powyżej 1.000 mm: 3. Powyżej 1.200 mm: 4." },
  ],
};

// Repeat similar pattern for the other 4 stair calculators (stringer, rise-over-run, spiral, landing)
// But keep them shorter with just disclaimer + howToUse + materialInfo + nextSteps + tips + mistakes + faqs

const stairStringerCalcPL: CalculatorSEOContent = {
  disclaimer: "Obliczenia podłużnic zakładają standardowe podłużnice z wcięciami z desek 50×300 mm. Zawsze sprawdzaj, czy po wycięciach pozostaje co najmniej 90 mm drewna nośnego.",
  howToUse: ["Wpisz całkowitą wysokość schodów w mm.", "Wpisz głębokość stopnia (min. 250 mm).", "Wpisz całkowitą liczbę stopni.", "Wpisz szerokość schodów, aby obliczyć liczbę podłużnic.",],
  materialInfo: "Podłużnice są kręgosłupem każdych schodów. Standardowe podłużnice są cięte z desek 50×300 mm, zachowując minimum 90 mm po wycięciach. Do zastosowań zewnętrznych używaj drewna impregnowanego ciśnieniowo klasy 4 w 50×300 mm. Nigdy nie używaj 50×250 mm do podłużnic z wcięciami. Podłużnice zamknięte z frezowanymi rowkami mogą używać 50×250 mm. Łączniki metalowe eliminują potrzebę wycięć. Prefabrykowane podłużnice stalowe kosztują 100–300 zł za sztukę. Deska 50×300×5.000 mm kosztuje 60–150 zł. Budżet 200–600 zł na schody tylko na drewno podłużnic.",
  nextSteps: [
    { label: "Kalkulator Schodów", href: "/calculators/stairs/stair-calculator/" },
    { label: "Kalkulator Wysokość/Głębokość", href: "/calculators/stairs/rise-over-run-calculator/" },
    { label: "Kalkulator Kosztów Drewna", href: "/calculators/hardware/lumber-cost-calculator/" },
  ],
  installationTips: ["Użyj kątownika ciesielskiego z ogranicznikami.", "Wszystkie cięcia piłą tarczową, narożniki piłą ręczną.", "Przymierz pierwszą podłużnicę przed cięciem reszty.", "Użyj łączników metalowych przy górnym połączeniu.",],
  commonMistakes: ["Przecięcie wcięć piłą tarczową — dokończ piłą ręczną.", "Używanie 50×250 mm — niewystarczający materiał.", "Nieredukowanie pierwszego podstopnia o grubość stopnicy.", "Zbyt duży rozstaw podłużnic — maks. 600 mm w osiach.",],
  faqs: [
    { question: "Jakie drewno na podłużnice?", answer: "Deski 50×300 mm do podłużnic z wcięciami. Po wycięciach musi zostać min. 90 mm. Nigdy nie używaj 50×250 mm do podłużnic z wcięciami." },
    { question: "Ile podłużnic na 800 mm?", answer: "Dla 800 mm: 2 podłużnice. Powyżej 1.000 mm: 3. Rozstaw max. 600 mm, 400 mm zalecany." },
    { question: "Jak ciąć podłużnice?", answer: "Nanieś wysokość i głębokość na deskę 50×300 mm kątownikiem. Tnij piłą tarczową, narożniki piłą ręczną. Zmniejsz pierwszy podstopień o grubość stopnicy." },
    { question: "Czy można użyć 50×250 mm?", answer: "Nie do podłużnic z wcięciami. Przy wycięciu 190 mm zostaje ~45 mm. Używaj 50×250 tylko do podłużnic zamkniętych z łącznikami." },
    { question: "Rozstaw podłużnic?", answer: "Max. 600 mm w osiach, 400 mm zalecany. Mniejszy rozstaw zmniejsza ugięcie stopnic." },
    { question: "Ile kosztują podłużnice?", answer: "Deska 50×300×5 m: 60–150 zł. Na schody z 2 podłużnicami: 120–300 zł drewna." },
  ],
};


const riseOverRunCalcPL: CalculatorSEOContent = {
  disclaimer: "Obliczenia wysokość/głębokość działają dla schodów, ramp, dachów i każdej pochyłej powierzchni. PN-EN wymaga wysokości max. 190 mm i głębokości min. 250 mm. Dla ramp dostępnych: max 5%.",
  howToUse: ["Wpisz wysokość (odległość pionową) w mm.", "Wpisz głębokość (odległość poziomą) w mm.", "Kliknij Oblicz, aby uzyskać stosunek, procent, kąt i opis.", "Działa dla schodów, ramp, dachów i każdej pochyłej powierzchni."],
  materialInfo: "Stosunek wysokość/głębokość jest podstawową miarą nachylenia. Dla schodów, wysokość to pionowa odległość na stopień, głębokość to pozioma. PN-EN określa wysokość max. 190 mm i głębokość min. 250 mm. Formuła 2w + s = 600–650 mm zapewnia komfort. Dla dachów nachylenie wyrażane w stopniach lub procentach. Dla ramp dostępnych max. 5%. Podjazdy nie powinny przekraczać 15%. Zrozumienie tego stosunku pomaga weryfikować zgodność z normami i bezpieczeństwo.",
  nextSteps: [{ label: "Kalkulator Schodów", href: "/calculators/stairs/stair-calculator/" }, { label: "Kalkulator Nachylenia Dachu", href: "/calculators/roofing/roof-pitch-calculator/" }],
  installationTips: ["Sprawdź wysokość i głębokość poziomicą po montażu.", "Wszystkie stopnie w zakresie 5 mm.", "Użyj kątomierza cyfrowego.", "Sprawdź nachylenie rampy w kilku punktach."],
  commonMistakes: ["Mylenie wysokości z głębokością.", "Nieuwzględnienie grubości wykończenia.", "Mieszanie jednostek.", "Zapomnienie o odniesieniu nachylenia dachu."],
  faqs: [
    { question: "Co to stosunek wysokość/głębokość?", answer: "Stosunek wysokości pionowej do odległości poziomej. Np. 180 mm na 270 mm = 0,67, 67% lub 33,7°." },
    { question: "Wygodna wysokość/głębokość?", answer: "2w + s = 600–650 mm. 175 mm wysokości z 280 mm głębokości = 630 mm — idealne." },
    { question: "Max nachylenie rampy?", answer: "Dostępność: max 5%. Krótkie rampy poniżej 150 mm: 8%." },
    { question: "Jak przeliczyć na stopnie?", answer: "Kąt = arctan(wysok./głęb.) × 180/π. Np. 180/270 = arctan(0,667) = 33,7°." },
    { question: "Max nachylenie podjazdu?", answer: "15% zalecane. Niektóre gminy pozwalają do 25% na krótkich odcinkach." },
    { question: "Nachylenie dla schodów?", answer: "30°–37° idealne. Wysokość 170–190 mm z głębokością 250–280 mm." },
  ],
};

const spiralStaircaseCalcPL: CalculatorSEOContent = {
  disclaimer: "Schody kręcone mają specyficzne wymagania. Szerokość min. 700 mm, wysokość przejścia 2.000 mm, wysokość stopnia max. 190 mm. Sprawdź z nadzorem budowlanym.",
  howToUse: ["Zmierz wysokość między kondygnacjami.", "Wpisz średnicę otworu.", "Wpisz całkowity obrót w stopniach.", "Kliknij Oblicz dla liczby stopni i wymiarów."],
  materialInfo: "Schody kręcone mieszczą się w otworach od 1.200 mm (1.500 mm zalecane). Normy: szerokość min. 700 mm, wysokość max. 190 mm, głębokość min. 150 mm na linii chodu, identyczne stopnie. Wysokość przejścia min. 2.000 mm. Zestawy stalowe: 3.000–12.000 zł. Na wymiar drewno/żelazo: 10.000–50.000+ zł. Słup centralny musi być solidnie zakotwiony.",
  nextSteps: [{ label: "Kalkulator Schodów", href: "/calculators/stairs/stair-calculator/" }],
  installationTips: ["Sprawdź, czy otwór jest okrągły i wypoziomowany.", "Zakotwij słup śrubami M12.", "Montuj od dołu sprawdzając poziom.", "Wymagana ciągła poręcz."],
  commonMistakes: ["Za mała średnica — min. 1.500 mm na co dzień.", "Niekołowy otwór.", "Zapomnienie o platformie.", "Trudności z transportem mebli."],
  faqs: [
    { question: "Minimalna średnica?", answer: "Szerokość min. 700 mm. Otwór min. ~1.200 mm, 1.500 mm zalecany." },
    { question: "Ile stopni?", answer: "Zależy od wysokości i max. stopnia (190 mm). Dla 2.700 mm: min. 15 stopni." },
    { question: "Czy kręcone są zgodne z normami?", answer: "Tak, z określonymi wymaganiami. Mogą nie być akceptowane jako główne schody." },
    { question: "Koszt?", answer: "Zestaw stalowy: 3.000–12.000 zł. Na wymiar: 10.000–50.000+ zł." },
    { question: "Czy mogą być jedyne?", answer: "Zależy od nadzoru budowlanego. Sprawdź przed projektowaniem." },
    { question: "Kierunek obrotu?", answer: "Zwykle zgodnie z zegarem w górę. Decyzja projektowa — rozważ układ piętra." },
  ],
};

const stairLandingCalcPL: CalculatorSEOContent = {
  disclaimer: "Schody ze spocznikiem muszą spełniać wszystkie wymagania dla każdego biegu. Spocznik min. 800 mm głębokości.",
  howToUse: ["Zmierz całkowitą wysokość między podłogami.", "Wpisz głębokość spocznika (min. 800 mm).", "Wpisz żądaną głębokość stopnia (min. 250 mm).", "Kliknij Oblicz dla stopni na bieg, wysokości spocznika i biegu całkowitego."],
  materialInfo: "Spoczniki to pośrednie platformy dzielące schody na biegi. Normy wymagają, aby spocznik był co najmniej tak szeroki jak schody i 800 mm głęboki w kierunku ruchu. Spoczniki zapewniają punkt odpoczynku, umożliwiają zmiany kierunku (L i U) i poprawiają bezpieczeństwo. Wiele norm wymaga spocznika gdy wysokość przekracza 3.000 mm. Dla L (90°): spocznik 800×800 mm. Dla U (180°): szerszy. Koszt dodatkowy: 800–2.500 zł materiały, 1.200–3.500 zł robocizna.",
  nextSteps: [{ label: "Kalkulator Schodów", href: "/calculators/stairs/stair-calculator/" }, { label: "Kalkulator Podłużnic", href: "/calculators/stairs/stair-stringer-calculator/" }],
  installationTips: ["Zbuduj spocznik jak mini-strop.", "Przymocuj do ścian listwą nośną.", "Musi być idealnie wypoziomowany.", "Zbuduj spocznik przed górnymi podłużnicami."],
  commonMistakes: ["Spocznik za płytki — min. 800 mm.", "Nietraktowanie jako element nośny.", "Nierówne stopnie na przejściu.", "Zapomnienie grubości spocznika."],
  faqs: [
    { question: "Kiedy potrzebny spocznik?", answer: "Zawsze na górze i na dole. Wiele norm wymaga, gdy wysokość przekracza 3.000 mm. Wymagany przy każdej zmianie kierunku." },
    { question: "Wymiary spocznika?", answer: "Min. szerokość schodów × 800 mm głębokości. Schody U: pełna szerokość obu biegów." },
    { question: "Schody L vs U?", answer: "L: obrót 90° z kwadratowym spocznikiem. U: obrót 180° z szerszym spocznikiem." },
    { question: "Jak obliczyć ze spocznikiem?", answer: "Całkowita wysokość / idealna wysokość = stopnie. Podziel równo na biegi. Bieg całkowity = oba biegi + głębokość spocznika." },
    { question: "Czy spocznik liczy się jako stopień?", answer: "Nie. To płaska platforma na poziomie ostatniego stopnia dolnego biegu." },
    { question: "Koszt spocznika?", answer: "Materiały: 800–2.500 zł. Robocizna: 1.200–3.500 zł. Dodatkowy koszt L: 2.000–6.000 zł. U: 3.000–9.000 zł." },
  ],
};

// ─── REGISTRY MAP ───────────────────────────────────────────────────────────

export const registryPL: Record<string, Record<string, CalculatorSEOContent>> = {
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
    "plywood-calculator": plywoodCalculator,
  },
  finishing: {
    "paint-coverage-calculator": paintCoverageCalculator,
    "paint-cost-calculator": paintCostCalculator,
    "primer-calculator": primerCalculator,
    "epoxy-calculator": epoxyCalculator,
  },
  outdoor: {
    "deck-board-calculator": deckBoardCalculator,
    "deck-footing-calculator": deckFootingCalculator,
    "deck-railing-calculator": deckRailingCalculator,
    "deck-stair-calculator": deckStairCalculator,
    "post-hole-calculator": postHoleCalculator,
    "pond-calculator": pondCalculator,
  },
  stairs: {
    "stair-calculator": stairCalculatorPL,
    "stair-stringer-calculator": stairStringerCalcPL,
    "rise-over-run-calculator": riseOverRunCalcPL,
    "spiral-staircase-calculator": spiralStaircaseCalcPL,
    "stair-landing-calculator": stairLandingCalcPL,
  },
};
