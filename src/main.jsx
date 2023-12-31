import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routers.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className="max-w-screen-xl mx-auto bg-white">
      <RouterProvider router={router} />
    </div>
  </HelmetProvider>
);
