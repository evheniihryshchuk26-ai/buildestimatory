// French (France) — All categories and calculator metadata
// Slugs remain in English for URL compatibility

export interface CalculatorMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
}

export interface CategoryMeta {
  slug: string;
  title: string;
  description: string;
  calculators: CalculatorMeta[];
}

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Calculateurs de fondations",
    description:
      "Calculez les matériaux pour les travaux de fondation en béton : tiges d'ancrage, bande d'arase, lisses basses traitées et béton.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Calculateur de tiges d'ancrage",
        description:
          "Combien de tiges d'ancrage faut-il ? Calculateur gratuit pour tiges filetées type J et chimiques avec espacement standard de 1,80 m — total et répartition inclus.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Calculateur de bande d'arase",
        description:
          "Calculateur de bande d'arase : estimez les rouleaux de joint mousse par périmètre de fondation. Outil gratuit pour largeurs de 90 mm et 140 mm avec recouvrement.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Calculateur de lisse basse traitée",
        description:
          "Combien de bois traité pour la lisse basse ? Calculateur instantané pour sections de 45×95 mm et 45×145 mm — mètres linéaires et nombre de pièces.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Calculateur de béton",
        description:
          "Combien de béton faut-il ? Calculateur gratuit pour dalles, semelles et poteaux — donne les mètres cubes et le nombre de sacs avec facteur de perte.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Calculateur de dalle béton",
        description:
          "Combien de béton pour une dalle ? Calculateur gratuit pour garage, terrasse et allée — mètres cubes et nombre de sacs pour toute épaisseur.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Calculateur de semelle de fondation",
        description:
          "Calculateur de semelles : estimez les mètres cubes pour semelles filantes et isolées. Outil gratuit pour murs de fondation — facteur de perte inclus.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Calculateur de poteau béton",
        description:
          "Combien de béton pour des poteaux ? Calculateur gratuit pour diamètres de 200, 250 et 300 mm — m³ par poteau et total instantané.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Calculateur d'escalier béton",
        description:
          "Calculateur d'escalier béton : combien de mètres cubes pour un escalier ? Outil gratuit — saisissez largeur, giron, hauteur de marche et nombre de marches.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "gravel-calculator",
        title: "Calculateur de gravier",
        description:
          "Combien de gravier me faut-il ? Calculateur gratuit pour toute surface — mètres cubes, tonnes et estimation du coût avec 10 % de perte.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "driveway-gravel-calculator",
        title: "Calculateur de gravier pour allée",
        description:
          "Calculateur de gravier pour allée carrossable : estimez tonnes et coût par type — gravier concassé, gravier roulé, grave ou granit décomposé.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "block-fill-calculator",
        title: "Calculateur de remplissage de blocs",
        description:
          "Calculateur de remplissage de blocs — combien de béton pour remplir des parpaings ? Outil gratuit pour blocs de 20, 25 et 30 cm. Mètres cubes et nombre de sacs instantanément.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "mortar-mix-calculator",
        title: "Calculateur de Mortier",
        description:
          "Calculateur de mortier — outil gratuit pour estimer les sacs de mortier pour parpaings, briques & pierre. Types N, S & M avec options d'épaisseur de joint.",
        category: "Fondations",
        categorySlug: "foundation",
      },
      {
        slug: "retaining-wall-calculator",
        title: "Calculateur de Mur de Soutènement",
        description:
          "Calculateur de mur de soutènement — outil gratuit pour murs en blocs, parpaings & pierre. Nombre de blocs, chaperons, gravier de remblai & drainage instantanément.",
        category: "Fondations",
        categorySlug: "foundation",
      },
    ],
  },
  {
    slug: "floor-framing",
    title: "Calculateurs de plancher",
    description:
      "Estimez tous les matériaux de solivage : solives de rive, solives courantes, entretoises, colle de plancher et panneaux OSB.",
    calculators: [
      {
        slug: "rim-joist-calculator",
        title: "Calculateur de solive de rive",
        description:
          "Calculateur de solive de rive : combien de pièces pour le périmètre du plancher ? Outil gratuit pour sections 45×200, 45×250 et 45×300 mm — nombre et mètres linéaires.",
        category: "Plancher",
        categorySlug: "floor-framing",
      },
      {
        slug: "floor-joist-calculator",
        title: "Calculateur de solives",
        description:
          "Calculateur de solives gratuit — estimez le nombre, la section et l'entraxe selon la portée. Pour 40 cm et 60 cm, résultat instantané.",
        category: "Plancher",
        categorySlug: "floor-framing",
      },
      {
        slug: "bridging-calculator",
        title: "Calculateur d'entretoises",
        description:
          "Combien de rangées d'entretoises faut-il ? Calculateur gratuit pour entretoises croisées et blocage massif selon la portée des solives.",
        category: "Plancher",
        categorySlug: "floor-framing",
      },
      {
        slug: "subfloor-adhesive-calculator",
        title: "Calculateur de colle de plancher",
        description:
          "Combien de cartouches de colle de plancher ? Estimateur gratuit selon la surface du plancher — couvre les cartouches de 310 ml et 828 ml.",
        category: "Plancher",
        categorySlug: "floor-framing",
      },
      {
        slug: "osb-panel-calculator",
        title: "Calculateur de panneaux OSB",
        description:
          "Combien de panneaux OSB faut-il ? Calculateur gratuit pour panneaux 2500×1250 mm — tient compte des chutes et donne le nombre exact de panneaux.",
        category: "Plancher",
        categorySlug: "floor-framing",
      },
    ],
  },
  {
    slug: "wall-framing",
    title: "Calculateurs d'ossature murale",
    description:
      "Calculez tous les bois d'ossature murale : lisses, montants, linteaux et voile travaillant pour toute configuration de mur.",
    calculators: [
      {
        slug: "stud-calculator",
        title: "Calculateur de montants",
        description:
          "Combien de montants faut-il ? Calculateur gratuit pour entraxe de 40 cm et 60 cm — inclut les suppléments pour angles, portes et fenêtres.",
        category: "Ossature murale",
        categorySlug: "wall-framing",
      },
      {
        slug: "bottom-plate-calculator",
        title: "Calculateur de lisse basse",
        description:
          "Calculateur de lisse basse : estimez les pièces de 45×95 mm ou 45×145 mm par longueur de mur. Outil gratuit avec mètres linéaires et nombre de pièces.",
        category: "Ossature murale",
        categorySlug: "wall-framing",
      },
      {
        slug: "top-plate-calculator",
        title: "Calculateur de lisse haute",
        description:
          "Combien de bois pour la double lisse haute ? Calculateur gratuit pour murs de 45×95 et 45×145 mm — nombre exact de pièces avec décalage inclus.",
        category: "Ossature murale",
        categorySlug: "wall-framing",
      },
      {
        slug: "header-calculator",
        title: "Calculateur de linteaux",
        description:
          "Calculateur de linteaux : quelle section pour mon ouverture ? Outil gratuit pour baies de portes et fenêtres — 45×150, 45×200 et 45×250 mm.",
        category: "Ossature murale",
        categorySlug: "wall-framing",
      },
      {
        slug: "exterior-sheathing-calculator",
        title: "Calculateur de voile travaillant",
        description:
          "Combien de panneaux de contreventement pour les murs extérieurs ? Calculateur gratuit pour OSB et contreplaqué — facteur de perte inclus.",
        category: "Ossature murale",
        categorySlug: "wall-framing",
      },
    ],
  },
  {
    slug: "roofing",
    title: "Calculateurs de couverture",
    description:
      "Estimez tous les matériaux de toiture : fermettes, chevrons, bardeaux, écran sous-toiture et rive d'égout.",
    calculators: [
      {
        slug: "truss-calculator",
        title: "Calculateur de fermettes",
        description:
          "Calculateur de fermettes gratuit — combien de fermettes pour mon toit ? Entraxe standard de 60 cm. Saisissez la longueur et obtenez le total.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "rafter-calculator",
        title: "Calculateur de chevrons",
        description:
          "Calculateur de chevrons gratuit — longueur, nombre et entraxe pour toute pente de toit. 40 et 60 cm entre axes, résultat instantané.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "ridge-board-calculator",
        title: "Calculateur de faîtage",
        description:
          "Calculateur de planche de faîtage : combien de pièces pour mon faîte ? Outil gratuit pour sections 45×200, 45×250 et 45×300 mm — longueur et nombre.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "roof-sheathing-calculator",
        title: "Calculateur de voligeage",
        description:
          "Combien de panneaux OSB pour le voligeage ? Calculateur de support de couverture pour panneaux 2500×1250 mm — pente et chutes pris en compte.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "shingle-calculator",
        title: "Calculateur de bardeaux",
        description:
          "Calculateur de bardeaux gratuit — combien de paquets faut-il ? Pour bardeaux bitumés et architecturaux. Convertit les m² en paquets au clic.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "underlayment-calculator",
        title: "Calculateur d'écran sous-toiture",
        description:
          "Combien de rouleaux d'écran sous-toiture ? Calculateur gratuit pour feutre bitumé et écran synthétique HPV — recouvrement et chutes pris en compte.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "drip-edge-calculator",
        title: "Calculateur de rive d'égout",
        description:
          "Calculateur de rive d'égout : estimez les mètres linéaires de larmier. Outil gratuit — donne le nombre de profils pour bandes standard de 2 m.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "roof-pitch-calculator",
        title: "Calculateur de pente de toit",
        description:
          "Quelle est la pente de mon toit ? Calculateur gratuit — saisissez la hauteur et la portée pour obtenir l'angle, le pourcentage et le coefficient de surface.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "roof-area-calculator",
        title: "Calculateur de surface de toiture",
        description:
          "Calculateur de surface de toiture gratuit — convertissez les dimensions au sol en surface réelle de couverture. Coefficient de pente et m² inclus.",
        category: "Couverture",
        categorySlug: "roofing",
      },
      {
        slug: "roof-slope-calculator",
        title: "Calculateur d'inclinaison de toit",
        description:
          "Calculateur d'inclinaison de toit gratuit — mesurez hauteur et course pour obtenir le ratio de pente, l'angle et le matériau de couverture.",
        category: "Couverture",
        categorySlug: "roofing",
      },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Calculateurs d'enveloppe extérieure",
    description:
      "Calculez le pare-pluie, le bardage, les bavettes et le ruban d'étanchéité pour l'enveloppe de votre maison.",
    calculators: [
      {
        slug: "housewrap-calculator",
        title: "Calculateur de pare-pluie",
        description:
          "Combien de rouleaux de pare-pluie faut-il ? Calculateur gratuit par surface de mur — couvre les largeurs de 1 m, 1,5 m et 2,7 m avec recouvrement.",
        category: "Enveloppe extérieure",
        categorySlug: "exterior-shell",
      },
      {
        slug: "vinyl-siding-calculator",
        title: "Calculateur de bardage PVC",
        description:
          "Calculateur de bardage PVC gratuit — entrez les m² de mur pour obtenir le nombre exact de lames. Déduit portes, fenêtres et ajoute 10 % de chutes.",
        category: "Enveloppe extérieure",
        categorySlug: "exterior-shell",
      },
      {
        slug: "hardie-siding-calculator",
        title: "Calculateur de bardage fibrociment",
        description:
          "Combien de lames de fibrociment faut-il ? Calculateur gratuit type Eternit/Cedral pour pureau de 16 cm et 21 cm — chutes incluses.",
        category: "Enveloppe extérieure",
        categorySlug: "exterior-shell",
      },
      {
        slug: "window-flashing-calculator",
        title: "Calculateur de bavette de fenêtre",
        description:
          "Calculateur de bande d'étanchéité : estimez les mètres linéaires de membrane auto-adhésive pour fenêtres. Outil gratuit pour largeurs de 100, 150 et 225 mm.",
        category: "Enveloppe extérieure",
        categorySlug: "exterior-shell",
      },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Calculateurs d'isolation et plâtrerie",
    description:
      "Estimez les rouleaux d'isolant, le frein-vapeur, les plaques de plâtre, les vis et l'enduit de finition.",
    calculators: [
      {
        slug: "cavity-insulation-calculator",
        title: "Calculateur d'isolant en cavité",
        description:
          "Combien de rouleaux d'isolant faut-il ? Calculateur gratuit pour R=3,15 à R=5,5 — couvre les ossatures de 45×95 et 45×145 mm.",
        category: "Isolation et plâtrerie",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-calculator",
        title: "Calculateur de plaques de plâtre",
        description:
          "Combien de plaques de plâtre faut-il ? Calculateur gratuit pour BA13 et BA18 — estime les plaques 2500×1200 mm pour murs et plafonds.",
        category: "Isolation et plâtrerie",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-screw-calculator",
        title: "Calculateur de vis à placo",
        description:
          "Calculateur de vis à placo : combien de vis par plaque ? Estimateur gratuit pour vis de 25 mm et 35 mm — total et boîtes nécessaires.",
        category: "Isolation et plâtrerie",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "joint-compound-calculator",
        title: "Calculateur d'enduit de jointement",
        description:
          "Combien d'enduit à joint faut-il ? Calculateur gratuit pour finition des plaques de plâtre — estime les seaux pour bande, couche de base et finition.",
        category: "Isolation et plâtrerie",
        categorySlug: "insulation-drywall",
      },
    ],
  },
  {
    slug: "hardware",
    title: "Calculateurs de quincaillerie",
    description:
      "Calculez les pointes de charpente, les sabots de solive, les équerres anti-tempête et autre quincaillerie structurelle.",
    calculators: [
      {
        slug: "framing-nail-calculator",
        title: "Calculateur de pointes de charpente",
        description:
          "Calculateur de pointes : combien de kilogrammes de pointes pour mon chantier ? Outil gratuit pour pointes lisses et annelées — basé sur le nombre de montants.",
        category: "Quincaillerie",
        categorySlug: "hardware",
      },
      {
        slug: "joist-hanger-calculator",
        title: "Calculateur de sabots de solive",
        description:
          "Combien de sabots de solive faut-il ? Calculateur gratuit pour connecteurs Simpson Strong-Tie — couvre le solivage de plancher et de plafond.",
        category: "Quincaillerie",
        categorySlug: "hardware",
      },
      {
        slug: "hurricane-tie-calculator",
        title: "Calculateur d'équerres anti-tempête",
        description:
          "Calculateur d'équerres anti-tempête : estimez les connecteurs chevron-mur pour la résistance au vent. Outil gratuit pour équerres Simpson HTT et A35.",
        category: "Quincaillerie",
        categorySlug: "hardware",
      },
      {
        slug: "lumber-cost-calculator",
        title: "Calculateur de coût du bois",
        description:
          "Combien coûte le bois de charpente ? Calculateur gratuit pour sections 45×95, 45×145, 45×200 et plus — estime le coût total par quantité et prix courants.",
        category: "Quincaillerie",
        categorySlug: "hardware",
      },
      {
        slug: "board-feet-calculator",
        title: "Calculateur de cubage bois",
        description:
          "Calculateur de cubage bois gratuit — convertissez les dimensions en board feet. Pour le chiffrage du bois massif avec cubage et coût instantanés.",
        category: "Quincaillerie",
        categorySlug: "hardware",
      },
      {
        slug: "plywood-calculator",
        title: "Calculateur de contreplaqué",
        description:
          "Calculateur de contreplaqué gratuit — combien de panneaux faut-il ? Pour épaisseurs de 6 à 18 mm. Nombre de panneaux et estimation du coût.",
        category: "Quincaillerie",
        categorySlug: "hardware",
      },
    ],
  },
  {
    slug: "finishing",
    title: "Calculateurs de finitions",
    description:
      "Calculez la peinture, le primaire, la lasure et les matériaux de finition pour surfaces intérieures et extérieures.",
    calculators: [
      {
        slug: "paint-coverage-calculator",
        title: "Calculateur de rendement peinture",
        description:
          "Calculateur de rendement peinture gratuit — combien de litres faut-il ? Pour murs et plafonds. Tient compte des couches, donne litres et pots.",
        category: "Finitions",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Calculateur de coût de peinture",
        description:
          "Calculateur de coût de peinture gratuit — estimez le budget total par gamme de qualité. De l'entrée de gamme au premium, fournitures incluses.",
        category: "Finitions",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Calculateur de primaire d'accrochage",
        description:
          "Combien de primaire faut-il ? Calculateur gratuit pour plaque de plâtre neuve, bois et rénovation — ajuste le rendement par type de surface.",
        category: "Finitions",
        categorySlug: "finishing",
      },
      {
        slug: "epoxy-calculator",
        title: "Calculateur d'Époxy",
        description:
          "Calculateur d'époxy — combien d'époxy pour votre sol de garage ? Outil gratuit pour toute surface. Litres, kits & estimation de coût pour 1 ou 2 couches.",
        category: "Finitions",
        categorySlug: "finishing",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Calculateurs extérieurs",
    description:
      "Calculez les matériaux pour terrasses bois, patios, clôtures et structures extérieures.",
    calculators: [
      {
        slug: "deck-board-calculator",
        title: "Calculateur de lames de terrasse",
        description:
          "Combien de lames de terrasse faut-il ? Calculateur gratuit pour bois traité, pin Douglas et composite — nombre de lames, mètres linéaires et chutes.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Calculateur de plots de terrasse",
        description:
          "Calculateur de plots : combien de plots béton pour ma terrasse ? Outil gratuit — nombre de plots, poteaux et poutres avec espacement.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Calculateur de garde-corps",
        description:
          "Combien de poteaux et barreaux faut-il ? Calculateur gratuit de garde-corps — nombre de poteaux, barreaux et mètres linéaires de lisse.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Calculateur d'escalier de terrasse",
        description:
          "Calculateur d'escalier : combien de marches et de limons ? Outil gratuit — saisissez la hauteur pour obtenir le nombre de marches, limons et planches.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "post-hole-calculator",
        title: "Calculateur de trous de poteau",
        description:
          "Calculateur de trous de poteau — combien de béton pour les poteaux de clôture ? Outil gratuit pour toute taille de trou. Nombre exact de sacs de 25 kg et 35 kg.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "pond-calculator",
        title: "Calculateur de Bassin",
        description:
          "Calculateur de bassin — outil gratuit pour volume, taille de bâche & débit de pompe. Dimensions pour bassins rectangulaires, ovales ou en forme de haricot.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-calculator",
        title: "Calculateur de Clôture",
        description:
          "Calculateur de clôture — combien de poteaux, traverses et lames ? Outil gratuit de calcul de matériaux pour clôtures en bois. Liste complète instantanée.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-post-calculator",
        title: "Calculateur de Poteaux de Clôture",
        description:
          "Calculateur de poteaux de clôture — combien de poteaux et sacs de béton ? Outil gratuit : nombre de poteaux, béton et gravier pour toute longueur de clôture.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-panel-calculator",
        title: "Calculateur de Panneaux de Clôture",
        description:
          "Calculateur de panneaux de clôture — combien de panneaux préfabriqués ? Outil gratuit pour panneaux de 1,80 m et 2,50 m. Panneaux, poteaux et chapeaux.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
      {
        slug: "picket-fence-calculator",
        title: "Calculateur de Palissade",
        description:
          "Calculateur de palissade — combien de lattes avec espacement personnalisé ? Outil gratuit pour toute largeur et écart. Lattes, traverses, poteaux et volume de bois.",
        category: "Extérieur",
        categorySlug: "outdoor",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Calculateurs de Revêtement de Sol",
    description:
      "Calculez les matériaux pour vos projets de revêtement de sol — parquet, moquette, carrelage et stratifié avec facteur de perte et estimation des coûts.",
    calculators: [
      { slug: "flooring-calculator", title: "Calculateur de Revêtement de Sol", description: "Calculateur de sol — outil gratuit pour les mètres carrés. Nombre de paquets, chutes et liste de matériaux pour parquet, vinyle et contrecollé.", category: "Revêtement de Sol", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Calculateur de Moquette", description: "Calculateur de moquette — outil gratuit pour mètres carrés, mètres linéaires et thibaude. Pour rouleaux de 4 m et 5 m avec planification des joints.", category: "Revêtement de Sol", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Calculateur de Carrelage", description: "Calculateur de carrelage — outil gratuit pour grès cérame, faïence et pierre naturelle. Nombre de carreaux, paquets, joints et colle à carrelage.", category: "Revêtement de Sol", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Calculateur de Stratifié", description: "Calculateur de stratifié — estimateur gratuit de lames et paquets avec sous-couche. Entrez les dimensions pour une liste de matériaux instantanée.", category: "Revêtement de Sol", categorySlug: "flooring" },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCalculatorBySlug(
  categorySlug: string,
  calculatorSlug: string
) {
  const category = getCategoryBySlug(categorySlug);
  return category?.calculators.find((c) => c.slug === calculatorSlug);
}
