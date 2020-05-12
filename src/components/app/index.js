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

import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="app">
            <Header />
            <RandomPlanet />

            <ErrorBoundry>
              <Row
                left={<PersonList />}
                right={<PersonDetails itemId={11} />}
              />
              <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />
              <Row
                left={<StarshipList />}
                right={<StarshipDetails itemId={9} />}
              />
            </ErrorBoundry>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

// TODO 77 next
