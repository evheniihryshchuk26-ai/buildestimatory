interface AdBlockProps {
  slot: "hero" | "middle" | "after-results" | "sidebar";
  className?: string;
}

const slotSizes: Record<AdBlockProps["slot"], { label: string; height: string }> = {
  hero: { label: "728x90 — Leaderboard", height: "h-24" },
  middle: { label: "728x90 — Mid-Page", height: "h-24" },
  "after-results": { label: "336x280 — Rectangle", height: "h-28" },
  sidebar: { label: "300x250 — Sidebar Rectangle", height: "h-64" },
};

export default function AdBlock({ slot, className = "" }: AdBlockProps) {
  const { label, height } = slotSizes[slot];

  return (
    <div
      className={`flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg text-gray-400 text-sm ${height} ${className}`}
      aria-label="Advertisement"
    >
      <span>Ad — {label}</span>
    </div>
  );
}
