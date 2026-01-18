import { Oxanium, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en">
      <body className={`${oxanium.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
