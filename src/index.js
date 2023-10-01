import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//main css
import "./index.css";

//router
import { router } from "./router";
import { DarkThemeProvider } from "./context/DarkThemeContext";
import { GlobalSearchProvider } from "./context/GlobalSearchContext";
import { CartDrawerProvider } from "./context/CartDrawerContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkThemeProvider>
        <CartDrawerProvider>
          <GlobalSearchProvider>
            <RouterProvider router={router} />
          </GlobalSearchProvider>
        </CartDrawerProvider>
      </DarkThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
);
