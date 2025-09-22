import { Button } from "@/components/ui/button";
import DateDisplayEn from "./DateDisplayEn";
import heroImage from "@/assets/hero-bg.jpg";
import osakaImg from "@/assets/osaka.png";

const HeroSectionEn = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Osaka Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${osakaImg})`,
          filter: 'brightness(0.6) contrast(1.2)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-gray-900/60 to-slate-800/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      {/* Animated Inspirational Words Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Japanese Cultural Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sakura petals falling */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-pink-300/40 rounded-full animate-[sakura-fall_15s_linear_infinite]" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-pink-200/50 rounded-full animate-[sakura-fall_18s_linear_infinite]" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-0 left-3/4 w-2.5 h-2.5 bg-pink-400/30 rounded-full animate-[sakura-fall_20s_linear_infinite]" style={{animationDelay: '6s'}}></div>
          
          {/* Traditional Japanese wave patterns */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
            <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-full animate-[wave-pattern_8s_ease-in-out_infinite]">
              <path d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Zen circles - representing harmony and balance */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full animate-[zen-circle_25s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-emerald-300/15 rounded-full animate-[zen-circle_30s_ease-in-out_infinite]" style={{animationDelay: '5s'}}></div>
          
          {/* Japanese kanji characters floating subtly */}
          <div className="absolute top-1/5 left-1/6 text-white/8 font-black text-6xl animate-[float_30s_ease-in-out_infinite]" style={{fontFamily: 'serif'}}>和</div>
          <div className="absolute bottom-1/4 right-1/6 text-emerald-300/10 font-black text-5xl animate-[float_35s_ease-in-out_infinite]" style={{animationDelay: '8s', fontFamily: 'serif'}}>道</div>
          <div className="absolute top-2/3 left-1/3 text-blue-300/8 font-black text-4xl animate-[float_28s_ease-in-out_infinite]" style={{animationDelay: '15s', fontFamily: 'serif'}}>心</div>
        </div>

        {/* Row 1 - Top */}
        <div className="absolute top-16 left-0 w-full flex animate-[words-flow-right_28s_linear_infinite]">
          <div className="flex gap-16 text-white/15 font-bold text-3xl md:text-5xl whitespace-nowrap">
            <span>Break Limits</span><span>Innovation</span><span>Growth</span><span>Leadership</span><span>Transform</span><span>Vision</span><span>Excellence</span><span>Lean Management</span>
            <span>Break Limits</span><span>Innovation</span><span>Growth</span><span>Leadership</span><span>Transform</span><span>Vision</span><span>Excellence</span><span>Lean Management</span>
          </div>
        </div>
        
        {/* Row 2 - Upper Middle */}
        <div className="absolute top-1/3 left-0 w-full flex animate-[words-flow-left_32s_linear_infinite]">
          <div className="flex gap-20 text-emerald-300/20 font-semibold text-2xl md:text-4xl whitespace-nowrap">
            <span>Deep Learning</span><span>Explore</span><span>Agile Practice</span><span>Business Insight</span><span>Systems Thinking</span><span>Global Perspective</span><span>Mission Driven</span><span>Value Creation</span>
            <span>Deep Learning</span><span>Explore</span><span>Agile Practice</span><span>Business Insight</span><span>Systems Thinking</span><span>Global Perspective</span><span>Mission Driven</span><span>Value Creation</span>
          </div>
        </div>
        
        {/* Row 3 - Lower Middle */}
        <div className="absolute top-2/3 left-0 w-full flex animate-[words-flow-right_26s_linear_infinite]">
          <div className="flex gap-18 text-blue-300/18 font-medium text-xl md:text-3xl whitespace-nowrap">
            <span>Kyocera Philosophy</span><span>Toyota Way</span><span>Inamori Spirit</span><span>Amoeba Management</span><span>Kaizen Culture</span><span>Craftsmanship</span><span>Long-term</span><span>Altruistic</span>
            <span>Kyocera Philosophy</span><span>Toyota Way</span><span>Inamori Spirit</span><span>Amoeba Management</span><span>Kaizen Culture</span><span>Craftsmanship</span><span>Long-term</span><span>Altruistic</span>
          </div>
        </div>
        
        {/* Row 4 - Bottom */}
        <div className="absolute bottom-16 left-0 w-full flex animate-[words-flow-left_30s_linear_infinite]">
          <div className="flex gap-22 text-white/12 font-light text-lg md:text-2xl whitespace-nowrap">
            <span>Respect Heaven Love People</span><span>What is Right as Human Being</span><span>Six Disciplines</span><span>Character Building</span><span>Philosophy Management</span><span>12 Principles</span><span>Genchi Genbutsu</span><span>Continuous Improvement</span>
            <span>Respect Heaven Love People</span><span>What is Right as Human Being</span><span>Six Disciplines</span><span>Character Building</span><span>Philosophy Management</span><span>12 Principles</span><span>Genchi Genbutsu</span><span>Continuous Improvement</span>
          </div>
        </div>
        
        {/* Floating inspirational words */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 text-emerald-400/35 font-bold text-xl animate-[float_16s_ease-in-out_infinite]">Dreams Come True</div>
          <div className="absolute top-1/6 right-1/4 text-blue-400/30 font-semibold text-lg animate-[float_20s_ease-in-out_infinite_reverse]">Seize Opportunity</div>
          <div className="absolute bottom-1/4 left-1/6 text-purple-400/32 font-medium text-lg animate-[float_18s_ease-in-out_infinite]">Digital Transform</div>
          <div className="absolute top-3/4 right-1/5 text-orange-400/28 font-bold text-xl animate-[float_24s_ease-in-out_infinite]">Future is Now</div>
          <div className="absolute bottom-1/3 right-1/3 text-cyan-400/25 font-medium text-base animate-[float_22s_ease-in-out_infinite_reverse]">Break the Ceiling</div>
          <div className="absolute top-1/2 left-1/8 text-rose-400/30 font-semibold text-lg animate-[float_19s_ease-in-out_infinite]">Fortune 500</div>
        </div>
      </div>

      {/* Enhanced text readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45" />
      
      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-6 max-w-5xl text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)] opacity-0 translate-y-8 animate-[hero-title_1.2s_ease-out_0.3s_forwards]">
          Break the <span className="text-emerald-400 font-black animate-[text-shimmer_12s_ease-in-out_infinite]">
            RM10M
          </span> Revenue Ceiling ·<br className="hidden sm:block" /> Learn from Japan's Fortune 500
        </h1>
        <h2 className="mt-8 text-lg md:text-xl lg:text-2xl font-medium text-gray-200 leading-relaxed max-w-4xl opacity-0 translate-y-6 animate-[hero-subtitle_1s_ease-out_0.8s_forwards]">
          <span className="inline-block animate-[slide-in-left_0.8s_ease-out_1.2s_both]">6 Days 5 Nights · Kyocera / Toyota / Inamori Memorial</span><br />
          <span className="text-gray-300 inline-block animate-[slide-in-right_0.8s_ease-out_1.4s_both]">A transformative business learning journey, not just a tour</span>
        </h2>
        
        {/* CTA section with Date Display above button */}
        <div className="mt-12 flex flex-col items-center opacity-0 animate-[hero-cta_0.8s_ease-out_1.8s_forwards]">
          {/* Date Display - positioned above the CTA button */}
          <div className="mb-6 opacity-0 animate-[date-bounce-in_1.2s_ease-out_2.0s_forwards]">
            <DateDisplayEn variant="hero" />
          </div>
          
          <Button 
            variant="cta" 
            size="lg" 
            onClick={() => window.open("https://wa.me/60167100678", "_blank")} 
            className="text-lg md:text-xl px-10 py-6 font-bold rounded-full shadow-[0_8px_28px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_35px_-4px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 animate-[cta-elegant-pulse_15s_ease-in-out_infinite] transform-gpu border-2 border-emerald-500/20 hover:border-emerald-400/40"
          >
            🚀 Register Now | Limited Seats
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionEn;