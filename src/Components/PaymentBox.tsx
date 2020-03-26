import React from "react";
import { Box, Text, RadioButtonGroup, Button } from "grommet";
import { Money } from "grommet-icons";

export default class PaymentBox extends React.Component<{}, {}> {
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
                label: "Klarna"
              }
            ]}
          />
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
