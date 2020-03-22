import React from "react"
import { Grommet, Box, Text, RadioButtonGroup, Button } from "grommet"
import { Money } from "grommet-icons";
import { grommet } from "grommet/themes"

export default class PaymentBox extends React.Component<{}, {}> {

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
                    justify="between"
                    width="large"
                    >
                    <Text
                    size="large"
                    alignSelf="start"
                    weight="bold"
                    >Payment
                    </Text>
                    <Money
                    color="brand"
                    ></Money>
                    </Box>
                    <RadioButtonGroup
                        name="paymentOptions"
                        options={[
                            {
                              "disabled": false,
                              "id": "pay1",
                              "value": "1",
                              "label": "Swish"
                            },
                            {
                              "disabled": false,
                              "id": "pay2",
                              "value": "2",
                              "label": "Mastercard/VISA"
                            },
                            {
                                "disabled": false,
                                "id": "pay3",
                                "value": "3",
                                "label": "Klarna"
                              }

                          ]}
                        />
                    <Button type="submit" alignSelf="center" primary label="COMPLETE PURCHASE" />
                </Box>
            </Grommet>
        )
    }
}