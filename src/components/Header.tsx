import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isEnglish = location.pathname === '/en';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const handleLanguageSwitch = () => {
    if (isEnglish) {
      navigate('/');
    } else {
      navigate('/en');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/20 backdrop-blur-xl shadow-2xl border-b border-white/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Bino EduTour" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white drop-shadow-xl">
              {isEnglish ? "Bino Study Tour" : "百诺研学"}
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("hero")} className="text-white/80 hover:text-white px-3 py-2">
              {isEnglish ? "Home" : "首页"}
            </button>
            <button onClick={() => scrollToSection("highlights")} className="text-white/80 hover:text-white px-3 py-2">
              {isEnglish ? "Highlights" : "项目亮点"}
            </button>
            <button onClick={() => scrollToSection("itinerary")} className="text-white/80 hover:text-white px-3 py-2">
              {isEnglish ? "Itinerary" : "行程安排"}
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-white/80 hover:text-white px-3 py-2">
              {isEnglish ? "Pricing" : "价格与包含项"}
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-white/80 hover:text-white px-3 py-2">
              {isEnglish ? "Contact" : "报名与联系"}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Switch */}
            <button
              onClick={handleLanguageSwitch}
              className="flex items-center space-x-2 px-3 py-2 text-white/80 hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm font-medium">
                {isEnglish ? "中文" : "EN"}
              </span>
            </button>

            <Button variant="cta" size="sm" onClick={() => window.open("https://wa.me/60167100678", "_blank")} className="bg-emerald-600 hover:bg-emerald-500">
              {isEnglish ? "Register Now" : "立即报名"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
