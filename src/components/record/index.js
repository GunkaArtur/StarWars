import React from "react";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default Record;
