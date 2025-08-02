'use client';
import { FormEvent, useEffect, useRef, useState } from 'react';

type FormOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function FormOverlay({ open, onClose }: FormOverlayProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);

  // Close with ESC, out click and lock scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

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
      const res = await fetch("https://marcos-landi-api.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Unexpected error");
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="flex flex-col items-start justify-center bg-[#625b49bb] text-white rounded-lg p-5 gap-5 relative w-full max-w-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 rounded-full p-2 hover:bg-white/10"
        >
          ✕
        </button>

        {/* Title */}
        <p className="text-3xl">
          <span className="custom-serif-bold">Get in</span><span className="custom-serif-italic pl-0.75">touch!</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <input
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
            className="w-full border-b-2 border-white/20 bg-transparent px-3 py-2 placeholder-white/60 outline-none focus:border-white/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Your e-mail"
            autoComplete="email"
            required
            className="w-full border-b-2 border-white/20 bg-transparent px-3 py-2 placeholder-white/60 outline-none focus:border-white/50"
          />
          <input
            name="phone"
            placeholder="Your phone number (optional)"
            autoComplete="tel"
            className="w-full border-b-2 border-white/20 bg-transparent px-3 py-2 placeholder-white/60 outline-none focus:border-white/50"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            required
            className="w-full border-b-2 border-white/20 bg-transparent px-3 py-2 placeholder-white/60 outline-none focus:border-white/50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 font-medium hover:bg-white/20 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "send message"}
          </button>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-sm text-green-400">message sent!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Error: {errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
