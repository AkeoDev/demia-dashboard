import { Link } from "react-router-dom";
import { arrowLeft, flowmeter, statusPositive } from "../../assets";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Flowmeter.module.scss";
import { ReactSVG } from "react-svg";

const flowData = {
  image: flowmeter,
  infoData: [
    {
      title: "Sensor ID",
      value: "FIQ_4_3",
    },
    {
      title: "Accuracy",
      value: "± 1,5% of true value",
    },
    {
      title: "Manufacturer",
      value: "Esters Elektronik",
    },
    {
      title: "Installed on",
      value: "2016",
    },
    {
      title: "Model",
      value: "GD300",
    },
    {
      title: "Last Calibration",
      value: "27th of July 2021",
    },
    {
      title: "Serial Number",
      value: "1506 A 11426",
    },
    {
      title: "Next Calibration",
      value: "July 2022",
    },
  ],
};

export const Flowmeter = () => {
  return (
    <Layout>
      <div className={classes.flowmeter}>
        <Link to="/data-sources" className={classes.backLink}>
          <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
          Flowmeter 1
        </Link>
        <div className={classes.tabs}>
          <div className={`${classes.tab} ${classes.active}`}>Overview</div>
          <div className={classes.tab}>Log</div>
        </div>
        <article className={classes.flowmeterWrapper}>
          <div className={classes.flowmeterInfo}>
            <figure className={classes.image}>
              <img src={flowData.image} alt="Flow Image" />
            </figure>
            <div className={classes.rightSide}>
              <img src={statusPositive} className={classes.status} alt="Status Positive" />
              <div className={classes.data}>
                {flowData.infoData.map((data, index) => (
                  <div className={classes.item} key={index}>
                    <h6>{data.title}</h6>
                    <p>{data.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.bottom}>
              <h4>Cargo load</h4>
              <div className={classes.info}>
                <p>
                  Source <span>Flowmeter 1</span>
                </p>
                <p>
                  Last update <span>27 Oct 2023 - 6:45 PM</span>
                </p>
                <p>
                  Unit <span>0.05 Nm3</span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};
