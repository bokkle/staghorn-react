import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './components/home/Home';
import PageNotFound from './components/pagenotfound/PageNotFound';
import Privacy from './components/privacy/Privacy';
import TOS from './components/tos/TOS';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: 'privacy-policy',
    element: <Privacy />,
  },
  {
    path: 'tos',
    element: <TOS />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
