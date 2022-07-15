import React from "react";
import ReactDOM from "react-dom/client";
import WebFontLoader from "webfontloader";
import dayjs from "dayjs";
import "dayjs/locale/ru";

import App from "./App";
import "./css/index.css";

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

dayjs.locale("ru");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);