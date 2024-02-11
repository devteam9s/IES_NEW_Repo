import React from 'react'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './Alerts.scss';
const Alerts = () => {
  return (
    <div className='alerts'>
      <div className="title5">
      <ReportProblemIcon className='icon'/>
      <span className="span">Alerts</span>
      </div>
      <div className="alerts-table">
      <table>
  <tr>
    <th>Message</th>
    <th>Date</th>
    <th>Time</th>
  </tr>
  <tr>
    <td>Pit1 Current crossed 3.0I in Site1</td>
    <td>25/12/2023</td>
    <td>12:30PM</td>
  </tr>
  <tr>
    <td>Pit2 Current crossed 3.0I in Site1</td>
    <td>31/12/2023</td>
    <td>9:30AM</td>
  </tr>
  <tr>
    <td>Pit3 Voltage crossed 3.0V in Site1</td>
    <td>01/01/2024</td>
    <td>1:23PM</td>
  </tr>
  <tr>
    <td>Pit3 current crossed 3.0I in Site1</td>
    <td>02/01/2024</td>
    <td>11:22AM</td>
  </tr>
  <tr>
    <td>Pit1 resistance crossed 3.0R in Site1</td>
    <td>03/01/2024</td>
    <td>4:12PM</td>
  </tr>
  <tr>
    <td>Pit4 current crossed 3.0A in Site1</td>
    <td>03/01/2024</td>
    <td>7:25PM</td>
  </tr>
</table>
      </div>
    </div>
  )
}

export default Alerts