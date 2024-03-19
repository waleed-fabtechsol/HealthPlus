import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'January',
      patients: 3000, // Less than 4000
    },
    {
      name: 'February',
      patients: 3500, // Less than 4000
    },
    {
      name: 'March',
      patients: 2000, // Less than 4000
    },
    {
      name: 'April',
      patients: 3900, // Less than 4000
    },
    {
      name: 'May',
      patients: 2500, // Less than 4000
    },
    {
      name: 'June',
      patients: 3700, // Less than 4000
    },
    {
      name: 'July',
      patients: 3200, // Less than 4000
    },
    {
      name: 'August',
      patients: 3800, // Less than 4000
    },
    {
      name: 'September',
      patients: 2700, // Less than 4000
    },
    {
      name: 'October',
      patients: 3200, // Less than 4000
    },
    {
      name: 'November',
      patients: 2800, // Less than 4000
    },
    {
      name: 'December',
      patients: 3500, // Less than 4000
    },
  ];
  
  

const Chart = () => {
  return (
      <AreaChart
        width={550}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#006AFF40" />
            <stop offset="100%" stopColor="#1F7DFF00" />
          </linearGradient>
        </defs>
        <CartesianGrid  strokeDasharray="3 3" horizontal={true} vertical={false} />
        <XAxis dataKey="name"   axisLine={{ strokeOpacity: 0 }}/>
        <YAxis    axisLine={{ strokeOpacity: 0 }} />
        <Tooltip />
        <Area type="monotone" dataKey="patients" stroke="#000000" fill="url(#gradientFill)" />
      </AreaChart>
  );
}

export default Chart;
