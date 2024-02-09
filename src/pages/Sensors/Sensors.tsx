import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { TableSorting } from "../../components/Table/Table";
import classes from "./Sensors.module.scss";
import { Cell } from "@table-library/react-table-library/table";

const tableList = [
  {
    source: "Cargo Sensor",
    sensorLink: "cargo-sensor",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "90%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Flowmeter 1",
    sensorLink: "flowmeter-1",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "70%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Grape Harvest",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "90%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Feedstock",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "90%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Flowmeter 1",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "90%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Flowmeter 1",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "50%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
];

const fields = [
  "Source",
  "Input Type",
  "Input DID",
  "Data Confidence",
  "Data Type",
  "Data Entry",
];

const ActivityRowTemplate: React.FC<{ item: any }> = ({ item }) => (
  <>
    <Cell className={classes.source}><Link to={item.sensorLink}>{item.source}</Link></Cell>
    <Cell className={classes.inputType}>{item.inputType}</Cell>
    <Cell className={classes.inputDID}>{item.inputDID}</Cell>
    <Cell className={classes.dataConfidence}>
      <div className={classes.wrapper}>
        <div className={classes.progressBar}>
          <div
            className={classes.progressPercentage}
            style={{ width: item.dataConfidence }}
          ></div>
        </div>
        <p>{item.dataConfidence}</p>
      </div>
    </Cell>
    <Cell className={classes.dataType}>{item.dataType}</Cell>
    <Cell className={classes.dataEntry}>{item.dataEntry}</Cell>
  </>
);

export const Sensors = () => {
  return (
    <Layout>
      <h1 className={classes.title}>Data Sources</h1>
      <div className={classes.sensors}>
        <TableSorting
          data={{ nodes: tableList }}
          fields={fields}
          RowTemplate={ActivityRowTemplate}
        />
      </div>
    </Layout>
  );
};
