import React from "react";
import { Main, Heading, Box } from "grommet";
import CartBox from "./CartBox";
import DeliveryBox from "./DeliveryBox";
import ShippingBox from "./ShippingBox";
import PaymentBox from "./PaymentBox";
import { Product } from "./AllProducts";
import { createOrder } from "../MockedApi";
import OrderPlacedPage from "./OrderPlacedPage";
import { CartConsumer } from "../contexts/CartContext";

interface Props {
  product: Product;
}

interface State {
  givenName: string;
  familyName: string;
  email: string;
  tel: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  isOrderBeingProcessed: boolean;
  orderHasBeenPlaced: boolean;
}

export default class CheckoutPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      givenName: "",
      familyName: "",
      email: "",
      tel: "",
      streetAddress: "",
      postalCode: "",
      city: "",
      isOrderBeingProcessed: false,
      orderHasBeenPlaced: false
    };
  }

  handleChange = (name: string, value: string) => {
    this.setState({ ...this.state, [name]: value });
  };

  createOrder = async () => {
    this.setState({ isOrderBeingProcessed: true });
    // gather all orde info...
    const allOrderInfo = {};
    await createOrder(allOrderInfo);
    this.setState({ isOrderBeingProcessed: false, orderHasBeenPlaced: true });
  };

  render() {
    if (this.state.orderHasBeenPlaced) {
      return (
        <Box>
          <CartConsumer>
            {({ items, deleteAllProductsFromCart }) =>
              items.map(product => {
                return deleteAllProductsFromCart(product.product);
              })
            }
          </CartConsumer>
          <OrderPlacedPage />;
        </Box>
      );
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
        <DeliveryBox handleChange={this.handleChange} />
        <ShippingBox />
        <PaymentBox
          isOrderBeingProcessed={this.state.isOrderBeingProcessed}
          onSubmitOrder={this.createOrder}
          phoneNumber={this.state.tel}
        />
      </Main>
    );
  }
}
