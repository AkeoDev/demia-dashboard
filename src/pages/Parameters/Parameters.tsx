import { Link, useLocation, useParams } from "react-router-dom";
import { formula } from "../../assets";
import { Button } from "../../components/Buttons/Button";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Parameters.module.scss";
import { useEffect } from "react";

const parametersData = [
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: false,
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion",
    input: true,
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
  },
];

export const Parameters = () => {

  const { slug } = useParams();
  const url = `/projects/${slug}/analytics-setup`;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location]);

  return (
    <Layout>
      <>
        <h1 className={classes.title}>Customise Parameters</h1>
        <figure className={classes.imageContainer}>
          <img src={formula} alt="Formula" />
        </figure>
        <div className={classes.content}>
          <div className={classes.innerContent}>
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
                      <input type="text" name="value" />
                    </div>
                  ) : ""}
                </div>
              ))}
            </div>
            <div className={classes.buttons}>
                <Link to={url} className={classes.cancel}>Cancel</Link>
                <Button className={classes.save}>Save</Button>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};
