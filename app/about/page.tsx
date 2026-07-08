import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ProcessStrip from "@/components/ProcessStrip";
import CTABand from "@/components/CTABand";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

export const metadata: Metadata = {
  title: "About SR Engineering Works — Hydraulic Equipment Manufacturer, Jaipur",
  description:
    "SR Engineering Works is a Jaipur-based manufacturer of hydraulic scissor lifts and material handling equipment, led by Prop. Bhawar Singh. 10+ years, quality build, on-time delivery, pan-India support.",
};

const VALUES = [
  {
    title: "Quality Build",
    description:
      "Heavy duty MS structure and safety railing on every machine we ship.",
  },
  {
    title: "On-Time Delivery",
    description:
      "We commit to a dispatch date at order confirmation and hold it.",
  },
  {
    title: "After-Sales Support",
    description:
      "Installation and AMC support, pan-India, for the life of the machine.",
  },
];

const GALLERY = Array.from({ length: 7 }, (_, i) => ({
  src: `/work/${i + 1}.jpg`,
  alt: `Hydraulic scissor lift installed at client site, Jaipur — photo ${i + 1}`,
}));

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" heading="10+ Years Of Heavy Lifting." />

      <Section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative rounded-sm border border-steel-600 bg-steel-800 p-3">
          <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-steel-600" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-steel-600" />
          <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-steel-600" />
          <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-steel-600" />
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-steel-950">
            <Image
              src="/work/2.jpg"
              alt="SR Engineering Works fabrication shop floor, Jaipur"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="font-body text-steel-300">
            SR Engineering Works is a Jaipur-based manufacturer of hydraulic
            scissor lifts, goods lifts and material handling equipment, led
            by Prop. Bhawar Singh. For over 10 years, we&apos;ve built
            machines for factories, warehouses and dealers who can&apos;t
            afford downtime.
          </p>
          <p className="mt-4 font-body text-steel-300">
            Our mission is simple: quality product, on-time delivery, and
            the best after-sales service in the business. Every machine is
            fabricated in-house on heavy duty MS structure, tested before
            dispatch, and backed by installation and AMC support across
            India.
          </p>
        </div>
      </Section>

      <Section className="border-t border-steel-600/50">
        <div className="grid gap-8 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title}>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-hydraulic">
                {value.title}
              </h3>
              <p className="mt-2 font-body text-sm text-steel-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-steel-600/50">
        <SectionHeading eyebrow="Our Work" heading="On The Ground, On Site." />
        <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY.map((photo) => (
            <StaggerItem key={photo.src}>
              <div className="group relative aspect-square overflow-hidden border border-steel-600 transition-colors hover:border-hydraulic">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section className="border-t border-steel-600/50">
        <SectionHeading
          eyebrow="How We Work"
          heading="Our Process"
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
