import React, { CSSProperties } from "react";
import { Grommet, Box, Button, Text, Menu } from "grommet";
import { grommet } from "grommet/themes";


interface State {
isOpen: Boolean
}

interface Props {

}

export default class ProductInfoBox extends React.Component<Props, State> {
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
      <div>
        {this.state.isOpen &&
        <div className="cartMessage" style={cartMessage}>
          
        </div>}
      <Grommet theme={grommet}>
        <Box pad="medium" gap="medium" width="medium">
          <Text>GRAYSCALE NR1 </Text>
          <Text size={"20pt"}>249 SEK</Text>
          <Text>Size: 70x100 </Text>
          <Menu
            label="Quantity"
            items={[
              { label: "1", onClick: () => {} },
              { label: "2" },
              { label: "3" },
              { label: "4" }
            ]}
          />
          <Button
            primary
            color="dark-1"
            label="Add to cart"
            onClick={() => {
              this.handleCartClick();
            }}
          ></Button>
          <Text size={"12pt"}>PRODUCT INFO</Text>
          <Text size={"10pt"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, iusto, consectetur incidunt neque facere nobis
            repellat, non tenetur sed quas quos molestias a! Iure consequuntur
            illum odit, incidunt labore quam.
          </Text>
        </Box>
      </Grommet>
      </div>
    );
  }
}


const cartMessage: CSSProperties = {
  display: "flex",
  zIndex: 1,
  position: "absolute", 
  justifyContent: "center", 
  alignItems: "center",
}