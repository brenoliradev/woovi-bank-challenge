import { createBrowserRouter } from "react-router-dom";
import { Test } from "./components/Test";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <Test />,
    },
  ]);
