import type { HomeTranslations } from "@/lib/i18n/types";

const home: HomeTranslations = {
  hero: {
    titleLine1: "Ücretsiz İnşaat Malzemesi",
    titleHighlight: " Hesaplayıcıları",
    description:
      "Türk inşaatçılar ve müteahhitler için doğru malzeme tahminleri. Temelden çatıya, alışveriş listenizi saniyeler içinde oluşturun.",
    ctaPrimary: "Tüm Hesaplayıcılara Göz At",
    ctaSecondary: "Dikme Hesaplayıcı \u2192",
  },

  categories: {
    heading: "Hesaplayıcı Kategorileri",
    calculatorsCount: (count: number) => `${count} hesaplayıcı \u2192`,
  },

  popular: {
    heading: "En Popüler Hesaplayıcılar",
    items: [
      {
        href: "/calculators/wall-framing/stud-calculator",
        label: "Dikme Hesaplayıcı",
        desc: "40 cm veya 60 cm aksla, köşe ve açıklıklar dahil",
      },
      {
        href: "/calculators/roofing/shingle-calculator",
        label: "Çatı Örtüsü Hesaplayıcı",
        desc: "Her çatı alanı için gerekli paket sayısı",
      },
      {
        href: "/calculators/floor-framing/floor-joist-calculator",
        label: "Döşeme Kirişi Hesaplayıcı",
        desc: "Oda genişliği ve aralığa göre kiriş sayısı",
      },
      {
        href: "/calculators/roofing/truss-calculator",
        label: "Çatı Makası Hesaplayıcı",
        desc: "Çatı uzunluğuna göre makas sayısı",
      },
      {
        href: "/calculators/insulation-drywall/drywall-calculator",
        label: "Alçıpan Hesaplayıcı",
        desc: "Duvar ve tavanlar için gerekli levha sayısı",
      },
      {
        href: "/calculators/foundation/anchor-bolt-calculator",
        label: "Ankraj Cıvatası Hesaplayıcı",
        desc: "Temel çevresi için cıvata sayısı",
      },
    ],
  },

  valueProps: {
    heading: "Neden BuildEstimatory?",
    items: [
      {
        icon: "\u26A1",
        title: "Anında Sonuç",
        desc: "Malzeme listenizi saniyeler içinde alın \u2014 hesap oluşturmaya gerek yok.",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "TS ve TSE Standartları",
        desc: "Türk yapı standartlarına uygun: metrik ölçüler, 40 cm ve 60 cm aks aralıkları, standart levha boyutları.",
      },
      {
        icon: "\uD83D\uDED2",
        title: "Alışverişe Hazır Çıktı",
        desc: "Sonuçlar, doğrudan yapı markete götürebileceğiniz net bir alışveriş listesi olarak sunulur.",
      },
    ],
  },
};

export default home;
