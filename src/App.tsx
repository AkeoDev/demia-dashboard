import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Activity, AllProjects,  CargoSensor,  Dashboard,  Notifications,  Sensors,  SignIn, Users } from "./pages";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "projects", element: <AllProjects /> },
  { path: "activity", element: <Activity /> },
  { path: "projects/:projectSlug", element: <Dashboard />},
  { path: "users", element: <Users />},
  { path: "notifications", element: <Notifications /> },
  { path: "data-sources", element: <Sensors /> },
  { path: "data-sources/:sensorLink", element: <CargoSensor />},
  { path: "", element: <Dashboard />}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
