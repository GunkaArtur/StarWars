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
import DummySwapiService from "../../services/dummy-swapi-service";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  onServicveChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("Changed to, ", Service.name);
      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="app">
            <Header onServiceChange={this.onServicveChange} />
            <RandomPlanet />

            <ErrorBoundry>
              <Row
                left={<PersonList />}
                right={<PersonDetails itemId={11} />}
              />
              <Row left={<PlanetList />} right={<PlanetDetails itemId={4} />} />
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

// TODO 87 next
