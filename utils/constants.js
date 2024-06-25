import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

export const TITLES = {
  EXPERIENCE: "experience",
  EDUCATION: "education",
  SKILLS: "skills",
  TOOLS: "tools",
};

export const PROJECT_CATEGORY = {
  ALL_PROJECTS: "all projects",
  REACT_JS: "react js",
  NEXT_JS: "next js",
  FULLSTACK: "fullstack",
};

export const socialIcons = [
  {
    path: "/",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/hoangeiu/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/hoangeiu",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
];
