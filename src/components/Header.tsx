import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/20 backdrop-blur-xl shadow-2xl border-b border-white/30" : "bg-black/10 backdrop-blur-lg"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Bino EduTour" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white drop-shadow-xl">百诺研学</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("hero")} className="transition-all duration-300 text-white/80 hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-md">
              首页
            </button>
            <button onClick={() => scrollToSection("highlights")} className="transition-all duration-300 text-white/80 hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-md">
              项目亮点
            </button>
            <button onClick={() => scrollToSection("itinerary")} className="transition-all duration-300 text-white/80 hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-md">
              行程安排
            </button>
            <button onClick={() => scrollToSection("pricing")} className="transition-all duration-300 text-white/80 hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-md">
              价格与包含项
            </button>
            <button onClick={() => scrollToSection("contact")} className="transition-all duration-300 text-white/80 hover:text-white hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-md">
              报名与联系
            </button>
          </nav>

          <Button variant="cta" size="sm" onClick={() => window.open("https://wa.me/60167100678", "_blank")} className="hidden md:inline-flex bg-emerald-600/70 backdrop-blur-md hover:bg-emerald-500/80 border border-emerald-300/40 shadow-xl">
            立即报名
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;