import React, { CSSProperties } from "react";
import { Box, Button } from "grommet";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";
import {
  Link,
  withRouter,
  RouteComponentProps,
  useParams
} from "react-router-dom";
import ConfirmationPopup from "./ConfirmationPopup";
import { Product } from "./AllProducts";
import { StaticContext } from "react-router";
import { data } from "../products";

interface Props extends RouteComponentProps<{}, StaticContext, Product> {
  // location: any;
}

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
    this.addItemsToCart();
  };

  closeDiv = () => {
    this.setState({ isOpen: false });
  };

  addItemsToCart = () => {
    this.state.items.push("Product");
    this.forceUpdate();
  };

  private get productInfo() {
    if (!this.state.selectedProduct) {
      return <h1>PRODUKTEN FINNS INTE !!!</h1>;
    } else {
      return <ProductInfoBox product={this.state.selectedProduct!} />;
    }
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
          {this.state.isOpen && <ConfirmationPopup closeDiv={this.closeDiv} />}
          {/* <ImageBox image={this.props.location.state.image} /> */}
          {this.productInfo}
        </Box>
      </div>
    );
  }
}

const container: CSSProperties = {};
