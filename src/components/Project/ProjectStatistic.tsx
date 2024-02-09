import { ReactSVG } from "react-svg";
import { ProjectStatisticPropsType } from "../../utils/types";
import classes from "./ProjectStatistic.module.scss";
import { chart, sustainability } from "../../assets";

export const ProjectStatistic: React.FC<ProjectStatisticPropsType> = (
  {statistic}
) => {

  const mapIconToType: any = {
      "sustainability": sustainability,
      "chart": chart
  }

  return (
    <div className={classes.statistic}>
      <div className={classes.amount}>
        <ReactSVG src={mapIconToType[statistic.type]} />
        <p>{statistic.amount}</p>
        {statistic.percentage ? <span>{statistic.percentage}</span> : null}
      </div>
      <p className={classes.text}>{statistic.text}</p>
    </div>
  );
};
