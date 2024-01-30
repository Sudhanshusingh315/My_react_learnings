import React from "react";
import "./App.css";
import { Product } from "./features/products/Product";
import { Cart } from "./features/cart/Cart";
import { useState } from "react";
function App() {
  const [showcart, setShowCart] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowCart(!showcart)}>
        {showcart ? "Hide Cart" : "Show Cart"}
      </button>
      {showcart ? <Cart /> : <Product />}
    </div>
  );
}

export default App;
