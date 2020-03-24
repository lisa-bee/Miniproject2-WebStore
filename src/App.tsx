import React from "react";
import { Grommet } from "grommet";
import "./App.css";
import ProductPage from "./ProductPage";
import CheckoutPage from "./CheckoutPage";
import Header1 from "./Header";
import StartPage from "./StartPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header1 />
        <Switch>
          <Route path="/productpage/">
            <ProductPage />
          </Route>
          <Route path="/checkoutpage/">
            <CheckoutPage />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
