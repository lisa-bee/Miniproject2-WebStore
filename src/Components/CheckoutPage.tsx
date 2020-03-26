import React from "react";
import { Main, Heading } from "grommet";
import CartBox from "./CartBox";
import DeliveryBox from "./DeliveryBox";
import ShippingBox from "./ShippingBox";
import PaymentBox from "./PaymentBox";

interface Props {}

interface State {}

export default class CheckoutPage extends React.Component<Props, State> {
  render() {
    return (
      <Main
        direction="column"
        align="center"
        pad="small"
        gap="small"
        flex="grow"
      >
        <Heading size="small">CHECKOUT</Heading>
        <CartBox />
        <DeliveryBox />
        <ShippingBox />
        <PaymentBox />
      </Main>
    );
  }
}
