import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router";
import ListView from "../pages/ListView";
import DetailView from "../pages/DetailView";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ListView />,
  },
  {
    path: "/detail",
    element: <DetailView />,
  },
];

const AppRouter: RemixRouter = createBrowserRouter(routes);

export default AppRouter;
