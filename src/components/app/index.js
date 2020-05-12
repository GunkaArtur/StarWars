import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./style.css";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {
  PersonDetails,
  PersonList,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList
} from "../sw-components";

export default class App extends Component {
  state = {
    showRandomPlanet: true
  };

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <ErrorBoundry>
          <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />
          <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />
          <Row left={<StarshipList />} right={<StarshipDetails itemId={9} />} />
        </ErrorBoundry>
      </div>
    );
  }
}

// TODO 77 next
