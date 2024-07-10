import moment from "moment";
import { certificateData, projectData } from "./data";

export const calculateYearsOfExperience = () => {
  const START_WORKING_TIME = new Date(2019, 10, 1);
  return Math.ceil(new Date().getFullYear() - START_WORKING_TIME.getFullYear());
};

export const calculateNumberOfProjects = () => {
  return projectData.length;
};

export const calculateNumberOfCerts = () => {
  return certificateData.length;
};

export const compareDates = (d1, d2) => {
  const momentA = moment(d1, "DD/MM/YYYY");
  const momentB = moment(d2, "DD/MM/YYYY");
  if (momentA > momentB) return 1;
  else if (momentA < momentB) return -1;
  else return 0;
};
