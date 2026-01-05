import { MapPin, Users } from "lucide-react";

const communities = [
  { city: "Munich", country: "Germany", members: "2,450", flag: "🇩🇪" },
  { city: "Zurich", country: "Switzerland", members: "1,820", flag: "🇨🇭" },
  { city: "Geneva", country: "Switzerland", members: "1,340", flag: "🇨🇭" },
  { city: "Vienna", country: "Austria", members: "1,680", flag: "🇦🇹" },
  { city: "Milan", country: "Italy", members: "1,230", flag: "🇮🇹" },
  { city: "Barcelona", country: "Spain", members: "980", flag: "🇪🇸" },
  { city: "Denver", country: "USA", members: "1,540", flag: "🇺🇸" },
  { city: "Vancouver", country: "Canada", members: "1,120", flag: "🇨🇦" },
];

const CommunitiesSection = () => {
  return (
    <section id="community" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Join your local community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find adventure buddies in your city. Our communities organize regular meetups, share local trail tips, and create lasting friendships.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {communities.map((community, index) => (
            <a
              key={community.city}
              href="#"
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{community.flag}</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  {community.members}
                </div>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {community.city}
              </h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {community.country}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center text-primary font-semibold hover:underline underline-offset-4"
          >
            View all communities
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitiesSection;
