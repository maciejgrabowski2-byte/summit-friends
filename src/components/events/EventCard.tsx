import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Event } from "@/types/event";
import EventCardRow from "./EventCardRow";
import EventCardGallery from "./EventCardGallery";
import EventCardCompact from "./EventCardCompact";
import EventCardProfile from "./EventCardProfile";

const eventCardVariants = cva("", {
  variants: {
    variant: {
      row: "",
      card: "",
      compact: "",
      profile: "",
    },
  },
  defaultVariants: {
    variant: "row",
  },
});

export interface EventCardProps extends VariantProps<typeof eventCardVariants> {
  event: Event;
  onClick?: () => void;
  className?: string;
  showReview?: boolean;
}

const EventCard = ({ event, variant, onClick, className, showReview }: EventCardProps) => {
  switch (variant) {
    case "card":
      return <EventCardGallery event={event} onClick={onClick} className={className} />;
    case "compact":
      return <EventCardCompact event={event} onClick={onClick} className={className} showReview={showReview} />;
    case "profile":
      return <EventCardProfile event={event} onClick={onClick} className={className} />;
    case "row":
    default:
      return <EventCardRow event={event} onClick={onClick} className={className} />;
  }
};

export default EventCard;
