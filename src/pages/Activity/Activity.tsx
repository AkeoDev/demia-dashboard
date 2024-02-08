import { Layout } from "../../components/Layout/Layout";
import { TableWithoutSorting } from "../../components/Table/Table";
import classes from "./Activity.module.scss";

const tableList = [
  {
    date: "June 12, 09:43 AM",
    name: "John Doe",
    text: "added a new sensor PT5",
    initials: "JD",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Sara Aras",
    text: "added a new sensor PT5",
    initials: "SA",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
  },
  {
    date: "June 12, 09:43 AM",
    name: "John Doe",
    text: "added a new sensor PT5",
    initials: "JD",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Sara Aras",
    text: "added a new sensor PT5",
    initials: "SA",
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
  },
];

const fields = ['Timestamp', 'Activity'];

export const Activity: React.FC = () => {
  return (
    <Layout>
      <h1 className={classes.title}>Activity</h1>
      <TableWithoutSorting data={{nodes: tableList}} fields={fields}/>
    </Layout>
  );
};
