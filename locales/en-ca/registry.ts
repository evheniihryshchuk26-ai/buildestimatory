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