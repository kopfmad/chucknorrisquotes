import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Card from "./ComponentsAndStyles/Card";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Card></Card>
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
