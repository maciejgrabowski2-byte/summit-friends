import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ActivityTags from "@/components/ActivityTags";
import MissionSection from "@/components/MissionSection";
import RoutesSection from "@/components/RoutesSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import EventsGallery from "@/components/EventsGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ActivityTags />
        <MissionSection />
        <EventsGallery />
        <RoutesSection />
        <CommunitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
