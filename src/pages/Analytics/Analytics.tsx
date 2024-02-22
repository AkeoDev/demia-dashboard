import { Link, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Analytics.module.scss";
import { ReactSVG } from "react-svg";
import { settingsIcon, sustainability } from "../../assets";
import { AnalyticsData } from "../../components/Analytics";
import { GreenAreaAnalyticsChart, PinkLineChart } from "../../components/Graphs/Graphs";

const graphDataFirst = [
  {
    name: "Oct 20",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Oct 21",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Oct 22",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Oct 23",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Oct 24",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Oct 25",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Oct 26",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct 27",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Oct 28",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Oct 29",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const graphData = [
  {
    name: "Oct 20",
    uv: 20000,
    pv: 0,
    amt: 0,
  },
  {
    name: "Oct 21",
    uv: 45000,
    pv: 0,
    amt: 0,
  },
  {
    name: "Oct 22",
    uv: 65000,
    pv: 0,
    amt: 0,
  },
  {
    name: "Oct 23",
    uv: 98000,
    pv: 0,
    amt: 0,
  },
  {
    name: "Oct 24",
    uv: 120000,
    pv: 0,
    amt: 0,
  },
  {
    name: "Oct 25",
    uv: 145000,
    pv: 0,
    amt: 0,
  },
  {
    name: "Oct 26",
    uv: 160000,
    pv: 0,
    amt: 0,
  },
];

const chartsData = [
  {
    title: "Net methane destroyed by flare",
    value: "134,538",
    unit: "m3 CH4"
  },
  {
    title: "Net methane destroyed by flare",
    value: "126,841",
    unit: "m3 CH4"
  },
  {
    title: "Total methane sent to flare",
    value: "126,841",
    unit: "m3 CH4"
  },
  {
    title: "Total methane sent to flare",
    value: "134,538",
    unit: "m3 CH4"
  },
  {
    title: "Total GHG emissions from electricity generation and delivery",
    value: "112,5388",
    unit: "t CO2e"
  },
  {
    title: "Total GHG emissions from supplemental fossil fuel",
    value: "96,841",
    unit: "t CO2e"
  },
]

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
            {/* first main chart here */}
            <div className={classes.analyticsGreenChart}>
              <div className={classes.heading}>
                <h3>Total Project GHG emissions</h3>
                <div>
                  <h2>172,642</h2>
                  <span>t CH4</span>
                </div>
              </div>
              <PinkLineChart graphData={graphDataFirst} height={245}/>
            </div>
            {/* 3 elements */}
            <div className={classes.statisticWrapper}>
              {statisticsData.map((data: any, index: any) => (
                <AnalyticsData key={index} data={data} />
              ))}
            </div>
            {/* second big chart */}
            <div className={classes.analyticsGreenChart}>
              <div className={classes.heading}>
                <h3>Total methane emissions destroyed</h3>
                <div>
                  <h2>172,642</h2>
                  <span>t CH4</span>
                </div>
              </div>
              <GreenAreaAnalyticsChart graphData={graphData} height={245} />
            </div>
            {/* chart grid */}
            <div className={classes.grid}>
              {chartsData.map((item, index) => (
                <div className={classes.analyticsGreenChart} key={index}>
                  <div className={classes.heading}>
                    <h3>{item.title}</h3>
                    <div>
                      <h2>{item.value}</h2>
                      <span>{item.unit}</span>
                    </div>
                  </div>
                  <GreenAreaAnalyticsChart graphData={graphData} height={197} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
