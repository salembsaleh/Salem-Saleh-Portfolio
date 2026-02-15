"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const baseStyles =
    variant === "primary"
      ? {
          backgroundColor: hovered ? "var(--accent-hover)" : "var(--accent)",
          color: "var(--bg-primary)",
          border: "1px solid transparent",
        }
      : {
          backgroundColor: "transparent",
          color: hovered ? "var(--accent)" : "var(--text-primary)",
          border: `1px solid ${hovered ? "var(--accent)" : "var(--border-color)"}`,
        };

  const inner = (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
        ...baseStyles,
      }}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return inner;
}
