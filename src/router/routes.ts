import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Home,
  },
];

export default createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
