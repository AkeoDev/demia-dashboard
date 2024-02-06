import { Project } from '../../components/Project';
import classes from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <main className={classes.dashboard}>
      <Project />
    </main>
  );
}