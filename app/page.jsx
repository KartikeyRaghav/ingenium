import Link from "next/link";
import { ChevronRight, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(90, 107, 130, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(90, 107, 130, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero Section - MINIMAL & RESTRAINED */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8" data-animate="hero-content">
            {/* Subtitle */}
            <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              IIT Indore Presents
            </div>

            {/* Main Title */}
            <h1 className="text-7xl md:text-9xl font-medium tracking-tighter">
              INGENIUM
            </h1>

            {/* Tagline */}
            <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Techno-Cultural Festival 2026
            </div>

            {/* Event Details - Boxed Layout */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
              <div className="flex items-center gap-3 px-6 py-3 border border-border rounded-sm bg-card/50">
                <Calendar className="h-5 w-5 text-accent" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Date
                  </div>
                  <div className="text-sm font-medium">March 14-16, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 border border-border rounded-sm bg-card/50">
                <MapPin className="h-5 w-5 text-accent" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Location
                  </div>
                  <div className="text-sm font-medium">IIT Indore Campus</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/realms"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all"
              >
                <span className="uppercase tracking-wider text-sm font-medium">
                  Explore Realms
                </span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/countdown"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded-sm hover:bg-muted transition-all"
              >
                <span className="uppercase tracking-wider text-sm font-medium">
                  View Countdown
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Dashboard Style */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-animate="stats-grid"
          >
            {[
              { label: "Events", value: "10+" },
              { label: "Participants", value: "1K+" },
              { label: "Prize Pool", value: "₹5L+" },
              { label: "Days", value: "03" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all"
              >
                <div className="text-4xl md:text-5xl font-medium tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Section - CHRONOVERSE */}
      <section className="relative py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">
            Festival Theme
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">
            Parallel Realms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Journey through interconnected dimensions of technology, creativity,
            and culture. Experience events across multiple realms, each offering
            unique challenges and opportunities.
          </p>
          <div className="pt-6">
            <Link
              href="/realms"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <span className="uppercase tracking-wider text-sm">
                Discover Realms
              </span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
