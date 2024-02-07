import { ReactSVG } from "react-svg";
import { ProjectDetailsPropsType } from "../../utils/types";
import classes from "./ProjectDetails.module.scss";
import { Button } from "../Buttons/Button";
import { clockIcon } from "../../assets";

export const ProjectDetails: React.FC<ProjectDetailsPropsType> = ({projectDetails}) => {
  return (
    <article className={classes.projectDetails}>
      <figure>
        <img src={projectDetails.projectImage} alt="Project Image" />
      </figure>
      <section>
        <h3 className={classes.projectName}>{projectDetails.projectName}</h3>
        <div className={classes.projectInfo}>
          <div className={classes.info}>
            <ReactSVG className={classes.icon} src={clockIcon} />
            <p>{projectDetails.location}</p>
          </div>
          <div className={classes.info}>
            <ReactSVG className={classes.icon} src={clockIcon} />
            <p>{projectDetails.sensors}</p>
          </div>
          <div className={classes.info}>
            <ReactSVG className={classes.icon} src={clockIcon} />
            <p>{projectDetails.notifications}</p>
          </div>
        </div>
        <Button isLink href={projectDetails.link} className={classes.button}>
          View Dashboard
        </Button>
      </section>
    </article>
  );
};
