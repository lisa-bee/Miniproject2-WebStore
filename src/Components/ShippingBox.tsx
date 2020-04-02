import React from "react";
import { Box, Text, RadioButton } from "grommet";
import { Deliver } from "grommet-icons";
import { shippingAlternatives, ShippingOption } from "../mockedShipping";

interface Props {
  setRadioButton: (shipping: ShippingOption) => void;
  selectedshipping: ShippingOption;
}

interface State {}
export default class ShippingBox extends React.Component<Props, State> {


  getDeliveryDate = () => {
    const date = new Date();

    const postNord = new Date(date);
    postNord.setDate(postNord.getDate() + this.props.selectedshipping.deliveryTime);

    return postNord.toDateString();
  };


  render() {
    return (
      <Box
        pad="large"
        gap="large"
        width="large"
        background="light-1"
      >
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
                label={shipping.label}
                name={shipping.label}
                checked={shipping.id == this.props.selectedshipping.id}
                onChange={() => this.props.setRadioButton(shipping)}
              ></RadioButton>
              {shipping.id == this.props.selectedshipping.id && (
                <Text style={{ fontSize: "10pt", marginLeft: "2.35rem"}}>Delivery on <strong>{this.getDeliveryDate()}</strong></Text>
              )}
            </>
          ))}

        </Box>
      </Box>
    );
  }
}

{/* <Box style={{ position: "absolute", top: "74.5rem", left: "5rem" }}>
  <Text style={{ fontSize: "9pt", lineHeight: "4rem" }}>
    Delivery on <strong>{this.postNord()}</strong>
  </Text>
  <Text style={{ fontSize: "9pt", lineHeight: "4rem" }}>
    Delivery on <strong>{this.DHL()}</strong>
  </Text>
  <Text style={{ fontSize: "9pt", lineHeight: "4rem" }}>
    Delivery on <strong>{this.Schenker()}</strong>
  </Text> */}
{/* </Box> */}