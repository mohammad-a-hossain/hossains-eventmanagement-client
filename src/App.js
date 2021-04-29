import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

//import React, { createContext, useState } from 'react';

import Home from './components/home/home/Home';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard/Dashboard';
import AddTestimonial from './components/Order/AddTestimonial/AddTestimonial';
import AddPackage from './components/AddPackage/AddPackage';
import Booking from './components/home/Bookings/Booking';
import AllPackeges from './components/dashboard/allPackage/AllPackage/AllPackeges';
import ShowTestamonials from './components/dashboard/Showtestamonial/ShowTestamonials';
import Order from './components/Order/orders/Order'
import Shipment from './components/Shipment/Shipment';


//import PrivateRoute from './components/Login/privateRoute/PrivateRoute';

//export const UserContext = createContext();
function App() {
  //const [loggedInUser, setLoggedInUser] = useState({});
  return (
  /*   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> */
     <Router>
       <Switch>
         <Route exact path='/'>
         <Home></Home>
         </Route>
         <Route path='/Order'>
          <Order></Order>
         </Route>
          <Route path='/dashboard/allPackage'>
          <AllPackeges></AllPackeges>
         </Route> 
         <Route path='/dashboard/Dashboard/Showtestamonial'>
          <ShowTestamonials></ShowTestamonials>
         </Route> 
          <Route path="/addPackage">
           <AddPackage></AddPackage>
          </Route> 
         <Route path='/dashboard'>
         <Dashboard></Dashboard>
         </Route>
          <Route path="/AddTestimonial">
           <AddTestimonial></AddTestimonial>
          </Route> 
          <Route path="/Booking/:key">
            <Booking></Booking>
            </Route> 
            <Route path="/shipment/:key">
            <Shipment></Shipment>
            </Route> 
         <Route path='/Login'>
         <Login></Login>
         </Route>
       </Switch>
     </Router>
      /* </UserContext.Provider> */
  );
}

export default App;































// import React from 'react'
// import './App.css';
// //import Login from './components/login/Login'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route

// } from "react-router-dom";


// function App() {
//   return (
//     <div className="App">
//       {/* <Login></Login> */}
//        <Router>
      
//        <Switch>
//           <Route exact path='/'>
//          <Home></Home>
//          </Route> 
//        <Route path='/appointment'>
//          <Appointment></Appointment>
//          </Route>
//           <Route path="/addDoctor">
//             <AddDoctor></AddDoctor>
//           </Route>  
//           <PrivateRoute path='/dashboard'>
//          <Dashboard></Dashboard>
//          </PrivateRoute>
//          <PrivateRoute path="/dashboard/allPatients">
//             <AllPatients></AllPatients>
//           </PrivateRoute>
//           <Route path='/Login'>
//          <Login></Login>
//          </Route>  
//        </Switch>
//      </Router> 
//     </div>
//   );
// }

// export default App;
