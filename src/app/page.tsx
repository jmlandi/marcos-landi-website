"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phoneNumber: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(
        "https://marcos-landi-api.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Unexpected error");
      }
      setStatus("error");
    }
  }

  return (
    <main className="flex flex-col items-center justify-start px-6 py-5 sm:py-5 space-y-12">
      {/* ------------- Hero ------------- */}
      <section className="max-w-5xl text-center space-y-6">
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight drop-shadow md:px-6">
          Marcos <span className="text-indigo-400">Landi</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-200/90 mx-auto max-w-3xl px-3">
          I’m a Full-Stack & Data Engineer with 7+ years of experience across fintech, manufacturing/industrial, franchise networks, and e-commerce. I grew from “the marketing guy who hacked WordPress blogs” into a builder obsessed with scalable software architectures, data pipelines, growth analytics, AI automation, and solving messy business problems fast.
        </p>
        {/* ---- Social Links ---- */}
        <div className="flex justify-center flex-wrap flex-col sm:flex-row gap-8 pt-2">
          <a
            href="https://www.behance.net/joaomarcoslandi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-indigo-400 transition bg-white/10 backdrop-blur-[40px] rounded-full px-4 py-2 shadow-lg ring-1 ring-white/20"
          >
            Behance
          </a>
          <a
            href="https://www.linkedin.com/in/joaomarcoslandi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-indigo-400 transition bg-white/10 backdrop-blur-[40px] rounded-full px-4 py-2 shadow-lg ring-1 ring-white/20"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-indigo-400 transition bg-white/10 backdrop-blur-[40px] rounded-full px-4 py-2 shadow-lg ring-1 ring-white/20"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@marcoslandi.com"
            className="hover:bg-indigo-400 transition bg-white/10 backdrop-blur-[40px] rounded-full px-4 py-2 shadow-lg ring-1 ring-white/20"
          >
            Email
          </a>
        </div>
      </section>

      {/* ------------- Contact Card (Liquid Glass) ------------- */}
      <section className="w-full max-w-2xl">
        <div className="rounded-3xl bg-white/10 backdrop-blur-[40px] p-8 sm:p-12 shadow-2xl ring-1 ring-white/20">
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

          {status === "success" && (
            <p className="mb-6 text-green-300">
              ✅ Your message was sent! I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="mb-6 text-red-300">
              ❌ Something went wrong: {errorMessage}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <input
              name="name"
              placeholder="Name"
              required
              className="col-span-1 sm:col-span-2 bg-transparent border border-white/30 rounded-xl p-3 focus:border-indigo-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-transparent border border-white/30 rounded-xl p-3 focus:border-indigo-400 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="bg-transparent border border-white/30 rounded-xl p-3 focus:border-indigo-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              className="col-span-1 sm:col-span-2 bg-transparent border border-white/30 rounded-xl p-3 focus:border-indigo-400 outline-none resize-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="hover:cursor-pointer col-span-1 sm:col-span-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors rounded-xl py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}