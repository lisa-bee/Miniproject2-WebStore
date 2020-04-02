import React from "react";
import { Main, Heading } from "grommet";
import CartBox from "./CartBox";
import DeliveryBox from "./DeliveryBox";
import ShippingBox from "./ShippingBox";
import PaymentBox from "./PaymentComponents/PaymentBox";
import { Product } from "./AllProducts";
import SwishBox from "./PaymentComponents/SwishBox";
import CreditCardBox from "./PaymentComponents/CreditCardBox";
import InvoiceBox from "./PaymentComponents/InvoiceBox";



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
  id: string;
  value: string;
}

export default class CheckoutPage extends React.Component<Props, State> {
  state = {
    givenName: "",
    familyName: "",
    email: "",
    tel: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    id: "",
    value: ""
  };

  handleChange = (name: string, value: string) => {
    this.setState({ ...this.state, [name]: value });
  };

  // handlePaymentChange = (id: string, value: string) => {
  //   this.setState({...this.state, [id]: value})
  

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
        
        {/* <SwishBox phoneNumber={this.state.tel} /> */}
        {/* <PaymentBox deliveryData={this.state.deliveryData} /> */}

      </Main>
        
    );
    
  }
}
