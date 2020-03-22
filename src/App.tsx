import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import ProductPage from "./ProductPage";
import CheckoutPage from "./CheckoutPage";
import Header1 from "./Header";

function App() {
  return (
    <div className="App">
      <Header1 />
      <ProductPage />
      <CheckoutPage />
    </div>
  );
}

export default App;
