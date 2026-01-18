import Navigation from '@/components/Navigation';

const sponsors = {
  title: [
    { name: 'Tech Corp', tier: 'Title Sponsor' },
  ],
  platinum: [
    { name: 'Innovation Labs', tier: 'Platinum' },
    { name: 'Future Systems', tier: 'Platinum' },
  ],
  gold: [
    { name: 'Digital Solutions', tier: 'Gold' },
    { name: 'Cloud Dynamics', tier: 'Gold' },
    { name: 'Smart Tech', tier: 'Gold' },
  ],
  silver: [
    { name: 'Code Studio', tier: 'Silver' },
    { name: 'Design Hub', tier: 'Silver' },
    { name: 'Tech Partners', tier: 'Silver' },
    { name: 'Innovation Co', tier: 'Silver' },
  ],
};

export default function SponsorsPage() {
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
              Partners
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter">
              Sponsors
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Organizations supporting Ingenium 2026. Partner with us to reach 10,000+ students.
            </p>
          </div>
        </div>
      </section>

      {/* Title Sponsor - PREMIUM SECTION */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Title Sponsor
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl p-16 border border-accent/30 rounded-sm bg-card/30 text-center">
              <div className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
                {sponsors.title[0].name}
              </div>
              <div className="text-sm text-muted-foreground">
                {sponsors.title[0].tier}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platinum Sponsors - CLEAN GRID */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Platinum Sponsors
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                className="p-12 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all text-center"
              >
                <div className="text-3xl font-medium tracking-tight mb-2">
                  {sponsor.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Gold Sponsors
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="p-10 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all text-center"
              >
                <div className="text-2xl font-medium tracking-tight mb-2">
                  {sponsor.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Silver Sponsors
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <div
                key={index}
                className="p-8 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all text-center"
              >
                <div className="text-lg font-medium tracking-tight mb-1">
                  {sponsor.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {sponsor.tier}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="relative py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Become a Sponsor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with Ingenium to reach 10,000+ students from premier institutes across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-sm hover:bg-accent/90 transition-all">
              <span className="uppercase tracking-wider text-sm font-medium">Download Brochure</span>
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-sm hover:bg-muted transition-all">
              <span className="uppercase tracking-wider text-sm font-medium">Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
