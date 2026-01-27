import { Route, highlightOptions } from "@/data/mockRoutes";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Mountain, Ruler, TrendingUp } from "lucide-react";

interface RouteCardProps {
  route: Route;
  onSelect: (route: Route) => void;
  isSelected?: boolean;
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Moderate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  Hard: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Expert: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

const RouteCard = ({ route, onSelect, isSelected }: RouteCardProps) => {
  const highlightIcons = route.highlights
    .map((h) => highlightOptions.find((opt) => opt.value === h)?.icon)
    .filter(Boolean)
    .slice(0, 4);

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 hover:shadow-hover overflow-hidden group ${
        isSelected ? "ring-1 ring-primary shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.3)]" : ""
      }`}
      onClick={() => onSelect(route)}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={route.image}
          alt={route.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`${difficultyColors[route.difficulty]} border-0`}>
            {route.difficulty}
          </Badge>
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {route.technicalLevel}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {route.routeType}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
            {route.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{route.location}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Ruler className="w-4 h-4 text-primary" />
            <span>{route.distance} km</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{route.duration}h</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>{route.elevationGain}m</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            {highlightIcons.map((icon, index) => (
              <span key={index} className="text-base" role="img">
                {icon}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
          {route.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default RouteCard;
