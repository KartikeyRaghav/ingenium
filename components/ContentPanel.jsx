"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, ArrowLeft } from "lucide-react";

const contentData = {
  past: {
    title: "PAST: ORIGINS",
    sections: [
      {
        heading: "IIT Indore Legacy",
        content: [
          "Founded in 2009, IIT Indore stands as a beacon of academic excellence and innovation.",
          "Our techno-cultural heritage blends cutting-edge research with creative expression.",
          "Pre-Ingenium events laid the foundation for this landmark celebration.",
        ],
      },
      {
        heading: "Cultural Heritage",
        content: [
          "A tradition of interdisciplinary collaboration.",
          "Student-driven innovation across all domains.",
          "Community building through shared experiences.",
        ],
      },
    ],
  },
  present: {
    title: "PRESENT: EVENTS",
    sections: [
      {
        heading: "Technical Competitions",
        content: [
          "Robotics Challenge: Build autonomous systems",
          "CodeSprint: 24-hour hackathon",
          "Innovation Showcase: Present your breakthrough ideas",
        ],
      },
      {
        heading: "Cultural Programs",
        content: [
          "Live Performances: Music, dance, and theater",
          "Art Exhibition: Digital and traditional media",
          "Film Screening: Student-curated selections",
        ],
      },
      {
        heading: "Schedule",
        content: [
          "Day 1: Opening ceremony and workshops",
          "Day 2: Main competitions and performances",
          "Day 3: Finals and closing gala",
        ],
      },
    ],
  },
  future: {
    title: "FUTURE: VISION",
    sections: [
      {
        heading: "Our Vision",
        content: [
          "Ingenium aims to become a premier platform for student innovation.",
          "Fostering collaboration between technology and culture.",
          "Creating lasting impact through knowledge exchange.",
        ],
      },
      {
        heading: "Key Sponsors",
        content: [
          "Technology Partners: Leading tech companies",
          "Media Partners: National publications",
          "Academic Partners: Research institutions",
        ],
      },
      {
        heading: "What's Next",
        content: [
          "Annual editions with expanding scope",
          "International participation",
          "Industry partnerships and mentorship programs",
        ],
      },
    ],
  },
  countdown: {
    title: "TIME CORE: COUNTDOWN",
    sections: [
      {
        heading: "Event Timeline",
        content: [
          "Registration Opens: January 20, 2026",
          "Main Event: February 14-16, 2026",
          "Awards Ceremony: February 16, 2026",
        ],
      },
      {
        heading: "Important Dates",
        content: [
          "Early Bird Registration: Until January 31",
          "Abstract Submission Deadline: February 5",
          "Team Formation Deadline: February 10",
        ],
      },
    ],
  },
  contact: {
    title: "CONTACT: TEAM",
    sections: [
      {
        heading: "Core Team",
        content: [
          "Overall Coordinator: team@ingenium.iiti.ac.in",
          "Technical Head: tech@ingenium.iiti.ac.in",
          "Cultural Head: cultural@ingenium.iiti.ac.in",
        ],
      },
      {
        heading: "General Inquiries",
        content: [
          "Email: info@ingenium.iiti.ac.in",
          "Phone: +91 731 XXX XXXX",
          "Location: IIT Indore, Simrol, Madhya Pradesh",
        ],
      },
      {
        heading: "Social Media",
        content: [
          "Follow us for updates and announcements",
          "Instagram: @ingenium_iiti",
          "LinkedIn: Ingenium IIT Indore",
        ],
      },
    ],
  },
};

const ContentPanel = ({ nodeId, onClose }) => {
  const panelRef = useRef(null);
  const content = contentData[nodeId];

  useEffect(() => {
    // GSAP Animation Hook: Panel opens from right with structured transition
    gsap.from(panelRef.current, {
      x: "100%",
      duration: 0.6,
      ease: "power3.out",
    });

    // Animate sections in sequence
    const sections = panelRef.current?.querySelectorAll(".content-section");
    sections?.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.3 + index * 0.1,
        ease: "power2.out",
      });
    });
  }, [nodeId]);

  const handleClose = () => {
    // GSAP Animation Hook: Panel close animation
    gsap.to(panelRef.current, {
      x: "100%",
      duration: 0.5,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  const handleBackToNav = () => {
    handleClose();
  };

  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="flex-1 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="w-full max-w-2xl bg-[#0d1117] border-l border-blue-400/20 overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0d1117]/95 backdrop-blur-sm border-b border-blue-400/20 p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleBackToNav}
              className="flex items-center gap-2 text-blue-300/70 hover:text-blue-300 transition-colors text-sm tracking-wide"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO MAP
            </button>
            <button
              onClick={handleClose}
              className="text-blue-300/70 hover:text-blue-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h2 className="text-3xl font-light tracking-wider text-blue-100">
            {content.title}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {content.sections.map((section, index) => (
            <div key={index} className="content-section">
              <div className="border-l-2 border-blue-400/30 pl-4">
                <h3 className="text-xl font-light tracking-wide text-blue-200 mb-4">
                  {section.heading}
                </h3>
                <div className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 text-blue-100/70 text-sm leading-relaxed"
                    >
                      <div className="w-1 h-1 bg-blue-400/50 rounded-full mt-2 shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-blue-400/20 p-6 mt-8">
          <p className="text-blue-400/40 text-xs tracking-wider text-center uppercase">
            INGENIUM 2026 • IIT INDORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentPanel;
