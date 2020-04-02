import React from "react";
import { Box, Text, Form, FormField } from "grommet";
import { Home } from "grommet-icons";

interface Props {
  handleChange: (name: string, value: string) => void;
}

interface State {}
export default class DeliveryBox extends React.Component<Props, State> {
  render() {
    return (
      <Box pad="large" gap="large" width="large" background="light-1">
        <Box direction="row" width="large" justify="between">
          <Text size="large" weight="bold">
            Delivery
          </Text>
          <Home color="brand"></Home>
        </Box>

        <Form validate="blur" autoComplete="on">
          <FormField
            name="given-name"
            autoComplete="given-name"
            label="First Name"
            type="text"
            required
            validate={{ message: "only letters" }}
            onChange={event =>
              this.props.handleChange("givenName", event.target.value)
            }
          />
          <FormField
            name="family-name"
            autoComplete="family-name"
            label="Last Name"
            type="text"
            required
            validate={{ message: "only letters" }}
            onChange={event =>
              this.props.handleChange("familyName", event.target.value)
            }
          />
          <FormField
            name="email"
            autoComplete="email"
            label="Email"
            type="email"
            required
            validate={{ message: "@" }}
            onChange={event =>
              this.props.handleChange("email", event.target.value)
            }
          />
          <FormField
            name="tel"
            autoComplete="tel"
            label="Phone Number"
            type="tel"
            required
            validate={{ regexp: /^[0-9]{10}$/, message: "10 digits" }}
            onChange={event =>
              this.props.handleChange("tel", event.target.value)
            }
          />
          <FormField
            name="street-address"
            autoComplete="street-address"
            label="Address"
            type="text"
            validate={{ message: "Ex: Storgatan 1" }}
            required
            onChange={event =>
              this.props.handleChange("streetAddress", event.target.value)
            }
          />
          <FormField
            name="postal-code"
            autoComplete="postal-code"
            label="Postal Code"
            type=""
            required
            validate={{ regexp: /^[0-9]{5}$/, message: "5 digits" }}
            onChange={event =>
              this.props.handleChange("postalCode", event.target.value)
            }
          />
          <FormField
            name="address-level2"
            autoComplete="address-level2"
            label="City"
            type="text"
            required
            validate={{ message: "only letters" }}
            onChange={event =>
              this.props.handleChange("city", event.target.value)
            }
          />
        </Form>
      </Box>
    );
  }
}
