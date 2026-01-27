import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { TransportType } from "./CreateEventStep6";

interface PublicTransportDetails {
  meetingPoint: string;
  ticketCost: string;
  instructions: string;
}

interface CarDetails {
  pickUpLocation: string;
  fuelCost: string;
  carDescription: string;
}

export type TransportDetails = PublicTransportDetails | CarDetails;

interface CreateEventStep7Props {
  transportType: TransportType;
  // Public transport fields
  meetingPoint?: string;
  ticketCost?: string;
  instructions?: string;
  // Car fields
  pickUpLocation?: string;
  fuelCost?: string;
  carDescription?: string;
  onContinue: (details: TransportDetails) => void;
}

export function CreateEventStep7({
  transportType,
  meetingPoint: initialMeetingPoint,
  ticketCost: initialTicketCost,
  instructions: initialInstructions,
  pickUpLocation: initialPickUpLocation,
  fuelCost: initialFuelCost,
  carDescription: initialCarDescription,
  onContinue,
}: CreateEventStep7Props) {
  // Public transport state
  const [meetingPoint, setMeetingPoint] = React.useState(initialMeetingPoint || "");
  const [ticketCost, setTicketCost] = React.useState(initialTicketCost || "");
  const [instructions, setInstructions] = React.useState(initialInstructions || "");

  // Car state
  const [pickUpLocation, setPickUpLocation] = React.useState(initialPickUpLocation || "");
  const [fuelCost, setFuelCost] = React.useState(initialFuelCost || "");
  const [carDescription, setCarDescription] = React.useState(initialCarDescription || "");

  const isPublicTransport = transportType === "public";

  const canContinue = isPublicTransport
    ? meetingPoint.trim().length > 0
    : pickUpLocation.trim().length > 0;

  const handleContinue = () => {
    if (isPublicTransport) {
      onContinue({
        meetingPoint: meetingPoint.trim(),
        ticketCost: ticketCost.trim(),
        instructions: instructions.trim(),
      });
    } else {
      onContinue({
        pickUpLocation: pickUpLocation.trim(),
        fuelCost: fuelCost.trim(),
        carDescription: carDescription.trim(),
      });
    }
  };

  if (isPublicTransport) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Public transport details
          </h1>
          <p className="text-muted-foreground">
            Help participants find their way
          </p>
        </div>

        <div className="space-y-6 max-w-md mx-auto">
          <div className="space-y-2">
            <Label htmlFor="meeting-point">Meeting point *</Label>
            <Input
              id="meeting-point"
              placeholder="e.g., Central Station, Platform 5"
              value={meetingPoint}
              onChange={(e) => setMeetingPoint(e.target.value)}
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ticket-cost">Estimated ticket cost</Label>
            <Input
              id="ticket-cost"
              placeholder="e.g., €15 return"
              value={ticketCost}
              onChange={(e) => setTicketCost(e.target.value)}
              maxLength={50}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Travel instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Any tips for getting there, connections, etc."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows={4}
              maxLength={500}
            />
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

  // Car transport
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Carpool details
        </h1>
        <p className="text-muted-foreground">
          Share the ride with your group
        </p>
      </div>

      <div className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <Label htmlFor="pickup-location">Pick-up location *</Label>
          <Input
            id="pickup-location"
            placeholder="e.g., Parking lot behind the mall"
            value={pickUpLocation}
            onChange={(e) => setPickUpLocation(e.target.value)}
            maxLength={100}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fuel-cost">Fuel cost contribution</Label>
          <Input
            id="fuel-cost"
            placeholder="e.g., €5 per person"
            value={fuelCost}
            onChange={(e) => setFuelCost(e.target.value)}
            maxLength={50}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="car-description">Car description</Label>
          <Textarea
            id="car-description"
            placeholder="e.g., Red VW Golf, seats 4 passengers"
            value={carDescription}
            onChange={(e) => setCarDescription(e.target.value)}
            rows={3}
            maxLength={200}
          />
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

export default CreateEventStep7;
