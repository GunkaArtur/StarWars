import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./style.css";
import PeoplePage from "../people-page";

export default class  App extends Component {

    state = {
        showRandomPlanet: true,
    }

    render() {
        return(
            <div className="app">
                <Header />
                <RandomPlanet />

                <PeoplePage />
            </div>
        )
    }
}

// TODO 72 next