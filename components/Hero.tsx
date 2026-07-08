"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { BUSINESS } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const phone = BUSINESS.phones[0];

  return (
    <section className="relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-0"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="font-body text-sm font-semibold uppercase tracking-widest text-hydraulic"
          >
            Jaipur · Since 2014+
          </motion.p>

          <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            <span className="block">We Build Machines</span>
            <span className="block">
              That <span className="text-hydraulic">Lift</span> India.
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md font-body text-base text-steel-300 sm:text-lg"
          >
            Hydraulic scissor lifts, goods lifts & material handling
            equipment. 500 kg to 5000 kg. Built heavy, delivered on time,
            serviced for life.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-sm bg-hydraulic px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-steel-950 transition-colors hover:bg-white"
            >
              View Products
            </Link>
            <a
              href={`tel:${phone.tel}`}
              className="rounded-sm border border-steel-600 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-hydraulic hover:text-hydraulic"
            >
              Call {phone.display}
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          <div className="relative rounded-sm border border-steel-600 bg-steel-800 p-3">
            <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-steel-600" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-steel-600" />
            <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-steel-600" />
            <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-steel-600" />

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-steel-950">
              <Image
                src="/work/1.jpg"
                alt="Hydraulic scissor lift built by SR Engineering Works, Jaipur"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 border-t border-steel-600 pt-3 font-body text-xs uppercase tracking-widest text-steel-300">
              <span>Cap 5000 KG</span>
              <span className="text-steel-600">·</span>
              <span>MS Structure</span>
              <span className="text-steel-600">·</span>
              <span>ISI Grade</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="caution-stripe h-2 w-full" />
    </section>
  );
}
