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

type PaymentOption = 'swish' | 'credit-card' | 'invoice';

interface Props {
  // handlePaymentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // defaultValue: string
  phoneNumber: string
}

interface State {
  paymentSelection: PaymentOption;
  // history: any;
}

class PaymentBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { paymentSelection: 'swish' }
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
  
  }
/*   const promise = this.delayPromiseSvar() 
  promise.then(this.köpetGickIgenom) */
     
  
  render() {
    console.log("props number", this.props.phoneNumber);
    
    return (
      <CartConsumer>
        {({ getTotalPrice }) => (
        <Box pad="xlarge" gap="large" width="large" background="light-1">
          <Box direction="row" justify="between" width="large">
            <Text size="large" alignSelf="start" weight="bold">
              Payment
            </Text>
            <Money color="brand"></Money>
          </Box>
          <RadioButtonGroup
            name="paymentOptions"
            value={this.state.paymentSelection}
            onChange={(event) => this.setState({ paymentSelection: event.target.value as PaymentOption })}
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

          <Form autoComplete="on" validate="blur">
            {/* <FormField
              value={this.props.phoneNumber}
              name="tel"
              label="Phone Number"
              type="number"
              required
              // validate={{ regexp: /^[0-9]{10}$/, message: "10 digits" }}
            /> */}
            <input type="number" placeholder="PhoneNumber" value={this.props.phoneNumber} />
            <Button
              icon={<Edit />}
              label="Edit"
              // onClick={() => {}}
            />
            </Form>
            <Form autoComplete="on" validate="blur">
              <FormField
                name="tel"
                label="Phone Number"
                type="tel"
                required
                validate={{ regexp: /^[0-9]{10}$/, message: "10 digits" }}
                // value=""
              />
              <Button
                icon={<Edit />}
                label="Edit"
                // onClick={() => {}}
              />
              {/* <Button
                type="submit"
                alignSelf="center"
                color="dark-1"
                primary
                label="COMPLETE PURCHASE"
              /> */}
            </Form>
            <Form autoComplete="on" validate="blur">
              <FormField
                name="cc-number"
                label="Card Number"
                type="tel"
                required
                validate={{ regexp: /^[0-9]{16}$/, message: "16 digits" }}
                // value=""
              />
              <Select
                placeholder="Month"
                name="cc-exp-month"
                options={[
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12"
                ]}
                // value={value}
                // onChange={({ option }) => setValue(option)}
              />
              <Select
                placeholder="Year"
                name="cc-exp-year"
                options={[
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024",
                  "2025",
                  "2026",
                  "2027",
                  "2028"
                ]}
                // value={value}
                // onChange={({ option }) => setValue(option)}
              />
              <FormField
                name="cc-csc"
                label="CVC2"
                type="tel"
                required
                validate={{ regexp: /^[0-9]{3}$/, message: "3 digits" }}
                // value=""
              />
              <FormField
                name="cc-name"
                label="Cardholder Name"
                type="text"
                required
                // validate={{ message: 'only letters' }}
                // value=""
              />
              {/* <Button
                type="submit"
                alignSelf="center"
                color="dark-1"
                primary
                label="COMPLETE PURCHASE"
              /> */}
          </Form>
          <Form autoComplete="on" validate="blur">
            <FormField
              name="email"
              label="Email"
              type="text"
              required
              // value=""
            />
          </Form>
          <Text
          alignSelf="center"
          textAlign="center"
          size="large"
          >
            Total <strong>{getTotalPrice()} SEK</strong> VAT & shipping included
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
