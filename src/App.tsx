import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Activity, AllProjects, Dashboard, SignIn } from "./pages";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "all-projects", element: <AllProjects /> },
  { path: "activity", element: <Activity /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
