import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import DateDisplayEn from "./DateDisplayEn";
import jessonPhoto from "../../assets/jesson3.png";
import backgroundImg from "../../assets/shushi4.jpg";

const ContactSectionEn = () => {
  return (
    <section 
      id="contact" 
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Particle animation background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Registration & Contact
          </h2>
          
          {/* Date Display positioned prominently */}
          <div className="mb-8 flex justify-center">
            <DateDisplayEn variant="contact" className="animate-[date-bounce-in_1s_ease-out_0.2s_forwards]" />
          </div>
          
          <p className="text-xl text-white/80 backdrop-blur-sm bg-white/10 rounded-full px-8 py-3 inline-block border border-white/20">
            For any inquiries, please contact:
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Glassmorphism Contact Card */}
          <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 p-8 mb-12 animate-fade-in-up shadow-2xl" 
               style={{animationDelay: '0.3s'}}>
            {/* Simple floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/15 rounded-full blur-xl animate-float-delayed"></div>
            
            <div className="relative z-10">
              {/* Header section */}
              <div className="text-center mb-10">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"></div>
                  <h3 className="relative text-3xl font-bold text-white mb-2 px-6 py-3">
                    Jesson Lim 林杰鑫
                  </h3>
                </div>
                <p className="text-lg text-white/80 bg-white/15 backdrop-blur-sm rounded-full px-6 py-2 inline-block border border-white/20">
                  Edu Tour Leader
                </p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-8">
                <div className="group relative bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                      <Mail className="relative w-8 h-8 text-white flex-shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Email:</p>
                      <a href="mailto:bino.edutour@outlook.com" className="text-white/80 hover:text-white transition-colors text-lg">
                        bino.edutour@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                      <Phone className="relative w-8 h-8 text-white flex-shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phone:</p>
                      <a href="tel:+60167100678" className="text-white/80 hover:text-white transition-colors text-lg">
                        +60 16 710 0678
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="relative mt-1">
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                      <MapPin className="relative w-8 h-8 text-white flex-shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Address:</p>
                      <p className="text-white/80 leading-relaxed">
                        Suite No. 9-7, Wisma UOA 2, 21 Jalan Pinang, 50450 Kuala Lumpur, Malaysia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl animate-pulse"></div>
              <Button 
                onClick={() => window.open("https://wa.me/60167100678", "_blank")}
                className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-2xl px-16 py-8 rounded-2xl border-2 border-white/30 shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center space-x-3">
                  <span>Register Now</span>
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionEn;