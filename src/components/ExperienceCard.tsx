"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/content/siteData";
import Pill from "./Pill";
import { useRef, type MouseEvent } from "react";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isActive: boolean;
}

export default function ExperienceCard({
  experience,
  index,
  isActive,
}: ExperienceCardProps) {
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
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0, 1],
      }}
    >
      {/* Timeline dot */}
      <div
        className={`timeline-dot absolute -left-[5px] top-2 ${isActive ? "active" : ""}`}
      />

      {/* Card */}
      <div
        ref={cardRef}
        className="card-shimmer rounded-xl p-6 transition-all duration-300 group"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-color)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          target.style.borderColor = "var(--border-hover)";
          target.style.transform = "translateY(-2px)";
          target.style.boxShadow =
            "0 8px 30px -8px rgba(0,0,0,0.08)";
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          target.style.borderColor = "var(--border-color)";
          target.style.transform = "translateY(0)";
          target.style.boxShadow = "none";
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3
              className="text-heading text-xl mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {experience.role}
            </h3>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--accent)" }}
            >
              {experience.company}
              {experience.team && (
                <span style={{ color: "var(--text-tertiary)" }}>
                  {" "}
                  &middot; {experience.team}
                </span>
              )}
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {experience.dates}
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--text-tertiary)" }}
            >
              {experience.location}
            </p>
          </div>
        </div>

        {/* Current badge */}
        {experience.current && (
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full mb-3"
            style={{
              backgroundColor: "var(--accent-subtle)",
              color: "var(--accent)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Current
          </span>
        )}

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {experience.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed pl-4 relative"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--border-hover)" }}
              />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Tech pills */}
        {experience.tech && experience.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((t) => (
              <Pill key={t} label={t} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
