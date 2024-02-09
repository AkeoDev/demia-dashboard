import { ActivityPropsType } from "../../utils/types";
import classes from "./ActiveUser.module.scss";

export const ActiveUser: React.FC<ActivityPropsType> = ({ activity }) => {
  return (
    <div className={classes.activeUser}>
      <div className={classes.userLeft}>
        <div className={classes.userIcon}>{activity.initials}</div>
        <div className={classes.userInfo}>
          <h4>
            {activity.name}
          </h4>
          <p>{activity.action}</p>
        </div>
      </div>
      <span>{activity.timestamp}</span>
    </div>
  );
};
