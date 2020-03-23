import React, { CSSProperties } from "react";
import { Grommet, Box, Image } from "grommet";
import { grommet } from "grommet/themes";

export default class ProductContainer extends React.Component<{}, {}> {
  render() {
    let image = require("./assets/image1.jpg");
    return (
      <Grommet theme={grommet}>
        <Box
          pad="medium"
          align="center"
          background={{ color: "light-5", opacity: "strong" }}
          width="medium"
          height="medium"
        >
          <Image fit="contain" src={image} />
        </Box>
      </Grommet>
    );
  }
}
