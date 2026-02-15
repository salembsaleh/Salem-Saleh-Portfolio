"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/content/siteData";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-section-sm md:py-section">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Experience" title="Where I've Built" />

        <div ref={containerRef} className="relative ml-1">
          {/* Timeline track */}
          <div className="timeline-line" />
          <motion.div
            className="timeline-line-fill"
            style={{ height: lineHeight }}
          />

          {/* Cards */}
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={i}
              isActive={!!exp.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
