// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from "./pages/Home";
// // import Admin from "./pages/Admin";
// import Student from "./pages/Student";
// import Teacher from "./pages/Teacher";





// const App = () => (
// <Router>
//     <div>

//       <Switch>

//       {/* <Route exact path="/Admin/" component={Admin} /> */}
//       {/* <Route exact path="/Student/" component={Student} />
//       <Route exact path="/Teacher/" component={Teacher} />*/}
//       <Route exact path="/" component={Home} />





//       </Switch>
//     </div>
//   </Router>
// );

// export default App;
import React from 'react';
import './App.css';
import Routing from './components/routing.component'

function App() {
  return (
    <div className="App">
      <Routing></Routing>
    </div>
  );
}

export default App;