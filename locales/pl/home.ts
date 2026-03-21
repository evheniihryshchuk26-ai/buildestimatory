import type { HomeTranslations } from "@/lib/i18n/types";

const home: HomeTranslations = {
  hero: {
    titleLine1: "Darmowe Kalkulatory Materiałów",
    titleHighlight: " Budowlanych",
    description:
      "Precyzyjne kosztorysy materiałów dla polskich budowniczych i wykonawców. Otrzymaj listę zakupów w kilka sekund \u2014 od fundamentu po dach.",
    ctaPrimary: "Przeglądaj Wszystkie Kalkulatory",
    ctaSecondary: "Kalkulator Słupków \u2192",
  },

  categories: {
    heading: "Kategorie Kalkulatorów",
    calculatorsCount: (count: number) => `${count} kalkulatorów \u2192`,
  },

  popular: {
    heading: "Najpopularniejsze Kalkulatory",
    items: [
      {
        href: "/calculators/wall-framing/stud-calculator",
        label: "Kalkulator Słupków Ściennych",
        desc: "Rozstaw co 40 cm lub 60 cm z narożnikami i otworami",
      },
      {
        href: "/calculators/roofing/shingle-calculator",
        label: "Kalkulator Gontów",
        desc: "Paczki potrzebne na dowolną powierzchnię dachu",
      },
      {
        href: "/calculators/floor-framing/floor-joist-calculator",
        label: "Kalkulator Belek Stropowych",
        desc: "Belki wg szerokości pomieszczenia i rozstawu",
      },
      {
        href: "/calculators/roofing/truss-calculator",
        label: "Kalkulator Wiązarów Dachowych",
        desc: "Liczba wiązarów wg długości dachu",
      },
      {
        href: "/calculators/insulation-drywall/drywall-calculator",
        label: "Kalkulator Płyt Gipsowo-Kartonowych",
        desc: "Płyty potrzebne na ściany i sufity",
      },
      {
        href: "/calculators/foundation/anchor-bolt-calculator",
        label: "Kalkulator Kotew Fundamentowych",
        desc: "Kotwy na obwód fundamentu",
      },
    ],
  },

  valueProps: {
    heading: "Dlaczego Warto Używać BuildEstimatory?",
    items: [
      {
        icon: "\u26A1",
        title: "Natychmiastowe Wyniki",
        desc: "Otrzymaj listę materiałów w kilka sekund \u2014 bez konta, bez rejestracji.",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "Polskie Normy Budowlane",
        desc: "Oparte na polskich praktykach budowlanych i normach PN-EN: rozstawy co 40 cm i 60 cm, płyty 1250x2500 mm i więcej.",
      },
      {
        icon: "\uD83D\uDED2",
        title: "Gotowa Lista Zakupów",
        desc: "Wyniki w formie czytelnej listy zakupów z ilościami i jednostkami, którą możesz zabrać do składu budowlanego.",
      },
    ],
  },
};

export default home;
