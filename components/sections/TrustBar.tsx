import { Container } from "@/components/ui/Container";

const credentials = [
  {
    headline: "9年出海服务经验",
    description: "覆盖商务考察、政企交流与企业出海项目",
  },
  {
    headline: "300+政企客户服务经验",
    description: "服务对象包括政府、企业、商学院与行业组织",
  },
  {
    headline: "重点覆盖中亚与法语区市场",
    description: "以乌兹别克斯坦、法国、北非、西非为重点方向",
  },
  {
    headline: "可调用的在地资源网络",
    description: "政府、园区、商协会、中资企业、专业机构、高校与活动资源",
  },
];

export function TrustBar() {
  return (
    <section className="border-b border-line bg-rice py-8">
      <Container className="max-w-[1160px]">
        <div className="grid gap-px bg-line/70 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item) => (
            <article key={item.headline} className="bg-rice px-5 py-6 sm:px-6 lg:px-7">
              <p className="text-[15px] font-semibold leading-6 text-navy">{item.headline}</p>
              <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}