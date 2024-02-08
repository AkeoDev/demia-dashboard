import { ReactSVG } from "react-svg";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Users.module.scss";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { threeDots } from "../../assets";

const tableList = [
  {
    name: "Max Mustermann",
    role: "Admin",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: [
      "Santa Maria 2", "Santa Maria 2", "Santa Maria 2", "Santa Maria 2",
    ]
  },
  {
    name: "Lisa Mustermann",
    role: "Viewer",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: [
      "Santa Maria 2"
    ]
  },
  {
    name: "Lisa Mustermann",
    role: "Viewer",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: [
      "Santa Maria 2"
    ]
  },
  {
    name: "Lisa Mustermann",
    role: "Viewer",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: [
      "Santa Maria 2"
    ]
  },
  {
    name: "Lisa Mustermann",
    role: "Viewer",
    lastLogin: "24.01.2022 14:00 cet",
    permissions: [
      "Santa Maria 2"
    ]
  },
];

export const Users = () => {
  return (
    <Layout>
      <h1 className={classes.title}>Users</h1>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          <Table data={{ nodes: tableList }} className={classes.table}>
            {(tableList: any) => (
              <>
                <Header>
                  <HeaderRow className={classes.tHead}>
                    <HeaderCell>Name</HeaderCell>
                    <HeaderCell>Role</HeaderCell>
                    <HeaderCell>Last Login</HeaderCell>
                    <HeaderCell>Permissions</HeaderCell>
                    <HeaderCell></HeaderCell>
                  </HeaderRow>
                </Header>
                <Body>
                  {tableList.map((item: any, index: number) => (
                    <Row item={item} key={index} className={classes.tBody}>
                      <Cell className={classes.name}>{item.name}</Cell>
                      <Cell className={classes.role}>{item.role}</Cell>
                      <Cell className={classes.lastLogin}>{item.lastLogin}</Cell>
                      <Cell className={classes.permissions}>
                        {item.permissions.map((i: any, index: number) => (
                          <span key={index}>{i}</span>
                        ))}
                      </Cell>
                      <Cell className={classes.icon}><ReactSVG src={threeDots}></ReactSVG></Cell>
                    </Row>
                  ))}
                </Body>
              </>
            )}
          </Table>
        </div>
      </div>
    </Layout>
  );
};
