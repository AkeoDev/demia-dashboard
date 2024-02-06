import { ReactSVG } from "react-svg";
import { ProjectStatisticPropsType } from "../../utils/types";
import classes from "./ProjectStatistic.module.scss";

export const ProjectStatistic: React.FC<ProjectStatisticPropsType> = (
  {statistic}
) => {
  return (
    <div className={classes.statistic}>
      <div className={classes.amount}>
        <ReactSVG src={statistic.icon} />
        <p>{statistic.amount}</p>
        {statistic.percentage ? <span>{statistic.percentage}</span> : null}
      </div>
      <p className={classes.text}>{statistic.text}</p>
    </div>
  );
};
