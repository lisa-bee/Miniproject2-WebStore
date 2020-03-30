import React from "react";
import { Box, Text, RadioButtonGroup, Button } from "grommet";
import { Deliver } from "grommet-icons";

interface Props {
  // getDate: any
  // componentDidMount: any
}

interface State {
  date: ""
  // getDate: any
  // state = {date: new Date()}

}

export default class ShippingBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };

  render() {
    return (
      const { date } = this.state;
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

          <Text>
            
          </Text>

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
