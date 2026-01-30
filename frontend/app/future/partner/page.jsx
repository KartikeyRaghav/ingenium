"use client";

import React, { useState } from "react";
import { PageTransitionWrapper } from "@/components/chronoverse";
import Link from "next/link";

// Simple corner accent component
const TechCorner = ({ className, color = "text-violet-500" }) => (
  <svg
    className={`absolute w-4 h-4 ${className} ${color}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2H10M2 2V10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

// Scanning line animation
const ScannerLine = () => (
  <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-violet-500 to-transparent opacity-50 animate-scan-fast pointer-events-none" />
);

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    tier: "Silver",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    console.log("Form submitted:", formData);
    alert("Transmission Received. We will establish a secure channel shortly.");
  };

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-black/30 text-violet-100 relative overflow-hidden selection:bg-violet-500/30 selection:text-white">
        {/* Background Gradients */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-violet-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-150 h-150 bg-blue-900/10 blur-[100px] rounded-full" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <Link
              href="/future"
              className="absolute left-0 top-0 text-violet-500 hover:text-white transition-colors font-mono text-xs flex items-center gap-2"
            >
              ← RETURN TO NEXUS
            </Link>

            <span className="inline-block py-1 px-3 border border-violet-500/30 rounded-full text-[10px] font-mono text-violet-400 mb-6 bg-violet-500/5 backdrop-blur-sm">
              ALLIANCE PROTOCOL // OPEN
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">
                Chronoverse
              </span>
            </h1>
            <p className="text-lg text-violet-200/60 max-w-2xl mx-auto leading-relaxed">
              Partner with Ingenium to shape the timeline. Gain access to
              cutting-edge research, global talent networks, and direct
              influence on the next century of innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Benefits Grid */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Early Access",
                    desc: "Priority access to quantum computing and bio-augmentation research data before public release.",
                    icon: "🔓",
                  },
                  {
                    title: "Global Network",
                    desc: "Connect with Tier-1 innovators and institutions across the synchronized timeline.",
                    icon: "🌐",
                  },
                  {
                    title: "Brand Future",
                    desc: "Secure your organization's legacy by embedding it into the structural roadmap of 2030+.",
                    icon: "✨",
                  },
                  {
                    title: "Talent Pipeline",
                    desc: "Direct recruitment channels for the engineers and visionaries of tomorrow.",
                    icon: "👥",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative p-6 bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/5 transition-colors" />
                    <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-violet-200/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stylized Quote */}
              <div className="relative p-8 border-l-2 border-violet-500/50 bg-linear-to-r from-violet-500/10 to-transparent">
                <p className="text-xl font-light italic text-violet-100/80 mb-4">
                  "The future is not something we enter. The future is something
                  we create."
                </p>
                <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
                  — Leonardo Da Vinci (Simulated)
                </span>
              </div>
            </div>

            {/* Right Column: High-Tech Form */}
            <div className="relative">
              {/* Form Container */}
              <div className="relative bg-black/40 border border-violet-500/30 backdrop-blur-md p-1">
                <TechCorner className="top-0 left-0 -translate-x-1 -translate-y-1" />
                <TechCorner className="top-0 right-0 translate-x-1 -translate-y-1 rotate-90" />
                <TechCorner className="bottom-0 left-0 -translate-x-1 translate-y-1 -rotate-90" />
                <TechCorner className="bottom-0 right-0 translate-x-1 translate-y-1 rotate-180" />

                <div className="p-8">
                  <ScannerLine />
                  <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                    Initiate Partnership
                  </h3>
                  <p className="text-xs font-mono text-violet-400/60 mb-8 border-b border-violet-500/20 pb-4">
                    SECURE_TRANSMISSION_CHANNEL_V8.4
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-violet-300 uppercase tracking-wider block">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        name="orgName"
                        value={formData.orgName}
                        onChange={handleChange}
                        className="w-full bg-violet-900/10 border border-violet-500/20 text-white px-4 py-3 focus:outline-none focus:border-violet-500 focus:bg-violet-900/20 transition-all font-sans placeholder-violet-500/20"
                        placeholder="e.g. Cyberdyne Systems"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-violet-300 uppercase tracking-wider block">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          className="w-full bg-violet-900/10 border border-violet-500/20 text-white px-4 py-3 focus:outline-none focus:border-violet-500 focus:bg-violet-900/20 transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-violet-300 uppercase tracking-wider block">
                          Email Frequency
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-violet-900/10 border border-violet-500/20 text-white px-4 py-3 focus:outline-none focus:border-violet-500 focus:bg-violet-900/20 transition-all"
                          placeholder="name@org.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-violet-300 uppercase tracking-wider block">
                        Partnership Tier Interest
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Gold", "Silver", "Bronze"].map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, tier }))
                            }
                            className={`py-2 text-sm border transition-all ${
                              formData.tier === tier
                                ? "bg-violet-600 border-violet-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                                : "bg-transparent border-violet-500/20 text-violet-400 hover:border-violet-500/50"
                            }`}
                          >
                            {tier.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-violet-300 uppercase tracking-wider block">
                        Message Payload
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-violet-900/10 border border-violet-500/20 text-white px-4 py-3 focus:outline-none focus:border-violet-500 focus:bg-violet-900/20 transition-all resize-none"
                        placeholder="Describe your proposed alliance parameters..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-violet-200 transition-colors relative overflow-hidden group"
                    >
                      <span className="relative z-10">Transmit Proposal</span>
                      <div className="absolute inset-0 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Decorative background grid behind form */}
              <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border border-violet-500/10 flex items-center justify-center">
                <div className="w-[90%] h-[90%] border border-dashed border-violet-500/10" />
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes scan-fast {
            0% {
              top: 0%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              top: 100%;
              opacity: 0;
            }
          }
          .animate-scan-fast {
            animation: scan-fast 3s linear infinite;
          }
        `}</style>
      </main>
    </PageTransitionWrapper>
  );
}
