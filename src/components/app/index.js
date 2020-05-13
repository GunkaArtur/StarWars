import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./style.css";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetPage, StarshipsPage } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";
import PersonDetails from "../sw-components/person-details";

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
          <Router>
            <div className="app">
              <Header onServiceChange={this.onServicveChange} />
              <RandomPlanet />

              <Route
                path={"/"}
                render={() => <h2>Welcome to StarDB</h2>}
                exact
              />
              <Route path="/people" component={PeoplePage} exact />
              <Route path="/planets" component={PlanetPage} exact />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  console.log("match", match);
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
                exact
              />
              <Route
                path="/people/:id"
                render={({ match }) => {
                  console.log("match", match);
                  const { id } = match.params;
                  return <PersonDetails itemId={id} />;
                }}
                exact
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

// TODO 98 next
