import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import "./style.css"
import Spiner from "../spiner";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    constructor() {
        super();
        this.updatePlanet()
    }

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
        planet: {},
        loading: true
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading:false
        })
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25+2);
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded)
    }

    render() {
        const { planet , loading } = this.state

        const spinner = loading ? <Spiner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="man" className="planet-image" width={300} height={300}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Popolation</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

// TODO 59 next