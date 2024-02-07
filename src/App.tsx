import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  SignIn,
} from "./pages";
import { Dashboard } from "./pages/dashboard/dashboard";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
  { path: "", element: <Home></Home> },
  { path: "dashboard", element: <Dashboard></Dashboard> }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
