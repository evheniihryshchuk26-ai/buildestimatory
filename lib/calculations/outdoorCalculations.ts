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
