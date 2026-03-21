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
    "Anchor bolts (J-bolts) are L-shaped or J-shaped steel fasteners embedded in wet concrete to mechanically secure the wood sill plate to the foundation. The standard residential anchor bolt is 1/2-inch diameter by 10 inches long, with at least 7 inches of embedment. They are available in hot-dipped galvanized steel for corrosion resistance. The IRC mandates placement every 6 feet on center and within 12 inches of each board end, corner, and joint. In high-wind or seismic zones, engineers may specify 5/8-inch bolts or closer spacing. Epoxy-set retrofit anchor bolts (such as Simpson SET-XP or Hilti HIT-RE 500) are used when bolts were missed during the pour. Expect to pay $1.50 to $3.00 per bolt for standard J-bolts at most building supply stores, with retrofit epoxy anchors costing $8 to $15 each installed.",
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
