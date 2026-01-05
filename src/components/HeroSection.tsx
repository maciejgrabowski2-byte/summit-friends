import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hiking.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
                Adventures are better with buddies
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Hiking Buddies is a non-profit community of outdoor and sport lovers. Join an upcoming hiking, climbing, cycling – you name it – event or organise your own and enjoy your adventures with like-minded people!
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search location or activity..."
                  className="pl-10 h-12 bg-secondary border-0 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button variant="primary" size="lg" className="h-12 px-6">
                <Search className="w-5 h-5 mr-2" />
                Explore
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-foreground">12k+</p>
                <p className="text-sm text-muted-foreground">Active members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Events monthly</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">25+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Hikers on mountain ridge at sunrise"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-lg">🥾</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Next Adventure</p>
                  <p className="text-xs text-muted-foreground">This Saturday, 8 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
