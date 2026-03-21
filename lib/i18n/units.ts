// ---------------------------------------------------------------------------
// Unit conversion system
// ---------------------------------------------------------------------------

export type UnitType = "length" | "area" | "spacing" | "count" | "sheets";
export type UnitSystem = "imperial" | "metric";

/** Labels for each unit type in each system */
export const unitLabels: Record<UnitSystem, Record<UnitType, string>> = {
  imperial: {
    length: "ft",
    area: "sq ft",
    spacing: "in",
    count: "pcs",
    sheets: "sheets",
  },
  metric: {
    length: "m",
    area: "m\u00B2",
    spacing: "cm",
    count: "pcs",
    sheets: "sheets",
  },
};

// ---------------------------------------------------------------------------
// Conversion factors (imperial -> metric and back)
// ---------------------------------------------------------------------------

const FEET_TO_METERS = 0.3048;
const SQFT_TO_SQM = 0.09290304;
const INCHES_TO_CM = 2.54;

/**
 * Convert a value from imperial to metric.
 * "count" and "sheets" are unit-less and return the value unchanged.
 */
export function toMetric(value: number, unitType: UnitType): number {
  switch (unitType) {
    case "length":
      return value * FEET_TO_METERS;
    case "area":
      return value * SQFT_TO_SQM;
    case "spacing":
      return value * INCHES_TO_CM;
    case "count":
    case "sheets":
      return value;
  }
}

/**
 * Convert a value from metric to imperial.
 * "count" and "sheets" are unit-less and return the value unchanged.
 */
export function toImperial(value: number, unitType: UnitType): number {
  switch (unitType) {
    case "length":
      return value / FEET_TO_METERS;
    case "area":
      return value / SQFT_TO_SQM;
    case "spacing":
      return value / INCHES_TO_CM;
    case "count":
    case "sheets":
      return value;
  }
}

/**
 * Get the display label for a given unit type and system.
 */
export function getUnitLabel(unitType: UnitType, system: UnitSystem): string {
  return unitLabels[system][unitType];
}

/**
 * Round a converted value to a sensible number of decimal places.
 */
export function roundUnit(value: number, unitType: UnitType): number {
  switch (unitType) {
    case "count":
    case "sheets":
      return Math.ceil(value);
    case "spacing":
      return Math.round(value * 10) / 10;
    default:
      return Math.round(value * 100) / 100;
  }
}
