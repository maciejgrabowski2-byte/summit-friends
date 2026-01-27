import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CreateEventStep4Props {
  eventName?: string;
  maxParticipants?: number;
  onContinue: (eventName: string, maxParticipants: number) => void;
}

export function CreateEventStep4({
  eventName: initialName,
  maxParticipants: initialParticipants,
  onContinue,
}: CreateEventStep4Props) {
  const [eventName, setEventName] = React.useState(initialName || "");
  const [maxParticipants, setMaxParticipants] = React.useState<string>(
    initialParticipants?.toString() || ""
  );

  const canContinue = eventName.trim().length > 0 && parseInt(maxParticipants) > 0;

  const handleContinue = () => {
    if (canContinue) {
      onContinue(eventName.trim(), parseInt(maxParticipants));
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Event details
        </h1>
        <p className="text-muted-foreground">
          Give your event a name and set the group size
        </p>
      </div>

      <div className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <Label htmlFor="event-name">Event name</Label>
          <Input
            id="event-name"
            placeholder="e.g., Sunday morning hike"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            maxLength={100}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="max-participants">Number of participants</Label>
          <Input
            id="max-participants"
            type="number"
            placeholder="e.g., 10"
            min={1}
            max={100}
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Maximum number of people who can join
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={handleContinue} size="lg" disabled={!canContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateEventStep4;
