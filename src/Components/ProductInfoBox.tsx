import React from "react";
import { Box, Button, Text, Menu } from "grommet";
import { Close } from "grommet-icons";
import { Link } from "react-router-dom";
import { CartConsumer } from "../contexts/CartContext";
import { Product } from "./AllProducts";

interface Props {
  product: Product;
  handleCartClick: () => void;
}

interface State {
  isOpen: Boolean;
}

export default class ProductInfoBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  private handleClick = (addProductToCart: (product: Product) => void) => {
    this.props.handleCartClick();
    addProductToCart(this.props.product);
  };

  render() {
    return (
      <CartConsumer>
        {({ addProductToCart }) => (
          <div>
            <Box pad="medium" gap="medium" width="medium" background="light-2">
              <Box direction="row" justify="between">
                <Text>{this.props.product.title} </Text>
                <Link to="/">
                  <Close />
                </Link>
              </Box>
              <Text size={"20pt"}>{this.props.product.price} SEK</Text>
              <Text>Size: 70x100 </Text>
              <Button
                primary
                color="dark-1"
                label="Add to cart"
                onClick={() => {
                  this.handleClick(addProductToCart);
                }}
              ></Button>
              <Text size={"12pt"}>PRODUCT INFO</Text>
              <Text size={"10pt"}>{this.props.product.description}</Text>
            </Box>
          </div>
        )}
      </CartConsumer>
    );
  }
}
