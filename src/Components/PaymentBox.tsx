import React from "react";
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
import { CartConsumer } from "../contexts/CartContext";
import OrderPlacedPage from "./OrderPlacedPage";

type PaymentOption = "swish" | "credit-card" | "invoice";

interface Props {
  // handlePaymentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // defaultValue: string
  phoneNumber: string;
}

interface State {
  paymentSelection: PaymentOption;
  // history: any;
}

class PaymentBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { paymentSelection: "swish" };
  }
  /*  delay = (event: any) => {
    event.preventDefault();
    setTimeout(() => {
      this.props.history.push("/orderplacedpage/");
    }, 2000);
  }; */

  /* delayPromiseSvar = (ms: number) => {
    function delay(ms: number) {
      // your code
    }
    delay(3000).then(() => alert('runs after 3 seconds'));
  } */

  kopetGickIgenom = () => {
    console.log("hej");
    /* return <OrderPlacedPage /> */
  };
  /*   const promise = this.delayPromiseSvar() 
  promise.then(this.köpetGickIgenom) */

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
            <Text>Swish number: {this.props.phoneNumber}</Text>
            {/* <input type="tel" placeholder="PhoneNumber" value={this.props.phoneNumber} /> */}

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
            <Form autoComplete="on" validate="blur">
              <FormField
                name="email"
                label="Email"
                type="text"
                required
                autoComplete="email"
              />
            </Form>
            <Text alignSelf="center" textAlign="center" size="large">
              Total <strong>{getTotalPrice()} SEK</strong> VAT & shipping
              included
            </Text>
            <Box alignSelf="center">
              <Link to="/orderplacedpage/" /* onClick={this.delay} */>
                <Button
                  type="submit"
                  alignSelf="center"
                  color="dark-1"
                  primary
                  label="COMPLETE PURCHASE"
                  /* onClick={() => this.delayPromiseSvar} */
                />
              </Link>
            </Box>
          </Box>
        )}
      </CartConsumer>
    );
  }
}

export default PaymentBox;
