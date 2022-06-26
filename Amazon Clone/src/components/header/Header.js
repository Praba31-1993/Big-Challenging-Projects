import React from "react";
import "./Header.css"
import {
  Search,
  LocationOnOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
        <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
          className="header-logo"
        />
      </Link>
      <div className="header-option" style={{ marginRight: "-10px" }}>
        <LocationOnOutlined />
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option1">Select your Address</span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="searchInput" />
        <Search className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option1">Hello Guest</span>
            <span className="header-option1">Sign In</span>
          </div>
        </Link>
        <Link to="/orders" className="header-link">
          <div className="header-option">
            <span className="header-option1">Returns</span>
            <span className="header-option1">& orders</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link">
          <div className="header-basket">
            <ShoppingCartOutlined/>
            <span className="header-option2 basket-count">0</span>
          </div>
        </Link>
      </div>
      </nav>
    </div>
  );
}
