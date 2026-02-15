"use client";

import { siteConfig } from "@/content/siteData";

export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm"
            style={{ color: "var(--text-tertiary)" }}
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm"
            style={{ color: "var(--text-tertiary)" }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="link-underline text-sm"
            style={{ color: "var(--text-tertiary)" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
