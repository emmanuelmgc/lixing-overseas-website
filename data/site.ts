import { Search, FileText, Users, ClipboardCheck, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const site = {
  name: "励行出海",
  slogan: "出海更稳，登陆更快",
  description:
    "励行出海为中国企业提供商务考察、落地服务与海外营销咨询，深度聚焦乌兹别克斯坦/中亚与法语区国家两个核心市场，帮助企业更快判断机会、更稳进入市场。",
  contact: {
    address: "广州市天河区临江大道5号保利中心2302",
    phone: "（+86）13631333154",
    wechat: "同手机号",
  },
  legal: {
    // 占位符：上线前需替换为实际备案号
    icp: "沪ICP备2024XXXXXX号-1",
    copyright: "© 2026 励行出海 (LEXON Overseas). All rights reserved.",
  },
};

export const navItems = [
  { label: "重点市场", href: "/destinations" },
  { label: "服务方法", href: "/services" },
  { label: "项目案例", href: "/cases" },
  { label: "资源网络", href: "/resources" },
  { label: "关于励行", href: "/about" },
];

export const trustStats = [
  {
    value: "9年",
    label: "出海服务经验",
    note: "覆盖商务考察、政企交流与企业出海项目",
  },
  {
    value: "300+",
    label: "政企客户服务经验",
    note: "服务对象包括政府、企业、商学院与行业组织",
  },
  {
    value: "重点覆盖",
    label: "中亚与法语区市场",
    note: "以乌兹别克斯坦、法国、欧洲与非洲法语区国家为重点方向",
  },
  {
    value: "可调用",
    label: "在地资源网络",
    note: "政府、园区、商协会、中资企业、专业机构、高校与活动资源",
  },
];

export const processSteps = [
  { title: "需求诊断", body: "了解企业行业、目标区域、预算、阶段和关键问题。" },
  { title: "方案定制", body: "设计目的地、拜访对象、考察议题和交付物。" },
  { title: "资源对接", body: "对接政府、园区、企业、商协会和专业机构。" },
  { title: "全程执行", body: "安排考察、翻译、会议、交通、现场协调与风险控制。" },
  { title: "成果转化", body: "形成考察总结、机会清单、风险提示和下一步落地建议。" },
];

// 配合 processSteps 使用的线性图标，弱化表达
export const processIcons: LucideIcon[] = [
  Search,
  FileText,
  Users,
  ClipboardCheck,
  TrendingUp,
];

export const seo = {
  homeTitle: "励行出海｜商务考察、落地服务与海外营销咨询",
  homeDescription: site.description,
};

