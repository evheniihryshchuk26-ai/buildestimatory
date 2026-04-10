import Link from "next/link";
import { categories } from "@/content/calculators";
import { getCommonTranslations } from "@/lib/i18n/translations";

interface GuideLink {
  href: string;
  title: string;
}

interface ClusterConfig {
  subCalculators: string[];
  guides: GuideLink[];
}

const clusters: Record<string, ClusterConfig> = {
  "concrete-calculator": {
    subCalculators: [
      "concrete-slab-calculator",
      "concrete-footing-calculator",
      "concrete-column-calculator",
      "concrete-steps-calculator",
    ],
    guides: [
      { href: "/guides/ready-mix-vs-bagged-concrete/", title: "Ready-Mix vs Bagged Concrete" },
      { href: "/guides/concrete-cost-guide/", title: "How Much Does Concrete Cost?" },
    ],
  },
  "roof-pitch-calculator": {
    subCalculators: [
      "roof-area-calculator",
      "roof-slope-calculator",
    ],
    guides: [
      { href: "/guides/roof-pitch-chart/", title: "Roof Pitch Chart: Complete Reference" },
      { href: "/guides/minimum-roof-pitch-for-shingles/", title: "Minimum Roof Pitch for Shingles" },
    ],
  },
  "paint-coverage-calculator": {
    subCalculators: ["paint-cost-calculator", "primer-calculator"],
    guides: [
      { href: "/guides/how-much-paint-do-i-need/", title: "How Much Paint Do I Need?" },
    ],
  },
  "lumber-cost-calculator": {
    subCalculators: ["board-feet-calculator", "plywood-calculator"],
    guides: [
      { href: "/guides/lumber-prices-guide/", title: "Lumber Prices Guide" },
    ],
  },
  "gravel-calculator": {
    subCalculators: ["driveway-gravel-calculator"],
    guides: [{ href: "/guides/gravel-cost-guide/", title: "Gravel Cost Guide: Prices Per Ton & Yard" }],
  },
  "rebar-calculator": {
    subCalculators: ["rebar-spacing-calculator"],
    guides: [{ href: "/guides/concrete-cost-guide/", title: "How Much Does Concrete Cost?" }],
  },
  "fence-calculator": {
    subCalculators: ["fence-post-calculator", "fence-panel-calculator", "picket-fence-calculator"],
    guides: [{ href: "/guides/fence-cost-guide/", title: "Fence Cost Guide" }],
  },
  "deck-board-calculator": {
    subCalculators: [
      "deck-footing-calculator",
      "deck-railing-calculator",
      "deck-stair-calculator",
    ],
    guides: [
      { href: "/guides/composite-vs-wood-decking/", title: "Composite vs Wood Decking" },
    ],
  },
  "flooring-calculator": {
    subCalculators: ["carpet-calculator", "tile-calculator", "laminate-calculator"],
    guides: [{ href: "/guides/flooring-cost-guide/", title: "Flooring Cost Guide" }],
  },
  "stair-calculator": {
    subCalculators: ["stair-stringer-calculator", "rise-over-run-calculator", "spiral-staircase-calculator", "stair-landing-calculator"],
    guides: [{ href: "/guides/stair-building-guide/", title: "Complete Stair Building Guide" }],
  },
};

interface ClusterLinksProps {
  calculatorSlug: string;
  categorySlug: string;
}

export default function ClusterLinks({ calculatorSlug, categorySlug }: ClusterLinksProps) {
  const cluster = clusters[calculatorSlug];
  if (!cluster) return null;

  const t = getCommonTranslations();

  const category = categories.find((c) => c.slug === categorySlug);
  const subCalcs = cluster.subCalculators
    .map((slug) => category?.calculators.find((c) => c.slug === slug))
    .filter(Boolean);

  if (subCalcs.length === 0 && cluster.guides.length === 0) return null;

  return (
    <section className="mb-10 mt-10">
      {subCalcs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t.clusterLinks.moreCalculators}</h2>
          <p className="text-gray-500 text-sm mb-4">{t.clusterLinks.moreCalculatorsDescription}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subCalcs.map((calc) => (
              <Link
                key={calc!.slug}
                href={`/calculators/${categorySlug}/${calc!.slug}`}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-400 hover:shadow-sm transition-all group"
              >
                <span className="text-orange-500 text-lg mt-0.5" aria-hidden="true">{"\uD83D\uDCD0"}</span>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {calc!.title}
                  </div>
                  <div className="text-sm text-gray-500 line-clamp-2 mt-0.5">
                    {calc!.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {cluster.guides.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">{t.clusterLinks.relatedGuides}</h2>
          <div className="space-y-2">
            {cluster.guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-sm transition-all group"
              >
                <span className="text-orange-500" aria-hidden="true">{"\uD83D\uDCD6"}</span>
                <span className="font-medium text-orange-800 group-hover:text-orange-600 transition-colors">
                  {guide.title}
                </span>
                <span className="ml-auto text-orange-400">{"\u2192"}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
