import type { GuidesTranslations } from "@/lib/i18n/types";

const guides: GuidesTranslations = {
  breadcrumbGuides: "Gu\u00edas",

  index: {
    title: "Gu\u00edas de Construcci\u00f3n",
    metaDescription:
      "Gu\u00edas detalladas de construcci\u00f3n para constructores, contratistas y autoconstructores. Aprende sobre espaciado de estructura, selecci\u00f3n de materiales, normas de construcci\u00f3n y m\u00e1s.",
    heading: "Gu\u00edas de Construcci\u00f3n",
    description:
      "Gu\u00edas detalladas para ayudarte a tomar mejores decisiones en tu pr\u00f3ximo proyecto de construcci\u00f3n.",
    guides: [
      {
        title: "40 cm vs 60 cm Entre Centros: Gu\u00eda Completa",
        description:
          "Aprende cu\u00e1ndo usar separaci\u00f3n de 40 cm vs 60 cm entre centros para postes, viguetas y cabios. Incluye requisitos de norma, comparaci\u00f3n de costos e impacto en materiales.",
        href: "/guides/16-vs-24-on-center-spacing",
      },
    ],
  },

  spacingGuide: {
    title: "40 cm vs 60 cm Entre Centros: Gu\u00eda Completa",
    metaDescription:
      "Espaciado de 40 cm vs 60 cm entre centros explicado: cu\u00e1ndo usar cada uno para postes de muro, viguetas de piso y cabios de techo. Incluye normas de construcci\u00f3n, comparaci\u00f3n de costos e impacto en materiales.",

    heroTitle: "40 cm vs 60 cm Entre Centros",
    heroSubtitle: "Gu\u00eda Completa",
    heroDescription:
      "Todo lo que necesitas saber sobre la elecci\u00f3n entre separaci\u00f3n de 40 cm y 60 cm entre centros para postes de muro, viguetas de piso, viguetas de cielo y cabios de techo.",

    quickAnswerHeading: "Respuesta R\u00e1pida",
    quickAnswerText:
      "Usa separaci\u00f3n de 40 cm entre centros (e/c) para muros portantes, la mayor\u00eda de las viguetas de piso y cualquier aplicaci\u00f3n donde se requiera m\u00e1xima resistencia estructural. Usa 60 cm e/c para muros divisorios interiores no portantes, cerchas de techo y situaciones donde la norma lo permite y deseas reducir costos de material hasta un 33%.",

    whatIsHeading: "\u00bfQu\u00e9 es el Espaciado Entre Centros?",
    whatIsText1:
      "El espaciado entre centros (e/c) es la distancia medida desde el centro de un elemento estructural al centro del siguiente. Es la forma est\u00e1ndar en que los constructores y las normas de construcci\u00f3n especifican la separaci\u00f3n de postes, viguetas, cabios y cerchas en la construcci\u00f3n con estructura de madera.",
    whatIsText2:
      "Las dos medidas de espaciado entre centros m\u00e1s comunes en construcci\u00f3n residencial son 40 cm (equivalente a 16 pulgadas) y 60 cm (equivalente a 24 pulgadas). La elecci\u00f3n entre ambos afecta la capacidad estructural, el costo de materiales, el rendimiento del aislamiento y la compatibilidad con materiales de construcci\u00f3n est\u00e1ndar.",
    whatIsText3:
      "Los materiales de construcci\u00f3n est\u00e1ndar como las placas de madera contrachapada, OSB y paneles de yeso cart\u00f3n se fabrican en dimensiones compatibles con ambos espaciados, de modo que los bordes de los paneles siempre coincidan con un elemento estructural.",

    comparisonHeading: "40 cm e/c vs 60 cm e/c: Comparaci\u00f3n",
    comparisonSubheading:
      "C\u00f3mo se comparan los dos espaciados de estructura m\u00e1s comunes en cada aplicaci\u00f3n principal.",
    comparisonCol1: "Aplicaci\u00f3n",
    comparisonCol2: "40 cm Entre Centros",
    comparisonCol3: "60 cm Entre Centros",
    comparisonRows: [
      {
        category: "Muros Exteriores Portantes",
        oc16: "Requerido por la mayor\u00eda de las normas para postes de 5\u00d710 cm. Opci\u00f3n m\u00e1s resistente.",
        oc24: "Permitido con postes de 5\u00d715 cm en algunas jurisdicciones (verifica la norma local).",
      },
      {
        category: "Muros Interiores No Portantes",
        oc16: "Com\u00fan pero no requerido. M\u00e1s puntos de fijaci\u00f3n para gabinetes.",
        oc24: "Cumple con la norma. Ahorra ~33% en material de postes.",
      },
      {
        category: "Viguetas de Piso (5\u00d725 cm, claro t\u00edpico)",
        oc16: "Claros hasta ~4.9 m con pino grado estructural. Piso m\u00e1s r\u00edgido.",
        oc24: "Claros hasta ~4.0 m con la misma madera. Puede sentirse flexible.",
      },
      {
        category: "Viguetas de Cielo (sin almacenamiento en \u00e1tico)",
        oc16: "Est\u00e1ndar para almacenamiento en \u00e1tico. Soporta yeso m\u00e1s cargas.",
        oc24: "Adecuado para cielos con solo yeso cart\u00f3n sin almacenamiento.",
      },
      {
        category: "Cabios / Cerchas de Techo",
        oc16: "Usado en zonas de alta carga de nieve (>200 kg/m\u00b2).",
        oc24: "Est\u00e1ndar para cerchas fabricadas en zonas de clima moderado.",
      },
      {
        category: "Costo de Material (por metro lineal de muro)",
        oc16: "~$8\u2013$12 USD/m (m\u00e1s madera, m\u00e1s clavos).",
        oc24: "~$5\u2013$8 USD/m (menos postes, menos mano de obra).",
      },
      {
        category: "Aislamiento",
        oc16: "Rollos est\u00e1ndar R-13 a R-15 para muros de 10 cm, R-19 a R-21 para 15 cm.",
        oc24: "Cavidades m\u00e1s anchas permiten R-21+ para muros de 15 cm. Mejor rendimiento t\u00e9rmico.",
      },
      {
        category: "Soporte de Yeso Cart\u00f3n",
        oc16: "Excelente fijaci\u00f3n. Menor riesgo de clavos salidos y pandeo.",
        oc24: "Requiere yeso de 16 mm en cielos para prevenir pandeo.",
      },
    ],

    when16Heading: "Cu\u00e1ndo Usar Separaci\u00f3n de 40 cm Entre Centros",
    when16Intro:
      "La separaci\u00f3n de 40 cm entre centros es la opci\u00f3n m\u00e1s conservadora y com\u00fanmente utilizada. Aqu\u00ed se indica cu\u00e1ndo es requerida o fuertemente recomendada:",
    when16Items: [
      "Muros exteriores portantes \u2014 Requerido por la mayor\u00eda de las normas para postes de 5\u00d710 cm que soportan cargas de techo y piso.",
      "Viguetas de piso para claros largos \u2014 40 cm e/c permite que las viguetas cubran mayores distancias. Para una vigueta de 5\u00d725 cm en pino estructural, 40 cm e/c cubre hasta 4.9 m vs solo 4.0 m a 60 cm e/c.",
      "\u00c1reas que soportan acabados pesados \u2014 Pisos de cer\u00e1mica, cubiertas de piedra o gabinetes empotrados se benefician del soporte extra que brinda el entramado a 40 cm e/c.",
      "Zonas de alto viento o s\u00edsmicas \u2014 Las normas de construcci\u00f3n en zonas de huracanes y sismos frecuentemente exigen 40 cm e/c (o menos) para muros de corte.",
      "Viguetas de cielo con almacenamiento en \u00e1tico \u2014 Si el \u00e1tico se usar\u00e1 para almacenamiento o espacio habitable futuro, 40 cm e/c proporciona la capacidad de carga necesaria.",
      "Muros con revestimiento pesado \u2014 Fachada de ladrillo, estuco sobre OSB y revestimiento de fibrocemento rinden mejor con postes a 40 cm e/c.",
    ],
    when16Summary:
      "Conclusi\u00f3n: en caso de duda, 40 cm e/c es la opci\u00f3n m\u00e1s segura. El costo extra de material es modesto comparado con los beneficios estructurales.",

    when24Heading: "Cu\u00e1ndo Usar Separaci\u00f3n de 60 cm Entre Centros",
    when24Intro:
      "La separaci\u00f3n de 60 cm entre centros usa menos elementos estructurales y puede ahorrar costos significativos en material y mano de obra. Aqu\u00ed se indica cu\u00e1ndo es apropiado:",
    when24Items: [
      "Muros divisorios interiores no portantes \u2014 Las normas permiten 60 cm e/c para muros interiores que no soportan carga estructural. Esta es la aplicaci\u00f3n m\u00e1s com\u00fan.",
      "Cerchas de techo fabricadas \u2014 La mayor\u00eda de las cerchas manufacturadas est\u00e1n dise\u00f1adas para separaci\u00f3n de 60 cm e/c. La ingenier\u00eda de la cercha considera la separaci\u00f3n mayor.",
      "Construcci\u00f3n con estructura avanzada (OVE) \u2014 La Ingenier\u00eda de Valor \u00d3ptimo usa postes de 5\u00d715 cm a 60 cm e/c con placas superiores sencillas, reduciendo madera hasta un 30% mientras mejora el aislamiento.",
      "Muros de frontones \u2014 Los muros de frontones no estructurales sobre la l\u00ednea de techo t\u00edpicamente pueden usar separaci\u00f3n de 60 cm e/c.",
      "Viguetas de cielo (solo yeso cart\u00f3n) \u2014 Donde el cielo solo soporta yeso cart\u00f3n sin almacenamiento encima, 60 cm e/c cumple con la norma.",
      "Proyectos con presupuesto limitado \u2014 En una casa de 185 m\u00b2, cambiar muros no portantes a 60 cm e/c puede ahorrar $600\u2013$1,000 USD solo en madera.",
    ],
    when24Summary:
      "Conclusi\u00f3n: 60 cm e/c es una opci\u00f3n inteligente donde la norma lo permite, especialmente para muros no portantes y cerchas fabricadas.",

    codeHeading: "Requisitos de Norma de Construcci\u00f3n",
    codeIntro:
      "Las normas de construcci\u00f3n residencial proporcionan orientaci\u00f3n espec\u00edfica sobre cu\u00e1ndo se permite cada separaci\u00f3n. A continuaci\u00f3n los puntos clave (basados en el IRC como referencia internacional):",
    codeItems: [
      "Muros portantes exteriores: postes de 5\u00d710 cm a 40 cm e/c o postes de 5\u00d715 cm a 60 cm e/c (con revestimiento estructural aprobado).",
      "Muros divisorios interiores no portantes: postes de 5\u00d710 cm o 5\u00d78 cm a 60 cm e/c m\u00e1ximo.",
      "Claros de viguetas de piso: tablas especifican claros m\u00e1ximos para cada especie, grado y separaci\u00f3n (30 cm, 40 cm, 48 cm, 60 cm).",
      "Claros de cabios: tablas similares para cabios de techo a diversas separaciones.",
      "Aplicaci\u00f3n de yeso cart\u00f3n: yeso de 12.5 mm en muros hasta 60 cm e/c; yeso de 16 mm requerido en cielos a 60 cm e/c.",
      "Las normas locales pueden diferir de las referencias internacionales. Siempre consulta con tu autoridad de construcci\u00f3n local antes de finalizar los planos de estructura.",
    ],
    codeSummary:
      "Importante: Las normas de construcci\u00f3n son est\u00e1ndares m\u00ednimos. Tu ingeniero o la autoridad local pueden requerir separaciones menores seg\u00fan condiciones espec\u00edficas del sitio como tipo de suelo, exposici\u00f3n al viento o carga de nieve.",

    costHeading: "Comparaci\u00f3n de Costos: 40 cm vs 60 cm Entre Centros",
    costIntro:
      "El ahorro en materiales es una de las razones principales por las que los constructores consideran la separaci\u00f3n de 60 cm e/c. As\u00ed se desglosan los n\u00fameros:",
    costText1:
      "Para un muro est\u00e1ndar de 2.40 m de altura, la separaci\u00f3n de 40 cm e/c requiere un poste cada 40 cm \u2014 aproximadamente 2.5 postes por metro lineal de muro. A 60 cm e/c, necesitas aproximadamente 1.7 postes por metro lineal. Eso es una reducci\u00f3n del 33% en cantidad de postes.",
    costText2:
      "En una casa t\u00edpica de 185 m\u00b2 de una planta con ~60 metros lineales de muros divisorios interiores, cambiar de 40 cm a 60 cm e/c ahorra aproximadamente 50 postes. A $5\u2013$7 USD por poste (precios 2024 para madera de 5\u00d710\u00d7240 cm), eso es $250\u2013$350 USD solo en postes. Sumando la reducci\u00f3n en clavos, reducci\u00f3n en mano de obra (menos postes para cortar, cargar y clavar), el ahorro alcanza $600\u2013$1,000 USD.",
    costText3:
      "Sin embargo, no uses separaci\u00f3n de 60 cm e/c solo para ahorrar dinero en muros portantes. El costo de una falla estructural o violaci\u00f3n de norma supera por mucho cualquier ahorro en materiales. Los ahorros aplican solo donde 60 cm e/c cumple con la norma.",

    impactHeading: "Impacto en Otros Materiales",
    impactIntro:
      "La separaci\u00f3n de tu estructura no solo afecta la madera. Tiene un efecto en cadena en m\u00faltiples sistemas constructivos:",
    impactInsulationHeading: "Aislamiento",
    impactInsulationText:
      "Los rollos de fibra de vidrio vienen en anchos dise\u00f1ados para cavidades de 40 cm y 60 cm e/c. A 40 cm e/c, los rollos est\u00e1ndar miden 38 cm de ancho (R-13 o R-15 para muros de 10 cm). A 60 cm e/c, los rollos miden 58 cm. Las cavidades m\u00e1s anchas a 60 cm e/c en realidad mejoran el rendimiento t\u00e9rmico porque hay menos postes actuando como puentes t\u00e9rmicos. En estructura avanzada, postes de 5\u00d715 cm a 60 cm e/c pueden lograr ensamblajes de muro R-21 con rollos est\u00e1ndar.",
    impactDrywallHeading: "Yeso Cart\u00f3n",
    impactDrywallText:
      "El yeso cart\u00f3n est\u00e1ndar de 12.5 mm funciona bien en muros tanto a 40 cm como a 60 cm e/c. Sin embargo, en cielos, la norma requiere yeso de 16 mm cuando las viguetas o cerchas est\u00e1n separadas a 60 cm e/c para prevenir pandeo. El yeso de 16 mm cuesta aproximadamente 20\u201330% m\u00e1s por placa que el de 12.5 mm, lo cual compensa parcialmente el ahorro en estructura.",
    impactSheathingHeading: "Revestimiento y Fachada",
    impactSheathingText:
      "Los paneles de madera contrachapada y OSB funcionan en ambas separaciones ya que sus bordes coinciden con los elementos estructurales. Sin embargo, a 60 cm e/c, el panel cubre una mayor distancia sin apoyo entre postes. Para revestimiento estructural (como arriostramiento de muros), verifica que la clasificaci\u00f3n del panel coincida con la separaci\u00f3n de postes. Se requieren paneles clasificados para \"muro-60 cm e/c\" cuando se usa separaci\u00f3n de 60 cm en aplicaciones de revestimiento estructural.",

    calculatorCtaHeading: "Calcula Tus Materiales",
    calculatorCtaText:
      "Usa nuestras calculadoras gratuitas para obtener cantidades exactas de material para tu proyecto con separaci\u00f3n de 40 cm o 60 cm entre centros:",
    calculatorLinks: [
      {
        label: "Calculadora de Postes",
        href: "/calculators/wall-framing/stud-calculator",
        description: "Calcula la cantidad de postes necesarios para cualquier largo de muro y separaci\u00f3n.",
      },
      {
        label: "Calculadora de Viguetas de Piso",
        href: "/calculators/floor-framing/floor-joist-calculator",
        description: "Determina la cantidad de viguetas, separaci\u00f3n y viga perimetral para tu sistema de piso.",
      },
      {
        label: "Calculadora de Cabios",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calcula los cabios necesarios seg\u00fan el claro del techo, separaci\u00f3n y pendiente.",
      },
      {
        label: "Calculadora de Cerchas de Techo",
        href: "/calculators/roofing/roof-truss-calculator",
        description: "Estima la cantidad y separaci\u00f3n de cerchas para tu sistema de techo.",
      },
    ],

    faqHeading: "Preguntas Frecuentes",
    faqs: [
      {
        question: "\u00bfPuedo usar separaci\u00f3n de 60 cm entre centros para muros exteriores?",
        answer:
          "S\u00ed, pero solo con postes de 5\u00d715 cm y revestimiento estructural aprobado en la mayor\u00eda de las jurisdicciones. Las normas permiten postes de 5\u00d715 cm a 60 cm e/c para muros exteriores portantes hasta ciertas alturas y condiciones de carga. Siempre verifica con tu norma de construcci\u00f3n local.",
      },
      {
        question: "\u00bfEs mejor 40 cm o 60 cm entre centros para colgar gabinetes?",
        answer:
          "40 cm entre centros es mejor para la instalaci\u00f3n de gabinetes porque proporciona m\u00e1s puntos de fijaci\u00f3n. Con postes a 40 cm e/c, un gabinete superior de 90 cm alcanzar\u00e1 al menos dos postes. A 60 cm e/c, un gabinete angosto podr\u00eda atrapar solo un poste, requiriendo anclajes especiales para el otro punto de fijaci\u00f3n.",
      },
      {
        question: "\u00bfQu\u00e9 significa entre centros en construcci\u00f3n?",
        answer:
          "Entre centros (abreviado e/c) significa que la distancia se mide desde el centro de un elemento estructural al centro del elemento adyacente. Para postes a 40 cm entre centros, el centro de cada poste est\u00e1 a 40 cm del centro del siguiente poste. Esta medici\u00f3n estandarizada asegura espaciado consistente y compatibilidad con materiales de panel de 120 cm y 240 cm.",
      },
      {
        question: "\u00bfCu\u00e1nto dinero ahorra la separaci\u00f3n de 60 cm e/c?",
        answer:
          "Cambiar de 40 cm a 60 cm e/c en muros no portantes ahorra aproximadamente 33% en material de postes. Para una casa t\u00edpica de 185 m\u00b2, esto se traduce en $600\u2013$1,000 USD en ahorros combinados de madera, clavos y mano de obra. La cantidad exacta depende de los precios locales de madera y tarifas de mano de obra.",
      },
      {
        question: "\u00bfPuedo usar yeso cart\u00f3n de 12.5 mm en viguetas de cielo a 60 cm e/c?",
        answer:
          "No. La norma requiere yeso cart\u00f3n de 16 mm en cielos donde la estructura est\u00e1 separada a 60 cm e/c. Usar yeso de 12.5 mm a esta separaci\u00f3n causar\u00e1 pandeo con el tiempo, especialmente en condiciones de humedad. En muros, yeso de 12.5 mm es aceptable a 60 cm e/c.",
      },
      {
        question: "\u00bfQu\u00e9 es la estructura avanzada (OVE)?",
        answer:
          "La estructura avanzada, tambi\u00e9n llamada Ingenier\u00eda de Valor \u00d3ptimo (OVE), es una t\u00e9cnica de entramado que usa postes de 5\u00d715 cm a 60 cm e/c con placas superiores sencillas, esquinas de dos postes y bloqueo en escalera. Reduce el uso de madera hasta un 30% mientras permite aislamiento m\u00e1s grueso (R-21 vs R-13). Es reconocida por normas internacionales y promovida por organismos de eficiencia energ\u00e9tica.",
      },
      {
        question: "\u00bfLas cerchas de techo usan separaci\u00f3n de 40 cm o 60 cm entre centros?",
        answer:
          "La mayor\u00eda de las cerchas de techo fabricadas est\u00e1n dise\u00f1adas para separaci\u00f3n de 60 cm e/c. El fabricante de cerchas dise\u00f1a cada cercha para soportar las cargas requeridas a la separaci\u00f3n especificada. Sin embargo, en \u00e1reas con cargas de nieve pesadas (superior a 200 kg/m\u00b2), la separaci\u00f3n de 40 cm e/c puede ser especificada por el ingeniero.",
      },
      {
        question: "\u00bfLa separaci\u00f3n de postes afecta la eficiencia energ\u00e9tica?",
        answer:
          "S\u00ed. Los postes act\u00faan como puentes t\u00e9rmicos, conduciendo calor a trav\u00e9s del ensamblaje de muro. A 40 cm e/c, los postes representan aproximadamente el 25% del \u00e1rea del muro, reduciendo el valor R efectivo. A 60 cm e/c, los postes representan solo el 17% del \u00e1rea del muro, lo que mejora el valor R total del muro. Combinado con estructura de 5\u00d715 cm, la separaci\u00f3n de 60 cm e/c puede mejorar la eficiencia energ\u00e9tica del muro en un 15\u201320%.",
      },
    ],
  },
};

export default guides;
