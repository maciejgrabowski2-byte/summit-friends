import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventDetails from "@/components/events/details/EventDetails";

const EventDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <EventDetails />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
