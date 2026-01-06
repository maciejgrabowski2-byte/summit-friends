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
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-foreground mb-8">Events</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <EventsFilters />
              <EventsList />
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-80">
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
