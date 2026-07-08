import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import NameplateCard from "@/components/NameplateCard";
import ProductDetail from "@/components/ProductDetail";
import CTABand from "@/components/CTABand";
import Section from "@/components/Section";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { PRODUCTS, whatsappLink } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "Hydraulic Scissor Lift & Material Handling Equipment Manufacturer Jaipur | SR Engineering Works",
  description:
    "Hydraulic scissor lifts, goods lifts, electro platform trolleys and custom material handling equipment. 500 kg to 5000 kg capacity, 1 year warranty, pan-India delivery from Jaipur.",
};

const REGULAR_PRODUCTS = PRODUCTS.filter(
  (p) => p.slug !== "custom-fabrication-work"
);
const CUSTOM_PRODUCT = PRODUCTS.find(
  (p) => p.slug === "custom-fabrication-work"
)!;

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product Range"
        heading="Six Machines. One Standard."
        sub="Every machine below can be built to a custom capacity — tell us your load and we'll spec it."
      />

      <Section>
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <StaggerItem key={product.id}>
              <NameplateCard product={product} href={`#${product.slug}`} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <div className="divide-y divide-steel-600/50 border-t border-steel-600/50">
        {REGULAR_PRODUCTS.map((product, i) => (
          <ProductDetail
            key={product.id}
            product={product}
            reverse={i % 2 === 1}
          />
        ))}
      </div>

      <section
        id={CUSTOM_PRODUCT.slug}
        className="scroll-mt-20 border-t border-steel-600/50 bg-steel-800 py-16"
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Have a drawing? We&apos;ll build it.
          </h2>
          <p className="mt-4 font-body text-steel-300">
            {CUSTOM_PRODUCT.description}
          </p>
          <a
            href={whatsappLink(`Hi, I want details of ${CUSTOM_PRODUCT.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-sm bg-hydraulic px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-steel-950 transition-colors hover:bg-white"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <CTABand />
    </>
  );
}
