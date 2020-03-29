import React, { CSSProperties } from "react";
import { Box, Header, Image, Button, ResponsiveContext } from "grommet";
import { Cart } from "grommet-icons";
import { Link } from "react-router-dom";
import { CartConsumer } from "../contexts/CartContext";

export default class Header1 extends React.Component {
  render() {
    let image = require("../assets/logo.png");
    return (
      <CartConsumer>
        {({ items, addProductToCart }) => (
          <ResponsiveContext.Consumer>
            {size => (
              <Header justify="between" background="light-1" pad="small">
                <Box margin={{ left: "large" }}>
                  <Link to="/">
                    <Image fit="contain" src={image} />
                  </Link>
                </Box>
                <Link to="/checkoutpage">
                  <Box
                    direction="row"
                    align="center"
                    margin={{ right: "large" }}
                  >
                    <div style={shoppingCountContainer()}>
                      <p style={shoppingCount()}>{items.length}</p>
                    </div>
                    <Cart color="plain" size="medium" />
                    {size != "small" && (
                      <Button
                        primary
                        margin="small"
                        color="dark-1"
                        label="Go to check out"
                        //onClick={() => addProductToCart(product)}
                      ></Button>
                    )}
                  </Box>
                </Link>
              </Header>
            )}
          </ResponsiveContext.Consumer>
        )}
      </CartConsumer>
    );
  }
}

const shoppingCountContainer = (): CSSProperties => ({
  height: "1.4rem",
  width: "1.4rem",
  backgroundColor: "#3D138D",
  borderRadius: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const shoppingCount = (): CSSProperties => ({
  color: "white",
  fontSize: "0.8rem"
});
