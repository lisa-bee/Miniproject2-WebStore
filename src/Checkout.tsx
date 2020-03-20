import React from "react";
import { Box, Grommet } from "grommet";

interface Props {

}

class CheckoutComponent extends React.Component <Props> {
  
  const AppBar = {props} => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="light-2"
      pad={{ vertical: "small", horizontal: "medium" }}
      elevation="medium"
      {...props}
      />
  )



export default CheckoutComponent;