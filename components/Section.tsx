"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}
