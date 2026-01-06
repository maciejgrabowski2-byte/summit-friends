import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, MessageCircle, Share2, Mountain, Bike, ArrowUpDown, Clock, MapPin } from "lucide-react";

const UserProfile = () => {
  const userTags = [
    "32 y.o.",
    "🌱 Sustainer",
    "🇩🇪 Based in Germany",
    "5 years hiking",
    "⛰️ 43 events organised",
    "61 hikes completed",
    "🚴 4 Cycling activities",
    "52 routes created",
    "8 Via Ferrata activities",
  ];

  const trailDifficulty = [
    { level: "T1", count: 0, color: "bg-green-400" },
    { level: "T2", count: 34, color: "bg-green-500" },
    { level: "T3", count: 23, color: "bg-yellow-400" },
    { level: "T4", count: 3, color: "bg-orange-400" },
    { level: "T5", count: 15, color: "bg-red-400" },
    { level: "T6", count: 4, color: "bg-red-600" },
  ];

  const reviews = [
    {
      id: 1,
      text: "Anna, thank you for organising an excellent \"tramping trip\". Certainly a fit and furious hike. See you on the next one",
      author: "Karina",
      event: "Hochstaufen (1771m)",
      date: "June 2024",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      text: "Amazing trip organizer! The route was well planned and Anna made sure everyone had a great time.",
      author: "Marcus",
      event: "Alpine Trail",
      date: "May 2024",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ];

  const activities = [
    {
      id: 1,
      organizer: "Vera",
      participants: 14,
      status: "Closed",
      statusColor: "bg-muted text-muted-foreground",
      title: "Jochberg hike and swim",
      userStatus: "You are going",
      userStatusColor: "bg-green-100 text-green-700",
      time: "6:45",
      location: "Munich",
      transport: "Train",
      type: "Hiking",
      difficulty: "T3",
      distance: "18km",
      elevation: "1982",
      duration: "4h 30min",
      actions: ["Share", "Comment"],
      primaryAction: "Unjoin",
      primaryActionColor: "text-red-500 border-red-500 hover:bg-red-50",
    },
    {
      id: 2,
      organizer: "Anna",
      participants: 14,
      status: "1 spot available",
      statusColor: "bg-green-100 text-green-700",
      title: "Jochberg hike and swim",
      userStatus: "You're the organiser",
      userStatusColor: "bg-primary/10 text-primary",
      time: "6:45",
      location: "Munich",
      transport: "Train",
      type: "Hiking",
      difficulty: "T3",
      distance: "18km",
      elevation: "1982",
      duration: "4h 30min",
      actions: ["Share", "Comment"],
      primaryAction: "Edit",
      primaryActionColor: "text-primary border-primary hover:bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Desktop Layout - Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-1 space-y-6 w-full max-w-[300px] mx-auto lg:mx-0">
              {/* Profile Header */}
              <Card className="border-0 bg-[#F2F3F6]">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src="https://i.pravatar.cc/200?img=68" alt="Anna" />
                        <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                      <Button variant="ghost" size="icon" className="absolute -right-2 -top-2">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                    <h1 className="text-2xl font-bold mt-4">Martin</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Mountain className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium">Trail Rookie</span>
                      <span>•</span>
                      <MessageCircle className="w-4 h-4" />
                      <span>34 reviews</span>
                    </div>
                  </div>

                  {/* User Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 justify-center">
                    {userTags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="border-0 bg-[#F2F3F6]">
                <CardContent className="pt-6">
                  <Tabs defaultValue="all-time" className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="last-month" className="flex-1 text-xs">LAST MONTH | 9</TabsTrigger>
                      <TabsTrigger value="all-time" className="flex-1 text-xs font-bold">ALL TIME | 49</TabsTrigger>
                      <TabsTrigger value="last-year" className="flex-1 text-xs">LAST YEAR | 43</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all-time" className="mt-4">
                      {/* Activity Icons */}
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <Mountain className="w-4 h-4" />
                          <span>43</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Bike className="w-4 h-4" />
                          <span>4</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <span>🧗</span>
                          <span>1</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <span>🏊</span>
                          <span>1</span>
                        </div>
                      </div>

                      {/* Distance and Elevation */}
                      <div className="flex justify-center gap-8 mb-6 text-sm">
                        <div>
                          <span className="text-muted-foreground">Distance: </span>
                          <span className="font-bold">34km</span>
                        </div>
                        <div className="border-l border-border pl-8">
                          <span className="text-muted-foreground">Elevation: </span>
                          <span className="font-bold">3.982m</span>
                        </div>
                      </div>

                      {/* Trail Difficulty Chart */}
                      <div className="flex items-end justify-center gap-2 h-24">
                        {trailDifficulty.map((trail) => (
                          <div key={trail.level} className="flex flex-col items-center gap-1">
                            <div
                              className={`w-10 ${trail.color} rounded-t-md flex items-center justify-center text-xs font-bold text-white`}
                              style={{ height: `${Math.max(trail.count * 2, 20)}px` }}
                            >
                              {trail.level}
                            </div>
                            <span className="text-xs text-muted-foreground">{trail.count}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="last-month">
                      <p className="text-center text-muted-foreground py-4">Last month stats</p>
                    </TabsContent>
                    <TabsContent value="last-year">
                      <p className="text-center text-muted-foreground py-4">Last year stats</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Reviews Section */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">MARTIN'S REVIEWS (34)</h2>
                    <Button variant="link" className="text-primary p-0">
                      Show all &gt;
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id} className="bg-muted/50">
                        <CardContent className="p-4">
                          <p className="text-sm mb-3">{review.text}</p>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={review.avatar} alt={review.author} />
                              <AvatarFallback>{review.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="text-xs">
                              <span className="font-medium text-primary">{review.author}</span>
                              <br />
                              <span className="text-muted-foreground">{review.event}, {review.date}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Activities */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="font-semibold mb-4">MARTIN'S ACTIVITIES</h2>
                  <Tabs defaultValue="upcoming" className="w-full">
                    <TabsList>
                      <TabsTrigger value="upcoming">Upcoming | 2</TabsTrigger>
                      <TabsTrigger value="recent">Recent | 1</TabsTrigger>
                      <TabsTrigger value="past">Past | 60</TabsTrigger>
                      <TabsTrigger value="organised">Organised | 43</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming" className="mt-4 space-y-4">
                      {activities.map((activity) => (
                        <Card key={activity.id} className="border">
                          <CardContent className="p-4">
                            {/* Organizer Row */}
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={`https://i.pravatar.cc/40?img=${activity.id + 10}`} alt={activity.organizer} />
                                <AvatarFallback>{activity.organizer[0]}</AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{activity.organizer}</span>
                              <span className="text-muted-foreground text-sm">+{activity.participants}</span>
                              <Badge className={activity.statusColor}>{activity.status}</Badge>
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>

                            {/* User Status */}
                            <Badge className={`${activity.userStatusColor} mb-3`}>
                              {activity.userStatus}
                            </Badge>
                            <span className="text-sm text-muted-foreground ml-2">
                              at {activity.time} · from {activity.location} · by {activity.transport}
                            </span>

                            {/* Activity Details */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3 mb-4">
                              <div className="flex items-center gap-1">
                                <Badge variant="outline" className="text-xs">{activity.difficulty}</Badge>
                                <Mountain className="w-4 h-4" />
                                <span>{activity.type}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <ArrowUpDown className="w-4 h-4" />
                                <span>{activity.distance}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{activity.elevation} elevation</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{activity.duration}</span>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Share2 className="w-4 h-4 mr-1" />
                                  Share
                                </Button>
                                <Button variant="outline" size="sm">
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  Comment
                                </Button>
                              </div>
                              <Button variant="outline" size="sm" className={activity.primaryActionColor}>
                                {activity.primaryAction}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                    <TabsContent value="recent">
                      <p className="text-center text-muted-foreground py-8">No recent activities</p>
                    </TabsContent>
                    <TabsContent value="past">
                      <p className="text-center text-muted-foreground py-8">Past activities will be shown here</p>
                    </TabsContent>
                    <TabsContent value="organised">
                      <p className="text-center text-muted-foreground py-8">Organised activities will be shown here</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
