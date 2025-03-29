const MARQUEE = [
  "Bringing Innovation across India!",
  "Experience 2 Days of Non-Stop Fun & Learning",
  "Workshops, Networking, and Exciting Prizes Await!",
];
const ABOUT = {
  title: "About", 
  subtitle: "Discover the Spirit of Innovation and Celebration!",
  description: "SanketikaFest is an exciting annual event organized by Lords Institute of Engineering and Technology, bringing together students, innovators, and enthusiasts from diverse backgrounds. It features a perfect blend of technical and non-technical competitions, interactive workshops, inspiring speaker sessions, and fun-filled activities. The fest serves as a platform to showcase talent, learn new skills, and engage with like-minded individuals, fostering creativity and collaboration. Whether you're here to compete, explore, or simply enjoy the experience, SanketikaFest promises an unforgettable journey of knowledge and entertainment!"
}

const METRICS = [
  {
      id: 1, 
      label: "Participants", 
      number: 4000
  }, 
  {
      id: 2, 
      label: "Workshops & Events", 
      number: 20
  },
  {
      id: 3,
      label: "Competitions", 
      number: 25
  },
  {
      id: 4,
      label: "Prize Pool", 
      number: 2,  // Keep it as a number
      isCurrency: true // Add a flag to handle special formatting
}
]
const TitleSponser = {
  title: "Title Sponsor",
  subtitle: "Lords Institute of Engineering and Technology",
  description: "Lords Institute of Engineering and Technology proudly serves as the Title Sponsor for SanketikaFest, providing the venue, funding, and essential support to bring this event to life. As the host institution, they play a crucial role in facilitating a platform where students, professionals, and tech enthusiasts can engage in a wide range of technical and non-technical competitions, hands-on workshops, speaker sessions, and interactive activities.Their commitment to fostering innovation, creativity, and knowledge-sharing ensures that SanketikaFest is not just an event, but an experience that inspires learning and growth. By providing an ecosystem that encourages collaboration, networking, and skill-building, Lords Institute empowers students to explore cutting-edge technologies, develop solutions to real-world problems, and connect with industry leaders."
};

const DEPARTMENTS = [
  {
    id: "cse",
    name: "Computer Science Engineering",
    shortName: "CSE",
    logo: "/cse.png",
    poster: "/departments/cse-poster.png",
    description: "The Department of Computer Science Engineering at Lords Institute brings you cutting-edge technical events, hackathons, and workshops focused on the latest technologies in software development, artificial intelligence, and cybersecurity.",
    events: [
      {
        title: "Code Quest",
        description: "24-hour coding competition",
        type: "Competition"
      },
      {
        title: "Hack Lords",
        description: "Hackathon focused on solving real-world problems",
        type: "Hackathon"
      }
    ]
  },
  {
    id: "it",
    name: "Information Technology",
    shortName: "IT",
    logo: "/it.png",
    poster: "/departments/it-poster.png",
    description: "The IT Department showcases innovation through technical workshops, coding competitions, and project exhibitions focused on web technologies, cloud computing, and data analytics.",
    events: [
      {
        title: "Web Masters",
        description: "Web development competition",
        type: "Competition"
      },
      {
        title: "Cloud Camp",
        description: "Workshop on cloud technologies",
        type: "Workshop"
      }
    ]
  },
  {
    id: "ds",
    name: "Data Science",
    shortName: "DS",
    logo: "/csd.png",
    poster: "/departments/ds-poster.png",
    description: "The Data Science Department brings you events focused on machine learning, data analytics, and artificial intelligence, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "Data Derby",
        description: "Data analysis competition",
        type: "Competition"
      },
      {
        title: "ML Workshop",
        description: "Hands-on machine learning workshop",
        type: "Workshop"
      }
    ]
  }
];

export { MARQUEE, ABOUT, METRICS, TitleSponser, DEPARTMENTS };
