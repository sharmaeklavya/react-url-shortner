import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
