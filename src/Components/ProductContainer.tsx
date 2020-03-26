import React, { CSSProperties } from "react";
import { Button, Box, Image } from "grommet";
import { grommet } from "grommet/themes";
import ConfirmationPopup from "./ConfirmationPopup";
import { Cart } from "grommet-icons";

interface Props {
  title: string;
  price: number;
  image: string;
  description: string;
  handleCartClick: () => void;
}

interface State {
  isOpen: Boolean;
}

export default class ProductContainer extends React.Component<Props, State> {
  render() {
    return (
      <Box align="center">
        <Box margin="small" width="medium" height="medium">
          <Image fit="contain" src={this.props.image} />
        </Box>
        <Box direction="row" width="17rem" justify="between">
          <p style={noMargin()}>{this.props.title}</p>
          <Cart
            color="plain"
            size="1.2rem"
            onClick={this.props.handleCartClick}
          />
        </Box>
        <Box direction="row" width="17rem" justify="start">
          <p style={smallText()}>{this.props.price} SEK </p>
        </Box>
      </Box>
    );
  }
}

const noMargin = (): CSSProperties => ({
  margin: 0
});

const smallText = (): CSSProperties => ({
  fontSize: "0.9rem",
  margin: 0
});
