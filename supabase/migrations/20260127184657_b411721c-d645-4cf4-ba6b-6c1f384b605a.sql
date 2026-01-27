-- Add description column for event details
ALTER TABLE public.events ADD COLUMN IF NOT EXISTS description text;

-- Add INSERT policy to allow event creation
-- Note: This is a permissive policy for now. When authentication is implemented, 
-- this should be updated to require authenticated users
CREATE POLICY "Anyone can create events" 
ON public.events 
FOR INSERT 
WITH CHECK (true);

-- Add UPDATE policy for future editing capability
CREATE POLICY "Anyone can update events" 
ON public.events 
FOR UPDATE 
USING (true);