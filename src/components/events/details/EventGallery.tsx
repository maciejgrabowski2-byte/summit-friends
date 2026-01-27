import * as React from "react";
import { Plus } from "lucide-react";
import { Event } from "@/types/event";

interface EventGalleryProps {
  event: Event;
}

export function EventGallery({ event }: EventGalleryProps) {
  const mainImage = event.image || "/placeholder.svg";
  const galleryImages = event.images || [];
  
  // Create placeholder images if no gallery images exist
  const displayImages = galleryImages.length > 0 
    ? galleryImages 
    : [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400",
        "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
      ];

  return (
    <section className="flex flex-wrap gap-2 md:gap-2.5 w-full lg:max-w-[400px]">
      <img
        src={mainImage}
        alt={event.title}
        className="object-cover rounded-md w-full h-[220px] sm:h-[280px] md:h-[380px]"
      />
      <div className="flex gap-2 w-full">
        <img
          src={displayImages[0] || mainImage}
          alt="Event gallery image"
          className="object-cover rounded-md flex-1 h-[120px] sm:h-[160px] md:h-[210px]"
        />
        <div className="flex flex-col gap-2 w-20 sm:w-24">
          <img
            src={displayImages[1] || mainImage}
            alt="Small gallery image"
            className="object-cover w-full rounded-md h-[55px] sm:h-[75px] md:h-[100px]"
          />
          <img
            src={displayImages[2] || mainImage}
            alt="Small gallery image"
            className="object-cover w-full rounded-md h-[55px] sm:h-[75px] md:h-[100px]"
          />
        </div>
      </div>
      {displayImages.length > 3 && (
        <div className="flex gap-2">
          <img
            src={displayImages[3]}
            alt="Event gallery image"
            className="object-cover rounded-md h-[80px] sm:h-[100px] md:h-[120px] w-[120px] sm:w-[140px] md:w-[152px]"
          />
          {displayImages[4] && (
            <img
              src={displayImages[4]}
              alt="Event gallery image"
              className="object-cover rounded-md h-[80px] sm:h-[100px] md:h-[120px] w-16 sm:w-20 md:w-24"
            />
          )}
        </div>
      )}
      <button className="flex items-center gap-1 text-sm md:text-base text-primary hover:underline">
        <Plus className="w-4 h-4" />
        Add route photos
      </button>
    </section>
  );
}

export default EventGallery;
