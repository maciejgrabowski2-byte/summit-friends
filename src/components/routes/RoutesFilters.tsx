import { useState } from "react";
import {
  Difficulty,
  TechnicalLevel,
  RouteType,
  Highlight,
  RouteFeature,
  Facility,
  difficultyOptions,
  technicalLevelOptions,
  routeTypeOptions,
  highlightOptions,
  featureOptions,
  facilityOptions,
} from "@/data/mockRoutes";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  ListFilter, 
  ChevronDown,
  ChevronLeft,
  Mountain, 
  Gauge, 
  Ruler, 
  Clock, 
  TrendingUp, 
  Route, 
  Star, 
  Compass, 
  Building2 
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FiltersState {
  difficulty: Difficulty[];
  technicalLevel: TechnicalLevel[];
  distance: [number, number];
  duration: [number, number];
  elevationGain: [number, number];
  routeType: RouteType[];
  highlights: Highlight[];
  features: RouteFeature[];
  facilities: Facility[];
}

interface RoutesFiltersProps {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
  onReset: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

interface FilterSectionProps {
  label: string;
  icon: React.ReactNode;
  activeCount: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ label, icon, activeCount, children, defaultOpen = false }: FilterSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-3 text-sm font-medium hover:text-foreground transition-colors">
        <div className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
          {activeCount > 0 && (
            <Badge variant="secondary" className="h-5 min-w-5 px-1.5 text-xs">
              {activeCount}
            </Badge>
          )}
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-4">
        <div className="pt-2">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const RoutesFilters = ({ filters, onFiltersChange, onReset, isOpen, onToggle }: RoutesFiltersProps) => {
  const handleDifficultyChange = (difficulty: Difficulty, checked: boolean) => {
    const newDifficulty = checked
      ? [...filters.difficulty, difficulty]
      : filters.difficulty.filter((d) => d !== difficulty);
    onFiltersChange({ ...filters, difficulty: newDifficulty });
  };

  const handleTechnicalChange = (level: TechnicalLevel, checked: boolean) => {
    const newLevels = checked
      ? [...filters.technicalLevel, level]
      : filters.technicalLevel.filter((l) => l !== level);
    onFiltersChange({ ...filters, technicalLevel: newLevels });
  };

  const handleRouteTypeChange = (type: RouteType, checked: boolean) => {
    const newTypes = checked
      ? [...filters.routeType, type]
      : filters.routeType.filter((t) => t !== type);
    onFiltersChange({ ...filters, routeType: newTypes });
  };

  const handleHighlightChange = (highlight: Highlight, checked: boolean) => {
    const newHighlights = checked
      ? [...filters.highlights, highlight]
      : filters.highlights.filter((h) => h !== highlight);
    onFiltersChange({ ...filters, highlights: newHighlights });
  };

  const handleFeatureChange = (feature: RouteFeature, checked: boolean) => {
    const newFeatures = checked
      ? [...filters.features, feature]
      : filters.features.filter((f) => f !== feature);
    onFiltersChange({ ...filters, features: newFeatures });
  };

  const handleFacilityChange = (facility: Facility, checked: boolean) => {
    const newFacilities = checked
      ? [...filters.facilities, facility]
      : filters.facilities.filter((f) => f !== facility);
    onFiltersChange({ ...filters, facilities: newFacilities });
  };

  const activeFilterCount =
    filters.difficulty.length +
    filters.technicalLevel.length +
    filters.routeType.length +
    filters.highlights.length +
    filters.features.length +
    filters.facilities.length +
    (filters.distance[0] > 0 || filters.distance[1] < 50 ? 1 : 0) +
    (filters.duration[0] > 0 || filters.duration[1] < 12 ? 1 : 0) +
    (filters.elevationGain[0] > 0 || filters.elevationGain[1] < 2500 ? 1 : 0);

  return (
    <div className="flex">
      {/* Toggle Button - Only visible when sidebar is closed */}
      {!isOpen && (
        <Button
          variant="outline"
          size="icon"
          onClick={onToggle}
          className="h-9 w-9 mr-6 relative shrink-0"
        >
          <ListFilter className="h-4 w-4" />
          {activeFilterCount > 0 && (
            <Badge 
              variant="secondary" 
              className="absolute -top-1.5 -right-1.5 h-5 min-w-5 px-1.5 text-xs"
            >
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      )}

      {/* Collapsible Sidebar */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "w-72 mr-6 opacity-100" : "w-0 opacity-0"
        )}
      >
        <div className="w-72 h-full border border-border rounded-xl bg-background flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <ListFilter className="h-4 w-4" />
              <span className="font-medium text-sm">Filters</span>
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="h-5 min-w-5 px-1.5 text-xs">
                  {activeFilterCount}
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onToggle}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* Scrollable Filter Content */}
          <ScrollArea className="flex-1 max-h-[60vh]">
            <div className="px-4 divide-y divide-border">
              {/* Difficulty Filter */}
              <FilterSection
                label="Difficulty"
                icon={<Mountain className="h-4 w-4" />}
                activeCount={filters.difficulty.length}
                defaultOpen
              >
                <div className="grid grid-cols-2 gap-3">
                  {difficultyOptions.map((difficulty) => (
                    <label key={difficulty} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={filters.difficulty.includes(difficulty)}
                        onCheckedChange={(checked) => handleDifficultyChange(difficulty, !!checked)}
                      />
                      <span className="text-sm">{difficulty}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Technical Level Filter */}
              <FilterSection
                label="Technical Level"
                icon={<Gauge className="h-4 w-4" />}
                activeCount={filters.technicalLevel.length}
              >
                <div className="grid grid-cols-3 gap-3">
                  {technicalLevelOptions.map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={filters.technicalLevel.includes(level)}
                        onCheckedChange={(checked) => handleTechnicalChange(level, !!checked)}
                      />
                      <span className="text-sm">{level}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Distance Filter */}
              <FilterSection
                label="Distance"
                icon={<Ruler className="h-4 w-4" />}
                activeCount={filters.distance[0] > 0 || filters.distance[1] < 50 ? 1 : 0}
              >
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{filters.distance[0]} km</span>
                    <span>{filters.distance[1]} km</span>
                  </div>
                  <Slider
                    value={filters.distance}
                    onValueChange={(value) =>
                      onFiltersChange({ ...filters, distance: value as [number, number] })
                    }
                    min={0}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>
              </FilterSection>

              {/* Duration Filter */}
              <FilterSection
                label="Duration"
                icon={<Clock className="h-4 w-4" />}
                activeCount={filters.duration[0] > 0 || filters.duration[1] < 12 ? 1 : 0}
              >
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{filters.duration[0]}h</span>
                    <span>{filters.duration[1]}h</span>
                  </div>
                  <Slider
                    value={filters.duration}
                    onValueChange={(value) =>
                      onFiltersChange({ ...filters, duration: value as [number, number] })
                    }
                    min={0}
                    max={12}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </FilterSection>

              {/* Elevation Filter */}
              <FilterSection
                label="Elevation Gain"
                icon={<TrendingUp className="h-4 w-4" />}
                activeCount={filters.elevationGain[0] > 0 || filters.elevationGain[1] < 2500 ? 1 : 0}
              >
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{filters.elevationGain[0]}m</span>
                    <span>{filters.elevationGain[1]}m</span>
                  </div>
                  <Slider
                    value={filters.elevationGain}
                    onValueChange={(value) =>
                      onFiltersChange({ ...filters, elevationGain: value as [number, number] })
                    }
                    min={0}
                    max={2500}
                    step={50}
                    className="w-full"
                  />
                </div>
              </FilterSection>

              {/* Route Type Filter */}
              <FilterSection
                label="Route Type"
                icon={<Route className="h-4 w-4" />}
                activeCount={filters.routeType.length}
              >
                <div className="flex flex-col gap-3">
                  {routeTypeOptions.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={filters.routeType.includes(type)}
                        onCheckedChange={(checked) => handleRouteTypeChange(type, !!checked)}
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Highlights Filter */}
              <FilterSection
                label="Highlights"
                icon={<Star className="h-4 w-4" />}
                activeCount={filters.highlights.length}
              >
                <div className="flex flex-col gap-3">
                  {highlightOptions.map((highlight) => (
                    <label key={highlight.value} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={filters.highlights.includes(highlight.value)}
                        onCheckedChange={(checked) => handleHighlightChange(highlight.value, !!checked)}
                      />
                      <span className="text-sm">
                        {highlight.icon} {highlight.label}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Features Filter */}
              <FilterSection
                label="Features"
                icon={<Compass className="h-4 w-4" />}
                activeCount={filters.features.length}
              >
                <div className="grid grid-cols-2 gap-3">
                  {featureOptions.map((feature) => (
                    <label key={feature.value} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={filters.features.includes(feature.value)}
                        onCheckedChange={(checked) => handleFeatureChange(feature.value, !!checked)}
                      />
                      <span className="text-sm">{feature.label}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Facilities Filter */}
              <FilterSection
                label="Facilities"
                icon={<Building2 className="h-4 w-4" />}
                activeCount={filters.facilities.length}
              >
                <div className="grid grid-cols-2 gap-3">
                  {facilityOptions.map((facility) => (
                    <label key={facility.value} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={filters.facilities.includes(facility.value)}
                        onCheckedChange={(checked) => handleFacilityChange(facility.value, !!checked)}
                      />
                      <span className="text-sm">{facility.label}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </ScrollArea>

          {/* Footer */}
          {activeFilterCount > 0 && (
            <div className="px-4 py-3 border-t border-border shrink-0">
              <Button variant="ghost" onClick={onReset} className="w-full" size="sm">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoutesFilters;
