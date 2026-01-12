import * as React from "react";

interface Participant {
  image: string;
  altText?: string;
}

interface ParticipantsListProps {
  participants: Participant[];
  additionalCount: string;
  organizerName: string;
  status?: string;
  showButton?: boolean;
}

function ParticipantsList({
  participants,
  additionalCount,
  organizerName,
  status,
  showButton = false
}: ParticipantsListProps) {
  return (
    <div className="flex flex-wrap gap-1 justify-between items-center self-stretch">
      <div className="flex flex-wrap gap-1 items-center">
        <div className="flex gap-0 items-center">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="flex relative flex-col justify-center items-center h-[26px] w-[25px]"
            >
              <img
                src={participant.image}
                alt={participant.altText || ""}
                className="object-cover shrink-0 rounded-xl border-background border-solid border-[3px] size-full"
              />
            </div>
          ))}
        </div>
        <span className="text-xs font-bold text-center text-muted-foreground w-[27px] max-sm:text-xs">
          {additionalCount}
        </span>
        <span className="text-xs text-muted-foreground max-sm:text-xs">
          by
        </span>
        <span className="text-xs text-muted-foreground max-sm:text-xs">
          {organizerName}
        </span>
      </div>
      {status && !showButton && (
        <div className="text-xs italic text-right text-muted-foreground max-sm:text-xs">
          {status}
        </div>
      )}
      {showButton && (
        <div className="flex relative justify-center items-center h-[18px] w-[78px]">
          <div className="relative shrink-0 h-[18px] w-[78px]">
            <div className="absolute top-0 left-0 rounded bg-primary/10 h-[18px] w-[78px]" />
            <div className="absolute left-0 h-3 text-xs font-bold text-center text-muted-foreground top-[3px] w-[78px]">
              Write reviews
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ParticipantsList;
