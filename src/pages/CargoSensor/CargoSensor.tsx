import { Link, useLocation, useParams } from "react-router-dom";
import classes from "./CargoSensor.module.scss";
import { ReactSVG } from "react-svg";
import {
  arrowLeft,
  car,
  cargoAverage,
  cargoCondidence,
  cargoCurrent,
  exportIconBlack,
  hamburgerIcon,
} from "../../assets";
import { Layout } from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { BarChart } from "../../components/Graphs/Graphs";
import { TableSorting } from "../../components/Table/Table";
import { Cell } from "@table-library/react-table-library/table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Analytics/CalendarStyle.scss";

const graphData = [
  {
    name: "",
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

const tableList = [
  {
    timestamp: "June 12, 09:43 AM",
    quality: "1365965.00",
  },
  {
    timestamp: "June 12, 09:43 AM",
    quality: "1365965.00",
  },
  {
    timestamp: "June 12, 09:43 AM",
    quality: "1365965.00",
  },
  {
    timestamp: "June 12, 09:43 AM",
    quality: "1365965.00",
  },
  {
    timestamp: "June 12, 09:43 AM",
    quality: "1365965.00",
  },
  {
    timestamp: "June 9, 09:43 AM",
    quality: "1065965.00",
  },
  {
    timestamp: "June 10, 09:43 AM",
    quality: "1365965.00",
  },
  {
    timestamp: "June 11, 09:43 AM",
    quality: "1165965.00",
  },
  {
    timestamp: "June 12, 09:43 AM",
    quality: "1265965.00",
  },
];

const fields = [
  {
    name: "Timestamp",
    sortKey: "TIMESTAMP",
  },
  {
    name: "OpcQuality",
    sortKey: "QUALITY",
  },
];

const sortFns = {
  TIMESTAMP: (array: Array<any>) =>
    array.sort((a, b) => a.timestamp.localeCompare(b.timestamp)),
  QUALITY: (array: Array<any>) =>
    array.sort((a, b) => a.quality.localeCompare(b.quality)),
};

const ActivityRowTemplate: React.FC<{ item: any }> = ({ item }) => (
  <>
    <Cell className={classes.timestamp}>{item.timestamp}</Cell>
    <Cell className={classes.quality}>{item.quality}</Cell>
  </>
);

const loadInfo = {
  source: "2023 Ford Transit Van #13",
  lastUpdate: "10/11/2023",
  unit: "2,4 kg",
};

export const CargoSensor = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    if (tabIndex == 1) {
      setIsVisible(false);
    }
    setActiveTab(tabIndex);
  };

  const { slug } = useParams();
  const url = `/projects/${slug}/data-sources`;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location]);

  const [isVisible, setIsVisible] = useState(false);

  const exportButtonHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [startDate, setStartDate] = useState(thirtyDaysAgo);
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Layout>
      <div className={classes.cargoSensor}>
        <div className={classes.titleContainer}>
          <Link to={url} className={classes.backLink}>
            <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
            Cargo sensor
          </Link>
          {activeTab === 2 && (
            <div className={classes.datePickerContainer}>
              <div className={classes.datepicker}>
                <DatePicker
                  calendarClassName="calendarStyle"
                  popperClassName="pooperStyle"
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="MMMM d, yyyy"
                />
                <span>-</span>
                <DatePicker
                  calendarClassName="calendarStyle"
                  popperClassName="pooperStyle"
                  selected={endDate}
                  onChange={(date) => date && setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="MMMM d, yyyy"
                />
              </div>
              <span className={classes.divider}></span>
              <div
                className={classes.moreOptions}
                onClick={exportButtonHandler}
              >
                <ReactSVG
                  src={hamburgerIcon}
                  className={classes.hamburgerIcon}
                ></ReactSVG>
              </div>
            </div>
          )}
          {isVisible && (
            <div className={classes.export}>
              <div className={classes.exportWrapper}>
                <h4>Export</h4>
                <button type="button">
                  <ReactSVG
                    src={exportIconBlack}
                    className={classes.exportIcon}
                  ></ReactSVG>
                  Export to CSV
                </button>
                <button type="button">
                  <ReactSVG
                    src={exportIconBlack}
                    className={classes.exportIcon}
                  ></ReactSVG>
                  Export to XLSV
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={classes.tabs}>
          <div
            className={
              activeTab === 1
                ? `${classes.tab} ${classes.active}`
                : `${classes.tab}`
            }
            onClick={() => handleTabClick(1)}
          >
            Overview
          </div>
          <div
            className={
              activeTab === 2
                ? `${classes.tab} ${classes.active}`
                : `${classes.tab}`
            }
            onClick={() => handleTabClick(2)}
          >
            Log
          </div>
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
                      Source <span>{loadInfo.source}</span>
                    </p>
                    <p>
                      Last update <span>{loadInfo.lastUpdate}</span>
                    </p>
                    <p>
                      Unit <span>{loadInfo.unit}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.graph}`}>
              <BarChart graphData={graphData} />
            </div>
          </article>
        )}
        {activeTab === 2 && (
          <div className={classes.log}>
            <TableSorting
              className={classes.table}
              title="2326 Records"
              data={{ nodes: tableList }}
              fields={fields}
              RowTemplate={ActivityRowTemplate}
              sortFns={sortFns}
              limit={7}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};
