import * as React from "react";

interface Photo {
  image: string;
  altText?: string;
  className: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="flex overflow-hidden gap-2 items-center self-stretch max-sm:flex-wrap max-sm:gap-1.5">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.image}
          alt={photo.altText || ""}
          className={photo.className}
        />
      ))}
    </div>
  );
}

export default PhotoGallery;
