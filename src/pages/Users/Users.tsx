import { useState, useEffect, useRef } from "react";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Users.module.scss";
import { Cell } from "@table-library/react-table-library/table";
import { plusIcon, threeDots } from "../../assets";
import { TableWithoutSorting } from "../../components/Table/Table";
import { Button } from "../../components/Buttons/Button";

const tableList = [
  {
    name: "Max Mustermann",
    role: "Admin",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: [
      "Santa Maria 1",
      "Santa Maria 2",
      "Santa Maria 3",
      "Santa Maria 4",
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

const ActivityRowTemplate: React.FC<{ item: any }> = ({ item }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  const contextRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    window.addEventListener('click', (event: MouseEvent) => {
      if (!(contextRef && contextRef?.current?.contains(event.target as Node))) {
        setIsVisible(false)
      }
    })
    return (
      window.removeEventListener('click', (event: MouseEvent) => {
        if (!(contextRef && contextRef?.current?.contains(event.target as Node))) {
          setIsVisible(false)
        }
      })
    )
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
        <img className={"actionsButton"} ref={contextRef} src={threeDots} onClick={toggleVisibility} />
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
        <TableWithoutSorting
          data={{ nodes: tableList }}
          fields={fields}
          RowTemplate={ActivityRowTemplate}
        />
      </div>
    </Layout>
  );
};
