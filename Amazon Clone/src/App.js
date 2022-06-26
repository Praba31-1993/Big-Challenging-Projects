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
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
          <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
