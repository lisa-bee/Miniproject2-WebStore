import React from "react";
import { Main, Heading, Box, Form } from "grommet";
import CartBox from "./CartBox";
import DeliveryBox from "./DeliveryBox";
import ShippingBox from "./ShippingBox";
import PaymentBox from "./PaymentComponents/PaymentBox";
import { Product } from "./AllProducts";
import { createOrder } from "../MockedApi";
import OrderPlacedPage from "./OrderPlacedPage";
import { CartConsumer } from "../contexts/CartContext";
import { ShippingOption, shippingAlternatives } from "../mockedShipping";

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
  selectedshipping: ShippingOption;
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
      orderHasBeenPlaced: false,
      selectedshipping: shippingAlternatives[0]
    };
  }

  handleChange = (name: string, value: string) => {
    this.setState({ ...this.state, [name]: value });
  };

  getDeliveryOption = (shipping: ShippingOption) => {
    this.setState({ selectedshipping: shipping });
  };

  createOrder = async () => {
    this.setState({ isOrderBeingProcessed: true });
    // gather all orde info...
    const allOrderInfo = this.state;
    await createOrder(allOrderInfo);
    this.setState({ isOrderBeingProcessed: false, orderHasBeenPlaced: true });
    console.log(allOrderInfo);
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
        <Box>
          <Form autoComplete="on" validate="submit" onSubmit={this.createOrder}>
            <Heading textAlign="center" size="small">CHECKOUT</Heading>
            <CartBox product={this.props.product} />
            <DeliveryBox handleChange={this.handleChange} />
            <ShippingBox
              selectedshipping={this.state.selectedshipping}
              getDeliveryOption={this.getDeliveryOption}
            />
            <PaymentBox
              isOrderBeingProcessed={this.state.isOrderBeingProcessed}
              onSubmitOrder={this.createOrder}
              phoneNumber={this.state.tel}
              selectedshipping={this.state.selectedshipping}
            />
          </Form>
        </Box>
      </Main>
    );
  }
}
