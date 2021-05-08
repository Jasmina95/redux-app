import "./index.css";
import React from "react";
import { render } from "react-dom";
// Provider -> wrapper of our application
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import reducers from "./reducers";

render(
  // store is here property of provider
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
