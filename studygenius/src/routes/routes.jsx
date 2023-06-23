import { createBrowserRouter } from 'react-router-dom';

import Catalog from "../components/catalog/index";
import Lessons from "../components/lessons/index";
import Course from "../components/Course/CourseList/index"

import ErrorRoutePages from "../components/ErrorRoutePages/index";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Catalog /> ,
      errorElement: <ErrorRoutePages />
    },
    {
      path: "/:courseId",
      element: <Course/> ,
      errorElement: <ErrorRoutePages />
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