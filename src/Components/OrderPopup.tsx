import React, { CSSProperties } from "react";
import { Box } from "grommet";



export default class OrderPopup extends React.Component<{}, {}> {
  render() {
    return (
      <Box
        background="dark-5"
        height="medium"
        width="large"
        className="cartMessage"
        style={cartMessage}
      ></Box>
    );
  }
}

const cartMessage: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  position: "absolute",
  justifyContent: "center",
  alignItems: "center"
};
