"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/content/siteData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(12px) saturate(1.2)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-color)"
            : "1px solid transparent",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-heading text-lg"
            style={{ color: "var(--text-primary)" }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {siteConfig.name.split(" ")[0]}
            <span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-9 h-9 flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <motion.span
                  className="block h-[1.5px] rounded-full"
                  style={{ backgroundColor: "var(--text-primary)" }}
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 6.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-[1.5px] rounded-full"
                  style={{ backgroundColor: "var(--text-primary)" }}
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block h-[1.5px] rounded-full"
                  style={{ backgroundColor: "var(--text-primary)" }}
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -6.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-heading text-3xl"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
