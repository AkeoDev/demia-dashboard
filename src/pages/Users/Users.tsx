import { useState, useEffect, useRef } from "react";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Users.module.scss";
import { Cell } from "@table-library/react-table-library/table";
import { plusIcon, threeDots } from "../../assets";
import { TableSorting } from "../../components/Table/Table";
import { Button } from "../../components/Buttons/Button";

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

const fields = [
  {
    name: "Name",
    sortKey: "NAME",
  },
  {
    name: "Role",
    sortKey: "ROLE",
  },
  {
    name: "Last Login",
    sortKey: "LASTLOGIN",
  },
  {
    name: "Permissions",
    sortKey: "PERMISSIONS",
  },
  {
    name: "Action",
    sortKey: "",
  },
];

const sortFns = {
  NAME: (array: Array<any>) =>
    array.sort((a, b) => a.name.localeCompare(b.name)),
  ROLE: (array: Array<any>) =>
    array.sort((a, b) => a.role.localeCompare(b.role)),
  LASTLOGIN: (array: Array<any>) =>
    array.sort((a, b) => a.lastLogin.localeCompare(b.lastLogin)),
  PERMISSIONS: (array: Array<any>) =>
    array.sort((a, b) => a.role.localeCompare(b.role)),
};

const ActivityRowTemplate: React.FC<{ item: any }> = ({ item }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const contextRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    window.addEventListener("click", (event: MouseEvent) => {
      if (
        !(contextRef && contextRef?.current?.contains(event.target as Node))
      ) {
        setIsVisible(false);
      }
    });
    return window.removeEventListener("click", (event: MouseEvent) => {
      if (
        !(contextRef && contextRef?.current?.contains(event.target as Node))
      ) {
        setIsVisible(false);
      }
    });
  }, []);

  return (
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
        <img
          className={"actionsButton"}
          ref={contextRef}
          src={threeDots}
          onClick={toggleVisibility}
        />
        <div
          className={`${classes.actionsWrapper} ${
            isVisible ? classes.show : ""
          }`}
        >
          <div className={classes.actions}>
            <span className={classes.edit}>Edit</span>
            <span className={classes.remove}>Remove</span>
          </div>
        </div>
      </Cell>
    </>
  );
};

export const Users = () => {
  return (
    <Layout>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Users</h1>
        <Button icon={plusIcon} className={classes.button}>
          Add New
        </Button>
      </div>
      <div className={classes.users}>
        <TableSorting
          data={{ nodes: tableList }}
          fields={fields}
          sortFns={sortFns}
          RowTemplate={ActivityRowTemplate}
        />
      </div>
    </Layout>
  );
};
