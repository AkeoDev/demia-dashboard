import { useLocation } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Project } from "../../components/Project/Project";
import { SitePlan } from "../../components/SitePlan/SitePlan";
import { useEffect } from "react";

export const Dashboard = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location]);

  return (
    <Layout>
      <Project />
      <SitePlan />
    </Layout>
  );
};
