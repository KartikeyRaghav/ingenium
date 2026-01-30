"use client";

import { GlassPanel } from "./glass-panel";

export function ChronoCard({
  title,
  subtitle,
  description,
  year,
  image,
  children,
  className,
  badge,
  badgeVariant = "default",
}) {
  const badgeStyles = {
    live: "bg-green-500/20 text-green-400 border-green-500/50 animate-pulse",
    upcoming: "bg-primary/20 text-primary border-primary/50",
    completed: "bg-muted text-muted-foreground border-muted",
    default: "bg-accent/20 text-accent border-accent/50",
  };

  return (
    <GlassPanel
      glowOnHover
      className={`group relative overflow-hidden ${className}`}
    >
      {/* Scan line effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 h-0.5 bg-linear-to-r from-transparent via-primary/50 to-transparent animate-[scan-line_2s_linear_infinite]" />
      </div>

      {image && (
        <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent z-10" />
          <div className="w-full h-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Image</span>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            {year && (
              <span className="text-primary font-mono text-sm mb-1 block">
                {year}
              </span>
            )}
            <h3 className="text-lg font-sans tracking-wide text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          {badge && (
            <span
              className={`px-2 py-1 text-xs rounded-full border whitespace-nowrap ${badgeStyles[badgeVariant]}`}
            >
              {badge}
            </span>
          )}
        </div>

        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            {description}
          </p>
        )}

        {children}
      </div>
    </GlassPanel>
  );
}
