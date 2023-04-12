import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme, themeDark } from "../src/utils/themeConfig";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service worker registered:", registration);
      })
      .catch((error) => {
        console.log("Service worker registration failed:", error);
      });
  });

  // check network status
  window.addEventListener("online", () => {
    console.log("You are now online.");
  });
  window.addEventListener("offline", () => {
    console.log("You are now offline.");
  });
} else {
  console.log("Service workers are not supported.");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
