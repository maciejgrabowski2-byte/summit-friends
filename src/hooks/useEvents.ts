import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Event } from "@/types/event";
import { format, isToday, isTomorrow, parseISO } from "date-fns";

export type DbEvent = Tables<"events">;

// Transform database event to app Event type
const transformDbEventToEvent = (dbEvent: DbEvent): Event => {
  const eventDate = parseISO(dbEvent.event_date);
  const formattedDate = format(eventDate, "MMM d");
  const dayOfWeek = format(eventDate, "EEE");
  const timeStr = dbEvent.event_time 
    ? dbEvent.event_time.slice(0, 5) // Format HH:MM
    : undefined;

  return {
    id: dbEvent.id,
    title: dbEvent.title,
    date: formattedDate,
    day: dayOfWeek,
    time: timeStr,
    duration: dbEvent.duration || undefined,
    organizer: dbEvent.organizer,
    organizerAvatar: dbEvent.organizer_avatar || undefined,
    departureLocation: dbEvent.departure_location || undefined,
    location: dbEvent.location || undefined,
    transport: dbEvent.transport,
    activity: dbEvent.activity || "Hiking",
    activityBadge: dbEvent.activity_badge || undefined,
    difficulty: dbEvent.difficulty || undefined,
    distance: dbEvent.distance || undefined,
    elevation: dbEvent.elevation || undefined,
    totalHeight: dbEvent.total_height || undefined,
    heightType: dbEvent.height_type || undefined,
    image: dbEvent.image_url || "/placeholder.svg",
    images: dbEvent.gallery_images || undefined,
    participantsComing: dbEvent.max_participants 
      ? (dbEvent.max_participants - (dbEvent.spots_available || 0))
      : undefined,
    attendees: dbEvent.max_participants 
      ? (dbEvent.max_participants - (dbEvent.spots_available || 0))
      : undefined,
    spotsAvailable: dbEvent.spots_available || undefined,
    waitlist: dbEvent.waitlist_count || undefined,
    participants: dbEvent.participant_avatars || [],
    status: dbEvent.status || undefined,
    isFull: dbEvent.is_full || false,
    soldOut: dbEvent.is_sold_out || false,
    rating: dbEvent.rating || undefined,
  };
};

// Get date group label for events list
const getDateGroupLabel = (dateStr: string): string => {
  const date = parseISO(dateStr);
  if (isToday(date)) {
    return `Today, ${format(date, "EEEE")}`;
  }
  if (isTomorrow(date)) {
    return `Tomorrow, ${format(date, "EEEE")}`;
  }
  return format(date, "MMM d, EEEE");
};

// Fetch all events
export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: true })
        .order("event_time", { ascending: true });

      if (error) throw error;
      return data as DbEvent[];
    },
  });
};

// Fetch events grouped by date for the events list page
export const useEventsGroupedByDate = () => {
  return useQuery({
    queryKey: ["events", "grouped"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .gte("event_date", new Date().toISOString().split("T")[0])
        .order("event_date", { ascending: true })
        .order("event_time", { ascending: true });

      if (error) throw error;

      // Group events by date
      const grouped: Record<string, Event[]> = {};
      
      (data as DbEvent[]).forEach((dbEvent) => {
        const dateLabel = getDateGroupLabel(dbEvent.event_date);
        if (!grouped[dateLabel]) {
          grouped[dateLabel] = [];
        }
        grouped[dateLabel].push(transformDbEventToEvent(dbEvent));
      });

      return grouped;
    },
  });
};

// Fetch events for homepage gallery (featured events)
export const useGalleryEvents = () => {
  return useQuery({
    queryKey: ["events", "gallery"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .not("image_url", "eq", "/placeholder.svg")
        .order("event_date", { ascending: true })
        .limit(4);

      if (error) throw error;
      return (data as DbEvent[]).map(transformDbEventToEvent);
    },
  });
};

// Fetch single event by ID
export const useEvent = (eventId: string | undefined) => {
  return useQuery({
    queryKey: ["events", eventId],
    queryFn: async () => {
      if (!eventId) return null;
      
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .maybeSingle();

      if (error) throw error;
      return data ? transformDbEventToEvent(data) : null;
    },
    enabled: !!eventId,
  });
};
