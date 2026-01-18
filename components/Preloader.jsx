import { useEffect, useState } from 'react';
import { Progress } from '@/app/components/ui/progress';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(90, 107, 130, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(90, 107, 130, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Preloader Content - MINIMAL & RESTRAINED */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-8">
        {/* Logo / Title */}
        <div className="text-center">
          <div 
            className="mb-4 text-6xl tracking-tighter font-medium"
            data-animate="fade-in"
          >
            INGENIUM
          </div>
          <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            IIT Indore
          </div>
        </div>

        {/* Progress Bar - Clean & Minimal */}
        <div className="w-100 max-w-full">
          <Progress 
            value={progress} 
            className="h-0.5 bg-muted"
          />
          <div className="mt-3 flex justify-between text-xs text-muted-foreground font-mono">
            <span>INITIALIZING</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Status Text */}
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {progress < 30 && 'Loading System'}
          {progress >= 30 && progress < 60 && 'Establishing Connection'}
          {progress >= 60 && progress < 90 && 'Synchronizing Data'}
          {progress >= 90 && 'Ready'}
        </div>
      </div>
    </div>
  );
}
