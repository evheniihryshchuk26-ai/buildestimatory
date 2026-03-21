import type { CategoryMeta } from "@/content/calculators";

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Foundation Calculators",
    description:
      "Calculate materials for concrete foundation work including anchor bolts, sill seal, and pressure treated plates.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Anchor Bolt Calculator",
        description:
          "How many anchor bolts do I need? Free calculator for J-bolt & wedge types at standard 6 ft spacing — includes total count and layout tips.",
        category: "Foundation",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Sill Seal Calculator",
        description:
          "Sill seal calculator: Estimate foam gasket rolls by foundation perimeter. Free tool for 3.5\" & 5.5\" widths — prevents air infiltration.",
        category: "Foundation",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Pressure Treated Sill Plate Calculator",
        description:
          "How much pressure treated lumber for sill plates? Instant calculator for 2x4 & 2x6 PT boards — gives linear feet and board count.",
        category: "Foundation",
        categorySlug: "foundation",
      },
    ],
  },
  {
    slug: "floor-framing",
    title: "Floor Framing Calculators",
    description:
      "Estimate all floor framing materials including rim joists, floor joists, bridging, subfloor adhesive, and OSB panels.",
    calculators: [
      { slug: "rim-joist-calculator", title: "Rim Joist Calculator", description: "Rim joist calculator: How many boards for your floor perimeter? Free tool for 2x8, 2x10 & 2x12 — includes board count and linear feet.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Floor Joist Calculator", description: "Floor joist calculator: Estimate joists by span and spacing. Free sizing tool for 16\" or 24\" on-center — includes total board count.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Bridging Calculator", description: "How many rows of bridging do I need? Free calculator for wood cross-bridging & solid blocking by joist span — instant results.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Subfloor Adhesive Calculator", description: "Subfloor adhesive calculator: How many tubes of construction adhesive? Free estimator based on floor area — covers 28 oz & 10 oz tubes.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "OSB Panel Calculator", description: "How many OSB sheets do I need? Free calculator for 4x8 subfloor panels — accounts for waste and gives exact sheet count instantly.", category: "Floor Framing", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Wall Framing Calculators",
    description:
      "Calculate all wall framing lumber including plates, studs, headers, and sheathing for any wall configuration.",
    calculators: [
      { slug: "stud-calculator", title: "Stud Calculator", description: "How many studs do I need? Free wall stud calculator for 16\" & 24\" OC spacing — includes extras for corners, doors, and window openings.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Bottom Plate Calculator", description: "Bottom plate calculator: Estimate 2x4 or 2x6 sole plates by wall length. Free tool that gives board count and total linear feet needed.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Top Plate Calculator", description: "How much lumber for double top plates? Free calculator for 2x4 & 2x6 walls — gives exact board count with overlap stagger included.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Header Calculator", description: "Header calculator: What size header for my opening? Free tool for door & window spans — covers 2x6, 2x8, 2x10 & 2x12 headers.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Exterior Sheathing Calculator", description: "How many sheets of sheathing for exterior walls? Free calculator for 4x8 OSB & plywood panels — includes waste factor estimates.", category: "Wall Framing", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing Calculators",
    description:
      "Estimate all roofing materials from trusses and rafters to shingles and underlayment.",
    calculators: [
      { slug: "truss-calculator", title: "Roof Truss Calculator", description: "How many roof trusses do I need? Free calculator for 24\" OC standard spacing — enter roof length for instant truss count and layout.", category: "Roofing", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Rafter Calculator", description: "Rafter calculator: Estimate rafter count by roof length & spacing. Free tool for 16\" and 24\" OC — works for gable and hip roofs.", category: "Roofing", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Ridge Board Calculator", description: "Ridge board calculator: How many boards for my roof peak? Free tool for 2x8, 2x10 & 2x12 ridge boards — gives length and count.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Roof Sheathing Calculator", description: "How many OSB sheets to sheathe my roof? Free roof decking calculator for 4x8 panels — factors in roof pitch and waste percentage.", category: "Roofing", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Shingle Calculator", description: "Shingle calculator: How many bundles do I need? Free estimator for 3-tab & architectural shingles — converts square footage to bundles.", category: "Roofing", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Roofing Underlayment Calculator", description: "How many rolls of roofing underlayment? Free calculator for 15 lb felt, 30 lb felt & synthetic — accounts for overlap and waste.", category: "Roofing", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Drip Edge Calculator", description: "Drip edge calculator: Estimate linear feet of flashing for your roof. Free tool — gives piece count for standard 10 ft drip edge strips.", category: "Roofing", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Exterior Shell Calculators",
    description:
      "Calculate housewrap, siding, flashing, and seam tape for your home's exterior envelope.",
    calculators: [
      { slug: "housewrap-calculator", title: "Housewrap Calculator", description: "How many rolls of housewrap do I need? Free Tyvek calculator by wall area — covers 3 ft, 5 ft & 9 ft roll widths with overlap.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Vinyl Siding Calculator", description: "Vinyl siding calculator: Estimate panels by wall square footage. Free tool that accounts for doors, windows & 10% waste factor.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Hardie Plank Siding Calculator", description: "How many HardiePlank boards do I need? Free fiber cement siding calculator — covers 8.25\" & 6.25\" exposure with waste included.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Window Flashing Calculator", description: "Window flashing tape calculator: Estimate linear feet for all openings. Free tool for 4\", 6\" & 9\" wide self-adhesive flashing.", category: "Exterior Shell", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Insulation & Drywall Calculators",
    description:
      "Estimate insulation batts, vapor barriers, drywall sheets, screws, and joint compound for interior finish work.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Cavity Insulation Calculator", description: "How many insulation batts do I need? Free calculator for R-13, R-15, R-19 & R-21 — covers 2x4 and 2x6 wall cavities instantly.", category: "Insulation & Drywall", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Drywall Sheet Calculator", description: "How much drywall do I need? Free calculator for 1/2\" & 5/8\" sheets — estimates 4x8 and 4x12 panels for walls and ceilings.", category: "Insulation & Drywall", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Drywall Screw Calculator", description: "Drywall screw calculator: How many screws per sheet? Free estimator for 1-1/4\" & 1-5/8\" screws — gives total count and boxes needed.", category: "Insulation & Drywall", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Joint Compound Calculator", description: "How much joint compound do I need? Free mud calculator for drywall finishing — estimates buckets for taping, bedding & skim coats.", category: "Insulation & Drywall", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Hardware Calculators",
    description:
      "Calculate framing nails, sheathing nails, joist hangers, hurricane ties, and other structural hardware.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Framing Nail Calculator", description: "Framing nail calculator: How many pounds of nails for my project? Free tool for 16d & 8d common nails — based on stud count.", category: "Hardware", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Joist Hanger Calculator", description: "How many joist hangers do I need? Free calculator for LUS, LU & HU series connectors — covers floor and ceiling joist framing.", category: "Hardware", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Hurricane Tie Calculator", description: "Hurricane tie calculator: Estimate rafter-to-wall connectors for wind resistance. Free tool for H2.5A & H10 Simpson Strong-Tie clips.", category: "Hardware", categorySlug: "hardware" },
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
