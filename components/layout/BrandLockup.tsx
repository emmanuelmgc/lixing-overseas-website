import Link from "next/link";

export function BrandLockup() {
  return (
    <Link className="brand site-brand" href="/" aria-label="励行出海首页">
      <img src="/images/lixing/lexon-mountain.png" alt="" width={124} height={54} />
      <span className="site-brand-copy">
        <span className="site-brand-cn">励行出海</span>
        <span className="site-brand-en" lang="en">LEXON OVERSEAS</span>
      </span>
    </Link>
  );
}
