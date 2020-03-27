import React, { CSSProperties } from "react";
import { Box, Button } from "grommet";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import ConfirmationPopup from "./ConfirmationPopup";
import { Product } from "./AllProducts";
import { StaticContext } from "react-router";

interface Props extends RouteComponentProps<{}, StaticContext, Product> {
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
          <ImageBox image={this.props.location.state.image} />
          <ProductInfoBox
            title={this.props.location.state.title}
            price={this.props.location.state.price}
            description={this.props.location.state.description}
            handleCartClick={this.handleCartClick}
          />
        </Box>
      </div>
    );
  }
}

const container: CSSProperties = {};
