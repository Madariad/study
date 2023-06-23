import { createBrowserRouter } from 'react-router-dom';

import Catalog from "../components/catalog/index";

import ErrorRoutePages from "../components/ErrorRoutePages/index";
import Courses from '../components/teaching/components/courses/Courses';
import CreateCourse from '../components/teaching/components/createcourse/CreateCourse';
import TeachingPage from '../pages/teaching-page/TeachingPage';


const SidebarRouter = createBrowserRouter([
    {
        path: '/',
        element: <Catalog/>,
        errorElement: <ErrorRoutePages/>
    },
    {
      path: '/teach/courses/create',
      element: <CreateCourse/>,
      errorElement: <ErrorRoutePages/>
    },
    {
        path: '/teach/courses',
        element: <Courses/>,
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

export default SidebarRouter