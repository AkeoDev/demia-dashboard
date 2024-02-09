import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Activity,
  AllProjects,
  Dashboard,
  Notifications,
  SignIn,
  Users
} from './pages';
import products from './assets/json/projects.json';
import { IProject } from './utils/types/Project';

const router = createBrowserRouter([
  { path: 'sign-in', element: <SignIn /> },
  { path: ':slug', element: <Dashboard />,
  loader: async ({params}) => {
    return (products as unknown as IProject[]).find((project: IProject) => project.slug === params.slug)
  },
  children: [
        { path: 'activity', element: <Activity /> },
        { path: 'users', element: <Users /> },
        { path: 'notifications', element: <Notifications /> },
  ]
  },
  { path: '', element: <AllProjects /> }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
