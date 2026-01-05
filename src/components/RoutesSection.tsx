import bavariaImg from "@/assets/route-bavaria.jpg";
import dolomitesImg from "@/assets/route-dolomites.jpg";
import swissAlpsImg from "@/assets/route-swiss-alps.jpg";
import lakeDistrictImg from "@/assets/route-lake-district.jpg";
import pyreneesImg from "@/assets/route-pyrenees.jpg";
import tyrolImg from "@/assets/route-tyrol.jpg";

const routes = [
  { name: "Bavaria, Germany", routes: "823 routes", image: bavariaImg },
  { name: "Dolomites, Italy", routes: "342 routes", image: dolomitesImg },
  { name: "Swiss Alps", routes: "912 routes", image: swissAlpsImg },
  { name: "Lake District, England", routes: "267 routes", image: lakeDistrictImg },
  { name: "Pyrenees, France", routes: "456 routes", image: pyreneesImg },
  { name: "Tyrol, Austria", routes: "534 routes", image: tyrolImg },
];

const RoutesSection = () => {
  return (
    <section id="routes" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Explore hiking routes
          </h2>
          <a
            href="#"
            className="text-primary font-semibold hover:underline underline-offset-4 hidden sm:inline-flex items-center"
          >
            Explore more routes
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {routes.map((route, index) => (
            <a
              key={route.name}
              href="#"
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-soft group-hover:shadow-card transition-shadow">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {route.name}
              </h3>
              <p className="text-xs text-muted-foreground">{route.routes}</p>
            </a>
          ))}
        </div>

        <a
          href="#"
          className="text-primary font-semibold hover:underline underline-offset-4 inline-flex items-center mt-8 sm:hidden"
        >
          Explore more routes
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default RoutesSection;
