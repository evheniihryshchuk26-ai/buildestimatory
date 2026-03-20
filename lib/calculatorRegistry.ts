import { FieldConfig } from "@/components/calculators/CalculatorForm";
import { ResultItem } from "@/components/calculators/ResultCard";

import {
  calculateAnchorBolts,
  calculateSillSeal,
  calculateSillPlates,
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
} from "./calculations/hardwareCalculations";

export interface CalculatorConfig {
  fields: FieldConfig[];
  calculate: (values: Record<string, number | string>) => ResultItem[];
  disclaimer: string;
  howToUse: string[];
  materialInfo: string;
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
    "Anchor bolts (J-bolts) are embedded in the concrete foundation to secure the sill plate. The IRC requires anchor bolts every 6 feet and within 12 inches of corners.",
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
    { question: "What size anchor bolts are required by code?", answer: "The IRC requires a minimum 1/2-inch diameter anchor bolt embedded at least 7 inches into concrete, spaced no more than 6 feet apart." },
    { question: "Do I need anchor bolts at every corner?", answer: "Yes. Place an anchor bolt within 12 inches of each end of every sill plate board and at every foundation corner." },
    { question: "Can I add anchor bolts after the concrete has cured?", answer: "Yes, using epoxy anchor bolts (Simpson SET or similar). These are drilled in and bonded with structural epoxy." },
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
    "Sill seal is a foam gasket material that goes between the concrete foundation and the pressure-treated sill plate. It prevents air infiltration, moisture wicking, and insect entry.",
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
    { question: "Is sill seal required by building code?", answer: "Yes. Most building codes including the IRC require a sill seal or gasket between the foundation and wood sill plate." },
    { question: "What thickness of sill seal should I use?", answer: "Standard 1/4-inch foam sill seal is sufficient for most applications. Use 1/2-inch in climates with significant temperature swings." },
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
    "Pressure-treated (PT) sill plates are the lowest horizontal wood member of the wall framing. The treatment resists rot and insect damage from ground contact and moisture.",
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
    { question: "What size lumber is used for sill plates?", answer: "Sill plates are typically 2x6 or 2x8 lumber, matching the wall framing width. Most modern homes use 2x6 for better insulation." },
    { question: "How is a sill plate attached?", answer: "Sill plates are secured with anchor bolts embedded in the concrete, typically 1/2-inch J-bolts with washers and nuts." },
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
    "Rim joists (also called band joists) run along the perimeter of the floor frame, capping the ends of the floor joists. They are typically the same dimension as the floor joists (2x8, 2x10, 2x12).",
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
    { question: "What is the difference between a rim joist and a band joist?", answer: "They are the same thing — the term varies by region. Both refer to the perimeter joist that caps the ends of the floor joists." },
    { question: "Should rim joists be insulated?", answer: "Yes. Rim joists account for up to 15% of heat loss in many homes. Rigid foam cut-to-fit and caulked is the most effective method." },
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
    "Floor joists are the horizontal structural members that support the subfloor and floor loads. Common sizes are 2x8, 2x10, and 2x12 depending on span. Engineered LVL joists span farther than dimensional lumber.",
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
    { question: "Should I use 16\" or 24\" floor joist spacing?", answer: "16\" OC is standard for most residential floors. It provides a stiffer floor feel. 24\" OC is acceptable with thicker subfloor (3/4\" or 7/8\") and is more common in manufactured housing." },
    { question: "What size floor joists do I need?", answer: "Joist size depends on span. A 2x8 can span about 12 feet, a 2x10 about 15 feet, and a 2x12 about 17 feet at 16\" OC. Always verify with your local span tables." },
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
    "Bridging (also called blocking or cross-bridging) is installed between floor joists at mid-span to prevent rotation and lateral movement. It is required for spans over 8 feet.",
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
    { question: "Is bridging required by code?", answer: "Most codes require blocking or bridging for floor joists with spans over 8 feet, at mid-span intervals. Check your local IRC adoption." },
    { question: "Solid blocking vs. cross-bridging — which is better?", answer: "Solid blocking (lumber cut to fit between joists) is generally preferred for its superior lateral support and ease of use as a nail base for pipes and conduit." },
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
    "Subfloor adhesive (PL400, Liquid Nails) is applied to floor joists before laying OSB panels to eliminate squeaky floors. Adhesive bonds significantly improve floor system stiffness.",
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
    { question: "Can I skip subfloor adhesive?", answer: "Technically yes if you use screws instead of nails, but adhesive dramatically reduces floor squeaks and increases stiffness. Most pros use both adhesive and nails or screws." },
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
    "OSB (Oriented Strand Board) subfloor panels are the standard subfloor material. Use 3/4\" Advantech or equivalent tongue-and-groove OSB for best results.",
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
    { question: "OSB vs plywood for subfloor — which is better?", answer: "Both work well. OSB is less expensive. Plywood is more dimensionally stable in wet conditions. Advantech engineered OSB offers the best moisture resistance of any panel." },
    { question: "What thickness subfloor do I need?", answer: "3/4\" (23/32\") for 16\" OC joists. 7/8\" or 1\" for 24\" OC joists or heavy loads." },
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
    "Wall studs are vertical lumber members that carry the structural load of the wall. Standard sizes are 2x4 for interior walls and 2x6 for exterior walls (better insulation). Pre-cut studs (92 5/8\" for 8-ft walls) save time.",
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
    { question: "Should I use 2x4 or 2x6 studs for exterior walls?", answer: "2x6 at 24\" OC is increasingly preferred for exterior walls because it allows R-19 or R-21 insulation vs. R-13 in 2x4 walls. The energy savings over the life of the home offset the higher lumber cost." },
    { question: "What is the standard stud height for an 8-foot ceiling?", answer: "Pre-cut studs for 8-foot ceilings are 92 5/8\" (7 feet 8 5/8\"). Combined with a single bottom plate and double top plate (3 × 1.5\" = 4.5\"), the total wall height is 97 1/8\" which leaves room for drywall." },
    { question: "How many studs do I need per linear foot of wall?", answer: "At 16\" OC you need approximately 0.75 studs per linear foot. At 24\" OC you need approximately 0.5 studs per linear foot. Always add extras for corners and openings." },
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
    "The bottom plate (sole plate) is the horizontal framing member at the base of each wall. Exterior bottom plates should be pressure-treated where in contact with concrete.",
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
    { question: "Does the bottom plate need to be pressure treated?", answer: "Yes, if the bottom plate is in contact with concrete or masonry. The IRC requires pressure-treated lumber within 6 inches of grade or in contact with concrete." },
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
    "Most walls require a double top plate for structural continuity. The second plate (cap plate) overlaps joints in the first plate and ties walls together at corners and intersections.",
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
    { question: "Do all walls need a double top plate?", answer: "Typically yes. Non-load-bearing interior walls can sometimes use a single top plate, but most codes and framing standards call for a double top plate on load-bearing walls." },
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
    "Headers span door and window openings, transferring roof and floor loads around the opening to jack studs and king studs. Header size depends on span and load. Common sizes: 2x6 for small windows up to 4x12 for large openings.",
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
    { question: "What size header do I need for a 3-foot door?", answer: "A doubled 2x6 or 2x8 is sufficient for a 3-foot interior or exterior door in most single-story applications. Consult span tables for multi-story or high-load situations." },
    { question: "How long should the header be?", answer: "Header length = rough opening width + 3 inches (for the two jack/trimmer studs at 1.5\" each). This calculator adds 12 inches to allow proper bearing." },
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
    "Exterior wall sheathing (OSB or plywood) provides racking resistance (lateral strength) and a nail base for siding. 7/16\" or 1/2\" OSB is standard. Plywood offers better moisture resistance.",
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
    { question: "Do I need let-in bracing if I use sheathing?", answer: "No. Structural sheathing (OSB or plywood) provides all required lateral bracing. Let-in metal straps or diagonal boards are only needed when sheathing is not used." },
    { question: "Can I use foam insulation board as wall sheathing?", answer: "Rigid foam alone does not provide structural racking resistance. You must use OSB or plywood sheathing in the required wall segments, or use structural sheathing panels." },
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
    "Roof trusses are engineered wood assemblies that span the full width of the building without interior bearing walls. They are factory-built to custom specifications and must be ordered from a truss manufacturer.",
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
    { question: "What is the standard roof truss spacing?", answer: "24\" on center is the most common residential truss spacing. It reduces truss count and cost. Some designs use 16\" OC for heavier loads or longer spans." },
    { question: "Can I reuse old trusses?", answer: "Generally no. Engineered trusses are designed for specific spans and loads. Reusing trusses without engineer approval is not safe or code compliant." },
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
    "Rafters are the sloped structural members that form the roof frame. Unlike trusses, stick-built rafters allow for an open attic or cathedral ceiling. Common sizes: 2x6, 2x8, 2x10 depending on span and snow load.",
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
    { question: "How do I calculate rafter length?", answer: "Rafter length = √(run² + rise²). Use the Pythagorean theorem. For a 12-foot run with a 6/12 pitch: rise = 6 ft, length = √(144+36) = ~13.4 ft." },
    { question: "What size rafters for a 20-foot span?", answer: "For a 20-foot span (10-foot run each side) at 16\" OC in most snow zones, a 2x10 is typically required. Always check your local span tables." },
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
    "The ridge board (or ridge beam) runs along the peak of the roof. For stick-built roofs, it is one size larger than the rafters (e.g., 1x10 or 2x10 ridge with 2x8 rafters).",
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
    { question: "What is the difference between a ridge board and a ridge beam?", answer: "A ridge board is a non-structural member in a traditional rafter roof. A ridge beam is structural, used in cathedral ceilings where collar ties cannot be used." },
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
    "Roof sheathing (7/16\" or 1/2\" OSB or 1/2\" CDX plywood) creates the structural deck for roofing materials. H-clips are required between unsupported panel edges to prevent sagging.",
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
    { question: "What thickness roof sheathing should I use?", answer: "7/16\" OSB for 16\" OC rafters/trusses. 1/2\" for 24\" OC. CDX plywood is a premium alternative with better moisture resistance." },
    { question: "How do I calculate roof area?", answer: "Roof area = plan footprint × slope factor. Slope factors: 4/12 = 1.054, 6/12 = 1.118, 8/12 = 1.202, 10/12 = 1.302, 12/12 = 1.414." },
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
    "Standard 3-tab or architectural (dimensional) shingles come in bundles covering approximately 33.3 sq ft each. 3 bundles = 1 roofing square = 100 sq ft. Architectural shingles are preferred for their longevity (30-year warranty) and appearance.",
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
    { question: "How many bundles of shingles per square?", answer: "Standard 3-tab and most architectural shingles require 3 bundles per square (100 sq ft). Some premium heavy shingles may require 4 bundles per square." },
    { question: "How do I calculate roof area?", answer: "Measure your house footprint length × width, then multiply by your roof slope factor. For a 6/12 pitch, multiply by 1.118. For a 4/12 pitch, multiply by 1.054." },
    { question: "How long do architectural shingles last?", answer: "Quality architectural shingles carry 30-year warranties and typically last 25–30 years in most US climates with proper installation and ventilation." },
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
    "Roofing underlayment is the moisture barrier installed over the roof sheathing before shingles. Options: 15# felt (economical, 400 sq ft/roll), 30# felt (heavier, 200 sq ft/roll), synthetic (lighter, stronger, 1000 sq ft/roll).",
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
    { question: "Do I need underlayment under shingles?", answer: "Yes. Underlayment is required by most codes and all shingle manufacturer warranties. It is your secondary moisture barrier if shingles are damaged." },
    { question: "Felt vs. synthetic underlayment — which should I use?", answer: "Synthetic underlayment is now preferred by most roofers. It is lighter, tear-resistant, walkable, and can be left exposed longer. Felt can absorb moisture and tear during installation." },
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
    "Drip edge is a metal flashing installed at the roof eaves and rake edges to direct water away from the fascia and into the gutters. Required by code for all shingled roofs.",
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
    { question: "Is drip edge required?", answer: "Yes. The IRC requires drip edge flashing on all eaves and rakes of shingled roofs since the 2012 code cycle." },
    { question: "What profile of drip edge should I use?", answer: "Type C (also called D-style) drip edge is most common for residential roofing. It has a wider lower flange that keeps water away from the fascia better than Type A." },
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
    "Housewrap (DuPont Tyvek or similar) is a weather-resistant barrier (WRB) that goes over wall sheathing before siding. It blocks bulk water while allowing vapor to escape, preventing mold and rot.",
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
    { question: "Is housewrap required by code?", answer: "Yes. The IRC requires a water-resistive barrier (WRB) on all exterior walls behind siding. Housewrap, building paper, or self-adhered membranes all qualify." },
    { question: "Can I use felt paper instead of housewrap?", answer: "Yes, #15 building paper (felt) is still code-compliant. However, synthetic housewraps outperform felt in most metrics: strength, vapor permeability, and UV resistance." },
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
    "Vinyl siding panels typically expose 4–5 inches of face per course. Most 12-foot panels cover about 2 sq ft of net wall area per linear foot. Coverage varies by profile — check manufacturer specs.",
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
    { question: "How do I calculate vinyl siding?", answer: "Vinyl siding is sold in squares (100 sq ft) or by the carton. Measure wall area in square feet, divide by 100 for squares, then add 10% for waste." },
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
    "HardiePlank is fiber cement lap siding. Standard 5/4×6 boards at 4-inch exposure cover approximately 1.17 sq ft per linear foot. It is fire-resistant, insect-resistant, and dimensionally stable.",
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
    { question: "How long does Hardie siding last?", answer: "HardiePlank carries a 30-year limited warranty and commonly lasts 50+ years when properly painted and maintained." },
    { question: "Can I install Hardie siding myself?", answer: "Yes, but it is heavy (3x heavier than vinyl) and requires fiber cement tools. Most homeowners hire it out, but experienced DIYers can do it." },
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
    "Window flashing tape (self-adhered flashing membrane) seals the rough opening around windows to prevent water infiltration. Install in a specific sequence: sill first, then jambs, then head flap.",
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
    { question: "What type of window flashing tape should I use?", answer: "Self-adhered flashing tapes like DuPont FlexWrap, Henry Blueskin, or 3M All Weather Flashing are most common. Use a product compatible with your housewrap manufacturer." },
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
    "Fiberglass or mineral wool batts fill the stud/joist cavities. For 2x4 walls: R-13 or R-15. For 2x6 walls: R-19 or R-21. For attic: R-38 to R-60 depending on climate zone.",
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
    { question: "What R-value do I need for exterior walls?", answer: "The IRC prescriptive requirements range from R-13 (climate zone 1–3) to R-20 or R-21 (climate zones 5–8). Check the energy code for your zip code." },
    { question: "Fiberglass vs. mineral wool batts — which is better?", answer: "Mineral wool (Rockwool/Safe'n'Sound) is denser, better at sound control, fire resistant, and moisture resistant. Fiberglass is less expensive. Both provide similar R-values per inch." },
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
    "Drywall (gypsum board, Sheetrock) comes in 4x8 sheets (32 sq ft each). Use 1/2\" for walls, 5/8\" Type X for fire-rated assemblies and ceilings. Lightweight drywall is easier to handle but slightly more expensive.",
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
    { question: "How many screws per sheet of drywall?", answer: "Approximately 32 screws per 4x8 sheet — 16\" OC into studs with screws every 8\" on edges and 12\" in the field." },
    { question: "How much joint compound do I need?", answer: "Plan for approximately 1 bucket (4.5 gal) per 16 sheets for three coats. This calculator estimates based on that ratio." },
    { question: "Should I use screws or nails for drywall?", answer: "Screws are strongly preferred. They do not pop like nails, provide better hold, and are required by many codes. Use a dimpler bit to set depth automatically." },
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
    "Use coarse-thread screws for wood framing (most common). Fine-thread for metal studs. 1-1/4\" for walls, 1-5/8\" for ceilings (extra holding power).",
  installationTips: [
    "Use an auto-feed screw gun or a dimpler bit on a standard drill.",
    "Screws should dimple 1/32\" without breaking the paper.",
  ],
  commonMistakes: [
    "Using drywall nails instead of screws — pops are common.",
    "Using the wrong thread — coarse-thread required for wood framing.",
  ],
  faqs: [
    { question: "What size drywall screws do I need?", answer: "1-1/4\" for walls into 16\" OC studs. 1-5/8\" for ceilings. 3\" screws for double-layer drywall applications." },
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
    "All-purpose joint compound (mud) is used for taping, topping, and finishing drywall. A 4.5-gallon bucket covers approximately 16 sheets over three coats.",
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
    { question: "What is the difference between all-purpose and lightweight compound?", answer: "All-purpose is heavier, stronger, and better for taping coats. Lightweight is easier to sand and better for final finish coats. Many pros use all-purpose for tape and lightweight for top coats." },
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
    "16d (3.5\") sinker nails are the standard framing nail. Common framing guns use 3.1\" to 3.5\" stick or coil nails. One 30-lb box of 16d sinkers contains ~500 nails.",
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
    { question: "What size nails for framing walls?", answer: "16d common nails (3.5\") for face-nailing through plates. 10d or 8d for toenailing studs. Most framing nailers use 3.1\" to 3.5\" nails in stick or coil format." },
    { question: "How many nails per stud?", answer: "Two 16d nails each end (4 per stud for top and bottom plate). Add extra for toenailing at corners. Average ~6 nails per stud total." },
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
    "Joist hangers (Simpson LUS or LB series) are galvanized metal connectors that support joist ends at beams and headers. Required where joists cannot rest on a ledger or plate.",
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
    { question: "Do I need joist hangers on all joists?", answer: "Joist hangers are required wherever joists frame into a beam or header rather than resting on top of a bearing surface. For joists that rest on a sill plate, they are optional but recommended." },
    { question: "What nails do I use for joist hangers?", answer: "Use 1.5\" x 10d joist hanger nails (often called hanger nails or LULs). Do not use regular 16d sinkers — they are too large for the nail holes." },
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
    "Hurricane ties (Simpson H2.5A, H10, or similar) connect rafters/trusses to the top plate, resisting uplift from high winds. Required by code in wind zones above 90 mph.",
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
    { question: "Are hurricane ties required by code?", answer: "Yes in wind zones 90 mph+ (most of the US Gulf and Atlantic coasts). The 2018+ IRC requires continuous load path connections in all areas, making hurricane ties essentially universal." },
    { question: "What is the uplift rating of a hurricane tie?", answer: "Common ties like the Simpson H2.5A are rated for 540 lbs uplift. Heavier-duty ties like the H10A are rated for 1,330+ lbs. Choose based on your roof load and wind zone." },
  ],
};

// ─── REGISTRY MAP ─────────────────────────────────────────────────────────────

export const calculatorRegistry: Record<string, Record<string, CalculatorConfig>> = {
  foundation: {
    "anchor-bolt-calculator": anchorBoltCalculator,
    "sill-seal-calculator": sillSealCalculator,
    "sill-plate-calculator": sillPlateCalculator,
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
  },
};
