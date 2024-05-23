import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  reactlogo,
  jslogo,
  nodejslogo,
  tslogo,
  gitlogo,
  tailwindlogo,
  postgresql,
  vitelogo,
  linkedin,
  github,
  telegramIcon,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const timeoffServices = [
  "Login with a Secret Code Access",
  "Connected with an External Database",
  "Create New Members, Teams, and Time-off",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabContent = [
  {
    id: "0",
    title: "Languages and Tools",
    text: "Proficient in JavaScript (JS) and TypeScript (TS), I harness their flexibility and strong typing to build scalable and maintainable applications. Additionally, I utilize Vite for rapid development and Node.js for efficient server-side programming.",
  },
  {
    id: "1",
    title: "Libraries and Frameworks",
    text: "Specializing in React, I create immersive and responsive user interfaces that drive user engagement. I complement this with Tailwind CSS for streamlined and customizable styling, ensuring a modern and polished appearance for applications.",
  },
  {
    id: "2",
    title: "Others",
    text: "With expertise in PostgreSQL, MongoDB, and Git, I ensure robust data management and collaborative development practices. These tools enable efficient version control, seamless database operations, and effective project collaboration, contributing to the overall success of the development process.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "JavaScript",
    icon: jslogo,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "React",
    icon: reactlogo,
    width: 26,
    height: 36,
  },
  {
    id: "2",
    title: "NodeJS",
    icon: nodejslogo,
    width: 26,
    height: 36,
  },
  {
    id: "3",
    title: "Typescript",
    icon: tslogo,
    width: 26,
    height: 36,
  },
  {
    id: "4",
    title: "Git",
    icon: gitlogo,
    width: 26,
    height: 36,
  },
  {
    id: "5",
    title: "Tailwind",
    icon: tailwindlogo,
    width: 26,
    height: 36,
  },
  {
    id: "6",
    title: "Postgresql",
    icon: postgresql,
    width: 26,
    height: 36,
  },
  {
    id: "7",
    title: "ViteJS",
    icon: vitelogo,
    width: 26,
    height: 36,
  },
];

export const contact = [
  {
    id: "0",
    title: "GitHub",
    description: "Take a look at more of my repositories and projects",
    icon: github,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "LinkedIn",
    description:
      "You can view my professional experiences and some posts related to my career.",
    icon: linkedin,
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Telegram",
    description:
      "Feel free to send me a message; I will be happy to chat with you.",
    icon: telegramIcon,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const testimonials = [
  {
    id: "0",
    title: "I will highly recommend Nico.",
    text: " Nico brings positivity to the office environment, spreading smiles wherever he goes. Additionally, he is very good at bringing delicious treats which adds an extra touch of joy to the team. Nico is not only punctual but also a skilled software developer specializing in TypeScript within the React Native framework, Nico's expertise and dedication make him an invaluable asset to any team.",
    author: "August Mader",
    position: "CEO & Co-founder @AirPlate",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: "https://www.linkedin.com/in/august-mader/",
  },
  {
    id: "1",
    title: "Nico would be a great addition to any team.",
    text: "It was a pleasure to follow Nico's journey at HackYourFuture Denmark. He was a curious student constantly looking for learning opportunities. With the final project at HackYourFuture, Nico clearly demonstrated that he is technically capable of building high quality full-stack applications. Nico takes pride and responsibility in delivering working solutions and incorporates feedback well. I look forward to seeing his future development and achievements.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    author: "Orhan Toy",
    position: "Senior Software Engineer @GitHub",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "I am pleased to highly recommend Nicolás Quiroga.",
    text: "Nicolás has demonstrated his ability to successfully complete the development of enhancements and new features for our application. He works effectively as part of a team, showing perseverance and a strong focus on problem-solving. He has expertise in React, Node.js, and Typescript.",
    backgroundUrl: "src/assets/benefits/card-3.svg",
    author: "Troels Andreasen",
    position: "CTO & Co-founder @AirPlate",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: "https://www.linkedin.com/in/troels-dupont-andreasen-6b2923ba/",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
