import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Activity, AllProjects,  Dashboard,  SignIn } from "./pages";
import { Notifications } from "./pages/Notifications/Notifications";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "projects", element: <AllProjects /> },
  { path: "activity", element: <Activity /> },
  { path: "projects/:projectSlug", element: <Dashboard />},
  { path: "notifications", element: <Notifications /> },
  { path: "", element: <Dashboard />}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
