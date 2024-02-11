import './Widget.scss';
import React from 'react';
import { PieChart, Pie, Tooltip,Legend,ResponsiveContainer } from "recharts";
import {BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { Link } from "react-router-dom";
 
import SensorsIcon from '@mui/icons-material/Sensors';
import SettingsIcon from '@mui/icons-material/Settings';
import SystemSecurityUpdateWarningIcon from '@mui/icons-material/SystemSecurityUpdateWarning';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const data = [
  { name: "Active", students: 400,fill: '#90EE90' },
  { name: "Not Active", students: 700,fill: '#FF7F7F' },
  // { name: "Geek-i-knack", students: 200 },
  // { name: "Geek-o-mania", students: 1000 },
];
const data1 = [
  { name: "Jan", students: 5,fill:"fuchsia" },
  { name: "Feb", students: 8,fill:"fuchsia"},
  { name: "Mar", students: 6,fill:"fuchsia" },  
  { name: "Apr", students: 3,fill:"fuchsia" },
];
const data2 = [
  { name: "Active", students: 600,fill:"yellow"},
  { name: "Not Active", students: 200,fill:"orange" },
  { name: "Critical", students: 200,fill:"violet" },
  { name: "No of Earth Pits", students: 1000,fill:"aqua" },
];

const Widget = () => {
     return (
        <div className='widget'>
          <div className="widget1">
            <SensorsIcon className='icon'/>
            <Link to="sensors" className="link">
            <span className="title">Sensors</span>
            </Link>
            <ResponsiveContainer width="100%" height="100%" aspect={0.5/1}>
            <PieChart width={700} height={700} margin={{ top: 0, right: 100, left: 0, bottom: 50 }}>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="top" align="right"/>
                <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={250}
                    innerRadius={150}
                    fill="red"
                    label={({ name, students }) =>
                        `${name}: ${students}`
                    }
                />
            </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="widget1">
          <SettingsIcon className='icon'/>
          <Link to="systems"className="link">
            <span className="title">Systems</span>
            </Link>
            <ResponsiveContainer width="100%" height="100%" aspect={0.5/1}>
            <PieChart width={700} height={700} margin={{ top: 0, right: 100, left: 0, bottom: 50 }}>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="top" align="right"/>
                <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={250}
                    innerRadius={150}
                    fill="red"
                    label={({ name, students }) =>
                        `${name}: ${students}`
                    }
                    stroke="white"
                />
            </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="widget1">
          <SystemSecurityUpdateWarningIcon className='icon'/>
          <Link to="earth-pits"className="link">
            <span className="title">Earth Pits</span>
            </Link>
            <ResponsiveContainer width="100%" height="100%" aspect={0.5/1}>
            <PieChart width={700} height={700} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
            <Legend layout="horizontal" verticalAlign="top" align="center" />
                <Tooltip />
                <Pie
                    data={data2}
                    dataKey="students"
                    outerRadius={250}
                    innerRadius={150}
                    fill="green"
                    label={({ name, students }) =>
                        `${name}: ${students}`
                    }
                />
            </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="widget1">
          <ReportProblemIcon className='icon'/>
          <Link to="alerts"className="link">
            <span className="title">Alerts</span>
            </Link>
            <ResponsiveContainer width="100%" height="100%" aspect={1/1}>
            <BarChart width={700} height={700} data={data1} margin={{ top: 30, right: 0, left: -60, bottom: 30 }}>
            <Bar dataKey="students" fill="aqua" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" stroke='white' />
            <YAxis  stroke='white'/>
        </BarChart>
            </ResponsiveContainer>
          </div>
        </div>    
    );
  };


export default Widget