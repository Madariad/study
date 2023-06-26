import { createBrowserRouter } from 'react-router-dom';

import Catalog from "../components/catalog/index";
import Lessons from "../components/lessons/index";
import Course from "../components/Course/CourseList/index"

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
    },
    {

      path: "/:courseId/courses",
      element: <Course/> ,
      errorElement: <ErrorRoutePages/>,
    },
    {
      path: "/:courseId/lessons",
      element: <Lessons/> ,
      errorElement: <ErrorRoutePages />
    },

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