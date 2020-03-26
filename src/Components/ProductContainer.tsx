import React, { CSSProperties } from "react";
import { Button, Box, Image } from "grommet";
import { grommet } from "grommet/themes";

interface Props {
  title: string;
  price: number;
  image: string;
  description: string;
}

interface State {}

export default class ProductContainer extends React.Component<Props, State> {
  render() {
    return (
      <Box align="center">
        <Box margin="small" width="medium" height="medium">
          <Image fit="contain" src={this.props.image} />
        </Box>
        <Box align="center">
          <p style={noMargin()}>{this.props.title}</p>
          <p style={noMargin()}>{this.props.price} SEK</p>
        </Box>
        <Button
          primary
          margin="small"
          color="dark-1"
          label="Add to cart"
          //onClick={() => addProductToCart(product)}
        ></Button>
      </Box>
    );
  }
}

const noMargin = (): CSSProperties => ({
  margin: 0
});
