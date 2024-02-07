import { Layout } from "../../components/Layout/Layout";
import classes from "./Activity.module.scss";

export const Activity: React.FC = () => {
  return (
    <Layout>
      <h1 className={classes.title}>Activity</h1>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          
        </div>
      </div>
    </Layout>
  );
};
