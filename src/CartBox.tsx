import React from "react"
import { Grommet, Box, Text, Button } from "grommet"
import { Cart } from "grommet-icons"
import { grommet } from "grommet/themes"

export default class CartBox extends React.Component<{}, {}> {

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
                    >Cart
                    </Text>
                    <Cart
                    color="brand"
                    >
                    </Cart>
                    </Box>
                    <Button type="submit" primary label="CONFIRM & CONTINUE" />
                </Box>
            </Grommet>
        )
    }
}