import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lixing-overseas.com";
  const lastModified = new Date();

  const routes = [
    "",
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") || route.startsWith("/destinations") ? 0.8 : 0.6,
  }));
}
