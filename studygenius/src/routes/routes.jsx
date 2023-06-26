import { createBrowserRouter } from 'react-router-dom';

import Catalog from "../components/catalog/index";

import ErrorRoutePages from "../components/ErrorRoutePages/index";
import TeachingPage from '../pages/teaching-page/TeachingPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Catalog /> ,
      errorElement: <ErrorRoutePages />
    },
    {
      path: '/teach/courses',
      element: <TeachingPage/>,
      errorElement: <ErrorRoutePages/>
    }
    // {
    //   path: "/objectInfo",
    //   element: ,
    // },
    // {
    //   path: "/service",
    //   element: ,
    // },
  ]);

export default router