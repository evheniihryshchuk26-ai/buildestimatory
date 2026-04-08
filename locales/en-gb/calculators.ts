import type { CategoryMeta } from "@/content/calculators";

export const categories: CategoryMeta[] = [
  {
    slug: "foundation",
    title: "Foundation Calculators",
    description:
      "Calculate materials for concrete foundation work including anchor bolts, sill seal, and pressure treated plates.",
    calculators: [
      { slug: "anchor-bolt-calculator", title: "Free Anchor Bolt Calculator — Bolt Count & Spacing (2026)", description: "How many anchor bolts do I need? Free calculator for J-bolt & wedge types at standard 1.8 m spacing — includes total count and layout tips.", category: "Foundation", categorySlug: "foundation" },
      { slug: "sill-seal-calculator", title: "Free Sill Seal Calculator — Rolls & Coverage (2026)", description: "Sill seal calculator: Estimate foam gasket rolls by foundation perimeter. Free tool for 90 mm & 140 mm widths — prevents air infiltration.", category: "Foundation", categorySlug: "foundation" },
      { slug: "sill-plate-calculator", title: "Free Sill Plate Calculator — Boards & Metres (2026)", description: "How much pressure treated timber for sill plates? Instant calculator for 100×50 mm & 150×50 mm PT boards — gives linear metres and board count.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-calculator", title: "Free Concrete Calculator — Cubic Metres & Bags (2026)", description: "How much concrete do I need? Free calculator for slabs, footings & columns — gives cubic metres and bag counts with waste factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-slab-calculator", title: "Free Concrete Slab Calculator — Metres & Bags (2026)", description: "How much concrete for a slab? Free calculator for garage, patio & driveway slabs — gives cubic metres and bag count for any thickness.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-footing-calculator", title: "Free Concrete Footing Calculator — Metres & Cost (2026)", description: "Concrete footing calculator: Estimate cubic metres for continuous & spread footings. Free tool for foundation walls — includes waste factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-column-calculator", title: "Free Concrete Column Calculator — Metres & Bags (2026)", description: "How much concrete for column piers? Free column calculator for 200 mm, 250 mm & 300 mm diameter piers — gives cubic metres per column and total.", category: "Foundation", categorySlug: "foundation" },
      { slug: "concrete-steps-calculator", title: "Free Concrete Steps Calculator — Metres & Cost (2026)", description: "Concrete steps calculator: How many cubic metres for stairs? Free tool — enter width, rise, run & step count for instant estimate.", category: "Foundation", categorySlug: "foundation" },
      { slug: "gravel-calculator", title: "Free Gravel Calculator — Cubic Metres, Tonnes & Cost (2026)", description: "How much gravel do I need? Free calculator for any area — cubic metres, tonnes, and cost estimate with 10% wastage factor.", category: "Foundation", categorySlug: "foundation" },
      { slug: "driveway-gravel-calculator", title: "Free Driveway Gravel Calculator — Tonnes & Cost (2026)", description: "Driveway gravel calculator: Estimate tonnes and cost by type — crushed stone, pea gravel, MOT Type 1, or decomposed granite with delivery.", category: "Foundation", categorySlug: "foundation" },
      { slug: "block-fill-calculator", title: "Free Block Fill Calculator — Metres & Bag Count (2026)", description: "Block fill calculator — how much concrete to fill concrete blocks? Free tool for 100 mm, 140 mm & 215 mm blocks. Get cubic metres and bag count instantly.", category: "Foundation", categorySlug: "foundation" },
      { slug: "mortar-mix-calculator", title: "Free Mortar Mix Calculator — Bags & Coverage (2026)", description: "Mortar mix calculator — free tool to estimate bags of mortar for blockwork, brickwork & stone. Covers designations M2, M4 & M6 with joint thickness options.", category: "Foundation", categorySlug: "foundation" },
      { slug: "retaining-wall-calculator", title: "Free Retaining Wall Calculator — Blocks & Cost (2026)", description: "Retaining wall calculator — free tool for block, masonry & stone walls. Get block count, coping stones, gravel backfill & drainage estimates instantly.", category: "Foundation", categorySlug: "foundation" },
    ],
  },
  {
    slug: "floor-framing",
    title: "Floor Framing Calculators",
    description:
      "Estimate all floor framing materials including rim joists, floor joists, bridging, subfloor adhesive, and OSB panels.",
    calculators: [
      { slug: "rim-joist-calculator", title: "Free Rim Joist Calculator — Boards & Metres (2026)", description: "Rim joist calculator: How many boards for your floor perimeter? Free tool for common timber sizes — includes board count and linear metres.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "floor-joist-calculator", title: "Free Floor Joist Calculator — Count, Span & Spacing (2026)", description: "Free floor joist calculator — get joist count by span & spacing. Covers 400 mm and 600 mm centres with sizing charts and board totals.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "bridging-calculator", title: "Free Bridging Calculator — Rows & Piece Count (2026)", description: "How many rows of bridging do I need? Free calculator for timber cross-bridging & solid blocking by joist span — instant results.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "subfloor-adhesive-calculator", title: "Free Subfloor Adhesive Calculator — Tubes & Cost (2026)", description: "Subfloor adhesive calculator: How many tubes of construction adhesive? Free estimator based on floor area — covers standard cartridge sizes.", category: "Floor Framing", categorySlug: "floor-framing" },
      { slug: "osb-panel-calculator", title: "Free OSB Panel Calculator — Sheets & Cost (2026)", description: "How many OSB sheets do I need? Free UK calculator for 1200×2400 mm OSB/3 floor panels — instant sheet count, waste allowance, and 2026 prices.", category: "Floor Framing", categorySlug: "floor-framing" },
    ],
  },
  {
    slug: "wall-framing",
    title: "Wall Framing Calculators",
    description:
      "Calculate all wall framing timber including plates, studs, headers, and sheathing for any wall configuration.",
    calculators: [
      { slug: "stud-calculator", title: "Free Stud Calculator — Count, Spacing & Material List (2026)", description: "How many studs do I need? Free wall stud calculator for 400 mm & 600 mm centres — includes extras for corners, doors, and window openings.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "bottom-plate-calculator", title: "Free Bottom Plate Calculator — Boards & Metres (2026)", description: "Bottom plate calculator: Estimate sole plates by wall length. Free tool that gives board count and total linear metres needed.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "top-plate-calculator", title: "Free Top Plate Calculator — Boards & Metres (2026)", description: "How much timber for double top plates? Free calculator — gives exact board count with overlap stagger included.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "header-calculator", title: "Free Header Calculator — Size, Count & Span (2026)", description: "Header calculator: What size header for my opening? Free tool for door & window spans — covers common header sizes.", category: "Wall Framing", categorySlug: "wall-framing" },
      { slug: "exterior-sheathing-calculator", title: "Free Sheathing Calculator — Sheets & Waste (2026)", description: "How many sheets of sheathing for exterior walls? Free calculator for OSB & plywood panels — includes waste factor estimates.", category: "Wall Framing", categorySlug: "wall-framing" },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing Calculators",
    description:
      "Estimate all roofing materials from trusses and rafters to tiles, slates, and underlayment.",
    calculators: [
      { slug: "truss-calculator", title: "Free Roof Truss Calculator — Count, Spacing & Cost (2026)", description: "Free roof truss calculator — get truss count & spacing for any roof length. Enter span for 600 mm centres layout, cost estimate & tips.", category: "Roofing", categorySlug: "roofing" },
      { slug: "rafter-calculator", title: "Free Rafter Calculator — Length, Count & Spacing (2026)", description: "Free rafter calculator — get rafter length, count & spacing for any roof type. Covers 400 mm and 600 mm centres for gable & hip roofs.", category: "Roofing", categorySlug: "roofing" },
      { slug: "ridge-board-calculator", title: "Free Ridge Board Calculator — Length & Count (2026)", description: "Ridge board calculator UK: What size ridge board do I need? Free tool for C16/C24 softwood sizing — board count, length, and 2026 timber prices.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-sheathing-calculator", title: "Free Roof Sheathing Calculator — Sheets & Cost (2026)", description: "How many OSB sheets to sheathe my roof? Free roof decking calculator for 1200×2400 mm panels — factors in roof pitch and waste.", category: "Roofing", categorySlug: "roofing" },
      { slug: "shingle-calculator", title: "Free Shingle Calculator — Bundles, Squares & Cost (2026)", description: "Free shingle calculator for roof shingles — get bundles, squares & cost from square metres. Covers standard & architectural shingles.", category: "Roofing", categorySlug: "roofing" },
      { slug: "underlayment-calculator", title: "Free Underlayment Calculator — Rolls & Coverage (2026)", description: "How many rolls of roofing underlayment? Free calculator for breathable membrane & felt — accounts for overlap and waste.", category: "Roofing", categorySlug: "roofing" },
      { slug: "drip-edge-calculator", title: "Free Drip Edge Calculator — Pieces & Metres (2026)", description: "Drip edge calculator: Estimate linear metres of flashing for your roof. Free tool — gives piece count for standard drip edge strips.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-pitch-calculator", title: "Free Roof Pitch Calculator — Angle & Slope (2026)", description: "What pitch is my roof? Free roof pitch calculator — enter rise & run for instant angle, slope %, and area multiplier.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-area-calculator", title: "Free Roof Area Calculator — Sq Metres & Cost (2026)", description: "Free roof area calculator — convert flat dimensions to true roof area using pitch multiplier. Get roofing squares & material estimates.", category: "Roofing", categorySlug: "roofing" },
      { slug: "roof-slope-calculator", title: "Free Roof Slope Calculator — Pitch & Angle (2026)", description: "Roof slope calculator — free tool to find pitch, angle, and sloped roof area multiplier. Enter rise & run for instant results in metres and degrees.", category: "Roofing", categorySlug: "roofing" },
    ],
  },
  {
    slug: "exterior-shell",
    title: "Exterior Shell Calculators",
    description:
      "Calculate breather membrane, cladding, flashing, and seam tape for your home\u2019s exterior envelope.",
    calculators: [
      { slug: "housewrap-calculator", title: "Free Membrane Calculator — Rolls & Coverage (2026)", description: "How many rolls of breather membrane do I need? Free calculator by wall area — covers standard roll widths with overlap.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "vinyl-siding-calculator", title: "Free Vinyl Cladding Calculator — Panels & Cost (2026)", description: "Free vinyl siding calculator — enter wall area in square metres for exact panel count. Accounts for doors, windows & 10% waste factor.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "hardie-siding-calculator", title: "Free Hardie Plank Calculator — Boards & Cost (2026)", description: "How many HardiePlank boards do I need? Free fibre cement cladding calculator — with waste included.", category: "Exterior Shell", categorySlug: "exterior-shell" },
      { slug: "window-flashing-calculator", title: "Free Window Flashing Calculator — Tape & Metres (2026)", description: "Window flashing tape calculator: Estimate linear metres for all openings. Free tool for self-adhesive flashing tape.", category: "Exterior Shell", categorySlug: "exterior-shell" },
    ],
  },
  {
    slug: "insulation-drywall",
    title: "Insulation & Plasterboard Calculators",
    description:
      "Estimate insulation, vapour barriers, plasterboard sheets, screws, and jointing compound for interior finish work.",
    calculators: [
      { slug: "cavity-insulation-calculator", title: "Free Insulation Calculator — Batts & Coverage (2026)", description: "How many insulation batts do I need? Free calculator for mineral wool and PIR insulation — covers standard wall cavities.", category: "Insulation & Plasterboard", categorySlug: "insulation-drywall" },
      { slug: "drywall-calculator", title: "Free Plasterboard Calculator — Sheets & Cost (2026)", description: "How much plasterboard do I need? Free calculator for 12.5 mm & 15 mm sheets — estimates 1200×2400 mm boards for walls and ceilings.", category: "Insulation & Plasterboard", categorySlug: "insulation-drywall" },
      { slug: "drywall-screw-calculator", title: "Free Plasterboard Screw Calculator — Count & Boxes (2026)", description: "Plasterboard screw calculator: How many screws per board? Free estimator — gives total count and boxes needed.", category: "Insulation & Plasterboard", categorySlug: "insulation-drywall" },
      { slug: "joint-compound-calculator", title: "Free Jointing Compound Calculator — Buckets & Cost (2026)", description: "How much jointing compound do I need? Free calculator for plasterboard finishing — estimates buckets for taping, bedding & skim coats.", category: "Insulation & Plasterboard", categorySlug: "insulation-drywall" },
    ],
  },
  {
    slug: "hardware",
    title: "Hardware Calculators",
    description:
      "Calculate framing nails, sheathing nails, joist hangers, truss clips, and other structural hardware.",
    calculators: [
      { slug: "framing-nail-calculator", title: "Free Framing Nail Calculator — Kilos & Count (2026)", description: "Framing nail calculator: How many kilograms of nails for my project? Free tool for standard framing nails — based on stud count.", category: "Hardware", categorySlug: "hardware" },
      { slug: "joist-hanger-calculator", title: "Free Joist Hanger Calculator — Count & Size (2026)", description: "How many joist hangers do I need? Free calculator for standard joist hanger connectors — covers floor and ceiling joist framing.", category: "Hardware", categorySlug: "hardware" },
      { slug: "hurricane-tie-calculator", title: "Free Truss Clip Calculator — Clips & Count (2026)", description: "Truss clip calculator: Estimate rafter-to-wall connectors for wind resistance. Free tool for standard truss clips and straps.", category: "Hardware", categorySlug: "hardware" },
      { slug: "lumber-cost-calculator", title: "Free Timber Cost Calculator — Price & Metres (2026)", description: "How much does timber cost? Free calculator for common structural timber sizes — estimates total cost by quantity and current prices in £.", category: "Hardware", categorySlug: "hardware" },
      { slug: "board-feet-calculator", title: "Free Board Feet Calculator — BF Total & Cost (2026)", description: "Board feet calculator — enter timber thickness, width & length for instant BF total. Free hardwood pricing tool with cost estimate in £ for any species.", category: "Hardware", categorySlug: "hardware" },
      { slug: "plywood-calculator", title: "Free Plywood Calculator — Sheets, Waste & Cost (2026)", description: "Free plywood calculator — get exact sheet count & cost for any project. Covers 6 mm to 18 mm thickness in 1220×2440 mm panels with waste.", category: "Hardware", categorySlug: "hardware" },
    ],
  },
  {
    slug: "finishing",
    title: "Finishing Calculators",
    description:
      "Calculate paint, primer, stain, and finishing materials for interior and exterior surfaces.",
    calculators: [
      { slug: "paint-coverage-calculator", title: "Free Paint Calculator — Litres, Coats & Cost (2026)", description: "Paint calculator — free square metre estimator for walls & ceilings. Select coats, get instant litres, tin count, and coverage for your project.", category: "Finishing", categorySlug: "finishing" },
      { slug: "paint-cost-calculator", title: "Free Paint Cost Calculator — Budget & Supplies (2026)", description: "Paint cost calculator: Estimate total project cost by quality level. Free tool for trade to premium — includes supplies estimate in £.", category: "Finishing", categorySlug: "finishing" },
      { slug: "primer-calculator", title: "Free Primer Calculator — Litres & Coverage (2026)", description: "How much primer do I need? Free calculator for new plasterboard, timber & repaints — adjusts coverage by surface type.", category: "Finishing", categorySlug: "finishing" },
      { slug: "epoxy-calculator", title: "Free Epoxy Calculator — Litres, Kits & Cost (2026)", description: "Epoxy calculator — how much epoxy for your garage floor? Free tool for any area. Get litres, kits & cost estimate for 1-coat and 2-coat systems.", category: "Finishing", categorySlug: "finishing" },
    ],
  },
  {
    slug: "outdoor",
    title: "Outdoor Calculators",
    description:
      "Calculate materials for decking, patios, fencing, and outdoor structures.",
    calculators: [
      { slug: "deck-board-calculator", title: "Free Deck Board Calculator — Boards, Metres & Cost (2026)", description: "How many deck boards do I need? Free calculator for treated, cedar & composite boards — gives board count, linear metres, and waste factor.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-footing-calculator", title: "Free Deck Footing Calculator — Piers & Layout (2026)", description: "Deck footing calculator: How many concrete piers for my deck? Free tool — gives footing count, post layout, and beam spacing.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-railing-calculator", title: "Free Deck Railing Calculator — Posts & Balusters (2026)", description: "How many railing posts and balusters do I need? Free deck railing calculator — gives post count, baluster total, and rail linear metres.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "deck-stair-calculator", title: "Free Deck Stair Calculator — Steps & Stringers (2026)", description: "Deck stair calculator: How many steps and stringers? Free tool — enter deck height for step count, stringer quantity, and tread boards.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "post-hole-calculator", title: "Free Post Hole Calculator — Bags & Concrete (2026)", description: "Post hole calculator — how much concrete for fence posts? Free tool for any hole size. Get exact bag count for 25 kg & 40 kg postcrete bags.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "pond-calculator", title: "Free Pond Calculator — Volume, Liner & Pump (2026)", description: "Pond calculator — free tool for volume, liner size & pump capacity. Enter dimensions for rectangular, oval or kidney-shaped ponds instantly.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-calculator", title: "Free Fence Calculator — Posts, Rails & Material List (2026)", description: "Fence calculator — how many posts, rails & pales for your fence? Free fence material calculator for timber fences. Get a complete material list instantly.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-post-calculator", title: "Free Fence Post Calculator — Posts & Concrete (2026)", description: "Fence post calculator — how many posts and bags of postcrete? Free tool gives post count, concrete bags & gravel for any fence length.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "fence-panel-calculator", title: "Free Fence Panel Calculator — Panels & Posts (2026)", description: "Fence panel calculator — how many pre-made panels for your fence? Free tool for 6 ft & 5 ft panels. Get panel count, posts & post caps.", category: "Outdoor", categorySlug: "outdoor" },
      { slug: "picket-fence-calculator", title: "Free Picket Fence Calculator — Pickets & Rails (2026)", description: "Picket fence calculator — how many pickets with custom spacing? Free tool for any picket width & gap. Get picket count, rails, posts & total board metres.", category: "Outdoor", categorySlug: "outdoor" },
    ],
  },
  {
    slug: "flooring",
    title: "Flooring Calculators",
    description:
      "Calculate materials for flooring projects including hardwood, carpet, tile, and laminate with waste factors and cost estimates.",
    calculators: [
      { slug: "flooring-calculator", title: "Free Flooring Calculator — Sq Metres, Boxes & Cost (2026)", description: "Flooring calculator — free square metre estimator for any room. Get box count, waste factor & material list for hardwood, LVP, and engineered wood.", category: "Flooring", categorySlug: "flooring" },
      { slug: "carpet-calculator", title: "Free Carpet Calculator — Sq Metres & Underlay (2026)", description: "Carpet calculator — free tool to estimate square metres, linear metres & underlay needed. Works for 4 m and 5 m wide rolls with seam planning.", category: "Flooring", categorySlug: "flooring" },
      { slug: "tile-calculator", title: "Free Tile Calculator — Tiles, Grout & Cost (2026)", description: "Tile calculator — free tool for ceramic, porcelain & stone floors. Get tile count, boxes, grout bags & adhesive needed for any room size.", category: "Flooring", categorySlug: "flooring" },
      { slug: "laminate-calculator", title: "Free Laminate Calculator — Planks, Boxes & Cost (2026)", description: "Laminate flooring calculator — free plank & box estimator with underlay. Enter room size and plank dimensions for instant material list.", category: "Flooring", categorySlug: "flooring" },
    ],
  },
  {
    slug: "stairs",
    title: "Stair Calculators",
    description:
      "Calculate stair dimensions, stringer lengths, rise over run, spiral staircases, and landings. Free stair calculators compliant with BS 585 and UK Building Regulations.",
    calculators: [
      { slug: "stair-calculator", title: "Free Stair Calculator — Steps, Rise, Run & Stringer (2026)", description: "Free stair calculator — enter total rise for instant step count, riser height, tread depth & stringer length. Meets UK Building Regulations.", category: "Stairs", categorySlug: "stairs" },
      { slug: "stair-stringer-calculator", title: "Free Stair Stringer Calculator — Length, Count & Layout (2026)", description: "Free stair stringer calculator — get stringer length, count & layout for any staircase width. Covers 50×250 & 50×300 mm timbers.", category: "Stairs", categorySlug: "stairs" },
      { slug: "rise-over-run-calculator", title: "Free Rise Over Run Calculator — Slope, Angle & Ratio (2026)", description: "Rise over run calculator — free slope tool. Get ratio, percentage, angle & description instantly. Works for stairs, ramps & roofs.", category: "Stairs", categorySlug: "stairs" },
      { slug: "spiral-staircase-calculator", title: "Free Spiral Staircase Calculator — Treads & Dimensions (2026)", description: "Free spiral staircase calculator — enter diameter & floor height for tread count, rise per step & rotation. Meets building regs.", category: "Stairs", categorySlug: "stairs" },
      { slug: "stair-landing-calculator", title: "Free Stair Landing Calculator — Flights & Dimensions (2026)", description: "Free stair landing calculator — split flights with intermediate landing. Get steps per flight, landing height & total run.", category: "Stairs", categorySlug: "stairs" },
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
