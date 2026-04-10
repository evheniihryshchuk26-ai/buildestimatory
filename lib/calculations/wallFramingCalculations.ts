export function calculateBottomPlates(wallLength: number, boardLength = 8) {
  const plates = Math.ceil(wallLength / boardLength);
  return { plates, label: `${plates} bottom plate boards (${boardLength} ft)` };
}

export function calculateTopPlates(wallLength: number, boardLength = 8) {
  const plates = Math.ceil(wallLength / boardLength) * 2; // double top plate
  return { plates, label: `${plates} top plate boards (${boardLength} ft, double plate)` };
}

export function calculateStuds(
  wallLength: number,
  spacing: 16 | 24 = 16,
  corners = 0,
  openings = 0
) {
  const spacingFt = spacing / 12;
  const baseStuds = Math.ceil(wallLength / spacingFt) + 2;
  const cornerStuds = corners * 2;
  const openingStuds = openings * 1;
  const total = baseStuds + cornerStuds + openingStuds;
  return {
    studs: total,
    breakdown: { baseStuds, cornerStuds, openingStuds },
    label: `${total} studs (${spacing}" OC)`,
  };
}

export function calculateHeaders(openingWidth: number) {
  const headerLength = openingWidth + 1; // +12 inches = +1 foot
  return { headerLength, label: `${headerLength} ft header length per opening` };
}

export function calculateKingStuds(openings: number) {
  const kingStuds = openings * 2;
  return { kingStuds, label: `${kingStuds} king studs` };
}

export function calculateJackStuds(openings: number) {
  const jackStuds = openings * 2;
  return { jackStuds, label: `${jackStuds} jack studs` };
}

// ─── RAKE WALL ─────────────────────────────────────────────────────────────────

export interface RakeWallStud {
  position: number; // distance from short end in inches
  height: number;   // individual stud height in inches
}

export interface RakeWallResult {
  studs: RakeWallStud[];
  studCount: number;
  topPlateLengthFt: number;
  bottomPlateLengthFt: number;
  slopePlateLengthFt: number;
  totalBoardFeet: number;
}

export function calculateRakeWall(
  wallLengthFt: number,
  shortHeightFt: number,
  tallHeightFt: number,
  studSpacingInches: number
): RakeWallResult {
  const wallLengthInches = wallLengthFt * 12;
  const shortHeightInches = shortHeightFt * 12;
  const tallHeightInches = tallHeightFt * 12;

  // Height difference for the slope
  const heightDiffInches = tallHeightInches - shortHeightInches;

  // Calculate stud positions and heights
  const studs: RakeWallStud[] = [];
  let position = 0;
  while (position <= wallLengthInches) {
    const fraction = position / wallLengthInches;
    const height = shortHeightInches + fraction * heightDiffInches;
    // Subtract 4.5" for plates (1.5" bottom plate + 3" double top plate equivalent)
    const studHeight = Math.max(height - 4.5, 0);
    studs.push({
      position: Math.round(position * 100) / 100,
      height: Math.round(studHeight * 100) / 100,
    });
    position += studSpacingInches;
  }
  // Add end stud if not already at the wall end
  if (studs[studs.length - 1].position < wallLengthInches) {
    const studHeight = Math.max(tallHeightInches - 4.5, 0);
    studs.push({
      position: wallLengthInches,
      height: Math.round(studHeight * 100) / 100,
    });
  }

  const studCount = studs.length;

  // Plates: bottom plate = wall length, slope plate = hypotenuse
  const bottomPlateLengthFt = wallLengthFt;
  const topPlateLengthFt = wallLengthFt; // horizontal top plate at short side height or raked
  const slopePlateLengthInches = Math.sqrt(
    wallLengthInches * wallLengthInches + heightDiffInches * heightDiffInches
  );
  const slopePlateLengthFt = Math.round((slopePlateLengthInches / 12) * 10) / 10;

  // Board feet: studs (assuming 2x4 = 1.5" x 3.5") + plates (2x4)
  const studBoardFeet = studs.reduce((sum, s) => {
    return sum + (1.5 / 12) * (3.5 / 12) * (s.height / 12);
  }, 0);
  const plateBoardFeet =
    (1.5 / 12) * (3.5 / 12) * (bottomPlateLengthFt + topPlateLengthFt + slopePlateLengthFt);
  const totalBoardFeet = studBoardFeet + plateBoardFeet;

  return {
    studs,
    studCount,
    topPlateLengthFt,
    bottomPlateLengthFt,
    slopePlateLengthFt,
    totalBoardFeet: Math.round(totalBoardFeet * 10) / 10,
  };
}

export function calculateExteriorSheathing(wallArea: number) {
  const sheetArea = 32;
  const sheets = Math.ceil(wallArea / sheetArea);
  return { sheets, label: `${sheets} sheets of exterior sheathing (4x8)` };
}
