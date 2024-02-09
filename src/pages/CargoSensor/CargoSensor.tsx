import { Link } from "react-router-dom";
import classes from "./CargoSensor.module.scss";
import { ReactSVG } from "react-svg";
import {
  arrowLeft,
  car,
  cargoAverage,
  cargoCondidence,
  cargoCurrent,
} from "../../assets";
import { Layout } from "../../components/Layout/Layout";

const cargoData = [
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

export const CargoSensor = () => {
  return (
    <Layout>
      <div className={classes.cargoSensor}>
        <Link to="/data-sources" className={classes.backLink}>
          <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
          Cargo sensor
        </Link>
        <div className={classes.tabs}>
          <div className={`${classes.tab} ${classes.active}`}>Overview</div>
          <div className={classes.tab}>Log</div>
        </div>
        <article className={classes.cargoInfoWrapper}>
          <div className={classes.cargoInfo}>
            <figure className={classes.image}>
              <img src={car} alt="Car" />
            </figure>
            <div className={classes.rightSide}>
              <div className={classes.rightTop}>
                {cargoData.map((data, index) => (
                  <div className={classes.singleItem} key={index}>
                    <img src={data.img} alt="Image" />
                    <p>{data.text}</p>
                    <h5>
                      {data.value} <span>{data.valueUnit}</span>
                    </h5>
                  </div>
                ))}
              </div>
              <div className={classes.rightBottom}>
                <h4>Cargo load</h4>
                <div className={classes.loadInfo}>
                  <p>
                    Source <span>2023 Ford Transit Van #13</span>
                  </p>
                  <p>
                    Last update <span>10/11/2023</span>
                  </p>
                  <p>
                    Unit <span>2,4 kg</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};
