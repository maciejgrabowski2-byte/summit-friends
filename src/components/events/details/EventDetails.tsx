import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventGallery } from "./EventGallery";
import { EventInfo } from "./EventInfo";
import { EventSidebar } from "./EventSidebar";

export function EventDetails() {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/events")}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to events
      </Button>
      
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Left column: Gallery */}
        <div className="w-full xl:w-auto">
          <EventGallery />
        </div>
        
        {/* Middle column: Event Info */}
        <div className="flex-1 min-w-0">
          <EventInfo />
        </div>
        
        {/* Right column: Sidebar */}
        <EventSidebar />
      </div>
    </div>
  );
}

export default EventDetails;
