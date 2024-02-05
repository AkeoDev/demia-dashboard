import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  SignIn,
} from "./pages";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
