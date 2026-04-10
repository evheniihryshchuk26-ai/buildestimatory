// Canadian English (en-CA) — All calculator SEO content
// Canadian adaptations: NBC, CSA standards, metric+imperial mix, CAD pricing, Canadian brands, SPF lumber

export interface CalculatorSEOContent {
  disclaimer: string;
  howToUse: string[];
  materialInfo: string;
  nextSteps?: { label: string; href: string }[];
  installationTips: string[];
  commonMistakes: string[];
  faqs: { question: string; answer: string }[];
}

const WASTE_DISCLAIMER =
  "Add 10\u201315% extra to your order as a waste factor for cuts and mistakes.";

// ─── FOUNDATION ─────────────────────────────────────────────────────────────

export const anchorBoltCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure the total perimeter of your foundation in feet or metres.",
    "Enter the standard bolt spacing (default 1.8 m / 6 ft per NBC requirements).",
    "Select the bolt diameter — 1/2\" (12.7 mm) is the most common in Canada.",
    "Click Calculate Materials to get the total bolt count.",
  ],
  materialInfo:
    "Anchor bolts (J-bolt or L-bolt) are threaded steel rods embedded in the concrete foundation to secure the pressure-treated sill plate. The National Building Code of Canada (NBC) requires bolts at maximum 2.4 m (8 ft) centres and within 300 mm (12 in) of every corner, joint, or opening in the sill plate. Most provincial codes follow the NBC, though local amendments may apply — always check with your municipality. In Canada, the most common diameter is 1/2\" (12.7 mm), with 5/8\" (15.9 mm) used for heavier loads and seismic zones such as British Columbia's lower mainland. J-bolts are the most widely used because they are simple to set in wet concrete, while L-bolts offer greater pull-out resistance and are preferred in high-wind regions like the Atlantic provinces. Anchor bolts are available at Home Depot Canada, RONA, Home Hardware, Canadian Tire, and Castle Building Centres, typically priced at CAD $1.50 to $4.00 per bolt depending on diameter and finish. In seismic zones (BC, parts of Quebec), CSA A23.3 and NBC Part 4 may require hold-down connectors in addition to standard anchor bolts for improved lateral resistance.",
  nextSteps: [
    { label: "Sill Seal Calculator", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Pressure Treated Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Set bolts before the concrete has fully cured, while it is still workable.",
    "Use a template or jig to maintain consistent spacing and alignment along the form.",
    "Ensure bolts penetrate at least 180 mm (7 in) into the concrete.",
    "Place a bolt within 300 mm (12 in) of each end of every sill plate section.",
    "In seismic zones (BC, Quebec), verify hold-down anchor requirements with your engineer.",
  ],
  commonMistakes: [
    "Omitting bolts at plate joints — always place one within 300 mm (12 in) of each end.",
    "Using the wrong bolt diameter — 1/2\" is the minimum standard for residential construction.",
    "Not checking bolt plumbness before the concrete sets — crooked bolts make plate installation difficult.",
    "Forgetting extra bolts near garage door openings and beam pockets.",
    "Using uncoated bolts in pressure-treated lumber — use hot-dip galvanized to prevent corrosion from ACQ treatment chemicals.",
  ],
  faqs: [
    { question: "What size anchor bolts does the NBC require?", answer: "The National Building Code of Canada requires a minimum 1/2\" (12.7 mm) diameter anchor bolt embedded at least 100 mm (4 in) into the concrete, spaced at a maximum of 2.4 m (8 ft) centres. Most builders use 1/2\" × 10\" J-bolts as the standard." },
    { question: "Do I need anchor bolts at every corner?", answer: "Yes. Place an anchor bolt within 300 mm (12 in) of each end of every sill plate section, at every corner, and on both sides of every opening in the foundation wall." },
    { question: "Can I add anchor bolts after the concrete has set?", answer: "Yes, using epoxy anchors (such as Hilti HIT-RE 500 or Simpson SET-XP). You drill into the cured concrete and bond the threaded rod with structural epoxy, achieving comparable pull-out strength to cast-in bolts. This method is common for retrofit work in Canada." },
    { question: "How many anchor bolts do I need per metre of foundation?", answer: "At the standard 2.4 m (8 ft) spacing, you need approximately 0.42 bolts per linear metre. However, corners, intersections, and plate joints require extra bolts, so in practice budget for 0.6 to 0.8 bolts per metre for the total perimeter." },
    { question: "What is the difference between J-bolts and L-bolts?", answer: "J-bolts have a J-shaped hook at the bottom that keys into the concrete and are the most common for residential work across Canada. L-bolts have a right-angle bend and offer greater pull-out resistance, making them preferable in high-wind areas like the Maritimes or seismic zones in BC." },
    { question: "Do I need special anchoring in BC seismic zones?", answer: "Yes. In high-seismic areas of British Columbia and parts of Quebec, NBC Part 4 and CSA A23.3 may require hold-down anchors (such as Simpson HDU or HTT series) in addition to standard anchor bolts. Your structural engineer will specify the requirements based on the seismic hazard index for your site." },
  ],
};

export const sillSealCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure the total foundation perimeter in linear feet or metres.",
    "Enter the coverage per roll (most rolls cover 15 m / 50 ft).",
    "Select the sill seal width to match your sill plate — 3.5\" or 5.5\".",
    "Click Calculate Materials to see how many rolls you need.",
  ],
  materialInfo:
    "Sill seal is an expanded polyethylene foam gasket strip placed between the concrete foundation and the pressure-treated sill plate. Its primary purpose is to prevent air infiltration, capillary moisture rise, and insect entry — all critical concerns in Canada's cold climate where air leakage can account for 25–40% of total heat loss. It comes in rolls of various widths: 3-1/2\" (89 mm) for 2×4 sill plates and 5-1/2\" (140 mm) for 2×6 sill plates. The standard thickness is 1/4\" (6 mm), though 1/2\" (12 mm) is available for uneven foundation surfaces common in older Canadian homes. In Canada, sill seal can be sourced from Home Depot Canada, RONA, Home Hardware, Canadian Tire, and Castle Building Centres, typically costing CAD $8 to $20 per 50 ft roll. The NBC and provincial energy codes place increasing emphasis on airtightness, and sill seal is an essential component in achieving the required air barrier performance. In northern regions and areas with permafrost, proper sill sealing is even more critical to prevent frost heave damage and ice formation at the foundation-to-wall junction.",
  nextSteps: [
    { label: "Pressure Treated Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Rim Joist Calculator", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Unroll the sill seal along the foundation just before placing the sill plates.",
    "Overlap joints by at least 150 mm (6 in) to maintain continuity of the air barrier.",
    "Use sill seal compatible with ACQ pressure-treated lumber — some foams degrade with treatment chemicals.",
    "In extremely cold regions (northern Ontario, Prairies, Territories), consider doubling the sill seal for enhanced thermal performance.",
    "Ensure the sill seal extends the full width of the sill plate with no gaps at corners.",
  ],
  commonMistakes: [
    "Forgetting to install sill seal — it is essential for meeting NBC energy efficiency and air barrier requirements.",
    "Not overlapping joints, leaving gaps for air infiltration that cause frost formation in winter.",
    "Using sill seal that is too narrow for the plate width — it must cover the full bearing surface.",
    "Tearing the sill seal during plate installation — handle carefully and reposition if needed.",
    "Skipping sill seal on interior bearing walls on slab-on-grade foundations.",
  ],
  faqs: [
    { question: "Is sill seal required by the NBC?", answer: "While not explicitly named, the NBC requires an air barrier system at all junctions in the building envelope. Sill seal is the standard method of achieving an airtight junction between the concrete foundation and the sill plate. Building inspectors across Canada expect to see it installed." },
    { question: "What width of sill seal do I need?", answer: "Match the sill seal width to your sill plate. For 2×4 (3-1/2\") sill plates, use 3-1/2\" sill seal. For 2×6 (5-1/2\") plates, use 5-1/2\" seal. The foam compresses when the plate is bolted down, creating an airtight gasket." },
    { question: "Can I use poly sheeting instead of sill seal?", answer: "A poly vapour barrier prevents moisture but does not provide the same air-sealing and cushioning properties as foam sill seal. Best practice in Canadian construction is to use both: a capillary break (sill seal or poly) plus acoustic/air sealing at the sill plate junction." },
    { question: "How much does sill seal cost in Canada?", answer: "Sill seal typically costs CAD $8 to $20 per 50 ft (15 m) roll at Canadian building suppliers. For a typical 40 m (130 ft) perimeter house, you need 3 rolls — roughly CAD $24 to $60 total. It is one of the cheapest building materials with the highest return on investment." },
    { question: "Do I need sill seal on interior walls?", answer: "Sill seal is primarily used on exterior foundation walls where the concrete-to-wood junction is most exposed to moisture and air leakage. Interior partition sill plates on a concrete slab do not typically require sill seal unless specified for acoustic isolation or radon mitigation." },
    { question: "Is sill seal important for radon mitigation?", answer: "Yes. In many parts of Canada (especially the Prairies, parts of Ontario, and New Brunswick), radon gas is a significant concern. Sill seal helps block radon entry at the foundation-to-wall junction. Health Canada recommends sealing all foundation penetrations as part of a radon mitigation strategy." },
  ],
};

export const sillPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure the total foundation perimeter in feet or metres.",
    "Select the lumber size — 2×4 or 2×6 are standard for sill plates.",
    "Enter the standard lumber length (typically 8 ft, 10 ft, 12 ft, or 16 ft).",
    "Click Calculate Materials to get the board count and total linear feet.",
  ],
  materialInfo:
    "The sill plate is the horizontal pressure-treated lumber member that sits directly on the concrete foundation, secured by anchor bolts. It serves as the base for the entire wall structure and must resist moisture, insect attack, and fungal decay because of its direct contact with concrete. In Canada, sill plates are SPF (Spruce-Pine-Fir) lumber pressure treated with alkaline copper quaternary (ACQ) or copper azole (CA-B) preservatives to meet CSA O80 standards. Standard sizes are 2×4 (1-1/2\" × 3-1/2\" actual) for 2×4 walls and 2×6 (1-1/2\" × 5-1/2\" actual) for 2×6 walls, which are increasingly common across Canada to accommodate R-20 or higher wall insulation required by provincial energy codes. Lumber is typically supplied in lengths of 8 ft, 10 ft, 12 ft, 14 ft, and 16 ft. Prices at Home Depot Canada, RONA, Home Hardware, or Castle Building Centres range from CAD $8 to $18 per piece depending on length and treatment level. All sill plates in contact with concrete must be pressure treated — this is a non-negotiable requirement under the NBC and all provincial building codes. When joining sill plates, butt joints must fall over a solid support and be within 300 mm (12 in) of an anchor bolt on each side of the joint.",
  nextSteps: [
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Sill Seal Calculator", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Lay sill seal on the concrete before placing the sill plate for air sealing.",
    "Pre-drill bolt holes in the plate using the foundation bolts as a guide.",
    "Check that the plate is level along its entire length — shim with plastic or stainless-steel shims if necessary.",
    "Ensure all joints fall over solid support and are secured with bolts on both sides.",
    "Use only ACQ or CA-B treated lumber rated for ground contact — it is marked with a stamp showing the retention level.",
  ],
  commonMistakes: [
    "Using untreated lumber for sill plates — it will rot within a few years in contact with concrete in Canada's freeze-thaw climate.",
    "Not checking the foundation for level before setting plates — this error compounds throughout the entire frame.",
    "Placing joints away from anchor bolts, leaving unsecured sections that can shift.",
    "Using galvanized nails instead of stainless steel or hot-dip galvanized fasteners with ACQ-treated lumber — ACQ is corrosive to standard zinc coatings.",
    "Forgetting to install a capillary break between the concrete and the treated plate.",
  ],
  faqs: [
    { question: "What treatment level do sill plates need in Canada?", answer: "Sill plates in contact with concrete require pressure treatment with ACQ or CA-B preservative to meet CSA O80 standards. Look for the treatment stamp on each piece — it should indicate the preservative type and retention level suitable for ground contact or above-ground use." },
    { question: "Can I use untreated lumber for sill plates?", answer: "No. Untreated lumber in contact with concrete will absorb moisture and decay rapidly, especially through Canadian freeze-thaw cycles. The NBC and all provincial codes require durable or treated lumber wherever it contacts masonry or concrete." },
    { question: "Should I use 2×4 or 2×6 sill plates?", answer: "The sill plate must match the wall stud width. Most Canadian new construction uses 2×6 walls to meet energy code insulation requirements (R-20 or higher). 2×4 sill plates are used for 2×4 walls in renovations or where exterior insulation provides the bulk of the thermal resistance." },
    { question: "How much do pressure-treated sill plates cost in Canada?", answer: "Pressure-treated SPF lumber for sill plates costs approximately CAD $8 to $12 for a 2×4×8 and CAD $12 to $18 for a 2×6×8 at Canadian building suppliers. Prices fluctuate with the lumber market — check current pricing at Home Depot Canada or RONA." },
    { question: "Do I need a capillary break under the sill plate?", answer: "Yes. A sill seal gasket or poly strip should be placed between the concrete and the sill plate to prevent capillary moisture rise. This is especially important in Canada where freeze-thaw cycles can drive moisture through concrete foundations." },
    { question: "How do I join sill plates?", answer: "Butt joints are standard. Each joint must fall directly over a solid support point and have an anchor bolt within 300 mm (12 in) on each side. Stagger sill plate joints so they do not align with stud positions or top plate joints above." },
  ],
};

export const concreteCalculator: CalculatorSEOContent = {
  disclaimer: "Concrete volumes are estimates. Order 5–10% extra to account for spillage, over-excavation, and formwork irregularities.",
  howToUse: [
    "Enter the length, width, and depth of your concrete pour in feet or metres.",
    "Select the shape: slab, footing, or column.",
    "The calculator gives results in both cubic metres and cubic yards.",
    "Click Calculate Materials for volume and bag counts.",
  ],
  materialInfo:
    "Concrete is the most widely used construction material in Canada, comprising Portland cement, aggregate, sand, and water mixed to achieve a specified compressive strength. For residential foundations, 25 MPa concrete (equivalent to 3,500 psi) is the standard mix specified by CSA A23.1 for most of Canada. In regions with severe freeze-thaw exposure (most of the country), air-entrained concrete with 5–8% air content is required to resist frost damage — this is a critical Canadian requirement not always needed in milder climates. Ready-mix concrete is delivered by truck and is the most practical option for pours exceeding 1 m³ (1.3 yd³). For smaller jobs, bagged concrete (Quikrete, Bomix, Sakrete) is available in 25 kg and 30 kg bags from Home Depot Canada, RONA, Home Hardware, and Canadian Tire. A 30 kg bag of Quikrete yields approximately 0.014 m³ when mixed. Ready-mix concrete in Canada typically costs CAD $180 to $280 per m³ delivered, with minimum order charges of around CAD $300 for short loads. Bagged concrete works out more expensive per m³ but avoids minimum order fees. In cold weather (below 5°C), which affects most of Canada for 4–6 months per year, use heated concrete, insulated blankets, and cold-weather admixtures to ensure proper curing.",
  nextSteps: [
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Concrete Column Calculator", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Ensure formwork is secure, level, and braced before the pour — Canadian frost can shift forms overnight if not anchored.",
    "Compact concrete with a vibrator or tamping rod to eliminate air pockets.",
    "Cure concrete for at least 7 days by keeping it moist — cover with poly sheeting or curing compound.",
    "Do not pour concrete when temperatures are below 5°C unless using hot water, heated aggregates, and insulated blankets.",
    "Always specify air-entrained concrete for any exterior application in Canada — non-air-entrained concrete will spall in freeze-thaw cycles.",
  ],
  commonMistakes: [
    "Ordering too little concrete — always add 5–10% for spillage and formwork irregularities.",
    "Adding too much water to the mix — this weakens the concrete and increases freeze-thaw vulnerability.",
    "Not specifying air-entrained concrete for exterior applications — this is essential across Canada.",
    "Pouring in cold weather without proper protection — concrete must be kept above 10°C for at least 72 hours after placement.",
    "Failing to protect fresh concrete from rapid drying in hot Prairie summers, causing surface cracking.",
  ],
  faqs: [
    { question: "What strength concrete do I need for foundations in Canada?", answer: "For standard residential foundations, use 25 MPa (3,500 psi) air-entrained concrete per CSA A23.1. For garage slabs and sidewalks, 25 MPa with air entrainment is also standard. For interior basement floors, 20 MPa may be acceptable. Always check with your local building department." },
    { question: "How many bags of concrete make 1 cubic metre?", answer: "You need approximately 65 to 70 bags of 30 kg Quikrete or Bomix to make 1 m³. This works out to roughly CAD $400 to $550 per m³, which is significantly more expensive than ready-mix at CAD $180 to $280 per m³. Bagged concrete is only practical for small jobs under 0.5 m³." },
    { question: "When should I use ready-mix vs bagged concrete?", answer: "Use ready-mix for any pour over 1 m³ — it is far more economical and consistent. Use bagged concrete for fence posts, small pad footings, and minor repairs. In remote northern communities where ready-mix is unavailable, bagged concrete may be the only option." },
    { question: "How much does ready-mix concrete cost in Canada?", answer: "Ready-mix concrete typically costs CAD $180 to $280 per m³ delivered, depending on mix specification, region, and distance from the plant. Most suppliers have a minimum order (usually 3–5 m³) or charge a short-load fee of CAD $30–$50 per m³ below the minimum. Pump truck hire adds CAD $400–$800." },
    { question: "Can I pour concrete in Canadian winter?", answer: "Yes, but it requires significant precautions. Use hot water and heated aggregates in the mix, add cold-weather admixtures (accelerators), insulate formwork with thermal blankets, and maintain concrete temperature above 10°C for at least 72 hours. Many Canadian builders pour foundations year-round using these techniques." },
    { question: "What is the minimum depth for foundations in Canada?", answer: "The NBC requires foundations to extend below the frost line, which varies dramatically across Canada: 1.2 m (4 ft) in southern Ontario and BC's Lower Mainland, 1.8 m (6 ft) in the Prairies and Quebec, and 2.4 m (8 ft) or more in northern regions. Your local building department specifies the exact frost depth for your area." },
  ],
};

export const concreteSlabCalculator: CalculatorSEOContent = {
  disclaimer: "Order 5–10% extra concrete to account for variations in sub-base level and formwork.",
  howToUse: [
    "Enter the slab length and width in feet or metres.",
    "Enter the slab thickness — 100 mm (4 in) is standard for garages, 125–150 mm (5–6 in) for driveways.",
    "Select whether the slab is interior or exterior for air-entrainment guidance.",
    "Click Calculate Materials for volume in cubic metres and bag count.",
  ],
  materialInfo:
    "Concrete slabs are used for garage floors, driveways, patios, basement floors, and slab-on-grade foundations across Canada. A standard garage slab is 100 mm (4 in) thick using 25 MPa air-entrained concrete over a compacted granular sub-base. Driveways subject to vehicle traffic and heavy snow-clearing equipment should be at least 125–150 mm (5–6 in) thick. The sub-base is typically 150–200 mm (6–8 in) of compacted 3/4\" clear crushed stone (Granular A or equivalent), with a 6-mil poly vapour barrier laid over the stone before the concrete pour. Reinforcement is usually 6×6 W1.4×W1.4 welded wire mesh (6×6 10/10) or 10M rebar at 300 mm (12 in) centres placed on chairs at mid-depth. For heated slab-on-grade foundations (increasingly popular in Canada for energy efficiency), insulation boards — typically 50–100 mm (2–4 in) of Type 2 or Type 4 EPS or XPS — are placed below and around the perimeter of the slab to meet provincial energy code requirements. Concrete slabs must also incorporate control joints at intervals of approximately 3–4.5 m (10–15 ft) to manage cracking. Canadian prices for ready-mix concrete range from CAD $180 to $280 per m³, with a typical 20 m² (215 sq ft) garage slab at 100 mm thickness requiring approximately 2 m³.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Concrete Steps Calculator", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Compact the granular sub-base in lifts using a plate compactor or vibrating roller.",
    "Lay 6-mil poly vapour barrier over the sub-base with 150 mm (6 in) overlaps at joints.",
    "Place welded wire mesh on chairs at mid-depth — do not lay it on the ground and pull it up during the pour.",
    "Use a straight-edge or screed rail to level the concrete surface, then bull-float for a smooth finish.",
    "Cut control joints within 24 hours of placement to a depth of 1/4 of the slab thickness.",
  ],
  commonMistakes: [
    "Skipping the granular sub-base — pouring concrete directly onto soil leads to settlement cracking and frost heave.",
    "Using too thin a slab for the intended load — 100 mm minimum for pedestrian use, 125–150 mm for vehicles.",
    "Not specifying air-entrained concrete for exterior slabs — non-air-entrained slabs will spall in Canadian winters.",
    "Forgetting control joints, resulting in uncontrolled random cracking.",
    "Pouring in late fall without cold-weather protection, resulting in frozen concrete and surface scaling.",
  ],
  faqs: [
    { question: "How thick should a concrete slab be for a garage in Canada?", answer: "A standard garage slab should be at least 100 mm (4 in) thick using 25 MPa air-entrained concrete over a 150 mm (6 in) compacted granular sub-base. If heavy vehicles (trucks, RVs) will be stored, increase to 125–150 mm (5–6 in) with 10M rebar reinforcement." },
    { question: "Do I need mesh in a concrete slab?", answer: "Welded wire mesh (6×6 W1.4×W1.4) or fibre reinforcement is strongly recommended for all slabs. It controls cracking from shrinkage, thermal movement, and frost heave — all major concerns in Canada. Building inspectors typically require it for attached garages and habitable spaces." },
    { question: "How much does a garage slab cost in Canada?", answer: "A typical single-car garage slab (3.6 m × 6 m × 100 mm) uses about 2.2 m³ of concrete at CAD $180–$280 per m³ (CAD $400–$620 for concrete alone). Add CAD $300–$500 for sub-base, poly, mesh, and formwork. DIY total: CAD $700–$1,100. With a contractor: CAD $2,000–$4,000." },
    { question: "Do I need insulation under a basement slab?", answer: "Provincial energy codes increasingly require sub-slab insulation for heated spaces. Typically 50–100 mm (2–4 in) of Type 2 XPS or EPS is placed below the slab. For slab-on-grade construction (no basement), perimeter insulation extending 1.2–2.4 m (4–8 ft) below grade or horizontally is required to prevent frost heave." },
    { question: "What sub-base do I need under a concrete slab in Canada?", answer: "Use 150–200 mm (6–8 in) of compacted Granular A (3/4\" crush with fines) or clear crushed stone. Compact in lifts using a plate compactor. The sub-base provides drainage, prevents frost heave, and distributes loads. In areas with high water tables (parts of Manitoba, Ontario), additional drainage may be needed." },
    { question: "Can I pour a concrete slab myself?", answer: "Yes, for small slabs up to about 3 m³. You will need formwork, a plate compactor, a concrete vibrator or screed, and enough helpers to place and finish the concrete before it sets. Canadian ready-mix trucks typically allow 60–90 minutes on site — plan carefully. For larger slabs, hire a professional crew." },
  ],
};

export const concreteFootingCalculator: CalculatorSEOContent = {
  disclaimer: "Footing dimensions must comply with the NBC and local frost-depth requirements. Always have your foundation design approved by your local building department before starting work.",
  howToUse: [
    "Enter the footing length, width, and depth in feet or metres.",
    "For strip footings, enter the total run length of all foundation walls.",
    "Select interior or exterior for frost-depth guidance.",
    "Click Calculate Materials for cubic metres and bag count.",
  ],
  materialInfo:
    "Concrete footings distribute the building load to the underlying soil and are a critical structural element governed by the NBC Part 9 for residential construction. In Canada, the two main types are strip footings (continuous trenches beneath foundation walls) and spread (pad) footings for columns or posts. Strip footings for a standard two-storey house are typically 600 mm (24 in) wide and 200 mm (8 in) deep minimum, though the actual size depends on soil bearing capacity and building loads. The most critical Canadian requirement is that footings must extend below the frost line — this varies from 1.2 m (4 ft) in southern BC and Ontario to 2.4 m (8 ft) or more in the Prairies and northern regions. Full-depth poured concrete walls (ICF or conventional formed) extending from footing to grade are the most common foundation type in Canada, unlike the shallow strip-and-blockwork foundations common in milder climates. The concrete specification for footings is typically 25 MPa, and air-entrainment is required for any portion exposed to exterior freeze-thaw. A typical Canadian single-family home requires 10–20 m³ of foundation concrete. In areas with clay soils (southern Manitoba, parts of Alberta), footings must account for expansive soil movement.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Excavate to firm, undisturbed ground below the local frost line — never build on fill without engineering advice.",
    "Keep trenches clean and free of loose soil, water, and ice before pouring.",
    "Pour concrete as soon as possible after excavation to prevent trench sides drying or freezing.",
    "In cold weather, use insulated blankets and maintain concrete temperature above 10°C for at least 72 hours.",
    "Install vertical rebar dowels in the footing to key into the foundation wall above.",
  ],
  commonMistakes: [
    "Not going deep enough — footings must extend below the local frost line, which varies significantly across Canada.",
    "Pouring footings on frozen ground — the ice layer will melt and cause settlement.",
    "Forgetting rebar dowels that tie the footing to the foundation wall above.",
    "Not accounting for clay soil movement in Prairie provinces — engineered foundations may be required.",
    "Failing to provide adequate drainage around footings in areas with high water tables.",
  ],
  faqs: [
    { question: "How deep do foundations need to be in Canada?", answer: "The NBC requires footings to extend below the frost line. Frost depth varies across Canada: approximately 1.2 m (4 ft) in Vancouver and southern Ontario, 1.5 m (5 ft) in Ottawa, 1.8 m (6 ft) in Winnipeg and Edmonton, and 2.4 m (8 ft) or more in Yellowknife and northern regions. Your local building department specifies the exact depth." },
    { question: "What is the standard footing size for a house in Canada?", answer: "For a standard two-storey house on competent soil (75–100 kPa bearing capacity), strip footings are typically 600 mm (24 in) wide and 200 mm (8 in) deep. On weaker soils, the engineer may specify wider footings — up to 900 mm (36 in) or more." },
    { question: "Do I need a building permit for foundation work?", answer: "Yes. Foundation work requires a building permit in every Canadian jurisdiction. Inspections are required at the excavation stage (before concrete is poured) and after the concrete has been placed. You must have approved plans before starting any foundation work." },
    { question: "How much concrete do I need for house foundations?", answer: "A typical Canadian single-family home with a full basement requires 15–25 m³ of concrete for footings and walls combined, costing CAD $3,000–$7,000 for concrete alone. The exact volume depends on the basement perimeter, wall height, and footing dimensions." },
    { question: "What about ICF foundations in Canada?", answer: "Insulated Concrete Forms (ICF) are very popular in Canada because they combine structural concrete with built-in insulation, achieving R-22 or higher wall values. ICF foundations cost 10–20% more than conventional poured walls but provide superior energy performance and are increasingly specified in cold climates." },
    { question: "Can I use a slab-on-grade instead of a basement?", answer: "Yes. Slab-on-grade foundations (frost-protected shallow foundations) are gaining popularity in Canada, especially in BC, the Maritimes, and for smaller homes. They require horizontal insulation extending beyond the foundation perimeter to prevent frost heave, designed per NBC requirements." },
  ],
};

export const concreteColumnCalculator: CalculatorSEOContent = {
  disclaimer: "Column pier dimensions should be verified by a structural engineer for load-bearing applications.",
  howToUse: [
    "Enter the column diameter — 8\" (200 mm), 10\" (250 mm), or 12\" (300 mm) are standard Sonotube sizes.",
    "Enter the column height or depth in feet or metres.",
    "Enter the number of columns.",
    "Click Calculate Materials for total cubic metres and bag count.",
  ],
  materialInfo:
    "Concrete columns (piers) are cylindrical concrete foundations formed using Sonotube cardboard forms, used to support deck posts, pergola columns, and lightweight structures across Canada. Standard Sonotube diameters available at Canadian suppliers are 8\" (200 mm), 10\" (254 mm), and 12\" (305 mm), with the 10\" size being the most common for residential deck and pergola posts. Each 10\" diameter × 48\" (1.2 m) deep column requires approximately 0.060 m³ of concrete, equivalent to roughly 4–5 bags of 30 kg Quikrete. Sonotubes cost CAD $8–$25 each at Home Depot Canada, RONA, and Home Hardware. The depth of the pier must extend below the local frost line — this ranges from 1.2 m (4 ft) in southern BC and Ontario to 1.8 m (6 ft) or more in the Prairies. For structural columns, use 25 MPa concrete with a post anchor or bolt-down bracket (Simpson PBS or ABU series) cast into the top, rather than embedding the timber post directly in the concrete. Flare the bottom of the excavation to create a bell shape for additional bearing capacity — this is especially important in clay soils common in southern Manitoba, Ontario, and Quebec.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Cut the Sonotube to the correct height before placing it in the hole — use a handsaw or reciprocating saw.",
    "Use a spirit level to ensure the tube is plumb before filling with concrete.",
    "Set post anchors or J-bolts into the wet concrete at the top of each column — check alignment.",
    "Flare the base of the excavation wider than the tube for better bearing capacity in clay soils.",
    "In winter, protect freshly poured columns with insulated blankets for at least 48 hours.",
  ],
  commonMistakes: [
    "Not digging deep enough — piers must extend below the local frost line into firm, undisturbed soil.",
    "Embedding timber posts directly in concrete — this traps moisture and causes rot; always use a metal post bracket.",
    "Failing to check that column tops are all at the same level before the concrete sets.",
    "Using non-air-entrained concrete for columns exposed to freeze-thaw — the top will spall within a few years.",
    "Backfilling around the tube before the concrete has cured, which can shift the tube out of plumb.",
  ],
  faqs: [
    { question: "How deep should column piers be in Canada?", answer: "Column piers must extend below the local frost line into firm, undisturbed soil. This is 1.2 m (4 ft) minimum in southern BC and Ontario, 1.5 m (5 ft) in Ottawa, and 1.8 m (6 ft) or more in the Prairies. Check with your local building department for the exact requirement." },
    { question: "What diameter Sonotube do I need?", answer: "For standard residential decks, 10\" (254 mm) is the most common. Use 12\" (305 mm) for heavy loads, multi-storey decks, or poor soil conditions. 8\" (200 mm) is suitable for light structures like pergolas and small sheds." },
    { question: "How many bags of concrete per column?", answer: "A 10\" diameter × 48\" deep column needs about 0.060 m³ of concrete, which is approximately 4–5 bags of 30 kg Quikrete. A 12\" × 48\" column needs about 0.087 m³ or roughly 6–7 bags." },
    { question: "Can I use Quikrete for column piers?", answer: "Quikrete premix is suitable for deck piers and light structures. For structural columns carrying significant loads, consider ordering ready-mix 25 MPa air-entrained concrete for greater strength and durability." },
    { question: "Do I need reinforcement in concrete columns?", answer: "For standard residential deck piers, reinforcement is not usually required. For taller columns, columns in seismic zones (BC), or those carrying significant loads, a structural engineer may specify 15M or 20M rebar. Always check with your engineer for load-bearing applications." },
    { question: "Where can I buy Sonotubes in Canada?", answer: "Sonotubes are available from Home Depot Canada, RONA, Home Hardware, Castle Building Centres, and most building supply stores. Standard sizes range from 6\" to 24\" diameter. For large projects, buy directly from the manufacturer (Sonoco) for better pricing." },
  ],
};

export const concreteStepsCalculator: CalculatorSEOContent = {
  disclaimer: "Step dimensions must comply with the NBC Part 9. Always verify riser and tread measurements with your local building department.",
  howToUse: [
    "Enter the overall height (total rise) in millimetres or inches.",
    "Enter the step width in feet or metres.",
    "Enter the number of steps — divide total rise by individual riser height (typically 150–200 mm / 6–8 in).",
    "Click Calculate Materials for cubic metres of concrete.",
  ],
  materialInfo:
    "Concrete steps provide a durable, low-maintenance entrance to buildings and must comply with the NBC Part 9 (Housing and Small Buildings). For exterior steps, the NBC specifies a maximum riser height of 200 mm (8 in) and minimum tread depth (going) of 210 mm (8-1/4 in), with an ideal riser of 175 mm (7 in) and going of 255 mm (10 in). All risers in a flight must be uniform to within 6 mm (1/4 in). Steps are typically formed using timber formwork and filled with 25 MPa air-entrained concrete, often over a compacted granular sub-base. Reinforcement with welded wire mesh or 10M rebar is recommended, especially for wider flights. Canadian winters demand that exterior steps have a slight fall — about 1:50 or 2% — to the front edge to shed water and prevent ice formation. A non-slip broom finish or exposed aggregate surface is essential to prevent slipping on icy steps. Prices for ready-mix concrete are CAD $180–$280 per m³, and a typical 3-step entrance flight uses 0.3–0.6 m³. Handrails are required when there are more than 3 risers (or 600 mm total rise) per the NBC. In Canada, consider adding heated cables (electric or hydronic) to prevent ice buildup on exterior steps.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Build formwork from 3/4\" plywood or 2× lumber, well braced to resist the weight of wet concrete.",
    "Ensure all risers are the same height — uneven steps are a trip hazard and a code violation.",
    "Broom-finish each tread for slip resistance — smooth concrete becomes extremely dangerous when icy.",
    "Cure the concrete for at least 7 days before removing formwork or allowing foot traffic.",
    "Install heated step mats or in-slab heating cables in regions with heavy snowfall to prevent ice formation.",
  ],
  commonMistakes: [
    "Uneven riser heights — all risers must be uniform to within 6 mm (1/4 in) per the NBC.",
    "Not providing a non-slip finish — smooth concrete steps become lethal when covered with ice.",
    "Forgetting to include a handrail — required when there are more than 3 risers or 600 mm total rise.",
    "Not using air-entrained concrete for exterior steps — surface scaling will occur within 1–2 winters.",
    "Building steps without adequate footing below the frost line — steps will heave and crack.",
  ],
  faqs: [
    { question: "What are the NBC requirements for concrete steps?", answer: "The NBC specifies a maximum riser of 200 mm (8 in), minimum going of 210 mm (8-1/4 in), uniform risers within 6 mm, and a handrail on at least one side when there are more than 3 risers or 600 mm total rise. Steps must have a non-slip surface." },
    { question: "How many bags of concrete for 3 steps?", answer: "A typical 3-step flight (900 mm / 36 in wide, 175 mm risers, 255 mm going) uses approximately 0.3 m³ of concrete, or about 20–22 bags of 30 kg Quikrete. For larger flights, ready-mix is more economical." },
    { question: "Do concrete steps need reinforcement?", answer: "Reinforcement is recommended for all concrete steps in Canada, especially flights wider than 900 mm (36 in). Use welded wire mesh or 10M rebar at 200 mm (8 in) centres. Reinforcement prevents cracking from frost heave, settlement, and thermal cycling." },
    { question: "Do I need a handrail on concrete steps?", answer: "Yes, if there are more than 3 risers or the total rise exceeds 600 mm (24 in). The NBC requires a handrail on at least one side, between 865 mm and 965 mm (34–38 in) above the stair nosing. For stairs wider than 1.1 m (44 in), handrails on both sides are required." },
    { question: "How do I prevent ice on concrete steps?", answer: "Use a broom finish or exposed aggregate for texture. Apply concrete sealer annually. Consider installing electric heating cables (about CAD $150–$400 per step) or heated step mats. Avoid salt-based deicers on new concrete — use sand or calcium magnesium acetate instead." },
    { question: "Do exterior steps need footings below the frost line?", answer: "Yes. Exterior steps must bear on footings that extend below the local frost line to prevent heaving. In southern Ontario this means 1.2 m (4 ft) deep, in the Prairies 1.8 m (6 ft). Steps that are not properly footed will heave, tilt, and separate from the building." },
  ],
};

export const gravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "This estimate includes a 10% waste factor. Gravel weight varies by type and moisture content. The 1.5 tonnes per cubic metre (1.4 tons per cubic yard) conversion is an average — actual weight ranges from 1.3 to 1.5 tons per cubic yard depending on the material. Always confirm quantities with your supplier before ordering.",
  howToUse: [
    "Measure the length of the area you need to cover in feet.",
    "Measure the width of the area in feet.",
    "Enter the desired gravel depth in inches — 4 inches (100 mm) is standard for most applications, 6 to 8 inches for driveways.",
    "Click Calculate to get cubic yards and tonnes with a built-in 10% waste factor.",
  ],
  materialInfo:
    "Gravel is a loose aggregate of rock fragments used for driveways, walkways, drainage, landscaping, and as a sub-base beneath concrete and asphalt. In Canada, gravel is widely available from local quarries, Home Hardware, RONA, and building supply yards across every province.\n\nThe most common gravel sizes in Canadian construction are 3/4\" clear stone (19 mm, the standard drainage and driveway gravel), Granular A (a graded blend of crushed stone and fines that compacts firmly for sub-bases), and Granular B (a coarser base material used for fill and road beds). Pea gravel (3/8\" or 10 mm rounded stones) is popular for walkways, patios, and decorative beds. Crusher run (also called pit run or quarry process) is a blend of crushed stone and stone dust that compacts into an extremely hard surface — it is the preferred material for driveway sub-bases across Canada.\n\nGravel is sold by the cubic yard, by the tonne, or by the cubic metre depending on the supplier and province. One cubic yard of gravel weighs approximately 1.4 tons (2,800 lbs), or about 1.5 tonnes per cubic metre. Most Canadian suppliers sell by the tonne with delivery, and typical pricing ranges from CAD $25 to $60 per tonne depending on type and region. Delivery fees run CAD $75 to $200 per load for distances up to 30 km. Prices tend to be lower at local quarries than at retail building centres.\n\nFor driveways, the standard Canadian approach is a two-layer system: 150 to 200 mm (6 to 8 inches) of compacted Granular A or crusher run as a sub-base, topped with 50 to 100 mm (2 to 4 inches) of 3/4\" clear stone or decorative gravel. In regions with severe freeze-thaw cycles (most of Canada), adequate depth and proper drainage are critical to prevent frost heave and potholing. For simple fill, walkways, and landscaping beds, a single layer of 75 to 100 mm (3 to 4 inches) over a geotextile fabric is sufficient.",
  nextSteps: [
    { label: "Driveway Gravel Calculator", href: "/calculators/foundation/driveway-gravel-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Remove all topsoil and organic material before laying gravel — organic matter decomposes and causes settling, especially after spring thaw.",
    "Install geotextile landscape fabric over the compacted subgrade to prevent gravel from mixing with the soil below.",
    "Spread gravel in 50 to 75 mm (2 to 3 inch) lifts and compact each layer with a plate compactor before adding the next.",
    "Crown driveways and paths slightly (5 mm per 300 mm or 1/4 inch per foot) so water drains to the edges rather than pooling.",
    "Use edge restraints (metal edging, timber borders, or concrete curbs) to keep gravel from migrating into adjacent areas.",
  ],
  commonMistakes: [
    "Using rounded pea gravel for driveways — it does not compact and shifts under tire weight. Use angular crushed stone or Granular A instead.",
    "Not removing organic topsoil — grass and roots under the gravel will decompose and create sinkholes after spring thaw.",
    "Skipping the compaction step — uncompacted gravel shifts and develops ruts quickly, especially during freeze-thaw cycles.",
    "Applying gravel too thin — less than 75 mm (3 inches) will not provide adequate coverage or support and you will see the subgrade through the stone.",
    "Not accounting for delivery minimums — most Canadian quarries require a 5 to 10-tonne minimum order for delivery.",
  ],
  faqs: [
    {
      question: "How much gravel do I need?",
      answer: "Multiply your project length by width (in feet) to get the square footage, then multiply by the depth (in feet) to get cubic feet. Divide by 27 to convert to cubic yards. One cubic yard covers about 80 square feet at 4 inches deep. Add 10% for waste, compaction, and uneven ground. For example, a 20×20 ft area at 4 inches deep needs about 5.5 cubic yards (7.7 tonnes).",
    },
    {
      question: "How much does a cubic yard of gravel weigh?",
      answer: "One cubic yard of gravel weighs approximately 2,800 lbs (1.4 tons or about 1.27 tonnes). The exact weight depends on the stone type: Granular A averages 1.5 tons per yard, crusher run is about 1.45 tons per yard, pea gravel weighs about 1.35 tons per yard, and 3/4\" clear stone weighs about 1.4 tons per yard. Wet gravel can weigh 10 to 15% more than dry.",
    },
    {
      question: "How many tonnes of gravel do I need?",
      answer: "Calculate your cubic yards first (length × width × depth in feet, divided by 27), then multiply by 1.27 to convert to metric tonnes. For example, a 10×20 ft area at 4 inches deep is 2.5 cubic yards, which is approximately 3.2 tonnes. Always order 10% extra to account for compaction and waste.",
    },
    {
      question: "How deep should gravel be?",
      answer: "The recommended depth depends on the application: 50 to 75 mm (2 to 3 inches) for walkways and decorative beds, 100 mm (4 inches) for patios and general fill, 150 to 200 mm (6 to 8 inches) for driveways (with compacted sub-base), and 250 to 300 mm (10 to 12 inches) for high-traffic or commercial areas. In cold regions, extra depth helps resist frost heave.",
    },
    {
      question: "How much does gravel cost in Canada?",
      answer: "Gravel prices range from CAD $25 to $60 per tonne depending on the type and region. Granular A and crusher run are the most affordable at CAD $20 to $40 per tonne from quarries. Pea gravel costs CAD $35 to $55 per tonne. Decorative stone runs CAD $50 to $100 per tonne. Delivery fees add CAD $75 to $200 per load. Bulk orders from local quarries offer the best value — retail bags from Home Hardware or RONA cost significantly more per tonne.",
    },
    {
      question: "What is the difference between Granular A and crusher run?",
      answer: "Granular A is an Ontario Ministry of Transportation specification for a well-graded crushed stone aggregate with specific particle size requirements, used as a sub-base for roads, driveways, and beneath concrete. Crusher run (also called quarry process or pit run) is a similar blend of crushed stone and fines but without the strict grading requirements. Both compact firmly and are excellent sub-base materials. The terminology varies by province — in western Canada, 'road crush' or '3/4 minus' are equivalent products.",
    },
  ],
};

export const drivewayGravelCalculator: CalculatorSEOContent = {
  disclaimer:
    "This estimate includes a 10% waste factor. Cost estimates are based on Canadian averages and vary significantly by province, supplier, and delivery distance. Gravel weight varies by type and moisture content. Always get quotes from local suppliers before ordering.",
  howToUse: [
    "Measure the total length of your driveway in feet.",
    "Enter the driveway width — 10 to 12 feet (3 to 3.5 m) for a single car, 20 to 24 feet (6 to 7 m) for a double-wide driveway.",
    "Enter the gravel depth — 6 inches (150 mm) is standard for driveways, 8 to 10 inches for heavy vehicle traffic.",
    "Select your gravel type and click Calculate for cubic yards, tonnes, and an estimated cost range.",
  ],
  materialInfo:
    "A gravel driveway is one of the most affordable and practical driveway surfaces across Canada, well suited to the country's extreme climate and long freeze-thaw seasons. When properly installed with the correct materials and adequate depth, a Canadian gravel driveway can last 10 to 15 years with routine maintenance.\n\nThe best gravel driveway in Canada is built in two layers. The bottom layer (150 to 200 mm or 6 to 8 inches) uses compacted Granular A, crusher run, or equivalent provincial specification aggregate. This sub-base provides drainage, load distribution, and stability through freeze-thaw cycles. The top layer (50 to 100 mm or 2 to 4 inches) uses 3/4\" clear stone, decorative gravel, or self-compacting aggregate. Each layer must be spread and compacted separately using a plate compactor or roller.\n\nGranular A and crusher run are the most popular sub-base materials because their angular edges and graded particle sizes lock together under compaction, creating a stable foundation. In western Canada, '3/4 minus' or 'road crush' serve the same purpose. For the driving surface, 3/4\" clear stone is the standard — its angular edges interlock under tire pressure. Pea gravel looks attractive but shifts under tires and is not recommended as a primary driveway surface.\n\nDriveway gravel costs CAD $3 to $10 per square foot installed, depending on depth and material. A typical 3.5×15 m (12×50 ft) single-car driveway costs CAD $800 to $2,500 for materials only. Professional installation with excavation, grading, fabric, and compaction adds CAD $5 to $15 per square foot. Annual maintenance includes grading displaced stone back into ruts (especially after spring thaw) and adding a 25 to 50 mm (1 to 2 inch) top-up layer every 2 to 3 years. In snowy regions, use a gravel-setting snow plough blade to avoid pushing gravel off the driveway during winter clearing.",
  nextSteps: [
    { label: "Gravel Calculator", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
  ],
  installationTips: [
    "Grade the driveway with a 2 to 3% slope away from the house and garage for proper drainage — water pooling on gravel creates potholes, and freeze-thaw makes them worse.",
    "Install geotextile landscape fabric over the graded subgrade to prevent stone from mixing with the soil below — essential in Canadian clay soils.",
    "Spread and compact each layer separately — do not dump all the gravel at once.",
    "Use a plate compactor or roller on each lift to maximise density and stability.",
    "Install border edging (steel, aluminum, or timber) along both sides to prevent gravel migration into the yard.",
    "Crown the driveway centre slightly higher (25 to 50 mm) so water sheds to both edges.",
  ],
  commonMistakes: [
    "Using pea gravel as the driving surface — its rounded shape does not compact and stones scatter under tires.",
    "Dumping gravel directly on topsoil without grading — organic soil decomposes and causes sinkholes, especially after spring thaw.",
    "Applying only 50 to 75 mm (2 to 3 inches) of gravel — this is too thin for vehicle traffic and will rut through to the subgrade quickly.",
    "Skipping the fabric layer — without it, gravel sinks into soft clay soil within 1 to 2 years and you lose half your stone.",
    "Not compacting between layers — loose gravel shifts and develops ruts and potholes within weeks, especially during freeze-thaw cycles.",
  ],
  faqs: [
    {
      question: "How much gravel do I need for a driveway?",
      answer: "A standard single-car driveway (12 ft wide by 50 ft long at 6 inches deep) needs about 12 cubic yards (15 tonnes) of gravel. A double-wide driveway (24×50 ft at 6 inches deep) needs about 24 cubic yards (30 tonnes). These amounts include a 10% waste factor for compaction and spreading.",
    },
    {
      question: "How much does a gravel driveway cost in Canada?",
      answer: "Materials for a gravel driveway cost CAD $3 to $10 per square foot depending on the gravel type and depth. A 12×50 ft driveway costs CAD $800 to $2,500 for gravel alone. Professional installation with grading, fabric, and compaction typically costs CAD $5 to $15 per square foot, putting the total installed cost at CAD $3,000 to $9,000 for a single-car driveway. Prices vary significantly by province and distance from quarry.",
    },
    {
      question: "What is the best gravel for a driveway in Canada?",
      answer: "Granular A or crusher run is the best sub-base material because its graded particle sizes compact firmly. For the driving surface, 3/4\" clear stone is the standard — its angular edges interlock under traffic. In western Canada, 'road crush' or '3/4 minus' are equivalent products. Self-compacting aggregates are gaining popularity for a firmer surface.",
    },
    {
      question: "How deep should gravel be for a driveway in Canada?",
      answer: "A gravel driveway should be 150 to 200 mm (6 to 8 inches) deep minimum, applied in 2 layers. For heavy vehicles (trucks, RVs, equipment), use 250 to 300 mm (10 to 12 inches) total depth. The extra depth is important in Canadian climates to resist frost heave. Each layer should be compacted before the next is applied.",
    },
    {
      question: "How long does a gravel driveway last in Canada?",
      answer: "A properly installed gravel driveway lasts 10 to 15 years before needing a major refresh. Canadian winters are harder on gravel driveways than mild climates — annual maintenance includes raking displaced stone back into low spots after spring thaw and adding a 25 to 50 mm (1 to 2 inch) top-up layer every 2 to 3 years. The sub-base layer can last indefinitely if properly installed.",
    },
    {
      question: "Can I plough snow on a gravel driveway?",
      answer: "Yes, but adjust your plough blade height to avoid scraping gravel off the driveway. Set the blade 25 mm (1 inch) above the surface, or use a rubber-edged blade designed for gravel surfaces. Some homeowners install gravel grids (cellular confinement systems) to lock the surface stone in place, making snow removal easier. In spring, rake displaced gravel back from the edges where the plough pushed it.",
    },
  ],
};

export const blockFillCalculator: CalculatorSEOContent = {
  disclaimer:
    "This estimate includes a 10% waste factor. Actual fill volume varies with block manufacturer, core geometry, and grout slump. Always verify core dimensions against the specific CMU product data sheet before ordering.",
  howToUse: [
    "Count the total number of CMU blocks that need to be filled \u2014 include all courses and wall sections.",
    "Select the block size: 8-inch is standard residential, 10-inch and 12-inch are used for taller or load-bearing walls.",
    "Choose the fill type: concrete/grout for structural fills, vermiculite for insulation, foam insulation for thermal performance.",
    "Click Calculate to get cubic yards, cubic feet, and bag count.",
  ],
  materialInfo:
    "Block fill (also called core fill or grout fill) is the process of filling the hollow cores of concrete masonry unit (CMU) blocks with concrete, grout, vermiculite, or foam insulation. In Canadian construction, CMU block filling is governed by CSA A370 (Connectors for Masonry) and CSA A179 (Mortar and Grout for Unit Masonry), with the National Building Code of Canada (NBC) Part 9 referencing these standards for residential applications.\n\nStructural block fill uses a pourable grout mix conforming to CSA A179, typically achieving 12.5 MPa compressive strength. The grout flows into the cores and around vertical rebar placed inside the wall. The NBC and provincial codes require grouted cells at specific intervals \u2014 usually every 1200 mm horizontally and at all corners, jambs, and bond beam courses.\n\nRebar placement follows CSA A370 requirements. Vertical rebar (10M or 15M bars) is set into the footing before the wall is laid and extends up through the cores that will be grouted. Horizontal rebar runs through bond beam blocks at the top of the wall and at intermediate courses as specified by the engineer. All grouted cells must have rebar \u2014 filling empty cores with grout alone does not meet structural requirements.\n\nFor non-structural applications, vermiculite or perlite loose fill provides moderate insulation (approximately RSI 0.37 per 25 mm) and is poured dry into the cores. Spray foam insulation offers higher R-values (RSI 1.06 per 25 mm for closed-cell) but costs significantly more and requires professional installation. Standard 200 mm (8-inch) CMU blocks have two cores yielding approximately 0.007 cubic metres of fill per block.\n\nExpect to pay CAD $150 to $200 per cubic metre for ready-mix grout delivered, or CAD $7 to $10 per 30 kg bag of premixed grout for small projects. Vermiculite costs CAD $20 to $30 per 4-cubic-foot bag. Materials are available at Home Depot Canada, RONA, and local masonry supply yards. Always over-order by 10% to account for settling, spillage, and irregular core sizes.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Gravel Calculator", href: "/calculators/foundation/gravel-calculator/" },
  ],
  installationTips: [
    "Pre-wet the CMU cores before pouring grout \u2014 dry blocks absorb water from the mix and weaken the fill.",
    "Pour grout in lifts of no more than 1.2 metres (4 feet) at a time, then consolidate with a vibrator or rod.",
    "Use fine grout (10 mm aggregate max) so it flows freely through the cores without bridging.",
    "Place vertical rebar before laying blocks and brace it plumb \u2014 do not try to drop rebar into filled cores.",
    "Install cleanout blocks at the base of tall walls so you can inspect cores before grouting.",
    "Fill bond beam courses completely and rod the grout to eliminate voids around horizontal rebar.",
  ],
  commonMistakes: [
    "Grouting all cores at once on a tall wall \u2014 grout sets under pressure and can blow out lower courses. Limit pours to 1.2-metre lifts.",
    "Skipping rebar in grouted cells \u2014 grouted cells without rebar provide little structural value.",
    "Using standard concrete mix instead of fine grout \u2014 large aggregate bridges across the core opening and creates voids.",
    "Not consolidating grout with a vibrator or rod \u2014 air pockets reduce bond strength by up to 50%.",
    "Filling cores in freezing temperatures \u2014 grout must cure above 5\u00b0C for at least 48 hours per CSA A179.",
  ],
  faqs: [
    { question: "How much concrete do I need to fill cinder blocks?", answer: "A standard 200 mm (8-inch) CMU block requires approximately 0.007 cubic metres of grout per block. For 100 blocks, you need about 0.77 cubic metres including a 10% waste factor. Enter your block count and size above for an instant estimate with bag counts." },
    { question: "How many 30 kg bags of concrete to fill a cinder block?", answer: "One 30 kg bag of premixed grout fills approximately 2 standard 200 mm CMU blocks. For a wall of 100 blocks, you need about 55 bags. For 300 mm blocks, one bag fills only about 1.5 blocks because of the larger core volume. Always buy 10% extra for waste and spillage." },
    { question: "Do all CMU block cores need to be filled?", answer: "No \u2014 the NBC and CSA standards only require filling cores that contain rebar or are part of a bond beam course. Typically, cores are grouted every 1200 mm horizontally and at all corners, door and window jambs, and the top bond beam. In seismic zones (parts of BC, Quebec, and Ottawa), codes may require every core to be grouted." },
    { question: "What is the difference between grout and concrete for block fill?", answer: "Grout conforming to CSA A179 is a fluid mix with small aggregate (10 mm max) and higher water content, designed to flow into narrow block cores without bridging. Standard concrete has larger aggregate that can jam in the cores, creating voids. Always use fine grout or a premixed block fill product for CMU cores." },
    { question: "Can I fill cinder blocks with foam insulation instead of concrete?", answer: "Yes, for non-structural walls where code allows it. Closed-cell spray foam provides approximately RSI 1.06 per 25 mm and adds moisture resistance. Vermiculite loose fill is cheaper at about RSI 0.37 per 25 mm. Neither provides structural strength \u2014 if the wall requires grouted rebar, those cells must be filled with grout." },
    { question: "How many cubic metres of grout for a CMU block wall?", answer: "Multiply the number of blocks to be filled by the core volume: 0.007 m\u00b3 per 200 mm block, 0.009 m\u00b3 per 250 mm block, or 0.011 m\u00b3 per 300 mm block. A typical 200 mm foundation wall of 400 blocks with every core filled needs about 3.1 m\u00b3 of grout including 10% waste." },
  ],
};

export const mortarMixCalculator: CalculatorSEOContent = {
  disclaimer:
    "This estimate includes a 10% waste factor. Actual mortar usage varies based on block or brick size, joint profile (concave, V-joint, flush), workmanship, and weather conditions. Always confirm quantities with your masonry supplier before ordering.",
  howToUse: [
    "Calculate the total wall or surface area in square feet — multiply wall length by height, then subtract window and door openings.",
    "Select your mortar type — Type N for general above-grade work, Type S for structural and below-grade, Type M for heavy loads and foundations.",
    "Choose the joint thickness — 3/8\" is the standard for most block and brick work.",
    "Click Calculate to get the number of pre-mixed bags needed plus quantities for mixing from scratch with Portland cement and sand.",
  ],
  materialInfo:
    "Mortar is the bonding material used between blocks, bricks, and stone units in masonry construction. It is composed of Portland cement, hydrated lime, sand, and water, mixed to a workable consistency that allows masons to lay units efficiently while providing structural bond and weather resistance.\n\nIn Canada, mortar is specified under CSA A179 (Mortar and Grout for Unit Masonry) and must comply with the National Building Code of Canada (NBC). The three most common types are Type N (750 psi / 5.2 MPa), Type S (1,800 psi / 12.4 MPa), and Type M (2,500 psi / 17.2 MPa). Type N is the standard general-purpose mortar for above-grade walls, chimneys, and non-load-bearing partitions. Type S is required for structural walls, below-grade foundation walls, and retaining walls per NBC Part 9. Type M provides the highest compressive strength for heavy-load foundations.\n\nPre-mixed mortar (such as King, Bomix, or Sakrete) comes in 30 kg and 25 kg bags. A 30 kg bag yields approximately 0.5 cubic feet (14 litres) of mortar and covers roughly 14 standard CMU blocks (200 x 200 x 400 mm) at 10 mm joints. For large projects, site-mixing with Portland cement (CSA A3001), hydrated lime, and masonry sand is more economical.\n\nPre-mixed mortar bags (30 kg) cost approximately CAD 8 to 15 at Home Depot Canada, RONA, Home Hardware, or Castle Building Centres. Masonry sand costs about CAD 30 to 50 per tonne. In cold-weather provinces, mortar must be protected from freezing per CSA A371 — cold weather masonry requires heated materials and enclosures when temperatures fall below 5 C.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Block Fill Calculator", href: "/calculators/foundation/block-fill-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Mix only as much mortar as you can use within 90 minutes — mortar begins to set and loses workability after that window.",
    "Dampen blocks or bricks before laying to prevent them from absorbing water from the mortar, which causes weak bonds.",
    "Maintain consistent joint thickness by using a mason's line and checking courses with a level every 3 to 4 rows.",
    "Tool (strike) the joints when the mortar is thumbprint-firm — tooling too early smears the surface, and too late prevents proper compaction.",
    "In Canadian winters, never lay masonry when temperatures are below -5 C without heated enclosures and warm materials per CSA A371.",
  ],
  commonMistakes: [
    "Using the wrong mortar type — Type M in above-grade walls is too rigid and cracks; Type N below grade is too weak and deteriorates.",
    "Adding too much water to the mix — soupy mortar has reduced strength and stains the face of the blocks or bricks.",
    "Re-tempering mortar after it has begun to set — adding water to stiffened mortar restores workability but permanently reduces bond strength.",
    "Mixing too large a batch — mortar that sits in the wheelbarrow for over 2 hours is dead and must be discarded, wasting material.",
    "Not buttering the ends of blocks or bricks — head joints left empty create water entry points and weaken the wall structurally.",
  ],
  faqs: [
    {
      question: "How much mortar do I need per 100 square feet?",
      answer: "For standard 200 x 200 x 400 mm concrete blocks with 10 mm joints, you need approximately 7 bags (30 kg) of pre-mixed mortar per 100 square feet (9.3 m2) of wall area. Type S mortar uses about 7.5 bags and Type M about 8 bags per 100 sq ft due to their denser mix.",
    },
    {
      question: "What mortar type does the NBC require?",
      answer: "The National Building Code of Canada (NBC) Part 9 requires Type S mortar for below-grade foundation walls, retaining walls, and any masonry in contact with soil. Type N is acceptable for above-grade load-bearing and non-load-bearing walls. CSA A179 governs mortar specifications, and CSA A371 covers cold-weather masonry practices.",
    },
    {
      question: "How do I mix mortar from scratch in Canada?",
      answer: "For Type N mortar per CSA A179, combine 1 part Portland cement (CSA A3001), 1 part hydrated lime, and 6 parts masonry sand by volume. For Type S, use 1 part cement, 0.5 part lime, and 4.5 parts sand. Add water gradually until the mix reaches a peanut-butter consistency. One 40 kg bag of Portland cement makes about 4.5 cubic feet of Type N mortar.",
    },
    {
      question: "Can I lay mortar in winter in Canada?",
      answer: "Yes, but CSA A371 requires special cold-weather procedures when temperatures fall below 5 C. Materials must be heated (sand to at least 20 C, water to 40-70 C), the work area must be enclosed and heated, and freshly laid masonry must be protected from freezing for at least 48 hours. Antifreeze admixtures are not a substitute for proper cold-weather protection.",
    },
    {
      question: "How long does mortar take to cure?",
      answer: "Mortar reaches initial set in 2 to 4 hours and is firm enough for light work in 24 hours. Full cure takes 28 days. Avoid heavy loads or backfilling for at least 7 days. In Canadian winters, curing slows dramatically below 5 C and mortar must be protected from freezing per CSA A371.",
    },
    {
      question: "How much does mortar cost in Canada?",
      answer: "Pre-mixed mortar bags (30 kg) cost CAD 8 to 15 depending on type and brand. Portland cement (40 kg) costs CAD 12 to 18. Masonry sand runs CAD 30 to 50 per tonne. For a typical 100-block foundation wall project, mortar materials cost approximately CAD 80 to 150. Prices vary by province and are generally higher in remote and northern communities.",
    },
  ],
};

// ─── FLOOR FRAMING ──────────────────────────────────────────────────────────

export const floorJoistCalculator: CalculatorSEOContent = {
  disclaimer: "Order 2–3 extra joists for waste and damage. Always verify sizes against NBC span tables for your region.",
  howToUse: [
    "Enter the total room width perpendicular to joist direction.",
    "Choose your on-centre spacing (16\" is standard for living spaces in Canada).",
    "Click Calculate to get the total joist count.",
    "Verify joist size against NBC Part 9 span tables for your species, grade, and loading.",
  ],
  materialInfo:
    "Floor joists are the horizontal structural members that span between bearing walls or beams to support the subfloor and all live and dead loads above. In Canadian residential construction, floor joist sizing and spacing are governed by the National Building Code of Canada (NBC) Part 9 — Housing and Small Buildings, specifically Tables 9.23.4.1 and 9.23.4.2, which provide maximum allowable spans for various lumber sizes, species groups, grades, and on-centre spacings.\n\nThe most common lumber species used for floor joists in Canada is SPF (Spruce-Pine-Fir), which dominates the Canadian softwood market due to its availability, strength-to-weight ratio, and cost-effectiveness. SPF is graded under NLGA (National Lumber Grades Authority) standards, with No. 2 grade being the minimum acceptable for structural framing. Standard dimensional sizes are 38 × 184 mm (2×8), spanning up to approximately 3.6 m (12 ft); 38 × 235 mm (2×10), spanning up to about 4.5 m (15 ft); and 38 × 286 mm (2×12), spanning up to roughly 5.5 m (18 ft) — all at 400 mm (16 in) on-centre spacing with standard residential loads (1.9 kPa live load for floors).\n\nEngineered alternatives include I-joists (TJI), which are manufactured with oriented strand board (OSB) webs and laminated veneer lumber (LVL) flanges. I-joists offer superior span capability, lighter weight, and consistent dimensions compared to sawn lumber. They are available from Canadian manufacturers such as Weyerhaeuser (Trus Joist), Tolko, and LP Building Solutions, in depths from 241 mm (9-1/2 in) to 406 mm (16 in), spanning over 6 m (20 ft) without intermediate support.\n\nJoists are typically spaced at 400 mm (16 in) on centre, which provides a stiff, bounce-free floor suitable for all finish materials including ceramic tile and stone. Spacing of 600 mm (24 in) on centre is permitted under the NBC with thicker subfloor panels (minimum 18.5 mm tongue-and-groove OSB or plywood) but produces a noticeably less rigid floor.\n\nCurrent pricing in Canada ranges from approximately CAD $10 to $30 per piece for dimensional lumber joists depending on size and region, while engineered I-joists cost CAD $4 to $8 per linear foot. Lumber is available at Home Depot Canada, RONA, Home Hardware, Castle Building Centres, and regional yards. For a typical 130 m² (1,400 sq ft) floor system, expect to spend CAD $1,200 to $3,000 on joists before labour.",
  nextSteps: [
    { label: "Rim Joist Calculator", href: "/calculators/floor-framing/rim-joist-calculator/" },
    { label: "Bridging Calculator", href: "/calculators/floor-framing/bridging-calculator/" },
    { label: "Joist Hanger Calculator", href: "/calculators/hardware/joist-hanger-calculator/" },
  ],
  installationTips: [
    "Crown all joists the same way (crown up) for a flat floor — sight down the edge of each board to identify the bow.",
    "Use joist hangers (Simpson or MiTek) at beam connections — toe-nailing alone does not meet NBC requirements for lateral support.",
    "Install solid blocking or cross-bridging at mid-span and at bearing points per NBC Section 9.23.9.",
    "Leave a 10 mm (3/8 in) gap between joist ends and foundation walls to allow for wood expansion in humid Canadian seasons.",
    "Apply construction adhesive (PL Premium or similar) to joist tops before laying subfloor panels to reduce squeaks.",
  ],
  commonMistakes: [
    "Not crowning joists consistently — some up, some down — causes an uneven, wavy floor surface.",
    "Under-sizing joists for the span — always check NBC Part 9 span tables for your specific species, grade, and loading.",
    "Forgetting to add the extra starter joist at the beginning of the layout.",
    "Using lumber graded below No. 2 (such as utility or economy grade) for structural floor joists — these do not meet NBC requirements.",
    "Cutting or notching joists beyond the limits in NBC Section 9.23.4.6, which reduces structural capacity and voids the span rating.",
  ],
  faqs: [
    { question: "Should I use 16\" or 24\" floor joist spacing?", answer: "In Canada, 400 mm (16 in) on-centre spacing is the standard for residential floors and produces a noticeably stiffer floor. The NBC permits 600 mm (24 in) spacing with thicker subfloor, but this is generally reserved for utility areas, storage rooms, or budget-conscious projects. For any floor that will receive ceramic tile, stone, or engineered hardwood, use 16-inch spacing to prevent flexion cracking in the finish material." },
    { question: "What size floor joists do I need?", answer: "Joist size depends on the unsupported span, species, grade, and loads. Under the NBC Part 9 span tables for SPF No. 2 at 400 mm (16 in) on centre: 2×8 spans approximately 3.6 m (12 ft), 2×10 spans about 4.5 m (15 ft), and 2×12 spans roughly 5.5 m (18 ft). For longer spans, use engineered I-joists or LVL beams to eliminate the need for intermediate bearing walls." },
    { question: "What size floor joists for a 12 foot span Canada?", answer: "For a 12-foot (3.66 m) span in Canadian residential construction, a 2×8 SPF No. 2 joist at 400 mm (16 in) on centre is at its maximum limit under NBC Part 9 span tables. A 2×10 provides a more comfortable margin and a stiffer floor with less bounce. For heavy loads (tile floors, large aquariums, libraries), step up to 2×10 or consider engineered I-joists. Always verify against the specific NBC span table for your lumber species and grade." },
    { question: "How far apart are floor joists in Canada?", answer: "The standard joist spacing in Canadian residential construction is 400 mm (16 inches) on centre, which complies with NBC Part 9 and provides a stiff, solid floor. Spacing of 600 mm (24 in) on centre is permitted but requires thicker subfloor sheathing (minimum 18.5 mm T&G) and produces a floor that may feel bouncy, especially with heavy finish materials. Some provincial codes may have additional requirements — check with your local building department." },
    { question: "Do I need engineered floor joists?", answer: "Engineered I-joists (TJI) are not required by the NBC, but they offer significant advantages for spans over 4.5 m (15 ft), open-concept floor plans, and situations where consistent depth and straightness are critical. I-joists are lighter than dimensional lumber, do not twist, shrink, or crown, and come in depths up to 406 mm (16 in) to span over 6 m (20 ft). They are widely available from Canadian suppliers like Weyerhaeuser, Tolko, and LP. The main drawback is cost — roughly 20 to 40 percent more than sawn lumber — and the need for web stiffeners at bearing points." },
    { question: "What is the NBC requirement for floor joist spacing?", answer: "The National Building Code of Canada (NBC) Part 9 permits floor joist spacing of 400 mm (16 in), 300 mm (12 in), or 600 mm (24 in) on centre, with maximum allowable spans varying by spacing, lumber size, species, and grade. The span tables in NBC Tables 9.23.4.1 (for bedrooms and attics) and 9.23.4.2 (for all other areas with 1.9 kPa live load) provide the specific maximums. Most builders default to 400 mm (16 in) on centre as the best balance of material cost and floor stiffness. Provincial building codes (such as the OBC in Ontario or the BCBC in British Columbia) adopt the NBC tables with occasional local amendments." },
    { question: "How much do floor joists cost in Canada?", answer: "Dimensional SPF lumber joists cost approximately CAD $10 to $30 each depending on size, length, and regional pricing. A 2×10×12 ft typically runs CAD $15 to $22. Engineered I-joists cost CAD $4 to $8 per linear foot. For a typical 130 m² (1,400 sq ft) floor system using 2×10 at 16-inch spacing, expect to spend CAD $1,200 to $2,500 on joists alone. Lumber prices in Canada fluctuate with the softwood market — check current pricing at Home Depot Canada, RONA, or your local building supply yard." },
  ],
};
// ─── OUTDOOR ────────────────────────────────────────────────────────────────

export const postHoleCalculator: CalculatorSEOContent = {
  disclaimer: "This calculator estimates concrete volume for cylindrical post holes. Actual usage may vary based on soil conditions, gravel base, and post size.",
  howToUse: [
    "Enter the hole diameter in inches — 8 inches for 4×4 posts, 10–12 inches for 6×6 posts.",
    "Enter the hole depth in inches — fence posts typically need 24–36 inches, structural posts 36–48 inches (below the frost line).",
    "Enter the total number of holes.",
    "Click Calculate for volume per hole, total volume, and bag counts.",
  ],
  materialInfo:
    "Post holes are cylindrical excavations filled with concrete to anchor fence posts, mailbox posts, deck supports, signs, pergolas, and other outdoor structures. The concrete encases the post base and transfers loads into the surrounding soil, preventing the post from shifting, leaning, or heaving due to wind, frost, or lateral force.\n\nFor fence posts, the standard rule is to bury one-third of the total post length. A 6-foot fence using 8-foot posts should have 24 to 30 inches buried in concrete. For 4×4 posts, an 8-inch diameter hole is sufficient. For 6×6 posts or gate posts bearing heavier lateral loads, use a 10 to 12-inch hole.\n\nIn Canada, frost depth is the critical factor. The NBC and provincial codes require post foundations to extend below the local frost line: 1.2 m (48 in) in southern Ontario, 1.5 m (60 in) in the Prairies, and up to 2.1 m (84 in) in northern regions. Fence posts in most of Canada should be set at least 900 mm (36 in) deep, and structural posts (decks, pergolas, carports) must reach below the published frost depth.\n\nQuikrete fast-setting concrete is widely available at Home Depot Canada, RONA, and local building supply yards. A 30 kg bag fills approximately 0.014 m³ (0.5 cu ft). For large projects, 80 lb (36 kg) bags fill approximately 0.017 m³ (0.6 cu ft) and cost CAD $7–10 per bag. Standard ready-mix bags cost CAD $5–8 for 30 kg.\n\nBefore pouring concrete, add 100–150 mm of gravel at the bottom of each hole for drainage. Crown the concrete above grade and slope it away from the post to shed water.",
  nextSteps: [
    { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Gravel Calculator", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Dig holes 3 to 4 times the width of the post — an 8-inch hole for a 4×4 post, 10–12 inches for a 6×6 post.",
    "Add 100–150 mm of gravel at the bottom of each hole for drainage before setting the post.",
    "Plumb the post on two adjacent sides with a level and brace it with 2×4 stakes before pouring concrete.",
    "Crown the concrete 25–50 mm above grade, sloping away from the post to shed water.",
    "Allow at least 24–48 hours before attaching fence rails, brackets, or loads to the post.",
  ],
  commonMistakes: [
    "Setting posts above the frost line — in Canada, frost heave is the primary cause of leaning fences and shifted deck posts; always dig below the published frost depth.",
    "Skipping the gravel base — without drainage at the bottom, water pools around the post base and accelerates rot.",
    "Not bracing posts plumb before the concrete sets — once cured, correcting a leaning post requires breaking out the concrete.",
    "Pouring concrete below grade level — the top should crown above ground to prevent water pooling against the post.",
    "Using too small a hole diameter — insufficient concrete cannot resist lateral forces from wind or gate operation.",
  ],
  faqs: [
    { question: "How much concrete for a fence post in Canada?", answer: "A standard 4×4 fence post in an 8-inch hole at 36 inches deep (typical Canadian frost depth) requires about 0.87 cubic feet of concrete — roughly 2 bags of 30 kg Quikrete per post. For a 6×6 post in a 10-inch hole at 48 inches deep, you need about 1.8 cubic feet per post." },
    { question: "How deep should fence posts be in Canada?", answer: "Fence posts in Canada should be set at least 900 mm (36 in) deep in most regions. In the Prairies and northern Ontario, 1.2–1.5 m (48–60 in) is required to get below the frost line. Check your local building code or municipal requirements for the exact frost depth in your area." },
    { question: "How many bags of concrete per fence post Canada?", answer: "For a 4×4 post at 36 inches deep in an 8-inch hole: 2 bags of 30 kg Quikrete. For 48-inch depth: 3 bags. Quikrete fast-setting mix can be poured dry into the hole and wetted — no mixing required." },
    { question: "Can I use fast-setting concrete for post holes?", answer: "Yes — Quikrete Fast-Setting Concrete Mix sets in 20–40 minutes. Pour the dry mix around the post, add water, and hold plumb. Full strength in about 4 hours. Widely available at Home Depot Canada, RONA, and local yards. For structural posts, standard mix with 24-hour cure is stronger." },
    { question: "How do I calculate concrete for post holes?", answer: "Post holes are cylinders: volume = π × r² × depth. Convert inches to feet. Example: 10-inch diameter, 36 inches deep: r = 5 in = 0.417 ft, depth = 3 ft. Volume = 3.14 × 0.417² × 3 = 1.64 cu ft. Divide by 0.5 for 30 kg bags or 0.6 for 80 lb bags." },
    { question: "What size hole for a mailbox post in Canada?", answer: "A Canada Post community mailbox pad typically requires a 200 mm (8 in) hole, 600 mm (24 in) deep. For a standalone rural mailbox post, use a 4×4 pressure-treated post in an 8-inch hole at 36 inches deep with gravel drainage base." },
  ],
};

// ─── RETAINING WALL ─────────────────────────────────────────────────────────

export const retainingWallCalculator: CalculatorSEOContent = {
  disclaimer: "This estimate includes a 10% waste factor for blocks. Actual gravel and drainage requirements depend on soil conditions, water table, and local code. Walls over 1.2 m (4 ft) typically require engineering and permits in Canada.",
  howToUse: [
    "Measure the total length of your retaining wall in feet.",
    "Enter the desired wall height in feet — most landscape walls are 2 to 4 feet.",
    "Select your block type: landscape block for decorative walls, CMU for structural, or natural stone for a rustic look.",
    "Click Calculate for block count, cap blocks, gravel backfill, and drainage estimates.",
  ],
  materialInfo:
    "Retaining walls hold back soil on sloped terrain and create level areas for landscaping, patios, driveways, and garden beds. The three most common materials are interlocking landscape blocks, concrete masonry units (CMU), and natural stone.\n\nLandscape blocks (such as Barkman, Permacon, or Pavestone) are the most popular choice for DIY retaining walls up to 1.2 m (4 ft) in Canada. Standard blocks measure 300 mm long by 100 mm high by 200 mm deep and weigh 11 to 16 kg each. They interlock with a lip or pin system that creates a natural setback for stability. Typical cost is CAD $3 to $7 per block, or CAD $20 to $45 per square foot of wall face installed.\n\nIn Canada, frost depth is a critical factor for retaining wall footings. The base trench must extend below the frost line — 1.2 m in southern Ontario, 1.5 m in the Prairies, and up to 2.1 m in northern regions — or use a free-draining gravel base that prevents frost heave. Most building departments require a permit for walls over 1.2 m (4 ft). Walls near property lines may also need a site survey.\n\nAll retaining walls require proper drainage behind the wall: a layer of 19 mm clear crushed stone, a 100 mm perforated drain pipe at the base, and drain outlets at regular intervals. Cap blocks are glued with construction adhesive at approximately 1 tube per 7.5 linear metres. Expect to pay CAD $25 to $50 per linear metre for materials on a standard landscape block wall.",
  nextSteps: [
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Gravel Calculator", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Mortar Mix Calculator", href: "/calculators/foundation/mortar-mix-calculator/" },
  ],
  installationTips: [
    "Excavate a trench 150 to 200 mm deep and 600 mm wide for the base course — compact the soil and add 150 mm of crushed gravel base.",
    "Level the first course carefully — every subsequent course follows the base. Use a 1.2 m level and rubber mallet.",
    "Backfill with 19 mm clear crushed stone behind the wall as you build each course.",
    "Install a 100 mm perforated drain pipe at the base of the wall, sloped 2% toward a daylight outlet.",
    "Stagger block joints by at least 100 mm between courses, similar to a running bond brick pattern.",
    "Glue cap blocks with landscape adhesive — apply a continuous bead along the top of the last course.",
  ],
  commonMistakes: [
    "Skipping the gravel base — without a compacted gravel foundation, the wall will settle and lean over time.",
    "Forgetting drainage — hydrostatic pressure from trapped water is the number one cause of retaining wall failure, especially after Canadian freeze-thaw cycles.",
    "Building over 1.2 m without engineering — most Canadian municipalities require stamped plans and permits for taller walls.",
    "Using topsoil or dirt as backfill — only clean crushed stone should go directly behind the wall for drainage.",
    "Not accounting for frost heave — ensure the base trench reaches below the frost line or uses a free-draining gravel pad.",
  ],
  faqs: [
    { question: "How many blocks do I need for a retaining wall in Canada?", answer: "For standard 300×100×200 mm landscape blocks, you need about 33 blocks per square metre of wall face. A 6 m long, 1 m high wall (6 m²) requires approximately 200 blocks plus 10% waste, for a total of about 220 blocks." },
    { question: "How much does a retaining wall cost in Canada?", answer: "Landscape blocks run CAD $20 to $45 per square foot of wall face installed. A typical 20-foot long, 3-foot high landscape block wall costs CAD $1,200 to $2,700 for materials only, or CAD $2,700 to $5,400 professionally installed." },
    { question: "Do I need a permit for a retaining wall in Canada?", answer: "Most Canadian municipalities require a building permit for retaining walls over 1.2 m (4 ft) tall. Some set the threshold at 1.0 m. Check with your local building department — walls near property lines may also require a survey." },
    { question: "How deep should a retaining wall footing be in Canada?", answer: "The base trench should be at least 150 mm deep with 150 mm of compacted gravel. In frost-prone areas (all of Canada), the footing should extend below the frost line or use a free-draining gravel base that prevents heave. Southern Ontario frost depth is 1.2 m; Prairies 1.5 m." },
    { question: "What is the best block for a retaining wall in Canada?", answer: "For DIY walls under 1.2 m, interlocking landscape blocks from Barkman, Permacon, or Pavestone are the best choice. They require no mortar, are widely available at Home Depot Canada, RONA, and local yards, and handle freeze-thaw cycles well." },
    { question: "How much gravel do I need behind a retaining wall?", answer: "Plan for a 300 mm wide zone of 19 mm clear crushed stone behind the entire wall face, plus 150 mm of compacted gravel in the base trench. For a 6 m long, 1 m high wall, this is roughly 2 cubic metres of gravel." },
  ],
};

// ─── EPOXY ──────────────────────────────────────────────────────────────────

export const epoxyCalculator: CalculatorSEOContent = {
  disclaimer: "Coverage rates vary by product, surface porosity, and application method. The default 250 sq ft per gallon is standard for most garage floor epoxies. Always follow the manufacturer's coverage guidelines.",
  howToUse: [
    "Measure the length and width of your floor in feet.",
    "Select 1 coat for a colour base or 2 coats for maximum durability.",
    "Adjust the coverage per gallon if your product specifies a different rate (default is 250 sq ft/gal).",
    "Click Calculate for gallons, kit count, and cost estimate.",
  ],
  materialInfo:
    "Epoxy floor coating is a two-part thermosetting resin (Part A resin + Part B hardener) that cures into a hard, chemical-resistant, glossy surface. It is the most popular garage floor coating in Canada and is also used in basements, workshops, commercial kitchens, and warehouses.\n\nThere are three main types. Water-based epoxy is the most DIY-friendly — low odour, easy cleanup, and costs CAD $50 to $80 per gallon kit covering 250 square feet. Solvent-based epoxy is more durable at CAD $70 to $120 per gallon. 100% solids epoxy is the professional-grade option at CAD $120 to $180 per gallon — it builds the thickest film but has a very short pot life.\n\nSurface preparation is the most critical step. The concrete must be clean, dry, and profiled for the epoxy to bond. Grinding or acid etching creates the surface profile needed for adhesion. New concrete must cure at least 28 days before coating. In Canada, moisture testing is especially important due to spring thaw conditions — tape a 600×600 mm plastic sheet to the floor for 24 hours and check for condensation.\n\nApplication temperature must be between 10°C and 32°C with concrete temperature above 13°C. Canadian garages can be challenging in spring and fall — plan application for warm, dry periods. Most two-coat systems are drive-on ready in 3 to 5 days. Products are widely available at Home Depot Canada, RONA, Canadian Tire, and specialty flooring suppliers.",
  nextSteps: [
    { label: "Paint Calculator", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
  ],
  installationTips: [
    "Perform a moisture test (tape a 600×600 mm plastic sheet to the floor for 24 hours) before starting — moisture causes epoxy failure.",
    "Grind or acid-etch the concrete to create a surface profile — epoxy will not bond to smooth, sealed, or painted concrete.",
    "Mix Part A and Part B thoroughly for the full time specified (usually 3 minutes), then let the mixture induct for the time on the label.",
    "Work in sections and keep a wet edge — epoxy self-levels but will show roller marks at seams if one section starts to set.",
    "Allow 12 to 24 hours between coats, and 72 hours before light foot traffic. Wait 5 to 7 days before parking vehicles.",
  ],
  commonMistakes: [
    "Skipping surface preparation — this is the number one cause of epoxy peeling and flaking.",
    "Applying over moisture — trapped moisture underneath causes bubbling and delamination. Spring thaw in Canada makes this especially risky.",
    "Working outside the temperature range — below 10°C the epoxy cures too slowly; above 32°C it cures too fast.",
    "Mixing too much product at once — epoxy generates heat as it cures. Large batches in a bucket can gel in minutes.",
    "Not applying a topcoat — bare epoxy yellows and chalks from UV exposure.",
  ],
  faqs: [
    { question: "How much epoxy do I need for a garage floor in Canada?", answer: "A standard 2-car garage is approximately 45 m² (480 sq ft). At 250 sq ft per gallon, you need about 2 gallons for one coat or 4 gallons for two coats. Plan on 2 kits for a single coat or 4 kits for a two-coat system." },
    { question: "How much does it cost to epoxy a garage floor in Canada?", answer: "DIY epoxy coating costs CAD $3 to $7 per square foot for materials. A 480 sq ft garage runs CAD $400 to $800 for a basic kit. Professional installation costs CAD $6 to $15 per square foot, or CAD $3,000 to $7,000 for a standard 2-car garage." },
    { question: "Is 1 coat of epoxy enough for a garage floor?", answer: "One coat provides acceptable coverage for light-use garages. Two coats deliver significantly better durability. If doing one coat, apply a clear polyurethane or polyaspartic topcoat for additional protection." },
    { question: "How long does epoxy floor coating last?", answer: "Properly applied epoxy lasts 5 to 10 years in a residential garage. Commercial-grade 100% solids epoxy with a polyaspartic topcoat can last 15 to 20 years." },
    { question: "Can I apply epoxy in a cold Canadian garage?", answer: "Epoxy requires a minimum concrete temperature of 13°C (55°F) and air temperature of 10°C (50°F). In Canada, plan your application for late spring through early fall. Use a space heater to warm the garage for 24 hours before and during application if needed." },
    { question: "Where can I buy epoxy floor coating in Canada?", answer: "Epoxy floor kits are available at Home Depot Canada, RONA, Canadian Tire, and specialty coatings suppliers. Rust-Oleum EpoxyShield and Behr Premium are popular consumer brands. For professional-grade products, check with local industrial coatings distributors." },
  ],
};

// ─── POND ───────────────────────────────────────────────────────────────────

export const pondCalculator: CalculatorSEOContent = {
  disclaimer: "Volume calculations are approximate — kidney and freeform shapes vary widely. Liner size includes 600 mm of overlap on each side for anchoring. Pump sizing assumes full circulation every 2 hours.",
  howToUse: [
    "Enter the maximum length of your pond in feet.",
    "Enter the maximum width in feet.",
    "Enter the deepest depth in feet — 2 to 3 feet for water gardens, 3 to 4 feet for koi ponds.",
    "Select the closest shape: rectangular, oval, or kidney.",
    "Click Calculate for volume, liner size, pump capacity, and underlayment needs.",
  ],
  materialInfo:
    "A backyard pond is an excavated water feature lined with a flexible or rigid material to hold water for ornamental fish, aquatic plants, or as a decorative focal point. In Canada, pond depth is critical — koi ponds must be at least 1.2 m (4 ft) deep to provide an unfrozen zone below the ice line during winter.\n\nEPDM rubber liners (45 mil) are the industry standard — flexible, UV-resistant, fish-safe, and lasting 20 to 30 years. Cost runs CAD $1.00 to $2.00 per square foot. PVC liners are cheaper at CAD $0.50 to $1.00 per square foot but have a shorter lifespan.\n\nPumps must circulate the entire volume every 2 hours minimum. In Canada, consider whether to run the pump year-round (with a de-icer or floating heater to keep an opening in the ice) or shut down for winter (removing the pump and adding a pond heater). Most Canadian pond keepers keep a small opening in the ice to allow gas exchange.\n\nFor Canadian winters, do not drain the pond completely — leave water in place to maintain the ecosystem. Add a pond de-icer (CAD $50–150) and keep at least 1.2 m depth for fish overwinter survival. Products are available at Home Depot Canada, Canadian Tire, and specialty pond suppliers like Laguna and Aquascape dealers.",
  nextSteps: [
    { label: "Gravel Calculator", href: "/calculators/foundation/gravel-calculator/" },
    { label: "Post Hole Calculator", href: "/calculators/outdoor/post-hole-calculator/" },
  ],
  installationTips: [
    "Locate the pond where it receives 4 to 6 hours of partial sunlight — full sun promotes excessive algae growth.",
    "Call your provincial One Call service (or 811) to mark underground utilities before digging.",
    "Dig shelves at 300 mm deep around the perimeter for marginal aquatic plants before excavating the full depth.",
    "Place a 50 mm layer of sand or geotextile underlayment fabric over the entire excavation before laying the liner.",
    "Fill the pond slowly with a garden hose, smoothing the liner as it fills.",
    "Run the pump and filter for at least 2 weeks before adding fish to allow beneficial bacteria to establish.",
  ],
  commonMistakes: [
    "Undersizing the liner — always calculate length + (2 × depth) + 2 ft for each dimension.",
    "Skipping the underlayment — roots and rocks puncture liners from below.",
    "Undersizing the pump — poor circulation leads to stagnant water and algae blooms.",
    "Not providing enough depth — in Canada, ponds less than 1.2 m deep will freeze solid and kill fish.",
    "Building too close to trees — falling leaves create organic buildup that depletes oxygen.",
  ],
  faqs: [
    { question: "How many gallons is my pond?", answer: "For rectangular ponds: length × width × depth (in feet) × 7.48 = gallons. For oval ponds, multiply by 0.8. For kidney shapes, multiply by 0.7. Example: a 10×8×3 ft rectangular pond holds about 1,795 gallons." },
    { question: "What size pond liner do I need?", answer: "Liner size = (length + 2 × depth + 2 ft) by (width + 2 × depth + 2 ft). For a 10×8×3 ft pond, the liner should be at least 18 ft × 16 ft (288 sq ft)." },
    { question: "How deep should a pond be for fish in Canada?", answer: "Water gardens with goldfish need a minimum depth of 900 mm (3 ft) in Canada. Koi ponds should be at least 1.2 m (4 ft) deep to ensure an unfrozen zone below the ice line during winter." },
    { question: "Can fish survive winter in a Canadian pond?", answer: "Yes, if the pond is at least 1.2 m deep and you keep an opening in the ice for gas exchange. Use a floating pond de-icer or heater (CAD $50–150) to maintain an air hole. Do not break ice by force — the shock waves can harm fish." },
    { question: "What size pump do I need for my pond?", answer: "Multiply your pond volume in gallons by 0.5 for the minimum GPH rating. A 2,000-gallon pond needs at least a 1,000 GPH pump. For koi ponds, use the full volume as your GPH target for hourly turnover." },
    { question: "How much does it cost to build a backyard pond in Canada?", answer: "A simple 500-gallon water garden costs CAD $700 to $2,000 DIY. A 1,000 to 2,000-gallon pond with pump, filter, and stone edging runs CAD $2,000 to $6,000 DIY or CAD $7,000 to $20,000 professionally installed." },
  ],
};

// ─── STAIRS ──────────────────────────────────────────────────────────────────

export const stairCalculator: CalculatorSEOContent = {
  disclaimer: "This calculator provides estimates based on NBC 9.8.2 requirements. Always verify with your local building department. Maximum riser height is 200 mm (7-7/8\") and minimum tread run is 235 mm (9-1/4\") per NBC.",
  howToUse: ["Measure the total rise from finished floor to finished floor in inches or mm.", "Enter the desired tread run (235 mm / 9-1/4\" minimum per NBC).", "Enter the stair width (860 mm / 34\" minimum for residential per NBC).", "Click Calculate for step count, riser height, tread depth, and stringer length."],
  materialInfo: "Stair construction involves several key components: stringers, treads, risers, and handrails. Stringers are the diagonal structural members, typically cut from 2×12 SPF lumber for straight runs. The NBC Section 9.8.2 governs residential stair design: maximum riser height 200 mm (7-7/8\"), minimum tread run 235 mm (9-1/4\"), and minimum width 860 mm (34\"). The comfort formula (rise + run = 430–460 mm) ensures comfortable climbing. Treads are commonly built from 5/4×12 lumber or 40 mm hardwood with a 20–30 mm nosing overhang. Risers use 1×8 boards. For exterior stairs, pressure-treated SPF (commonly available at Home Depot Canada, RONA, Home Hardware, and Castle) resists rot and weathering. Interior stairs often use hardwood treads (oak, maple, birch) for durability. A standard interior staircase costs CAD $2,000–6,000 in materials for a straight run. Premium hardwood treads add 30–50%. Always verify headroom of at least 1,950 mm (6'5\") per NBC. Canadian winters require anti-slip treads and proper drainage at the base of exterior stairs. SPF lumber is the standard framing material across Canada.",
  nextSteps: [{ label: "Stair Stringer Calculator", href: "/calculators/stairs/stair-stringer-calculator/" }, { label: "Rise Over Run Calculator", href: "/calculators/stairs/rise-over-run-calculator/" }, { label: "Stair Landing Calculator", href: "/calculators/stairs/stair-landing-calculator/" }, { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator/" }],
  installationTips: ["Always use a framing square with stair gauges clamped at the rise and run dimensions for consistent cuts.", "Drop the bottom riser by the thickness of one tread to keep all visible rises equal.", "Attach stringers to the header joist with metal stringer connectors (Simpson LSC or equivalent).", "Pre-drill all screw holes in treads and risers to prevent splitting.", "Install a temporary rail during construction for safety while working on the stairs."],
  commonMistakes: ["Not accounting for finished floor thickness at top and bottom — this changes the first and last riser height.", "Inconsistent riser heights — NBC allows a maximum 6 mm variance. Uneven rises are a tripping hazard.", "Using 2×10 (50×250 mm) stringers instead of 2×12 (50×300 mm) — insufficient structural material after notching.", "Forgetting headroom clearance — measure 1,950 mm (6'5\") vertically from each tread nosing to the ceiling.", "Not checking provincial building code amendments — provinces may have stricter requirements than NBC."],
  faqs: [
    { question: "How do I calculate the number of stairs I need?", answer: "Measure the total rise (vertical distance from finished floor to finished floor) and divide by the ideal riser height of 170–190 mm (6-3/4\" to 7-1/2\"). Round to the nearest whole number. Example: 2,700 mm / 190 mm = 14.2, round to 14 risers and 13 treads. The upper floor serves as the final step." },
    { question: "What is the NBC building code for residential stairs?", answer: "NBC 9.8.2 requires: maximum riser height 200 mm (7-7/8\"), minimum tread run 235 mm (9-1/4\"), minimum width 860 mm (34\"), minimum headroom 1,950 mm (6'5\"), and handrails between 865 and 1,070 mm (34\"–42\") high. Maximum variation between risers is 6 mm." },
    { question: "What is the ideal stair angle?", answer: "The ideal angle is between 30° and 37°, corresponding to a rise of about 170–190 mm with a 250–280 mm run. This provides the most comfortable and safe climbing. Stairs steeper than 42° become difficult." },
    { question: "How long of a stringer do I need?", answer: "Stringer length = square root of (total rise² + total run²). Example: 2,700 mm rise and 3,250 mm run gives √(2,700² + 3,250²) ≈ 4,223 mm (about 14 ft). Buy lumber at least 300 mm longer." },
    { question: "How much does it cost to build stairs in Canada?", answer: "Interior staircase: CAD $2,000–6,000 in materials. Exterior: CAD $600–2,500. Professional installation adds 50–100% to material costs. Premium hardwood treads (oak, maple) add 30–50%." },
    { question: "How many stringers do I need?", answer: "Maximum 600 mm (24\") on centre spacing, 400 mm (16\") recommended. For a standard 860 mm (34\") wide stair: 3 stringers. Over 1,200 mm: 4 stringers." },
  ],
};

export const stairStringerCalculator: CalculatorSEOContent = {
  disclaimer: "Stringer calculations assume standard notch-cut stringers from 2×12 SPF lumber. Always verify that remaining wood after notching is at least 90 mm (3-1/2\"). Check your provincial building code for spacing requirements.",
  howToUse: ["Enter the total rise of the staircase.", "Enter the run per step (235 mm / 9-1/4\" minimum per NBC).", "Enter the total number of steps (use the Stair Calculator to determine this).", "Enter the stair width to calculate the number of stringers needed."],
  materialInfo: "Stair stringers are the backbone of any staircase. Standard stringers are cut from 2×12 SPF lumber, providing enough material for notch cuts while maintaining the required 90 mm (3-1/2\") of uncut wood. For exterior use, pressure-treated SPF 2×12 is standard — commonly available at Home Depot Canada, RONA, Home Hardware, and Castle Building Centres. Never use 2×10 for notched stringers. Closed stringers with routed housings can use 2×10 or engineered lumber. Metal stringer brackets eliminate notch-cutting. Pre-made steel stringers cost CAD $50–100 each. A 2×12×16 ft SPF board costs CAD $25–55 depending on grade. Budget CAD $75–250 per staircase for stringer lumber alone. In colder Canadian climates, use ACQ or CA-C treated lumber rated for ground contact on exterior stringers.",
  nextSteps: [{ label: "Stair Calculator", href: "/calculators/stairs/stair-calculator/" }, { label: "Rise Over Run Calculator", href: "/calculators/stairs/rise-over-run-calculator/" }, { label: "Lumber Cost Calculator", href: "/calculators/hardware/lumber-cost-calculator/" }],
  installationTips: ["Use a framing square with stair gauges for repeatable cuts.", "Make all cuts with a circular saw and finish corners with a handsaw — do not overcut.", "Test-fit the first stringer before cutting the rest.", "Use metal stringer hangers (Simpson LSC) at the top connection."],
  commonMistakes: ["Overcutting notches with circular saw — finish with handsaw.", "Using 2×10 instead of 2×12 — insufficient material after notching.", "Not dropping bottom riser by one tread thickness.", "Spacing stringers too far apart — max 600 mm (24\") on centre."],
  faqs: [
    { question: "What size lumber for stair stringers in Canada?", answer: "Use 2×12 SPF (Spruce-Pine-Fir) for notched stringers. After notching, at least 90 mm (3-1/2\") of uncut wood must remain. A 2×12 (actual 286 mm) provides enough material. Never use 2×10." },
    { question: "How many stringers for 860 mm (34\") wide stairs?", answer: "3 stringers: one on each outside edge and one centred. Spacing about 430 mm on centre. Over 1,200 mm wide: 4 stringers." },
    { question: "How do you cut stair stringers?", answer: "Mark rise and run on a 2×12 using a framing square with stair gauges. Cut with circular saw, finish corners with handsaw. Drop bottom riser by one tread thickness." },
    { question: "Can I use a 2×10 for stringers?", answer: "No, not for notched stringers. After a typical 190 mm notch from a 2×10 (actual 235 mm), only ~45 mm remains. Only use 2×10 for closed stringers with metal brackets." },
    { question: "How far apart should stringers be?", answer: "Maximum 600 mm (24\") on centre, 400 mm (16\") recommended. Closer spacing reduces bounce and flex." },
    { question: "How much do stringers cost in Canada?", answer: "A 2×12×16 ft SPF board costs CAD $25–55. Treated for exterior: CAD $35–70. Steel pre-made: CAD $50–100 each. For a 3-stringer staircase: CAD $75–210 for stringer lumber." },
  ],
};

export const riseOverRunCalculator: CalculatorSEOContent = {
  disclaimer: "Rise over run calculations work for stairs, ramps, roofs, and any sloped surface. NBC requires max 200 mm rise and min 235 mm run for stairs. For barrier-free ramps: max 1:12 slope.",
  howToUse: ["Enter the rise (vertical height).", "Enter the run (horizontal distance).", "Click Calculate for slope ratio, percentage, angle, and description.", "Works for stairs, ramps, roofs, driveways, and any sloped surface."],
  materialInfo: "Rise over run is the fundamental slope measurement. For stairs, rise is the vertical height per step and run is the horizontal tread depth. NBC specifies max 200 mm rise and min 235 mm run. The comfort formula (rise + run = 430–460 mm) ensures comfortable climbing. For roof pitch, the ratio is expressed per 12 inches of run (e.g., 6:12). For barrier-free ramps per NBC and CSA B651, maximum slope is 1:12 (8.33%). Driveways should not exceed 15% gradient. In Canadian winter conditions, gentler slopes are recommended for exterior stairs and ramps to reduce ice-related slip hazards. Understanding rise over run helps verify compliance, calculate material lengths, and ensure safety.",
  nextSteps: [{ label: "Stair Calculator", href: "/calculators/stairs/stair-calculator/" }, { label: "Stair Stringer Calculator", href: "/calculators/stairs/stair-stringer-calculator/" }, { label: "Roof Pitch Calculator", href: "/calculators/roofing/roof-pitch-calculator/" }],
  installationTips: ["Check rise and run with a spirit level after installation.", "Verify all risers are within 6 mm of each other per NBC.", "Use a digital angle finder to confirm angles.", "For ramps, check slope at multiple points."],
  commonMistakes: ["Confusing rise with run.", "Not accounting for finished floor thickness.", "Mixing imperial and metric units.", "Forgetting roof pitch uses 12 inches as the standard run."],
  faqs: [
    { question: "What is rise over run?", answer: "The ratio of vertical height to horizontal distance. E.g., 190 mm rise over 250 mm run = 0.76, 76%, or 37.2°." },
    { question: "Comfortable rise and run?", answer: "Rise + run = 430–460 mm. E.g., 190 mm rise with 250 mm run = 440 mm — ideal comfort." },
    { question: "Maximum ramp slope in Canada?", answer: "NBC and CSA B651: 1:12 (8.33%) for barrier-free ramps. Short ramps under 75 mm rise may use 1:8." },
    { question: "How to convert to degrees?", answer: "Angle = arctan(rise/run) × 180/π. E.g., 190/250 = arctan(0.76) = 37.2°." },
    { question: "Maximum driveway slope?", answer: "15% recommended. Some municipalities allow 25% on short sections. In icy conditions, 10% is safer." },
    { question: "What slope for stairs?", answer: "30°–37° ideal. Rise 170–190 mm with 250–280 mm run." },
  ],
};

export const spiralStaircaseCalculator: CalculatorSEOContent = {
  disclaimer: "Spiral staircases must comply with NBC 9.8.7. Min clear width 660 mm (26\"), headroom 1,900 mm (6'3\"), max rise 240 mm (9-1/2\"). Check with your local building department.",
  howToUse: ["Measure the floor-to-floor height.", "Enter the well opening diameter.", "Enter total rotation in degrees (360° for one full turn).", "Click Calculate for tread count, rise per step, and dimensions."],
  materialInfo: "Spiral staircases fit in circular openings from 1,100 mm (44\") diameter, though 1,500 mm (60\") is recommended. NBC 9.8.7 requires: min 660 mm (26\") clear width from centre column to inner handrail, max 240 mm (9-1/2\") rise, min 190 mm (7-1/2\") tread depth at 300 mm from narrow edge, identical treads. Headroom min 1,900 mm (6'3\"). Steel kits cost CAD $2,000–7,000. Custom wood or wrought iron: CAD $7,000–30,000+. The centre column must be anchored with lag bolts. Most spirals turn clockwise ascending. In Canada, spiral stairs may serve as a secondary staircase — check your provincial code for primary stair requirements.",
  nextSteps: [{ label: "Stair Calculator", href: "/calculators/stairs/stair-calculator/" }, { label: "Rise Over Run Calculator", href: "/calculators/stairs/rise-over-run-calculator/" }],
  installationTips: ["Verify opening is perfectly circular and level.", "Anchor centre column base plate with at least four 1/2\" lag bolts.", "Assemble treads bottom-up checking level and rotation at each step.", "Install handrail continuously — gaps are a safety hazard."],
  commonMistakes: ["Too small diameter — 1,100 mm (44\") is minimum but very tight. Choose 1,500 mm (60\") for daily use.", "Non-circular opening creates uneven tread spacing.", "Forgetting landing platform at the top.", "Ignoring furniture-moving challenges."],
  faqs: [
    { question: "Minimum diameter in Canada?", answer: "NBC requires 660 mm (26\") clear width. Opening minimum ~1,100 mm (44\"), but 1,500 mm (60\") strongly recommended." },
    { question: "How many treads?", answer: "Depends on height and max rise (240 mm / 9-1/2\"). For 2,700 mm (9 ft): min 12 treads." },
    { question: "Are spiral stairs code-compliant in Canada?", answer: "Yes, per NBC 9.8.7 with specific requirements. Some provinces restrict them to secondary access." },
    { question: "Cost in Canada?", answer: "Steel kit: CAD $2,000–7,000. Custom: CAD $7,000–30,000+. Installation: CAD $1,000–5,000." },
    { question: "Can it be the only stair?", answer: "Depends on provincial code. NBC allows it in some cases for single-family homes. Check with your municipality." },
    { question: "Which direction?", answer: "Usually clockwise ascending. Design choice — consider upper floor layout." },
  ],
};

export const stairLandingCalculator: CalculatorSEOContent = {
  disclaimer: "Stairs with landings must meet all NBC 9.8.2 requirements for each flight. Landing must be at least as wide as the stairway and at least 860 mm (34\") deep. NBC may require landings for stairs exceeding 3,700 mm (12 ft) of vertical rise.",
  howToUse: ["Measure total rise from finished floor to finished floor.", "Enter landing depth (min 860 mm / 34\", matching stair width).", "Enter desired tread run (min 235 mm / 9-1/4\" per NBC).", "Click Calculate for steps per flight, landing height, and total run."],
  materialInfo: "Stair landings are intermediate platforms that break a long staircase into flights. NBC requires the landing to be at least as wide as the stair and at least 860 mm (34\") deep in the direction of travel. Landings provide rest points, allow direction changes (L-shaped and U-shaped stairs), and improve safety. Many provinces require a landing when vertical rise exceeds 3,700 mm (12 ft). Landings are framed like small floor sections using 2×10 or 2×12 joists. For L-shaped stairs (90° turn): landing typically 860×860 mm (34\"×34\"). For U-shaped (180° turn): wider landing. The landing surface matches the tread material. A landing adds CAD $300–1,000 in materials and CAD $500–1,500 in labour. In Canadian climates, exterior landings need proper drainage and snow-load considerations.",
  nextSteps: [{ label: "Stair Calculator", href: "/calculators/stairs/stair-calculator/" }, { label: "Stair Stringer Calculator", href: "/calculators/stairs/stair-stringer-calculator/" }, { label: "Rise Over Run Calculator", href: "/calculators/stairs/rise-over-run-calculator/" }],
  installationTips: ["Frame landing like a mini floor system — 2×10 or 2×12 joists at 16\" on centre.", "Secure to walls with ledger board and lag bolts.", "Must be perfectly level — check with 4-foot level.", "Build landing before cutting upper flight stringers."],
  commonMistakes: ["Landing too shallow — min 860 mm (34\") deep.", "Not treating as structural element.", "Unequal risers at landing transition.", "Forgetting landing thickness in height calculations."],
  faqs: [
    { question: "When do you need a landing in Canada?", answer: "Always at top and bottom of every stair. Many provinces require a landing when rise exceeds 3,700 mm (12 ft). Required at any direction change. Exterior stairs connecting to a door need a landing at least 860 mm deep." },
    { question: "How big should a landing be?", answer: "Min width of stair × 860 mm (34\") deep. For standard 860 mm wide stairs: 860×860 mm. U-stairs: full width of both flights." },
    { question: "L-shaped vs U-shaped stairs?", answer: "L: 90° turn with square landing. U: 180° turn with wider landing. U uses more width but less length." },
    { question: "How to calculate with a landing?", answer: "Total rise / ideal rise = total steps. Split equally between flights. Total run = both flights + landing depth." },
    { question: "Does landing count as a step?", answer: "No. It is a flat platform at the level of the last tread of the lower flight." },
    { question: "Landing cost in Canada?", answer: "Materials: CAD $300–1,000. Labour: CAD $500–1,500. L-shaped total extra: CAD $800–2,500. U-shaped: CAD $1,200–3,500." },
  ],
};

// ─── REBAR ──────────────────────────────────────────────────────────────────

export const rebarCalculator: CalculatorSEOContent = {
  disclaimer: "This estimate assumes a single-layer flat grid. Actual rebar requirements depend on engineering specifications, soil conditions, and local building code. Always consult a structural engineer for load-bearing and seismic applications.",
  howToUse: [
    "Enter the slab length and width in feet.",
    "Set the desired bar spacing — 12\" on centre is common for residential slabs.",
    "Select the rebar size: 10M for light duty, 15M for standard residential, 20M for structural.",
    "Click Calculate for bar count, linear feet, and total weight.",
  ],
  materialInfo:
    "Rebar (reinforcing bar) is deformed steel bar embedded in concrete to provide tensile strength that concrete alone cannot resist. Concrete is strong in compression but weak in tension — rebar bridges cracks and holds the slab together under load. The most common sizes for residential and light commercial work in Canada are: 10M (0.785 kg/m), 15M (1.570 kg/m), and 20M (2.355 kg/m). Standard rebar comes in 6-metre (20 ft) lengths from Canadian distributors. When a slab dimension exceeds 6 m, bars must be spliced with an overlap of at least 40 bar diameters — that is 600 mm for 15M rebar. Grade 400W (yield strength 400 MPa) is the standard per CSA G30.18 for residential construction across Canada. It is available in plain (black) carbon steel, epoxy-coated (green) for corrosive environments, and galvanized for marine or de-icing salt exposure. Epoxy-coated rebar costs roughly 30–50% more but is required by many provincial codes for garage slabs and driveways exposed to road salt — especially important in provinces like Ontario, Quebec, and the Prairies with heavy winter salt use. Typical spacing is 300 mm (12\") on centre in both directions for 100 mm residential slabs, 450 mm for lightly loaded patios, and 200 mm for driveways or structural slabs. Rebar must be elevated off the sub-base on wire chairs or plastic rebar supports so it sits in the lower third of the slab thickness. Current pricing runs CAD $0.80 to CAD $1.50 per linear foot for 15M rebar, or roughly CAD $16 to CAD $30 per 6 m stick.",
  nextSteps: [
    { label: "Rebar Spacing Calculator", href: "/calculators/foundation/rebar-spacing-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Place rebar on wire chairs or plastic supports so it sits in the lower third of the slab — never lay bars directly on the ground.",
    "Overlap splices by 40 bar diameters (600 mm for 15M) and secure with tie wire at every intersection.",
    "Tie every rebar intersection with 16-gauge tie wire using a rebar tier or manual twisting tool.",
    "Keep a minimum 75 mm of concrete cover for slabs on grade per CSA A23.1.",
    "Cut rebar with a rebar cutter or reciprocating saw with a metal blade — never use a torch, which weakens the steel.",
    "Bend rebar cold using a manual or hydraulic rebar bender — heating weakens the bar and voids engineering ratings.",
  ],
  commonMistakes: [
    "Laying rebar on the ground instead of elevating it on chairs — without proper placement the rebar provides no structural value.",
    "Insufficient splice overlap — splices shorter than 40 bar diameters will pull apart under load.",
    "Using the wrong rebar size — 10M is too light for driveways and garage slabs; use 15M minimum.",
    "Skipping tie wire at intersections — unsecured rebar shifts during the pour and ends up misaligned.",
    "Forgetting to account for waste — order 10–15% extra for cuts, bends, and overlaps.",
  ],
  faqs: [
    { question: "How much rebar do I need for a 20×20 ft slab?", answer: "A 20×20 ft slab with 15M rebar at 12\" on centre needs 21 bars running each direction — 42 bars total plus splice pieces, about 82 six-metre sticks. Total linear footage is approximately 840 feet, weighing around 400 kg. Add 10% waste for 92 sticks." },
    { question: "What size rebar for a 4-inch slab in Canada?", answer: "15M rebar is the standard choice for 100 mm (4\") residential concrete slabs including garage floors, basement slabs, and driveways. For lightly loaded patios, 10M may suffice. For structural slabs, step up to 20M or consult a structural engineer." },
    { question: "What spacing should I use for rebar?", answer: "The most common spacing is 300 mm (12\") on centre for standard 100 mm residential slabs. Use 450 mm for lightly loaded patios and 200 mm for driveways, garages, or structural applications." },
    { question: "How much does rebar cost in Canada?", answer: "15M rebar costs CAD $0.80–$1.50 per linear foot, or CAD $16–$30 per 6 m stick. A 20×20 ft slab needs ~82 sticks, costing CAD $1,312–$2,460 for materials. Epoxy-coated runs 30–50% more." },
    { question: "Do I need rebar or wire mesh?", answer: "Rebar is stronger and preferred for driveways, garage floors, structural slabs, and concrete over 100 mm thick. Welded wire mesh is acceptable for lightly loaded patios and non-structural slabs. In Canadian freeze-thaw climates, rebar provides far superior crack control." },
    { question: "How do I calculate rebar weight?", answer: "Multiply total linear metres by the weight per metre: 10M = 0.785 kg/m, 15M = 1.570 kg/m, 20M = 2.355 kg/m. Knowing the weight helps plan delivery." },
  ],
};

export const rebarSpacingCalculator: CalculatorSEOContent = {
  disclaimer: "Spacing recommendations are general guidelines for typical residential and light commercial use. Actual spacing must be determined by a licensed professional engineer based on loads, soil conditions, and provincial building code.",
  howToUse: [
    "Enter the slab length and width in feet.",
    "Select the rebar size — 15M is standard for most residential work.",
    "Choose the load type to get the recommended spacing.",
    "Click Calculate for optimal spacing, bar count, and support chair quantity.",
  ],
  materialInfo:
    "Rebar spacing determines how closely reinforcing bars are placed in a concrete slab, directly affecting the slab's load capacity and crack resistance. Proper spacing ensures that tensile forces are distributed evenly across the concrete section. For residential slabs (patios, basement floors, walkways), 450 mm on-centre spacing with 15M rebar is common. Driveways and garage floors typically use 300 mm spacing to handle vehicle loads without cracking. Structural slabs for equipment pads, commercial floors, or elevated decks require 200 mm spacing or tighter, per the structural engineer's design. Rebar chairs (bar supports) are essential to keep the rebar at the correct height within the slab. The standard rule is one chair per 0.4 square metres of slab area. Chairs come in several types: individual high chairs for single bars, continuous high chairs for long runs, and slab bolsters for mesh or mats. Plastic-tipped chairs are required when rebar will be near the concrete surface. The concrete cover — the distance from the rebar to the nearest concrete surface — must be at least 75 mm for slabs on grade per CSA A23.1. Insufficient cover leads to corrosion and spalling, especially in Canadian freeze-thaw climates where de-icing salts penetrate shallow cover within 5 to 10 years. For slabs over 6 m in either direction, bars must be spliced with a minimum lap of 40 bar diameters. Splices should be staggered so no more than 50% of bars are spliced at the same cross-section. Cost for rebar installation runs CAD $1.00–$2.00 per square foot for a standard 300 mm grid, including chairs and tie wire.",
  nextSteps: [
    { label: "Rebar Calculator", href: "/calculators/foundation/rebar-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Mark spacing lines on the forms with a lumber crayon before placing rebar.",
    "Set rebar chairs every 4 feet in both directions before laying any bars.",
    "Run bars in the long direction first, then cross-bars on top — tie every intersection.",
    "Keep 75 mm of concrete cover from the rebar to any edge or bottom of slab per CSA A23.1.",
    "For slabs with control joints, run rebar continuously through the joint.",
    "Walk the finished grid before the pour to check that no bars have been dislodged.",
  ],
  commonMistakes: [
    "Using too wide a spacing for the load type — 450 mm is too loose for driveways and garages.",
    "Placing chairs too far apart — unsupported rebar sags into the gravel base.",
    "Cutting rebar at control joints — joints are meant to crack; rebar must bridge them.",
    "Not staggering splices — all splices at the same location creates a weak plane.",
    "Ignoring concrete cover — less than 75 mm cover in Canadian winters leads to premature corrosion.",
  ],
  faqs: [
    { question: "What is the standard rebar spacing for a concrete slab in Canada?", answer: "300 mm (12\") on centre in both directions for 100 mm residential slabs. Patios: 450 mm. Driveways and garages: 300 mm. Structural: 200 mm or per engineer." },
    { question: "How many rebar chairs do I need?", answer: "1 chair per 0.4 m² (4 sq ft). A 20×20 ft slab (400 sq ft) needs ~100 chairs. Space chairs no more than 4 feet apart." },
    { question: "What happens if rebar spacing is too wide?", answer: "The slab develops wider cracks under load. This is especially problematic in Canada's freeze-thaw climate, where water infiltration accelerates deterioration." },
    { question: "Can I use wire mesh instead of rebar?", answer: "Wire mesh is acceptable for lightly loaded patios and slabs under 100 mm. Rebar is required for driveways, garages, and structural slabs — it provides far superior crack control in Canadian freeze-thaw conditions." },
    { question: "How does load type affect spacing?", answer: "Residential (foot traffic): 450 mm. Driveways (vehicles): 300 mm. Structural (equipment, commercial): 200 mm or tighter." },
    { question: "What is the minimum concrete cover in Canada?", answer: "CSA A23.1 requires 75 mm for slabs on grade. For formed surfaces not exposed to weather: 40 mm. For slabs exposed to de-icing salts (very common in Canada), 75 mm with epoxy-coated rebar is recommended." },
  ],
};

// ─── HIP ROOF ───────────────────────────────────────────────────────────────

export const hipRoofCalculator: CalculatorSEOContent = {
  disclaimer: "Hip roof geometry is approximate. Jack rafter lengths vary — cut each to fit. Add 10–15% waste factor for lumber.",
  howToUse: [
    "Measure the overall building length and width in feet (or metres).",
    "Enter the roof pitch (rise per 12 inches of run).",
    "Select your rafter spacing (16\" OC or 24\" OC).",
    "Click Calculate for rafter counts, hip rafter length, roof area, and ridge length.",
  ],
  materialInfo:
    "A hip roof has four sloped sides — two triangular ends and two trapezoidal sides — all meeting at a central ridge that is shorter than the building length. Because every wall is protected by an eave overhang, hip roofs offer superior wind resistance (they can withstand 110+ mph winds better than gables) and are preferred in regions with high wind exposure such as the Atlantic provinces and coastal British Columbia. Hip roofs are more complex to frame than gable roofs, requiring four hip rafters that run diagonally from each corner to the ridge, king common rafters centred on each triangular end, and numerous jack rafters. The hip rafter is typically one size larger than the common rafters (e.g., 2x10 hip with 2x8 commons) because it carries loads from jack rafters on both sides. Hip rafters require compound angle cuts. The ridge board on a hip roof runs only from where the two hip rafters on each end converge, so the ridge length equals the building length minus the building width. For a typical 30x40 ft (9x12 m) hip roof at 6/12 pitch, material costs run CAD $4,000 to $8,000 for SPF framing lumber alone, with professional framing labour adding CAD $5,000 to $10,000. All structural lumber must be graded SPF #2 or better per NBC and CSA O86.",
  nextSteps: [
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Roof Pitch Calculator", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Gable Roof Calculator", href: "/calculators/roofing/gable-roof-calculator/" },
  ],
  installationTips: [
    "Frame hip rafters from 2x stock one size deeper than common rafters for adequate bearing.",
    "Use a framing square or construction calculator to determine jack rafter compound angles.",
    "Install hip rafters first, then fill in jack rafters from longest to shortest.",
    "Bevel the top of hip rafters (drop the hip) so sheathing lies flat across the hip line.",
    "Brace hip rafters temporarily until sheathing is installed — they can twist under their own weight.",
  ],
  commonMistakes: [
    "Using the same lumber size for hip rafters as common rafters — hips carry double the load and need to be one size deeper.",
    "Not accounting for the hip rafter drop or bevel — sheathing will not lie flat and creates a hump at the hip.",
    "Forgetting that jack rafters require compound angle cuts, not simple plumb cuts.",
    "Underestimating material — hip roofs use 10–15% more lumber and sheathing than an equivalent gable roof.",
  ],
  faqs: [
    { question: "What is a hip roof?", answer: "A hip roof has four sloped sides that all slope downward toward the walls. The two longer sides are trapezoids and the two shorter sides are triangles. All four sides meet at a ridge that runs along the top but is shorter than the full building length. Hip roofs are more wind-resistant than gable roofs and provide eave protection on all four walls." },
    { question: "How do I calculate hip roof area?", answer: "Measure the building footprint (length x width) and multiply by the pitch multiplier for your roof slope. For a 6/12 pitch, the multiplier is 1.118. A 30x40 ft building with a 6/12 pitch has roughly 30 x 40 x 1.118 = 1,342 sq ft of roof area." },
    { question: "How many hip rafters does a hip roof have?", answer: "A standard hip roof has exactly 4 hip rafters — one running from each corner of the building diagonally up to the end of the ridge. Each hip rafter is longer than the common rafters because it runs at a 45-degree angle in plan view." },
    { question: "Hip roof vs gable roof — which is better for Canadian winters?", answer: "Hip roofs shed snow more evenly on all four sides and are more wind-resistant. Gable roofs are simpler and cheaper to frame but can accumulate snow drifts on the leeward side. In heavy snow regions (northern Ontario, Quebec, BC interior), hip roofs distribute snow load more uniformly." },
    { question: "How long is a hip rafter?", answer: "A hip rafter runs diagonally from the corner of the building to the ridge. Its horizontal run is the common rafter run times the square root of 2 (about 1.414). For a building 30 ft wide with a 6/12 pitch, the common rafter run is 15 ft, the hip run is 15 x 1.414 = 21.2 ft, and the hip rafter length is approximately 22.5 ft." },
    { question: "What is the ridge length on a hip roof?", answer: "The ridge length on a standard hip roof equals the building length minus the building width. For a 40x30 ft building, the ridge is 40 - 30 = 10 ft. If the building is square, there is no ridge — the four hip rafters meet at a single peak point, creating a pyramid roof." },
  ],
};

// ─── GAMBREL ROOF ───────────────────────────────────────────────────────────

export const gambrelRoofCalculator: CalculatorSEOContent = {
  disclaimer: "Gambrel roof proportions use a standard 67/33 lower/upper split. Actual proportions may vary based on design. Consult a professional engineer for final plans.",
  howToUse: [
    "Enter the building length and width in feet.",
    "Enter the lower (steep) pitch — typically 18/12 to 24/12 for the barn-style walls.",
    "Enter the upper (shallow) pitch — typically 4/12 to 8/12 for the cap.",
    "Select rafter spacing and click Calculate.",
  ],
  materialInfo:
    "A gambrel roof — commonly called a barn roof — features two distinct slopes on each side: a steep lower section (typically 60–70 degrees) and a shallower upper section (typically 20–30 degrees). This dual-slope design maximizes usable space inside the upper storey, making it the classic choice for barns, agricultural buildings, and heritage-style homes across Canada. The steep lower slope functions almost like a wall, providing full-height usable space in the loft. Structurally, the transition between the two slopes (the gambrel break) requires a horizontal purlin plate that acts as a structural ledge. Gambrel trusses can also be factory-built as a single engineered unit by Canadian truss manufacturers. The gambrel design uses about 20–30% less material than adding a full second storey with a conventional gable roof. Common lower pitches range from 18/12 to 24/12 (56° to 63°), while upper pitches range from 4/12 to 8/12. Material costs for a 30x40 ft gambrel frame run CAD $5,000 to $10,000 for SPF lumber. One drawback is wind and snow — the steep lower slope catches wind, and snow can accumulate at the transition point. Not recommended for extreme wind or heavy snow zones without engineering review per NBC Part 4.",
  nextSteps: [
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Gable Roof Calculator", href: "/calculators/roofing/gable-roof-calculator/" },
  ],
  installationTips: [
    "Build gambrel trusses on a flat surface (jig) to ensure consistency across all trusses.",
    "The purlin plate at the gambrel break is structural — use an adequate beam or doubled 2x stock.",
    "Install knee braces at the lower-to-upper transition for added rigidity.",
    "Sheathe across the gambrel break carefully — the angle change requires precise cuts.",
    "Use collar ties or ceiling joists in the upper section to prevent outward thrust.",
  ],
  commonMistakes: [
    "Undersizing the purlin plate at the slope transition — this carries significant structural loads.",
    "Not bracing the lower-to-upper transition — the break point is the weakest part of the gambrel.",
    "Using the same pitch on both sections — the lower must be significantly steeper than the upper to gain usable space.",
    "Ignoring wind and snow exposure — gambrel roofs perform poorly in high-wind areas and can accumulate snow at the transition.",
  ],
  faqs: [
    { question: "What is a gambrel roof?", answer: "A gambrel roof has two different slopes on each side — a steep lower slope (typically 60 to 70 degrees) and a shallow upper slope (typically 20 to 30 degrees). This barn-style design maximizes the usable interior space in the upper storey." },
    { question: "What pitches are used on a gambrel roof?", answer: "The lower (steep) section typically uses a pitch of 18/12 to 24/12 (56 to 63 degrees), while the upper (shallow) section uses 4/12 to 8/12 (18 to 33 degrees). A common combination is 20/12 lower and 6/12 upper." },
    { question: "How much extra space does a gambrel roof provide?", answer: "A gambrel roof provides approximately 70 to 80 percent of a full second-storey floor area, compared to about 40 to 50 percent for a standard gable roof attic." },
    { question: "Are gambrel roofs suitable for Canadian winters?", answer: "Gambrel roofs shed snow well on the upper slope but can accumulate snow at the transition point between the two slopes. In heavy snow regions (northern Ontario, Quebec, BC interior), engineering review is recommended. The steep lower face also catches wind." },
    { question: "What is the difference between a gambrel and a mansard roof?", answer: "A gambrel roof has two slopes on two sides of the building with gable ends on the other two sides. A mansard roof has two slopes on all four sides, like a hip-gambrel hybrid." },
    { question: "How much does a gambrel roof cost to build in Canada?", answer: "A gambrel roof costs 15 to 25 percent more than a simple gable roof. For a 30x40 ft building, expect CAD $6,000 to $12,000 for framing lumber and hardware, plus CAD $8,000 to $18,000 for professional labour." },
  ],
};

// ─── GABLE ROOF ─────────────────────────────────────────────────────────────

export const gableRoofCalculator: CalculatorSEOContent = {
  disclaimer: "Add 10–15% waste factor for cuts and overhangs. Rafter lengths do not include overhang — add 12–24 inches per rafter for eaves.",
  howToUse: [
    "Enter the building length (along the ridge) and width (across the gable) in feet.",
    "Enter the roof pitch (rise per 12 inches of run).",
    "Select your rafter spacing (16\" OC is standard for most residential).",
    "Click Calculate for rafter count, roof area, ridge length, and gable end area.",
  ],
  materialInfo:
    "A gable roof is the most common residential roof type in Canada, featuring two sloped sides that meet at a central ridge running the full length of the building. The triangular wall sections at each end — the gable ends — give this roof style its name. Gable roofs are popular because they are simple to design, economical on materials, and provide excellent rain and snow shedding. The two opposing slopes create natural ventilation when combined with soffit and ridge vents. Standard Canadian residential gable roofs use pitches from 4/12 to 8/12, with 6/12 being most common. Rafter sizes follow NBC and CSA O86 span tables — 2x6 (up to 10 ft run), 2x8 (up to 13 ft), 2x10 (up to 16 ft), and 2x12 (up to 20 ft) at 16\" OC in SPF #2 or better. The gable end walls must be sheathed and sided, adding material beyond the roof itself. For a 30x40 ft gable roof at 6/12 pitch, framing lumber typically costs CAD $3,500 to $7,000 in SPF, with labour adding CAD $5,000 to $10,000 for professional installation. In heavy snow regions, steeper pitches (8/12 to 12/12) help shed snow and reduce snow load on the structure.",
  nextSteps: [
    { label: "Ridge Board Calculator", href: "/calculators/roofing/ridge-board-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Hip Roof Calculator", href: "/calculators/roofing/hip-roof-calculator/" },
  ],
  installationTips: [
    "Cut a pattern rafter first and test-fit before cutting the full set.",
    "Use a speed square to mark consistent bird's mouth and plumb cuts.",
    "Install the ridge board on temporary supports before setting rafters.",
    "Work from both ends toward the centre when setting opposing rafter pairs.",
    "Install collar ties in the upper third of the rafters to prevent wall spread.",
  ],
  commonMistakes: [
    "Forgetting to add overhang length to the rafter measurement — add 12 to 24 inches per rafter beyond the wall.",
    "Not including gable end sheathing and siding in the material estimate.",
    "Using the building width as the rafter run — the run is half the width for each side.",
    "Omitting collar ties or ceiling joists — without them the rafters will push the walls outward over time.",
  ],
  faqs: [
    { question: "What is a gable roof?", answer: "A gable roof is the classic two-sided triangular roof shape formed by two sloped planes meeting at a central ridge. The vertical triangular wall sections at each end are called gable ends. It is the most common roof type in Canada." },
    { question: "How do I calculate gable roof area?", answer: "Multiply half the building width (the rafter run) by the pitch multiplier, then multiply by the building length to get one slope area. Double that for both sides. For a 30x40 ft building at 6/12 pitch: run = 15 ft, multiplier = 1.118, one side = 15 x 1.118 x 40 = 670.8 sq ft, total = 1,341.6 sq ft." },
    { question: "What pitch is best for a gable roof in Canada?", answer: "A 6/12 pitch is most popular for residential gable roofs, offering good balance of appearance and material efficiency. In heavy snow regions (northern Ontario, Quebec, BC mountains), steeper pitches of 8/12 to 12/12 help shed snow and reduce snow load." },
    { question: "How many rafters do I need for a gable roof?", answer: "Divide the building length by the rafter spacing (in feet), add one, then multiply by two for both sides. For a 40-foot building at 16\" OC: (40 / 1.333) + 1 = 31 per side, 62 total. Add 10% for waste." },
    { question: "Gable vs hip roof — which costs less?", answer: "Gable roofs cost 15 to 25 percent less than hip roofs because they use less lumber, have simpler cuts, and are faster to frame. However, gable roofs are less wind-resistant and expose the gable end walls to weather." },
    { question: "What is gable end area and why does it matter?", answer: "The gable end is the triangular wall section between the two roof slopes at each end. Its area equals half the building width times the roof rise. This area must be sheathed and sided — it is often forgotten in estimates." },
  ],
};

// ─── LEAN-TO / SHED ROOF ───────────────────────────────────────────────────

export const leanToRoofCalculator: CalculatorSEOContent = {
  disclaimer: "Lean-to measurements assume a single-slope roof with no valleys or hips. Add 10–15% waste for materials. Rafter length does not include overhang.",
  howToUse: [
    "Enter the roof length (the dimension along the supporting wall) in feet.",
    "Enter the roof run (how far the roof extends from the wall) in feet.",
    "Enter the pitch (rise per 12 inches of horizontal run).",
    "Select rafter spacing and click Calculate for rafter count, length, area, and rise height.",
  ],
  materialInfo:
    "A lean-to roof (also called a shed roof or mono-pitch roof) is the simplest roof form — a single sloped plane that leans against an existing structure or spans between walls of different heights. Lean-to roofs are the standard choice for additions, covered porches, carports, storage sheds, and firewood shelters across Canada. The high side is typically attached to an existing building wall using a ledger board bolted to the studs, while the low side rests on a beam supported by posts. Because there is only one slope, lean-to roofs are the most economical to frame — they require approximately half the rafters of a gable roof of the same footprint and have no ridge board. Typical lean-to pitches range from 2/12 to 6/12, with 3/12 to 4/12 being most common for attached structures. The minimum pitch depends on the roofing material: 1/4:12 for membrane (TPO, EPDM), 2/12 for metal panels with sealant tape, and 4/12 for standard asphalt shingles per NBC. Rafter sizes follow CSA O86 span tables — 2x6 for runs up to 10 ft, 2x8 for up to 13 ft, and 2x10 for up to 16 ft at 16\" OC in SPF #2. A 12x20 ft lean-to costs CAD $1,200 to $3,000 in framing lumber and CAD $500 to $1,200 for roofing materials, with professional labour adding CAD $2,000 to $4,500. Snow load is a key consideration — in heavy snow regions, size rafters for the ground snow load per NBC Part 4.",
  nextSteps: [
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Roof Pitch Calculator", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Gable Roof Calculator", href: "/calculators/roofing/gable-roof-calculator/" },
  ],
  installationTips: [
    "Attach the ledger board to the existing wall studs or rim joist with 1/2\" lag bolts — never anchor to siding alone.",
    "Install step flashing or Z-flashing above the ledger to prevent water from entering the wall.",
    "Use a string line from the ledger to the beam to verify consistent rafter slope before cutting.",
    "Slope the roof away from the existing building to direct water runoff to the low side.",
    "For runs over 12 feet, consider using an intermediate support beam to reduce rafter size requirements.",
  ],
  commonMistakes: [
    "Attaching the ledger to siding instead of framing — the ledger must be lag-bolted to studs or the rim joist.",
    "Forgetting flashing above the ledger — this is the most common source of water damage in lean-to additions.",
    "Pitching the roof toward the existing building instead of away — water must drain to the low (outer) side.",
    "Using too shallow a pitch for the chosen roofing material — asphalt shingles need at least 4/12 for standard installation.",
  ],
  faqs: [
    { question: "What is a lean-to roof?", answer: "A lean-to roof is a single-slope roof that typically leans against an existing building wall. One end is higher (attached to the wall via a ledger board) and the other is lower (supported by posts and a beam). It is the simplest and most economical roof type." },
    { question: "What is the minimum pitch for a lean-to roof?", answer: "The minimum pitch depends on the roofing material: 1/4:12 for membrane roofing (TPO, EPDM), 1/2:12 to 1:12 for standing seam metal, 2:12 for exposed-fastener metal panels, and 4:12 for standard asphalt shingles." },
    { question: "How do I calculate lean-to roof area?", answer: "Multiply the roof length (along the wall) by the roof run (depth from wall), then multiply by the pitch multiplier. For a 20x12 ft lean-to at 4/12 pitch, the multiplier is 1.054, so the area is 20 x 12 x 1.054 = 252.96 sq ft." },
    { question: "How does snow load affect lean-to sizing in Canada?", answer: "Snow load is critical in Canada. Size rafters for the ground snow load specified by your municipality per NBC Part 4. In heavy snow regions (northern Ontario, Quebec, Prairies), rafters may need to be 2x10 or 2x12 even for short runs." },
    { question: "Can I attach a lean-to to any wall?", answer: "You can attach a lean-to to any structural wall that can support the ledger loads. Wood-frame walls require lag bolts into studs or rim joist. Concrete or masonry walls require expansion anchors or through-bolts. Always verify the existing wall can handle the additional roof and snow load." },
    { question: "How much does a lean-to roof cost in Canada?", answer: "A basic 12x20 ft lean-to costs CAD $1,200 to $3,000 for framing lumber, CAD $500 to $1,200 for roofing materials, and CAD $2,000 to $4,500 for professional labour. Total installed cost is typically CAD $3,700 to $8,700." },
  ],
};

// ─── BALUSTER SPACING ───────────────────────────────────────────────────────

export const balusterSpacingCalculator: CalculatorSEOContent = {
  disclaimer:
    "Calculations are based on NBC 9.8.8 which limits openings to a maximum of 100 mm (4 inches). Verify requirements with your local building department as municipalities may have stricter codes.",
  howToUse: [
    "Measure the total railing length in inches from post to post (or end to end).",
    "Enter the baluster width (1.5 inches for standard square balusters, 0.75 inches for round).",
    "Enter the post width (3.5 inches for standard 4x4 posts).",
    "Enter the number of posts and click Calculate for exact baluster count and even spacing.",
  ],
  materialInfo:
    "Balusters (also called spindles) are the vertical fill members in a railing system that prevent falls and meet building code. The NBC (9.8.8) requires that a 100 mm (4-inch) sphere cannot pass through any opening in the guard — this applies between balusters, between balusters and posts, between the bottom rail and the deck surface, and through any decorative opening.\n\nStandard square balusters are 1.5 inches wide (matching a 2x2 nominal), and round balusters are typically 3/4 inch in diameter. With 1.5-inch square balusters and a 4-inch maximum gap, you need approximately 3 balusters per linear foot of railing.\n\nCommon materials include pressure-treated SPF (CAD $1–$3 each), cedar (CAD $3–$6 each), aluminum (CAD $4–$10 each), and composite (CAD $5–$12 each). Available from Home Depot Canada, RONA, Home Hardware, Canadian Tire, and Castle Building Centres.\n\nThis calculator distributes balusters evenly within each section so that every gap is identical — resulting in a uniform, professional appearance that automatically meets the 100 mm code requirement.",
  nextSteps: [
    { label: "Deck Railing Calculator", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Stair Calculator", href: "/calculators/stairs/stair-calculator/" },
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
  ],
  installationTips: [
    "Cut a spacer block to the calculated gap width and use it between every baluster for perfectly even spacing.",
    "Pre-drill screw holes in wood balusters to prevent splitting — especially hardwoods and small cross-sections.",
    "Install the bottom rail first, set all balusters with the spacer, then attach the top rail.",
    "Use exterior-grade adhesive in addition to screws for long-term durability — Canadian freeze-thaw cycles stress joints.",
  ],
  commonMistakes: [
    "Spacing balusters too far apart — the 100 mm sphere test applies to every opening, not just the average gap.",
    "Forgetting to subtract post widths from the total railing length when calculating available space.",
    "Not pre-drilling wood balusters — small cross-sections split easily when screwed near the ends.",
    "Ignoring the gap between the deck surface and the bottom rail — the 100 mm rule applies here too.",
  ],
  faqs: [
    { question: "What is the maximum gap between balusters in Canada?", answer: "The NBC requires that a 100 mm (4-inch) sphere cannot pass through any opening in a guard. With standard 1.5-inch square balusters, the gap between adjacent balusters must be less than 4 inches (100 mm)." },
    { question: "How many balusters do I need per foot?", answer: "With standard 1.5-inch square balusters and the code-required 4-inch maximum gap, you need approximately 3 balusters per linear foot of railing." },
    { question: "Can I use horizontal railing instead of vertical balusters?", answer: "Some codes allow horizontal railing, but the 100 mm sphere rule still applies between horizontal members. Many municipalities prohibit horizontal designs because children can climb them. Check your local code." },
    { question: "What height should the railing be?", answer: "The NBC requires a minimum guard height of 900 mm (36 inches) for residential decks up to 1,800 mm above grade, and 1,070 mm (42 inches) for heights exceeding 1,800 mm or for commercial/multi-family structures." },
    { question: "What material is best for exterior balusters in Canada?", answer: "Aluminum and composite balusters offer the best durability with no maintenance — important in Canadian winters with freeze-thaw cycles. Pressure-treated SPF is the most affordable but needs periodic sealing. Cedar is a natural rot-resistant option." },
    { question: "Do I need a permit to install a railing in Canada?", answer: "Yes, in most Canadian municipalities railing installation on a deck requires a building permit and inspection. Inspectors check height, baluster spacing, post attachment, and structural integrity per NBC 9.8." },
  ],
};

// ─── SOFFIT ──────────────────────────────────────────────────────────────────

export const soffitCalculator: CalculatorSEOContent = {
  disclaimer:
    "This estimate assumes standard 12-inch wide soffit panels. Actual panel widths and coverage vary by manufacturer. Add 10% waste for cuts and fitting.",
  howToUse: [
    "Measure the total perimeter of your house in feet.",
    "Measure the soffit width (distance from the wall to the fascia board) in inches.",
    "Enter the soffit panel length (typically 12 feet for standard panels).",
    "Click Calculate to get panel count, J-channel length, and vent strip quantity.",
  ],
  materialInfo:
    "Soffit is the material that covers the underside of the roof overhang (eaves), spanning the gap between the exterior wall and the fascia board. Its primary functions are protecting the rafter tails and roof structure from weather, pests, and moisture while providing attic ventilation when vented panels are used.\n\nSoffit panels come in three main ventilation styles: solid (no ventilation), centre-vented (perforated strip down the middle), and fully vented (perforated across the entire panel). Proper attic ventilation is critical in Canada — it prevents ice dams in winter, reduces cooling loads in summer, and prevents moisture buildup that leads to mould and rot.\n\nCommon materials include vinyl (CAD $2.00–$4.00 per sq ft installed), aluminum (CAD $3.50–$6.00), and wood (CAD $5.00–$10.00). Vinyl is the most popular for Canadian residential use due to low cost and zero maintenance. Standard panel dimensions are 12 inches wide by 12 feet long.\n\nJ-channel trim runs along both edges of the soffit. For a house with 160 feet of perimeter and 18-inch overhangs, expect roughly 40 panels and 320 linear feet of J-channel. Available from Home Depot Canada, RONA, Home Hardware, and Canadian Tire.",
  nextSteps: [
    { label: "Vinyl Siding Calculator", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Drip Edge Calculator", href: "/calculators/roofing/drip-edge-calculator/" },
    { label: "Hardie Siding Calculator", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
  ],
  installationTips: [
    "Install J-channel along the wall first, keeping it level and straight — any deviation will show in the finished panels.",
    "Leave 1/4 inch of expansion gap at each end of the panel to prevent buckling — important in Canadian temperature extremes.",
    "Alternate between vented and solid panels if you need partial ventilation rather than full venting.",
    "Cut panels with a fine-tooth circular saw blade (reversed for vinyl) or aviation snips for clean edges.",
  ],
  commonMistakes: [
    "Not leaving expansion gaps — vinyl soffit panels buckle and warp with Canadian temperature swings (-30°C to +35°C).",
    "Installing all solid panels when attic ventilation is needed — use at least one-third vented panels to prevent ice dams.",
    "Failing to level the J-channel — any bow or dip will be visible in the finished soffit.",
    "Forgetting end caps where the soffit terminates at gable ends or porch transitions.",
  ],
  faqs: [
    { question: "What is soffit and why do I need it?", answer: "Soffit is the panel covering the underside of the roof overhang. It protects rafter tails from weather and pests, provides attic ventilation when vented, and gives the eaves a finished appearance." },
    { question: "Do I need vented soffit in Canada?", answer: "Yes. Vented soffit is essential in Canadian climates to prevent ice dams, condensation, and excessive attic heat. The NBC and most provincial codes require balanced attic ventilation — vented soffit at the eaves and ridge or gable vents at the top." },
    { question: "How much does soffit cost in Canada?", answer: "Vinyl soffit costs CAD $2.00–$4.00 per sq ft installed. For a typical home with 160 ft perimeter and 18-inch overhangs (240 sq ft of soffit area), materials run CAD $480–$960 and professional installation adds CAD $500–$1,000." },
    { question: "Can I install soffit over existing soffit?", answer: "Yes, if the existing soffit is in good condition and firmly attached. Install new J-channel over the old surface. If the old soffit is damaged, rotted, or sagging, remove it completely first." },
    { question: "What width soffit panel do I need?", answer: "Soffit panel width depends on your overhang. Standard 12-inch panels work for overhangs up to 12 inches. For wider overhangs (18–24 inches), use two rows of panels or wider single panels." },
    { question: "How much J-channel do I need?", answer: "You need J-channel on both sides of the soffit (wall side and fascia side), so multiply your house perimeter by 2. For 160 feet of perimeter, you need 320 linear feet of J-channel." },
  ],
};

// ─── BOARD AND BATTEN ────────────────────────────────────────────────────────

export const boardAndBattenCalculator: CalculatorSEOContent = {
  disclaimer:
    "This estimate assumes standard vertical installation with boards placed edge-to-edge and battens covering the seams. Add 10% waste for cuts around doors and windows.",
  howToUse: [
    "Calculate total wall area in square feet (perimeter x height, minus doors and windows).",
    "Enter board width (common: 6, 8, 10, or 12 inches).",
    "Enter batten width (common: 1.5 to 3 inches).",
    "Enter wall height in feet and click Calculate.",
  ],
  materialInfo:
    "Board and batten is a classic vertical siding pattern consisting of wide boards installed upright with narrow strips (battens) covering the seams between them. This design allows natural wood movement — the boards can expand and contract with humidity changes without opening visible gaps.\n\nBoard and batten is experiencing a major resurgence in modern farmhouse and contemporary architecture across Canada. It is available in natural wood (western red cedar, eastern white cedar, pine), engineered wood (LP SmartSide), fibre cement (James Hardie), vinyl, and composite materials.\n\nBoard widths typically range from 6 to 12 inches, with 8–10 inch boards being the most popular. Battens are typically 1.5 to 3 inches wide.\n\nCosts vary by material: pine boards run CAD $2–$5 per linear foot, cedar CAD $4–$8, fibre cement CAD $3–$6, and engineered wood CAD $3–$7. For a typical 480 sq ft wall, expect 60–80 boards and 65–85 battens.\n\nInstallation requires a weather-resistant barrier (housewrap) behind the siding. In Canadian climates, a rain screen (ventilated cavity) of 3/4 inch behind the boards is strongly recommended for moisture management. Available from Home Depot Canada, RONA, Castle Building Centres, and local lumber yards.",
  nextSteps: [
    { label: "Vinyl Siding Calculator", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Hardie Siding Calculator", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Housewrap Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
  ],
  installationTips: [
    "Install a weather-resistant barrier (Tyvek or equivalent) over the structural sheathing before any siding.",
    "Nail each board with a single fastener at centre — this allows the board to expand and contract without splitting.",
    "Battens should be nailed through the board overlap, securing them to the sheathing or studs behind.",
    "Leave a 1/8-inch gap between the bottom of boards and horizontal trim for drainage.",
    "Pre-prime or seal all cut ends and back surfaces before installation — essential in Canadian freeze-thaw cycles.",
  ],
  commonMistakes: [
    "Nailing boards at both edges — this restricts natural expansion and causes splits and cupping.",
    "Skipping the weather-resistant barrier — essential to prevent water damage to the wall structure.",
    "Using battens too narrow to adequately cover the board joints — minimum 1.5 inches recommended.",
    "Not sealing cut ends — untreated end grain absorbs moisture rapidly, leading to premature rot in Canadian winters.",
  ],
  faqs: [
    { question: "What is board and batten siding?", answer: "Board and batten is a vertical siding style with wide boards installed upright and narrow strips (battens) covering the joints between them. It allows wood movement while maintaining a weather-tight exterior." },
    { question: "What materials work for board and batten in Canada?", answer: "Common materials include western red cedar (most durable natural option), eastern white cedar (affordable and aromatic), pine (budget, needs treatment), fibre cement (James Hardie — durable, low maintenance), and engineered wood (LP SmartSide)." },
    { question: "How much does board and batten cost in Canada?", answer: "Material costs range from CAD $2–$5 per linear foot for pine, CAD $4–$8 for cedar, CAD $3–$6 for fibre cement, and CAD $3–$7 for engineered wood. Professional installation adds CAD $4–$10 per sq ft. A typical home exterior runs CAD $8,000–$25,000 total." },
    { question: "Can board and batten be installed horizontally?", answer: "Traditionally it is vertical, but horizontal installation is possible. However, horizontal battens can trap water against the boards, requiring more careful detailing for drainage. Vertical installation is recommended for best water-shedding performance." },
    { question: "Do I need housewrap behind board and batten?", answer: "Yes, always. A weather-resistant barrier (Tyvek or similar) behind the siding is essential. In Canadian climates, a rain screen (3/4-inch ventilated cavity) behind the boards is also strongly recommended for moisture management." },
    { question: "How wide should boards and battens be?", answer: "Boards of 8–10 inches with 2-inch battens are the most popular residential choice. Wider boards (12 inches) create a more rustic look; narrower boards (6 inches) with slim battens look more refined and modern." },
  ],
};

// ─── RAKE WALL ───────────────────────────────────────────────────────────────

export const rakeWallCalculator: CalculatorSEOContent = {
  disclaimer:
    "Rake wall stud heights are theoretical calculations. Always measure and cut each stud individually on site. The slope plate requires an angled cut to match the roof pitch. Add 10% waste for cuts.",
  howToUse: [
    "Measure the total wall length in feet along the bottom plate.",
    "Enter the height of the short end (low side) in feet.",
    "Enter the height of the tall end (high side) in feet.",
    "Set stud spacing (16 or 24 inches on centre) and click Calculate.",
  ],
  materialInfo:
    "A rake wall (also called a gable wall or sloped-top wall) is a wall where the top plate follows the roof slope rather than running level. This creates a triangular or trapezoidal wall section where every stud has a different height.\n\nRake walls are found at gable ends of roofs, under shed-style roofs, in lofts, and wherever a wall meets a sloped ceiling. They are framed with the same lumber as standard walls — typically 2x4 or 2x6 studs at 16 or 24 inches on centre in SPF #2 or better.\n\nThe key difference from standard walls is that the top plate must be cut at an angle (bevel) matching the roof pitch, and every stud must be individually measured and cut. The bottom plate runs level along the floor.\n\nFor a 20-foot rake wall going from 8 to 14 feet, you will need about 16 studs at 16\" spacing, with heights ranging from roughly 91 inches to 163 inches. The slope plate length (hypotenuse) will be about 21.5 feet.\n\nMaterial costs are similar to standard wall framing but with higher waste due to individual cuts. Plan for 10–15% extra lumber. A 20-foot rake wall typically costs CAD $200–$400 in SPF lumber. Available from Home Depot Canada, RONA, Home Hardware, and local lumber yards.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Gable Roof Calculator", href: "/calculators/roofing/gable-roof-calculator/" },
    { label: "Exterior Sheathing Calculator", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "Mark all stud positions on the bottom plate before cutting any studs.",
    "Snap a chalk line between the short and tall end points to establish the slope plate angle.",
    "Cut the slope plate with a bevel matching the roof pitch for proper rafter or sheathing bearing.",
    "Measure and cut each stud individually — theoretical heights may vary due to lumber irregularities.",
    "For very short studs (under 24 inches), add horizontal blocking between adjacent studs to provide nailing surface for sheathing.",
  ],
  commonMistakes: [
    "Cutting all studs to the same height — every stud in a rake wall is a different length.",
    "Not beveling the top (slope) plate — the roof sheathing or rafters will not seat properly without the correct angle.",
    "Forgetting blocking for short studs — sheathing and drywall need adequate nailing surface across the entire wall.",
    "Not verifying the rake wall angle matches the actual roof pitch — discrepancies cause fitting problems at the roof-wall junction.",
  ],
  faqs: [
    { question: "What is a rake wall?", answer: "A rake wall is a wall where the top plate follows the roof slope instead of running level. Each stud has a progressively different height. They are found at gable ends, under shed roofs, and at any wall-to-slope intersection." },
    { question: "How do I calculate individual stud heights?", answer: "Divide the height difference (tall minus short) by the number of stud spaces. Each successive stud increases by that increment. For a wall going from 8 to 14 feet over 15 spaces, each stud is 4.8 inches taller than the previous one." },
    { question: "Do I need to bevel the top plate?", answer: "Yes. The top (slope) plate must be cut at the roof pitch angle so rafters and sheathing bear properly. Use a speed square or angle finder to mark the bevel." },
    { question: "What about very short studs?", answer: "Studs shorter than 24 inches can be difficult to nail and do not provide adequate nailing surface for sheathing. Install horizontal blocking between adjacent studs." },
    { question: "Does stud spacing change in rake walls?", answer: "No. Horizontal stud spacing remains the same as the rest of the structure (16 or 24 inches on centre). Only the height of each individual stud changes." },
    { question: "How much extra material should I order?", answer: "Plan for 10–15% extra waste because each stud is a custom cut and offcuts rarely match another stud." },
  ],
};

// ─── DECK BOARD SPACING ──────────────────────────────────────────────────────

export const deckBoardSpacingCalculator: CalculatorSEOContent = {
  disclaimer:
    "Recommended gap size varies by material: 3/16–1/4 inch for dry pressure-treated wood, 1/8–3/16 inch for composites (check manufacturer specs), and no gap for wet pressure-treated wood (it will shrink as it dries). Follow manufacturer spacing guidelines.",
  howToUse: [
    "Enter the deck width in feet (the dimension across which boards will be laid).",
    "Enter the board width in inches (5.5 inches is standard for 5/4x6 decking).",
    "Enter your desired gap size in inches (1/4 inch is typical for dry wood).",
    "Click Calculate to get even board count and actual uniform gap.",
  ],
  materialInfo:
    "Proper deck board spacing is critical for drainage, wood movement, and deck longevity — especially in Canada's freeze-thaw climate where trapped water leads to rapid deterioration.\n\nFor pressure-treated SPF installed dry, use 3/16 to 1/4-inch gaps. If the wood is freshly treated and still wet (common right off the delivery truck), install boards tightly with no gap — the wood will shrink as it dries, creating natural gaps of approximately 1/8 to 3/16 inch. Cedar should have 1/8 to 3/16-inch gaps.\n\nComposite decking (Trex, TimberTech, Fiberon) expands and contracts with temperature — critical in Canada where temperature swings from -30°C to +35°C are common. Most manufacturers specify 1/8 to 3/16-inch gaps between board ends and 1/16 to 1/8-inch side gaps. Always follow the specific manufacturer's spacing chart, which varies by installation temperature.\n\nThe standard deck board is 5/4x6 (actual 1 inch x 5.5 inches) in pressure-treated SPF (CAD $2.00–$4.00 per linear foot) or composite (CAD $5.00–$12.00 per linear foot). For a 12-foot deck width with 5.5-inch boards and 1/4-inch gaps, you need approximately 25 boards. Available from Home Depot Canada, RONA, Home Hardware, and lumber yards.",
  nextSteps: [
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Deck Railing Calculator", href: "/calculators/outdoor/deck-railing-calculator/" },
  ],
  installationTips: [
    "Use a consistent spacer (16d nail for composites, carpenter's pencil for wider wood gaps) between every board.",
    "Install the first board perfectly parallel to the house — every subsequent board follows this reference line.",
    "For wet pressure-treated lumber, butt boards tightly together — they will shrink to create natural gaps.",
    "For composites, follow the manufacturer's spacing chart based on installation temperature — gaps change dramatically with Canadian seasons.",
  ],
  commonMistakes: [
    "Spacing wet pressure-treated boards with gaps — when the wood dries, gaps become too large and catch shoe heels.",
    "Not accounting for composite thermal expansion — decks installed tight in a Canadian winter may buckle in summer heat.",
    "Inconsistent gaps — uneven spacing is highly visible and looks unprofessional. Always use a spacer.",
    "Gaps too wide (over 3/8 inch) — can catch heels, allow debris accumulation, and let small objects fall through.",
  ],
  faqs: [
    { question: "What is the correct gap between deck boards?", answer: "For dry pressure-treated SPF: 3/16 to 1/4 inch. For cedar: 1/8 to 3/16 inch. For composite decking: 1/8 to 3/16 inch (check manufacturer specs). For wet pressure-treated wood: install tight with no gap." },
    { question: "Why is deck board spacing important in Canada?", answer: "Proper gaps allow water drainage and prevent ice formation between boards in winter. Trapped water freezes and expands, splitting boards and popping fasteners. Good drainage is even more critical in Canadian climates than in milder regions." },
    { question: "Should I gap wet pressure-treated lumber?", answer: "No. Freshly treated lumber has high moisture content and will shrink as it dries over 2–4 weeks. Install boards tightly together and the natural shrinkage will create appropriate gaps." },
    { question: "What spacer should I use?", answer: "A 16d nail (approximately 1/8 inch) works well for composite decking. A carpenter's pencil or 1/4-inch plywood strip works for wider wood gaps. Commercial deck spacers provide consistent spacing." },
    { question: "How do gaps change with temperature in Canada?", answer: "Composite boards expand significantly in Canadian summer heat and contract in winter cold. A board installed at -10°C will be noticeably longer at +30°C. Most manufacturers provide a spacing chart that increases the gap for cold-weather installation." },
    { question: "How many deck boards do I need?", answer: "Divide the deck width in inches by (board width + gap). For a 12-foot (144-inch) deck with 5.5-inch boards and 1/4-inch gaps: 144 / 5.75 = 25 boards." },
  ],
};
