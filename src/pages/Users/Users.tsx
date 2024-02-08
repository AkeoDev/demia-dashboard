import { ReactSVG } from "react-svg";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Users.module.scss";
import { Cell } from "@table-library/react-table-library/table";
import { threeDots } from "../../assets";
import { TableWithoutSorting } from "../../components/Table/Table";

const tableList = [
  {
    name: "Max Mustermann",
    role: "Admin",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: [
      "Santa Maria 2",
      "Santa Maria 2",
      "Santa Maria 2",
      "Santa Maria 2",
    ],
  },
  {
    name: "Lisa Mustermann",
    role: "Viewer",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: ["Santa Maria 2"],
  },
  {
    name: "Lisa Mustermann",
    role: "Viewer",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: ["Santa Maria 2"],
  },
  {
    name: "Lisa Mustermann",
    role: "Viewer",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: ["Santa Maria 2"],
  },
  {
    name: "Lisa Mustermann",
    role: "Viewer",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: ["Santa Maria 2"],
  },
];

const fields = ["Name", "Role", "Last Login", "Permissions", ""];

const ActivityRowTemplate: React.FC<{ item: any }> = ({ item }) => (
  <>
    <Cell className={classes.name}>{item.name}</Cell>
    <Cell className={classes.role}>{item.role}</Cell>
    <Cell className={classes.lastLogin}>{item.lastLogin}</Cell>
    <Cell className={classes.permissions}>
      {item.permissions.map((i: any, index: number) => (
        <span key={index}>{i}</span>
      ))}
    </Cell>
    <Cell className={classes.icon}>
      <ReactSVG src={threeDots}></ReactSVG>
    </Cell>
  </>
);

export const Users = () => {
  return (
    <Layout>
      <h1 className={classes.title}>Users</h1>
      <div className={classes.users}>
        <TableWithoutSorting
          data={{ nodes: tableList }}
          fields={fields}
          RowTemplate={ActivityRowTemplate}
        />
      </div>
    </Layout>
  );
};
