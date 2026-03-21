// ---------------------------------------------------------------------------
// i18n — public API
// ---------------------------------------------------------------------------

// Config & locale helpers
export {
  type Locale,
  type LocaleConfig,
  locales,
  localeList,
  defaultLocale,
  getLocale,
  getLocaleConfig,
  getAlternateLocales,
} from "./config";

// Translation types
export type {
  CommonTranslations,
  NavTranslations,
  FooterTranslations,
  CalculatorUITranslations,
  BreadcrumbTranslations,
  NotFoundTranslations,
  CalculatorsIndexTranslations,
  HomeTranslations,
  HeroTranslations,
  CategorySectionTranslations,
  PopularCalculator,
  PopularCalculatorsTranslations,
  ValueProp,
  ValuePropsTranslations,
  CalculatorMetaTranslation,
  CalculatorMetaMap,
} from "./types";

// Translation loaders
export { getCommonTranslations, getHomeTranslations } from "./translations";

// Unit system
export {
  type UnitType,
  type UnitSystem,
  unitLabels,
  toMetric,
  toImperial,
  getUnitLabel,
  roundUnit,
} from "./units";
