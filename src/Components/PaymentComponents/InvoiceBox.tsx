import React from "react";
import { FormField } from "grommet";

interface Props {

}

interface State {

}

export default class InvoiceBox extends React.Component<Props, State> {
  render() {
    return (
          <FormField
            name="email"
            label="Email"
            type="text"
            required
            autoComplete="email"
          />
    );
  }
}