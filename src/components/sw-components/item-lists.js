import React from "react";
import { withData, withSwapiService } from "../hoc-helpers";
import ItemList from "../item-list";

const withChildFn = fn => Wrapped => {
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

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};
const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarhips
  };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(withChildFn(renderName)(ItemList))
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(withChildFn(renderName)(ItemList))
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(withChildFn(renderModelAndName)(ItemList))
);

export { PersonList, PlanetList, StarshipList };
