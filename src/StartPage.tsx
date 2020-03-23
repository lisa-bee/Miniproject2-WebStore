import React from "react";
import Hero from "./Hero";
import { Box, Grommet, Button } from "grommet";
import { grommet } from "grommet/themes";
import AllProducts from "./AllProducts";
import { Link } from "react-router-dom";

export default class StartPage extends React.Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <Box direction="row-responsive" justify="center" align="center">
          <Hero />
        </Box>
        <AllProducts />
        <Link to="/productpage/">
          <Button></Button>
        </Link>
      </Grommet>
    );
  }
}
