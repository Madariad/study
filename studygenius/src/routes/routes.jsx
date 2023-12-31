import { createBrowserRouter } from 'react-router-dom';

import Catalog from "../components/catalog/index";
// import Lessons from "../components/Lesson/LessonList/index";
import Course from "../components/Course/CourseList/index"
import SignIn from "../components/sign/signIn/index"

import LessonPage from "../pages/lesson-page/index";

import ErrorRoutePages from "../components/ErrorRoutePages/index";
import TeachingPage from '../pages/teaching-page/TeachingPage';
import EducationPage from "../pages/education-page/index";
import SubLesson from "../pages/lesson-page/sublesson/index";


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

      path: '/education',
      element: <EducationPage/>,
      errorElement: <ErrorRoutePages/>
    },
    {
      path: "/:courseId/course",
      element: <Course/> ,
      errorElement: <ErrorRoutePages/>,
    },
    // {
    //   path: "/:lessonId/sublessons",
    //   element: <SubLesson /> ,
    //   // errorElement: <ErrorRoutePages />
    // },
    // {
    //   path: "/:lessonId/sublessons",
    //   element: <SubLesson /> ,
    //   // errorElement: <ErrorRoutePages />
    // },  
    // {
    //   path: "/:courseId/lessons",
    //   element: <LessonPage/> ,
    //   errorElement: <ErrorRoutePages />
    // },
    {
      path: "/signin",
      element: <SignIn/> ,
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