export function calculateHousewrap(wallArea: number, rollCoverage = 1000) {
  const rolls = Math.ceil(wallArea / rollCoverage);
  return { rolls, label: `${rolls} rolls of housewrap (Tyvek)` };
}

export function calculateSeamTape(wallArea: number, tapeCoverage = 100) {
  const rolls = Math.ceil(wallArea / tapeCoverage);
  return { rolls, label: `${rolls} rolls of seam tape` };
}

export function calculateWindowFlashing(windows: number, windowPerimeter = 14) {
  const totalFlashing = windows * windowPerimeter;
  return { totalFlashing, label: `${totalFlashing} lin. ft. of window flashing` };
}

export function calculateDoorFlashing(doors: number, doorPerimeter = 18) {
  const totalFlashing = doors * doorPerimeter;
  return { totalFlashing, label: `${totalFlashing} lin. ft. of door flashing` };
}

export function calculateVinylSiding(wallArea: number, panelCoverage = 2) {
  const panels = Math.ceil(wallArea / panelCoverage);
  return { panels, label: `${panels} vinyl siding panels` };
}

export function calculateHardieSiding(wallArea: number, boardCoverage = 1.17) {
  const boards = Math.ceil(wallArea / boardCoverage);
  return { boards, label: `${boards} Hardie plank boards` };
}
