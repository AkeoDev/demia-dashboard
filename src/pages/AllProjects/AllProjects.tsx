import { projectImage } from "../../assets";
import classes from "./AllProjects.module.scss";
import { ProjectDetails } from "../../components/Project";
import { Layout } from "../../components/Layout/Layout";
import { FunctionComponent } from "react";

const projectsInfo = [
  {
    projectImage: projectImage,
    projectName: "Santa Marta LFG site",
    location: "Copiulemu, Chile",
    sensors: "16 sensors connected",
    notifications: "4 new notifications",
    link: "#"
  },
  {
    projectImage: projectImage,
    projectName: "Santa Marta LFG site",
    location: "Copiulemu, Chile",
    sensors: "16 sensors connected",
    notifications: "4 new notifications",
    link: "#"
  },
  {
    projectImage: projectImage,
    projectName: "Santa Marta LFG site",
    location: "Copiulemu, Chile",
    sensors: "16 sensors connected",
    notifications: "4 new notifications",
    link: "#"
  },
];

export const AllProjects: FunctionComponent = () => {
  return (
    <Layout>
      <h1 className={classes.title}>All Projects</h1>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          {projectsInfo.map((i, index) => (
            <ProjectDetails key={index} projectDetails={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
