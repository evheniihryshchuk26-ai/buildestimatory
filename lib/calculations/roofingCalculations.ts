export function calculateTrusses(roofLength: number, spacing: 16 | 24 = 24) {
  const spacingFt = spacing / 12;
  const trusses = Math.ceil(roofLength / spacingFt) + 1;
  return { trusses, label: `${trusses} roof trusses (${spacing}" OC)` };
}

export function calculateRafters(roofLength: number, spacing: 16 | 24 = 16) {
  const spacingFt = spacing / 12;
  const rafters = (Math.ceil(roofLength / spacingFt) + 1) * 2; // both sides
  return { rafters, label: `${rafters} rafters (${spacing}" OC, both sides)` };
}

export function calculateRidgeBoard(roofLength: number, boardLength = 16) {
  const boards = Math.ceil(roofLength / boardLength);
  return { boards, ridgeLength: roofLength, label: `${boards} ridge boards (${roofLength} ft total)` };
}

export function calculateRoofSheathing(roofArea: number) {
  const sheetArea = 32;
  const sheets = Math.ceil(roofArea / sheetArea);
  return { sheets, label: `${sheets} sheets of roof sheathing (4x8)` };
}

export function calculateHClips(sheets: number) {
  const clips = sheets * 2;
  return { clips, label: `${clips} H-clips` };
}

export function calculateUnderlayment(roofArea: number, rollCoverage = 400) {
  const rolls = Math.ceil(roofArea / rollCoverage);
  return { rolls, label: `${rolls} rolls of roofing underlayment` };
}

export function calculateShingles(roofArea: number) {
  const bundleCoverage = 33.3;
  const bundles = Math.ceil(roofArea / bundleCoverage);
  return { bundles, label: `${bundles} bundles of shingles` };
}

export function calculateDripEdge(roofPerimeter: number, pieceLength = 10) {
  const pieces = Math.ceil(roofPerimeter / pieceLength);
  return { pieces, label: `${pieces} pieces of drip edge (${roofPerimeter} ft total)` };
}

export function calculateRoofArea(
  lengthFt: number,
  widthFt: number,
  pitch: number,
  roofType: "gable" | "hip" | "shed" = "gable"
) {
  const flatArea = lengthFt * widthFt;
  const multiplier = Math.round(Math.sqrt(1 + Math.pow(pitch / 12, 2)) * 1000) / 1000;
  let roofArea: number;

  if (roofType === "gable") {
    roofArea = Math.round(flatArea * multiplier * 2 * 100) / 100; // 2 sides
  } else if (roofType === "hip") {
    roofArea = Math.round(flatArea * multiplier * 2.1 * 100) / 100; // ~5% more than gable for hip ridge/valleys
  } else {
    // shed — single slope
    roofArea = Math.round(flatArea * multiplier * 100) / 100;
  }

  const squares = Math.round((roofArea / 100) * 100) / 100;

  return {
    flatArea,
    roofArea,
    multiplier,
    squares,
    roofType,
    label: `Roof area: ${roofArea} sq ft (${squares} squares) — ${roofType} roof, pitch multiplier ${multiplier}`,
  };
}

export function calculateRoofSlope(riseInches: number, runFt: number) {
  const runInches = runFt * 12;
  const pitchPer12 = Math.round((riseInches / runInches) * 12 * 100) / 100;
  const angle = Math.round(Math.atan(riseInches / runInches) * (180 / Math.PI) * 10) / 10;
  const slopePercent = Math.round((riseInches / runInches) * 100 * 10) / 10;

  let materialRecommendation: string;
  if (pitchPer12 < 2) {
    materialRecommendation = "Built-up/membrane roofing only (TPO, EPDM, modified bitumen)";
  } else if (pitchPer12 < 4) {
    materialRecommendation = "Low-slope shingles with special installation (double underlayment, sealant)";
  } else if (pitchPer12 <= 8) {
    materialRecommendation = "Standard asphalt shingles";
  } else {
    materialRecommendation = "Steep slope — consider metal panels or tile";
  }

  return {
    pitchPer12,
    pitchRatio: `${pitchPer12}:12`,
    angle,
    slopePercent,
    materialRecommendation,
    label: `Slope: ${pitchPer12}:12 pitch (${angle}°, ${slopePercent}%) — ${materialRecommendation}`,
  };
}

export function calculateRoofPitch(rise: number, run: number) {
  const pitch = rise / run;
  const pitchRatio = `${rise}:${run}`;
  const angle = Math.round(Math.atan(rise / run) * (180 / Math.PI) * 10) / 10;
  const slopePercent = Math.round(pitch * 100 * 10) / 10;

  // Pitch multiplier for area calculation
  const multiplier = Math.round(Math.sqrt(1 + pitch * pitch) * 1000) / 1000;

  // Standard pitch description
  let description = "Low slope";
  if (pitch >= 0.25 && pitch < 0.5) description = "Standard slope";
  else if (pitch >= 0.5 && pitch < 0.75) description = "Steep slope";
  else if (pitch >= 0.75) description = "Very steep slope";

  return {
    pitchRatio,
    angle,
    slopePercent,
    multiplier,
    description,
    label: `${pitchRatio} pitch (${angle}°) — ${description}`,
  };
}
