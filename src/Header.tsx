import React, { CSSProperties } from "react";
import { Box, Header, Image, Button } from "grommet";
import { Cart } from "grommet-icons";
import { Link } from "react-router-dom";
import { CartConsumer } from "./contexts/CartContext";

export default class Header1 extends React.Component {
  render() {
    let image = require("./assets/logo.png");
    return (
      <CartConsumer>
        {({ items, addProductToCart }) => (
          <Header justify="between" background="light-1" pad="small">
            <Box>
              <Link to="/">
                <Image fit="contain" src={image} />
              </Link>
            </Box>
            <Link to="/checkoutpage">
              <Box direction="row" align="center">
                <div style={shoppingCountContainer()}>
                  <p style={shoppingCount()}>{items.length}</p>
                </div>
                <Cart color="plain" size="medium" />
                <Button
                  primary
                  margin="small"
                  color="dark-1"
                  label="Go to check out"
                  //onClick={() => addProductToCart(product)}
                ></Button>
              </Box>
            </Link>
          </Header>
        )}
      </CartConsumer>
    );
  }
}

const shoppingCountContainer = (): CSSProperties => ({
  height: "1.4rem",
  width: "1.4rem",
  backgroundColor: "#3D138D",
  borderRadius: "2rem"
});

const shoppingCount = (): CSSProperties => ({
  position: "absolute",
  top: "2.23rem",
  right: "15.58rem",
  color: "white",
  fontSize: "0.8rem"
});
