import React from "react";
import { Box, Text, Form, FormField, Button } from "grommet";
import { Home } from "grommet-icons";

interface Props{
  // validateInput: string
  
}

interface State{
    // value: any
  // event: any
  // validateInput: (event: React.FormEvent<HTMLInputElement>) => void;
  // fieldData: any
  // formData: any

}
export default class DeliveryBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    // this.state = {value: ""}
  }

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
            // onSubmit={event => event.preventDefault()}
          // validate="submit"
          autoComplete="on"
          // onSubmit=""
          // onSubmit={() => console.log(formData)}
          // onSubmit={({ value: nextValue }) => console.log(nextValue)}
            // console.log("validating form field");
            // console.log("fieldData", fieldData);
            // console.log("formData", formData); // 'formData' is undefined
          
          
          >
            <FormField
              name="given-name"
              label="First Name"
              // placeholder="Type your first name here"
              type="text"
              required
              validate={{ message:"only letters" }}
              // value=""
            />
            <FormField
              name="family-name"
              label="Last Name"
              // placeholder="Type your last name here"
              type="text"
              required             
              validate={{ message:"only letters" }}
              // value=""
            />
            <FormField
              name="email"
              label="Email"
              // placeholder="Type your email here"
              type="email"
              required
              // value=""
              validate={(fieldData, formData) => {
                console.log("validating form field");
                console.log("fieldData", fieldData);
                console.log("formData", formData); // 'formData' is undefined
              }}
              // pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
              // validate={{ regexp: [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}}
            />
            <FormField
              name="tel"
              label="Phone Number"
              // placeholder="Type your phone number here"
              type="tel"
              required
              validate={{ regexp: /^[0-9]{10}$/, message: '10 digits' }}
              // value=""
            />
            <FormField
              name="street-address"
              label="Address"
              // placeholder="Type your address here"
              type="text"
              validate={{ message:"Ex: Storgatan 1" }}
              required              
              // value=""
            />
            <FormField
              name="address-level2"
              label="City"
              // placeholder="Type your city here"
              type="text"
              required
              // value=""
            />
            <FormField
              name="postal-code"
              label="Postal Code"
              // placeholder="Type your postal code here"
              type=""
              required
              validate={{ regexp: /^[0-9]{5}$/, message: '5 digits' }}
              // value=""
            />
          <Button
            type="submit"
            color="dark-1"
            alignSelf="center"
            primary
            label="CONFIRM & CONTINUE"
            // onClick={() => validateInput}
          />
          </Form>
        </Box>
    );
  }
}
