import { Layout } from "../../components/Layout/Layout";
import { Project } from "../../components/Project/Project";
import { SitePlan } from "../../components/SitePlan/SitePlan";

export const Dashboard = () => {
  return (
    <Layout>
      <Project />
      <SitePlan />
    </Layout>
  );
};
