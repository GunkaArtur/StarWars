import React from "react";
import "./style.css";

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list group-list">{items}</ul>;
};

export default ItemList;
