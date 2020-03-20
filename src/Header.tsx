import React from "react";
import { Box, Grommet, Header, Image } from "grommet";
import { grommet } from "grommet/themes";
import { Cart } from "grommet-icons";

export default class Header1 extends React.Component {
  render() {
    let image = require("./assets/logo.png");
    return (
      <Grommet theme={grommet}>
        <Header background="light-1" pad="medium">
          <Box>
            <Image fit="contain" src={image} />
          </Box>
          <Box direction="row" gap="medium">
            <Cart
              onClick={() => {
                alert("Shopping cart");
              }}
              color="plain"
              size="large"
            />
          </Box>
        </Header>
      </Grommet>
    );
  }
}
