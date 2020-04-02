import React, { CSSProperties } from "react";
import { Box } from "grommet";
import ProductContainer from "./ProductContainer";
import { data } from "../products";
import ConfirmationPopup from "./ConfirmationPopup";

export type Product = {
  index: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

interface Props {}

interface State {
  allProducts: Product[];
  isOpen: boolean;
}

export default class AllProducts extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      allProducts: data,
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
      <>
        <Box
          width="100%"
          justify="center"
          align="center"
          wrap={true}
          direction="row-responsive"
          pad="medium"
        >
          {this.state.isOpen && (
            <div style={popup()}>
              <ConfirmationPopup closeDiv={this.closeDiv} />
            </div>
          )}

          {this.state.allProducts.map(product => {
            return (
              <ProductContainer
                product={product}
                key={product.index}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                handleCartClick={this.handleCartClick}
              />
            );
          })}
        </Box>
      </>
    );
  }
}

const popup = (): CSSProperties => ({
  height: "100%",
  display: "flex",
  zIndex: 2,
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  right: 1,
  left: 1
});
