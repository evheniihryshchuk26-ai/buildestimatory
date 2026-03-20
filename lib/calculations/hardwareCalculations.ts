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
