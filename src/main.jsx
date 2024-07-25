import React from "react";
import ReactDOM from "react-dom/client";
import router from "../routes/routes";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { AppProvider } from "../context/productContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
