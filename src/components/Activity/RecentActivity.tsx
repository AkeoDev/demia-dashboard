import { Link, useMatches } from "react-router-dom";
import classes from "./RecentActivity.module.scss";
import { ActiveUser } from ".";
import { FunctionComponent } from "react";
import { IProject, IProjectActivity } from "../../utils/types/Project";

export const RecentActivity: FunctionComponent<{activity: IProjectActivity[]}> = ({activity = []}) => {
  const loaderSlug: string = (useMatches()[0].data as { data: IProject, slug: string}).slug;
  return (
    <section className={classes.recentActivity}>
      <div className={classes.title}>
        <h3>Recent Activity</h3>
        <Link to={`/projects/${loaderSlug}/activity`}>View all</Link>
      </div>
      <div className={classes.users}>
        {activity.map((i: any, index: number) => (
          <ActiveUser key={index} activity={i} />
        ))}
      </div>
    </section>
  );
};
