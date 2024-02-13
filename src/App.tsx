import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Activity,
  AllProjects,
  Analytics,
  CargoSensor,
  Dashboard,
  Documentation,
  Feedstock,
  Flowmeter,
  Notifications,
  Sensors,
  SignIn,
  Users
} from './pages';
import products from './assets/json/projects.json';
import { IProject } from './utils/types/Project';

const router = createBrowserRouter([
  { path: 'sign-in', element: <SignIn /> },
  {
    path: ':slug',
    loader: async ({ params }) => {
      return (products as unknown as IProject[]).find(
        (project: IProject) => project.slug === params.slug
      );
    },
    children: [
      { path: "", element: <Dashboard /> },
      { path: 'activity', element: <Activity /> },
      { path: 'users', element: <Users /> },
      { path: 'notifications', element: <Notifications /> }
    ]
  },
  { path: 'users', element: <Users /> },
  { path: "data-sources", element: <Sensors /> },
  { path: "data-sources/flowmeter-1", element: <Flowmeter />},
  { path: "data-sources/cargo-sensor", element: <CargoSensor />},
  { path: "data-sources/feedstock", element: <Feedstock />},
  { path: 'notifications', element: <Notifications /> },
  { path: 'documentation', element: <Documentation /> },
  { path: 'analytics', element: <Analytics /> },
  { path: '', element: <AllProjects /> }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
