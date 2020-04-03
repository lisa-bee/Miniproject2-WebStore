import React from "react";
import Hero from "./Hero";
import AllProducts from "./AllProducts";
import { Box } from "grommet";

export default class StartPage extends React.Component {
  render() {
    return (
      <>
        <Box direction="row-responsive" justify="center" align="center">
          <Hero />
        </Box>
        <Box
          width="100%"
          justify="center"
          align="center"
          margin={{ top: "medium" }}
          style={{ textAlign: "center" }}
        >
          <Box width="large" pad="medium">
            <p>
              Discover the latest trends in posters online. We have a wide
              selection of attractive posters online and launch new designs
              every week. In our magazines you will find inspiration on how to
              decorate your home nicely together with our posters and paintings.
              With us you can buy beautiful posters and paintings online and we
              always offer fast deliveries and low prices.
            </p>
          </Box>
        </Box>
        <AllProducts />
      </>
    );
  }
}
