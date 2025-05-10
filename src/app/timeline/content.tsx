export interface TimelineEvent {
  id: string;
  title: string;
  timing: string;
  venue?: string;
  icon?: string;
  day: "day1" | "day2";
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Check-in & Accommodation",
    timing: "8AM - 11AM",
    venue: "Lobby",
    icon: "🏨",
    day: "day1",
  },
  {
    id: "2",
    title: "Opening Ceremony",
    timing: "11AM - 11:40AM",
    venue: "4th Floor, Main Seminar Hall",
    icon: "🎉",
    day: "day1",
  },
  {
    id: "3",
    title: "Hacking Starts",
    timing: "12PM",
    venue: "Lab 1",
    icon: "💻",
    day: "day1",
  },
  {
    id: "4",
    title: "Lunch",
    timing: "1:30PM - 3:00PM",
    venue: "Canteen",
    icon: "🍽️",
    day: "day1",
  },
  {
    id: "5",
    title: "Snacks & Photo",
    timing: "6PM - 7PM",
    icon: "🍩",
    day: "day1",
  },
  {
    id: "6",
    title: "Mentoring Round 1",
    timing: "7:30PM - 8:30PM",
    icon: "💡",
    day: "day1",
  },
  {
    id: "7",
    title: "Dinner",
    timing: "9:30PM - 10:30PM",
    venue: "Canteen",
    icon: "🍽️",
    day: "day1",
  },
  {
    id: "8",
    title: "Mini Event",
    timing: "2PM - 2:30PM",
    venue: "2nd Floor, Seminar Hall",
    icon: "🏓",
    day: "day2",
  },
  {
    id: "9",
    title: "BreakFast",
    timing: "7AM - 8:30AM",
    venue: "Canteen",
    icon: "🍳",
    day: "day2",
  },
  {
    id: "10",
    title: "Mentoring Round 2",
    timing: "10:00AM - 11:00AM",
    icon: "💡",
    day: "day2",
  },
  {
    id: "11",
    title: "Lunch",
    timing: "1:30PM - 2:30PM",
    venue: "Canteen",
    icon: "🍽️",
    day: "day2",
  },  
  {
    id: "12",
    title: "Self Judging",
    timing: "2:00PM - 3:30PM",
    icon: "💻",
    day: "day2",
  },
  {
    id: "13",
    title: "Hacking Ends",
    timing: "4PM",
    day: "day2",
  },
  {
    id: "14",
    title: "Final Judging",
    timing: "4:10PM - 5:10PM",
    icon: "🏆",
    day: "day2",
  },  
  {
    id: "15",
    title: "Wrap up & Chill",
    timing: "5:30PM - 6:00PM",
    day: "day2",
  },  
  {
    id: "16",
    title: "Winners Announcement & Closing Ceremony",
    timing: "6:00PM - 8:00PM",
    day: "day2",
  },  

];
