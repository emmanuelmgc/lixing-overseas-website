import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-rice pt-32 pb-20 md:pt-40">
      <Container>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">404</p>
        <h1 className="font-serif text-4xl font-semibold text-navy md:text-6xl">没有找到这个页面</h1>
        <p className="mt-6 max-w-2xl leading-8 text-gray-600">你可以回到首页，或直接预约一次出海诊断，把要判断的问题说清楚。</p>
        <Link href="/" className="mt-8 inline-flex rounded bg-gold px-5 py-3 text-sm font-semibold text-ink">返回首页</Link>
      </Container>
    </section>
  );
}
