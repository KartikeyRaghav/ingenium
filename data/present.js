export const ongoingEvents = [
  {
    name: "Code Marathon 2026",
    status: "LIVE_BROADCAST",
    date: "Jan 25-26",
    venue: "Innovation Hub",
    viewers: "1,240 Watching",
    bandwidth: "84%",
    description: "48-hour coding challenge with real-world problem statements.",
  },
  {
    name: "Tech Talks Series",
    status: "STREAMING",
    date: "Jan 25",
    venue: "Auditorium A",
    viewers: "856 Watching",
    bandwidth: "62%",
    description: "Industry experts sharing insights on emerging technologies.",
  },
];

export const upcomingEvents = [
  {
    name: "Robo Championship",
    time: "T-Minus 14h",
    venue: "Tech Arena",
    priority: "HIGH",
  },
  {
    name: "AI Workshop",
    time: "Jan 28, 09:00",
    venue: "Lab Complex",
    priority: "MEDIUM",
  },
  {
    name: "Cultural Night",
    time: "Jan 29, 18:00",
    venue: "Open Air Theatre",
    priority: "MAX",
  },
];

export const scheduleData = [
  {
    day: "Day 1",
    date: "Jan 25",
    active: true,
    events: [
      { time: "09:00", name: "Opening Ceremony", venue: "Main Stage", status: "Done" },
      { time: "10:30", name: "Code Marathon Kickoff", venue: "Innovation Hub", status: "Live" },
      { time: "14:00", name: "Tech Talks - AI & ML", venue: "Auditorium A", status: "Next" },
      { time: "16:00", name: "Workshop Registration", venue: "Registration Desk", status: "Pending" },
    ],
  },
  {
    day: "Day 2",
    date: "Jan 26",
    active: false,
    events: [
      { time: "09:00", name: "Workshop Sessions", venue: "Lab Complex", status: "Pending" },
      { time: "11:00", name: "Tech Talks - Blockchain", venue: "Auditorium B", status: "Pending" },
      { time: "14:00", name: "Robo Trials", venue: "Tech Arena", status: "Pending" },
      { time: "20:00", name: "Gaming Tournament", venue: "E-Sports Zone", status: "Pending" },
    ],
  },
  {
    day: "Day 3",
    date: "Jan 27",
    active: false,
    events: [
      { time: "10:00", name: "Robo Finals", venue: "Tech Arena", status: "Pending" },
      { time: "13:00", name: "Marathon Presentations", venue: "Main Stage", status: "Pending" },
      { time: "18:00", name: "Cultural Night", venue: "Open Air Theatre", status: "Pending" },
    ],
  },
];

export const registrations = [
  { name: "Code Marathon", spots: 45, total: 100, status: "Open" },
  { name: "Robo Championship", spots: 28, total: 50, status: "Open" },
  { name: "AI Workshop", spots: 0, total: 60, status: "Closed" },
  { name: "Cultural Night", spots: 999, total: 1000, status: "Free Entry" },
];
