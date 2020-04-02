import React from "react";
import { Box, Text, RadioButtonGroup, RadioButton } from "grommet";
import { Deliver, Target } from "grommet-icons";

interface Props {}

interface State {
  /*   postNord: number
  DHL: number
  Schenker: number */
}

export default class ShippingBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    /* this.state = {
      postNord: 49,
      DHL: 29,
      Schenker: 0
    } */
  }

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

  setRadioButton = (value: string) => {
    this.setState({ ...this.state, value });
    if (value === "1") {
      return console.log(this.postNord());
    } else if (value === "2") {
      return console.log(this.DHL());
    } else if (value === "3") {
      return console.log(this.Schenker());
    }
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
        {/* <Box gap="medium">
          <RadioButton
            name="portNord"
            value="postNord"
            label="PostNord (1 day) + 49 SEK"
            onChange={event => this.setRadioButton(event.target.value)}
          />
          <Text style={{ fontSize: "12pt", paddingLeft: "1.9rem" }}>
            Receive your order on <strong>{this.postNord()}</strong>
          </Text>
          <RadioButton
            name="DHL"
            label="DHL (3 days) + 29 SEK"
          />
          <Text style={{ fontSize: "12pt", paddingLeft: "1.9rem" }}>
            Receive your order on <strong>{this.DHL()}</strong>
          </Text>
          <RadioButton
            name="Schenker"
            label="Schenker (5 days) + 0 SEK"
          />
          <Text style={{ fontSize: "12pt", paddingLeft: "1.9rem" }}>
            Receive your order on <strong>{this.Schenker()}</strong>
          </Text>
        </Box> */}
        <RadioButtonGroup
          name="deliveryOptions"
          // onChange= "target": { value } }) => {...}
          options={[
            {
              disabled: false,
              id: "one",
              value: "1",
              label: "PostNord (1 day) + 49 SEK"
            },
            {
              disabled: false,
              id: "two",
              value: "2",
              label: "DHL (3 days) + 29 SEK"
            },
            {
              disabled: false,
              id: "three",
              value: "3",
              label: "Schenker (5 days) + 0 SEK"
            }
          ]}
          onChange={event => this.setRadioButton(event.target.value)}
        />
      </Box>
    );
  }
}
