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
          background="light-4"
          height="medium"
          className="cartMessage"
          style={cartMessage}
        >
          <Box pad="small">
          <h1>One item added to cart!</h1>
          <p>Continue shopping or go to cart?</p>
          </Box>
          <Box direction="row-responsive">
            <Box direction="row">
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
        </Box>
      </>
    );
  }
}

const cartMessage: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  lineHeight: "normal",
  position: "absolute",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};
