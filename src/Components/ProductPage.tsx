import React, { CSSProperties } from "react";
import { Box, Button } from "grommet";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import ConfirmationPopup from "./ConfirmationPopup";

/* export type Item = {
  name: string,
  price: number,
  image: string,
} */
interface Props extends RouteComponentProps {
  // location: any;
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
  };

  render() {
    console.log(this.props.location.state);
    return (
      <div style={container}>
        <Box
          direction="row-responsive"
          justify="center"
          align="center"
          pad="large"
          background="light"
        >
          {this.state.isOpen && <ConfirmationPopup closeDiv={this.closeDiv} />}
          <ImageBox />
          <ProductInfoBox
            // title={this.props.location.state.title}
            handleCartClick={this.handleCartClick}
          />
        </Box>
      </div>
    );
  }
}

const container: CSSProperties = {};
