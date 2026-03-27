// Spanish (Latin America) — All categories and calculator metadata
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
    title: "Calculadoras de Cimentación",
    description:
      "Calcula materiales para trabajos de cimentación de concreto, incluyendo pernos de anclaje, sello de solera y placas de apoyo tratadas a presión.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Calculadora de Pernos de Anclaje",
        description:
          "¿Cuántos pernos de anclaje necesito? Calculadora gratis para tipo J y cuña con espaciado estándar de 1.80 m — incluye conteo y distribución.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Calculadora de Sello de Solera",
        description:
          "Calculadora de sello de solera: Estima rollos de junta de espuma por perímetro. Herramienta gratis para anchos de 9 cm y 14 cm con traslape.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Calculadora de Placa de Apoyo Tratada",
        description:
          "¿Cuánta madera tratada necesito para placas de apoyo? Calculadora instantánea para tablas de 5x10 cm y 5x15 cm — metros lineales y conteo.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-calculator",
        title: "Calculadora de Concreto",
        description:
          "¿Cuánto concreto necesito? Calculadora gratis para losas, zapatas y columnas — metros cúbicos y cantidad de bultos con factor de desperdicio.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-slab-calculator",
        title: "Calculadora de Losa de Concreto",
        description:
          "¿Cuánto concreto para una losa? Calculadora gratis para cochera, patio y banqueta — metros cúbicos y bultos para cualquier espesor.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-footing-calculator",
        title: "Calculadora de Zapata de Concreto",
        description:
          "Calculadora de zapatas: Estima metros cúbicos para zapatas corridas y aisladas. Herramienta gratis para cimentación — incluye desperdicio.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-column-calculator",
        title: "Calculadora de Columna de Concreto",
        description:
          "¿Cuánto concreto para columnas o pilares? Calculadora gratis para diámetros de 20, 25 y 30 cm — m³ por columna y total al instante.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "concrete-steps-calculator",
        title: "Calculadora de Escalones de Concreto",
        description:
          "Calculadora de escalones de concreto: ¿Cuántos metros cúbicos para escaleras? Herramienta gratis — ingresa ancho, huella y peralte.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "gravel-calculator",
        title: "Calculadora de Grava",
        description:
          "¿Cuánta grava necesito? Calculadora gratis para cualquier área — metros cúbicos, toneladas y estimación de costo con 10% de desperdicio.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "driveway-gravel-calculator",
        title: "Calculadora de Grava para Cochera",
        description:
          "Calculadora de grava para cochera/entrada: Estima toneladas y costo por tipo — piedra triturada, gravilla, base hidráulica o granito descompuesto.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "block-fill-calculator",
        title: "Calculadora de Relleno de Bloques",
        description:
          "Calculadora de relleno de bloques — ¿cuánto concreto para rellenar bloques de hormigón? Herramienta gratuita para bloques de 20, 25 y 30 cm. Metros cúbicos y sacos al instante.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "mortar-mix-calculator",
        title: "Calculadora de Mezcla de Mortero",
        description:
          "Calculadora de mezcla de mortero — herramienta gratuita para estimar sacos de mortero para bloque, ladrillo y piedra. Tipos N, S y M con opciones de espesor de junta.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
      {
        slug: "retaining-wall-calculator",
        title: "Calculadora de Muro de Contención",
        description:
          "Calculadora de muro de contención — herramienta gratis para muros de bloque, CMU y piedra. Cantidad de bloques, tapas, relleno de grava y drenaje al instante.",
        category: "Cimentación",
        categorySlug: "foundation",
      },
    ],
  },
  {
    slug: "floor-framing",
    title: "Calculadoras de Entramado de Piso",
    description:
      "Estima todos los materiales de entramado de piso, incluyendo vigas perimetrales, viguetas, puentes, adhesivo de subpiso y paneles OSB.",
    calculators: [
      {
        slug: "rim-joist-calculator",
        title: "Calculadora de Viga Perimetral",
        description:
          "Calculadora de viga perimetral: ¿Cuántas tablas para el contorno del piso? Herramienta gratis para 5x20 cm, 5x25 cm y 5x30 cm al instante.",
        category: "Entramado de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "floor-joist-calculator",
        title: "Calculadora de Viguetas de Piso",
        description:
          "Calculadora de viguetas de piso gratis — obtén cantidad, tamaño y espaciado por tramo. Para 40 cm y 60 cm entre centros al instante.",
        category: "Entramado de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "bridging-calculator",
        title: "Calculadora de Puentes (Arriostramientos)",
        description:
          "Calculadora de puentes: ¿Cuántas filas de arriostramiento necesito? Herramienta gratis según la luz de viguetas — bloques sólidos o cruzados.",
        category: "Entramado de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "subfloor-adhesive-calculator",
        title: "Calculadora de Adhesivo de Subpiso",
        description:
          "¿Cuántos tubos de adhesivo de subpiso necesito? Calculadora gratis por área de piso — cubre tubos de 828 ml y 300 ml con resultados al instante.",
        category: "Entramado de Piso",
        categorySlug: "floor-framing",
      },
      {
        slug: "osb-panel-calculator",
        title: "Calculadora de Paneles OSB",
        description:
          "¿Cuántos paneles OSB necesito para el subpiso? Calculadora gratis para láminas de 1.22 x 2.44 m — incluye factor de desperdicio automático.",
        category: "Entramado de Piso",
        categorySlug: "floor-framing",
      },
    ],
  },
  {
    slug: "wall-framing",
    title: "Calculadoras de Entramado de Muros",
    description:
      "Calcula toda la madera para entramado de muros, incluyendo soleras, montantes, dinteles y revestimiento para cualquier configuración de muro.",
    calculators: [
      {
        slug: "stud-calculator",
        title: "Calculadora de Montantes",
        description:
          "¿Cuántos montantes necesito? Calculadora gratis para espaciado de 40 cm y 60 cm entre centros — incluye extras para esquinas y aberturas.",
        category: "Entramado de Muros",
        categorySlug: "wall-framing",
      },
      {
        slug: "bottom-plate-calculator",
        title: "Calculadora de Solera Inferior",
        description:
          "Calculadora de solera inferior: Estima tablas de 5x10 cm o 5x15 cm por longitud de muro. Herramienta gratis con metros lineales y conteo.",
        category: "Entramado de Muros",
        categorySlug: "wall-framing",
      },
      {
        slug: "top-plate-calculator",
        title: "Calculadora de Solera Superior",
        description:
          "¿Cuánta madera para la doble solera superior? Calculadora gratis para muros de 5x10 y 5x15 cm — incluye traslape y conteo de tablas.",
        category: "Entramado de Muros",
        categorySlug: "wall-framing",
      },
      {
        slug: "header-calculator",
        title: "Calculadora de Dinteles",
        description:
          "Calculadora de dinteles: ¿Qué medida de dintel necesito? Herramienta gratis para aberturas de puertas y ventanas — 5x15, 5x20 y 5x25 cm.",
        category: "Entramado de Muros",
        categorySlug: "wall-framing",
      },
      {
        slug: "exterior-sheathing-calculator",
        title: "Calculadora de Revestimiento Estructural Exterior",
        description:
          "¿Cuántas láminas de revestimiento necesito? Calculadora gratis para OSB y contrachapado de 1.22 x 2.44 m — incluye factor de desperdicio.",
        category: "Entramado de Muros",
        categorySlug: "wall-framing",
      },
    ],
  },
  {
    slug: "roofing",
    title: "Calculadoras de Techado",
    description:
      "Estima todos los materiales de techado, desde cerchas y cabios hasta tejas y membrana impermeabilizante.",
    calculators: [
      {
        slug: "truss-calculator",
        title: "Calculadora de Cerchas de Techo",
        description:
          "¿Cuántas cerchas de techo necesito? Calculadora gratis para espaciado estándar de 60 cm — ingresa el largo del techo y obtén conteo y distribución.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "rafter-calculator",
        title: "Calculadora de Cabios",
        description:
          "Calculadora de cabios gratis — obtén largo, cantidad y espaciado para cualquier pendiente de techo. 40 y 60 cm entre centros al instante.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "ridge-board-calculator",
        title: "Calculadora de Tabla Cumbrera",
        description:
          "¿Cuántas tablas cumbreras necesito? Calculadora gratis para 5x20, 5x25 y 5x30 cm — calcula longitud total y número de piezas al instante.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-sheathing-calculator",
        title: "Calculadora de Revestimiento de Techo",
        description:
          "Calculadora de revestimiento de techo: ¿Cuántas láminas OSB de 1.22 x 2.44 m? Herramienta gratis que considera pendiente y desperdicio.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "shingle-calculator",
        title: "Calculadora de Tejas",
        description:
          "Calculadora de tejas gratis — ¿cuántos paquetes necesito? Estima tejas de 3 lengüetas y arquitectónicas. Convierte m² a paquetes al instante.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "underlayment-calculator",
        title: "Calculadora de Membrana Impermeabilizante",
        description:
          "Calculadora de membrana: ¿Cuántos rollos de fieltro o sintético necesito? Herramienta gratis para fieltro 15 lb, 30 lb y membrana sintética.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "drip-edge-calculator",
        title: "Calculadora de Gotero de Techo",
        description:
          "¿Cuántos metros de gotero necesito? Calculadora gratis de botaguas por perímetro — calcula piezas para tiras estándar de 3 m al instante.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-pitch-calculator",
        title: "Calculadora de Pendiente de Techo",
        description:
          "¿Qué pendiente tiene mi techo? Calculadora gratis — ingresa elevación y distancia para obtener ángulo, porcentaje y multiplicador de área.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-area-calculator",
        title: "Calculadora de Área de Techo",
        description:
          "Calculadora de área de techo gratis — convierte dimensiones planas al área real de cobertura. Incluye multiplicador de pendiente y m² totales.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-slope-calculator",
        title: "Calculadora de Inclinación de Techo",
        description:
          "Calculadora de inclinación de techo gratis — mide elevación y recorrido para obtener pendiente, ángulo y material de cobertura recomendado.",
        category: "Techado",
        categorySlug: "roofing",
      },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Calculadoras de Revestimiento Exterior",
    description:
      "Calcula membrana hidrófuga, revestimiento, tapajuntas y cinta de sellado para la envolvente exterior de tu vivienda.",
    calculators: [
      {
        slug: "housewrap-calculator",
        title: "Calculadora de Membrana Hidrófuga",
        description:
          "¿Cuántos rollos de membrana hidrófuga necesito? Calculadora gratis tipo Tyvek por m² de muro — cubre anchos de 1 m, 1.5 m y 2.7 m.",
        category: "Revestimiento Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "vinyl-siding-calculator",
        title: "Calculadora de Revestimiento Vinílico",
        description:
          "Calculadora de revestimiento vinílico gratis — ingresa m² de muro y obtén paneles exactos. Descuenta puertas, ventanas y 10% de desperdicio.",
        category: "Revestimiento Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "hardie-siding-calculator",
        title: "Calculadora de Revestimiento de Fibrocemento",
        description:
          "¿Cuántas tablas de fibrocemento necesito? Calculadora gratis tipo HardiePlank para exposiciones de 21 cm y 16 cm — incluye desperdicio.",
        category: "Revestimiento Exterior",
        categorySlug: "exterior-shell",
      },
      {
        slug: "window-flashing-calculator",
        title: "Calculadora de Tapajuntas de Ventana",
        description:
          "Calculadora de tapajuntas: Estima metros lineales de cinta autoadhesiva para ventanas. Herramienta gratis para anchos de 10 cm, 15 cm y 23 cm.",
        category: "Revestimiento Exterior",
        categorySlug: "exterior-shell",
      },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Calculadoras de Aislamiento y Paneles de Yeso",
    description:
      "Estima paneles aislantes, barrera de vapor, láminas de yeso, tornillos y compuesto para juntas para trabajos de terminación interior.",
    calculators: [
      {
        slug: "cavity-insulation-calculator",
        title: "Calculadora de Aislamiento de Cavidad",
        description:
          "¿Cuántos paneles aislantes necesito? Calculadora gratis para R-13, R-15, R-19 y R-21 — cubre cavidades de muros de 5x10 y 5x15 cm.",
        category: "Aislamiento y Paneles de Yeso",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-calculator",
        title: "Calculadora de Láminas de Yeso",
        description:
          "¿Cuántas láminas de yeso necesito? Calculadora gratis para 12.7 mm y 15.9 mm — estima paneles de 1.22 x 2.44 m para muros y cielos.",
        category: "Aislamiento y Paneles de Yeso",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-screw-calculator",
        title: "Calculadora de Tornillos para Yeso",
        description:
          "Calculadora de tornillos: ¿Cuántos tornillos por lámina de yeso? Herramienta gratis para tornillos de 32 mm y 41 mm — total y cajas necesarias.",
        category: "Aislamiento y Paneles de Yeso",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "joint-compound-calculator",
        title: "Calculadora de Compuesto para Juntas",
        description:
          "¿Cuánta masilla para juntas necesito? Calculadora gratis para acabado de yeso — estima cubetas para encintado, base y acabado final.",
        category: "Aislamiento y Paneles de Yeso",
        categorySlug: "insulation-drywall",
      },
    ],
  },
  {
    slug: "hardware",
    title: "Calculadoras de Ferretería",
    description:
      "Calcula clavos para estructura, conectores de viguetas, amarres anti-huracán y demás ferretería estructural.",
    calculators: [
      {
        slug: "framing-nail-calculator",
        title: "Calculadora de Clavos para Estructura",
        description:
          "Calculadora de clavos: ¿Cuántos kilos de clavos necesito? Herramienta gratis para clavos de 3.5\" y 2.5\" — calcula por cantidad de montantes.",
        category: "Ferretería",
        categorySlug: "hardware",
      },
      {
        slug: "joist-hanger-calculator",
        title: "Calculadora de Conectores de Viguetas",
        description:
          "¿Cuántos conectores de viguetas necesito? Calculadora gratis para series LUS, LU y HU — cubre entramado de piso y cielo al instante.",
        category: "Ferretería",
        categorySlug: "hardware",
      },
      {
        slug: "hurricane-tie-calculator",
        title: "Calculadora de Amarres Anti-Huracán",
        description:
          "Calculadora de amarres anti-huracán: Estima conectores cabio-muro para resistencia al viento. Herramienta gratis para clips H2.5A y H10.",
        category: "Ferretería",
        categorySlug: "hardware",
      },
      {
        slug: "lumber-cost-calculator",
        title: "Calculadora de Costo de Madera",
        description:
          "¿Cuánto cuesta la madera? Calculadora gratis para tablas de 2x4, 2x6, 2x8 y más — estima costo total por cantidad y precios actuales.",
        category: "Ferretería",
        categorySlug: "hardware",
      },
      {
        slug: "board-feet-calculator",
        title: "Calculadora de Pies Tabla",
        description:
          "Calculadora de pies tabla gratis — convierte dimensiones de madera a pies tabla. Para precios de madera dura con cálculo instantáneo de PT y costo.",
        category: "Ferretería",
        categorySlug: "hardware",
      },
      {
        slug: "plywood-calculator",
        title: "Calculadora de Triplay",
        description:
          "Calculadora de triplay gratis — ¿cuántas hojas necesito? Para paneles de 6 mm a 18 mm. Da cantidad de hojas y estimado de costo al instante.",
        category: "Ferretería",
        categorySlug: "hardware",
      },
    ],
  },
  {
    slug: "finishing",
    title: "Calculadoras de Acabados",
    description:
      "Calcula pintura, sellador, tinte y materiales de acabado para superficies interiores y exteriores.",
    calculators: [
      {
        slug: "paint-coverage-calculator",
        title: "Calculadora de Rendimiento de Pintura",
        description:
          "Calculadora de rendimiento de pintura gratis — ¿cuántos litros necesito? Para muros y techos, considera manos y da litros y cubetas.",
        category: "Acabados",
        categorySlug: "finishing",
      },
      {
        slug: "paint-cost-calculator",
        title: "Calculadora de Costo de Pintura",
        description:
          "Calculadora de costo de pintura gratis — estima el presupuesto total por calidad. De económica a premium, incluye insumos y mano de obra.",
        category: "Acabados",
        categorySlug: "finishing",
      },
      {
        slug: "primer-calculator",
        title: "Calculadora de Sellador (Primer)",
        description:
          "¿Cuánto sellador necesito? Calculadora gratis para tablaroca nueva, madera y repintado — ajusta rendimiento por tipo de superficie.",
        category: "Acabados",
        categorySlug: "finishing",
      },
      {
        slug: "epoxy-calculator",
        title: "Calculadora de Epóxico",
        description:
          "Calculadora de epóxico — ¿cuánto epóxico para tu piso de cochera? Herramienta gratis para cualquier área. Galones, kits y costo para 1 o 2 capas.",
        category: "Acabados",
        categorySlug: "finishing",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Calculadoras para Exteriores",
    description:
      "Calcula materiales para terrazas de madera, patios, cercas y estructuras exteriores.",
    calculators: [
      {
        slug: "deck-board-calculator",
        title: "Calculadora de Tablas para Deck",
        description:
          "¿Cuántas tablas necesito para mi deck? Calculadora gratis para madera tratada, cedro y composite — cantidad de tablas, metros lineales y desperdicio.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-footing-calculator",
        title: "Calculadora de Cimentación para Deck",
        description:
          "Calculadora de cimentación para deck: ¿Cuántos pilares de concreto necesito? Herramienta gratis — cantidad de zapatas, postes y trabes.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-railing-calculator",
        title: "Calculadora de Barandal para Deck",
        description:
          "¿Cuántos postes y balaustres necesito? Calculadora gratis de barandal — da cantidad de postes, balaustres y metros lineales de riel.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "deck-stair-calculator",
        title: "Calculadora de Escaleras para Deck",
        description:
          "Calculadora de escaleras para deck: ¿Cuántos escalones y largueros? Herramienta gratis — ingresa la altura para obtener escalones, largueros y tablas.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "post-hole-calculator",
        title: "Calculadora de Hoyos para Postes",
        description:
          "Calculadora de hoyos para postes — ¿cuánto concreto para postes de cerca? Herramienta gratis para cualquier tamaño de hoyo. Cantidad exacta de sacos de 25 kg y 50 kg.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "pond-calculator",
        title: "Calculadora de Estanque",
        description:
          "Calculadora de estanque — herramienta gratis para volumen, tamaño de lona y capacidad de bomba. Ingresa dimensiones para estanques rectangulares, ovalados o tipo riñón.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-calculator",
        title: "Calculadora de Cercas",
        description:
          "Calculadora de cercas — ¿cuántos postes, travesaños y tablas necesito? Herramienta gratis para cercas de madera. Lista completa de materiales al instante.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-post-calculator",
        title: "Calculadora de Postes para Cerca",
        description:
          "Calculadora de postes para cerca — ¿cuántos postes y sacos de concreto? Herramienta gratis que calcula postes, concreto y grava para cualquier longitud de cerca.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "fence-panel-calculator",
        title: "Calculadora de Paneles para Cerca",
        description:
          "Calculadora de paneles para cerca — ¿cuántos paneles prefabricados? Herramienta gratis para paneles de 1.8 m y 2.4 m. Cantidad de paneles, postes y tapas.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
      {
        slug: "picket-fence-calculator",
        title: "Calculadora de Cerca de Estacas",
        description:
          "Calculadora de cerca de estacas — ¿cuántas estacas con espaciado personalizado? Herramienta gratis para cualquier ancho y separación. Estacas, travesaños, postes y pies tabla.",
        category: "Exteriores",
        categorySlug: "outdoor",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Calculadoras de Pisos",
    description:
      "Calcula materiales para proyectos de pisos incluyendo madera, alfombra, baldosas y laminado con factor de desperdicio y estimación de costos.",
    calculators: [
      { slug: "flooring-calculator", title: "Calculadora de Pisos", description: "Calculadora de pisos — herramienta gratuita para metros cuadrados. Cajas, desperdicio y lista de materiales para madera, vinilo y piso de ingeniería.", category: "Pisos", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Calculadora de Alfombra", description: "Calculadora de alfombra — herramienta gratis para metros cuadrados, metros lineales y base. Para rollos de 3,66 m y 4,57 m con planificación de costuras.", category: "Pisos", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Calculadora de Baldosas", description: "Calculadora de baldosas — herramienta gratis para pisos de cerámica, porcelanato y piedra natural. Cantidad de baldosas, cajas, lechada y pegamento.", category: "Pisos", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Calculadora de Laminado", description: "Calculadora de piso laminado — estimador gratis de tablones y cajas con subsuelo. Ingresa dimensiones del cuarto para lista de materiales instantánea.", category: "Pisos", categorySlug: "flooring" },
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
