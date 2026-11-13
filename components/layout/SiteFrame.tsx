"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type SiteFrameProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  mobileAction: ReactNode;
};

export function SiteFrame({ children, header, footer, mobileAction }: SiteFrameProps) {
  const pathname = usePathname();

  if (pathname === "/") return children;

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
      {mobileAction}
    </>
  );
}
