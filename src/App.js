import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

//import React, { createContext, useState } from 'react';

import Home from './components/home/home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/Dashboard/Dashboard';
import AddTestimonial from './components/AddTestimonial/AddTestimonial';
import AddPackage from './components/AddPackage/AddPackage';
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
       {/*   <Route path='/appointment'>
        <AllPackege></AllPackege>
         </Route> */}
          <Route path="/addPackage">
           <AddPackage></AddPackage>
          </Route> 
         <Route path='/dashboard'>
         <Dashboard></Dashboard>
         </Route>
          <Route path="/AddTestimonial">
           <AddTestimonial></AddTestimonial>
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
