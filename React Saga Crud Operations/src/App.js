import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import UserInfo from './pages/UserInfo';
import AddEditUser from './pages/AddEditUser';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/adduser" component={AddEditUser}/>
        <Route path="/edituser/:id" component={AddEditUser}/>
        <Route path="/userinfo/:id" component={UserInfo}/>
        <Route path="/about" component={About}/>


      </Switch>
    </div>
    </BrowserRouter> 
  );
}

export default App;
