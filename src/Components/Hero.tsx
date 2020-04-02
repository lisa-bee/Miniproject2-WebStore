import React, { CSSProperties } from "react";
import { Box, Video, ResponsiveContext } from "grommet";

export default class Header1 extends React.Component {
  render() {
    let video = require("../assets/livingroom.mp4");
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            height={size}
            width="100%"
            justify="center"
            align="center"
            style={{ position: "relative" }}
          >
            <h1 style={heading(size)}>
              <p style={noMargin()}>PERSONALIZE </p>
              <p style={noMargin()}>YOUR HOME</p>
            </h1>
            <Video controls="false" autoPlay mute loop>
              <source src={video} type="video/mp4" />
            </Video>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

const heading = (size: string): CSSProperties => ({
  margin: 0,
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  width: "100%",
  color: "#3d138d",
  fontSize: size == "small" ? "3rem" : size == "medium" ? "6rem" : "7rem",
  textAlign: "center",
  fontWeight: "normal",
  lineHeight: size == "small" ? "3rem" : size == "medium" ? "6rem" : "7rem"
});

const noMargin = (): CSSProperties => ({
  margin: 0
});
