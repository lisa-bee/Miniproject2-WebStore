import React from "react";
import { Box, Text, RadioButtonGroup, RadioButton } from "grommet";
import { Deliver } from "grommet-icons";

interface Props {
  setRadioButton: (id: string, value: string) => void;
}

interface State {}
export default class ShippingBox extends React.Component<Props, State> {
  postNord = () => {
    const date = new Date();

    const postNord = new Date(date);
    postNord.setDate(postNord.getDate() + 1);

    return postNord.toDateString();
  };

  DHL = () => {
    const date = new Date();

    const DHL = new Date(date);
    DHL.setDate(DHL.getDate() + 3);

    return DHL.toDateString();
  };

  Schenker = () => {
    const date = new Date();

    const Schenker = new Date(date);
    Schenker.setDate(Schenker.getDate() + 5);

    return Schenker.toDateString();
  };

  render() {
    return (
      <Box pad="large" gap="large" width="large" background="light-1" style={{fontSize: "10pt"}}>
        <Box width="large" direction="row" justify="between">
          <Text size="large" alignSelf="start" weight="bold">
            Shipping
          </Text>
          <Deliver color="brand"></Deliver>
        </Box>
        <Box direction="row">
          <RadioButtonGroup gap="xlarge"
            name="deliveryOptions"
            options={[
              {
                disabled: false,
                id: "1",
                value: "49",
                label: "PostNord (1 day) + 49 SEK"
              },
              {
                disabled: false,
                id: "2",
                value: "29",
                label: "DHL (3 days) + 29 SEK"
              },
              {
                disabled: false,
                id: "3",
                value: "0",
                label: "Schenker (5 days) + 0 SEK"
              }
            ]}
            onChange={event =>
              this.props.setRadioButton(event.target.id, event.target.value)
            }
          />

          <Box style={{position: "absolute", top: "74.5rem", left: "5rem"}}>
            <Text style={{ fontSize: "9pt", lineHeight: "4rem"}}>
              Delivery on <strong>{this.postNord()}</strong>
            </Text>
            <Text style={{ fontSize: "9pt", lineHeight: "4rem"}}>
              Delivery on <strong>{this.DHL()}</strong>
            </Text>
            <Text style={{ fontSize: "9pt", lineHeight: "4rem" }}>
              Delivery on <strong>{this.Schenker()}</strong>
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}
