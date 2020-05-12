import { SwapiServiceConsumer } from "../swapi-service-context";
import ItemDetails from "../item-details";
import Record from "../record";
import React from "react";

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship, getStarshipImg }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;
