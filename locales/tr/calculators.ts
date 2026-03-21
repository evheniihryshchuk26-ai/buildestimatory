import type { CategoryMeta } from "@/content/calculators";

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Temel Hesaplayıcıları",
    description:
      "Ankraj cıvataları, eşik contası, emprenyeli eşik tahtası ve beton dahil temel işleri için malzeme hesaplama araçları.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Ankraj Cıvatası Hesaplayıcı",
        description:
          "Kaç ankraj cıvatası lazım? Standart 1,80 m aralıkla J-cıvata ve kama tipi için ücretsiz hesaplayıcı \u2014 toplam adet ve yerleşim önerileri dahil.",
        category: "Temel",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Eşik Contası Hesaplayıcı",
        description:
          "Eşik contası hesaplayıcı: Temel çevresine göre köpük conta rulosu tahmini. 9 cm ve 14 cm genişlikleri için ücretsiz araç \u2014 hava sızıntısını önler.",
        category: "Temel",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Emprenyeli Eşik Tahtası Hesaplayıcı",
        description:
          "Eşik tahtası için ne kadar emprenyeli kereste lazım? 4x9 cm ve 4x14 cm emprenye tahtalar için anında hesaplayıcı \u2014 metre ve adet bilgisi verir.",
        category: "Temel",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Beton Hesaplayıcı",
        description:
          "Ne kadar beton lazım? Plak, temel ve kolon için ücretsiz hesaplayıcı \u2014 metreküp, çimento torbası sayısı ve fire payı dahil.",
        category: "Temel",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Beton Plak Hesaplayıcı",
        description:
          "Plak için ne kadar beton lazım? Garaj, teras ve giriş yolu plakları için ücretsiz hesaplayıcı \u2014 her kalınlık için metreküp ve torba sayısı verir.",
        category: "Temel",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Beton Temel Ayağı Hesaplayıcı",
        description:
          "Beton temel ayağı hesaplayıcı: Sürekli ve münferit temeller için metreküp tahmini. Temel duvarları için ücretsiz araç \u2014 fire payı dahil.",
        category: "Temel",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Beton Kolon Hesaplayıcı",
        description:
          "Kolonlar için ne kadar beton lazım? 20 cm, 25 cm ve 30 cm çapında ayaklar için ücretsiz kolon hesaplayıcı \u2014 kolon başına ve toplam metreküp verir.",
        category: "Temel",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Beton Merdiven Hesaplayıcı",
        description:
          "Beton merdiven hesaplayıcı: Merdiven basamakları için kaç metreküp beton gerekli? Ücretsiz araç \u2014 genişlik, rıht, basamak ve adım sayısı girin.",
        category: "Temel",
        categorySlug: "foundation",
      },
    ],
  },
  {
    slug: "floor-framing",
    title: "Döşeme Karkas Hesaplayıcıları",
    description:
      "Çevre kirişi, döşeme kirişi, çapraz destek, yapıştırıcı ve OSB paneller dahil tüm döşeme karkas malzemelerinin tahmini.",
    calculators: [
      { slug: "rim-joist-calculator", title: "Çevre Kirişi Hesaplayıcı", description: "Çevre kirişi hesaplayıcı: Döşeme çevreniz için kaç tahta lazım? 4x19 cm, 4x24 cm ve 4x29 cm için ücretsiz araç \u2014 tahta adedi ve metre cinsinden sonuç.", category: "Döşeme Karkas", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Döşeme Kirişi Hesaplayıcı", description: "Döşeme kirişi hesaplayıcı: Açıklık ve aralığa göre kiriş tahmini. 40 cm veya 60 cm aks için ücretsiz boyutlandırma aracı \u2014 toplam kiriş sayısı dahil.", category: "Döşeme Karkas", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Çapraz Destek Hesaplayıcı", description: "Kaç sıra çapraz destek lazım? Kiriş açıklığına göre ahşap çapraz ve masif blok için ücretsiz hesaplayıcı \u2014 anında sonuç.", category: "Döşeme Karkas", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Alt Döşeme Yapıştırıcı Hesaplayıcı", description: "Alt döşeme yapıştırıcı hesaplayıcı: Kaç tüp inşaat yapıştırıcısı lazım? Döşeme alanına göre ücretsiz tahmin aracı \u2014 300 ml ve 600 ml kartuşları kapsar.", category: "Döşeme Karkas", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "OSB Panel Hesaplayıcı", description: "Kaç OSB levha lazım? 125x250 cm alt döşeme panelleri için ücretsiz hesaplayıcı \u2014 fireyi hesaba katar ve levha sayısını anında verir.", category: "Döşeme Karkas", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Duvar Karkas Hesaplayıcıları",
    description:
      "Her türlü duvar yapılandırması için alt ve üst aşıklar, dikmeler, lentolar ve kaplama dahil tüm duvar karkas kerestesinin hesaplanması.",
    calculators: [
      { slug: "stud-calculator", title: "Dikme Hesaplayıcı", description: "Kaç dikme lazım? 40 cm ve 60 cm aks aralığı için ücretsiz duvar dikme hesaplayıcı \u2014 köşe, kapı ve pencere açıklıkları için ekstralar dahil.", category: "Duvar Karkas", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Alt Aşık Hesaplayıcı", description: "Alt aşık hesaplayıcı: Duvar uzunluğuna göre 4x9 cm veya 4x14 cm taban aşığı tahmini. Tahta adedi ve toplam metre veren ücretsiz araç.", category: "Duvar Karkas", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Üst Aşık Hesaplayıcı", description: "Çift üst aşık için ne kadar kereste lazım? 4x9 cm ve 4x14 cm duvarlar için ücretsiz hesaplayıcı \u2014 bindirme payı dahil kesin tahta sayısı verir.", category: "Duvar Karkas", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Lento Hesaplayıcı", description: "Lento hesaplayıcı: Açıklığım için hangi boyutta lento gerekli? Kapı ve pencere açıklıkları için ücretsiz araç \u2014 4x14, 4x19, 4x24 ve 4x29 cm lentoları kapsar.", category: "Duvar Karkas", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Dış Kaplama Hesaplayıcı", description: "Dış duvarlar için kaç levha kaplama lazım? 125x250 cm OSB ve kontrplak paneller için ücretsiz hesaplayıcı \u2014 fire payı tahminleri dahil.", category: "Duvar Karkas", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Çatı Hesaplayıcıları",
    description:
      "Çatı makasları ve mertek kirişlerinden çatı örtüsü ve su yalıtım örtüsüne kadar tüm çatı malzemelerinin tahmini.",
    calculators: [
      { slug: "truss-calculator", title: "Çatı Makası Hesaplayıcı", description: "Kaç çatı makası lazım? 60 cm standart aks aralığı için ücretsiz hesaplayıcı \u2014 çatı uzunluğunu girin, makas sayısını ve yerleşimi anında alın.", category: "Çatı", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Mertek Hesaplayıcı", description: "Mertek hesaplayıcı: Çatı uzunluğu ve aralığa göre mertek sayısı tahmini. 40 cm ve 60 cm aks için ücretsiz araç \u2014 beşik ve kırma çatılar için çalışır.", category: "Çatı", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Mahya Tahtası Hesaplayıcı", description: "Mahya tahtası hesaplayıcı: Çatı tepesi için kaç tahta lazım? 4x19, 4x24 ve 4x29 cm mahya tahtaları için ücretsiz araç \u2014 uzunluk ve adet bilgisi verir.", category: "Çatı", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Çatı Kaplama Hesaplayıcı", description: "Çatımı kaplamak için kaç OSB levha lazım? 125x250 cm paneller için ücretsiz çatı altlık hesaplayıcı \u2014 çatı eğimini ve fire yüzdesini hesaba katar.", category: "Çatı", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Çatı Örtüsü Hesaplayıcı", description: "Çatı örtüsü hesaplayıcı: Kaç paket shingle lazım? 3 dilimli ve mimari shingle'lar için ücretsiz tahmin aracı \u2014 metrekareyi pakete çevirir.", category: "Çatı", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Çatı Altlık Örtüsü Hesaplayıcı", description: "Kaç rulo çatı altlık örtüsü lazım? Keçe ve sentetik örtüler için ücretsiz hesaplayıcı \u2014 bindirme ve fire payını hesaba katar.", category: "Çatı", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Damlalık Profili Hesaplayıcı", description: "Damlalık profili hesaplayıcı: Çatınız için kaç metre saçak profili gerekli? Ücretsiz araç \u2014 standart 3 m'lik profil adetini verir.", category: "Çatı", categorySlug: "roofing" },
      { slug: "roof-pitch-calculator", title: "Çatı Eğimi Hesaplayıcı", description: "Çatımın eğimi ne? Ücretsiz çatı eğimi hesaplayıcı \u2014 yükseliş ve yatay mesafeyi girin, açı, eğim yüzdesi ve alan çarpanını anında alın.", category: "Çatı", categorySlug: "roofing" },
      { slug: "roof-area-calculator", title: "Çatı Alanı Hesaplayıcı", description: "Çatı alanı hesaplayıcı: Düz boyutları gerçek çatı alanına dönüştürün. Ücretsiz araç \u2014 eğim çarpanını hesaba katar, metrekare sonucu verir.", category: "Çatı", categorySlug: "roofing" },
      { slug: "roof-slope-calculator", title: "Çatı Meyil Hesaplayıcı", description: "Çatım ne kadar dik? Ücretsiz meyil hesaplayıcı \u2014 yükseliş ve yatay mesafeyi ölçerek eğim oranı, açı ve önerilen çatı malzemesi tipini alın.", category: "Çatı", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Dış Cephe Hesaplayıcıları",
    description:
      "Rüzgar bariyeri, dış cephe kaplaması, derz bandı ve pencere çevresi su yalıtım bandı hesaplama araçları.",
    calculators: [
      { slug: "housewrap-calculator", title: "Rüzgar Bariyeri Hesaplayıcı", description: "Kaç rulo rüzgar bariyeri lazım? Duvar alanına göre ücretsiz hesaplayıcı \u2014 1 m, 1,5 m ve 3 m rulo genişliklerini ve bindirmeyi kapsar.", category: "Dış Cephe", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Vinil Cephe Kaplaması Hesaplayıcı", description: "Vinil cephe kaplaması hesaplayıcı: Duvar metrekaresine göre panel tahmini. Kapı, pencere çıkıntıları ve %10 fire payını hesaba katan ücretsiz araç.", category: "Dış Cephe", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Fiber Çimento Cephe Kaplaması Hesaplayıcı", description: "Kaç fiber çimento levha lazım? Eternit ve benzeri levhalar için ücretsiz hesaplayıcı \u2014 20 cm ve 15 cm görünür yüzey ile fire dahil.", category: "Dış Cephe", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Pencere Su Yalıtım Bandı Hesaplayıcı", description: "Pencere su yalıtım bandı hesaplayıcı: Tüm açıklıklar için metre cinsinden tahmin. 10 cm, 15 cm ve 22 cm genişlikte yapışkanlı bantlar için ücretsiz araç.", category: "Dış Cephe", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Yalıtım ve Alçıpan Hesaplayıcıları",
    description:
      "İç mekan bitiş işleri için yalıtım şiltesi, su buharı bariyeri, alçıpan levha, vida ve derz macunu tahmini.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Boşluk Yalıtımı Hesaplayıcı", description: "Kaç yalıtım şiltesi lazım? Taş yünü ve cam yünü için ücretsiz hesaplayıcı \u2014 4x9 cm ve 4x14 cm duvar boşluklarını anında kapsar.", category: "Yalıtım ve Alçıpan", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Alçıpan Levha Hesaplayıcı", description: "Ne kadar alçıpan lazım? 12,5 mm ve 15 mm levhalar için ücretsiz hesaplayıcı \u2014 120x250 cm ve 120x300 cm panellerin duvar ve tavan tahminini yapar.", category: "Yalıtım ve Alçıpan", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Alçıpan Vidası Hesaplayıcı", description: "Alçıpan vidası hesaplayıcı: Levha başına kaç vida lazım? 25 mm ve 35 mm vidalar için ücretsiz tahmin aracı \u2014 toplam adet ve kutu sayısı verir.", category: "Yalıtım ve Alçıpan", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Derz Macunu Hesaplayıcı", description: "Ne kadar derz macunu lazım? Alçıpan bitirme işleri için ücretsiz macun hesaplayıcı \u2014 bantlama, dolgu ve perdah katları için kova sayısı tahmini.", category: "Yalıtım ve Alçıpan", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Bağlantı Elemanları Hesaplayıcıları",
    description:
      "Karkas çivileri, kaplama çivileri, kiriş askıları, fırtına bağlantıları ve diğer yapısal donanım hesaplamaları.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Karkas Çivisi Hesaplayıcı", description: "Karkas çivisi hesaplayıcı: Projem için kaç kilo çivi lazım? Dikme sayısına göre 8 cm ve 6 cm çiviler için ücretsiz araç.", category: "Bağlantı Elemanları", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Kiriş Askısı Hesaplayıcı", description: "Kaç kiriş askısı lazım? Döşeme ve tavan kiriş çerçevelemesi için ücretsiz hesaplayıcı \u2014 çeşitli bağlantı elemanı tiplerini kapsar.", category: "Bağlantı Elemanları", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Fırtına Bağlantısı Hesaplayıcı", description: "Fırtına bağlantısı hesaplayıcı: Rüzgar direnci için mertek-duvar bağlantı elemanı tahmini. Çeşitli bağlantı tipleri için ücretsiz araç.", category: "Bağlantı Elemanları", categorySlug: "hardware" },
      { slug: "lumber-cost-calculator", title: "Kereste Maliyet Hesaplayıcı", description: "Kereste ne kadar tutar? 4x9, 4x14, 4x19 cm ve daha fazlası için ücretsiz hesaplayıcı \u2014 adet ve güncel fiyatlarla toplam maliyeti tahmin eder.", category: "Bağlantı Elemanları", categorySlug: "hardware" },
      { slug: "board-feet-calculator", title: "Kereste Hacmi Hesaplayıcı", description: "Kereste hacmi hesaplayıcı: Kereste boyutlarını metreküpe dönüştürün. Sert ağaç fiyatlandırması için ücretsiz araç \u2014 anında hacim ve maliyet tahmini.", category: "Bağlantı Elemanları", categorySlug: "hardware" },
      { slug: "plywood-calculator", title: "Kontrplak Hesaplayıcı", description: "Kaç kontrplak levha lazım? 4 mm ile 18 mm arası paneller için ücretsiz hesaplayıcı \u2014 levha sayısı ve maliyet tahmini verir.", category: "Bağlantı Elemanları", categorySlug: "hardware" },
    ],
  },
  {
    slug: "finishing",
    title: "Boya ve Bitirme Hesaplayıcıları",
    description:
      "İç ve dış yüzeyler için boya, astar, vernik ve bitirme malzemeleri hesaplama araçları.",
    calculators: [
      {
        slug: "paint-coverage-calculator",
        title: "Boya Kaplama Hesaplayıcı",
        description:
          "Ne kadar boya lazım? Duvar ve tavan için ücretsiz kaplama hesaplayıcı \u2014 kat sayısını hesaba katar, litre ve teneke sayısı verir.",
        category: "Boya ve Bitirme",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Boya Maliyet Hesaplayıcı",
        description:
          "Boya maliyet hesaplayıcı: Kalite seviyesine göre toplam proje maliyeti tahmini. Ekonomikten premium'a ücretsiz araç \u2014 malzeme tahmini dahil.",
        category: "Boya ve Bitirme",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Astar Hesaplayıcı",
        description:
          "Ne kadar astar lazım? Yeni alçıpan, ahşap ve boyama yenileme için ücretsiz hesaplayıcı \u2014 yüzey tipine göre kaplamayı ayarlar.",
        category: "Boya ve Bitirme",
        categorySlug: "finishing",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Dış Mekan Hesaplayıcıları",
    description:
      "Verandalar, teraslar, çitler ve dış mekan yapıları için malzeme hesaplama araçları.",
    calculators: [
      {
        slug: "deck-board-calculator",
        title: "Veranda Tahtası Hesaplayıcı",
        description:
          "Kaç veranda tahtası lazım? Emprenye, sedir ve kompozit tahtalar için ücretsiz hesaplayıcı \u2014 tahta adedi, metre ve fire payı verir.",
        category: "Dış Mekan",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Veranda Temel Ayağı Hesaplayıcı",
        description:
          "Veranda temel ayağı hesaplayıcı: Verandam için kaç beton ayak lazım? Ücretsiz araç \u2014 ayak sayısı, direk yerleşimi ve kiriş aralığı verir.",
        category: "Dış Mekan",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Veranda Korkuluğu Hesaplayıcı",
        description:
          "Kaç korkuluk direği ve tırabzan lazım? Ücretsiz veranda korkuluğu hesaplayıcı \u2014 direk sayısı, babalar ve korkuluk metre sayısı verir.",
        category: "Dış Mekan",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Veranda Merdiven Hesaplayıcı",
        description:
          "Veranda merdiven hesaplayıcı: Kaç basamak ve merdiven kirişi lazım? Ücretsiz araç \u2014 veranda yüksekliğini girin, basamak sayısı, kiriş adedi ve basamak tahtalarını alın.",
        category: "Dış Mekan",
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
