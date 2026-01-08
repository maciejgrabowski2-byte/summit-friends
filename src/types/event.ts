export interface Event {
  id: number | string;
  title: string;
  
  // Date & Time
  date?: string;
  day?: string;
  time?: string;
  duration?: string;
  
  // Organizer
  organizer: string;
  organizerAvatar?: string;
  
  // Location & Transport
  departureLocation?: string;
  location?: string;
  transport?: string | null;
  
  // Activity Details
  activity?: string;
  activityBadge?: string;
  difficulty?: string;
  distance?: string;
  elevation?: string;
  totalHeight?: string;
  heightType?: string;
  
  // Image
  image?: string;
  images?: string[];
  
  // Participants
  participantsComing?: number;
  attendees?: number;
  spotsAvailable?: number;
  waitlist?: number;
  participants?: string[];
  extraParticipants?: number;
  
  // Status & Flags
  status?: string;
  statusColor?: string;
  userStatus?: string;
  userStatusColor?: string;
  isFull?: boolean;
  soldOut?: boolean;
  
  // Rating
  rating?: number;
  
  // Actions (for profile variant)
  actions?: string[];
  primaryAction?: string;
  primaryActionColor?: string;
  showReview?: boolean;
}
