import * as React from "react";
import { createPortal } from "react-dom";
import { X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import CreateEventStep1 from "./CreateEventStep1";
import CreateEventStep2 from "./CreateEventStep2";
import CreateEventStep3 from "./CreateEventStep3";

const STORAGE_KEY = "create-event-draft";

export type ActivityType = "hiking" | "cycling" | "climbing" | "skiing" | "bouldering" | "social";

export interface CreateEventData {
  activity?: ActivityType;
  routeId?: string;
  date?: Date;
  time?: string;
}

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function getStoredData(): CreateEventData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Restore Date object
      if (parsed.date) {
        parsed.date = new Date(parsed.date);
      }
      return parsed;
    }
  } catch {
    // Ignore parse errors
  }
  return {};
}

function storeData(data: CreateEventData) {
  try {
    const hasData = data.activity || data.routeId || data.date || data.time;
    if (hasData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } else {
      // Clear storage if no meaningful data
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Ignore storage errors
  }
}

function clearStoredData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore errors
  }
}

export function CreateEventModal({ isOpen, onClose }: CreateEventModalProps) {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState<CreateEventData>(getStoredData);
  const [showDiscardDialog, setShowDiscardDialog] = React.useState(false);

  // Check if user has entered any data
  const hasUnsavedChanges = React.useMemo(() => {
    return !!(data.activity || data.routeId || data.date || data.time);
  }, [data]);

  // Determine total steps based on activity
  const requiresRouteStep = data.activity === "hiking" || data.activity === "cycling" || data.activity === "climbing";
  const totalSteps = requiresRouteStep ? 3 : 2;

  // Calculate actual step for display
  const getDisplayStep = () => {
    if (!requiresRouteStep && step === 3) {
      return 2; // Skip route step in display
    }
    return step;
  };

  // Persist data to localStorage
  React.useEffect(() => {
    storeData(data);
  }, [data]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseAttempt();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, hasUnsavedChanges]);

  const handleCloseAttempt = () => {
    if (hasUnsavedChanges) {
      setShowDiscardDialog(true);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  const handleDiscard = () => {
    clearStoredData();
    setData({});
    setStep(1);
    setShowDiscardDialog(false);
    onClose();
  };

  const handleBack = () => {
    if (step === 3 && !requiresRouteStep) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };

  const handleStep1Continue = (activity: ActivityType) => {
    setData((prev) => ({ ...prev, activity }));
    if (activity === "hiking" || activity === "cycling" || activity === "climbing") {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const handleStep2Continue = (routeId?: string) => {
    setData((prev) => ({ ...prev, routeId }));
    setStep(3);
  };

  const handleStep3Continue = (date: Date, time: string) => {
    setData((prev) => ({ ...prev, date, time }));
    // For now, just log and close - future: submit to database
    console.log("Event data:", { ...data, date, time });
    clearStoredData();
    setData({});
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  const progressValue = (getDisplayStep() / totalSteps) * 100;

  const modalContent = (
    <>
      <div className="fixed inset-0 z-[100] bg-background">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-[100] bg-background border-b border-border">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Back button */}
              <div className="w-24">
                {step > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBack}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                )}
              </div>

              {/* Progress indicator */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {getDisplayStep()} / {totalSteps}
                </span>
                <div className="w-24 sm:w-32">
                  <Progress value={progressValue} className="h-2" />
                </div>
              </div>

              {/* Close button */}
              <div className="w-24 flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCloseAttempt}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto pt-16">
          {step === 2 ? (
            <div className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-12">
              <CreateEventStep2
                selectedRouteId={data.routeId}
                onContinue={handleStep2Continue}
              />
            </div>
          ) : (
            <div className="max-w-[800px] w-full mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
              {step === 1 && (
                <CreateEventStep1
                  selectedActivity={data.activity}
                  onContinue={handleStep1Continue}
                />
              )}
              {step === 3 && (
                <CreateEventStep3
                  selectedDate={data.date}
                  selectedTime={data.time}
                  onContinue={handleStep3Continue}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Discard confirmation dialog */}
      <AlertDialog open={showDiscardDialog} onOpenChange={setShowDiscardDialog}>
        <AlertDialogContent className="z-[200]">
          <AlertDialogHeader>
            <AlertDialogTitle>You have unsaved changes</AlertDialogTitle>
            <AlertDialogDescription>
              What would you like to do?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue editing</AlertDialogCancel>
            <AlertDialogAction onClick={handleDiscard} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Discard
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );

  return createPortal(modalContent, document.body);
}

export default CreateEventModal;
