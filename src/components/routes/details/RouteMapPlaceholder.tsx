import * as React from "react";
import { Map, TrendingUp } from "lucide-react";

export function RouteMapPlaceholder() {
  return (
    <section className="flex flex-col gap-4 w-full max-w-[450px]">
      {/* Map Placeholder */}
      <div className="w-full aspect-[4/3] bg-muted rounded-xl border border-border flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
          <Map className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-foreground">Interactive Map</p>
          <p className="text-sm text-muted-foreground">Route visualization coming soon</p>
        </div>
      </div>
      
      {/* Elevation Profile Placeholder */}
      <div className="w-full h-[140px] bg-muted rounded-xl border border-border flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-foreground text-sm">Elevation Profile</p>
          <p className="text-xs text-muted-foreground">Chart coming soon</p>
        </div>
      </div>
    </section>
  );
}

export default RouteMapPlaceholder;
