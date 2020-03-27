import React from "react";
import { Box, Button, Text, Menu } from "grommet";
import { Close } from "grommet-icons";
import { Link, useParams } from "react-router-dom";
import { CartConsumer } from "../contexts/CartContext";
import { Product } from "./AllProducts";

interface Props {
  product: Product;
}

interface State {
  isOpen: Boolean;
  items: any[];
}

export default class ProductInfoBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
      items: []
    };
  }

  render() {
    return (
      <CartConsumer>
        {({ items, addProductToCart }) => (
          <div>
            <h1
              onClick={() => {
                addProductToCart(this.props.product);
              }}
            >
              test
            </h1>
            <Box pad="medium" gap="medium" width="medium" background="light-1">
              <Box direction="row" justify="between">
                <Text>{this.props.product.title} </Text>
                <Link to="/">
                  <Close />
                </Link>
              </Box>
              <Text size={"20pt"}>{this.props.product.price} SEK</Text>
              <Text>Size: 70x100 </Text>
              <Menu
                label="Quantity"
                items={[
                  { label: "1", onClick: () => {} },
                  { label: "2" },
                  { label: "3" },
                  { label: "4" }
                ]}
              />
              <Button
                primary
                color="dark-1"
                label="Add to cart"
                onClick={() => addProductToCart}
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
