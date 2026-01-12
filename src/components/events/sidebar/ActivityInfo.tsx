import * as React from "react";

interface ActivityInfoProps {
  level: string;
  activityIcon: string;
  activityName: string;
  distance: string;
  elevation: string;
}

function ActivityInfo({ level, activityIcon, activityName, distance, elevation }: ActivityInfoProps) {
  return (
    <div className="flex flex-wrap gap-1 justify-between items-center self-stretch max-md:gap-1 max-sm:flex-wrap max-sm:gap-1.5">
      <div className="flex overflow-hidden gap-2.5 justify-center items-center px-1 py-px rounded bg-foreground">
        <span className="text-xs font-bold text-background max-sm:text-xs">
          {level}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-sm font-black text-muted-foreground">
          {activityIcon}
        </span>
        <span className="text-xs font-bold text-muted-foreground max-md:text-xs max-sm:text-xs">
          {activityName}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-sm font-black text-muted-foreground">
          ↔
        </span>
        <span className="text-xs font-bold text-muted-foreground max-md:text-xs max-sm:text-xs">
          {distance}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-sm font-black text-muted-foreground">
          ↗
        </span>
        <span className="text-xs font-bold text-muted-foreground max-md:text-xs max-sm:text-xs">
          {elevation}
        </span>
      </div>
    </div>
  );
}

export default ActivityInfo;
