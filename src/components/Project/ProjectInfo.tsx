import { copiulemu } from "../../assets";
import { ProjectInfoPropsType } from "../../utils/types";
import classes from "./ProjectInfo.module.scss";

export const ProjectInfo: React.FC<ProjectInfoPropsType> = ({projectInfo}) => {
  return (
    <section className={classes.projectInfo}>
      <img src={copiulemu} alt="Copiulemu Project Image" />
      <div className={classes.details}>
        <div className={classes.item}>
          <h6>Project Type</h6>
          <p>{projectInfo.type}</p>
        </div>
        <div className={classes.item}>
          <h6>Methodology</h6>
          <p>{projectInfo.methodology}</p>
        </div>
        <div className={classes.item}>
          <h6>Project Developer</h6>
          <p>{projectInfo.projectDev}</p>
        </div>
        <div className={classes.item}>
          <h6>Project ID</h6>
          <p>{projectInfo.projectId}</p>
        </div>
      </div>
    </section>
  );
}