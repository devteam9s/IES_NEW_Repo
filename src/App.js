import './App.css'
import Home from "./Pages/Home/Home";
import Reports from "./Pages/Reports/Reports";
import Systems from "./Pages/Systems/Systems";
import Earth from "./Pages/Earth Pits/Earth";
import Alerts from "./Pages/Alerts/Alerts";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sensors from './Pages/Sensors/Sensors';
import Pit from './Pages/Pits/Pit';
function App() {
  return (
    <div className="App">
    <BrowserRouter >
     <Navbar/>
       <Routes>
         <Route path="/" >
         <Route index element={<Home/>}/>
         </Route>
         <Route path="systems" >
         <Route index element={<Systems/>}/>
         </Route>
         <Route path="reports" >
         <Route index element={<Reports/>}/>
         </Route>
         <Route path="sensors" >
         <Route index element={<Sensors/>}/>
         </Route>
         <Route path="earth-pits" >
         <Route index element={<Earth/>}/>
         </Route>
         <Route path="alerts" >
         <Route index element={<Alerts/>}/>
         </Route>
         <Route path="/sensors/pits" >
         <Route index element={<Pit/>}/>
         </Route>
         <Route path="/systems/pits" >
         <Route index element={<Pit/>}/>
         </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
