import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsFilters = () => {
  return (
    <div className="flex items-center gap-2 mb-8 flex-wrap">
      <Button variant="outline" className="rounded-full text-sm font-medium">
        Upcoming events
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
        From Munich
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
        All activities
        <ChevronDown className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
};

export default EventsFilters;
