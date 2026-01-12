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
        <button className="px-2 py-1 rounded bg-primary/10 text-xs font-bold text-muted-foreground hover:bg-primary/20 transition-colors">
          Write reviews
        </button>
      )}
    </div>
  );
}

export default ParticipantsList;
