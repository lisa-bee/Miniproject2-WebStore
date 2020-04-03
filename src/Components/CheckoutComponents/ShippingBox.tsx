import React from "react";
import { Box, Text, RadioButton } from "grommet";
import { Deliver } from "grommet-icons";
import { shippingAlternatives, ShippingOption } from "../../mockedShipping";

interface Props {
  getDeliveryOption: (shipping: ShippingOption) => void;
  selectedshipping: ShippingOption;
}

interface State {}
export default class ShippingBox extends React.Component<Props, State> {
  getDeliveryDate = () => {
    const date = new Date();

    const delivery = new Date(date);
    delivery.setDate(
      delivery.getDate() + this.props.selectedshipping.deliveryTime
    );

    return delivery.toDateString();
  };

  render() {
    return (
      <Box pad="large" gap="large" width="large" background="light-1">
        <Box width="large" direction="row" justify="between">
          <Text size="large" alignSelf="start" weight="bold">
            Shipping
          </Text>
          <Deliver color="brand"></Deliver>
        </Box>
        <Box gap="small" direction="column">
          {shippingAlternatives.map(shipping => (
            <>
              <RadioButton
                key={shipping.id}
                label={shipping.label}
                name={shipping.label}
                checked={shipping.id == this.props.selectedshipping.id}
                onChange={() => this.props.getDeliveryOption(shipping)}
              ></RadioButton>
              {shipping.id == this.props.selectedshipping.id && (
                <Text style={{ fontSize: "11pt", marginLeft: "2.35rem" }}>
                  Delivery on <strong>{this.getDeliveryDate()}</strong>
                </Text>
              )}
            </>
          ))}
        </Box>
      </Box>
    );
  }
}
