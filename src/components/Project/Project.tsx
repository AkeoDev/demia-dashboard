import { useLoaderData } from "react-router-dom";
import { ProjectInfo, ProjectStatistic } from ".";
import { chart, sustainability } from "../../assets";
import { RecentActivity } from "../Activity";
import classes from "./Project.module.scss";

// const projectInfo = {
//   projectId: "C24FGH",
//   type: "Biogas - Electricity",
//   projectDev: "Consorcio Santa Marta S.A.",
//   methodology: "ACM0001 Flaring or use of landfill gas",
// };

// const statisticData = [
//   {
//     icon: sustainability,
//     amount: "18,463",
//     percentage: "+7%",
//     text: "GHG emissions last 30 days",
//   },
//   {
//     icon: sustainability,
//     amount: "18,463",
//     text: "GHG emissions last 30 days",
//   },
//   {
//     icon: chart,
//     amount: "92 %",
//     text: "Data confidence",
//   },
// ];

export const Project = () => {
  const loaderData: any = useLoaderData();

  const mapDataToProjectInfo = () => {
    const { id, methodology, developer, type } = loaderData;
    return {
      projectId: id,
      type,
      methodology,
      projectDev: developer
    }
  }
  
  return (
    <div className={classes.project}>
      <h1 className={classes.title}>{loaderData.name}</h1>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          <div className={classes.topContent}>
            <ProjectInfo projectInfo={mapDataToProjectInfo()} />
            <RecentActivity activity={loaderData.activity}/>
          </div>
          <div className={classes.statisticWrapper}>
            {loaderData.statistics.map((i: any, index: any) => (
              <ProjectStatistic key={index} statistic={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
