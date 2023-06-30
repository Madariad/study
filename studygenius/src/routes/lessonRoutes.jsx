import { createBrowserRouter } from 'react-router-dom';
import Lessons from "../pages/lesson-page/lesson/index";

const lessonRouter = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <Catalog/>,
    //     errorElement: <ErrorRoutePages/>
    // },
    {
        path: "/:courseId/lessons",
        element: <Lessons/> ,
        // errorElement: <ErrorRoutePages />
      },  
])

export default lessonRouter