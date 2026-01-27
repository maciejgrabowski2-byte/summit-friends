import { Mountain, Bike, Axe, Snowflake, Circle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import type { ActivityType } from "./CreateEventModal";

interface ActivityOption {
  id: ActivityType;
  labelKey: string;
  icon: React.ElementType;
}

const activities: ActivityOption[] = [
  { id: "hiking", labelKey: "createEvent.activities.hiking", icon: Mountain },
  { id: "cycling", labelKey: "createEvent.activities.cycling", icon: Bike },
  { id: "climbing", labelKey: "createEvent.activities.climbing", icon: Axe },
  { id: "skiing", labelKey: "createEvent.activities.skiing", icon: Snowflake },
  { id: "bouldering", labelKey: "createEvent.activities.bouldering", icon: Circle },
  { id: "social", labelKey: "createEvent.activities.social", icon: Users },
];

interface CreateEventStep1Props {
  selectedActivity?: ActivityType;
  onContinue: (activity: ActivityType) => void;
}

export function CreateEventStep1({ selectedActivity, onContinue }: CreateEventStep1Props) {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          {t('createEvent.step1.title')}
        </h1>
        <p className="text-muted-foreground">
          {t('createEvent.step1.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          const isSelected = selectedActivity === activity.id;
          
          return (
            <button
              key={activity.id}
              onClick={() => onContinue(activity.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-3 p-6 sm:p-8 rounded-xl border-2 transition-all",
                "hover:border-primary hover:bg-primary/5",
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card"
              )}
            >
              <Icon className={cn(
                "w-8 h-8 sm:w-10 sm:h-10",
                isSelected ? "text-primary" : "text-muted-foreground"
              )} />
              <span className={cn(
                "text-sm sm:text-base font-medium",
                isSelected ? "text-primary" : "text-foreground"
              )}>
                {t(activity.labelKey)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CreateEventStep1;
