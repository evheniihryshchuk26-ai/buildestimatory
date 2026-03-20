export function calculateCavityInsulation(wallArea: number, battCoverage = 15) {
  const batts = Math.ceil(wallArea / battCoverage);
  return { batts, label: `${batts} insulation batts` };
}

export function calculateVaporBarrier(wallArea: number, rollCoverage = 500) {
  const rolls = Math.ceil(wallArea / rollCoverage);
  return { rolls, label: `${rolls} rolls of vapor barrier` };
}

export function calculateAcousticalSealant(perimeter: number, tubeCoverage = 30) {
  const tubes = Math.ceil(perimeter / tubeCoverage);
  return { tubes, label: `${tubes} tubes of acoustical sealant` };
}

export function calculateSheetrock(wallArea: number) {
  const sheetArea = 32;
  const sheets = Math.ceil(wallArea / sheetArea);
  return { sheets, label: `${sheets} sheets of drywall (4x8)` };
}

export function calculateDrywallScrews(sheets: number, screwsPerSheet = 32) {
  const screws = sheets * screwsPerSheet;
  const boxes = Math.ceil(screws / 1000);
  return { screws, boxes, label: `${screws} drywall screws (~${boxes} boxes of 1000)` };
}

export function calculateJointCompound(sheets: number, bucketCoverage = 16) {
  const buckets = Math.ceil(sheets / bucketCoverage);
  return { buckets, label: `${buckets} buckets of joint compound (5 gal)` };
}
