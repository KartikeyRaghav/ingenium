"use client";

import { useState, useEffect, useRef, Suspense, useContext } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/lib/api";
import { AuthContext } from "@/context/AuthContext";

const EVENT_CONFIG = {
  "General Entry": {
    name: "General Entry",
    teamSize: 1,
    color: "#cbd5e1",
    sector: "GEN-00",
  },
  glider: {
    name: "RC Glider Soaring",
    teamSize: 2,
    color: "#00f2ff",
    sector: "AIR-01",
  },
  payload: {
    name: "Payload Drop",
    teamSize: 2,
    color: "#00f2ff",
    sector: "AIR-02",
  },
  analytic_x: {
    name: "Global Gourmet",
    teamSize: 2,
    color: "#8b5cf6",
    sector: "ANX-01",
  },
  matiks: { name: "Matiks", teamSize: 2, color: "#8b5cf6", sector: "MAT-01" },
  monsoon_water: {
    name: "Monsoon-Season Water Management",
    teamSize: 2,
    color: "#f59e0b",
    sector: "CON-01",
  },
  open_ground: {
    name: "Strategic Planning",
    teamSize: 2,
    color: "#f59e0b",
    sector: "CON-02",
  },
  sa: {
    name: "Silicon Architects",
    teamSize: 2,
    color: "#d9f99d",
    sector: "ELE-01",
  },
  av: { name: "Analog Verse", teamSize: 2, color: "#d9f99d", sector: "ELE-02" },
  web: {
    name: "Scalable Video Streaming",
    teamSize: 2,
    color: "#22d3ee",
    sector: "GDG-01",
  },
  ml: {
    name: "Narrative Synthesis",
    teamSize: 2,
    color: "#22d3ee",
    sector: "GDG-02",
  },
  game: { name: "Game Dev", teamSize: 2, color: "#22d3ee", sector: "GDG-03" },
  "3d": {
    name: "3D Reconstruction",
    teamSize: 2,
    color: "#f472b6",
    sector: "IVDC-01",
  },
  cv: {
    name: "CV Obstacourse",
    teamSize: 2,
    color: "#f472b6",
    sector: "IVDC-02",
  },
  qml: {
    name: "Quantum Map Generator",
    teamSize: 1,
    color: "#4f46e5",
    sector: "QML-01",
  },
  rw: { name: "Robowars", teamSize: 4, color: "#ff0040", sector: "RBT-01" },
  rs: { name: "Robosoccer", teamSize: 3, color: "#ff0040", sector: "RBT-02" },
  lf: {
    name: "Line Follower",
    teamSize: 1,
    color: "#ff0040",
    sector: "RBT-03",
  },
  patient_monitor: {
    name: "Patient Monitoring",
    teamSize: 2,
    color: "#10b981",
    sector: "SXB-01",
  },
  screen_addiction: {
    name: "Health-Tech Solutions",
    teamSize: 2,
    color: "#10b981",
    sector: "SXB-02",
  },
  valorant: {
    name: "Valorant",
    teamSize: 4,
    color: "#ff4655",
    sector: "GAME-01",
  },
  bgmi: { name: "BGMI", teamSize: 4, color: "#ff4655", sector: "GAME-02" },
  eafc: { name: "EAFC", teamSize: 4, color: "#ff4655", sector: "GAME-03" },
  moba: {
    name: "Moba Legends",
    teamSize: 4,
    color: "#ff4655",
    sector: "GAME-04",
  },
  quiz: { name: "Quiz", teamSize: 4, color: "#fbbf24", sector: "QUIZ-01" },
  apd: {
    name: "Asian Parliamentary Debate",
    teamSize: 4,
    color: "#fbbf24",
    sector: "DEB-01",
  },
  pw: {
    name: "Poetry Writing",
    teamSize: 4,
    color: "#fbbf24",
    sector: "LIT-01",
  },
  fr: {
    name: "Fiction Relay",
    teamSize: 4,
    color: "#fbbf24",
    sector: "LIT-02",
  },
  ps: { name: "Poetry Slam", teamSize: 4, color: "#fbbf24", sector: "LIT-03" },
  nukkad: {
    name: "Nukkad Natak",
    teamSize: 4,
    color: "#c084fc",
    sector: "DRAMA-01",
  },
  mono: { name: "MonoAct", teamSize: 4, color: "#c084fc", sector: "DRAMA-02" },
  canvas: {
    name: "Canvas Painting",
    teamSize: 1,
    color: "#c084fc",
    sector: "KALA-01",
  },
  bands: {
    name: "Battle of Bands",
    teamSize: 4,
    color: "#c084fc",
    sector: "MUSIC-01",
  },
  shutter: {
    name: "Shutter Up",
    teamSize: 4,
    color: "#c084fc",
    sector: "PHOTO-01",
  },
  vlr: {
    name: "Album Cover Design",
    teamSize: 4,
    color: "#c084fc",
    sector: "VLR-01",
  },
};

function RegistrationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const containerRef = useRef(null);

  const eventKey = searchParams.get("event") || "General Entry";
  const config = EVENT_CONFIG[eventKey] || EVENT_CONFIG["General Entry"];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: "",
    members: Array.from({ length: config.teamSize }, () => ({
      name: "",
      email: "",
      mobile: "",
    })),
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const themeColor = status === "error" ? "#ff4747" : config.color;

  // Reset form when event changes
  useEffect(() => {
    setFormData({
      teamName: "",
      members: Array.from({ length: config.teamSize }, () => ({
        name: "",
        email: "",
        mobile: "",
      })),
    });
  }, [config.teamSize]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cyber-node", {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, [step]);

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index][field] = value;
    setFormData({ ...formData, members: updatedMembers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("processing");

    await api
      .post("http://localhost:5000/api/registration/register", {
        teamName: formData.teamName,
        psName: eventKey,
        participants: formData.members,
      })
      .then((msg) => {
        setStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
        setErrorMsg(error.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full max-w-5xl mx-auto p-4 md:p-8"
      style={{ "--accent": themeColor }}
    >
      {/* HEADER HUD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-accent" />
            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">
              {status === "error"
                ? "SYSTEM_COMPROMISED"
                : `Sector: ${config.sector}`}
            </span>
          </div>
          <h1 className="text-5xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
            {status === "error" ? "TERMINATED" : config.name || eventKey}
            <span className="text-accent opacity-50 block text-xl mt-2 font-light">
              {status === "error" ? "SYSTEM_CRASHED" : "SYSTEM_ACCESS_GRANTED"}
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-end border-l-2 border-accent pl-6 py-2">
          <span className="text-[10px] text-white/40 uppercase tracking-widest">
            Personnel Capacity
          </span>
          <span className="text-3xl font-mono font-bold text-white leading-none">
            0{config.teamSize}
          </span>
        </div>
      </div>

      <div className="relative bg-black/40 backdrop-blur-md border border-accent/30 rounded-sm p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* GLITCH DECORATION */}
        <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-accent" />
        <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-accent" />

        <div className="p-6 md:p-12 border border-accent/10">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
              >
                {step === 1 ? (
                  <div className="space-y-10">
                    <div className="cyber-node">
                      <label className="text-xs font-mono text-accent mb-4 block tracking-widest uppercase">
                        // Assign Team Alias
                      </label>
                      <input
                        required
                        autoFocus
                        className="w-full bg-white/5 border-b-2 border-accent/20 p-6 text-lg md:text-2xl text-white font-mono focus:bg-accent/5 focus:border-accent outline-none transition-all"
                        placeholder="TYPE_HERE..."
                        value={formData.teamName}
                        onChange={(e) =>
                          setFormData({ ...formData, teamName: e.target.value })
                        }
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="group relative w-full py-6 bg-accent text-black font-black uppercase tracking-[1em] text-sm overflow-hidden"
                    >
                      <span className="relative z-10">Next Phase</span>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto custom-scrollbar pr-4">
                      {formData.members.map((member, idx) => (
                        <div
                          key={idx}
                          className="cyber-node group bg-white/5 p-6 border border-white/10 hover:border-accent/50 transition-colors"
                        >
                          <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-1">
                              UNIT_0{idx + 1}
                            </span>
                            <div className="h-1 w-12 bg-white/10" />
                          </div>
                          <div className="space-y-4">
                            <input
                              required
                              placeholder="FULL NAME"
                              className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent outline-none font-mono"
                              onChange={(e) =>
                                handleMemberChange(idx, "name", e.target.value)
                              }
                            />
                            <input
                              required
                              type="email"
                              placeholder="EMAIL_ADDR"
                              className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent outline-none font-mono"
                              onChange={(e) =>
                                handleMemberChange(idx, "email", e.target.value)
                              }
                            />
                            <input
                              required
                              type="tel"
                              placeholder="MOBILE NUM"
                              className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-accent outline-none font-mono"
                              onChange={(e) =>
                                handleMemberChange(
                                  idx,
                                  "mobile",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-12 py-5 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/5 transition-all"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-5 bg-accent text-black font-black uppercase tracking-[0.5em] text-sm shadow-[0_0_30px_var(--accent)] hover:brightness-110 transition-all"
                      >
                        Transmit Data
                      </button>
                    </div>
                  </div>
                )}
              </motion.form>
            )}

            {status === "processing" && (
              <div className="py-32 flex flex-col items-center justify-center space-y-8">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 border-4 border-accent rounded-full animate-ping opacity-20" />
                  <div className="absolute inset-0 border-t-4 border-accent rounded-full animate-spin" />
                </div>
                <div className="font-mono text-accent animate-pulse tracking-[0.3em]">
                  ENCRYPTING_PACKETS...
                </div>
              </div>
            )}

            {status === "error" && (
              <motion.div
                key="err"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="text-6xl mb-6 animate-bounce">⚠️</div>
                <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">
                  Handshake Denied
                </h2>
                <div className="bg-red-500/10 border-l-4 border-red-500 p-6 mb-10 max-w-lg mx-auto">
                  <p className="text-red-400 font-mono text-xs leading-relaxed text-left uppercase">
                    {errorMsg}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setStep(1);
                  }}
                  className="px-12 py-5 border-2 border-red-500 text-red-500 font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-red-500 hover:text-white transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                >
                  Clear Cache & Retry
                </button>
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-20 text-center"
              >
                <h2 className="text-6xl font-black text-white mb-4 uppercase italic tracking-tighter">
                  Confirmed
                </h2>
                <p className="text-accent font-mono text-sm mb-12 max-w-md mx-auto opacity-80">
                  Authentication successful. Your team has been registered in
                  the Chronoverse registry for {config.name}.
                </p>
                <button
                  onClick={() => router.push("/present")}
                  className="group relative px-12 py-5 bg-transparent border-2 border-accent text-accent font-bold uppercase text-xs overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-black">
                    Return to HQ
                  </span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER HUD */}
      <div className="mt-8 flex justify-between font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">
        <div className="flex gap-8">
          <span>LATENCY: 14ms</span>
          <span>STATUS: ENCRYPTED</span>
        </div>
        <span>© INGENIUM_OS</span>
      </div>
    </div>
  );
}

export default function RegistrationPageContent() {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  if (!isLoggedIn)
    router.push(
      `/auth?path=/present/registration\?event=${searchParams.get("event")}`,
    );

  return (
    <main className="min-h-screen bg-black/30 text-white flex items-center justify-center relative overflow-hidden">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 bg-size-[100%_4px,4px_100%]" />
      </div>

      <Suspense
        fallback={
          <div className="font-mono text-accent animate-pulse uppercase tracking-widest">
            Waking_Nodes...
          </div>
        }
      >
        <RegistrationContent />
      </Suspense>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--accent);
        }

        @keyframes pulse-border {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
