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
      {
        title: "Tabla de Pendientes de Techo: Gu\u00eda de Referencia Completa",
        description:
          "Tabla completa de pendientes de techo con grados, porcentaje de inclinaci\u00f3n y multiplicadores para cada pendiente com\u00fan. Incluye recomendaciones por material y clima.",
        href: "/guides/roof-pitch-chart",
      },
      {
        title: "Pendiente M\u00ednima para Tejas, Metal y Teja de Barro",
        description:
          "Encuentra la pendiente m\u00ednima de techo para tejas asf\u00e1lticas, metal, teja de barro y m\u00e1s. Incluye referencias de norma y soluciones para techos de baja pendiente.",
        href: "/guides/minimum-roof-pitch-for-shingles",
      },
      {
        title: "Concreto Premezclado vs en Bultos: \u00bfCu\u00e1l Usar?",
        description:
          "Concreto premezclado (revolvedora) vs en bultos comparado: costo por metro c\u00fabico, resistencia, conveniencia y mejores usos. Aprende cu\u00e1ndo pedir un cami\u00f3n vs mezclar bultos.",
        href: "/guides/ready-mix-vs-bagged-concrete",
      },
      {
        title: "\u00bfCu\u00e1nto Cuesta el Concreto? Gu\u00eda de Precios 2026",
        description:
          "El concreto premezclado cuesta $2,500\u2013$3,500 MXN por metro c\u00fabico. Gu\u00eda completa de precios para losas, cimentaciones, cocheras, concreto en bultos y costos de mano de obra.",
        href: "/guides/concrete-cost-guide",
      },
      {
        title: "\u00bfCu\u00e1nta Pintura Necesito? Gu\u00eda Completa",
        description:
          "\u00bfCu\u00e1nta pintura para muros, techos y molduras? Gu\u00eda completa de medici\u00f3n, rendimiento, manos, preparaci\u00f3n de superficies y desglose de costos con enlaces a calculadoras.",
        href: "/guides/how-much-paint-do-i-need",
      },
      {
        title: "Guia de Precios de Madera: ¿Cuánto Cuesta?",
        description:
          "Precios actuales de madera por especie, grado y medida. Cubre madera dimensionada, madera industrializada, triplay, tendencias de precios, dónde comprar y descuentos por volumen.",
        href: "/guides/lumber-prices-guide",
      },
      {
        title: "Deck Composite vs Madera: ¿Cuál Es Mejor?",
        description:
          "Deck composite vs madera comparado: costo, durabilidad, mantenimiento, apariencia y vida útil. Aprende qué material es mejor para tu proyecto y clima.",
        href: "/guides/composite-vs-wood-decking",
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
      "En una casa t\u00edpica de 185 m\u00b2 de una planta con ~60 metros lineales de muros divisorios interiores, cambiar de 40 cm a 60 cm e/c ahorra aproximadamente 50 postes. A $5\u2013$7 USD por poste (precios 2026 para madera de 5\u00d710\u00d7240 cm), eso es $250\u2013$350 USD solo en postes. Sumando la reducci\u00f3n en clavos, reducci\u00f3n en mano de obra (menos postes para cortar, cargar y clavar), el ahorro alcanza $600\u2013$1,000 USD.",
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

  roofPitchChart: {
    title: "Tabla de Pendientes de Techo: Gu\u00eda de Referencia Completa",
    metaDescription:
      "Tabla de pendientes de techo con grados, porcentaje de inclinaci\u00f3n y multiplicador para cada pendiente. Aprende qu\u00e9 pendiente funciona mejor para tu material, clima y presupuesto.",

    heroTitle: "Tabla de Pendientes de Techo",
    heroSubtitle: "Gu\u00eda de Referencia Completa",
    heroDescription:
      "Tabla de referencia completa con todas las pendientes de techo est\u00e1ndar, incluyendo conversiones a grados, porcentajes de inclinaci\u00f3n, multiplicadores de \u00e1rea y orientaci\u00f3n sobre materiales y clima.",

    quickRefHeading: "Tabla de Referencia R\u00e1pida de Pendientes",
    quickRefSubheading:
      "Todas las pendientes comunes de techo con sus equivalentes en grados, porcentajes de inclinaci\u00f3n y multiplicadores de \u00e1rea. El multiplicador indica cu\u00e1nto m\u00e1s grande es la superficie del techo comparada con la planta.",
    quickRefColPitch: "Pendiente (cm/30cm)",
    quickRefColDegrees: "Grados",
    quickRefColSlope: "Inclinaci\u00f3n %",
    quickRefColMultiplier: "Multiplicador",
    quickRefColDescription: "Descripci\u00f3n",
    quickRefRows: [
      { pitch: "2.5:30", degrees: "4.76\u00b0", slopePercent: "8.3%", multiplier: "1.003", description: "Casi plano \u2014 solo membrana o techo multicapa" },
      { pitch: "5:30", degrees: "9.46\u00b0", slopePercent: "16.7%", multiplier: "1.014", description: "Baja pendiente \u2014 m\u00ednimo para tejas con membrana" },
      { pitch: "7.5:30", degrees: "14.04\u00b0", slopePercent: "25.0%", multiplier: "1.031", description: "Baja pendiente \u2014 paneles met\u00e1licos, asfalto modificado" },
      { pitch: "10:30", degrees: "18.43\u00b0", slopePercent: "33.3%", multiplier: "1.054", description: "M\u00ednimo est\u00e1ndar para tejas asf\u00e1lticas" },
      { pitch: "12.5:30", degrees: "22.62\u00b0", slopePercent: "41.7%", multiplier: "1.083", description: "Residencial com\u00fan \u2014 buen drenaje" },
      { pitch: "15:30", degrees: "26.57\u00b0", slopePercent: "50.0%", multiplier: "1.118", description: "Pendiente residencial m\u00e1s popular" },
      { pitch: "17.5:30", degrees: "30.26\u00b0", slopePercent: "58.3%", multiplier: "1.158", description: "Moderadamente empinada \u2014 estilo colonial" },
      { pitch: "20:30", degrees: "33.69\u00b0", slopePercent: "66.7%", multiplier: "1.202", description: "Rango superior de pendientes est\u00e1ndar" },
      { pitch: "22.5:30", degrees: "36.87\u00b0", slopePercent: "75.0%", multiplier: "1.250", description: "Empinada \u2014 buena evacuaci\u00f3n de nieve" },
      { pitch: "25:30", degrees: "39.81\u00b0", slopePercent: "83.3%", multiplier: "1.302", description: "Empinada \u2014 requiere medidas de seguridad" },
      { pitch: "27.5:30", degrees: "42.51\u00b0", slopePercent: "91.7%", multiplier: "1.357", description: "Muy empinada \u2014 estilos tipo A, g\u00f3tico" },
      { pitch: "30:30", degrees: "45.00\u00b0", slopePercent: "100.0%", multiplier: "1.414", description: "\u00c1ngulo de 45 grados \u2014 pendiente m\u00e1xima com\u00fan" },
    ],

    readingHeading: "C\u00f3mo Leer la Notaci\u00f3n de Pendiente",
    readingText1:
      "La pendiente de techo se expresa como una relaci\u00f3n entre la subida vertical y el recorrido horizontal. Cuando ves \"15:30\" (equivalente a 6:12 en sistema imperial), significa que el techo sube 15 cm por cada 30 cm de distancia horizontal. El primer n\u00famero siempre es la subida y el segundo es el recorrido horizontal de referencia.",
    readingText2:
      "Puedes convertir cualquier pendiente a grados usando la f\u00f3rmula: grados = arctan(subida / recorrido). Para una pendiente de 15:30, eso es arctan(15/30) = 26.57 grados. El porcentaje de inclinaci\u00f3n es simplemente (subida / recorrido) \u00d7 100, entonces una pendiente de 15:30 tiene 50% de inclinaci\u00f3n.",
    readingText3:
      "El multiplicador de \u00e1rea se calcula como la ra\u00edz cuadrada de (1 + (subida/recorrido)\u00b2). Este n\u00famero indica cu\u00e1nto material de techo necesitas comparado con la planta del edificio. Un techo de 15:30 requiere 11.8% m\u00e1s material que el \u00e1rea plana, mientras que un techo de 30:30 requiere 41.4% m\u00e1s.",

    lowSlopeHeading: "Pendientes Bajas (2.5:30 \u2013 7.5:30)",
    lowSlopeIntro:
      "Los techos de baja pendiente son comunes en edificios comerciales, dise\u00f1os residenciales modernos y ampliaciones como porches y cocheras. Requieren atenci\u00f3n especial en impermeabilizaci\u00f3n porque el agua drena lentamente.",
    lowSlopeItems: [
      "Pendiente 2.5:30 \u2014 El m\u00ednimo absoluto para cualquier techo. Requiere membrana continua como TPO, EPDM o techo multicapa (BUR). El metal de junta alzada con juntas selladas tambi\u00e9n es aceptable.",
      "Pendiente 5:30 \u2014 La pendiente m\u00ednima para instalar tejas asf\u00e1lticas, pero solo con doble capa de membrana autoadhesiva cubriendo toda la cubierta. La mayor\u00eda de los fabricantes honran la garant\u00eda con la membrana adecuada.",
      "Pendiente 7.5:30 \u2014 Los paneles met\u00e1licos con fijaci\u00f3n expuesta pueden usarse a partir de esta pendiente. El asfalto modificado en rollo tambi\u00e9n es adecuado. El drenaje sigue siendo relativamente lento, por lo que se recomienda membrana de alta calidad.",
      "Los materiales para techos de baja pendiente cuestan m\u00e1s por metro cuadrado debido a los requisitos adicionales de membrana y sellado. Presupuesta un extra de $5\u2013$15 USD por m\u00b2 para impermeabilizaci\u00f3n en techos bajo 10:30.",
      "El drenaje es la preocupaci\u00f3n principal. El agua estancada (encharcamiento) puede ocurrir si la pendiente es demasiado baja o si la estructura se deflecta bajo carga. El encharcamiento anula la mayor\u00eda de las garant\u00edas y acelera el deterioro.",
    ],
    lowSlopeSummary:
      "Los techos de baja pendiente son econ\u00f3micos para cubrir grandes \u00e1reas pero requieren impermeabilizaci\u00f3n premium. Siempre usa materiales clasificados para la pendiente espec\u00edfica.",

    standardHeading: "Pendientes Est\u00e1ndar (10:30 \u2013 20:30)",
    standardIntro:
      "El rango de 10:30 a 20:30 cubre la gran mayor\u00eda de los techos residenciales. Estas pendientes proporcionan buen drenaje, funcionan con casi todos los materiales y son transitables para instalaci\u00f3n y mantenimiento.",
    standardItems: [
      "Pendiente 10:30 \u2014 El m\u00ednimo est\u00e1ndar para tejas asf\u00e1lticas sin membrana especial. La mayor\u00eda de los c\u00f3digos y fabricantes especifican esta pendiente como m\u00ednima para instalaci\u00f3n est\u00e1ndar de tejas con fieltro sint\u00e9tico.",
      "Pendiente 12.5:30 \u2014 Opci\u00f3n popular para casas de un nivel. Proporciona excelente drenaje manteniendo la l\u00ednea del techo relativamente baja. Los techadores pueden caminar c\u00f3modamente sin equipo especial.",
      "Pendiente 15:30 \u2014 La pendiente residencial m\u00e1s com\u00fan. Ofrece buen equilibrio entre est\u00e9tica, drenaje y espacio en \u00e1tico. Pr\u00e1cticamente todos los materiales funcionan bien a este \u00e1ngulo.",
      "Pendientes 17.5:30 y 20:30 \u2014 Comunes en casas de estilo colonial y tradicional. Crean una l\u00ednea de techo m\u00e1s prominente y proporcionan generoso espacio en \u00e1tico. Los techadores pueden comenzar a usar soportes de pie a 20:30.",
      "Seguro y valor de reventa \u2014 Los techos de pendiente est\u00e1ndar son preferidos por las aseguradoras porque evacuan agua y escombros efectivamente. Las casas con techos de 12.5:30 a 17.5:30 tienden a tener los menores costos de mantenimiento.",
    ],
    standardSummary:
      "Las pendientes est\u00e1ndar son el punto ideal para construcci\u00f3n residencial: compatibles con todos los materiales comunes, f\u00e1ciles de trabajar y econ\u00f3micas.",

    steepHeading: "Pendientes Empinadas (22.5:30 \u2013 30:30)",
    steepIntro:
      "Los techos empinados se encuentran en caba\u00f1as tipo A, casas victorianas, iglesias y edificios en regiones de nieve pesada. Evacuan nieve y lluvia r\u00e1pidamente pero cuestan m\u00e1s de construir y mantener.",
    steepItems: [
      "Pendientes 22.5:30 y 25:30 \u2014 Comunes en zonas de nieve. El \u00e1ngulo pronunciado evita la acumulaci\u00f3n pesada de nieve, reduciendo el riesgo de represas de hielo y sobrecarga estructural. Sin embargo, la nieve se desliza r\u00e1pidamente, por lo que se requieren retenedores de nieve para proteger pasillos inferiores.",
      "Pendientes 27.5:30 y 30:30 \u2014 Usadas para efecto arquitect\u00f3nico dram\u00e1tico en casas tipo A y acentos de front\u00f3n empinado. Una pendiente de 30:30 crea un \u00e1ngulo perfecto de 45 grados. Estos techos son dif\u00edciles de caminar y requieren andamios completos o sistemas de arn\u00e9s.",
      "Impacto en costo \u2014 Los techos empinados usan significativamente m\u00e1s material (un techo de 30:30 tiene 41.4% m\u00e1s \u00e1rea que un techo plano) y requieren m\u00e1s mano de obra por equipo de seguridad e instalaci\u00f3n m\u00e1s lenta. Espera pagar 20\u201350% m\u00e1s comparado con la misma planta a pendiente est\u00e1ndar.",
      "Consideraciones de material \u2014 Tejas asf\u00e1lticas, pizarra, teja de barro y madera funcionan bien en pendientes empinadas. Estos materiales a menudo lucen mejor y duran m\u00e1s en techos empinados porque el agua escurre r\u00e1pidamente. El metal de junta oculta tambi\u00e9n es excelente.",
      "Resistencia al viento \u2014 Los techos empinados captan m\u00e1s viento. En zonas propensas a huracanes, las pendientes empinadas pueden requerir esquemas de fijaci\u00f3n reforzados o tejas clasificadas para viento. Verifica los requisitos locales de velocidad del viento antes de especificar pendientes superiores a 20:30 en regiones costeras.",
    ],
    steepSummary:
      "Las pendientes empinadas sobresalen en evacuar precipitaci\u00f3n y proporcionan un aspecto dram\u00e1tico, pero tienen un costo premium en materiales y mano de obra.",

    costHeading: "C\u00f3mo la Pendiente Afecta el Costo",
    costIntro:
      "La pendiente del techo impacta directamente el costo total de un proyecto de techado de tres formas: cantidad de material, dificultad de mano de obra y factor de desperdicio.",
    costText1:
      "La cantidad de material aumenta con la pendiente porque un techo m\u00e1s empinado tiene m\u00e1s \u00e1rea de superficie. Usa el multiplicador de la tabla para estimar el \u00e1rea real del techo. Por ejemplo, un edificio con 140 m\u00b2 de planta y pendiente de 15:30 tiene 140 \u00d7 1.118 = 156.5 m\u00b2 de superficie real. A pendiente de 30:30, la misma planta tiene 140 \u00d7 1.414 = 198 m\u00b2 \u2014 41.3 m\u00b2 extra de material.",
    costText2:
      "Los costos de mano de obra suben considerablemente sobre pendiente 20:30. Los equipos de techado necesitan equipo de seguridad especializado (arneses, soportes, andamios) y la velocidad de instalaci\u00f3n baja un 25\u201340%. La mayor\u00eda de los contratistas agregan un sobrecargo por pendiente empinada, t\u00edpicamente de $5 a $20 USD por metro cuadrado.",
    costText3:
      "El factor de desperdicio tambi\u00e9n aumenta en techos empinados y complejos. Limahoyas, limahoyos y cumbrera en techos empinados generan m\u00e1s desperdicio de corte. Presupuesta 10\u201315% de desperdicio para pendientes est\u00e1ndar y 15\u201320% para geometr\u00edas empinadas o complejas.",

    materialHeading: "Pendiente Recomendada por Material",
    materialIntro:
      "Cada material de techo tiene un rango de pendiente m\u00ednima y \u00f3ptima. Usar el material correcto para tu pendiente asegura drenaje adecuado, cobertura de garant\u00eda y m\u00e1xima vida \u00fatil.",
    materialItems: [
      "Tejas asf\u00e1lticas \u2014 M\u00ednimo 10:30 (5:30 con membrana completa). Rango \u00f3ptimo 10:30 a 30:30. El material m\u00e1s vers\u00e1til y econ\u00f3mico para techos residenciales.",
      "Metal de junta alzada \u2014 M\u00ednimo 2.5:30 (con juntas selladas). Rango \u00f3ptimo 7.5:30 a 30:30. Excelente para pendientes bajas y empinadas. Los paneles se expanden y contraen con la temperatura.",
      "Paneles met\u00e1licos (fijaci\u00f3n expuesta) \u2014 M\u00ednimo 7.5:30. Rango \u00f3ptimo 7.5:30 a 20:30. Menos costosos que junta alzada pero no aptos para baja pendiente debido a penetraciones de tornillos expuestos.",
      "Teja de barro y concreto \u2014 M\u00ednimo 10:30 (algunos fabricantes requieren 11:30). Rango \u00f3ptimo 10:30 a 30:30. Material pesado que requiere estructura de techo adecuada. Excelente longevidad en climas c\u00e1lidos.",
      "Pizarra \u2014 M\u00ednimo 10:30. Rango \u00f3ptimo 15:30 a 30:30. El material de techo de mayor duraci\u00f3n (100+ a\u00f1os) pero extremadamente pesado (40\u201375 kg/m\u00b2). Las pendientes empinadas exhiben la pizarra bellamente.",
      "Madera (tablas y tablillas) \u2014 M\u00ednimo 10:30. Rango \u00f3ptimo 10:30 a 30:30. Requieren ventilaci\u00f3n adecuada por debajo. Frecuentemente restringidas en zonas propensas a incendios.",
      "Membrana (TPO, EPDM, PVC) \u2014 M\u00ednimo 0.6:30. Rango \u00f3ptimo 0.6:30 a 7.5:30. Dise\u00f1adas espec\u00edficamente para techos planos y de baja pendiente. No se usan en pendientes empinadas.",
      "Techo multicapa (BUR) \u2014 M\u00ednimo 0.6:30. Rango \u00f3ptimo 0.6:30 a 7.5:30. M\u00faltiples capas de asfalto y refuerzo crean una membrana duradera e impermeable para techos comerciales planos.",
    ],

    climateHeading: "Mejor Pendiente de Techo por Clima",
    climateIntro:
      "El clima juega un papel fundamental en determinar la pendiente ideal del techo. As\u00ed puedes hacer coincidir tu pendiente con las condiciones clim\u00e1ticas locales:",
    climateItems: [
      "\u00c1reas de nieve pesada (>250 kg/m\u00b2 carga de nieve) \u2014 Usa pendientes de 20:30 a 30:30 para evacuar nieve antes de que se acumule a niveles peligrosos. Instala retenedores de nieve para controlar la liberaci\u00f3n. Las pendientes m\u00e1s empinadas reducen el riesgo de represas de hielo.",
      "\u00c1reas de nieve moderada (100\u2013250 kg/m\u00b2) \u2014 Usa pendientes de 15:30 a 22.5:30. Proporcionan buena evacuaci\u00f3n de nieve sin el costo extra de construcci\u00f3n muy empinada. La ventilaci\u00f3n adecuada del \u00e1tico es cr\u00edtica.",
      "Lluvia intensa / regiones tropicales \u2014 Usa pendientes de 12.5:30 a 20:30 para escurrimiento r\u00e1pido de agua. Selecciona materiales clasificados para alta humedad como metal o teja de barro. Asegura que canalones y bajantes manejen los flujos pico.",
      "Climas c\u00e1lidos y secos \u2014 Usa pendientes de 7.5:30 a 12.5:30. Las pendientes bajas reducen la superficie expuesta del techo, disminuyendo la ganancia de calor. El metal reflectivo o teja de color claro funciona mejor. Los techos planos con membrana tambi\u00e9n son comunes en regiones des\u00e9rticas.",
      "Zonas de alto viento / huracanes (>180 km/h velocidad de dise\u00f1o) \u2014 Usa pendientes de 10:30 a 15:30. Los techos a cuatro aguas con pendientes moderadas funcionan mejor en vientos fuertes. Evita frontones empinados que captan el viento. Usa tejas clasificadas para viento y patrones de clavado reforzados.",
      "Climas mixtos \u2014 Usa pendientes de 12.5:30 a 17.5:30 como opci\u00f3n vers\u00e1til que maneja lluvia, nieve moderada y viento. Este rango es el m\u00e1s com\u00fan en Am\u00e9rica Latina para construcci\u00f3n residencial.",
    ],

    calculatorCtaHeading: "Calcula Tus Materiales de Techo",
    calculatorCtaText:
      "Usa nuestras calculadoras gratuitas para estimar materiales seg\u00fan la pendiente, \u00e1rea y material elegido:",
    calculatorLinks: [
      {
        label: "Calculadora de Pendiente de Techo",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Convierte entre relaci\u00f3n de pendiente, grados y porcentaje de inclinaci\u00f3n.",
      },
      {
        label: "Calculadora de \u00c1rea de Techo",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calcula el \u00e1rea real del techo a partir de la planta y la pendiente.",
      },
      {
        label: "Calculadora de Inclinaci\u00f3n de Techo",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Determina el factor de pendiente y multiplicador de material.",
      },
      {
        label: "Calculadora de Cabios",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calcula largo, cantidad y madera de cabios para tu sistema de techo.",
      },
    ],

    faqHeading: "Preguntas Frecuentes",
    faqs: [
      {
        question: "\u00bfCu\u00e1ntos grados son una pendiente de 10:30?",
        answer:
          "Una pendiente de techo de 10:30 (equivalente a 4/12) equivale a 18.43 grados. Se calcula usando la f\u00f3rmula de arcotangente: arctan(10/30) = 18.43\u00b0. Esta pendiente es el m\u00ednimo est\u00e1ndar para tejas asf\u00e1lticas con fieltro convencional.",
      },
      {
        question: "\u00bfCu\u00e1l es la pendiente de techo est\u00e1ndar para una casa?",
        answer:
          "La pendiente residencial m\u00e1s com\u00fan es 15:30 (equivalente a 6:12, o 26.57 grados). Las pendientes entre 10:30 y 20:30 se consideran est\u00e1ndar para construcci\u00f3n residencial. La pendiente exacta depende del estilo arquitect\u00f3nico, clima y material de techo.",
      },
      {
        question: "\u00bfPara qu\u00e9 sirve una tabla de \u00e1ngulos de pendiente de techo?",
        answer:
          "Una tabla de \u00e1ngulos de pendiente de techo convierte relaciones de pendiente a grados, porcentajes de inclinaci\u00f3n y multiplicadores de \u00e1rea. Los constructores la usan para determinar el material correcto para una pendiente dada, calcular el \u00e1rea real del techo para pedidos de material y verificar cumplimiento con normas y requisitos del fabricante.",
      },
      {
        question: "\u00bfC\u00f3mo puedo medir la pendiente del techo desde el suelo?",
        answer:
          "Puedes estimar la pendiente del techo desde el suelo usando una escuadra r\u00e1pida y un nivel colocado contra el borde inclinado del techo desde una escalera. Alternativamente, mide desde dentro del \u00e1tico: coloca un nivel horizontalmente contra un cabio, mide 30 cm a lo largo del nivel, luego mide la distancia vertical desde ese punto hasta el cabio. Esa distancia vertical es tu subida en la relaci\u00f3n subida:30.",
      },
      {
        question: "\u00bfQu\u00e9 pendiente de techo se considera techo plano?",
        answer:
          "Cualquier techo con pendiente inferior a 5:30 (9.46 grados) se clasifica generalmente como techo de baja pendiente o plano por las normas de construcci\u00f3n y los fabricantes. Los techos verdaderamente planos a\u00fan tienen una ligera pendiente (t\u00edpicamente 0.6:30 a 1.25:30) para permitir que el agua drene hacia desag\u00fces.",
      },
      {
        question: "\u00bfLa pendiente del techo afecta las primas de seguro?",
        answer:
          "S\u00ed. Las compa\u00f1\u00edas de seguros consideran la pendiente del techo al calcular primas. Las pendientes est\u00e1ndar (10:30 a 20:30) t\u00edpicamente reciben las mejores tarifas porque evacuan agua efectivamente sin crear exposici\u00f3n excesiva al viento. Las pendientes muy bajas pueden aumentar primas por riesgo de filtraci\u00f3n, mientras que las muy empinadas pueden aumentarlas por costos de reemplazo m\u00e1s altos.",
      },
    ],
  },

  minimumRoofPitch: {
    title: "Pendiente M\u00ednima para Tejas, Metal y Teja de Barro",
    metaDescription:
      "Encuentra la pendiente m\u00ednima de techo para tejas asf\u00e1lticas (5:30 con membrana, 10:30 est\u00e1ndar), metal (2.5:30), teja de barro (10:30) y m\u00e1s. Incluye referencias de norma y soluciones para baja pendiente.",

    heroTitle: "Pendiente M\u00ednima de Techo",
    heroSubtitle: "para Tejas, Metal y Teja de Barro",
    heroDescription:
      "Cada material de techo tiene un requisito de pendiente m\u00ednima establecido por normas de construcci\u00f3n y fabricantes. Instalar un material por debajo de su pendiente m\u00ednima anula la garant\u00eda, viola la norma e invita filtraciones. Esta gu\u00eda cubre los m\u00ednimos para cada material com\u00fan.",

    quickAnswerHeading: "Respuesta R\u00e1pida",
    quickAnswerText:
      "La pendiente m\u00ednima para tejas asf\u00e1lticas est\u00e1ndar es 10:30 (18.43 grados). Con membrana autoadhesiva completa cubriendo toda la cubierta, la mayor\u00eda de los fabricantes permiten tejas asf\u00e1lticas hasta 5:30 (9.46 grados). El metal de junta alzada puede llegar hasta 2.5:30 (4.76 grados), y los sistemas de membrana (TPO, EPDM) funcionan hasta 0.6:30.",

    materialTableHeading: "Pendiente M\u00ednima por Material",
    materialTableSubheading:
      "Esta tabla muestra la pendiente m\u00ednima est\u00e1ndar, el m\u00ednimo absoluto con provisiones especiales y notas clave para cada material de techo.",
    materialTableColMaterial: "Material de Techo",
    materialTableColStandardMin: "M\u00ednimo Est\u00e1ndar",
    materialTableColAbsoluteMin: "M\u00ednimo Absoluto",
    materialTableColNotes: "Notas",
    materialTableRows: [
      {
        material: "Tejas Asf\u00e1lticas (3 lengetas)",
        standardMin: "10:30",
        absoluteMin: "5:30",
        notes: "A 5:30 requiere doble capa de membrana autoadhesiva en toda la cubierta. La garant\u00eda del fabricante aplica solo con membrana aprobada.",
      },
      {
        material: "Tejas Arquitect\u00f3nicas (Dimensionales)",
        standardMin: "10:30",
        absoluteMin: "5:30",
        notes: "Mismos requisitos de membrana que las de 3 leng\u00fcetas en pendientes bajas. Mayor peso proporciona mejor resistencia al viento.",
      },
      {
        material: "Metal de Junta Alzada",
        standardMin: "7.5:30",
        absoluteMin: "2.5:30",
        notes: "A 2.5:30\u20135:30, las juntas deben sellarse mec\u00e1nicamente o con cinta selladora. Se recomiendan juntas hidrost\u00e1ticas (impermeables) bajo 7.5:30.",
      },
      {
        material: "Paneles Met\u00e1licos (Fijaci\u00f3n Expuesta)",
        standardMin: "7.5:30",
        absoluteMin: "7.5:30",
        notes: "Las penetraciones de tornillos expuestos hacen estos paneles inadecuados bajo 7.5:30. Las arandelas selladoras son cr\u00edticas en todas las pendientes.",
      },
      {
        material: "Teja de Barro",
        standardMin: "10:30",
        absoluteMin: "10:30",
        notes: "Algunos fabricantes requieren 11:30. La membrana impermeable bajo las tejas es obligatoria en todos los casos.",
      },
      {
        material: "Teja de Concreto",
        standardMin: "10:30",
        absoluteMin: "10:30",
        notes: "Similar a la teja de barro. Peso considerable (45\u201355 kg/m\u00b2) requiere estructura de techo dimensionada.",
      },
      {
        material: "Pizarra",
        standardMin: "10:30",
        absoluteMin: "10:30",
        notes: "Material premium. Extremadamente pesado (40\u201375 kg/m\u00b2). Requiere instaladores especializados y estructura reforzada.",
      },
      {
        material: "Tablillas de Madera",
        standardMin: "10:30",
        absoluteMin: "10:30",
        notes: "Requieren separaci\u00f3n entre tablillas para ventilaci\u00f3n. No permitidas en algunas jurisdicciones propensas a incendios.",
      },
      {
        material: "Techo Multicapa (BUR)",
        standardMin: "0.6:30",
        absoluteMin: "0.6:30",
        notes: "M\u00faltiples capas de asfalto y refuerzo. Dise\u00f1ado para techos planos y casi planos. Requiere drenaje positivo.",
      },
      {
        material: "Membrana TPO / EPDM / PVC",
        standardMin: "0.6:30",
        absoluteMin: "0.6:30",
        notes: "Membranas monocapa con juntas termosoldadas o adhesivas. Est\u00e1ndar de la industria para techos comerciales planos.",
      },
      {
        material: "Asfalto Modificado",
        standardMin: "1.25:30",
        absoluteMin: "0.6:30",
        notes: "Rollos aplicados con soplete o autoadhesivos. Com\u00fan en ampliaciones residenciales de baja pendiente y porches.",
      },
    ],

    whyMinHeading: "Por Qu\u00e9 Importa la Pendiente M\u00ednima",
    whyMinIntro:
      "La especificaci\u00f3n de pendiente m\u00ednima no es arbitraria. Existe porque cada material de techo depende de la gravedad para mover el agua fuera del techo antes de que penetre juntas, traslapes y agujeros de fijaci\u00f3n. He aqu\u00ed por qu\u00e9 importa:",
    whyMinItems: [
      "Infiltraci\u00f3n de agua \u2014 Por debajo de la pendiente m\u00ednima, el agua se mueve demasiado lento sobre la superficie del techo. Puede subir por acci\u00f3n capilar bajo las leng\u00fcetas de las tejas, penetrar alrededor de agujeros de clavos y filtrarse en juntas traslapadas. Incluso una peque\u00f1a infiltraci\u00f3n causa pudrici\u00f3n, moho y da\u00f1o estructural con el tiempo.",
      "Cobertura de garant\u00eda \u2014 Cada fabricante de material de techo especifica una pendiente m\u00ednima en sus instrucciones de instalaci\u00f3n. Instalar su producto por debajo de esa pendiente anula la garant\u00eda por completo. Si se desarrolla una filtraci\u00f3n, el fabricante negar\u00e1 el reclamo y el propietario asume el costo total de reparaci\u00f3n.",
      "Cumplimiento de norma de construcci\u00f3n \u2014 Las normas de construcci\u00f3n referencian los requisitos de instalaci\u00f3n del fabricante. Un techo instalado por debajo de la pendiente m\u00ednima no pasa la inspecci\u00f3n y puede requerir demolici\u00f3n y reinstalaci\u00f3n a cargo del propietario.",
      "Prevenci\u00f3n de represas de hielo \u2014 En climas fr\u00edos, los techos de baja pendiente son m\u00e1s susceptibles a represas de hielo. El agua de deshielo se recongela en los aleros, creando una represa que fuerza el agua bajo el material de techo. Las pendientes m\u00e1s empinadas ayudan a que el agua despeje el techo antes de congelarse.",
      "Implicaciones de seguro \u2014 Las p\u00f3lizas de seguro del hogar pueden excluir cobertura por da\u00f1o de agua causado por instalaci\u00f3n inadecuada del techo. Si la pendiente est\u00e1 por debajo del requisito m\u00ednimo del material, la aseguradora puede clasificarlo como defecto preexistente y negar reclamos.",
    ],
    whyMinSummary:
      "Instalar material de techo en o por encima de su pendiente m\u00ednima no es opcional. Protege tu garant\u00eda, cumple requisitos de norma y previene da\u00f1o por agua que puede costar miles en reparaciones.",

    codeHeading: "Requisitos de Norma de Construcci\u00f3n",
    codeIntro:
      "Las normas de construcci\u00f3n establecen requisitos de pendiente m\u00ednima para proteger la seguridad de los ocupantes y la durabilidad del edificio. A continuaci\u00f3n las referencias clave (basadas en el IRC como referencia internacional):",
    codeItems: [
      "Tejas asf\u00e1lticas \u2014 Pendiente m\u00ednima de 5:30. En pendientes entre 5:30 y 10:30, se requiere doble capa de membrana. A 10:30 y superior, una sola capa de membrana aprobada es suficiente.",
      "Tejas y paneles met\u00e1licos \u2014 Pendiente m\u00ednima de 7.5:30 para tejas met\u00e1licas y paneles. Los sistemas de junta alzada pueden bajar m\u00e1s seg\u00fan especificaciones del fabricante.",
      "Teja de barro y concreto \u2014 Pendiente m\u00ednima de 6:30 para teja entrelazada y 10:30 para teja plana. Los requisitos de membrana aumentan en pendientes menores.",
      "Pizarra \u2014 Pendiente m\u00ednima de 10:30 para instalaci\u00f3n est\u00e1ndar. Requiere fijaci\u00f3n no corrosiva y membrana aprobada.",
      "Tablillas de madera \u2014 Pendiente m\u00ednima de 7.5:30 para tablillas y 10:30 para tablas de madera. Las tablas requieren una intercapa de fieltro entre cada hilada.",
      "Las normas locales pueden imponer requisitos m\u00e1s estrictos. Siempre verifica la jurisdicci\u00f3n espec\u00edfica de tu proyecto antes de seleccionar materiales de techo. Algunos pa\u00edses y municipios requieren pendientes m\u00ednimas m\u00e1s altas que la l\u00ednea base internacional.",
    ],
    codeSummary:
      "Las normas de construcci\u00f3n son est\u00e1ndares m\u00ednimos, no mejores pr\u00e1cticas. Muchos profesionales del techado recomiendan pendientes al menos un paso por encima del m\u00ednimo de norma para proporcionar un margen extra de seguridad contra lluvia impulsada por viento.",

    belowMinHeading: "Qu\u00e9 Sucede Por Debajo de la Pendiente M\u00ednima",
    belowMinIntro:
      "Instalar material de techo por debajo de su pendiente m\u00ednima crea una cascada de problemas que empeoran con el tiempo:",
    belowMinItems: [
      "Garant\u00eda del fabricante anulada \u2014 Esta es la consecuencia m\u00e1s inmediata. El fabricante no tiene obligaci\u00f3n de reemplazar material defectuoso ni cubrir costos de mano de obra si el producto fue instalado fuera de sus especificaciones. Los reclamos de garant\u00eda se niegan rutinariamente por violaciones de pendiente.",
      "Filtraciones cr\u00f3nicas \u2014 El agua permanece m\u00e1s tiempo en el techo y penetra juntas, traslapes y agujeros de fijaci\u00f3n. Estas filtraciones pueden no aparecer inmediatamente pero se desarrollan en 2\u20135 a\u00f1os conforme los selladores se deterioran y los materiales se degradan por exposici\u00f3n prolongada a la humedad.",
      "Represas de hielo en climas fr\u00edos \u2014 Los techos de baja pendiente son altamente susceptibles a represas de hielo porque la nieve se derrite lentamente y se recongela en los aleros. Las represas fuerzan el agua bajo las tejas y dentro de la cubierta, causando extenso da\u00f1o interior por agua.",
      "Moho y pudrici\u00f3n \u2014 La humedad persistente por drenaje lento crea condiciones ideales para crecimiento de moho en el \u00e1tico y pudrici\u00f3n en la cubierta y estructura. La remediaci\u00f3n de moho y reparaci\u00f3n estructural puede costar $10,000\u2013$30,000 USD o m\u00e1s.",
      "Inspecci\u00f3n de construcci\u00f3n fallida \u2014 Un techo que no cumple los requisitos de pendiente m\u00ednima no pasar\u00e1 la inspecci\u00f3n. El departamento de construcci\u00f3n puede emitir una orden de suspensi\u00f3n de obra y requerir que el techo sea demolido y reinstalado con materiales que cumplan la norma, duplicando el costo del proyecto.",
      "Vida \u00fatil reducida \u2014 Incluso si las filtraciones son menores, los materiales de techo instalados por debajo de la pendiente m\u00ednima se degradan m\u00e1s r\u00e1pido. Las tejas asf\u00e1lticas en un techo de 5:30 sin membrana adecuada pueden durar solo 10\u201312 a\u00f1os versus 20\u201330 a\u00f1os a la pendiente correcta.",
    ],
    belowMinSummary:
      "No hay atajos cuando se trata de pendiente m\u00ednima. El costo de hacerlo bien la primera vez siempre es menor que el costo de reparaci\u00f3n, reemplazo y remediaci\u00f3n de da\u00f1o por agua.",

    solutionsHeading: "Soluciones para Techos de Baja Pendiente",
    solutionsIntro:
      "Si tu techo tiene una pendiente inferior a 10:30, a\u00fan tienes varias opciones excelentes. Estos son los enfoques m\u00e1s confiables:",
    solutionsItems: [
      "Membrana autoadhesiva completa \u2014 Para pendientes entre 5:30 y 10:30, cubre toda la cubierta con membrana autoadhesiva antes de instalar tejas asf\u00e1lticas. Esto crea una barrera secundaria impermeable que protege contra lluvia impulsada por viento y acci\u00f3n capilar. Costo: aproximadamente $8\u2013$15 USD por m\u00b2 m\u00e1s que fieltro est\u00e1ndar.",
      "Metal de junta alzada \u2014 Los paneles de junta alzada con juntas mec\u00e1nicas o de ensamble a presi\u00f3n funcionan hasta 2.5:30. Las juntas elevadas mantienen los canales de agua alejados de la superficie plana del panel. Elige paneles con junta de al menos 3.8 cm de altura para pendientes bajo 7.5:30. Esta es frecuentemente la mejor opci\u00f3n para techos residenciales de baja pendiente.",
      "Sistemas de membrana \u2014 Para pendientes bajo 5:30, las membranas TPO, EPDM o PVC son el est\u00e1ndar de la industria. Estas membranas monocapa se termosueldan o adhieren para crear una superficie impermeable sin juntas. Son comunes en edificios comerciales planos y funcionan bien en ampliaciones residenciales de baja pendiente.",
      "Asfalto modificado \u2014 Los rollos de asfalto modificado aplicados con soplete o autoadhesivos proporcionan una superficie duradera e impermeable para techos de baja pendiente. Son buena opci\u00f3n para porches, cocheras y peque\u00f1as ampliaciones donde la membrana puede ser excesiva. M\u00faltiples capas aumentan la confiabilidad.",
      "Modificaci\u00f3n estructural \u2014 En algunos casos, es rentable aumentar la pendiente del techo agregando nuevos cabios o cerchas sobre la estructura existente. Esto permite usar materiales est\u00e1ndar de techo. Consulta un ingeniero estructural antes de modificar cualquier estructura de techo.",
      "Aislamiento c\u00f3nico y crickets \u2014 En techos planos o casi planos, las placas de aislamiento c\u00f3nico pueden crear drenaje positivo hacia desag\u00fces o goterones. Un cricket (desviador peque\u00f1o) detr\u00e1s de chimeneas y muros previene el encharcamiento de agua en penetraciones.",
    ],
    solutionsSummary:
      "Los techos de baja pendiente no son un problema siempre que uses los materiales correctos. El metal de junta alzada y los sistemas de membrana proporcionan d\u00e9cadas de servicio confiable en pendientes que destruir\u00edan las tejas.",

    calculatorCtaHeading: "Calcula Tus Materiales de Techo",
    calculatorCtaText:
      "Usa nuestras calculadoras gratuitas para determinar los materiales y cantidades correctos para la pendiente de tu techo:",
    calculatorLinks: [
      {
        label: "Calculadora de Pendiente de Techo",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Convierte entre relaci\u00f3n de pendiente, grados y porcentaje de inclinaci\u00f3n.",
      },
      {
        label: "Calculadora de \u00c1rea de Techo",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calcula el \u00e1rea real del techo a partir de la planta y la pendiente.",
      },
      {
        label: "Calculadora de Inclinaci\u00f3n de Techo",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Determina el factor de pendiente y multiplicador de material para cualquier inclinaci\u00f3n.",
      },
    ],

    faqHeading: "Preguntas Frecuentes",
    faqs: [
      {
        question: "\u00bfSe pueden poner tejas asf\u00e1lticas en un techo de pendiente 5:30?",
        answer:
          "S\u00ed, pero solo con membrana especial. A una pendiente de 5:30, las normas requieren doble capa de membrana autoadhesiva cubriendo toda la cubierta. La mayor\u00eda de los fabricantes de tejas asf\u00e1lticas honrar\u00e1n su garant\u00eda a 5:30 cuando esta membrana est\u00e1 correctamente instalada. Sin la membrana completa, el m\u00ednimo para tejas asf\u00e1lticas es 10:30.",
      },
      {
        question: "\u00bfCu\u00e1l es la pendiente m\u00ednima para techo de metal?",
        answer:
          "Para metal de junta alzada, la pendiente m\u00ednima es 2.5:30. Sin embargo, en pendientes entre 2.5:30 y 7.5:30, las juntas deben sellarse mec\u00e1nicamente o con cinta selladora para prevenir infiltraci\u00f3n. Los paneles met\u00e1licos con fijaci\u00f3n expuesta requieren una pendiente m\u00ednima de 7.5:30 porque las penetraciones de tornillos son vulnerables al agua en pendientes menores.",
      },
      {
        question: "\u00bfQu\u00e9 pasa si la pendiente del techo es muy baja para tejas?",
        answer:
          "Si las tejas asf\u00e1lticas se instalan por debajo de la pendiente m\u00ednima, el agua se mueve demasiado lento para despejar los traslapes. La acci\u00f3n capilar sube el agua bajo las leng\u00fcetas, y la lluvia impulsada por viento empuja agua bajo los bordes. Esto causa filtraciones cr\u00f3nicas, pudrici\u00f3n en la cubierta, crecimiento de moho y garant\u00edas anuladas.",
      },
      {
        question: "\u00bfUna pendiente de 7.5:30 est\u00e1 bien para tejas asf\u00e1lticas?",
        answer:
          "Una pendiente de 7.5:30 est\u00e1 entre el m\u00ednimo absoluto (5:30 con membrana completa) y el m\u00ednimo est\u00e1ndar (10:30 con fieltro convencional). A 7.5:30, debes instalar una membrana autoadhesiva completa sobre toda la cubierta antes de colocar las tejas. Con esta membrana, la mayor\u00eda de los fabricantes dar\u00e1n garant\u00eda a 7.5:30.",
      },
      {
        question: "\u00bfCu\u00e1l es la pendiente m\u00ednima para teja de barro?",
        answer:
          "La pendiente m\u00ednima para teja de barro y concreto es generalmente 10:30, aunque algunos fabricantes especifican 11:30. En cualquier pendiente, se requiere una membrana impermeable bajo las tejas. Los perfiles de teja entrelazada pueden aprobarse para pendientes tan bajas como 6:30 seg\u00fan fabricante y norma local.",
      },
      {
        question: "\u00bfSe puede cambiar la pendiente de un techo existente?",
        answer:
          "S\u00ed, es posible cambiar la pendiente de un techo existente agregando nuevos cabios o cerchas sobre la estructura actual, un proceso llamado a veces sobre-techo o re-pendiente. Esta es una modificaci\u00f3n estructural significativa que requiere c\u00e1lculos de ingenier\u00eda, permisos e instalaci\u00f3n profesional. El costo t\u00edpicamente oscila entre $10,000 y $30,000 USD dependiendo del tama\u00f1o del techo.",
      },
    ],
  },

  readyMixVsBagged: {
    title: "Concreto Premezclado vs en Bultos: \u00bfCu\u00e1l Usar?",
    metaDescription:
      "Concreto premezclado vs en bultos comparado: costo por metro c\u00fabico, resistencia, conveniencia y mejores usos. Aprende cu\u00e1ndo pedir revolvedora vs mezclar bultos t\u00fa mismo.",

    heroTitle: "Concreto Premezclado vs en Bultos",
    heroSubtitle: "\u00bfCu\u00e1l Deber\u00edas Usar?",
    heroDescription:
      "Una comparaci\u00f3n completa entre concreto premezclado (entregado por revolvedora) y concreto en bultos para ayudarte a elegir la opci\u00f3n correcta seg\u00fan el tama\u00f1o de tu proyecto, presupuesto y tiempos.",

    quickAnswerHeading: "Respuesta R\u00e1pida",
    quickAnswerText:
      "Usa concreto en bultos para proyectos peque\u00f1os menores a 1 metro c\u00fabico \u2014 postes de cerca, peque\u00f1as bases, reparaciones y todo lo que puedas mezclar a mano o con mezcladora port\u00e1til. Usa concreto premezclado (revolvedora) para cualquier cosa mayor a 1 metro c\u00fabico \u2014 cocheras, losas, cimentaciones y colados grandes donde la calidad consistente y la velocidad importan. El costo por metro c\u00fabico es similar ($2,500\u2013$3,500 MXN), pero los costos de env\u00edo y pedidos m\u00ednimos hacen que la revolvedora no sea pr\u00e1ctica para trabajos peque\u00f1os.",

    whatIsReadyMixHeading: "\u00bfQu\u00e9 es el Concreto Premezclado?",
    whatIsReadyMixText1:
      "El concreto premezclado se prepara en una planta central, se mezcla en un cami\u00f3n revolvedora y se entrega en tu obra listo para colar. El concreto llega completamente mezclado a la resistencia especificada (t\u00edpicamente f'c=200 a f'c=250 kg/cm\u00b2 para obra residencial), con la relaci\u00f3n agua-cemento correcta ya definida por la planta. T\u00fa simplemente diriges la canaleta o la bomba hacia donde necesitas el concreto.",
    whatIsReadyMixText2:
      "Un cami\u00f3n revolvedora est\u00e1ndar carga 7\u20138 metros c\u00fabicos de concreto y generalmente puede colar toda su carga en 30\u201390 minutos. La mayor\u00eda de los proveedores requieren un pedido m\u00ednimo de 1 metro c\u00fabico, con cargos adicionales para pedidos menores a 3\u20134 metros c\u00fabicos. El cami\u00f3n debe tener acceso a unos 60 metros del punto de colado, o necesitar\u00e1s una bomba de concreto ($2,000\u2013$5,000 MXN por hora) para alcanzar m\u00e1s lejos.",

    whatIsBaggedHeading: "\u00bfQu\u00e9 es el Concreto en Bultos?",
    whatIsBaggedText1:
      "El concreto en bultos es una mezcla seca pre-dosificada de cemento Portland, arena y grava que se vende en sacos en ferreter\u00edas y materiales de construcci\u00f3n. Las marcas m\u00e1s comunes incluyen Cemex, Holcim y Cruz Azul, adem\u00e1s de marcas propias de tiendas. Los bultos vienen en presentaciones de 25 kg y 50 kg. Agregas agua, mezclas a mano o con mezcladora, y lo viertes en tus moldes. Un bulto de 50 kg rinde aproximadamente 25 litros de concreto terminado, lo que significa que necesitas unos 40 bultos para hacer un metro c\u00fabico.",
    whatIsBaggedText2:
      "El concreto en bultos t\u00edpicamente alcanza f'c=200 kg/cm\u00b2 a los 28 d\u00edas, comparable al concreto premezclado residencial est\u00e1ndar. La ventaja es que compras exactamente lo que necesitas en cualquier ferreter\u00eda, mezclas a tu ritmo y no requieres acceso para equipo pesado. La desventaja es que mezclar es trabajo f\u00edsico intenso, y los vol\u00famenes grandes se vuelven impr\u00e1cticos r\u00e1pidamente \u2014 mezclar 40 bultos para un solo metro c\u00fabico toma varias horas de trabajo pesado.",

    comparisonHeading: "Premezclado vs Bultos: Comparaci\u00f3n",
    comparisonSubheading:
      "C\u00f3mo se comparan el concreto entregado por revolvedora y el concreto en bultos en los factores que m\u00e1s importan.",
    comparisonCol1: "Factor",
    comparisonCol2: "Premezclado (Revolvedora)",
    comparisonCol3: "En Bultos",
    comparisonRows: [
      {
        category: "Costo por Metro C\u00fabico",
        readyMix: "$2,500\u2013$3,500 MXN/m\u00b3 (solo material). Cargos de env\u00edo de $800\u2013$2,000 MXN pueden aplicar.",
        bagged: "$2,800\u2013$4,000 MXN/m\u00b3 (unos 40 bultos de 50 kg a $70\u2013$100 MXN cada uno).",
      },
      {
        category: "Pedido M\u00ednimo",
        readyMix: "1 m\u00b3 m\u00ednimo. Cargos adicionales por pedidos menores a 3\u20134 m\u00b3.",
        bagged: "Sin m\u00ednimo. Compra los bultos que necesites.",
      },
      {
        category: "Resistencia",
        readyMix: "Personalizable: f'c=150 a f'c=350+ kg/cm\u00b2. Residencial est\u00e1ndar es f'c=200\u2013250.",
        bagged: "Est\u00e1ndar f'c=200 kg/cm\u00b2. Bultos de alta resistencia disponibles a f'c=250.",
      },
      {
        category: "Conveniencia",
        readyMix: "Llega listo para colar. Sin mezcla. R\u00e1pido para grandes vol\u00famenes.",
        bagged: "Se mezcla en obra. Trabajo intenso para grandes cantidades.",
      },
      {
        category: "Tiempo de Mezcla",
        readyMix: "Cero \u2014 llega pre-mezclado. Tiempo de colado depende de acceso y volumen.",
        bagged: "3\u20135 minutos por bulto a mano. 1\u20132 minutos con mezcladora.",
      },
      {
        category: "Mejor Para",
        readyMix: "Cocheras, losas >10 m\u00b2, cimentaciones, zapatas, colados grandes.",
        bagged: "Postes de cerca, peque\u00f1as bases, reparaciones, ubicaciones remotas.",
      },
      {
        category: "Vida \u00datil",
        readyMix: "Debe colarse en 60\u201390 minutos del preparado. Sin almacenamiento.",
        bagged: "6\u201312 meses si se mantiene seco y sellado. Compra anticipada para proyectos de fin de semana.",
      },
      {
        category: "Control de Calidad",
        readyMix: "Dise\u00f1o de mezcla controlado en planta. Consistente lote a lote. Probado seg\u00fan normas.",
        bagged: "Depende de tu t\u00e9cnica de mezcla y proporci\u00f3n de agua. M\u00e1s margen de error.",
      },
    ],

    costHeading: "Desglose de Costos: Premezclado vs Bultos",
    costIntro:
      "El costo por metro c\u00fabico de concreto es sorprendentemente similar entre ambas opciones. La diferencia real viene de los costos de env\u00edo, mano de obra y la escala de tu proyecto.",
    costText1:
      "Concreto en bultos: Un bulto de 50 kg cuesta $70\u2013$100 MXN en la mayor\u00eda de las ferreter\u00edas (precios 2026). Cada bulto de 50 kg rinde unos 25 litros. Un metro c\u00fabico equivale a 1,000 litros, as\u00ed que necesitas aproximadamente 40 bultos por metro c\u00fabico. A $85 MXN por bulto, eso es $3,400 MXN por metro c\u00fabico solo en material. Los bultos de 25 kg ($40\u2013$55 MXN) son m\u00e1s manejables pero menos econ\u00f3micos por litro.",
    costText2:
      "Concreto premezclado: El precio base para concreto f'c=200 premezclado var\u00eda de $2,500 a $3,500 MXN por metro c\u00fabico, dependiendo de tu regi\u00f3n y el costo actual del cemento. La mayor\u00eda de los proveedores agregan cargos de env\u00edo ($800\u2013$2,000 MXN por viaje) y pueden cobrar cargos por pedidos peque\u00f1os para \u00f3rdenes menores a su m\u00ednimo (t\u00edpicamente 3\u20134 m\u00b3). Para un colado de cochera de 4 m\u00b3, espera pagar $10,000\u2013$16,000 MXN en material m\u00e1s $800\u2013$2,000 MXN en cargos.",
    costText3:
      "Conclusi\u00f3n: Para proyectos menores a medio metro c\u00fabico (unos 20 bultos), el concreto en bultos es casi siempre m\u00e1s barato y pr\u00e1ctico. Para proyectos mayores a 1 metro c\u00fabico, la revolvedora te ahorra horas de trabajo y t\u00edpicamente cuesta menos por metro c\u00fabico si consideras tu tiempo. El punto de equilibrio es usualmente alrededor de 0.75\u20131.0 metros c\u00fabicos.",

    whenReadyMixHeading: "Cu\u00e1ndo Elegir Concreto Premezclado",
    whenReadyMixIntro:
      "El concreto premezclado es la opci\u00f3n clara para proyectos grandes donde el volumen, la velocidad y la consistencia importan. Estas son las situaciones donde pedir una revolvedora es la decisi\u00f3n correcta:",
    whenReadyMixItems: [
      "Proyectos que requieren m\u00e1s de 1 metro c\u00fabico \u2014 Mezclar m\u00e1s de 40 bultos a mano es agotador, lento y aumenta el riesgo de juntas fr\u00edas (donde el concreto fresco se encuentra con concreto parcialmente fraguado). Una revolvedora lo entrega todo de una vez.",
      "Cocheras, patios y losas grandes \u2014 Una cochera t\u00edpica para 2 autos (6\u00d76 m, 10 cm de espesor) requiere unos 4 metros c\u00fabicos. Eso ser\u00edan 160+ bultos. Una revolvedora cuela esto en menos de una hora.",
      "Zapatas y muros de cimentaci\u00f3n \u2014 El concreto estructural para cimentaciones debe colarse de forma continua cuando sea posible. El premezclado proporciona el volumen y la consistencia que los inspectores esperan para trabajo estructural.",
      "Colados con tiempo cr\u00edtico \u2014 Si rentaste cimbra, contrataste cuadrilla de acabado o tienes una ventana de clima limitada, la revolvedora elimina las horas de mezcla que requiere el concreto en bultos.",
      "Proyectos que requieren resistencia espec\u00edfica o aditivos \u2014 Las plantas pueden personalizar la mezcla con fibra, acelerantes (para clima fr\u00edo), retardantes (para clima caliente), aire incluido (para ciclos de hielo-deshielo) y resistencias espec\u00edficas.",
      "Cuando tienes buen acceso para el cami\u00f3n \u2014 Si la revolvedora puede acercarse a 60 metros de tu punto de colado con camino despejado, es la opci\u00f3n m\u00e1s eficiente. Para acceso m\u00e1s dif\u00edcil, una bomba agrega costo pero sigue siendo mejor que mezclar cientos de bultos.",
    ],
    whenReadyMixSummary:
      "Regla general: si tu proyecto necesita m\u00e1s de 1 metro c\u00fabico, llama a un proveedor de premezclado. El ahorro en mano de obra solo justifica el costo de env\u00edo.",

    whenBaggedHeading: "Cu\u00e1ndo Elegir Concreto en Bultos",
    whenBaggedIntro:
      "El concreto en bultos es excelente para proyectos peque\u00f1os y r\u00e1pidos donde pedir una revolvedora ser\u00eda excesivo. Estos son los mejores usos:",
    whenBaggedItems: [
      "Postes de cerca y buz\u00f3n \u2014 Cada pozo de poste t\u00edpicamente necesita 1\u20132 bultos de 50 kg. Puedes colocar postes uno a uno a tu ritmo, y algunas f\u00f3rmulas de fraguado r\u00e1pido permiten verter la mezcla seca directamente en el pozo y agregar agua encima.",
      "Trabajos de reparaci\u00f3n peque\u00f1os \u2014 Parchar una secci\u00f3n de banqueta, rellenar un hueco, reparar un escal\u00f3n o renovar una superficie deteriorada. Estos trabajos pueden necesitar solo 2\u201310 bultos.",
      "Proyectos menores a 0.5 metros c\u00fabicos \u2014 Peque\u00f1as bases para equipos de aire acondicionado, botes de basura, bases de jacuzzi o secciones peque\u00f1as de andador. Con 20 bultos o menos, la mezcla es manejable.",
      "Ubicaciones remotas o de dif\u00edcil acceso \u2014 Proyectos en patios traseros detr\u00e1s de bardas, zapatas de muros de contenci\u00f3n en laderas o sitios rurales donde la revolvedora no puede llegar. Los bultos se pueden cargar a mano a casi cualquier ubicaci\u00f3n.",
      "Proyectos de fin de semana \u2014 Si quieres trabajar a tu ritmo sin la presi\u00f3n de un cami\u00f3n esperando (los operadores t\u00edpicamente dan 5\u20137 minutos por metro c\u00fabico antes de cobrar tiempo extra), los bultos te permiten tomarte tu tiempo.",
      "Cuando ya tienes los bultos \u2014 Si te sobraron bultos de un proyecto anterior o puedes conseguir un buen precio por tarima, usa lo que tienes. Solo verifica que los bultos est\u00e9n en buen estado (sin grumos o secciones endurecidas).",
    ],
    whenBaggedSummary:
      "Regla general: si tu proyecto necesita menos de 20 bultos (unos 0.5 metros c\u00fabicos), el concreto en bultos es m\u00e1s simple, m\u00e1s barato y no requiere programar entregas.",

    calculatorCtaHeading: "Calcula Tu Concreto",
    calculatorCtaText:
      "Usa nuestras calculadoras gratuitas para saber exactamente cu\u00e1ntos metros c\u00fabicos o bultos necesitas para tu proyecto:",
    calculatorLinks: [
      {
        label: "Calculadora de Concreto",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calcula metros c\u00fabicos y bultos necesarios para losas, zapatas, columnas y formas personalizadas.",
      },
      {
        label: "Calculadora de Anclas",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Determina el espaciado y cantidad de anclas para tu cimentaci\u00f3n de concreto.",
      },
      {
        label: "Calculadora de Dala de Desplante",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Estima la madera de dala de desplante para la parte superior de tus muros de cimentaci\u00f3n.",
      },
      {
        label: "Calculadora de Sello de Dala",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calcula el empaque sellador necesario entre cimentaci\u00f3n y estructura.",
      },
    ],

    faqHeading: "Preguntas Frecuentes",
    faqs: [
      {
        question: "\u00bfCu\u00e1ntos bultos de concreto hacen 1 metro c\u00fabico?",
        answer:
          "Necesitas aproximadamente 40 bultos de 50 kg o 80 bultos de 25 kg para hacer 1 metro c\u00fabico. Un bulto de 50 kg rinde unos 25 litros, y hay 1,000 litros en un metro c\u00fabico (1,000 / 25 = 40 bultos). Por esto la mayor\u00eda de los proyectos mayores a 1 m\u00b3 son mejor atendidos por entrega de premezclado.",
      },
      {
        question: "\u00bfEl concreto premezclado es m\u00e1s resistente que el de bultos?",
        answer:
          "No necesariamente. El concreto en bultos est\u00e1ndar alcanza f'c=200 kg/cm\u00b2 a los 28 d\u00edas, mientras que el premezclado residencial est\u00e1ndar se prepara t\u00edpicamente a f'c=200\u2013250 kg/cm\u00b2. Ambos son m\u00e1s que adecuados para cocheras, patios, banquetas y zapatas. La ventaja del premezclado es que se mezcla profesionalmente con proporciones agua-cemento precisas, lo que hace la calidad m\u00e1s consistente.",
      },
      {
        question: "\u00bfPuedo colar concreto premezclado yo mismo?",
        answer:
          "S\u00ed, muchos propietarios piden premezclado para proyectos propios. El proveedor entrega la revolvedora y t\u00fa diriges el colado en tus moldes preparados. Necesitar\u00e1s ayudantes (2\u20133 personas m\u00ednimo) para nivelar, alisar y dar acabado al concreto antes de que frag\u00fce. Planifica todo antes de que llegue la revolvedora: cimbra construida, acero colocado, herramientas listas y ayudantes informados.",
      },
      {
        question: "\u00bfCu\u00e1l es el pedido m\u00ednimo de concreto premezclado?",
        answer:
          "La mayor\u00eda de los proveedores de premezclado tienen un pedido m\u00ednimo de 1 metro c\u00fabico. Sin embargo, muchos cobran un cargo adicional por pedidos menores a 3\u20134 metros c\u00fabicos. Este cargo t\u00edpicamente oscila entre $500 y $1,500 MXN por metro c\u00fabico por debajo del m\u00ednimo. Siempre pregunta a tu proveedor sobre su estructura de costos antes de ordenar.",
      },
      {
        question: "\u00bfCu\u00e1nto tiempo tarda en fraguar el concreto en bultos?",
        answer:
          "El concreto en bultos est\u00e1ndar frag\u00fca lo suficiente para caminar sobre \u00e9l en 24\u201348 horas, pero no alcanza la resistencia de dise\u00f1o completa (f'c=200 kg/cm\u00b2) hasta los 28 d\u00edas. Las f\u00f3rmulas de fraguado r\u00e1pido frag\u00fcan en 20\u201340 minutos y alcanzan resistencia para caminar en 4\u20136 horas, siendo ideales para postes de cerca y reparaciones peque\u00f1as. Durante el curado, mant\u00e9n el concreto h\u00famedo los primeros 3\u20137 d\u00edas para m\u00e1xima resistencia.",
      },
      {
        question: "\u00bfPuedo mezclar diferentes marcas de concreto en bultos?",
        answer:
          "S\u00ed, puedes mezclar concreto de Cemex, Holcim, Cruz Azul y otras marcas est\u00e1ndar. Todas usan los mismos ingredientes b\u00e1sicos (cemento Portland, arena, grava). Sin embargo, no mezcles concreto regular con productos especiales como concreto de fraguado r\u00e1pido, mortero o mezcla para superficies, ya que tienen formulaciones y tiempos de fraguado diferentes. Usa el mismo tipo dentro de un colado para resultados consistentes.",
      },
    ],
  },

  concreteCostGuide: {
    title: "\u00bfCu\u00e1nto Cuesta el Concreto? Gu\u00eda de Precios 2026",
    metaDescription:
      "El concreto premezclado cuesta $2,500\u2013$3,500 MXN por metro c\u00fabico. Gu\u00eda completa de precios 2026 para losas, zapatas, cocheras, concreto en bultos, mano de obra y consejos de ahorro.",

    heroTitle: "\u00bfCu\u00e1nto Cuesta el Concreto?",
    heroSubtitle: "Gu\u00eda de Precios 2026",
    heroDescription:
      "Un desglose completo de precios de concreto para cada tipo de proyecto residencial. Cubre entregas de premezclado, concreto en bultos, costos de mano de obra y los factores que afectan lo que pagar\u00e1s.",

    quickAnswerHeading: "Respuesta R\u00e1pida",
    quickAnswerText:
      "El concreto premezclado cuesta $2,500\u2013$3,500 MXN por metro c\u00fabico entregado en 2026, con la mayor\u00eda de los propietarios pagando $2,800\u2013$3,200 MXN por metro c\u00fabico para concreto residencial est\u00e1ndar f'c=200\u2013250. El costo total instalado (incluyendo mano de obra, cimbra y acabado) var\u00eda de $800\u2013$2,000 MXN por metro cuadrado para trabajo plano como cocheras, patios y banquetas. El concreto en bultos cuesta $70\u2013$100 MXN por bulto de 50 kg, lo que equivale a unos $2,800\u2013$4,000 MXN por metro c\u00fabico solo en material.",

    costByProjectHeading: "Costo de Concreto por Tipo de Proyecto",
    costByProjectIntro:
      "Lo que pagar\u00e1s por concreto depende mucho del tipo y tama\u00f1o del proyecto. Aqu\u00ed est\u00e1n los costos t\u00edpicos de 2026 para proyectos residenciales comunes, incluyendo material e instalaci\u00f3n profesional:",
    costByProjectColProject: "Proyecto",
    costByProjectColTypical: "Costo T\u00edpico",
    costByProjectColNotes: "Notas",
    costByProjectRows: [
      { project: "Cochera (2 autos, 6\u00d76 m)", typical: "$25,000\u2013$50,000 MXN", notes: "4+ m\u00b3. Acabado escobillado. Estampado o coloreado agrega 30\u201350%." },
      { project: "Patio (4\u00d75 m)", typical: "$15,000\u2013$30,000 MXN", notes: "2+ m\u00b3. Acabado escobillado. Opciones decorativas cuestan m\u00e1s." },
      { project: "Banqueta (1.2 m ancho, 10 m largo)", typical: "$10,000\u2013$20,000 MXN", notes: "1.5+ m\u00b3. Incluye cimbra, colado y acabado." },
      { project: "Piso de Cochera (7\u00d77 m)", typical: "$30,000\u2013$55,000 MXN", notes: "6+ m\u00b3. 10\u201315 cm de espesor. Malla electrosoldada o fibra." },
      { project: "Zapatas de Cimentaci\u00f3n (casa 140 m\u00b2)", typical: "$25,000\u2013$60,000 MXN", notes: "5\u201310 m\u00b3 seg\u00fan dise\u00f1o. Acero de refuerzo incluido." },
      { project: "Muros de Cimentaci\u00f3n (s\u00f3tano completo)", typical: "$80,000\u2013$200,000 MXN", notes: "12\u201325 m\u00b3. Incluye cimbra, acero e impermeabilizaci\u00f3n." },
      { project: "Escalones de Concreto (5 pelda\u00f1os, 1.2 m ancho)", typical: "$8,000\u2013$18,000 MXN", notes: "0.5\u20131.5 m\u00b3. Cimbra y acabado intensivos en mano de obra." },
      { project: "Zapatas para Postes (20 postes)", typical: "$2,000\u2013$4,000 MXN (hecho por ti)", notes: "1\u20132 bultos por poste. Concreto en bultos, sin revolvedora." },
    ],

    baggedCostHeading: "Costos de Concreto en Bultos",
    baggedCostIntro:
      "El concreto en bultos se vende en ferreter\u00edas y tiendas de materiales. Los precios var\u00edan por tama\u00f1o de bulto, marca y regi\u00f3n:",
    baggedCostText1:
      "Tama\u00f1os y precios est\u00e1ndar de bultos (2026): Bultos de 25 kg cuestan $40\u2013$55 MXN cada uno (rinden ~12.5 litros). Bultos de 50 kg cuestan $70\u2013$100 MXN cada uno (rinden ~25 litros). El bulto de 50 kg ofrece el mejor precio por litro, pero a 50 kg por bulto, el trabajo f\u00edsico de mezcla es considerable. Muchos autoconstructores prefieren bultos de 25 kg como compromiso entre costo y manejabilidad.",
    baggedCostText2:
      "Costo por metro c\u00fabico en bultos: Usando bultos de 50 kg a $85 MXN cada uno, un metro c\u00fabico cuesta aproximadamente $3,400 MXN en material (40 bultos). Estos precios son mayores que la entrega de premezclado ($2,500\u2013$3,500/m\u00b3), pero los bultos no tienen cargos de env\u00edo, sin pedidos m\u00ednimos y sin cobros por tiempo de espera. Para proyectos peque\u00f1os menores a 0.5 metros c\u00fabicos, los bultos son casi siempre la opci\u00f3n m\u00e1s econ\u00f3mica.",
    baggedCostText3:
      "Los bultos de concreto especial cuestan m\u00e1s: Concreto de fraguado r\u00e1pido cuesta $90\u2013$130 MXN por bulto de 50 kg. Concreto de alta resistencia temprana ($85\u2013$120 MXN) y mezcla con fibra anti-grietas ($90\u2013$120 MXN) son opciones premium. Para la mayor\u00eda de cocheras, patios y zapatas, la mezcla est\u00e1ndar f'c=200 es todo lo que necesitas.",

    readyMixPricingHeading: "Precios de Concreto Premezclado",
    readyMixPricingIntro:
      "El premezclado se ordena por metro c\u00fabico y se entrega por revolvedora. Esto es lo que puedes esperar al llamar a un proveedor local:",
    readyMixPricingText1:
      "Precio base: Concreto est\u00e1ndar f'c=200 cuesta $2,500\u2013$3,200 MXN por metro c\u00fabico en la mayor\u00eda de los mercados. La mezcla premium f'c=250 cuesta $2,800\u2013$3,500 MXN por m\u00b3. Alta resistencia f'c=300 cuesta $3,200\u2013$4,000 MXN por m\u00b3. Los precios var\u00edan por regi\u00f3n \u2014 las zonas metropolitanas con m\u00faltiples proveedores tienden a ser m\u00e1s baratas que las zonas rurales con competencia limitada.",
    readyMixPricingText2:
      "Cargos adicionales: Cargo de env\u00edo de $800\u2013$2,000 MXN por viaje (cubre combustible y operador). Cargo por pedido peque\u00f1o de $500\u2013$1,500 MXN por m\u00b3 para pedidos menores a 3\u20134 m\u00b3. Cargo por tiempo extra de $15\u2013$50 MXN por minuto si el colado toma m\u00e1s del tiempo asignado (t\u00edpicamente 5\u20137 minutos por m\u00b3). Recargo por entrega en s\u00e1bado de $500\u2013$2,000 MXN en algunas plantas.",
    readyMixPricingText3:
      "Aditivos y mejoras: Aire incluido (resistencia a hielo-deshielo) agrega $50\u2013$120 MXN por m\u00b3. Fibra de refuerzo agrega $80\u2013$200 MXN por m\u00b3. Acelerante (acelera curado en fr\u00edo) agrega $80\u2013$250 MXN por m\u00b3. Retardante (retrasa curado en calor) agrega $50\u2013$150 MXN por m\u00b3. Pigmento de color agrega $150\u2013$400 MXN por m\u00b3. Bomba de concreto (para colados de dif\u00edcil acceso) agrega $2,000\u2013$5,000 MXN por hora.",

    factorsHeading: "Factores que Afectan el Costo del Concreto",
    factorsIntro:
      "El precio que pagar\u00e1s por concreto depende de varios factores m\u00e1s all\u00e1 del volumen que necesitas. Entenderlos te ayudar\u00e1 a presupuestar con mayor precisi\u00f3n:",
    factorsItems: [
      "Ubicaci\u00f3n \u2014 Los precios del concreto var\u00edan significativamente por regi\u00f3n. Las zonas metropolitanas como CDMX, Monterrey y Guadalajara tienden a tener precios m\u00e1s competitivos. Las zonas rurales pagan m\u00e1s por distancias de entrega mayores. Siempre obtén cotizaciones de al menos 2\u20133 proveedores locales.",
      "Cantidad ordenada \u2014 Ordenar m\u00e1s concreto reduce tu costo por metro c\u00fabico. Los cargos por pedidos peque\u00f1os (menores a 3\u20134 m\u00b3) pueden agregar $500\u2013$1,500 MXN por m\u00b3. Si est\u00e1s cerca del m\u00ednimo, considera agregar un peque\u00f1o proyecto para alcanzarlo.",
      "Resistencia (f'c) \u2014 Mayor resistencia cuesta m\u00e1s. f'c=200 est\u00e1ndar es adecuado para banquetas y patios. f'c=250 se recomienda para cocheras y pisos de garaje. f'c=300 se usa para cargas pesadas. Cada nivel agrega $200\u2013$500 MXN por metro c\u00fabico.",
      "Aditivos y dise\u00f1o de mezcla \u2014 Aire incluido, fibra de refuerzo, acelerantes, retardantes y pigmentos de color agregan $50\u2013$400 MXN por m\u00b3. En climas fr\u00edos, el aire incluido es esencialmente obligatorio para concreto exterior.",
      "Temporada del a\u00f1o \u2014 Los precios tienden a ser m\u00e1s altos en primavera y verano cuando la demanda est\u00e1 en su punto m\u00e1ximo. Los colados en invierno pueden ser m\u00e1s baratos por m\u00b3 pero requieren agua caliente, cobijas aislantes y acelerantes que pueden compensar el ahorro. El oto\u00f1o es a menudo el punto ideal para precios y temperaturas de curado.",
      "Distancia de entrega \u2014 La mayor\u00eda de las plantas incluyen entrega dentro de un radio de 15\u201330 km en su precio base. M\u00e1s all\u00e1, espera recargos de $20\u2013$50 MXN por km adicional. Para sitios remotos, estos costos pueden agregar $1,000\u2013$4,000 MXN a tu total.",
    ],

    laborHeading: "Costos de Mano de Obra: Hacerlo T\u00fa vs Contratar",
    laborIntro:
      "El costo del concreto en s\u00ed es frecuentemente menos de la mitad del costo total del proyecto. La mano de obra, cimbra, acabado y preparaci\u00f3n del sitio componen el resto:",
    laborText1:
      "Costos de hacerlo t\u00fa: Si haces el trabajo t\u00fa mismo, tus costos principales son concreto ($2,500\u2013$3,500/m\u00b3 para premezclado o $2,800\u2013$4,000/m\u00b3 en bultos), madera para cimbra ($500\u2013$2,000 MXN), malla o varilla ($300\u2013$1,000 MXN) y renta de herramientas ($500\u2013$1,500 MXN para vibrador, flota, rayador). Un patio t\u00edpico de 3\u00d73 m (unos 1 m\u00b3) podr\u00eda costar $4,000\u2013$7,000 MXN en materiales como proyecto propio, comparado con $12,000\u2013$20,000 MXN instalado por un contratista.",
    laborText2:
      "Costos de contratista: El trabajo profesional de concreto t\u00edpicamente cuesta $800\u2013$2,000 MXN por metro cuadrado instalado para trabajo plano (losa, cochera, patio, banqueta). Esto incluye preparaci\u00f3n del sitio, base de grava, cimbra, malla o varilla, concreto, colado, acabado y limpieza b\u00e1sica. Los acabados decorativos (estampado, coloreado) agregan $300\u2013$800 MXN por metro cuadrado.",
    laborText3:
      "Cu\u00e1ndo contratar un profesional: Considera contratar un especialista en concreto para cualquier trabajo estructural (cimentaciones, zapatas portantes), cualquier colado mayor a 3 metros c\u00fabicos, acabados decorativos o estampados, superficies con pendiente o cr\u00edticas para drenaje, y cualquier proyecto que requiera permiso de construcci\u00f3n e inspecci\u00f3n. El costo de corregir un colado mal hecho (demolici\u00f3n y reemplazo) es 2\u20133 veces el costo de hacerlo bien desde el principio.",

    savingTipsHeading: "Consejos para Ahorrar",
    savingTipsIntro:
      "Hay varias formas de reducir tus costos de concreto sin sacrificar calidad:",
    savingTipsItems: [
      "Obtén m\u00faltiples cotizaciones \u2014 Los precios pueden variar 15\u201330% entre proveedores de premezclado en la misma zona. Llama al menos a 3 proveedores y pide su desglose completo incluyendo env\u00edo, cargos por pedido peque\u00f1o y tiempo extra.",
      "Ordena la cantidad correcta \u2014 Ordenar de m\u00e1s desperdicia dinero; ordenar de menos significa un segundo viaje costoso. Usa nuestra calculadora de concreto para una estimaci\u00f3n precisa, luego agrega 5\u201310% para desperdicio e irregularidades del terreno.",
      "Evita cargos por pedido peque\u00f1o \u2014 Si tu proyecto necesita 2.5 m\u00b3 y el umbral es 3 m\u00b3, ordena 3 m\u00b3 y usa el extra para un proyecto peque\u00f1o adicional (pasos, una peque\u00f1a base, relleno de huecos). El medio metro c\u00fabico extra cuesta menos que el cargo.",
      "Programa fuera de temporada alta \u2014 Si tu cronograma es flexible, programa colados para martes a jueves en oto\u00f1o o inicio de primavera. Las entregas de fin de semana y temporada alta frecuentemente tienen recargos.",
      "Haz tu propia preparaci\u00f3n \u2014 Incluso si contratas a alguien para el colado, puedes ahorrar $5,000\u2013$15,000 MXN haciendo la excavaci\u00f3n, base de grava y cimbra t\u00fa mismo. Los contratistas con gusto cuelan en tu cimbra si est\u00e1 bien construida.",
      "Compara bultos vs premezclado para trabajos peque\u00f1os \u2014 Para proyectos menores a 1 m\u00b3, haz los c\u00e1lculos de ambas formas. Considera el valor de tu tiempo: mezclar 30+ bultos toma 3\u20134 horas de trabajo pesado. Si tu tiempo vale $200 MXN/hora, eso agrega $600\u2013$800 MXN al costo en bultos.",
    ],

    calculatorCtaHeading: "Calcula Tus Costos de Concreto",
    calculatorCtaText:
      "Usa nuestras calculadoras gratuitas para estimar el volumen exacto de concreto que necesita tu proyecto, luego multiplica por tu precio local por metro c\u00fabico para un presupuesto preciso:",
    calculatorLinks: [
      {
        label: "Calculadora de Concreto",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calcula metros c\u00fabicos y bultos necesarios para losas, zapatas, columnas y formas personalizadas.",
      },
      {
        label: "Calculadora de Anclas",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Determina el espaciado y cantidad de anclas para tu cimentaci\u00f3n de concreto.",
      },
      {
        label: "Calculadora de Dala de Desplante",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Estima la madera de dala de desplante para la parte superior de tus muros de cimentaci\u00f3n.",
      },
      {
        label: "Calculadora de Sello de Dala",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calcula el empaque sellador necesario entre cimentaci\u00f3n y estructura.",
      },
    ],

    faqHeading: "Preguntas Frecuentes",
    faqs: [
      {
        question: "\u00bfCu\u00e1nto cuesta un metro c\u00fabico de concreto en 2026?",
        answer:
          "Un metro c\u00fabico de concreto premezclado cuesta $2,500\u2013$3,500 MXN por el material, dependiendo de tu regi\u00f3n y la resistencia. Agrega cargos de env\u00edo ($800\u2013$2,000 MXN) y posibles cargos por pedido peque\u00f1o. El costo total entregado para un pedido residencial t\u00edpico de 3\u20134 m\u00b3 es usualmente $2,800\u2013$3,300 MXN por metro c\u00fabico todo incluido.",
      },
      {
        question: "\u00bfCu\u00e1nto cuesta colar una losa de 3\u00d73 metros?",
        answer:
          "Una losa de 3\u00d73 m (10 cm de espesor) requiere aproximadamente 1 metro c\u00fabico de concreto. El costo de material haci\u00e9ndolo t\u00fa es $3,500\u2013$6,000 MXN (concreto, cimbra, malla, grava). Instalada profesionalmente, espera $8,000\u2013$18,000 MXN dependiendo de la preparaci\u00f3n del sitio, acabado y tu mercado laboral local.",
      },
      {
        question: "\u00bfEs m\u00e1s barato mezclar tu propio concreto u ordenar premezclado?",
        answer:
          "Para proyectos peque\u00f1os (menos de 1 m\u00b3), mezclar bultos t\u00fa mismo es m\u00e1s barato en costo de material. Para proyectos mayores a 1 m\u00b3, el premezclado es casi siempre m\u00e1s barato por metro c\u00fabico y ahorra horas de trabajo. El punto de equilibrio es t\u00edpicamente alrededor de 0.75\u20131.0 metros c\u00fabicos.",
      },
      {
        question: "\u00bfCu\u00e1nto cuesta una cochera de concreto?",
        answer:
          "Una cochera de concreto est\u00e1ndar para 2 autos (aproximadamente 6\u00d76 m, 10 cm de espesor) cuesta $25,000\u2013$50,000 MXN instalada en 2026. Esto incluye unos 4 metros c\u00fabicos de concreto, base de grava, cimbra, malla electrosoldada y acabado escobillado. Las cocheras de concreto estampado o decorativo cuestan $45,000\u2013$80,000 MXN seg\u00fan el patr\u00f3n y color.",
      },
      {
        question: "\u00bfPor qu\u00e9 el costo del concreto var\u00eda tanto por regi\u00f3n?",
        answer:
          "Los precios del concreto dependen del costo del cemento Portland (que var\u00eda seg\u00fan la proximidad a plantas cementeras), costos locales de agregados, precios de combustible para camiones, tarifas del mercado laboral y competencia entre proveedores. Las zonas metropolitanas con m\u00faltiples plantas tienden a tener precios m\u00e1s bajos. Las ubicaciones remotas pagan m\u00e1s por costos de transporte.",
      },
      {
        question: "\u00bfCu\u00e1nto concreto necesito para un proyecto?",
        answer:
          "El concreto se mide en metros c\u00fabicos. Para losas rectangulares: multiplica largo (m) \u00d7 ancho (m) \u00d7 espesor (m) para obtener metros c\u00fabicos. Una losa de 3\u00d73 m con 10 cm de espesor = 3 \u00d7 3 \u00d7 0.10 = 0.9 metros c\u00fabicos. Siempre agrega 5\u201310% por desperdicio e irregularidades del terreno. Usa nuestra calculadora de concreto gratuita para resultados exactos en losas, zapatas, columnas y formas personalizadas.",
      },
    ],
  },

  howMuchPaint: {
    title: "\u00bfCu\u00e1nta Pintura Necesito? Gu\u00eda Completa",
    metaDescription:
      "\u00bfCu\u00e1nta pintura necesito? Gu\u00eda completa sobre medici\u00f3n de muros, rendimiento por tipo de pintura, n\u00famero de manos, preparaci\u00f3n de superficies, pintura para techos y molduras, y desglose de costos.",

    heroTitle: "\u00bfCu\u00e1nta Pintura Necesito?",
    heroSubtitle: "Gu\u00eda Completa",
    heroDescription:
      "Todo lo que necesitas saber para calcular la cantidad correcta de pintura para muros, techos y molduras \u2014 evita comprar de m\u00e1s o quedarte corto a mitad del proyecto.",

    quickAnswerHeading: "Respuesta R\u00e1pida",
    quickAnswerText:
      "Un litro de pintura vin\u00edlica interior cubre aproximadamente 10 a 12 metros cuadrados por mano. Para un cuarto est\u00e1ndar (3x3 m, techos de 2.5 m), necesitas entre 5 y 6 litros para dos manos en los muros. Agrega 2 litros para el techo y 1 litro para molduras y puertas. Siempre redondea hacia arriba \u2014 la pintura sobrante es esencial para futuros retoques.",

    measuringWallsHeading: "C\u00f3mo Medir Tus Muros",
    measuringWallsIntro:
      "Las mediciones precisas de muros son la base de cualquier estimado de pintura. As\u00ed es como medir como un pintor profesional:",
    measuringWallsItems: [
      "Mide el largo de cada muro en metros y mult\u00edplica por la altura del techo. Un muro de 4 metros con techos de 2.5 m = 10 metros cuadrados. Repite para los cuatro muros y s\u00famalos.",
      "Para c\u00e1lculos r\u00e1pidos del cuarto completo, mide el per\u00edmetro (suma de todos los largos de muro) y mult\u00edplica por la altura del techo. Un cuarto de 3x4 m tiene un per\u00edmetro de 14 m, por techos de 2.5 m = 35 m\u00b2 de \u00e1rea de muros.",
      "Resta aberturas: una puerta est\u00e1ndar es aproximadamente 1.7 m\u00b2 (0.80x2.10 m) y una ventana est\u00e1ndar es aproximadamente 1.5 m\u00b2 (1.0x1.5 m). Para un cuarto con una puerta y dos ventanas, resta unos 4.7 m\u00b2.",
      "Para cuartos con techos inclinados o a dos aguas, mide la altura del muro en el punto m\u00e1s alto y m\u00e1s bajo, saca el promedio y mult\u00edplica por el largo del muro.",
      "Incluye el interior de cl\u00f3sets si planeas pintarlos \u2014 un cl\u00f3set est\u00e1ndar de 0.60x1.80 m agrega unos 5 m\u00b2 de \u00e1rea de muros.",
      "Anota todas las medidas antes de ir a la tienda de pinturas. Toma fotos de los cuartos como referencia al elegir colores.",
    ],
    measuringWallsSummary:
      "Una casa t\u00edpica de 120 m\u00b2 tiene de 300 a 400 metros cuadrados de \u00e1rea de muros pintables, dependiendo de la altura de techos, n\u00famero de cuartos y cantidad de ventanas y puertas.",

    coverageRatesHeading: "Rendimiento por Tipo de Pintura",
    coverageRatesIntro:
      "No todas las pinturas cubren la misma superficie. El rendimiento var\u00eda seg\u00fan el acabado, la calidad y la superficie que est\u00e1s pintando.",
    coverageRatesText1:
      "Los acabados mate tienen el mayor rendimiento con 10 a 12 m\u00b2 por litro porque tienen menor contenido de ligante y se extienden f\u00e1cilmente. Son ideales para techos y cuartos de poco tr\u00e1nsito pero se marcan f\u00e1cilmente y son dif\u00edciles de limpiar. El acabado satinado mate cubre 9 a 11 m\u00b2 por litro y es la opci\u00f3n m\u00e1s popular para salas, rec\u00e1maras y pasillos \u2014 tiene un brillo sutil que es f\u00e1cil de limpiar sin ser demasiado brillante.",
    coverageRatesText2:
      "El acabado satinado cubre 9 a 11 m\u00b2 por litro y es excelente para cocinas, ba\u00f1os y \u00e1reas de alto tr\u00e1nsito debido a su resistencia a la humedad y lavabilidad. El semi-brillante cubre 8 a 10 m\u00b2 por litro y es la opci\u00f3n est\u00e1ndar para molduras, z\u00f3calos, puertas y marcos de ventanas \u2014 su superficie reflectiva es altamente durable y f\u00e1cil de limpiar. El alto brillo cubre 7 a 9 m\u00b2 por litro y se usa para \u00e1reas de acento, gabinetes y muebles donde se desea m\u00e1xima durabilidad.",
    coverageRatesText3:
      "Las pinturas premium de marcas como Comex (Vinimex Total), Sherwin-Williams (Duration) y Berel (Qualitex Premium) logran el extremo superior de estos rangos de rendimiento gracias a su mayor concentraci\u00f3n de pigmento. Las pinturas econ\u00f3micas generalmente quedan en el extremo inferior y pueden requerir una mano adicional. Las superficies texturizadas, porosas o sin pintar reducen el rendimiento un 20 a 30 por ciento \u2014 siempre sella estas superficies primero.",

    numberOfCoatsHeading: "\u00bfCu\u00e1ntas Manos de Pintura Necesitas?",
    numberOfCoatsIntro:
      "El n\u00famero de manos afecta directamente cu\u00e1nta pintura necesitas comprar. Aqu\u00ed es cu\u00e1ndo aplicar una, dos o tres manos:",
    numberOfCoatsItems: [
      "Una mano es suficiente solo para retoques usando exactamente la misma pintura sobre una superficie previamente pintada en buen estado. Algunas pinturas premium anuncian cubrimiento en una mano, pero los pintores profesionales recomiendan dos manos para mejores resultados.",
      "Dos manos es la recomendaci\u00f3n est\u00e1ndar para pr\u00e1cticamente todos los proyectos de pintura. La primera mano sella y prepara la superficie, mientras que la segunda proporciona la profundidad de color final, brillo uniforme y m\u00e1xima durabilidad.",
      "Tres manos son necesarias al hacer un cambio de color dram\u00e1tico \u2014 especialmente al pasar de un color oscuro (rojo, azul marino, verde bosque) a uno claro (blanco, crema, pastel). La primera mano de sellador entintado neutraliza el color anterior, seguida de dos manos de acabado.",
      "La tablaroca nueva siempre requiere una mano de sellador m\u00e1s dos manos de acabado (tres manos en total). El sellador sella la superficie porosa y proporciona una base uniforme. Omitir el sellador causa brillos irregulares \u2014 diferencias visibles de brillo donde la pasta para juntas y el papel absorben pintura a ritmos diferentes.",
      "Las superficies texturizadas como acabado tipo gota, c\u00e1scara de naranja y techos con textura pueden requerir una mano extra porque la textura crea picos y valles dif\u00edciles de cubrir uniformemente.",
    ],
    numberOfCoatsSummary:
      "Para presupuestar, siempre calcula la cantidad de pintura basada en dos manos. Si necesitas sellador, calc\u00falalo por separado al rendimiento del sellador.",

    surfacePrepHeading: "Preparaci\u00f3n de Superficies",
    surfacePrepIntro:
      "La preparaci\u00f3n adecuada de la superficie es el factor m\u00e1s importante para un trabajo de pintura duradero. Ninguna cantidad de pintura cara puede compensar una mala preparaci\u00f3n.",
    surfacePrepItems: [
      "Limpia todas las superficies antes de pintar. El polvo, la grasa y las telara\u00f1as impiden la adherencia de la pintura. Limpia los muros con un trapo h\u00famedo o usa soluci\u00f3n desengrasante para muros de cocina grasosos. Permite que las superficies sequen completamente antes de pintar.",
      "Rellena agujeros de clavos, abolladuras y grietas con masilla ligera para resanar. Aplica con esp\u00e1tula, deja secar y lija suavemente con lija del n\u00famero 150. Para agujeros m\u00e1s grandes (m\u00e1s de 1 cm), usa cinta malla y pasta para juntas en dos capas delgadas.",
      "Lija ligeramente las superficies brillantes con lija del 150 para crear mordiente para la nueva pintura. Esto es especialmente importante al pintar sobre acabados semi-brillantes o de alto brillo.",
      "Retira o lija cualquier pintura suelta, descarapelada o desprendida hasta llegar a una superficie s\u00f3lida. Emparea las orillas de la pintura restante con lija para crear una transici\u00f3n suave.",
      "Aplica cinta de pintor en molduras, z\u00f3calos, l\u00edneas de techo y cualquier \u00e1rea que quieras proteger. Presiona firmemente la cinta con una esp\u00e1tula o tarjeta para evitar que la pintura se cuele por debajo.",
      "Protege pisos y muebles con pl\u00e1stico protector o mantas de lona. Las mantas de lona se adhieren mejor al piso y absorben goteos. Mueve los muebles al centro del cuarto y c\u00fabrelos con pl\u00e1stico.",
    ],

    ceilingPaintHeading: "C\u00e1lculo de Pintura para Techos",
    ceilingPaintIntro:
      "Los techos requieren su propio c\u00e1lculo ya que usan una formulaci\u00f3n de pintura diferente a los muros.",
    ceilingPaintText1:
      "La pintura para techos est\u00e1 formulada espec\u00edficamente con mayor contenido de s\u00f3lidos para mejor resistencia al salpicado al rodar en posici\u00f3n vertical, y seca con un acabado perfectamente mate para minimizar la apariencia de imperfecciones. La pintura est\u00e1ndar para techos cubre de 10 a 12 m\u00b2 por litro. Para calcular la cantidad necesaria, multiplica el largo del cuarto por el ancho \u2014 un cuarto de 3x4 m tiene 12 m\u00b2 de techo. A 11 m\u00b2 por litro, eso es aproximadamente 1.1 litros \u2014 compra 2 litros para ese cuarto.",
    ceilingPaintText2:
      "La mayor\u00eda de los techos solo necesitan una mano si se est\u00e1n pintando del mismo color blanco. Si cambias el color del techo o pintas sobre una mancha, aplica sellador primero y luego dos manos de acabado. Para techos con textura tipo palomita o gota, reduce el rendimiento a 7-9 m\u00b2 por litro porque la textura absorbe m\u00e1s pintura. Para toda una casa de 120 m\u00b2, necesitas t\u00edpicamente 12 a 16 litros de pintura para techos.",

    trimPaintHeading: "C\u00e1lculo de Pintura para Molduras y Puertas",
    trimPaintIntro:
      "Las molduras, z\u00f3calos, puertas y marcos de ventanas t\u00edpicamente se pintan con acabado semi-brillante o satinado por su durabilidad y facilidad de limpieza.",
    trimPaintText1:
      "Z\u00f3calos: Mide los metros lineales totales de z\u00f3calo en el cuarto. Los z\u00f3calos est\u00e1ndar miden de 8 a 14 cm de alto. Un cuarto con 14 metros lineales de z\u00f3calo tiene aproximadamente 1.7 m\u00b2 de superficie pintable. Un litro de pintura para molduras cubre unos 10 a 12 m\u00b2 \u2014 suficiente para los z\u00f3calos de varios cuartos.",
    trimPaintText2:
      "Puertas: Una puerta interior est\u00e1ndar (ambas caras) tiene aproximadamente 3.4 m\u00b2 de superficie pintable. Las molduras de ventana (marco y chambrana) promedian 0.8 m\u00b2 por ventana. La moldura de corona agrega aproximadamente 0.1 m\u00b2 por metro lineal. Para toda una casa, planifica 4 a 8 litros de pintura para molduras para todos los z\u00f3calos, marcos de puertas, molduras de ventanas y coronas. Pinta las puertas con rodillo de espuma para el acabado m\u00e1s liso \u2014 las marcas de brocha son muy visibles en pintura semi-brillante sobre superficies planas grandes.",

    costBreakdownHeading: "Desglose de Costos de Pintura",
    costBreakdownIntro:
      "Entender el costo total de un proyecto de pintura te ayuda a presupuestar con precisi\u00f3n y elegir los productos correctos para tus necesidades.",
    costBreakdownText1:
      "La pintura para muros es el componente de mayor costo. Presupuesta $80 a $400 MXN por litro dependiendo del nivel de calidad. Para un cuarto t\u00edpico que requiere 6 litros a 2 manos, la pintura cuesta $480 a $2,400 MXN. Para una casa completa de 120 m\u00b2 (aproximadamente 65 litros para muros), la pintura cuesta $5,200 a $26,000 MXN. Comprar cubetas de 19 litros ahorra 15 a 20 por ciento por litro comparado con botes individuales.",
    costBreakdownText2:
      "El sellador cuesta $100 a $200 MXN por litro. La construcci\u00f3n nueva (tablaroca sin pintar) requiere aproximadamente 1 litro por cada 10-12 m\u00b2. Para una casa de 120 m\u00b2, eso es 25 a 35 litros de sellador ($2,500 a $7,000 MXN). Las pinturas auto-sellantes (disponibles en l\u00edneas premium) eliminan este costo pero son m\u00e1s caras por litro.",
    costBreakdownText3:
      "Los insumos para pintar el interior de toda una casa cuestan $800 a $2,000 MXN en total: rodillos y repuestos ($150 a $250 MXN), extensi\u00f3n telesc\u00f3pica para techos ($100 a $200 MXN), brochas angulares de 5 cm y 6 cm ($120 a $200 MXN), cinta de pintor ($200 a $400 MXN por varios rollos), pl\u00e1stico protector ($100 a $200 MXN), charolas y forros ($60 a $100 MXN), lija y masilla ($60 a $100 MXN), y trapos y materiales de limpieza ($30 a $60 MXN). Las herramientas de calidad hacen una diferencia significativa en el resultado final.",

    calculatorCtaHeading: "Calcula Tus Necesidades de Pintura",
    calculatorCtaText:
      "Usa nuestras calculadoras gratis de pintura para obtener un estimado instant\u00e1neo y preciso para tu proyecto.",
    calculatorLinks: [
      {
        label: "Calculadora de Rendimiento de Pintura",
        href: "/calculators/finishing/paint-coverage-calculator",
        description: "Cu\u00e1ntos litros para tu \u00e1rea de muros \u2014 con ajustes de manos y rendimiento.",
      },
      {
        label: "Calculadora de Costo de Pintura",
        href: "/calculators/finishing/paint-cost-calculator",
        description: "Costo total del proyecto por nivel de calidad \u2014 incluye estimado de insumos.",
      },
      {
        label: "Calculadora de Sellador",
        href: "/calculators/finishing/primer-calculator",
        description: "Cu\u00e1nto sellador para tu tipo de superficie \u2014 tablaroca nueva, madera o repintado.",
      },
    ],

    faqHeading: "Preguntas Frecuentes",
    faqs: [
      {
        question: "\u00bfCu\u00e1nta pintura necesito para un cuarto de 3x3 metros?",
        answer:
          "Un cuarto de 3x3 m con techos de 2.5 m tiene aproximadamente 30 m\u00b2 de \u00e1rea de muros. Resta unos 4 m\u00b2 por puerta y ventana, quedando 26 m\u00b2 netos. A 10 m\u00b2 por litro con 2 manos, necesitas unos 5.2 litros \u2014 compra 6 litros (un bote de 4 + uno de 1 litro). Agrega 2 litros de pintura para el techo de 9 m\u00b2.",
      },
      {
        question: "\u00bfCu\u00e1ntos metros cuadrados cubre un litro de pintura?",
        answer:
          "Un litro de pintura vin\u00edlica interior cubre de 10 a 12 m\u00b2 en superficies lisas previamente pintadas con una mano. Los acabados mate cubren m\u00e1s cerca de 12 m\u00b2, mientras que los satinados y semi-brillantes cubren unos 9 a 11 m\u00b2. En superficies porosas o texturizadas como tablaroca nueva o aplanado r\u00fastico, espera solo 7 a 9 m\u00b2 por litro.",
      },
      {
        question: "\u00bfConviene comprar botes individuales o cubeta de 19 litros?",
        answer:
          "Las cubetas de 19 litros son 15 a 20 por ciento m\u00e1s baratas por litro y garantizan consistencia de color en todos los muros. Compra cubetas cuando necesites 8 o m\u00e1s litros del mismo color. Para muros de acento o cuartos que necesiten menos de 6 litros, los botes individuales son m\u00e1s pr\u00e1cticos.",
      },
      {
        question: "\u00bfCu\u00e1nto cuesta pintar un cuarto t\u00fa mismo?",
        answer:
          "Un proyecto de pintura de cuarto de bricolaje cuesta $800 a $2,500 MXN en materiales: 6 a 10 litros de pintura ($400 a $1,500 MXN), insumos ($200 a $500 MXN), y sellador opcional ($100 a $200 MXN por litro). Un pintor profesional cobra $2,500 a $5,000 MXN por el mismo cuarto. Para el interior de toda una casa, los costos de bricolaje son $5,000 a $15,000 MXN en materiales vs $20,000 a $60,000 MXN para un equipo profesional.",
      },
      {
        question: "\u00bfNecesito sellador antes de pintar?",
        answer:
          "El sellador es necesario en tablaroca nueva, madera sin tratar, parches reparados y al hacer cambios de color dram\u00e1ticos (oscuro a claro). En superficies previamente pintadas en buen estado con un color similar, puedes omitir el sellador \u2014 especialmente con pinturas auto-sellantes premium. En caso de duda, sella \u2014 cuesta $100 a $200 MXN por litro y ahorra en manos de acabado.",
      },
      {
        question: "\u00bfCu\u00e1l es la mejor pintura para muros interiores en M\u00e9xico?",
        answer:
          "Para la mayor\u00eda de los muros interiores, un acabado satinado mate en calidad media a premium ofrece el mejor balance de apariencia, durabilidad y lavabilidad. Las marcas m\u00e1s recomendadas incluyen Comex Vinimex Total, Sherwin-Williams Duration y Berel Qualitex Premium. Usa acabado mate solo en techos y cuartos de poco tr\u00e1nsito. Usa semi-brillante en molduras, puertas y \u00e1reas de alta humedad como ba\u00f1os.",
      },
    ],
  },
  lumberPrices: {
    title: "Guía de Precios de Madera: ¿Cuánto Cuesta?",
    metaDescription:
      "Precios actuales de madera por especie, grado y medida. Cubre madera dimensionada, madera industrializada, triplay, tendencias de precios, dónde comprar y descuentos por volumen.",
    heroTitle: "Guía de Precios de Madera",
    heroSubtitle: "¿Cuánto Cuesta la Madera?",
    heroDescription:
      "Una guía completa de precios de madera en México y Latinoamérica — desde tablas para estructura hasta maderas duras para mueblería — para que presupuestes con precisión tu próximo proyecto.",

    quickAnswerHeading: "Respuesta Rápida",
    quickAnswerText:
      "Una tabla estándar de pino 2x4x8 pies cuesta entre $60 y $120 MXN en tiendas de materiales. La madera de pino para estructura promedia $6,000 a $10,000 MXN por millar de pies tabla (MBF) al mayoreo. Las maderas duras van de $80 a $300+ MXN por pie tabla según la especie. El triplay va de $200 a $750 MXN por hoja de 1.22 x 2.44 m según espesor y calidad. Los precios fluctúan con las condiciones del mercado, así que siempre cotiza con tu proveedor antes de comprar.",

    speciesPricingHeading: "Precios de Madera por Especie",
    speciesPricingIntro:
      "La especie de madera es el factor principal en el precio. Estos son los costos actuales por las especies más comunes en la región:",
    speciesPricingText1:
      "La madera blanda para estructura — pino, abeto y picea — es la opción más accesible y el material base de la construcción residencial con entramado ligero. En México, una tabla de pino de 2x4x8 pies cuesta $60 a $120 MXN. Las tablas más grandes como 2x10x12 y 2x12x16 cuestan $250 a $600 MXN cada una. El pino radiata de Chile, ampliamente exportado a toda Latinoamérica, ofrece buena relación calidad-precio para uso estructural. El cedro rojo, apreciado por su resistencia natural a la pudrición, cuesta 2 a 3 veces más que el pino estándar — entre $150 y $300 MXN por tabla de 2x4x8.",
    speciesPricingText2:
      "Las maderas duras nacionales en México abarcan un amplio rango de precios medidos en pies tabla (PT). La parota (huanacaxtle), una de las más accesibles y populares para mueblería, cuesta $80 a $120 MXN/PT. El tzalam, muy usado en pisos y muebles, cuesta $120 a $180 MXN/PT. La caoba (Swietenia macrophylla), regulada por CITES, cuesta $150 a $250 MXN/PT cuando está disponible legalmente. Las maderas importadas como roble americano cuestan $150 a $300 MXN/PT, arce $180 a $350 MXN/PT y nogal negro $250 a $500 MXN/PT.",
    speciesPricingText3:
      "Las maderas exóticas e importadas están en el rango más alto de precio. El ipe (lapacho), el estándar para decks exteriores de alta gama, cuesta $300 a $600 MXN por metro lineal en tablas de deck — equivalente a $250 a $500 MXN/PT. La teca, usada para muebles exteriores y aplicaciones marinas, cuesta $300 a $600 MXN/PT. Otras opciones populares como cumaru, sapele y granadillo caen en el rango de $150 a $350 MXN/PT. Los costos de importación, aranceles y certificaciones de sustentabilidad (FSC) afectan significativamente los precios de maderas exóticas.",

    dimensionalVsEngineeredHeading: "Madera Dimensionada vs Madera Industrializada",
    dimensionalVsEngineeredIntro:
      "La construcción moderna utiliza cada vez más productos de madera industrializada junto con la madera aserrada tradicional. Entender las diferencias de costo ayuda a elegir el producto correcto:",
    dimensionalVsEngineeredItems: [
      "La madera dimensionada (2x4, 2x6, 2x10, etc.) se asierra directamente de troncos y es la opción predeterminada para entramado de muros, techos y viguetas de tramos cortos. Es la opción más económica por metro lineal para tramos menores a 5 metros.",
      "Las vigas LVL (madera laminada con chapa) cuestan $50 a $100 MXN por metro lineal para una viga de 45 x 240 mm — aproximadamente 3 a 5 veces el costo de una tabla 2x10 comparable. Se usan para dinteles, vigas de cumbrera y tramos largos.",
      "Las viguetas prefabricadas tipo I (TJI) cuestan $50 a $120 MXN por metro lineal según la altura. Reemplazan viguetas de 2x10 y 2x12 para tramos mayores a 4 metros, ofreciendo menor peso y perforaciones prehechas para plomería y cableado.",
      "Las vigas Glulam cuestan $100 a $250 MXN por metro lineal según la sección. Se usan para vigas expuestas, dinteles de cochera de tramo largo y elementos arquitectónicos personalizados.",
      "La madera de hebras paralelas (PSL) como Parallam cuesta $150 a $350 MXN por metro lineal y se usa para columnas y vigas de alta carga donde se necesita máxima resistencia en la mínima sección transversal.",
    ],
    dimensionalVsEngineeredSummary:
      "Para la mayoría del entramado residencial, la madera dimensionada sigue siendo la opción más rentable. Los productos de madera industrializada tienen sentido económico cuando se necesitan tramos más largos, cargas más pesadas o un rendimiento más predecible.",

    gradeHeading: "Grados de Madera y su Impacto en el Precio",
    gradeIntro:
      "El grado de la madera afecta directamente el precio — grados más altos cuestan más porque tienen menos defectos y propiedades estructurales más consistentes:",
    gradeItems: [
      "Grado para montantes (Stud grade) — el grado estructural más económico, adecuado solo para elementos verticales (montantes de muro) de hasta 3 metros. Típicamente $10 a $20 MXN menos por pieza que el grado #2.",
      "Grado #2 y Mejor (No. 2) — el grado estructural estándar para viguetas, cabios, dinteles y entramado general. Es lo que la mayoría de las madererías manejan como su madera de estructura por defecto.",
      "Grado #1 — menos nudos y valores de resistencia más altos que el #2. Se usa cuando los cálculos de ingeniería requieren esfuerzos admisibles mayores. Cuesta 10-20% más que el #2.",
      "Select Structural — el grado estructural más alto con menos defectos. Requerido para algunos diseños de ingeniería y aplicaciones de madera pesada. Cuesta 25-50% más que el #2.",
      "Grados de apariencia (C&Better, D Select) — para carpintería de acabado, molduras y aplicaciones expuestas donde la estética importa. Precios 50-100% por encima de los grados estructurales.",
      "FAS (First and Seconds) — el grado más alto para maderas duras, requiere secciones grandes libres de defectos. El grado más caro, típicamente 30-50% más que #1 Common.",
    ],
    gradeSummary:
      "Para estructura, el grado #2 es el estándar y la opción más económica. Solo especifica grados superiores cuando los requisitos de ingeniería o apariencia lo exijan — pagarás significativamente más por mejoras marginales en resistencia.",

    priceTrendsHeading: "Tendencias y Pronósticos de Precios de Madera",
    priceTrendsIntro:
      "Los precios de la madera son notoriamente volátiles, y entender el ciclo del mercado te ayuda a programar tus compras:",
    priceTrendsText1:
      "El mercado de futuros de madera alcanzó un máximo histórico de $1,711 USD por millar de pies tabla en mayo de 2021, impulsado por la demanda de proyectos caseros durante la pandemia y el cierre temporal de aserraderos. Para finales de 2022, los precios habían caído a $350/MBF antes de estabilizarse en el rango de $400 a $600/MBF durante 2023-2026. En México, esto se reflejó en tablas de 2x4x8 que llegaron a costar $200+ MXN en el pico y que ahora se encuentran en $60 a $120 MXN.",
    priceTrendsText2:
      "Los patrones estacionales son predecibles: los precios de la madera típicamente alcanzan su pico en primavera y principios de verano (marzo a junio) cuando la temporada de construcción impulsa la demanda, y tocan fondo en otoño e invierno (octubre a enero) cuando la construcción se desacelera. Comprar tu paquete de estructura en noviembre o diciembre puede ahorrarte 10-20% comparado con precios de mayo.",
    priceTrendsText3:
      "En Latinoamérica, factores adicionales afectan los precios: el tipo de cambio del dólar (la madera importada sube cuando el peso se deprecia), la disponibilidad de madera nacional certificada, los costos de transporte desde zonas productoras, y la competencia de materiales alternativos como el block y el acero estructural. Los constructores mexicanos que usan entramado ligero de madera están sujetos a la volatilidad tanto del mercado nacional como del internacional.",

    whereToBuyHeading: "Dónde Comprar Madera: Opciones y Precios",
    whereToBuyIntro:
      "Dónde compras la madera afecta significativamente el costo total. Estas son las principales opciones, ordenadas de mayor a menor costo por tabla:",
    whereToBuyItems: [
      "Tiendas de autoservicio (Home Depot, Sodimac, Coppel): Convenientes para proyectos pequeños y tablas individuales. Precios fijos y publicados, devoluciones fáciles e inventario inmediato. Sin embargo, los precios son 15-30% más altos que en madererías. Ideal para: propietarios, reparaciones pequeñas y proyectos menores a $5,000 MXN en madera.",
      "Madererías locales: Mejor control de calidad (tablas seleccionadas a mano), mayor variedad de especies y grados, personal conocedor y precios por volumen. La mayoría ofrece entrega para pedidos mayores a $5,000 MXN. Espera 10-25% de ahorro sobre precios de autoservicio. Ideal para: contratistas, proyectos grandes de autoconstrucción.",
      "Mayoreo / directo del aserradero: Los precios más bajos, típicamente 30-50% por debajo del menudeo, pero requiere pedidos mínimos grandes (a menudo 1,000+ pies tabla o unidades completas). Algunos aserraderos venden directo al público, especialmente en zonas productoras como Durango, Chihuahua y Michoacán en México. Ideal para: paquetes de estructura completos y proyectos comerciales.",
      "Tiendas especializadas en maderas finas: Mejor fuente para especies exóticas, maderas duras especiales y blanks para tornería. Los precios incluyen una prima por selección, clasificación y envío. Ideal para: carpinteros y ebanistas que necesitan especies, medidas o figuras específicas.",
      "Aserradero local / tablas rústicas: Madera bruta local a los precios más bajos posibles ($500 a $2,000 MXN por pie tabla para pinos, $1,500 a $5,000 MXN/PT para maderas duras). Requiere secado y cepillado por cuenta propia. Ideal para: constructores rurales, carpinteros con equipo de taller.",
    ],
    whereToBuySummary:
      "Para proyectos mayores a $10,000 MXN en madera, siempre cotiza con al menos una maderería además de revisar precios en tiendas de autoservicio. El ahorro en un paquete de estructura puede fácilmente alcanzar $5,000 a $20,000 MXN.",

    bulkDiscountsHeading: "Compra por Volumen y Descuentos",
    bulkDiscountsIntro:
      "Comprar madera por volumen desbloquea ahorros significativos. Así funciona el precio por volumen en cada nivel:",
    bulkDiscountsItems: [
      "Precio por paquete: La madera de estructura vendida por paquete completo (un atado flejado, típicamente 200-300 piezas del mismo tamaño) cuesta 10-20% menos que el precio por pieza individual. Un paquete de tablas 2x4x8 contiene 200-300 piezas con un ahorro significativo por tabla.",
      "Paquetes de estructura: Muchas madererías cotizan tu lista completa de materiales de estructura como un paquete con precio especial, incluyendo montantes, soleras, dinteles, viguetas, cabios, triplay y ferretería. El precio del paquete es típicamente 15-25% menor que la suma de precios individuales. Presenta tus planos y obtén al menos dos cotizaciones.",
      "Cuentas de contratista: Los constructores que compran regularmente pueden abrir cuentas de contratista en madererías para un descuento adicional del 5-15% por debajo del precio de paquete.",
      "Precio por tarima de triplay: Comprar una tarima completa de triplay (60-75 hojas para 18 mm) ahorra 10-15% sobre el precio por hoja individual.",
      "Promociones de temporada: Las tiendas de materiales tienen promociones importantes durante la primavera y el otoño. Busca descuentos de 10-15% en madera de estructura, ofertas en madera tratada y precios de paquete para contratista en ferretería y clavos.",
    ],
    bulkDiscountsSummary:
      "La mayor oportunidad de ahorro es obtener una cotización de paquete de estructura completo de una maderería. Para una casa típica de 120 m², la diferencia entre precios por pieza y un paquete de maderería puede ser de $30,000 a $80,000 MXN.",

    calculatorCtaHeading: "Calcula tus Costos de Madera",
    calculatorCtaText:
      "Usa nuestras calculadoras gratuitas de madera para estimar el costo exacto de tu proyecto — desde tablas de estructura hasta pies tabla de madera dura y hojas de triplay.",
    calculatorLinks: [
      { label: "Calculadora de Costo de Madera", href: "/calculators/hardware/lumber-cost-calculator", description: "Estima costo total de madera dimensionada por medida y cantidad." },
      { label: "Calculadora de Pies Tabla", href: "/calculators/hardware/board-feet-calculator", description: "Convierte dimensiones de madera a pies tabla con estimado de costo." },
      { label: "Calculadora de Triplay", href: "/calculators/hardware/plywood-calculator", description: "Calcula hojas de triplay necesarias y costo total por espesor." },
    ],

    faqHeading: "Preguntas Frecuentes",
    faqs: [
      { question: "¿Cuánto cuesta una tabla de 2x4 actualmente?", answer: "En 2026-2025, una tabla estándar de pino 2x4x8 pies cuesta $60 a $120 MXN en tiendas como Home Depot México y madererías. Los precios varían por región, con costos más altos en las grandes ciudades y menores en zonas productoras de madera. Las tablas de cedro del mismo tamaño cuestan $150 a $300 MXN. Consulta precios actuales en tu tienda local — pueden cambiar semanalmente." },
      { question: "¿Por qué la madera es tan cara comparada con hace 5 años?", answer: "Los precios de la madera se dispararon 300-400% durante 2020-2021 por la demanda de proyectos caseros durante la pandemia y el cierre de aserraderos. Aunque han bajado significativamente desde el pico, siguen siendo 30-50% más altos que antes de 2020 por mayores costos de operación, transporte, aranceles y una escasez estructural de vivienda. El tipo de cambio también afecta la madera importada en México." },
      { question: "¿Cuál es la mejor época del año para comprar madera?", answer: "Otoño e invierno (octubre a enero) típicamente ofrecen los precios más bajos porque la actividad de construcción se desacelera. Puedes ahorrar 10-20% comparado con precios pico de primavera y verano. Si tienes almacenamiento seco y cubierto, comprar tu paquete de estructura en noviembre para una obra en primavera puede generar ahorros significativos." },
      { question: "¿Cuánta madera necesito para construir una casa de 120 m²?", answer: "Una casa típica de 120 m² con entramado ligero de madera requiere aproximadamente 10,000 a 14,000 pies tabla de madera para la estructura completa (muros, piso y techo). Esto se traduce en aproximadamente 350-450 montantes, 35-50 hojas de triplay, más viguetas, cabios/cerchas, soleras y dinteles. A precios actuales, el paquete de madera para estructura cuesta $80,000 a $150,000 MXN." },
      { question: "¿Vale la pena la madera tratada?", answer: "Sí, para cualquier madera en contacto con el suelo, a menos de 15 cm del terreno, o expuesta a humedad persistente. La madera tratada cuesta 50-100% más que la madera sin tratar pero dura 20-40 años versus 3-5 años para madera sin tratar en contacto con el suelo. Es requerida por norma para soleras inferiores, estructura de decks y cualquier miembro estructural cerca del nivel del terreno." },
      { question: "¿Qué diferencia hay entre madera verde y madera seca?", answer: "La madera seca (KD, secada al horno) tiene un contenido de humedad menor al 19%, haciéndola más estable y menos propensa a deformarse. La madera verde excede 19% de humedad y se contraerá al secar — cuesta menos pero solo debe usarse donde la contracción sea aceptable. Para estructura, siempre usa madera seca para minimizar problemas de asentamiento y grietas en acabados." },
    ],
  },

  compositeVsWood: {
    title: "Deck Composite vs Madera: ¿Cuál Es Mejor?",
    metaDescription:
      "Deck composite vs madera comparado: costo inicial, valor a largo plazo, durabilidad, mantenimiento, apariencia, vida útil e impacto ambiental. Guía completa para elegir el material correcto para tu terraza.",

    heroTitle: "Deck Composite vs Madera",
    heroSubtitle: "¿Cuál Es Mejor?",
    heroDescription:
      "Una comparación completa de materiales para deck composite y madera para ayudarte a elegir la opción correcta según tu presupuesto, clima y estilo de vida.",

    quickAnswerHeading: "Respuesta Rápida",
    quickAnswerText:
      "Elige deck composite si quieres mantenimiento mínimo, vida útil de 25-50 años y apariencia consistente a lo largo del tiempo. Elige madera (tratada o cedro) si el presupuesto inicial es tu principal preocupación, disfrutas la apariencia y sensación natural de la madera real, y estás dispuesto a darle mantenimiento anual. El composite cuesta 2-4 veces más al inicio pero ahorra dinero a más de 20 años cuando consideras los costos de teñido, sellado y reemplazo de la madera.",

    whatIsCompositeHeading: "¿Qué Es el Deck Composite?",
    whatIsCompositeText1:
      "El deck composite es un material de construcción industrializado hecho de una combinación de fibras de madera (aserrín, harina de madera) y polímeros plásticos (típicamente polietileno o polipropileno). Las fibras de madera proporcionan rigidez estructural y apariencia natural, mientras que el componente plástico brinda resistencia a la humedad y durabilidad. La mayoría de las tablas composite modernas cuentan con una capa protectora de polímero (cáscara) en los cuatro lados que resiste manchas, decoloración, moho y rayones.",
    whatIsCompositeText2:
      "Las marcas principales de deck composite incluyen Trex (líder del mercado, usando 95% de materiales reciclados), TimberTech/AZEK (ofreciendo opciones composite y PVC), Fiberon, Deckorators y MoistureShield. En Latinoamérica también se consiguen marcas regionales como Neodeck, WPC y Duradek. Los precios van de $250 a $700 MXN por metro lineal solo por las tablas, siendo las opciones de gama media de $350 a $500 MXN las más populares. Las tablas composite están disponibles en largos de 3.66, 4.88 y 6.10 metros y anchos de 14 cm o 18 cm.",

    whatIsWoodHeading: "¿Qué Es el Deck de Madera?",
    whatIsWoodText1:
      "El deck de madera usa tablas de madera natural como superficie de la terraza. Las tres opciones más comunes son madera tratada a presión (pino radiata, pino patula o pino del sur en EE.UU. — la más económica y disponible), cedro rojo del Pacífico (naturalmente resistente a la pudrición con tono cálido), y maderas tropicales como ipé, cumaru, tzalam y teca (las más durables pero más costosas). La madera tratada representa aproximadamente el 75% de todos los decks de madera construidos.",
    whatIsWoodText2:
      "Las tablas de deck de pino tratado cuestan $80 a $180 MXN por metro lineal, siendo la opción más económica. El cedro va de $200 a $350 MXN por metro lineal, mientras que las maderas tropicales cuestan de $350 a $800 MXN por metro lineal. Las tablas se consiguen en largos comerciales de 2.44, 3.05, 3.66 y 4.88 metros. La tabla estándar es de 2.5x15 cm (1 pulgada por 5.5 pulgadas), que proporciona buena rigidez y comodidad al caminar.",

    comparisonHeading: "Composite vs Madera: Comparación Lado a Lado",
    comparisonSubheading: "Cómo se comparan los dos materiales en cada categoría importante.",
    comparisonCol1: "Categoría",
    comparisonCol2: "Deck Composite",
    comparisonCol3: "Deck de Madera",
    comparisonRows: [
      { category: "Costo Inicial (por m²)", composite: "$1,500-$4,500 MXN instalado", wood: "$800-$2,400 MXN instalado" },
      { category: "Vida Útil", composite: "25-50 años", wood: "10-30 años (varía por especie)" },
      { category: "Mantenimiento Anual", composite: "Lavado con agua y jabón", wood: "Teñir/sellar cada 1-2 años" },
      { category: "Costo Mantenimiento (20 años)", composite: "$0-$4,000 MXN total", wood: "$30,000-$80,000 MXN total" },
      { category: "Apariencia", composite: "Consistente, aspecto fabricado", wood: "Veta natural, se torna gris" },
      { category: "Retención de Calor", composite: "Se calienta mucho al sol", wood: "Se mantiene más fresco" },
      { category: "Resistencia a Rayones", composite: "Buena (productos con capa)", wood: "Varía por especie" },
      { category: "Resistencia a Decoloración", composite: "Excelente (garantía 25 años)", wood: "Se vuelve gris sin mantenimiento" },
      { category: "Impacto Ambiental", composite: "Contenido reciclado, larga vida", wood: "Renovable, vida más corta" },
      { category: "Dificultad de Instalación", composite: "Moderada (fijación especial)", wood: "Fácil (tornillos estándar)" },
    ],

    costHeading: "Comparación de Costos: El Panorama Completo",
    costIntro: "La diferencia de precio inicial entre composite y madera es significativa, pero el costo total de propiedad a lo largo de la vida del deck cuenta una historia diferente.",
    costText1:
      "Para un deck típico de 4x5 metros (20 m²), las tablas de madera tratada cuestan de $6,000 a $12,000 MXN solo por las tablas. El mismo deck en composite de gama media cuesta $14,000 a $28,000 MXN por las tablas. Incluyendo la estructura, tornillería e instalación, el costo total instalado es de $30,000 a $50,000 MXN para madera y $55,000 a $90,000 MXN para composite.",
    costText2:
      "Sin embargo, los decks de madera requieren mantenimiento anual. Teñir y sellar un deck de 20 m² cuesta $2,000 a $5,000 MXN por año en materiales (tinte exterior de calidad más insumos de aplicación). En 20 años, son $40,000 a $100,000 MXN solo en costos de mantenimiento. Un deck de madera tratada también necesita reemplazo de tablas después de 12 a 15 años ($10,000 a $20,000 MXN). Los decks composite solo necesitan lavado ocasional con agua y jabón.",
    costText3:
      "En un periodo de 25 años, el costo total de propiedad de un deck de madera de 4x5 m es de aproximadamente $80,000 a $170,000 MXN (construcción inicial más mantenimiento y reemplazo parcial). El mismo deck composite cuesta $55,000 a $90,000 MXN total con prácticamente cero gastos de mantenimiento. A partir de los 15 a 20 años, el composite se convierte en la opción más económica.",

    whenCompositeHeading: "Cuándo Elegir Deck Composite",
    whenCompositeIntro: "El deck composite es la mejor opción en estas situaciones:",
    whenCompositeItems: [
      "Quieres un deck de bajo mantenimiento que nunca necesite teñido, sellado ni pintura.",
      "Vives en un clima húmedo, lluvioso o costero donde la madera se deteriora rápidamente.",
      "Planeas quedarte en la casa más de 10 años y quieres valor a largo plazo.",
      "Prefieres una apariencia consistente y uniforme que no cambie con el tiempo.",
      "Quieres una garantía del fabricante de 25 a 50 años para tranquilidad.",
      "Estás construyendo un deck de segundo piso o de difícil acceso donde el mantenimiento sería complicado.",
    ],
    whenCompositeSummary:
      "El composite es la mejor opción general para propietarios que priorizan la conveniencia, durabilidad y ahorro a largo plazo sobre el menor costo inicial posible.",

    whenWoodHeading: "Cuándo Elegir Deck de Madera",
    whenWoodIntro: "El deck de madera tiene más sentido en estas situaciones:",
    whenWoodItems: [
      "Tu presupuesto inicial es limitado y necesitas minimizar el costo de construcción.",
      "Te encanta la apariencia, sensación y aroma de la madera real y estás dispuesto a darle mantenimiento.",
      "Vives en un clima extremadamente caluroso donde el composite sería incómodamente caliente al caminar descalzo.",
      "Estás construyendo una estructura temporal o de corto plazo (horizonte de 5 a 10 años).",
      "Disfrutas los proyectos de mantenimiento y ves el teñido anual como una actividad satisfactoria.",
      "Quieres un deck de madera tropical (ipé, cumaru, tzalam) que ofrece belleza natural y durabilidad de 25+ años.",
    ],
    whenWoodSummary:
      "La madera es ideal para constructores con presupuesto limitado, amantes de la madera natural, y proyectos donde la calidez y carácter de la madera real superen el compromiso de mantenimiento.",

    calculatorCtaHeading: "Calcula tus Materiales para Deck",
    calculatorCtaText: "Usa nuestras calculadoras gratuitas para estimar tablas, cimentación, barandal y escaleras para tu proyecto.",
    calculatorLinks: [
      { label: "Calculadora de Tablas para Deck", href: "/calculators/outdoor/deck-board-calculator", description: "Estima las tablas necesarias para cualquier tamaño de deck." },
      { label: "Calculadora de Cimentación para Deck", href: "/calculators/outdoor/deck-footing-calculator", description: "Calcula zapatas de concreto y distribución de postes." },
      { label: "Calculadora de Barandal para Deck", href: "/calculators/outdoor/deck-railing-calculator", description: "Obtén cantidades de postes, balaustres y riel." },
      { label: "Calculadora de Escaleras para Deck", href: "/calculators/outdoor/deck-stair-calculator", description: "Calcula escalones, largueros y tablas de huella." },
    ],

    faqHeading: "Preguntas Frecuentes",
    faqs: [
      {
        question: "¿Vale la pena el costo extra del deck composite?",
        answer:
          "Sí, para la mayoría de los propietarios. Aunque el composite cuesta 2-4 veces más al inicio, elimina $30,000 a $80,000 MXN en costos de mantenimiento en 20 años y dura 25-50 años versus 10-15 para madera tratada. El punto de equilibrio es típicamente entre 12 y 15 años. Si planeas quedarte en tu casa a largo plazo, el composite es casi siempre la mejor decisión financiera considerando el costo total de propiedad.",
      },
      {
        question: "¿El deck composite se calienta demasiado para caminar?",
        answer:
          "El deck composite absorbe más calor que la madera, especialmente los colores oscuros. En un día de 35°C bajo sol directo, el composite oscuro puede alcanzar 60-75°C, lo cual es incómodo para pies descalzos. Los colores claros se mantienen 10-15°C más frescos. Las estrategias para mitigar el calor incluyen elegir colores claros, agregar estructuras de sombra, y usar tapetes exteriores en áreas de pies descalzos. La madera se mantiene 5-10°C más fresca que el composite en las mismas condiciones.",
      },
      {
        question: "¿Cuánto dura el deck composite?",
        answer:
          "El deck composite de calidad de fabricantes principales (Trex, TimberTech, Fiberon) dura 25 a 50 años con mantenimiento mínimo. La mayoría tienen garantías estructurales de 25 años y garantías de decoloración y manchas de 25 a 50 años. Los composites modernos con capa protectora han resuelto en gran medida los problemas de moho y decoloración que tenían los productos de primera generación.",
      },
      {
        question: "¿Se puede pintar o teñir el deck composite?",
        answer:
          "El deck composite con capa protectora no debe pintarse ni teñirse porque la capa de polímero impide la adhesión, y la pintura se despegará en 1-2 temporadas. Las tablas composite sin capa o más antiguas pueden pintarse con pintura exterior de color sólido después de limpieza profunda y aplicación de sellador de adherencia. Si quieres cambiar el color de un deck composite, busca recubrimientos específicos para composite.",
      },
      {
        question: "¿Qué es más ecológico: composite o madera?",
        answer:
          "Ambos tienen pros y contras ambientales. El composite usa materiales reciclados (Trex usa 95% de contenido reciclado) y su larga vida útil significa menos reemplazos. Sin embargo, no es biodegradable y es difícil de reciclar al final de su vida. La madera es un recurso renovable y biodegradable que captura carbono, pero la madera tratada contiene conservantes químicos y tiene vida útil más corta. La madera certificada FSC de cosecha sustentable tiene el menor impacto ambiental, mientras que el composite gana en longevidad y contenido reciclado.",
      },
      {
        question: "¿Puedo combinar composite y madera en el mismo deck?",
        answer:
          "Sí, muchos constructores usan una estructura de madera tratada (postes, trabes, viguetas) con tablas composite y barandal encima. Este es el enfoque estándar ya que las tablas composite están diseñadas como superficie, no como miembros estructurales. La estructura de madera tratada proporciona el soporte estructural a menor costo, mientras que la superficie composite brinda los beneficios de bajo mantenimiento donde ves y tocas el deck.",
      },
    ],
  },
};

export default guides;
