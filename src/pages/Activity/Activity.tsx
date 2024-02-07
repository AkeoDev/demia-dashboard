import { FunctionComponent } from "react";
import classes from "./Activity.module.scss";

export const Activity: FunctionComponent = () => {
  return (
    <main className={classes.activity}>
      <h1 className={classes.title}>Activity</h1>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          
        </div>
      </div>
    </main>
  );
};
