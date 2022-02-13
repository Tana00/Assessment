import React from "react";
import Profile from "../../images/profile.png";
import "./Table.scss";

const Table = ({ headData, bodyData }) => {
  // Function to get name initials
  const getInitials = (fullName) => {
    const allNames = fullName.trim().split(" ");
    const initials = allNames.reduce((acc, curr, index) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    }, "");
    return initials;
  };

  return (
    <div className="table">
      <table>
        {/* Table Head */}
        <thead>
          <tr>
            {headData.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {bodyData.map(
            ({ name, file_name, color, category, title, date }, index) => (
              <tr key={index}>
                <td className="employee">
                  {name === "Jane Doe" ? (
                    <div className="profile_img">{getInitials(name)}</div>
                  ) : (
                    <img src={Profile} alt="profile" />
                  )}

                  <div>
                    <h2>{name}</h2>
                    <p>{title}</p>
                  </div>
                </td>
                <td>{file_name}</td>
                <td style={{ color: color }}>
                  <div className="dot" style={{ backgroundColor: color }}></div>
                  {category}
                </td>
                <td className="date_cell">{date}</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
