import type { CommonTranslations } from "@/lib/i18n/types";

const common: CommonTranslations = {
  nav: {
    home: "Strona Główna",
    calculators: "Kalkulatory",
    allCalculators: "Wszystkie Kalkulatory",
    browseAllCalculators: "Przeglądaj Wszystkie Kalkulatory",
    toggleMenu: "Przełącz menu",
  },

  footer: {
    tagline:
      "Darmowe kalkulatory materiałów budowlanych dla polskich budowniczych, wykonawców i inwestorów indywidualnych.",
    calculatorsHeading: "Kalkulatory",
    moreToolsHeading: "Więcej Narzędzi",
    siteHeading: "Strona",
    copyright:
      "\u00A9 {year} BuildEstimatory.com \u2014 Darmowe kalkulatory budowlane dla polskich budowniczych.",
    disclaimer:
      "Wyniki są szacunkowe. Zawsze weryfikuj z uprawnionym kierownikiem budowy.",
  },

  calculator: {
    enterMeasurements: "Wprowadź Wymiary",
    calculateMaterials: "Oblicz Materiały",
    yourShoppingList: "Twoja Lista Zakupów",
    howToUseHeading: "Jak Korzystać z Tego Kalkulatora",
    aboutMaterialHeading: "O Tym Materiale",
    installationTipsHeading: "Wskazówki Montażowe",
    commonMistakesHeading: "Najczęstsze Błędy do Uniknięcia",
    faqHeading: "Najczęściej Zadawane Pytania",
    quickTipHeading: "Szybka Porada",
    quickTipBody:
      "Zawsze dodaj 10% zapasu na odpady do zamówienia materiałów. Na budowie zawsze powstają odcinki i ścinki, a brak materiału w trakcie prac jest kosztowny.",
    nextStepsHeading: "Następne Kroki:",
    copyResults: "Kopiuj Wyniki",
    copiedResults: "Skopiowano!",
    calculatorNotFound: "Nie znaleziono kalkulatora.",
    validationError: (fieldLabel: string) =>
      `Proszę wprowadzić prawidłową liczbę dla pola "${fieldLabel}".`,
  },

  breadcrumb: {
    home: "Strona Główna",
    calculators: "Kalkulatory",
  },

  notFound: {
    heading: "Strona Nie Znaleziona",
    message:
      "Strona, której szukasz, nie istnieje lub została przeniesiona.",
    backHome: "Powrót do Strony Głównej",
  },

  calculatorsIndex: {
    title: "Wszystkie Kalkulatory Budowlane",
    description:
      "{count} darmowych kalkulatorów obejmujących każdy etap budowy domu szkieletowego.",
    freeCalculatorsCount: (count: number) =>
      `${count} darmowych kalkulatorów obejmujących każdy etap budowy domu szkieletowego.`,
    viewAll: "Zobacz wszystkie \u2192",
  },

  layout: {
    defaultTitle: "BuildEstimatory \u2014 Darmowe Kalkulatory Materiałów Budowlanych",
    defaultDescription:
      "Darmowe kalkulatory materiałów budowlanych dla polskich budowniczych i wykonawców. Precyzyjne kosztorysy materiałów na konstrukcję, dach, fundament i więcej.",
    ogImageAlt: "BuildEstimatory \u2014 Darmowe Kalkulatory Materiałów Budowlanych",
  },

  categoryPage: {
    otherCategories: "Inne Kategorie Kalkulatorów",
  },

  relatedCalculators: {
    heading: "Powiązane Kalkulatory",
    viewCalculator: "Otwórz kalkulator \u2192",
  },

  clusterLinks: {
    moreCalculators: "Więcej Szczegółowych Kalkulatorów",
    moreCalculatorsDescription: "Potrzebujesz bardziej szczegółowego obliczenia? Wypróbuj jeden z tych:",
    relatedGuides: "Powiązane Poradniki",
  },

  heroAnimation: {
    quickCalculator: "Szybki Kalkulator",
    chooseCategory: "1. Wybierz Kategorię",
    selectCalculator: "2. Wybierz Kalkulator",
    enterMeasurements: "3. Wprowadź Wymiary",
    foundationPerimeter: "Obwód Fundamentu",
    foundationPerimeterUnit: "m",
    boltSpacing: "Rozstaw Kotew",
    boltSpacingUnit: "m",
    calculateMaterials: "Oblicz Materiały",
    yourShoppingList: "Twoja Lista Zakupów",
    anchorBoltCalculator: "Kalkulator Kotew Fundamentowych",
    anchorBoltResult: "13 kotew fundamentowych (rozstaw 1,80 m)",
    disclaimer: "Dodaj 10\u201315% do zamówienia jako zapas na odpady i błędy cięcia.",
    foundation: "Fundamenty",
    anchorBolt: "Kotwy Fundamentowe",
    categoryFoundation: "Fundamenty",
    categoryFloorFraming: "Konstrukcja Stropu",
    categoryWallFraming: "Konstrukcja Ścian",
    categoryRoofing: "Pokrycie Dachu",
    categoryExteriorShell: "Powłoka Zewnętrzna",
    categoryInsulationDrywall: "Izolacja i Płyty G-K",
    categoryHardware: "Okucia i Akcesoria",
    calcAnchorBolt: "Kalkulator Kotew Fundamentowych",
    calcSillSeal: "Kalkulator Uszczelki Podwalinowej",
    calcSillPlate: "Kalkulator Podwaliny Impregnowanej",
  },
};

export default common;
