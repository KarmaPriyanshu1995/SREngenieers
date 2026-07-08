import { BUSINESS, whatsappLink } from "@/lib/data";

export default function CTABand({
  heading = "Need a custom lifting solution?",
}: {
  heading?: string;
}) {
  const phone = BUSINESS.phones[0];

  return (
    <div className="w-full bg-steel-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          {heading}
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${phone.tel}`}
            className="rounded-sm border border-steel-600 px-5 py-3 font-body text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-hydraulic hover:text-hydraulic"
          >
            Call {phone.display}
          </a>
          <a
            href={whatsappLink(
              "Hi, I have an enquiry about material handling equipment"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-hydraulic px-5 py-3 font-body text-sm font-semibold uppercase tracking-wide text-steel-950 transition-colors hover:bg-white"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
