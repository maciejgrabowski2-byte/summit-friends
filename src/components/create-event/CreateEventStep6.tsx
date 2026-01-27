import * as React from "react";
import { Train, Car, Footprints } from "lucide-react";
import { cn } from "@/lib/utils";

export type TransportType = "public" | "car" | "none";

interface TransportOption {
  id: TransportType;
  label: string;
  description: string;
  icon: React.ElementType;
}

const transportOptions: TransportOption[] = [
  {
    id: "public",
    label: "Public transport",
    description: "Train, bus, or metro",
    icon: Train,
  },
  {
    id: "car",
    label: "By car",
    description: "Carpooling or driving",
    icon: Car,
  },
  {
    id: "none",
    label: "No transport needed",
    description: "Meeting at the location",
    icon: Footprints,
  },
];

interface CreateEventStep6Props {
  selectedTransport?: TransportType;
  onContinue: (transport: TransportType) => void;
}

export function CreateEventStep6({
  selectedTransport,
  onContinue,
}: CreateEventStep6Props) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          How will you get there?
        </h1>
        <p className="text-muted-foreground">
          Choose the transportation option for your group
        </p>
      </div>

      <div className="grid gap-4 max-w-md mx-auto">
        {transportOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedTransport === option.id;

          return (
            <button
              key={option.id}
              onClick={() => onContinue(option.id)}
              className={cn(
                "flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left",
                "hover:border-primary hover:bg-primary/5",
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full",
                  isSelected ? "bg-primary/20" : "bg-muted"
                )}
              >
                <Icon
                  className={cn(
                    "w-6 h-6",
                    isSelected ? "text-primary" : "text-muted-foreground"
                  )}
                />
              </div>
              <div>
                <span
                  className={cn(
                    "block font-medium",
                    isSelected ? "text-primary" : "text-foreground"
                  )}
                >
                  {option.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {option.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CreateEventStep6;
