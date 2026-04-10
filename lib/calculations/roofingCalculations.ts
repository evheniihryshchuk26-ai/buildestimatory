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

// ─── HIP ROOF ──────────────────────────────────────────────────────────────

export function calculateHipRoof(
  buildingLengthFt: number,
  buildingWidthFt: number,
  pitch: number,
  rafterSpacing: 16 | 24 = 16
) {
  const run = buildingWidthFt / 2; // half-width = common rafter run
  const pitchRatio = pitch / 12;
  const rise = run * pitchRatio;
  const multiplier = Math.sqrt(1 + pitchRatio * pitchRatio);

  // Common rafter length (hypotenuse of rise and run)
  const commonRafterLength = Math.round(Math.sqrt(run * run + rise * rise) * 100) / 100;

  // Hip rafter length (runs diagonally at 45°, so horizontal run = run × √2)
  const hipRun = run * Math.SQRT2;
  const hipRafterLength = Math.round(Math.sqrt(hipRun * hipRun + rise * rise) * 100) / 100;

  // Ridge length — shorter than building length because hips cut in
  const ridgeLength = Math.round(Math.max(buildingLengthFt - buildingWidthFt, 0) * 100) / 100;

  // Common rafters on the two long sides (along the ridge)
  const spacingFt = rafterSpacing / 12;
  const longSideRafters = ridgeLength > 0 ? (Math.ceil(ridgeLength / spacingFt) + 1) * 2 : 0;

  // King common rafters — 1 per hip triangle (4 triangles on a hip roof)
  const kingCommons = 4;

  // Jack rafters — shortened rafters on each hip triangle face
  // Each triangular face gets roughly (run / spacingFt) jack rafters per side of the hip
  const jacksPerTriangle = Math.max(Math.ceil(run / spacingFt) - 1, 0);
  const jackRafters = jacksPerTriangle * 2 * 4; // 2 sides per hip line × 4 hip lines... but hip roof has 4 hip lines, each side has jacks
  // More accurately: 4 hip lines, each with jacksPerTriangle on each side = jacksPerTriangle * 8
  // But the triangular ends share hip lines, so: 4 corners × jacksPerTriangle jacks per corner side × 2 sides = already correct
  const totalJackRafters = jacksPerTriangle * 8;

  const commonRafters = longSideRafters + kingCommons;
  const hipRafters = 4; // always 4 hip rafters

  // Roof area — full building footprint × pitch multiplier (hip covers entire footprint)
  const flatArea = buildingLengthFt * buildingWidthFt;
  const roofArea = Math.round(flatArea * multiplier * 100) / 100;
  const squares = Math.round((roofArea / 100) * 100) / 100;

  return {
    commonRafters,
    commonRafterLength,
    hipRafters,
    hipRafterLength,
    jackRafters: totalJackRafters,
    kingCommons,
    ridgeLength,
    roofArea,
    squares,
    rise: Math.round(rise * 100) / 100,
    multiplier: Math.round(multiplier * 1000) / 1000,
    label: `Hip roof: ${roofArea} sq ft (${squares} squares) — ${commonRafters} common rafters, ${hipRafters} hip rafters, ${totalJackRafters} jack rafters`,
  };
}

// ─── GAMBREL ROOF ──────────────────────────────────────────────────────────

export function calculateGambrelRoof(
  buildingLengthFt: number,
  buildingWidthFt: number,
  lowerPitch: number,
  upperPitch: number,
  rafterSpacing: 16 | 24 = 16
) {
  const halfWidth = buildingWidthFt / 2;

  // Lower section typically covers ~2/3 of the half-width, upper covers ~1/3
  const lowerRun = halfWidth * 0.67;
  const upperRun = halfWidth * 0.33;

  const lowerPitchRatio = lowerPitch / 12;
  const upperPitchRatio = upperPitch / 12;

  const lowerRise = lowerRun * lowerPitchRatio;
  const upperRise = upperRun * upperPitchRatio;
  const totalRise = lowerRise + upperRise;

  // Rafter lengths (hypotenuse)
  const lowerRafterLength = Math.round(Math.sqrt(lowerRun * lowerRun + lowerRise * lowerRise) * 100) / 100;
  const upperRafterLength = Math.round(Math.sqrt(upperRun * upperRun + upperRise * upperRise) * 100) / 100;

  // Rafter counts — both sides of the roof
  const spacingFt = rafterSpacing / 12;
  const raftersPerSide = Math.ceil(buildingLengthFt / spacingFt) + 1;
  const lowerRafters = raftersPerSide * 2; // both sides
  const upperRafters = raftersPerSide * 2;

  // Roof area — sum of lower slope area + upper slope area, both sides
  const lowerMultiplier = Math.sqrt(1 + lowerPitchRatio * lowerPitchRatio);
  const upperMultiplier = Math.sqrt(1 + upperPitchRatio * upperPitchRatio);

  const lowerArea = lowerRun * buildingLengthFt * lowerMultiplier * 2;
  const upperArea = upperRun * buildingLengthFt * upperMultiplier * 2;
  const roofArea = Math.round((lowerArea + upperArea) * 100) / 100;
  const squares = Math.round((roofArea / 100) * 100) / 100;

  // Wall height gained — the lower steep section acts like a wall
  const wallHeightGained = Math.round(lowerRise * 100) / 100;

  return {
    lowerRafters,
    lowerRafterLength,
    upperRafters,
    upperRafterLength,
    roofArea,
    squares,
    wallHeightGained,
    totalRise: Math.round(totalRise * 100) / 100,
    lowerRise: Math.round(lowerRise * 100) / 100,
    upperRise: Math.round(upperRise * 100) / 100,
    label: `Gambrel roof: ${roofArea} sq ft (${squares} squares) — ${lowerRafters} lower rafters (${lowerRafterLength} ft), ${upperRafters} upper rafters (${upperRafterLength} ft), ${wallHeightGained} ft wall height gained`,
  };
}

// ─── GABLE ROOF ────────────────────────────────────────────────────────────

export function calculateGableRoof(
  buildingLengthFt: number,
  buildingWidthFt: number,
  pitch: number,
  rafterSpacing: 16 | 24 = 16
) {
  const run = buildingWidthFt / 2;
  const pitchRatio = pitch / 12;
  const rise = run * pitchRatio;

  // Rafter length
  const rafterLength = Math.round(Math.sqrt(run * run + rise * rise) * 100) / 100;

  // Ridge length = building length
  const ridgeLength = buildingLengthFt;

  // Rafter count — both sides
  const spacingFt = rafterSpacing / 12;
  const raftersPerSide = Math.ceil(buildingLengthFt / spacingFt) + 1;
  const rafters = raftersPerSide * 2;

  // Roof area — two rectangular slopes
  const multiplier = Math.sqrt(1 + pitchRatio * pitchRatio);
  const slopeArea = run * buildingLengthFt * multiplier;
  const roofArea = Math.round(slopeArea * 2 * 100) / 100;
  const squares = Math.round((roofArea / 100) * 100) / 100;

  // Gable end area — two triangles
  const gableEndArea = Math.round(buildingWidthFt * rise / 2 * 100) / 100; // one triangle
  const totalGableArea = Math.round(gableEndArea * 2 * 100) / 100;

  return {
    rafters,
    rafterLength,
    ridgeLength,
    roofArea,
    squares,
    gableEndArea: totalGableArea,
    singleGableArea: gableEndArea,
    rise: Math.round(rise * 100) / 100,
    multiplier: Math.round(multiplier * 1000) / 1000,
    label: `Gable roof: ${roofArea} sq ft (${squares} squares) — ${rafters} rafters (${rafterLength} ft each), ridge ${ridgeLength} ft, gable ends ${totalGableArea} sq ft`,
  };
}

// ─── LEAN-TO / SHED ROOF ───────────────────────────────────────────────────

export function calculateLeanToRoof(
  lengthFt: number,
  runFt: number,
  pitch: number,
  rafterSpacing: 16 | 24 = 16
) {
  const pitchRatio = pitch / 12;
  const rise = runFt * pitchRatio;

  // Rafter length (hypotenuse)
  const rafterLength = Math.round(Math.sqrt(runFt * runFt + rise * rise) * 100) / 100;

  // Rafter count — single slope
  const spacingFt = rafterSpacing / 12;
  const rafters = Math.ceil(lengthFt / spacingFt) + 1;

  // Roof area — single slope
  const multiplier = Math.sqrt(1 + pitchRatio * pitchRatio);
  const roofArea = Math.round(runFt * lengthFt * multiplier * 100) / 100;
  const squares = Math.round((roofArea / 100) * 100) / 100;

  return {
    rafters,
    rafterLength,
    roofArea,
    squares,
    riseHeight: Math.round(rise * 100) / 100,
    multiplier: Math.round(multiplier * 1000) / 1000,
    label: `Lean-to roof: ${roofArea} sq ft (${squares} squares) — ${rafters} rafters (${rafterLength} ft each), rise ${Math.round(rise * 100) / 100} ft`,
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
