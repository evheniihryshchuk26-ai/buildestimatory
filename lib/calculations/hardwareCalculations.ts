export function calculateFramingNails(studs: number, nailsPerStud = 6) {
  const nails = studs * nailsPerStud;
  const pounds = Math.ceil(nails / 200); // ~200 nails per lb for 16d
  return { nails, pounds, label: `${nails} framing nails (~${pounds} lbs)` };
}

export function calculateSheathingNails(sheets: number, nailsPerSheet = 50) {
  const nails = sheets * nailsPerSheet;
  const pounds = Math.ceil(nails / 350); // ~350 nails per lb for 8d
  return { nails, pounds, label: `${nails} sheathing nails (~${pounds} lbs)` };
}

export function calculateJoistHangers(joistCount: number) {
  const hangers = joistCount;
  return { hangers, label: `${hangers} joist hangers` };
}

export function calculateHurricaneTies(rafterCount: number) {
  const ties = rafterCount;
  return { ties, label: `${ties} hurricane ties` };
}

export function calculateCaulk(joints: number, coverage = 20) {
  const tubes = Math.ceil(joints / coverage);
  return { tubes, label: `${tubes} tubes of caulk` };
}

// ─── LUMBER COST ─────────────────────────────────────────────────────────────

interface BoardInfo {
  label: string;
  defaultPrice: number;
  widthIn: number;
  thicknessIn: number;
  lengthFt: number;
}

const BOARD_TYPES: Record<string, BoardInfo> = {
  "2x4x8": { label: '2×4 × 8 ft', defaultPrice: 3.50, widthIn: 4, thicknessIn: 2, lengthFt: 8 },
  "2x4x10": { label: '2×4 × 10 ft', defaultPrice: 5.00, widthIn: 4, thicknessIn: 2, lengthFt: 10 },
  "2x6x8": { label: '2×6 × 8 ft', defaultPrice: 5.50, widthIn: 6, thicknessIn: 2, lengthFt: 8 },
  "2x6x10": { label: '2×6 × 10 ft', defaultPrice: 7.50, widthIn: 6, thicknessIn: 2, lengthFt: 10 },
  "2x8x12": { label: '2×8 × 12 ft', defaultPrice: 12.00, widthIn: 8, thicknessIn: 2, lengthFt: 12 },
  "2x10x12": { label: '2×10 × 12 ft', defaultPrice: 16.00, widthIn: 10, thicknessIn: 2, lengthFt: 12 },
  "2x12x12": { label: '2×12 × 12 ft', defaultPrice: 22.00, widthIn: 12, thicknessIn: 2, lengthFt: 12 },
};

export function calculateLumberCost(boardType: string, quantity: number, pricePerBoard: number) {
  const info = BOARD_TYPES[boardType] ?? BOARD_TYPES["2x4x8"];
  const price = pricePerBoard > 0 ? pricePerBoard : info.defaultPrice;
  const totalCost = quantity * price;
  const totalLinearFeet = quantity * info.lengthFt;
  const costPerLinearFoot = totalCost / totalLinearFeet;
  const boardFeetPerPiece = (info.thicknessIn * info.widthIn * info.lengthFt) / 12;
  const totalBoardFeet = boardFeetPerPiece * quantity;
  const costPerBoardFoot = totalCost / totalBoardFeet;
  return {
    boardLabel: info.label,
    quantity,
    pricePerBoard: price,
    totalCost,
    totalLinearFeet,
    costPerLinearFoot,
    totalBoardFeet,
    costPerBoardFoot,
  };
}

export { BOARD_TYPES };

// ─── BOARD FEET ──────────────────────────────────────────────────────────────

export function calculateBoardFeet(
  thicknessInches: number,
  widthInches: number,
  lengthFt: number,
  quantity: number,
) {
  const bfPerPiece = (thicknessInches * widthInches * lengthFt) / 12;
  const totalBF = bfPerPiece * quantity;
  const estimatedCostLow = totalBF * 3;
  const estimatedCostHigh = totalBF * 8;
  return {
    bfPerPiece,
    totalBF,
    estimatedCostLow,
    estimatedCostHigh,
  };
}

// ─── PLYWOOD ─────────────────────────────────────────────────────────────────

interface PlywoodInfo {
  label: string;
  defaultPrice: number;
}

const PLYWOOD_TYPES: Record<string, PlywoodInfo> = {
  "1/4": { label: '1/4" Plywood (6 mm)', defaultPrice: 18 },
  "3/8": { label: '3/8" Plywood (9 mm)', defaultPrice: 25 },
  "1/2": { label: '1/2" Plywood (12 mm)', defaultPrice: 35 },
  "3/4": { label: '3/4" Plywood (18 mm)', defaultPrice: 50 },
};

export function calculatePlywood(
  lengthFt: number,
  widthFt: number,
  sheetType: string,
) {
  const SHEET_AREA = 32; // 4×8 = 32 sq ft
  const area = lengthFt * widthFt;
  const wasteFactor = 1.10; // 10% waste
  const sheetsRaw = (area * wasteFactor) / SHEET_AREA;
  const sheets = Math.ceil(sheetsRaw);
  const info = PLYWOOD_TYPES[sheetType] ?? PLYWOOD_TYPES["1/2"];
  const totalCost = sheets * info.defaultPrice;
  return {
    area,
    sheets,
    wasteFactor,
    sheetLabel: info.label,
    pricePerSheet: info.defaultPrice,
    totalCost,
  };
}

export { PLYWOOD_TYPES };
