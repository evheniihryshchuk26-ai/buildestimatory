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
