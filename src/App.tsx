import React from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import "./App.css";
import ProductPage from "./Components/ProductPage";
import CheckoutPage from "./Components/CheckoutPage";
import Header1 from "./Components/Header";
import StartPage from "./Components/StartPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <Grommet theme={grommet}>
            <Header1 />
            <Switch>
              <Route path="/productpage/:productIndex" component={ProductPage}>
                {/* <ProductPage component={/> */}
              </Route>
              <Route path="/checkoutpage/" component={CheckoutPage}>
              </Route>
              <Route path="/">
                <StartPage />
              </Route>
            </Switch>
          </Grommet>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
