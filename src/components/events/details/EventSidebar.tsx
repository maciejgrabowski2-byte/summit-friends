import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Divider } from "./Divider";

function OrganizerSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Organizer</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/2ec4157dc69febbf957638f978786ca3f721dca7?width=100" alt="Organizer" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-bold text-foreground">John Doe</h3>
            <p className="text-sm text-muted-foreground">Badge</p>
          </div>
        </div>
        <Button variant="secondary" size="sm">
          Send a message
        </Button>
      </div>
      <Divider className="pt-4" />
    </section>
  );
}

function ParticipantsSection() {
  const participantImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/3259d434afa918c3b00df2c010cd89b50f15cff4?width=64",
    "https://api.builder.io/api/v1/image/assets/TEMP/31aaf3d5a248fd7b6bff036254b3f69077d9d94c?width=64",
    "https://api.builder.io/api/v1/image/assets/TEMP/a039b7aae05ad11094502be4f7382407cb1404d7?width=64",
    "https://api.builder.io/api/v1/image/assets/TEMP/6836e824a668a87fc74c759bffc040d8cb729faa?width=64",
    "https://api.builder.io/api/v1/image/assets/TEMP/1d5d7c3f09ff6a6aca902c5135344102288a442e?width=64",
    "https://api.builder.io/api/v1/image/assets/TEMP/656b03c7d9e7655ee2d801734e5bf89889a4a98f?width=64",
    "https://api.builder.io/api/v1/image/assets/TEMP/e3d4cea873233c5ff72db442882a14d18bd49f66?width=64"
  ];

  const emptySlots = 4;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Participants</h2>
        <p className="text-sm text-muted-foreground">
          12 out of 20 / <span className="font-bold">4 spots left</span>
        </p>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex -space-x-2">
          {participantImages.map((src, index) => (
            <Avatar key={index} className="w-8 h-8 border-2 border-background">
              <AvatarImage src={src} alt={`Participant ${index + 1}`} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="flex -space-x-1 ml-2">
          {Array.from({ length: emptySlots - 1 }).map((_, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-xl bg-muted border-2 border-dashed border-border"
            />
          ))}
          <button className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
            <Plus className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
      <Divider className="pt-4" />
    </section>
  );
}

function DiscussionSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Discussion</h2>
      
      <article className="space-y-2">
        <div className="flex items-start gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/3259d434afa918c3b00df2c010cd89b50f15cff4?width=64" alt="Victor" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <span className="font-bold text-primary">Victor</span>
            <p className="text-sm text-foreground leading-6 mt-1">
              Do you think winter hiking boots or lighter trail running shoes would be
              better for this trek? If there's no snow and it's not too cold,
              I'm leaning towards the trail running shoes being best.
            </p>
          </div>
        </div>
        <div className="ml-10 text-xs text-muted-foreground">
          <button className="text-primary hover:underline">Like</button>
          {" - "}
          <button className="text-primary hover:underline">Reply</button>
          {" - 1d ago"}
        </div>
      </article>

      <article className="space-y-2 ml-8">
        <div className="flex items-start gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/5f7cc7a8ea248bc7b8b8ac66a5b59b9e724afc34?width=48" alt="Anna" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <span className="font-bold text-primary">Anna</span>
            <p className="text-sm text-foreground leading-6 mt-1">
              I only carry some clothes and necessary stuff, in total less than 4 kilos. I'm
              staying in houses
            </p>
          </div>
        </div>
        <div className="ml-8 text-xs text-muted-foreground">
          <button className="text-primary hover:underline">Like</button>
          {" - "}
          <button className="text-primary hover:underline">Reply</button>
          {" - 1d ago"}
        </div>
      </article>

      <button className="text-xs text-primary hover:underline ml-auto block">
        + 3 comments
      </button>
    </section>
  );
}

export function EventSidebar() {
  return (
    <aside className="w-full lg:w-[360px] xl:w-[400px] shrink-0">
      <div className="bg-muted rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
        <OrganizerSection />
        <ParticipantsSection />
        <DiscussionSection />
      </div>
    </aside>
  );
}

export default EventSidebar;
