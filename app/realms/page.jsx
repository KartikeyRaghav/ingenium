import Link  from 'next/link';
import Navigation from '@/components/Navigation';
import { Code, Palette, Music, Zap, Brain, Globe } from 'lucide-react';

const realms = [
  {
    id: 'tech',
    name: 'Tech Realm',
    icon: Code,
    description: 'Competitive programming, hackathons, and technological challenges',
    eventCount: 12,
    color: 'border-l-accent'
  },
  {
    id: 'design',
    name: 'Design Realm',
    icon: Palette,
    description: 'Visual arts, UI/UX design, and creative expression',
    eventCount: 8,
    color: 'border-l-primary'
  },
  {
    id: 'music',
    name: 'Music Realm',
    icon: Music,
    description: 'Performances, battles, and musical competitions',
    eventCount: 6,
    color: 'border-l-secondary'
  },
  {
    id: 'gaming',
    name: 'Gaming Realm',
    icon: Zap,
    description: 'E-sports tournaments and gaming championships',
    eventCount: 10,
    color: 'border-l-accent'
  },
  {
    id: 'quizzing',
    name: 'Knowledge Realm',
    icon: Brain,
    description: 'Quizzes, debates, and intellectual challenges',
    eventCount: 7,
    color: 'border-l-primary'
  },
  {
    id: 'culture',
    name: 'Culture Realm',
    icon: Globe,
    description: 'Dance, drama, and cultural performances',
    eventCount: 9,
    color: 'border-l-secondary'
  },
];

export default function RealmMapPage() {
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
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">
              Navigation
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter">
              Realm Map
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Navigate through different dimensions of Ingenium. Each realm hosts unique events and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Realm Grid - MODULAR LAYOUT */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="realm-grid">
            {realms.map((realm) => {
              const Icon = realm.icon;
              
              return (
                <Link
                  key={realm.id}
                  href={`/realm/${realm.id}`}
                  className="group block"
                >
                  <div 
                    className={`
                      h-full p-8 border-l-4 ${realm.color} border-t border-r border-b border-border 
                      bg-card/30 hover:bg-card/60 transition-all rounded-sm
                    `}
                  >
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-muted/50 rounded-sm">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {String(realm.eventCount).padStart(2, '0')} EVENTS
                      </div>
                    </div>

                    {/* Realm Info */}
                    <h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-accent transition-colors">
                      {realm.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {realm.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        Status
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-mono text-accent">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation Hint */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Select a realm to view events and details
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
