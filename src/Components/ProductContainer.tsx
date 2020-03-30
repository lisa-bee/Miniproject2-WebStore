import React, { CSSProperties } from "react";
import { Box, Image, ResponsiveContext } from "grommet";
import { Cart } from "grommet-icons";
import { Link } from "react-router-dom";
import { Product } from "./AllProducts";
import { CartConsumer } from "../contexts/CartContext";

interface Props {
  product: Product;

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
      <CartConsumer>
        {({ addProductToCart }) => (
      <ResponsiveContext.Consumer>
        {size => (
          <Box align="center">
            <Link
              to={{
                pathname: "/productpage/" + this.props.product.index
              }}
            >
              <Box style={imagecontainer(size)}>
                <Image fit="contain" src={this.props.image} />
              </Box>
            </Link>
            <Box direction="row" width="17rem" justify="between">
              <p style={noMargin()}>{this.props.title}</p>
              <Cart
                color="plain"
                size="1.2rem"
                onClick={/* this.props.handleCartClick  */() => addProductToCart(this.props.product)}
              />
            </Box>
            <Box direction="row" width="17rem" justify="start">
              <p style={smallText()}>{this.props.price} SEK </p>
            </Box>
          </Box>
          )}
        </ResponsiveContext.Consumer>
        )}
      </CartConsumer>
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

const imagecontainer = (size: string): CSSProperties => ({
  marginTop: "1rem",
  marginBottom: "1rem",
  height: "25rem",
  width: size == "small" ? "20rem" : size == "medium" ? "25rem" : "30rem"
});
