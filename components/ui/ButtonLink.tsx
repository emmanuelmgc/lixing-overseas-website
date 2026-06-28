import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  ariaLabel?: string;
}) {
  const styles = {
    primary: "bg-gold text-ink hover:bg-gold/90",
    secondary: "border border-line bg-white text-navy hover:border-gold hover:text-ink",
    dark: "bg-navy text-white hover:bg-ink",
  }[variant];

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-1.5 rounded px-7 py-3.5 text-[15px] font-semibold transition ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

