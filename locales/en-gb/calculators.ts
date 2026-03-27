import type { CategoryMeta } from "@/content/calculators";

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Foundation Calculators",
    description:
      "Calculate materials for concrete foundation work including anchor bolts, sill seal, and pressure treated plates.",
    calculators: [
      { slug: "anchor-bolt-calculator", title: "Anchor Bolt Calculator", description: "How many anchor bolts do I need? Free calculator for J-bolt & wedge types at standard 1.8 m spacing \u2014 includes total count and layout tips.", category: "Foundation", categorySlug: "foundation" },
      { slug: "sill-seal-calculator", title: "Sill Seal Calculator", description: "Sill seal calculator: Estimate foam gasket rolls by foundation perimeter. Free tool for 90 mm & 140 mm widths \u2014 prevents air infiltration.", category: "Foundation", categorySlug: "foundation" },
      { slug: "sill-plate-calculator", title: "Pressure Treated Sill Plate Calculator", description: "How much pressure treated timber for sill plates? Instant calculator for 100\u00d750 mm & 150\u00d750 mm PT boards \u2014 gives linear metres and board count.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-calculator", title: "Concrete Calculator", description: "How much concrete do I need? Free calculator for slabs, footings & columns \u2014 gives cubic metres and bag counts with waste factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-slab-calculator", title: "Concrete Slab Calculator", description: "How much concrete for a slab? Free calculator for garage, patio & driveway slabs \u2014 gives cubic metres and bag count for any thickness.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-footing-calculator", title: "Concrete Footing Calculator", description: "Concrete footing calculator: Estimate cubic metres for continuous & spread footings. Free tool for foundation walls \u2014 includes waste factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-column-calculator", title: "Concrete Column Calculator", description: "How much concrete for column piers? Free column calculator for 200 mm, 250 mm & 300 mm diameter piers \u2014 gives cubic metres per column and total.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-steps-calculator", title: "Concrete Steps Calculator", description: "Concrete steps calculator: How many cubic metres for stairs? Free tool \u2014 enter width, rise, run & step count for instant estimate.", category: "Foundation", categorySlug: "foundation" },
      { slug: "gravel-calculator", title: "Gravel Calculator", description: "How much gravel do I need? Free calculator for any area \u2014 cubic metres, tonnes, and cost estimate with 10% wastage factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "driveway-gravel-calculator", title: "Driveway Gravel Calculator", description: "Driveway gravel calculator: Estimate tonnes and cost by type \u2014 crushed stone, pea gravel, MOT Type 1, or decomposed granite with delivery.", category: "Foundation", categorySlug: "foundation" },
      { slug: "block-fill-calculator", title: "Block Fill Calculator", description: "Block fill calculator \u2014 how much concrete to fill concrete blocks? Free tool for 100 mm, 140 mm & 215 mm blocks. Get cubic metres and bag count instantly.", category: "Foundation", categorySlug: "foundation" },
      { slug: "mortar-mix-calculator", title: "Mortar Mix Calculator", description: "Mortar mix calculator \u2014 free tool to estimate bags of mortar for blockwork, brickwork & stone. Covers designations M2, M4 & M6 with joint thickness options.", category: "Foundation", categorySlug: "foundation" },
      { slug: "retaining-wall-calculator", title: "Retaining Wall Calculator", description: "Retaining wall calculator \u2014 free tool for block, masonry & stone walls. Get block count, coping stones, gravel backfill & drainage estimates instantly.", category: "Foundation", categorySlug: "foundation" },
    ],
  },
  {
    slug: "floor-framing",
    title: "Floor Framing Calculators",
    description:
      "Estimate all floor framing materials including rim joists, floor joists, bridging, subfloor adhesive, and OSB panels.",
    calculators: [
      { slug: "rim-joist-calculator", title: "Rim Joist Calculator", description: "Rim joist calculator: How many boards for your floor perimeter? Free tool for common timber sizes \u2014 includes board count and linear metres.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Floor Joist Calculator", description: "Free floor joist calculator \u2014 get joist count by span & spacing. Covers 400 mm and 600 mm centres with sizing charts and board totals.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Bridging Calculator", description: "How many rows of bridging do I need? Free calculator for timber cross-bridging & solid blocking by joist span \u2014 instant results.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Subfloor Adhesive Calculator", description: "Subfloor adhesive calculator: How many tubes of construction adhesive? Free estimator based on floor area \u2014 covers standard cartridge sizes.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "OSB Panel Calculator UK — Sheets & Cost 2026", description: "How many OSB sheets do I need? Free UK calculator for 1200\u00d72400 mm OSB/3 floor panels \u2014 instant sheet count, waste allowance, and 2026 prices.", category: "Floor Framing", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Wall Framing Calculators",
    description:
      "Calculate all wall framing timber including plates, studs, headers, and sheathing for any wall configuration.",
    calculators: [
      { slug: "stud-calculator", title: "Stud Calculator", description: "How many studs do I need? Free wall stud calculator for 400 mm & 600 mm centres \u2014 includes extras for corners, doors, and window openings.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Bottom Plate Calculator", description: "Bottom plate calculator: Estimate sole plates by wall length. Free tool that gives board count and total linear metres needed.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Top Plate Calculator", description: "How much timber for double top plates? Free calculator \u2014 gives exact board count with overlap stagger included.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Header Calculator", description: "Header calculator: What size header for my opening? Free tool for door & window spans \u2014 covers common header sizes.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Exterior Sheathing Calculator", description: "How many sheets of sheathing for exterior walls? Free calculator for OSB & plywood panels \u2014 includes waste factor estimates.", category: "Wall Framing", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing Calculators",
    description:
      "Estimate all roofing materials from trusses and rafters to tiles, slates, and underlayment.",
    calculators: [
      { slug: "truss-calculator", title: "Roof Truss Calculator", description: "Free roof truss calculator \u2014 get truss count & spacing for any roof length. Enter span for 600 mm centres layout, cost estimate & tips.", category: "Roofing", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Rafter Calculator", description: "Free rafter calculator \u2014 get rafter length, count & spacing for any roof type. Covers 400 mm and 600 mm centres for gable & hip roofs.", category: "Roofing", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Ridge Board Calculator UK — Size & Timber 2026", description: "Ridge board calculator UK: What size ridge board do I need? Free tool for C16/C24 softwood sizing \u2014 board count, length, and 2026 timber prices.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Roof Sheathing Calculator", description: "How many OSB sheets to sheathe my roof? Free roof decking calculator for 1200\u00d72400 mm panels \u2014 factors in roof pitch and waste.", category: "Roofing", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Shingle Calculator", description: "Free shingle calculator for roof shingles \u2014 get bundles, squares & cost from square metres. Covers standard & architectural shingles.", category: "Roofing", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Roofing Underlayment Calculator", description: "How many rolls of roofing underlayment? Free calculator for breathable membrane & felt \u2014 accounts for overlap and waste.", category: "Roofing", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Drip Edge Calculator", description: "Drip edge calculator: Estimate linear metres of flashing for your roof. Free tool \u2014 gives piece count for standard drip edge strips.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-pitch-calculator", title: "Roof Pitch Calculator", description: "What pitch is my roof? Free roof pitch calculator \u2014 enter rise & run for instant angle, slope %, and area multiplier.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-area-calculator", title: "Roof Area Calculator", description: "Free roof area calculator \u2014 convert flat dimensions to true roof area using pitch multiplier. Get roofing squares & material estimates.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-slope-calculator", title: "Roof Slope Calculator", description: "Roof slope calculator \u2014 free tool to find pitch, angle, and sloped roof area multiplier. Enter rise & run for instant results in metres and degrees.", category: "Roofing", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Exterior Shell Calculators",
    description:
      "Calculate breather membrane, cladding, flashing, and seam tape for your home\u2019s exterior envelope.",
    calculators: [
      { slug: "housewrap-calculator", title: "Breather Membrane Calculator", description: "How many rolls of breather membrane do I need? Free calculator by wall area \u2014 covers standard roll widths with overlap.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Vinyl Cladding Calculator", description: "Free vinyl siding calculator \u2014 enter wall area in square metres for exact panel count. Accounts for doors, windows & 10% waste factor.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Hardie Plank Cladding Calculator", description: "How many HardiePlank boards do I need? Free fibre cement cladding calculator \u2014 with waste included.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Window Flashing Calculator", description: "Window flashing tape calculator: Estimate linear metres for all openings. Free tool for self-adhesive flashing tape.", category: "Exterior Shell", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Insulation & Plasterboard Calculators",
    description:
      "Estimate insulation, vapour barriers, plasterboard sheets, screws, and jointing compound for interior finish work.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Cavity Insulation Calculator", description: "How many insulation batts do I need? Free calculator for mineral wool and PIR insulation \u2014 covers standard wall cavities.", category: "Insulation & Plasterboard", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Plasterboard Sheet Calculator", description: "How much plasterboard do I need? Free calculator for 12.5 mm & 15 mm sheets \u2014 estimates 1200\u00d72400 mm boards for walls and ceilings.", category: "Insulation & Plasterboard", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Plasterboard Screw Calculator", description: "Plasterboard screw calculator: How many screws per board? Free estimator \u2014 gives total count and boxes needed.", category: "Insulation & Plasterboard", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Jointing Compound Calculator", description: "How much jointing compound do I need? Free calculator for plasterboard finishing \u2014 estimates buckets for taping, bedding & skim coats.", category: "Insulation & Plasterboard", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Hardware Calculators",
    description:
      "Calculate framing nails, sheathing nails, joist hangers, truss clips, and other structural hardware.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Framing Nail Calculator", description: "Framing nail calculator: How many kilograms of nails for my project? Free tool for standard framing nails \u2014 based on stud count.", category: "Hardware", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Joist Hanger Calculator", description: "How many joist hangers do I need? Free calculator for standard joist hanger connectors \u2014 covers floor and ceiling joist framing.", category: "Hardware", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Truss Clip Calculator", description: "Truss clip calculator: Estimate rafter-to-wall connectors for wind resistance. Free tool for standard truss clips and straps.", category: "Hardware", categorySlug: "hardware" },
      { slug: "lumber-cost-calculator", title: "Timber Cost Calculator", description: "How much does timber cost? Free calculator for common structural timber sizes \u2014 estimates total cost by quantity and current prices in \u00a3.", category: "Hardware", categorySlug: "hardware" },
      { slug: "board-feet-calculator", title: "Board Feet Calculator", description: "Board feet calculator \u2014 enter timber thickness, width & length for instant BF total. Free hardwood pricing tool with cost estimate in £ for any species.", category: "Hardware", categorySlug: "hardware" },
      { slug: "plywood-calculator", title: "Plywood Calculator", description: "Free plywood calculator \u2014 get exact sheet count & cost for any project. Covers 6 mm to 18 mm thickness in 1220\u00d72440 mm panels with waste.", category: "Hardware", categorySlug: "hardware" },
    ],
  },
  {
    slug: "finishing",
    title: "Finishing Calculators",
    description:
      "Calculate paint, primer, stain, and finishing materials for interior and exterior surfaces.",
    calculators: [
      { slug: "paint-coverage-calculator", title: "Paint Calculator", description: "Paint calculator \u2014 free square metre estimator for walls & ceilings. Select coats, get instant litres, tin count, and coverage for your project.", category: "Finishing", categorySlug: "finishing" },
      { slug: "paint-cost-calculator", title: "Paint Cost Calculator", description: "Paint cost calculator: Estimate total project cost by quality level. Free tool for trade to premium \u2014 includes supplies estimate in \u00a3.", category: "Finishing", categorySlug: "finishing" },
      { slug: "primer-calculator", title: "Primer Calculator", description: "How much primer do I need? Free calculator for new plasterboard, timber & repaints \u2014 adjusts coverage by surface type.", category: "Finishing", categorySlug: "finishing" },
      { slug: "epoxy-calculator", title: "Epoxy Calculator", description: "Epoxy calculator \u2014 how much epoxy for your garage floor? Free tool for any area. Get litres, kits & cost estimate for 1-coat and 2-coat systems.", category: "Finishing", categorySlug: "finishing" },
    ],
  },
  {
    slug: "outdoor",
    title: "Outdoor Calculators",
    description:
      "Calculate materials for decking, patios, fencing, and outdoor structures.",
    calculators: [
      { slug: "deck-board-calculator", title: "Deck Board Calculator", description: "How many deck boards do I need? Free calculator for treated, cedar & composite boards \u2014 gives board count, linear metres, and waste factor.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-footing-calculator", title: "Deck Footing Calculator", description: "Deck footing calculator: How many concrete piers for my deck? Free tool \u2014 gives footing count, post layout, and beam spacing.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-railing-calculator", title: "Deck Railing Calculator", description: "How many railing posts and balusters do I need? Free deck railing calculator \u2014 gives post count, baluster total, and rail linear metres.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-stair-calculator", title: "Deck Stair Calculator", description: "Deck stair calculator: How many steps and stringers? Free tool \u2014 enter deck height for step count, stringer quantity, and tread boards.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "post-hole-calculator", title: "Post Hole Calculator", description: "Post hole calculator \u2014 how much concrete for fence posts? Free tool for any hole size. Get exact bag count for 25 kg & 40 kg postcrete bags.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "pond-calculator", title: "Pond Calculator", description: "Pond calculator \u2014 free tool for volume, liner size & pump capacity. Enter dimensions for rectangular, oval or kidney-shaped ponds instantly.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-calculator", title: "Fence Calculator", description: "Fence calculator \u2014 how many posts, rails & pales for your fence? Free fence material calculator for timber fences. Get a complete material list instantly.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-post-calculator", title: "Fence Post Calculator", description: "Fence post calculator \u2014 how many posts and bags of postcrete? Free tool gives post count, concrete bags & gravel for any fence length.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-panel-calculator", title: "Fence Panel Calculator", description: "Fence panel calculator \u2014 how many pre-made panels for your fence? Free tool for 6 ft & 5 ft panels. Get panel count, posts & post caps.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "picket-fence-calculator", title: "Picket Fence Calculator", description: "Picket fence calculator \u2014 how many pickets with custom spacing? Free tool for any picket width & gap. Get picket count, rails, posts & total board metres.", category: "Outdoor", categorySlug: "outdoor" },
    ],
  },
  {
    slug: "flooring",
    title: "Flooring Calculators",
    description:
      "Calculate materials for flooring projects including hardwood, carpet, tile, and laminate with waste factors and cost estimates.",
    calculators: [
      { slug: "flooring-calculator", title: "Flooring Calculator", description: "Flooring calculator — free square metre estimator for any room. Get box count, waste factor & material list for hardwood, LVP, and engineered wood.", category: "Flooring", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Carpet Calculator", description: "Carpet calculator — free tool to estimate square metres, linear metres & underlay needed. Works for 4 m and 5 m wide rolls with seam planning.", category: "Flooring", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Tile Calculator", description: "Tile calculator — free tool for ceramic, porcelain & stone floors. Get tile count, boxes, grout bags & adhesive needed for any room size.", category: "Flooring", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Laminate Flooring Calculator", description: "Laminate flooring calculator — free plank & box estimator with underlay. Enter room size and plank dimensions for instant material list.", category: "Flooring", categorySlug: "flooring" },
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
