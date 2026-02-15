"use client";

interface PillProps {
  label: string;
  variant?: "default" | "accent";
}

export default function Pill({ label, variant = "default" }: PillProps) {
  return (
    <span
      className="inline-block px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200"
      style={{
        backgroundColor:
          variant === "accent" ? "var(--accent-subtle)" : "var(--bg-card)",
        color:
          variant === "accent" ? "var(--accent)" : "var(--text-secondary)",
        border: `1px solid ${variant === "accent" ? "var(--accent)" : "var(--border-color)"}`,
      }}
    >
      {label}
    </span>
  );
}
