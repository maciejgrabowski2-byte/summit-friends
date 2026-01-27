import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

interface CreateEventStep2Props {
  selectedRouteId?: string;
  onContinue: (routeId?: string) => void;
}

export function CreateEventStep2({ selectedRouteId, onContinue }: CreateEventStep2Props) {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          {t('createEvent.step2.title')}
        </h1>
        <p className="text-muted-foreground">
          {t('createEvent.step2.subtitle')}
        </p>
      </div>

      {/* Stub content - route selection will be implemented later */}
      <div className="min-h-[300px] flex items-center justify-center border-2 border-dashed border-border rounded-xl bg-muted/30">
        <p className="text-muted-foreground text-center px-4">
          {t('createEvent.step2.placeholder')}
        </p>
      </div>

      <div className="flex justify-center">
        <Button onClick={() => onContinue(selectedRouteId)} size="lg">
          {t('createEvent.continue')}
        </Button>
      </div>
    </div>
  );
}

export default CreateEventStep2;
