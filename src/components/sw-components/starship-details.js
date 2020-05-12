import ItemDetails from "../item-details";
import Record from "../record";
import React from "react";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImg } = swapiService;
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

export default withSwapiService(StarshipDetails);
