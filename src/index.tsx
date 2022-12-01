import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./libs/utilities/store";
import App from "./root/App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
