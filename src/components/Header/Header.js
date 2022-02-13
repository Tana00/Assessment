import React from "react";
import List from "../../images/list.png";
import Grid from "../../images/grid.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <h2>Notes</h2>
        <div>
          <select>
            <option value="last_added">Last Added</option>
            <option value="last_updated">Last Updated</option>
            <option value="last_viewed">Last Viewed</option>
          </select>
          {window.innerWidth >= 768 ? (
            <button>Add New Note</button>
          ) : (
            <button>New Note</button>
          )}
        </div>
      </div>
      <div className="header_right">
        <div className="header_right_item">
          <p>Notes</p>
          <div className="line"></div>
          <div className="display">
            <img src={List} alt="List view" />
            <div className="divider"></div>
            <img src={Grid} alt="Grid view" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
