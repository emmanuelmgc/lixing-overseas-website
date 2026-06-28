import { Container } from "@/components/ui/Container";

const credentials = [
  {
    value: "9",
    unit: "年",
    label: "出海服务经验",
  },
  {
    value: "300",
    unit: "+",
    label: "政企客户服务",
  },
  {
    value: null,
    unit: null,
    label: "聚焦中亚与法语区",
    note: "不做泛出海，只深耕两个核心市场",
  },
  {
    value: null,
    unit: null,
    label: "可调用资源网络",
    note: "政府 · 园区 · 商协会 · 专业机构 · 高校",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-line/60 bg-white">
      <Container className="max-w-[1160px]">
        <div className="grid grid-cols-2 gap-y-8 py-12 lg:grid-cols-4 lg:divide-x lg:divide-line/50">
          {credentials.map((item, index) => (
            <article
              key={index}
              className={`px-4 sm:px-6 lg:px-8 ${index >= 2 ? "mt-8 lg:mt-0" : ""}`}
            >
              {item.value ? (
                <p className="font-serif text-4xl font-semibold leading-none text-navy lg:text-5xl">
                  {item.value}
                  <span className="ml-0.5 text-2xl font-medium text-gold lg:text-3xl">{item.unit}</span>
                </p>
              ) : null}
              <p className={`mt-3 text-[15px] font-semibold leading-6 text-navy ${item.value ? "" : "lg:mt-0"}`}>
                {item.label}
              </p>
              {item.note ? (
                <p className="mt-1.5 text-[13px] leading-5 text-gray-500">{item.note}</p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
