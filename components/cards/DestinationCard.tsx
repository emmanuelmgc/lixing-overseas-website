import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DestinationCard({ destination }: { destination: { title: string; href: string; suitable: string; focus: string; cta: string } }) {
  return (
    <article className="border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-gold/70">
      <h3 className="font-serif text-2xl font-semibold text-navy">{destination.title}</h3>
      <dl className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
        <div><dt className="font-semibold text-gray-900">适合：</dt><dd>{destination.suitable}</dd></div>
        <div><dt className="font-semibold text-gray-900">重点：</dt><dd>{destination.focus}</dd></div>
      </dl>
      <Link href={destination.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold" aria-label={destination.cta}>
        {destination.cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

