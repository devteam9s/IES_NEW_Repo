import './Chart.scss';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Pit 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Pit 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Pit 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Pit 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Pit 5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Pit 6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Pit 7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';
 
  
    const Chart = () => {
    return (
        <div className="charts1">
          <div className="chart">
            <div className="title">Current</div>
        <ResponsiveContainer width="100%" height="100%"aspect={1.6/1}>
        <AreaChart width={730} height={250} data={data}
           margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
               <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#FFFFFF" />
          <YAxis stroke="#FFFFFF"/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      <div className="chart">
        <div className="title">Resistance</div>
      <ResponsiveContainer width="100%" height="100%"aspect={1.6/1}>
        <AreaChart width={730} height={250} data={data}
           margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#8b0000" stopOpacity={0.8}/>
               <stop offset="95%" stopColor="#8b0000" stopOpacity={0}/>
            </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#FFFFFF"/>
          <YAxis stroke="#FFFFFF"/>
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#8b0000" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      <div className="chart">
        <div className="title">Voltage</div>
      <ResponsiveContainer width="100%" height="100%"aspect={1.6/1}>
        <AreaChart width={730} height={250} data={data}
           margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
          <linearGradient id="colorAv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#FFDB58" stopOpacity={0.8}/>
               <stop offset="95%" stopColor="#FFDB58" stopOpacity={0}/>
            </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#FFFFFF"/>
          <YAxis stroke="#FFFFFF"/>
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#FFDB58" fillOpacity={1} fill="url(#colorAv)" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      </div>
    );
  };




export default Chart