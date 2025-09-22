import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface DateDisplayProps {
  variant?: 'hero' | 'contact';
  className?: string;
}

const DateDisplayEn: React.FC<DateDisplayProps> = ({ variant = 'hero', className = '' }) => {
  const baseClasses = "relative flex items-center justify-center gap-4 px-10 py-6 rounded-2xl font-bold transition-all duration-700 hover:shadow-2xl group";
  
  const variantClasses = {
    hero: "bg-gradient-to-r from-emerald-500/25 to-green-600/25 border-2 border-emerald-400/40 text-white backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] hover:from-emerald-500/35 hover:to-green-600/35 hover:border-emerald-400/60 hover:scale-105 hover:-translate-y-2",
    contact: "bg-white/30 backdrop-blur-lg border-2 border-white/50 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-white/40 hover:border-white/70 hover:scale-[1.03] hover:-translate-y-1"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Multiple background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-2xl blur-xl animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-emerald-500/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
      
      {/* Main content - single line layout */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Calendar icon with slower animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-md group-hover:blur-lg transition-all duration-500" />
          <Calendar className="relative w-8 h-8 text-emerald-200 animate-[date-float-slow_20s_ease-in-out_infinite] group-hover:text-emerald-100 transition-colors duration-300" />
        </div>
        
        {/* Date text - single line */}
        <div className="flex items-center gap-3">
          <span className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent animate-[date-shimmer_3s_linear_infinite] bg-[length:200%_auto]">
            10 - 15 March 2026
          </span>
          {/* Subtitle next to the date */}
          <span className="text-base text-white/70 font-medium animate-[date-float-slow_25s_ease-in-out_infinite]">
            Business Study Tour
          </span>
        </div>
      </div>
      
      {/* Simplified decorative elements - no stars */}
      <div className="absolute top-1 right-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1 left-3 w-1.5 h-1.5 bg-green-400 rounded-full animate-[slow-pulse_3s_ease-in-out_infinite]" />
      
      {/* Hover effect ring */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-2 group-hover:ring-emerald-400/50 transition-all duration-500" />
    </div>
  );
};

export default DateDisplayEn;