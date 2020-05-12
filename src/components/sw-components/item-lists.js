import React from "react";
import SwapiService from "../../services/swapi-service";
import withData from "../hoc-helpers";
import ItemList from "../item-list";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarhips } = swapiService;

const withChildFn = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

const PersonList = withData(withChildFn(ItemList, renderName), getAllPeople);

const PlanetList = withData(withChildFn(ItemList, renderName), getAllPlanets);

const StarshipList = withData(
  withChildFn(ItemList, renderModelAndName),
  getAllStarhips
);

export { PersonList, PlanetList, StarshipList };
