export type CaseItem = {
  title: string;
  region: string;
  industry: string;
  service: string;
  stage: string;
  scope: string;
  problem: string;
  action: string;
  result: string;
  deliverables: string[];
  image: string;
};

export const cases: CaseItem[] = [
  {
    title: "制造企业乌兹别克斯坦产业园区考察",
    region: "乌兹别克斯坦 / 中亚",
    industry: "制造业 / 产业投资",
    service: "商务考察",
    stage: "完成关键资源对接",
    scope: "地方政府、工业园区、商协会、中资企业与专业服务机构",
    problem: "客户希望判断乌兹别克斯坦是否适合设点生产，但缺少政府、园区和合作方的一手入口。",
    action: "围绕用地、政策、供应链和用工问题设计考察议题，安排多方拜访并现场交叉验证信息。",
    result: "形成目的地进入判断、合作机会清单和下一步落地事项。",
    deliverables: ["考察路径", "拜访议题", "机会清单", "风险提示"],
    image: "/images/lixing/uz-case-park.webp",
  },
  {
    title: "中亚水务与环保项目机会验证",
    region: "乌兹别克斯坦 / 中亚",
    industry: "水务 / 环保基建",
    service: "项目验证",
    stage: "完成初步机会判断",
    scope: "政府部门、项目方、园区与本地专业机构",
    problem: "客户接触到水务和环保类项目线索，需要判断项目真实性、合作主体和后续投入边界。",
    action: "协助梳理项目背景和关键问题，安排相关机构沟通，并提示政策、付款、合作主体等风险点。",
    result: "帮助客户明确哪些线索值得继续推进，哪些需要暂缓或补充验证。",
    deliverables: ["项目问题清单", "会谈纪要", "合作风险卡", "下一步建议"],
    image: "/images/lixing/uz-case-water.webp",
  },
  {
    title: "光伏企业中亚合作方筛选",
    region: "中亚",
    industry: "新能源 / 光伏",
    service: "落地服务",
    stage: "完成合作方初筛",
    scope: "投资促进机构、能源项目方、园区、法税与物流机构",
    problem: "客户希望进入中亚新能源市场，但难以判断项目资源、政策窗口和合作方可靠性。",
    action: "围绕政策环境、项目可行性、当地履约能力和配套资源，组织多轮资源访谈与现场交流。",
    result: "形成阶段性合作方筛选建议和后续落地路径。",
    deliverables: ["资源访谈", "合作方初筛", "风险提示", "落地路径"],
    image: "/images/lixing/uz-case-solar.webp",
  },
  {
    title: "消费品牌以法国为窗口测试法语区市场",
    region: "法国 / 欧洲 / 非洲法语区国家",
    industry: "消费品 / 品牌出海",
    service: "营销咨询",
    stage: "完成市场测试路径",
    scope: "法国活动资源、媒体资源、文化场景与法语区渠道入口",
    problem: "品牌希望进入欧洲与非洲法语区国家，但缺少低成本测试表达和受众反馈的入口。",
    action: "以法国为测试窗口，设计活动露出、媒体沟通和本土化表达路径，再判断是否延伸到欧洲与非洲法语区国家。",
    result: "形成法语区市场测试方案和品牌升级建议。",
    deliverables: ["传播主题", "活动建议", "媒体资源", "本土化方向"],
    image: "/images/lixing/case-fr-brand.webp",
  },
  {
    title: "企业家团组欧洲与香港商务考察",
    region: "欧洲 / 香港",
    industry: "企业家团组 / 投资交流",
    service: "商务考察",
    stage: "完成认知升级与资源连接",
    scope: "驻外机构、投资促进资源、顶尖企业、资本市场与人力资源机构",
    problem: "团组希望理解欧洲投资环境、企业合作机会和香港资本市场路径，而不只是参观打卡。",
    action: "设计欧洲投资政策、企业交流、人力资源合作与香港上市路径等主题交流，组织关键嘉宾参与。",
    result: "帮助团员建立目的地判断框架，并沉淀后续合作方向。",
    deliverables: ["主题行程", "嘉宾邀约", "交流议题", "考察总结"],
    image: "/images/lixing/case-eu-hk.webp",
  },
  {
    title: "日本康养行业考察与人才交流合作",
    region: "日本",
    industry: "康养 / 职业培训",
    service: "商务考察",
    stage: "推进交流合作",
    scope: "康养机构、教育培训机构与行业专家",
    problem: "客户关注日本养老行业的专业度和精细化管理，希望寻找人才培训与合作交流机会。",
    action: "安排行业机构考察和专业交流，协助客户梳理可合作的人才培训与交流方向。",
    result: "推动客户与日本康养机构形成后续人才交流培训计划。",
    deliverables: ["考察安排", "机构交流", "合作方向", "培训计划建议"],
    image: "/images/lixing/case-jp-eldercare.webp",
  },
];