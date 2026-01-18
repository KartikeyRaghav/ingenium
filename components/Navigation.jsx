"use client";
import { Home, Map, Calendar, Timer, Users, Heart, Award } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/realms", label: "Realms", icon: Map },
  { path: "/timeline", label: "Timeline", icon: Calendar },
  { path: "/countdown", label: "Countdown", icon: Timer },
  { path: "/sponsors", label: "Sponsors", icon: Award },
  { path: "/past-culture", label: "Archives", icon: Heart },
  { path: "/team", label: "Team", icon: Users },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl tracking-tighter font-medium hover:text-accent transition-colors"
          >
            INGENIUM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 text-sm rounded-sm transition-all
                    ${
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span className="uppercase tracking-wider">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-current" />
              <span className="w-full h-0.5 bg-current" />
              <span className="w-full h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
