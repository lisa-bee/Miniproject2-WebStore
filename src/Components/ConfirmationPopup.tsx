import React, { CSSProperties } from "react";
import { Box, Button, ResponsiveContext } from "grommet";
import { Link } from "react-router-dom";

interface Props {
  closeDiv: () => void;
}
interface State {}

export default class ConfirmationPopup extends React.Component<Props, State> {
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            background="light-4"
            height="medium"
            className="cartMessage"
            style={cartMessage(size)}
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
                  style={buttonStyle(size)}
                ></Button>
                <Link to="/checkoutpage/">
                  <Button
                    onClick={this.props.closeDiv}
                    margin="small"
                    label="Go to cart"
                    primary
                    color="dark-1"
                    style={buttonStyle(size)}
                  ></Button>
                </Link>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

const cartMessage = (size: string): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  lineHeight: "normal",
  position: "absolute",
  width: size == "small" ? "83%" : "100%",
  justifyContent: "center",
  alignItems: "center"
});

const buttonStyle = (size: string): CSSProperties => ({
  fontSize: size == "small" ? "13px" : "18px"
});
