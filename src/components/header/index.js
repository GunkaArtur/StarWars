import React from "react";
import "./style.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="http://localhost:3000/">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="http://localhost:3000/"></a>People
        </li>
        <li>
          <a href="http://localhost:3000/"></a>Planets
        </li>
        <li>
          <a href="http://localhost:3000/"></a>Starships
        </li>
      </ul>
      <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
        Change service
      </button>
    </div>
  );
};

export default Header;
