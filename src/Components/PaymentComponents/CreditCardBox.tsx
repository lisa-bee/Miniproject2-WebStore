import React from "react";
import { Box, Form, FormField } from "grommet";

interface Props {

}

interface State {

}

export default class CreditCardBox extends React.Component<Props, State> {
    render() {
        return (
            <Box>
            <Form autoComplete="on" validate="blur">
                <FormField
                name="cardnumber"
                autoComplete="cc-number"
                label="Card Number"
                type="tel"
                required
                validate={{ regexp: /^[0-9]{16}$/, message: "16 digits" }}
                />
                <FormField
                name="ccmonth"
                autoComplete="cc-exp-month"
                label="Expiry Month"
                type="tel"
                required
                validate={{ regexp: /^[0-9]{2}$/, message: "2 digits" }}
                />
                <FormField
                name="ccyear"
                autoComplete="cc-exp-year"
                label="Expiry Year"
                type="tel"
                required
                validate={{ regexp: /^[0-9]{2}$/, message: "2 digits" }}
                />
                <FormField
                name="cvc"
                autoComplete="cc-csc"
                label="CVC2"
                type="tel"
                required
                validate={{ regexp: /^[0-9]{3}$/, message: "3 digits" }}
                />
                <FormField
                name="ccname"
                autoComplete="cc-name"
                label="Cardholder Name"
                type="text"
                required
                />
            </Form>
            </Box>
        );
    }
}
