import React, { CSSProperties } from "react";
import { Grommet, Box, Image } from "grommet";
import { grommet } from "grommet/themes";

export default class ProductContainer extends React.Component<{}, {}> {
  render() {
    let image = require("./assets/image1.jpg");
    return (
      <Grommet theme={grommet}>
        <Box align="center">
          <Box margin="small" width="small" height="small">
            <Image fit="cover" src={image} />
          </Box>
          <Box align="center">
            <p style={noMargin()}>Title</p>
            <p style={noMargin()}>249 SEK</p>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

const noMargin = (): CSSProperties => ({
  margin: 0
});
