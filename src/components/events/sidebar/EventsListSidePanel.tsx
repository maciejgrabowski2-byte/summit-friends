import * as React from "react";
import EventSection from "./EventSection";

function EventsListSidePanel() {
  const upcomingEvents = [
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      timeAndPlace: {
        time: "at 6:45",
        startingPoint: "Munich",
        transport: "Train"
      },
      activity: {
        level: "Medium",
        activityIcon: "🚴",
        activityName: "Cycling",
        distance: "18km",
        elevation: "560m"
      },
      participants: [
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/00c16ac3e2eb1594d0944b1eddf441d70444e0de?width=50",
          altText: ""
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/d2a7580e2f4e6a6ca18b10d9878aa804b8981577?width=54",
          altText: ""
        }
      ],
      additionalCount: "+14,",
      organizerName: "Jean-Chrisian",
      status: "full"
    },
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      timeAndPlace: {
        time: "at 6:45",
        startingPoint: "Munich",
        transport: "Train"
      },
      activity: {
        level: "Medium",
        activityIcon: "🚴",
        activityName: "Cycling",
        distance: "18km",
        elevation: "560m"
      },
      participants: [
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/00c16ac3e2eb1594d0944b1eddf441d70444e0de?width=50",
          altText: ""
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/d2a7580e2f4e6a6ca18b10d9878aa804b8981577?width=54",
          altText: ""
        }
      ],
      additionalCount: "+14,",
      organizerName: "Jean-Chrisian",
      status: "full"
    }
  ];

  const pastEvents = [
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      timeAndPlace: {
        time: "at 6:45",
        startingPoint: "Munich",
        transport: "Train"
      },
      activity: {
        level: "Medium",
        activityIcon: "🚴",
        activityName: "Cycling",
        distance: "18km",
        elevation: "560m"
      },
      participants: [
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/5a521b253f6f84a0776bd608e15c12d1b3aa8af0?width=50",
          altText: ""
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/d2a7580e2f4e6a6ca18b10d9878aa804b8981577?width=54",
          altText: ""
        }
      ],
      additionalCount: "+14,",
      organizerName: "Jean-Chrisian",
      photos: [
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/18d027e2716ee61a91667075f3962e66dd4bdac8?width=140",
          altText: "",
          className: "object-cover rounded-md h-[67px] w-[70px] max-sm:h-[60px] max-sm:w-[63px]"
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/af235d65cdc7d7e850e1a7bbccb820cc411187e9?width=198",
          altText: "",
          className: "object-cover rounded-md h-[67px] w-[99px] max-sm:h-[60px] max-sm:w-[89px]"
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/c61b2a347c8208492e1f95abee67ee27f007a533?width=104",
          altText: "",
          className: "object-cover rounded-md h-[67px] w-[52px] max-sm:h-[60px] max-sm:w-[47px]"
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/ecc54801862e72a49126a6e9b5d9d75fd0e3c79d?width=140",
          altText: "",
          className: "object-cover rounded-md h-[67px] w-[70px] max-sm:h-[60px] max-sm:w-[63px]"
        }
      ]
    }
  ];

  return (
    <aside className="box-border flex flex-col gap-8 items-start px-6 py-8 w-full rounded-xl bg-muted max-w-[363px] max-md:gap-7 max-md:px-5 max-md:py-7 max-md:max-w-full max-sm:gap-6 max-sm:px-4 max-sm:py-6 max-sm:rounded-xl">
      <EventSection
        title="Your upcoming events"
        events={upcomingEvents}
        isPastEvents={false}
      />
      <EventSection
        title="Your past events"
        events={pastEvents}
        isPastEvents={true}
      />
    </aside>
  );
}

export default EventsListSidePanel;
