import React from "react";
import { TextInput } from "grommet";

interface Props {
  phoneNumber: string;
}

interface State {}

export default class SwishBox extends React.Component<Props, State> {
  render() {
    return (
      <TextInput
        required
        placeholder="Swish number"
        value={this.props.phoneNumber}
      />
    );
  }
}
