import React from "react";
import { Box, Image } from "grommet";
import ProductContainer from "./ProductContainer";

let image = require("../assets/image1.jpg");
export default class ImageBox extends React.Component<{}, {}> {
  render() {
    return (
      <Box background="dark-1" pad="medium" width="medium" height="medium">
        <Image fit="contain" src={image} />
      </Box>
    );
  }
}
