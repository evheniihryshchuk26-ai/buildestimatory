export function calculateRimJoists(perimeter: number, boardLength = 8) {
  const rimJoists = Math.ceil(perimeter / boardLength);
  return { rimJoists, label: `${rimJoists} rim joist boards (${boardLength} ft)` };
}

export function calculateFloorJoists(roomWidth: number, spacing: 16 | 24 = 16) {
  const spacingFt = spacing / 12;
  const joists = Math.ceil(roomWidth / spacingFt) + 1;
  return { joists, label: `${joists} floor joists (${spacing}" OC spacing)` };
}

export function calculateBridging(joistSpan: number) {
  const bridgingRows = Math.ceil(joistSpan / 8);
  return { bridgingRows, label: `${bridgingRows} rows of bridging` };
}

export function calculateSubfloorAdhesive(floorArea: number, tubeCoverage = 50) {
  const tubes = Math.ceil(floorArea / tubeCoverage);
  return { tubes, label: `${tubes} tubes of subfloor adhesive` };
}

export function calculateOSBPanels(floorArea: number) {
  const panelArea = 32;
  const panels = Math.ceil(floorArea / panelArea);
  return { panels, label: `${panels} OSB panels (4x8 sheets)` };
}
