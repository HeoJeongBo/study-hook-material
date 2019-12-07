import React from "react";
import { Grid } from "@material-ui/core";
import List from "./List";

const ListContainer = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {[...new Array(12)].map(() => (
        <List />
      ))}
    </Grid>
  );
};

export default ListContainer;
