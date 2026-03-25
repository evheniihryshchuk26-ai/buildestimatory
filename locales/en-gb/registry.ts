// UK English (en-GB) — All calculator SEO content
// Metric adaptations: metres, mm, square metres, UK building regs, UK brands, GBP pricing

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
    "Measure the total perimeter of your foundation in metres.",
    "Enter the standard bolt spacing (default 1.8 m per Building Regulations).",
    "Click Calculate Materials to get the total bolt count.",
  ],
  materialInfo:
    "Anchor bolts (J-bolt or L-bolt) are threaded steel rods embedded in the concrete foundation to secure the timber sole plate. Building Regulations and BS 5268 require bolts at maximum 1.8 m centres and within 300 mm of every corner or plate joint. In the UK, the most common diameters are M12 (12 mm) and M16 (16 mm), with M12 being the minimum standard for residential construction. J-bolts are most widely used because they are simple to set in wet concrete, whilst L-bolts offer greater pull-out resistance. For exposed or high-wind locations \u2014 common along the coast and in Scotland \u2014 M16 bolts with larger washers are recommended. Prices at Jewson or Travis Perkins typically range from \u00a31.50 to \u00a34.00 per bolt depending on diameter and finish. It is essential that anchor bolts comply with BS EN ISO 898-1 Grade 4.6 or equivalent to guarantee the required tensile strength for holding down the timber frame.",
  nextSteps: [
    { label: "Sill Seal Calculator", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Pressure Treated Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Set bolts before the concrete has fully cured, whilst it is still workable.",
    "Use a template or jig to maintain consistent spacing and alignment.",
    "Ensure bolts penetrate at least 180 mm into the concrete.",
    "Place a bolt within 300 mm of each end of every sole plate section.",
  ],
  commonMistakes: [
    "Omitting bolts at plate joints \u2014 always place one within 300 mm of each end.",
    "Using the wrong bolt diameter \u2014 M12 is the minimum standard.",
    "Not checking bolt plumbness before the concrete sets.",
  ],
  faqs: [
    { question: "What size anchor bolts are required by Building Regulations?", answer: "Building Regulations require a minimum M12 anchor bolt embedded at least 180 mm into the concrete, spaced at a maximum of 1.8 m centres." },
    { question: "Do I need anchor bolts at every corner?", answer: "Yes. Place an anchor bolt within 300 mm of each end of every sole plate section and at every corner of the foundation." },
    { question: "Can I add anchor bolts after the concrete has set?", answer: "Yes, using chemical resin anchors (such as Fischer or Hilti resin systems). You drill into the cured concrete and bond the bolt with structural epoxy resin, achieving comparable pull-out strength to cast-in bolts." },
    { question: "How many anchor bolts do I need per metre of foundation?", answer: "At the standard 1.8 m spacing, you need approximately 0.56 bolts per linear metre. However, corners, intersections, and plate joints require extra bolts, so in practice budget for 0.7 to 0.9 bolts per metre." },
    { question: "What is the difference between J-bolts and L-bolts?", answer: "J-bolts have a J-shaped hook at the bottom that keys into the concrete and are the most common for residential work. L-bolts have a right-angle bend and offer greater pull-out resistance, making them preferable in exposed or high-wind locations." },
    { question: "Which anchor bolts should I use in high-wind areas?", answer: "In exposed locations such as coastal sites or Scottish Highlands, use M16 bolts with 50\u00d750 mm square washers. Always check with your structural engineer and refer to BS EN 1991-1-4 (wind loading) for site-specific requirements." },
  ],
};

export const sillSealCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure the total foundation perimeter in linear metres.",
    "Enter the coverage per roll (most rolls cover 15 m).",
    "Click Calculate Materials to see how many rolls you need.",
  ],
  materialInfo:
    "Sill seal is an expanded polyethylene foam gasket strip placed between the concrete foundation and the pressure treated timber sole plate. Its primary purpose is to prevent air infiltration, capillary moisture rise, and insect entry. It comes in rolls of various widths \u2014 the most common are 100 mm, 150 mm, and 200 mm, matching standard timber sections. The standard thickness is 6 mm, though 12 mm is available for uneven foundation surfaces. In the UK, sill seal can be sourced from Jewson, Travis Perkins, Wickes, or B&Q, typically costing \u00a35 to \u00a315 per 15 m roll. It is a low-cost material that delivers significant long-term energy savings by eliminating air leakage at the base of the wall. Building Regulations Part L (Conservation of Fuel and Power) places increasing emphasis on airtightness, making sill seal an essential component in achieving the required air permeability targets.",
  nextSteps: [
    { label: "Pressure Treated Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Rim Joist Calculator", href: "/calculators/floor-framing/rim-joist-calculator/" },
  ],
  installationTips: [
    "Unroll the sill seal along the foundation just before placing the sole plates.",
    "Overlap joints by at least 150 mm.",
    "Use sill seal compatible with pressure treated timber \u2014 some foams degrade with treatment chemicals.",
  ],
  commonMistakes: [
    "Forgetting to install sill seal \u2014 it is a regulatory requirement under Part L for airtightness.",
    "Not overlapping joints, leaving gaps for air infiltration.",
  ],
  faqs: [
    { question: "Is sill seal required by Building Regulations?", answer: "Whilst not explicitly named, Building Regulations Part L requires airtight construction. Sill seal is the standard method of achieving an airtight junction between the concrete foundation and timber sole plate, and building control officers expect to see it." },
    { question: "What width of sill seal do I need?", answer: "Match the sill seal width to your sole plate width. For 100\u00d750 mm sole plates, use 100 mm sill seal. For 150\u00d750 mm plates, use 150 mm seal. The foam compresses when the plate is bolted down." },
    { question: "Can I use DPC instead of sill seal?", answer: "A DPC (damp-proof course) membrane prevents moisture but does not provide the same air-sealing properties as foam sill seal. Best practice is to use both: a DPC underneath and sill seal on top for moisture and air protection." },
    { question: "How much does sill seal cost in the UK?", answer: "Sill seal typically costs \u00a35 to \u00a315 per 15 m roll at UK builders\u2019 merchants. For a typical 40 m perimeter house, you need 3 rolls \u2014 roughly \u00a315 to \u00a345 total. It is one of the cheapest building materials with the highest return on investment." },
    { question: "Do I need sill seal on internal walls?", answer: "Sill seal is primarily used on external foundation walls where the concrete-to-timber junction is most exposed to moisture and air leakage. Internal partition sole plates on a concrete slab do not typically require sill seal unless specified by the designer." },
    { question: "Where can I buy sill seal in the UK?", answer: "Sill seal is available at Jewson, Travis Perkins, Wickes, B&Q, and online from specialist suppliers. Most timber-frame kit suppliers include it as standard. For large projects, buying in bulk from a builders\u2019 merchant gives the best price." },
  ],
};

export const sillPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure the total foundation perimeter in metres.",
    "Select the timber size (100\u00d750 mm or 150\u00d750 mm are standard).",
    "Enter the standard timber length (typically 2.4 m, 3.0 m, 3.6 m, or 4.8 m).",
    "Click Calculate Materials to get the board count and total linear metres.",
  ],
  materialInfo:
    "The sole plate (or sill plate) is the horizontal pressure treated timber member that sits directly on the concrete foundation, secured by anchor bolts. It serves as the base for the entire wall structure and must resist moisture, insect attack, and fungal decay because of its contact with concrete. In the UK, sole plates are typically C16 or C24 graded softwood, pressure treated to Use Class 2 or Use Class 4 depending on exposure. Standard sizes are 100\u00d750 mm for 100 mm stud walls and 150\u00d750 mm for 150 mm stud walls. Timber is typically supplied in lengths of 2.4 m, 3.0 m, 3.6 m, and 4.8 m. Prices at builders\u2019 merchants such as Jewson or Travis Perkins range from \u00a34 to \u00a312 per metre depending on section size and treatment level. All sole plates in contact with concrete must comply with BS 8417 for preservative treatment. When joining sole plates, butt joints must fall over a solid support and be within 300 mm of an anchor bolt on each side of the joint.",
  nextSteps: [
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Sill Seal Calculator", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Lay sill seal or DPC membrane on the concrete before placing the sole plate.",
    "Pre-drill bolt holes in the plate using the foundation bolts as a guide.",
    "Check that the plate is level along its entire length \u2014 shim if necessary.",
    "Ensure all joints fall over solid support and are secured with bolts on both sides.",
  ],
  commonMistakes: [
    "Using untreated timber for sole plates \u2014 they will rot within a few years in contact with concrete.",
    "Not checking the foundation for level before setting plates \u2014 this error compounds throughout the frame.",
    "Placing joints away from anchor bolts, leaving unsecured sections.",
  ],
  faqs: [
    { question: "What treatment level do sole plates need?", answer: "Sole plates in contact with concrete require pressure treatment to at least Use Class 2 (UC2) per BS 8417. Where there is risk of persistent wetting, Use Class 4 (UC4) is recommended. Always check the treatment certificate from the supplier." },
    { question: "Can I use untreated timber for sole plates?", answer: "No. Untreated timber in contact with concrete will absorb moisture and decay rapidly. Building Regulations Part C requires durable or treated timber wherever it is in contact with masonry or concrete." },
    { question: "What size sole plate do I need?", answer: "The sole plate must match the wall stud width. For 100 mm stud walls, use 100\u00d750 mm plates. For 150 mm stud walls, use 150\u00d750 mm plates. The depth (50 mm) is standard for both." },
    { question: "How much do pressure treated sole plates cost?", answer: "Pressure treated C16 softwood for sole plates costs approximately \u00a34 to \u00a38 per metre for 100\u00d750 mm and \u00a36 to \u00a312 per metre for 150\u00d750 mm at UK builders\u2019 merchants. Buying in bulk or full packs gives the best price." },
    { question: "Do I need a DPC under the sole plate?", answer: "Yes. A DPC (damp-proof course) membrane should be placed between the concrete and the sole plate to prevent moisture migration. Best practice is DPC beneath and sill seal on top." },
    { question: "How do I join sole plates?", answer: "Butt joints are standard. Each joint must fall directly over a solid support point and have an anchor bolt within 300 mm on each side. Stagger sole plate joints so they do not align with stud positions or top plate joints above." },
  ],
};

export const concreteCalculator: CalculatorSEOContent = {
  disclaimer: "Concrete volumes are estimates. Order 5\u201310% extra to account for spillage, over-excavation, and formwork irregularities.",
  howToUse: [
    "Enter the length, width, and depth of your concrete pour in metres.",
    "Select the shape: slab, footing, or column.",
    "Click Calculate Materials for cubic metres and bag counts.",
  ],
  materialInfo:
    "Concrete is the most widely used construction material in the UK, comprising cement, aggregite, sand, and water mixed to achieve a specified compressive strength. For residential foundations, C25/30 (also called GEN3 or ST4) is the standard mix, achieving a 28-day compressive strength of 25 N/mm\u00b2. Ready-mix concrete is delivered by truck and is the most practical option for pours exceeding 1 m\u00b3. For smaller jobs, bagged concrete (Postcrete, Blue Circle, or Hanson) is available in 20 kg and 25 kg bags from Wickes, B&Q, Travis Perkins, and Jewson. A 25 kg bag of general-purpose concrete yields approximately 0.012 m\u00b3 when mixed. Ready-mix concrete in the UK typically costs \u00a370 to \u00a3120 per m\u00b3 delivered, with minimum order charges of around \u00a3200 for small loads. Bagged concrete works out more expensive per m\u00b3 but avoids minimum order fees and is suitable for posts, small pad foundations, and repairs. For structural foundations, always use concrete that complies with BS EN 206 and BS 8500. In freezing conditions, specify air-entrained concrete or use frost-resistant admixtures.",
  nextSteps: [
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Concrete Column Calculator", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Ensure formwork is secure, level, and braced before the pour.",
    "Compact concrete with a vibrator or tamping rod to eliminate air pockets.",
    "Cure concrete for at least 7 days by keeping it moist \u2014 cover with polythene or damp hessian.",
    "Do not pour concrete when temperatures are below 2\u00b0C unless using cold-weather admixtures.",
  ],
  commonMistakes: [
    "Ordering too little concrete \u2014 always add 5\u201310% for spillage and formwork irregularities.",
    "Adding too much water to the mix \u2014 this weakens the concrete significantly.",
    "Not compacting the concrete properly, leaving air voids that reduce strength.",
  ],
  faqs: [
    { question: "What strength concrete do I need for foundations?", answer: "For standard strip and trench-fill foundations, use C25/30 (GEN3 or ST4) concrete. This provides 25 N/mm\u00b2 compressive strength at 28 days. For garage slabs and paths, C20/25 (GEN1 or ST2) is typically sufficient. Always check with your structural engineer." },
    { question: "How many bags of concrete make 1 cubic metre?", answer: "You need approximately 80 to 85 bags of 25 kg general-purpose concrete to make 1 m\u00b3. This works out at roughly \u00a3400 to \u00a3500 per m\u00b3, which is significantly more expensive than ready-mix at \u00a370 to \u00a3120 per m\u00b3. Bagged concrete is only practical for small jobs under 0.5 m\u00b3." },
    { question: "When should I use ready-mix vs bagged concrete?", answer: "Use ready-mix for any pour over 1 m\u00b3 \u2014 it is far more economical and consistent. Use bagged concrete for fence posts, small pad foundations, minor repairs, and situations where site access prevents a concrete lorry from reaching the pour location." },
    { question: "How much does ready-mix concrete cost in the UK?", answer: "Ready-mix concrete typically costs \u00a370 to \u00a3120 per m\u00b3 delivered, depending on the mix specification and region. Most suppliers have a minimum order (usually 4\u20136 m\u00b3) or charge a short-load fee of \u00a320\u2013\u00a340 per m\u00b3 below the minimum. Pump hire adds \u00a3300\u2013\u00a3600 if needed." },
    { question: "Can I pour concrete in winter?", answer: "Yes, but take precautions. Do not pour when temperatures are below 2\u00b0C. Use rapid-set or cold-weather admixtures, insulate formwork with blankets, and protect the fresh pour from frost for at least 48 hours. Concrete cures much more slowly in cold weather." },
    { question: "What is the minimum depth for foundations in the UK?", answer: "Building Regulations Part A requires strip foundations to be at least 450 mm deep to the underside of the concrete in normal soil conditions, and at least 750 mm deep near trees. In clay soils prone to heave, depths of 1.0 m to 1.5 m or more may be required. Local building control will specify the depth based on soil conditions." },
  ],
};

export const concreteSlabCalculator: CalculatorSEOContent = {
  disclaimer: "Order 5\u201310% extra concrete to account for variations in sub-base level and formwork.",
  howToUse: [
    "Enter the slab length and width in metres.",
    "Enter the slab thickness in millimetres (100 mm is standard for garages, 150 mm for driveways).",
    "Click Calculate Materials for volume in cubic metres and bag count.",
  ],
  materialInfo:
    "Concrete slabs are used for garage floors, driveways, patios, shed bases, and ground-floor construction in the UK. A standard garage slab is 100 mm thick using C25/30 concrete over a compacted sub-base of MOT Type 1 aggregate. Driveways subject to vehicle traffic should be at least 150 mm thick. The sub-base is typically 150\u2013200 mm of compacted Type 1 or Type 2 aggregate, with a DPM (damp-proof membrane) of 1200 gauge polythene laid on top before the concrete pour. Reinforcement is usually A142 or A193 steel mesh placed on spacers at mid-depth of the slab. For residential ground floors, insulation boards (typically 75\u2013100 mm of PIR such as Celotex or Kingspan) are placed below the slab to meet Part L thermal requirements. Concrete slabs must also incorporate movement joints at intervals of approximately 4\u20136 metres to control cracking. UK prices for ready-mix concrete range from \u00a370 to \u00a3120 per m\u00b3, with a typical 20 m\u00b2 garage slab at 100 mm thickness requiring approximately 2 m\u00b3.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Concrete Steps Calculator", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Compact the Type 1 sub-base in layers using a plate compactor or vibrating roller.",
    "Lay a DPM (damp-proof membrane) over the sub-base with 300 mm overlaps at joints.",
    "Place A142 mesh reinforcement on spacers at mid-depth of the slab.",
    "Use a straight-edge or screed rail to level the concrete surface.",
  ],
  commonMistakes: [
    "Skipping the sub-base \u2014 pouring concrete directly onto soil leads to settlement cracking.",
    "Using too thin a slab for the intended load \u2014 100 mm minimum for pedestrian use, 150 mm for vehicles.",
    "Not including movement joints, resulting in uncontrolled cracking.",
  ],
  faqs: [
    { question: "How thick should a concrete slab be for a garage?", answer: "A standard garage slab should be at least 100 mm thick using C25/30 concrete over a 150 mm compacted Type 1 sub-base. If heavy vehicles will park on it, increase to 150 mm with A193 mesh reinforcement." },
    { question: "Do I need mesh in a concrete slab?", answer: "Mesh reinforcement (A142 or A193) is strongly recommended for all slabs. It controls cracking and distributes loads. Building control typically requires it for habitable ground floors and garages." },
    { question: "How much does a garage slab cost in the UK?", answer: "A typical single garage slab (3 m \u00d7 6 m \u00d7 100 mm) uses about 1.8 m\u00b3 of concrete at \u00a370\u2013\u00a3120 per m\u00b3 (\u00a3126\u2013\u00a3216 for concrete alone). Add \u00a3150\u2013\u00a3300 for sub-base, DPM, mesh, and formwork. DIY total: \u00a3300\u2013\u00a3550. With a contractor: \u00a3800\u2013\u00a31,500." },
    { question: "Do I need insulation under a concrete slab?", answer: "For habitable rooms (extensions, conversions), Building Regulations Part L requires floor insulation. Typically 75\u2013100 mm of PIR insulation (Celotex or Kingspan) is placed below the slab. For detached garages and sheds, insulation is not usually required." },
    { question: "What sub-base do I need under a concrete slab?", answer: "Use 150\u2013200 mm of compacted MOT Type 1 crushed aggregate. Compact it in layers using a plate compactor. The sub-base provides drainage, prevents frost heave, and distributes loads evenly to the underlying soil." },
    { question: "Can I pour a concrete slab myself?", answer: "Yes, for small slabs (up to about 3\u20134 m\u00b3). You will need formwork, a plate compactor, a concrete vibrator or tamping beam, and enough helpers to place and level the concrete before it begins to set. For larger slabs, hire a professional \u2014 concrete waits for no one." },
  ],
};

export const concreteFootingCalculator: CalculatorSEOContent = {
  disclaimer: "Footing dimensions must comply with Building Regulations Part A. Always have your foundation design approved by building control before starting work.",
  howToUse: [
    "Enter the footing length, width, and depth in metres.",
    "For strip footings, enter the total run length.",
    "Click Calculate Materials for cubic metres and bag count.",
  ],
  materialInfo:
    "Concrete footings distribute the building load to the underlying soil and are a critical structural element governed by Building Regulations Part A. In the UK, the two main types are strip footings (continuous trenches beneath walls) and pad footings (individual bases for columns or posts). Strip footings for a standard two-storey house are typically 600 mm wide and 225 mm deep minimum, though the actual size depends on soil bearing capacity and building loads. Trench-fill footings \u2014 where the trench is filled with concrete to within 150 mm of ground level \u2014 are increasingly popular because they are faster to construct and provide a more consistent foundation. Trench-fill footings are typically 450 mm wide and extend to the required depth (minimum 450 mm, often 750 mm to 1.5 m depending on soil conditions and proximity to trees). The concrete specification for footings is typically C25/30 (GEN3 / ST4), with ready-mix being the most practical option for the volumes involved. A typical semi-detached house requires 8\u201315 m\u00b3 of foundation concrete. In clay soils, Approved Document A and NHBC Standards Chapter 4.2 provide guidance on foundation depths based on tree species, distance, and soil plasticity.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Excavate to firm, undisturbed ground \u2014 never build on made-up ground without engineering advice.",
    "Keep trenches clean and free of loose soil before pouring.",
    "Pour concrete as soon as possible after excavation to prevent trench sides drying out or collapsing.",
    "In clay soils near trees, use compressible material against trench sides to allow for heave.",
  ],
  commonMistakes: [
    "Not digging deep enough \u2014 Building Regulations require a minimum of 450 mm to the underside of the concrete.",
    "Ignoring the effect of trees on clay soils \u2014 NHBC Standards Chapter 4.2 specifies depth increases near trees.",
    "Pouring footings on waterlogged or frozen ground, which compromises the concrete bond with the soil.",
  ],
  faqs: [
    { question: "How deep do foundations need to be in the UK?", answer: "Building Regulations Part A requires strip foundations to be at least 450 mm deep to the underside of the concrete. Near trees in clay soil, depths of 1.0 m to 2.5 m may be required per NHBC Standards. Your building control officer will specify the depth based on a site inspection." },
    { question: "What is the difference between strip and trench-fill footings?", answer: "Strip footings are a shallow layer of concrete (typically 225 mm deep) in a wider trench, with blockwork built up from the concrete to ground level. Trench-fill footings fill the entire trench with concrete to near ground level, requiring less blockwork and labour but more concrete." },
    { question: "What width do footings need to be?", answer: "For a standard two-storey house on firm soil (bearing capacity 100+ kN/m\u00b2), strip footings are typically 600 mm wide. On weaker soils, they may need to be 750 mm or wider. Your structural engineer or building control officer will specify the width." },
    { question: "Do I need building control approval for foundations?", answer: "Yes. Foundation work requires a building control inspection at the excavation stage (before concrete is poured) and after the concrete has been placed. You must have approved plans or a building notice in place before starting foundation work." },
    { question: "How much concrete do I need for house foundations?", answer: "A typical semi-detached house with trench-fill foundations requires 8\u201315 m\u00b3 of concrete, costing \u00a3600\u2013\u00a31,800 for concrete alone. The exact volume depends on trench depth, width, and the perimeter of the building." },
    { question: "Can I use raft foundations instead of strip footings?", answer: "Yes. Raft foundations are a reinforced concrete slab that covers the entire footprint of the building. They are used on poor soils, filled ground, or where mining activity has affected the site. Rafts are more expensive but distribute loads more evenly. A structural engineer must design the raft." },
  ],
};

export const concreteColumnCalculator: CalculatorSEOContent = {
  disclaimer: "Column pier dimensions should be verified by a structural engineer for load-bearing applications.",
  howToUse: [
    "Enter the column diameter in millimetres (200, 250, or 300 mm are standard).",
    "Enter the column height or depth in metres.",
    "Enter the number of columns.",
    "Click Calculate Materials for total cubic metres and bag count.",
  ],
  materialInfo:
    "Concrete columns (piers) are cylindrical concrete foundations used to support posts, deck frames, pergolas, and lightweight structures. They are formed using cardboard column formers (such as Sonotube or equivalent from Jewson) placed in excavated holes and filled with concrete. Standard diameters in the UK are 200 mm, 250 mm, and 300 mm, with the 250 mm size being the most common for residential deck and pergola posts. Each 250 mm diameter \u00d7 900 mm deep column requires approximately 0.044 m\u00b3 of concrete, equivalent to roughly 4 bags of 25 kg postcrete or general-purpose concrete. Column formers cost \u00a35\u2013\u00a315 each at builders\u2019 merchants. The depth of the pier must extend below the frost line and into firm ground \u2014 typically a minimum of 600 mm in the UK, though 900 mm is common practice. For structural columns, use C25/30 concrete with a post anchor or bolt-down shoe cast into the top, rather than embedding the timber post directly in the concrete.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
  ],
  installationTips: [
    "Cut the column former to the correct height before placing it in the hole.",
    "Use a spirit level to ensure the former is plumb before filling with concrete.",
    "Set post anchors or J-bolts into the wet concrete at the top of each column.",
    "Flare the base of the excavation slightly wider than the former for better bearing.",
  ],
  commonMistakes: [
    "Not digging deep enough \u2014 piers must extend into firm, undisturbed ground below the frost line.",
    "Embedding timber posts directly in concrete \u2014 this traps moisture and causes rot; use a metal post shoe.",
    "Failing to check that column tops are all at the same level before the concrete sets.",
  ],
  faqs: [
    { question: "How deep should column piers be in the UK?", answer: "Column piers should extend at least 600 mm below ground level into firm, undisturbed soil. For decks and structures near trees in clay soil, 900 mm or deeper may be required. Check with building control for your specific site." },
    { question: "What diameter column former do I need?", answer: "For standard residential posts and decks, 250 mm diameter is the most common. Use 300 mm for heavy loads or larger posts. 200 mm is suitable for light structures like pergolas and small sheds." },
    { question: "How many bags of concrete per column?", answer: "A 250 mm diameter \u00d7 900 mm deep column needs about 0.044 m\u00b3 of concrete, which is approximately 4 bags of 25 kg general-purpose concrete. A 300 mm \u00d7 900 mm column needs about 0.064 m\u00b3 or roughly 5\u20136 bags." },
    { question: "Can I use postcrete for column piers?", answer: "Postcrete (quick-setting concrete) can be used for fence posts and light structures. For structural deck or pergola piers, use standard general-purpose or structural concrete (C25/30) for greater strength and durability." },
    { question: "Do I need reinforcement in concrete columns?", answer: "For standard residential deck piers, reinforcement is not usually required. For taller columns or those carrying significant loads, a structural engineer may specify steel rebar. Always check with your engineer for load-bearing applications." },
    { question: "Where can I buy column formers in the UK?", answer: "Column formers (Sonotube or equivalent) are available from Jewson, Travis Perkins, and specialist formwork suppliers. Sizes range from 150 mm to 600 mm diameter. For small quantities, some merchants stock them individually; for larger projects, buy by the box." },
  ],
};

export const concreteStepsCalculator: CalculatorSEOContent = {
  disclaimer: "Step dimensions must comply with Building Regulations Part K. Always verify riser and going measurements with building control.",
  howToUse: [
    "Enter the overall height (total rise) in millimetres.",
    "Enter the step width in metres.",
    "Enter the number of steps \u2014 divide total rise by individual riser height (typically 150\u2013220 mm).",
    "Click Calculate Materials for cubic metres of concrete.",
  ],
  materialInfo:
    "Concrete steps provide a durable, low-maintenance entrance to buildings and are governed by Building Regulations Part K (Protection from Falling, Collision, and Impact). For external steps, the maximum riser height is 220 mm and the minimum going (tread depth) is 220 mm, with an ideal riser of 150\u2013180 mm and going of 250\u2013300 mm. All risers in a flight must be uniform to within 5 mm. Steps are typically formed using timber formwork and filled with C25/30 concrete, often over a compacted sub-base of Type 1 aggregate. Reinforcement with A142 mesh or rebar is recommended, especially for wider flights. The finished surface should have a slip-resistant texture \u2014 achieved by brushing the fresh concrete or applying a non-slip finish. UK weather demands that external steps have a slight fall (about 1:60) to the front edge for drainage. Prices for ready-mix concrete are \u00a370\u2013\u00a3120 per m\u00b3, and a typical 3-step entrance flight uses 0.3\u20130.6 m\u00b3 of concrete. Handrails are required when there are two or more risers per Building Regulations Part K.",
  nextSteps: [
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Build formwork from 18 mm plywood or scaffold boards, well braced to resist the weight of wet concrete.",
    "Ensure all risers are the same height \u2014 uneven steps are a trip hazard and a Building Regulations failure.",
    "Brush the surface of each tread with a stiff broom whilst the concrete is still green for slip resistance.",
    "Cure the concrete for at least 7 days before removing formwork or allowing foot traffic.",
  ],
  commonMistakes: [
    "Uneven riser heights \u2014 all risers must be within 5 mm of each other per Part K.",
    "Not providing a slip-resistant finish \u2014 smooth concrete steps become extremely slippery when wet.",
    "Forgetting to include a handrail \u2014 required when there are two or more risers.",
  ],
  faqs: [
    { question: "What are the Building Regulations for concrete steps?", answer: "Part K specifies a maximum riser of 220 mm and minimum going of 220 mm for external steps. All risers must be uniform to within 5 mm. A handrail is required where there are two or more risers. Steps must have a slip-resistant surface." },
    { question: "How many bags of concrete for 3 steps?", answer: "A typical 3-step flight (900 mm wide, 180 mm risers, 250 mm going) uses approximately 0.3 m\u00b3 of concrete, or about 25 bags of 25 kg general-purpose concrete. For larger flights, ready-mix is more economical." },
    { question: "Do concrete steps need reinforcement?", answer: "Reinforcement is recommended for all concrete steps, especially flights wider than 900 mm. Use A142 mesh or 10 mm rebar at 200 mm centres. Reinforcement prevents cracking from settlement, thermal movement, and impact." },
    { question: "What is the ideal riser height for steps?", answer: "The ideal riser height for external steps is 150\u2013180 mm with a going of 250\u2013300 mm. This produces a comfortable walking angle of about 30\u201335 degrees. Steeper steps feel unsafe; shallower steps waste space." },
    { question: "Do I need a handrail on concrete steps?", answer: "Yes, if there are two or more risers. Building Regulations Part K requires a handrail on at least one side. For steps wider than 1.8 m, handrails are required on both sides. The handrail must be between 900 mm and 1000 mm above the pitch line." },
    { question: "How do I make concrete steps slip-resistant?", answer: "Brush the surface of each tread with a stiff broom while the concrete is still workable. This creates a textured finish that provides grip in wet conditions. Alternatively, apply a proprietary non-slip coating after curing, or embed carborundum strips into the nosing." },
  ],
};

// ─── FLOOR FRAMING ──────────────────────────────────────────────────────────

export const rimJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure the floor perimeter in metres.",
    "Select the joist depth (typically 200 mm, 250 mm, or 300 mm for UK timber-frame floors).",
    "Enter the standard timber length.",
    "Click Calculate Materials to get the board count and total linear metres.",
  ],
  materialInfo:
    "The rim joist (also called the band joist or header joist) is the timber member that runs around the perimeter of the floor frame, capping the ends of the floor joists. It provides lateral support to the joists, transfers loads to the wall below, and closes the floor cavity against air infiltration and pests. In UK timber-frame construction, rim joists are typically the same depth as the floor joists \u2014 commonly 200 mm, 225 mm, or 250 mm deep, in C16 or C24 graded softwood. Engineered options such as LVL (laminated veneer lumber) or I-joists are increasingly used for their dimensional stability and reduced shrinkage. Rim joists must be adequately nailed or screwed to each floor joist end (minimum 2 fixings per joist) and to the sole plate or wall below. In timber-frame buildings, the rim joist is a critical element of the building envelope and must be sealed with tape or mastic for airtightness under Part L. Prices range from \u00a35 to \u00a315 per metre depending on section size and grade, available from Jewson, Travis Perkins, and timber-frame suppliers.",
  nextSteps: [
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Bridging Calculator", href: "/calculators/floor-framing/bridging-calculator/" },
  ],
  installationTips: [
    "Set the rim joist flush with the outside edge of the sole plate.",
    "Nail or screw through the rim joist into the end of each floor joist with at least 2 fixings.",
    "Seal the junction between rim joist and sole plate with airtightness tape for Part L compliance.",
    "Check that the rim joist is level and straight before fixing the floor joists.",
  ],
  commonMistakes: [
    "Not aligning the rim joist flush with the wall framing below, creating a step that complicates sheathing.",
    "Inadequate fixings to joist ends \u2014 this allows joists to rotate under load.",
    "Forgetting to seal the rim joist area for airtightness, creating a major thermal bridge.",
  ],
  faqs: [
    { question: "What size timber for rim joists?", answer: "The rim joist should match the depth of the floor joists. For 200 mm joists, use 200 mm deep rim joist timber. Common UK sizes are 47\u00d7200 mm, 47\u00d7225 mm, and 47\u00d7250 mm in C16 or C24 softwood." },
    { question: "Can I use engineered timber for rim joists?", answer: "Yes. LVL (laminated veneer lumber) and glulam are excellent choices for rim joists because they are dimensionally stable, resist warping, and shrink less than sawn timber. They cost more but provide a better long-term result." },
    { question: "How do I join rim joists?", answer: "Butt joints should fall at a floor joist location and be secured with a metal connector plate or by nailing through both sides into the joist. Stagger joints so they do not align with joints in the row above or below." },
    { question: "Do rim joists need fire protection?", answer: "In timber-frame construction, the rim joist area is a potential fire spread path and must be fire-stopped with intumescent sealant or mineral wool in party walls and at floor-to-wall junctions per Building Regulations Part B." },
    { question: "How many rim joist boards do I need?", answer: "Divide the total floor perimeter in metres by the standard board length. For a 40 m perimeter using 4.8 m boards, you need approximately 9 boards plus 10% waste, so order 10 boards." },
    { question: "Where can I buy rim joist timber in the UK?", answer: "Rim joist timber is available from Jewson, Travis Perkins, and local timber merchants. For engineered options (LVL, I-joists), contact specialist suppliers such as Metsec, Masonite Beams, or James Jones." },
  ],
};

export const floorJoistCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the floor span (room width) in metres.",
    "Select the joist spacing: 400 mm or 600 mm centres.",
    "Enter the floor length to calculate the number of joists.",
    "Click Calculate Materials to get the joist count and total linear metres.",
  ],
  materialInfo:
    "Floor joists are the horizontal timber members that span between walls or beams to support the floor deck. In UK residential construction, joists are typically C16 or C24 graded softwood at 400 mm or 600 mm centres, with sizes ranging from 47\u00d7150 mm for short spans to 47\u00d7250 mm or larger for longer spans. The maximum span depends on the timber grade, joist size, spacing, and loading \u2014 refer to BS EN 1995-1-1 (Eurocode 5) span tables or the TRADA span tables for specific values. At 400 mm centres with C24 grade, a 47\u00d7200 mm joist can span approximately 3.5 m under domestic floor loading (1.5 kN/m\u00b2 imposed plus dead load). Engineered joists (I-joists, metal-web joists, or Posi-joists) are increasingly popular for longer spans, reduced weight, and easier service routing. They can span 5\u20137 m or more without intermediate support. Floor joists must be strutted (see bridging calculator) to prevent lateral buckling. Prices for C24 47\u00d7200 mm joists are approximately \u00a35\u2013\u00a310 per metre from UK builders\u2019 merchants.",
  nextSteps: [
    { label: "Rim Joist Calculator", href: "/calculators/floor-framing/rim-joist-calculator/" },
    { label: "Bridging Calculator", href: "/calculators/floor-framing/bridging-calculator/" },
    { label: "OSB Panel Calculator", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Crown each joist upward \u2014 identify the natural bow and install with the crown facing up.",
    "Fix joists to the wall plate with joist hangers or by skew-nailing with at least 2 nails each side.",
    "Install solid blocking or herringbone strutting at mid-span for joists exceeding 2.5 m.",
    "Use 400 mm centres for domestic floors to minimise deflection and floor bounce.",
  ],
  commonMistakes: [
    "Using undersized joists for the span \u2014 always check span tables for your timber grade and loading.",
    "Not strutting joists at mid-span, which leads to excessive lateral movement and squeaky floors.",
    "Installing joists crown-down, which increases mid-span deflection under load.",
  ],
  faqs: [
    { question: "What size floor joists do I need?", answer: "The joist size depends on span, spacing, timber grade, and loading. As a guide, 47\u00d7200 mm C24 joists at 400 mm centres can span about 3.5 m. For spans up to 4.5 m, use 47\u00d7250 mm. For longer spans, consider engineered joists. Always check BS 8103-3 or Eurocode 5 span tables." },
    { question: "Should I use 400 mm or 600 mm joist spacing?", answer: "400 mm centres are standard for domestic floor joists in the UK. This provides a stiffer floor and better support for standard 18 mm chipboard or OSB decking. 600 mm centres may be used with engineered joists or where a structural engineer has specified it." },
    { question: "What are engineered floor joists?", answer: "Engineered joists include I-joists (such as JJI-joists), metal-web joists (Posi-joists), and LVL beams. They span longer distances, are lighter, do not warp or shrink, and have pre-punched openings for services. They cost 20\u201340% more than sawn timber but save labour." },
    { question: "How much do floor joists cost in the UK?", answer: "C24 softwood joists cost approximately \u00a35\u2013\u00a310 per metre for 47\u00d7200 mm. Engineered I-joists cost \u00a38\u2013\u00a315 per metre for 200\u2013300 mm depths. For a typical 5 m \u00d7 8 m floor at 400 mm centres, budget \u00a3400\u2013\u00a3800 for sawn joists or \u00a3700\u2013\u00a31,200 for engineered." },
    { question: "Do floor joists need to be treated?", answer: "Floor joists in a dry, ventilated space above a DPM do not normally require preservative treatment. Joists in contact with external walls, in suspended ground floors with ventilated voids, or in damp conditions should be treated to Use Class 2 per BS 8417." },
    { question: "How do I support floor joists at the walls?", answer: "Floor joists are typically supported on wall plates using joist hangers (the preferred method for masonry walls) or by building them into the wall by at least 90 mm. In timber-frame construction, joists sit on the sole plate and are fixed with joist hangers or direct nailing." },
  ],
};

export const bridgingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the number of floor joists.",
    "Enter the joist span in metres.",
    "Select bridging type: herringbone strutting or solid blocking.",
    "Click Calculate Materials to get the piece count.",
  ],
  materialInfo:
    "Bridging (strutting) prevents floor joists from twisting, buckling, or vibrating under load. Building Regulations and BS 8103-3 require strutting at mid-span for joists exceeding 2.5 m, and at third-points for joists exceeding 4.5 m. The two main types are herringbone strutting (diagonal timber or metal struts forming a V pattern between joists) and solid blocking (full-depth timber blocks between joists). Herringbone strutting uses 38\u00d738 mm or 50\u00d750 mm softwood nailed diagonally between joists, or proprietary galvanised steel struts. Solid blocking uses off-cuts of the same depth timber as the joists. Metal herringbone struts (such as Catnic or Expamet products) are popular in the UK because they are quick to install, self-tightening, and available in standard sizes for 400 mm and 600 mm joist centres. A pack of 20 metal struts costs approximately \u00a310\u2013\u00a320 from Wickes or B&Q. Timber herringbone strutting costs less in materials but takes longer to cut and fit.",
  nextSteps: [
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Subfloor Adhesive Calculator", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "OSB Panel Calculator", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Install strutting at mid-span for joists up to 4.5 m, and at third-points for longer spans.",
    "For herringbone strutting, nail the top of each strut to one joist and the bottom to the adjacent joist.",
    "Ensure solid blocking is a tight fit between joists and nailed with at least 2 nails at each end.",
    "Do not forget to strut the last joist to the wall with a solid block.",
  ],
  commonMistakes: [
    "Omitting strutting altogether \u2014 this leads to bouncy, squeaky floors and joist rotation.",
    "Installing herringbone struts but forgetting to pack the last joist to the wall, which allows the entire row to shift.",
    "Using undersized timber for solid blocking \u2014 it must be the same depth as the joists.",
  ],
  faqs: [
    { question: "When is joist strutting required?", answer: "Strutting is required at mid-span for joists exceeding 2.5 m span, and at third-points for spans exceeding 4.5 m, per BS 8103-3 and Building Regulations guidance." },
    { question: "Which is better: herringbone or solid blocking?", answer: "Herringbone strutting is generally preferred because it is more effective at preventing joist rotation and is easier to install, especially with metal struts. Solid blocking is simpler but can shrink and become loose over time if the timber dries out." },
    { question: "Can I use metal struts instead of timber?", answer: "Yes. Metal herringbone struts (Catnic, Expamet) are widely used in the UK. They are quick to install, do not shrink, and are available in sizes for 400 mm and 600 mm centres. They cost slightly more than timber but save significant labour time." },
    { question: "How many struts do I need per joist bay?", answer: "Each joist bay needs 2 struts for herringbone strutting (one diagonal each way). For a floor with 20 joists, you have 19 bays, needing 38 struts per row of bridging. At mid-span only, that is 38 struts total." },
    { question: "Do I need strutting for engineered joists?", answer: "Yes. Engineered I-joists and metal-web joists still require strutting, though the manufacturer may specify different requirements. Check the joist manufacturer\u2019s installation guide for specific strutting details." },
    { question: "Where can I buy joist struts in the UK?", answer: "Metal joist struts are available from Wickes, B&Q, Screwfix, Jewson, and Travis Perkins. They come in packs sized for specific joist depths and spacings. Timber for herringbone strutting can be cut from standard 38\u00d738 mm or 50\u00d750 mm battens." },
  ],
};

export const subfloorAdhesiveCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total floor area in square metres.",
    "Select the adhesive cartridge size.",
    "Click Calculate Materials to see how many cartridges you need.",
  ],
  materialInfo:
    "Subfloor adhesive is a construction adhesive applied to the top of floor joists before laying the deck boards (chipboard or OSB). Gluing the deck to the joists creates a composite action that significantly reduces floor bounce and eliminates squeaks. In the UK, the most common subfloor adhesive is a polyurethane or SMP (silyl modified polymer) type, sold in 310 ml cartridge tubes for use with a standard caulking gun. A single 310 ml cartridge covers approximately 3\u20134 linear metres of joist top, which equates to roughly 1.2\u20131.6 m\u00b2 of floor area at 400 mm joist centres. Popular brands include Gorilla Glue, Bostik, Soudal, and EVO-STIK. Prices range from \u00a33 to \u00a38 per cartridge at Screwfix, B&Q, or Wickes. For large floor areas, adhesive is also available in 900 ml foil packs for use with a larger applicator gun, covering approximately 10\u201312 linear metres per pack. Gluing is particularly important for chipboard floors, which are more prone to squeaking than OSB or plywood.",
  nextSteps: [
    { label: "OSB Panel Calculator", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Plasterboard Screw Calculator", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
  ],
  installationTips: [
    "Apply a continuous bead of adhesive to the top of each joist just before laying the deck boards.",
    "Work in sections \u2014 only apply adhesive to joists you can cover within 10\u201315 minutes.",
    "Press the deck board firmly onto the adhesive and screw or nail immediately.",
    "In cold weather, warm the cartridges indoors before use \u2014 cold adhesive flows poorly.",
  ],
  commonMistakes: [
    "Applying adhesive too far ahead of the boards \u2014 it skins over and loses its bond.",
    "Using too little adhesive \u2014 a thin, continuous bead is needed along every joist.",
    "Skipping adhesive altogether \u2014 this is the single biggest cause of squeaky chipboard floors.",
  ],
  faqs: [
    { question: "Do I need to glue subfloor boards?", answer: "Yes. Gluing subfloor boards to joists dramatically reduces squeaking and creates a stiffer floor. It is considered best practice in UK house building and is required by many timber-frame manufacturers." },
    { question: "How many tubes of adhesive per m\u00b2?", answer: "At 400 mm joist centres, approximately 1 cartridge (310 ml) covers 1.2\u20131.6 m\u00b2. For a 40 m\u00b2 floor, budget 25\u201335 cartridges." },
    { question: "What type of adhesive should I use?", answer: "Use a flexible polyurethane or SMP construction adhesive designed for subfloors. Avoid rigid adhesives (like PVA) that become brittle and crack under floor movement. Look for products specifically labelled for subfloor bonding." },
    { question: "Can I use expanding foam instead?", answer: "No. Expanding foam does not provide the structural bond needed for subfloor applications. Use a proper construction adhesive designed for timber-to-timber bonding under load." },
    { question: "Does adhesive replace screws?", answer: "No. Adhesive works in conjunction with screws or nails, not as a replacement. The screws provide immediate hold and clamping pressure while the adhesive cures. Use both for the best result." },
    { question: "How much does subfloor adhesive cost?", answer: "A 310 ml cartridge costs \u00a33\u2013\u00a38 at UK retailers. For a 40 m\u00b2 floor, adhesive costs approximately \u00a375\u2013\u00a3200 in total \u2014 a small investment for a squeak-free floor." },
  ],
};

export const osbPanelCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the floor length and width in metres.",
    "The calculator uses standard 1200\u00d72400 mm OSB panels (2.88 m\u00b2 per sheet).",
    "Click Calculate Materials to get the sheet count.",
  ],
  materialInfo:
    "OSB (oriented strand board) is an engineered wood panel used for floor decking, wall sheathing, and roof decking in UK timber-frame construction. Standard sheets are 1200\u00d72400 mm (some suppliers also stock 1220\u00d72440 mm), with common thicknesses of 11 mm, 15 mm, and 18 mm. For floor decking on joists at 400 mm centres, 18 mm tongue-and-groove OSB/3 is the standard specification. OSB/3 is rated for structural use in humid conditions, which is the appropriate grade for floors and roofs. Chipboard (P5 moisture-resistant) is the main alternative for floors, offering a smoother surface but less moisture resistance. OSB prices in the UK range from \u00a310 to \u00a325 per sheet depending on thickness and grade, available from Jewson, Travis Perkins, Wickes, and B&Q. Each 1200\u00d72400 mm sheet covers 2.88 m\u00b2 (2.97 m\u00b2 for the slightly larger 1220\u00d72440 mm sheets). Always use tongue-and-groove edges for floor decking to create a continuous, rigid surface. Stagger the sheet joints so that the short edges do not align on the same joist across adjacent sheets.",
  nextSteps: [
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Subfloor Adhesive Calculator", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Plasterboard Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Lay OSB sheets with the long edge perpendicular to the joists for maximum strength.",
    "Stagger end joints by at least 600 mm between adjacent rows.",
    "Leave a 10\u201312 mm expansion gap around the perimeter of the floor.",
    "Glue and screw at 150 mm centres around edges and 300 mm in the field.",
  ],
  commonMistakes: [
    "Not staggering the joints between rows, creating a weak line across the floor.",
    "Forgetting to leave an expansion gap at walls \u2014 OSB swells with moisture and will buckle if tight.",
    "Using OSB/2 instead of OSB/3 \u2014 OSB/2 is for dry conditions only and is not suitable for floors.",
  ],
  faqs: [
    { question: "What thickness OSB for floors?", answer: "Use 18 mm tongue-and-groove OSB/3 for floor decking on joists at 400 mm centres. For 600 mm joist centres, use 22 mm OSB/3. Always specify OSB/3 grade, which is rated for structural use in humid conditions." },
    { question: "OSB or chipboard for floors?", answer: "Both are suitable. OSB/3 is more moisture-resistant and structurally stronger. P5 chipboard provides a smoother surface for vinyl or carpet. OSB is preferred in timber-frame construction; chipboard is common in masonry construction with timber floors." },
    { question: "How many sheets for a 4 m \u00d7 5 m room?", answer: "A 4\u00d75 m room is 20 m\u00b2. Each 1200\u00d72400 mm sheet covers 2.88 m\u00b2. You need 20 / 2.88 = 7 sheets, plus 10% waste = 8 sheets." },
    { question: "Do I need tongue-and-groove OSB for floors?", answer: "Yes. Tongue-and-groove edges are essential for floor decking because they create a rigid, continuous surface and prevent differential movement between panels. Square-edge OSB is used for wall sheathing and non-floor applications." },
    { question: "How much does OSB cost in the UK?", answer: "OSB/3 prices range from \u00a310 to \u00a325 per 1200\u00d72400 mm sheet. 18 mm T&G OSB/3 costs approximately \u00a318\u2013\u00a325 per sheet. Bulk buying (full packs) from a builders\u2019 merchant gives the best price." },
    { question: "Can I use OSB for a flat roof?", answer: "Yes. OSB/3 is widely used for flat roof decking in the UK. Use 18 mm on joists at 400 mm centres or 11 mm on closely spaced rafters. Ensure adequate ventilation above the OSB to prevent condensation." },
  ],
};

// ─── WALL FRAMING ───────────────────────────────────────────────────────────

export const studCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total wall length in metres.",
    "Select the stud spacing: 400 mm or 600 mm centres.",
    "Enter the number of door and window openings for extra studs.",
    "Click Calculate Materials to get the stud count.",
  ],
  materialInfo:
    "Wall studs are the vertical timber members that form the structural framework of timber-frame walls. In UK construction, studs are typically C16 or C24 graded softwood at 400 mm or 600 mm centres, with 600 mm being the most common for external walls when using structural sheathing. Standard stud sizes are 38\u00d789 mm (for 100 mm walls) or 38\u00d7140 mm (for 150 mm walls), cut to 2.4 m for standard storey height. Each door or window opening requires additional studs: two cripple studs (jack studs) to support the header, and at least one extra stud on each side. Corners typically require three studs to provide nailing surfaces for internal and external finishes. External wall studs must comply with BS EN 1995-1-1 (Eurocode 5) for structural adequacy, and the wall assembly must meet Building Regulations Part L for thermal performance. Stud timber costs approximately \u00a32\u2013\u00a35 per 2.4 m length at UK builders\u2019 merchants. For a standard 3-bedroom house, you can expect to use 200\u2013350 studs depending on wall length and opening count.",
  nextSteps: [
    { label: "Bottom Plate Calculator", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Top Plate Calculator", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Header Calculator", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Mark all stud positions on the sole plate and head plate before assembly.",
    "Crown each stud with the bow facing the same direction for a consistent wall surface.",
    "Nail through the plate into the stud end with at least 2 nails (skew-nailing) or use a nail gun.",
    "Check the wall for plumb and straightness before fixing sheathing or plasterboard.",
  ],
  commonMistakes: [
    "Mixing up 400 mm and 600 mm centres \u2014 ensure the spacing matches your sheathing and insulation specification.",
    "Forgetting to add extra studs at corners and openings, leaving insufficient nailing surfaces.",
    "Not checking studs for straightness before installation \u2014 bowed studs create an uneven wall.",
  ],
  faqs: [
    { question: "Should I use 400 mm or 600 mm stud spacing?", answer: "600 mm centres are standard for external walls in UK timber-frame construction when structural sheathing (OSB or plywood) is used. 400 mm centres are used for heavily loaded walls, non-sheathed walls, and where additional fixing points are needed. Check your structural engineer\u2019s specification." },
    { question: "What size studs for UK timber-frame walls?", answer: "For 100 mm walls (typically internal partitions), use 38\u00d789 mm studs. For 150 mm external walls (to accommodate thicker insulation), use 38\u00d7140 mm studs. C16 grade is the minimum for structural walls; C24 is preferred for better span and load capacity." },
    { question: "How many studs for a 5 m wall?", answer: "A 5 m wall at 600 mm centres needs 5000/600 + 1 = approximately 9 studs for the basic wall. Add 2 for each corner (6 total for 2 corners) and 4 for each opening (cripple studs and king studs). A wall with 2 corners and 1 window needs approximately 19 studs." },
    { question: "Do I need fire-stopping at stud walls?", answer: "Yes. Building Regulations Part B requires fire-stopping in concealed cavities within timber-frame walls, particularly at floor and ceiling junctions, around openings, and in party walls. Use intumescent sealant or mineral wool cavity barriers." },
    { question: "Can I use metal studs instead of timber?", answer: "Yes. Lightweight steel framing (light gauge steel or LGS) is used in UK commercial and some residential construction. Metal studs do not burn, shrink, or warp. However, they require different fixings, create thermal bridges, and are typically installed by specialist contractors." },
    { question: "Where can I buy wall studs in the UK?", answer: "Wall studs in C16 and C24 grades are available from Jewson, Travis Perkins, and local timber merchants. For timber-frame projects, pre-cut studs can be ordered from timber-frame manufacturers such as Scotframe, Stewart Milne, or Walker Timber." },
  ],
};

export const bottomPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total wall length in metres.",
    "Select the plate size (matching your stud width).",
    "Enter the standard timber length.",
    "Click Calculate Materials for the board count and total linear metres.",
  ],
  materialInfo:
    "The bottom plate (sole plate) is the horizontal timber member at the base of a stud wall, nailed or screwed to the floor deck or foundation. It anchors the studs and distributes wall loads to the structure below. In UK timber-frame construction, the bottom plate is typically the same section as the studs: 38\u00d789 mm for 100 mm walls or 38\u00d7140 mm for 150 mm walls, in C16 or C24 softwood. Ground-floor sole plates in contact with concrete must be pressure treated (see sill plate calculator). Upper-floor sole plates do not require treatment. The plate is cut from standard lengths (2.4 m, 3.0 m, 3.6 m, or 4.8 m) and laid continuously along the wall line, with joints falling at stud locations. Each stud is nailed through the plate with 2 nails, or the wall is assembled flat on the deck and tilted up as a unit. Prices are \u00a32\u2013\u00a35 per metre depending on section size, from Jewson, Travis Perkins, or your timber merchant.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Top Plate Calculator", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
  ],
  installationTips: [
    "Mark stud positions on the plate before assembly for consistent spacing.",
    "Nail the plate to the floor deck with 90 mm nails at 400 mm centres.",
    "Ensure the plate is straight and level along its full length.",
    "Cut doorway openings out of the plate after the wall is erected and plumbed.",
  ],
  commonMistakes: [
    "Placing joints between studs, which creates a weak point in the wall base.",
    "Not treating ground-floor plates in contact with concrete, leading to rot.",
    "Failing to anchor the plate to the floor, allowing the wall to shift.",
  ],
  faqs: [
    { question: "What size timber for bottom plates?", answer: "The bottom plate must match the stud width: 38\u00d789 mm for 100 mm walls or 38\u00d7140 mm for 150 mm walls. Use C16 or C24 grade softwood." },
    { question: "Do bottom plates need to be treated?", answer: "Only if they are in contact with concrete or masonry (ground floor on a slab). Upper-floor bottom plates on a timber deck do not require treatment." },
    { question: "Can I use a single bottom plate?", answer: "Yes. Unlike the top plate, which is typically doubled, the bottom plate is a single layer in standard UK timber-frame construction." },
    { question: "How do I attach the bottom plate to the floor?", answer: "Nail through the plate into the floor deck with 90 mm nails at 400 mm centres, or use screws for a stronger connection. On concrete, use anchor bolts or concrete screws (e.g., Tapcon or Thunderbolt)." },
    { question: "Do I cut the bottom plate at doorways?", answer: "Yes. After the wall is erected and plumbed, cut the bottom plate out of the doorway opening flush with the inside of the jack studs. This allows the door frame to sit on the floor." },
    { question: "How much timber for bottom plates on a typical house?", answer: "A typical 3-bedroom house has approximately 60\u201380 m of external wall and 40\u201360 m of internal partitions, requiring roughly 100\u2013140 m of bottom plate timber in total." },
  ],
};

export const topPlateCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total wall length in metres.",
    "Select single or double top plate.",
    "Enter the standard timber length.",
    "Click Calculate Materials for the board count and total linear metres.",
  ],
  materialInfo:
    "The top plate (head plate) runs along the top of the wall studs, tying them together and providing a bearing surface for floor joists, ceiling joists, or roof trusses above. In UK timber-frame construction, the top plate is the same section as the studs: 38\u00d789 mm or 38\u00d7140 mm. A double top plate is standard practice in platform-frame construction, with the upper layer overlapping joints in the lower layer by at least 1200 mm and lapping at corners and wall intersections to tie the structure together. Some UK timber-frame systems use a single top plate with metal strap connections at joints and corners instead. The top plate is nailed to each stud with at least 2 nails, and the upper plate is nailed to the lower plate at 400 mm centres. Joints in the lower plate must fall at stud locations. Prices are the same as stud timber: \u00a32\u2013\u00a35 per metre for C16/C24 softwood from UK builders\u2019 merchants.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Bottom Plate Calculator", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Roof Truss Calculator", href: "/calculators/roofing/truss-calculator/" },
  ],
  installationTips: [
    "Install the lower top plate first, nailing it to each stud with at least 2 nails.",
    "Overlap the upper plate joints by at least 1200 mm from lower plate joints.",
    "Lap the upper plate at all corners and wall intersections for structural continuity.",
    "Nail the upper plate to the lower plate at 400 mm centres with 90 mm nails.",
  ],
  commonMistakes: [
    "Aligning upper and lower plate joints \u2014 they must be offset by at least 1200 mm.",
    "Not lapping the upper plate at corners, which weakens the connection between perpendicular walls.",
    "Using a single plate where a double plate is required by the structural specification.",
  ],
  faqs: [
    { question: "Do I need a double top plate?", answer: "A double top plate is standard in platform-frame timber construction. It ties walls together at corners and intersections and distributes point loads from joists and trusses. Some systems allow a single plate with metal strap connections \u2014 check your engineer\u2019s specification." },
    { question: "How do I join top plates?", answer: "Joints in the lower plate must fall at stud locations. The upper plate must overlap lower plate joints by at least 1200 mm. At corners, the upper plate of one wall laps over the top of the perpendicular wall\u2019s plate." },
    { question: "What size timber for top plates?", answer: "Top plates match the stud size: 38\u00d789 mm for 100 mm walls or 38\u00d7140 mm for 150 mm walls, in C16 or C24 softwood." },
    { question: "Can I use a steel strap instead of a double plate?", answer: "Yes. Some UK timber-frame systems use a single top plate with galvanised steel strapping across joints and at corners. This reduces timber use but requires careful detailing. Check with your structural engineer." },
    { question: "How much timber for top plates on a typical house?", answer: "For a double top plate, multiply the total wall length by 2. A typical 3-bedroom house with 100\u2013140 m of walls needs 200\u2013280 m of top plate timber." },
    { question: "Do top plates need treatment?", answer: "Top plates do not normally require preservative treatment as they are well above ground level in a dry, enclosed environment. Treatment is only needed if the timber will be exposed to persistent moisture." },
  ],
};

export const headerCalculator: CalculatorSEOContent = {
  disclaimer: "Header sizes depend on span, load, and timber grade. Always verify with a structural engineer for load-bearing walls.",
  howToUse: [
    "Enter the opening width (span) in metres.",
    "Enter the number of openings.",
    "Select the header configuration.",
    "Click Calculate Materials for the timber required.",
  ],
  materialInfo:
    "Headers (lintels in UK terminology) are horizontal beams that span above door and window openings, transferring the load from above to the jack studs on either side. In UK timber-frame construction, headers are typically built from doubled or tripled timber members bolted together, or from engineered timber such as LVL (laminated veneer lumber) or glulam. For openings up to 1.2 m in non-load-bearing partitions, a single 38\u00d789 mm header is sufficient. For load-bearing walls, the header size depends on the span, load, and timber grade \u2014 a structural engineer must specify the size. Common header sizes in UK practice include doubled 38\u00d7200 mm for spans up to 1.5 m and doubled 38\u00d7250 mm for spans up to 2.0 m (in C24 timber). For wider spans, LVL or steel lintels (Catnic or IG Lintels) are used. Timber headers cost \u00a35\u2013\u00a315 per metre depending on section size. Proprietary steel lintels cost \u00a320\u2013\u00a3100 per lintel depending on span and load rating.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Exterior Sheathing Calculator", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
    { label: "Window Flashing Calculator", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Support headers on jack studs (cripple studs) that transfer the load directly to the bottom plate.",
    "For doubled timber headers, bolt or nail the members together at 300 mm centres with a plywood spacer if needed.",
    "Ensure the header sits tight against the top plate with no gap.",
    "For steel lintels, check the minimum bearing length on each side (usually 150 mm).",
  ],
  commonMistakes: [
    "Undersizing the header for the span and load \u2014 always get engineering confirmation for load-bearing walls.",
    "Not providing adequate bearing on jack studs \u2014 minimum 38 mm on each side for timber headers.",
    "Omitting jack studs and hanging the header from nails alone, which cannot carry the load.",
  ],
  faqs: [
    { question: "What size header do I need for a door opening?", answer: "For a standard 900 mm door in a non-load-bearing partition, a single 38\u00d789 mm header is sufficient. For load-bearing walls, the header must be sized by a structural engineer based on the span and loads above." },
    { question: "Can I use a steel lintel instead of a timber header?", answer: "Yes. Steel lintels (Catnic, IG, Keystone) are commonly used in UK construction, particularly in masonry walls and for wider spans. They are sized by span, load, and wall type \u2014 manufacturers provide selection guides." },
    { question: "What is a cripple stud?", answer: "A cripple stud (also called a jack stud or trimmer stud in UK terminology) is a short stud that supports the header and transfers its load to the sole plate. One cripple stud is required on each side of the opening minimum." },
    { question: "Do I need a header in a non-load-bearing wall?", answer: "Yes, but a lighter one. Even non-load-bearing partition walls need a header over openings to support the short studs above the opening and maintain the wall\u2019s rigidity." },
    { question: "How do I support a header over a wide opening?", answer: "For openings wider than 2.0 m, use an engineered timber beam (LVL or glulam), a steel lintel, or a steel flitch plate sandwiched between timber members. A structural engineer must design the header for any significant span." },
    { question: "What is a flitch beam?", answer: "A flitch beam is a timber header with a steel plate bolted between two timber members. It combines the strength of steel with the fixing convenience of timber. Flitch beams are custom-fabricated and must be designed by a structural engineer." },
  ],
};

export const exteriorSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total exterior wall area in square metres.",
    "Deduct areas for windows and doors if desired.",
    "Select the panel size (1200\u00d72400 mm is standard).",
    "Click Calculate Materials for the sheet count.",
  ],
  materialInfo:
    "Exterior sheathing provides structural bracing, wind resistance, and a substrate for the breather membrane on timber-frame walls. In the UK, OSB/3 (9 mm or 11 mm) is the most common sheathing material, though plywood and proprietary boards are also used. Standard sheet size is 1200\u00d72400 mm (2.88 m\u00b2). The sheathing is nailed to the studs with 50 mm or 63 mm ring-shank nails at 150 mm centres around the edges and 300 mm in the field. It must extend from the sole plate to the top plate continuously to provide effective racking resistance per BS EN 1995-1-1. Openings must be framed with noggins to provide nail fixings at all panel edges. OSB/3 sheathing costs \u00a38\u2013\u00a318 per sheet at UK builders\u2019 merchants. Bitumen-impregnated boards (such as Masterboard or similar) provide an alternative with built-in moisture resistance but less structural capacity. A breather membrane (such as Tyvek or Protect TF200) must be fixed over the sheathing to allow moisture vapour to escape whilst preventing rain penetration.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Breather Membrane Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Window Flashing Calculator", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Nail sheathing with the long edge vertical, spanning from sole plate to top plate.",
    "Use 50 mm ring-shank nails at 150 mm centres around edges and 300 mm in the field.",
    "Leave a 3 mm gap between sheets to allow for moisture expansion.",
    "Stagger horizontal joints between rows by at least 600 mm.",
  ],
  commonMistakes: [
    "Not nailing at the correct centres \u2014 under-nailing reduces the racking resistance of the wall.",
    "Placing sheathing joints between studs where there is no nailing support.",
    "Omitting the breather membrane over the sheathing, which allows rain to wet the OSB.",
  ],
  faqs: [
    { question: "What thickness sheathing for timber-frame walls?", answer: "9 mm OSB/3 is the most common thickness for structural sheathing in UK timber-frame walls at 600 mm stud centres. For additional bracing or where specified by the engineer, 11 mm OSB/3 or 9 mm plywood may be required." },
    { question: "Do I need sheathing on all walls?", answer: "Building Regulations require adequate bracing for all timber-frame walls. Sheathing provides the most effective bracing. Where sheathing is not used, diagonal bracing or metal strapping must be provided per the structural engineer\u2019s design." },
    { question: "What is the difference between OSB and plywood sheathing?", answer: "OSB/3 is cheaper and provides good racking resistance. Plywood offers better moisture resistance and nail holding. Both are acceptable for wall sheathing in UK timber-frame construction. Check the structural specification for your project." },
    { question: "Do I need a breather membrane over sheathing?", answer: "Yes. A breather membrane (vapour-permeable water-resistant barrier) must be installed over the sheathing to prevent rain penetration whilst allowing moisture vapour to escape from the wall cavity. Tyvek and Protect TF200 are common UK brands." },
    { question: "How many sheets for a typical house?", answer: "A typical 3-bedroom house has approximately 150\u2013200 m\u00b2 of external wall area (minus openings). At 2.88 m\u00b2 per sheet plus 10% waste, you need approximately 60\u201380 sheets of OSB/3 sheathing." },
    { question: "Can I use plasterboard as structural sheathing?", answer: "No. Standard plasterboard does not provide structural bracing. Some proprietary boards (such as Gyproc Habito or DuPlex) have enhanced properties but are not rated for racking resistance. Use OSB/3, plywood, or approved structural boards for sheathing." },
  ],
};

// ─── ROOFING ────────────────────────────────────────────────────────────────

export const trussCalculator: CalculatorSEOContent = {
  disclaimer: "Roof trusses must be individually designed and manufactured. This calculator provides an estimate for budgeting. Always obtain a truss design from a licensed truss manufacturer.",
  howToUse: [
    "Enter the roof length in metres.",
    "Select the truss spacing (600 mm is standard in the UK).",
    "Click Calculate Materials to get the truss count.",
  ],
  materialInfo:
    "Roof trusses are pre-engineered triangular timber frames that span from wall to wall, supporting the roof covering, ceiling, and any imposed loads (wind, snow, maintenance access). In UK residential construction, fink (W-shaped) trusses at 600 mm centres are the most common type, with spans typically ranging from 5 m to 12 m. Each truss is individually designed by the manufacturer using proprietary software to comply with BS EN 1995-1-1 (Eurocode 5) and meet the loading requirements specified by the structural engineer. Trusses are fabricated from C24 graded softwood with galvanised steel nail plates at every joint. They arrive on site ready to lift into position, significantly reducing on-site labour compared to cut-roof construction. Truss prices in the UK range from \u00a340 to \u00a3150 per truss depending on span, pitch, and complexity. A typical 3-bedroom detached house requires 25\u201340 trusses. Lead times are usually 2\u20134 weeks from order, so plan ahead. All trusses must be braced and restrained according to the manufacturer\u2019s bracing schedule and BS 5268-3.",
  nextSteps: [
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Roofing Underlayment Calculator", href: "/calculators/roofing/underlayment-calculator/" },
  ],
  installationTips: [
    "Lift trusses into position with a crane or by hand (for small trusses), setting them at the correct centres.",
    "Brace trusses immediately with temporary and permanent bracing per the manufacturer\u2019s schedule.",
    "Fix each truss to the wall plate with truss clips (galvanised steel framing anchors).",
    "Check that all trusses are plumb and at consistent spacing before fixing battens.",
  ],
  commonMistakes: [
    "Not bracing trusses per the manufacturer\u2019s schedule \u2014 unbraced trusses can collapse during construction.",
    "Cutting or modifying trusses on site \u2014 this voids the design and can cause structural failure.",
    "Storing trusses flat on the ground without support \u2014 they should be stored upright or on bearers at third-points.",
  ],
  faqs: [
    { question: "What spacing for roof trusses in the UK?", answer: "600 mm centres are standard for UK residential trusses. 400 mm centres are used in high snow-load areas or where specified by the structural engineer." },
    { question: "How much do roof trusses cost in the UK?", answer: "Standard fink trusses cost \u00a340\u2013\u00a3100 each for spans up to 8 m. Larger spans or complex shapes (attic trusses, raised tie) cost \u00a3100\u2013\u00a3250 each. Budget \u00a31,500\u2013\u00a34,000 for a typical house roof truss package." },
    { question: "Can I cut or modify roof trusses?", answer: "No. Trusses are engineered as a system. Cutting any member or joint invalidates the design and can cause structural failure. If modifications are needed, consult the truss manufacturer for a redesign." },
    { question: "What is the lead time for trusses?", answer: "Typical lead time is 2\u20134 weeks from order in the UK. Complex trusses or busy periods may extend this to 6 weeks. Order trusses well before you need them to avoid project delays." },
    { question: "Do I need building control approval for trusses?", answer: "Yes. The truss design must be submitted to building control as part of the structural package. Building control will inspect the trusses during their site visit to verify they match the approved design and are properly braced." },
    { question: "What bracing do roof trusses need?", answer: "Every truss package comes with a bracing schedule from the manufacturer. This typically includes diagonal bracing on the underside of the rafters, longitudinal bracing along the apex, and chevron bracing in the plane of the ceiling ties. Bracing must be installed exactly as specified." },
  ],
};

export const rafterCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the roof length in metres.",
    "Select the rafter spacing: 400 mm or 600 mm centres.",
    "Click Calculate Materials for the rafter count.",
  ],
  materialInfo:
    "Rafters are the sloping timber members in a cut roof (as opposed to a trussed roof) that run from the ridge board down to the wall plate, supporting the roof covering. In UK cut-roof construction, rafters are typically C16 or C24 graded softwood at 400 mm centres, with sizes depending on span, pitch, and loading per the Eurocode 5 span tables. Common rafter sizes are 47\u00d7125 mm, 47\u00d7150 mm, and 47\u00d7175 mm. Each rafter is birdsmouth-cut to sit on the wall plate and has a plumb cut at the ridge. Cut roofs are more labour-intensive than trussed roofs but allow full use of the loft space for habitable rooms without the obstructions created by truss web members. Rafter timber costs approximately \u00a34\u2013\u00a310 per metre from UK builders\u2019 merchants. A structural engineer or the TRADA span tables must be consulted to verify the rafter size for the specific span, pitch, and snow/wind loading of your site.",
  nextSteps: [
    { label: "Ridge Board Calculator", href: "/calculators/roofing/ridge-board-calculator/" },
    { label: "Roof Truss Calculator", href: "/calculators/roofing/truss-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Cut a pattern rafter first and use it as a template for all others.",
    "Make the birdsmouth cut no deeper than one-third of the rafter depth.",
    "Fix rafters to the wall plate with framing anchors or skew-nailing.",
    "Install collar ties at every third rafter pair (or as specified) to resist outward thrust.",
  ],
  commonMistakes: [
    "Cutting the birdsmouth too deep, which weakens the rafter at its most critical point.",
    "Not providing adequate restraint at the wall plate, allowing rafters to spread under load.",
    "Using undersized rafters for the span and pitch \u2014 always check span tables.",
  ],
  faqs: [
    { question: "What size rafters do I need?", answer: "Rafter size depends on span, pitch, spacing, timber grade, and loading. As a guide, 47\u00d7150 mm C24 rafters at 400 mm centres can span approximately 3.0 m on a 30-degree pitch. Check Eurocode 5 or TRADA span tables for your specific conditions." },
    { question: "Should I use a cut roof or trussed roof?", answer: "Trussed roofs are faster and cheaper for standard designs. Cut roofs are preferred when you want habitable loft space (loft conversions) or complex roof geometries. A cut roof gives full use of the loft volume." },
    { question: "What is a birdsmouth cut?", answer: "A birdsmouth is a V-shaped notch cut into the underside of the rafter where it sits on the wall plate. It provides a flat bearing surface. The cut should not exceed one-third of the rafter depth to maintain structural integrity." },
    { question: "Do I need collar ties with rafters?", answer: "Yes. Collar ties (or collar beams) connect opposing rafters at a point above the ceiling level to prevent the roof from spreading. They are typically required at every third rafter pair, or as specified by the structural engineer." },
    { question: "How do I fix rafters to the wall plate?", answer: "Use galvanised framing anchors (truss clips) nailed to both the rafter and the wall plate. Alternatively, skew-nail with 3 nails (2 on one side, 1 on the other). Building Regulations require a positive connection to resist uplift forces." },
    { question: "How much do rafters cost?", answer: "C24 rafter timber costs approximately \u00a34\u2013\u00a310 per metre depending on section size. For a typical semi-detached house with 20\u201330 rafters at 3\u20134 m each, budget \u00a3300\u2013\u00a3800 for rafter timber alone." },
  ],
};

export const ridgeBoardCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total roof ridge length in metres.",
    "Select the board depth (it should be at least as deep as the rafter plumb cut).",
    "Enter the standard board length.",
    "Click Calculate Materials for the board count.",
  ],
  materialInfo:
    "The ridge board is the horizontal timber member at the apex of a cut roof, running the full length of the ridge. Rafters from each side of the roof are nailed to the ridge board, which holds them in alignment and provides a fixing surface. In UK construction, the ridge board is typically 25 mm or 38 mm thick and at least as deep as the plumb cut of the rafter \u2014 commonly 47\u00d7150 mm or 47\u00d7200 mm in C16 or C24 softwood. The ridge board is non-structural in a conventional couple roof (the rafters and ceiling joists form the structural triangle), but it is essential for alignment and acts as a spacer. For purlin-and-rafter roofs, a structural ridge beam may be required \u2014 this is a much larger member designed to carry roof loads and is sized by the structural engineer. Ridge board timber costs \u00a35\u2013\u00a312 per metre from UK builders\u2019 merchants. Joints in the ridge board should be scarfed or butt-jointed at a rafter location.",
  nextSteps: [
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Roof Truss Calculator", href: "/calculators/roofing/truss-calculator/" },
  ],
  installationTips: [
    "Support the ridge board temporarily at the correct height before fixing rafters.",
    "Nail each rafter to the ridge board with at least 3 nails.",
    "Check that the ridge is level and straight before completing the rafter installation.",
    "Join ridge boards at rafter locations for adequate support.",
  ],
  commonMistakes: [
    "Using a ridge board that is too shallow \u2014 it must be at least as deep as the rafter plumb cut for full bearing.",
    "Not supporting the ridge during construction, allowing it to sag before rafters are fixed.",
    "Confusing a ridge board with a structural ridge beam \u2014 they serve different purposes.",
  ],
  faqs: [
    { question: "What size ridge board do I need?", answer: "The ridge board should be at least as deep as the plumb cut of the rafter. For 47\u00d7150 mm rafters at a 40-degree pitch, the plumb cut is approximately 115 mm, so a 47\u00d7150 mm ridge board is adequate." },
    { question: "Is the ridge board structural?", answer: "In a conventional couple roof with ceiling ties, the ridge board is non-structural \u2014 it aligns the rafters. In a purlin-and-rafter roof without ceiling ties, a structural ridge beam is needed to resist the horizontal thrust of the rafters." },
    { question: "How do I join ridge boards?", answer: "Butt joints should fall at a rafter location and be secured with a plywood gusset or metal connector plate on both sides. The joint must be rigid to prevent sagging." },
    { question: "Can I use a steel ridge beam?", answer: "Yes. Steel ridge beams (RSJ or universal beam sections) are used for open-plan loft conversions where ceiling ties cannot be used. The steel beam carries the full roof load and must be designed by a structural engineer." },
    { question: "How much does ridge board timber cost?", answer: "Ridge board timber costs \u00a35\u2013\u00a312 per metre for C16/C24 softwood. A typical 8 m ridge needs 2 boards at 4.8 m, costing \u00a350\u2013\u00a3120 in total." },
    { question: "Do trussed roofs have ridge boards?", answer: "No. Trussed roofs do not use a ridge board. The trusses are connected at the apex by the metal nail plates and are braced longitudinally by diagonal and longitudinal bracing per the manufacturer\u2019s schedule." },
  ],
};

export const roofSheathingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the roof area in square metres (or use the roof area calculator to convert from flat dimensions).",
    "Select the panel size (1200\u00d72400 mm is standard).",
    "Click Calculate Materials for the sheet count.",
  ],
  materialInfo:
    "Roof sheathing (sarking board) provides a continuous deck on which the roofing underlay and battens are fixed. In traditional UK roofing, tiling battens are fixed directly to the rafters over a breathable underlay, without sheathing. However, sheathing is increasingly used in timber-frame construction, for flat roofs, and where a solid deck is required for certain roof coverings. OSB/3 is the most common sheathing material, in 9 mm or 11 mm thickness. Plywood is used where greater moisture resistance is needed. Each 1200\u00d72400 mm sheet covers 2.88 m\u00b2. The true roof area is larger than the footprint because of the roof pitch \u2014 multiply the flat area by the pitch multiplier (e.g., 1.118 for a 30-degree roof). Sheathing is nailed to the rafters with 50 mm ring-shank nails at 150 mm centres at edges and 300 mm in the field. Prices range from \u00a38\u2013\u00a318 per sheet at UK builders\u2019 merchants.",
  nextSteps: [
    { label: "Roof Area Calculator", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Roofing Underlayment Calculator", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
  ],
  installationTips: [
    "Start sheathing at the eaves and work upward, staggering joints by at least 600 mm between rows.",
    "Leave a 3 mm gap between sheets for moisture expansion.",
    "Nail at 150 mm centres around edges and 300 mm in the field using ring-shank nails.",
    "Ensure all sheet edges are supported by rafters or noggins.",
  ],
  commonMistakes: [
    "Not accounting for the pitch multiplier when calculating roof area \u2014 a 45-degree roof has 41% more area than the flat footprint.",
    "Forgetting to stagger joints between rows, creating a weak line across the roof.",
    "Using non-structural OSB (OSB/2) for roof sheathing \u2014 always specify OSB/3.",
  ],
  faqs: [
    { question: "Do UK roofs need sheathing?", answer: "Traditional pitched roofs with tiles on battens do not require sheathing. However, sheathing is used for timber-frame builds, flat roofs, and where the roof covering requires a solid deck (e.g., bitumen shingles, single-ply membrane)." },
    { question: "What thickness for roof sheathing?", answer: "9 mm OSB/3 is typical for roof sheathing on rafters at 400 mm centres. For 600 mm centres, use 11 mm. For flat roofs, 18 mm is standard." },
    { question: "How do I calculate the actual roof area?", answer: "Multiply the flat footprint area by the pitch multiplier from the roof pitch chart. For a 30-degree pitch, the multiplier is 1.155. For a 45-degree pitch, it is 1.414." },
    { question: "Can I use plywood instead of OSB for roof sheathing?", answer: "Yes. Exterior-grade plywood provides better moisture resistance than OSB and is preferred for flat roofs and high-moisture applications. It costs 20\u201340% more than OSB." },
    { question: "How many sheets for a typical house roof?", answer: "A typical 3-bedroom semi-detached house has about 50\u201370 m\u00b2 of roof area. At 2.88 m\u00b2 per sheet plus 10% waste, you need approximately 20\u201328 sheets." },
    { question: "Do I need underlay over roof sheathing?", answer: "Yes. A breathable roofing underlay (such as Protect VP400 or Tyvek Supro) must be installed over the sheathing before tiling battens are fixed. This provides a secondary weather barrier and allows moisture vapour to escape from the roof structure." },
  ],
};

export const shingleCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total roof area in square metres.",
    "Select the shingle type.",
    "Click Calculate Materials for the bundle count.",
  ],
  materialInfo:
    "Bitumen (asphalt) shingles are a lightweight, cost-effective roofing material used on pitched roofs with a solid deck. Whilst less common than tiles in the UK, they are popular for garden buildings, garages, extensions, and timber-frame homes. Shingles are sold in bundles, with each bundle covering approximately 2.32 m\u00b2 (25 sq ft) for standard 3-tab shingles. Architectural (dimensional) shingles have a similar coverage but provide a thicker, more textured appearance. The minimum pitch for shingles is approximately 15 degrees (roughly 3:12), though 20 degrees or steeper is recommended. Shingles require a solid deck of OSB or plywood with a suitable underlay. In the UK, brands such as IKO, Owens Corning, and CertainTeed are available from specialist roofing merchants. Prices range from \u00a315 to \u00a340 per bundle depending on quality and style. The lifespan of architectural shingles is 25\u201340 years. Standard 3-tab shingles last 15\u201320 years. For UK installations, ensure compliance with BS 5534 for slating and tiling.",
  nextSteps: [
    { label: "Roofing Underlayment Calculator", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Roof Area Calculator", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Drip Edge Calculator", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: [
    "Install shingles on a solid deck with roofing underlay fixed in place.",
    "Start from the eaves with a starter strip and work upward in overlapping courses.",
    "Use 4 nails per shingle (6 in high-wind areas) placed according to the manufacturer\u2019s nailing zone.",
    "Stagger each course by half a tab width to prevent water tracking through joints.",
  ],
  commonMistakes: [
    "Installing shingles on a roof with too low a pitch \u2014 minimum 15 degrees for most products.",
    "Using too few nails per shingle, which allows wind uplift.",
    "Not staggering the courses, allowing water to penetrate through aligned joints.",
  ],
  faqs: [
    { question: "Are shingles suitable for UK roofs?", answer: "Yes. Bitumen shingles are approved for use on pitched roofs in the UK and are particularly popular for garden buildings, garages, and extensions. They require a solid deck and suitable underlay. Ensure compliance with BS 5534." },
    { question: "How many bundles per square metre?", answer: "One bundle covers approximately 2.32 m\u00b2 (25 sq ft). For 50 m\u00b2 of roof area, you need about 22 bundles plus 10\u201315% waste, so order 24\u201326 bundles." },
    { question: "What is the minimum pitch for shingles?", answer: "The minimum pitch for bitumen shingles is approximately 15 degrees (about 3:12). Below this, water does not drain quickly enough and can be driven under the shingles by wind. A full ice and water shield underlay extends the minimum to about 10 degrees for some products." },
    { question: "How long do shingles last?", answer: "Architectural shingles typically last 25\u201340 years. Standard 3-tab shingles last 15\u201320 years. Lifespan depends on quality, installation, ventilation, and weather exposure." },
    { question: "Can I install shingles over existing roofing?", answer: "In some cases, one layer of new shingles can be installed over an existing layer. However, best practice is to strip the old covering to inspect the deck. UK building control may require full strip and re-deck for structural and fire safety reasons." },
    { question: "Where can I buy roofing shingles in the UK?", answer: "Roofing shingles are available from specialist roofing merchants (e.g., SIG Roofing, Burton Roofing), Wickes, and online suppliers. IKO is the most widely available brand in the UK." },
  ],
};

export const underlaymentCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total roof area in square metres.",
    "Select the underlay type: breathable membrane or traditional felt.",
    "Click Calculate Materials for the roll count, accounting for overlap.",
  ],
  materialInfo:
    "Roofing underlay (also called sarking membrane) is a weather-resistant layer installed beneath the roof covering (tiles, slates, or shingles) to provide a secondary barrier against rain, snow, and wind-driven moisture. In UK construction, breathable membranes (such as Tyvek Supro, Protect VP400, or Cromar Vent 3) have largely replaced traditional bitumen felt because they allow moisture vapour to escape from the roof structure, reducing the risk of condensation and rot. Breathable membranes are specified in Approved Document F and are essential where loft insulation is placed at rafter level. Roll sizes vary but are typically 1.0 m or 1.5 m wide and 50 m long, covering 50\u201375 m\u00b2 per roll before overlap deductions. Horizontal overlaps of 100\u2013150 mm and vertical overlaps of 150 mm are standard. Underlay is draped over the rafters with a slight sag (not pulled tight) and fixed with battens. Prices range from \u00a330 to \u00a3100 per roll depending on the product. BS 5534 governs the specification of roofing underlay in the UK.",
  nextSteps: [
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Drip Edge Calculator", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: [
    "Start at the eaves and work upward, ensuring each course overlaps the one below by 100\u2013150 mm.",
    "Allow a slight drape (sag) between rafters \u2014 do not pull the membrane tight.",
    "Fix with counter-battens along the rafter line, then tiling battens horizontally.",
    "Seal around roof penetrations (pipes, vents) with proprietary sealing tape.",
  ],
  commonMistakes: [
    "Pulling the membrane tight between rafters \u2014 it needs a slight sag to channel water to the eaves.",
    "Using non-breathable felt where breathable membrane is specified, trapping moisture in the roof structure.",
    "Insufficient overlap at joints, allowing wind-driven rain to penetrate.",
  ],
  faqs: [
    { question: "Do I need breathable or non-breathable underlay?", answer: "Breathable membrane is recommended for virtually all modern UK roofs. It is required where insulation is placed between or above rafters (warm roof construction). Traditional non-breathable felt can be used in cold roofs with adequate loft ventilation, but breathable membrane is preferred as it reduces condensation risk." },
    { question: "How many rolls for a typical house roof?", answer: "A typical semi-detached house has 50\u201370 m\u00b2 of roof area. With a 1.5 m \u00d7 50 m roll covering 75 m\u00b2 gross (about 55\u201360 m\u00b2 net after overlaps), one roll is often sufficient for a semi. For a detached house, budget 2 rolls." },
    { question: "What is the overlap for roofing underlay?", answer: "Horizontal (side) overlaps should be 100\u2013150 mm. Vertical (end) overlaps should be 150 mm, falling on a rafter line. At ridges and hips, the underlay should extend at least 150 mm over the opposite slope." },
    { question: "Can I use roofing felt instead of breathable membrane?", answer: "Traditional bitumen felt (BS 747 type 1F) can be used for cold roofs with adequate ventilation (cross-ventilation at eaves and 5 mm continuous ridge vent). However, breathable membranes are now the default choice as they provide better moisture management without relying on ventilation." },
    { question: "How much does roofing underlay cost?", answer: "Breathable membrane costs \u00a330\u2013\u00a3100 per roll (50 m) depending on quality and brand. Budget brands start at \u00a330; premium products (Tyvek Supro, Protect VP400) cost \u00a360\u2013\u00a3100. For a typical detached house, underlay costs \u00a360\u2013\u00a3200 in total." },
    { question: "Is roofing underlay required by Building Regulations?", answer: "Yes. BS 5534 and Building Regulations Part C require an underlay beneath the roof covering for all pitched roofs. The underlay type must be specified to match the roof design (warm or cold roof, ventilated or unventilated)." },
  ],
};

export const dripEdgeCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure the total eaves and verge length in metres.",
    "Enter the standard drip edge strip length (typically 2.4 m or 3.0 m).",
    "Click Calculate Materials for the piece count.",
  ],
  materialInfo:
    "Drip edge (also called eaves trim or verge trim) is an L-shaped metal flashing installed at the edges of the roof to direct water away from the fascia and into the gutter. In UK construction, drip edges are typically made from galvanised steel, aluminium, or lead, and are available in 2.4 m or 3.0 m lengths. They are essential for preventing water from running back under the roof covering and causing rot in the fascia boards and rafter feet. Drip edges are installed beneath the roofing underlay at the eaves and over the underlay at the verges (gable ends). Standard profiles cost \u00a33\u2013\u00a310 per length from roofing merchants, Screwfix, or Wickes. Lead drip edges (Code 3 or Code 4 lead) are used on higher-quality projects and cost considerably more. For felt or shingle roofs on flat or low-pitched decks, a proprietary metal drip edge with a T-profile is used to hold the edge of the roof covering and direct water cleanly into the gutter.",
  nextSteps: [
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Roofing Underlayment Calculator", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Roof Area Calculator", href: "/calculators/roofing/roof-area-calculator/" },
  ],
  installationTips: [
    "Install eaves drip edge beneath the roofing underlay so water runs off the edge and into the gutter.",
    "Install verge drip edge over the underlay so wind-driven rain cannot get beneath.",
    "Overlap joints by at least 50 mm in the direction of water flow.",
    "Secure with clout nails or screws at 300 mm centres.",
  ],
  commonMistakes: [
    "Omitting drip edges \u2014 water runs back under the tiles and rots the fascia board.",
    "Installing the eaves drip edge over the underlay instead of under it.",
    "Not overlapping joints in the direction of water flow, creating entry points for water.",
  ],
  faqs: [
    { question: "Are drip edges required on UK roofs?", answer: "Drip edges are best practice and are specified in BS 5534. They prevent water damage to fascia boards and rafter feet. Whilst not always explicitly required by Building Regulations, building control officers expect to see them." },
    { question: "What material for drip edges?", answer: "Galvanised steel and aluminium are the most common. Lead (Code 3 or 4) is used on premium projects and heritage buildings. Plastic drip edges are available for budget applications but are less durable." },
    { question: "How many drip edge pieces for a typical roof?", answer: "Measure the total eaves length (both sides) plus the verge length (both gable ends). For a typical 8 m \u00d7 5 m roof, eaves total 16 m and verges total 10 m = 26 m. At 2.4 m per piece, you need 11 pieces plus 10% waste = 12 pieces." },
    { question: "Do I need drip edges with guttering?", answer: "Yes. Drip edges and gutters work together. The drip edge directs water off the roof edge and into the gutter, preventing it from running down the fascia face. Without a drip edge, water can track behind the gutter." },
    { question: "How do I cut drip edge to length?", answer: "Use tin snips (aviation snips) for galvanised steel and aluminium. For lead, use a sharp knife or lead cutters. Always wear gloves when handling cut metal edges." },
    { question: "Where can I buy drip edge in the UK?", answer: "Drip edge profiles are available from SIG Roofing, Burton Roofing, Screwfix, Wickes, and Toolstation. Lead drip edges are available from specialist lead suppliers and roofing merchants." },
  ],
};

export const roofPitchCalculator: CalculatorSEOContent = {
  disclaimer: "This calculator provides geometric results. Structural requirements depend on loading, span, and material \u2014 consult a structural engineer.",
  howToUse: [
    "Enter the roof rise (vertical height) in metres or millimetres.",
    "Enter the roof run (horizontal distance) in metres or millimetres.",
    "Click Calculate Materials for the pitch angle, slope percentage, and area multiplier.",
  ],
  materialInfo:
    "Roof pitch is the angle of the roof slope, expressed as a ratio, degree angle, or percentage. In the UK, pitch is typically expressed in degrees (e.g., 30\u00b0, 40\u00b0, 45\u00b0) rather than the American rise:run notation (e.g., 6:12). The pitch determines which roofing materials can be used, how quickly water and snow are shed, and how much usable loft space is available. Building Regulations and BS 5534 specify minimum pitches for different roof coverings: plain clay tiles require a minimum of 35\u00b0, concrete interlocking tiles typically need 17.5\u00b0 minimum, and slates need 20\u201325\u00b0 depending on size and exposure. The pitch also affects the true roof area \u2014 a 45\u00b0 roof has 41.4% more surface area than the flat footprint, which directly increases material quantities and cost. Most UK residential roofs are pitched between 30\u00b0 and 45\u00b0. Steeper pitches (above 45\u00b0) are found on Victorian, Gothic, and Arts & Crafts style homes. Flat roofs (below 10\u00b0) require membrane or built-up covering and must have adequate falls for drainage. Understanding your roof pitch is essential for accurate material ordering \u2014 use the area multiplier from this calculator when ordering tiles, slates, underlay, and battens.",
  nextSteps: [
    { label: "Roof Area Calculator", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Roof Slope Calculator", href: "/calculators/roofing/roof-slope-calculator/" },
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Always measure pitch from inside the loft for the most accurate reading.",
    "Use a digital angle finder or a spirit level with a tape measure.",
    "Record the pitch in degrees for specifying materials and checking BS 5534 requirements.",
    "Apply the area multiplier to the footprint area to get the true roof area for ordering materials.",
  ],
  commonMistakes: [
    "Estimating pitch by eye \u2014 always measure accurately, as a 5\u00b0 error significantly affects material quantities.",
    "Confusing degrees with rise:run notation when reading American product specifications.",
    "Not applying the pitch multiplier when ordering materials, resulting in shortages.",
  ],
  faqs: [
    { question: "What is the most common roof pitch in the UK?", answer: "Most UK residential roofs are pitched between 30\u00b0 and 45\u00b0, with 35\u00b0 to 40\u00b0 being the most common range. This suits the majority of tile and slate products and provides good drainage in the British climate." },
    { question: "How do I measure my roof pitch?", answer: "From inside the loft, place a spirit level horizontally against a rafter and measure 300 mm along the level. Then measure the vertical distance from that point down to the rafter. The pitch in degrees is arctan(vertical/horizontal). Alternatively, use a digital angle finder placed directly on the rafter." },
    { question: "What is the minimum pitch for tiles in the UK?", answer: "Plain clay tiles require a minimum pitch of 35\u00b0. Concrete interlocking tiles typically need 17.5\u00b0 to 22.5\u00b0 minimum. Natural slates need 20\u201325\u00b0 depending on slate size and exposure. Always check the manufacturer\u2019s specification." },
    { question: "Does roof pitch affect planning permission?", answer: "Roof pitch can affect whether a development falls within permitted development rights. Altering the pitch of an existing roof or building a new roof with an unusual pitch may require planning permission. Check with your local planning authority." },
    { question: "How does pitch affect loft space?", answer: "Steeper pitches create more usable loft space. A 45\u00b0 pitch provides substantially more headroom than a 30\u00b0 pitch. For loft conversions, a pitch of 35\u00b0 or steeper is generally needed to achieve adequate headroom (2.1 m minimum at the centre)." },
    { question: "What pitch for a flat roof?", answer: "UK flat roofs are not truly flat \u2014 they must have a minimum fall of 1:80 (about 0.7\u00b0) for drainage, with 1:40 (about 1.4\u00b0) recommended. This ensures water drains to outlets or gutters and does not pond on the surface." },
  ],
};

export const roofAreaCalculator: CalculatorSEOContent = {
  disclaimer: "This calculator provides the geometric roof area. Allow extra material for waste, ridges, hips, and valleys.",
  howToUse: [
    "Enter the building footprint length and width in metres.",
    "Enter the roof pitch in degrees.",
    "Click Calculate Materials for the true roof area in square metres.",
  ],
  materialInfo:
    "The true roof area is always larger than the building footprint because the pitch increases the surface area. A 30\u00b0 roof has about 15.5% more area than the flat footprint, while a 45\u00b0 roof has 41.4% more. Knowing the accurate roof area is essential for ordering the correct quantities of tiles, slates, underlay, battens, and fixings. For complex roof shapes (hips, valleys, dormers), break the roof into simple geometric sections, calculate each one separately, and add them together. Additional material allowances are needed for ridges (typically 3 tiles per metre), hips (3\u20135 tiles per metre depending on product), and valleys (2\u20134 tiles per metre). Budget 5\u201310% waste for simple gable roofs and 10\u201315% for complex roofs with multiple hips, valleys, and dormers. UK roof tile manufacturers provide coverage rates per m\u00b2 for each product \u2014 these account for overlaps and gauge but not for waste.",
  nextSteps: [
    { label: "Roof Pitch Calculator", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Measure the footprint from the ground, then apply the pitch multiplier for the true area.",
    "For hip and valley roofs, calculate each triangular or trapezoidal section separately.",
    "Add allowances for ridge, hip, and valley tiles separately from the main area.",
    "Use the manufacturer\u2019s coverage rate (tiles per m\u00b2) to convert area to tile count.",
  ],
  commonMistakes: [
    "Using the footprint area instead of the true pitched area, leading to significant material shortages.",
    "Not accounting for hips and valleys, which require additional materials and generate more waste.",
    "Forgetting to add waste factor on top of the true area calculation.",
  ],
  faqs: [
    { question: "How do I calculate true roof area from footprint?", answer: "Multiply the footprint area by the pitch multiplier. For a 30\u00b0 pitch, multiply by 1.155. For a 45\u00b0 pitch, multiply by 1.414. The multiplier is 1/cos(pitch angle). A 100 m\u00b2 footprint at 35\u00b0 gives 100 \u00d7 1.221 = 122.1 m\u00b2 of actual roof area." },
    { question: "How many tiles per square metre?", answer: "This varies by tile type. Plain clay tiles: approximately 60 tiles per m\u00b2. Concrete interlocking tiles: approximately 10 tiles per m\u00b2. Natural slates: 20\u201330 per m\u00b2 depending on size. Always check the manufacturer\u2019s specification for the exact coverage rate." },
    { question: "What about dormer windows?", answer: "Dormers add roof area (the dormer\u2019s own roof) but remove area from the main roof where the dormer sits. For small dormers, these approximately cancel out. For large dormers, calculate the dormer roof area separately and add it to the main roof area minus the dormer cheek wall footprint." },
    { question: "How do I measure roof area from the ground?", answer: "Measure the building footprint (length and width) and determine the roof pitch (from inside the loft or using a clinometer from the ground). Apply the pitch multiplier to convert footprint area to true roof area. For accuracy within 5%, this method is adequate for material ordering." },
    { question: "Do I need to add extra for ridges and hips?", answer: "Yes. Ridge tiles, hip tiles, and valley tiles are ordered separately from the main field tiles. Budget 3 ridge tiles per metre of ridge, 3\u20135 hip tiles per metre of hip, and allow for valley troughs or dry valley systems at each valley location." },
    { question: "What is a roofing square?", answer: "A roofing square is an American unit equal to 100 sq ft (9.29 m\u00b2). It is not commonly used in the UK, where materials are ordered per m\u00b2 or per bundle. If an American product lists coverage in squares, multiply by 9.29 to convert to m\u00b2." },
  ],
};

export const roofSlopeCalculator: CalculatorSEOContent = {
  disclaimer: "This calculator provides geometric values. Always verify material suitability with the manufacturer\u2019s minimum pitch specification.",
  howToUse: [
    "Enter the roof rise and run in the same units (metres or millimetres).",
    "Click Calculate Materials for the pitch in degrees, slope percentage, and pitch ratio.",
  ],
  materialInfo:
    "Roof slope describes the steepness of a roof and determines which roofing materials are appropriate, how quickly water is shed, and whether the loft space is usable. In the UK, slope is typically expressed in degrees, whilst in North America it is expressed as a ratio (e.g., 6:12). The slope percentage is (rise/run) \u00d7 100. A 30\u00b0 roof has a slope of 57.7% and a ratio of approximately 7:12. Different roofing materials have different minimum slope requirements per BS 5534 and manufacturer specifications. Plain clay tiles require 35\u00b0 minimum. Concrete interlocking tiles require 17.5\u201322.5\u00b0. Natural slates require 20\u201325\u00b0. Bitumen shingles require 15\u00b0. Single-ply membrane can be used down to about 1.5\u00b0 with adequate falls. The roof slope also affects wind loading (steeper roofs catch more wind), snow loading (steeper roofs shed snow faster), and the available headroom in the loft. For loft conversions, a minimum roof pitch of about 35\u00b0 is generally needed to achieve the 2.1 m headroom required by Building Regulations Part K.",
  nextSteps: [
    { label: "Roof Pitch Calculator", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Roof Area Calculator", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Measure the slope from inside the loft using a spirit level and tape measure for accuracy.",
    "Record the slope in degrees for specifying roofing materials per BS 5534.",
    "Use the slope to check that your chosen roof covering meets the minimum pitch requirement.",
    "Apply the area multiplier to calculate true roof area for material ordering.",
  ],
  commonMistakes: [
    "Specifying a roofing material below its minimum pitch \u2014 this voids the guarantee and invites water ingress.",
    "Confusing degrees with rise:run ratios when interpreting American product data sheets.",
    "Not checking the manufacturer\u2019s minimum pitch for the specific tile or slate product being used.",
  ],
  faqs: [
    { question: "What is the difference between pitch and slope?", answer: "In UK practice, the terms are often used interchangeably and both expressed in degrees. Technically, pitch is the angle of the rafter from horizontal (in degrees), and slope percentage is (rise/run) \u00d7 100. A 30\u00b0 pitch = 57.7% slope." },
    { question: "How steep can a roof be?", answer: "There is no upper limit in Building Regulations, but roofs above 50\u00b0 are unusual in domestic construction. Very steep roofs (60\u00b0+) are found on church spires, clock towers, and some Victorian buildings. Above about 60\u00b0, roof tiles must be mechanically fixed to prevent sliding." },
    { question: "What is the minimum slope for a flat roof?", answer: "UK flat roofs must have a minimum fall of 1:80 (about 0.7\u00b0) with 1:40 (1.4\u00b0) recommended by most membrane manufacturers. This ensures water drains to outlets rather than ponding on the surface." },
    { question: "Does slope affect insurance?", answer: "Some insurers may charge more for very flat roofs (higher leak risk) or very steep roofs (higher wind and repair costs). Standard pitches of 25\u00b0\u201345\u00b0 typically attract the lowest premiums." },
    { question: "How do I convert degrees to rise:run?", answer: "Rise:run ratio = tan(angle) \u00d7 12. For a 30\u00b0 roof: tan(30) = 0.577, so the rise:run is 0.577 \u00d7 12 = 6.93:12, or roughly 7:12. Most UK builders work in degrees, so this conversion is mainly needed when using American products." },
    { question: "What pitch for maximum loft space?", answer: "A 45\u00b0 pitch provides the maximum usable volume for a given footprint. Steeper pitches add height but not width. For loft conversions, 40\u201345\u00b0 is ideal, providing 2.1 m+ headroom over a usable floor area." },
  ],
};

// ─── EXTERIOR SHELL ─────────────────────────────────────────────────────────

export const housewrapCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total exterior wall area in square metres.",
    "Select the roll width.",
    "Click Calculate Materials for the roll count, accounting for overlap.",
  ],
  materialInfo:
    "Breather membrane (housewrap) is a vapour-permeable, water-resistant barrier installed on the exterior of timber-frame walls, beneath the cladding. Its purpose is to allow moisture vapour to escape from the wall structure whilst preventing wind-driven rain from penetrating. In UK timber-frame construction, breather membrane is a critical component specified by Building Regulations Part C (moisture protection) and Part L (energy efficiency). Popular UK brands include Tyvek (DuPont), Protect TF200, and Cromar Vent 3. The membrane is stapled to the sheathing or studs and must be lapped at least 100 mm horizontally and 150 mm vertically, with joints sealed using manufacturer\u2019s tape for airtightness. Roll sizes vary: common widths are 1.0 m, 1.5 m, and 2.7 m, with lengths of 50 m or 100 m. Prices range from \u00a330 to \u00a3120 per roll depending on product quality and roll size. For Passivhaus and low-energy builds, the breather membrane is often combined with an airtightness taping strategy to meet the stringent air permeability targets.",
  nextSteps: [
    { label: "Vinyl Cladding Calculator", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Hardie Plank Cladding Calculator", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Window Flashing Calculator", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Start at the bottom of the wall and work upward so that upper courses overlap lower ones.",
    "Lap horizontal joints by at least 100 mm and vertical joints by 150 mm.",
    "Tape all joints with the membrane manufacturer\u2019s compatible tape for airtightness.",
    "Wrap the membrane into window and door openings by at least 100 mm.",
  ],
  commonMistakes: [
    "Installing the membrane upside down \u2014 check the manufacturer\u2019s instructions for the correct face orientation.",
    "Leaving the membrane exposed for too long before cladding \u2014 UV exposure degrades most products within 2\u20134 months.",
    "Not taping the joints, which compromises the airtightness required by Part L.",
  ],
  faqs: [
    { question: "Is breather membrane required by Building Regulations?", answer: "Yes. Part C requires protection against moisture penetration, and Part L requires an airtight building envelope. Breather membrane fulfils both requirements in timber-frame construction and is expected by building control." },
    { question: "What is the difference between Tyvek and Protect TF200?", answer: "Both are high-quality breather membranes. Tyvek (by DuPont) is a spun-bonded polyethylene product with excellent vapour permeability and durability. Protect TF200 is a UK-manufactured polypropylene membrane that is widely used in timber-frame and SIPs construction. Both comply with BS 4016 and BS 13859." },
    { question: "How long can breather membrane be left exposed?", answer: "Most breather membranes should be covered with cladding within 2\u20134 months to prevent UV degradation. Some products (such as Tyvek UV Fa\u00e7ade) are rated for long-term UV exposure behind open-jointed cladding. Check the product data sheet." },
    { question: "Do I need to tape the joints?", answer: "Yes, for airtightness compliance under Part L. Use the membrane manufacturer\u2019s recommended tape. Generic tapes may not bond properly to the membrane surface and can fail over time." },
    { question: "How much does breather membrane cost?", answer: "Prices range from \u00a330 for budget products to \u00a3100+ for premium membranes per roll (typically 50\u201375 m\u00b2 per roll). For a typical 3-bedroom house with 150 m\u00b2 of external wall, membrane costs \u00a360\u2013\u00a3300 depending on product choice." },
    { question: "Can I use breather membrane on masonry walls?", answer: "Breather membrane is designed for timber-frame and SIPs construction. Masonry walls use a different moisture management strategy (cavity wall with weep holes). However, membrane may be used behind cladding on masonry walls in certain rainscreen systems." },
  ],
};

export const vinylSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total wall area in square metres.",
    "Deduct window and door areas.",
    "Click Calculate Materials for the panel count and box quantity.",
  ],
  materialInfo:
    "Vinyl cladding (PVC-U cladding) is a low-maintenance exterior wall covering popular for its durability, weather resistance, and range of colours and profiles. In the UK, vinyl cladding is available in horizontal lap (weatherboard) and shiplap profiles, with panel lengths typically 3.0 m to 5.0 m. Coverage per panel varies by profile width \u2014 a standard 200 mm exposure panel at 5.0 m length covers approximately 1.0 m\u00b2. Panels are sold in packs, with prices ranging from \u00a35 to \u00a315 per m\u00b2 depending on quality and finish. Accessories include starter strips, J-channels, corner posts, and soffit panels. Installation requires a ventilated cavity (at least 25 mm) behind the cladding for moisture management. UK brands include Freefoam, Eurocell, and Fortex. Vinyl cladding does not require painting, staining, or sealing, and has a lifespan of 20\u201330+ years. It is lightweight, making it suitable for timber-frame and retrofit applications. Building Regulations Part B (fire safety) restricts the use of combustible cladding on buildings over 18 m in height.",
  nextSteps: [
    { label: "Breather Membrane Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Hardie Plank Cladding Calculator", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Window Flashing Calculator", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Install a starter strip at the base and work upward, locking each panel into the one below.",
    "Leave a 6 mm expansion gap at each end of the panel \u2014 vinyl expands significantly with temperature.",
    "Do not nail panels tight \u2014 leave the nails slightly loose to allow thermal movement.",
    "Use stainless steel or aluminium nails to prevent rust staining.",
  ],
  commonMistakes: [
    "Nailing panels too tightly, preventing thermal expansion and causing buckling in warm weather.",
    "Not leaving expansion gaps at accessories and trim, causing panels to push and warp.",
    "Failing to provide a ventilated cavity behind the cladding, trapping moisture against the wall.",
  ],
  faqs: [
    { question: "Is vinyl cladding suitable for the UK climate?", answer: "Yes. Vinyl cladding is designed to withstand rain, wind, frost, and UV exposure. Quality UK products (Freefoam, Eurocell, Fortex) are tested to BS EN 14411 and carry warranties of 10\u201325 years." },
    { question: "Does vinyl cladding need planning permission?", answer: "In most cases, replacing or adding cladding to a house is permitted development and does not require planning permission, unless the building is listed, in a conservation area, or the appearance change is significant. Check with your local planning authority." },
    { question: "How long does vinyl cladding last?", answer: "Quality vinyl cladding lasts 20\u201330+ years with minimal maintenance. Colour fade is the main concern \u2014 premium products have UV stabilisers that reduce fading." },
    { question: "Can I install vinyl cladding over existing render?", answer: "Yes, provided the render is sound and the wall is structurally adequate. Fix timber battens over the render to create a ventilated cavity and fixing surface for the cladding." },
    { question: "How much does vinyl cladding cost in the UK?", answer: "Vinyl cladding costs \u00a35\u2013\u00a315 per m\u00b2 for materials, plus accessories (\u00a3100\u2013\u00a3300 per house for trims, corners, and soffit). Professional installation adds \u00a320\u2013\u00a340 per m\u00b2. A typical 3-bedroom house costs \u00a32,000\u2013\u00a35,000 for materials or \u00a35,000\u2013\u00a310,000 installed." },
    { question: "Is vinyl cladding fireproof?", answer: "No. Vinyl cladding is combustible and is restricted under Building Regulations Part B on buildings over 18 m in height. For low-rise residential buildings, it is permitted subject to the spread of flame requirements of BS 476 or BS EN 13501." },
  ],
};

export const hardieSidingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total wall area in square metres.",
    "Deduct window and door areas.",
    "Select the plank exposure width.",
    "Click Calculate Materials for the plank count.",
  ],
  materialInfo:
    "HardiePlank is a fibre cement weatherboard cladding manufactured by James Hardie. It is one of the most popular premium cladding options in the UK, offering the appearance of timber weatherboard with the durability of fibre cement. HardiePlank is non-combustible (Class A1 fire rating), rot-proof, insect-proof, and UV-stable. Standard plank dimensions are 3600 mm \u00d7 180 mm (with a 152 mm exposed face after overlap). Each plank covers approximately 0.55 m\u00b2 of wall area. Planks are available in a wide range of factory-applied colours with a 15-year colour guarantee. Prices are approximately \u00a38\u2013\u00a315 per plank (\u00a315\u2013\u00a328 per m\u00b2) from UK stockists including Jewson, Travis Perkins, and specialist cladding suppliers. Installation requires a ventilated cavity behind the boards, stainless steel nails or screws, and compatible flashings at all junctions. HardiePlank is approved for use on buildings of all heights under Building Regulations Part B because of its non-combustible classification, making it a preferred choice for post-Grenfell regulations.",
  nextSteps: [
    { label: "Breather Membrane Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Window Flashing Calculator", href: "/calculators/exterior-shell/window-flashing-calculator/" },
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Use stainless steel ring-shank nails or screws \u2014 plain steel will rust and stain the boards.",
    "Maintain a minimum 30 mm overlap between courses.",
    "Leave a 6 mm gap between plank ends at butt joints, sealed with colour-matched flexible sealant.",
    "Install a starter strip at the base to set the angle of the first course.",
  ],
  commonMistakes: [
    "Using non-stainless fixings, which rust and stain the cladding within months.",
    "Cutting without appropriate dust extraction \u2014 fibre cement dust is hazardous; use a dust-extracting saw.",
    "Not sealing cut edges with Hardie touch-up paint, exposing the raw fibre cement to moisture.",
  ],
  faqs: [
    { question: "Is HardiePlank fire-rated?", answer: "Yes. HardiePlank is classified as non-combustible (Euroclass A2-s1, d0) and meets the requirements of Building Regulations Part B for use on buildings of all heights, including those over 18 m." },
    { question: "How long does HardiePlank last?", answer: "HardiePlank has a 10-year product warranty and a 15-year colour guarantee. In practice, properly installed fibre cement cladding lasts 30\u201350+ years with minimal maintenance." },
    { question: "Can I paint HardiePlank?", answer: "HardiePlank comes with a factory-applied colour finish. It can be repainted using exterior masonry paint if you want to change the colour. The factory finish is more durable than site-applied paint." },
    { question: "How much does HardiePlank cladding cost?", answer: "Materials cost \u00a315\u2013\u00a328 per m\u00b2 for planks plus accessories (starter strip, corner pieces, trims). Professional installation adds \u00a330\u2013\u00a350 per m\u00b2. A typical 3-bedroom house costs \u00a34,000\u2013\u00a38,000 for materials or \u00a38,000\u2013\u00a315,000 installed." },
    { question: "Do I need a ventilated cavity behind HardiePlank?", answer: "Yes. A minimum 25 mm ventilated cavity is required between the breather membrane and the back of the cladding. This is created using treated timber battens fixed vertically to the studs or sheathing." },
    { question: "Is HardiePlank suitable for all UK regions?", answer: "Yes. HardiePlank is tested to withstand severe exposure conditions (BRE exposure zones 1\u20134) and performs well in all UK climates, including coastal and high-rainfall areas." },
  ],
};

export const windowFlashingCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the number of windows and doors.",
    "Enter the average window/door perimeter in metres.",
    "Select the flashing tape width.",
    "Click Calculate Materials for the total linear metres and roll count.",
  ],
  materialInfo:
    "Window flashing tape is a self-adhesive membrane applied around window and door openings to create a weatherproof seal between the frame and the wall structure. It prevents water from penetrating behind the cladding at openings, which are the most vulnerable points in the building envelope. In UK timber-frame construction, flashing tape is applied to the sheathing or studs around each opening before the window is installed, lapping onto the breather membrane in a specific sequence: sill first, then jambs, then head. The tape must be vapour-permeable on the outside face and waterproof. Common widths are 100 mm, 150 mm, and 225 mm, with 150 mm being the most versatile. Popular UK products include Protect A1 flashing tape, Tyvek FlexWrap, and Pro Clima Tescon Vana. Prices range from \u00a310 to \u00a340 per 25 m roll depending on width and brand. Proper flashing is essential for airtightness under Part L and moisture protection under Part C. Window flashing failures are one of the most common causes of water damage in timber-frame buildings.",
  nextSteps: [
    { label: "Breather Membrane Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Exterior Sheathing Calculator", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Flash the sill first, then the jambs (overlapping the sill tape), then the head (overlapping the jamb tape).",
    "Ensure the tape adheres firmly to clean, dry surfaces \u2014 use a roller to press it down.",
    "Lap the outer edge of the tape onto the breather membrane to direct water outward.",
    "Use corner patches at all four corners of the opening for complete coverage.",
  ],
  commonMistakes: [
    "Applying the head flashing before the jambs, which allows water to run behind the tape.",
    "Not pressing the tape firmly, leaving air pockets where adhesion fails.",
    "Using incompatible tape with the breather membrane \u2014 check manufacturer compatibility.",
  ],
  faqs: [
    { question: "Do I need flashing tape at every window?", answer: "Yes. Every window and door opening in a timber-frame wall must be flashed to prevent water ingress. Openings are the most vulnerable point in the building envelope and require continuous, properly lapped flashing." },
    { question: "What width flashing tape do I need?", answer: "150 mm is the most versatile width, providing adequate coverage for standard openings. 100 mm is used for narrow reveals. 225 mm is used for deep reveals or as a sill pan." },
    { question: "What is the correct flashing sequence?", answer: "Sill first, then jambs (overlapping sill tape), then head (overlapping jamb tape). This shingled sequence ensures that water always flows outward and downward, never behind the tape." },
    { question: "Can I use any self-adhesive tape for window flashing?", answer: "No. Use a product specifically designed for window flashing that is compatible with your breather membrane. Generic duct tape, insulation tape, and DIY tapes do not provide adequate adhesion or weather resistance." },
    { question: "How much flashing tape per window?", answer: "A standard window opening (1200 mm \u00d7 1200 mm) needs approximately 5 m of flashing tape (perimeter plus overlaps). A typical house with 10\u201315 windows needs 50\u201375 m of tape, or 2\u20133 rolls of 25 m." },
    { question: "Does flashing tape contribute to airtightness?", answer: "Yes. Window flashing tape is a key component of the airtightness layer in timber-frame construction. It bridges the gap between the window frame and the breather membrane/vapour control layer, preventing air leakage at openings." },
  ],
};

// ─── INSULATION & PLASTERBOARD ──────────────────────────────────────────────

export const cavityInsulationCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total wall area in square metres.",
    "Deduct window and door areas.",
    "Select the insulation type and thickness.",
    "Click Calculate Materials for the number of batts, rolls, or boards.",
  ],
  materialInfo:
    "Cavity wall insulation fills the space between wall studs or within masonry cavity walls to reduce heat loss and meet the thermal performance requirements of Building Regulations Part L. In UK timber-frame construction, the most common insulation types are mineral wool batts (Knauf, Rockwool), rigid PIR boards (Celotex, Kingspan), and natural fibre insulation (sheep\u2019s wool, wood fibre). For 100 mm stud walls, 100 mm mineral wool batts achieve approximately R = 2.5 m\u00b2K/W. For 140 mm stud walls with 140 mm mineral wool, R = 3.5 m\u00b2K/W. PIR insulation achieves higher thermal resistance per unit thickness: 100 mm of PIR gives R = 4.55 m\u00b2K/W. Part L requires a wall U-value of 0.18\u20130.21 W/m\u00b2K for new builds, which typically requires 120\u2013150 mm of mineral wool or 80\u2013100 mm of PIR. Mineral wool batts come in packs covering 5\u201310 m\u00b2 per pack, priced at \u00a320\u2013\u00a350 per pack from Wickes, B&Q, Jewson, and Travis Perkins. PIR boards cost \u00a320\u2013\u00a340 per board (1200\u00d72400 mm). A vapour control layer (VCL) must be installed on the warm side of the insulation to prevent condensation within the wall structure per Part C and BS 5250.",
  nextSteps: [
    { label: "Plasterboard Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Plasterboard Screw Calculator", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Cut insulation batts slightly oversized (5\u201310 mm) for a friction fit between studs.",
    "Fill all gaps, corners, and around services \u2014 even small gaps cause significant heat loss.",
    "Install a continuous vapour control layer (VCL) on the warm side with all joints taped.",
    "Do not compress insulation \u2014 compressed batts lose thermal performance.",
  ],
  commonMistakes: [
    "Leaving gaps around services, pipes, and cables \u2014 these create thermal bridges and air leakage paths.",
    "Omitting the vapour control layer, leading to interstitial condensation and potential rot.",
    "Compressing batts to fit into a smaller cavity, which dramatically reduces their R-value.",
  ],
  faqs: [
    { question: "What U-value do walls need for Part L?", answer: "Building Regulations Part L (2021) requires wall U-values of 0.18\u20130.21 W/m\u00b2K for new dwellings. This typically requires 120\u2013150 mm of mineral wool or 80\u2013100 mm of PIR insulation within the wall, plus any additional insulation in the cladding system." },
    { question: "Mineral wool or PIR for timber-frame walls?", answer: "Both are suitable. Mineral wool is cheaper, fire-resistant, and acoustically absorptive. PIR is thinner for the same thermal performance, more moisture-resistant, and provides a more rigid installation. Many builders use mineral wool between studs with an additional layer of PIR on the inside face for enhanced performance." },
    { question: "Do I need a vapour control layer?", answer: "Yes. A VCL (such as 500-gauge polythene or a proprietary membrane) must be installed on the warm side of the insulation per BS 5250 and Building Regulations. All joints must be taped with compatible tape for airtightness." },
    { question: "How much does wall insulation cost?", answer: "Mineral wool batts cost approximately \u00a34\u2013\u00a38 per m\u00b2 for 100 mm thickness. PIR boards cost \u00a38\u2013\u00a315 per m\u00b2 for 100 mm. For a typical 3-bedroom house with 100 m\u00b2 of external wall, insulation costs \u00a3400\u2013\u00a31,500 depending on type and thickness." },
    { question: "Can I use natural insulation materials?", answer: "Yes. Sheep\u2019s wool (Thermafleece), wood fibre (Steico), and hemp (Lime Technology) are available in the UK. They cost 20\u201350% more than mineral wool but have lower embodied carbon, better moisture buffering, and are pleasant to handle." },
    { question: "What about acoustic insulation?", answer: "Mineral wool batts (minimum 25 mm, preferably 50\u2013100 mm) between studs in party walls and internal partitions provide excellent acoustic performance. For Part E compliance in separating walls, refer to Approved Document E for specific constructions." },
  ],
};

export const drywallCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total wall and/or ceiling area in square metres.",
    "Deduct window and door areas.",
    "Select the plasterboard size (1200\u00d72400 mm is standard).",
    "Click Calculate Materials for the sheet count.",
  ],
  materialInfo:
    "Plasterboard (drywall, gypsum board) is the standard interior wall and ceiling lining in UK construction. Standard sheets are 1200\u00d72400 mm (2.88 m\u00b2), with 12.5 mm thickness for walls and 15 mm for ceilings (to prevent sagging at 600 mm centres). For enhanced fire resistance, use Gyproc Fireline (pink board) which provides 30 or 60 minutes fire protection. For moisture-prone areas (bathrooms, kitchens), use moisture-resistant board (green board or Gyproc Moisture Resistant). Plasterboard is fixed to studs or joists with 32 mm plasterboard screws at 150 mm centres at edges and 300 mm in the field. Each 1200\u00d72400 mm sheet covers 2.88 m\u00b2. Prices range from \u00a35 to \u00a315 per sheet depending on type and thickness, available from Wickes, B&Q, Jewson, and Travis Perkins. British Gypsum (Gyproc) and Knauf are the two main UK manufacturers. After fixing, joints are taped and filled with jointing compound to create a smooth, seamless surface ready for decoration.",
  nextSteps: [
    { label: "Plasterboard Screw Calculator", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Jointing Compound Calculator", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Cavity Insulation Calculator", href: "/calculators/insulation-drywall/cavity-insulation-calculator/" },
  ],
  installationTips: [
    "Fix boards with the long edge horizontal (landscape) for walls, and perpendicular to the joists for ceilings.",
    "Stagger joints between rows and between wall and ceiling boards.",
    "Leave a 10 mm gap at the floor to allow for expansion \u2014 this will be covered by the skirting board.",
    "Use 15 mm board on ceilings at 600 mm joist centres to prevent sagging.",
  ],
  commonMistakes: [
    "Using 12.5 mm board on ceilings at 600 mm centres \u2014 it will sag over time; use 15 mm.",
    "Not staggering joints, which creates a visible crack line through the wall.",
    "Over-driving screws, which breaks through the paper face and loses holding power.",
  ],
  faqs: [
    { question: "12.5 mm or 15 mm plasterboard?", answer: "Use 12.5 mm for walls and ceilings at 400 mm centres. Use 15 mm for ceilings at 600 mm centres. Part B fire requirements may specify additional layers or Fireline board regardless of stud spacing." },
    { question: "How many sheets for a room?", answer: "A typical 3 m \u00d7 4 m room with 2.4 m ceiling height has about 33 m\u00b2 of wall area (minus 4 m\u00b2 for door and window = 29 m\u00b2). At 2.88 m\u00b2 per sheet, you need about 10 sheets for walls plus 5 sheets for the ceiling (12 m\u00b2) = 15 sheets." },
    { question: "Do I need fire-rated plasterboard?", answer: "Building Regulations Part B requires fire-rated board in party walls (30 or 60 minutes), around stairwells, and in certain other locations. Gyproc Fireline (pink) provides fire resistance. Check your plans for fire-rated construction specifications." },
    { question: "What board for bathrooms?", answer: "Use moisture-resistant plasterboard (green board, or Gyproc Moisture Resistant) in bathrooms, kitchens, and other moisture-prone areas. For areas directly behind baths and showers, use a tile backer board (cement board) for maximum moisture protection." },
    { question: "How much does plasterboard cost in the UK?", answer: "Standard 12.5 mm plasterboard costs \u00a35\u2013\u00a38 per sheet (1200\u00d72400 mm). 15 mm board costs \u00a36\u2013\u00a310. Fireline costs \u00a38\u2013\u00a312. Moisture-resistant costs \u00a37\u2013\u00a311. Buying in bulk (full pallets) from Jewson or Travis Perkins gives the best price." },
    { question: "Can I plaster over plasterboard?", answer: "Yes. Plasterboard can be either taped and jointed (dry-lined) or skimmed with a 2\u20133 mm coat of finishing plaster. Skimming provides a smoother, harder surface but adds cost and drying time. Tape and joint is faster and increasingly common." },
  ],
};

export const drywallScrewCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the number of plasterboard sheets.",
    "Select the screw length (32 mm for single boards, 42 mm for double boards).",
    "Click Calculate Materials for the screw count and box quantity.",
  ],
  materialInfo:
    "Plasterboard screws (drywall screws) are fine-threaded, self-tapping screws designed specifically for fixing plasterboard to timber or metal studs. They have a bugle head that sits flush with the board surface without tearing the paper face. Standard screw lengths are 32 mm for single-layer 12.5 mm board on timber studs, and 42 mm for 15 mm board or double-layer installations. The standard fixing pattern is 150 mm centres around sheet edges and 300 mm in the field (intermediate studs). A standard 1200\u00d72400 mm sheet requires approximately 28\u201332 screws. Screws are sold in boxes of 200, 500, or 1000. Prices range from \u00a33 to \u00a315 per box depending on size and quantity. Popular UK brands include Drill Point, Griptite, and own-brand from Screwfix, Wickes, and Toolstation. Use a drywall screw gun with an adjustable depth stop to drive screws to the correct depth \u2014 the head should dimple the paper face without breaking through it.",
  nextSteps: [
    { label: "Plasterboard Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Jointing Compound Calculator", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
  ],
  installationTips: [
    "Use a drywall screw gun with an adjustable depth stop for consistent screw depth.",
    "Drive screws so the head just dimples the paper face without breaking through.",
    "Fix at 150 mm centres at edges and 300 mm in the field.",
    "Start screws at least 10 mm from the edge of the board to avoid breaking out.",
  ],
  commonMistakes: [
    "Over-driving screws through the paper face \u2014 this loses holding power and requires a second screw.",
    "Under-driving screws that protrude above the surface \u2014 they will show through the skim or jointing compound.",
    "Using too few screws \u2014 the board may sag, crack at joints, or pull away from the studs.",
  ],
  faqs: [
    { question: "How many screws per plasterboard sheet?", answer: "A standard 1200\u00d72400 mm sheet fixed at 150 mm edge centres and 300 mm field centres needs approximately 28\u201332 screws, depending on the number of intermediate studs." },
    { question: "What length screws for plasterboard?", answer: "Use 32 mm screws for single-layer 12.5 mm board. Use 42 mm for 15 mm board or double-layer installations. The screw must penetrate the timber stud by at least 22 mm." },
    { question: "Can I use nails instead of screws?", answer: "Plasterboard nails are an option for walls but are less common than screws. Screws provide better holding power, are less likely to pop, and are easier to set to the correct depth. Nails are never used for ceiling boards." },
    { question: "How many boxes of screws for a room?", answer: "A typical room needs 15 sheets (walls plus ceiling), using about 450 screws. One box of 500 screws covers a single room. For a full house, budget 3,000\u20135,000 screws (6\u201310 boxes of 500)." },
    { question: "What is screw pop?", answer: "Screw pop is when a screw head pushes through the jointing compound as the timber stud dries and shrinks. It is prevented by using kiln-dried timber, setting screws to the correct depth, and using screws (not nails) which resist backing out." },
    { question: "Where can I buy plasterboard screws?", answer: "Plasterboard screws are available from Screwfix, Toolstation, Wickes, B&Q, Jewson, and Travis Perkins. For the best value, buy in boxes of 1000 from Screwfix or Toolstation at \u00a35\u2013\u00a310 per box." },
  ],
};

export const jointCompoundCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the total plasterboard area in square metres.",
    "Select the jointing method: tape and joint, or skim coat.",
    "Click Calculate Materials for the compound quantity in kilograms or buckets.",
  ],
  materialInfo:
    "Jointing compound is used to fill and smooth the joints between plasterboard sheets, creating a seamless surface ready for decoration. The process involves three main steps: bedding (embedding the tape in a layer of compound), filling (applying a second coat to cover the tape and level the joint), and finishing (a thin topcoat to feather the edges smooth). Ready-mixed jointing compound (such as British Gypsum Gyproc Joint Cement, Knauf Fill & Finish, or Siniat Nida Jointing) comes in 5 kg, 12 kg, and 25 kg tubs. Coverage varies by application: approximately 0.4\u20130.6 kg per m\u00b2 of plasterboard for tape and joint work. A 25 kg bucket covers approximately 40\u201360 m\u00b2 of jointed plasterboard. Prices range from \u00a38 to \u00a325 per 25 kg tub from UK builders\u2019 merchants. For skim coating (applying a thin plaster coat over the entire board surface), use Thistle Multi-Finish or similar finishing plaster at approximately 1.5\u20132.0 kg per m\u00b2, which requires considerably more material. Paper joint tape costs approximately \u00a33\u2013\u00a35 per 75 m roll. Self-adhesive fibreglass mesh tape is slightly more expensive but easier for DIY use.",
  nextSteps: [
    { label: "Plasterboard Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Plasterboard Screw Calculator", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Primer Calculator", href: "/calculators/finishing/primer-calculator/" },
  ],
  installationTips: [
    "Apply a thin bed coat, press the tape into it, then smooth off excess compound.",
    "Allow each coat to dry fully (typically 4\u201324 hours depending on conditions) before applying the next.",
    "Feather the edges of each coat wider than the previous one for an invisible finish.",
    "Sand lightly between coats with 120-grit sandpaper for a smooth result.",
  ],
  commonMistakes: [
    "Applying too thick a coat \u2014 multiple thin coats are better than one thick coat, which cracks.",
    "Not allowing adequate drying time between coats, which causes bubbling and cracking.",
    "Skipping the sanding step, leaving visible ridges and bumps under the paint.",
  ],
  faqs: [
    { question: "How much jointing compound per m\u00b2?", answer: "For tape and joint work, budget 0.4\u20130.6 kg per m\u00b2 of plasterboard. A 25 kg tub covers approximately 40\u201360 m\u00b2. For a typical room (33 m\u00b2 of walls and ceiling), one 25 kg tub is usually sufficient." },
    { question: "Tape and joint or skim?", answer: "Tape and joint (dry lining) is faster and suitable for most domestic applications. Skim plastering provides a harder, smoother surface preferred by some decorators. Tape and joint is the standard method in timber-frame construction." },
    { question: "What joint tape should I use?", answer: "Paper tape (British Gypsum or Knauf) provides the strongest joint and is preferred by professionals. Self-adhesive fibreglass mesh tape is easier for DIY but produces a slightly weaker joint and requires more compound to achieve a flat finish." },
    { question: "How many coats of compound?", answer: "Three coats are standard: a bed coat (to embed the tape), a fill coat (to cover the tape and level), and a finish coat (to feather smooth). Some products combine the bed and fill coats." },
    { question: "How long does jointing compound take to dry?", answer: "Ready-mixed compound takes 4\u201324 hours per coat depending on thickness, temperature, and humidity. Setting compounds (powder-mixed, such as Easifill) set chemically in 20\u201390 minutes and can be recoated faster." },
    { question: "How much does jointing compound cost?", answer: "A 25 kg tub of ready-mixed compound costs \u00a38\u2013\u00a325 depending on brand. Setting compound costs \u00a35\u2013\u00a315 per 5 kg bag. Joint tape costs \u00a33\u2013\u00a35 per 75 m roll. For a full house, budget \u00a350\u2013\u00a3200 for jointing materials." },
  ],
};

// ─── HARDWARE ───────────────────────────────────────────────────────────────

export const framingNailCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the number of studs or framing members.",
    "Select the nail type and size.",
    "Click Calculate Materials for the total nail count and weight in kilograms.",
  ],
  materialInfo:
    "Framing nails are used to assemble the structural timber frame, securing studs to plates, joists to beams, and sheathing to framing. In UK construction, the most common framing nails are 75 mm and 90 mm bright or galvanised round wire nails, used with a nail gun or hammer. A typical timber-frame house uses 15\u201325 kg of framing nails. Nail guns use collated nails in strips or coils \u2014 common sizes are 75 mm \u00d7 3.1 mm for stud-to-plate connections and 90 mm \u00d7 3.1 mm for plate-to-plate and joist connections. Loose nails cost \u00a33\u2013\u00a38 per kg from builders\u2019 merchants. Collated nails cost \u00a320\u2013\u00a360 per box of 2,000\u20133,000 nails. Ring-shank nails (annular ring nails) provide better withdrawal resistance than smooth nails and are specified for sheathing and critical connections. Galvanised nails should be used for any external or treated timber applications to prevent corrosion. For connections complying with BS EN 1995-1-1, nail size, spacing, and edge distances must follow the specification.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Joist Hanger Calculator", href: "/calculators/hardware/joist-hanger-calculator/" },
    { label: "Plasterboard Screw Calculator", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
  ],
  installationTips: [
    "Use a nail gun for speed and consistency on large framing projects.",
    "Follow the nailing schedule specified by the structural engineer for each connection type.",
    "Pre-drill near the ends of timber to prevent splitting.",
    "Use galvanised nails for treated timber and external applications.",
  ],
  commonMistakes: [
    "Using smooth nails where ring-shank nails are specified \u2014 smooth nails have much lower withdrawal resistance.",
    "Over-nailing or under-nailing sheathing \u2014 follow the specified spacing for structural adequacy.",
    "Using bright nails on treated timber, where the treatment chemicals accelerate corrosion.",
  ],
  faqs: [
    { question: "What size nails for timber framing?", answer: "Use 75 mm nails for stud-to-plate connections and 90 mm nails for plate-to-plate and joist connections. For sheathing, use 50 mm or 63 mm ring-shank nails. Always follow the structural specification." },
    { question: "How many nails per stud?", answer: "Each stud requires 4 nails (2 at each end) for end-nailing through the plate. Skew-nailing requires 3 nails per connection (2 on one side, 1 on the other)." },
    { question: "Ring-shank or smooth nails?", answer: "Ring-shank nails are specified for sheathing, subfloor, and other connections requiring high withdrawal resistance. Smooth nails are used for general framing where the load is primarily in shear." },
    { question: "How much do framing nails cost in the UK?", answer: "Loose nails cost \u00a33\u2013\u00a38 per kg. Collated nails for nail guns cost \u00a320\u2013\u00a360 per box (2,000\u20133,000 nails). For a typical house, budget \u00a3100\u2013\u00a3300 for all framing nails." },
    { question: "Do I need galvanised nails?", answer: "Yes, for any connection involving treated timber, external applications, or areas exposed to moisture. Bright (ungalvanised) nails are acceptable for internal, untreated timber connections only." },
    { question: "Where can I buy framing nails in the UK?", answer: "Framing nails are available from Screwfix, Toolstation, Wickes, Jewson, and Travis Perkins. Collated nails for specific nail gun brands (Paslode, DeWalt, Hitachi) are stocked by all major tool suppliers." },
  ],
};

export const joistHangerCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the number of floor joists.",
    "Select the joist hanger type for your joist size.",
    "Click Calculate Materials for the hanger count.",
  ],
  materialInfo:
    "Joist hangers are galvanised steel connectors that support the end of a floor joist or trimmer where it meets a beam, wall, or header. They provide a strong, reliable connection without the need to build the joist into the wall. In UK construction, joist hangers are specified to comply with BS EN 14545 and are manufactured by Simpson Strong-Tie, Expamet, and BAT. Standard hanger types include face-fix (nailed to the face of the supporting member), masonry hangers (built into blockwork), and concealed hangers. Hangers are sized to match the joist depth and width: common sizes are 47\u00d7200 mm, 47\u00d7225 mm, and 47\u00d7250 mm for standard domestic joists. Each hanger costs \u00a32\u2013\u00a36 from Screwfix, Wickes, or builders\u2019 merchants. Hangers must be fixed with the correct nails or screws as specified by the manufacturer \u2014 never use ordinary nails, which do not have the required shear strength. Each joist typically needs one hanger at each end, so the total count equals twice the number of joists.",
  nextSteps: [
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Truss Clip Calculator", href: "/calculators/hardware/hurricane-tie-calculator/" },
    { label: "Framing Nail Calculator", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: [
    "Use the correct hanger size for your joist dimensions \u2014 the joist must sit snugly in the hanger.",
    "Fix with the manufacturer\u2019s specified nails (typically 30 mm \u00d7 3.75 mm or 40 mm \u00d7 4 mm galvanised).",
    "Fill every nail hole in the hanger \u2014 unfilled holes reduce the connection strength.",
    "Check that the hanger is level and the joist sits fully on the seat of the hanger.",
  ],
  commonMistakes: [
    "Using the wrong size hanger for the joist, allowing the joist to sit loosely or not fully supported.",
    "Not filling all nail holes \u2014 each empty hole reduces the load capacity of the connection.",
    "Using ordinary nails instead of the manufacturer\u2019s specified hanger nails.",
  ],
  faqs: [
    { question: "How many joist hangers per joist?", answer: "Each joist typically requires one hanger at each supported end. If both ends are supported by masonry walls or beams, you need 2 hangers per joist. If one end is built into the wall, you need 1 hanger." },
    { question: "What nails for joist hangers?", answer: "Use the manufacturer\u2019s specified hanger nails only. Simpson Strong-Tie specifies 30 mm \u00d7 3.75 mm or 40 mm \u00d7 4 mm galvanised nails for their hangers. Using ordinary nails voids the rated capacity." },
    { question: "Do I need joist hangers for every joist?", answer: "Joist hangers are required wherever a joist meets a supporting wall, beam, or header and cannot be built into or sit on top of the support. In timber-frame construction, hangers are used at virtually every joist connection." },
    { question: "How much do joist hangers cost?", answer: "Standard galvanised joist hangers cost \u00a32\u2013\u00a36 each from UK builders\u2019 merchants. Concealed or heavy-duty hangers cost \u00a38\u2013\u00a320. For a typical house, budget \u00a3100\u2013\u00a3300 for joist hangers." },
    { question: "Can I use screws instead of nails in joist hangers?", answer: "Only if the manufacturer specifies screws for that hanger. Most joist hangers are designed for nails. If screws are permitted, use structural screws (such as Simpson SDS) with the specified diameter and length." },
    { question: "Where can I buy joist hangers in the UK?", answer: "Joist hangers are available from Screwfix, Toolstation, Wickes, B&Q, Jewson, and Travis Perkins. Simpson Strong-Tie and Expamet are the most widely stocked brands." },
  ],
};

export const hurricaneTieCalculator: CalculatorSEOContent = {
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the number of trusses or rafters.",
    "Select the clip type.",
    "Click Calculate Materials for the clip count.",
  ],
  materialInfo:
    "Truss clips (also called framing anchors or hurricane ties) are galvanised steel connectors that secure roof trusses or rafters to the wall plate below. They resist wind uplift forces that could lift the roof off the building. In the UK, truss clips are required by Building Regulations Part A and BS EN 1995-1-1 to provide a positive connection resisting the design wind uplift load. Every truss or rafter must have a clip at each bearing point on the wall plate. Standard truss clips (such as Simpson Strong-Tie A35 or equivalent) cost \u00a30.50\u2013\u00a32.00 each and are fixed with 30 mm \u00d7 3.75 mm galvanised nails. Each clip requires 4\u20136 nails for the full rated capacity. In high-wind areas (coastal, hilltop, or open rural sites), the structural engineer may specify enhanced clips or strapping. Galvanised steel strapping (30 mm \u00d7 5 mm) is an alternative method, taken from the rafter, over the wall plate, and down the inner leaf of the wall, fixed with nails at each timber contact point.",
  nextSteps: [
    { label: "Roof Truss Calculator", href: "/calculators/roofing/truss-calculator/" },
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Joist Hanger Calculator", href: "/calculators/hardware/joist-hanger-calculator/" },
  ],
  installationTips: [
    "Fix a clip at every truss or rafter bearing point on the wall plate.",
    "Use the manufacturer\u2019s specified nails and fill every hole for full rated capacity.",
    "Install clips before the roof is loaded (before tiling) so the truss sits firmly on the plate.",
    "In high-wind areas, combine clips with galvanised strapping for enhanced resistance.",
  ],
  commonMistakes: [
    "Omitting clips on some trusses \u2014 every truss and rafter must be connected to the wall plate.",
    "Not filling all nail holes, which reduces the uplift resistance below the design requirement.",
    "Using inadequate clips in high-wind locations where enhanced connectors or strapping is required.",
  ],
  faqs: [
    { question: "Are truss clips required by Building Regulations?", answer: "Yes. Part A requires that the roof structure is adequately connected to resist wind uplift. Truss clips provide the most common and cost-effective method of achieving this requirement." },
    { question: "How many clips per truss?", answer: "Each truss needs one clip at each bearing point on the wall plate \u2014 typically 2 clips per truss (one at each side). If the truss bears on an internal wall as well, add another clip at that point." },
    { question: "What nails for truss clips?", answer: "Use 30 mm \u00d7 3.75 mm galvanised nails as specified by the clip manufacturer. Using ordinary nails or screws voids the rated capacity." },
    { question: "Do I need strapping as well as clips?", answer: "In standard locations, clips alone are usually sufficient. In high-wind areas (coastal, hilltop, or open rural sites), the structural engineer may specify galvanised steel strapping from the rafter, over the wall plate, and down the inner wall." },
    { question: "How much do truss clips cost?", answer: "Standard truss clips cost \u00a30.50\u2013\u00a32.00 each. For a typical house with 30 trusses, budget 60 clips at \u00a330\u2013\u00a3120 total. This is negligible compared to the cost of the roof structure." },
    { question: "Where can I buy truss clips in the UK?", answer: "Truss clips are available from Screwfix, Toolstation, Wickes, Jewson, and Travis Perkins. Simpson Strong-Tie and Expamet are the main UK brands." },
  ],
};

export const lumberCostCalculator: CalculatorSEOContent = {
  disclaimer: "Prices are approximate UK averages. Actual prices vary by region, supplier, and market conditions.",
  howToUse: [
    "Select the timber size from the dropdown.",
    "Enter the quantity (number of lengths).",
    "Enter the length per piece in metres.",
    "Click Calculate Materials for the total cost estimate in \u00a3.",
  ],
  materialInfo:
    "Structural softwood timber (primarily spruce, pine, and fir) is the fundamental material for UK timber-frame construction. Timber is graded C16 or C24 according to BS EN 338, with C24 being the higher-strength grade preferred for structural applications. Common sections include 38\u00d789 mm, 38\u00d7140 mm, 47\u00d7150 mm, 47\u00d7200 mm, and 47\u00d7225 mm, supplied in standard lengths of 2.4 m, 3.0 m, 3.6 m, 4.2 m, and 4.8 m. UK timber prices fluctuate with global markets, domestic demand, and supply chain conditions. As of 2026\u20132025, typical prices at builders\u2019 merchants are \u00a32\u2013\u00a34 per metre for 38\u00d789 mm C16, \u00a34\u2013\u00a37 per metre for 47\u00d7200 mm C24, and \u00a36\u2013\u00a312 per metre for 47\u00d7250 mm C24. Buying in bulk (full packs or lorry loads) from Jewson, Travis Perkins, or direct from a sawmill gives 10\u201320% savings compared to single-piece pricing. Pressure-treated timber costs 15\u201325% more than untreated. Kiln-dried timber (KD) is preferred over green timber because it is dimensionally stable and less prone to warping and shrinkage.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Board Feet Calculator", href: "/calculators/hardware/board-feet-calculator/" },
  ],
  installationTips: [
    "Inspect timber on delivery for straightness, splits, and grade stamps \u2014 reject substandard pieces.",
    "Store timber off the ground on bearers, covered with a breathable tarpaulin to prevent moisture uptake.",
    "Use kiln-dried timber for internal framing to minimise shrinkage and movement.",
    "Order 5\u201310% extra to allow for cutting waste and rejected pieces.",
  ],
  commonMistakes: [
    "Ordering without checking current prices \u2014 timber prices can change significantly month to month.",
    "Using C16 where C24 is specified \u2014 C16 has lower strength and shorter span capacity.",
    "Not accounting for waste \u2014 cutting waste of 5\u201310% is normal on any framing project.",
  ],
  faqs: [
    { question: "What is the difference between C16 and C24 timber?", answer: "C16 and C24 are strength grades per BS EN 338. C24 has higher bending strength (24 N/mm\u00b2 vs 16 N/mm\u00b2), higher stiffness, and greater density. C24 is used for structural applications where higher performance is required. C24 costs 10\u201320% more than C16." },
    { question: "Where is the cheapest place to buy timber?", answer: "Builders\u2019 merchants (Jewson, Travis Perkins, Buildbase) offer trade pricing, especially for bulk orders. Timber direct from sawmills is cheapest for large quantities. Wickes and B&Q are more expensive but convenient for small quantities." },
    { question: "How much does timber cost per metre?", answer: "As a rough guide: 38\u00d789 mm C16 = \u00a32\u2013\u00a34/m, 47\u00d7200 mm C24 = \u00a34\u2013\u00a37/m, 47\u00d7250 mm C24 = \u00a36\u2013\u00a312/m. Treated timber adds 15\u201325%. Prices vary by region and supplier." },
    { question: "Should I use treated or untreated timber?", answer: "Use pressure-treated timber wherever it is in contact with concrete, masonry, or the ground, or where it is exposed to moisture. Internal framing above DPC level typically does not require treatment." },
    { question: "What is the difference between sawn and planed timber?", answer: "Sawn timber (rough sawn) is cut to nominal size and has a rough surface. Planed timber (PAR \u2014 planed all round) is machined smooth and is typically 3\u20135 mm smaller than the sawn nominal size. Structural framing uses sawn timber; visible timber uses planed." },
    { question: "How do I estimate timber for a whole house?", answer: "A typical 3-bedroom timber-frame house uses approximately 15\u201325 m\u00b3 of structural softwood. At current UK prices, this represents \u00a35,000\u2013\u00a315,000 for timber alone, depending on specification and market conditions." },
  ],
};

export const boardFeetCalculator: CalculatorSEOContent = {
  disclaimer: "Board feet pricing applies primarily to hardwoods. Softwood is typically sold by the linear metre in the UK.",
  howToUse: [
    "Enter the timber thickness, width, and length.",
    "Enter the price per board foot.",
    "Click Calculate Materials for the total board feet and cost.",
  ],
  materialInfo:
    "A board foot is a unit of volume equal to 144 cubic inches (a piece 1 inch thick \u00d7 12 inches wide \u00d7 12 inches long). It is the standard pricing unit for hardwoods in North America and is used by UK hardwood suppliers who import from North American mills. The formula is: Board Feet = (Thickness in inches \u00d7 Width in inches \u00d7 Length in feet) / 12. Nominal (not actual) dimensions are used for the calculation. In the UK, hardwoods are also sold by the cubic metre, with 1 m\u00b3 = 423.8 board feet. Common hardwoods available from UK suppliers include American oak (from \u00a320\u2013\u00a340 per BF), American walnut (\u00a335\u2013\u00a360 per BF), European oak (\u00a325\u2013\u00a350 per BF), ash (\u00a310\u2013\u00a320 per BF), and maple (\u00a315\u2013\u00a330 per BF). UK hardwood merchants such as Timbmet, Yandles, and South London Hardwoods sell by both board feet and cubic metres. Hardwood is typically sold in random widths and lengths, so the board foot system normalises pricing regardless of individual board dimensions.",
  nextSteps: [
    { label: "Timber Cost Calculator", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Plywood Calculator", href: "/calculators/hardware/plywood-calculator/" },
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
  ],
  installationTips: [
    "Add 25\u201340% waste factor when buying rough-sawn hardwood for furniture and joinery projects.",
    "Ask the merchant to surface (plane) boards to save time in the workshop.",
    "Specify FAS (First and Seconds) grade for projects requiring clear, defect-free faces.",
  ],
  commonMistakes: [
    "Using actual dimensions instead of nominal \u2014 board feet always use nominal measurements.",
    "Not allowing for waste from planing, defects, and offcuts.",
    "Comparing prices per board foot between species without considering density and workability.",
  ],
  faqs: [
    { question: "What is a board foot?", answer: "A board foot (BF) is a unit of volume equal to 144 cubic inches \u2014 a piece 1 inch thick, 12 inches wide, and 1 foot long. It is the standard pricing unit for hardwood in North America and is also used by many UK hardwood suppliers." },
    { question: "How do I convert board feet to cubic metres?", answer: "1 cubic metre = 423.8 board feet. To convert BF to m\u00b3, divide by 423.8. For example, 100 BF = 0.236 m\u00b3." },
    { question: "Why is hardwood sold by the board foot?", answer: "Hardwood comes in random widths and lengths because it is sawn from logs of varying sizes. The board foot system normalises pricing by volume regardless of individual board dimensions." },
    { question: "Where can I buy hardwood in the UK?", answer: "UK hardwood merchants include Timbmet, Yandles, South London Hardwoods, Interesting Timbers, British Hardwoods, and Timber Laminating. Many sell online with delivery. Local timber merchants also carry hardwood stocks." },
    { question: "How much does hardwood cost in the UK?", answer: "Prices per board foot: ash \u00a310\u2013\u00a320, American oak \u00a320\u2013\u00a340, European oak \u00a325\u2013\u00a350, walnut \u00a335\u2013\u00a360, maple \u00a315\u2013\u00a330. Exotic species (teak, sapele, iroko) range from \u00a330\u2013\u00a380 per BF." },
    { question: "What is FAS grade?", answer: "FAS (First and Seconds) is the highest standard grade for hardwood lumber, requiring at least 83% clear (defect-free) wood on the face. It is the grade to specify for furniture, joinery, and any project where appearance matters." },
  ],
};

export const plywoodCalculator: CalculatorSEOContent = {
  disclaimer: "Prices reflect standard softwood plywood. Specialist panels (marine, birch, hardwood-faced) cost more.",
  howToUse: [
    "Enter the area to cover in square metres.",
    "Select the plywood thickness.",
    "Click Calculate Materials for the sheet count and estimated cost in \u00a3.",
  ],
  materialInfo:
    "Plywood is an engineered wood panel made from thin layers (veneers) of wood glued together with alternating grain directions. This cross-laminated construction gives plywood superior strength, stiffness, and dimensional stability compared to solid timber of the same thickness. Standard sheets are 1220\u00d72440 mm (slightly larger than the metric 1200\u00d72400 mm OSB) and are available in thicknesses from 3.6 mm to 25 mm. Common types in the UK include: softwood structural plywood (for sheathing, flooring, and roofing), hardwood-faced plywood (for furniture and joinery), marine plywood (BS 1088 \u2014 for boat building and wet environments), and birch plywood (for furniture and CNC work). Prices at UK builders\u2019 merchants range from \u00a310 for 6 mm softwood to \u00a340+ for 18 mm hardwood-faced. Marine plywood costs \u00a350\u2013\u00a3100+ per sheet. Birch plywood costs \u00a330\u2013\u00a360 for 18 mm. When cutting plywood, use a fine-tooth blade (80+ teeth on a table saw) to minimise splintering on the face veneer. Always store plywood flat on a level surface to prevent warping.",
  nextSteps: [
    { label: "OSB Panel Calculator", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Timber Cost Calculator", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Exterior Sheathing Calculator", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "Leave a 3 mm expansion gap between sheets to allow for moisture movement.",
    "Install with the face grain perpendicular to the supports for maximum strength.",
    "Use stainless steel or galvanised fixings for external applications.",
    "Stagger joints between rows for a stronger installation.",
  ],
  commonMistakes: [
    "Not leaving expansion gaps \u2014 tight sheets will buckle when they absorb moisture.",
    "Using interior-grade plywood outdoors \u2014 it will delaminate when exposed to rain.",
    "Cutting with a coarse blade, which tears the face veneer and produces a rough edge.",
  ],
  faqs: [
    { question: "How many plywood sheets per m\u00b2?", answer: "Each standard 1220\u00d72440 mm sheet covers 2.98 m\u00b2. Divide the total area by 2.98 and add 10% for waste. For 30 m\u00b2, that is (30 \u00d7 1.10) / 2.98 = 11 sheets." },
    { question: "What is the difference between plywood and OSB?", answer: "Plywood is made from rotary-peeled veneers glued in layers. OSB is made from large wood strands pressed with adhesive. Plywood is stronger, more moisture-resistant, and has a smoother surface. OSB is cheaper and adequate for most structural applications." },
    { question: "What is marine plywood?", answer: "Marine plywood (BS 1088) is made with waterproof adhesive and void-free veneers. It is designed for permanent exposure to moisture (boats, wet rooms). It costs 2\u20133 times more than standard plywood but is essential for continuously wet environments." },
    { question: "How much does plywood cost in the UK?", answer: "Standard 1220\u00d72440 mm softwood plywood: 6 mm = \u00a310\u2013\u00a315, 12 mm = \u00a318\u2013\u00a325, 18 mm = \u00a325\u2013\u00a340. Birch plywood 18 mm = \u00a330\u2013\u00a360. Marine plywood 18 mm = \u00a350\u2013\u00a3100+. Prices from Jewson, Travis Perkins, or Wickes." },
    { question: "Can I use plywood for a flat roof?", answer: "Yes. Exterior-grade plywood (WBP \u2014 weather and boil proof) is suitable for flat roof decking. Use 18 mm thickness on joists at 400 mm centres. The plywood must be covered with a roof membrane (felt, single-ply, or GRP) and should not be left exposed to weather." },
    { question: "Plywood or MDF for shelving?", answer: "Plywood is stronger and more moisture-resistant than MDF, making it better for load-bearing shelves and damp areas. MDF provides a smoother surface for painting and is cheaper. For painted shelves with moderate loads, either works. For heavy loads or kitchens/bathrooms, use plywood." },
  ],
};

// ─── FINISHING ───────────────────────────────────────────────────────────────

export const paintCoverageCalculator: CalculatorSEOContent = {
  disclaimer: "Actual coverage varies with surface texture, paint brand, and application method. Rough or textured surfaces may reduce coverage by 20\u201330%.",
  howToUse: [
    "Enter the total wall and ceiling area in square metres.",
    "Deduct window and door areas if desired.",
    "Select the number of coats (2 is standard).",
    "Click Calculate Materials for litres, tins, and coverage.",
  ],
  materialInfo:
    "Paint coverage in the UK is measured in square metres per litre. Standard emulsion paint covers 10\u201314 m\u00b2 per litre on smooth, previously painted surfaces. Matt emulsions typically cover slightly more than silk or satin finishes because of their lower solids content. Premium paints from brands like Dulux, Farrow & Ball, Little Greene, Crown, and Johnstone\u2019s often provide better one-coat coverage due to higher pigment loads. Paint is sold in 1 L, 2.5 L, 5 L, and 10 L tins. A 2.5 L tin covers approximately 25\u201335 m\u00b2 per coat. For a standard room (30 m\u00b2 walls + 12 m\u00b2 ceiling = 42 m\u00b2), two coats require about 6\u20138 litres \u2014 buy 2 tins of 2.5 L or 1 tin of 5 L. Prices range from \u00a38\u2013\u00a315 per 2.5 L for trade paint (Dulux Trade, Crown Trade) to \u00a340\u2013\u00a390 for 2.5 L of premium brands (Farrow & Ball, Little Greene). New plasterboard or plaster requires a mist coat (watered-down emulsion, typically 70:30 paint to water) or a dedicated primer/sealer before the finish coats.",
  nextSteps: [
    { label: "Paint Cost Calculator", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Primer Calculator", href: "/calculators/finishing/primer-calculator/" },
    { label: "Plasterboard Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Use a short-pile roller (5\u201310 mm) for smooth walls, medium-pile (10\u201315 mm) for light texture.",
    "Cut in edges and corners with an angled brush before rolling the main area.",
    "Maintain a wet edge \u2014 work in sections and do not let the edge dry before continuing.",
    "Apply in a W pattern with the roller, then fill in evenly without lifting.",
  ],
  commonMistakes: [
    "Not applying a mist coat on new plaster \u2014 the paint will peel or flash unevenly.",
    "Buying too little paint \u2014 running out mid-wall creates visible lap marks.",
    "Applying second coat too soon \u2014 allow 2\u20134 hours between coats of emulsion.",
    "Using cheap rollers that shed fibres into the paint finish.",
  ],
  faqs: [
    { question: "How much paint for a room?", answer: "A typical 3\u00d74 m room with 2.4 m ceilings has about 42 m\u00b2 of paintable area. At 12 m\u00b2 per litre with 2 coats, you need about 7 litres. Buy a 5 L tin plus a 2.5 L tin, or 2 tins of 5 L to have spare for touch-ups." },
    { question: "How many square metres per litre?", answer: "Standard emulsion covers 10\u201314 m\u00b2 per litre on smooth, previously painted surfaces. Rough or absorbent surfaces reduce this to 8\u201310 m\u00b2. Premium paints may cover up to 16 m\u00b2 per litre." },
    { question: "Should I buy 2.5 L or 5 L tins?", answer: "For a single room, 2.5 L tins are practical. For multiple rooms of the same colour, 5 L or 10 L tins are more economical (15\u201325% cheaper per litre) and ensure colour consistency." },
    { question: "Do I need 2 coats of paint?", answer: "Yes. Two coats are recommended for virtually all paint jobs. The first coat seals and provides a uniform base. The second coat delivers the final colour depth, sheen, and durability." },
    { question: "How much paint for a whole house?", answer: "A typical 3-bedroom house has 250\u2013350 m\u00b2 of paintable walls and ceilings. At 2 coats with 12 m\u00b2 per litre, you need 40\u201360 litres \u2014 about 4\u20136 tins of 10 L or 8\u201312 tins of 5 L." },
    { question: "Which paint brands are best in the UK?", answer: "Trade: Dulux Trade and Crown Trade offer the best coverage and durability for the price. Premium: Farrow & Ball and Little Greene provide exceptional colour depth. Mid-range: Dulux, Crown, and Johnstone\u2019s retail lines offer good quality for DIY." },
  ],
};

export const paintCostCalculator: CalculatorSEOContent = {
  disclaimer: "Prices are approximate UK averages for 2026\u20132025. Actual prices vary by brand, retailer, and region.",
  howToUse: [
    "Enter the total area to paint in square metres.",
    "Select the number of coats.",
    "Choose a paint quality level: trade, mid-range, or premium.",
    "Select whether you need primer.",
    "Click Calculate Materials for a cost breakdown in \u00a3.",
  ],
  materialInfo:
    "The cost of a painting project depends on paint quality, surface area, number of coats, and whether professional labour is involved. Trade-quality paint (\u00a38\u2013\u00a315 per 2.5 L) such as Dulux Trade and Crown Trade is the standard for professional decorators and offers excellent coverage and durability. Mid-range paint (\u00a315\u2013\u00a325 per 2.5 L) such as Dulux retail and Crown retail is designed for DIY consumers and is available at B&Q, Wickes, and supermarkets. Premium paint (\u00a340\u2013\u00a390 per 2.5 L) such as Farrow & Ball, Little Greene, and Paint & Paper Library offers superior colour depth, coverage, and finish but at 3\u20135 times the cost. In addition to paint, budget for supplies: roller set (\u00a35\u2013\u00a315), brushes (\u00a33\u2013\u00a310 each), masking tape (\u00a33\u2013\u00a35 per roll), dust sheets (\u00a35\u2013\u00a315), and primer (\u00a38\u2013\u00a315 per 2.5 L). Professional decorators in the UK charge \u00a3150\u2013\u00a3350 per room or \u00a312\u2013\u00a325 per m\u00b2, including paint and preparation.",
  nextSteps: [
    { label: "Paint Coverage Calculator", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Primer Calculator", href: "/calculators/finishing/primer-calculator/" },
    { label: "Plasterboard Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Buy all your paint at once to ensure batch consistency \u2014 colours can vary between batches.",
    "Invest in quality rollers and brushes \u2014 they make a noticeable difference to the finish.",
    "Use masking tape on skirting boards, architraves, and ceiling lines for clean edges.",
    "Keep a damp cloth to hand for wiping up drips immediately.",
  ],
  commonMistakes: [
    "Choosing the cheapest paint for high-traffic areas \u2014 it will need repainting in 2\u20133 years instead of 7\u201310.",
    "Not budgeting for primer \u2014 skipping primer on new plaster doubles the paint consumption.",
    "Not buying enough paint \u2014 matching a custom colour afterwards is nearly impossible.",
    "Ignoring sheen selection \u2014 matt hides imperfections but marks easily; eggshell is the best all-rounder.",
  ],
  faqs: [
    { question: "How much does it cost to paint a room?", answer: "A standard 3\u00d74 m room costs \u00a330\u2013\u00a380 in materials for a DIY project (7\u20138 litres of paint plus supplies). Hiring a professional decorator costs \u00a3150\u2013\u00a3350 per room including paint and preparation." },
    { question: "Is premium paint worth it?", answer: "For rooms you use daily, yes. Premium paints (\u00a340\u2013\u00a390 per 2.5 L) offer better coverage (sometimes one coat), superior washability, and last 10\u201315 years. Over the lifetime of the paint, premium paint costs less per year than repainting every 3\u20135 years with budget paint." },
    { question: "How much do decorating supplies cost?", answer: "Basic supplies for one room cost \u00a315\u2013\u00a340: roller and tray (\u00a35\u2013\u00a315), 2 brushes (\u00a36\u2013\u00a320), masking tape (\u00a33\u2013\u00a35 per roll, 2\u20133 rolls), and dust sheets (\u00a35\u2013\u00a315)." },
    { question: "Where is the cheapest place to buy paint?", answer: "Trade paint from builders\u2019 merchants (Jewson, Travis Perkins) is the best value for quality. For DIY brands, B&Q, Wickes, and Homebase run regular promotions. Online retailers (Amazon, Decorating Direct) sometimes beat shop prices." },
    { question: "How much paint for 100 m\u00b2?", answer: "At 12 m\u00b2 per litre with 2 coats, 100 m\u00b2 requires about 17 litres. Buy 2 tins of 10 L for \u00a360\u2013\u00a3120 (trade) or \u00a3120\u2013\u00a3200 (mid-range)." },
    { question: "Do I need primer before painting?", answer: "Primer is recommended for new plasterboard (mist coat), bare timber, repaired/filled areas, dramatic colour changes, and stain blocking. On previously painted surfaces in good condition with a similar colour, a dedicated primer is not usually necessary." },
  ],
};

export const primerCalculator: CalculatorSEOContent = {
  disclaimer: "Porous or textured surfaces may require additional primer. Always follow the manufacturer\u2019s coverage rate.",
  howToUse: [
    "Enter the total area in square metres.",
    "Select the surface type for the correct coverage rate.",
    "Click Calculate Materials for litres and tin count.",
  ],
  materialInfo:
    "Primer (or sealer/undercoat) is a preparatory coating applied before the finish paint to ensure proper adhesion, uniform sheen, and consistent colour. Different surfaces require different primer formulations. For new plasterboard, a mist coat (emulsion diluted 70:30 with water) is the traditional approach, though dedicated plasterboard primers (such as Zinsser Gardz or Dulux Trade Plasterboard Primer) provide a more consistent result and are preferred by professional decorators. New bare timber requires a wood primer (acrylic or solvent-based) to seal the grain and prevent tannin bleed, especially on softwoods like pine and cedar. For stain blocking (covering water stains, smoke damage, marker pen, or tannin bleed), shellac-based primers such as Zinsser BIN are unmatched. Coverage rates vary: plasterboard primer covers 10\u201314 m\u00b2 per litre, wood primer covers 8\u201310 m\u00b2 per litre, and stain-blocking primer covers 6\u20138 m\u00b2 per litre. Prices range from \u00a38 to \u00a320 per litre from UK retailers. Zinsser, Dulux Trade, and Crown Trade are the leading UK primer brands.",
  nextSteps: [
    { label: "Paint Coverage Calculator", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Paint Cost Calculator", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Jointing Compound Calculator", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
  ],
  installationTips: [
    "Apply primer with the same type of roller or brush you will use for the topcoat.",
    "Allow primer to dry fully before topcoating \u2014 typically 1\u20132 hours for acrylic, 16\u201324 hours for solvent-based.",
    "Ask your paint supplier to tint the primer towards the topcoat colour for better coverage.",
    "Use a brush for cutting in and a roller for large areas.",
  ],
  commonMistakes: [
    "Not priming new plasterboard \u2014 causes flashing (uneven sheen) visible under certain lighting.",
    "Using water-based primer over stains \u2014 water-based primers do not block tannin, nicotine, or water stains; use shellac-based (Zinsser BIN).",
    "Applying primer too thickly \u2014 one even coat is sufficient; thick coats take longer to dry and may peel.",
    "Priming over dust and dirt \u2014 always clean or vacuum surfaces before priming.",
  ],
  faqs: [
    { question: "Do I always need primer before painting?", answer: "Primer is essential on new plasterboard, bare timber, repaired areas, and when blocking stains or making dramatic colour changes. On previously painted surfaces in good condition with a similar colour, a self-priming topcoat may be sufficient." },
    { question: "What primer for new plasterboard?", answer: "Use a mist coat (emulsion diluted 70:30 with water) or a dedicated plasterboard primer (Zinsser Gardz, Dulux Trade Plasterboard Primer). The primer seals the absorbent surface for an even finish coat." },
    { question: "How much primer per litre?", answer: "Coverage varies by surface: plasterboard 10\u201314 m\u00b2/L, previously painted walls 12\u201316 m\u00b2/L, bare timber 8\u201310 m\u00b2/L, stain-blocking primer 6\u20138 m\u00b2/L. Always check the product data sheet." },
    { question: "Can I use white paint as primer?", answer: "No. Regular paint and primer serve different purposes. Primer has special resins for adhesion and sealing. Using paint as primer on new plasterboard results in uneven absorption, flashing, and poor adhesion." },
    { question: "Should I tint primer?", answer: "Yes, when the topcoat is a medium or dark colour. Tinted primer reduces the number of topcoats needed for full opacity. Most retailers can add a small amount of colorant to primer at no extra cost." },
    { question: "What are the best primer brands in the UK?", answer: "Zinsser (BIN for stain blocking, Gardz for plasterboard, Bulls Eye 1-2-3 for multi-purpose) is the professional standard. Dulux Trade Primer/Undercoat and Crown Trade Primer are excellent all-rounders. For DIY, Dulux and Ronseal offer good-quality primers." },
  ],
};

// ─── OUTDOOR ────────────────────────────────────────────────────────────────

export const deckBoardCalculator: CalculatorSEOContent = {
  disclaimer: "This estimate includes a 10% waste factor. Actual waste varies with deck shape and board length. Diagonal patterns increase waste to 15\u201320%.",
  howToUse: [
    "Enter the deck length and width in metres.",
    "Enter the board width in millimetres (140 mm for standard deck boards).",
    "Enter the board length (common lengths: 2.4 m, 3.0 m, 3.6 m, 4.8 m).",
    "Click Calculate Materials for board count, linear metres, and area coverage.",
  ],
  materialInfo:
    "Deck boards are the visible surface of your decking and take the most wear from foot traffic, furniture, weather, and UV exposure. The most common materials in the UK are pressure-treated softwood (the most affordable option), western red cedar, hardwoods (iroko, balau, cumaru), and composite decking.\n\nPressure-treated softwood (typically Scandinavian redwood or pine, treated to Use Class 3 or 4) is the most popular choice for UK decking. Standard boards are 32\u00d7150 mm, with a grooved anti-slip profile on one face. Prices range from \u00a33 to \u00a38 per metre from Wickes, B&Q, Jewson, or Travis Perkins. Treated softwood decking lasts 10\u201315 years with annual treatment using decking oil or stain.\n\nWestern red cedar is naturally rot-resistant and weathers to an attractive silver-grey. It costs \u00a38\u2013\u00a315 per metre and lasts 15\u201320 years without chemical treatment.\n\nHardwood decking (iroko, balau, cumaru, ipe) is extremely durable and naturally resistant to rot and insects. Prices range from \u00a312 to \u00a325 per metre. Hardwood decking can last 25\u201340+ years with minimal maintenance.\n\nComposite decking (Trex, TimberTech, Millboard, Eva-Last) is made from wood fibres and recycled plastic. It never needs staining, does not rot, and comes with warranties of 25\u201350 years. Prices range from \u00a310 to \u00a330 per metre. Composite requires specific fixings and a ventilated subframe.\n\nBoard spacing is critical: leave 5\u20138 mm between boards for drainage. For treated softwood boards installed wet, butt them tight \u2014 they will shrink as they dry. For composite, always follow the manufacturer\u2019s expansion gap specification.",
  nextSteps: [
    { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Deck Railing Calculator", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Start the first board perfectly straight and square to the house \u2014 every subsequent board follows this line.",
    "Pre-drill near the ends of boards to prevent splitting, especially with hardwood.",
    "Stagger butt joints by at least 2 joist bays for strength and appearance.",
    "Orient boards with the bark side up (growth rings curving downward) so water runs off rather than pooling.",
    "Leave a 10 mm gap between the house wall and the first board for drainage.",
  ],
  commonMistakes: [
    "Not leaving gaps between boards \u2014 tight dry boards will buckle when they absorb moisture.",
    "Using screws that are too short \u2014 deck screws should penetrate at least 40 mm into the joist.",
    "Aligning all butt joints on the same joist \u2014 stagger joints for strength and a professional appearance.",
    "Skipping sealant on cut ends \u2014 exposed end grain absorbs water and rots faster than treated surfaces.",
  ],
  faqs: [
    { question: "How many deck boards for a 4 m \u00d7 5 m deck?", answer: "A 4\u00d75 m deck using standard 150 mm wide boards needs approximately 27 boards at 5 m length. With 10% waste, order 30 boards. Using shorter boards with butt joints will require more boards to account for waste at joints." },
    { question: "What size deck boards should I use?", answer: "The most common deck board in the UK is 32\u00d7150 mm (actual dimensions after planing). This provides a good balance of strength, appearance, and cost. 28\u00d7120 mm boards are available for lighter applications." },
    { question: "How far apart should deck boards be?", answer: "Leave 5\u20138 mm between boards for drainage and ventilation. Treated softwood boards installed wet should be butted tight \u2014 they shrink as they dry. Composite boards must be spaced per the manufacturer\u2019s instructions, typically 5\u20136 mm." },
    { question: "How long do deck boards last?", answer: "Treated softwood: 10\u201315 years with annual oiling. Cedar: 15\u201320 years. Hardwood: 25\u201340+ years. Composite: 25\u201350 years with manufacturer warranty. Untreated softwood: 3\u20135 years." },
    { question: "Screws or nails for decking?", answer: "Stainless steel screws are the best fixing for deck boards. Use 65\u201375 mm stainless steel deck screws with 2 screws per board at each joist. Nails are less reliable and tend to work loose over time." },
    { question: "How much does decking cost in the UK?", answer: "Treated softwood: \u00a33\u2013\u00a38/m. Cedar: \u00a38\u2013\u00a315/m. Hardwood: \u00a312\u2013\u00a325/m. Composite: \u00a310\u2013\u00a330/m. For a 4\u00d75 m deck, board-only costs range from approximately \u00a3450 (treated softwood) to \u00a33,000 (premium composite)." },
  ],
};

export const deckFootingCalculator: CalculatorSEOContent = {
  disclaimer: "Footing depths must meet local requirements. This calculator provides a layout estimate \u2014 actual positions depend on deck design, loads, and ground conditions.",
  howToUse: [
    "Enter the deck length and width in metres.",
    "Set the maximum post spacing (typically 1.8 m for 150\u00d750 mm beams, 2.4 m for 200\u00d750 mm beams).",
    "Click Calculate Materials for footing count, post count, and beam requirements.",
  ],
  materialInfo:
    "Deck footings are concrete piers that transfer the weight of the deck and its loads to the ground. Without proper footings, the deck will settle, shift, or heave with ground movement. The two common methods are concrete-filled column formers (cardboard tubes set in excavated holes) and concrete pad foundations.\n\nFor most UK garden decks, 250 mm or 300 mm diameter column formers filled with concrete are the standard approach. Each 250 mm \u00d7 600 mm deep footing uses approximately 0.029 m\u00b3 of concrete (about 3 bags of 25 kg postcrete). Footings should extend at least 450 mm below ground level to reach stable ground below the topsoil layer. In areas with clay soil prone to heave, deeper footings (600\u2013900 mm) may be required.\n\nPost spacing depends on the beam size and timber grade. For a double 47\u00d7200 mm C24 beam, the maximum post spacing is approximately 2.4 m. For a double 47\u00d7150 mm beam, reduce to 1.8 m. Posts are typically 100\u00d7100 mm pressure-treated softwood, connected to the footing with a galvanised post base (bolt-down shoe) rather than embedded in the concrete.\n\nConcrete for footings should be at least C20/25 strength. Allow 24\u201348 hours of curing before loading. A typical 4\u00d75 m deck attached to the house requires 4\u20136 footings.",
  nextSteps: [
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
    { label: "Deck Railing Calculator", href: "/calculators/outdoor/deck-railing-calculator/" },
  ],
  installationTips: [
    "Dig footing holes at least 450 mm deep into firm, undisturbed ground.",
    "Use column formers for clean, consistent footings.",
    "Set post base bolts into the wet concrete and check they are centred and plumb.",
    "Crown the top of each footing above ground level so water drains away from the post base.",
    "Wait at least 48 hours before fixing posts to allow the concrete to cure.",
  ],
  commonMistakes: [
    "Footings too shallow \u2014 they must reach firm ground below the topsoil layer.",
    "Embedding posts in concrete \u2014 this traps moisture and causes rot; always use a metal post base.",
    "Spacing posts too far apart, overloading the beams and causing sagging.",
  ],
  faqs: [
    { question: "How deep should deck footings be in the UK?", answer: "Footings should extend at least 450 mm below ground level into firm, undisturbed soil. In clay soils, 600\u2013900 mm is recommended. Check with your local building control if you are unsure about soil conditions." },
    { question: "How many footings for a 4\u00d75 m deck?", answer: "A 4\u00d75 m deck with 2.4 m post spacing needs approximately 4\u20136 footings in 2 rows. If the deck is attached to the house with a ledger board, the house side does not need footings." },
    { question: "Do I need planning permission for a deck?", answer: "In most cases, a deck under 300 mm above ground level is permitted development. Raised decks (above 300 mm) may require planning permission depending on location, size, and proximity to boundaries. Check with your local planning authority." },
    { question: "What concrete for deck footings?", answer: "Use C20/25 or stronger concrete. Postcrete (quick-setting concrete) is suitable for fence posts and light decks. For larger decks or raised structures, use standard general-purpose concrete for greater strength." },
    { question: "How much concrete per footing?", answer: "A 250 mm diameter \u00d7 600 mm deep footing needs about 0.029 m\u00b3 of concrete (approximately 3 bags of 25 kg postcrete). A 300 mm \u00d7 600 mm footing needs about 0.042 m\u00b3 (4 bags)." },
    { question: "Can I use deck blocks instead of concrete footings?", answer: "Precast deck blocks (concrete pier blocks) can be used for low-level, freestanding decks on stable ground. They sit on the surface and do not require excavation. However, they are not suitable for raised decks or decks attached to buildings." },
  ],
};

export const deckRailingCalculator: CalculatorSEOContent = {
  disclaimer: "This estimate uses standard spacing. Always verify height, baluster spacing, and post fixing requirements with Building Regulations Part K.",
  howToUse: [
    "Enter the total deck perimeter in metres.",
    "Subtract the house-side length (no railing needed there).",
    "Click Calculate Materials for post count, baluster count, and rail linear metres.",
  ],
  materialInfo:
    "Deck railing is a safety feature required by Building Regulations Part K on any deck surface 600 mm or more above ground level. The minimum railing height is 900 mm for residential decks and 1100 mm for commercial or public access. Balusters must be spaced so that a 100 mm sphere cannot pass between them.\n\nRailing systems consist of posts, top rail, bottom rail, balusters (spindles), and optionally a flat capping rail. Posts are typically 100\u00d7100 mm pressure-treated softwood or composite sleeves over timber, spaced at maximum 1.8 m centres. They must be bolted to the deck subframe with coach bolts or proprietary post brackets \u2014 never just screwed to the deck boards.\n\nBalusters are typically 41\u00d741 mm or 32\u00d732 mm timber spindles, or metal/composite equivalents. At standard spacing, you need approximately 10 balusters per metre of railing. The top and bottom rails are typically 47\u00d7100 mm timber.\n\nTimber railing costs approximately \u00a330\u2013\u00a360 per metre installed. Composite railing systems cost \u00a360\u2013\u00a3120 per metre. Glass panel railing costs \u00a3100\u2013\u00a3250 per metre. Stainless steel wire railing costs \u00a380\u2013\u00a3200 per metre.\n\nRailing is one of the most common building regulation issues with decks. Building control inspectors check post fixing strength, baluster spacing, height, and the gap beneath the bottom rail (must be less than 100 mm).",
  nextSteps: [
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator/" },
    { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator/" },
  ],
  installationTips: [
    "Bolt posts to the deck subframe with M10 or M12 coach bolts through the rim joist or bearer.",
    "Space balusters so that a 100 mm sphere cannot pass between them.",
    "Ensure the gap between the deck surface and the bottom rail is less than 100 mm.",
    "Use a flat capping rail (47\u00d7150 mm) on top of the posts for a comfortable handrail.",
  ],
  commonMistakes: [
    "Attaching posts only to the deck boards \u2014 they must be bolted to the structural subframe.",
    "Spacing balusters too far apart \u2014 the 100 mm sphere test must pass at every point.",
    "Railing too low \u2014 minimum 900 mm from the deck surface to the top of the railing.",
  ],
  faqs: [
    { question: "When do I need deck railing?", answer: "Building Regulations Part K requires railing on any deck surface 600 mm or more above the adjacent ground level. This includes raised decks, multi-level decks, and any edge where there is a drop." },
    { question: "How high must deck railing be?", answer: "Minimum 900 mm from the deck surface to the top of the railing for residential decks. 1100 mm for commercial or public access decks." },
    { question: "How many balusters per metre?", answer: "For 32 mm balusters with 100 mm maximum gaps, you need approximately 8 balusters per metre. For 41 mm balusters, approximately 7 per metre. The exact count depends on baluster width and the 100 mm sphere test." },
    { question: "How much does deck railing cost?", answer: "Timber railing: \u00a330\u2013\u00a360/m installed. Composite: \u00a360\u2013\u00a3120/m. Glass panels: \u00a3100\u2013\u00a3250/m. For a typical 12 m railing run, budget \u00a3360\u2013\u00a3720 (timber) or \u00a3720\u2013\u00a31,440 (composite)." },
    { question: "Do I need a handrail on deck stairs?", answer: "Yes, if the stair has 2 or more risers. A handrail is required on at least one side, at 900\u20131000 mm height measured from the stair nosing. For stairs wider than 1.0 m, handrails on both sides are recommended." },
    { question: "Can I use glass panels for deck railing?", answer: "Yes. Toughened safety glass panels (10 mm or 12 mm) are increasingly popular for their clean appearance and unobstructed views. They must comply with BS 6206 or BS EN 12150 for safety glass and be fixed with approved glass clamps or channels." },
  ],
};

export const deckStairCalculator: CalculatorSEOContent = {
  disclaimer: "Step dimensions must comply with Building Regulations Part K. Always verify riser and going measurements.",
  howToUse: [
    "Enter the total height from ground to deck surface in millimetres.",
    "The calculator determines the number of steps, stringer length, and tread boards.",
    "Click Calculate Materials for a complete step breakdown.",
  ],
  materialInfo:
    "Deck stairs provide access between ground level and a raised deck. Building Regulations Part K specifies maximum dimensions for external steps: risers between 100 mm and 220 mm, goings (treads) minimum 220 mm, and all risers must be uniform to within 5 mm. The most comfortable dimensions for external stairs are a riser of 150\u2013175 mm with a going of 250\u2013300 mm.\n\nStringers are the diagonal support boards on each side (and centre for wide stairs) of the staircase. They are typically cut from 47\u00d7250 mm or 47\u00d7300 mm pressure-treated C24 timber, with triangular notches cut to support the treads. A stair wider than 900 mm requires a centre stringer. Treads are typically 2 deck boards (32\u00d7150 mm) per step, screwed to the notched stringers.\n\nFor a typical 900 mm deck height with 175 mm risers, you need 5 steps, 2 stringers at approximately 1.5 m each, and 10 tread boards. A concrete landing pad (at least 100 mm thick, 900\u00d7900 mm) is needed at the base. A handrail is required on at least one side if there are 2 or more risers.\n\nTimber for deck stairs should be pressure-treated to Use Class 3 or 4 and fixed with stainless steel screws. The bottom of the stringers should sit on a metal bracket on the concrete pad, not directly on the ground. Total material cost for a 5-step staircase is typically \u00a3100\u2013\u00a3250 plus \u00a350\u2013\u00a3100 for the concrete landing pad.",
  nextSteps: [
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Deck Railing Calculator", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Concrete Steps Calculator", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Calculate the exact riser height by dividing the total height by the number of steps \u2014 all risers must be equal.",
    "Cut a template stringer first and test-fit it before cutting the remaining stringers.",
    "Fix the top of the stringers to the deck rim joist with galvanised joist hangers or stair brackets.",
    "Sit the bottom of the stringers on a concrete pad, not directly on soil or grass.",
  ],
  commonMistakes: [
    "Unequal riser heights \u2014 all risers must be within 5 mm of each other per Part K.",
    "Not providing a solid landing at the bottom \u2014 stringers on soil will rot and sink.",
    "Cutting notches too deep in the stringer, weakening it structurally.",
    "Forgetting the handrail \u2014 required if there are 2 or more risers.",
  ],
  faqs: [
    { question: "What are the Building Regulations for deck stairs?", answer: "Part K: maximum riser 220 mm, minimum going 220 mm, uniform risers within 5 mm, handrail required with 2+ risers. Handrail height 900\u20131000 mm from the stair nosing." },
    { question: "How many steps for a 900 mm high deck?", answer: "Dividing 900 mm by a comfortable 175 mm riser gives approximately 5 steps (5 \u00d7 180 mm = 900 mm). Adjust the exact riser to achieve equal steps: 900 / 5 = 180 mm risers." },
    { question: "How wide should deck stairs be?", answer: "Minimum 600 mm for utility access, 900 mm for comfortable single-person access, and 1200 mm for two people to pass. Stairs wider than 900 mm need a centre stringer." },
    { question: "Do I need a landing at the bottom?", answer: "Yes. The stringers must bear on a solid surface. A concrete pad at least 100 mm thick and at least as wide as the stairs is standard. Some decks use a precast slab or paving stones." },
    { question: "What timber for stair stringers?", answer: "Use 47\u00d7250 mm or 47\u00d7300 mm C24 pressure-treated softwood. After cutting the notches, the remaining timber depth should be at least 90 mm. Larger sections or hardwood may be needed for wide stairs." },
    { question: "Can I build deck stairs without notched stringers?", answer: "Yes. Metal stair brackets (stair tread supports) bolt to the side of un-notched stringers. They are easier for DIYers, produce a clean look, and do not weaken the stringer. Available from Screwfix and specialist suppliers." },
  ],
};

// ─── REGISTRY MAP ───────────────────────────────────────────────────────────

export const registryGB: Record<string, Record<string, CalculatorSEOContent>> = {
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
    "lumber-cost-calculator": lumberCostCalculator,
    "board-feet-calculator": boardFeetCalculator,
    "plywood-calculator": plywoodCalculator,
  },
  finishing: {
    "paint-coverage-calculator": paintCoverageCalculator,
    "paint-cost-calculator": paintCostCalculator,
    "primer-calculator": primerCalculator,
  },
  outdoor: {
    "deck-board-calculator": deckBoardCalculator,
    "deck-footing-calculator": deckFootingCalculator,
    "deck-railing-calculator": deckRailingCalculator,
    "deck-stair-calculator": deckStairCalculator,
  },
};
