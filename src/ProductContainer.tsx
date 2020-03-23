import React, { CSSProperties } from "react";
import { Grommet, Box, Image } from "grommet";
import { grommet } from "grommet/themes";

export default class ProductContainer extends React.Component<{}, {}> {
  render() {
    let image = require("./assets/image1.jpg");
    return (
      <Grommet theme={grommet}>
        <Box margin="small" width="small" height="small">
          <Image fit="cover" src={image} />
        </Box>
      </Grommet>
    );
  }
}
