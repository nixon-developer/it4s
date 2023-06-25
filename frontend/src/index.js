// IMPORT PACKAGES
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

// IMPORT COMPONENTS
import App from "./App";
import store from "./redux/store";

// IMPORT UTILS
import ScrollTop from "./utils/ScrollTop";

// IMPORT SCSS
import "./index.scss";

// IMPORT BOOTSTRAP
import "./../node_modules/bootstrap/scss/bootstrap.scss";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../node_modules/bootstrap/dist/js/bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <ScrollTop />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </BrowserRouter>
  </Provider>
);
