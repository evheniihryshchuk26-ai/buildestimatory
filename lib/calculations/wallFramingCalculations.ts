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

export function calculateExteriorSheathing(wallArea: number) {
  const sheetArea = 32;
  const sheets = Math.ceil(wallArea / sheetArea);
  return { sheets, label: `${sheets} sheets of exterior sheathing (4x8)` };
}
