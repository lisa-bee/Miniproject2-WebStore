import React from "react";
import { Grommet, Box } from "grommet";
import { grommet } from "grommet/themes"



export default class CheckoutPage extends React.Component<{}, {}> {
  render () {
    return (
      <Grommet theme={grommet}>
        <Box
          direction="column"
          justify="center"
          align="center"
          background="light-5"
          pad="xlarge"
          height="medium"
        >
        
        </Box>
      </Grommet>
    )
  }
}