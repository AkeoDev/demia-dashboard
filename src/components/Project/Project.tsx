import { ProjectInfo, ProjectStatistic } from ".";
import { chart, sustainability } from "../../assets";
import { Activity } from "../Activity";
import classes from "./Project.module.scss";

const projectInfo = {
  projectId: "C24FGH",
  type: "Biogas - Electricity",
  projectDev: "Consorcio Santa Marta S.A.",
  methodology: "ACM0001 Flaring or use of landfill gas",
};

const statisticData = [
  {
    icon: sustainability,
    amount: "18,463",
    percentage: "+7%",
    text: "GHG emissions last 30 days",
  },
  {
    icon: sustainability,
    amount: "18,463",
    text: "GHG emissions last 30 days",
  },
  {
    icon: chart,
    amount: "92 %",
    text: "Data confidence",
  },
];

export const Project = () => {
  return (
    <div className={classes.project}>
      <h1 className={classes.title}>Copiulemu LFG Site</h1>
      <article className={classes.content}>
        <div className={classes.innerContent}>
          <div className={classes.topContent}>
            <ProjectInfo projectInfo={projectInfo} />
            <Activity />
          </div>
          <div className={classes.statisticWrapper}>
            {statisticData.map((i, index) => (
              <ProjectStatistic key={index} statistic={i} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
