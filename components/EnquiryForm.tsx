"use client";

import { useState } from "react";
import { PRODUCTS, whatsappLink } from "@/lib/data";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState(PRODUCTS[0].name);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi, I'm ${name || "a visitor to your website"}.`,
      `I'm interested in: ${product}.`,
      message && message.trim(),
    ].filter(Boolean);
    window.open(whatsappLink(lines.join(" ")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="font-body text-xs font-semibold uppercase tracking-widest text-steel-300"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-2 w-full rounded-sm border border-steel-600 bg-steel-800 px-4 py-3 font-body text-white placeholder:text-steel-300 focus:border-hydraulic focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="product"
          className="font-body text-xs font-semibold uppercase tracking-widest text-steel-300"
        >
          Product
        </label>
        <select
          id="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="mt-2 w-full rounded-sm border border-steel-600 bg-steel-800 px-4 py-3 font-body text-white focus:border-hydraulic focus:outline-none"
        >
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-body text-xs font-semibold uppercase tracking-widest text-steel-300"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Tell us about your requirement — load, quantity, timeline."
          className="mt-2 w-full resize-none rounded-sm border border-steel-600 bg-steel-800 px-4 py-3 font-body text-white placeholder:text-steel-300 focus:border-hydraulic focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-hydraulic px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-steel-950 transition-colors hover:bg-white"
      >
        Send via WhatsApp
      </button>
      <p className="text-center font-body text-xs text-steel-300">
        Opens WhatsApp with your message ready to send.
      </p>
    </form>
  );
}
