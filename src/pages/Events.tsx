import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsList from "@/components/events/EventsList";
import EventsSidebar from "@/components/events/EventsSidebar";
import EventsFilters from "@/components/events/EventsFilters";
import FullScreenModal from "@/components/ui/FullScreenModal";
import EventDetails from "@/components/events/details/EventDetails";
import { useTranslation } from "@/hooks/useTranslation";

const Events = () => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleEventClick = (eventId: string | number) => {
    setSelectedEventId(String(eventId));
  };

  const handleCloseModal = () => {
    setSelectedEventId(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8 overflow-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
            {t('events.pageTitle')}
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Main Content */}
            <div className="flex-1 min-w-0 overflow-x-auto">
              <EventsFilters />
              <EventsList onEventClick={handleEventClick} />
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <EventsSidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />

      {/* Event Details Modal */}
      {selectedEventId && (
        <FullScreenModal isOpen={!!selectedEventId} onClose={handleCloseModal}>
          <EventDetails eventId={selectedEventId} />
        </FullScreenModal>
      )}
    </div>
  );
};

export default Events;
