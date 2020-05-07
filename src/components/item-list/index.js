import React, { Component } from "react";
import "./style.css";
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({ itemList });
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spiner />;
    }

    const items = this.renderItems(itemList);

    return <ul className="item-list group-list">{items}</ul>;
  }
}
