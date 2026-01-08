import bavariaImg from "@/assets/route-bavaria.jpg";
import dolomitesImg from "@/assets/route-dolomites.jpg";
import swissAlpsImg from "@/assets/route-swiss-alps.jpg";
import lakeDistrictImg from "@/assets/route-lake-district.jpg";
import pyreneesImg from "@/assets/route-pyrenees.jpg";
import tyrolImg from "@/assets/route-tyrol.jpg";

export type Difficulty = "Easy" | "Moderate" | "Hard" | "Expert";
export type TechnicalLevel = "T1" | "T2" | "T3" | "T4" | "T5" | "T6";
export type RouteType = "Loop" | "Out & Back" | "Point-to-Point";
export type Highlight = "lakes" | "rivers" | "waterfalls" | "coastline" | "historical" | "ruins" | "viewpoints";
export type RouteFeature = "via-ferrata" | "climbing" | "canyoning" | "ridges" | "mountain-pass" | "avoid-roads";
export type Facility = "restaurants" | "mountain-huts" | "shelters" | "water-sources";

export interface Route {
  id: string;
  name: string;
  location: string;
  image: string;
  distance: number; // km
  duration: number; // hours
  elevationGain: number; // meters
  difficulty: Difficulty;
  technicalLevel: TechnicalLevel;
  routeType: RouteType;
  highlights: Highlight[];
  features: RouteFeature[];
  facilities: Facility[];
  description: string;
}

export const mockRoutes: Route[] = [
  {
    id: "1",
    name: "Zugspitze Summit Trail",
    location: "Bavaria, Germany",
    image: bavariaImg,
    distance: 21.5,
    duration: 9,
    elevationGain: 2050,
    difficulty: "Expert",
    technicalLevel: "T4",
    routeType: "Out & Back",
    highlights: ["viewpoints", "lakes"],
    features: ["via-ferrata", "ridges", "mountain-pass"],
    facilities: ["mountain-huts", "restaurants"],
    description: "Germany's highest peak with stunning alpine views"
  },
  {
    id: "2",
    name: "Tre Cime di Lavaredo Circuit",
    location: "Dolomites, Italy",
    image: dolomitesImg,
    distance: 9.8,
    duration: 4,
    elevationGain: 450,
    difficulty: "Moderate",
    technicalLevel: "T2",
    routeType: "Loop",
    highlights: ["viewpoints", "historical"],
    features: ["ridges"],
    facilities: ["mountain-huts", "restaurants", "water-sources"],
    description: "Iconic Dolomite peaks with WWI history"
  },
  {
    id: "3",
    name: "Eiger Trail",
    location: "Swiss Alps",
    image: swissAlpsImg,
    distance: 6.2,
    duration: 2.5,
    elevationGain: 200,
    difficulty: "Easy",
    technicalLevel: "T1",
    routeType: "Point-to-Point",
    highlights: ["viewpoints"],
    features: ["avoid-roads"],
    facilities: ["restaurants", "mountain-huts"],
    description: "Spectacular views of the famous Eiger North Face"
  },
  {
    id: "4",
    name: "Helvellyn via Striding Edge",
    location: "Lake District, England",
    image: lakeDistrictImg,
    distance: 12.4,
    duration: 6,
    elevationGain: 890,
    difficulty: "Hard",
    technicalLevel: "T3",
    routeType: "Loop",
    highlights: ["lakes", "viewpoints"],
    features: ["ridges"],
    facilities: ["shelters"],
    description: "Classic English mountain with famous knife-edge ridge"
  },
  {
    id: "5",
    name: "Cirque de Gavarnie",
    location: "Pyrenees, France",
    image: pyreneesImg,
    distance: 14.2,
    duration: 5,
    elevationGain: 670,
    difficulty: "Moderate",
    technicalLevel: "T2",
    routeType: "Out & Back",
    highlights: ["waterfalls", "viewpoints", "historical"],
    features: ["mountain-pass"],
    facilities: ["mountain-huts", "water-sources"],
    description: "UNESCO World Heritage cirque with Europe's tallest waterfall"
  },
  {
    id: "6",
    name: "Stubaier Höhenweg",
    location: "Tyrol, Austria",
    image: tyrolImg,
    distance: 18.5,
    duration: 8,
    elevationGain: 1200,
    difficulty: "Hard",
    technicalLevel: "T3",
    routeType: "Point-to-Point",
    highlights: ["viewpoints", "lakes"],
    features: ["mountain-pass", "ridges"],
    facilities: ["mountain-huts", "water-sources"],
    description: "High alpine traverse through stunning Tyrolean scenery"
  },
  {
    id: "7",
    name: "Königssee Lake Trail",
    location: "Bavaria, Germany",
    image: bavariaImg,
    distance: 8.4,
    duration: 3,
    elevationGain: 280,
    difficulty: "Easy",
    technicalLevel: "T1",
    routeType: "Out & Back",
    highlights: ["lakes", "waterfalls", "historical"],
    features: ["avoid-roads"],
    facilities: ["restaurants", "water-sources"],
    description: "Peaceful walk along Germany's cleanest lake"
  },
  {
    id: "8",
    name: "Via Ferrata delle Trincee",
    location: "Dolomites, Italy",
    image: dolomitesImg,
    distance: 7.2,
    duration: 5,
    elevationGain: 650,
    difficulty: "Expert",
    technicalLevel: "T5",
    routeType: "Loop",
    highlights: ["historical", "ruins", "viewpoints"],
    features: ["via-ferrata", "climbing"],
    facilities: ["mountain-huts"],
    description: "WWI via ferrata through historic trenches"
  },
  {
    id: "9",
    name: "Oeschinensee Circuit",
    location: "Swiss Alps",
    image: swissAlpsImg,
    distance: 5.6,
    duration: 2,
    elevationGain: 150,
    difficulty: "Easy",
    technicalLevel: "T1",
    routeType: "Loop",
    highlights: ["lakes", "viewpoints"],
    features: ["avoid-roads"],
    facilities: ["restaurants", "water-sources"],
    description: "UNESCO heritage alpine lake with crystal clear waters"
  },
  {
    id: "10",
    name: "Scafell Pike via Corridor Route",
    location: "Lake District, England",
    image: lakeDistrictImg,
    distance: 15.8,
    duration: 7,
    elevationGain: 980,
    difficulty: "Hard",
    technicalLevel: "T3",
    routeType: "Out & Back",
    highlights: ["viewpoints", "rivers"],
    features: ["ridges"],
    facilities: ["shelters", "water-sources"],
    description: "England's highest peak via dramatic mountain scenery"
  },
  {
    id: "11",
    name: "Brèche de Roland",
    location: "Pyrenees, France",
    image: pyreneesImg,
    distance: 16.5,
    duration: 7,
    elevationGain: 1100,
    difficulty: "Hard",
    technicalLevel: "T3",
    routeType: "Out & Back",
    highlights: ["viewpoints", "historical"],
    features: ["mountain-pass"],
    facilities: ["mountain-huts"],
    description: "Legendary gap in the Pyrenean ridge with mythical history"
  },
  {
    id: "12",
    name: "Seebensee & Drachensee",
    location: "Tyrol, Austria",
    image: tyrolImg,
    distance: 10.2,
    duration: 4.5,
    elevationGain: 550,
    difficulty: "Moderate",
    technicalLevel: "T2",
    routeType: "Loop",
    highlights: ["lakes", "viewpoints"],
    features: ["avoid-roads"],
    facilities: ["mountain-huts", "restaurants"],
    description: "Two stunning alpine lakes in the Mieminger range"
  }
];

export const difficultyOptions: Difficulty[] = ["Easy", "Moderate", "Hard", "Expert"];
export const technicalLevelOptions: TechnicalLevel[] = ["T1", "T2", "T3", "T4", "T5", "T6"];
export const routeTypeOptions: RouteType[] = ["Loop", "Out & Back", "Point-to-Point"];

export const highlightOptions: { value: Highlight; label: string; icon: string }[] = [
  { value: "lakes", label: "Lakes", icon: "🏞️" },
  { value: "rivers", label: "Rivers", icon: "🌊" },
  { value: "waterfalls", label: "Waterfalls", icon: "💧" },
  { value: "coastline", label: "Coastline", icon: "🏖️" },
  { value: "historical", label: "Historical Sites", icon: "🏛️" },
  { value: "ruins", label: "Ruins", icon: "🏚️" },
  { value: "viewpoints", label: "Viewpoints", icon: "👁️" },
];

export const featureOptions: { value: RouteFeature; label: string }[] = [
  { value: "via-ferrata", label: "Via Ferrata" },
  { value: "climbing", label: "Climbing" },
  { value: "canyoning", label: "Canyoning" },
  { value: "ridges", label: "Ridges" },
  { value: "mountain-pass", label: "Mountain Pass" },
  { value: "avoid-roads", label: "Avoid Main Roads" },
];

export const facilityOptions: { value: Facility; label: string }[] = [
  { value: "restaurants", label: "Restaurants" },
  { value: "mountain-huts", label: "Mountain Huts" },
  { value: "shelters", label: "Shelters" },
  { value: "water-sources", label: "Water Sources" },
];
