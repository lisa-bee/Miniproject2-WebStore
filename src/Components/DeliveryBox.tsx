import React from "react";
import { Box, Text, Form, FormField } from "grommet";
import { Home } from "grommet-icons";

interface Props {}

interface State {}
export default class DeliveryBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Box pad="large" gap="large" width="large" background="light-1">
        <Box direction="row" width="large" justify="between">
          <Text size="large" weight="bold">
            Delivery
          </Text>
          <Home color="brand"></Home>
        </Box>

        <Form validate="blur" autoComplete="on">
          <FormField
            name="given-name"
            label="First Name"
            // placeholder="First Name"
            type="text"
            required
            validate={{ message: "only letters" }}
            // value=""
          />
          <FormField
            name="family-name"
            label="Last Name"
            // placeholder="Last Name"
            type="text"
            required
            validate={{ message: "only letters" }}
            // value=""
          />
          <FormField
            name="email"
            label="Email"
            // placeholder="Type your email here"
            type="email"
            required
            validate={{ message: "@" }}
            // value=""
          />
          <FormField
            name="tel"
            label="Phone Number"
            // placeholder="Type your phone number here"
            type="tel"
            required
            validate={{ regexp: /^[0-9]{10}$/, message: "10 digits" }}
            // value=""
          />
          <FormField
            name="street-address"
            label="Address"
            // placeholder="Type your address here"
            type="text"
            validate={{ message: "Ex: Storgatan 1" }}
            required
            // value=""
          />
            <FormField
              name="postal-code"
              label="Postal Code"
              // placeholder="Type your postal code here"
              type=""
              required
              validate={{ regexp: /^[0-9]{5}$/, message: "5 digits" }}
              // value=""
            />
          <FormField
            name="address-level2"
            label="City"
            // placeholder="Type your city here"
            type="text"
            required
            validate={{ message: "only letters" }}
            // value=""
          />
        </Form>
      </Box>
    );
  }
}
