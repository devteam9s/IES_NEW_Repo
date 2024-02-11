import "./Navbar.scss";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Logo from './image.jpg';
const Navbar = () => {
  return (
    <div className="navbar">
       <div className="wrapper">
          {/* <div className="search">
              <input type="text" placeholder="Search..."/>
              <SearchIcon/>
          </div> */}
          <div className="items">
             <div className="item">
             <Link to="/" className="link">
              <span>
                 <img src={Logo} alt="Logo" className="logo" />
              </span>
              </Link>
             </div>
               <div className="item">
               <Link to="/" className="link">
              <HomeIcon className="icon"/>
              
              <span className="span">Home</span>
              </Link>
             </div>
             <div className="item">
             <Link to="systems"className="link">
              <SettingsIcon className="icon"/>
              
              <span className="span">Systems</span>
              </Link>
             </div>
             <div className="item">
             <Link to="reports" className="link">
              <AssignmentLateRoundedIcon className="icon"/>
              
              <span className="span">Reports</span>
              </Link>
             </div>
             </div>
             <div className="notification">
             <div className="item">
               <NotificationsIcon className="icon"/>
               <div className="counter">1</div>
             </div>
             <div className="item">
               <LogoutIcon className="icon"/>
             </div>
             </div>
          
       </div>
    </div>
  )
}

export default Navbar