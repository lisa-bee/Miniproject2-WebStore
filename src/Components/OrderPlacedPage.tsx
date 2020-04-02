import React from "react";
import { Box, Text, Button } from "grommet";
import { Link } from "react-router-dom";

export default class OrderPlacedPage extends React.Component<{}, {}> {
  render() {
    return (
      <Box align="center" pad="large" gap="large" width="large" style={{textAlign: "center"}}>
        <Box align="center">
          <h1>Your order has been placed!</h1>
          <Text>Your order number is:</Text>
          <strong>{Math.floor(Math.random() * 100000) + 600000}</strong>
        </Box>
        <Box align="center">
        <Text style={{ fontSize: "14pt" }}>Thank you for your purchase, we hope to see you soon again!</Text>
        </Box>
        <strong>Forgot something?</strong>
        <Link to="/">
        <Button
        label="Back to products"/>
        </Link>
      </Box>
    );
  }
}
