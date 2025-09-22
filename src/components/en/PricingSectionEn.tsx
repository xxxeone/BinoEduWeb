import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

// Import testimony images
import React, { useState } from 'react';
import testimony1 from '../../assets/Testimony 2/14.png';
import testimony2 from '../../assets/Testimony 2/15.png';
import testimony3 from '../../assets/Testimony 2/16.png';
import testimony4 from '../../assets/Testimony 2/17.png';
import testimony5 from '../../assets/Testimony 2/18.png';
import testimony6 from '../../assets/Testimony 2/19.png';

const PricingSectionEn = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const plans = [
    {
      title: "Twin Sharing",
      price: "RM 7,999",
      discount: "2 pax together RM 7,599 / person",
      includes: [
  "Meals (5 breakfasts, 1 lunch & 2 dinners)",
  "Corporate visits & activity arrangements",
  "Bilingual mentors & learning guidance",
  "Amoeba/Lean workshop (review templates)",
  "VVIP networking connections",
  "4-star or above hotels"
      ],
      excludes: "Flight tickets"
    },
    {
      title: "Single Room Upgrade",
      price: "RM 9,899 / person", 
      discount: null,
      includes: [
  "Meals (5 breakfasts, 1 lunch & 2 dinners)",
  "Corporate visits & activity arrangements",
  "Bilingual mentors & learning guidance",
  "Amoeba/Lean workshop (review templates)",
  "VVIP networking connections",
  "4-star or above hotels"
      ],
      excludes: "Flight tickets"
    }
  ];

  // Testimony images
  const testimonyImages = [
    testimony1,
    testimony2,
    testimony3,
    testimony4,
    testimony5,
    testimony6
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Glass particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6 animate-slide-in-view">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium tracking-wider border border-white/30 shadow-lg">
              Investment Value
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-slide-in-view">
            Exceptional Business Edu Tour
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/40 via-white to-white/40 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Premium business itinerary · Exclusive networking resources · Entrepreneur mindset upgrade
          </p>
        </div>
  <div className="space-y-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-8
                group transition-all duration-500 hover:bg-white/20 hover:shadow-3xl hover:-translate-y-2 hover:scale-[1.02]
                animate-fade-in-up
                ${index === 0 ? 'ring-2 ring-white/30 border-white/40' : ''}
              `}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Floating particles inside card */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Premium badge for first plan */}
              {index === 0 && (
                <div className="absolute -top-4 left-8 animate-bounce" style={{animationDelay: '1s'}}>
                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-lg">
                    Recommended
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
                {/* Left side - Plan info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl font-black text-white animate-slide-in-view">{plan.title}</h3>
                    {plan.discount && (
                      <span className="bg-green-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-green-500/60 animate-pulse shadow-lg shadow-green-500/20">
                        Limited Time
                      </span>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="animate-fade-in-up" style={{animationDelay: `${index * 0.2 + 0.3}s`}}>
                      <h4 className="font-bold text-gray-200 mb-4 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        Included Services
                      </h4>
                      <ul className="space-y-3">
                        {plan.includes.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base text-gray-300 group/item animate-slide-in-view" style={{animationDelay: `${index * 0.2 + idx * 0.1 + 0.5}s`}}>
                            <span className="w-2 h-2 bg-gradient-to-r from-white/60 to-white/80 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                            <span className="leading-relaxed group-hover/item:text-white transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 flex items-center gap-3 text-base text-gray-400 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <span className="font-semibold text-gray-300">Excludes:</span>
                        <span>{plan.excludes}</span>
                      </div>
                    </div>
                    
                    <div className="animate-fade-in-up" style={{animationDelay: `${index * 0.2 + 0.4}s`}}>
                      <h4 className="font-bold text-gray-200 mb-4 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        &nbsp;
                      </h4>
                      <ul className="space-y-3">
                        {plan.includes.slice(3).map((item, idx) => (
                          <li key={idx + 3} className="flex items-start gap-3 text-base text-gray-300 group/item animate-slide-in-view" style={{animationDelay: `${index * 0.2 + (idx + 3) * 0.1 + 0.5}s`}}>
                            <span className="w-2 h-2 bg-gradient-to-r from-white/60 to-white/80 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                            <span className="leading-relaxed group-hover/item:text-white transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right side - Pricing and CTA */}
                <div className="lg:text-right animate-fade-in-up" style={{animationDelay: `${index * 0.2 + 0.6}s`}}>
                  <div className="mb-6">
                    <div className="text-5xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-500">
                      {plan.price}
                    </div>
                    {plan.discount && (
                      <div className="text-lg font-bold text-gray-200 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                        {plan.discount}
                      </div>
                    )}
                  </div>
                  
                  <Button
                    variant="cta"
                    size="lg"
                    className={`
                      px-10 py-4 text-lg font-bold rounded-xl transition-all duration-500
                      transform hover:scale-110 hover:-translate-y-1 hover:shadow-2xl
                      relative overflow-hidden group/btn
                      ${index === 0 
                        ? 'bg-green-600 backdrop-blur-sm text-white border border-green-500 hover:bg-green-500 shadow-lg shadow-green-500/20 animate-pulse' 
                        : 'bg-green-600 backdrop-blur-sm text-white border border-green-500 hover:bg-green-500 shadow-lg shadow-green-500/20 animate-pulse'
                      }
                    `}
                    style={{
                      boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1)',
                      animation: 'pulse 3s ease-in-out infinite'
                    }}
                    onClick={() => window.open("https://wa.me/60167100678", "_blank")}
                  >
                    {/* Button green glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-300/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      Register Now
                      <span className="text-xl group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl px-12 py-10 max-w-4xl shadow-2xl relative overflow-hidden group hover:bg-white/20 transition-all duration-500">
            {/* Glass particles in progress bar */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full animate-float-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </div>
            
            <div className="relative z-10 space-y-8">
              {/* Title and highlights */}
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-black text-white mb-4 animate-slide-in-view" style={{animationDelay: '1.1s'}}>
                  Limited Seats - Booking Now
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fade-in-up" style={{animationDelay: '1.3s'}}>
                    <div className="font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent text-lg mb-1">Exclusive Mentors</div>
                    <div className="text-gray-300">Bilingual business mentors</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                    <div className="font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent text-lg mb-1">Deep Visits</div>
                    <div className="text-gray-300">Fortune 500 internal exchanges</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                    <div className="font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent text-lg mb-1">Network Resources</div>
                    <div className="text-gray-300">VVIP business circle connections</div>
                  </div>
                </div>
              </div>

              {/* Progress section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between text-gray-200 font-semibold text-lg">
                  <span className="animate-slide-in-view" style={{animationDelay: '1.6s'}}>Registered</span>
                  <span className="animate-slide-in-view" style={{animationDelay: '1.7s'}}>Remaining Seats</span>
                </div>
                
                <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-4 border border-white/30 shadow-inner overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 h-4 rounded-full transition-all duration-2000 ease-out relative overflow-hidden animate-slide-in-view shadow-lg shadow-green-500/30" 
                    style={{width: '71.4%', animationDelay: '1.8s'}}
                  >
                    {/* Progress bar shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-center animate-fade-in-up" style={{animationDelay: '2s'}}>
                    <div className="font-black text-white text-2xl">25</div>
                    <div className="text-gray-400 text-sm">Entrepreneurs</div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/30 animate-pulse" style={{animationDelay: '2.1s'}}>
                    <div className="font-black text-white text-xl">25/35</div>
                    <div className="text-gray-300 text-xs">Total Seats</div>
                  </div>
                  <div className="text-center animate-fade-in-up" style={{animationDelay: '2.2s'}}>
                    <div className="font-black text-green-400 text-2xl">10</div>
                    <div className="text-gray-400 text-sm">Last Seats</div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-300/30 animate-fade-in-up" style={{animationDelay: '2.3s'}}>
                <div className="text-red-300 font-bold text-lg mb-2">Booking Reminder</div>
                <div className="text-gray-300 text-sm">Only 2 sessions per year, miss this and wait 6 months</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-32 animate-fade-in-up" style={{animationDelay: '2.5s'}}>
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Entrepreneurs Rave Reviews
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-white/40 via-white to-white/40 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real feedback from past entrepreneurs, witnessing the edu tour's exceptional value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
            {testimonyImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-2 transition-all duration-500 hover:bg-white/15 hover:scale-[1.02] hover:-translate-y-1 animate-fade-in-up cursor-pointer active:scale-95"
                style={{animationDelay: `${2.7 + index * 0.15}s`}}
                onClick={() => setSelectedImage(image)}
              >
                {/* Hover color overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl border border-white/20">
                  <img
                    src={image}
                    alt={`Entrepreneur Review ${index + 1}`}
                    className="w-full h-auto object-cover saturate-[0.2] group-hover:saturate-100 transition-all duration-500 transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Click indicator */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[95vh] w-full animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Entrepreneur Review Enlarged"
              className="w-full h-auto object-contain rounded-2xl border-2 border-white/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSectionEn;