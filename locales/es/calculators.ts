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
          "¿Cuántas viguetas de piso necesito? Calculadora gratis para espaciado de 40 cm y 60 cm entre centros — calcula por ancho de habitación.",
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
          "¿Cuántas cerchas necesito para mi techo? Calculadora gratis para espaciado estándar de 60 cm entre centros — ingresa el largo y obtén el total.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "rafter-calculator",
        title: "Calculadora de Cabios",
        description:
          "Calculadora de cabios: Estima cantidad por largo de techo y espaciado. Herramienta gratis para 40 cm y 60 cm — techos a dos aguas o cuatro.",
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
          "¿Cuántos paquetes de tejas necesito? Calculadora gratis para tejas de 3 lengüetas y arquitectónicas — convierte m² a paquetes al instante.",
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
          "Calculadora de área de techo: Convierte dimensiones planas al área real del techo. Herramienta gratis — considera multiplicador de pendiente y da cuadros de techado.",
        category: "Techado",
        categorySlug: "roofing",
      },
      {
        slug: "roof-slope-calculator",
        title: "Calculadora de Inclinación de Techo",
        description:
          "¿Qué tan empinado es mi techo? Calculadora gratis de inclinación — mide elevación y recorrido para obtener relación de pendiente, ángulo y material recomendado.",
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
          "Calculadora de revestimiento vinílico: Estima paneles por m² de muro. Herramienta gratis que descuenta puertas, ventanas y agrega desperdicio.",
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
