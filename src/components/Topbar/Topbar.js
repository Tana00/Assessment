import React from "react";
import Menu from "../../images/menu.png";
import Arrow from "../../images/arrow.png";
import Alarm from "../../images/alarm.png";
import Profile from "../../images/profile.png";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar_left">
        <img src={Menu} alt="menu" />
        <div className="breadcrumbs">
          <p>Home</p>
          <img src={Arrow} alt="Arrow" />
          <p>Productivity</p>
          <img src={Arrow} alt="Arrow" />
          <p>Notes</p>
        </div>
      </div>
      <div className="topbar_right">
        <div className="topbar_right_item">
          <img src={Alarm} alt="Alarm" />
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
