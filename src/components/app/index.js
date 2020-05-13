import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./style.css";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetPage, StarshipsPage } from "../pages";

export default class App extends Component {
  state = {
    swapiService: new SwapiService()
  };

  onServicveChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
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
              <PeoplePage />
              <PlanetPage />
              <StarshipsPage />
            </ErrorBoundry>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

// TODO 87 next
