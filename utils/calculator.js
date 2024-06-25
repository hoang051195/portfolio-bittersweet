import { projectData } from "./data";

export const calculateYearsOfExperience = () => {
  const START_WORKING_TIME = new Date(2019, 10, 1);
  return Math.ceil(new Date().getFullYear() - START_WORKING_TIME.getFullYear());
};

export const calculateNumberOfProjects = () => {
  return projectData.length;
};

export const calculateNumberOfCerts = () => {
  return 10;
};
