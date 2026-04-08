// French (France) — All 51 calculator SEO content
// Metric adaptations: metres, cm, m², French construction practices
// Standards: DTU, NF, Eurocode. Brands: Placo, Isover, Weber, Sika. Currency: EUR.
// Entraxe: 40 cm / 60 cm. Sections: 45×95, 45×145, 45×200 mm.

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
  "Ajoutez 10 à 15 % supplémentaires à votre commande pour tenir compte des chutes et des erreurs de coupe.";

// ─── FOUNDATION ─────────────────────────────────────────────────────────────

export const anchorBoltCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez le périmètre total de votre fondation en mètres.",
    "Saisissez l'espacement standard (par défaut 1,80 m selon le DTU 31.2).",
    "Cliquez sur Calculer pour obtenir le nombre de tiges d'ancrage.",
  ],
  materialInfo:
    "Les tiges d'ancrage (goujons filetés type J ou tiges chimiques) sont des éléments en acier galvanisé scellés dans le béton frais de la fondation pour fixer la lisse basse en bois traité. Le DTU 31.2 impose un ancrage tous les 1,80 m maximum et à moins de 30 cm de chaque angle ou joint de lisse. Les diamètres courants en France sont 12 mm et 16 mm, le 12 mm étant le minimum pour la construction résidentielle à ossature bois. Les tiges type J sont les plus courantes pour un scellement direct dans le béton frais ; les ancrages chimiques (résine Sika AnchorFix ou Fischer FIS) permettent une pose après durcissement du béton. Pour les zones sismiques (zones 3 à 5 selon l'Eurocode 8), on préconise des tiges de 16 mm avec platines de répartition. Le coût moyen est de 2 à 5 € par tige selon le diamètre et le type de fixation. Les tiges doivent respecter la norme NF EN ISO 898-1 pour garantir la résistance mécanique requise.",
  nextSteps: [
    { label: "Calculateur de bande d'arase", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Calculateur de lisse basse traitée", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calculateur de béton", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Positionnez les tiges avant la prise complète du béton, tant qu'il est encore ouvrable.",
    "Utilisez un gabarit de pose pour garantir un espacement et un alignement réguliers.",
    "Assurez-vous que les tiges pénètrent d'au moins 18 cm dans le béton.",
    "Placez une tige à moins de 30 cm de chaque extrémité de chaque pièce de lisse basse.",
  ],
  commonMistakes: [
    "Oublier les tiges aux jonctions de lisses — placez toujours une tige à moins de 30 cm de chaque extrémité.",
    "Utiliser un diamètre incorrect — le minimum réglementaire est 12 mm.",
    "Ne pas vérifier la verticalité des tiges avant la prise du béton.",
  ],
  faqs: [
    {
      question: "Quel diamètre de tige d'ancrage est exigé par la réglementation ?",
      answer:
        "Le DTU 31.2 impose des tiges d'au moins 12 mm de diamètre, scellées sur 18 cm minimum dans le béton, avec un espacement maximal de 1,80 m. En zone sismique, le bureau d'études peut imposer du 16 mm.",
    },
    {
      question: "Faut-il des tiges d'ancrage à chaque angle ?",
      answer:
        "Oui. Une tige doit être placée à moins de 30 cm de chaque extrémité de lisse et à chaque angle de la fondation.",
    },
    {
      question: "Peut-on poser des tiges d'ancrage après le durcissement du béton ?",
      answer:
        "Oui, à l'aide d'ancrages chimiques (résine injectable type Sika AnchorFix ou Fischer FIS). On perce le béton au diamètre requis, on injecte la résine et on insère la tige filetée. La résistance obtenue est comparable à un scellement direct, sous réserve de respecter les profondeurs d'ancrage du fabricant.",
    },
    {
      question: "Combien de tiges d'ancrage par mètre linéaire de fondation ?",
      answer:
        "Avec l'espacement standard de 1,80 m, comptez environ 0,56 tige par mètre linéaire. En pratique, les angles, intersections et joints de lisse nécessitent des tiges supplémentaires : prévoyez 0,7 à 0,9 tige par mètre linéaire.",
    },
    {
      question: "Quelle est la différence entre tiges type J et ancrages chimiques ?",
      answer:
        "Les tiges type J possèdent un crochet en bas qui s'ancre dans le béton frais ; elles sont les plus courantes en neuf. Les ancrages chimiques utilisent une résine haute performance pour coller une tige filetée dans un trou foré dans le béton durci ; ils sont privilégiés en rénovation ou quand des tiges ont été oubliées lors du coulage.",
    },
    {
      question: "Quelles tiges utiliser en zone sismique ?",
      answer:
        "En zones sismiques 3 à 5 (classification Eurocode 8), on recommande des tiges de 16 mm avec platines de répartition de 50×50 mm. Consultez le bureau d'études structure et la réglementation parasismique locale (arrêté du 22 octobre 2010) pour les exigences spécifiques.",
    },
  ],
};

export const sillSealCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez le périmètre total de votre fondation en mètres linéaires.",
    "Saisissez la couverture par rouleau (la plupart couvrent 15 m).",
    "Cliquez sur Calculer pour obtenir le nombre de rouleaux nécessaires.",
  ],
  materialInfo:
    "La bande d'arase (ou bande de solin d'assise) est un joint en mousse de polyéthylène expansé placé entre la fondation béton et la lisse basse en bois traité. Elle empêche les remontées capillaires, l'infiltration d'air et l'entrée d'insectes. Les largeurs courantes sont 90 mm, 140 mm et 190 mm, correspondant aux sections de bois standard (45×95, 45×145 et 45×195 mm). L'épaisseur standard est de 6 mm ; on utilise 12 mm pour les surfaces de fondation irrégulières. En France, on trouve ces bandes chez les négoces de matériaux (Point P, Gedimat, BigMat) sous les marques Tramico, Axton ou Compriband, à un prix moyen de 8 à 20 € le rouleau de 15 mètres. C'est un matériau peu coûteux qui procure une économie d'énergie significative à long terme en supprimant les ponts d'air à la base du mur.",
  nextSteps: [
    { label: "Calculateur de lisse basse traitée", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calculateur de tiges d'ancrage", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Calculateur de solive de rive", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Déroulez la bande d'arase le long de la fondation juste avant de poser la lisse basse.",
    "Recouvrez les joints d'au moins 15 cm.",
    "Utilisez une bande compatible avec le bois traité — certaines mousses se dégradent au contact des produits de traitement.",
  ],
  commonMistakes: [
    "Oublier de poser la bande d'arase — c'est une exigence du DTU 31.2 dans la plupart des cas.",
    "Ne pas recouvrir les joints, laissant des passages pour l'infiltration d'air.",
  ],
  faqs: [
    {
      question: "La bande d'arase est-elle obligatoire selon la réglementation ?",
      answer:
        "Oui. Le DTU 31.2 (construction à ossature bois) exige un dispositif d'étanchéité entre la fondation béton et la lisse basse pour empêcher les remontées capillaires et les infiltrations d'air.",
    },
    {
      question: "Quelle épaisseur de bande d'arase choisir ?",
      answer:
        "La bande standard de 6 mm convient à la majorité des applications. Pour des surfaces de fondation irrégulières ou des écarts de planéité importants, utilisez une bande de 12 mm.",
    },
    {
      question: "Quelle largeur de bande d'arase pour mon mur ?",
      answer:
        "La largeur doit correspondre à celle de la lisse basse. Pour des murs en montants de 45×95 mm, utilisez une bande de 90 mm. Pour du 45×145 mm, prenez du 140 mm. Pour du 45×195 mm, du 190 mm.",
    },
    {
      question: "Peut-on utiliser un autre matériau que la mousse de polyéthylène ?",
      answer:
        "Il existe des alternatives comme les bandes en néoprène ou en EPDM, plus durables mais plus coûteuses. On trouve aussi des bandes bitumineuses, mais elles n'offrent pas les mêmes performances d'étanchéité à l'air que la mousse de polyéthylène.",
    },
    {
      question: "La bande d'arase protège-t-elle contre les termites ?",
      answer:
        "La bande d'arase réduit les points d'entrée des insectes en obturant le joint béton-bois, mais ce n'est pas une barrière anti-termites à elle seule. Dans les départements classés termites (arrêté préfectoral), il faut compléter par un traitement du sol et du bois conforme à la norme NF EN 14080.",
    },
    {
      question: "Combien de rouleaux pour une maison moyenne ?",
      answer:
        "Une maison de 80 à 100 m² au sol a un périmètre de fondation d'environ 36 à 40 mètres linéaires. Avec des rouleaux de 15 m, il faut 3 rouleaux plus 10 % pour les recouvrements, soit 3 à 4 rouleaux au total.",
    },
  ],
};

export const sillPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez le périmètre total de la fondation en mètres.",
    "Sélectionnez la longueur des pièces (courantes : 2,50 m, 3,00 m, 4,00 m, 5,00 m).",
    "Cliquez sur Calculer pour obtenir le nombre de pièces nécessaires.",
  ],
  materialInfo:
    "La lisse basse traitée (ou semelle d'assise) est la pièce horizontale la plus basse de l'ossature murale. Elle assure la liaison structurelle entre la fondation béton et l'ossature bois. Le traitement autoclave classe 4 (contact avec le sol) protège contre la pourriture et les insectes xylophages (termites, capricornes, vrillettes). En France, le bois traité autoclave est disponible chez les négoces spécialisés (Point P, Gedimat) en résineux (pin sylvestre, douglas) aux sections standard de 45×95 mm pour les cloisons et 45×145 mm pour les murs extérieurs, en longueurs de 2,50 m, 3,00 m, 4,00 m et 5,00 m. Le surcoût du traitement est d'environ 30 à 50 % par rapport au bois brut. La norme NF EN 335 définit les classes d'emploi et le DTU 31.2 impose l'utilisation de bois traité pour tout contact avec la maçonnerie ou le béton.",
  nextSteps: [
    { label: "Calculateur de tiges d'ancrage", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Calculateur de bande d'arase", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Calculateur de solive de rive", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Utilisez du bois traité autoclave classe 4, adapté au contact avec le sol et le béton.",
    "Pré-percez les trous pour les tiges d'ancrage avant de poser la lisse sur la fondation.",
    "Appliquez un produit de traitement (type Xylophène) sur les coupes pour maintenir la protection.",
  ],
  commonMistakes: [
    "Utiliser du bois non traité pour la lisse basse — cela entraînera une pourriture rapide.",
    "Ne pas utiliser de quincaillerie compatible avec le bois traité (vis et pointes en acier inoxydable ou galvanisé à chaud).",
  ],
  faqs: [
    {
      question: "Quelle section de bois utiliser pour la lisse basse ?",
      answer:
        "La lisse basse est généralement en 45×145 mm pour les murs extérieurs et 45×95 mm pour les cloisons intérieures. Le DTU 31.2 précise les sections minimales selon les charges reprises.",
    },
    {
      question: "Comment fixer une lisse basse ?",
      answer:
        "La lisse est fixée par des tiges filetées (goujons) scellées dans le béton, serrées avec écrou et rondelle. Les trous sont pré-percés dans la lisse pour s'aligner sur les tiges.",
    },
    {
      question: "Faut-il traiter les coupes de la lisse basse ?",
      answer:
        "Oui, chaque coupe expose le bois non traité en cœur. Appliquez un produit de traitement en bout (type Xylophène ou Cecil TX203) sur toutes les coupes pour maintenir la protection contre la pourriture et les insectes.",
    },
    {
      question: "Peut-on utiliser du résineux non traité pour la lisse basse ?",
      answer:
        "Non, le DTU 31.2 interdit le bois non traité en contact avec le béton ou la maçonnerie. L'humidité du béton migre par capillarité et provoque la pourriture en quelques années. Exigez du bois traité autoclave classe 4 conforme à la norme NF EN 335.",
    },
    {
      question: "Quelles vis et pointes utiliser avec du bois traité ?",
      answer:
        "Le bois traité autoclave au cuivre est corrosif pour les métaux ordinaires. Utilisez des vis et pointes en acier inoxydable A2 ou galvanisées à chaud. Les pointes électro-zinguées ne suffisent pas et se corroderont en quelques années.",
    },
    {
      question: "Combien de pièces pour une maison de 10×12 m ?",
      answer:
        "Le périmètre d'une maison de 10×12 m est de 44 mètres linéaires. Avec des pièces de 4,00 m, il faut 11 pièces plus 10 % de chutes, soit 12 à 13 pièces de lisse basse traitée.",
    },
  ],
};

export const concreteCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation inclut un facteur de perte de 10 %. Le gaspillage réel varie selon les conditions du chantier, la précision du coffrage et la méthode de mise en œuvre. Confirmez toujours les quantités avec votre centrale à béton.",
  howToUse: [
    "Mesurez la longueur et la largeur de la zone en mètres.",
    "Saisissez l'épaisseur en centimètres — 10 cm pour une dalle standard, 20 à 30 cm pour des semelles.",
    "Sélectionnez le type d'ouvrage (dalle, semelle ou poteau).",
    "Cliquez sur Calculer pour obtenir les mètres cubes, le nombre de sacs et les recommandations de commande.",
  ],
  materialInfo:
    "Le béton est un mélange de ciment Portland, de sable, de graviers et d'eau qui durcit pour former un matériau solide. Il se présente sous deux formes : les sacs de béton prêt à l'emploi (Weber, Parexlanko, PRB) et le béton prêt à l'emploi (BPE) livré par camion-toupie. Les sacs les plus courants en France sont de 25 kg et 35 kg et donnent environ 0,012 à 0,017 m³ par sac. Pour les petits travaux (poteaux de clôture, scellements), les sacs sont pratiques. Au-delà de 1 m³, le BPE livré par toupie est bien plus efficace et garantit une qualité constante.\n\nLa résistance du béton se mesure en MPa à 28 jours. Les classes courantes en résidentiel sont : C20/25 pour les applications non structurelles (allées, terrasses), C25/30 pour les fondations résidentielles et les dalles, et C30/37 pour les planchers de garage, les semelles structurelles et les zones à charges lourdes. Les classes supérieures (C35/45 et plus) sont réservées aux ouvrages spéciaux.\n\nLe BPE coûte entre 80 et 150 € le mètre cube livré, selon la classe de résistance, la localisation et le volume commandé. La plupart des centrales imposent un minimum de 1 à 2 m³, avec des suppléments pour les petites quantités. Les sacs de béton prêt à l'emploi coûtent 5 à 10 € le sac de 35 kg, ce qui revient nettement plus cher au mètre cube. Le treillis soudé, les aciers HA et les armatures ajoutent 5 à 15 € par mètre carré au coût total.",
  nextSteps: [
    { label: "Calculateur de dalle béton", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calculateur de semelle de fondation", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calculateur de poteau béton", href: "/calculators/foundation/concrete-column-calculator/" },
    { label: "Calculateur d'escalier béton", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Montez les coffrages de niveau, d'aplomb et bien étayés avant l'arrivée du béton.",
    "Humidifiez le sol avant le coulage pour éviter que la terre sèche n'absorbe l'eau du béton trop vite.",
    "Mettez en œuvre le béton le plus rapidement possible — le BPE commence à faire prise en 60 à 90 minutes selon la température.",
    "Utilisez un vibrateur ou tapotez les coffrages pour consolider le béton et chasser les bulles d'air.",
    "Tirez la surface à la règle aluminium, puis attendez que le ressuage disparaisse avant la finition à la taloche ou au balai.",
    "Curez le béton pendant au moins 7 jours en le maintenant humide (produit de cure, bâche polyane ou arrosage régulier).",
  ],
  commonMistakes: [
    "Ajouter trop d'eau au mélange — cela affaiblit le béton et provoque des fissures. Maintenez un affaissement de 10 à 12 cm pour la plupart des travaux résidentiels.",
    "Ne pas commander assez — ajoutez toujours 10 % de marge. Être à court pendant un coulage crée des reprises de bétonnage (joints froids).",
    "Omettre le ferraillage — utilisez du treillis soudé ST25C ou des aciers HA 8/10 tous les 20–30 cm pour les dalles de 10 cm et plus.",
    "Couler par temps extrême sans précaution — en dessous de 5 °C, utilisez de l'eau tiède et des couvertures isolantes ; au-dessus de 32 °C, utilisez de l'eau froide et protégez du vent.",
    "Talocher trop tôt alors que l'eau de ressuage est encore en surface — cela piège l'eau, affaiblit la couche supérieure et provoque l'écaillage.",
  ],
  faqs: [
    {
      question: "Combien de béton pour une dalle de 3×3 mètres ?",
      answer: "Une dalle de 3×3 m de 10 cm d'épaisseur nécessite environ 0,9 m³. Avec 10 % de marge, commandez 1,0 m³. Ce volume est à la limite où le BPE en toupie devient plus pratique que le mélange de sacs à la main.",
    },
    {
      question: "Combien de sacs de béton par mètre cube ?",
      answer: "Pour du béton prêt à l'emploi en sac (type Weber Beton), comptez environ 56 à 60 sacs de 35 kg par mètre cube. Pour un dosage fait sur place (ciment + sable + graviers en proportion 1:2:3), il faut environ 8 sacs de ciment de 35 kg par mètre cube, plus 0,5 m³ de sable et 0,8 m³ de graviers.",
    },
    {
      question: "Combien de mètres cubes pour un garage ?",
      answer: "Un garage typique pour deux véhicules (6×6 m, 12 cm d'épaisseur) nécessite environ 4,3 m³. Ajoutez 10 % de marge pour un total de 4,8 m³. Pour un garage, spécifiez un béton C25/30 avec treillis soudé ST25C.",
    },
    {
      question: "Quelle est la différence entre un béton C25/30 et C30/37 ?",
      answer: "La valeur indique la résistance à la compression à 28 jours. Le C25/30 est le standard pour les fondations résidentielles, les dalles et les murs de soubassement. Le C30/37 est plus résistant, recommandé pour les planchers de garage, les rampes, les dalles extérieures et les zones à charges lourdes. La différence de prix est de 5 à 15 € par mètre cube.",
    },
    {
      question: "Combien coûte un mètre cube de BPE ?",
      answer: "Le béton prêt à l'emploi en toupie coûte entre 80 et 150 € le m³ livré, selon la classe et la localisation. Des frais supplémentaires s'appliquent pour les petites quantités (en dessous de 2 m³) et les livraisons le samedi. Le béton en sacs revient à 250–400 € le m³ : il n'est rentable que pour de très petits travaux.",
    },
    {
      question: "Peut-on couler du béton sous la pluie ?",
      answer: "Une bruine légère est acceptable si la surface fraîche peut être protégée. Une pluie forte peut laver la laitance, affaiblir la surface et provoquer l'écaillage. En cas de risque de pluie, préparez des bâches polyane pour couvrir le béton frais immédiatement. Ne talochez jamais avec de l'eau stagnante en surface.",
    },
    {
      question: "Quelle épaisseur pour une dalle béton ?",
      answer: "Les dalles résidentielles standard (terrasses, allées piétonnes) font 10 cm d'épaisseur. Les planchers de garage doivent faire 12 à 15 cm. Les semelles de fondation font 20 à 30 cm d'épaisseur et descendent sous la profondeur hors gel selon le DTU 13.12. Consultez toujours le bureau d'études et le règlement local.",
    },
    {
      question: "Faut-il du ferraillage dans une dalle béton ?",
      answer: "Pour les dalles de 10 cm et plus, le ferraillage est recommandé. Les options incluent le treillis soudé ST25C, les aciers HA 8 ou 10 tous les 20–30 cm dans les deux sens, ou la fibre de polypropylène dans le mélange. Le treillis soudé offre le meilleur contrôle de la fissuration pour les garages et les dalles structurelles.",
    },
  ],
};

export const concreteSlabCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation inclut un facteur de perte de 10 %. Le gaspillage réel varie selon la préparation du terrain, la précision du coffrage et les variations d'épaisseur. Confirmez les quantités avec votre centrale à béton.",
  howToUse: [
    "Mesurez la longueur et la largeur de la dalle en mètres.",
    "Saisissez l'épaisseur en centimètres — 10 cm pour terrasses et allées, 12–15 cm pour garages.",
    "Cliquez sur Calculer pour obtenir les mètres cubes nécessaires, marge de 10 % incluse.",
    "Utilisez le nombre de sacs pour les petits travaux ou le volume en m³ pour commander du BPE.",
  ],
  materialInfo:
    "Une dalle béton est une surface plane coulée directement sur un sol préparé, utilisée pour les terrasses, les planchers de garage, les allées et les dallages de maison. L'épaisseur standard résidentielle est de 10 cm pour les zones piétonnes. Les garages et allées carrossables doivent faire 12 à 15 cm.\n\nLa préparation du sol est essentielle : compactage, nivellement, suppression de la terre végétale. Une couche de 15 à 20 cm de tout-venant compacté assure le drainage et une assise stable. Un film polyane de 200 µm entre le tout-venant et le béton empêche les remontées d'humidité.\n\nLe ferraillage courant comprend du treillis soudé ST25C, des aciers HA 8 ou HA 10 tous les 20–30 cm, ou de la fibre de polypropylène. Les joints de fractionnement doivent être réalisés tous les 2,5 à 3 mètres pour une dalle de 10 cm.\n\nLe béton pour dalles se prescrit en C25/30 avec un affaissement S3. Le BPE coûte entre 80 et 150 € le m³ livré. Les sacs de 35 kg coûtent 5 à 10 € l'unité, ce qui revient beaucoup plus cher au m³ — à réserver aux coulages de moins de 0,5 m³.",
  nextSteps: [
    { label: "Calculateur de béton", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculateur de semelle de fondation", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calculateur de tiges d'ancrage", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Compactez le sol et posez 15 à 20 cm de tout-venant comme forme — cela prévient les tassements et les fissures.",
    "Montez les coffrages avec des piquets tous les 60–90 cm et vérifiez le niveau ; huilez les coffrages pour un démoulage facile.",
    "Placez le treillis soudé sur des cales pour qu'il se situe dans le tiers inférieur de la dalle, pas sur le sol.",
    "Coulez le béton en une seule opération continue pour éviter les reprises de bétonnage.",
    "Tirez à la règle aluminium, puis balayez la surface pour la traction avant d'appliquer le produit de cure.",
  ],
  commonMistakes: [
    "Omettre la forme en tout-venant — couler directement sur terre provoque des tassements et des fissures dès la première année.",
    "Faire une dalle trop mince — les dalles de 7 cm se fissurent facilement ; coulez au minimum 10 cm en résidentiel.",
    "Poser le treillis directement au sol au lieu de le caler — le ferraillage au fond ne travaille pas ; il doit être dans le tiers inférieur de la dalle.",
    "Oublier les joints de fractionnement — sans joints tous les 2,5 à 3 m, la dalle fissurera de manière aléatoire lors du retrait.",
    "Talocher alors que l'eau de ressuage est encore présente — cela piège l'eau et provoque l'écaillage.",
  ],
  faqs: [
    {
      question: "Combien de béton pour une dalle de 3×3 m ?",
      answer: "Une dalle de 3×3 m de 10 cm d'épaisseur nécessite environ 0,9 m³. Avec 10 % de marge, commandez 1,0 m³. À 15 cm (garage), il faut 1,4 m³. Ce volume est à la limite où le BPE en toupie est plus pratique que les sacs.",
    },
    {
      question: "Quelle épaisseur pour une dalle béton ?",
      answer: "10 cm en standard pour terrasses, allées piétonnes et dallages. 12 à 15 cm pour garages et allées carrossables, avec renforts en rive. Les dalles supportant des charges lourdes peuvent nécessiter 15 à 20 cm. Consultez le DTU 13.3 et le bureau d'études.",
    },
    {
      question: "Combien coûte une dalle béton ?",
      answer: "Le coût matériaux pour une dalle de 10 cm en BPE est de 30 à 60 € le m². Le coût posé (main-d'œuvre, tout-venant, coffrage, ferraillage et finition) va de 60 à 120 € le m². Une dalle de 6×6 m pour terrasse coûte entre 2 000 et 4 500 € posée.",
    },
    {
      question: "Faut-il du treillis soudé dans une dalle ?",
      answer: "Pour les dalles résidentielles de 10 cm, le treillis soudé ST25C ou la fibre de polypropylène assurent un bon contrôle de la fissuration de retrait. Les aciers HA 8 tous les 25 cm sont recommandés pour les garages et les dalles à charges roulantes. Le treillis soudé ajoute environ 4 à 8 € le m².",
    },
    {
      question: "Combien de sacs de béton pour une dalle ?",
      answer: "Pour du béton prêt à l'emploi en sacs de 35 kg, comptez environ 57 sacs par m³. Pour une dalle de 3×3 m de 10 cm (0,9 m³), il faut environ 51 sacs. Pour un dosage ciment + granulats, comptez 8 sacs de ciment de 35 kg par m³.",
    },
    {
      question: "Combien de temps pour le séchage d'une dalle ?",
      answer: "Le béton atteint environ 70 % de sa résistance à 7 jours et sa résistance nominale à 28 jours. On peut marcher dessus après 24 à 48 heures, rouler avec un véhicule après 7 jours et poser des charges lourdes après 28 jours. Maintenez la surface humide les 7 premiers jours avec un produit de cure ou un arrosage régulier.",
    },
  ],
};

export const concreteFootingCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation inclut un facteur de perte de 10 %. Les dimensions des semelles doivent respecter les exigences du DTU 13.12 et de l'étude de sol. Vérifiez toujours avec votre bureau d'études avant de couler.",
  howToUse: [
    "Mesurez la longueur totale de la semelle en mètres — pour une semelle filante, additionnez tous les côtés.",
    "Saisissez la largeur en mètres — les semelles filantes font généralement 40 à 60 cm.",
    "Saisissez la hauteur en mètres — les hauteurs courantes sont de 25 à 40 cm.",
    "Cliquez sur Calculer pour obtenir les mètres cubes, le nombre de sacs et le total avec marge.",
  ],
  materialInfo:
    "Les semelles de fondation sont la base structurelle qui transmet les charges du bâtiment au sol. Elles se situent sous le niveau du terrain et supportent les murs de fondation, les poteaux et les longrines. Il existe deux types principaux : les semelles filantes (sous les murs) et les semelles isolées (sous les poteaux).\n\nLes semelles filantes pour la construction résidentielle font généralement 40 à 60 cm de large et 25 à 40 cm de haut, la largeur étant au moins le double de l'épaisseur du mur supporté. Les semelles isolées pour poteaux font 60×60 cm ou plus selon la descente de charge.\n\nLe fond de fouille doit descendre sous la profondeur hors gel (60 à 90 cm selon la zone climatique, définie par le DTU 13.12). Les semelles doivent reposer sur un sol ferme non remanié ou correctement compacté.\n\nLe ferraillage comprend des aciers HA 10 ou HA 12 filants en nappe basse, avec des attentes verticales tous les 1,00 m pour liaison avec le mur de soubassement. Le béton prescrit est C25/30 minimum avec un affaissement S3.\n\nLe BPE coûte 80 à 150 € le m³ livré. Une maison de 100 m² au sol avec 40 mètres linéaires de semelle filante de 50 cm × 30 cm nécessite environ 6 m³.",
  nextSteps: [
    { label: "Calculateur de béton", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculateur de dalle béton", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calculateur de poteau béton", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Creusez la fouille aux dimensions exactes du plan — la sur-excavation gaspille du béton et de l'argent.",
    "Nivelez le fond de fouille à la dame avant de couler — un fond irrégulier provoque des tassements différentiels.",
    "Posez les aciers sur des cales pour maintenir 5 cm d'enrobage sous les armatures.",
    "Installez les attentes verticales tous les 1,00 m pour solidariser la semelle au mur de soubassement.",
    "Ne coulez pas les semelles sur un sol gelé ou avec de l'eau stagnante — les deux empêchent un durcissement correct.",
  ],
  commonMistakes: [
    "Faire des semelles trop étroites — la largeur doit être au moins le double de l'épaisseur du mur pour répartir la charge au sol.",
    "Ne pas respecter la profondeur hors gel — les semelles superficielles remontent par le gel dans les régions froides.",
    "Sur-excaver et remblayer avec de la terre meuble — les semelles doivent reposer sur un sol ferme non remanié.",
    "Omettre le ferraillage — les semelles non armées fissurent aux points de contrainte et perdent leur intégrité structurelle.",
    "Couler le mur de soubassement le jour même — laissez la semelle durcir au moins 24 heures avant de charger.",
  ],
  faqs: [
    {
      question: "Quelle profondeur pour les semelles de fondation ?",
      answer: "La profondeur hors gel varie de 50 cm en zone méditerranéenne à 90 cm en montagne (DTU 13.12). Le fond de fouille doit atteindre le bon sol porteur, souvent au-delà de la couche de terre végétale. L'étude de sol (G2) détermine la profondeur exacte.",
    },
    {
      question: "Quelle largeur de semelle pour un mur en parpaings de 20 cm ?",
      answer: "La semelle doit faire au minimum 40 cm de large (deux fois l'épaisseur du mur) et 20 cm de haut. Pour un mur de soubassement de 20 cm, la semelle standard fait 50×25 cm. Le bureau d'études adapte ces dimensions à la portance du sol.",
    },
    {
      question: "Quel ferraillage pour une semelle filante ?",
      answer: "Le ferraillage type comprend 4 aciers HA 10 filants (2 en nappe haute, 2 en nappe basse) avec des cadres HA 6 tous les 20 cm. Les attentes verticales en HA 10 tous les 1,00 m assurent la liaison avec le mur de soubassement. Suivez les prescriptions du bureau d'études.",
    },
    {
      question: "Combien de béton pour les fondations d'une maison ?",
      answer: "Pour une maison de 100 m² avec un périmètre de 40 m, des semelles de 50×30 cm nécessitent environ 6 m³ de béton. Ajoutez 10 % de marge, soit 6,6 m³. Le mur de soubassement et le hérisson rajoutent du volume selon la conception.",
    },
    {
      question: "Quel béton pour les semelles ?",
      answer: "Le béton pour semelles doit être au minimum C25/30 avec un affaissement S3 pour une bonne mise en œuvre en fouille. Pour les zones sismiques, le bureau d'études peut imposer du C30/37. Le béton doit être vibré pour éliminer les bulles d'air et garantir l'enrobage des aciers.",
    },
    {
      question: "Peut-on couler les semelles par temps de pluie ?",
      answer: "Une pluie légère est acceptable avec protection de la surface. En cas de forte pluie, reportez le coulage : l'eau dilue la laitance, affaiblit la surface et peut emporter le ciment. Si de l'eau stagne dans la fouille, pompez-la avant de couler.",
    },
  ],
};

export const concreteColumnCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation inclut un facteur de perte de 10 %. La section et le ferraillage des poteaux doivent être conformes aux calculs du bureau d'études structure.",
  howToUse: [
    "Saisissez le diamètre ou la section du poteau en centimètres.",
    "Saisissez la hauteur du poteau en mètres.",
    "Indiquez le nombre de poteaux.",
    "Cliquez sur Calculer pour obtenir le volume en m³ par poteau et le total.",
  ],
  materialInfo:
    "Les poteaux en béton armé sont des éléments verticaux porteurs qui transmettent les charges de la charpente ou des planchers aux fondations. En construction résidentielle, on distingue les poteaux circulaires (coffrés avec des tubes en carton type Sonotube de 200, 250 ou 300 mm) et les poteaux carrés ou rectangulaires (coffrés en bois). Le ferraillage standard comprend 4 à 6 aciers HA 10 ou HA 12 longitudinaux avec des cadres HA 6 tous les 15 à 20 cm. Le béton prescrit est C25/30 minimum. Les poteaux pour terrasse bois ou pergola font généralement 200 à 250 mm de diamètre et 40 à 80 cm de profondeur. Le coût du BPE pour les poteaux est de 80 à 150 € le m³, mais les petits volumes sont souvent réalisés avec du béton en sacs (Weber Beton, PRB) à 5–10 € le sac de 35 kg.",
  nextSteps: [
    { label: "Calculateur de béton", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculateur de semelle de fondation", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calculateur de plots de terrasse", href: "/calculators/outdoor/deck-footing-calculator/" },
  ],
  installationTips: [
    "Creusez le trou à la profondeur requise (sous la profondeur hors gel) et posez 10 cm de tout-venant compacté au fond.",
    "Placez la cage d'armatures centrée dans le coffrage avec des cales d'espacement pour garantir l'enrobage.",
    "Remplissez le coffrage en couches de 30 cm en vibrant chaque couche pour chasser les bulles d'air.",
    "Vérifiez l'aplomb du coffrage avant et pendant le coulage — un poteau hors d'aplomb est un défaut structurel.",
  ],
  commonMistakes: [
    "Ne pas descendre sous la profondeur hors gel — le poteau remontera avec les cycles gel-dégel.",
    "Oublier de vibrer le béton — les nids de cailloux réduisent la résistance du poteau.",
    "Couler sans coffrage dans la terre — le sol absorbe l'eau du béton et affaiblit la périphérie du poteau.",
    "Sous-dimensionner le ferraillage — respectez toujours les prescriptions du bureau d'études.",
  ],
  faqs: [
    {
      question: "Quel diamètre pour un poteau de terrasse bois ?",
      answer: "Un poteau de terrasse bois fait généralement 200 à 250 mm de diamètre, descendu à 60 cm de profondeur minimum (sous la profondeur hors gel). Pour des terrasses surélevées ou des pergolas lourdes, passez à 300 mm.",
    },
    {
      question: "Combien de béton par poteau ?",
      answer: "Un poteau de 200 mm de diamètre et 60 cm de profondeur nécessite environ 0,019 m³, soit environ 1 sac de 35 kg. Un poteau de 300 mm × 80 cm nécessite environ 0,057 m³, soit 3 à 4 sacs.",
    },
    {
      question: "Peut-on utiliser du béton rapide pour les poteaux ?",
      answer: "Oui, le béton prise rapide (type Weber béton express) permet un scellement en 30 à 60 minutes et est idéal pour les poteaux de clôture ou de boîte aux lettres. Pour les poteaux structurels porteurs, utilisez du béton standard C25/30 pour garantir la résistance à 28 jours.",
    },
    {
      question: "Quel ferraillage pour un poteau béton résidentiel ?",
      answer: "Un poteau résidentiel standard comprend 4 aciers HA 10 longitudinaux avec des cadres HA 6 tous les 15 cm. Pour les poteaux de plus de 2,50 m de hauteur ou reprenant des charges importantes, le bureau d'études dimensionne le ferraillage en conséquence.",
    },
  ],
};

export const concreteStepsCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation est indicative. La géométrie exacte de l'escalier, le ferraillage et les finitions influencent le volume réel. Faites valider par un professionnel pour les escaliers structurels.",
  howToUse: [
    "Saisissez la largeur de l'escalier en mètres.",
    "Saisissez le giron (profondeur de marche) en centimètres — 25 à 30 cm est standard.",
    "Saisissez la hauteur de marche en centimètres — 16 à 18 cm est conforme.",
    "Indiquez le nombre de marches.",
    "Cliquez sur Calculer pour obtenir le volume total en m³.",
  ],
  materialInfo:
    "Les escaliers en béton armé (appelés aussi perrons ou emmarchements) sont coulés sur place dans un coffrage sur mesure. Ils sont utilisés pour les accès extérieurs, les descentes de sous-sol et les raccordements entre niveaux. Les dimensions réglementaires (norme NF P01-012) imposent une hauteur de marche de 16 à 18 cm et un giron de 25 à 30 cm pour un escalier confortable. La formule de Blondel (2h + g = 60 à 64 cm) vérifie le confort de l'emmarchement.\n\nLe coffrage est la partie la plus technique : il doit être rigide, étanche et parfaitement de niveau. Les aciers comprennent une nappe de treillis soudé en paillasse et des aciers de répartition. Le béton prescrit est C25/30 avec un affaissement S2 à S3 pour limiter la ségrégation lors du coulage en pente. Le coût total d'un escalier béton de 4 à 6 marches (1,00 m de large) est de 400 à 1 200 € en matériaux.",
  nextSteps: [
    { label: "Calculateur de béton", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculateur de dalle béton", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calculateur de semelle de fondation", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Construisez un coffrage robuste avec des contremarches bien fixées — la poussée du béton frais est importante.",
    "Armez avec un treillis soudé ST25C en paillasse et des aciers en chapeau au nez de marche.",
    "Coulez de bas en haut en vibrant chaque marche pour chasser les bulles d'air.",
    "Talochez les nez de marche et les surfaces de marche pour une finition lisse et antidérapante.",
  ],
  commonMistakes: [
    "Ne pas respecter la formule de Blondel — des marches mal dimensionnées sont dangereuses et inconfortables.",
    "Sous-estimer la poussée sur le coffrage — un coffrage qui cède pendant le coulage est un désastre.",
    "Oublier le ferraillage — un escalier béton non armé fissure sous les contraintes de flexion.",
    "Décoffrer trop tôt — attendez au moins 48 à 72 heures avant de retirer les coffrages.",
  ],
  faqs: [
    {
      question: "Quelle hauteur et quel giron pour un escalier extérieur ?",
      answer: "La norme NF P01-012 recommande une hauteur de marche de 16 à 18 cm et un giron de 25 à 30 cm. La formule de Blondel (2h + g) doit donner entre 60 et 64 cm pour un escalier confortable.",
    },
    {
      question: "Combien de béton pour un escalier de 5 marches ?",
      answer: "Un escalier de 5 marches de 1,00 m de large, avec des marches de 17 cm de haut et 28 cm de giron, nécessite environ 0,3 à 0,5 m³ de béton selon l'épaisseur de la paillasse. Prévoyez 10 à 15 sacs de béton prêt à l'emploi de 35 kg.",
    },
    {
      question: "Quel béton pour un escalier extérieur ?",
      answer: "Utilisez du béton C25/30 avec un affaissement S2 à S3. Pour une finition antidérapante, un balayage ou un traitement au gravier lavé est recommandé. En zone de gel, le béton doit être formulé avec un entraîneur d'air (BPS NF EN 206).",
    },
    {
      question: "Peut-on couler un escalier béton soi-même ?",
      answer: "C'est faisable pour un bricoleur expérimenté sur un escalier de 3 à 5 marches avec un coffrage simple. Au-delà, la complexité du coffrage, du ferraillage et de la mise en œuvre justifie de faire appel à un maçon professionnel. Le coffrage seul représente 50 à 60 % du travail total.",
    },
  ],
};

export const gravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation inclut un facteur de perte de 10 %. Le poids du gravier varie selon le type et l'humidité. La conversion de 1,5 tonne par mètre cube est une moyenne — le poids réel varie de 1,4 à 1,8 t/m³ selon le matériau. Confirmez toujours les quantités auprès de votre fournisseur avant de commander.",
  howToUse: [
    "Mesurez la longueur de la surface à couvrir en mètres.",
    "Mesurez la largeur de la surface en mètres.",
    "Saisissez l'épaisseur de gravier souhaitée en centimètres — 10 cm est standard pour la plupart des applications, 15 à 20 cm pour les allées carrossables.",
    "Cliquez sur Calculer pour obtenir les mètres cubes et les tonnes avec un facteur de perte de 10 % intégré.",
  ],
  materialInfo:
    "Le gravier est un granulat en vrac de fragments de roche utilisé pour les allées, les chemins piétons, le drainage, l'aménagement paysager et comme couche de fondation sous le béton et l'enrobé. Il existe dans une large gamme de granulométries et de types, chacun adapté à des applications différentes.\n\nLes granulométries les plus courantes en France sont : le gravillon 6/10 et 10/20 mm (standard pour allées et drainage), le concassé 0/31,5 mm ou 0/20 mm (tout-venant pour sous-couches compactées), et le gros gravier 20/40 mm ou 40/80 mm (pour drainage et couches antigel). Le gravier roulé 8/12 mm (galets arrondis) est populaire pour les allées piétonnes, les terrasses et les massifs décoratifs. Le concassé a des arêtes angulaires qui s'emboîtent et se compactent fermement, tandis que les galets roulés ont des surfaces lisses qui glissent sous les pieds et ne se compactent pas.\n\nLe gravier se vend en France au mètre cube ou à la tonne. Un mètre cube de gravier pèse environ 1,5 à 1,8 tonne selon le type de roche — le tout-venant est plus lourd à 1,8 t/m³, le gravier décoratif plus léger à 1,4 t/m³. La plupart des négoces vendent à la tonne avec livraison. Les prix courants vont de 20 à 50 € la tonne selon le type et la région. Les frais de livraison sont de 80 à 200 € par voyage pour des distances jusqu'à 30 km. Des fournisseurs comme Leroy Merlin, Point.P, Gedimat et les carrières locales proposent différents types de gravier.\n\nPour les allées carrossables, la méthode standard est un système à 3 couches : 15 cm de tout-venant (0/31,5 mm) comme couche de fondation, 10 cm de gravillon 10/20 mm comme couche intermédiaire, et 5 cm de gravillon 4/6 mm ou de concassé fin comme couche de roulement. Cette épaisseur totale de 30 cm assure un excellent drainage et une surface stable. Pour les remblais simples, les chemins piétons et les massifs, une seule couche de 8 à 10 cm suffit.",
  nextSteps: [
    { label: "Calculateur de gravier pour allée", href: "/calculators/foundation/driveway-gravel-calculator/" },
    { label: "Calculateur de dalle béton", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Calculateur de semelle de fondation", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Retirez toute la terre végétale et les matières organiques avant de poser le gravier — la matière organique se décompose et provoque des affaissements.",
    "Posez un géotextile sur le sol compacté pour empêcher le gravier de se mélanger au sol en dessous.",
    "Étalez le gravier en couches de 5 à 8 cm et compactez chaque couche à la plaque vibrante avant d'ajouter la suivante.",
    "Donnez aux allées une légère pente transversale (2 à 3 %) pour que l'eau s'écoule vers les bords au lieu de stagner.",
    "Utilisez des bordures de contention (acier, aluminium ou bordures béton) pour empêcher le gravier de migrer vers les zones adjacentes.",
  ],
  commonMistakes: [
    "Utiliser des galets roulés pour les allées carrossables — ils ne se compactent pas et glissent sous le poids des pneus. Utilisez du concassé anguleux à la place.",
    "Ne pas retirer la terre végétale — l'herbe et les racines sous le gravier se décomposeront et créeront des affaissements.",
    "Sauter l'étape de compactage — le gravier non compacté se déplace et forme rapidement des ornières.",
    "Appliquer le gravier trop fin — moins de 8 cm ne fournira pas une couverture ni un support suffisants et le sol apparaîtra à travers la pierre.",
    "Ne pas tenir compte des minimums de livraison — la plupart des fournisseurs exigent une commande minimale de 5 à 10 tonnes pour la livraison.",
  ],
  faqs: [
    {
      question: "Combien de gravier me faut-il ?",
      answer: "Multipliez la longueur par la largeur de votre projet (en mètres) pour obtenir la surface en m², puis multipliez par l'épaisseur (en mètres) pour obtenir les mètres cubes. Un mètre cube de gravier couvre environ 10 m² sur 10 cm d'épaisseur. Ajoutez 10 % pour le tassement, les pertes et les irrégularités du terrain. Exemple : une surface de 6×6 mètres sur 10 cm d'épaisseur nécessite environ 4 m³ (6 à 7 tonnes).",
    },
    {
      question: "Combien pèse un mètre cube de gravier ?",
      answer: "Un mètre cube de gravier pèse environ 1 500 à 1 800 kg (1,5 à 1,8 tonne). Le poids exact dépend du type de roche : le concassé standard pèse en moyenne 1,5 t/m³, le tout-venant est plus lourd à 1,8 t/m³, le gravier décoratif pèse environ 1,4 t/m³. Le gravier humide peut peser 10 à 15 % de plus que le sec.",
    },
    {
      question: "Combien de tonnes de gravier me faut-il ?",
      answer: "Calculez d'abord vos mètres cubes (longueur × largeur × épaisseur en mètres), puis multipliez par 1,5 à 1,8 selon le type de matériau. Exemple : une surface de 3×6 mètres sur 10 cm d'épaisseur donne 1,8 m³, soit environ 2,7 à 3,2 tonnes. Commandez toujours 10 % de plus pour le tassement et les pertes.",
    },
    {
      question: "Quelle épaisseur de gravier faut-il ?",
      answer: "L'épaisseur recommandée dépend de l'usage : 5 à 8 cm pour les chemins piétons et les massifs décoratifs, 10 cm pour les terrasses et le remblai général, 15 à 20 cm pour les allées carrossables (en plusieurs couches), et 25 à 30 cm pour les zones de circulation lourde. Compactez toujours chaque couche avant d'ajouter la suivante.",
    },
    {
      question: "Combien coûte le gravier à la tonne ?",
      answer: "Les prix du gravier varient de 20 à 50 € la tonne selon le type. Le tout-venant et le concassé standard sont les plus abordables à 20 à 30 € la tonne. Le gravillon décoratif coûte 30 à 50 € la tonne. Les galets et le gravier de marbre coûtent 50 à 120 € la tonne. Les frais de livraison ajoutent 80 à 200 € par voyage. Leroy Merlin, Point.P et les carrières locales proposent les meilleures options.",
    },
    {
      question: "Combien de mètres cubes de gravier contient un camion ?",
      answer: "Un camion-benne standard à 2 essieux contient 6 à 8 m³ (9 à 14 tonnes) de gravier. Un semi-remorque à benne contient 15 à 20 m³ (22 à 36 tonnes). Pour les petits projets, de nombreux fournisseurs proposent des livraisons partielles, ou vous pouvez transporter du gravier dans une remorque (environ 0,3 à 0,5 m³ par voyage).",
    },
  ],
};

export const drivewayGravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation inclut un facteur de perte de 10 %. Les estimations de coûts sont basées sur des moyennes régionales et varient considérablement selon la région, le fournisseur et la distance de livraison. Le poids du gravier varie selon le type et l'humidité. Demandez toujours des devis à des fournisseurs locaux avant de commander.",
  howToUse: [
    "Mesurez la longueur totale de votre allée en mètres.",
    "Saisissez la largeur de l'allée — 3 à 3,5 mètres pour une voiture, 5,5 à 6,5 mètres pour une allée double.",
    "Saisissez l'épaisseur de gravier — 15 cm est standard pour les allées, 20 à 25 cm pour la circulation de véhicules lourds.",
    "Sélectionnez le type de gravier et cliquez sur Calculer pour obtenir les mètres cubes, tonnes et une estimation de coût.",
  ],
  materialInfo:
    "Une allée en gravier est l'une des alternatives les plus économiques et pratiques au béton coulé ou à l'enrobé. Correctement réalisée avec les bons matériaux et une épaisseur suffisante, une allée en gravier peut durer 10 à 15 ans avec un entretien minimal.\n\nLa meilleure allée en gravier est construite en trois couches. La couche inférieure (15 cm) utilise du tout-venant 0/31,5 mm pour le drainage et la portance. La couche intermédiaire (10 cm) utilise du gravillon 10/20 mm comme transition. La couche supérieure (5 à 8 cm) utilise du concassé fin compactable 4/6 mm ou 2/6 mm qui s'emboîte pour former une surface de roulement ferme. Chaque couche doit être étalée et compactée séparément.\n\nLe concassé (gravillon 6/10 ou 10/14) est le gravier le plus populaire pour les allées car ses arêtes angulaires s'emboîtent lors du compactage, créant une surface stable. Le tout-venant (également appelé grave ou GNT 0/31,5) est un mélange de concassé et de fines qui se compacte en une surface extrêmement dure — c'est le choix privilégié pour les allées à fort trafic. Les galets roulés ont un bel aspect mais se déplacent sous les pneus et ne sont pas recommandés comme surface de roulement principale. Le gravier de granite se compacte bien et offre un aspect naturel.\n\nLes allées en gravier coûtent de 15 à 40 € par mètre carré posées, selon l'épaisseur et le matériau. Une allée typique de 3,5 × 15 mètres pour une voiture coûte de 800 à 2 000 € en matériaux seuls. L'installation professionnelle avec terrassement, géotextile et compactage ajoute 15 à 40 € par m². L'entretien annuel comprend le ratissage du gravier déplacé et l'ajout d'une couche de rechargement de 3 à 5 cm tous les 2 à 3 ans. Leroy Merlin, Point.P et les carrières locales fournissent les matériaux nécessaires.",
  nextSteps: [
    { label: "Calculateur de gravier", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Calculateur de dalle béton", href: "/calculators/foundation/concrete-slab-calculator/" },
  ],
  installationTips: [
    "Terrassez l'allée avec une pente de 2 à 3 % en s'éloignant de la maison pour un bon drainage — l'eau stagnante sur le gravier crée des nids-de-poule.",
    "Posez un géotextile sur le sol terrassé pour empêcher la pierre de se mélanger au sol en dessous.",
    "Étalez et compactez chaque couche séparément — ne déversez pas tout le gravier d'un coup.",
    "Utilisez une plaque vibrante ou un rouleau sur chaque couche pour maximiser la densité et la stabilité.",
    "Installez des bordures (acier, aluminium ou traverses bois) des deux côtés pour empêcher la migration du gravier dans le jardin.",
    "Bombez légèrement le centre de l'allée (3 à 5 cm) pour que l'eau s'écoule vers les deux côtés.",
  ],
  commonMistakes: [
    "Utiliser des galets roulés comme surface de roulement — leur forme arrondie ne se compacte pas et les pierres sont projetées par les pneus.",
    "Déverser le gravier directement sur la terre végétale sans terrassement — le sol organique se décompose et provoque des affaissements et un mélange de boue.",
    "N'appliquer que 5 à 8 cm de gravier — c'est trop fin pour la circulation automobile et les ornières atteindront le sol rapidement.",
    "Omettre la couche de géotextile — sans elle, le gravier s'enfonce dans le sol meuble en 1 à 2 ans et vous perdez la moitié de votre matériau.",
    "Ne pas compacter entre les couches — le gravier en vrac se déplace et développe des ornières et des nids-de-poule en quelques semaines d'utilisation.",
  ],
  faqs: [
    {
      question: "Combien de gravier faut-il pour une allée ?",
      answer: "Une allée standard pour une voiture (3,5 mètres de large, 15 mètres de long, 15 cm d'épaisseur) nécessite environ 8 m³ (12 à 14 tonnes) de gravier. Une allée double (6×15 mètres à 15 cm d'épaisseur) nécessite environ 14 m³ (21 à 25 tonnes). Ces quantités incluent un facteur de perte de 10 % pour le tassement et l'étalement.",
    },
    {
      question: "Combien coûte une allée en gravier ?",
      answer: "Les matériaux pour une allée en gravier coûtent de 15 à 40 € par mètre carré selon le type de gravier et l'épaisseur. Une allée de 3,5×15 mètres coûte de 800 à 2 000 € pour le gravier seul. L'installation professionnelle avec terrassement, géotextile et compactage coûte typiquement 15 à 40 € par m², portant le coût total installé entre 1 600 et 4 200 € pour une allée simple.",
    },
    {
      question: "Quel est le meilleur gravier pour une allée ?",
      answer: "Le concassé (gravillon 6/10 ou 10/14 mm) est le meilleur gravier polyvalent pour les allées car ses arêtes angulaires s'emboîtent lors du compactage. Le tout-venant (GNT 0/31,5) est encore mieux pour le trafic lourd — il contient des fines qui lient le granulat en une surface quasi-solide. Utilisez du gravillon 10/20 pour le corps et du tout-venant ou du concassé fin pour la couche de surface.",
    },
    {
      question: "Quelle épaisseur de gravier pour une allée ?",
      answer: "Une allée en gravier doit avoir au minimum 15 à 20 cm d'épaisseur pour les véhicules légers, mise en œuvre en 2 à 3 couches. Pour les véhicules lourds (camions, engins), utilisez 25 à 30 cm d'épaisseur totale. Chaque couche doit être compactée avant d'appliquer la suivante. Une couche fine de 5 à 8 cm formera des ornières jusqu'au sol en quelques mois.",
    },
    {
      question: "Combien de temps dure une allée en gravier ?",
      answer: "Une allée en gravier correctement réalisée dure 10 à 15 ans avant de nécessiter une rénovation majeure. L'entretien annuel comprend le ratissage du gravier déplacé et l'ajout d'une couche de rechargement de 3 à 5 cm tous les 2 à 3 ans. La couche de fondation peut durer indéfiniment si elle a été correctement réalisée avec géotextile et drainage.",
    },
    {
      question: "Faut-il un géotextile sous une allée en gravier ?",
      answer: "Oui, le géotextile est indispensable sous une allée en gravier. Sans géotextile, le gravier s'enfonce dans le sol meuble en 1 à 2 ans, et la terre remonte à travers la pierre en créant une surface boueuse. Utilisez un géotextile tissé de qualité professionnelle prévu pour la circulation automobile — pas le feutre mince vendu pour les massifs de jardin.",
    },
  ],
};

export const mortarMixCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation comprend un facteur de gaspillage de 10 %. La consommation réelle de mortier varie selon la taille des blocs ou briques, le profil de joint, la qualité de la main-d'oeuvre et les conditions météorologiques. Confirmez toujours les quantités auprès de votre fournisseur avant de commander.",
  howToUse: [
    "Calculez la surface totale du mur en mètres carrés — multipliez la longueur par la hauteur et soustrayez les ouvertures de portes et fenêtres.",
    "Sélectionnez le type de mortier — Type N pour les travaux courants hors sol, Type S pour les murs porteurs et enterrés, Type M pour les charges lourdes.",
    "Choisissez l'épaisseur du joint — 10 mm est la norme pour la plupart des travaux de maçonnerie.",
    "Cliquez sur Calculer pour obtenir le nombre de sacs prémélangés et les quantités pour un mélange artisanal avec ciment Portland et sable.",
  ],
  materialInfo:
    "Le mortier est le liant utilisé entre les parpaings, les briques et les pierres en construction maçonnée. Il est composé de ciment Portland, de chaux hydraulique, de sable et d'eau, mélangés jusqu'à obtenir une consistance maniable permettant une pose efficace des éléments de maçonnerie.\n\nEn France, les mortiers de maçonnerie sont classés selon la norme NF EN 998-2. Les classes les plus courantes sont : M2,5 (mortier bâtard, résistance ~2,5 MPa) pour les murs intérieurs et la maçonnerie non porteuse, M5 (mortier courant, ~5 MPa) pour la plupart des applications résidentielles y compris les murs porteurs, et M10/M15 (mortier ciment, ~10-15 MPa) pour les fondations, murs de soutènement et ouvrages enterrés.\n\nLe mortier prêt à l'emploi est disponible en sacs de 25 kg et 35 kg. Un sac de 25 kg donne environ 14 litres de mortier gâché et couvre environ 8 à 10 parpaings standard (20x20x50 cm) avec des joints de 10 mm. Pour les grands chantiers, le dosage sur place avec du ciment, de la chaux et du sable est plus économique — un dosage courant pour mortier M5 utilise 1 volume de ciment, 0,5 volume de chaux et 4,5 volumes de sable.\n\nLes marques courantes en France incluent Parexlanko, Weber (Saint-Gobain), PRB et Lafarge. Les sacs de mortier (25 kg) coûtent entre 5 et 10 EUR en négoce de matériaux (Point.P, BigMat, Gedimat, Leroy Merlin, Castorama). Le sable à maçonner coûte environ 30 à 50 EUR la tonne.",
  nextSteps: [
    { label: "Calculateur de béton", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculateur de remplissage de blocs", href: "/calculators/foundation/block-fill-calculator/" },
    { label: "Calculateur de semelle filante", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Ne gâchez que la quantité de mortier utilisable en 90 minutes — au-delà, il commence à prendre et perd sa maniabilité.",
    "Humidifiez les parpaings ou briques avant la pose pour éviter qu'ils n'absorbent l'eau du mortier, ce qui provoque des joints faibles.",
    "Maintenez une épaisseur de joint régulière en tendant un cordeau et en vérifiant l'aplomb toutes les 3 à 4 rangées.",
    "Jointoyez quand le mortier est ferme au toucher — trop tôt, il s'étale ; trop tard, il ne se compacte plus correctement.",
    "Protégez la maçonnerie fraîchement posée avec une bâche par temps chaud, sec ou venteux pour éviter la dessiccation rapide.",
  ],
  commonMistakes: [
    "Utiliser le mauvais type de mortier — un mortier M10 en mur intérieur est trop rigide et fissure ; un M2,5 en fondation est trop faible.",
    "Ajouter trop d'eau au mélange — un mortier trop liquide a une résistance réduite et tache la face des blocs.",
    "Retremper le mortier après le début de prise — ajouter de l'eau à un mortier raidi réduit définitivement sa résistance d'adhérence.",
    "Gâcher une quantité trop importante — le mortier resté plus de 2 heures dans l'auge est inutilisable et doit être jeté.",
    "Ne pas garnir les joints verticaux — des joints montants vides créent des points d'infiltration d'eau et affaiblissent le mur.",
  ],
  faqs: [
    {
      question: "Combien de mortier faut-il par mètre carré ?",
      answer: "Pour des parpaings standard (20x20x50 cm) avec des joints de 10 mm, comptez environ 1,5 sacs de 25 kg de mortier prémélangé par mètre carré de mur. Pour des briques de parement, le besoin est d'environ 30 litres de mortier par m2. Les joints plus épais (15 mm) augmentent la consommation d'environ 50 %.",
    },
    {
      question: "Quelle est la différence entre mortier M2,5 / M5 / M10 ?",
      answer: "Le M2,5 (mortier bâtard à la chaux) est un mortier souple pour murs intérieurs et cloisons non porteuses. Le M5 (mortier courant) est le standard pour les murs porteurs résidentiels, intérieurs et extérieurs. Le M10/M15 (mortier ciment) offre la plus haute résistance et est utilisé pour les fondations, murs de soutènement et ouvrages enterrés.",
    },
    {
      question: "Comment doser le mortier soi-même ?",
      answer: "Pour un mortier M5 courant, mélangez 1 volume de ciment Portland CEM II, 0,5 volume de chaux hydraulique et 4,5 volumes de sable à maçonner. Pour un M10, utilisez 1 volume de ciment, 0,25 volume de chaux et 3 volumes de sable. Ajoutez l'eau progressivement jusqu'à obtenir une consistance onctueuse qui tient sur la truelle sans couler.",
    },
    {
      question: "Combien de temps le mortier met-il à durcir ?",
      answer: "Le mortier atteint sa prise initiale en 2 à 4 heures et est suffisamment ferme pour de légers travaux après 24 heures. Le durcissement complet prend 28 jours. Évitez les charges lourdes et le remblaiement contre les murs fraîchement maçonnés pendant au moins 7 jours. En dessous de 5 C, le durcissement ralentit considérablement.",
    },
    {
      question: "Peut-on utiliser du mortier à la place du béton ?",
      answer: "Non. Le mortier et le béton sont des produits différents. Le mortier sert à lier les éléments de maçonnerie et ne contient pas de graviers. Le béton contient des granulats et est conçu pour les dalles, semelles et poteaux. Utiliser du mortier à la place du béton entraînerait une défaillance structurelle.",
    },
    {
      question: "Quel mortier pour la pierre naturelle ?",
      answer: "Pour la pierre naturelle, utilisez un mortier bâtard (chaux-ciment) dosé à environ 200 kg de ciment et 100 kg de chaux par m3 de sable. La chaux apporte la souplesse nécessaire pour absorber les mouvements différentiels entre les pierres irrégulières. Pour les pierres calcaires claires, un mortier à base de ciment blanc et de chaux évite les taches et les efflorescences.",
    },
  ],
};

export const blockFillCalculator: CalculatorSEOContent = {
  disclaimer:
    "Cette estimation inclut un facteur de perte de 10 %. Le volume r\u00e9el de remplissage varie selon le fabricant du bloc, la g\u00e9om\u00e9trie des alv\u00e9oles et la consistance du coulis. V\u00e9rifiez toujours les dimensions des alv\u00e9oles sur la fiche technique du produit avant de commander.",
  howToUse: [
    "Comptez le nombre total de parpaings \u00e0 remplir \u2014 incluez toutes les rang\u00e9es et sections de mur.",
    "S\u00e9lectionnez la taille du bloc : 20 cm est le standard r\u00e9sidentiel, 25 cm et 30 cm pour les murs porteurs ou plus hauts.",
    "Choisissez le type de remplissage : b\u00e9ton/coulis pour les remplissages structurels, vermiculite pour l\u2019isolation, mousse pour la performance thermique.",
    "Cliquez sur Calculer pour obtenir les m\u00e8tres cubes et le nombre de sacs.",
  ],
  materialInfo:
    "Le remplissage de blocs (aussi appel\u00e9 remplissage d\u2019alv\u00e9oles ou injection de coulis) est le proc\u00e9d\u00e9 de remplissage des alv\u00e9oles creuses des parpaings avec du b\u00e9ton, du coulis, de la vermiculite ou de la mousse isolante. En France, la construction en ma\u00e7onnerie de blocs est r\u00e9gie par l\u2019Eurocode 6 (NF EN 1996) et les DTU 20.1 (Ouvrages en ma\u00e7onnerie de petits \u00e9l\u00e9ments) et DTU 20.13.\n\nLe remplissage structural utilise un coulis fluide (typiquement C25/30) qui s\u2019\u00e9coule dans les alv\u00e9oles et autour des armatures plac\u00e9es dans le mur. Les r\u00e8gles de construction exigent des alv\u00e9oles remplies aux emplacements des armatures et aux cha\u00eenages horizontaux et verticaux.\n\nLe ferraillage est essentiel pour l\u2019int\u00e9grit\u00e9 structurelle. Les armatures verticales (HA 10 ou HA 12) sont ancr\u00e9es dans la fondation et remontent dans les alv\u00e9oles \u00e0 remplir. Les armatures horizontales sont plac\u00e9es dans les blocs de cha\u00eenage en partie haute du mur et aux niveaux interm\u00e9diaires selon les prescriptions de l\u2019ing\u00e9nieur.\n\nPour les applications non structurelles, le remplissage en vrac de vermiculite ou de perlite offre une isolation mod\u00e9r\u00e9e (conductivit\u00e9 thermique d\u2019environ 0,065 W/mK). La mousse polyur\u00e9thane inject\u00e9e offre de meilleures performances (environ 0,022 W/mK) et aide \u00e0 respecter la RE2020. Les parpaings standards de 20 cm ont deux alv\u00e9oles produisant environ 0,007 m\u00b3 de remplissage par bloc.\n\nComptez de 120 \u00e0 180 EUR le m\u00e8tre cube pour du coulis pr\u00eat \u00e0 l\u2019emploi livr\u00e9, ou de 5 \u00e0 8 EUR par sac de 25 kg de coulis pr\u00e9m\u00e9lang\u00e9. La vermiculite co\u00fbte 15 \u00e0 25 EUR le sac de 100 litres. Mat\u00e9riaux disponibles chez Point P, Gedimat, BigMat et les n\u00e9goces locaux. Commandez toujours 10 % de plus pour le tassement, les pertes et les variations d\u2019alv\u00e9oles.",
  nextSteps: [
    { label: "Calculateur de b\u00e9ton", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Calculateur de semelle", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Calculateur de gravier", href: "/calculators/foundation/gravel-calculator/" },
  ],
  installationTips: [
    "Humidifiez les alv\u00e9oles avant de couler le coulis \u2014 les blocs secs absorbent l\u2019eau du m\u00e9lange et affaiblissent le remplissage.",
    "Coulez le coulis par passes de 1,20 m maximum, puis vibrez ou piquez pour consolider.",
    "Utilisez un coulis fin (granulat max 10 mm) pour qu\u2019il s\u2019\u00e9coule librement dans les alv\u00e9oles sans faire de ponts.",
    "Placez les armatures verticales avant de monter les blocs et maintenez-les d\u2019aplomb.",
    "Pr\u00e9voyez des blocs de nettoyage en pied de murs hauts pour inspecter les alv\u00e9oles avant le coulage.",
    "Remplissez compl\u00e8tement les cha\u00eenages et vibrez le coulis pour \u00e9liminer les vides autour des armatures horizontales.",
  ],
  commonMistakes: [
    "Remplir toutes les alv\u00e9oles d\u2019un mur haut en une seule fois \u2014 la pression du coulis peut faire \u00e9clater les rangs inf\u00e9rieurs. Limitez les passes \u00e0 1,20 m.",
    "Omettre les armatures dans les alv\u00e9oles remplies \u2014 les alv\u00e9oles sans acier offrent peu de valeur structurelle.",
    "Utiliser du b\u00e9ton standard au lieu de coulis fin \u2014 les gros granulats se coincent dans l\u2019ouverture des alv\u00e9oles et cr\u00e9ent des vides.",
    "Ne pas consolider le coulis avec un vibrateur ou une tige \u2014 les poches d\u2019air r\u00e9duisent la r\u00e9sistance d\u2019adh\u00e9rence jusqu\u2019\u00e0 50 %.",
    "Remplir les alv\u00e9oles par temps de gel \u2014 le coulis doit durcir au-dessus de 5 \u00b0C pendant au moins 48 heures.",
  ],
  faqs: [
    { question: "Combien de b\u00e9ton faut-il pour remplir des parpaings ?", answer: "Un parpaing standard de 20 cm n\u00e9cessite environ 0,007 m\u00b3 de coulis. Pour 100 parpaings, il faut environ 0,77 m\u00b3 en incluant 10 % de perte. Entrez votre nombre de blocs et taille ci-dessus pour une estimation instantan\u00e9e avec le nombre de sacs." },
    { question: "Combien de sacs de b\u00e9ton de 25 kg pour remplir un parpaing ?", answer: "Un sac de coulis de 25 kg remplit environ 2 parpaings standards de 20 cm. Pour un mur de 100 parpaings, il faut environ 55 sacs. Pour des blocs de 30 cm, un sac ne remplit qu\u2019environ 1,2 bloc en raison du plus grand volume d\u2019alv\u00e9ole." },
    { question: "Faut-il remplir toutes les alv\u00e9oles des parpaings ?", answer: "Non \u2014 les r\u00e8gles de construction n\u2019exigent le remplissage que des alv\u00e9oles contenant des armatures ou faisant partie d\u2019un cha\u00eenage. En zone sismique, le remplissage de toutes les alv\u00e9oles peut \u00eatre exig\u00e9." },
    { question: "Quelle est la diff\u00e9rence entre le coulis et le b\u00e9ton pour le remplissage de blocs ?", answer: "Le coulis est un m\u00e9lange fluide de b\u00e9ton avec de petits granulats (max 10 mm), con\u00e7u pour s\u2019\u00e9couler dans les alv\u00e9oles \u00e9troites sans cr\u00e9er de ponts. Le b\u00e9ton standard a des granulats plus gros qui se coincent et cr\u00e9ent des vides." },
    { question: "Peut-on remplir les parpaings avec de la mousse isolante ?", answer: "Oui, pour les murs non porteurs lorsque la r\u00e9glementation le permet. La mousse PU projet\u00e9e offre une excellente performance thermique (environ 0,022 W/mK) et aide \u00e0 respecter la RE2020. La vermiculite est moins ch\u00e8re mais moins performante. Aucune ne fournit de r\u00e9sistance structurelle." },
    { question: "Combien de m\u00e8tres cubes de coulis pour un mur en parpaings ?", answer: "Multipliez le nombre de blocs \u00e0 remplir par le volume d\u2019alv\u00e9ole : 0,007 m\u00b3 par bloc de 20 cm, 0,009 m\u00b3 par bloc de 25 cm ou 0,011 m\u00b3 par bloc de 30 cm. Un mur de fondation typique de 20 cm avec 400 blocs n\u00e9cessite environ 3,1 m\u00b3 incluant 10 % de perte." },
  ],
};

// ─── FLOOR FRAMING ──────────────────────────────────────────────────────────

export const rimJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez le périmètre du plancher en mètres linéaires.",
    "Sélectionnez la section des solives de rive (45×200, 45×250 ou 45×300 mm).",
    "Sélectionnez la longueur des pièces disponibles.",
    "Cliquez sur Calculer pour obtenir le nombre de pièces et les mètres linéaires.",
  ],
  materialInfo:
    "La solive de rive (ou solive d'about) est la pièce de bois posée de chant qui ferme le plancher sur son périmètre. Elle a la même hauteur que les solives courantes et assure la transmission des charges au droit des appuis ainsi que le maintien en tête des solives. La section doit correspondre à celle des solives (45×200, 45×250 ou 45×300 mm). En France, on utilise du bois de charpente C24 (norme NF EN 338) en résineux (épicéa, douglas, pin sylvestre). Les longueurs commerciales vont de 2,50 m à 6,00 m. Le coût est de 3 à 8 € le mètre linéaire selon la section et l'essence. Le DTU 31.1 et le DTU 31.2 définissent les assemblages et les fixations.",
  nextSteps: [
    { label: "Calculateur de solives", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculateur de lisse basse traitée", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Calculateur de panneaux OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Posez la solive de rive de chant sur la lisse basse, affleurant au bord extérieur.",
    "Clouez ou vissez dans la lisse basse avec des pointes annelées de 90 mm tous les 30 cm.",
    "Fixez chaque solive courante dans la solive de rive avec 3 pointes de 90 mm en bout.",
    "Assurez la rectitude de la solive de rive en vérifiant l'alignement avant de fixer les solives courantes.",
  ],
  commonMistakes: [
    "Utiliser une section inférieure à celle des solives courantes — la solive de rive doit être de même hauteur.",
    "Ne pas fixer solidement la solive de rive à la lisse basse — elle doit résister au soulèvement au vent.",
    "Oublier de traiter les coupes de bois en contact avec la maçonnerie.",
  ],
  faqs: [
    {
      question: "Quelle section pour la solive de rive ?",
      answer: "La solive de rive doit avoir la même hauteur que les solives courantes du plancher. Si vos solives sont en 45×200, la rive sera en 45×200. En 45×250, la rive en 45×250.",
    },
    {
      question: "Comment fixer la solive de rive sur la lisse basse ?",
      answer: "Clouez avec des pointes annelées galvanisées de 90 mm tous les 30 cm en pied, et fixez les solives courantes en bout avec 3 pointes de 90 mm ou des sabots de solive.",
    },
    {
      question: "Combien de pièces pour un plancher de 10×8 m ?",
      answer: "Le périmètre est de 36 m. Avec des pièces de 4,00 m, il faut 9 pièces plus 10 % de chute, soit 10 pièces.",
    },
  ],
};

export const floorJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la longueur du plancher (perpendiculaire aux solives) en mètres.",
    "Sélectionnez l'entraxe : 40 cm ou 60 cm.",
    "Cliquez sur Calculer pour obtenir le nombre total de solives.",
  ],
  materialInfo:
    "Les solives de plancher sont les pièces de bois horizontales qui supportent le plancher et transmettent les charges aux murs porteurs ou aux poutres. L'entraxe courant en France est de 40 cm (entraxe renforcé) ou 60 cm (entraxe standard). Le DTU 31.1 définit les portées admissibles selon la section, l'essence et la classe de résistance. Les sections courantes sont 45×200 mm (portée jusqu'à 3,50 m à 40 cm d'entraxe), 45×250 mm (jusqu'à 4,50 m) et 45×300 mm (jusqu'à 5,50 m) en C24. Pour les portées supérieures, on utilise des solives en BLC (bois lamellé collé) ou des poutrelles en I (type Steico Joist, Finnjoist). Le coût est de 4 à 10 € le mètre linéaire en bois massif C24.",
  nextSteps: [
    { label: "Calculateur de solive de rive", href: "/calculators/floor-framing/rim-joist-calculator/" },
    { label: "Calculateur d'entretoises", href: "/calculators/floor-framing/bridging-calculator/" },
    { label: "Calculateur de panneaux OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Posez les solives courbe vers le haut — la charge redressera naturellement le bois.",
    "Fixez chaque solive avec un sabot métallique (Simpson, Rothoblaas) ou par clouage en biais.",
    "Vérifiez l'entraxe à chaque solive pour garantir que les panneaux OSB tomberont bien sur les appuis.",
    "Contreventez les solives en pied et en tête pour éviter le déversement pendant le montage.",
  ],
  commonMistakes: [
    "Ne pas vérifier la portée admissible — consultez les abaques du DTU 31.1 avant de choisir la section.",
    "Poser les solives courbe vers le bas — cela accentue la flèche sous charge.",
    "Oublier le contreventement — les solives non maintenues en tête peuvent déverser sous la charge.",
    "Espacer irrégulièrement — un entraxe irrégulier empêche les panneaux OSB de reposer sur les appuis.",
  ],
  faqs: [
    {
      question: "Quel entraxe pour les solives de plancher ?",
      answer: "En France, l'entraxe courant est de 40 cm pour les planchers à forte sollicitation (pièces de vie, surcharges importantes) et de 60 cm pour les combles aménagés ou les planchers légers. Le choix dépend de la section, de la portée et des charges (DTU 31.1).",
    },
    {
      question: "Quelle section pour une portée de 4 mètres ?",
      answer: "Pour une portée de 4 m avec un entraxe de 40 cm et des charges résidentielles standard (150 kg/m²), des solives en 45×250 mm C24 conviennent. À 60 cm d'entraxe, passez en 45×300 mm ou en poutrelle en I.",
    },
    {
      question: "Combien de solives pour un plancher de 6 m de long ?",
      answer: "Sur 6 m de longueur, avec un entraxe de 40 cm : (6 / 0,40) + 1 = 16 solives. Avec un entraxe de 60 cm : (6 / 0,60) + 1 = 11 solives. Ajoutez 5 à 10 % pour les chutes.",
    },
  ],
};

export const bridgingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez la portée des solives en mètres.",
    "Saisissez le nombre de solives.",
    "Cliquez sur Calculer pour obtenir le nombre de rangées d'entretoises et le nombre total de pièces.",
  ],
  materialInfo:
    "Les entretoises (ou entretoisements) sont des éléments de maintien placés perpendiculairement entre les solives pour empêcher leur déversement et répartir les charges ponctuelles. Le DTU 31.1 impose une rangée d'entretoises tous les 2,50 m de portée. Il existe trois types : le blocage massif (pièces de bois de même section que les solives), les croix de Saint-André (lattes en bois croisées) et les entretoises métalliques en croix (type Mitek ou Simpson). Le blocage massif est le plus courant en France pour la construction à ossature bois. Le coût est de 2 à 5 € par entretoise selon le type et la section.",
  nextSteps: [
    { label: "Calculateur de solives", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculateur de solive de rive", href: "/calculators/floor-framing/rim-joist-calculator/" },
    { label: "Calculateur de colle de plancher", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
  ],
  installationTips: [
    "Alignez les entretoises sur une même ligne pour une transmission optimale des charges.",
    "Clouez avec des pointes annelées de 75 mm — au moins 2 par extrémité pour le blocage massif.",
    "En croix de Saint-André, fixez chaque pièce avec 2 pointes en haut et 2 en bas.",
    "Installez les entretoises avant la pose du plancher pour faciliter l'accès.",
  ],
  commonMistakes: [
    "Omettre les entretoises — les solives sans contreventement déversent sous la charge.",
    "Espacer les rangées de plus de 2,50 m — le DTU limite l'écart entre rangées.",
    "Utiliser des sections trop faibles pour le blocage massif — utilisez la même section que les solives.",
  ],
  faqs: [
    {
      question: "Combien de rangées d'entretoises faut-il ?",
      answer: "Le DTU 31.1 impose une rangée tous les 2,50 m de portée. Pour une portée de 4 m, il faut une rangée au milieu. Pour 5 m, deux rangées réparties au tiers de la portée.",
    },
    {
      question: "Blocage massif ou croix de Saint-André ?",
      answer: "Le blocage massif est plus simple et plus courant en construction à ossature bois en France. Les croix de Saint-André sont plus faciles à installer dans les espaces restreints et permettent le passage des gaines. Le blocage massif offre une meilleure résistance au feu.",
    },
    {
      question: "Quel est le rôle des entretoises ?",
      answer: "Les entretoises empêchent le déversement latéral des solives sous charge, répartissent les charges ponctuelles entre plusieurs solives et raidissent le plancher pour réduire les vibrations et le « trampoline ».",
    },
  ],
};

export const subfloorAdhesiveCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface totale du plancher en mètres carrés.",
    "Cliquez sur Calculer pour obtenir le nombre de cartouches nécessaires.",
  ],
  materialInfo:
    "La colle de plancher (type Sika Sikabond T2, Bostik Parquetcol ou Uzin MK 73) se pose entre les solives et les panneaux de plancher (OSB, particules P5) pour créer un plancher monolithique qui élimine les grincements et les mouvements. Elle se présente en cartouches de 310 ml pour pistolet à mastic ou en poches de 600 ml pour pistolet professionnel. Une cartouche de 310 ml couvre environ 4 à 5 mètres linéaires de joint (un cordon continu sur chaque solive). Le coût est de 5 à 10 € par cartouche. L'utilisation de colle est une bonne pratique recommandée par les fabricants de panneaux et le DTU 51.3 pour les planchers bois.",
  nextSteps: [
    { label: "Calculateur de panneaux OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Calculateur de solives", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculateur de solive de rive", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Appliquez un cordon continu de colle sur chaque solive juste avant de poser le panneau.",
    "Ne collez pas plus de panneaux que vous ne pouvez en fixer en 15 minutes — la colle sèche rapidement.",
    "Utilisez une colle compatible avec le type de panneau (OSB, particules P5, contreplaqué).",
    "Nettoyez les bavures de colle immédiatement avec un chiffon humide.",
  ],
  commonMistakes: [
    "Omettre la colle — un plancher vissé sans colle grincera dans les mois qui suivent.",
    "Appliquer un cordon trop fin — un cordon de 6 mm de diamètre est le minimum.",
    "Coller sur des solives humides ou poussiéreuses — la colle n'adhérera pas correctement.",
  ],
  faqs: [
    {
      question: "La colle de plancher est-elle vraiment nécessaire ?",
      answer: "Elle n'est pas obligatoire mais fortement recommandée. La colle élimine les grincements, raidit le plancher et améliore la performance acoustique. La plupart des fabricants de panneaux recommandent la pose collée-vissée pour garantir les performances.",
    },
    {
      question: "Combien de cartouches pour 50 m² de plancher ?",
      answer: "Pour 50 m² avec un entraxe de 40 cm, comptez environ 125 mètres linéaires de solive à coller. À 4 m par cartouche de 310 ml, il faut environ 31 cartouches. Prévoyez 10 % de marge.",
    },
    {
      question: "Quelle colle utiliser ?",
      answer: "Utilisez une colle polyuréthane ou MS polymère spécifique pour plancher bois (Sika Sikabond T2, Bostik Parquetcol, Uzin MK 73). Évitez les colles à base de solvant qui peuvent attaquer certains panneaux.",
    },
  ],
};

export const osbPanelCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface totale à couvrir en mètres carrés.",
    "Cliquez sur Calculer pour obtenir le nombre de panneaux nécessaires, chutes incluses.",
  ],
  materialInfo:
    "L'OSB (Oriented Strand Board) est un panneau de grandes particules orientées, utilisé comme plancher, voile travaillant, support de couverture et coffrage. Les formats standard en France sont 2500×1250 mm et 2500×675 mm (format d'entraxe 675 mm pour pose sans chutes). Les épaisseurs courantes sont 15 mm (voile travaillant mural), 18 mm (plancher courant) et 22 mm (plancher à forte charge). L'OSB 3 est adapté aux usages structurels en milieu humide (norme NF EN 300). Le coût est de 8 à 20 € par panneau selon l'épaisseur et le format. Les marques courantes sont Kronospan, Egger, Norbord et Swiss Krono. Le DTU 31.2 impose l'OSB 3 minimum pour les panneaux de contreventement et de plancher en ossature bois.",
  nextSteps: [
    { label: "Calculateur de solives", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculateur de colle de plancher", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Calculateur de solive de rive", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Posez les panneaux perpendiculairement aux solives, grand côté dans le sens de la portée.",
    "Décalez les joints d'un panneau sur l'autre (pose en quinconce) pour éviter les joints filants.",
    "Laissez un jeu de dilatation de 3 mm entre les panneaux et de 10 mm en rive contre les murs.",
    "Fixez avec des vis à bois de 50 mm tous les 15 cm en rive et 30 cm en plein champ.",
  ],
  commonMistakes: [
    "Poser les panneaux dans le sens des solives au lieu de perpendiculairement — cela réduit la rigidité du plancher.",
    "Oublier le jeu de dilatation — les panneaux gonflent avec l'humidité et se déforment sans jeu.",
    "Utiliser de l'OSB 2 au lieu de l'OSB 3 en milieu humide — l'OSB 2 n'est pas adapté aux conditions d'humidité.",
    "Visser avec un entraxe trop large — respectez les prescriptions du DTU (15 cm en rive, 30 cm en champ).",
  ],
  faqs: [
    {
      question: "Combien de panneaux OSB pour un plancher de 40 m² ?",
      answer: "Un panneau de 2500×1250 mm couvre 3,125 m². Pour 40 m², il faut 40 / 3,125 = 13 panneaux. Ajoutez 10 % pour les chutes, soit 14 à 15 panneaux.",
    },
    {
      question: "Quelle épaisseur d'OSB pour un plancher ?",
      answer: "18 mm est l'épaisseur standard pour un entraxe de solives de 40 cm. Pour un entraxe de 60 cm, utilisez du 22 mm. Le DTU 51.3 définit les épaisseurs minimales selon l'entraxe et la charge.",
    },
    {
      question: "OSB ou contreplaqué pour le plancher ?",
      answer: "L'OSB 3 est moins cher et suffisant pour la majorité des planchers en ossature bois. Le contreplaqué est plus rigide et plus résistant à l'humidité ponctuelle, mais coûte 30 à 50 % de plus. Pour les pièces humides (salle de bain), le contreplaqué CTBX est préférable.",
    },
  ],
};

// ─── WALL FRAMING ───────────────────────────────────────────────────────────

export const studCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la longueur totale du mur en mètres.",
    "Sélectionnez l'entraxe des montants : 40 cm ou 60 cm.",
    "Cliquez sur Calculer pour obtenir le nombre de montants, suppléments pour angles, portes et fenêtres inclus.",
  ],
  materialInfo:
    "Les montants d'ossature bois sont les éléments verticaux qui constituent la structure porteuse du mur. L'entraxe standard en France est de 40 cm pour les murs extérieurs porteurs (DTU 31.2) et 60 cm pour les cloisons intérieures non porteuses. Les sections courantes sont 45×95 mm (cloisons), 45×145 mm (murs extérieurs standard), et 45×200 mm (murs à isolation renforcée, RE 2020). Le bois utilisé est du résineux de classe C24 (NF EN 338). Chaque angle, ouverture de porte et de fenêtre nécessite des montants supplémentaires (montants de renfort, montants de tableaux). Le coût est de 2 à 6 € le mètre linéaire selon la section et l'essence. Les marques de bois de structure les plus courantes sont Silverwood, Metsä Wood et Piveteau Bois.",
  nextSteps: [
    { label: "Calculateur de lisse basse", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Calculateur de lisse haute", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Calculateur de linteaux", href: "/calculators/wall-framing/header-calculator/" },
    { label: "Calculateur de voile travaillant", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "Pré-assemblez les panneaux de mur au sol avant de les lever — c'est plus rapide et plus précis.",
    "Vérifiez l'entraxe avec un gabarit pour garantir que les panneaux OSB tombent sur les montants.",
    "Utilisez un fil à plomb ou un niveau laser pour vérifier la verticalité de chaque panneau levé.",
    "Doublez les montants aux angles pour assurer la fixation des parements intérieurs et extérieurs.",
  ],
  commonMistakes: [
    "Oublier les montants supplémentaires aux angles et aux ouvertures — chaque angle nécessite au minimum 3 montants.",
    "Espacer les montants à 60 cm sur un mur porteur extérieur — le DTU 31.2 impose 40 cm sauf justification par note de calcul.",
    "Ne pas contreventer les panneaux avant levage — un panneau non contreventé est instable.",
    "Utiliser du bois humide (>18 % d'humidité) — le retrait provoquera des fissures dans les finitions.",
  ],
  faqs: [
    {
      question: "Quel entraxe pour un mur porteur extérieur ?",
      answer: "Le DTU 31.2 prescrit un entraxe de 40 cm pour les murs extérieurs porteurs en montants de 45×145 mm. Un entraxe de 60 cm est possible avec une justification par note de calcul (section plus forte ou BLC).",
    },
    {
      question: "Combien de montants pour un mur de 5 m ?",
      answer: "Pour un mur de 5 m à 40 cm d'entraxe : (5 / 0,40) + 1 = 14 montants courants, plus 2 montants de rive, plus les montants pour les ouvertures. Comptez environ 18 à 20 montants au total.",
    },
    {
      question: "Quelle section pour un mur extérieur RE 2020 ?",
      answer: "La RE 2020 impose des performances thermiques élevées. Les murs en 45×145 mm avec isolation entre montants (R=3,7) et doublage intérieur sont le minimum. Les murs en 45×200 mm (R=5,0) ou à double ossature offrent de meilleures performances sans pont thermique.",
    },
    {
      question: "45×95 ou 45×145 mm pour une cloison ?",
      answer: "Le 45×95 mm suffit pour les cloisons intérieures non porteuses jusqu'à 2,50 m de hauteur. Le 45×145 mm est nécessaire pour les cloisons porteuses, les murs de plus de 2,50 m, ou quand on souhaite plus d'isolation acoustique entre les pièces.",
    },
  ],
};

export const bottomPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la longueur totale du mur en mètres.",
    "Sélectionnez la section (45×95 mm ou 45×145 mm).",
    "Cliquez sur Calculer pour obtenir les mètres linéaires et le nombre de pièces.",
  ],
  materialInfo:
    "La lisse basse (ou semelle basse) est la pièce horizontale sur laquelle reposent les montants d'ossature. Elle assure la répartition des charges sur le plancher ou la fondation. La section est identique à celle des montants : 45×95 mm pour les cloisons et 45×145 mm pour les murs extérieurs. Pour les murs au rez-de-chaussée, la lisse basse en contact avec le béton doit être en bois traité autoclave classe 4. Pour les étages, du bois non traité de classe C24 convient. Les longueurs commerciales sont de 2,50 m à 5,00 m. Le coût est de 2 à 5 € le mètre linéaire.",
  nextSteps: [
    { label: "Calculateur de montants", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculateur de lisse haute", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Calculateur de lisse basse traitée", href: "/calculators/foundation/sill-plate-calculator/" },
  ],
  installationTips: [
    "Fixez la lisse basse au plancher avec des vis de 70 mm ou des tirefonds tous les 40 cm.",
    "Tracez l'emplacement des montants sur la lisse avant l'assemblage du panneau.",
    "Vérifiez la rectitude de la lisse — une lisse gauche entraîne un mur hors d'aplomb.",
    "Pour la lisse en contact avec le béton, interposez la bande d'arase.",
  ],
  commonMistakes: [
    "Utiliser du bois non traité en contact avec le béton — la pourriture s'installe en quelques années.",
    "Ne pas fixer solidement la lisse au plancher — le mur peut glisser ou se soulever.",
    "Oublier de tracer les emplacements des montants — un tracé précis est la clé d'un montage rapide et juste.",
  ],
  faqs: [
    {
      question: "Quelle section pour la lisse basse ?",
      answer: "La lisse basse a la même section que les montants : 45×95 mm pour les cloisons et 45×145 mm pour les murs extérieurs porteurs.",
    },
    {
      question: "Faut-il une lisse basse en bois traité ?",
      answer: "Oui, si la lisse est en contact avec du béton ou de la maçonnerie (rez-de-chaussée). Aux étages, le bois non traité convient si le plancher est en bois.",
    },
    {
      question: "Comment fixer la lisse basse au plancher ?",
      answer: "Vissez ou clouez la lisse au plancher avec des vis de 70 mm ou des pointes annelées de 90 mm tous les 40 cm. Sur une dalle béton, fixez avec des chevilles à frapper ou des goujons d'ancrage.",
    },
  ],
};

export const topPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la longueur totale du mur en mètres.",
    "Sélectionnez la section (45×95 mm ou 45×145 mm).",
    "Cliquez sur Calculer pour obtenir les mètres linéaires pour la double lisse haute.",
  ],
  materialInfo:
    "La lisse haute (ou sablière) est la pièce horizontale posée sur le dessus des montants. En ossature bois selon le DTU 31.2, la lisse haute est généralement doublée (deux lisses superposées avec joints décalés d'au moins 1,20 m) pour assurer la continuité structurelle et le chaînage du mur. La section est identique à celle des montants. Le bois est du résineux C24, non traité pour les murs courants. Le chaînage par double lisse remplace le chaînage béton des constructions traditionnelles. Le coût est de 2 à 5 € le mètre linéaire par lisse, soit 4 à 10 € pour la double lisse.",
  nextSteps: [
    { label: "Calculateur de montants", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculateur de lisse basse", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Calculateur de linteaux", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Posez la première lisse haute en clouant dans chaque montant avec 2 pointes de 90 mm.",
    "Décalez les joints de la deuxième lisse d'au moins 1,20 m par rapport à la première.",
    "Clouez les deux lisses ensemble avec des pointes de 75 mm tous les 40 cm.",
    "Assurez le recouvrement aux angles et aux intersections de murs pour le chaînage.",
  ],
  commonMistakes: [
    "Ne pas décaler les joints entre les deux lisses — les joints alignés créent un point faible dans le chaînage.",
    "Oublier le recouvrement aux angles — le chaînage est rompu sans recouvrement.",
    "Utiliser une seule lisse haute sans justification — le DTU 31.2 impose la double lisse sauf si une note de calcul le justifie.",
  ],
  faqs: [
    {
      question: "Pourquoi une double lisse haute ?",
      answer: "La double lisse haute assure le chaînage continu du mur et la transmission des charges entre les panneaux. Les joints décalés garantissent qu'il n'y a jamais de discontinuité structurelle. C'est l'équivalent du chaînage béton en construction traditionnelle.",
    },
    {
      question: "Peut-on utiliser une seule lisse haute ?",
      answer: "Oui, à condition de justifier par une note de calcul et d'assurer le chaînage par d'autres moyens (connecteurs métalliques, feuillard). Certains systèmes constructifs utilisent une lisse unique avec des platines de liaison.",
    },
    {
      question: "Quel décalage minimum entre les joints ?",
      answer: "Le DTU 31.2 impose un décalage d'au moins 1,20 m entre les joints des deux lisses. En pratique, on vise un décalage d'un entraxe de montant minimum (40 ou 60 cm).",
    },
  ],
};

export const headerCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la largeur de l'ouverture en mètres.",
    "Sélectionnez le type d'ouverture (porte ou fenêtre).",
    "Cliquez sur Calculer pour obtenir la section du linteau recommandée.",
  ],
  materialInfo:
    "Les linteaux (ou traverses d'ouverture) sont les pièces horizontales au-dessus des baies de portes et fenêtres qui reportent les charges de part et d'autre de l'ouverture. En ossature bois, le linteau est constitué de deux pièces assemblées (doublées) ou d'un seul élément en BLC (bois lamellé collé). Les sections courantes sont 2×45×150 mm (ouvertures jusqu'à 1,20 m), 2×45×200 mm (jusqu'à 2,00 m) et 2×45×250 mm (jusqu'à 2,50 m). Pour les grandes baies (>2,50 m), on utilise du BLC ou un IPE acier avec habillage bois. Les montants de tableau (montants d'aplomb) et les montants de renfort (montants de charge) encadrent l'ouverture et reportent la charge du linteau sur la lisse basse. Le coût d'un linteau bois varie de 15 à 60 € selon la portée et la section.",
  nextSteps: [
    { label: "Calculateur de montants", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculateur de lisse haute", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Calculateur de voile travaillant", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "Assemblez le linteau doublé avec des vis de 70 mm en quinconce tous les 30 cm.",
    "Posez le linteau sur les montants de tableau avec des connecteurs métalliques (équerres Simpson).",
    "Vérifiez le niveau du linteau — un linteau hors niveau se verra sur les menuiseries.",
    "Pour les grandes portées, faites valider la section par un bureau d'études structure.",
  ],
  commonMistakes: [
    "Sous-dimensionner le linteau — consultez les abaques du DTU 31.2 ou faites un calcul de structure.",
    "Oublier les montants de renfort — le linteau doit reposer sur des montants capables de reprendre la charge.",
    "Ne pas prévoir de cales d'appui sous le linteau pour assurer un contact parfait.",
  ],
  faqs: [
    {
      question: "Quelle section de linteau pour une baie de 1,80 m ?",
      answer: "Pour une baie de 1,80 m dans un mur porteur en 45×145 mm, un linteau doublé 2×45×200 mm en C24 convient pour les charges résidentielles courantes. Pour une charge de toiture ou de plancher au-dessus, faites vérifier par un bureau d'études.",
    },
    {
      question: "Comment calculer la section d'un linteau ?",
      answer: "La section dépend de la portée, de la descente de charge (poids de la toiture, du plancher, du mur au-dessus) et de l'essence du bois. Les abaques du DTU 31.2 donnent des sections standard pour les cas courants. Pour les cas particuliers, un calcul de structure est nécessaire.",
    },
    {
      question: "Peut-on utiliser du BLC pour les linteaux ?",
      answer: "Oui, le BLC (bois lamellé collé) offre une résistance supérieure au bois massif pour les grandes portées. Un linteau BLC GL24h de 100×200 mm peut franchir des portées de 3,00 m et plus. Le BLC est aussi plus stable dimensionnellement que le bois massif.",
    },
  ],
};

export const exteriorSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface totale des murs extérieurs en mètres carrés.",
    "Déduisez la surface des ouvertures (portes et fenêtres).",
    "Cliquez sur Calculer pour obtenir le nombre de panneaux, chutes incluses.",
  ],
  materialInfo:
    "Le voile travaillant (ou contreventement) est constitué de panneaux structurels fixés sur les montants d'ossature pour assurer la rigidité du mur face aux efforts horizontaux (vent, séisme). Les panneaux utilisés en France sont l'OSB 3 (le plus courant, 9 ou 12 mm), le contreplaqué CTBX (plus résistant à l'humidité) et les panneaux de fibre de bois (Steico, Pavatex) qui assurent à la fois le contreventement et l'isolation. Le format standard est 2500×1250 mm. Le DTU 31.2 impose un clouage spécifique : pointes annelées de 50 mm (pour OSB 9 mm) ou 63 mm (pour OSB 12 mm) tous les 15 cm en rive et 30 cm en plein champ. L'OSB 3 coûte 8 à 15 € le panneau ; le fibre de bois 22 mm coûte 15 à 25 € le panneau.",
  nextSteps: [
    { label: "Calculateur de montants", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Calculateur de pare-pluie", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calculateur de bardage PVC", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
  ],
  installationTips: [
    "Posez les panneaux verticalement pour que les rives haute et basse reposent sur les lisses.",
    "Décalez les joints verticaux entre les rangées (pose en quinconce).",
    "Laissez un jeu de 3 mm entre les panneaux pour la dilatation.",
    "Respectez le clouage réglementaire : 15 cm en rive, 30 cm en champ.",
  ],
  commonMistakes: [
    "Utiliser un clouage insuffisant — le contreventement ne fonctionnera pas avec un clouage trop espacé.",
    "Oublier le jeu de dilatation — les panneaux gonflent avec l'humidité et peuvent gondoler.",
    "Ne pas prolonger les panneaux sur la lisse basse et la lisse haute — la transmission des efforts exige le recouvrement.",
    "Percer trop de trous pour les gaines sans renforcer — chaque percement réduit la capacité du voile.",
  ],
  faqs: [
    {
      question: "OSB ou fibre de bois pour le contreventement ?",
      answer: "L'OSB 3 est le choix le plus économique et le plus courant. Les panneaux en fibre de bois (Steico, Pavatex) combinent contreventement et isolation (R=0,5 à 1,3 selon l'épaisseur) et sont privilégiés dans les maisons passives et à haute performance énergétique. Le coût est 50 à 100 % plus élevé que l'OSB.",
    },
    {
      question: "Quelle épaisseur d'OSB pour le voile travaillant ?",
      answer: "9 mm est le minimum réglementaire pour le contreventement selon le DTU 31.2, avec un clouage renforcé. 12 mm offre une meilleure résistance et est recommandé en zone sismique ou ventée. Le choix dépend des efforts de contreventement calculés par le bureau d'études.",
    },
    {
      question: "Combien de panneaux pour une maison de 100 m² au sol ?",
      answer: "Pour une maison de 10×10 m (périmètre 40 m) avec des murs de 2,50 m de haut, la surface de mur est de 100 m². Déduisez 15 à 20 m² pour les ouvertures, soit 80 à 85 m² de voile. À 3,125 m² par panneau de 2500×1250, il faut 26 à 28 panneaux plus 10 % de chutes.",
    },
  ],
};

// ─── ROOFING ────────────────────────────────────────────────────────────────

export const trussCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la longueur du bâtiment en mètres.",
    "L'entraxe standard des fermettes est de 60 cm.",
    "Cliquez sur Calculer pour obtenir le nombre de fermettes.",
  ],
  materialInfo:
    "Les fermettes industrielles (ou fermes légères) sont des éléments de charpente préfabriqués en bois assemblés par des connecteurs métalliques emboutis (plaques à dents). Elles remplacent la charpente traditionnelle dans la majorité des maisons neuves en France. L'entraxe standard est de 60 cm. Les fermettes sont calculées et fabriquées sur mesure par des industriels (Mitek, MiTek Industries, SCBO, Charpente Concept) selon les charges de neige, de vent et la géométrie du toit, conformément à l'Eurocode 5 et au DTU 31.3. Le coût des fermettes est de 30 à 80 € par unité selon la portée et la complexité, hors pose. La livraison comprend généralement un plan de pose avec les contreventements et les antiflambage.",
  nextSteps: [
    { label: "Calculateur de chevrons", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Calculateur de voligeage", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Calculateur de bardeaux", href: "/calculators/roofing/shingle-calculator/" },
  ],
  installationTips: [
    "Suivez strictement le plan de pose du fabricant pour l'ordre de levage et les contreventements.",
    "Fixez les contreventements provisoires dès la première fermette levée — elles sont instables seules.",
    "Clouez les fermettes sur la lisse haute avec des équerres ou des sabots conformes au plan.",
    "Vérifiez l'aplomb et l'entraxe de chaque fermette avant de fixer la suivante.",
  ],
  commonMistakes: [
    "Modifier ou découper une fermette sans l'accord du bureau d'études — cela annule la garantie et peut être dangereux.",
    "Oublier les contreventements — les fermettes sont calculées en fonction de leur contreventement ; sans lui, elles flamberont.",
    "Stocker les fermettes debout sans étaiement — elles peuvent basculer et se déformer.",
    "Ignorer le plan de pose — chaque fermette a une position et un sens définis par le fabricant.",
  ],
  faqs: [
    {
      question: "Combien de fermettes pour un toit de 12 m de long ?",
      answer: "Avec un entraxe de 60 cm : (12 / 0,60) + 1 = 21 fermettes. Ajoutez les fermettes de pignon et les demi-fermettes éventuelles selon le plan.",
    },
    {
      question: "Fermettes ou charpente traditionnelle ?",
      answer: "Les fermettes sont moins chères (30 à 50 % d'économie), plus rapides à poser et couvrent des portées importantes sans mur porteur intermédiaire. La charpente traditionnelle permet d'aménager les combles et offre un aspect plus « noble ». Le choix dépend du projet : combles perdus = fermettes ; combles aménageables = charpente traditionnelle ou fermettes à entrait retroussé.",
    },
    {
      question: "Peut-on aménager des combles sous fermettes ?",
      answer: "Les fermettes standard (à fiches en W) ne permettent pas l'aménagement des combles. Pour des combles aménageables, on utilise des fermettes à entrait retroussé ou une charpente traditionnelle. La modification de fermettes existantes est possible mais coûteuse et nécessite une étude de structure.",
    },
  ],
};

export const rafterCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la longueur du toit (parallèle au faîtage) en mètres.",
    "Sélectionnez l'entraxe : 40 cm ou 60 cm.",
    "Cliquez sur Calculer pour obtenir le nombre de chevrons.",
  ],
  materialInfo:
    "Les chevrons sont les pièces de bois inclinées de la charpente traditionnelle qui supportent les liteaux et la couverture. L'entraxe courant est de 40 cm (zones chargées en neige ou couverture lourde) ou 60 cm (couverture légère). Les sections courantes sont 50×70 mm (petites portées), 50×100 mm, 63×75 mm et 75×100 mm selon la portée et les charges. Le DTU 31.1 définit les portées admissibles selon la section, l'essence et les charges de neige et de vent. Le bois est du résineux C24 ou C18. Le coût est de 3 à 8 € le mètre linéaire selon la section. En charpente traditionnelle, les chevrons reposent sur les pannes (faîtière, intermédiaires et sablière) et sont fixés par des sabots ou des embrèvements.",
  nextSteps: [
    { label: "Calculateur de fermettes", href: "/calculators/roofing/truss-calculator/" },
    { label: "Calculateur de faîtage", href: "/calculators/roofing/ridge-board-calculator/" },
    { label: "Calculateur de voligeage", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Tracez l'entraxe sur la panne faîtière et la sablière avant de monter les chevrons.",
    "Fixez chaque chevron avec un sabot métallique sur la panne ou par embrèvement cloué.",
    "Contreventez les chevrons en pied et en tête avec des liteaux provisoires.",
    "Vérifiez l'alignement du plan de toiture avec un cordeau tendu.",
  ],
  commonMistakes: [
    "Sous-dimensionner les chevrons — consultez les abaques de portée du DTU 31.1.",
    "Oublier de vérifier la flèche admissible — un chevron trop souple provoque des désordres sur la couverture.",
    "Ne pas contreventer pendant le montage — les chevrons non maintenus peuvent basculer.",
  ],
  faqs: [
    {
      question: "Quel entraxe pour les chevrons ?",
      answer: "40 cm pour les couvertures lourdes (tuiles terre cuite, ardoises) et les zones à forte charge de neige. 60 cm pour les couvertures légères (bac acier, bardeaux bitumés). Le DTU 31.1 donne les portées admissibles pour chaque configuration.",
    },
    {
      question: "Quelle section pour une portée de 3 m ?",
      answer: "Pour une portée de 3 m avec un entraxe de 40 cm et une couverture tuile (environ 60 kg/m²), des chevrons en 63×75 mm ou 50×100 mm C24 conviennent. Vérifiez avec les abaques de portée du DTU.",
    },
    {
      question: "Combien de chevrons pour un toit de 10 m de long ?",
      answer: "Sur 10 m de longueur, avec un entraxe de 40 cm : (10 / 0,40) + 1 = 26 chevrons par versant. Pour un toit à deux pentes, doublez ce nombre, soit 52 chevrons plus les chutes.",
    },
  ],
};

export const ridgeBoardCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la longueur du faîtage en mètres.",
    "Sélectionnez la section de la panne faîtière.",
    "Cliquez sur Calculer pour obtenir le nombre de pièces.",
  ],
  materialInfo:
    "La panne faîtière est la pièce de bois horizontale située au sommet de la toiture, sur laquelle s'appuient les chevrons. En charpente traditionnelle, c'est un élément porteur qui doit être dimensionné pour reprendre les descentes de charge de la couverture. Les sections courantes vont de 75×200 mm à 100×250 mm en bois massif C24, ou en BLC GL24h pour les grandes portées. La panne faîtière repose sur les poinçons ou les murs pignons. Pour les charpentes à fermettes industrielles, la panne faîtière est remplacée par la membrure supérieure des fermettes. Le coût est de 8 à 20 € le mètre linéaire selon la section et l'essence.",
  nextSteps: [
    { label: "Calculateur de chevrons", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Calculateur de fermettes", href: "/calculators/roofing/truss-calculator/" },
    { label: "Calculateur de voligeage", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Montez la panne faîtière avant les chevrons — c'est le premier élément de la charpente traditionnelle à mettre en place.",
    "Assurez un appui stable sur les poinçons ou les murs pignons avec des assemblages boulonnés.",
    "Aboutez les pièces sur un appui (poinçon) et jamais en portée libre.",
    "Vérifiez le niveau et l'alignement sur toute la longueur.",
  ],
  commonMistakes: [
    "Sous-dimensionner la panne faîtière — elle reprend la moitié de la charge de toiture.",
    "Abouter en portée libre — le joint doit être sur un appui pour assurer la continuité structurelle.",
    "Utiliser du bois non classé — exigez du C24 minimum pour les éléments de charpente porteurs.",
  ],
  faqs: [
    {
      question: "Quelle section pour la panne faîtière ?",
      answer: "La section dépend de la portée entre appuis et des charges. Pour une portée de 3 m avec couverture tuile, une section de 75×200 mm en C24 convient. Pour 4 m et plus, passez en 100×250 mm ou en BLC GL24h.",
    },
    {
      question: "Combien de pièces pour un faîtage de 12 m ?",
      answer: "Avec des pièces de 4,00 m, il faut 3 pièces avec les aboutages sur les poinçons ou les appuis intermédiaires.",
    },
  ],
};

export const roofSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface de toiture en mètres carrés (surface réelle, pas l'emprise au sol).",
    "Cliquez sur Calculer pour obtenir le nombre de panneaux, chutes incluses.",
  ],
  materialInfo:
    "Le voligeage (ou platelage) de toiture est le support de couverture posé sur les chevrons ou les fermettes. En construction à ossature bois, on utilise de l'OSB 3 en 12 ou 15 mm, ou du contreplaqué CTBX. Le format standard est 2500×1250 mm. La pose se fait perpendiculairement aux chevrons avec un décalage des joints (quinconce). Le clouage est identique au voile travaillant mural : pointes annelées tous les 15 cm en rive et 30 cm en champ. Un film pare-pluie (écran sous-toiture HPV) est posé sur le voligeage avant les liteaux et la couverture. Le coût de l'OSB 3 en 12 mm est de 8 à 14 € le panneau.",
  nextSteps: [
    { label: "Calculateur d'écran sous-toiture", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calculateur de bardeaux", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculateur de chevrons", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Posez les panneaux perpendiculairement aux chevrons, grand côté dans le sens de la pente.",
    "Décalez les joints d'un panneau sur l'autre (quinconce).",
    "Laissez un jeu de 3 mm entre les panneaux.",
    "Fixez avec des pointes annelées de 50 mm tous les 15 cm en rive et 30 cm en champ.",
  ],
  commonMistakes: [
    "Oublier le jeu de dilatation — les panneaux gondolent sans jeu.",
    "Marcher sur les panneaux non fixés — risque de chute grave.",
    "Utiliser un panneau non structurel — exigez de l'OSB 3 ou du contreplaqué CTBX structurel.",
  ],
  faqs: [
    {
      question: "Combien de panneaux pour un toit de 80 m² ?",
      answer: "Un panneau de 2500×1250 mm couvre 3,125 m². Pour 80 m², il faut 80 / 3,125 = 26 panneaux. Avec 10 à 15 % de chutes, prévoyez 29 à 30 panneaux.",
    },
    {
      question: "Quelle épaisseur d'OSB pour le voligeage ?",
      answer: "12 mm est le minimum pour un entraxe de 40 cm. Pour un entraxe de 60 cm, utilisez 15 mm. Le DTU 31.2 définit les épaisseurs selon l'entraxe et la charge de couverture.",
    },
  ],
};

export const shingleCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez la surface de toiture en mètres carrés.",
    "Cliquez sur Calculer pour obtenir le nombre de paquets de bardeaux.",
  ],
  materialInfo:
    "Les bardeaux bitumés (ou shingles) sont des éléments de couverture souples en feutre bitumé recouvert de granulés minéraux. Ils sont légers (environ 10 kg/m²), faciles à poser et adaptés aux toitures en pente de 15° à 85°. Les deux types principaux sont les bardeaux 3 bandes (les moins chers) et les bardeaux architecturaux (ou dimensionnels, plus épais et plus esthétiques). Un paquet couvre environ 3 m². La durée de vie est de 20 à 30 ans pour les bardeaux standard et 30 à 50 ans pour les architecturaux. Les marques courantes en France sont IKO, Tegola, Onduline et Bardoline. Le coût est de 8 à 20 € le m² posé selon la gamme. Les bardeaux bitumés sont conformes à la norme NF EN 544.",
  nextSteps: [
    { label: "Calculateur d'écran sous-toiture", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calculateur de rive d'égout", href: "/calculators/roofing/drip-edge-calculator/" },
    { label: "Calculateur de voligeage", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Posez un écran sous-toiture sur le voligeage avant les bardeaux.",
    "Commencez par une première rangée inversée (onglets vers le haut) au ras de l'égout.",
    "Décalez chaque rangée d'un demi-onglet pour éviter les joints filants.",
    "Clouez chaque bardeau avec 4 pointes galvanisées juste au-dessus de la ligne de collage.",
  ],
  commonMistakes: [
    "Ne pas poser d'écran sous-toiture — c'est obligatoire selon le DTU et les prescriptions du fabricant.",
    "Clouer au mauvais endroit — les pointes doivent traverser la zone de double épaisseur, juste au-dessus de la bande de colle.",
    "Poser par temps froid (< 5 °C) sans préchauffer les bardeaux — ils cassent au pliage.",
  ],
  faqs: [
    {
      question: "Combien de paquets pour un toit de 60 m² ?",
      answer: "Un paquet couvre environ 3 m². Pour 60 m², il faut 20 paquets. Ajoutez 10 à 15 % pour les chutes et les noues, soit 22 à 23 paquets.",
    },
    {
      question: "Quelle pente minimale pour les bardeaux bitumés ?",
      answer: "La pente minimale est de 15° (environ 27 %) pour les bardeaux standard et de 9,5° avec un écran sous-toiture continu autocollant. En dessous de 15°, il faut utiliser un autre type de couverture.",
    },
    {
      question: "Bardeaux 3 bandes ou architecturaux ?",
      answer: "Les bardeaux 3 bandes sont moins chers (8 à 12 €/m²) mais ont une durée de vie de 20 ans environ. Les bardeaux architecturaux coûtent 12 à 20 €/m² mais durent 30 à 50 ans, offrent un aspect plus travaillé et résistent mieux au vent. L'investissement dans les architecturaux est généralement rentable sur le long terme.",
    },
  ],
};

export const underlaymentCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez la surface de toiture en mètres carrés.",
    "Sélectionnez le type d'écran (bitumé ou synthétique HPV).",
    "Cliquez sur Calculer pour obtenir le nombre de rouleaux, recouvrement inclus.",
  ],
  materialInfo:
    "L'écran sous-toiture est une membrane posée sur le voligeage (ou directement sur les chevrons en pose écran rigide) pour protéger la charpente de l'eau, de la neige poudreuse et du vent. Il existe deux familles : les écrans bitumés (feutre asphalté, moins chers mais non respirants) et les écrans synthétiques HPV (Haute Perméabilité à la Vapeur, type Solitex Plus, Delta-Maxx, DuPont Tyvek Supro), qui laissent passer la vapeur d'eau tout en bloquant l'eau liquide. Le DTU 40.29 régit la pose des écrans sous-toiture. Les rouleaux font généralement 1,50 m de large et 50 m de long (75 m²). Le recouvrement horizontal est de 10 à 15 cm, et le recouvrement vertical est de 20 cm minimum. Le coût va de 1 à 4 € le m² selon le type.",
  nextSteps: [
    { label: "Calculateur de bardeaux", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculateur de rive d'égout", href: "/calculators/roofing/drip-edge-calculator/" },
    { label: "Calculateur de voligeage", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Déroulez l'écran horizontalement en partant de l'égout vers le faîtage.",
    "Recouvrez de 10 à 15 cm horizontalement et 20 cm verticalement.",
    "Agrafez tous les 15 à 20 cm sur les chevrons ou le voligeage.",
    "Pour les écrans HPV posés directement sur les chevrons, fixez avec des contre-liteaux.",
  ],
  commonMistakes: [
    "Utiliser un écran non HPV en pose directe sur les chevrons — un écran non respirant piège l'humidité et pourrit la charpente.",
    "Recouvrement insuffisant — respectez les minima du fabricant pour l'étanchéité.",
    "Laisser l'écran exposé trop longtemps aux UV — la plupart des écrans se dégradent après 3 à 6 mois d'exposition.",
  ],
  faqs: [
    {
      question: "Combien de rouleaux pour un toit de 100 m² ?",
      answer: "Un rouleau de 1,50 m × 50 m couvre 75 m² bruts. Avec 15 % de perte pour les recouvrements, un rouleau couvre environ 65 m² nets. Pour 100 m², il faut 2 rouleaux.",
    },
    {
      question: "Écran bitumé ou HPV ?",
      answer: "L'écran HPV (Haute Perméabilité à la Vapeur) est obligatoire pour les poses directement sur les chevrons (sans voligeage) et recommandé dans tous les cas pour permettre à la vapeur d'eau de traverser et éviter la condensation dans la charpente. L'écran bitumé convient uniquement sur voligeage ventilé.",
    },
    {
      question: "L'écran sous-toiture est-il obligatoire ?",
      answer: "Le DTU 40 rend l'écran sous-toiture obligatoire pour les couvertures en petits éléments (tuiles, ardoises) en zones exposées (altitude, bord de mer, forte exposition au vent). En pratique, il est fortement recommandé dans tous les cas pour protéger la charpente.",
    },
  ],
};

export const dripEdgeCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez les mètres linéaires de rive d'égout et de rive latérale.",
    "Cliquez sur Calculer pour obtenir le nombre de profils nécessaires.",
  ],
  materialInfo:
    "La rive d'égout (ou larmier) est un profil métallique en forme de L fixé sur le bord du voligeage à l'égout et en rive latérale. Il protège la rive du voligeage contre l'infiltration d'eau et guide l'écoulement vers la gouttière. Les profils sont en acier galvanisé ou en aluminium laqué, en longueurs standard de 2,00 m. Le coût est de 3 à 8 € par profil de 2 m. La pose se fait avant l'écran sous-toiture à l'égout et par-dessus l'écran en rive latérale. Le DTU 40 prescrit la protection des rives pour toutes les couvertures.",
  nextSteps: [
    { label: "Calculateur d'écran sous-toiture", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Calculateur de bardeaux", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculateur de voligeage", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Posez le larmier d'égout sur le voligeage, avant l'écran sous-toiture.",
    "Posez le larmier de rive latérale par-dessus l'écran sous-toiture.",
    "Recouvrez les joints de 5 à 10 cm.",
    "Fixez avec des pointes galvanisées tous les 30 cm.",
  ],
  commonMistakes: [
    "Inverser l'ordre de pose — le larmier d'égout va sous l'écran, le larmier de rive va dessus.",
    "Oublier le larmier — l'eau s'infiltre par capillarité sous le voligeage et pourrit la rive.",
    "Ne pas recouvrir les joints — chaque joint non recouvert est un point d'infiltration potentiel.",
  ],
  faqs: [
    {
      question: "Le larmier est-il obligatoire ?",
      answer: "Le DTU 40 recommande fortement la protection des rives. En pratique, le larmier est indispensable pour préserver le voligeage de la pourriture et guider l'eau vers la gouttière.",
    },
    {
      question: "Combien de profils pour un toit à deux pentes de 10×8 m ?",
      answer: "L'égout fait 2×10 m = 20 m. Les rives latérales font 2×2 × rampant (environ 4,5 m) = 18 m. Total : 38 m. À 2 m par profil, il faut 19 profils plus 10 %, soit 21 profils.",
    },
  ],
};

export const roofPitchCalculator: CalculatorSEOContent = {
  disclaimer:
    "Ce calculateur fournit des résultats indicatifs. La pente de toiture doit être conforme au DTU 40 et aux recommandations du fabricant de couverture.",
  howToUse: [
    "Saisissez la hauteur (montée) en mètres.",
    "Saisissez la portée horizontale (course) en mètres.",
    "Cliquez sur Calculer pour obtenir la pente en degrés, en pourcentage et le coefficient de surface.",
  ],
  materialInfo:
    "La pente de toiture détermine le type de couverture utilisable, la vitesse d'écoulement de l'eau et la charge de neige. En France, les pentes sont exprimées en degrés ou en pourcentage (100 % = 45°). Le DTU 40 définit les pentes minimales pour chaque type de couverture : tuiles mécaniques (25 à 35 % selon le modèle), tuiles plates (60 à 80 %), ardoises (40 à 100 %), bac acier (5 à 10 %), bardeaux bitumés (27 % minimum). La zone climatique (vent, neige, pluie) et l'altitude influencent les pentes minimales applicables. Le coefficient de surface (facteur de pente) permet de convertir la surface au sol en surface réelle de toiture pour estimer les matériaux de couverture.",
  nextSteps: [
    { label: "Calculateur de surface de toiture", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Calculateur d'inclinaison de toit", href: "/calculators/roofing/roof-slope-calculator/" },
    { label: "Calculateur de bardeaux", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculateur de chevrons", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Vérifiez la pente réelle en mesurant la hauteur et la portée horizontale sur la charpente existante.",
    "Pour les mesures depuis les combles, posez un niveau de 1 m sur un chevron et mesurez la hauteur au bout du niveau.",
    "Comparez la pente mesurée aux exigences du DTU 40 pour votre type de couverture et votre zone climatique.",
  ],
  commonMistakes: [
    "Confondre la pente en degrés et en pourcentage — 45° = 100 %, pas 45 %.",
    "Mesurer la pente sur le rampant au lieu de sur l'horizontale — la course doit être mesurée à l'horizontale.",
    "Ne pas vérifier la pente minimale avant de choisir le matériau de couverture.",
  ],
  faqs: [
    {
      question: "Comment convertir la pente en degrés en pourcentage ?",
      answer: "Pourcentage = tangente(angle) × 100. Par exemple, 30° = tan(30°) × 100 = 57,7 %. Inversement, angle = arctangente(pourcentage / 100). 100 % = arctan(1) = 45°.",
    },
    {
      question: "Quelle pente pour des tuiles mécaniques ?",
      answer: "Les tuiles mécaniques (type Imerys, Monier, Terreal) nécessitent une pente de 25 à 35 % minimum selon le modèle et la zone climatique. Consultez l'Avis Technique du fabricant et le DTU 40.21 pour la pente exacte applicable.",
    },
    {
      question: "Quelle est la pente standard d'un toit en France ?",
      answer: "La pente varie fortement selon les régions : 20 à 30 % dans le Sud (tuiles canal), 35 à 50 % dans le Centre et l'Ouest (tuiles mécaniques), 50 à 100 % dans le Nord, l'Est et la montagne (ardoises, tuiles plates). L'architecture locale et les règles d'urbanisme (PLU) définissent souvent les pentes autorisées.",
    },
    {
      question: "Quel est le coefficient de surface pour une pente de 30° ?",
      answer: "Le coefficient est 1 / cos(30°) = 1,155. Une emprise au sol de 50 m² donne une surface de toiture de 50 × 1,155 = 57,7 m². Ce coefficient sert à estimer les quantités de couverture, d'écran sous-toiture et de voligeage.",
    },
  ],
};

export const roofAreaCalculator: CalculatorSEOContent = {
  disclaimer:
    "Ce calculateur donne la surface de toiture simple (deux ou quatre pentes). Pour les toitures complexes (noues, lucarnes, croupe), consultez un charpentier.",
  howToUse: [
    "Saisissez les dimensions au sol du bâtiment en mètres.",
    "Saisissez la pente en degrés ou en pourcentage.",
    "Cliquez sur Calculer pour obtenir la surface réelle de toiture en m².",
  ],
  materialInfo:
    "La surface réelle de toiture est toujours supérieure à l'emprise au sol en raison de la pente. Le coefficient de pente (facteur multiplicateur) convertit la surface projetée en surface réelle. Par exemple, un toit à 30° a un coefficient de 1,155 : une emprise de 100 m² donne 115,5 m² de couverture. Ce calcul est essentiel pour estimer les quantités de tuiles, d'ardoises, de bardeaux, d'écran sous-toiture et de voligeage. Pour les toitures complexes avec noues, croupes et lucarnes, chaque pan doit être calculé séparément et les surfaces additionnées.",
  nextSteps: [
    { label: "Calculateur de pente de toit", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Calculateur de bardeaux", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Calculateur d'écran sous-toiture", href: "/calculators/roofing/underlayment-calculator/" },
  ],
  installationTips: [
    "Mesurez toujours l'emprise au sol et appliquez le coefficient de pente — ne mesurez pas en rampant depuis l'extérieur.",
    "Pour les toitures complexes, décomposez en pans simples (rectangles et triangles).",
    "Ajoutez 10 à 15 % à la surface calculée pour les chutes, recouvrements et rives.",
  ],
  commonMistakes: [
    "Utiliser l'emprise au sol directement pour commander la couverture — la surface réelle est toujours plus grande.",
    "Oublier les débords de toit — mesurez jusqu'au bord de l'égout, pas jusqu'au nu du mur.",
    "Ne pas décomposer les toitures à multiples pans — chaque pan doit être calculé séparément.",
  ],
  faqs: [
    {
      question: "Comment calculer la surface d'un toit à deux pentes ?",
      answer: "Surface = longueur × (demi-portée / cos(pente)) × 2. Pour un bâtiment de 10×8 m avec une pente de 30° : longueur du rampant = 4 / cos(30°) = 4,62 m. Surface = 10 × 4,62 × 2 = 92,4 m².",
    },
    {
      question: "Quel coefficient de pente pour 45° ?",
      answer: "Le coefficient est 1 / cos(45°) = 1,414. Un toit à 45° a 41,4 % de surface en plus par rapport à l'emprise au sol.",
    },
  ],
};

export const roofSlopeCalculator: CalculatorSEOContent = {
  disclaimer:
    "Ce calculateur fournit des résultats indicatifs. Vérifiez la conformité de la pente avec le DTU 40 applicable à votre type de couverture.",
  howToUse: [
    "Mesurez la hauteur (montée) et la course horizontale du toit.",
    "Cliquez sur Calculer pour obtenir le ratio, l'angle et le matériau recommandé.",
  ],
  materialInfo:
    "L'inclinaison (ou pente) d'un toit détermine les matériaux de couverture autorisés, les performances d'étanchéité et l'esthétique. En France, la pente est réglementée par le DTU 40 et les Avis Techniques des fabricants. Les tuiles canal exigent 25 à 35 %, les tuiles mécaniques 30 à 45 %, les tuiles plates 60 à 80 %, les ardoises 40 à 100 %, le bac acier 5 à 10 %, et les bardeaux bitumés 27 % minimum. Les règles d'urbanisme locales (PLU) peuvent aussi imposer des pentes spécifiques selon la zone.",
  nextSteps: [
    { label: "Calculateur de pente de toit", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Calculateur de surface de toiture", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Calculateur de bardeaux", href: "/calculators/roofing/shingle-calculator/" },
  ],
  installationTips: [
    "Mesurez depuis l'intérieur des combles pour une mesure précise de la pente existante.",
    "Utilisez un niveau numérique posé sur un chevron pour lire directement l'angle.",
    "Vérifiez la pente en plusieurs points — elle peut varier sur un même versant.",
  ],
  commonMistakes: [
    "Confondre degrés et pourcentage — les deux unités ne sont pas interchangeables.",
    "Choisir un matériau de couverture sans vérifier la pente minimale requise.",
    "Mesurer la pente sur une couverture ondulée sans corriger — mesurez sur la charpente.",
  ],
  faqs: [
    {
      question: "Quelle est la pente minimale pour un toit en tuiles ?",
      answer: "Cela dépend du type de tuile. Les tuiles mécaniques à emboîtement : 30 à 45 % selon le modèle. Les tuiles canal : 25 à 35 %. Les tuiles plates : 60 à 80 %. Consultez l'Avis Technique de la tuile choisie et le DTU 40.21.",
    },
    {
      question: "Quelle pente pour du bac acier ?",
      answer: "Le bac acier (tôle nervurée) peut être posé à partir de 5 % de pente (3°). C'est le matériau qui admet les plus faibles pentes en toiture inclinée. Les recouvrements longitudinaux doivent être augmentés en dessous de 10 %. Consultez le DTU 40.35.",
    },
  ],
};

// ─── EXTERIOR SHELL ─────────────────────────────────────────────────────────

export const housewrapCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface totale des murs extérieurs en mètres carrés.",
    "Cliquez sur Calculer pour obtenir le nombre de rouleaux, recouvrement inclus.",
  ],
  materialInfo:
    "Le pare-pluie est une membrane respirante posée sur le voile travaillant pour protéger l'ossature de l'eau de pluie tout en laissant la vapeur d'eau s'échapper vers l'extérieur. C'est un élément essentiel de l'étanchéité à l'air et à l'eau de l'enveloppe. Les produits courants en France sont le DuPont Tyvek, le Delta-Fassade, le Solitex Fronta et le Pro Clima. Les rouleaux font généralement 1,50 m de large et 50 m de long (75 m²). Le recouvrement est de 10 à 15 cm horizontalement et 20 cm verticalement. Le DTU 31.2 impose un pare-pluie conforme à la norme NF EN 13859-2 derrière le bardage ventilé. Le coût est de 1,50 à 4 € le m².",
  nextSteps: [
    { label: "Calculateur de bardage PVC", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Calculateur de bardage fibrociment", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Calculateur de bavette de fenêtre", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Déroulez le pare-pluie horizontalement en partant du bas vers le haut.",
    "Recouvrez de 10 à 15 cm horizontalement et 20 cm verticalement.",
    "Agrafez tous les 15 à 20 cm sur les montants d'ossature.",
    "Posez des bandes de renfort autocollantes aux angles et autour des ouvertures.",
  ],
  commonMistakes: [
    "Poser le pare-pluie côté lisse vers l'extérieur — vérifiez le sens de pose indiqué par le fabricant.",
    "Oublier les bandes de renfort aux angles et aux ouvertures — ce sont les points de faiblesse.",
    "Laisser le pare-pluie exposé plus de 3 mois sans bardage — les UV le dégradent.",
  ],
  faqs: [
    {
      question: "Combien de rouleaux pour une maison de 100 m² au sol ?",
      answer: "Pour une maison de 10×10 m (périmètre 40 m) et des murs de 2,50 m, la surface est de 100 m². Déduisez 15 à 20 m² d'ouvertures. Avec 20 % de perte pour les recouvrements, il faut environ 100 m² / 65 m² nets par rouleau = 2 rouleaux.",
    },
    {
      question: "Pare-pluie ou frein-vapeur ?",
      answer: "Ce sont deux produits différents : le pare-pluie se pose à l'extérieur du voile travaillant pour bloquer l'eau et laisser passer la vapeur. Le frein-vapeur se pose à l'intérieur (côté chaud) pour limiter la migration de vapeur dans l'isolant. Les deux sont nécessaires dans une paroi ossature bois performante.",
    },
  ],
};

export const vinylSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface des murs extérieurs en mètres carrés.",
    "Déduisez les ouvertures (portes et fenêtres).",
    "Cliquez sur Calculer pour obtenir le nombre de lames, chutes incluses.",
  ],
  materialInfo:
    "Le bardage PVC (ou bardage vinyle) est un revêtement extérieur en polychlorure de vinyle, léger, imputrescible et sans entretien. Les lames mesurent généralement 385 cm de long et 23 cm de largeur utile. Les marques courantes en France sont Freefoam, Marley, Durasid et Fortex. Le bardage PVC se pose sur des liteaux (ou tasseaux) de ventilation fixés sur le pare-pluie, créant une lame d'air ventilée de 20 à 40 mm. Le coût est de 15 à 35 € le m² posé. Le bardage PVC est conforme à la norme NF EN 14411 et fait l'objet d'un Avis Technique du CSTB pour les applications en France.",
  nextSteps: [
    { label: "Calculateur de pare-pluie", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calculateur de bardage fibrociment", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Calculateur de bavette de fenêtre", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Posez les tasseaux de ventilation (20 mm minimum) sur le pare-pluie avant le bardage.",
    "Laissez un jeu de dilatation de 5 à 8 mm à chaque extrémité de lame — le PVC se dilate fortement.",
    "Ne serrez pas les vis à fond — laissez les lames libres de coulisser.",
    "Commencez par la lame de départ en bas et progressez vers le haut.",
  ],
  commonMistakes: [
    "Visser les lames à fond — le PVC se dilate et les lames ondulent si elles ne peuvent pas coulisser.",
    "Oublier la lame d'air ventilée — sans ventilation, l'humidité reste piégée derrière le bardage.",
    "Couper le PVC par temps froid avec un disque agressif — utilisez une lame à dents fines ou un cutter.",
  ],
  faqs: [
    {
      question: "Combien de lames pour un mur de 20 m² ?",
      answer: "Avec des lames de 385 cm × 23 cm (0,886 m² par lame), il faut 20 / 0,886 = 23 lames. Ajoutez 10 % pour les chutes, soit 25 lames.",
    },
    {
      question: "Le bardage PVC est-il autorisé partout en France ?",
      answer: "Non. Les règles d'urbanisme locales (PLU) peuvent interdire ou limiter le bardage PVC dans certaines zones (secteurs sauvegardés, zones ABF, centres historiques). Renseignez-vous en mairie avant de choisir ce matériau.",
    },
    {
      question: "Quelle durée de vie pour un bardage PVC ?",
      answer: "Un bardage PVC de qualité dure 30 à 50 ans sans entretien (ni peinture, ni lasure). Il ne pourrit pas, ne rouille pas et résiste aux insectes. La couleur peut s'atténuer légèrement avec le temps mais les gammes actuelles offrent une bonne tenue aux UV.",
    },
  ],
};

export const hardieSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface des murs extérieurs en mètres carrés.",
    "Déduisez les ouvertures.",
    "Sélectionnez le pureau (16 cm ou 21 cm).",
    "Cliquez sur Calculer pour obtenir le nombre de lames, chutes incluses.",
  ],
  materialInfo:
    "Le bardage fibrociment est un revêtement extérieur en ciment renforcé de fibres de cellulose, offrant l'apparence du bois sans les inconvénients d'entretien. Les lames mesurent généralement 360 cm de long et 19 à 24 cm de largeur pour un pureau (partie visible) de 16 à 21 cm. Les marques leaders en France sont Eternit (gamme Cedral), James Hardie et Equitone. Le fibrociment est classé A1 (incombustible), résistant aux insectes et imputrescible. Il se pose sur une ossature de tasseaux ventilés avec pare-pluie. Le coût est de 30 à 60 € le m² posé. Le bardage fibrociment est conforme à la norme NF EN 12467 et bénéficie d'Avis Techniques du CSTB.",
  nextSteps: [
    { label: "Calculateur de pare-pluie", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calculateur de bardage PVC", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Calculateur de bavette de fenêtre", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Posez les tasseaux de ventilation (20 mm minimum) sur le pare-pluie.",
    "Pré-percez les lames de fibrociment avant le vissage — le matériau est fragile.",
    "Utilisez des vis inox A2 spéciales fibrociment pour éviter la corrosion.",
    "Respectez le pureau recommandé par le fabricant pour l'étanchéité du recouvrement.",
  ],
  commonMistakes: [
    "Visser sans pré-perçage — le fibrociment se fissure si on visse directement.",
    "Utiliser des vis acier zingué — seules les vis inox sont compatibles avec le fibrociment.",
    "Couper sans protection — la poussière de fibrociment est nocive ; portez un masque FFP3.",
  ],
  faqs: [
    {
      question: "Combien de lames pour 30 m² de mur ?",
      answer: "Avec des lames de 360 cm de long et un pureau de 16 cm (surface utile : 0,576 m² par lame), il faut 30 / 0,576 = 53 lames. Avec 10 % de chutes, prévoyez 58 lames.",
    },
    {
      question: "Eternit Cedral ou James Hardie ?",
      answer: "Les deux sont d'excellents produits. Cedral d'Eternit domine le marché français avec un large réseau de distribution et des Avis Techniques bien établis. James Hardie offre des garanties de 15 ans sur la peinture et un aspect bois très réaliste. Comparez les gammes, les finitions et la disponibilité locale.",
    },
    {
      question: "Faut-il peindre le fibrociment ?",
      answer: "Les lames de bardage fibrociment sont vendues pré-peintes en usine avec une garantie de 10 à 15 ans sur la couleur. Une repeinture sera nécessaire après 15 à 20 ans pour rafraîchir l'apparence, mais le matériau ne pourrit pas entre-temps.",
    },
  ],
};

export const windowFlashingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez le nombre de fenêtres et de portes.",
    "Sélectionnez la largeur de la bande (100, 150 ou 225 mm).",
    "Cliquez sur Calculer pour obtenir les mètres linéaires de membrane nécessaires.",
  ],
  materialInfo:
    "Les bandes d'étanchéité (ou membranes auto-adhésives) pour les fenêtres et les portes protègent les jonctions entre les menuiseries et le voile travaillant contre les infiltrations d'eau. Elles se posent en « bavette » autour de chaque ouverture avant le pare-pluie. Les produits courants en France sont le DuPont FlexWrap, le Tyvek Flashing, le Siga Fentrim et le Pro Clima Tescon Vana. Les largeurs courantes sont 100 mm (pour les tableaux latéraux), 150 mm (pour le seuil) et 225 mm (pour le linteau avec recouvrement). Le coût est de 2 à 5 € le mètre linéaire selon la marque et la largeur. Une pose soignée des bandes d'étanchéité est essentielle pour la performance de l'enveloppe — c'est le point faible le plus fréquent en ossature bois.",
  nextSteps: [
    { label: "Calculateur de pare-pluie", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Calculateur de bardage PVC", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Calculateur de bardage fibrociment", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
  ],
  installationTips: [
    "Posez la bande du seuil en premier, puis les bandes latérales par-dessus, puis la bande du linteau par-dessus le tout.",
    "La bande du seuil doit déborder de 5 cm de chaque côté de l'ouverture.",
    "Lissez avec un rouleau de marouflage pour chasser les bulles d'air — l'adhérence dépend du contact intégral.",
    "Posez les bandes par temps sec et à plus de 10 °C pour une bonne adhérence.",
  ],
  commonMistakes: [
    "Inverser l'ordre de pose — les bandes doivent se recouvrir en « escalier » du bas vers le haut pour diriger l'eau vers l'extérieur.",
    "Ne pas dépasser les côtés de l'ouverture — les bandes doivent déborder de 5 cm minimum.",
    "Poser sur un support poussiéreux ou humide — l'adhérence sera insuffisante.",
  ],
  faqs: [
    {
      question: "Combien de mètres pour une fenêtre de 1,20×1,20 m ?",
      answer: "Le périmètre de l'ouverture est de 4,80 m. Avec les débords de 5 cm de chaque côté, comptez environ 5,60 m par fenêtre. Pour 10 fenêtres, prévoyez 56 m plus 10 % de marge.",
    },
    {
      question: "Les bandes d'étanchéité sont-elles obligatoires ?",
      answer: "Le DTU 31.2 impose la mise en œuvre d'un dispositif d'étanchéité à l'eau autour de chaque menuiserie extérieure. Les bandes auto-adhésives sont la solution la plus courante et la plus fiable.",
    },
  ],
};

// ─── INSULATION & DRYWALL ───────────────────────────────────────────────────

export const cavityInsulationCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface des murs à isoler en mètres carrés.",
    "Sélectionnez l'épaisseur d'isolant (selon la section de l'ossature).",
    "Cliquez sur Calculer pour obtenir le nombre de rouleaux ou de panneaux.",
  ],
  materialInfo:
    "L'isolation en cavité (ou entre montants) est la technique standard pour les murs à ossature bois. L'isolant est placé entre les montants et maintenu par friction ou par un frein-vapeur. Les isolants courants en France sont la laine de verre (Isover, Knauf), la laine de roche (Rockwool), la laine de bois (Steico, Pavatex), la ouate de cellulose insufflée et le chanvre. Pour les montants de 45×145 mm, l'épaisseur d'isolant est de 145 mm, offrant un R de 3,60 à 4,35 selon le matériau (λ de 0,032 à 0,040). Pour les montants de 45×200 mm, l'épaisseur est de 200 mm (R de 5,00 à 6,25). La RE 2020 impose un R minimal de 3,70 pour les murs en zone H1. Le coût est de 5 à 20 € le m² selon le matériau et l'épaisseur. Les marques leaders sont Isover (Saint-Gobain), Knauf Insulation, Rockwool, Steico et Isonat.",
  nextSteps: [
    { label: "Calculateur de plaques de plâtre", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calculateur de vis à placo", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calculateur de montants", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Découpez l'isolant 1 cm plus large que l'espace entre montants pour un calage par friction.",
    "Posez le frein-vapeur (Sd ≥ 18 m) côté intérieur (côté chaud) avec des bandes de recouvrement adhésives.",
    "Ne comprimez pas l'isolant — la compression réduit la résistance thermique.",
    "Passez les gaines électriques et les tuyaux avant de poser l'isolant pour éviter de le déchirer.",
  ],
  commonMistakes: [
    "Oublier le frein-vapeur — sans frein-vapeur, la vapeur d'eau condense dans l'isolant et provoque des moisissures.",
    "Comprimer l'isolant pour le faire entrer de force — la performance thermique est réduite de 20 à 40 %.",
    "Laisser des ponts thermiques aux angles, autour des prises et des gaines — colmatez avec de la mousse ou de l'isolant découpé.",
    "Utiliser un isolant inadapté à l'ossature bois — les isolants à base de polystyrène ne sont pas recommandés entre montants.",
  ],
  faqs: [
    {
      question: "Quel isolant entre montants d'ossature bois ?",
      answer: "La laine de verre (Isover Isoconfort) et la laine de roche (Rockwool Flexirock) sont les plus courantes et les plus économiques (5 à 10 €/m²). La laine de bois (Steico Flex) et le chanvre (Isonat) offrent un meilleur confort d'été (déphasage thermique) pour 10 à 20 €/m².",
    },
    {
      question: "Quel R pour les murs RE 2020 ?",
      answer: "La RE 2020 impose un R total de mur de 3,70 minimum en zone H1 (Nord de la France). En pratique, pour atteindre les performances Bbio requises, un R de 4,0 à 5,0 est souvent nécessaire. Avec un doublage intérieur ou extérieur en plus de l'isolation entre montants, on peut atteindre R=6 à R=8.",
    },
    {
      question: "Combien de rouleaux pour 60 m² de mur ?",
      answer: "Un rouleau de laine de verre de 145 mm (Isover Isoconfort 35) fait 1,20 m × 5,40 m = 6,48 m². Pour 60 m², il faut 60 / 6,48 = 10 rouleaux. Ajoutez 10 % pour les chutes.",
    },
  ],
};

export const drywallCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface totale des murs et/ou plafonds en mètres carrés.",
    "Sélectionnez le type de plaque (BA13, BA15, BA18).",
    "Cliquez sur Calculer pour obtenir le nombre de plaques nécessaires.",
  ],
  materialInfo:
    "Les plaques de plâtre (ou Placo, du nom de la marque leader Placoplatre, Saint-Gobain) sont le revêtement intérieur standard en France. Les types courants sont le BA13 (12,5 mm d'épaisseur, standard), le BA15 (15 mm, acoustique renforcé) et le BA18 (18 mm, haute résistance mécanique). Le format standard est 2500×1200 mm (3 m²). Il existe aussi des plaques hydrofuges (type Placomarine) pour les pièces humides et des plaques coupe-feu (Placoflam). Les plaques se fixent sur l'ossature métallique (rails et montants) ou directement sur l'ossature bois avec des vis autoforeuses. Le coût est de 3 à 8 € la plaque standard BA13 et 6 à 15 € pour les plaques spéciales. La pose conforme au DTU 25.41 impose un vissage tous les 30 cm maximum.",
  nextSteps: [
    { label: "Calculateur de vis à placo", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calculateur d'enduit de jointement", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Calculateur d'isolant en cavité", href: "/calculators/insulation-drywall/cavity-insulation-calculator/" },
  ],
  installationTips: [
    "Posez les plaques perpendiculairement à l'ossature pour maximiser la rigidité.",
    "Décalez les joints horizontaux d'une plaque sur l'autre (quinconce).",
    "Laissez un jeu de 1 cm au sol (coupure de capillarité) à protéger avec un joint souple.",
    "Vissez tous les 30 cm avec des vis à placo de 25 mm (BA13 sur montants bois) ou 35 mm (BA13 sur ossature métallique).",
  ],
  commonMistakes: [
    "Visser trop profond — la tête de vis doit affleurer sans traverser le carton. Un enfoncement excessif réduit la tenue.",
    "Aligner tous les joints — les joints filants sur plusieurs plaques sont difficiles à masquer et créent des fissures.",
    "Oublier les plaques hydrofuges en pièces humides — le BA13 standard se dégrade rapidement dans les salles de bain.",
    "Ne pas laisser de jeu au sol — sans coupure de capillarité, la plaque absorbe l'humidité du sol.",
  ],
  faqs: [
    {
      question: "Combien de plaques pour une pièce de 12 m² ?",
      answer: "Pour une pièce de 3×4 m avec 2,50 m sous plafond : périmètre = 14 m × 2,50 m = 35 m² de murs. Déduisez 2 m² de porte = 33 m². Plus 12 m² de plafond = 45 m² total. À 3 m² par plaque, il faut 15 plaques plus 10 % = 17 plaques.",
    },
    {
      question: "BA13 ou BA15 ?",
      answer: "Le BA13 est le standard pour la plupart des applications. Le BA15 offre de meilleures performances acoustiques et mécaniques (résistance aux chocs). Il est recommandé pour les chambres, les murs mitoyens et les zones à forte sollicitation.",
    },
    {
      question: "Quelles plaques pour une salle de bain ?",
      answer: "Utilisez des plaques hydrofuges type Placomarine (H1 selon NF EN 520) dans les pièces humides. En zone de projection directe (douche, baignoire), ajoutez un système d'étanchéité sous carrelage (type Weber Superflex D2).",
    },
  ],
};

export const drywallScrewCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez le nombre de plaques de plâtre.",
    "Cliquez sur Calculer pour obtenir le nombre de vis et le nombre de boîtes.",
  ],
  materialInfo:
    "Les vis à placo (vis autoforeuses à tête trompette) sont les fixations standard pour les plaques de plâtre. Les longueurs courantes sont 25 mm (BA13 sur montants bois), 35 mm (BA13 sur ossature métallique ou double plaque) et 45 mm (BA18 ou double plaque sur métal). Les vis sont en acier phosphaté noir (résistant à la corrosion) avec un pas fin pour l'acier ou un pas gros pour le bois. Le DTU 25.41 impose un espacement maximal de 30 cm entre les vis. Comptez environ 25 à 30 vis par plaque de 2500×1200 mm. Les boîtes de 500 ou 1 000 vis coûtent 5 à 15 €. Les marques courantes sont Placo, Rigips, Knauf et Würth.",
  nextSteps: [
    { label: "Calculateur de plaques de plâtre", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calculateur d'enduit de jointement", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Calculateur d'isolant en cavité", href: "/calculators/insulation-drywall/cavity-insulation-calculator/" },
  ],
  installationTips: [
    "Utilisez une visseuse à placo avec butée de profondeur pour un enfoncement régulier.",
    "Vissez à 10 mm des bords de plaque pour éviter l'éclatement du carton.",
    "Commencez par le centre de la plaque et progressez vers les bords.",
    "Vis à pas fin (filetage serré) pour les ossatures métalliques, pas gros pour le bois.",
  ],
  commonMistakes: [
    "Visser trop près du bord — la plaque éclate. Respectez 10 mm minimum.",
    "Enfoncer trop la vis — la tête doit affleurer le carton sans le traverser.",
    "Utiliser des vis trop courtes — la vis doit pénétrer d'au moins 10 mm dans l'ossature.",
    "Mélanger les pas de vis — pas fin pour le métal, pas gros pour le bois.",
  ],
  faqs: [
    {
      question: "Combien de vis par plaque de plâtre ?",
      answer: "Comptez 25 à 30 vis par plaque de 2500×1200 mm avec un espacement de 30 cm. Pour une plaque en plafond avec un entraxe de 40 cm, comptez environ 32 à 35 vis.",
    },
    {
      question: "Quelle longueur de vis pour du BA13 ?",
      answer: "25 mm pour la fixation sur montants bois. 35 mm pour la fixation sur ossature métallique. Pour une double plaque (2×BA13), utilisez des vis de 45 mm pour la seconde plaque.",
    },
    {
      question: "Combien de boîtes de vis pour 20 plaques ?",
      answer: "20 plaques × 28 vis en moyenne = 560 vis. Prenez 2 boîtes de 500 vis ou une boîte de 1 000.",
    },
  ],
};

export const jointCompoundCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez le nombre de plaques de plâtre ou la surface en m².",
    "Cliquez sur Calculer pour obtenir la quantité d'enduit nécessaire en kg et le nombre de seaux.",
  ],
  materialInfo:
    "L'enduit de jointement est utilisé pour masquer les joints entre les plaques de plâtre et les têtes de vis. Le processus comprend trois passes : la première passe de remplissage (avec bande à joint noyée dans l'enduit), la deuxième passe de dégrossissage et la troisième passe de finition lissée. Les produits courants en France sont le Placo Joint (poudre à gâcher), le MAP (Mortier Adhésif Placo) pour le collage, et les enduits prêts à l'emploi (type Toupret ou Bostik). La bande à joint peut être en papier, en fibre de verre autocollante ou en fibre de verre à enduire. Comptez environ 0,3 à 0,5 kg d'enduit par mètre linéaire de joint (3 passes). Les seaux de 25 kg coûtent 8 à 15 €.",
  nextSteps: [
    { label: "Calculateur de plaques de plâtre", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Calculateur de vis à placo", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Calculateur de primaire d'accrochage", href: "/calculators/finishing/primer-calculator/" },
  ],
  installationTips: [
    "Appliquez la première passe d'enduit et posez la bande à joint papier en lissant pour chasser les bulles d'air.",
    "Laissez sécher complètement (12 à 24 heures) entre chaque passe.",
    "Élargissez chaque passe successive pour un fondu invisible — la troisième passe doit faire 25 à 30 cm de large.",
    "Poncez légèrement entre les passes avec du papier de verre grain 120 à 150.",
  ],
  commonMistakes: [
    "Appliquer des couches trop épaisses — plusieurs couches fines sèchent mieux et fissurent moins qu'une seule couche épaisse.",
    "Ne pas attendre le séchage complet entre les passes — l'humidité piégée provoque des fissures et des cloques.",
    "Poncer trop agressivement — un ponçage excessif entame le carton de la plaque.",
    "Oublier d'enduire les têtes de vis — chaque vis doit recevoir 2 à 3 passes d'enduit pour être invisible.",
  ],
  faqs: [
    {
      question: "Combien d'enduit pour 20 plaques ?",
      answer: "20 plaques de 2500×1200 mm génèrent environ 50 à 60 mètres linéaires de joint. À 0,4 kg/m linéaire (3 passes), il faut 20 à 24 kg d'enduit. Un seau de 25 kg suffit avec un petit supplément pour les têtes de vis et les reprises.",
    },
    {
      question: "Enduit en poudre ou prêt à l'emploi ?",
      answer: "L'enduit en poudre (type Placo Joint ou MAP) est moins cher et permet de contrôler la consistance. L'enduit prêt à l'emploi est plus pratique mais plus cher et offre un temps de travail plus long. Pour un chantier important, l'enduit en poudre est plus économique.",
    },
    {
      question: "Bande papier ou fibre de verre ?",
      answer: "La bande papier (type Straitflex ou bande standard Placo) offre les meilleurs résultats en termes de finition. La bande en fibre de verre autocollante est plus facile à poser pour les débutants mais crée une légère sur-épaisseur. Pour un travail professionnel, la bande papier est préférée.",
    },
  ],
};

// ─── HARDWARE ───────────────────────────────────────────────────────────────

export const framingNailCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez le nombre de montants ou de pièces à assembler.",
    "Cliquez sur Calculer pour obtenir les kilogrammes de pointes nécessaires.",
  ],
  materialInfo:
    "Les pointes de charpente (clous) sont les fixations traditionnelles de l'ossature bois. Les types courants sont les pointes lisses (les moins chères), les pointes annelées (torsadées, meilleure résistance à l'arrachement) et les pointes crantées. Les diamètres standard sont 3,1 mm (pointes de 75 mm), 3,4 mm (90 mm) et 4,0 mm (100 mm). Le DTU 31.2 impose des pointes annelées galvanisées pour les assemblages structurels. Le clouage pneumatique est le mode de fixation le plus rapide sur chantier, avec des clous en bande ou en bobine. Comptez 2 à 4 kg de pointes par m² d'ossature murale. Le coût est de 3 à 8 € le kg selon le type et le diamètre.",
  nextSteps: [
    { label: "Calculateur de sabots de solive", href: "/calculators/hardware/joist-hanger-calculator/" },
    { label: "Calculateur d'équerres anti-tempête", href: "/calculators/hardware/hurricane-tie-calculator/" },
    { label: "Calculateur de montants", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Utilisez des pointes annelées galvanisées à chaud pour tous les assemblages structurels.",
    "Pour le clouage de la lisse basse : 2 pointes de 90 mm par montant, en biais.",
    "Pour le clouage du voile travaillant : pointes annelées de 50 mm (OSB 9 mm) tous les 15 cm en rive.",
    "Réglez la pression du cloueur pneumatique pour que la tête affleure sans enfoncement excessif.",
  ],
  commonMistakes: [
    "Utiliser des pointes lisses pour les assemblages structurels — les pointes annelées résistent 3 à 5 fois mieux à l'arrachement.",
    "Utiliser des pointes galvanisées par électrolyse au lieu de galvanisées à chaud — la protection est insuffisante en extérieur.",
    "Clouer trop près du bord du bois — respectez 15 mm minimum pour éviter le fendage.",
  ],
  faqs: [
    {
      question: "Pointes lisses ou annelées ?",
      answer: "Les pointes annelées (torsadées) offrent une résistance à l'arrachement 3 à 5 fois supérieure aux pointes lisses. Le DTU 31.2 impose les pointes annelées pour les assemblages structurels en ossature bois. Les pointes lisses sont réservées aux coffrages et aux fixations temporaires.",
    },
    {
      question: "Combien de pointes par montant ?",
      answer: "Pour fixer un montant à la lisse basse et à la lisse haute : 2 pointes de 90 mm en biais (clouage oblique) à chaque extrémité, soit 4 pointes par montant. Avec un cloueur pneumatique, on utilise souvent 3 pointes en bout (through nailing).",
    },
    {
      question: "Quel diamètre de pointe pour l'ossature bois ?",
      answer: "3,1 mm pour les pointes de 75 mm (fixation OSB, liteaux). 3,4 mm pour les pointes de 90 mm (assemblage montants/lisses). 4,0 mm pour les pointes de 100 mm (charpente, assemblages lourds).",
    },
  ],
};

export const joistHangerCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez le nombre de solives à raccorder.",
    "Cliquez sur Calculer pour obtenir le nombre de sabots nécessaires.",
  ],
  materialInfo:
    "Les sabots de solive (ou étriers) sont des connecteurs métalliques en acier galvanisé qui fixent les solives aux poutres ou aux solives de rive. Ils assurent une liaison mécanique fiable sans nécessiter de clouage en biais. Les fabricants principaux sont Simpson Strong-Tie (gamme LUS, LU, HU), Rothoblaas et Würth. Les sabots sont dimensionnés pour chaque section de bois : il existe des modèles pour 45×150, 45×200, 45×250, 63×175 mm, etc. Chaque sabot est fixé avec des pointes spéciales à tête large (pointes de connecteur) fournies ou spécifiées par le fabricant. Le coût est de 1,50 à 5 € par sabot selon le modèle. Le DTU 31.1 autorise les assemblages par sabots pour les planchers à ossature bois.",
  nextSteps: [
    { label: "Calculateur de solives", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Calculateur de pointes de charpente", href: "/calculators/hardware/framing-nail-calculator/" },
    { label: "Calculateur d'équerres anti-tempête", href: "/calculators/hardware/hurricane-tie-calculator/" },
  ],
  installationTips: [
    "Utilisez le modèle de sabot correspondant exactement à la section de la solive.",
    "Fixez avec les pointes spéciales de connecteur — les pointes de charpente ordinaires ne conviennent pas.",
    "Remplissez tous les trous de fixation du sabot — chaque trou est prévu pour la résistance calculée.",
    "Vérifiez que la solive repose bien au fond du sabot sans jeu.",
  ],
  commonMistakes: [
    "Utiliser un sabot trop grand ou trop petit — le sabot doit correspondre exactement à la section du bois.",
    "Ne pas remplir tous les trous de fixation — la résistance est calculée pour tous les clous en place.",
    "Utiliser des vis au lieu de pointes de connecteur — les vis n'ont pas la résistance au cisaillement requise (sauf vis spéciales Simpson).",
  ],
  faqs: [
    {
      question: "Faut-il un sabot pour chaque solive ?",
      answer: "Oui, chaque solive doit être fixée à la poutre ou à la solive de rive par un sabot, par clouage en biais ou par un autre assemblage conforme au DTU 31.1. Le sabot est la solution la plus sûre et la plus facile.",
    },
    {
      question: "Peut-on utiliser des vis pour les sabots ?",
      answer: "Non, sauf si le fabricant du sabot fournit des vis spécifiques homologuées (comme les vis Simpson SD). Les vis standard n'ont pas la résistance au cisaillement requise et sont interdites dans les connecteurs métalliques.",
    },
    {
      question: "Quel sabot Simpson pour des solives en 45×200 ?",
      answer: "Le sabot Simpson LUS 45/200 est le modèle standard pour cette section. Il se fixe avec des pointes de connecteur Simpson de 4×40 mm. Consultez le catalogue Simpson pour les charges admissibles.",
    },
  ],
};

export const hurricaneTieCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez le nombre de chevrons ou de fermettes.",
    "Cliquez sur Calculer pour obtenir le nombre d'équerres anti-tempête.",
  ],
  materialInfo:
    "Les équerres anti-tempête (ou équerres de liaison chevron-mur) sont des connecteurs métalliques qui relient la charpente à l'ossature murale pour résister aux forces de soulèvement du vent. Elles sont obligatoires en zones ventées selon l'Eurocode 1 (actions du vent) et les règles NV 65 modifiées. Les modèles courants sont les Simpson HTT (hold-down), A35, H2.5A et leurs équivalents Rothoblaas. Chaque chevron ou fermette doit être relié à la lisse haute par au moins une équerre. En zone de vent fort (zones 3 et 4, bord de mer), deux équerres par point d'appui peuvent être requises. Le coût est de 1 à 3 € par équerre.",
  nextSteps: [
    { label: "Calculateur de fermettes", href: "/calculators/roofing/truss-calculator/" },
    { label: "Calculateur de chevrons", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Calculateur de pointes de charpente", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: [
    "Fixez une équerre de chaque côté du chevron ou de la fermette, à sa jonction avec la lisse haute.",
    "Utilisez les pointes de connecteur spécifiées par le fabricant — remplissez tous les trous.",
    "En zone de vent fort, doublez les équerres ou utilisez des modèles renforcés.",
    "Vérifiez que le connecteur ne déforme pas le bois — ajustez l'angle au besoin.",
  ],
  commonMistakes: [
    "Omettre les équerres anti-tempête — sans elles, la charpente peut être arrachée par les vents violents.",
    "Utiliser des pointes standard au lieu de pointes de connecteur — la résistance est insuffisante.",
    "Ne pas fixer les équerres sur les deux côtés du point d'appui en zone ventée.",
  ],
  faqs: [
    {
      question: "Les équerres anti-tempête sont-elles obligatoires ?",
      answer: "Oui, dans les zones de vent classées 3 et 4 selon les Eurocodes, et en zone littorale. Le bureau d'études structure prescrit le type et le nombre de connecteurs en fonction de la vitesse de vent de référence du site.",
    },
    {
      question: "Combien d'équerres par fermette ?",
      answer: "Au minimum une par point d'appui (2 par fermette : une de chaque côté). En zone de vent fort, le bureau d'études peut prescrire des connecteurs renforcés (type Simpson HD ou HDU) avec des tiges filetées traversantes.",
    },
    {
      question: "Équerres Simpson ou Rothoblaas ?",
      answer: "Les deux fabricants proposent des connecteurs homologués avec des charges admissibles certifiées. Le choix dépend de la disponibilité locale et de la compatibilité avec les sections de bois utilisées. Consultez les fiches techniques pour les charges admissibles.",
    },
  ],
};

export const lumberCostCalculator: CalculatorSEOContent = {
  disclaimer:
    "Les prix indiqués sont des estimations moyennes du marché français. Demandez un devis à votre négoce de matériaux pour des prix actualisés.",
  howToUse: [
    "Sélectionnez la section du bois (45×95, 45×145, 45×200, etc.).",
    "Saisissez la quantité en mètres linéaires.",
    "Cliquez sur Calculer pour obtenir le coût estimé.",
  ],
  materialInfo:
    "Le bois de charpente et d'ossature en France est principalement du résineux (épicéa, pin sylvestre, douglas) classé C24 selon la norme NF EN 338. Les sections commerciales sont normalisées : 45×95, 45×120, 45×145, 45×170, 45×200, 63×175, 75×200, 100×250 mm. Les longueurs vont de 2,50 m à 6,00 m, parfois 8,00 m sur commande. Les prix varient de 2 à 15 € le mètre linéaire selon la section. Le bois est vendu au détail chez les négoces (Point P, Gedimat, BigMat, Bois & Matériaux) ou en lot/palette avec des remises de 10 à 20 %. Le douglas est 10 à 30 % plus cher que l'épicéa mais offre une meilleure durabilité naturelle (classe 3). Le bois lamellé collé (BLC) GL24h coûte 2 à 3 fois plus cher que le bois massif mais offre des portées supérieures.",
  nextSteps: [
    { label: "Calculateur de cubage bois", href: "/calculators/hardware/board-feet-calculator/" },
    { label: "Calculateur de contreplaqué", href: "/calculators/hardware/plywood-calculator/" },
    { label: "Calculateur de montants", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Stockez le bois à l'abri de la pluie et surélevé sur des cales pour éviter les remontées d'humidité.",
    "Vérifiez le taux d'humidité du bois à la livraison — il doit être inférieur à 18 % pour la construction.",
    "Triez les pièces et écartez celles qui présentent des flaches, des nœuds traversants ou un gauchissement excessif.",
  ],
  commonMistakes: [
    "Commander du bois sans vérifier le classement mécanique — exigez du C24 pour les éléments structurels.",
    "Stocker le bois en extérieur sans protection — le bois gonfle, gauchit et bleuit en quelques semaines.",
    "Comparer les prix sans vérifier la section réelle — les sections « rabot 4 faces » sont plus petites que les sections brutes.",
  ],
  faqs: [
    {
      question: "Combien coûte un montant de 45×145 mm en 3 m ?",
      answer: "Un montant en épicéa C24 de 45×145 mm en 3 m coûte environ 6 à 10 € pièce au détail. En lot ou palette (50 à 100 pièces), le prix descend à 4 à 7 € pièce.",
    },
    {
      question: "Épicéa ou douglas pour l'ossature ?",
      answer: "L'épicéa est le bois d'ossature standard en France : léger, facile à travailler et le moins cher. Le douglas est naturellement plus durable (classe 3, résistant aux champignons sans traitement) et convient pour les pièces exposées. Le surcoût est de 10 à 30 %.",
    },
  ],
};

export const boardFeetCalculator: CalculatorSEOContent = {
  disclaimer:
    "Ce calculateur convertit les dimensions métriques en volume. Les prix sont indicatifs et varient selon la région et le fournisseur.",
  howToUse: [
    "Saisissez les dimensions de la pièce de bois en millimètres.",
    "Saisissez la longueur en mètres.",
    "Cliquez sur Calculer pour obtenir le cubage en m³ et le coût estimé.",
  ],
  materialInfo:
    "Le cubage du bois est le calcul du volume en mètres cubes, utilisé pour le chiffrage du bois de charpente et des bois massifs. La formule est : volume (m³) = largeur (m) × hauteur (m) × longueur (m). En France, le bois de charpente se vend au mètre linéaire pour les petites sections et au mètre cube pour les grosses sections et le BLC. Le prix du bois résineux C24 est de 250 à 500 € le m³ selon l'essence et la qualité. Le bois de feuillus (chêne, hêtre) se vend de 500 à 1 500 € le m³ en sciage. Le BLC (bois lamellé collé) coûte 600 à 1 200 € le m³.",
  nextSteps: [
    { label: "Calculateur de coût du bois", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Calculateur de contreplaqué", href: "/calculators/hardware/plywood-calculator/" },
    { label: "Calculateur de montants", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Vérifiez le cubage à la livraison — mesurez les sections réelles et comptez les pièces.",
    "Le bois rabotés est plus petit que sa section nominale — un 45×145 rabotés mesure environ 43×143 mm.",
    "Groupez vos commandes pour bénéficier des tarifs au m³ plutôt qu'au mètre linéaire.",
  ],
  commonMistakes: [
    "Confondre section nominale et section réelle — le rabot enlève 1 à 2 mm de chaque face.",
    "Oublier de compter les chutes dans le cubage commandé — ajoutez 10 à 15 %.",
    "Comparer des prix au mètre linéaire sans tenir compte de la section — le prix au m³ est le seul comparatif fiable.",
  ],
  faqs: [
    {
      question: "Comment convertir le mètre linéaire en m³ ?",
      answer: "Volume (m³) = section en m² × longueur en m. Exemple : 10 pièces de 45×145 mm en 4 m = 10 × (0,045 × 0,145 × 4) = 0,261 m³.",
    },
    {
      question: "Combien coûte un mètre cube de bois de charpente ?",
      answer: "Le bois de charpente résineux C24 coûte 250 à 400 € le m³ pour l'épicéa et 350 à 500 € le m³ pour le douglas. Le BLC GL24h coûte 600 à 1 000 € le m³.",
    },
  ],
};

const plywoodCalculatorFR: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez la surface à couvrir en mètres carrés.",
    "Sélectionnez l'épaisseur du contreplaqué.",
    "Cliquez sur Calculer pour obtenir le nombre de panneaux et le coût estimé.",
  ],
  materialInfo:
    "Le contreplaqué est un panneau composé de plis de bois déroulés collés en sens croisé, offrant une excellente rigidité et stabilité dimensionnelle. Les épaisseurs courantes vont de 5 mm (habillage) à 22 mm (coffrage, plancher). Le format standard en France est 2500×1220 mm. Les types principaux sont le contreplaqué intérieur (CTBS), le contreplaqué extérieur (CTBX, colle phénolique résistante à l'eau) et le contreplaqué coffrage (faces filmées). Les essences utilisées sont le peuplier (léger, économique), le bouleau (résistant, menuiserie) et l'okoumé (extérieur, marine). Le coût varie de 10 à 60 € le panneau selon l'épaisseur, l'essence et la qualité. Les fournisseurs courants sont les négoces de matériaux et les grossistes bois (Groupe Leblanc, Dispano).",
  nextSteps: [
    { label: "Calculateur de cubage bois", href: "/calculators/hardware/board-feet-calculator/" },
    { label: "Calculateur de coût du bois", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Calculateur de panneaux OSB", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Stockez les panneaux à plat et à l'abri — le contreplaqué se déforme s'il est stocké debout sans support.",
    "Coupez avec une lame à dents fines pour éviter l'éclatement des plis extérieurs.",
    "Pour un travail propre, posez un ruban de masquage sur la ligne de coupe avant de scier.",
    "Utilisez du CTBX pour toute application extérieure ou en milieu humide.",
  ],
  commonMistakes: [
    "Utiliser du contreplaqué intérieur (CTBS) en extérieur — les plis se décolleront en quelques mois.",
    "Couper avec une lame grossière — les plis éclatent et la coupe est inutilisable.",
    "Sous-estimer le nombre de panneaux — les découpes complexes génèrent plus de chutes qu'un simple calcul de surface.",
  ],
  faqs: [
    {
      question: "Combien de panneaux pour 30 m² ?",
      answer: "Un panneau de 2500×1220 mm couvre 3,05 m². Pour 30 m², il faut 30 / 3,05 = 10 panneaux. Ajoutez 10 % de chutes, soit 11 panneaux.",
    },
    {
      question: "CTBS ou CTBX ?",
      answer: "CTBS (collage intérieur) pour les applications sèches : agencement, habillage, mobilier. CTBX (collage extérieur) pour les applications exposées à l'humidité : coffrage, plancher de salle de bain, bardage sous abri. Le CTBX coûte 20 à 30 % de plus.",
    },
    {
      question: "Quelle épaisseur pour un plan de travail ?",
      answer: "18 à 22 mm en contreplaqué bouleau pour un plan de travail solide. Utilisez du CTBX pour la résistance à l'humidité. Un stratifié ou un vernis alimentaire protège la surface.",
    },
  ],
};

// ─── FINISHING ───────────────────────────────────────────────────────────────

const paintCoverageCalculatorFR: CalculatorSEOContent = {
  disclaimer:
    "Le rendement réel varie selon la porosité de la surface, le type de peinture et la méthode d'application. Ces estimations sont basées sur des surfaces lisses et préparées.",
  howToUse: [
    "Mesurez la surface à peindre en mètres carrés.",
    "Sélectionnez le type de finition (mat, satiné, brillant).",
    "Indiquez le nombre de couches (2 couches en standard).",
    "Cliquez sur Calculer pour obtenir le nombre de litres et de pots.",
  ],
  materialInfo:
    "La peinture intérieure se mesure en rendement (m² par litre). Un litre de peinture couvre 10 à 12 m² en une couche sur une surface lisse et préparée. Les finitions mates ont le meilleur rendement (12 m²/L), les satinées et brillantes couvrent un peu moins (10 m²/L). Les peintures de qualité professionnelle (Tollens, Sikkens, Zolpan, Dulux Valentine) offrent un meilleur pouvoir couvrant que les entrées de gamme. Les pots standards sont de 2,5 L, 5 L et 10 L. Pour un calcul précis, prévoyez toujours 2 couches de finition (et une couche de sous-couche si nécessaire). Un pot de 10 L coûte 30 à 100 € selon la gamme.",
  nextSteps: [
    { label: "Calculateur de coût de peinture", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Calculateur de primaire d'accrochage", href: "/calculators/finishing/primer-calculator/" },
    { label: "Calculateur d'enduit de jointement", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
  ],
  installationTips: [
    "Préparez les surfaces : rebouchez les trous à l'enduit, poncez au grain 120, dépoussiérez.",
    "Appliquez une sous-couche sur les surfaces neuves (plâtre, bois) pour uniformiser l'absorption.",
    "Diluez la première couche de 5 à 10 % pour une meilleure pénétration sur les surfaces poreuses.",
    "Croisez les passes au rouleau (verticale puis horizontale) pour un résultat uniforme.",
  ],
  commonMistakes: [
    "Sauter la sous-couche sur du plâtre neuf — le résultat sera irrégulier (lustrage aux joints).",
    "Appliquer des couches trop épaisses — le séchage est inégal et des coulures apparaissent.",
    "Peindre sur une surface poussiéreuse ou humide — l'adhérence sera mauvaise.",
  ],
  faqs: [
    {
      question: "Combien de peinture pour une pièce de 12 m² ?",
      answer: "Pour une pièce de 3×4 m avec 2,50 m sous plafond : murs = 35 m², plafond = 12 m². À 10 m²/L et 2 couches : (35 + 12) × 2 / 10 = 9,4 L. Achetez un pot de 10 L ou 2 pots de 5 L.",
    },
    {
      question: "Combien de mètres carrés couvre un litre de peinture ?",
      answer: "10 à 12 m² en une couche sur surface lisse et préparée. Sur surface poreuse (plâtre neuf, enduit), le rendement chute à 6 à 8 m²/L pour la première couche.",
    },
  ],
};

const paintCostCalculatorFR: CalculatorSEOContent = {
  disclaimer:
    "Les prix sont des estimations moyennes du marché français. Consultez votre revendeur pour des prix actualisés.",
  howToUse: [
    "Saisissez la surface à peindre en mètres carrés.",
    "Sélectionnez la gamme de peinture (entrée de gamme, milieu de gamme, premium).",
    "Cliquez sur Calculer pour obtenir le coût estimé en matériaux.",
  ],
  materialInfo:
    "Le coût de la peinture varie fortement selon la gamme. L'entrée de gamme (Luxens, Colours) coûte 3 à 6 € le litre en pot de 10 L. Le milieu de gamme (Dulux Valentine, V33) coûte 6 à 12 € le litre. Le premium (Tollens, Sikkens, Farrow & Ball) coûte 12 à 30 € le litre. En plus de la peinture, prévoyez la sous-couche (4 à 8 €/L), les fournitures (rouleaux, bâches, ruban de masquage : 30 à 60 € pour une pièce) et les enduits de réparation (5 à 15 € le tube). Pour une maison de 100 m², le budget peinture intérieure complète (murs + plafonds, 2 couches) va de 500 à 2 500 € en matériaux seuls.",
  nextSteps: [
    { label: "Calculateur de rendement peinture", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Calculateur de primaire d'accrochage", href: "/calculators/finishing/primer-calculator/" },
    { label: "Calculateur de plaques de plâtre", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Investissez dans de bons rouleaux et pinceaux — un rouleau de qualité fait une différence visible.",
    "Achetez en gros pots (10 L) pour économiser 15 à 20 % par rapport aux pots de 2,5 L.",
    "Gardez au moins 0,5 L de chaque teinte pour les retouches futures.",
  ],
  commonMistakes: [
    "Acheter de la peinture premier prix pour les pièces de vie — l'application est difficile et le résultat décevant.",
    "Ne pas prévoir la sous-couche — elle est indispensable sur les surfaces neuves et coûte moins cher que la finition.",
    "Sous-estimer les fournitures — les rouleaux, les bâches et le ruban s'additionnent vite.",
  ],
  faqs: [
    {
      question: "Combien coûte la peinture d'une pièce de 12 m² ?",
      answer: "Pour une pièce de 3×4 m : environ 10 L de peinture + 5 L de sous-couche + fournitures. En milieu de gamme : 80 à 150 €. En premium : 200 à 350 €.",
    },
    {
      question: "Peinture en pot de 2,5 L ou 10 L ?",
      answer: "Le pot de 10 L est 15 à 20 % moins cher au litre. Achetez en 10 L dès que vous avez besoin de plus de 5 L d'une même teinte. Gardez le reste pour les retouches.",
    },
  ],
};

const primerCalculatorFR: CalculatorSEOContent = {
  disclaimer:
    "Le rendement du primaire varie selon la porosité de la surface. Ces estimations sont basées sur des surfaces standard.",
  howToUse: [
    "Mesurez la surface à préparer en mètres carrés.",
    "Sélectionnez le type de surface (plâtre neuf, bois, rénovation).",
    "Cliquez sur Calculer pour obtenir le nombre de litres et de pots.",
  ],
  materialInfo:
    "Le primaire d'accrochage (sous-couche) est une peinture technique appliquée avant la finition pour uniformiser l'absorption du support et améliorer l'adhérence de la peinture de finition. En France, les sous-couches courantes sont les impressions universelles (Tollens, Zolpan), les sous-couches plâtre (spécifiques pour les plaques de plâtre neuves), les sous-couches bois (avec anti-tanin pour le chêne et le résineux) et les sous-couches couvrantes (pour masquer les teintes foncées). Le rendement est de 8 à 12 m²/L selon la porosité du support. Le coût est de 4 à 10 € le litre en pot de 10 L. L'application d'une sous-couche est obligatoire sur les supports neufs (plâtre, bois) et recommandée en rénovation pour une finition impeccable.",
  nextSteps: [
    { label: "Calculateur de rendement peinture", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Calculateur de coût de peinture", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Calculateur de plaques de plâtre", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Appliquez la sous-couche au rouleau en couche fine et régulière.",
    "Laissez sécher 12 à 24 heures avant d'appliquer la finition.",
    "Sur du plâtre neuf, attendez un séchage complet du support (3 à 4 semaines minimum) avant d'appliquer la sous-couche.",
    "Sur du bois résineux, utilisez une sous-couche anti-tanin pour éviter les remontées de taches.",
  ],
  commonMistakes: [
    "Peindre directement sur du plâtre neuf sans sous-couche — le résultat sera irrégulier avec du lustrage aux joints.",
    "Appliquer la sous-couche sur un support humide — l'adhérence sera mauvaise et des cloques apparaîtront.",
    "Utiliser une sous-couche universelle sur du bois de chêne — les tanins traverseront et tacheront la finition.",
  ],
  faqs: [
    {
      question: "Faut-il une sous-couche avant de peindre ?",
      answer: "Oui sur les supports neufs (plâtre, bois, enduit), sur les supports très absorbants et lors d'un changement de teinte radical (foncé vers clair). Sur un support déjà peint en bon état avec une teinte similaire, la sous-couche n'est pas indispensable.",
    },
    {
      question: "Combien de sous-couche pour 50 m² ?",
      answer: "À 10 m²/L, il faut 5 L pour 50 m² en une couche. Achetez un pot de 5 L ou un demi-pot de 10 L. Sur support très poreux, le rendement peut chuter à 6 m²/L : prévoyez 8 à 9 L.",
    },
  ],
};

// ─── OUTDOOR ────────────────────────────────────────────────────────────────

const deckBoardCalculatorFR: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez les dimensions de la terrasse (longueur × largeur) en mètres.",
    "Sélectionnez le type de lame (bois traité, douglas, composite).",
    "Cliquez sur Calculer pour obtenir le nombre de lames et les mètres linéaires.",
  ],
  materialInfo:
    "Les lames de terrasse sont les éléments de surface visibles de la terrasse bois. En France, les essences courantes sont le pin traité autoclave classe 4 (le plus économique, 5 à 15 €/m²), le douglas (naturellement durable classe 3, 10 à 20 €/m²), l'ipé et le cumaru (bois exotiques très durables, 30 à 60 €/m²), et le composite (bois-polymère, 20 à 50 €/m²). Les lames standard font 21 à 28 mm d'épaisseur, 120 à 145 mm de largeur et 2,10 m à 4,00 m de longueur. L'espacement entre lames est de 5 à 8 mm pour l'écoulement de l'eau. Les lames se posent sur des lambourdes espacées de 40 à 50 cm. La pose peut être vissée (vis inox A2 ou A4) ou par clips invisibles (Cobra, Hapax). Le DTU 51.4 régit la pose des terrasses en bois.",
  nextSteps: [
    { label: "Calculateur de plots de terrasse", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Calculateur de garde-corps", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Calculateur d'escalier de terrasse", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Posez les lames avec un espacement de 5 à 8 mm pour le drainage et la dilatation.",
    "Pré-percez les lames en bois exotique pour éviter le fendage.",
    "Utilisez des vis inox A2 (intérieur) ou A4 (bord de mer) pour éviter la corrosion.",
    "Respectez un entraxe de lambourdes de 40 à 50 cm selon l'épaisseur des lames.",
  ],
  commonMistakes: [
    "Visser sans pré-perçage dans le bois exotique — le bois se fend irrémédiablement.",
    "Utiliser des vis acier zingué — elles rouillent et tachent le bois en quelques mois.",
    "Poser directement sur le sol sans ventilation — l'humidité piégée pourrit les lames et les lambourdes.",
    "Oublier de laisser un espace de 5 mm entre les lames — sans jeu, les lames gondolent en été.",
  ],
  faqs: [
    {
      question: "Combien de lames pour une terrasse de 20 m² ?",
      answer: "Avec des lames de 140 mm de largeur utile (y compris l'espacement) et 3 m de longueur : 20 / (0,14 × 3) = 48 lames. Ajoutez 10 % de chutes, soit environ 53 lames de 3 m.",
    },
    {
      question: "Pin traité ou composite ?",
      answer: "Le pin traité classe 4 est 2 à 3 fois moins cher à l'achat mais nécessite un entretien annuel (saturateur ou lasure). Le composite est plus cher mais sans entretien pendant 25 à 50 ans. Sur 20 ans, le coût total est souvent comparable.",
    },
    {
      question: "Quelle essence de bois pour une terrasse en bord de mer ?",
      answer: "L'ipé et le cumaru sont les meilleures options pour les terrasses exposées au sel : classe 5, extrêmement durables. Le composite est aussi une excellente option. Utilisez exclusivement des vis inox A4 (marine) en bord de mer.",
    },
  ],
};

const deckFootingCalculatorFR: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez les dimensions de la terrasse en mètres.",
    "Sélectionnez le type de plot (béton coulé, plot préfabriqué, plot réglable PVC).",
    "Cliquez sur Calculer pour obtenir le nombre de plots, de poteaux et de poutres.",
  ],
  materialInfo:
    "Les plots de terrasse sont les appuis qui soutiennent la structure (lambourdes et poutres). Il existe trois types principaux : les plots béton coulés (pour les terrasses surélevées : dés béton de 30×30 cm ou tubes en carton type Sonotube remplis de béton), les plots béton préfabriqués (dés ou blocs avec embase pour poteau) et les plots réglables en PVC (type Jouplast, Plot'Up) pour les terrasses sur dalle existante. L'espacement entre plots est de 1,20 à 1,50 m dans le sens des lambourdes et de 40 à 50 cm perpendiculairement. Pour les terrasses surélevées de plus de 60 cm, les plots doivent descendre sous la profondeur hors gel. Le coût des plots varie de 2 € (plot PVC réglable) à 15 € (plot béton coulé avec tube). Le DTU 51.4 définit les règles de pose des terrasses bois.",
  nextSteps: [
    { label: "Calculateur de lames de terrasse", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Calculateur de garde-corps", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Calculateur d'escalier de terrasse", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Nivelez les plots avec un niveau laser pour garantir une surface de terrasse plane.",
    "Pour les plots béton coulés, descendez sous la profondeur hors gel (50 à 90 cm selon la zone).",
    "Interposez une cale caoutchouc entre le plot et la lambourde pour éviter le contact direct bois-béton.",
    "Vérifiez l'espacement des plots en fonction de la portée admissible des lambourdes.",
  ],
  commonMistakes: [
    "Ne pas descendre sous la profondeur hors gel — les plots remontent et la terrasse se déforme.",
    "Espacer les plots trop largement — les lambourdes fléchissent et la terrasse « trampoline ».",
    "Poser directement les lambourdes sur le sol — l'humidité stagnante pourrit le bois en quelques années.",
  ],
  faqs: [
    {
      question: "Combien de plots pour une terrasse de 4×5 m ?",
      answer: "Avec un espacement de 1,20 m dans le sens des lambourdes et 50 cm perpendiculairement : (5 / 1,20 + 1) × (4 / 0,50 + 1) = 5 × 9 = 45 plots environ. L'espacement exact dépend de la section des lambourdes.",
    },
    {
      question: "Plots béton ou plots PVC réglables ?",
      answer: "Les plots PVC réglables conviennent pour les terrasses posées sur une dalle béton existante. Les plots béton coulés sont nécessaires pour les terrasses sur terrain naturel ou surélevées, où il faut descendre sous la profondeur hors gel.",
    },
    {
      question: "Quelle profondeur pour les plots de terrasse ?",
      answer: "Pour les plots béton sur terrain naturel : sous la profondeur hors gel, soit 50 cm dans le sud de la France à 90 cm en montagne. Pour les plots PVC sur dalle existante : aucune profondeur, ils reposent simplement sur la dalle.",
    },
  ],
};

const deckRailingCalculatorFR: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mesurez le périmètre de la terrasse nécessitant un garde-corps en mètres.",
    "Cliquez sur Calculer pour obtenir le nombre de poteaux, barreaux et mètres linéaires de lisse.",
  ],
  materialInfo:
    "Le garde-corps de terrasse est obligatoire dès que la hauteur de chute dépasse 1 mètre (norme NF P01-012). La hauteur minimale du garde-corps est de 1,00 m (1,20 m pour les ERP). L'espacement entre barreaux verticaux ne doit pas excéder 11 cm (norme NF P01-012) pour empêcher le passage d'un enfant. Les poteaux sont espacés de 1,00 m à 1,50 m selon le matériau et le profil. Les matériaux courants sont le bois (pin traité, douglas), l'aluminium (le plus répandu en neuf), l'inox (pour le haut de gamme et le bord de mer) et le composite. Le coût d'un garde-corps en aluminium est de 80 à 200 € le mètre linéaire posé. En bois, comptez 50 à 150 € le mètre linéaire.",
  nextSteps: [
    { label: "Calculateur de lames de terrasse", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Calculateur de plots de terrasse", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Calculateur d'escalier de terrasse", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Fixez les poteaux avec des platines boulonnées sur la structure de la terrasse — pas simplement vissés dans les lames.",
    "Vérifiez l'espacement des barreaux avec un gabarit de 110 mm — un barreau manquant ou mal espacé est un danger.",
    "Poncez et traitez (lasure ou saturateur) les garde-corps en bois avant le montage pour protéger toutes les faces.",
    "En aluminium, utilisez des fixations inox pour éviter la corrosion galvanique.",
  ],
  commonMistakes: [
    "Garde-corps trop bas — la hauteur minimale est 1,00 m (mesuré depuis la surface de la terrasse).",
    "Espacement des barreaux supérieur à 11 cm — un enfant peut passer la tête et se coincer.",
    "Fixation dans les lames seules — les poteaux doivent être fixés à la structure (lambourdes, poutres).",
  ],
  faqs: [
    {
      question: "Le garde-corps est-il obligatoire ?",
      answer: "Oui, dès que la hauteur de chute dépasse 1 mètre (norme NF P01-012 et Code de la construction). Pour les terrasses de plain-pied ou avec une chute de moins de 1 m, le garde-corps n'est pas obligatoire mais reste recommandé.",
    },
    {
      question: "Combien de poteaux pour une terrasse de 15 m de périmètre ?",
      answer: "Avec un espacement de 1,20 m entre poteaux : 15 / 1,20 + 1 = 14 poteaux. Ajoutez un poteau à chaque angle et à chaque changement de direction.",
    },
    {
      question: "Quelle norme pour les garde-corps ?",
      answer: "La norme NF P01-012 définit les dimensions (hauteur ≥ 1 m, espacement barreaux ≤ 11 cm) et les résistances mécaniques (effort horizontal de 60 daN/m linéaire en logement). Pour les ERP, la hauteur passe à 1,20 m.",
    },
  ],
};

const deckStairCalculatorFR: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Saisissez la hauteur totale à descendre en mètres.",
    "Cliquez sur Calculer pour obtenir le nombre de marches, le nombre de limons et les planches nécessaires.",
  ],
  materialInfo:
    "L'escalier de terrasse bois permet l'accès entre la terrasse surélevée et le sol. Les normes françaises (NF P01-012) imposent une hauteur de marche de 16 à 18 cm et un giron de 25 à 30 cm pour le confort et la sécurité. La formule de Blondel (2h + g = 60 à 64 cm) vérifie la conformité. Les limons (les pièces inclinées qui supportent les marches) sont généralement en pin traité classe 4, en section de 45×250 mm ou 45×300 mm. Les marches sont constituées de 2 à 3 planches de 140 mm de large, fixées avec des vis inox. Pour les escaliers de plus de 1 m de large ou de plus de 3 marches, un limon central est recommandé. Le coût d'un escalier bois de 4 à 6 marches est de 200 à 600 € en matériaux.",
  nextSteps: [
    { label: "Calculateur de lames de terrasse", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Calculateur de plots de terrasse", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Calculateur de garde-corps", href: "/calculators/outdoor/deck-railing-calculator/" },
  ],
  installationTips: [
    "Tracez les limons avec un gabarit ou une équerre de charpentier pour des marches régulières.",
    "Fixez les limons à la structure de la terrasse avec des équerres métalliques robustes.",
    "Posez les marches avec un débord de 2 à 3 cm sur le nez de marche pour l'écoulement de l'eau.",
    "Appuyez le pied des limons sur une dalle ou un plot béton — jamais directement sur la terre.",
  ],
  commonMistakes: [
    "Hauteurs de marche irrégulières — toutes les marches doivent être à la même hauteur (tolérance ± 5 mm).",
    "Limons trop fins — la section minimale est de 45×250 mm pour des limons entaillés.",
    "Pied des limons en contact direct avec le sol — utilisez un pied de poteau galvanisé ou un plot béton.",
    "Pas de garde-corps — un garde-corps est obligatoire dès que l'escalier comporte plus de 3 marches et que la hauteur de chute dépasse 1 m.",
  ],
  faqs: [
    {
      question: "Combien de marches pour 90 cm de hauteur ?",
      answer: "Avec une hauteur de marche de 17 cm : 90 / 17 = 5,3, soit 5 ou 6 marches. Avec 5 marches : hauteur = 18 cm (acceptable). Avec 6 marches : hauteur = 15 cm. Vérifiez avec la formule de Blondel (2h + g = 60 à 64 cm).",
    },
    {
      question: "Combien de limons pour un escalier de 1,20 m de large ?",
      answer: "Pour une largeur de 1,20 m : 2 limons extérieurs suffisent si les marches sont en bois massif de 28 mm ou plus. Pour des marches plus fines ou une largeur supérieure à 1,20 m, ajoutez un limon central.",
    },
    {
      question: "Quelle essence de bois pour les limons ?",
      answer: "Le pin traité autoclave classe 4 est le choix le plus courant et le plus économique. Le douglas est une alternative naturellement durable. Pour un escalier haut de gamme, l'ipé ou le cumaru offrent une durabilité exceptionnelle.",
    },
  ],
};

export const postHoleCalculatorFR: CalculatorSEOContent = {
  disclaimer: "Volume de b\u00e9ton estim\u00e9 pour des trous cylindriques. La consommation r\u00e9elle peut varier selon le sol et la taille du poteau.",
  howToUse: [
    "Entrez le diam\u00e8tre du trou en pouces \u2014 20 cm pour les poteaux de 9\u00d79 cm, 25\u201330 cm pour les poteaux de 14\u00d714 cm.",
    "Entrez la profondeur du trou en pouces \u2014 poteaux de cl\u00f4ture : 60\u201380 cm, poteaux porteurs : 80\u2013120 cm (hors gel).",
    "Entrez le nombre total de trous.",
    "Cliquez sur Calculer pour obtenir le volume par trou, le volume total et le nombre de sacs.",
  ],
  materialInfo:
    "Les trous de poteau sont des excavations cylindriques remplies de b\u00e9ton pour ancrer les poteaux de cl\u00f4ture, bo\u00eetes aux lettres, supports de terrasse, panneaux et pergolas. Le b\u00e9ton enrobe la base du poteau et transf\u00e8re les charges au sol environnant, emp\u00eachant le poteau de bouger, pencher ou \u00eatre soulev\u00e9 par le vent, le gel ou les forces lat\u00e9rales.\n\nPour les poteaux de cl\u00f4ture, la r\u00e8gle g\u00e9n\u00e9rale est d\u2019enterrer un tiers de la longueur totale du poteau. Une cl\u00f4ture de 1,80 m avec des poteaux de 2,40 m doit avoir 60\u201380 cm de poteau scell\u00e9 dans le b\u00e9ton. Pour les poteaux de 9\u00d79 cm, un trou de 20 cm de diam\u00e8tre suffit. Pour les poteaux de 14\u00d714 cm ou les poteaux de portail soumis \u00e0 des forces lat\u00e9rales plus importantes, utiliser un trou de 25\u201330 cm.\n\nEn France, la profondeur hors gel varie de 50 cm (littoral m\u00e9diterran\u00e9en) \u00e0 90 cm (montagne). Les poteaux porteurs pour terrasses, pergolas et carports doivent toujours \u00eatre fond\u00e9s hors gel conform\u00e9ment au DTU 13.1.\n\nLe b\u00e9ton pr\u00eat \u00e0 l\u2019emploi en sacs de 25 kg et 35 kg (Weber, PRB, Lafarge) est le produit le plus utilis\u00e9. Un sac de 25 kg donne environ 12 litres, un sac de 35 kg environ 17 litres. Pour les grands projets, le b\u00e9ton pr\u00eat \u00e0 l\u2019emploi livr\u00e9 par toupie revient \u00e0 100\u2013150 \u20ac/m\u00b3.\n\nAvant de couler le b\u00e9ton, ajouter 10\u201315 cm de gravier au fond du trou pour le drainage. Former un d\u00f4me de b\u00e9ton l\u00e9g\u00e8rement au-dessus du niveau du sol en pente vers l\u2019ext\u00e9rieur pour \u00e9vacuer l\u2019eau de pluie.",
  nextSteps: [
    { label: "Calculateur de plots de terrasse", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Calculateur de gravier", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Calculateur de b\u00e9ton", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Creuser des trous 3 \u00e0 4 fois la largeur du poteau \u2014 20 cm pour un poteau de 9\u00d79 cm.",
    "Ajouter 10\u201315 cm de gravier compact\u00e9 au fond pour le drainage.",
    "V\u00e9rifier l\u2019aplomb du poteau sur deux faces avec un niveau \u00e0 bulle et \u00e9tayer avec des tasseaux avant de couler.",
    "Former un d\u00f4me de b\u00e9ton 2\u20133 cm au-dessus du sol, inclin\u00e9 vers l\u2019ext\u00e9rieur.",
    "Attendre 24\u201348 heures avant de fixer des lames de cl\u00f4ture, ferrures ou charges sur le poteau.",
  ],
  commonMistakes: [
    "Poteaux trop peu profonds \u2014 les poteaux de cl\u00f4ture doivent \u00eatre enterr\u00e9s au minimum d\u2019un tiers ; les poteaux porteurs doivent atteindre la profondeur hors gel.",
    "Oublier la couche de gravier \u2014 sans drainage, l\u2019eau stagne \u00e0 la base et acc\u00e9l\u00e8re le pourrissement du bois.",
    "Ne pas \u00e9tayer le poteau d\u2019aplomb avant la prise du b\u00e9ton \u2014 un poteau pench\u00e9 n\u00e9cessite de casser le b\u00e9ton pour le corriger.",
    "Couler le b\u00e9ton sous le niveau du sol \u2014 le sommet doit d\u00e9passer le sol pour \u00e9viter la stagnation d\u2019eau.",
    "Utiliser un diam\u00e8tre de trou trop petit \u2014 un volume de b\u00e9ton insuffisant ne r\u00e9siste pas aux forces lat\u00e9rales du vent ou du portail.",
  ],
  faqs: [
    { question: "Combien de b\u00e9ton pour un poteau de cl\u00f4ture ?", answer: "Un poteau de 9\u00d79 cm dans un trou de 20 cm \u00e0 60 cm de profondeur n\u00e9cessite environ 14 litres de b\u00e9ton \u2014 soit 1 sac de 35 kg ou 2 sacs de 25 kg par poteau." },
    { question: "Quelle profondeur pour un trou de poteau de cl\u00f4ture ?", answer: "R\u00e8gle g\u00e9n\u00e9rale : un tiers de la longueur totale du poteau. Pour une cl\u00f4ture de 1,80 m avec des poteaux de 2,40 m : 60\u201380 cm. Poteaux de portail et d\u2019angle 10 cm plus profonds. En zones froides, atteindre la profondeur hors gel (50\u201390 cm selon la r\u00e9gion)." },
    { question: "Combien de sacs de b\u00e9ton par poteau ?", answer: "Pour un poteau de 9\u00d79 cm dans un trou de 20 cm \u00e0 60 cm : 1\u20132 sacs de 25 kg ou 1 sac de 35 kg. Pour des trous plus profonds (80 cm), 2\u20133 sacs de 25 kg par poteau." },
    { question: "Peut-on utiliser du b\u00e9ton \u00e0 prise rapide pour les poteaux ?", answer: "Oui \u2014 le b\u00e9ton \u00e0 prise rapide (type PRB Express ou Weber Betonrapid) est id\u00e9al. Il prend en 20\u201340 minutes. Verser le m\u00e9lange sec autour du poteau, ajouter l\u2019eau, maintenir d\u2019aplomb quelques minutes. R\u00e9sistance compl\u00e8te en environ 4 heures." },
    { question: "Comment calculer le b\u00e9ton pour les trous de poteau ?", answer: "Les trous sont des cylindres : volume = \u03c0 \u00d7 r\u00b2 \u00d7 profondeur. Convertir les cm en m\u00e8tres. Exemple : 25 cm de diam\u00e8tre, 80 cm de profondeur : r = 0,125 m, V = 3,14 \u00d7 0,125\u00b2 \u00d7 0,8 = 0,039 m\u00b3 = 39 litres. Un sac de 25 kg donne environ 12 litres." },
    { question: "Quelle taille de trou pour un poteau de portail ?", answer: "Un poteau de portail n\u00e9cessite un trou de 25\u201330 cm de diam\u00e8tre \u00e0 80\u2013100 cm de profondeur. Les portails exercent des forces lat\u00e9rales importantes. Utiliser des poteaux de 14\u00d714 cm minimum pour un portail simple." },
  ],
};

// ─── RETAINING WALL ─────────────────────────────────────────────────────────

export const retainingWallCalculator: CalculatorSEOContent = {
  disclaimer: "Cette estimation inclut 10% de perte pour les blocs. Les besoins en gravier et drainage d\u00e9pendent des conditions du sol et de la r\u00e9glementation locale. Les murs de plus de 1,2 m n\u00e9cessitent g\u00e9n\u00e9ralement un calcul de structure et un permis.",
  howToUse: ["Mesurez la longueur totale de votre mur de sout\u00e8nement en m\u00e8tres.", "Entrez la hauteur souhait\u00e9e \u2014 la plupart des murs de jardin font 0,6 \u00e0 1,2 m.", "S\u00e9lectionnez le type de bloc : blocs paysagers, parpaings ou pierre naturelle.", "Cliquez sur Calculer pour obtenir le nombre de blocs, chaperons, gravier et drainage."],
  materialInfo: "Les murs de sout\u00e8nement retiennent la terre sur les terrains en pente et cr\u00e9ent des surfaces planes pour les jardins, terrasses et all\u00e9es. Les trois mat\u00e9riaux les plus courants sont les blocs paysagers embo\u00eetables, les parpaings (blocs de b\u00e9ton creux) et la pierre naturelle.\n\nLes blocs paysagers (Alkern, Marlux, Point P) sont le choix le plus populaire pour les murs DIY jusqu\u2019\u00e0 1,2 m. Les dimensions standard sont 40\u00d720\u00d720 cm, pesant 15 \u00e0 25 kg par bloc. Co\u00fbt typique : 3 \u00e0 8 EUR par bloc, ou 50 \u00e0 130 EUR par m\u00b2 de face de mur pos\u00e9.\n\nLes parpaings (20\u00d720\u00d750 cm) sont utilis\u00e9s pour les murs structurels et n\u00e9cessitent mortier, ferraillage et remplissage b\u00e9ton pour les murs de plus de 60 cm. La pierre naturelle (meuli\u00e8re, gr\u00e8s, calcaire) offre le plus bel aspect mais co\u00fbte 80 \u00e0 200 EUR/m\u00b2 pos\u00e9e.\n\nTous les murs de sout\u00e8nement n\u00e9cessitent un drainage : couche de gravier concass\u00e9 16/32 mm, drain perfor\u00e9 DN 100 en pied de mur, et barbacanes r\u00e9guli\u00e8res. Les chaperons sont coll\u00e9s avec un adh\u00e9sif de construction (~1 cartouche par 8 ml).\n\nEn France, un permis de construire ou une d\u00e9claration pr\u00e9alable est n\u00e9cessaire pour les murs de plus de 2 m en limite de propri\u00e9t\u00e9. Un mur de sout\u00e8nement de plus de 1 m de hauteur visible n\u00e9cessite un bureau d\u2019\u00e9tudes techniques (BET).",
  nextSteps: [{ label: "Calculateur de semelle", href: "/calculators/foundation/concrete-footing-calculator/" }, { label: "Calculateur de gravier", href: "/calculators/foundation/gravel-calculator/" }, { label: "Calculateur de mortier", href: "/calculators/foundation/mortar-mix-calculator/" }],
  installationTips: ["Creusez une tranch\u00e9e de 15 \u00e0 20 cm de profondeur et 60 cm de large \u2014 compactez le sol et ajoutez 15 cm de gravier concass\u00e9.", "Nivelez soigneusement la premi\u00e8re rang\u00e9e avec un niveau de 1,2 m et un maillet en caoutchouc.", "Remplissez avec du gravier concass\u00e9 16/32 mm derri\u00e8re le mur \u00e0 chaque rang\u00e9e.", "Posez un drain perfor\u00e9 DN 100 en pied de mur avec une pente de 2% vers un exutoire.", "D\u00e9calez les joints d\u2019au moins 10 cm entre les rang\u00e9es.", "Collez les chaperons avec de la colle de construction sur la derni\u00e8re rang\u00e9e."],
  commonMistakes: ["Oublier la couche de gravier de fondation \u2014 le mur se tassera et s\u2019inclinera.", "N\u00e9gliger le drainage \u2014 la pression hydrostatique est la cause num\u00e9ro 1 de rupture des murs.", "Construire plus de 1,2 m sans bureau d\u2019\u00e9tudes \u2014 la r\u00e9glementation exige un calcul de structure.", "Utiliser de la terre comme remblai \u2014 seul le gravier concass\u00e9 doit aller derri\u00e8re le mur.", "Ne pas compacter la tranch\u00e9e de fondation \u2014 un sol meuble provoque des tassements."],
  faqs: [
    { question: "Combien de blocs pour un mur de sout\u00e8nement ?", answer: "Pour des blocs paysagers 40\u00d720\u00d720 cm, comptez environ 12,5 blocs par m\u00b2 de face de mur. Un mur de 6 m de long par 1 m de haut n\u00e9cessite environ 75 blocs plus 10% de perte = 83 blocs." },
    { question: "Combien co\u00fbte un mur de sout\u00e8nement ?", answer: "Les blocs paysagers co\u00fbtent 50 \u00e0 130 EUR/m\u00b2 pos\u00e9s. Les parpaings avec ferraillage et b\u00e9ton co\u00fbtent 80 \u00e0 180 EUR/m\u00b2. Les murs en pierre naturelle co\u00fbtent 80 \u00e0 200 EUR/m\u00b2." },
    { question: "Faut-il un permis pour un mur de sout\u00e8nement ?", answer: "En France, une d\u00e9claration pr\u00e9alable est n\u00e9cessaire pour les murs de plus de 2 m en limite de propri\u00e9t\u00e9. Un mur de plus de 1 m n\u00e9cessite une \u00e9tude de BET. V\u00e9rifiez le PLU de votre commune." },
    { question: "Combien de gravier derri\u00e8re un mur de sout\u00e8nement ?", answer: "Pr\u00e9voyez une zone de 30 cm de large en gravier concass\u00e9 16/32 mm derri\u00e8re toute la face du mur, plus 15 cm de gravier compact\u00e9 en fond de tranch\u00e9e. Pour un mur de 6 m sur 1 m, comptez environ 2 m\u00b3 de gravier." },
    { question: "Quel bloc pour un mur de sout\u00e8nement ?", answer: "Pour les murs DIY de moins de 1,2 m, les blocs paysagers embo\u00eetables sont le meilleur choix. Pour les murs structurels de plus de 1,2 m, des parpaings avec ferraillage et calcul BET sont n\u00e9cessaires." },
    { question: "Quelle profondeur pour la fondation d\u2019un mur de sout\u00e8nement ?", answer: "La tranch\u00e9e doit faire au moins 15 cm de profondeur avec 15 cm de gravier compact\u00e9. En zone de gel, le fond de fouille doit descendre sous la profondeur de gel (60 \u00e0 80 cm en France m\u00e9tropolitaine)." },
  ],
};

export const epoxyCalculator: CalculatorSEOContent = {
  disclaimer: "Les taux de rendement varient selon le produit, la porosit\u00e9 du support et la m\u00e9thode d\u2019application. Le standard de 10 m\u00b2 par litre s\u2019applique \u00e0 la plupart des \u00e9poxy pour sol de garage.",
  howToUse: ["Mesurez la longueur et la largeur de votre sol en m\u00e8tres.", "S\u00e9lectionnez 1 couche pour une base color\u00e9e ou 2 couches pour une durabilit\u00e9 maximale.", "Ajustez le rendement par litre si votre produit indique un taux diff\u00e9rent (d\u00e9faut : 10 m\u00b2/l).", "Cliquez sur Calculer pour obtenir litres, nombre de kits et estimation de co\u00fbt."],
  materialInfo: "La r\u00e9sine \u00e9poxy pour sol est un rev\u00eatement bi-composant (r\u00e9sine + durcisseur) qui durcit en une surface brillante, dure et r\u00e9sistante aux produits chimiques. C\u2019est le rev\u00eatement de sol de garage le plus populaire en France.\n\nTrois types principaux : l\u2019\u00e9poxy \u00e0 base d\u2019eau (30 \u00e0 60 EUR/litre, 10 m\u00b2 de couverture, faible odeur), l\u2019\u00e9poxy solvanté (50 \u00e0 90 EUR/litre, plus durable), et l\u2019\u00e9poxy 100% solides (80 \u00e0 150 EUR/litre, qualit\u00e9 professionnelle).\n\nLa pr\u00e9paration du support est l\u2019\u00e9tape la plus critique. Le b\u00e9ton doit \u00eatre propre, sec et profil\u00e9. Le pon\u00e7age, grenaillage ou mordancage \u00e0 l\u2019acide cr\u00e9e le profil n\u00e9cessaire \u00e0 l\u2019adh\u00e9rence. Un b\u00e9ton neuf doit s\u00e9cher au moins 28 jours. Test d\u2019humidit\u00e9 obligatoire : coller un film PE 60\u00d760 cm pendant 24 h.\n\nTemp\u00e9rature d\u2019application entre 10\u00b0C et 30\u00b0C. Les syst\u00e8mes 2 couches sont carrossables en 3 \u00e0 5 jours. Produits disponibles dans les grandes surfaces de bricolage (Leroy Merlin, Castorama, Brico D\u00e9p\u00f4t) et chez les distributeurs sp\u00e9cialis\u00e9s.",
  nextSteps: [{ label: "Calculateur de peinture", href: "/calculators/finishing/paint-coverage-calculator/" }, { label: "Calculateur de dalle b\u00e9ton", href: "/calculators/foundation/concrete-slab-calculator/" }],
  installationTips: ["R\u00e9alisez un test d\u2019humidit\u00e9 (film PE 60\u00d760 cm coll\u00e9 24 h) avant de commencer.", "Poncez ou mordancez le b\u00e9ton pour cr\u00e9er un profil d\u2019accroche.", "M\u00e9langez partie A et B soigneusement pendant le temps indiqu\u00e9 (g\u00e9n\u00e9ralement 3 min), puis respectez le temps d\u2019induction.", "Travaillez par zones en maintenant un bord mouill\u00e9.", "Attendez 12 \u00e0 24 h entre les couches et 72 h avant circulation pi\u00e9tonne l\u00e9g\u00e8re."],
  commonMistakes: ["N\u00e9gliger la pr\u00e9paration du support \u2014 cause n\u00b01 de d\u00e9collement.", "Appliquer sur support humide \u2014 provoque cloquage et d\u00e9lamination.", "Travailler hors plage de temp\u00e9rature \u2014 en dessous de 10\u00b0C l\u2019\u00e9poxy durcit trop lentement.", "M\u00e9langer trop de produit \u2014 la r\u00e9action exothermique peut faire g\u00e9lifier le m\u00e9lange en minutes.", "Ne pas appliquer de finition \u2014 l\u2019\u00e9poxy nu jaunit aux UV."],
  faqs: [
    { question: "Combien d\u2019\u00e9poxy pour un garage ?", answer: "Un garage double standard fait environ 36 m\u00b2. \u00c0 10 m\u00b2 par litre, il faut environ 3,6 litres pour 1 couche ou 7,2 litres pour 2 couches." },
    { question: "Combien co\u00fbte un sol \u00e9poxy ?", answer: "En DIY, comptez 15 \u00e0 40 EUR/m\u00b2 en mat\u00e9riel. Un garage de 36 m\u00b2 co\u00fbte 300 \u00e0 700 EUR. La pose professionnelle co\u00fbte 40 \u00e0 100 EUR/m\u00b2." },
    { question: "Une couche d\u2019\u00e9poxy suffit-elle ?", answer: "Une couche offre une couverture acceptable pour un usage l\u00e9ger. Deux couches offrent une durabilit\u00e9 nettement meilleure." },
    { question: "Combien de temps dure un sol \u00e9poxy ?", answer: "Correctement appliqu\u00e9, un sol \u00e9poxy dure 5 \u00e0 10 ans dans un garage r\u00e9sidentiel. L\u2019\u00e9poxy professionnel avec finition polyaspartique peut durer 15 \u00e0 20 ans." },
    { question: "Faut-il un primaire avant l\u2019\u00e9poxy ?", answer: "La plupart des kits grand public n\u2019en n\u00e9cessitent pas \u2014 la premi\u00e8re couche fait office de primaire. Pour un b\u00e9ton tr\u00e8s poreux, un primaire d\u2019accrochage am\u00e9liore l\u2019adh\u00e9rence." },
    { question: "Peut-on appliquer de l\u2019\u00e9poxy sur une ancienne peinture ?", answer: "Non, l\u2019\u00e9poxy n\u2019adh\u00e8re pas sur la plupart des peintures. Il faut retirer l\u2019ancien rev\u00eatement par pon\u00e7age ou d\u00e9capage chimique." },
  ],
};

export const pondCalculator: CalculatorSEOContent = {
  disclaimer: "Les calculs de volume sont approximatifs. La taille de la b\u00e2che inclut 60 cm de d\u00e9passement par c\u00f4t\u00e9. Le dimensionnement de la pompe suppose un brassage complet toutes les 2 heures.",
  howToUse: ["Entrez la longueur maximale de votre bassin en m\u00e8tres.", "Entrez la largeur maximale en m\u00e8tres.", "Entrez la profondeur maximale \u2014 0,6 \u00e0 1 m pour jardins aquatiques, 1 \u00e0 1,5 m pour bassins \u00e0 ko\u00ef.", "S\u00e9lectionnez la forme : rectangulaire, ovale ou en haricot.", "Cliquez sur Calculer pour volume, taille de b\u00e2che, d\u00e9bit de pompe et g\u00e9otextile."],
  materialInfo: "Un bassin de jardin est un plan d\u2019eau cr\u00e9\u00e9 \u00e0 l\u2019aide d\u2019une b\u00e2che souple ou d\u2019un bassin pr\u00e9form\u00e9 pour accueillir poissons, plantes aquatiques ou servir d\u2019\u00e9l\u00e9ment d\u00e9coratif.\n\nLes b\u00e2ches EPDM (1,0 mm) sont le standard \u2014 souples, r\u00e9sistantes aux UV, s\u00fbres pour les poissons, dur\u00e9e de vie 20 \u00e0 30 ans. Co\u00fbt : 5 \u00e0 12 EUR/m\u00b2. Les b\u00e2ches PVC sont moins ch\u00e8res (3 \u00e0 7 EUR/m\u00b2) mais durent 10 \u00e0 15 ans.\n\nLa taille de b\u00e2che se calcule : (longueur + 2\u00d7profondeur + 0,6 m) \u00d7 (largeur + 2\u00d7profondeur + 0,6 m). Les pompes doivent brasser tout le volume toutes les 2 h \u2014 un bassin de 4 000 l n\u00e9cessite 2 000 l/h minimum. Pour les ko\u00ef, brassage toutes les heures.\n\nLe g\u00e9otextile (feutre 300 g/m\u00b2) sous la b\u00e2che prot\u00e8ge des racines et pierres. Bordures en pierre naturelle pour masquer les bords. Budget total pour un bassin de 2 000 l : 500 \u00e0 1 500 EUR en DIY.\n\nEn France, les bassins de plus de 100 m\u00b2 de surface n\u00e9cessitent une d\u00e9claration pr\u00e9alable. La s\u00e9curit\u00e9 des enfants impose une cl\u00f4ture ou barri\u00e8re conforme \u00e0 la norme NF P90-306 pour les plans d\u2019eau de plus de 1 m de profondeur.",
  nextSteps: [{ label: "Calculateur de gravier", href: "/calculators/foundation/gravel-calculator/" }, { label: "Calculateur de trous de poteau", href: "/calculators/outdoor/post-hole-calculator/" }],
  installationTips: ["Placez le bassin o\u00f9 il re\u00e7oit 4 \u00e0 6 h de soleil partiel \u2014 le plein soleil favorise les algues.", "V\u00e9rifiez l\u2019emplacement des r\u00e9seaux souterrains avant de creuser.", "Creusez des paliers \u00e0 30 cm pour les plantes de berge avant d\u2019atteindre la profondeur finale.", "Posez 5 cm de sable ou un feutre g\u00e9otextile sur toute l\u2019excavation avant la b\u00e2che.", "Remplissez lentement au tuyau en lissant la b\u00e2che au fur et \u00e0 mesure.", "Faites tourner pompe et filtre au moins 2 semaines avant d\u2019introduire des poissons."],
  commonMistakes: ["Sous-dimensionner la b\u00e2che \u2014 calculez toujours longueur + (2\u00d7profondeur) + 0,6 m par dimension.", "Omettre le g\u00e9otextile \u2014 racines et cailloux percent la b\u00e2che par en dessous.", "Sous-dimensionner la pompe \u2014 mauvais brassage = eau stagnante et algues.", "Profondeur insuffisante \u2014 les bassins de moins de 60 cm surchauffent en \u00e9t\u00e9 et g\u00e8lent en hiver.", "Construire trop pr\u00e8s des arbres \u2014 les feuilles mortes appauvrissent l\u2019eau en oxyg\u00e8ne."],
  faqs: [
    { question: "Combien de litres fait mon bassin ?", answer: "Bassins rectangulaires : longueur \u00d7 largeur \u00d7 profondeur (m\u00e8tres) \u00d7 1 000 = litres. Ovales : multiplier par 0,8. Haricot : multiplier par 0,7. Exemple : 3\u00d72,5\u00d71 m = 7 500 litres." },
    { question: "Quelle taille de b\u00e2che ?", answer: "B\u00e2che = (longueur + 2\u00d7profondeur + 0,6) \u00d7 (largeur + 2\u00d7profondeur + 0,6). Pour un bassin 3\u00d72,5\u00d71 m : b\u00e2che de 5,6\u00d75,1 m minimum." },
    { question: "Quelle pompe pour mon bassin ?", answer: "Multipliez le volume en litres par 0,5 pour le d\u00e9bit minimum en l/h. Un bassin de 8 000 l n\u00e9cessite au moins 4 000 l/h." },
    { question: "Combien co\u00fbte un bassin de jardin ?", answer: "Un jardin aquatique de 2 000 l co\u00fbte 500 \u00e0 1 500 EUR en DIY. Un bassin de 4 000\u20138 000 l avec pompe, filtre et pierres co\u00fbte 1 500 \u00e0 4 000 EUR DIY." },
    { question: "Quelle profondeur pour un bassin \u00e0 poissons ?", answer: "Poissons rouges : minimum 80 cm. Ko\u00ef : au moins 1,2 m, id\u00e9alement 1,5 m pour une zone hors-gel en hiver." },
    { question: "Faut-il un filtre pour un bassin ?", answer: "Oui si vous avez des poissons. Un filtre biologique h\u00e9berge les bact\u00e9ries qui convertissent l\u2019ammoniac toxique en nitrates inoffensifs." },
  ],
};

// ─── STAIRS ──────────────────────────────────────────────────────────────────

const stairCalculatorFR: CalculatorSEOContent = {
  disclaimer:
    "Ce calculateur fournit des estimations bas\u00e9es sur les normes de construction r\u00e9sidentielle fran\u00e7aises (DTU, NF P 01-012). V\u00e9rifiez toujours aupr\u00e8s de votre mairie avant la construction. Hauteur de marche max. 210 mm, giron min. 220 mm.",
  howToUse: [
    "Mesurez la hauteur totale (distance verticale entre les sols finis) en mm.",
    "Entrez le giron souhait\u00e9 (220 mm minimum recommand\u00e9).",
    "Entrez la largeur de l'escalier (800 mm minimum pour r\u00e9sidentiel).",
    "Cliquez sur Calculer pour obtenir le nombre de marches, hauteur, giron et longueur de limon.",
  ],
  materialInfo:
    "La construction d'escalier comprend plusieurs composants cl\u00e9s : limons (cr\u00e9maill\u00e8res), marches (girons), contremarches et mains courantes. Les limons sont les \u00e9l\u00e9ments structuraux diagonaux qui supportent l'escalier, g\u00e9n\u00e9ralement d\u00e9coup\u00e9s dans des planches de 50\u00d7300 mm pour les vol\u00e9es droites. La norme fran\u00e7aise (DTU et NF P 01-012) r\u00e9git la conception des escaliers r\u00e9sidentiels : hauteur de marche id\u00e9ale 170\u2013210 mm, giron minimum 220 mm, largeur minimum 800 mm (900 mm recommand\u00e9). La formule de Blondel (2 \u00d7 hauteur + giron = 600\u2013640 mm) garantit le confort. Les marches sont souvent en bois massif de 36\u201340 mm (ch\u00eane, h\u00eatre, fr\u00eane) ou en composite. Le nez de marche d\u00e9passe de 20\u201330 mm. Les contremarches utilisent des planches de 18\u201325 mm. Pour les escaliers ext\u00e9rieurs, le bois trait\u00e9 autoclave (classe 4) ou le composite r\u00e9siste aux intemp\u00e9ries. Les escaliers int\u00e9rieurs utilisent souvent des marches en bois dur (ch\u00eane, h\u00eatre, fr\u00eane) pour la durabilit\u00e9 et l'esth\u00e9tique. Un escalier int\u00e9rieur standard co\u00fbte 2 000\u20138 000 \u20ac en mat\u00e9riaux pour une vol\u00e9e droite. Les marches massives en ch\u00eane ajoutent 500\u20132 000 \u20ac. La hauteur libre minimum est de 2 100 mm (NF P 01-012).",
  nextSteps: [
    { label: "Calculateur de Limons", href: "/calculators/stairs/stair-stringer-calculator/" },
    { label: "Calculateur Giron/Hauteur", href: "/calculators/stairs/rise-over-run-calculator/" },
    { label: "Calculateur avec Palier", href: "/calculators/stairs/stair-landing-calculator/" },
    { label: "Calculateur Escalier Terrasse", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Utilisez toujours une \u00e9querre de charpentier avec des butoirs de marche pour des d\u00e9coupes r\u00e9guli\u00e8res.",
    "R\u00e9duisez la premi\u00e8re contremarche de l'\u00e9paisseur d'une marche pour \u00e9galiser toutes les hauteurs visibles.",
    "Fixez les limons au chevron d'entr\u00e9e avec des connecteurs m\u00e9talliques (type Simpson).",
    "Pr\u00e9-percez tous les trous de vis pour \u00e9viter les fissures.",
    "Installez une main courante provisoire pendant la construction pour la s\u00e9curit\u00e9.",
  ],
  commonMistakes: [
    "Ne pas tenir compte de l'\u00e9paisseur du rev\u00eatement de sol en haut et en bas \u2014 cela modifie la premi\u00e8re et derni\u00e8re hauteur.",
    "Hauteurs de marche irr\u00e9guli\u00e8res \u2014 la norme autorise max. 5 mm d'\u00e9cart. Les in\u00e9galit\u00e9s sont un risque de tr\u00e9buchement.",
    "Utiliser des planches de 50\u00d7250 mm au lieu de 50\u00d7300 mm \u2014 apr\u00e8s les entailles, il ne reste pas assez de bois porteur.",
    "Oublier la hauteur libre \u2014 mesurez 2 100 mm verticalement depuis chaque nez de marche au plafond.",
    "Ne pas v\u00e9rifier la r\u00e9glementation locale \u2014 les DTU peuvent varier selon le d\u00e9partement.",
  ],
  faqs: [
    { question: "Comment calculer le nombre de marches ?", answer: "Mesurez la hauteur totale entre sols finis en mm et divisez par la hauteur id\u00e9ale (170\u2013180 mm). Arrondissez au nombre entier. Exemple : 2 700 mm / 180 = 15 contremarches et 14 girons (un giron de moins car le palier sup\u00e9rieur sert de derni\u00e8re marche)." },
    { question: "Que dit la norme pour les escaliers r\u00e9sidentiels ?", answer: "La NF P 01-012 et les DTU exigent : hauteur de marche 170\u2013210 mm, giron min. 220 mm, largeur min. 800 mm (900 mm recommand\u00e9), hauteur libre 2 100 mm, main courante d'un c\u00f4t\u00e9 (900\u20131 000 mm) pour 3+ marches. \u00c9cart max. entre hauteurs : 5 mm." },
    { question: "Quel est l'angle id\u00e9al d'un escalier ?", answer: "L'angle id\u00e9al est entre 25\u00b0 et 37\u00b0, correspondant \u00e0 une hauteur de 170\u2013190 mm avec un giron de 250\u2013280 mm. La formule de Blondel (2h + g = 600\u2013640 mm) garantit le confort. Au-del\u00e0 de 42\u00b0, l'escalier devient difficile." },
    { question: "Quelle longueur de limon faut-il ?", answer: "Longueur du limon = racine carr\u00e9e de (hauteur\u00b2 + longueur de foul\u00e9e\u00b2). Exemple : hauteur 2 700 mm, foul\u00e9e 3 780 mm = \u221a(2 700\u00b2 + 3 780\u00b2) \u2248 4 645 mm. Pr\u00e9voyez 300 mm de plus pour les ajustements." },
    { question: "Combien co\u00fbte un escalier en France ?", answer: "Escalier int\u00e9rieur droit (14 marches) : 2 000\u20138 000 \u20ac en mat\u00e9riaux. Ext\u00e9rieur en bois trait\u00e9 : 800\u20133 000 \u20ac. Pose professionnelle : 1 500\u20135 000 \u20ac de main-d'\u0153uvre. Marches en ch\u00eane massif : +500\u20132 000 \u20ac." },
    { question: "Combien de limons faut-il ?", answer: "Espacement max. 600 mm entre axes, 400 mm recommand\u00e9. Pour un escalier de 800 mm : 2 limons. Au-del\u00e0 de 1 000 mm : 3 limons (deux ext\u00e9rieurs + un central). Au-del\u00e0 de 1 200 mm : 4 limons." },
  ],
};

const stairStringerCalculatorFR: CalculatorSEOContent = {
  disclaimer:
    "Les calculs de limons supposent des limons \u00e0 cr\u00e9maill\u00e8re standard en planches de 50\u00d7300 mm. V\u00e9rifiez qu'il reste au moins 90 mm de bois apr\u00e8s les entailles. Consultez votre DTU local.",
  howToUse: [
    "Entrez la hauteur totale en mm.",
    "Entrez le giron par marche (min. 220 mm recommand\u00e9).",
    "Entrez le nombre total de marches (utilisez le Calculateur d'Escalier).",
    "Entrez la largeur de l'escalier pour calculer le nombre de limons.",
  ],
  materialInfo:
    "Les limons d'escalier sont la colonne vert\u00e9brale de tout escalier, supportant le poids des marches, contremarches et tous les utilisateurs. Les limons standard sont d\u00e9coup\u00e9s dans des planches de 50\u00d7300 mm (2\u00d712 pouces), offrant suffisamment de mati\u00e8re pour les entailles tout en maintenant les 90 mm de bois non entaill\u00e9 requis. Pour les applications ext\u00e9rieures, utilisez du bois trait\u00e9 autoclave classe 4 (pin sylvestre ou Douglas) en 50\u00d7300 mm. Pour les escaliers int\u00e9rieurs, le bois s\u00e9ch\u00e9 en \u00e9tuve (sapin, \u00e9pic\u00e9a ou Douglas) est standard. N'utilisez jamais du 50\u00d7250 mm pour des limons \u00e0 cr\u00e9maill\u00e8re. Les limons ferm\u00e9s (non entaill\u00e9s) avec rainures frais\u00e9es peuvent \u00eatre en 50\u00d7250 mm ou bois lamell\u00e9-coll\u00e9. Les \u00e9querres m\u00e9talliques pour limons \u00e9liminent le besoin d'entailles. Les limons pr\u00e9fabriqu\u00e9s en acier co\u00fbtent 50\u2013120 \u20ac pi\u00e8ce. Une planche 50\u00d7300\u00d75 000 mm co\u00fbte 30\u201370 \u20ac selon l'essence. Budget : 100\u2013300 \u20ac par escalier pour le bois de limon seul.",
  nextSteps: [
    { label: "Calculateur d'Escalier", href: "/calculators/stairs/stair-calculator/" },
    { label: "Calculateur Giron/Hauteur", href: "/calculators/stairs/rise-over-run-calculator/" },
    { label: "Calculateur Co\u00fbt Bois", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Calculateur Escalier Terrasse", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Utilisez une \u00e9querre de charpentier avec butoirs pour des d\u00e9coupes r\u00e9p\u00e9tables.",
    "D\u00e9coupez avec une scie circulaire et finissez les angles int\u00e9rieurs \u00e0 la scie \u00e9go\u00efne \u2014 ne d\u00e9passez pas avec la circulaire.",
    "Testez le premier limon avant de couper les autres.",
    "Utilisez des connecteurs m\u00e9talliques de limon \u00e0 la connexion haute.",
    "Poncez et traitez tous les bois de bout sur les limons ext\u00e9rieurs.",
  ],
  commonMistakes: [
    "D\u00e9passer les entailles avec la scie circulaire \u2014 cela fragilise le limon. Finir \u00e0 l'\u00e9go\u00efne.",
    "Utiliser 50\u00d7250 au lieu de 50\u00d7300 \u2014 moins de 90 mm de bois restant apr\u00e8s entaille.",
    "Ne pas r\u00e9duire la premi\u00e8re contremarche d'une \u00e9paisseur de marche.",
    "Espacement de limons trop grand \u2014 max. 600 mm entre axes, 400 mm recommand\u00e9.",
  ],
  faqs: [
    { question: "Quel bois pour les limons ?", answer: "Planches 50\u00d7300 mm. Apr\u00e8s entailles, min. 90 mm restant. 50\u00d7300 (285 mm r\u00e9el) convient. 50\u00d7250 (235 mm r\u00e9el) insuffisant. Qualit\u00e9 C24 minimum." },
    { question: "Combien de limons pour 800 mm de large ?", answer: "2 limons pour 800 mm. 3 limons \u00e0 partir de 1 000 mm. 4 limons \u00e0 partir de 1 200 mm. Entraxe max. 600 mm, 400 mm recommand\u00e9." },
    { question: "Comment d\u00e9couper des limons ?", answer: "Tracez hauteur et giron sur une planche 50\u00d7300 avec \u00e9querre et butoirs. D\u00e9coupez \u00e0 la circulaire en s'arr\u00eatant aux angles. Finissez \u00e0 l'\u00e9go\u00efne." },
    { question: "Peut-on utiliser du 50\u00d7250 pour les limons ?", answer: "Non, pas pour les limons \u00e0 cr\u00e9maill\u00e8re. Avec 190 mm d'entaille, il ne reste que 45 mm. Utilisez 50\u00d7250 uniquement pour les limons ferm\u00e9s avec \u00e9querres m\u00e9talliques." },
    { question: "Quel espacement entre limons ?", answer: "Max. 600 mm entre axes. 400 mm recommand\u00e9 pour r\u00e9sidentiel. 300 mm pour escaliers commerciaux \u00e0 fort trafic." },
    { question: "Combien co\u00fbtent les limons ?", answer: "Planche 50\u00d7300\u00d75 m : 30\u201370 \u20ac. Bois trait\u00e9 ext\u00e9rieur : 40\u201385 \u20ac. Limons acier pr\u00e9fabriqu\u00e9s : 50\u2013120 \u20ac pi\u00e8ce. Pour un escalier 2 limons : 60\u2013170 \u20ac de bois." },
  ],
};

const riseOverRunCalculatorFR: CalculatorSEOContent = {
  disclaimer:
    "Les calculs de giron/hauteur fonctionnent pour escaliers, rampes, toits et toute surface inclin\u00e9e. Pour les escaliers, la norme exige une hauteur max. de 210 mm et un giron min. de 220 mm. Pour les rampes PMR : pente max. 5 %.",
  howToUse: [
    "Entrez la hauteur (distance verticale) en mm.",
    "Entrez le giron (distance horizontale) en mm.",
    "Cliquez sur Calculer pour le rapport de pente, pourcentage, angle et description.",
    "Fonctionne pour escaliers, rampes, toits, all\u00e9es et toute surface inclin\u00e9e.",
  ],
  materialInfo:
    "Le rapport giron/hauteur est la mesure fondamentale de la pente de toute surface inclin\u00e9e. Pour les escaliers, la hauteur est la distance verticale de chaque marche et le giron est la profondeur horizontale. La norme fran\u00e7aise sp\u00e9cifie une hauteur de 170\u2013210 mm et un giron minimum de 220 mm. La formule de Blondel (2 \u00d7 hauteur + giron = 600\u2013640 mm) assure le confort, id\u00e9al \u00e0 630 mm. Pour les toits, la pente est exprim\u00e9e en degr\u00e9s ou pourcentage. Pour les rampes d'accessibilit\u00e9 PMR, la norme NF P 98-350 exige une pente max. de 5 % (2,9\u00b0) pour les rampes longues et 8 % pour les rampes courtes (<2 m). Les all\u00e9es ne doivent pas d\u00e9passer 15 % de pente pour un acc\u00e8s s\u00fbr. Comprendre le rapport giron/hauteur permet de v\u00e9rifier la conformit\u00e9, calculer les longueurs de mat\u00e9riaux et assurer la s\u00e9curit\u00e9 de tout projet en pente.",
  nextSteps: [
    { label: "Calculateur d'Escalier", href: "/calculators/stairs/stair-calculator/" },
    { label: "Calculateur de Limons", href: "/calculators/stairs/stair-stringer-calculator/" },
    { label: "Calculateur Pente de Toit", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Calculateur Inclinaison Toit", href: "/calculators/roofing/roof-slope-calculator/" },
  ],
  installationTips: [
    "V\u00e9rifiez toujours hauteur et giron au niveau et au m\u00e8tre apr\u00e8s installation.",
    "Pour les escaliers, v\u00e9rifiez que toutes les hauteurs sont \u00e0 5 mm pr\u00e8s.",
    "Utilisez un rapporteur num\u00e9rique pour confirmer les angles pendant la construction.",
    "Pour les rampes, v\u00e9rifiez la pente en plusieurs points \u2014 les tassements modifient l'angle.",
  ],
  commonMistakes: [
    "Confondre hauteur et giron \u2014 la hauteur est toujours verticale, le giron toujours horizontal.",
    "Ne pas compter l'\u00e9paisseur du rev\u00eatement de sol dans la hauteur totale.",
    "M\u00e9langer les unit\u00e9s \u2014 hauteur et giron doivent \u00eatre dans la m\u00eame unit\u00e9.",
    "Oublier que la pente de toit se r\u00e9f\u00e8re \u00e0 100 cm de course horizontale.",
  ],
  faqs: [
    { question: "Qu'est-ce que le rapport giron/hauteur ?", answer: "C'est le rapport entre la hauteur verticale et la distance horizontale d'une surface inclin\u00e9e. Exemple : 180 mm de hauteur sur 270 mm de giron = ratio 0,67, 67 %, ou 33,7\u00b0." },
    { question: "Comment calculer giron et hauteur ?", answer: "Mesurez la hauteur totale entre sols finis. Divisez par 170\u2013180 mm = nombre de marches. Hauteur r\u00e9elle = hauteur totale / nombre. Giron min. 220 mm. Foul\u00e9e = (marches - 1) \u00d7 giron." },
    { question: "Quel giron/hauteur confortable ?", answer: "Formule de Blondel : 2h + g = 600\u2013640 mm (id\u00e9al 630 mm). Exemple : h = 175 mm, g = 280 mm \u2192 630 mm. Hauteurs < 140 mm trop plates, > 210 mm trop raides." },
    { question: "Quelle pente pour une rampe PMR ?", answer: "Norme NF P 98-350 : max. 5 % (2,9\u00b0) pour rampes longues, 8 % pour rampes courtes < 2 m. Soit 50 mm de mont\u00e9e pour 1 000 mm de course." },
    { question: "Comment convertir en degr\u00e9s ?", answer: "Angle = arctan(hauteur / giron) \u00d7 180 / \u03c0. Exemple : 180/270 = arctan(0,667) = 33,7\u00b0." },
    { question: "Pente maximale pour une all\u00e9e ?", answer: "15 % recommand\u00e9 (8,5\u00b0), certaines communes autorisent 25 % sur courte distance. 10 % id\u00e9al pour all\u00e9es r\u00e9sidentielles." },
  ],
};

const spiralStaircaseCalculatorFR: CalculatorSEOContent = {
  disclaimer:
    "Les escaliers en colima\u00e7on ont des exigences sp\u00e9cifiques diff\u00e9rentes des escaliers droits. Largeur libre min. 700 mm, hauteur libre 2 100 mm, hauteur de marche max. 210 mm. V\u00e9rifiez votre r\u00e9glementation locale.",
  howToUse: [
    "Mesurez la hauteur d'\u00e9tage (distance verticale entre sols finis).",
    "Entrez le diam\u00e8tre de la tr\u00e9mie (ouverture circulaire dans le plancher).",
    "Entrez la rotation totale en degr\u00e9s (360\u00b0 pour un tour complet).",
    "Cliquez sur Calculer pour le nombre de marches, hauteur et dimensions.",
  ],
  materialInfo:
    "Les escaliers en colima\u00e7on sont des alternatives compactes aux escaliers droits, s'ins\u00e9rant dans une tr\u00e9mie circulaire \u00e0 partir de 1 200 mm de diam\u00e8tre (1 500\u20131 800 mm recommand\u00e9). La r\u00e9glementation fran\u00e7aise exige : largeur libre min. 700 mm du poteau central au garde-corps, hauteur de marche max. 210 mm, profondeur de marche min. 150 mm \u00e0 la ligne de foul\u00e9e (300 mm du bord \u00e9troit), marches identiques. Hauteur libre min. 2 100 mm. Les escaliers en colima\u00e7on sont disponibles en acier, aluminium, bois et composite. Les kits pr\u00e9fabriqu\u00e9s en acier co\u00fbtent 1 500\u20136 000 \u20ac. Les escaliers sur mesure en bois ou fer forg\u00e9 : 5 000\u201325 000 \u20ac. Le poteau central (f\u00fbt) est l'\u00e9l\u00e9ment porteur principal, ancr\u00e9 au sol avec des boulons ou platine. La plupart tournent dans le sens horaire (mont\u00e9e), favorisant les droitiers.",
  nextSteps: [
    { label: "Calculateur d'Escalier", href: "/calculators/stairs/stair-calculator/" },
    { label: "Calculateur Giron/Hauteur", href: "/calculators/stairs/rise-over-run-calculator/" },
    { label: "Calculateur avec Palier", href: "/calculators/stairs/stair-landing-calculator/" },
  ],
  installationTips: [
    "V\u00e9rifiez que la tr\u00e9mie est parfaitement circulaire et de niveau avant de poser le poteau central.",
    "Ancrez la platine du poteau avec au moins quatre boulons M12 dans la structure du plancher.",
    "Assemblez les marches de bas en haut, en v\u00e9rifiant le niveau et l'angle \u00e0 chaque marche.",
    "Installez la main courante en continu du bas jusqu'en haut.",
    "V\u00e9rifiez la hauteur libre \u00e0 chaque point de la spirale.",
  ],
  commonMistakes: [
    "Choisir un diam\u00e8tre trop petit \u2014 1 200 mm est le minimum mais tr\u00e8s \u00e9troit. 1 500 mm minimum pour usage quotidien.",
    "Ne pas v\u00e9rifier la circularit\u00e9 de la tr\u00e9mie \u2014 une ouverture ovale cr\u00e9e des espacements in\u00e9gaux.",
    "Oublier la plate-forme d'arriv\u00e9e qui remplace une marche dans la rotation.",
    "Ignorer la difficult\u00e9 de d\u00e9m\u00e9nagement \u2014 les colima\u00e7ons ne conviennent pas aux gros meubles.",
  ],
  faqs: [
    { question: "Quel diam\u00e8tre minimum pour un colima\u00e7on ?", answer: "Largeur libre min. 700 mm du poteau au garde-corps. Avec poteau 100 mm, le diam\u00e8tre minimum est env. 1 200 mm. Recommand\u00e9 : 1 500\u20131 800 mm pour un usage quotidien confortable." },
    { question: "Combien de marches pour un colima\u00e7on ?", answer: "D\u00e9pend de la hauteur d'\u00e9tage et de la hauteur max. (210 mm). Pour 2 700 mm : min. 13 marches (2 700 / 210). 360\u00b0 avec 13 marches = 28\u00b0 par marche." },
    { question: "Un colima\u00e7on est-il conforme ?", answer: "Oui, autoris\u00e9 pour usage r\u00e9sidentiel : 700 mm largeur libre, 210 mm hauteur max., 150 mm profondeur min. \u00e0 la ligne de foul\u00e9e, 2 100 mm hauteur libre, marches identiques. Peut ne pas \u00eatre accept\u00e9 comme escalier principal dans certaines communes." },
    { question: "Combien co\u00fbte un escalier en colima\u00e7on ?", answer: "Kit acier : 1 500\u20136 000 \u20ac. Sur mesure bois : 5 000\u201320 000 \u20ac. Haute gamme fer forg\u00e9/verre : 25 000+ \u20ac. Pose : 500\u20132 000 \u20ac (kit), 2 000\u20136 000 \u20ac (sur mesure)." },
    { question: "Un colima\u00e7on peut-il \u00eatre le seul escalier ?", answer: "Cela d\u00e9pend de la r\u00e9glementation locale. Certaines communes l'acceptent comme escalier principal, d'autres le r\u00e9servent au secondaire. Le r\u00e8glement s\u00e9curit\u00e9 incendie peut exiger un escalier classique de 900 mm minimum." },
    { question: "Sens de rotation ?", answer: "G\u00e9n\u00e9ralement horaire en montant (droitiers). Le sens est un choix de conception \u2014 consid\u00e9rez l'agencement de l'\u00e9tage sup\u00e9rieur." },
  ],
};

const stairLandingCalculatorFR: CalculatorSEOContent = {
  disclaimer:
    "Les escaliers avec palier doivent respecter toutes les exigences pour chaque vol\u00e9e. Le palier doit \u00eatre au moins aussi large que l'escalier et 900 mm de profondeur. Certaines r\u00e9glementations exigent un palier au-del\u00e0 de 3 700 mm de hauteur.",
  howToUse: [
    "Mesurez la hauteur totale entre sols finis en mm.",
    "Entrez la profondeur du palier (min. 900 mm).",
    "Entrez le giron souhait\u00e9 par marche (min. 220 mm).",
    "Cliquez sur Calculer pour les marches par vol\u00e9e, hauteur du palier et longueur totale.",
  ],
  materialInfo:
    "Les paliers d'escalier sont des plates-formes interm\u00e9diaires divisant un escalier long en deux vol\u00e9es ou plus. La norme exige que le palier soit au moins aussi large que l'escalier et 900 mm de profondeur dans le sens de circulation. Les paliers servent de point de repos, permettent les changements de direction (escaliers en L et en U) et am\u00e9liorent la s\u00e9curit\u00e9. De nombreuses r\u00e9glementations locales exigent un palier quand la hauteur d\u00e9passe 3 700 mm. Les paliers sont structur\u00e9s comme de petites sections de plancher avec solives, chevrons et plancher, support\u00e9s par des poteaux ou des murs. Pour les escaliers en L (virage 90\u00b0), le palier est g\u00e9n\u00e9ralement de 900\u00d7900 mm. Pour les escaliers en U (virage 180\u00b0), le palier est plus large. La structure utilise des solives 60\u00d7240 ou 60\u00d7300 mm. La surface du palier correspond au mat\u00e9riau de marche : panneau avec moquette ou parquet pour l'int\u00e9rieur, bois trait\u00e9 pour l'ext\u00e9rieur. Un palier ajoute 300\u20131 000 \u20ac en mat\u00e9riaux et 500\u20131 500 \u20ac de main-d'\u0153uvre.",
  nextSteps: [
    { label: "Calculateur d'Escalier", href: "/calculators/stairs/stair-calculator/" },
    { label: "Calculateur de Limons", href: "/calculators/stairs/stair-stringer-calculator/" },
    { label: "Calculateur Giron/Hauteur", href: "/calculators/stairs/rise-over-run-calculator/" },
    { label: "Calculateur Escalier Terrasse", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Structurez le palier comme une mini-section de plancher \u2014 solives 60\u00d7240 ou 60\u00d7300 mm \u00e0 400 mm d'entraxe.",
    "Fixez le palier aux murs adjacents avec une lambourde et tire-fonds ou vis structurelles.",
    "Le palier doit \u00eatre parfaitement de niveau \u2014 v\u00e9rifiez avec un niveau de 1,2 m dans les deux sens.",
    "La hauteur du palier doit correspondre exactement \u00e0 la hauteur calcul\u00e9e de la vol\u00e9e inf\u00e9rieure.",
    "Pour les escaliers en L ou U, construisez le palier avant de couper les limons de la vol\u00e9e sup\u00e9rieure.",
  ],
  commonMistakes: [
    "Palier trop peu profond \u2014 minimum 900 mm dans le sens de circulation.",
    "Ne pas traiter le palier comme un \u00e9l\u00e9ment structurel \u2014 il faut une vraie charpente, pas juste un panneau.",
    "Hauteurs in\u00e9gales \u00e0 la transition du palier.",
    "Oublier l'\u00e9paisseur du palier dans le calcul des hauteurs de vol\u00e9e.",
  ],
  faqs: [
    { question: "Quand faut-il un palier ?", answer: "Paliers obligatoires en haut et en bas. De nombreuses r\u00e9glementations exigent un palier au-del\u00e0 de 3 700 mm de hauteur (\u224819 marches). Obligatoire \u00e0 tout changement de direction. Escaliers ext\u00e9rieurs avec porte : palier 900 mm." },
    { question: "Quelle taille pour un palier ?", answer: "Au moins aussi large que l'escalier et 900 mm de profondeur. Pour un escalier de 800 mm : palier min. 800\u00d7900 mm. Escalier en U : le palier couvre la largeur des deux vol\u00e9es." },
    { question: "Diff\u00e9rence entre escalier en L et en U ?", answer: "L : virage 90\u00b0 avec palier carr\u00e9 (900\u00d7900 mm). U : virage 180\u00b0 avec palier rectangulaire plus large. Le U prend plus de largeur mais moins de longueur." },
    { question: "Comment calculer avec palier ?", answer: "Hauteur totale / hauteur id\u00e9ale = marches totales. Divisez en deux vol\u00e9es \u00e9gales. Hauteur palier = marches vol\u00e9e basse \u00d7 hauteur r\u00e9elle. Longueur totale = foul\u00e9es des deux vol\u00e9es + profondeur palier." },
    { question: "Le palier compte comme marche ?", answer: "Non. Le palier est une plate-forme au m\u00eame niveau que la derni\u00e8re marche de la vol\u00e9e inf\u00e9rieure. La premi\u00e8re contremarche de la vol\u00e9e sup\u00e9rieure part du palier." },
    { question: "Co\u00fbt d'un palier ?", answer: "Mat\u00e9riaux : 300\u20131 000 \u20ac. Main-d'\u0153uvre : 500\u20131 500 \u20ac. Total suppl\u00e9mentaire L : 800\u20132 500 \u20ac vs escalier droit. U : 1 200\u20133 500 \u20ac suppl\u00e9mentaires." },
  ],
};

// ─── REGISTRY MAP ─────────────────────────────────────────────────────────────

export const registryFR: Record<string, Record<string, CalculatorSEOContent>> = {
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
    "mortar-mix-calculator": mortarMixCalculator,
    "block-fill-calculator": blockFillCalculator,
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
    "plywood-calculator": plywoodCalculatorFR,
  },
  finishing: {
    "paint-coverage-calculator": paintCoverageCalculatorFR,
    "paint-cost-calculator": paintCostCalculatorFR,
    "primer-calculator": primerCalculatorFR,
    "epoxy-calculator": epoxyCalculator,
  },
  outdoor: {
    "deck-board-calculator": deckBoardCalculatorFR,
    "deck-footing-calculator": deckFootingCalculatorFR,
    "deck-railing-calculator": deckRailingCalculatorFR,
    "deck-stair-calculator": deckStairCalculatorFR,
    "post-hole-calculator": postHoleCalculatorFR,
    "pond-calculator": pondCalculator,
  },
  stairs: {
    "stair-calculator": stairCalculatorFR,
    "stair-stringer-calculator": stairStringerCalculatorFR,
    "rise-over-run-calculator": riseOverRunCalculatorFR,
    "spiral-staircase-calculator": spiralStaircaseCalculatorFR,
    "stair-landing-calculator": stairLandingCalculatorFR,
  },
};
