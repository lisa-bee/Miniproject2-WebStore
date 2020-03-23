import React, { CSSProperties } from "react";
import { Grommet, Box } from "grommet";
import { grommet } from "grommet/themes";
import ProductContainer from "./ProductInfoBox";

export default class AllProducts extends React.Component<{}, {}> {
  render() {
    return (
      <Grommet theme={grommet}>
        <ProductContainer />
      </Grommet>
    );
  }
}
