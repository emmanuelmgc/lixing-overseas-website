"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const stages = ["先判断目标市场", "准备商务考察", "已有项目线索", "准备注册或设点", "需要海外营销"];

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.company || !data.contact || !data.question) {
      setError("请至少填写姓名、公司、电话 / 微信和主要问题。");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setError(result.error || "提交失败，请稍后重试或直接电话联系。");
        return;
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("网络错误，请检查网络后重试，或直接电话联系。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-white p-5 shadow-dossier md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="姓名" name="name" required />
        <Field label="公司" name="company" required />
        <Field label="电话 / 微信" name="contact" required />
        <Field label="目标国家或区域" name="region" />
        <label className="grid gap-2 text-sm font-medium text-navy md:col-span-2">
          当前阶段
          <select name="stage" className="h-12 border border-line bg-white px-3 text-gray-700 outline-none focus:border-gold">
            {stages.map((stage) => <option key={stage}>{stage}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy md:col-span-2">
          主要问题
          <textarea name="question" required rows={5} className="border border-line bg-white px-3 py-3 text-gray-700 outline-none focus:border-gold" placeholder="例如：想判断乌兹别克斯坦是否适合我们行业，或需要安排一次带问题的商务考察。" />
        </label>
      </div>
      {error ? <p className="mt-4 text-sm font-medium text-red-700">{error}</p> : null}
      {success ? (
        <p className="mt-4 border border-gold/40 bg-rice px-4 py-3 text-sm leading-6 text-navy">
          需求已记录。我们会先根据目标区域和项目阶段，判断适合从市场筛选、商务考察、资源对接还是落地路径开始沟通。
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex items-center gap-2 rounded bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#A77939] disabled:cursor-not-allowed disabled:opacity-60"
        aria-label="提交出海诊断需求"
      >
        {submitting ? "提交中…" : "提交需求"} <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({ label, name, required = false }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-navy">
      {label}
      <input name={name} required={required} className="h-12 border border-line bg-white px-3 text-gray-700 outline-none focus:border-gold" />
    </label>
  );
}
