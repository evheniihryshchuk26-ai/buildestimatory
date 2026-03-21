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

export interface GuidesTranslations {
  index: GuidesIndexTranslations;
  spacingGuide: SpacingGuideTranslations;
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
