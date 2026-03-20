import { Metadata } from "next";

export const siteConfig = {
  name: "BuildEstimatory",
  url: "https://buildestimatory.com",
  description:
    "Free construction material calculators for US builders and contractors. Get accurate material estimates for framing, roofing, foundation, and more.",
};

export function generateCalculatorMetadata({
  title,
  description,
  slug,
  category,
}: {
  title: string;
  description: string;
  slug: string;
  category: string;
}): Metadata {
  const fullTitle = `${title} | BuildEstimatory`;
  const url = `${siteConfig.url}/calculators/${category}/${slug}/`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.url}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateCategoryMetadata({
  title,
  description,
  category,
}: {
  title: string;
  description: string;
  category: string;
}): Metadata {
  const fullTitle = `${title} | BuildEstimatory`;
  const url = `${siteConfig.url}/calculators/${category}/`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.url}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}
