import { FunctionComponent } from 'react';
import classes from './Table.module.scss';
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
} from '@table-library/react-table-library/table';
import { usePagination } from "@table-library/react-table-library/pagination";

export const TableWithoutSorting: FunctionComponent<{
  fields: Array<string>;
  data: {
    nodes: Array<any>;
  };
  RowTemplate: FunctionComponent<{item: any}>
}> = ({ fields, data, RowTemplate }) => {
  const LIMIT = 5;

  const pagination = usePagination(
    data,
    {
      state: {
        page: 0,
        size: LIMIT,
      },
      onChange: onPaginationChange,
    }
  );

  function onPaginationChange(action: any, state: any) {
    console.log(action)
    console.log(state)
  }
  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>
        <Table data={data} className={classes.table} pagination={pagination}>
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
        <div className={classes['pagination']}>
          <span className={classes['num-of-items']}>Showing {LIMIT * pagination.state.page + 1} to {LIMIT * (pagination.state.page + 1)} of {data.nodes.length} results</span>
          <div className={classes['pagination__buttons']}>
            <button disabled={pagination.state.page === 0} onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}>Prev</button>
            {Array(Math.ceil(data.nodes.length/LIMIT))
            .fill(true)
            .map((_, index) => (
              <button key={index} className={pagination.state.page === index ? classes['active'] : ""} onClick={() => pagination.fns.onSetPage(index)}>{index + 1}</button>
            ))}
            <button disabled={pagination.state.page === Math.ceil(data.nodes.length/LIMIT)} onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TableSorting: FunctionComponent<{
  fields: Array<string>;
  data: {
    nodes: Array<any>;
  };
  RowTemplate: FunctionComponent<{item: any}>
}> = ({ fields, data, RowTemplate }) => {
  const LIMIT = 6;

  const pagination = usePagination(
    data,
    {
      state: {
        page: 0,
        size: LIMIT,
      },
      onChange: onPaginationChange,
    }
  );

  function onPaginationChange(action: any, state: any) {
    console.log(action)
    console.log(state)
  }
  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>
        <Table data={data} className={classes.table} pagination={pagination}>
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
        <div className={classes['pagination']}>
          <span className={classes['num-of-items']}>Showing {LIMIT * pagination.state.page + 1} to {LIMIT * (pagination.state.page + 1)} of {data.nodes.length} results</span>
          <div className={classes['pagination__buttons']}>
            <button disabled={pagination.state.page === 0} onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}>Prev</button>
            {Array(Math.ceil(data.nodes.length/LIMIT))
            .fill(true)
            .map((_, index) => (
              <button key={index} className={pagination.state.page === index ? classes['active'] : ""} onClick={() => pagination.fns.onSetPage(index)}>{index + 1}</button>
            ))}
            <button disabled={pagination.state.page === Math.ceil(data.nodes.length/LIMIT)} onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
