import React from "react";
import { Box, Text } from "grommet";

interface Props {
    phoneNumber: string;
}

interface State {

}

export default class SwishBox extends React.Component<Props, State> {
    render() {
        return (
            <Box>
            <Text>Swish number: <strong>{this.props.phoneNumber}</strong></Text>
            {/* <input type="tel" placeholder="PhoneNumber" value={this.props.phoneNumber} /> */}
            </Box>
        );
    }
}