import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Layout from './Layout';
import Sandbox from '../components/Sandbox/Sandbox';

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
        element: <h1>Page Under Construction</h1>,
      },
      {
        path: '/sandbox',
        element: <Sandbox />,
      },
      {
        path: '/outreach',
        element: <h1>Page Under Construction</h1>,
      },
      {
        path: '/mentoring',
        element: <h1>Page Under Construction</h1>,
      },
      {
        path: '/contact',
        element: <h1>Page Under Construction</h1>,
      },
      { path: '/:pagename', element: <h1>Page Not Found</h1> },
    ],
  },
]);

export default router;
