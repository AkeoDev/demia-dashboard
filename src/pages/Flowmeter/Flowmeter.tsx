import { Link, useParams } from "react-router-dom";
import {
  arrowLeft,
  flowmeter,
  statusConnected,
  statusDisconnected,
} from "../../assets";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Flowmeter.module.scss";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import { BarChart } from "../../components/Graphs/Graphs";
import { TableSorting } from "../../components/Table/Table";
import { Cell } from "@table-library/react-table-library/table";

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

const flowData = {
  image: flowmeter,
  active: true,
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

const flowInfo = {
  source: "Flowmeter 1",
  lastUpdate: "27 Oct 2023 - 6:45 PM",
  unit: "0.05 Nm3",
};

export const Flowmeter = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const { slug } = useParams();
  const url = `/projects/${slug}/data-sources`;

  return (
    <Layout>
      <div className={classes.flowmeter}>
        <Link to={url} className={classes.backLink}>
          <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
          Flowmeter 1
        </Link>
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
          <article className={classes.flowmeterWrapper}>
            <div className={classes.flowmeterInfo}>
              <figure className={classes.image}>
                <img src={flowData.image} alt="Flow Image" />
              </figure>
              <div className={classes.rightSide}>
                <img
                  src={flowData.active ? statusConnected : statusDisconnected}
                  className={classes.status}
                  alt="Status"
                />
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
                <h4>Biogas Flow</h4>
                <div className={classes.info}>
                  <p>
                    Source <span>{flowInfo.source}</span>
                  </p>
                  <p>
                    Last update <span>{flowInfo.lastUpdate}</span>
                  </p>
                  <p>
                    Unit <span>{flowInfo.unit}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${classes.chart}`}>
              <BarChart graphData={graphData} />
            </div>
          </article>
        )}
        {activeTab === 2 && (
          <div className={classes.log}>
            <TableSorting
              className={classes.table}
              title="212 Records"
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
