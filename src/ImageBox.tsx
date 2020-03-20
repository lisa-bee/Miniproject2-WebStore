import React from "react"
import { Grommet, Box, Image } from "grommet";
import { grommet } from "grommet/themes";

export default class ImageBox extends React.Component<{}, {}> {
    render() {
        let image = require("./assets/image1.jpg")
        return(
            <Grommet theme={grommet}>
                <Box
                pad="large"
                align="center"
                background={{ color: 'light-5', opacity: 'strong' }}
                gap="small"
                width="medium"
                height="medium"
                >
                    <Image
                        fit="cover"
                        src={image}   
                    />
                </Box>
            </Grommet>
        )
    }

}