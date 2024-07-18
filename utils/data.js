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

import {
  TITLES,
  PROJECT_CATEGORY,
  TECHNOLOGY,
  COMPANY,
  CERTIFICATE_CATEGORY,
} from "./constants";
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
    image: "/work/wlms-project-card.png",
    category: PROJECT_CATEGORY.WORKING_PROJECT,
    name: "Water Loss",
    description: "The project deploys a water loss management system software.",
    detail:
      "The project deploys a water loss management system software. This project can help manage district metered areas to narrow losses to particular areas and provide near real time leak detection. ",
    link: "/",
    github: "/",
    position: "Team Lead - Front End Developer",
    responsibility: "",
    duration: "1 year",
    teamSize: 12,
    technology: [
      TECHNOLOGY.ANGULAR,
      TECHNOLOGY.SPRING_BOOT,
      TECHNOLOGY.POSTGRESQL,
      TECHNOLOGY.BOOTSTRAP,
      TECHNOLOGY.JAVA,
      TECHNOLOGY.TYPESCRIPT,
      TECHNOLOGY.LEAFLET,
    ],
    company: COMPANY.HITACHI,
    startTime: "01/04/2023",
    endTime: "30/04/2024",
  },
  {
    image: "/work/dssmith-project-card.png",
    category: PROJECT_CATEGORY.WORKING_PROJECT,
    name: "DS Smith",
    description:
      "A web application that visualizes chemical data is manufactured.",
    detail:
      "A web application which visualizes material data, in request research of 2017 to 2023, is manufactured. Visualize data depending on how to show plurality, such as a scatter diagram and SOM (self-organization map).",
    link: "/",
    github: "/",
    position: "Front End Developer",
    responsibility: "",
    duration: "9 months (3 phases)",
    teamSize: 5,
    technology: [
      TECHNOLOGY.REACT_JS,
      TECHNOLOGY.REDUX_THUNK,
      TECHNOLOGY.AWS,
      TECHNOLOGY.MATERIAL_UI,
    ],
    company: COMPANY.HITACHI,
    startTime: "01/12/2022",
    endTime: "31/03/2023",
  },
  {
    image: "/work/mdv-project-card.png",
    category: PROJECT_CATEGORY.WORKING_PROJECT,
    name: "MDV",
    description:
      "A web application that visualizes chemical data is manufactured.",
    detail:
      "A web application which visualizes material data, in request research of 2017 to 2023, is manufactured. Visualize data depending on how to show plurality, such as a scatter diagram and SOM (self-organization map).",
    link: "/",
    github: "/",
    position: "Front End Developer",
    responsibility: "",
    duration: "9 months (3 phases)",
    teamSize: 5,
    technology: [
      TECHNOLOGY.REACT_JS,
      TECHNOLOGY.REDUX_THUNK,
      TECHNOLOGY.PYTHON,
    ],
    company: COMPANY.HITACHI,
    startTime: "01/01/2024",
    endTime: "31/03/2024",
  },
  {
    image: "/work/kepco-project-card.png",
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
    image: "/work/gets-project-2.png",
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
    image: "/work/im-network.png",
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
  // {
  //   image: "/work/3.png",
  //   category: PROJECT_CATEGORY.REACT_JS,
  //   name: "Nexa Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/2.png",
  //   category: PROJECT_CATEGORY.FULLSTACK,
  //   name: "Solstice Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/1.png",
  //   category: PROJECT_CATEGORY.NEXT_JS,
  //   name: "Lumina Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/4.png",
  //   category: PROJECT_CATEGORY.NEXT_JS,
  //   name: "Evolve Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/4.png",
  //   category: PROJECT_CATEGORY.FULLSTACK,
  //   name: "Ignite Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/1.png",
  //   category: PROJECT_CATEGORY.FULLSTACK,
  //   name: "Envision Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/2.png",
  //   category: PROJECT_CATEGORY.REACT_JS,
  //   name: "Serenity Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/4.png",
  //   category: PROJECT_CATEGORY.NEXT_JS,
  //   name: "Nova Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/3.png",
  //   category: PROJECT_CATEGORY.REACT_JS,
  //   name: "Zenith Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quae.",
  //   link: "/",
  //   github: "/",
  // },
];

export const certificateData = [
  {
    image: "/certificate/material-ui-card.jpg",
    category: CERTIFICATE_CATEGORY.FRONT_END,
    name: "Implement High Fidelity Designs with Material-UI and ReactJS",
    description: "Integrate Material-UI with ReactJS to build websites.",
    detail: "",
    link: "https://www.udemy.com/certificate/UC-7eeb1393-ff59-4afe-b8d0-9af447fcf438/",
    technology: [TECHNOLOGY.MATERIAL_UI, TECHNOLOGY.REACT_JS],
    provider: "Udemy",
    archiveTime: "16/12/2022",
  },
  {
    image: "/certificate/advanced-scss-card.jpg",
    category: CERTIFICATE_CATEGORY.FRONT_END,
    name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    description: "Advanced CSS and Sass",
    detail: "",
    link: "https://www.udemy.com/certificate/UC-82255b24-882c-464d-af14-5ba5c8604f6c/",
    technology: [TECHNOLOGY.SCSS],
    provider: "Udemy",
    archiveTime: "22/03/2022",
  },
  {
    image: "/certificate/complete-react-developer-card.jpg",
    category: CERTIFICATE_CATEGORY.FRONT_END,
    name: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    description: "Complete React Developer",
    detail: "",
    link: "https://www.udemy.com/certificate/UC-828677ab-2755-4562-8bb8-b6623d85953e/",
    technology: [
      TECHNOLOGY.REACT_JS,
      TECHNOLOGY.REDUX_THUNK,
      TECHNOLOGY.REACT_HOOKS,
      TECHNOLOGY.GRAPHQL,
    ],
    provider: "Udemy",
    archiveTime: "07/04/2023",
  },
  {
    image: "/certificate/advanced-react-redux-card.jpg",
    category: CERTIFICATE_CATEGORY.FRONT_END,
    name: "Advanced React and Redux",
    description: "Advanced React and Redux",
    detail: "",
    link: "https://www.udemy.com/certificate/UC-31942505-98a6-42e5-908e-dd228481f716/",
    technology: [TECHNOLOGY.REACT_JS, TECHNOLOGY.REDUX_THUNK],
    provider: "Udemy",
    archiveTime: "12/04/2023",
  },
  {
    image: "/certificate/react-typescript-card.jpg",
    category: CERTIFICATE_CATEGORY.FRONT_END,
    name: "React and Typescript: Build a Portfolio Project",
    description: "React and Typescript: Build a Portfolio Project",
    detail: "",
    link: "https://www.udemy.com/certificate/UC-a1e2a91e-b84c-4b3a-a2fe-4e862deb0447/",
    technology: [TECHNOLOGY.REACT_JS, TECHNOLOGY.TYPESCRIPT],
    provider: "Udemy",
    archiveTime: "25/04/2023",
  },
  {
    image: "/certificate/wcf-card.jpg",
    category: CERTIFICATE_CATEGORY.FULLSTACK,
    name: "Learn WCF And Web APIs From Scratch",
    description: "Learn WCF And Web APIs From Scratch",
    detail: "",
    link: "https://www.udemy.com/certificate/UC-424d8678-d87e-496d-8e2d-b2db19a8d120/",
    technology: [TECHNOLOGY.WCF, TECHNOLOGY.WPF],
    provider: "Udemy",
    archiveTime: "12/04/2022",
  },
  {
    image: "/certificate/angular18-testing-card.jpg",
    category: CERTIFICATE_CATEGORY.FRONT_END,
    name: "Angular Testing Masterclass (Angular 18)",
    description: "Angular Testing",
    detail: "",
    link: "https://www.udemy.com/certificate/UC-0429f4c0-e464-4597-98b3-2f64a024ac30/",
    technology: [TECHNOLOGY.ANGULAR],
    provider: "Udemy",
    archiveTime: "09/01/2022",
  },
  {
    image: "/certificate/mysql-bootcamp-card.jpg",
    category: CERTIFICATE_CATEGORY.BACK_END,
    name: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    description: "MySQL",
    detail: "",
    link: "https://www.udemy.com/certificate/UC-9b0eb8db-2b56-4249-b53e-ad3d357abe59/",
    technology: [TECHNOLOGY.MYSQL, TECHNOLOGY.SQL],
    provider: "Udemy",
    archiveTime: "14/11/2022",
  },
];
