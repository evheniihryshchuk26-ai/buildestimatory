export interface AnchorBoltResult {
  bolts: number;
  label: string;
}

export function calculateAnchorBolts(perimeter: number, spacing = 6): AnchorBoltResult {
  const bolts = Math.ceil(perimeter / spacing);
  return { bolts, label: `${bolts} anchor bolts (${spacing} ft spacing)` };
}

export interface SillSealResult {
  rolls: number;
  label: string;
}

export function calculateSillSeal(perimeter: number, rollCoverage = 50): SillSealResult {
  const rolls = Math.ceil(perimeter / rollCoverage);
  return { rolls, label: `${rolls} rolls of sill seal` };
}

export interface SillPlateResult {
  plates: number;
  label: string;
}

export function calculateSillPlates(perimeter: number, boardLength = 8): SillPlateResult {
  const plates = Math.ceil(perimeter / boardLength);
  return { plates, label: `${plates} pressure treated sill plates (${boardLength} ft boards)` };
}

export interface ConcreteResult {
  cubicYards: number;
  cubicYardsWithWaste: number;
  cubicFeet: number;
  bags60lb: number;
  bags80lb: number;
  label: string;
}

export function calculateConcrete(lengthFt: number, widthFt: number, depthInches: number): ConcreteResult {
  const depthFt = depthInches / 12;
  const cubicFeet = lengthFt * widthFt * depthFt;
  const cubicYards = cubicFeet / 27;
  const cubicYardsWithWaste = Math.ceil(cubicYards * 1.1 * 10) / 10; // 10% waste, round to 0.1
  const bags60lb = Math.ceil(cubicFeet / 0.45); // 60lb bag covers 0.45 cu ft
  const bags80lb = Math.ceil(cubicFeet / 0.6);  // 80lb bag covers 0.6 cu ft

  return {
    cubicYards: Math.round(cubicYards * 10) / 10,
    cubicYardsWithWaste,
    cubicFeet: Math.round(cubicFeet * 10) / 10,
    bags60lb,
    bags80lb,
    label: `${cubicYardsWithWaste} cubic yards of concrete (includes 10% waste)`,
  };
}

export interface ConcreteSlabResult {
  cubicYards: number;
  cubicYardsWithWaste: number;
  bags60lb: number;
  bags80lb: number;
}

export function calculateConcreteSlab(lengthFt: number, widthFt: number, thicknessInches: number): ConcreteSlabResult {
  const thicknessFt = thicknessInches / 12;
  const cubicFeet = lengthFt * widthFt * thicknessFt;
  const cubicYards = cubicFeet / 27;
  const cubicYardsWithWaste = Math.ceil(cubicYards * 1.1 * 10) / 10;
  const bags60lb = Math.ceil(cubicFeet / 0.45);
  const bags80lb = Math.ceil(cubicFeet / 0.6);
  return {
    cubicYards: Math.round(cubicYards * 10) / 10,
    cubicYardsWithWaste,
    bags60lb,
    bags80lb,
  };
}

export interface ConcreteFootingResult {
  cubicYards: number;
  cubicYardsWithWaste: number;
  bags60lb: number;
  bags80lb: number;
}

export function calculateConcreteFooting(lengthFt: number, widthFt: number, depthFt: number): ConcreteFootingResult {
  const cubicFeet = lengthFt * widthFt * depthFt;
  const cubicYards = cubicFeet / 27;
  const cubicYardsWithWaste = Math.ceil(cubicYards * 1.1 * 10) / 10;
  const bags60lb = Math.ceil(cubicFeet / 0.45);
  const bags80lb = Math.ceil(cubicFeet / 0.6);
  return {
    cubicYards: Math.round(cubicYards * 10) / 10,
    cubicYardsWithWaste,
    bags60lb,
    bags80lb,
  };
}

export interface ConcreteColumnResult {
  cubicYardsPerColumn: number;
  totalCubicYards: number;
  totalCubicYardsWithWaste: number;
  bags60lb: number;
  bags80lb: number;
}

export function calculateConcreteColumn(diameterInches: number, heightFt: number, quantity: number): ConcreteColumnResult {
  const radiusFt = (diameterInches / 2) / 12;
  const volumePerColumn = Math.PI * radiusFt * radiusFt * heightFt; // cubic feet
  const totalCubicFeet = volumePerColumn * quantity;
  const cubicYardsPerColumn = volumePerColumn / 27;
  const totalCubicYards = totalCubicFeet / 27;
  const totalCubicYardsWithWaste = Math.ceil(totalCubicYards * 1.1 * 10) / 10;
  const bags60lb = Math.ceil(totalCubicFeet / 0.45);
  const bags80lb = Math.ceil(totalCubicFeet / 0.6);
  return {
    cubicYardsPerColumn: Math.round(cubicYardsPerColumn * 100) / 100,
    totalCubicYards: Math.round(totalCubicYards * 10) / 10,
    totalCubicYardsWithWaste,
    bags60lb,
    bags80lb,
  };
}

// ─── GRAVEL ──────────────────────────────────────────────────────────────────

export interface GravelResult {
  cubicFeet: number;
  cubicYards: number;
  tons: number;
  cubicYardsWithWaste: number;
  tonsWithWaste: number;
}

export function calculateGravel(lengthFt: number, widthFt: number, depthInches: number): GravelResult {
  const depthFt = depthInches / 12;
  const cubicFeet = lengthFt * widthFt * depthFt;
  const cubicYards = cubicFeet / 27;
  const tons = cubicYards * 1.4; // gravel weighs ~1.4 tons per cubic yard
  const cubicYardsWithWaste = cubicYards * 1.1; // 10% waste factor
  const tonsWithWaste = cubicYardsWithWaste * 1.4;
  return {
    cubicFeet: Math.round(cubicFeet * 10) / 10,
    cubicYards: Math.round(cubicYards * 10) / 10,
    tons: Math.round(tons * 10) / 10,
    cubicYardsWithWaste: Math.ceil(cubicYardsWithWaste * 10) / 10,
    tonsWithWaste: Math.ceil(tonsWithWaste * 10) / 10,
  };
}

export interface DrivewayGravelResult {
  cubicYards: number;
  tons: number;
  costLow: number;
  costHigh: number;
}

const GRAVEL_WEIGHT_PER_YARD: Record<string, number> = {
  "crushed stone": 1.4,
  "pea gravel": 1.35,
  "road base": 1.5,
  "decomposed granite": 1.45,
};

const GRAVEL_COST_PER_TON: Record<string, [number, number]> = {
  "crushed stone": [25, 50],
  "pea gravel": [30, 55],
  "road base": [20, 40],
  "decomposed granite": [35, 60],
};

export function calculateDrivewayGravel(
  lengthFt: number,
  widthFt: number,
  depthInches: number,
  gravelType: string,
): DrivewayGravelResult {
  const depthFt = depthInches / 12;
  const cubicFeet = lengthFt * widthFt * depthFt;
  const cubicYards = cubicFeet / 27;
  const cubicYardsWithWaste = cubicYards * 1.1;
  const weightPerYard = GRAVEL_WEIGHT_PER_YARD[gravelType] ?? 1.4;
  const tons = cubicYardsWithWaste * weightPerYard;
  const [costPerTonLow, costPerTonHigh] = GRAVEL_COST_PER_TON[gravelType] ?? [25, 50];
  return {
    cubicYards: Math.ceil(cubicYardsWithWaste * 10) / 10,
    tons: Math.ceil(tons * 10) / 10,
    costLow: Math.round(tons * costPerTonLow),
    costHigh: Math.round(tons * costPerTonHigh),
  };
}

export interface ConcreteStepsResult {
  cubicYards: number;
  cubicYardsWithWaste: number;
  bags60lb: number;
  bags80lb: number;
}

// ─── BLOCK FILL ─────────────────────────────────────────────────────────────

export interface BlockFillResult {
  cubicYards: number;
  cubicFeet: number;
  bags80lb: number;
  label: string;
}

const BLOCK_CORE_VOLUME_CY: Record<string, number> = {
  "8 inch": 0.009,
  "10 inch": 0.012,
  "12 inch": 0.015,
};

export function calculateBlockFill(
  numberOfBlocks: number,
  blockSize: string,
  fillType: string,
): BlockFillResult {
  const coreVolume = BLOCK_CORE_VOLUME_CY[blockSize] ?? 0.009;
  const cubicYards = numberOfBlocks * coreVolume;
  const cubicYardsWithWaste = cubicYards * 1.1; // 10% waste
  const cubicFeet = cubicYardsWithWaste * 27;
  const bags80lb = Math.ceil(cubicFeet / 0.6); // 80lb bag covers 0.6 cu ft
  return {
    cubicYards: Math.ceil(cubicYardsWithWaste * 10) / 10,
    cubicFeet: Math.round(cubicFeet * 10) / 10,
    bags80lb,
    label: `${Math.ceil(cubicYardsWithWaste * 10) / 10} cubic yards of ${fillType} (includes 10% waste)`,
  };
}

// ─── MORTAR MIX ─────────────────────────────────────────────────────────────

export interface MortarMixResult {
  bags60lb: number;
  bags80lb: number;
  portlandCementBags: number;
  sandCubicFeet: number;
  mortarCubicFeet: number;
}

const MORTAR_BAGS_PER_100_SQFT: Record<string, number> = {
  "Type N": 7,
  "Type S": 7.5,
  "Type M": 8,
};

const MORTAR_JOINT_FACTOR: Record<string, number> = {
  "0.25": 0.7,
  "0.375": 1.0,
  "0.5": 1.3,
  "0.625": 1.6,
  "0.75": 2.0,
};

export function calculateMortarMix(
  areaSqFt: number,
  mortarType: string,
  jointThicknessInches: number,
): MortarMixResult {
  const baseBagsPer100 = MORTAR_BAGS_PER_100_SQFT[mortarType] ?? 7;
  const jointKey = jointThicknessInches.toString();
  const jointFactor = MORTAR_JOINT_FACTOR[jointKey] ?? 1.0;

  // 60lb bag yields ~0.5 cubic feet of mortar
  // 80lb bag yields ~0.667 cubic feet of mortar
  const rawBags60 = (areaSqFt / 100) * baseBagsPer100 * jointFactor;
  const bags60lb = Math.ceil(rawBags60 * 1.1); // 10% waste
  const bags80lb = Math.ceil(rawBags60 * 0.75 * 1.1); // 80lb does ~33% more

  // Volume of mortar needed
  const mortarCubicFeet = Math.round(rawBags60 * 0.5 * 1.1 * 10) / 10;

  // Mixing from scratch: 1 part portland cement to 3 parts sand (Type N)
  // Type S: 1:0.5:4 (cement:lime:sand), Type M: 1:0.25:3 (cement:lime:sand)
  const cementRatio: Record<string, number> = {
    "Type N": 1 / 4,
    "Type S": 1 / 4.5,
    "Type M": 1 / 3.25,
  };
  const sandRatio: Record<string, number> = {
    "Type N": 3 / 4,
    "Type S": 4 / 4.5,
    "Type M": 3 / 3.25,
  };

  const ratio = cementRatio[mortarType] ?? 0.25;
  const sRatio = sandRatio[mortarType] ?? 0.75;
  // 1 bag portland cement (94lb) = 1 cubic foot
  const portlandCementBags = Math.ceil(mortarCubicFeet * ratio);
  const sandCubicFeet = Math.round(mortarCubicFeet * sRatio * 10) / 10;

  return {
    bags60lb,
    bags80lb,
    portlandCementBags,
    sandCubicFeet,
    mortarCubicFeet,
  };
}

// ─── RETAINING WALL ─────────────────────────────────────────────────────────

export interface RetainingWallResult {
  wallAreaSqFt: number;
  blocks: number;
  capBlocks: number;
  adhesiveTubes: number;
  gravelTons: number;
  drainPipeLinearFeet: number;
}

const BLOCK_DIMENSIONS: Record<string, { widthIn: number; heightIn: number; lengthIn: number; blocksPerSqFt: number }> = {
  "landscape block": { widthIn: 8, heightIn: 4, lengthIn: 12, blocksPerSqFt: 3.0 },
  "cmu block": { widthIn: 8, heightIn: 8, lengthIn: 16, blocksPerSqFt: 1.125 },
  "natural stone": { widthIn: 8, heightIn: 6, lengthIn: 12, blocksPerSqFt: 2.0 },
};

export function calculateRetainingWall(
  wallLengthFt: number,
  wallHeightFt: number,
  blockType: string,
): RetainingWallResult {
  const wallAreaSqFt = wallLengthFt * wallHeightFt;
  const blockInfo = BLOCK_DIMENSIONS[blockType] ?? BLOCK_DIMENSIONS["landscape block"];

  // Blocks needed with 10% waste
  const blocksRaw = wallAreaSqFt * blockInfo.blocksPerSqFt;
  const blocks = Math.ceil(blocksRaw * 1.1);

  // Cap blocks for top row: wall length / (block length in feet)
  const blockLengthFt = blockInfo.lengthIn / 12;
  const capBlocks = Math.ceil(wallLengthFt / blockLengthFt);

  // Adhesive: 1 tube per 25 linear feet of cap
  const adhesiveTubes = Math.ceil(wallLengthFt / 25);

  // Gravel backfill: 1/3 of wall area × 1 ft deep behind wall, converted to tons
  // Roughly 0.5 tons per linear foot of wall per foot of height
  const gravelCubicFt = wallLengthFt * wallHeightFt * 1; // 1 ft wide backfill zone
  const gravelCubicYards = gravelCubicFt / 27;
  const gravelTons = Math.ceil(gravelCubicYards * 1.4 * 10) / 10;

  // Drainage pipe: same length as wall + 10% for fittings
  const drainPipeLinearFeet = Math.ceil(wallLengthFt * 1.1);

  return {
    wallAreaSqFt: Math.round(wallAreaSqFt * 10) / 10,
    blocks,
    capBlocks,
    adhesiveTubes,
    gravelTons,
    drainPipeLinearFeet,
  };
}

// ─── CONCRETE STEPS ─────────────────────────────────────────────────────────

export function calculateConcreteSteps(widthFt: number, riseInches: number, runInches: number, numberOfSteps: number): ConcreteStepsResult {
  const riseFt = riseInches / 12;
  const runFt = runInches / 12;
  // Each step is a block: width × run × cumulative rise from that step to the top
  // This models the solid concrete mass underneath the stairs
  let totalCubicFeet = 0;
  for (let i = 1; i <= numberOfSteps; i++) {
    totalCubicFeet += widthFt * runFt * (riseFt * i);
  }
  // Add a landing/base slab: width × 3 ft deep × 4 inches thick
  totalCubicFeet += widthFt * 3 * (4 / 12);
  const cubicYards = totalCubicFeet / 27;
  const cubicYardsWithWaste = Math.ceil(cubicYards * 1.1 * 10) / 10;
  const bags60lb = Math.ceil(totalCubicFeet / 0.45);
  const bags80lb = Math.ceil(totalCubicFeet / 0.6);
  return {
    cubicYards: Math.round(cubicYards * 10) / 10,
    cubicYardsWithWaste,
    bags60lb,
    bags80lb,
  };
}
