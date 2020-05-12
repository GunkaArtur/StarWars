import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./style.css";
import PeoplePage from "../people-page";
import Row from "../row";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Record from "../record";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImg,
      getStarshipImg
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImgUrl={getPersonImg}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starhipDetails = (
      <ItemDetails itemId={5} getData={getStarship} getImgUrl={getStarshipImg}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <div className="app">
        <Header />
        {/*<RandomPlanet />*/}

        <Row left={personDetails} right={starhipDetails} />

        {/*<PeoplePage />*/}
      </div>
    );
  }
}

// TODO 77 next
