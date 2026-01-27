import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventDetails from "@/components/events/details/EventDetails";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {id ? (
            <EventDetails eventId={id} />
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              Event not found
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
