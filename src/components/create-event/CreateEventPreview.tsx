import * as React from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Train,
  Car,
  Footprints,
  Mountain,
  Bike,
  Axe,
  Snowflake,
  Circle,
} from "lucide-react";
import type { CreateEventData } from "./CreateEventModal";
import { mockRoutes } from "@/data/mockRoutes";

interface CreateEventPreviewProps {
  data: CreateEventData;
  onPublish: () => void;
  isPublishing?: boolean;
}

const activityIcons = {
  hiking: Mountain,
  cycling: Bike,
  climbing: Axe,
  skiing: Snowflake,
  bouldering: Circle,
  social: Users,
};

const activityLabels = {
  hiking: "Hiking",
  cycling: "Cycling",
  climbing: "Climbing",
  skiing: "Skiing",
  bouldering: "Bouldering",
  social: "Social",
};

const transportIcons = {
  public: Train,
  car: Car,
  none: Footprints,
};

const transportLabels = {
  public: "Public transport",
  car: "By car",
  none: "No transport needed",
};

export function CreateEventPreview({
  data,
  onPublish,
  isPublishing,
}: CreateEventPreviewProps) {
  const route = data.routeId
    ? mockRoutes.find((r) => r.id === data.routeId)
    : null;

  const ActivityIcon = data.activity ? activityIcons[data.activity] : null;
  const TransportIcon = data.transportType ? transportIcons[data.transportType] : null;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Review your event
        </h1>
        <p className="text-muted-foreground">
          Make sure everything looks good before publishing
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Event Card Preview */}
        <div className="border border-border rounded-xl overflow-hidden bg-card">
          {/* Header with image or gradient */}
          <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            {ActivityIcon && (
              <ActivityIcon className="w-16 h-16 text-primary/40" />
            )}
          </div>

          <div className="p-6 space-y-4">
            {/* Title and activity badge */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                {data.activity && (
                  <Badge variant="secondary">
                    {activityLabels[data.activity]}
                  </Badge>
                )}
                {route && (
                  <Badge variant="outline">{route.name}</Badge>
                )}
              </div>
              <h2 className="text-xl font-bold text-foreground">
                {data.eventName || "Untitled Event"}
              </h2>
            </div>

            {/* Date and Time */}
            <div className="flex flex-wrap gap-4 text-sm">
              {data.date && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{format(data.date, "EEEE, MMMM d, yyyy")}</span>
                </div>
              )}
              {data.time && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{data.time}</span>
                </div>
              )}
            </div>

            {/* Participants */}
            {data.maxParticipants && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Up to {data.maxParticipants} participants</span>
              </div>
            )}

            {/* Description */}
            {data.description && (
              <p className="text-sm text-muted-foreground line-clamp-3">
                {data.description}
              </p>
            )}

            {/* Disclaimer badge */}
            {data.addDisclaimer && (
              <Badge variant="outline" className="text-xs">
                Includes liability disclaimer
              </Badge>
            )}
          </div>
        </div>

        {/* Transport Details Card */}
        {data.transportType && data.transportType !== "none" && (
          <div className="border border-border rounded-xl p-6 bg-card space-y-4">
            <div className="flex items-center gap-3">
              {TransportIcon && (
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                  <TransportIcon className="w-5 h-5 text-muted-foreground" />
                </div>
              )}
              <div>
                <h3 className="font-medium text-foreground">
                  {data.transportType && transportLabels[data.transportType]}
                </h3>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              {data.transportType === "public" && (
                <>
                  {data.meetingPoint && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">
                        Meeting at: {data.meetingPoint}
                      </span>
                    </div>
                  )}
                  {data.ticketCost && (
                    <p className="text-muted-foreground">
                      Ticket cost: {data.ticketCost}
                    </p>
                  )}
                  {data.instructions && (
                    <p className="text-muted-foreground">
                      {data.instructions}
                    </p>
                  )}
                </>
              )}

              {data.transportType === "car" && (
                <>
                  {data.pickUpLocation && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">
                        Pick-up: {data.pickUpLocation}
                      </span>
                    </div>
                  )}
                  {data.fuelCost && (
                    <p className="text-muted-foreground">
                      Fuel contribution: {data.fuelCost}
                    </p>
                  )}
                  {data.carDescription && (
                    <p className="text-muted-foreground">
                      {data.carDescription}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {data.transportType === "none" && (
          <div className="border border-border rounded-xl p-6 bg-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                <Footprints className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  No transport needed
                </h3>
                <p className="text-sm text-muted-foreground">
                  Participants will meet directly at the location
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={onPublish}
          size="lg"
          disabled={isPublishing}
          className="min-w-[200px]"
        >
          {isPublishing ? "Publishing..." : "Publish event"}
        </Button>
      </div>
    </div>
  );
}

export default CreateEventPreview;
