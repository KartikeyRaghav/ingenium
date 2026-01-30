import { Oxanium, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { StarField } from "@/components/chronoverse";
import TerminalTransition from "@/components/TerminalTransition";
import NeuralLink from "@/components/NeuralLink";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
  display: "swap",
});

const mono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Ingenium",
  description: "Techno Cultural Festival",
};

export default function RootLayout({ children }) {
  const isLoggedIn = false;
  return (
    <html lang="en">
      <body
        className={`${oxanium.variable} ${mono.variable} antialiased overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-0">
          <StarField />
        </div>

        {/* The Global HUD UI */}
        <NeuralLink isLoggedIn={isLoggedIn} />

        {/* The Transition & Page Content Layer */}
        <div className="relative z-10">
          <TerminalTransition>{children}</TerminalTransition>
        </div>

        {/* Global CRT Noise Overlay (Subtle) */}
        <div className="fixed inset-0 pointer-events-none z-999 opacity-[0.03] mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </body>
    </html>
  );
}
