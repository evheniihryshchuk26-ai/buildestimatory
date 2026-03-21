// Spanish (Latin America) — All 31 calculator SEO content
// Metric adaptations: meters, cm, m², metric lumber sizes, LATAM construction practices

export interface CalculatorSEOContent {
  disclaimer: string;
  howToUse: string[];
  materialInfo: string;
  installationTips: string[];
  commonMistakes: string[];
  faqs: { question: string; answer: string }[];
}

const WASTE_DISCLAIMER =
  "Agrega un 10–15% adicional a tu pedido como factor de desperdicio por cortes y errores.";

// ─── FOUNDATION ─────────────────────────────────────────────────────────────

export const anchorBoltCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mide el perímetro total de tu cimentación en metros.",
    "Ingresa el espaciado estándar (por defecto 1.80 m según norma).",
    "Haz clic en Calcular Materiales para obtener la cantidad de pernos.",
  ],
  materialInfo:
    "Los pernos de anclaje (tipo J o tipo L) son varillas de acero roscadas que se embeben en la cimentación de concreto para fijar la placa de apoyo de madera. La norma constructiva exige pernos cada 1.80 m como máximo y a no más de 30 cm de cada esquina o junta de placa. En Latinoamérica, los diámetros más comunes son 12 mm (1/2\") y 16 mm (5/8\"), siendo el de 12 mm el estándar mínimo para construcción residencial. Los pernos tipo J son los más utilizados por su facilidad de colocación en el concreto fresco, mientras que los tipo L ofrecen mayor resistencia al arrancamiento. Para zonas sísmicas — comunes en México, Colombia, Chile y Perú — se recomienda usar pernos de 16 mm con arandelas de mayor superficie. El costo promedio en la región oscila entre $15 y $30 MXN por perno, dependiendo del diámetro y acabado. Es fundamental que los pernos cumplan con la especificación ASTM A307 o equivalente en norma local para garantizar la resistencia requerida.",
  installationTips: [
    "Coloca los pernos antes de que el concreto fragüe por completo, mientras aún esté trabajable.",
    "Usa una plantilla o guía para mantener un espaciado y alineación uniformes.",
    "Asegura que los pernos penetren al menos 18 cm en el concreto.",
    "Coloca un perno dentro de los 30 cm de cada extremo de cada pieza de placa de apoyo.",
  ],
  commonMistakes: [
    "Omitir pernos en las uniones de tablas — siempre coloca uno dentro de los 30 cm de cada extremo.",
    "Usar un diámetro de perno incorrecto — el estándar mínimo es 12 mm.",
    "No verificar la verticalidad de los pernos antes de que fragüe el concreto.",
  ],
  faqs: [
    {
      question: "¿Qué tamaño de pernos de anclaje se requiere según norma?",
      answer:
        "La norma exige un perno de anclaje de mínimo 12 mm de diámetro, embebido al menos 18 cm en el concreto, con un espaciado máximo de 1.80 m entre cada uno.",
    },
    {
      question: "¿Necesito pernos de anclaje en cada esquina?",
      answer:
        "Sí. Coloca un perno de anclaje dentro de los 30 cm de cada extremo de cada tabla de placa de apoyo y en cada esquina de la cimentación.",
    },
    {
      question: "¿Puedo agregar pernos de anclaje después de que fragüe el concreto?",
      answer:
        "Sí, utilizando pernos de anclaje con resina epóxica (tipo Simpson SET o similar). Se perfora el concreto y se adhieren con epóxico estructural, logrando una resistencia comparable a los pernos embebidos.",
    },
    {
      question: "¿Cuántos pernos de anclaje necesito por metro lineal de cimentación?",
      answer:
        "Con el espaciado estándar de 1.80 m, necesitas aproximadamente 0.56 pernos por metro lineal. Sin embargo, las esquinas, intersecciones y juntas de placa requieren pernos adicionales, por lo que en la práctica se estima entre 0.7 y 0.9 pernos por metro lineal.",
    },
    {
      question: "¿Cuál es la diferencia entre pernos tipo J y tipo L?",
      answer:
        "Los pernos tipo J tienen un gancho en forma de J en la parte inferior que se engancha en el concreto, y son los más comunes en construcción residencial. Los pernos tipo L tienen un doblez en ángulo recto y ofrecen mayor resistencia al arrancamiento, siendo preferidos en zonas sísmicas de Latinoamérica.",
    },
    {
      question: "¿Qué pernos de anclaje debo usar en zonas sísmicas?",
      answer:
        "En zonas sísmicas como el centro y sur de México, la costa del Pacífico de Sudamérica y Centroamérica, se recomienda usar pernos de 16 mm de diámetro con arandelas cuadradas de 50x50 mm. Consulta la normativa sísmica local (NTC en México, NSR en Colombia, NCh en Chile) para requisitos específicos de anclaje.",
    },
  ],
};

export const sillSealCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mide el perímetro total de tu cimentación en metros lineales.",
    "Ingresa la cobertura por rollo (la mayoría de los rollos cubren 15 m).",
    "Haz clic en Calcular Materiales para ver cuántos rollos necesitas.",
  ],
  materialInfo:
    "El sello de solera es un material tipo junta de espuma de polietileno expandido que se coloca entre la cimentación de concreto y la placa de apoyo de madera tratada a presión. Su función principal es prevenir la infiltración de aire, la absorción de humedad por capilaridad y la entrada de insectos y plagas. Viene en rollos de diferentes anchos — los más comunes son de 9 cm, 14 cm y 19 cm, correspondientes a las secciones estándar de madera (38x89 mm, 38x140 mm y 38x184 mm). El espesor estándar es de 6 mm, aunque existe de 12 mm para superficies de cimentación irregulares. En Latinoamérica, el sello de solera puede encontrarse como \"cinta de neopreno\" o \"sello antihumedad\" en ferreterías especializadas, con un costo aproximado de $80 a $200 MXN por rollo de 15 metros. Es un material económico que genera un gran ahorro energético a largo plazo al eliminar la infiltración de aire en la base del muro.",
  installationTips: [
    "Desenrolla el sello de solera a lo largo de la cimentación justo antes de colocar las placas de apoyo.",
    "Traslapa las uniones al menos 15 cm.",
    "Usa sello de solera compatible con madera tratada — algunas espumas se degradan con los químicos del tratamiento.",
  ],
  commonMistakes: [
    "Olvidar instalar el sello de solera — es un requisito normativo en la mayoría de las jurisdicciones.",
    "No traslapar las uniones, dejando espacios para infiltración de aire.",
  ],
  faqs: [
    {
      question: "¿Es obligatorio el sello de solera según la norma de construcción?",
      answer:
        "Sí. La mayoría de las normas de construcción requieren un sello o junta entre la cimentación y la placa de apoyo de madera para evitar infiltraciones de aire y humedad.",
    },
    {
      question: "¿Qué espesor de sello de solera debo usar?",
      answer:
        "El sello estándar de 6 mm de espuma es suficiente para la mayoría de las aplicaciones. En climas con variaciones de temperatura significativas, usa sello de 12 mm para mayor protección.",
    },
    {
      question: "¿Qué ancho de sello de solera necesito para mi construcción?",
      answer:
        "El ancho del sello debe coincidir con el de la placa de apoyo. Para muros con montantes de 38x89 mm, usa sello de 9 cm de ancho. Para muros de 38x140 mm, usa sello de 14 cm. Para muros de 38x184 mm, usa el de 19 cm de ancho.",
    },
    {
      question: "¿Puedo usar otro material en lugar del sello de solera de espuma?",
      answer:
        "Existen alternativas como las láminas de neopreno y los sellos de caucho EPDM, que son más duraderos pero también más costosos. En Latinoamérica también se utiliza membrana asfáltica cortada en tiras, aunque no ofrece las mismas propiedades de sellado contra infiltración de aire que la espuma de polietileno.",
    },
    {
      question: "¿El sello de solera ayuda a prevenir termitas y plagas?",
      answer:
        "El sello de solera reduce los puntos de entrada de insectos al sellar la junta entre concreto y madera, pero no es una barrera contra termitas por sí solo. En zonas tropicales de Latinoamérica donde las termitas son un problema grave, es necesario complementar con tratamiento químico del suelo y madera tratada a presión con CCA o ACQ.",
    },
    {
      question: "¿Cuántos rollos de sello de solera necesito para una casa promedio?",
      answer:
        "Una vivienda típica de 80 a 100 m² en planta tiene un perímetro de cimentación de aproximadamente 36 a 40 metros lineales. Con rollos de 15 metros, necesitarías 3 rollos más un 10% adicional para traslapes y desperdicio, resultando en un total de 3 a 4 rollos.",
    },
  ],
};

export const sillPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mide el perímetro total de la cimentación en metros.",
    "Selecciona la longitud de tabla (comunes: 2.44 m, 3.66 m, 4.88 m).",
    "Haz clic en Calcular Materiales para obtener la cantidad de tablas.",
  ],
  materialInfo:
    "Las placas de apoyo tratadas a presión son el elemento horizontal más bajo del entramado de muros y constituyen la conexión estructural entre la cimentación de concreto y la estructura de madera. El tratamiento a presión con CCA, ACQ o cobre micronizado protege contra la pudrición y el ataque de insectos xilófagos como termitas y polillas. En Latinoamérica, la madera tratada se consigue en aserraderos especializados o se puede mandar a tratar en plantas industriales. Las secciones estándar son 38x89 mm para muros interiores y 38x140 mm para muros exteriores, en largos comerciales de 2.44 m, 3.05 m, 3.66 m y 4.88 m. El costo de la madera tratada es entre un 30% y 50% mayor que la madera sin tratamiento, pero es una inversión obligatoria para la durabilidad de la estructura. En climas tropicales húmedos de México, Centroamérica y el Caribe, se recomienda tratamiento con retención de químico más alta (UC4A o superior).",
  installationTips: [
    "Usa madera tratada a presión con clasificación adecuada para contacto con el suelo.",
    "Pre-perfora los orificios para los pernos de anclaje antes de colocar la placa sobre la cimentación.",
    "Aplica tratamiento con boratos en los extremos cortados para mantener la protección.",
  ],
  commonMistakes: [
    "Usar madera sin tratamiento para las placas de apoyo — esto provocará pudrición.",
    "No usar ferretería compatible con madera tratada a presión (tornillos y clavos apropiados).",
  ],
  faqs: [
    {
      question: "¿Qué dimensión de madera se usa para las placas de apoyo?",
      answer:
        "Las placas de apoyo generalmente son de 38x140 mm o 38x184 mm, según el ancho del muro. En la construcción moderna se prefiere la sección de 38x140 mm para muros exteriores con mayor capacidad de aislamiento.",
    },
    {
      question: "¿Cómo se fija una placa de apoyo?",
      answer:
        "Las placas de apoyo se aseguran con pernos de anclaje embebidos en el concreto, típicamente pernos tipo J de 12 mm con arandelas y tuercas.",
    },
    {
      question: "¿Necesito tratar los cortes de la placa de apoyo?",
      answer:
        "Sí, cada vez que cortes la madera tratada a presión, el interior expuesto pierde la protección del tratamiento. Aplica una solución de boratos o sellador de extremos para madera tratada en todos los cortes para mantener la protección contra pudrición e insectos.",
    },
    {
      question: "¿Puedo usar madera de pino sin tratamiento para la placa de apoyo?",
      answer:
        "No, la norma prohíbe el uso de madera sin tratamiento en contacto con concreto o mampostería. La humedad del concreto se transfiere a la madera por capilaridad, causando pudrición en pocos años. En Latinoamérica, busca madera tratada con CCA o ACQ en aserraderos certificados.",
    },
    {
      question: "¿Qué tipo de clavos y tornillos debo usar con madera tratada?",
      answer:
        "La madera tratada a presión con ACQ y cobre micronizado es corrosiva para metales comunes. Usa clavos y tornillos galvanizados en caliente, de acero inoxidable o con recubrimiento cerámico. Los clavos galvanizados por electrólisis NO son suficientes y se corroerán en pocos años.",
    },
    {
      question: "¿Cuántas tablas necesito para la placa de apoyo de una casa de 10x12 m?",
      answer:
        "El perímetro de una casa de 10x12 m es de 44 metros lineales. Usando tablas de 3.66 m de largo, necesitarías 12 tablas más un 10% de desperdicio, resultando en 13 a 14 tablas de madera tratada a presión.",
    },
  ],
};

export const concreteCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimación incluye un 10% de factor de desperdicio. El desperdicio real puede variar según las condiciones del sitio, la precisión del encofrado y el método de colocación. Siempre confirma las cantidades con tu proveedor de concreto premezclado.",
  howToUse: [
    "Mide el largo y ancho del área de tu proyecto en metros.",
    "Ingresa la profundidad (espesor) en centímetros — 10 cm es estándar para losas, 20–30 cm para zapatas.",
    "Selecciona el tipo de proyecto (losa, zapata o columna).",
    "Haz clic en Calcular Materiales para obtener metros cúbicos, cantidad de bultos y recomendaciones de pedido.",
  ],
  materialInfo:
    "El concreto (también llamado hormigón en algunos países de Latinoamérica) es una mezcla de cemento Portland, arena, grava (agregado) y agua que fragua hasta convertirse en un material sólido como la roca. Se comercializa en dos formas: bultos de concreto premezclado y concreto premezclado entregado por camión revolvedora (olla). Los bultos de cemento más comunes en Latinoamérica son de 50 kg (Cemex, Holcim, Argos) y rinden aproximadamente 0.035 m³ cuando se mezclan con arena y grava en proporción 1:2:3. Para trabajos pequeños como postes de cerca o bases de buzón, los bultos son prácticos. Para cualquier volumen mayor a 1 m³, el concreto premezclado por camión es mucho más eficiente y produce un resultado más consistente.\n\nLa resistencia del concreto se mide en kg/cm² (o MPa) a los 28 días de curado. Los grados residenciales más comunes son: f'c=150 kg/cm² para aplicaciones no estructurales como banquetas y patios, f'c=200 kg/cm² para cimentaciones residenciales estándar y losas, y f'c=250 kg/cm² para pisos de cochera, zapatas estructurales y áreas con cargas pesadas. Grados superiores (f'c=300–350 kg/cm²) se especifican para obra comercial o aplicaciones especiales.\n\nEl concreto premezclado cuesta entre $1,800 y $2,800 MXN por metro cúbico entregado, dependiendo de la resistencia, ubicación y tamaño del pedido. La mayoría de los proveedores requieren un pedido mínimo de 3 m³, y cobran cargos adicionales por pedidos menores. Los bultos de cemento cuestan entre $180 y $250 MXN por bulto de 50 kg, lo que resulta significativamente más caro por metro cúbico que el premezclado. La malla electrosoldada, varilla corrugada y otros refuerzos agregan $50 a $150 MXN por metro cuadrado al costo total.",
  installationTips: [
    "Construye las cimbras niveladas, a plomo y bien arriostradas antes de que llegue el concreto.",
    "Humedece el terreno con agua antes de colar para evitar que el suelo seco absorba la humedad del concreto demasiado rápido.",
    "Coloca y distribuye el concreto lo más rápido posible — el premezclado empieza a fraguar en 60 a 90 minutos dependiendo de la temperatura.",
    "Usa un vibrador o golpea las cimbras con un martillo para consolidar el concreto y eliminar burbujas de aire.",
    "Empareja la superficie con una regla de aluminio primero, luego espera a que desaparezca el agua de sangrado antes del acabado final con llana o escoba.",
    "Cura el concreto por al menos 7 días manteniéndolo húmedo con membrana de curado, plástico o riego periódico con agua.",
  ],
  commonMistakes: [
    "Agregar demasiada agua a la mezcla — esto debilita el concreto y causa agrietamiento. Mantén una consistencia de revenimiento de 10 a 12 cm para la mayoría de los trabajos residenciales.",
    "No pedir suficiente concreto — siempre agrega 10% por desperdicio, derrames y sobre-excavación. Quedarse corto durante un colado crea juntas frías.",
    "Omitir el refuerzo — usa varilla corrugada del #3 o #4 a cada 20–30 cm o malla electrosoldada 6x6 para losas de 10 cm o más de espesor.",
    "Colar en temperaturas extremas sin precauciones — debajo de 5°C usa agua tibia y cobijas aislantes; arriba de 32°C usa agua fría y protección contra el viento.",
    "Dar acabado demasiado pronto mientras el agua de sangrado aún está en la superficie — esto atrapa agua, debilita la capa superior y causa descascaramiento.",
  ],
  faqs: [
    {
      question: "¿Cuánto concreto necesito para una losa de 3x3 metros?",
      answer: "Una losa de 3x3 m con 10 cm de espesor requiere aproximadamente 0.9 m³ de concreto. Con un 10% de factor de desperdicio, pide 1.0 m³. Este volumen está justo en el límite donde el concreto premezclado por camión es más práctico que mezclar bultos a mano.",
    },
    {
      question: "¿Cuántos bultos de cemento necesito por metro cúbico?",
      answer: "Para una mezcla estándar de proporción 1:2:3 (cemento:arena:grava), necesitas aproximadamente 7 bultos de cemento de 50 kg por metro cúbico de concreto. Además necesitarás 0.56 m³ de arena y 0.84 m³ de grava. Para concreto premezclado en bulto (solo agregar agua), necesitarás aproximadamente 28 a 30 bultos de 50 kg por m³.",
    },
    {
      question: "¿Cuántos metros cúbicos de concreto para una cochera?",
      answer: "Una cochera típica para dos autos (6 m de ancho por 6 m de largo con 12 cm de espesor) requiere aproximadamente 4.3 m³ de concreto. Agrega 10% de desperdicio para un pedido total de 4.8 m³. Para cocheras, especifica concreto de f'c=250 kg/cm² con malla electrosoldada para mayor durabilidad.",
    },
    {
      question: "¿Cuál es la diferencia entre concreto de f'c=200 y f'c=250?",
      answer: "El valor f'c indica la resistencia a la compresión a los 28 días. El f'c=200 kg/cm² es el estándar para cimentaciones residenciales, muros de contención y losas interiores. El f'c=250 kg/cm² es más resistente y duradero, recomendado para cocheras, rampas, losas exteriores y áreas con cargas pesadas o ciclos de mojado-secado. La diferencia de costo es típicamente de $100 a $300 MXN por metro cúbico.",
    },
    {
      question: "¿Cuánto cuesta un metro cúbico de concreto premezclado?",
      answer: "El concreto premezclado por camión revolvedora cuesta entre $1,800 y $2,800 MXN por metro cúbico entregado, dependiendo de la resistencia y ubicación. Hay cargos adicionales por pedidos menores al mínimo (generalmente 3 m³), entregas en sábado y colados fuera de horario. Mezclar con bultos de cemento cuesta aproximadamente $3,500 a $4,500 MXN por metro cúbico, por lo que solo conviene para trabajos muy pequeños.",
    },
    {
      question: "¿Se puede colar concreto con lluvia?",
      answer: "Una llovizna ligera generalmente es aceptable si puedes proteger la superficie fresca. La lluvia fuerte puede lavar la pasta de cemento, debilitar la superficie y causar descascaramiento. Si se espera lluvia, ten plástico listo para cubrir el concreto recién colado inmediatamente. Nunca des acabado al concreto con agua estancada en la superficie.",
    },
    {
      question: "¿Qué espesor debe tener una losa de concreto?",
      answer: "Las losas residenciales estándar (patios, andadores, bases para bodega) tienen 10 cm de espesor. Pisos de cochera deben tener de 12 a 15 cm de espesor. Las zapatas para muros de carga tienen típicamente de 20 a 30 cm de espesor y se extienden por debajo de la línea de desplante según las normas locales. Siempre consulta el reglamento de construcción de tu localidad para requisitos mínimos.",
    },
    {
      question: "¿Necesito varilla o malla en una losa de concreto?",
      answer: "Para losas de 10 cm de espesor o más, el refuerzo es recomendado. Las opciones incluyen varilla corrugada del #3 o #4 a cada 20-30 cm en ambas direcciones, malla electrosoldada 6x6-10/10, o fibra de polipropileno mezclada en el concreto. La varilla corrugada proporciona el mejor control de grietas para cocheras, pisos industriales y losas estructurales. Para patios y andadores no estructurales, la malla electrosoldada o fibra suele ser suficiente.",
    },
  ],
};

export const concreteSlabCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimación incluye un 10% de factor de desperdicio. El desperdicio real puede variar según la preparación del terreno, la precisión del encofrado y las variaciones de espesor. Siempre confirma las cantidades con tu proveedor de concreto premezclado.",
  howToUse: [
    "Mide el largo y ancho de la losa planificada en metros.",
    "Ingresa el espesor de la losa en centímetros — 10 cm es estándar para patios y andadores, 12–15 cm para cocheras.",
    "Haz clic en Calcular Materiales para obtener los metros cúbicos necesarios, incluyendo un 10% de desperdicio.",
    "Usa la cantidad de bultos para trabajos pequeños o el total en m³ para pedir concreto premezclado por camión.",
  ],
  materialInfo:
    "Una losa de concreto es una superficie plana y horizontal colada directamente sobre un terreno preparado, utilizada para patios, pisos de cochera, rampas de acceso, pisos de bodega y bases de construcción. El espesor estándar residencial es de 10 cm para áreas peatonales como andadores y patios. Cocheras y rampas vehiculares deben tener de 12 a 15 cm de espesor para soportar el peso de los vehículos.\n\nLa preparación del terreno es crítica para la durabilidad de la losa. El suelo debe estar compactado, nivelado y libre de materia orgánica. Una capa de 10 cm de grava compactada (tepetate o material de banco) proporciona drenaje y una base estable. Se recomienda una membrana de polietileno calibre 600 entre la grava y el concreto para prevenir la migración de humedad, especialmente en losas interiores de espacios habitables.\n\nLas opciones de refuerzo para losas incluyen malla electrosoldada 6x6-10/10, varilla corrugada del #3 o #4 a cada 20–30 cm en ambas direcciones, o fibra de polipropileno mezclada en el concreto. Las juntas de control (cortes con disco o juntas moldeadas) deben colocarse a intervalos no mayores de 2 a 3 veces el espesor de la losa — para una losa de 10 cm, juntas cada 2.5 a 3 metros.\n\nEl concreto para losas se especifica típicamente con resistencia f'c=200 a f'c=250 kg/cm² con un revenimiento de 10 cm. El concreto premezclado por camión cuesta entre $1,800 y $2,800 MXN por metro cúbico entregado. Los bultos de cemento de 50 kg cuestan entre $180 y $250 MXN cada uno, lo que resulta considerablemente más caro por metro cúbico — práctico solo para colados muy pequeños menores a 0.5 m³.",
  installationTips: [
    "Compacta el terreno y agrega 10 cm de grava como base antes de colar — esto previene asentamientos y grietas.",
    "Coloca las cimbras con estacas cada 60–90 cm y verifica el nivel; aplica aceite a las cimbras para un desmoldeo fácil.",
    "Coloca el refuerzo (malla o varilla) sobre calzas para que quede en el tercio inferior de la losa, no sobre el suelo.",
    "Cola el concreto en una sola operación continua para evitar juntas frías — ten suficiente ayuda y equipo listo antes de que llegue el camión.",
    "Empareja con regla de aluminio, luego escobilla la superficie para tracción antes de aplicar membrana de curado.",
  ],
  commonMistakes: [
    "Omitir la base de grava — colar directamente sobre tierra causa asentamientos y grietas en el primer año.",
    "Hacer la losa demasiado delgada — losas de 7 cm se agrietan fácilmente; siempre cola al menos 10 cm para uso residencial.",
    "Colocar la malla directamente en el suelo en vez de sobre calzas — el refuerzo en el fondo no funciona; debe estar en el tercio inferior de la losa.",
    "Olvidar las juntas de control — sin juntas cada 2.5 a 3 metros, la losa se agrietará aleatoriamente durante el curado.",
    "Dar acabado mientras el agua de sangrado está presente — esto atrapa agua en la capa superior y causa descascaramiento.",
  ],
  faqs: [
    {
      question: "¿Cuánto concreto necesito para una losa de 3x3 metros?",
      answer: "Una losa de 3x3 m con 10 cm de espesor requiere aproximadamente 0.9 m³ de concreto. Con 10% de desperdicio, pide 1.0 m³. A 15 cm de espesor (para cochera), necesitas 1.4 m³. Este volumen está en el límite donde el premezclado por camión es más práctico que mezclar bultos a mano.",
    },
    {
      question: "¿Qué espesor debe tener una losa de concreto?",
      answer: "El espesor estándar es 10 cm para patios, andadores y bases de bodega. Cocheras y rampas deben tener de 12 a 15 cm, con bordes engrosados en el perímetro. Losas que soporten equipo pesado o vehículos de más de 5 toneladas pueden necesitar 15 a 20 cm. Consulta el reglamento de construcción local para requisitos mínimos.",
    },
    {
      question: "¿Cuánto cuesta una losa de concreto?",
      answer: "El costo del material para una losa de concreto es de $350 a $700 MXN por metro cuadrado para espesor estándar de 10 cm con premezclado. El costo instalado (incluyendo mano de obra, grava, cimbra, refuerzo y acabado) va de $700 a $1,400 MXN por m². Una losa típica de 6x6 m para patio cuesta entre $25,000 y $50,000 MXN instalada.",
    },
    {
      question: "¿Necesito malla o varilla en una losa de concreto?",
      answer: "Para losas residenciales de 10 cm, la malla electrosoldada 6x6-10/10 o la fibra de polipropileno proporcionan un control adecuado de grietas por contracción. La varilla corrugada del #3 a cada 25 cm se recomienda para cocheras y losas con cargas vehiculares. La malla agrega aproximadamente $50–80 MXN por m² al costo del material.",
    },
    {
      question: "¿Cuántos bultos de cemento para una losa?",
      answer: "Para una mezcla estándar 1:2:3, necesitas aproximadamente 7 bultos de 50 kg por metro cúbico. Para una losa de 3x3 m a 10 cm de espesor (0.9 m³), necesitas unos 6 bultos de cemento más arena y grava. Para bultos de concreto premezclado (solo agregar agua), necesitarás aproximadamente 26 bultos de 50 kg.",
    },
    {
      question: "¿Cuánto tarda en curar una losa de concreto?",
      answer: "El concreto alcanza aproximadamente el 70% de su resistencia en 7 días y la resistencia total de diseño a los 28 días. Puedes caminar sobre la losa después de 24 a 48 horas, circular con vehículo después de 7 días, y colocar cargas pesadas después de 28 días. Mantén la superficie húmeda los primeros 7 días con membrana de curado, plástico o riego periódico.",
    },
  ],
};

export const concreteFootingCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimación incluye un 10% de factor de desperdicio. Las dimensiones de la zapata deben cumplir con los requisitos del reglamento de construcción local para profundidad de desplante, ancho y refuerzo. Siempre verifica con tu autoridad de construcción antes de colar.",
  howToUse: [
    "Mide la longitud total de la zapata en metros — para una zapata perimetral, suma todos los lados.",
    "Ingresa el ancho de la zapata en metros — las zapatas corridas típicas tienen de 30 a 60 cm de ancho.",
    "Ingresa la profundidad de la zapata en metros — profundidades comunes son de 20 a 30 cm para zapatas superficiales.",
    "Haz clic en Calcular Materiales para obtener metros cúbicos, cantidad de bultos y totales con desperdicio.",
  ],
  materialInfo:
    "Las zapatas de concreto son la base estructural que transfiere las cargas del edificio al suelo. Se ubican bajo el nivel del terreno y soportan muros de cimentación, columnas y postes. Existen dos tipos principales: zapatas corridas (de franja) que recorren la longitud de un muro, y zapatas aisladas que soportan columnas o postes individuales.\n\nLas zapatas corridas para construcción residencial tienen típicamente de 30 a 60 cm de ancho y de 20 a 30 cm de profundidad, con el ancho siendo al menos el doble del espesor del muro que soportan. Para un muro de block de 15 cm, la zapata debe tener al menos 30 cm de ancho y 20 cm de profundidad. Las zapatas aisladas para columnas son generalmente de 60x60 cm o mayores, dependiendo de la carga.\n\nEl fondo de la zapata debe extenderse por debajo del nivel de desplante especificado en la normativa local, que varía según la zona sísmica, el tipo de suelo y las condiciones del terreno. Las zapatas deben apoyarse sobre suelo firme no alterado o debidamente compactado con capacidad de carga adecuada.\n\nEl refuerzo para zapatas corridas consiste en dos varillas del #3 o #4 corriendo horizontalmente cerca del fondo, con bastones verticales que se extienden hacia el muro de cimentación a intervalos de 1.20 m. Las zapatas aisladas llevan una parrilla de varilla del #3 a cada 15–20 cm en ambas direcciones. El concreto para zapatas se especifica con resistencia f'c=200 a f'c=250 kg/cm² y debe tener un revenimiento de 10 a 12 cm para trabajabilidad en la zanja.\n\nEl concreto premezclado por camión es el método estándar para zapatas. El costo es de $1,800 a $2,800 MXN por metro cúbico. Una casa típica de 140 m² con perímetro de 50 metros lineales de zapata corrida de 40 cm de ancho por 20 cm de profundidad requiere aproximadamente 4 m³ de concreto.",
  installationTips: [
    "Excava la zanja al ancho y profundidad exactos especificados en los planos — la sobre-excavación desperdicia concreto y dinero.",
    "Nivela el fondo de la zanja con pisón manual antes de colar — una base desnivelada causa asentamientos diferenciales.",
    "Coloca la varilla sobre calzas o pedazos de tabique para mantener 7 cm de recubrimiento de concreto debajo del acero.",
    "Instala bastones verticales de varilla cada 1.20 m para amarrar la zapata al muro de cimentación superior.",
    "No cueles zapatas sobre suelo congelado o con agua estancada — ambas condiciones impiden el curado adecuado y reducen la resistencia.",
  ],
  commonMistakes: [
    "Hacer zapatas demasiado angostas — el ancho de la zapata debe ser al menos el doble del espesor del muro para distribuir la carga al suelo.",
    "No respetar la profundidad de desplante — zapatas superficiales en climas fríos se levantarán por el efecto de la helada.",
    "Sobre-excavar la zanja y rellenar con tierra suelta — las zapatas deben apoyarse sobre suelo firme no alterado o compactado mecánicamente.",
    "Omitir la varilla en zapatas corridas — las zapatas sin refuerzo se agrietan en puntos de esfuerzo y pierden integridad estructural.",
    "Colar el muro de cimentación el mismo día que la zapata — permite que la zapata fragüe al menos 24 horas antes de cargarla con cimbra y concreto del muro.",
  ],
  faqs: [
    {
      question: "¿Qué ancho debe tener una zapata de concreto?",
      answer: "El ancho de la zapata debe ser al menos el doble del espesor del muro que soporta. Para un muro de block de 15 cm, usa una zapata de 30 cm de ancho. Para un muro colado de 20 cm, usa una zapata de 40 cm. En suelos con baja capacidad de carga, el ingeniero puede especificar zapatas más anchas (60 a 90 cm).",
    },
    {
      question: "¿Qué profundidad deben tener las zapatas?",
      answer: "La profundidad depende de dos factores: requisitos estructurales y nivel de desplante. La zapata en sí tiene típicamente de 20 a 30 cm de espesor. Pero el fondo debe estar por debajo de la profundidad de desplante especificada por la normativa local, que varía según zona sísmica y tipo de suelo. Consulta el reglamento de construcción de tu localidad.",
    },
    {
      question: "¿Cuánto concreto para la zapata de una casa?",
      answer: "Una casa típica de 140 m² con perímetro de 50 metros lineales usando zapata corrida de 40 cm de ancho por 20 cm de profundidad requiere aproximadamente 4 m³ de concreto. Con 10% de desperdicio, pide 4.4 m³. Agrega extra para zapatas de muros interiores de carga, dados de columnas o zapatas escalonadas en terrenos inclinados.",
    },
    {
      question: "¿Las zapatas necesitan varilla?",
      answer: "Sí. La mayoría de los reglamentos requieren al menos dos varillas del #3 o #4 corriendo continuamente cerca del fondo de las zapatas corridas, con traslape mínimo de 40 diámetros en los empalmes. Las zapatas aisladas necesitan una parrilla de varilla del #3 a cada 15–20 cm. La varilla previene grietas por asentamiento del suelo y proporciona resistencia a tensión.",
    },
    {
      question: "¿Se puede colar la zapata y el muro al mismo tiempo?",
      answer: "Los colados monolíticos (zapata y muro juntos) se hacen a veces para cimentaciones superficiales especiales, pero para construcción estándar, la zapata se cuela primero y la cimbra del muro se coloca encima después de que la zapata cure al menos 24 horas. Esto asegura una base nivelada para la cimbra del muro y conexiones adecuadas de varilla.",
    },
    {
      question: "¿Qué resistencia de concreto usar para zapatas?",
      answer: "Las zapatas residenciales estándar usan concreto de f'c=200 kg/cm², que proporciona resistencia adecuada para la mayoría de las condiciones de suelo. En áreas con nivel freático alto, suelo agresivo (alto contenido de sulfatos) o cargas estructurales pesadas, especifica f'c=250 kg/cm² con cemento resistente a sulfatos. La diferencia de costo es de $100 a $300 MXN por m³.",
    },
  ],
};

export const concreteColumnCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimación incluye un 10% de factor de desperdicio. La profundidad de la columna debe cumplir con los requisitos locales de nivel de desplante y capacidad de carga. Verifica las dimensiones y el refuerzo con tus planos estructurales.",
  howToUse: [
    "Selecciona el diámetro de la columna — 20 cm para cargas ligeras, 25 cm para postes estándar de terraza, 30 cm para cargas estructurales pesadas.",
    "Ingresa la altura de la columna en metros — mide desde el fondo del cimiento hasta la parte superior del pilar.",
    "Ingresa la cantidad de columnas o tubos que necesitas llenar.",
    "Haz clic en Calcular Materiales para obtener m³ por columna, concreto total y cantidad de bultos.",
  ],
  materialInfo:
    "Las columnas de concreto (también llamadas pilares, pilas o dados) son soportes cilíndricos de concreto utilizados para cimentación de terrazas, bases de postes, soportes de porches y pilares estructurales ligeros. Se forman usando tubos de cartón rígido (tipo Sonotube) o moldes metálicos que se colocan en el terreno, se llenan de concreto y se retiran después del curado.\n\nLos diámetros comunes para trabajo residencial son 20 cm (cargas ligeras como barandales y cobertizos pequeños), 25 cm (postes estándar de terraza y cargas moderadas) y 30 cm (vigas de terraza pesadas, columnas de pórtico y pilares estructurales). Tamaños mayores (35, 40 y 60 cm) están disponibles para aplicaciones comerciales y estructurales pesadas.\n\nLa profundidad de la columna debe extenderse por debajo del nivel de desplante, que varía según la zona sísmica y el tipo de suelo. La columna se apoya sobre un dado de cimentación en el fondo, que puede ser una base preformada o una sección ensanchada de concreto colada antes de la columna. Algunas normativas requieren un ensanchamiento tipo campana en la base que aumenta el área de apoyo.\n\nEl refuerzo para columnas de concreto consiste típicamente en una o dos varillas del #3 o #4 colocadas verticalmente por el centro de la columna, con un ancla de poste fijada en la parte superior mientras el concreto está fresco. La varilla se extiende desde 7 cm arriba del dado de cimentación hasta 5 cm debajo de la parte superior de la columna.\n\nLos tubos tipo Sonotube cuestan entre $150 y $500 MXN cada uno para longitudes de 2.5 a 3.5 m en diámetros residenciales estándar. El concreto se mezcla mejor con bultos de 50 kg para trabajos de columnas — cada bulto con proporción 1:2:3 rinde aproximadamente 0.035 m³. Una columna de 30 cm de diámetro a 1.20 m de profundidad usa aproximadamente 0.085 m³ de concreto (unos 2.5 bultos de cemento con arena y grava).",
  installationTips: [
    "Excava el hoyo de 10 a 15 cm más ancho que el tubo para permitir el relleno y la plomada del tubo.",
    "Coloca el tubo sobre una base plana (dado pre-colado o grava compactada) y apuntalado perfectamente a plomo con puntales de madera.",
    "Llena el tubo en capas de 30 cm, vibrando o varillando cada capa para eliminar burbujas de aire.",
    "Fija el ancla de poste o perno en el concreto fresco en la posición correcta antes de que fragüe.",
    "Rellena alrededor del tubo solo después de que el concreto haya curado al menos 24 horas para evitar desplazamientos.",
  ],
  commonMistakes: [
    "No extender las columnas por debajo del nivel de desplante — pilares superficiales se levantan con las heladas o movimientos del suelo.",
    "No aplomar el tubo antes de llenarlo — una columna torcida causa desalineamiento del entramado y problemas estructurales.",
    "Vaciar todo el concreto de golpe sin varillado — esto atrapa burbujas de aire que debilitan la columna, especialmente en la base.",
    "Olvidar instalar el ancla de poste antes de que fragüe el concreto — perforar concreto curado es difícil y compromete la columna.",
    "Usar un diámetro de columna demasiado pequeño para la carga — siempre consulta tablas de carga; un pilar de 20 cm soporta mucho menos que uno de 30 cm.",
  ],
  faqs: [
    {
      question: "¿Cuánto concreto para una columna cilíndrica?",
      answer: "Una columna de 30 cm de diámetro a 1.20 m de profundidad requiere aproximadamente 0.085 m³ de concreto — unos 2.5 bultos de cemento de 50 kg con arena y grava. Una columna de 25 cm a la misma profundidad necesita 0.059 m³ (2 bultos), y una de 20 cm necesita 0.038 m³ (1.5 bultos). Siempre agrega 10% por desperdicio.",
    },
    {
      question: "¿Qué diámetro de columna necesito para una terraza?",
      answer: "Para la mayoría de las terrazas residenciales, columnas de 25 o 30 cm de diámetro son estándar. Un pilar de 30 cm puede soportar de 2,000 a 3,000 kg en suelo típico, lo cual es suficiente para las cargas de la mayoría de las vigas de terraza. Usa columnas de 20 cm solo para aplicaciones muy ligeras como bases de barandal.",
    },
    {
      question: "¿Qué profundidad deben tener los pilares de una terraza?",
      answer: "Los pilares de terraza deben extenderse por debajo del nivel de desplante especificado en la normativa local, que varía según la zona sísmica y el tipo de suelo. En general, la profundidad mínima es de 60 a 80 cm en climas templados y hasta 1.20 m en zonas con heladas. Consulta el reglamento de tu localidad.",
    },
    {
      question: "¿Las columnas de concreto necesitan varilla?",
      answer: "La mayoría de los reglamentos requieren al menos una varilla del #3 o #4 vertical en cada columna que soporte cargas estructurales. Para columnas de más de 30 cm de diámetro o más de 1.20 m de profundidad, se recomiendan dos varillas verticales con estribos. La varilla proporciona resistencia a tensión y previene el agrietamiento.",
    },
    {
      question: "¿Cuántos bultos de cemento por columna de 30 cm?",
      answer: "Una columna de 30 cm de diámetro usa aproximadamente 0.071 m³ de concreto por metro lineal de altura. A 1.20 m de profundidad, eso es 0.085 m³ — aproximadamente 2.5 bultos de cemento de 50 kg con arena y grava en proporción 1:2:3. Para 10 pilares a 1.20 m, necesitas unos 25 bultos de cemento.",
    },
    {
      question: "¿Se puede mezclar el concreto dentro del tubo?",
      answer: "No — nunca mezcles concreto dentro del tubo. Mezcla en una carretilla, artesa o revolvedora, luego vacía en el tubo en capas de 30 cm. Vibra o varillea cada capa para eliminar burbujas de aire. Para gran cantidad de pilares, rentar una revolvedora portátil ahorra tiempo y esfuerzo significativos.",
    },
  ],
};

export const concreteStepsCalculator: CalculatorSEOContent = {
  disclaimer:
    "Esta estimación incluye un 10% de factor de desperdicio y un descanso de 1 m a 10 cm de espesor. Las dimensiones de los escalones deben cumplir con el reglamento de construcción local para peralte, huella y ancho. Siempre verifica los requisitos con tu autoridad de construcción.",
  howToUse: [
    "Ingresa el ancho de la escalera en metros — los reglamentos típicamente requieren al menos 90 cm para escaleras de acceso residencial.",
    "Ingresa el peralte (altura del escalón) en centímetros — el estándar residencial es de 17 a 19 cm.",
    "Ingresa la huella (profundidad del escalón) en centímetros — el estándar es de 25 a 28 cm.",
    "Ingresa el número total de escalones y haz clic en Calcular Materiales para obtener metros cúbicos y cantidad de bultos.",
  ],
  materialInfo:
    "Los escalones de concreto (también llamados escaleras de concreto o escalinatas) son estructuras sólidas coladas en sitio construidas en accesos de edificios, entre cambios de nivel y para acceso a sótanos. A diferencia de las escaleras de madera o prefabricadas, las escaleras de concreto colado son una masa monolítica que incluye las huellas, peraltes y el relleno sólido debajo.\n\nLos reglamentos de construcción rigen las dimensiones de los escalones de concreto por seguridad. La normativa mexicana (NTC) especifica un peralte máximo de 18 cm y una huella mínima de 25 cm. Todos los peraltes en un tramo deben ser uniformes con una tolerancia máxima de 1 cm, y todas las huellas deben ser uniformes con la misma tolerancia. El ancho mínimo de la escalera es de 90 cm, aunque 120 cm es más cómodo para escaleras de acceso principal. Los pasamanos son obligatorios para tramos de 4 o más escalones.\n\nLos escalones de concreto se cimbran usando triplay o madera cortada al perfil exacto de la escalera. La cimbra debe estar fuertemente arriostrada porque el concreto fresco ejerce una presión considerable — una escalera de 1.20 m de ancho con 5 escalones puede pesar más de 1,000 kg. El concreto se cuela desde el escalón inferior hacia arriba, maestreando y acabando cada escalón antes de pasar al siguiente.\n\nEl refuerzo para escalones de concreto incluye varilla del #3 colocada horizontalmente a través de la masa a intervalos de 30 a 45 cm en sentido vertical, con varillas verticales que amarran los escalones al descanso y a la cimentación. La especificación de concreto es típicamente f'c=250 kg/cm² para durabilidad, con un revenimiento de 10 cm para trabajabilidad en la cimbra.\n\nLos escalones de concreto colados cuestan entre $3,500 y $6,000 MXN por metro lineal de ancho instalados, incluyendo cimbra, refuerzo, colado y acabado. Una escalinata estándar de 1.20 m de ancho con 4 escalones cuesta entre $15,000 y $25,000 MXN instalada. Los escalones prefabricados son una alternativa más económica pero no permiten medidas personalizadas.",
  installationTips: [
    "Construye la cimbra con triplay de 19 mm, fuertemente arriostrada con polines — el concreto fresco es extremadamente pesado y reventará cimbras débiles.",
    "Cola desde el escalón inferior hacia arriba, llenando y acabando cada escalón antes de pasar al siguiente.",
    "Maestrea cada huella y luego escobilla la superficie para antiderrapante — las escaleras con acabado liso de llana son peligrosamente resbalosas cuando están mojadas.",
    "Instala tiras antiderrapantes o aplica acabado de escoba en los bordes de las huellas para tracción adicional.",
    "Amarra los escalones a la cimentación del edificio con bastones de varilla para evitar que la escalinata se asiente y se separe de la casa.",
  ],
  commonMistakes: [
    "Hacer peraltes de diferentes alturas — peraltes desiguales son un peligro de tropiezo y una violación al reglamento; todos deben estar dentro de 1 cm entre sí.",
    "Olvidar inclinar las huellas — cada huella debe tener una pendiente de 1% hacia afuera del edificio para drenaje de agua.",
    "Sub-arriostrar la cimbra — el concreto fresco pesa 2,400 kg por metro cúbico y reventará cimbras débiles, arruinando el colado.",
    "No amarrar los escalones a la cimentación — sin bastones de varilla, la escalinata eventualmente se asentará y se separará de la casa.",
    "Dar acabado liso de llana a las huellas — esto crea una superficie resbalosa cuando está mojada; siempre aplica acabado de escoba o agrega agregado antiderrapante.",
  ],
  faqs: [
    {
      question: "¿Cuánto concreto necesito para escalones?",
      answer: "Una escalinata típica de 1.20 m de ancho con 4 escalones de 17 cm de peralte y 28 cm de huella requiere aproximadamente 0.5 m³ de concreto incluyendo el descanso. Con 10% de desperdicio, pide 0.6 m³. Para 3 escalones, calcula 0.4 m³. La cantidad exacta depende de la altura total y si las escaleras incluyen un descanso.",
    },
    {
      question: "¿Cuáles son las medidas estándar de peralte y huella?",
      answer: "La normativa mexicana especifica un peralte máximo de 18 cm y una huella mínima de 25 cm. Las dimensiones más cómodas son un peralte de 17 cm con huella de 28 cm. Todos los peraltes deben estar dentro de 1 cm entre sí, y todas las huellas deben estar dentro de 1 cm entre sí por seguridad.",
    },
    {
      question: "¿Cuánto cuestan los escalones de concreto?",
      answer: "Los escalones de concreto colados cuestan entre $3,500 y $6,000 MXN por metro lineal de ancho instalados. Una escalinata estándar de 1.20 m de ancho con 4 escalones cuesta entre $15,000 y $25,000 MXN incluyendo cimbra, refuerzo, concreto y acabado. Los escalones prefabricados son más económicos pero no se pueden personalizar a las dimensiones exactas de tu acceso.",
    },
    {
      question: "¿Los escalones de concreto necesitan varilla?",
      answer: "Sí. Los escalones de concreto deben tener varilla del #3 corriendo horizontalmente a través de la masa a intervalos de 30 a 45 cm, con varillas verticales que amarren los escalones al descanso y a la cimentación. Sin refuerzo, los escalones se agrietarán y se separarán con el tiempo, especialmente en climas con heladas.",
    },
    {
      question: "¿Puedo colar escalones de concreto yo mismo?",
      answer: "Colar escalones de concreto es un proyecto avanzado de autoconstrucción. La cimbra es compleja, el concreto es pesado (una escalinata de 1.20 m puede pesar más de 1,000 kg), y el colado debe completarse en una sola operación. Necesitas cimbra resistente, arriostramientos adecuados y al menos dos ayudantes. Para un primer proyecto, considera escalones prefabricados o contratar un albañil especializado.",
    },
    {
      question: "¿Cuánto duran los escalones de concreto?",
      answer: "Los escalones de concreto correctamente construidos y mantenidos duran de 50 a 100 años. El problema de mantenimiento más común es el descascaramiento por ciclos de mojado-secado, que se puede prevenir usando concreto con aditivo impermeabilizante, aplicando sellador penetrante cada 2 a 3 años, y evitando sales deshelantes (usa arena para tracción).",
    },
  ],
};

// ─── FLOOR FRAMING ───────────────────────────────────────────────────────────

export const rimJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mide el perímetro de tu entramado de piso en metros.",
    "Ingresa la longitud de las tablas que vas a utilizar.",
    "Haz clic en Calcular Materiales para obtener la cantidad de vigas perimetrales.",
  ],
  materialInfo:
    "Las vigas perimetrales (también llamadas vigas de borde o vigas de cierre) recorren el contorno del entramado de piso, cerrando los extremos de las viguetas y proporcionando rigidez lateral al sistema. Típicamente son de la misma sección que las viguetas de piso: 38x184 mm, 38x235 mm o 38x286 mm, dependiendo del diseño estructural. En Latinoamérica, la madera dimensionada puede variar ligeramente según el país — en México se encuentran secciones nominales similares a las norteamericanas, mientras que en Chile y Argentina pueden diferir. Las vigas perimetrales se consiguen en largos comerciales de 2.44 m, 3.66 m y 4.88 m. Es fundamental que sean de madera estructural clasificada (grado No. 2 o mejor) para garantizar la resistencia requerida. Su costo es similar al de las viguetas, y representan una fracción menor del presupuesto total del entramado pero son estructuralmente críticas para la integridad del sistema de piso.",
  installationTips: [
    "Instala las vigas perimetrales a ras con la cara superior de las viguetas.",
    "Clava a través de la viga perimetral hacia el extremo de cada vigueta.",
    "Considera aislar las vigas perimetrales — son una zona significativa de pérdida de calor.",
  ],
  commonMistakes: [
    "No bloquear ni aislar la cavidad de la viga perimetral en espacios acondicionados.",
    "Usar una dimensión de madera diferente — debe coincidir con la altura de las viguetas de piso.",
  ],
  faqs: [
    {
      question: "¿Cuál es la diferencia entre viga perimetral y viga de borde?",
      answer:
        "Son exactamente lo mismo — el término varía según la región. Ambos se refieren a la viga que recorre el perímetro del entramado y cierra los extremos de las viguetas de piso.",
    },
    {
      question: "¿Se deben aislar las vigas perimetrales?",
      answer:
        "Sí. Las vigas perimetrales pueden representar hasta un 15% de la pérdida de calor en muchas viviendas. La espuma rígida cortada a medida y sellada con calafateo es el método más efectivo.",
    },
    {
      question: "¿Qué sección de madera debo usar para la viga perimetral?",
      answer:
        "La viga perimetral debe ser de la misma sección que las viguetas de piso. Si tus viguetas son de 38x235 mm, la viga perimetral también debe ser de 38x235 mm. Usar una sección menor crearía un desnivel en el subpiso y comprometería la rigidez del entramado.",
    },
    {
      question: "¿Necesito viga perimetral en los cuatro lados del entramado?",
      answer:
        "Sí, la viga perimetral se instala en todo el perímetro del entramado de piso. En los lados paralelos a las viguetas, la viga perimetral cierra los extremos. En los lados perpendiculares, la viga perimetral actúa como la primera y última vigueta del sistema.",
    },
    {
      question: "¿Puedo usar madera laminada (LVL) para la viga perimetral?",
      answer:
        "Sí, la madera laminada LVL es una excelente opción para vigas perimetrales ya que es más recta, más estable y no tiene nudos ni defectos que debiliten la pieza. Sin embargo, su costo es significativamente mayor que la madera dimensionada convencional, por lo que se reserva para proyectos que lo justifiquen.",
    },
    {
      question: "¿Cómo se clava la viga perimetral a las viguetas?",
      answer:
        "Se clavan 3 clavos de 90 mm a través de la cara de la viga perimetral hacia el extremo de cada vigueta. Si la conexión es en ángulo, usa 2 clavos de 75 mm por cada lado. Para mayor resistencia, especialmente en zonas sísmicas, complementa con conectores metálicos tipo Simpson.",
    },
  ],
};

export const floorJoistCalculator: CalculatorSEOContent = {
  disclaimer: "Pide 2–3 viguetas extra como margen por desperdicio y daños.",
  howToUse: [
    "Ingresa el ancho total de la habitación perpendicular a la dirección de las viguetas.",
    "Elige el espaciado entre centros (40 cm es estándar para espacios habitables).",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "Las viguetas de piso son los elementos horizontales estructurales que soportan el subpiso y las cargas vivas del piso. Las secciones más comunes en construcción residencial son 38x184 mm (luces hasta 3.60 m), 38x235 mm (luces hasta 4.50 m) y 38x286 mm (luces hasta 5.20 m), todas medidas a 40 cm entre centros. Para luces mayores se utilizan viguetas de madera laminada (LVL) o vigas dobles T (tipo TJI), que cubren hasta 9 metros sin apoyos intermedios. En Latinoamérica, la madera estructural clasificada se obtiene en aserraderos certificados — pide siempre grado estructural No. 2 o mejor. El pino radiata (común en Chile), el pino caribaea (Centroamérica) y el pino tratado (México) son las especies más utilizadas. El costo de las viguetas representa una porción significativa del presupuesto de la estructura, por lo que optimizar la sección y el espaciado según las tablas de luces es clave para un proyecto eficiente.",
  installationTips: [
    "Coloca todas las viguetas con la curvatura (combadura) hacia arriba para lograr un piso nivelado.",
    "Usa conectores metálicos de viguetas en las conexiones con vigas principales.",
    "Bloquea las viguetas en los puntos de apoyo.",
  ],
  commonMistakes: [
    "No orientar la combadura consistentemente — causa pisos desnivelados.",
    "Sub-dimensionar las viguetas para la luz requerida — siempre consulta tablas de luces admisibles.",
    "Olvidar agregar la vigueta adicional al inicio del entramado.",
  ],
  faqs: [
    {
      question: "¿Debo usar espaciado de 40 cm o 60 cm para las viguetas de piso?",
      answer:
        "El espaciado de 40 cm entre centros es el estándar para la mayoría de los pisos residenciales. Proporciona un piso más rígido y con menor vibración. El espaciado de 60 cm es aceptable con un subpiso más grueso (19 mm o 22 mm) y es más común en construcción industrializada.",
    },
    {
      question: "¿Qué tamaño de viguetas de piso necesito?",
      answer:
        "El tamaño de la vigueta depende de la luz. Una vigueta de 38x184 mm puede cubrir aproximadamente 3.60 m, una de 38x235 mm cerca de 4.50 m, y una de 38x286 mm alrededor de 5.20 m a 40 cm entre centros. Siempre verifica con las tablas de luces de tu normativa local.",
    },
    {
      question: "¿Cuántas viguetas de piso necesito para una habitación de 4 metros de ancho?",
      answer:
        "Para una habitación de 4 metros de ancho con viguetas a 40 cm entre centros, necesitas aproximadamente 11 viguetas (4 m ÷ 0.40 m + 1 = 11). Siempre agrega 2 o 3 viguetas extra por desperdicio, daños o piezas defectuosas.",
    },
    {
      question: "¿Puedo usar viguetas de madera doble T en vez de madera maciza?",
      answer:
        "Sí, las viguetas doble T (tipo TJI) son una excelente alternativa que cubre luces mayores con menor peso y sin combadura. Son comunes en construcción prefabricada en Chile, México y Panamá. Su costo unitario es mayor, pero cubren luces de hasta 9 metros sin apoyos intermedios, reduciendo la necesidad de vigas intermedias.",
    },
    {
      question: "¿Qué tipo de madera se recomienda para viguetas en Latinoamérica?",
      answer:
        "Las especies más utilizadas son el pino radiata (Chile, Argentina), pino caribaea (Centroamérica), pino patula (Colombia) y pino tratado importado (México). La madera debe tener clasificación estructural y un contenido de humedad menor al 19% para evitar deformaciones después de la instalación.",
    },
    {
      question: "¿Necesito viga intermedia si mi habitación mide más de 4 metros?",
      answer:
        "Depende de la sección de la vigueta. Si usas viguetas de 38x184 mm, probablemente necesitarás una viga intermedia para luces mayores a 3.60 m. Con viguetas de 38x286 mm puedes cubrir hasta 5.20 m sin apoyo intermedio. Consulta siempre las tablas de luces admisibles de tu normativa local.",
    },
  ],
};

export const bridgingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Ingresa la luz libre de las viguetas en metros.",
    "Haz clic en Calcular Materiales — se requieren arriostramientos cada 2.40 m de luz.",
  ],
  materialInfo:
    "Los puentes o arriostramientos son elementos que se instalan entre las viguetas de piso a intervalos regulares para evitar la rotación lateral, el pandeo y la vibración excesiva. La norma exige arriostramientos para luces mayores a 2.40 m, colocados a media luz de cada tramo. Existen tres tipos principales: bloqueo sólido (piezas de madera cortadas a medida entre viguetas), arriostramientos cruzados de madera (piezas diagonales en X) y arriostramientos metálicos cruzados (tipo Simpson o equivalente). El bloqueo sólido se fabrica con recortes de la misma sección de la vigueta, lo que lo hace económico. Los arriostramientos metálicos tienen un costo por unidad que varía entre $20 y $50 MXN, pero su instalación es mucho más rápida. En construcciones en Latinoamérica, el bloqueo sólido de madera es el método más utilizado por su bajo costo y disponibilidad de material. Para viguetas doble T, el fabricante proporciona instrucciones específicas de arriostramiento.",
  installationTips: [
    "Instala bloqueo sólido o arriostramientos metálicos cruzados.",
    "Alterna los bloqueos para facilitar el clavado.",
    "Clava tanto la pestaña superior como la inferior en los arriostramientos cruzados.",
  ],
  commonMistakes: [
    "Instalar los arriostramientos antes de colocar el subpiso — clava solo la parte superior, espera a que esté el subpiso para clavar la inferior.",
    "Usar bloqueo subdimensionado para la altura de la vigueta.",
  ],
  faqs: [
    {
      question: "¿Son obligatorios los arriostramientos según la norma?",
      answer:
        "La mayoría de las normas requieren bloqueo o arriostramientos para viguetas de piso con luces mayores a 2.40 m, instalados en intervalos a media luz. Consulta la normativa vigente en tu localidad.",
    },
    {
      question: "Bloqueo sólido vs. arriostramientos cruzados: ¿cuál es mejor?",
      answer:
        "El bloqueo sólido (madera cortada a medida entre viguetas) es generalmente preferido por su superior resistencia lateral y por servir como base de clavado para tuberías y ductos. Los arriostramientos cruzados metálicos son más rápidos de instalar.",
    },
    {
      question: "¿Cada cuántos metros debo instalar arriostramientos?",
      answer:
        "La regla general es instalar una hilera de arriostramientos a la mitad de la luz de las viguetas. Para luces mayores a 4.80 m, se requieren dos hileras dividiendo la luz en tercios. Por ejemplo, viguetas con luz de 3.60 m llevan una hilera a 1.80 m del apoyo.",
    },
    {
      question: "¿Puedo usar recortes de madera para hacer el bloqueo sólido?",
      answer:
        "Sí, el bloqueo sólido se fabrica con recortes de la misma sección que las viguetas. Si tus viguetas son de 38x235 mm, corta piezas de 38x235 mm a la medida del espacio entre viguetas (típicamente 36.8 cm para viguetas a 40 cm entre centros). Es la opción más económica y aprovecha los recortes sobrantes.",
    },
    {
      question: "¿Los arriostramientos eliminan la vibración del piso?",
      answer:
        "Los arriostramientos reducen significativamente la vibración al distribuir las cargas puntuales entre varias viguetas. Sin embargo, si el piso vibra excesivamente, el problema puede ser viguetas subdimensionadas o espaciado demasiado amplio, no falta de arriostramientos.",
    },
    {
      question: "¿Qué clavos uso para fijar el bloqueo sólido?",
      answer:
        "Usa 2 clavos de 90 mm en cada extremo del bloqueo, clavados a través de la vigueta hacia el bloqueo. Si alternas los bloqueos (desplazados a un lado), puedes clavar directamente a través de la cara. Para clavado en ángulo, usa 2 clavos de 75 mm por cada lado.",
    },
  ],
};

export const subfloorAdhesiveCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mide el área total de tu piso en metros cuadrados.",
    "Ingresa la cobertura por tubo (verifica la etiqueta del fabricante; 4.5 m² es típico).",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "El adhesivo de subpiso es un pegamento de construcción de alta resistencia (tipo poliuretano como PL400, PL Premium o Liquid Nails Subfloor) que se aplica en cordón continuo sobre las viguetas antes de colocar los paneles OSB o de contrachapado. Su función principal es eliminar los pisos que rechinan al crear una unión estructural entre el panel y la vigueta, mejorando significativamente la rigidez del sistema de piso. En Latinoamérica, se consigue en presentaciones de cartucho de 300 ml (rinde aproximadamente 4 a 5 m² de subpiso) y en salchicha de 800 ml para pistola industrial. Los adhesivos de poliuretano son superiores a los de base solvente porque mantienen su elasticidad, resisten la humedad y tienen mayor capacidad de relleno para superficies irregulares. El costo por cartucho varía entre $80 y $180 MXN dependiendo de la marca y calidad. Es una inversión mínima comparada con el costo de reparar pisos rechinantes después de terminada la obra.",
  installationTips: [
    "Aplica un cordón continuo — no apliques el adhesivo en puntos separados.",
    "Trabaja por secciones y coloca los paneles antes de que el adhesivo se seque superficialmente.",
    "Usa una pistola de calafateo con boquilla de 6 mm.",
  ],
  commonMistakes: [
    "Omitir el adhesivo para ahorrar tiempo — los pisos que rechinan son difíciles de reparar después.",
    "Aplicar adhesivo sobre viguetas húmedas o heladas.",
  ],
  faqs: [
    {
      question: "¿Puedo omitir el adhesivo de subpiso?",
      answer:
        "Técnicamente sí, si usas tornillos en lugar de clavos, pero el adhesivo reduce drásticamente el rechinado del piso y aumenta la rigidez. La mayoría de los profesionales usan adhesivo más clavos o tornillos para mejores resultados.",
    },
    {
      question: "¿Cuántos tubos de adhesivo necesito por metro cuadrado de piso?",
      answer:
        "Un cartucho estándar de 300 ml cubre aproximadamente 4 a 5 m² de subpiso cuando se aplica en cordón de 6 mm. Para una habitación de 20 m², necesitarás entre 4 y 5 cartuchos. Siempre compra uno extra por desperdicio y cordones adicionales en juntas.",
    },
    {
      question: "¿Qué tipo de adhesivo de subpiso es mejor?",
      answer:
        "Los adhesivos de poliuretano (como PL Premium o Sikaflex Construction) son superiores a los de base solvente porque mantienen elasticidad, resisten humedad y llenan irregularidades. En Latinoamérica, las marcas Sika, Henkel y Franklin son las más disponibles en ferreterías especializadas.",
    },
    {
      question: "¿El adhesivo de subpiso funciona en climas húmedos tropicales?",
      answer:
        "Sí, siempre que uses un adhesivo de poliuretano que resista la humedad. En climas tropicales de México, Centroamérica y el Caribe, asegúrate de que las viguetas estén secas al momento de la aplicación y que el contenido de humedad de la madera sea menor al 19%.",
    },
    {
      question: "¿Puedo usar adhesivo de contacto normal en lugar de adhesivo de subpiso?",
      answer:
        "No. El adhesivo de contacto normal no tiene la resistencia estructural ni la elasticidad necesaria para soportar las cargas del piso y los movimientos naturales de la madera. Usa exclusivamente adhesivos clasificados para subpiso (subfloor adhesive) que cumplan con la norma ASTM D3498.",
    },
    {
      question: "¿Necesito adhesivo si uso tornillos en vez de clavos para el subpiso?",
      answer:
        "El adhesivo es altamente recomendable incluso con tornillos. Los tornillos evitan que los paneles se aflojen, pero el adhesivo crea una unión continua que elimina micro-movimientos entre la vigueta y el panel. La combinación de adhesivo más tornillos produce el piso más rígido y silencioso posible.",
    },
  ],
};

export const osbPanelCalculator: CalculatorSEOContent = {
  disclaimer: "Agrega 10% por desperdicio. Un panel OSB estándar de 1.22 m x 2.44 m = 2.98 m² por lámina.",
  howToUse: [
    "Mide el área total del piso en metros cuadrados (largo x ancho).",
    "Haz clic en Calcular Materiales — cada panel de 1.22 m x 2.44 m cubre 2.98 m².",
  ],
  materialInfo:
    "Los paneles OSB (Tablero de Hebras Orientadas) son el material estándar para subpisos en construcción con entramado de madera. Se fabrican con hojuelas de madera orientadas y prensadas con resina, resultando en un panel estructural resistente y económico. El formato estándar es de 1.22 m x 2.44 m (4x8 pies), con espesores de 11 mm, 15 mm, 18 mm y 22 mm. Para subpisos residenciales, el espesor mínimo recomendado es 15 mm con viguetas a 40 cm entre centros, y 18 mm o 22 mm para viguetas a 60 cm. Los paneles tipo machiembrado (T&G) facilitan la instalación y crean un piso más rígido al interconectar los bordes. En Latinoamérica, los paneles OSB se importan principalmente de Estados Unidos, Chile y Brasil. Su costo varía entre $250 y $600 MXN por lámina según el espesor y la clasificación. Las marcas como Oriented Strand Board, LP y Norbord son comunes en el mercado regional. Siempre verifica que el panel tenga clasificación estructural (Exposure 1 o Exterior) para resistir la humedad durante la construcción.",
  installationTips: [
    "Instala los paneles con el borde largo perpendicular a las viguetas.",
    "Alterna las juntas de tope entre filas para continuidad estructural.",
    "Deja juntas de expansión de 3 mm en todos los bordes.",
    "Usa clavos anillados o tornillos cada 15 cm en los bordes y 30 cm en el campo.",
  ],
  commonMistakes: [
    "Colocar los paneles paralelos a las viguetas — siempre van perpendiculares.",
    "Omitir la junta de expansión — los paneles se pandearán con la humedad.",
    "No alternar las juntas de tope entre filas.",
  ],
  faqs: [
    {
      question: "OSB vs. contrachapado para subpiso: ¿cuál es mejor?",
      answer:
        "Ambos funcionan bien. El OSB es más económico. El contrachapado es más estable dimensionalmente en condiciones de humedad. El OSB estructural tipo Advantech ofrece la mejor resistencia a la humedad de cualquier panel.",
    },
    {
      question: "¿Qué espesor de subpiso necesito?",
      answer:
        "19 mm para viguetas a 40 cm entre centros. 22 mm o 25 mm para viguetas a 60 cm entre centros o cargas pesadas.",
    },
    {
      question: "¿Cuántos paneles OSB necesito para un piso de 50 m²?",
      answer:
        "Cada panel de 1.22 m x 2.44 m cubre 2.98 m². Para 50 m² necesitas 50 ÷ 2.98 = 17 paneles. Agrega un 10% de desperdicio, lo que da un total de 19 paneles. En habitaciones con geometrías irregulares, el desperdicio puede ser mayor.",
    },
    {
      question: "¿El OSB resiste la humedad durante la construcción?",
      answer:
        "El OSB con clasificación Exposure 1 resiste exposición temporal a la lluvia durante la construcción, pero no es impermeable. Si se moja excesivamente, puede hincharse en los bordes. Cúbrelo con lona si se esperan lluvias prolongadas y asegúrate de que seque completamente antes de instalar el acabado de piso.",
    },
    {
      question: "¿Puedo usar OSB como piso terminado en un proyecto temporal?",
      answer:
        "El OSB no está diseñado como piso terminado ya que no resiste el tráfico directo, la humedad ni el desgaste superficial. Para proyectos temporales o bodegas, puedes aplicar un sellador de poliuretano para piso, pero su durabilidad será limitada. Siempre es mejor instalar un acabado de piso adecuado.",
    },
    {
      question: "¿Dónde compro paneles OSB en Latinoamérica?",
      answer:
        "Los paneles OSB se consiguen en tiendas de materiales de construcción especializadas, Home Depot (México), Sodimac (Chile, Colombia, Perú), Easy (Chile, Argentina) y distribuidores industriales. En países donde no se fabrica localmente, son material de importación y pueden tener un plazo de entrega de 1 a 2 semanas.",
    },
  ],
};

// ─── WALL FRAMING ─────────────────────────────────────────────────────────────

export const studCalculator: CalculatorSEOContent = {
  disclaimer: "Agrega 10% por desperdicio, pies derechos de refuerzo y montantes cortos (cripple studs).",
  howToUse: [
    "Mide el metraje lineal total de todos los muros a construir.",
    "Elige el espaciado entre centros (40 cm es estándar para muros exteriores).",
    "Ingresa el número de esquinas exteriores (cada una requiere 2 montantes extra).",
    "Ingresa el total de aberturas de puertas y ventanas.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "Los montantes son las piezas verticales de madera que forman el esqueleto del muro y soportan las cargas del techo y los pisos superiores. Las secciones estándar son 38x89 mm (2x4) para muros interiores y divisorios, y 38x140 mm (2x6) para muros exteriores que requieren mayor capacidad de aislamiento térmico. En Latinoamérica, la construcción con entramado de madera (wood frame) está creciendo especialmente en Chile, México, Panamá y Costa Rica. Los montantes pre-cortados de 2.35 m para muros de 2.44 m de altura ahorran tiempo y aseguran uniformidad. La madera debe ser estructural clasificada con contenido de humedad menor al 19% — la madera húmeda o verde se deformará al secarse, causando muros torcidos y fisuras en los acabados. Las especies más utilizadas en la región son pino radiata, pino patula y pino tratado. El costo de los montantes varía según el país y la especie, pero representa una parte significativa del presupuesto de la estructura de muros.",
  installationTips: [
    "Usa montantes pre-cortados o pre-seleccionados para una altura de muro consistente.",
    "Marca la distribución de montantes en la solera antes de armar para mantener el espaciado preciso.",
    "Usa una clavadora neumática para estructura — clava a través de la solera hacia los montantes.",
    "Duplica la solera superior para continuidad estructural sobre las aberturas.",
  ],
  commonMistakes: [
    "No agregar montantes extra en esquinas e intersecciones de tabiques.",
    "Olvidar los montantes rey y los pies derechos de soporte (jacks) en las aberturas.",
    "Espaciado inconsistente que provoca que el revestimiento no coincida con los bordes de los montantes.",
    "Usar madera húmeda o torcida que causa muros combados.",
  ],
  faqs: [
    {
      question: "¿Debo usar montantes de 38x89 mm o 38x140 mm para muros exteriores?",
      answer:
        "Los montantes de 38x140 mm a 60 cm entre centros son cada vez más preferidos para muros exteriores porque permiten aislamiento R-19 o R-21 en comparación con R-13 en muros de 38x89 mm. El ahorro energético durante la vida útil de la vivienda compensa el mayor costo de madera.",
    },
    {
      question: "¿Cuál es la altura estándar de montante para un cielo de 2.44 m?",
      answer:
        "Los montantes pre-cortados para cielos de 2.44 m miden 2.35 m. Combinados con una solera inferior y una solera superior doble (3 x 38 mm = 114 mm), la altura total del muro es de aproximadamente 2.47 m, lo cual deja espacio para instalar los paneles de yeso.",
    },
    {
      question: "¿Cuántos montantes necesito por metro lineal de muro?",
      answer:
        "A 40 cm entre centros necesitas aproximadamente 2.5 montantes por metro lineal. A 60 cm entre centros necesitas aproximadamente 1.67 montantes por metro lineal. Siempre agrega extras para esquinas y aberturas.",
    },
    {
      question: "¿Qué es un montante rey y para qué sirve?",
      answer:
        "El montante rey (king stud) es un montante de altura completa que se coloca a cada lado de las aberturas de puertas y ventanas, y que soporta el extremo del dintel. A diferencia de los pies derechos de soporte (jack studs) que son más cortos, el montante rey va desde la solera inferior hasta la solera superior sin interrupciones.",
    },
    {
      question: "¿Cuántos montantes adicionales necesito por cada esquina exterior?",
      answer:
        "Cada esquina exterior requiere mínimo 2 montantes adicionales para proporcionar una superficie de clavado para los paneles de yeso interior en ambas direcciones. La configuración más común usa 3 montantes en L o con tacos de bloqueo para crear una esquina completa con superficies de clavado.",
    },
    {
      question: "¿Es más económico construir con entramado de madera que con block en Latinoamérica?",
      answer:
        "Depende del país y la disponibilidad de materiales. En Chile, la construcción con entramado de madera es competitiva y muy común. En México y Centroamérica, puede ser más costosa que el block de concreto en zonas urbanas, pero ofrece ventajas en rapidez de construcción, aislamiento térmico y resistencia sísmica. Evalúa costos locales con un presupuesto detallado.",
    },
  ],
};

export const bottomPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mide la longitud total del muro en metros.",
    "Ingresa la longitud de las tablas que vas a comprar (2.44 m o 4.88 m son comunes).",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "La solera inferior es el elemento horizontal de madera que forma la base de cada muro de entramado, y sobre ella se clavan los montantes verticales. Todas las soleras inferiores de muros exteriores que están en contacto directo con la cimentación de concreto deben ser de madera tratada a presión para resistir la humedad y las plagas. Las secciones corresponden a la del muro: 38x89 mm para muros de 38x89 mm y 38x140 mm para muros de 38x140 mm. En Latinoamérica, la madera tratada con CCA es la más disponible, aunque la tendencia es hacia tratamientos con cobre alcalino (ACQ) o cobre micronizado por razones ambientales. Los largos comerciales más comunes son 2.44 m, 3.05 m, 3.66 m y 4.88 m. El costo de la madera tratada es entre 30% y 50% superior a la madera natural, pero es un requisito normativo ineludible. Para las soleras interiores que no están en contacto con concreto, se puede usar madera sin tratamiento de la misma sección.",
  installationTips: [
    "Usa madera tratada a presión para todas las soleras inferiores exteriores.",
    "Traza una línea con hilo azul antes de colocar las soleras para mayor precisión.",
    "Pre-perfora los orificios para los pernos de anclaje antes del posicionamiento final.",
  ],
  commonMistakes: [
    "Usar madera sin tratamiento para las soleras inferiores exteriores o de garaje que están en contacto con el concreto.",
    "No trazar una línea de distribución — causa muros ondulados.",
  ],
  faqs: [
    {
      question: "¿La solera inferior necesita ser de madera tratada?",
      answer:
        "Sí, si la solera inferior está en contacto con concreto o mampostería. La norma exige madera tratada a presión cuando está dentro de los 15 cm del nivel de suelo o en contacto directo con el concreto.",
    },
    {
      question: "¿Qué sección de madera necesito para la solera inferior?",
      answer:
        "La solera inferior debe ser de la misma sección que los montantes del muro. Para muros de 38x89 mm, usa solera de 38x89 mm. Para muros de 38x140 mm, usa solera de 38x140 mm. Usar una sección diferente provocaría que los montantes queden desalineados con la estructura.",
    },
    {
      question: "¿Cómo fijo la solera inferior a la cimentación de concreto?",
      answer:
        "La solera inferior se fija con los pernos de anclaje embebidos en la cimentación, usando arandelas y tuercas. Pre-perfora los orificios en la solera con una broca de 16 mm para pernos de 12 mm, dejando holgura suficiente para ajustar la posición. Aprieta las tuercas firmemente después de verificar la alineación del muro.",
    },
    {
      question: "¿Puedo usar sello de solera debajo de la solera inferior interior?",
      answer:
        "Para soleras interiores sobre subpiso de madera, no es necesario. Sin embargo, para soleras interiores sobre losa de concreto (como en garajes o sótanos), se recomienda un sello de polietileno o membrana asfáltica para prevenir la transferencia de humedad del concreto a la madera.",
    },
    {
      question: "¿Necesito solera inferior en aberturas de puertas?",
      answer:
        "La solera inferior se instala continua durante el armado del muro para mantener la rigidez. Una vez que el muro está levantado, fijado y arriostrado, se corta la porción de solera en las aberturas de puertas con una sierra recíproca. No cortes la solera antes de levantar el muro.",
    },
    {
      question: "¿Cuántas tablas de solera inferior necesito para 30 metros de muro?",
      answer:
        "Para 30 metros lineales usando tablas de 3.66 m, necesitas 30 ÷ 3.66 = 9 tablas redondeado hacia arriba. Agrega un 10% de desperdicio (1 tabla extra), lo que da 10 tablas. Si usas tablas de 4.88 m, necesitarías 7 tablas más el desperdicio, para un total de 8 tablas.",
    },
  ],
};

export const topPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mide la longitud total del muro en metros.",
    "Ingresa la longitud de las tablas.",
    "Haz clic en Calcular Materiales — el resultado incluye la doble solera superior (2 capas).",
  ],
  materialInfo:
    "La solera superior es el elemento horizontal que corona el muro de entramado, y en la mayoría de los casos se compone de dos capas: la primera solera y la solera de amarre (o segunda solera). La doble solera superior es un requisito normativo para muros portantes que cumple múltiples funciones: distribuir las cargas del techo y pisos superiores, proporcionar continuidad estructural en las uniones de muros, y crear un elemento de amarre que conecta esquinas e intersecciones. La primera solera se clava directamente sobre los montantes, y la solera de amarre se clava sobre la primera con sus juntas desfasadas al menos 1.20 m. En Latinoamérica, se utilizan las mismas secciones que los montantes: 38x89 mm o 38x140 mm. Al calcular la cantidad de tablas, recuerda que necesitas el doble de material que para la solera inferior, ya que son dos capas. El costo de la doble solera es significativo y debe presupuestarse correctamente. En algunos sistemas constructivos avanzados con entramado optimizado (advanced framing), se permite una sola solera superior en muros no portantes.",
  installationTips: [
    "Desfasa las juntas de la solera de amarre con respecto a las juntas de la primera solera al menos 1.20 m.",
    "Une las esquinas con la solera de amarre para rigidez estructural.",
    "Clava la solera de amarre con clavos de 90 mm alternados cada 40 cm.",
  ],
  commonMistakes: [
    "Alinear las juntas de la solera de amarre directamente sobre las de la primera solera — debilita el muro.",
    "No traslapar la solera de amarre en las esquinas.",
  ],
  faqs: [
    {
      question: "¿Todos los muros necesitan doble solera superior?",
      answer:
        "Generalmente sí. Los muros interiores no portantes pueden usar una sola solera en algunos casos, pero la mayoría de las normas y estándares de construcción exigen doble solera superior en muros portantes.",
    },
    {
      question: "¿Cuánto debo desfasar las juntas de la solera de amarre?",
      answer:
        "Las juntas de la solera de amarre deben estar desfasadas al menos 1.20 m (4 pies) respecto a las juntas de la primera solera. En la práctica, los profesionales tratan de ubicar las juntas de la solera de amarre lo más lejos posible de las juntas inferiores para maximizar la continuidad estructural.",
    },
    {
      question: "¿Cómo se unen las esquinas con la doble solera superior?",
      answer:
        "La solera de amarre (segunda capa) debe traslapar sobre la primera solera en las esquinas, extendiéndose sobre el muro perpendicular. Esto crea una conexión estructural que amarra ambos muros entre sí. La primera solera se corta a ras del muro, y la solera de amarre se extiende completamente sobre la primera solera del muro adyacente.",
    },
    {
      question: "¿Puedo usar una sola solera superior para ahorrar material?",
      answer:
        "Solo en muros interiores no portantes y con la aprobación de un ingeniero estructural. En sistemas de entramado optimizado (advanced framing), se permite una sola solera superior cuando los cabios o cerchas se alinean directamente sobre los montantes. Sin embargo, la práctica estándar en Latinoamérica es la doble solera.",
    },
    {
      question: "¿La solera superior necesita ser de madera tratada?",
      answer:
        "No. A diferencia de la solera inferior, la solera superior no está en contacto con concreto ni expuesta a la humedad del suelo. Se usa madera estructural estándar sin tratamiento. Solo en condiciones de exposición directa a la intemperie (como muros de pérgolas) se recomienda madera tratada.",
    },
    {
      question: "¿Cuántas tablas necesito para la doble solera superior de 40 metros de muro?",
      answer:
        "Para 40 metros lineales de muro, necesitas material para dos capas: 80 metros lineales totales. Con tablas de 3.66 m, serían 80 ÷ 3.66 = 22 tablas. Agrega un 10% de desperdicio, resultando en 24 a 25 tablas de madera estructural.",
    },
  ],
};

export const headerCalculator: CalculatorSEOContent = {
  disclaimer: "Los dinteles generalmente se forman con doble madera. Multiplica la cantidad de madera por 2.",
  howToUse: [
    "Ingresa el ancho del vano libre en metros.",
    "Ingresa la cantidad total de aberturas.",
    "Haz clic en Calcular Materiales — obtendrás la longitud del dintel, montantes rey y pies derechos de soporte.",
  ],
  materialInfo:
    "Los dinteles son elementos estructurales horizontales que abarcan las aberturas de puertas y ventanas, transfiriendo las cargas del techo, pisos superiores y su propio peso hacia los pies derechos de soporte (jack studs) y los montantes rey (king studs) a cada lado del vano. El tamaño del dintel depende de la luz del vano y la carga que soporta. Las secciones comunes van desde 38x140 mm para ventanas pequeñas de hasta 1.20 m de ancho, hasta doble 38x286 mm para grandes aberturas de hasta 3.60 m. Los dinteles se construyen típicamente con dos piezas de madera con un separador de contrachapado de 12 mm entre ellas para igualar el ancho del muro de 38x140 mm. Para luces mayores a 3 metros, se recomienda usar madera laminada (LVL) o vigas de acero. En Latinoamérica, las tablas de luces admisibles para dinteles deben consultarse en la normativa local — en México es la NMX-C-409, en Chile la NCh 1198, y en Colombia la NSR-10. El costo de los dinteles varía significativamente según la sección y el material.",
  installationTips: [
    "Construye dinteles con doble madera y un separador de contrachapado de 12 mm para igualar el ancho del muro.",
    "O utiliza madera laminada (LVL) para luces mayores.",
    "Instala siempre con la combadura hacia arriba.",
  ],
  commonMistakes: [
    "Sub-dimensionar los dinteles para la luz y la carga requerida.",
    "No agregar pies derechos de soporte (jacks) para apoyar los extremos del dintel.",
    "Olvidar los montantes cortos (cripple studs) arriba del dintel.",
  ],
  faqs: [
    {
      question: "¿Qué tamaño de dintel necesito para una puerta de 90 cm?",
      answer:
        "Un dintel doble de 38x140 mm o 38x184 mm es suficiente para una puerta interior o exterior de 90 cm en la mayoría de las aplicaciones de un solo nivel. Consulta las tablas de luces para situaciones de varios pisos o cargas elevadas.",
    },
    {
      question: "¿Qué longitud debe tener el dintel?",
      answer:
        "La longitud del dintel = ancho del vano libre + 7.5 cm (para los dos pies derechos de soporte de 38 mm cada uno). Esta calculadora agrega 30 cm adicionales para permitir un apoyo adecuado.",
    },
    {
      question: "¿Cuál es la diferencia entre un dintel de madera maciza y uno de LVL?",
      answer:
        "La madera laminada (LVL) es más resistente, más estable dimensionalmente y cubre luces significativamente mayores que la madera maciza de la misma sección. Un LVL de 38x286 mm puede cubrir luces de hasta 4.80 m, mientras que madera maciza de la misma sección se limita a aproximadamente 3 m. El LVL cuesta más pero elimina la necesidad de vigas de acero en muchas aplicaciones.",
    },
    {
      question: "¿Necesito dinteles en muros no portantes?",
      answer:
        "En muros no portantes (divisorios), el dintel solo necesita soportar el peso del material del muro arriba de la abertura. Un dintel simple de 38x89 mm o incluso una solera plana es suficiente. Sin embargo, es buena práctica instalar al menos un dintel de 38x140 mm para rigidez y como base de clavado para molduras.",
    },
    {
      question: "¿Cuántos pies derechos de soporte necesito por cada dintel?",
      answer:
        "Se necesitan al menos 2 pies derechos de soporte (jack studs) por dintel — uno a cada lado. Para luces mayores a 2.40 m, se requieren 2 pies derechos por cada lado (4 en total). Cada pie derecho se clava al montante rey adyacente y soporta directamente el extremo del dintel.",
    },
    {
      question: "¿Cómo calculo el tamaño de dintel para una ventana de 1.80 m de ancho?",
      answer:
        "Para un vano de 1.80 m en un muro portante de un solo nivel, generalmente se requiere un dintel doble de 38x235 mm. Para dos niveles de carga, se necesita un doble 38x286 mm o un LVL. Siempre consulta la tabla de luces de tu normativa local, ya que el tamaño depende de la carga tributaria y la especie de madera.",
    },
  ],
};

export const exteriorSheathingCalculator: CalculatorSEOContent = {
  disclaimer: "Resta las áreas de ventanas y puertas del área total del muro para un conteo más preciso.",
  howToUse: [
    "Calcula el área total de muros (perímetro x altura del muro).",
    "Resta las áreas de vanos de puertas y ventanas.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "El revestimiento estructural exterior es un panel de OSB o contrachapado que se clava sobre los montantes del muro para proporcionar resistencia al corte (fuerza lateral contra viento y sismo) y una base de clavado firme para el recubrimiento exterior. El espesor estándar es de 11 mm o 12 mm, en formato de 1.22 m x 2.44 m (2.98 m² por panel). El OSB es la opción más económica y es el material más utilizado. El contrachapado CDX ofrece mayor resistencia a la humedad y es preferido en zonas de alto riesgo de lluvia. En Latinoamérica, donde la construcción con entramado de madera está en crecimiento, el revestimiento estructural es fundamental para la resistencia sísmica de la edificación. En zonas sísmicas como Chile, México y la costa del Pacífico, la normativa exige revestimiento estructural continuo o en segmentos estratégicos para cumplir con los requisitos de resistencia lateral. El costo por panel varía entre $200 y $500 MXN según el tipo y espesor. El patrón de clavado es crítico: clavos cada 15 cm en bordes y cada 30 cm en el campo.",
  installationTips: [
    "Orienta los paneles verticalmente (borde largo vertical) para mejor resistencia al corte.",
    "Deja juntas de expansión de 3 mm en todos los bordes del panel.",
    "Clava cada 15 cm en los bordes del panel y cada 30 cm en el campo.",
    "Usa clavos de 63 mm o grapas según norma.",
  ],
  commonMistakes: [
    "Colocar los paneles en sentido horizontal — reduce la resistencia al corte.",
    "Omitir la junta de expansión — los paneles se pandean y deforman.",
    "Clavar de menos — la resistencia al corte depende del patrón de clavado.",
  ],
  faqs: [
    {
      question: "¿Necesito arriostramiento diagonal si uso revestimiento estructural?",
      answer:
        "No. El revestimiento estructural (OSB o contrachapado) proporciona todo el arriostramiento lateral requerido. Los tensores metálicos o diagonales de madera solo se necesitan cuando no se utiliza revestimiento estructural.",
    },
    {
      question: "¿Puedo usar paneles de espuma como revestimiento de muro?",
      answer:
        "La espuma rígida por sí sola no proporciona resistencia al corte. Debes usar revestimiento de OSB o contrachapado en los segmentos de muro requeridos, o utilizar paneles de revestimiento estructural certificados.",
    },
    {
      question: "¿Qué espesor de revestimiento estructural necesito para zona sísmica?",
      answer:
        "Para zonas sísmicas en Latinoamérica, el mínimo recomendado es OSB de 11 mm con patrón de clavado reforzado (cada 10 cm en bordes y cada 15 cm en campo). En zonas de alta sismicidad (Chile, costa del Pacífico de México), consulta la normativa local para requisitos específicos de muros de corte.",
    },
    {
      question: "¿Cuántos paneles de revestimiento necesito para una casa de 100 m²?",
      answer:
        "Una casa de 100 m² en planta tiene aproximadamente 40 metros de perímetro. Con muros de 2.44 m de altura, el área bruta es de 97.6 m². Restando ventanas y puertas (típicamente 15-20%), necesitas aproximadamente 80 m² netos, lo que equivale a 27 paneles de 1.22 x 2.44 m más un 10% de desperdicio.",
    },
    {
      question: "¿OSB o contrachapado para revestimiento en clima tropical?",
      answer:
        "En climas tropicales húmedos de Centroamérica y el Caribe, el contrachapado CDX es la mejor opción por su superior resistencia a la humedad prolongada. Si usas OSB, elige clasificación Exposure 1 y asegúrate de instalar la membrana hidrófuga lo antes posible después de colocar los paneles para protegerlos de la lluvia.",
    },
    {
      question: "¿Es obligatorio el revestimiento estructural en todos los muros?",
      answer:
        "No necesariamente en todos los muros, pero sí en los segmentos requeridos para resistir las fuerzas laterales de viento y sismo. La normativa permite calcular cuántos metros lineales de muro de corte se necesitan según la zona sísmica y eólica. Los muros sin revestimiento estructural pueden usar arriostramiento diagonal metálico o de madera.",
    },
  ],
};

// ─── ROOFING ──────────────────────────────────────────────────────────────────

export const trussCalculator: CalculatorSEOContent = {
  disclaimer: "Pide 1–2 cerchas adicionales para los hastiales y por cualquier daño durante el transporte.",
  howToUse: [
    "Mide la longitud del techo (longitud de la cumbrera) en metros.",
    "Selecciona el espaciado de cerchas (60 cm entre centros es estándar para residencial).",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "Las cerchas de techo (armaduras) son ensambles prefabricados de madera que abarcan todo el ancho de la edificación sin necesidad de muros portantes interiores, transfiriendo las cargas del techo directamente a los muros exteriores. Se fabrican a medida en plantas industriales usando madera de sección pequeña (38x89 mm o 38x140 mm) unida con placas dentadas de acero galvanizado. En Latinoamérica, las cerchas prefabricadas están disponibles en Chile (principal productor de la región), México, Costa Rica y Panamá. Las configuraciones más comunes son la cercha Fink (tipo W), la Howe y la Pratt, cada una optimizada para diferentes luces y cargas. El espaciado estándar es de 60 cm entre centros para residencial, aunque puede ser de 40 cm en zonas de carga de nieve alta. Las cerchas se piden con 4 a 6 semanas de anticipación, y requieren un plano de armado específico del fabricante. Su costo incluye diseño de ingeniería, fabricación y transporte, siendo generalmente más económicas que los cabios armados en sitio para luces mayores a 6 metros.",
  installationTips: [
    "Pide las cerchas con 4–6 semanas de anticipación — los tiempos de producción pueden ser largos.",
    "Ten una grúa o camión con brazo articulado en obra para el izaje.",
    "Arriostra las cerchas lateralmente durante la instalación — son inestables hasta que se coloca el revestimiento.",
    "Sigue el diagrama de ubicación del fabricante de cerchas.",
  ],
  commonMistakes: [
    "No pedir cerchas de hastial (son diferentes a las cerchas estándar).",
    "Arriostramiento temporal insuficiente durante la instalación — las cerchas pueden colapsar.",
    "Colocar cerchas sobre muros no portantes — solo deben apoyarse en los muros portantes designados.",
  ],
  faqs: [
    {
      question: "¿Cuál es el espaciado estándar de cerchas de techo?",
      answer:
        "60 cm entre centros es el espaciado más común para cerchas residenciales. Reduce la cantidad de cerchas y el costo. Algunos diseños usan 40 cm entre centros para cargas mayores o luces más amplias.",
    },
    {
      question: "¿Puedo reutilizar cerchas existentes?",
      answer:
        "Generalmente no. Las cerchas están diseñadas para luces y cargas específicas. Reutilizar cerchas sin aprobación de un ingeniero no es seguro ni cumple con las normas de construcción.",
    },
    {
      question: "¿Cuántas cerchas necesito para un techo de 12 metros de largo?",
      answer:
        "Para un techo de 12 metros de largo con cerchas a 60 cm entre centros, necesitas 12 ÷ 0.60 + 1 = 21 cerchas estándar más 2 cerchas de hastial (una en cada extremo), para un total de 23 cerchas. Agrega 1 o 2 extras por daños durante transporte e instalación.",
    },
    {
      question: "¿Cuál es la diferencia entre cercha y cabio?",
      answer:
        "Las cerchas son ensambles prefabricados triangulados que cubren todo el ancho sin apoyos interiores, pero no permiten usar el ático como espacio habitable. Los cabios son piezas individuales armadas en sitio que permiten áticos abiertos y cielos catedral, pero requieren vigas intermedias para luces grandes.",
    },
    {
      question: "¿Las cerchas prefabricadas están disponibles en Latinoamérica?",
      answer:
        "Sí. Chile es el principal productor de cerchas prefabricadas de la región, con una industria madura. En México, Costa Rica y Panamá también hay fabricantes especializados. En otros países de la región, las cerchas pueden ser fabricadas por talleres de carpintería industrial bajo diseño de un ingeniero estructural.",
    },
    {
      question: "¿Puedo cortar o modificar una cercha prefabricada?",
      answer:
        "Nunca cortes, perfores ni modifiques una cercha prefabricada sin la autorización del ingeniero que la diseñó. Cualquier modificación invalida el diseño estructural y puede causar fallas catastróficas. Si necesitas pasar ductos o tuberías a través de la cercha, solicita cerchas con aberturas diseñadas de fábrica.",
    },
  ],
};

export const rafterCalculator: CalculatorSEOContent = {
  disclaimer: "Agrega 10% por desperdicio. La longitud del cabio depende de la pendiente — mide la longitud real del cabio, no el ancho en planta.",
  howToUse: [
    "Mide la longitud total del techo en metros.",
    "Selecciona el espaciado.",
    "Haz clic en Calcular Materiales — el resultado incluye cabios para ambos lados del techo.",
  ],
  materialInfo:
    "Los cabios son los elementos estructurales inclinados que forman la pendiente del techo, transmitiendo las cargas de la cubierta hacia los muros exteriores y la cumbrera. A diferencia de las cerchas prefabricadas, los cabios se arman en sitio, lo que permite áticos abiertos, cielos catedral y diseños de techo personalizados. Las secciones comunes son 38x140 mm (luces hasta 2.70 m por lado), 38x184 mm (luces hasta 3.60 m) y 38x235 mm (luces hasta 4.80 m), todas medidas en proyección horizontal a 40 cm entre centros. La longitud real del cabio es mayor que la proyección horizontal debido a la pendiente — se calcula usando el teorema de Pitágoras o factores de pendiente. En Latinoamérica, los techos con cabios son la opción más flexible para diseños arquitectónicos complejos y están ampliamente disponibles ya que no requieren fabricación industrial. El costo de los cabios depende de la especie de madera y la sección, siendo el pino radiata y el pino tratado las opciones más económicas en la región.",
  installationTips: [
    "Corta un cabio de prueba y verifica el ajuste antes de cortar todo el lote.",
    "Usa una escuadra de velocidad para marcar cortes de asiento (bird's mouth) consistentes.",
    "Se requieren tirantes de collar o una viga cumbrera para evitar el empuje lateral del techo.",
  ],
  commonMistakes: [
    "Medir la proyección horizontal en vez de la longitud real del cabio al pedir la madera.",
    "No considerar el alero del techo en la longitud del cabio.",
    "Cortes de asiento inconsistentes que causan aleros desnivelados.",
  ],
  faqs: [
    {
      question: "¿Cómo calculo la longitud del cabio?",
      answer:
        "La longitud del cabio se obtiene con el teorema de Pitágoras: longitud = raíz cuadrada de (proyección horizontal al cuadrado + altura al cuadrado). Por ejemplo, para una proyección horizontal de 3.60 m con pendiente 6:12: altura = 1.80 m, longitud = raíz cuadrada de (12.96 + 3.24) = aproximadamente 4.03 m.",
    },
    {
      question: "¿Qué tamaño de cabios para una luz de 6 m?",
      answer:
        "Para una luz de 6 m (3 m de proyección horizontal por cada lado) a 40 cm entre centros en la mayoría de las zonas de carga, generalmente se requiere una sección de 38x235 mm. Siempre consulta las tablas de luces de tu normativa local.",
    },
    {
      question: "¿Qué pendiente de techo es la más común en Latinoamérica?",
      answer:
        "En Latinoamérica, las pendientes varían según el clima. En zonas de lluvia intensa (trópico), se usan pendientes de 30% a 45% (aproximadamente 4:12 a 6:12) para evacuación rápida del agua. En zonas secas, pendientes menores de 15% a 25% son comunes. Para techos con tejas de barro, la pendiente mínima es generalmente 30%.",
    },
    {
      question: "¿Qué es el corte de asiento (bird's mouth) y por qué es necesario?",
      answer:
        "El corte de asiento es una muesca en forma de L que se hace en la parte inferior del cabio donde se apoya sobre la solera superior del muro. Este corte permite que el cabio se asiente firmemente sobre el muro, distribuyendo la carga de manera uniforme. La profundidad del corte no debe exceder un tercio del ancho del cabio para mantener la resistencia estructural.",
    },
    {
      question: "¿Necesito tirantes de collar con los cabios?",
      answer:
        "Sí, los tirantes de collar son obligatorios en techos con cabios para contrarrestar el empuje horizontal que los cabios ejercen sobre los muros. Se instalan en el tercio superior del techo, conectando los cabios opuestos. Sin tirantes, los muros serán empujados hacia afuera con el tiempo, causando fallas estructurales graves.",
    },
    {
      question: "¿Puedo usar cabios en lugar de cerchas para un techo a dos aguas?",
      answer:
        "Sí, los cabios son la alternativa tradicional a las cerchas para techos a dos aguas. Son ideales cuando deseas un ático utilizable, un cielo catedral, o no tienes acceso a fabricantes de cerchas en tu zona. Sin embargo, para luces mayores a 6 metros, los cabios requieren vigas intermedias o una viga cumbrera estructural, lo que puede aumentar el costo.",
    },
  ],
};

export const ridgeBoardCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Ingresa la longitud total del techo.",
    "Ingresa la longitud de tabla que usarás.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "La tabla cumbrera es el elemento horizontal que recorre el punto más alto del techo, en la intersección de los cabios de ambos lados. En un techo tradicional con cabios y tirantes de collar, la tabla cumbrera no es estructural — su función es proporcionar apoyo de montaje y alineación para los cabios. Debe ser de una sección un tamaño mayor que los cabios para permitir el contacto completo del corte a plomo (por ejemplo, tabla de 38x235 mm con cabios de 38x184 mm). Los largos comerciales estándar son de 2.44 m, 3.66 m y 4.88 m, y se unen con juntas traslapadas sobre un par de cabios para continuidad. Es importante distinguir entre tabla cumbrera y viga cumbrera: la viga cumbrera es un elemento estructural que soporta los cabios y se requiere en cielos catedral donde no hay tirantes de collar. La viga cumbrera debe ser calculada por un ingeniero y puede ser de madera laminada, LVL o acero. En Latinoamérica, la madera más utilizada para tablas cumbrera es pino clasificado grado No. 2 o mejor, con un costo similar al de los cabios.",
  installationTips: [
    "Soporta temporalmente la tabla cumbrera mientras colocas los cabios.",
    "Mantén la tabla cumbrera recta — usa arriostramientos temporales.",
    "La tabla cumbrera NO soporta carga estructural en un techo tradicional con cabios (los tirantes de collar y los muros soportan la carga).",
  ],
  commonMistakes: [
    "Usar el mismo tamaño que los cabios — la cumbrera debe ser un tamaño mayor para proveer apoyo completo en el corte a plomo.",
    "No soportar la cumbrera durante la construcción.",
  ],
  faqs: [
    {
      question: "¿Cuál es la diferencia entre una tabla cumbrera y una viga cumbrera?",
      answer:
        "Una tabla cumbrera es un elemento no estructural en un techo con cabios tradicional. Una viga cumbrera es estructural y se usa en cielos catedral donde no se pueden instalar tirantes de collar. La viga cumbrera requiere cálculo de ingeniero.",
    },
    {
      question: "¿Qué sección de tabla cumbrera necesito según mis cabios?",
      answer:
        "La regla general es que la tabla cumbrera sea un tamaño nominal mayor que los cabios. Para cabios de 38x140 mm, usa cumbrera de 38x184 mm. Para cabios de 38x184 mm, usa cumbrera de 38x235 mm. Para cabios de 38x235 mm, usa cumbrera de 38x286 mm. Esto asegura contacto completo del corte a plomo del cabio.",
    },
    {
      question: "¿Cómo se empalman las tablas cumbrera?",
      answer:
        "Las tablas cumbrera se empalman con una junta traslapada sobre un par de cabios opuestos. La junta debe ocurrir siempre en un punto donde hay cabios a ambos lados para proporcionar soporte. Clava con al menos 4 clavos de 90 mm en la zona de traslape.",
    },
    {
      question: "¿Necesito viga cumbrera para un techo con cielo catedral?",
      answer:
        "Sí. En un cielo catedral no hay tirantes de collar que contrarresten el empuje horizontal de los cabios, por lo que se requiere una viga cumbrera estructural que soporte el peso de los cabios y la cubierta. Esta viga debe ser dimensionada por un ingeniero y puede ser de LVL, madera laminada o acero.",
    },
    {
      question: "¿Cuántas tablas cumbrera necesito para un techo de 15 metros?",
      answer:
        "Para un techo de 15 metros de largo usando tablas de 4.88 m, necesitas 15 ÷ 4.88 = 4 tablas redondeado hacia arriba. Agrega una tabla extra para los traslapes en los empalmes, resultando en 5 tablas de cumbrera en total.",
    },
    {
      question: "¿La tabla cumbrera necesita arriostramiento permanente?",
      answer:
        "En un techo terminado con cabios y tirantes de collar correctamente instalados, la tabla cumbrera se mantiene en posición por los cabios de ambos lados. Sin embargo, durante la construcción es fundamental arriostrar temporalmente la cumbrera con puntales diagonales desde el piso o el ático hasta que todos los cabios estén instalados y clavados.",
    },
  ],
};

export const roofSheathingCalculator: CalculatorSEOContent = {
  disclaimer: "Área de techo = área en planta x factor de pendiente. Agrega 10% para cortes en limatesas y desperdicio.",
  howToUse: [
    "Calcula el área de techo (longitud del faldón x longitud del techo x 2 para techo a dos aguas, o usa un factor de pendiente).",
    "Haz clic en Calcular Materiales — incluye el conteo de clips H.",
  ],
  materialInfo:
    "El revestimiento de techo es el panel estructural que se clava sobre los cabios o cerchas para crear la superficie continua (cubierta) donde se instala la membrana impermeabilizante y las tejas o material de techado final. Los materiales más comunes son OSB de 11 mm o 12 mm y contrachapado CDX de 12 mm, ambos en formato estándar de 1.22 m x 2.44 m. El OSB es la opción más económica y de uso más extendido. El contrachapado CDX ofrece mejor resistencia a la humedad y es preferido en zonas de lluvia prolongada. Los clips H son pequeños conectores metálicos que se insertan entre los bordes no apoyados de paneles adyacentes para prevenir la deflexión diferencial — son obligatorios para revestimiento instalado sobre estructura a 60 cm entre centros. En Latinoamérica, el revestimiento de techo se consigue en las mismas fuentes que el revestimiento de muros, con costos similares por panel. La clasificación del panel debe ser adecuada para uso exterior (Exposure 1 o Exterior) para resistir las condiciones de humedad durante la construcción.",
  installationTips: [
    "Comienza desde el alero, avanzando hacia la cumbrera.",
    "Alterna las juntas de tope entre hileras.",
    "Deja juntas de expansión de 3 mm en todos los bordes.",
    "Instala clips H a media luz entre cabios o cerchas.",
  ],
  commonMistakes: [
    "Olvidar los clips H — son obligatorios para estructuras a 60 cm entre centros.",
    "No alternar las juntas de tope.",
    "Usar OSB de clasificación interior en climas lluviosos — usa clasificación Exterior 1.",
  ],
  faqs: [
    {
      question: "¿Qué espesor de revestimiento de techo debo usar?",
      answer:
        "OSB de 11 mm para cabios/cerchas a 40 cm entre centros. 12 mm para espaciado a 60 cm entre centros. El contrachapado CDX es una alternativa premium con mejor resistencia a la humedad.",
    },
    {
      question: "¿Cómo calculo el área de techo?",
      answer:
        "Área de techo = superficie en planta x factor de pendiente. Factores de pendiente: 4:12 = 1.054, 6:12 = 1.118, 8:12 = 1.202, 10:12 = 1.302, 12:12 = 1.414.",
    },
    {
      question: "¿Qué son los clips H y para qué sirven?",
      answer:
        "Los clips H son pequeños conectores metálicos en forma de H que se insertan entre los bordes de dos paneles adyacentes en el punto medio entre cabios o cerchas. Su función es evitar que un panel se deflecte más que el otro bajo carga, creando un borde rígido sin necesidad de bloqueo de madera. Son obligatorios para paneles sobre estructura a 60 cm entre centros.",
    },
    {
      question: "¿Cuántos paneles de revestimiento necesito para un techo de 80 m² en planta?",
      answer:
        "Primero aplica el factor de pendiente: para un techo con pendiente 6:12, el área real es 80 x 1.118 = 89.4 m². Cada panel de 1.22 x 2.44 m cubre 2.98 m², así que necesitas 89.4 ÷ 2.98 = 30 paneles. Agrega un 10% para desperdicio y cortes en limatesas, resultando en 33 paneles.",
    },
    {
      question: "¿Puedo caminar sobre el revestimiento de techo durante la instalación?",
      answer:
        "Sí, una vez que el panel está correctamente clavado sobre los cabios o cerchas. Sin embargo, evita caminar sobre los bordes no apoyados entre cabios, especialmente con paneles de 11 mm. Usa calzado con suela antideslizante y extrema precaución en pendientes pronunciadas. Nunca trabajes en techo mojado o con rocío.",
    },
    {
      question: "¿Es necesario sellar las juntas del revestimiento de techo?",
      answer:
        "No es necesario sellar las juntas del revestimiento ya que la membrana impermeabilizante y las tejas proporcionan la protección contra agua. Las juntas de 3 mm son intencionales y necesarias para permitir la expansión del panel con los cambios de temperatura y humedad. Sellarlas podría causar pandeo.",
    },
  ],
};

export const shingleCalculator: CalculatorSEOContent = {
  disclaimer: "Agrega 10–15% de desperdicio para limatesas, cumbreras y limahoyas.",
  howToUse: [
    "Calcula el área total de techo incluyendo todos los faldones.",
    "Ingresa el valor en metros cuadrados.",
    "Haz clic en Calcular Materiales — el resultado muestra paquetes (3 paquetes = 1 cuadrado de techado = 9.29 m²).",
  ],
  materialInfo:
    "Las tejas asfálticas son el material de techado más utilizado en construcción residencial por su equilibrio entre costo, durabilidad y facilidad de instalación. Existen dos tipos principales: las tejas de 3 lengüetas (estándar, garantía 20-25 años, más económicas) y las tejas arquitectónicas o dimensionales (aspecto premium, garantía 30-50 años, mayor resistencia al viento). Las tejas se venden en paquetes que cubren aproximadamente 3.1 m² cada uno — se necesitan 3 paquetes para cubrir un \"cuadrado de techado\" (9.29 m²). En Latinoamérica, las tejas asfálticas han ganado popularidad como alternativa a las tejas de barro y las láminas metálicas, especialmente en México, Colombia, Panamá y Costa Rica. Las marcas más disponibles son GAF, Owens Corning, CertainTeed e IKO. El costo por paquete varía entre $300 y $800 MXN según el tipo y la marca. Las tejas arquitectónicas son la opción más recomendada por su superior resistencia al viento (hasta 210 km/h), mejor aspecto estético y mayor vida útil.",
  installationTips: [
    "Comienza desde el alero, avanzando hacia la cumbrera.",
    "Desfasa las juntas verticales al menos 15 cm entre hileras.",
    "Usa 4 clavos por teja en condiciones estándar, 6 en zonas de viento fuerte.",
    "Instala las tejas de cumbrera por separado (se venden en paquetes aparte).",
  ],
  commonMistakes: [
    "No agregar margen de desperdicio — siempre pide extra para cumbrera, limatesas y limahoyas.",
    "Clavar de menos en zonas de viento fuerte.",
    "No usar membrana autoadhesiva (ice & water shield) en los primeros 60 cm desde el alero en climas donde hay riesgo de heladas.",
  ],
  faqs: [
    {
      question: "¿Cuántos paquetes de tejas por cuadrado de techado?",
      answer:
        "Las tejas estándar de 3 lengüetas y la mayoría de las arquitectónicas requieren 3 paquetes por cuadrado (9.29 m²). Algunas tejas premium de alta gama pueden requerir 4 paquetes por cuadrado.",
    },
    {
      question: "¿Cómo calculo el área de techo?",
      answer:
        "Mide la huella en planta de tu vivienda (largo x ancho), luego multiplica por el factor de pendiente de tu techo. Para una pendiente 6:12, multiplica por 1.118. Para una pendiente 4:12, multiplica por 1.054.",
    },
    {
      question: "¿Cuánto duran las tejas arquitectónicas?",
      answer:
        "Las tejas arquitectónicas de buena calidad tienen garantía de 30 años y típicamente duran de 25 a 30 años en la mayoría de los climas con instalación adecuada y buena ventilación en el ático.",
    },
    {
      question: "¿Tejas asfálticas o tejas de barro para clima tropical?",
      answer:
        "Ambas opciones funcionan en clima tropical. Las tejas de barro son tradicionales en Latinoamérica, extremadamente duraderas (50+ años) y reflejan más calor, pero son pesadas y costosas. Las tejas asfálticas son más económicas, livianas y fáciles de instalar, pero duran menos en climas de alta radiación solar. Para presupuestos ajustados, las tejas asfálticas arquitectónicas son la mejor relación costo-beneficio.",
    },
    {
      question: "¿Cuántos clavos necesito por teja asfáltica?",
      answer:
        "En condiciones normales, usa 4 clavos galvanizados por teja, ubicados en la línea de clavado marcada por el fabricante. En zonas de viento fuerte (velocidades superiores a 100 km/h, comunes en costas del Caribe y Golfo de México), se requieren 6 clavos por teja para cumplir con la norma.",
    },
    {
      question: "¿Puedo instalar tejas asfálticas sobre un techo existente?",
      answer:
        "La norma generalmente permite instalar una segunda capa de tejas sobre la existente, siempre que el revestimiento y la estructura estén en buenas condiciones. Sin embargo, retirar las tejas viejas es siempre la mejor práctica porque permite inspeccionar el revestimiento, instalar membrana nueva y evitar peso excesivo en la estructura.",
    },
  ],
};

export const underlaymentCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Ingresa el área total del techo.",
    "Selecciona el tipo de membrana que vas a utilizar.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "La membrana impermeabilizante (también llamada fieltro o papel asfáltico) es la capa de protección que se instala sobre el revestimiento de techo y debajo de las tejas, funcionando como barrera secundaria contra el agua. Existen tres tipos principales: fieltro asfáltico #15 (el más económico, ~37 m²/rollo, adecuado para pendientes moderadas), fieltro asfáltico #30 (más grueso y resistente, ~18.5 m²/rollo, para pendientes mayores), y membrana sintética (la opción premium, ~93 m²/rollo, más liviana, resistente al desgarre y antideslizante). En zonas con riesgo de congelamiento o lluvias extremas, se requiere además una membrana autoadhesiva (ice & water shield) en los primeros 60 cm desde el alero. En Latinoamérica, el fieltro asfáltico #15 es la opción más utilizada por su bajo costo, con precios entre $150 y $300 MXN por rollo. Las membranas sintéticas (marcas como GAF FeltBuster, Titanium y Sharkskin) están ganando popularidad por su superior rendimiento. Todas las garantías de fabricantes de tejas exigen la instalación de membrana impermeabilizante.",
  installationTips: [
    "Instala horizontalmente, comenzando desde el alero.",
    "Traslapa cada franja 5–10 cm sobre la inferior.",
    "Usa membrana autoadhesiva (ice & water shield) en las primeras 2 franjas en climas fríos.",
    "Fija con clavos con arandela o grapas según las instrucciones del fabricante.",
  ],
  commonMistakes: [
    "Instalar en dirección incorrecta (debe ir horizontal).",
    "No usar membrana autoadhesiva cerca de los aleros — obligatorio en zonas con riesgo de congelamiento.",
    "Usar grapas en áreas de viento fuerte en lugar de clavos con arandela.",
  ],
  faqs: [
    {
      question: "¿Necesito membrana impermeabilizante debajo de las tejas?",
      answer:
        "Sí. La membrana es requerida por la mayoría de las normas y todas las garantías de fabricantes de tejas. Es tu barrera secundaria contra la humedad en caso de que las tejas se dañen.",
    },
    {
      question: "Fieltro asfáltico vs. membrana sintética: ¿cuál debo usar?",
      answer:
        "La membrana sintética es ahora la preferida por la mayoría de los techadores. Es más liviana, resistente al desgarre, antideslizante y puede quedar expuesta por más tiempo. El fieltro asfáltico absorbe humedad y se rasga con facilidad durante la instalación.",
    },
    {
      question: "¿Cuántos rollos de fieltro necesito para un techo de 100 m²?",
      answer:
        "Depende del tipo. Un rollo de fieltro #15 cubre aproximadamente 37 m², por lo que necesitarías 3 rollos. Un rollo de fieltro #30 cubre 18.5 m², necesitarías 6 rollos. Un rollo de membrana sintética cubre 93 m², necesitarías 2 rollos. Agrega 10-15% para traslapes y desperdicio.",
    },
    {
      question: "¿Puedo dejar la membrana expuesta a la intemperie antes de instalar las tejas?",
      answer:
        "El fieltro asfáltico no debe quedar expuesto más de 14 días ya que se degrada con los rayos UV y la lluvia. Las membranas sintéticas pueden resistir de 90 a 180 días de exposición según la marca. Consulta las especificaciones del fabricante y planifica instalar las tejas lo antes posible.",
    },
    {
      question: "¿Es necesaria la membrana autoadhesiva en climas tropicales?",
      answer:
        "La membrana autoadhesiva (ice & water shield) fue diseñada originalmente para zonas con riesgo de congelamiento, pero también es altamente recomendable en climas tropicales con lluvias torrenciales. Instálala en los aleros, limahoyas y alrededor de penetraciones (chimeneas, ventilaciones) donde el riesgo de infiltración es mayor.",
    },
    {
      question: "¿Cuál es el traslape correcto entre franjas de membrana?",
      answer:
        "El traslape horizontal mínimo es de 5 cm para fieltro #15, 8 cm para fieltro #30 y 7.5 cm para membranas sintéticas. Los traslapes laterales (extremos de rollo) deben ser de al menos 15 cm. En limahoyas y penetraciones, aumenta el traslape a 30 cm como mínimo para mayor protección.",
    },
  ],
};

export const dripEdgeCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Mide todos los bordes de alero más todos los bordes de hastial (aguas).",
    "Ingresa la longitud de cada pieza de gotero (estándar 3 m).",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "El gotero (botaguas de alero) es un perfil metálico en forma de L o C que se instala en todos los bordes del techo — tanto en los aleros como en los hastiales (aguas) — para dirigir el escurrimiento de agua lejos de la facia, la cornisa y la estructura de madera. Es un componente obligatorio por norma para todos los techos con tejas asfálticas. Los goteros se fabrican en aluminio, acero galvanizado o acero prepintado, en piezas estándar de 3 metros de largo. Los perfiles más comunes son el tipo C (también llamado estilo D) con una pestaña inferior extendida, y el tipo A (perfil simple en L). El tipo C es preferido para residencial porque aleja el agua más efectivamente de la facia. En Latinoamérica, los goteros se consiguen en laminadoras y ferreterías especializadas, con costos entre $30 y $80 MXN por pieza de 3 metros según el material y calibre. Los colores más demandados son blanco, café y negro para combinar con la facia y las tejas. Es uno de los componentes más económicos del techo pero uno de los más importantes para la durabilidad de la estructura.",
  installationTips: [
    "Instala el gotero de alero ANTES de la membrana impermeabilizante; el gotero de hastial DESPUÉS de la membrana.",
    "Traslapa las piezas al menos 5 cm.",
    "Clava cada 30 cm.",
  ],
  commonMistakes: [
    "Instalar el gotero de hastial antes de la membrana — la membrana debe traslapar sobre el gotero del hastial.",
    "No traslapar las piezas lo suficiente, permitiendo infiltración de agua.",
  ],
  faqs: [
    {
      question: "¿Es obligatorio el gotero de techo?",
      answer:
        "Sí. La norma requiere gotero (botaguas) en todos los aleros y hastiales de techos con tejas. Es un componente fundamental para dirigir el escurrimiento de agua.",
    },
    {
      question: "¿Qué perfil de gotero debo usar?",
      answer:
        "El perfil tipo C (también llamado estilo D) es el más común para techos residenciales. Tiene una pestaña inferior más ancha que aleja el agua de la facia de manera más efectiva que el perfil tipo A.",
    },
    {
      question: "¿Cuál es la secuencia correcta de instalación del gotero?",
      answer:
        "En los aleros, el gotero se instala PRIMERO, directamente sobre el revestimiento, y la membrana impermeabilizante se coloca ENCIMA del gotero. En los hastiales, la membrana se instala PRIMERO y el gotero se coloca ENCIMA de la membrana. Esta secuencia asegura que el agua siempre fluya sobre el gotero y no debajo de la membrana.",
    },
    {
      question: "¿Gotero de aluminio o de acero galvanizado?",
      answer:
        "El aluminio es más liviano, no se oxida y es fácil de cortar, siendo ideal para la mayoría de las aplicaciones residenciales. El acero galvanizado es más rígido y resistente a los golpes, pero puede oxidarse con el tiempo si el recubrimiento se daña. En zonas costeras de Latinoamérica con alta salinidad, el aluminio o el acero inoxidable son las mejores opciones.",
    },
    {
      question: "¿Cuántos metros lineales de gotero necesito para un techo típico?",
      answer:
        "Para una casa de 10x12 m con techo a dos aguas, necesitas gotero en los dos aleros (2 x 12 m = 24 m) y los dos hastiales (2 x la longitud del faldón). Con pendiente 6:12, los hastiales miden aproximadamente 5.6 m cada uno (2 x 5.6 m = 11.2 m). Total aproximado: 35 metros lineales, equivalente a 12 piezas de 3 metros.",
    },
    {
      question: "¿Puedo reutilizar el gotero al reemplazar las tejas del techo?",
      answer:
        "Si el gotero existente está en buenas condiciones, sin óxido ni deformaciones, puede reutilizarse. Sin embargo, el costo del gotero es tan bajo comparado con el presupuesto total del retechado que la mayoría de los profesionales recomiendan reemplazarlo para asegurar una protección óptima por otros 25 a 30 años.",
    },
  ],
};

export const roofPitchCalculator: CalculatorSEOContent = {
  disclaimer: "Esta calculadora proporciona valores aproximados. Consulta a un ingeniero estructural para decisiones de diseño y carga.",
  howToUse: [
    "Mide la elevación vertical de tu techo en centímetros — cuánto sube el techo sobre una distancia horizontal.",
    "Ingresa el recorrido horizontal en centímetros (estándar: 30 cm para la notación convencional de pendiente).",
    "Haz clic en Calcular Materiales para obtener la relación de pendiente, el ángulo en grados, el porcentaje de inclinación y el multiplicador de área.",
    "Usa el multiplicador de área para convertir el área en planta de tu techo al área real de la superficie — multiplica el área plana por este número.",
  ],
  materialInfo:
    "La pendiente del techo (también llamada inclinación o caída) es la relación entre la elevación vertical y el recorrido horizontal, expresada como centímetros de elevación por cada 30 cm de recorrido (equivalente a la notación americana de pulgadas por cada 12 pulgadas). Es una de las dimensiones más críticas en un techo porque determina qué materiales son adecuados, la capacidad de evacuación del agua, las trayectorias de carga estructural y la facilidad de acceso para los instaladores. Las pendientes residenciales más comunes van de 4:12 a 8:12. Una pendiente de 4:12 (18.4°) es la mínima recomendada para tejas asfálticas estándar y es fácil de caminar. Una pendiente de 6:12 (26.6°) es la más popular, ofreciendo un buen equilibrio entre estética y evacuación de agua. Una pendiente de 8:12 (33.7°) o mayor proporciona excelente evacuación de nieve y una línea de techo dramática, pero incrementa costos de material y dificultad de mano de obra. En regiones con nevadas intensas del sur de Chile y Argentina, pendientes de 8:12 a 12:12 son comunes para prevenir acumulación peligrosa de nieve. En zonas tropicales de México, Centroamérica y el Caribe, pendientes de 4:12 a 6:12 son suficientes ya que la carga de nieve no es un factor. Los techos de baja pendiente (menos de 2:12) requieren sistemas especiales como membranas de bitumen modificado, TPO o EPDM porque las tejas no pueden evacuar el agua de forma confiable en ángulos tan bajos.",
  installationTips: [
    "Usa un medidor de pendiente o escuadra rápida colocada sobre un cabio para verificar la pendiente antes de pedir materiales.",
    "Para techos inaccesibles, mide la pendiente desde el interior del ático colocando un nivel horizontal y midiendo la elevación a 30 cm de recorrido.",
    "Al usar una aplicación de inclinómetro en el celular, coloca el teléfono directamente sobre la superficie del techo o un cabio para mayor precisión.",
    "Siempre verifica la pendiente en múltiples secciones del techo — buhardillas, ampliaciones y techos de garaje a menudo tienen pendientes diferentes al techo principal.",
    "Convierte la pendiente al multiplicador de área antes de estimar materiales — un techo más empinado usa significativamente más tejas, membrana y revestimiento de lo que sugiere el área en planta.",
  ],
  commonMistakes: [
    "Confundir elevación con recorrido — la elevación es vertical (hacia arriba), el recorrido es horizontal (hacia los lados). Intercambiarlos da una pendiente incorrecta.",
    "Medir a lo largo de la pendiente en vez de horizontalmente para el recorrido — el recorrido debe ser la distancia horizontal, no la longitud del cabio.",
    "Suponer que todo el techo tiene una sola pendiente — muchas viviendas tienen múltiples pendientes en diferentes secciones.",
    "Usar el área en planta para estimar materiales sin aplicar el multiplicador de pendiente — esto causa faltante de material en techos empinados.",
    "Ignorar los requisitos de pendiente mínima para el material de techo elegido — las tejas asfálticas necesitan al menos 2:12, y la instalación estándar requiere 4:12 o más.",
  ],
  faqs: [
    {
      question: "¿Cómo se calcula la pendiente de un techo?",
      answer:
        "La pendiente se calcula dividiendo la elevación vertical entre el recorrido horizontal. Para la notación estándar, mide cuántos centímetros sube el techo por cada 30 cm de recorrido horizontal. Por ejemplo, si sube 15 cm en 30 cm de recorrido, la pendiente es 6:12. También puedes expresarla en grados usando la fórmula: ángulo = arctan(elevación / recorrido).",
    },
    {
      question: "¿Qué pendiente tiene mi techo?",
      answer:
        "Puedes medir la pendiente desde afuera usando un nivel y cinta métrica sobre la superficie del techo, o desde el interior del ático midiendo a lo largo de un cabio. Coloca un nivel horizontal con un extremo tocando la parte inferior del cabio, mide 30 cm a lo largo del nivel, y luego mide la distancia vertical desde el extremo del nivel hasta el cabio — esa distancia en centímetros dividida entre 2.54 te da la pendiente en la notación X:12.",
    },
    {
      question: "¿Cuántos grados son una pendiente de 4:12?",
      answer:
        "Una pendiente de 4:12 equivale a 18.4 grados. Se considera una pendiente moderada-baja y es la mínima recomendada para la instalación estándar de tejas asfálticas. A este ángulo, el techo es fácil de caminar y evacua el agua adecuadamente para la mayoría de los climas.",
    },
    {
      question: "¿Cuál es la pendiente mínima para tejas asfálticas?",
      answer:
        "La pendiente mínima absoluta para tejas asfálticas es 2:12 (9.5°), pero requiere instalación especial con doble membrana y sellador en cada lengüeta. La instalación estándar sin medidas especiales requiere un mínimo de 4:12 (18.4°). Por debajo de 2:12, debes usar un sistema de techo de baja pendiente como membrana de bitumen modificado, TPO o EPDM.",
    },
    {
      question: "¿Qué pendiente de techo es mejor para lluvia intensa?",
      answer:
        "Una pendiente de 6:12 (26.6°) o mayor es recomendada en climas con lluvias intensas, como las zonas tropicales de México, Centroamérica y Colombia. Pendientes más pronunciadas evacuán el agua más rápidamente, reduciendo el riesgo de filtraciones. En zonas de nieve como el sur de Chile, pendientes de 8:12 a 12:12 son comunes para evitar acumulación.",
    },
    {
      question: "¿Cómo afecta la pendiente al costo del techo?",
      answer:
        "Las pendientes más pronunciadas aumentan los costos de tres formas: más material (una pendiente de 12:12 usa 41% más material que el área en planta), mano de obra más cara (los techos empinados requieren arneses, andamios y trabajo más lento), y estructura más compleja (cabios más largos, conexiones más resistentes). El incremento de material es proporcional al multiplicador de área.",
    },
    {
      question: "¿Qué es el multiplicador de área del techo?",
      answer:
        "El multiplicador de área convierte el área en planta de tu techo al área real de la superficie inclinada. Multiplica el área de la planta por este factor para determinar cuánto material necesitas realmente. Multiplicadores comunes: 4:12 = 1.054, 6:12 = 1.118, 8:12 = 1.202, 10:12 = 1.302, 12:12 = 1.414. Se deriva del teorema de Pitágoras: multiplicador = raíz cuadrada de (1 + (elevación/recorrido)²).",
    },
    {
      question: "¿Se puede cambiar la pendiente de un techo existente?",
      answer:
        "Sí, pero es una renovación estructural mayor. Cambiar la pendiente requiere remover el techo existente, modificar o reemplazar los cabios o cerchas, ajustar la altura de la cumbrera y potencialmente reforzar los muros para manejar diferentes ángulos de carga. El costo típico va de $300,000 a $800,000 MXN o más dependiendo del tamaño y complejidad. Requiere permiso de construcción y planos de ingeniería.",
    },
  ],
};

export const roofAreaCalculator: CalculatorSEOContent = {
  disclaimer: "Esta calculadora proporciona valores aproximados. El área real puede variar por buhardillas, limahoyas y formas irregulares. Siempre verifica las medidas en sitio.",
  howToUse: [
    "Mide el largo y ancho de la huella de tu edificio en metros — estas son las dimensiones planas vistas desde arriba.",
    "Ingresa la pendiente del techo como elevación por cada 30 cm de recorrido (por ejemplo, 6 para una pendiente 6:12). Si no conoces tu pendiente, usa primero la Calculadora de Pendiente de Techo.",
    "Selecciona el tipo de techo: A dos aguas (dos faldones inclinados), a cuatro aguas (todos los lados inclinados) o cobertizo (un solo faldón).",
    "Haz clic en Calcular Materiales para obtener el área real de la superficie del techo, los cuadros de techado y el multiplicador de pendiente.",
  ],
  materialInfo:
    "El cálculo del área de techo es la base de toda estimación de materiales de techado. El error más común que cometen propietarios e incluso algunos contratistas es usar el área de la huella plana en lugar del área real de la superficie inclinada — esto genera faltantes significativos de material, especialmente en techos empinados. El multiplicador de pendiente convierte el área plana al área real usando el teorema de Pitágoras: multiplicador = raíz cuadrada de (1 + (pendiente/12)²). Para una pendiente estándar de 6:12, el multiplicador es 1.118, lo que significa que el área real del techo es aproximadamente 12% más grande que la huella. A 12:12, el techo tiene 41% más superficie que el plano. Los materiales de techado se venden en 'cuadros', donde un cuadro cubre 9.3 metros cuadrados (100 pies cuadrados) de superficie. Las tejas asfálticas típicamente vienen en paquetes de 3 por cuadro. Al pedir materiales, siempre agrega un 10-15% por desperdicio de cortes, hileras iniciales, tapas de cumbrera y limahoyas. Para techos a cuatro aguas, agrega un 5% adicional porque las limatesas y limahoyas generan más desperdicio de corte que un techo simple a dos aguas.",
  installationTips: [
    "Siempre mide las dimensiones del techo desde el alero hasta la cumbrera sobre el faldón, no solo la huella horizontal — o usa el multiplicador de pendiente para convertir.",
    "Para techos complejos con múltiples pendientes, calcula cada sección por separado y suma las áreas para obtener el total.",
    "Al pedir tejas, redondea hacia arriba al cuadro completo más cercano y agrega 10-15% por cortes y desperdicio en limatesas, limahoyas y bordes.",
    "Verifica la medida de pendiente en cada plano del techo — ampliaciones y buhardillas frecuentemente tienen pendientes diferentes al techo principal.",
    "Para techos a cuatro aguas, mide cada sección triangular y trapezoidal individualmente para la estimación más precisa.",
  ],
  commonMistakes: [
    "Usar el área de la huella plana en lugar del área real de la superficie inclinada — esto subestima los materiales, especialmente en pendientes pronunciadas.",
    "Olvidar considerar ambos lados de un techo a dos aguas — la huella solo muestra un plano, pero los techos a dos aguas tienen dos superficies inclinadas.",
    "No agregar factor de desperdicio — limahoyas, limatesas y bordes crean desperdicio de corte que incrementa la necesidad de material en 10-15%.",
    "Confundir cuadros de techado con metros cuadrados — un cuadro son 9.3 m², así que un techo de 280 m² necesita 30 cuadros, no 280.",
    "Ignorar buhardillas, chimeneas y otras penetraciones del techo al calcular el área.",
  ],
  faqs: [
    {
      question: "¿Cómo calculo el área de techo desde el suelo?",
      answer:
        "Puedes calcular el área del techo sin subir midiendo la huella del edificio (largo × ancho) y multiplicando por el multiplicador de pendiente y el número de faldones. Para un techo a dos aguas, multiplica la huella por el multiplicador y luego por 2. Determina la pendiente desde el interior del ático usando nivel y cinta métrica, o usa una app de inclinómetro en el celular apuntando al faldón.",
    },
    {
      question: "¿Cuántos cuadros de techado necesito?",
      answer:
        "Divide el área total real del techo (no la huella) entre 9.3 m² para obtener el número de cuadros. Por ejemplo, un área de techo de 260 m² necesita 28 cuadros. Agrega 10-15% por desperdicio, llevando el pedido a 31-32 cuadros. Cada cuadro de tejas estándar requiere 3 paquetes, así que 28 cuadros equivalen a 84 paquetes más desperdicio.",
    },
    {
      question: "¿Cuál es el multiplicador de área para una pendiente 6:12?",
      answer:
        "El multiplicador de pendiente para un techo 6:12 es 1.118. Esto significa que una huella de 93 m² tiene un área real de superficie de 104 m² por faldón. Para un techo a dos aguas (dos lados), el total sería 208 m². El multiplicador se calcula como raíz cuadrada de (1 + (6/12)²) = raíz cuadrada de (1.25) = 1.118.",
    },
    {
      question: "¿Cómo calculo los metros cuadrados de techo para tejas?",
      answer:
        "Primero, determina el área de la huella plana (largo × ancho). Luego multiplica por el multiplicador de pendiente para tu inclinación. Para un techo a dos aguas, multiplica el resultado por 2 para ambos lados. Finalmente, agrega 10-15% por desperdicio. Divide el total entre 9.3 para convertir a cuadros de techado. Cada cuadro requiere 3 paquetes de tejas estándar.",
    },
    {
      question: "¿Cuál es la diferencia entre área de techo y área de piso?",
      answer:
        "El área de piso (o huella) es el área horizontal del edificio vista desde arriba. El área de techo es la superficie real del techo inclinado, que siempre es mayor que la huella para cualquier techo con pendiente. Cuanto más empinada la pendiente, mayor la diferencia. Una pendiente de 4:12 agrega aproximadamente 5.4% más área, mientras que 12:12 agrega 41.4% comparado con la huella plana.",
    },
    {
      question: "¿Cómo calculo el área de un techo a cuatro aguas?",
      answer:
        "Un techo a cuatro aguas tiene cuatro faldones inclinados en lugar de dos. Calcula el área de la huella, multiplica por el multiplicador de pendiente y luego por aproximadamente 2.1 (en lugar de 2 para un techo a dos aguas) para considerar las áreas adicionales de limatesas y limahoyas. Alternativamente, mide cada sección triangular y trapezoidal individualmente y suma las áreas.",
    },
  ],
};

export const roofSlopeCalculator: CalculatorSEOContent = {
  disclaimer: "Esta calculadora proporciona valores aproximados. La pendiente real puede variar entre secciones. Verifica las medidas en múltiples puntos y consulta a un profesional de techado para selección de materiales.",
  howToUse: [
    "Mide la elevación vertical en centímetros — cuántos centímetros sube el techo sobre la distancia horizontal medida.",
    "Mide el recorrido horizontal en metros — esta es la distancia plana y nivelada que mediste (no a lo largo del faldón).",
    "Haz clic en Calcular Materiales para obtener la relación de pendiente (por cada 30 cm de recorrido), el ángulo en grados, el porcentaje de inclinación y la recomendación de material.",
    "Usa la recomendación de material para confirmar que tu material de techado es apropiado para la inclinación de tu techo.",
  ],
  materialInfo:
    "La medición de la inclinación del techo es el primer paso crítico antes de seleccionar materiales de techado, porque cada producto tiene un requisito mínimo de pendiente establecido por el fabricante y exigido por los códigos de construcción. La inclinación es la relación entre la elevación vertical y el recorrido horizontal, y determina directamente qué tan rápido se evacuan el agua y la nieve de la superficie del techo. Los techos planos y de muy baja pendiente (menos de 2:12) requieren sistemas de membrana continua como TPO (poliolefina termoplástica), EPDM (monómero de etileno propileno dieno), PVC o techado multicapa (BUR) con múltiples capas de bitumen y tela de refuerzo. Estos sistemas de membrana crean un sello hermético que no depende de la gravedad para evacuar el agua. Los techos de baja pendiente entre 2:12 y 4:12 pueden usar tejas asfálticas, pero solo con métodos especiales de instalación incluyendo doble membrana impermeabilizante, sellador adicional en cada lengüeta y membrana autoadhesiva en toda la cubierta en climas fríos. Las tejas asfálticas estándar (de 3 lengüetas y arquitectónicas) funcionan mejor en techos con pendiente de 4:12 a 8:12, donde la gravedad canaliza eficazmente el agua. Los techos de pendiente pronunciada por encima de 8:12 se benefician de materiales pesados como teja de concreto, teja de barro, pizarra o paneles metálicos de junta alzada que resisten el levantamiento por viento y se fijan mecánicamente para manejar el ángulo pronunciado.",
  installationTips: [
    "Usa un nivel de 60 cm o 1.20 m y una cinta métrica para la medición más precisa — niveles más largos reducen el error por irregularidades de la superficie.",
    "Mide desde el interior del ático a lo largo de un cabio si la superficie del techo es inaccesible — coloca el nivel horizontal y mide la caída vertical a una distancia horizontal conocida.",
    "Una app de inclinómetro en el celular puede dar una lectura rápida del ángulo, pero verifícala con una medición manual para decisiones de compra de materiales.",
    "Revisa la pendiente en múltiples ubicaciones — el techo principal, el garaje, las buhardillas y las ampliaciones frecuentemente tienen pendientes diferentes.",
    "Registra la elevación en centímetros y el recorrido en metros claramente para evitar errores de conversión de unidades al comunicarte con proveedores.",
  ],
  commonMistakes: [
    "Medir a lo largo del faldón en lugar de horizontalmente para el recorrido — el recorrido siempre debe ser la distancia horizontal y nivelada.",
    "Confundir porcentaje de inclinación con relación de pendiente — una inclinación del 50% equivale a una pendiente 6:12, no una pendiente del 6%.",
    "Suponer que una medición aplica para todo el techo — los techos de múltiples secciones comúnmente tienen dos o más pendientes diferentes.",
    "Usar tejas en un techo por debajo de la pendiente mínima de 2:12 — esto viola el código de construcción y probablemente causará filtraciones.",
    "Medir elevación y recorrido en unidades diferentes (por ejemplo, elevación en pulgadas y recorrido en metros) sin convertir antes de calcular.",
  ],
  faqs: [
    {
      question: "¿Cómo mido la pendiente del techo desde el suelo?",
      answer:
        "Aléjate del edificio y usa una app de inclinómetro en el celular apuntando al borde del techo para obtener un ángulo aproximado. Para una medición más precisa, entra al ático y mide a lo largo de un cabio: sostén un nivel horizontal con un extremo tocando el cabio, mide 1 metro de distancia horizontal, luego mide la caída vertical desde el nivel hasta el cabio en ese punto. Convierte la elevación a la notación estándar dividiendo entre el recorrido y multiplicando por 12.",
    },
    {
      question: "¿Cuál es la diferencia entre inclinación y pendiente de techo?",
      answer:
        "En la construcción moderna, los términos se usan frecuentemente de forma intercambiable. Técnicamente, la inclinación (slope) es la relación de elevación a recorrido para un lado del techo (por ejemplo, 6:12), mientras que la pendiente (pitch) tradicional es la relación de elevación al claro total (ancho completo). Un techo con inclinación 6:12 en cada lado tiene una pendiente de 6:24, o 1/4. Sin embargo, en el uso cotidiano, la mayoría de los constructores dicen 'pendiente' cuando se refieren a la elevación por cada 30 cm de recorrido.",
    },
    {
      question: "¿Qué pendiente necesito para tejas asfálticas?",
      answer:
        "Las tejas asfálticas estándar requieren una pendiente mínima de 4:12 (18.4°) para instalación normal. Entre 2:12 y 4:12, las tejas pueden usarse pero requieren instalación especial de baja pendiente con doble membrana, sellador en cada hilera y membrana autoadhesiva en toda la cubierta. Por debajo de 2:12, las tejas no deben usarse — cambia a un sistema de membrana como TPO, EPDM o bitumen modificado.",
    },
    {
      question: "¿Cómo convierto la inclinación del techo a grados?",
      answer:
        "Para convertir una relación de pendiente a grados, usa la función arcotangente: grados = arctan(elevación / recorrido) × (180 / π). Para una pendiente 6:12: grados = arctan(6/12) × 57.296 = arctan(0.5) × 57.296 = 26.57° ≈ 26.6°. Conversiones comunes: 4:12 = 18.4°, 6:12 = 26.6°, 8:12 = 33.7°, 10:12 = 39.8°, 12:12 = 45°.",
    },
    {
      question: "¿Qué herramientas necesito para medir la pendiente del techo?",
      answer:
        "Las herramientas básicas son un nivel de carpintero de 60 cm o 1.20 m y una cinta métrica. Coloca el nivel horizontal contra un cabio o la superficie del techo, mide 30 cm a lo largo del nivel, luego mide la distancia vertical desde el extremo del nivel hasta el techo — esa distancia vertical en centímetros dividida entre 2.54 es tu pendiente por 12. Los medidores de ángulo digitales y las apps de inclinómetro proporcionan lecturas rápidas pero deben verificarse con una medición manual.",
    },
    {
      question: "¿Qué material de techado es mejor para techos de baja pendiente?",
      answer:
        "Para techos con pendiente menor a 2:12, TPO (poliolefina termoplástica) y EPDM (membrana de caucho) son las opciones más populares. El TPO es blanco, eficiente energéticamente y se suelda térmicamente en las juntas para un sello hermético. El EPDM es una lámina de caucho negro que se pega o fija mecánicamente. El bitumen modificado es otra opción, aplicado en rollos con soplete o adhesivo. Para pendientes de 2:12 a 4:12, las tejas arquitectónicas con instalación especial de baja pendiente pueden funcionar, pero los sistemas de membrana son más confiables.",
    },
  ],
};

// ─── EXTERIOR SHELL ─────────────────────────────────────────────────────────

export const housewrapCalculator: CalculatorSEOContent = {
  disclaimer: "Agrega 15% para traslapes, desperdicio y recortes alrededor de ventanas.",
  howToUse: [
    "Calcula el área total de muros exteriores (perímetro x altura).",
    "Ingresa la cobertura por rollo (membrana estándar tipo Tyvek = 93 m²/rollo).",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "La membrana hidrófuga (barrera resistente al agua o WRB por sus siglas en inglés) es una lámina transpirable que se instala sobre el revestimiento estructural de los muros exteriores, antes del recubrimiento final (siding). Su función es doble: bloquear el agua líquida que pueda penetrar el recubrimiento exterior, y al mismo tiempo permitir que el vapor de humedad interior escape hacia afuera, previniendo la condensación, el moho y la pudrición de la estructura. Las marcas más conocidas son DuPont Tyvek HomeWrap (la más utilizada mundialmente), Kimberly-Clark Block-It y GenWrap. Los rollos estándar cubren 93 m² (3 m x 30.5 m de largo). En Latinoamérica, la membrana Tyvek es la más disponible y se distribuye a través de redes de ferreterías industriales y distribuidores de materiales de construcción en México, Chile, Colombia, Perú y Centroamérica. El costo por rollo varía entre $1,500 y $3,000 MXN. Es un componente obligatorio por norma en la mayoría de los códigos de construcción y esencial para la durabilidad del sistema de muros exteriores.",
  installationTips: [
    "Comienza desde abajo hacia arriba. Traslapa las juntas horizontales al menos 15 cm.",
    "Sella todas las juntas, penetraciones y aberturas de ventanas con cinta de sellado compatible.",
    "Instala ventanas y puertas antes de cortar los orificios en la membrana.",
  ],
  commonMistakes: [
    "No sellar las juntas — la mayor parte de la infiltración de aire ocurre en juntas y penetraciones.",
    "Instalar al revés — la membrana Tyvek es direccional.",
    "Dejar la membrana expuesta a rayos UV por más de 90 días (degrada su rendimiento).",
  ],
  faqs: [
    {
      question: "¿Es obligatoria la membrana hidrófuga según la norma?",
      answer:
        "Sí. La norma de construcción requiere una barrera resistente al agua (WRB) en todos los muros exteriores detrás del recubrimiento. Membranas tipo Tyvek, papel de construcción o membranas autoadhesivas son opciones válidas.",
    },
    {
      question: "¿Puedo usar papel asfáltico en vez de membrana hidrófuga?",
      answer:
        "Sí, el papel de construcción asfáltico #15 cumple con las normas. Sin embargo, las membranas sintéticas superan al papel asfáltico en la mayoría de los criterios: resistencia mecánica, permeabilidad al vapor y resistencia a los rayos UV.",
    },
    {
      question: "¿Cuántos rollos de membrana hidrófuga necesito para una casa promedio?",
      answer:
        "Una casa típica de 100 m² en planta con perímetro de 40 metros y muros de 2.44 m de altura tiene aproximadamente 98 m² de área de muros. Un rollo de Tyvek cubre 93 m², pero con 15% de traslapes y recortes necesitas aproximadamente 113 m², es decir 2 rollos para una casa de ese tamaño.",
    },
    {
      question: "¿La membrana Tyvek se consigue fácilmente en Latinoamérica?",
      answer:
        "Sí. DuPont Tyvek tiene distribución en los principales mercados de Latinoamérica incluyendo México, Chile, Colombia, Perú, Panamá y Costa Rica. Se encuentra en distribuidores de materiales de construcción especializados y en cadenas como Home Depot (México) y Sodimac (Chile, Colombia, Perú).",
    },
    {
      question: "¿Cuánto tiempo puede quedar expuesta la membrana hidrófuga?",
      answer:
        "La membrana Tyvek HomeWrap puede quedar expuesta a rayos UV hasta 120 días (4 meses) según el fabricante. Otras membranas pueden tener límites menores. El papel asfáltico solo resiste 14 días de exposición. Planifica instalar el recubrimiento exterior lo antes posible después de colocar la membrana.",
    },
    {
      question: "¿Necesito membrana hidrófuga si uso revestimiento de ladrillo o piedra?",
      answer:
        "Sí. El ladrillo y la piedra no son impermeables — el agua penetra por las juntas de mortero y la porosidad del material. La membrana hidrófuga es aún más importante detrás de revestimientos de albañilería porque funcionan como sistema de drenaje: el agua que penetra el ladrillo escurre por la cara de la membrana y sale por los lloraderos en la base del muro.",
    },
  ],
};

export const vinylSidingCalculator: CalculatorSEOContent = {
  disclaimer: "Resta las áreas de puertas y ventanas para un conteo más preciso.",
  howToUse: [
    "Calcula el área bruta del muro (perímetro x altura).",
    "Resta las áreas de puertas y ventanas.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "El revestimiento vinílico (vinyl siding) es un sistema de paneles de PVC que se instala como recubrimiento exterior sobre la membrana hidrófuga. Es uno de los recubrimientos más económicos y de menor mantenimiento disponibles, ya que no requiere pintura, no se pudre ni es atacado por insectos. Los paneles estándar miden 3.66 m de largo y exponen entre 10 y 13 cm de cara por hilera, cubriendo aproximadamente 0.19 m² de área neta por metro lineal. Viene en una amplia variedad de colores y perfiles que imitan la madera traslapada. En Latinoamérica, el revestimiento vinílico se utiliza principalmente en Chile, México, Panamá y Costa Rica en proyectos de vivienda con entramado de madera. Las marcas disponibles incluyen CertainTeed, Georgia-Pacific y Royal Building Products. El costo varía entre $150 y $400 MXN por metro cuadrado instalado, significativamente menos que el fibrocemento o la madera natural. Una consideración importante es que el vinilo se dilata y contrae con la temperatura, por lo que debe instalarse con holgura en las molduras de terminación y nunca clavarse al ras.",
  installationTips: [
    "Instala sobre un sustrato plano y a plomo.",
    "Deja juntas de 6 mm en todos los molduras de terminación para expansión térmica.",
    "No claves al ras el vinilo — usa la ranura de clavado.",
    "Trabaja de abajo hacia arriba, traslapando las hileras.",
  ],
  commonMistakes: [
    "Clavar al ras el vinilo — se pandeará con el calor del verano.",
    "No dejar juntas de expansión en las molduras — causa pandeo.",
    "Instalar en climas muy fríos — el vinilo se vuelve frágil y puede quebrarse.",
  ],
  faqs: [
    {
      question: "¿Cómo calculo el revestimiento vinílico necesario?",
      answer:
        "El revestimiento vinílico se vende por metro cuadrado o por caja. Mide el área del muro en metros cuadrados, divide entre la cobertura por caja, luego agrega 10% para desperdicio y cortes.",
    },
    {
      question: "¿El revestimiento vinílico resiste el clima tropical?",
      answer:
        "El vinilo moderno con protección UV resiste bien los climas cálidos de Latinoamérica. Sin embargo, los colores oscuros absorben más calor y pueden deformarse si están expuestos a radiación solar directa intensa. Elige colores claros (blanco, beige, gris claro) para mejor rendimiento en climas tropicales y subtropicales.",
    },
    {
      question: "¿Cuánto dura el revestimiento vinílico?",
      answer:
        "El revestimiento vinílico de buena calidad tiene una vida útil de 20 a 40 años dependiendo de la calidad del producto y las condiciones climáticas. Los productos premium con mayor espesor y protección UV duran más. La principal ventaja es que nunca necesita pintura ni tratamiento, reduciendo significativamente los costos de mantenimiento.",
    },
    {
      question: "¿El revestimiento vinílico es resistente al fuego?",
      answer:
        "El vinilo no es inflamable en el sentido de que no contribuye a la propagación del fuego — se derrite y se aleja de la fuente de calor. Sin embargo, no proporciona protección contra incendios como el fibrocemento. En zonas de alto riesgo de incendios forestales en Latinoamérica, considera usar fibrocemento o revestimiento metálico que ofrecen mejor protección.",
    },
    {
      question: "¿Puedo instalar revestimiento vinílico sobre un muro de block o ladrillo?",
      answer:
        "Sí, pero necesitas instalar primero una estructura de soporte (furring strips o canales metálicos) sobre el muro de mampostería para crear una cavidad de aire y una superficie de clavado. Se fijan tiras de madera tratada o perfiles metálicos cada 40 cm y luego se instala el vinilo sobre ellas. Esto también mejora el aislamiento térmico.",
    },
    {
      question: "¿Cuál es la diferencia entre revestimiento vinílico y revestimiento de PVC?",
      answer:
        "Son esencialmente el mismo material. El revestimiento vinílico estándar tiene un espesor de 0.9 a 1.2 mm, mientras que los paneles de PVC reforzado (como los de ingeniería celular) son más gruesos (4-5 mm) y más rígidos, con un aspecto más parecido a la madera. Los paneles de PVC reforzado cuestan el doble pero ofrecen mayor durabilidad y un acabado premium.",
    },
  ],
};

export const hardieSidingCalculator: CalculatorSEOContent = {
  disclaimer: "Agrega 10% de desperdicio. Las tablas de fibrocemento con exposición de 10 cm cubren ~0.11 m² por metro lineal.",
  howToUse: [
    "Calcula el área del muro.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "El revestimiento de fibrocemento (la marca más conocida es James Hardie HardiePlank) es un material compuesto fabricado con cemite Portland, celulosa reforzada y arena, prensado a alta presión para crear tablas resistentes y duraderas que imitan la apariencia de la madera traslapada. Las tablas estándar tienen un ancho nominal de 15 cm o 20 cm con una exposición efectiva de 10 cm o 13 cm respectivamente. El largo estándar es de 3.66 m (12 pies). El fibrocemento es resistente al fuego (Clase A), resistente a insectos y termitas, dimensionalmente estable y no se pudre con la humedad. En Latinoamérica, el fibrocemento es ampliamente utilizado en países como Chile (marca Volcán y Pizarreño), México (Plycem y James Hardie), Colombia (Eternit) y Perú (Superboard). El costo por metro cuadrado instalado varía entre $300 y $700 MXN, siendo más económico que la madera natural pero más costoso que el vinilo. Requiere pintura cada 7 a 15 años, lo que debe considerarse en el presupuesto de mantenimiento a largo plazo.",
  installationTips: [
    "Usa clavos específicos para fibrocemento (galvanizados en caliente o acero inoxidable).",
    "Pinta los extremos cortados con pintura de retoque del mismo color.",
    "Mantén al menos 15 cm de separación del nivel de suelo y 2.5 cm de cualquier superficie terminada.",
    "Usa una cizalla de fibrocemento para reducir el polvo al cortar.",
  ],
  commonMistakes: [
    "Usar clavos comunes — la corrosión causa manchas en el acabado.",
    "No sellar los extremos cortados.",
    "Instalar sin imprimación trasera en áreas de alta humedad.",
  ],
  faqs: [
    {
      question: "¿Cuánto dura el revestimiento de fibrocemento?",
      answer:
        "El revestimiento tipo HardiePlank tiene una garantía limitada de 30 años y comúnmente dura más de 50 años cuando se pinta y mantiene adecuadamente. Su durabilidad lo convierte en una de las mejores opciones de revestimiento exterior.",
    },
    {
      question: "¿Puedo instalar revestimiento de fibrocemento yo mismo?",
      answer:
        "Sí, pero es pesado (3 veces más que el vinilo) y requiere herramientas específicas para fibrocemento. La mayoría de los propietarios lo contratan, pero autoconstructores experimentados pueden realizarlo con las herramientas adecuadas.",
    },
    {
      question: "¿Qué marcas de fibrocemento están disponibles en Latinoamérica?",
      answer:
        "Las principales marcas son Eternit (Colombia, Perú, Ecuador), Volcán y Pizarreño (Chile), Plycem (México, Centroamérica), James Hardie (México, distribución limitada en Sudamérica) y Superboard de Etex (varios países). Cada marca ofrece diferentes perfiles y espesores según las necesidades del mercado local.",
    },
    {
      question: "¿El fibrocemento necesita pintura?",
      answer:
        "Sí. El fibrocemento viene con una imprimación de fábrica que debe pintarse antes o poco después de la instalación. La pintura de calidad dura de 7 a 15 años antes de necesitar retoque. Algunas líneas premium (como HardiePlank ColorPlus) vienen pintadas de fábrica con garantía de color de 15 años.",
    },
    {
      question: "¿Es seguro cortar fibrocemento sin protección?",
      answer:
        "No. El polvo de fibrocemento contiene sílice cristalina que es peligrosa para los pulmones. Siempre usa mascarilla N95 o P100, gafas de protección y trabaja en un área ventilada. Las cizallas de fibrocemento son la herramienta preferida porque producen mínimo polvo en comparación con la sierra circular.",
    },
    {
      question: "¿Fibrocemento o vinilo: cuál es mejor para Latinoamérica?",
      answer:
        "El fibrocemento es generalmente la mejor opción para Latinoamérica por su resistencia al fuego, a las termitas y a los climas extremos. El vinilo es más económico y requiere menos mantenimiento, pero el fibrocemento ofrece mayor valor de reventa, mejor aspecto estético y resistencia superior a impactos. Para presupuestos limitados el vinilo es aceptable; para proyectos de mayor calidad, el fibrocemento es la elección preferida.",
    },
  ],
};

export const windowFlashingCalculator: CalculatorSEOContent = {
  disclaimer: "La cinta tapajuntas de ventanas generalmente tiene 10 cm o 15 cm de ancho. Se compra en rollos.",
  howToUse: [
    "Cuenta el número total de ventanas.",
    "Ingresa el perímetro promedio de ventana (una ventana de 90x120 cm tiene ~4.20 m de perímetro).",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "La cinta tapajuntas de ventanas es una membrana autoadhesiva flexible que se instala alrededor del vano de cada ventana y puerta exterior para crear un sello hermético que previene la infiltración de agua. Es uno de los componentes más críticos del sistema de impermeabilización del muro exterior, ya que las ventanas y puertas son los puntos más vulnerables a filtraciones. Las cintas tapajuntas vienen en rollos de diferentes anchos (10 cm, 15 cm y 23 cm) y largos (15 m o 23 m). Los materiales incluyen polietileno con adhesivo butílico (el más común), membrana de polipropileno y láminas de aluminio autoadhesivas. En Latinoamérica, las marcas más disponibles son DuPont FlexWrap, 3M All Weather Flashing Tape, Henry Blueskin y Protecto Wrap. El costo por rollo varía entre $300 y $800 MXN dependiendo del ancho y la marca. La instalación debe seguir una secuencia estricta: primero el alféizar (base), luego las jambas (lados) y finalmente el cabezal (parte superior), asegurando que cada capa traslape sobre la anterior como escamas de pescado.",
  installationTips: [
    "Instala primero la cinta del alféizar con un doblez de respaldo.",
    "Traslapa la cinta de las jambas sobre la cinta del alféizar.",
    "Traslapa la cinta del cabezal sobre la membrana hidrófuga.",
    "Usa un rodillo J para adherir firmemente la cinta.",
  ],
  commonMistakes: [
    "Instalar en orden incorrecto (la cinta del cabezal debe traslapar sobre la membrana hidrófuga).",
    "No usar rodillo J — la adherencia es fundamental.",
    "Omitir la cinta del alféizar — la mayoría de las filtraciones de ventanas comienzan en el alféizar.",
  ],
  faqs: [
    {
      question: "¿Qué tipo de cinta tapajuntas debo usar para ventanas?",
      answer:
        "Las cintas tapajuntas autoadhesivas como DuPont FlexWrap, Henry Blueskin o 3M All Weather Flashing son las más comunes. Usa un producto compatible con el fabricante de tu membrana hidrófuga para asegurar adherencia y durabilidad.",
    },
    {
      question: "¿Cuánta cinta tapajuntas necesito por ventana?",
      answer:
        "Para una ventana estándar de 90 x 120 cm, necesitas aproximadamente 4.20 m de cinta (el perímetro completo). Sin embargo, agrega un 20% adicional para traslapes en las esquinas y recortes. Para una ventana de ese tamaño, calcula 5 metros de cinta. Un rollo de 23 metros cubre entre 4 y 5 ventanas estándar.",
    },
    {
      question: "¿Puedo usar silicón en lugar de cinta tapajuntas?",
      answer:
        "No como sustituto. El silicón o calafateo puede complementar la cinta tapajuntas pero no reemplazarla. La cinta proporciona una barrera continua y duradera que el silicón no puede igualar. El silicón se usa para sellar el perímetro exterior de la ventana después de su instalación, pero la cinta tapajuntas protege el vano estructural debajo.",
    },
    {
      question: "¿Cuál es el orden correcto de instalación de la cinta tapajuntas?",
      answer:
        "El orden es crítico y sigue el principio de que el agua debe fluir siempre hacia afuera: 1) cinta del alféizar con doblez de respaldo, 2) cinta de las jambas traslapando sobre la cinta del alféizar, 3) cinta del cabezal traslapando sobre la membrana hidrófuga del muro. Invertir este orden causa filtraciones detrás de la cinta.",
    },
    {
      question: "¿Necesito cinta tapajuntas si mis ventanas tienen brida de clavado?",
      answer:
        "Sí. La brida de clavado (nailing fin) de la ventana no proporciona un sello completo por sí sola. La cinta tapajuntas sella la unión entre la brida y la membrana hidrófuga, creando un sistema completo de protección contra agua. Sin cinta, el agua puede infiltrarse entre la brida y el revestimiento.",
    },
    {
      question: "¿La cinta tapajuntas funciona en climas tropicales con mucha lluvia?",
      answer:
        "Sí, las cintas tapajuntas autoadhesivas con adhesivo butílico funcionan excelentemente en climas tropicales. De hecho, son aún más importantes en zonas de lluvias intensas porque el volumen de agua que impacta las ventanas es mayor. Asegúrate de usar un producto de calidad y aplícalo con rodillo J sobre superficies limpias y secas para máxima adherencia.",
    },
  ],
};

// ─── INSULATION & DRYWALL ────────────────────────────────────────────────────

export const cavityInsulationCalculator: CalculatorSEOContent = {
  disclaimer: "La cobertura de los paneles aislantes varía según el producto. Verifica los m²/panel en la etiqueta.",
  howToUse: [
    "Mide el área total de muro o cielo a aislar.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "Los paneles aislantes de fibra de vidrio o lana mineral se instalan dentro de las cavidades de montantes y viguetas para reducir la transferencia de calor entre el interior y el exterior de la edificación. El valor de aislamiento se mide en valor R — a mayor R, mejor aislamiento. Para muros de 38x89 mm se usan paneles R-13 o R-15 de 89 mm de espesor. Para muros de 38x140 mm se usan paneles R-19 o R-21 de 140 mm. Para cielos y áticos, se recomienda R-30 a R-60 según la zona climática. En Latinoamérica, el aislamiento térmico en viviendas es cada vez más importante debido a las normativas de eficiencia energética que se están implementando en Chile (CEV), México (NOM-020-ENER) y Colombia (Resolución 0549). Las marcas disponibles incluyen Owens Corning, Knauf Insulation, Isover (Saint-Gobain) y Rockwool. El costo varía entre $50 y $150 MXN por metro cuadrado según el tipo y espesor. La lana mineral (como Rockwool) es más costosa pero ofrece mejor aislamiento acústico, resistencia al fuego y al agua que la fibra de vidrio convencional.",
  installationTips: [
    "Llena las cavidades completamente — el aislamiento comprimido o con huecos pierde valor R.",
    "No dejes espacios alrededor de cajas eléctricas y tuberías.",
    "Usa mascarilla respiratoria al manipular paneles de fibra de vidrio.",
  ],
  commonMistakes: [
    "Comprimir los paneles aislantes — la compresión reduce significativamente el valor R.",
    "Dejar huecos de aire en las soleras superiores e inferiores.",
    "No instalar barrera de vapor en climas fríos.",
  ],
  faqs: [
    {
      question: "¿Qué valor R necesito para muros exteriores?",
      answer:
        "Los requisitos normativos varían de R-13 (zonas climáticas cálidas) hasta R-20 o R-21 (zonas climáticas frías). Consulta la norma de eficiencia energética vigente para tu localidad.",
    },
    {
      question: "Fibra de vidrio vs. lana mineral: ¿cuál es mejor?",
      answer:
        "La lana mineral (como Rockwool) es más densa, mejor para control acústico, resistente al fuego y a la humedad. La fibra de vidrio es más económica. Ambas proporcionan valores R similares por centímetro de espesor.",
    },
    {
      question: "¿Es obligatorio aislar las viviendas en Latinoamérica?",
      answer:
        "Depende del país y la zona climática. Chile tiene la normativa más estricta con la Calificación Energética de Viviendas (CEV) que exige valores R mínimos según la zona. México tiene la NOM-020-ENER para envolvente térmica. Colombia implementó la Resolución 0549 de construcción sostenible. La tendencia regional es hacia requisitos cada vez más exigentes.",
    },
    {
      question: "¿Necesito barrera de vapor con el aislamiento?",
      answer:
        "En climas fríos donde la temperatura interior es significativamente mayor que la exterior, se requiere una barrera de vapor en el lado caliente del aislamiento (interior) para evitar condensación dentro del muro. En climas tropicales cálidos y húmedos, la barrera de vapor se coloca en el lado exterior. Consulta las recomendaciones específicas para tu zona climática.",
    },
    {
      question: "¿Puedo usar espuma en spray en vez de paneles aislantes?",
      answer:
        "Sí, la espuma de poliuretano en spray (abierta o cerrada) es una excelente alternativa que sella completamente las cavidades, eliminando infiltraciones de aire. La espuma cerrada ofrece el valor R más alto por centímetro (R-6.5/cm). Sin embargo, su costo es 2 a 3 veces mayor que la fibra de vidrio y requiere instalación profesional. En Latinoamérica, está disponible a través de aplicadores certificados en las principales ciudades.",
    },
    {
      question: "¿Cuántos metros cuadrados de aislamiento necesito para una casa de 80 m²?",
      answer:
        "Para los muros exteriores de una casa de 80 m² con perímetro de 36 metros y altura de 2.44 m, necesitas aproximadamente 88 m² de paneles (descontando ventanas y puertas, aproximadamente 70 m² netos). Para el cielo, necesitas los mismos 80 m². En total, aproximadamente 150 m² de aislamiento entre muros y cielo.",
    },
  ],
};

export const drywallCalculator: CalculatorSEOContent = {
  disclaimer: "Resta las áreas de puertas y ventanas. Agrega 10% por desperdicio y láminas rotas.",
  howToUse: [
    "Suma toda la superficie de muros más la superficie de cielos en metros cuadrados.",
    "Selecciona el espesor de panel de yeso.",
    "Haz clic en Calcular Materiales — obtendrás láminas, tornillos y compuesto para juntas.",
  ],
  materialInfo:
    "Los paneles de yeso (también conocidos como tablaroca, Sheetrock, placa de yeso, cartón yeso o drywall) son láminas compuestas por un núcleo de yite recubierto por dos caras de cartón especial. El formato estándar es de 1.22 m x 2.44 m (4x8 pies) con un área de 2.98 m² por lámina. Los espesores más comunes son 12.7 mm (1/2\") para muros estándar y 15.9 mm (5/8\") tipo X para ensambles resistentes al fuego y cielos. Existen también versiones especializadas: paneles resistentes a la humedad (placa verde) para baños y cocinas, paneles ultralivianos para facilitar el manejo, y paneles de alta densidad para impacto. En Latinoamérica, las marcas principales son USG (Tablaroca en México), Knauf, Volcán (Chile), Gyplac (Perú, Colombia) y Placo (Saint-Gobain). El costo por lámina estándar de 12.7 mm varía entre $120 y $250 MXN. La construcción con paneles de yeso sobre entramado de madera es el sistema de acabado interior más utilizado mundialmente por su rapidez de instalación, bajo costo y versatilidad.",
  installationTips: [
    "Instala primero los cielos, luego los muros.",
    "Alterna las juntas — evita juntas en H.",
    "Usa tornillos de 32 mm para muros y 41 mm para cielos.",
    "Hunde los tornillos a ras de la superficie sin romper el papel.",
  ],
  commonMistakes: [
    "No alternar las juntas — las juntas en H se fisuran.",
    "Hundir demasiado los tornillos y romper la cara de papel.",
    "Colocar las láminas paralelas a las viguetas en cielos — perpendiculares reduce la deflexión.",
    "Omitir el panel de yeso en cuartos técnicos — siempre instala paneles incluso en áreas sin terminar.",
  ],
  faqs: [
    {
      question: "¿Cuántos tornillos por lámina de yeso?",
      answer:
        "Aproximadamente 32 tornillos por lámina de 1.22 m x 2.44 m — montantes a 40 cm entre centros con tornillos cada 20 cm en los bordes y cada 30 cm en el campo.",
    },
    {
      question: "¿Cuánto compuesto para juntas necesito?",
      answer:
        "Planifica aproximadamente 1 cubeta (17 litros) por cada 16 láminas para tres manos de aplicación. Esta calculadora estima con base en esa proporción.",
    },
    {
      question: "¿Debo usar tornillos o clavos para paneles de yeso?",
      answer:
        "Los tornillos son ampliamente preferidos. No se aflojan como los clavos, proporcionan mejor agarre y son requeridos por la mayoría de las normas. Usa un adaptador de tope de profundidad para fijar la profundidad automáticamente.",
    },
    {
      question: "¿Qué espesor de panel de yeso necesito para cielos?",
      answer:
        "Para cielos con viguetas a 40 cm entre centros, usa paneles de 12.7 mm como mínimo. Para viguetas a 60 cm, se requiere 15.9 mm para evitar combadura. Si el cielo requiere clasificación de resistencia al fuego (garajes, separaciones entre pisos), usa paneles de 15.9 mm tipo X obligatoriamente.",
    },
    {
      question: "¿Qué tipo de panel uso para baños y cocinas?",
      answer:
        "Usa paneles resistentes a la humedad (placa verde o placa morada) en baños y cocinas, excepto dentro de la ducha o bañera donde se requiere tablero de cemite (Durock, Hardiebacker o equivalente). Los paneles regulares absorben humedad y se deterioran rápidamente en ambientes húmedos.",
    },
    {
      question: "¿Cuántas láminas de yeso necesito para una habitación de 3x4 metros con cielo de 2.44 m?",
      answer:
        "Los muros tienen un área de (3+4+3+4) x 2.44 = 34.2 m². El cielo tiene un área de 3 x 4 = 12 m². Total: 46.2 m². Cada lámina cubre 2.98 m², por lo que necesitas 46.2 ÷ 2.98 = 16 láminas. Agrega 10% de desperdicio: 17 a 18 láminas, descontando las áreas de puertas y ventanas.",
    },
  ],
};

export const drywallScrewCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Ingresa el número total de láminas de yeso.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "Los tornillos para paneles de yeso son fijaciones especializadas con cabeza tipo bugle (trompeta) y punta autoperforante diseñadas específicamente para instalar paneles de yeso sobre estructura de madera o metálica. Los dos tipos principales son: rosca gruesa para estructura de madera (los más comunes en construcción con entramado) y rosca fina para perfiles metálicos (para sistemas de steel frame). Las longitudes estándar son 32 mm (1-1/4\") para paneles de una capa en muros, 41 mm (1-5/8\") para cielos (mayor penetración en la vigueta) y 57 mm (2-1/4\") para doble capa. En Latinoamérica, los tornillos se venden en cajas de 500 o 1,000 unidades, con costos entre $80 y $250 MXN por caja de 500 según la longitud y calidad. Las marcas más disponibles incluyen Simpson Strong-Tie, Grip-Rite, Truper y marcas genéricas. Se necesitan aproximadamente 32 tornillos por lámina estándar de 1.22 x 2.44 m. Es importante usar un adaptador de tope de profundidad (dimpler) en el atornillador para hundir cada tornillo 1 mm bajo la superficie sin romper el papel del panel.",
  installationTips: [
    "Usa un atornillador de alimentación automática o un adaptador de tope de profundidad en un taladro estándar.",
    "Los tornillos deben hundirse 1 mm sin romper el papel del panel.",
  ],
  commonMistakes: [
    "Usar clavos para paneles de yeso en lugar de tornillos — los clavos se aflojan con frecuencia.",
    "Usar el tipo de rosca incorrecto — se requiere rosca gruesa para estructura de madera.",
  ],
  faqs: [
    {
      question: "¿Qué tamaño de tornillos para paneles de yeso necesito?",
      answer:
        "32 mm para muros con montantes a 40 cm entre centros. 41 mm para cielos. Tornillos de 75 mm para aplicaciones de doble capa de panel de yeso.",
    },
    {
      question: "¿Cuántos tornillos necesito por lámina de panel de yeso?",
      answer:
        "Para una lámina estándar de 1.22 x 2.44 m sobre montantes a 40 cm entre centros, necesitas aproximadamente 32 tornillos: colocados cada 20 cm en los bordes del panel y cada 30 cm en las líneas intermedias de los montantes (campo). Para cielos, el espaciado se reduce a cada 18 cm.",
    },
    {
      question: "¿Rosca gruesa o rosca fina para paneles de yeso?",
      answer:
        "Usa rosca gruesa para estructura de madera (montantes y viguetas de madera). La rosca gruesa agarra mejor la fibra de la madera. Usa rosca fina solo para perfiles metálicos de acero delgado (steel frame). Si tu estructura es de madera, los tornillos de rosca fina no tendrán suficiente agarre y se aflojarán con el tiempo.",
    },
    {
      question: "¿Cuántas cajas de tornillos necesito para 20 láminas de yeso?",
      answer:
        "Con 32 tornillos por lámina, necesitas 20 x 32 = 640 tornillos. Una caja de 500 no será suficiente. Compra 2 cajas de 500 (1,000 tornillos) para tener margen de desperdicio y errores. Siempre es mejor que sobren a que te falten en medio de la instalación.",
    },
    {
      question: "¿Puedo usar tornillos multiusos en lugar de tornillos para yeso?",
      answer:
        "No es recomendable. Los tornillos para paneles de yeso tienen una cabeza tipo bugle diseñada para hundirse suavemente en el papel sin rasgarlo. Los tornillos multiusos tienen cabeza diferente que rompe el papel o sobresale demasiado, comprometiendo el acabado y la resistencia de la fijación.",
    },
    {
      question: "¿A qué profundidad debo hundir los tornillos en el panel de yeso?",
      answer:
        "Los tornillos deben hundirse aproximadamente 1 mm bajo la superficie del papel sin romperlo ni atravesarlo. Si la cabeza del tornillo rompe el papel, el tornillo pierde capacidad de sujeción. Usa un adaptador de tope de profundidad (dimpler bit) que controla automáticamente la profundidad de penetración para resultados consistentes.",
    },
  ],
};

export const jointCompoundCalculator: CalculatorSEOContent = {
  disclaimer: "Los acabados texturizados requieren más compuesto. Presupuesta un adicional.",
  howToUse: [
    "Ingresa el número de láminas de yeso.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "El compuesto para juntas (también llamado masilla, pasta, enduido o mud) es un material a base de yeso que se aplica sobre las juntas, tornillos y esquinas de los paneles de yeso para crear una superficie lisa y continua lista para pintar. Existen varios tipos: compuesto de uso general (All-Purpose) que sirve para todas las manos, compuesto de encintado (Taping) más adhesivo para la primera mano con cinta, y compuesto liviano (Lightweight o Plus 3) más fácil de lijar para la mano final. La presentación más común es la cubeta de 17 litros (4.5 galones) que cubre aproximadamente 16 láminas en tres manos de aplicación. También existe el compuesto de fraguado rápido (tipo Durabond o Easy Sand) que viene en polvo y fragua químicamente en 20, 45 o 90 minutos — ideal para rellenos profundos y primera mano en reparaciones. En Latinoamérica, las marcas principales son USG Sheetrock (México), Knauf, Volcán (Chile) y marcas locales según el país. El costo por cubeta de 17 litros varía entre $200 y $500 MXN.",
  installationTips: [
    "Aplica 3 manos: capa de encintado, segunda mano (más delgada) y mano de acabado.",
    "Lija entre manos cuando esté completamente seco.",
    "Usa compuesto liviano para la mano final para un lijado más fácil.",
  ],
  commonMistakes: [
    "Aplicar el compuesto demasiado grueso — causa fisuras.",
    "No esperar a que seque completamente entre manos.",
    "Usar compuesto de fraguado rápido para la mano de acabado — es demasiado duro para lijar.",
  ],
  faqs: [
    {
      question: "¿Cuál es la diferencia entre compuesto de uso general y liviano?",
      answer:
        "El de uso general es más pesado, más fuerte y mejor para la capa de encintado. El liviano es más fácil de lijar y mejor para la mano de acabado final. Muchos profesionales usan el de uso general para el encintado y el liviano para las manos de acabado.",
    },
    {
      question: "¿Cuántas cubetas de compuesto necesito para 30 láminas de yeso?",
      answer:
        "Con la regla de 1 cubeta de 17 litros por cada 16 láminas (tres manos), necesitas 30 ÷ 16 = 2 cubetas. Agrega una cubeta extra para esquinas, reparaciones y desperdicio, resultando en 3 cubetas. Si vas a aplicar textura, presupuesta 1 a 2 cubetas adicionales.",
    },
    {
      question: "¿Puedo usar compuesto de fraguado rápido para todo el trabajo?",
      answer:
        "No es recomendable. El compuesto de fraguado rápido (tipo Durabond) es excelente para la primera mano y rellenos profundos porque no se contrae, pero es extremadamente difícil de lijar una vez seco. Usa fraguado rápido solo para la capa de encintado y rellenos, y compuesto liviano de secado al aire para las manos de acabado.",
    },
    {
      question: "¿Cuántas manos de compuesto necesito para un acabado profesional?",
      answer:
        "El estándar profesional es tres manos: la primera mano de encintado (con cinta de papel o malla), la segunda mano más ancha para suavizar las transiciones, y la mano final de acabado que se lija para lograr una superficie perfectamente lisa. Cada mano sucesiva es más ancha y más delgada que la anterior.",
    },
    {
      question: "¿Qué tipo de cinta debo usar con el compuesto para juntas?",
      answer:
        "La cinta de papel es la preferida por profesionales porque proporciona la junta más fuerte y duradera cuando se aplica correctamente. La cinta de malla autoadhesiva (fibra de vidrio) es más fácil para principiantes pero puede fisurarse con el tiempo si no se usa con compuesto de fraguado rápido en la primera mano.",
    },
    {
      question: "¿Cómo evito que el compuesto se fisure al secar?",
      answer:
        "Las fisuras se producen por aplicar capas demasiado gruesas, secar demasiado rápido (ventilación excesiva o calor directo) o no dejar secar completamente entre manos. Aplica capas delgadas y uniformes, permite secado natural de 12 a 24 horas entre manos, y evita corrientes de aire directas sobre las juntas mientras secan.",
    },
  ],
};

// ─── HARDWARE ────────────────────────────────────────────────────────────────

export const framingNailCalculator: CalculatorSEOContent = {
  disclaimer: "También considera clavos adicionales para soleras, dinteles y revestimiento.",
  howToUse: [
    "Ingresa la cantidad total de montantes en tu proyecto.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "Los clavos de estructura son el fijador principal en la construcción con entramado de madera. Los clavos de 90 mm (3.5 pulgadas) tipo sinker con cabeza de oblea y recubrimiento vinílico son el estándar para clavado directo a través de soleras hacia montantes. Para clavadoras neumáticas (las más utilizadas en obra), los clavos vienen en formatos de tira (strip) o espiral (coil), en calibres de 80 mm a 90 mm. Una caja de 15 kg de clavos de 90 mm contiene aproximadamente 500 clavos. En Latinoamérica, los clavos para estructura se consiguen en ferreterías industriales y distribuidores de materiales de construcción. Las marcas más comunes incluyen Grip-Rite, Paslode, Senco y marcas locales como Truper (México). El costo por caja varía entre $200 y $500 MXN. Es fundamental usar el tipo y tamaño correcto de clavo según la normativa — las conexiones estructurales tienen requisitos específicos de diámetro, longitud y cantidad de clavos que afectan directamente la resistencia de la estructura.",
  installationTips: [
    "Clava a través de las soleras hacia los montantes (2 clavos por extremo).",
    "Clava a ángulo (toenailing) los montantes adicionales en esquinas y aberturas.",
    "Usa clavos de 75 mm para conexiones de montante a solera en ángulo.",
  ],
  commonMistakes: [
    "Clavar de menos — siempre sigue el patrón de clavado de la norma para conexiones estructurales.",
    "Usar clavos de techado para estructura — tipo de clavo incorrecto, vástago incorrecto, cabeza incorrecta.",
  ],
  faqs: [
    {
      question: "¿Qué tamaño de clavos para entramado de muros?",
      answer:
        "Clavos comunes de 90 mm para clavado directo a través de las soleras. Clavos de 75 mm o 63 mm para clavado en ángulo de montantes. La mayoría de las clavadoras neumáticas usan clavos de 80 mm a 90 mm en formato de tira o espiral.",
    },
    {
      question: "¿Cuántos clavos por montante?",
      answer:
        "Dos clavos de 90 mm en cada extremo (4 por montante para solera superior e inferior). Agrega clavos adicionales para las conexiones en ángulo en esquinas. Promedio de aproximadamente 6 clavos por montante en total.",
    },
    {
      question: "¿Cuántos kilogramos de clavos necesito para un proyecto de 50 montantes?",
      answer:
        "Con 6 clavos promedio por montante, necesitas 300 clavos para los montantes más clavos adicionales para soleras, dinteles y revestimiento. Una caja de 15 kg (~500 clavos de 90 mm) es suficiente para los montantes. Para un proyecto completo de muros, presupuesta 2 a 3 cajas de 15 kg.",
    },
    {
      question: "¿Clavos comunes o clavos sinker para estructura?",
      answer:
        "Los clavos sinker tienen un recubrimiento vinílico que reduce la fricción, facilitando el clavado con menos fuerza. Son los preferidos para uso con clavadoras neumáticas. Los clavos comunes (sin recubrimiento) tienen mayor resistencia al arrancamiento y son requeridos en algunas conexiones específicas de la norma. Verifica los requisitos de tu normativa local.",
    },
    {
      question: "¿Puedo usar tornillos en lugar de clavos para el entramado?",
      answer:
        "No para conexiones estructurales estándar. Los tornillos convencionales son más frágiles que los clavos y pueden fallar por corte bajo cargas laterales (viento, sismo). Las normas de construcción están basadas en clavos para las conexiones estructurales del entramado. Solo usa tornillos estructurales certificados (como Simpson SDS) donde estén específicamente aprobados.",
    },
    {
      question: "¿Necesito una clavadora neumática o puedo clavar a mano?",
      answer:
        "Puedes clavar a mano con un martillo de 570 g, pero una clavadora neumática aumenta la productividad enormemente — un profesional puede armar un muro en la mitad del tiempo. En Latinoamérica, las clavadoras neumáticas de marcas como DeWalt, Bostitch y Truper están disponibles para compra o alquiler en tiendas de herramientas y ferreterías industriales.",
    },
  ],
};

export const joistHangerCalculator: CalculatorSEOContent = {
  disclaimer: "Compra los conectores que coincidan exactamente con la sección de tu vigueta (38x184 mm, 38x235 mm, LVL, etc.).",
  howToUse: [
    "Ingresa la cantidad total de viguetas o cabios que necesitan conectores.",
    "Haz clic en Calcular Materiales.",
  ],
  materialInfo:
    "Los conectores de viguetas (también llamados estribos, soportes o zapatos de viguetas) son conectores metálicos estampados de acero galvanizado que proporcionan una conexión estructural entre los extremos de las viguetas y las vigas o dinteles donde se apoyan. Las marcas más reconocidas son Simpson Strong-Tie (modelos LUS, LU, HUS) y USP Structural Connectors. Cada modelo está diseñado para una sección específica de madera — un conector para 38x184 mm NO sirve para 38x235 mm. Los conectores vienen en acabado galvanizado estándar para uso interior, galvanizado Z-MAX para exposición moderada, y acero inoxidable para zonas costeras. En Latinoamérica, los conectores Simpson están disponibles en Chile, México, Costa Rica y Panamá a través de distribuidores especializados. También existen fabricantes locales que producen conectores equivalentes a menor costo. El precio unitario varía entre $20 y $80 MXN según el tamaño y acabado. Es fundamental clavar todos los orificios del conector con los clavos especificados — la capacidad de carga nominal asume que todos los orificios están clavados.",
  installationTips: [
    "Clava todos los orificios del conector — cada clavo importa para la capacidad de carga nominal.",
    "Usa clavos especiales para conectores (38 mm x 10d) — NO uses clavos comunes de 90 mm.",
    "Verifica que el conector esté especificado para la sección de tu vigueta.",
  ],
  commonMistakes: [
    "Clavar parcialmente los conectores — el clavado parcial reduce dramáticamente la capacidad de carga.",
    "Usar un conector del tamaño incorrecto para la vigueta.",
    "Usar clavos de vástago liso en lugar de los clavos especificados para conectores.",
  ],
  faqs: [
    {
      question: "¿Necesito conectores en todas las viguetas?",
      answer:
        "Los conectores de viguetas son obligatorios donde las viguetas se enmarcan contra una viga o dintel en vez de apoyarse directamente sobre una superficie de apoyo. Para viguetas que descansan sobre una solera, son opcionales pero recomendados.",
    },
    {
      question: "¿Qué clavos uso para los conectores de viguetas?",
      answer:
        "Usa clavos especiales de 38 mm x 10d para conectores (a menudo llamados clavos para conectores o LUL). No uses clavos comunes de 90 mm — son demasiado grandes para los orificios del conector.",
    },
    {
      question: "¿Puedo usar tornillos en lugar de clavos en los conectores de viguetas?",
      answer:
        "Solo si usas tornillos específicamente aprobados para conectores estructurales, como los Simpson SD (Structural Screw) o equivalentes. Los tornillos convencionales para madera NO están aprobados para conectores porque pueden fallar por corte. Usar tornillos no aprobados invalida la capacidad de carga del conector.",
    },
    {
      question: "¿Cómo elijo el conector correcto para mi vigueta?",
      answer:
        "Identifica la sección exacta de tu vigueta (38x184 mm, 38x235 mm, 38x286 mm, etc.) y busca el modelo de conector que corresponde a esa sección. Para viguetas LVL o doble T, existen conectores especiales. Consulta el catálogo de Simpson Strong-Tie o del fabricante que tengas disponible en tu zona.",
    },
    {
      question: "¿Los conectores de viguetas están disponibles en Latinoamérica?",
      answer:
        "Sí. Simpson Strong-Tie tiene distribución en Chile, México, Costa Rica y Panamá. En otros países de la región, existen fabricantes locales que producen conectores metálicos equivalentes. También puedes importarlos a través de distribuidores de materiales de construcción especializados o comprarlos en línea.",
    },
    {
      question: "¿Cuántos clavos lleva cada conector de viguetas?",
      answer:
        "Depende del modelo. Un conector tipo LUS para vigueta de 38x184 mm lleva típicamente 6 clavos (2 en la brida de montaje y 4 en las alas laterales). Un conector tipo LU para vigueta de 38x286 mm puede llevar hasta 10 clavos. Siempre clava TODOS los orificios — cada clavo que omitas reduce proporcionalmente la capacidad de carga del conector.",
    },
  ],
};

export const hurricaneTieCalculator: CalculatorSEOContent = {
  disclaimer: "Instala uno en cada cabio o cercha, en ambos lados del muro de apoyo.",
  howToUse: [
    "Ingresa la cantidad total de cabios o cerchas.",
    "Haz clic en Calcular Materiales — se necesita un amarre por cada extremo de cabio.",
  ],
  materialInfo:
    "Los amarres anti-huracán (también llamados clips de techo, conectores de levantamiento o amarres anti-viento) son conectores metálicos galvanizados que crean una conexión estructural entre los cabios o cerchas del techo y la solera superior del muro, resistiendo las fuerzas de levantamiento generadas por el viento. Los modelos más utilizados son los Simpson H2.5A (para resistencia estándar), H10A (servicio pesado) y los conectores de doble cola H1 para cerchas. En Latinoamérica, los amarres anti-huracán son especialmente importantes en las costas del Golfo de México, el Caribe, Centroamérica y las costas colombianas y venezolanas donde los huracanes y tormentas tropicales son frecuentes. La normativa de construcción en estas zonas requiere conexiones certificadas de ruta de carga continua desde la cimentación hasta el techo. Los amarres se venden individualmente o en cajas de 25 o 100 unidades, con costos entre $15 y $60 MXN por unidad según el modelo. En zonas costeras con alta salinidad, usa conectores galvanizados Z-MAX o de acero inoxidable para evitar la corrosión prematura.",
  installationTips: [
    "Clava todos los orificios especificados con los clavos adecuados de 10d o 16d.",
    "Usa conectores galvanizados o de acero inoxidable en zonas costeras.",
    "Instala en ambos lados de cada cabio para máxima resistencia al levantamiento.",
  ],
  commonMistakes: [
    "Clavar parcialmente los amarres — la capacidad nominal de levantamiento asume que todos los orificios están clavados.",
    "Instalar solo en un lado del cabio.",
    "Usar el tipo de conector incorrecto — diferentes secciones de cabio requieren diferentes amarres.",
  ],
  faqs: [
    {
      question: "¿Son obligatorios los amarres anti-huracán según la norma?",
      answer:
        "Sí, en zonas con velocidades de viento de 145 km/h o más (la mayor parte de las costas del Golfo de México y el Caribe). Las normas actuales requieren conexiones de ruta de carga continua en todas las áreas, haciendo que los amarres anti-huracán sean prácticamente universales.",
    },
    {
      question: "¿Cuál es la capacidad de levantamiento de un amarre anti-huracán?",
      answer:
        "Los amarres comunes como el Simpson H2.5A están clasificados para 245 kg de levantamiento. Los de servicio pesado como el H10A están clasificados para más de 605 kg. Elige según la carga de tu techo y la zona de viento de tu localidad.",
    },
    {
      question: "¿Cuántos amarres anti-huracán necesito para un techo con 20 cerchas?",
      answer:
        "Cada cercha necesita un amarre en cada extremo donde se apoya sobre un muro. Para cerchas que se apoyan en dos muros exteriores, necesitas 2 amarres por cercha, es decir 40 amarres para 20 cerchas. Si hay muros intermedios de apoyo, agrega amarres adicionales en esos puntos.",
    },
    {
      question: "¿Puedo instalar amarres anti-huracán después de construido el techo?",
      answer:
        "Sí, es posible instalar amarres retrospectivamente, y es una de las mejoras más efectivas para reforzar un techo existente contra huracanes. Se requiere acceso al ático para clavar los amarres entre los cabios/cerchas y la solera superior. Es una mejora muy común y recomendada en zonas costeras de México, el Caribe y Centroamérica.",
    },
    {
      question: "¿Qué tipo de amarre necesito en zona costera del Caribe?",
      answer:
        "En zonas costeras del Caribe con velocidades de viento de diseño superiores a 200 km/h, usa amarres de servicio pesado como el Simpson H10A con acabado Z-MAX o acero inoxidable. El acabado galvanizado estándar se corroe rápidamente en ambientes salinos. Consulta la normativa local de resistencia al viento para determinar la capacidad de levantamiento requerida.",
    },
    {
      question: "¿Los amarres anti-huracán reducen la prima de mi seguro?",
      answer:
        "En muchos países de Latinoamérica y el Caribe, las aseguradoras ofrecen descuentos significativos en las primas de seguro de vivienda cuando se demuestra que la estructura tiene conexiones anti-huracán certificadas. En algunos estados costeros de México, el descuento puede ser de hasta 30%. Consulta con tu aseguradora los requisitos específicos de documentación.",
    },
  ],
};

// ─── REGISTRY MAP ─────────────────────────────────────────────────────────────

export const registryES: Record<string, Record<string, CalculatorSEOContent>> = {
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
  },
};
