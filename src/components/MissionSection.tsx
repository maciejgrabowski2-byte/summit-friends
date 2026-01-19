import missionImage from "@/assets/mission-hiking.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img
                src={missionImage}
                alt="Friends hiking together in mountains"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              {t('mission.title')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t('mission.paragraph1')}
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {t('mission.paragraph2')}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary font-semibold hover:underline underline-offset-4"
            >
              {t('mission.learnMore')}
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
