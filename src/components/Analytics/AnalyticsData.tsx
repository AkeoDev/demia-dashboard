import { ReactSVG } from "react-svg";
import classes from "./AnalyticsData.module.scss";
import { AnalyticsDataPropsType } from "../../utils/types";

export const AnalyticsData: React.FC<AnalyticsDataPropsType> = ({data}) => {
  return (
    <div className={classes.statistic}>
      <ReactSVG src={data.icon}></ReactSVG>
      <div className={classes.data}>
        <div className={classes.topData}>
          <h4>{data.value}</h4>
          {data.percentage ? <span>{data.percentage}</span> : null}
        </div>
        <p className={classes.text}>{data.text}</p>
      </div>
    </div>
  );
};
