"use client";
import Navigation from "@/components/Navigation";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "Festival Coordinator",
    email: "arjun@ingenium.in",
    phone: "+91 98765 43210",
  },
  {
    name: "Sneha Gupta",
    role: "Technical Head",
    email: "sneha@ingenium.in",
    phone: "+91 98765 43211",
  },
  {
    name: "Rohan Kumar",
    role: "Cultural Secretary",
    email: "rohan@ingenium.in",
    phone: "+91 98765 43212",
  },
  {
    name: "Priya Sharma",
    role: "Sponsorship Head",
    email: "priya@ingenium.in",
    phone: "+91 98765 43213",
  },
  {
    name: "Karan Singh",
    role: "Logistics Head",
    email: "karan@ingenium.in",
    phone: "+91 98765 43214",
  },
  {
    name: "Ananya Rao",
    role: "Marketing Head",
    email: "ananya@ingenium.in",
    phone: "+91 98765 43215",
  },
];

const departments = [
  { name: "Technical", contact: "tech@ingenium.in" },
  { name: "Cultural", contact: "cultural@ingenium.in" },
  { name: "Sponsorship", contact: "sponsors@ingenium.in" },
  { name: "Media & PR", contact: "media@ingenium.in" },
  { name: "Hospitality", contact: "hospitality@ingenium.in" },
  { name: "Security", contact: "security@ingenium.in" },
];

export default function TeamContactPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />

      {/* Background Grid */}
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

      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">
              Contact
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter">
              Team & Contact
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Meet the organizing team behind Ingenium 2026. Reach out for any
              queries or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team - PROFESSIONAL PROFILE CARDS */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium tracking-tight mb-12">
            Core Team
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-animate="team-grid"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all"
              >
                {/* Profile Placeholder */}
                <div className="w-16 h-16 rounded-sm bg-muted/50 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-medium text-muted-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-medium tracking-tight mb-1">
                  {member.name}
                </h3>
                <div className="text-sm text-accent mb-4">{member.role}</div>

                {/* Contact Details */}
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="font-mono text-xs">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-mono text-xs">{member.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium tracking-tight mb-12">
            Department Contacts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all"
              >
                <div className="text-lg font-medium mb-2">{dept.name}</div>
                <a
                  href={`mailto:${dept.contact}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-mono">{dept.contact}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium tracking-tight mb-12">
            General Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            <div className="p-8 border border-border rounded-sm bg-card/30">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium tracking-tight mb-3">
                    Address
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Indian Institute of Technology Indore
                    <br />
                    Khandwa Road, Simrol
                    <br />
                    Indore, Madhya Pradesh 453552
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* General Contact */}
            <div className="p-8 border border-border rounded-sm bg-card/30">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium tracking-tight mb-3">
                    General Queries
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <a
                      href="mailto:info@ingenium.in"
                      className="block hover:text-accent transition-colors font-mono"
                    >
                      info@ingenium.in
                    </a>
                    <a
                      href="tel:+911234567890"
                      className="block hover:text-accent transition-colors font-mono"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="relative py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-8">
            Follow Us
          </h2>
          <div className="flex justify-center gap-6">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className="p-4 border border-border rounded-sm bg-card/30 hover:bg-card/60 hover:border-accent/50 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
