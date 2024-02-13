import { useMatches } from "react-router-dom";
import { ProjectInfo, ProjectStatistic } from ".";
import { RecentActivity } from "../Activity";
import classes from "./Project.module.scss";
import { IProject } from "../../utils/types/Project";

export const Project = () => {
  const loaderData: IProject = (useMatches()[0].data as { data: IProject, slug: string}).data;

  const mapDataToProjectInfo = () => {
    const { id, methodology, developer, type} = loaderData;
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
