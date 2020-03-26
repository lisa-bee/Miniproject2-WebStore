import React from "react";
import { Box, Button, Text, Menu } from "grommet";
import { Close } from "grommet-icons";
import { Link } from "react-router-dom";
import { CartConsumer } from "../contexts/CartContext";

interface Props {
  handleCartClick: () => void;
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
            <Box pad="medium" gap="medium" width="medium" background="light-1">
              <Box direction="row" justify="between">
                <Text>Talva</Text>
                <Link to="/">
                  <Close />
                </Link>
              </Box>
              <Text size={"20pt"}>249 SEK</Text>
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
              <Text size={"10pt"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos, iusto, consectetur incidunt neque facere nobis
                repellat, non tenetur sed quas quos molestias a! Iure
                consequuntur illum odit, incidunt labore quam.
              </Text>
            </Box>
          </div>
        )}
      </CartConsumer>
    );
  }
}
