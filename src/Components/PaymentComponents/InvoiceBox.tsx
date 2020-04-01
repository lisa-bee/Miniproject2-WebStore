import React from "react";
import { Box, Form, FormField } from "grommet";

interface Props {

}

interface State {

}

export default class InvoiceBox extends React.Component<Props, State> {
  render() {
    return (
      <Box>
        <Form autoComplete="on" validate="blur">
          <FormField
            name="email"
            label="Email"
            type="text"
            required
            autoComplete="email"
          />
        </Form>
      </Box>
    );
  }
}