import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RoutesFilters, { FiltersState } from "@/components/routes/RoutesFilters";
import RoutesList from "@/components/routes/RoutesList";
import { mockRoutes, Route } from "@/data/mockRoutes";

interface CreateEventStep2Props {
  selectedRouteId?: string;
  onContinue: (routeId?: string) => void;
}

const initialFilters: FiltersState = {
  difficulty: [],
  technicalLevel: [],
  distance: [0, 50],
  duration: [0, 12],
  elevationGain: [0, 2500],
  routeType: [],
  highlights: [],
  features: [],
  facilities: [],
};

export function CreateEventStep2({ selectedRouteId, onContinue }: CreateEventStep2Props) {
  const [filters, setFilters] = useState<FiltersState>(initialFilters);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(
    selectedRouteId ? mockRoutes.find((r) => r.id === selectedRouteId) || null : null
  );

  const filteredRoutes = useMemo(() => {
    return mockRoutes.filter((route) => {
      // Difficulty filter
      if (filters.difficulty.length > 0 && !filters.difficulty.includes(route.difficulty)) {
        return false;
      }

      // Technical level filter
      if (filters.technicalLevel.length > 0 && !filters.technicalLevel.includes(route.technicalLevel)) {
        return false;
      }

      // Distance filter
      if (route.distance < filters.distance[0] || route.distance > filters.distance[1]) {
        return false;
      }

      // Duration filter
      if (route.duration < filters.duration[0] || route.duration > filters.duration[1]) {
        return false;
      }

      // Elevation filter
      if (route.elevationGain < filters.elevationGain[0] || route.elevationGain > filters.elevationGain[1]) {
        return false;
      }

      // Route type filter
      if (filters.routeType.length > 0 && !filters.routeType.includes(route.routeType)) {
        return false;
      }

      // Highlights filter (any match)
      if (filters.highlights.length > 0 && !filters.highlights.some((h) => route.highlights.includes(h))) {
        return false;
      }

      // Features filter (any match)
      if (filters.features.length > 0 && !filters.features.some((f) => route.features.includes(f))) {
        return false;
      }

      // Facilities filter (any match)
      if (filters.facilities.length > 0 && !filters.facilities.some((f) => route.facilities.includes(f))) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleSelectRoute = (route: Route) => {
    setSelectedRoute(route);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  const handleToggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const handleContinue = () => {
    onContinue(selectedRoute?.id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Pick a route for your group
        </h1>
        <p className="text-muted-foreground">
          Choose from our curated collection of routes, or skip this step to add details later.
        </p>
      </div>

      {/* Content with inline filter sidebar */}
      <div className="flex flex-col md:flex-row">
        {/* Filter Sidebar */}
        <RoutesFilters
          filters={filters}
          onFiltersChange={setFilters}
          onReset={handleResetFilters}
          isOpen={isFiltersOpen}
          onToggle={handleToggleFilters}
        />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Showing</span>
              <Badge variant="secondary" className="font-semibold">
                {filteredRoutes.length}
              </Badge>
              <span className="text-sm text-muted-foreground">routes</span>
            </div>
          </div>

          {/* Routes Grid */}
          <RoutesList
            routes={filteredRoutes}
            selectedRoute={selectedRoute}
            onSelectRoute={handleSelectRoute}
            isFiltersOpen={isFiltersOpen}
          />
        </div>
      </div>

      {/* Footer with selection info and continue button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
        <div className="text-sm text-muted-foreground">
          {selectedRoute ? (
            <span>
              Selected: <span className="font-medium text-foreground">{selectedRoute.name}</span>
            </span>
          ) : (
            <span>No route selected (optional)</span>
          )}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => onContinue()}>
            Skip this step
          </Button>
          <Button onClick={handleContinue} disabled={!selectedRoute}>
            Continue with route
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateEventStep2;
