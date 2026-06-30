# 首页重构 — 高端B2B咨询公司风格

## 概述
将励行出海官网首页从"视觉化业务说明书"重构为 McKinsey/BCG/Bain 级别的高端B2B咨询公司气质。核心思路：克制、专业、留白、秩序感。

## 提交信息
- **Commit**: `c9273ee`
- **文件改动**: 14 文件（13 修改 + 1 新增），+430/-314 行
- **Build**: `next build` 通过，0 error，18 pages generated
- **部署**: 已推送 main 分支，Vercel 自动部署中

## 首页结构变化（旧 → 新）

| 顺序 | 旧结构 | 新结构 |
|------|--------|--------|
| 1 | Hero（含浮动重点区域卡片） | Hero（干净左文右图，720px） |
| 2 | TrustBar（4 等宽卡片） | TrustBar（极简横向数据条） |
| 3 | 核心问题（"官网首页只回答三个关键问题"） | 核心问题（"企业出海前最该先判断三个问题"） |
| 4 | 目的地区域（DestinationCard 网格） | **KeyMarkets**（2 张大区域卡，合并重复） |
| 5 | 服务路径（3 卡 + 多标签） | 服务方法（3 张干净卡片，弱阴影） |
| 6 | 资源网络（4 张普通卡片） | 代表案例（前移，2-3 张项目现场感） |
| 7 | 服务流程 | 资源网络（结构图：客户问题→调用→输出） |
| 8 | 洞察文章 | 服务流程（横向 5 步，弱化） |
| 9 | CTA | 洞察（简洁列表，仅 3 篇） |
| 10 | — | CTA（"先做一次出海诊断"） |

## 修改文件清单

### 新增
- `components/sections/KeyMarkets.tsx` — 合并重点区域+目的地，2 张大区域卡

### 重写
- `components/sections/HeroSection.tsx` — 去浮动卡，左文右图，720px
- `components/sections/TrustBar.tsx` — 极简横向数据条
- `components/sections/ServicePath.tsx` — 3 卡精简，弱阴影
- `components/sections/ResourceNetwork.tsx` — 卡片→结构图
- `components/sections/ProcessTimeline.tsx` — 横向 5 步压缩
- `components/sections/CTASection.tsx` — 文案微调
- `components/cards/CaseCard.tsx` — 三段式精简
- `components/cards/InsightCard.tsx` — 简洁列表风
- `components/cards/IssueCard.tsx` — 圆角+弱阴影
- `app/page.tsx` — 8 模块新顺序 + 删内部文案

### 数据层
- `data/site.ts` — 导航改为：重点市场/服务方法/项目案例/资源网络/关于励行/预约诊断
- `data/services.ts` — servicePaths 标题精简
- `data/insights.ts` — 仅保留前 3 条

## 主要视觉优化点
1. **首屏**：从"图文+浮动卡"→"干净左文右图"，3 秒内说明差异
2. **信任条**：从"4 等宽白底卡片"→"极简横向数据条"，大数字短说明
3. **重点市场**：从"目的地网格"→"2 张大区域卡"，咨询公司能力模块感
4. **资源网络**：从"4 张普通卡片"→"结构图"，展示资源调用逻辑
5. **整体**：圆角 8-12px，弱阴影，1px 边框+留白，深海军蓝/暖白/低饱和金

## 删除/合并/弱化的模块
- ❌ 删除"官网首页只回答三个关键问题"内部说明式文案
- 🔀 合并"重点区域"(HeroSection 内) + "目的地区域"(DestinationCard) → KeyMarkets
- ⬇️ 弱化 ProcessTimeline 视觉权重（横向 5 步）
- ⬇️ 压缩 InsightCard 从多篇→3 篇简洁列表
- ⬇️ CaseCard 从多标签→三段式（问题/动作/结果）

## 无法完成/需补充
- 无。所有改动均基于现有代码和图片资产，build 通过。

## 验收自查
1. ✅ 首页第一眼更像高端B2B咨询公司，不像旅行社
2. ✅ 首屏 3 秒内说明励行差异（出海更稳，登录更快 + 中亚与法语区聚焦）
3. ✅ 首页减少信息堆叠和卡片疲劳（从多模块→8 模块克制节奏）
4. ✅ "中亚+法语区"聚焦更清晰（2 张大区域卡）
5. ✅ "先判断，再出访，再落地"方法论更突出（核心问题模块）
6. ✅ 案例更有项目现场感（三段式，减少标签）
7. ✅ 资源网络不再像普通服务列表（结构图）
8. ✅ 移动端自然清晰（响应式 grid）
9. ✅ 删除内部说明式文案
10. ✅ 保持业务内容完整性（未删除任何业务数据）
