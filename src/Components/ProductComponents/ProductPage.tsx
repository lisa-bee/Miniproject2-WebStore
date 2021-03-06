import React from "react";
import { Box } from "grommet";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";
import { RouteComponentProps } from "react-router-dom";
import ConfirmationPopup from "../ConfirmationPopup";
import { Product } from "./AllProducts";
import { StaticContext } from "react-router";
import { data } from "../../products";

interface Props extends RouteComponentProps<{}, StaticContext, Product> {}

interface State {
  selectedProduct: Product | undefined;
  isOpen: Boolean;
  items: any[];
}

export default class ProductPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { productIndex } = this.props.match.params as {
      productIndex: number;
    };

    const selectedProduct: Product | undefined = data.find(
      product => product.index == productIndex
    );

    this.state = {
      selectedProduct: selectedProduct,
      isOpen: false,
      items: []
    };
  }

  handleCartClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeDiv = () => {
    this.setState({ isOpen: false });
  };

  private get productInfo() {
    if (!this.state.selectedProduct) {
      return <h1>Sorry, this product does not exist...</h1>;
    } else {
      return (
        <ProductInfoBox
          product={this.state.selectedProduct!}
          handleCartClick={this.handleCartClick}
        />
      );
    }
  }

  render() {
    return (
      <Box
        justify="center"
        align="center"
        pad="large"
        background="light"
      >
        {this.state.isOpen && <ConfirmationPopup closeDiv={this.closeDiv} />}
        <Box background="light-2" direction="row-responsive" pad="small">
        <ImageBox image={this.state.selectedProduct!.image} />
        {this.productInfo}
        </Box>
      </Box>
    );
  }
}
