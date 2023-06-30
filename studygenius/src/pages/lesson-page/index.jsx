import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LessonNavigate from "./navigate/index";
import lessonRoutes from "../../routes/lessonRoutes";
import { RouterProvider } from 'react-router-dom';
      

function lesson() {
    return (
        <>
           {/* <Box sx={{paddingTop: '158px'}}>
           <Typography variant="h1" color="initial" >В разработке!!!</Typography>

           </Box> */}
           <LessonNavigate />
           <RouterProvider router={lessonRoutes}/>
        </>
    )
}

export default lesson