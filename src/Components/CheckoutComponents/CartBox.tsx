import React, { CSSProperties } from "react";
import {
  Box,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  ResponsiveContext
} from "grommet";
import { Cart, FormAdd, FormSubtract, FormTrash } from "grommet-icons";
import { CartConsumer } from "../../contexts/CartContext";
import { Product } from "../ProductComponents/AllProducts";

interface Props {
  product: Product;
}

interface State {}

export default class CartBox extends React.Component<Props, State> {
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
          <ResponsiveContext.Consumer>
            {size => (
              <Box pad="large" gap="large" width="large" background="light-1">
                <Box direction="row" width="large" justify="between">
                  <Text size="large" weight="bold">
                    Cart
                  </Text>
                  <Cart color="brand"></Cart>
                </Box>
                <Box style={cartboxContainer(size)}>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableCell scope="col" border="bottom">
                          <strong>Items</strong>
                        </TableCell>
                        <TableCell size="xsmall" scope="col" border="bottom">
                          <strong></strong>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                          <strong>Qty</strong>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                          <strong>Price</strong>
                        </TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map(product => {
                        return (
                          <TableRow key={product.product.index}>
                            <TableCell scope="row">
                              <img
                                src={product.product.image}
                                style={{ width: "1.9rem", height: "2.65rem" }}
                              />
                            </TableCell>
                            <TableCell size="small">
                              {product.product.title}
                            </TableCell>
                            <TableCell>{product.quantity}</TableCell>
                            <TableCell>
                              {product.product.price * product.quantity} SEK
                            </TableCell>
                            <TableCell>
                              <FormAdd
                                onClick={() =>
                                  addProductToCart(product.product)
                                }
                              ></FormAdd>
                              <FormSubtract
                                onClick={() =>
                                  removeOneProduct(product.product)
                                }
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
                      <TableRow>
                        <TableCell border="bottom"></TableCell>
                        <TableCell border="bottom"></TableCell>
                        <TableCell border="bottom"></TableCell>
                        <TableCell border="bottom"></TableCell>
                      </TableRow>
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
              </Box>
            )}
          </ResponsiveContext.Consumer>
        )}
      </CartConsumer>
    );
  }
}

const cartboxContainer = (size: string): CSSProperties => ({
  fontSize: size == "small" ? "8pt" : size == "medium" ? "12pt" : "16pt"
});
