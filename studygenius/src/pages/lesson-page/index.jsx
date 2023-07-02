import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LessonNavigate from "./sublesson/navigate/index";
import lessonRoutes from "../../routes/lessonRoutes";
import { RouterProvider } from 'react-router-dom';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

      

function lesson() {
    return (
        <>
        <Container maxWidth="lg">
            <Box sx={{paddingTop: '20px'}}>
                   <RouterProvider router={lessonRoutes}/>          
            </Box>
        </Container>
        </>
    )
}

export default lesson