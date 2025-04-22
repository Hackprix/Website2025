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
];

export const STALL_TYPES: StallType[] = [
  "Food & Beverages",
  "Arts & Crafts",
  "Games & Activities",
  "Tech & Innovation",
  "Merchandise & Accessories",
  "Others"
]; 