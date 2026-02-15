"use client";

import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { leadership } from "@/content/siteData";
import SectionHeading from "@/components/SectionHeading";

export default function Leadership() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section id="leadership" className="py-section-sm md:py-section">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Leadership" title="Beyond Code" />

        <motion.div
          ref={cardRef}
          className="card-shimmer rounded-xl p-8 max-w-2xl transition-all duration-300"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-color)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
          onMouseMove={handleMouseMove}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--border-hover)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 30px -8px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-color)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
            style={{
              backgroundColor: "var(--accent-subtle)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--accent)" }}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <h3
            className="text-heading text-2xl mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            {leadership.role}
          </h3>
          <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>
            {leadership.organization}
          </p>
          <p className="text-xs mb-5" style={{ color: "var(--text-tertiary)" }}>
            {leadership.location} &middot; {leadership.dates}
          </p>

          <ul className="space-y-2">
            {leadership.bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-sm leading-relaxed pl-4 relative"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
