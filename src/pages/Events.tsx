import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsList from "@/components/events/EventsList";
import EventsSidebar from "@/components/events/EventsSidebar";
import EventsFilters from "@/components/events/EventsFilters";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <h1 className="text-4xl font-bold text-foreground mb-8">Events</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 min-w-0 overflow-x-auto">
              <EventsFilters />
              <EventsList />
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <EventsSidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
