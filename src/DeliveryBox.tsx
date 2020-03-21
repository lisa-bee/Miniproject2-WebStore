import React from "react"
import { Grommet, Box, Text, Form, FormField, Button } from "grommet"
import { Home } from "grommet-icons";
import { grommet } from "grommet/themes"

export default class DeliveryBox extends React.Component<{}, {}> {

    render() {
        return(
            <Grommet theme={grommet}>
                <Box
                pad="xlarge"
                gap="large"
                width="large"
                background="light-1"
                >                   
                    <Box
                    direction="row"
                    width="large"
                    justify="between"
                    >
                    <Text
                    size="large"
                    weight="bold"
                    >Delivery
                    </Text>
                    <Home
                    color="brand"
                    >
                    </Home>
                    </Box>

                    <Form>
                        <FormField name="firstName" label="First Name" />
                        <FormField name="lastName" label="Last Name" />
                        <FormField name="email" label="Email" />
                        <FormField name="phoneNumber" label="Phone Number" />
                        <FormField name="address" label="Address" />
                        <FormField name="city" label="City" />
                        <FormField name="postalCode" label="Postal Code" />
                        <Button fill="horizontal" type="submit" primary label="CONFIRM & CONTINUE" />
                    </Form>   
                </Box>

            </Grommet>
        )
    }
}