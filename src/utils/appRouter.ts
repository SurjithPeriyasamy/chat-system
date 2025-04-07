import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import App from "../App";
import Browse from "../components/Browse";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Browse,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
