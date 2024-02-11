// import Navbar from '../../Components/Navbar/Navbar';
// import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/Widget/Widget';
import Chart from '../../Components/Charts/Chart';
import './Home.scss';
const Home=()=>{
    return(
        <div className="home">
            {/* <Sidebar/> */}
            <div className="homecontainer">
            {/* <Navbar/>  */}
            <div className="widgets">
          <Widget/>
          {/* <Widget type="systems"/>
          <Widget type="earth pits"/>
          <Widget type="alerts"/> */}
        </div>
        <div className="charts">
        <Chart/>
        </div>
            </div>
        </div>
    );
};
export default Home