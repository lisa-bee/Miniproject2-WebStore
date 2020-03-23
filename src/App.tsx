import React from "react";
import "./App.css";
import ProductPage from "./ProductPage";
import CheckoutPage from "./CheckoutPage";
import Header1 from "./Header";
import StartPage from "./StartPage";

function App() {
  return (
    <div className="App">
      <Header1 />
      <StartPage />
      <ProductPage />
      <CheckoutPage />
    </div>
  );
}

export default App;
