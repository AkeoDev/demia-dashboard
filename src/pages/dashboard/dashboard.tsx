import { FunctionComponent } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Project } from '../../components/Project';

export const Dashboard: FunctionComponent = () => {
  return (
    <Layout>
      <Project />
    </Layout>
  );
}