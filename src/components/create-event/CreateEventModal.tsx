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
import CreateEventStep4 from "./CreateEventStep4";
import CreateEventStep5 from "./CreateEventStep5";
import CreateEventStep6, { type TransportType } from "./CreateEventStep6";
import CreateEventStep7, { type TransportDetails } from "./CreateEventStep7";
import CreateEventPreview from "./CreateEventPreview";

const STORAGE_KEY = "create-event-draft";

export type ActivityType = "hiking" | "cycling" | "climbing" | "skiing" | "bouldering" | "social";

export interface CreateEventData {
  // Step 1: Activity
  activity?: ActivityType;
  // Step 2: Route (conditional)
  routeId?: string;
  // Step 3: Date and Time
  date?: Date;
  time?: string;
  // Step 4: Event Details
  eventName?: string;
  maxParticipants?: number;
  // Step 5: Event Description
  description?: string;
  addDisclaimer?: boolean;
  // Step 6: Transportation
  transportType?: TransportType;
  // Step 7: Transport Details
  meetingPoint?: string;
  ticketCost?: string;
  instructions?: string;
  pickUpLocation?: string;
  fuelCost?: string;
  carDescription?: string;
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
    const hasData = data.activity || data.routeId || data.date || data.time || 
                    data.eventName || data.description || data.transportType;
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

// Step definitions for the flow
const STEP_ACTIVITY = 1;
const STEP_ROUTE = 2;
const STEP_DATE_TIME = 3;
const STEP_DETAILS = 4;
const STEP_DESCRIPTION = 5;
const STEP_TRANSPORT = 6;
const STEP_TRANSPORT_DETAILS = 7;
const STEP_PREVIEW = 8;

export function CreateEventModal({ isOpen, onClose }: CreateEventModalProps) {
  const [step, setStep] = React.useState(STEP_ACTIVITY);
  const [data, setData] = React.useState<CreateEventData>(getStoredData);
  const [showDiscardDialog, setShowDiscardDialog] = React.useState(false);
  const [isPublishing, setIsPublishing] = React.useState(false);

  // Check if user has entered any data
  const hasUnsavedChanges = React.useMemo(() => {
    return !!(data.activity || data.routeId || data.date || data.time || 
              data.eventName || data.description || data.transportType);
  }, [data]);

  // Determine if route step is needed
  const requiresRouteStep = data.activity === "hiking" || data.activity === "cycling" || data.activity === "climbing";

  // Determine if transport details step is needed
  const requiresTransportDetails = data.transportType === "public" || data.transportType === "car";

  // Calculate total steps and current display step
  const getTotalSteps = () => {
    let total = 7; // Base: activity, date, details, description, transport, transport-details, preview
    if (requiresRouteStep) total += 1; // Add route step
    if (!requiresTransportDetails) total -= 1; // Remove transport details if not needed
    return total;
  };

  const getDisplayStep = () => {
    let display = step;
    
    // If we skipped route step, adjust display
    if (!requiresRouteStep && step > STEP_ACTIVITY) {
      display -= 1;
    }
    
    // If we're at preview and skipped transport details, adjust
    if (!requiresTransportDetails && step === STEP_PREVIEW) {
      display -= 1;
    }
    
    return Math.min(display, getTotalSteps());
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
    setStep(STEP_ACTIVITY);
    onClose();
  };

  const handleDiscard = () => {
    clearStoredData();
    setData({});
    setStep(STEP_ACTIVITY);
    setShowDiscardDialog(false);
    onClose();
  };

  const handleBack = () => {
    switch (step) {
      case STEP_ROUTE:
        setStep(STEP_ACTIVITY);
        break;
      case STEP_DATE_TIME:
        setStep(requiresRouteStep ? STEP_ROUTE : STEP_ACTIVITY);
        break;
      case STEP_DETAILS:
        setStep(STEP_DATE_TIME);
        break;
      case STEP_DESCRIPTION:
        setStep(STEP_DETAILS);
        break;
      case STEP_TRANSPORT:
        setStep(STEP_DESCRIPTION);
        break;
      case STEP_TRANSPORT_DETAILS:
        setStep(STEP_TRANSPORT);
        break;
      case STEP_PREVIEW:
        setStep(requiresTransportDetails ? STEP_TRANSPORT_DETAILS : STEP_TRANSPORT);
        break;
      default:
        setStep(step - 1);
    }
  };

  // Step handlers
  const handleStep1Continue = (activity: ActivityType) => {
    setData((prev) => ({ ...prev, activity }));
    if (activity === "hiking" || activity === "cycling" || activity === "climbing") {
      setStep(STEP_ROUTE);
    } else {
      setStep(STEP_DATE_TIME);
    }
  };

  const handleStep2Continue = (routeId?: string) => {
    setData((prev) => ({ ...prev, routeId }));
    setStep(STEP_DATE_TIME);
  };

  const handleStep3Continue = (date: Date, time: string) => {
    setData((prev) => ({ ...prev, date, time }));
    setStep(STEP_DETAILS);
  };

  const handleStep4Continue = (eventName: string, maxParticipants: number) => {
    setData((prev) => ({ ...prev, eventName, maxParticipants }));
    setStep(STEP_DESCRIPTION);
  };

  const handleStep5Continue = (description: string, addDisclaimer: boolean) => {
    setData((prev) => ({ ...prev, description, addDisclaimer }));
    setStep(STEP_TRANSPORT);
  };

  const handleStep6Continue = (transportType: TransportType) => {
    setData((prev) => ({ ...prev, transportType }));
    if (transportType === "none") {
      setStep(STEP_PREVIEW);
    } else {
      setStep(STEP_TRANSPORT_DETAILS);
    }
  };

  const handleStep7Continue = (details: TransportDetails) => {
    if ("meetingPoint" in details) {
      setData((prev) => ({
        ...prev,
        meetingPoint: details.meetingPoint,
        ticketCost: details.ticketCost,
        instructions: details.instructions,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        pickUpLocation: details.pickUpLocation,
        fuelCost: details.fuelCost,
        carDescription: details.carDescription,
      }));
    }
    setStep(STEP_PREVIEW);
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    // For now, just log and close - future: submit to database
    console.log("Publishing event:", data);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    clearStoredData();
    setData({});
    setStep(STEP_ACTIVITY);
    setIsPublishing(false);
    onClose();
  };

  if (!isOpen) return null;

  const progressValue = (getDisplayStep() / getTotalSteps()) * 100;

  const renderStepContent = () => {
    switch (step) {
      case STEP_ACTIVITY:
        return (
          <CreateEventStep1
            selectedActivity={data.activity}
            onContinue={handleStep1Continue}
          />
        );
      case STEP_ROUTE:
        return (
          <CreateEventStep2
            selectedRouteId={data.routeId}
            onContinue={handleStep2Continue}
          />
        );
      case STEP_DATE_TIME:
        return (
          <CreateEventStep3
            selectedDate={data.date}
            selectedTime={data.time}
            onContinue={handleStep3Continue}
          />
        );
      case STEP_DETAILS:
        return (
          <CreateEventStep4
            eventName={data.eventName}
            maxParticipants={data.maxParticipants}
            onContinue={handleStep4Continue}
          />
        );
      case STEP_DESCRIPTION:
        return (
          <CreateEventStep5
            description={data.description}
            addDisclaimer={data.addDisclaimer}
            onContinue={handleStep5Continue}
          />
        );
      case STEP_TRANSPORT:
        return (
          <CreateEventStep6
            selectedTransport={data.transportType}
            onContinue={handleStep6Continue}
          />
        );
      case STEP_TRANSPORT_DETAILS:
        return (
          <CreateEventStep7
            transportType={data.transportType!}
            meetingPoint={data.meetingPoint}
            ticketCost={data.ticketCost}
            instructions={data.instructions}
            pickUpLocation={data.pickUpLocation}
            fuelCost={data.fuelCost}
            carDescription={data.carDescription}
            onContinue={handleStep7Continue}
          />
        );
      case STEP_PREVIEW:
        return (
          <CreateEventPreview
            data={data}
            onPublish={handlePublish}
            isPublishing={isPublishing}
          />
        );
      default:
        return null;
    }
  };

  // Determine if step needs full width (route selection)
  const isFullWidthStep = step === STEP_ROUTE;

  const modalContent = (
    <>
      <div className="fixed inset-0 z-[100] bg-background">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-[100] bg-background border-b border-border">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Back button */}
              <div className="w-24">
                {step > STEP_ACTIVITY && (
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
                  {getDisplayStep()} / {getTotalSteps()}
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
          {isFullWidthStep ? (
            <div className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-12">
              {renderStepContent()}
            </div>
          ) : (
            <div className="max-w-[800px] w-full mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
              {renderStepContent()}
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
