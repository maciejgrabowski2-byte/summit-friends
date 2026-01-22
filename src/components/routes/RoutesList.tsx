import { Route } from "@/data/mockRoutes";
import RouteCard from "./RouteCard";
import { Mountain } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface RoutesListProps {
  routes: Route[];
  selectedRoute: Route | null;
  onSelectRoute: (route: Route) => void;
  isFiltersOpen?: boolean;
}

const RoutesList = ({ routes, selectedRoute, onSelectRoute, isFiltersOpen = false }: RoutesListProps) => {
  const [parent] = useAutoAnimate({ duration: 300 });

  if (routes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <Mountain className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No routes found
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Try adjusting your filters to discover more hiking routes.
        </p>
      </div>
    );
  }

  return (
    <div ref={parent} className={`grid grid-cols-1 gap-4 md:gap-6 ${isFiltersOpen ? 'sm:grid-cols-1 md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
      {routes.map((route) => (
        <RouteCard
          key={route.id}
          route={route}
          onSelect={onSelectRoute}
          isSelected={selectedRoute?.id === route.id}
        />
      ))}
    </div>
  );
};

export default RoutesList;
