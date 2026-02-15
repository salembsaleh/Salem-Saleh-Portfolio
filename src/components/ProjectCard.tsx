"use client";

import { useState, useRef, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/content/siteData";
import Pill from "./Pill";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0, 1],
      }}
    >
      <div
        ref={cardRef}
        className="card-shimmer rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: "var(--bg-card)",
          border: `1px solid ${expanded ? "var(--accent)" : "var(--border-color)"}`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => {
          if (!expanded) {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 30px -8px rgba(0,0,0,0.08)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded(!expanded);
          }
        }}
      >
        <div className="p-6">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3
                className="text-heading text-xl mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h3>
              {project.subtitle && (
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Expand icon */}
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 flex-shrink-0"
              style={{ color: "var(--text-tertiary)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </motion.div>
          </div>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Pill key={t} label={t} variant="accent" />
            ))}
          </div>

          {/* Expandable details */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.3, ease: [0.25, 0.1, 0, 1] },
                  opacity: { duration: 0.2, delay: 0.1 },
                }}
                className="overflow-hidden"
              >
                <div
                  className="mt-5 pt-5"
                  style={{
                    borderTop: "1px solid var(--border-color)",
                  }}
                >
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="text-sm leading-relaxed pl-4 relative"
                        style={{ color: "var(--text-secondary)" }}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.15 }}
                      >
                        <span
                          className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: "var(--accent)",
                          }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Links */}
                  {(project.link || project.github) && (
                    <div className="flex gap-4 mt-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-sm font-medium"
                          style={{ color: "var(--accent)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project &rarr;
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-sm font-medium"
                          style={{ color: "var(--text-secondary)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub &rarr;
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
