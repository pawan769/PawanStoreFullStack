// import React from "react";
import ReactDOM from "react-dom/client";
import router from "../routes/routes";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { AppProvider } from "../context/productContext";
import { CartProvider } from "../context/cartContext";
import { FilterProvider } from "../context/filterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppProvider>
    <CartProvider>
      <FilterProvider>
        <RouterProvider router={router} />
      </FilterProvider>
    </CartProvider>
  </AppProvider>
  // </React.StrictMode>
);
