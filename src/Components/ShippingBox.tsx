import React from "react";
import { Box, Text, RadioButtonGroup } from "grommet";
import { Deliver } from "grommet-icons";


interface Props {}

interface State {}

export default class ShippingBox extends React.Component<Props, State> {
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
            // onChange= "target": { value } }) => {...}
            options={[
              {
                disabled: false,
                id: "one",
                value: "1",
                label: "PostNord (1 day) + 0 SEK"
              },
              {
                disabled: false,
                id: "two",
                value: "2",
                label: "DHL (2 days) + 49 SEK"
              },
              {
                disabled: false,
                id: "three",
                value: "3",
                label: "Schenker (3 days) + 29 SEK"
              }
            ]}
          />
          {/* <Button
              type="submit"
              alignSelf="center"
              primary
              color="dark-1"
              label="CONFIRM & CONTINUE"
            /> */}
        </Box>
    );
  }
}
