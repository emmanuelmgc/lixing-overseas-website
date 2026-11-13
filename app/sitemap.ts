import type { MetadataRoute } from "next";
import { englishPath, getSiteOrigin, sitePaths } from "@/data/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();

  return sitePaths.flatMap(path => {
    const zh = origin + path;
    const en = origin + englishPath(path);
    const alternates = { languages: { "zh-CN": zh, en, "x-default": zh } };
    return [{ url: zh, alternates }, { url: en, alternates }];
  });
}
