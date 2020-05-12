import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import Record from "../record";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 5
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const { getPerson, getPersonImg } = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender} , ${birthYear})`
        }
      />
    );
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImgUrl={getPersonImg}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
