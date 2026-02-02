"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

// Configuration for Events
const EVENT_CONFIG = {
  "General Entry": { teamSize: 1, color: "#60a5fa", sector: "GEN-00" },
  glider: { teamSize: 2, color: "#60a5fa", sector: "AIR-01" },
  payload: { teamSize: 2, color: "#60a5fa", sector: "AIR-02" },
  analytic_x: { teamSize: 2, color: "#60a5fa", sector: "ANX-01" },
  monsoon_water: { teamSize: 2, color: "#60a5fa", sector: "CON-01" },
  open_ground: { teamSize: 2, color: "#60a5fa", sector: "CON-02" },
  sa: { teamSize: 2, color: "#60a5fa", sector: "ELE-01" },
  av: { teamSize: 2, color: "#60a5fa", sector: "ELE-02" },
  web: { teamSize: 2, color: "#60a5fa", sector: "GDG-01" },
  ml: { teamSize: 2, color: "#60a5fa", sector: "GDG-02" },
  game: { teamSize: 2, color: "#60a5fa", sector: "GDG-03" },
  "3d": { teamSize: 2, color: "#60a5fa", sector: "IVDC-01" },
  cv: { teamSize: 2, color: "#60a5fa", sector: "IVDC-02" },
  matiks: { teamSize: 2, color: "#60a5fa", sector: "MAT-01" },
  qml: { teamSize: 2, color: "#60a5fa", sector: "QML-01" },
  rw: { teamSize: 2, color: "#60a5fa", sector: "RBT-01" },
  rs: { teamSize: 2, color: "#60a5fa", sector: "RBT-02" },
  lf: { teamSize: 2, color: "#60a5fa", sector: "RBT-03" },
  patient_monitor: { teamSize: 2, color: "#60a5fa", sector: "SXB-01" },
  screen_addiction: { teamSize: 2, color: "#60a5fa", sector: "SXB-02" },
};

function RegistrationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const formRef = useRef(null);

  const eventName = searchParams.get("event") || "General Entry";
  const config = EVENT_CONFIG[eventName] || EVENT_CONFIG["General Entry"];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: "",
    members: Array.from({ length: config.teamSize }, () => ({
      name: "",
      email: "",
      phone: "",
    })),
  });

  const [status, setStatus] = useState("idle");

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cyber-field", {
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
      gsap.from(".data-bar", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 2,
        ease: "power4.inOut",
      });
    }, formRef);
    return () => ctx.revert();
  }, [step]);

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index][field] = value;
    setFormData({ ...formData, members: updatedMembers });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("processing");

    // Simulate Data Uplink
    setTimeout(() => {
      setStatus("success");
    }, 2500);
  };

  return (
    <div ref={formRef} className="relative z-10 w-full max-w-4xl mx-auto p-4">
      {/* HUD: TOP DECORATION */}
      <div className="flex justify-between items-end mb-6 font-mono">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 animate-pulse" />
            <span className="text-blue-400 text-[10px] tracking-[0.3em]">
              ENCRYPTED_UPLINK // {config.sector}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
            {eventName}
            <span className="text-blue-500">.sys</span>
          </h1>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-[10px] text-blue-400/40 tracking-widest">
            TEAM_CAPACITY
          </div>
          <div className="text-2xl font-bold text-blue-500 leading-none">
            0{config.teamSize}
          </div>
        </div>
      </div>

      <div className="relative border border-blue-500/20 bg-black/60 backdrop-blur-3xl rounded-2xl p-6 md:p-10 shadow-2xl">
        {/* PROGRESS BAR */}
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-900/20">
          <div
            className="data-bar h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {step === 1 ? (
                /* STEP 1: TEAM DETAILS */
                <div className="space-y-6">
                  <div className="cyber-field group">
                    <label className="text-[10px] text-blue-400 uppercase tracking-widest mb-2 block">
                      Establish Team Designation
                    </label>
                    <input
                      required
                      className="w-full bg-blue-500/5 border border-blue-500/30 p-4 text-white font-mono focus:border-blue-400 outline-none transition-all focus:ring-1 focus:ring-blue-500/50"
                      placeholder="ENTER TEAM ALIAS..."
                      value={formData.teamName}
                      onChange={(e) =>
                        setFormData({ ...formData, teamName: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-blue-600 text-white font-bold tracking-[0.5em] uppercase text-xs hover:bg-blue-500 transition-all clip-path-polygon"
                  >
                    Initialize Roster (Step 02)
                  </button>
                </div>
              ) : (
                /* STEP 2: MEMBER DETAILS (DYNAMIC) */
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                    {formData.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="cyber-field border border-white/5 p-4 rounded bg-white/5"
                      >
                        <span className="text-[9px] text-blue-500 font-bold mb-3 block italic tracking-widest">
                          PERSONNEL_0{idx + 1}
                        </span>
                        <div className="space-y-4">
                          <input
                            required
                            placeholder="FULL NAME"
                            className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-blue-500 outline-none"
                            onChange={(e) =>
                              handleMemberChange(idx, "name", e.target.value)
                            }
                          />
                          <input
                            required
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-blue-500 outline-none"
                            onChange={(e) =>
                              handleMemberChange(idx, "email", e.target.value)
                            }
                          />
                          <input
                            required
                            type="tel"
                            placeholder="COMM_LINK (PHONE)"
                            className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-blue-500 outline-none"
                            onChange={(e) =>
                              handleMemberChange(idx, "phone", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-4 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white/5"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-blue-600 text-white font-bold tracking-[0.5em] uppercase text-xs hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    >
                      Submit Credentials
                    </button>
                  </div>
                </div>
              )}
            </motion.form>
          )}

          {status === "processing" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="inline-block relative">
                <div className="w-24 h-24 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-blue-500 animate-pulse">
                  UPLOADING
                </div>
              </div>
              <p className="mt-8 font-mono text-blue-400 text-xs tracking-[0.3em]">
                SYNCHRONIZING WITH CHRONOVERSE MAIN_NODE...
              </p>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 text-center"
            >
              <div className="text-6xl mb-6">⚡</div>
              <h2 className="text-3xl font-black text-white mb-2 uppercase italic">
                Registration Validated
              </h2>
              <p className="text-blue-400/60 font-mono text-sm mb-10 tracking-tighter">
                Your presence has been etched into the timeline.
              </p>
              <button
                onClick={() => router.push("/present")}
                className="px-10 py-4 border-2 border-blue-500 text-blue-500 font-bold uppercase text-xs hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)]"
              >
                Return to Command Center
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER DATA READOUT */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-1 bg-white/5 overflow-hidden">
            <div
              className={`h-full bg-blue-500/20 animate-[loading_2s_infinite]`}
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// MAIN PAGE COMPONENT
export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-black/30 text-white flex items-center justify-center relative overflow-hidden font-sans">
      {/* BACKGROUND FX */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 pointer-events-none bg-size-[100%_2px,3px_100%]" />
      </div>

      <Suspense
        fallback={
          <div className="font-mono animate-pulse">BOOTING_CORE...</div>
        }
      >
        <RegistrationContent />
      </Suspense>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
        }

        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .clip-path-polygon {
          clip-path: polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0% 30%);
        }
      `}</style>
    </main>
  );
}
