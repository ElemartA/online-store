import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ProductStore from "./store/ProductStore.js";
import UserStore from "./store/UserStore.js";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      product: new ProductStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
