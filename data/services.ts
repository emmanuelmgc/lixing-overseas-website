export const decisionIssues = [
  {
    question: "目标市场是否真的值得进入？",
    risk: "只看宏观数据，容易误判真实需求。",
    action: "通过政府、园区、企业和商协会多方验证市场机会。",
  },
  {
    question: "本土合作方是否可靠？",
    risk: "信息不对称容易导致合作成本上升。",
    action: "协助筛选、约见并交叉验证潜在合作方。",
  },
  {
    question: "考察之后如何继续推进？",
    risk: "很多考察结束后没有项目承接，机会停留在名片和合影。",
    action: "形成机会清单、风险提示和下一步落地路径。",
  },
  {
    question: "法税、人力、物流和用地怎么判断？",
    risk: "落地服务分散，企业难以判断谁可靠。",
    action: "连接当地专业机构，协助建立初步执行方案。",
  },
  {
    question: "海外营销怎么先低成本测试？",
    risk: "直接投放和铺渠道容易浪费预算。",
    action: "通过境外媒体、活动和本土化内容做市场测试。",
  },
];

export const servicePaths = [
  {
    step: "阶段一",
    title: "商务考察",
    href: "/services/business-visit",
    target: "用于验证市场、接触关键资源、建立初步判断",
    items: ["行业考察", "项目考察", "政府对接", "学术交流", "企业拜访", "展会定制"],
    deliverables: "考察方案、拜访名单、会议议题、现场执行、考察总结",
    image: "/images/lixing/ppt-business-briefing.webp",
  },
  {
    step: "阶段二",
    title: "项目落地",
    href: "/services/market-entry-support",
    target: "用于承接考察成果，形成注册、园区、合作方、法税、人力、供应链等落地路径",
    items: ["政务", "税务", "法务", "人力", "用地", "物流", "供应链"],
    deliverables: "资源筛选、专业机构连接、会议安排、风险提示、路径建议",
    image: "/images/lixing/ppt-boardroom-dialogue.webp",
  },
  {
    step: "阶段三",
    title: "海外营销与市场测试",
    href: "/services/overseas-marketing",
    target: "用于在法语区、欧洲或新兴市场测试品牌表达、渠道反馈与客户接受度",
    items: ["境外媒体资源", "海外营销策划", "本土化品牌运营", "活动资源"],
    deliverables: "市场测试方案、传播主题、媒体建议、活动策划方向",
    image: "/images/lixing/ppt-france-workshop.webp",
  },
];

export const serviceDetails = {
  "business-visit": {
    title: "商务考察",
    hero: "不做泛泛参观，只做带着问题的商务考察",
    intro: "适合正在判断目标市场、寻找合作方、验证项目机会或组织企业家团组的客户。",
    image: "/images/lixing/ppt-business-briefing.webp",
    sections: [
      { title: "我们如何设计考察", items: ["先明确客户要验证的问题", "拆解拜访对象与会议议题", "安排政府、园区、企业、商协会、高校、展会与专业机构", "把现场交流转化为机会清单与风险提示"] },
      { title: "典型交付物", items: ["考察方案", "拜访名单", "会议议题", "现场执行", "考察总结", "机会清单"] },
      { title: "适合谁", items: ["董事长与总经理", "海外业务负责人", "投资负责人", "商学院与行业协会", "企业家团组"] },
      { title: "项目周期", items: ["根据目的地、拜访对象和议题复杂度评估", "通常先进行需求诊断，再确认行程周期、资源对接范围和交付物"] },
    ],
    cta: "定制考察方案",
  },
  "market-entry-support": {
    title: "落地服务",
    hero: "考察之后，更重要的是把机会变成路径",
    intro: "适合已经确定目标市场、正在筛选园区、寻找合作方、准备注册设点或需要本地运营支持的企业。",
    image: "/images/lixing/ppt-boardroom-dialogue.webp",
    sections: [
      { title: "服务内容", items: ["政务对接", "税务与法务", "人力与用地", "物流与供应链", "园区筛选", "合作伙伴筛选"] },
      { title: "工作方式", items: ["资源筛选", "专业机构连接", "会议安排", "风险提示", "路径建议"] },
      { title: "交付物", items: ["资源清单", "会谈安排", "风险提示卡", "下一步落地建议", "阶段性执行路径"] },
    ],
    cta: "预约落地路径沟通",
  },
  "overseas-marketing": {
    title: "营销咨询",
    hero: "让品牌先被目标市场理解",
    intro: "适合消费品、文旅、教育、健康产品、白酒、香品、清凉膏等品牌，尤其是希望以法国活动与媒体作为跳板测试法语区市场的团队。",
    image: "/images/lixing/ppt-france-workshop.webp",
    sections: [
      { title: "服务内容", items: ["境外媒体资源", "海外营销策划", "本土化品牌运营", "活动资源", "品牌升级"] },
      { title: "法语区营销路径", items: ["以法国活动与媒体作为测试窗口", "梳理欧洲与非洲法语区国家市场的受众差异", "用低成本内容和活动验证品牌表达"] },
      { title: "交付物", items: ["市场测试方案", "传播主题", "媒体资源建议", "活动策划", "本土化文案方向"] },
    ],
    cta: "预约海外营销诊断",
  },
} as const;

