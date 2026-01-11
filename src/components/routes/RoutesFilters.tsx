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
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  ListFilter, 
  ChevronDown, 
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
}

interface FilterPopoverProps {
  label: string;
  icon: React.ReactNode;
  activeCount: number;
  children: React.ReactNode;
  onClear: () => void;
  onApply: () => void;
}

const FilterPopover = ({ label, icon, activeCount, children, onClear, onApply }: FilterPopoverProps) => {
  const [open, setOpen] = useState(false);

  const handleApply = () => {
    onApply();
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 gap-2 border-border bg-background hover:bg-accent hover:text-accent-foreground"
        >
          {icon}
          <span>{label}</span>
          {activeCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 min-w-5 px-1.5 text-xs">
              {activeCount}
            </Badge>
          )}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start" showArrow>
        <div className="p-4 space-y-4">
          <h4 className="font-medium text-sm">{label}</h4>
          <div className="space-y-3">
            {children}
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-border p-3 bg-muted/50">
          <Button variant="ghost" size="sm" onClick={onClear} className="h-8">
            Clear
          </Button>
          <Button size="sm" onClick={handleApply} className="h-8">
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const RoutesFilters = ({ filters, onFiltersChange, onReset }: RoutesFiltersProps) => {
  // Local state for pending changes
  const [pendingFilters, setPendingFilters] = useState<FiltersState>(filters);

  const handleDifficultyChange = (difficulty: Difficulty, checked: boolean) => {
    const newDifficulty = checked
      ? [...pendingFilters.difficulty, difficulty]
      : pendingFilters.difficulty.filter((d) => d !== difficulty);
    setPendingFilters({ ...pendingFilters, difficulty: newDifficulty });
  };

  const handleTechnicalChange = (level: TechnicalLevel, checked: boolean) => {
    const newLevels = checked
      ? [...pendingFilters.technicalLevel, level]
      : pendingFilters.technicalLevel.filter((l) => l !== level);
    setPendingFilters({ ...pendingFilters, technicalLevel: newLevels });
  };

  const handleRouteTypeChange = (type: RouteType, checked: boolean) => {
    const newTypes = checked
      ? [...pendingFilters.routeType, type]
      : pendingFilters.routeType.filter((t) => t !== type);
    setPendingFilters({ ...pendingFilters, routeType: newTypes });
  };

  const handleHighlightChange = (highlight: Highlight, checked: boolean) => {
    const newHighlights = checked
      ? [...pendingFilters.highlights, highlight]
      : pendingFilters.highlights.filter((h) => h !== highlight);
    setPendingFilters({ ...pendingFilters, highlights: newHighlights });
  };

  const handleFeatureChange = (feature: RouteFeature, checked: boolean) => {
    const newFeatures = checked
      ? [...pendingFilters.features, feature]
      : pendingFilters.features.filter((f) => f !== feature);
    setPendingFilters({ ...pendingFilters, features: newFeatures });
  };

  const handleFacilityChange = (facility: Facility, checked: boolean) => {
    const newFacilities = checked
      ? [...pendingFilters.facilities, facility]
      : pendingFilters.facilities.filter((f) => f !== facility);
    setPendingFilters({ ...pendingFilters, facilities: newFacilities });
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

  // Sync pending filters when main filters change
  const syncPendingFilters = () => {
    setPendingFilters(filters);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Main Filter Button with count */}
      <div className="flex items-center gap-2 mr-2">
        <ListFilter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">Filters</span>
        {activeFilterCount > 0 && (
          <Badge variant="secondary" className="h-5 min-w-5 px-1.5 text-xs">
            {activeFilterCount}
          </Badge>
        )}
      </div>

      {/* Difficulty Filter */}
      <FilterPopover
        label="Difficulty"
        icon={<Mountain className="h-4 w-4" />}
        activeCount={filters.difficulty.length}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, difficulty: [] });
          onFiltersChange({ ...filters, difficulty: [] });
        }}
        onApply={() => onFiltersChange({ ...filters, difficulty: pendingFilters.difficulty })}
      >
        <div className="grid grid-cols-2 gap-2">
          {difficultyOptions.map((difficulty) => (
            <label key={difficulty} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={pendingFilters.difficulty.includes(difficulty)}
                onCheckedChange={(checked) => handleDifficultyChange(difficulty, !!checked)}
              />
              <span className="text-sm">{difficulty}</span>
            </label>
          ))}
        </div>
      </FilterPopover>

      {/* Technical Level Filter */}
      <FilterPopover
        label="Technical"
        icon={<Gauge className="h-4 w-4" />}
        activeCount={filters.technicalLevel.length}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, technicalLevel: [] });
          onFiltersChange({ ...filters, technicalLevel: [] });
        }}
        onApply={() => onFiltersChange({ ...filters, technicalLevel: pendingFilters.technicalLevel })}
      >
        <div className="grid grid-cols-3 gap-2">
          {technicalLevelOptions.map((level) => (
            <label key={level} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={pendingFilters.technicalLevel.includes(level)}
                onCheckedChange={(checked) => handleTechnicalChange(level, !!checked)}
              />
              <span className="text-sm">{level}</span>
            </label>
          ))}
        </div>
      </FilterPopover>

      {/* Distance Filter */}
      <FilterPopover
        label="Distance"
        icon={<Ruler className="h-4 w-4" />}
        activeCount={filters.distance[0] > 0 || filters.distance[1] < 50 ? 1 : 0}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, distance: [0, 50] });
          onFiltersChange({ ...filters, distance: [0, 50] });
        }}
        onApply={() => onFiltersChange({ ...filters, distance: pendingFilters.distance })}
      >
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{pendingFilters.distance[0]} km</span>
            <span>{pendingFilters.distance[1]} km</span>
          </div>
          <Slider
            value={pendingFilters.distance}
            onValueChange={(value) =>
              setPendingFilters({ ...pendingFilters, distance: value as [number, number] })
            }
            min={0}
            max={50}
            step={1}
            className="w-full"
          />
        </div>
      </FilterPopover>

      {/* Duration Filter */}
      <FilterPopover
        label="Duration"
        icon={<Clock className="h-4 w-4" />}
        activeCount={filters.duration[0] > 0 || filters.duration[1] < 12 ? 1 : 0}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, duration: [0, 12] });
          onFiltersChange({ ...filters, duration: [0, 12] });
        }}
        onApply={() => onFiltersChange({ ...filters, duration: pendingFilters.duration })}
      >
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{pendingFilters.duration[0]}h</span>
            <span>{pendingFilters.duration[1]}h</span>
          </div>
          <Slider
            value={pendingFilters.duration}
            onValueChange={(value) =>
              setPendingFilters({ ...pendingFilters, duration: value as [number, number] })
            }
            min={0}
            max={12}
            step={0.5}
            className="w-full"
          />
        </div>
      </FilterPopover>

      {/* Elevation Filter */}
      <FilterPopover
        label="Elevation"
        icon={<TrendingUp className="h-4 w-4" />}
        activeCount={filters.elevationGain[0] > 0 || filters.elevationGain[1] < 2500 ? 1 : 0}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, elevationGain: [0, 2500] });
          onFiltersChange({ ...filters, elevationGain: [0, 2500] });
        }}
        onApply={() => onFiltersChange({ ...filters, elevationGain: pendingFilters.elevationGain })}
      >
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{pendingFilters.elevationGain[0]}m</span>
            <span>{pendingFilters.elevationGain[1]}m</span>
          </div>
          <Slider
            value={pendingFilters.elevationGain}
            onValueChange={(value) =>
              setPendingFilters({ ...pendingFilters, elevationGain: value as [number, number] })
            }
            min={0}
            max={2500}
            step={50}
            className="w-full"
          />
        </div>
      </FilterPopover>

      {/* Route Type Filter */}
      <FilterPopover
        label="Type"
        icon={<Route className="h-4 w-4" />}
        activeCount={filters.routeType.length}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, routeType: [] });
          onFiltersChange({ ...filters, routeType: [] });
        }}
        onApply={() => onFiltersChange({ ...filters, routeType: pendingFilters.routeType })}
      >
        <div className="flex flex-col gap-2">
          {routeTypeOptions.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={pendingFilters.routeType.includes(type)}
                onCheckedChange={(checked) => handleRouteTypeChange(type, !!checked)}
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </FilterPopover>

      {/* Highlights Filter */}
      <FilterPopover
        label="Highlights"
        icon={<Star className="h-4 w-4" />}
        activeCount={filters.highlights.length}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, highlights: [] });
          onFiltersChange({ ...filters, highlights: [] });
        }}
        onApply={() => onFiltersChange({ ...filters, highlights: pendingFilters.highlights })}
      >
        <div className="flex flex-col gap-2">
          {highlightOptions.map((highlight) => (
            <label key={highlight.value} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={pendingFilters.highlights.includes(highlight.value)}
                onCheckedChange={(checked) => handleHighlightChange(highlight.value, !!checked)}
              />
              <span className="text-sm">
                {highlight.icon} {highlight.label}
              </span>
            </label>
          ))}
        </div>
      </FilterPopover>

      {/* Features Filter */}
      <FilterPopover
        label="Features"
        icon={<Compass className="h-4 w-4" />}
        activeCount={filters.features.length}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, features: [] });
          onFiltersChange({ ...filters, features: [] });
        }}
        onApply={() => onFiltersChange({ ...filters, features: pendingFilters.features })}
      >
        <div className="grid grid-cols-2 gap-2">
          {featureOptions.map((feature) => (
            <label key={feature.value} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={pendingFilters.features.includes(feature.value)}
                onCheckedChange={(checked) => handleFeatureChange(feature.value, !!checked)}
              />
              <span className="text-sm">{feature.label}</span>
            </label>
          ))}
        </div>
      </FilterPopover>

      {/* Facilities Filter */}
      <FilterPopover
        label="Facilities"
        icon={<Building2 className="h-4 w-4" />}
        activeCount={filters.facilities.length}
        onClear={() => {
          setPendingFilters({ ...pendingFilters, facilities: [] });
          onFiltersChange({ ...filters, facilities: [] });
        }}
        onApply={() => onFiltersChange({ ...filters, facilities: pendingFilters.facilities })}
      >
        <div className="grid grid-cols-2 gap-2">
          {facilityOptions.map((facility) => (
            <label key={facility.value} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={pendingFilters.facilities.includes(facility.value)}
                onCheckedChange={(checked) => handleFacilityChange(facility.value, !!checked)}
              />
              <span className="text-sm">{facility.label}</span>
            </label>
          ))}
        </div>
      </FilterPopover>

      {/* Reset All Button */}
      {activeFilterCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="h-9 text-muted-foreground hover:text-foreground"
        >
          Clear all
        </Button>
      )}
    </div>
  );
};

export default RoutesFilters;
