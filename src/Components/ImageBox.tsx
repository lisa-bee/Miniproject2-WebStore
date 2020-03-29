import React from "react";
import { Box, Image } from "grommet";
import ProductContainer from "./ProductContainer";

interface Props {
  image: string;
}

interface State {}

export default class ImageBox extends React.Component<Props, State> {
  render() {
    return (
      <Box background="dark-1" width="medium" height="medium">
        <Image fit="contain" src={this.props.image} />
      </Box>
    );
  }
}
