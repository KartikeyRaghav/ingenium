export const ongoingEvents = [
  {
    id: "code-marathon-2026",
    name: "Code Marathon 2026",
    status: "LIVE_BROADCAST",
    date: "Jan 25-26",
    venue: "Innovation Hub",
    viewers: "1,240 Watching",
    bandwidth: "84%",
    theme: "cyan",
    description: "48-hour coding challenge with real-world problem statements.",
    details: {
      tagline: "BUILD THE FUTURE",
      fullDescription:
        "Join elite developers from around the globe in this high-intensity 48-hour hackathon. Teams will tackle problems ranging from AI ethics to quantum cryptography.",
      speakers: ["Dr. Sarah Chen", "Marcus Neo"],
      schedule: [
        "Kickoff: 09:00",
        "Hacking Begins: 10:00",
        "Midpoint Check: 24:00",
      ],
    },
  },
  {
    id: "tech-talks-series",
    name: "Tech Talks Series",
    status: "STREAMING",
    date: "Jan 25",
    venue: "Auditorium A",
    viewers: "856 Watching",
    bandwidth: "62%",
    theme: "violet",
    description: "Industry experts sharing insights on emerging technologies.",
    details: {
      tagline: "KNOWLEDGE TRANSMISSION",
      fullDescription:
        "A curated series of talks by industry pioneers. Topics include Generative AI, Space Logistics, and Neuro-Link interfaces.",
      speakers: ["Elon Z.", "Ada L."],
      schedule: ["Intro: 14:00", "Keynote: 14:15", "Panel: 15:30"],
    },
  },
];

export const upcomingEvents = [
  {
    id: "robo-championship",
    name: "Robo Championship",
    time: "T-Minus 14h",
    venue: "Tech Arena",
    priority: "HIGH",
    theme: "crimson",
    details: {
      tagline: "STEEL ON STEEL",
      fullDescription:
        "The ultimate battle of engineering. Autonomous bots fight for supremacy in a hazard-filled arena.",
      speakers: ["Referee BOT-9"],
      schedule: ["Qualifiers: 09:00", "Finals: 16:00"],
    },
  },
  {
    id: "ai-workshop",
    name: "AI Workshop",
    time: "Jan 28, 09:00",
    venue: "Lab Complex",
    priority: "MEDIUM",
    theme: "emerald",
    details: {
      tagline: "NEURAL NETWORKS DECODED",
      fullDescription:
        "Hands-on workshop on building your first transformer model. Prerequisites: Python and basic calculus.",
      speakers: ["Prof. Turing"],
      schedule: ["Theory: 09:00", "Lab: 11:00"],
    },
  },
  {
    id: "cultural-night",
    name: "Cultural Night",
    time: "Jan 29, 18:00",
    venue: "Open Air Theatre",
    priority: "MAX",
    theme: "amber",
    details: {
      tagline: "HARMONY IN CHAOS",
      fullDescription:
        "A fusion of traditional art and digital projection mapping. Celebrating diversity through light and sound.",
      speakers: ["DJ Pulse"],
      schedule: ["Gates Open: 17:00", "Show Start: 18:00"],
    },
  },
];

export const scheduleData = [
  {
    day: "Day 1",
    date: "Jan 25",
    active: true,
    events: [
      {
        id: "opening-ceremony",
        time: "09:00",
        name: "Opening Ceremony",
        venue: "Main Stage",
        status: "Done",
        theme: "cyan",
        details: {
          tagline: "INITIATION",
          fullDescription: "Welcome address.",
          speakers: ["Dean"],
          schedule: [],
        },
      },
      {
        id: "code-marathon-kickoff",
        time: "10:30",
        name: "Code Marathon Kickoff",
        venue: "Innovation Hub",
        status: "Live",
        theme: "cyan",
        details: {
          tagline: "START YOUR ENGINES",
          fullDescription: "Rules explanation.",
          speakers: [],
          schedule: [],
        },
      },
      {
        id: "tech-talks-ai",
        time: "14:00",
        name: "Tech Talks - AI & ML",
        venue: "Auditorium A",
        status: "Next",
        theme: "violet",
        details: {
          tagline: "INTELLIGENCE",
          fullDescription: "AI deep dive.",
          speakers: [],
          schedule: [],
        },
      },
      {
        id: "workshop-reg",
        time: "16:00",
        name: "Workshop Registration",
        venue: "Registration Desk",
        status: "Pending",
        theme: "emerald",
        details: {
          tagline: "SIGN UP",
          fullDescription: "Registration flow.",
          speakers: [],
          schedule: [],
        },
      },
    ],
  },
  {
    day: "Day 2",
    date: "Jan 26",
    active: false,
    events: [
      {
        id: "workshop-sessions",
        time: "09:00",
        name: "Workshop Sessions",
        venue: "Lab Complex",
        status: "Pending",
        theme: "emerald",
        details: {
          tagline: "LEARN",
          fullDescription: "Deep work.",
          speakers: [],
          schedule: [],
        },
      },
      {
        id: "tech-talks-blockchain",
        time: "11:00",
        name: "Tech Talks - Blockchain",
        venue: "Auditorium B",
        status: "Pending",
        theme: "violet",
        details: {
          tagline: "DECENTRALIZE",
          fullDescription: "Crypto future.",
          speakers: [],
          schedule: [],
        },
      },
      {
        id: "robo-trials",
        time: "14:00",
        name: "Robo Trials",
        venue: "Tech Arena",
        status: "Pending",
        theme: "crimson",
        details: {
          tagline: "TESTING",
          fullDescription: "Qualifier rounds.",
          speakers: [],
          schedule: [],
        },
      },
      {
        id: "gaming-tournament",
        time: "20:00",
        name: "Gaming Tournament",
        venue: "E-Sports Zone",
        status: "Pending",
        theme: "cyan",
        details: {
          tagline: "GLHF",
          fullDescription: "FPS & MOBA finals.",
          speakers: [],
          schedule: [],
        },
      },
    ],
  },
  {
    day: "Day 3",
    date: "Jan 27",
    active: false,
    events: [
      {
        id: "robo-finals",
        time: "10:00",
        name: "Robo Finals",
        venue: "Tech Arena",
        status: "Pending",
        theme: "crimson",
        details: {
          tagline: "CHAMPIONS",
          fullDescription: "Final battle.",
          speakers: [],
          schedule: [],
        },
      },
      {
        id: "marathon-pres",
        time: "13:00",
        name: "Marathon Presentations",
        venue: "Main Stage",
        status: "Pending",
        theme: "cyan",
        details: {
          tagline: "SHOWCASE",
          fullDescription: "Project demos.",
          speakers: [],
          schedule: [],
        },
      },
      {
        id: "cultural-night-ev",
        time: "18:00",
        name: "Cultural Night",
        venue: "Open Air Theatre",
        status: "Pending",
        theme: "amber",
        details: {
          tagline: "CELEBRATE",
          fullDescription: "Closing party.",
          speakers: [],
          schedule: [],
        },
      },
    ],
  },
];

export const registrations = [
  {
    id: "reg-code-marathon",
    name: "Code Marathon",
    spots: 45,
    total: 100,
    status: "Open",
    theme: "cyan",
    details: {
      tagline: "REGISTER NOW",
      fullDescription: "Secure your spot.",
      speakers: [],
      schedule: [],
    },
  },
  {
    id: "reg-robo",
    name: "Robo Championship",
    spots: 28,
    total: 50,
    status: "Open",
    theme: "crimson",
    details: {
      tagline: "ENTER ARENA",
      fullDescription: "Register bot.",
      speakers: [],
      schedule: [],
    },
  },
  {
    id: "reg-ai",
    name: "AI Workshop",
    spots: 0,
    total: 60,
    status: "Closed",
    theme: "emerald",
    details: {
      tagline: "WAITLIST",
      fullDescription: "Full capacity.",
      speakers: [],
      schedule: [],
    },
  },
  {
    id: "reg-culture",
    name: "Cultural Night",
    spots: 999,
    total: 1000,
    status: "Free Entry",
    theme: "amber",
    details: {
      tagline: "OPEN TO ALL",
      fullDescription: "No pass needed.",
      speakers: [],
      schedule: [],
    },
  },
];

export const aero_artistry = {
  overview: "AERO - AIRTISTRY is a fixed-wing RC aircraft competition designed to test participants' understanding of aerodynamics, aircraft design, structural integrity, control, and real-world flight performance. The event blends engineering precision with piloting skill, encouraging innovation, efficiency, and creativity in aircraft design."
  
}