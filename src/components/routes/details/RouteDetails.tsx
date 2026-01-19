import * as React from "react";
import { useParams } from "react-router-dom";
import { DetailViewLayout } from "@/components/ui/DetailViewLayout";
import { mockRoutes } from "@/data/mockRoutes";
import { RouteMapPlaceholder } from "./RouteMapPlaceholder";
import { RouteInfo } from "./RouteInfo";
import { RouteSidebar } from "./RouteSidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function RouteNotFound() {
  const navigate = useNavigate();
  
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

export function RouteDetails() {
  const { id } = useParams();
  
  const route = mockRoutes.find(r => r.id === id);
  
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
      backPath="/routes"
      backLabel="Back to routes"
      heroImage={heroImage}
      leftColumn={<RouteMapPlaceholder />}
      mainContent={<RouteInfo route={route} />}
      sidebar={<RouteSidebar />}
    />
  );
}

export default RouteDetails;
