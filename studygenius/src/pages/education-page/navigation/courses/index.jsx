import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from "../../../../components/catalog/components/tab/card/index";

function Courses() {
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
      Array.isArray(userData.subscribed_courses) &&
      userData.subscribed_courses.length > 0
    ) {
      const matchedCourses = []; // Создаем пустой массив для хранения соответствующих курсов
      for (let i = 0; i < courseList.length; i++) {
        const element = courseList[i].course_id;
        for (let j = 0; j < userData.subscribed_courses.length; j++) {
          const elem = userData.subscribed_courses[j];
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
  {course !== null && course.length > 0 ? (
    course.map((cours) => (
      <Grid item xs={12} sm={6} md={4} key={cours.course_id}>
         <div className="main">
      <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
              <img src={cours.course_image  === null ? "../../../../../public/img/react.png" :  `http://localhost:5000/api/v1/course/img/${cours.course_image}`}/>
              </div>
              <Box className="card_content" sx={{ backgroundColor: '#add6ff' }}>
                <h2 className="card_title">
                  {cours.course_name}
                </h2>
                <p className="card_text">
                  {cours.course_description}
                </p>
                <Link to={`/${cours.course_id}/course`} style={{textDecoration: 'none'}}>
                  <Box component='button' sx={{ backgroundColor: '#6c6' }}  className="btn card_btn">Продолжит</Box>
                </Link>
              </Box>
            </div>
          </li>
      </ul>
    </div>
      </Grid>
    ))
  ) : (
    <Grid item xs={12}>
      <Typography variant="subtitle1">No courses available</Typography>
    </Grid>
  )}
</Grid>


    </>
  );
}

export default Courses;
