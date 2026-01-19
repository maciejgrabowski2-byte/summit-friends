import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

import hikingImg from "@/assets/activity-hiking.jpg";
import climbingImg from "@/assets/activity-climbing.jpg";
import cyclingImg from "@/assets/activity-cycling.jpg";
import waterImg from "@/assets/activity-water.jpg";

const ActivityTags = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const activities = [
    { name: t('activities.hiking'), image: hikingImg, count: "3.2k" },
    { name: t('activities.climbing'), image: climbingImg, count: "890" },
    { name: t('activities.cycling'), image: cyclingImg, count: "1.5k" },
    { name: t('activities.waterSports'), image: waterImg, count: "620" },
    { name: t('activities.running'), image: hikingImg, count: "980" },
    { name: t('activities.skiing'), image: climbingImg, count: "450" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">{t('activities.title')}</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        >
          {activities.map((activity, index) => (
            <a
              key={activity.name}
              href="#"
              className="group flex-shrink-0 relative w-40 h-48 rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-primary-foreground">{activity.name}</p>
                <p className="text-xs text-primary-foreground/80">{activity.count} {t('activities.events')}</p>
              </div>
            </a>
          ))}
          
          {/* All activities card */}
          <a
            href="#"
            className="flex-shrink-0 w-40 h-48 rounded-xl bg-primary flex flex-col items-center justify-center text-primary-foreground hover:bg-primary-hover transition-colors shadow-card hover:shadow-hover"
          >
            <span className="text-2xl mb-2">→</span>
            <p className="text-sm font-semibold">{t('activities.allActivities')}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivityTags;
