import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockRoutes } from "@/data/mockRoutes";
import { RouteMapPlaceholder } from "./RouteMapPlaceholder";
import { RouteInfo } from "./RouteInfo";
import { RouteSidebar } from "./RouteSidebar";

export function RouteDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const route = mockRoutes.find(r => r.id === id);
  
  if (!route) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">Route not found</h2>
        <p className="text-muted-foreground mb-4">The route you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/routes")}>
          Back to Routes
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/routes")}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to routes
      </Button>
      
      {/* Route Hero Image */}
      <div className="w-full h-[200px] sm:h-[300px] rounded-xl overflow-hidden">
        <img 
          src={route.image} 
          alt={route.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Left column: Map & Elevation */}
        <div className="w-full xl:w-auto">
          <RouteMapPlaceholder />
        </div>
        
        {/* Middle column: Route Info */}
        <div className="flex-1 min-w-0">
          <RouteInfo route={route} />
        </div>
        
        {/* Right column: Sidebar */}
        <RouteSidebar />
      </div>
    </div>
  );
}

export default RouteDetails;
