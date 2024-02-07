import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Activity, AllProjects,  SignIn } from "./pages";
import { Dashboard } from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "projects", element: <AllProjects /> },
  { path: "activity", element: <Activity /> },
  { path: "projects/:projectSlug", element: <Dashboard />}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
