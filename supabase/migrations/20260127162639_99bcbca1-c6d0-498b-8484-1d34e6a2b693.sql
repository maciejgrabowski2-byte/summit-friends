-- Create events table for the hiking community app
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  
  -- Date & Time
  event_date DATE NOT NULL,
  event_time TIME,
  duration TEXT,
  
  -- Organizer
  organizer TEXT NOT NULL,
  organizer_avatar TEXT,
  
  -- Location & Transport
  departure_location TEXT,
  location TEXT,
  transport TEXT,
  
  -- Activity Details
  activity TEXT DEFAULT 'Hiking',
  activity_badge TEXT,
  difficulty TEXT,
  distance TEXT,
  elevation TEXT,
  total_height TEXT,
  height_type TEXT,
  
  -- Image
  image_url TEXT,
  gallery_images TEXT[],
  
  -- Participants
  max_participants INTEGER,
  spots_available INTEGER,
  waitlist_count INTEGER DEFAULT 0,
  participant_avatars TEXT[],
  
  -- Status & Flags
  status TEXT DEFAULT 'Open',
  is_full BOOLEAN DEFAULT false,
  is_sold_out BOOLEAN DEFAULT false,
  
  -- Rating
  rating NUMERIC(2,1),
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (events are public)
CREATE POLICY "Events are publicly readable"
  ON public.events
  FOR SELECT
  USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();