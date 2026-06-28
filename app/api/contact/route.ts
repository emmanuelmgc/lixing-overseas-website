import { NextResponse } from "next/server";

/**
 * 联系表单提交 API
 *
 * 支持的通知渠道（通过环境变量配置，可同时启用多个）：
 *
 * 1. 飞书自定义机器人 Webhook（推荐，最简单）
 *    - 环境变量：FEISHU_WEBHOOK_URL
 *    - 获取方式：飞书群 → 设置 → 群机器人 → 添加自定义机器人 → 复制 Webhook 地址
 *
 * 2. 腾讯问卷
 *    - 环境变量：TENCENT_SURVEY_API_URL（问卷提交接口 URL）
 *    - 获取方式：腾讯问卷 → 问卷设置 → API 接口 → 获取提交接口
 *
 * 3. 腾讯文档（在线表格）
 *    - 环境变量：TENCENT_DOC_API_URL（腾讯文档 API 写入接口）
 *    - 环境变量：TENCENT_DOC_TOKEN（API 访问令牌）
 *    - 获取方式：腾讯文档开放平台 → 创建应用 → 获取 API 权限
 *
 * 4. 通用 Webhook（备用，支持任意支持 POST 的服务）
 *    - 环境变量：CONTACT_WEBHOOK_URL
 */

type ContactPayload = {
  name: string;
  company: string;
  contact: string;
  region?: string;
  stage?: string;
  question: string;
};

function validatePayload(data: unknown): data is ContactPayload {
  if (typeof data !== "object" || data === null) return false;
  const obj = data as Record<string, unknown>;
  return (
    typeof obj.name === "string" && obj.name.trim().length > 0 &&
    typeof obj.company === "string" && obj.company.trim().length > 0 &&
    typeof obj.contact === "string" && obj.contact.trim().length > 0 &&
    typeof obj.question === "string" && obj.question.trim().length > 0
  );
}

// ─── 飞书机器人通知 ───────────────────────────────────────────
async function notifyFeishu(payload: ContactPayload): Promise<void> {
  const webhookUrl = process.env.FEISHU_WEBHOOK_URL;
  if (!webhookUrl) return;

  const card = {
    msg_type: "interactive",
    card: {
      header: {
        title: { tag: "plain_text", content: "🔔 新的出海诊断需求" },
        template: "gold",
      },
      elements: [
        {
          tag: "div",
          fields: [
            { is_short: true, text: { tag: "lark_md", content: `**姓名**\n${payload.name}` } },
            { is_short: true, text: { tag: "lark_md", content: `**公司**\n${payload.company}` } },
            { is_short: true, text: { tag: "lark_md", content: `**电话/微信**\n${payload.contact}` } },
            { is_short: true, text: { tag: "lark_md", content: `**目标区域**\n${payload.region || "未填写"}` } },
            { is_short: true, text: { tag: "lark_md", content: `**当前阶段**\n${payload.stage || "未填写"}` } },
          ],
        },
        {
          tag: "div",
          text: { tag: "lark_md", content: `**主要问题**\n${payload.question}` },
        },
        {
          tag: "note",
          elements: [
            { tag: "plain_text", content: `提交时间：${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}` },
          ],
        },
      ],
    },
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`飞书通知失败: ${res.status} ${text}`);
  }
}

// ─── 腾讯问卷通知 ─────────────────────────────────────────────
async function notifyTencentSurvey(payload: ContactPayload): Promise<void> {
  const surveyApiUrl = process.env.TENCENT_SURVEY_API_URL;
  if (!surveyApiUrl) return;

  const surveyBody = {
    name: payload.name,
    company: payload.company,
    contact: payload.contact,
    region: payload.region || "",
    stage: payload.stage || "",
    question: payload.question,
    submitted_at: new Date().toISOString(),
  };

  const res = await fetch(surveyApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(surveyBody),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`腾讯问卷通知失败: ${res.status} ${text}`);
  }
}

// ─── 腾讯文档通知 ─────────────────────────────────────────────
async function notifyTencentDoc(payload: ContactPayload): Promise<void> {
  const docApiUrl = process.env.TENCENT_DOC_API_URL;
  const docToken = process.env.TENCENT_DOC_TOKEN;
  if (!docApiUrl) return;

  const row = [
    new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }),
    payload.name,
    payload.company,
    payload.contact,
    payload.region || "",
    payload.stage || "",
    payload.question,
  ];

  const res = await fetch(docApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(docToken ? { Authorization: `Bearer ${docToken}` } : {}),
    },
    body: JSON.stringify({ row }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`腾讯文档通知失败: ${res.status} ${text}`);
  }
}

// ─── 通用 Webhook 通知（备用）─────────────────────────────────
async function notifyGenericWebhook(payload: ContactPayload): Promise<void> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return;

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, submitted_at: new Date().toISOString() }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`通用 Webhook 通知失败: ${res.status} ${text}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!validatePayload(body)) {
      return NextResponse.json(
        { ok: false, error: "请至少填写姓名、公司、电话/微信和主要问题。" },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      name: String(body.name).trim(),
      company: String(body.company).trim(),
      contact: String(body.contact).trim(),
      region: body.region ? String(body.region).trim() : undefined,
      stage: body.stage ? String(body.stage).trim() : undefined,
      question: String(body.question).trim(),
    };

    // 并行发送到所有已配置的渠道
    const channels: Promise<void>[] = [];
    const enabledChannels: string[] = [];

    if (process.env.FEISHU_WEBHOOK_URL) {
      channels.push(notifyFeishu(payload));
      enabledChannels.push("飞书");
    }
    if (process.env.TENCENT_SURVEY_API_URL) {
      channels.push(notifyTencentSurvey(payload));
      enabledChannels.push("腾讯问卷");
    }
    if (process.env.TENCENT_DOC_API_URL) {
      channels.push(notifyTencentDoc(payload));
      enabledChannels.push("腾讯文档");
    }
    if (process.env.CONTACT_WEBHOOK_URL) {
      channels.push(notifyGenericWebhook(payload));
      enabledChannels.push("通用Webhook");
    }

    // 如果没有配置任何渠道，记录到控制台（开发模式）
    if (channels.length === 0) {
      console.log("[contact] 未配置通知渠道，表单数据：", payload);
      return NextResponse.json({
        ok: true,
        message: "需求已记录（未配置通知渠道，请检查环境变量）。",
      });
    }

    // 等待所有渠道完成（一个失败不影响其他）
    const results = await Promise.allSettled(channels);
    const failures = results
      .map((r, i) => (r.status === "rejected" ? `${enabledChannels[i]}: ${r.reason}` : null))
      .filter(Boolean);

    if (failures.length === enabledChannels.length) {
      // 所有渠道都失败了
      return NextResponse.json(
        { ok: false, error: "提交失败，请稍后重试或直接电话联系。" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "需求已记录。我们会先根据目标区域和项目阶段，判断适合从市场筛选、商务考察、资源对接还是落地路径开始沟通。",
    });
  } catch (err) {
    console.error("[contact] API 错误:", err);
    return NextResponse.json(
      { ok: false, error: "服务器错误，请稍后重试。" },
      { status: 500 }
    );
  }
}
