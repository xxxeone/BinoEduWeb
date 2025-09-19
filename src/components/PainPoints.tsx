import React from "react";
import heroImage from "@/assets/hero-bg.jpg";

// Contract
// Inputs: none. Outputs: full-bleed visual section with animated pain points.
// Success: unobtrusive, premium, high-contrast typography; subtle motion; mobile-friendly.

const leftPoints = [
  { lines: ["被竞争对手", "甩开"], delay: "0.25s" },
  { lines: ["核心人才", "流失"], delay: "0.5s" },
];

const rightPoint = { lines: ["企业无法", "规模化"], delay: "0.75s" };

const PainPoints: React.FC = () => {
  return (
    <section id="painpoints" className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden">
      {/* Background: hero image + gradient + animated dot grain */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-tr from-[#0b0b0c]/65 via-[#111215]/55 to-[#1a1c21]/50" />
      <div
        className="absolute -inset-10 z-[2] opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, #ffffff 1px, rgba(0,0,0,0) 1px)",
          backgroundSize: "18px 18px",
          animation: "pp-dots-shift 18s linear infinite"
        }}
      />

      {/* Light streak effect (CSS only) */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/3 w-1/3 opacity-25 blur-2xl z-[3]"
        style={{
          background: "linear-gradient(90deg, transparent, #ffffff33, transparent)",
          animation: "pp-sweep 8s ease-in-out infinite"
        }}
      />

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2
            className="opacity-0 text-white/95 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)] animate-[pp-tracking-in_0.7s_ease-out_0.1s_forwards,pp-breathe_6s_ease-in-out_1s_infinite_alternate] motion-reduce:opacity-100 motion-reduce:animate-none"
          >
            企业家，你是否…
          </h2>
          <div className="relative mt-4 md:mt-8 lg:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left column: two items stacked */}
              <div className="flex flex-col gap-8 items-center md:items-start">
                {leftPoints.map((p, i) => (
                  <div key={i} className="opacity-0 translate-y-2 animate-[pp-fade-slide_0.9s_ease-out_forwards]" style={{ animationDelay: p.delay }}>
                    <div className="text-white font-extrabold leading-[0.98] text-[28px] md:text-[48px] lg:text-[66px] tracking-tight text-center md:text-left">
                      <span className="block">{p.lines[0]}</span>
                      <span className="block relative">
                        {p.lines[1]}
                        <span className="absolute left-0 -bottom-2 h-[2px] bg-white/80 w-0 animate-[pp-underline_0.8s_ease-out_forwards]" style={{ width: '7.5rem', animationDelay: `calc(${p.delay} + 120ms)` }} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column: single item aligned right */}
              <div className="flex justify-center md:justify-end">
                <div className="opacity-0 translate-y-2 animate-[pp-fade-slide_0.9s_ease-out_forwards]" style={{ animationDelay: rightPoint.delay }}>
                  <div className="text-white font-extrabold leading-[0.98] text-[28px] md:text-[48px] lg:text-[66px] tracking-tight text-center md:text-right">
                    <span className="block">{rightPoint.lines[0]}</span>
                    <span className="block relative">
                      {rightPoint.lines[1]}
                      <span className="absolute left-0 md:left-auto md:right-0 -bottom-2 h-[2px] bg-white/80 w-0 animate-[pp-underline_0.8s_ease-out_forwards]" style={{ width: '7.5rem', animationDelay: `calc(${rightPoint.delay} + 120ms)` }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient subtle vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.75)]" />
    </section>
  );
};

export default PainPoints;
