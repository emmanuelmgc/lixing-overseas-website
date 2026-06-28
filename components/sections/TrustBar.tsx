import { Container } from "@/components/ui/Container";

const credentials = [
  {
    accent: "9",
    unit: "年",
    headline: "出海服务经验",
    description: "覆盖商务考察、政企交流与企业出海项目",
  },
  {
    accent: "300",
    unit: "+",
    headline: "政企客户服务经验",
    description: "服务对象包括政府、企业、商学院与行业组织",
  },
  {
    headline: "重点覆盖中亚与法语区市场",
    description: "以乌兹别克斯坦、法国、欧洲与非洲法语区国家为重点方向",
  },
  {
    headline: "可调用的在地资源网络",
    description: "政府、园区、商协会、中资企业、专业机构、高校与活动资源",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-gold/15 bg-gradient-to-b from-rice via-[#FBF6EC] to-white py-7">
      <Container className="max-w-[1160px]">
        <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4 lg:divide-x lg:divide-gold/25">
          {credentials.map((item) => (
            <article key={item.headline} className="px-5 sm:px-6 lg:px-7">
              {item.accent ? (
                <p className="font-serif text-[15px] font-semibold tracking-tight text-gold">
                  {item.accent}
                  <span className="ml-0.5 text-[12px] font-medium not-italic text-gold/75">{item.unit}</span>
                  <span className="ml-2 text-[15px] font-semibold text-navy">{item.headline}</span>
                </p>
              ) : (
                <p className="text-[15px] font-semibold leading-6 text-navy">{item.headline}</p>
              )}
              <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
