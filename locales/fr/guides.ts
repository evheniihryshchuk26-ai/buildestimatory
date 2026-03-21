import type { GuidesTranslations } from "@/lib/i18n/types";

const guides: GuidesTranslations = {
  breadcrumbGuides: "Guides",

  index: {
    title: "Guides de construction",
    metaDescription:
      "Guides de construction détaillés pour constructeurs, artisans et autoconstructeurs. Entraxe des ossatures, choix des matériaux, réglementation et plus encore.",
    heading: "Guides de construction",
    description:
      "Guides détaillés pour vous aider à prendre les bonnes décisions sur votre prochain chantier.",
    guides: [
      {
        title: "Entraxe 40 cm vs 60 cm : guide complet",
        description:
          "Quand utiliser un entraxe de 40 cm ou 60 cm pour les montants, solives et chevrons. Exigences DTU, comparaison de coût et impact sur les matériaux.",
        href: "/guides/16-vs-24-on-center-spacing",
      },
      {
        title: "Tableau des pentes de toit : référence complète",
        description:
          "Tableau complet des pentes de toit avec degrés, pourcentages et coefficients de surface pour chaque pente courante. Recommandations par matériau et par climat.",
        href: "/guides/roof-pitch-chart",
      },
      {
        title: "Pente minimale pour bardeaux, bac acier et tuiles",
        description:
          "Trouvez la pente minimale requise pour les bardeaux bitumés, le bac acier, les tuiles et plus encore. Références DTU et solutions pour toitures basse pente.",
        href: "/guides/minimum-roof-pitch-for-shingles",
      },
      {
        title: "BPE vs béton en sacs : lequel choisir ?",
        description:
          "BPE (toupie) vs béton en sacs comparés : coût au m³, résistance, praticité et meilleurs usages. Quand commander une toupie ou gâcher ses sacs soi-même.",
        href: "/guides/ready-mix-vs-bagged-concrete",
      },
      {
        title: "Combien coûte le béton ? Guide des prix 2024",
        description:
          "Le BPE coûte 80 à 150 € le m³ livré. Guide complet des prix pour dalles, semelles, allées, béton en sacs, main-d'œuvre et astuces d'économie.",
        href: "/guides/concrete-cost-guide",
      },
      {
        title: "Combien de peinture me faut-il ? Guide complet",
        description:
          "Combien de peinture pour les murs, plafonds et boiseries ? Guide couvrant le métrage, le rendement, les couches, la préparation et le budget détaillé.",
        href: "/guides/how-much-paint-do-i-need",
      },
      {
        title: "Prix du bois de charpente : guide des tarifs",
        description:
          "Prix du bois de charpente par essence, section et qualité. Résineux, BLC, contreplaqué, tendances du marché, où acheter et remises sur volume.",
        href: "/guides/lumber-prices-guide",
      },
      {
        title: "Terrasse composite vs bois : que choisir ?",
        description:
          "Composite vs bois pour votre terrasse : coût, durabilité, entretien, esthétique et durée de vie. Guide pour choisir le bon matériau selon votre projet et votre climat.",
        href: "/guides/composite-vs-wood-decking",
      },
    ],
  },

  spacingGuide: {
    title: "Entraxe 40 cm vs 60 cm : guide complet",
    metaDescription:
      "Entraxe 40 cm vs 60 cm expliqué : quand utiliser chacun pour les montants, solives, chevrons. Exigences DTU, comparaison de coûts et impact sur les matériaux.",

    heroTitle: "Entraxe 40 cm vs 60 cm",
    heroSubtitle: "Guide complet",
    heroDescription:
      "Tout ce qu'il faut savoir pour choisir entre un entraxe de 40 cm et de 60 cm pour les montants d'ossature, les solives de plancher, les solives de plafond et les chevrons.",

    quickAnswerHeading: "Réponse rapide",
    quickAnswerText:
      "Utilisez un entraxe de 40 cm pour les murs porteurs extérieurs, la plupart des solives de plancher et toute application exigeant une résistance structurelle maximale. Utilisez un entraxe de 60 cm pour les cloisons intérieures non porteuses, certaines fermettes et les situations où le DTU le permet et où vous souhaitez réduire le coût des matériaux d'environ 33 %.",

    whatIsHeading: "Qu'est-ce que l'entraxe ?",
    whatIsText1:
      "L'entraxe est la distance mesurée de centre à centre entre deux éléments d'ossature consécutifs. C'est la manière standard dont les charpentiers et les DTU spécifient l'espacement des montants, solives, chevrons et fermettes en construction bois.",
    whatIsText2:
      "Les deux entraxes les plus courants en construction résidentielle à ossature bois sont 40 cm et 60 cm. Le choix entre ces deux valeurs affecte la capacité structurelle, le coût des matériaux, la performance d'isolation et la compatibilité avec les panneaux standard.",
    whatIsText3:
      "Les panneaux standard (OSB, contreplaqué, plaques de plâtre) sont fabriqués dans des dimensions compatibles avec les deux entraxes : un panneau de 2500×1250 mm tombe parfaitement sur les montants à 40 cm comme à 60 cm d'entraxe.",

    comparisonHeading: "40 cm vs 60 cm : comparaison",
    comparisonSubheading:
      "Comment les deux entraxes les plus courants se comparent pour chaque application majeure.",
    comparisonCol1: "Application",
    comparisonCol2: "Entraxe 40 cm",
    comparisonCol3: "Entraxe 60 cm",
    comparisonRows: [
      {
        category: "Murs porteurs extérieurs",
        oc16: "Exigé par le DTU 31.2 pour les montants de 45×145 mm. Option la plus solide.",
        oc24: "Possible avec des montants de 45×200 mm ou BLC sur justification par note de calcul.",
      },
      {
        category: "Cloisons intérieures non porteuses",
        oc16: "Courant mais non obligatoire. Plus de points de fixation pour les meubles lourds.",
        oc24: "Conforme au DTU. Économise environ 33 % sur les montants.",
      },
      {
        category: "Solives de plancher (45×250, portée type)",
        oc16: "Portée jusqu'à environ 4,50 m en C24. Plancher plus rigide.",
        oc24: "Portée jusqu'à environ 3,50 m pour la même section. Peut sembler souple.",
      },
      {
        category: "Solives de plafond (sans stockage en combles)",
        oc16: "Standard pour les combles aménageables. Supporte placo + charges.",
        oc24: "Suffisant pour les plafonds en placo sans charge de stockage au-dessus.",
      },
      {
        category: "Chevrons / Fermettes",
        oc16: "Utilisé en zone de forte charge de neige ou couverture lourde.",
        oc24: "Standard pour les fermettes industrielles en zone climatique modérée.",
      },
      {
        category: "Coût des matériaux (par ml de mur)",
        oc16: "Plus de bois, plus de fixations. Environ 30 % de montants en plus.",
        oc24: "Moins de montants, moins de main-d'œuvre.",
      },
      {
        category: "Isolation",
        oc16: "Isolant standard R=3,60 en 145 mm. Ponts thermiques plus fréquents.",
        oc24: "Cavités plus larges en 200 mm. R=5,00. Meilleure performance thermique globale.",
      },
      {
        category: "Support placo",
        oc16: "Excellent maintien. Moins de risque de vis qui « pompent » ou de flèche.",
        oc24: "Exige du BA13 minimum ou du BA15 au plafond pour éviter la flèche.",
      },
    ],

    when16Heading: "Quand utiliser un entraxe de 40 cm",
    when16Intro:
      "L'entraxe de 40 cm est l'option la plus conservatrice et la plus courante en France. Voici quand il est obligatoire ou fortement recommandé :",
    when16Items: [
      "Murs porteurs extérieurs — Le DTU 31.2 impose 40 cm d'entraxe pour les montants de 45×145 mm reprenant les charges de toiture et de plancher.",
      "Solives de plancher pour portées longues — À 40 cm d'entraxe, les solives couvrent des portées plus importantes. Des solives de 45×250 mm C24 à 40 cm portent jusqu'à 4,50 m contre 3,50 m à 60 cm.",
      "Zones supportant des revêtements lourds — Carrelage au sol, pierre, ou meubles de cuisine lourds bénéficient du support supplémentaire d'un entraxe de 40 cm.",
      "Zones sismiques et ventées — Les DTU et Eurocodes en zones sismiques 3 à 5 imposent souvent un entraxe de 40 cm (ou moins) pour les murs de contreventement.",
      "Plafonds de combles aménageables — Si les combles serviront de stockage ou d'espace habitable, l'entraxe de 40 cm fournit la capacité portante nécessaire.",
      "Murs avec bardage lourd — Le bardage pierre, l'enduit sur OSB et le fibrociment performent mieux avec des montants à 40 cm.",
    ],
    when16Summary:
      "En résumé : en cas de doute, le 40 cm est le choix le plus sûr. Le surcoût en matériaux est modeste comparé aux bénéfices structurels.",

    when24Heading: "Quand utiliser un entraxe de 60 cm",
    when24Intro:
      "L'entraxe de 60 cm utilise moins d'éléments d'ossature et peut réduire significativement les coûts de matériaux et de main-d'œuvre. Voici quand c'est approprié :",
    when24Items: [
      "Cloisons intérieures non porteuses — Le DTU autorise 60 cm pour les murs intérieurs ne reprenant aucune charge structurelle. C'est l'application la plus courante.",
      "Fermettes industrielles — La plupart des fermettes sont calculées pour un entraxe de 60 cm. Le bureau d'études intègre cet espacement dans le dimensionnement.",
      "Construction à ossature renforcée (type MOB optimisée) — L'utilisation de montants de 45×200 mm à 60 cm avec lisse haute unique réduit le bois de 30 % tout en améliorant l'isolation.",
      "Murs pignons non porteurs — Les murs pignons au-dessus de la ligne de toiture peuvent utiliser un entraxe de 60 cm.",
      "Plafonds placo sans charge — Quand le plafond ne supporte que du placo sans stockage au-dessus, le 60 cm est conforme au DTU.",
      "Projets avec budget serré — Sur une maison de 100 m², passer les cloisons de 40 cm à 60 cm permet d'économiser 500 à 800 € en bois seul.",
    ],
    when24Summary:
      "En résumé : le 60 cm est un choix judicieux quand le DTU le permet, en particulier pour les cloisons non porteuses et les fermettes industrielles.",

    codeHeading: "Exigences réglementaires (DTU)",
    codeIntro:
      "Les DTU et les Eurocodes fournissent des indications précises sur les entraxes autorisés. Voici les références clés :",
    codeItems: [
      "DTU 31.2 — Murs porteurs extérieurs : montants de 45×145 mm à 40 cm d'entraxe ou montants de 45×200 mm à 60 cm (avec justification par note de calcul).",
      "DTU 31.2 — Cloisons intérieures non porteuses : montants de 45×95 mm ou 45×70 mm à 60 cm d'entraxe maximum.",
      "DTU 31.1 — Portées de solives de plancher : les abaques indiquent les portées maximales pour chaque section, essence et entraxe (40 cm, 50 cm, 60 cm).",
      "DTU 31.1 — Portées de chevrons : abaques similaires pour les chevrons selon la charge de couverture et de neige.",
      "DTU 25.41 — Pose du placo : BA13 sur murs jusqu'à 60 cm d'entraxe ; BA15 ou BA18 recommandé au plafond à 60 cm pour éviter la flèche.",
      "Les réglementations locales et les bureaux d'études peuvent imposer des entraxes plus serrés selon les conditions spécifiques du site (sol, vent, sismicité).",
    ],
    codeSummary:
      "Important : les DTU sont des exigences minimales. Le bureau d'études ou le contrôleur technique peut exiger des entraxes plus serrés selon le site.",

    costHeading: "Comparaison de coûts : 40 cm vs 60 cm",
    costIntro:
      "L'économie de matériaux est l'une des principales raisons d'envisager un entraxe de 60 cm. Voici les chiffres :",
    costText1:
      "Pour un mur standard de 2,50 m de haut, un entraxe de 40 cm nécessite un montant tous les 40 cm, soit environ 2,5 montants par mètre linéaire. À 60 cm, on passe à environ 1,7 montant par mètre linéaire. C'est une réduction de 33 % du nombre de montants.",
    costText2:
      "Sur une maison typique de 100 m² avec environ 40 mètres linéaires de cloisons intérieures, passer de 40 cm à 60 cm d'entraxe économise environ 30 à 35 montants. À 5 à 8 € par montant (45×95 mm en 2,50 m), cela représente 150 à 280 € en montants seuls. En ajoutant les économies sur les fixations et la main-d'œuvre, l'économie totale atteint 500 à 800 €.",
    costText3:
      "Attention : ne passez pas à 60 cm sur les murs porteurs uniquement pour économiser. Le coût d'une défaillance structurelle ou d'un non-respect du DTU dépasse de loin toute économie de matériaux. Les économies s'appliquent uniquement là où le 60 cm est conforme.",

    impactHeading: "Impact sur les autres matériaux",
    impactIntro:
      "L'entraxe d'ossature n'affecte pas que le bois. Il a un effet cascade sur plusieurs systèmes constructifs :",
    impactInsulationHeading: "Isolation",
    impactInsulationText:
      "Les isolants en rouleau et en panneau existent en largeurs adaptées aux deux entraxes. À 40 cm, les rouleaux standard font 380 mm de large. À 60 cm, ils font 580 mm. Les cavités plus larges à 60 cm améliorent la performance thermique globale car il y a moins de montants servant de ponts thermiques. En ossature renforcée, des montants de 45×200 mm à 60 cm permettent un R de 5,0 avec des rouleaux standard.",
    impactDrywallHeading: "Plaques de plâtre",
    impactDrywallText:
      "Le BA13 standard convient sur les murs aux deux entraxes. Au plafond en revanche, le DTU 25.41 recommande du BA15 ou du BA18 quand l'entraxe est de 60 cm pour éviter la flèche du placo. Le BA15 coûte environ 20 à 30 % de plus que le BA13, ce qui compense partiellement l'économie sur l'ossature.",
    impactSheathingHeading: "Voile travaillant et bardage",
    impactSheathingText:
      "Les panneaux OSB et contreplaqué de 2500×1250 mm fonctionnent aux deux entraxes car les rives tombent sur les montants. Cependant, à 60 cm d'entraxe, le panneau travaille sur une portée plus grande entre montants. Pour le voile travaillant structurel, vérifiez que le panneau est certifié pour l'entraxe utilisé. Les panneaux qualifiés « mur-60 cm » sont nécessaires pour le contreventement à 60 cm d'entraxe.",

    calculatorCtaHeading: "Calculez vos matériaux",
    calculatorCtaText:
      "Utilisez nos calculateurs gratuits pour obtenir les quantités exactes de matériaux selon l'entraxe choisi :",
    calculatorLinks: [
      {
        label: "Calculateur de montants",
        href: "/calculators/wall-framing/stud-calculator",
        description: "Calculez le nombre de montants pour toute longueur de mur et entraxe.",
      },
      {
        label: "Calculateur de solives",
        href: "/calculators/floor-framing/floor-joist-calculator",
        description: "Déterminez le nombre de solives, l'entraxe et la solive de rive pour votre plancher.",
      },
      {
        label: "Calculateur de chevrons",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calculez les chevrons nécessaires selon la portée, l'entraxe et la pente.",
      },
      {
        label: "Calculateur de fermettes",
        href: "/calculators/roofing/truss-calculator",
        description: "Estimez le nombre de fermettes et l'entraxe pour votre toiture.",
      },
    ],

    faqHeading: "Questions fréquentes",
    faqs: [
      {
        question: "Peut-on utiliser un entraxe de 60 cm pour les murs porteurs extérieurs ?",
        answer:
          "Oui, mais uniquement avec des montants de 45×200 mm ou en BLC et un voile travaillant structurel homologué, sur justification par note de calcul du bureau d'études. Le DTU 31.2 autorise cette configuration sous certaines conditions de charges et de contreventement.",
      },
      {
        question: "Quel entraxe est préférable pour fixer des meubles de cuisine ?",
        answer:
          "L'entraxe de 40 cm est préférable pour la fixation des meubles lourds car il offre plus de points d'ancrage. Avec un entraxe de 60 cm, un meuble haut de 60 cm de large peut ne tomber que sur un seul montant, nécessitant des chevilles spéciales ou un renfort en OSB derrière le placo.",
      },
      {
        question: "Que signifie « entraxe » en construction ?",
        answer:
          "L'entraxe est la distance mesurée de l'axe d'un élément d'ossature à l'axe de l'élément voisin. Pour un entraxe de 40 cm, le centre de chaque montant est à 40 cm du centre du montant suivant. Cette mesure standardisée garantit la compatibilité avec les panneaux de 1200 mm et 2500 mm.",
      },
      {
        question: "Combien économise-t-on avec un entraxe de 60 cm ?",
        answer:
          "Passer de 40 cm à 60 cm sur les cloisons non porteuses économise environ 33 % sur les montants. Pour une maison typique de 100 m², cela représente 500 à 800 € d'économie sur le bois, les fixations et la main-d'œuvre. L'économie exacte dépend des prix locaux du bois et du coût de la main-d'œuvre.",
      },
      {
        question: "Peut-on utiliser du BA13 au plafond avec un entraxe de 60 cm ?",
        answer:
          "C'est déconseillé. Le DTU 25.41 recommande du BA15 ou du BA18 au plafond quand l'entraxe est de 60 cm pour éviter la flèche au fil du temps, surtout en ambiance humide. Sur les murs, le BA13 est acceptable à 60 cm.",
      },
      {
        question: "Qu'est-ce que l'ossature bois optimisée (MOB renforcée) ?",
        answer:
          "L'ossature bois optimisée utilise des montants de 45×200 mm à 60 cm d'entraxe avec une lisse haute simple, des angles à deux montants et des blocages en échelle. Cela réduit la consommation de bois de 25 à 30 % tout en permettant une isolation plus épaisse (R=5,0). Cette technique est reconnue par le DTU 31.2 et promue pour les constructions à haute performance énergétique (RE 2020).",
      },
      {
        question: "Les fermettes utilisent-elles un entraxe de 40 ou 60 cm ?",
        answer:
          "La grande majorité des fermettes industrielles sont calculées pour un entraxe de 60 cm. Le fabricant dimensionne chaque fermette pour supporter les charges requises à cet espacement. En zones de forte charge de neige (altitude > 900 m, zone C2), le bureau d'études peut prescrire un entraxe de 40 cm.",
      },
      {
        question: "L'entraxe affecte-t-il l'efficacité énergétique ?",
        answer:
          "Oui. Les montants créent des ponts thermiques à travers la paroi. À 40 cm d'entraxe, les montants représentent environ 15 % de la surface du mur, réduisant le R effectif. À 60 cm, les montants ne représentent qu'environ 10 % de la surface, améliorant le R global. Combiné à une ossature en 45×200 mm, l'entraxe de 60 cm peut améliorer la performance thermique du mur de 15 à 20 %.",
      },
    ],
  },
  roofPitchChart: {
    title: "Tableau des pentes de toit : référence complète",
    metaDescription:
      "Tableau des pentes de toit avec degrés, pourcentage de pente et coefficient de surface pour chaque pente courante. Quel matériau convient à votre pente, climat et budget.",

    heroTitle: "Tableau des pentes de toit",
    heroSubtitle: "Référence complète",
    heroDescription:
      "Tableau de référence couvrant toutes les pentes standard avec conversions en degrés, pourcentages, coefficients de surface et recommandations pour les matériaux et le climat.",

    quickRefHeading: "Tableau de référence rapide",
    quickRefSubheading:
      "Toutes les pentes courantes avec leur équivalent en degrés, leur pourcentage et leur coefficient de surface. Le coefficient indique combien la surface de toiture est plus grande que l'emprise au sol.",
    quickRefColPitch: "Pente",
    quickRefColDegrees: "Degrés",
    quickRefColSlope: "Pente %",
    quickRefColMultiplier: "Coefficient",
    quickRefColDescription: "Description",
    quickRefRows: [
      { pitch: "5 %", degrees: "2,86°", slopePercent: "5 %", multiplier: "1,001", description: "Quasi-plat — membrane ou bac acier étanche uniquement" },
      { pitch: "10 %", degrees: "5,71°", slopePercent: "10 %", multiplier: "1,005", description: "Basse pente — bac acier avec joints étanches" },
      { pitch: "20 %", degrees: "11,31°", slopePercent: "20 %", multiplier: "1,020", description: "Basse pente — bac acier, bardeaux avec écran continu" },
      { pitch: "30 %", degrees: "16,70°", slopePercent: "30 %", multiplier: "1,044", description: "Pente minimale tuiles mécaniques dans certaines zones" },
      { pitch: "40 %", degrees: "21,80°", slopePercent: "40 %", multiplier: "1,077", description: "Courant résidentiel — tuiles mécaniques standard" },
      { pitch: "50 %", degrees: "26,57°", slopePercent: "50 %", multiplier: "1,118", description: "Pente résidentielle courante en France" },
      { pitch: "60 %", degrees: "30,96°", slopePercent: "60 %", multiplier: "1,166", description: "Tuiles plates, ardoises — nord et est de la France" },
      { pitch: "70 %", degrees: "34,99°", slopePercent: "70 %", multiplier: "1,221", description: "Pente prononcée — ardoises et tuiles plates" },
      { pitch: "80 %", degrees: "38,66°", slopePercent: "80 %", multiplier: "1,281", description: "Toiture pentue — tuiles plates et ardoises de montagne" },
      { pitch: "90 %", degrees: "41,99°", slopePercent: "90 %", multiplier: "1,345", description: "Très pentu — bon déneigement, nécessite un échafaudage" },
      { pitch: "100 %", degrees: "45,00°", slopePercent: "100 %", multiplier: "1,414", description: "Angle de 45° — pente maximale courante" },
      { pitch: "120 %", degrees: "50,19°", slopePercent: "120 %", multiplier: "1,562", description: "Très prononcé — styles traditionnels alsaciens et normands" },
    ],

    readingHeading: "Comment lire la notation de pente",
    readingText1:
      "La pente de toit s'exprime en pourcentage ou en degrés. Un pourcentage de 50 % signifie que le toit monte de 50 cm pour 100 cm de course horizontale. La relation entre les deux est : pourcentage = tangente(angle) × 100.",
    readingText2:
      "Pour convertir un pourcentage en degrés : angle = arctangente(pourcentage / 100). Ainsi, 50 % = arctan(0,50) = 26,57°. Pour convertir des degrés en pourcentage : pourcentage = tan(angle) × 100.",
    readingText3:
      "Le coefficient de surface est calculé comme la racine carrée de (1 + (pente/100)²). Ce nombre indique la quantité de matériaux de couverture nécessaire par rapport à l'emprise au sol. Un toit à 50 % nécessite 11,8 % de matériaux de plus que la surface au sol, tandis qu'un toit à 100 % en nécessite 41,4 % de plus.",

    lowSlopeHeading: "Basses pentes (5 % – 25 %)",
    lowSlopeIntro:
      "Les toitures basse pente sont courantes sur les bâtiments commerciaux, les extensions de type véranda et les architectures modernes. Elles nécessitent une attention particulière à l'étanchéité car l'eau s'écoule lentement.",
    lowSlopeItems: [
      "5 % de pente — Le minimum absolu pour un toit. Nécessite une membrane d'étanchéité continue (EPDM, PVC, bitume). Le bac acier à joints debout avec joints étanches est aussi acceptable.",
      "10 % de pente — Pente minimale pour le bac acier à fixation apparente avec des recouvrements renforcés. Les bardeaux bitumés peuvent être posés avec un écran sous-toiture continu autocollant.",
      "20 à 25 % de pente — Les panneaux bac acier à fixation apparente fonctionnent à partir de cette pente. Le bitume modifié en rouleau convient aussi. L'écran sous-toiture de qualité est recommandé.",
      "Les matériaux pour basse pente coûtent plus cher au m² en raison des exigences d'étanchéité supplémentaires. Prévoyez 5 à 15 €/m² de plus pour l'étanchéité sur les toits en dessous de 30 %.",
      "Le drainage est la préoccupation principale. L'eau stagnante (flaquage) peut survenir si la pente est trop faible ou si la structure fléchit sous la charge. Le flaquage annule la plupart des garanties de couverture.",
    ],
    lowSlopeSummary:
      "Les toitures basse pente sont économiques pour couvrir de grandes surfaces mais exigent une étanchéité soignée. Utilisez toujours des matériaux homologués pour la pente spécifique.",

    standardHeading: "Pentes standard (30 % – 70 %)",
    standardIntro:
      "La plage de 30 % à 70 % couvre la grande majorité des toitures résidentielles en France. Ces pentes assurent un bon drainage, fonctionnent avec presque tous les matériaux de couverture et restent praticables pour la pose et l'entretien.",
    standardItems: [
      "30 % — Pente minimale pour les tuiles mécaniques à emboîtement dans les zones abritées. La plupart des fabricants de tuiles (Imerys, Monier) spécifient 30 à 35 % comme pente minimale.",
      "40 % — Pente résidentielle courante pour les tuiles mécaniques. Bon drainage, pose confortable pour les couvreurs. Compatible avec la majorité des couvertures.",
      "50 % — La pente la plus courante en construction résidentielle dans le centre et l'ouest de la France. Bon équilibre entre esthétique, drainage et volume sous combles.",
      "60 à 70 % — Courant sur les maisons de style traditionnel dans le nord, l'est et en montagne. Permettent des combles aménageables généreux. Les couvreurs commencent à utiliser des crochets de sécurité à partir de 60 %.",
      "Assurance et valeur de revente — Les toitures à pente standard sont préférées par les assureurs car elles évacuent bien l'eau et les débris. Les maisons avec des pentes de 40 à 60 % ont les coûts d'entretien de couverture les plus bas sur la durée.",
    ],
    standardSummary:
      "Les pentes standard sont le choix idéal pour la construction résidentielle : compatibles avec tous les matériaux courants, faciles à travailler et rentables.",

    steepHeading: "Fortes pentes (80 % – 120 %+)",
    steepIntro:
      "Les toitures à forte pente se trouvent sur les chalets, les maisons de style alsacien ou normand, les églises et les bâtiments en zones de fort enneigement. Elles évacuent bien la neige mais coûtent plus cher à construire.",
    steepItems: [
      "80 à 90 % — Courant en zones de montagne et dans le nord-est. La pente prononcée empêche l'accumulation de neige, réduisant les risques de surcharge et de barrières de glace. Cependant, la neige glisse rapidement : des arrêts de neige sont souvent nécessaires.",
      "100 à 120 % — Utilisé pour un effet architectural spectaculaire (chalets, maisons à colombages, style gothique). Un toit à 100 % forme un angle parfait de 45°. Ces toitures nécessitent un échafaudage complet et des harnais de sécurité pour la pose.",
      "Impact sur le coût — Les toitures pentues utilisent nettement plus de matériaux (un toit à 100 % a 41,4 % de surface en plus qu'un toit plat) et nécessitent plus de main-d'œuvre. Prévoyez 20 à 50 % de surcoût pour une toiture pentue par rapport à la même emprise à pente standard.",
      "Choix de matériaux — Les tuiles plates, les ardoises, les bardeaux bitumés architecturaux et les bardeaux bois performent bien sur les fortes pentes. Ces matériaux sont souvent les plus esthétiques sur les pentes prononcées car l'eau s'écoule rapidement.",
      "Résistance au vent — Les toitures pentues captent plus de vent. En zone littorale et en zone ventée, les fortes pentes peuvent nécessiter un clouage renforcé et des matériaux classés au vent. Consultez les exigences locales avant de spécifier une pente supérieure à 70 % en zone côtière.",
    ],
    steepSummary:
      "Les fortes pentes excellent pour évacuer les précipitations et offrent un cachet architectural, mais elles représentent un surcoût en matériaux et en main-d'œuvre.",

    costHeading: "Impact de la pente sur le coût",
    costIntro:
      "La pente de toit impacte directement le coût total d'un projet de couverture de trois façons : quantité de matériaux, difficulté de pose et taux de chutes.",
    costText1:
      "La quantité de matériaux augmente avec la pente car un toit plus pentu a plus de surface. Utilisez le coefficient du tableau ci-dessus pour estimer la surface réelle. Par exemple, un bâtiment de 100 m² d'emprise avec un toit à 50 % a 100 × 1,118 = 111,8 m² de surface réelle. À 100 % de pente, la même emprise donne 100 × 1,414 = 141,4 m², soit 30 m² de matériaux supplémentaires.",
    costText2:
      "Le coût de main-d'œuvre augmente fortement au-delà de 60 % de pente. Les couvreurs ont besoin d'équipements de sécurité (harnais, crochets de toit, échafaudage) et la vitesse de pose diminue de 25 à 40 %. La plupart des couvreurs facturent un supplément de 5 à 15 €/m² pour les pentes supérieures à 60 %.",
    costText3:
      "Le taux de chutes augmente aussi sur les toitures pentues et complexes. Les noues, arêtiers et faîtages sur des toits pentus génèrent plus de découpes. Prévoyez 10 à 15 % de chutes pour les pentes standard et 15 à 20 % pour les pentes prononcées ou les géométries complexes.",

    materialHeading: "Pente recommandée par matériau de couverture",
    materialIntro:
      "Chaque matériau de couverture a une plage de pente minimale et optimale. Utiliser le bon matériau pour votre pente garantit le drainage, la garantie et la durée de vie maximale.",
    materialItems: [
      "Tuiles mécaniques à emboîtement — Pente minimale 30 à 35 % selon le modèle et la zone. Plage optimale 35 à 80 %. Le matériau le plus courant en France.",
      "Tuiles canal — Pente minimale 25 à 30 %. Plage optimale 25 à 40 %. Courantes dans le sud de la France (Provence, Languedoc).",
      "Tuiles plates — Pente minimale 60 %. Plage optimale 60 à 120 %. Courantes dans le nord de la France, l'Île-de-France et la Bourgogne.",
      "Ardoises naturelles — Pente minimale 40 %. Plage optimale 50 à 120 %. Durée de vie exceptionnelle (100+ ans). Courantes en Bretagne, Normandie et Pays de la Loire.",
      "Bac acier à joints debout — Pente minimale 5 % avec joints étanches. Plage optimale 10 à 100 %. Excellent pour les basses et fortes pentes.",
      "Bac acier à fixation apparente — Pente minimale 15 à 20 %. Plage optimale 20 à 60 %. Moins cher que le joint debout mais inadapté aux basses pentes.",
      "Bardeaux bitumés — Pente minimale 15° (27 %). Plage optimale 27 à 100 %. Légers et faciles à poser.",
      "Membrane EPDM / PVC / TPO — Pente minimale 1 à 2 %. Plage optimale 1 à 20 %. Standard pour les toitures-terrasses et les basses pentes.",
    ],

    climateHeading: "Pente de toit idéale par climat",
    climateIntro:
      "Le climat joue un rôle majeur dans le choix de la pente. Voici comment adapter la pente aux conditions météorologiques locales :",
    climateItems: [
      "Zones de fort enneigement (montagne > 900 m, zones C2) — Utilisez des pentes de 70 à 120 % pour évacuer la neige avant qu'elle ne s'accumule dangereusement. Installez des arrêts de neige pour contrôler la chute. Les pentes prononcées réduisent aussi le risque de barrières de glace.",
      "Zones d'enneigement modéré (500 à 900 m, nord de la France) — Utilisez des pentes de 50 à 80 %. Bon déneigement sans le surcoût des très fortes pentes. La ventilation des combles est essentielle pour prévenir les barrières de glace.",
      "Zones de forte pluie (Bretagne, Normandie, Pays basque) — Utilisez des pentes de 40 à 70 % pour un écoulement rapide. Choisissez des matériaux résistants à l'humidité (ardoise, bac acier). Assurez le dimensionnement des gouttières et descentes.",
      "Climats chauds et secs (Méditerranée) — Utilisez des pentes de 25 à 40 %. Les pentes plus faibles réduisent la surface exposée au soleil, limitant le gain thermique. Les tuiles canal de couleur claire ou les toitures-terrasses avec membrane sont courantes.",
      "Zones ventées (littoral, couloir rhodanien, Mistral) — Utilisez des pentes de 30 à 50 %. Les toitures à croupe avec pentes modérées résistent le mieux au vent. Évitez les pignons très pentus qui captent le vent. Utilisez des fixations renforcées.",
      "Climats mixtes (Île-de-France, Centre, Val de Loire) — Utilisez des pentes de 40 à 60 % comme choix polyvalent adapté à la pluie, à la neige modérée et au vent. Cette plage est la plus courante en France métropolitaine.",
    ],

    calculatorCtaHeading: "Calculez vos matériaux de toiture",
    calculatorCtaText:
      "Utilisez nos calculateurs gratuits pour estimer les matériaux selon votre pente, surface et matériau choisi :",
    calculatorLinks: [
      {
        label: "Calculateur de pente de toit",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Convertissez entre ratio, degrés et pourcentage de pente.",
      },
      {
        label: "Calculateur de surface de toiture",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calculez la surface réelle à partir de l'emprise au sol et de la pente.",
      },
      {
        label: "Calculateur d'inclinaison",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Déterminez le coefficient de pente et le coefficient de surface.",
      },
      {
        label: "Calculateur de chevrons",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calculez la longueur, le nombre et le bois nécessaire pour vos chevrons.",
      },
    ],

    faqHeading: "Questions fréquentes",
    faqs: [
      {
        question: "Qu'est-ce qu'une pente de 30 % en degrés ?",
        answer:
          "Une pente de 30 % équivaut à 16,70°. Le calcul est : arctan(30/100) = 16,70°. Une pente de 30 % est souvent la pente minimale pour les tuiles mécaniques à emboîtement en zone abritée.",
      },
      {
        question: "Quelle est la pente standard d'un toit en France ?",
        answer:
          "La pente la plus courante en construction résidentielle en France est de 40 à 50 % (22 à 27°) dans le centre et l'ouest, de 50 à 70 % dans le nord et l'est, et de 25 à 35 % dans le sud méditerranéen. La pente exacte dépend du style architectural, du climat et du matériau de couverture.",
      },
      {
        question: "À quoi sert le tableau des pentes de toit ?",
        answer:
          "Un tableau des pentes permet de convertir les pentes (en %) en degrés, de calculer les coefficients de surface et de déterminer le matériau de couverture adapté. Les professionnels l'utilisent pour vérifier la conformité au DTU et aux recommandations des fabricants.",
      },
      {
        question: "Comment mesurer la pente d'un toit depuis le sol ?",
        answer:
          "Depuis les combles : posez un niveau de 1 m sur un chevron, mesurez la distance verticale entre l'extrémité du niveau et le chevron. Cette distance en centimètres divisée par 100 cm donne la pente en pourcentage. Un niveau numérique posé directement sur le chevron donne l'angle en degrés.",
      },
      {
        question: "Quelle pente est considérée comme un toit plat ?",
        answer:
          "Tout toit avec une pente inférieure à 15 % (environ 8,5°) est généralement classé comme toiture-terrasse ou basse pente par les DTU et les fabricants. Les vrais toits plats ont une pente de 1 à 3 % pour diriger l'eau vers les descentes pluviales.",
      },
      {
        question: "La pente du toit affecte-t-elle l'assurance habitation ?",
        answer:
          "Oui. Les assureurs considèrent la pente lors du calcul des primes. Les pentes standard (30 à 60 %) obtiennent les meilleurs tarifs car elles évacuent l'eau efficacement. Les très basses pentes peuvent augmenter les primes en raison du risque de fuite, et les très fortes pentes en raison des coûts de remplacement plus élevés.",
      },
    ],
  },

  minimumRoofPitch: {
    title: "Pente minimale pour bardeaux, bac acier et tuiles",
    metaDescription:
      "Pente minimale pour bardeaux bitumés (15° standard), bac acier (5 %), tuiles (30 %) et autres. Références DTU et solutions pour toitures basse pente.",

    heroTitle: "Pente minimale de toiture",
    heroSubtitle: "pour bardeaux, bac acier et tuiles",
    heroDescription:
      "Chaque matériau de couverture a une pente minimale définie par les DTU et les fabricants. Poser un matériau en dessous de sa pente minimale annule la garantie, enfreint la réglementation et provoque des fuites. Ce guide couvre les minimums pour chaque matériau courant.",

    quickAnswerHeading: "Réponse rapide",
    quickAnswerText:
      "La pente minimale pour les tuiles mécaniques standard est de 30 à 35 % selon le modèle et la zone climatique. Le bac acier à joints debout descend jusqu'à 5 %. Les bardeaux bitumés nécessitent 27 % (15°) minimum. Les membranes d'étanchéité (EPDM, PVC) fonctionnent à partir de 1 à 2 %.",

    materialTableHeading: "Pente minimale par matériau",
    materialTableSubheading:
      "Ce tableau indique la pente standard minimale, la pente absolue minimale avec dispositions spéciales, et les notes clés pour chaque matériau de couverture.",
    materialTableColMaterial: "Matériau de couverture",
    materialTableColStandardMin: "Minimum standard",
    materialTableColAbsoluteMin: "Minimum absolu",
    materialTableColNotes: "Notes",
    materialTableRows: [
      {
        material: "Tuiles mécaniques à emboîtement",
        standardMin: "35 %",
        absoluteMin: "30 %",
        notes: "30 % en zone abritée avec Avis Technique favorable. Recouvrement renforcé nécessaire à basse pente.",
      },
      {
        material: "Tuiles canal",
        standardMin: "30 %",
        absoluteMin: "25 %",
        notes: "Courant dans le sud de la France. Écran sous-toiture recommandé en dessous de 30 %.",
      },
      {
        material: "Tuiles plates",
        standardMin: "60 %",
        absoluteMin: "60 %",
        notes: "Pureau réduit exigé aux basses pentes. Recouvrement minimal défini par l'Avis Technique.",
      },
      {
        material: "Ardoises naturelles",
        standardMin: "40 %",
        absoluteMin: "40 %",
        notes: "Recouvrement plus important à basse pente. Pose au crochet ou au clou selon la zone.",
      },
      {
        material: "Bac acier à joints debout",
        standardMin: "10 %",
        absoluteMin: "5 %",
        notes: "À 5–10 %, joints soudés ou avec bande d'étanchéité. Joint mécanique recommandé en dessous de 10 %.",
      },
      {
        material: "Bac acier à fixation apparente",
        standardMin: "20 %",
        absoluteMin: "15 %",
        notes: "Les vis traversantes rendent ce système inadapté aux très basses pentes. Rondelles d'étanchéité indispensables.",
      },
      {
        material: "Bardeaux bitumés",
        standardMin: "27 % (15°)",
        absoluteMin: "15 % (9,5°)",
        notes: "En dessous de 27 %, un écran sous-toiture continu autocollant est obligatoire sur toute la surface.",
      },
      {
        material: "Bardeaux bois (shakes)",
        standardMin: "30 %",
        absoluteMin: "30 %",
        notes: "Ventilation sous les bardeaux nécessaire. Réglementé dans les zones à risque d'incendie.",
      },
      {
        material: "Membrane EPDM / PVC",
        standardMin: "2 %",
        absoluteMin: "1 %",
        notes: "Standard pour les toitures-terrasses. Joints soudés à chaud. Drainage positif obligatoire.",
      },
      {
        material: "Bitume modifié (rouleau)",
        standardMin: "5 %",
        absoluteMin: "2 %",
        notes: "Appliqué au chalumeau ou autocollant. Courant sur les extensions et les annexes à basse pente.",
      },
    ],

    whyMinHeading: "Pourquoi la pente minimale est importante",
    whyMinIntro:
      "La spécification de pente minimale n'est pas arbitraire. Elle existe parce que chaque matériau compte sur la gravité pour évacuer l'eau avant qu'elle ne pénètre dans les joints et les fixations. Voici pourquoi c'est essentiel :",
    whyMinItems: [
      "Infiltration d'eau — En dessous de la pente minimale, l'eau s'écoule trop lentement. Elle remonte par capillarité sous les tuiles, pénètre autour des fixations et s'infiltre dans les recouvrements. Même une infiltration minime cause pourriture, moisissures et dégâts structurels à terme.",
      "Garantie du fabricant — Chaque fabricant spécifie une pente minimale dans ses prescriptions de pose. Poser le produit en dessous annule la garantie intégralement. En cas de sinistre, le fabricant refusera la prise en charge.",
      "Conformité réglementaire — Les DTU 40.xx référencent les prescriptions des fabricants. Une couverture posée en dessous de la pente minimale ne passe pas le contrôle et peut entraîner une démolition-reconstruction aux frais du propriétaire.",
      "Prévention des barrières de glace — En climat froid, les toitures basse pente sont plus exposées aux barrières de glace. L'eau de fonte regèle en égout et force l'eau sous les éléments de couverture, causant des dégâts intérieurs importants.",
      "Conséquences assurantielles — Les assurances habitation peuvent exclure la couverture des dégâts des eaux causés par une mise en œuvre non conforme. Si la pente est inférieure au minimum requis, l'assureur peut classer le défaut comme antérieur et refuser l'indemnisation.",
    ],
    whyMinSummary:
      "Poser un matériau de couverture à sa pente minimale ou au-dessus n'est pas optionnel. Cela protège votre garantie, satisfait la réglementation et prévient les dégâts des eaux.",

    codeHeading: "Exigences réglementaires (DTU)",
    codeIntro:
      "Les DTU établissent les pentes minimales pour protéger la sécurité des occupants et la pérennité du bâtiment. Voici les références clés :",
    codeItems: [
      "DTU 40.21 (Tuiles à emboîtement) — Pente minimale de 30 à 35 % selon le modèle. Écran sous-toiture obligatoire en zone exposée.",
      "DTU 40.22 (Tuiles canal) — Pente minimale de 25 à 30 % selon la zone climatique et le type de canal.",
      "DTU 40.11 (Ardoises) — Pente minimale de 40 % pour les ardoises naturelles posées au crochet. Recouvrement variable selon la pente.",
      "DTU 40.35 (Bac acier) — Pente minimale de 5 % pour les joints debout et de 15 à 20 % pour la fixation apparente.",
      "DTU 40.14 (Bardeaux bitumés) — Pente minimale de 15° (27 %) en pose standard. Écran continu obligatoire en dessous.",
      "Les réglementations locales (PLU, ZPPAUP) peuvent imposer des pentes spécifiques. Vérifiez toujours avec votre mairie et le bureau de contrôle.",
    ],
    codeSummary:
      "Les DTU sont des exigences minimales. Beaucoup de couvreurs professionnels recommandent une pente d'un cran au-dessus du minimum DTU pour une marge de sécurité supplémentaire contre la pluie battante.",

    belowMinHeading: "Que se passe-t-il sous la pente minimale",
    belowMinIntro:
      "Poser un matériau de couverture sous sa pente minimale déclenche une cascade de problèmes qui s'aggravent avec le temps :",
    belowMinItems: [
      "Garantie fabricant annulée — C'est la conséquence la plus immédiate. Le fabricant n'a aucune obligation de remplacement si le produit a été posé hors de ses spécifications.",
      "Fuites chroniques — L'eau stagne sur le toit et pénètre les joints, recouvrements et fixations. Ces fuites peuvent ne pas apparaître immédiatement mais se développent en 2 à 5 ans.",
      "Barrières de glace en climat froid — Les toits basse pente sont très exposés aux barrières de glace car la neige fond lentement et regèle en égout, forçant l'eau sous la couverture.",
      "Moisissures et pourriture — L'humidité persistante crée des conditions idéales pour les moisissures dans les combles et la pourriture de la charpente. La décontamination et les réparations structurelles peuvent coûter 10 000 à 30 000 €.",
      "Refus de réception et de contrôle — Une couverture non conforme aux DTU ne passera pas le contrôle technique. Le bureau de contrôle peut exiger la dépose et la repose avec un matériau adapté, doublant le coût du projet.",
      "Durée de vie réduite — Même si les fuites sont mineures, les matériaux posés sous la pente minimale se dégradent plus vite. Des bardeaux bitumés à 10 % sans écran approprié peuvent durer seulement 8 à 12 ans au lieu de 25 à 30 ans.",
    ],
    belowMinSummary:
      "Il n'y a pas de raccourci possible avec la pente minimale. Le coût d'une mise en œuvre conforme est toujours inférieur au coût de la réparation, du remplacement et de la remise en état après dégât des eaux.",

    solutionsHeading: "Solutions pour toitures basse pente",
    solutionsIntro:
      "Si votre toit a une pente inférieure à 30 %, vous avez plusieurs options fiables. Voici les approches les plus éprouvées :",
    solutionsItems: [
      "Écran sous-toiture continu autocollant — Pour les pentes entre 15 et 30 %, couvrez toute la surface avec une membrane auto-adhésive bitumineuse avant de poser les bardeaux. Cela crée une barrière étanche secondaire. Surcoût : 8 à 15 €/m².",
      "Bac acier à joints debout — Les panneaux à joints debout mécaniques fonctionnent jusqu'à 5 % de pente. Les joints surélevés éloignent l'eau des surfaces planes. Choisissez des panneaux avec une hauteur de joint d'au moins 40 mm pour les pentes inférieures à 10 %. C'est souvent la meilleure option pour les toitures résidentielles basse pente.",
      "Membrane d'étanchéité (EPDM, PVC, TPO) — Pour les pentes inférieures à 10 %, c'est le standard professionnel. Ces membranes monocouche sont soudées à chaud ou collées pour créer une surface étanche continue. Courantes sur les toitures-terrasses et les extensions à toit plat.",
      "Bitume modifié — Les rouleaux de bitume modifié (soudés au chalumeau ou autocollants) offrent une surface étanche et durable pour les basses pentes. Bon choix pour les vérandas, les garages et les petites extensions.",
      "Modification structurelle — Dans certains cas, il est rentable d'augmenter la pente en ajoutant des chevrons sur la structure existante. Cette opération, appelée « rehausse de pente », nécessite une étude de structure, un permis et une mise en œuvre professionnelle.",
      "Noue de dérivation et isolation en pente — Sur les toits plats ou quasi-plats, des panneaux isolants en pente (Pente créateur) dirigent l'eau vers les descentes pluviales. Une noue de dérivation (costière) derrière les cheminées et les murs empêche le flaquage.",
    ],
    solutionsSummary:
      "Les toitures basse pente ne sont pas un problème tant que vous utilisez les bons matériaux. Le bac acier à joints debout et les membranes d'étanchéité offrent des décennies de service fiable sur des pentes qui détruiraient des tuiles.",

    calculatorCtaHeading: "Calculez vos matériaux de toiture",
    calculatorCtaText:
      "Utilisez nos calculateurs gratuits pour déterminer les bons matériaux et quantités pour votre pente :",
    calculatorLinks: [
      {
        label: "Calculateur de pente de toit",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Convertissez entre ratio, degrés et pourcentage de pente.",
      },
      {
        label: "Calculateur de surface de toiture",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calculez la surface réelle à partir de l'emprise au sol et de la pente.",
      },
      {
        label: "Calculateur d'inclinaison",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Déterminez le coefficient de pente et le coefficient de surface.",
      },
    ],

    faqHeading: "Questions fréquentes",
    faqs: [
      {
        question: "Peut-on poser des bardeaux bitumés sur un toit à 15 % de pente ?",
        answer:
          "Oui, mais uniquement avec un écran sous-toiture continu autocollant couvrant toute la surface. La plupart des fabricants de bardeaux honorent leur garantie à partir de 9,5° (environ 17 %) avec cet écran. Sans écran continu, la pente minimale est de 15° (27 %).",
      },
      {
        question: "Quelle est la pente minimale pour le bac acier ?",
        answer:
          "Pour le bac acier à joints debout, la pente minimale est de 5 % (DTU 40.35). Entre 5 et 10 %, les joints doivent être étanchés mécaniquement ou avec une bande d'étanchéité. Le bac acier à fixation apparente nécessite 15 à 20 % minimum en raison des vis traversantes.",
      },
      {
        question: "Que se passe-t-il si la pente est trop faible pour des tuiles ?",
        answer:
          "L'eau s'écoule trop lentement et remonte par capillarité sous les tuiles. Le vent pousse l'eau sous les recouvrements. Cela provoque des fuites chroniques, la pourriture de la charpente, des moisissures et l'annulation de la garantie du fabricant.",
      },
      {
        question: "Une pente de 25 % convient-elle pour des tuiles mécaniques ?",
        answer:
          "C'est en dessous de la pente minimale standard (30 à 35 %). Certains modèles de tuiles à emboîtement possèdent un Avis Technique autorisant 25 % avec des dispositions spéciales (écran sous-toiture renforcé, recouvrement augmenté). Vérifiez l'Avis Technique de la tuile choisie.",
      },
      {
        question: "Quelle pente minimale pour les tuiles terre cuite ?",
        answer:
          "Les tuiles mécaniques à emboîtement : 30 à 35 %. Les tuiles canal : 25 à 30 %. Les tuiles plates : 60 %. La pente exacte dépend du modèle et de la zone climatique (exposition au vent et à la pluie). Consultez le DTU 40.21 et l'Avis Technique du fabricant.",
      },
      {
        question: "Peut-on modifier la pente d'un toit existant ?",
        answer:
          "Oui, il est possible de rehausser la pente en ajoutant de nouveaux chevrons ou fermettes sur la structure existante. C'est une modification structurelle significative qui nécessite une étude de structure, un permis de construire (ou déclaration préalable) et une mise en œuvre professionnelle. Le coût est de 8 000 à 25 000 € selon la surface.",
      },
    ],
  },

  readyMixVsBagged: {
    title: "BPE vs béton en sacs : lequel choisir ?",
    metaDescription:
      "BPE (toupie) vs béton en sacs comparés : coût au m³, résistance, praticité et meilleurs usages. Quand commander une toupie ou gâcher des sacs soi-même.",

    heroTitle: "BPE vs béton en sacs",
    heroSubtitle: "Lequel choisir ?",
    heroDescription:
      "Comparaison complète entre le béton prêt à l'emploi (livré par toupie) et le béton en sacs pour vous aider à choisir selon le volume, le budget et le planning de votre projet.",

    quickAnswerHeading: "Réponse rapide",
    quickAnswerText:
      "Utilisez le béton en sacs pour les petits travaux de moins de 0,5 m³ : scellement de poteaux, petites réparations, dés de fondation. Utilisez le BPE (toupie) pour tout dépassant 1 m³ : dalles, semelles, allées, fondations. Le coût au m³ est similaire (80–150 €), mais les frais de livraison et le minimum de commande rendent le BPE peu pratique pour les petits volumes.",

    whatIsReadyMixHeading: "Qu'est-ce que le BPE ?",
    whatIsReadyMixText1:
      "Le béton prêt à l'emploi (BPE) est fabriqué en centrale, malaxé dans un camion-toupie et livré sur votre chantier prêt à couler. Le béton arrive dosé à la classe de résistance spécifiée (C25/30, C30/37 pour le résidentiel) avec le bon rapport eau-ciment. Il suffit de diriger la goulotte ou la pompe vers le coffrage.",
    whatIsReadyMixText2:
      "Un camion-toupie standard contient 6 à 8 m³ de béton et peut généralement couler sa charge en 30 à 90 minutes. La plupart des centrales imposent un minimum de 1 à 2 m³, avec des suppléments pour les petites quantités. Le camion doit accéder à moins de 5 m du point de coulage, sinon une pompe à béton est nécessaire (150 à 300 € de l'heure).",

    whatIsBaggedHeading: "Qu'est-ce que le béton en sacs ?",
    whatIsBaggedText1:
      "Le béton en sacs est un mélange sec pré-dosé de ciment, sable et graviers vendu en sacs de 25 kg et 35 kg dans les grandes surfaces de bricolage et les négoces de matériaux. Les marques courantes sont Weber, Parexlanko, PRB et Bostik. On ajoute l'eau, on gâche à la bétonnière ou à la main, et on coule dans le coffrage. Un sac de 35 kg donne environ 0,017 m³ de béton, soit environ 57 sacs par m³.",
    whatIsBaggedText2:
      "Le béton en sacs atteint généralement 25 à 30 MPa à 28 jours, comparable au BPE résidentiel standard. La praticité est de pouvoir acheter exactement la quantité nécessaire sans minimum de commande. L'inconvénient est que le gâchage est physiquement exigeant : préparer 57 sacs pour un seul m³ prend plusieurs heures de travail intensif.",

    comparisonHeading: "BPE vs sacs : comparaison directe",
    comparisonSubheading:
      "Comment le BPE livré par toupie et le béton en sacs se comparent sur les critères qui comptent.",
    comparisonCol1: "Critère",
    comparisonCol2: "BPE (toupie)",
    comparisonCol3: "Béton en sacs",
    comparisonRows: [
      {
        category: "Coût par m³",
        readyMix: "80 à 150 € le m³ (matériau seul). Frais de livraison de 50 à 100 € en sus.",
        bagged: "250 à 400 € le m³ (environ 57 sacs de 35 kg à 5–7 € chacun).",
      },
      {
        category: "Minimum de commande",
        readyMix: "1 à 2 m³ minimum. Suppléments pour les petites quantités (30–60 €/m³ sous le seuil).",
        bagged: "Aucun minimum. Achetez autant ou aussi peu que nécessaire.",
      },
      {
        category: "Résistance (MPa)",
        readyMix: "Personnalisable : C20/25 à C40/50+. Le C25/30 est le standard résidentiel.",
        bagged: "Standard 25 à 30 MPa. Sacs haute résistance disponibles à 40 MPa.",
      },
      {
        category: "Praticité",
        readyMix: "Arrive prêt à couler. Aucun gâchage. Rapide pour les gros volumes.",
        bagged: "Doit être gâché sur place. Physiquement exigeant pour les grandes quantités.",
      },
      {
        category: "Temps de préparation",
        readyMix: "Zéro — arrive pré-mélangé. Le temps de coulage dépend du volume et de l'accès.",
        bagged: "5 à 10 minutes par sac à la bétonnière. 10 à 15 minutes par sac à la main.",
      },
      {
        category: "Idéal pour",
        readyMix: "Dalles > 5 m², semelles, fondations, allées, gros coulages.",
        bagged: "Poteaux de clôture, scellements, petites réparations, endroits inaccessibles.",
      },
      {
        category: "Conservation",
        readyMix: "Doit être coulé dans les 60 à 90 min. Pas de stockage possible.",
        bagged: "6 à 12 mois à l'abri de l'humidité. Achat anticipé possible.",
      },
      {
        category: "Contrôle qualité",
        readyMix: "Dosage contrôlé en centrale. Qualité constante. Essais ASTM/NF.",
        bagged: "Dépend de votre gâchage et du dosage en eau. Plus de risque d'erreur.",
      },
    ],

    costHeading: "Détail des coûts : BPE vs sacs",
    costIntro:
      "Le coût au m³ est étonnamment similaire entre les deux options. La vraie différence vient des frais de livraison, de la main-d'œuvre et de l'échelle du projet.",
    costText1:
      "Béton en sacs : un sac de 35 kg de béton prêt à l'emploi (Weber, PRB) coûte 5 à 7 € en GSB ou en négoce. Chaque sac donne environ 0,017 m³. Un m³ nécessite environ 57 sacs. À 6 € le sac, cela fait 342 € le m³ en matériau seul. Les sacs de 25 kg (3 à 5 €) sont plus maniables mais encore plus chers au m³. En ajoutant le temps de gâchage (4 à 6 heures par m³ à la main), le coût réel est nettement supérieur au BPE pour les gros volumes.",
    costText2:
      "BPE : le prix de base pour du C25/30 standard est de 80 à 130 € le m³ selon la région et le volume. La plupart des centrales ajoutent des frais de livraison (50 à 100 € par voyage) et des suppléments pour les petites quantités (30 à 60 €/m³ en dessous du seuil de 2 à 3 m³). Un surcoût « samedi » de 50 à 100 € s'applique parfois. Pour un coulage de 4 m³ de dalle, comptez 400 à 600 € de béton plus 50 à 150 € de frais, soit 450 à 750 € au total.",
    costText3:
      "En résumé : pour les travaux de moins de 0,3 m³ (environ 20 sacs), le béton en sacs est presque toujours moins cher et plus pratique. Au-delà de 1 m³, le BPE fait économiser des heures de travail et coûte souvent moins cher au m³ une fois le temps de main-d'œuvre pris en compte. Le point de basculement se situe autour de 0,5 à 0,75 m³.",

    whenReadyMixHeading: "Quand choisir le BPE",
    whenReadyMixIntro:
      "Le BPE est le choix évident pour les projets importants où le volume, la rapidité et la régularité comptent. Voici les situations qui justifient la toupie :",
    whenReadyMixItems: [
      "Projets de plus de 1 m³ — Gâcher plus de 57 sacs à la main est épuisant, lent et augmente le risque de reprises de bétonnage. La toupie livre tout d'un coup.",
      "Dalles, allées et grandes surfaces — Une dalle de garage de 6×6 m nécessite environ 4,5 m³. Cela représenterait 260 sacs. La toupie coule ce volume en moins d'une heure.",
      "Semelles et murs de fondation — Le béton structurel pour les fondations doit être coulé en continu quand c'est possible. Le BPE offre le volume et la régularité attendus par le bureau de contrôle.",
      "Coulages à délai contraint — Si vous avez loué un coffrage, engagé un finisseur ou si la fenêtre météo est étroite, le BPE élimine les heures de gâchage.",
      "Projets nécessitant un dosage spécifique — Les centrales peuvent personnaliser le dosage avec des fibres, des adjuvants (accélérateur, retardateur, entraîneur d'air) et des classes de résistance sur mesure.",
      "Bonne accessibilité camion — Si le camion peut approcher à moins de 5 m du coulage, le BPE est le choix le plus efficace. Pour un accès plus éloigné, une pompe à béton ajoute du coût mais reste plus rapide que des centaines de sacs.",
    ],
    whenReadyMixSummary:
      "Règle générale : si votre projet nécessite plus de 1 m³, appelez une centrale à béton. L'économie de main-d'œuvre seule justifie les frais de livraison.",

    whenBaggedHeading: "Quand choisir le béton en sacs",
    whenBaggedIntro:
      "Le béton en sacs excelle pour les petits travaux rapides où commander une toupie serait disproportionné. Voici les meilleurs usages :",
    whenBaggedItems: [
      "Poteaux de clôture et boîtes aux lettres — Chaque trou nécessite 1 à 2 sacs de 35 kg. Vous pouvez sceller les poteaux un par un à votre rythme. Certains bétons rapides permettent de verser le sac sec dans le trou et d'ajouter l'eau par-dessus.",
      "Petites réparations — Rebouchage de trou de trottoir, réparation de marche, comblement de cavité. Ces travaux nécessitent 2 à 10 sacs.",
      "Projets de moins de 0,5 m³ — Petits dés pour climatiseur, local poubelle, base de carport, petit tronçon d'allée. Avec 20 à 30 sacs, le gâchage est gérable.",
      "Endroits inaccessibles — Chantiers derrière des clôtures, semelles de mur en contrebas, sites ruraux où un camion-toupie ne peut pas accéder. Les sacs se transportent à la main partout.",
      "Projets du week-end — Si vous voulez travailler à votre rythme sans la pression d'un camion qui attend (les chauffeurs accordent généralement 5 à 7 minutes par m³ avant de facturer le temps d'attente), les sacs vous laissent le temps.",
      "Quand vous avez déjà les sacs — Si vous avez des sacs restants d'un précédent chantier ou si vous trouvez une promotion sur palette, utilisez-les. Vérifiez qu'ils sont encore bons (pas de grumeaux ni de parties durcies).",
    ],
    whenBaggedSummary:
      "Règle générale : si votre projet nécessite moins de 20 sacs (environ 0,35 m³), le béton en sacs est plus simple, moins cher et ne nécessite aucune coordination de livraison.",

    calculatorCtaHeading: "Calculez votre besoin en béton",
    calculatorCtaText:
      "Utilisez nos calculateurs gratuits pour déterminer exactement combien de m³ ou de sacs vous avez besoin :",
    calculatorLinks: [
      {
        label: "Calculateur de béton",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calculez les m³ et le nombre de sacs pour dalles, semelles, poteaux et formes libres.",
      },
      {
        label: "Calculateur de tiges d'ancrage",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Déterminez l'espacement et le nombre de tiges pour votre fondation.",
      },
      {
        label: "Calculateur de lisse basse",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Estimez le bois de lisse basse pour le dessus de vos murs de fondation.",
      },
      {
        label: "Calculateur de bande d'arase",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calculez la bande d'arase entre la fondation et l'ossature.",
      },
    ],

    faqHeading: "Questions fréquentes",
    faqs: [
      {
        question: "Combien de sacs de béton pour 1 m³ ?",
        answer:
          "Il faut environ 57 sacs de 35 kg de béton prêt à l'emploi pour faire 1 m³. Un sac de 35 kg donne environ 0,017 m³. C'est pourquoi la plupart des projets de plus de 1 m³ sont mieux servis par le BPE en toupie.",
      },
      {
        question: "Le BPE est-il plus résistant que le béton en sacs ?",
        answer:
          "Pas nécessairement. Le béton en sacs standard atteint 25 à 30 MPa à 28 jours, tandis que le BPE résidentiel est généralement en C25/30 à C30/37. Les deux sont largement suffisants pour les dalles, allées et semelles résidentielles. L'avantage du BPE est la régularité du dosage : le rapport eau-ciment est contrôlé en centrale, tandis qu'avec les sacs, un surdosage en eau est l'erreur la plus fréquente et réduit la résistance.",
      },
      {
        question: "Peut-on commander du BPE en tant que particulier ?",
        answer:
          "Oui, la plupart des centrales à béton vendent aux particuliers. Vous dirigez la goulotte vers vos coffrages préparés. Prévoyez de l'aide (2 à 3 personnes minimum) pour tirer à la règle, talocher et finir le béton avant la prise. Préparez tout avant l'arrivée du camion : coffrages montés, ferraillage posé, outils prêts, aides briefées.",
      },
      {
        question: "Quel est le minimum de commande pour le BPE ?",
        answer:
          "La plupart des centrales ont un minimum de 1 à 2 m³. Les commandes en dessous de 2 à 3 m³ entraînent un supplément « petite quantité » de 30 à 60 € par m³ manquant. Par exemple, commander 1,5 m³ quand le seuil est à 3 m³ peut ajouter 45 à 90 € de frais. Demandez toujours le barème complet avant de commander.",
      },
      {
        question: "Combien de temps pour le durcissement du béton en sacs ?",
        answer:
          "Le béton en sacs standard permet la marche après 24 à 48 heures mais n'atteint sa résistance nominale qu'à 28 jours. Les formules à prise rapide (type Weber béton express) durcissent en 30 à 60 minutes et supportent la marche en 4 à 6 heures — idéal pour les poteaux de clôture. Pendant le durcissement, maintenez le béton humide les 3 à 7 premiers jours.",
      },
      {
        question: "Peut-on mélanger différentes marques de béton en sacs ?",
        answer:
          "Oui, les bétons prêts à l'emploi standard (Weber, PRB, Parexlanko) utilisent les mêmes ingrédients de base et sont compatibles. En revanche, ne mélangez pas du béton standard avec des produits spéciaux (béton rapide, mortier, béton fibré) car leurs formulations et temps de prise diffèrent. Utilisez le même type dans un même coulage.",
      },
    ],
  },

  concreteCostGuide: {
    title: "Combien coûte le béton ? Guide des prix 2024",
    metaDescription:
      "Le BPE coûte 80 à 150 € le m³ livré. Guide complet des prix pour dalles, semelles, allées, béton en sacs, coûts de main-d'œuvre et astuces d'économie.",

    heroTitle: "Combien coûte le béton ?",
    heroSubtitle: "Guide des prix 2024",
    heroDescription:
      "Détail complet des prix du béton pour chaque type de projet résidentiel : BPE en toupie, béton en sacs, main-d'œuvre et facteurs de coût.",

    quickAnswerHeading: "Réponse rapide",
    quickAnswerText:
      "Le BPE coûte 80 à 150 € le m³ livré en 2024, la plupart des projets résidentiels se situant entre 90 et 130 € le m³ pour du C25/30. Le coût total posé (main-d'œuvre, coffrage, finition inclus) va de 60 à 120 € le m² pour les ouvrages horizontaux (dalles, allées, terrasses). Le béton en sacs (Weber, PRB) coûte 5 à 7 € le sac de 35 kg, soit environ 280 à 400 € le m³ en matériaux seuls.",

    costByProjectHeading: "Coût du béton par type de projet",
    costByProjectIntro:
      "Ce que vous paierez dépend fortement du type et de la taille du projet. Voici les coûts typiques en 2024 pour les projets résidentiels courants, matériaux et pose professionnelle inclus :",
    costByProjectColProject: "Projet",
    costByProjectColTypical: "Coût typique",
    costByProjectColNotes: "Notes",
    costByProjectRows: [
      { project: "Allée de garage (2 voitures, 5×5 m)", typical: "2 500 – 4 500 €", notes: "3+ m³. Finition balai. L'imprimé ou le désactivé ajoute 30 à 50 %." },
      { project: "Terrasse (3×5 m)", typical: "1 500 – 3 000 €", notes: "1,5+ m³. Finition balai ou talochée. Options décoratives en plus." },
      { project: "Allée piétonne (1 m × 10 m)", typical: "800 – 1 500 €", notes: "1+ m³. Coffrage, coulage et finition compris." },
      { project: "Dalle de garage (6×6 m)", typical: "3 000 – 5 500 €", notes: "5+ m³. 12 à 15 cm d'épaisseur. Treillis soudé ou fibré." },
      { project: "Semelles filantes (maison 100 m²)", typical: "2 500 – 6 000 €", notes: "4 à 8 m³ selon les dimensions. Ferraillage inclus." },
      { project: "Murs de soubassement (sous-sol)", typical: "8 000 – 18 000 €", notes: "10 à 25 m³. Coffrage, ferraillage et enduit d'étanchéité inclus." },
      { project: "Escalier béton (5 marches, 1 m de large)", typical: "700 – 1 500 €", notes: "0,3 à 1 m³. Coffrage complexe et finition soignée." },
      { project: "Poteaux de clôture (20 poteaux)", typical: "100 – 200 € (en sacs)", notes: "1 à 2 sacs par poteau. Pas de toupie nécessaire." },
    ],

    baggedCostHeading: "Coût du béton en sacs",
    baggedCostIntro:
      "Le béton en sacs se vend en GSB (Leroy Merlin, Castorama, Bricomarché) et en négoces. Prix selon la taille et la marque :",
    baggedCostText1:
      "Sacs standard et prix (2024) : les sacs de 25 kg coûtent 3 à 5 € (environ 0,012 m³). Les sacs de 35 kg coûtent 5 à 7 € (environ 0,017 m³). Le sac de 35 kg offre le meilleur rapport qualité-prix au m³, mais à 35 kg par sac, le travail physique de gâchage est conséquent. Beaucoup de bricoleurs préfèrent les sacs de 25 kg comme compromis entre coût et maniabilité.",
    baggedCostText2:
      "Coût au m³ en sacs : avec des sacs de 35 kg à 6 €, un m³ coûte environ 342 € en matériau (57 sacs). Avec des sacs de 25 kg à 4 €, un m³ revient à environ 330 € (83 sacs). Ces prix sont nettement supérieurs au BPE (80–150 €/m³), mais les sacs n'ont pas de frais de livraison, pas de minimum de commande et pas de temps d'attente. Pour les projets de moins de 0,3 m³, les sacs sont presque toujours le choix le plus économique.",
    baggedCostText3:
      "Les bétons spéciaux en sacs coûtent plus cher : le béton rapide (type Weber béton express) coûte 7 à 10 € le sac de 25 kg. Le béton fibré haute résistance 6 à 9 €. Le béton pour plan de travail ou décoratif 15 à 25 € le sac de 25 kg. Pour la plupart des dalles, allées et semelles, le béton standard en sacs suffit amplement.",

    readyMixPricingHeading: "Prix du BPE",
    readyMixPricingIntro:
      "Le BPE se commande au m³ et est livré par camion-toupie. Voici à quoi vous attendre en appelant votre centrale locale :",
    readyMixPricingText1:
      "Prix de base : le C25/30 standard coûte 80 à 120 € le m³ dans la plupart des régions. Le C30/37 coûte 90 à 140 €. Le C35/45 haute résistance coûte 100 à 160 €. Les prix varient selon la région — les zones urbaines avec plusieurs centrales sont moins chères que les zones rurales.",
    readyMixPricingText2:
      "Frais supplémentaires : livraison de 50 à 100 € par voyage (couvre le carburant et le chauffeur). Supplément petite quantité de 30 à 60 € par m³ sous le seuil (généralement 2 à 3 m³). Temps d'attente de 1 à 3 € par minute au-delà du temps alloué (5 à 7 min/m³). Supplément samedi de 50 à 100 € dans certaines centrales.",
    readyMixPricingText3:
      "Adjuvants et options : entraîneur d'air (résistance gel-dégel) 3 à 6 €/m³. Fibres de polypropylène 4 à 8 €/m³. Accélérateur (prise rapide par temps froid) 5 à 12 €/m³. Retardateur (temps chaud) 3 à 8 €/m³. Pigment coloré 8 à 20 €/m³. Pompe à béton (accès difficile) 150 à 300 €/h.",

    factorsHeading: "Facteurs influençant le prix du béton",
    factorsIntro:
      "Le prix que vous paierez dépend de plusieurs facteurs au-delà du simple volume. Les comprendre aide à mieux budgéter :",
    factorsItems: [
      "Localisation — Les prix varient significativement selon les régions. L'Île-de-France est généralement 10 à 20 % plus chère que la province. Les zones rurales éloignées des centrales paient plus en raison du transport.",
      "Quantité commandée — Commander plus réduit le coût unitaire. Les suppléments pour petites quantités (sous 2–3 m³) ajoutent 30 à 60 €/m³. Si vous êtes proche du seuil, envisagez un petit projet annexe pour l'atteindre.",
      "Classe de résistance — Plus la classe est élevée, plus c'est cher. Le C25/30 suffit pour les terrasses et allées piétonnes. Le C30/37 est recommandé pour les garages et les dalles extérieures. Chaque classe au-dessus ajoute 5 à 15 €/m³.",
      "Adjuvants — L'entraîneur d'air, les fibres, les accélérateurs et les colorants ajoutent 3 à 20 €/m³ chacun. En climat froid, l'entraîneur d'air est quasi obligatoire pour le béton extérieur.",
      "Saison — Les prix du béton sont les plus élevés au printemps et en été quand la demande est forte. Les coulages en hiver peuvent être moins chers au m³ mais nécessitent de l'eau chaude et des couvertures isolantes.",
      "Distance de livraison — La plupart des centrales incluent la livraison dans un rayon de 15 à 25 km. Au-delà, comptez 1 à 3 € du km supplémentaire. Pour les sites éloignés, ces frais peuvent ajouter 50 à 200 € au total.",
    ],

    laborHeading: "Coûts de main-d'œuvre : faire soi-même ou confier à un pro",
    laborIntro:
      "Le coût du béton lui-même représente souvent moins de la moitié du coût total du projet. La main-d'œuvre, le coffrage, la finition et la préparation du terrain constituent le reste :",
    laborText1:
      "Coût en autoconstruction : vos principaux postes sont le béton (80–150 €/m³ en BPE ou 280–400 €/m³ en sacs), le bois de coffrage (30 à 100 €), le treillis soudé (20 à 60 €) et la location d'outils (30 à 80 € pour un vibrateur, une règle, une taloche). Une terrasse de 3×3 m (environ 1 m³) coûte 200 à 400 € en matériaux en autoconstruction, contre 800 à 1 500 € en prestation complète.",
    laborText2:
      "Coût avec un professionnel : les travaux de béton en prestation complète coûtent 60 à 120 € le m² pour les ouvrages horizontaux (dalle, allée, terrasse). Cela inclut la préparation du terrain, la forme, le coffrage, le ferraillage, le coulage, la finition et le nettoyage. Les finitions décoratives (béton imprimé, désactivé, ciré) ajoutent 30 à 80 €/m². Les ouvrages verticaux (murs de soubassement) coûtent 100 à 200 €/m².",
    laborText3:
      "Quand faire appel à un pro : envisagez un maçon professionnel pour tout ouvrage structurel (fondations, semelles porteuses), tout coulage de plus de 3 m³, les finitions décoratives, les surfaces en pente ou drainantes et tout projet nécessitant un permis et une réception. Le coût de rattraper un mauvais coulage (démolition et reconstruction) est 2 à 3 fois le coût d'une mise en œuvre correcte.",

    savingTipsHeading: "Astuces pour économiser",
    savingTipsIntro:
      "Plusieurs moyens permettent de réduire votre budget béton sans rogner sur la qualité :",
    savingTipsItems: [
      "Demandez plusieurs devis — Les prix peuvent varier de 15 à 30 % entre les centrales d'une même zone. Appelez au moins 3 fournisseurs et demandez le barème complet (livraison, supplément petite quantité, temps d'attente).",
      "Commandez la bonne quantité — Trop commander gaspille de l'argent ; pas assez signifie un second voyage coûteux. Utilisez notre calculateur puis ajoutez 5 à 10 % de marge.",
      "Évitez le supplément petite quantité — Si votre projet nécessite 1,5 m³ et que le seuil est à 2 m³, commandez 2 m³ et utilisez le surplus pour un petit chantier annexe. Le demi-m³ supplémentaire coûte moins que le supplément.",
      "Planifiez hors saison — Si votre planning le permet, programmez les coulages entre octobre et mars. Les prix et les disponibilités sont meilleurs qu'au printemps et en été.",
      "Préparez vous-même le terrain — Même si vous faites appel à un maçon pour le coulage, vous pouvez économiser 300 à 1 000 € en faisant vous-même le terrassement, la forme en tout-venant et le coffrage. Les maçons coulent volontiers dans un coffrage bien réalisé.",
      "Comparez sacs vs BPE pour les petits travaux — Pour les projets de moins de 1 m³, faites le calcul dans les deux sens. Tenez compte de la valeur de votre temps : gâcher 40 sacs prend 3 à 4 heures. Si votre temps vaut 25 €/h, ajoutez 75 à 100 € au coût des sacs.",
    ],

    calculatorCtaHeading: "Calculez votre budget béton",
    calculatorCtaText:
      "Utilisez nos calculateurs gratuits pour estimer le volume exact de béton nécessaire, puis multipliez par le prix local au m³ :",
    calculatorLinks: [
      {
        label: "Calculateur de béton",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calculez les m³ et sacs pour dalles, semelles, poteaux et formes libres.",
      },
      {
        label: "Calculateur de tiges d'ancrage",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Espacement et nombre de tiges pour votre fondation.",
      },
      {
        label: "Calculateur de lisse basse",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Bois de lisse basse pour vos murs de fondation.",
      },
      {
        label: "Calculateur de bande d'arase",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Bande d'arase entre fondation et ossature.",
      },
    ],

    faqHeading: "Questions fréquentes",
    faqs: [
      {
        question: "Combien coûte un mètre cube de béton en 2024 ?",
        answer:
          "Un m³ de BPE C25/30 coûte 80 à 130 € en matériau, selon la région et la centrale. Ajoutez les frais de livraison (50 à 100 €) et le supplément éventuel pour petite quantité. Le coût total livré pour un projet de 3 à 4 m³ est généralement de 90 à 140 € le m³ tout compris.",
      },
      {
        question: "Combien coûte une dalle de 3×3 m ?",
        answer:
          "Une dalle de 3×3 m de 10 cm d'épaisseur nécessite environ 1 m³ de béton. En autoconstruction : 150 à 350 € (béton, coffrage, treillis, tout-venant). En prestation professionnelle : 600 à 1 200 € selon la préparation du terrain et la finition.",
      },
      {
        question: "Est-il moins cher de gâcher soi-même ou de commander du BPE ?",
        answer:
          "Pour les petits travaux (moins de 0,5 m³), gâcher des sacs est moins cher en matériau. Au-delà de 1 m³, le BPE est presque toujours plus économique au m³ et fait gagner des heures de travail. Le point de basculement est autour de 0,5 à 0,75 m³.",
      },
      {
        question: "Combien coûte une allée de garage en béton ?",
        answer:
          "Une allée de garage standard (5×5 m, 12 cm d'épaisseur) coûte 2 500 à 4 500 € posée en 2024. Cela inclut environ 3 m³ de béton, la forme, le coffrage, le treillis et la finition balai. Le béton imprimé ou désactivé ajoute 30 à 50 % au budget.",
      },
      {
        question: "Pourquoi le prix du béton varie-t-il autant selon les régions ?",
        answer:
          "Le prix dépend de la proximité des cimenteries, du coût des granulats locaux, du prix du carburant pour la livraison, des tarifs de main-d'œuvre et de la concurrence entre centrales. Les régions avec des cimenteries actives (Nord, Rhône-Alpes) ont des prix plus bas. Les zones insulaires et isolées paient le plus cher.",
      },
      {
        question: "Comment calculer le volume de béton nécessaire ?",
        answer:
          "Le béton se mesure en m³. Pour les dalles rectangulaires : longueur (m) × largeur (m) × épaisseur (m). Une dalle de 3×4 m de 10 cm = 3 × 4 × 0,10 = 1,2 m³. Ajoutez 5 à 10 % de marge. Utilisez notre calculateur de béton gratuit pour les formes complexes.",
      },
    ],
  },

  howMuchPaint: {
    title: "Combien de peinture me faut-il ? Guide complet",
    metaDescription:
      "Combien de peinture ? Guide complet couvrant le métrage des murs, le rendement par type de peinture, le nombre de couches, la préparation des surfaces, plafonds, boiseries et budget.",

    heroTitle: "Combien de peinture me faut-il ?",
    heroSubtitle: "Guide complet",
    heroDescription:
      "Tout ce qu'il faut savoir pour calculer la bonne quantité de peinture pour les murs, plafonds et boiseries — ni trop, ni trop peu.",

    quickAnswerHeading: "Réponse rapide",
    quickAnswerText:
      "Un litre de peinture intérieure couvre environ 10 à 12 m² en une couche sur surface lisse et préparée. Pour une pièce standard (3×4 m, 2,50 m sous plafond), il faut environ 10 L pour deux couches sur les murs. Ajoutez 5 L pour le plafond et 1 L pour les boiseries. Arrondissez toujours au pot supérieur — les restes servent pour les retouches futures.",

    measuringWallsHeading: "Comment mesurer vos murs",
    measuringWallsIntro:
      "Des mesures précises sont la base de toute estimation de peinture. Voici comment mesurer comme un peintre professionnel :",
    measuringWallsItems: [
      "Mesurez la longueur de chaque mur en mètres et multipliez par la hauteur sous plafond. Un mur de 4 m de long avec 2,50 m sous plafond = 10 m². Répétez pour les quatre murs et additionnez.",
      "Pour un calcul rapide de la pièce entière, mesurez le périmètre (somme des longueurs des murs) et multipliez par la hauteur. Une pièce de 3×4 m a un périmètre de 14 m, fois 2,50 m = 35 m² de surface murale.",
      "Déduisez les ouvertures : une porte standard fait environ 1,80 m² (0,90×2,00 m) et une fenêtre standard environ 1,50 m² (1,20×1,25 m). Pour une pièce avec une porte et deux fenêtres, déduisez environ 5 m².",
      "Pour les pièces avec plafond en pente ou cathédrale, mesurez la hauteur au point le plus haut et le plus bas, faites la moyenne et multipliez par la longueur du mur.",
      "Incluez l'intérieur des placards si vous comptez les peindre — un placard standard de 60×150 cm ajoute environ 5 m² de surface murale.",
      "Notez toutes les mesures avant d'aller au magasin de peinture. Prenez des photos des pièces pour référence lors du choix des teintes.",
    ],
    measuringWallsSummary:
      "Une maison typique de 100 m² habitable a 300 à 400 m² de surface murale peignable, selon la hauteur sous plafond, le nombre de pièces et les ouvertures.",

    coverageRatesHeading: "Rendement par type de peinture",
    coverageRatesIntro:
      "Toutes les peintures ne couvrent pas la même surface. Le rendement varie selon la finition, la qualité et la surface à peindre.",
    coverageRatesText1:
      "Les finitions mates ont le meilleur rendement à 10 à 12 m² par litre car elles contiennent moins de liant et s'étalent facilement. Elles sont idéales pour les plafonds et les pièces peu fréquentées mais montrent les marques. La finition veloutée (ou satinée mate) couvre 9 à 11 m² par litre et est le choix le plus populaire pour les séjours, chambres et couloirs — reflet subtil, facile à nettoyer sans être trop brillant.",
    coverageRatesText2:
      "La finition satinée couvre 9 à 11 m² par litre et convient parfaitement aux cuisines, salles de bain et pièces à fort passage grâce à sa résistance à l'humidité et sa facilité de nettoyage. La finition brillante couvre 8 à 10 m² par litre et s'utilise pour les boiseries, les portes et les fenêtres — sa surface réfléchissante est très durable et se nettoie facilement. La finition laquée couvre 7 à 9 m² par litre et s'utilise pour les effets décoratifs et les meubles.",
    coverageRatesText3:
      "Les peintures de qualité professionnelle (Tollens, Sikkens, Zolpan) atteignent la fourchette haute de ces rendements grâce à une concentration en pigments supérieure. Les peintures d'entrée de gamme sont souvent en dessous et peuvent nécessiter une couche supplémentaire. Les surfaces texturées, poreuses ou jamais peintes réduisent le rendement de 20 à 30 % — appliquez toujours une sous-couche sur ces surfaces.",

    numberOfCoatsHeading: "Combien de couches faut-il ?",
    numberOfCoatsIntro:
      "Le nombre de couches affecte directement la quantité de peinture à acheter. Voici quand appliquer une, deux ou trois couches :",
    numberOfCoatsItems: [
      "Une couche suffit uniquement pour les retouches avec la même peinture et la même teinte sur une surface préalablement peinte en bon état. Certaines peintures premium annoncent une couche, mais les peintres professionnels recommandent toujours deux couches.",
      "Deux couches est la recommandation standard pour pratiquement tous les projets de peinture. La première couche scelle et imprègne la surface, la seconde apporte la profondeur de couleur, l'uniformité du reflet et la durabilité maximale. Deux couches de peinture de qualité durent 7 à 10 ans sur les murs intérieurs.",
      "Trois couches sont nécessaires pour un changement de teinte radical — surtout du foncé (rouge, bleu marine, vert foncé) vers du clair (blanc, crème, pastel). La première couche de sous-couche teintée neutralise l'ancienne couleur, suivie de deux couches de finition.",
      "Les plaques de plâtre neuves exigent toujours une couche de sous-couche plus deux couches de finition (trois couches au total). La sous-couche scelle la surface poreuse et uniformise l'absorption. Sans sous-couche, vous obtiendrez du « lustrage » — des différences de brillance visibles entre les joints et le carton.",
      "Les surfaces texturées (crépi, enduit projeté) peuvent nécessiter une couche supplémentaire car la texture crée des creux et des bosses difficiles à couvrir uniformément en un seul passage.",
    ],
    numberOfCoatsSummary:
      "Pour le budget, calculez toujours la quantité de peinture sur la base de deux couches. Si une sous-couche est nécessaire, calculez-la séparément avec son propre rendement.",

    surfacePrepHeading: "Préparation des surfaces",
    surfacePrepIntro:
      "La préparation des surfaces est le facteur le plus déterminant pour la durabilité d'une peinture. Aucune peinture, même coûteuse, ne compense une mauvaise préparation.",
    surfacePrepItems: [
      "Nettoyez toutes les surfaces avant de peindre. Poussière, graisse et toiles d'araignée empêchent l'adhérence. Essuyez les murs avec un chiffon humide ou utilisez une solution de lessive Saint-Marc pour les murs de cuisine graisseux.",
      "Rebouchez les trous de clous, les fissures et les impacts avec un enduit de rebouchage léger. Appliquez au couteau, laissez sécher, puis poncez au grain 120. Pour les trous de plus de 15 mm, utilisez de la bande à joint et de l'enduit en deux passes.",
      "Poncez légèrement les surfaces brillantes au grain 120 pour créer de l'accroche. C'est particulièrement important quand on repeint sur une finition satinée ou brillante.",
      "Retirez ou poncez toute peinture écaillée jusqu'à retrouver une surface saine. Estompez les bords de la peinture restante au papier de verre.",
      "Appliquez du ruban de masquage sur les boiseries, les plinthes, le bord du plafond et toutes les zones à protéger. Lissez le ruban avec un couteau à enduire pour empêcher la peinture de passer dessous.",
      "Protégez les sols et les meubles avec des bâches. Les bâches en toile adhèrent mieux au sol et absorbent les éclaboussures. Déplacez les meubles au centre de la pièce et couvrez-les de film polyane.",
    ],

    ceilingPaintHeading: "Calculer la peinture de plafond",
    ceilingPaintIntro:
      "Les plafonds nécessitent un calcul séparé car ils utilisent une formulation différente des murs.",
    ceilingPaintText1:
      "La peinture de plafond est formulée avec un extrait sec plus élevé pour limiter les éclaboussures lors de l'application au rouleau au-dessus de la tête, et elle sèche en finition parfaitement mate pour atténuer les imperfections. Le rendement standard est de 10 à 12 m² par litre. Pour calculer la quantité, multipliez la longueur par la largeur de la pièce : une pièce de 3×4 m a 12 m² de plafond. À 10 m²/L, cela fait environ 1,2 L — achetez un pot de 2,5 L.",
    ceilingPaintText2:
      "La plupart des plafonds n'ont besoin que d'une couche si vous repeignez dans le même blanc. Pour un changement de teinte ou une couche sur une tache, appliquez d'abord une sous-couche puis deux couches de finition. Pour les plafonds texturés (crépi), réduisez le rendement à 6 à 8 m² par litre. Une maison complète de 100 m² nécessite généralement 10 à 15 L de peinture de plafond.",

    trimPaintHeading: "Calculer la peinture des boiseries",
    trimPaintIntro:
      "Les boiseries (plinthes, portes, fenêtres, moulures) se peignent généralement avec une finition satinée ou brillante pour la durabilité et la facilité de nettoyage.",
    trimPaintText1:
      "Plinthes : mesurez les mètres linéaires de plinthes. Les plinthes standard font 7 à 10 cm de haut. Une pièce avec 14 m de plinthes a environ 1,4 m² de surface peignable. Un pot de 1 L de peinture boiseries couvre environ 10 m² — suffisant pour les plinthes d'une pièce moyenne.",
    trimPaintText2:
      "Portes : une porte intérieure standard (les deux faces) a environ 3,5 m² de surface peignable. Les encadrements de fenêtre font environ 1 m² par fenêtre. Les moulures de corniche ajoutent environ 0,15 m² par mètre linéaire. Pour une maison complète, prévoyez 2 à 5 L de peinture boiseries pour toutes les plinthes, huisseries, fenêtres et moulures. Peignez les portes au rouleau mousse pour une finition la plus lisse possible.",

    costBreakdownHeading: "Budget peinture détaillé",
    costBreakdownIntro:
      "Comprendre le coût complet d'un projet de peinture aide à budgéter avec précision et à choisir les bons produits.",
    costBreakdownText1:
      "La peinture murale est le poste principal. Prévoyez 3 à 12 € le litre selon la gamme. Pour une pièce type nécessitant 10 L en deux couches, la peinture murale coûte 30 à 120 €. Pour une maison de 100 m² (environ 35 L pour les murs), la peinture coûte 100 à 420 €. Les pots de 10 L font économiser 15 à 20 % par litre par rapport aux pots de 2,5 L.",
    costBreakdownText2:
      "La sous-couche coûte 4 à 8 € le litre. Les surfaces neuves (plâtre, bois) nécessitent environ 1 litre pour 8 à 10 m². Pour une maison de 100 m², comptez 30 à 50 L de sous-couche (120 à 400 €). Les peintures auto-primantes (en gamme premium) éliminent ce coût mais sont plus chères au litre.",
    costBreakdownText3:
      "Les fournitures pour une maison complète coûtent 60 à 150 € au total : manchons et rouleaux (15 à 25 €), perche télescopique pour les plafonds (10 à 20 €), pinceaux biseautés de 50 et 63 mm (15 à 25 €), ruban de masquage (15 à 30 € pour plusieurs rouleaux), bâches de protection (10 à 20 €), bacs à peinture (5 à 10 €), papier de verre et enduit (5 à 10 €). Les outils de qualité font une différence visible sur le résultat — n'économisez pas sur les manchons et les pinceaux.",

    calculatorCtaHeading: "Calculez votre besoin en peinture",
    calculatorCtaText:
      "Utilisez nos calculateurs gratuits pour une estimation instantanée et précise de votre projet.",
    calculatorLinks: [
      {
        label: "Calculateur de rendement peinture",
        href: "/calculators/finishing/paint-coverage-calculator",
        description: "Combien de litres pour votre surface — avec ajustement des couches et du rendement.",
      },
      {
        label: "Calculateur de coût de peinture",
        href: "/calculators/finishing/paint-cost-calculator",
        description: "Coût total du projet par gamme de qualité — fournitures incluses.",
      },
      {
        label: "Calculateur de primaire",
        href: "/calculators/finishing/primer-calculator",
        description: "Combien de sous-couche pour votre type de surface — plâtre neuf, bois ou rénovation.",
      },
    ],

    faqHeading: "Questions fréquentes",
    faqs: [
      {
        question: "Combien de peinture pour une pièce de 3×4 m ?",
        answer:
          "Une pièce de 3×4 m avec 2,50 m sous plafond a environ 35 m² de mur. Déduisez environ 4 m² pour une porte et une fenêtre, soit 31 m². À 10 m²/L et 2 couches, il faut 6,2 L — achetez un pot de 10 L. Ajoutez 5 L de peinture plafond pour les 12 m². Total : 10 L de peinture murale + 5 L de peinture plafond.",
      },
      {
        question: "Combien de mètres carrés couvre un litre de peinture ?",
        answer:
          "Un litre de peinture intérieure couvre 10 à 12 m² sur surface lisse et préparée en une couche. La finition mate couvre environ 12 m²/L, la satinée environ 10 m²/L. Sur surface poreuse ou texturée (plâtre neuf, enduit), le rendement tombe à 6 à 8 m²/L pour la première couche.",
      },
      {
        question: "Pot de 2,5 L ou pot de 10 L ?",
        answer:
          "Les pots de 10 L sont 15 à 20 % moins chers au litre et garantissent une teinte uniforme. Achetez en 10 L dès que vous avez besoin de plus de 5 L de la même couleur. Pour les murs d'accent ou les petites surfaces, les pots de 2,5 L sont plus pratiques. Beaucoup de magasins vendent aussi des pots de 1 L pour les retouches.",
      },
      {
        question: "Combien coûte la peinture d'une pièce en faisant soi-même ?",
        answer:
          "Un projet de peinture de pièce en autoconstruction coûte 60 à 180 € en matériaux : 10 L de peinture (30 à 120 €), fournitures (20 à 40 €) et sous-couche éventuelle (10 à 20 €). Un peintre professionnel facture 200 à 500 € pour la même pièce. Pour une maison complète, comptez 500 à 1 500 € en matériaux vs 2 500 à 6 000 € en prestation professionnelle.",
      },
      {
        question: "Faut-il une sous-couche avant de peindre ?",
        answer:
          "La sous-couche est indispensable sur le plâtre neuf, le bois brut, les zones réparées et lors d'un changement de teinte radical (foncé vers clair). Sur des surfaces déjà peintes en bon état avec une teinte similaire, la sous-couche n'est pas nécessaire — surtout avec les peintures premium auto-primantes.",
      },
      {
        question: "Quelle est la meilleure peinture pour les murs intérieurs ?",
        answer:
          "Pour la plupart des murs intérieurs, une finition veloutée (satinée mate) en gamme milieu à haut de gamme offre le meilleur compromis entre aspect, durabilité et facilité de nettoyage. Les marques recommandées sont Tollens Idéal, Sikkens Alphacryl, Zolpan Matclean et Dulux Valentine Crème de Couleur. Réservez le mat pur aux plafonds et le satiné brillant aux boiseries et pièces humides.",
      },
    ],
  },

  lumberPrices: {
    title: "Prix du bois de charpente : guide des tarifs",
    metaDescription:
      "Prix du bois de charpente par essence, section et qualité. Résineux, BLC, contreplaqué, tendances du marché, où acheter et remises sur volume pour professionnels et autoconstructeurs.",
    heroTitle: "Prix du bois de charpente",
    heroSubtitle: "Guide des tarifs",
    heroDescription:
      "Guide complet des tarifs du bois de construction en France — des montants d'ossature au BLC — pour budgéter précisément votre prochain chantier.",

    quickAnswerHeading: "Réponse rapide",
    quickAnswerText:
      "Un montant d'ossature en épicéa C24 de 45×145 mm en 3 m coûte 6 à 10 € au détail chez les négoces. Le bois de charpente résineux C24 se négocie entre 250 et 500 € le m³ en gros. Le BLC (bois lamellé collé) va de 600 à 1 200 € le m³. Le contreplaqué coûte 10 à 50 € le panneau de 2500×1220 mm selon l'épaisseur et la qualité. Les prix fluctuent avec le marché : demandez toujours des devis à jour avant de commander.",

    speciesPricingHeading: "Prix du bois par essence",
    speciesPricingIntro:
      "L'essence est le facteur le plus déterminant du prix. Voici les tarifs courants du marché :",
    speciesPricingText1:
      "Le bois de charpente résineux — épicéa, pin sylvestre et douglas — est le plus abordable et constitue l'ossature de la construction résidentielle. Un montant de 45×145 mm en 3 m coûte 6 à 10 € au détail, et les pièces longues comme les 45×250 mm en 5 m coûtent 15 à 30 €. Le douglas, utilisé pour les applications à durabilité naturelle (classe 3), est 10 à 30 % plus cher que l'épicéa. Le mélèze, prisé pour les bardages et terrasses, coûte 50 à 100 % de plus que l'épicéa.",
    speciesPricingText2:
      "Les feuillus domestiques ont une gamme de prix étendue. Le peuplier, le feuillu le plus abordable, coûte 250 à 400 €/m³. Le chêne, le bois le plus utilisé en menuiserie et charpente traditionnelle, coûte 500 à 900 €/m³ en sciage. Le hêtre coûte 400 à 700 €/m³, le frêne 500 à 800 €/m³, et le noyer — le feuillu premium — coûte 800 à 2 000 €/m³ selon la largeur et la qualité. Ces prix s'entendent pour du bois en plot ou avivé brut de sciage chez un scieur ou un négoce bois.",
    speciesPricingText3:
      "Les bois exotiques et importés sont au sommet de l'échelle des prix. L'ipé (lapacho), référence pour les terrasses, coûte 30 à 50 € le mètre linéaire en lame de terrasse 21×145 mm, soit 60 à 100 €/m². L'acajou véritable coûte 800 à 1 500 €/m³. Le teck, utilisé pour le mobilier extérieur et la marine, coûte 1 200 à 2 500 €/m³. Le cumaru, le padouk et les autres exotiques populaires se situent entre 600 et 1 500 €/m³. Les taxes à l'importation, les coûts de transport et les certifications de durabilité (FSC, PEFC) influencent les prix des bois exotiques.",

    dimensionalVsEngineeredHeading: "Bois massif vs bois d'ingénierie",
    dimensionalVsEngineeredIntro:
      "La construction moderne utilise de plus en plus de produits en bois d'ingénierie aux côtés du bois massif traditionnel. Comprendre les différences de coût aide à choisir le bon produit pour chaque application :",
    dimensionalVsEngineeredItems: [
      "Le bois massif (45×95, 45×145, 45×200, etc.) est scié directement dans les grumes et constitue le choix par défaut pour l'ossature murale, la charpente et les solives courtes. C'est l'option la moins chère au mètre linéaire pour les portées de moins de 5 m.",
      "Le BLC (bois lamellé collé) en GL24h coûte 8 à 15 € le mètre linéaire pour une section de 100×200 mm — environ 2 à 3 fois le prix du bois massif comparable. Il s'utilise pour les linteaux, les poutres apparentes et les longues portées.",
      "Les poutrelles en I (type Steico Joist, Finnjoist) coûtent 5 à 10 € le mètre linéaire selon la hauteur. Elles remplacent les solives massives de 45×250 et 45×300 pour les portées supérieures à 4 m, offrant légèreté, stabilité et des passages pour les gaines.",
      "Les panneaux contrecollés CLT (Cross Laminated Timber) coûtent 400 à 800 € le m² selon l'épaisseur. Utilisés pour les murs, planchers et toitures de bâtiments de grande hauteur en bois, ils restent un produit de niche pour la construction résidentielle individuelle.",
      "Le LVL (Laminated Veneer Lumber, type Kerto) coûte 6 à 12 € le mètre linéaire pour une section de 45×200 mm et s'utilise pour les poutres, les linteaux et les éléments fortement sollicités.",
    ],
    dimensionalVsEngineeredSummary:
      "Pour la plupart des ossatures résidentielles, le bois massif reste le choix le plus rentable. Le bois d'ingénierie devient économiquement intéressant quand vous avez besoin de portées plus longues, de charges plus lourdes ou de performances plus prévisibles.",

    gradeHeading: "Classement du bois et impact sur le prix",
    gradeIntro:
      "Le classement du bois affecte directement le prix — les classes supérieures coûtent plus cher car elles ont moins de défauts et des propriétés mécaniques plus constantes :",
    gradeItems: [
      "C18 — Le classement structural d'entrée de gamme, adapté aux éléments non porteurs et aux usages secondaires (coffrages, étaiements). Généralement 10 à 20 % moins cher que le C24.",
      "C24 — Le classement structural standard pour les solives, chevrons, montants et charpente courante. C'est ce que la plupart des négoces stockent comme bois de structure par défaut.",
      "C30 — Moins de nœuds et des propriétés mécaniques supérieures au C24. Utilisé quand les calculs de structure exigent des contraintes admissibles plus élevées. Coûte 15 à 25 % de plus que le C24.",
      "GL24h (BLC) — Le classement standard du bois lamellé collé. La résistance est garantie par le collage de lamelles triées. Coûte 2 à 3 fois le prix du bois massif pour une section équivalente.",
      "Classement d'aspect (1er choix, choix courant) — Utilisé pour la charpente apparente, les poutres visibles et la menuiserie. Le prix est 50 à 100 % au-dessus des classes structurelles standard.",
      "QF1 / QF2 (qualité ameublement) — Les meilleurs classements pour les feuillus, exigeant de grandes sections nettes. Le classement le plus cher, typiquement 30 à 50 % de plus que le « tout venant ».",
    ],
    gradeSummary:
      "Pour l'ossature, le C24 est le standard et le choix le plus économique. Ne spécifiez des classes supérieures que quand les calculs ou l'aspect l'exigent — vous paierez nettement plus pour un gain marginal en résistance.",

    priceTrendsHeading: "Tendances du marché et prévisions",
    priceTrendsIntro:
      "Les prix du bois sont notoirement volatils. Comprendre les cycles du marché aide à planifier vos achats :",
    priceTrendsText1:
      "Le marché du bois a atteint des sommets historiques en 2021-2022, porté par la demande de rénovation post-Covid et les ruptures d'approvisionnement. Un montant de 45×145 mm qui coûtait 4 à 5 € en 2019 a atteint 10 à 14 € au pic. Fin 2023, les prix sont redescendus à 6 à 8 €, mais restent 30 à 50 % au-dessus des niveaux pré-2020.",
    priceTrendsText2:
      "Les variations saisonnières sont prévisibles : les prix montent au printemps et en été (mars à juin) quand la saison de construction bat son plein, et baissent à l'automne et en hiver (octobre à janvier). Acheter la charpente en novembre ou décembre peut faire économiser 10 à 20 % par rapport aux prix de mai. Mais il faut un stockage couvert et sec.",
    priceTrendsText3:
      "Les facteurs structurels qui influencent les prix du bois incluent les mises en chantier (le principal moteur de la demande), la politique forestière européenne, les aléas climatiques (scolytes, incendies), le coût de l'énergie pour les scieries, et les importations de bois scandinave et d'Europe de l'Est. Le marché français est aussi affecté par la demande croissante de construction bois liée à la RE 2020.",

    whereToBuyHeading: "Où acheter : GSB vs négoce vs scieur",
    whereToBuyIntro:
      "L'endroit où vous achetez le bois impacte significativement le coût total. Voici les principaux canaux, du plus au moins cher par pièce :",
    whereToBuyItems: [
      "Grandes surfaces de bricolage (Leroy Merlin, Castorama, Bricomarché) : le plus pratique pour les petites quantités et les pièces au détail. Prix affichés, retours faciles, stock immédiat. Mais 20 à 40 % plus cher que le négoce pour les mêmes essences et sections. Idéal pour : particuliers, petites réparations, projets de moins de 500 € en bois.",
      "Négoces de matériaux (Point P, Gedimat, BigMat, Bois & Matériaux) : meilleur contrôle qualité, choix plus large d'essences et de sections, conseils spécialisés et prix au volume. Livraison dès 500 € de commande. Économie de 15 à 30 % par rapport aux GSB. Idéal pour : artisans, gros projets d'autoconstruction, charpente complète.",
      "Scieries et grossistes : les prix les plus bas, 30 à 50 % sous le détail, mais des minimums de commande importants (souvent 1 à 5 m³). Certaines scieries vendent aux particuliers, surtout dans les régions forestières (Jura, Vosges, Landes, Massif Central). Idéal pour : charpente de maison complète, projets en bois massif, comptes professionnels.",
      "Plateformes en ligne spécialisées (e-wood.shop, bois.com, dispano.fr) : bonne source pour les bois exotiques, les bois de menuiserie et les essences spécifiques. Le prix inclut une prime pour la sélection et la livraison. Idéal pour : menuisiers recherchant des essences spécifiques ou du bois figuré.",
      "Scieries mobiles et propriétaires forestiers : bois de sciage brut aux prix les plus bas (0,50 à 2 €/mètre linéaire pour les résineux courants). Nécessite un séchage (naturel ou four) et un rabotage. Idéal pour : autoconstructeurs ruraux, projets de charpente traditionnelle, bricoleurs équipés.",
    ],
    whereToBuySummary:
      "Pour les projets de plus de 1 000 € en bois, demandez toujours un devis à au moins un négoce en plus de vérifier les prix en GSB. L'économie sur un lot de charpente peut facilement atteindre 500 à 2 000 €.",

    bulkDiscountsHeading: "Achats en volume et remises",
    bulkDiscountsIntro:
      "Acheter en volume débloque des économies significatives. Voici comment fonctionnent les tarifs dégressifs :",
    bulkDiscountsItems: [
      "Prix au lot/palette : le bois vendu par palette (un paquet cerclé, généralement 50 à 100 pièces de la même section) coûte 10 à 20 % de moins que le prix à la pièce. Une palette de montants 45×145 en 3 m (60 pièces) coûte 350 à 550 € soit 5,80 à 9,20 € par pièce, contre 7 à 12 € au détail.",
      "Lots de charpente complète : les négoces proposent un chiffrage de votre liste complète de bois (montants, lisses, linteaux, solives, chevrons, panneaux) en « lot charpente » avec une remise globale de 15 à 25 % sous la somme des prix unitaires. Soumettez vos plans et demandez au moins deux chiffrages.",
      "Comptes professionnels : les artisans qui achètent régulièrement obtiennent un compte pro avec 5 à 15 % de remise supplémentaire. La plupart des négoces demandent un numéro SIRET et un historique d'achats.",
      "Promotions saisonnières : les GSB font des promotions majeures au printemps (pour capter la demande de saison) et à l'automne (pour écouler les stocks). Surveillez les -10 à -15 % sur le bois de charpente et les offres « la palette au prix du lot ».",
    ],
    bulkDiscountsSummary:
      "La plus grosse économie est de demander un chiffrage complet de votre lot de charpente à un négoce. Pour une maison typique de 100 m², la différence entre le prix au détail en GSB et un lot négocié peut atteindre 2 000 à 6 000 €.",

    calculatorCtaHeading: "Calculez votre budget bois",
    calculatorCtaText:
      "Utilisez nos calculateurs gratuits pour estimer le coût exact de votre projet — des montants d'ossature au contreplaqué.",
    calculatorLinks: [
      { label: "Calculateur de coût du bois", href: "/calculators/hardware/lumber-cost-calculator", description: "Estimez le coût total par section et quantité." },
      { label: "Calculateur de cubage", href: "/calculators/hardware/board-feet-calculator", description: "Convertissez les dimensions en volume avec estimation du coût." },
      { label: "Calculateur de contreplaqué", href: "/calculators/hardware/plywood-calculator", description: "Nombre de panneaux et coût total par épaisseur." },
    ],

    faqHeading: "Questions fréquentes",
    faqs: [
      { question: "Combien coûte un montant de 45×145 en 3 m ?", answer: "Un montant en épicéa C24 de 45×145 mm en 3 m coûte 6 à 10 € au détail dans les négoces et 8 à 12 € en GSB. En palette (50 à 60 pièces), le prix descend à 4 à 7 € la pièce. Les prix varient selon la région et la période. Vérifiez les prix en ligne de votre négoce local pour les tarifs à jour." },
      { question: "Pourquoi le bois est-il si cher par rapport à 2019 ?", answer: "Les prix ont bondi de 200 à 300 % en 2021-2022 en raison de la demande de rénovation post-Covid, des arrêts temporaires de scieries et des perturbations d'approvisionnement. Les prix ont sensiblement baissé depuis les pics mais restent 30 à 50 % au-dessus des niveaux pré-2020, en raison de la hausse des coûts d'exploitation des scieries, de l'énergie et de la demande structurelle de construction bois." },
      { question: "Quelle est la meilleure période pour acheter du bois ?", answer: "L'automne et l'hiver (octobre à janvier) offrent généralement les prix les plus bas car la construction ralentit. Vous pouvez économiser 10 à 20 % par rapport aux prix de printemps et d'été. Si vous avez un stockage couvert et sec, acheter votre lot de charpente en novembre pour un chantier au printemps est une bonne stratégie." },
      { question: "Le bois traité vaut-il le surcoût ?", answer: "Oui, pour tout bois en contact avec le sol, à moins de 20 cm du sol, ou exposé à l'humidité persistante. Le bois traité autoclave coûte 30 à 80 % de plus que le résineux non traité mais dure 20 à 40 ans contre 3 à 5 ans en contact avec le sol. Il est imposé par le DTU pour les lisses basses, les lambourdes de terrasse et tout élément structurel proche du terrain." },
      { question: "Combien de bois pour l'ossature d'une maison ?", answer: "Une maison à ossature bois typique de 100 m² au sol nécessite 8 à 12 m³ de bois de charpente pour l'ossature complète (murs, plancher, toiture). Cela représente 300 à 400 montants, 30 à 50 panneaux OSB, plus les solives, chevrons/fermettes, lisses et linteaux. Au tarif actuel, le lot bois pour une maison de 100 m² coûte 6 000 à 12 000 € selon l'essence et le fournisseur." },
      { question: "Quelle est la différence entre bois sec et bois vert ?", answer: "Le bois sec (KD, séché au four) a un taux d'humidité inférieur à 18 %, ce qui le rend stable et peu sujet au retrait. Le bois vert dépasse 18 % d'humidité et rétrécira en séchant — il est moins cher mais ne convient que là où le retrait est acceptable (charpente traditionnelle, structures temporaires). Pour l'ossature bois, utilisez toujours du bois sec pour éviter les fissures dans les finitions intérieures." },
    ],
  },

  compositeVsWood: {
    title: "Terrasse composite vs bois : que choisir ?",
    metaDescription:
      "Composite vs bois pour terrasse : coût initial, valeur à long terme, durabilité, entretien, esthétique, durée de vie et impact environnemental. Guide complet pour choisir le bon matériau.",

    heroTitle: "Terrasse composite vs bois",
    heroSubtitle: "Que choisir ?",
    heroDescription:
      "Comparaison complète des lames de terrasse composite et bois pour vous aider à choisir selon votre budget, votre climat et votre style de vie.",

    quickAnswerHeading: "Réponse rapide",
    quickAnswerText:
      "Choisissez le composite si vous voulez un entretien minimal, une durée de vie de 25 à 50 ans et un aspect constant dans le temps. Choisissez le bois (pin traité ou douglas) si le budget initial est votre priorité, si vous aimez l'aspect et le toucher du bois naturel, et si l'entretien annuel ne vous dérange pas. Le composite coûte 2 à 3 fois plus cher à l'achat mais fait économiser sur 20 ans en supprimant les coûts de saturateur, lasure et remplacement.",

    whatIsCompositeHeading: "Qu'est-ce que le composite ?",
    whatIsCompositeText1:
      "Le composite (ou bois composite) est un matériau d'ingénierie composé de fibres de bois (sciure, farine de bois) et de polymères plastiques (polyéthylène ou polypropylène). Les fibres de bois apportent la rigidité et l'aspect naturel, le plastique la résistance à l'humidité et la durabilité. Les lames modernes de qualité ont un revêtement polymère protecteur (coextrusion) sur les quatre faces qui résiste aux taches, à la décoloration et aux rayures.",
    whatIsCompositeText2:
      "Les marques de composite leaders en France sont Silvadec (fabricant français, Bretagne), UPM ProFi, Fiberon, TimberTech et Trex. Les prix vont de 20 à 60 € le m² pour les lames seules, la plupart des propriétaires choisissant des produits milieu de gamme à 30 à 45 €/m². Les lames sont disponibles en longueurs de 2,20 m à 4,80 m et en largeurs de 138 à 180 mm.",

    whatIsWoodHeading: "Qu'est-ce que le bois de terrasse ?",
    whatIsWoodText1:
      "Le bois de terrasse utilise des lames de bois naturel comme surface de marche. Les trois essences les plus courantes en France sont le pin traité autoclave classe 4 (le plus abordable et le plus disponible), le douglas (naturellement durable classe 3) et les bois exotiques comme l'ipé, le cumaru et le padouk (les plus durables mais les plus chers). Le pin traité représente environ 50 % des terrasses bois en France.",
    whatIsWoodText2:
      "Les lames en pin traité coûtent 8 à 18 €/m², ce qui en fait l'option la plus économique. Le douglas va de 15 à 30 €/m². Les bois exotiques coûtent 30 à 80 €/m². Les lames standard font 21 à 28 mm d'épaisseur et 120 à 145 mm de largeur, en longueurs de 2,10 m à 4,00 m. La section 21×145 mm est la plus courante car elle offre une bonne rigidité et un confort de marche agréable.",

    comparisonHeading: "Composite vs bois : comparaison directe",
    comparisonSubheading: "Comment les deux matériaux se comparent sur chaque critère important.",
    comparisonCol1: "Critère",
    comparisonCol2: "Composite",
    comparisonCol3: "Bois naturel",
    comparisonRows: [
      { category: "Coût initial (au m² posé)", composite: "50 à 120 € posé", wood: "30 à 80 € posé" },
      { category: "Durée de vie", composite: "25 à 50 ans", wood: "10 à 30 ans (selon l'essence)" },
      { category: "Entretien annuel", composite: "Lavage eau et savon", wood: "Saturateur/lasure tous les 1 à 2 ans" },
      { category: "Coût d'entretien (20 ans)", composite: "0 à 150 € au total", wood: "1 500 à 4 000 € au total" },
      { category: "Aspect", composite: "Uniforme, aspect manufacturé", wood: "Veinage naturel, grise sans entretien" },
      { category: "Chaleur au soleil", composite: "Chauffe fortement au soleil", wood: "Reste plus frais sous le pied" },
      { category: "Résistance aux rayures", composite: "Bonne (produits coextrudés)", wood: "Variable selon l'essence" },
      { category: "Tenue de la couleur", composite: "Excellente (garantie 25 ans)", wood: "Grise sans entretien" },
      { category: "Impact environnemental", composite: "Contenu recyclé, longue vie", wood: "Renouvelable, vie plus courte" },
      { category: "Difficulté de pose (bricoleur)", composite: "Moyenne (fixations spéciales)", wood: "Facile (vis standard)" },
    ],

    costHeading: "Comparaison de coûts : le vrai calcul",
    costIntro: "La différence de prix à l'achat entre composite et bois est significative, mais le coût total de possession sur la durée de vie de la terrasse raconte une autre histoire.",
    costText1:
      "Pour une terrasse typique de 3×5 m (15 m²), les lames en pin traité coûtent 120 à 270 € pour le platelage seul. La même terrasse en composite milieu de gamme (Silvadec, UPM) coûte 450 à 750 € en lames. En incluant la structure, les fixations et la pose, le coût total est d'environ 1 500 à 3 000 € en bois et 3 000 à 5 500 € en composite.",
    costText2:
      "Cependant, le bois nécessite un entretien annuel. Saturer ou lasurer une terrasse de 15 m² coûte 80 à 200 € par an en produit et fournitures. Sur 20 ans, cela représente 1 600 à 4 000 € en entretien seul. Un platelage en pin traité nécessite aussi un remplacement partiel après 12 à 15 ans (500 à 1 000 €). Le composite ne demande qu'un nettoyage occasionnel à l'eau et au savon.",
    costText3:
      "Sur 25 ans, le coût total d'une terrasse bois de 15 m² est d'environ 3 500 à 7 000 € (construction + entretien + remplacement partiel). La même terrasse en composite coûte 3 000 à 5 500 € avec pratiquement aucun frais d'entretien. À partir de 12 à 15 ans, le composite devient le choix le plus économique.",

    whenCompositeHeading: "Quand choisir le composite",
    whenCompositeIntro: "Le composite est le meilleur choix dans ces situations :",
    whenCompositeItems: [
      "Vous voulez une terrasse sans entretien — ni saturateur, ni lasure, ni ponçage à faire.",
      "Vous vivez dans un climat humide, pluvieux ou côtier où le bois se dégrade vite.",
      "Vous comptez rester dans le logement plus de 10 ans et voulez un bon retour sur investissement.",
      "Vous préférez un aspect uniforme et constant qui ne changera pas au fil du temps.",
      "Vous souhaitez une garantie fabricant de 25 à 50 ans pour la tranquillité d'esprit.",
      "La terrasse est en hauteur ou difficile d'accès, rendant l'entretien compliqué.",
    ],
    whenCompositeSummary:
      "Le composite est le meilleur choix global pour les propriétaires qui privilégient la praticité, la durabilité et les économies à long terme par rapport au coût initial le plus bas possible.",

    whenWoodHeading: "Quand choisir le bois",
    whenWoodIntro: "Le bois naturel est plus pertinent dans ces situations :",
    whenWoodItems: [
      "Votre budget initial est limité et vous devez minimiser le coût de construction.",
      "Vous aimez l'aspect, le toucher et l'odeur du bois naturel et l'entretien ne vous dérange pas.",
      "Vous vivez dans un climat très chaud où le composite serait inconfortablement chaud sous les pieds nus.",
      "Vous construisez une structure temporaire ou à court terme (horizon de 5 à 10 ans).",
      "Vous appréciez les projets d'entretien et considérez le saturateur annuel comme un plaisir.",
      "Vous voulez une terrasse en bois exotique (ipé, cumaru) qui offre à la fois beauté naturelle et durabilité de plus de 25 ans.",
    ],
    whenWoodSummary:
      "Le bois est idéal pour les budgets serrés, les amoureux du bois naturel et les projets où la chaleur et le caractère du vrai bois l'emportent sur l'engagement d'entretien.",

    calculatorCtaHeading: "Calculez vos matériaux de terrasse",
    calculatorCtaText: "Utilisez nos calculateurs gratuits pour estimer les lames, plots, garde-corps et escalier.",
    calculatorLinks: [
      { label: "Calculateur de lames de terrasse", href: "/calculators/outdoor/deck-board-calculator", description: "Estimez les lames pour toute dimension de terrasse." },
      { label: "Calculateur de plots", href: "/calculators/outdoor/deck-footing-calculator", description: "Calculez les plots béton et la trame de poteaux." },
      { label: "Calculateur de garde-corps", href: "/calculators/outdoor/deck-railing-calculator", description: "Nombre de poteaux, barreaux et mètres linéaires de lisse." },
      { label: "Calculateur d'escalier de terrasse", href: "/calculators/outdoor/deck-stair-calculator", description: "Nombre de marches, limons et planches." },
    ],

    faqHeading: "Questions fréquentes",
    faqs: [
      {
        question: "Le composite vaut-il le surcoût ?",
        answer:
          "Oui, pour la majorité des propriétaires. Bien que le composite coûte 2 à 3 fois plus cher à l'achat, il élimine 1 500 à 4 000 € de frais d'entretien sur 20 ans et dure 25 à 50 ans contre 10 à 15 ans pour le pin traité. Le point d'amortissement se situe à 12 à 15 ans. Si vous comptez rester dans le logement à long terme, le composite est presque toujours la meilleure décision financière en coût total de possession.",
      },
      {
        question: "Le composite chauffe-t-il trop au soleil ?",
        answer:
          "Le composite absorbe plus de chaleur que le bois, surtout les teintes foncées. Par 35 °C au soleil direct, un composite foncé peut atteindre 55 à 70 °C, ce qui est inconfortable pieds nus. Les teintes claires restent 10 à 15 °C plus fraîches. Les solutions : choisir des teintes claires, ajouter un store ou une pergola, utiliser des tapis d'extérieur dans les zones pieds nus. Le bois reste 5 à 10 °C plus frais que le composite dans les mêmes conditions.",
      },
      {
        question: "Quelle est la durée de vie du composite ?",
        answer:
          "Les composites de qualité des grands fabricants (Silvadec, TimberTech, Fiberon) durent 25 à 50 ans avec un entretien minimal. La plupart offrent des garanties structurelles de 25 ans et des garanties tache/décoloration de 25 à 50 ans. Les composites de première génération (années 2000) avaient des problèmes de moisissure et de décoloration, mais les composites coextrudés modernes ont largement résolu ces défauts.",
      },
      {
        question: "Peut-on peindre ou lasurer du composite ?",
        answer:
          "Le composite coextrudé ne doit pas être peint ni lasuré car le revêtement polymère empêche l'adhérence, et la peinture s'écaille en 1 à 2 saisons. Les lames composite sans coextrusion (anciennes générations) peuvent être peintes avec une peinture extérieure après nettoyage et application d'un primaire d'accrochage. Contactez le fabricant pour les produits de finition approuvés.",
      },
      {
        question: "Lequel est le plus écologique : composite ou bois ?",
        answer:
          "Les deux ont des compromis environnementaux. Le composite utilise des matériaux recyclés (Silvadec utilise 95 % de contenu recyclé) et sa longue durée de vie réduit les remplacements. Cependant, le composite n'est pas biodégradable et difficile à recycler en fin de vie. Le bois est renouvelable, biodégradable et séquestre du carbone, mais les traitements chimiques et la durée de vie plus courte nécessitent des récoltes plus fréquentes. Le bois issu de forêts gérées durablement (FSC, PEFC) a l'impact environnemental le plus faible.",
      },
      {
        question: "Peut-on mélanger composite et bois sur une même terrasse ?",
        answer:
          "Oui, et c'est même l'approche standard. La plupart des terrasses utilisent une structure en pin traité classe 4 (poteaux, poutres, lambourdes) avec des lames composite en surface. Le bois traité fournit la résistance structurelle à moindre coût, tandis que le composite offre la surface d'usage sans entretien. Les lambourdes composite existent mais coûtent nettement plus cher que le pin traité.",
      },
    ],
  },
};

export default guides;
