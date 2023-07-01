import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from "../../../../components/catalog/components/tab/card/index";


function favorites() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch({ type: 'GET_COURSE' });
    }, [dispatch]);
  
    const courseList = useSelector((state) => state.course.courseList);
    const userData = useSelector((state) => state.user.userData);
  
    const [course, setCourse] = useState(null);
    
    useEffect(() => {
      if (
        courseList !== null &&
        courseList.length > 0 &&
        userData &&
        Array.isArray(userData.chosen_course) &&
        userData.chosen_course.length > 0
      ) {
        const matchedCourses = []; // Создаем пустой массив для хранения соответствующих курсов
        for (let i = 0; i < courseList.length; i++) {
          const element = courseList[i].course_id;
          for (let j = 0; j < userData.chosen_course.length; j++) {
            const elem = userData.chosen_course[j];
            if (element === elem) {
              matchedCourses.push(courseList[i]); // Добавляем соответствующий курс в массив matchedCourses
              // break; // Выходим из цикла, как только найдено соответствие
            }
          }
        }
        setCourse(matchedCourses); // Устанавливаем массив matchedCourses в состояние course
      }
    }, [courseList, userData]);
    
    console.log(course);
  
    return (
      <>
         <Grid container spacing={2}>
                {course !== null ? course.map((cours) => ( 
                    <Grid item xs={12} sm={6} md={4} key={cours.course_id}>
                    <Card btnTxtCourse={'Пройти Курс'} description={cours.course_description} name={cours.course_name} id={cours.course_id} img={cours.course_image }/>         
                    </Grid>)) : <Grid item xs={12}>
                        <Typography variant="subtitle1">No courses available</Typography>
                    </Grid>}
            </Grid>

  
  
      </>
    );
  
  
}
export default favorites