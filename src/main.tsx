import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = "https://capston.dev-changseop.site"
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);