"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/siteData";
import SectionHeading from "@/components/SectionHeading";

function SkillGroup({
  title,
  items,
  delayOffset,
}: {
  title: string;
  items: string[];
  delayOffset: number;
}) {
  return (
    <div>
      <motion.h3
        className="text-heading text-lg mb-4"
        style={{ color: "var(--text-primary)" }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, delay: delayOffset }}
      >
        {title}
      </motion.h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-default"
            style={{
              backgroundColor: "var(--bg-card)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-color)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: delayOffset + i * 0.03 }}
            whileHover={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-section-sm md:py-section">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Skills" title="What I Use" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SkillGroup
            title="Languages"
            items={skills.languages}
            delayOffset={0}
          />
          <SkillGroup
            title="Technologies"
            items={skills.technologies}
            delayOffset={0.1}
          />
        </div>
      </div>
    </section>
  );
}
