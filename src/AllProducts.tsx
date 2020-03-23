import React, { CSSProperties } from "react";
import { Grommet, Box } from "grommet";
import { grommet } from "grommet/themes";
import ProductContainer from "./ProductContainer";

export default class AllProducts extends React.Component<{}, {}> {
  render() {
    return (
      <Grommet theme={grommet}>
        <Box width="100%" justify="center" align="center">
          <Box
            width="xlarge"
            wrap={true}
            height="medium"
            direction="row-responsive"
          >
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
          </Box>
        </Box>
      </Grommet>
    );
  }
}
