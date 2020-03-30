import React from "react";
import Hero from "./Hero";
import AllProducts from "./AllProducts";
import { Box, Button } from "grommet";
import { Link } from "react-router-dom";

export default class StartPage extends React.Component {
  render() {
    return (
      <>
        <Box direction="row-responsive" justify="center" align="center">
          <Hero />
        </Box>
        <AllProducts />
      </>
    );
  }
}
