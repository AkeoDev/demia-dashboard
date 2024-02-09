import { Link } from "react-router-dom";
import classes from "./RecentActivity.module.scss";
import { ActiveUser } from ".";
import { FunctionComponent } from "react";
import { IProjectActivity } from "../../utils/types/Project";

export const RecentActivity: FunctionComponent<{activity: IProjectActivity[]}> = ({activity = []}) => {
  return (
    <section className={classes.recentActivity}>
      <div className={classes.title}>
        <h3>Recent Activity</h3>
        <Link to={`/activity`}>View all</Link>
      </div>
      <div className={classes.users}>
        {activity.map((i: any, index: number) => (
          <ActiveUser key={index} activity={i} />
        ))}
      </div>
    </section>
  );
};
