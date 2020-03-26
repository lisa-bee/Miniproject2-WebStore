import React from "react";
import { Box, Text, RadioButtonGroup, Button } from "grommet";
import { Deliver } from "grommet-icons";

export default class ShippingBox extends React.Component<{}, {}> {
  render() {
    return (
        <Box pad="xlarge" gap="large" width="large" background="light-1">
          <Box width="large" direction="row" justify="between">
            <Text size="large" alignSelf="start" weight="bold">
              Shipping
            </Text>
            <Deliver color="brand"></Deliver>
          </Box>
          <RadioButtonGroup
            name="deliveryOptions"
            options={[
              {
                disabled: false,
                id: "one",
                value: "1",
                label: "PostNord (6-7 years) + 0 SEK"
              },
              {
                disabled: false,
                id: "two",
                value: "2",
                label: "DHL (2-3 days) + 49 SEK"
              },
              {
                disabled: false,
                id: "three",
                value: "3",
                label: "Schenker (3-5 days) + 29 SEK"
              }
            ]}
          />
          <Button
            type="submit"
            alignSelf="center"
            primary
            color="dark-1"
            label="CONFIRM & CONTINUE"
          />
        </Box>
    );
  }
}