import { Layout } from '../../components/Layout/Layout';
import { Project } from '../../components/Project';
import classes from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <Layout>
      <Project />
    </Layout>
  );
}