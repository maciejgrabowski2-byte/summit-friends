import * as React from "react";
import { Share2, Bookmark, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Route } from "@/data/mockRoutes";
import { Divider } from "./Divider";
import { RouteTechnicalDetails } from "./RouteTechnicalDetails";
import { RouteEventHistory } from "./RouteEventHistory";

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Moderate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  Hard: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Expert: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

interface RouteInfoProps {
  route: Route;
}

function RouteHeader({ route }: RouteInfoProps) {
  return (
    <header className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2">
        <Badge className={`${difficultyColors[route.difficulty]} border-0`}>
          {route.difficulty}
        </Badge>
        <Badge variant="secondary">
          {route.technicalLevel}
        </Badge>
        <Badge variant="outline">
          {route.routeType}
        </Badge>
      </div>
      
      <h1 className="text-2xl font-bold text-foreground">
        {route.name}
      </h1>
      
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="w-4 h-4" />
        <span>{route.location}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="secondary" size="icon" className="rounded-xl">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-xl">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
        <Button className="px-6">
          Download GPX
        </Button>
      </div>
    </header>
  );
}

function DescriptionSection({ route }: RouteInfoProps) {
  return (
    <section className="flex flex-col gap-2 w-full">
      <h2 className="text-xl font-bold text-foreground">Description</h2>
      <p className="text-base leading-7 text-foreground">
        {route.description}
      </p>
      <p className="text-base leading-7 text-muted-foreground">
        This route offers a perfect blend of natural beauty and adventure. 
        Starting from the trailhead, you'll navigate through diverse terrain 
        including forest paths, rocky sections, and open meadows with 
        panoramic views. The trail is well-maintained but requires proper 
        hiking equipment and preparation.
      </p>
      <button className="text-base text-primary hover:underline self-start">
        Show more
      </button>
    </section>
  );
}

function TrailConditionsSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold text-foreground">Trail Conditions</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Last Updated</p>
          <p className="text-base text-foreground">Dec 15, 2024</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Current Status</p>
          <Badge variant="secondary" className="w-fit bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
            Open
          </Badge>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Surface</p>
          <p className="text-base text-foreground">Mixed (rock, dirt, gravel)</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Best Season</p>
          <p className="text-base text-foreground">May - October</p>
        </div>
      </div>
    </section>
  );
}

function GettingThereSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold text-foreground">Getting There</h2>
      <p className="text-base leading-7 text-foreground">
        The trailhead is accessible by public transport and car. There's a 
        parking area near the starting point with limited spaces during peak season.
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Public Transport</p>
          <p className="text-base text-foreground">Bus line 145, Train station nearby</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Parking</p>
          <p className="text-base text-foreground">€5/day at trailhead</p>
        </div>
      </div>
    </section>
  );
}

export function RouteInfo({ route }: RouteInfoProps) {
  return (
    <main className="flex flex-col gap-6 md:gap-8 w-full lg:max-w-[600px]">
      <RouteHeader route={route} />
      <Divider />
      <DescriptionSection route={route} />
      <TrailConditionsSection />
      <Divider />
      <RouteTechnicalDetails route={route} />
      <Divider />
      <GettingThereSection />
      <Divider />
      <RouteEventHistory />
    </main>
  );
}

export default RouteInfo;
