import React from "react";
import Photo from "../../images/photo.png";
import More from "../../images/more.png";
import "./Card.scss";

const Card = ({ name, date, title, content, assignee, color }) => {
  return (
    <div className="card">
      <div className="card_header">
        <img src={Photo} alt="Note" />
        <p className="title">{name}</p>
        <p className="date">{date}</p>
      </div>
      <div className="card_content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <hr />
      <div className="card_footer">
        <div>
          <div className="dot" style={{ backgroundColor: color }}></div>
          <p style={{ color: color }}>{assignee}</p>
        </div>
        <img src={More} alt="More" />
      </div>
    </div>
  );
};

export default Card;
