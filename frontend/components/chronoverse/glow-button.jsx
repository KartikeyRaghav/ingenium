"use client";

export function GlowButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) {
  const variants = {
    primary:
      "bg-primary/20 border-primary/50 text-primary hover:bg-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    secondary:
      "bg-secondary border-border text-foreground hover:bg-secondary/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    accent:
      "bg-accent/20 border-accent/50 text-accent hover:bg-accent/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`relative rounded-lg border font-sans tracking-wider uppercase transition-all duration-300 backdrop-blur-sm ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
