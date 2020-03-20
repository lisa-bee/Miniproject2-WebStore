import React from "react"
import { Grommet, Box, Text, RadioButtonGroup, Button } from "grommet"
import { grommet } from "grommet/themes"


export default class ShippingBox extends React.Component<{}, {}> {

    render() {
        return(
            <Grommet theme={grommet}>
                <Box
                pad="xlarge"
                gap="large"
                width="large"
                background="light-1"
                >   
                    <Text
                    size="large"
                    alignSelf="start"
                    weight="bold"
                    >Shipping
                    </Text>
                    <RadioButtonGroup
                        name="deliveryOptions"
                        options={[
                            {
                              "disabled": false,
                              "id": "one",
                              "value": "1",
                              "label": "PostNord (6-7 years) + 0 SEK"
                            },
                            {
                              "disabled": false,
                              "id": "two",
                              "value": "2",
                              "label": "DHL (2-3 days) + 49 SEK"
                            },
                            {
                                "disabled": false,
                                "id": "three",
                                "value": "3",
                                "label": "Schenker (3-5 days) + 29 SEK"
                              }

                          ]}
                        />
                    <Button type="submit" primary label="CONFIRM & CONTINUE" />
                </Box>
            </Grommet>
        )
    }
}