import type { CommonTranslations, HomeTranslations, GuidesTranslations } from "./types";
import { getLocale } from "./config";

/**
 * Load common translations for the current locale.
 *
 * Uses require() for build-time resolution, which is compatible with
 * Next.js static export (`output: "export"`).
 */
export function getCommonTranslations(): CommonTranslations {
  const locale = getLocale();

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require(`@/locales/${locale}/common`) as {
    default: CommonTranslations;
  };
  return mod.default;
}

/**
 * Load home page translations for the current locale.
 */
export function getHomeTranslations(): HomeTranslations {
  const locale = getLocale();

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require(`@/locales/${locale}/home`) as {
    default: HomeTranslations;
  };
  return mod.default;
}

/**
 * Load guides translations for the current locale.
 */
export function getGuidesTranslations(): GuidesTranslations {
  const locale = getLocale();

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require(`@/locales/${locale}/guides`) as {
    default: GuidesTranslations;
  };
  return mod.default;
}
