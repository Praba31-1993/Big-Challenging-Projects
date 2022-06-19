import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./component/pages/home/Home";
import UserList from "./component/pages/userList/UserList";
import User from "./component/pages/user/User";
import NewUser from "./component/pages/newUser/NewUser";
import ProductList from "./component/pages/productList/ProductList";
import Product from "./component/pages/product/Product";
import NewProduct from "./component/pages/newProduct/NewProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserList} />
            <Route path="/user/:userId" component={User} />
            <Route path="/newUser" component={NewUser} />
           
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product/>
            </Route>
            <Route path="/newproduct">
              <NewProduct/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
