import { SwapiServiceConsumer } from "../swapi-service-context";
import ItemDetails from "../item-details";
import Record from "../record";
import React from "react";

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImg }) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImgUrl={getPlanetImg}
          >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation period" />
            <Record field="diameter" label="Diameter" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export default PlanetDetails;
