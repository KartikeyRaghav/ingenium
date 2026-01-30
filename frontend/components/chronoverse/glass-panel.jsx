"use client";

export function GlassPanel({ children, className, glowOnHover = false }) {
  return (
    <div
      className={`glass-panel rounded-xl p-6 transition-all duration-300 ${glowOnHover && "hover:glow-border hover:scale-[1.02]"} ${className}`}
    >
      {children}
    </div>
  );
}
