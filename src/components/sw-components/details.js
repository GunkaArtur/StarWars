import React from "react";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import Record from "../record";

const swapiService = new SwapiService();

const {
  getPerson,
  getPersonImg,
  getPlanet,
  getPlanetImg,
  getStarship,
  getStarshipImg
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPerson} getImgUrl={getPersonImg}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPlanet} getImgUrl={getPlanetImg}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImgUrl={getStarshipImg}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
