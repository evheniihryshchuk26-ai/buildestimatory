export function calculateHousewrap(wallArea: number, rollCoverage = 1000) {
  const rolls = Math.ceil(wallArea / rollCoverage);
  return { rolls, label: `${rolls} rolls of housewrap (Tyvek)` };
}

export function calculateSeamTape(wallArea: number, tapeCoverage = 100) {
  const rolls = Math.ceil(wallArea / tapeCoverage);
  return { rolls, label: `${rolls} rolls of seam tape` };
}

export function calculateWindowFlashing(windows: number, windowPerimeter = 14) {
  const totalFlashing = windows * windowPerimeter;
  return { totalFlashing, label: `${totalFlashing} lin. ft. of window flashing` };
}

export function calculateDoorFlashing(doors: number, doorPerimeter = 18) {
  const totalFlashing = doors * doorPerimeter;
  return { totalFlashing, label: `${totalFlashing} lin. ft. of door flashing` };
}

export function calculateVinylSiding(wallArea: number, panelCoverage = 2) {
  const panels = Math.ceil(wallArea / panelCoverage);
  return { panels, label: `${panels} vinyl siding panels` };
}

export function calculateHardieSiding(wallArea: number, boardCoverage = 1.17) {
  const boards = Math.ceil(wallArea / boardCoverage);
  return { boards, label: `${boards} Hardie plank boards` };
}

// ─── SOFFIT ────────────────────────────────────────────────────────────────────

export interface SoffitResult {
  panels: number;
  jChannelLinearFeet: number;
  ventStrips: number;
}

export function calculateSoffit(
  perimeterFt: number,
  soffitWidthInches: number,
  panelLengthFt: number
): SoffitResult {
  // Total soffit area: perimeter × soffit width (both sides of the house)
  const soffitWidthFt = soffitWidthInches / 12;
  const totalSoffitAreaSqFt = perimeterFt * soffitWidthFt;

  // Panel coverage: panel length × typical panel width (12" = 1 ft)
  const panelCoverageSqFt = panelLengthFt * 1;
  const panels = Math.ceil(totalSoffitAreaSqFt / panelCoverageSqFt);

  // J-channel runs along both edges of the soffit (house side + fascia side)
  const jChannelLinearFeet = Math.ceil(perimeterFt * 2);

  // Continuous vent strips: one per side of the house along the full perimeter
  // Vent strips typically come in 8 ft lengths
  const ventStrips = Math.ceil(perimeterFt / 8);

  return {
    panels,
    jChannelLinearFeet,
    ventStrips,
  };
}

// ─── BOARD AND BATTEN ──────────────────────────────────────────────────────────

export interface BoardAndBattenResult {
  boards: number;
  battens: number;
  totalLinearFeet: number;
  nails: number;
}

export function calculateBoardAndBatten(
  wallAreaSqFt: number,
  boardWidthInches: number,
  battenWidthInches: number,
  wallHeightFt: number
): BoardAndBattenResult {
  // Wall length derived from area / height
  const wallLengthFt = wallAreaSqFt / wallHeightFt;
  const wallLengthInches = wallLengthFt * 12;

  // Boards: placed side by side with a small gap covered by battens
  // Effective spacing = boardWidth (battens cover the seam)
  const boardWidthFt = boardWidthInches / 12;
  const boards = Math.ceil(wallLengthInches / boardWidthInches);

  // Battens: one between each pair of boards + one at each end
  const battens = boards + 1;

  // Total linear feet of material (boards + battens, each wallHeight tall)
  const totalLinearFeet = (boards + battens) * wallHeightFt;

  // Nails: 2 nails per board per 24" of height + 1 nail per batten per 24"
  const nailRowsPerBoard = Math.ceil((wallHeightFt * 12) / 24);
  const nailsForBoards = boards * nailRowsPerBoard * 2;
  const nailsForBattens = battens * nailRowsPerBoard * 1;
  const nails = nailsForBoards + nailsForBattens;

  return {
    boards,
    battens,
    totalLinearFeet: Math.round(totalLinearFeet * 10) / 10,
    nails,
  };
}
