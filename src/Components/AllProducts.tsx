import React from "react";
import { Grommet, Box } from "grommet";
import { grommet } from "grommet/themes";
import ProductContainer from "./ProductContainer";
import { data } from "../products";

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
}

export default class AllProducts extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      allProducts: data
    };
  }

  render() {
    return (
      <Grommet theme={grommet}>
        <Box
          width="100%"
          justify="center"
          align="center"
          wrap={true}
          direction="row-responsive"
          pad="medium"
        >
          {this.state.allProducts.map(product => {
            return (
              <ProductContainer
                key={product.index}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            );
          })}
        </Box>
      </Grommet>
    );
  }
}
