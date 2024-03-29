import { Link, useLocation, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import classes from "./AnalyticsDetails.module.scss";
import { ReactSVG } from "react-svg";
import { arrowLeft, formula } from "../../assets";
import {
  GreenAreaAnalyticsChart,
  PinkLineChart,
} from "../../components/Graphs/Graphs";
import { useEffect } from "react";

const graphData = [
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

const chartData = {
  title: "Total Project GHG emissions",
  value: "172,642",
  unit: "t CH4",
  url: "total-ghg-emission",
};

const parametersData = [
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: false,
    value: "20",
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
    value: "20",
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
    value: "20",
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion",
    input: true,
    value: "20",
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
    value: "",
  },
];

export const AnalyticsDetails = () => {
  const { analyticsSlug, slug } = useParams();
  const url = `/projects/${slug}/analytics`;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location]);

  return (
    <Layout>
      <div className={classes.titleContainer}>
        <Link to={url} className={classes.backLink}>
          <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
          {analyticsSlug}
        </Link>
      </div>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          <div className={classes.analyticsGreenChart}>
            <div className={classes.heading}>
              <h3>{chartData.title}</h3>
              <div>
                <h2>{chartData.value}</h2>
                <span>{chartData.unit}</span>
              </div>
            </div>
            {analyticsSlug === "Total Project GHG emissions" ? (
              <PinkLineChart graphData={graphData} height={245} />
            ) : (
              <GreenAreaAnalyticsChart graphData={graphData} height={245} />
            )}
          </div>
          <figure className={classes.imageContainer}>
            <img src={formula} alt="Formula" />
          </figure>
          <div className={classes.data}>
            {parametersData.map((item, index) => (
              <div className={classes.singleItemInput} key={index}>
                <div className={classes.left}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
                {item.input ? (
                  <div className={classes.right}>
                    <span>Value</span>
                    <input type="text" name="value" value={item.value} disabled/>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
