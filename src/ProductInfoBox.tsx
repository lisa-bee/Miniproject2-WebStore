import React from "react";
import { Grommet, Box, Button, Text, Menu } from "grommet";
import { grommet } from "grommet/themes";
import { Close } from "grommet-icons";
import { Link } from "react-router-dom";

interface State {
  isOpen: Boolean;
}

interface Props {
  handleCartClick: () => void;
}

export default class ProductInfoBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <Grommet theme={grommet}>
          <Box pad="medium" gap="medium" width="medium" background="light-1">
            <Box direction="row" justify="between">
              <Text>GRAYSCALE NR1 </Text>
              <Link to="/">
              <Close />
              </Link>
            </Box>
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
              onClick={this.props.handleCartClick}
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
