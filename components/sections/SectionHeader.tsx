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
      {eyebrow ? <p className="inner-kicker mb-3">{eyebrow}</p> : null}
      <h2 className="inner-section-title text-navy">{title}</h2>
      {intro ? <p className="inner-intro mt-4">{intro}</p> : null}
    </div>
  );
}

