"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
    >
      <span
        className="text-sm font-medium tracking-widest uppercase mb-3 block"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </span>
      <h2
        className="text-display text-4xl sm:text-5xl"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <div
        className="mt-4 h-[2px] w-16"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </motion.div>
  );
}
