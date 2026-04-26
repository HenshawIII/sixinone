"use client";

import { FormEvent, useState } from "react";

type SimpleFormProps = {
  title: string;
  helper: string;
  buttonText: string;
  fields?: Array<{ name: string; label: string; type?: string; multiline?: boolean }>;
  dark?: boolean;
};

export function SimpleForm({
  title,
  helper,
  buttonText,
  fields = [{ name: "email", label: "Email", type: "email" }],
  dark,
}: SimpleFormProps) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setDone(false);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
    setDone(true);
    setLoading(false);
    event.currentTarget.reset();
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
        <button className="button-brand w-full sm:w-auto" disabled={loading} type="submit">
          {loading ? "Submitting..." : buttonText}
        </button>
        {done ? <p className="text-sm text-brand-blue">Thanks. We received your details.</p> : null}
        {error ? <p className="text-sm text-brand-red">{error}</p> : null}
      </form>
    </section>
  );
}
