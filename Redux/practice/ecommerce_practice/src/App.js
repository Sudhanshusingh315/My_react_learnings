import React, { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./features/Product/Product";
import { Cart } from "./features/cart/Cart";

function App() {
  const [showcart, setShowCart] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowCart(!showcart)}>
        {showcart ? "hide cart" : "show cart"}
      </button>
      {showcart ? <Cart /> : <Product />}
    </div>
  );
}

export default App;
