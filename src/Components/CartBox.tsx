import React from "react";
import {
  Box,
  Text,
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
        {({
          items,
          getTotalPrice,
          getTotalQuantity,
          removeOneProduct,
          addProductToCart,
          deleteProductFromCart
        }) => (
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
                      <strong>Items</strong>
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                      <strong></strong>
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
                  {items.map(product => {
                    return (
                      <TableRow>
                        <TableCell scope="row">
                          <img
                            src={product.product.image}
                            style={{ width: "1.9rem", height: "2.65rem" }}
                          />
                        </TableCell>
                        <TableCell>{product.product.title}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>
                          {product.product.price * product.quantity} SEK
                        </TableCell>
                        <TableCell>
                          <FormAdd
                            onClick={() => addProductToCart(product.product)}
                          ></FormAdd>
                          <FormSubtract
                            onClick={() => removeOneProduct(product.product)}
                          ></FormSubtract>
                          <FormTrash
                            onClick={() =>
                              deleteProductFromCart(product.product)
                            }
                          ></FormTrash>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableCell border="bottom"></TableCell>
                  <TableCell border="bottom"></TableCell>
                  <TableCell border="bottom"></TableCell>
                  <TableCell border="bottom"></TableCell>
                  <TableRow>
                    <TableCell scope="row">
                      <strong>Total</strong>
                    </TableCell>
                    <TableCell scope="row">
                      <strong></strong>
                    </TableCell>
                    <TableCell>
                      <strong>{getTotalQuantity()}</strong>
                    </TableCell>
                    <TableCell>
                      <strong>{getTotalPrice()} SEK</strong>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            {/* <Button
              type="submit"
              alignSelf="center"
              primary
              label="CONFIRM & CONTINUE"
              color="dark-1"
            /> */}
          </Box>
        )}
      </CartConsumer>
    );
  }
}
