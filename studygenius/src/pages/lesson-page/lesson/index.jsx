import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LessonCard from './components/lessonsCard';
import Grid from '@mui/material/Grid'




function lesson() {
    const params = useParams()
    // console.log(params.courseId);
    const dispath = useDispatch()
    useEffect(() => {
        function getLessons() {
            dispath({type: 'GET_LESSONS' , courseId: params.courseId })
        }

        getLessons()
    }, [dispath])

    const lessons = useSelector((state) => state.lessons.lessonsList)
    // console.log(lessons[0].lesson_id);
    return (
        <>
        <Grid container spacing={2}>
            {lessons !== null ? lessons.map((lesson) => 
            (
             <Grid xs={4}>
                <Box component={'a'} href={`/${lesson.lesson_id}/sublessons`}>
                   <LessonCard title={lesson.lesson_title} subtitle={lesson.lesson_content}/>
                </Box>
             </Grid>

            )) : <Box>UI</Box>}
        </Grid>
          
        </>
    )
}

export default lesson