import * as React from "react";
import { MoveHorizontal, TrendingUp, TrendingDown, Mountain, Clock, RotateCcw } from "lucide-react";
import { Route, highlightOptions, featureOptions, facilityOptions } from "@/data/mockRoutes";
import { Badge } from "@/components/ui/badge";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
}

function StatCard({ icon, label, value, unit }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-md border border-border min-h-[90px] w-full">
      <div className="text-muted-foreground mb-1">
        {icon}
      </div>
      <p className="text-xs sm:text-sm font-bold text-muted-foreground text-center">{label}</p>
      <p className="text-base sm:text-lg text-foreground text-center whitespace-nowrap">
        {value}{unit && <span className="text-xs sm:text-sm ml-0.5">{unit}</span>}
      </p>
    </div>
  );
}

interface RouteTechnicalDetailsProps {
  route: Route;
}

export function RouteTechnicalDetails({ route }: RouteTechnicalDetailsProps) {
  const highlightLabels = route.highlights
    .map(h => highlightOptions.find(opt => opt.value === h))
    .filter(Boolean);
  
  const featureLabels = route.features
    .map(f => featureOptions.find(opt => opt.value === f))
    .filter(Boolean);
  
  const facilityLabels = route.facilities
    .map(f => facilityOptions.find(opt => opt.value === f))
    .filter(Boolean);

  return (
    <section className="flex flex-col gap-6 w-full">
      <h2 className="text-xl font-bold text-foreground">Technical Details</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 w-full">
        <StatCard 
          icon={<MoveHorizontal className="w-5 h-5" />}
          label="Distance" 
          value={route.distance.toString()} 
          unit="km"
        />
        <StatCard 
          icon={<Clock className="w-5 h-5" />}
          label="Duration" 
          value={route.duration.toString()} 
          unit="h"
        />
        <StatCard 
          icon={<TrendingUp className="w-5 h-5" />}
          label="Ascent" 
          value={route.elevationGain.toString()} 
          unit="m"
        />
        <StatCard 
          icon={<TrendingDown className="w-5 h-5" />}
          label="Descent" 
          value={route.elevationGain.toString()} 
          unit="m"
        />
        <StatCard 
          icon={<Mountain className="w-5 h-5" />}
          label="Difficulty" 
          value={route.difficulty}
        />
        <StatCard 
          icon={<RotateCcw className="w-5 h-5" />}
          label="Route Type" 
          value={route.routeType}
        />
      </div>

      {/* Technical Level */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-foreground">Technical Level</h3>
        <Badge variant="secondary" className="w-fit">
          {route.technicalLevel}
        </Badge>
      </div>

      {/* Highlights */}
      {highlightLabels.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-foreground">Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {highlightLabels.map((h, index) => (
              <Badge key={index} variant="outline" className="gap-1">
                <span>{h?.icon}</span>
                {h?.label}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      {featureLabels.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-foreground">Route Features</h3>
          <div className="flex flex-wrap gap-2">
            {featureLabels.map((f, index) => (
              <Badge key={index} variant="secondary">
                {f?.label}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Facilities */}
      {facilityLabels.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-foreground">Facilities</h3>
          <div className="flex flex-wrap gap-2">
            {facilityLabels.map((f, index) => (
              <Badge key={index} variant="outline">
                {f?.label}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default RouteTechnicalDetails;
