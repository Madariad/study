import { createBrowserRouter } from 'react-router-dom';

import Test from "../pages/education-page/test";
import Courses from "../pages/education-page/navigation/courses/index";

import Catalog from "../components/catalog/index";

import ErrorRoutePages from "../components/ErrorRoutePages/index";

import Course from "../components/Course/CourseList/index"

import Favorites from "../pages/education-page/navigation/favorites/index";


const educationRouter = createBrowserRouter([
    {
        path: '/',
        element: <Catalog/>,
        errorElement: <ErrorRoutePages/>
    },
    {
        path: '/education',
        element: <Test/>,
        errorElement: <ErrorRoutePages/>
    },  
    {
        path: '/education/courses',
        element: <Courses/>,
        errorElement: <ErrorRoutePages/>
    },
    {

        path: "/:courseId/course",
        element: <Course/> ,
        errorElement: <ErrorRoutePages/>,
      },  
      {

        path: "/education/favorites",
        element: <Favorites/> ,
        errorElement: <ErrorRoutePages/>,
      },

  ]);

export default educationRouter