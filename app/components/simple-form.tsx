"use client";

import { FormEvent, useRef, useState } from "react";
import { EMAILJS_BRAND, sendContactAutoReply } from "../lib/emailjs-contact";

type FormStatus = "idle" | "loading" | "success" | "error";

type SimpleFormProps = {
  title: string;
  helper: string;
  buttonText: string;
  fields?: Array<{ name: string; label: string; type?: string; multiline?: boolean }>;
  dark?: boolean;
  buttonClassName?: string;
  /** Send a branded EmailJS auto-reply when the contact form is submitted. */
  contactAutoReply?: boolean;
};

export function SimpleForm({
  title,
  helper,
  buttonText,
  fields = [{ name: "email", label: "Email", type: "email" }],
  dark,
  buttonClassName,
  contactAutoReply = false,
}: SimpleFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submittingRef = useRef(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;

    submittingRef.current = true;
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      submittingRef.current = false;
      return;
    }

    if (contactAutoReply) {
      const name = String(formData.get("name") || "").trim();
      const topic = String(formData.get("topic") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (!name || !topic || !message) {
        setErrorMessage("Please complete all fields before sending.");
        setStatus("error");
        submittingRef.current = false;
        return;
      }

      try {
        await sendContactAutoReply({ name, email, topic, message });
        setStatus("success");
        form.reset();
      } catch {
        setErrorMessage(
          `We couldn't send your confirmation email. Please try again or email ${EMAILJS_BRAND.supportEmail}.`,
        );
        setStatus("error");
      } finally {
        submittingRef.current = false;
      }
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    submittingRef.current = false;
    form.reset();
  };

  return (
    <section className={dark ? "surface-card-dark" : "surface-card"}>
      <h3 className={`font-heading text-2xl tracking-wide ${dark ? "text-white" : "text-site-text"}`}>{title}</h3>
      <p className={`mt-2 ${dark ? "text-white/75" : "text-site-muted"}`}>{helper}</p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        {fields.map((field) => (
          <label className="block" key={field.name}>
            <span className={`mb-2 block text-sm ${dark ? "text-white/75" : "text-site-muted"}`}>{field.label}</span>
            {field.multiline ? (
              <textarea
                name={field.name}
                required
                rows={4}
                className={`w-full rounded-2xl px-4 py-3 outline-none transition ${
                  dark
                    ? "border border-white/20 bg-white/5 text-white focus:border-brand-orange"
                    : "border border-black/15 bg-white text-site-text focus:border-brand-red"
                }`}
              />
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                required
                className={`w-full rounded-2xl px-4 py-3 outline-none transition ${
                  dark
                    ? "border border-white/20 bg-white/5 text-white focus:border-brand-orange"
                    : "border border-black/15 bg-white text-site-text focus:border-brand-red"
                }`}
              />
            )}
          </label>
        ))}
        <button
          className={`${buttonClassName ?? "button-brand"} w-full sm:w-auto`}
          disabled={status === "loading"}
          type="submit"
        >
          {status === "loading" ? "Submitting..." : buttonText}
        </button>
        {status === "success" ? (
          <p className="text-sm text-brand-blue">Thanks. We received your details.</p>
        ) : null}
        {status === "error" ? <p className="text-sm text-brand-red">{errorMessage}</p> : null}
      </form>
    </section>
  );
}
