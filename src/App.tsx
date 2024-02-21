import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Activity,
  AllProjects,
  Analytics,
  Dashboard,
  Documentation,
  Notifications,
  Parameters,
  Sensors,
  SensorTemplates,
  SignIn,
  Users,
} from "./pages";
import products from "./assets/json/projects.json";
import { IProject } from "./utils/types/Project";

const router = createBrowserRouter([
  { path: "sign-in", element: <SignIn /> },
  {
    path: "projects/:slug",
    loader: async ({ params }) => {
      return {
        data: (products as unknown as IProject[]).find(
          (project: IProject) => project.slug === params.slug
        ),
        slug: params.slug,
      };
    },
    children: [
      { path: "", element: <Dashboard /> },
      { path: "activity", element: <Activity /> },
      { path: "users", element: <Users /> },
      { path: "notifications", element: <Notifications /> },
      { path: "documentation", element: <Documentation /> },
      { path: "users", element: <Users /> },
      { path: "data-sources/", element: <Sensors /> },
      { path: "data-sources/:sensorsSlug", element: <SensorTemplates /> },
      { path: "notifications", element: <Notifications /> },
      { path: "analytics", element: <Analytics /> },
      { path: "analytics/:analyticsSlug", element: <Parameters /> },
    ],
  },
  { path: "", element: <AllProjects /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
