import { Button } from "@/components/ui/button";

interface CreateEventStep2Props {
  selectedRouteId?: string;
  onContinue: (routeId?: string) => void;
}

export function CreateEventStep2({ selectedRouteId, onContinue }: CreateEventStep2Props) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Pick a route for your group
        </h1>
        <p className="text-muted-foreground">
          Select an existing route or create a new one
        </p>
      </div>

      {/* Stub content - route selection will be implemented later */}
      <div className="min-h-[300px] flex items-center justify-center border-2 border-dashed border-border rounded-xl bg-muted/30">
        <p className="text-muted-foreground text-center px-4">
          Route selection coming soon...
        </p>
      </div>

      <div className="flex justify-center">
        <Button onClick={() => onContinue(selectedRouteId)} size="lg">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateEventStep2;
