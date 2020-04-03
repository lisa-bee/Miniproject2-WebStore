import React from "react";
import { Box, Image } from "grommet";

interface Props {
  image: string;
}

interface State {}

export default class ImageBox extends React.Component<Props, State> {
  render() {
    return (
      <Box pad="small" width="medium" height="medium">
        <Image fit="contain" src={this.props.image} />
      </Box>
    );
  }
}
