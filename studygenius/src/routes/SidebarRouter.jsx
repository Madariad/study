import Edit from '../components/teaching/components/pages/Edit/Edit';
import { createBrowserRouter } from 'react-router-dom';

import Catalog from "../components/catalog/index";

import ErrorRoutePages from "../components/ErrorRoutePages/index";
import Courses from '../components/teaching/components/courses/Courses';
import CreateCourse from '../components/teaching/components/createcourse/CreateCourse';
import Syllabus from '../components/teaching/components/pages/syllabus/Syllabus';
import TeachingPage from '../pages/teaching-page/TeachingPage';
import Description from '../components/teaching/components/pages/Description/Description';
import CourseEdit from '../components/teaching/components/pages/CourseEdit/CourseEdit';


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
    },
    {
      path: '/courses/:id/syllabus',
      element: <Syllabus/>,
      errorElement: <ErrorRoutePages/>
    },
    {
      path: '/courses/:id/edit',
      element: <Edit/>,
      errorElement: <ErrorRoutePages/>
    },
    {
      path: '/courses/:id/description',
      element: <Description/>,
      errorElement: <ErrorRoutePages/>
    },
    {
      path: '/courses/:id/edit-course',
      element: <CourseEdit/>,
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