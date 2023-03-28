import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Error from "./components/Error";
import ListProducts from "./components/ListProducts";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ListProducts url={``} home={true} />,
      },
      {
        path: "/products/classiccars",
        element: (
          <ListProducts url={`http://localhost:3000/products/classiccars`} />
        ),
      },
      {
        path: "/products/motorcycles",
        element: (
          <ListProducts url={`http://localhost:3000/products/motorcycles`} />
        ),
      },
      {
        path: "/products/planes",
        element: <ListProducts url={`http://localhost:3000/products/planes`} />,
      },
      {
        path: "/products/ships",
        element: <ListProducts url={`http://localhost:3000/products/ships`} />,
      },
      {
        path: "/products/trains",
        element: <ListProducts url={`http://localhost:3000/products/trains`} />,
      },
      {
        path: "/products/trucksandbuses",
        element: (
          <ListProducts url={`http://localhost:3000/products/trucksandbuses`} />
        ),
      },
      {
        path: "/products/vintagecars",
        element: (
          <ListProducts url={`http://localhost:3000/products/vintagecars`} />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
