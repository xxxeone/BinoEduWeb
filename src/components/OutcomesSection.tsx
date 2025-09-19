import React from "react";
import airportImg from "@/assets/airport.png";
import kyoceraLogo from "@/assets/kyocera-logo.png";
import toyotaLogo from "@/assets/toyota-logo.svg";

const outcomes = [
  { 
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-xl p-2 shadow-lg">
        <img src={kyoceraLogo} alt="Kyocera" className="w-12 h-12 object-contain" />
      </div>
    ),
    title: "京瓷总部", 
    desc: "世界500强长期主义成长公式与阿米巴暗逻辑" 
  },
  { 
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-xl p-2 shadow-lg">
        <img src={toyotaLogo} alt="Toyota" className="w-12 h-12 object-contain" />
      </div>
    ),
    title: "丰田总部", 
    desc: "精益生产 · Kaizen 持续改善的现场机制" 
  },
  { 
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-xl p-3 shadow-lg">
        <svg className="w-10 h-10 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M6.5 2H20V17H6.5C5.11929 17 4 15.8807 4 14.5V4.5C4 3.11929 5.11929 2 6.5 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 7H16" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 11H13" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    ),
    title: "稻盛纪念馆", 
    desc: "利他哲学与经营心法内化：使命、价值、团队" 
  },
  { 
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-xl p-3 shadow-lg">
        <svg className="w-10 h-10 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21V19C23 18.1645 22.7155 17.3551 22.2094 16.7006C21.7033 16.0461 20.9973 15.5829 20.2 15.3954" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    ),
    title: "企业家社群", 
    desc: "同频圈层 · 长期同行 · 行动复盘与共创" 
  },
];

const OutcomesSection: React.FC = () => {
  return (
    <section id="outcomes" className="py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Airport Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${airportImg})`,
          filter: 'brightness(0.5) contrast(1.1)'
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-900/50 to-slate-800/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      {/* Subtle animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite_reverse]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 opacity-0 animate-[fade-in-up_1s_ease-out_forwards] intersection-observe drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
            这 <span className="text-emerald-400 font-black">6</span> 天，你将获得什么？
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 font-semibold opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards] drop-shadow-lg">
            不只是参访，更是一次企业基因的重新编程
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:bg-white/15 transition-all duration-700 overflow-hidden opacity-0 animate-[slide-up-bounce_0.8s_ease-out_forwards] hover:scale-105 transform-gpu hover:-translate-y-2"
              style={{ animationDelay: `${0.4 + i * 0.15}s` }}
            >
              {/* Glowing background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col gap-6 items-center text-center">
                <div className="group-hover:scale-110 transform transition-all duration-500">
                  {o.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-emerald-100 transition-colors drop-shadow-lg">
                  {o.title}
                </h3>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium group-hover:text-gray-100 transition-colors">
                  {o.desc}
                </p>
              </div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500" />
              
              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-4/5 transition-all duration-700 transform -translate-x-1/2 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA enhancement */}
        <div className="text-center mt-20 opacity-0 animate-[fade-in-up_1s_ease-out_2s_forwards]">
          <p className="text-2xl md:text-3xl text-gray-200 font-bold mb-8 drop-shadow-lg">
            限量席位 · 立即行动 · 改变企业命运
          </p>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 rounded-full animate-[expand_2s_ease-out_2.5s_forwards] transform scale-x-0 shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
