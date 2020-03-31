import React, { createContext } from "react";
import { Product } from "../Components/AllProducts";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

const defaultState: State = {
  items: [],
  addProductToCart: () => {},
  deleteProductFromCart: () => {},
  getTotalPrice: () => 0
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
  getTotalPrice: () => number;
}

export class CartProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: [],
      addProductToCart: this.addProductToCart,
      deleteProductFromCart: this.deleteProductFromCart,
      getTotalPrice: this.getTotalPrice
    };
  }

  addProductToCart = (product: Product) => {
    // console.log(product);
    const clonedItems: CartItem[] = Object.assign([], this.state.items)
    for (const item of clonedItems) {
      if (item.product.index == product.index) {
        item.quantity += 1
        this.setState({ items: clonedItems });
        return 
      }
    }
    // Finns produkten i items, inkrementera quantity med +1, annars lägg till produkten.
    clonedItems.push({ quantity: 1, product: product })
    this.setState({ items: clonedItems });

    /* save to state */
    // Add a new cartItem or just update the quantity (finns product.id i this.state.items[].id)
  };

  deleteProductFromCart = (product: Product) => {
    /* save to state */
    // delete the cartItem or just update the quantity
  };

  getTotalPrice = ():number => {
    let sum = 0
    for (const item of this.state.items) {
      sum += item.product.price * item.quantity
    }
    return sum
  }
  
  
  render() {
    // console.log(this.state.items[4].product);
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export const CartConsumer = CartContext.Consumer;
