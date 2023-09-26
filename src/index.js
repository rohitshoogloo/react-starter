import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//main css
import "./index.css";

//router
import { router } from "./router";
import { DarkThemeProvider } from "./context/DarkThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkThemeProvider>
      <RouterProvider router={router} />
    </DarkThemeProvider>
  </React.StrictMode>
);
