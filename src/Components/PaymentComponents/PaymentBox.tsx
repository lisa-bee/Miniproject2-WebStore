import React from "react";
import { Box, Text, RadioButtonGroup, Button } from "grommet";
import { Money } from "grommet-icons";
import { CartConsumer } from "../../contexts/CartContext";
import SwishBox from "./SwishBox";
import CreditCardBox from "./CreditCardBox";
import InvoiceBox from "./InvoiceBox";
import ClipLoader from "react-spinners/ClipLoader";
import { ShippingOption } from "../../mockedShipping";

type PaymentOption = "swish" | "credit-card" | "invoice";

interface Props {
  isOrderBeingProcessed: boolean;
  onSubmitOrder: () => void;
  phoneNumber: string;
  selectedshipping: ShippingOption;
}

interface State {
  paymentSelection: PaymentOption;
}

class PaymentBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paymentSelection: "swish"
    };
  }

  render() {
    return (
      <CartConsumer>
        {({ getTotalPrice }) => (
          <Box pad="large" gap="large" width="large" background="light-1">
            <Box direction="row" justify="between" width="large">
              <Text size="large" alignSelf="start" weight="bold">
                Payment
              </Text>
              <Money color="brand"></Money>
            </Box>
            <RadioButtonGroup
              name="paymentOptions"
              value={this.state.paymentSelection}
              onChange={event =>
                this.setState({
                  paymentSelection: event.target.value as PaymentOption
                })
              }
              options={[
                {
                  disabled: false,
                  id: "swish",
                  value: "swish",
                  label: "Swish"
                },
                {
                  disabled: false,
                  id: "credit-card",
                  value: "credit-card",
                  label: "Mastercard/VISA"
                },
                {
                  disabled: false,
                  id: "invoice",
                  value: "invoice",
                  label: "Klarna Invoice"
                }
              ]}
            />

            {this.state.paymentSelection === "swish" ? (
              <SwishBox phoneNumber={this.props.phoneNumber} />
            ) : this.state.paymentSelection === "invoice" ? (
              <InvoiceBox />
            ) : (
              <CreditCardBox />
            )}
            <Box />

            <Text alignSelf="center" textAlign="center" size="large">
              Total{" "}
              <strong>
                {getTotalPrice() + Number(this.props.selectedshipping.price)}{" "}
                SEK
              </strong>{" "}
              VAT & shipping included
            </Text>
            <Box alignSelf="center" align="center">
              {!this.props.isOrderBeingProcessed && (
                <Button
                  type="submit"
                  alignSelf="center"
                  color="dark-1"
                  primary
                  label="COMPLETE PURCHASE"
                />
              )}
              {this.props.isOrderBeingProcessed && (
                <>
                  <p>Please wait, your order is being placed..</p>
                  <ClipLoader
                    size={15}
                    color={"#123abc"}
                    loading={this.props.isOrderBeingProcessed}
                  />
                </>
              )}
            </Box>
          </Box>
        )}
      </CartConsumer>
    );
  }
}

export default PaymentBox;
