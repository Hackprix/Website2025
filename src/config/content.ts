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
    marquee:"Department of Computer Science",     
    shortName: "CSE",
    logo: "/cse.png",
    description: "The Department of Computer Science Engineering at Lords Institute brings you cutting-edge technical events, hackathons, and workshops focused on the latest technologies in software development, artificial intelligence, and cybersecurity.",
    eventPoster: "/it.jpeg",
    events: [
      {
        name: "Code Quest",
        type: "Technical",
      },
      {
        name: "Hackathon",
        type: "Technical",
      },
      {
        name: "Gaming Tournament",
        type: "Non-Technical",
      },
      // Add more events
    ],
    socialLinks: {
      instagram: "https://instagram.com/cse_department",
    },
    registrationLink: "https://forms.google.com/cse-registration",
  },
  {
    id: "it",
    name: "Information Technology",
    shortName: "IT",
    marquee:"Department of Information and Technology",
    logo: "/it.png",
    description: "The IT Department showcases innovation through technical workshops, coding competitions, and project exhibitions focused on web technologies, cloud computing, and data analytics.",
    eventPoster: "/it.jpeg",
    events: [
      {
        name: "Web Development",
        type: "Technical",
      },
      {
        name: "UI/UX Design",
        type: "Technical",
      },
      {
        name: "Tech Quiz",
        type: "Technical",
      },
      
    ],
    socialLinks: {
      instagram: "https://instagram.com/it_department",
    },
    registrationLink: "https://forms.google.com/it-registration",
  },
  {
    id: "ds",
    name: "Computer Science in Data Science",
    marquee: "Department of Computer Science and Data Science",
    shortName: "CSD",
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
  },
  {
    id: "ai",
    name: "Computer Science in Machine Learning",
    marquee: "Department of Computer Science and Machine Learning",
    shortName: "CSM",
    logo: "/csm.png",
    description: "The Artificial Intelligence Department offers events focused on machine learning, data analytics, and artificial intelligence, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "AI Workshop",
        description: "Hands-on artificial intelligence workshop",
        type: "Workshop"
      },
      {
        title: "AI Competition",
        description: "Artificial intelligence competition",
        type: "Competition"
      }
    ] 
  },
  {
    id:"mech",
    name: "Mechanical Engineering",
    marquee: "Department of Mechanical Engineering",
    shortName: "ME",
    logo: "/mech.png",
    description: "The Mechanical Engineering Department offers events focused on mechanical design, automation, and manufacturing, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "Mechanical Workshop",
        description: "Mechanical design workshop",
        type: "Workshop"
      },
      {
        title: "Mechanical Competition",
        description: "Mechanical design competition",
        type: "Competition"
      }
    ]
  },
  {
    id: "civil",
    name: "Civil Engineering",
    marquee: "Department of Civil Engineering",
    shortName: "CE",
    logo: "/civil.png",
    description: "The Civil Engineering Department offers events focused on civil design, construction, and infrastructure, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "Civil Workshop",
        description: "Civil design workshop",
        type: "Workshop"
      }
    ]
  },
  {
    id:"mba",
    name: "Master of Business Administration",
    marquee: "Department of MBA",
    shortName: "MBA",
    logo: "/mba.png",
    description: "The MBA Department offers events focused on business management, entrepreneurship, and leadership, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "MBA Workshop",
        description: "Business management workshop",
        type: "Workshop"
      }
    ]
  },
  {
    id:"ece",
    name: "Electronics and Communication Engineering",
    marquee: "Department of Electronics and Communication Engineering",
    shortName: "ECE",
    logo: "/ece.png",
    description: "The Electronics and Communication Engineering Department offers events focused on electronics, communication, and signal processing, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "ECE Workshop",
        description: "Electronics and communication workshop",
        type: "Workshop"
      }
    ]
  }
];

export { MARQUEE, ABOUT, METRICS, TitleSponser, DEPARTMENTS };
