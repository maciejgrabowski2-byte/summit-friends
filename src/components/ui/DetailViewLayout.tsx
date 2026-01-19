import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DetailViewLayoutProps {
  /** The back button destination path */
  backPath: string;
  /** The back button label text */
  backLabel: string;
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
  backPath,
  backLabel,
  heroImage,
  leftColumn,
  mainContent,
  sidebar,
}: DetailViewLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        onClick={() => navigate(backPath)}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        {backLabel}
      </Button>

      {heroImage && (
        <div className="w-full h-[200px] sm:h-[300px] rounded-xl overflow-hidden">
          {heroImage}
        </div>
      )}

      <div className="flex flex-col xl:flex-row gap-8">
        {/* Left column: Gallery/Map */}
        <div className="w-full xl:w-auto">
          {leftColumn}
        </div>

        {/* Middle column: Main Content */}
        <div className="flex-1 min-w-0">
          {mainContent}
        </div>

        {/* Right column: Sidebar */}
        {sidebar}
      </div>
    </div>
  );
}

export default DetailViewLayout;
