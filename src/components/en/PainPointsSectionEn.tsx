import React from "react";
import businessmanImg from "@/assets/businessman-alone.png";
import stressImg1 from "@/assets/entrepreneur-stress-1.png";
import stressImg2 from "@/assets/entrepreneur-stress-2.png";
import stressImg3 from "@/assets/entrepreneur-stress-3.png";

const painPoints = [
  { text: "Left Behind by Competitors", image: stressImg1 },
  { text: "Core Talent Exodus", image: stressImg2 },
  { text: "Unable to Scale", image: stressImg3 },
];

const PainPointsSectionEn: React.FC = () => {
  return (
    <section id="pain-points" className="py-28 relative overflow-hidden min-h-screen flex items-center">
      {/* Businessman background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${businessmanImg})`,
          filter: 'brightness(0.7) contrast(1.2)'
        }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/65" />
      
      {/* Animated overlay elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/25 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center tracking-tight text-white mb-8 opacity-0 animate-[fade-in-up_1s_ease-out_forwards] intersection-observe drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          Why <span className="text-red-400 animate-[shake_2s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(248,113,113,0.6)]">95%</span> of Malaysian Businesses<br className="hidden md:block" />Remain Stuck at <span className="text-gray-300">SME</span> Level?
        </h2>
        <p className="text-center text-gray-200 text-xl md:text-2xl font-medium mb-16 opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Data doesn't lie, reality is harsher
        </p>
        
        <div className="grid sm:grid-cols-3 gap-12 max-w-7xl mx-auto mb-20">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center gap-8 bg-white/10 backdrop-blur-lg rounded-3xl px-10 py-16 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:bg-white/15 transition-all duration-700 text-white font-bold text-xl md:text-2xl opacity-0 animate-[slide-up-bounce_0.8s_ease-out_forwards] hover:scale-105 transform-gpu hover:-translate-y-2 min-h-[320px]"
              style={{ animationDelay: `${0.5 + i * 0.2}s` }}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-red-400 to-red-600 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-28 transition-all duration-500" />
              
              {/* Entrepreneur stress image */}
              <div className="relative z-10 flex items-center justify-center w-32 h-24 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                <img 
                  src={p.image} 
                  alt={p.text}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 rounded-2xl shadow-lg group-hover:shadow-xl"
                />
              </div>
              
              {/* Text with better typography */}
              <span className="relative z-10 text-center font-semibold text-2xl md:text-3xl leading-tight tracking-wide group-hover:text-red-100 transition-colors duration-500">{p.text}</span>
              
              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-red-400 to-red-600 group-hover:w-4/5 transition-all duration-700 transform -translate-x-1/2 shadow-[0_0_10px_rgba(248,113,113,0.8)]" />
            </div>
          ))}
        </div>
        
        <div className="text-center opacity-0 animate-[fade-in-up_1s_ease-out_1.5s_forwards]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-4 mb-8">
              {/* Emoji with animation */}
              <div className="text-6xl animate-[bounce_2s_ease-in-out_infinite] mb-2">👉</div>
              
              {/* Main text with typography hierarchy */}
              <div className="space-y-3">
                <p className="text-yellow-300 text-lg md:text-xl font-light tracking-widest uppercase drop-shadow-lg">
                  THIS IS WHY
                </p>
                
                <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-tight">
                  You Need to<span className="text-white font-black"> Journey to Japan</span>
                </h3>
                
                <div className="relative inline-block group cursor-pointer">
                  <span className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-400 via-green-500 to-cyan-400 bg-clip-text text-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 tracking-wider">
                    Fortune-500
                  </span>
                  
                  {/* Simple decorative elements */}
                  <div className="absolute -top-2 -left-4 w-8 h-8 border-l-4 border-t-4 border-emerald-400 rounded-tl-lg animate-[float_3s_ease-in-out_infinite]"></div>
                  <div className="absolute -bottom-2 -right-4 w-8 h-8 border-r-4 border-b-4 border-emerald-400 rounded-br-lg animate-[float_3s_ease-in-out_infinite_reverse]"></div>
                </div>
                
                <p className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide drop-shadow-lg">
                  Learn the <span className="text-orange-300 font-bold">Breakthrough Path</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced decorative line */}
          <div className="relative flex justify-center items-center mt-6">
            <div className="w-4 h-4 bg-emerald-400 rounded-full animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>
            <div className="w-32 h-2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-4 rounded-full animate-[expand_2s_ease-out_2.5s_forwards] transform scale-x-0 shadow-[0_0_30px_rgba(34,197,94,0.8)]"></div>
            <div className="w-4 h-4 bg-emerald-400 rounded-full animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_20px_rgba(34,197,94,0.8)]" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSectionEn;