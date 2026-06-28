import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-navy md:text-5xl">{title}</h2>
      {intro ? <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">{intro}</p> : null}
    </div>
  );
}

