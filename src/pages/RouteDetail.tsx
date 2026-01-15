import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteDetails from "@/components/routes/details/RouteDetails";

const RouteDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <RouteDetails />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RouteDetail;
