import { FunctionComponent } from "react";
import { Layout } from "../../components/Layout/Layout";
import { TableWithoutSorting } from "../../components/Table/Table";
import classes from "./Activity.module.scss";
import { Cell } from "@table-library/react-table-library/table";

const tableList = [
  {
    date: "June 12, 09:43 AM",
    name: "John Doe",
    text: "added a new sensor PT5",
    initials: "JD",
    color: "blue",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Sara Aras",
    text: "added a new sensor PT5",
    initials: "SA",
    color: "green",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
    color: "rose",
  },
  {
    date: "June 12, 09:43 AM",
    name: "John Doe",
    text: "added a new sensor PT5",
    initials: "JD",
    color: "purple",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Sara Aras",
    text: "added a new sensor PT5",
    initials: "SA",
    color: "red",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
    color: "orange",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
    color: "orange",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Sara Aras",
    text: "added a new sensor PT5",
    initials: "SA",
    color: "red",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
    color: "orange",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
    color: "orange",
  },
];

const fields = ["Timestamp", "Activity"];

const ActivityRowTemplate: FunctionComponent<{ item: any }> = ({ item }) => (
  <>
    <Cell className={classes.date}>{item.date}</Cell>
    <Cell>
      <div className={classes.user}>
        <span className={`${classes.userIcon} ${classes[item.color]}`}>
          {item.initials}
        </span>
        <div className={classes.userInfo}>
          <h4>{item.name}</h4>
          <p>{item.text}</p>
        </div>
      </div>
    </Cell>
  </>
);

export const Activity: FunctionComponent = () => {
  return (
    <Layout>
      <h1 className={classes.title}>Activity</h1>
      <div className={classes.activity}>
        <TableWithoutSorting
          className={classes.table}
          data={{ nodes: tableList }}
          fields={fields}
          RowTemplate={ActivityRowTemplate}
          limit={10}
        />
      </div>
    </Layout>
  );
};
