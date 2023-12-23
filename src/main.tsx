import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "@/pages/login.tsx";
import App from "@/App.tsx";

import "@/index.css";
import Projects from "@/pages/projects.tsx";
import SingleProject from "@/pages/single-project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: "project/:id",
        element: <SingleProject />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
);
