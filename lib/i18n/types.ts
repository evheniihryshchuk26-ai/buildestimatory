// ---------------------------------------------------------------------------
// Translation type definitions
// ---------------------------------------------------------------------------

/** Navigation strings */
export interface NavTranslations {
  home: string;
  calculators: string;
  allCalculators: string;
  browseAllCalculators: string;
  toggleMenu: string;
}

/** Footer strings */
export interface FooterTranslations {
  tagline: string;
  calculatorsHeading: string;
  moreToolsHeading: string;
  siteHeading: string;
  copyright: string;
  disclaimer: string;
}

/** Calculator UI chrome — labels, buttons, headings shared by all calculators */
export interface CalculatorUITranslations {
  enterMeasurements: string;
  calculateMaterials: string;
  yourShoppingList: string;
  howToUseHeading: string;
  aboutMaterialHeading: string;
  installationTipsHeading: string;
  commonMistakesHeading: string;
  faqHeading: string;
  quickTipHeading: string;
  quickTipBody: string;
  nextStepsHeading: string;
  calculatorNotFound: string;
  validationError: (fieldLabel: string) => string;
}

/** Breadcrumb labels */
export interface BreadcrumbTranslations {
  home: string;
  calculators: string;
}

/** 404 page */
export interface NotFoundTranslations {
  heading: string;
  message: string;
  backHome: string;
}

/** Calculators index page */
export interface CalculatorsIndexTranslations {
  title: string;
  description: string;
  freeCalculatorsCount: (count: number) => string;
  viewAll: string;
}

/** Root layout metadata */
export interface LayoutTranslations {
  defaultTitle: string;
  defaultDescription: string;
  ogImageAlt: string;
}

/** Category page */
export interface CategoryPageTranslations {
  otherCategories: string;
}

/** Related calculators section */
export interface RelatedCalculatorsTranslations {
  heading: string;
  viewCalculator: string;
}

/** Hero animation labels */
export interface HeroAnimationTranslations {
  quickCalculator: string;
  chooseCategory: string;
  selectCalculator: string;
  enterMeasurements: string;
  foundationPerimeter: string;
  foundationPerimeterUnit: string;
  boltSpacing: string;
  boltSpacingUnit: string;
  calculateMaterials: string;
  yourShoppingList: string;
  anchorBoltCalculator: string;
  anchorBoltResult: string;
  disclaimer: string;
  foundation: string;
  anchorBolt: string;
  categoryFoundation: string;
  categoryFloorFraming: string;
  categoryWallFraming: string;
  categoryRoofing: string;
  categoryExteriorShell: string;
  categoryInsulationDrywall: string;
  categoryHardware: string;
  calcAnchorBolt: string;
  calcSillSeal: string;
  calcSillPlate: string;
}

/** Cluster links — sub-calculators and guides shown on hub calculator pages */
export interface ClusterLinksTranslations {
  moreCalculators: string;
  moreCalculatorsDescription: string;
  relatedGuides: string;
}

/** All common (non-page-specific) translations */
export interface CommonTranslations {
  nav: NavTranslations;
  footer: FooterTranslations;
  calculator: CalculatorUITranslations;
  breadcrumb: BreadcrumbTranslations;
  notFound: NotFoundTranslations;
  calculatorsIndex: CalculatorsIndexTranslations;
  layout: LayoutTranslations;
  categoryPage: CategoryPageTranslations;
  relatedCalculators: RelatedCalculatorsTranslations;
  clusterLinks: ClusterLinksTranslations;
  heroAnimation: HeroAnimationTranslations;
}

// ---------------------------------------------------------------------------
// Home page translations
// ---------------------------------------------------------------------------

export interface HeroTranslations {
  titleLine1: string;
  titleHighlight: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface CategorySectionTranslations {
  heading: string;
  calculatorsCount: (count: number) => string;
}

export interface PopularCalculator {
  href: string;
  label: string;
  desc: string;
}

export interface PopularCalculatorsTranslations {
  heading: string;
  items: PopularCalculator[];
}

export interface ValueProp {
  icon: string;
  title: string;
  desc: string;
}

export interface ValuePropsTranslations {
  heading: string;
  items: ValueProp[];
}

export interface HomeTranslations {
  hero: HeroTranslations;
  categories: CategorySectionTranslations;
  popular: PopularCalculatorsTranslations;
  valueProps: ValuePropsTranslations;
}

// ---------------------------------------------------------------------------
// Guides translations
// ---------------------------------------------------------------------------

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  category: string;
  oc16: string;
  oc24: string;
}

export interface SpacingGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickAnswerHeading: string;
  quickAnswerText: string;
  whatIsHeading: string;
  whatIsText1: string;
  whatIsText2: string;
  whatIsText3: string;
  comparisonHeading: string;
  comparisonSubheading: string;
  comparisonCol1: string;
  comparisonCol2: string;
  comparisonCol3: string;
  comparisonRows: ComparisonRow[];
  when16Heading: string;
  when16Intro: string;
  when16Items: string[];
  when16Summary: string;
  when24Heading: string;
  when24Intro: string;
  when24Items: string[];
  when24Summary: string;
  codeHeading: string;
  codeIntro: string;
  codeItems: string[];
  codeSummary: string;
  costHeading: string;
  costIntro: string;
  costText1: string;
  costText2: string;
  costText3: string;
  impactHeading: string;
  impactIntro: string;
  impactInsulationHeading: string;
  impactInsulationText: string;
  impactDrywallHeading: string;
  impactDrywallText: string;
  impactSheathingHeading: string;
  impactSheathingText: string;
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface GuidesIndexTranslations {
  title: string;
  metaDescription: string;
  heading: string;
  description: string;
  guides: { title: string; description: string; href: string }[];
}

export interface PitchTableRow {
  pitch: string;
  degrees: string;
  slopePercent: string;
  multiplier: string;
  description: string;
}

export interface RoofPitchChartGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickRefHeading: string;
  quickRefSubheading: string;
  quickRefColPitch: string;
  quickRefColDegrees: string;
  quickRefColSlope: string;
  quickRefColMultiplier: string;
  quickRefColDescription: string;
  quickRefRows: PitchTableRow[];
  readingHeading: string;
  readingText1: string;
  readingText2: string;
  readingText3: string;
  lowSlopeHeading: string;
  lowSlopeIntro: string;
  lowSlopeItems: string[];
  lowSlopeSummary: string;
  standardHeading: string;
  standardIntro: string;
  standardItems: string[];
  standardSummary: string;
  steepHeading: string;
  steepIntro: string;
  steepItems: string[];
  steepSummary: string;
  costHeading: string;
  costIntro: string;
  costText1: string;
  costText2: string;
  costText3: string;
  materialHeading: string;
  materialIntro: string;
  materialItems: string[];
  climateHeading: string;
  climateIntro: string;
  climateItems: string[];
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface MinPitchMaterialRow {
  material: string;
  standardMin: string;
  absoluteMin: string;
  notes: string;
}

export interface MinimumRoofPitchGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickAnswerHeading: string;
  quickAnswerText: string;
  materialTableHeading: string;
  materialTableSubheading: string;
  materialTableColMaterial: string;
  materialTableColStandardMin: string;
  materialTableColAbsoluteMin: string;
  materialTableColNotes: string;
  materialTableRows: MinPitchMaterialRow[];
  whyMinHeading: string;
  whyMinIntro: string;
  whyMinItems: string[];
  whyMinSummary: string;
  codeHeading: string;
  codeIntro: string;
  codeItems: string[];
  codeSummary: string;
  belowMinHeading: string;
  belowMinIntro: string;
  belowMinItems: string[];
  belowMinSummary: string;
  solutionsHeading: string;
  solutionsIntro: string;
  solutionsItems: string[];
  solutionsSummary: string;
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface ReadyMixVsBaggedGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickAnswerHeading: string;
  quickAnswerText: string;
  whatIsReadyMixHeading: string;
  whatIsReadyMixText1: string;
  whatIsReadyMixText2: string;
  whatIsBaggedHeading: string;
  whatIsBaggedText1: string;
  whatIsBaggedText2: string;
  comparisonHeading: string;
  comparisonSubheading: string;
  comparisonCol1: string;
  comparisonCol2: string;
  comparisonCol3: string;
  comparisonRows: { category: string; readyMix: string; bagged: string }[];
  costHeading: string;
  costIntro: string;
  costText1: string;
  costText2: string;
  costText3: string;
  whenReadyMixHeading: string;
  whenReadyMixIntro: string;
  whenReadyMixItems: string[];
  whenReadyMixSummary: string;
  whenBaggedHeading: string;
  whenBaggedIntro: string;
  whenBaggedItems: string[];
  whenBaggedSummary: string;
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface ConcreteCostGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickAnswerHeading: string;
  quickAnswerText: string;
  costByProjectHeading: string;
  costByProjectIntro: string;
  costByProjectColProject: string;
  costByProjectColTypical: string;
  costByProjectColNotes: string;
  costByProjectRows: { project: string; typical: string; notes: string }[];
  baggedCostHeading: string;
  baggedCostIntro: string;
  baggedCostText1: string;
  baggedCostText2: string;
  baggedCostText3: string;
  readyMixPricingHeading: string;
  readyMixPricingIntro: string;
  readyMixPricingText1: string;
  readyMixPricingText2: string;
  readyMixPricingText3: string;
  factorsHeading: string;
  factorsIntro: string;
  factorsItems: string[];
  laborHeading: string;
  laborIntro: string;
  laborText1: string;
  laborText2: string;
  laborText3: string;
  savingTipsHeading: string;
  savingTipsIntro: string;
  savingTipsItems: string[];
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface HowMuchPaintGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickAnswerHeading: string;
  quickAnswerText: string;
  measuringWallsHeading: string;
  measuringWallsIntro: string;
  measuringWallsItems: string[];
  measuringWallsSummary: string;
  coverageRatesHeading: string;
  coverageRatesIntro: string;
  coverageRatesText1: string;
  coverageRatesText2: string;
  coverageRatesText3: string;
  numberOfCoatsHeading: string;
  numberOfCoatsIntro: string;
  numberOfCoatsItems: string[];
  numberOfCoatsSummary: string;
  surfacePrepHeading: string;
  surfacePrepIntro: string;
  surfacePrepItems: string[];
  ceilingPaintHeading: string;
  ceilingPaintIntro: string;
  ceilingPaintText1: string;
  ceilingPaintText2: string;
  trimPaintHeading: string;
  trimPaintIntro: string;
  trimPaintText1: string;
  trimPaintText2: string;
  costBreakdownHeading: string;
  costBreakdownIntro: string;
  costBreakdownText1: string;
  costBreakdownText2: string;
  costBreakdownText3: string;
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface LumberPricesGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickAnswerHeading: string;
  quickAnswerText: string;
  speciesPricingHeading: string;
  speciesPricingIntro: string;
  speciesPricingText1: string;
  speciesPricingText2: string;
  speciesPricingText3: string;
  dimensionalVsEngineeredHeading: string;
  dimensionalVsEngineeredIntro: string;
  dimensionalVsEngineeredItems: string[];
  dimensionalVsEngineeredSummary: string;
  gradeHeading: string;
  gradeIntro: string;
  gradeItems: string[];
  gradeSummary: string;
  priceTrendsHeading: string;
  priceTrendsIntro: string;
  priceTrendsText1: string;
  priceTrendsText2: string;
  priceTrendsText3: string;
  whereToBuyHeading: string;
  whereToBuyIntro: string;
  whereToBuyItems: string[];
  whereToBuySummary: string;
  bulkDiscountsHeading: string;
  bulkDiscountsIntro: string;
  bulkDiscountsItems: string[];
  bulkDiscountsSummary: string;
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface CompositeVsWoodGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickAnswerHeading: string;
  quickAnswerText: string;
  whatIsCompositeHeading: string;
  whatIsCompositeText1: string;
  whatIsCompositeText2: string;
  whatIsWoodHeading: string;
  whatIsWoodText1: string;
  whatIsWoodText2: string;
  comparisonHeading: string;
  comparisonSubheading: string;
  comparisonCol1: string;
  comparisonCol2: string;
  comparisonCol3: string;
  comparisonRows: { category: string; composite: string; wood: string }[];
  costHeading: string;
  costIntro: string;
  costText1: string;
  costText2: string;
  costText3: string;
  whenCompositeHeading: string;
  whenCompositeIntro: string;
  whenCompositeItems: string[];
  whenCompositeSummary: string;
  whenWoodHeading: string;
  whenWoodIntro: string;
  whenWoodItems: string[];
  whenWoodSummary: string;
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface GravelCostGuideTranslations {
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickAnswerHeading: string;
  quickAnswerText: string;
  gravelTypesHeading: string;
  gravelTypesIntro: string;
  gravelTypesColType: string;
  gravelTypesColCost: string;
  gravelTypesColBestFor: string;
  gravelTypesRows: { type: string; cost: string; bestFor: string }[];
  costByProjectHeading: string;
  costByProjectIntro: string;
  costByProjectColProject: string;
  costByProjectColTypical: string;
  costByProjectColNotes: string;
  costByProjectRows: { project: string; typical: string; notes: string }[];
  deliveryCostsHeading: string;
  deliveryCostsIntro: string;
  deliveryCostsText1: string;
  deliveryCostsText2: string;
  deliveryCostsText3: string;
  howToCalculateHeading: string;
  howToCalculateIntro: string;
  howToCalculateItems: string[];
  howToCalculateSummary: string;
  savingTipsHeading: string;
  savingTipsIntro: string;
  savingTipsItems: string[];
  calculatorCtaHeading: string;
  calculatorCtaText: string;
  calculatorLinks: { label: string; href: string; description: string }[];
  faqHeading: string;
  faqs: GuideFaq[];
}

export interface GuidesTranslations {
  index: GuidesIndexTranslations;
  spacingGuide: SpacingGuideTranslations;
  roofPitchChart: RoofPitchChartGuideTranslations;
  minimumRoofPitch: MinimumRoofPitchGuideTranslations;
  readyMixVsBagged: ReadyMixVsBaggedGuideTranslations;
  concreteCostGuide: ConcreteCostGuideTranslations;
  howMuchPaint: HowMuchPaintGuideTranslations;
  lumberPrices: LumberPricesGuideTranslations;
  compositeVsWood: CompositeVsWoodGuideTranslations;
  gravelCost: GravelCostGuideTranslations;
  breadcrumbGuides: string;
}

// ---------------------------------------------------------------------------
// Per-calculator metadata (for future locale-specific titles/descriptions)
// ---------------------------------------------------------------------------

export interface CalculatorMetaTranslation {
  title: string;
  description: string;
}

export type CalculatorMetaMap = Record<string, CalculatorMetaTranslation>;
