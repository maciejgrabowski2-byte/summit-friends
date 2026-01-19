import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function FullScreenModal({ isOpen, onClose, children }: FullScreenModalProps) {
  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background">
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="fixed top-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted"
      >
        <X className="w-5 h-5" />
      </Button>

      {/* Scrollable content */}
      <div className="h-full overflow-y-auto">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default FullScreenModal;
