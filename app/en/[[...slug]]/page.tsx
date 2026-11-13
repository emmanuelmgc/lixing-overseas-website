import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnglishHome } from "@/components/english/EnglishHome";
import { englishInteriorPages } from "@/components/english/InteriorPages";
import { englishContactLegalPages } from "@/components/english/ContactLegalPages";
import { pageAlternates, sitePaths, type SitePath } from "@/data/locales";

const pages = {
  "/": {
    title: "International Expansion and Industrial Investment",
    description: "LEXON Overseas helps Chinese companies assess markets, meet local partners and carry out projects in Central Asia and Francophone markets.",
    render: () => <EnglishHome />,
  },
  ...englishInteriorPages,
  ...englishContactLegalPages,
} satisfies Record<SitePath, { title: string; description: string; render: () => React.ReactNode }>;

type PageProps = { params: Promise<{ slug?: string[] }> };

function getPath(slug: string[]): SitePath {
  const path = "/" + slug.join("/");
  if (!sitePaths.includes(path as SitePath)) notFound();
  return path as SitePath;
}

export function generateStaticParams() {
  return sitePaths.map(path => ({ slug: path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const path = getPath((await params).slug ?? []);
  const { title, description } = pages[path];
  return { title, description, alternates: pageAlternates(path, "en") };
}

export default async function EnglishPage({ params }: PageProps) {
  const path = getPath((await params).slug ?? []);
  return <main id="main">{pages[path].render()}</main>;
}
