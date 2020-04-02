import React from "react";
import { Box, Text, TextInput } from "grommet";

interface Props {
    phoneNumber: string;
}

interface State {

}

export default class SwishBox extends React.Component<Props, State> {
    render() {
        return (
            <Box>
            {/* <Text>Swish number: <strong>{this.props.phoneNumber}</strong></Text> */}
                <TextInput placeholder="Swish number" value={this.props.phoneNumber} maxLength={10} />
            </Box>
        );
    }
}
