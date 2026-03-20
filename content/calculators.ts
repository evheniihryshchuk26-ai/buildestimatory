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
    title: "Foundation Calculators",
    description:
      "Calculate materials for concrete foundation work including anchor bolts, sill seal, and pressure treated plates.",
    calculators: [
      {
        slug: "anchor-bolt-calculator",
        title: "Anchor Bolt Calculator",
        description:
          "Calculate how many anchor bolts you need for your foundation perimeter based on standard 6 ft spacing.",
        category: "Foundation",
        categorySlug: "foundation",
      },
      {
        slug: "sill-seal-calculator",
        title: "Sill Seal Calculator",
        description:
          "Calculate rolls of sill seal gasket needed for your foundation perimeter to prevent air infiltration.",
        category: "Foundation",
        categorySlug: "foundation",
      },
      {
        slug: "sill-plate-calculator",
        title: "Pressure Treated Sill Plate Calculator",
        description:
          "Calculate linear feet and board count of pressure treated sill plates needed for your foundation.",
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
      {
        slug: "rim-joist-calculator",
        title: "Rim Joist Calculator",
        description:
          "Calculate the number of rim joist boards needed for your floor framing perimeter.",
        category: "Floor Framing",
        categorySlug: "floor-framing",
      },
      {
        slug: "floor-joist-calculator",
        title: "Floor Joist Calculator",
        description:
          "Calculate how many floor joists you need based on room width and 16\" or 24\" on-center spacing.",
        category: "Floor Framing",
        categorySlug: "floor-framing",
      },
      {
        slug: "bridging-calculator",
        title: "Bridging Calculator",
        description:
          "Calculate the number of bridging rows required for your floor joist span.",
        category: "Floor Framing",
        categorySlug: "floor-framing",
      },
      {
        slug: "subfloor-adhesive-calculator",
        title: "Subfloor Adhesive Calculator",
        description:
          "Calculate the number of adhesive tubes needed to glue down your subfloor panels.",
        category: "Floor Framing",
        categorySlug: "floor-framing",
      },
      {
        slug: "osb-panel-calculator",
        title: "OSB Panel Calculator",
        description:
          "Calculate how many 4x8 OSB subfloor panels you need for your floor area.",
        category: "Floor Framing",
        categorySlug: "floor-framing",
      },
    ],
  },
  {
    slug: "wall-framing",
    title: "Wall Framing Calculators",
    description:
      "Calculate all wall framing lumber including plates, studs, headers, and sheathing for any wall configuration.",
    calculators: [
      {
        slug: "stud-calculator",
        title: "Stud Calculator",
        description:
          "Calculate the exact number of wall studs needed including extras for corners and door/window openings.",
        category: "Wall Framing",
        categorySlug: "wall-framing",
      },
      {
        slug: "bottom-plate-calculator",
        title: "Bottom Plate Calculator",
        description:
          "Calculate the number of bottom plate boards needed for your wall framing project.",
        category: "Wall Framing",
        categorySlug: "wall-framing",
      },
      {
        slug: "top-plate-calculator",
        title: "Top Plate Calculator",
        description:
          "Calculate the number of double top plate boards needed for your wall framing.",
        category: "Wall Framing",
        categorySlug: "wall-framing",
      },
      {
        slug: "header-calculator",
        title: "Header Calculator",
        description:
          "Calculate the correct header length for door and window openings in your wall framing.",
        category: "Wall Framing",
        categorySlug: "wall-framing",
      },
      {
        slug: "exterior-sheathing-calculator",
        title: "Exterior Sheathing Calculator",
        description:
          "Calculate the number of 4x8 OSB or plywood sheathing sheets needed for your exterior walls.",
        category: "Wall Framing",
        categorySlug: "wall-framing",
      },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing Calculators",
    description:
      "Estimate all roofing materials from trusses and rafters to shingles and underlayment.",
    calculators: [
      {
        slug: "truss-calculator",
        title: "Roof Truss Calculator",
        description:
          "Calculate the number of roof trusses needed based on roof length and on-center spacing.",
        category: "Roofing",
        categorySlug: "roofing",
      },
      {
        slug: "rafter-calculator",
        title: "Rafter Calculator",
        description:
          "Calculate the number of rafters needed for your roof based on length and spacing.",
        category: "Roofing",
        categorySlug: "roofing",
      },
      {
        slug: "ridge-board-calculator",
        title: "Ridge Board Calculator",
        description:
          "Calculate the number and length of ridge boards needed for your roof peak.",
        category: "Roofing",
        categorySlug: "roofing",
      },
      {
        slug: "roof-sheathing-calculator",
        title: "Roof Sheathing Calculator",
        description:
          "Calculate how many 4x8 OSB sheets you need to sheathe your roof deck.",
        category: "Roofing",
        categorySlug: "roofing",
      },
      {
        slug: "shingle-calculator",
        title: "Shingle Calculator",
        description:
          "Calculate the number of shingle bundles needed to cover your roof area.",
        category: "Roofing",
        categorySlug: "roofing",
      },
      {
        slug: "underlayment-calculator",
        title: "Roofing Underlayment Calculator",
        description:
          "Calculate how many rolls of roofing felt or synthetic underlayment you need.",
        category: "Roofing",
        categorySlug: "roofing",
      },
      {
        slug: "drip-edge-calculator",
        title: "Drip Edge Calculator",
        description:
          "Calculate the linear feet and pieces of drip edge flashing needed for your roof perimeter.",
        category: "Roofing",
        categorySlug: "roofing",
      },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Exterior Shell Calculators",
    description:
      "Calculate housewrap, siding, flashing, and seam tape for your home's exterior envelope.",
    calculators: [
      {
        slug: "housewrap-calculator",
        title: "Housewrap Calculator",
        description:
          "Calculate rolls of Tyvek or housewrap needed for your exterior wall area.",
        category: "Exterior Shell",
        categorySlug: "exterior-shell",
      },
      {
        slug: "vinyl-siding-calculator",
        title: "Vinyl Siding Calculator",
        description:
          "Calculate the number of vinyl siding panels needed to cover your exterior walls.",
        category: "Exterior Shell",
        categorySlug: "exterior-shell",
      },
      {
        slug: "hardie-siding-calculator",
        title: "Hardie Plank Siding Calculator",
        description:
          "Calculate the number of HardiePlank fiber cement boards needed for your exterior walls.",
        category: "Exterior Shell",
        categorySlug: "exterior-shell",
      },
      {
        slug: "window-flashing-calculator",
        title: "Window Flashing Calculator",
        description:
          "Calculate total linear feet of window flashing tape needed for all your window openings.",
        category: "Exterior Shell",
        categorySlug: "exterior-shell",
      },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Insulation & Drywall Calculators",
    description:
      "Estimate insulation batts, vapor barriers, drywall sheets, screws, and joint compound for interior finish work.",
    calculators: [
      {
        slug: "cavity-insulation-calculator",
        title: "Cavity Insulation Calculator",
        description:
          "Calculate the number of insulation batts needed for your wall or ceiling cavities.",
        category: "Insulation & Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-calculator",
        title: "Drywall Sheet Calculator",
        description:
          "Calculate how many sheets of 4x8 drywall you need for walls and ceilings.",
        category: "Insulation & Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "drywall-screw-calculator",
        title: "Drywall Screw Calculator",
        description:
          "Calculate the number of drywall screws and boxes needed for your drywall project.",
        category: "Insulation & Drywall",
        categorySlug: "insulation-drywall",
      },
      {
        slug: "joint-compound-calculator",
        title: "Joint Compound Calculator",
        description:
          "Calculate how many buckets of joint compound (mud) you need for your drywall finishing.",
        category: "Insulation & Drywall",
        categorySlug: "insulation-drywall",
      },
    ],
  },
  {
    slug: "hardware",
    title: "Hardware Calculators",
    description:
      "Calculate framing nails, sheathing nails, joist hangers, hurricane ties, and other structural hardware.",
    calculators: [
      {
        slug: "framing-nail-calculator",
        title: "Framing Nail Calculator",
        description:
          "Calculate how many framing nails and pounds you need based on your stud count.",
        category: "Hardware",
        categorySlug: "hardware",
      },
      {
        slug: "joist-hanger-calculator",
        title: "Joist Hanger Calculator",
        description:
          "Calculate the exact number of joist hangers needed for your floor or roof framing.",
        category: "Hardware",
        categorySlug: "hardware",
      },
      {
        slug: "hurricane-tie-calculator",
        title: "Hurricane Tie Calculator",
        description:
          "Calculate the number of hurricane ties or rafter ties needed for your roof framing.",
        category: "Hardware",
        categorySlug: "hardware",
      },
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
