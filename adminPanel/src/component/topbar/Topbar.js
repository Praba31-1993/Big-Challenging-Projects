import React from "react";
import "./Topbar.css";
// import { NotificationsNoneIcon } from "@material-ui/icons";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Lama Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBag">2</span>
          </div>

          <div className="topbarIconContainer">
          <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>

          <div className="topbarIconContainer settings">
            <SettingsIcon/>

          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />

        </div>
      </div>
    </div>
  );
}
