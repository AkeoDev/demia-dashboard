import { Link, useParams } from "react-router-dom";
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
import { useState } from "react";
import { BarChart } from "../../components/Graphs/Graphs";

const graphData = [
  {
    name: '',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Oct 21',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Oct 22',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Oct 23',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Oct 24',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Oct 25',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Oct 26',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const { slug } = useParams();
  const url = `/projects/${slug}/data-sources`;

  return (
    <Layout>
      <div className={classes.cargoSensor}>
        <Link to={url} className={classes.backLink}>
          <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
          Cargo sensor
        </Link>
        <div className={classes.tabs}>
          <div className={activeTab === 1 ? `${classes.tab} ${classes.active}` : `${classes.tab}`} onClick={() => handleTabClick(1)}>Overview</div>
          <div className={activeTab === 2 ? `${classes.tab} ${classes.active}` : `${classes.tab}`} onClick={() => handleTabClick(2)}>Log</div>
        </div>
        {activeTab === 1 && (
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
          <div className={`${classes.cargoInfo} ${classes.df}`}>
          <BarChart graphData={graphData}/>
          </div>
        </article>
        )}
        {activeTab === 2 && <p>Content of Tab 2</p>}
      </div>
    </Layout>
  );
};
