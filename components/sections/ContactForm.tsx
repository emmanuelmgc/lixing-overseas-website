"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const stages = ["先判断目标市场", "准备商务考察", "已有项目线索", "准备注册或设点", "需要海外营销"];

const formCopy = {
  zh: {
    name: "姓名",
    company: "公司",
    contact: "电话 / 微信",
    region: "目标国家或区域",
    stage: "当前阶段",
    stages,
    question: "主要问题",
    placeholder: "例如：想判断乌兹别克斯坦是否适合我们行业，或需要安排一次带问题的商务考察。",
    validation: "请至少填写姓名、公司、电话 / 微信和主要问题。",
    failure: "提交失败，请稍后重试或直接电话联系。",
    serverError: "服务器错误，请稍后重试。",
    networkError: "网络错误，请检查网络后重试，或直接电话联系。",
    success: "需求已记录。我们会先根据目标区域和项目阶段，判断适合从市场筛选、商务考察、资源对接还是落地路径开始沟通。",
    submit: "提交需求",
    submitting: "提交中…",
    submitLabel: "提交出海诊断需求",
  },
  en: {
    name: "Name",
    company: "Company",
    contact: "Phone or WeChat",
    region: "Target country or region",
    stage: "Current stage",
    stages: [
      "Assessing a target market",
      "Planning a business visit",
      "Exploring a project opportunity",
      "Preparing to register a company or set up a local presence",
      "Looking for overseas marketing support",
    ],
    question: "Main question",
    placeholder: "For example, you may want to assess Uzbekistan for your industry or plan a business visit to answer specific questions.",
    validation: "Please enter your name, company, phone or WeChat, and main question.",
    failure: "We couldn’t submit your inquiry. Please try again later or call us directly.",
    serverError: "The server encountered an error. Please try again later.",
    networkError: "Please check your connection and try again, or call us directly.",
    success: "We received your inquiry. Based on your target region and project stage, we’ll suggest starting with market screening, a business visit, introductions to local partners, or a plan for getting established.",
    submit: "Send inquiry",
    submitting: "Sending…",
    submitLabel: "Send your overseas expansion inquiry",
  },
};

export function ContactForm({ locale = "zh" }: { locale?: keyof typeof formCopy }) {
  const copy = formCopy[locale];
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setSuccess(false);
    if (!data.name || !data.company || !data.contact || !data.question) {
      setError(copy.validation);
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
        if (locale === "zh") {
          setError(result.error || copy.failure);
        } else if (res.status === 400) {
          setError(copy.validation);
        } else {
          setError(result.error === formCopy.zh.serverError ? copy.serverError : copy.failure);
        }
        return;
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError(copy.networkError);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="min-w-0 border border-line bg-white p-5 shadow-dossier md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={copy.name} name="name" required />
        <Field label={copy.company} name="company" required />
        <Field label={copy.contact} name="contact" required />
        <Field label={copy.region} name="region" />
        <label className="grid min-w-0 gap-2 text-[16px] font-medium text-navy md:col-span-2">
          {copy.stage}
          <select name="stage" className="h-12 w-full min-w-0 border border-line bg-white px-3 text-gray-700 outline-none focus:border-gold">
            {stages.map((stage, index) => (
              <option key={stage} value={stage}>{copy.stages[index]}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-[16px] font-medium text-navy md:col-span-2">
          {copy.question}
          <textarea name="question" required rows={5} className="border border-line bg-white px-3 py-3 text-gray-700 outline-none focus:border-gold" placeholder={copy.placeholder} />
        </label>
      </div>
      {error ? <p role="alert" className="mt-4 text-[16px] font-medium text-red-700">{error}</p> : null}
      {success ? (
        <p role="status" className="mt-4 border border-gold/40 bg-rice px-4 py-3 text-[16px] leading-6 text-navy">
          {copy.success}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex items-center gap-2 rounded bg-gold px-5 py-3 text-[16px] font-semibold text-ink transition hover:bg-[#A77939] disabled:cursor-not-allowed disabled:opacity-60"
        aria-label={copy.submitLabel}
      >
        {submitting ? copy.submitting : copy.submit} <Send aria-hidden="true" className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({ label, name, required = false }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-[16px] font-medium text-navy">
      {label}
      <input name={name} required={required} className="h-12 border border-line bg-white px-3 text-gray-700 outline-none focus:border-gold" />
    </label>
  );
}
