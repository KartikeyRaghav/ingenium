"use client";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function EventDetailPage() {
  const { eventId } = useParams();

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

      {/* Event Header - MISSION BRIEFING LAYOUT */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/realms"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="uppercase tracking-wider">Back to Realms</span>
          </Link>

          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">
              Event / {eventId}
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter">
              HackIgenium
            </h1>
            <p className="text-xl text-muted-foreground">
              24-hour hackathon to build innovative solutions for real-world
              problems
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Grid - BOXED PANELS */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="p-6 border border-border rounded-sm bg-card/30">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Date & Time
                </span>
              </div>
              <div className="text-lg font-medium">March 15, 2026</div>
              <div className="text-sm text-muted-foreground">
                10:00 AM - March 16, 10:00 AM
              </div>
            </div>

            <div className="p-6 border border-border rounded-sm bg-card/30">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Venue
                </span>
              </div>
              <div className="text-lg font-medium">Lecture Hall Complex</div>
              <div className="text-sm text-muted-foreground">
                IIT Indore Campus
              </div>
            </div>

            <div className="p-6 border border-border rounded-sm bg-card/30">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Team Size
                </span>
              </div>
              <div className="text-lg font-medium">2-4 Members</div>
              <div className="text-sm text-muted-foreground">Per Team</div>
            </div>

            <div className="p-6 border border-border rounded-sm bg-card/30">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="h-5 w-5 text-accent" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Prize Pool
                </span>
              </div>
              <div className="text-lg font-medium">₹50,000</div>
              <div className="text-sm text-muted-foreground">
                Winner + Runner-up
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-8">
            <div className="p-8 border border-border rounded-sm bg-card/30">
              <h2 className="text-2xl font-medium tracking-tight mb-4">
                About Event
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  HackIgenium is a 24-hour coding marathon where teams compete
                  to build innovative solutions addressing real-world
                  challenges. Participants will have access to mentors,
                  workshops, and resources throughout the event.
                </p>
                <p>
                  This hackathon focuses on creating impactful projects in
                  domains such as healthcare, education, sustainability, and
                  social welfare.
                </p>
              </div>
            </div>

            {/* Rules & Guidelines */}
            <div className="p-8 border border-border rounded-sm bg-card/30">
              <h2 className="text-2xl font-medium tracking-tight mb-6">
                Rules & Guidelines
              </h2>
              <div className="space-y-3">
                {[
                  "Teams must consist of 2-4 members",
                  "All team members must be registered college students",
                  "Projects must be original work created during the hackathon",
                  "Use of pre-existing code libraries is allowed",
                  "Final submissions must include source code and documentation",
                  "Judging criteria: Innovation, Technical Complexity, Impact, Presentation",
                ].map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 px-8 py-4 bg-accent text-accent-foreground rounded-sm hover:bg-accent/90 transition-all">
                <span className="uppercase tracking-wider text-sm font-medium">
                  Register Now
                </span>
              </button>
              <button className="px-8 py-4 border border-border text-foreground rounded-sm hover:bg-muted transition-all">
                <span className="uppercase tracking-wider text-sm font-medium">
                  Download Rulebook
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-medium tracking-tight mb-6">
            Event Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Rahul Sharma",
                role: "Technical Lead",
                contact: "+91 98765 43210",
              },
              {
                name: "Priya Patel",
                role: "Logistics Head",
                contact: "+91 98765 43211",
              },
            ].map((coordinator, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-sm bg-card/30"
              >
                <div className="font-medium mb-1">{coordinator.name}</div>
                <div className="text-sm text-muted-foreground mb-2">
                  {coordinator.role}
                </div>
                <div className="text-sm font-mono text-accent">
                  {coordinator.contact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
