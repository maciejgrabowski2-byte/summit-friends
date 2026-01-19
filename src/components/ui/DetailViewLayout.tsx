import * as React from "react";

interface DetailViewLayoutProps {
  /** Optional hero image to display at the top */
  heroImage?: React.ReactNode;
  /** Left column content (gallery, map, etc.) */
  leftColumn: React.ReactNode;
  /** Main content column (info, details) */
  mainContent: React.ReactNode;
  /** Right sidebar content */
  sidebar: React.ReactNode;
}

export function DetailViewLayout({
  heroImage,
  leftColumn,
  mainContent,
  sidebar,
}: DetailViewLayoutProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      {heroImage && (
        <div className="w-full h-[180px] sm:h-[240px] md:h-[300px] rounded-xl overflow-hidden">
          {heroImage}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
        {/* Left column: Gallery/Map */}
        <div className="w-full lg:w-auto">
          {leftColumn}
        </div>

        {/* Middle column: Main Content */}
        <div className="flex-1 min-w-0 max-w-2xl">
          {mainContent}
        </div>

        {/* Right column: Sidebar */}
        {sidebar}
      </div>
    </div>
  );
}

export default DetailViewLayout;
