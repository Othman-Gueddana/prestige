import React from "react"
import './App.css';
import Home from "./components/home/Home";
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import AllProducts from './components/collections/AllProducts'
import NavbarPage from "./components/home/NavbarPage"
import ContactPage from "./components/contact/Contact"
import FooterPage from "./components/home/FooterPage"
function App(){
  return (
    <Router> 
    <div className="App">
     <NavbarPage/>
     <Switch> 
     <Route path="/" exact component={Home} />
     <Route path="/collection" component={AllProducts} />
     <Route path="/contact" component={ContactPage}/>
     </Switch>
    </div>
    <FooterPage/>
    </Router>
    
  )
}
export default App;
