// ─── STAIR CALCULATIONS ──────────────────────────────────────────────────────

export interface StairResult {
  risers: number;
  treads: number;
  actualRiseInches: number;
  actualRunInches: number;
  totalRunInches: number;
  stringerLengthInches: number;
}

export function calculateStairs(
  totalRiseInches: number,
  desiredRunInches: number,
  stairWidthInches: number
): StairResult {
  // Ideal rise per step is 7–7.75 inches (IRC R311.7.5.1: max 7.75")
  const idealRise = 7.5;
  const risers = Math.round(totalRiseInches / idealRise);
  const treads = risers - 1;

  const actualRiseInches = totalRiseInches / risers;
  const actualRunInches = desiredRunInches;

  const totalRunInches = treads * actualRunInches;
  const stringerLengthInches = Math.sqrt(
    totalRiseInches * totalRiseInches + totalRunInches * totalRunInches
  );

  return {
    risers,
    treads,
    actualRiseInches: Math.round(actualRiseInches * 100) / 100,
    actualRunInches: Math.round(actualRunInches * 100) / 100,
    totalRunInches: Math.round(totalRunInches * 100) / 100,
    stringerLengthInches: Math.round(stringerLengthInches * 100) / 100,
  };
}

export interface StairStringerResult {
  stringerLengthInches: number;
  stringerCount: number;
  treadBoards: number;
  riserBoards: number;
}

export function calculateStairStringer(
  totalRiseInches: number,
  runPerStepInches: number,
  numberOfSteps: number,
  stringerBoardWidth: number
): StairStringerResult {
  const totalRunInches = (numberOfSteps - 1) * runPerStepInches;
  const stringerLengthInches = Math.sqrt(
    totalRiseInches * totalRiseInches + totalRunInches * totalRunInches
  );

  // Stringers every 16" OC across the width
  const stringerCount = Math.ceil(stringerBoardWidth / 16) + 1;

  // Two tread boards per step (using 5.5" deck boards side by side)
  const treadBoards = numberOfSteps * 2;

  // One riser board per step
  const riserBoards = numberOfSteps;

  return {
    stringerLengthInches: Math.round(stringerLengthInches * 100) / 100,
    stringerCount,
    treadBoards,
    riserBoards,
  };
}

export interface RiseOverRunResult {
  ratio: string;
  percentage: number;
  angle: number;
  description: string;
}

export function calculateRiseOverRun(
  rise: number,
  run: number
): RiseOverRunResult {
  const ratio = `${rise}:${run}`;
  const percentage = (rise / run) * 100;
  const angle = Math.atan(rise / run) * (180 / Math.PI);

  let description = "";
  if (angle < 20) {
    description = "Gentle slope — suitable for ramps and accessible pathways";
  } else if (angle < 32) {
    description = "Moderate slope — typical for exterior stairs and landscaping";
  } else if (angle < 42) {
    description = "Standard staircase — meets IRC residential building code (30°–37° ideal)";
  } else if (angle < 50) {
    description = "Steep staircase — may require handrails on both sides";
  } else {
    description = "Very steep — consider a ladder or ship's ladder design";
  }

  return {
    ratio,
    percentage: Math.round(percentage * 100) / 100,
    angle: Math.round(angle * 100) / 100,
    description,
  };
}

export interface SpiralStaircaseResult {
  treads: number;
  risePerTreadInches: number;
  treadDepthAtWalkInches: number;
  centerColumnHeightInches: number;
}

export function calculateSpiralStaircase(
  floorToFloorHeightInches: number,
  wellDiameterInches: number,
  rotationDegrees: number
): SpiralStaircaseResult {
  // IRC requires max 9.5" rise per tread for spiral stairs
  // and minimum 26" tread depth at the walk line (12" from narrow end)
  const maxRise = 9.5;
  const treads = Math.ceil(floorToFloorHeightInches / maxRise);
  const risePerTreadInches = floorToFloorHeightInches / treads;

  // Walk line is 12" from the narrow edge (center column)
  // Walk line radius = 12 inches from center
  const walkLineRadius = 12;
  const treadAngleRad = (rotationDegrees / treads) * (Math.PI / 180);
  const treadDepthAtWalkInches = walkLineRadius * treadAngleRad;

  const centerColumnHeightInches = floorToFloorHeightInches;

  return {
    treads,
    risePerTreadInches: Math.round(risePerTreadInches * 100) / 100,
    treadDepthAtWalkInches: Math.round(treadDepthAtWalkInches * 100) / 100,
    centerColumnHeightInches: Math.round(centerColumnHeightInches * 100) / 100,
  };
}

export interface StairWithLandingResult {
  totalSteps: number;
  stepsPerFlight: number;
  landingHeightInches: number;
  totalRunInches: number;
}

export interface BalusterSpacingResult {
  balustersPerSection: number;
  totalBalusters: number;
  actualSpacing: number;
  sections: number;
}

export function calculateBalusterSpacing(
  railLengthInches: number,
  balusterWidthInches: number,
  postWidthInches: number,
  numberOfPosts: number
): BalusterSpacingResult {
  // Max gap between balusters is 4" per IRC R312.1.3
  const maxGap = 4;

  // Sections = number of spaces between posts (numberOfPosts - 1)
  const sections = Math.max(numberOfPosts - 1, 1);

  // Available space per section (subtract post widths from total rail length)
  const totalPostWidth = numberOfPosts * postWidthInches;
  const usableLength = railLengthInches - totalPostWidth;
  const sectionLength = usableLength / sections;

  // Each baluster takes up balusterWidth + gap, gap ≤ 4"
  // Number of balusters per section: ceil(sectionLength / (balusterWidth + maxGap))
  // Then recalculate actual gap to distribute evenly
  const balustersPerSection = Math.ceil(sectionLength / (balusterWidthInches + maxGap));
  const totalBalusters = balustersPerSection * sections;

  // Actual spacing (gap) between balusters
  // balusters fill: balustersPerSection * balusterWidth
  // remaining space is divided into (balustersPerSection + 1) gaps (gaps at both ends against posts)
  const remainingSpace = sectionLength - balustersPerSection * balusterWidthInches;
  const gaps = balustersPerSection + 1;
  const actualSpacing = remainingSpace / gaps;

  return {
    balustersPerSection,
    totalBalusters,
    actualSpacing: Math.round(actualSpacing * 100) / 100,
    sections,
  };
}

export function calculateStairWithLanding(
  totalRiseInches: number,
  landingDepthInches: number,
  desiredRunInches: number
): StairWithLandingResult {
  // Split rise into two equal flights
  const idealRise = 7.5;
  const totalSteps = Math.round(totalRiseInches / idealRise);
  const stepsPerFlight = Math.ceil(totalSteps / 2);

  const landingHeightInches = stepsPerFlight * (totalRiseInches / totalSteps);

  // Total run = run of first flight + landing depth + run of second flight
  const treadsPerFlight = stepsPerFlight - 1;
  const flightRunInches = treadsPerFlight * desiredRunInches;
  const totalRunInches = flightRunInches * 2 + landingDepthInches;

  return {
    totalSteps,
    stepsPerFlight,
    landingHeightInches: Math.round(landingHeightInches * 100) / 100,
    totalRunInches: Math.round(totalRunInches * 100) / 100,
  };
}
