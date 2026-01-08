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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Filter, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";

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

const RoutesFilters = ({ filters, onFiltersChange, onReset }: RoutesFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

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
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <button
        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Filters</span>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFilterCount}
            </Badge>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {/* Filter Content */}
      {isExpanded && (
        <div className="p-4 pt-0 border-t border-border">
          <Accordion type="multiple" defaultValue={["difficulty", "distance"]} className="w-full">
            {/* Difficulty */}
            <AccordionItem value="difficulty">
              <AccordionTrigger className="text-sm font-medium py-3">
                Difficulty
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {difficultyOptions.map((difficulty) => (
                    <label
                      key={difficulty}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={filters.difficulty.includes(difficulty)}
                        onCheckedChange={(checked) =>
                          handleDifficultyChange(difficulty, !!checked)
                        }
                      />
                      <span className="text-sm">{difficulty}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Technical Level */}
            <AccordionItem value="technical">
              <AccordionTrigger className="text-sm font-medium py-3">
                Technical Level (T1-T6)
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2">
                  {technicalLevelOptions.map((level) => (
                    <label
                      key={level}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={filters.technicalLevel.includes(level)}
                        onCheckedChange={(checked) =>
                          handleTechnicalChange(level, !!checked)
                        }
                      />
                      <span className="text-sm">{level}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Distance */}
            <AccordionItem value="distance">
              <AccordionTrigger className="text-sm font-medium py-3">
                Distance
              </AccordionTrigger>
              <AccordionContent>
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
              </AccordionContent>
            </AccordionItem>

            {/* Duration */}
            <AccordionItem value="duration">
              <AccordionTrigger className="text-sm font-medium py-3">
                Duration
              </AccordionTrigger>
              <AccordionContent>
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
              </AccordionContent>
            </AccordionItem>

            {/* Elevation Gain */}
            <AccordionItem value="elevation">
              <AccordionTrigger className="text-sm font-medium py-3">
                Elevation Gain
              </AccordionTrigger>
              <AccordionContent>
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
              </AccordionContent>
            </AccordionItem>

            {/* Route Type */}
            <AccordionItem value="routeType">
              <AccordionTrigger className="text-sm font-medium py-3">
                Route Type
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  {routeTypeOptions.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={filters.routeType.includes(type)}
                        onCheckedChange={(checked) =>
                          handleRouteTypeChange(type, !!checked)
                        }
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Highlights */}
            <AccordionItem value="highlights">
              <AccordionTrigger className="text-sm font-medium py-3">
                Highlights
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {highlightOptions.map((highlight) => (
                    <label
                      key={highlight.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={filters.highlights.includes(highlight.value)}
                        onCheckedChange={(checked) =>
                          handleHighlightChange(highlight.value, !!checked)
                        }
                      />
                      <span className="text-sm">
                        {highlight.icon} {highlight.label}
                      </span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Route Features */}
            <AccordionItem value="features">
              <AccordionTrigger className="text-sm font-medium py-3">
                Route Features
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {featureOptions.map((feature) => (
                    <label
                      key={feature.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={filters.features.includes(feature.value)}
                        onCheckedChange={(checked) =>
                          handleFeatureChange(feature.value, !!checked)
                        }
                      />
                      <span className="text-sm">{feature.label}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Facilities */}
            <AccordionItem value="facilities">
              <AccordionTrigger className="text-sm font-medium py-3">
                Facilities
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {facilityOptions.map((facility) => (
                    <label
                      key={facility.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={filters.facilities.includes(facility.value)}
                        onCheckedChange={(checked) =>
                          handleFacilityChange(facility.value, !!checked)
                        }
                      />
                      <span className="text-sm">{facility.label}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Reset Button */}
          <Button
            variant="outline"
            onClick={onReset}
            className="w-full mt-4"
            disabled={activeFilterCount === 0}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default RoutesFilters;
