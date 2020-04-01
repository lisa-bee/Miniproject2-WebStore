import React from "react";
import { Box, Text, Form, FormField } from "grommet";
import { Home } from "grommet-icons"; 

// type DeliveryData = {
//   givenName: string
//   familyName: string
//   email: string
//   tel: number
//   streetAddress: string
//   postalCode: number
//   city: string
// }

interface Props {
  // deliveryData: {}
  // onChange:() => this.state.deliveryData
  handleChange: (name: string, value: string) => void
}

interface State {
  deliveryData: {}
}
export default class DeliveryBox extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //     this.state = {
  //       deliveryData: {}
  //     }
  //   }
      // this.state = { given-name: "", family-name: "", email: '' };
      // deliveryData: this.saveDeliveryData
    // }

  // saveDeliveryData = (deliveryData: DeliveryData) => {
  //   this.setState({ deliveryData });
  // }

//   handleChange = (deliveryData: any) => {
//     this.setState({ deliveryData });
//  };

  render() {
    return (
      <Box pad="xlarge" gap="large" width="large" background="light-1">
        <Box direction="row" width="large" justify="between">
          <Text size="large" weight="bold">
            Delivery
          </Text>
          <Home color="brand"></Home>
        </Box>

        <Form 
          // name="deliveryData"
          validate="blur"
          autoComplete="on"
          // onChange={handleChange}
          // onChange={(event: any) => this.setState({deliveryData: event.target.value})}
          // onChange={(event: any) => {console.log(event)}}
          // onChange={(event) => this.setState({ deliveryData: event.target.value as DeliveryData })}
          >
            {/* {console.log(this.state.deliveryData)} */}
          <FormField
            // id="firstName"
            name="given-name"
            label="First Name"  
            // placeholder="First Name"
            type="text"
            // component={(event: any) => this.setState({deliveryData: event.target.value})}
            required
            validate={{ message: "only letters" }}
            onChange={event => this.props.handleChange("givenName", event.target.value)}
            // value="firstName"
          />
          <FormField
            name="family-name"
            label="Last Name"
            // placeholder="Last Name"
            type="text"
            required
            validate={{ message: "only letters" }}
            onChange={event => this.props.handleChange("familyName", event.target.value)}
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
            onChange={event => this.props.handleChange("tel", event.target.value)}
            // value={this.state.deliveryData.tel}

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
          {/* <Button
            type="submit"
            color="dark-1"
            alignSelf="center"
            primary
            label="CONFIRM & CONTINUE"
            // onClick={() => validateInput}
          /> */}
        </Form>
      </Box>
    );
  }
}
