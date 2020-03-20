import React from "react";
import { Grommet, Main, Heading } from "grommet";
import { grommet } from "grommet/themes"
import DeliveryBox from "./DeliveryBox"
import ShippingBox from "./ShippingBox"
import PaymentBox from "./PaymentBox"



export default class CheckoutPage extends React.Component<{}, {}> {
  render () {
    return (
      <Grommet theme={grommet}>
        <Main
          direction="column"
          // justify="center"
          align="center"
          // background="light-5"
          pad="small"
          gap="small"
          flex="grow"
          // fill="vertical"
          // height="medium"
        >
          <Heading size="small">CHECKOUT</Heading>
          <DeliveryBox />
          <ShippingBox />
          <PaymentBox />
        </Main>
      </Grommet>
    )
  }
}