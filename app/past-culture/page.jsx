import Navigation from '@/components/Navigation';
import { Calendar, Users, Award } from 'lucide-react';

const pastEditions = [
  {
    year: '2025',
    theme: 'Digital Frontiers',
    attendance: '8000+',
    events: '45',
    highlights: [
      'Record-breaking hackathon with 200+ teams',
      'Performances by renowned artists',
      'International participation from 15+ countries',
    ]
  },
  {
    year: '2024',
    theme: 'Tech Renaissance',
    attendance: '6500+',
    events: '40',
    highlights: [
      'First edition of AI Challenge',
      'Largest cultural night',
      'Partnership with 30+ companies',
    ]
  },
  {
    year: '2023',
    theme: 'Innovation Unleashed',
    attendance: '5000+',
    events: '35',
    highlights: [
      'Inaugural edition of Ingenium',
      'Over 100+ colleges participated',
      'Prize pool of ₹3 Lakhs',
    ]
  },
];

const culturalHighlights = [
  { title: 'Pro Nights', description: 'Performances by professional artists and bands' },
  { title: 'Cultural Shows', description: 'Dance, drama, and music competitions' },
  { title: 'Art Exhibitions', description: 'Showcase of student artwork and installations' },
  { title: 'Food Festival', description: 'Diverse cuisine from across India' },
];

export default function PastCulturePage() {
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
              Archives
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter">
              Past Editions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore the journey of Ingenium through the years. A legacy of innovation, culture, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Past Editions - CINEMATIC MUTED BLOCKS */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8" data-animate="past-editions">
            {pastEditions.map((edition, index) => (
              <div
                key={index}
                className="p-8 md:p-12 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all"
              >
                <div className="grid md:grid-cols-[200px,1fr] gap-8">
                  {/* Year & Theme */}
                  <div className="space-y-3">
                    <div className="text-6xl font-medium tracking-tight">
                      {edition.year}
                    </div>
                    <div className="text-sm text-accent">
                      {edition.theme}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="flex flex-wrap gap-8">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-accent" />
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">Attendance</div>
                          <div className="text-xl font-medium">{edition.attendance}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-accent" />
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">Events</div>
                          <div className="text-xl font-medium">{edition.events}</div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <div className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                        Highlights
                      </div>
                      <ul className="space-y-2">
                        {edition.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Highlights Section */}
      <section className="relative py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">
              Culture
            </div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight">
              Cultural Essence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond tech and competitions, Ingenium celebrates the rich tapestry of student culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalHighlights.map((item, index) => (
              <div
                key={index}
                className="p-8 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="relative py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium tracking-tight mb-4">
              Photo Gallery
            </h2>
            <p className="text-muted-foreground">
              Memories from past editions
            </p>
          </div>

          {/* Image Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square border border-border rounded-sm bg-muted/20 hover:bg-muted/40 transition-all"
              >
                {/* Placeholder for images */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-xs uppercase tracking-wider">Image {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
