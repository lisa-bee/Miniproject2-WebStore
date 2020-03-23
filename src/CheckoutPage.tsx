import React from "react";
import { Grommet, Main, Heading } from "grommet";
import { grommet } from "grommet/themes";
import CartBox from "./CartBox";
import DeliveryBox from "./DeliveryBox";
import ShippingBox from "./ShippingBox";
import PaymentBox from "./PaymentBox";

export default class CheckoutPage extends React.Component<{}, {}> {
  render() {
    return (
      <Grommet theme={grommet}>
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
      </Grommet>
    );
  }
}
