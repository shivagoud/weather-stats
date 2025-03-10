import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import TimeSeriesChart from "./components/TimeSeriesChart";
import History from "./components/History";

const rootRoute = createRootRoute({
  component: Header,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TimeSeriesChart,
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: History,
});

const uploadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/upload",
  component: FileUpload,
});

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  historyRoute,
  uploadRoute,
]);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({ routeTree });
