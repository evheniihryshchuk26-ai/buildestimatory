import type { CommonTranslations } from "@/lib/i18n/types";

const common: CommonTranslations = {
  nav: {
    home: "Home",
    calculators: "Calculators",
    allCalculators: "All Calculators",
    browseAllCalculators: "Browse All Calculators",
    toggleMenu: "Toggle menu",
  },

  footer: {
    tagline:
      "Free construction material calculators for US builders, contractors, and DIY home builders.",
    calculatorsHeading: "Calculators",
    moreToolsHeading: "More Tools",
    siteHeading: "Site",
    copyright:
      "\u00A9 {year} BuildEstimatory.com \u2014 Free construction calculators for US builders.",
    disclaimer:
      "Results are estimates. Always verify with a licensed contractor.",
  },

  calculator: {
    enterMeasurements: "Enter Your Measurements",
    calculateMaterials: "Calculate Materials",
    yourShoppingList: "Your Shopping List",
    howToUseHeading: "How to Use This Calculator",
    aboutMaterialHeading: "About This Material",
    installationTipsHeading: "Installation Tips",
    commonMistakesHeading: "Common Mistakes to Avoid",
    faqHeading: "Frequently Asked Questions",
    quickTipHeading: "Quick Tip",
    quickTipBody:
      "Always add 10% waste factor to your material orders. Construction always produces off-cuts, and running short mid-project is costly.",
    calculatorNotFound: "Calculator not found.",
    validationError: (fieldLabel: string) =>
      `Please enter a valid number for "${fieldLabel}".`,
  },

  breadcrumb: {
    home: "Home",
    calculators: "Calculators",
  },

  notFound: {
    heading: "Page Not Found",
    message:
      "The page you are looking for does not exist or has been moved.",
    backHome: "Back to Home",
  },

  calculatorsIndex: {
    title: "All Construction Calculators",
    description:
      "{count} free calculators covering every phase of timber-frame construction.",
    freeCalculatorsCount: (count: number) =>
      `${count} free calculators covering every phase of timber-frame construction.`,
    viewAll: "View all \u2192",
  },

  layout: {
    defaultTitle: "BuildEstimatory \u2014 Free Construction Material Calculators",
    defaultDescription:
      "Free construction material calculators for US builders and contractors. Get accurate material estimates for framing, roofing, foundation, and more.",
    ogImageAlt: "BuildEstimatory \u2014 Free Construction Material Calculators",
  },

  categoryPage: {
    otherCategories: "Other Calculator Categories",
  },

  relatedCalculators: {
    heading: "Related Calculators",
    viewCalculator: "Open calculator \u2192",
  },

  heroAnimation: {
    quickCalculator: "Quick Calculator",
    chooseCategory: "1. Choose Category",
    selectCalculator: "2. Select Calculator",
    enterMeasurements: "3. Enter Measurements",
    foundationPerimeter: "Foundation Perimeter",
    foundationPerimeterUnit: "ft",
    boltSpacing: "Bolt Spacing",
    boltSpacingUnit: "ft",
    calculateMaterials: "Calculate Materials",
    yourShoppingList: "Your Shopping List",
    anchorBoltCalculator: "Anchor Bolt Calculator",
    anchorBoltResult: "13 anchor bolts (10 ft spacing)",
    disclaimer: "Add 10\u201315% to your order as a waste factor for cuts and mistakes.",
    foundation: "Foundation",
    anchorBolt: "Anchor Bolt",
    categoryFoundation: "Foundation",
    categoryFloorFraming: "Floor Framing",
    categoryWallFraming: "Wall Framing",
    categoryRoofing: "Roofing",
    categoryExteriorShell: "Exterior Shell",
    categoryInsulationDrywall: "Insulation & Drywall",
    categoryHardware: "Hardware",
    calcAnchorBolt: "Anchor Bolt Calculator",
    calcSillSeal: "Sill Seal Calculator",
    calcSillPlate: "Pressure Treated Sill Plate Calculator",
  },
};

export default common;
