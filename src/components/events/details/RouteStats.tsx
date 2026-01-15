import * as React from "react";
import { MoveHorizontal, TrendingUp, TrendingDown, Mountain, Clock, Star } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
}

function StatCard({ icon, label, value, unit }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-md border border-border h-[100px] w-full min-w-[140px]">
      <div className="text-muted-foreground mb-1">
        {icon}
      </div>
      <p className="text-sm font-bold text-muted-foreground">{label}</p>
      <p className="text-lg text-foreground">
        {value}{unit && <span className="text-sm ml-0.5">{unit}</span>}
      </p>
    </div>
  );
}

export function RouteStats() {
  return (
    <section className="flex flex-col gap-4 items-start w-full">
      <h2 className="text-xl font-bold text-foreground">Route details</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full">
        <StatCard 
          icon={<MoveHorizontal className="w-5 h-5" />}
          label="Distance" 
          value="29" 
          unit="km"
        />
        <StatCard 
          icon={<TrendingUp className="w-5 h-5" />}
          label="Ascent" 
          value="500" 
          unit="m"
        />
        <StatCard 
          icon={<TrendingDown className="w-5 h-5" />}
          label="Descent" 
          value="400" 
          unit="m"
        />
        <StatCard 
          icon={<Mountain className="w-5 h-5" />}
          label="Highest point" 
          value="1560" 
          unit="m"
        />
        <StatCard 
          icon={<Clock className="w-5 h-5" />}
          label="Duration" 
          value="2:29" 
        />
        <StatCard 
          icon={<Star className="w-5 h-5" />}
          label="Rating" 
          value="650" 
        />
      </div>
    </section>
  );
}

export default RouteStats;
