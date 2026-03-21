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

export interface ConcreteStepsResult {
  cubicYards: number;
  cubicYardsWithWaste: number;
  bags60lb: number;
  bags80lb: number;
}

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
