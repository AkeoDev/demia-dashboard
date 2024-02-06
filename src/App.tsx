import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard, SignIn } from "./pages";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
  { path: "dashboard", element: <Dashboard /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
