import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="cta"
        size="lg"
        onClick={() => window.open("https://wa.me/60167100678", "_blank")}
        className="rounded-full px-6 py-3 text-base font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 md:px-8 md:py-4"
      >
        <span className="hidden sm:inline">Sign Up Now / </span>立即报名
      </Button>
    </div>
  );
};

export default FloatingCTA;