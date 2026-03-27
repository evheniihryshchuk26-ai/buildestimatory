// ─── OUTDOOR / DECK CALCULATIONS ──────────────────────────────────────────────

export interface DeckBoardResult {
  boardCount: number;
  totalLinearFeet: number;
  areaSqFt: number;
}

export function calculateDeckBoards(
  lengthFt: number,
  widthFt: number,
  boardWidthInches: number,
  boardLengthFt: number
): DeckBoardResult {
  const areaSqFt = lengthFt * widthFt;
  const gapInches = 0.25; // 1/4" gap between boards
  const effectiveBoardWidthInches = boardWidthInches + gapInches;
  const effectiveBoardWidthFt = effectiveBoardWidthInches / 12;

  // Number of boards across the width (boards run along the length)
  const boardsAcross = Math.ceil(widthFt / effectiveBoardWidthFt);

  // Each board covers boardLengthFt along the length direction
  const boardsPerRow = Math.ceil(lengthFt / boardLengthFt);

  const boardCount = boardsAcross * boardsPerRow;
  const totalLinearFeet = boardCount * boardLengthFt;

  return {
    boardCount,
    totalLinearFeet: Math.round(totalLinearFeet * 10) / 10,
    areaSqFt: Math.round(areaSqFt * 10) / 10,
  };
}

export interface DeckFootingResult {
  footingCount: number;
  postCount: number;
  beamCount: number;
}

export function calculateDeckFootings(
  deckLengthFt: number,
  deckWidthFt: number,
  maxSpanFt: number
): DeckFootingResult {
  // Posts along the length (including both ends)
  const postsAlongLength = Math.floor(deckLengthFt / maxSpanFt) + 1;
  // Rows of posts across the width (including both edges)
  const postsAlongWidth = Math.floor(deckWidthFt / maxSpanFt) + 1;

  const postCount = postsAlongLength * postsAlongWidth;
  const footingCount = postCount; // one footing per post

  // Beams run across the width, one per row of posts along the length
  const beamCount = postsAlongLength;

  return {
    footingCount,
    postCount,
    beamCount,
  };
}

export interface DeckRailingResult {
  postCount: number;
  balusterCount: number;
  railLinearFeet: number;
}

export function calculateDeckRailing(
  perimeterFt: number,
  openingSideFt: number
): DeckRailingResult {
  // Subtract the house side (no railing needed there)
  const railingLengthFt = perimeterFt - openingSideFt;

  // Posts every 6 feet max, plus one at each end/corner
  const postCount = Math.ceil(railingLengthFt / 6) + 1;

  // Balusters every 4 inches (code max spacing is 4" gap, so ~4" OC)
  const balusterCount = Math.ceil(railingLengthFt * 12 / 4);

  // Top rail and bottom rail
  const railLinearFeet = railingLengthFt * 2;

  return {
    postCount,
    balusterCount,
    railLinearFeet: Math.round(railLinearFeet * 10) / 10,
  };
}

export interface DeckStairResult {
  numberOfSteps: number;
  stringerCount: number;
  treadBoardCount: number;
  riserBoardCount: number;
  totalRunInches: number;
}

export interface PostHoleResult {
  cubicFeetPerHole: number;
  totalCubicFeet: number;
  totalCubicYards: number;
  bags50lb: number;
  bags80lb: number;
}

export function calculatePostHole(
  holeDiameterInches: number,
  holeDepthInches: number,
  numberOfHoles: number
): PostHoleResult {
  const radiusFt = holeDiameterInches / 2 / 12;
  const depthFt = holeDepthInches / 12;
  const cubicFeetPerHole = Math.PI * radiusFt * radiusFt * depthFt;
  const totalCubicFeet = cubicFeetPerHole * numberOfHoles;
  const totalCubicYards = totalCubicFeet / 27;

  // 50 lb bag fills ~0.375 cu ft, 80 lb bag fills ~0.6 cu ft
  const bags50lb = Math.ceil(totalCubicFeet / 0.375);
  const bags80lb = Math.ceil(totalCubicFeet / 0.6);

  return {
    cubicFeetPerHole: Math.round(cubicFeetPerHole * 100) / 100,
    totalCubicFeet: Math.round(totalCubicFeet * 100) / 100,
    totalCubicYards: Math.round(totalCubicYards * 100) / 100,
    bags50lb,
    bags80lb,
  };
}

// ─── FENCE CALCULATIONS ──────────────────────────────────────────────────────

export interface FenceResult {
  postCount: number;
  railCount: number;
  picketCount: number;
  totalLinearFeet: number;
  sections: number;
}

export function calculateFence(
  lengthFt: number,
  fenceHeightFt: number,
  postSpacingFt: number
): FenceResult {
  const sections = Math.ceil(lengthFt / postSpacingFt);
  const postCount = sections + 1;

  const railsPerSection = fenceHeightFt <= 5 ? 2 : 3;
  const railCount = railsPerSection * sections;

  const picketSlotInches = 3.75; // 3.5" picket + 0.25" gap
  const picketsPerSection = Math.ceil((postSpacingFt * 12) / picketSlotInches);
  const picketCount = picketsPerSection * sections;

  return {
    postCount,
    railCount,
    picketCount,
    totalLinearFeet: Math.round(lengthFt * 10) / 10,
    sections,
  };
}

export interface FencePostResult {
  postCount: number;
  concreteBags: number;
  gravelBags: number;
  postLengthFt: number;
}

export function calculateFencePost(
  lengthFt: number,
  postSpacingFt: number,
  postLengthFt: number
): FencePostResult {
  const sections = Math.ceil(lengthFt / postSpacingFt);
  const postCount = sections + 1;

  const concreteBags = postCount * 2; // 2 bags of 50lb per post
  const gravelBags = postCount; // 1 bag gravel per post for drainage

  return {
    postCount,
    concreteBags,
    gravelBags,
    postLengthFt,
  };
}

export interface FencePanelResult {
  panelCount: number;
  postCount: number;
  postCaps: number;
}

export function calculateFencePanel(
  lengthFt: number,
  panelWidthFt: number
): FencePanelResult {
  const panelCount = Math.ceil(lengthFt / panelWidthFt);
  const postCount = panelCount + 1;
  const postCaps = postCount;

  return {
    panelCount,
    postCount,
    postCaps,
  };
}

export interface PicketFenceResult {
  picketCount: number;
  railCount: number;
  postCount: number;
  totalBoardFeet: number;
}

export function calculatePicketFence(
  lengthFt: number,
  fenceHeightFt: number,
  picketWidthInches: number,
  gapInches: number
): PicketFenceResult {
  const postSpacingFt = 8;
  const sections = Math.ceil(lengthFt / postSpacingFt);
  const postCount = sections + 1;

  const railsPerSection = fenceHeightFt <= 4 ? 2 : 3;
  const railCount = railsPerSection * sections;

  const slotInches = picketWidthInches + gapInches;
  const picketCount = Math.ceil((lengthFt * 12) / slotInches);

  const picketBoardFeet =
    picketCount * (0.75 / 12) * (picketWidthInches / 12) * fenceHeightFt;
  const railBoardFeet =
    railCount * (1.5 / 12) * (3.5 / 12) * postSpacingFt;
  const postBoardFeet =
    postCount * (3.5 / 12) * (3.5 / 12) * (fenceHeightFt + 2);

  const totalBoardFeet = picketBoardFeet + railBoardFeet + postBoardFeet;

  return {
    picketCount,
    railCount,
    postCount,
    totalBoardFeet: Math.round(totalBoardFeet * 10) / 10,
  };
}

export function calculateDeckStairs(
  totalRiseInches: number,
  stairWidthFt: number
): DeckStairResult {
  const risePerStep = 7; // standard 7" rise
  const runPerStep = 11; // standard 11" run

  const numberOfSteps = Math.ceil(totalRiseInches / risePerStep);
  const totalRunInches = numberOfSteps * runPerStep;

  // Stringers every 16" on center
  const stairWidthInches = stairWidthFt * 12;
  const stringerCount = Math.ceil(stairWidthInches / 16) + 1;

  // Two tread boards per step (using 5.5" deck boards side by side)
  const treadBoardCount = numberOfSteps * 2;

  // One riser board per step
  const riserBoardCount = numberOfSteps;

  return {
    numberOfSteps,
    stringerCount,
    treadBoardCount,
    riserBoardCount,
    totalRunInches,
  };
}

// ─── POND ───────────────────────────────────────────────────────────────────

export interface PondResult {
  gallons: number;
  linerLengthFt: number;
  linerWidthFt: number;
  linerAreaSqFt: number;
  pumpGPH: number;
  sandUnderlaymentSqFt: number;
}

const POND_SHAPE_FACTOR: Record<string, number> = {
  rectangular: 1.0,
  oval: 0.8,
  kidney: 0.7,
};

export function calculatePond(
  lengthFt: number,
  widthFt: number,
  depthFt: number,
  pondShape: string,
): PondResult {
  const shapeFactor = POND_SHAPE_FACTOR[pondShape] ?? 1.0;

  // Volume in gallons: L × W × D × 7.48 gallons per cubic foot × shape factor
  const cubicFeet = lengthFt * widthFt * depthFt * shapeFactor;
  const gallons = Math.round(cubicFeet * 7.48);

  // Liner size: add 2× depth + 2 ft overlap on each dimension
  const linerLengthFt = Math.ceil(lengthFt + 2 * depthFt + 2);
  const linerWidthFt = Math.ceil(widthFt + 2 * depthFt + 2);
  const linerAreaSqFt = linerLengthFt * linerWidthFt;

  // Pump GPH: volume × 0.5 for turnover every 2 hours
  const pumpGPH = Math.ceil(gallons * 0.5);

  // Sand/underlayment: same as liner area for full coverage
  const sandUnderlaymentSqFt = linerAreaSqFt;

  return {
    gallons,
    linerLengthFt,
    linerWidthFt,
    linerAreaSqFt,
    pumpGPH,
    sandUnderlaymentSqFt,
  };
}
