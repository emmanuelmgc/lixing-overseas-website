import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServiceCard({ title, href, body }: { title: string; href: string; body: string }) {
  return (
    <Link href={href} className="block border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-gold/70 hover:shadow-dossier">
      <h3 className="font-serif text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-4 leading-7 text-gray-600">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">查看详情 <ArrowRight className="h-4 w-4" /></span>
    </Link>
  );
}

