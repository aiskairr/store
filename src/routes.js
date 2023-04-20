import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/basketPage/BasketPage";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/basket",
    element: <BasketPage />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
