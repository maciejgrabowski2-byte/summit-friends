import * as React from "react";

interface EventDateProps {
  date: string;
  day: string;
}

function EventDate({ date, day }: EventDateProps) {
  return (
    <div className="flex gap-2.5 justify-center items-center">
      <div className="flex flex-col text-sm leading-5 text-muted-foreground w-[45px] max-sm:text-xs">
        <div className="text-sm font-bold text-muted-foreground max-sm:text-xs">
          {date}
        </div>
        <div className="text-sm text-muted-foreground max-sm:text-xs">{day}</div>
      </div>
    </div>
  );
}

export default EventDate;
