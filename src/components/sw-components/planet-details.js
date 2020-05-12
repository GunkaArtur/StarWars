import ItemDetails from "../item-details";
import Record from "../record";
import React from "react";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImg } = swapiService;
  return (
    <ItemDetails itemId={itemId} getData={getPlanet} getImgUrl={getPlanetImg}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
