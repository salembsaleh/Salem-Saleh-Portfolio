"use client";

import { motion } from "framer-motion";
import { siteConfig, education } from "@/content/siteData";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center hero-gradient">
      <div className="max-w-6xl mx-auto px-6 py-32">
        {/* Overline */}
        <motion.p
          className="text-sm font-medium tracking-widest uppercase mb-6"
          style={{ color: "var(--accent)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
        >
          {siteConfig.name.split(" ")[0]}
          <br />
          <span style={{ color: "var(--accent)" }}>
            {siteConfig.name.split(" ")[1]}
          </span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl max-w-xl leading-relaxed mb-4"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {siteConfig.description}
        </motion.p>

        {/* Education line */}
        <motion.p
          className="text-sm mb-10"
          style={{ color: "var(--text-tertiary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {education.school} &middot; {education.degree} &middot; {education.gpa} GPA &middot;{" "}
          {education.honors}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <MagneticButton href="#contact" variant="primary">
            Get in Touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </MagneticButton>
          <MagneticButton href={siteConfig.resume} variant="outline">
            Resume
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--text-tertiary)" }}
            >
              Scroll
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: "var(--text-tertiary)" }}
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
