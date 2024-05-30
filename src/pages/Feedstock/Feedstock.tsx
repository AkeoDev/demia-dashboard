import { Link, useLocation, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { ReactSVG } from "react-svg";
import classes from "./Feedstock.module.scss";
import {
  arrowLeft,
  cargoAverage,
  cargoCondidence,
  cargoCurrent,
  exportIconBlack,
  hamburgerIcon,
} from "../../assets";
import { useEffect, useState } from "react";
import { BarChart } from "../../components/Graphs/Graphs";
import { Cell } from "@table-library/react-table-library/table";
import { TableSorting } from "../../components/Table/Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Analytics/CalendarStyle.scss";
import { CSVLink } from "react-csv";

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
    pv: 0,
    amt: 2210,
  },
  {
    name: "Oct 22",
    uv: 2000,
    pv: 0,
    amt: 2290,
  },
  {
    name: "Oct 23",
    uv: 2780,
    pv: 0,
    amt: 2000,
  },
  {
    name: "Oct 24",
    uv: 1890,
    pv: 0,
    amt: 2181,
  },
  {
    name: "Oct 25",
    uv: 2390,
    pv: 0,
    amt: 2500,
  },
  {
    name: "Oct 26",
    uv: 3490,
    pv: 0,
    amt: 2100,
  },
  {
    name: "Oct 27",
    uv: 2390,
    pv: 0,
    amt: 2500,
  },
  {
    name: "Oct 28",
    uv: 3490,
    pv: 0,
    amt: 2100,
  },
  {
    name: "Oct 29",
    uv: 3490,
    pv: 0,
    amt: 2100,
  },
];

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

const CSVHeaders = [
  { label: "Date", key: "timestamp" },
  { label: "Value", key: "quality" },
];

export const Feedstock = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    if (tabIndex == 1) {
      setIsVisible(false);
    }
    setActiveTab(tabIndex);
  };

  const [isVisible, setIsVisible] = useState(false);

  const exportButtonHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const { slug } = useParams();
  const url = `/projects/${slug}/data-sources`;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location]);

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [startDate, setStartDate] = useState(thirtyDaysAgo);
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Layout>
      <div className={classes.feedstock}>
        <div className={classes.titleContainer}>
          <Link to={url} className={classes.backLink}>
            <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
            Feedstock
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
                <CSVLink
                  data={tableList}
                  className={classes.csvDownload}
                  filename={"Feedstock.csv"}
                  headers={CSVHeaders}
                >
                  <ReactSVG
                    src={exportIconBlack}
                    className={classes.icon}
                  ></ReactSVG>
                  Export to CSV
                </CSVLink>
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
            <div className={`${classes.graph}`}>
              <BarChart graphData={graphData} />
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
              title="427 Records"
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
