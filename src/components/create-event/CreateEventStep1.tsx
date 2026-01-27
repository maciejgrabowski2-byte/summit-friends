import { Mountain, Bike, Axe, Snowflake, Circle, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ActivityType } from "./CreateEventModal";

interface ActivityOption {
  id: ActivityType;
  label: string;
  icon: React.ElementType;
}

const activities: ActivityOption[] = [
  { id: "hiking", label: "Hiking", icon: Mountain },
  { id: "cycling", label: "Cycling", icon: Bike },
  { id: "climbing", label: "Climbing", icon: Axe },
  { id: "skiing", label: "Skiing", icon: Snowflake },
  { id: "bouldering", label: "Bouldering", icon: Circle },
  { id: "social", label: "Social", icon: Users },
];

interface CreateEventStep1Props {
  selectedActivity?: ActivityType;
  onContinue: (activity: ActivityType) => void;
}

export function CreateEventStep1({ selectedActivity, onContinue }: CreateEventStep1Props) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          What kind of adventure?
        </h1>
        <p className="text-muted-foreground">
          Choose the activity type for your event
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
                {activity.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CreateEventStep1;
