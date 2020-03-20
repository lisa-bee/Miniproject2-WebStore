import React from "react";
import { Grommet, Box, Button, Menu, Main } from "grommet";
import { grommet } from "grommet/themes";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";

export default class ProductPage extends React.Component<{}, {}> {
  render() {
    return (
      <Grommet theme={grommet}>
        <Box
          direction="row-responsive"
          justify="center"
          align="center"
          pad="xlarge"
          background="light-1"
        >
        <ImageBox />
        <ProductInfoBox />
        </Box>
      </Grommet>
    );
  }
}
