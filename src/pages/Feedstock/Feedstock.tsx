import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { ReactSVG } from "react-svg";
import classes from "./Feedstock.module.scss";
import {
  arrowLeft,
  cargoAverage,
  cargoCondidence,
  cargoCurrent,
} from "../../assets";

const feedstockData = [
  {
    img: cargoCurrent,
    text: "Current load",
    value: 385.71,
    valueUnit: "lb",
  },
  {
    img: cargoAverage,
    text: "Daily average load",
    value: 485.23,
    valueUnit: "lb",
  },
  {
    img: cargoCondidence,
    text: "Data confidence",
    value: 92,
    valueUnit: "%",
  },
];

export const Feedstock = () => {
  return (
    <Layout>
      <div className={classes.feedstock}>
        <Link to="/data-sources" className={classes.backLink}>
          <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
          Feedstock
        </Link>
        <div className={classes.tabs}>
          <div className={`${classes.tab} ${classes.active}`}>Overview</div>
          <div className={classes.tab}>Log</div>
        </div>
        <article className={classes.feedstockWrapper}>
          <div className={classes.feedstockInfo}>
            <div className={classes.rightTop}>
              {feedstockData.map((data, index) => (
                <div className={classes.singleItem} key={index}>
                  <img src={data.img} alt="Image" />
                  <p>{data.text}</p>
                  <h5>
                    {data.value} <span>{data.valueUnit}</span>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};
