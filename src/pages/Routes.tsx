import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoutesFilters, { FiltersState } from "@/components/routes/RoutesFilters";
import RoutesList from "@/components/routes/RoutesList";
import { mockRoutes, Route } from "@/data/mockRoutes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, X } from "lucide-react";
import FullScreenModal from "@/components/ui/FullScreenModal";
import RouteDetails from "@/components/routes/details/RouteDetails";

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
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);
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
    setSelectedRouteId(route.id);
  };

  const handleCloseModal = () => {
    setSelectedRouteId(null);
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

      <main className="pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              Explore Routes
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Discover {mockRoutes.length} hiking routes across Europe
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

              {/* Routes Grid */}
              <RoutesList
                routes={filteredRoutes}
                selectedRoute={null}
                onSelectRoute={handleSelectRoute}
                isFiltersOpen={isFiltersOpen}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Route Details Modal */}
      <FullScreenModal isOpen={!!selectedRouteId} onClose={handleCloseModal}>
        {selectedRouteId && <RouteDetails routeId={selectedRouteId} />}
      </FullScreenModal>
    </div>
  );
};

export default Routes;
