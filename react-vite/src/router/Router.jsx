import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/research',
    element: <h1>Research</h1>,
  },
  { path: '/:pagename', element: <h1>placeholder</h1> },
]);

export default router;
