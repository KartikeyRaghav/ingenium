import Link from "next/link";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Calendar, Users, Trophy } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data for demonstration
const realmData = {
  tech: {
    name: "Tech Realm",
    description: "Dive into the world of code, algorithms, and innovation",
    events: [
      {
        id: "hackathon",
        name: "HackIgenium",
        type: "Hackathon",
        team: "2-4",
        prize: "₹50,000",
        date: "Mar 15",
      },
      {
        id: "coding",
        name: "Code Sprint",
        type: "Competition",
        team: "Individual",
        prize: "₹25,000",
        date: "Mar 15",
      },
      {
        id: "ai-challenge",
        name: "AI Challenge",
        type: "Competition",
        team: "1-3",
        prize: "₹30,000",
        date: "Mar 16",
      },
      {
        id: "web-dev",
        name: "Web Dev Wars",
        type: "Workshop",
        team: "2",
        prize: "₹15,000",
        date: "Mar 16",
      },
    ],
  },
  design: {
    name: "Design Realm",
    description: "Express creativity through visual arts and design",
    events: [
      {
        id: "ui-battle",
        name: "UI Battle",
        type: "Competition",
        team: "Individual",
        prize: "₹20,000",
        date: "Mar 15",
      },
      {
        id: "poster",
        name: "Poster Making",
        type: "Competition",
        team: "Individual",
        prize: "₹10,000",
        date: "Mar 15",
      },
      {
        id: "photography",
        name: "Photo Hunt",
        type: "Competition",
        team: "1-2",
        prize: "₹15,000",
        date: "Mar 16",
      },
    ],
  },
  music: {
    name: "Music Realm",
    description: "Rhythm, melody, and harmony unite",
    events: [
      {
        id: "battle",
        name: "Battle of Bands",
        type: "Performance",
        team: "4-6",
        prize: "₹40,000",
        date: "Mar 16",
      },
      {
        id: "solo",
        name: "Solo Performance",
        type: "Performance",
        team: "Individual",
        prize: "₹15,000",
        date: "Mar 15",
      },
    ],
  },
  gaming: {
    name: "Gaming Realm",
    description: "Compete in e-sports tournaments",
    events: [
      {
        id: "valorant",
        name: "Valorant Tournament",
        type: "E-sports",
        team: "5",
        prize: "₹60,000",
        date: "Mar 15-16",
      },
      {
        id: "chess",
        name: "Chess Championship",
        type: "Strategy",
        team: "Individual",
        prize: "₹10,000",
        date: "Mar 15",
      },
    ],
  },
  quizzing: {
    name: "Knowledge Realm",
    description: "Test your intellect and knowledge",
    events: [
      {
        id: "general-quiz",
        name: "General Quiz",
        type: "Quiz",
        team: "2-3",
        prize: "₹20,000",
        date: "Mar 16",
      },
      {
        id: "debate",
        name: "Debate Competition",
        type: "Speaking",
        team: "2",
        prize: "₹15,000",
        date: "Mar 16",
      },
    ],
  },
  culture: {
    name: "Culture Realm",
    description: "Celebrate diversity through cultural performances",
    events: [
      {
        id: "dance",
        name: "Dance Competition",
        type: "Performance",
        team: "8-12",
        prize: "₹50,000",
        date: "Mar 16",
      },
      {
        id: "drama",
        name: "Drama Competition",
        type: "Performance",
        team: "6-10",
        prize: "₹40,000",
        date: "Mar 16",
      },
    ],
  },
};

export default function RealmDetailPage() {
  const { realmId } = useParams();
  const realm = realmData[realmId || "tech"];

  if (!realm) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Realm not found</div>
      </div>
    );
  }

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

      {/* Page Header - DASHBOARD STYLE */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link
            to="/realms"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="uppercase tracking-wider">Back to Realms</span>
          </Link>

          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">
              Realm / {realmId}
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter">
              {realm.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {realm.description}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="p-6 border border-border rounded-sm bg-card/30">
              <div className="text-3xl font-medium mb-1">
                {realm.events.length}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Total Events
              </div>
            </div>
            <div className="p-6 border border-border rounded-sm bg-card/30">
              <div className="text-3xl font-medium mb-1">3</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Days
              </div>
            </div>
            <div className="p-6 border border-border rounded-sm bg-card/30">
              <div className="text-3xl font-medium mb-1">
                ₹
                {realm.events
                  .reduce(
                    (sum, e) => sum + parseInt(e.prize.replace(/[₹,]/g, "")),
                    0,
                  )
                  .toLocaleString("en-IN")}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Prize Pool
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events List - MISSION BRIEFING CARDS */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium tracking-tight mb-8">Events</h2>

          <div className="space-y-4" data-animate="events-list">
            {realm.events.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
              >
                <div className="p-6 border border-border rounded-sm bg-card/30 hover:bg-card/60 hover:border-accent/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Event Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-medium tracking-tight group-hover:text-accent transition-colors">
                          {event.name}
                        </h3>
                        <span className="px-2 py-1 text-xs bg-muted rounded-sm uppercase tracking-wider">
                          {event.type}
                        </span>
                      </div>
                    </div>

                    {/* Event Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="font-mono">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="font-mono">{event.team}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent">
                        <Trophy className="h-4 w-4" />
                        <span className="font-mono font-medium">
                          {event.prize}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
