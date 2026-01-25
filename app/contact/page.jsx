"use client";

import Link from "next/link";
import {
  PageTransitionWrapper,
  StarField,
  GlassPanel,
  GlowButton,
} from "@/components/chronoverse";

const coreTeam = [
  {
    name: "Dr. Priya Sharma",
    role: "Faculty Advisor",
    department: "Computer Science",
  },
  {
    name: "Prof. Rajesh Kumar",
    role: "Technical Mentor",
    department: "Electronics",
  },
  {
    name: "Dr. Anita Desai",
    role: "Cultural Coordinator",
    department: "Humanities",
  },
];

const coordinators = [
  {
    name: "Arjun Mehta",
    role: "Overall Coordinator",
    contact: "arjun@ingenium.in",
  },
  { name: "Sneha Patel", role: "Technical Head", contact: "sneha@ingenium.in" },
  {
    name: "Vikram Singh",
    role: "Cultural Head",
    contact: "vikram@ingenium.in",
  },
  { name: "Priya Nair", role: "Marketing Lead", contact: "priya@ingenium.in" },
  {
    name: "Rohit Sharma",
    role: "Sponsorship Head",
    contact: "rohit@ingenium.in",
  },
  {
    name: "Ananya Gupta",
    role: "Operations Lead",
    contact: "ananya@ingenium.in",
  },
];

const socialLinks = [
  {
    name: "Twitter",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "YouTube",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-background overflow-hidden">
        <StarField />
        <div className="absolute inset-0 chrono-grid" />

        {/* Emerald/Teal gradient for Contact theme */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1)_0%,transparent_50%)]" />

        <div className="relative z-10 px-4 py-12 md:py-20">
          {/* Back Navigation */}
          <div className="max-w-7xl mx-auto mb-8">
            <Link href="/?state=navigation">
              <GlowButton variant="secondary" size="sm">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Chronoverse
                </span>
              </GlowButton>
            </Link>
          </div>

          {/* Hero Section */}
          <header className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-1 rounded-full text-sm tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Contact
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-wider mb-4">
              <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Transmission Hub
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with us across the temporal plane. Our team is ready to
              assist you with any queries about INGENIUM.
            </p>

            {/* Signal animation */}
            <div className="mt-8 flex items-center justify-center">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-emerald-500 animate-signal-pulse" />
              </div>
              <div className="ml-4 h-0.5 w-32 bg-linear-to-r from-emerald-500 to-transparent animate-flicker" />
            </div>
          </header>

          {/* Core Team Section */}
          <section className="max-w-7xl mx-auto mb-16">
            <h2 className="text-2xl font-sans tracking-wider text-foreground mb-8 text-center">
              Core Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreTeam.map((member, index) => (
                <GlassPanel
                  key={index}
                  glowOnHover
                  className="text-center group"
                >
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-linear-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
                    <span className="text-3xl font-sans text-emerald-400">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-sans tracking-wide text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-emerald-400 text-sm mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm">
                    {member.department}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* Coordinators Section */}
          <section className="max-w-7xl mx-auto mb-16">
            <h2 className="text-2xl font-sans tracking-wider text-foreground mb-8 text-center">
              Coordinators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coordinators.map((coordinator, index) => (
                <GlassPanel
                  key={index}
                  className="group hover:glow-border transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <span className="text-lg font-sans text-emerald-400">
                        {coordinator.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans tracking-wide text-foreground truncate">
                        {coordinator.name}
                      </h3>
                      <p className="text-emerald-400 text-sm mb-1">
                        {coordinator.role}
                      </p>
                      <a
                        href={`mailto:${coordinator.contact}`}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="truncate">{coordinator.contact}</span>
                      </a>
                    </div>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* Contact Details & Social */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <GlassPanel className="space-y-6">
                <h3 className="text-xl font-sans tracking-wider text-foreground mb-6">
                  Contact Details
                </h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:contact@ingenium.in"
                      className="text-foreground hover:text-emerald-400 transition-colors"
                    >
                      contact@ingenium.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href="tel:+911234567890"
                      className="text-foreground hover:text-emerald-400 transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="text-foreground">
                      IIT Indore, Simrol
                      <br />
                      Indore, MP 453552
                    </p>
                  </div>
                </div>
              </GlassPanel>

              {/* Social Links */}
              <GlassPanel>
                <h3 className="text-xl font-sans tracking-wider text-foreground mb-6">
                  Connect With Us
                </h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for the latest updates,
                  behind-the-scenes content, and announcements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover:bg-emerald-500/10 hover:border-emerald-500/30 border border-transparent transition-all group"
                    >
                      <span className="text-muted-foreground group-hover:text-emerald-400 transition-colors">
                        {social.icon}
                      </span>
                      <span className="font-sans tracking-wide text-foreground">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="max-w-3xl mx-auto text-center">
            <GlassPanel className="py-10">
              <h2 className="text-2xl font-sans tracking-wider text-foreground mb-4">
                Stay Connected
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive transmission updates directly to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-foreground placeholder:text-muted-foreground"
                />
                <GlowButton variant="accent">Subscribe</GlowButton>
              </div>
            </GlassPanel>
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
