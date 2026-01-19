import * as React from "react";
import { DetailViewLayout } from "@/components/ui/DetailViewLayout";
import { mockRoutes, Route } from "@/data/mockRoutes";
import { RouteMapPlaceholder } from "./RouteMapPlaceholder";
import { RouteInfo } from "./RouteInfo";
import { RouteSidebar } from "./RouteSidebar";

interface RouteDetailsProps {
  routeId: string;
}

function RouteNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h2 className="text-xl font-semibold text-foreground mb-2">Route not found</h2>
      <p className="text-muted-foreground mb-4">The route you're looking for doesn't exist.</p>
    </div>
  );
}

export function RouteDetails({ routeId }: RouteDetailsProps) {
  const route = mockRoutes.find(r => r.id === routeId);
  
  if (!route) {
    return <RouteNotFound />;
  }
  
  const heroImage = (
    <img 
      src={route.image} 
      alt={route.name} 
      className="w-full h-full object-cover"
    />
  );
  
  return (
    <DetailViewLayout
      heroImage={heroImage}
      leftColumn={<RouteMapPlaceholder />}
      mainContent={<RouteInfo route={route} />}
      sidebar={<RouteSidebar />}
    />
  );
}

export default RouteDetails;
