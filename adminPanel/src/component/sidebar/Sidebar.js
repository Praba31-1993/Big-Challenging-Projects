import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShopIcon from '@material-ui/icons/Shop';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import MailIcon from '@material-ui/icons/Mail';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReportIcon from '@material-ui/icons/Report';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon"/> Home
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon"/> Sales
            </li>
          </ul>

          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PermIdentityIcon className="sidebarIcon"/> Users
            </li>
            <li className="sidebarListItem">
              <ShopIcon className="sidebarIcon"/> Products
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon"/> Transactions
            </li>
            <li className="sidebarListItem">
              <EqualizerIcon className="sidebarIcon"/> Reports
            </li>
          </ul>

          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailIcon className="sidebarIcon"/> Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon"/> Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon"/> Messages
            </li>
          </ul>

          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon"/> Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon"/> Reports
            </li>
          </ul>




          
        </div>
      </div>
    </div>
  );
}
