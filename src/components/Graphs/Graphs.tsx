import { FunctionComponent } from 'react';
import classes from './Graphs.module.scss';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Customized,
    Rectangle,
  } from 'recharts';

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const CustomizedRectangle: FunctionComponent<any> = ({formattedGraphicalItems}) => {
    // get first and second series in chart
    const firstSeries: any = formattedGraphicalItems[0];
    const secondSeries: any = formattedGraphicalItems[1];
  
    // render custom content using points from the graph
    return firstSeries?.props?.points.map((firstSeriesPoint: any, index: any) => {
      const secondSeriesPoint = secondSeries?.props?.points[index];
      const yDifference = firstSeriesPoint.y - secondSeriesPoint.y
  
      return (
        <Rectangle
          key={firstSeriesPoint.payload.name}
          width={10}
          height={yDifference}
          x={secondSeriesPoint.x - 5}
          y={secondSeriesPoint.y}
          fill={'#F09'}
          radius={1000}
        />
      )
    })
  };

export const BarChart: FunctionComponent = () => {
    return (
        <div className={classes['sensor-load-container']}>
            <div className={classes['heading']}>
                <h3>Load</h3>

            </div>
            <ResponsiveContainer width="100%" height={500}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="transparent" />
                <Line type="monotone" dataKey="uv" stroke="transparent" />
                <Customized component={CustomizedRectangle} />
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}