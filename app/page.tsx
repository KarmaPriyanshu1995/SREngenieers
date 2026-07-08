import Link from "next/link";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProcessStrip from "@/components/ProcessStrip";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import NameplateCard from "@/components/NameplateCard";
import CTABand from "@/components/CTABand";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { PRODUCTS, FEATURES } from "@/lib/data";

const FEATURED_SLUGS = [
  "hydraulic-scissor-lift",
  "hydraulic-goods-lift",
  "electro-platform-trolley",
];
const FEATURED = PRODUCTS.filter((p) => FEATURED_SLUGS.includes(p.slug));

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <Section>
        <SectionHeading eyebrow="Our Machines" heading="Built To Handle The Load" />
        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((product) => (
            <StaggerItem key={product.id}>
              <NameplateCard product={product} href={`/products#${product.slug}`} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="font-body text-sm font-semibold uppercase tracking-wide text-hydraulic transition-colors hover:text-white"
          >
            View all 6 products →
          </Link>
        </div>
      </Section>

      <Section className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading eyebrow="Why SR Engineering" heading="Built like it's ours." />
        </div>
        <div className="space-y-6">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <span className="mt-1.5 h-3 w-3 shrink-0 bg-hydraulic" />
              <div>
                <h4 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                  {feature.title}
                </h4>
                <p className="mt-1 font-body text-sm text-steel-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How We Work"
          heading="Four Steps. No Surprises."
          className="text-center"
        />
        <div className="mt-10">
          <ProcessStrip />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
