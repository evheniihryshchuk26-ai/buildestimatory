// ─── FLOORING CALCULATIONS ──────────────────────────────────────────────────

export function calculateFlooring(
  lengthFt: number,
  widthFt: number,
  wastePct: number
) {
  const area = lengthFt * widthFt;
  const wasteMultiplier = 1 + wastePct / 100;
  const areaWithWaste = Math.ceil(area * wasteMultiplier);
  const sqFtPerBox = 20;
  const boxes = Math.ceil(areaWithWaste / sqFtPerBox);

  return {
    area,
    areaWithWaste,
    boxes,
    label: `${areaWithWaste} sq ft of flooring needed (${boxes} boxes at ${sqFtPerBox} sq ft/box)`,
  };
}

export function calculateCarpet(
  lengthFt: number,
  widthFt: number,
  carpetWidthFt: number
) {
  const area = lengthFt * widthFt;
  // Carpet is sold in rolls of a fixed width. Calculate linear feet needed.
  const strips = Math.ceil(widthFt / carpetWidthFt);
  const linearFeet = strips * lengthFt;
  // Convert area to sq yards (carpet is priced per sq yard)
  const carpetSqYards = Math.ceil((linearFeet * carpetWidthFt) / 9);
  // Pad is the same area as carpet coverage
  const padSqYards = carpetSqYards;

  return {
    area,
    carpetSqYards,
    linearFeet,
    strips,
    padSqYards,
    label: `${carpetSqYards} sq yards of carpet (${linearFeet} linear ft, ${strips} strip${strips > 1 ? "s" : ""})`,
  };
}

export function calculateTile(
  lengthFt: number,
  widthFt: number,
  tileSizeInches: number,
  wastePct: number
) {
  const areaSqFt = lengthFt * widthFt;
  const wasteMultiplier = 1 + wastePct / 100;
  const areaWithWaste = areaSqFt * wasteMultiplier;
  const tileSizeFt = tileSizeInches / 12;
  const tileAreaSqFt = tileSizeFt * tileSizeFt;
  const tiles = Math.ceil(areaWithWaste / tileAreaSqFt);

  // Boxes: depends on tile size
  let tilesPerBox: number;
  if (tileSizeInches <= 6) {
    tilesPerBox = 20;
  } else if (tileSizeInches <= 12) {
    tilesPerBox = 15;
  } else if (tileSizeInches <= 18) {
    tilesPerBox = 10;
  } else {
    tilesPerBox = 6;
  }
  const boxes = Math.ceil(tiles / tilesPerBox);

  // Grout: ~25 lbs covers 50-70 sq ft for standard joints
  const groutBags = Math.ceil(areaWithWaste / 60);

  // Thinset: 50 lb bag covers ~70-80 sq ft with 1/4" x 1/4" trowel
  const thinsetBags = Math.ceil(areaWithWaste / 75);

  return {
    areaSqFt,
    areaWithWaste: Math.ceil(areaWithWaste),
    tiles,
    tilesPerBox,
    boxes,
    groutBags,
    thinsetBags,
    label: `${tiles} tiles needed (${boxes} boxes) + ${groutBags} grout bag${groutBags > 1 ? "s" : ""} + ${thinsetBags} thinset bag${thinsetBags > 1 ? "s" : ""}`,
  };
}

export function calculateLaminate(
  lengthFt: number,
  widthFt: number,
  plankWidthInches: number,
  plankLengthInches: number,
  wastePct: number
) {
  const areaSqFt = lengthFt * widthFt;
  const wasteMultiplier = 1 + wastePct / 100;
  const areaWithWaste = areaSqFt * wasteMultiplier;
  const plankAreaSqFt = (plankWidthInches * plankLengthInches) / 144;
  const planks = Math.ceil(areaWithWaste / plankAreaSqFt);

  const planksPerBox = 8;
  const boxes = Math.ceil(planks / planksPerBox);

  // Underlayment: sold in 100 sq ft rolls
  const underlaymentRolls = Math.ceil(areaWithWaste / 100);

  return {
    areaSqFt,
    areaWithWaste: Math.ceil(areaWithWaste),
    planks,
    planksPerBox,
    boxes,
    underlaymentRolls,
    label: `${planks} planks needed (${boxes} boxes) + ${underlaymentRolls} underlayment roll${underlaymentRolls > 1 ? "s" : ""}`,
  };
}
