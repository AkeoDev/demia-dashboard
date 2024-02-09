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

const router = createBrowserRouter([
  { path: 'sign-in', element: <SignIn /> },
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'projects', element: <AllProjects /> },
  { path: 'activity', element: <Activity /> },
  { path: 'projects/:slug', element: <Dashboard />,
    loader: async ({params}) => {
      let response = products.find((project: any) => project.slug === params.slug)
      return response
    }
  },
  { path: 'users', element: <Users /> },
  { path: 'notifications', element: <Notifications /> },
  { path: '', element: <AllProjects /> }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
