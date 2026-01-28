"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { PageTransitionWrapper } from "@/components/chronoverse";

// Loading component for Suspense
function RegistrationContent() {
  const searchParams = useSearchParams();
  const eventName = searchParams.get("event") || "General Entry";
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    department: "",
  });

  const [status, setStatus] = useState("idle"); // idle, scanning, transmitting, complete
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    // Initial scanning effect
    setStatus("scanning");
    const timer = setTimeout(() => {
      setStatus("idle");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("transmitting");

    // Simulate network request
    setTimeout(() => {
      setStatus("complete");
      // Trigger glitch effect on success
      setGlitch(true);
      setTimeout(() => setGlitch(false), 500);
    }, 2000);
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto">
      {/* HUD Header */}
      <div className="mb-8 border-b border-blue-500/30 pb-4">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[10px] text-blue-400/60 font-mono tracking-widest uppercase mb-1">
              PROTOCOL: SECURE_LINK
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
              <span className="text-blue-500">REGISTRATION</span> MODULE
            </h1>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-blue-400/60 font-mono tracking-widest uppercase mb-1">
              TARGET
            </div>
            <div className="text-sm font-bold text-blue-300 uppercase">
              {eventName}
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Container - Glass Panel */}
      <div
        className={`relative bg-[#050a14]/80 backdrop-blur-xl border border-blue-500/30 rounded-xl p-8 overflow-hidden transition-all duration-300 ${status === "transmitting" ? "border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]" : ""}`}
      >
        {/* Scanning Overlay */}
        {status === "scanning" && (
          <div className="absolute inset-0 z-50 bg-[#050a14]/90 flex flex-col items-center justify-center">
            <div className="w-full h-1 bg-blue-900/30 absolute top-1/2 -translate-y-1/2">
              <div className="h-full bg-blue-500 animate-[scan_1s_ease-in-out_infinite]" />
            </div>
            <div className="font-mono text-blue-400 text-xs animate-pulse tracking-widest">
              INITIALIZING HANDSHAKE...
            </div>
          </div>
        )}

        {/* Success Overlay */}
        {status === "complete" && (
          <div className="absolute inset-0 z-50 bg-[#050a14]/95 flex flex-col items-center justify-center text-center p-6 animate-fade-in-up">
            <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping opacity-20" />
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2
              className={`text-2xl font-bold text-white mb-2 ${glitch ? "animate-flicker" : ""}`}
            >
              TRANSMISSION COMPLETE
            </h2>
            <p className="text-blue-400/60 text-sm font-mono mb-8">
              Your data has been encrypted and stored in the Chronoverse
              archive.
            </p>
            <button
              onClick={() => router.push("/present")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold tracking-widest uppercase text-xs transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              Return to Ops Center
            </button>
          </div>
        )}

        {/* The Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-6 ${status !== "idle" ? "opacity-50 pointer-events-none" : ""}`}
        >
          {/* Input Group */}
          {[
            {
              id: "fullName",
              label: "Identity Designation",
              placeholder: "Enter Full Name",
              type: "text",
            },
            {
              id: "email",
              label: "Comms Frequency",
              placeholder: "Enter Email Address",
              type: "email",
            },
            {
              id: "studentId",
              label: "Access ID",
              placeholder: "Student / ID Number",
              type: "text",
            },
            {
              id: "department",
              label: "Sector / Department",
              placeholder: "e.g., Computer Science",
              type: "text",
            },
          ].map((field) => (
            <div key={field.id} className="relative group">
              <label
                htmlFor={field.id}
                className="block text-[10px] font-mono text-blue-400/70 uppercase tracking-widest mb-2 group-focus-within:text-blue-300 transition-colors"
              >
                {field.label}
              </label>
              <input
                required
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full bg-blue-950/20 border-b border-blue-500/30 text-white px-4 py-3 focus:outline-none focus:border-blue-400 focus:bg-blue-900/20 transition-all font-mono text-sm placeholder:text-blue-500/20"
              />
              {/* Corner accents */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-focus-within:w-full transition-all duration-500" />
            </div>
          ))}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status !== "idle"}
              className="relative w-full overflow-hidden group bg-transparent border border-blue-500/50 text-blue-400 hover:text-white py-4 font-bold tracking-[0.2em] uppercase text-sm transition-all hover:border-blue-400"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "transmitting"
                  ? "Transmitting Data..."
                  : "Initiate Sequence"}
                {status !== "transmitting" && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </form>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-2 opacity-50">
          <div className="w-2 h-2 bg-blue-500/50 rounded-full animate-ping" />
        </div>
      </div>

      {/* Footer Status */}
      <div className="mt-4 flex justify-between text-[9px] font-mono text-blue-500/40 uppercase tracking-widest">
        <span>Secure Connection: TLS 1.3</span>
        <span>Node: Alpha-7</span>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            width: 100%;
            opacity: 1;
          }
          100% {
            width: 0;
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-black/30 overflow-hidden flex items-center justify-center p-4">
        {/* Background: Blue Hex Grid & Radar */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[50px_50px] opacity-40 pointer-events-none" />

        {/* Back Link */}
        <div className="fixed top-6 left-6 z-20">
          <Link href="/present">
            <button className="flex items-center gap-2 text-blue-400/60 hover:text-white transition-colors group">
              <div className="w-8 h-8 border border-blue-500/30 rounded flex items-center justify-center group-hover:bg-blue-500/20">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase hidden md:block">
                Abort Sequence
              </span>
            </button>
          </Link>
        </div>

        <Suspense
          fallback={
            <div className="text-blue-500 font-mono text-xs animate-pulse">
              LOADING MODULE...
            </div>
          }
        >
          <RegistrationContent />
        </Suspense>
      </main>
    </PageTransitionWrapper>
  );
}
