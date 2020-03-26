import React, { CSSProperties } from "react";
import { Box, Video } from "grommet";

export default class Header1 extends React.Component {
  render() {
    let video = require("../assets/livingroom.mp4");
    return (
      <Box width="100%" height="medium" justify="center" align="center">
        <h1 style={heading()}>
          PERSONALIZE <br />
          YOUR HOME
        </h1>
        <Video controls="false" autoPlay mute loop>
          <source src={video} type="video/mp4" />
        </Video>
      </Box>
    );
  }
}

const heading = (): CSSProperties => ({
  position: "absolute",
  top: "10rem",
  zIndex: 2,
  width: "100%",
  color: "#3d138d",
  fontSize: "7rem",
  lineHeight: "5rem",
  textAlign: "center",
  fontWeight: "normal"
});
