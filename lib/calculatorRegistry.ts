import { FieldConfig } from "@/components/calculators/CalculatorForm";
import { ResultItem } from "@/components/calculators/ResultCard";

import {
  calculateAnchorBolts,
  calculateSillSeal,
  calculateSillPlates,
  calculateConcrete,
  calculateConcreteSlab,
  calculateConcreteFooting,
  calculateConcreteColumn,
  calculateConcreteSteps,
} from "./calculations/foundationCalculations";
import {
  calculateRimJoists,
  calculateFloorJoists,
  calculateBridging,
  calculateSubfloorAdhesive,
  calculateOSBPanels,
} from "./calculations/floorFramingCalculations";
import {
  calculateBottomPlates,
  calculateTopPlates,
  calculateStuds,
  calculateHeaders,
  calculateKingStuds,
  calculateJackStuds,
  calculateExteriorSheathing,
} from "./calculations/wallFramingCalculations";
import {
  calculateTrusses,
  calculateRafters,
  calculateRidgeBoard,
  calculateRoofSheathing,
  calculateHClips,
  calculateUnderlayment,
  calculateShingles,
  calculateDripEdge,
  calculateRoofPitch,
  calculateRoofArea,
  calculateRoofSlope,
} from "./calculations/roofingCalculations";
import {
  calculateHousewrap,
  calculateSeamTape,
  calculateWindowFlashing,
  calculateDoorFlashing,
  calculateVinylSiding,
  calculateHardieSiding,
} from "./calculations/exteriorShellCalculations";
import {
  calculateCavityInsulation,
  calculateVaporBarrier,
  calculateAcousticalSealant,
  calculateSheetrock,
  calculateDrywallScrews,
  calculateJointCompound,
} from "./calculations/insulationDrywallCalculations";
import {
  calculateFramingNails,
  calculateSheathingNails,
  calculateJoistHangers,
  calculateHurricaneTies,
  calculateCaulk,
  calculateLumberCost,
  BOARD_TYPES,
  calculateBoardFeet,
  calculatePlywood,
  PLYWOOD_TYPES,
} from "./calculations/hardwareCalculations";
import {
  calculateDeckBoards,
  calculateDeckFootings,
  calculateDeckRailing,
  calculateDeckStairs,
} from "./calculations/outdoorCalculations";
import {
  calculatePaintCoverage,
  calculatePaintCost,
  calculatePrimer,
} from "./calculations/finishingCalculations";

export interface NextStep {
  label: string;
  href: string;
}

export interface CalculatorConfig {
  fields: FieldConfig[];
  calculate: (values: Record<string, number | string>) => ResultItem[];
  disclaimer: string;
  howToUse: string[];
  materialInfo: string;
  nextSteps?: NextStep[];
  installationTips: string[];
  commonMistakes: string[];
  faqs: { question: string; answer: string }[];
}

const WASTE_DISCLAIMER =
  "Add 10–15% to your order as a waste factor for cuts and mistakes.";

// ─── FOUNDATION ─────────────────────────────────────────────────────────────

const anchorBoltCalculator: CalculatorConfig = {
  fields: [
    { id: "perimeter", label: "Foundation Perimeter", unit: "ft", placeholder: "120" },
    { id: "spacing", label: "Bolt Spacing", unit: "ft", defaultValue: 6, placeholder: "6" },
  ],
  calculate: (v) => {
    const r = calculateAnchorBolts(v.perimeter as number, v.spacing as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure the total perimeter of your foundation in feet.",
    "Enter the standard spacing (default 6 ft per IRC code).",
    "Click Calculate to get the bolt count.",
  ],
  materialInfo:
    "Anchor bolts (J-bolts) are L-shaped or J-shaped steel fasteners embedded in wet concrete to mechanically secure the wood sill plate to the foundation. The standard residential anchor bolt is 1/2-inch diameter by 10 inches long, with at least 7 inches of embedment. They are available in hot-dipped galvanized steel for corrosion resistance. The IRC mandates placement every 6 feet on center and within 12 inches of each board end, corner, and joint. In high-wind or seismic zones, engineers may specify 5/8-inch bolts or closer spacing. Epoxy-set retrofit anchor bolts (such as Simpson SET-XP or Hilti HIT-RE 500) are used when bolts were missed during the pour. Expect to pay $1.50 to $3.00 per bolt for standard J-bolts at most building supply stores, with retrofit epoxy anchors costing $8 to $15 each installed.",
  nextSteps: [
    { label: "Sill Seal Calculator", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Pressure Treated Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Concrete Calculator", href: "/calculators/foundation/concrete-calculator/" },
  ],
  installationTips: [
    "Set bolts before concrete sets fully, while it is still workable.",
    "Use a template jig to maintain consistent spacing and alignment.",
    "Ensure bolts extend at least 7 inches into concrete.",
    "Place bolts within 12 inches of the end of each sill plate piece.",
  ],
  commonMistakes: [
    "Skipping bolts at board joints — always place one within 12\" of each end.",
    "Using the wrong bolt diameter — standard is 1/2\" minimum.",
    "Not checking plumb before concrete cures.",
  ],
  faqs: [
    { question: "What size anchor bolts are required by code?", answer: "The IRC requires a minimum 1/2-inch diameter anchor bolt embedded at least 7 inches into concrete, spaced no more than 6 feet apart. In seismic design categories D, E, and F, or in high-wind zones, local amendments may require 5/8-inch bolts or reduced spacing." },
    { question: "Do I need anchor bolts at every corner?", answer: "Yes. Place an anchor bolt within 12 inches of each end of every sill plate board and at every foundation corner. This prevents the sill plate from shifting under lateral loads from wind or earthquakes." },
    { question: "Can I add anchor bolts after the concrete has cured?", answer: "Yes, using epoxy anchor bolts (Simpson SET-XP or Hilti HIT-RE 500). A hole is drilled into the cured concrete, filled with structural epoxy, and the threaded rod is inserted. These retrofit anchors achieve load ratings comparable to cast-in-place bolts when installed correctly." },
    { question: "How many anchor bolts do I need for a 1,500 sq ft house?", answer: "A typical 1,500 sq ft house with a perimeter of about 160 linear feet needs roughly 28 to 32 anchor bolts at standard 6-foot spacing. Always add extras for corners, joints, and any interior bearing walls that sit on the foundation." },
    { question: "What is the cost of anchor bolts for a foundation?", answer: "Standard 1/2-inch J-bolts cost $1.50 to $3.00 each, so a full foundation typically runs $50 to $100 in bolt hardware. Retrofit epoxy anchors are more expensive at $8 to $15 per bolt installed, including the adhesive." },
    { question: "Do I need a washer on anchor bolts?", answer: "Yes, a washer is required under the nut to distribute the clamping force across the sill plate and prevent the nut from pulling into the wood. Use a standard square plate washer (3x3 inches) in seismic zones for additional bearing area." },
  ],
};

const sillSealCalculator: CalculatorConfig = {
  fields: [
    { id: "perimeter", label: "Foundation Perimeter", unit: "ft", placeholder: "120" },
    { id: "rollCoverage", label: "Roll Coverage", unit: "ft", defaultValue: 50, placeholder: "50" },
  ],
  calculate: (v) => {
    const r = calculateSillSeal(v.perimeter as number, v.rollCoverage as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure your total foundation perimeter in linear feet.",
    "Enter the roll coverage (most rolls are 50 ft).",
    "Click Calculate to see how many rolls you need.",
  ],
  materialInfo:
    "Sill seal is a closed-cell polyethylene foam gasket installed between the concrete foundation wall and the pressure-treated sill plate. Its primary purpose is to block air infiltration and prevent moisture from wicking up through the concrete into the wood framing. Standard sill seal comes in 5.5-inch and 7.5-inch widths to match 2x6 and 2x8 sill plates, sold in 50-foot rolls. Thickness options are 1/4-inch for standard applications and 1/2-inch for foundations with minor surface irregularities. Some premium sill seals include a polyethylene moisture barrier bonded to the foam. In termite-prone regions, borate-treated sill seal or stainless steel termite mesh may be required. Sill seal costs approximately $5 to $10 per 50-foot roll, making it one of the least expensive but most important air-sealing materials in the building envelope.",
  nextSteps: [
    { label: "Pressure Treated Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Unroll sill seal along the foundation just before placing sill plates.",
    "Overlap seams by at least 6 inches.",
    "Use PT-compatible sill seal — some foam degrades with treated lumber chemicals.",
  ],
  commonMistakes: [
    "Forgetting to install sill seal — it is a code requirement in most jurisdictions.",
    "Not overlapping seams, leaving gaps for air infiltration.",
  ],
  faqs: [
    { question: "Is sill seal required by building code?", answer: "Yes. The IRC Section R403.1.6 requires a gasket or sill seal between the concrete foundation and the wood sill plate to create a continuous air barrier. Most local building inspectors will flag missing sill seal during the framing inspection." },
    { question: "What thickness of sill seal should I use?", answer: "Standard 1/4-inch foam sill seal is sufficient for most applications on smooth, level foundations. Use 1/2-inch sill seal on foundations with minor surface irregularities or in climates with significant temperature swings where additional compression and sealing are needed." },
    { question: "What width sill seal do I need?", answer: "Match the sill seal width to your sill plate width. Use 5.5-inch sill seal for 2x6 sill plates and 7.5-inch for 2x8 sill plates. The seal should cover the full bearing surface without extending past the edges." },
    { question: "How many rolls of sill seal do I need for a house?", answer: "Divide your total foundation perimeter by the roll length (typically 50 feet). A 1,500 sq ft house with a 160-foot perimeter needs about 4 rolls. Always buy one extra roll for waste and overlap at seams." },
    { question: "Can I use caulk instead of sill seal?", answer: "Caulk alone does not satisfy the code requirement for a gasket between the foundation and sill plate. You can use acoustical sealant in addition to sill seal for an even tighter air barrier, but sill seal is the primary material required." },
    { question: "Does sill seal prevent termites?", answer: "Standard foam sill seal does not stop termites. In termite-prone areas (most of the southern US), consider using a borate-treated sill seal or installing a stainless steel termite mesh between the foundation and the sill plate in combination with regular sill seal." },
  ],
};

const sillPlateCalculator: CalculatorConfig = {
  fields: [
    { id: "perimeter", label: "Foundation Perimeter", unit: "ft", placeholder: "120" },
    { id: "boardLength", label: "Board Length", unit: "ft", defaultValue: 8, placeholder: "8" },
  ],
  calculate: (v) => {
    const r = calculateSillPlates(v.perimeter as number, v.boardLength as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure total foundation perimeter in feet.",
    "Select board length (common: 8 ft, 12 ft, 16 ft).",
    "Click Calculate for board count.",
  ],
  materialInfo:
    "Pressure-treated (PT) sill plates are the lowest horizontal wood member of the wall framing, bolted directly to the concrete foundation. The preservative treatment (ACQ, CA-B, or micronized copper) resists rot, fungal decay, and insect damage from ground contact and moisture exposure. Standard sill plate sizes are 2x6 and 2x8, matching the wall framing width. Lumber should be rated UC4A or UC4B (Use Category 4) for ground contact applications. Common board lengths are 8, 12, and 16 feet, with longer boards reducing the number of joints. Always use PT-compatible fasteners (hot-dipped galvanized, stainless steel, or silicon bronze) since the copper in modern treatments corrodes standard steel hardware. Sill plates cost roughly $8 to $16 per 8-foot board depending on region and lumber prices. In some jurisdictions, engineered composite sill plates are permitted as an alternative to pressure-treated lumber.",
  nextSteps: [
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Sill Seal Calculator", href: "/calculators/foundation/sill-seal-calculator/" },
    { label: "Bottom Plate Calculator", href: "/calculators/wall-framing/bottom-plate-calculator/" },
  ],
  installationTips: [
    "Use ACQ or CA pressure-treated lumber rated for ground contact (UC4B).",
    "Pre-drill for anchor bolts before laying on foundation.",
    "Apply borate treatment to cut ends.",
  ],
  commonMistakes: [
    "Using non-PT lumber for sill plates — this will rot.",
    "Not using correct hardware rated for pressure-treated lumber (PT-compatible fasteners).",
  ],
  faqs: [
    { question: "What size lumber is used for sill plates?", answer: "Sill plates are typically 2x6 or 2x8 lumber, matching the wall framing width. Most modern homes use 2x6 for exterior walls to accommodate R-19 or R-21 insulation. Interior bearing walls on the foundation may use 2x4 sill plates." },
    { question: "How is a sill plate attached?", answer: "Sill plates are secured with 1/2-inch J-bolts embedded in the concrete foundation, tightened with a nut and washer. Holes are pre-drilled in the plate to align with the bolts. In seismic zones, hold-down hardware may also be required at specific intervals." },
    { question: "Does the sill plate need to be pressure treated?", answer: "Yes. The IRC requires that all wood in contact with concrete or masonry, or within 6 inches of exposed earth, must be preservative-treated or naturally durable species like redwood or cedar. Using untreated lumber will lead to rot within a few years." },
    { question: "How many sill plates do I need for my foundation?", answer: "Divide your total foundation perimeter by the board length you are purchasing. For a 160-foot perimeter using 16-foot boards, you need 10 boards. Add 10-15% for waste from cuts at corners and joints." },
    { question: "What type of pressure treatment is best for sill plates?", answer: "ACQ (Alkaline Copper Quaternary) and CA-B (Copper Azole) are the two most common residential treatments. Both provide excellent rot and insect protection. Make sure the lumber is rated for ground contact (UC4A or UC4B) and always use PT-compatible fasteners." },
    { question: "Can I use a steel sill plate instead of wood?", answer: "Yes, steel sill plates and composite sill plates are available and eliminate rot concerns entirely. However, they are more expensive and require specific fastening methods. Steel sill plates are most common in commercial construction but are gaining popularity in high-moisture residential applications." },
  ],
};

const concreteCalculator: CalculatorConfig = {
  fields: [
    { id: "length", label: "Length", unit: "ft", placeholder: "20" },
    { id: "width", label: "Width", unit: "ft", placeholder: "20" },
    { id: "depth", label: "Depth (Thickness)", unit: "in", defaultValue: 4, placeholder: "4" },
    {
      id: "type",
      label: "Project Type",
      type: "select",
      options: [
        { label: "Slab", value: "slab" },
        { label: "Footing", value: "footing" },
        { label: "Column", value: "column" },
      ],
    },
  ],
  calculate: (v) => {
    const r = calculateConcrete(v.length as number, v.width as number, v.depth as number);
    const results: ResultItem[] = [
      { label: r.label },
      { label: `${r.cubicYards} cubic yards (before waste)` },
      { label: `${r.cubicFeet} cubic feet total volume` },
      { label: `${r.bags60lb} bags of 60 lb concrete mix (small jobs)` },
      { label: `${r.bags80lb} bags of 80 lb concrete mix (small jobs)` },
    ];
    if (r.cubicYards > 1) {
      results.push({ label: "Tip: For jobs over 1 cubic yard, order ready-mix concrete delivery — it is faster, stronger, and more cost-effective than hand-mixing bags." });
    }
    return results;
  },
  disclaimer:
    "This estimate includes a 10% waste factor. Actual waste may vary based on site conditions, formwork accuracy, and placement method. Always confirm quantities with your ready-mix supplier.",
  howToUse: [
    "Measure the length and width of your project area in feet.",
    "Enter the depth (thickness) in inches — 4 inches is standard for slabs, 8–12 inches for footings.",
    "Select your project type (slab, footing, or column).",
    "Click Calculate to get cubic yards, bag counts, and ordering recommendations.",
  ],
  materialInfo:
    "Concrete is a mixture of Portland cement, sand, gravel (aggregate), and water that cures into a rock-hard building material. It is sold in two forms: bags of pre-mixed concrete and ready-mix delivered by truck. Pre-mixed bags come in 40 lb, 60 lb, and 80 lb sizes — the 60 lb bag yields about 0.45 cubic feet and the 80 lb bag yields about 0.6 cubic feet when mixed. For small jobs like fence posts or mailbox bases, bags are practical. For anything over 1 cubic yard, ready-mix delivery is far more efficient and produces a more consistent result.\n\nConcrete strength is measured in PSI (pounds per square inch) at 28 days of cure. The most common residential grades are 2,500 PSI for non-structural applications like sidewalks and patios, 3,000 PSI for standard residential foundations, driveways, and slabs, and 4,000 PSI for garage floors, structural footings, and areas subject to heavy loads or freeze-thaw cycles. Higher PSI mixes (4,500–5,000) are specified for commercial work or special applications.\n\nReady-mix concrete costs $125 to $175 per cubic yard delivered, depending on PSI rating, location, and order size. Most suppliers require a minimum order of 1 yard, and short-load fees apply for orders under 8–10 yards. Bagged concrete costs $4 to $6 per 80 lb bag at home centers, which works out to roughly $300 to $400 per cubic yard — significantly more expensive than ready-mix. Fiber mesh, rebar, and other reinforcement add $0.10 to $0.50 per square foot to the total cost.",
  nextSteps: [
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Concrete Column Calculator", href: "/calculators/foundation/concrete-column-calculator/" },
    { label: "Concrete Steps Calculator", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Build forms that are level, plumb, and securely braced before any concrete arrives.",
    "Dampen the subgrade with water before pouring to prevent the dry soil from pulling moisture out of the concrete too quickly.",
    "Pour and spread concrete as quickly as possible — ready-mix starts setting within 60 to 90 minutes depending on temperature.",
    "Use a vibrator or tap forms with a hammer to consolidate concrete and remove air pockets.",
    "Finish the surface with a bull float first, then wait for bleed water to evaporate before final troweling or brooming.",
    "Cure concrete for at least 7 days by keeping it moist with curing compound, plastic sheeting, or periodic water spraying.",
  ],
  commonMistakes: [
    "Adding too much water to the mix — this weakens the concrete and causes cracking. Target a 4-inch to 5-inch slump for most residential work.",
    "Not ordering enough concrete — always add 10% for waste, spillage, and over-excavation. Running short during a pour creates cold joints.",
    "Skipping reinforcement — use #4 rebar on 24-inch centers or 6x6 welded wire mesh for slabs over 4 inches thick.",
    "Pouring in extreme temperatures without precautions — below 40°F use heated water and insulating blankets; above 90°F use ice water and wind screens.",
    "Troweling too early while bleed water is still on the surface — this traps water, weakens the top layer, and leads to scaling and dusting.",
  ],
  faqs: [
    {
      question: "How much concrete do I need for a 10x10 slab?",
      answer: "A 10x10-foot slab at 4 inches thick requires about 1.2 cubic yards of concrete. With a 10% waste factor, order 1.4 cubic yards. This is right at the threshold where ready-mix delivery becomes more practical than hand-mixing bags.",
    },
    {
      question: "How many bags of concrete do I need?",
      answer: "An 80 lb bag of concrete yields 0.6 cubic feet when mixed. Divide your total cubic feet by 0.6 to get the number of 80 lb bags. For example, a 4x4-foot pad at 4 inches deep needs about 5.3 cubic feet, which is 9 bags of 80 lb mix. For 60 lb bags (0.45 cu ft each), you would need 12 bags for the same project.",
    },
    {
      question: "How many cubic yards of concrete for a driveway?",
      answer: "A typical two-car driveway (20 ft wide by 20 ft long at 4 inches thick) requires about 5 cubic yards of concrete. Add 10% waste for a total order of 5.5 cubic yards. For driveways, specify 4,000 PSI concrete with fiber mesh or welded wire reinforcement for durability.",
    },
    {
      question: "What is the difference between 3,000 and 4,000 PSI concrete?",
      answer: "The PSI rating indicates compressive strength at 28 days. 3,000 PSI is the standard for residential foundations, basement walls, and interior slabs. 4,000 PSI is stronger and more durable, recommended for driveways, garage floors, exterior slabs, and any area subject to heavy loads or freeze-thaw cycles. The cost difference is typically $5 to $15 per cubic yard.",
    },
    {
      question: "How much does a yard of concrete cost?",
      answer: "Ready-mix concrete costs $125 to $175 per cubic yard delivered, depending on PSI rating and location. Short-load fees of $25 to $75 per yard may apply for orders under 8 to 10 yards. Saturday delivery and after-hours pours carry additional surcharges. Bagged concrete costs roughly $300 to $400 per cubic yard, making it practical only for very small jobs.",
    },
    {
      question: "Can I pour concrete in the rain?",
      answer: "Light drizzle is generally acceptable if you can protect the fresh surface. Heavy rain can wash cement paste out of the mix, weaken the surface, and cause scaling. If rain is expected, have plastic sheeting ready to cover freshly poured concrete immediately. Never finish concrete with standing water on the surface.",
    },
    {
      question: "How thick should a concrete slab be?",
      answer: "Standard residential slabs (patios, walkways, shed pads) are 4 inches thick. Garage floors and driveways should be 4 to 6 inches thick. Footings for load-bearing walls are typically 8 to 12 inches thick and extend below the frost line. Always check local building codes for minimum thickness requirements in your area.",
    },
    {
      question: "Do I need rebar in a concrete slab?",
      answer: "For slabs 4 inches thick or more, reinforcement is recommended. Options include #4 rebar on 24-inch centers in both directions, 6x6 W1.4/W1.4 welded wire mesh, or fiber mesh mixed into the concrete. Rebar provides the best crack control for driveways, garage floors, and structural slabs. For non-structural patios and walkways, wire mesh or fiber is usually sufficient.",
    },
  ],
};

const concreteSlabCalculator: CalculatorConfig = {
  fields: [
    { id: "length", label: "Slab Length", unit: "ft", placeholder: "20" },
    { id: "width", label: "Slab Width", unit: "ft", placeholder: "20" },
    { id: "thickness", label: "Slab Thickness", unit: "in", defaultValue: 4, placeholder: "4" },
  ],
  calculate: (v) => {
    const r = calculateConcreteSlab(v.length as number, v.width as number, v.thickness as number);
    const results: ResultItem[] = [
      { label: `${r.cubicYardsWithWaste} cubic yards of concrete (includes 10% waste)` },
      { label: `${r.cubicYards} cubic yards (before waste)` },
      { label: `${r.bags60lb} bags of 60 lb concrete mix` },
      { label: `${r.bags80lb} bags of 80 lb concrete mix` },
    ];
    if (r.cubicYards > 1) {
      results.push({ label: "Tip: For slabs over 1 cubic yard, order ready-mix delivery — faster and more cost-effective than hand-mixing bags." });
    }
    return results;
  },
  disclaimer:
    "This estimate includes a 10% waste factor. Actual waste may vary based on subgrade preparation, formwork accuracy, and slab thickness variations. Always confirm quantities with your ready-mix supplier.",
  howToUse: [
    "Measure the length and width of your planned slab in feet.",
    "Enter the slab thickness in inches — 4 inches is standard for patios and walkways, 5–6 inches for driveways and garages.",
    "Click Calculate to get cubic yards needed, including a 10% waste factor.",
    "Use the bag count for small jobs or the cubic yard total to order ready-mix delivery.",
  ],
  materialInfo:
    "A concrete slab is a flat, horizontal surface poured directly on a prepared subgrade, used for patios, garage floors, driveways, basement floors, and shed pads. The standard residential slab thickness is 4 inches for pedestrian-only areas such as walkways and patios. Driveways and garage floors should be 4 to 6 inches thick to withstand vehicle loads, while commercial or heavy-equipment slabs may require 6 to 8 inches or more.\n\nProper subgrade preparation is critical for slab longevity. The ground must be compacted, level, and free of organic material. A 4-inch layer of compacted gravel (Class 5 or crushed limestone) provides drainage and a stable base. A 6-mil polyethylene vapor barrier is recommended between the gravel and the concrete to prevent moisture migration, especially for interior slabs in conditioned spaces.\n\nReinforcement options for slabs include 6x6 W1.4/W1.4 welded wire mesh, #4 rebar on 18 to 24-inch centers in both directions, or synthetic fiber mesh mixed into the concrete. Wire mesh and fiber control shrinkage cracking, while rebar provides structural reinforcement for heavy loads. Control joints (saw cuts or tooled joints) should be placed at intervals no greater than 2 to 3 times the slab thickness in feet — for a 4-inch slab, joints every 8 to 12 feet.\n\nConcrete for slabs is typically specified at 3,000 to 4,000 PSI with a 4-inch slump. Air-entrained concrete (5–7% air) is recommended in freeze-thaw climates. Ready-mix costs $125 to $175 per cubic yard delivered. An 80 lb bag of pre-mixed concrete yields 0.6 cubic feet and costs $4 to $6, making bagged concrete roughly $300 to $400 per cubic yard — practical only for very small pours under 0.5 cubic yards.",
  nextSteps: [
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
    { label: "Pressure Treated Sill Plate Calculator", href: "/calculators/foundation/sill-plate-calculator/" },
  ],
  installationTips: [
    "Compact the subgrade and add 4 inches of gravel base before pouring — this prevents settling and cracking.",
    "Set forms with stakes every 2 to 3 feet and check for level; oil the forms for easy removal.",
    "Place reinforcement (wire mesh or rebar) on chairs so it sits in the lower third of the slab, not on the ground.",
    "Pour concrete in one continuous operation to avoid cold joints — have enough help and equipment ready before the truck arrives.",
    "Finish with a bull float, then broom the surface for traction before applying curing compound.",
  ],
  commonMistakes: [
    "Skipping the gravel base — pouring directly on soil leads to uneven settling and cracking within the first year.",
    "Making the slab too thin — 3-inch slabs crack easily under any load; always pour at least 4 inches for residential use.",
    "Placing wire mesh directly on the ground instead of on chairs — reinforcement on the bottom does nothing; it must be in the lower third of the slab.",
    "Forgetting control joints — without joints every 8 to 12 feet, the slab will crack randomly as it shrinks during curing.",
    "Finishing the surface while bleed water is present — this traps water in the top layer and causes scaling and dusting.",
  ],
  faqs: [
    {
      question: "How much concrete do I need for a 10x10 slab?",
      answer: "A 10x10-foot slab at 4 inches thick requires 1.2 cubic yards of concrete. With 10% waste, order 1.4 cubic yards. At 6 inches thick (for a driveway), you need 1.9 cubic yards. This is the threshold where ready-mix delivery becomes more practical than mixing bags by hand.",
    },
    {
      question: "How thick should a concrete slab be?",
      answer: "Standard thickness is 4 inches for patios, walkways, and shed pads. Driveways should be 4 to 6 inches, and garage floors 4 to 6 inches with thickened edges at the perimeter. Slabs supporting heavy equipment or vehicles over 10,000 lbs may need 6 to 8 inches. Always check local building codes for minimum requirements.",
    },
    {
      question: "How much does a concrete slab cost?",
      answer: "Material cost for a concrete slab runs $3 to $6 per square foot for standard 4-inch thickness using ready-mix concrete. Installed cost (including labor, gravel base, forms, reinforcement, and finishing) ranges from $6 to $12 per square foot. A typical 20x20-foot patio slab costs $2,400 to $4,800 installed.",
    },
    {
      question: "Do I need rebar in a concrete slab?",
      answer: "For most residential slabs 4 inches thick, 6x6 welded wire mesh or fiber mesh provides adequate shrinkage crack control. Rebar (#4 on 24-inch centers both ways) is recommended for driveways, garage floors, and any slab subject to heavy loads or vehicle traffic. Rebar adds about $0.50 per square foot to the material cost.",
    },
    {
      question: "How many bags of concrete for a slab?",
      answer: "An 80 lb bag yields 0.6 cubic feet. For a 10x10 slab at 4 inches thick (33.3 cubic feet), you need about 56 bags of 80 lb mix. That is over 2 tons of concrete to mix by hand. For anything larger than a 4x4-foot pad, ready-mix delivery is strongly recommended.",
    },
    {
      question: "How long does a concrete slab take to cure?",
      answer: "Concrete reaches about 70% of its full strength in 7 days and full design strength at 28 days. You can walk on a slab after 24 to 48 hours, drive on a driveway after 7 days, and place heavy loads after 28 days. Keep the surface moist during the first 7 days for proper curing — use curing compound, plastic sheeting, or periodic water spraying.",
    },
  ],
};

const concreteFootingCalculator: CalculatorConfig = {
  fields: [
    { id: "length", label: "Footing Length", unit: "ft", placeholder: "40" },
    { id: "width", label: "Footing Width", unit: "ft", defaultValue: 1, placeholder: "1" },
    { id: "depth", label: "Footing Depth", unit: "ft", defaultValue: 1, placeholder: "1" },
  ],
  calculate: (v) => {
    const r = calculateConcreteFooting(v.length as number, v.width as number, v.depth as number);
    const results: ResultItem[] = [
      { label: `${r.cubicYardsWithWaste} cubic yards of concrete (includes 10% waste)` },
      { label: `${r.cubicYards} cubic yards (before waste)` },
      { label: `${r.bags60lb} bags of 60 lb concrete mix` },
      { label: `${r.bags80lb} bags of 80 lb concrete mix` },
    ];
    if (r.cubicYards > 1) {
      results.push({ label: "Tip: For footings over 1 cubic yard, order ready-mix delivery for a stronger, more consistent pour." });
    }
    return results;
  },
  disclaimer:
    "This estimate includes a 10% waste factor. Footing dimensions must meet local building code requirements for frost depth, width, and reinforcement. Always verify with your building department before pouring.",
  howToUse: [
    "Measure the total linear length of your footing in feet — for a perimeter footing, add up all sides.",
    "Enter the footing width in feet — typical continuous footings are 12 to 24 inches (1 to 2 ft) wide.",
    "Enter the footing depth in feet — common depths are 8 to 12 inches (0.67 to 1 ft) for shallow footings, deeper for frost line requirements.",
    "Click Calculate to get cubic yards, bag counts, and waste-adjusted totals.",
  ],
  materialInfo:
    "Concrete footings are the structural base that transfers building loads to the soil. They sit below grade and support foundation walls, columns, and posts. There are two main types: continuous (strip) footings that run along the length of a wall, and spread (pad) footings that support individual columns or posts.\n\nContinuous footings for residential construction are typically 12 to 24 inches wide and 8 to 12 inches deep, with the width being at least twice the thickness of the wall they support. For a standard 8-inch concrete block wall, the footing should be at least 16 inches wide and 8 inches deep. Spread footings for deck posts and columns are usually 24x24 inches or larger, depending on the load.\n\nThe bottom of the footing must extend below the local frost line to prevent frost heave — this ranges from 12 inches in the southern United States to 48 inches or more in northern states and Canada. Local building codes specify the exact frost depth for your area. Footings must bear on undisturbed or properly compacted soil with adequate bearing capacity, typically 1,500 to 2,000 PSF for residential construction.\n\nReinforcement for continuous footings consists of two #4 rebar bars running horizontally near the bottom of the footing, with vertical dowels extending up into the foundation wall at 48-inch intervals. Spread footings use a grid of #4 rebar on 12-inch centers in both directions. Footing concrete is specified at 3,000 to 3,500 PSI and should have a 4 to 5-inch slump for workability in the trench.\n\nReady-mix delivery is the standard method for footings. Costs run $125 to $175 per cubic yard. A typical 1,500 sq ft house perimeter (140 linear feet of 16-inch-wide by 8-inch-deep footing) requires approximately 3.5 cubic yards of concrete.",
  nextSteps: [
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Concrete Column Calculator", href: "/calculators/foundation/concrete-column-calculator/" },
    { label: "Anchor Bolt Calculator", href: "/calculators/foundation/anchor-bolt-calculator/" },
  ],
  installationTips: [
    "Dig the trench to the exact width and depth specified in your plans — over-excavation wastes concrete and money.",
    "Level the bottom of the trench with a hand tamper before pouring — an uneven footing base causes differential settling.",
    "Place rebar on chairs or brick fragments to maintain 3 inches of concrete cover below the steel.",
    "Install vertical rebar dowels every 4 feet to tie the footing to the foundation wall above.",
    "Do not pour footings on frozen ground or in standing water — both conditions prevent proper curing and reduce strength.",
  ],
  commonMistakes: [
    "Making footings too narrow — the footing width must be at least twice the wall thickness to properly spread the load to the soil.",
    "Not extending footings below the frost line — shallow footings in cold climates will heave and crack the foundation above.",
    "Over-excavating the trench and backfilling with loose soil — footings must bear on undisturbed or mechanically compacted earth.",
    "Omitting rebar in continuous footings — unreinforced footings crack at stress points and lose structural integrity.",
    "Pouring the foundation wall the same day as the footing — allow the footing to set for at least 24 hours before loading it with forms and wall concrete.",
  ],
  faqs: [
    {
      question: "How wide should a concrete footing be?",
      answer: "The footing width should be at least twice the wall thickness it supports. For a standard 8-inch block wall, use a 16-inch-wide footing. For a 10-inch poured wall, use a 20-inch footing. In poor soil conditions, engineers may specify wider footings (24 to 36 inches) to reduce bearing pressure on the soil.",
    },
    {
      question: "How deep do footings need to be?",
      answer: "Footing depth depends on two factors: structural requirements and frost line depth. The footing itself is typically 8 to 12 inches thick. But the bottom of the footing must be below the frost line — 12 inches in southern states, 36 to 48 inches in northern states. Check your local building code for the exact frost depth requirement.",
    },
    {
      question: "How much concrete for a house footing?",
      answer: "A typical 1,500 sq ft house with a 140-foot perimeter using 16-inch-wide by 8-inch-deep continuous footings requires about 3.5 cubic yards of concrete. With 10% waste, order 3.9 cubic yards. Add extra for any interior bearing wall footings, column pads, or stepped footings on sloped sites.",
    },
    {
      question: "Do footings need rebar?",
      answer: "Yes. Most building codes require at least two #4 rebar bars running continuously near the bottom of strip footings, with 6-inch minimum overlap at splices. Spread footings need a grid of #4 rebar on 12-inch centers. Rebar prevents cracking from soil settlement and provides tensile strength the concrete alone cannot offer.",
    },
    {
      question: "Can I pour a footing and foundation wall at the same time?",
      answer: "Monolithic pours (footing and wall together) are sometimes done for shallow frost-protected foundations, but for standard construction, the footing is poured first and the wall forms are set on top after the footing cures for at least 24 hours. This ensures a level base for the wall forms and proper rebar lap connections.",
    },
    {
      question: "What PSI concrete should I use for footings?",
      answer: "Standard residential footings use 3,000 PSI concrete, which provides adequate compressive strength for most soil conditions. In areas with high water tables, aggressive soil (high sulfate content), or heavy structural loads, specify 3,500 to 4,000 PSI with sulfate-resistant Type V cement. The cost difference is typically $10 to $20 per cubic yard.",
    },
  ],
};

const concreteColumnCalculator: CalculatorConfig = {
  fields: [
    {
      id: "diameter",
      label: "Column Diameter",
      type: "select",
      options: [
        { label: "8 inches", value: "8" },
        { label: "10 inches", value: "10" },
        { label: "12 inches", value: "12" },
      ],
      defaultValue: "12",
    },
    { id: "height", label: "Column Height", unit: "ft", placeholder: "4" },
    { id: "quantity", label: "Number of Columns", unit: "", defaultValue: 4, placeholder: "4" },
  ],
  calculate: (v) => {
    const diameter = parseInt(v.diameter as string);
    const r = calculateConcreteColumn(diameter, v.height as number, v.quantity as number);
    const results: ResultItem[] = [
      { label: `${r.totalCubicYardsWithWaste} cubic yards total (includes 10% waste)` },
      { label: `${r.cubicYardsPerColumn} cubic yards per column` },
      { label: `${r.totalCubicYards} cubic yards total (before waste)` },
      { label: `${r.bags60lb} bags of 60 lb concrete mix (total)` },
      { label: `${r.bags80lb} bags of 80 lb concrete mix (total)` },
    ];
    return results;
  },
  disclaimer:
    "This estimate includes a 10% waste factor. Column depth must meet local code requirements for frost line and bearing capacity. Verify Sonotube sizes and reinforcement with your building plans.",
  howToUse: [
    "Select the column diameter — 8-inch for light loads (deck railings), 10-inch for standard deck posts, 12-inch for heavy structural loads.",
    "Enter the column height in feet — measure from the bottom of the footing to the top of the pier.",
    "Enter the number of columns or Sonotubes you need to fill.",
    "Click Calculate to get cubic yards per column, total concrete, and bag counts.",
  ],
  materialInfo:
    "Concrete columns (also called piers, pilings, or Sonotube columns) are cylindrical concrete supports used for deck footings, post foundations, porch supports, and light structural piers. They are formed using Sonotube cardboard forms — rigid cylindrical tubes that are set in the ground, filled with concrete, and stripped away after curing.\n\nCommon Sonotube diameters for residential work are 8 inches (light loads such as railings and small sheds), 10 inches (standard deck posts and moderate loads), and 12 inches (heavy deck beams, porch columns, and structural piers). Larger sizes (14, 16, 18, and 24 inches) are available for commercial and heavy structural applications.\n\nColumn depth must extend below the frost line — this is the most critical requirement. In northern climates, this means 36 to 48 inches deep. The column sits on a footing pad at the bottom, which can be a pre-formed base or a widened section of concrete poured before the column. Some codes require a \"bell\" at the bottom of the column — a wider flared section that increases bearing area.\n\nReinforcement for concrete columns typically consists of one or two #4 rebar bars run vertically through the center of the column, with a J-bolt or post anchor bracket set into the top while the concrete is still wet. The rebar extends from 3 inches above the footing pad to 2 inches below the top of the column.\n\nSonotube forms cost $8 to $25 each for 8 to 12-foot lengths in standard residential diameters. The concrete itself is best mixed from 80 lb bags for column work — each bag fills approximately 0.6 cubic feet. A 12-inch diameter column at 4 feet deep uses about 3.1 cubic feet (roughly 5 bags of 80 lb mix).",
  nextSteps: [
    { label: "Concrete Footing Calculator", href: "/calculators/foundation/concrete-footing-calculator/" },
    { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator/" },
  ],
  installationTips: [
    "Dig the hole 4 to 6 inches wider than the Sonotube to allow for backfill and plumbing the tube.",
    "Set the tube on a flat footing base (pre-poured pad or compacted gravel) and brace it perfectly plumb with 2x4 kickers.",
    "Fill the tube in 12-inch lifts, rodding or vibrating each lift to eliminate air pockets.",
    "Set the post anchor bracket or J-bolt into the wet concrete at the correct position before it sets.",
    "Backfill around the tube only after the concrete has cured for at least 24 hours to avoid shifting.",
  ],
  commonMistakes: [
    "Not extending columns below the frost line — shallow piers heave in winter and can lift or shift the structure above.",
    "Failing to plumb the Sonotube before filling — a crooked column causes misaligned framing and structural problems.",
    "Pouring all the concrete at once without rodding — this traps air bubbles that weaken the column, especially at the bottom.",
    "Forgetting to install the post bracket or J-bolt before the concrete sets — drilling into cured concrete is difficult and compromises the column.",
    "Using a column diameter that is too small for the load — always check load tables; an 8-inch pier carries far less than a 12-inch pier.",
  ],
  faqs: [
    {
      question: "How much concrete for a Sonotube?",
      answer: "A 12-inch diameter Sonotube at 4 feet deep requires about 3.1 cubic feet or 0.12 cubic yards of concrete — roughly 5 bags of 80 lb mix. A 10-inch tube at 4 feet needs 2.2 cubic feet (4 bags), and an 8-inch tube at 4 feet needs 1.4 cubic feet (3 bags). Always add 10% for waste.",
    },
    {
      question: "What size Sonotube do I need for a deck?",
      answer: "For most residential decks, 10 or 12-inch diameter Sonotubes are standard. A 12-inch pier can support 4,000 to 6,000 lbs on typical soil, which is sufficient for most deck beam loads. Use 8-inch tubes only for very light applications like small landing pads or railing posts.",
    },
    {
      question: "How deep should deck pier footings be?",
      answer: "Deck piers must extend below the local frost line — 12 inches in the deep South, 36 inches in the Mid-Atlantic, and 42 to 48 inches in the northern US and Canada. Check your local building code for the exact depth. The pier should also sit on undisturbed soil or a compacted gravel pad.",
    },
    {
      question: "Do concrete columns need rebar?",
      answer: "Most building codes require at least one #4 vertical rebar in each column for piers supporting structural loads. For columns over 12 inches in diameter or over 4 feet deep, two vertical bars are recommended. The rebar provides tensile strength and prevents the column from cracking under lateral forces from frost heave or wind loads.",
    },
    {
      question: "How many bags of concrete for a 12-inch Sonotube?",
      answer: "A 12-inch Sonotube uses about 0.79 cubic feet of concrete per linear foot of height. At 4 feet deep, that is 3.1 cubic feet — approximately 5 bags of 80 lb mix or 7 bags of 60 lb mix. For 10 piers at 4 feet deep, you need about 52 bags of 80 lb concrete.",
    },
    {
      question: "Can I mix concrete in a Sonotube?",
      answer: "No — never mix concrete inside the tube. Mix the concrete in a wheelbarrow, mixing tub, or portable mixer, then shovel or pour it into the Sonotube in 12-inch lifts. Rod or vibrate each lift to remove air pockets. For large numbers of piers, renting a towable mixer saves significant time and labor.",
    },
  ],
};

const concreteStepsCalculator: CalculatorConfig = {
  fields: [
    { id: "width", label: "Stair Width", unit: "ft", placeholder: "4" },
    { id: "rise", label: "Step Rise (Height)", unit: "in", defaultValue: 7, placeholder: "7" },
    { id: "run", label: "Step Run (Depth)", unit: "in", defaultValue: 11, placeholder: "11" },
    { id: "steps", label: "Number of Steps", unit: "", defaultValue: 4, placeholder: "4" },
  ],
  calculate: (v) => {
    const r = calculateConcreteSteps(v.width as number, v.rise as number, v.run as number, v.steps as number);
    const results: ResultItem[] = [
      { label: `${r.cubicYardsWithWaste} cubic yards of concrete (includes 10% waste)` },
      { label: `${r.cubicYards} cubic yards (before waste)` },
      { label: `${r.bags60lb} bags of 60 lb concrete mix` },
      { label: `${r.bags80lb} bags of 80 lb concrete mix` },
    ];
    if (r.cubicYards > 1) {
      results.push({ label: "Tip: For stair pours over 1 cubic yard, consider ready-mix delivery — concrete steps must be poured in one continuous operation." });
    }
    return results;
  },
  disclaimer:
    "This estimate includes a 10% waste factor and a 3-foot landing slab at 4 inches thick. Step dimensions must comply with local building codes for rise, run, and width. Always verify requirements with your building department.",
  howToUse: [
    "Enter the stair width in feet — building codes typically require at least 36 inches (3 ft) for residential entry stairs.",
    "Enter the step rise (height) in inches — standard residential rise is 7 to 7.75 inches.",
    "Enter the step run (tread depth) in inches — standard is 10 to 11 inches.",
    "Enter the total number of steps and click Calculate for cubic yards and bag counts.",
  ],
  materialInfo:
    "Concrete steps (also called concrete stairs or stoops) are solid, poured-in-place structures built at building entries, between grade changes, and for basement access. Unlike wood or prefabricated steps, poured concrete stairs are a monolithic mass of concrete that includes the treads, risers, and the solid fill underneath.\n\nBuilding codes govern the dimensions of concrete steps for safety. The International Residential Code (IRC) requires a maximum rise of 7.75 inches and a minimum run (tread depth) of 10 inches. All risers in a flight must be uniform within 3/8 inch, and all treads must be uniform within 3/8 inch. The minimum stair width is 36 inches, though 48 inches is more comfortable for entry stairs. Handrails are required for flights of 4 or more risers.\n\nConcrete steps are formed using plywood or lumber forms built to the exact profile of the staircase. The forms must be heavily braced because wet concrete exerts significant pressure — a 4-foot-wide stair with 5 steps can weigh over 2,000 lbs. The concrete is poured from the bottom step up, with each step screeded and troweled before moving to the next.\n\nReinforcement for concrete steps includes #4 rebar run horizontally through the mass at 12 to 18-inch intervals, with vertical bars tying the steps to the landing and foundation. Wire mesh in each tread helps control surface cracking. The concrete specification is typically 4,000 PSI air-entrained mix for freeze-thaw durability, with a 4-inch slump for workability in the forms.\n\nPoured concrete steps cost $300 to $500 per linear foot of width installed, including forming, reinforcement, pouring, and finishing. A standard 4-foot-wide, 4-step entry stoop costs $1,200 to $2,000 installed. Pre-cast concrete steps are an alternative at $200 to $400 per step but lack the custom sizing and monolithic strength of poured steps.",
  nextSteps: [
    { label: "Concrete Slab Calculator", href: "/calculators/foundation/concrete-slab-calculator/" },
    { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Build forms from 3/4-inch plywood, heavily braced with 2x4s — wet concrete is extremely heavy and will blow out weak forms.",
    "Pour from the bottom step upward, filling and finishing each step before moving to the next.",
    "Screed each tread flat, then broom the surface for slip resistance — smooth-troweled concrete steps are dangerously slippery when wet.",
    "Install a non-slip nosing strip or broom-finish the tread edges for additional traction.",
    "Tie the steps into the building foundation with rebar dowels to prevent the stoop from settling away from the house.",
  ],
  commonMistakes: [
    "Making risers different heights — uneven risers are a tripping hazard and a code violation; all risers must be within 3/8 inch of each other.",
    "Forgetting to slope the treads — each tread should slope 1/8 inch per foot away from the building for water drainage.",
    "Under-bracing the forms — wet concrete weighs 150 lbs per cubic foot and will burst weak forms, ruining the pour.",
    "Not tying steps to the foundation — without rebar dowels, the stoop will eventually settle and pull away from the house.",
    "Smooth-troweling the treads — this creates an ice-rink surface when wet; always broom-finish or add non-slip aggregate to step surfaces.",
  ],
  faqs: [
    {
      question: "How much concrete do I need for steps?",
      answer: "A typical 4-foot-wide, 4-step entry stoop with 7-inch risers and 11-inch treads requires about 0.7 cubic yards of concrete including the landing slab. With 10% waste, order 0.8 cubic yards. For 3 steps, expect about 0.5 cubic yards. The exact amount depends on the total height and whether the stairs include a landing pad.",
    },
    {
      question: "What is the standard rise and run for concrete steps?",
      answer: "The IRC building code specifies a maximum rise (step height) of 7.75 inches and a minimum run (tread depth) of 10 inches. The most comfortable dimensions are a 7-inch rise with an 11-inch run. All risers must be within 3/8 inch of each other, and all treads must be within 3/8 inch of each other for safety.",
    },
    {
      question: "How much do concrete steps cost?",
      answer: "Poured concrete steps cost $300 to $500 per linear foot of width installed. A standard 4-foot-wide, 4-step entry stoop costs $1,200 to $2,000 including forming, reinforcement, concrete, and finishing. Pre-cast concrete steps are cheaper ($200 to $400 per step) but cannot be customized to fit the exact dimensions of your entry.",
    },
    {
      question: "Do concrete steps need rebar?",
      answer: "Yes. Concrete steps should have #4 rebar running horizontally through the mass at 12 to 18-inch vertical intervals, with vertical bars tying the stairs to the landing and foundation. Without reinforcement, the steps will crack and separate over time, especially in freeze-thaw climates.",
    },
    {
      question: "Can I pour concrete steps myself?",
      answer: "Pouring concrete steps is an advanced DIY project. The forming is complex, the concrete is heavy (a 4-foot stoop can weigh over 2,000 lbs), and the pour must be completed in one operation. You need strong forms, adequate bracing, and at least two helpers. For a first-time project, consider pre-cast steps or hiring a concrete contractor.",
    },
    {
      question: "How long do concrete steps last?",
      answer: "Properly built and maintained concrete steps last 50 to 100 years. The most common maintenance issue is surface scaling from freeze-thaw damage, which can be prevented by using air-entrained concrete, applying a penetrating sealer every 2 to 3 years, and avoiding deicing salts (use sand for traction instead).",
    },
  ],
};

// ─── FLOOR FRAMING ───────────────────────────────────────────────────────────

const rimJoistCalculator: CalculatorConfig = {
  fields: [
    { id: "perimeter", label: "Floor Perimeter", unit: "ft", placeholder: "120" },
    { id: "boardLength", label: "Board Length", unit: "ft", defaultValue: 8 },
  ],
  calculate: (v) => {
    const r = calculateRimJoists(v.perimeter as number, v.boardLength as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure your floor frame perimeter in feet.",
    "Enter the board length you'll be using.",
    "Click Calculate for your rim joist count.",
  ],
  materialInfo:
    "Rim joists (also called band joists or header joists) are the perimeter boards that cap the ends of the floor joists, forming the outer edge of the floor frame. They must match the depth of the floor joists, so a floor built with 2x10 joists uses 2x10 rim joists. Common sizes are 2x8, 2x10, and 2x12 in standard dimensional lumber, though engineered I-joists often require a specific engineered rim board (such as 1-1/8-inch LVL rim board). Rim joists serve three critical functions: they transfer vertical loads to the foundation or wall below, provide lateral bracing for the floor joists, and close off the floor cavity from outside air and pests. Because rim joists are a major source of heat loss, many energy codes now require insulation in the rim joist cavity. Costs range from $6 to $20 per board depending on lumber dimension and length.",
  nextSteps: [
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "OSB Panel Calculator", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Install rim joists flush with the top of floor joists.",
    "Nail through the rim joist into each floor joist end.",
    "Consider insulating rim joists — they are a significant heat loss area.",
  ],
  commonMistakes: [
    "Not blocking or insulating the rim joist cavity in conditioned spaces.",
    "Using the wrong lumber dimension — match your floor joist depth.",
  ],
  faqs: [
    { question: "What is the difference between a rim joist and a band joist?", answer: "They are the same thing — the term varies by region. Both refer to the perimeter board that caps the ends of the floor joists. Some regions also call it a header joist, though this should not be confused with window or door headers." },
    { question: "Should rim joists be insulated?", answer: "Yes. Rim joists are a major thermal bridge and can account for up to 15% of a home's total heat loss. The most effective method is cutting rigid foam (XPS or polyiso) to fit snugly in each bay and sealing the edges with spray foam or caulk." },
    { question: "What size rim joist do I need?", answer: "The rim joist must match the depth of your floor joists. If you are using 2x10 floor joists, you need 2x10 rim joists. For engineered I-joist floors, use the manufacturer-specified engineered rim board, which is typically 1-1/8 inches thick." },
    { question: "How many rim joist boards do I need?", answer: "Divide your total floor perimeter by the board length you are using (8, 12, or 16 feet). For a 30x40 ft house with a 140-foot perimeter using 16-foot boards, you need 9 boards plus 10-15% waste for cuts at corners." },
    { question: "Do rim joists need to be pressure treated?", answer: "Only if the rim joist sits directly on a concrete or masonry foundation. If the rim joist sits on top of a pressure-treated sill plate (the normal configuration), standard untreated lumber is fine." },
    { question: "How do I attach rim joists to floor joists?", answer: "Nail through the rim joist into the end grain of each floor joist using three 16d nails per connection. Also toenail or use metal connectors to attach the rim joist to the sill plate below. In high-wind or seismic zones, metal framing clips may be required." },
  ],
};

const floorJoistCalculator: CalculatorConfig = {
  fields: [
    { id: "roomWidth", label: "Room Width", unit: "ft", placeholder: "24" },
    {
      id: "spacing",
      label: "Joist Spacing",
      type: "select",
      options: [
        { label: "16\" on center", value: "16" },
        { label: "24\" on center", value: "24" },
      ],
      defaultValue: "16",
    },
  ],
  calculate: (v) => {
    const spacing = parseInt(v.spacing as string) as 16 | 24;
    const r = calculateFloorJoists(v.roomWidth as number, spacing);
    return [{ label: r.label }];
  },
  disclaimer: "Order 2–3 extra joists for waste and damage.",
  howToUse: [
    "Enter the total room width perpendicular to joist direction.",
    "Choose your on-center spacing (16\" is standard for living spaces).",
    "Click Calculate.",
  ],
  materialInfo:
    "Floor joists are the horizontal structural members that span between bearing walls or beams to support the subfloor and all live and dead loads above. Standard dimensional lumber sizes are 2x8 (spans up to 12 feet), 2x10 (up to 15 feet), and 2x12 (up to 18 feet) at 16-inch on-center spacing, though exact spans depend on species, grade, and load requirements. Engineered options include LVL (laminated veneer lumber) joists for heavy loads or long spans, and I-joists (TJI) for consistent depth and lightweight handling. I-joists are available in depths from 9.5 to 16 inches and can span over 20 feet. Floor joists are typically spaced 16 inches on center for standard residential construction, providing a stiff, bounce-free floor. The 24-inch spacing is acceptable with thicker subfloor but produces a less rigid floor. Dimensional lumber joists cost $8 to $25 each depending on size, while I-joists run $3 to $6 per linear foot.",
  nextSteps: [
    { label: "Rim Joist Calculator", href: "/calculators/floor-framing/rim-joist-calculator/" },
    { label: "Bridging Calculator", href: "/calculators/floor-framing/bridging-calculator/" },
    { label: "Joist Hanger Calculator", href: "/calculators/hardware/joist-hanger-calculator/" },
  ],
  installationTips: [
    "Crown all joists the same way (crown up) for a flat floor.",
    "Use joist hangers at beam connections.",
    "Block joists at bearing points.",
  ],
  commonMistakes: [
    "Not crowning joists consistently — causes uneven floors.",
    "Under-sizing joists for the span — always check span tables.",
    "Forgetting to add the extra joist at the start.",
  ],
  faqs: [
    { question: "Should I use 16\" or 24\" floor joist spacing?", answer: "16-inch on-center spacing is standard for most residential floors and produces a noticeably stiffer, higher-quality floor feel. 24-inch spacing is acceptable with thicker subfloor (7/8 inch or 1 inch) and saves on material, but may feel bouncy underfoot, especially with tile or stone flooring." },
    { question: "What size floor joists do I need?", answer: "Joist size depends on the unsupported span and the loads. A 2x8 spans about 12 feet, a 2x10 about 15 feet, and a 2x12 about 17 to 18 feet at 16-inch spacing with standard residential loads. Always verify with your local span tables and building department, as species, grade, and snow/live loads affect sizing." },
    { question: "How many floor joists do I need for a room?", answer: "Divide the room width (in inches) by the joist spacing (16 or 24 inches) and add one for the starter. For a 24-foot-wide room at 16-inch spacing: (24x12)/16 + 1 = 19 joists. Order 2 to 3 extra for waste and damaged boards." },
    { question: "What is the difference between dimensional lumber joists and I-joists?", answer: "Dimensional lumber joists (2x8, 2x10, 2x12) are solid sawn wood and are heavier but simple to work with. Engineered I-joists are lighter, more consistent, and can span longer distances without intermediate support. I-joists are more expensive per foot but save labor and material on larger floor systems." },
    { question: "Do floor joists need blocking or bridging?", answer: "Yes. Most building codes require blocking or cross-bridging at mid-span intervals for floor joists with spans over 8 feet. Blocking prevents the joists from twisting under load and stiffens the overall floor system. It is also required at bearing points and where plumbing or HVAC penetrations occur." },
    { question: "How much do floor joists cost?", answer: "Dimensional lumber floor joists cost $8 to $25 each depending on size and length. A 2x10x12 typically costs $12 to $18. Engineered I-joists run $3 to $6 per linear foot. For a typical 1,500 sq ft floor system, expect to spend $800 to $2,000 on joists alone before labor." },
  ],
};

const bridgingCalculator: CalculatorConfig = {
  fields: [
    { id: "joistSpan", label: "Joist Span", unit: "ft", placeholder: "16" },
  ],
  calculate: (v) => {
    const r = calculateBridging(v.joistSpan as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter the unsupported joist span in feet.",
    "Click Calculate — bridging is required every 8 feet of span.",
  ],
  materialInfo:
    "Bridging (also called blocking or cross-bridging) consists of short pieces of lumber or metal straps installed between floor joists to prevent twisting, distribute concentrated loads, and stiffen the overall floor system. There are three main types: solid blocking uses the same dimension lumber as the joists cut to fit snugly between them; wood cross-bridging uses 1x3 or 2x2 boards installed in an X pattern; and metal cross-bridging uses pre-formed steel straps. Solid blocking is the most common in modern construction because it also serves as a fire block and provides a nailing surface for pipes, ducts, and subfloor edges. The IRC requires bridging at mid-span for joists exceeding 8 feet of unsupported span, with additional rows at 8-foot intervals for longer spans. Metal cross-bridging costs about $1 to $2 per pair, while solid blocking uses offcut lumber and costs only the labor.",
  nextSteps: [
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Subfloor Adhesive Calculator", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
  ],
  installationTips: [
    "Install solid blocking or metal cross-bridging.",
    "Stagger blocking for easier nailing access.",
    "Nail both top and bottom flanges of cross-bridging.",
  ],
  commonMistakes: [
    "Installing bridging before subfloor is down — nail the top only, wait until subfloor is on to nail the bottom.",
    "Using undersized blocking for the joist depth.",
  ],
  faqs: [
    { question: "Is bridging required by code?", answer: "Yes. Most building codes based on the IRC require blocking or cross-bridging for floor joists with spans exceeding 8 feet, installed at mid-span. For joists spanning 16 feet or more, two rows of bridging are typically required at the one-third points." },
    { question: "Solid blocking vs. cross-bridging — which is better?", answer: "Solid blocking is generally preferred by builders because it provides superior lateral support, doubles as a fire block, and gives a solid nailing surface for plumbing straps and conduit. Cross-bridging is faster to install but does not provide a nailing surface or fire blocking." },
    { question: "How do I install solid blocking between floor joists?", answer: "Cut pieces of joist-depth lumber to fit snugly between the joists. Stagger them slightly (offset by 1.5 inches) so you can face-nail through the joist into the end of each block with two 16d nails. Staggering eliminates the need for toenailing." },
    { question: "Do I need bridging for engineered I-joists?", answer: "Yes, but the requirements differ from dimensional lumber. I-joist manufacturers typically require blocking panels at bearing points and may require squash blocks or web stiffeners. Always follow the manufacturer's installation guide for your specific I-joist product." },
    { question: "How many rows of bridging do I need?", answer: "One row at mid-span for joists spanning 8 to 14 feet. Two rows at the one-third span points for joists spanning 14 to 21 feet. Three rows for spans over 21 feet. These are general guidelines — always verify with your local code and joist span tables." },
    { question: "Can I use metal cross-bridging instead of solid blocking?", answer: "Yes, metal cross-bridging is code-compliant and available in standard sizes for 16-inch and 24-inch joist spacing. Install them in an X pattern with the top flange nailed before the subfloor goes down and the bottom flange nailed after the subfloor is installed to prevent squeaks." },
  ],
};

const subfloorAdhesiveCalculator: CalculatorConfig = {
  fields: [
    { id: "floorArea", label: "Floor Area", unit: "sq ft", placeholder: "800" },
    { id: "tubeCoverage", label: "Coverage per Tube", unit: "sq ft", defaultValue: 50 },
  ],
  calculate: (v) => {
    const r = calculateSubfloorAdhesive(v.floorArea as number, v.tubeCoverage as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure your total floor area in square feet.",
    "Enter coverage per tube (check manufacturer label; 50 sq ft is typical).",
    "Click Calculate.",
  ],
  materialInfo:
    "Subfloor adhesive is a construction-grade polyurethane or solvent-based adhesive applied to the top of floor joists before laying subfloor panels. Popular brands include PL Premium, Loctite PL 400, and Liquid Nails Subfloor & Deck. The adhesive creates a permanent bond between the joist and the panel that eliminates floor squeaks caused by nail pops and panel movement. Applied in a continuous 1/4-inch bead along each joist, one 28-oz tube typically covers 40 to 50 square feet of floor area. Polyurethane-based adhesives (PL Premium) offer the strongest bond and are waterproof, while solvent-based adhesives are less expensive and cure faster. Cold-weather formulations are available for winter construction when temperatures drop below 40 degrees F. Expect to pay $4 to $8 per tube, and a standard 800 sq ft floor requires 16 to 20 tubes.",
  nextSteps: [
    { label: "OSB Panel Calculator", href: "/calculators/floor-framing/osb-panel-calculator/" },
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
  ],
  installationTips: [
    "Apply a continuous bead — do not dot the adhesive.",
    "Work in sections and lay panels before adhesive skins over.",
    "Use a caulk gun with a 1/4\" nozzle.",
  ],
  commonMistakes: [
    "Skipping adhesive to save time — squeaky floors are hard to fix after the fact.",
    "Applying adhesive on wet or frozen joists.",
  ],
  faqs: [
    { question: "Can I skip subfloor adhesive?", answer: "Technically yes if you use screws instead of nails, but adhesive dramatically reduces floor squeaks and increases overall floor stiffness by up to 70%. Most professional builders use both adhesive and ring-shank nails or screws for the best result." },
    { question: "What type of subfloor adhesive should I use?", answer: "Polyurethane-based adhesives like PL Premium provide the strongest, most waterproof bond and are the top choice for most builders. Solvent-based options like PL 400 are less expensive and cure faster but are not waterproof. Avoid general-purpose construction adhesive — use one specifically rated for subfloor applications." },
    { question: "How many tubes of subfloor adhesive do I need?", answer: "One 28-oz tube covers approximately 40 to 50 square feet of floor area when applied as a continuous 1/4-inch bead on each joist. For a 1,000 sq ft floor, plan on 20 to 25 tubes. Always buy a few extra in case of waste or cold-weather thickening." },
    { question: "Can I use subfloor adhesive in cold weather?", answer: "Standard subfloor adhesive becomes thick and difficult to apply below 40 degrees F. Use a cold-weather formulation (available from most major brands) or warm the tubes indoors before use. Never apply adhesive to frozen or frost-covered joists, as the bond will fail." },
    { question: "Does subfloor adhesive really prevent squeaky floors?", answer: "Yes. Floor squeaks are caused by the subfloor panel rubbing against the nail or joist as it moves under foot traffic. Adhesive locks the panel to the joist, eliminating this movement. Studies show glued-and-nailed floors are significantly stiffer and quieter than nailed-only floors." },
    { question: "Should I use adhesive with screws or nails?", answer: "Both combinations work well. Adhesive with ring-shank nails is the most common approach in production building because pneumatic nailing is fast. Adhesive with screws provides even better holding power and is preferred for remodeling work or floors that need to be exceptionally squeak-free." },
  ],
};

const osbPanelCalculator: CalculatorConfig = {
  fields: [
    { id: "floorArea", label: "Floor Area", unit: "sq ft", placeholder: "800" },
  ],
  calculate: (v) => {
    const r = calculateOSBPanels(v.floorArea as number);
    return [
      { label: r.label },
      { label: `${Math.ceil(v.floorArea as number / 32 * 1.1)} OSB panels with 10% waste factor` },
    ];
  },
  disclaimer: "Add 10% for waste. Standard 4x8 OSB = 32 sq ft per sheet.",
  howToUse: [
    "Measure total floor area in square feet (length × width).",
    "Click Calculate — each 4x8 panel covers 32 sq ft.",
  ],
  materialInfo:
    "OSB (Oriented Strand Board) subfloor panels are the standard structural subfloor material in modern residential construction. Standard panels are 4x8 feet (32 sq ft each) with tongue-and-groove edges for a tight, squeak-free fit. The most common thickness is 23/32 inch (marketed as 3/4 inch) for 16-inch joist spacing, while 7/8-inch or 1-inch panels are used for 24-inch spacing or heavy loads like tile and stone. Premium brands like AdvanTech offer superior moisture resistance and a 500-day no-sand guarantee. Standard OSB subfloor costs $25 to $35 per sheet, while premium moisture-resistant panels run $35 to $50. CDX plywood is an alternative that handles moisture better than standard OSB but costs more. Always use panels rated Exposure 1 or better, as subfloor panels may be exposed to weather during construction. Panels carry a span rating printed on the grade stamp indicating maximum joist spacing.",
  nextSteps: [
    { label: "Subfloor Adhesive Calculator", href: "/calculators/floor-framing/subfloor-adhesive-calculator/" },
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Bottom Plate Calculator", href: "/calculators/wall-framing/bottom-plate-calculator/" },
  ],
  installationTips: [
    "Install panels with the long edge perpendicular to joists.",
    "Stagger end joints for structural continuity.",
    "Leave 1/8\" expansion gaps at all edges.",
    "Use ring-shank nails or screws every 6\" on edges, 12\" in field.",
  ],
  commonMistakes: [
    "Running panels parallel to joists — always perpendicular.",
    "Skipping the expansion gap — panels will buckle in humid conditions.",
    "Not staggering end joints.",
  ],
  faqs: [
    { question: "OSB vs plywood for subfloor — which is better?", answer: "Both are code-compliant and perform well. Standard OSB is 20-30% less expensive than plywood. Plywood handles moisture better and recovers its shape after getting wet, while standard OSB can swell permanently at the edges. Premium OSB like AdvanTech bridges this gap with excellent moisture resistance at a price between standard OSB and plywood." },
    { question: "What thickness subfloor do I need?", answer: "Use 23/32-inch (3/4 inch) panels for 16-inch on-center joist spacing, which is the most common residential configuration. For 24-inch spacing, step up to 7/8-inch or 1-inch panels to prevent deflection and bounce. If installing tile or stone flooring, use the thicker panels regardless of joist spacing." },
    { question: "How many OSB panels do I need for my floor?", answer: "Divide your total floor area in square feet by 32 (the area of one 4x8 panel) and add 10% for waste from cuts and edges. A 1,200 sq ft floor needs about 38 panels net, or 42 panels with waste. Order full sheets — partial panels from cuts can often be used for closets and small areas." },
    { question: "Do I need tongue-and-groove subfloor panels?", answer: "Tongue-and-groove (T&G) edges are strongly recommended for subfloor panels. The interlocking edges eliminate differential deflection between panels, reducing squeaks and creating a stiffer floor. Most builders consider T&G panels standard practice even though square-edge panels are technically code-compliant." },
    { question: "How do I install OSB subfloor panels?", answer: "Lay panels with the long edge perpendicular to the floor joists, stagger end joints by at least one joist bay between rows, and leave 1/8-inch expansion gaps at all edges. Apply subfloor adhesive to the joists, set the panel, and fasten with ring-shank nails or screws every 6 inches on edges and 12 inches in the field." },
    { question: "Can OSB subfloor get wet during construction?", answer: "Exposure 1-rated OSB can handle brief weather exposure during construction, but standing water should be swept off promptly. Standard OSB edges swell when saturated and do not return to their original thickness. If extended rain exposure is expected, use AdvanTech or CDX plywood, which handle moisture significantly better." },
  ],
};

// ─── WALL FRAMING ─────────────────────────────────────────────────────────────

const studCalculator: CalculatorConfig = {
  fields: [
    { id: "wallLength", label: "Total Wall Length", unit: "ft", placeholder: "100" },
    {
      id: "spacing",
      label: "Stud Spacing",
      type: "select",
      options: [
        { label: "16\" on center", value: "16" },
        { label: "24\" on center", value: "24" },
      ],
      defaultValue: "16",
    },
    { id: "corners", label: "Number of Corners", unit: "count", defaultValue: 4, min: 0, step: 1 },
    { id: "openings", label: "Door/Window Openings", unit: "count", defaultValue: 0, min: 0, step: 1 },
  ],
  calculate: (v) => {
    const spacing = parseInt(v.spacing as string) as 16 | 24;
    const r = calculateStuds(v.wallLength as number, spacing, v.corners as number, v.openings as number);
    return [
      { label: r.label },
      { label: `Breakdown: ${r.breakdown.baseStuds} base + ${r.breakdown.cornerStuds} corner + ${r.breakdown.openingStuds} opening` },
    ];
  },
  disclaimer: "Add 10% for waste, trimmers, and cripple studs.",
  howToUse: [
    "Measure the total linear footage of all walls to be framed.",
    "Choose your stud spacing (16\" is standard for exterior walls).",
    "Enter the number of exterior corners (each requires 2 extra studs).",
    "Enter the total number of door and window openings.",
    "Click Calculate.",
  ],
  materialInfo:
    "Wall studs are the vertical lumber members that form the skeleton of the wall, carrying roof, floor, and ceiling loads down to the foundation. The two standard sizes are 2x4 (3.5-inch cavity for R-13 insulation) and 2x6 (5.5-inch cavity for R-19 or R-21 insulation). Pre-cut studs are milled to 92-5/8 inches for 8-foot ceilings and 104-5/8 inches for 9-foot ceilings, saving the labor of cutting each stud to length. Lumber grades range from stud grade (most common, least expensive) to #1 or #2 for load-bearing applications. Douglas fir and SPF (Spruce-Pine-Fir) are the most widely available species. At 16-inch on-center spacing, you need about 1 stud per linear foot of wall after accounting for corners and openings. Stud prices fluctuate with the lumber market — expect $3 to $6 for 2x4 pre-cuts and $5 to $10 for 2x6 pre-cuts. For exterior walls in energy-conscious builds, 2x6 studs at 24-inch spacing (advanced framing) reduce thermal bridging and lumber usage.",
  nextSteps: [
    { label: "Bottom Plate Calculator", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Top Plate Calculator", href: "/calculators/wall-framing/top-plate-calculator/" },
    { label: "Header Calculator", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Use pre-cut or pre-sorted studs for consistent wall height.",
    "Mark stud layout on the plate before framing to keep spacing accurate.",
    "Use a pneumatic framing nailer for speed — end nail through plates into studs.",
    "Double the top plate for structural continuity over openings.",
  ],
  commonMistakes: [
    "Not adding extra studs at corners and partition intersections.",
    "Forgetting king studs and jack studs at openings.",
    "Inconsistent spacing causing sheathing to miss stud edges.",
    "Using wet or twisted lumber that causes bowed walls.",
  ],
  faqs: [
    { question: "Should I use 2x4 or 2x6 studs for exterior walls?", answer: "2x6 studs are increasingly preferred for exterior walls because the deeper cavity allows R-19 or R-21 insulation versus only R-13 in 2x4 walls. Many energy codes in climate zones 4 and higher now require 2x6 exterior walls. The additional lumber cost is typically $500 to $1,500 for a whole house but is offset by long-term energy savings." },
    { question: "What is the standard stud height for an 8-foot ceiling?", answer: "Pre-cut studs for 8-foot ceilings are 92-5/8 inches. Combined with a single bottom plate and double top plate (3 plates at 1.5 inches each = 4.5 inches), the total wall height is 97-1/8 inches, which accommodates 8-foot drywall sheets with a small gap at the floor." },
    { question: "How many studs do I need per linear foot of wall?", answer: "At 16-inch on-center spacing, you need approximately 0.75 studs per linear foot of wall for the base layout. At 24-inch spacing, approximately 0.5 studs per foot. Then add 2 extra studs per corner, 2 per partition intersection, and 2 to 4 per door or window opening for king studs, jack studs, and cripples." },
    { question: "What is advanced framing and should I use it?", answer: "Advanced framing (also called OVE — Optimum Value Engineering) uses 2x6 studs at 24-inch spacing with single top plates, two-stud corners, and insulated headers. It reduces lumber use by 5-10%, increases insulation area, and lowers thermal bridging. It is endorsed by the DOE and is gaining popularity in energy-efficient construction." },
    { question: "How much do wall studs cost for an entire house?", answer: "A typical 1,500 sq ft single-story house needs 200 to 300 studs depending on layout complexity. At current prices of $3 to $6 per 2x4 stud or $5 to $10 per 2x6 stud, total stud cost ranges from $800 to $3,000. Lumber prices fluctuate significantly, so check current pricing before budgeting." },
    { question: "Do I need fire blocking in stud walls?", answer: "Yes. The IRC requires fire blocking in concealed wall spaces at each floor level, at the ceiling level, and at 10-foot intervals in walls exceeding 10 feet in height. Fire blocking is typically a horizontal piece of 2x lumber nailed between the studs to slow the spread of fire within the wall cavity." },
  ],
};

const bottomPlateCalculator: CalculatorConfig = {
  fields: [
    { id: "wallLength", label: "Total Wall Length", unit: "ft", placeholder: "100" },
    { id: "boardLength", label: "Board Length", unit: "ft", defaultValue: 8 },
  ],
  calculate: (v) => {
    const r = calculateBottomPlates(v.wallLength as number, v.boardLength as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure total wall length in feet.",
    "Enter the board length you are purchasing (8 ft or 16 ft are common).",
    "Click Calculate.",
  ],
  materialInfo:
    "The bottom plate (also called the sole plate) is the horizontal framing member at the base of each wall section, to which all vertical studs are nailed. It serves as the foundation connection for the wall and transfers loads to the floor system or foundation below. Bottom plates match the stud width — 2x4 for 2x4 walls, 2x6 for 2x6 walls. Any bottom plate in direct contact with concrete or masonry must be pressure-treated lumber rated for ground contact (UC4A or UC4B). Interior bottom plates on wood subfloors can use standard untreated lumber. Common board lengths are 8, 12, and 16 feet, with longer boards preferred to reduce the number of joints. Joints in bottom plates should fall over studs or over solid blocking. Bottom plates are cut from the same lumber as the wall studs, so costs are comparable — $4 to $8 for 8-foot PT boards and $3 to $6 for untreated boards.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Top Plate Calculator", href: "/calculators/wall-framing/top-plate-calculator/" },
  ],
  installationTips: [
    "Use PT lumber for all exterior bottom plates.",
    "Snap a chalk line before laying plates for accuracy.",
    "Pre-drill for anchor bolts before final positioning.",
  ],
  commonMistakes: [
    "Using regular lumber for exterior/garage bottom plates that contact concrete.",
    "Not snapping a layout line — causes wavy walls.",
  ],
  faqs: [
    { question: "Does the bottom plate need to be pressure treated?", answer: "Yes, if the bottom plate is in contact with concrete or masonry (such as on a slab-on-grade foundation or in a garage). The IRC Section R317.1 requires preservative-treated or naturally durable lumber for all wood in direct contact with concrete or within 6 inches of exposed earth." },
    { question: "How is the bottom plate attached to the subfloor?", answer: "On wood subfloors, bottom plates are nailed through the subfloor into the floor joists or rim joist below using 16d nails every 16 inches. On concrete slabs, bottom plates are secured with concrete anchor bolts, powder-actuated fasteners, or concrete screws (Tapcons) at 32-inch maximum spacing." },
    { question: "Should I cut the bottom plate out of doorways?", answer: "Yes. After the wall is raised and secured, the bottom plate section within each door opening is cut out flush with the jack studs (trimmers). This is typically done with a reciprocating saw after the wall is plumbed and braced. Leave the plate intact during assembly for structural alignment." },
    { question: "How many bottom plates do I need?", answer: "You need one bottom plate for every wall. Divide the total linear footage of all walls by the board length you are purchasing. For 100 feet of wall using 16-foot boards, you need 7 boards. Add 10-15% for waste from cuts at corners, doorways, and intersections." },
    { question: "Can I use a single bottom plate on a slab foundation?", answer: "Yes, a single bottom plate is standard for all wall types. Unlike the top plate (which is doubled for structural continuity), the bottom plate is always a single layer. However, the plate must be properly anchored to the slab with anchor bolts at code-required spacing." },
    { question: "What fasteners should I use with pressure-treated bottom plates?", answer: "Always use fasteners rated for use with pressure-treated lumber. Hot-dipped galvanized (HDG), stainless steel, or silicon bronze nails and bolts are required. Standard bright or electro-galvanized fasteners will corrode rapidly when exposed to the copper compounds in modern PT lumber, potentially causing structural failure." },
  ],
};

const topPlateCalculator: CalculatorConfig = {
  fields: [
    { id: "wallLength", label: "Total Wall Length", unit: "ft", placeholder: "100" },
    { id: "boardLength", label: "Board Length", unit: "ft", defaultValue: 8 },
  ],
  calculate: (v) => {
    const r = calculateTopPlates(v.wallLength as number, v.boardLength as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure total wall length in feet.",
    "Enter board length.",
    "Click Calculate — result includes the double top plate (2 layers).",
  ],
  materialInfo:
    "Most load-bearing walls require a double top plate for structural continuity. The first top plate sits directly on the stud ends, and the second plate (cap plate) is nailed on top with joints offset by at least 4 feet from the first plate's joints. The cap plate ties intersecting walls together at corners and T-intersections by lapping over the adjoining wall's top plate. Top plates match the stud width — 2x4 or 2x6 — and are cut from the same lumber stock. Since a double top plate is required, you need twice the linear footage of plates compared to the total wall length. Longer boards (12 or 16 feet) are preferred to minimize joints. In advanced framing (OVE), a single top plate is permitted when studs, joists, and rafters stack directly above each other, but this requires careful layout coordination. Top plate lumber costs the same as stud lumber — $3 to $10 per board depending on size and length.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Bottom Plate Calculator", href: "/calculators/wall-framing/bottom-plate-calculator/" },
    { label: "Header Calculator", href: "/calculators/wall-framing/header-calculator/" },
  ],
  installationTips: [
    "Offset joints in the cap plate from joints in the first top plate by at least 4 feet.",
    "Tie corners together with the cap plate for structural rigidity.",
    "Nail cap plate with 16d nails staggered every 16\".",
  ],
  commonMistakes: [
    "Aligning cap plate joints directly over first plate joints — weakens the wall.",
    "Not lapping the cap plate at corners.",
  ],
  faqs: [
    { question: "Do all walls need a double top plate?", answer: "All load-bearing walls require a double top plate per the IRC. Non-load-bearing partition walls can technically use a single top plate, but most builders double-plate all walls for consistency and structural robustness. Advanced framing (OVE) permits a single top plate on load-bearing walls only when studs, joists, and rafters are stacked in alignment." },
    { question: "Why do top plate joints need to be staggered?", answer: "Staggering the joints between the first and second top plate by at least 4 feet ensures continuous structural load transfer along the wall. If both plates have joints at the same location, the wall has no bending strength at that point and could fail under lateral or bearing loads." },
    { question: "How do I connect walls together at the top plate?", answer: "The cap plate (second top plate) laps over the intersecting wall at corners and T-intersections. The cap plate of one wall extends across the top of the adjoining wall's top plate, and they are nailed together. This creates a continuous structural tie between all wall segments." },
    { question: "How many top plate boards do I need?", answer: "Since top plates are doubled, you need two layers. Divide total wall length by board length, then multiply by 2. For 120 feet of wall using 16-foot boards: (120/16) x 2 = 15 boards. Add 10-15% for waste from cuts at corners and intersections." },
    { question: "What nails are used for the double top plate?", answer: "Nail the cap plate to the first top plate with 16d nails (3.5 inches) staggered every 16 inches along the length. At corners and intersections where the cap plate laps over the adjoining wall, use two 16d nails on each side of the joint for a solid structural connection." },
    { question: "Can I use a metal strap instead of a double top plate?", answer: "In some advanced framing systems, a galvanized metal strap can replace the cap plate at joints in a single top plate. The strap must be at least 3 inches wide and extend at least 6 inches on each side of the joint, fastened with the specified number of nails. This approach saves lumber but requires precise stud-joist-rafter alignment." },
  ],
};

const headerCalculator: CalculatorConfig = {
  fields: [
    { id: "openingWidth", label: "Opening Width", unit: "ft", placeholder: "3" },
    { id: "openingCount", label: "Number of Openings", unit: "count", defaultValue: 1, step: 1 },
  ],
  calculate: (v) => {
    const r = calculateHeaders(v.openingWidth as number);
    const kingSt = calculateKingStuds(v.openingCount as number);
    const jackSt = calculateJackStuds(v.openingCount as number);
    return [
      { label: `${r.headerLength} ft header length per opening (${v.openingCount} opening(s) = ${r.headerLength * (v.openingCount as number)} ft total lumber)` },
      { label: kingSt.label },
      { label: jackSt.label },
    ];
  },
  disclaimer: "Headers are typically doubled 2x lumber. Multiply lumber count by 2.",
  howToUse: [
    "Enter the rough opening width in feet.",
    "Enter the total number of openings.",
    "Click Calculate — get header lumber length, king studs, and jack studs.",
  ],
  materialInfo:
    "Headers are horizontal structural beams that span door and window openings, transferring the roof, floor, and wall loads above the opening around it to the jack studs (trimmers) and king studs on each side. Header size is determined by the span width and the load being carried — a 3-foot door in a single-story wall may only need a doubled 2x6, while a 6-foot sliding door or 8-foot garage header may require a 4x12 or engineered LVL beam. Standard headers are built from two pieces of dimensional lumber with a 1/2-inch plywood or OSB spacer sandwiched between them to match the 3.5-inch or 5.5-inch wall thickness. Pre-made engineered LVL headers are available in standard lengths and eliminate the need for site-built assemblies. In non-load-bearing walls, a single flat 2x4 can serve as a header. Header lumber costs vary widely from $10 for a small doubled 2x6 header to $80 or more for a large LVL beam.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Exterior Sheathing Calculator", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "Build headers from doubled 2x lumber with a 1/2\" plywood spacer to match wall width.",
    "Or use LVL (laminated veneer lumber) for larger spans.",
    "Install with crown up.",
  ],
  commonMistakes: [
    "Undersizing headers for the span and load.",
    "Not adding jack studs (trimmers) to support the header ends.",
    "Forgetting the cripple studs above the header.",
  ],
  faqs: [
    { question: "What size header do I need for a 3-foot door?", answer: "A doubled 2x6 is sufficient for a 3-foot interior or exterior door in most single-story applications. For two-story homes where the header carries a floor and roof load, step up to a doubled 2x8 or 2x10. Always consult your local building code or an engineer for multi-story or high-load situations." },
    { question: "How long should the header be?", answer: "The header must be at least as wide as the rough opening plus 3 inches to bear on the jack studs (1.5 inches on each side). Most builders add an extra few inches for bearing. This calculator adds 12 inches total to the opening width to ensure proper bearing on both sides." },
    { question: "What is the difference between a header and a lintel?", answer: "In wood-frame construction, header and lintel are often used interchangeably. Technically, a lintel is a masonry term for the beam over a masonry opening, while a header refers to the wood beam in stick framing. In practice, most US builders call it a header regardless of the material." },
    { question: "Do non-load-bearing walls need headers?", answer: "Non-load-bearing (partition) walls do not need structural headers. A single flat 2x4 across the top of the opening is sufficient to support the short cripple studs above. However, many builders install a full header anyway for simplicity and in case the wall is later designated as load-bearing." },
    { question: "Can I use LVL instead of doubled lumber for headers?", answer: "Yes. Laminated veneer lumber (LVL) beams are stronger than dimensional lumber of the same depth and are ideal for wide openings. A single 3.5-inch-wide LVL can replace a doubled 2x header and fills the wall cavity perfectly. LVL headers are available in depths from 5.5 to 18 inches." },
    { question: "How many king studs and jack studs do I need per opening?", answer: "Each opening requires two king studs (one on each side, running full height from bottom plate to top plate) and two jack studs (trimmers, cut to the height of the bottom of the header). For openings wider than 6 feet, some codes require doubled jack studs on each side for additional bearing support." },
  ],
};

const exteriorSheathingCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Total Wall Area", unit: "sq ft", placeholder: "1200" },
  ],
  calculate: (v) => {
    const r = calculateExteriorSheathing(v.wallArea as number);
    return [
      { label: r.label },
      { label: `With 10% waste: ${Math.ceil((v.wallArea as number) / 32 * 1.1)} sheets` },
    ];
  },
  disclaimer: "Deduct window and door areas from wall area for a more accurate count.",
  howToUse: [
    "Calculate total wall area (perimeter × wall height).",
    "Subtract rough opening areas for doors and windows.",
    "Click Calculate.",
  ],
  materialInfo:
    "Exterior wall sheathing is the structural panel layer applied over the wall studs before housewrap and siding. Its primary function is providing racking (shear) resistance against lateral forces from wind and earthquakes, while also serving as a nail base for siding attachment. The standard material is 7/16-inch or 1/2-inch OSB, which costs $15 to $30 per 4x8 sheet. CDX plywood offers better moisture performance at a higher price ($25 to $45 per sheet). Panels are installed vertically (long dimension running floor to ceiling) for maximum racking resistance and are nailed to the studs following a specific nail schedule — typically 8d nails at 6 inches on center along panel edges and 12 inches in the field. Some builders in hot-humid climates prefer structural insulated panels or rigid foam sheathing with metal bracing for better moisture management, though these require engineering approval. Sheathing is required on all exterior walls in most wind and seismic zones.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Housewrap Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
  ],
  installationTips: [
    "Orient panels vertically (long edge vertical) for best racking resistance.",
    "Leave 1/8\" gaps at all panel edges.",
    "Nail 6\" OC on panel edges, 12\" OC in the field.",
    "Use 8d nails or staples per code.",
  ],
  commonMistakes: [
    "Running panels horizontally — reduces shear resistance.",
    "Skipping the expansion gap — panels buckle and bow.",
    "Under-nailing — racking resistance depends on nail schedule.",
  ],
  faqs: [
    { question: "Do I need let-in bracing if I use sheathing?", answer: "No. Structural sheathing (OSB or plywood) nailed per the code nailing schedule provides all required lateral bracing for the wall. Let-in metal straps, diagonal boards, or metal T-bracing are only needed when sheathing is omitted or when non-structural panels like foam board are used instead." },
    { question: "Can I use foam insulation board as wall sheathing?", answer: "Rigid foam alone does not provide structural racking resistance and cannot replace OSB or plywood. However, you can use foam board over structural sheathing for additional insulation, or use it in combination with let-in metal bracing in walls where structural sheathing is not required." },
    { question: "How many sheets of wall sheathing do I need?", answer: "Divide the total wall area (perimeter times wall height) by 32 square feet per 4x8 sheet. Subtract door and window rough opening areas for a more accurate count, then add 10% for waste. A house with 1,200 sq ft of wall area needs about 38 sheets net, or 42 with waste." },
    { question: "Should I use OSB or plywood for wall sheathing?", answer: "OSB is the most common choice due to lower cost and consistent quality. Plywood is better in high-moisture environments because it absorbs and releases moisture without permanent edge swell. In coastal or very humid climates, plywood or ZIP System panels are worth the premium." },
    { question: "What is ZIP System sheathing?", answer: "ZIP System is an engineered OSB panel with an integrated water-resistive and air barrier built into the panel face. Seams are taped with ZIP tape, eliminating the need for housewrap. It costs more than standard OSB plus housewrap but saves labor and provides a superior air barrier. It has become very popular in energy-efficient construction." },
    { question: "What is the nailing schedule for wall sheathing?", answer: "The standard IRC nailing schedule for 7/16-inch OSB or 1/2-inch plywood wall sheathing is 8d common nails (or 6d for 3/8-inch panels) spaced 6 inches on center along panel edges and 12 inches on center in the interior field. In high-wind zones, closer spacing (4 inches or 3 inches on edges) may be required." },
  ],
};

// ─── ROOFING ──────────────────────────────────────────────────────────────────

const trussCalculator: CalculatorConfig = {
  fields: [
    { id: "roofLength", label: "Roof Length (Ridge)", unit: "ft", placeholder: "40" },
    {
      id: "spacing",
      label: "Truss Spacing",
      type: "select",
      options: [
        { label: "24\" on center", value: "24" },
        { label: "16\" on center", value: "16" },
      ],
      defaultValue: "24",
    },
  ],
  calculate: (v) => {
    const spacing = parseInt(v.spacing as string) as 16 | 24;
    const r = calculateTrusses(v.roofLength as number, spacing);
    return [{ label: r.label }];
  },
  disclaimer: "Order 1–2 extra trusses for gable ends and any damage.",
  howToUse: [
    "Measure the roof length (ridge length) in feet.",
    "Select your truss spacing (24\" OC is standard for residential).",
    "Click Calculate.",
  ],
  materialInfo:
    "Roof trusses are pre-engineered triangular wood assemblies designed to span the full width of the building without requiring interior load-bearing walls. Each truss is factory-built to a specific engineering design using 2x4 or 2x6 lumber connected with metal gusset plates. Common truss profiles include Fink (W-pattern, the most common), Howe, and scissors (for vaulted ceilings). Trusses must be ordered from a licensed truss manufacturer based on your building plans, and they typically have a 4 to 8 week lead time. Standard residential trusses are spaced 24 inches on center and can span 24 to 40 feet depending on design. Truss pricing depends on span and complexity — simple 24-foot span Fink trusses cost $75 to $150 each, while 40-foot spans or specialty profiles can cost $200 to $400 each. Delivery usually requires a flatbed truck, and installation requires a crane or boom truck for lifting trusses into position.",
  nextSteps: [
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Hurricane Tie Calculator", href: "/calculators/hardware/hurricane-tie-calculator/" },
  ],
  installationTips: [
    "Order trusses 4–6 weeks in advance — lead times can be long.",
    "Have a crane or boom truck on site for lifting.",
    "Brace trusses laterally during installation — they are unstable until sheathed.",
    "Follow the truss placement diagram from the manufacturer.",
  ],
  commonMistakes: [
    "Not ordering gable-end trusses (different from standard trusses).",
    "Insufficient temporary bracing during installation — trusses can collapse.",
    "Placing trusses on bearing walls only — do not load non-bearing partitions.",
  ],
  faqs: [
    { question: "What is the standard roof truss spacing?", answer: "24 inches on center is the most common residential truss spacing because it reduces the number of trusses needed and lowers material costs. 16-inch spacing is used for heavier roof loads (such as tile roofing or high snow zones) or when the roof sheathing requires closer support." },
    { question: "Can I reuse old trusses?", answer: "Generally no. Engineered trusses are designed for specific spans, loads, and code requirements. Reusing trusses from a different structure without a licensed engineer's review and approval is not safe or code-compliant, as the original design may not match your new loading conditions." },
    { question: "How much do roof trusses cost?", answer: "Truss prices depend on span, profile, and regional lumber costs. Simple 24-foot Fink trusses typically cost $75 to $150 each, while 36 to 40-foot trusses run $150 to $300 each. Specialty trusses (scissors, attic, or cathedral) cost $200 to $500 each. Add $500 to $1,500 for crane rental on delivery day." },
    { question: "How many trusses do I need for my roof?", answer: "Divide the roof ridge length in inches by the truss spacing (24 or 16 inches) and add one for the starter truss. A 40-foot ridge at 24-inch spacing needs 21 common trusses, plus 2 gable-end trusses (one at each end), for a total of 23. Always order 1 to 2 extras for damage during delivery or installation." },
    { question: "What is the difference between trusses and rafters?", answer: "Trusses are pre-engineered, factory-built assemblies that span the full building width and are faster to install. Rafters are individual boards cut and assembled on site, allowing for open attic or cathedral ceiling space. Trusses are less expensive and stronger for the same span but do not allow usable attic space unless attic-style trusses are specified." },
    { question: "How long does it take to get trusses delivered?", answer: "Lead times for custom trusses are typically 4 to 8 weeks from the time engineering drawings are approved. During peak building season (spring and summer), lead times can stretch to 10 to 12 weeks. Plan your truss order early in the project timeline to avoid costly delays." },
  ],
};

const rafterCalculator: CalculatorConfig = {
  fields: [
    { id: "roofLength", label: "Roof Length", unit: "ft", placeholder: "40" },
    {
      id: "spacing",
      label: "Rafter Spacing",
      type: "select",
      options: [
        { label: "16\" on center", value: "16" },
        { label: "24\" on center", value: "24" },
      ],
      defaultValue: "16",
    },
  ],
  calculate: (v) => {
    const spacing = parseInt(v.spacing as string) as 16 | 24;
    const r = calculateRafters(v.roofLength as number, spacing);
    return [{ label: r.label }];
  },
  disclaimer: "Add 10% for waste. Rafter length depends on roof slope — measure actual rafter length, not plan width.",
  howToUse: [
    "Measure total roof length in feet.",
    "Select spacing.",
    "Click Calculate — result includes rafters for both sides of the roof.",
  ],
  materialInfo:
    "Rafters are the sloped structural lumber members that form the roof frame in stick-built (site-framed) construction. Unlike factory-built trusses, rafters are individually cut and installed on site, allowing for open attic space, cathedral ceilings, or unique roof geometries. Common rafter sizes are 2x6 (spans up to 10 feet), 2x8 (up to 13 feet), 2x10 (up to 16 feet), and 2x12 (up to 20 feet) at 16-inch on-center spacing, depending on the lumber species, grade, and local snow or wind loads. Each rafter requires a bird's mouth cut where it sits on the wall top plate and a plumb cut at the ridge. Rafters are typically paired on opposite sides of a ridge board and connected with collar ties or ceiling joists to prevent the walls from spreading outward. Rafter lumber costs $8 to $25 per board depending on dimension and length. Stick framing with rafters is more labor-intensive than trusses but offers greater design flexibility.",
  nextSteps: [
    { label: "Ridge Board Calculator", href: "/calculators/roofing/ridge-board-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Cut a test rafter and verify fit before cutting the full set.",
    "Use a speed square to mark consistent bird's mouth cuts.",
    "Collar ties or ridge beam required to prevent roof spread.",
  ],
  commonMistakes: [
    "Measuring horizontal span instead of rafter run for lumber ordering.",
    "Not accounting for roof overhang in rafter length.",
    "Inconsistent bird's mouth cuts causing uneven eaves.",
  ],
  faqs: [
    { question: "How do I calculate rafter length?", answer: "Rafter length equals the square root of (run squared plus rise squared), using the Pythagorean theorem. For a 12-foot run with a 6/12 pitch, the rise is 6 feet, so the rafter length is the square root of (144 + 36) which equals approximately 13.4 feet. Add the overhang length (typically 12 to 24 inches) to get the total rafter length for ordering lumber." },
    { question: "What size rafters for a 20-foot span?", answer: "For a 20-foot total span (10-foot run on each side of the ridge), 2x10 rafters at 16-inch on-center spacing are typically required in most snow load zones. In heavy snow areas (40+ PSF ground snow load), 2x12 may be necessary. Always verify with your local building department's span tables." },
    { question: "How many rafters do I need for my roof?", answer: "Divide the roof ridge length by the rafter spacing (16 or 24 inches) and add one, then multiply by two for both sides of the roof. A 40-foot ridge at 16-inch spacing needs ((40x12)/16 + 1) x 2 = 62 rafters. Add 10% extra for waste from cuts and any damaged boards." },
    { question: "What is a bird's mouth cut on a rafter?", answer: "A bird's mouth is a notch cut into the bottom edge of each rafter where it sits on the wall top plate. It consists of a horizontal seat cut (bearing on the plate) and a vertical plumb cut (against the outside of the wall). The seat cut should be no more than one-third the depth of the rafter to maintain structural integrity." },
    { question: "Do I need collar ties or ceiling joists with rafters?", answer: "Yes. In a traditional rafter roof, opposing rafters push outward on the walls. Collar ties (in the upper third of the rafter span) resist this spreading force. Ceiling joists or rafter ties at the wall plate level are even more effective. Without these horizontal ties, the walls will eventually bow outward. A structural ridge beam eliminates this requirement." },
    { question: "Rafters vs. trusses — which should I choose?", answer: "Choose rafters when you want an open attic, cathedral ceilings, or complex roof shapes. Choose trusses when you want faster installation, lower cost, and engineered load ratings. Trusses are 20-30% less expensive for simple gable roofs, but rafters offer more flexibility and do not require crane access for installation." },
  ],
};

const ridgeBoardCalculator: CalculatorConfig = {
  fields: [
    { id: "roofLength", label: "Roof Length", unit: "ft", placeholder: "40" },
    { id: "boardLength", label: "Board Length", unit: "ft", defaultValue: 16 },
  ],
  calculate: (v) => {
    const r = calculateRidgeBoard(v.roofLength as number, v.boardLength as number);
    return [
      { label: `${v.roofLength} ft of ridge board needed` },
      { label: `${r.boards} boards (${v.boardLength} ft each)` },
    ];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter total roof length.",
    "Enter the board length you will use.",
    "Click Calculate.",
  ],
  materialInfo:
    "The ridge board runs along the peak of the roof and serves as the connecting member where opposing rafters meet. In a traditional rafter roof with collar ties, the ridge board is non-structural — it simply aligns the rafters and provides a nailing surface. It must be at least one nominal size deeper than the rafters to provide full bearing (for example, a 2x10 or 1x10 ridge board with 2x8 rafters). Common board lengths are 12 and 16 feet, joined end-to-end at rafter locations. A structural ridge beam is different — it is an engineered beam (LVL, glulam, or steel) that carries the full roof load without requiring collar ties or ceiling joists, allowing open cathedral ceilings. Structural ridge beams are significantly more expensive and require posts at each end bearing down to the foundation. Standard ridge boards cost $15 to $40 each depending on size and length, while structural ridge beams can cost $200 to $1,000+ depending on span.",
  nextSteps: [
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Temporary support the ridge board while setting rafters.",
    "Keep the ridge board straight — use temporary bracing.",
    "The ridge board does NOT carry structural load in a traditional rafter roof (collar ties and walls carry the load).",
  ],
  commonMistakes: [
    "Using the same size as rafters — ridge must be one size larger to provide full bearing.",
    "Not supporting the ridge during construction.",
  ],
  faqs: [
    { question: "What is the difference between a ridge board and a ridge beam?", answer: "A ridge board is a non-structural member that aligns the rafters at the peak. It relies on collar ties and ceiling joists to prevent the roof from spreading. A ridge beam is a structural member (usually LVL, glulam, or steel) that carries the full roof load, eliminating the need for collar ties and allowing open cathedral ceilings." },
    { question: "What size ridge board do I need?", answer: "The ridge board must be at least one nominal size deeper than the rafters so the rafters bear fully against it. For 2x6 rafters, use a 1x8 or 2x8 ridge. For 2x8 rafters, use a 1x10 or 2x10 ridge. For 2x10 rafters, use a 1x12 or 2x12 ridge board." },
    { question: "How many ridge boards do I need?", answer: "Divide the total roof ridge length by the board length you plan to use (12 or 16 feet). For a 40-foot ridge using 16-foot boards, you need 3 boards. Add one extra for waste. Joints between ridge boards must occur at a rafter location so both boards are supported." },
    { question: "Can I use a 1x board or do I need a 2x ridge board?", answer: "A 1x board (3/4-inch thick) is acceptable for a non-structural ridge board since it only serves as a nailing surface and alignment guide. A 2x board provides more rigidity during construction and is easier to work with. If the ridge must carry any structural load, a full-dimension 2x or engineered beam is required." },
    { question: "Do I need a structural ridge beam for a cathedral ceiling?", answer: "Yes. If you are building a cathedral or vaulted ceiling where collar ties and ceiling joists are not possible, you must use a structural ridge beam. The beam must be sized by an engineer based on the roof span, load, and local code requirements. Posts supporting the ridge beam must transfer loads down to the foundation." },
    { question: "How do I support a ridge board during construction?", answer: "Temporarily brace the ridge board with vertical supports (2x4 braces to the floor or temporary walls) while setting the first few pairs of rafters. Once several pairs of opposing rafters are nailed in place, the ridge board is held stable by the rafter connections. Remove the temporary bracing after the roof is fully framed and sheathed." },
  ],
};

const roofSheathingCalculator: CalculatorConfig = {
  fields: [
    { id: "roofArea", label: "Roof Area", unit: "sq ft", placeholder: "1200" },
  ],
  calculate: (v) => {
    const r = calculateRoofSheathing(v.roofArea as number);
    const hclips = calculateHClips(r.sheets);
    return [
      { label: r.label },
      { label: hclips.label },
      { label: `With 10% waste: ${Math.ceil(r.sheets * 1.1)} sheets` },
    ];
  },
  disclaimer: "Roof area = plan area × slope factor. Add 10% for hip cuts and waste.",
  howToUse: [
    "Calculate roof area (slope length × roof length × 2 for gable, or use a slope factor).",
    "Click Calculate — includes H-clip count.",
  ],
  materialInfo:
    "Roof sheathing creates the structural deck that supports roofing underlayment, shingles, and all roof loads. The standard material is 7/16-inch OSB for 16-inch rafter or truss spacing, and 1/2-inch OSB or CDX plywood for 24-inch spacing. Panels are 4x8 feet (32 sq ft each) and are installed horizontally starting from the eave, with staggered end joints between rows. H-clips — small metal clips inserted between panel edges at mid-span — are required wherever unsupported panel edges span between rafters or trusses to prevent sagging under load. OSB roof sheathing costs $15 to $30 per sheet, while CDX plywood runs $25 to $45. In regions with frequent wind-driven rain, radiant barrier sheathing (OSB with a reflective foil face) helps reduce attic heat gain. Always use Exposure 1-rated panels since roof sheathing may be exposed to weather during construction. The nailing schedule is critical for wind uplift resistance — 8d nails at 6 inches on edges and 12 inches in the field.",
  nextSteps: [
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Roofing Underlayment Calculator", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Roof Area Calculator", href: "/calculators/roofing/roof-area-calculator/" },
  ],
  installationTips: [
    "Start from the eave, working toward the ridge.",
    "Stagger end joints between rows.",
    "Leave 1/8\" expansion gaps at all edges.",
    "Install H-clips at mid-span between rafters/trusses.",
  ],
  commonMistakes: [
    "Forgetting H-clips — required for 24\" OC framing.",
    "Not staggering end joints.",
    "Using interior-rated OSB in wet climates — use Exposure 1 or exterior rated.",
  ],
  faqs: [
    { question: "What thickness roof sheathing should I use?", answer: "Use 7/16-inch OSB for 16-inch on-center rafter or truss spacing. Step up to 1/2-inch OSB or CDX plywood for 24-inch spacing. In heavy snow load areas or for tile roofing, 5/8-inch or 3/4-inch panels may be required. Check the panel span rating stamp to confirm it matches your framing spacing." },
    { question: "How do I calculate roof area?", answer: "Multiply your building footprint area by the roof slope factor. Common slope factors: 4/12 pitch = 1.054, 6/12 = 1.118, 8/12 = 1.202, 10/12 = 1.302, 12/12 = 1.414. For hip roofs, add 10% to the calculated area for the additional cuts and waste at the hip lines." },
    { question: "How many sheets of roof sheathing do I need?", answer: "Divide the total roof area by 32 sq ft per sheet and add 10% for waste. A 1,500 sq ft roof needs about 47 sheets net, or 52 with waste. Hip roofs and complex geometries generate more waste (15-20%) due to angled cuts along hips and valleys." },
    { question: "What are H-clips and do I need them?", answer: "H-clips are small galvanized metal clips that slide between adjacent sheathing panel edges at mid-span between rafters or trusses. They support the panel edges and prevent sagging under load. H-clips are required for 24-inch framing spacing with 7/16-inch or 1/2-inch panels and are generally good practice for any roof." },
    { question: "OSB vs plywood for roof sheathing — which is better?", answer: "Both are code-compliant. OSB is 20-30% less expensive and the most widely used. Plywood handles moisture better and is preferred in high-humidity climates or where extended weather exposure during construction is expected. For the best performance, CDX plywood or ZIP System roof sheathing panels are the top choices." },
    { question: "Can I install roof sheathing in the rain?", answer: "Avoid installing sheathing in active rain, as wet surfaces create a slip hazard and panels can absorb moisture that leads to mold. If panels do get wet during construction, allow them to dry before applying underlayment. Exposure 1-rated panels can handle brief weather exposure without structural damage." },
  ],
};

const shingleCalculator: CalculatorConfig = {
  fields: [
    { id: "roofArea", label: "Roof Area", unit: "sq ft", placeholder: "1200" },
  ],
  calculate: (v) => {
    const r = calculateShingles(v.roofArea as number);
    const roofSquares = Math.ceil((v.roofArea as number) / 100);
    return [
      { label: r.label },
      { label: `${roofSquares} roofing squares total` },
      { label: `With 15% waste: ${Math.ceil(r.bundles * 1.15)} bundles` },
    ];
  },
  disclaimer: "Add 10–15% waste for hips, ridges, and valleys.",
  howToUse: [
    "Calculate total roof area including all slopes.",
    "Enter in square feet.",
    "Click Calculate — result shows bundles (3 bundles = 1 square = 100 sq ft).",
  ],
  materialInfo:
    "Asphalt shingles are the most popular residential roofing material in North America, covering over 75% of all homes. They come in two main styles: 3-tab shingles (flat, uniform appearance, 20-25 year warranty, lower cost) and architectural/dimensional shingles (layered, textured appearance, 30-50 year warranty, more wind resistant). Shingles are sold in bundles, with 3 bundles covering 1 roofing square (100 sq ft). Architectural shingles cost $30 to $50 per bundle, while premium designer shingles run $50 to $100 per bundle. Popular brands include GAF Timberline, CertainTeed Landmark, and Owens Corning Duration. Shingle color affects attic temperature — lighter colors reflect more heat in southern climates. Wind ratings range from 60 mph for basic 3-tab to 130 mph for high-wind architectural shingles. Ridge cap shingles are sold separately (about 20 linear feet per bundle) and are needed for all ridge and hip lines.",
  nextSteps: [
    { label: "Roofing Underlayment Calculator", href: "/calculators/roofing/underlayment-calculator/" },
    { label: "Drip Edge Calculator", href: "/calculators/roofing/drip-edge-calculator/" },
  ],
  installationTips: [
    "Start from the eave, working up to the ridge.",
    "Offset vertical joints by 6\" minimum between courses.",
    "Use 4 nails per shingle in standard conditions, 6 in high-wind areas.",
    "Install ridge cap shingles separately (sold in separate bundles).",
  ],
  commonMistakes: [
    "Not adding waste — always order extra for ridge cap, hips, and valleys.",
    "Under-nailing in high-wind zones.",
    "Not using ice and water shield in the first 2 feet from eave in cold climates.",
  ],
  faqs: [
    { question: "How many bundles of shingles per square?", answer: "Standard 3-tab and most architectural shingles require 3 bundles per roofing square (100 sq ft). Some premium heavyweight shingles may require 4 bundles per square — check the coverage listed on the bundle wrapper. Always add 10-15% to your total for waste from ridge caps, hip cuts, and valley cuts." },
    { question: "How do I calculate roof area for shingles?", answer: "Measure your house footprint area (length times width) and multiply by the roof slope factor. For a 4/12 pitch, multiply by 1.054. For a 6/12 pitch, multiply by 1.118. For an 8/12 pitch, multiply by 1.202. For hip roofs, add an additional 10% for the extra waste generated by angled hip cuts." },
    { question: "How long do architectural shingles last?", answer: "Quality architectural shingles carry 30-year limited warranties and typically last 25 to 30 years in most US climates with proper installation and adequate attic ventilation. Premium lines from GAF, CertainTeed, and Owens Corning offer 50-year or lifetime warranties, though actual lifespan depends heavily on climate, ventilation, and UV exposure." },
    { question: "What is the difference between 3-tab and architectural shingles?", answer: "3-tab shingles have a flat, uniform appearance and cost less ($25-35 per bundle) but offer only 60-80 mph wind resistance and 20-25 year warranties. Architectural (dimensional) shingles have a layered, textured look that mimics wood shakes, offer 110-130 mph wind ratings, and carry 30-50 year warranties. Most new construction and reroofing projects now use architectural shingles." },
    { question: "How much does a new shingle roof cost?", answer: "For a typical 1,500 to 2,000 sq ft roof, materials alone (shingles, underlayment, drip edge, nails, ridge cap) cost $2,000 to $4,000. Professional installation adds $3,000 to $7,000 depending on roof complexity and region. Total installed cost typically ranges from $5,000 to $12,000 for architectural shingles." },
    { question: "Do I need to remove old shingles before reroofing?", answer: "Most codes allow up to two layers of asphalt shingles. However, tearing off the old layer is recommended because it allows inspection of the sheathing for rot, ensures proper underlayment installation, and reduces the dead load on the roof structure. Many roofing warranties require a tear-off for full coverage." },
  ],
};

const underlaymentCalculator: CalculatorConfig = {
  fields: [
    { id: "roofArea", label: "Roof Area", unit: "sq ft", placeholder: "1200" },
    {
      id: "rollCoverage",
      label: "Roll Coverage",
      type: "select",
      options: [
        { label: "400 sq ft (15# felt)", value: "400" },
        { label: "200 sq ft (30# felt)", value: "200" },
        { label: "1000 sq ft (synthetic)", value: "1000" },
      ],
      defaultValue: "400",
    },
  ],
  calculate: (v) => {
    const r = calculateUnderlayment(v.roofArea as number, parseInt(v.rollCoverage as string));
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter total roof area.",
    "Select the underlayment type you are using.",
    "Click Calculate.",
  ],
  materialInfo:
    "Roofing underlayment is the secondary moisture barrier installed over the roof sheathing before shingles or other roofing materials are applied. There are three main types: 15-pound asphalt felt (the traditional choice, sold in rolls covering 400 sq ft, costs $15-25 per roll), 30-pound felt (heavier and more durable, 200 sq ft per roll, $20-35 per roll), and synthetic underlayment (modern non-woven polypropylene, 1,000 sq ft per roll, $50-100 per roll). Synthetic underlayment has largely replaced felt in professional roofing because it is lighter, stronger, does not absorb moisture, and can be left exposed longer during construction. In cold climates (zones 5-8), ice and water shield — a self-adhered rubberized asphalt membrane — is required along the eaves for at least the first 24 inches past the interior wall line. Most shingle manufacturers require underlayment for their warranty to be valid, and building codes universally mandate it as part of the roof assembly.",
  nextSteps: [
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Drip Edge Calculator", href: "/calculators/roofing/drip-edge-calculator/" },
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
  ],
  installationTips: [
    "Install horizontally, starting at the eave.",
    "Overlap each course 2–4 inches over the one below.",
    "Use ice and water shield in the first 2 courses in cold climates.",
    "Fasten with cap nails or staples per manufacturer instructions.",
  ],
  commonMistakes: [
    "Installing in the wrong direction (should go horizontal).",
    "Not using ice and water shield near eaves — required in climate zones with freezing.",
    "Using staples in high-wind areas instead of cap nails.",
  ],
  faqs: [
    { question: "Do I need underlayment under shingles?", answer: "Yes. Underlayment is required by virtually all building codes and is mandatory for shingle manufacturer warranties. It acts as your secondary moisture barrier — if shingles are damaged by wind or impact, the underlayment prevents water from reaching the sheathing and causing rot or interior damage." },
    { question: "Felt vs. synthetic underlayment — which should I use?", answer: "Synthetic underlayment is now the preferred choice for most professional roofers. It is 5 to 10 times stronger than felt, does not absorb water or wrinkle, provides better traction for walking, and can be left exposed for up to 6 months. Felt is less expensive but tears easily, absorbs moisture, and wrinkles in hot weather." },
    { question: "How many rolls of underlayment do I need?", answer: "Divide your roof area by the roll coverage (400 sq ft for 15-pound felt, 200 sq ft for 30-pound felt, or 1,000 sq ft for synthetic) and add 15% for overlaps and waste. A 1,500 sq ft roof needs about 4-5 rolls of 15-pound felt, 8-9 rolls of 30-pound felt, or 2 rolls of synthetic underlayment." },
    { question: "What is ice and water shield and do I need it?", answer: "Ice and water shield is a self-adhered rubberized asphalt membrane that provides a waterproof barrier in vulnerable roof areas. It is required by code in cold climates along eaves (to prevent ice dam damage), in valleys, and around penetrations. Even in moderate climates, it is recommended in valleys and around skylights and chimneys." },
    { question: "Can I use underlayment as a temporary roof?", answer: "Felt underlayment should not be left exposed for more than 30 days, as UV exposure degrades it rapidly. Synthetic underlayment can withstand 4 to 6 months of UV exposure (check the manufacturer's rating). Neither is designed as a permanent roof covering and will eventually fail if shingles are not installed." },
    { question: "How much overlap is needed between underlayment courses?", answer: "Standard practice is 2 to 4 inches of horizontal overlap (upper course lapping over lower course) and 6 inches of vertical overlap at end-of-roll joints. In high-wind areas or on low-slope roofs, increase the horizontal overlap to 6 inches. Ice and water shield requires a minimum 6-inch overlap on all seams." },
  ],
};

const dripEdgeCalculator: CalculatorConfig = {
  fields: [
    { id: "roofPerimeter", label: "Roof Perimeter (eaves + rakes)", unit: "ft", placeholder: "160" },
    { id: "pieceLength", label: "Drip Edge Length", unit: "ft", defaultValue: 10 },
  ],
  calculate: (v) => {
    const r = calculateDripEdge(v.roofPerimeter as number, v.pieceLength as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Measure all eave edges plus all rake edges.",
    "Enter drip edge piece length (standard 10 ft).",
    "Click Calculate.",
  ],
  materialInfo:
    "Drip edge is an L-shaped or T-shaped metal flashing installed along the eaves and rake edges of the roof to direct water runoff away from the fascia board and into the gutters. It prevents water from wicking back under the sheathing edge, which is a common cause of fascia rot and soffit damage. Drip edge comes in standard 10-foot lengths in profiles Type A (small, simple L-shape), Type C/D-style (wider lower flange for better water diversion), and Type F (for use with gutters). Materials include galvanized steel (most common, $3-5 per 10-foot piece), aluminum ($4-7), and copper ($15-25 for premium applications). The IRC has required drip edge on all asphalt shingle roofs since the 2012 code cycle. Drip edge is available in a variety of colors to match the roof or fascia. At the eaves, drip edge goes under the underlayment; at the rakes, it goes over the underlayment — this sequencing is critical for proper water management.",
  nextSteps: [
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Roofing Underlayment Calculator", href: "/calculators/roofing/underlayment-calculator/" },
  ],
  installationTips: [
    "Install eave drip edge BEFORE underlayment, rake drip edge AFTER underlayment.",
    "Overlap pieces by 2 inches minimum.",
    "Nail every 12 inches.",
  ],
  commonMistakes: [
    "Installing rake drip edge before underlayment — underlayment must lap over rake drip edge.",
    "Not overlapping pieces enough, allowing water infiltration.",
  ],
  faqs: [
    { question: "Is drip edge required by building code?", answer: "Yes. The IRC has required drip edge flashing on all eaves and rakes of asphalt shingle roofs since the 2012 code cycle. Even in jurisdictions using older code editions, most shingle manufacturers require drip edge for their warranty. It is one of the least expensive yet most important roofing components." },
    { question: "What profile of drip edge should I use?", answer: "Type C or D-style drip edge is the most common for residential roofing. It features a wider lower flange (1.5 to 2 inches) that extends water further from the fascia than Type A. Type F (also called gutter apron) has an extended face to work with gutters. For most homes, Type C/D in galvanized steel is the best balance of performance and cost." },
    { question: "How many pieces of drip edge do I need?", answer: "Measure all eave edges and rake edges in linear feet, then divide by the piece length (usually 10 feet). Account for a 2-inch overlap at each joint. For a simple gable roof on a 30x40 ft house: 60 ft of eaves + 2 rake lengths (using slope factor). Add 10% for waste and mitered corners." },
    { question: "Does drip edge go over or under the underlayment?", answer: "At the eaves, drip edge is installed directly on the sheathing, and the underlayment laps over it. At the rakes, drip edge is installed over the underlayment. This installation sequence ensures that any water running down the underlayment is directed onto the drip edge and away from the roof edge." },
    { question: "What material should I choose for drip edge?", answer: "Galvanized steel drip edge is the most common and cost-effective choice at $3 to $5 per 10-foot piece. Aluminum is lighter and does not rust but dents more easily. Copper drip edge is a premium option used on high-end homes and slate roofs. For coastal areas, aluminum or painted galvanized is recommended to resist salt air corrosion." },
    { question: "Can I install drip edge on an existing roof?", answer: "Adding drip edge to an existing roof without a full reroof is difficult because the shingles and underlayment need to lap over the eave drip edge correctly. It is best installed during a full reroofing project. If adding to an existing roof, slide the drip edge under the first course of shingles and nail through the top flange." },
  ],
};

const roofPitchCalculator: CalculatorConfig = {
  fields: [
    { id: "rise", label: "Rise", unit: "in", defaultValue: 6, placeholder: "6" },
    { id: "run", label: "Run", unit: "in", defaultValue: 12, placeholder: "12" },
  ],
  calculate: (v) => {
    const r = calculateRoofPitch(v.rise as number, v.run as number);
    return [
      { label: `Pitch: ${r.pitchRatio}` },
      { label: `Angle: ${r.angle}°` },
      { label: `Slope: ${r.slopePercent}%` },
      { label: `Roof area multiplier: ${r.multiplier}` },
      { label: `Classification: ${r.description}` },
    ];
  },
  disclaimer: "This calculator provides approximate values. Consult a structural engineer for load-bearing and design decisions.",
  howToUse: [
    "Measure the vertical rise of your roof in inches — this is how many inches the roof goes up over a horizontal distance.",
    "Enter the horizontal run in inches (standard is 12 inches for conventional pitch notation like 6/12).",
    "Click Calculate to get the pitch ratio, angle in degrees, slope percentage, and area multiplier.",
    "Use the area multiplier to convert your flat (plan-view) roof area to actual roof surface area — multiply flat area by this number.",
  ],
  materialInfo:
    "Roof pitch is the ratio of vertical rise to horizontal run, typically expressed as inches of rise per 12 inches of run (e.g., 6/12). It is one of the most critical dimensions in roofing because it determines material suitability, water shedding performance, structural load paths, and walkability for installers. Common residential pitches range from 4/12 to 8/12. A 4/12 pitch (18.4°) is the minimum recommended for standard asphalt shingles and is easy to walk on. A 6/12 pitch (26.6°) is the most popular in the United States, offering a balanced look and good water shedding. An 8/12 pitch (33.7°) and steeper provides excellent snow shedding and a dramatic roofline but increases material costs and labor difficulty. In northern climates with heavy snowfall — such as Minnesota, Michigan, and the Northeast — steeper pitches of 8/12 to 12/12 are common to prevent dangerous snow accumulation. In the South and Southwest, lower pitches of 4/12 to 6/12 prevail because snow load is not a concern. Low-slope roofs (below 2/12) require special roofing systems such as modified bitumen, TPO, or EPDM membrane because shingles cannot reliably shed water at such shallow angles. Pitch also affects material quantity: a 12/12 pitch roof has 41% more surface area than the same footprint at flat, requiring proportionally more shingles, underlayment, and sheathing. The roof area multiplier converts plan-view area to actual surface area, saving contractors from costly underestimates.",
  nextSteps: [
    { label: "Roof Area Calculator", href: "/calculators/roofing/roof-area-calculator/" },
    { label: "Roof Slope Calculator", href: "/calculators/roofing/roof-slope-calculator/" },
    { label: "Roof Truss Calculator", href: "/calculators/roofing/truss-calculator/" },
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Use a pitch gauge or speed square placed on a rafter or truss tail to verify pitch before ordering materials.",
    "For inaccessible roofs, measure pitch from inside the attic by holding a level horizontally and measuring rise at 12 inches of run.",
    "When using a smartphone inclinometer app, place the phone directly on the roof surface or a rafter for the most accurate angle reading.",
    "Always verify pitch on multiple sections of the roof — dormers, additions, and garage roofs often have different pitches than the main roof.",
    "Convert pitch to the area multiplier before estimating materials — a steeper roof uses significantly more shingles, underlayment, and sheathing than the flat footprint suggests.",
  ],
  commonMistakes: [
    "Confusing rise and run — rise is vertical (up), run is horizontal (across). Swapping them gives the wrong pitch.",
    "Measuring along the slope instead of horizontally for the run — run must be the horizontal distance, not the rafter length.",
    "Assuming the entire roof has one pitch — many homes have multiple pitches across different sections.",
    "Using flat (plan-view) roof area for material estimates without applying the pitch multiplier — this leads to material shortages on steep roofs.",
    "Ignoring minimum pitch requirements for the chosen roofing material — asphalt shingles need at least 2/12, and standard installation requires 4/12 or greater.",
  ],
  faqs: [
    { question: "How do I calculate roof pitch?", answer: "Roof pitch is calculated by dividing the vertical rise by the horizontal run. For standard notation, measure how many inches the roof rises over 12 inches of horizontal run. For example, if the roof rises 6 inches over 12 inches of run, the pitch is 6/12. You can also express pitch as a degree angle using the formula: angle = arctan(rise / run)." },
    { question: "What pitch is my roof?", answer: "You can measure your roof pitch from outside using a level and tape measure on the roof surface, or from inside the attic by measuring along a rafter. Hold a level horizontally with one end touching the underside of a rafter, measure 12 inches along the level, then measure the vertical distance from the end of the level up to the rafter — that vertical distance in inches is your pitch per 12." },
    { question: "What is a 4/12 pitch in degrees?", answer: "A 4/12 roof pitch equals 18.4 degrees. This is considered a moderate low slope and is the minimum pitch recommended for standard asphalt shingle installation. At this angle, the roof is easy to walk on and sheds water adequately for most climates." },
    { question: "What is the minimum roof pitch for shingles?", answer: "The absolute minimum pitch for asphalt shingles is 2/12 (9.5°), but this requires special installation with double underlayment and sealant at every shingle tab. Standard shingle installation without special measures requires a minimum of 4/12 (18.4°). Below 2/12, you must use a low-slope roofing system such as rolled roofing, TPO, EPDM, or modified bitumen." },
    { question: "What roof pitch is best for snow?", answer: "A pitch of 6/12 (26.6°) or steeper is recommended in snowy climates to promote natural snow shedding. In heavy snow regions like the northern US and Canada, pitches of 8/12 to 12/12 are common. Steeper pitches reduce snow accumulation and the risk of ice dams, but they also increase construction cost and may require snow guards to prevent dangerous roof avalanches." },
    { question: "How does roof pitch affect cost?", answer: "Steeper pitches increase roofing costs in three ways: more material (a 12/12 pitch uses 41% more material than the flat footprint), higher labor rates (steep roofs require harnesses, roof jacks, and slower work), and more complex framing (longer rafters, stronger connections). The material increase is proportional to the area multiplier — for every 1,000 sq ft of footprint, a 6/12 pitch adds about 118 sq ft of actual roof surface compared to flat." },
    { question: "What is the roof area multiplier?", answer: "The roof area multiplier converts your flat (plan-view) roof area to actual sloped roof surface area. Multiply your footprint area by this factor to determine how much material you actually need. Common multipliers: 4/12 = 1.054, 6/12 = 1.118, 8/12 = 1.202, 10/12 = 1.302, 12/12 = 1.414. This multiplier is derived from the Pythagorean theorem: multiplier = sqrt(1 + (rise/run)²)." },
    { question: "Can I change my roof pitch?", answer: "Yes, but it is a major structural renovation. Changing roof pitch requires removing the existing roof, modifying or replacing the rafters or trusses, adjusting the ridge height, and potentially reinforcing the walls to handle different load angles. It typically costs $15,000 to $40,000+ depending on the size and complexity. It also requires a building permit and engineered plans." },
  ],
};

const roofAreaCalculator: CalculatorConfig = {
  fields: [
    { id: "length", label: "Roof Length", unit: "ft", placeholder: "40" },
    { id: "width", label: "Roof Width", unit: "ft", placeholder: "30" },
    { id: "pitch", label: "Pitch (rise per 12\" run)", unit: "/12", defaultValue: 6, placeholder: "6" },
    {
      id: "roofType",
      label: "Roof Type",
      type: "select",
      options: [
        { label: "Gable", value: "gable" },
        { label: "Hip", value: "hip" },
        { label: "Shed", value: "shed" },
      ],
    },
  ],
  calculate: (v) => {
    const r = calculateRoofArea(
      v.length as number,
      v.width as number,
      v.pitch as number,
      (v.roofType as "gable" | "hip" | "shed") || "gable"
    );
    return [
      { label: `Flat (plan-view) area: ${r.flatArea} sq ft` },
      { label: `Pitch multiplier: ${r.multiplier}` },
      { label: `Actual roof area: ${r.roofArea} sq ft` },
      { label: `Roofing squares: ${r.squares}` },
      { label: `Roof type: ${r.roofType}` },
    ];
  },
  disclaimer: "This calculator provides approximate values. Actual roof area may vary due to dormers, valleys, and irregular shapes. Always verify measurements on-site.",
  howToUse: [
    "Measure the length and width of your building footprint in feet — these are the flat, plan-view dimensions as seen from above.",
    "Enter the roof pitch as rise per 12 inches of run (e.g., 6 for a 6/12 pitch). If you do not know your pitch, use the Roof Pitch Calculator first.",
    "Select your roof type: Gable (two sloping sides), Hip (all four sides slope), or Shed (single slope).",
    "Click Calculate to get the actual roof surface area, roofing squares, and pitch multiplier.",
  ],
  materialInfo:
    "Roof area calculation is the foundation of every roofing material estimate. The most common mistake homeowners and even some contractors make is using the flat footprint area instead of the actual sloped surface area — this leads to significant material shortages, especially on steep roofs. The pitch multiplier converts flat area to true surface area using the Pythagorean theorem: multiplier = sqrt(1 + (pitch/12)²). For a standard 6/12 pitch, the multiplier is 1.118, meaning the actual roof area is about 12% larger than the footprint. At 12/12, the roof has 41% more surface area than the flat plan. Roofing materials are sold in 'squares,' where one square covers 100 square feet of roof surface. Asphalt shingles typically come in bundles of 3 per square, so a 2,400 sq ft roof needs 24 squares or 72 bundles. When ordering materials, always add 10-15% for waste from cuts, starter courses, ridge caps, and valleys. For hip roofs, add an additional 5% because hip ridges and valleys create more cut waste than a simple gable. Understanding your true roof area also helps you accurately estimate underlayment rolls, drip edge linear footage, and ice-and-water shield for eaves and valleys.",
  nextSteps: [
    { label: "Roof Sheathing Calculator", href: "/calculators/roofing/roof-sheathing-calculator/" },
    { label: "Shingle Calculator", href: "/calculators/roofing/shingle-calculator/" },
    { label: "Roof Pitch Calculator", href: "/calculators/roofing/roof-pitch-calculator/" },
  ],
  installationTips: [
    "Always measure roof dimensions from the eave to the ridge on the slope, not just the horizontal footprint — or use the pitch multiplier to convert.",
    "For complex roofs with multiple pitches, calculate each section separately and sum the areas for the total.",
    "When ordering shingles, round up to the nearest full square and add 10-15% for cuts and waste at hips, valleys, and edges.",
    "Verify your pitch measurement on each roof plane — additions and dormers frequently have different pitches than the main roof.",
    "For hip roofs, measure each triangular and trapezoidal section individually for the most accurate area estimate.",
  ],
  commonMistakes: [
    "Using the flat footprint area instead of the actual sloped roof area — this underestimates materials, especially on steep pitches.",
    "Forgetting to account for both sides of a gable roof — the footprint only shows one plane, but gable roofs have two sloped surfaces.",
    "Not adding waste factor — valleys, hips, and edges create cut waste that increases material needs by 10-15%.",
    "Confusing roofing squares with square feet — one square is 100 sq ft, so a 3,000 sq ft roof needs 30 squares, not 3,000.",
    "Ignoring dormers, chimneys, and other roof penetrations when calculating area — these add complexity and waste but reduce covered area slightly.",
  ],
  faqs: [
    { question: "How do I calculate roof area from the ground?", answer: "You can calculate roof area without climbing on the roof by measuring the building footprint (length × width) and multiplying by the pitch multiplier and the number of sloped sides. For a gable roof, multiply the footprint by the pitch multiplier and then by 2 (for both sides). Determine pitch from inside the attic using a level and tape measure, or use a smartphone inclinometer app from the ground aimed at the roof slope." },
    { question: "How many roofing squares do I need?", answer: "Divide your total actual roof area (not footprint) by 100 to get the number of squares. For example, a 2,800 sq ft roof area needs 28 squares. Add 10-15% for waste, bringing the order to 31-32 squares. Each square of standard 3-tab shingles requires 3 bundles, so 28 squares equals 84 bundles plus waste." },
    { question: "What is the roof area multiplier for a 6/12 pitch?", answer: "The pitch multiplier for a 6/12 roof is 1.118. This means a 1,000 sq ft footprint has an actual roof surface area of 1,118 sq ft per slope. For a gable roof (two sides), the total would be 2,236 sq ft. The multiplier is calculated as sqrt(1 + (6/12)²) = sqrt(1.25) = 1.118." },
    { question: "How do I calculate roof square footage for shingles?", answer: "First, determine your flat footprint area (length × width). Then multiply by the pitch multiplier for your roof slope. For a gable roof, multiply the result by 2 for both sides. Finally, add 10-15% for waste. Divide the total by 100 to convert to roofing squares. Each square requires 3 bundles of standard shingles." },
    { question: "What is the difference between roof area and floor area?", answer: "Floor area (or footprint) is the horizontal area of the building as viewed from above. Roof area is the actual surface area of the sloped roof, which is always larger than the footprint for any pitched roof. The steeper the pitch, the greater the difference. A 4/12 pitch adds about 5.4% more area, while a 12/12 pitch adds 41.4% more area compared to the flat footprint." },
    { question: "How do I calculate hip roof area?", answer: "A hip roof has four sloped sides instead of two. Calculate the footprint area, multiply by the pitch multiplier, and then multiply by approximately 2.1 (instead of 2 for a gable) to account for the additional hip ridge and valley areas. Alternatively, measure each triangular and trapezoidal section individually, calculate each area using geometry, and sum them. Hip roofs generate about 5% more waste from cuts at hips and valleys." },
  ],
};

const roofSlopeCalculator: CalculatorConfig = {
  fields: [
    { id: "rise", label: "Rise", unit: "in", placeholder: "6" },
    { id: "run", label: "Run", unit: "ft", placeholder: "4" },
  ],
  calculate: (v) => {
    const r = calculateRoofSlope(v.rise as number, v.run as number);
    return [
      { label: `Pitch: ${r.pitchRatio}` },
      { label: `Angle: ${r.angle}°` },
      { label: `Slope: ${r.slopePercent}%` },
      { label: `Material recommendation: ${r.materialRecommendation}` },
    ];
  },
  disclaimer: "This calculator provides approximate values. Actual roof slope may vary across sections. Verify measurements at multiple points and consult a roofing professional for material selection.",
  howToUse: [
    "Measure the vertical rise in inches — this is how many inches the roof goes up over the measured horizontal distance.",
    "Measure the horizontal run in feet — this is the flat, level distance you measured across (not along the slope).",
    "Click Calculate to get the pitch ratio (per 12 inches of run), angle in degrees, slope percentage, and material recommendation.",
    "Use the material recommendation to confirm your roofing material is appropriate for your roof's slope.",
  ],
  materialInfo:
    "Roof slope measurement is a critical first step before selecting roofing materials, because every roofing product has a minimum slope requirement set by the manufacturer and enforced by building codes. The slope is the ratio of vertical rise to horizontal run, and it directly determines how quickly water and snow shed from the roof surface. Flat and very low-slope roofs (below 2:12) require continuous membrane systems such as TPO (thermoplastic polyolefin), EPDM (ethylene propylene diene monomer), PVC, or built-up roofing (BUR) with multiple layers of bitumen and reinforcing fabric. These membrane systems create a watertight seal that does not rely on gravity to shed water. Low-slope roofs between 2:12 and 4:12 can use asphalt shingles, but only with special installation methods including double underlayment, additional sealant at every tab, and ice-and-water shield on the entire deck in cold climates. Standard asphalt shingles (3-tab and architectural) perform best on roofs with 4:12 to 8:12 pitch, where gravity effectively channels water off the surface. Steep-slope roofs above 8:12 benefit from heavyweight materials like concrete tile, clay tile, slate, or standing-seam metal panels that resist wind uplift and are mechanically fastened to handle the steep angle. Measuring your slope accurately — using a level, tape measure, and the rise-over-run method — ensures you select the right material and installation method for long-term performance.",
  nextSteps: [
    { label: "Roof Pitch Calculator", href: "/calculators/roofing/roof-pitch-calculator/" },
    { label: "Roof Area Calculator", href: "/calculators/roofing/roof-area-calculator/" },
  ],
  installationTips: [
    "Use a 2-foot or 4-foot level and a tape measure for the most accurate slope measurement — longer levels reduce error from surface irregularities.",
    "Measure from inside the attic along a rafter if the roof surface is inaccessible — place the level horizontal and measure the vertical drop at a known horizontal distance.",
    "A smartphone inclinometer app can give a quick angle reading, but verify with a manual measurement for material ordering decisions.",
    "Check slope at multiple locations — the main roof, garage, dormers, and additions often have different slopes.",
    "Record the rise in inches and the run in feet (or inches) clearly to avoid unit conversion errors when communicating with suppliers.",
  ],
  commonMistakes: [
    "Measuring along the slope instead of horizontally for the run — run must always be the horizontal, level distance.",
    "Confusing slope percentage with pitch ratio — a 50% slope equals a 6:12 pitch, not a 6% slope.",
    "Assuming one measurement applies to the entire roof — multi-section roofs commonly have two or more different slopes.",
    "Using shingles on a roof below the minimum 2:12 slope — this violates building code and will likely cause leaks.",
    "Measuring rise and run in different units (e.g., rise in centimeters and run in feet) and not converting before calculating.",
  ],
  faqs: [
    { question: "How do I measure roof slope from the ground?", answer: "Stand back from the building and use a smartphone inclinometer app aimed at the roof edge to get an approximate angle. For a more precise measurement, go into the attic and measure along a rafter: hold a level horizontally with one end touching the rafter, measure out a known horizontal distance (like 4 feet), then measure the vertical drop from the level to the rafter at that point. Divide the rise (in inches) by the run (in feet) and multiply by 12 to get the pitch per 12 inches." },
    { question: "What is the difference between roof slope and roof pitch?", answer: "In modern construction, the terms are often used interchangeably. Technically, slope is the ratio of rise to run for one side of the roof (e.g., 6:12), while traditional pitch is the ratio of rise to the full span (total width). A roof with a 6:12 slope on each side has a pitch of 6:24, or 1/4. However, in everyday use, most builders say 'pitch' when they mean slope, referring to the rise per 12 inches of run." },
    { question: "What roof slope do I need for asphalt shingles?", answer: "Standard asphalt shingles require a minimum slope of 4:12 (18.4°) for normal installation. Between 2:12 and 4:12, shingles can be used but require special low-slope installation with double underlayment, sealant at every course, and full ice-and-water shield on the deck. Below 2:12, shingles should not be used — switch to a membrane system like TPO, EPDM, or modified bitumen." },
    { question: "How do I convert roof slope to degrees?", answer: "To convert a slope ratio to degrees, use the arctangent function: degrees = arctan(rise / run) × (180 / π). For a 6:12 slope: degrees = arctan(6/12) × 57.296 = arctan(0.5) × 57.296 = 26.57° ≈ 26.6°. Common conversions: 4:12 = 18.4°, 6:12 = 26.6°, 8:12 = 33.7°, 10:12 = 39.8°, 12:12 = 45°." },
    { question: "What tools do I need to measure roof slope?", answer: "The basic tools are a 2-foot or 4-foot carpenter's level and a tape measure. Place the level horizontal against a rafter or the roof surface, measure out 12 inches along the level, then measure the vertical distance from the end of the level to the roof — that vertical distance in inches is your slope per 12. Digital angle finders and smartphone inclinometer apps provide quick readings but should be verified with a manual measurement." },
    { question: "What roofing material is best for low-slope roofs?", answer: "For roofs below 2:12, TPO (thermoplastic polyolefin) and EPDM (rubber membrane) are the most popular options. TPO is white, energy-efficient, and heat-welded at seams for a watertight bond. EPDM is a black rubber sheet glued or mechanically attached. Modified bitumen is another option, applied in rolls with a torch or adhesive. For 2:12 to 4:12 slopes, architectural shingles with proper low-slope installation can work, but membrane systems are more reliable." },
  ],
};

// ─── EXTERIOR SHELL ─────────────────────────────────────────────────────────

const housewrapCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Total Wall Area", unit: "sq ft", placeholder: "2000" },
    { id: "rollCoverage", label: "Roll Coverage", unit: "sq ft", defaultValue: 1000 },
  ],
  calculate: (v) => {
    const r = calculateHousewrap(v.wallArea as number, v.rollCoverage as number);
    return [{ label: r.label }];
  },
  disclaimer: "Add 15% for overlaps, waste, and windows.",
  howToUse: [
    "Calculate total exterior wall area (perimeter × height).",
    "Enter roll coverage (standard Tyvek HomeWrap = 1000 sq ft/roll).",
    "Click Calculate.",
  ],
  materialInfo:
    "Housewrap is a synthetic weather-resistant barrier (WRB) installed over wall sheathing and behind siding to protect the building from bulk water infiltration while allowing water vapor to escape from inside the wall cavity. DuPont Tyvek HomeWrap is the most widely recognized brand, but other options include Tyvek DrainWrap (with built-in drainage channels), Henry Blueskin VP100 (self-adhered), and ZIP System sheathing tape (integrated WRB). Standard housewrap comes in 9-foot by 100-foot or 150-foot rolls covering 900 to 1,500 sq ft per roll, priced at $100 to $200 per roll. The key performance metrics are water holdout (resistance to liquid water penetration) and vapor permeance (ability to let moisture vapor pass through). All seams, penetrations, and window/door openings must be sealed with manufacturer-compatible tape. Housewrap must not be left exposed to UV for more than 90 to 120 days, as sunlight degrades its performance.",
  nextSteps: [
    { label: "Vinyl Siding Calculator", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Hardie Plank Siding Calculator", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
    { label: "Window Flashing Calculator", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Start at the bottom, working upward. Overlap horizontal seams 6\" minimum.",
    "Tape all seams, penetrations, and window openings with compatible flashing tape.",
    "Install windows and doors before cutting holes in housewrap.",
  ],
  commonMistakes: [
    "Not taping seams — most air infiltration occurs at seams and penetrations.",
    "Installing upside down — Tyvek is directional.",
    "Leaving housewrap exposed to UV for more than 90 days (degrades performance).",
  ],
  faqs: [
    { question: "Is housewrap required by code?", answer: "Yes. The IRC requires a water-resistive barrier (WRB) on all exterior walls behind siding. Housewrap (Tyvek, etc.), asphalt-impregnated building paper, or self-adhered membranes all satisfy this requirement. The WRB is your primary defense against wind-driven rain penetrating the wall cavity." },
    { question: "Can I use felt paper instead of housewrap?", answer: "Yes, #15 asphalt-impregnated building paper (tar paper) is still code-compliant as a WRB. However, synthetic housewraps outperform felt in most metrics: they are lighter, stronger, more vapor-permeable, and can withstand longer UV exposure. Felt remains popular in stucco and stone veneer applications where two layers are traditionally specified." },
    { question: "How many rolls of housewrap do I need?", answer: "Divide your total exterior wall area (perimeter times wall height) by the roll coverage (typically 1,000 sq ft for standard Tyvek rolls). Add 15% for horizontal and vertical overlaps, window and door wrapping, and waste. A 2,000 sq ft wall area typically requires 2 to 3 rolls." },
    { question: "What tape should I use for housewrap seams?", answer: "Always use tape recommended by the housewrap manufacturer — Tyvek tape for Tyvek, for example. Contractor sheathing tape (Zip, 3M 8067, or similar) also works on most WRB products. Do not use duct tape, masking tape, or standard packing tape, as these will fail quickly and compromise the air and water barrier." },
    { question: "Does housewrap go over or under window flashing?", answer: "The housewrap is cut at window and door openings in a specific sequence. The sill flashing goes over the housewrap at the bottom, the jamb flashing overlaps the sill flashing, and the head flap of the housewrap laps over the top flashing to create a shingle-lap water management system. Incorrect sequencing is the number one cause of window leaks." },
    { question: "How long can housewrap be left exposed before siding?", answer: "Most housewrap products, including Tyvek HomeWrap, can be left exposed for up to 120 days (4 months) before UV degradation reduces performance. Some premium products offer 6 to 12 month UV exposure ratings. Plan to install siding within the manufacturer's specified timeframe to maintain warranty coverage." },
  ],
};

const vinylSidingCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Total Wall Area", unit: "sq ft", placeholder: "2000" },
  ],
  calculate: (v) => {
    const r = calculateVinylSiding(v.wallArea as number);
    const withWaste = Math.ceil((v.wallArea as number) / 2 * 1.1);
    return [
      { label: `${r.panels} vinyl siding panels (net)` },
      { label: `${withWaste} panels with 10% waste factor` },
    ];
  },
  disclaimer: "Deduct door and window areas for a more accurate count.",
  howToUse: [
    "Calculate gross wall area (perimeter × height).",
    "Subtract door and window areas.",
    "Click Calculate.",
  ],
  materialInfo:
    "Vinyl siding is a PVC-based exterior cladding available in a wide range of profiles, colors, and textures. Common profiles include Dutch Lap (beveled overlap), clapboard (horizontal lap), board-and-batten (vertical), and shake/shingle styles. Standard panels are 12 to 12.5 feet long with a 4 to 5-inch exposed face, yielding approximately 2 sq ft of wall coverage per linear foot of panel. Vinyl siding is sold by the square (100 sq ft) or by the carton (typically 200 sq ft per carton). Prices range from $60 to $100 per square for basic siding to $150 to $250 per square for premium insulated or architectural-grade products. Insulated vinyl siding has a foam backer that adds R-2 to R-5 insulation and creates a flatter, more rigid panel. Accessories include J-channel, F-channel, utility trim, starter strip, inside and outside corner posts, and soffit panels, which can add 20-30% to the total material cost.",
  nextSteps: [
    { label: "Housewrap Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Window Flashing Calculator", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Install on a flat, plumb substrate.",
    "Leave 1/4\" gaps at all trim for thermal expansion.",
    "Do not face-nail vinyl — use the nail slot.",
    "Work from bottom to top, overlapping courses.",
  ],
  commonMistakes: [
    "Face-nailing vinyl — it will buckle in summer heat.",
    "Not leaving expansion gaps at trim — causes buckling.",
    "Installing in very cold weather — vinyl becomes brittle.",
  ],
  faqs: [
    { question: "How do I calculate how much vinyl siding I need?", answer: "Measure the total exterior wall area (perimeter times wall height), subtract door and window areas, divide by 100 to get roofing squares, and add 10% for waste. A house with 2,000 sq ft of net wall area needs about 22 squares. Remember to also calculate the accessory trim pieces (J-channel, corner posts, starter strip) separately." },
    { question: "How much does vinyl siding cost for a whole house?", answer: "For a typical 1,500 sq ft home, vinyl siding materials (panels plus all trim accessories) cost $2,000 to $5,000 for standard grade or $4,000 to $8,000 for premium insulated siding. Professional installation adds $3,000 to $7,000. The total installed cost is usually $5,000 to $15,000 depending on quality and complexity." },
    { question: "Can I install vinyl siding over existing siding?", answer: "Yes, vinyl siding can be installed over old wood clapboard, aluminum siding, or even stucco using furring strips to create a flat, plumb substrate. However, you should address any rot or moisture issues in the existing wall before covering it. Many contractors prefer to remove old siding for a better installation." },
    { question: "How long does vinyl siding last?", answer: "Quality vinyl siding typically lasts 20 to 40 years depending on the grade and climate. Premium brands carry lifetime limited warranties. Vinyl does not rot, peel, or require painting, but it can crack in extreme cold, warp in extreme heat, and fade over time. Darker colors tend to fade faster than lighter shades." },
    { question: "What is the difference between insulated and non-insulated vinyl siding?", answer: "Insulated vinyl siding has a contoured foam backer bonded to the back of each panel, typically adding R-2 to R-5 of insulation value. The foam also makes the panel more rigid, reduces noise, and creates a flatter appearance. Insulated panels cost 30-50% more than standard panels but can improve a home's energy efficiency." },
    { question: "Do I need special tools to install vinyl siding?", answer: "Basic vinyl siding installation requires a circular saw with a fine-tooth blade (reversed for cutting vinyl), tin snips, a snap lock punch, a nail slot punch, and a zip tool for removing and reinstalling panels. A vinyl siding brake for bending aluminum trim is also very helpful. All tools are inexpensive and available at home improvement stores." },
  ],
};

const hardieSidingCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Total Wall Area", unit: "sq ft", placeholder: "2000" },
  ],
  calculate: (v) => {
    const r = calculateHardieSiding(v.wallArea as number);
    const withWaste = Math.ceil((v.wallArea as number) / 1.17 * 1.1);
    return [
      { label: r.label },
      { label: `${withWaste} boards with 10% waste factor` },
    ];
  },
  disclaimer: "Add 10% waste. HardiePlank 5/4x6 at 4\" exposure = ~1.17 sq ft per linear foot.",
  howToUse: [
    "Calculate wall area.",
    "Click Calculate.",
  ],
  materialInfo:
    "HardiePlank (James Hardie fiber cement siding) is a lap siding made from a mixture of cement, sand, and cellulose fiber. Standard HardiePlank boards are 12 feet long and 6.25 inches wide with a 5-inch exposed face, covering approximately 1.17 sq ft per linear foot at 4-inch exposure. Fiber cement siding is fire-resistant (non-combustible), insect-resistant, rot-proof, and dimensionally stable — it does not expand and contract with temperature changes like vinyl or wood. HardiePlank is available in smooth or woodgrain textures, factory pre-primed or factory pre-painted (ColorPlus Technology) in dozens of colors. Pricing ranges from $1.00 to $1.50 per sq ft for primed boards and $1.50 to $2.50 for pre-painted. HardiePlank carries a 30-year non-prorated limited warranty when properly installed. Related products include HardiePanel (4x8 vertical sheets), HardieShingle (shake-style panels), and HardieTrim (trim boards). Fiber cement is heavier than vinyl (about 2.5 lbs per sq ft) and requires specific cutting tools to manage silica dust.",
  nextSteps: [
    { label: "Housewrap Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Window Flashing Calculator", href: "/calculators/exterior-shell/window-flashing-calculator/" },
  ],
  installationTips: [
    "Use fiber cement specific nails (hot-dipped galvanized or stainless).",
    "Paint cut ends with matching touch-up paint.",
    "Maintain 6\" clearance from grade and 1\" from finished grade.",
    "Use a fiber cement shear blade to reduce dust.",
  ],
  commonMistakes: [
    "Using regular nails — corrosion causes staining.",
    "Not sealing cut ends.",
    "Installing without back-priming in high-moisture areas.",
  ],
  faqs: [
    { question: "How long does Hardie siding last?", answer: "HardiePlank carries a 30-year non-prorated limited warranty and commonly lasts 50 or more years when properly painted and maintained. The fiber cement material does not rot, warp, or attract insects. Repainting every 10 to 15 years is the main maintenance requirement." },
    { question: "Can I install Hardie siding myself?", answer: "Yes, but fiber cement is approximately 3 times heavier than vinyl siding and requires specific tools for cutting (fiber cement shear or circular saw with a polycrystalline diamond blade). You must wear an N95 respirator when cutting to protect against silica dust. Most homeowners hire professional installers, but experienced DIYers with a helper can complete the project." },
    { question: "How much does Hardie siding cost installed?", answer: "Materials cost $1.00 to $2.50 per sq ft depending on finish (primed vs. factory-painted). Professional installation adds $3 to $6 per sq ft. For a 2,000 sq ft home, total installed cost typically ranges from $10,000 to $20,000. Factory-painted ColorPlus boards cost more upfront but eliminate the need for on-site painting, saving labor." },
    { question: "What nails should I use for Hardie siding?", answer: "James Hardie recommends stainless steel or hot-dipped galvanized siding nails. Blind nailing (through the top of the board, hidden by the overlapping course above) is preferred. Nails should penetrate at least 1.25 inches into the studs. Do not use electro-galvanized nails, as they will corrode and leave rust stains." },
    { question: "Hardie siding vs. vinyl siding — which is better?", answer: "Hardie fiber cement siding is more durable, fire-resistant, and has a more authentic wood-like appearance than vinyl. However, it costs 2 to 3 times more installed and is significantly heavier. Vinyl is less expensive, lighter, and easier to install but can crack in cold weather, warp in heat, and lacks the premium appearance of fiber cement." },
    { question: "Does Hardie siding need to be painted?", answer: "Primed HardiePlank must be painted with 100% acrylic latex paint within 180 days of installation. Factory-painted ColorPlus boards come with a baked-on finish and a 15-year paint warranty. Both options need repainting every 10 to 15 years, though ColorPlus finishes tend to last longer due to the factory application process." },
  ],
};

const windowFlashingCalculator: CalculatorConfig = {
  fields: [
    { id: "windows", label: "Number of Windows", unit: "count", placeholder: "8", step: 1 },
    { id: "windowPerimeter", label: "Avg. Window Perimeter", unit: "ft", defaultValue: 14 },
  ],
  calculate: (v) => {
    const r = calculateWindowFlashing(v.windows as number, v.windowPerimeter as number);
    return [{ label: r.label }];
  },
  disclaimer: "Window flashing tape is typically 4\" or 6\" wide. Order in rolls.",
  howToUse: [
    "Count total number of windows.",
    "Enter average window perimeter (typical 3×4 window = ~14 ft).",
    "Click Calculate.",
  ],
  materialInfo:
    "Window flashing tape is a self-adhered flexible membrane used to seal the rough opening around windows and doors, creating a waterproof connection between the window frame and the housewrap or WRB. Common products include DuPont FlexWrap NF (flexible, follows corners), Henry Blueskin TWF (straight runs), 3M All Weather Flashing Tape, and ZIP System stretch tape. Flashing tape comes in widths of 4, 6, and 9 inches, with 4-inch being standard for most window installations and 6-inch or 9-inch for sill pans and wider applications. Rolls are typically 75 feet long and cost $25 to $60 depending on width and brand. The installation sequence is critical: sill flashing is applied first (with a back-dam fold), then jamb flashing overlapping the sill tape, and finally the housewrap head flap is lapped over the top to create a shingle-lap drainage system. Improper flashing is the leading cause of window leaks and wall rot in residential construction.",
  nextSteps: [
    { label: "Housewrap Calculator", href: "/calculators/exterior-shell/housewrap-calculator/" },
    { label: "Vinyl Siding Calculator", href: "/calculators/exterior-shell/vinyl-siding-calculator/" },
    { label: "Hardie Plank Siding Calculator", href: "/calculators/exterior-shell/hardie-siding-calculator/" },
  ],
  installationTips: [
    "Install sill flashing first with a back-dam fold.",
    "Lap jamb flashing over sill flashing.",
    "Lap head flashing (headband) over housewrap.",
    "Use a J-roller to firmly embed tape.",
  ],
  commonMistakes: [
    "Installing in wrong order (head flashing must lap over housewrap).",
    "Not using a J-roller — adhesion is critical.",
    "Skipping the sill flashing — most window leaks start at the sill.",
  ],
  faqs: [
    { question: "What type of window flashing tape should I use?", answer: "Self-adhered flashing tapes like DuPont FlexWrap NF, Henry Blueskin TWF, or 3M All Weather Flashing Tape are the most widely used. Choose a product compatible with your housewrap manufacturer — Tyvek FlexWrap for Tyvek housewrap, for example. For sill pans and corners, use a flexible (stretch) tape that conforms to 90-degree angles." },
    { question: "How much window flashing tape do I need?", answer: "Calculate the total perimeter of all windows and doors (add the width plus height times two for each opening). A standard 3x4 ft window has about 14 feet of perimeter. For 8 windows, that is 112 linear feet of tape. Add 20% for overlaps and waste, and buy the appropriate number of 75-foot rolls." },
    { question: "What is the correct order for installing window flashing?", answer: "Always install in this exact sequence: (1) sill flashing across the bottom with a back-dam fold, (2) jamb flashing on both sides overlapping the sill tape, (3) set the window, (4) lap the housewrap head flap over the top of the window flange. Never tape the bottom flange of the window — leave it open for drainage." },
    { question: "Do I need window flashing tape with a flanged window?", answer: "Yes. Even nailing-flange windows need proper flashing tape to seal the gap between the window flange and the housewrap or sheathing. The flange alone does not create a waterproof seal — flashing tape is required to integrate the window into the wall's water management system." },
    { question: "What causes window leaks in new construction?", answer: "The number one cause of window leaks is improper flashing installation — specifically, incorrect layering sequence that traps water behind the WRB instead of directing it outward. Other common causes include missing sill pan flashing, failing to use a back-dam at the sill, and sealing the bottom window flange (which prevents drainage)." },
    { question: "Can I use caulk instead of flashing tape around windows?", answer: "Caulk alone is not an acceptable substitute for proper window flashing. Caulk can crack, shrink, or fail within a few years, while quality flashing tape maintains its seal for decades. Use flashing tape as the primary waterproofing method and supplement with a compatible sealant at specific joints if recommended by the window manufacturer." },
  ],
};

// ─── INSULATION & DRYWALL ────────────────────────────────────────────────────

const cavityInsulationCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Wall/Ceiling Area", unit: "sq ft", placeholder: "1200" },
  ],
  calculate: (v) => {
    const r = calculateCavityInsulation(v.wallArea as number);
    const withWaste = Math.ceil(r.batts * 1.1);
    return [
      { label: r.label },
      { label: `${withWaste} batts with 10% waste` },
    ];
  },
  disclaimer: "Batt coverage varies by product. Verify sq ft/batt on package label.",
  howToUse: [
    "Measure total wall or ceiling area to be insulated.",
    "Click Calculate.",
  ],
  materialInfo:
    "Cavity insulation fills the space between studs, joists, or rafters to slow heat transfer through the building envelope. The two most common batt insulation materials are fiberglass (Owens Corning, Johns Manville, Knauf) and mineral wool (Rockwool). Standard R-values for common wall cavities are: R-13 or R-15 for 2x4 walls (3.5-inch cavity), R-19 or R-21 for 2x6 walls (5.5-inch cavity), and R-30 to R-38 for floor and ceiling cavities. Attic insulation requirements range from R-38 in mild climate zones to R-60 in cold zones (5-8). Fiberglass batts are the least expensive option at $0.50 to $1.00 per sq ft, while mineral wool batts cost $1.00 to $1.50 per sq ft but offer better soundproofing, fire resistance (non-combustible), and moisture resistance. Batts are available in 15-inch widths for 16-inch framing and 23-inch widths for 24-inch framing. Spray foam insulation is an alternative that fills cavities completely and air-seals simultaneously but costs 2 to 4 times more than batts.",
  nextSteps: [
    { label: "Drywall Sheet Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Exterior Sheathing Calculator", href: "/calculators/wall-framing/exterior-sheathing-calculator/" },
  ],
  installationTips: [
    "Fill cavities completely — compressed or gapped insulation loses R-value.",
    "Do not leave gaps around electrical boxes and pipes.",
    "Wear a respirator when handling fiberglass batts.",
  ],
  commonMistakes: [
    "Compressing batts — compression significantly reduces R-value.",
    "Leaving air gaps at top plates and bottom plates.",
    "Not installing vapor retarder in cold climates.",
  ],
  faqs: [
    { question: "What R-value do I need for exterior walls?", answer: "The IRC prescriptive requirements vary by climate zone: R-13 for zones 1-3 (southern US), R-20 or R-13 plus R-5 continuous insulation for zone 4, and R-20 or R-21 for zones 5-8 (northern US and Canada). Many states adopt the IECC energy code, which may require higher values. Check the energy code for your specific zip code." },
    { question: "Fiberglass vs. mineral wool batts — which is better?", answer: "Mineral wool (Rockwool) is denser, provides better soundproofing (STC 45+ vs. STC 35 for fiberglass), is non-combustible (melting point above 2,000 degrees F), and resists moisture without losing R-value. Fiberglass is 30-40% less expensive and lighter to handle. Both provide approximately R-3.2 to R-3.8 per inch of thickness." },
    { question: "How many batts of insulation do I need?", answer: "Divide the total wall or ceiling area by the coverage per batt (check the package label — a standard 15-inch by 93-inch fiberglass batt covers about 40 sq ft per bag of 10 batts). For 1,200 sq ft of wall area, you need about 30 bags. Add 10% for waste from cutting around outlets, pipes, and irregular framing." },
    { question: "Can I use R-13 insulation in a 2x6 wall?", answer: "You can, but it would leave a 2-inch air gap in the cavity and would not meet energy code requirements in most climate zones. The R-13 batt is designed for 2x4 walls (3.5-inch cavity). For 2x6 walls, use R-19 or R-21 batts that fill the full 5.5-inch cavity depth." },
    { question: "Do I need a vapor barrier with insulation?", answer: "In cold climates (zones 5-8), a Class I or Class II vapor retarder (kraft-faced batts or a separate polyethylene sheet) is required on the warm side of the insulation to prevent moisture from condensing inside the wall. In warm, humid climates (zones 1-3), a vapor retarder is generally not recommended on the interior side, as it can trap moisture inside the wall." },
    { question: "What R-value insulation do I need for my attic?", answer: "Attic insulation requirements are the highest in the home because heat rises and the attic is the primary heat loss pathway. The IECC recommends R-38 for zones 1-3, R-49 for zones 4-5, and R-60 for zones 6-8. Many homeowners install blown-in fiberglass or cellulose over existing batts to reach the target R-value." },
  ],
};

const drywallCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Total Wall & Ceiling Area", unit: "sq ft", placeholder: "2400" },
    {
      id: "thickness",
      label: "Drywall Thickness",
      type: "select",
      options: [
        { label: "1/2\" — standard walls", value: "half" },
        { label: "5/8\" — ceilings / fire-rated", value: "five-eighths" },
      ],
      defaultValue: "half",
    },
  ],
  calculate: (v) => {
    const r = calculateSheetrock(v.wallArea as number);
    const screws = calculateDrywallScrews(r.sheets);
    const compound = calculateJointCompound(r.sheets);
    return [
      { label: `${r.sheets} sheets of ${v.thickness === "half" ? "1/2\"" : "5/8\""} drywall (4x8)` },
      { label: `With 10% waste: ${Math.ceil(r.sheets * 1.1)} sheets` },
      { label: screws.label },
      { label: compound.label },
    ];
  },
  disclaimer: "Subtract door and window areas. Add 10% for waste and breakage.",
  howToUse: [
    "Add up all wall square footage plus ceiling square footage.",
    "Select drywall thickness.",
    "Click Calculate — get sheets, screws, and joint compound.",
  ],
  materialInfo:
    "Drywall (also called gypsum board, wallboard, or by the brand name Sheetrock) is the standard interior wall and ceiling finish material. Sheets are 4 feet wide and come in 8, 10, and 12-foot lengths, with 4x8 (32 sq ft) being the most common. Standard 1/2-inch drywall is used for walls, while 5/8-inch Type X (fire-rated) is required for garage-to-house walls, ceilings below livable space, and many multi-family assemblies. Lightweight drywall (UltraLight by GP, LightRock by CertainTeed) weighs 20-25% less than standard boards and is much easier to handle on ceilings. Moisture-resistant drywall (green board or purple board) is used in bathrooms and kitchens. Cement board (Durock, Hardiebacker) is required behind tile in wet areas like showers. Standard 1/2-inch 4x8 sheets cost $10 to $15 each, while 5/8-inch Type X costs $13 to $18 each. Longer sheets (4x12) reduce the number of end joints but are heavier and harder to handle.",
  nextSteps: [
    { label: "Drywall Screw Calculator", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Joint Compound Calculator", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
  ],
  installationTips: [
    "Hang ceilings first, then walls.",
    "Stagger joints — no H-joints.",
    "Use 1-1/4\" screws for walls, 1-5/8\" for ceilings.",
    "Drive screws dimple-deep but do not break paper.",
  ],
  commonMistakes: [
    "Not staggering joints — H-joints crack.",
    "Over-driving screws and breaking the paper face.",
    "Running boards parallel to joists on ceilings — perpendicular reduces sag.",
    "Skipping the mechanical room wall — always drywall even in unfinished areas.",
  ],
  faqs: [
    { question: "How many screws per sheet of drywall?", answer: "Plan for approximately 28 to 32 screws per 4x8 sheet. Screws are placed into each stud the sheet crosses — every 8 inches on panel edges and every 12 inches in the field (interior of the panel). Ceiling sheets require screws every 7 to 8 inches on all framing members." },
    { question: "How much joint compound do I need?", answer: "Plan for approximately one 4.5-gallon bucket of all-purpose joint compound per 15 to 16 sheets of drywall, applied over three coats (tape coat, fill coat, finish coat). A 75-sheet job needs about 5 buckets. If you are texturing the walls, add 50% more compound for the texture application." },
    { question: "Should I use screws or nails for drywall?", answer: "Drywall screws are strongly preferred over nails. They provide better holding power, do not pop out over time like nails, and are required by most modern building codes. Use a drywall screw gun or a drill with a dimpler bit to set each screw to the correct depth automatically without breaking the paper face." },
    { question: "How many sheets of drywall do I need for a room?", answer: "Measure the total wall area (perimeter times ceiling height) plus the ceiling area (length times width). Divide the sum by 32 sq ft per 4x8 sheet and add 10% for waste. A 12x14 ft room with 8-ft ceilings has about 584 sq ft of surface area (416 wall + 168 ceiling), requiring 19 sheets plus 2 extra for waste." },
    { question: "What is the difference between 1/2-inch and 5/8-inch drywall?", answer: "Standard 1/2-inch drywall is used for most walls and non-fire-rated ceilings. 5/8-inch Type X drywall is fire-rated (1-hour fire resistance in a standard assembly) and is required by code for garage-to-house separation walls, ceilings below habitable attic space, and shared walls in townhomes and multi-family buildings. Type X is also stiffer and sag-resistant on ceilings." },
    { question: "Do I need moisture-resistant drywall in bathrooms?", answer: "Standard drywall is acceptable on bathroom walls and ceilings that will be painted. However, moisture-resistant drywall (green board or mold-resistant purple board) is recommended for bathroom walls. Behind tile in tub and shower surrounds, use cement backer board (Durock, Hardiebacker) — never use standard or green board drywall in wet areas." },
  ],
};

const drywallScrewCalculator: CalculatorConfig = {
  fields: [
    { id: "sheets", label: "Number of Drywall Sheets", unit: "count", placeholder: "75", step: 1 },
  ],
  calculate: (v) => {
    const r = calculateDrywallScrews(v.sheets as number);
    return [{ label: r.label }];
  },
  disclaimer: WASTE_DISCLAIMER,
  howToUse: [
    "Enter total number of drywall sheets.",
    "Click Calculate.",
  ],
  materialInfo:
    "Drywall screws are specially designed fasteners with a bugle head that sits flush with the drywall surface without tearing the paper face. Two thread types are available: coarse-thread for wood framing (by far the most common in residential construction) and fine-thread for metal stud framing. Standard lengths are 1-1/4 inches for 1/2-inch drywall on walls, 1-5/8 inches for 5/8-inch drywall and for ceiling applications (the extra length provides better holding power against gravity), and 3 inches for double-layer drywall assemblies. Screws are sold in 1-pound boxes (roughly 150 screws), 5-pound boxes, and 25-pound buckets. A 1-pound box costs $5 to $8, while 25-pound buckets run $30 to $50 and are the most economical for large jobs. Phillips head is standard, but square-drive (Robertson) screws are gaining popularity for their better bit engagement. Always use an auto-feed screw gun or a standard drill with a dimple (depth-setting) bit for consistent screw depth.",
  nextSteps: [
    { label: "Drywall Sheet Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Joint Compound Calculator", href: "/calculators/insulation-drywall/joint-compound-calculator/" },
  ],
  installationTips: [
    "Use an auto-feed screw gun or a dimpler bit on a standard drill.",
    "Screws should dimple 1/32\" without breaking the paper.",
  ],
  commonMistakes: [
    "Using drywall nails instead of screws — pops are common.",
    "Using the wrong thread — coarse-thread required for wood framing.",
  ],
  faqs: [
    { question: "What size drywall screws do I need?", answer: "Use 1-1/4 inch screws for 1/2-inch drywall on walls, 1-5/8 inch screws for 5/8-inch drywall and all ceiling applications (the extra length prevents ceiling panels from sagging off the screws), and 3-inch screws for double-layer drywall installations. The screw must penetrate at least 5/8 inch into the wood framing." },
    { question: "How many drywall screws do I need per sheet?", answer: "Plan for 28 to 32 screws per 4x8 sheet of drywall. Screws go into every stud the panel crosses, spaced 8 inches apart on edges and 12 inches apart in the field. Ceiling sheets require closer spacing (every 7 to 8 inches on all framing members) due to gravity loads." },
    { question: "Coarse-thread vs. fine-thread drywall screws — which do I need?", answer: "Use coarse-thread screws for wood stud framing, which is the standard in most residential construction. Fine-thread screws are designed for metal stud framing — the tighter thread pitch grips the thin metal without stripping. Using fine-thread on wood studs results in weaker holding power." },
    { question: "How many pounds of drywall screws should I buy?", answer: "A 1-pound box contains approximately 150 screws (1-1/4 inch size). At 30 screws per sheet, one pound covers about 5 sheets. For a 75-sheet job, you need about 15 pounds of screws. Buy a 25-pound bucket for the best price per screw and to have extras on hand." },
    { question: "What happens if I drive drywall screws too deep?", answer: "Over-driven screws break through the paper face of the drywall, which eliminates the holding power (the paper face is what keeps the screw from pulling through). Each over-driven screw must have an additional screw placed 2 inches away. Use a dimple bit or auto-feed screw gun to set consistent depth." },
    { question: "Can I use drywall nails instead of screws?", answer: "Drywall nails are still code-compliant but are rarely used in modern construction because they tend to pop out over time as the framing lumber dries and shrinks. Nail pops create visible bumps in the wall surface that require repair. Screws provide far superior long-term holding power and are the industry standard." },
  ],
};

const jointCompoundCalculator: CalculatorConfig = {
  fields: [
    { id: "sheets", label: "Number of Drywall Sheets", unit: "count", placeholder: "75", step: 1 },
  ],
  calculate: (v) => {
    const r = calculateJointCompound(v.sheets as number);
    return [
      { label: r.label },
      { label: `Approximately ${Math.ceil(r.buckets * 1.2)} buckets with extra for texture` },
    ];
  },
  disclaimer: "Textured finishes require more compound. Budget extra.",
  howToUse: [
    "Enter number of drywall sheets.",
    "Click Calculate.",
  ],
  materialInfo:
    "Joint compound (also called mud) is the plaster-like material used to embed drywall tape over joints, fill screw holes, and create a smooth finish surface ready for paint. The main types are: all-purpose (premixed, ready to use, good for all coats), lightweight all-purpose (easier to sand, preferred for finish coats), topping compound (thinner, designed specifically for final coats), and setting-type compound (powder mixed with water, sets by chemical reaction and is very hard — good for tape coats and repairs). A standard 4.5-gallon bucket of premixed compound covers approximately 15 to 16 sheets of drywall over three coats (tape, fill, finish). Buckets cost $12 to $18 each. For large jobs, buy compound in 5-gallon boxes which are easier to load into a mud pan. Setting-type compounds (like Durabond or Easy Sand) come in 18-pound and 45-pound bags and are available in set times from 5 minutes to 90 minutes. Joint tape (paper or mesh) is used with the first coat to reinforce the joints.",
  nextSteps: [
    { label: "Drywall Sheet Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
    { label: "Drywall Screw Calculator", href: "/calculators/insulation-drywall/drywall-screw-calculator/" },
    { label: "Paint Coverage Calculator", href: "/calculators/finishing/paint-coverage-calculator/" },
  ],
  installationTips: [
    "Apply 3 coats: tape coat, second coat (thin out), finish coat.",
    "Sand between coats when fully dry.",
    "Use lightweight compound for final coat for easier sanding.",
  ],
  commonMistakes: [
    "Applying compound too thick — causes cracking.",
    "Not waiting for full dry between coats.",
    "Using setting-type compound for finish coat — too hard to sand.",
  ],
  faqs: [
    { question: "What is the difference between all-purpose and lightweight compound?", answer: "All-purpose compound is denser, stronger, and better for the first tape coat where bond strength matters. Lightweight compound is 25-35% lighter, easier to sand, and better for second and third (finish) coats. Many professional drywall finishers use all-purpose for the tape coat and lightweight for the top coats." },
    { question: "How many buckets of joint compound do I need?", answer: "Plan for approximately one 4.5-gallon bucket per 15 to 16 sheets of drywall, applied over three coats. For a 75-sheet project, you need about 5 buckets. If you are applying a textured finish (knockdown, orange peel, etc.), add 50% more compound to account for the texture application." },
    { question: "Should I use paper tape or mesh tape?", answer: "Paper tape is stronger and preferred for inside corners, butt joints, and any joint that will experience movement. Mesh tape is self-adhesive and faster to apply but is weaker and more prone to cracking. Most professionals use paper tape exclusively, while DIYers often prefer mesh for its ease of use on flat joints." },
    { question: "What is setting-type joint compound and when should I use it?", answer: "Setting-type compounds (Durabond, Easy Sand) are powders mixed with water that set by chemical reaction rather than drying by evaporation. They are much harder than premixed compound and are ideal for the first tape coat, filling deep holes, and repairs. Available in set times from 5 to 210 minutes. Note that Durabond (standard) is extremely hard to sand, so use Easy Sand for coats that need sanding." },
    { question: "How long does joint compound take to dry between coats?", answer: "Premixed joint compound typically takes 12 to 24 hours to dry completely, depending on temperature, humidity, and coat thickness. Do not apply the next coat until the previous coat is fully dry (uniformly white or light gray with no dark wet spots). Running fans and dehumidifiers can speed drying time." },
    { question: "Can I skip the third coat of joint compound?", answer: "A three-coat finish is the industry standard for Level 4 finish (suitable for flat or eggshell paint). You can skip the third coat only if using a heavy texture that hides imperfections (Level 3 finish). For glossy paint or strong side lighting, a Level 5 finish (skim coat over the entire surface) provides the smoothest result." },
  ],
};

// ─── HARDWARE ────────────────────────────────────────────────────────────────

const framingNailCalculator: CalculatorConfig = {
  fields: [
    { id: "studs", label: "Total Stud Count", unit: "count", placeholder: "150", step: 1 },
  ],
  calculate: (v) => {
    const r = calculateFramingNails(v.studs as number);
    return [
      { label: r.label },
      { label: `Approximately ${r.pounds} lbs of 16d framing nails` },
    ];
  },
  disclaimer: "Also account for nails for plates, headers, and sheathing.",
  howToUse: [
    "Enter total number of studs in your project.",
    "Click Calculate.",
  ],
  materialInfo:
    "Framing nails are the primary fastener used to assemble wood-frame structures. The standard framing nail is the 16d (3.5-inch) sinker or common nail, used for face-nailing studs through plates and connecting structural members. Pneumatic framing nailers use stick (21-degree, 28-degree, or 30-degree) or coil nails ranging from 3.1 to 3.5 inches in length. Nail types include bright (uncoated), vinyl-coated (sinkers, for easier driving), hot-dipped galvanized (for exterior and PT lumber), and stainless steel (for coastal and corrosive environments). A 30-pound box of 16d sinkers contains approximately 500 nails. Hand-drive nails are available but rarely used in modern framing due to the speed advantage of pneumatic nailers. The IRC prescribes a specific nailing schedule for each framing connection — for example, two 16d nails per stud end through the plate, and three 16d nails per rim joist connection. Framing nails cost $40 to $60 per 30-pound box, or $30 to $50 per case of collated strip nails for pneumatic guns.",
  nextSteps: [
    { label: "Stud Calculator", href: "/calculators/wall-framing/stud-calculator/" },
    { label: "Joist Hanger Calculator", href: "/calculators/hardware/joist-hanger-calculator/" },
  ],
  installationTips: [
    "End nail through plates into studs (2 nails per end).",
    "Toenail extra studs at corners and openings.",
    "Use 3\" nails for stud-to-plate connections if shooting through an angle.",
  ],
  commonMistakes: [
    "Under-nailing — always follow IRC nailing schedule for structural connections.",
    "Using roofing nails for framing — wrong nail, wrong shank, wrong head.",
  ],
  faqs: [
    { question: "What size nails for framing walls?", answer: "Use 16d common or sinker nails (3.5 inches) for face-nailing through plates into stud ends. Use 10d or 8d nails for toenailing studs to plates. For sheathing, use 8d nails. Most pneumatic framing nailers fire 3.1 to 3.5-inch nails in either stick (angled) or coil format." },
    { question: "How many nails per stud?", answer: "Each stud needs two 16d nails at each end (through the plate into the stud end), totaling 4 nails per stud minimum. Add 2 to 3 extra nails per stud for toenailing at corners, partition intersections, and header connections. A reasonable average is 6 to 8 nails per stud across an entire wall." },
    { question: "How many pounds of framing nails do I need for a house?", answer: "A typical 1,500 sq ft single-story house with 200 to 300 studs requires 40 to 60 pounds of framing nails for the wall framing alone. Including floor framing, roof framing, and sheathing, total nail usage is typically 100 to 150 pounds. Buy in 30-pound boxes or by the case for the best price." },
    { question: "Do I need galvanized nails for pressure-treated lumber?", answer: "Yes. The copper compounds in modern pressure-treated lumber (ACQ, CA-B) corrode standard bright and vinyl-coated nails. Use hot-dipped galvanized (HDG) or stainless steel nails for all connections involving PT lumber. This includes sill plates, PT bottom plates, and any exterior applications." },
    { question: "What nail gun angle should I buy for framing?", answer: "The most common framing nailer angles are 21-degree (full round head, preferred by many codes), 28-degree (wire-weld collation), and 30-degree (paper-tape collation, fits into tighter spaces). The 30-degree nailer is the most versatile for reaching into corners and tight spots. Check your local code — some jurisdictions require full round-head nails." },
    { question: "What is the IRC nailing schedule for framing?", answer: "The IRC Table R602.3(1) specifies the exact nail size, quantity, and type for each framing connection. Key requirements include: 2 nails per stud end through plates, 3 nails per rim joist to sill plate, stud-to-stud at corners requires 16d at 24 inches on center, and double top plates require 16d nails staggered at 16 inches. Always keep a copy of the nailing schedule on site for inspector review." },
  ],
};

const joistHangerCalculator: CalculatorConfig = {
  fields: [
    { id: "joistCount", label: "Number of Joists/Rafters", unit: "count", placeholder: "30", step: 1 },
  ],
  calculate: (v) => {
    const r = calculateJoistHangers(v.joistCount as number);
    return [{ label: r.label }];
  },
  disclaimer: "Buy hangers to match exact joist size (2x8, 2x10, LVL, etc.).",
  howToUse: [
    "Enter the total number of joists or rafters that need hangers.",
    "Click Calculate.",
  ],
  materialInfo:
    "Joist hangers are galvanized steel connectors that support the ends of floor joists, ceiling joists, or rafters where they frame into a beam, header, or ledger board. The most common residential models are the Simpson Strong-Tie LUS series (for dimensional lumber) and the LB series (light-capacity applications). Hangers are sized to match the exact joist dimensions — LUS26 for 2x6, LUS28 for 2x8, LUS210 for 2x10, and LUS212 for 2x12. For engineered I-joists, use the manufacturer-specified hanger (like the IUS series). Each hanger has a rated load capacity that assumes all nail holes are filled with the correct joist hanger nails (1.5-inch x 10-gauge short stocky nails, not regular 16d nails). Individual hangers cost $1.50 to $5.00 each depending on size. Joist hanger nails are sold separately in 1-pound and 10-pound boxes. For specialty connections like skewed joists, sloped rafters, or double joists, Simpson offers adjustable and heavy-duty hanger models.",
  nextSteps: [
    { label: "Floor Joist Calculator", href: "/calculators/floor-framing/floor-joist-calculator/" },
    { label: "Framing Nail Calculator", href: "/calculators/hardware/framing-nail-calculator/" },
  ],
  installationTips: [
    "Use all the nail holes — every nail matters for rated load capacity.",
    "Use joist hanger nails (1.5\" x 10d) — do NOT use regular 16d nails.",
    "Check the hanger is specified for your joist size.",
  ],
  commonMistakes: [
    "Under-nailing hangers — partial nailing dramatically reduces capacity.",
    "Using the wrong size hanger for the joist.",
    "Using plain-shank nails instead of specified joist hanger nails.",
  ],
  faqs: [
    { question: "Do I need joist hangers on all joists?", answer: "Joist hangers are required wherever joists frame into the side of a beam or header rather than resting on top of a bearing surface. For joists sitting on top of a sill plate, beam, or ledger, hangers are optional but recommended in seismic and high-wind zones for uplift resistance." },
    { question: "What nails do I use for joist hangers?", answer: "Use 1.5-inch x 10-gauge joist hanger nails (Simpson part number N10A). Do not use regular 16d sinkers — they are too long and too thin for the punched nail holes. Using the wrong nails dramatically reduces the hanger's rated load capacity. Some hangers also require specific screws in certain holes — check the installation instructions." },
    { question: "How many joist hangers do I need?", answer: "You need one hanger at each end of every joist that frames into a beam or header. If joists span between two beams, each joist needs two hangers. A typical floor with 20 joists framing into a center beam needs 20 hangers at the beam plus potentially 20 more at the rim joist if not using face-nailing." },
    { question: "Can I use screws instead of nails in joist hangers?", answer: "Only if the screws are specifically rated for structural connector use, such as Simpson Strong-Drive SD screws. Regular drywall screws or deck screws are not allowed because they are too brittle for shear loads. The Simpson SD9112 is the most common structural screw approved for joist hanger use." },
    { question: "What size joist hanger do I need?", answer: "The hanger must match the exact joist dimensions. A 2x10 joist requires an LUS210 hanger. Using the wrong size hanger means the joist does not bear properly, which reduces load capacity and is a code violation. For doubled or tripled joists, use the corresponding double or triple hanger model." },
    { question: "How much do joist hangers cost?", answer: "Standard Simpson LUS-series joist hangers cost $1.50 to $5.00 each depending on size. A 30-joist floor system with hangers at both ends costs $90 to $300 in hangers alone. Budget an additional $20 to $40 for 10-pound boxes of joist hanger nails. Specialty hangers for I-joists or skewed connections can cost $8 to $15 each." },
  ],
};

const hurricaneTieCalculator: CalculatorConfig = {
  fields: [
    { id: "rafterCount", label: "Number of Rafters/Trusses", unit: "count", placeholder: "40", step: 1 },
  ],
  calculate: (v) => {
    const r = calculateHurricaneTies(v.rafterCount as number);
    return [{ label: r.label }];
  },
  disclaimer: "Install on every rafter/truss on both sides of the wall.",
  howToUse: [
    "Enter total rafter or truss count.",
    "Click Calculate — one hurricane tie per rafter end.",
  ],
  materialInfo:
    "Hurricane ties (also called rafter ties or wind clips) are galvanized steel connectors that mechanically fasten rafters or trusses to the wall top plate, creating a continuous load path from the roof to the foundation that resists wind uplift forces. Common models include the Simpson H2.5A (540 lbs uplift, for standard rafter-to-plate connections), H10A (1,330 lbs uplift, heavy-duty), and META20 (twist strap for truss-to-plate). Hurricane ties are required by the IRC in areas with design wind speeds of 90 mph or greater, which includes the entire Gulf Coast, Atlantic Coast, and much of the Midwest. The 2018 and later IRC editions effectively require continuous load path connections in all areas. Ties cost $0.50 to $2.50 each and must be installed with the correct nails (Simpson 10d x 1.5-inch or 16d sinkers, depending on the model). In coastal areas, use stainless steel or ZMAX-coated ties to resist salt air corrosion.",
  nextSteps: [
    { label: "Roof Truss Calculator", href: "/calculators/roofing/truss-calculator/" },
    { label: "Rafter Calculator", href: "/calculators/roofing/rafter-calculator/" },
  ],
  installationTips: [
    "Nail all specified holes with proper 10d or 16d nails.",
    "Use galvanized or stainless in coastal areas.",
    "Install on both sides of each rafter for maximum uplift resistance.",
  ],
  commonMistakes: [
    "Under-nailing hurricane ties — the rated uplift capacity assumes all holes are nailed.",
    "Only installing on one side of the rafter.",
    "Using wrong connector type — different rafters require different ties.",
  ],
  faqs: [
    { question: "Are hurricane ties required by code?", answer: "Yes. In wind zones with design speeds of 90 mph or higher (most of the US Gulf Coast, Atlantic Coast, and tornado-prone Midwest), hurricane ties are explicitly required. The 2018 and later IRC editions require continuous load path connections from roof to foundation in all areas, making hurricane ties essentially universal in new construction." },
    { question: "What is the uplift rating of a hurricane tie?", answer: "Uplift ratings vary by model. The Simpson H2.5A is rated for 540 lbs of uplift resistance. The H10A is rated for 1,330 lbs. The LSTA24 strap provides 1,800 lbs. Your required uplift rating depends on roof area per connector, wind speed, and exposure category — a licensed engineer or the local building department can specify the correct tie for your project." },
    { question: "How many hurricane ties do I need?", answer: "Install one hurricane tie on each side of every rafter or truss where it meets the wall top plate. A roof with 25 trusses needs 50 hurricane ties (2 per truss, one on each side). In high-wind zones, ties may also be required at the wall-to-floor and floor-to-foundation connections to complete the continuous load path." },
    { question: "What nails should I use for hurricane ties?", answer: "Use the exact nail type and size specified by the manufacturer. Simpson H2.5A ties require 10d x 1.5-inch nails (N10A) in the designated holes. Using regular 16d nails or drywall screws voids the rated capacity. Every nail hole in the connector must be filled — partial nailing dramatically reduces the uplift rating." },
    { question: "Can I install hurricane ties on an existing roof?", answer: "Yes, hurricane ties can be retrofitted on existing homes. Access the rafter-to-wall connections from the attic and install ties with the specified nails. Retrofit hurricane tie programs are common in hurricane-prone states (Florida, Texas, Louisiana) and may qualify for insurance premium discounts of 5-20%." },
    { question: "What is a continuous load path and why does it matter?", answer: "A continuous load path is an unbroken chain of structural connections from the roof through the walls, floors, and foundation to the ground. It prevents the roof from lifting off in high winds, the walls from separating from the floor, and the entire structure from sliding off the foundation. Hurricane ties are the roof-to-wall link in this chain, but hold-downs, anchor bolts, and straps at other connections are equally important." },
  ],
};

// ─── FINISHING ────────────────────────────────────────────────────────────────

const paintCoverageCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Total Wall & Ceiling Area", unit: "sq ft", placeholder: "1500" },
    {
      id: "coats",
      label: "Number of Coats",
      type: "select",
      options: [
        { label: "1 coat (touch-up)", value: "1" },
        { label: "2 coats (standard)", value: "2" },
        { label: "3 coats (dark-to-light color change)", value: "3" },
      ],
      defaultValue: "2",
    },
    { id: "coveragePerGallon", label: "Coverage Per Gallon", unit: "sq ft", placeholder: "350" },
  ],
  calculate: (v) => {
    const coats = parseInt(v.coats as string, 10);
    const r = calculatePaintCoverage(v.wallArea as number, coats, v.coveragePerGallon as number || 350);
    const results: ResultItem[] = [
      { label: r.label },
    ];
    if (r.quarts > 0) {
      results.push({ label: `Or buy ${r.quarts} quart${r.quarts > 1 ? "s" : ""} (less than 1 gallon needed)` });
    }
    results.push({ label: `Buy: ${r.oneGallonCans} one-gallon can${r.oneGallonCans > 1 ? "s" : ""}` });
    if (r.fiveGallonBuckets > 0) {
      results.push({ label: `Or: ${r.fiveGallonBuckets} five-gallon bucket${r.fiveGallonBuckets > 1 ? "s" : ""} + ${r.remainderGallons} gallon can${r.remainderGallons !== 1 ? "s" : ""}` });
    }
    return results;
  },
  disclaimer: "Actual coverage varies by surface texture, paint brand, and application method. Rough or textured surfaces may reduce coverage by 20-30%.",
  howToUse: [
    "Measure total wall and ceiling area in square feet (height x width for each wall, then add them up).",
    "Subtract window and door areas if desired.",
    "Select the number of coats — 2 coats is standard for most jobs.",
    "Enter the coverage per gallon from your paint can label (default 350 sq ft).",
    "Click Calculate Materials to see gallons, cans, and bucket options.",
  ],
  materialInfo:
    "Interior latex paint is the standard finish material for walls and ceilings in residential construction. Coverage rates vary by paint quality and type — flat/matte finishes typically cover 350 to 400 square feet per gallon, while satin, semi-gloss, and high-gloss finishes cover 300 to 350 square feet per gallon due to their thicker consistency. Premium paints from brands like Benjamin Moore Regal Select, Sherwin-Williams Duration, and Behr Marquee often advertise one-coat coverage, but most professional painters recommend two coats for even color and full hide, especially when changing colors. A gallon of paint weighs approximately 10 to 12 pounds when wet. Standard one-gallon cans cost $25 to $70 depending on quality tier, while five-gallon buckets offer significant savings per gallon (typically 15-20% less per gallon). For large projects, buying five-gallon buckets also ensures color consistency across all walls — even within the same color code, individual gallon cans can vary slightly in hue. Ceiling paint is usually a flat white formulated with higher solids for better spatter resistance when rolling overhead. Primer is strongly recommended before the topcoat on new drywall, repaired surfaces, and when making dramatic color changes.",
  nextSteps: [
    { label: "Paint Cost Calculator", href: "/calculators/finishing/paint-cost-calculator/" },
    { label: "Primer Calculator", href: "/calculators/finishing/primer-calculator/" },
  ],
  installationTips: [
    "Use a 3/8\" nap roller for smooth walls, 1/2\" nap for light texture, and 3/4\" nap for heavy texture or stucco.",
    "Cut in edges with a 2.5\" angled brush before rolling the field.",
    "Maintain a wet edge — work in 4-foot sections and do not let the edge dry before continuing.",
    "Apply paint in a W-pattern with the roller, then fill in evenly without lifting the roller.",
  ],
  commonMistakes: [
    "Skipping primer on new drywall — bare drywall absorbs paint unevenly, creating flashing and blotchy coverage.",
    "Buying too little paint — running out mid-wall causes visible lap marks where wet and dry paint overlap.",
    "Applying coats too quickly — allow 2 to 4 hours between latex coats for proper drying.",
    "Using cheap rollers — they shed lint and leave texture in the paint film.",
  ],
  faqs: [
    { question: "How much paint do I need for a 12x12 room?", answer: "A 12x12 room with 8-foot ceilings has approximately 384 square feet of wall area (minus about 50 sq ft for doors and windows, so about 334 sq ft net). With 2 coats at 350 sq ft per gallon, you need about 1.9 gallons — buy 2 gallons. If you are also painting the 144 sq ft ceiling, add another gallon of ceiling paint." },
    { question: "How many square feet does a gallon of paint cover?", answer: "A gallon of interior latex paint covers 350 to 400 square feet on smooth, previously painted surfaces. Flat and matte finishes tend to cover closer to 400 sq ft, while satin and semi-gloss cover about 350 sq ft. Porous or textured surfaces like new drywall, rough-sawn wood, or stucco may reduce coverage to 250 to 300 sq ft per gallon." },
    { question: "Should I buy 1-gallon cans or a 5-gallon bucket?", answer: "For rooms requiring 3 or more gallons of the same color, a 5-gallon bucket is more economical (typically 15-20% cheaper per gallon) and ensures perfect color consistency. For accent walls or small areas under 2 gallons, individual cans are more practical. Many paint stores also offer quart sizes for small touch-up projects." },
    { question: "How do I calculate paint for ceilings?", answer: "Multiply ceiling length by ceiling width to get the square footage. Ceilings typically require one coat of ceiling paint (which is formulated with higher coverage). At 400 sq ft per gallon for ceiling paint, a 12x15 room ceiling (180 sq ft) needs about half a gallon — buy 1 gallon to have extra for touch-ups." },
    { question: "Do I need 2 coats of paint?", answer: "Yes, two coats are recommended for virtually all painting projects. The first coat seals the surface and provides a uniform base. The second coat delivers the final color depth, sheen, and durability. The only exception is a touch-up of the exact same color on a previously painted surface, where one coat may suffice." },
    { question: "How much paint do I need for a 1,500 sq ft house interior?", answer: "A 1,500 sq ft house typically has 4,000 to 5,000 square feet of paintable wall area (depending on ceiling height and number of rooms). At 2 coats with 350 sq ft per gallon, you need approximately 23 to 29 gallons of wall paint, plus 4 to 5 gallons of ceiling paint. This equates to about 5 to 6 five-gallon buckets total." },
  ],
};

const paintCostCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Total Wall & Ceiling Area", unit: "sq ft", placeholder: "1500" },
    {
      id: "coats",
      label: "Number of Coats",
      type: "select",
      options: [
        { label: "1 coat", value: "1" },
        { label: "2 coats (standard)", value: "2" },
        { label: "3 coats", value: "3" },
      ],
      defaultValue: "2",
    },
    {
      id: "paintQuality",
      label: "Paint Quality",
      type: "select",
      options: [
        { label: "Economy ($25/gal)", value: "economy" },
        { label: "Standard ($35/gal)", value: "standard" },
        { label: "Premium ($50/gal)", value: "premium" },
        { label: "Ultra-Premium ($70/gal)", value: "ultra-premium" },
      ],
      defaultValue: "standard",
    },
    {
      id: "includePrimer",
      label: "Include Primer?",
      type: "select",
      options: [
        { label: "Yes — new drywall or color change", value: "yes" },
        { label: "No — repainting same color", value: "no" },
      ],
      defaultValue: "yes",
    },
  ],
  calculate: (v) => {
    const coats = parseInt(v.coats as string, 10);
    const r = calculatePaintCost(v.wallArea as number, coats, v.paintQuality as string, v.includePrimer === "yes");
    const results: ResultItem[] = [
      { label: `${r.gallons} gallons of ${v.paintQuality} paint` },
      { label: `Paint cost: $${r.paintCost}` },
    ];
    if (r.primerGallons > 0) {
      results.push({ label: `Primer: ${r.primerGallons} gallon${r.primerGallons > 1 ? "s" : ""} — $${r.primerCost}` });
    }
    results.push({ label: `Supplies (rollers, brushes, tape, drop cloths): $${r.suppliesCost}` });
    results.push({ label: `Estimated total project cost: $${r.totalCost}` });
    return results;
  },
  disclaimer: "Prices are approximate 2026 US national averages. Actual prices vary by brand, retailer, and region.",
  howToUse: [
    "Enter the total wall and ceiling area you plan to paint.",
    "Select the number of coats (2 is standard for most projects).",
    "Choose a paint quality level — economy, standard, premium, or ultra-premium.",
    "Select whether you need primer (recommended for new drywall and color changes).",
    "Click Calculate Materials for a cost breakdown.",
  ],
  materialInfo:
    "Paint cost varies significantly by quality tier. Economy paints ($20 to $30 per gallon) like Behr Flat and Glidden Essentials are suitable for rental properties, ceilings, and areas where appearance is not critical — they require more coats and have shorter lifespans. Standard paints ($30 to $40 per gallon) like Behr Premium Plus, Valspar Signature, and Sherwin-Williams SuperPaint offer good coverage and durability for most residential applications. Premium paints ($45 to $55 per gallon) like Benjamin Moore Regal Select and Sherwin-Williams Duration provide superior coverage (often true one-coat hide), excellent washability, and a 15+ year lifespan on interior walls. Ultra-premium lines ($60 to $80 per gallon) like Benjamin Moore Aura and Sherwin-Williams Emerald feature the highest pigment loads, self-priming formulas, and advanced color technology for the most demanding applications. Beyond paint, budget for supplies: a quality roller frame and covers ($10 to $15), angled brushes ($8 to $12 each), painter's tape ($5 to $8 per roll), drop cloths ($8 to $15), paint tray liners ($5), and extension poles for ceilings ($15 to $25). Professional painters typically charge $2 to $6 per square foot for interior painting, which includes labor, paint, and supplies.",
  nextSteps: [
    { label: "Paint Coverage Calculator", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Primer Calculator", href: "/calculators/finishing/primer-calculator/" },
  ],
  installationTips: [
    "Buy all your paint at once to ensure color consistency across the batch.",
    "Invest in quality rollers and brushes — they make a noticeable difference in finish quality.",
    "Use painter's tape on trim, baseboards, and ceiling lines for clean edges.",
    "Keep a wet rag handy to wipe drips immediately before they dry.",
  ],
  commonMistakes: [
    "Choosing the cheapest paint for high-traffic areas — it will need repainting in 2 to 3 years instead of 7 to 10.",
    "Forgetting to budget for primer — skipping primer on new drywall doubles the topcoat needed.",
    "Not buying enough paint — matching a custom color later is nearly impossible.",
    "Ignoring sheen selection — flat hides imperfections but is hard to clean; satin and eggshell are the best all-around choices for walls.",
  ],
  faqs: [
    { question: "How much does it cost to paint a room?", answer: "A standard 12x12 room with 8-foot ceilings costs $80 to $200 in materials for a DIY project (2 gallons of paint at $35 to $50 each, plus $10 to $45 in supplies). Hiring a professional painter costs $300 to $700 for the same room, depending on your market and the prep work required." },
    { question: "Is expensive paint worth it?", answer: "Yes, for rooms you use daily. Premium paints ($45 to $55 per gallon) cover in fewer coats, resist scuffing and staining, wash easily, and last 10 to 15 years. Over the paint's lifetime, premium paint costs less per year than repainting every 3 to 5 years with economy paint. For ceilings, closets, and rental units, standard paint is perfectly adequate." },
    { question: "How much do painting supplies cost?", answer: "Basic painting supplies for a room cost $30 to $50 total: roller frame ($5 to $8), roller covers ($3 to $5 each), 2.5-inch angled brush ($8 to $12), painter's tape ($5 to $8 per roll, plan on 2 to 3 rolls per room), and drop cloths ($8 to $15). Buy a paint tray ($3 to $5) or use tray liners for easy cleanup." },
    { question: "Should I buy paint at Home Depot or a paint store?", answer: "Big-box stores (Home Depot, Lowe's) offer competitive prices on mid-range brands like Behr and Valspar. Dedicated paint stores (Sherwin-Williams, Benjamin Moore dealers) carry professional-grade lines, offer expert color matching, and frequently run 30 to 40% off sales. For premium paint, wait for a paint store sale — you can get $70 paint for $42 to $49." },
    { question: "How much paint do I need for 1,000 square feet of wall?", answer: "At 350 sq ft per gallon with 2 coats, you need approximately 5.7 gallons — buy 6 gallons (or one 5-gallon bucket plus 1 gallon). If primer is needed, add 2.5 to 3 gallons of primer. Total material cost with standard paint: $280 to $350 including supplies." },
    { question: "Do I need primer before painting?", answer: "Primer is recommended for new drywall, patched or repaired areas, dramatic color changes (especially dark to light), and when painting over stains, smoke damage, or water marks. Self-priming paints (premium and ultra-premium lines) can skip the separate primer step on previously painted surfaces in good condition." },
  ],
};

const primerCalculator: CalculatorConfig = {
  fields: [
    { id: "wallArea", label: "Total Wall & Ceiling Area", unit: "sq ft", placeholder: "1500" },
    {
      id: "surfaceType",
      label: "Surface Type",
      type: "select",
      options: [
        { label: "New drywall (300 sq ft/gal)", value: "new-drywall" },
        { label: "Previously painted (400 sq ft/gal)", value: "previously-painted" },
        { label: "Bare wood (250 sq ft/gal)", value: "wood" },
        { label: "Stain-blocking (200 sq ft/gal)", value: "stain-blocking" },
      ],
      defaultValue: "new-drywall",
    },
  ],
  calculate: (v) => {
    const r = calculatePrimer(v.wallArea as number, v.surfaceType as string);
    return [
      { label: r.label },
      { label: `Coverage rate: ${v.surfaceType === "new-drywall" ? "300" : v.surfaceType === "previously-painted" ? "400" : v.surfaceType === "wood" ? "250" : "200"} sq ft per gallon` },
      { label: `With 10% extra: buy ${Math.ceil(r.cans * 1.1)} can${Math.ceil(r.cans * 1.1) > 1 ? "s" : ""}` },
    ];
  },
  disclaimer: "Porous or textured surfaces may require additional primer. Always follow the manufacturer's coverage guidelines.",
  howToUse: [
    "Enter total square footage of walls and ceilings to be primed.",
    "Select the surface type to get the correct coverage rate.",
    "Click Calculate Materials for gallons and can count.",
  ],
  materialInfo:
    "Primer is a preparatory coating applied before the topcoat paint to ensure proper adhesion, uniform sheen, and consistent color. Different surface types require different primer formulations. PVA (polyvinyl acetate) primer is the standard choice for new, unpainted drywall — it seals the porous gypsum surface so the topcoat does not absorb unevenly, which causes a blotchy appearance called flashing. PVA primer costs $12 to $18 per gallon and covers approximately 300 square feet per gallon on new drywall. For previously painted surfaces in good condition, a bonding primer or a paint-and-primer-in-one product is sufficient, covering up to 400 square feet per gallon. Bare wood surfaces require an oil-based or shellac-based primer to seal the grain and prevent tannin bleed-through, especially on knotty pine, cedar, and redwood — coverage is lower at around 250 square feet per gallon due to wood's absorbency. Stain-blocking primer (shellac-based like Zinsser BIN or oil-based like Kilz Original) is essential for covering water stains, smoke damage, crayon marks, and ink — these specialty primers have the lowest coverage at approximately 200 square feet per gallon but provide unmatched stain sealing. Popular primer brands include Kilz (Masterchem), Zinsser (Rust-Oleum), and Sherwin-Williams PrepRite. For best results, tint your primer close to the final topcoat color — most paint stores can add a small amount of colorant to white primer at no extra charge.",
  nextSteps: [
    { label: "Paint Coverage Calculator", href: "/calculators/finishing/paint-coverage-calculator/" },
    { label: "Drywall Sheet Calculator", href: "/calculators/insulation-drywall/drywall-calculator/" },
  ],
  installationTips: [
    "Apply primer with the same roller nap you plan to use for the topcoat.",
    "Allow primer to dry completely before topcoating — typically 1 to 2 hours for latex, 24 hours for oil-based.",
    "Tint the primer to match or approximate the topcoat color for better hide in fewer coats.",
    "Use a brush to cut in corners and edges, then roll the field areas.",
  ],
  commonMistakes: [
    "Skipping primer on new drywall — causes flashing (uneven sheen) that is visible in certain lighting angles.",
    "Using latex primer on stains — water-based primers cannot block tannin, nicotine, or water stains; use shellac or oil-based.",
    "Applying primer too thick — heavy coats take longer to dry and may peel; one even coat is sufficient.",
    "Priming over dust and debris — always wipe or vacuum surfaces before priming for proper adhesion.",
  ],
  faqs: [
    { question: "Do I always need primer before painting?", answer: "Not always. Primer is essential on new drywall, bare wood, repaired patches, and when covering stains or making dramatic color changes. On previously painted surfaces in good condition where you are applying a similar color, a self-priming paint (common in premium lines) can eliminate the separate primer step." },
    { question: "What primer should I use on new drywall?", answer: "Use a PVA (polyvinyl acetate) drywall primer like Kilz PVA, Zinsser Drywall 1-2-3, or Sherwin-Williams Drywall Primer. These are specifically formulated to seal the porous gypsum surface evenly. Apply one coat, let it dry, then apply your topcoat paint. PVA primer costs $12 to $18 per gallon and covers about 300 sq ft." },
    { question: "How much primer do I need per gallon?", answer: "Coverage varies by surface type: new drywall gets about 300 sq ft per gallon, previously painted walls get 400 sq ft, bare wood gets 250 sq ft, and stain-blocking primer covers only 200 sq ft per gallon. Always check the product label for the manufacturer's specific coverage rate." },
    { question: "Can I use white paint as primer?", answer: "No. Regular paint and primer serve different purposes. Primer is formulated with special resins that bond to the substrate and seal porous surfaces. Using regular paint as primer on new drywall will result in uneven absorption, flashing, and poor adhesion. Primer costs less than paint and saves money by reducing the number of topcoats needed." },
    { question: "Should I tint my primer?", answer: "Yes, tinting primer is recommended, especially when the topcoat is a medium or dark color. Most paint stores can add a small amount of colorant to primer at no extra charge. Gray-tinted primer is ideal under dark colors, while a primer tinted close to the topcoat color ensures better hide in fewer coats. White primer is fine under light or white topcoats." },
    { question: "What is the difference between PVA primer and stain-blocking primer?", answer: "PVA primer is a water-based primer designed to seal new drywall and joint compound. It is inexpensive ($12 to $18 per gallon) and odorless. Stain-blocking primer (like Zinsser BIN shellac or Kilz Original oil-based) is a specialty product that seals stains from water damage, smoke, nicotine, ink, and tannin bleed. Stain blockers cost $20 to $35 per gallon and have a strong odor during application but are essential when stains are present." },
  ],
};

// ─── LUMBER ──────────────────────────────────────────────────────────────────

const lumberCostCalculator: CalculatorConfig = {
  fields: [
    {
      id: "boardType",
      label: "Board Size",
      type: "select",
      options: Object.entries(BOARD_TYPES).map(([value, info]) => ({
        label: info.label,
        value,
      })),
    },
    { id: "quantity", label: "Number of Boards", unit: "count", placeholder: "20", step: 1 },
    { id: "pricePerBoard", label: "Price per Board (optional)", unit: "$", placeholder: "0", step: 0.01, min: 0 },
  ],
  calculate: (v) => {
    const r = calculateLumberCost(v.boardType as string, v.quantity as number, v.pricePerBoard as number);
    return [
      { label: `${r.quantity} × ${r.boardLabel} @ $${r.pricePerBoard.toFixed(2)} each` },
      { label: `Total cost: $${r.totalCost.toFixed(2)}` },
      { label: `Total linear feet: ${r.totalLinearFeet} LF` },
      { label: `Cost per linear foot: $${r.costPerLinearFoot.toFixed(2)}/LF` },
      { label: `Total board feet: ${r.totalBoardFeet.toFixed(1)} BF` },
      { label: `Cost per board foot: $${r.costPerBoardFoot.toFixed(2)}/BF` },
    ];
  },
  disclaimer: "Lumber prices fluctuate frequently. Confirm pricing with your local supplier before ordering.",
  howToUse: [
    "Select the board size you need from the dropdown.",
    "Enter the number of boards for your project.",
    "Optionally enter the current price per board — leave at 0 to use the default estimate.",
    "Click Calculate to see total cost, cost per linear foot, and cost per board foot.",
  ],
  materialInfo:
    "Dimensional lumber is the backbone of residential wood-frame construction in North America. Standard sizes like 2x4, 2x6, 2x8, 2x10, and 2x12 are milled from softwood species — primarily spruce, pine, and fir (SPF) — and graded for structural use. The actual dimensions of a 2x4 are 1.5 inches by 3.5 inches after surfacing and drying, and standard lengths run 8, 10, 12, 14, and 16 feet. Lumber is sold by the piece at retail home centers and by the thousand board feet (MBF) at wholesale lumberyards. Prices vary significantly by region, species, grade, and market conditions — the 2021-2022 lumber price spike saw 2x4x8 studs reach $12 or more per board, compared to the historical average of $3 to $5. When estimating lumber costs, always add 10-15% for waste, defective boards, and cutting losses. Pressure-treated lumber for ground contact or exterior use costs 50-100% more than untreated SPF. For structural applications, specify the correct grade (No. 2 and Better is standard for most framing) and verify the moisture content is appropriate for your climate. Lumber is typically stocked at nominal 15% MC (KD-HT) for interior framing use.",
  nextSteps: [
    { label: "Board Feet Calculator", href: "/calculators/hardware/board-feet-calculator/" },
    { label: "Plywood Calculator", href: "/calculators/hardware/plywood-calculator/" },
  ],
  installationTips: [
    "Inspect every board for crown, twist, and splits before installing.",
    "Install boards crown-up for joists and rafters.",
    "Pre-drill near board ends to prevent splitting.",
    "Store lumber flat and off the ground, covered to prevent warping.",
  ],
  commonMistakes: [
    "Not accounting for waste — always add 10-15% to your total order.",
    "Confusing nominal and actual dimensions (a 2x4 is actually 1.5\" x 3.5\").",
    "Buying green (wet) lumber for finish applications — it will shrink and warp.",
    "Not price-comparing between home centers and local lumberyards.",
  ],
  faqs: [
    { question: "How much does a 2x4x8 cost?", answer: "A standard SPF 2x4x8 stud costs $3 to $6 at most home centers as of 2026-2025. Prices fluctuate based on market conditions, season, and region. Pressure-treated 2x4x8 costs $5 to $9. Check prices at your local Home Depot, Lowe's, or lumberyard for the most current pricing." },
    { question: "What is the difference between #2 and Stud grade lumber?", answer: "No. 2 grade lumber is graded for general structural use and can be used for joists, rafters, headers, and beams in any length. Stud grade is specifically graded for vertical load-bearing applications (wall studs) and is only available in lengths up to 10 feet. Stud grade is typically less expensive than No. 2 for 8-foot lengths because the grading criteria are less restrictive for vertical use." },
    { question: "Why are lumber prices so volatile?", answer: "Lumber prices are driven by housing starts, mill capacity, transportation costs, tariffs on Canadian imports, and natural disasters like wildfires and beetle infestations that reduce timber supply. The 2021 price spike was caused by pandemic-driven demand combined with temporary mill shutdowns. Futures markets and speculative trading also amplify price swings." },
    { question: "How many board feet are in a 2x4x8?", answer: "A 2x4x8 contains 5.33 board feet (2 x 4 x 8 / 12 = 5.33). Board feet measure volume: one board foot equals a piece 1 inch thick, 12 inches wide, and 1 foot long (144 cubic inches). Note this uses nominal dimensions, not actual dimensions." },
    { question: "Should I buy lumber from a home center or a lumberyard?", answer: "Home centers (Home Depot, Lowe's) offer convenience, consistent pricing, and easy returns. Lumberyards offer better quality, wider selection of species and grades, volume discounts, and delivery. For large projects (framing a house, deck over 200 sq ft), a lumberyard typically saves 15-25% versus retail pricing." },
    { question: "How do I calculate how much lumber I need for a wall?", answer: "For a standard wall: count one stud every 16 inches on center plus one extra for each end. A 20-foot wall needs about 16 studs. Add a bottom plate (one 2x4 the wall length) and double top plate (two 2x4s the wall length). Add extra studs for corners, intersections, and each side of windows and doors. Use our calculator to price out the total." },
  ],
};

const boardFeetCalculator: CalculatorConfig = {
  fields: [
    { id: "thickness", label: "Thickness", unit: "inches", placeholder: "2", step: 0.25, min: 0.25 },
    { id: "width", label: "Width", unit: "inches", placeholder: "6", step: 0.25, min: 0.25 },
    { id: "length", label: "Length", unit: "feet", placeholder: "8", step: 1, min: 1 },
    { id: "quantity", label: "Number of Pieces", unit: "count", placeholder: "10", step: 1, min: 1 },
  ],
  calculate: (v) => {
    const r = calculateBoardFeet(v.thickness as number, v.width as number, v.length as number, v.quantity as number);
    return [
      { label: `Board feet per piece: ${r.bfPerPiece.toFixed(2)} BF` },
      { label: `Total board feet: ${r.totalBF.toFixed(2)} BF` },
      { label: `Estimated cost (softwood): $${r.estimatedCostLow.toFixed(2)}` },
      { label: `Estimated cost (hardwood): $${r.estimatedCostHigh.toFixed(2)}` },
    ];
  },
  disclaimer: "Board foot pricing varies widely by species and grade. Softwoods average $3-5/BF, hardwoods $5-15/BF.",
  howToUse: [
    "Enter the board thickness in inches (nominal dimension).",
    "Enter the board width in inches (nominal dimension).",
    "Enter the board length in feet.",
    "Enter the number of pieces.",
    "Click Calculate to get total board feet and estimated cost.",
  ],
  materialInfo:
    "A board foot (BF) is the standard unit of volume measurement for lumber in North America. One board foot equals a piece of wood 1 inch thick, 12 inches wide, and 1 foot long — or 144 cubic inches of wood. The formula is: Board Feet = (Thickness in inches x Width in inches x Length in feet) / 12. Board feet use nominal (not actual) dimensions, so a surfaced 2x6 is calculated as 2 x 6, not 1.5 x 5.5. This measurement is essential for purchasing hardwood lumber, which is almost always sold by the board foot rather than by the piece. Softwood framing lumber at retail stores is typically sold by the piece, but wholesale lumberyards and sawmills price it by the thousand board feet (MBF). Common hardwood prices per board foot: red oak $4-7, white oak $5-9, maple $5-8, cherry $6-10, walnut $8-15, and exotic species $10-25+. When buying rough-sawn hardwood for furniture or cabinetry, account for waste from surfacing (planing removes 1/8 to 1/4 inch per face), edge jointing, and defect cutting — add 25-40% to your calculated board footage to arrive at the purchase quantity.",
  nextSteps: [
    { label: "Lumber Cost Calculator", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Plywood Calculator", href: "/calculators/hardware/plywood-calculator/" },
  ],
  installationTips: [
    "Use nominal (not actual) dimensions when calculating board feet.",
    "Add 25-40% waste factor when buying rough-sawn hardwood for furniture projects.",
    "Ask the lumberyard to surface (S2S) rough-sawn boards to save shop time.",
    "Request FAS or Select grade hardwood for projects requiring clear, defect-free faces.",
  ],
  commonMistakes: [
    "Using actual dimensions instead of nominal — board feet always use nominal sizes.",
    "Not accounting for surfacing loss when buying rough-sawn lumber.",
    "Forgetting to add waste factor for defects, sapwood, and cutting losses.",
    "Comparing board foot prices across species without accounting for density and workability.",
  ],
  faqs: [
    { question: "What is a board foot?", answer: "A board foot (BF) is a unit of volume equal to 144 cubic inches of wood — equivalent to a board 1 inch thick, 12 inches wide, and 1 foot long. It is the standard pricing unit for hardwood lumber in North America. The formula is: BF = (Thickness x Width x Length in feet) / 12, using nominal dimensions." },
    { question: "How many board feet in a 2x6x10?", answer: "A 2x6x10 contains 10 board feet: (2 x 6 x 10) / 12 = 10 BF. Remember to use nominal dimensions (2 and 6), not the actual surfaced dimensions (1.5 and 5.5)." },
    { question: "What does MBF mean in lumber pricing?", answer: "MBF stands for 'thousand board feet' (M is the Roman numeral for 1,000). Wholesale lumber is priced per MBF. If lumber is quoted at $600/MBF, that equals $0.60 per board foot. Retail pricing per piece can be converted to MBF for comparison shopping." },
    { question: "Why is hardwood sold by the board foot instead of by the piece?", answer: "Hardwood lumber comes in random widths and lengths because it is sawn from logs of varying sizes. Unlike dimensional softwood lumber which is standardized (2x4, 2x6, etc.), each hardwood board is unique. Board foot pricing normalizes the cost by volume regardless of individual board dimensions." },
    { question: "How do I convert linear feet to board feet?", answer: "Multiply linear feet by the nominal thickness and width in inches, then divide by 12. Example: 100 linear feet of 1x6 = (1 x 6 x 100) / 12 = 50 board feet. For 2x4: (2 x 4 x 100) / 12 = 66.67 board feet." },
    { question: "What is the cheapest hardwood per board foot?", answer: "Poplar is typically the least expensive domestic hardwood at $3-5 per board foot, followed by soft maple ($4-6) and red oak ($4-7). Alder is affordable on the West Coast. For outdoor projects, white oak ($5-9/BF) is the most cost-effective rot-resistant hardwood. Exotic species like ipe, teak, and mahogany range from $10-25+/BF." },
  ],
};

const plywoodCalculator: CalculatorConfig = {
  fields: [
    { id: "length", label: "Area Length", unit: "ft", placeholder: "20", step: 0.5, min: 0.5 },
    { id: "width", label: "Area Width", unit: "ft", placeholder: "12", step: 0.5, min: 0.5 },
    {
      id: "sheetType",
      label: "Plywood Thickness",
      type: "select",
      options: [
        { label: '1/4" (6 mm)', value: "1/4" },
        { label: '3/8" (9 mm)', value: "3/8" },
        { label: '1/2" (12 mm)', value: "1/2" },
        { label: '3/4" (18 mm)', value: "3/4" },
      ],
    },
  ],
  calculate: (v) => {
    const r = calculatePlywood(v.length as number, v.width as number, v.sheetType as string);
    return [
      { label: `Coverage area: ${r.area.toFixed(0)} sq ft` },
      { label: `Sheets needed (with 10% waste): ${r.sheets} sheets` },
      { label: `Sheet type: ${r.sheetLabel}` },
      { label: `Price per sheet: $${r.pricePerSheet.toFixed(2)}` },
      { label: `Total cost estimate: $${r.totalCost.toFixed(2)}` },
    ];
  },
  disclaimer: "Prices reflect standard CDX/BC sanded plywood. Specialty panels (marine, Baltic birch, hardwood veneer) cost more.",
  howToUse: [
    "Enter the length and width of the area to cover in feet.",
    "Select the plywood thickness from the dropdown.",
    "Click Calculate to see sheet count and cost estimate.",
  ],
  materialInfo:
    "Plywood is an engineered wood panel made from thin layers (plies or veneers) of wood glued together with adjacent layers having their grain rotated 90 degrees. This cross-laminated construction gives plywood superior strength, stiffness, and dimensional stability compared to solid wood of the same thickness. Standard plywood sheets measure 4 feet by 8 feet (32 square feet) and are available in thicknesses from 1/4 inch to 3/4 inch. Common grades include CDX (construction grade, suitable for sheathing and subflooring), BC sanded (one smooth face for cabinetry and shelving), AC (one premium face), and marine grade (waterproof glue, no voids). Plywood is used extensively in residential construction for roof sheathing, wall sheathing, subflooring, cabinet boxes, furniture, and finish applications. For structural applications, use panels stamped with the APA (Engineered Wood Association) grade mark. The most common structural plywood is 1/2-inch CDX for wall sheathing and 3/4-inch tongue-and-groove for subflooring. Always store plywood flat and indoors — panels stored on edge or exposed to moisture will warp permanently. When cutting, use a fine-tooth blade (80-tooth for table saw) to minimize tear-out on the veneer face.",
  nextSteps: [
    { label: "Lumber Cost Calculator", href: "/calculators/hardware/lumber-cost-calculator/" },
    { label: "Board Feet Calculator", href: "/calculators/hardware/board-feet-calculator/" },
    { label: "OSB Panel Calculator", href: "/calculators/floor-framing/osb-panel-calculator/" },
  ],
  installationTips: [
    "Leave a 1/8-inch gap between sheets to allow for thermal expansion.",
    "Install with the face grain perpendicular to supports (joists or studs).",
    "Use 8d nails or #8 screws at 6\" on center at edges, 12\" in the field.",
    "Stagger joints between rows for maximum strength.",
  ],
  commonMistakes: [
    "Not leaving expansion gaps — tight-butted panels will buckle when they absorb moisture.",
    "Installing sheets with grain parallel to supports instead of perpendicular.",
    "Using interior-grade plywood in exterior or high-moisture applications.",
    "Not staggering seams between courses, which creates a weak line.",
  ],
  faqs: [
    { question: "How many sheets of plywood do I need?", answer: "Divide the total area in square feet by 32 (the area of a standard 4x8 sheet), then multiply by 1.10 to add a 10% waste factor for cuts. For example, a 320 sq ft floor needs (320 x 1.10) / 32 = 11 sheets. Complex layouts with many cuts may need 15% waste instead of 10%." },
    { question: "What thickness plywood for subfloor?", answer: "Use 3/4-inch (23/32\") tongue-and-groove plywood for subflooring over joists spaced 16 inches on center. For 24-inch joist spacing, use 7/8-inch or 1-1/8-inch panels. The panels should be APA-rated Sturd-I-Floor or equivalent. Glue and screw for a squeak-free floor." },
    { question: "What is the difference between CDX and BCX plywood?", answer: "CDX has a C-grade face (tight knots, small splits allowed), D-grade back (larger knots and defects allowed), and exterior-rated glue (X). It is the standard for roof and wall sheathing. BCX has a B-grade face (smooth, patched) and C-grade back, making it suitable for cabinetry backs and underlayment where one smooth face is needed." },
    { question: "How much does a sheet of plywood cost?", answer: "Standard 4x8 CDX plywood costs approximately: 1/4\" = $15-22, 3/8\" = $22-30, 1/2\" = $30-42, 3/4\" = $45-60. Prices vary by region and market conditions. Specialty panels cost more: 3/4\" Baltic birch runs $60-90, marine grade $70-120, and hardwood veneer panels $50-100+ per sheet." },
    { question: "Can I use OSB instead of plywood?", answer: "Yes, for most structural sheathing applications (roof, walls, subfloor), OSB is code-approved and costs 20-30% less than plywood. However, OSB swells more when wet and is slower to dry. For cabinetry, furniture, and visible applications, plywood is preferred for its smoother surface, better screw-holding, and superior moisture resistance." },
    { question: "How do I cut plywood without splintering?", answer: "Use a fine-tooth blade (80+ teeth for table saw, 60+ teeth for circular saw). Score the cut line with a utility knife before cutting. Place the good face down when cutting with a circular saw (blade cuts upward), or good face up on a table saw (blade cuts downward). Use painter's tape along the cut line to further reduce tear-out." },
  ],
};

// ─── OUTDOOR ──────────────────────────────────────────────────────────────────

const deckBoardCalculator: CalculatorConfig = {
  fields: [
    { id: "length", label: "Deck Length", unit: "ft", placeholder: "20" },
    { id: "width", label: "Deck Width", unit: "ft", placeholder: "12" },
    { id: "boardWidth", label: "Board Width", unit: "in", defaultValue: 5.5, placeholder: "5.5" },
    { id: "boardLength", label: "Board Length", unit: "ft", defaultValue: 12, placeholder: "12" },
  ],
  calculate: (v) => {
    const r = calculateDeckBoards(v.length as number, v.width as number, v.boardWidth as number, v.boardLength as number);
    const withWaste = Math.ceil(r.boardCount * 1.1);
    return [
      { label: `${r.boardCount} deck boards needed (before waste)` },
      { label: `${withWaste} deck boards recommended (includes 10% waste)` },
      { label: `${r.totalLinearFeet} total linear feet of decking` },
      { label: `${r.areaSqFt} sq ft of deck area` },
    ];
  },
  disclaimer:
    "This estimate includes a recommended 10% waste factor for cuts and end waste. Actual waste varies with deck shape complexity, board lengths available, and whether you stagger joints. Diagonal and herringbone patterns increase waste to 15-20%.",
  howToUse: [
    "Measure the total length and width of your deck in feet.",
    "Enter the board width in inches - standard deck boards are 5.5 inches (nominal 2x6) or 3.5 inches (nominal 2x4).",
    "Enter the board length - common lengths are 8, 10, 12, 16, and 20 feet.",
    "Click Calculate to get the total number of boards, linear footage, and area coverage.",
  ],
  materialInfo:
    "Deck boards are the visible surface of your deck and take the most wear from foot traffic, furniture, weather, and UV exposure. The most common material choices are pressure-treated lumber, cedar, redwood, and composite decking.\n\nPressure-treated southern yellow pine (SYP) is the most popular choice for budget-conscious projects. Standard 5/4x6 (1 inch thick by 5.5 inches wide) deck boards cost $1.50 to $3.00 per linear foot and are rated for ground contact when treated to 0.40 pcf retention. Boards are available in 8, 10, 12, 16, and 20-foot lengths. The treatment protects against rot and termites but requires annual sealing or staining to prevent graying, warping, and splitting. Expect a 10 to 15-year lifespan with proper maintenance.\n\nCedar and redwood are naturally rot-resistant softwoods prized for their appearance. Western red cedar deck boards run $3.00 to $5.00 per linear foot, while redwood ranges from $5.00 to $8.00. Both species are softer than treated pine and dent more easily, but they are dimensionally stable and less prone to warping. Cedar decks last 15 to 20 years with periodic sealing.\n\nComposite decking (Trex, TimberTech, Fiberon) is made from wood fibers and recycled plastic. Prices range from $4.00 to $12.00 per linear foot depending on the product line. Composites never need staining, resist rot and insects, and carry 25 to 50-year warranties. However, they require specific fastening systems, expand and contract with temperature, and can get very hot in direct sunlight. Most composite boards are 12, 16, or 20 feet long.\n\nBoard spacing is critical: maintain a 1/8 to 1/4-inch gap between boards for drainage and ventilation. For pressure-treated boards installed wet, butt the boards tight - they will shrink as they dry. For kiln-dried and composite boards, leave the full gap during installation.",
  nextSteps: [
    { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator/" },
    { label: "Deck Railing Calculator", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Start the first board perfectly straight and square to the house - every subsequent board follows this line.",
    "Pre-drill the ends of boards within 2 inches of the edge to prevent splitting, especially with treated lumber.",
    "Stagger butt joints by at least 2 board positions for a stronger, more attractive deck surface.",
    "Crown boards upward (the bark side down) so water runs off rather than pooling on the surface.",
    "Leave a 1/4-inch gap between the house wall and the first deck board for drainage and expansion.",
  ],
  commonMistakes: [
    "Not leaving gaps between boards - tight-butted dry boards will buckle when they absorb moisture and expand.",
    "Using too-short screws - deck screws should penetrate at least 1.5 inches into the joist for proper holding power.",
    "Ignoring grain direction - installing boards bark-side up causes cupping and water pooling on the surface.",
    "Running all butt joints over the same joist - this creates a visible line and weakens the deck structure; always stagger joints.",
    "Skipping end sealer on cut ends - untreated cut ends absorb water and rot faster than the treated faces of the board.",
  ],
  faqs: [
    {
      question: "How many deck boards do I need for a 12x16 deck?",
      answer: "A 12x16-foot deck using standard 5/4x6 (5.5-inch wide) boards needs approximately 35 boards at 16-foot lengths, or 53 boards at 12-foot lengths (with butt joints). With 10% waste, order 39 or 58 boards respectively. Using 16-foot boards eliminates butt joints on the 16-foot dimension, creating a cleaner look.",
    },
    {
      question: "What size deck boards should I use?",
      answer: "The most common deck board is 5/4x6 (actual 1 inch x 5.5 inches). This provides a good balance of strength, appearance, and cost. For heavy commercial traffic, 2x6 boards (1.5 x 5.5 inches actual) offer more stiffness. Composite boards come in 5.5-inch and 7.25-inch widths. Wider boards cover area faster but are more prone to cupping.",
    },
    {
      question: "How far apart should deck boards be spaced?",
      answer: "Leave 1/8 to 1/4 inch between deck boards for drainage and airflow. For pressure-treated boards installed wet (fresh from the lumberyard), butt them tightly together - they will shrink to the proper gap as they dry over 2 to 4 weeks. Composite boards should always be gapped per the manufacturer's instructions, typically 3/16 to 1/4 inch.",
    },
    {
      question: "How long do deck boards last?",
      answer: "Pressure-treated pine deck boards last 10 to 15 years with annual sealing. Cedar lasts 15 to 20 years with periodic maintenance. Composite decking lasts 25 to 50 years with minimal maintenance. Untreated wood decking can fail in as little as 3 to 5 years in wet climates. The substructure (joists and beams) typically outlasts the deck boards if properly built with treated lumber.",
    },
    {
      question: "Should I use screws or nails for deck boards?",
      answer: "Deck screws are strongly preferred over nails. Use #8 or #10 coated deck screws, 2.5 to 3 inches long, with two screws per board at each joist. Screws hold better over time, resist popping, and allow easy board replacement. Hidden fastener systems (like Camo or Tiger Claw) create a screw-free surface appearance.",
    },
    {
      question: "How much does deck board material cost?",
      answer: "Pressure-treated 5/4x6 deck boards cost $1.50 to $3.00 per linear foot ($18 to $36 per 12-foot board). Cedar runs $3.00 to $5.00 per linear foot. Composite ranges from $4.00 to $12.00 per linear foot. For a 12x16-foot deck, material cost for the deck boards alone ranges from about $600 (treated pine) to $2,400 (premium composite).",
    },
  ],
};

const deckFootingCalculator: CalculatorConfig = {
  fields: [
    { id: "deckLength", label: "Deck Length", unit: "ft", placeholder: "20" },
    { id: "deckWidth", label: "Deck Width", unit: "ft", placeholder: "12" },
    { id: "maxSpan", label: "Max Post Spacing", unit: "ft", defaultValue: 8, placeholder: "8" },
  ],
  calculate: (v) => {
    const r = calculateDeckFootings(v.deckLength as number, v.deckWidth as number, v.maxSpan as number);
    return [
      { label: `${r.footingCount} concrete footings needed` },
      { label: `${r.postCount} support posts required` },
      { label: `${r.beamCount} beams needed (running across deck width)` },
      { label: "Tip: Each footing should be at least 12 inches in diameter and extend below the frost line." },
    ];
  },
  disclaimer:
    "Footing depth must meet local frost line requirements. This calculator provides a grid layout estimate - actual footing placement depends on deck design, loads, soil conditions, and building code. Always consult your local building department for footing specifications.",
  howToUse: [
    "Enter your deck length and width in feet.",
    "Set the maximum post spacing - 8 feet is typical for 2x8 beams, 6 feet for 2x6 beams.",
    "Click Calculate to get the number of footings, posts, and beams needed.",
    "Use the footing count to estimate concrete - each 12-inch diameter by 42-inch deep footing uses about 2.3 cubic feet of concrete.",
  ],
  materialInfo:
    "Deck footings are concrete piers that transfer the weight of the deck structure and its live loads to the ground below the frost line. Without proper footings, freeze-thaw cycles will heave the deck, causing it to shift, crack, and separate from the house.\n\nThe two most common footing methods are poured concrete piers using Sonotubes (cardboard form tubes) and precast concrete deck blocks (only suitable for freestanding ground-level decks in some jurisdictions). For any elevated or attached deck, poured footings extending below the frost line are required by building code.\n\nStandard residential deck footings use 10-inch or 12-inch diameter Sonotubes. The depth depends on the local frost line - 36 to 48 inches in northern states, 12 to 24 inches in the south. Each 12-inch diameter by 42-inch deep footing requires approximately 2.3 cubic feet (0.085 cubic yards) of concrete. For a deck with 9 footings, you need about 0.8 cubic yards total - roughly 35 bags of 80 lb concrete mix.\n\nPost spacing depends on beam size and species. For a standard 2-ply 2x8 treated beam, maximum post spacing is 8 feet. For 2-ply 2x10 beams, spacing can increase to 10 feet. For 2-ply 2x6 beams, keep spacing at 6 feet or less. Beam rows (running perpendicular to joists) are typically spaced 6 to 8 feet apart depending on joist size and span tables.\n\nPost-to-footing connections require approved hardware. Set a J-bolt or post base anchor in the wet concrete, then attach the post with a Simpson ABA or ABU post base. Never embed wood posts directly in concrete - this traps moisture and causes rot at the most critical structural connection in the deck.\n\nFooting concrete should be at least 3,500 PSI and be poured in dry conditions. Allow 24 to 48 hours of cure time before loading footings with posts and framing.",
  nextSteps: [
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Concrete Column Calculator", href: "/calculators/foundation/concrete-column-calculator/" },
  ],
  installationTips: [
    "Dig footing holes at least 6 inches below the frost line - check your local building code for the exact depth required.",
    "Use Sonotubes (cardboard form tubes) to create clean, round footings with a consistent diameter.",
    "Set J-bolt anchors in the wet concrete before it cures - use a template to keep them centered and plumb.",
    "Crown the top of the footing slightly above grade so water drains away from the post base.",
    "Wait at least 48 hours before attaching posts to the footings to allow proper concrete curing.",
  ],
  commonMistakes: [
    "Placing footings too shallow - footings above the frost line will heave in winter, lifting and distorting the entire deck.",
    "Embedding wood posts directly in concrete - this traps moisture against the wood and causes rot within 5 to 10 years; use a metal post base instead.",
    "Spacing posts too far apart - exceeding the beam span rating leads to sagging, bouncing, and potential structural failure.",
    "Not flaring the footing base - a bell-shaped bottom provides more bearing area on the soil and resists uplift forces.",
    "Pouring footings on loose or organic soil - footings must bear on undisturbed or compacted mineral soil to prevent settling.",
  ],
  faqs: [
    {
      question: "How deep should deck footings be?",
      answer: "Deck footings must extend below the local frost line to prevent heaving. This depth ranges from 12 inches in southern states to 48 inches or more in northern regions. Check your local building code for the exact frost depth requirement. In general, 42 inches is a safe depth for most of the northern United States.",
    },
    {
      question: "How many footings does a 12x16 deck need?",
      answer: "A 12x16-foot deck with 8-foot post spacing typically needs 6 footings arranged in 2 rows of 3. If the deck is attached to the house with a ledger board, the house side does not need footings. For a freestanding deck, add a third row for 9 total footings.",
    },
    {
      question: "What diameter Sonotube should I use for deck footings?",
      answer: "For most residential decks, 10-inch or 12-inch diameter Sonotubes are standard. Use 12-inch tubes for two-story decks, hot tubs, or heavy load applications. Some codes allow 8-inch tubes for small ground-level decks. Larger diameters (16 to 24 inches) are used for commercial or multi-story structures.",
    },
    {
      question: "Can I use precast concrete blocks instead of poured footings?",
      answer: "Precast deck blocks (like Dek-Block) are only allowed for freestanding, ground-level decks in some jurisdictions. They sit on the surface and do not extend below the frost line, so they are not suitable for attached or elevated decks. Always check your local building code - many areas require poured footings for all deck construction.",
    },
    {
      question: "How much concrete do I need per deck footing?",
      answer: "A standard 12-inch diameter by 42-inch deep footing requires about 2.3 cubic feet of concrete, which equals approximately 4 bags of 80 lb pre-mixed concrete. A 10-inch diameter by 42-inch deep footing uses about 1.6 cubic feet (roughly 3 bags). Multiply by the number of footings to get your total concrete needed.",
    },
    {
      question: "How far apart should deck posts be?",
      answer: "Maximum post spacing depends on the beam size. For a doubled 2x8 beam, maximum spacing is 8 feet. For doubled 2x10 beams, up to 10 feet. For doubled 2x6 beams, keep spacing at 6 feet or less. These values assume standard pressure-treated southern yellow pine (No. 2 grade). Always consult span tables for your specific lumber species and grade.",
    },
  ],
};

const deckRailingCalculator: CalculatorConfig = {
  fields: [
    { id: "perimeter", label: "Deck Perimeter", unit: "ft", placeholder: "56" },
    { id: "openingSide", label: "House Side Length (no railing)", unit: "ft", placeholder: "16" },
  ],
  calculate: (v) => {
    const r = calculateDeckRailing(v.perimeter as number, v.openingSide as number);
    return [
      { label: `${r.postCount} railing posts needed` },
      { label: `${r.balusterCount} balusters needed` },
      { label: `${r.railLinearFeet} linear feet of top and bottom rail` },
      { label: "Tip: Building code requires a 36-inch minimum railing height for residential decks and 42 inches for commercial." },
    ];
  },
  disclaimer:
    "This estimate is based on standard 6-foot post spacing and 4-inch baluster spacing per IRC building code. Actual requirements may vary by jurisdiction. Always verify railing height, baluster spacing, and post specifications with your local building department.",
  howToUse: [
    "Measure the total perimeter of your deck in feet (add up all sides).",
    "Enter the length of the side attached to the house - this side does not need railing.",
    "Click Calculate to get post count, baluster count, and rail linear footage.",
    "The calculator assumes standard 6-foot post spacing and 4-inch on-center baluster spacing.",
  ],
  materialInfo:
    "Deck railing is a critical safety feature required by building code on any deck surface 30 inches or more above grade (24 inches in some jurisdictions). The International Residential Code (IRC) specifies a minimum railing height of 36 inches for residential decks and 42 inches for commercial or multi-family structures.\n\nRailing systems consist of four main components: posts, top rail, bottom rail, and balusters (spindles). Posts are typically 4x4 pressure-treated lumber or aluminum, spaced no more than 6 feet apart (8 feet maximum in some codes). Posts must be securely bolted to the deck frame - never just screwed to the deck boards or fascia. Use 1/2-inch carriage bolts or approved post-mount hardware like Simpson DTT2Z tension ties.\n\nBalusters must be spaced so that a 4-inch sphere cannot pass between them. For standard 1.5-inch square balusters, this means roughly 4 inches on center. The IRC also requires that the gap between the deck surface and the bottom rail be less than 4 inches, and that no opening in the railing allows a 4-inch sphere to pass through at any point.\n\nTop and bottom rails are typically made from 2x4 pressure-treated lumber, composite rail kits, or aluminum extrusions. A 2x6 flat cap on top of the posts creates a comfortable drink rail. Most composite railing systems (Trex, TimberTech, Deckorators) come as kits with pre-cut balusters, rail sections, and post sleeves in 6-foot and 8-foot lengths.\n\nWood railing materials cost $15 to $30 per linear foot installed. Composite railing systems run $30 to $60 per linear foot. Aluminum and cable railing systems range from $50 to $100 per linear foot. For a typical 12x16-foot deck (approximately 40 linear feet of railing after subtracting the house side), wood railing costs $600 to $1,200 and composite costs $1,200 to $2,400.\n\nRailing is one of the most common deck code violations. Inspectors frequently flag insufficient post attachment, excessive baluster spacing, below-minimum railing height, and gaps exceeding 4 inches between the deck surface and bottom rail.",
  nextSteps: [
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator/" },
  ],
  installationTips: [
    "Bolt railing posts through the rim joist or deck frame with 1/2-inch carriage bolts - never attach posts with screws or lag bolts alone.",
    "Use a spacer jig (cut a 4-inch block of wood) to maintain consistent baluster spacing across all sections.",
    "Pre-assemble railing sections on the ground - it is much easier and more accurate than building in place.",
    "Install a 2x6 flat cap rail on top for a comfortable drink rail that guests will appreciate.",
    "Notch posts around the rim joist for maximum strength rather than face-mounting them to the outside of the fascia.",
  ],
  commonMistakes: [
    "Face-mounting posts with screws only - posts must be bolted through the rim joist or use approved post-mount hardware to resist outward force.",
    "Spacing balusters too far apart - code requires that a 4-inch sphere cannot pass through any opening in the railing.",
    "Making railing too short - 36 inches minimum from the deck surface to the top of the rail; measure from the deck boards, not the joist tops.",
    "Leaving more than 4 inches between the deck surface and the bottom rail - this gap allows small children to roll underneath.",
    "Using untreated lumber for railing posts - posts are exposed to weather on all sides and will rot in 3 to 5 years without treatment or sealing.",
  ],
  faqs: [
    {
      question: "How tall does a deck railing need to be?",
      answer: "The IRC requires a minimum railing height of 36 inches for residential decks. This is measured from the deck surface to the top of the rail. Commercial and multi-family structures require 42 inches. Some local codes exceed these minimums - always check with your building department. For decks higher than 8 feet above grade, some jurisdictions require 42-inch residential railings.",
    },
    {
      question: "How far apart should railing posts be?",
      answer: "Railing posts should be spaced no more than 6 feet apart for wood railings and up to 8 feet for reinforced or metal railings, depending on local code. Posts must be placed at every corner, at the top and bottom of stairs, and at both sides of gate openings. Closer spacing (4 feet) may be required for heavy drink-rail applications.",
    },
    {
      question: "How many balusters do I need per foot?",
      answer: "With standard 1.5-inch square balusters and 4-inch code maximum spacing, you need approximately 3 balusters per linear foot of railing. For round 3/4-inch balusters, the count is similar since the spacing is measured between the balusters. A typical 6-foot railing section uses 17 to 19 balusters.",
    },
    {
      question: "When is a deck railing required?",
      answer: "Building code requires a railing (guard) when the deck surface is 30 inches or more above the adjacent grade. Some jurisdictions lower this threshold to 24 inches. Stairs with more than 3 risers also require a graspable handrail (different from a guard rail) on at least one side. Even if not required by code, adding a railing to a low deck improves safety.",
    },
    {
      question: "What is the best material for deck railing?",
      answer: "For durability and low maintenance, composite or aluminum railing systems are the best choice despite higher upfront cost. They never need painting or staining and carry 20 to 25-year warranties. For budget projects, pressure-treated wood railing costs less but requires annual maintenance. Cable railing offers a modern, view-preserving look but is the most expensive option at $60 to $100 per linear foot.",
    },
    {
      question: "Can I install horizontal railing instead of vertical balusters?",
      answer: "Horizontal railing (with cables or boards running side to side) is allowed in many jurisdictions but prohibited in some areas because it can be climbable by children. Check your local code. When allowed, horizontal members must still prevent a 4-inch sphere from passing through. Cable railing typically uses 3/16-inch stainless steel cables spaced 3 inches apart with intermediate posts every 4 feet to prevent cable deflection.",
    },
  ],
};

const deckStairCalculator: CalculatorConfig = {
  fields: [
    { id: "totalRise", label: "Total Rise (deck height)", unit: "in", placeholder: "48" },
    { id: "stairWidth", label: "Stair Width", unit: "ft", defaultValue: 3, placeholder: "3" },
  ],
  calculate: (v) => {
    const r = calculateDeckStairs(v.totalRise as number, v.stairWidth as number);
    const totalRunFt = Math.round(r.totalRunInches / 12 * 10) / 10;
    return [
      { label: `${r.numberOfSteps} steps (7-inch rise, 11-inch run each)` },
      { label: `${r.stringerCount} stair stringers needed (16" OC spacing)` },
      { label: `${r.treadBoardCount} tread boards (2 per step)` },
      { label: `${r.riserBoardCount} riser boards` },
      { label: `${totalRunFt} ft total stair run (horizontal distance)` },
    ];
  },
  disclaimer:
    "This calculator uses standard 7-inch rise and 11-inch run per step, which meets most building codes. Actual rise per step may vary slightly based on total deck height. Building code requires consistent riser height throughout the staircase - always verify with your local building department.",
  howToUse: [
    "Measure the total rise in inches - this is the vertical distance from the ground to the top of the deck surface.",
    "Enter the desired stair width in feet - 36 inches (3 feet) is the code minimum for residential decks.",
    "Click Calculate to get the number of steps, stringer count, tread boards, and riser boards needed.",
    "Use the total run to plan the landing area - stairs need clear space at the bottom equal to the stair width.",
  ],
  materialInfo:
    "Deck stairs connect the deck surface to the ground and are one of the most structurally critical and code-regulated elements of a deck. Building code strictly governs riser height, tread depth, stairway width, headroom, handrail requirements, and landing dimensions.\n\nThe two standard approaches to deck stair construction are cut stringers and housed (routed) stringers. Cut stringers are the most common residential method - a 2x12 board is notched in a sawtooth pattern to support the treads and risers. Each cut removes material from the board, so the effective throat (remaining wood behind the cuts) must be at least 3.5 inches to maintain structural integrity.\n\nThe IRC specifies a maximum riser height of 7-3/4 inches and a minimum tread depth of 10 inches. The ideal residential stair has a 7-inch rise and 11-inch run, which produces a comfortable 37-degree angle. All risers must be the same height, with a maximum 3/8-inch variation between any two risers in the same flight. This means you cannot simply divide the deck height by a convenient number - you must calculate the exact rise per step.\n\nStringer spacing follows the same rules as joist spacing: 16 inches on center for standard loads. A 36-inch wide stair typically needs 3 stringers (one on each side plus one in the center). For stair widths over 36 inches, add a stringer for each additional 16 inches. Stringers must be made from pressure-treated lumber since they rest on or near the ground.\n\nTread boards are typically two 5/4x6 or 2x6 deck boards per step, with a 1/4-inch gap between them and a 1-inch nosing overhang at the front. Riser boards are optional by code in many areas but recommended to prevent children from climbing through the stairs. When used, risers are typically 1x8 boards.\n\nStair stringers must land on a concrete pad, footing, or compacted gravel base - never directly on soil. A 4-inch concrete pad at least 36 inches wide and 36 inches deep (from the bottom riser) provides a solid, code-compliant landing. The landing must be level and extend at least the width of the stairs in the direction of travel.",
  nextSteps: [
    { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator/" },
    { label: "Deck Railing Calculator", href: "/calculators/outdoor/deck-railing-calculator/" },
    { label: "Concrete Steps Calculator", href: "/calculators/foundation/concrete-steps-calculator/" },
  ],
  installationTips: [
    "Use a framing square with stair gauges to mark consistent 7-inch rise and 11-inch run cuts on the stringer.",
    "Cut stringers from 2x12 pressure-treated lumber - the remaining throat after cuts must be at least 3.5 inches.",
    "Attach stringers to the deck frame with an approved stair stringer connector (Simpson LSC or similar), not just toenails.",
    "Pour a concrete landing pad at the base of the stairs at least 4 inches thick and as wide as the stairway.",
    "Test all steps with a level after installation - uneven risers are a tripping hazard and a code violation.",
  ],
  commonMistakes: [
    "Uneven riser heights - code allows a maximum 3/8-inch variation between risers; inconsistent risers are the leading cause of stair falls.",
    "Using 2x10 lumber for stringers instead of 2x12 - after cutting, a 2x10 stringer does not have enough throat depth for structural safety.",
    "Not supporting the bottom of the stringers on a concrete pad - stringers resting on soil will rot and sink within 2 to 3 years.",
    "Omitting a center stringer on stairs wider than 36 inches - without center support, treads flex and bounce underfoot.",
    "Forgetting to account for the deck board thickness when calculating total rise - measure from the finished deck surface, not the joist tops.",
  ],
  faqs: [
    {
      question: "How do I calculate the number of deck steps?",
      answer: "Divide the total rise (vertical distance from ground to deck surface) by the target riser height (7 inches is standard). Round up to a whole number. For a 48-inch total rise: 48 / 7 = 6.86, so you need 7 steps. The actual riser height is 48 / 7 = 6.86 inches per step. All risers must be the same height within 3/8-inch tolerance.",
    },
    {
      question: "How wide do deck stairs need to be?",
      answer: "Building code requires a minimum stairway width of 36 inches, measured between the handrails (or between the stringers if no handrails are required). For comfort and two-person traffic, 48-inch stairs are popular. Wider stairs (60 inches or more) create a grand entrance but require additional center stringers every 16 inches.",
    },
    {
      question: "How many stringers do I need for deck stairs?",
      answer: "For a standard 36-inch wide stairway, use 3 stringers - one on each side and one in the center. For every additional 16 inches of width, add another stringer. A 48-inch stair needs 4 stringers. Stringer spacing should not exceed 16 inches on center to prevent tread flex.",
    },
    {
      question: "Do deck stairs need a handrail?",
      answer: "Yes. Any flight of stairs with 4 or more risers requires a graspable handrail on at least one side per the IRC. A graspable handrail must be 1.25 to 2 inches in diameter (or equivalent graspable profile) and mounted 34 to 38 inches above the stair nosings. If the stairway is wider than 44 inches, handrails are required on both sides.",
    },
    {
      question: "What angle should deck stairs be?",
      answer: "The ideal residential stair angle is between 30 and 37 degrees. Using the standard 7-inch rise and 11-inch run produces a 32.5-degree angle, which is comfortable for most people. Steeper stairs (over 40 degrees) feel unsafe and may not meet code. Shallower stairs (under 25 degrees) waste space and feel awkward to climb.",
    },
    {
      question: "Do I need a landing pad at the bottom of deck stairs?",
      answer: "Yes. Stair stringers must rest on a solid surface, not bare soil. A 4-inch thick concrete pad at least 36 inches wide (matching the stair width) and 36 inches deep is the standard landing. Some codes also require a landing for stairways with a vertical rise of more than 12 feet - the landing must be as wide as the stairs and at least 36 inches in the direction of travel.",
    },
  ],
};

// ─── REGISTRY MAP ─────────────────────────────────────────────────────────────

export const calculatorRegistry: Record<string, Record<string, CalculatorConfig>> = {
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
