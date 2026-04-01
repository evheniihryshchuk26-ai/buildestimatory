/**
 * IndexNow submission script
 * Submits all URLs from all locales to Bing/Yandex/Naver via IndexNow API
 *
 * Usage:
 *   npx tsx scripts/indexnow.ts              # submit all locales
 *   npx tsx scripts/indexnow.ts en           # submit specific locale
 *   npx tsx scripts/indexnow.ts en es de     # submit multiple locales
 */

const INDEXNOW_KEY = "6e02d3ae9b0249b9bdebdf6a788bd888";

const LOCALE_HOSTS: Record<string, string> = {
  en: "https://buildestimatory.com",
  es: "https://es.buildestimatory.com",
  de: "https://de.buildestimatory.com",
  fr: "https://fr.buildestimatory.com",
  "pt-br": "https://pt.buildestimatory.com",
  "en-gb": "https://uk.buildestimatory.com",
  "en-ca": "https://ca.buildestimatory.com",
  it: "https://it.buildestimatory.com",
  pl: "https://pl.buildestimatory.com",
};

async function fetchSitemapUrls(host: string): Promise<string[]> {
  const res = await fetch(`${host}/sitemap.xml`);
  const xml = await res.text();
  const urls: string[] = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function submitToIndexNow(host: string, urls: string[]): Promise<void> {
  const body = {
    host: host.replace("https://", ""),
    key: INDEXNOW_KEY,
    keyLocation: `${host}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  console.log(`  → ${res.status} ${res.statusText} (${urls.length} URLs)`);
}

async function main() {
  const args = process.argv.slice(2);
  const locales = args.length > 0 ? args : Object.keys(LOCALE_HOSTS);

  for (const locale of locales) {
    const host = LOCALE_HOSTS[locale];
    if (!host) {
      console.log(`Unknown locale: ${locale}`);
      continue;
    }

    console.log(`\n=== ${locale} (${host}) ===`);

    try {
      const urls = await fetchSitemapUrls(host);
      console.log(`  Found ${urls.length} URLs in sitemap`);

      if (urls.length === 0) {
        console.log("  No URLs found, skipping");
        continue;
      }

      // IndexNow accepts max 10,000 URLs per request
      for (let i = 0; i < urls.length; i += 10000) {
        const batch = urls.slice(i, i + 10000);
        await submitToIndexNow(host, batch);
      }
    } catch (err) {
      console.error(`  Error: ${err}`);
    }
  }

  console.log("\nDone!");
}

main();
