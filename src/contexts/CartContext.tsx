import React, { createContext } from "react";
import { Product } from "../Components/ProductComponents/AllProducts";

const defaultState: State = {
  items: [],
  addProductToCart: () => {},
  deleteProductFromCart: () => {},
  getTotalPrice: () => 0,
  getTotalQuantity: () => 0,
  removeOneProduct: () => {},
  deleteAllProductsFromCart: () => {}
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
  deleteProductFromCart: (event: any) => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number;
  removeOneProduct: (product: Product) => void;
  deleteAllProductsFromCart: (product: Product) => void;
}

export class CartProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: [],
      addProductToCart: this.addProductToCart,
      deleteProductFromCart: this.deleteProductFromCart,
      getTotalPrice: this.getTotalPrice,
      getTotalQuantity: this.getTotalQuantity,
      removeOneProduct: this.removeOneProduct,
      deleteAllProductsFromCart: this.deleteProductFromCart
    };
  }

  addProductToCart = (product: Product) => {
    const clonedItems: CartItem[] = Object.assign([], this.state.items);
    for (const item of clonedItems) {
      if (item.product.index == product.index) {
        item.quantity += 1;
        this.setState({ items: clonedItems });
        return;
      }
    }
    clonedItems.push({ quantity: 1, product: product });
    this.setState({ items: clonedItems });
  };

  removeOneProduct = (product: Product) => {
    const clonedItems: CartItem[] = Object.assign([], this.state.items);
    for (const item of clonedItems) {
      if (item.product.index == product.index) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
        clonedItems.splice(clonedItems.indexOf(item), 1);
      }
        this.setState({ items: clonedItems });
        return;
      }
    }
    this.setState({ items: clonedItems });
  };

  deleteAllProductsFromCart = (product: Product) => {
    const clonedItems: CartItem[] = Object.assign([], this.state.items);
    for (const item of clonedItems) {
      if (item.product.index == product.index) {
        item.quantity = 0;
        this.setState({ items: clonedItems });
        return;
      }
    }
  };

  deleteProductFromCart = (product: Product) => {
    const clonedItems: CartItem[] = Object.assign([], this.state.items);

    for (var i = 0; i < clonedItems.length; i++) {
      if (clonedItems[i].product.index == product.index) {
        clonedItems.splice(i, 1);
      }
    }
    this.setState({ items: clonedItems });
  };

  getTotalPrice = (): number => {
    let sum = 0;
    for (const item of this.state.items) {
      sum += item.product.price * item.quantity;
    }
    return sum;
  };

  getTotalQuantity = (): number => {
    let totalQuantity = 0;
    for (const item of this.state.items) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
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
