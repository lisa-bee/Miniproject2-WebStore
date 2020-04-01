import React from "react";
import { Main, Heading } from "grommet";
import CartBox from "./CartBox";
import DeliveryBox from "./DeliveryBox";
import ShippingBox from "./ShippingBox";
import PaymentBox from "./PaymentBox";
import { Product } from "./AllProducts";



interface Props {
  product: Product;
  // history: any
}

interface State {
  givenName: string;
  familyName: string;
  email: string;
  tel: string;
  streetAddress: string;
  postalCode: string;
  city: string;
}

export default class CheckoutPage extends React.Component<Props, State> {
  state = {
    givenName: "",
    familyName: "",
    email: "",
    tel: "",
    streetAddress: "",
    postalCode: "",
    city: ""
  };

  handleChange = (name: string, value: string) => {
    this.setState({ ...this.state, [name]: value });
  };

  // handlePaymentChange =>

  render() {
    console.log("checkout state", this.state);
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
        {/* <DeliveryBox onChange={(deliveryData) => this.setState({ deliveryData })}/> */}
        <ShippingBox />
        <PaymentBox phoneNumber={this.state.tel} />
        {/* <PaymentBox deliveryData={this.state.deliveryData} /> */}

        }
      </Main>
    );
    
  }
}
