import { ReactSVG } from "react-svg";
import { arrowRight, infoIcon, plusIcon } from "../../assets";
import { Button } from "../../components/Buttons/Button";
import { Layout } from "../../components/Layout/Layout";
import classes from "./AnalyticsSetup.module.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

const analyticsData = [
  {
    active: true,
    slug: "GHG",
    text: "Baseline scenario GHG emissions",
  },
  {
    active: true,
    slug: "GHG",
    text: "Baseline scenario GHG emissions",
  },
  {
    active: false,
    slug: "HGH",
    text: "Baseline scenario GHG emissions",
  },
  {
    active: true,
    slug: "GHG",
    text: "Baseline scenario GHG emissions",
  },
  {
    active: true,
    slug: "GHG",
    text: "Baseline scenario GHG emissions",
  },
  {
    active: false,
    slug: "GHG",
    text: "Baseline scenario GHG emissions",
  },
  {
    active: false,
    slug: "GHG",
    text: "Baseline scenario GHG emissions",
  },
];

export const AnalyticsSetup = () => {

  const { slug } = useParams();
  const url = `/projects/${slug}/analytics-setup/`;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location]);
  
  return (
    <Layout>
      <div className={classes.analyticsSetup}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>Set up Analytics</h1>
          <Button icon={plusIcon} className={classes.button}>
            Add New
          </Button>
        </div>
        <div className={classes.content}>
          <div className={classes.innerContent}>
            <div className={classes.contentTitle}>
              <ReactSVG src={infoIcon} className={classes.icon}></ReactSVG>
              <h3>Set up monitoring parameters to activate Analytics</h3>
            </div>
            <div className={classes.dataContainer}>
              {analyticsData.map((item, index) => (
                <div className={classes.singleItem} key={index}>
                  <div className={classes.left}>
                    <input
                      type="checkbox"
                      name={`checkbox-${index}`}
                      id={`checkbox-${index}`}
                      defaultChecked={item.active}
                    />
                    <p>{item.text}</p>
                  </div>
                  <Link to={`${url}${item.slug}`} className={classes.right}>
                    {item.active ? (
                      "Edit parameters"
                    ) : (
                      "Set up parameters"
                    )}
                    <ReactSVG
                      src={arrowRight}
                      className={classes.arrowRight}
                    ></ReactSVG>
                  </Link>
                </div>
              ))}
            </div>
            <div className={classes.buttonContainer}>
              <Button className={classes.button}>Activate Analitics</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
