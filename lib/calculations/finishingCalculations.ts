export function calculatePaintCoverage(
  wallAreaSqFt: number,
  coats = 2,
  coveragePerGallon = 350
) {
  const totalArea = wallAreaSqFt * coats;
  const gallons = totalArea / coveragePerGallon;
  const gallonsRounded = Math.ceil(gallons * 10) / 10;
  const quarts = gallons < 1 ? Math.ceil(gallons * 4) : 0;
  const oneGallonCans = Math.ceil(gallons);
  const fiveGallonBuckets = Math.floor(gallons / 5);
  const remainderGallons = Math.ceil(gallons - fiveGallonBuckets * 5);
  return {
    gallons: gallonsRounded,
    quarts,
    oneGallonCans,
    fiveGallonBuckets,
    remainderGallons,
    label: `${gallonsRounded} gallons of paint needed (${coats} coat${coats > 1 ? "s" : ""})`,
  };
}

export function calculatePaintCost(
  wallAreaSqFt: number,
  coats: number,
  paintQuality: string,
  includePrimer: boolean
) {
  const pricePerGallon: Record<string, number> = {
    economy: 25,
    standard: 35,
    premium: 50,
    "ultra-premium": 70,
  };
  const coveragePerGallon = 350;
  const totalArea = wallAreaSqFt * coats;
  const gallons = Math.ceil(totalArea / coveragePerGallon);
  const paintCostPerGal = pricePerGallon[paintQuality] ?? 35;
  const paintCost = gallons * paintCostPerGal;

  const primerGallons = includePrimer ? Math.ceil(wallAreaSqFt / 400) : 0;
  const primerCost = primerGallons * 20;

  // Supplies estimate: rollers, brushes, tape, drop cloths
  const suppliesCost =
    15 + // roller frame + covers
    10 + // brushes
    8 + // painter's tape (2 rolls)
    12; // drop cloths

  const totalCost = paintCost + primerCost + suppliesCost;

  return {
    gallons,
    paintCost,
    primerGallons,
    primerCost,
    suppliesCost,
    totalCost,
    label: `${gallons} gallons of ${paintQuality} paint — estimated total cost: $${totalCost}`,
  };
}

export function calculatePrimer(
  wallAreaSqFt: number,
  surfaceType: string,
  coverageOverride?: number
) {
  const coverageBySurface: Record<string, number> = {
    "new-drywall": 300,
    "previously-painted": 400,
    wood: 250,
    "stain-blocking": 200,
  };
  const coveragePerGallon =
    coverageOverride ?? coverageBySurface[surfaceType] ?? 350;
  const gallons = wallAreaSqFt / coveragePerGallon;
  const gallonsRounded = Math.ceil(gallons * 10) / 10;
  const cans = Math.ceil(gallons);

  return {
    gallons: gallonsRounded,
    cans,
    label: `${gallonsRounded} gallons of primer (${cans} can${cans > 1 ? "s" : ""})`,
  };
}
