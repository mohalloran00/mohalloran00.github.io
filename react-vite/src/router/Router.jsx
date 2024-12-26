import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/research',
        element: <h1>Research</h1>,
      },
      { path: '/:pagename', element: <h1>placeholder</h1> },
    ],
  },
]);

export default router;
