import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";
// Define Routes
const routes = [
  {
    path: "/",
    element: <AppLayout />,
  },
];

// Create Router
export const AppRouter = createBrowserRouter(routes);
