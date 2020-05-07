import React, { Component } from "react";
import "./style.css";
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({
          person,
          loading: false
        });
      })
      .catch(this.onError);
  }

  render() {
    const { person, error } = this.state;

    if (!this.state.person) {
      return <span>Select a person</span>;
    }
    const { loading } = this.state;

    const hasData = !(loading || error);

    const content = hasData ? <PersonView person={person} /> : null;
    const spinner = loading ? <Spiner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className="person-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  return (
    <>
      <img
        src={imgUrl}
        alt=""
        className="person-image"
        width={300}
        height={300}
      />

      <div className="card-body">
        <h2>{name}</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span>Date of birth</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span>Eye color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};
