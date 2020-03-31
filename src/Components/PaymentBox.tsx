import React from "react";
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

interface Props {
  // handlePaymentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // defaultValue: string
}

interface State {}
class PaymentBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Box pad="xlarge" gap="large" width="large" background="light-1">
        <Box direction="row" justify="between" width="large">
          <Text size="large" alignSelf="start" weight="bold">
            Payment
          </Text>
          <Money color="brand"></Money>
        </Box>
        <RadioButtonGroup
          name="paymentOptions"
          value="1"
          options={[
            {
              disabled: false,
              id: "pay1",
              value: "1",
              label: "Swish"
            },
            {
              disabled: false,
              id: "pay2",
              value: "2",
              label: "Mastercard/VISA"
            },
            {
              disabled: false,
              id: "pay3",
              value: "3",
              label: "Klarna Invoice"
            }
          ]}
        />

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
        <Button
          type="submit"
          alignSelf="center"
          color="dark-1"
          primary
          label="COMPLETE PURCHASE"
        />
      </Box>
    );
  }
}

export default PaymentBox;
