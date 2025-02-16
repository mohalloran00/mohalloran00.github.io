import { createHashRouter } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Layout from './Layout';
import Outreach from '../components/Outreach';

const router = createHashRouter([
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
        path: '/outreach',
        element: <Outreach />,
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
