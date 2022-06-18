import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";

import "./App.css";
import Home from "./component/pages/home/Home";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
