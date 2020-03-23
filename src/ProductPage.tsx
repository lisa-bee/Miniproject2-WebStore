import React, { CSSProperties } from "react";
import { Grommet, Box, Button } from "grommet";
import { grommet } from "grommet/themes";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";
import { Link } from "react-router-dom";

interface State {
  isOpen: Boolean;
}

interface Props {}
export default class ProductPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleCartClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeDiv = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div style={container}>
        <Grommet theme={grommet}>
          <Box
            direction="row-responsive"
            justify="center"
            align="center"
            pad="large"
            background="light"
          >
            {this.state.isOpen && (
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
                      onClick={this.closeDiv}
                      margin="small"
                      label="Continue"
                      primary
                      color="dark-1"
                    ></Button>
                  <Link to="/checkoutpage/">
                    <Button
                      onClick={this.closeDiv}
                      margin="small"
                      label="Go to cart"
                      primary
                      color="dark-1"
                    ></Button>
                  </Link>
                </Box>
              </Box>
            )}
            <ImageBox />
            <ProductInfoBox handleCartClick={this.handleCartClick} />
          </Box>
        </Grommet>
      </div>
    );
  }
}

const container: CSSProperties = {};

const cartMessage: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  position: "absolute",
  justifyContent: "center",
  alignItems: "center"
};
