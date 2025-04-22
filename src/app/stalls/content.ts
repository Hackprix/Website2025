export type StallType = 
  | "Food & Beverages"
  | "Arts & Crafts"
  | "Games & Activities"
  | "Tech & Innovation"
  | "Merchandise & Accessories"
  | "Others";

export interface Stall {
  id: string;
  name: string;
  image: string;
  stallNumber: string;
  type: StallType;
  description: string;
}

export const STALLS: Stall[] = [
  {
    id: "1",
    name: "SE7EN",
    image: "/assets/stalls/seven.png",
    stallNumber: "S15",
    type: "Food & Beverages",
    description: "SERVING VIBES AND BITES",
  },
  {
    id: "2",
    name: "OneBite",
    image: "/assets/stalls/onebite.png",
    stallNumber: "F2",
    type: "Food & Beverages",
    description: "Satiate Your Crave For Hunger 😋",
  },
  {
    id: "3",
    name: "Cocoacrafts ",
    image: "/assets/stalls/cocoacrafts.png",
    stallNumber: "S14",
    type: "Food & Beverages",
    description: "Baker dreams • Crafted carvings ",
  },
  {
    id: "4",
    name: "FIZZ AND FRY",
    image: "/assets/stalls/fizzfry.jpg",
    stallNumber: "F4",
    type: "Food & Beverages",
    description: "Different items over all the stalls",
  },
  {
    id: "5",
    name: "FITNESS BOOSTERS",
    image: "/assets/stalls/fitness.jpeg",
    stallNumber: "",
    type: "Others",
    description: "Supplement Store",
  },
  {
    id: "6",
    name: "Crimson brew",
    image: "/assets/stalls/crimsonbrew.jpeg",
    stallNumber: "S14",
    type: "Food & Beverages",
    description: "Crimson brew we sip the boldest brew",
  },
];

export const STALL_TYPES: StallType[] = [
  "Food & Beverages",
  "Arts & Crafts",
  "Games & Activities",
  "Tech & Innovation",
  "Merchandise & Accessories",
  "Others"
]; 