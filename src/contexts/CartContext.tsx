import React, { createContext } from "react";
import { Product } from "../Components/AllProducts";

const defaultState: State = {
  items: [],
  addProductToCart: () => {},
  deleteProductFromCart: () => {}
};

const CartContext = createContext<State>(defaultState);

interface CartItem {
  product: Product;
  quantity: number;
}

interface Props {}
interface State {
  items: CartItem[];
  addProductToCart: (product: Product) => void;
  deleteProductFromCart: (product: Product) => void;
}

export class CartProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: [],
      addProductToCart: this.addProductToCart,
      deleteProductFromCart: this.deleteProductFromCart
    };
  }

  addProductToCart = (product: Product) => {
    console.log(product);

    // Finns produkten i items, inkrementera quantity med +1, annars lägg till produkten.

    this.setState({
      items: [...this.state.items, { quantity: 1, product: product }]
    });

    /* save to state */
    // Add a new cartItem or just update the quantity (finns product.id i this.state.items[].id)
  };

  deleteProductFromCart = (product: Product) => {
    /* save to state */
    // delete the cartItem or just update the quantity
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export const CartConsumer = CartContext.Consumer;
