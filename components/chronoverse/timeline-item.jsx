"use client";

export function TimelineItem({
  title,
  date,
  time,
  venue,
  description,
  children,
  isLast = false,
  status = "upcoming",
}) {
  const statusColors = {
    live: "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]",
    upcoming: "bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)]",
    completed: "bg-muted-foreground",
  };

  return (
    <div className="relative flex gap-6">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full z-10 transition-all duration-300 ${statusColors[status]} ${status === "live" && "animate-pulse"}`}
        />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-linear-to-b from-primary/50 to-transparent min-h-25" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <div className="glass-panel rounded-xl p-5 hover:glow-border transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <h4 className="text-lg font-sans tracking-wide text-foreground">
              {title}
            </h4>
            {status === "live" && (
              <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/50 animate-pulse">
                LIVE
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
            {date && (
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {date}
              </span>
            )}
            {time && (
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {time}
              </span>
            )}
            {venue && (
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {venue}
              </span>
            )}
          </div>

          {description && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
