import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import EnquiryForm from "@/components/EnquiryForm";
import { BUSINESS, whatsappLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact SR Engineering Works — Hydraulic Equipment Manufacturer, Jaipur",
  description:
    "Call, WhatsApp or visit SR Engineering Works in Jaipur for hydraulic scissor lifts and material handling equipment. 60, Sana Dungar, Jaipur, Rajasthan 302012.",
};

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.1 4 4.2-1.1A10 10 0 1 0 12 2zm5.6 14.2c-.2.6-1.4 1.2-1.9 1.2-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.2.1.6-.1 1.2z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" heading="Talk To The Manufacturer. Directly." />

      <Section className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative rounded-sm border border-steel-600 bg-steel-800 p-6 sm:p-8">
          <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-steel-600" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-steel-600" />
          <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-steel-600" />
          <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-steel-600" />

          <dl className="space-y-6 font-body">
            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-300">
                Prop
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">
                {BUSINESS.prop}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-300">
                Address
              </dt>
              <dd className="mt-1 text-white">{BUSINESS.address}</dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-300">
                Phones
              </dt>
              <dd className="mt-2 space-y-2">
                {BUSINESS.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-hydraulic"
                  >
                    <PhoneIcon />
                    {phone.display}
                  </a>
                ))}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-widest text-steel-300">
                Hours
              </dt>
              <dd className="mt-1 text-white">{BUSINESS.hours}</dd>
            </div>
          </dl>

          <a
            href={whatsappLink(
              "Hi, I have an enquiry about material handling equipment"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-600 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-emerald-500"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <EnquiryForm />
        </div>
      </Section>

      <Section className="border-t border-steel-600/50">
        <div className="group relative aspect-video w-full overflow-hidden rounded-sm border border-steel-600">
          <iframe
            src="https://www.google.com/maps?q=Sana+Dungar+Jaipur+302012&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SR Engineering Works location — Sana Dungar, Jaipur"
            className="absolute inset-0 h-full w-full grayscale transition-[filter] duration-500 group-hover:grayscale-0"
          />
        </div>
      </Section>

      <CTABand heading="Prefer a call? We pick up." />
    </>
  );
}
