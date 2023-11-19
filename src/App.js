import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Pages/Home';
import Layout from "./Layout";


function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;