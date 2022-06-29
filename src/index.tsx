import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartContext } from "./context/CartContext";
import { ProductContext } from "./context/ProductContext";
// import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductContext>
      <CartContext>
        <App />
      </CartContext>
    </ProductContext>
  </React.StrictMode>
);

export default root;
