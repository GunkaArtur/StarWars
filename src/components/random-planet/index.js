import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import "./style.css"
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet,3500)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading:false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading:false
        })
    }

    updatePlanet =()=> {
        const id = Math.floor(Math.random()*25+2);
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { planet , loading, error } = this.state

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spiner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

    return (
        <>
            <img src={imgUrl} alt="man" className="planet-image" width={300} height={300}/>
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