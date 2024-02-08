import { FunctionComponent, ReactNode } from 'react';
import classes from './Table.module.scss';
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
} from '@table-library/react-table-library/table';

export const TableWithoutSorting: FunctionComponent<{
  fields: Array<string>;
  data: {
    nodes: Array<any>;
  };
  RowTemplate: FunctionComponent<{item: any}>
}> = ({ fields, data, RowTemplate }) => {
  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>
        <Table data={data} className={classes.table}>
          {(tableList: any) => (
            <>
              <Header>
                <HeaderRow className={classes.tHead}>
                  {fields.map((field, index) => (
                    <HeaderCell key={index}>{field}</HeaderCell>
                  ))}
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((item: any, index: number) => (
                  <Row item={item} key={index} className={classes.tBody}>
                    {/*  */}
                    <RowTemplate item={item} />
                </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      </div>
    </div>
  );
};
