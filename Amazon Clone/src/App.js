import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
function App() {
  return (
    
      <div className="App">
        <Switch>
          
          <Route path="/login" component={Login}/>
          {/* <Route path="/register" component={Login}/> */}
          <Route exact path="/">
          <Header />

            <Home />
          </Route>
          

          
        </Switch>
      </div>
    // </BrowserRouter>
  );
}

export default App;
