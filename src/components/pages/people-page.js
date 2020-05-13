import React, { Component } from "react";
import Row from "../row";
import { PersonDetails, PersonList } from "../sw-components";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({
      selectedItem: selectedItem
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}
