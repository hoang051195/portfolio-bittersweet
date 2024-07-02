import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  GanttChartSquare,
  Blocks,
  Gem,
} from "lucide-react";

import { TITLES, PROJECT_CATEGORY, TECHNOLOGY, COMPANY } from "./constants";
import { calculateYearsOfExperience } from "./calculator";

export const CV_LINK =
  "https://drive.google.com/file/d/1bew-vMY8BvEm7s9tty437CER53gElFDr/view?usp=sharing";

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Hoàng Lê",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "(+84) 355 205 917",
  },
  {
    icon: <MailIcon size={20} />,
    text: "leminhhoangk3@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 05 Nov, 1995",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "DCN",
    note: "Data Communication & Computer Network",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Thu Dau Mot, Binh Duong, VN",
  },
];

export const qualificationData = [
  {
    title: TITLES.EDUCATION,
    data: [
      {
        university: "Eastern International University",
        qualification: "Bachelor of DNC",
        years: "2013 - 2019",
        note: "Bachelor of Data Communication & Computer Network",
      },
    ],
  },
  {
    title: TITLES.EXPERIENCE,
    data: [
      {
        company: "VNTT",
        role: "Intern Software Engineer",
        years: "2018",
      },
      {
        company: "VNTT",
        role: "Software Engineer",
        years: "2019 - 2021",
      },
      {
        company: "Hitachi Digital Services",
        role: "Senior Software Engineer",
        years: "2021 - Present",
      },
    ],
  },
];

export const skillData = [
  {
    title: TITLES.SKILLS,
    data: [
      {
        name: "HTML, CSS, JavaScript, Typescript",
      },
      {
        name: "ReactJS, Redux, Redux-Saga, Enzyme, Jest, MaterialU",
      },
      {
        name: "Angular, Webpack, Bootstrap",
      },
      {
        name: "C#, .Net Core, Java, Java Spring Boot",
      },
      {
        name: "MySQL, PostgreSQL, MongoDB",
      },
      {
        name: "AWS, Azure, Git, SVN",
      },
    ],
  },
  {
    title: TITLES.TOOLS,
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/github.svg",
      },
      {
        imgPath: "/about/kubernetes.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

export const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Web designers craft the overall vision & plan for a website layout. Bridging the gap between imagination and reality.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: `Services with more than ${calculateYearsOfExperience()} years of experience. Providing quality work to clients and companies. Coding your vision to reality.`,
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Mobile Development",
    description:
      "Design, develop, deploy and maintain successful iOS and Android apps that delight your users and upscale your business.",
  },
];

export const projectData = [
  {
    image: "/work/3.png",
    category: PROJECT_CATEGORY.WORKING_PROJECT,
    name: "KEPCO",
    description:
      "Management system to predict the failure time of electrical equipment. ",
    detail:
      "Created management system to predict the failure time of electrical equipment. The solution saves time and money when it comes to repairs.",
    link: "/",
    github: "/",
    position: "Front End Developer",
    responsibility: "",
    duration: "4 months",
    teamSize: 16,
    technology: [
      TECHNOLOGY.REACT_JS,
      TECHNOLOGY.NET_CORE,
      TECHNOLOGY.POSTGRESQL,
      TECHNOLOGY.TYPESCRIPT,
      TECHNOLOGY.REDUX_THUNK,
      TECHNOLOGY.MATERIAL_UI,
      TECHNOLOGY.LEAFLET,
      TECHNOLOGY.WEBPACK,
      TECHNOLOGY.NODE_RED,
    ],
    company: COMPANY.HITACHI,
    startTime: "01/06/2021",
    endTime: "31/09/2022",
  },
  {
    image: "/work/3.png",
    category: PROJECT_CATEGORY.WORKING_PROJECT,
    name: "GETS",
    description:
      "The system improve the efficiency of planning and operation in electronic system.",
    detail:
      "The system aims to improve the efficiency of planning and operation work and ensure transparency in decision-making.",
    link: "/",
    github: "/",
    position: "Team Lead - Front End Developer",
    responsibility: "",
    duration: "6 months",
    teamSize: 15,
    technology: [
      TECHNOLOGY.ANGULAR,
      TECHNOLOGY.TYPESCRIPT,
      TECHNOLOGY.PYTHON,
      TECHNOLOGY.POSTGRESQL,
      TECHNOLOGY.LEAFLET,
      TECHNOLOGY.REDUX_THUNK,
      TECHNOLOGY.SCSS,
    ],
    company: COMPANY.HITACHI,
    startTime: "01/10/2021",
    endTime: "01/04/2022",
  },
  {
    image: "/work/3.png",
    category: PROJECT_CATEGORY.WORKING_PROJECT,
    name: "IM",
    description:
      "Interactive map to manage the location and status of network devices and customers.",
    detail:
      "Build an online interactive map to manage the location and status of 5000+ network devices and 12000+ customers.",
    link: "/",
    github: "/",
    position: "Software Developler",
    responsibility: "",
    duration: "1 year",
    teamSize: 7,
    technology: [
      TECHNOLOGY.REACT_JS,
      TECHNOLOGY.NODE_JS,
      TECHNOLOGY.MONGO_DB,
      TECHNOLOGY.LEAFLET,
      TECHNOLOGY.BOOTSTRAP,
      TECHNOLOGY.REDUX_THUNK,
    ],
    company: COMPANY.VNTT,
    startTime: "01/10/2020",
    endTime: "31/01/2021",
  },
  {
    image: "/work/3.png",
    category: PROJECT_CATEGORY.REACT_JS,
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: PROJECT_CATEGORY.FULLSTACK,
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: PROJECT_CATEGORY.NEXT_JS,
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: PROJECT_CATEGORY.NEXT_JS,
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: PROJECT_CATEGORY.FULLSTACK,
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: PROJECT_CATEGORY.FULLSTACK,
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: PROJECT_CATEGORY.REACT_JS,
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: PROJECT_CATEGORY.NEXT_JS,
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: PROJECT_CATEGORY.REACT_JS,
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
    link: "/",
    github: "/",
  },
];
