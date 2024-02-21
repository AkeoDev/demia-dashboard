import { Link, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Analytics.module.scss";
import { ReactSVG } from "react-svg";
import { settingsIcon, sustainability } from "../../assets";
import { AnalyticsData } from "../../components/Analytics";

const statisticsData = [
  {
    icon: sustainability,
    value: "18,463",
    percentage: "+7%",
    text: "GHG emissions last 30 days",
  },
  {
    icon: sustainability,
    value: "18,463",
    percentage: "",
    text: "GHG emissions annu. est.",
  },
  {
    icon: sustainability,
    value: "18,463",
    percentage: "",
    text: "GHG emissions annu. est.",
  },
];

export const Analytics = () => {
  const { slug } = useParams();
  const url = `/projects/${slug}/analytics-setup/`;

  return (
    <Layout>
      <div className={classes.analytics}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>Analytics</h1>
          <Link to={url} className={classes.button}>
            <ReactSVG src={settingsIcon} className={classes.icon}></ReactSVG>
            Settings
          </Link>
        </div>
        <div className={classes.content}>
          <div className={classes.innerContent}>
            <div className={classes.statisticWrapper}>
              {statisticsData.map((data: any, index: any) => (
                <AnalyticsData key={index} data={data}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
