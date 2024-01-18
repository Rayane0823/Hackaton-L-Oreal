import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import TopProduct from "./pages/TopProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    },
    children: [
      {
        path: "/top-product",
        element: <TopProduct />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
