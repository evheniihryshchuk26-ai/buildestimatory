import type { CommonTranslations } from "@/lib/i18n/types";

const common: CommonTranslations = {
  nav: {
    home: "Ana Sayfa",
    calculators: "Hesaplayıcılar",
    allCalculators: "Tüm Hesaplayıcılar",
    browseAllCalculators: "Tüm Hesaplayıcılara Göz At",
    toggleMenu: "Menüyü aç/kapat",
  },

  footer: {
    tagline:
      "Türk müteahhitler, inşaat ustaları ve kendin yap meraklıları için ücretsiz inşaat malzemesi hesaplayıcıları.",
    calculatorsHeading: "Hesaplayıcılar",
    moreToolsHeading: "Diğer Araçlar",
    siteHeading: "Site",
    copyright:
      "\u00A9 {year} BuildEstimatory.com \u2014 Türk inşaatçılar için ücretsiz hesaplayıcılar.",
    disclaimer:
      "Sonuçlar tahminidir. Her zaman yetkili bir müteahhit ile doğrulayın.",
  },

  calculator: {
    enterMeasurements: "Ölçüleri Girin",
    calculateMaterials: "Malzemeleri Hesapla",
    yourShoppingList: "Alışveriş Listeniz",
    howToUseHeading: "Bu Hesaplayıcı Nasıl Kullanılır",
    aboutMaterialHeading: "Bu Malzeme Hakkında",
    installationTipsHeading: "Montaj İpuçları",
    commonMistakesHeading: "Sık Yapılan Hatalar",
    faqHeading: "Sıkça Sorulan Sorular",
    quickTipHeading: "Hızlı İpucu",
    quickTipBody:
      "Malzeme siparişlerinize her zaman %10 fire payı ekleyin. İnşaatta mutlaka artık parçalar çıkar ve proje ortasında malzeme eksikliği maliyetli olur.",
    nextStepsHeading: "Sonraki Adımlar:",
    calculatorNotFound: "Hesaplayıcı bulunamadı.",
    validationError: (fieldLabel: string) =>
      `Lütfen "${fieldLabel}" için geçerli bir sayı girin.`,
  },

  breadcrumb: {
    home: "Ana Sayfa",
    calculators: "Hesaplayıcılar",
  },

  notFound: {
    heading: "Sayfa Bulunamadı",
    message:
      "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    backHome: "Ana Sayfaya Dön",
  },

  calculatorsIndex: {
    title: "Tüm İnşaat Hesaplayıcıları",
    description:
      "Ahşap karkas yapının her aşamasını kapsayan {count} ücretsiz hesaplayıcı.",
    freeCalculatorsCount: (count: number) =>
      `Ahşap karkas yapının her aşamasını kapsayan ${count} ücretsiz hesaplayıcı.`,
    viewAll: "Tümünü gör \u2192",
  },

  layout: {
    defaultTitle: "BuildEstimatory \u2014 Ücretsiz İnşaat Malzemesi Hesaplayıcıları",
    defaultDescription:
      "Türk inşaatçılar ve müteahhitler için ücretsiz inşaat malzemesi hesaplayıcıları. Temel, çatı, duvar ve daha fazlası için doğru malzeme tahminleri alın.",
    ogImageAlt: "BuildEstimatory \u2014 Ücretsiz İnşaat Malzemesi Hesaplayıcıları",
  },

  categoryPage: {
    otherCategories: "Diğer Hesaplayıcı Kategorileri",
  },

  relatedCalculators: {
    heading: "İlgili Hesaplayıcılar",
    viewCalculator: "Hesaplayıcıyı aç \u2192",
  },

  clusterLinks: {
    moreCalculators: "Daha Fazla Hesaplayıcı",
    moreCalculatorsDescription: "Daha spesifik bir hesaplama mı lazım? Şunlardan birini deneyin:",
    relatedGuides: "İlgili Kılavuzlar",
  },

  heroAnimation: {
    quickCalculator: "Hızlı Hesaplayıcı",
    chooseCategory: "1. Kategori Seçin",
    selectCalculator: "2. Hesaplayıcı Seçin",
    enterMeasurements: "3. Ölçüleri Girin",
    foundationPerimeter: "Temel Çevresi",
    foundationPerimeterUnit: "m",
    boltSpacing: "Cıvata Aralığı",
    boltSpacingUnit: "m",
    calculateMaterials: "Malzemeleri Hesapla",
    yourShoppingList: "Alışveriş Listeniz",
    anchorBoltCalculator: "Ankraj Cıvatası Hesaplayıcı",
    anchorBoltResult: "13 ankraj cıvatası (3 m aralıkla)",
    disclaimer: "Kesim ve hata payı olarak siparişinize %10\u201315 ek malzeme ekleyin.",
    foundation: "Temel",
    anchorBolt: "Ankraj Cıvatası",
    categoryFoundation: "Temel",
    categoryFloorFraming: "Döşeme Karkas",
    categoryWallFraming: "Duvar Karkas",
    categoryRoofing: "Çatı",
    categoryExteriorShell: "Dış Cephe",
    categoryInsulationDrywall: "Yalıtım ve Alçıpan",
    categoryHardware: "Bağlantı Elemanları",
    calcAnchorBolt: "Ankraj Cıvatası Hesaplayıcı",
    calcSillSeal: "Eşik Contası Hesaplayıcı",
    calcSillPlate: "Emprenyeli Eşik Tahtası Hesaplayıcı",
  },
};

export default common;
