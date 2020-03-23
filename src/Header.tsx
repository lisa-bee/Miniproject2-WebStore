import React, { CSSProperties } from "react";
import { Box, Grommet, Header, Image, Button } from "grommet";
import { grommet } from "grommet/themes";
import { Cart } from "grommet-icons";
import { Link } from "react-router-dom";

export default class Header1 extends React.Component {
  render() {
    let image = require("./assets/logo.png");
    return (
      <Grommet theme={grommet}>
        <Header justify="between" background="light-1" pad="medium">
          <Box>
            <Link to="/startpage/">
            <Image fit="contain" src={image} />
            </Link>
          </Box>
          <Link to="/checkoutpage">
          <Box direction="row" align="center">
            <div style={shoppingCountContainer()}>
              <p style={shoppingCount()}>0</p>
            </div>
            <Cart
              color="plain"
              size="medium"
            />
            <Button
              primary
              margin="small"
              color="dark-1"
              label="Go to check out"
            ></Button>
          </Box>
          </Link>
        </Header>
      </Grommet>
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
  top: "2.8rem",
  right: "16.37rem",
  color: "white",
  fontSize: "0.8rem"
});
