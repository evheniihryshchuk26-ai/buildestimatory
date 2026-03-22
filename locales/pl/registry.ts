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
