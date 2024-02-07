import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AllProjects, Dashboard, SignIn } from "./pages";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "projects", element: <AllProjects /> },
  { path: "projects/:projectSlug", element: <Dashboard />}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
