import React, { CSSProperties } from "react";
import { Box, Button } from "grommet";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";
import { Link } from "react-router-dom";

export type Item = {
  name: string,
  price: number,
  image: string,
}
interface Props {
 
}

interface State {
  isOpen: Boolean;
  items: any[];
}



export default class ProductPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
      items: []

    };
  }

  handleCartClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.addItemsToCart();

  };

  closeDiv = () => {
    this.setState({ isOpen: false });
  };

  addItemsToCart = () => {
    this.state.items.push("Product");
    this.forceUpdate();
  }

 
  render() {
    return (
      <div style={container}>
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
