import { createBrowserRouter } from 'react-router-dom';
import Lessons from "../pages/lesson-page/lesson/index";
import SubLesson from "../pages/lesson-page/sublesson/index";

const lessonRouter = createBrowserRouter([

    {
        path: "/:courseId/lessons",
        element: <Lessons /> ,
        // errorElement: <ErrorRoutePages />
      },  
      // {
      //   path: "/:lessonId/sublessons",
      //   element: <SubLesson /> ,
      //   // errorElement: <ErrorRoutePages />
      // },  
])

export default lessonRouter