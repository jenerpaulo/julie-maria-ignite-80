import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";
import julieMariaHero from "@/assets/julie-maria-hero.jpg";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-semibold mb-4">
                ✨ Empowering Women Worldwide
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Transform Your Life,
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Ignite Your Power
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              I'm Julie Maria, and I believe every woman has the power to create extraordinary change. 
              Through speaking, consulting, and empowering resources, I help women unlock their potential 
              and step into their greatness.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-semibold">10k+ Women Empowered</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Star className="w-5 h-5 text-secondary" />
                <span className="font-semibold">500+ Speaking Events</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span className="font-semibold">3 Bestselling Books</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => handleScroll("#contact")}
                className="group"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => handleScroll("#about")}
                className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow">
                <img 
                  src={julieMariaHero} 
                  alt="Julie Maria - Empowerment Coach and Speaker"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;