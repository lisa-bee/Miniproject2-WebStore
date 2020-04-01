import React from "react";
import { Box, Text } from "grommet";

export default class OrderPlacedPage extends React.Component<{}, {}> {
  render() {
    return (
      <Box align="center" pad="large" gap="large" width="large">
        <Box align="center">
          <h1>Your order has been placed!</h1>
          <Text>Your order number is:</Text>
          <strong>{Math.floor(Math.random() * 100000) + 600000}</strong>
        </Box>
        <Box align="center">
        <Text style={{ fontSize: "14pt" }}>Thank you for your purchase!</Text>
        <Text style={{ fontSize: "12pt" }}>We hope to see you soon again!</Text>
        </Box>
      </Box>
    );
  }
}
