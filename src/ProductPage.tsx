import React, { CSSProperties } from "react";
import { Grommet, Box } from "grommet";
import { grommet } from "grommet/themes";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";

export default class ProductPage extends React.Component<{}, {}> {
  render() {
    return (
      <div style={container}>
      <Grommet theme={grommet}>
        <Box
          direction="row-responsive"
          justify="center"
          align="center"
          pad="large"
          background="light-1"
        >
        <ImageBox />
        <ProductInfoBox />
        </Box>
      </Grommet>
      </div>
    );
  }
}


const container: CSSProperties = {
 
}