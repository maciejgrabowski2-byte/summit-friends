import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Star, Calendar } from "lucide-react";
import { Divider } from "./Divider";

function CreatorSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Route Creator</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/2ec4157dc69febbf957638f978786ca3f721dca7?width=100" alt="Creator" />
            <AvatarFallback>MH</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-bold text-foreground">Mountain Hikers</h3>
            <p className="text-sm text-muted-foreground">15 routes created</p>
          </div>
        </div>
        <Button variant="secondary" size="sm">
          Follow
        </Button>
      </div>
      <Divider className="pt-4" />
    </section>
  );
}

function StatsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Route Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-primary">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold">4.7</span>
          </div>
          <p className="text-sm text-muted-foreground">Average rating</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-bold text-foreground">23</span>
          </div>
          <p className="text-sm text-muted-foreground">Times completed</p>
        </div>
      </div>
      <Divider className="pt-4" />
    </section>
  );
}

function CreateEventSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Plan an Event</h2>
      <p className="text-sm text-muted-foreground">
        Want to organize a group hike on this route? Create an event and invite others to join!
      </p>
      <Button className="w-full gap-2">
        <Plus className="w-4 h-4" />
        Create Event on This Route
      </Button>
      <Divider className="pt-4" />
    </section>
  );
}

function ReviewsPreview() {
  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3259d434afa918c3b00df2c010cd89b50f15cff4?width=64",
      rating: 5,
      text: "Absolutely stunning views! The trail was well-marked and the difficulty was as described."
    },
    {
      id: 2,
      author: "Thomas K.",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/31aaf3d5a248fd7b6bff036254b3f69077d9d94c?width=64",
      rating: 4,
      text: "Great route, but bring plenty of water. The last section is quite exposed."
    }
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Reviews</h2>
        <Badge variant="outline">12 reviews</Badge>
      </div>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <article key={review.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={review.avatar} alt={review.author} />
                <AvatarFallback>{review.author[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-foreground">{review.author}</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-primary fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{review.text}</p>
          </article>
        ))}
      </div>
      
      <button className="text-sm text-primary hover:underline">
        View all 12 reviews
      </button>
    </section>
  );
}

export function RouteSidebar() {
  return (
    <aside className="w-full lg:w-[400px] shrink-0">
      <div className="bg-muted rounded-xl p-6 space-y-6">
        <CreatorSection />
        <StatsSection />
        <CreateEventSection />
        <ReviewsPreview />
      </div>
    </aside>
  );
}

export default RouteSidebar;
