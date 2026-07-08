import Link from "next/link";
import { BUSINESS, PRODUCTS, whatsappLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-steel-600 bg-steel-950">
      <div className="caution-stripe h-2 w-full" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
            {BUSINESS.name}
          </h3>
          <p className="mt-3 font-body text-sm text-steel-300">
            {BUSINESS.tagline}
          </p>
          <p className="mt-4 font-body text-sm text-steel-300">
            {BUSINESS.address}
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-hydraulic">
            Products
          </h4>
          <ul className="mt-3 space-y-2">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/products#${p.slug}`}
                  className="font-body text-sm text-steel-300 transition-colors hover:text-white"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-hydraulic">
            Contact
          </h4>
          <ul className="mt-3 space-y-2">
            {BUSINESS.phones.map((phone) => (
              <li key={phone.tel}>
                <a
                  href={`tel:${phone.tel}`}
                  className="font-body text-sm text-steel-300 transition-colors hover:text-white"
                >
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(
              "Hi, I have an enquiry about material handling equipment"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-sm bg-hydraulic px-4 py-2 font-body text-sm font-semibold uppercase tracking-wide text-steel-950"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-steel-600/50 py-4 text-center font-body text-xs text-steel-300">
        © 2026 {BUSINESS.name}, Jaipur.
      </div>
    </footer>
  );
}
