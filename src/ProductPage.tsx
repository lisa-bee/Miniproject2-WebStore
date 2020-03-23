import React, { CSSProperties } from "react";
import { Grommet, Box } from "grommet";
import { grommet } from "grommet/themes";
import ImageBox from "./ImageBox";
import ProductInfoBox from "./ProductInfoBox";


interface State {
  isOpen: Boolean
  }

interface Props {

}
export default class ProductPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }


  handleCartClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
   }

  render() {
    return (
      <div style={container}>
      <Grommet theme={grommet}>
        <Box
          direction="row-responsive"
          justify="center"
          align="center"
          pad="large"
          background="light-1"
        >
          {this.state.isOpen &&
        <Box background="dark-5" height="small" width="medium" className="cartMessage" style={cartMessage}>
         Continue shopping or go to cart? 
        </Box>}
        <ImageBox />
        <ProductInfoBox handleCartClick={this.handleCartClick()} />
        </Box>
      </Grommet>
      </div>
    );
  }
}


const container: CSSProperties = {
 
}

const cartMessage: CSSProperties = {
  display: "flex",
  zIndex: 1,
  position: "absolute", 
  justifyContent: "center", 
  alignItems: "center",
}