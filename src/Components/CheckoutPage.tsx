import React from "react";
import { Main, Heading } from "grommet";
import CartBox from "./CartBox";
import DeliveryBox from "./DeliveryBox";
import ShippingBox from "./ShippingBox";
import PaymentBox from "./PaymentBox";
import { Product } from "./AllProducts";
import { createOrder } from "../MockedApi";
import OrderPlacedPage from "./OrderPlacedPage";

interface Props {
  product: Product;
}

interface State {
  isOrderBeingProcessed: boolean;
  orderHasBeenPlaced: boolean;
}

export default class CheckoutPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOrderBeingProcessed: false,
      orderHasBeenPlaced: false
    };
  }

  createOrder = async () => {
    this.setState({ isOrderBeingProcessed: true });
    // gather all orde info...
    const allOrderInfo = {};
    await createOrder(allOrderInfo);
    this.setState({ isOrderBeingProcessed: false, orderHasBeenPlaced: true });
  };

  render() {
    if (this.state.orderHasBeenPlaced) {
      return <OrderPlacedPage />;
    }

    return (
      <Main
        direction="column"
        align="center"
        pad="small"
        gap="small"
        flex="grow"
      >
        <Heading size="small">CHECKOUT</Heading>
        <CartBox product={this.props.product} />
        <DeliveryBox />
        <ShippingBox />
        <PaymentBox
          isOrderBeingProcessed={this.state.isOrderBeingProcessed}
          onSubmitOrder={this.createOrder}
        />
      </Main>
    );
  }
}
