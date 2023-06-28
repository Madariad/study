import { createBrowserRouter } from 'react-router-dom';

import Test from "../pages/education-page/test";
import Courses from "../pages/education-page/navigation/courses/index";

import Catalog from "../components/catalog/index";

import ErrorRoutePages from "../components/ErrorRoutePages/index";




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
   

  ]);

export default educationRouter