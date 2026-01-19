import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hiking.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
                {t('hero.title')}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                {t('hero.description')}
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('hero.searchPlaceholder')}
                  className="pl-10 h-12 bg-secondary border-0 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button variant="primary" size="lg" className="h-12 px-6">
                <Search className="w-5 h-5 mr-2" />
                {t('hero.explore')}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-8 pt-2 md:pt-4">
              <div>
                <p className="text-xl md:text-2xl font-bold text-foreground">12k+</p>
                <p className="text-xs md:text-sm text-muted-foreground">{t('hero.activeMembers')}</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs md:text-sm text-muted-foreground">{t('hero.eventsMonthly')}</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-foreground">25+</p>
                <p className="text-xs md:text-sm text-muted-foreground">{t('hero.countries')}</p>
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
                  <p className="text-sm font-semibold text-foreground">{t('hero.nextAdventure')}</p>
                  <p className="text-xs text-muted-foreground">{t('hero.thisSaturday')}</p>
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
