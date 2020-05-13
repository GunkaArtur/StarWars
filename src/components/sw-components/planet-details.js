import ItemDetails from "../item-details";
import Record from "../record";
import React from "react";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImg
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
