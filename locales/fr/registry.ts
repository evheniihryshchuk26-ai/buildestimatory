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
  },
  outdoor: {
    "deck-board-calculator": deckBoardCalculatorFR,
    "deck-footing-calculator": deckFootingCalculatorFR,
    "deck-railing-calculator": deckRailingCalculatorFR,
    "deck-stair-calculator": deckStairCalculatorFR,
  },
};
