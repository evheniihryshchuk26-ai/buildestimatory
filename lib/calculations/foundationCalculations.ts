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
