import React from "react";
import {
  Box,
  Text,
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody
} from "grommet";
import { Cart, FormAdd, FormSubtract, FormTrash } from "grommet-icons";
import { CartConsumer } from "../contexts/CartContext";

interface Props {}

interface State {
  items: any[];
}

export default class CartBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: []
    };
  }

  /* addItemsToCart = () => {
   this.state.items.push("Product");
   this.forceUpdate();
   console.log(this.state.items)
    
  } */

  render() {
    return (
      <CartConsumer>
        {({ items, addProductToCart }) => (
          <Box pad="xlarge" gap="large" width="large" background="light-1">
            <Box direction="row" width="large" justify="between">
              <Text size="large" weight="bold">
                Cart
              </Text>
              <Cart color="brand"></Cart>
            </Box>
            <Box>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell scope="col" border="bottom">
                      <strong>Product</strong>
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                      <strong>Quantity</strong>
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                      <strong>Price</strong>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell scope="row">{items}</TableCell>
                    {/* <TableCell>1</TableCell>
                  <TableCell>299 SEK</TableCell>
                  <TableCell>
                    <FormAdd></FormAdd>
                    <FormSubtract></FormSubtract>
                    <FormTrash></FormTrash>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">Lion</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>379 SEK</TableCell>
                  <TableCell>
                    <FormAdd></FormAdd>
                    <FormSubtract></FormSubtract>
                    <FormTrash></FormTrash>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row" border="bottom">
                    Nature
                  </TableCell>
                  <TableCell border="bottom">1</TableCell>
                  <TableCell border="bottom">199 SEK</TableCell>
                  <TableCell>
                    <FormAdd></FormAdd>
                    <FormSubtract></FormSubtract>
                    <FormTrash></FormTrash>
                  </TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <strong>Total</strong>
                    </TableCell>
                    <TableCell>
                      <strong>3</strong>
                    </TableCell>
                    <TableCell>
                      <strong>877 SEK</strong>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Button
              onClick={() => addProductToCart}
              type="submit"
              alignSelf="center"
              primary
              label="CONFIRM & CONTINUE"
              color="dark-1"
            />
          </Box>
        )}
      </CartConsumer>
    );
  }
}