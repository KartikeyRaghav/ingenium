import { Oxanium, Poppins } from "next/font/google";
import "./globals.css";
import { StarField } from "@/components/chronoverse";
import TerminalTransition from "@/components/TerminalTransition";
import NeuralLink from "@/components/NeuralLink";
import { AuthProvider } from "@/context/AuthContext";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Ingenium",
  description: "Techno Cultural Festival",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.variable} ${poppins.variable} antialiased overflow-x-hidden`}
      >
        <AuthProvider>
          <div className="fixed inset-0 z-0">
            <StarField />
          </div>

          <NeuralLink />

          <div className="relative z-10">
            <TerminalTransition>{children}</TerminalTransition>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
