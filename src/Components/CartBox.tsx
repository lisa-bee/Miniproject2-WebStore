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
import { Product } from "./AllProducts";

interface Props {
  product: Product;
}

interface State {}

export default class CartBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
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
                      {items.map(product => {
                        console.log(product.product.title);
                      })}
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
                    <TableCell scope="row"></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <FormAdd></FormAdd>
                      <FormSubtract></FormSubtract>
                      <FormTrash></FormTrash>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">Lion</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
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
                    <TableCell border="bottom"></TableCell>
                    <TableCell border="bottom"></TableCell>
                    <TableCell>
                      <FormAdd></FormAdd>
                      <FormSubtract></FormSubtract>
                      <FormTrash></FormTrash>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <strong>Total</strong>
                    </TableCell>
                    <TableCell>
                      <strong>{items.length}</strong>
                    </TableCell>
                    <TableCell>
                      <strong></strong>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Button
              onClick={() => addProductToCart(this.props.product)}
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
