"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  reason: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim()) next.email = "Email address is required.";
    else if (!emailPattern.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Tell me a bit about what you need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      if (siteConfig.formEndpoint) {
        const res = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900));
      }
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-sm border border-gold/30 bg-navy/5 p-10 text-center">
        <CheckCircle2 className="text-gold" size={40} />
        <p className="font-display text-lg font-semibold text-navy-dark">
          Message sent.
        </p>
        <p className="text-sm text-charcoal/70">
          Thanks for reaching out — I&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-gold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          required
          error={errors.name}
          input={
            <input
              type="text"
              value={form.name}
              onChange={update("name")}
              className={inputClass(!!errors.name)}
              aria-invalid={!!errors.name}
            />
          }
        />
        <Field
          label="Email Address"
          required
          error={errors.email}
          input={
            <input
              type="email"
              value={form.email}
              onChange={update("email")}
              className={inputClass(!!errors.email)}
              aria-invalid={!!errors.email}
            />
          }
        />
      </div>

      <Field
        label="Company / Business"
        input={
          <input
            type="text"
            value={form.company}
            onChange={update("company")}
            className={inputClass(false)}
          />
        }
      />

      <Field
        label="What can I help you with?"
        input={
          <select
            value={form.reason}
            onChange={update("reason")}
            className={inputClass(false)}
          >
            <option value="">Select an option</option>
            <option value="coaching">Business Coaching</option>
            <option value="consulting">Business Consulting</option>
            <option value="speaking">Speaking Engagement</option>
            <option value="other">Something Else</option>
          </select>
        }
      />

      <Field
        label="Message"
        required
        error={errors.message}
        input={
          <textarea
            value={form.message}
            onChange={update("message")}
            rows={5}
            className={inputClass(!!errors.message)}
            aria-invalid={!!errors.message}
          />
        }
      />

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} /> Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-navy-dark px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-gold hover:text-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="animate-spin" size={16} />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-sm border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold ${
    hasError ? "border-red-400" : "border-navy/15"
  }`;
}

function Field({
  label,
  required,
  error,
  input,
}: {
  label: string;
  required?: boolean;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-dark">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {input}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
