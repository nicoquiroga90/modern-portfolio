import {
  testimonialsIcon1,
  testimonialsIcon2,
  testimonialsIcon3,
  testimonialsImage2,
  chromecast,
  disc02,
  discordBlack,
  whatsapp,
  file02,
  homeSmile,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  telegram,
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
  testimonialsCard1,
  testimonialsCard2,
  testimonialsCard3,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "My Skills",
    url: "#skills",
  },
  {
    id: "1",
    title: "My projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Testimonials",
    url: "#testimonial",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

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

export const collabContent = [
  {
    id: "0",
    title: "Languages and Tools",
    text: "Proficient in JavaScript (JS), TypeScript (TS), and Next.js, I harness their flexibility, strong typing, and powerful features like server-side rendering and static site generation to build scalable, maintainable, and high-performance applications.",
  },
  {
    id: "1",
    title: "Libraries and Frameworks",
    text: "Specializing in React, I create immersive and responsive user interfaces that drive user engagement. I complement this with Tailwind CSS for streamlined and customizable styling, ensuring a modern and polished appearance for applications.",
  },
  {
    id: "2",
    title: "Others",
    text: "With expertise in Git and introductory cloud management with AWS/Azure, I ensure collaborative development practices and efficient cloud operations. These tools enable effective version control, seamless project collaboration, and contribute to the overall success of the development process.",
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
    contact: false,
    github: "https://github.com/nicoquiroga90",
    white: true,
  },
  {
    id: "1",
    title: "LinkedIn",
    description:
      "You can view my professional experiences and some posts related to my career.",
    icon: linkedin,
    contact: false,
    linkedin: "https://www.linkedin.com/in/nicolas-quiroga90/",
    white: true,
  },
  {
    id: "2",
    title: "Email",
    description:
      "Feel free to send me a email; I will be happy to chat with you.",
    icon: telegramIcon,
    contact: true,
    telegram: "mailto:nicoq1290@gmail.com",
  },
];

export const testimonials = [
  {
    id: "0",
    title: "I will highly recommend Nico.",
    text: " Nico brings positivity to the office environment, spreading smiles wherever he goes. Additionally, he is very good at bringing delicious treats which adds an extra touch of joy to the team. Nico is not only punctual but also a skilled software developer specializing in TypeScript within the React Native framework, Nico's expertise and dedication make him an invaluable asset to any team.",
    author: "August Mader",
    position: "CEO & Co-founder @AirPlate",
    backgroundUrl: testimonialsCard1,
    iconUrl: testimonialsIcon1,
    imageUrl: testimonialsImage2,
    link: "https://www.linkedin.com/in/august-mader/",
  },
  {
    id: "1",
    title: "Nico would be a great addition to any team.",
    text: "It was a pleasure to follow Nico's journey at HackYourFuture Denmark. He was a curious student constantly looking for learning opportunities. With the final project at HackYourFuture, Nico clearly demonstrated that he is technically capable of building high quality full-stack applications. Nico takes pride and responsibility in delivering working solutions and incorporates feedback well. I look forward to seeing his future development and achievements.",
    backgroundUrl: testimonialsCard2,
    author: "Orhan Toy",
    position: "Senior Software Engineer @GitHub",
    iconUrl: testimonialsIcon2,
    imageUrl: testimonialsImage2,
    link: "https://www.linkedin.com/in/orhantoy/",
    light: true,
  },
  {
    id: "2",
    title: "I am pleased to highly recommend Nicolás Quiroga.",
    text: "Nicolás has demonstrated his ability to successfully complete the development of enhancements and new features for our application. He works effectively as part of a team, showing perseverance and a strong focus on problem-solving. He has expertise in React, Node.js, and Typescript.",
    backgroundUrl: testimonialsCard3,
    author: "Troels Andreasen",
    position: "CTO & Co-founder @AirPlate",
    iconUrl: testimonialsIcon3,
    imageUrl: testimonialsImage2,
    link: "https://www.linkedin.com/in/troels-dupont-andreasen-6b2923ba/",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/users/nicoq1290",
  },
  {
    id: "1",
    title: "WhatsApp",
    iconUrl: whatsapp,
    url: "https://wa.me/4552656579",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/NicoQ1290",
  },
];
