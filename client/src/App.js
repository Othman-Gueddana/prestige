import React from "react"
import './App.css';
import Home from "./components/home/Home";
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import AllProducts from './components/collections/AllProducts'
import NavbarPage from "./components/home/NavbarPage"
function App(){
 
  return (
    <Router> 
    <div className="App">
      <NavbarPage/>
     <Switch> 
     <Route path="/" exact component={Home} />
     <Route path="/collection" component={AllProducts} />
     </Switch>
    </div>
    </Router>
  )
}
export default App;
