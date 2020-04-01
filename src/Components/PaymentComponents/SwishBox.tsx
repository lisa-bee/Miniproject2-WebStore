import React from "react";
import { Box, Text } from "grommet";

interface Props {

}

interface State {

}

export default class SwishBox extends React.Component<Props, State> {
    render() {
        return (
            <Box>
            {/* <Text>Swish number: {this.props.phoneNumber}</Text> */}
            {/* <input type="tel" placeholder="PhoneNumber" value={this.props.phoneNumber} /> */}
            </Box>
        );
    }
}