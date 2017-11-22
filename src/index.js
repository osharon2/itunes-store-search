import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import ItemPage from "./components/ItemPage/ItemPage";
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" render={App} />
      <Route exact path="/:id" render={props => <ItemPage {...props} />} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
