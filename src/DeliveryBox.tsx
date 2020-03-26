import React from "react";
import { Box, Text, Form, FormField, Button } from "grommet";
import { Home } from "grommet-icons";

export default class DeliveryBox extends React.Component<{}, {}> {
  render() {
    return (
        <Box pad="xlarge" gap="large" width="large" background="light-1">
          <Box direction="row" width="large" justify="between">
            <Text size="large" weight="bold">
              Delivery
            </Text>
            <Home color="brand"></Home>
          </Box>
          <Form>
            <FormField
              name="firstName"
              label="First Name"
              placeholder="Type your first name here"
              required validate={{ regexp: /^[a-z]/i }}
            />
            <FormField
              name="lastName"
              label="Last Name"
              placeholder="Type your last name here"
            />
            <FormField
              name="email"
              label="Email"
              placeholder="Type your email here"
            />
            <FormField
              name="phoneNumber"
              label="Phone Number"
              placeholder="Type your phone number here"
            />
            <FormField
              name="address"
              label="Address"
              placeholder="Type your address here"
            />
            <FormField
              name="city"
              label="City"
              placeholder="Type your city here"
            />
            <FormField
              name="postalCode"
              label="Postal Code"
              placeholder="Type your postal code here"
            />
          </Form>
          <Button
            type="submit"
            color="dark-1"
            alignSelf="center"
            primary
            label="CONFIRM & CONTINUE"
          />
        </Box>
    );
  }
}
