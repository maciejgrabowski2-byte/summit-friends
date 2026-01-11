import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoutesFilters, { FiltersState } from "@/components/routes/RoutesFilters";
import RoutesList from "@/components/routes/RoutesList";
import { mockRoutes, Route } from "@/data/mockRoutes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

const Routes = () => {
  const [filters, setFilters] = useState<FiltersState>(initialFilters);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
    toast({
      title: "Route selected",
      description: `You selected "${route.name}"`,
    });
  };

  const handleClearSelection = () => {
    setSelectedRoute(null);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  const handleToggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Explore Routes
            </h1>
            <p className="text-muted-foreground">
              Discover {mockRoutes.length} hiking routes across Europe
            </p>
          </div>

          {/* Selected Route Banner */}
          {selectedRoute && (
            <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-between animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Selected route</p>
                  <p className="font-semibold text-foreground">{selectedRoute.name}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleClearSelection}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Results Header with Filter Toggle */}
          <div className="flex items-center gap-4 mb-6">
            {!isFiltersOpen && (
              <RoutesFilters
                filters={filters}
                onFiltersChange={setFilters}
                onReset={handleResetFilters}
                isOpen={isFiltersOpen}
                onToggle={handleToggleFilters}
              />
            )}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Showing
              </span>
              <Badge variant="secondary" className="font-semibold">
                {filteredRoutes.length}
              </Badge>
              <span className="text-sm text-muted-foreground">
                routes
              </span>
            </div>
          </div>

          {/* Content with inline filter sidebar */}
          <div className="flex gap-6">
            {/* Filter Sidebar */}
            {isFiltersOpen && (
              <RoutesFilters
                filters={filters}
                onFiltersChange={setFilters}
                onReset={handleResetFilters}
                isOpen={isFiltersOpen}
                onToggle={handleToggleFilters}
              />
            )}

            {/* Routes Grid */}
            <RoutesList
              routes={filteredRoutes}
              selectedRoute={selectedRoute}
              onSelectRoute={handleSelectRoute}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Routes;
