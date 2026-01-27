import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CreateEventStep5Props {
  description?: string;
  addDisclaimer?: boolean;
  onContinue: (description: string, addDisclaimer: boolean) => void;
}

export function CreateEventStep5({
  description: initialDescription,
  addDisclaimer: initialDisclaimer,
  onContinue,
}: CreateEventStep5Props) {
  const [description, setDescription] = React.useState(initialDescription || "");
  const [addDisclaimer, setAddDisclaimer] = React.useState(initialDisclaimer || false);

  const handleContinue = () => {
    onContinue(description.trim(), addDisclaimer);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Describe your event
        </h1>
        <p className="text-muted-foreground">
          Add any details participants should know
        </p>
      </div>

      <div className="space-y-6 max-w-lg mx-auto">
        <div className="space-y-2">
          <Label htmlFor="description">Event description</Label>
          <Textarea
            id="description"
            placeholder="Tell people what to expect, what to bring, skill level required..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            maxLength={1000}
          />
          <p className="text-xs text-muted-foreground text-right">
            {description.length}/1000 characters
          </p>
        </div>

        <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
          <Checkbox
            id="disclaimer"
            checked={addDisclaimer}
            onCheckedChange={(checked) => setAddDisclaimer(checked === true)}
          />
          <div className="space-y-1">
            <Label htmlFor="disclaimer" className="cursor-pointer font-medium">
              Add liability disclaimer
            </Label>
            <p className="text-xs text-muted-foreground">
              Include a standard disclaimer that participants join at their own risk
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={handleContinue} size="lg">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateEventStep5;
