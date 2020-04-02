import React, { ReactComponentElement } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  RadioButtonGroup,
  Button,
  Form,
  FormField,
  Select
} from "grommet";
import { Money, Edit } from "grommet-icons";
import { CartConsumer } from "../../contexts/CartContext";
import SwishBox from "./SwishBox";
import CreditCardBox from "./CreditCardBox";
import InvoiceBox from "./InvoiceBox";
import ClipLoader from "react-spinners/ClipLoader";

type PaymentOption = "swish" | "credit-card" | "invoice";

interface Props {
  isOrderBeingProcessed: boolean;
  onSubmitOrder: () => void;
  phoneNumber: string;
  // handlePaymentChange: (id: string, value: string) => void;
}

interface State {
  paymentSelection: PaymentOption;
}

class PaymentBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { paymentSelection: "swish" };
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
                  label: "Swish",
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

              {/* {this.renderPaymentform}

                                      {
                                        { switch() {this.renderPaymentForm} {
                                          case "invoice":
                                            return (<InvoiceBox />)
                                          case "credit-card":
                                            return (<CreditCardBox />)
                                          default
                                          return ((<SwishBox phoneNumber={this.state.tel} />))
                                  
                                    }}
                                  
                                    } */}

                                                    {/* () {
                                if(this.state.paymentSelection === "credit-card") {
                                  return (
                                     <CreditCardBox />
                                  );
                                } else {
                                  return (
                                      <button onClick={this.handleSave}>
                                        Save
                                      </button>
                                  );
    }
  } */}
             
            {/* <SwishBox />
            <CreditCardBox />
            <InvoiceBox /> */}

            {/* <input type="tel" placeholder="PhoneNumber" value={this.props.phoneNumber} /> */}
            {/* {this.state.paymentSelection === "swish" ? (
              <Text>Swish number: <strong>{this.props.phoneNumber}</strong></Text>
            ) : (
              <Form autoComplete="on" validate="blur">
                <FormField
                  name="cardnumber"
                  autoComplete="cc-number"
                  label="Card Number"
                  type="tel"
                  required
                  validate={{ regexp: /^[0-9]{16}$/, message: "16 digits" }}
                />
                <FormField
                  name="ccmonth"
                  autoComplete="cc-exp-month"
                  label="Expiry Month"
                  type="tel"
                  required
                  validate={{ regexp: /^[0-9]{2}$/, message: "2 digits" }}
                />
                <FormField
                  name="ccyear"
                  autoComplete="cc-exp-year"
                  label="Expiry Year"
                  type="tel"
                  required
                  validate={{ regexp: /^[0-9]{2}$/, message: "2 digits" }}
                />
                <FormField
                  name="cvc"
                  autoComplete="cc-csc"
                  label="CVC2"
                  type="tel"
                  required
                  validate={{ regexp: /^[0-9]{3}$/, message: "3 digits" }}
                />
                <FormField
                  name="ccname"
                  autoComplete="cc-name"
                  label="Cardholder Name"
                  type="text"
                  required
                />
              </Form>
            )}

            <Form autoComplete="on" validate="blur">
              <FormField
                name="email"
                label="Email"
                type="text"
                required
                autoComplete="email"
              />
            </Form> */}
            <Text alignSelf="center" textAlign="center" size="large">
              Total <strong>{getTotalPrice()} SEK</strong> VAT & shipping
              included
            </Text>
            <Box alignSelf="center" align="center">
              {!this.props.isOrderBeingProcessed && (
                <Button
                  type="submit"
                  alignSelf="center"
                  color="dark-1"
                  primary
                  label="COMPLETE PURCHASE"
                  onClick={this.props.onSubmitOrder}
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



