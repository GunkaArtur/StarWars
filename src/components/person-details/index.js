import React, {Component} from "react";
import "./style.css"
import SwapiService from "../../services/swapi-service";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.personId !== prevProps.personId){
            this.updatePerson()
        }
    }

    updatePerson() {
        const {personId} = this.props
        if (!personId) {
            return;
        }

        this.swapiService.getPerson(personId)
            .then((person)=>{
                this.setState({person})
            })
    }

    render() {

        if(!this.state.person){
            return <span>Select a person</span>
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person

        const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

        return (
            <div className="person-details card">
                <img src={imgUrl} alt="" className="person-image" width={300} height={300}/>

                <div className="card-body">
                    <h2>{name}</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="list-group-item">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="list-group-item">Date of birth</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="list-group-item">Eye color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}