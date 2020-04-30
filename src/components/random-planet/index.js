import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import "./style.css"

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
        diameter: null
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25+2);
        this.swapiService.getPlanet(id).then((planet)=>{
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }

    render() {
        const { id, name, population, rotationPeriod, diameter } = this.state

        return (
            <div className="random-planet jumbotron rounded">
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
            </div>
        )
    }
}

// TODO 58 next