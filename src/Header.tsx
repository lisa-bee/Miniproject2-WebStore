import React, { CSSProperties } from "react";
import { Box, Grommet, Header, Image, Button } from "grommet";
import { grommet } from "grommet/themes";
import { Cart } from "grommet-icons";

export default class Header1 extends React.Component {
  render() {
    let image = require("./assets/logo.png");
    return (
      <Grommet theme={grommet}>
        <Header justify="between" background="light-1" pad="medium">
          <Box>
            <Image fit="contain" src={image} />
          </Box>
          <Box direction="row" align="center">
            <div style={shoppingCountContainer()}>
              <p style={shoppingCount()}>0</p>
            </div>
            <Cart
              onClick={() => {
                alert("Shopping cart");
              }}
              color="plain"
              size="medium"
            />
            <Button
              margin="small"
              primary
              color="dark-1"
              label="Go to check out"
              onClick={() => {
                alert("Shopping cart");
              }}
            ></Button>
          </Box>
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
