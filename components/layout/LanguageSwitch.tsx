"use client";

import { englishPath, type SitePath } from "@/data/locales";

const homeSections = new Set(["#main", "#top", "#cases", "#services", "#markets", "#about", "#contact"]);

export function LanguageSwitch({ path, locale }: { path: SitePath; locale: "zh" | "en" }) {
  const toEnglish = locale === "zh";
  const href = toEnglish ? englishPath(path) : path;
  const label = toEnglish ? "English" : "中文";

  return (
    <a
      className="site-language"
      href={href}
      hrefLang={toEnglish ? "en" : "zh-CN"}
      lang={toEnglish ? "en" : "zh-CN"}
      aria-label={toEnglish ? "Switch to English" : "切换到中文"}
      onClick={event => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const { hash } = window.location;
        if ((path === "/" && homeSections.has(hash)) || (path === "/contact" && hash === "#inquiry")) {
          event.preventDefault();
          window.location.assign(href + hash);
        }
      }}
    >
      {label}
    </a>
  );
}
