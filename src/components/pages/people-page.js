import React from "react";
import { withRouter } from "react-router-dom";
import { PersonList } from "../sw-components";

const PeoplePage = ({ history }) => {
  return (
    <PersonList
      onItemSelected={itemId => {
        history.push(`/people/${itemId}`);
      }}
    />
  );
};

export default withRouter(PeoplePage);
