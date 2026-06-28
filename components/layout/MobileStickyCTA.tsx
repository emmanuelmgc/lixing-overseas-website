import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/94 p-3 backdrop-blur md:hidden">
      <Link href="/contact" aria-label="预约出海诊断" className="flex h-12 items-center justify-center rounded bg-gold text-sm font-semibold text-ink">
        预约出海诊断
      </Link>
    </div>
  );
}

