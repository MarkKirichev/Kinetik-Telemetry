import React, { FC } from 'react';
import { ResponsiveContainer, LineChart, Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { IRechartsProps } from './types'

const LineChartComponent: FC<IRechartsProps> = ({
  data,
  height,
  xDataKey,
  xLabel,
  yLabel,
  isLegendHidden,
}) => {
  return (
    <ResponsiveContainer width="100%" height={height} className="mt-3" >
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        {
          !isLegendHidden &&
            <Legend verticalAlign="top" align="right" height={50} iconType="square" iconSize={10} />
        }
        <Line type="monotone" dataKey="lap" name="Lap" dot={false} stroke="#fc8d62" />
        <Line type="monotone" dataKey="bestLap" name="Best lap" dot={false} stroke="#66c2a5" />
        <XAxis
          dataKey={xDataKey}
          height={40}
          tick={{ fontSize: "12px" }}
          label={{ value: xLabel, angle: 0, position: 'insideBottom', fontSize: '14px' }}
        />
        <YAxis
          width={45}
          tickCount={10}
          domain={['dataMin - 10', 'dataMax + 10']}
          tick={{ fontSize: "12px" }}
          label={{ value: yLabel, angle: -90, position: 'insideLeft', fontSize: '14px' }}
        />
        <Tooltip />
      </LineChart>
    </ ResponsiveContainer>
  )
};

export default LineChartComponent;
