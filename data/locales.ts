export const sitePaths = [
  "/",
  "/services",
  "/services/business-visit",
  "/services/market-entry-support",
  "/services/overseas-marketing",
  "/destinations",
  "/destinations/uzbekistan",
  "/destinations/francophone-markets",
  "/cases",
  "/resources",
  "/about",
  "/contact",
  "/legal/cookie",
  "/legal/privacy",
] as const;

export type SitePath = (typeof sitePaths)[number];

export function getSiteOrigin() {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lixing-overseas-website.vercel.app").origin;
}

export function englishPath(path: SitePath) {
  return path === "/" ? "/en" : `/en${path}`;
}

export function pageAlternates(path: SitePath, locale: "zh" | "en") {
  const english = englishPath(path);
  return {
    canonical: locale === "en" ? english : path,
    languages: { "zh-CN": path, en: english, "x-default": path },
  };
}
