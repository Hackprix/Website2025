export interface TimelineEvent {
    id: string;
    title: string;
    timing: string;
    venue: string;
    icon?: string;
    day: "day1" | "day2"; // NEW
  }
  
  export const timelineEvents: TimelineEvent[] = [
    {
      id: "1",
      title: "Opening Ceremony",
      timing: "10AM",
      venue: "4th Floor, Main Seminar Hall",
      icon: "🎉",
      day: "day1",
    },
    {
      id: "2",
      title: "Events",
      timing: "11AM",
      venue: "Main Expo Area",
      icon: "🧠",
      day: "day1",
    },
    {
      id: "3",
      title: "Workshop",
      timing: "2PM",
      venue: "Lab 1",
      icon: "💻",
      day: "day2",
    },
    {
      id: "4",
      title: "Closing Ceremony",
      timing: "5PM",
      venue: "Main Hall",
      icon: "🏁",
      day: "day2",
    },
  ];
  