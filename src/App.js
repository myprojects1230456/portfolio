import React from "react" ;
import {  Route, Switch } from 'react-router-dom';
import Error from "./Error";
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./component/Login";
import About from "./component/About";
import Calculator from "./component/Calculator";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import Home from "./component/Home";


import "./App.css";
import "./bootstrap.css";
/*import './Fish.png';*/

const App = () => {
  return (
    <>
   <Navbar/>
   
   <Route exact path="/Home">
   <Home/>
   </Route>

   <Route  path="/Login">
   <Login/>
   </Route>

   
  
   <Route path="/Signup">
   <Signup/>
   </Route>
   
   <Route path="/About">
   <About/>
   </Route>
   
   <Route  path="/Calculator">
   <Calculator/>
   </Route>

  


   </>
 
  );
};

export default App;