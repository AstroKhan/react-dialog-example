import React from "react";
import ReactDOM from "react-dom/client";
import WebFontLoader from "webfontloader";

import App from "./App";
import "./css/index.css";

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);