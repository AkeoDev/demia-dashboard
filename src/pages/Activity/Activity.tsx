import { Layout } from "../../components/Layout/Layout";
import classes from "./Activity.module.scss";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";

const tableList = [
  {
    date: "June 12, 09:43 AM",
    name: "John Doe",
    text: "added a new sensor PT5",
    initials: "JD",
    color: "blue"
  },
  {
    date: "June 12, 09:43 AM",
    name: "Sara Aras",
    text: "added a new sensor PT5",
    initials: "SA",
    color: "green"
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
    color: "rose"
  },
  {
    date: "June 12, 09:43 AM",
    name: "John Doe",
    text: "added a new sensor PT5",
    initials: "JD",
    color: "purple"
  },
  {
    date: "June 12, 09:43 AM",
    name: "Sara Aras",
    text: "added a new sensor PT5",
    initials: "SA",
    color: "red"
  },
  {
    date: "June 12, 09:43 AM",
    name: "Penelope Johnston",
    text: "calibrated sensor TT2",
    initials: "PJ",
    color: "orange"
  },
];

export const Activity: React.FC = () => {
  return (
    <Layout>
      <h1 className={classes.title}>Activity</h1>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          <Table data={{ nodes: tableList }} className={classes.table}>
            {(tableList: any) => (
              <>
                <Header>
                  <HeaderRow className={classes.tHead}>
                    <HeaderCell>Timestamp</HeaderCell>
                    <HeaderCell>Activity</HeaderCell>
                  </HeaderRow>
                </Header>
                <Body>
                  {tableList.map((item: any, index: number) => (
                    <Row item={item} key={index} className={classes.tBody}>
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
