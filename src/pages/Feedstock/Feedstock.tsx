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
import { useState } from "react";

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

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <Layout>
      <div className={classes.feedstock}>
        <Link to="/data-sources" className={classes.backLink}>
          <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
          Feedstock
        </Link>
        <div className={classes.tabs}>
          <div className={activeTab === 1 ? `${classes.tab} ${classes.active}` : `${classes.tab}`} onClick={() => handleTabClick(1)}>Overview</div>
          <div className={activeTab === 2 ? `${classes.tab} ${classes.active}` : `${classes.tab}`} onClick={() => handleTabClick(2)}>Log</div>
        </div>
        {activeTab === 1 && (
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
        )}
        {activeTab === 2 && <p>Content of Tab 2</p>}
      </div>
    </Layout>
  );
};