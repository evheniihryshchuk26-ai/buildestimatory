import type { CategoryMeta } from "@/content/calculators";

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Foundation Calculators",
    description:
      "Calculate materials for concrete foundation work including anchor bolts, sill seal, and pressure treated plates.",
    calculators: [
      { slug: "anchor-bolt-calculator", title: "Free Anchor Bolt Calculator — Bolt Count & Spacing (2026)", description: "How many anchor bolts do I need? Free calculator for J-bolt & wedge types at standard spacing — includes total count and layout tips.", category: "Foundation", categorySlug: "foundation" },
      { slug: "sill-seal-calculator", title: "Free Sill Seal Calculator — Rolls & Coverage (2026)", description: "Sill seal calculator: Estimate foam gasket rolls by foundation perimeter. Free tool for 3.5\" & 5.5\" widths — prevents air infiltration.", category: "Foundation", categorySlug: "foundation" },
      { slug: "sill-plate-calculator", title: "Free Sill Plate Calculator — Boards & Linear Feet (2026)", description: "How much pressure treated lumber for sill plates? Instant calculator for 2x4 & 2x6 PT boards — gives linear feet and board count.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-calculator", title: "Free Concrete Calculator — Cubic Metres & Bags (2026)", description: "How much concrete do I need? Free calculator for slabs, footings & columns — gives cubic metres and bag counts with waste factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-slab-calculator", title: "Free Concrete Slab Calculator — Metres & Bags (2026)", description: "How much concrete for a slab? Free calculator for garage, patio & driveway slabs — gives cubic metres and bag count for any thickness.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-footing-calculator", title: "Free Concrete Footing Calculator — Metres & Cost (2026)", description: "Concrete footing calculator: Estimate cubic metres for continuous & spread footings. Free tool for foundation walls — includes waste factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-column-calculator", title: "Free Concrete Column Calculator — Metres & Bags (2026)", description: "How much concrete for Sonotubes? Free column calculator for 8\", 10\" & 12\" diameter piers — gives cubic metres per column and total.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-steps-calculator", title: "Free Concrete Steps Calculator — Metres & Cost (2026)", description: "Concrete steps calculator: How many cubic metres for stairs? Free tool — enter width, rise, run & step count for instant estimate.", category: "Foundation", categorySlug: "foundation" },
      { slug: "gravel-calculator", title: "Free Gravel Calculator — Cubic Metres, Tonnes & Cost (2026)", description: "How much gravel do I need? Free calculator for any area — cubic metres, tonnes, and cost estimate with 10% wastage factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "driveway-gravel-calculator", title: "Free Driveway Gravel Calculator — Tonnes & Cost (2026)", description: "Driveway gravel calculator: Estimate tonnes and cost by type — crushed stone, pea gravel, road base, or limestone screenings with delivery.", category: "Foundation", categorySlug: "foundation" },
      { slug: "block-fill-calculator", title: "Free Block Fill Calculator — Yards & Bag Count (2026)", description: "Block fill calculator — how much concrete to fill CMU blocks? Free tool for 8\", 10\" & 12\" blocks. Get cubic yards and bag count instantly.", category: "Foundation", categorySlug: "foundation" },
      { slug: "mortar-mix-calculator", title: "Free Mortar Mix Calculator — Bags & Coverage (2026)", description: "Mortar mix calculator — free tool to estimate bags of mortar for block, brick & stone. Covers Type N, S & M with joint thickness options.", category: "Foundation", categorySlug: "foundation" },
      { slug: "retaining-wall-calculator", title: "Free Retaining Wall Calculator — Blocks & Cost (2026)", description: "Retaining wall calculator — free tool for block, CMU & stone walls. Get block count, cap blocks, gravel backfill & drainage estimates instantly.", category: "Foundation", categorySlug: "foundation" },
      { slug: "rebar-calculator", title: "Free Rebar Calculator — Bars, Linear Feet & Weight (2026)", description: "How much rebar do I need? Free calculator for slabs, footings & walls — gives bar count, linear feet, weight in lbs, and 20 ft piece total.", category: "Foundation", categorySlug: "foundation" },
      { slug: "rebar-spacing-calculator", title: "Free Rebar Spacing Calculator — Grid Layout & Count (2026)", description: "Rebar spacing calculator — free tool to find optimal grid layout by load type. Get bar count, linear feet, and chair supports for any slab.", category: "Foundation", categorySlug: "foundation" },
    ],
  },
  {
    slug: "floor-framing",
    title: "Floor Framing Calculators",
    description:
      "Estimate all floor framing materials including rim joists, floor joists, bridging, subfloor adhesive, and OSB panels.",
    calculators: [
      { slug: "rim-joist-calculator", title: "Free Rim Joist Calculator — Boards & Linear Feet (2026)", description: "Rim joist calculator: How many boards for your floor perimeter? Free tool for 2x8, 2x10 & 2x12 — includes board count and linear feet.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Free Floor Joist Calculator — Count, Span & Spacing (2026)", description: "Free floor joist calculator — get joist count by span & spacing. Covers 16\" and 24\" OC layouts with sizing charts and board totals.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Free Bridging Calculator — Rows & Piece Count (2026)", description: "How many rows of bridging do I need? Free calculator for wood cross-bridging & solid blocking by joist span — instant results.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Free Subfloor Adhesive Calculator — Tubes & Cost (2026)", description: "Subfloor adhesive calculator: How many tubes of construction adhesive? Free estimator based on floor area — covers 28 oz & 10 oz tubes.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "Free OSB Panel Calculator — Sheets & Cost (2026)", description: "How many OSB sheets do I need? Free calculator for 4x8 subfloor panels — accounts for waste and gives exact sheet count instantly.", category: "Floor Framing", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Wall Framing Calculators",
    description:
      "Calculate all wall framing lumber including plates, studs, headers, and sheathing for any wall configuration.",
    calculators: [
      { slug: "stud-calculator", title: "Free Stud Calculator — Count, Spacing & Material List (2026)", description: "How many studs do I need? Free wall stud calculator for 16\" & 24\" OC spacing — includes extras for corners, doors, and window openings.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Free Bottom Plate Calculator — Boards & Feet (2026)", description: "Bottom plate calculator: Estimate 2x4 or 2x6 sole plates by wall length. Free tool that gives board count and total linear feet needed.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Free Top Plate Calculator — Boards & Linear Feet (2026)", description: "How much lumber for double top plates? Free calculator for 2x4 & 2x6 walls — gives exact board count with overlap stagger included.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Free Header Calculator — Size, Count & Span (2026)", description: "Header calculator: What size header for my opening? Free tool for door & window spans — covers 2x6, 2x8, 2x10 & 2x12 headers.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Free Sheathing Calculator — Sheets & Waste (2026)", description: "How many sheets of sheathing for exterior walls? Free calculator for 4x8 OSB & plywood panels — includes waste factor estimates.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "rake-wall-calculator", title: "Free Rake Wall Calculator — Studs & Cuts (2026)", description: "Free rake wall calculator — get stud count, individual heights, and cut angle for walls following the roof pitch.", category: "Wall Framing", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing Calculators",
    description:
      "Estimate all roofing materials from trusses and rafters to shingles and underlayment.",
    calculators: [
      { slug: "truss-calculator", title: "Free Roof Truss Calculator — Count, Spacing & Cost (2026)", description: "Free roof truss calculator — get truss count & spacing for any roof length. Enter span for 24\" OC layout, cost estimate & design tips.", category: "Roofing", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Free Rafter Calculator — Length, Count & Spacing (2026)", description: "Free rafter calculator — get rafter length, count & spacing for any roof type. Covers 16\" and 24\" OC for gable, hip & shed roofs.", category: "Roofing", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Free Ridge Board Calculator — Length & Count (2026)", description: "Ridge board calculator: How many boards for my roof peak? Free tool for 2x8, 2x10 & 2x12 ridge boards — gives length and count.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Free Roof Sheathing Calculator — Sheets & Cost (2026)", description: "How many OSB sheets to sheathe my roof? Free roof decking calculator for 4x8 panels — factors in roof pitch and waste percentage.", category: "Roofing", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Free Shingle Calculator — Bundles, Squares & Cost (2026)", description: "Free shingle calculator for roof shingles — get bundles, squares & cost from square feet. Covers 3-tab & architectural asphalt shingles.", category: "Roofing", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Free Underlayment Calculator — Rolls & Coverage (2026)", description: "How many rolls of roofing underlayment? Free calculator for 15 lb felt, 30 lb felt & synthetic — accounts for overlap and waste.", category: "Roofing", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Free Drip Edge Calculator — Pieces & Linear Feet (2026)", description: "Drip edge calculator: Estimate linear feet of flashing for your roof. Free tool — gives piece count for standard 10 ft drip edge strips.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-pitch-calculator", title: "Free Roof Pitch Calculator — Angle & Slope (2026)", description: "What pitch is my roof? Free roof pitch calculator — enter rise & run for instant angle, slope %, and area multiplier.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-area-calculator", title: "Free Roof Area Calculator — Sq Ft & Squares (2026)", description: "Free roof area calculator — convert flat dimensions to true roof area using pitch multiplier. Get roofing squares & material estimates.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-slope-calculator", title: "Free Roof Slope Calculator — Pitch & Angle (2026)", description: "Roof slope calculator — free tool to find pitch, angle, and sloped roof area multiplier. Enter rise & run for instant square footage results.", category: "Roofing", categorySlug: "roofing" },
      { slug: "hip-roof-calculator", title: "Free Hip Roof Calculator — Rafters, Area & Materials (2026)", description: "Free hip roof calculator — get rafter count, hip rafter length, roof area & ridge length. Covers common, hip & jack rafters for any building size.", category: "Roofing", categorySlug: "roofing" },
      { slug: "gambrel-roof-calculator", title: "Free Gambrel Roof Calculator — Rafters & Area (2026)", description: "Free gambrel (barn) roof calculator — get upper & lower rafter counts, roof area & wall height gained. Enter two pitches for instant results.", category: "Roofing", categorySlug: "roofing" },
      { slug: "gable-roof-calculator", title: "Free Gable Roof Calculator — Rafters, Ridge & Area (2026)", description: "Free gable roof calculator — get rafter count, ridge length, roof area & gable end area. Enter building dimensions and pitch for instant estimate.", category: "Roofing", categorySlug: "roofing" },
      { slug: "lean-to-roof-calculator", title: "Free Lean-To Roof Calculator — Rafters & Area (2026)", description: "Free lean-to (shed) roof calculator — get rafter count, rafter length, roof area & rise height. Single-slope calculator for additions & sheds.", category: "Roofing", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Exterior Shell Calculators",
    description:
      "Calculate housewrap, siding, flashing, and seam tape for your home\u2019s exterior envelope.",
    calculators: [
      { slug: "housewrap-calculator", title: "Free Housewrap Calculator — Rolls & Coverage (2026)", description: "How many rolls of housewrap do I need? Free Tyvek calculator by wall area — covers standard roll widths with overlap.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Free Vinyl Siding Calculator — Panels & Cost (2026)", description: "Free vinyl siding calculator — enter wall square footage for exact panel count. Accounts for doors, windows & 10% waste factor.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Free Hardie Plank Calculator — Boards & Cost (2026)", description: "How many HardiePlank boards do I need? Free fibre cement siding calculator — with waste included.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Free Window Flashing Calculator — Tape & Feet (2026)", description: "Window flashing tape calculator: Estimate linear feet for all openings. Free tool for 4\", 6\" & 9\" wide self-adhesive flashing.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "soffit-calculator", title: "Free Soffit Calculator — Panels & J-Channel (2026)", description: "How many soffit panels do I need? Free calculator by perimeter and eaves width — includes J-channel and ventilation.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "board-and-batten-calculator", title: "Free Board & Batten Calculator — Boards & Battens (2026)", description: "Free board and batten calculator — get board and batten count by wall area. For vertical exterior siding.", category: "Exterior Shell", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Insulation & Drywall Calculators",
    description:
      "Estimate insulation batts, vapour barriers, drywall sheets, screws, and joint compound for interior finish work.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Free Insulation Calculator — Batts & Coverage (2026)", description: "How many insulation batts do I need? Free calculator for R-13, R-15, R-19 & R-21 — covers 2x4 and 2x6 wall cavities instantly.", category: "Insulation & Drywall", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Free Drywall Calculator — Sheets, Screws & Cost (2026)", description: "How much drywall do I need? Free calculator for 1/2\" & 5/8\" sheets — estimates 4x8 and 4x12 panels for walls and ceilings.", category: "Insulation & Drywall", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Free Drywall Screw Calculator — Count & Boxes (2026)", description: "Drywall screw calculator: How many screws per sheet? Free estimator for 1-1/4\" & 1-5/8\" screws — gives total count and boxes needed.", category: "Insulation & Drywall", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Free Joint Compound Calculator — Buckets & Cost (2026)", description: "How much joint compound do I need? Free mud calculator for drywall finishing — estimates buckets for taping, bedding & skim coats.", category: "Insulation & Drywall", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Hardware Calculators",
    description:
      "Calculate framing nails, sheathing nails, joist hangers, hurricane ties, and other structural hardware.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Free Framing Nail Calculator — Pounds & Count (2026)", description: "Framing nail calculator: How many pounds of nails for my project? Free tool for 16d & 8d common nails — based on stud count.", category: "Hardware", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Free Joist Hanger Calculator — Count & Size (2026)", description: "How many joist hangers do I need? Free calculator for LUS, LU & HU series connectors — covers floor and ceiling joist framing.", category: "Hardware", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Free Hurricane Tie Calculator — Clips & Count (2026)", description: "Hurricane tie calculator: Estimate rafter-to-wall connectors for wind resistance. Free tool for H2.5A & H10 Simpson Strong-Tie clips.", category: "Hardware", categorySlug: "hardware" },
      { slug: "lumber-cost-calculator", title: "Free Lumber Cost Calculator — Price & Board Feet (2026)", description: "How much does lumber cost? Free calculator for 2x4, 2x6, 2x8 & more — estimates total cost in CAD by quantity and current prices.", category: "Hardware", categorySlug: "hardware" },
      { slug: "board-feet-calculator", title: "Free Board Feet Calculator — BF Total & Cost (2026)", description: "Board feet calculator — enter lumber thickness, width & length for instant BF total. Free hardwood pricing tool with cost estimate in CAD for any species.", category: "Hardware", categorySlug: "hardware" },
      { slug: "plywood-calculator", title: "Free Plywood Calculator — Sheets, Waste & Cost (2026)", description: "Free plywood calculator — get exact sheet count & cost in CAD for any project. Covers 1/4\" to 3/4\" thickness in 4x8 panels with waste.", category: "Hardware", categorySlug: "hardware" },
    ],
  },
  {
    slug: "finishing",
    title: "Finishing Calculators",
    description:
      "Calculate paint, primer, stain, and finishing materials for interior and exterior surfaces.",
    calculators: [
      { slug: "paint-coverage-calculator", title: "Free Paint Calculator — Gallons, Coats & Cost (2026)", description: "Paint calculator — free square feet paint estimator for walls & ceilings. Select coats, get instant litres and cost based on square footage.", category: "Finishing", categorySlug: "finishing" },
      { slug: "paint-cost-calculator", title: "Free Paint Cost Calculator — Budget & Supplies (2026)", description: "Paint cost calculator: Estimate total project cost by quality level. Free tool for economy to premium — includes supplies estimate in CAD.", category: "Finishing", categorySlug: "finishing" },
      { slug: "primer-calculator", title: "Free Primer Calculator — Gallons & Coverage (2026)", description: "How much primer do I need? Free calculator for new drywall, wood & repaints — adjusts coverage by surface type.", category: "Finishing", categorySlug: "finishing" },
      { slug: "epoxy-calculator", title: "Free Epoxy Calculator — Gallons, Kits & Cost (2026)", description: "Epoxy calculator — how much epoxy for your garage floor? Free tool for any area. Get gallons, kits & cost estimate for 1-coat and 2-coat systems.", category: "Finishing", categorySlug: "finishing" },
    ],
  },
  {
    slug: "outdoor",
    title: "Outdoor Calculators",
    description:
      "Calculate materials for decks, patios, fences, and outdoor structures.",
    calculators: [
      { slug: "deck-board-calculator", title: "Free Deck Board Calculator — Boards, Feet & Cost (2026)", description: "How many deck boards do I need? Free calculator for treated, cedar & composite boards — gives board count, linear feet, and waste factor.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-footing-calculator", title: "Free Deck Footing Calculator — Piers & Layout (2026)", description: "Deck footing calculator: How many concrete piers for my deck? Free tool — gives footing count, post layout, and beam spacing.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-railing-calculator", title: "Free Deck Railing Calculator — Posts & Balusters (2026)", description: "How many railing posts and balusters do I need? Free deck railing calculator — gives post count, baluster total, and rail linear feet.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-stair-calculator", title: "Free Deck Stair Calculator — Steps & Stringers (2026)", description: "Deck stair calculator: How many steps and stringers? Free tool — enter deck height for step count, stringer quantity, and tread boards.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "post-hole-calculator", title: "Free Post Hole Calculator — Bags & Concrete (2026)", description: "Post hole calculator — how much concrete for fence posts? Free tool for any hole size. Get exact bag count for 50 lb & 80 lb Quikrete bags.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "pond-calculator", title: "Free Pond Calculator — Volume, Liner & Pump (2026)", description: "Pond calculator — free tool for volume, liner size & pump capacity. Enter dimensions for rectangular, oval or kidney-shaped ponds instantly.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-calculator", title: "Free Fence Calculator — Posts, Rails & Material List (2026)", description: "Fence calculator — how many posts, rails & pickets for your fence? Free fence material calculator for wood privacy fences. Get a complete material list instantly.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-post-calculator", title: "Free Fence Post Calculator — Posts & Concrete (2026)", description: "Fence post calculator — how many posts and bags of concrete? Free tool gives post count, concrete bags & gravel for any fence length.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-panel-calculator", title: "Free Fence Panel Calculator — Panels & Posts (2026)", description: "Fence panel calculator — how many pre-made panels for your fence? Free tool for 6 ft & 8 ft panels. Get panel count, posts & post caps.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "picket-fence-calculator", title: "Free Picket Fence Calculator — Pickets & Rails (2026)", description: "Picket fence calculator — how many pickets with custom spacing? Free tool for any picket width & gap. Get picket count, rails, posts & total board feet.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-board-spacing-calculator", title: "Free Deck Board Spacing Calculator — Even Gaps (2026)", description: "Free deck board spacing calculator — get even gaps between boards for any board width and deck length. Prevents buckling and water pooling.", category: "Outdoor", categorySlug: "outdoor" },
    ],
  },
  {
    slug: "flooring",
    title: "Flooring Calculators",
    description:
      "Calculate materials for flooring projects including hardwood, carpet, tile, and laminate with waste factors and cost estimates.",
    calculators: [
      { slug: "flooring-calculator", title: "Free Flooring Calculator — Sq Ft, Boxes & Cost (2026)", description: "Flooring calculator — free square footage estimator for any room. Get box count, waste factor & material list for hardwood, LVP, and engineered wood.", category: "Flooring", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Free Carpet Calculator — Sq Yards, Pad & Cost (2026)", description: "Carpet calculator — free tool to estimate square yards, linear feet & pad needed. Works for 12 ft and 15 ft wide rolls with seam planning.", category: "Flooring", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Free Tile Calculator — Tiles, Grout & Cost (2026)", description: "Tile calculator — free tool for ceramic, porcelain & stone floors. Get tile count, boxes, grout bags & thinset needed for any room size.", category: "Flooring", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Free Laminate Calculator — Planks, Boxes & Cost (2026)", description: "Laminate flooring calculator — free plank & box estimator with underlayment. Enter room size and plank dimensions for instant material list.", category: "Flooring", categorySlug: "flooring" },
    ],
  },
  {
    slug: "stairs",
    title: "Stair Calculators",
    description:
      "Calculate stair dimensions, stringer lengths, rise over run, spiral staircases, and landings. Free stair calculators compliant with NBC and provincial building codes.",
    calculators: [
      { slug: "stair-calculator", title: "Free Stair Calculator — Steps, Rise, Run & Stringer (2026)", description: "Free stair calculator — enter total rise for instant step count, riser height, tread depth & stringer length. Meets NBC building code.", category: "Stairs", categorySlug: "stairs" },
      { slug: "stair-stringer-calculator", title: "Free Stair Stringer Calculator — Length, Count & Layout (2026)", description: "Free stair stringer calculator — get stringer length, count & layout for any staircase width. Covers 2×10 & 2×12 stringers.", category: "Stairs", categorySlug: "stairs" },
      { slug: "rise-over-run-calculator", title: "Free Rise Over Run Calculator — Slope, Angle & Ratio (2026)", description: "Rise over run calculator — free slope tool. Get ratio, percentage, angle & description instantly. Works for stairs, ramps & roofs.", category: "Stairs", categorySlug: "stairs" },
      { slug: "spiral-staircase-calculator", title: "Free Spiral Staircase Calculator — Treads & Dimensions (2026)", description: "Free spiral staircase calculator — enter diameter & floor height for tread count, rise per step & rotation. Meets building code.", category: "Stairs", categorySlug: "stairs" },
      { slug: "stair-landing-calculator", title: "Free Stair Landing Calculator — Flights & Dimensions (2026)", description: "Free stair landing calculator — split flights with intermediate landing. Get steps per flight, landing height & total run.", category: "Stairs", categorySlug: "stairs" },
      { slug: "baluster-spacing-calculator", title: "Free Baluster Spacing Calculator — Count & Gap (2026)", description: "Free baluster spacing calculator — get exact count and uniform spacing for stair and deck railings. Meets NBC requirements.", category: "Stairs", categorySlug: "stairs" },
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
