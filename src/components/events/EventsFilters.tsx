import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const EventsFilters = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 mb-8 flex-wrap">
      <Button variant="outline" className="rounded-full text-sm font-medium">
        {t('events.filters.upcomingEvents')}
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
        {t('events.filters.fromMunich')}
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
        {t('events.filters.allActivities')}
        <ChevronDown className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
};

export default EventsFilters;
