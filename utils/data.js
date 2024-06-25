import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";

import { TITLES, PROJECT_CATEGORY } from "./constants";

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

export const projectData = [
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
