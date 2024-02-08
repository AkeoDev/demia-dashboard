import { FunctionComponent } from "react";
import classes from './Table.module.scss';
import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
  } from "@table-library/react-table-library/table";

export const TableWithoutSorting: FunctionComponent<{
    fields: Array<string>,
    data: {
        nodes: Array<any>
    }
}> = ({ fields, data }) => {

    return (
    <div className={classes.content}>
        <div className={classes.innerContent}>
        <Table data={data} className={classes.table}>
            {(tableList: any) => (
            <>
                <Header>
                <HeaderRow className={classes.tHead}>
                    {fields.map((field, index) => <HeaderCell key={index}>{field}</HeaderCell>)}
                </HeaderRow>
                </Header>
                <Body>
                {tableList.map((item: any, index: number) => (
                    <Row item={item} key={index} className={classes.tBody}>
                    <Cell className={classes.date}>{item.date}</Cell>
                    <Cell>
                        <div className={classes.user}>
                        <span className={classes.userIcon}>
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
    )

}