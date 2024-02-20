import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { TableSorting } from "../../components/Table/Table";
import classes from "./Sensors.module.scss";
import { Cell } from "@table-library/react-table-library/table";

const tableList = [
  {
    source: "Cargo Sensor",
    url: "cargo-sensor",
    template: "cargo-sensor",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "90%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Flowmeter 1",
    url: "flowmeter-1",
    template: "flowmeter",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "70%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Grape Harvest",
    url: "grape-harvest",
    template: "cargo-sensor",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "90%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Feedstock",
    url: "feedstock",
    template: "feedstock",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "90%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Flowmeter 1",
    url: "flowmeter-1",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "90%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
  {
    source: "Flowmeter 1",
    url: "flowmeter",
    inputType: "Nm3/h",
    inputDID: ":demi...25b3",
    dataConfidence: "50%",
    dataType: "On-Site Sensor",
    dataEntry: "Automatic",
  },
];

const fields = [
  {
    name: "Source",
    sortKey: "SOURCE"
  },
  {
    name: "Input Type",
    sortKey: "INPUTTYPE"
  },
  {
    name: "Input DID",
    sortKey: "INPUTDID"
  },
  {
    name: "Data Confidence",
    sortKey: "DATACONFIDENCE"
  },
  {
    name: "Data Type",
    sortKey: "DATATYPE"
  },
  {
    name: "Data Entry",
    sortKey: "DATAENTRY"
  },
]

const sortFns = {
  SOURCE: (array: Array<any>) => array.sort((a, b) => a.source.localeCompare(b.source)),
  INPUTTYPE: (array: Array<any>) => array.sort((a, b) => a.inputType.localeCompare(b.inputType)),
  INPUTDID: (array: Array<any>) => array.sort((a, b) => a.inputDID.localeCompare(b.inputDID)),
  DATACONFIDENCE: (array: Array<any>) => array.sort((a, b) => a.dataConfidence.localeCompare(b.dataConfidence)),
  DATATYPE: (array: Array<any>) => array.sort((a, b) => a.dataType.localeCompare(b.dataType)),
  DATAENTRY: (array: Array<any>) => array.sort((a, b) => a.dataEntry.localeCompare(b.dataEntry)),
}

const ActivityRowTemplate: React.FC<{ item: any }> = ({ item }) => (
  <>
    <Cell className={classes.source}><Link to={item.url}>{item.source}</Link></Cell>
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
          sortFns={sortFns}
        />
      </div>
    </Layout>
  );
};
