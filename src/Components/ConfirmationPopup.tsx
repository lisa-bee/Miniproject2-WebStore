import React, { CSSProperties } from "react";
import { Box, Button } from "grommet";
import { Link } from "react-router-dom";

interface Props {
  closeDiv: () => void;
}
interface State {}

export default class ConfirmationPopup extends React.Component<Props, State> {
  render() {
    return (
      <>
        <Box
          background="dark-5"
          height="medium"
          width="large"
          className="cartMessage"
          style={cartMessage}
        >
          <h1>Item added to cart!</h1>
          <p>Continue shopping or go to cart?</p>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Button
              onClick={this.props.closeDiv}
              margin="small"
              label="Continue"
              primary
              color="dark-1"
            ></Button>
            <Link to="/checkoutpage/">
              <Button
                onClick={this.props.closeDiv}
                margin="small"
                label="Go to cart"
                primary
                color="dark-1"
              ></Button>
            </Link>
          </Box>
        </Box>
      </>
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